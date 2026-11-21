// A pod's own data browser (mashlib/boot.js) reads the person's tool index too: no special
// page and nothing in the link. Opens resources at their own addresses on the pod.
//
//   node tests/tool-index.mjs     # needs the JSS pod of tests/pod.mjs on 127.0.0.1:8732
//   PAGE=public/solidos/dist/browse.html node tests/tool-index.mjs     # the built copy
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
const PROFILE_DIR = fileURLToPath(new URL('../.chrome-profile-pod-tools/', import.meta.url))
const SHOTS = fileURLToPath(new URL('../.shots/', import.meta.url))
const PAGE = process.env.PAGE ?? 'public/solidos/mashlib/browse.html' // or dist/browse.html, or index.html (the built copies)
const BROWSE = `${POD}${PAGE}?uri=${encodeURIComponent(POD + 'public/meetings/')}`
const NOTE = `${POD}${PAGE}?uri=${encodeURIComponent(POD + 'public/meetings/2026_11_04.md')}`
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
const page = await launch({ profile: PROFILE_DIR, port: 9343 })

try {
  const NOTE_AT_POD = POD + 'public/meetings/2026_11_04.md'
  const RECIPE_AT_POD = POD + 'public/recipes/pancakes.ttl'
  const up = () => !!window.panes && document.getElementById('OutlineView')?.childElementCount > 0

  // 1. Logged out, at the note's own address: SolidOS shows it, nothing is asked, no pane added.
  await page.goto(NOTE_AT_POD)
  await page.waitFor(up, { timeout: 40000 })
  await sleep(3000)
  check('logged out: the pod shows the note in SolidOS', true)
  check('logged out: nothing is asked', await page.evaluate(() => { const box = document.getElementById('browseAsk'); return !box || box.hidden }))
  check('logged out: the pane is not added', !(await page.evaluate(hasPane, NOTES)))

  // 2. Log in through the IdP.
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

  // 3. Logged in, at the note's own address: the index is read and each site is asked about.
  await page.goto(NOTE_AT_POD)
  await page.waitFor(up, { timeout: 40000 })
  const question = () => { const box = document.getElementById('browseAsk'); return !!box && !box.hidden && document.getElementById('browseAskSite').textContent }
  const first = await page.waitFor(question, { timeout: 30000 }).catch(() => '')
  check('logged in: the pod\'s data browser asks about a pane from the tool index', SITES.includes(first), String(first))
  check('the question says it comes from the tool index', (await page.evaluate(() => document.getElementById('browseAskTitle')?.textContent || '')).startsWith('Your tool index adds a pane from'))
  await page.screenshot(`${SHOTS}pod-tools-ask.png`)
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
  check('both panes from the tool index are added', !!added)
  const drawn = await page.waitFor(() => [...document.querySelectorAll('#OutlineView h1')].some(h => /SolidOS meeting 2026_11_04/.test(h.textContent)), { timeout: 30000 }).catch(() => false)
  check('the notes pane draws the note, at the note\'s own address', !!drawn)
  await page.screenshot(`${SHOTS}pod-tools-note.png`)

  // 4. A recipe at its own address: the app registered for recipes is offered.
  await page.goto(RECIPE_AT_POD)
  await page.waitFor(up, { timeout: 40000 })
  const links = await page.waitFor(() => { const found = [...document.querySelectorAll('#browseOpenWith a')].map(a => a.textContent + ' => ' + a.href); return found.length ? found : false }, { timeout: 30000 }).catch(() => [])
  check('a recipe offers Open with Umai viewer', links.length === 1 && links[0].startsWith('Open with Umai viewer => https://umai.noeldemartin.com/viewer?url=' + encodeURIComponent(RECIPE_AT_POD)), links.join(' ; '))
  await page.screenshot(`${SHOTS}pod-tools-recipe.png`)
} catch (error) {
  failures++
  console.log('FAIL ' + (error && error.message ? error.message : error))
  await page.screenshot(`${SHOTS}tool-index-error.png`).catch(() => {})
} finally {
  await page.close()
}

console.log(failures ? `\n${failures} failure(s)` : '\nall passed')
process.exit(failures ? 1 : 0)
