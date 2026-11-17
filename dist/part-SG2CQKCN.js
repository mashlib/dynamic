import{a as V,b as H,c as K}from"./part-GSHDQMQY.js";import{a as ye,b as W,c as ke,d as k,g as Ce,h as $e,i as Ge,j as Se,k as $,l as _e,m as Ee,n as Ae,o as Le,p as Ie}from"./part-BS4ZCWSI.js";import"./part-S6EAAFHX.js";import"./part-65PJWB3H.js";import"./part-MLTE2ZTF.js";import"./part-JII5LI4F.js";import{a as y,c as g,d as u,e as te,f as M,g as ge,h as fe,i as be,l as ve,m as we,n as xe}from"./part-IPTG737N.js";import"./part-DUP4CQ5F.js";import"./part-S6D6LJ4G.js";import"./part-3GXLJ46X.js";import"./part-DUP4CQ5F.js";import"./part-4RHLBPWQ.js";import{a as ue,b as de,c as ee}from"./part-BC7GSLCS.js";import"./part-4MBXPQ3J.js";import"./part-TKTGPRZR.js";import"./part-GEEMM4JM.js";import{H as D,d as w}from"./part-D7Z64I5T.js";import"./part-7MK2NELE.js";import"./part-ZQLT3JNE.js";import"./part-V2462Q6D.js";import{a}from"./part-VJTDSXSH.js";import"./part-Y2MD4J7K.js";import{a as he,b as pe,f as S,g as me,i as _}from"./part-AVHV3I4Q.js";import"./part-G7QL3VVZ.js";import"./part-NJPCHXFX.js";import"./part-6HVGRC2X.js";import"./part-6NERXNP3.js";import"./part-YM77XAUU.js";import"./part-GWZG2FUI.js";import"./part-SX7PWH6P.js";import"./part-AHAYGN5G.js";import{b as h}from"./part-5ZTE77ED.js";import{c}from"./part-USTJ2YCK.js";import{html as ce}from"lit";import{authn as Et,store as At}from"solid-logic";import{html as Ne,nothing as Ke}from"lit";var Ze=await u(c(`:host {
    solid-ui-dialog-content p {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-xs);
        font-weight: 400;
        text-align: center;

        &.error {
            color: var(--solid-ui-color-red-500);
        }
    }

    solid-ui-dialog-footer solid-ui-button {
        width: 100%;
    }
}
`,"text/css")),E=class extends _{static properties={book:{},name:{state:!0},loading:{state:!0},error:{state:!0}};constructor(){super(),this.book=null,this.name="",this.loading=!1,this.error=null}static styles=Ze;render(){if(!this.book)throw new Error("Book is required for <contacts-pane-new-group-modal>");return Ne`
      <solid-ui-dialog title="New Group">
        <form @submit=${this.onSubmit}>
          <solid-ui-dialog-content>
            <solid-ui-input
              required
              name="name"
              label="Group name"
              .value=${this.name}
              @input=${this.onNameChanged}
            ></solid-ui-input>
            ${this.error?Ne`<p class="error">${this.error}</p>`:Ke}
          </solid-ui-dialog-content>
          <solid-ui-dialog-footer>
            <solid-ui-button type="submit" ?loading=${this.loading}>Create Group</solid-ui-button>
          </solid-ui-dialog-footer>
        </form>
      </solid-ui-dialog>
    `}onNameChanged(e){let{value:t}=e.target;this.name=typeof t=="string"?t:""}async onSubmit(e){e.preventDefault(),this.error=null,this.loading=!0;try{if(!this.book)throw new Error("Book is required for <contacts-pane-new-group-modal>");let t=await W(this.book,this.name);this.close(t)}catch(t){console.error(t),this.error="Error saving group. If it persists, contact your admin."}finally{this.loading=!1}}};customElements.get("contacts-pane-new-group-modal")||customElements.define("contacts-pane-new-group-modal",E);var qe=E;import{html as Ye}from"lit";var Xe=await u(c(`:host {
    /* The ACL editor is a table that needs room: without a floor it collapses
       to a few hundred pixels and every label wraps. Cap it against the
       viewport so it still fits on small screens, and scroll rather than
       pushing the dialog off screen. */
    solid-ui-dialog-content {
        min-width: min(38rem, 80vw);
        max-height: 70vh;
        overflow: auto;
    }
}
`,"text/css")),A=class extends _{static properties={content:{attribute:!1}};constructor(){super(),this.content=null}static styles=Xe;connectedCallback(){super.connectedCallback(),this.content&&this.content.parentNode!==this&&this.appendChild(this.content)}render(){return Ye`
      <solid-ui-dialog title="Sharing">
        <solid-ui-dialog-content>
          <slot></slot>
        </solid-ui-dialog-content>
      </solid-ui-dialog>
    `}};customElements.get("contacts-pane-sharing-modal")||customElements.define("contacts-pane-sharing-modal",A);var Te=A;import{html as pt}from"lit";import{html as se,nothing as ut}from"lit";import{store as Je}from"solid-logic";import*as Y from"rdflib";import{isNamedNode as Qe}from"rdflib";var r=Je,f=a,X=f.vcard;function G(o){return Qe(o)}function Z(o,e){let t=r.each(o,f.vcard(e)).find(G);if(!t)throw new Error("Address book has no "+e);return t}async function Be(o,e){let t=Z(o,"nameEmailIndex");await r.fetcher.load(t),e("People index has been loaded")}function De(o,e,t){let n=r.each(void 0,X("inAddressBook"),o).length;t(""+n+" contacts loaded. ");let s=Ue(o);t(""+s.length+" total groups. "),t(""+Me(e).length+" selected groups. ")}function Me(o){return Object.keys(o).filter(e=>o[e])}async function Oe(o,e){let t=[];for(let s of Me(o)){let i=r.sym(s),l=k(r,i);e(w.label(i)+": "+l.length+" members");for(let d of l)e(w.label(d)),t.push(et(d,e))}let n=(await Promise.all(t)).filter(s=>!s).length;if(n)throw new Error(n+" of "+t.length+" contacts could not be fixed")}function et(o,e){return new Promise(t=>{de.fixIndividualCardACL(o,n=>{e(n),n.startsWith("Nice - same ACL")&&t(!0)},(n,s)=>{n?e("Success for "+w.label(o)):(g("Failure for "+o+": "+s),e("Failure for "+o+": "+s)),t(n)})})}function Ue(o){let e=r.each(o,X("includesGroup")).filter(G);return[...new Set(e.map(n=>ge(n.uri)))].map(n=>r.sym(n))}async function ne(o,e){let t=Z(o,"groupIndex"),n=Z(o,"nameEmailIndex");try{await r.fetcher.load([n,t]);let p=r.each(o,f.vcard("includesGroup")).filter(G);await r.fetcher.load(p)}catch(p){throw g("Error loading groups. Stack: "+p),e("Error loading groups or name index. If it persists, contact your admin."),p}let s={},i=[],l=Ue(o);e(""+l.length+" total groups. ");for(let p of l){let B=k(r,p);e(w.label(p)+": "+B.length+" members");for(let Q of B)r.allAliases(Q).forEach(He=>{s[He.uri]=p})}let d=r.each(void 0,X("inAddressBook"),o).filter(G);e(""+d.length+" total contacts");for(let p of d)s[p.uri]||(i.push(p),e("   groupless "+w.label(p)));return e(""+i.length+" groupless contacts."),i}async function ze(o,e,t){let n=await ne(o,e);if(n.length===0)return e("No groupless contacts found."),!1;if(!await t(`Add the ${n.length} contacts without groups to a 'No group' group?`))return!1;let s=await W(o,"No group");for(let i of n)e("   adding "+w.label(i)),await ke(i,s);return e("People moved to group."),!0}async function Fe(o,e,t){let n={book:o,cards:[],duplicates:[],definitive:{},nameless:[],uniques:[],uniqueSet:{},uniquesSet:{}};n.nameEmailIndex=Z(o,"nameEmailIndex"),e("Loading name index..."),await r.fetcher.load(n.nameEmailIndex),e("Loaded name index."),n.groupObjects=tt(o),e("Loading "+n.groupObjects.length+" groups... "),await r.fetcher.load(n.groupObjects),ot(n,e),nt(n,e),await st(n,e,t),await rt(n,e),await lt(n,e),e("Done!")}function tt(o){if(!o)return[];let t=r.each(o,f.vcard("includesGroup")).filter(G).map(n=>[o,r.any(n,f.vcard("fn")),n]);return t.sort(),t.map(n=>n[2]).filter(G)}function ot(o,e){o.cards=r.each(void 0,X("inAddressBook"),o.book).filter(G),e(""+o.cards.length+" total contacts");for(let t of o.cards){let n=r.anyValue(t,f.vcard("fn"));if(!n){o.nameless.push(t);continue}o.definitive[n]===t||(o.definitive[n]?o.duplicates.push(t):o.definitive[n]=t)}o.duplicateSet={};for(let t of o.duplicates)o.duplicateSet[t.uri]=t;o.namelessSet={};for(let t of o.nameless)o.namelessSet[t.uri]=t;for(let t of o.cards)!o.duplicateSet[t.uri]&&!o.namelessSet[t.uri]&&(o.uniques.push(t),o.uniqueSet[t.uri]=t);e("Uniques: "+o.uniques.length),e(""+o.nameless.length+" nameless contacts."),e(""+o.duplicates.length+" name-duplicate contacts, leaving "+(o.cards.length-o.duplicates.length))}function nt(o,e){e("Groups loaded");for(let n of o.uniques)o.uniquesSet[n.uri]=!0;o.groupMembers=[],r.each(null,f.vcard("hasMember")).forEach(n=>{o.groupMembers=o.groupMembers.concat(k(r,n))}),e("  Naive group members "+o.groupMembers.length);let t={};for(let n of o.groupMembers)t[n.uri]=n;e("  Compact group members "+Object.keys(t).length)}async function st(o,e,t){o.nameLessIndex={},o.namelessUniques=[],o.nameLessZeroData=[],o.nameOnlyErrors=[],o.nameOnlyDuplicatesGroupDiff=[],e("Nameless to check: "+o.nameless.length);for(let n of o.nameless){let s=await it(o,n,e);e("    Nameless check returns "+s)}if(e("namelessUniques: "+o.namelessUniques.length),o.namelessUniques.length!==0&&await t("Add all "+o.namelessUniques.length+" nameless contacts to the rescued set?")){o.uniques=o.uniques.concat(o.namelessUniques);for(let n of o.namelessUniques)o.uniqueSet[n.uri]=!0}}async function it(o,e,t){try{await r.fetcher.load(e)}catch(d){return t("Cant load a nameless card!: "+d),o.nameOnlyErrors.push(e),!1}t(" Nameless check "+e);let n={};n[f.vcard("hasUID").uri]=!0,n[f.dc("created").uri]=!0,n[f.dc("modified").uri]=!0;let s=r.statementsMatching(null,null,null,e.doc()).filter(d=>!n[d.predicate.uri]);if(!s.length)return t("  Zero length "+e),o.nameLessZeroData.push(e),!1;let i=new Y.Serializer(r).setBase(e.doc().uri).statementsToN3(s),l=o.nameLessIndex[i];if(l){t("  Matches with "+l);let d=r.each(null,f.vcard("hasMember"),e),p=r.each(null,f.vcard("hasMember"),l);for(let B of d)if(!p.some(Q=>Q.sameTerm(B)))return t("This one groups: "+d),t("Other one groups: "+p),t("Cant skip this one because it has a group, "+B+", which the other does not."),o.nameOnlyDuplicatesGroupDiff.push(e),!1;y("Group check done -- exact duplicate: "+e)}else t("First nameless like: "+e.doc()),t("___________________________________________"),t(i),t("___________________________________________"),o.nameLessIndex[i]=e,o.namelessUniques.push(e);return!0}async function rt(o,e){let t=r.sym(o.book.dir().uri+"clean-people.ttl");try{let n=[];for(let l of o.uniques)n=n.concat(r.connectedStatements(l,o.nameEmailIndex));let s=new Y.Serializer(r).setBase(o.nameEmailIndex.uri);e("Serializing index of uniques...");let i=s.statementsToN3(n);await r.fetcher.webOperation("PUT",t,{data:i,contentType:"text/turtle"}),e("Done uniques log "+t)}catch(n){throw e("Error saving uniques: "+n),n}}async function at(o,e,t){let n=r.sym(t.uri.replace("/Group/","/NewGroup/"));try{let s=[];for(let d of o.uniques)s=s.concat(r.connectedStatements(d,t.doc()));let i=new Y.Serializer(r).setBase(t.uri);e("   Regenerating group of uniques..."+n);let l=i.statementsToN3(s);await r.fetcher.webOperation("PUT",n,{data:l,contentType:"text/turtle"}),e("     Done uniques group "+n)}catch(s){throw e("Error saving "+n+": "+s),s}}function lt(o,e){return e("Saving ALL GROUPS"),Promise.all(o.groupObjects.map(t=>at(o,e,t)))}var dt=await u(c(`:host {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.statsLog[hidden] {
  display: none;
}

.statsLog {
  margin-top: var(--spacing-md);
  background-color: var(--color-background);
}

.statsLog pre {
  font-size: var(--solid-ui-font-size-sm);
  padding: var(--spacing-md);
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  max-width: 100%;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}
`,"text/css")),ht=[{id:"load-index",label:"Load main index",run:(o,e)=>Be(e,o.log)},{id:"stats",label:"Statistics",run:(o,e)=>De(e,o.selectedGroups,o.log)},{id:"check-access",label:"Check individual contact access of selected groups",run:o=>Oe(o.selectedGroups,o.log)},{id:"find-duplicates",label:"Find duplicate contacts",run:(o,e)=>Fe(e,o.log,M)},{id:"find-groupless",label:"Find contacts with no group",run:async(o,e)=>{await ne(e,o.log),o.log("Groupless list finished.")}},{id:"fix-groupless",label:"Put all individuals with no group in a new group",run:async(o,e)=>{await ze(e,o.log,M)&&o.dispatchEvent(new CustomEvent("groups-changed",{bubbles:!0,composed:!0}))}}],O=class extends h{static properties={book:{attribute:!1},selectedGroups:{attribute:!1},logLines:{state:!0},activeAction:{state:!0},runningAction:{state:!0},failed:{state:!0}};constructor(){super(),this.book=null,this.selectedGroups={},this.logLines=[],this.activeAction=null,this.runningAction=null,this.failed=!1}static styles=dt;log=e=>{this.logLines=[...this.logLines,e]};render(){return se`
      <div class="buttons">
        ${ht.map(e=>this.renderAction(e))}
      </div>
      <div class="statsLog" ?hidden=${this.logLines.length===0}>
        <pre aria-live="polite">${this.logLines.join(`
`)}</pre>
      </div>
    `}renderAction(e){let t=this.activeAction===e.id;return se`
      <solid-ui-button
        variant=${t&&!this.failed?"primary":"secondary"}
        ?loading=${this.runningAction===e.id}
        ?disabled=${this.runningAction!==null&&this.runningAction!==e.id}
        @click=${()=>this.onAction(e)}
      >${e.label}</solid-ui-button>
      ${t&&this.failed?se`<span class="sr-only" role="alert">${e.label} failed</span>`:ut}
    `}async onAction(e){if(!(this.runningAction||!this.book)){this.activeAction=e.id,this.runningAction=e.id,this.failed=!1,this.logLines=[];try{await e.run(this,this.book)}catch(t){g('Tools action "'+e.id+'" failed. Stack: '+t),this.failed=!0,this.log("Failed: "+(t.message||t)+". If it persists, contact your admin.")}finally{this.runningAction=null}}}};customElements.get("contacts-pane-tools")||customElements.define("contacts-pane-tools",O);var mt=await u(c(`:host {
    /* solid-ui's dialog only has a min-width, and the wrapping buttons and log
       would stretch it across the viewport. Fix the width so the dialog keeps
       its size as the log grows, and scroll rather than push it off screen. */
    solid-ui-dialog-content {
        width: min(40rem, 80vw);
        max-height: 70vh;
        overflow: auto;
    }
}
`,"text/css")),L=class extends _{static properties={book:{attribute:!1},selectedGroups:{attribute:!1},onGroupsChanged:{attribute:!1}};constructor(){super(),this.book=null,this.selectedGroups={},this.onGroupsChanged=()=>{}}static styles=mt;render(){return pt`
      <solid-ui-dialog title="Tools">
        <solid-ui-dialog-content>
          <contacts-pane-tools
            .book=${this.book}
            .selectedGroups=${this.selectedGroups}
            @groups-changed=${()=>this.onGroupsChanged()}
          ></contacts-pane-tools>
        </solid-ui-dialog-content>
      </solid-ui-dialog>
    `}};customElements.get("contacts-pane-tools-modal")||customElements.define("contacts-pane-tools-modal",L);var Re=L;import{html as N,nothing as re}from"lit";import{authn as wt}from"solid-logic";import{ContextConsumer as gt}from"@lit/context";import{html as ie,nothing as ft}from"lit";import"@lit/context";var bt=await u(c(`:host {
    solid-ui-dialog-content p {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-xs);
        font-weight: 400;
        text-align: center;

        &.error {
            color: var(--solid-ui-color-red-500);
        }
    }

    solid-ui-dialog-footer solid-ui-button {
        width: 100%;
    }
}
`,"text/css")),vt=[{value:"person",label:"Person"},{value:"organization",label:"Organization"}],I=class extends h{static properties={book:{},selectedGroups:{},contactType:{state:!0},name:{state:!0},loading:{state:!0},error:{state:!0}};static styles=bt;dialogTrait;constructor(){super(),this.book=null,this.selectedGroups=null,this.contactType="organization",this.name="",this.loading=!1,this.error=null,this.context=he,new gt(this,{context:pe,subscribe:!0,callback:e=>{this.context=e}}),this.dialogTrait=this.addTrait(new me(this,{getContext:()=>this.context}))}render(){if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-add-contact-modal>");return ie`
      <solid-ui-dialog title="Add Contact">
        <form @submit=${this.onSubmit}>
          <solid-ui-dialog-content>
            <p>The new contact is added to the already selected group.</p>
            <solid-ui-combobox
              select-only
              name="type"
              label="Contact type"
              .value=${this.contactType}
              @change=${this.onContactTypeChanged}
            >
              ${vt.map(e=>ie`<solid-ui-combobox-option value=${e.value}
                    >${e.label}</solid-ui-combobox-option
                  >`)}
            </solid-ui-combobox>
            <solid-ui-input
              required
              name="name"
              label=${this.contactType==="person"?"Individual name":"Organization name"}
              .value=${this.name}
              @input=${this.onNameChanged}
            ></solid-ui-input>
            ${this.error?ie`<p class="error">${this.error}</p>`:ft}
          </solid-ui-dialog-content>
          <solid-ui-dialog-footer>
            <solid-ui-button type="submit" ?loading=${this.loading}>Add Contact</solid-ui-button>
          </solid-ui-dialog-footer>
        </form>
      </solid-ui-dialog>
    `}onContactTypeChanged(e){this.contactType=e.target.value}onNameChanged(e){let{value:t}=e.target;this.name=typeof t=="string"?t:""}async onSubmit(e){e.preventDefault(),this.error=null,this.loading=!0;try{if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-add-contact-modal>");let t=await ye(this.book,this.name,this.selectedGroups,this.contactType==="organization"?a.vcard("Organization"):a.vcard("Individual"));this.dialogTrait.close(t)}catch(t){console.error(t),this.error="Error saving contact. If it persists, contact your admin."}finally{this.loading=!1}}};customElements.get("contacts-pane-add-contact-modal")||customElements.define("contacts-pane-add-contact-modal",I);var je=I;function b(o,e){customElements.get(o)||customElements.define(o,class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<style>:host { display: inline-flex; }</style>"+e}})}b("icon-lucide-book-user",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 13a3 3 0 1 0-6 0"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/></g></svg>');b("icon-lucide-ellipsis-vertical",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></g></svg>');b("icon-lucide-external-link",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>');b("icon-lucide-globe",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>');b("icon-lucide-lock",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g></svg>');b("icon-lucide-mail",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>');b("icon-lucide-plus",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/></svg>');b("icon-lucide-search",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>');b("icon-lucide-trash-2",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>');b("icon-lucide-user",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g></svg>');var xt=await u(c(`:host {
    display: block;
    background: var(--solid-ui-color-white);
    padding: var(--spacing-2xs) var(--spacing-sm);
    border-top-left-radius: var(--border-radius-full);
    border-top-right-radius: var(--border-radius-full);
    margin-bottom: 0;
    border-bottom: 1px solid var(--solid-ui-color-gray-200);

    header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-sm);
        margin-bottom: 0;
    }

    /* Heading and its subtitle stack, so the subtitle sits under the title
       rather than becoming a third item in the header's row. */
    .titles {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-3xs, 0.125rem);
        min-width: 0;
    }

    .titles p {
        margin: 0;
        color: var(--solid-ui-color-gray-500);
        font-size: var(--solid-ui-font-size-sm);
    }

    /* Title and its visibility badge share a line. */
    .titleRow {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        min-width: 0;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        height: 1.25rem; /* 20px */
        padding: 0 0.5rem;
        border-radius: 5px;
        font-size: var(--solid-ui-font-size-sm, 0.75rem);
        font-weight: var(--font-weight-medium, 500);
        white-space: nowrap;
        flex-shrink: 0;
    }

    /* Globe and lock marks, sized to the badge's text. */
    .badge icon-lucide-globe,
    .badge icon-lucide-lock {
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
    }

    .badge--public {
        background: #eff6ff;
        color: #51a2ff;
    }

    .badge--private {
        background: var(--solid-ui-color-gray-100, #f1f5f9);
        color: var(--solid-ui-color-gray-500, #62748e);
    }

    .actions {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-xs);
    }

    solid-ui-button {
        white-space: nowrap;
    }

    h2 {
        font-size: 1.5em;
        font-weight: var(--font-weight-bold, 600);
        color: var(--solid-ui-color-gray-700);
        line-height: var(--line-height-tight);
        margin-top: 0;
        margin-bottom: 0;
    }
}
`,"text/css")),U=class extends h{static properties={selectedGroupName:{},book:{attribute:!1},selectedGroups:{attribute:!1},aclSubject:{attribute:!1},loggedIn:{state:!0},visibility:{state:!0},toolsOpen:{state:!0},searchOpen:{state:!0}};constructor(){super(),this.selectedGroupName=null,this.book=null,this.selectedGroups=null,this.aclSubject=null,this.loggedIn=!1,this.visibility=null,this.toolsOpen=!1,this.searchOpen=!1}static styles=xt;visibilityLookup=0;connectedCallback(){super.connectedCallback(),wt.checkUser().then(e=>{e&&(this.loggedIn=!0,this.refreshVisibility(),this.dispatchEvent(new CustomEvent("user-resolved",{bubbles:!0,composed:!0,detail:{webId:e}})))})}updated(e){super.updated(e),e.has("aclSubject")&&this.refreshVisibility()}async refreshVisibility(){let e=++this.visibilityLookup;if(this.visibility=null,!this.aclSubject)return;let t=await be(this.aclSubject);e===this.visibilityLookup&&(this.visibility=t)}render(){return N`
      <header>
        <div class="titles">
          <div class="titleRow">
            <h2 id="addressBook-heading" tabindex="-1">${this.selectedGroupName??"All Contacts"}</h2>
            ${this.renderVisibilityBadge()}
          </div>
          <p>Search contacts by name, email, WebID, or profile URL</p>
        </div>
        <div class="actions">
          <solid-ui-button
            variant="ghost"
            aria-pressed=${this.searchOpen?"true":"false"}
            @click=${this.onToggleSearch}
          >
            <icon-lucide-search slot="left-icon"></icon-lucide-search>
            Search
          </solid-ui-button>
          <solid-ui-button
            variant="secondary"
            ?disabled=${!this.loggedIn}
            @click=${this.onAddContact}
          >
            <icon-lucide-plus slot="left-icon"></icon-lucide-plus>
            New Contact
          </solid-ui-button>
          ${this.book?this.renderMenu():re}
        </div>
      </header>
    `}renderMenu(){let e=!!this.selectedGroupName&&this.loggedIn;return V(e,N`
      <solid-ui-menu placement="bottom-end" distance="5">
        <solid-ui-button slot="trigger" variant="ghost" title="More actions">
          <span class="sr-only">More actions</span>
          <icon-lucide-ellipsis-vertical slot="icon"></icon-lucide-ellipsis-vertical>
        </solid-ui-button>

        <solid-ui-menu-item @solid-ui-select=${this.onSharing}>
          Sharing
        </solid-ui-menu-item>
        <solid-ui-menu-item
          ?selected=${this.toolsOpen}
          @solid-ui-select=${this.onTools}
        >
          Tools
        </solid-ui-menu-item>
        ${e?N`
            <solid-ui-menu-item @solid-ui-select=${this.onDeleteGroup}>
              <icon-lucide-trash-2 slot="left-icon"></icon-lucide-trash-2>
              Delete Group
            </solid-ui-menu-item>
          `:re}
      </solid-ui-menu>
    `)}renderVisibilityBadge(){if(!this.visibility)return re;let e=this.visibility==="public";return N`
      <span class="badge ${e?"badge--public":"badge--private"}">
        ${e?N`<icon-lucide-globe aria-hidden="true"></icon-lucide-globe>`:N`<icon-lucide-lock aria-hidden="true"></icon-lucide-lock>`}
        ${e?"Public":"Private"}
      </span>
    `}clearActiveAction(){this.toolsOpen=!1}onToggleSearch(){this.searchOpen=!this.searchOpen,this.dispatchEvent(new CustomEvent("search-toggled",{bubbles:!0,composed:!0,detail:{open:this.searchOpen}}))}onSharing(){this.request("sharing")}onTools(){this.toolsOpen=!0,this.request("tools")}request(e){this.dispatchEvent(new CustomEvent(`${e}-requested`,{bubbles:!0,composed:!0}))}onDeleteGroup(){this.dispatchEvent(new CustomEvent("delete-group-requested",{bubbles:!0,composed:!0}))}onAddContact(){if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-address-book-header>");S(je,{props:{book:this.book,selectedGroups:this.selectedGroups},onClose:e=>{e&&this.dispatchEvent(new CustomEvent("contact-added",{bubbles:!0,composed:!0,detail:{person:e}}))}})}};customElements.get("contacts-pane-address-book-header")||customElements.define("contacts-pane-address-book-header",U);import{html as z}from"lit";var F=class extends h{static properties={view:{state:!0},message:{state:!0},content:{state:!0},wide:{state:!0},notices:{state:!0}};constructor(){super(),this.view="empty",this.message="",this.content=null,this.wide=!0,this.notices=[]}contentKind=null;createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add("detailSection"),this.setAttribute("role","region"),this.setAttribute("aria-label","Details section")}get hasContact(){return this.contentKind==="contact"}showLoading({wide:e=!1}={}){this.transition("loading",{wide:e})}showMessage(e){this.transition("message"),this.message=e}showError(e){this.transition("error"),this.message=e}showContent(e,{wide:t=!1,kind:n="other"}={}){this.transition("content",{wide:t}),this.content=e,this.contentKind=n}clear(){this.transition("empty",{wide:!0})}addNotice(e){this.notices=[...this.notices,e]}clearUnlessContact(){this.hasContact||this.clear()}transition(e,{wide:t=!1}={}){this.view=e,this.wide=t,this.message="",this.content=null,this.contentKind=null,this.notices=[]}render(){return z`
      <div
        class="detailsSectionContent ${this.wide?"detailsSectionContent--wide":""}"
        role="region"
        aria-label="Details"
        aria-live="polite"
        aria-busy=${this.view==="loading"?"true":"false"}
      >
        ${this.notices}
        ${this.renderView()}
      </div>
    `}renderView(){switch(this.view){case"loading":return z`Loading...`;case"message":return z`${this.message}`;case"error":return z`<div class="detailsError" role="alert">${this.message}</div>`;case"content":return this.content;default:return this.renderEmpty()}}renderEmpty(){return z`
      <div class="detailsEmpty">
        <span class="detailsEmptyIcon" aria-hidden="true">
          <icon-lucide-book-user></icon-lucide-book-user>
        </span>
        <h3 class="detailsEmptyTitle">No contact selected</h3>
        <p class="detailsEmptyText">Select a contact from the list to view their profile, edit details, or send a message.</p>
      </div>
    `}};customElements.get("contacts-pane-details")||customElements.define("contacts-pane-details",F);import{html as q,nothing as J}from"lit";import{store as yt}from"solid-logic";var kt=await u(c(`/* The host keeps the .buttonSection class, so contactsPane.css still lays out
   the column. The group list now renders in here too, so the rules that used
   to live in contactsPane.css for .groupButtonsList and the group buttons have
   come along with it. */
