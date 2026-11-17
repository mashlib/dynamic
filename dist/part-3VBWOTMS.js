import"./part-MLTE2ZTF.js";import{e as n}from"./part-ZQLT3JNE.js";import"./part-Y2MD4J7K.js";import"./part-AVHV3I4Q.js";import"./part-G7QL3VVZ.js";import"./part-NJPCHXFX.js";import"./part-6HVGRC2X.js";import"./part-6NERXNP3.js";import"./part-YM77XAUU.js";import"./part-GWZG2FUI.js";import"./part-SX7PWH6P.js";import{a as r}from"./part-AHAYGN5G.js";import{a as u,b as l}from"./part-5ZTE77ED.js";import{c as o}from"./part-USTJ2YCK.js";import{html as s,nothing as d}from"lit";import{getSuggestedIssuers as a}from"solid-logic";var m=await u(o(`.error-message {
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
`,"text/css")),e=class extends l{static styles=m;static properties={issuerUrl:{type:String,reflect:!0},issuerInputValue:{state:!0},failed:{state:!0},submitting:{state:!0}};constructor(){super(),this.issuerUrl="",this.issuerInputValue="",this.failed=!1,this.submitting=!1,n(this)}get dialog(){return this.renderRoot?.querySelector("solid-ui-dialog")??null}connectedCallback(){super.connectedCallback(),this.issuerInputValue=typeof localStorage<"u"&&localStorage.getItem("loginIssuer")||this.issuerUrl||a()[0]?.uri||""}render(){let t=a();return s`
        <solid-ui-dialog title="Select an identity provider">
            <form @submit=${this.onSubmit}>
                <solid-ui-dialog-content>
                    <solid-ui-combobox label="Solid Identity Provider" .value=${this.issuerInputValue} @input=${this.onIssuerInputChange}>
                        ${t.map(i=>s`<solid-ui-combobox-option value="${i.uri}">${i.name}</solid-ui-combobox-option>`)}
                    </solid-ui-combobox>
                    ${this.failed?s`<p class="error-message">Something went wrong</p>`:d}
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
    `}onIssuerInputChange(t){this.issuerInputValue=String(t.target.value)}async onSubmit(t){if(t.preventDefault(),this.failed=!1,!!this.issuerInputValue){this.submitting=!0;try{await this.auth.login(this.issuerInputValue)}catch(i){console.error(i),this.failed=!0}finally{this.submitting=!1}}}};r("solid-ui-login-modal",e);export{e as default};
