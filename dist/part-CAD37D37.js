import{a as u}from"./part-AHAYGN5G.js";import{i as d}from"./part-DOP52R3A.js";import{a as h}from"./part-VHSBPZHI.js";import{c as l}from"./part-GPLAS2FA.js";import{a as i,e as c}from"./part-VOCLXBLR.js";var m=await h(l(`.viewport {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 200px;
    border-radius: 0.5rem;
    overflow: hidden;
    background: color-mix(in srgb, #ffffff 92%, #000 8%);
}

.viewport video,
.viewport img {
    display: block;
    width: 100%;
    max-width: 260px;
    height: auto;
    border-radius: 0.5rem;
    margin: 0 auto;
    object-fit: cover;
}

.status {
    width: 100%;
    text-align: center;
    color: var(--photo-capture-muted-text);
    font-size: 0.875rem;
}

.status.error {
    color: var(--color-error, #b00020);
}
`,"text/css")),a=class extends d{static styles=m;static properties={name:{type:String,reflect:!0},heading:{type:String,reflect:!0},captureLabel:{type:String,reflect:!0},confirmLabel:{type:String,reflect:!0},retakeLabel:{type:String,reflect:!0},cancelLabel:{type:String,attribute:"cancel-label",reflect:!0},fileNamePrefix:{type:String,attribute:"file-name-prefix",reflect:!0},mediaConstraints:{attribute:!1},constraints:{type:String,reflect:!0},captureFormat:{type:String,attribute:"capture-format",reflect:!0},captureQuality:{type:Number,attribute:"capture-quality"},showCancelButton:{type:Boolean,attribute:"show-cancel-button",reflect:!0},facingMode:{type:String,attribute:"facing-mode",reflect:!0},errorMessage:{state:!0},previewUrl:{state:!0},startingPreview:{state:!0},value:{state:!0}};constructor(){super(),this.name="",this.heading="Take a photo",this.captureLabel="Take Photo",this.confirmLabel="Use Photo",this.retakeLabel="Retake",this.cancelLabel="Cancel",this.fileNamePrefix="",this.mediaConstraints=void 0,this.constraints="",this.captureFormat="image/png",this.captureQuality=void 0,this.showCancelButton=!0,this.facingMode="user",this.errorMessage="",this.previewUrl="",this.startingPreview=!1,this.value=null,this.stream=null}disconnectedCallback(){this.stopStream(),this.revokePreviewUrl(),super.disconnectedCallback()}willUpdate(e){if(super.willUpdate(e),e.has("value")){let t=this.value instanceof File?this.value:null;if(t!==this.value){this.value=t;return}this.syncPreviewFromValue(t)}}updated(e){if(super.updated(e),!this.value&&!this.stream&&!this.startingPreview&&(e.has("previewUrl")||e.has("value"))&&this.queuePreviewStart(),this.stream){let t=this.shadowRoot?.querySelector("video");t&&t.srcObject!==this.stream&&(t.srcObject=this.stream)}}render(){return i`
        <solid-ui-dialog title=${this.heading}>
            <solid-ui-dialog-content>
                ${this.renderViewport()}
                ${this.renderStatus()}
            </solid-ui-dialog-content>
            <solid-ui-dialog-footer>
                ${this.showCancelButton?i`<solid-ui-button variant="secondary" @click=${()=>this.close()}>${this.cancelLabel}</solid-ui-button>`:c}
                ${this.value?i`
                    <solid-ui-button @click=${this.onRetake}>${this.retakeLabel}</solid-ui-button>
                    <solid-ui-button @click=${this.onConfirm}>${this.confirmLabel}</solid-ui-button>
                  `:i`
                    <solid-ui-button
                        ?disabled=${this.startingPreview||!this.stream}
                        @click=${this.onCapture}
                    >
                        ${this.captureLabel}
                    </solid-ui-button>
                  `}
            </solid-ui-dialog-footer>
        </solid-ui-dialog>
    `}renderViewport(){let e=this.previewUrl?i`<img src="${this.previewUrl}" alt="Captured photo preview" />`:i`<video autoplay playsinline muted></video>`;return i`<div class="viewport">${e}</div>`}renderStatus(){return this.errorMessage?i`<div class="status error">${this.errorMessage}</div>`:this.startingPreview?i`<div class="status">Opening camera…</div>`:this.value?i`<div class="status">Review the photo before confirming it.</div>`:i`<div class="status">Preview the camera and take a photo when ready.</div>`}onRetake(){this.clearValue(),this.queuePreviewStart()}onConfirm(){this.value&&this.close(this.value)}async onCapture(){let e=this.shadowRoot?.querySelector("video");if(!e)return;let t=e.videoWidth||e.clientWidth||640,s=e.videoHeight||e.clientHeight||480,r=document.createElement("canvas");r.width=t,r.height=s;let o=r.getContext("2d");if(!o){this.errorMessage="Unable to capture a photo in this browser";return}o.drawImage(e,0,0,t,s);let n=await new Promise(p=>{r.toBlob(p,this.captureFormat,this.captureQuality)});if(!n){this.errorMessage="Unable to create an image from the current camera frame";return}this.value=this.createFileFromBlob(n),this.errorMessage=""}createFileFromBlob(e){let t=e.type||this.captureFormat,s=this.fileExtensionForMimeType(t),r=(this.fileNamePrefix||this.name||"photo").trim()||"photo";return new File([e],`${r}-${Date.now()}.${s}`,{type:t})}fileExtensionForMimeType(e){switch(e){case"image/jpeg":return"jpg";case"image/webp":return"webp";case"image/gif":return"gif";default:return"png"}}queuePreviewStart(){this.startPreview().catch(()=>{})}stopStream(){if(!this.stream)return;this.stream.getTracks().forEach(t=>t.stop()),this.stream=null;let e=this.shadowRoot?.querySelector("video");e&&(e.srcObject=null)}syncPreviewFromValue(e){this.revokePreviewUrl(),e&&(this.stopStream(),this.previewUrl=URL.createObjectURL(e))}clearValue(){this.value=null,this.errorMessage=""}revokePreviewUrl(){this.previewUrl&&URL.revokeObjectURL(this.previewUrl),this.previewUrl=""}async startPreview(){if(!(this.value||this.startingPreview)){if(!navigator.mediaDevices?.getUserMedia){this.errorMessage="Camera access is not available in this browser";return}this.startingPreview=!0,this.errorMessage="";try{let e=await navigator.mediaDevices.getUserMedia(this.resolveMediaConstraints());this.stream=e,this.requestUpdate(),await this.updateComplete;let t=this.shadowRoot?.querySelector("video");t&&(t.srcObject=e,await t.play?.().catch(()=>{}))}catch(e){this.errorMessage=e?.message||"Unable to start the camera preview"}finally{this.startingPreview=!1}}}resolveMediaConstraints(){if(this.mediaConstraints)return this.mediaConstraints;if(this.constraints)try{return JSON.parse(this.constraints)}catch(e){throw new Error(`Invalid constraints JSON: ${e.message}`)}return{video:this.facingMode?{facingMode:{ideal:this.facingMode}}:!0}}};u("solid-ui-photo-capture-modal",a);export{a};
