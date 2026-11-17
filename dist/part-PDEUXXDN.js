import{a as l,b as p}from"./part-4MBXPQ3J.js";import{d as e}from"./part-ZQLT3JNE.js";import{b as r}from"./part-G7QL3VVZ.js";import{a as o}from"./part-AHAYGN5G.js";import{b as s}from"./part-5ZTE77ED.js";import{html as n}from"lit";var t=class extends s{static properties={signupUrl:{type:String,reflect:!0}};constructor(){super(),this.signupUrl=void 0,this.auth=new p,r(this,e,this.auth)}async connectedCallback(){super.connectedCallback(),await this.auth.initialize()}willUpdate(i){super.willUpdate(i),i.has("signupUrl")&&(this.auth.signupUrl=this.signupUrl??l)}render(){return n`
        <slot></slot>
        <solid-ui-dialogs-root></solid-ui-dialogs-root>
    `}};o("solid-ui-provider",t);export{t as a};
