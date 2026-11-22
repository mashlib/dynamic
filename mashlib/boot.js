// Entry point for a Solid server's ES-module data browser mode, e.g. JSS:
//
//   jss start --mashlib-module https://<pod>/public/solidos/mashlib/boot.js
//
// The server serves, for every resource a browser navigates to, a bare page with
// <div id="mashlib"> and this module. So this does what mashlib's databrowser.html
// does: the importmap, the page markup, mashlib, then runDataBrowser() for the
// page's own URL. (Also fetches boot.css: <moduleUrl>.css; mash.css comes via
// mashlib's own importCss.)

const here = (path) => new URL(path, import.meta.url).href

// 1. The importmap: src/importmap.js is a classic script that writes it next to
//    itself. Import maps added before the first bare import still apply.
await new Promise((resolve, reject) => {
  const script = document.createElement('script')

  script.src = here('../src/importmap.js')
  script.onload = resolve
  script.onerror = () => reject(new Error(`could not load ${script.src}`))
  document.head.append(script)
})

// 2. The markup of mashlib's src/databrowser.html, into the server's page.
document.body.id = 'PageBody'
document.body.dataset.appShell = 'databrowser'
document.getElementById('mashlib')?.remove()
document.body.insertAdjacentHTML('beforeend', `
  <solid-ui-provider>
    <a href="#MainContent" class="skip-link">Skip to main content</a>
    <div class="app-main" tabindex="-1" aria-live="polite">
      <div class="app-shell">
        <main id="MainContent" class="app-view">
          <div id="OutlineView" class="outline-view" aria-label="Resource browser"></div>
        </main>
      </div>
    </div>
  </solid-ui-provider>
`)

// 3. mashlib, then the data browser for this page's URL.
await import('./src/index.js')

// 3a. The server's own panes (JSS --panes) before the first view, so that the view is drawn with
//     them (a frame pane, or a pane that wins the choice) instead of being drawn once without
//     them and never again. The server's page names them in its call to jssAddPanes([...]); its
//     loader (pane-loader.js) then finds them registered. A pane that has not arrived within
//     PANES_WAIT ms is left to that loader, which draws the view again when it registers it.
const PANES_WAIT = 4000

function serverPanes () {
  for (const script of document.querySelectorAll('script:not([src])')) {
    const call = script.textContent.match(/jssAddPanes\((\[[^\]]*\])/)
    if (!call) continue
    try { return JSON.parse(call[1]).filter(url => typeof url === 'string' && /^https?:/.test(new URL(url, location.href).protocol)) } catch { return [] }
  }
  return []
}

async function addServerPane (url) {
  try {
    const pane = (await import(new URL(url, location.href).href)).default
    if (!pane || typeof pane.name !== 'string' || !pane.name || typeof pane.label !== 'function' || typeof pane.render !== 'function') return
    if (window.panes.list.some(p => p.name === pane.name)) return
    window.panes.register(pane) // as the server's loader would: frame: true counts (src/index.js)
  } catch (error) {
    console.warn('[boot] server pane not loaded yet: ' + url + ': ' + (error && error.message ? error.message : error))
  }
}

// 3b. The server's loader asks for the view as soon as it has registered them
//     (GotoSubject(subject, true, undefined, true)). Before the first view that is not needed: the
//     first view comes next, with them. After it, when nothing has been registered since that
//     subject was drawn, it would be the same view again: drawing it twice can drop a pane that
//     has just opened, and a click made at that moment. Only a late pane draws the view again.
{
  const outliner = window.panes.getOutliner(document)
  const gotoSubject = outliner.GotoSubject.bind(outliner)
  let drawn = null // { uri, panes }: what the last solo view showed, and how many panes there were
  outliner.GotoSubject = function (subject, expand, pane, solo, referrer, table, options) {
    const uri = subject && subject.uri
    const bare = expand && solo && !pane && !referrer && !table && !options
    if (bare && (!drawn || (uri === drawn.uri && window.panes.list.length === drawn.panes))) return subject
    if (solo && uri) drawn = { uri, panes: window.panes.list.length }
    return gotoSubject(subject, expand, pane, solo, referrer, table, options)
  }
}

const fromServer = serverPanes()
if (fromServer.length) {
  await Promise.race([Promise.all(fromServer.map(addServerPane)), new Promise(resolve => setTimeout(resolve, PANES_WAIT))])
}

window.panes.runDataBrowser()

// 4. The person's own panes and apps (./userTools.js): once logged in, the panes registered
//    in their tool index are added, after asking about a site not allowed here before, and
//    the apps in it are offered as "Open with" links.
import('./userTools.js').then(async ({ userTools }) => {
  const { store } = window.SolidLogic.solidLogicSingleton
  const outliner = window.panes.getOutliner(document)
  const subject = () => location.href
  const tools = await userTools({
    panes: window.panes,
    store,
    $rdf: window.$rdf,
    authn: window.SolidLogic.authn,
    subject,
    show: () => outliner.GotoSubject(window.$rdf.sym(subject()), true, undefined, true, undefined)
  })

  window.addEventListener('popstate', () => tools.refresh())
}).catch(error => console.warn('[browse] own panes and apps not set up: ' + (error && error.message ? error.message : error)))

// 5. As databrowser.html: keep --app-header-height in step with the header.
const header = document.getElementById('mainSolidUiHeader')

if (header) {
  const syncHeaderHeight = () => {
    const height = header.getBoundingClientRect().height

    if (height > 0) {
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize)

      document.documentElement.style.setProperty('--app-header-height', (height / rootFontSize) + 'rem')
    }
  }

  syncHeaderHeight()
  new ResizeObserver(syncHeaderHeight).observe(header)
}
