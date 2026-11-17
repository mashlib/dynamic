import{a as p,b as n}from"./part-2REH4E2C.js";import{a as o}from"./part-AHAYGN5G.js";import{d as e}from"./part-FI5O6ZH7.js";import{b as r}from"./part-CYQ3SFAJ.js";import{b as l}from"./part-VHSBPZHI.js";import{a as s}from"./part-VOCLXBLR.js";var t=class extends l{static properties={signupUrl:{type:String,reflect:!0}};constructor(){super(),this.signupUrl=void 0,this.auth=new n,r(this,e,this.auth)}async connectedCallback(){super.connectedCallback(),await this.auth.initialize()}willUpdate(i){super.willUpdate(i),i.has("signupUrl")&&(this.auth.signupUrl=this.signupUrl??p)}render(){return s`
        <slot></slot>
        <solid-ui-dialogs-root></solid-ui-dialogs-root>
    `}};o("solid-ui-provider",t);export{t as a};
