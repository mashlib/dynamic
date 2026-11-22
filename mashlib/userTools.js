// userTools.js: a person's own panes and apps, for any page that runs SolidOS.
//
// Two sources of panes: the link (?pane=<address of a pane module>, the browse page only) and,
// once logged in, the person's tool index (./toolIndex.js). A pane is code that runs as the
// person looking, so one from a site this browser has not allowed before is asked about first;
// one from the page's own site, or from a site allowed here before, is added straight away.
// The apps in the tool index are offered as "Open with" links for what is on show.
//
// The page gives: where SolidOS is (panes, store, $rdf, authn), what is on show (subject), and
// how to show it again (show). This file brings its own question box and link row, and puts
// them above #OutlineView unless the page already has them.
//
//   const tools = await userTools({ panes, store, $rdf, authn, subject, show, linkPanes, framePanes })
//   tools.refresh()      // what is on show changed: offer the apps that fit it
//
// Two things only a pane named by the link may do (a tool index pane may not):
// - `frame: true` in its default export (or its address given as ?frame=, framePanes here)
//   makes it a frame: it is drawn for every subject, before any other choice, and given the
//   pane that would have been drawn as context.framedPane (see solid-panes' outline manager).
// - `replaces: '<name>'`, equal to its own name, makes it take the place of the pane already
//   registered under that name (a built-in one, or a copy added first), instead of being
//   passed over.

const ALLOWED = 'mashlib.panes.allowed' // sites whose panes this browser has allowed
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'

const CSS = `
.browse-open-with { display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 16px 0 }
.browse-open-with[hidden] { display: none }
.browse-open-with a { padding: 6px 14px; border: 1px solid #cfd4e0; border-radius: 999px; background: #fff; color: #4b3bd6; font-size: 14px; font-weight: 600; text-decoration: none }
.browse-open-with a:hover { background: #f3f1ff }
.browse-ask[hidden] { display: none }
.browse-ask {
  max-width: 760px; margin: 20px auto 0; padding: 18px 20px;
  background: #fff; border-radius: 14px; box-shadow: 0 0 0 1px #e2e8f0, 0 8px 24px rgba(15, 23, 43, .08);
  border-left: 5px solid #7c4dff;
  font-family: 'Atkinson Hyperlegible Next', system-ui, sans-serif; color: #314158; font-size: 15px; line-height: 1.5;
}
.browse-ask h2 { margin: 0 0 6px; font-size: 18px; font-weight: 700; color: #0f172b }
.browse-ask p { margin: 0 0 10px }
.browse-ask code { display: block; white-space: pre-wrap; margin: 0 0 10px; padding: 8px 10px; border-radius: 8px; background: #f1f5f9; color: #0f172b; font-size: 13px; overflow-wrap: anywhere }
.browse-ask div { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 14px }
.browse-ask button { height: 36px; padding: 0 18px; border-radius: 999px; cursor: pointer; font: inherit; font-size: 14px; font-weight: 600 }
.browse-ask .yes { border: 0; background: #7c4dff; color: #fff }
.browse-ask .yes:hover, .browse-ask .yes:focus-visible { background: #6a3bf0; outline: none }
.browse-ask .no { border: 1px solid #cad5e2; background: #fff; color: #314158 }
.browse-ask .no:hover, .browse-ask .no:focus-visible { background: #f1f5f9; outline: none }
`

// A pane's address: http(s), no credentials. Returns a URL or null.
export function paneAddress (address) {
  try {
    const url = new URL(address)
    return /^https?:$/.test(url.protocol) && !url.username && !url.password ? url : null
  } catch { return null }
}

