// The joined copy (dist/) must lay a page out exactly as the source tree does: same
// elements, same boxes. Catches a stylesheet that was lost or broken in the build.
//
//   python3 -m http.server 8731 &      # in this directory, after `npm run build`
//   node tests/same-layout.mjs
import { launch } from '../tools/cdp.mjs'

const BASE = process.env.BASE ?? 'http://localhost:8731/'
const T = 'https://testingsolidos.solidcommunity.net'
const SUBJECTS = {
  profile: `${T}/profile/card#me`,
  folder: `${T}/public/`,
  // not the bare document (profile/card): its data table grows as linked documents arrive,
  // by a different amount on every load, in either tree
  tracker: `${T}/public/Testing%20Tracker/index.ttl#this`,
  addressBook: `${T}/public/Contacts/index.ttl#this`
}
const BOXES = `(() => {
  const out = []
  const walk = (node) => { for (const el of node.querySelectorAll('*')) {
    const r = el.getBoundingClientRect()
    if (!/^(SCRIPT|STYLE|LINK|META|TITLE|HEAD)$/.test(el.tagName)) out.push([el.tagName.toLowerCase(), String(el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className).slice(0, 40), Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)].join(' '))
    if (el.shadowRoot) walk(el.shadowRoot)
  } }
  walk(document.body)
  return out
})()`
const READY = `(() => { const o = document.getElementById('OutlineView'); if (!o) return false; let text = o.innerText; const walk = (n) => { for (const el of n.querySelectorAll('*')) if (el.shadowRoot) { text += el.shadowRoot.textContent; walk(el.shadowRoot) } }; walk(o); return text.replace(/\\s+/g, ' ').trim().length > 40 })()`

const page = await launch({ port: 9336 })
let failures = 0
try {
  for (const [name, subject] of Object.entries(SUBJECTS)) {
    const boxes = {}
    // The source tree twice: a page that does not lay out the same way on two loads of the
    // same files (data that arrives in a different order) cannot be compared across trees.
    for (const [tree, key] of [['mashlib', 'mashlib'], ['mashlib', 'again'], ['dist', 'dist']]) {
      await page.goto(`${BASE}${tree}/databrowser.html?uri=${encodeURIComponent(subject)}`)
      await page.waitFor(READY, { timeout: 40000 })
      // Panes fill in as data, images and fonts arrive, at different speeds in the two trees:
      // measure once the boxes have stopped moving.
      let last = ''
      for (let i = 0; i < 12; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        boxes[key] = await page.evaluate(BOXES)
        const now = boxes[key].join('\n')
        if (now === last && i >= 2) break
        last = now
      }
    }
    const a = boxes.mashlib; const b = boxes.dist
    if (a.join('\n') !== boxes.again.join('\n')) {
      console.log(`SKIP ${name}: the source tree itself lays out differently on two loads`)
      continue
    }
    const differ = []
    for (let i = 0; i < Math.max(a.length, b.length) && differ.length < 5; i++) if (a[i] !== b[i]) differ.push(`#${i}: source "${a[i]}" / dist "${b[i]}"`)
    const ok = differ.length === 0
    if (!ok) failures++
    console.log(`${ok ? 'PASS' : 'FAIL'} ${name}: ${a.length} elements in the source tree, ${b.length} in dist${ok ? ', same boxes' : ''}`)
    for (const d of differ) console.log('     ' + d)
  }
} finally { await page.close() }
console.log(failures ? `${failures} failed` : 'all passed')
process.exitCode = failures ? 1 : 0
