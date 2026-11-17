import { html } from 'lit-html'
import { lucideMapPin as IconLucideMapPin } from '../icons.js'
import { lucideCheck as IconLucideCheck } from '../icons.js'
import { lucidePlus as IconLucidePlus } from '../icons.js'
import { lucideTrash2 as IconLucideTrash2 } from '../icons.js'
import { lucideGrid2x2 as IconLucideGrid2x2 } from '../icons.js'
import { lucideStar as IconLucideStar } from '../icons.js'
import { lucideGlobe as IconLucideGlobe } from '../icons.js'
import { lucideZap as IconLucideZap } from '../icons.js'
import { lucideMessageSquare as IconLucideMessageSquare } from '../icons.js'
import { lucideMail as IconLucideMail } from '../icons.js'
import { lucideClipboard as IconLucideClipboard } from '../icons.js'
import { lucideX as IconLucideX } from '../icons.js'
import { lucidePencil as IconLucidePencil } from '../icons.js'
import { lucideChevronDown as IconLucideChevronDown } from '../icons.js'

const registerIcon = (tagName, IconClass) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, IconClass)
  }
}

registerIcon('icon-lucide-map-pin', IconLucideMapPin)
registerIcon('icon-lucide-check', IconLucideCheck)
registerIcon('icon-lucide-plus', IconLucidePlus)
registerIcon('icon-lucide-trash-2', IconLucideTrash2)
registerIcon('icon-lucide-grid-2x2', IconLucideGrid2x2)
registerIcon('icon-lucide-star', IconLucideStar)
registerIcon('icon-lucide-globe', IconLucideGlobe)
registerIcon('icon-lucide-zap', IconLucideZap)
registerIcon('icon-lucide-message-square', IconLucideMessageSquare)
registerIcon('icon-lucide-mail', IconLucideMail)
registerIcon('icon-lucide-clipboard', IconLucideClipboard)
registerIcon('icon-lucide-x', IconLucideX)
registerIcon('icon-lucide-pencil', IconLucidePencil)
registerIcon('icon-lucide-chevron-down', IconLucideChevronDown)

export const locationIcon = html`<icon-lucide-map-pin style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-map-pin>`
export const checkMarkIcon = html`<icon-lucide-check style="width: 14px; height: 14px; color: #7C4DFF;" aria-hidden="true"></icon-lucide-check>`
export const plusDarkIcon = html`<icon-lucide-plus style="width: 14px; height: 14px; color: #314158;" aria-hidden="true"></icon-lucide-plus>`
export const trashIcon = html`<icon-lucide-trash-2 style="width: 20px; height: 20px; color: #D1D5DC;" aria-hidden="true"></icon-lucide-trash-2>`
export const bentoIcon = html`<icon-lucide-grid-2x2 style="width: 18px; height: 18px; color: #99A1AF;" aria-hidden="true"></icon-lucide-grid-2x2>`
export const starIcon = html`<icon-lucide-star style="width: 30px; height: 30px; color: #F4F4F4;" aria-hidden="true"></icon-lucide-star>`
export const addIcon = html`<icon-lucide-plus style="width: 12px; height: 12px;" aria-hidden="true"></icon-lucide-plus>`
export const chevronDownIcon = html`<icon-lucide-chevron-down style="width: 18px; height: 18px; color: #6A7282;" aria-hidden="true"></icon-lucide-chevron-down>`
export const globeIcon = html`<icon-lucide-globe style="width: 48px; height: 48px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-globe>`
export const lighteningIcon = html`<icon-lucide-zap style="width: 37px; height: 40px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-zap>`
export const commentIcon = html`<icon-lucide-message-square style="width: 32px; height: 32px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-message-square>`
export const envelopeIcon = html`<icon-lucide-mail style="width: 48px; height: 48px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-mail>`
export const pasteIcon = html`<icon-lucide-clipboard style="width: 12px; height: 14px; color: #6A7282;" aria-hidden="true"></icon-lucide-clipboard>`
export const closeIcon = html`<icon-lucide-x style="width: 12px; height: 12px; color: #4A5565;" aria-hidden="true"></icon-lucide-x>`
export const editIcon = html`<icon-lucide-pencil style="width: 14px; height: 14px;" aria-hidden="true"></icon-lucide-pencil>`
export const deleteIcon = html`<icon-lucide-x style="width: 14px; height: 14px; color: #6A7282;" aria-hidden="true"></icon-lucide-x>`
export const twoDownArrowsIcon = html`<icon-lucide-chevron-down style="width: 16px; height: 16px; color: #7C4DFF;" aria-hidden="true"></icon-lucide-chevron-down>`
