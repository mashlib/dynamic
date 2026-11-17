import{a as Z}from"./part-JII5LI4F.js";import{a as M,b as H,c as C,d as ht,e as $,f as k,g as ft,j,k as bt,l as gt}from"./part-IPTG737N.js";import{H as F,d as K,o as O}from"./part-D7Z64I5T.js";import{a as R}from"./part-VJTDSXSH.js";import{b as ut}from"./part-5ZTE77ED.js";import{c as U}from"./part-USTJ2YCK.js";import{store as Gt}from"solid-logic";import*as y from"rdflib";import"rdflib";import{store as kt}from"solid-logic";var h=R,Wt=K,g=kt,tt=g.updater;async function it(t,n=[]){let o=t.concat(n).map(a=>a.why),e=[];o.forEach(a=>{e.find(i=>i.equals(a))||e.push(a)});let r=e.map(a=>g.updater.update(t.filter(i=>i.why.sameTerm(a)),n.filter(i=>i.why.sameTerm(a))));return Promise.all(r)}async function cn(t,n,o,e){await g.fetcher.load(t.doc());let r=g.any(t,h.vcard("nameEmailIndex")),a=Wt.genUuid(),i=g.sym(t.dir().uri+"Person/"+a+"/index.ttl#this"),c=i.doc(),d=[y.st(i,h.vcard("inAddressBook"),t,r),y.st(i,h.vcard("fn"),n,r),y.st(i,h.vcard("fn"),n,c),y.st(i,h.rdf("type"),e,c),y.st(c,h.dct("created"),new Date,c)],m=Array.isArray(o)?o:Object.keys(o||{});if(m.length>0)for(let u of m){let s=g.sym(u),l=s.doc();d.push(y.st(s,h.vcard("hasMember"),i,l),y.st(i,h.vcard("fn"),n,l))}else{$("Must be a member of at least one group. Please select or create a group.");return}try{await tt.updateMany([],d)}catch(u){throw C("Cannot add group membership for "+i+". Stack:"+u),new Error("Save new contact")}return i}function Nt(t){return t.replace(/\W/gu,"_").replace(/_+/g,"_")}async function dn(t,n){await g.fetcher.load(t.doc());let o=g.any(t,h.vcard("groupIndex")),e=Nt(n),r=g.sym(t.dir().uri+"Group/"+e+".ttl#this"),a=r.doc();try{await g.fetcher.load(o)}catch(d){throw new Error("Error loading group index!"+o.uri+": "+d)}if(g.holds(t,h.vcard("includesGroup"),r,o))return r;let i=[y.st(t,h.vcard("includesGroup"),r,o),y.st(r,h.rdf("type"),h.vcard("Group"),o),y.st(r,h.vcard("fn"),n,o)];try{await tt.update([],i)}catch(d){throw new Error("Could not update group index "+d)}let c=[y.st(t,h.vcard("includesGroup"),r,a),y.st(r,h.rdf("type"),h.vcard("Group"),a),y.st(r,h.vcard("fn"),n,a)];try{await tt.update([],c)}catch(d){throw new Error("Could not update group file: "+d)}return r}async function yt(t,n){let o=[t.doc(),n.doc()];try{await g.fetcher.load(o)}catch(u){throw C("Error adding "+t+" to group "+n+". Stack: "+u),new Error("Error adding to group.")}let e=g.findTypeURIs(t);if(!(h.vcard("Individual").uri in e||h.vcard("Organization").uri in e)){H("Thing "+t+" is not an Individual or Organization, but has types: "+Object.keys(e)),$("You are trying to add something else than an individual or organization.");return}let r=g.any(t,h.vcard("fn")),a=g.any(n,h.vcard("fn"));if(!r){H("Thing "+t+" has no vcard:fn"),$("What you are trying to add seems to have no full name.");return}if(g.holds(t,h.vcard("fn"),null,n.doc())){$(r+" already exists in group "+a+".");return}let c="Add "+r+" to group "+a+"?";if(!await k(c))return;let d=[y.st(t,h.vcard("fn"),r,n.doc())],m=et(g,t).map(u=>u.value);m.length?m.forEach(u=>{d.push(y.st(g.sym(u),h.owl("sameAs"),t,n.doc())),d.push(y.st(n,h.vcard("hasMember"),g.sym(u),n.doc()))}):d.push(y.st(n,h.vcard("hasMember"),t,n.doc()));try{await tt.update([],d),g.fetcher.unload(n.doc()),await g.fetcher.load(n.doc())}catch(u){throw C("Error adding "+t+" to group "+n+". Stack: "+u),new Error("Error adding to group.")}return t}function vt(t,n){let o=t.each(n,h.vcard("hasMember"),null,n.doc()),e=[];return o.forEach(a=>{e=t.any(a,h.vcard("fn"),null,n.doc())?e.concat(a):e.concat(t.each(a,h.owl("sameAs"),null,n.doc()))}),e=[...new Set(e.map(a=>a.uri))].map(a=>t.sym(a)),e}function wt(t,n){let o=t.dir()?.dir()?.dir();return!!o&&!!n.uri&&n.uri.startsWith(o.uri)}async function Ct(t){let n=[],o=[];return t.forEach(e=>{g.each(e,h.vcard("hasMember"),null,e.doc()).forEach(a=>{let i=j(g,a,e.doc());if(i.length&&wt(e,a)){for(let c of i)if(!wt(e,c)){n.push(y.st(e,h.vcard("hasMember"),a,e.doc())),o.push(y.st(e,h.vcard("hasMember"),c,e.doc()));break}}})}),{del:n,ins:o}}import*as x from"rdflib";import"rdflib";Z(U(`/* \u2500\u2500 Named pane (rendered sub-pane) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
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
`,"text/css"));var p=R,P=F,Ut=K,_=Gt,Pt=P.publicData.wikidataClasses,Mt=P.publicData.wikidataParameters,W="WebID",xt="WikiData link",It=O.iconBase+"noun_1369241.svg",Tt=O.iconBase+"noun_1369237.svg";async function zt(t,n,o,e){try{new URL(n)}catch{throw new Error(`${W}: ${n} is not a valid url.`)}M(`Adding to ${t} a ${W}: ${n}.`);let r=e.bnode(),a=[x.st(t,p.vcard("url"),r,t.doc()),x.st(r,p.rdf("type"),o,t.doc()),x.st(r,p.vcard("value"),n,t.doc())],i=e.each(null,p.vcard("hasMember"),t),c=[];i.forEach(d=>{c=c.concat(e.statementsMatching(d,p.vcard("hasMember"),t,d.doc())),a.push(x.st(d,p.vcard("hasMember"),e.sym(n),d.doc())),a.push(x.st(e.sym(n),p.owl("sameAs"),t,d.doc()))});try{await it(c,a)}catch{throw new Error(`Could not create webId ${W}: ${n}.`)}}async function Ot(t,n,o,e){M(`Removing from ${t} their ${W}: ${n}.`);let r=e.each(t,p.vcard("url"),null,t.doc()).filter(u=>e.holds(u,p.rdf("type"),o,t.doc())).filter(u=>e.holds(u,p.vcard("value"),n,t.doc()));if(!r.length)throw new Error(`Person ${t} does not have ${W} ${n}.`);let a=r[0],i=[x.st(t,p.vcard("url"),a,t.doc()),x.st(a,p.rdf("type"),o,t.doc()),x.st(a,p.vcard("value"),n,t.doc())];await e.updater.update(i,[]);let c=e.each(null,p.vcard("hasMember"),e.sym(n)),d=[],m=[];for(let u of c)d=d.concat(e.statementsMatching(e.sym(n),p.owl("sameAs"),t,u.doc())),m.push(x.st(u,p.vcard("hasMember"),t,u.doc())),e.statementsMatching(e.sym(n),p.owl("sameAs"),null,u.doc()).length<2&&(d=d.concat(e.statementsMatching(u,p.vcard("hasMember"),e.sym(n),u.doc())));await it(d,m)}function Ft(t,n,o){let e=new Set,r=new Set([n.uri]);for(;r.size;){let a=Array.from(r)[0];if(r.delete(a),e.has(a))continue;e.add(a);let i=t.sym(a);t.each(i,p.owl("sameAs"),null,o).concat(t.each(null,p.owl("sameAs"),i,o)).forEach(c=>{M("        OWL sameAs found "+c),r.add(c.uri)}),t.each(i,p.schema("sameAs"),null,o).concat(t.each(null,p.schema("sameAs"),i,o)).forEach(c=>{M("        Schema sameAs found "+c),r.add(c.uri)})}return e.delete(n.uri),Array.from(e).map(a=>t.sym(a))}function et(t,n){let o=st(t,n).concat(Ft(t,n,n.doc())),r=[...new Set(o.map(a=>a.value))].map(a=>t.sym(a));return r.sort(),r.filter(a=>!a.sameTerm(n)),r}function st(t,n,o){return t.each(n,p.vcard("url"),null,n.doc()).filter(e=>t.holds(e,p.rdf("type"),o,n.doc())).map(e=>t.any(e,p.vcard("value"),null,n.doc())).filter(e=>!!e)}function Et(t){let n=t.doc();return _.holds(t,p.rdf("type"),p.vcard("Organization"),n)||_.holds(t,p.rdf("type"),p.schema("Organization"),n)}function Ht(t,n,o,e){let a=e.session.paneRegistry.byName(o).render(n,e);return a.classList.add("namedPane"),a}async function gn(t,n){let o={longPrompt:`Link to a ${W}?`,idNoun:W,urlType:p.vcard("WebID")};return $t(t,n,o)}async function wn(t,n){let o=_.sym("http://www.wikidata.org/wiki/Q43229");for(let r in Pt)_.holds(t,p.rdf("type"),p.schema(r),t.doc())&&(o=_.sym(Pt[r]),M(`  renderPublicIdControl bingo: ${r} -> ${o}`));let e={longPrompt:`Add a ${xt}?`,idNoun:xt,urlType:p.vcard("PublicId"),dbLookup:!0,class:o,queryParams:Mt};return $t(t,n,e)}async function $t(t,n,o){function e(s,l,b){function E(L){A=!A,f.classList.toggle("collapsed",!A),G.children[0].src=A?Tt:It,G.setAttribute("aria-expanded",A?"true":"false"),G.setAttribute("aria-label",A?"Collapse profile":"Expand profile")}function S(L){let X=new x.Literal(L.uri);async function Dt(){try{await Ot(t,X,o.urlType,b)}catch(Lt){C(`Error removing Id ${X} from ${t}: ${Lt}`),v.appendChild(P.errorMessageBlock(s,"Error removing WebId from profile. If it persists, contact admin."))}await r()}let pt=o.urlType.sameTerm(p.vcard("WebID")),Y={deleteFunction:o.editable?Dt:null,draggable:!0};pt&&(Y.title=L.uri.split("/")[2],Y.image=P.faviconOrDefault(s,L.site()));let J=P.personTR(s,R.foaf("knows"),L,Y);return pt&&(J.children[1].textConent=Y.title,J.classList.add("personaRow--webid")),J.classList.add("personaRow"),J}let v=s.createElement("div");v.classList.add("fullWidth");let D=v.appendChild(s.createElement("table"));D.classList.add("fullWidth");let at=D.appendChild(S(l));at.classList.add("fullWidth");let N=D.appendChild(s.createElement("tr")).appendChild(s.createElement("td"));N.setAttribute("colspan",3);let f,A=!0,G=at.children[2].appendChild(P.button(s,It,"View",E));G.classList.add("personaOpenButton"),G.setAttribute("aria-expanded","true"),G.setAttribute("aria-label","Collapse profile");let Bt=(Et(t)||Et(l),"profile");return P.publicData.loadPublicDataThing(b,t,l).then(L=>{try{f=Ht(s,l,Bt,n),f.classList.add("fullWidth"),N.appendChild(f)}catch(X){C("Error displaying persona "+l+". Stack: "+X),f=P.errorMessageBlock(s,"Error displaying profile. If it persists, contact admin."),N.appendChild(f)}},L=>{C("Error loading persona "+l+". Stack: "+L),f=P.errorMessageBlock(s,"Error loading profile. If it persists, contact admin."),N.appendChild(f)}),v}async function r(){let s=et(_,t);Ut.syncTableToArrayReOrdered(u,s,l=>e(i,l,_))}async function a(s,l){try{await zt(s,l,o.urlType,_)}catch(b){C("Error adding webId "+l+" to "+s+". Stack: "+b),c.appendChild(P.errorMessageBlock(i,"This is not a valid WebID."))}await r()}let{dom:i}=n;o=o||{},o.editable=_.updater.editable(t.doc().uri,_);let c=i.createElement("div");if(c.classList.add("webidControl","webidControl--mobile"),et(_,t).length===0&&!o.editable)return c.classList.add("hidden"),c;let d=c.appendChild(i.createElement("h3"));if(d.textContent="Link to a "+o.idNoun,d.classList.add("contactPanedHeading"),c.appendChild(i.createElement("table")).classList.add("fullWidth"),o.editable){let s={editable:o.editable,manualURIEntry:!0,idNoun:o.idNoun,dbLookup:o.dbLookup},l={queryParams:o.queryParams||Mt,targetClass:o.class};try{c.appendChild(await P.renderAutocompleteControl(i,t,s,l,a))}catch(b){C("Render Autocomplete Control failed. Stack:",b),c.appendChild(P.errorMessageBlock(i,"Error rendering autocomplete. If it persists, contact admin."))}}let u=c.appendChild(i.createElement("div"));return await r(),c}import{store as Jt,authn as Kt}from"solid-logic";import{html as jt}from"lit";var qt=await ht(U(`/* The panes decide whether the control is visible -- they hide it until its
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
`,"text/css")),q=class extends ut{static properties={noun:{},message:{},confirm:{type:Boolean},deleteAction:{attribute:!1}};constructor(){super(),this.noun="item",this.message=null,this.confirm=!0,this.deleteAction=null}static styles=qt;click(){this.onClick()}connectedCallback(){super.connectedCallback(),this.setAttribute("data-testid","deleteButtonWithCheck")}render(){return jt`
      <button type="button" title=${`Remove this ${this.noun}`} @click=${this.onClick}>
        <img src=${O.iconBase+"noun_2188_red.svg"} alt="" />
        <span class="sr-only">Remove this ${this.noun}</span>
      </button>
    `}async onClick(){let n=this.message??`Really delete this ${this.noun}?`;if(!(this.confirm&&!await k(n)))try{await this.deleteAction?.()}catch(o){C("Error deleting "+this.noun+". Stack: "+o),$(`Failed to delete ${this.noun}. If it persists, contact your admin.`)}}};customElements.get("contacts-pane-delete-button")||customElements.define("contacts-pane-delete-button",q);function V(t,n,o,e,r={}){let a=t.createElement("contacts-pane-delete-button");return a.noun=o,a.deleteAction=e,a.confirm=r.confirm??!0,r.message&&(a.message=r.message),n.classList.add("hoverControl"),n.appendChild(a),a}import"rdflib";import{authn as Vt,store as Qt}from"solid-logic";var B=R,w=Qt,ct,Xt={},z=null,_t=null,T=null,dt=null;function Wn({book:t,dom:n,selectedGroups:o,ulPeople:e,cardMain:r,dataBrowserContext:a}){n&&(ct=n),o&&(Xt=o),e&&(z=e),r&&(_t=r),a&&(dt=a),T=t}function Nn(t){return w.statementsMatching(null,null,null,t.doc()).length>0?vt(w,t).length:null}async function Gn(t,n){for(let o of t){let e=w.sym(o);try{e=await yt(e,n)}catch{$("Error adding to group. Make sure you are adding a contact URI.")}e&&ot(z)}}function Un(t,n){let o=[];if(n.foreignGroup&&o.push(["",w.any(n.foreignGroup,B.vcard("fn")),n.foreignGroup]),t){let e=w.any(t,B.vcard("groupIndex")),a=(t?w.each(t,B.vcard("includesGroup"),null,e):[]).map(i=>[t,w.any(i,B.vcard("fn")),i]);o=o.concat(a),o.sort()}return o.map(e=>e[2])}async function St(t){let n=t&&w.any(t,B.vcard("groupIndex"));if(n){await w.fetcher.load(n);let o=t?w.each(t,B.vcard("includesGroup"),null,n):[];return await w.fetcher.load(o),o}else return[]}function ot(t,n=null,o=!0){let e=t||z;if(!e||typeof e.refresh!="function"){H("refreshNames called with invalid ulPeople:",e);return}e.refresh(o)}function Tn(t,n,o){if(!o)return;let e=t||z;e&&typeof e.markSelected=="function"&&e.markSelected(n),o.showLoading({wide:!0});let r;try{r=T?Rt(n):n}catch(a){o.showError("Cannot load contact: "+a.message);return}w.fetcher.nowOrWhenFetched(r.doc(),void 0,(a,i)=>{if(!a){C("Failed to load contact card: "+r+". Stack: "+i),o.showError("Failed to load contact. If it persists, contact your admin.");return}o.showContent(Yt(r,"contact"),{wide:!0,kind:"contact"})})}function zn(t){let n=t;try{n=T?Rt(t):t}catch{}window.open(n.uri,"_blank","noopener")}async function On(t){let n=_t;if(!await k("Really delete this contact?"))return;let o=t.dir(),e=w.any(t,B.vcard("fn"));M("We are about to delete the contact "+e);let r=[];try{await St(T);let a=w.any(T,B.vcard("nameEmailIndex"));await w.fetcher.load(a),lt(t).forEach(c=>{j(w,t,c.doc()).forEach(m=>{j(w,m,c.doc()).length===1&&(r=r.concat(w.statementsMatching(c,B.vcard("hasMember"),m,c.doc())))})}),await w.updater.updateMany(r)}catch(a){C("Error removing contact from its groups. Stack: "+a),n?.showError("Failed to remove the contact from its groups. If it persists, contact your admin.");return}try{await gt(t)}catch{n?.showError("Failed to delete contact. If it persists, contact your admin.");return}try{await bt(w,o)}catch{n?.showError("Failed to delete contact. If it persists, contact your admin.");return}ot(z,n),n?.showMessage("Contact data deleted.")}function Fn(t){let n=t||z;n&&typeof n.clearSelection=="function"&&n.clearSelection()}function Yt(t,n){let e=dt.session.paneRegistry.byName(n).render(t,dt);return e.classList.add("renderPane"),e}function Rt(t){let n=w.allAliases(t),o=T.dir().uri;for(let e=0;e<n.length;e++)if(n[e].uri.slice(0,o.length)===o)return n[e];throw new Error("No local URI for "+t)}async function Hn(t,n){let o=await St(t);if(o&&o.length>0){let{del:e,ins:r}=await Ct(o);if(Vt.currentUser()&&e.length){let a=ct.createElement("div");V(ct,a,"contact",async()=>{await w.updater.updateMany(e,r),M("Deleted "+e.length+" bad statements from groups")},{message:"Clean up "+e.length+" bad statement(s) in the group files?"}),n.addNotice(a)}}}Z(U(`/* \u2500\u2500 Group Membership Section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

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
`,"text/css"));var I=R,Zt=Jt;function lt(t,n=Zt){let o=n.statementsMatching(null,I.owl("sameAs"),t).map(r=>r.why).concat(n.each(null,I.vcard("hasMember"),t));return o=[...new Set(o.map(r=>ft(r.uri)))].map(r=>n.sym(r)),o}async function Kn(t,n,o){let e=o||null;async function r(s,l){let b=m.any(s,I.vcard("fn")),E=m.any(l,I.vcard("fn")),S=m.each(null,I.owl("sameAs"),s,l.doc()),v=[];S.forEach(f=>{m.statementsMatching(f,I.owl("sameAs"),s,l.doc())&&(v=v.concat(f))}),v=st(m,s).map(f=>f.value);let D=v.map(f=>m.sym(f)),Q=[s].concat(D).flatMap(f=>m.each(null,I.vcard("hasMember"),f));if(Q=[...new Set(Q.map(f=>f.uri))].map(f=>m.sym(f)),Q.length<2){$("Must be a member of at least one group.  Add to another group first.");return}let N="Remove "+b+" from group "+E+"?";if(await k(N)){let f=m.statementsMatching(s,void 0,void 0,l.doc()).concat(m.statementsMatching(void 0,void 0,s,l.doc()));v.forEach(A=>{m.statementsMatching(A,I.owl("sameAs"),void 0,l.doc()).length<2&&(f=f.concat(m.statementsMatching(void 0,void 0,A,l.doc())))});try{await m.updater.update(f,[])}catch(A){let mt="Error removing member from group "+l+": "+A;u.appendChild(F.errorMessageBlock(d,mt,"pink"));return}M("Removed "+b+" from group "+E),m.fetcher.unload(l.doc()),await m.fetcher.load(l.doc()),i(),ot(e)}}function a(s){let l=m.any(s,I.vcard("fn")),b=l?l.value:s.uri,E=d.createElement("li");E.classList.add("group-membership-item");let S=d.createElement("button");S.setAttribute("type","button"),S.classList.add("allGroupsButton","actionButton","btn-secondary","action-button-focus"),S.textContent=b,S.title=b,E.appendChild(S);let v=d.createElement("div");v.classList.add("group-membership-toolbar");let D=F.linkIcon(d,s);return D.setAttribute("title","Link to "+b),v.appendChild(D),Kt.currentUser()&&V(d,v,"membership in "+b,async()=>{await r(t,s)},{confirm:!1}),E.appendChild(v),E}function i(s=null){u.innerHTML="";let l=d.createElement("h3");l.classList.add("group-membership-header"),l.textContent="Part of groups",u.appendChild(l);let b=d.createElement("ul");b.classList.add("group-pills-wrapper"),u.appendChild(b),s=s||lt(t,m),s.length===0?b.innerHTML="<span>Not part of any Address Book group.</span>":b.innerHTML="",s.forEach(E=>{b.appendChild(a(E))})}async function c(s=null){if(!s&&(s=m.any(void 0,I.vcard("includesGroup")),!s))return[];let l=m.any(s,I.vcard("groupIndex")),b=s?m.each(s,I.vcard("includesGroup"),null,l):[];return await m.fetcher.load(b),b}let{dom:d}=n,m=n.session.store,u=d.createElement("div");return u.classList.add("group-membership-container"),await c(),u.refresh=i,i(),u}export{cn as a,dn as b,yt as c,vt as d,gn as e,wn as f,Wn as g,Nn as h,Gn as i,Un as j,ot as k,Tn as l,zn as m,On as n,Fn as o,Hn as p,Kn as q};
