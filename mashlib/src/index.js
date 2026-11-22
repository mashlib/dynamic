import { importCss } from './importCss.js'
// IMPORTANT: must be the first import so window.SolidLogic / window.$rdf are
// defined before solid-ui / solid-panes prebuilt bundles are evaluated
// (they declare `solid-logic` and `rdflib` as UMD externals with
// root: "SolidLogic" / "$rdf").
import './globals.js'

import * as $rdf from 'rdflib'
import * as SolidLogic from 'solid-logic'

import * as panes from 'solid-panes'
import { layout } from './layout.js'
import { theme } from './theme.js'
import versionInfo from './versionInfo.js'
importCss(new URL('./styles/mash.css', import.meta.url))
import 'solid-ui/components/provider'

const global = window
global.panes = { ...panes } // a module namespace is sealed; webpack's isn't, and runDataBrowser is added below
global.mashlib = { versionInfo }

// A frame pane (frame: true) is drawn for every subject (see solid-panes' outline manager). Only
// someone who chose the pane can make it one: the page's own link (?pane=, ?frame=; userTools.js)
// or the server, whose --panes list (JSS) is registered through window.panes.register. So a pane
// registered that way that says frame: true is a frame. userTools.js registers the panes of a
// person's tool index with registerPane, which does not do this.
global.panes.addFramePane = function (pane) {
  const outliner = panes.getOutliner(document)
  if (!outliner || outliner.framePanes.includes(pane)) return
  outliner.framePanes.push(pane)
  document.dispatchEvent(new CustomEvent('mashlib:framepane', { detail: { pane } }))
}
global.panes.registerPane = panes.register
global.panes.register = function (pane, ...rest) {
  const result = panes.register(pane, ...rest)
  if (pane && pane.frame === true && panes.list.includes(pane)) global.panes.addFramePane(pane)
  return result
}

// No chrome: a pane on show whose default export says chrome: 'none' puts data-chrome="none"
// on <html>. mash.css (and browse.html, for its bar) then hide the page's header and navigation
// and hold --app-header-height at 0. solid-panes:pane-shown comes from the outline each time it
// draws the pane at its top; a pane without the flag brings them back. Only a pane can ask: a
// link (the page's address) cannot hide the bar, the login or the outline header.
{
  let paneChrome = ''
  const fitChrome = () => {
    if (paneChrome === 'none') document.documentElement.dataset.chrome = 'none'
    else delete document.documentElement.dataset.chrome
  }
  document.addEventListener('solid-panes:pane-shown', (event) => { paneChrome = event.detail.pane.chrome || ''; fitChrome() })
  // A frame is drawn for everything: if it wants no chrome, there is none from the start.
  document.addEventListener('mashlib:framepane', (event) => {
    if (panes.getOutliner(document).framePaneFor() === event.detail.pane && event.detail.pane.chrome === 'none') { paneChrome = 'none'; fitChrome() }
  })
  fitChrome()
}

layout.init()
theme.init()

// Build a snapshot of the current render environment
const buildRenderEnvironment = () => ({
  layout: layout.get(),
  layoutPreference: layout.getPreference(),
  inputMode: layout.getInputMode(),
  theme: theme.get(),
  viewport: layout.getViewport()
})

// Only the main page shows what the URL is. Pages that load mashlib and render a subject
// themselves (browse.html) must not have an environment change replace it with the page URL.
let mainPageStarted = false

// Inject or update the environment on the pane context
const syncEnvironmentToContext = async (_trigger) => {
  const outliner = panes.getOutliner(document)

  if (!outliner) {
    return
  }

  if (!outliner.context) {
    outliner.context = {}
  }

  panes.updateEnvironment(outliner, buildRenderEnvironment())
  if (mainPageStarted) {
    await panes.refreshUI(outliner)
  }
}

// Keep environment in sync on layout/theme changes
window.addEventListener('mashlib:layoutchange', syncEnvironmentToContext)
window.addEventListener('mashlib:themechange', syncEnvironmentToContext)

