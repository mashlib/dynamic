/*
* Utility functions to help load the profile
* especially when I am not logged in
*/

import { IndexedFormula, NamedNode, sym } from 'rdflib'
import { ns } from 'solid-ui'
import { authn, store } from 'solid-logic'

// Where a pod keeps its owner's profile is not fixed: some servers name the document
// `card`, others `card.jsonld`. These are tried in turn.
const DEFAULT_PROFILE_PATHS = ['profile/card#me', 'profile/card.jsonld#me']

// The first of the usual profile addresses under `base` that loads, or undefined.
async function loadDefaultProfile (base) {
  for (const path of DEFAULT_PROFILE_PATHS) {
    const webId = sym(`${base}${path}`)
    try {
      await store.fetcher.load(webId)
      return webId
    } catch (err) {
      // not there: try the next
    }
  }
  return undefined
}

export function isOwnWebIdProfile (subject) {
  const viewer = authn.currentUser()
  return Boolean(viewer && (viewer.sameTerm(subject) || viewer.doc().sameTerm(subject)))
}

export async function loadProfileFromURI (
  uri
) {
  try {
    const pod = uri.site().uri
    // TODO: This is a hack - we cannot assume that the profile is at this document, but we will live with it for now
    const webId = await loadDefaultProfile(pod)
    if (webId) return webId

    // we try a prefixed pod structure
    try {
      const uriUrl = new URL(uri.uri)
      const pathSegments = uriUrl.pathname.split('/').filter(Boolean)
      if (pathSegments.length > 0) {
        const derivedPod = `${uriUrl.origin}/${pathSegments[0]}/`
        const derivedWebId = await loadDefaultProfile(derivedPod)
        if (derivedWebId) return derivedWebId
      }
    } catch (err) {
      // ignore any failure and continue fallback lookup
    }

    try {
      await store.fetcher.load(uri)
    } catch (err) {
      return uri
    }

    const primaryTopic = store.any(uri, ns.foaf('primaryTopic'), null, uri.doc())
    if (primaryTopic && primaryTopic.termType === 'NamedNode') {
      try {
        await store.fetcher.load(primaryTopic)
        return primaryTopic
      } catch (err) {
        return uri
      }
    }

    return uri
  } catch (err) {
    return uri
  }
}

export function isWebIdUri (uri) {
  try {
    const parsedURL = new URL(uri.uri)
    return parsedURL.hash === '#me'
  } catch (err) {
    return false
  }
}

export async function getNameOfPodOwner (
  pod
) {
  // TODO: This is a hack - we cannot assume that the profile is at this document, but we will live with it for now
  const webId = await loadDefaultProfile(pod.uri)
  if (webId) return getName(store, webId)

  // we try a prefixed pod structure
  try {
    const uriUrl = new URL(pod.uri)
    const pathSegments = uriUrl.pathname.split('/').filter(Boolean)
    if (pathSegments.length > 0) {
      const derivedPod = `${uriUrl.origin}/${pathSegments[0]}/`
      const derivedWebId = await loadDefaultProfile(derivedPod)
      if (derivedWebId) return getName(store, derivedWebId)
    }
  } catch (err) {
    if (!isFetchErrorStatus(err, 403)) {
      console.error('getNameOfPodOwner failed on derived profile:', err)
    }
  }

  return ''
}

export function getName (store, ownersProfile) {
  return (
    store.anyValue(ownersProfile, ns.vcard('fn'), null, ownersProfile.doc()) ||
    store.anyValue(ownersProfile, ns.foaf('name'), null, ownersProfile.doc()) ||
    new URL(ownersProfile.uri).host.split('.')[0]
  )
}

function isFetchErrorStatus (err, status) {
  if (!err || typeof err !== 'object') return false
  const statusCode = (err)?.response?.status ?? (err)?.status
  const parsedStatus = Number(statusCode)
  return Number.isFinite(parsedStatus) && parsedStatus === status
}
