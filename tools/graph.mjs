#!/usr/bin/env node
// What a page downloads before it can start: the static import graph from an entry module.
//
//   node tools/graph.mjs [entry]                 totals per package, and the CDN packages reached
//   node tools/graph.mjs [entry] --why <file>    the import chain that pulls a file (or CDN package) in
//
// Static imports only (`import … from`, `import '…'`, `export … from`): `import()` is what
// "loaded later" means, so it ends a branch. Bare specifiers are resolved like
// src/importmap.js does; anything not in this tree is counted as a CDN package by name.
import { readFileSync, existsSync, statSync } from 'node:fs'
import { resolve, dirname, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const whyAt = args.indexOf('--why')
const why = whyAt >= 0 ? args[whyAt + 1] : null
const entry = resolve(root, (whyAt === 0 ? null : args[0]) || 'mashlib/src/index.js')

const LOCAL = {
  'solid-ui': 'src/solid-ui.js', 'solid-ui/components': 'src/index.js', UI: 'src/solid-ui.js',
  'solid-panes': 'panes/solid-panes/src/index.js', 'profile-pane': 'panes/profile-pane/src/index.js',
  'folder-pane': 'panes/folder-pane/src/index.js', 'source-pane': 'panes/source-pane/src/index.js',
  'chat-pane': 'panes/chat-pane/src/index.js', 'contacts-pane': 'panes/contacts-pane/src/index.js',
  'issue-pane': 'panes/issue-pane/src/issuePane.js', 'meeting-pane': 'panes/meeting-pane/src/meetingPane.js',
  'pane-registry': 'src/vendor/pane-registry.js'
}
function locate (spec, from) {
  if (spec.startsWith('.')) return { file: resolve(dirname(from), spec) }
  if (LOCAL[spec]) return { file: resolve(root, LOCAL[spec]) }
  let m
  if ((m = spec.match(/^solid-ui\/components\/(.+)$/))) return { file: resolve(root, 'src/components', m[1], 'index.js') }
  if ((m = spec.match(/^solidos-nobuild\/(.+)$/))) return { file: resolve(root, m[1]) }
  if ((m = spec.match(/^lit\/directives\/(.+)$/))) return { file: resolve(root, 'src/vendor/lit-html/directives', m[1]) }
  if (/^https?:/.test(spec)) return { cdn: (spec.match(/npm\/(@?[^@/]+(?:\/[^@/]+)?)@/) || [0, spec])[1] }
  return { cdn: spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0] }
}

const parent = new Map(); const files = new Map(); const cdn = new Map()
const queue = [entry]; parent.set(entry, null)
while (queue.length) {
  const file = queue.shift()
  if (files.has(file) || !existsSync(file) || !statSync(file).isFile()) continue
  const text = readFileSync(file, 'utf8')
  files.set(file, text.length)
  const code = text.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '') // whole-line comments first: one may contain "/*"
  for (const m of code.matchAll(/(?:^|[\n;])\s*(?:import|export)\s+(?:[^'"()]*?\s+from\s+)?['"]([^'"]+)['"]/g)) {
    const to = locate(m[1], file)
    if (to.cdn) { if (!cdn.has(to.cdn)) cdn.set(to.cdn, file); continue }
    if (!parent.has(to.file)) { parent.set(to.file, file); queue.push(to.file) }
  }
}
const rel = (f) => relative(root, f)
if (why) {
  let at = [...files.keys()].find(f => rel(f) === why || rel(f).endsWith(why)) || cdn.get(why)
  if (!at) { console.log(why + ' is not reached by static imports from ' + rel(entry)); process.exit(0) }
  const chain = cdn.has(why) ? [why] : []
  for (; at; at = parent.get(at)) chain.push(rel(at))
  console.log(chain.reverse().join('\n  -> '))
  process.exit(0)
}
const group = (f) => { const r = rel(f); const m = r.match(/^(panes\/[a-z-]+|src\/[a-z-]+|mashlib)/); return m ? m[1] : r }
const by = {}
for (const [f, n] of files) { const g = group(f); by[g] = by[g] || [0, 0]; by[g][0]++; by[g][1] += n }
const total = [...files.values()].reduce((a, n) => a + n, 0)
console.log(`${rel(entry)}: ${files.size} local modules, ${Math.round(total / 1024)} KB of source, ${cdn.size} CDN packages`)
for (const [g, [c, n]] of Object.entries(by).sort((a, b) => b[1][1] - a[1][1])) console.log(String(Math.round(n / 1024)).padStart(6) + ' KB ' + String(c).padStart(4) + '  ' + g)
console.log('CDN: ' + [...cdn.keys()].sort().join(', '))