global.panes.runDataBrowser = function (uri) {
  mainPageStarted = true

  // Set up cross-site proxy
  const fetcher = $rdf.Fetcher
  fetcher.crossSiteProxyTemplate = window.origin + '/xss/?uri={uri}'

  // Add web monetization tag to page header
  try {
    const webMonetizationTag = document.createElement('meta')
    webMonetizationTag.setAttribute('name', 'monetization')
    webMonetizationTag.setAttribute('content', `$${window.location.host}`)
    document.head.appendChild(webMonetizationTag)
  } catch {}

  window.addEventListener('load', syncEnvironmentToContext)

  // Authenticate the user
  SolidLogic.authn.checkUser()
    .then(() => panes.initMainPage(
      SolidLogic.solidLogicSingleton.store,
      uri,
      buildRenderEnvironment()
    ))
    .then(() => {
      // Re-sync in case layout/theme changed between snapshot and outliner init
      syncEnvironmentToContext('initMainPage')
    })
    .catch(() => undefined)

}

// Logging in and out, for panes and pages (mashlib dynamic): the same as pressing the account
// buttons, without reaching into their shadow roots.
//
//   document.dispatchEvent(new CustomEvent('solid-login-request'))          // the issuer dialog, then the IdP
//   document.dispatchEvent(new CustomEvent('solid-login-request', { detail: { issuer } }))  // straight to that IdP
//   document.dispatchEvent(new CustomEvent('solid-logout-request'))
//   await mashlib.login(issuer?) · await mashlib.logout()
//
// `solid-session-change` is dispatched on the document with detail { webId } (null when logged out)
// when who is logged in changes: once the session is known if someone is logged in (a session
// restored, or a login coming back), then on each login and logout.
const pageAuth = () => document.querySelector('solid-ui-provider')?.auth
global.mashlib.login = async function (issuer) {
  const auth = pageAuth()
  if (!auth) throw new Error('No <solid-ui-provider> on this page: nothing to log in with')
  return auth.login(typeof issuer === 'string' && issuer ? issuer : undefined)
}
global.mashlib.logout = async function () {
  const auth = pageAuth()
  return auth ? auth.logout() : SolidLogic.authSession.logout()
}
const reportFailure = (what) => (error) => console.error(`Failed to ${what}.`, error)
document.addEventListener('solid-login-request', (event) => {
  global.mashlib.login(event.detail?.issuer).catch(reportFailure('log in'))
})
document.addEventListener('solid-logout-request', () => {
  global.mashlib.logout().catch(reportFailure('log out'))
})
{
  let announced = null
  const announce = () => {
    const webId = SolidLogic.authn.currentUser()?.uri || null
    if (webId === announced) return
    announced = webId
    document.dispatchEvent(new CustomEvent('solid-session-change', { detail: { webId } }))
  }
  for (const event of ['login', 'sessionRestore', 'logout', 'sessionChange', 'identityReplaced']) {
    SolidLogic.authSession.events.on(event, announce)
  }
  // The session may be restored before these listeners are added (solid-ui-provider starts it).
  SolidLogic.authn.checkUser().then(announce, () => undefined)
}

// This uses `popstate`, the mechanism browsers without the Navigation API fall back to (see
// NAVIGATION API FALLBACK in solid-panes' navigation/browserEvents.ts). It is kept for pages
// that load mashlib without running the main page, which have nothing else that reacts to back
// and forward. When the main page runs, it shows what the URL is on back and forward itself,
// so this handler must not render a second time. The check is made when the event fires: this
// handler is registered at load, before the main page starts.
window.onpopstate = function (_event) {
  if (panes.isHandlingBrowserNavigation()) return

  global.document.outline.GotoSubject(
    $rdf.sym(window.document.location.href),
    true,
    undefined,
    true,
    undefined
  )
}

export {
  versionInfo,
}
