// (type-only import removed: DataBrowserContext from 'pane-registry')
import { NamedNode, LiveStore } from 'rdflib'
import { render } from 'lit-html'
// Lazy here (upstream: static imports): the view and the QR code card, about 70 modules, are
// fetched when a profile is first drawn. label() needs none of them.
const loadView = () => Promise.all([import('./ProfileView.js'), import('./sections/qrcode/QRCodeCard.js')])
import { icons, ns } from 'solid-ui'
import { createResizeDrivenSync } from './utils/resize.js'
// (type-only import removed: Layout from './types.js')
import { presentProfile } from './selectors.js'
export { presentProfile } from './selectors.js'
export { getViewerMode } from './viewerMode.js'

const PROFILE_HEADING_SAVED_EVENT = 'profile-heading-saved'
const MOBILE_LAYOUT_MAX_WIDTH = 768
const HEADING_SECTION_SELECTOR = '[data-profile-section="heading"]'
const SOCIAL_SECTION_SELECTOR = '[data-profile-section="social"]'

async function loadExtendedProfile(store, subject) {
  const otherProfiles = store.each(
    subject,
    ns.rdfs('seeAlso'),
    null,
    subject.doc()
  )
  if (otherProfiles.length > 0) {
    await store.fetcher.load(otherProfiles)
  }
}

function measureLayout(context, root) {
  if (context.environment?.layout === 'mobile') {
    return 'mobile'
  }

  if (typeof window === 'undefined') {
    return 'desktop'
  }

  const measuredWidth = root?.getBoundingClientRect().width || window.innerWidth
  return measuredWidth <= MOBILE_LAYOUT_MAX_WIDTH ? 'mobile' : 'desktop'
}

function syncRenderedLayout(
  root,
  context,
  onLayoutChange
) {
  const updateLayout = () => {
    const nextLayout = measureLayout(context, root)
    if (nextLayout !== root.dataset.layout) {
      onLayoutChange(nextLayout)
    }
  }

  const grid = root.querySelector('.profile-grid')
  return createResizeDrivenSync(updateLayout, [root, grid])
}

function syncSocialSectionHeight(root) {
  const updateHeight = () => {
    const grid = root.querySelector('.profile-grid')
    const headingSection = root.querySelector(HEADING_SECTION_SELECTOR)
    const socialSection = root.querySelector(SOCIAL_SECTION_SELECTOR)

    if (!grid || !headingSection || !socialSection) {
      return
    }

    const isDesktopGrid = root.dataset.layout !== 'mobile' && getComputedStyle(grid).display === 'grid'
    if (!isDesktopGrid) {
      socialSection.style.removeProperty('min-height')
      return
    }

    const nextMinHeight = `${Math.ceil(headingSection.getBoundingClientRect().height)}px`
    if (socialSection.style.minHeight !== nextMinHeight) {
      socialSection.style.minHeight = nextMinHeight
    }
  }
  const headingSection = root.querySelector(HEADING_SECTION_SELECTOR)
  const socialSection = root.querySelector(SOCIAL_SECTION_SELECTOR)

  return createResizeDrivenSync(updateHeight, [root, headingSection, socialSection])
}

function applyEnvironmentAttributes(
  element,
  context
) {
  const layout = context.environment?.layout ?? 'desktop'
  const theme = context.environment?.theme ?? 'light'
  const inputMode = context.environment?.inputMode ?? 'pointer'

  element.classList.add('profile-pane-host')
  element.dataset.layout = layout
  element.dataset.theme = theme
  element.dataset.inputMode = inputMode
}

const Pane = {
  global: false,
  icon: icons.iconBase + 'noun_15059.svg',
  name: 'profile',
  label: function (
    subject,
    context
  ) {
    const t = context.session.store.findTypeURIs(subject)
    if (
      t[ns.vcard('Individual').uri] ||
      t[ns.foaf('Person').uri] ||
      t[ns.schema('Person').uri]
    ) {
      return 'Profile'
    }
    return null
  },
  render: (subject, context) => {
    const target = context.dom.createElement('div')
    const store = context.session.store
    let cleanupSocialSectionHeightSync = null
    let cleanupLayoutSync = null
    let currentLayout = measureLayout(context, target)

    applyEnvironmentAttributes(target, context)
    target.dataset.layout = currentLayout

    let disposed = false

    const renderWithData = async () => {
      if (disposed) return
      const [{ ProfileView }, { hydrateQRCodes }] = await loadView()
      if (disposed) return
      applyEnvironmentAttributes(target, context)
      target.dataset.layout = currentLayout
      const view = await ProfileView(subject, context, currentLayout, async () => {
        if (disposed) return
        target.dispatchEvent(new CustomEvent('profile-pane-saved', {
          bubbles: true,
          composed: true,
          detail: {
            subjectUri: subject.value,
            profileData: presentProfile(subject, store)
          }
        }))
        await renderWithData()
      })
      if (disposed) return
      render(view, target)
      cleanupSocialSectionHeightSync?.()
      cleanupSocialSectionHeightSync = syncSocialSectionHeight(target)
      cleanupLayoutSync?.()
      cleanupLayoutSync = syncRenderedLayout(target, context, (nextLayout) => {
        currentLayout = nextLayout
        void renderWithData()
      })
      await hydrateQRCodes(target)
    }

    // Hosts may edit this profile elsewhere (e.g. a standalone heading); rerender so
    // sections such as More contacts reflect the updated store.
    let wasConnected = target.isConnected
    const dispose = () => {
      if (disposed) return
      disposed = true
      context.dom.removeEventListener(PROFILE_HEADING_SAVED_EVENT, handleHeadingSaved)
      connectionObserver.disconnect()
      cleanupSocialSectionHeightSync?.()
      cleanupLayoutSync?.()
    }
    const connectionObserver = new MutationObserver((records) => {
      // Added-node records also cover mounting and removal within one mutation batch.
      wasConnected ||= target.isConnected || records.some(record =>
        Array.from(record.addedNodes).some(node => node === target || node.contains(target))
      )
      if (wasConnected && !target.isConnected) dispose()
    })
    connectionObserver.observe(context.dom, { childList: true, subtree: true })
    const handleHeadingSaved = (event) => {
      if (target.isConnected) {
        wasConnected = true
      } else if (wasConnected) {
        dispose()
        return
      } else {
        return
      }

      const detail = (event).detail
      if (detail?.subjectUri !== subject.value) return
      renderWithData().catch((error) => {
        console.error('Failed to refresh the profile after a heading update.', error)
      })
    }
    context.dom.addEventListener(PROFILE_HEADING_SAVED_EVENT, handleHeadingSaved)

    loadExtendedProfile(store, subject).then(async () => {
      await renderWithData()
    })

    return target
  },
}

export default Pane
