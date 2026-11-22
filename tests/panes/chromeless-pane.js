// A pane for tests/browse-api.mjs that asks for no browser bar (chrome: 'none'). It is drawn
// for a folder whose address ends in /public/; anything else is drawn by the built-in panes.
export default {
  name: 'test-chromeless',
  label: (subject) => /\/public\/$/.test(subject.uri) ? 'Chromeless' : null,
  shouldGetFocus: (subject) => /\/public\/$/.test(subject.uri),
  chrome: 'none',
  render (subject, context) {
    const div = context.dom.createElement('div')
    div.className = 'test-chromeless'
    div.textContent = 'A pane with no browser bar, for ' + subject.uri
    return div
  }
}
