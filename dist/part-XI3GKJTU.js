import{a as i}from"./part-AHAYGN5G.js";import{e as n}from"./part-FI5O6ZH7.js";import{a,b as r}from"./part-VHSBPZHI.js";import{c as s}from"./part-GPLAS2FA.js";import{a as e}from"./part-VOCLXBLR.js";var c=await a(s(`:host {
    --size: 150px;

    display: inline-flex;
    overflow: hidden;
    width: var(--size);
    height: var(--size);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

:host([data-state-fallback]) {
    background: var(--solid-ui-color-gray-100);
    justify-content: center;
    align-items: center;

    icon-lucide-circle-user {
        color: var(--solid-ui-color-gray-200);
        width: 50%;
        height: 50%;
    }
}
`,"text/css")),t=class extends r{static styles=c;static states={fallback:o=>!o.auth.account?.avatarUrl};constructor(){super(),n(this),this.unsubscribeSessionUpdated=void 0}connectedCallback(){super.connectedCallback(),this.auth.loadProfile?.(),this.unsubscribeSessionUpdated=this.auth.onSessionUpdated(()=>{this.auth.loadProfile?.(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeSessionUpdated?.()}render(){return this.auth.account?.avatarUrl?e`
        <img src="${this.auth.account?.avatarUrl}" alt="" />
    `:e`
          <icon-lucide-circle-user></icon-lucide-circle-user>
      `}};i("solid-ui-avatar",t);export{t as a};
