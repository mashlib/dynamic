// A pane for tests/browse-api.mjs that takes the place of the built-in source pane
// (replaces: its own name), so it is the one drawn for a JavaScript file.
export default {
  name: 'source',
  replaces: 'source',
  label: (subject) => /\.m?js$/.test(subject.uri) ? 'Source (replacement)' : null,
  shouldGetFocus: (subject) => /\.m?js$/.test(subject.uri),
  render (subject, context) {
    const div = context.dom.createElement('div')
    div.className = 'test-source-replacement'
    div.textContent = 'The replacement source pane, for ' + subject.uri
    return div
  }
}
