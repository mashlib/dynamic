// What the browse page offers a pane that wants to be the whole app (a shell): no browser bar
// (?chrome=none, a pane's chrome: 'none'), frame panes (frame: true, ?frame=), a pane that
// replaces a built-in one (replaces:), logging in and out by event (solid-login-request,
// solid-logout-request, solid-session-change), and no second draw when a session is restored.
//
//   node tests/browse-api.mjs     # needs the JSS pod of tests/pod.mjs on 127.0.0.1:8732
//   PAGE=public/solidos/mashlib/browse.html node tests/browse-api.mjs     # the source files
//
// The test panes are in tests/panes/, served by the pod from this tree (same site: no question).
// Password: POD_PASSWORD, else ../suite-local.json (password), else ../jss-password.txt.
// The browser profile lives outside the served tree: PROFILE_DIR, else ../../suite-browsers/.

import { readFileSync, existsSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { launch } from '../tools/cdp.mjs'

const POD = process.env.POD ?? 'http://127.0.0.1:8732/me/'
const PAGE = POD + (process.env.PAGE ?? 'public/solidos/index.html') // index.html: the built copy, as the suite opens it
const PANES = POD + 'public/solidos/tests/panes/'
const FRAME = PANES + 'frame-pane.js'
const CHROMELESS = PANES + 'chromeless-pane.js'
const REPLACEMENT = PANES + 'source-replacement-pane.js'
const PROFILE_DIR = process.env.PROFILE_DIR ?? fileURLToPath(new URL('../../suite-browsers/dynamic-browse-api/', import.meta.url))
const SHOTS = fileURLToPath(new URL('../.shots/', import.meta.url))
const local = new URL('../../suite-local.json', import.meta.url)
const PASSWORD = process.env.POD_PASSWORD ??
  (existsSync(local) ? JSON.parse(readFileSync(local, 'utf8')).password : readFileSync(new URL('../../jss-password.txt', import.meta.url), 'utf8').trim())

let failures = 0
const check = (name, ok, detail = '') => {
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ` (${detail})` : ''}`)
}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
const DEEP = `(sel, root = document) => {
  const walk = (node) => {
    const found = node.querySelector(sel)
    if (found) return found
    for (const el of node.querySelectorAll('*')) if (el.shadowRoot) { const f = walk(el.shadowRoot); if (f) return f }
    return null
  }
  return walk(root)
}`
const open = (query) => page.goto(PAGE + '?' + new URLSearchParams(query).toString())
const bar = () => {
  const el = document.querySelector('.browse-bar')
  return {
    shown: getComputedStyle(el).display !== 'none',
    offset: getComputedStyle(document.documentElement).getPropertyValue('--app-header-height').trim(),
    top: parseFloat(getComputedStyle(document.body).paddingTop)
  }
}
const frame = () => { const f = document.querySelector('#OutlineView .test-frame'); return f && { ...f.dataset } }

rmSync(PROFILE_DIR, { recursive: true, force: true })
const page = await launch({ profile: PROFILE_DIR, port: 9337 })

try {
  // 1. ?chrome=none: no bar, no offset, whatever pane is drawn.
  await open({ chrome: 'none', uri: POD + 'public/' })
  await page.waitFor(() => !!document.querySelector('#OutlineView .paneDiv'), { timeout: 40000 })
  let b = await page.evaluate(bar)
  check('?chrome=none: the bar is hidden and the offset is 0', !b.shown && b.offset === '0px' && b.top === 0, JSON.stringify(b))

  // 2. A pane with chrome: 'none' hides the bar while it is on show; another pane brings it back.
  await open({ pane: CHROMELESS, uri: POD + 'public/' })
  await page.waitFor(() => !!document.querySelector('#OutlineView .test-chromeless'), { timeout: 40000 })
  b = await page.evaluate(bar)
  check("chrome: 'none' pane on show: the bar is hidden and the offset is 0", !b.shown && b.offset === '0px' && b.top === 0, JSON.stringify(b))
  await page.evaluate((uri) => window.panes.getOutliner(document).GotoSubject(window.$rdf.sym(uri), true, undefined, true), POD + 'profile/card.jsonld#me')
  await page.waitFor(() => !!document.querySelector('#OutlineView .paneDiv') && !document.querySelector('#OutlineView .test-chromeless'), { timeout: 40000 })
  b = await page.evaluate(bar)
  check('another pane on show: the bar is back', b.shown && parseFloat(b.offset) > 0 && b.top > 0, JSON.stringify(b))

  // 3. A frame pane (frame: true, named by ?pane=) is drawn for everything, before built-in choices.
  await open({ pane: FRAME, uri: PANES + 'chromeless-pane.js' })
  let f = await page.waitFor(frame, { timeout: 40000 })
  check('frame: drawn for a .js file, given the source pane as framedPane', f.framed === 'source', JSON.stringify(f))
  b = await page.evaluate(bar)
  check("frame with chrome: 'none': no bar", !b.shown && b.offset === '0px', JSON.stringify(b))
  check('frame: offered first in the pane list', await page.evaluate(() => document.querySelector('#OutlineView [data-outline-top]').relevantPanes[0].name === 'test-frame'))
  await page.evaluate((uri) => window.panes.getOutliner(document).GotoSubject(window.$rdf.sym(uri), true, undefined, true), POD + 'profile/card.jsonld#me')
  f = await page.waitFor((uri) => { const f = document.querySelector('#OutlineView .test-frame'); return f && f.dataset.subject === uri && { ...f.dataset } }, { args: [POD + 'profile/card.jsonld#me'], timeout: 40000 })
  check('frame: drawn for a profile too, around the profile pane', f.framed === 'profile', JSON.stringify(f))

  // 4. A subject that cannot be read: the frame is still drawn, with loadError.
  await open({ pane: FRAME, uri: POD + 'public/nope-404.ttl' })
  f = await page.waitFor(frame, { timeout: 40000 })
  check('frame: drawn for a 404, with loadError.status 404', f.status === '404', JSON.stringify(f))
  await open({ pane: FRAME, uri: POD + 'settings/prefs.ttl' })
  f = await page.waitFor(frame, { timeout: 40000 })
  check('frame: drawn for a 401 (logged out), with loadError.status 401', f.status === '401', JSON.stringify(f))

  // 5. ?frame=<pane> makes any pane a frame; the same pane by ?pane= alone is not one.
  await open({ frame: CHROMELESS, uri: POD + 'profile/card.jsonld#me' })
  await page.waitFor(() => !!document.querySelector('#OutlineView .test-chromeless'), { timeout: 40000 })
  check('?frame=: the named pane is drawn for a profile', true)
  await open({ pane: CHROMELESS, uri: POD + 'profile/card.jsonld#me' })
  await page.waitFor(() => !!document.querySelector('#OutlineView .paneDiv'), { timeout: 40000 })
  await sleep(1500)
  check('?pane= without frame: true: not a frame', !(await page.evaluate(() => !!document.querySelector('#OutlineView .test-chromeless'))))

  // 6. replaces: a pane named by ?pane= with replaces: <its own name> takes the built-in's place.
  await open({ pane: REPLACEMENT, uri: PANES + 'frame-pane.js' })
  await page.waitFor(() => !!document.querySelector('#OutlineView .paneDiv'), { timeout: 40000 })
  await sleep(1000)
  check('replaces: drawn instead of the built-in source pane', await page.evaluate(() => !!document.querySelector('#OutlineView .test-source-replacement')))
  check('replaces: byName finds it, in the same place in the list', await page.evaluate(() => {
    const p = window.panes.byName('source')
    return p.replaces === 'source' && window.panes.list.filter(x => x.name === 'source').length === 1
  }))

  // 7. solid-login-request starts the normal login (the issuer dialog), then the IdP.
  await open({ pane: FRAME, uri: POD + 'public/' })
  await page.waitFor(frame, { timeout: 40000 })
  await page.evaluate(() => document.dispatchEvent(new CustomEvent('solid-login-request')))
  const asked = await page.waitFor(`(() => { const m = (${DEEP})('solid-ui-login-modal'); return m && m.issuerInputValue })()`, { timeout: 20000 }).catch(() => false)
  check('solid-login-request: the issuer dialog opens', !!asked)
  await page.evaluate(`(() => { const m = (${DEEP})('solid-ui-login-modal'); const b = [...m.shadowRoot.querySelectorAll('solid-ui-dialog-footer solid-ui-button')][1]; b.shadowRoot.querySelector('button').click() })()`)
  await page.waitFor(() => location.pathname.startsWith('/idp/') && !!document.querySelector('#username'), { timeout: 30000 })
  await page.evaluate((password) => {
    document.querySelector('#username').value = 'me'
    document.querySelector('#password').value = password
    document.querySelector('form[action$="/login"]').submit()
  }, PASSWORD)
  for (let step = 0; step < 4; step++) {
    const where = await page.waitFor(() => {
      if (!location.pathname.startsWith('/idp/')) return 'back'
      if ([...document.querySelectorAll('button, a')].find(b => /skip for now/i.test(b.textContent))) return 'passkey'
      if (document.querySelector('form[action$="/confirm"]')) return 'consent'
      return false
    }, { timeout: 30000 })
    if (where === 'back') break
    if (where === 'passkey') await page.evaluate(() => [...document.querySelectorAll('button, a')].find(b => /skip for now/i.test(b.textContent)).click())
    if (where === 'consent') await page.evaluate(() => document.querySelector('form[action$="/confirm"]').submit())
    await sleep(1000)
  }
  const back = await page.waitFor(`!!(${DEEP})('solid-ui-account')?.hasAttribute('data-state-loggedin')`, { timeout: 40000 }).catch(() => false)
  check('logged in through the IdP, back on the page', !!back)

  // 8. A page opened with a session to restore draws once, and a session event for the same
  //    person draws nothing again. solid-session-change is written down across page loads.
  await page.send('Page.addScriptToEvaluateOnNewDocument', { source: `document.addEventListener('solid-session-change', (e) => {
    const seen = JSON.parse(sessionStorage.getItem('sessionChanges') || '[]'); seen.push(e.detail.webId); sessionStorage.setItem('sessionChanges', JSON.stringify(seen)) })` })
  await open({ pane: FRAME, uri: POD + 'settings/' })
  f = await page.waitFor(frame, { timeout: 40000 })
  await page.waitFor(`!!(${DEEP})('solid-ui-account')?.hasAttribute('data-state-loggedin')`, { timeout: 40000 })
  await sleep(6000) // the restore, the tool index and the profile all come back in this time
  const draws = await page.evaluate(() => window.frameDraws)
  check('session restored: the frame is drawn once', draws === 1, `${draws} draws`)
  check('session restored: the private folder was read (no loadError)', f.status === '', JSON.stringify(f))
  const seen = await page.evaluate(() => JSON.parse(sessionStorage.getItem('sessionChanges') || '[]'))
  check('session restored: solid-session-change with the WebID', seen.length === 1 && seen[0] === POD + 'profile/card.jsonld#me', JSON.stringify(seen))
  await page.evaluate(() => {
    const events = window.SolidLogic.authSession.events
    events.emit('sessionRestore', location.href)
    events.emit('sessionChange')
    events.emit('login')
  })
  await sleep(2500)
  const after = await page.evaluate(() => window.frameDraws)
  check('session events for the same person: no second draw', after === 1, `${after} draws`)
  check('mashlib.login and mashlib.logout are there', await page.evaluate(() => typeof window.mashlib.login === 'function' && typeof window.mashlib.logout === 'function'))

  // 9. solid-logout-request logs out, as the Log Out button does (the page is loaded again).
  await page.evaluate(() => sessionStorage.removeItem('sessionChanges'))
  await page.evaluate(() => document.dispatchEvent(new CustomEvent('solid-logout-request')))
  const out = await page.waitFor(`!window.SolidLogic?.authn.currentUser() && !!(${DEEP})('solid-ui-account') && !(${DEEP})('solid-ui-account').hasAttribute('data-state-loggedin') && !!document.querySelector('#OutlineView .test-frame')`, { timeout: 30000 }).catch(() => false)
  check('solid-logout-request: logged out, the frame drawn again', !!out)
  f = await page.waitFor(frame, { timeout: 20000 })
  check('logged out: the private folder now has loadError 401', f.status === '401', JSON.stringify(f))
  console.log('     solid-session-change seen while logging out: ' + JSON.stringify(await page.evaluate(() => JSON.parse(sessionStorage.getItem('sessionChanges') || '[]'))))
} catch (error) {
  failures++
  console.log('FAIL ' + (error && error.message ? error.message : error))
  await page.screenshot(`${SHOTS}browse-api-error.png`).catch(() => {})
  console.log(page.console.slice(-10).join('\n'))
} finally {
  await page.close()
}

console.log(failures ? `\n${failures} failure(s)` : '\nall passed')
process.exit(failures ? 1 : 0)
