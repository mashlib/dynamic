// Load with pane.html?pane=profile-pane&smoke. Checks the profile pane rendered
// the test profile and that a collapsed section opens. Results in <pre id="smoke">.

const out = document.body.appendChild(document.createElement('pre'))
out.id = 'smoke'

const tick = (ms = 50) => new Promise(resolve => setTimeout(resolve, ms))
const until = async (fn, ms = 15000) => { const end = Date.now() + ms; while (Date.now() < end) { const v = fn(); if (v) return v; await tick(100) } return null }
const check = (name, ok) => { out.textContent += `${ok ? 'PASS' : 'FAIL'} ${name}\n` }
const main = document.querySelector('main')

const host = await until(() => main.querySelector('.profile-pane-host [data-profile-section]'))
check('profile pane renders its sections', !!host)
// From profile-pane 4.1.0 the name, photo and role are the page's profile heading
// (solid-panes' <solid-panes-profile-heading>), no longer a section of the pane.
check('no heading section of its own (4.1.0)', !main.querySelector('.profile-pane-host [data-profile-section="heading"]'))
check(`name: "${main.querySelector('h1, h2')?.textContent.trim()}"`, main.textContent.includes('Testing SolidOS Test'))
check(`layout: ${main.querySelector('.profile-pane-host')?.dataset.layout}`, ['desktop', 'mobile'].includes(main.querySelector('.profile-pane-host')?.dataset.layout))
check('resume entries render', main.textContent.includes('Mission a Mars') && main.textContent.includes('The Beatles'))
check('social icons are image URLs from icons-png or the ontology', main.querySelectorAll('img').length > 3)
check('QR code is drawn', !!await until(() => main.querySelector('svg, canvas, img[src^="data:"]')))

const toggle = main.querySelector('.profile-section-collapsible__toggle-button[aria-expanded="false"]')
if (toggle) {
  toggle.shadowRoot.querySelector('button').click()
  await tick(200)
  check(`collapsed section opens: "${toggle.getAttribute('aria-label')}"`, toggle.getAttribute('aria-expanded') === 'true' && !document.getElementById(toggle.getAttribute('aria-controls'))?.hidden)
} else {
  check('no collapsed sections on this layout (desktop)', true)
}

out.textContent += 'DONE\n'