/* The host (.buttonSection) is padded by contactsPane.css; the negative
   margins pull the border out to the component's real edges, and the extra
   padding puts the content back where it was. The title and the group filter
   share the header, so its border underlines both. */
.header {
    margin: 0 calc(-1 * var(--spacing-sm));
    padding: 9px calc(var(--spacing-sm));
    border-bottom: 1px solid var(--solid-ui-color-gray-200);
}

.heading {
    margin: 0;
    color: var(--solid-ui-color-gray-700);
    /* Mirrors the h2 in the address book header, so the two column titles read
       as one row. */
    font-size: 1.25em;
    font-weight: var(--font-weight-bold, 600);
    line-height: var(--line-height-tight);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.groupFilter {
    display: block;
    margin-top: var(--spacing-xs);
}

.groupButtonsList {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: var(--spacing-xs);
    list-style: none;
    margin: 0;
    padding: 0;
    /* Take whatever height the column has spare, so New Group and its
       separator sit at the bottom -- but never shrink below the groups,
       which would paint them over that footer; the column scrolls instead. */
    flex: 1 0 auto;
}

.groupButtonsList li {
    flex-shrink: 0;
}

.allGroupsButton,
.groupButton {
    min-height: var(--min-touch-target);
    padding: 9px var(--spacing-md);
    border: none;
    border-radius: var(--border-radius-full);
    background: transparent;
    color: var(--solid-ui-color-gray-500);
    font-weight: 500;
    font-size: var(--solid-ui-font-size-md);
    cursor: pointer;
    transition: all var(--animation-duration) ease;
    white-space: nowrap;
    flex-shrink: 0;
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);

    &:hover {
        background-color: var(--solid-ui-color-primary-hover);
    }

    &:focus-visible {
        outline: var(--focus-indicator-width) solid var(--solid-ui-color-primary);
        outline-offset: var(--outline-offset-sm);
        z-index: 1;
    }
}

