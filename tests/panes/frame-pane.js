// A frame pane for tests/browse-api.mjs: drawn for every subject when named by ?pane=, with no
// browser bar. It writes down what it was given, and counts its draws in window.frameDraws.
export default {
  name: 'test-frame',
  label: () => 'Test frame',
  frame: true,
  chrome: 'none',
  render (subject, context) {
    window.frameDraws = (window.frameDraws || 0) + 1
    const div = context.dom.createElement('div')
    div.className = 'test-frame'
    div.dataset.subject = subject.uri
    div.dataset.framed = context.framedPane ? context.framedPane.name : ''
    div.dataset.status = context.loadError ? String(context.loadError.status) : ''
    div.dataset.draw = String(window.frameDraws)
    div.textContent = `Test frame around ${div.dataset.framed || 'nothing'} for ${subject.uri}`
    div.style.minHeight = '200px'
    return div
  }
}
