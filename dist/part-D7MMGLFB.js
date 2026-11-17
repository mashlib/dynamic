import{e as i}from"./part-ZQLT3JNE.js";import{a as s}from"./part-AHAYGN5G.js";import{a as n,b as a}from"./part-5ZTE77ED.js";import{c as e}from"./part-USTJ2YCK.js";import{html as r}from"lit";var c=await n(e(`:host {
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
`,"text/css")),t=class extends a{static styles=c;static states={fallback:o=>!o.auth.account?.avatarUrl};constructor(){super(),i(this),this.unsubscribeSessionUpdated=void 0}connectedCallback(){super.connectedCallback(),this.auth.loadProfile?.(),this.unsubscribeSessionUpdated=this.auth.onSessionUpdated(()=>{this.auth.loadProfile?.(),this.requestUpdate()})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeSessionUpdated?.()}render(){return this.auth.account?.avatarUrl?r`
        <img src="${this.auth.account?.avatarUrl}" alt="" />
    `:r`
          <icon-lucide-circle-user></icon-lucide-circle-user>
      `}};s("solid-ui-avatar",t);export{t as a};
