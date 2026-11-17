import{a as s}from"./part-AHAYGN5G.js";import{g as r,h as d}from"./part-DOP52R3A.js";import{a,b as n}from"./part-VHSBPZHI.js";import{c as e}from"./part-GPLAS2FA.js";import{a as o,e as l}from"./part-VOCLXBLR.js";var h=await a(e(`dialog {
  margin: auto;
  border-radius: 5px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.35);
  min-width: 343px;

  solid-ui-dialog-header solid-ui-button {
    color: var(--solid-ui-color-gray-600);
  }
}

dialog:not([open]) {
  display: none;
}
`,"text/css")),t=class extends n{static styles=h;static properties={title:{type:String,reflect:!0}};constructor(){super(),this.title="",d(this),this.dialogTrait=this.addTrait(new r(this,{getContext:()=>this.dialogContext}))}get nativeDialog(){return this.renderRoot?.querySelector("dialog")??null}close(i){this.dialogTrait.close(i)}firstUpdated(){this.nativeDialog&&(typeof this.nativeDialog.showModal=="function"?this.nativeDialog.showModal():typeof this.nativeDialog.show=="function"?this.nativeDialog.show():this.nativeDialog.setAttribute("open",""),this.nativeDialog.addEventListener("close",()=>this.close()))}render(){let i=this.title?o`
        <solid-ui-dialog-header>
            <h1>${this.title}</h1>
            <solid-ui-button variant="ghost" @click=${()=>this.close()}>
                <span class="sr-only">Close</span>
                <icon-lucide-x slot="icon"></icon-lucide-x>
            </solid-ui-button>
        </solid-ui-dialog-header>
        `:l;return o`
        <dialog>
            <slot name="header">${i}</slot>
            <slot></slot>
            <slot name="footer"></slot>
        </dialog>
    `}};s("solid-ui-dialog",t);export{t as a};