// The question box and the link row, made once, above the outline.
function furniture (dom) {
  if (!dom.getElementById('userToolsStyle')) {
    const style = dom.createElement('style')
    style.id = 'userToolsStyle'
    style.textContent = CSS
    dom.head.appendChild(style)
  }
  const outline = dom.getElementById('OutlineView')
  const place = (node) => { if (outline && outline.parentNode) outline.parentNode.insertBefore(node, outline); else dom.body.appendChild(node) }
  const make = (tag, props = {}, children = []) => {
    const node = dom.createElement(tag)
    for (const [key, value] of Object.entries(props)) {
      if (key === 'text') node.textContent = value
      else if (key === 'hidden') node.hidden = value
      else node.setAttribute(key, value)
    }
    for (const child of children) node.appendChild(child)
    return node
  }

  if (!dom.getElementById('browseAsk')) {
    place(make('section', { class: 'browse-ask', id: 'browseAsk', role: 'alertdialog', 'aria-labelledby': 'browseAskTitle', hidden: true }, [
      make('h2', { id: 'browseAskTitle' }, [
        make('span', { id: 'browseAskFrom', text: 'This link' }),
        dom.createTextNode(' adds a pane from '),
        make('span', { id: 'browseAskSite' })
      ]),
      make('p', { text: 'A pane is a small program that draws what you are looking at. It runs as you: once you are logged in it can read and change whatever you can on your pod. Allow it only if you trust that site.' }),
      make('code', { id: 'browseAskFiles' }),
      make('div', {}, [
        make('button', { class: 'yes', id: 'browseAskYes', type: 'button', text: 'Allow panes from this site' }),
        make('button', { class: 'no', id: 'browseAskNo', type: 'button', text: 'Not now' })
      ])
    ]))
  }
  if (!dom.getElementById('browseOpenWith')) {
    place(make('nav', { class: 'browse-open-with', id: 'browseOpenWith', 'aria-label': 'Open with an app', hidden: true }))
  }
}

