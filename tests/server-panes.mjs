// The databrowser page a server serves (JSS --mashlib-module boot.js), with a pane from the
// server's --panes list: chrome: 'none' hides the page's header (solid-panes-header and the
// navbar) and its offset, and frame: true makes the pane a frame, as for a ?pane= pane on the
// browse page (tests/browse-api.mjs).
//
//   node tests/server-panes.mjs     # needs jss on the PATH, and the pod of tests/pod.mjs on
//                                   # 127.0.0.1:8732 serving this tree (boot.js and tests/panes/)
//   MODULE=http://127.0.0.1:8732/me/public/solidos/mashlib/boot.js node tests/server-panes.mjs   # the source files
//
// It starts a throwaway JSS of its own on PORT (8761), with its data under DATA_DIR, and stops it.

import { spawn } from 'node:child_process'
import { createServer } from 'node:http'
import { rmSync, mkdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { launch } from '../tools/cdp.mjs'

const SITE = process.env.SITE ?? 'http://127.0.0.1:8732/me/public/solidos/'
const MODULE = process.env.MODULE ?? SITE + 'dist/boot.js'
const PANES = SITE + 'tests/panes/'
const PORT = Number(process.env.PORT ?? 8761)
const POD = `http://127.0.0.1:${PORT}/alice/`
const DATA_DIR = process.env.DATA_DIR ?? fileURLToPath(new URL('../../suite-browsers/dynamic-server-panes/', import.meta.url))
const PROFILE_DIR = process.env.PROFILE_DIR ?? fileURLToPath(new URL('../../suite-browsers/dynamic-server-panes-browser/', import.meta.url))
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// A slow site for a pane: serves tests/panes/frame-pane.js after DELAY ms (?delay=), on SLOW_PORT.
const SLOW_PORT = Number(process.env.SLOW_PORT ?? 8762)
const slow = createServer((request, response) => {
  const delay = Number(new URL(request.url, 'http://x').searchParams.get('delay') || 0)
  setTimeout(() => {
    response.writeHead(200, { 'content-type': 'text/javascript', 'access-control-allow-origin': '*', 'cache-control': 'no-store' })
    response.end(readFileSync(new URL('./panes/frame-pane.js', import.meta.url)))
  }, delay)
})
await new Promise((resolve, reject) => slow.once('error', reject).listen(SLOW_PORT, '127.0.0.1', resolve))
const SLOW = (delay) => `http://127.0.0.1:${SLOW_PORT}/frame-pane.js?delay=${delay}`

let failures = 0
const check = (name, ok, detail = '') => {
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ` (${detail})` : ''}`)
}

// A JSS of our own with these --panes; returns a function that stops it.
async function server (panes) {
  if (await fetch(POD).then(() => true, () => false)) throw new Error(`port ${PORT} is in use: pick another with PORT=`)
  rmSync(DATA_DIR, { recursive: true, force: true })
  mkdirSync(DATA_DIR, { recursive: true })
  const proc = spawn('jss', ['start', '--port', String(PORT), '--host', '127.0.0.1', '--root', DATA_DIR, '--conneg',
    '--single-user', '--single-user-name', 'alice', '--mashlib-module', MODULE, ...(panes.length ? ['--panes', panes.join(',')] : [])],
  { stdio: 'ignore', detached: true })
  for (let i = 0; i < 100; i++) {
    if (await fetch(POD + 'public/').then(r => r.status < 500, () => false)) break
    await sleep(200)
  }
  return async () => {
    try { process.kill(-proc.pid, 'SIGTERM') } catch { proc.kill() }
    for (let i = 0; i < 50 && await fetch(POD).then(() => true, () => false); i++) await sleep(100)
  }
}

const chrome = () => {
  const header = document.querySelector('solid-panes-header')
  return {
    chrome: document.documentElement.dataset.chrome || '',
    header: !!header && getComputedStyle(header).display !== 'none' && header.getBoundingClientRect().height > 0,
    offset: getComputedStyle(document.documentElement).getPropertyValue('--app-header-height').trim(),
    top: Math.round(document.querySelector('.app-main').getBoundingClientRect().top)
  }
}
const frame = () => { const f = document.querySelector('#OutlineView .test-frame'); return f && { ...f.dataset } }

// A fresh browser for each server: nothing cached from the one before on the same port.
let page = null
async function fresh () {
  if (page) await page.close()
  rmSync(PROFILE_DIR, { recursive: true, force: true })
  page = await launch({ profile: PROFILE_DIR, port: 9339 })
}
let stop = null

try {
  // 0. No --panes: the page behaves as before. A link or pane asking for the thing already on
  //    show (GotoSubject(subject, true, undefined, true), as solid-ui's links do) draws it again,
  //    here after another pane view of it was opened.
  stop = await server([])
  await fresh()
  await page.goto(POD + 'profile/card.jsonld')
  await page.waitFor(() => !!document.querySelector('#OutlineView [data-outline-top]'), { timeout: 40000 })
  await sleep(1500)
  await page.evaluate(() => {
    window.shownPanes = []
    document.addEventListener('solid-panes:pane-shown', (e) => window.shownPanes.push(e.detail.name))
    window.panes.getOutliner(document).GotoSubject(window.$rdf.sym(location.href), true, window.panes.byName('internal'), true)
  })
  await page.waitFor(() => window.shownPanes.includes('internal'), { timeout: 20000 })
  await page.evaluate(() => {
    document.querySelector('#OutlineView').firstElementChild.dataset.before = 'yes'
    window.panes.getOutliner(document).GotoSubject(window.$rdf.sym(location.href), true, undefined, true, undefined)
  })
  await sleep(3000)
  const again = await page.evaluate(() => ({ old: !!document.querySelector('#OutlineView [data-before]'), last: window.shownPanes[window.shownPanes.length - 1] }))
  check('databrowser, no --panes: a link to the thing on show draws it again', !again.old && again.last !== 'internal', JSON.stringify(again))
  await stop(); stop = null

  // 1. A --panes pane with chrome: 'none': while it is on show, no header and no offset.
  stop = await server([PANES + 'chromeless-pane.js'])
  await fresh()
  await page.goto(POD + 'public/')
  await page.waitFor(() => !!document.querySelector('#OutlineView .test-chromeless'), { timeout: 40000 })
  await page.waitFor(() => !!document.querySelector('solid-panes-header'), { timeout: 20000 })
  await sleep(1500) // mashlib's stylesheets arrive after the first view
  let c = await page.evaluate(chrome)
  check("databrowser, --panes pane with chrome: 'none': header hidden, offset 0", c.chrome === 'none' && !c.header && c.offset === '0px' && c.top === 0, JSON.stringify(c))
  await page.evaluate((uri) => window.panes.getOutliner(document).GotoSubject(window.$rdf.sym(uri), true, undefined, true), POD + 'profile/card.jsonld#me')
  await page.waitFor(() => !!document.querySelector('#OutlineView .paneDiv') && !document.querySelector('#OutlineView .test-chromeless'), { timeout: 40000 })
  await sleep(500)
  c = await page.evaluate(chrome)
  check('databrowser, another pane on show: the header is back', c.chrome === '' && c.header && c.top > 0, JSON.stringify(c))
  check('databrowser: the chromeless pane is not a frame (no frame: true)', await page.evaluate(() => window.panes.getOutliner(document).framePanes.length === 0))
  await stop(); stop = null

  // 2. A --panes pane with frame: true (and chrome: 'none'): drawn for every subject, first.
  stop = await server([PANES + 'frame-pane.js'])
  await fresh()
  await page.goto(POD)
  let f = await page.waitFor(frame, { timeout: 40000 })
  c = await page.evaluate(chrome)
  check('databrowser, --panes frame: drawn for the pod', f.subject === POD || f.subject.startsWith(POD), JSON.stringify(f))
  check('databrowser, --panes frame with chrome: none: header hidden, offset 0', c.chrome === 'none' && !c.header && c.offset === '0px' && c.top === 0, JSON.stringify(c))
  await page.goto(POD + 'profile/card.jsonld')
  f = await page.waitFor(frame, { timeout: 40000 })
  check('databrowser, --panes frame: drawn for a profile document, with what it frames', !!f.framed, JSON.stringify(f))
  // (A 404 is not checked here: JSS answers it with {"error":"Not Found"}, not the data browser.)
  await page.goto(POD + 'private/')
  f = await page.waitFor(frame, { timeout: 40000 })
  check('databrowser, --panes frame: drawn for a 401, with loadError 401', f.status === '401', JSON.stringify(f))
  await stop(); stop = null

  // 3. A --panes pane from a slow site (2 s): the first view waits for it, and is drawn once.
  stop = await server([SLOW(2000)])
  for (let run = 1; run <= 3; run++) {
    await fresh()
    await page.goto(POD)
    f = await page.waitFor(frame, { timeout: 40000 }).catch(() => null)
    await sleep(3000)
    const draws = await page.evaluate(() => window.frameDraws)
    check(`databrowser, --panes frame 2 s late (load ${run}): drawn, once`, !!f && draws === 1, `${draws} draws`)
  }
  // The same on a page whose address has a #… (the loader asks for the document without it).
  await fresh()
  await page.goto(POD + 'profile/card.jsonld#me')
  f = await page.waitFor(frame, { timeout: 40000 }).catch(() => null)
  await sleep(3000)
  const hashDraws = await page.evaluate(() => window.frameDraws)
  check('databrowser, --panes frame 2 s late, page card#me: drawn, once', !!f && hashDraws === 1, `${hashDraws} draws`)
  await stop(); stop = null

  // 4. Later than the wait (7 s): the view is drawn without it, then again with it.
  stop = await server([SLOW(7000)])
  await fresh()
  await page.goto(POD)
  f = await page.waitFor(frame, { timeout: 40000 }).catch(() => null)
  check('databrowser, --panes frame 7 s late: drawn when it arrives', !!f, JSON.stringify(f))
} catch (error) {
  failures++
  console.log('FAIL ' + (error && error.message ? error.message : error))
  console.log(page.console.slice(-10).join('\n'))
} finally {
  if (page) await page.close()
  if (stop) await stop()
  slow.close()
}

console.log(failures ? `\n${failures} failure(s)` : '\nall passed')
process.exit(failures ? 1 : 0)
