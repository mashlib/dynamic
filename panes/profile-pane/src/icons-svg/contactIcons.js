import { html } from 'lit-html'
import { lucidePhone as IconLucidePhone } from '../icons.js'
import { lucideMail as IconLucideMail } from '../icons.js'

const registerIcon = (tagName, IconClass) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, IconClass)
  }
}

registerIcon('icon-lucide-phone', IconLucidePhone)
registerIcon('icon-lucide-mail', IconLucideMail)

export const phoneIcon = html`<icon-lucide-phone style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-phone>`
export const emailIcon = html`<icon-lucide-mail style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-mail>`
