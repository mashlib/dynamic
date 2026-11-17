import"./part-65PJWB3H.js";import"./part-3PPQ24R4.js";import"./part-QJFSLVOC.js";import"./part-DUP4CQ5F.js";import"./part-GZMECQ7Z.js";import"./part-4RHLBPWQ.js";import"./part-OCJP3XBY.js";import"./part-6POLG3CV.js";import"./part-NYMP5DIS.js";import"./part-ZUZ5SMMO.js";import{g as h,t as L}from"./part-H5FMENGX.js";import"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import"./part-HGODWX5M.js";import{e as b}from"./part-HZXSH6RP.js";import{a as O}from"./part-V7XQEHON.js";import{i as W}from"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import{a as g,b as x}from"./part-VHSBPZHI.js";import{c as p}from"./part-GPLAS2FA.js";import{A as l,b as m,c as v,d as f,e as w,h as K,j as q,y as N}from"./part-SVX36NT2.js";import{_ as u}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as i,e as C}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var ne=await g(p(`:host {
  h2 {
    color: var(--solid-ui-color-gray-900, #101828);
    font-size: var(--solid-ui-font-size-md, 1rem);
    font-weight: 600;
  }

  .access-grants-header,
  .access-grants-list {
    padding: 0 10px;
    align-self: stretch;
  }

  .access-grants-header {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;

    .access-grants-search-input {
      flex: 0 0 auto;
      width: 12ch;
      min-width: 12ch;
      --solid-ui-input-border-color: transparent;
      color: var(--solid-ui-color-zinc-500, #71717B);
      font-size: var(--solid-ui-font-size-sm, .875rem);
      font-weight: 500;
    }
  }

  .access-grants-list {
    display: flex;
    align-items: flex-start;
    gap: 20px;

    ul {
      display: flex;
      flex-direction: column;
      height: 195px;
      padding: 15px;
      align-items: flex-start;
      gap: 15px;
      flex: 1 0 0;
      min-height: 0;
      box-sizing: border-box;
      overflow-y: auto;
      overflow-x: hidden;
      border-radius: 10px;
      border: 1px solid var(--solid-ui-color-gray-200, #E5E7EB);
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
      width: 100%;

      .access-grants-image {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        width: 30px;
        height: 30px;
        flex: 0 0 30px;
        border-radius: 999px;
        overflow: hidden;
        color: var(--solid-ui-color-white, #FFF);
        text-align: center;
        font-size: var(--solid-ui-font-size-xs, .75rem);
        font-weight: 500;

        img {
          display: flex;
          width: 100%;
          height: 100%;
          border-radius: 999px;
          object-fit: cover;
        }

        span {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
      }

      .access-grants-image--agentGroup {
        background: var(--solid-ui-color-blue-900, #083575);
      }

      .access-grants-image--agent,
      .access-grants-image--agentClass {
        background: var(--solid-ui-color-lavender-300, #e6dcff);
      }

      .access-grants-image--origin {
        background: var(--solid-ui-color-green-700, #15803D);
      }

      .access-grants-image--unknown {
        background: var(--solid-ui-color-gray-300, #D1D5DB);
      }

      h3 {
        flex: 1 1 auto;
        min-width: 0;
        color: var(--solid-ui-color-gray-800, #1E2939);
        font-size: var(--solid-ui-font-size-xs, .75rem);
        font-weight: 600;
      }

      span {
        margin-left: auto;
        flex: 0 0 auto;
        text-align: right;
      }

      .access-grants-role {
        margin-left: auto;
        flex: 0 0 auto;
        font-size: var(--solid-ui-font-size-xs, .75rem);
      }

      .access-grants-role--owner {
        font-size: var(--solid-ui-font-size-xs, .75rem);
      }

      .access-grants-role--editable {
        max-width: 100%;
      }
    }
  }

  .access-role-select--compact {
    width: 110px;
    min-width: 110px;
    flex: 0 0 110px;
    max-width: 100%;
    --solid-ui-input-border-color: transparent;
    margin-top: 0;
  }

  .access-grants-list li .access-role-select--compact {
    width: 110px;
    min-width: 110px;
    flex: 0 0 110px;
  }
}
`,"text/css")),A=class extends x{static properties={accessGrantViewModels:{attribute:!1},disabled:{type:Boolean},searchValue:{state:!0}};constructor(){super(),this.accessGrantViewModels=[],this.disabled=!1,this.searchValue=""}static styles=ne;onSearchInput(e){let t=e.currentTarget;this.searchValue=typeof t?.value=="string"?t.value:""}onSearchSelect(e){let t=e.detail.option;typeof t.label=="string"&&(this.searchValue=t.label)}onAccessGrantRoleChange(e,t){let n=t.detail.option.value,r=typeof n=="string"?f.find(o=>o===n):void 0;if(!r)return;let a={id:e,role:r};this.dispatchEvent(new CustomEvent("access-grant-role-changed",{detail:a,bubbles:!0,composed:!0}))}getFilteredAccessGrants(){let e=this.searchValue.trim().toLowerCase();return this.accessGrantViewModels.filter(({subjectLabel:t,subjects:n})=>n.length?!e||t.toLowerCase().includes(e):!1)}renderAccessGrant(e){return i`
      <li>
        ${this.renderAuthorizationBadge(e.authorization,e.subjectLabel)}
        <h3>${e.subjectLabel}</h3>
        ${this.renderAuthorizationRole(e.role,e.id)}
      </li>
    `}renderAuthorizationBadge(e,t){let n=this.getAuthorizationBadge(e,t);return i`
      <div class="access-grants-image access-grants-image--${n.kind}">
        ${n.image?i`<img src=${n.image} alt="" aria-hidden="true" />`:n.kind==="origin"?i`<icon-lucide-globe aria-hidden="true"></icon-lucide-globe>`:i`<span aria-hidden="true">${n.text}</span>`}
      </div>
    `}getAuthorizationBadge(e,t){let n=e.agent[0];if(n){let o=L(u(n));return{kind:"agent",image:o,text:o?"":this.getInitials(t,2)}}if(e.agentGroup[0])return{kind:"agentGroup",text:this.getInitials(t,1)};let a=e.agentClass[0];if(a){let o=L(u(a));return{kind:"agentClass",image:o,text:o?"":this.getInitials(t,2)}}return e.origin[0]?{kind:"origin",text:"O",image:""}:{kind:"unknown",text:"?"}}getInitials(e,t=2){return(e.split(/\s+/).filter(Boolean).slice(0,t).map(a=>a[0]).join("")||e.slice(0,t)).toUpperCase()}renderAuthorizationRole(e,t){return i`
      <solid-ui-combobox
        class="access-role-select access-role-select--compact access-grants-role access-grants-role--editable ${e==="Owner"?"access-grants-role--owner":""}"
        .disabled=${this.disabled}
        .value=${e}
        @change=${n=>this.onAccessGrantRoleChange(t,n)}
      >
        ${this.renderGrantRoleOptions()}
      </solid-ui-combobox>
    `}renderGrantRoleOptions(){return f.map(e=>i`
      <solid-ui-combobox-option value=${e}>${e==="No Access"?"Remove":e}</solid-ui-combobox-option>
    `)}render(){let e=this.getFilteredAccessGrants();return i`
      <section aria-labelledby="access-grants-heading">
        <div class="access-grants-header">
          <h2 id="access-grants-heading">Shared with</h2>
          <solid-ui-combobox
            class="access-grants-search-input"
            label="Search access grants"
            .srOnlyLabel=${!0}
            .value=${this.searchValue}
            placeholder="Search"
            @input=${this.onSearchInput}
            @change=${this.onSearchSelect}
          >
            ${this.accessGrantViewModels.filter(({subjects:t})=>t.length>0).map(({subjectLabel:t})=>i`
                <solid-ui-combobox-option .value=${t}>
                  ${t}
                </solid-ui-combobox-option>
              `)}
          </solid-ui-combobox>
        </div>
        <div class="access-grants-list">
          <ul>
            ${e.length>0?e.map(t=>this.renderAccessGrant(t)):i`<li>No access grants</li>`}
          </ul>
        </div>
      </section>
    `}};customElements.get("solid-ui-access-control-shared-access")||customElements.define("solid-ui-access-control-shared-access",A);var re=await g(p(`:host {
  h2 {
    color: var(--solid-ui-color-gray-900, #101828);
    font-size: var(--solid-ui-font-size-md, 1rem);
    font-weight: 600;
  }

  .access-grants-general {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 0 10px;
    align-self: stretch;

    solid-ui-combobox,
    solid-ui-input {
      --solid-ui-input-border-color: var(--solid-ui-color-slate-200, #E2E8F0);
    }

    .access-grants-general-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
      align-self: stretch;

      .access-grants-copy-link-button-label {
        font-size: var(--solid-ui-font-size-xs, .75rem);
        font-weight: 500;
      }

      .access-grants-copy-link-button icon-lucide-link {
        width: 12px;
        height: 12px;
        aspect-ratio: 1/1;
      }
    }

    .access-grants-general-share {
      display: flex;
      align-items: center;
      gap: 10px;
      align-self: stretch;

      .access-grants-general-share-content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 10px;
        flex: 1 0 0;

        .access-grants-general-share-icon {
          display: flex;
          width: 30px;
          height: 30px;
          padding: 5px;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1/1;
          border-radius: 50px;
          background: var(--solid-ui-color-violet-50, #F5F3FF);
        }

        .access-grants-general-share-icon-inner {
          display: flex;
          width: 20px;
          height: 20px;
          padding: 1.25px;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          aspect-ratio: 1/1;

          icon-lucide-globe {
            width: 17.5px;
            height: 17.5px;
            flex-shrink: 0;
            aspect-ratio: 1/1;
          }
        }

        .access-grants-general-share-text {
          flex: 1 1 auto;
          min-width: 0;

          .access-grants-general-share-text-title {
            color: var(--solid-ui-color-gray-900, #101828);
            font-size: var(--solid-ui-font-size-sm, .875rem);
            font-weight: 600;
          }

          .access-grants-general-share-text-description {
            color: var(--solid-ui-color-gray-700, #364153);
            font-size: var(--solid-ui-font-size-sm, .875rem);
          }
        }
      }
    }
  }

  .access-role-select--general {
    width: 120px;
    min-width: 120px;
    flex: 0 0 120px;
    font-size: var(--solid-ui-font-size-xs, .75rem);
    font-weight: 500;
  }

  .access-role-select--compact {
    display: block;
    max-width: 100%;
    --solid-ui-input-border-color: transparent;
    margin-top: 0;
  }
}
`,"text/css")),$=class extends x{static properties={subjectUri:{attribute:!1},authenticatedAccessRoleValue:{attribute:!1},publicAccessRoleValue:{attribute:!1},disabled:{type:Boolean}};constructor(){super(),this.subjectUri=void 0,this.authenticatedAccessRoleValue="No Access",this.publicAccessRoleValue="No Access",this.disabled=!1}static styles=re;onAuthenticatedRoleChange(e){this.dispatchRoleChange("authenticated-role-changed",e,f)}onPublicRoleChange(e){this.dispatchRoleChange("public-role-changed",e,w)}dispatchRoleChange(e,t,n){let r=t.detail.option.value;if(typeof r!="string"||!n.includes(r))return;let a={role:r};this.dispatchEvent(new CustomEvent(e,{detail:a,bubbles:!0,composed:!0}))}async onCopyLinkClick(e){if(e.preventDefault(),!!this.subjectUri)try{await navigator.clipboard.writeText(this.subjectUri)}catch(t){h("Failed to copy resource link",t)}}renderAuthenticatedRoleOptions(){return f.map(e=>i`
      <solid-ui-combobox-option value=${e}>${e}</solid-ui-combobox-option>
    `)}renderPublicRoleOptions(){return w.map(e=>i`
      <solid-ui-combobox-option value=${e}>${e}</solid-ui-combobox-option>
    `)}renderAuthenticatedModeSelector(){return i`
      <solid-ui-combobox
        class="access-role-select access-role-select--compact access-role-select--general access-grants-role access-grants-role--editable access-role-select--authenticated"
        .disabled=${this.disabled}
        .value=${this.authenticatedAccessRoleValue}
        @change=${this.onAuthenticatedRoleChange}
      >
        ${this.renderAuthenticatedRoleOptions()}
      </solid-ui-combobox>
    `}renderPublicModeSelector(){return i`
      <solid-ui-combobox
        class="access-role-select access-role-select--compact access-role-select--general access-grants-role access-grants-role--editable access-role-select--public"
        .disabled=${this.disabled}
        .value=${this.publicAccessRoleValue}
        @change=${this.onPublicRoleChange}
      >
        ${this.renderPublicRoleOptions()}
      </solid-ui-combobox>
    `}renderGeneralAccessIcon(){return i`
      <div class="access-grants-general-share-icon">
        <div class="access-grants-general-share-icon-inner">
          <icon-lucide-globe class="access-grants-general-share-icon-image"></icon-lucide-globe>
        </div>
      </div>
    `}renderGeneralShareRow(e){return i`
      <div class="access-grants-general-share">
        <div class="access-grants-general-share-content">
          ${this.renderGeneralAccessIcon()}
          <div class="access-grants-general-share-text">
            <p class="access-grants-general-share-text-title">${e.title}</p>
            <p class="access-grants-general-share-text-description">${e.description}</p>
          </div>
        </div>
        ${e.variant==="authenticated"?this.renderAuthenticatedModeSelector():this.renderPublicModeSelector()}
      </div>
    `}render(){return i`
      <section class="access-grants-general" aria-labelledby="general-access-heading">
        <div class="access-grants-general-header">
          <h2 id="general-access-heading">General Access</h2>
          <solid-ui-button
            class="access-grants-copy-link-button"
            variant="tertiary"
            @click=${this.onCopyLinkClick}
          >
            <icon-lucide-link slot="left-icon"></icon-lucide-link>
            <span class="access-grants-copy-link-button-label">Copy Link</span>
          </solid-ui-button>
        </div>
        ${this.renderGeneralShareRow({title:"Only logged in users with the link",description:"Users must sign in to SolidOS to access this shared item using the link.",variant:"authenticated"})}
        ${this.renderGeneralShareRow({title:"Anyone with the Link",description:"Anyone on the internet with the link can view.",variant:"public"})}
      </section>
    `}};customElements.get("solid-ui-access-control-general-access")||customElements.define("solid-ui-access-control-general-access",$);var ae=await g(p(`:host {
  display: block;
  width: 100%;
  contain: inline-size;

  solid-ui-error-state {
    width: 100%;
    max-width: 100%;
    contain: inline-size;
  }

  .access-control-save-errors {
    display: grid;
    gap: 8px;
    width: 100%;
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;
    list-style: none;

    li {
      display: grid;
      grid-template-columns: minmax(0, 18rem) minmax(0, 1fr);
      align-items: baseline;
      gap: 6px;
      min-width: 0;
      color: var(--solid-ui-color-red-600, #be2e48);
      font-size: var(--solid-ui-font-size-sm, .875rem);
      line-height: 1.4;
    }

    .access-control-save-error-label {
      font-weight: 500;
      overflow-wrap: anywhere;
    }

    .access-control-save-error-detail {
      min-width: 0;
      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 600px) {
    .access-control-save-errors li {
      grid-template-columns: minmax(0, 40%) minmax(0, 1fr);
    }
  }
}
`,"text/css")),R=class extends x{static properties={errors:{attribute:!1},successfulChangesRefreshed:{attribute:!1}};constructor(){super(),this.errors=[],this.successfulChangesRefreshed=!0}static styles=ae;onClose(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}getScopeLabel(e){return e==="folder+contents"?"folder and contents":e==="container"?"folder":e==="contents"?"contents":"resource"}render(){return this.errors.length?i`
      <solid-ui-error-state
        title="Some access changes could not be saved"
        message=${this.successfulChangesRefreshed?"Any successful changes are shown above. The list below shows only the changes that failed. Close this dialog and reopen it if you want to try again.":"Some changes may have been saved, but we could not refresh the Shared with list. The list below shows only the changes that failed. Close this dialog and reopen it if you want to try again."}
        @close=${this.onClose}
      >
        <ul class="access-control-save-errors">
          ${this.errors.map(e=>i`
            <li>
              <span class="access-control-save-error-label">${e.label}</span>
              <span class="access-control-save-error-detail">
                ${e.action==="grant"?`Could not grant ${e.role??"access"} for ${e.scope?this.getScopeLabel(e.scope):"resource"}`:e.action==="revoke"?`Could not remove access for ${e.scope?this.getScopeLabel(e.scope):"resource"}`:e.action==="reset"?"Could not reset sharing":"Could not save access changes"}
              </span>
              <span class="access-control-save-error-message">${e.message}</span>
            </li>
          `)}
        </ul>
      </solid-ui-error-state>
    `:i``}};customElements.get("solid-ui-access-control-errors")||customElements.define("solid-ui-access-control-errors",R);function G(s){return{...s,agentClass:s.agentClass.filter(e=>e!==v.iri&&e!==m.iri)}}function Y(s){return[{type:"agent",iris:s.agent},{type:"agentGroup",iris:s.agentGroup},{type:"agentClass",iris:s.agentClass},{type:"origin",iris:s.origin}].flatMap(({type:t,iris:n})=>n.map(r=>({type:t,iri:r})))}function Q(s){return s.id?s.id:Y(s).map(e=>`${e.type}:${e.iri}`).sort().join("|")}function M(s){let e=new Map;return s.map(t=>{let n=G(t),r=Q(n),a=e.get(r)??0;return e.set(r,a+1),a===0?r:`${r}#${a}`})}function F(s){let e=[...s.agent,...s.agentGroup,...s.agentClass,...s.origin];return e.length?e.map(t=>b(u(t))).join(", "):"Unknown access holder"}function H(s){return l.acl.roleFromModes(s.mode)}function oe(s){let e=G(s);return{id:Q(e),authorization:e,role:H(e),initialRole:H(s),subjectLabel:F(e),subjects:Y(e)}}function T(s){let e=M(s);return s.map((t,n)=>({...oe(t),id:e[n]}))}function D(s){return[...s].sort((e,t)=>{let n=e.role==="Owner",r=t.role==="Owner";return n&&!r?-1:!n&&r?1:s.indexOf(e)-s.indexOf(t)})}function _(s){return D(s).filter(({role:e,initialRole:t,subjects:n})=>e!==t&&n.length>0).map(({authorization:e,subjects:t,role:n})=>({authorization:e,subjects:t,role:n}))}function E(s){let e=s.filter(t=>t.agentClass.includes(v.iri)).flatMap(t=>t.mode);return e.length?l.acl.roleFromModes(e):"No Access"}function V(s){let e=s.filter(t=>t.agentClass.includes(m.iri)).flatMap(t=>t.mode);return e.length?l.acl.publicRoleFromModes(e):"No Access"}function X(s){return s.iri===v.iri?"Authenticated users":s.iri===m.iri?"Public":b(u(s.iri)).trim()||s.iri}var ce=await g(p(`:host {
  .access-grants-form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    font-size: var(--solid-ui-font-size-sm, .875rem);

    --access-role-select-width: 129px;

    p {
      color: var(--solid-ui-color-gray-600, #4A5565);
      line-height: 1.5;
    }

    .access-grants-form-main {
      display: flex;
      align-items: center;
      gap: 10px;
      align-self: stretch;

      .access-grants-input {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-width: 0;
        padding: 10px 15px;
        gap: 12px;
        align-items: flex-start;
        border-radius: 5px;
        border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
        background: var(--solid-ui-color-white, #FFF);

        solid-ui-combobox {
          width: 100%;
          --solid-ui-input-border-color: var(--solid-ui-color-slate-200, #E2E8F0);
        }

        .access-principal-error {
          margin: 0;
          color: var(--solid-ui-color-red-700, #B42318);
          font-size: var(--solid-ui-font-size-xs, .75rem);
          line-height: 1.4;
        }
      }
    }

    .access-grants-pending {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      min-height: 42px;
      align-items: center;
    }

    .access-grants-pending-item {
      display: flex;
      padding: 5px 10px;
      align-items: center;
      gap: 6px;
      max-width: 100%;
      border-radius: 5px;
      border: 1px solid var(--solid-ui-color-gray-300, #D1D5DC);
      background: var(--solid-ui-color-gray-50, #F9FAFB);
      color: var(--solid-ui-color-gray-700, #374151);
    }

    .access-grants-pending-item-label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--solid-ui-color-gray-500, #6A7282);
      font-size: var(--solid-ui-font-size-xs, .75rem);
      line-height: 1;
    }

    .access-grants-pending-item-remove {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      border: none;
      border-radius: 999px;
      background: transparent;
      color: var(--solid-ui-color-gray-300, #D1D5DC);
      cursor: pointer;

      icon-lucide-circle-x {
        width: 14px;
        height: 14px;
      }
    }
  }

  .access-grants-directory-entry {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    line-height: 1;
  }

  .access-role-select {
    display: block;
    max-width: 100%;
    margin-top: 25px;
    flex: 0 0 auto;
    width: var(--access-role-select-width);
    --solid-ui-input-border-color: var(--solid-ui-color-slate-200, #E2E8F0);
  }

  .access-role-select--top {
    margin-top: 0;
  }
}
`,"text/css"));function J(s){return i`
    <span class="access-grants-directory-entry">
      ${le(s)}
      <span>${s.label}</span>
    </span>
  `}function le(s){return s.sources.includes("contacts")||s.sources.includes("groups")?i`<icon-lucide-book-user style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-book-user>`:s.sources.includes("friends")?i`<icon-lucide-users style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-users>`:s.sources.includes("catalog")?i`<icon-lucide-user-round style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-user-round>`:C}var U=class extends x{static properties={principalInputValue:{attribute:!1},addAccessRoleValue:{attribute:!1},pendingAccessGrants:{attribute:!1},inputError:{attribute:!1},disabled:{type:Boolean},asyncOptionsProvider:{attribute:!1}};constructor(){super(),this.principalInputValue="",this.addAccessRoleValue="Viewer",this.pendingAccessGrants=[],this.inputError="",this.disabled=!1,this.asyncOptionsProvider=null}static styles=ce;onPrincipalInput(e){let t=this.getEventValue(e);this.dispatchEvent(new CustomEvent("target-input",{detail:{value:t},bubbles:!0,composed:!0}))}onPrincipalSelect(e){let t=e.detail.option;typeof t.value=="string"&&this.dispatchEvent(new CustomEvent("target-selected",{detail:{value:t.value,label:t.label,targetKind:t.targetKind},bubbles:!0,composed:!0}))}onRoleChange(e){let t=e.detail.option.value,n=typeof t=="string"?f.find(r=>r===t):void 0;n&&this.dispatchEvent(new CustomEvent("role-changed",{detail:{role:n},bubbles:!0,composed:!0}))}onPendingGrantRemove(e){this.dispatchEvent(new CustomEvent("pending-grant-removed",{detail:{index:e},bubbles:!0,composed:!0}))}getEventValue(e){let t=e.currentTarget;return typeof t?.value=="string"?t.value:""}render(){return i`
      <section class="access-grants-form" aria-label="Add access">
        <p>Add person, group or software agent URL.</p>
        <div class="access-grants-form-main">
          <div class="access-grants-input">
            <solid-ui-combobox
              class="access-principal-combobox"
              .disabled=${this.disabled}
              label="Add person, group or software agent URL."
              .srOnlyLabel=${!0}
              .value=${this.principalInputValue}
              placeholder="Paste a link or enter a name"
              .asyncOptionsProvider=${this.asyncOptionsProvider}
              @input=${this.onPrincipalInput}
              @change=${this.onPrincipalSelect}
            ></solid-ui-combobox>
            ${this.inputError?i`<p class="access-principal-error" role="alert">${this.inputError}</p>`:C}
            ${this.renderPendingAccessGrants()}
          </div>
          <solid-ui-combobox
            class="access-role-select access-role-select--top"
            .disabled=${this.disabled}
            .value=${this.addAccessRoleValue}
            @change=${this.onRoleChange}
          >
            ${f.filter(e=>e!=="No Access").map(e=>i`
                <solid-ui-combobox-option value=${e}>${e}</solid-ui-combobox-option>
              `)}
          </solid-ui-combobox>
        </div>
      </section>
    `}renderPendingAccessGrants(){return this.pendingAccessGrants.length?i`
      <div class="access-grants-pending">
        ${this.pendingAccessGrants.map((e,t)=>i`
          <div class="access-grants-pending-item">
            <span class="access-grants-pending-item-label">
              ${e.targetKind==="trustedApp"?i`<icon-lucide-globe style="width: 13px; height: 13px; vertical-align: -2px;"></icon-lucide-globe>`:C}
              ${e.label}
            </span>
            <solid-ui-button
              type="button"
              variant="ghost"
              class="access-grants-pending-item-remove"
              ?disabled=${this.disabled}
              @click=${()=>this.onPendingGrantRemove(t)}
            >
              <span class="sr-only">Remove ${e.label}</span>
              <icon-lucide-circle-x slot="icon"></icon-lucide-circle-x>
            </solid-ui-button>
          </div>
        `)}
      </div>
    `:C}};customElements.get("solid-ui-access-control-add-access")||customElements.define("solid-ui-access-control-add-access",U);function j(s){try{let e=new URL(s);return(e.protocol==="http:"||e.protocol==="https:")&&!!e.hostname}catch{return!1}}function k(s){if(!j(s))return!1;let e=new URL(s);return e.pathname==="/"&&!e.search&&!e.hash&&!e.username&&!e.password}function B(s){let e=s.trim();if(!(!e||j(e)))try{let t=new URL(`https://${e}`),n=t.protocol==="http:"||t.protocol==="https:",r=t.pathname==="/"&&!t.search&&!t.hash,a=t.hostname.includes(".")||t.hostname.includes(":");return n&&r&&a&&!t.username&&!t.password?t.origin:void 0}catch{return}}function P(s,e){let t=new Map;for(let n of s){let r=e(n);r&&!t.has(r)&&t.set(r,n)}return[...t.values()]}function Z(s){return P(s,e=>e.value)}async function de(s){let e=B(s);return e?{kind:"origin",subjectValue:e}:k(s)?{kind:"origin",subjectValue:new URL(s).origin}:await l.acl.classifyAccessControlSubject(s)}async function ue(s,e){if(!s||s.kind==="origin")return s?.subjectValue;let t=u(s.subjectValue);await l.store.fetcher.load(t.doc());let n=e?.trim()||b(t).trim();if(!n||n===s.subjectValue)throw new Error("The access target has no usable display label.");return n}async function z(s,e){let t=await de(s);if(!t)return;let n=await ue(t,e);if(n)return{subjectType:t.kind,subjectValue:t.subjectValue,label:n,targetKind:t.kind==="origin"?"origin":void 0}}async function he(s){let e=await z(s);return e?{label:e.label,value:s}:void 0}function pe(s,e){return{label:e,value:s.uri,template:J({...s,label:e})}}async function ge(s){let e=B(s);if(e)return[{label:`Use origin ${e}`,value:e,targetKind:"origin",template:i`<span class="access-grants-directory-entry"><icon-lucide-globe style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-globe><span>Use origin ${e}</span></span>`}];if(!j(s))return[];if(k(s))return[{label:`Use origin ${new URL(s).origin}`,value:new URL(s).origin,targetKind:"origin",template:i`<span class="access-grants-directory-entry"><icon-lucide-globe style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-globe><span>Use origin ${new URL(s).origin}</span></span>`}];let t=await he(s);return Z(t?[t]:[])}async function fe(s){try{let e=l.authn.currentUser();if(!e)return[];await l.profile.loadProfile(e);let t=l.store;return t.each(e,O.acl("trustedApp")).flatMap(r=>{let a=t.any(r,O.acl("origin"));if(!a||!k(a.value))return[];let o=new URL(a.value).origin;return s&&!`${o} trusted app`.toLowerCase().includes(s.toLowerCase())?[]:[{label:`Trusted app: ${o}`,value:o,targetKind:"trustedApp",template:i`<span class="access-grants-directory-entry"><icon-lucide-globe style="width: 13px; height: 13px; flex: 0 0 13px;"></icon-lucide-globe><span>Trusted app: ${o}</span></span>`}]})}catch{return[]}}function me(s){return s.length?s:[{label:"Type at least 2 characters to search",value:"",selectable:!1}]}var ee=async s=>{let e=s.trim(),t=await ge(e),n=await fe(e);if(e.length<2)return P([...t,...n,...me(t)],c=>{let d=c;return typeof d.value=="string"?`${d.value}:${d.targetKind??"default"}`:void 0});let r=[];try{r=await l.directory.search({query:e,sources:N})}catch(c){if(!t.length&&!n.length)throw c}let o=(await Promise.all(r.map(async c=>{try{let d=await z(c.uri,c.label);return d?{entry:c,label:d.label}:void 0}catch{return}}))).filter(c=>c!==void 0).map(({entry:c,label:d})=>pe(c,d));return P([...t,...n,...o],c=>{let d=c;return typeof d.value=="string"?`${d.value}:${d.targetKind??"default"}`:void 0})};async function te(s,e,t={}){let n=[],r=t.containerScope??"file";for(let{subject:a,label:o,role:c}of e)try{let d=r==="folder+contents"?l.acl.planGrantContainerAndContents:r==="container"?l.acl.planGrantContainer:r==="contents"?l.acl.planGrantContainerContents:l.acl.planGrant,I=c==="No Access"?await(r==="contents"?l.acl.planRevokeContainerContents(s,a):l.acl.planRevoke(s,a)):await d(s,a,be(a,c));await l.acl.applyPlan(I)}catch(d){n.push({action:c==="No Access"?"revoke":"grant",targetUri:a.iri,label:o,role:c,scope:r,message:d instanceof Error?d.message:"Unable to apply access change."})}return n}function be(s,e){if(s.type==="agentClass"&&s.iri===m.iri){let t=w.find(n=>n===e);if(!t)throw new Error(`Public access does not support the ${e} role.`);return l.acl.modesFromPublicRole(t)}return l.acl.modesFromRole(e)}function se({pendingAccessGrants:s,generalAccessChanges:e,changedAccessGrants:t}){return[...s.map(n=>({subject:{type:n.subjectType,iri:n.subjectValue},role:n.role,label:n.label})),...e,...t.flatMap(({subjects:n,role:r})=>n.map(a=>({subject:a,role:r,label:X(a)})))]}var xe=await g(p(`:host {
  .access-control-mixed-policy-warning {
    display: grid;
    gap: 4px;
    margin: 0 0 16px;
    padding: 12px 14px;
    border: 1px solid var(--solid-ui-color-red-300, #FCA5A5);
    border-radius: 5px;
    background: var(--solid-ui-color-red-50, #FEF2F2);
    color: var(--solid-ui-color-red-800, #991B1B);
    font-size: var(--solid-ui-font-size-sm, .875rem);
    line-height: 1.45;

    strong {
      font-weight: 600;
    }
  }

  .access-control-same-access-toggle {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 12px;
    color: var(--solid-ui-color-gray-900, #101828);
    line-height: 1.4;
    border: 0;
    background: transparent;
    padding: 0;
    text-align: left;
    font: inherit;
    cursor: pointer;
  }

  .access-control-switch-track {
    display: inline-flex;
    flex: 0 0 auto;
    width: 34px;
    height: 20px;
    margin-top: 1px;
    border-radius: 999px;
    background: var(--solid-ui-color-slate-300, #CBD5E1);
    padding: 2px;
    transition: background .15s ease;
  }

  .access-control-same-access-toggle[aria-checked='true'] .access-control-switch-track {
    background: var(--solid-ui-color-purple-600, #9333EA);
  }

  .access-control-switch-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgb(0 0 0 / 25%);
    transition: transform .15s ease;
  }

  .access-control-same-access-toggle[aria-checked='true'] .access-control-switch-thumb {
    transform: translateX(14px);
  }

  .access-control-same-access-toggle > span:last-child {
    min-width: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .access-control-sharing-state,
  .access-control-contents-prompt {
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    font-size: var(--solid-ui-font-size-sm, .875rem);

    h2 {
      margin: 0 0 10px;
      color: var(--solid-ui-color-gray-900, #101828);
      font-size: var(--solid-ui-font-size-md, 1rem);
      font-weight: 600;
    }

    .access-control-advanced-sharing {
      box-sizing: border-box;
      min-width: 0;
      width: 100%;
      max-width: 100%;
      overflow-wrap: anywhere;
      margin-top: 10px;
      padding: 10px 15px;
      position: relative;
      padding-right: 48px;

      h2 {
        margin: 0 0 4px;
        color: var(--solid-ui-color-gray-900, #101828);
        font-size: var(--solid-ui-font-size-md, 1rem);
        font-weight: 600;
      }

      p {
        margin: 0;
        min-width: 0;
        max-width: 100%;
        overflow-wrap: anywhere;
        color: var(--solid-ui-color-gray-600, #4A5565);
        font-size: var(--solid-ui-font-size-xs, .75rem);
        line-height: 1.5;
      }

      .access-control-advanced-sharing-description-line {
        display: block;
        max-width: 100%;
      }
    }

    .access-control-advanced-sharing-options,
    .access-control-advanced-sharing-actions {
      display: flex;
      flex-wrap: wrap;
      min-width: 0;
      gap: 8px;
      margin-top: 10px;

      solid-ui-button {
        --solid-ui-font-size-md: var(--solid-ui-font-size-sm, .875rem);
        min-width: 0;
        max-width: 100%;
        white-space: normal;
      }
    }

    .access-control-advanced-sharing-actions {
      justify-content: flex-end;
      position: absolute;
      top: 10px;
      right: 15px;
      margin-top: 0;

      solid-ui-button {
        color: var(--solid-ui-color-gray-600, #4A5565);
      }
    }

    p {
      margin: 0;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      color: var(--solid-ui-color-gray-600, #4A5565);
      line-height: 1.5;
    }
  }

  .access-control-sharing-state-panel,
  .access-control-contents-prompt {
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
    border-radius: 5px;
    background: var(--solid-ui-color-white, #FFF);
    padding: 10px 15px;
  }

  .access-control-sharing-state-panel {
    display: grid;
    gap: 10px;

    p {
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
    }

    .access-control-sharing-state-custom-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px;

      p {
        flex: 1 1 auto;
      }

      solid-ui-button {
        flex: 0 0 auto;
        --solid-ui-font-size-md: var(--solid-ui-font-size-sm, .875rem);
      }
    }
  }

  .access-control-sharing-guidance {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
    gap: 12px;

    p {
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
    }

    solid-ui-button {
      flex: 0 0 auto;
      --solid-ui-font-size-md: var(--solid-ui-font-size-sm, .875rem);
    }
  }

  .access-control-sharing-state-actions {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 0;
    justify-content: flex-end;
    margin-top: 10px;
    gap: 8px;

    solid-ui-button {
      --solid-ui-font-size-md: var(--solid-ui-font-size-sm, .875rem);
      max-width: 100%;
    }
  }

  @media (max-width: 420px) {
    .access-control-sharing-guidance {
      align-items: flex-start;
      flex-direction: column;
      gap: 8px;

      solid-ui-button {
        align-self: flex-end;
      }
    }
  }

  .access-control-contents-prompt {
    .access-control-contents-prompt-actions {
      display: flex;
      flex-wrap: wrap;
      min-width: 0;
      gap: 8px;
      margin-top: 10px;
    }

    solid-ui-button {
      --solid-ui-font-size-md: var(--solid-ui-font-size-sm, .875rem);
      max-width: 100%;
      flex: 0 1 auto;
    }
  }

  .access-control-contents-prompt h2 {
    margin-bottom: 4px;
  }

  .access-control-footer-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    width: 100%;

    > solid-ui-button {
      min-width: 132px;
    }
  }

  @media (max-width: 380px) {
    .access-control-footer-actions {
      gap: 8px;

      > solid-ui-button {
        min-width: 0;
        flex: 1 1 0;
      }
    }
  }
}
`,"text/css"));function ve(s){return s!=null}var y=class extends W{static properties={subjectUri:{attribute:!1},accessGrants:{attribute:!1},principalInputValue:{state:!0},addAccessRoleValue:{state:!0},authenticatedAccessRoleValue:{state:!0},publicAccessRoleValue:{state:!0},submitting:{state:!0},pendingAccessGrants:{state:!0},accessGrantDrafts:{state:!0},errors:{state:!0},successfulChangesRefreshed:{state:!0},accessContext:{state:!0},accessContextLoading:{state:!0},accessContextError:{state:!0},advancedSharingOpen:{state:!0},containerScope:{state:!0},containerScopeAnalysis:{state:!0},protectedTarget:{state:!0}};constructor(){super(),this.subjectUri=void 0,this.accessGrants=void 0,this.principalInputValue="",this.addAccessRoleValue="Viewer",this.authenticatedAccessRoleValue="No Access",this.publicAccessRoleValue="No Access",this.submitting=!1,this.pendingAccessGrants=[],this.accessGrantDrafts=[],this.errors=[],this.successfulChangesRefreshed=!0,this.accessContextLoading=!1,this.accessContextError="",this.advancedSharingOpen=!1,this.containerScope="folder+contents",this.protectedTarget=!1}static styles=xe;accessGrantLabelRequestVersion=0;accessContextRequestVersion=0;accessContextSubjectUri;disconnectedCallback(){this.accessGrantLabelRequestVersion++,this.accessContextRequestVersion++,this.errors=[],super.disconnectedCallback()}get inputError(){return this.errors.find(e=>e.action==="input")?.message??""}get saveErrors(){return this.errors.filter(e=>e.action!=="input")}setInputError(e){this.errors=[...this.errors.filter(t=>t.action!=="input"),e]}clearInputError(){this.errors=this.errors.filter(e=>e.action!=="input")}willUpdate(e){if(super.willUpdate(e),e.has("accessGrants")){let t=this.getScopedAccessGrants();this.accessGrantDrafts=T(t),this.authenticatedAccessRoleValue=E(t),this.publicAccessRoleValue=V(t)}}updated(e){super.updated(e),e.has("subjectUri")&&this.loadAccessContext().catch(t=>{h("Failed to load access control context",t)}),e.has("accessGrants")&&this.refreshAccessGrantLabels().catch(t=>{h("Failed to refresh access grant labels",t)}),e.has("accessContext")&&!e.has("subjectUri")&&this.refreshContainerScopeAnalysis()}refreshContainerScopeAnalysis(){this.isContainer()&&this.accessContext?(this.containerScopeAnalysis=q(this.accessContext),this.containerScope=this.containerScopeAnalysis.primaryScope,this.refreshScopedAccessGrantDrafts()):this.containerScopeAnalysis=void 0}async refreshAccessGrantLabels(){let e=++this.accessGrantLabelRequestVersion,t=this.accessGrants,n=this.subjectUri,r=this.getSelectedContainerScope(),a=this.getScopedAccessGrants(r);if(!a.length){this.accessGrantDrafts=[];return}let o=await Promise.all(a.map(async c=>(await Promise.all(c.agentGroup.map(async d=>{try{await l.store.fetcher.load(u(d).doc())}catch{}})),F(G(c)))));if(e===this.accessGrantLabelRequestVersion&&this.accessGrants===t&&this.subjectUri===n&&this.getSelectedContainerScope()===r){let c=new Map(M(a).map((d,I)=>[d,o[I]]));this.accessGrantDrafts=this.accessGrantDrafts.map(d=>({...d,subjectLabel:c.get(d.id)??d.subjectLabel}))}}getDialogTitle(){let e=this.subjectUri?u(this.subjectUri):void 0,t=e?b(e).trim():"";return!t||t==="this resource"?'Manage Access of "this resource"':`Manage Access of "${t}"`}isContainer(){return!!(this.subjectUri&&new URL(this.subjectUri).pathname.endsWith("/"))}async loadAccessContext(){let e=++this.accessContextRequestVersion,t=this.subjectUri;if(this.accessContext=void 0,this.accessContextSubjectUri=void 0,this.accessContextError="",this.accessContextLoading=!!t,!t){this.accessContextLoading=!1;return}try{let n=await l.acl.findEffectiveAcl(t);if(e!==this.accessContextRequestVersion||this.subjectUri!==t)return;this.accessContext=n,this.accessContextSubjectUri=t,this.accessContext?.inherited&&!this.accessGrants?.length&&(this.accessGrants=this.accessContext.authorizations),this.refreshContainerScopeAnalysis(),this.protectedTarget=l.acl.isProtectedResource(t),this.protectedTarget&&this.refreshScopedAccessGrantDrafts()}catch(n){if(e!==this.accessContextRequestVersion||this.subjectUri!==t)return;this.accessContextError=n instanceof Error&&n.message.trim()?n.message:"Unable to load access settings for this resource.",h("Failed to load access control context",n)}finally{e===this.accessContextRequestVersion&&this.subjectUri===t&&(this.accessContextLoading=!1)}}async ensureAccessContext(){return this.subjectUri?!this.isConnected||this.accessContextSubjectUri===this.subjectUri&&this.accessContext&&!this.accessContextError?!0:(await this.loadAccessContext(),this.accessContextSubjectUri===this.subjectUri&&!!this.accessContext&&!this.accessContextError):!1}canMutate(){return!this.isConnected||!this.subjectUri?!0:!!(this.subjectUri&&this.accessContextSubjectUri===this.subjectUri&&this.accessContext&&!this.accessContextLoading&&!this.accessContextError)}async retryAccessContext(){await this.loadAccessContext()}renderSharingInformation(){if(!this.accessContext)return i``;let e=!this.accessContext.inherited,t=this.accessContext?.effectiveContainer,n=t?b(u(t)).trim():"",r=n&&n!==t?i`<strong>${n}</strong> (${t})`:i`<strong>${t??"the parent container"}</strong>`;return i`
      <div class="access-control-sharing-state-panel">
        ${e?i`
            <div class="access-control-sharing-state-custom-row">
              <p>This resource has its own sharing settings.</p>
              ${this.protectedTarget?i``:i`
                  <solid-ui-button
                    type="button"
                    variant="tertiary"
                    aria-label="Reset custom sharing to default"
                    @click=${this.onResetToDefault}
                  >
                    Reset to default
                  </solid-ui-button>
                `}
            </div>
          `:t?i`<p>This resource inherits sharing settings from ${r}.</p>`:i`<p>This resource inherits sharing settings, but no inherited default is available.</p>`}
        ${this.protectedTarget?i`<p class="access-control-sharing-state-protected-message">This is a protected storage resource. Its primary access-control settings cannot be reset here.</p>`:i``}
      </div>
    `}renderSharingState(){return!this.accessContext||!this.advancedSharingOpen?i``:i`
      <section
        class="access-control-sharing-state"
        aria-labelledby="access-control-advanced-sharing-heading"
      >
        ${this.renderSharingInformation()}
        ${this.renderAdvancedSharing()}
      </section>
    `}getSelectedContainerScope(){return this.containerScope}hasMixedContainerPolicy(){return this.isContainer()&&this.containerScopeAnalysis?.mixed===!0}renderAccessContextState(){return this.accessContextLoading?i`<p role="status">Loading access settings...</p>`:this.accessContextError?i`
        <solid-ui-error-state
          title="Could not load access settings"
          message=${this.accessContextError}
        >
          <solid-ui-button type="button" variant="secondary" @click=${this.retryAccessContext}>
            Retry
          </solid-ui-button>
        </solid-ui-error-state>
      `:this.accessContext?i``:i`<p role="status">Access settings are not ready yet.</p>`}renderMixedContainerWarning(){return this.hasMixedContainerPolicy()?i`
      <div class="access-control-mixed-policy-warning" role="alert">
        <strong>This container has different access settings for the folder and its contents.</strong>
        <span>Changing this mixed policy is an advanced feature. You can still change access for the folder or its contents separately below.</span>
      </div>
    `:i``}getScopedAccessGrants(e=this.getSelectedContainerScope()){let t=this.accessGrants??[];return!this.isContainer()||!this.subjectUri||this.protectedTarget?t:K(this.subjectUri,t,e,this.accessContext?.inherited??!1)}refreshScopedAccessGrantDrafts(){let e=this.getScopedAccessGrants();this.accessGrantDrafts=T(e),this.authenticatedAccessRoleValue=E(e),this.publicAccessRoleValue=V(e)}selectContainerScope(e){this.containerScope=e,this.refreshScopedAccessGrantDrafts()}renderAdvancedSharing(){return this.advancedSharingOpen?i`
      <section
        id="access-control-advanced-sharing"
        class="access-control-advanced-sharing"
        role="group"
        aria-labelledby="access-control-advanced-sharing-heading"
        aria-describedby="access-control-advanced-sharing-description"
      >
        <h2 id="access-control-advanced-sharing-heading">Advanced sharing</h2>
        <p id="access-control-advanced-sharing-description">
          <span class="access-control-advanced-sharing-description-line">Use this option when the folder and its contents have different access requirements.</span>
          <span class="access-control-advanced-sharing-description-line">Choose which access settings to edit.</span>
          <span class="access-control-advanced-sharing-description-line">Save Changes applies your current edits only to that scope.</span>
        </p>
        ${this.isContainer()?i`
            <button
              type="button"
              class="access-control-same-access-toggle"
              role="switch"
              aria-checked=${this.containerScope==="folder+contents"?"true":"false"}
              @click=${()=>{let e=this.containerScope!=="folder+contents";this.selectContainerScope(e?"folder+contents":this.containerScope==="contents"?"contents":"folder")}}
            >
              <span class="access-control-switch-track" aria-hidden="true">
                <span class="access-control-switch-thumb"></span>
              </span>
              <span>Use the same access for this folder and its contents</span>
            </button>
            <div class="access-control-advanced-sharing-options">
              <solid-ui-button
                type="button"
                variant=${this.containerScope==="folder"?"primary":"secondary"}
                aria-pressed=${this.containerScope==="folder"?"true":"false"}
                @click=${()=>{this.selectContainerScope("folder")}}
              >
                Folder Only
              </solid-ui-button>
              <solid-ui-button
                type="button"
                variant=${this.containerScope==="contents"?"primary":"secondary"}
                aria-pressed=${this.containerScope==="contents"?"true":"false"}
                @click=${()=>{this.selectContainerScope("contents")}}
              >
                Contents Only
              </solid-ui-button>
            </div>
          `:i``}
        <div class="access-control-advanced-sharing-actions">
          <solid-ui-button
            type="button"
            variant="ghost"
            aria-label="Close advanced sharing"
            title="Close advanced sharing"
            @click=${this.closeAdvancedSharing}
          >
            <icon-lucide-x slot="icon" aria-hidden="true"></icon-lucide-x>
            <span class="sr-only">Close</span>
          </solid-ui-button>
        </div>
      </section>
    `:i``}render(){let e=this.getDialogTitle();return i`
      <solid-ui-dialog title=${e}>
        <form @submit=${this.onSubmit}>
          <solid-ui-dialog-content>
            ${this.renderAccessContextState()}
            ${this.renderMixedContainerWarning()}
          <solid-ui-access-control-add-access
              .disabled=${!this.canMutate()||this.hasMixedContainerPolicy()}
              .principalInputValue=${this.principalInputValue}
              .addAccessRoleValue=${this.addAccessRoleValue}
              .pendingAccessGrants=${this.pendingAccessGrants}
              .inputError=${this.inputError}
              .asyncOptionsProvider=${ee}
              @target-input=${this.onPrincipalInput}
              @target-selected=${this.onPrincipalSelect}
              @role-changed=${this.onAddAccessRoleInput}
              @pending-grant-removed=${this.onPendingGrantRemoved}
            ></solid-ui-access-control-add-access>
            <solid-ui-access-control-shared-access
              .disabled=${!this.canMutate()||this.hasMixedContainerPolicy()}
              .accessGrantViewModels=${D(this.accessGrantDrafts)}
              @access-grant-role-changed=${this.onAccessGrantRoleInput}
            ></solid-ui-access-control-shared-access>
            <solid-ui-access-control-general-access
              .disabled=${!this.canMutate()||this.hasMixedContainerPolicy()}
              .subjectUri=${this.subjectUri}
              .authenticatedAccessRoleValue=${this.authenticatedAccessRoleValue}
              .publicAccessRoleValue=${this.publicAccessRoleValue}
              @authenticated-role-changed=${this.onAuthenticatedAccessRoleInput}
              @public-role-changed=${this.onPublicAccessRoleInput}
            ></solid-ui-access-control-general-access>
            <solid-ui-access-control-errors
              .errors=${this.saveErrors}
              .successfulChangesRefreshed=${this.successfulChangesRefreshed}
              @close=${this.onCancelClick}
            ></solid-ui-access-control-errors>
            ${this.renderSharingState()}
          </solid-ui-dialog-content>

          <solid-ui-dialog-footer>
            <div class="access-control-footer-actions">
              <solid-ui-button
                variant="secondary"
                @click=${this.onCancelClick}
              >
                Cancel
              </solid-ui-button>
              <solid-ui-button
                ?disabled=${!this.canMutate()||!this.hasUnsavedChanges()||this.submitting||this.saveErrors.length>0||this.hasMixedContainerPolicy()}
                ?loading=${this.submitting}
                type="button"
                @click=${this.onSaveClick}
              >
                Save Changes
              </solid-ui-button>
            </div>
          </solid-ui-dialog-footer>
        </form>
      </solid-ui-dialog>
    `}async onSubmit(e){e.preventDefault(),!(this.submitting||this.hasMixedContainerPolicy())&&(this.isConnected&&!await this.ensureAccessContext()||await this.commitPrincipalFromInputSafely())}async onSaveClick(){if(this.submitting||this.hasMixedContainerPolicy()||this.isConnected&&!await this.ensureAccessContext()||this.principalInputValue.trim()&&!await this.commitPrincipalFromInputSafely())return;let e=this.isContainer()&&!this.protectedTarget?this.getSelectedContainerScope():"file";await this.saveAccessChanges(e==="folder"?"container":e)}onCancelClick(){this.close()}closeAdvancedSharing(){this.advancedSharingOpen=!1}async onResetToDefault(){if(!(!this.subjectUri||!this.canMutate()||!this.accessContext||this.accessContext.inherited||this.submitting||this.hasMixedContainerPolicy())){this.submitting=!0,this.errors=this.errors.filter(e=>e.action==="input");try{await l.acl.resetToDefault(this.subjectUri),await this.loadAccessContext();let e=await l.acl.findAccessGrants(this.subjectUri);this.accessGrants=this.accessContext?.inherited?this.accessContext.authorizations:e}catch(e){this.errors=[...this.errors,{action:"reset",targetUri:this.subjectUri,label:"Custom sharing",message:e instanceof Error?e.message:"Unable to reset sharing."}],h("Failed to reset access control",e)}finally{this.submitting=!1}}}async saveAccessChanges(e="file"){if(this.submitting||!this.canMutate()||this.hasMixedContainerPolicy())return;let t=_(this.accessGrantDrafts),n=this.getGeneralAccessChanges();if(!(!this.pendingAccessGrants.length&&!t.length&&!n.length)&&this.subjectUri){this.submitting=!0,this.errors=this.errors.filter(r=>r.action==="input"),this.successfulChangesRefreshed=!0;try{let r=se({pendingAccessGrants:this.pendingAccessGrants,generalAccessChanges:n,changedAccessGrants:t}),a=await te(this.subjectUri,r,{containerScope:e});if(a.length){this.errors=[...this.errors,...a],this.principalInputValue="",this.pendingAccessGrants=[];try{this.accessGrants=await l.acl.findAccessGrants(this.subjectUri)}catch(o){this.successfulChangesRefreshed=!1,this.errors=[...this.errors,{action:"save",targetUri:this.subjectUri,label:"Shared with list",message:o instanceof Error?o.message:"Unable to refresh the access list."}],h("Failed to refresh access grants after save errors",o)}h("Failed to save some access changes",a);return}this.principalInputValue="",this.pendingAccessGrants=[],this.close()}catch(r){this.errors=[...this.errors,{action:"save",targetUri:this.subjectUri??"",label:"Access changes",message:r instanceof Error?r.message:"Unexpected error while saving access changes."}]}finally{this.submitting=!1}}}onPrincipalInput(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.principalInputValue=e.detail.value,this.clearInputError())}onPrincipalSelect(e){!this.canMutate()||this.hasMixedContainerPolicy()||this.queuePendingPrincipal(e.detail.value,this.addAccessRoleValue,e.detail.label,void 0,e.detail.targetKind)}getGeneralAccessChanges(){if(!this.subjectUri)return[];let e=this.getScopedAccessGrants(),t=E(e),n=V(e),r=this.authenticatedAccessRoleValue===t?void 0:{subject:v,role:this.authenticatedAccessRoleValue,label:"Authenticated users"},a=this.publicAccessRoleValue===n?void 0:{subject:m,role:this.publicAccessRoleValue,label:"Public"};return[r,a].filter(ve)}onAddAccessRoleInput(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.addAccessRoleValue=e.detail.role,this.pendingAccessGrants=this.pendingAccessGrants.map(t=>({...t,role:e.detail.role})))}onAuthenticatedAccessRoleInput(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.authenticatedAccessRoleValue=e.detail.role)}onPublicAccessRoleInput(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.publicAccessRoleValue=e.detail.role)}onAccessGrantRoleInput(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.accessGrantDrafts=this.accessGrantDrafts.map(t=>t.id===e.detail.id?{...t,role:e.detail.role}:t))}onPendingGrantRemoved(e){!this.canMutate()||this.hasMixedContainerPolicy()||(this.pendingAccessGrants=this.pendingAccessGrants.filter((t,n)=>n!==e.detail.index))}hasUnsavedChanges(){return!!(this.pendingAccessGrants.length||this.principalInputValue.trim()||_(this.accessGrantDrafts).length||this.getGeneralAccessChanges().length)}async commitPrincipalFromInput(){if(!this.canMutate()||this.hasMixedContainerPolicy())return!1;let e=this.principalInputValue.trim();return e?this.queuePendingPrincipal(e,this.addAccessRoleValue,void 0,e):!1}async commitPrincipalFromInputSafely(){let e=this.principalInputValue.trim();try{return await this.commitPrincipalFromInput()}catch(t){return this.principalInputValue.trim()!==e?(h("Ignored stale access-target validation error",t),!1):(this.setInputError({action:"input",label:"Access target",targetUri:this.principalInputValue.trim(),message:"We could not verify this access target. Check the value and try again."}),h("Failed to commit pending access grants",t),!1)}}async queuePendingPrincipal(e,t=this.addAccessRoleValue,n,r,a){let o=r??this.principalInputValue.trim(),c=await this.createPendingAccessGrant(e,t,n,a);if("error"in c)return this.principalInputValue.trim()===o&&this.setInputError(c.error),h("Failed to add access grant:",c.error.message),!1;let d=[...this.pendingAccessGrants,c.grant];return this.pendingAccessGrants=this.dedupePendingAccessGrants(d),this.principalInputValue.trim()===o&&(this.clearInputError(),this.principalInputValue=""),!0}async createPendingAccessGrant(e,t=this.addAccessRoleValue,n,r){try{let a=e.trim(),o=await z(a,n);return o?{grant:{subjectType:o.subjectType,subjectValue:o.subjectValue,role:t,label:o.label,targetKind:r??o.targetKind}}:{error:{action:"input",label:"Access target",targetUri:a,message:"Could not verify this access target"}}}catch(a){return{error:{action:"input",label:"Access target",targetUri:e,message:a instanceof Error&&a.message.trim()?a.message:"Could not verify this access target"}}}}dedupePendingAccessGrants(e){let t=new Map;for(let n of e)t.set(`${n.subjectType}:${n.subjectValue}`,n);return[...t.values()]}};customElements.get("solid-ui-access-control-modal")||customElements.define("solid-ui-access-control-modal",y);var Dt=y;export{y as AccessControlModal,Dt as default};
