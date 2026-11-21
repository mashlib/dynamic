// toolIndex.js: read a person's tool index and list the panes registered in it.
//
// The index is the one PodOS defines (https://pod-os.org/vocab/tools, ADR 0018): the
// preferences file links to it with tools:toolIndex, and it lists registrations, each
// with a capability and an invocation.
//
//   <card#me> tools:toolIndex <tool-index.ttl> .                      (preferences file)
//   <tool-index.ttl> a tools:ToolIndex ; tools:registration <#meetings> .
//   <#meetings> schema:name "Meetings" ; ac:capability <#meetings-cap> .
//   <#meetings-cap> a ac:Capability ; ac:action odrl:display ; ac:invocation <#meetings-inv> .
//   <#meetings-inv> a panes:PaneModuleInvocation ; schema:url "https://…/meetings-pane.js" .
//
// PodOS's own entries (an external app, an HTML fragment) are read and passed over: this
// page loads SolidOS panes, which are JavaScript modules. The invocation type for those is
// not in the PodOS vocabulary; the name below is a placeholder until that is settled
// (JavaScriptSolidServer/JavaScriptSolidServer#651).

export const PANE_MODULE_INVOCATION = 'https://mashlib.com/ns/panes#PaneModuleInvocation'

const TOOLS = 'https://pod-os.org/vocab/tools#'
const AC = 'https://www.w3.org/ns/ac#'
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
const PREFERENCES_FILE = 'http://www.w3.org/ns/pim/space#preferencesFile'
const SCHEMA = ['https://schema.org/', 'http://schema.org/'] // both spellings are in use

// Every pane registered in the tool index of `me`: [{ name, url, registration }].
// Nothing is run here. A document that cannot be read (not logged in, no such file) gives [].
export async function paneRegistrations ({ store, $rdf, me }) {
  const sym = $rdf.sym
  const load = async (doc) => { try { await store.fetcher.load(doc); return true } catch { return false } }
  const schema = (subject, term) => {
    for (const ns of SCHEMA) {
      const value = store.any(subject, sym(ns + term))
      if (value) return value.value
    }
    return ''
  }

  if (!await load(me.doc())) return []
  const found = []
  for (const preferences of store.each(me, sym(PREFERENCES_FILE), null, me.doc())) {
    if (!await load(preferences)) continue
    // The vocabulary links from the WebID; take the link from any subject in the preferences file.
    for (const index of store.statementsMatching(null, sym(TOOLS + 'toolIndex'), null, preferences).map(st => st.object)) {
      if (index.termType !== 'NamedNode' || !await load(index.doc())) continue
      for (const registration of store.each(index, sym(TOOLS + 'registration'), null, index.doc())) {
        for (const capability of store.each(registration, sym(AC + 'capability'), null, index.doc())) {
          for (const invocation of store.each(capability, sym(AC + 'invocation'), null, index.doc())) {
            if (!store.holds(invocation, sym(RDF_TYPE), sym(PANE_MODULE_INVOCATION), index.doc())) continue
            const url = schema(invocation, 'url')
            if (url) found.push({ name: schema(registration, 'name') || url, url, registration: registration.value })
          }
        }
      }
    }
  }
  return found
}
