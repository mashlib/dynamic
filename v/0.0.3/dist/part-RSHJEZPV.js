import{b as w}from"./part-CKVAMWOE.js";import{H as v}from"./part-QENSO4SJ.js";import{a as I}from"./part-V7XQEHON.js";import{f as C,i as b}from"./part-DOP52R3A.js";import{c as g}from"./part-GPLAS2FA.js";import{F as _}from"./part-SVX36NT2.js";import{a as y}from"./part-VOCLXBLR.js";function p(...e){console.log(...e)}function F(...e){console.warn(...e)}function M(...e){console.error(...e)}var A=new Map;function x(e){let t=String(e);return A.has(t)||A.set(t,fetch(t).then(async o=>{if(!o.ok)throw new Error(`loadSheet: ${o.status} ${t}`);let n=new CSSStyleSheet;return n.replaceSync(await o.text()),n})),A.get(t)}var N=await x(g(`:host {
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
`,"text/css")),f=class extends b{static properties={message:{},title:{}};constructor(){super(),this.message="",this.title="Information"}static styles=N;render(){return y`
      <solid-ui-dialog title=${this.title}>
        <solid-ui-dialog-content>
          <p>${this.message}</p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer>
          <solid-ui-button @click=${this.onConfirm}>OK</solid-ui-button>
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}onConfirm(){this.close(!0)}};customElements.get("contacts-pane-alert-modal")||customElements.define("contacts-pane-alert-modal",f);var T=f;var H=await x(g(`:host {
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
`,"text/css")),m=class extends b{static properties={message:{},title:{}};constructor(){super(),this.message="",this.title="Confirm"}static styles=H;render(){return y`
      <solid-ui-dialog title=${this.title}>
        <solid-ui-dialog-content>
          <p>${this.message}</p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer>
          <solid-ui-button variant="secondary" @click=${this.onCancel}>Cancel</solid-ui-button>
          <solid-ui-button @click=${this.onConfirm}>OK</solid-ui-button>
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}onCancel(){this.close(!1)}onConfirm(){this.close(!0)}};customElements.get("contacts-pane-confirm-modal")||customElements.define("contacts-pane-confirm-modal",m);var U=m;var l=_,i=I,E=new Map;function he(e,t="Information"){let o=JSON.stringify([t,e]),n=E.get(o);if(n)return n;let s=new Promise(a=>{C(T,{props:{message:e,title:t},onClose:()=>{E.delete(o),a(!0)}})});return E.set(o,s),s}function ge(e,t="Confirm"){return new Promise(o=>{C(U,{props:{message:e,title:t},onClose:n=>o(n===!0)})})}function we(e){return e&&e.endsWith(".ttl")?e+"#this":e}function ye(e,t,o){e.appendChild(v.errorMessageBlock(t,o,"pink"))}function be(e){let t=e.doc();return new Promise(o=>{w.getACLorDefault(t,(n,s,a,h,r,u)=>{if(!n)return o(k(t));let c=(s?w.readACL(a,h,l):w.readACL(r,u,l,!0)).agentClass[i.foaf("Agent").uri];o(c&&c[i.acl("Read").uri]?"public":"private")})})}async function k(e){try{let t=await fetch(e.uri,{method:"HEAD",credentials:"omit"});return t.ok?"public":t.status===401||t.status===403?"private":null}catch{return null}}function xe(e,t,o){return e.each(t,i.owl("sameAs"),null,o).concat(e.each(null,i.owl("sameAs"),t,o))}function B(e,t){return new Promise((o,n)=>{e.fetcher.load(t).then(()=>{let s=e.each(t,i.ldp("contains")).map(a=>e.holds(a,i.rdf("type"),i.ldp("BasicContainer"))?B(e,a):(p("Recursive delete - we delete file "+a.uri),e.fetcher.webOperation("DELETE",a.uri)));p("Recursive delete - we delete folder "+t.uri),s.push(e.fetcher.webOperation("DELETE",t.uri)),Promise.all(s).then(a=>{o()}).catch(n)}).catch(n)})}async function Ce(e){p("deleteThingAndDoc - to be deleted "+e);let t=l.statementsMatching(e).concat(l.statementsMatching(void 0,void 0,e)).filter(o=>!o.why.sameTerm(e.doc()));try{await l.fetcher.delete(e.doc()),await l.updater.updateMany(t),p("deleteThingAndDoc - deleted")}catch(o){throw M("Error deleting "+e+". Stack: "+o),new Error("An error occured while deleting.")}}function Ae(e,t){let o=z(e),n=z(t);if(o&&n){if(o=o.toLowerCase(),n=n.toLowerCase(),o>n)return 1;if(o<n)return-1}return e.uri>t.uri?1:e.uri<t.uri?-1:0}function z(e){let t=l.any(e,i.vcard("fn"))||l.any(e,i.foaf("name"))||l.any(e,i.vcard("organization-name"));return t?t.value:"???"}function Ee(e){let t=["label",".formFieldName a",".classifierBox-label a",".choiceBox-label a",".label a",'a[href="http://www.w3.org/2006/vcard/ns#note"]','a[href$="#note"]'].join(", "),o=e?.querySelectorAll?.(t);o&&Array.from(o).forEach(n=>{typeof n.tabIndex=="number"&&n.tabIndex!==-1&&(n.tabIndex=-1),n.getAttribute("aria-hidden")!=="true"&&n.setAttribute("aria-hidden","true")})}function Se(e){return!!l.findTypeURIs(e.doc())[i.foaf("PersonalProfileDocument").uri]}function _e(e,t=900){function o(){let r=e.getBoundingClientRect().width,u=r>0?r<=t:!1,d=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(max-width: "+t+"px)").matches:!1,c=r>0?u:d;if(r>0?(e.dataset.paneWidth=Math.round(r).toString(),e.dataset.paneNarrow=u?"true":"false"):(e.dataset.paneWidth="0",e.dataset.paneNarrow=d?"true":"false"),e.classList.toggle("contactPane--narrow",c),e.dataset.viewportNarrow=d?"true":"false",!c&&typeof window<"u"&&e.isConnected){let L=Math.max(0,e.getBoundingClientRect().top),O=e.ownerDocument.documentElement;if(e.style.getPropertyValue("--pane-max-height")!==""){let S=O.scrollHeight-window.innerHeight;S>0&&(e.__paneHeightTrim=Math.min(200,(e.__paneHeightTrim||0)+S))}let P=Math.max(320,window.innerHeight-L-(e.__paneHeightTrim||0));e.style.setProperty("--pane-max-height",P+"px")}else e.style.removeProperty("--pane-max-height");return c}function n(r,u){let d=null;return function(...c){clearTimeout(d),d=setTimeout(()=>r.apply(this,c),u)}}let s=n(()=>{o()},100);if(typeof ResizeObserver<"u"){let r=new ResizeObserver(()=>{s()});r.observe(e),e.__responsiveObserver=r}typeof window<"u"&&typeof window.addEventListener=="function"&&window.addEventListener("resize",s);function h(){if(o(),!e.isConnected)requestAnimationFrame(h);else for(let r of[0,250,1e3])setTimeout(o,r)}h()}export{p as a,F as b,M as c,x as d,he as e,ge as f,we as g,ye as h,be as i,xe as j,B as k,Ce as l,Ae as m,z as n,Ee as o,Se as p,_e as q};
