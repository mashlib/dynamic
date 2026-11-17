import{e as n}from"./part-ZQLT3JNE.js";import"./part-G7QL3VVZ.js";import{a as s}from"./part-AHAYGN5G.js";import{b as o}from"./part-5ZTE77ED.js";import"./part-USTJ2YCK.js";import{html as i}from"lit";var t=class extends o{static states={initializing:e=>!e.auth.initialized,loggedIn:e=>!!e.auth.account};constructor(){super(),n(this),this.unsubscribeSessionUpdated=void 0}connectedCallback(){super.connectedCallback(),this.unsubscribeSessionUpdated=this.auth.onSessionUpdated(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeSessionUpdated?.()}render(){return this.auth.initialized?this.auth.account?i`
      <slot></slot>
    `:i`
        <slot name="guest"></slot>
      `:i`
        <slot name="initializing"></slot>
      `}};s("solid-ui-guard",t);export{t as default};
