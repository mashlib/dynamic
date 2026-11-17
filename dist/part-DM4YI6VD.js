import{a as s}from"./part-VJTDSXSH.js";import{a as d,b as p}from"./part-5ZTE77ED.js";import{c as u}from"./part-USTJ2YCK.js";import{html as n,nothing as l}from"lit";import"rdflib";import{solidLogicSingleton as h,store as v}from"solid-logic";import{parse as L}from"rdflib";import{sym as I}from"rdflib";import{authn as S,store as U}from"solid-logic";function f(t,o){if(!t||!o)return!1;let r=t.sym(o),i=t.findTypeURIs(r);return!!(i[s.ldp("Container").uri]||i[s.ldp("BasicContainer").uri]||r.uri.endsWith("/"))}function k(t,o){if(!t||!o)return 0;let r=t.sym(o),i=new Set;for(let a of t.each(r,s.ldp("contains")))if(a.termType==="NamedNode"){let e=a;h.resource.isHiddenFile(e)||i.add(e.uri)}return i.size}var g=await d(u(`:host {
  .file-explorer-header-more-button {
    width: var(--solid-ui-clickable-area, 42px);
    height: var(--solid-ui-clickable-area, 42px);
    padding: 0;
  }

  .ellipsisIcon {
    width: 16px;
    height: 16px;
  }
}
`,"text/css")),c=class extends p{static properties={store:{attribute:!1},subjectUri:{type:String},handleAccessClick:{attribute:!1},handleEditingClick:{attribute:!1},paneSupportsEditing:{type:Boolean},canEdit:{type:Boolean},canManageAccess:{type:Boolean},isMobile:{type:Boolean},showAccessInMenu:{type:Boolean,attribute:"show-access-in-menu"},menuItems:{attribute:!1}};constructor(){super(),this.handleAccessClick=void 0,this.handleEditingClick=void 0,this.paneSupportsEditing=!1,this.canEdit=!1,this.canManageAccess=!1,this.isMobile=!1,this.showAccessInMenu=!1,this.menuItems=[]}static styles=g;handleOpenInNewTab=()=>{this.subjectUri&&window.open(this.subjectUri,"_blank","noopener,noreferrer")};render(){let r=!f(this.store,this.subjectUri)&&this.isMobile&&this.paneSupportsEditing&&this.canEdit&&!!this.handleEditingClick,i=this.canManageAccess&&!!this.handleAccessClick&&(this.showAccessInMenu||this.isMobile),a=this.menuItems.filter(e=>typeof e.action=="function");return n`
      <solid-ui-menu>
        <solid-ui-button slot="trigger" class="file-explorer-header-more-button" variant="ghost" title="More options">
          <icon-lucide-ellipsis-vertical slot="icon" class="ellipsisIcon"></icon-lucide-ellipsis-vertical>
          <span class="sr-only">More options</span>
        </solid-ui-button>
        ${a.map(e=>n`
          <solid-ui-menu-item @solid-ui-select=${m=>e.action(m)}>
            ${typeof e.icon=="string"?n`<img slot="left-icon" src=${e.icon} alt="">`:e.icon??n`<icon-lucide-file slot="left-icon" aria-hidden="true"></icon-lucide-file>`}
            ${e.label}
          </solid-ui-menu-item>
        `)}
        ${this.subjectUri?n`
              <solid-ui-menu-item @solid-ui-select=${this.handleOpenInNewTab}>
                <icon-lucide-square-arrow-out-up-right slot="left-icon"></icon-lucide-square-arrow-out-up-right>
                Open in New Tab
              </solid-ui-menu-item>
            `:l}
        ${r?n`
              <solid-ui-menu-item @solid-ui-select=${this.handleEditingClick}>
                <icon-lucide-pencil slot="left-icon"></icon-lucide-pencil>
                Edit
              </solid-ui-menu-item>
            `:l}
        ${i?n`
              <solid-ui-menu-item @solid-ui-select=${this.handleAccessClick}>
                <icon-lucide-user-round-cog slot="left-icon"></icon-lucide-user-round-cog>
                Manage Access
              </solid-ui-menu-item>
            `:l}
      </solid-ui-menu>
    `}};customElements.get("solid-ui-resource-actions-menu")||customElements.define("solid-ui-resource-actions-menu",c);export{f as a,k as b,c};
