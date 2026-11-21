// The person's own panes, from their tool index (mashlib/toolIndex.js, mashlib/dynamic#1).
//
//   node tests/tool-index.mjs     # needs the JSS pod of tests/pod.mjs on 127.0.0.1:8732
//
// The pod's preferences file links to settings/tool-index.ttl, which registers an external
// app and an HTML tool (PodOS's own kinds, passed over) and two pane modules on other sites.
// Logged out, nothing is read. Logged in, each site is asked about, then its pane is added.

import { readFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { launch } from '../tools/cdp.mjs'

const POD = process.env.POD ?? 'http://127.0.0.1:8732/me/'
const WEBID = `${POD}profile/card.jsonld#me`
const PASSWORD = process.env.POD_PASSWORD ?? readFileSync(new URL('../../jss-password.txt', import.meta.url), 'utf8').trim()
const PROFILE_DIR = fileURLToPath(new URL('../.chrome-profile-tool-index/', import.meta.url))
const SHOTS = fileURLToPath(new URL('../.shots/', import.meta.url))
const BROWSE = `${POD}public/solidos/mashlib/browse.html?uri=${encodeURIComponent(POD + 'public/meetings/')}`
const NOTE = `${POD}public/solidos/mashlib/browse.html?uri=${encodeURIComponent(POD + 'public/meetings/2026_11_04.md')}`
const PANE = 'meetings-calendar'
const NOTES = 'notes-reader'
const SITES = ['melvincarvalho.github.io', 'solid-panes.github.io']

let failures = 0
const check = (name, ok, detail = '') => {
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ` (${detail})` : ''}`)
}

const DEEP = `(sel, root = document) => {
  const walk = (node) => {
    const found = node.querySelector(sel)
    if (found) return found
    for (const el of node.querySelectorAll('*')) if (el.shadowRoot) { const f = walk(el.shadowRoot); if (f) return f }
    return null
  }
  return walk(root)
}`
const shown = () => !!window.panes && !document.getElementById('browseWelcome')?.offsetParent && document.getElementById('OutlineView')?.childElementCount > 0
const hasPane = (name) => !!(window.panes && window.panes.byName(name))
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

rmSync(PROFILE_DIR, { recursive: true, force: true })
const page = await launch({ profile: PROFILE_DIR, port: 9336 })

try {
  // 1. Logged out: the folder shows, the index is private and is not read, no pane, no question.
  await page.goto(BROWSE)
  await page.waitFor(shown, { timeout: 40000 })
  await sleep(3000)
  check('logged out: the folder is shown', true)
  check('logged out: the pane is not added', !(await page.evaluate(hasPane, PANE)))
  check('logged out: nothing is asked', await page.evaluate(() => document.getElementById('browseAsk').hidden))

  // 2. Log in through the IdP (as tests/pod.mjs does).
  await page.goto(WEBID)
  await page.waitFor(`!!(${DEEP})('solid-ui-account')?.shadowRoot?.querySelector('solid-ui-login-button')`, { timeout: 30000 })
  await page.evaluate(`(${DEEP})('solid-ui-account').shadowRoot.querySelector('solid-ui-login-button solid-ui-button').shadowRoot.querySelector('button').click()`)
  await page.waitFor(`(() => { const m = (${DEEP})('solid-ui-login-modal'); return m && m.issuerInputValue })()`)
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
  await page.waitFor(`!!(${DEEP})('solid-ui-account')?.hasAttribute('data-state-loggedin')`, { timeout: 40000 })
  check('logged in on the pod', true)

  // 3. Logged in: the index is read; its panes are on other sites, so each site is asked about first.
  await page.goto(BROWSE)
  await page.waitFor(shown, { timeout: 40000 })
  const question = () => !document.getElementById('browseAsk').hidden && document.getElementById('browseAskSite').textContent
  const first = await page.waitFor(question, { timeout: 30000 }).catch(() => '')
  check('logged in: asked before running a pane from another site', SITES.includes(first), String(first))
  check('the question says it comes from the tool index', (await page.evaluate(() => document.getElementById('browseAskTitle').textContent)).startsWith('Your tool index adds a pane from'))
  check('the question names the pane file', /-pane\.js/.test(await page.evaluate(() => document.getElementById('browseAskFiles').textContent)))
  check('nothing added before the answer', !(await page.evaluate(hasPane, PANE)) && !(await page.evaluate(hasPane, NOTES)))
  await page.screenshot(`${SHOTS}tool-index-ask.png`)

  // 4. Allow each site: both panes are added.
  const answered = []
  for (let i = 0; i < 2; i++) {
    const site = await page.waitFor(question, { timeout: 30000 }).catch(() => '')
    if (!site) break
    answered.push(site)
    await page.evaluate(() => document.getElementById('browseAskYes').click())
    await sleep(1500)
  }
  check('one question for each site', answered.length === 2 && new Set(answered).size === 2, answered.join(', '))
  const added = await page.waitFor((a, b) => !!(window.panes.byName(a) && window.panes.byName(b)), { args: [PANE, NOTES], timeout: 30000 }).catch(() => false)
  check('allowed: both panes from the tool index are added', !!added)
  const names = await page.evaluate(() => window.panes.list.map(p => p.name))
  check('PodOS app and HTML tool entries are passed over', !names.some(n => /umai|recipe/i.test(n)), `${names.length} panes`)

  // 5. Again: the sites are remembered, so the panes are added with no question, and one draws a note.
  await page.goto(NOTE)
  await page.waitFor(shown, { timeout: 40000 })
  const again = await page.waitFor((a, b) => !!(window.panes && window.panes.byName(a) && window.panes.byName(b)), { args: [PANE, NOTES], timeout: 30000 }).catch(() => false)
  check('next visit: both added again', !!again)
  check('next visit: no question', await page.evaluate(() => document.getElementById('browseAsk').hidden))
  const drawn = await page.waitFor(() => [...document.querySelectorAll('#OutlineView h1')].some(h => /SolidOS meeting 2026_11_04/.test(h.textContent)), { timeout: 30000 }).catch(() => false)
  check('the notes pane from the tool index draws the note', !!drawn)
  await page.screenshot(`${SHOTS}tool-index-note.png`)
} catch (error) {
  failures++
  console.log('FAIL ' + (error && error.message ? error.message : error))
  await page.screenshot(`${SHOTS}tool-index-error.png`).catch(() => {})
} finally {
  await page.close()
}

console.log(failures ? `\n${failures} failure(s)` : '\nall passed')
process.exit(failures ? 1 : 0)
