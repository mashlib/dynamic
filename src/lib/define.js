// Replaces the @customElement decorator. Skips duplicate registrations,
// as upstream does (see SolidOS/solidos#300).

export function define (tagName, elementClass) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass)
  }

  return elementClass
}

/** Upstream's `@customElement(tag)` decorator, callable as a plain function: customElement(tag)(Class). */
export function customElement (tagName) {
  return (elementClass, context) => {
    // Used as a standard decorator (a pane built elsewhere, e.g. with TypeScript 5 decorators):
    // register once the class is complete. Its static fields, `styles` among them, are
    // assigned after the decorator runs, and defining the element earlier makes Lit settle
    // its styles without them. As upstream's decorators.ts.
    if (context && typeof context.addInitializer === 'function') {
      context.addInitializer(() => define(tagName, elementClass))
      return
    }

    return define(tagName, elementClass)
  }
}
