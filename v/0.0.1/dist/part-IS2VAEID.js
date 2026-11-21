import{a as be,b as V,c as ve,d as $,g as we,h as xe,i as ye,j as ke,k as S,l as Ce,m as $e,n as Ge,o as Se,p as _e}from"./part-ESHUFW3B.js";import"./part-PGNGPJQW.js";import{a as H,b as K,c as Z}from"./part-DHOH4UBN.js";import"./part-65PJWB3H.js";import"./part-3PPQ24R4.js";import"./part-QJFSLVOC.js";import"./part-JII5LI4F.js";import{a as C,c as b,d as h,e as ee,f as O,g as de,h as he,i as pe,l as me,m as ge,n as fe}from"./part-RSHJEZPV.js";import"./part-DUP4CQ5F.js";import"./part-MU63X5MV.js";import"./part-O7YQKWSY.js";import"./part-DUP4CQ5F.js";import"./part-4RHLBPWQ.js";import"./part-OCJP3XBY.js";import"./part-6POLG3CV.js";import"./part-NYMP5DIS.js";import"./part-ZUZ5SMMO.js";import{a as ie,b as re,c as Q}from"./part-CKVAMWOE.js";import"./part-ZK2YILMJ.js";import"./part-TKTGPRZR.js";import"./part-WZ5ZOODI.js";import{H as M,d as y}from"./part-QENSO4SJ.js";import"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import"./part-HGODWX5M.js";import"./part-3E3YJ362.js";import"./part-EYI2LYOK.js";import{a as l}from"./part-V7XQEHON.js";import"./part-FI5O6ZH7.js";import{a as le,b as ce,f as A,g as ue,i as L}from"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import{a as ae}from"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import{b as m}from"./part-VHSBPZHI.js";import{c as d}from"./part-GPLAS2FA.js";import{D as E,F as k}from"./part-SVX36NT2.js";import{D as W,m as se}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as s,e as c}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var Re=await h(d(`:host {
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
`,"text/css")),I=class extends L{static properties={book:{},name:{state:!0},loading:{state:!0},error:{state:!0}};constructor(){super(),this.book=null,this.name="",this.loading=!1,this.error=null}static styles=Re;render(){if(!this.book)throw new Error("Book is required for <contacts-pane-new-group-modal>");return s`
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
            ${this.error?s`<p class="error">${this.error}</p>`:c}
          </solid-ui-dialog-content>
          <solid-ui-dialog-footer>
            <solid-ui-button type="submit" ?loading=${this.loading}>Create Group</solid-ui-button>
          </solid-ui-dialog-footer>
        </form>
      </solid-ui-dialog>
    `}onNameChanged(e){let{value:t}=e.target;this.name=typeof t=="string"?t:""}async onSubmit(e){e.preventDefault(),this.error=null,this.loading=!0;try{if(!this.book)throw new Error("Book is required for <contacts-pane-new-group-modal>");let t=await V(this.book,this.name);this.close(t)}catch(t){console.error(t),this.error="Error saving group. If it persists, contact your admin."}finally{this.loading=!1}}};customElements.get("contacts-pane-new-group-modal")||customElements.define("contacts-pane-new-group-modal",I);var Ee=I;var je=await h(d(`:host {
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
`,"text/css")),N=class extends L{static properties={content:{attribute:!1}};constructor(){super(),this.content=null}static styles=je;connectedCallback(){super.connectedCallback(),this.content&&this.content.parentNode!==this&&this.appendChild(this.content)}render(){return s`
      <solid-ui-dialog title="Sharing">
        <solid-ui-dialog-content>
          <slot></slot>
        </solid-ui-dialog-content>
      </solid-ui-dialog>
    `}};customElements.get("contacts-pane-sharing-modal")||customElements.define("contacts-pane-sharing-modal",N);var Ae=N;var a=k,v=l,X=v.vcard;function _(o){return se(o)}function Y(o,e){let t=a.each(o,v.vcard(e)).find(_);if(!t)throw new Error("Address book has no "+e);return t}async function Le(o,e){let t=Y(o,"nameEmailIndex");await a.fetcher.load(t),e("People index has been loaded")}function Ie(o,e,t){let n=a.each(void 0,X("inAddressBook"),o).length;t(""+n+" contacts loaded. ");let i=Te(o);t(""+i.length+" total groups. "),t(""+Ne(e).length+" selected groups. ")}function Ne(o){return Object.keys(o).filter(e=>o[e])}async function qe(o,e){let t=[];for(let i of Ne(o)){let r=a.sym(i),u=$(a,r);e(y.label(r)+": "+u.length+" members");for(let p of u)e(y.label(p)),t.push(Pe(p,e))}let n=(await Promise.all(t)).filter(i=>!i).length;if(n)throw new Error(n+" of "+t.length+" contacts could not be fixed")}function Pe(o,e){return new Promise(t=>{re.fixIndividualCardACL(o,n=>{e(n),n.startsWith("Nice - same ACL")&&t(!0)},(n,i)=>{n?e("Success for "+y.label(o)):(b("Failure for "+o+": "+i),e("Failure for "+o+": "+i)),t(n)})})}function Te(o){let e=a.each(o,X("includesGroup")).filter(_);return[...new Set(e.map(n=>de(n.uri)))].map(n=>a.sym(n))}async function oe(o,e){let t=Y(o,"groupIndex"),n=Y(o,"nameEmailIndex");try{await a.fetcher.load([n,t]);let g=a.each(o,v.vcard("includesGroup")).filter(_);await a.fetcher.load(g)}catch(g){throw b("Error loading groups. Stack: "+g),e("Error loading groups or name index. If it persists, contact your admin."),g}let i={},r=[],u=Te(o);e(""+u.length+" total groups. ");for(let g of u){let D=$(a,g);e(y.label(g)+": "+D.length+" members");for(let J of D)a.allAliases(J).forEach(Fe=>{i[Fe.uri]=g})}let p=a.each(void 0,X("inAddressBook"),o).filter(_);e(""+p.length+" total contacts");for(let g of p)i[g.uri]||(r.push(g),e("   groupless "+y.label(g)));return e(""+r.length+" groupless contacts."),r}async function Be(o,e,t){let n=await oe(o,e);if(n.length===0)return e("No groupless contacts found."),!1;if(!await t(`Add the ${n.length} contacts without groups to a 'No group' group?`))return!1;let i=await V(o,"No group");for(let r of n)e("   adding "+y.label(r)),await ve(r,i);return e("People moved to group."),!0}async function De(o,e,t){let n={book:o,cards:[],duplicates:[],definitive:{},nameless:[],uniques:[],uniqueSet:{},uniquesSet:{}};n.nameEmailIndex=Y(o,"nameEmailIndex"),e("Loading name index..."),await a.fetcher.load(n.nameEmailIndex),e("Loaded name index."),n.groupObjects=We(o),e("Loading "+n.groupObjects.length+" groups... "),await a.fetcher.load(n.groupObjects),Ve(n,e),He(n,e),await Ke(n,e,t),await Ye(n,e),await Je(n,e),e("Done!")}function We(o){if(!o)return[];let t=a.each(o,v.vcard("includesGroup")).filter(_).map(n=>[o,a.any(n,v.vcard("fn")),n]);return t.sort(),t.map(n=>n[2]).filter(_)}function Ve(o,e){o.cards=a.each(void 0,X("inAddressBook"),o.book).filter(_),e(""+o.cards.length+" total contacts");for(let t of o.cards){let n=a.anyValue(t,v.vcard("fn"));if(!n){o.nameless.push(t);continue}o.definitive[n]===t||(o.definitive[n]?o.duplicates.push(t):o.definitive[n]=t)}o.duplicateSet={};for(let t of o.duplicates)o.duplicateSet[t.uri]=t;o.namelessSet={};for(let t of o.nameless)o.namelessSet[t.uri]=t;for(let t of o.cards)!o.duplicateSet[t.uri]&&!o.namelessSet[t.uri]&&(o.uniques.push(t),o.uniqueSet[t.uri]=t);e("Uniques: "+o.uniques.length),e(""+o.nameless.length+" nameless contacts."),e(""+o.duplicates.length+" name-duplicate contacts, leaving "+(o.cards.length-o.duplicates.length))}function He(o,e){e("Groups loaded");for(let n of o.uniques)o.uniquesSet[n.uri]=!0;o.groupMembers=[],a.each(null,v.vcard("hasMember")).forEach(n=>{o.groupMembers=o.groupMembers.concat($(a,n))}),e("  Naive group members "+o.groupMembers.length);let t={};for(let n of o.groupMembers)t[n.uri]=n;e("  Compact group members "+Object.keys(t).length)}async function Ke(o,e,t){o.nameLessIndex={},o.namelessUniques=[],o.nameLessZeroData=[],o.nameOnlyErrors=[],o.nameOnlyDuplicatesGroupDiff=[],e("Nameless to check: "+o.nameless.length);for(let n of o.nameless){let i=await Ze(o,n,e);e("    Nameless check returns "+i)}if(e("namelessUniques: "+o.namelessUniques.length),o.namelessUniques.length!==0&&await t("Add all "+o.namelessUniques.length+" nameless contacts to the rescued set?")){o.uniques=o.uniques.concat(o.namelessUniques);for(let n of o.namelessUniques)o.uniqueSet[n.uri]=!0}}async function Ze(o,e,t){try{await a.fetcher.load(e)}catch(p){return t("Cant load a nameless card!: "+p),o.nameOnlyErrors.push(e),!1}t(" Nameless check "+e);let n={};n[v.vcard("hasUID").uri]=!0,n[v.dc("created").uri]=!0,n[v.dc("modified").uri]=!0;let i=a.statementsMatching(null,null,null,e.doc()).filter(p=>!n[p.predicate.uri]);if(!i.length)return t("  Zero length "+e),o.nameLessZeroData.push(e),!1;let r=new W(a).setBase(e.doc().uri).statementsToN3(i),u=o.nameLessIndex[r];if(u){t("  Matches with "+u);let p=a.each(null,v.vcard("hasMember"),e),g=a.each(null,v.vcard("hasMember"),u);for(let D of p)if(!g.some(J=>J.sameTerm(D)))return t("This one groups: "+p),t("Other one groups: "+g),t("Cant skip this one because it has a group, "+D+", which the other does not."),o.nameOnlyDuplicatesGroupDiff.push(e),!1;C("Group check done -- exact duplicate: "+e)}else t("First nameless like: "+e.doc()),t("___________________________________________"),t(r),t("___________________________________________"),o.nameLessIndex[r]=e,o.namelessUniques.push(e);return!0}async function Ye(o,e){let t=a.sym(o.book.dir().uri+"clean-people.ttl");try{let n=[];for(let u of o.uniques)n=n.concat(a.connectedStatements(u,o.nameEmailIndex));let i=new W(a).setBase(o.nameEmailIndex.uri);e("Serializing index of uniques...");let r=i.statementsToN3(n);await a.fetcher.webOperation("PUT",t,{data:r,contentType:"text/turtle"}),e("Done uniques log "+t)}catch(n){throw e("Error saving uniques: "+n),n}}async function Xe(o,e,t){let n=a.sym(t.uri.replace("/Group/","/NewGroup/"));try{let i=[];for(let p of o.uniques)i=i.concat(a.connectedStatements(p,t.doc()));let r=new W(a).setBase(t.uri);e("   Regenerating group of uniques..."+n);let u=r.statementsToN3(i);await a.fetcher.webOperation("PUT",n,{data:u,contentType:"text/turtle"}),e("     Done uniques group "+n)}catch(i){throw e("Error saving "+n+": "+i),i}}function Je(o,e){return e("Saving ALL GROUPS"),Promise.all(o.groupObjects.map(t=>Xe(o,e,t)))}var et=await h(d(`:host {
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
`,"text/css")),tt=[{id:"load-index",label:"Load main index",run:(o,e)=>Le(e,o.log)},{id:"stats",label:"Statistics",run:(o,e)=>Ie(e,o.selectedGroups,o.log)},{id:"check-access",label:"Check individual contact access of selected groups",run:o=>qe(o.selectedGroups,o.log)},{id:"find-duplicates",label:"Find duplicate contacts",run:(o,e)=>De(e,o.log,O)},{id:"find-groupless",label:"Find contacts with no group",run:async(o,e)=>{await oe(e,o.log),o.log("Groupless list finished.")}},{id:"fix-groupless",label:"Put all individuals with no group in a new group",run:async(o,e)=>{await Be(e,o.log,O)&&o.dispatchEvent(new CustomEvent("groups-changed",{bubbles:!0,composed:!0}))}}],U=class extends m{static properties={book:{attribute:!1},selectedGroups:{attribute:!1},logLines:{state:!0},activeAction:{state:!0},runningAction:{state:!0},failed:{state:!0}};constructor(){super(),this.book=null,this.selectedGroups={},this.logLines=[],this.activeAction=null,this.runningAction=null,this.failed=!1}static styles=et;log=e=>{this.logLines=[...this.logLines,e]};render(){return s`
      <div class="buttons">
        ${tt.map(e=>this.renderAction(e))}
      </div>
      <div class="statsLog" ?hidden=${this.logLines.length===0}>
        <pre aria-live="polite">${this.logLines.join(`
`)}</pre>
      </div>
    `}renderAction(e){let t=this.activeAction===e.id;return s`
      <solid-ui-button
        variant=${t&&!this.failed?"primary":"secondary"}
        ?loading=${this.runningAction===e.id}
        ?disabled=${this.runningAction!==null&&this.runningAction!==e.id}
        @click=${()=>this.onAction(e)}
      >${e.label}</solid-ui-button>
      ${t&&this.failed?s`<span class="sr-only" role="alert">${e.label} failed</span>`:c}
    `}async onAction(e){if(!(this.runningAction||!this.book)){this.activeAction=e.id,this.runningAction=e.id,this.failed=!1,this.logLines=[];try{await e.run(this,this.book)}catch(t){b('Tools action "'+e.id+'" failed. Stack: '+t),this.failed=!0,this.log("Failed: "+(t.message||t)+". If it persists, contact your admin.")}finally{this.runningAction=null}}}};customElements.get("contacts-pane-tools")||customElements.define("contacts-pane-tools",U);var ot=await h(d(`:host {
    /* solid-ui's dialog only has a min-width, and the wrapping buttons and log
       would stretch it across the viewport. Fix the width so the dialog keeps
       its size as the log grows, and scroll rather than push it off screen. */
    solid-ui-dialog-content {
        width: min(40rem, 80vw);
        max-height: 70vh;
        overflow: auto;
    }
}
`,"text/css")),q=class extends L{static properties={book:{attribute:!1},selectedGroups:{attribute:!1},onGroupsChanged:{attribute:!1}};constructor(){super(),this.book=null,this.selectedGroups={},this.onGroupsChanged=()=>{}}static styles=ot;render(){return s`
      <solid-ui-dialog title="Tools">
        <solid-ui-dialog-content>
          <contacts-pane-tools
            .book=${this.book}
            .selectedGroups=${this.selectedGroups}
            @groups-changed=${()=>this.onGroupsChanged()}
          ></contacts-pane-tools>
        </solid-ui-dialog-content>
      </solid-ui-dialog>
    `}};customElements.get("contacts-pane-tools-modal")||customElements.define("contacts-pane-tools-modal",q);var Me=q;var nt=await h(d(`:host {
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
`,"text/css")),st=[{value:"person",label:"Person"},{value:"organization",label:"Organization"}],T=class extends m{static properties={book:{},selectedGroups:{},contactType:{state:!0},name:{state:!0},loading:{state:!0},error:{state:!0}};static styles=nt;dialogTrait;constructor(){super(),this.book=null,this.selectedGroups=null,this.contactType="organization",this.name="",this.loading=!1,this.error=null,this.context=le,new ae(this,{context:ce,subscribe:!0,callback:e=>{this.context=e}}),this.dialogTrait=this.addTrait(new ue(this,{getContext:()=>this.context}))}render(){if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-add-contact-modal>");return s`
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
              ${st.map(e=>s`<solid-ui-combobox-option value=${e.value}
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
            ${this.error?s`<p class="error">${this.error}</p>`:c}
          </solid-ui-dialog-content>
          <solid-ui-dialog-footer>
            <solid-ui-button type="submit" ?loading=${this.loading}>Add Contact</solid-ui-button>
          </solid-ui-dialog-footer>
        </form>
      </solid-ui-dialog>
    `}onContactTypeChanged(e){this.contactType=e.target.value}onNameChanged(e){let{value:t}=e.target;this.name=typeof t=="string"?t:""}async onSubmit(e){e.preventDefault(),this.error=null,this.loading=!0;try{if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-add-contact-modal>");let t=await be(this.book,this.name,this.selectedGroups,this.contactType==="organization"?l.vcard("Organization"):l.vcard("Individual"));this.dialogTrait.close(t)}catch(t){console.error(t),this.error="Error saving contact. If it persists, contact your admin."}finally{this.loading=!1}}};customElements.get("contacts-pane-add-contact-modal")||customElements.define("contacts-pane-add-contact-modal",T);var Oe=T;function w(o,e){customElements.get(o)||customElements.define(o,class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<style>:host { display: inline-flex; }</style>"+e}})}w("icon-lucide-book-user",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 13a3 3 0 1 0-6 0"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><circle cx="12" cy="8" r="2"/></g></svg>');w("icon-lucide-ellipsis-vertical",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></g></svg>');w("icon-lucide-external-link",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>');w("icon-lucide-globe",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>');w("icon-lucide-lock",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g></svg>');w("icon-lucide-mail",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>');w("icon-lucide-plus",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/></svg>');w("icon-lucide-search",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m21 21l-4.34-4.34"/><circle cx="11" cy="11" r="8"/></g></svg>');w("icon-lucide-trash-2",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>');w("icon-lucide-user",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g></svg>');var it=await h(d(`:host {
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
`,"text/css")),z=class extends m{static properties={selectedGroupName:{},book:{attribute:!1},selectedGroups:{attribute:!1},aclSubject:{attribute:!1},loggedIn:{state:!0},visibility:{state:!0},toolsOpen:{state:!0},searchOpen:{state:!0}};constructor(){super(),this.selectedGroupName=null,this.book=null,this.selectedGroups=null,this.aclSubject=null,this.loggedIn=!1,this.visibility=null,this.toolsOpen=!1,this.searchOpen=!1}static styles=it;visibilityLookup=0;connectedCallback(){super.connectedCallback(),E.checkUser().then(e=>{e&&(this.loggedIn=!0,this.refreshVisibility(),this.dispatchEvent(new CustomEvent("user-resolved",{bubbles:!0,composed:!0,detail:{webId:e}})))})}updated(e){super.updated(e),e.has("aclSubject")&&this.refreshVisibility()}async refreshVisibility(){let e=++this.visibilityLookup;if(this.visibility=null,!this.aclSubject)return;let t=await pe(this.aclSubject);e===this.visibilityLookup&&(this.visibility=t)}render(){return s`
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
          ${this.book?this.renderMenu():c}
        </div>
      </header>
    `}renderMenu(){let e=!!this.selectedGroupName&&this.loggedIn;return H(e,s`
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
        ${e?s`
            <solid-ui-menu-item @solid-ui-select=${this.onDeleteGroup}>
              <icon-lucide-trash-2 slot="left-icon"></icon-lucide-trash-2>
              Delete Group
            </solid-ui-menu-item>
          `:c}
      </solid-ui-menu>
    `)}renderVisibilityBadge(){if(!this.visibility)return c;let e=this.visibility==="public";return s`
      <span class="badge ${e?"badge--public":"badge--private"}">
        ${e?s`<icon-lucide-globe aria-hidden="true"></icon-lucide-globe>`:s`<icon-lucide-lock aria-hidden="true"></icon-lucide-lock>`}
        ${e?"Public":"Private"}
      </span>
    `}clearActiveAction(){this.toolsOpen=!1}onToggleSearch(){this.searchOpen=!this.searchOpen,this.dispatchEvent(new CustomEvent("search-toggled",{bubbles:!0,composed:!0,detail:{open:this.searchOpen}}))}onSharing(){this.request("sharing")}onTools(){this.toolsOpen=!0,this.request("tools")}request(e){this.dispatchEvent(new CustomEvent(`${e}-requested`,{bubbles:!0,composed:!0}))}onDeleteGroup(){this.dispatchEvent(new CustomEvent("delete-group-requested",{bubbles:!0,composed:!0}))}onAddContact(){if(!this.book||!this.selectedGroups)throw new Error("Book and selectedGroups are required for <contacts-pane-address-book-header>");A(Oe,{props:{book:this.book,selectedGroups:this.selectedGroups},onClose:e=>{e&&this.dispatchEvent(new CustomEvent("contact-added",{bubbles:!0,composed:!0,detail:{person:e}}))}})}};customElements.get("contacts-pane-address-book-header")||customElements.define("contacts-pane-address-book-header",z);var F=class extends m{static properties={view:{state:!0},message:{state:!0},content:{state:!0},wide:{state:!0},notices:{state:!0}};constructor(){super(),this.view="empty",this.message="",this.content=null,this.wide=!0,this.notices=[]}contentKind=null;createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.classList.add("detailSection"),this.setAttribute("role","region"),this.setAttribute("aria-label","Details section")}get hasContact(){return this.contentKind==="contact"}showLoading({wide:e=!1}={}){this.transition("loading",{wide:e})}showMessage(e){this.transition("message"),this.message=e}showError(e){this.transition("error"),this.message=e}showContent(e,{wide:t=!1,kind:n="other"}={}){this.transition("content",{wide:t}),this.content=e,this.contentKind=n}clear(){this.transition("empty",{wide:!0})}addNotice(e){this.notices=[...this.notices,e]}clearUnlessContact(){this.hasContact||this.clear()}transition(e,{wide:t=!1}={}){this.view=e,this.wide=t,this.message="",this.content=null,this.contentKind=null,this.notices=[]}render(){return s`
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
    `}renderView(){switch(this.view){case"loading":return s`Loading...`;case"message":return s`${this.message}`;case"error":return s`<div class="detailsError" role="alert">${this.message}</div>`;case"content":return this.content;default:return this.renderEmpty()}}renderEmpty(){return s`
      <div class="detailsEmpty">
        <span class="detailsEmptyIcon" aria-hidden="true">
          <icon-lucide-book-user></icon-lucide-book-user>
        </span>
        <h3 class="detailsEmptyTitle">No contact selected</h3>
        <p class="detailsEmptyText">Select a contact from the list to view their profile, edit details, or send a message.</p>
      </div>
    `}};customElements.get("contacts-pane-details")||customElements.define("contacts-pane-details",F);var rt=await h(d(`/* The host keeps the .buttonSection class, so contactsPane.css still lays out
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
`,"text/css")),ne=k,Ue=new WeakSet,R=class extends m{static properties={heading:{attribute:!1},book:{attribute:!1},options:{attribute:!1},selectedGroups:{attribute:!1},rows:{state:!0},busy:{state:!0},error:{state:!0},revision:{state:!0},filter:{state:!0}};constructor(){super(),this.heading=null,this.book=null,this.options={},this.selectedGroups={},this.rows=[],this.busy=!1,this.error=null,this.revision=0,this.filter=""}static styles=rt;connectedCallback(){super.connectedCallback(),this.refresh()}refresh(){this.rows=ke(this.book,this.options).map(e=>{let t=ne.any(e,l.vcard("fn"));return{group:e,uri:e.uri,name:t?t.value:"Some group",count:xe(e)}}),this.revision++}async selectAll(){if(this.refresh(),!this.rows.length)return;this.error=null,this.busy=!0;let e=await Promise.all(this.rows.map(n=>this.load(n.group)));this.busy=!1;let t=this.rows.filter((n,i)=>!e[i]);if(t.length){console.error("Failed to load group documents:",t.map(n=>n.uri)),this.error="Failed to load all groups. If it persists, contact your admin.";return}for(let n of this.rows)this.selectedGroups[n.uri]=!0;this.refresh(),this.announceSelection()}get groupCount(){return this.rows.length}get allSelected(){return this.rows.length>0&&this.rows.every(e=>this.selectedGroups[e.uri])}get allCount(){let e=new Set,t=!1;for(let n of this.rows)if(n.count!==null){t=!0;for(let i of $(ne,n.group))e.add(i.uri)}return t?e.size:null}load(e){return new Promise(t=>{ne.fetcher.nowOrWhenFetched(e.doc(),void 0,n=>t(n))})}announceSelection(){S(null,null,!1),this.dispatchEvent(new CustomEvent("selection-changed",{bubbles:!0,composed:!0}))}wireDragAndDrop(e){return Z(t=>{!t||Ue.has(t)||(Ue.add(t),M.makeDraggable(t,e),M.makeDropTarget(t,n=>ye(n,e)))})}get visibleRows(){let e=this.filter.trim().toLowerCase();return e.length===0?this.rows:this.rows.filter(t=>t.name.toLowerCase().includes(e))}onFilterInput(e){this.filter=e.target.value?.toString()??""}render(){return s`
      <header class="header">
        ${this.heading?s`<h2 class="heading">${this.heading}</h2>`:c}
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
        ${this.allCount===null?c:s`<span class="groupCount" aria-hidden="true">${this.allCount}</span>`}
      </button>

      <ul class="groupButtonsList" role="list" aria-label="Groups list">
        ${K(this.visibleRows,e=>e.uri,e=>this.renderGroup(e))}
      </ul>

      ${this.error?s`<p class="error" role="alert">${this.error}</p>`:c}

      <div class="newGroup">
        <solid-ui-button variant="secondary" @click=${this.onNewGroup}>
          <icon-lucide-plus slot="left-icon"></icon-lucide-plus>
          New Group
        </solid-ui-button>
      </div>
    `}renderGroup(e){let t=!!this.selectedGroups[e.uri]&&!this.allSelected,n=e.count===null?e.name:`${e.name}, ${e.count} ${e.count===1?"contact":"contacts"}`;return s`
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
          @click=${i=>this.onGroup(i,e)}
        >
          <span class="groupName">${e.name}</span>
          ${e.count===null?c:s`<span class="groupCount" aria-hidden="true">${e.count}</span>`}
        </button>
      </li>
    `}async onAllGroups(){this.allSelected||await this.selectAll()}async onGroup(e,t){if(e.preventDefault(),this.error=null,e.metaKey)this.selectedGroups[t.uri]=!this.selectedGroups[t.uri];else{for(let i in this.selectedGroups)delete this.selectedGroups[i];this.selectedGroups[t.uri]=!0}this.revision++,await this.load(t.group)||(console.error("Failed to load group document:",t.uri),this.error=`Failed to load "${t.name}". If it persists, contact your admin.`),this.refresh(),this.announceSelection()}onNewGroup(){this.dispatchEvent(new CustomEvent("new-group-requested",{bubbles:!0,composed:!0}))}};customElements.get("contacts-pane-group-bar")||customElements.define("contacts-pane-group-bar",R);var at=await h(d(`/* The rows used to be built by the presenter and styled from contactsPane.css
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
`,"text/css")),x=k,ze=new WeakSet,j=class extends m{static properties={selectedGroups:{attribute:!1},rows:{state:!0},filter:{state:!0},selectedUri:{state:!0},loggedIn:{state:!0},revision:{state:!0}};constructor(){super(),this.selectedGroups={},this.rows=[],this.filter="",this.selectedUri=null,this.loggedIn=!1,this.revision=0}static styles=at;connectedCallback(){super.connectedCallback(),E.checkUser().then(e=>{this.loggedIn=!!e})}refresh(e=!1){let t=new Set,n=[];for(let r of Object.keys(this.selectedGroups))if(this.selectedGroups[r])for(let u of $(x,x.sym(r)))t.has(u.uri)||(t.add(u.uri),n.push(u));n.sort(ge);let i=new Set(this.rows.filter(r=>r.error).map(r=>r.uri));this.rows=n.map(r=>({person:r,uri:r.uri,name:fe(r)||"Unknown Name",error:i.has(r.uri)}));for(let r of this.rows)x.fetcher.nowOrWhenFetched(r.person.doc(),void 0,(u,p)=>{u||(b("Cannot load contact: "+r.person+". Stack: "+p),r.error=!0),this.revision++});this.revision++,e&&this.autoSelectSingleMatch()}applyFilter(e){this.filter=e??"",this.autoSelectSingleMatch()}markSelected(e){this.selectedUri=e?e.uri:null}clearSelection(){this.selectedUri=null}get visibleRows(){return this.rows.filter(e=>this.matchesFilter(e))}matchesFilter(e){let t=this.filter.trim().toLowerCase();if(t.length===0)return!0;let n=[e.name,...this.emailsFor(e.person),...this.urlsFor(e.person)].join(" ").toLowerCase();return t.split(/\s+/).every(i=>n.includes(i))}autoSelectSingleMatch(){let e=this.visibleRows;e.length===1&&this.select(e[0].person)}select(e){this.selectedUri=e.uri,this.dispatchEvent(new CustomEvent("person-selected",{bubbles:!0,composed:!0,detail:{person:e}}))}wireDrag(e){return Z(t=>{!t||ze.has(t)||(ze.add(t),M.makeDraggable(t,e))})}render(){return s`
      <ul role="list" aria-label="People list">
        ${K(this.visibleRows,e=>e.uri,e=>this.renderRow(e))}
      </ul>
    `}emailsFor(e){return x.each(e,l.vcard("hasEmail")).map(t=>x.any(t,l.vcard("value"))??t).map(t=>String(t.value??"").replace(/^mailto:/,"")).filter(t=>t.includes("@"))}emailFor(e){return this.emailsFor(e)[0]??null}urlsFor(e){return[...x.each(e,l.vcard("url")).map(n=>x.any(n,l.vcard("value"))??n),...x.each(e,l.owl("sameAs"))].filter(n=>n.termType!=="BlankNode").map(n=>n.value)}renderRow(e){let t=x.any(e.person,l.vcard("hasPhoto")),n=this.emailFor(e.person),i=x.anyValue(e.person,l.vcard("role"));return s`
      <li
        role="listitem"
        tabindex="0"
        aria-label=${[e.name,i,n].filter(Boolean).join(", ")}
        class="personLi ${this.selectedUri===e.uri?"selected":""} ${e.error?"personLi--error":""}"
        @click=${()=>this.select(e.person)}
        @keydown=${r=>this.onRowKeydown(r,e)}
        ${this.wireDrag(e.person)}
      >
        <div class="avatar" aria-hidden="true">
          ${t?s`<img src=${t.value} alt="" />`:s`<icon-lucide-user class="avatarFallback"></icon-lucide-user>`}
        </div>
        <div class="identity">
          <div class="nameRow">
            <div class="name">${e.name}</div>
            ${i?s`<span class="roleDivider" aria-hidden="true"></span><div class="role">${i}</div>`:c}
          </div>
          ${n?s`<div class="email">
                <icon-lucide-mail aria-hidden="true"></icon-lucide-mail>
                <span>${n}</span>
              </div>`:c}
        </div>
        ${this.renderRowMenu(e)}
      </li>
    `}renderRowMenu(e){return s`
      <div
        class="rowMenu"
        @click=${t=>t.stopPropagation()}
        @keydown=${t=>t.stopPropagation()}
      >
        ${H(this.loggedIn,s`
          <solid-ui-menu placement="bottom-end" distance="5">
            <solid-ui-button slot="trigger" variant="ghost" title="More actions">
              <span class="sr-only">Actions for ${e.name}</span>
              <icon-lucide-ellipsis-vertical slot="icon"></icon-lucide-ellipsis-vertical>
            </solid-ui-button>

            <solid-ui-menu-item @solid-ui-select=${()=>this.request("open-contact-requested",e)}>
              <icon-lucide-external-link slot="left-icon"></icon-lucide-external-link>
              Open in new window
            </solid-ui-menu-item>
            ${this.loggedIn?s`
                <solid-ui-menu-item @solid-ui-select=${()=>this.request("delete-contact-requested",e)}>
                  <icon-lucide-trash-2 slot="left-icon"></icon-lucide-trash-2>
                  Delete contact
                </solid-ui-menu-item>
              `:c}
          </solid-ui-menu>
        `)}
      </div>
    `}onRowKeydown(e,t){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.select(t.person))}request(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:{person:t.person}}))}};customElements.get("contacts-pane-people-list")||customElements.define("contacts-pane-people-list",j);var lt=await h(d(`/* The section padding the pane's .searchSection rule used to give the light
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
`,"text/css")),P=class extends m{static properties={placeholder:{},text:{state:!0}};constructor(){super(),this.placeholder="Search by name, email, WebID, or profile URL",this.text=""}get input(){return this.renderRoot?.querySelector("solid-ui-input")??null}static styles=lt;get value(){return this.text}set value(e){this.text=e??""}clear(){this.text!==""&&(this.text="",this.announce())}focusInput(){this.input?.shadowRoot?.querySelector("input")?.focus()}render(){return s`
      <div class="searchDiv">
        <solid-ui-input
          type="search"
          aria-label="Search contacts"
          placeholder=${this.placeholder}
          .value=${this.text}
          @input=${this.onInput}
        ></solid-ui-input>
        ${this.text.length>0?s`
            <button type="button" aria-label="Clear search" @click=${this.onClear}>✕</button>
          `:c}
      </div>
    `}onInput(e){this.text=e.target.value?.toString()??"",this.announce()}onClear(){this.clear(),this.focusInput()}announce(){this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0,composed:!0,detail:{value:this.text}}))}};customElements.get("contacts-pane-search")||customElements.define("contacts-pane-search",P);var f=k,B=class extends m{static properties={book:{attribute:!1},options:{attribute:!1},dataBrowserContext:{attribute:!1},paneOptions:{attribute:!1},heading:{state:!0},ready:{state:!0},error:{state:!0},selectedGroupName:{state:!0},aclSubject:{state:!0},searchOpen:{state:!0}};constructor(){super(),this.book=null,this.options={},this.dataBrowserContext=null,this.paneOptions={},this.heading="",this.ready=!1,this.error=null,this.selectedGroupName=null,this.aclSubject=null,this.searchOpen=!1}get groupBar(){return this.renderRoot?.querySelector("contacts-pane-group-bar")??null}get header(){return this.renderRoot?.querySelector("contacts-pane-address-book-header")??null}get search(){return this.renderRoot?.querySelector("contacts-pane-search")??null}get peopleList(){return this.renderRoot?.querySelector("contacts-pane-people-list")??null}get details(){return this.renderRoot?.querySelector("contacts-pane-details")??null}selectedGroups={};me=E.currentUser();wired=!1;get context(){if(!this.dataBrowserContext)throw new Error("dataBrowserContext is required for <contacts-pane-address-book>");return this.dataBrowserContext}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.load()}async load(){let e=this.book??this.options.foreignGroup;if(!e){this.error="No address book to show.";return}if(this.book)try{await f.fetcher.load(this.book)}catch(n){b("Error loading address book. Stack: "+n),this.error="Failed to load address book.";return}let t=f.any(e,l.dc("title"))||f.any(e,l.vcard("fn"));if(this.paneOptions.solo&&t&&typeof document<"u"&&(document.title=t.value),this.heading=t?t.value:y.label(l.vcard("AddressBook")),this.aclSubject=e,this.options.foreignGroup&&(this.selectedGroups[this.options.foreignGroup.uri]=!0),typeof document<"u"&&document.location&&(""+document.location).slice(0,16)==="http://localhost"){let n=f.any(e,l.acl("owner"));n&&(this.me=n)}this.ready=!0}updated(e){super.updated(e),this.ready&&!this.wired&&(this.wired=!0,this.wireUp())}wireUp(){we({book:this.book,dom:this.ownerDocument,selectedGroups:this.selectedGroups,ulPeople:this.peopleList,cardMain:this.details,dataBrowserContext:this.dataBrowserContext}),this.dataBrowserContext&&(this.dataBrowserContext.ulPeople=this.peopleList),_e(this.book,this.details).then(()=>{C("Async checkDataModel done.")});let e=this.book&&f.any(this.book,l.vcard("groupIndex"));this.book?e&&f.fetcher.nowOrWhenFetched(e.uri,this.book,(t,n)=>{if(!t){b("Error loading group index. Stack: "+n),ee("Error loading group index. If it persists, contact admin.");return}this.groupBar.selectAll()}):(S(this.peopleList,null),C("No book, only one group -> hide list of groups"))}render(){return this.error?s`<p class="detailsError" role="alert">${this.error}</p>`:this.ready?s`
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
                @person-selected=${e=>Ce(this.peopleList,e.detail.person,this.details)}
                @open-contact-requested=${e=>$e(e.detail.person)}
                @delete-contact-requested=${e=>Ge(e.detail.person)}
              ></contacts-pane-people-list>
            </section>

            <contacts-pane-details></contacts-pane-details>
          </div>
        </div>
      </main>
    `:s``}soleSelectedGroup(){let e=Object.keys(this.selectedGroups).filter(n=>this.selectedGroups[n]),t=this.groupBar?this.groupBar.groupCount:0;return e.length!==1||t<=1?null:f.sym(e[0])}syncHeaderToSelection(){let e=this.soleSelectedGroup(),t=e&&f.any(e,l.vcard("fn"));this.selectedGroupName=t?t.value:null,this.aclSubject=e||this.book}onSelectionChanged(){this.syncHeaderToSelection(),this.header.clearActiveAction(),this.details.clearUnlessContact()}onSearchToggled(e){this.searchOpen=e.detail.open,this.searchOpen?this.search.focusInput():this.search.clear()}async onNewGroupRequested(){this.header.clearActiveAction(),Se(this.peopleList);let e=f.any(this.book,l.vcard("groupIndex"));if(e)try{await f.fetcher.load(e)}catch(t){C("Error: Group index  NOT loaded:"+t+`
`)}C(` Group index has been loaded
`),A(Ee,{props:{book:this.book},onClose:t=>{t&&this.showNewGroup(t)}})}showNewGroup(e){for(let t in this.selectedGroups)delete this.selectedGroups[t];this.selectedGroups[e.uri]=!0,this.groupBar.refresh(),this.syncHeaderToSelection(),S(this.peopleList,null,!1),this.details.showContent(Q.ACLControlBox5(e.doc(),this.context,"group",f))}async deleteSelectedGroup(){let e=this.soleSelectedGroup();if(!e)return;let t=f.any(e,l.vcard("fn")),n=t?t.value:"this group";if(await O(`Really delete the group ${n}?`)){try{await me(e)}catch(i){b("Error deleting group. Stack: "+i),ee("Failed to delete the group. If it persists, contact your admin.");return}delete this.selectedGroups[e.uri],this.groupBar.refresh(),this.syncHeaderToSelection(),S(this.peopleList,null,!1)}}showNewContact(e){this.groupBar.refresh(),S(this.peopleList,null,!1),this.peopleList.markSelected(e);let n=this.context.session.paneRegistry.byName("contact").render(e,this.context);n.classList.add("renderPane"),this.details.showContent(n,{wide:!0,kind:"contact"})}showSharing(){let e=this.ownerDocument,t=e.createElement("div");t.classList.add("sharingControls");let n=r=>he(t,e,r);t.appendChild(Q.ACLControlBox5(this.book.dir(),this.context,"book",f));let i={target:this.book,me:this.me,noun:"address book",div:t,dom:e,statusRegion:this.parentElement??this};ie.registrationControl(i,this.book,l.vcard("AddressBook")).then(()=>C("Registration control finished.")).catch(r=>{b("Error in registration control. Stack: "+r),n("Problem displaying findable controls. If persists, contact admin.")}),A(Ae,{props:{content:t}})}showTools(){A(Me,{props:{book:this.book,selectedGroups:this.selectedGroups,onGroupsChanged:()=>this.groupBar.refresh()}})}};customElements.get("contacts-pane-address-book")||customElements.define("contacts-pane-address-book",B);var Xn=B;export{B as AddressBook,Xn as default};
