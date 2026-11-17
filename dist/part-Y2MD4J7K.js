import{g as a,h as n}from"./part-AVHV3I4Q.js";import{a as e}from"./part-AHAYGN5G.js";import{a as s,b as l}from"./part-5ZTE77ED.js";import{c as o}from"./part-USTJ2YCK.js";import{html as r,nothing as d}from"lit";var h=await s(o(`dialog {
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
`,"text/css")),t=class extends l{static styles=h;static properties={title:{type:String,reflect:!0}};constructor(){super(),this.title="",n(this),this.dialogTrait=this.addTrait(new a(this,{getContext:()=>this.dialogContext}))}get nativeDialog(){return this.renderRoot?.querySelector("dialog")??null}close(i){this.dialogTrait.close(i)}firstUpdated(){this.nativeDialog&&(typeof this.nativeDialog.showModal=="function"?this.nativeDialog.showModal():typeof this.nativeDialog.show=="function"?this.nativeDialog.show():this.nativeDialog.setAttribute("open",""),this.nativeDialog.addEventListener("close",()=>this.close()))}render(){let i=this.title?r`
        <solid-ui-dialog-header>
            <h1>${this.title}</h1>
            <solid-ui-button variant="ghost" @click=${()=>this.close()}>
                <span class="sr-only">Close</span>
                <icon-lucide-x slot="icon"></icon-lucide-x>
            </solid-ui-button>
        </solid-ui-dialog-header>
        `:d;return r`
        <dialog>
            <slot name="header">${i}</slot>
            <slot></slot>
            <slot name="footer"></slot>
        </dialog>
    `}};e("solid-ui-dialog",t);export{t as a};
