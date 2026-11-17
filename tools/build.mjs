#!/usr/bin/env node
// Join the tree into dist/ for delivery. The source stays the source: edit a file, reload,
// as before. This only makes the copy a server points at, so that a page asks for a few
// files instead of several hundred.
//
//   npm install          (once: esbuild, and the libraries at their pinned versions)
//   npm run build        -> dist/          (add `-- --maps` for source maps, not committed)
//
// What it does, and nothing more:
// - joins the modules, keeping every `import()` as a separate file fetched on first use;
// - minifies;
// - joins the libraries too (rdflib, solid-logic, lit, Web Awesome, CodeMirror, …), from
//   node_modules at the versions src/importmap.js pins, instead of ~90 requests to CDNs;
// - carries stylesheets and Turtle files inside the joined files (see `assets` below).
//
// Output: `mashlib.js`, the data browser, and a file each for what a pane from outside may
// import by name: solid-ui, solid-ui/components, solid-panes, rdflib, solid-logic, lit and
// lit-html. They share their code, so such a pane gets the copy already loaded.
import { build } from 'esbuild'
import { readFileSync, writeFileSync, rmSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname, relative, extname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { gzipSync } from 'node:zlib'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, 'dist')

// The packages that live in this tree, read from src/importmap.js itself (run against a
// stand-in for `document`), so this list cannot drift from it.
function localPackages () {
  const source = resolve(root, 'src/importmap.js')
  let made = null
  const document = {
    currentScript: { src: pathToFileURL(source).href, after: (element) => { made = element } },
    createElement: () => ({})
  }
  new Function('document', 'window', 'location', 'localStorage', readFileSync(source, 'utf8'))(document, {}, new URL('http://localhost/'), { getItem: () => null })
  const local = {}
  for (const [specifier, url] of Object.entries(JSON.parse(made.textContent).imports)) {
    if (!url.startsWith('file:') || specifier.endsWith('/')) continue
    local[specifier] = fileURLToPath(url)
  }
  return local
}
const local = localPackages()

// Output names: 'solid-ui/components/button' -> 'solid-ui-components-button.js'
const fileFor = (specifier) => specifier.replace(/[^A-Za-z0-9]+/g, '-')
const entryPoints = { mashlib: resolve(root, 'mashlib/src/index.js') }
const entries = {}
// Only the packages a pane from outside is likely to import get a file of their own. Every
// extra one splits the shared code further (esbuild makes a file per set of entry points
// that share a module), which is more requests for every page. The rest stay mapped to
// their source files.
const SHARED = new Set(['solid-ui', 'UI', 'solid-ui/components', 'solid-panes'])
for (const [specifier, file] of Object.entries(local)) {
  if (!SHARED.has(specifier)) continue
  const name = Object.keys(entryPoints).find(n => entryPoints[n] === file) || fileFor(specifier)
  entryPoints[name] = file
  entries[specifier] = name + '.js'
}

