import{a as m,b as M}from"./part-SAGO7RMC.js";import{a as w,c as C}from"./part-TKTGPRZR.js";import{a as c,b as d}from"./part-WZ5ZOODI.js";import{l as y}from"./part-H5FMENGX.js";import{e as E}from"./part-HZXSH6RP.js";import{a}from"./part-D4NMSO2J.js";import{a as r,b as l}from"./part-VHSBPZHI.js";import{c as o}from"./part-GPLAS2FA.js";import{A as g}from"./part-SVX36NT2.js";import{_ as u}from"./part-ZY5B6SMR.js";import{a as i,e as h}from"./part-VOCLXBLR.js";var F=await r(o(` :host {
  .file-explorer-header-summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    flex: 1 1 auto;
    min-width: 0;
    text-align: left;
  }

  h1 {
      color: var(--solid-ui-color-gray-700, #364153);
      font-size: var(--solid-ui-font-size-xl, 1.25rem); /* while in expand; will go to 2xl when new design is complete */
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
  }

  .resource-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .container-info {
    display: flex;
    flex-direction: row;
    gap: 10px;
    min-width: 0;
  }

  .pane-icon {
    display: flex;
    width: 40px;
    height: 40px;
    padding: 7.5px 7px 6.5px 7px;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    /* border-radius: 100px; */
    /* background: var(--slate-600, #45556C); */
  }

  .pane-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--solid-ui-gray-500, #6A7282);
    font-size: var(--solid-ui-font-size-xs, .75rem);
    font-weight: 500;
  }

  .public {
    display: flex;
    padding: 2px 5px;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: var(--blue-400, #51A2FF);
    border-radius: 5px;
    background: var(--blue-50, #EFF6FF);
  }

  icon-lucide-globe {
    stroke-width: 1.021px;
    stroke: var(--blue-400, #51A2FF);
  }

  .private {
    display: flex;
    padding: 2px 5px;
    justify-content: center;
    align-items: center;
    gap: 3px;
    color: var(--yellow-600, #D08700);
    border-radius: 5px;
    background: var(--yellow-100, #FEF9C2);
  }

  icon-lucide-lock-keyhole {
    stroke-width: 1.021px;
    stroke: var(--yellow-600, #D08700);
  }

  icon-lucide-globe,
  icon-lucide-lock-keyhole {
    width: 0.875rem;
    height: 0.875rem;
  }

  .resource-date {
    font-size: inherit;
  }

  icon-lucide-arrow-left {
    width: 1.125rem;
    height: 1.125rem;
  }

  @media (max-width: 600px) {
    .file-explorer-header-summary {
      gap: 7px;
    }

    h1 {
      font-size: 14px;
    }

    .pane-icon {
      width: 18.2px;
      height: 18.2px;
      flex-shrink: 0;
      aspect-ratio: 1 / 1;
      padding: 0;
    }

    p {
      font-size: 14px;
    }

    .resource-date {
      font-size: 10px;
    }

    .public,
    .private {
      font-size: 9px;
    }

    icon-lucide-arrow-left {
      width: 15px;
      height: 18px;
      flex-shrink: 0;
      aspect-ratio: 5 / 6;
    }
  }
}
`,"text/css")),f=class extends l{static properties={paneIcon:{attribute:!1},onBackClick:{attribute:!1},showBack:{type:Boolean},responseMetadata:{attribute:!1},resolvedPaneIcon:{state:!0}};constructor(){super(),this.fileExplorerContext=d,new a(this,{context:c,subscribe:!0,callback:e=>{this.fileExplorerContext=e}}),this.showBack=!0,this.responseMetadata={modified:void 0,isPublic:!1},this.resolvedPaneIcon=void 0}get titleHeading(){return this.renderRoot?.querySelector("h1")??null}static styles=F;_draggableSubjectUri;_paneIconGeneration=0;formatModifiedDate(e){if(!e)return"";let t=new Date(e);if(Number.isNaN(t.getTime()))return e;let n=new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).formatToParts(t),s=A=>n.find(P=>P.type===A)?.value??"",k=s("day"),_=s("month"),$=s("year"),I=s("hour"),U=s("minute"),j=s("dayPeriod").toUpperCase();return`${k} ${_}, ${$} at ${I}:${U} ${j}`}willUpdate(e){if(e.has("paneIcon")){let t=++this._paneIconGeneration;this.resolvedPaneIcon=void 0,this.resolvePaneIcon(this.paneIcon,t)}}updated(){!this.titleHeading||!this.fileExplorerContext?.subjectUri||this._draggableSubjectUri===this.fileExplorerContext.subjectUri||(y(this.titleHeading,u(this.fileExplorerContext.subjectUri)),this._draggableSubjectUri=this.fileExplorerContext.subjectUri)}async resolvePaneIcon(e,t){try{if(e==null)return;let n=await e;t===this._paneIconGeneration&&(this.resolvedPaneIcon=n??void 0)}catch(n){t===this._paneIconGeneration&&(this.resolvedPaneIcon=void 0,console.warn("file-explorer-header-summary: failed to resolve pane icon",n))}}renderContainerResourceHeader(e,t){let n=M(this.fileExplorerContext?.store,this.fileExplorerContext?.subjectUri)??0;return i`
      <div class="container-info">
        <h1>
          <span>${e}</span>
        </h1>
        <p>
        ${n} items
          ${t?i`<span class="public"><icon-lucide-globe aria-hidden="true"></icon-lucide-globe><span class="sr-only">Public</span></span>`:i`<span class="private"><icon-lucide-lock-keyhole aria-hidden="true"></icon-lucide-lock-keyhole><span class="sr-only">Private</span></span>`}
        </p>
      </div>
    `}renderResourceHeader(e,t){let n=this.formatModifiedDate(this.responseMetadata.modified);return i`
        <div class="resource-info">
          <h1>
            <span>${e}</span>
          </h1>
          <p><span class="resource-date">${n}</span> ${t?i`<span class="public"><icon-lucide-globe></icon-lucide-globe> Public</span>`:i`<span class="private"><icon-lucide-lock-keyhole></icon-lucide-lock-keyhole> Private</span>`}</p>
        </div>
    `}render(){let e=this.fileExplorerContext?.subjectUri?u(this.fileExplorerContext.subjectUri):void 0,t=e?E(e):"",n=this.responseMetadata.isPublic,s=m(this.fileExplorerContext?.store,this.fileExplorerContext?.subjectUri);return i`
      <div class="file-explorer-header-summary">
        ${this.showBack?i`
            <solid-ui-button
              variant="ghost"
              @click=${this.onBackClick}
              title="Back"
            >
              <icon-lucide-arrow-left></icon-lucide-arrow-left>
              <span class="sr-only">Back</span>
            </solid-ui-button>
          `:""}
        <span class="pane-icon">
          ${this.resolvedPaneIcon?i`<img src=${this.resolvedPaneIcon} alt="" />`:""}
        </span>
        ${s?this.renderContainerResourceHeader(t,n):this.renderResourceHeader(t,n)}
      </div>
      </div>
    `}};customElements.get("solid-ui-file-explorer-header-summary")||customElements.define("solid-ui-file-explorer-header-summary",f);var B=await r(o(`:host {
  flex: 0 1 auto;
  min-width: 0;

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    flex: 0 0 auto;
    text-align: right;
  }

  /* generative ai */
  div > * {
    flex: 0 1 auto;
  }

  .file-explorer-header-action-button {
    width: var(--solid-ui-clickable-area, 42px);
    height: var(--solid-ui-clickable-area, 42px);
    padding: 0;
  }

  /* TODO: look into what colors to use this is just to show */
  .dirtyIndicator {
    display: inline-flex;
    align-items: center;
    border: 1px solid #F59E0B;
    color: #92400E;
    background: #FFFBEB;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 600;
    line-height: 1;
    padding: 4px 8px;
    white-space: nowrap;
  }

  icon-lucide-user-round-cog,
  icon-lucide-pencil {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 900px) {
    div {
      padding-right: 3px;
    }
  }

  @media (max-width: 600px) {
    div {
      justify-content: flex-start;
      gap: 5px;
    }

    .file-explorer-header-action-button {
      display: none;
    }

    icon-lucide-ellipsis-vertical {
      width: 15.36px;
      height: 15.36px;
      flex-shrink: 0;
      aspect-ratio: 1 / 1;
    }
  }
}
`,"text/css")),x=class extends l{static properties={menuItems:{attribute:!1},canEdit:{type:Boolean},canManageAccess:{type:Boolean},isMobile:{state:!0}};constructor(){super(),this.fileExplorerContext=d,new a(this,{context:c,subscribe:!0,callback:e=>{this.fileExplorerContext=e}}),this.menuItems=[],this.canEdit=!1,this.canManageAccess=!1,this.isMobile=typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(max-width: 600px)").matches:!1}static styles=B;mobileMediaQuery;mobileQuery="(max-width: 600px)";handleMobileMediaChange=e=>{this.isMobile=e.matches};connectedCallback(){super.connectedCallback(),!(typeof window>"u"||typeof window.matchMedia!="function")&&(this.mobileMediaQuery=window.matchMedia(this.mobileQuery),this.isMobile=this.mobileMediaQuery.matches,this.mobileMediaQuery.addEventListener("change",this.handleMobileMediaChange))}disconnectedCallback(){this.mobileMediaQuery?.removeEventListener("change",this.handleMobileMediaChange),this.mobileMediaQuery=void 0,super.disconnectedCallback()}getEditTooltip(){return this.canEdit?"Edit":"No Access"}handleManageAccess=()=>{let e=this.fileExplorerContext.subjectUri;e&&this.dispatchEvent(new CustomEvent(C,{bubbles:!0,composed:!0,detail:{subjectUri:e,paneName:"sharing"}}))};renderDirtyIndicator(){return this.fileExplorerContext.isDirty?i`<span class="dirtyIndicator" title="This file has unsaved changes">Unsaved</span>`:h}render(){let e=m(this.fileExplorerContext.store,this.fileExplorerContext.subjectUri),t=this.fileExplorerContext.canEdit;return i`
      <div>
        ${this.renderDirtyIndicator()}
        ${!e&&!this.isMobile&&this.canManageAccess?i`
              <solid-ui-button class="file-explorer-header-action-button" variant="ghost" title="Manage Access" @click=${this.handleManageAccess}>
                <icon-lucide-user-round-cog slot="icon"></icon-lucide-user-round-cog>
                <span class="sr-only">Manage access</span>
              </solid-ui-button>
              ${t?i`
                    <solid-ui-button
                      class="file-explorer-header-action-button"
                      variant="ghost"
                      title=${this.getEditTooltip()}
                      ?disabled=${!this.canEdit}
                      @click=${this.fileExplorerContext.beginEditing}
                    >
                      <icon-lucide-pencil slot="icon"></icon-lucide-pencil>
                      <span class="sr-only">Edit</span>
                    </solid-ui-button>
                  `:h}
            `:h}
        <solid-ui-resource-actions-menu
          .store=${this.fileExplorerContext.store}
          .handleAccessClick=${this.handleManageAccess}
          .handleEditingClick=${this.fileExplorerContext.beginEditing}
          .paneSupportsEditing=${this.fileExplorerContext.canEdit}
          .canEdit=${this.canEdit}
          .canManageAccess=${this.canManageAccess}
          .subjectUri=${this.fileExplorerContext.subjectUri}
          .menuItems=${this.menuItems}
          .isMobile=${this.isMobile}
        ></solid-ui-resource-actions-menu>
      </div>
    `}};customElements.get("solid-ui-file-explorer-header-controls")||customElements.define("solid-ui-file-explorer-header-controls",x);var R=await r(o(`:host {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    flex-wrap: nowrap;
    box-sizing: border-box;
    width: 100%;
    text-align: right;
    padding: 10px;
    border-bottom: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  }
}
`,"text/css")),p=class extends l{static properties={menuItems:{attribute:!1},paneIcon:{attribute:!1},showBack:{type:Boolean},responseMetadata:{state:!0}};constructor(){super(),this.fileExplorerContext=d,new a(this,{context:c,subscribe:!0,callback:e=>{this.fileExplorerContext=e}}),this.menuItems=[],this.paneIcon=void 0,this.showBack=!0,this.responseMetadata={modified:void 0,isPublic:!1,canEdit:!1,canManageAccess:!1,aclUri:void 0}}static styles=R;_loadedMetadataForUri;_metadataGeneration=0;handleBack=()=>{this.dispatchEvent(new CustomEvent(w,{bubbles:!0,composed:!0,detail:{subjectUri:this.fileExplorerContext.subjectUri}}))};getDefaultResponseMetadata(){return{modified:void 0,isPublic:!1,canEdit:!1,canManageAccess:!1,aclUri:void 0}}willUpdate(){let e=this.fileExplorerContext?.subjectUri;if(this.fileExplorerContext?.store&&e&&this._loadedMetadataForUri!==e){this._loadedMetadataForUri=e;let t=++this._metadataGeneration;this.responseMetadata=this.getDefaultResponseMetadata(),this.loadResponseMetadata(e,t)}}async loadResponseMetadata(e,t){try{let n=await g.resource.fetchMetadata(u(e));t===this._metadataGeneration&&this.fileExplorerContext.subjectUri===e&&(this.responseMetadata={modified:n.modified,isPublic:n.access.isPublic,canEdit:n.access.canEdit,canManageAccess:n.access.canManageAccess,aclUri:n.aclUri})}catch(n){t===this._metadataGeneration&&this.fileExplorerContext.subjectUri===e&&(this.responseMetadata=this.getDefaultResponseMetadata(),console.warn("Failed to load response metadata",n))}}render(){return i`
      <header>
        <solid-ui-file-explorer-header-summary
          .paneIcon=${this.paneIcon}
          .showBack=${this.showBack}
          .onBackClick=${this.handleBack}
          .responseMetadata=${this.responseMetadata}
        ></solid-ui-file-explorer-header-summary>
        <solid-ui-file-explorer-header-controls
          .menuItems=${this.menuItems}
          .canEdit=${this.responseMetadata.canEdit}
          .canManageAccess=${this.responseMetadata.canManageAccess}
        ></solid-ui-file-explorer-header-controls>
      </header>
    `}};customElements.get("solid-ui-file-explorer-header")||customElements.define("solid-ui-file-explorer-header",p);var ve=p;export{p as a,ve as b};
