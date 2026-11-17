import"./part-WIEELNFA.js";import{a as A}from"./part-ECWNYG5G.js";import{a as Le,b as q,c as B}from"./part-GSHDQMQY.js";import{a as ee,c as me,d as je,e as te,f as be,g as De,h as Pe,i as P,j as U,k as we,l as re,m as L}from"./part-F63PXZKA.js";import"./part-KUOEUJEG.js";import"./part-XZ6SIP3Y.js";import"./part-DM4YI6VD.js";import"./part-DUP4CQ5F.js";import"./part-S6D6LJ4G.js";import"./part-3GXLJ46X.js";import"./part-DUP4CQ5F.js";import"./part-KMWB5FHR.js";import"./part-4RHLBPWQ.js";import{a as Ee,c as ke,q as D,r as T,s as Me,t as Z}from"./part-BC7GSLCS.js";import"./part-4MBXPQ3J.js";import{a as Se,c as fe,d as ge}from"./part-TKTGPRZR.js";import"./part-GEEMM4JM.js";import{H as Y,d as j}from"./part-D7Z64I5T.js";import"./part-7MK2NELE.js";import"./part-ZQLT3JNE.js";import{d as S}from"./part-V2462Q6D.js";import{a as Ae}from"./part-VJTDSXSH.js";import"./part-Y2MD4J7K.js";import{f as $e,i as Ie}from"./part-AVHV3I4Q.js";import"./part-G7QL3VVZ.js";import"./part-NJPCHXFX.js";import"./part-6HVGRC2X.js";import"./part-YM77XAUU.js";import"./part-GWZG2FUI.js";import"./part-SX7PWH6P.js";import"./part-AHAYGN5G.js";import{b as R}from"./part-5ZTE77ED.js";import{c as y}from"./part-USTJ2YCK.js";import{authn as N,authSession as le}from"solid-logic";function Be({ttlMs:a=6e4,maxEntries:e=500,now:t=Date.now}={}){let r=new Map,n=(s,i)=>`${s??""}
${i}`;return{get(s,i){let o=n(s,i),c=r.get(o);if(c){if(c.expiresAt<=t()){r.delete(o);return}return c.value}},set(s,i,o){let c=n(s,i);if(r.delete(c),!(o.state!=="public"&&o.state!=="private"))for(r.set(c,{value:{state:o.state,canManageAccess:o.canManageAccess},expiresAt:t()+a});r.size>e;)r.delete(r.keys().next().value)},delete(s){for(let i of[...r.keys()])i.endsWith(`
${s}`)&&r.delete(i)},clear(){r.clear()}}}var E=Be();import{html as de,nothing as Ge}from"lit";import{html as b,nothing as _}from"lit";import{authn as Xe,authSession as se}from"solid-logic";function x(...a){console.warn(...a)}function F(...a){console.error(...a)}async function ne(a){let{resource:e,context:t,isCurrent:r}=a,n=t.session.store;try{await n.fetcher.load(e)}catch(h){x("Unable to preload resource for folder-pane action menu",h)}if(!r())return;let s=e;if(a.isContainer&&a.resourceLogic?.containerHasIndexDocument(e)){s=n.sym(re(e));try{await n.fetcher.load(s.doc())}catch(h){x("Unable to preload index document for folder-pane action menu",h)}if(!r())return}let i={excludedPaneNames:["sharing"]},o=await D(e,t,i),c=s.sameTerm(e)?[]:await D(s,t,i);if(!r())return;let l=T(s,t,c),d=new Map(o.map(h=>[h,e]));l&&d.set(l,s);let p=t.session.paneRegistry.list.filter(h=>d.has(h));p.length||(p=await D(e,t,{...i,fallbackPaneName:"internal"}));let g=l||T(e,t,o),u=g?[g,...p.filter(h=>h!==g)]:p,f=(await Promise.all(u.map(h=>Z({subject:d.get(h)??e,context:t,panes:[h],openPane:($,m,I)=>a.openPane($,m,I)})))).flat();return r()?f:void 0}var xe=class extends Error{constructor(){super("Request queue was cleared"),this.name="RequestQueueClearedError"}};function ve(a){return typeof a=="object"&&a!==null?a:void 0}function He(a){let e=ve(a);return e?.status===429||e?.response?.status===429?!0:a instanceof Error&&/\bStatus: 429\b/.test(a.message)}var _e=new Set([998,999]),We=/Failed to fetch|NetworkError|Load failed|network failure/i;function Oe(a){let e=ve(a),t=e?.status??e?.response?.status;return t!==void 0&&_e.has(t)?!0:a instanceof Error&&We.test(a.message)}function Qe(a){return He(a)||Oe(a)}function Ke(a,e,t=Date.now()){let r=ve(a),n=r?.headers??r?.response?.headers,s=typeof n?.get=="function"?n.get("retry-after"):null;if(!s)return e;let i=Number(s);if(Number.isFinite(i))return Math.max(0,i*1e3);let o=Date.parse(s);return Number.isNaN(o)?e:Math.max(0,o-t)}function Ue({concurrency:a=4,maxRetries:e=2,defaultRetryAfterMs:t=1e4,wait:r=n=>new Promise(s=>setTimeout(s,n))}={}){let n=[],s=0,i,o=0,c=0,l=0;function d(){if(!i)for(;s<a&&n.length>0;){let u=n.shift();s++,p(u,l)}}async function p(u,f){try{u.resolve(await u.task())}catch(h){f===l&&Qe(h)?(g(Ke(h,t)),u.retries<e?(u.retries++,n.unshift(u)):u.reject(h)):u.reject(h)}finally{s--,d()}}function g(u){let f=l,h=Date.now()+u;if(h<=o)return;o=h;let $=++c;i=r(u).then(()=>{f!==l||$!==c||(i=void 0,o=0,d())})}return{run(u){return new Promise((f,h)=>{n.push({task:u,resolve:f,reject:h,retries:0}),d()})},clear(){l++,i=void 0,o=0,c++;let u=n;n=[];for(let f of u)f.reject(new xe)}}}function w(a,e){customElements.get(a)||customElements.define(a,class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<style>:host { display: inline-flex; }</style>"+e}})}w("icon-lucide-chevron-down",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>');w("icon-lucide-chevron-left",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/></svg>');w("icon-lucide-chevron-right",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"/></svg>');w("icon-lucide-circle-small",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>');w("icon-lucide-file",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></g></svg>');w("icon-lucide-file-box",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14.692 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.804"/><path d="M2.264 13.752L7 16.5l4.737-2.748"/><path d="M2.995 13.014A2 2 0 0 0 2 14.744v3.516a2 2 0 0 0 .996 1.73l3 1.74a2 2 0 0 0 2.008 0l3-1.74A2 2 0 0 0 12 18.26v-3.517a2 2 0 0 0-.995-1.73l-3-1.742a2 2 0 0 0-1.892-.064zM7 16.5V22"/></g></svg>');w("icon-lucide-folder",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>');w("icon-lucide-folder-open",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"/></svg>');w("icon-lucide-globe",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>');w("icon-lucide-layout-grid",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></g></svg>');w("icon-lucide-list",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13"/></svg>');w("icon-lucide-lock-keyhole",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></g></svg>');w("icon-lucide-plus",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/></svg>');w("icon-lucide-search",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>');w("icon-lucide-upload",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/></svg>');w("icon-lucide-x",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>');var Je=await A(y(`:host {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  overflow: hidden;
  flex: 1 1 auto;

  .folder-pane-container-content {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    transition: background-color 180ms ease;
  }

  .folder-pane-container-content[data-drag-active="true"] {
    background-color: #eee9ff;
    background-color: color-mix(
      in srgb,
      var(--solid-ui-color-lavender-200, #DDD6FE) 40%,
      white
    );
    box-shadow:
      0 0 0 5px rgb(196 181 253 / 8%),
      0 0 20px rgb(124 77 255 / 10%);
  }

  @media (prefers-reduced-motion: reduce) {
    .folder-pane-container-content {
      transition: none;
    }

    .folder-pane-container-content[data-drag-active="true"] {
      box-shadow:
        0 0 0 5px rgb(196 181 253 / 8%),
        0 0 20px rgb(124 77 255 / 10%);
    }
  }

  .folder-pane-container-loading {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    min-height: 8rem;
    color: var(--solid-ui-color-gray-500, #6a7282);
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }

  .folder-pane-container-content::-webkit-scrollbar {
    width: 6px;
  }

  .folder-pane-container-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .folder-pane-container-content::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
  }

  .folder-pane-container-content:hover {
    scrollbar-color: var(--solid-ui-color-gray-300, #d1d5dc) transparent;
  }

  .folder-pane-container-content:hover::-webkit-scrollbar-thumb {
    background: var(--solid-ui-color-gray-300, #d1d5dc);
  }

  .resource-list {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 100%;
    min-height: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 20px;
    list-style: none;
  }

  .resource-grid {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: 1 1 auto;
    align-content: flex-start;
    gap: 20px;
    width: 100%;
    min-height: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 20px;
    list-style: none;
    overflow: visible;
  }

  .resource-grid-item {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 206px;
    width: min(206px, 100%);
    min-width: 0;
    max-width: 206px;
    min-height: 145.824px;
    border-radius: 5px;
    border: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
    background: var(--solid-ui-color-white, #ffffff);
    cursor: pointer;
    overflow: hidden;
  }

  .resource-actions-menu {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: flex-end;
  }

  .resource-actions-menu--grid {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .resource-actions-menu--list {
    margin-left: auto;
  }

  .resource-grid-icon {
    display: flex;
    width: 60px;
    height: 80px;
    justify-content: center;
    align-items: center;
    margin: 12px auto 0;
    flex: 0 0 auto;
  }

  .resource-grid-icon icon-lucide-file {
    width: 64px;
    height: 64px;
    color: var(--solid-ui-color-gray-400, #99a1af);
    stroke: var(--solid-ui-color-gray-400, #99a1af);
  }

  .resource-grid-icon--container {
    width: 37.282px;
    height: 37.282px;
    padding: 0 9.32px;
    margin: 12px 0 0 12px;
    justify-content: flex-start;
  }

  .resource-grid-label {
    color: var(--solid-ui-color-gray-500, #6a7282);
    font-size: var(--solid-ui-font-size-xs, 0.75rem);
    font-weight: 500;
    line-height: 1.25;
    min-width: 0;
    overflow: hidden;
    overflow-wrap: anywhere;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    max-height: calc(2 * 1.25em);
  }

  .resource-list-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .resource-grid-label--container {
    color: var(--solid-ui-color-gray-700, #364153);
    font-size: var(--solid-ui-font-size-md, 1rem);
    padding: 0 12px;
  }

  .resource-grid-item-footer .resource-grid-label {
    flex: 1 1 auto;
  }

  .resource-grid-item-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 0 auto;
    margin-top: auto;
    min-height: 40px;
    box-sizing: border-box;
    padding: 8px 15px;
    border-top: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
    gap: 12px;
  }

  .resource-list-header {
    display: flex;
    padding: 14px 12px;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    color: var(--solid-ui-color-gray-600, #4a5565);
    font-size: var(--solid-ui-font-size-sm, .875rem);
    font-weight: 500;
    list-style: none;
    border-bottom: 1px solid var(--solid-ui-color-gray-200, #E5E7EB);
    background: var(--white, #FFF);
  }

  .resource-list-item {
    display: flex;
    padding: 14px 12px;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-bottom: 1px solid var(--solid-ui-color-gray-200, #E5E7EB);
    background: var(--white, #FFF);
    cursor: pointer;
  }

  .resource-list-item:hover,
  .resource-grid-item:hover {
    background: var(--solid-ui-color-gray-50, #f9fafb);
  }

  .resource-list-item:focus-visible,
  .resource-grid-item:focus-visible {
    outline: 2px solid var(--solid-ui-color-primary, #7c4dff);
    outline-offset: -2px;
  }

  @media (max-width: 768px) {
    & {
      height: auto;
      min-height: 0;
      overflow: visible;
    }

    .folder-pane-container-content {
      height: auto;
      min-height: 0;
      overflow: visible;
    }

    .resource-grid {
      gap: 15px;
    }

    .resource-grid,
    .resource-list {
      padding: 0;
    }

    .resource-grid {
      padding-top: 20px;
    }

    .resource-grid-item {
      flex: 0 0 calc((100% - 15px) / 2);
      width: calc((100% - 15px) / 2);
      max-width: none;
    }

    .resource-grid-label {
      font-size: 12px;
    }

    .resource-grid-label.resource-grid-label--container {
      font-size: 14px;
    }

    .resource-list-item {
      align-items: flex-start;
    }
  }

  .resource-list-main {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    flex: 1 1 auto;
  }

  .resource-list-label {
    color: var(--solid-ui-color-gray-700, #364153);
    font-size: var(--solid-ui-font-size-md, 1rem);
    font-weight: 500;
    min-width: 0;
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .resource-list-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .container-member-count {
    color: var(--solid-ui-color-gray-500, #6a7282);
    font-size: var(--solid-ui-font-size-xs, .75rem);
    font-weight: 500;
    white-space: nowrap;
  }

  icon-lucide-folder,
  icon-lucide-file,
  icon-lucide-globe,
  icon-lucide-lock-keyhole {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    color: var(--solid-ui-color-gray-500, #6a7282);
    fill: rgba(224, 231, 255, 0.50);
    stroke: var(--solid-ui-color-gray-500, #6a7282);
    stroke-width: 1.25px;
  }

  .resource-access-indicator {
    width: 14px;
    height: 14px;
    flex: 0 0 auto;
    color: var(--solid-ui-color-gray-500, #6a7282);
  }

  /*
   * WCAG 1.4.11 Non-text Contrast: these icons are the only visual indicator
   * of a resource's public/private access state, so they need >= 3:1 contrast
   * against the white item background. --blue-400/--yellow-600 (as used
   * elsewhere against tinted pill backgrounds) only reach ~2.6:1/~2.9:1 here;
   * --blue-600/--yellow-700 keep the same hue family at ~5.2:1/~4.9:1.
   */
  .resource-access-indicator--public {
    color: var(--blue-600, #2563eb);
    stroke: var(--blue-600, #2563eb);
  }

  .resource-access-indicator--private {
    color: var(--yellow-700, #a16207);
    stroke: var(--yellow-700, #a16207);
  }

  @media (max-width: 768px) {
    .resource-list-main {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-areas:
        "icon label"
        "icon meta";
      column-gap: 10px;
      row-gap: 2px;
      align-items: center;
    }

    .resource-list-icon {
      grid-area: icon;
    }

    .resource-list-label {
      grid-area: label;
    }

    .resource-list-meta {
      grid-area: meta;
    }
  }

  .folder-pane-container-empty-message {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-height: 100%;
    text-align: center;
    color: var(--solid-ui-color-gray-700, #364153);
  }

  .folder-pane-container-empty-message-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    padding: 0 16.785px;
    border-radius: 16px;
    border: 1px solid var(--solid-ui-color-slate-200, #e2e8f0);
    background: var(--solid-ui-color-white, #ffffff);
  }

  .folder-pane-container-empty-message-icon icon-lucide-file-box {
    width: 32px;
    height: 32px;
    color: var(--solid-ui-color-gray-300, #d1d5dc);
    stroke-width: 2px;
  }

  .folder-pane-container-empty-message-title {
    margin: 0;
    color: var(--solid-ui-color-gray-900, #030712);
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .folder-pane-container-empty-message-body {
    max-width: 24rem;
    margin: 0;
    color: var(--solid-ui-color-gray-600, #4a5565);
    font-size: var(--solid-ui-font-size-sm, .875rem);
    line-height: 21.125px;
  }
}
`,"text/css")),W=class extends R{static properties={subject:{attribute:!1},resourceLogic:{attribute:!1},browserContext:{attribute:!1},view:{},searchQuery:{},canUpload:{type:Boolean,attribute:"can-upload"},uploadBusy:{type:Boolean,attribute:"upload-busy"},resourceActionMenuItems:{state:!0},resources:{state:!0},optimisticResources:{state:!0},resourceAccess:{state:!0},memberLoad:{state:!0},loading:{state:!0},loadError:{state:!0},dragActive:{state:!0}};constructor(){super(),this.subject=void 0,this.resourceLogic=null,this.browserContext=void 0,this.view="grid",this.searchQuery="",this.canUpload=!1,this.uploadBusy=!1,this.resourceActionMenuItems=new Map,this.resources=[],this.optimisticResources=[],this.resourceAccess=new Map,this.memberLoad=new Map,this.loading=!0,this.loadError=void 0,this.dragActive=!1}static styles=Je;resourceActionMenuLoads=new Map;resourceGeneration=0;authGeneration=0;updateWorkScheduled=!1;fileDragDepth=0;draggableItems=new WeakSet;detailsQueue=Ue({concurrency:2});detailsObserver;authListenersAttached=!1;selectResource(e){this.dispatchEvent(new CustomEvent("resource-selected",{detail:{resource:e.subject},bubbles:!0,composed:!0}))}makeResourceDraggable(e,t){!e||this.draggableItems.has(e)||(Y.makeDraggable(e,t.subject),this.draggableItems.add(e))}hasDraggedFiles(e){return Array.from(e.dataTransfer?.types??[]).includes("Files")}handleFileDragEnter=e=>{!this.canUpload||!this.hasDraggedFiles(e)||(e.preventDefault(),e.stopPropagation(),this.fileDragDepth++,this.dragActive=!0,e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))};handleFileDragLeave=e=>{this.fileDragDepth!==0&&(e.preventDefault(),e.stopPropagation(),this.fileDragDepth=Math.max(0,this.fileDragDepth-1),this.dragActive=this.fileDragDepth>0)};handleFileDragOver=e=>{!this.canUpload||!this.hasDraggedFiles(e)||(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy"))};handleFileDrop=e=>{let t=e.dataTransfer,r=Array.from(e.dataTransfer?.files??[]),n=Array.from(t?.items??[]).some(s=>s.webkitGetAsEntry?.()?.isDirectory===!0);if(!(!r.length&&!n)){if(e.preventDefault(),e.stopPropagation(),this.fileDragDepth=0,this.dragActive=!1,n){this.dispatchEvent(new CustomEvent("folder-pane-upload-rejected",{detail:{message:"Folder drops are not supported. Select files instead."},bubbles:!0,composed:!0}));return}if(this.uploadBusy){this.dispatchEvent(new CustomEvent("folder-pane-upload-rejected",{detail:{message:"Please wait for the current upload or creation to finish."},bubbles:!0,composed:!0}));return}this.canUpload&&this.dispatchEvent(new CustomEvent("folder-pane-upload-files",{detail:{files:r},bubbles:!0,composed:!0}))}};handleResourceKeyDown(e,t){e.target===e.currentTarget&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.selectResource(t))}getVisibleMemberCount(e){if(!e.isContainer||!this.resourceLogic)return 0;let t=this.resourceLogic;return t.getContainerMembers(e.subject).filter(r=>!t.isHiddenFile(r)).length}getResourcesFromStore(){let e=this.subject?[...L(this.subject,this.resourceLogic).values()]:[],t=this.optimisticResources.filter(n=>!e.some(s=>s.id===n.id));return[...e,...t]}addOptimisticResource(e){if(!this.resourceLogic||this.optimisticResources.some(r=>r.id===e.value))return;let t={id:e.value,subject:e,parentId:this.subject?.value??null,isContainer:e.uri.endsWith("/")||this.resourceLogic.isContainer(e)};this.optimisticResources=[...this.optimisticResources,t],this.loadResources()}get visibleResources(){let e=this.searchQuery.trim().toLowerCase();return e?this.resources.filter(t=>j.label(t.subject).toLowerCase().includes(e)):this.resources}async loadResources(){let e=++this.resourceGeneration;this.resetResourceDetails(),this.resourceActionMenuItems=new Map,this.resourceActionMenuLoads=new Map;let t=this.getResourcesFromStore();this.resources=t,this.loading=!1,this.loadError=void 0,this.resourceGeneration}loadResourceDetails(e){let t=this.authGeneration,r=this.viewer;e.isContainer?this.loadContainerDetails(e,this.resourceGeneration,t,r):this.loadResourceAccess(e,this.resourceGeneration,t,r)}isCurrentAccessRequest(e,t,r){return e===this.resourceGeneration&&t===this.authGeneration&&r===this.viewer}async loadContainerDetails(e,t=this.resourceGeneration,r=this.authGeneration,n=this.viewer){if(!this.browserContext||!this.isCurrentAccessRequest(t,r,n))return;let s=!this.resourceAccess.has(e.id);if(s&&(this.resourceAccess=new Map(this.resourceAccess).set(e.id,{state:"unknown",canManageAccess:!1})),await this.loadMemberCount(e,t,r,n),!s||!this.isCurrentAccessRequest(t,r,n))return;let i=this.memberLoad.get(e.id),o=je(this.browserContext.session.store.fetcher.getHeader(e.subject,"wac-allow"));o?this.setResourceAccess(e,{state:o.isPublic?"public":"private",canManageAccess:o.canManageAccess}):i==="error"?this.resourceAccess=new Map(this.resourceAccess).set(e.id,{state:"error",canManageAccess:!1}):(this.resourceAccess=new Map(this.resourceAccess),this.resourceAccess.delete(e.id),await this.loadResourceAccess(e,t,r,n))}async loadMemberCount(e,t=this.resourceGeneration,r=this.authGeneration,n=this.viewer){if(!e.isContainer||this.memberLoad.has(e.id)||!this.browserContext)return;let s=this.browserContext.session.store.fetcher;this.memberLoad=new Map(this.memberLoad).set(e.id,"loading");try{if(await this.detailsQueue.run(()=>s.load(e.subject)),!this.isCurrentAccessRequest(t,r,n))return;this.memberLoad=new Map(this.memberLoad).set(e.id,"loaded")}catch(i){if(!this.isCurrentAccessRequest(t,r,n))return;x("Unable to load folder-pane container member count",i);let o=i instanceof Error?i.message:String(i),c=/parse|syntax|turtle|unexpected token/i.test(o)?"parse-error":"error";this.memberLoad=new Map(this.memberLoad).set(e.id,c)}}get viewer(){return Xe.currentUser?.()?.value}setResourceAccess(e,t,r=this.authGeneration,n=this.viewer,s=this.resourceGeneration){this.isCurrentAccessRequest(s,r,n)&&(this.resourceAccess=new Map(this.resourceAccess).set(e.id,t),E.set(n,e.subject.uri,t))}async loadResourceAccess(e,t=this.resourceGeneration,r=this.authGeneration,n=this.viewer){if(this.resourceAccess.has(e.id)||!this.browserContext||!this.isCurrentAccessRequest(t,r,n))return;let s=E.get(n,e.subject.uri);if(s){this.resourceAccess=new Map(this.resourceAccess).set(e.id,s);return}let i=this.browserContext.session.logic.resource;this.resourceAccess=new Map(this.resourceAccess).set(e.id,{state:"unknown",canManageAccess:!1});try{let o=await this.detailsQueue.run(()=>i.fetchMetadata(e.subject));if(!this.isCurrentAccessRequest(t,r,n))return;this.setResourceAccess(e,{state:me(o.access),canManageAccess:o.access.canManageAccess},r,n,t)}catch{this.isCurrentAccessRequest(t,r,n)&&(this.resourceAccess=new Map(this.resourceAccess).set(e.id,{state:"error",canManageAccess:!1}))}}resetResourceDetails(){this.detailsQueue.clear(),this.detailsObserver?.disconnect(),this.resourceAccess=new Map,this.memberLoad=new Map}handleAuthChange=()=>{this.authGeneration++,E.clear(),this.detailsQueue.clear(),this.resourceAccess=new Map,this.memberLoad=new Map,this.resourceActionMenuLoads=new Map,this.requestUpdate()};observeResourceItems(){let e=Array.from(this.renderRoot.querySelectorAll("[data-resource-id]")),t=new Map(this.resources.map(n=>[n.id,n])),r=e.filter(n=>{let s=t.get(n.dataset.resourceId);return s&&(s.isContainer&&!this.memberLoad.has(s.id)||!this.resourceAccess.has(s.id))});if(r.length!==0){if(typeof IntersectionObserver>"u"){for(let n of r)this.loadResourceDetails(t.get(n.dataset.resourceId));return}this.detailsObserver??=new IntersectionObserver(n=>{for(let s of n){if(!s.isIntersecting)continue;let i=s.target;this.detailsObserver?.unobserve(i);let o=this.resources.find(c=>c.id===i.dataset.resourceId);o&&this.loadResourceDetails(o)}},{rootMargin:"200px"});for(let n of r)this.detailsObserver.observe(n)}}connectedCallback(){super.connectedCallback(),this.authListenersAttached||(se.events.on("login",this.handleAuthChange),se.events.on("logout",this.handleAuthChange),this.authListenersAttached=!0),this.hasUpdated&&this.requestUpdate()}disconnectedCallback(){this.authListenersAttached&&(se.events.off("login",this.handleAuthChange),se.events.off("logout",this.handleAuthChange),this.authListenersAttached=!1),super.disconnectedCallback(),this.resourceGeneration++,this.resourceActionMenuLoads=new Map,this.resetResourceDetails()}async refresh(e=!0){if(E.clear(),this.resourceGeneration++,this.resetResourceDetails(),this.resourceActionMenuItems=new Map,this.resourceActionMenuLoads=new Map,this.resourceAccess=new Map,this.optimisticResources=[],e&&this.subject&&this.browserContext)try{await this.browserContext.session.store.fetcher.load(this.subject,{force:!0,clearPreviousData:!0})}catch(t){await this.loadResources(),this.loadError="The folder could not be refreshed. Showing the last known listing.",x("Unable to refresh folder-pane container",t);return}await this.loadResources()}updated(e){if(e.has("canUpload")&&!this.canUpload&&(this.fileDragDepth=0,this.dragActive=!1),(e.has("subject")||e.has("resourceLogic")||e.has("browserContext"))&&!this.updateWorkScheduled){this.updateWorkScheduled=!0,queueMicrotask(()=>{this.updateWorkScheduled=!1,this.isConnected&&(this.resourceGeneration++,this.resetResourceDetails(),this.resourceActionMenuItems=new Map,this.loadResources(),this.observeResourceItems())});return}this.observeResourceItems()}openAccessControls(e){E.delete(e.subject.uri),this.dispatchEvent(new CustomEvent("resource-open-pane",{detail:{resource:e.subject,paneName:"sharing"},bubbles:!0,composed:!0}))}setResourceActionMenuItems(e,t){this.resourceActionMenuItems=new Map(this.resourceActionMenuItems).set(e.id,t)}renderAccessIndicator(e){let t=this.resourceAccess.get(e.id);return t?.state==="public"?b`<icon-lucide-globe class="resource-access-indicator resource-access-indicator--public" role="img" aria-label="Public" title="Public"></icon-lucide-globe>`:t?.state==="private"?b`<icon-lucide-lock-keyhole class="resource-access-indicator resource-access-indicator--private" role="img" aria-label="Private" title="Private"></icon-lucide-lock-keyhole>`:_}openResourcePane(e,t){this.dispatchEvent(new CustomEvent("resource-open-pane",{detail:{resource:e,paneName:t},bubbles:!0,composed:!0}))}async loadResourceActionMenuItems(e){if(!this.browserContext)return;let t=this.authGeneration,r=this.viewer,n=this.resourceActionMenuLoads.get(e.id);if(n==="loading"||n==="loaded")return;let s=this.resourceGeneration;if(!this.isCurrentAccessRequest(s,t,r))return;this.resourceActionMenuLoads.set(e.id,"loading");let i=this.browserContext.session.logic.resource.fetchMetadata(e.subject).then(o=>o.access).catch(o=>{x("Unable to load folder-pane access metadata for resource actions",o)});try{let o=await ne({resource:e.subject,isContainer:e.isContainer,context:this.browserContext,resourceLogic:this.resourceLogic,openPane:(c,l,d)=>{d.stopPropagation(),this.openResourcePane(c,l)},isCurrent:()=>this.isCurrentAccessRequest(s,t,r)});if(!o)return;this.setResourceActionMenuItems(e,o),this.resourceActionMenuLoads.set(e.id,"loaded")}catch(o){if(!this.isCurrentAccessRequest(s,t,r))return;this.resourceActionMenuLoads.set(e.id,"error"),x("Unable to load resource panes for folder-pane action menu",o)}finally{let o=await i;this.isCurrentAccessRequest(s,t,r)&&o?this.setResourceAccess(e,{state:me(o),canManageAccess:o.canManageAccess},t,r,s):this.isCurrentAccessRequest(s,t,r)&&(this.resourceAccess=new Map(this.resourceAccess).set(e.id,{state:"error",canManageAccess:!1}))}}handleResourceActionsMenuClick(e){this.loadResourceActionMenuItems(e)}renderResourceActionsMenu(e,t){return b`
      <div
        class="resource-actions-menu resource-actions-menu--${t}"
        @click=${r=>r.stopPropagation()}
      >
        <solid-ui-resource-actions-menu
          .store=${this.browserContext?.session.store}
          .subjectUri=${e.subject.uri}
          .handleAccessClick=${()=>this.openAccessControls(e)}
          .showAccessInMenu=${!0}
          .canManageAccess=${this.resourceAccess.get(e.id)?.canManageAccess===!0}
          .menuItems=${this.resourceActionMenuItems.get(e.id)||[]}
          @click=${()=>this.handleResourceActionsMenuClick(e)}
        ></solid-ui-resource-actions-menu>
      </div>
    `}renderResourceItem(e){let t=j.label(e.subject),r=e.isContainer&&this.memberLoad.get(e.id)==="loaded"?this.getVisibleMemberCount(e):-1;return b`
      <li
        ${B(n=>this.makeResourceDraggable(n,e))}
        class="resource-list-item"
        data-resource-id=${e.id}
        notSelectable="false"
        aria-selected="false"
        aria-label=${t}
        about=${e.subject.toNT()}
        role="option"
        tabindex="0"
        .subject=${e.subject}
        @click=${()=>this.selectResource(e)}
        @keydown=${n=>this.handleResourceKeyDown(n,e)}
      >
        <span class="resource-list-main">
          <span class=${e.isContainer?"resource-list-icon resource-list-icon--container":"resource-list-icon"} aria-hidden="true">
            ${e.isContainer?b`<icon-lucide-folder></icon-lucide-folder>`:b`<icon-lucide-file></icon-lucide-file>`}
          </span>
          <span class="resource-list-label">${t}</span>
          <span class="resource-list-meta">
            ${r>=0?b`<span class="container-member-count">${be(r)}</span>`:_}
            ${this.renderAccessIndicator(e)}
          </span>
        </span>
        ${this.renderResourceActionsMenu(e,"list")}
      </li>
    `}renderListView(e){return b`
      <ul class="resource-list" role="listbox" aria-label="Container resources">
        <li class="resource-list-header" role="presentation" aria-hidden="true">
          <span>Name</span>
          <span>Actions</span>
        </li>
        ${q(e,t=>t.id,t=>this.renderResourceItem(t))}
      </ul>
    `}renderGridItem(e){let t=j.label(e.subject),r=e.isContainer&&this.memberLoad.get(e.id)==="loaded"?this.getVisibleMemberCount(e):-1;return b`
      <li
        ${B(n=>this.makeResourceDraggable(n,e))}
        class="resource-grid-item"
        data-resource-id=${e.id}
        notSelectable="false"
        aria-selected="false"
        aria-label=${t}
        about=${e.subject.toNT()}
        role="option"
        tabindex="0"
        .subject=${e.subject}
        @click=${()=>this.selectResource(e)}
        @keydown=${n=>this.handleResourceKeyDown(n,e)}
      >
        <span class=${e.isContainer?"resource-grid-icon resource-grid-icon--container":"resource-grid-icon"} aria-hidden="true">
          ${e.isContainer?b`<icon-lucide-folder></icon-lucide-folder>`:b`<icon-lucide-file></icon-lucide-file>`}
        </span>
        ${e.isContainer?b`<span class="resource-grid-label resource-grid-label--container">${t}</span>`:_}
        <div class="resource-grid-item-footer">
          ${e.isContainer?r<0?_:b`<span class="container-member-count">${be(r)}</span>`:b`<span class="resource-grid-label">${t}</span>`}
          ${this.renderAccessIndicator(e)}
        </div>
        ${this.renderResourceActionsMenu(e,"grid")}
      </li>
    `}renderGridView(e){return b`
      <ul class="resource-grid" role="listbox" aria-label="Container resources">
        ${q(e,t=>t.id,t=>this.renderGridItem(t))}
      </ul>
    `}renderEmptyContainer(){return this.searchQuery.trim()?b`
        <div class="folder-pane-container-empty-message" role="status">
          <h2 class="folder-pane-container-empty-message-title">No resources match this search.</h2>
        </div>
      `:b`
      <div class="folder-pane-container-empty-message" role="status">
        <div class="folder-pane-container-empty-message-icon" aria-hidden="true">
          <icon-lucide-file-box></icon-lucide-file-box>
        </div>
        <h2 class="folder-pane-container-empty-message-title">This folder is empty</h2>
        <p class="folder-pane-container-empty-message-body">Resources added to this folder will appear here.</p>
      </div>
    `}render(){let e=this.visibleResources;return b`
      <div
        class="folder-pane-container-content"
        data-drag-active=${String(this.dragActive)}
        @dragenter=${this.handleFileDragEnter}
        @dragleave=${this.handleFileDragLeave}
        @dragover=${this.handleFileDragOver}
        @drop=${this.handleFileDrop}
      >
        ${this.loadError?b`<div class="folder-pane-container-error" role="alert">${this.loadError}</div>`:_}
        ${this.loading?b`<div class="folder-pane-container-loading" role="status">Loading resources…</div>`:e.length>0?this.view==="grid"?this.renderGridView(e):this.renderListView(e):this.renderEmptyContainer()}
      </div>
    `}};customElements.get("folder-pane-container")||customElements.define("folder-pane-container",W);import{html as C,nothing as O}from"lit";var Ye=await A(y(`:host {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow: hidden;

  aside {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
    box-sizing: border-box;
    padding: 17px 10px 0;
    border-radius: 5px 0 0 5px;
    background: var(--solid-ui-color-neutral-50, #fafafa);
    /* Firefox */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }

  /* Chrome, Edge, Safari */
  aside::-webkit-scrollbar {
    width: 6px;
  }

  aside::-webkit-scrollbar-track {
    background: transparent;
  }

  aside::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 999px;
  }

  aside:hover {
    scrollbar-color: var(--solid-ui-color-gray-300, #d1d5dc) transparent;
  }

  aside:hover::-webkit-scrollbar-thumb {
    background: var(--solid-ui-color-gray-300, #d1d5dc);
  }

  ul {
    list-style: none;
  }

  .resource-tree {
    flex: 1 1 auto;
    padding: 0 0 10px;
    margin: 0;
    width: 100%;
  }

  .resource-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
  }

  .resource-group {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0px 5px 0px 25px;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  }

  .resource-group::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 10px;
    bottom: 10px;
    border-left: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  }

  .resource-row {
    color: var(--solid-ui-color-gray-500, #6a7282);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: var(--solid-ui-font-size-sm, .875rem);
    width: 100%;
    box-sizing: border-box;
    padding: 5px 15px 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  .resource-row:hover {
    background: color-mix(in srgb, var(--solid-ui-color-gray-200, #cbd5e1) 40%, transparent);
  }

  .resource-row:focus-visible {
    outline: 1px solid var(--solid-ui-color-primary, #7c4dff);
    outline-offset: -1px;
  }

  .resource-item:focus-visible > .resource-row {
    outline: 1px solid var(--solid-ui-color-primary, #7c4dff);
    outline-offset: -1px;
  }

  .resource-label {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .resource-item.selected > .resource-row {
    background: var(--solid-ui-color-primary-selected);
    color: var(--solid-ui-color-primary);
  }

  .resource-item.selected > .resource-row icon-lucide-chevron-right,
  .resource-item.selected > .resource-row icon-lucide-chevron-down,
  .resource-item.selected > .resource-row icon-lucide-circle-small {
    color: currentColor;
    stroke: currentColor;
  }

  .resource-row-special icon-lucide-folder {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  icon-lucide-circle-small {
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    stroke-width: 1px;
    stroke: var(--solid-ui-color-gray-500, #6a7282);
  }

  .resource-expand-button,
  .resource-expand-spacer {
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
  }

  .resource-expand-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    cursor: pointer;
  }

  .resource-expand-button:focus-visible {
    outline: 1px solid var(--solid-ui-color-lavender-300, #e6dcff);
    outline-offset: 1px;
  }

  .resource-expand-button icon-lucide-chevron-right,
  .resource-expand-button icon-lucide-chevron-down {
    width: 16px;
    height: 16px;
    /* The lucide icon strokes with currentColor, so fill has no effect. */
    color: var(--solid-ui-color-gray-300, #d1d5dc);
  }
}
`,"text/css")),Q=class extends R{static properties={store:{attribute:!1},subject:{attribute:!1},resourceLogic:{attribute:!1},selectedResource:{attribute:!1},resources:{state:!0},expandedContainers:{state:!0},homeExpanded:{state:!0},activeResourceId:{state:!0}};constructor(){super(),this.store=null,this.subject=void 0,this.resourceLogic=null,this.selectedResource=void 0,this.resources=new Map,this.expandedContainers=new Set,this.homeExpanded=!0,this.activeResourceId=null}static styles=Ye;pendingFocusResourceId=null;resourceGeneration=0;focusHomeOnUpdate=!1;draggableRows=new WeakSet;makeResourceDraggable(e,t){!e||this.draggableRows.has(e)||(Y.makeDraggable(e,t.subject),this.draggableRows.add(e))}loadResources(){let e=this.isTreeFocused(),t=new Map(this.getVisibleResources().map(s=>[s.id,s])),r=this.activeResourceId;if(this.resourceGeneration++,!this.store||!this.subject){this.resources=new Map,this.expandedContainers=new Set,this.activeResourceId=null;return}this.resources=L(this.subject,this.resourceLogic);let n=this.getVisibleResourceIds();if(r&&!n.includes(r)){let s=t.get(r),i=null;for(;s;){let o=this.getParentResourceId(s);if(o&&n.includes(o)){i=o;break}s=o?t.get(o):void 0}this.activeResourceId=i??this.getHomeResource()?.id??null}e&&this.activeResourceId&&(this.pendingFocusResourceId=this.activeResourceId)}getVisibleResources(){let e=this.getHomeResource();if(!e)return[];let t=[e],r=n=>{let s=n.id===e.id?this.homeExpanded:this.expandedContainers.has(n.id);if(!n.isContainer||!s)return;let i=n.id===e.id?[...this.resources.values()]:[...L(n.subject,this.resourceLogic).values()];for(let o of i)t.push(o),r(o)};return r(e),t}getVisibleResourceIds(){return this.getVisibleResources().map(e=>e.id)}getParentResourceId(e){return e.parentId??this.getHomeResource()?.id??null}getFirstChildResource(e){return e.isContainer?(e.id===this.getHomeResource()?.id?[...this.resources.values()]:[...L(e.subject,this.resourceLogic).values()])[0]??null:null}getNextVisibleResourceId(e){let t=this.getVisibleResourceIds();return t[t.indexOf(e)+1]??null}getPreviousVisibleResourceId(e){let t=this.getVisibleResourceIds();return t[t.indexOf(e)-1]??null}isTreeFocused(){let e=this.renderRoot?.querySelector('[role="tree"]'),t=this.renderRoot?.activeElement??document.activeElement;return!!e&&(e.contains(t)||document.activeElement===this)}async focusResource(e,t=!0,r=!1){if(!e||!r&&!this.isTreeFocused())return;this.activeResourceId=e,await this.updateComplete;let n=Array.from(this.renderRoot.querySelectorAll('[role="treeitem"]')).find(s=>s.dataset.resourceId===e);if(!n?.isConnected){this.pendingFocusResourceId=null;return}!r&&!this.isTreeFocused()||(this.pendingFocusResourceId=e,n.focus(),this.pendingFocusResourceId=null,t&&typeof n.scrollIntoView=="function"&&n.scrollIntoView({block:"nearest"}))}setActiveFromFocus(e){let t=e.target.closest('[role="treeitem"]');this.pendingFocusResourceId&&t?.dataset.resourceId!==this.pendingFocusResourceId||t&&this.renderRoot?.activeElement&&this.renderRoot.activeElement!==t||t?.dataset.resourceId&&(this.activeResourceId=t.dataset.resourceId)}refreshResources(e){if(this.loadResources(),!e||!this.subject||e.sameTerm(this.subject))return;let t=new Set(this.expandedContainers),r=e;for(;!r.sameTerm(this.subject);){t.add(r.value);let n=r.dir();if(!n||n.sameTerm(r))break;r=n}this.expandedContainers=t}async toggleContainer(e){if(!e.isContainer)return;let t=this.resourceGeneration,r=this.subject,n=this.store,s=this.resourceLogic,i=this.isTreeFocused(),o=new Set(this.expandedContainers);if(o.has(e.id)){o.delete(e.id),this.expandedContainers=o;return}let c=this.store?.fetcher;if(!c){this.reportExpansionError(e);return}try{await c.load(e.subject)}catch(l){if(t!==this.resourceGeneration||this.subject!==r||this.store!==n||this.resourceLogic!==s)return;this.reportExpansionError(e,l);return}if(!(t!==this.resourceGeneration||this.subject!==r||this.store!==n||this.resourceLogic!==s||!this.getVisibleResources().some(l=>l.id===e.id&&l.subject.sameTerm(e.subject)))&&(this.store&&this.subject&&(this.resources=L(this.subject,this.resourceLogic)),this.expandedContainers=new Set(this.expandedContainers).add(e.id),i&&this.activeResourceId===e.id&&this.isTreeFocused())){if(await this.updateComplete,this.activeResourceId!==e.id||!this.isTreeFocused())return;await this.focusResource(e.id,!1,!0)}}reportExpansionError(e,t){t&&F("Unable to expand storage container",t),this.dispatchEvent(new CustomEvent("folder-pane-resource-error",{detail:{title:`Unable to load ${j.label(e.subject)}`,message:"Try expanding the folder again.",retry:()=>{this.toggleContainer(e)}},bubbles:!0,composed:!0}))}isSelected(e){return e?this.selectedResource?.sameTerm(e.subject)??!1:!1}getHomeResource(){return this.subject?{id:this.subject.value,subject:this.subject,parentId:null,isContainer:!0}:null}selectResource(e){this.dispatchEvent(new CustomEvent("resource-selected",{detail:{resource:e.subject},bubbles:!0,composed:!0}))}renderRow(e,t,r,n,s,i=!1){let o=e.isContainer?C`
          <button
            class="resource-expand-button"
            type="button"
            tabindex="-1"
            aria-label=${n?`Collapse ${t}`:`Expand ${t}`}
            @click=${c=>{c.preventDefault(),c.stopPropagation(),this.focusResource(e.id,!1).then(s)}}
          >
            ${n?C`<icon-lucide-chevron-down></icon-lucide-chevron-down>`:C`<icon-lucide-chevron-right></icon-lucide-chevron-right>`}
          </button>
        `:C`<span class="resource-expand-spacer" aria-hidden="true"></span>`;return C`
      <div
        ${B(c=>this.makeResourceDraggable(c,e))}
        class=${i?"resource-row resource-row-special":"resource-row"}
        @click=${()=>this.selectResource(e)}
      >
        ${o}
        ${r}
        <span class="resource-label">${t}</span>
      </div>
    `}renderItem(e,t,r,n,s,i,o=!1){let c=this.isSelected(e);return C`
      <li
        class=${c?"resource-item selected":"resource-item"}
        notSelectable="false"
        role="treeitem"
        tabindex=${this.activeResourceId===e.id||this.activeResourceId===null&&e.id===this.getHomeResource()?.id?"0":"-1"}
        data-resource-id=${e.id}
        aria-label=${t}
        aria-selected=${String(c)}
        aria-expanded=${e.isContainer?String(n):O}
        data-expanded=${String(n)}
        about=${e.subject.toNT()}
        .subject=${e.subject}
        @focusin=${this.setActiveFromFocus}
        @keydown=${l=>this.handleKeydown(l,e,n,s)}
      >
        ${this.renderRow(e,t,r,n,s,o)}
        ${n?i:O}
      </li>
    `}handleKeydown(e,t,r,n){if(e.target.closest('[role="treeitem"]')!==e.currentTarget||!["ArrowDown","ArrowUp","Home","End","ArrowRight","ArrowLeft","Enter"," "].includes(e.key))return;e.stopPropagation();let s=e.currentTarget.dataset.resourceId??t.id,i=this.getVisibleResources().find(c=>c.id===s);i&&(t=i,r=t.id===this.getHomeResource()?.id?this.homeExpanded:this.expandedContainers.has(t.id),n=()=>{t.id===this.getHomeResource()?.id?this.homeExpanded=!this.homeExpanded:this.toggleContainer(t)}),this.activeResourceId=s;let o=c=>{c&&(e.preventDefault(),this.activeResourceId=c,this.focusResource(c,!0,!0))};switch(e.key){case"ArrowDown":o(this.getNextVisibleResourceId(t.id));break;case"ArrowUp":o(this.getPreviousVisibleResourceId(t.id));break;case"Home":o(this.getVisibleResourceIds()[0]??null);break;case"End":o(this.getVisibleResourceIds().slice(-1)[0]??null);break;case"ArrowRight":if(!t.isContainer)break;r?o(this.getFirstChildResource(t)?.id??null):(e.preventDefault(),n());break;case"ArrowLeft":{t.isContainer&&r?(e.preventDefault(),this.focusResource(t.id,!1,!0).then(n)):o(this.getParentResourceId(t));break}case"Enter":case" ":e.preventDefault(),this.selectResource(t);break}}renderSpecialIcon(e){return C`<icon-lucide-folder></icon-lucide-folder>`}renderResourceItem(e,t=j.label(e.subject),r){let n=this.expandedContainers.has(e.id),s=e.isContainer&&n?this.renderResourceGroup(L(e.subject,this.resourceLogic)):O,i=r?this.renderSpecialIcon(r):C`<icon-lucide-circle-small></icon-lucide-circle-small>`;return this.renderItem(e,t,i,n,()=>{this.toggleContainer(e)},s,!!r)}renderResourceGroup(e){let t=Array.isArray(e)?e:[...e.values()];return t.length===0?O:C`
      <ul role="group" class="resource-group">
        ${q(t,r=>r.id,r=>this.renderResourceItem(r))}
      </ul>
    `}renderTree(){let e=this.getHomeResource();if(!e)return O;let t=[...this.resources.values()];return C`
      <ul role="tree" class="resource-tree" aria-label="Storage resources">
        ${this.renderItem(e,"Home",this.renderSpecialIcon("folder"),this.homeExpanded,()=>{this.homeExpanded=!this.homeExpanded},this.renderResourceGroup(t),!0)}
      </ul>
    `}willUpdate(e){if(super.willUpdate(e),this.pendingFocusResourceId&&!this.isTreeFocused()&&(this.pendingFocusResourceId=null),e.has("subject")){let t=this.isTreeFocused();this.focusHomeOnUpdate=!!this.subject&&(t||e.get("subject")===void 0),this.expandedContainers=new Set,this.homeExpanded=!0,this.activeResourceId=this.subject?.value??null}(e.has("store")||e.has("subject")||e.has("resourceLogic"))&&this.loadResources()}updated(e){if(super.updated(e),this.focusHomeOnUpdate){let t=this.renderRoot.querySelector('[role="treeitem"]');t&&(this.focusHomeOnUpdate=!1,t.focus(),this.pendingFocusResourceId=null);return}if(this.pendingFocusResourceId){let t=Array.from(this.renderRoot.querySelectorAll('[role="treeitem"]')).find(r=>r.dataset.resourceId===this.pendingFocusResourceId);t?.isConnected&&t.focus(),this.pendingFocusResourceId=null}}render(){return C`
      <aside>
        ${Le(this.subject?.value,this.renderTree())}
      </aside>
    `}};customElements.get("folder-pane-sidebar")||customElements.define("folder-pane-sidebar",Q);import{html as Ze}from"lit";var et=await A(y(`:host {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  flex: 1 1 0%;
  padding: 10px 16px;
  align-items: stretch;
  gap: 20px;
  flex-shrink: 0;
  align-self: stretch;
  height: 100%;
  width: 100%;
  min-width: 0;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

::slotted(*) {
  flex: 1 1 auto;
  min-height: 0;
}

@media (max-width: 768px) {
  & {
    height: auto;
    min-height: 0;
    overflow: visible;
  }
}
`,"text/css")),K=class extends R{static styles=et;render(){return Ze`
      <slot></slot>
    `}};customElements.get("folder-pane-content")||customElements.define("folder-pane-content",K);import{html as M,nothing as oe}from"lit";import{authSession as ae}from"solid-logic";var tt=await A(y(`:host {
  display: block;
  flex: 0 0 auto;
  min-width: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--solid-ui-color-white, #ffffff);
}

.folder-pane-storage-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.folder-pane-storage-header-breadcrumbs,
.folder-pane-storage-header-breadcrumbs ol,
.folder-pane-storage-header-breadcrumbs li,
.folder-pane-storage-header-toolbar,
.folder-pane-storage-header-view-controls {
  display: flex;
  align-items: center;
}

.folder-pane-storage-header-breadcrumbs {
  min-width: 0;
  gap: 5.6px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 10px;
}

.folder-pane-storage-header-breadcrumbs icon-lucide-folder-open {
  width: 12px;
  height: 12px;
  flex: 0 0 auto;
  color: var(--solid-ui-color-gray-500, #6a7282);
}

.folder-pane-storage-header-breadcrumbs ol {
  min-width: 0;
  flex-wrap: nowrap;
  gap: 5.6px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--solid-ui-color-gray-600, #4a5565);
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

.folder-pane-storage-header-breadcrumbs li {
  min-width: 0;
  flex: 0 0 auto;
  gap: 5.6px;
}

.folder-pane-storage-header-breadcrumbs button {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font: inherit;
  white-space: nowrap;
}

.folder-pane-storage-header-breadcrumbs button:hover,
.folder-pane-storage-header-breadcrumbs button:focus-visible {
  color: var(--solid-ui-color-primary, #7c4dff);
}

.folder-pane-storage-header-breadcrumbs [aria-current='page'] {
  white-space: nowrap;
}

.folder-pane-storage-header-toolbar {
  flex: 0 0 auto;
  justify-content: flex-end;
  gap: 8px;
  min-width: 0;
  padding-right: var(--folder-pane-storage-toolbar-right-padding, 0);
}

.folder-pane-storage-header-search {
  display: none;
  align-items: center;
  gap: 5.6px;
  min-width: 8rem;
  max-width: 14rem;
  padding: 4px 8px;
  border: 1px solid var(--solid-ui-color-gray-300, #d1d5dc);
  border-radius: 0.35rem;
  color: var(--solid-ui-color-gray-500, #6a7282);
}

.folder-pane-storage-header-search icon-lucide-search {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
}

.folder-pane-storage-header-search input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: inherit;
  font: inherit;
}

.folder-pane-storage-header-view-controls {
  gap: 0;
}

.folder-pane-storage-header-resource-actions {
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
}

.folder-pane-storage-header-view-toggle {
  display: flex;
  width: 44px;
  height: 36px;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: 1px solid var(--solid-ui-color-gray-300, #d1d5dc);
  background: var(--solid-ui-color-white, #ffffff);
}

.folder-pane-storage-header-view-toggle:first-child {
  border-radius: 5px 0 0 5px;
}

.folder-pane-storage-header-view-toggle:last-child {
  border-left: 0;
  border-radius: 0 5px 5px 0;
}

.folder-pane-storage-header-view-toggle.is-selected {
  background: var(--solid-ui-color-lavender-300, #e6dcff);
}

.folder-pane-storage-header-view-toggle solid-ui-button {
  width: 100%;
  height: 100%;
}

.folder-pane-storage-header-view-toggle icon-lucide-layout-grid,
.folder-pane-storage-header-view-toggle icon-lucide-list {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.folder-pane-storage-header-view-toggle solid-ui-button[aria-pressed='true'] {
  color: var(--solid-ui-color-primary, #7c4dff);
}

.folder-pane-storage-header-add-menu {
  display: inline-flex;
  align-items: center;
  margin-left: 22px;
}

.folder-pane-storage-header-add-trigger {
  display: inline-flex;
  align-items: center;
}

.folder-pane-storage-header-add-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5.6px;
  min-height: 36px;
  padding: 5.6px 12px;
  border: 0;
  border-radius: 5.6px;
  background: var(--solid-ui-color-primary, #7c4dff);
  color: var(--solid-ui-color-white, #ffffff);
  cursor: pointer;
  font: inherit;
}

.folder-pane-storage-header-add-button:hover {
  background: var(--solid-ui-color-primary-hover, #b9a2ff);
}

.folder-pane-storage-header-add-button:focus-visible {
  outline: 2px solid var(--solid-ui-color-primary, #7c4dff);
  outline-offset: 2px;
}

.folder-pane-storage-header-add-button icon-lucide-plus,
.folder-pane-storage-header-add-chevron {
  width: 1.25rem;
  height: 1.25rem;
  flex: 0 0 auto;
}

.folder-pane-storage-header-add-menu img[slot="left-icon"] {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
  flex: 0 0 auto;
}

.folder-pane-storage-header-add-menu img[slot="left-icon"] {
  width: 13.333px;
  height: 12.664px;
}

@media (max-width: 768px) {
  .folder-pane-storage-header {
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: var(--folder-pane-storage-header-mobile-gap, 8px);
    padding: var(--folder-pane-storage-header-mobile-padding, 10px 0);
    border-bottom: 1px solid var(--solid-ui-color-gray-200, #e5e7eb);
  }

  .folder-pane-storage-header-breadcrumbs {
    flex: 1 1 0;
    max-width: 100%;
    overflow: visible;
    align-items: flex-end;
    margin-top: 4px;
    align-self: stretch;
  }

  .folder-pane-storage-header-breadcrumbs ol {
    flex: 1 1 0;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
    row-gap: 3px;
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
    text-align: left;
    align-self: flex-end;
  }

  .folder-pane-storage-header-breadcrumbs icon-lucide-folder-open {
    transform: translateY(-3px);
  }

  .folder-pane-storage-header-breadcrumbs li:nth-last-child(n + 3) {
    display: none;
  }

  .folder-pane-storage-header-breadcrumbs li:last-child {
    display: none;
  }

  .folder-pane-storage-header-breadcrumbs li:only-child {
    display: flex;
  }

  .folder-pane-storage-header-breadcrumbs .separator {
    display: none;
  }

  .folder-pane-storage-header-breadcrumbs li {
    flex: 0 1 auto;
    max-width: 100%;
    align-items: baseline;
  }

  .folder-pane-storage-header-breadcrumbs li button {
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
    text-align: left;
  }

  .folder-pane-storage-header-breadcrumbs .separator {
    flex: 0 0 auto;
    margin-left: 0.35em;
  }

  .folder-pane-storage-header-breadcrumbs .breadcrumb-label-ending {
    display: inline-block;
    white-space: nowrap;
  }

  .folder-pane-storage-header-breadcrumbs [aria-current='page'] {
    display: block;
    min-width: 0;
    white-space: normal;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .folder-pane-storage-header-toolbar {
    flex: 0 0 auto;
    margin-left: auto;
  }

  .folder-pane-storage-header-add-menu {
    margin: 0;
  }

  .folder-pane-storage-header-add-trigger {
    position: fixed;
    right: 30px;
    bottom: 50px;
    z-index: 200;
    display: flex;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    padding: 9.722px 13.889px;
    justify-content: center;
    align-items: center;
    gap: 11.111px;
    aspect-ratio: 1 / 1;
    border-radius: 6.944px;
    background: var(--solid-ui-color-primary, #7c4dff);
    box-shadow: 1.389px 5.556px 9.722px 0 rgb(0 0 0 / 56%);
  }

  .folder-pane-storage-header-add-button {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    min-height: 0;
    padding: 0;
    background: transparent;
  }

  .folder-pane-storage-header-add-button:hover {
    background: transparent;
  }

  .folder-pane-storage-header-add-button icon-lucide-plus {
    width: 20px;
    height: 20px;
  }

  .folder-pane-storage-header-add-label,
  .folder-pane-storage-header-add-chevron {
    display: none;
  }
}
`,"text/css")),X=class extends R{static properties={subject:{attribute:!1},breadcrumbRoot:{attribute:!1},selectedResource:{attribute:!1},browserContext:{attribute:!1},paneList:{attribute:!1},view:{},searchQuery:{},canCreate:{type:Boolean},availablePanes:{state:!0},resourceActionMenuItems:{state:!0},canManageAccess:{state:!0}};constructor(){super(),this.subject=void 0,this.breadcrumbRoot=void 0,this.selectedResource=void 0,this.browserContext=void 0,this.paneList=[],this.view="grid",this.searchQuery="",this.canCreate=!1,this.availablePanes=[],this.resourceActionMenuItems=[],this.canManageAccess=!1}static styles=tt;availablePanesGeneration=0;resourceActionsGeneration=0;authListenersAttached=!1;willUpdate(e){if(e.has("paneList")||e.has("browserContext")){let t=++this.availablePanesGeneration;Ee.filterAvailablePanes(this.paneList).then(r=>{t===this.availablePanesGeneration&&(this.availablePanes=De(r))}).catch(r=>F("Unable to load folder creation panes",r))}(e.has("selectedResource")||e.has("subject")||e.has("browserContext"))&&this.loadResourceActions()}connectedCallback(){super.connectedCallback(),this.authListenersAttached||(ae.events.on("login",this.handleAuthChange),ae.events.on("logout",this.handleAuthChange),this.authListenersAttached=!0)}disconnectedCallback(){this.resourceActionsGeneration++,this.authListenersAttached&&(ae.events.off("login",this.handleAuthChange),ae.events.off("logout",this.handleAuthChange),this.authListenersAttached=!1),super.disconnectedCallback()}handleAuthChange=()=>{this.loadResourceActions()};get displayedResource(){return this.selectedResource??this.subject}async loadResourceActions(){let e=++this.resourceActionsGeneration,t=this.displayedResource,r=this.browserContext;if(this.resourceActionMenuItems=[],this.canManageAccess=!1,!t||!r)return;let n=r.session.logic.resource,s=n,i=n.fetchMetadata(t).then(o=>o.access.canManageAccess).catch(o=>(x("Unable to load storage-header access metadata",o),!1));try{let o=await ne({resource:t,isContainer:P(t,s),context:r,resourceLogic:s,openPane:(c,l,d)=>{d.stopPropagation(),this.dispatchEvent(new CustomEvent("resource-open-pane",{detail:{resource:c,paneName:l},bubbles:!0,composed:!0}))},isCurrent:()=>e===this.resourceActionsGeneration&&t===this.displayedResource});o&&(this.resourceActionMenuItems=o)}catch(o){e===this.resourceActionsGeneration&&x("Unable to load storage-header pane actions",o)}finally{let o=await i;e===this.resourceActionsGeneration&&t===this.displayedResource&&(this.canManageAccess=o)}}openAccessControls=()=>{let e=this.displayedResource;e&&(E.delete(e.uri),this.dispatchEvent(new CustomEvent("resource-open-pane",{detail:{resource:e,paneName:"sharing"},bubbles:!0,composed:!0})))};get breadcrumbResources(){let e=this.breadcrumbRoot??this.subject,t=this.selectedResource;if(!e||!t)return e?[e]:[];let r=[t],n=t;for(;!n.sameTerm(e);){let s=n.dir();if(!s||s.sameTerm(n))return[e,t];if(r.unshift(s),n=s,r.length>32)return[e,t]}return r}isHomeResource(e){try{return new URL(e.uri).pathname.split("/").filter(Boolean).length===0}catch{return!1}}getResourceLabel(e){if(this.isHomeResource(e))return"Home";try{let t=new URL(e.uri).pathname.split("/").filter(Boolean);return decodeURIComponent(t[t.length-1]||e.uri)}catch{return e.uri}}selectHome(){this.dispatchEvent(new CustomEvent("folder-pane-select-home",{bubbles:!0,composed:!0}))}selectView(e){this.dispatchEvent(new CustomEvent("folder-pane-change-view",{detail:{view:e},bubbles:!0,composed:!0}))}selectResource(e){this.dispatchEvent(new CustomEvent("folder-pane-select-resource",{detail:{resource:e},bubbles:!0,composed:!0}))}requestUpload(){this.dispatchEvent(new CustomEvent("folder-pane-upload",{bubbles:!0,composed:!0}))}updateSearch(e){this.dispatchEvent(new CustomEvent("folder-pane-search",{detail:{query:e.target.value},bubbles:!0,composed:!0}))}createPane(e){this.dispatchEvent(new CustomEvent("folder-pane-create-pane",{detail:{pane:e},bubbles:!0,composed:!0}))}render(){return M`
      <header class="folder-pane-storage-header">
        <nav class="folder-pane-storage-header-breadcrumbs" aria-label="Storage breadcrumb">
          <icon-lucide-folder-open aria-hidden="true"></icon-lucide-folder-open>
          <ol>
            ${this.breadcrumbResources.map((e,t,r)=>M`
              <li>
                ${t>0?M`<span class="separator" aria-hidden="true">/</span>`:oe}
                ${t===r.length-1?M`<span aria-current="page">${this.getResourceLabel(e)}</span>`:M`
                      <button
                        type="button"
                        @click=${()=>this.isHomeResource(e)?this.selectHome():this.selectResource(e)}
                      >${this.getResourceLabel(e)}</button>
                    `}
              </li>
            `)}
          </ol>
        </nav>
        <div class="folder-pane-storage-header-toolbar">
          <label class="folder-pane-storage-header-search">
            <icon-lucide-search aria-hidden="true"></icon-lucide-search>
            <input
              aria-label="Search"
              type="search"
              .value=${this.searchQuery}
              @input=${this.updateSearch}
            >
          </label>
          ${this.displayedResource&&this.browserContext?M`
            <solid-ui-resource-actions-menu
              class="folder-pane-storage-header-resource-actions"
              .store=${this.browserContext.session.store}
              .subjectUri=${this.displayedResource.uri}
              .menuItems=${this.resourceActionMenuItems}
              .canManageAccess=${this.canManageAccess}
              .showAccessInMenu=${!0}
              .handleAccessClick=${this.openAccessControls}
            ></solid-ui-resource-actions-menu>
          `:oe}
          <div class="folder-pane-storage-header-view-controls" role="group" aria-label="Container view">
            <div class=${`folder-pane-storage-header-view-toggle ${this.view==="grid"?"is-selected":""}`}>
              <solid-ui-button
                variant="ghost"
                aria-label="Grid view"
                aria-pressed=${String(this.view==="grid")}
                @click=${()=>this.selectView("grid")}
              >
                <icon-lucide-layout-grid slot="icon" aria-hidden="true"></icon-lucide-layout-grid>
              </solid-ui-button>
            </div>
            <div class=${`folder-pane-storage-header-view-toggle ${this.view==="list"?"is-selected":""}`}>
              <solid-ui-button
                variant="ghost"
                aria-label="List view"
                aria-pressed=${String(this.view==="list")}
                @click=${()=>this.selectView("list")}
              >
                <icon-lucide-list slot="icon" aria-hidden="true"></icon-lucide-list>
              </solid-ui-button>
            </div>
          </div>
          ${this.canCreate?M`<solid-ui-menu class="folder-pane-storage-header-add-menu" placement="bottom-end">
            <div slot="trigger" class="folder-pane-storage-header-add-trigger">
              <button
                type="button"
                class="folder-pane-storage-header-add-button"
                aria-label="Add"
                aria-haspopup="menu"
              >
                <icon-lucide-plus aria-hidden="true"></icon-lucide-plus>
                <span class="folder-pane-storage-header-add-label">Add</span>
                <icon-lucide-chevron-down class="folder-pane-storage-header-add-chevron" aria-hidden="true"></icon-lucide-chevron-down>
              </button>
            </div>
            ${this.availablePanes.map(e=>M`
              <solid-ui-menu-item @solid-ui-select=${()=>this.createPane(e)}>
                ${e.icon?M`<img
                    slot="left-icon"
                    src=${String(e.icon)}
                    alt=""
                  >`:oe}
                New ${te(e)}
              </solid-ui-menu-item>
            `)}
            <solid-ui-menu-item @solid-ui-select=${this.requestUpload}>
              <icon-lucide-upload slot="left-icon" aria-hidden="true"></icon-lucide-upload>
              Upload
            </solid-ui-menu-item>
          </solid-ui-menu>`:oe}
        </div>
      </header>
    `}};customElements.get("folder-pane-storage-header")||customElements.define("folder-pane-storage-header",X);function Ce(a){return a+1}function ye(a,e,t,r){return a.generation===e&&a.subjectUri===t&&a.context===r}import{html as Te}from"lit";var G='Names must not be empty, "." or "..", and must not contain path separators.';function ce(a){let e=a.trim();if(!e||e==="."||e===".."||/[\\/\u0000-\u001f\u007f]/.test(e))throw new Error(G);return e}function z(a){try{return ce(a),!0}catch{return!1}}var rt=await A(y(`:host {
  display: block;

  .folder-pane-create-dialog-header {
    padding: 20px 25px;
    gap: 25px;
    border-radius: 5px 5px 0 0;
    border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
    background: var(--solid-ui-color-slate-50, #F8FAFC);
  }

  h1 {
    margin: 0;
    font-weight: 500;
    color: var(--solid-ui-color-gray-800, #1E2939);
    font-size: var(--solid-ui-font-size-xl, 1.25rem);
  }

  .folder-pane-create-dialog-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    flex: 1 0 0;
    align-self: stretch;
    color: var(--solid-ui-color-gray-600, #4A5565);
    font-size: var(--solid-ui-font-size-sm, .875rem);
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--solid-ui-color-gray-400, #99A1AF);
    background: var(--solid-ui-color-white, #FFF);
    color: var(--solid-ui-color-gray-900, #101828);
    font-size: var(--solid-ui-font-size-sm, .875rem);
    font-weight: 500;
  }

  solid-ui-dialog-content {
    display: flex;
    padding: 25px 25px 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    align-self: stretch;
  }

  solid-ui-dialog-footer {
    display: flex;
    padding: 20px 30px;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    align-self: stretch;
    border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
    background: var(--solid-ui-color-gray-50, #F9FAFB);
  }
}
`,"text/css")),V=class extends Ie{static properties={label:{attribute:!1},name:{state:!0},validationMessage:{state:!0}};constructor(){super(),this.label=null,this.name="",this.validationMessage=""}get nameInput(){return this.renderRoot?.querySelector("input")??null}static styles=rt;cancel=()=>this.close();confirm=()=>{let e=this.name.trim();if(!z(e)){this.validationMessage=G;return}this.close(e)};onNameInput=e=>{this.name=e.target.value,this.validationMessage=""};onNameKeydown=e=>{e.key==="Enter"&&(e.preventDefault(),this.confirm())};firstUpdated(){requestAnimationFrame(()=>{this.nameInput?.focus(),this.nameInput?.setSelectionRange(0,this.nameInput.value.length)})}render(){let e=this.label??"Container",{title:t,placeholder:r}=Pe(e),s=`${t.slice(4)} name`;return Te`
      <solid-ui-dialog>
        <solid-ui-dialog-header slot="header" class="folder-pane-create-dialog-header">
          <h1>${t}</h1>
          <solid-ui-button variant="ghost" @click=${this.cancel} title="Close" aria-label="Close">
            <icon-lucide-x slot="icon"></icon-lucide-x>
          </solid-ui-button>
        </solid-ui-dialog-header>
        <solid-ui-dialog-content>
          <label class="folder-pane-create-dialog-label">
            <span>${s}</span>
            <input
              type="text"
              placeholder=${r}
              .value=${this.name}
              @input=${this.onNameInput}
              @keydown=${this.onNameKeydown}
            />
            ${this.validationMessage?Te`<span class="folder-pane-create-dialog-error" role="alert">${this.validationMessage}</span>`:""}
          </label>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer>
          <solid-ui-button variant="secondary" @click=${this.cancel}>
            Cancel
          </solid-ui-button>
          <solid-ui-button ?disabled=${!this.name.trim()} @click=${this.confirm}>
            Create
          </solid-ui-button>
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}};customElements.get("folder-pane-create-dialog")||customElements.define("folder-pane-create-dialog",V);var k=class extends Error{constructor(e,t){this.cause=t,super(e),this.name="PaneMintError"}};function nt(a,e,t){let r=a.session.store;if(typeof r.each!="function")return!1;let n=r.each(e,r.sym("http://www.w3.org/ns/ldp#contains")),s=t.endsWith("/")?t.slice(0,-1):t;return n.some(i=>i.uri===t||i.uri===s)}function st(a,e){let t=ce(e);return`${a.uri.endsWith("/")?a.uri:`${a.uri}/`}${encodeURIComponent(t)}/`}function it(a,e){if(a.name?.toLowerCase()!=="source")return!1;let t=e.trim().split("/").pop()??"",r=t.lastIndexOf(".");return r<=0||r===t.length-1}function ot(a,e,t,r){let n=a.uri.endsWith("/")?a.uri:`${a.uri}/`,s=t.uri.startsWith(n)?t.uri.slice(n.length):"";if(!s)return r(e);let i=s.indexOf("/");return i>=0&&i<s.length-1?r(e):r(t.doc().uri)}function at(a){let e=a.querySelector(":scope > .folder-pane-status-message");return e||(e=a.ownerDocument.createElement("div"),e.className="folder-pane-status-message",a.prepend(e)),e}function v(a,e,t){let r=a.ownerDocument,n=at(a);if(a.dataset.status=e,n.dataset.status=e,n.setAttribute("role",e==="error"?"alert":"status"),e==="error"){let i=r.createElement("solid-ui-error-state");return i.setAttribute("title",t),i.addEventListener("close",()=>a.replaceChildren()),n.replaceChildren(i),n}let s=r.createElement("span");if(s.className=e==="progress"?"folder-pane-status-text folder-pane-container-loading":"folder-pane-status-text",s.textContent=t,n.replaceChildren(s),e!=="progress"){let i=r.createElement("solid-ui-button");i.setAttribute("variant","ghost"),i.setAttribute("title","Dismiss"),i.setAttribute("aria-label","Dismiss");let o=r.createElement("icon-lucide-x");o.setAttribute("slot","icon"),i.appendChild(o),i.addEventListener("click",()=>a.replaceChildren()),n.appendChild(i)}return n}async function Fe({context:a,container:e,pane:t,name:r,noun:n,statusArea:s,me:i,dom:o,mintTimeoutMs:c=9e4,allowReplacement:l=!1}){if(!t.mintNew)throw new k(`The ${n} pane cannot create new items.`);let d;try{d=ce(r)}catch(m){let I=m instanceof Error?m.message:String(m);throw v(s,"error",I),new k(I,m)}if(s.replaceChildren(),it(t,d)){let m="A new text file needs an extension, such as .txt, .ttl, or .json.";throw v(s,"error",m),new k(m)}v(s,"progress",`Creating ${d} ${n}`);let p=s.appendChild(o.createElement("div"));p.className="folder-pane-status-pane-output";let g=st(e,d);if(!l&&nt(a,e,g)){let m=`A resource named "${d}" already exists in this folder. Choose a different name; replacement is not enabled.`;throw v(s,"error",m),new k(m)}let u=`The ${n} pane did not finish creating the resource within ${c}ms. The result is uncertain; refresh the folder before retrying.`,f,h;try{let m={folder:e,newBase:g,title:d,pane:t,noun:n,div:p,dom:o,me:i,iconEle:o.createElement("img"),noIndexHTML:!0},I=t.mintNew(a,m);h=await Promise.race([I,new Promise((lt,qe)=>{f=setTimeout(()=>qe(new Error(u)),c)})])}catch(m){let I=m instanceof Error?m.message:String(m);throw v(s,"error",`Unable to create ${n} "${r}": ${I}`),new k(I,m)}finally{f&&clearTimeout(f)}if(!h?.newInstance){let m=p.textContent?.trim();throw v(s,"error",m?`Unable to create ${n} "${r}". The ${n} pane reported:`:`Unable to create ${n} "${r}": the pane did not return a new resource.`),new k(m||"The pane did not return a new resource")}s.replaceChildren();let $=m=>a.session.store.sym(m);return{newBase:g,newInstance:h.newInstance,containedResource:ot(e,g,h.newInstance,$)}}function Re(a,e){return a.getState(e.value)!=="failed"?!1:(a.unload(e),!0)}var ue=256,pe=180,he=480,ze=320,Ve=16,ct=768;function Ne(a,e){if(!Number.isFinite(e)||e<=ze)return ue;let t=e-ze;if(t<pe)return ue;let r=Number.isFinite(a)?a:ue;return Math.min(he,t,Math.max(pe,r))}var J=class extends R{static properties={browserContext:{attribute:!1},subject:{attribute:!1},fullView:{type:Boolean,attribute:"full-view"},selectedResource:{state:!0},standaloneBreadcrumbRoot:{state:!0},containerView:{state:!0},searchQuery:{state:!0},sidebarCollapsed:{state:!0},sidebarWidth:{state:!0},sidebarMaximumWidth:{state:!0},contentError:{state:!0},showingContainer:{state:!0},canCreate:{state:!0}};constructor(){super(),this.browserContext=void 0,this.subject=void 0,this.fullView=!1,this.selectedResource=void 0,this.standaloneBreadcrumbRoot=void 0,this.containerView="grid",this.searchQuery="",this.sidebarCollapsed=!1,this.sidebarWidth=ue,this.sidebarMaximumWidth=he,this.contentError=void 0,this.showingContainer=!1,this.canCreate=!1}get contentView(){return this.renderRoot?.querySelector("folder-pane-content")??null}get fullViewTarget(){return this.renderRoot?.querySelector(".folder-pane-full-view")??null}get sidebar(){return this.renderRoot?.querySelector("folder-pane-sidebar")??null}get statusArea(){return this.renderRoot?.querySelector(".folder-pane-status")??null}get store(){return this.browserContext?.session.store}get resourceLogic(){return this.browserContext?.session.logic.resource}get displayedResource(){return this.selectedResource??this.subject}initialLoadGeneration=0;renderGeneration=0;permissionGeneration=0;permissionRequest;creationInFlight=!1;authListenersAttached=!1;dropProtectionAttached=!1;sidebarResizeObserver;responsiveLayoutInitialized=!1;sidebarDrag;createRenderRoot(){return this}connectedCallback(){super.connectedCallback();let e=this.querySelector(".folder-pane-main-content");e&&this.sidebarResizeObserver?.observe(e),this.dropProtectionAttached||(ke.preventBrowserDropEvents(this.ownerDocument),this.dropProtectionAttached=!0),this.addEventListener("folder-pane-create-pane",this.handleCreatePane),this.addEventListener("folder-pane-upload",this.handleUpload),this.addEventListener("folder-pane-upload-files",this.handleDroppedFiles),this.addEventListener("folder-pane-upload-rejected",this.handleUploadRejected),this.addEventListener("resource-open-pane",this.handleResourceOpenPane),this.ownerDocument.addEventListener("solid-resource-deleted",this.handleResourceDeleted),this.authListenersAttached||(le.events.on("login",this.handleAuthChange),le.events.on("logout",this.handleAuthChange),this.authListenersAttached=!0)}disconnectedCallback(){this.finishSidebarResize(),this.sidebarResizeObserver?.disconnect(),this.renderGeneration=Ce(this.renderGeneration),this.initialLoadGeneration++,this.removeEventListener("folder-pane-create-pane",this.handleCreatePane),this.removeEventListener("folder-pane-upload",this.handleUpload),this.removeEventListener("folder-pane-upload-files",this.handleDroppedFiles),this.removeEventListener("folder-pane-upload-rejected",this.handleUploadRejected),this.removeEventListener("resource-open-pane",this.handleResourceOpenPane),this.ownerDocument.removeEventListener("solid-resource-deleted",this.handleResourceDeleted),this.authListenersAttached&&(le.events.off("login",this.handleAuthChange),le.events.off("logout",this.handleAuthChange),this.authListenersAttached=!1),super.disconnectedCallback()}firstUpdated(){if(this.updateSidebarBounds(),typeof ResizeObserver<"u"){this.sidebarResizeObserver=new ResizeObserver(t=>{this.updateSidebarBounds();let r=t[0]?.contentRect.width??0;this.responsiveLayoutInitialized||r<=0||(this.responsiveLayoutInitialized=!0,r<ct&&this.handleSidebarToggle(new Event("folder-pane-responsive-collapse")))});let e=this.querySelector(".folder-pane-main-content");e&&this.sidebarResizeObserver.observe(e),this.sidebarResizeObserver.observe(this)}}handleAuthChange=()=>{E.clear(),this.refreshCreationPermission(!0),this.requestUpdate()};handleCreatePane=async e=>{if(e.stopPropagation(),this.creationInFlight||!N.currentUser())return;let t=e.detail?.pane;if(!t?.mintNew)return;let r=this.getActiveContainer(),n=this.ownerDocument,s=this.statusArea;if(!r||!s)return;this.creationInFlight=!0,this.updateUploadAvailability();let i=++this.renderGeneration,o=te(t);try{let c=await new Promise(p=>{$e(V,{props:{label:o},onClose:p})});if(!c||!N.currentUser()||i!==this.renderGeneration||this.getActiveContainer()?.sameTerm(r)!==!0)return;if(!z(c)){v(s,"error",G);return}this.clearContentForCreation();let l=await Fe({context:this.browserContext,container:r,pane:t,name:c,noun:o,statusArea:s,me:N.currentUser()??void 0,dom:n}),d=i===this.renderGeneration&&this.getActiveContainer()?.sameTerm(r)===!0;await this.showCreatedResource({container:r,...l,pane:t,newInstance:d?l.newInstance:void 0})}catch(c){F("Unable to create folder-pane resource",c),!(c instanceof k)&&this.statusArea&&v(this.statusArea,"error",`Unable to create ${o}: ${c instanceof Error?c.message:String(c)}`)}finally{this.creationInFlight=!1,this.updateUploadAvailability()}};handleUpload=e=>{if(e.stopPropagation(),this.creationInFlight||!N.currentUser())return;let t=this.ownerDocument.createElement("input");t.type="file",t.multiple=!0,t.addEventListener("change",()=>{this.uploadFiles(Array.from(t.files??[]),!0)}),t.click()};handleDroppedFiles=e=>{e.stopPropagation();let t=e.detail?.files??[];this.uploadFiles(t,!1)};handleUploadRejected=e=>{e.stopPropagation();let t=e.detail?.message;t&&this.statusArea&&v(this.statusArea,"error",t)};handleResourceDeleted=e=>{let t=e.detail?.resource;if(!t)return;let r=t.dir(),n=this.getActiveContainer();r&&this.sidebar?.refreshResources?.(r);let s=this.resourceTarget?.querySelector("folder-pane-container");if(r&&n?.sameTerm(r)&&s?.refresh?.(),!this.selectedResource?.sameTerm(t))return;this.renderGeneration=Ce(this.renderGeneration);let i=r??this.subject;i?(this.selectedResource=i,this.renderContainerView(i)):this.selectedResource=void 0};async uploadFiles(e,t){if(this.creationInFlight||!N.currentUser()||!this.canCreate)return;let r=this.getActiveContainer(),n=this.statusArea,s=this.resourceLogic;if(!e.length||!r||!n||!this.store||!s)return;let i=e.filter(u=>z(u.name)),c=e.filter(u=>!z(u.name)).map(u=>`${u.name}: ${G}`);if(!i.length){c.length&&v(n,"error",c.join("; "));return}this.creationInFlight=!0,this.updateUploadAvailability();let l=this.renderGeneration,d=this.browserContext,p=i.length,g=()=>{p--,p===0&&(this.creationInFlight=!1,this.updateUploadAvailability(),n.dataset.status==="progress"&&n.replaceChildren())};v(n,"progress",`Uploading ${i.length} file${i.length===1?"":"s"}`);try{let u=await s.uploadFiles(i,r.uri);for(let f of u){if(!f.success){let h=f.error.destinationUri?`Upload failed while putting ${f.error.destinationUri}`:`Upload failed for ${f.file.name}`,$=f.error.status===413?`${h}: storage quota was exceeded. ${f.error.message}`:f.error.status?`${h} (HTTP ${f.error.status}). ${f.error.message}`:`${h}. ${f.error.message}`;c.push($),g();continue}try{let h=this.renderGeneration===l&&this.browserContext===d;await this.showCreatedResource({container:r,containedResource:this.store.sym(f.uploadedUri),newInstance:t&&i.length===1&&h?this.store.sym(f.uploadedUri):void 0})}catch(h){let $=h instanceof Error?h.message:String(h);c.push(`Uploaded ${f.file.name}, but could not refresh the folder: ${$}`)}finally{g()}}}catch(u){let f=u instanceof Error?u.message:String(u);for(c.push(`Unable to upload files: ${f}`);p>0;)g()}c.length&&v(n,"error",c.join("; "))}updated(e){if((e.has("subject")||e.has("browserContext"))&&this.subject){this.standaloneBreadcrumbRoot=this.fullView?this.getStandaloneBreadcrumbRoot(this.subject):this.subject,(e.has("subject")||e.has("browserContext"))&&(this.selectedResource=void 0,this.renderGeneration++,this.initialLoadGeneration++),this.refreshCreationPermission(),this.showInitialContainer(this.subject);return}e.has("selectedResource")&&this.refreshCreationPermission(),e.has("fullView")&&e.get("fullView")!==void 0&&(this.subject&&(this.standaloneBreadcrumbRoot=this.fullView?this.getStandaloneBreadcrumbRoot(this.subject):this.subject),this.selectedResource?this.showResourceInContentView(this.selectedResource):this.subject&&this.renderContainerView(this.subject))}getStandaloneBreadcrumbRoot(e){try{let t=new URL(e.uri),r=t.pathname.split("/").filter(Boolean);return r.length<=1?e:this.store?.sym(`${t.origin}/${r[0]}/`)??e}catch{return e}}get resourceTarget(){return this.fullView?this.fullViewTarget:this.contentView}showContentError(e,t=!0){t&&this.resourceTarget?.replaceChildren(),this.contentError=e}renderAccessDeniedScreen(){this.showContentError({title:"Access denied",message:"You do not have access to the contents of this container."})}async loadResource(e,t=!1){let r=this.store;if(!r)return;let n=r.fetcher;t&&Re(n,e);try{await n.load(e)}catch(s){if(!t||!U(s)||!N.currentUser())throw s;await n.load(e,{force:!0,clearPreviousData:!0})}}clearContentError=()=>{this.contentError=void 0};retryContent=()=>{let e=this.contentError?.retry;if(e){this.clearContentError(),e();return}let t=this.selectedResource,r=this.subject;!t&&!r||(this.clearContentError(),t?this.showResourceInContentView(t,void 0,!1,!0):r&&(this.store&&Re(this.store.fetcher,r),this.showInitialContainer(r)))};openCreatedResource(e,t){this.searchQuery="";let r=t?.name?this.browserContext?.session.paneRegistry.byName(t.name)??t:t;this.showSubject(e,typeof r?.render=="function"?r:void 0)}getActiveContainer(){let e=this.selectedResource,t=e?we(e):void 0;if(t&&this.store)return this.store.sym(t);if(e&&this.resourceLogic&&P(e,this.resourceLogic))return e;let r=this.fullView?this.standaloneBreadcrumbRoot:this.subject,n=e?.dir(),s=r?.uri.endsWith("/")?r.uri:`${r?.uri}/`;return r&&n&&s&&n.uri.startsWith(s)?n:this.subject}refreshCreationPermission(e=!1){let t=this.getActiveContainer(),r=this.browserContext?.session.logic.resource;if(!e&&t&&r&&this.permissionRequest?.containerUri===t.uri&&this.permissionRequest.resourceLogic===r)return;let n=++this.permissionGeneration;this.setCanCreate(!1),this.permissionRequest=t&&r?{containerUri:t.uri,resourceLogic:r}:void 0,!(!t||!r)&&r.fetchMetadata(t).then(s=>{n===this.permissionGeneration&&this.getActiveContainer()?.sameTerm(t)===!0&&this.setCanCreate(s.access.canEdit)}).catch(s=>{n===this.permissionGeneration&&(this.permissionRequest=void 0,x("Unable to determine folder creation permission",s))})}updateUploadAvailability(){let e=this.resourceTarget?.querySelector("folder-pane-container"),t=this.getActiveContainer();e&&(e.canUpload=this.canCreate&&!this.creationInFlight&&!!t&&e.subject?.sameTerm(t)===!0,e.uploadBusy=this.creationInFlight)}setCanCreate(e){this.canCreate=e,this.updateUploadAvailability()}clearContentForCreation(){this.resourceTarget?.replaceChildren()}async showCreatedResource({container:e,containedResource:t,newInstance:r,pane:n}){let s=this.store;if(!s)return;let i=this.renderGeneration,o=this.browserContext,c=async p=>{try{return await s.fetcher.load(p,{force:!0,clearPreviousData:!0}),!0}catch(g){return S.warn("Unable to reload "+p.uri+": "+g),!1}},l=await c(e);if(t.uri.endsWith("/")){await c(t);let p=s.each(t,Ae.ldp("contains"),void 0,t.doc());for(let g of p)g.termType==="NamedNode"&&s.fetcher.getState(g.value)==="failed"&&s.fetcher.unload(g)}this.sidebar?.refreshResources?.(e);let d=this.resourceTarget?.querySelector("folder-pane-container");!l&&d?.addOptimisticResource&&d.addOptimisticResource(t),l&&d?.refresh?.(),r&&this.isConnected&&this.renderGeneration===i&&this.browserContext===o&&this.openCreatedResource(r,n)}renderContainerView(e){let t=this.resourceTarget;if(!t)return;this.contentError=void 0;let r=document.createElement("folder-pane-container");r.subject=e,r.resourceLogic=this.resourceLogic??null,r.browserContext=this.browserContext;let n=this.getActiveContainer();r.canUpload=this.canCreate&&!!n&&e.sameTerm(n),r.uploadBusy=this.creationInFlight,r.view=this.containerView,r.searchQuery=this.searchQuery,this.showingContainer=!0,t.replaceChildren(r)}async showInitialContainer(e){let t=++this.initialLoadGeneration;if(ee(e)){this.showSubject(e);return}if(!(!this.store||!this.resourceLogic)){try{await this.loadResource(e)}catch(r){if(t!==this.initialLoadGeneration||!this.subject?.sameTerm(e))return;if(U(r)){this.resourceTarget&&this.renderAccessDeniedScreen();return}S.error("Unable to load storage container: "+r),this.showContentError({title:"Unable to load this folder",message:"The folder could not be loaded. Try again."});return}t!==this.initialLoadGeneration||!this.subject?.sameTerm(e)||(this.sidebar?.refreshResources?.(),this.requestUpdate(),this.selectedResource||this.showSubject(e))}}async renderExplorerInto(e,t,r,n={}){if(!this.browserContext)return;let s=await D(t,this.browserContext,{excludedPaneNames:["sharing"],fallbackPaneName:"internal"});if(n.isCurrent&&!n.isCurrent())return;let i=r||T(t,this.browserContext,s);if(!i){this.renderExplorerError(t,"No pane is available to display this resource.");return}let o;try{o=i.render(t,this.browserContext,n.paneOptions||{})}catch(d){S.error("Unable to render selected pane: "+d),this.renderExplorerError(t,"The selected pane could not render this resource.");return}let c=e.ownerDocument.createElement("solid-ui-file-explorer-provider"),l=await Z({subject:t,context:this.browserContext,panes:s,openPane:(d,p)=>{c.dispatchEvent(new CustomEvent(fe,{bubbles:!0,composed:!0,detail:{subjectUri:d.uri,paneName:p}}))}});c.addEventListener(Se,d=>{if(!ge(d,c))return;d.stopPropagation();let p=this.getActiveContainer()||this.subject||t;this.renderGeneration++,this.selectedResource=p,this.renderContainerView(p)}),c.addEventListener(fe,d=>{if(!ge(d,c))return;d.stopPropagation();let p=d.detail?.paneName,g=p?this.browserContext?.session.paneRegistry.byName(p):void 0;if(g){let u={generation:++this.renderGeneration,subjectUri:t.uri,context:this.browserContext};this.renderExplorerInto(e,t,g,{...n,paneOptions:g.name==="folder"?{folderView:"container",fullView:!0,solo:!0}:n.paneOptions,isCurrent:()=>ye(u,this.renderGeneration,this.selectedResource?.uri,this.browserContext)}).catch(f=>{S.error("Unable to switch selected pane: "+f)})}}),Me(c,{context:this.browserContext,subjectUri:t.uri,pane:i,relevantPanes:s,header:n.showHeader===!1?void 0:{paneIcon:i.icon,menuItems:l},paneElement:o}),!(n.isCurrent&&!n.isCurrent())&&(this.contentError=void 0,this.showingContainer=!1,e.replaceChildren(c))}renderExplorerError(e,t){this.showContentError({title:t,message:e.uri})}async showResourceInContentView(e,t,r=!1,n=!1){let s=++this.renderGeneration;try{let i=this.resourceTarget,o=this.browserContext;if(!i||!this.store||!this.resourceLogic||!o)return;let c={generation:s,subjectUri:e.uri,context:this.browserContext},l=p=>ye(c,this.renderGeneration,this.selectedResource?.uri,this.browserContext)&&p.uri===c.subjectUri;if(!l(e))return;if(this.subject?.sameTerm(e)&&!t&&!r&&P(e,this.resourceLogic)){this.renderContainerView(e);return}if(P(e,this.resourceLogic)&&(t?.name!=="source"||r)){try{await this.loadResource(e,n)}catch(u){if(!l(e))return;if(U(u)){this.renderAccessDeniedScreen();return}S.error("Unable to load selected container: "+u),this.showContentError({title:"Unable to load this folder",message:"The folder could not be loaded. Try again."});return}if(!l(e))return;if(this.sidebar?.refreshResources?.(),t?.name==="folder"){this.renderContainerView(e);return}if(!t&&(r||this.resourceLogic.containerHasIndexDocument(e))){let u=this.store.sym(re(e));try{await this.loadResource(u.doc(),n)}catch(f){if(!l(e))return;if(U(f)){this.renderAccessDeniedScreen();return}S.error("Unable to load container index document: "+f)}await this.renderExplorerInto(i,u,t,{isCurrent:()=>l(e),showHeader:!1});return}let p=await D(e,o,{excludedPaneNames:["sharing"],fallbackPaneName:"internal"});if(!l(e))return;let g=t||T(e,o,p);if(g?.name!=="folder"){await this.renderExplorerInto(i,e,g,{isCurrent:()=>l(e),showHeader:!1});return}this.renderContainerView(e);return}try{await this.loadResource(e,n)}catch(p){if(!l(e))return;if(U(p)){this.renderAccessDeniedScreen();return}S.warn("Unable to load selected resource metadata: "+p)}if(!l(e))return;let d=ee(e)?this.browserContext?.session.paneRegistry.byName("source"):void 0;if(!t&&ee(e)&&!d){this.renderExplorerError(e,"The Source pane is unavailable to display this JavaScript file.");return}await this.renderExplorerInto(i,e,t||d,{isCurrent:()=>l(e)})}catch(i){if(S.error("Unable to render selected resource: "+i),s===this.renderGeneration&&this.resourceTarget){if(U(i)){this.renderAccessDeniedScreen();return}this.renderExplorerError(e,"Unable to display the selected resource.")}}}showSubject(e,t,r=!1){let n=!r&&t?.name!=="sharing",s=n?we(e):void 0,i=s&&this.store?this.store.sym(s):void 0,o=i??e,c=n&&!i&&!!this.resourceLogic&&P(e,this.resourceLogic)&&this.resourceLogic.containerHasIndexDocument(e);this.selectedResource=o,this.showResourceInContentView(o,t,!!i||c)}handleResourceSelected=e=>{let t=e.detail?.resource;t&&(e.stopPropagation(),this.searchQuery="",this.showSubject(t))};handleResourceOpenPane=e=>{let t=e.detail?.resource,r=e.detail?.paneName,n=r?this.browserContext?.session.paneRegistry.byName(r):void 0;if(!(!t||!n)){if(e.stopPropagation(),this.searchQuery="",n.name==="folder"){this.showSubject(t,n,!0);return}this.showSubject(t,typeof n?.render=="function"?n:void 0,!0)}};setContainerView(e){this.containerView=e;let t=this.resourceTarget?.querySelector("folder-pane-container");t&&(t.view=e)}handleSelectHome=()=>{this.searchQuery="";let e=this.subject&&this.standaloneBreadcrumbRoot?.sameTerm(this.subject)?this.subject:this.standaloneBreadcrumbRoot;e&&this.showSubject(e)};handleSearch=e=>{e.stopPropagation(),this.searchQuery=e.detail?.query||"";let t=this.resourceTarget?.querySelector("folder-pane-container");t&&(t.searchQuery=this.searchQuery)};handleSelectBreadcrumbResource=e=>{let t=e.detail?.resource;t&&(e.stopPropagation(),this.showSubject(t))};handleContainerViewChange=e=>{let t=e.detail?.view;t&&(e.stopPropagation(),this.setContainerView(t))};get sidebarAvailableWidth(){let e=this.renderRoot.querySelector(".folder-pane-main-content"),t=this.renderRoot.querySelector(".folder-pane-sidebar-resizer");return(e?.clientWidth??0)-(t?.getBoundingClientRect().width??0)}resizeSidebar(e){this.sidebarWidth=Ne(e,this.sidebarAvailableWidth)}updateSidebarBounds=()=>{this.isConnected&&(this.sidebarMaximumWidth=Ne(he,this.sidebarAvailableWidth),this.resizeSidebar(this.sidebarWidth))};handleSidebarPointerDown=e=>{if(!this.isConnected||this.sidebarCollapsed||this.sidebarDrag||e.button!==0||!e.isPrimary)return;e.preventDefault();let t=e.currentTarget;t.setPointerCapture(e.pointerId),t.focus(),this.sidebarDrag={separator:t,pointerId:e.pointerId,startX:e.clientX,startWidth:this.sidebarWidth},this.requestUpdate()};handleSidebarPointerMove=e=>{let t=this.sidebarDrag;!this.isConnected||this.sidebarCollapsed||!t||t.pointerId!==e.pointerId||this.resizeSidebar(t.startWidth+e.clientX-t.startX)};finishSidebarResize(){let e=this.sidebarDrag;e&&(this.sidebarDrag=void 0,e.separator.hasPointerCapture(e.pointerId)&&e.separator.releasePointerCapture(e.pointerId),this.isConnected&&this.requestUpdate())}handleSidebarPointerEnd=e=>{this.sidebarDrag?.pointerId===e.pointerId&&this.finishSidebarResize()};handleSidebarResizeKey=e=>{if(!this.isConnected||this.sidebarCollapsed||this.sidebarDrag||e.altKey||e.ctrlKey||e.metaKey)return;let t;switch(e.key){case"ArrowLeft":t=this.sidebarWidth-Ve;break;case"ArrowRight":t=this.sidebarWidth+Ve;break;case"Home":t=pe;break;case"End":t=he;break;default:return}e.preventDefault(),e.stopPropagation(),this.resizeSidebar(t)};handleSidebarToggle=async e=>{e.stopPropagation();let t=this.sidebar,r=this.renderRoot.querySelector(".folder-pane-sidebar-resize-handle"),n=!!t&&(t.matches(":focus-within")||t.shadowRoot?.activeElement!=null),s=r===this.ownerDocument.activeElement;this.finishSidebarResize(),this.sidebarCollapsed=!this.sidebarCollapsed,!(!this.sidebarCollapsed||!n&&!s)&&(await this.updateComplete,this.renderRoot.querySelector(".folder-pane-sidebar-toggle")?.focus())};handleFolderPaneResourceError=e=>{e.stopPropagation();let t=e.detail?.title||"Unable to load this folder",r=e.detail?.message||"The folder could not be loaded. Try again.";this.showContentError({title:t,message:r,retry:e.detail?.retry},!1)};render(){return this.fullView?de`
        <folder-pane-provider
          .rootResource=${this.subject}
          .displayedResource=${this.displayedResource}
          .activeContainer=${this.getActiveContainer()}
          .view=${this.containerView}
          .searchQuery=${this.searchQuery}
          .canCreate=${this.canCreate}
        >
          ${this.showingContainer?this.renderStorageHeader():Ge}
          ${this.renderContentError()}
          <div
            class="folder-pane-full-view"
            ?hidden=${!!this.contentError}
            @resource-selected=${this.handleResourceSelected}
          ></div>
          <div class="folder-pane-status"></div>
        </folder-pane-provider>
      `:de`
      <folder-pane-provider
        .rootResource=${this.subject}
        .displayedResource=${this.displayedResource}
        .activeContainer=${this.getActiveContainer()}
        .view=${this.containerView}
        .searchQuery=${this.searchQuery}
        .canCreate=${this.canCreate}
        .sidebarCollapsed=${this.sidebarCollapsed}
      >
        ${this.renderStorageHeader()}
        <div
          class="folder-pane-main-content"
          data-sidebar-collapsed=${String(this.sidebarCollapsed)}
          style=${`--folder-pane-sidebar-width: ${this.sidebarWidth}px`}
          @resource-selected=${this.handleResourceSelected}
          @folder-pane-resource-error=${this.handleFolderPaneResourceError}
          @folder-pane-toggle-sidebar=${this.handleSidebarToggle}
        >
          <folder-pane-sidebar
            ?inert=${this.sidebarCollapsed}
            aria-hidden=${this.sidebarCollapsed?"true":"false"}
            .store=${this.store}
            .resourceLogic=${this.resourceLogic}
            .subject=${this.subject}
            .selectedResource=${this.displayedResource}
          ></folder-pane-sidebar>
          <div
            class="folder-pane-sidebar-resizer"
            data-resizing=${String(!!this.sidebarDrag)}
          >
            <div
              class="folder-pane-sidebar-resize-handle"
              role="separator"
              aria-orientation="vertical"
              aria-label="Resize navigation sidebar"
              aria-valuemin=${pe}
              aria-valuemax=${this.sidebarMaximumWidth}
              aria-valuenow=${this.sidebarWidth}
              tabindex=${this.sidebarCollapsed?-1:0}
              ?hidden=${this.sidebarCollapsed}
              ?inert=${this.sidebarCollapsed}
              @pointerdown=${this.handleSidebarPointerDown}
              @pointermove=${this.handleSidebarPointerMove}
              @pointerup=${this.handleSidebarPointerEnd}
              @pointercancel=${this.handleSidebarPointerEnd}
              @lostpointercapture=${this.handleSidebarPointerEnd}
              @keydown=${this.handleSidebarResizeKey}
            ></div>
            <button
              type="button"
              class="folder-pane-sidebar-toggle"
              aria-label=${this.sidebarCollapsed?"Expand navigation":"Collapse navigation"}
              aria-expanded=${String(!this.sidebarCollapsed)}
              @click=${this.handleSidebarToggle}
            >
              <icon-lucide-chevron-left
                class=${`folder-pane-sidebar-toggle-icon${this.sidebarCollapsed?" folder-pane-sidebar-toggle-icon-collapsed":""}`}
                aria-hidden="true"
              ></icon-lucide-chevron-left>
            </button>
          </div>
          <div class="folder-pane-content-column">
            ${this.renderContentError()}
            <folder-pane-content ?hidden=${!!this.contentError}></folder-pane-content>
            <div class="folder-pane-status"></div>
          </div>
        </div>
      </folder-pane-provider>
    `}renderStorageHeader(){return de`
      <folder-pane-storage-header
        .subject=${this.subject}
        .breadcrumbRoot=${this.standaloneBreadcrumbRoot}
        .selectedResource=${this.getActiveContainer()}
        .browserContext=${this.browserContext}
        .paneList=${this.browserContext?.session.paneRegistry.list??[]}
        .view=${this.containerView}
        .searchQuery=${this.searchQuery}
        .canCreate=${this.canCreate}
        @folder-pane-select-home=${this.handleSelectHome}
        @folder-pane-select-resource=${this.handleSelectBreadcrumbResource}
        @folder-pane-change-view=${this.handleContainerViewChange}
        @folder-pane-search=${this.handleSearch}
      ></folder-pane-storage-header>
    `}renderContentError(){return this.contentError?de`
        <div class="folder-pane-resource-error" role="status">
          <solid-ui-error-state
            .title=${this.contentError.title}
            .message=${this.contentError.message}
            @close=${this.clearContentError}
          >
            <button type="button" @click=${this.retryContent}>Retry</button>
          </solid-ui-error-state>
        </div>
      `:Ge}};customElements.get("folder-pane-view")||customElements.define("folder-pane-view",J);export{J as FolderPaneView};
