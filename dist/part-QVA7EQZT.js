import"./part-4YPVF57R.js";import"./part-CAD37D37.js";import"./part-65PJWB3H.js";import"./part-KC4ZRX3A.js";import"./part-NFK5BLIA.js";import{a as K,b as _e,c as Ne,d as Ae,e as ee,f as q,g as Ee,h as R,j as U,k as H,l as M,m as F,n as Y,o as L,p as Pe}from"./part-44I6H3VX.js";import"./part-4RHLBPWQ.js";import"./part-L3FKRLOF.js";import"./part-VUVQLHGC.js";import"./part-DPEX7Y3K.js";import"./part-ZUZ5SMMO.js";import"./part-OCHWNP3T.js";import"./part-2REH4E2C.js";import"./part-TKTGPRZR.js";import"./part-WZ5ZOODI.js";import"./part-H5FMENGX.js";import"./part-EPAYPZAY.js";import"./part-SX7PWH6P.js";import"./part-AHAYGN5G.js";import"./part-WNJHMUHE.js";import"./part-HZXSH6RP.js";import{a as p}from"./part-V7XQEHON.js";import"./part-FI5O6ZH7.js";import"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import"./part-VHSBPZHI.js";import{b as W}from"./part-GPLAS2FA.js";import{A as ye,D as ve}from"./part-SVX36NT2.js";import{Z as A,_ as T,ca as $}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as y,e as Se,g as O}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";function we(){return y`
    <span class="loading-spinner" aria-hidden="true"></span>
    <span class="sr-only">Saving...</span>
  `}K(new URL("panes-solid-panes-src-components-profile-heading-editor-ui-dialog.css",W));var ta=y`<icon-lucide-x aria-hidden="true" focusable="false" style="width:12px;height:12px;color:#667085"></icon-lucide-x>`,g=null,$e=new WeakMap;function ia(e){return e instanceof HTMLElement?e:e instanceof Node?e.parentElement:null}function oa(e){return typeof e.composedPath=="function"?e.composedPath():e.target?[e.target]:[]}function na(e){let a=oa(e),t=g?.querySelector("#modal-desc");if(t&&a.includes(t)||g&&a.includes(g))return!0;let i=ia(e.target);return!i||!g||!g.contains(i)?!1:!!i.closest("#modal-desc")}function te(e){let a=$e.get(e);return a||(a={count:0,previousHtmlOverflow:e.documentElement.style.overflow,previousBodyOverflow:e.body.style.overflow,removeScrollGuard:null},$e.set(e,a)),a}function ra(e){let a=te(e);if(a.removeScrollGuard)return;let t=i=>{na(i)||i.preventDefault()};e.addEventListener("wheel",t,{capture:!0,passive:!1}),e.addEventListener("touchmove",t,{capture:!0,passive:!1}),a.removeScrollGuard=()=>{e.removeEventListener("wheel",t,!0),e.removeEventListener("touchmove",t,!0),a.removeScrollGuard=null}}function la(e){let a=te(e);a.count===0&&(a.previousHtmlOverflow=e.documentElement.style.overflow,a.previousBodyOverflow=e.body.style.overflow,e.documentElement.style.overflow="hidden",e.body.style.overflow="hidden",ra(e)),a.count+=1}function sa(e){let a=te(e);a.count!==0&&(a.count-=1,!(a.count>0)&&(e.documentElement.style.overflow=a.previousHtmlOverflow,e.body.style.overflow=a.previousBodyOverflow,a.removeScrollGuard?.(),a.removeScrollGuard=null))}function da(e){return e.body}function ca(e){return e?.tagName==="SOLID-UI-BUTTON"}function Ie(e,a){e&&(e.disabled=a,e.toggleAttribute("disabled",a))}function ua(e,a){if(e){if(ca(e)){e.label=a,e.setAttribute("label",a),e.textContent=a;return}e.textContent=a}}function Le(e){return e.querySelector('#modal-buttons [data-dialog-primary="true"]')}function Me(e){return e.querySelector('#modal-buttons [data-cancel="true"]')}function Be(e){let a=da(e);return g&&e.body.contains(g)?(g.parentElement!==a&&a.appendChild(g),g):(g=null,g=e.createElement("dialog"),g.id="profile-modal",g.setAttribute("aria-modal","true"),g.setAttribute("aria-labelledby","modal-title"),g.setAttribute("aria-describedby","modal-desc"),g.innerHTML=`
    <div class="modal">
      <div class="modal-header flex-row align-center justify-between">
        <h2 id="modal-title"></h2>
        <div id="modal-header-action" class="flex-row align-center"></div>
      </div>
      <div id="modal-desc"></div>
      <section id="modal-error" class="modal__error-section" aria-live="assertive" aria-atomic="true" aria-hidden="true" role="alert" tabindex="-1" hidden></section>
      <div id="modal-buttons" class="flex-row align-center justify-end"></div>
      <div id="modal-saving-overlay" hidden></div>
    </div>
  `,a.appendChild(g),g)}function j(e){return{dialog:e,title:e.querySelector("#modal-title"),headerAction:e.querySelector("#modal-header-action"),description:e.querySelector("#modal-desc"),error:e.querySelector("#modal-error"),buttons:e.querySelector("#modal-buttons"),savingOverlay:e.querySelector("#modal-saving-overlay")}}function Oe(e){let a="modal-desc",t=e.error.hidden||!e.error.textContent?.trim()?a:`${a} modal-error`;e.dialog.setAttribute("aria-describedby",t)}function ie(e){e.error.textContent="",e.error.setAttribute("aria-hidden","true"),e.error.hidden=!0,Oe(e)}function xe(e,a,t){e.error.textContent=Pe(a,t),e.error.setAttribute("aria-hidden","false"),e.error.hidden=!1,Oe(e)}function ma(e){if(la(e.ownerDocument),typeof e.showModal=="function")try{e.open||e.showModal();return}catch{}e.setAttribute("open","")}function pa(e){try{if(typeof e.close=="function"&&e.open){e.close();return}e.removeAttribute("open")}finally{sa(e.ownerDocument)}}function fa(e){return!!e.querySelector("[data-layout='mobile']")}function ha(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")==="true"||e.getAttribute("hidden")!==null||e.tabIndex<0)}function Te(e){let a=e.querySelectorAll(['input:not([type="hidden"]):not([disabled])',"textarea:not([disabled])","select:not([disabled])","solid-ui-select:not([disabled])","solid-ui-combobox:not([disabled])",'[contenteditable="true"]',"button:not([disabled])","solid-ui-button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","));for(let t of a)if(t instanceof HTMLElement&&ha(t))return t;return null}function ga(e,a,t){if(fa(e.ownerDocument)){e.tabIndex=-1,e.focus();return}let i=Te(a);if(i){i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&i.select();return}let o=Te(t);o&&o.focus()}function Ca(e){let a=new FormData(e),t={};return a.forEach((i,o)=>{t[o]=String(i)}),t}function ba({title:e,message:a,buttons:t,headerAction:i,dom:o}){let l=Be(o),n=j(l);return ma(l),n.title.textContent=e||"",n.description.innerHTML="",typeof a=="string"?n.description.textContent=a:a&&n.description.appendChild(a),n.buttons.innerHTML="",ie(n),new Promise(c=>{let u=r=>{ya(r),c(r)},s=()=>{let r=Me(l);if(r){r.click();return}u(!1)};l.oncancel=r=>{r.preventDefault(),s()},n.headerAction.innerHTML="";let d=i||{type:"close"};if(d.type==="close"){let r=o.createElement("solid-ui-button");r.setAttribute("variant","ghost"),r.setAttribute("aria-label","Close dialog");let f=o.createElement("span");f.setAttribute("slot","icon"),O(ta,f),r.appendChild(f),r.onclick=()=>s(),n.headerAction.appendChild(r)}else if(d.type==="button"){let r=o.createElement("solid-ui-button");r.setAttribute("variant","tertiary"),r.className=d.className||"",r.textContent=d.label,r.setAttribute("label",d.label),r.setAttribute("aria-label",d.ariaLabel||d.label),r.onclick=async()=>{d.onClick&&await d.onClick()},n.headerAction.appendChild(r)}t.forEach(r=>{let f=o.createElement("solid-ui-button");f.setAttribute("label",r.label),f.setAttribute("variant",r.primary?"primary":"secondary"),f.textContent=r.label,r.primary&&f.setAttribute("data-dialog-primary","true"),r.cancel&&f.setAttribute("data-cancel","true"),f.addEventListener("click",async()=>{r.beforeClose&&!await r.beforeClose()||u(r.value)}),n.buttons.appendChild(f)}),(o.defaultView?.requestAnimationFrame?r=>o.defaultView?.requestAnimationFrame(()=>r()):r=>setTimeout(r,0))(()=>{ga(l,n.description,n.buttons)})})}function ya(e){if(g){let a=j(g);ie(a),pa(g),g.oncancel=null;let t=g.querySelector("#modal-header-action button");t&&(t.onclick=null)}}function ae(e,a,t){let i=j(e),o=Le(e),l=Me(e);if(e.classList.toggle("modal--saving",t),e.setAttribute("aria-busy",String(t)),i.description.toggleAttribute("inert",t),t){let n=e.ownerDocument.activeElement;n&&e.contains(n)&&n.blur()}o&&(Ie(o,t),o.setAttribute("aria-busy",String(t)),ua(o,a)),l&&Ie(l,t),i.savingOverlay.hidden=!t,t?O(y`
      <div class="modal__saving-indicator inline-flex-row justify-center" aria-live="polite" aria-label="Saving changes">
        ${we()}
      </div>
    `,i.savingOverlay):O(y``,i.savingOverlay)}function Fe(e){let a=e.submitLabel||"Save Changes",t=e.cancelLabel||"Cancel",i=Be(e.dom),o=j(i),l=d=>d.replace(/^\s*edit\s+/i,"").replace(/^\s*add\s+/i,"").replace(/^\s*create\s+/i,"").trim();(()=>{let d=l(e.title);if(!d)return;let m=Array.from(e.form.querySelectorAll(['input:not([type="hidden"])',"textarea","select"].join(",")));if(m.length!==1)return;let[r]=m,f=r.hasAttribute("aria-label")||r.hasAttribute("aria-labelledby"),b=!!r.closest("label");f||b||r.getAttribute("type")==="hidden"||r.getAttribute("aria-label")||r.setAttribute("aria-label",d)})();let c=d=>{d.preventDefault(),Le(i)?.click()};e.form.addEventListener("submit",c);let u=ba({title:e.title,message:e.form,headerAction:e.headerAction,buttons:[{label:t,value:null,cancel:!0},{label:a,value:"save",primary:!0,beforeClose:async()=>{if(ie(o),e.shouldCloseWithoutSave&&await e.shouldCloseWithoutSave())return!0;if(e.validate){let d=await e.validate();if(d)return xe(o,d),!1}if(!e.onSave)return!0;try{return ae(i,a,!0),await e.onSave(),!0}catch(d){ae(i,a,!1);let m=e.formatSaveError?e.formatSaveError(d):void 0;return xe(o,d,m),!1}}}],dom:e.dom}),s=e.dom.defaultView?.requestAnimationFrame?d=>e.dom.defaultView?.requestAnimationFrame(()=>d()):d=>setTimeout(d,0);return e.onOpen&&s(e.onOpen),o.buttons.hidden=!!e.hideFooterButtons,u.then(d=>d!=="save"?null:Ca(e.form)).finally(()=>{o.buttons.hidden=!1,ae(i,a,!1),e.form.removeEventListener("submit",c)})}var va=y`<icon-lucide-circle-user-round aria-hidden="true" focusable="false" style="width:48px;height:48px;color:#D9E1F2"></icon-lucide-circle-user-round>`,Sa=e=>{let a=e.currentTarget,t=a?.parentElement;!a||!t||(a.hidden=!0,t.classList.add("profile__image-frame--fallback"))},De=(e,a)=>y`
  <div class=${e?"profile__image-frame":"profile__image-frame profile__image-frame--fallback"}>
    ${e?y`
          <img
            class="profile__hero"
            src=${e}
            alt=${a||""}
            width="140"
            height="140"
            loading="eager"
            @error=${Sa}
          />
        `:Se}
    <div class="profile__hero-alt" role="img" aria-label=${a||""}>
      <span class="profile__hero-icon">${va}</span>
    </div>
  </div>
`;var oe=0;function J(e){let a=Date.now(),t=a>oe?a:oe+1;return oe=t,T(`${e.uri}#id${t}`)}function _a(e){let a=(e||"").trim();if(!a)return{};let[t,i]=a.split("/").map(n=>n.trim());return{subjectPronoun:t||void 0,objectPronoun:i||void 0}}function ke(e,a,t,i){let o=i.value.startsWith("tel:")?i.value:`tel:${i.value}`,l=T(o),n=[A(e,p.vcard("hasTelephone"),t,a),A(t,p.vcard("value"),l,a)];return i.type&&n.push(A(t,p.rdf("type"),p.vcard(i.type),a)),n}function Re(e,a,t,i){let o=i.value.startsWith("mailto:")?i.value:`mailto:${i.value}`,l=T(o),n=[A(e,p.vcard("hasEmail"),t,a),A(t,p.vcard("value"),l,a)];return i.type&&n.push(A(t,p.rdf("type"),p.vcard(i.type),a)),n}function Ue(e,a,t,i){let o=[A(e,p.vcard("hasAddress"),t,a)];return i.type&&o.push(A(t,p.rdf("type"),p.vcard(i.type),a)),i.streetAddress&&o.push(A(t,p.vcard("street-address"),$(i.streetAddress),a)),i.locality&&o.push(A(t,p.vcard("locality"),$(i.locality),a)),i.region&&o.push(A(t,p.vcard("region"),$(i.region),a)),i.postalCode&&o.push(A(t,p.vcard("postal-code"),$(i.postalCode),a)),i.countryName&&o.push(A(t,p.vcard("country-name"),$(i.countryName),a)),o}function D(e,a){return e.find(t=>!!t.entryNode&&!!L(a,t.entryNode))}function ne(e){return e.find(a=>!a.entryNode)}async function Na(e,a,t,i){let o=a.doc(),l=e.each(a,p.vcard("hasTelephone"),null,o),n=[],c=[],u=D(t.remove,l),s=D(t.update,l),d=ne(t.create)||t.create[0];if(u?.entryNode){let r=L(l,u.entryNode);if(r){let b=Y(e,a,p.vcard("hasTelephone"),o).linkStatements.find(_=>_.object?.value===r.value);b&&n.push(b),n.push(...M(e,r,o))}}if(s){let r=L(l,s.entryNode);r&&(n.push(...M(e,r,o)),c.push(...ke(a,o,r,s)))}d&&c.push(...ke(a,o,J(o),d));let m=await U(e,o,c,void 0,{documentTextCache:i});await H(e,o,n,c,{unsupportedMessage:R,failureMessage:"Failed to save heading updates",documentTextCache:i,useDavFallback:!1,usePutFallback:m,forcePut:m})}async function Aa(e,a,t,i){let o=a.doc(),l=e.each(a,p.vcard("hasEmail"),null,o),n=[],c=[],u=D(t.remove,l),s=D(t.update,l),d=ne(t.create)||t.create[0];if(u?.entryNode){let r=L(l,u.entryNode);if(r){let b=Y(e,a,p.vcard("hasEmail"),o).linkStatements.find(_=>_.object?.value===r.value);b&&n.push(b),n.push(...M(e,r,o))}}if(s){let r=L(l,s.entryNode);r&&(n.push(...M(e,r,o)),c.push(...Re(a,o,r,s)))}d&&c.push(...Re(a,o,J(o),d));let m=await U(e,o,c,void 0,{documentTextCache:i});await H(e,o,n,c,{unsupportedMessage:R,failureMessage:"Failed to save heading updates",documentTextCache:i,useDavFallback:!1,usePutFallback:m,forcePut:m})}async function Ea(e,a,t,i){let o=a.doc(),l=e.each(a,p.vcard("hasAddress"),null,o),n=[],c=[],u=D(t.remove,l),s=D(t.update,l),d=ne(t.create)||t.create[0];if(u?.entryNode){let r=L(l,u.entryNode);if(r){let b=Y(e,a,p.vcard("hasAddress"),o).linkStatements.find(_=>_.object?.value===r.value);b&&n.push(b),n.push(...M(e,r,o))}}if(s){let r=L(l,s.entryNode);r&&(n.push(...M(e,r,o)),c.push(...Ue(a,o,r,s)))}d&&c.push(...Ue(a,o,J(o),d));let m=await U(e,o,c,void 0,{documentTextCache:i});await H(e,o,n,c,{unsupportedMessage:R,failureMessage:"Failed to save heading updates",documentTextCache:i,useDavFallback:!1,usePutFallback:m,forcePut:m})}async function Pa(e,a,t,i){let o=a.doc(),l=[],n=[],c=(I,N)=>{let h=(N||"").trim(),E=h?$(h):null;F(e,a,I,o,l,n,E)},u=I=>{let N=(I||"").trim(),h=N?N.startsWith("http://")||N.startsWith("https://")?T(N):$(N):null;F(e,a,p.vcard("hasPhoto"),o,l,n,h)},s=I=>{let{subjectPronoun:N,objectPronoun:h}=_a(I);F(e,a,p.solid("preferredSubjectPronoun"),o,l,n,N?$(N):null),F(e,a,p.solid("preferredObjectPronoun"),o,l,n,h?$(h):null),F(e,a,p.solid("preferredRelativePronoun"),o,l,n,null)},d=(I,N=!1)=>{let h=N?{name:"",nickname:"",pronouns:"",dateOfBirth:"",imageSrc:""}:I;c(p.vcard("fn"),h.name),c(p.foaf("nick"),h.nickname),c(p.vcard("nickname"),h.nickname),c(p.vcard("bday"),h.dateOfBirth),s(h.pronouns),u(h.imageSrc)},m=t.remove[0],r=t.update[0],f=t.create[0],b=r||f||m;b&&d(b,!!(m&&!r&&!f));let _=await U(e,o,n,void 0,{documentTextCache:i});await H(e,o,l,n,{unsupportedMessage:R,failureMessage:"Failed to save heading updates",documentTextCache:i,useDavFallback:!1,usePutFallback:_,forcePut:_})}async function He(e,a,t){try{let i=new Map;await Pa(e,a,t.basicOps,i),await Na(e,a,t.phoneOps,i),await Aa(e,a,t.emailOps,i),await Ea(e,a,t.addressOps,i)}catch(i){let o=i instanceof Error?i:new Error(String(i));console.error(Ee,o);let l=new Error(q);throw Object.defineProperty(l,"cause",{value:o}),l}}var wa=[{iso2:"EG",dialCode:"+20",name:"Egypt"},{iso2:"ZA",dialCode:"+27",name:"South Africa"},{iso2:"GR",dialCode:"+30",name:"Greece"},{iso2:"NL",dialCode:"+31",name:"Netherlands"},{iso2:"BE",dialCode:"+32",name:"Belgium"},{iso2:"FR",dialCode:"+33",name:"France"},{iso2:"ES",dialCode:"+34",name:"Spain"},{iso2:"HU",dialCode:"+36",name:"Hungary"},{iso2:"IT",dialCode:"+39",name:"Italy"},{iso2:"RO",dialCode:"+40",name:"Romania"},{iso2:"CH",dialCode:"+41",name:"Switzerland"},{iso2:"AT",dialCode:"+43",name:"Austria"},{iso2:"GG",dialCode:"+44",name:"Guernsey"},{iso2:"IM",dialCode:"+44",name:"Isle of Man"},{iso2:"JE",dialCode:"+44",name:"Jersey"},{iso2:"GB",dialCode:"+44",name:"United Kingdom"},{iso2:"DK",dialCode:"+45",name:"Denmark"},{iso2:"SE",dialCode:"+46",name:"Sweden"},{iso2:"BV",dialCode:"+47",name:"Bouvet Island"},{iso2:"NO",dialCode:"+47",name:"Norway"},{iso2:"PL",dialCode:"+48",name:"Poland"},{iso2:"DE",dialCode:"+49",name:"Germany"},{iso2:"PE",dialCode:"+51",name:"Peru"},{iso2:"MX",dialCode:"+52",name:"Mexico"},{iso2:"CU",dialCode:"+53",name:"Cuba"},{iso2:"AR",dialCode:"+54",name:"Argentina"},{iso2:"BR",dialCode:"+55",name:"Brazil"},{iso2:"CL",dialCode:"+56",name:"Chile"},{iso2:"CO",dialCode:"+57",name:"Colombia"},{iso2:"VE",dialCode:"+58",name:"Venezuela"},{iso2:"MY",dialCode:"+60",name:"Malaysia"},{iso2:"AU",dialCode:"+61",name:"Australia"},{iso2:"CX",dialCode:"+61",name:"Christmas Island"},{iso2:"CC",dialCode:"+61",name:"Cocos (Keeling) Islands"},{iso2:"ID",dialCode:"+62",name:"Indonesia"},{iso2:"PH",dialCode:"+63",name:"Philippines"},{iso2:"NZ",dialCode:"+64",name:"New Zealand"},{iso2:"PN",dialCode:"+64",name:"Pitcairn Islands"},{iso2:"SG",dialCode:"+65",name:"Singapore"},{iso2:"TH",dialCode:"+66",name:"Thailand"},{iso2:"RU",dialCode:"+73",name:"Russia"},{iso2:"KZ",dialCode:"+76",name:"Kazakhstan"},{iso2:"JP",dialCode:"+81",name:"Japan"},{iso2:"KR",dialCode:"+82",name:"South Korea"},{iso2:"VN",dialCode:"+84",name:"Vietnam"},{iso2:"CN",dialCode:"+86",name:"China"},{iso2:"TR",dialCode:"+90",name:"Turkiye"},{iso2:"IN",dialCode:"+91",name:"India"},{iso2:"PK",dialCode:"+92",name:"Pakistan"},{iso2:"AF",dialCode:"+93",name:"Afghanistan"},{iso2:"LK",dialCode:"+94",name:"Sri Lanka"},{iso2:"MM",dialCode:"+95",name:"Myanmar"},{iso2:"IR",dialCode:"+98",name:"Iran"},{iso2:"SS",dialCode:"+211",name:"South Sudan"},{iso2:"MA",dialCode:"+212",name:"Morocco"},{iso2:"DZ",dialCode:"+213",name:"Algeria"},{iso2:"TN",dialCode:"+216",name:"Tunisia"},{iso2:"LY",dialCode:"+218",name:"Libya"},{iso2:"GM",dialCode:"+220",name:"Gambia"},{iso2:"SN",dialCode:"+221",name:"Senegal"},{iso2:"MR",dialCode:"+222",name:"Mauritania"},{iso2:"ML",dialCode:"+223",name:"Mali"},{iso2:"GN",dialCode:"+224",name:"Guinea"},{iso2:"CI",dialCode:"+225",name:"Ivory Coast"},{iso2:"BF",dialCode:"+226",name:"Burkina Faso"},{iso2:"NE",dialCode:"+227",name:"Niger"},{iso2:"TG",dialCode:"+228",name:"Togo"},{iso2:"BJ",dialCode:"+229",name:"Benin"},{iso2:"MU",dialCode:"+230",name:"Mauritius"},{iso2:"LR",dialCode:"+231",name:"Liberia"},{iso2:"SL",dialCode:"+232",name:"Sierra Leone"},{iso2:"GH",dialCode:"+233",name:"Ghana"},{iso2:"NG",dialCode:"+234",name:"Nigeria"},{iso2:"TD",dialCode:"+235",name:"Chad"},{iso2:"CF",dialCode:"+236",name:"Central African Republic"},{iso2:"CM",dialCode:"+237",name:"Cameroon"},{iso2:"CV",dialCode:"+238",name:"Cape Verde"},{iso2:"ST",dialCode:"+239",name:"Sao Tome and Principe"},{iso2:"GQ",dialCode:"+240",name:"Equatorial Guinea"},{iso2:"GA",dialCode:"+241",name:"Gabon"},{iso2:"CG",dialCode:"+242",name:"Congo"},{iso2:"CD",dialCode:"+243",name:"DR Congo"},{iso2:"AO",dialCode:"+244",name:"Angola"},{iso2:"GW",dialCode:"+245",name:"Guinea-Bissau"},{iso2:"IO",dialCode:"+246",name:"British Indian Ocean Territory"},{iso2:"SC",dialCode:"+248",name:"Seychelles"},{iso2:"SD",dialCode:"+249",name:"Sudan"},{iso2:"RW",dialCode:"+250",name:"Rwanda"},{iso2:"ET",dialCode:"+251",name:"Ethiopia"},{iso2:"SO",dialCode:"+252",name:"Somalia"},{iso2:"DJ",dialCode:"+253",name:"Djibouti"},{iso2:"KE",dialCode:"+254",name:"Kenya"},{iso2:"TZ",dialCode:"+255",name:"Tanzania"},{iso2:"UG",dialCode:"+256",name:"Uganda"},{iso2:"BI",dialCode:"+257",name:"Burundi"},{iso2:"MZ",dialCode:"+258",name:"Mozambique"},{iso2:"ZM",dialCode:"+260",name:"Zambia"},{iso2:"MG",dialCode:"+261",name:"Madagascar"},{iso2:"TF",dialCode:"+262",name:"French Southern and Antarctic Lands"},{iso2:"YT",dialCode:"+262",name:"Mayotte"},{iso2:"RE",dialCode:"+262",name:"Reunion"},{iso2:"ZW",dialCode:"+263",name:"Zimbabwe"},{iso2:"NA",dialCode:"+264",name:"Namibia"},{iso2:"MW",dialCode:"+265",name:"Malawi"},{iso2:"LS",dialCode:"+266",name:"Lesotho"},{iso2:"BW",dialCode:"+267",name:"Botswana"},{iso2:"SZ",dialCode:"+268",name:"Eswatini"},{iso2:"UM",dialCode:"+268",name:"United States Minor Outlying Islands"},{iso2:"KM",dialCode:"+269",name:"Comoros"},{iso2:"SH",dialCode:"+290",name:"Saint Helena, Ascension and Tristan da Cunha"},{iso2:"ER",dialCode:"+291",name:"Eritrea"},{iso2:"AW",dialCode:"+297",name:"Aruba"},{iso2:"FO",dialCode:"+298",name:"Faroe Islands"},{iso2:"GL",dialCode:"+299",name:"Greenland"},{iso2:"GI",dialCode:"+350",name:"Gibraltar"},{iso2:"PT",dialCode:"+351",name:"Portugal"},{iso2:"LU",dialCode:"+352",name:"Luxembourg"},{iso2:"IE",dialCode:"+353",name:"Ireland"},{iso2:"IS",dialCode:"+354",name:"Iceland"},{iso2:"AL",dialCode:"+355",name:"Albania"},{iso2:"MT",dialCode:"+356",name:"Malta"},{iso2:"CY",dialCode:"+357",name:"Cyprus"},{iso2:"FI",dialCode:"+358",name:"Finland"},{iso2:"BG",dialCode:"+359",name:"Bulgaria"},{iso2:"LT",dialCode:"+370",name:"Lithuania"},{iso2:"LV",dialCode:"+371",name:"Latvia"},{iso2:"EE",dialCode:"+372",name:"Estonia"},{iso2:"MD",dialCode:"+373",name:"Moldova"},{iso2:"AM",dialCode:"+374",name:"Armenia"},{iso2:"BY",dialCode:"+375",name:"Belarus"},{iso2:"AD",dialCode:"+376",name:"Andorra"},{iso2:"MC",dialCode:"+377",name:"Monaco"},{iso2:"SM",dialCode:"+378",name:"San Marino"},{iso2:"UA",dialCode:"+380",name:"Ukraine"},{iso2:"RS",dialCode:"+381",name:"Serbia"},{iso2:"ME",dialCode:"+382",name:"Montenegro"},{iso2:"XK",dialCode:"+383",name:"Kosovo"},{iso2:"HR",dialCode:"+385",name:"Croatia"},{iso2:"SI",dialCode:"+386",name:"Slovenia"},{iso2:"BA",dialCode:"+387",name:"Bosnia and Herzegovina"},{iso2:"MK",dialCode:"+389",name:"North Macedonia"},{iso2:"CZ",dialCode:"+420",name:"Czechia"},{iso2:"SK",dialCode:"+421",name:"Slovakia"},{iso2:"LI",dialCode:"+423",name:"Liechtenstein"},{iso2:"FK",dialCode:"+500",name:"Falkland Islands"},{iso2:"GS",dialCode:"+500",name:"South Georgia"},{iso2:"BZ",dialCode:"+501",name:"Belize"},{iso2:"GT",dialCode:"+502",name:"Guatemala"},{iso2:"SV",dialCode:"+503",name:"El Salvador"},{iso2:"HN",dialCode:"+504",name:"Honduras"},{iso2:"NI",dialCode:"+505",name:"Nicaragua"},{iso2:"CR",dialCode:"+506",name:"Costa Rica"},{iso2:"PA",dialCode:"+507",name:"Panama"},{iso2:"PM",dialCode:"+508",name:"Saint Pierre and Miquelon"},{iso2:"HT",dialCode:"+509",name:"Haiti"},{iso2:"GP",dialCode:"+590",name:"Guadeloupe"},{iso2:"BL",dialCode:"+590",name:"Saint Barthelemy"},{iso2:"MF",dialCode:"+590",name:"Saint Martin"},{iso2:"BO",dialCode:"+591",name:"Bolivia"},{iso2:"GY",dialCode:"+592",name:"Guyana"},{iso2:"EC",dialCode:"+593",name:"Ecuador"},{iso2:"GF",dialCode:"+594",name:"French Guiana"},{iso2:"PY",dialCode:"+595",name:"Paraguay"},{iso2:"MQ",dialCode:"+596",name:"Martinique"},{iso2:"SR",dialCode:"+597",name:"Suriname"},{iso2:"UY",dialCode:"+598",name:"Uruguay"},{iso2:"BQ",dialCode:"+599",name:"Caribbean Netherlands"},{iso2:"CW",dialCode:"+599",name:"Curacao"},{iso2:"TL",dialCode:"+670",name:"Timor-Leste"},{iso2:"NF",dialCode:"+672",name:"Norfolk Island"},{iso2:"BN",dialCode:"+673",name:"Brunei"},{iso2:"NR",dialCode:"+674",name:"Nauru"},{iso2:"PG",dialCode:"+675",name:"Papua New Guinea"},{iso2:"TO",dialCode:"+676",name:"Tonga"},{iso2:"SB",dialCode:"+677",name:"Solomon Islands"},{iso2:"VU",dialCode:"+678",name:"Vanuatu"},{iso2:"FJ",dialCode:"+679",name:"Fiji"},{iso2:"PW",dialCode:"+680",name:"Palau"},{iso2:"WF",dialCode:"+681",name:"Wallis and Futuna"},{iso2:"CK",dialCode:"+682",name:"Cook Islands"},{iso2:"NU",dialCode:"+683",name:"Niue"},{iso2:"WS",dialCode:"+685",name:"Samoa"},{iso2:"KI",dialCode:"+686",name:"Kiribati"},{iso2:"NC",dialCode:"+687",name:"New Caledonia"},{iso2:"TV",dialCode:"+688",name:"Tuvalu"},{iso2:"PF",dialCode:"+689",name:"French Polynesia"},{iso2:"TK",dialCode:"+690",name:"Tokelau"},{iso2:"FM",dialCode:"+691",name:"Micronesia"},{iso2:"MH",dialCode:"+692",name:"Marshall Islands"},{iso2:"KP",dialCode:"+850",name:"North Korea"},{iso2:"HK",dialCode:"+852",name:"Hong Kong"},{iso2:"MO",dialCode:"+853",name:"Macau"},{iso2:"KH",dialCode:"+855",name:"Cambodia"},{iso2:"LA",dialCode:"+856",name:"Laos"},{iso2:"BD",dialCode:"+880",name:"Bangladesh"},{iso2:"TW",dialCode:"+886",name:"Taiwan"},{iso2:"MV",dialCode:"+960",name:"Maldives"},{iso2:"LB",dialCode:"+961",name:"Lebanon"},{iso2:"JO",dialCode:"+962",name:"Jordan"},{iso2:"SY",dialCode:"+963",name:"Syria"},{iso2:"IQ",dialCode:"+964",name:"Iraq"},{iso2:"KW",dialCode:"+965",name:"Kuwait"},{iso2:"SA",dialCode:"+966",name:"Saudi Arabia"},{iso2:"YE",dialCode:"+967",name:"Yemen"},{iso2:"OM",dialCode:"+968",name:"Oman"},{iso2:"PS",dialCode:"+970",name:"Palestine"},{iso2:"AE",dialCode:"+971",name:"United Arab Emirates"},{iso2:"IL",dialCode:"+972",name:"Israel"},{iso2:"BH",dialCode:"+973",name:"Bahrain"},{iso2:"QA",dialCode:"+974",name:"Qatar"},{iso2:"BT",dialCode:"+975",name:"Bhutan"},{iso2:"MN",dialCode:"+976",name:"Mongolia"},{iso2:"NP",dialCode:"+977",name:"Nepal"},{iso2:"TJ",dialCode:"+992",name:"Tajikistan"},{iso2:"TM",dialCode:"+993",name:"Turkmenistan"},{iso2:"AZ",dialCode:"+994",name:"Azerbaijan"},{iso2:"GE",dialCode:"+995",name:"Georgia"},{iso2:"KG",dialCode:"+996",name:"Kyrgyzstan"},{iso2:"UZ",dialCode:"+998",name:"Uzbekistan"},{iso2:"US",dialCode:"+1201",name:"United States"},{iso2:"CA",dialCode:"+1204",name:"Canada"},{iso2:"BS",dialCode:"+1242",name:"Bahamas"},{iso2:"BB",dialCode:"+1246",name:"Barbados"},{iso2:"AI",dialCode:"+1264",name:"Anguilla"},{iso2:"AG",dialCode:"+1268",name:"Antigua and Barbuda"},{iso2:"VG",dialCode:"+1284",name:"British Virgin Islands"},{iso2:"VI",dialCode:"+1340",name:"United States Virgin Islands"},{iso2:"KY",dialCode:"+1345",name:"Cayman Islands"},{iso2:"BM",dialCode:"+1441",name:"Bermuda"},{iso2:"GD",dialCode:"+1473",name:"Grenada"},{iso2:"TC",dialCode:"+1649",name:"Turks and Caicos Islands"},{iso2:"MS",dialCode:"+1664",name:"Montserrat"},{iso2:"MP",dialCode:"+1670",name:"Northern Mariana Islands"},{iso2:"GU",dialCode:"+1671",name:"Guam"},{iso2:"AS",dialCode:"+1684",name:"American Samoa"},{iso2:"SX",dialCode:"+1721",name:"Sint Maarten"},{iso2:"LC",dialCode:"+1758",name:"Saint Lucia"},{iso2:"DM",dialCode:"+1767",name:"Dominica"},{iso2:"VC",dialCode:"+1784",name:"Saint Vincent and the Grenadines"},{iso2:"PR",dialCode:"+1787",name:"Puerto Rico"},{iso2:"DO",dialCode:"+1809",name:"Dominican Republic"},{iso2:"TT",dialCode:"+1868",name:"Trinidad and Tobago"},{iso2:"KN",dialCode:"+1869",name:"Saint Kitts and Nevis"},{iso2:"JM",dialCode:"+1876",name:"Jamaica"},{iso2:"SJ",dialCode:"+4779",name:"Svalbard and Jan Mayen"},{iso2:"AX",dialCode:"+35818",name:"Aland Islands"},{iso2:"EH",dialCode:"+2125288",name:"Western Sahara"},{iso2:"VA",dialCode:"+3906698",name:"Vatican City"}],$a=new Set(["AQ","AX","BL","BM","BQ","BV","CC","CK","CP","CW","CX","EH","FK","FO","GF","GG","GI","GL","GP","GS","GU","HK","HM","IM","IO","JE","KY","MF","MO","MP","MQ","MS","NC","NF","NU","PF","PM","PN","PR","RE","SH","SJ","TC","TF","TK","UM","VG","VI","WF","YT"]);function Ge(e){return/^\+1\d{3,}$/.test(e)?"+1":/^\+7\d+$/.test(e)?"+7":/^\+39\d{3,}$/.test(e)?"+39":/^\+358\d+$/.test(e)?"+358":/^\+47\d+$/.test(e)?"+47":/^\+212\d+$/.test(e)?"+212":e}var Ia=wa.filter(e=>!$a.has(e.iso2)).map(e=>({...e,dialCode:Ge(e.dialCode)})).filter((e,a,t)=>{let i=`${e.iso2}|${e.dialCode}`;return t.findIndex(o=>`${o.iso2}|${o.dialCode}`===i)===a}),xa=[...Ia].sort((e,a)=>{let t=Number.parseInt(e.dialCode.replace("+",""),10),i=Number.parseInt(a.dialCode.replace("+",""),10);return t!==i?t-i:e.name.localeCompare(a.name)}),Ta={"+1":"US","+7":"RU"},Ve=Array.from(xa.reduce((e,a)=>{if(!e.get(a.dialCode))return e.set(a.dialCode,a),e;let i=Ta[a.dialCode];return i&&a.iso2===i&&e.set(a.dialCode,a),e},new Map).values()),La=Array.from(new Set(Ve.map(e=>e.dialCode))).sort((e,a)=>a.length-e.length);function re(e){let a=e.trim();if(!a)return{dialCode:"",localNumber:""};if(!a.startsWith("+"))return{dialCode:"",localNumber:a};let t=La.find(n=>a.startsWith(n));if(!t)return{dialCode:"",localNumber:a};let i=Ge(t),o=a.slice(t.length),l=a.slice(i.length);return{dialCode:Ve.some(n=>n.dialCode===i)?i:"",localNumber:t.length>i.length?l:o}}function ze(e,a){let t=a.trim();return t?t.startsWith("+")?t:e?`${e}${t}`:t:""}function C(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let a=e.value;return typeof a=="string"?a:""}return""}function G(e){let a=C(e).trim();if(!a)return"";let i=a.replace(/^<|>$/g,"").split("#"),l=i[i.length-1].split("/");return l[l.length-1]}function S(e){return e.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim()}function V(e){return!!(e&&e.trim()!=="")}function le(e){let a=G(e).trim().toLowerCase();return a?a==="cell"||a==="mobile"?"Mobile":a==="home"?"Home":a==="work"||a==="office"?"Work":"":""}function se(e){let a=G(e).trim().toLowerCase();return a?a==="personal"||a==="home"?"Personal":a==="office"||a==="work"?"Office":"":""}function We(e){return e==="Personal"?"Home":e||""}function Ke(e){return e==="Mobile"?"Cell":e||""}function de(e,a,t){if(e[a]=t.trim(),e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function k(e,a){let t=e.filter(l=>l.status==="new"&&a(l)),i=e.filter(l=>l.status==="modified"&&a(l)),o=e.filter(l=>l.status==="deleted");return{create:t,update:i,remove:o}}function x(e,a,t,i){if(e[a]=t,!i(e)){e.status=e.entryNode?"deleted":"new";return}if(e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function ce(e){return S(e).replace(/\s+/g,"")}function qe(e){return S(e).replace(/[^0-9()\-\s.]/g,"")}function B(e){return S(e)}function ue(e){return S(e)}function me(e){let a=(e||"").trim();if(!a)return"";if(a.match(/^(\d{4})-(\d{2})-(\d{2})$/))return a;let i=a.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(i){let[,o,l,n]=i;return`${n}-${l}-${o}`}return""}var Z=new Map;function Ye(e){if(!e)return;let a=Z.get(e);a&&(Z.delete(e),a.startsWith("blob:")&&typeof URL.revokeObjectURL=="function"&&URL.revokeObjectURL(a))}var je={"image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff","application/pdf":"pdf","text/plain":"txt","text/html":"html","application/json":"json","application/octet-stream":"bin"},Ma=Object.fromEntries(Object.entries(je).map(([e,a])=>[a,e])),pe={extension:e=>je[e]||!1,lookup:e=>{let a=e.split(".").pop()?.toLowerCase()||"";return Ma[a]||!1}};function Ba(e){let a=e.doc().uri,t=a.lastIndexOf("/");return t>=0?a.slice(0,t+1):a}async function Je(e,a){if(!a||a.startsWith("blob:")||a.startsWith("data:"))return a;let t=Z.get(a);if(t)return t;let i=e.fetcher;if(!i?._fetch||typeof URL.createObjectURL!="function")return a;try{let o=await i._fetch(a);if(!o.ok)return a;let l=await o.blob(),n=URL.createObjectURL(l);return Z.set(a,n),n}catch{return a}}async function Ze(e,a,t){if(!e.fetcher)throw new Error("Store has no fetcher.");let i=t.type||pe.lookup(t.name)||"application/octet-stream";if(!i.startsWith("image/"))throw new Error("Selected file is not an image.");if(t.size>2*1024*1024)throw new Error("Selected image must be 2 MB or smaller.");let o=pe.extension(i)||"bin",l=encodeURIComponent(t.name||`image.${o}`);i!==pe.lookup(t.name||"")&&(l+=`_.${o}`);let n=Ba(a),c=`${n}${l}`;for(let s=0;e.holds(a,p.vcard("hasPhoto"),T(c));s++){let d=`image_${s}.${o}`;c=`${n}${d}`}try{let s=await t.arrayBuffer(),d=await e.fetcher.webOperation("PUT",c,{data:s,contentType:i});if(!d.ok)throw new Error(`Error uploading picture: ${d.status} ${d.statusText}`)}catch(s){throw new Error(`Error uploading picture: ${s}`)}let u=ve.currentUser();if(u)try{await ye.acl.setACLUserPublic(c,u,{public:["Read"]})}catch(s){console.error(`Error setting uploaded picture permissions: ${s}`)}return c}K(new URL("panes-solid-panes-src-components-profile-heading-editor-styles-EditDialogs.css",W));var fe=[{label:"Mobile",value:"Mobile"},{label:"Home",value:"Home"},{label:"Work",value:"Work"}],he=[{label:"Personal",value:"Personal"},{label:"Office",value:"Office"}],Oa=[{label:"He/Him",value:"He/Him"},{label:"She/Her",value:"She/Her"},{label:"They/Them",value:"They/Them"}];function Fa(e){return"value"in e}function Da(e){return"streetAddress"in e}function ka(e){return"name"in e}function Ce(e,a){return a.some(t=>t.value===e)?e:a[0]?.value||""}function Ra(e){return e==="phone"?fe:he}function z(e,a){return{...e,type:Ce(e.type||"",Ra(a))}}function v(e){return Fa(e)?V(e.value):Da(e)?[e.streetAddress,e.locality,e.region,e.postalCode,e.countryName].some(V):ka(e)?[e.name,e.nickname,e.imageSrc,e.location,e.pronouns,e.dateOfBirth].some(V):!1}function ge(e){let a=S(e||"").toLowerCase().replace(/\s+/g,"");return a?a==="he"||a==="he/him"?"He/Him":a==="she"||a==="she/her"?"She/Her":a==="they"||a==="they/them"?"They/Them":e||"":""}function Ua(e){let a={name:S(C(e.name)),nickname:S(C(e.nickname||"")),imageSrc:S(C(e.imageSrc||"")),location:S(C(e.location||"")),pronouns:ge(C(e.pronouns||"")),dateOfBirth:S(C(e.dateOfBirth||"")),entryNode:C(e.entryNode),status:C(e.entryNode)?"existing":"new"},t=e.primaryEmail,i=e.primaryPhone,o=e.primaryAddress,l=!se(t?.type),n=!le(i?.type),c=se(t?.type),u=le(i?.type),s={value:ce(C(t?.valueNode).replace(/^mailto:/i,"")),type:c,entryNode:C(t?.entryNode),status:C(t?.entryNode)?"existing":"new"},d={value:S(C(i?.valueNode||i?.entryNode||"").replace(/^tel:/i,"")),type:u,entryNode:C(i?.entryNode||""),status:C(i?.entryNode||"")?"existing":"new"},m={streetAddress:B(C(o?.streetAddress)),locality:B(C(o?.locality)),region:B(C(o?.region)),postalCode:B(C(o?.postalCode)),countryName:B(C(o?.countryName)),type:G(o?.type),entryNode:C(o?.entryNode),status:C(o?.entryNode)?"existing":"new"};return{basicInfo:a||{name:"",nickname:"",imageSrc:"",location:"",pronouns:"",dateOfBirth:"",entryNode:"",status:"new"},email:s||{value:"",type:"",entryNode:"",status:"new"},phone:d||{value:"",type:"",entryNode:"",status:"new"},address:m||{streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"},emailTypeWasMissing:l,phoneTypeWasMissing:n,imagePreviewSrc:"",clearImagePreview:()=>{}}}function Qe(e,a){if(e.clearImagePreview(),typeof URL.createObjectURL!="function"){e.imagePreviewSrc="",e.clearImagePreview=()=>{};return}let t=URL.createObjectURL(a);e.imagePreviewSrc=t,e.clearImagePreview=()=>{URL.revokeObjectURL(t),e.imagePreviewSrc="",e.clearImagePreview=()=>{}}}function Ha(e,a){e.clearImagePreview(),a&&(e.imagePreviewSrc=a,e.clearImagePreview=()=>{e.imagePreviewSrc="",e.clearImagePreview=()=>{}})}function Ga(e){let a=t=>({...z(t,"email"),type:We(z(t,"email").type)});return{create:e.create.map(a),update:e.update.map(a),remove:e.remove.map(a)}}function Va(e){let a=t=>({...z(t,"phone"),type:Ke(z(t,"phone").type)});return{create:e.create.map(a),update:e.update.map(a),remove:e.remove.map(a)}}function Q(e,a,t){let i=k([e],v);return t&&e.entryNode&&e.status==="existing"&&v(e)&&i.create.length===0&&i.update.length===0&&i.remove.length===0?{create:i.create,update:[z({...e,status:"modified"},a)],remove:i.remove}:i}function za({phone:e}){let a="Mobile Number",t="Phone Type 1",i="phone-value",o=re(e?.value||""),l=o.dialCode,n=u=>{let s=u.target,d=qe(s.value);e&&x(e,"value",ze(l,d),v)},c=u=>{let s=u;if(!s.detail.option)return;let d=String(s.detail.option.value);e&&de(e,"type",d)};return y`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--contact-point">
      <div class="profile-edit-dialog__field">
        <label aria-label=${a} class="label">
          ${a}
          <input
            class="input"
            type="tel"
            name=${i}
            .value=${o.localNumber}
            required
            data-contact-field="value"
            data-entry-node=${e?.entryNode||""}
            data-row-status=${e?.status||"n/a"}
            placeholder=${a}
            autocomplete="tel-national"
            inputmode="tel"
            @input=${n}
          />
        </label>
      </div>
      <label aria-label=${t} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--contact-point">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          id=${`phone-type-select-${i}`}
          aria-label=${t}
          .value=${Ce(e?.type||"",fe)}
          @change=${c}
        >
          ${fe.map(u=>y`<solid-ui-combobox-option value=${u.value}>${u.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
    </div>
  `}function Wa({email:e}){let a="Email",t="Email Type",i="email-value",o=n=>{let c=n.target,u=ce(c.value);e&&x(e,"value",u,v)},l=n=>{let c=n;if(!c.detail.option)return;let u=String(c.detail.option.value);e&&de(e,"type",u)};return y`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--contact-point">
      <label aria-label=${a} class="label profile-edit-dialog__field">
        ${a}
        <input
          class="input"
          type="email"
          name=${i}
          .value=${e?.value||""}
          required
          data-contact-field="value"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Email Address"
          autocomplete="email"
          inputmode="email"
          @input=${o}
        />
      </label>
      <label aria-label=${t} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--contact-point">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          id=${`email-type-select-${i}`}
          aria-label=${t}
          .value=${Ce(e?.type||"",he)}
          @change=${l}
        >
          ${he.map(n=>y`<solid-ui-combobox-option value=${n.value}>${n.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
    </div>
  `}function Ka({address:e}){let a="Address",t="address-street",i="address-locality",o="address-region",l="address-postal",n="address-country",c=u=>s=>{let d=s.target,m=B(d.value);e&&x(e,u,m,v)};return y`
    <label aria-label=${`${a} Street`} class="label profile-edit-dialog__field profile-edit-dialog__field--row-width">
      Street Address
      <input
        class="input"
        type="text"
        name=${t}
        .value=${e?.streetAddress||""}
        required
        data-contact-field="streetAddress"
        data-entry-node=${e?.entryNode||""}
        data-row-status=${e?.status||"n/a"}
        placeholder="Street Address"
        autocomplete="street-address"
        inputmode="text"
        @change=${c("streetAddress")}
      />
    </label>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--full">
      <label aria-label=${`${a} Locality`} class="label profile-edit-dialog__field">
        Locality
        <input
          class="input"
          type="text"
          name=${i}
          .value=${e?.locality||""}
          data-contact-field="locality"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="City / Locality"
          autocomplete="address-level2"
          inputmode="text"
          @change=${c("locality")}
        />
      </label>
      <label aria-label=${`${a} Postal Code`} class="label profile-edit-dialog__field">
        Postal Code
        <input
          class="input"
          type="text"
          name=${l}
          .value=${e?.postalCode||""}
          data-contact-field="postalCode"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Postal Code"
          autocomplete="postal-code"
          inputmode="text"
          @change=${c("postalCode")}
        />
      </label>
    </div>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--full">
      <label aria-label=${`${a} Region`} class="label profile-edit-dialog__field">
        Region
        <input
          class="input"
          type="text"
          name=${o}
          .value=${e?.region||""}
          data-contact-field="region"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="State / Region"
          inputmode="text"
          @change=${c("region")}
        />
      </label>
      <label aria-label=${`${a} Country`} class="label profile-edit-dialog__field">
        Country
        <input
          class="input"
          type="text"
          name=${n}
          .value=${e?.countryName||""}
          data-contact-field="countryName"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Country"
          autocomplete="country-name"
          inputmode="text"
          @change=${c("countryName")}
        />
      </label>
    </div>
  `}function qa(e,a){let{basicInfo:t,phone:i,email:o,imagePreviewSrc:l}=e,n="Profile Photo",c="Recommended: Square JPG, PNG. Max 2MB.",u="Full Name",s="Nickname",d="Pronouns",m="DOB",r=h=>E=>{let P=E.target,w=ue(P.value);t&&x(t,h,w,v)},f=h=>{let E=h.target,P=ue(E.value);t&&x(t,"dateOfBirth",me(P),v)},b=h=>{let E=h;if(!E.detail.option)return;let P=ge(String(E.detail.option.value));t&&x(t,"pronouns",P,v)},_=async h=>{let P=h.currentTarget?.ownerDocument||document,w=P.createElement("input");w.type="file",w.accept="image/*",w.hidden=!0;let Xe=()=>{w.remove()};w.addEventListener("change",async()=>{let X=w.files?.[0];if(Xe(),!(!X||!t))try{e.pendingImageFile=X,Qe(e,X),t.status=t.entryNode?"modified":"new",a()}catch(ea){console.error("Profile image upload failed",ea)}},{once:!0}),P.body.appendChild(w),w.click()},I=async h=>{let E=h.target.value;if(!(!E||!t))try{e.pendingImageFile=E,Qe(e,E),t.status=t.entryNode?"modified":"new",a()}catch(P){console.error("Profile camera upload failed",P)}},N=async()=>{t&&(e.pendingImageFile=null,e.clearImagePreview(),x(t,"imageSrc","",v),a())};return y`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--heading-photo">
      <header class="profile-edit-dialog__image-preview-header" aria-label="Profile Image">
        <div class="profile-edit-dialog__image-frame">
          ${De(l||t.imageSrc,t.name)}
          <solid-ui-photo-capture
            capture-label="Take Photo"
            confirm-label="Use Photo"
            retake-label="Retake"
            cancel-label="Close camera"
            file-name-prefix="camera"
            facing-mode="user"
            @input=${I}
          >
            <button
              slot="trigger"
              type="button"
              class="profile-edit-dialog__image-camera-button"
              aria-label="Take a photo"
              title="Take a photo"
            >
              <icon-lucide-camera aria-hidden="true"></icon-lucide-camera>
            </button>
          </solid-ui-photo-capture>
        </div>
      </header>

      <div class="profile-edit-dialog__image-preview" aria-label="Profile Photo Preview">
        <p class="profile-edit-dialog__image-preview-label">${n}</p>
        <p class="profile-edit-dialog__image-preview-description">${c}</p>

        <div class="profile-edit-dialog__image-preview-actions">
          <solid-ui-button
            variant="secondary"
            class="profile-edit-dialog__image-button profile-edit-dialog__image-upload-button"
            aria-label="Upload new profile photo"
            title="Upload"
            @click=${_}
          >
            Upload
          </solid-ui-button>
          <solid-ui-button
            variant="secondary"
            class="profile-edit-dialog__image-button profile-edit-dialog__image-remove-button"
            aria-label="Delete profile photo"
            title="Remove"
            @click=${N}
          >
            Remove
          </solid-ui-button>
        </div>
      </div>
    </div>
    <div class="profile-edit-dialog__image-camera-capture-row">
      <div class="profile-edit-dialog__image-camera-capture-frame" hidden></div>
    </div>
    <div class="profile-edit">
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal">
        <label aria-label=${u} class="label profile-edit-dialog__field">
          ${u}
          <input
            class="input"
            type="text"
            name="name"
            .value=${t?.name||""}
            required
            data-contact-field="name"
            data-entry-node=${t?.entryNode||""}
            data-row-status=${t?.status||"n/a"}
            placeholder="Full Name"
            autocomplete="name"
            inputmode="text"
            @change=${r("name")}
          />
        </label>
        <label aria-label=${s} class="label profile-edit-dialog__field">
          ${s}
          <input
            class="input"
            type="text"
            name="nickname"
            .value=${t?.nickname||""}
            data-contact-field="nickname"
            data-entry-node=${t?.entryNode||""}
            data-row-status=${t?.status||"n/a"}
            placeholder="Nickname"
            autocomplete="nickname"
            inputmode="text"
            @change=${r("nickname")}
          />
        </label>
      </div>
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--heading-dob">
        <div class="profile-edit-dialog__field-type profile-edit-dialog__field--stack">
          <label aria-label=${d} class="label">
            ${d}
          </label>
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__type-select"
            name="pronouns"
            data-heading-basic-field="pronouns"
            aria-label=${d}
            .value=${ge(t?.pronouns||"")}
            @change=${b}
          >
            ${Oa.map(h=>y`<solid-ui-combobox-option value=${h.value}>${h.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
        <div class="profile-edit-dialog__field profile-edit-dialog__field--stack">
          <label aria-label=${m} class="label">
            ${m}
          </label>
          <input
            class="input profile-edit-dialog__input--dob"
            type="date"
            name="dateOfBirth"
            .value=${me(t?.dateOfBirth||"")}
            data-contact-field="dateOfBirth"
            data-entry-node=${t?.entryNode||""}
            data-row-status=${t?.status||"n/a"}
            autocomplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
            data-bwignore="true"
            @change=${f}
          />
        </div>
      </div>
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal">
        <div class="profile-edit-dialog__field profile-edit-dialog__field--full">
          ${za({phone:i})}
        </div>
        <div class="profile-edit-dialog__field profile-edit-dialog__field--full">
          ${Wa({email:o})}
        </div>
      </div>
    </div>
  `}function be(e,a,t){O(y`
    ${qa(a,()=>be(e,a,t))}
    ${Ka({address:a.address})}
    ${t!=="owner"?y`<p class="profile-edit-dialog__login-message">${ee}</p>`:null}
  `,e)}function Ya(e,a){let t=document.createElement("form");t.classList.add("profile__edit-form","profile__edit-form--heading","profile-edit-dialog--heading"),t.autocomplete="off",t.setAttribute("data-lpignore","true"),t.setAttribute("data-1p-ignore","true"),t.setAttribute("data-bwignore","true");let i=Ua(e);return be(t,i,a),{form:t,formState:i}}function ja(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function Ja(e){return/^\d+$/.test(e)}function Za(e){if(!V(e.basicInfo.name))return"Full Name is required.";let{localNumber:a}=re(e.phone?.value||"");return v(e.phone)&&!Ja(a)?"Phone Number 1 should contain only numbers.":v(e.email)&&!ja(e.email?.value||"")?"Email address must be a valid email address.":null}async function ni(e,a,t,i,o,l){let n=document,c=S(C(i.imageSrc||"")),{form:u,formState:s}=Ya(i,o);if(s.basicInfo.imageSrc){let m=await Je(a,s.basicInfo.imageSrc);m&&m!==s.basicInfo.imageSrc&&(Ha(s,m),be(u,s,o))}await Fe({title:_e,dom:n,form:u,headerAction:{type:"none"},submitLabel:Ne,cancelLabel:Ae,shouldCloseWithoutSave:()=>{let m=k([s.basicInfo],v),r=Q(s.phone,"phone",s.phoneTypeWasMissing),f=Q(s.email,"email",s.emailTypeWasMissing),b=k([s.address],v);return m.create.length===0&&m.update.length===0&&m.remove.length===0&&r.create.length===0&&r.update.length===0&&r.remove.length===0&&f.create.length===0&&f.update.length===0&&f.remove.length===0&&b.create.length===0&&b.update.length===0&&b.remove.length===0},validate:()=>o!=="owner"?ee:Za(s),onSave:async()=>{if(s.pendingImageFile){let _=await Ze(a,t,s.pendingImageFile);x(s.basicInfo,"imageSrc",_,v)}let m=Q(s.phone,"phone",s.phoneTypeWasMissing),r=Q(s.email,"email",s.emailTypeWasMissing),f={basicOps:k([s.basicInfo],v),phoneOps:Va(m),emailOps:Ga(r),addressOps:k([s.address],v)};await He(a,t,f);let b=S(s.basicInfo.imageSrc||"");if(c&&c!==b)try{Ye(c)}catch(_){console.warn("Failed to invalidate resolved photo cache",_)}},formatSaveError:m=>m instanceof Error?m.message:q})&&l&&await l()}export{ni as createHeadingEditDialog};
