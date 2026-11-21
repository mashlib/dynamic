// toolIndex.js: read a person's tool index and list what is registered in it.
//
// The index is the one PodOS defines (https://pod-os.org/vocab/tools, ADR 0018): the
// preferences file links to it with tools:toolIndex, and it lists registrations, each
// with a capability and an invocation.
//
//   <card#me> tools:toolIndex <toolIndex.jsonld> .                    (preferences file)
//   <toolIndex.jsonld> a tools:ToolIndex ; tools:registration <#meetings>, <#umai> .
//
//   <#meetings> schema:name "Meetings" ; ac:capability <#meetings-cap> .
//   <#meetings-cap> a ac:Capability ; ac:action odrl:display ; ac:invocation <#meetings-inv> .
//   <#meetings-inv> a panes:PaneModuleInvocation ; schema:url "https://…/meetings-pane.js" .
//
//   <#umai> a tools:AppRegistration ; schema:name "Umai viewer" ; ac:capability <#umai-cap> .
//   <#umai-cap> a ac:Capability ; ac:action odrl:display ; ac:resourceType schema:Recipe ;
//       ac:invocation [ a ac:UriTemplateInvocation ; hydra:template "https://…/viewer?url={url}" ] .
//
// Two kinds are read here: a SolidOS pane (a JavaScript module) and an external app (a link
// made from a URI template). PodOS's HTML tool, a fragment drawn with PodOS's own elements,
// is passed over. The invocation type for a pane module is not in the PodOS vocabulary; the
// name below is a placeholder until that is settled (JavaScriptSolidServer/JavaScriptSolidServer#651).

export const PANE_MODULE_INVOCATION = 'https://mashlib.com/ns/panes#PaneModuleInvocation'

const TOOLS = 'https://pod-os.org/vocab/tools#'
const AC = 'https://www.w3.org/ns/ac#'
const HYDRA = 'http://www.w3.org/ns/hydra/core#'
const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
const PREFERENCES_FILE = 'http://www.w3.org/ns/pim/space#preferencesFile'
const SCHEMA = ['https://schema.org/', 'http://schema.org/'] // both spellings are in use

// Every invocation registered in the tool index of `me`, with its registration and capability.
// Nothing is run here. A document that cannot be read (not logged in, no such file) gives [].
async function invocations ({ store, $rdf, me }) {
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
      const doc = index.doc()
      for (const registration of store.each(index, sym(TOOLS + 'registration'), null, doc)) {
        for (const capability of store.each(registration, sym(AC + 'capability'), null, doc)) {
          for (const invocation of store.each(capability, sym(AC + 'invocation'), null, doc)) {
            found.push({
              store, sym, schema, doc, registration, capability, invocation,
              types: store.each(invocation, sym(RDF_TYPE), null, doc).map(type => type.value)
            })
          }
        }
      }
    }
  }
  return found
}

// Every pane registered in the tool index of `me`: [{ name, url, registration }].
export async function paneRegistrations (who) {
  const found = []
  for (const { schema, registration, invocation, types } of await invocations(who)) {
    if (!types.includes(PANE_MODULE_INVOCATION)) continue
    const url = schema(invocation, 'url')
    if (url) found.push({ name: schema(registration, 'name') || url, url, registration: registration.value })
  }
  return found
}

// Every external app registered in the tool index of `me`:
// [{ name, template, variable, resourceTypes, registration }]. `template` is a URI template
// with one variable (`{url}` unless the mapping names another); `resourceTypes` are the classes
// the app is for, empty meaning anything.
export async function appRegistrations (who) {
  const found = []
  for (const { store, sym, schema, doc, registration, capability, invocation, types } of await invocations(who)) {
    if (!types.includes(AC + 'UriTemplateInvocation')) continue
    const template = store.any(invocation, sym(HYDRA + 'template'), null, doc) || store.any(invocation, sym(AC + 'template'), null, doc)
    if (!template) continue
    let variable = 'url'
    for (const mapping of [...store.each(invocation, sym(HYDRA + 'mapping'), null, doc), ...store.each(invocation, sym(AC + 'mapping'), null, doc)]) {
      const named = store.any(mapping, sym(HYDRA + 'variable'), null, doc) || store.any(mapping, sym(AC + 'variable'), null, doc)
      if (named) variable = named.value
    }
    found.push({
      name: schema(registration, 'name') || template.value,
      template: template.value,
      variable,
      resourceTypes: store.each(capability, sym(AC + 'resourceType'), null, doc).map(type => type.value),
      registration: registration.value
    })
  }
  return found
}

// The address an app opens for a resource: the template with its variable filled in, or ''
// if the result is not an http(s) address.
export function appAddress (app, resource) {
  const filled = app.template.split('{' + app.variable + '}').join(encodeURIComponent(resource))
  try {
    const url = new URL(filled)
    return /^https?:$/.test(url.protocol) && !filled.includes('{') ? url.href : ''
  } catch { return '' }
}
