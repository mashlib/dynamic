import"./part-KC4ZRX3A.js";import"./part-NFK5BLIA.js";import"./part-L3FKRLOF.js";import"./part-VUVQLHGC.js";import"./part-DPEX7Y3K.js";import"./part-ZUZ5SMMO.js";import"./part-EPAYPZAY.js";import"./part-SX7PWH6P.js";import{a as n}from"./part-AHAYGN5G.js";import{e as u}from"./part-FI5O6ZH7.js";import"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import{a,b as d}from"./part-VHSBPZHI.js";import{c as r}from"./part-GPLAS2FA.js";import{C as o}from"./part-SVX36NT2.js";import"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as e,e as l}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var m=await a(r(`.error-message {
    color: var(--solid-ui-color-error);
    font-size: var(--solid-ui-font-size-sm);
    font-weight: 500;
    text-align: center;
    width: 100%;
}

solid-ui-combobox {
    width: 100%;
}

solid-ui-button {
    flex: 1;
}
`,"text/css")),s=class extends d{static styles=m;static properties={issuerUrl:{type:String,reflect:!0},issuerInputValue:{state:!0},failed:{state:!0},submitting:{state:!0}};constructor(){super(),this.issuerUrl="",this.issuerInputValue="",this.failed=!1,this.submitting=!1,u(this)}get dialog(){return this.renderRoot?.querySelector("solid-ui-dialog")??null}connectedCallback(){super.connectedCallback(),this.issuerInputValue=typeof localStorage<"u"&&localStorage.getItem("loginIssuer")||this.issuerUrl||o()[0]?.uri||""}render(){let t=o();return e`
        <solid-ui-dialog title="Select an identity provider">
            <form @submit=${this.onSubmit}>
                <solid-ui-dialog-content>
                    <solid-ui-combobox label="Solid Identity Provider" .value=${this.issuerInputValue} @input=${this.onIssuerInputChange}>
                        ${t.map(i=>e`<solid-ui-combobox-option value="${i.uri}">${i.name}</solid-ui-combobox-option>`)}
                    </solid-ui-combobox>
                    ${this.failed?e`<p class="error-message">Something went wrong</p>`:l}
                </solid-ui-dialog-content>
                <solid-ui-dialog-footer>
                    <solid-ui-button
                        variant="secondary"
                        @click="${()=>this.dialog?.close()}"
                    >
                        Cancel
                    </solid-ui-button>
                    <solid-ui-button
                        ?disabled=${!this.issuerInputValue||this.submitting}
                        ?loading=${this.submitting}
                        type="submit"
                    >
                        Login
                    </solid-ui-button>
                </solid-ui-dialog-footer>
            </form>
        </solid-ui-dialog>
    `}onIssuerInputChange(t){this.issuerInputValue=String(t.target.value)}async onSubmit(t){if(t.preventDefault(),this.failed=!1,!!this.issuerInputValue){this.submitting=!0;try{await this.auth.login(this.issuerInputValue)}catch(i){console.error(i),this.failed=!0}finally{this.submitting=!1}}}};n("solid-ui-login-modal",s);export{s as default};
