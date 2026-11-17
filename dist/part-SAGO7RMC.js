import{a as s}from"./part-V7XQEHON.js";import{a as p,b as f}from"./part-VHSBPZHI.js";import{c as u}from"./part-GPLAS2FA.js";import{A as d}from"./part-SVX36NT2.js";import{a as i,e as c}from"./part-VOCLXBLR.js";function m(t,o){if(!t||!o)return!1;let r=t.sym(o),n=t.findTypeURIs(r);return!!(n[s.ldp("Container").uri]||n[s.ldp("BasicContainer").uri]||r.uri.endsWith("/"))}function U(t,o){if(!t||!o)return 0;let r=t.sym(o),n=new Set;for(let a of t.each(r,s.ldp("contains")))if(a.termType==="NamedNode"){let e=a;d.resource.isHiddenFile(e)||n.add(e.uri)}return n.size}var g=await p(u(`:host {
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
`,"text/css")),l=class extends f{static properties={store:{attribute:!1},subjectUri:{type:String},handleAccessClick:{attribute:!1},handleEditingClick:{attribute:!1},paneSupportsEditing:{type:Boolean},canEdit:{type:Boolean},canManageAccess:{type:Boolean},isMobile:{type:Boolean},showAccessInMenu:{type:Boolean,attribute:"show-access-in-menu"},menuItems:{attribute:!1}};constructor(){super(),this.handleAccessClick=void 0,this.handleEditingClick=void 0,this.paneSupportsEditing=!1,this.canEdit=!1,this.canManageAccess=!1,this.isMobile=!1,this.showAccessInMenu=!1,this.menuItems=[]}static styles=g;handleOpenInNewTab=()=>{this.subjectUri&&window.open(this.subjectUri,"_blank","noopener,noreferrer")};render(){let r=!m(this.store,this.subjectUri)&&this.isMobile&&this.paneSupportsEditing&&this.canEdit&&!!this.handleEditingClick,n=this.canManageAccess&&!!this.handleAccessClick&&(this.showAccessInMenu||this.isMobile),a=this.menuItems.filter(e=>typeof e.action=="function");return i`
      <solid-ui-menu>
        <solid-ui-button slot="trigger" class="file-explorer-header-more-button" variant="ghost" title="More options">
          <icon-lucide-ellipsis-vertical slot="icon" class="ellipsisIcon"></icon-lucide-ellipsis-vertical>
          <span class="sr-only">More options</span>
        </solid-ui-button>
        ${a.map(e=>i`
          <solid-ui-menu-item @solid-ui-select=${h=>e.action(h)}>
            ${typeof e.icon=="string"?i`<img slot="left-icon" src=${e.icon} alt="">`:e.icon??i`<icon-lucide-file slot="left-icon" aria-hidden="true"></icon-lucide-file>`}
            ${e.label}
          </solid-ui-menu-item>
        `)}
        ${this.subjectUri?i`
              <solid-ui-menu-item @solid-ui-select=${this.handleOpenInNewTab}>
                <icon-lucide-square-arrow-out-up-right slot="left-icon"></icon-lucide-square-arrow-out-up-right>
                Open in New Tab
              </solid-ui-menu-item>
            `:c}
        ${r?i`
              <solid-ui-menu-item @solid-ui-select=${this.handleEditingClick}>
                <icon-lucide-pencil slot="left-icon"></icon-lucide-pencil>
                Edit
              </solid-ui-menu-item>
            `:c}
        ${n?i`
              <solid-ui-menu-item @solid-ui-select=${this.handleAccessClick}>
                <icon-lucide-user-round-cog slot="left-icon"></icon-lucide-user-round-cog>
                Manage Access
              </solid-ui-menu-item>
            `:c}
      </solid-ui-menu>
    `}};customElements.get("solid-ui-resource-actions-menu")||customElements.define("solid-ui-resource-actions-menu",l);export{m as a,U as b,l as c};