// `new URL('./x.css', import.meta.url)` is how a module here finds a file beside it. Once
// joined, the module is somewhere else, so each such URL is rewritten:
// - a stylesheet or Turtle file that refers to nothing else is carried in the joined file
//   and handed over as a blob: URL (fetch and <link> both take one);
// - anything else (images, a stylesheet with url() or @import) is addressed from the root
//   of the source tree, which is still served beside dist/.
// - a stylesheet that @imports others is written to dist/ as one file with the imports
//   folded in (Web Awesome's theme from node_modules rather than the CDN), and its url()s
//   pointed back at where they were.
const TEXT = { '.css': 'text/css', '.ttl': 'text/turtle' }
const WEBAWESOME = /^https:\/\/cdn\.jsdelivr\.net\/npm\/@awesome\.me\/webawesome@[^/]+\/(.+)$/
function flattenCss (file, seen = new Set()) {
  if (seen.has(file)) return ''
  seen.add(file)
  // Comments go first: one may hold an @import that is switched off, and folding a file into
  // a comment would break everything after it.
  const css = readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
  // Imports are set aside first, so that the url()s rewritten below are this file's own and
  // not those of the files folded in (which are already rewritten).
  const folded = []
  return css
    .replace(/@import\s+(?:url\(\s*)?(['"])([^'"]+)\1\s*\)?([^;]*);/g, (whole, quote, spec, rest) => {
      if (rest.trim()) throw new Error(`${relative(root, file)}: an @import with conditions is not folded: ${whole}`)
      const cdn = spec.match(WEBAWESOME)
      if (/^https?:/.test(spec) && !cdn) return whole
      const target = cdn ? resolve(root, 'node_modules/@awesome.me/webawesome', cdn[1]) : resolve(dirname(file), spec)
      folded.push(flattenCss(target, seen))
      return `/*@folded ${folded.length - 1}@*/`
    })
    .replace(/url\(\s*(['"]?)(?!data:|https?:|#)([^'")]+)\1\s*\)/g, (whole, quote, spec) => {
      const target = resolve(dirname(file), spec)
      if (target.includes('/node_modules/')) throw new Error(`${relative(root, file)}: url(${spec}) points into node_modules`)
      return `url('${relative(out, target)}')`
    })
    .replace(/\/\*@folded (\d+)@\*\//g, (whole, n) => folded[Number(n)])
}
const HELPER = 'mashlib-build:assets'
const stats = { inlined: 0, inlinedBytes: 0, linked: 0, folded: [] }
const assets = {
  name: 'assets',
  setup (b) {
    b.onResolve({ filter: /^mashlib-build:assets$/ }, () => ({ path: HELPER, namespace: 'mashlib-build' }))
    b.onLoad({ filter: /.*/, namespace: 'mashlib-build' }, () => ({
      contents: `// dist/ sits beside the source tree: its root is one level up from any file here.
export const root = new URL('../', import.meta.url)
export const here = new URL('./', import.meta.url)
export const text = (body, type) => new URL(URL.createObjectURL(new Blob([body], { type })))
`,
      loader: 'js'
    }))
    b.onLoad({ filter: /\.js$/ }, (args) => {
      if (args.path.includes('/node_modules/')) return null // libraries are joined as they are
      let code = readFileSync(args.path, 'utf8')
      if (!code.includes('import.meta.url')) return null
      let used = false
      code = code.replace(/new URL\((['"])([^'"]+)\1,\s*import\.meta\.url\)/g, (whole, quote, spec) => {
        const file = resolve(dirname(args.path), spec)
        if (!existsSync(file)) return whole
        used = true
        const type = TEXT[extname(file)]
        if (type) {
          const body = readFileSync(file, 'utf8')
          if (!/url\(\s*['"]?(?!data:)|@import/.test(body)) {
            stats.inlined++; stats.inlinedBytes += body.length
            return `__mashlibAssets.text(${JSON.stringify(body)}, ${JSON.stringify(type)})`
          }
          if (type === 'text/css' && /@import/.test(body)) {
            const name = relative(root, file).replace(/[^A-Za-z0-9.]+/g, '-')
            if (!stats.folded.includes(name)) { stats.folded.push(name); writeFileSync(resolve(out, name), flattenCss(file)) }
            return `new URL(${JSON.stringify(name)}, __mashlibAssets.here)`
          }
        }
        stats.linked++
        return `new URL(${JSON.stringify(relative(root, file))}, __mashlibAssets.root)`
      })
      if (/import\.meta\.url/.test(code.replace(/\/\/.*$/gm, ''))) {
        throw new Error(`${relative(root, args.path)}: import.meta.url used in a way the build does not rewrite`)
      }
      return { contents: used ? `import * as __mashlibAssets from '${HELPER}'\n` + code : code, loader: 'js' }
    })
  }
}

// Bare specifiers. A package of this tree is joined in from its source file; a library is
// joined in from node_modules (esbuild's own resolution); the few names the import map
// spells differently from npm are translated here.
const ALIAS = { SolidLogic: 'solid-logic', $rdf: 'rdflib' }
const PANE_REGISTRY = /^https:\/\/cdn\.jsdelivr\.net\/npm\/pane-registry@[^/]+\/\+esm$/ // src/vendor/pane-registry.js
const packages = {
  name: 'packages',
  setup (b) {
    b.onResolve({ filter: /^[^./]/ }, async (args) => {
      if (args.pluginData === 'resolving' || args.namespace === 'mashlib-build' || /^mashlib-build:/.test(args.path)) return null
      const again = (path) => b.resolve(path, { kind: args.kind, resolveDir: root, pluginData: 'resolving' })
      if (PANE_REGISTRY.test(args.path)) return again('pane-registry')
      if (/^https?:/.test(args.path)) return { path: args.path, external: true }
      if (ON_CDN[args.path]) return { path: args.path, external: true } // resolved by the import map (dist/manifest.js)
      if (local[args.path]) return { path: local[args.path] }
      const tree = args.path.match(/^solidos-nobuild\/(.+)$/)
      if (tree) return { path: resolve(root, tree[1]) }
      if (ALIAS[args.path]) return again(ALIAS[args.path])
      const awesome = args.path.match(/^webawesome\/(.+)$/)
      if (awesome) return { path: resolve(root, 'node_modules/@awesome.me/webawesome/dist', awesome[1]) } // not dist-cdn: that carries its own lit
      return null
    })
  }
}

// The libraries a pane from outside imports by name. Each is an entry of its own, written
// here: everything the package exports, and the whole of it as the default, as the CDN
// builds give.
const LIBRARIES = { rdflib: ['rdflib', '$rdf'], 'solid-logic': ['solid-logic', 'SolidLogic'], lit: ['lit'], 'lit-html': ['lit-html'] }
const LIBRARY = 'mashlib-build:library:'
for (const [name, specifiers] of Object.entries(LIBRARIES)) {
  entryPoints[name] = LIBRARY + name
  for (const specifier of specifiers) entries[specifier] = name + '.js'
}
const libraries = {
  name: 'libraries',
  setup (b) {
    // mime-types asks node's `path` for extname() and nothing else.
    b.onResolve({ filter: /^path$/ }, () => ({ path: 'path', namespace: 'mashlib-node' }))
    b.onLoad({ filter: /.*/, namespace: 'mashlib-node' }, () => ({
      contents: "export const extname = (p) => { const name = String(p).split(/[\\\\/]/).pop(); const dot = name.lastIndexOf('.'); return dot > 0 ? name.slice(dot) : '' }\nexport default { extname }\n",
      loader: 'js'
    }))
    b.onResolve({ filter: /^mashlib-build:library:/ }, (args) => ({ path: args.path.slice(LIBRARY.length), namespace: 'mashlib-library' }))
    b.onLoad({ filter: /.*/, namespace: 'mashlib-library' }, (args) => ({
      contents: `export * from '${args.path}'\nimport * as all from '${args.path}'\nexport default all\n`,
      resolveDir: root,
      loader: 'js'
    }))
  }
}

// The login library starts a worker from a file beside itself, which joining would break,
// so it alone stays on the CDN, at the version installed here (the one solid-logic asks for).
const oidc = JSON.parse(readFileSync(resolve(root, 'node_modules/@uvdsl/solid-oidc-client-browser/package.json'), 'utf8')).version
const ON_CDN = {
  '@uvdsl/solid-oidc-client-browser': `https://cdn.jsdelivr.net/npm/@uvdsl/solid-oidc-client-browser@${oidc}/+esm`,
  '@uvdsl/solid-oidc-client-browser/core': `https://cdn.jsdelivr.net/npm/@uvdsl/solid-oidc-client-browser@${oidc}/core/+esm`
}
Object.assign(entries, ON_CDN)

rmSync(out, { recursive: true, force: true })
mkdirSync(out, { recursive: true })

const result = await build({
  entryPoints,
  outdir: out,
  bundle: true,
  format: 'esm',
  splitting: true,
  minify: true,
  sourcemap: process.argv.includes('--maps'),
  target: 'es2022',
  entryNames: '[name]',
  chunkNames: 'part-[hash]', // flat: every file is one level below the root (see `root` above)
  metafile: true,
  logLevel: 'warning',
  platform: 'browser',
  define: { 'process.env.NODE_ENV': '"production"', global: 'globalThis' },
  plugins: [libraries, assets, packages]
})

// The page's side: which file is which package, the entry point for --mashlib-module, and
// the stand-alone pages.
writeFileSync(resolve(out, 'manifest.js'), `// Made by tools/build.mjs. A classic script, before ../src/importmap.js.
window.MASHLIB_DIST = { base: new URL('./', document.currentScript.src).href, entries: ${JSON.stringify(entries)} }
`)

let boot = readFileSync(resolve(root, 'mashlib/boot.js'), 'utf8')
const bootSteps = [
  ["await new Promise((resolve, reject) => {\n  const script = document.createElement('script')\n\n  script.src = here('../src/importmap.js')",
    "for (const src of [here('./manifest.js'), here('../src/importmap.js')]) await new Promise((resolve, reject) => {\n  const script = document.createElement('script')\n\n  script.src = src"],
  ["await import('./src/index.js')", "await import('./mashlib.js')"]
]
for (const [from, to] of bootSteps) {
  if (!boot.includes(from)) throw new Error('mashlib/boot.js has changed: ' + from.slice(0, 50))
  boot = boot.replace(from, to)
}
writeFileSync(resolve(out, 'boot.js'), '// Made by tools/build.mjs from mashlib/boot.js: the joined copy of the data browser.\n' + boot)
copyFileSync(resolve(root, 'mashlib/boot.css'), resolve(out, 'boot.css'))

const pageSteps = [
  ['<script src="../src/importmap.js"></script>', '<script src="manifest.js"></script>\n    <script src="../src/importmap.js"></script>'],
  ["await import('./src/index.js')", "await import('./mashlib.js')"]
]
for (const name of ['databrowser.html', 'browse.html']) {
  let page = readFileSync(resolve(root, 'mashlib', name), 'utf8')
  for (const [from, to] of pageSteps) {
    if (!page.includes(from)) throw new Error(`mashlib/${name} has changed: ` + from.slice(0, 50))
    page = page.replace(from, to)
  }
  writeFileSync(resolve(out, name), page)
}

// Report: what a page fetches to start, and what waits.
const outputs = result.metafile.outputs
const key = (name) => Object.keys(outputs).find(k => k.endsWith('/' + name) || k === 'dist/' + name)
const start = new Set(); const queue = [key('mashlib.js')]
while (queue.length) {
  const file = queue.shift()
  if (!file || start.has(file)) continue
  start.add(file)
  for (const i of outputs[file].imports) if (i.kind === 'import-statement' && !i.external) queue.push(i.path)
}
const size = (files) => { let raw = 0; let gz = 0; for (const f of files) { const b = readFileSync(resolve(root, f)); raw += b.length; gz += gzipSync(b, { level: 9 }).length } return [files.length, Math.round(raw / 1024), Math.round(gz / 1024)] }
const all = Object.keys(outputs).filter(f => f.endsWith('.js'))
const fmt = ([n, raw, gz]) => `${String(n).padStart(3)} files ${String(raw).padStart(5)} KB  ${String(gz).padStart(4)} KB gzipped`
console.log('to start the data browser: ' + fmt(size([...start])))
console.log('everything               : ' + fmt(size(all)))
console.log(`stylesheets and Turtle carried inside: ${stats.inlined} (${Math.round(stats.inlinedBytes / 1024)} KB); folded into one file each: ${stats.folded.join(', ') || 'none'}; addressed from the source tree: ${stats.linked}`)
