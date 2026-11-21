import{a as tt}from"./part-JII5LI4F.js";import{a as A,b as H,c as C,d as gt,e as M,f as k,g as wt,j,k as yt,l as vt}from"./part-RSHJEZPV.js";import{H as F,d as Z,o as O}from"./part-QENSO4SJ.js";import{a as S}from"./part-V7XQEHON.js";import{b as bt}from"./part-VHSBPZHI.js";import{c as U}from"./part-GPLAS2FA.js";import{D as K,F as L}from"./part-SVX36NT2.js";import{Z as f,t as ht}from"./part-ZY5B6SMR.js";import{a as ft}from"./part-VOCLXBLR.js";var h=S,Ut=Z,w=L,nt=w.updater;async function st(t,n=[]){let o=t.concat(n).map(a=>a.why),e=[];o.forEach(a=>{e.find(i=>i.equals(a))||e.push(a)});let r=e.map(a=>w.updater.update(t.filter(i=>i.why.sameTerm(a)),n.filter(i=>i.why.sameTerm(a))));return Promise.all(r)}async function nn(t,n,o,e){await w.fetcher.load(t.doc());let r=w.any(t,h.vcard("nameEmailIndex")),a=Ut.genUuid(),i=w.sym(t.dir().uri+"Person/"+a+"/index.ttl#this"),c=i.doc(),d=[f(i,h.vcard("inAddressBook"),t,r),f(i,h.vcard("fn"),n,r),f(i,h.vcard("fn"),n,c),f(i,h.rdf("type"),e,c),f(c,h.dct("created"),new Date,c)],m=Array.isArray(o)?o:Object.keys(o||{});if(m.length>0)for(let u of m){let s=w.sym(u),l=s.doc();d.push(f(s,h.vcard("hasMember"),i,l),f(i,h.vcard("fn"),n,l))}else{M("Must be a member of at least one group. Please select or create a group.");return}try{await nt.updateMany([],d)}catch(u){throw C("Cannot add group membership for "+i+". Stack:"+u),new Error("Save new contact")}return i}function Tt(t){return t.replace(/\W/gu,"_").replace(/_+/g,"_")}async function en(t,n){await w.fetcher.load(t.doc());let o=w.any(t,h.vcard("groupIndex")),e=Tt(n),r=w.sym(t.dir().uri+"Group/"+e+".ttl#this"),a=r.doc();try{await w.fetcher.load(o)}catch(d){throw new Error("Error loading group index!"+o.uri+": "+d)}if(w.holds(t,h.vcard("includesGroup"),r,o))return r;let i=[f(t,h.vcard("includesGroup"),r,o),f(r,h.rdf("type"),h.vcard("Group"),o),f(r,h.vcard("fn"),n,o)];try{await nt.update([],i)}catch(d){throw new Error("Could not update group index "+d)}let c=[f(t,h.vcard("includesGroup"),r,a),f(r,h.rdf("type"),h.vcard("Group"),a),f(r,h.vcard("fn"),n,a)];try{await nt.update([],c)}catch(d){throw new Error("Could not update group file: "+d)}return r}async function Pt(t,n){let o=[t.doc(),n.doc()];try{await w.fetcher.load(o)}catch(u){throw C("Error adding "+t+" to group "+n+". Stack: "+u),new Error("Error adding to group.")}let e=w.findTypeURIs(t);if(!(h.vcard("Individual").uri in e||h.vcard("Organization").uri in e)){H("Thing "+t+" is not an Individual or Organization, but has types: "+Object.keys(e)),M("You are trying to add something else than an individual or organization.");return}let r=w.any(t,h.vcard("fn")),a=w.any(n,h.vcard("fn"));if(!r){H("Thing "+t+" has no vcard:fn"),M("What you are trying to add seems to have no full name.");return}if(w.holds(t,h.vcard("fn"),null,n.doc())){M(r+" already exists in group "+a+".");return}let c="Add "+r+" to group "+a+"?";if(!await k(c))return;let d=[f(t,h.vcard("fn"),r,n.doc())],m=ot(w,t).map(u=>u.value);m.length?m.forEach(u=>{d.push(f(w.sym(u),h.owl("sameAs"),t,n.doc())),d.push(f(n,h.vcard("hasMember"),w.sym(u),n.doc()))}):d.push(f(n,h.vcard("hasMember"),t,n.doc()));try{await nt.update([],d),w.fetcher.unload(n.doc()),await w.fetcher.load(n.doc())}catch(u){throw C("Error adding "+t+" to group "+n+". Stack: "+u),new Error("Error adding to group.")}return t}function xt(t,n){let o=t.each(n,h.vcard("hasMember"),null,n.doc()),e=[];return o.forEach(a=>{e=t.any(a,h.vcard("fn"),null,n.doc())?e.concat(a):e.concat(t.each(a,h.owl("sameAs"),null,n.doc()))}),e=[...new Set(e.map(a=>a.uri))].map(a=>t.sym(a)),e}function Ct(t,n){let o=t.dir()?.dir()?.dir();return!!o&&!!n.uri&&n.uri.startsWith(o.uri)}async function It(t){let n=[],o=[];return t.forEach(e=>{w.each(e,h.vcard("hasMember"),null,e.doc()).forEach(a=>{let i=j(w,a,e.doc());if(i.length&&Ct(e,a)){for(let c of i)if(!Ct(e,c)){n.push(f(e,h.vcard("hasMember"),a,e.doc())),o.push(f(e,h.vcard("hasMember"),c,e.doc()));break}}})}),{del:n,ins:o}}tt(U(`/* \u2500\u2500 Named pane (rendered sub-pane) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.contactPane .namedPane {
  border: var(--border-width-sm) solid var(--color-text-muted);
  border-radius: var(--border-radius-base);
}

/* \u2500\u2500 Persona row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .personaRow {
  padding: var(--spacing-xs);
}

.contactPane .personaRow--webid,
.contactPane .personaRow--webid td,
.contactPane .personaRow--webid button,
.contactPane .personaRow--webid button:hover,
.contactPane .personaRow--webid .hoverControl:has(> img:first-child),
.contactPane .personaRow--webid .hoverControl:has(> img:first-child):hover,
.contactPane .personaRow--webid .personaOpenButton:has(> img:first-child),
.contactPane .personaRow--webid .personaOpenButton:has(> img:first-child):hover {
  background-color: var(--color-info-bg) !important;
}

/* \u2500\u2500 Full-width elements \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .fullWidth {
  width: 100%;
}

/* \u2500\u2500 Open/close profile button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .personaOpenButton {
  float: right;
  background-color: transparent;
  border: none;
}

/* hoverControl layout overrides are now enforced in contactsRDFFormsEnforced.css */

/* \u2500\u2500 Delete confirmation popup in webidControl \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* Remove intermediate positioned ancestor so popup anchors to .hoverControl */
.contactPane .webidControl div[style*="position: relative"]:has(> div[style*="display: grid"]) {
  position: static !important;
}

/* Position the popup absolutely so it never participates in the flex row */
.contactPane .webidControl div[style*="position: relative"] > div[style*="display: grid"] {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  left: auto !important;
  z-index: 9999 !important;
  display: grid !important;
  pointer-events: auto !important;
  opacity: 1 !important;
  visibility: visible !important;
  padding: var(--spacing-btn) !important;
  min-width: 12em !important;
  background: var(--color-background) !important;
  border: var(--border-width-sm) solid var(--color-primary) !important;
  border-radius: var(--border-radius-base) !important;
  box-shadow: var(--box-shadow-popup) !important;
  grid-template-columns: auto auto !important;
  gap: var(--spacing-xxs) !important;
}

/* \u2500\u2500 Section heading \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .contactPanedHeading {
  font-size: var(--font-size-lg);
  font-weight: bold;
  color: var(--color-primary);
  margin: var(--spacing-sm) 0;
}

/* \u2500\u2500 Prompt text \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .webidPrompt {
  padding: var(--spacing-sm);
  border: none;
  font-size: var(--font-size-base);
  white-space: pre-wrap;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) table td div.contactPane.namedPane {
  display: block;
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
  box-sizing: border-box;
  container-type: inline-size;
  container-name: nested-profile-pane;
  margin-top: var(--spacing-sm);
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile-grid,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane #main-content.profile-grid {
  display: flex !important;
  flex-direction: column !important;
  gap: var(--spacing-sm) !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__main,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__sidebar,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__section {
  width: 100% !important;
  min-width: 0 !important;
  max-width: 100% !important;
  box-sizing: border-box;
  overflow-wrap: anywhere;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__sidebar,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__section,
.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profile__main {
  padding: var(--spacing-sm) !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profileSectionCollapsible[data-expanded="false"] .profileSectionCollapsible__content {
  display: none !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profileSectionCollapsible__toggle {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  min-height: auto !important;
  min-width: auto !important;
  padding: var(--spacing-xxs) !important;
  border: none !important;
  background: none !important;
  color: var(--color-text) !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profileSectionCollapsible[data-expanded="true"] .profileSectionCollapsible__chevron {
  transform: rotate(180deg);
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profileSectionCollapsible__editLabel {
  display: none !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .profileSectionCollapsible__editIcon {
  display: inline !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .socialItem {
  display: flex !important;
  align-items: center !important;
  flex: 0 0 auto !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .socialItem a {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex: 0 0 auto !important;
  width: auto !important;
  min-width: var(--min-touch-target) !important;
  min-height: var(--min-touch-target) !important;
  line-height: 0 !important;
}

.contactPane :is(.contactPane--narrow .webidControl, .webidControl.webidControl--mobile) .namedPane .socialIcon {
  display: block !important;
  width: 40px !important;
  height: 40px !important;
  min-width: 40px !important;
  min-height: 40px !important;
  max-width: 40px !important;
  max-height: 40px !important;
  object-fit: contain !important;
  flex-shrink: 0 !important;
}

@media (max-width: 1000px) {
  .contactPane .webidControl,
  .contactPane .webidControl table,
  .contactPane .webidControl tbody,
  .contactPane .webidControl tr,
  .contactPane .webidControl td {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .contactPane .webidControl table {
    table-layout: fixed;
  }

  .contactPane .webidControl .personaRow--webid td {
    vertical-align: top;
  }

  .contactPane .webidControl .contactPane,
  .contactPane .webidControl .contactPane .addressBook-grid,
  .contactPane .webidControl .contactPane .detailSection,
  .contactPane .webidControl .contactPane .detailsSectionContent {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
  }

  .contactPane .webidControl .contactPane .addressBook-grid {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
  }

  .contactPane .webidControl .contactPane .detailSection,
  .contactPane .webidControl .contactPane .addressBookSection {
    flex: none !important;
  }

  .contactPane .webidControl .contactPane .detailsSectionContent,
  .contactPane .webidControl .contactPane .detailsSectionContent--wide {
    padding: var(--spacing-sm) !important;
    overflow-y: visible !important;
  }

}

@container nested-profile-pane (max-width: 900px) {
  .contactPane .webidControl .profile-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: var(--spacing-sm) !important;
  }

  .contactPane .webidControl .profile-grid > * {
    min-width: 0 !important;
    max-width: 100% !important;
  }

  .contactPane .webidControl .profile__main,
  .contactPane .webidControl .profile__sidebar,
  .contactPane .webidControl .profile__section {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
    overflow-wrap: anywhere;
  }
}

/* \u2500\u2500 Visibility / display helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .collapsed {
  visibility: collapse;
}
`,"text/css"));var p=S,P=F,zt=Z,$=L,Et=P.publicData.wikidataClasses,St=P.publicData.wikidataParameters,W="WebID",At="WikiData link",Mt=O.iconBase+"noun_1369241.svg",Ot=O.iconBase+"noun_1369237.svg";async function Ft(t,n,o,e){try{new URL(n)}catch{throw new Error(`${W}: ${n} is not a valid url.`)}A(`Adding to ${t} a ${W}: ${n}.`);let r=e.bnode(),a=[f(t,p.vcard("url"),r,t.doc()),f(r,p.rdf("type"),o,t.doc()),f(r,p.vcard("value"),n,t.doc())],i=e.each(null,p.vcard("hasMember"),t),c=[];i.forEach(d=>{c=c.concat(e.statementsMatching(d,p.vcard("hasMember"),t,d.doc())),a.push(f(d,p.vcard("hasMember"),e.sym(n),d.doc())),a.push(f(e.sym(n),p.owl("sameAs"),t,d.doc()))});try{await st(c,a)}catch{throw new Error(`Could not create webId ${W}: ${n}.`)}}async function Ht(t,n,o,e){A(`Removing from ${t} their ${W}: ${n}.`);let r=e.each(t,p.vcard("url"),null,t.doc()).filter(u=>e.holds(u,p.rdf("type"),o,t.doc())).filter(u=>e.holds(u,p.vcard("value"),n,t.doc()));if(!r.length)throw new Error(`Person ${t} does not have ${W} ${n}.`);let a=r[0],i=[f(t,p.vcard("url"),a,t.doc()),f(a,p.rdf("type"),o,t.doc()),f(a,p.vcard("value"),n,t.doc())];await e.updater.update(i,[]);let c=e.each(null,p.vcard("hasMember"),e.sym(n)),d=[],m=[];for(let u of c)d=d.concat(e.statementsMatching(e.sym(n),p.owl("sameAs"),t,u.doc())),m.push(f(u,p.vcard("hasMember"),t,u.doc())),e.statementsMatching(e.sym(n),p.owl("sameAs"),null,u.doc()).length<2&&(d=d.concat(e.statementsMatching(u,p.vcard("hasMember"),e.sym(n),u.doc())));await st(d,m)}function jt(t,n,o){let e=new Set,r=new Set([n.uri]);for(;r.size;){let a=Array.from(r)[0];if(r.delete(a),e.has(a))continue;e.add(a);let i=t.sym(a);t.each(i,p.owl("sameAs"),null,o).concat(t.each(null,p.owl("sameAs"),i,o)).forEach(c=>{A("        OWL sameAs found "+c),r.add(c.uri)}),t.each(i,p.schema("sameAs"),null,o).concat(t.each(null,p.schema("sameAs"),i,o)).forEach(c=>{A("        Schema sameAs found "+c),r.add(c.uri)})}return e.delete(n.uri),Array.from(e).map(a=>t.sym(a))}function ot(t,n){let o=ct(t,n).concat(jt(t,n,n.doc())),r=[...new Set(o.map(a=>a.value))].map(a=>t.sym(a));return r.sort(),r.filter(a=>!a.sameTerm(n)),r}function ct(t,n,o){return t.each(n,p.vcard("url"),null,n.doc()).filter(e=>t.holds(e,p.rdf("type"),o,n.doc())).map(e=>t.any(e,p.vcard("value"),null,n.doc())).filter(e=>!!e)}function $t(t){let n=t.doc();return $.holds(t,p.rdf("type"),p.vcard("Organization"),n)||$.holds(t,p.rdf("type"),p.schema("Organization"),n)}function qt(t,n,o,e){let a=e.session.paneRegistry.byName(o).render(n,e);return a.classList.add("namedPane"),a}async function cn(t,n){let o={longPrompt:`Link to a ${W}?`,idNoun:W,urlType:p.vcard("WebID")};return Rt(t,n,o)}async function dn(t,n){let o=$.sym("http://www.wikidata.org/wiki/Q43229");for(let r in Et)$.holds(t,p.rdf("type"),p.schema(r),t.doc())&&(o=$.sym(Et[r]),A(`  renderPublicIdControl bingo: ${r} -> ${o}`));let e={longPrompt:`Add a ${At}?`,idNoun:At,urlType:p.vcard("PublicId"),dbLookup:!0,class:o,queryParams:St};return Rt(t,n,e)}async function Rt(t,n,o){function e(s,l,g){function I(D){E=!E,b.classList.toggle("collapsed",!E),G.children[0].src=E?Ot:Mt,G.setAttribute("aria-expanded",E?"true":"false"),G.setAttribute("aria-label",E?"Collapse profile":"Expand profile")}function _(D){let X=new ht(D.uri);async function Wt(){try{await Ht(t,X,o.urlType,g)}catch(Nt){C(`Error removing Id ${X} from ${t}: ${Nt}`),v.appendChild(P.errorMessageBlock(s,"Error removing WebId from profile. If it persists, contact admin."))}await r()}let ut=o.urlType.sameTerm(p.vcard("WebID")),Y={deleteFunction:o.editable?Wt:null,draggable:!0};ut&&(Y.title=D.uri.split("/")[2],Y.image=P.faviconOrDefault(s,D.site()));let J=P.personTR(s,S.foaf("knows"),D,Y);return ut&&(J.children[1].textConent=Y.title,J.classList.add("personaRow--webid")),J.classList.add("personaRow"),J}let v=s.createElement("div");v.classList.add("fullWidth");let B=v.appendChild(s.createElement("table"));B.classList.add("fullWidth");let rt=B.appendChild(_(l));rt.classList.add("fullWidth");let N=B.appendChild(s.createElement("tr")).appendChild(s.createElement("td"));N.setAttribute("colspan",3);let b,E=!0,G=rt.children[2].appendChild(P.button(s,Mt,"View",I));G.classList.add("personaOpenButton"),G.setAttribute("aria-expanded","true"),G.setAttribute("aria-label","Collapse profile");let kt=($t(t)||$t(l),"profile");return P.publicData.loadPublicDataThing(g,t,l).then(D=>{try{b=qt(s,l,kt,n),b.classList.add("fullWidth"),N.appendChild(b)}catch(X){C("Error displaying persona "+l+". Stack: "+X),b=P.errorMessageBlock(s,"Error displaying profile. If it persists, contact admin."),N.appendChild(b)}},D=>{C("Error loading persona "+l+". Stack: "+D),b=P.errorMessageBlock(s,"Error loading profile. If it persists, contact admin."),N.appendChild(b)}),v}async function r(){let s=ot($,t);zt.syncTableToArrayReOrdered(u,s,l=>e(i,l,$))}async function a(s,l){try{await Ft(s,l,o.urlType,$)}catch(g){C("Error adding webId "+l+" to "+s+". Stack: "+g),c.appendChild(P.errorMessageBlock(i,"This is not a valid WebID."))}await r()}let{dom:i}=n;o=o||{},o.editable=$.updater.editable(t.doc().uri,$);let c=i.createElement("div");if(c.classList.add("webidControl","webidControl--mobile"),ot($,t).length===0&&!o.editable)return c.classList.add("hidden"),c;let d=c.appendChild(i.createElement("h3"));if(d.textContent="Link to a "+o.idNoun,d.classList.add("contactPanedHeading"),c.appendChild(i.createElement("table")).classList.add("fullWidth"),o.editable){let s={editable:o.editable,manualURIEntry:!0,idNoun:o.idNoun,dbLookup:o.dbLookup},l={queryParams:o.queryParams||St,targetClass:o.class};try{c.appendChild(await P.renderAutocompleteControl(i,t,s,l,a))}catch(g){C("Render Autocomplete Control failed. Stack:",g),c.appendChild(P.errorMessageBlock(i,"Error rendering autocomplete. If it persists, contact admin."))}}let u=c.appendChild(i.createElement("div"));return await r(),c}var Vt=await gt(U(`/* The panes decide whether the control is visible -- they hide it until its
   container is hovered -- so the host only carries the sizing the old
   UI.widgets.deleteButtonWithCheck img had, and stays out of \`display\`. */
:host {
    float: right;
    margin: 0.2em;
    width: 1em;
    height: 1em;
    align-items: center;
    justify-content: center;
}

button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
}

img {
    width: 100%;
    height: 100%;
    display: block;
}
`,"text/css")),q=class extends bt{static properties={noun:{},message:{},confirm:{type:Boolean},deleteAction:{attribute:!1}};constructor(){super(),this.noun="item",this.message=null,this.confirm=!0,this.deleteAction=null}static styles=Vt;click(){this.onClick()}connectedCallback(){super.connectedCallback(),this.setAttribute("data-testid","deleteButtonWithCheck")}render(){return ft`
      <button type="button" title=${`Remove this ${this.noun}`} @click=${this.onClick}>
        <img src=${O.iconBase+"noun_2188_red.svg"} alt="" />
        <span class="sr-only">Remove this ${this.noun}</span>
      </button>
    `}async onClick(){let n=this.message??`Really delete this ${this.noun}?`;if(!(this.confirm&&!await k(n)))try{await this.deleteAction?.()}catch(o){C("Error deleting "+this.noun+". Stack: "+o),M(`Failed to delete ${this.noun}. If it persists, contact your admin.`)}}};customElements.get("contacts-pane-delete-button")||customElements.define("contacts-pane-delete-button",q);function V(t,n,o,e,r={}){let a=t.createElement("contacts-pane-delete-button");return a.noun=o,a.deleteAction=e,a.confirm=r.confirm??!0,r.message&&(a.message=r.message),n.classList.add("hoverControl"),n.appendChild(a),a}var R=S,y=L,dt,Qt={},z=null,Bt=null,T=null,lt=null;function In({book:t,dom:n,selectedGroups:o,ulPeople:e,cardMain:r,dataBrowserContext:a}){n&&(dt=n),o&&(Qt=o),e&&(z=e),r&&(Bt=r),a&&(lt=a),T=t}function En(t){return y.statementsMatching(null,null,null,t.doc()).length>0?xt(y,t).length:null}async function An(t,n){for(let o of t){let e=y.sym(o);try{e=await Pt(e,n)}catch{M("Error adding to group. Make sure you are adding a contact URI.")}e&&at(z)}}function Mn(t,n){let o=[];if(n.foreignGroup&&o.push(["",y.any(n.foreignGroup,R.vcard("fn")),n.foreignGroup]),t){let e=y.any(t,R.vcard("groupIndex")),a=(t?y.each(t,R.vcard("includesGroup"),null,e):[]).map(i=>[t,y.any(i,R.vcard("fn")),i]);o=o.concat(a),o.sort()}return o.map(e=>e[2])}async function Dt(t){let n=t&&y.any(t,R.vcard("groupIndex"));if(n){await y.fetcher.load(n);let o=t?y.each(t,R.vcard("includesGroup"),null,n):[];return await y.fetcher.load(o),o}else return[]}function at(t,n=null,o=!0){let e=t||z;if(!e||typeof e.refresh!="function"){H("refreshNames called with invalid ulPeople:",e);return}e.refresh(o)}function $n(t,n,o){if(!o)return;let e=t||z;e&&typeof e.markSelected=="function"&&e.markSelected(n),o.showLoading({wide:!0});let r;try{r=T?Lt(n):n}catch(a){o.showError("Cannot load contact: "+a.message);return}y.fetcher.nowOrWhenFetched(r.doc(),void 0,(a,i)=>{if(!a){C("Failed to load contact card: "+r+". Stack: "+i),o.showError("Failed to load contact. If it persists, contact your admin.");return}o.showContent(Xt(r,"contact"),{wide:!0,kind:"contact"})})}function _n(t){let n=t;try{n=T?Lt(t):t}catch{}window.open(n.uri,"_blank","noopener")}async function Sn(t){let n=Bt;if(!await k("Really delete this contact?"))return;let o=t.dir(),e=y.any(t,R.vcard("fn"));A("We are about to delete the contact "+e);let r=[];try{await Dt(T);let a=y.any(T,R.vcard("nameEmailIndex"));await y.fetcher.load(a),mt(t).forEach(c=>{j(y,t,c.doc()).forEach(m=>{j(y,m,c.doc()).length===1&&(r=r.concat(y.statementsMatching(c,R.vcard("hasMember"),m,c.doc())))})}),await y.updater.updateMany(r)}catch(a){C("Error removing contact from its groups. Stack: "+a),n?.showError("Failed to remove the contact from its groups. If it persists, contact your admin.");return}try{await vt(t)}catch{n?.showError("Failed to delete contact. If it persists, contact your admin.");return}try{await yt(y,o)}catch{n?.showError("Failed to delete contact. If it persists, contact your admin.");return}at(z,n),n?.showMessage("Contact data deleted.")}function Rn(t){let n=t||z;n&&typeof n.clearSelection=="function"&&n.clearSelection()}function Xt(t,n){let e=lt.session.paneRegistry.byName(n).render(t,lt);return e.classList.add("renderPane"),e}function Lt(t){let n=y.allAliases(t),o=T.dir().uri;for(let e=0;e<n.length;e++)if(n[e].uri.slice(0,o.length)===o)return n[e];throw new Error("No local URI for "+t)}async function Bn(t,n){let o=await Dt(t);if(o&&o.length>0){let{del:e,ins:r}=await It(o);if(K.currentUser()&&e.length){let a=dt.createElement("div");V(dt,a,"contact",async()=>{await y.updater.updateMany(e,r),A("Deleted "+e.length+" bad statements from groups")},{message:"Clean up "+e.length+" bad statement(s) in the group files?"}),n.addNotice(a)}}}tt(U(`/* \u2500\u2500 Group Membership Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .group-membership-container {
  padding: var(--spacing-sm) 0;
}

/* Grid wrapper \u2014 matches detailsSectionContent groupButtonsList */
.contactPane .group-pills-wrapper {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
  gap: var(--spacing-sm) !important;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100% !important;
}

.contactPane .group-pills-wrapper span {
  width: max-content !important;
}

/* Each group item: button on top, toolbar below */
.contactPane .group-membership-item {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 16rem; /* 256px */
}

.contactPane .group-membership-item > button {
  width: 100%;
  text-align: center;
  border-radius: var(--border-radius-base);
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-height: var(--min-touch-target);
}

/* Toolbar with link icon and delete button below each group button */
.contactPane .group-membership-item .group-membership-toolbar {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0 0 0;
}

.contactPane .group-membership-item .group-membership-toolbar a {
  margin: 0.3rem;
  margin-left: 1rem;
}

.contactPane .group-membership-item .group-membership-toolbar a img {
  width: 1.3rem;
  height: 1rem;
  margin: 0;
}

/* Cancel float:right and any absolute positioning injected by solid-ui */
.contactPane .group-membership-item .group-membership-toolbar > img.hoverControlHide,
.contactPane .group-membership-item .group-membership-toolbar > [data-testid="deleteButtonWithCheck"] {
  float: none !important;
  display: inline-flex !important;
  visibility: hidden !important;
  margin: 0 !important;
}

.contactPane .group-membership-item .group-membership-toolbar:hover > img.hoverControlHide,
.contactPane .group-membership-item .group-membership-toolbar:hover > [data-testid="deleteButtonWithCheck"] {
  visibility: visible !important;
}

.contactPane .detailsSectionContent .group-membership-item .group-membership-toolbar > div[style*="position: relative"] {
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  width: min(90vw, 27.5rem) !important; /* 440px */
  min-width: 17.5rem !important; /* 280px */
  max-width: 90vw !important;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.contactPane .detailsSectionContent .group-membership-item .group-membership-toolbar > div[style*="position: relative"] > div {
  position: relative !important;
  top: auto !important;
  min-width: 17.5rem !important; /* 280px */ 
  background: var(--color-background);
  border-radius: var(--border-radius-full);
  padding: var(--spacing-lg);
  box-shadow: var(--box-shadow-overlay);
  z-index: 1001;
}

@media (max-width: 599px) {
  .contactPane .group-membership-item .group-pills-wrapper {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: var(--spacing-xs) !important;
    max-width: 100% !important;
  }

  .contactPane .group-membership-item .group-membership-item > button {
    font-size: var(--font-size-sm) !important;
    border-radius: var(--border-radius-base) !important;
  }
}

@media (min-width: 900px) {
  .contactPane .group-membership-item .group-pills-wrapper {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: var(--spacing-sm) !important;
  }
}
`,"text/css"));var x=S,Yt=L;function mt(t,n=Yt){let o=n.statementsMatching(null,x.owl("sameAs"),t).map(r=>r.why).concat(n.each(null,x.vcard("hasMember"),t));return o=[...new Set(o.map(r=>wt(r.uri)))].map(r=>n.sym(r)),o}async function Tn(t,n,o){let e=o||null;async function r(s,l){let g=m.any(s,x.vcard("fn")),I=m.any(l,x.vcard("fn")),_=m.each(null,x.owl("sameAs"),s,l.doc()),v=[];_.forEach(b=>{m.statementsMatching(b,x.owl("sameAs"),s,l.doc())&&(v=v.concat(b))}),v=ct(m,s).map(b=>b.value);let B=v.map(b=>m.sym(b)),Q=[s].concat(B).flatMap(b=>m.each(null,x.vcard("hasMember"),b));if(Q=[...new Set(Q.map(b=>b.uri))].map(b=>m.sym(b)),Q.length<2){M("Must be a member of at least one group.  Add to another group first.");return}let N="Remove "+g+" from group "+I+"?";if(await k(N)){let b=m.statementsMatching(s,void 0,void 0,l.doc()).concat(m.statementsMatching(void 0,void 0,s,l.doc()));v.forEach(E=>{m.statementsMatching(E,x.owl("sameAs"),void 0,l.doc()).length<2&&(b=b.concat(m.statementsMatching(void 0,void 0,E,l.doc())))});try{await m.updater.update(b,[])}catch(E){let pt="Error removing member from group "+l+": "+E;u.appendChild(F.errorMessageBlock(d,pt,"pink"));return}A("Removed "+g+" from group "+I),m.fetcher.unload(l.doc()),await m.fetcher.load(l.doc()),i(),at(e)}}function a(s){let l=m.any(s,x.vcard("fn")),g=l?l.value:s.uri,I=d.createElement("li");I.classList.add("group-membership-item");let _=d.createElement("button");_.setAttribute("type","button"),_.classList.add("allGroupsButton","actionButton","btn-secondary","action-button-focus"),_.textContent=g,_.title=g,I.appendChild(_);let v=d.createElement("div");v.classList.add("group-membership-toolbar");let B=F.linkIcon(d,s);return B.setAttribute("title","Link to "+g),v.appendChild(B),K.currentUser()&&V(d,v,"membership in "+g,async()=>{await r(t,s)},{confirm:!1}),I.appendChild(v),I}function i(s=null){u.innerHTML="";let l=d.createElement("h3");l.classList.add("group-membership-header"),l.textContent="Part of groups",u.appendChild(l);let g=d.createElement("ul");g.classList.add("group-pills-wrapper"),u.appendChild(g),s=s||mt(t,m),s.length===0?g.innerHTML="<span>Not part of any Address Book group.</span>":g.innerHTML="",s.forEach(I=>{g.appendChild(a(I))})}async function c(s=null){if(!s&&(s=m.any(void 0,x.vcard("includesGroup")),!s))return[];let l=m.any(s,x.vcard("groupIndex")),g=s?m.each(s,x.vcard("includesGroup"),null,l):[];return await m.fetcher.load(g),g}let{dom:d}=n,m=n.session.store,u=d.createElement("div");return u.classList.add("group-membership-container"),await c(),u.refresh=i,i(),u}export{nn as a,en as b,Pt as c,xt as d,cn as e,dn as f,In as g,En as h,An as i,Mn as j,at as k,$n as l,_n as m,Sn as n,Rn as o,Bn as p,Tn as q};
