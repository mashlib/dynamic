import{a as e}from"./part-AHAYGN5G.js";import{e as s}from"./part-FI5O6ZH7.js";import{a as l,b as d}from"./part-VHSBPZHI.js";import{c as o}from"./part-GPLAS2FA.js";import{a as t,e as r}from"./part-VOCLXBLR.js";var u=await l(o(`:host {
    --image-size: 1.875rem; /* 30px */

    display: inline-flex;
    flex-direction: row;
    gap: 10px;
}

:host([data-state-initializing]) {
    icon-svg-spinners-180-ring {
        width: var(--image-size);
        height: var(--image-size);
    }
}

:host([data-state-loggedIn]) {
    --padding: 4px;
    --border-width: 1px;

    button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: var(--solid-ui-color-body-grey);
        padding: var(--padding);
        border-radius: calc((var(--image-size) + 2 * var(--padding) + 2 * var(--border-width)) / 2);
        color: var(--solid-ui-color-white);

        solid-ui-avatar {
            width: var(--image-size);
            height: var(--image-size);
            border: var(--border-width) solid var(--solid-ui-color-white);
            border-radius: 50%;
        }

        icon-lucide-chevron-down {
            width: 16px;
            height: 16px;
        }
    }
}
`,"text/css")),n=class extends d{static styles=u;static states={initializing:i=>!i.auth.initialized,loggedIn:i=>!!i.auth.account};static properties={menuItems:{type:Array}};constructor(){super(),s(this),this.menuItems=[],this.unsubscribeSessionUpdated=void 0}connectedCallback(){super.connectedCallback(),this.unsubscribeSessionUpdated=this.auth.onSessionUpdated(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeSessionUpdated?.()}render(){return this.auth.initialized?this.auth.account?t`
        <solid-ui-menu placement="bottom-end">
            <button type="button" slot="trigger">
                <solid-ui-avatar></solid-ui-avatar>
                <icon-lucide-chevron-down slot="right-icon"></icon-lucide-chevron-down>
            </button>

            ${this.menuItems.map(i=>t`
                <solid-ui-menu-item .href=${i.href??r} ?selected=${i.selected} @solid-ui-select=${()=>i.onSelected?.()}>
                    ${i.label}
                </solid-ui-menu-item>
            `)}
            <solid-ui-logout-button>
                <solid-ui-menu-item slot="trigger">
                    <icon-lucide-log-out slot="left-icon"></icon-lucide-log-out>
                    Sign out
                </solid-ui-menu-item>
            </solid-ui-logout-button>
        </solid-ui-menu>
    `:t`
        <solid-ui-login-button>
            <solid-ui-button slot="trigger">
                <icon-lucide-user slot="left-icon"></icon-lucide-user>
                Log In
            </solid-ui-button>
        </solid-ui-login-button>
        <solid-ui-signup-button>
            <solid-ui-button slot="trigger" variant="outline">
                <icon-lucide-log-in slot="left-icon"></icon-lucide-log-in>
                Sign Up
            </solid-ui-button>
        </solid-ui-signup-button>
      `:t`
        <icon-svg-spinners-180-ring></icon-svg-spinners-180-ring>
      `}};e("solid-ui-account",n);export{n as a};
