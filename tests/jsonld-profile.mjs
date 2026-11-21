// Two things a JSS pod needs from the browse page.
//
//   node tests/jsonld-profile.mjs     # needs the JSS pod of tests/pod.mjs on 127.0.0.1:8732
//
// 1. Logging in from a link with a plain ?uri=http://… works: the page puts its address in the
//    encoded form first, so it is the same when the login comes back.
// 2. The pod owner is found when the profile document is `card.jsonld`, not `card`.

import { readFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { launch } from '../tools/cdp.mjs'

const POD = process.env.POD ?? 'http://127.0.0.1:8732/me/'
const WEBID = `${POD}profile/card.jsonld#me`
const PASSWORD = process.env.POD_PASSWORD ?? readFileSync(new URL('../../jss-password.txt', import.meta.url), 'utf8').trim()
const PROFILE_DIR = fileURLToPath(new URL('../.chrome-profile-jsonld/', import.meta.url))
const SHOTS = fileURLToPath(new URL('../.shots/', import.meta.url))
const PAGE = process.env.PAGE ?? 'public/solidos/mashlib/browse.html'
const TREE = `${POD}public/solidos/`
const PLAIN = `${POD}${PAGE}?uri=${POD}public/meetings/2026_11_04.md` // as a person would type or paste it

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
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

rmSync(PROFILE_DIR, { recursive: true, force: true })
const page = await launch({ profile: PROFILE_DIR, port: 9340 })

try {
  // 1. The plain link: the address is put in its encoded form straight away.
  await page.goto(PLAIN)
  await page.waitFor(`!!(${DEEP})('solid-ui-account')?.shadowRoot?.querySelector('solid-ui-login-button')`, { timeout: 40000 })
  const search = await page.evaluate(() => location.search)
  check('a plain ?uri= is put in the encoded form', search.includes('uri=http%3A%2F%2F'), search.slice(0, 60))

  // Log in from this page, through the IdP, and come back.
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
  const loggedIn = await page.waitFor(`!!(${DEEP})('solid-ui-account')?.hasAttribute('data-state-loggedin')`, { timeout: 40000 }).catch(() => false)
  check('logging in from the plain link works', !!loggedIn, (await page.url()).slice(0, 90))
  check('logged in as the pod owner', (await page.evaluate(() => window.SolidLogic.authn.currentUser()?.uri)) === WEBID)
  await page.screenshot(`${SHOTS}jsonld-login.png`)

  // 2. The owner of a pod whose profile is card.jsonld (the source tree: its modules can be imported one by one).
  if (PAGE.includes('/mashlib/')) {
    const owner = await page.evaluate(async (both) => {
      const [tree, pod] = both.split(' ')
      const out = {}
      for (const [key, path] of [['panes', 'panes/solid-panes/src/utils/webIdUtils.js'], ['ui', 'src/utils/webIdUtils.js']]) {
        const utils = await import(tree + path)
        out[key + 'Name'] = await utils.getNameOfPodOwner(window.$rdf.sym(pod))
        out[key + 'Profile'] = (await utils.loadProfileFromURI(window.$rdf.sym(pod + 'public/meetings/'))).uri
      }
      await import(tree + 'src/utils/headerFooterHelpers.js') // loads
      return out
    }, TREE + ' ' + POD).catch(error => ({ error: String(error && error.message ? error.message : error) }))
    check('solid-panes: the owner profile is found at card.jsonld', owner.panesProfile === WEBID, owner.error || owner.panesProfile)
    check('solid-panes: the owner has a name', !!owner.panesName, owner.panesName)
    check('solid-ui: the owner profile is found at card.jsonld', owner.uiProfile === WEBID, owner.uiProfile)
  }
} catch (error) {
  failures++
  console.log('FAIL ' + (error && error.message ? error.message : error))
  await page.screenshot(`${SHOTS}jsonld-error.png`).catch(() => {})
} finally {
  await page.close()
}

console.log(failures ? `\n${failures} failure(s)` : '\nall passed')
process.exit(failures ? 1 : 0)
