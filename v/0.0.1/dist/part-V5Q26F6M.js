import{d as b,e as l,f as L}from"./part-XVX5IZLY.js";import"./part-GZMECQ7Z.js";import"./part-4RHLBPWQ.js";import"./part-NYMP5DIS.js";import"./part-CKVAMWOE.js";import"./part-ZK2YILMJ.js";import"./part-TKTGPRZR.js";import{a as z,b as S}from"./part-WZ5ZOODI.js";import"./part-QENSO4SJ.js";import"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import"./part-HGODWX5M.js";import"./part-3E3YJ362.js";import"./part-EYI2LYOK.js";import"./part-V7XQEHON.js";import"./part-FI5O6ZH7.js";import"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import{a as C}from"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import{b as U}from"./part-VHSBPZHI.js";import{c as T}from"./part-GPLAS2FA.js";import{A as v}from"./part-SVX36NT2.js";import{E as y,O as x,s as m}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as _,e as w}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var R=new Map;function k(a){let t=String(a);return R.has(t)||R.set(t,fetch(t).then(async e=>{if(!e.ok)throw new Error(`loadSheet: ${e.status} ${t}`);let r=new CSSStyleSheet;return r.replaceSync(await e.text()),r})),R.get(t)}var j={"text/n3":!0,"text/turtle":!0,"application/rdf+xml":!0,"application/xhtml+xml":!0,"text/html":!0,"application/json":!0,"application/ld+json":!0};function q(a,t,e=document){if(!a.ok){let r="HTTP error on "+t+"! Status: "+a.status;b(r),a.status===412&&(r="Error: File changed by someone else");let{showError:i}=l(e);i(r)}return a.ok}function D(a){let t="",e="",r=a.split("<\/script");if(r&&r.length)for(let i of r){i="<script"+i.split("<script")[1]+"<\/script>";let c=["text/turtle","text/n3","application/ld+json","application/rdf+xml"].find(s=>i.includes(`type="${s}"`));if(c){e=i.replace(/^<script(.*?)>/gm,"").replace(/<\/script>$/gm,""),t=c;break}}return[e,t]}function $(a,t,e,r,i,n=document){let c=a.fetcher,{showError:s,clearError:h}=l(n);if(h(),!r||!j[r]||r==="text/html"&&([e,r]=D(e),!r))return!0;try{if(r==="application/json")return JSON.parse(e),!0;try{a.removeDocument(t)}catch(o){if(!(o instanceof Error)||!o.message.includes("Statement to be removed is not on store"))throw o;b(o)}return delete c.requested[t.value],r==="application/ld+json"?(JSON.parse(e),x(e,a,i.uri,r,(o,u)=>{if(o)throw o;let d=y(i,u,i.uri,r);if(typeof d=="string"&&e.includes("@id")&&!d.includes("@id")){let f=new Error("Invalid jsonld : predicate do not expand to an absolute IRI");return s(f.message),!1}return!0})):x(e,a,i.uri,r),!0}catch(o){let u=o.message,d=o;for(;d&&d.cause;)d=d.cause,d&&typeof d.characterInFile=="number"&&(u=`${u} (at character ${d.characterInFile})`);return s(u),!1}return!0}var P={"text/n3":!0,"text/turtle":!0,"application/ld+json":!0};var M=await k(T(`:host {
  display: block;
  width: 100%;

  section {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    padding: 0 40px;
  }

  .sourcePaneEditor {
    box-sizing: border-box;
    align-self: stretch;
    min-width: 0;
    width: 100%;
  }

  .sourcePaneStatus {
    align-self: stretch;
    width: calc(100% + 80px);
    margin-left: -40px;
    margin-top: 3px;
  }

  .sourcePaneStatus solid-ui-error-state {
    display: block;
    width: 100%;
  }

  .sourcePaneCardLoading {
    min-height: 3rem;
  }

  .sourcePaneCardLoading .sourcePaneEditor {
    visibility: hidden;
  }

  .sourcePaneCardLoadingMessage {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sourcePaneEditorFooter {
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-self: stretch;
    width: 100%;
    gap: 10px;
    border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
    padding: 20px 5px 15px;
  }

  @media (max-width: 768px) {
    section {
      padding: 0;
    }

    .sourcePaneStatus {
      width: 100%;
      margin-left: 0;
    }
  }
}
`,"text/css")),E=class extends U{static properties={_editorReady:{state:!0},_editorError:{state:!0},sourceContext:{attribute:!1},fileExplorerContext:{attribute:!1}};constructor(){super(),this._editorReady=!1,this._editorError=!1,this.sourceContext=void 0,this.fileExplorerContext=S,new C(this,{context:L,subscribe:!0,callback:t=>{this.sourceContext=t}}),new C(this,{context:z,subscribe:!0,callback:t=>{this.fileExplorerContext=t}})}get _editorMount(){return this.renderRoot?.querySelector(".sourcePaneEditor")??null}static styles=M;_editor;_originalContent;_originalContentType;_loadedResourceUri;_dirtyState=!1;_initializing=!1;_syncGeneration=0;_syncQueue=Promise.resolve();_editingRequested=!1;_isEditing=!1;_requireSourceContext(){if(!this.sourceContext)throw new Error("The element is missing the required `sourceContext` property.");return this.sourceContext}getOriginalContent(){return this._originalContent}getEditor(){return this._editor}focusEditor(){this._editor?.focusEditor()}setReadOnly(t){this._editor?.setReadOnly(t),this._editor?.setAccessibility?.({label:this._editorLabel(),description:t?"Source content. This content is read-only until Edit is selected.":"Source editor. You can edit this content and use Save or Cancel when finished."})}_editorLabel(){return`Source editor for ${this.sourceContext?.resourceUri??"the selected resource"}`}_statusRoot(){return this.shadowRoot??this.closest(".sourcePane")??document}_preservePaneDuringResize(t){let e=this.closest(".sourcePane");e&&(t?e.setAttribute("data-preserve-pane-on-resize","true"):e.removeAttribute("data-preserve-pane-on-resize"))}_focusEditorAfterUpdate(){this.updateComplete.then(()=>this.focusEditor())}setValue(t){this._editor?.replaceContent(t)}beginEditing(){if(!this._editorReady){this._editingRequested=!0;return}this._editingRequested=!1,this.updateEditingState(!0),this.setReadOnly(!1),this.focusEditor(),this.requestUpdate()}async _getViewContent(){let t=this._requireSourceContext();return{content:t.originalContent??"",contentType:this._originalContentType??t.editorMetadata.contentType??"text/turtle"}}async _syncEditorToCurrentView(t){if(!this._editor)return;this.updateEditingState(!1);let e=this._requireSourceContext();this._originalContent=e.originalContent,this._originalContentType=e.editorMetadata.contentType;let r=e.originalContent??"",i=this._originalContentType??"text/turtle";await this._editor.setLanguage(i),!(t!==void 0&&t!==this._syncGeneration)&&(this.setReadOnly(!0),this._editor.replaceContent(r),this._editor.resetDirtyState(),this.updateDirtyState(!1))}queueEditorSynchronization(){let t=++this._syncGeneration;return this._syncQueue=this._syncQueue.then(()=>this._syncEditorToCurrentView(t)),this._syncQueue}updateDirtyState(t){this._dirtyState!==t&&(this._dirtyState=t,this.fileExplorerContext.setDirty(t))}updateEditingState(t){this._preservePaneDuringResize(t),this._isEditing!==t&&(this._isEditing=t,this.requestUpdate())}_resetEditorState(){this._editor?.resetDirtyState(),this.updateDirtyState(!1),this.updateEditingState(!1),this.setReadOnly(!0)}async _initializeEditor(){if(this._editor||this._initializing)return;let t=this._editorMount,e=this.sourceContext,r=this.fileExplorerContext;if(!(!t||!e?.dataLoaded||!r||r===S||!r.store||!r.subjectUri)){this._initializing=!0,this._editorError=!1,l(this._statusRoot()).clearError();try{let{CodeEditor:i}=await import("./solid-ui.js");this._originalContent=e.originalContent,this._originalContentType=e.editorMetadata.contentType,this._editor=new i;let{content:n,contentType:c}=await this._getViewContent();try{await this._editor.initialize(t,n,c,"dark",s=>{this.updateDirtyState(s)},{label:this._editorLabel(),description:"Source content. This content is read-only until Edit is selected."})}catch(s){throw new Error(`Error initializing code editor: ${s instanceof Error?s.message:String(s)}`)}this._editorReady=!0,this._loadedResourceUri=e.resourceUri,this.setReadOnly(!0),this._editingRequested&&this.beginEditing()}catch(i){this._editorReady=!1,this._editorError=!0,this._editor?.destroy(),this._editor=void 0;let{showError:n}=l(this._statusRoot());n(`Error loading code editor: ${i instanceof Error?i.message:String(i)}`)}finally{this._initializing=!1}}}async firstUpdated(){await this._initializeEditor()}async updated(t){if(t.has("sourceContext")&&!this.sourceContext?.dataLoaded){this._loadedResourceUri=void 0;return}!t.has("sourceContext")&&!t.has("fileExplorerContext")||!this.sourceContext?.dataLoaded||(this._editor?this._loadedResourceUri!==this.sourceContext.resourceUri&&(this._loadedResourceUri=this.sourceContext.resourceUri,await this.queueEditorSynchronization()):(this._editorError=!1,await this._initializeEditor()))}disconnectedCallback(){super.disconnectedCallback(),this._editor&&(this._editor.destroy(),this._editor=void 0),this._editorReady=!1,this._dirtyState=!1,this._initializing=!1,this._loadedResourceUri=void 0}async cancelHandler(){this.sourceContext&&(await this.queueEditorSynchronization(),this._resetEditorState(),l(this._statusRoot()).showStatus("Source changes canceled."),this._focusEditorAfterUpdate())}async saveBack(){let t=this._requireSourceContext(),e=this.fileExplorerContext?.store,r=this.fileExplorerContext?.subjectUri;if(!e||!r)throw new Error("The element is missing the required `fileExplorerContext.store` or `fileExplorerContext.subjectUri` property.");let i=new m(r),n=e.fetcher,c=this.getEditor()?.getValue()??"",s=this._originalContentType??t.editorMetadata.contentType??"text/turtle",h=t.editorMetadata.eTag,o=i;if(!$(e,o,c,s,o,this._statusRoot()))return;let u={data:c,contentType:s};h&&(u.headers={"if-match":h});let d;try{if(d=await n.webOperation("PUT",o.uri,u),!q(d,"PUT",this._statusRoot()))return}catch(p){let{showError:g}=l(this._statusRoot());g("Error saving back: "+p);return}t.resourceUri===o.uri&&(this._originalContent=c,t.updateContent(c));let f;try{typeof n.load=="function"&&await n.load(o,{force:!0,clearPreviousData:!0});let p=await n.webOperation("HEAD",o.uri);if(!p.ok)throw new Error(`HTTP error on HEAD! Status: ${p.status}`);let g=await v.resource.fetchMetadata(o);t.resourceUri===o.uri&&t.updateMetadata({contentType:g.contentType,eTag:g.eTag})}catch(p){f=p}if(f){let{showError:p}=l(this._statusRoot());p("Saved, but failed to refresh metadata: "+f)}t.resourceUri===o.uri&&(this._resetEditorState(),this._focusEditorAfterUpdate())}prettyHandler(){let t=this._requireSourceContext(),{contentType:e}=t.editorMetadata,r=e?.split(";")[0],{showError:i}=l(this._statusRoot()),n=this.fileExplorerContext?.store,c=this.fileExplorerContext?.subjectUri;if(!n||!c)throw new Error("The element is missing the required `fileExplorerContext.store` or `fileExplorerContext.subjectUri` property.");let s=new m(c);if(r&&P[r])try{let h=this.getEditor()?.getValue()??"";x(h,n,s.uri,r),Promise.resolve(y(n.sym(s.uri),n,s.uri,r)).then(u=>{typeof u=="string"&&this.setValue(u)})}catch(h){i(String(h))}}renderFooter(){let e=this._requireSourceContext().editorMetadata.contentType?.split(";")[0],r=!this._isEditing&&!!e&&P[e];return this._isEditing?_`
        <div class="sourcePaneEditorFooter">
          <solid-ui-button class="sourcePaneCancelButton" variant="secondary" @click=${this.cancelHandler}>Cancel</solid-ui-button>
          <solid-ui-button class="sourcePaneSaveButton" variant="primary" @click=${this.saveBack}>Save Changes</solid-ui-button>
        </div>
      `:r?_`
        <div class="sourcePaneEditorFooter">
          <solid-ui-button class="sourcePanePrettyButton" variant="secondary" @click=${this.prettyHandler}>Prettify</solid-ui-button>
        </div>
      `:w}render(){let t=this._editorReady&&this.sourceContext?.dataLoaded&&!this._editorError;return _`
      <section
        class=${t?"sourcePaneCard":"sourcePaneCard sourcePaneCardLoading"}
        role="region"
        aria-busy=${t||this._editorError?"false":"true"}
        aria-label=${this._editorLabel()}
      >
        ${t||this._editorError?w:_`
          <div class="sourcePaneCardLoadingMessage" role="status">
            Loading source editor
          </div>
        `}
        <div class="sourcePaneEditor"></div>
        ${l().renderStatusSection()}
        ${this.renderFooter()}
      </section>
    `}};customElements.get("source-pane-source-editor-card")||customElements.define("source-pane-source-editor-card",E);export{E as default};
