import{a as e}from"./part-AHAYGN5G.js";import{a as l,b as a}from"./part-VHSBPZHI.js";import{c as n}from"./part-GPLAS2FA.js";import{a as t,e as i}from"./part-VOCLXBLR.js";var s=await l(n(`:host {
    --text-color: var(--solid-ui-color-white);
    --border-color: var(--solid-ui-color-primary);
    --background-color: var(--solid-ui-color-primary);
    --hover-text-color: var(--text-color);
    --hover-border-color: var(--solid-ui-color-tertiary);
    --hover-background-color: var(--solid-ui-color-tertiary);

    display: inline-flex;

    button {
        position: relative;
        padding: 7px 12px;
        border-radius: 5px;
        font-size: var(--solid-ui-font-size-md);
        font-weight: 600;
        color: var(--text-color);
        background: var(--background-color);
        border: 1px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        flex: 1;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &:hover:not(:disabled) {
            color: var(--hover-text-color);
            background: var(--hover-background-color);
            border-color: var(--hover-border-color);
        }

        icon-svg-spinners-180-ring, ::slotted([slot="left-icon"]), ::slotted([slot="right-icon"]) {
            width: var(--solid-ui-font-size-md);
            height: var(--solid-ui-font-size-md);
        }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: var(--solid-ui-clickable-area);
        height: var(--solid-ui-clickable-area);
      }
    }
}

:host([data-has-icon-slot]) button {
    padding: 4px;

    ::slotted([slot="icon"]) {
        width: var(--solid-ui-font-size-2xl);
        height: var(--solid-ui-font-size-2xl);
    }
}

:host([variant='secondary']) button {
    --text-color: var(--solid-ui-color-gray-800);
    --border-color: var(--solid-ui-color-slate-400);
    --background-color: var(--solid-ui-color-white);
    --hover-text-color: var(--solid-ui-color-white);
    --hover-background-color: var(--solid-ui-color-tertiary);
    --hover-border-color: var(--solid-ui-color-tertiary);
}

:host([variant='tertiary']) button {
    --text-color: var(--solid-ui-color-primary);
    --border-color: transparent;
    --background-color: transparent;
    --hover-text-color: var(--solid-ui-color-tertiary);
    --hover-border-color: var(--solid-ui-color-tertiary);
    --hover-background-color: transparent;

    padding: 0;
    border-radius: 0;
    border-width: 0;
    border-bottom-width: 1px;
}

:host([variant='outline']) button {
    --text-color: currentColor;
    --border-color: currentColor;
    --background-color: transparent;
    --hover-text-color: currentColor;
    --hover-border-color: currentColor;
    --hover-background-color: color-mix(in srgb, currentColor 25%, transparent);
}

:host([variant='ghost']) button {
    --text-color: currentColor;
    --border-color: transparent;
    --background-color: transparent;
    --hover-text-color: currentColor;
    --hover-border-color: transparent;
    --hover-background-color: var(--solid-ui-color-primary-hover);
}
`,"text/css")),g=["primary","secondary","tertiary","outline","ghost"],o=class extends a{static styles=s;static formAssociated=!0;static properties={variant:{type:String,reflect:!0},type:{type:String,reflect:!0},disabled:{type:Boolean},loading:{type:Boolean}};constructor(){super(),this.variant="primary",this.type="button",this.disabled=void 0,this.loading=!1}render(){let r=this.disabled??this.loading;return t`
        <button type=${this.type} ?disabled=${r} @click=${this.onClick}>
            ${this.loading?t`<icon-svg-spinners-180-ring></icon-svg-spinners-180-ring>`:i}
            <slot name="left-icon"></slot>
            <slot @slotchange=${this.onIconSlotChange} name="icon"></slot>
            <slot></slot>
            <slot name="right-icon"></slot>
        </button>
    `}onIconSlotChange(r){this.toggleAttribute("data-has-icon-slot",r.target.assignedElements().length>0)}onClick(){switch(this.type){case"submit":this.getInternals().form?.requestSubmit();break;case"reset":this.getInternals().form?.reset();break}}};e("solid-ui-button",o);export{g as a,o as b};