/* Stacked items are full width, so push the count to the trailing edge. */
.groupButton {
    justify-content: space-between;
}

/* Selected, whether that is "everything" or one particular group. */
.allGroupsButton--active,
.groupButton[aria-pressed="true"] {
    background-color: var(--solid-ui-color-primary-selected);
    color: var(--solid-ui-color-primary);

    .groupCount {
        background-color: var(--solid-ui-color-white);
    }
}

/* Contact count badge. Absent entirely until the group's document has loaded,
   so it never shows a misleading 0. */
.groupCount {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.5em;
    padding: 0 0.4em;
    border-radius: var(--border-radius-full);
    background: var(--solid-ui-color-gray-200);
    font-size: 0.85em;
    font-variant-numeric: tabular-nums;
    line-height: 1.6;
}

solid-ui-button {
    white-space: nowrap;
    flex-shrink: 0;
}

/* Separates New Group from the group list above it. Negative margins take the
   border to the component's real edges, mirroring the header's. */
.newGroup {
    margin: var(--spacing-xs) calc(-1 * var(--spacing-sm)) 0;
    padding: var(--spacing-xs) var(--spacing-sm) 0;
    border-top: 1px solid var(--solid-ui-color-gray-200);
}

.error {
    margin: 0;
    padding: 0 var(--spacing-md);
    color: var(--solid-ui-color-red-500);
    font-size: var(--solid-ui-font-size-sm);
}
`,"text/css")),ae=yt,Pe=new WeakSet,R=class extends h{static properties={heading:{attribute:!1},book:{attribute:!1},options:{attribute:!1},selectedGroups:{attribute:!1},rows:{state:!0},busy:{state:!0},error:{state:!0},revision:{state:!0},filter:{state:!0}};constructor(){super(),this.heading=null,this.book=null,this.options={},this.selectedGroups={},this.rows=[],this.busy=!1,this.error=null,this.revision=0,this.filter=""}static styles=kt;connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.rows=Se(this.book,this.options).map(e=>{let t=ae.any(e,a.vcard("fn"));return{group:e,uri:e.uri,name:t?t.value:"Some group",count:$e(e)}}),this.revision++}async selectAll(){if(this.refresh(),!this.rows.length)return;this.error=null,this.busy=!0;let e=await Promise.all(this.rows.map(n=>this.load(n.group)));this.busy=!1;let t=this.rows.filter((n,s)=>!e[s]);if(t.length){console.error("Failed to load group documents:",t.map(n=>n.uri)),this.error="Failed to load all groups. If it persists, contact your admin.";return}for(let n of this.rows)this.selectedGroups[n.uri]=!0;this.refresh(),this.announceSelection()}get groupCount(){return this.rows.length}get allSelected(){return this.rows.length>0&&this.rows.every(e=>this.selectedGroups[e.uri])}get allCount(){let e=new Set,t=!1;for(let n of this.rows)if(n.count!==null){t=!0;for(let s of k(ae,n.group))e.add(s.uri)}return t?e.size:null}load(e){return new Promise(t=>{ae.fetcher.nowOrWhenFetched(e.doc(),void 0,n=>t(n))})}announceSelection(){$(null,null,!1),this.dispatchEvent(new CustomEvent("selection-changed",{bubbles:!0,composed:!0}))}wireDragAndDrop(e){return K(t=>{!t||Pe.has(t)||(Pe.add(t),D.makeDraggable(t,e),D.makeDropTarget(t,n=>Ge(n,e)))})}get visibleRows(){let e=this.filter.trim().toLowerCase();return e.length===0?this.rows:this.rows.filter(t=>t.name.toLowerCase().includes(e))}onFilterInput(e){this.filter=e.target.value?.toString()??""}render(){return q`
      <header class="header">
        ${this.heading?q`<h2 class="heading">${this.heading}</h2>`:J}
        <solid-ui-input
          class="groupFilter"
          type="search"
          aria-label="Filter groups"
          placeholder="Filter groups"
          .value=${this.filter}
          @input=${this.onFilterInput}
        ></solid-ui-input>
      </header>

      <button
        type="button"
        class="allGroupsButton ${this.allSelected?"allGroupsButton--active":""}"
        aria-label=${this.allCount===null?"All Contacts":`All Contacts, ${this.allCount} ${this.allCount===1?"contact":"contacts"}`}
        aria-pressed=${this.allSelected?"true":"false"}
        aria-busy=${this.busy?"true":"false"}
        @click=${this.onAllGroups}
      >
        <span class="groupName">All Contacts</span>
        ${this.allCount===null?J:q`<span class="groupCount" aria-hidden="true">${this.allCount}</span>`}
      </button>

      <ul class="groupButtonsList" role="list" aria-label="Groups list">
        ${H(this.visibleRows,e=>e.uri,e=>this.renderGroup(e))}
      </ul>

      ${this.error?q`<p class="error" role="alert">${this.error}</p>`:J}

      <div class="newGroup">
        <solid-ui-button variant="secondary" @click=${this.onNewGroup}>
          <icon-lucide-plus slot="left-icon"></icon-lucide-plus>
          New Group
        </solid-ui-button>
      </div>
    `}renderGroup(e){let t=!!this.selectedGroups[e.uri]&&!this.allSelected,n=e.count===null?e.name:`${e.name}, ${e.count} ${e.count===1?"contact":"contacts"}`;return q`
      <li
        role="listitem"
        aria-label=${n}
        class=${t?"selected":""}
        ${this.wireDragAndDrop(e.group)}
      >
        <button
          type="button"
          class="groupButton"
          aria-pressed=${t?"true":"false"}
          @click=${s=>this.onGroup(s,e)}
        >
          <span class="groupName">${e.name}</span>
          ${e.count===null?J:q`<span class="groupCount" aria-hidden="true">${e.count}</span>`}
        </button>
      </li>
    `}async onAllGroups(){this.allSelected||await this.selectAll()}async onGroup(e,t){if(e.preventDefault(),this.error=null,e.metaKey)this.selectedGroups[t.uri]=!this.selectedGroups[t.uri];else{for(let s in this.selectedGroups)delete this.selectedGroups[s];this.selectedGroups[t.uri]=!0}this.revision++,await this.load(t.group)||(console.error("Failed to load group document:",t.uri),this.error=`Failed to load "${t.name}". If it persists, contact your admin.`),this.refresh(),this.announceSelection()}onNewGroup(){this.dispatchEvent(new CustomEvent("new-group-requested",{bubbles:!0,composed:!0}))}};customElements.get("contacts-pane-group-bar")||customElements.define("contacts-pane-group-bar",R);import{html as x,nothing as le}from"lit";import{authn as Ct,store as $t}from"solid-logic";var Gt=await u(c(`/* The rows used to be built by the presenter and styled from contactsPane.css
   (.personLi and friends); those rules live here now. The host carries the
   column's flex/scroll behaviour that .peopleSection > ul used to have. */
