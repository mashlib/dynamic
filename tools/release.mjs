#!/usr/bin/env node
// Keep a numbered copy of the build that never changes afterwards.
//
//   node tools/release.mjs 0.0.2      -> v/0.0.2/
//
// dist/ is always the newest build: the place to try a change. A page that people rely on
// points at a number instead (…/v/0.0.2/dist/…), and moves only when its own address is
// changed. Going back is changing the number back.
//
// The copy holds what a page asks for: dist/ and src/importmap.js, in the same places
// relative to each other, so dist/browse.html works from inside it unchanged.
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const version = process.argv[2]
if (!/^\d+\.\d+\.\d+$/.test(version || '')) { console.error('usage: node tools/release.mjs <version>, for example 0.0.2'); process.exit(2) }
const out = join(root, 'v', version)
if (existsSync(out)) { console.error(`v/${version} exists. A release is never changed: use the next number.`); process.exit(1) }
if (!existsSync(join(root, 'dist', 'mashlib.js'))) { console.error('no build in dist/. Run: npm run build'); process.exit(1) }

const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim()
const dirty = git('status', '--porcelain', '--', 'dist', 'src/importmap.js')
if (dirty) { console.error('dist/ or src/importmap.js has changes that are not committed:\n' + dirty); process.exit(1) }

mkdirSync(join(out, 'src'), { recursive: true })
cpSync(join(root, 'dist'), join(out, 'dist'), { recursive: true })
cpSync(join(root, 'src', 'importmap.js'), join(out, 'src', 'importmap.js'))

const files = readdirSync(join(out, 'dist'))
const bytes = files.reduce((sum, file) => sum + statSync(join(out, 'dist', file)).size, 0)
writeFileSync(join(out, 'RELEASE.json'), JSON.stringify({
  version,
  date: new Date().toISOString().slice(0, 10),
  from: git('rev-parse', 'HEAD'),
  solidos: JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version,
  files: files.length,
  bytes
}, null, 2) + '\n')
console.log(`v/${version}: ${files.length} files, ${(bytes / 1e6).toFixed(1)} MB, from ${git('rev-parse', '--short', 'HEAD')}`)