export async function userTools ({ dom = document, panes, store, $rdf, authn, subject, show, linkPanes = [], framePanes = [] }) {
  furniture(dom)

  const allowed = () => { try { return JSON.parse(localStorage.getItem(ALLOWED)) || [] } catch { return [] } }
  const allow = (origin) => { try { localStorage.setItem(ALLOWED, JSON.stringify([...new Set([...allowed(), origin])])) } catch { /* private window: this visit only */ } }
  const isTrusted = (url) => url.origin === location.origin || allowed().includes(url.origin)

  // The panes named by the link; those of them that are frames.
  const fromLink = new Set([...linkPanes, ...framePanes].filter(Boolean).map(url => url.href))
  const asFrame = new Set(framePanes.filter(Boolean).map(url => url.href))
  const outliner = panes.getOutliner(dom)

  // The pane, if it was added now; null if it was not (or one of that name was there already).
  async function addPane (url) {
    try {
      const module = await import(url.href)
      const pane = module.default
      if (!pane || typeof pane.label !== 'function' || typeof pane.render !== 'function' || !pane.name) throw new Error('its default export is not a pane (name, label, render)')
      const linked = fromLink.has(url.href)
      const there = panes.list.find(p => p.name === pane.name)
      let added = null
      if (there === pane) {
        // the same module, named twice
      } else if (!there) {
        ;(panes.registerPane || panes.register)(pane) // registerPane: not as one the server chose (mashlib/src/index.js)
        added = pane
      } else if (linked && pane.replaces === pane.name) {
        panes.list.splice(panes.list.indexOf(there), 1, pane)
        added = pane
        console.info('[browse] pane "' + pane.name + '" from ' + url.href + ' replaces the one registered before')
      } else {
        console.info('[browse] pane "' + pane.name + '" from ' + url.href + ' passed over: one of that name is registered already')
      }
      if (linked && (pane.frame === true || asFrame.has(url.href)) && outliner && !outliner.framePanes.includes(pane)) {
        if (panes.addFramePane) panes.addFramePane(pane)
        else {
          outliner.framePanes.push(pane)
          dom.dispatchEvent(new CustomEvent('mashlib:framepane', { detail: { pane } }))
        }
      }
      if (added) console.info('[browse] pane "' + pane.name + '" added from ' + url.href)
      return added
    } catch (error) {
      console.warn('[browse] pane not added: ' + url.href + ': ' + (error && error.message ? error.message : error))
      return null
    }
  }

  // Draw what is on show again only if a pane just added could be drawn for it.
  const relevantToShown = (added) => {
    const uri = subject()
    if (!uri) return false
    const thing = $rdf.sym(uri)
    return added.some(pane => {
      if (outliner && outliner.framePanes.includes(pane)) return true
      try { return !!pane.label(thing, outliner ? outliner.context : {}) } catch { return true }
    })
  }

  // Ask about one site at a time; the answer covers every pane named from it.
  function ask (origin, urls, from) {
    return new Promise((resolve) => {
      const box = dom.getElementById('browseAsk')
      dom.getElementById('browseAskFrom').textContent = from
      dom.getElementById('browseAskSite').textContent = new URL(origin).host
      dom.getElementById('browseAskFiles').textContent = urls.map(u => u.href).join('\n')
      box.hidden = false
      const answer = (yes) => { box.hidden = true; yesButton.onclick = noButton.onclick = null; resolve(yes) }
      const yesButton = dom.getElementById('browseAskYes'); const noButton = dom.getElementById('browseAskNo')
      yesButton.onclick = () => answer(true)
      noButton.onclick = () => answer(false)
    })
  }

  // Allowed panes go straight in, but never hold the page up for long. The panes added.
  const addTrusted = async (urls) => (await Promise.race([Promise.all(urls.map(addPane)), new Promise(resolve => setTimeout(() => resolve([]), 5000))])).filter(Boolean)
  // The rest are asked about, one site at a time and one question on screen at a time.
  let asking = Promise.resolve()
  const askAbout = (urls, from) => (asking = asking.then(async () => {
    for (const origin of [...new Set(urls.map(url => url.origin))]) {
      const fromSite = urls.filter(url => url.origin === origin)
      if (!allowed().includes(origin)) {
        if (!await ask(origin, fromSite, from)) continue
        allow(origin)
      }
      const added = (await Promise.all(fromSite.map(addPane))).filter(Boolean)
      if (relevantToShown(added)) show() // show the same thing again, with the new pane
    }
  }))

  // An external app is a link made from a template, offered when what is on show is of a kind
  // the app is registered for.
  let apps = []
  let offer = 0
  async function offerApps () {
    const mine = ++offer
    const bar = dom.getElementById('browseOpenWith')
    const uri = subject()
    if (uri && apps.length) {
      // What kind of thing it is comes from its document: make sure that has been read.
      try { await store.fetcher.load($rdf.sym(uri).doc()) } catch { /* unreadable: only apps for anything fit */ }
      if (mine !== offer) return
    }
    bar.replaceChildren()
    if (uri && apps.length) {
      const thing = $rdf.sym(uri)
      const type = $rdf.sym(RDF_TYPE)
      const fits = (app) => !app.resourceTypes.length || app.resourceTypes.some(kind => store.holds(thing, type, $rdf.sym(kind)) || store.holds(null, type, $rdf.sym(kind), thing.doc()))
      for (const app of apps.filter(fits)) {
        const address = app.address(uri)
        if (!address) continue
        const link = dom.createElement('a')
        link.href = address
        link.target = '_blank'
        link.rel = 'noopener noreferrer'
        link.textContent = 'Open with ' + app.name
        bar.appendChild(link)
      }
    }
    bar.hidden = !bar.childElementCount
  }

  // The person's own panes and apps: once logged in, the ones registered in their tool index.
  let indexReadFor = ''
  async function fromToolIndex () {
    const me = authn.currentUser()
    if (!me) { indexReadFor = ''; apps = []; offerApps(); return }
    if (indexReadFor === me.uri) return
    indexReadFor = me.uri
    try {
      const { paneRegistrations, appRegistrations, appAddress } = await import('./toolIndex.js')
      const registered = await paneRegistrations({ store, $rdf, me })
      apps = (await appRegistrations({ store, $rdf, me })).map(app => ({ ...app, address: (resource) => appAddress(app, resource) }))
      offerApps()
      const urls = [...new Map(registered.map(entry => paneAddress(entry.url)).filter(Boolean).map(url => [url.href, url])).values()].slice(0, 20)
      console.info('[browse] tool index of ' + me.uri + ': ' + urls.length + ' pane(s), ' + apps.length + ' app(s)')
      if (relevantToShown(await addTrusted(urls.filter(isTrusted)))) show()
      askAbout(urls.filter(url => !isTrusted(url)), 'Your tool index')
    } catch (error) {
      console.warn('[browse] tool index not read: ' + (error && error.message ? error.message : error))
    }
  }

  // Panes named by the link: the allowed ones are in before the first view.
  const named = [...new Map([...linkPanes, ...framePanes].filter(Boolean).map(url => [url.href, url])).values()].slice(0, 10)
  await addTrusted(named.filter(isTrusted))
  askAbout(named.filter(url => !isTrusted(url)), 'This link')

  for (const event of ['login', 'sessionRestore', 'logout', 'sessionChange', 'identityReplaced']) {
    authn.authSession.events.on(event, () => fromToolIndex())
  }
  fromToolIndex() // already logged in when the page opened

  return { refresh: offerApps }
}