:host {
    display: block;
    flex: 1 1 auto;
    min-height: 0;
    max-height: 70vh;
    overflow-y: auto;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
}

li {
    display: flex;
    align-items: center;
    padding: var(--spacing-xs);
    cursor: pointer;
}

li.selected {
    background-color: var(--solid-ui-color-gray-100);
}

li:focus-visible {
    outline: var(--focus-indicator-width) solid var(--solid-ui-color-primary);
    outline-offset: calc(-1 * var(--focus-indicator-width));
}

li.personLi--error {
    opacity: 0.5;
}

.avatar {
    width: 2.813rem /* 45px */;
    height: 2.813rem /* 45px */;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.avatar img {
    width: 2.5rem /* 40px */;
    height: 2.5rem /* 40px */;
    border-radius: 10px;
    object-fit: cover;
}

/* Placeholder for contacts without a picture: the same box an image fills. */
.avatar .avatarFallback {
    width: 2.5rem /* 40px */;
    height: 2.5rem /* 40px */;
    padding: 0.5rem;
    box-sizing: border-box;
    border-radius: 10px;
    background: var(--solid-ui-color-gray-200, #e0e0e0);
    color: var(--solid-ui-color-gray-600, #595959);
}

.identity {
    flex: 1;
    min-width: 0;
    margin-left: var(--spacing-sm);
}

.nameRow {
    display: flex;
    align-items: baseline;
    gap: var(--spacing-xs);
    min-width: 0;
}

.name {
    overflow: hidden;
    font-weight: 500;
    font-size: var(--font-size-base);
    white-space: nowrap;
    text-overflow: ellipsis;
}

/* Separates the name from the role; the row's gap spaces it on both sides. */
.roleDivider {
    align-self: center;
    flex-shrink: 0;
    width: 1px;
    height: 15px;
    background-color: var(--solid-ui-color-slate-200);
}

.role {
    overflow: hidden;
    font-size: var(--font-size-sm);
    color: var(--color-text-subtle, #595959);
    white-space: nowrap;
    text-overflow: ellipsis;
}

.email {
    display: flex;
    align-items: center;
    gap: var(--spacing-xxs);
    min-width: 0;
    font-size: var(--font-size-sm);
    color: var(--color-text-subtle, #595959);
}

/* Sized to the address beside it; the address truncates, the icon never shrinks. */
.email icon-lucide-mail {
    width: 0.875rem;
    height: 0.875rem;
    flex-shrink: 0;
}

.email span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.rowMenu {
    margin-left: auto;
    display: flex;
    align-items: center;
}
`,"text/css")),v=$t,We=new WeakSet,j=class extends h{static properties={selectedGroups:{attribute:!1},rows:{state:!0},filter:{state:!0},selectedUri:{state:!0},loggedIn:{state:!0},revision:{state:!0}};constructor(){super(),this.selectedGroups={},this.rows=[],this.filter="",this.selectedUri=null,this.loggedIn=!1,this.revision=0}static styles=Gt;connectedCallback(){super.connectedCallback(),Ct.checkUser().then(e=>{this.loggedIn=!!e})}refresh(e=!1){let t=new Set,n=[];for(let i of Object.keys(this.selectedGroups))if(this.selectedGroups[i])for(let l of k(v,v.sym(i)))t.has(l.uri)||(t.add(l.uri),n.push(l));n.sort(we);let s=new Set(this.rows.filter(i=>i.error).map(i=>i.uri));this.rows=n.map(i=>({person:i,uri:i.uri,name:xe(i)||"Unknown Name",error:s.has(i.uri)}));for(let i of this.rows)v.fetcher.nowOrWhenFetched(i.person.doc(),void 0,(l,d)=>{l||(g("Cannot load contact: "+i.person+". Stack: "+d),i.error=!0),this.revision++});this.revision++,e&&this.autoSelectSingleMatch()}applyFilter(e){this.filter=e??"",this.autoSelectSingleMatch()}markSelected(e){this.selectedUri=e?e.uri:null}clearSelection(){this.selectedUri=null}get visibleRows(){return this.rows.filter(e=>this.matchesFilter(e))}matchesFilter(e){let t=this.filter.trim().toLowerCase();if(t.length===0)return!0;let n=[e.name,...this.emailsFor(e.person),...this.urlsFor(e.person)].join(" ").toLowerCase();return t.split(/\s+/).every(s=>n.includes(s))}autoSelectSingleMatch(){let e=this.visibleRows;e.length===1&&this.select(e[0].person)}select(e){this.selectedUri=e.uri,this.dispatchEvent(new CustomEvent("person-selected",{bubbles:!0,composed:!0,detail:{person:e}}))}wireDrag(e){return K(t=>{!t||We.has(t)||(We.add(t),D.makeDraggable(t,e))})}render(){return x`
      <ul role="list" aria-label="People list">
        ${H(this.visibleRows,e=>e.uri,e=>this.renderRow(e))}
      </ul>
    `}emailsFor(e){return v.each(e,a.vcard("hasEmail")).map(t=>v.any(t,a.vcard("value"))??t).map(t=>String(t.value??"").replace(/^mailto:/,"")).filter(t=>t.includes("@"))}emailFor(e){return this.emailsFor(e)[0]??null}urlsFor(e){return[...v.each(e,a.vcard("url")).map(n=>v.any(n,a.vcard("value"))??n),...v.each(e,a.owl("sameAs"))].filter(n=>n.termType!=="BlankNode").map(n=>n.value)}renderRow(e){let t=v.any(e.person,a.vcard("hasPhoto")),n=this.emailFor(e.person),s=v.anyValue(e.person,a.vcard("role"));return x`
      <li
        role="listitem"
        tabindex="0"
        aria-label=${[e.name,s,n].filter(Boolean).join(", ")}
        class="personLi ${this.selectedUri===e.uri?"selected":""} ${e.error?"personLi--error":""}"
        @click=${()=>this.select(e.person)}
        @keydown=${i=>this.onRowKeydown(i,e)}
        ${this.wireDrag(e.person)}
      >
        <div class="avatar" aria-hidden="true">
          ${t?x`<img src=${t.value} alt="" />`:x`<icon-lucide-user class="avatarFallback"></icon-lucide-user>`}
        </div>
        <div class="identity">
          <div class="nameRow">
            <div class="name">${e.name}</div>
            ${s?x`<span class="roleDivider" aria-hidden="true"></span><div class="role">${s}</div>`:le}
          </div>
          ${n?x`<div class="email">
                <icon-lucide-mail aria-hidden="true"></icon-lucide-mail>
                <span>${n}</span>
              </div>`:le}
        </div>
        ${this.renderRowMenu(e)}
      </li>
    `}renderRowMenu(e){return x`
      <div
        class="rowMenu"
        @click=${t=>t.stopPropagation()}
        @keydown=${t=>t.stopPropagation()}
      >
        ${V(this.loggedIn,x`
          <solid-ui-menu placement="bottom-end" distance="5">
            <solid-ui-button slot="trigger" variant="ghost" title="More actions">
              <span class="sr-only">Actions for ${e.name}</span>
              <icon-lucide-ellipsis-vertical slot="icon"></icon-lucide-ellipsis-vertical>
            </solid-ui-button>

            <solid-ui-menu-item @solid-ui-select=${()=>this.request("open-contact-requested",e)}>
              <icon-lucide-external-link slot="left-icon"></icon-lucide-external-link>
              Open in new window
            </solid-ui-menu-item>
            ${this.loggedIn?x`
                <solid-ui-menu-item @solid-ui-select=${()=>this.request("delete-contact-requested",e)}>
                  <icon-lucide-trash-2 slot="left-icon"></icon-lucide-trash-2>
                  Delete contact
                </solid-ui-menu-item>
              `:le}
          </solid-ui-menu>
        `)}
      </div>
    `}onRowKeydown(e,t){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.select(t.person))}request(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:{person:t.person}}))}};customElements.get("contacts-pane-people-list")||customElements.define("contacts-pane-people-list",j);import{html as Ve,nothing as St}from"lit";var _t=await u(c(`/* The section padding the pane's .searchSection rule used to give the light
   DOM element, so the column layout is unchanged. */
:host {
    display: block;
    padding: var(--spacing-sm);
    padding-bottom: 0;
    margin-bottom: 0;
}

/* Positions the clear button over the trailing edge of the input. */
.searchDiv {
    position: relative;
}

solid-ui-input {
    width: 100%;
}

button {
    position: absolute;
    right: var(--spacing-sm);
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: transparent;
    font-size: var(--font-size-base);
    line-height: 1;
    padding: 0;
    cursor: pointer;
    color: var(--color-text-muted);
}

button:hover {
    color: var(--color-text);
}
`,"text/css")),P=class extends h{static properties={placeholder:{},text:{state:!0}};constructor(){super(),this.placeholder="Search by name, email, WebID, or profile URL",this.text=""}get input(){return this.renderRoot?.querySelector("solid-ui-input")??null}static styles=_t;get value(){return this.text}set value(e){this.text=e??""}clear(){this.text!==""&&(this.text="",this.announce())}focusInput(){this.input?.shadowRoot?.querySelector("input")?.focus()}render(){return Ve`
      <div class="searchDiv">
        <solid-ui-input
          type="search"
          aria-label="Search contacts"
          placeholder=${this.placeholder}
          .value=${this.text}
          @input=${this.onInput}
        ></solid-ui-input>
        ${this.text.length>0?Ve`
            <button type="button" aria-label="Clear search" @click=${this.onClear}>✕</button>
          `:St}
      </div>
    `}onInput(e){this.text=e.target.value?.toString()??"",this.announce()}onClear(){this.clear(),this.focusInput()}announce(){this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0,composed:!0,detail:{value:this.text}}))}};customElements.get("contacts-pane-search")||customElements.define("contacts-pane-search",P);var m=At,T=class extends h{static properties={book:{attribute:!1},options:{attribute:!1},dataBrowserContext:{attribute:!1},paneOptions:{attribute:!1},heading:{state:!0},ready:{state:!0},error:{state:!0},selectedGroupName:{state:!0},aclSubject:{state:!0},searchOpen:{state:!0}};constructor(){super(),this.book=null,this.options={},this.dataBrowserContext=null,this.paneOptions={},this.heading="",this.ready=!1,this.error=null,this.selectedGroupName=null,this.aclSubject=null,this.searchOpen=!1}get groupBar(){return this.renderRoot?.querySelector("contacts-pane-group-bar")??null}get header(){return this.renderRoot?.querySelector("contacts-pane-address-book-header")??null}get search(){return this.renderRoot?.querySelector("contacts-pane-search")??null}get peopleList(){return this.renderRoot?.querySelector("contacts-pane-people-list")??null}get details(){return this.renderRoot?.querySelector("contacts-pane-details")??null}selectedGroups={};me=Et.currentUser();wired=!1;get context(){if(!this.dataBrowserContext)throw new Error("dataBrowserContext is required for <contacts-pane-address-book>");return this.dataBrowserContext}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.load()}async load(){let e=this.book??this.options.foreignGroup;if(!e){this.error="No address book to show.";return}if(this.book)try{await m.fetcher.load(this.book)}catch(n){g("Error loading address book. Stack: "+n),this.error="Failed to load address book.";return}let t=m.any(e,a.dc("title"))||m.any(e,a.vcard("fn"));if(this.paneOptions.solo&&t&&typeof document<"u"&&(document.title=t.value),this.heading=t?t.value:w.label(a.vcard("AddressBook")),this.aclSubject=e,this.options.foreignGroup&&(this.selectedGroups[this.options.foreignGroup.uri]=!0),typeof document<"u"&&document.location&&(""+document.location).slice(0,16)==="http://localhost"){let n=m.any(e,a.acl("owner"));n&&(this.me=n)}this.ready=!0}updated(e){super.updated(e),this.ready&&!this.wired&&(this.wired=!0,this.wireUp())}wireUp(){Ce({book:this.book,dom:this.ownerDocument,selectedGroups:this.selectedGroups,ulPeople:this.peopleList,cardMain:this.details,dataBrowserContext:this.dataBrowserContext}),this.dataBrowserContext&&(this.dataBrowserContext.ulPeople=this.peopleList),Ie(this.book,this.details).then(()=>{y("Async checkDataModel done.")});let e=this.book&&m.any(this.book,a.vcard("groupIndex"));this.book?e&&m.fetcher.nowOrWhenFetched(e.uri,this.book,(t,n)=>{if(!t){g("Error loading group index. Stack: "+n),te("Error loading group index. If it persists, contact admin.");return}this.groupBar.selectAll()}):($(this.peopleList,null),y("No book, only one group -> hide list of groups"))}render(){return this.error?ce`<p class="detailsError" role="alert">${this.error}</p>`:this.ready?ce`
      <main id="main-content" class="addressBook-grid" role="main" aria-label="Address Book" tabindex="-1">
        <section class="addressBookSection section-bg" role="region" aria-label="Groups" tabindex="-1">
          <contacts-pane-group-bar
            class="buttonSection"
            .heading=${this.heading}
            .book=${this.book}
            .options=${this.options}
            .selectedGroups=${this.selectedGroups}
            @selection-changed=${this.onSelectionChanged}
            @new-group-requested=${this.onNewGroupRequested}
          ></contacts-pane-group-bar>
        </section>

        <!-- Everything right of the address book shares one title bar, so the
             header spans the people list and the contact detail rather than
             being squeezed into the people column on its own. -->
        <div class="contentArea">
          <contacts-pane-address-book-header
            .book=${this.book}
            .selectedGroups=${this.selectedGroups}
            .selectedGroupName=${this.selectedGroupName}
            .aclSubject=${this.aclSubject}
            @user-resolved=${e=>{this.me=e.detail.webId}}
            @search-toggled=${this.onSearchToggled}
            @contact-added=${e=>this.showNewContact(e.detail.person)}
            @delete-group-requested=${this.deleteSelectedGroup}
            @sharing-requested=${this.showSharing}
            @tools-requested=${this.showTools}
          ></contacts-pane-address-book-header>

          <div class="contentColumns">
            <section class="peopleSection" role="region" aria-label="People">
              <contacts-pane-search
                class=${this.searchOpen?"":"hidden"}
                @filter-changed=${e=>this.peopleList.applyFilter(e.detail.value)}
              ></contacts-pane-search>
              <contacts-pane-people-list
                .selectedGroups=${this.selectedGroups}
                @person-selected=${e=>_e(this.peopleList,e.detail.person,this.details)}
                @open-contact-requested=${e=>Ee(e.detail.person)}
                @delete-contact-requested=${e=>Ae(e.detail.person)}
              ></contacts-pane-people-list>
            </section>

            <contacts-pane-details></contacts-pane-details>
          </div>
        </div>
      </main>
    `:ce``}soleSelectedGroup(){let e=Object.keys(this.selectedGroups).filter(n=>this.selectedGroups[n]),t=this.groupBar?this.groupBar.groupCount:0;return e.length!==1||t<=1?null:m.sym(e[0])}syncHeaderToSelection(){let e=this.soleSelectedGroup(),t=e&&m.any(e,a.vcard("fn"));this.selectedGroupName=t?t.value:null,this.aclSubject=e||this.book}onSelectionChanged(){this.syncHeaderToSelection(),this.header.clearActiveAction(),this.details.clearUnlessContact()}onSearchToggled(e){this.searchOpen=e.detail.open,this.searchOpen?this.search.focusInput():this.search.clear()}async onNewGroupRequested(){this.header.clearActiveAction(),Le(this.peopleList);let e=m.any(this.book,a.vcard("groupIndex"));if(e)try{await m.fetcher.load(e)}catch(t){y("Error: Group index  NOT loaded:"+t+`
`)}y(` Group index has been loaded
`),S(qe,{props:{book:this.book},onClose:t=>{t&&this.showNewGroup(t)}})}showNewGroup(e){for(let t in this.selectedGroups)delete this.selectedGroups[t];this.selectedGroups[e.uri]=!0,this.groupBar.refresh(),this.syncHeaderToSelection(),$(this.peopleList,null,!1),this.details.showContent(ee.ACLControlBox5(e.doc(),this.context,"group",m))}async deleteSelectedGroup(){let e=this.soleSelectedGroup();if(!e)return;let t=m.any(e,a.vcard("fn")),n=t?t.value:"this group";if(await M(`Really delete the group ${n}?`)){try{await ve(e)}catch(s){g("Error deleting group. Stack: "+s),te("Failed to delete the group. If it persists, contact your admin.");return}delete this.selectedGroups[e.uri],this.groupBar.refresh(),this.syncHeaderToSelection(),$(this.peopleList,null,!1)}}showNewContact(e){this.groupBar.refresh(),$(this.peopleList,null,!1),this.peopleList.markSelected(e);let n=this.context.session.paneRegistry.byName("contact").render(e,this.context);n.classList.add("renderPane"),this.details.showContent(n,{wide:!0,kind:"contact"})}showSharing(){let e=this.ownerDocument,t=e.createElement("div");t.classList.add("sharingControls");let n=i=>fe(t,e,i);t.appendChild(ee.ACLControlBox5(this.book.dir(),this.context,"book",m));let s={target:this.book,me:this.me,noun:"address book",div:t,dom:e,statusRegion:this.parentElement??this};ue.registrationControl(s,this.book,a.vcard("AddressBook")).then(()=>y("Registration control finished.")).catch(i=>{g("Error in registration control. Stack: "+i),n("Problem displaying findable controls. If persists, contact admin.")}),S(Te,{props:{content:t}})}showTools(){S(Re,{props:{book:this.book,selectedGroups:this.selectedGroups,onGroupsChanged:()=>this.groupBar.refresh()}})}};customElements.get("contacts-pane-address-book")||customElements.define("contacts-pane-address-book",T);var bs=T;export{T as AddressBook,bs as default};
