import{a as s}from"./part-AHAYGN5G.js";import{e as n}from"./part-FI5O6ZH7.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import{b as o}from"./part-VHSBPZHI.js";import"./part-GPLAS2FA.js";import"./part-VB56GJIN.js";import{a as t}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var e=class extends o{static states={initializing:i=>!i.auth.initialized,loggedIn:i=>!!i.auth.account};constructor(){super(),n(this),this.unsubscribeSessionUpdated=void 0}connectedCallback(){super.connectedCallback(),this.unsubscribeSessionUpdated=this.auth.onSessionUpdated(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeSessionUpdated?.()}render(){return this.auth.initialized?this.auth.account?t`
      <slot></slot>
    `:t`
        <slot name="guest"></slot>
      `:t`
        <slot name="initializing"></slot>
      `}};s("solid-ui-guard",e);export{e as default};
