import{b as w}from"./part-BC7GSLCS.js";import{H as _}from"./part-D7Z64I5T.js";import{a as S}from"./part-VJTDSXSH.js";import{f as x,i as y}from"./part-AVHV3I4Q.js";import{c as g}from"./part-USTJ2YCK.js";function p(...e){console.log(...e)}function W(...e){console.warn(...e)}function I(...e){console.error(...e)}import{store as k}from"solid-logic";var C=new Map;function b(e){let t=String(e);return C.has(t)||C.set(t,fetch(t).then(async o=>{if(!o.ok)throw new Error(`loadSheet: ${o.status} ${t}`);let n=new CSSStyleSheet;return n.replaceSync(await o.text()),n})),C.get(t)}import{html as R}from"lit";var $=await b(g(`:host {
    solid-ui-dialog-content p {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-sm);
        font-weight: 400;
        text-align: center;
    }

    solid-ui-dialog-footer solid-ui-button {
        width: 100%;
    }
}
`,"text/css")),f=class extends y{static properties={message:{},title:{}};constructor(){super(),this.message="",this.title="Information"}static styles=$;render(){return R`
      <solid-ui-dialog title=${this.title}>
        <solid-ui-dialog-content>
          <p>${this.message}</p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer>
          <solid-ui-button @click=${this.onConfirm}>OK</solid-ui-button>
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}onConfirm(){this.close(!0)}};customElements.get("contacts-pane-alert-modal")||customElements.define("contacts-pane-alert-modal",f);var v=f;import{html as N}from"lit";var H=await b(g(`:host {
    solid-ui-dialog-content p {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-sm);
        font-weight: 400;
        text-align: center;
    }

    solid-ui-dialog-footer {
        display: flex;
        gap: var(--solid-ui-spacing-sm, 0.5rem);

        solid-ui-button {
            flex: 1;
        }
    }
}
`,"text/css")),m=class extends y{static properties={message:{},title:{}};constructor(){super(),this.message="",this.title="Confirm"}static styles=H;render(){return N`
      <solid-ui-dialog title=${this.title}>
        <solid-ui-dialog-content>
          <p>${this.message}</p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer>
          <solid-ui-button variant="secondary" @click=${this.onCancel}>Cancel</solid-ui-button>
          <solid-ui-button @click=${this.onConfirm}>OK</solid-ui-button>
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}onCancel(){this.close(!1)}onConfirm(){this.close(!0)}};customElements.get("contacts-pane-confirm-modal")||customElements.define("contacts-pane-confirm-modal",m);var M=m;var l=k,i=S,A=new Map;function ge(e,t="Information"){let o=JSON.stringify([t,e]),n=A.get(o);if(n)return n;let s=new Promise(a=>{x(v,{props:{message:e,title:t},onClose:()=>{A.delete(o),a(!0)}})});return A.set(o,s),s}function we(e,t="Confirm"){return new Promise(o=>{x(M,{props:{message:e,title:t},onClose:n=>o(n===!0)})})}function ye(e){return e&&e.endsWith(".ttl")?e+"#this":e}function be(e,t,o){e.appendChild(_.errorMessageBlock(t,o,"pink"))}function xe(e){let t=e.doc();return new Promise(o=>{w.getACLorDefault(t,(n,s,a,h,r,u)=>{if(!n)return o(B(t));let c=(s?w.readACL(a,h,l):w.readACL(r,u,l,!0)).agentClass[i.foaf("Agent").uri];o(c&&c[i.acl("Read").uri]?"public":"private")})})}async function B(e){try{let t=await fetch(e.uri,{method:"HEAD",credentials:"omit"});return t.ok?"public":t.status===401||t.status===403?"private":null}catch{return null}}function Ce(e,t,o){return e.each(t,i.owl("sameAs"),null,o).concat(e.each(null,i.owl("sameAs"),t,o))}function F(e,t){return new Promise((o,n)=>{e.fetcher.load(t).then(()=>{let s=e.each(t,i.ldp("contains")).map(a=>e.holds(a,i.rdf("type"),i.ldp("BasicContainer"))?F(e,a):(p("Recursive delete - we delete file "+a.uri),e.fetcher.webOperation("DELETE",a.uri)));p("Recursive delete - we delete folder "+t.uri),s.push(e.fetcher.webOperation("DELETE",t.uri)),Promise.all(s).then(a=>{o()}).catch(n)}).catch(n)})}async function Ae(e){p("deleteThingAndDoc - to be deleted "+e);let t=l.statementsMatching(e).concat(l.statementsMatching(void 0,void 0,e)).filter(o=>!o.why.sameTerm(e.doc()));try{await l.fetcher.delete(e.doc()),await l.updater.updateMany(t),p("deleteThingAndDoc - deleted")}catch(o){throw I("Error deleting "+e+". Stack: "+o),new Error("An error occured while deleting.")}}function Ee(e,t){let o=T(e),n=T(t);if(o&&n){if(o=o.toLowerCase(),n=n.toLowerCase(),o>n)return 1;if(o<n)return-1}return e.uri>t.uri?1:e.uri<t.uri?-1:0}function T(e){let t=l.any(e,i.vcard("fn"))||l.any(e,i.foaf("name"))||l.any(e,i.vcard("organization-name"));return t?t.value:"???"}function Se(e){let t=["label",".formFieldName a",".classifierBox-label a",".choiceBox-label a",".label a",'a[href="http://www.w3.org/2006/vcard/ns#note"]','a[href$="#note"]'].join(", "),o=e?.querySelectorAll?.(t);o&&Array.from(o).forEach(n=>{typeof n.tabIndex=="number"&&n.tabIndex!==-1&&(n.tabIndex=-1),n.getAttribute("aria-hidden")!=="true"&&n.setAttribute("aria-hidden","true")})}function _e(e){return!!l.findTypeURIs(e.doc())[i.foaf("PersonalProfileDocument").uri]}function Ie(e,t=900){function o(){let r=e.getBoundingClientRect().width,u=r>0?r<=t:!1,d=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(max-width: "+t+"px)").matches:!1,c=r>0?u:d;if(r>0?(e.dataset.paneWidth=Math.round(r).toString(),e.dataset.paneNarrow=u?"true":"false"):(e.dataset.paneWidth="0",e.dataset.paneNarrow=d?"true":"false"),e.classList.toggle("contactPane--narrow",c),e.dataset.viewportNarrow=d?"true":"false",!c&&typeof window<"u"&&e.isConnected){let U=Math.max(0,e.getBoundingClientRect().top),z=e.ownerDocument.documentElement;if(e.style.getPropertyValue("--pane-max-height")!==""){let E=z.scrollHeight-window.innerHeight;E>0&&(e.__paneHeightTrim=Math.min(200,(e.__paneHeightTrim||0)+E))}let L=Math.max(320,window.innerHeight-U-(e.__paneHeightTrim||0));e.style.setProperty("--pane-max-height",L+"px")}else e.style.removeProperty("--pane-max-height");return c}function n(r,u){let d=null;return function(...c){clearTimeout(d),d=setTimeout(()=>r.apply(this,c),u)}}let s=n(()=>{o()},100);if(typeof ResizeObserver<"u"){let r=new ResizeObserver(()=>{s()});r.observe(e),e.__responsiveObserver=r}typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("resize",s);function h(){if(o(),!e.isConnected)requestAnimationFrame(h);else for(let r of[0,250,1e3])setTimeout(o,r)}h()}export{p as a,W as b,I as c,b as d,ge as e,we as f,ye as g,be as h,xe as i,Ce as j,F as k,Ae as l,Ee as m,T as n,Se as o,_e as p,Ie as q};
