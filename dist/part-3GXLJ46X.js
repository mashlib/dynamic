import{a as n}from"./part-AHAYGN5G.js";import{a as o,b as i}from"./part-5ZTE77ED.js";import{c as e}from"./part-USTJ2YCK.js";import{html as s}from"lit";var r=await o(e(`:host {
    & > a,
    & > div {
        width: 100%;
        display: flex;
        position: relative;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        padding: 10px;
        border-radius: 5px;
        color: var(--solid-ui-color-gray-600);
        font-weight: 500;
        font-size: var(--solid-ui-font-size-md);

        &[data-selected] {
            background: var(--solid-ui-color-primary-selected);
        }
    }

    ::slotted([slot="left-icon"]), ::slotted([slot="right-icon"]) {
        width: var(--solid-ui-font-size-xl) !important;
        height: var(--solid-ui-font-size-xl) !important;
        object-fit: contain;
    }

    a::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
`,"text/css")),t=class extends i{static styles=r;static properties={href:{type:String,reflect:!0},selected:{type:Boolean,reflect:!0}};constructor(){super(),this.href=void 0,this.selected=!1}get anchor(){return this.renderRoot?.querySelector("a")??null}render(){return this.href?s`
        <a href="${this.href}" target="_blank" rel="noopener noreferrer" ?data-selected=${this.selected}>
            <slot name="left-icon"></slot>
            <slot></slot>
            <slot name="right-icon"></slot>
        </a>
      `:s`
        <div ?data-selected=${this.selected}>
            <slot name="left-icon"></slot>
            <slot></slot>
            <slot name="right-icon"></slot>
        </div>
    `}click(){this.anchor?.click()}};n("solid-ui-menu-item",t);export{t as a};
