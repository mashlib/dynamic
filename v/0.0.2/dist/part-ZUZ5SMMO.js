import{d as wt,g as Ut,h as It,j as qt,l as Yt}from"./part-VB56GJIN.js";import{a as Tt,d as jt}from"./part-VOCLXBLR.js";var Xt=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var Kt=wt`
  :host {
    --arrow-color: black;
    --arrow-size: var(--wa-tooltip-arrow-size);
    --popup-border-width: 0px;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45) to calculate the length of the arrow after rotation.
     *
     * The diamond will be translated inward by --arrow-base-offset, the border thickness, to centralise it on
     * the inner edge of the popup border. This also means we need to increase the size of the arrow by the
     * same amount to compensate.
     *
     * A diamond shaped clipping mask is used to avoid overlap of popup content. This extends slightly inward so
     * the popup border is covered with no sub-pixel rounding artifacts. The diamond corners are mitred at 22.5º
     * to properly merge any arrow border with the popup border. The constant 1.4142 is derived from 1 + tan(22.5).
     *
     */
    --arrow-base-offset: var(--popup-border-width);
    --arrow-size-diagonal: calc((var(--arrow-size) + var(--arrow-base-offset)) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));
    --arrow-size-div: calc(var(--arrow-size-diagonal) * 2);
    --arrow-clipping-corner: calc(var(--arrow-base-offset) * 1.4142);

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);

    /* Clear UA styles for [popover] */
    :where(&) {
      inset: unset;
      padding: unset;
      margin: unset;
      width: unset;
      height: unset;
      color: unset;
      background: unset;
      border: unset;
      overflow: unset;
    }
  }

  .popup-fixed {
    position: fixed;
  }

  .popup:not(.popup-active) {
    display: none;
  }

  .arrow {
    position: absolute;
    width: var(--arrow-size-div);
    height: var(--arrow-size-div);
    background: var(--arrow-color);
    z-index: 3;
    clip-path: polygon(
      var(--arrow-clipping-corner) 100%,
      var(--arrow-base-offset) calc(100% - var(--arrow-base-offset)),
      calc(var(--arrow-base-offset) - 2px) calc(100% - var(--arrow-base-offset)),
      calc(100% - var(--arrow-base-offset)) calc(var(--arrow-base-offset) - 2px),
      calc(100% - var(--arrow-base-offset)) var(--arrow-base-offset),
      100% var(--arrow-clipping-corner),
      100% 100%
    );
    rotate: 45deg;
  }

  :host([data-current-placement|='left']) .arrow {
    rotate: -45deg;
  }

  :host([data-current-placement|='right']) .arrow {
    rotate: 135deg;
  }

  :host([data-current-placement|='bottom']) .arrow {
    rotate: 225deg;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge-visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: 899;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }

  /* Built-in animations */
  .show {
    animation: show var(--show-duration) ease;
  }

  .hide {
    animation: show var(--hide-duration) ease reverse;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .show-with-scale {
    animation: show-with-scale var(--show-duration) ease;
  }

  .hide-with-scale {
    animation: show-with-scale var(--hide-duration) ease reverse;
  }

  @keyframes show-with-scale {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
`;var Ie=Object.defineProperty,je=Object.getOwnPropertyDescriptor,Gt=t=>{throw TypeError(t)},w=(t,e,o,n)=>{for(var r=n>1?void 0:n?je(e,o):e,i=t.length-1,s;i>=0;i--)(s=t[i])&&(r=(n?s(e,o,r):s(r))||r);return n&&r&&Ie(e,o,r),r},Zt=(t,e,o)=>e.has(t)||Gt("Cannot "+o),Jt=(t,e,o)=>(Zt(t,e,"read from private field"),o?o.call(t):e.get(t)),Qt=(t,e,o)=>e.has(t)?Gt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),te=(t,e,o,n)=>(Zt(t,e,"write to private field"),n?n.call(t,o):e.set(t,o),o);var ee=t=>(e,o)=>{o!==void 0?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var qe={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:It},Ye=(t=qe,e,o)=>{let{kind:n,metadata:r}=o,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),n==="accessor"){let{name:s}=o;return{set(a){let l=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,l,t,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,t,a),a}}}if(n==="setter"){let{name:s}=o;return function(a){let l=this[s];e.call(this,a),this.requestUpdate(s,l,t,!0,a)}}throw Error("Unsupported decorator location: "+n)};function v(t){return(e,o)=>typeof o=="object"?Ye(t,e,o):((n,r,i)=>{let s=r.hasOwnProperty(i);return r.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(r,i):void 0})(t,e,o)}function zo(t){return v({...t,state:!0,attribute:!1})}var G=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function $t(t,e){return(o,n,r)=>{let i=s=>s.renderRoot?.querySelector(t)??null;if(e){let{get:s,set:a}=typeof n=="object"?o:r??(()=>{let l=Symbol();return{get(){return this[l]},set(c){this[l]=c}}})();return G(o,n,{get(){let l=s.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return G(o,n,{get(){return i(this)}})}}var Xe=wt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden],
  :host([hidden]) {
    display: none !important;
  }
`,Ke=/;\s+$/;function Ge(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function oe(t){let{property:e,value:o,element:n}=t;if(o){let r=n.getAttribute("style")||"";r&&(r.match(Ke)||(r+=";"),r+=" ");let i=`${e}: ${o}`;return r.includes(i)?void 0:`${r}${i};`}return null}var vt,ct=class extends qt{constructor(){super(),Qt(this,vt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,o)=>{if(this.internals?.states)try{o?this.internals.states.add(e):this.internals.states.delete(e)}catch(n){if(String(n).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw n}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let t=this.constructor;for(let[e,o]of t.elementProperties)o.default==="inherit"&&o.initial!==void 0&&typeof e=="string"&&this.customStates.set(`initial-${e}-${o.initial}`,!0)}static get styles(){let t=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Xe,...t]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace("wa-","")} `))})}attributeChangedCallback(t,e,o){Jt(this,vt)||(this.constructor.elementProperties.forEach((n,r)=>{n.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),te(this,vt,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}firstUpdated(t){super.firstUpdated(t),this.didSSR&&this.shadowRoot?.querySelectorAll("slot").forEach(e=>{e.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(t){try{super.update(t)}catch(e){if(this.didSSR&&!this.hasUpdated){let o=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});o.error=e,this.dispatchEvent(o)}throw e}}setStyle(t,e){if(!this.style){let o=oe({property:Ge(t),value:e,element:this});o&&this.setAttribute("style",o);return}this.style[t]=e}setStyleProperty(t,e){if(!this.style){let o=oe({property:t,value:e,element:this});o&&this.setAttribute("style",o);return}this.style.setProperty(t,e)}relayNativeEvent(t,e){t.stopImmediatePropagation(),this.dispatchEvent(new t.constructor(t.type,{...t,...e}))}};vt=new WeakMap;w([v()],ct.prototype,"dir",2);w([v()],ct.prototype,"lang",2);w([v({type:Boolean,reflect:!0,attribute:"did-ssr"})],ct.prototype,"didSSR",2);var Lt=new Set,nt=new Map,H,_t="ltr",Dt="en",ne=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(ne){let t=new MutationObserver(re);_t=document.documentElement.dir||"ltr",Dt=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ft(...t){t.map(e=>{let o=e.$code.toLowerCase();nt.has(o)?nt.set(o,Object.assign(Object.assign({},nt.get(o)),e)):nt.set(o,e),H||(H=e)}),re()}function re(){ne&&(_t=document.documentElement.dir||"ltr",Dt=document.documentElement.lang||navigator.language),[...Lt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var bt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Lt.add(this.host)}hostDisconnected(){Lt.delete(this.host)}dir(){return`${this.host.dir||_t}`.toLowerCase()}lang(){let e=`${this.host.lang||Dt}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(e),e}catch{return H?H.$code.toLowerCase():"en"}}getTranslationData(e){var o,n;let r;try{r=new Intl.Locale(e.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}let i=r.language.toLowerCase(),s=(n=(o=r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&n!==void 0?n:"",a=nt.get(`${i}-${s}`),l=nt.get(i);return{locale:r,language:i,region:s,primary:a,secondary:l}}exists(e,o){var n;let{primary:r,secondary:i}=this.getTranslationData((n=o.lang)!==null&&n!==void 0?n:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||i&&i[e]||o.includeFallback&&H&&H[e])}term(e,...o){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(H&&H[e])i=H[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i=="function"?i(...o):i}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,o)}};var ie={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",captions:"Captions",chooseDate:"Choose date",chooseDecade:"Choose decade",chooseMonth:"Choose month",chooseYear:"Choose year",clearEntry:"Clear entry",close:"Close",closeCalendar:"Close calendar",createOption:t=>`Create "${t}"`,copied:"Copied",copy:"Copy",currentValue:"Current value",date:"Date",datePickerKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the calendar.",day:"Day",incompleteDate:"Enter a complete date.",dropFileHere:"Drop file here or click to browse",decrement:"Decrement",dropFilesHere:"Drop files here or click to browse",empty:"Empty",endDate:"End date",error:"Error",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",increment:"Increment",loading:"Loading",month:"Month",moreOptions:"More Options",mute:"Mute",nextDecade:"Next decade",nextMonth:"Next month",nextSlide:"Next slide",nextVideo:"Next Video",nextYear:"Next year",numCharacters:t=>t===1?"1 character":`${t} characters`,numCharactersRemaining:t=>t===1?"1 character remaining":`${t} characters remaining`,numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,pause:"Pause",pauseAnimation:"Pause animation",pictureInPicture:"Picture in picture",play:"Play",playbackSpeed:"Playback speed",playlist:"Playlist",playAnimation:"Play animation",previousDecade:"Previous decade",previousMonth:"Previous month",previousSlide:"Previous slide",previousVideo:"Previous video",previousYear:"Previous year",progress:"Progress",rangeTooLong:t=>t===1?"Select a range no longer than 1 day":`Select a range no longer than ${t} days`,rangeTooShort:t=>t===1?"Select a range at least 1 day long":`Select a range at least ${t} days long`,readonly:"Read-only",selected:"Selected",selectedDateLabel:t=>`Selected: ${t}`,selectedRangeLabel:t=>`Selected range: ${t}`,selectionCleared:"Selection cleared",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,startDate:"Start date",today:"Today",toggleColorFormat:"Toggle color format",seek:"Seek",seekProgress:(t,e)=>`${t} of ${e}`,currentlyPlaying:"currently playing",unmute:"Unmute",videoPlayer:"Video player",volume:"Volume",year:"Year",zoomIn:"Zoom in",zoomOut:"Zoom out",am:"AM",chooseTime:"Choose time",closeTimeInput:"Close time picker",dayPeriod:"AM/PM",hour:"Hour",minute:"Minute",now:"Now",pm:"PM",second:"Second",time:"Time",timeInputKeyboardHelp:"Use arrow keys to change values; press Alt+Down Arrow to open the time picker."};ft(ie);var se=ie;var ae=class extends bt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||"en":super.lang()}};ft(se);var B=Math.min,_=Math.max,dt=Math.round,pt=Math.floor,M=t=>({x:t,y:t}),Ze={left:"right",right:"left",bottom:"top",top:"bottom"};function zt(t,e,o){return _(t,B(e,o))}function Z(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function Nt(t){return t==="x"?"y":"x"}function Pt(t){return t==="y"?"height":"width"}function F(t){let e=t[0];return e==="t"||e==="b"?"y":"x"}function St(t){return Nt(F(t))}function fe(t,e,o){o===void 0&&(o=!1);let n=J(t),r=St(t),i=Pt(r),s=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=ut(s)),[s,ut(s)]}function ue(t){let e=ut(t);return[xt(t),e,xt(e)]}function xt(t){return t.includes("start")?t.replace("start","end"):t.replace("end","start")}var le=["left","right"],ce=["right","left"],Je=["top","bottom"],Qe=["bottom","top"];function to(t,e,o){switch(t){case"top":case"bottom":return o?e?ce:le:e?le:ce;case"left":case"right":return e?Je:Qe;default:return[]}}function de(t,e,o,n){let r=J(t),i=to(q(t),o==="start",n);return r&&(i=i.map(s=>s+"-"+r),e&&(i=i.concat(i.map(xt)))),i}function ut(t){let e=q(t);return Ze[e]+t.slice(e.length)}function eo(t){var e,o,n,r;return{top:(e=t.top)!=null?e:0,right:(o=t.right)!=null?o:0,bottom:(n=t.bottom)!=null?n:0,left:(r=t.left)!=null?r:0}}function kt(t){return typeof t!="number"?eo(t):{top:t,right:t,bottom:t,left:t}}function Q(t){let{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function pe(t,e,o){let{reference:n,floating:r}=t,i=F(e),s=St(e),a=Pt(s),l=q(e),c=i==="y",u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,p=n[a]/2-r[a]/2,f;switch(l){case"top":f={x:u,y:n.y-r.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-r.width,y:d};break;default:f={x:n.x,y:n.y}}let h=J(e);return h&&(f[s]+=p*(h==="end"?1:-1)*(o&&c?-1:1)),f}async function he(t,e){var o;e===void 0&&(e={});let{x:n,y:r,platform:i,rects:s,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=Z(e,t),h=kt(f),y=a[p?d==="floating"?"reference":"floating":d],g=Q(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(y)))==null||o?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),b=d==="floating"?{x:n,y:r,width:s.floating.width,height:s.floating.height}:s.reference,P=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),S=await(i.isElement==null?void 0:i.isElement(P))&&await(i.getScale==null?void 0:i.getScale(P))||{x:1,y:1},A=Q(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:P,strategy:l}):b);return{top:(g.top-A.top+h.top)/S.y,bottom:(A.bottom-g.bottom+h.bottom)/S.y,left:(g.left-A.left+h.left)/S.x,right:(A.right-g.right+h.right)/S.x}}var oo=50,me=async(t,e,o)=>{let{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:s}=o,a=s.detectOverflow?s:{...s,detectOverflow:he},l=await(s.isRTL==null?void 0:s.isRTL(e)),c=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=pe(c,n,l),p=n,f=0,h={};for(let m=0;m<i.length;m++){let y=i[m];if(!y)continue;let{name:g,fn:b}=y,{x:P,y:S,data:A,reset:R}=await b({x:u,y:d,initialPlacement:n,placement:p,strategy:r,middlewareData:h,rects:c,platform:a,elements:{reference:t,floating:e}});u=P??u,d=S??d,h[g]={...h[g],...A},R&&f<oo&&(f++,typeof R=="object"&&(R.placement&&(p=R.placement),R.rects&&(c=R.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:r}):R.rects),{x:u,y:d}=pe(c,p,l)),m=-1)}return{x:u,y:d,placement:p,strategy:r,middlewareData:h}},ge=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:n,placement:r,rects:i,platform:s,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=Z(t,e)||{};if(c==null)return{};let d=kt(u),p={x:o,y:n},f=St(r),h=Pt(f),m=await s.getDimensions(c),y=f==="y",g=y?"top":"left",b=y?"bottom":"right",P=y?"clientHeight":"clientWidth",S=i.reference[h]+i.reference[f]-p[f]-i.floating[h],A=p[f]-i.reference[f],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c)),E=R?R[P]:0;(!E||!await(s.isElement==null?void 0:s.isElement(R)))&&(E=a.floating[P]||i.floating[h]);let T=S/2-A/2,N=E/2-m[h]/2-1,O=B(d[g],N),at=B(d[b],N),lt=E-m[h]-at,k=E/2-m[h]/2+T,$=zt(O,k,lt),X=!l.arrow&&J(r)!=null&&k!==$&&i.reference[h]/2-(k<O?O:at)-m[h]/2<0,V=X?k<O?k-O:k-lt:0;return{[f]:p[f]+V,data:{[f]:$,centerOffset:k-$-V,...X&&{alignmentOffset:V}},reset:X}}});var ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;let{placement:r,middlewareData:i,rects:s,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...y}=Z(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};let g=q(r),b=F(a),P=q(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=p||(P||!m?[ut(a)]:ue(a)),R=h!=="none";!p&&R&&A.push(...de(a,m,h,S));let E=[a,...A],T=await l.detectOverflow(e,y),N=[],O=((n=i.flip)==null?void 0:n.overflows)||[];if(u&&N.push(T[g]),d){let $=fe(r,s,S);N.push(T[$[0]],T[$[1]])}if(O=[...O,{placement:r,overflows:N}],!N.every($=>$<=0)){var at,lt;let $=(((at=i.flip)==null?void 0:at.index)||0)+1,X=E[$];if(X&&(!(d==="alignment"?b!==F(X):!1)||O.every(L=>F(L.placement)===b?L.overflows[0]>0:!0)))return{data:{index:$,overflows:O},reset:{placement:X}};let V=(lt=O.filter(K=>K.overflows[0]<=0).sort((K,L)=>K.overflows[1]-L.overflows[1])[0])==null?void 0:lt.placement;if(!V)switch(f){case"bestFit":{var k;let K=(k=O.filter(L=>{if(R){let j=F(L.placement);return j===b||j==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(j=>j>0).reduce((j,Ue)=>j+Ue,0)]).sort((L,j)=>L[1]-j[1])[0])==null?void 0:k[0];K&&(V=K);break}case"initialPlacement":V=a;break}if(r!==V)return{reset:{placement:V}}}return{}}}};var no=new Set(["left","top"]);async function ro(t,e){let{placement:o,platform:n,elements:r}=t,i=await(n.isRTL==null?void 0:n.isRTL(r.floating)),s=q(o),a=J(o),l=F(o)==="y",c=no.has(s)?-1:1,u=i&&l?-1:1,d=Z(e,t),{mainAxis:p,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof h=="number"&&(f=a==="end"?h*-1:h),l?{x:f*u,y:p*c}:{x:p*c,y:f*u}}var we=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;let{x:r,y:i,placement:s,middlewareData:a}=e,l=await ro(e,t);return s===((o=a.offset)==null?void 0:o.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:i+l.y,data:{...l,placement:s}}}}},ve=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:n,placement:r,platform:i}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:l={fn:b=>{let{x:P,y:S}=b;return{x:P,y:S}}},...c}=Z(t,e),u={x:o,y:n},d=await i.detectOverflow(e,c),p=F(r),f=Nt(p),h=u[f],m=u[p],y=(b,P)=>zt(P+d[b==="y"?"top":"left"],P,P-d[b==="y"?"bottom":"right"]);s&&(h=y(f,h)),a&&(m=y(p,m));let g=l.fn({...e,[f]:h,[p]:m});return{...g,data:{x:g.x-o,y:g.y-n,enabled:{[f]:s,[p]:a}}}}}};var be=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){let{placement:o,rects:n,platform:r,elements:i}=e,{apply:s=()=>{},...a}=Z(t,e),l=await r.detectOverflow(e,a),c=q(o),u=J(o),d=F(o)==="y",{width:p,height:f}=n.floating,h,m;c==="top"||c==="bottom"?(h=c,m=u===(await(r.isRTL==null?void 0:r.isRTL(i.floating))?"start":"end")?"left":"right"):(m=c,h=u==="end"?"top":"bottom");let y=f-l.top-l.bottom,g=p-l.left-l.right,b=B(f-l[h],y),P=B(p-l[m],g),S=e.middlewareData.shift,A=!S,R=b,E=P;S!=null&&S.enabled.x&&(E=g),S!=null&&S.enabled.y&&(R=y),A&&!u&&(d?E=p-2*_(l.left,l.right):R=f-2*_(l.top,l.bottom)),await s({...e,availableWidth:E,availableHeight:R});let T=await r.getDimensions(i.floating);return p!==T.width||f!==T.height?{reset:{rects:!0}}:{}}}};function Rt(){return typeof window<"u"}function et(t){return Pe(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(Pe(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Pe(t){return Rt()?t instanceof Node||t instanceof C(t).Node:!1}function D(t){return Rt()?t instanceof Element||t instanceof C(t).Element:!1}function I(t){return Rt()?t instanceof HTMLElement||t instanceof C(t).HTMLElement:!1}function xe(t){return!Rt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function ht(t){let{overflow:e,overflowX:o,overflowY:n,display:r}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&r!=="inline"&&r!=="contents"}function Se(t){return/^(table|td|th)$/.test(et(t))}function mt(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}var io=/transform|translate|scale|rotate|perspective|filter/,so=/paint|layout|strict|content/,tt=t=>!!t&&t!=="none",Bt;function rt(t){let e=D(t)?z(t):t;return tt(e.transform)||tt(e.translate)||tt(e.scale)||tt(e.rotate)||tt(e.perspective)||!Ot()&&(tt(e.backdropFilter)||tt(e.filter))||io.test(e.willChange||"")||so.test(e.contain||"")}function Re(t){let e=Y(t);for(;I(e)&&!it(e);){if(rt(e))return e;if(mt(e))return null;e=Y(e)}return null}function Ot(){return Bt==null&&(Bt=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Bt}function it(t){return/^(html|body|#document)$/.test(et(t))}function z(t){return C(t).getComputedStyle(t)}function gt(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Y(t){if(et(t)==="html")return t;let e=t.assignedSlot||t.parentNode||xe(t)&&t.host||W(t);return xe(e)?e.host:e}function Oe(t){let e=Y(t);return it(e)?(t.ownerDocument||t).body:I(e)&&ht(e)?e:Oe(e)}function U(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);let r=Oe(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),s=C(r);if(i){let a=Ct(s);return e.concat(s,s.visualViewport||[],ht(r)?r:[],a&&o?U(a):[])}else return e.concat(r,U(r,[],o))}function Ct(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ee(t){let e=z(t),o=parseFloat(e.width)||0,n=parseFloat(e.height)||0,r=I(t),i=r?t.offsetWidth:o,s=r?t.offsetHeight:n,a=dt(o)!==i||dt(n)!==s;return a&&(o=i,n=s),{width:o,height:n,$:a}}function Ft(t){return D(t)?t:t.contextElement}function st(t){let e=Ft(t);if(!I(e))return M(1);let o=e.getBoundingClientRect(),{width:n,height:r,$:i}=Ee(e),s=(i?dt(o.width):o.width)/n,a=(i?dt(o.height):o.height)/r;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}var ao=M(0);function Te(t){let e=C(t);return!Ot()||!e.visualViewport?ao:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function lo(t,e,o){return e===void 0&&(e=!1),!!o&&e&&o===C(t)}function ot(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);let r=t.getBoundingClientRect(),i=Ft(t),s=M(1);e&&(n?D(n)&&(s=st(n)):s=st(t));let a=lo(i,o,n)?Te(i):M(0),l=(r.left+a.x)/s.x,c=(r.top+a.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(i&&n){let p=C(i),f=D(n)?C(n):n,h=p,m=Ct(h);for(;m&&f!==h;){let y=st(m),g=m.getBoundingClientRect(),b=z(m),P=g.left+(m.clientLeft+parseFloat(b.paddingLeft))*y.x,S=g.top+(m.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=P,c+=S,h=C(m),m=Ct(h)}}return Q({width:u,height:d,x:l,y:c})}function At(t,e){let o=gt(t).scrollLeft;return e?e.left+o:ot(W(t)).left+o}function $e(t,e){let o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-At(t,o),r=o.top+e.scrollTop;return{x:n,y:r}}function co(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t,i=r==="fixed",s=W(n),a=e?mt(e.floating):!1;if(n===s||a&&i)return o;let l={scrollLeft:0,scrollTop:0},c=M(1),u=M(0),d=I(n);if((d||!i)&&((et(n)!=="body"||ht(s))&&(l=gt(n)),d)){let f=ot(n);c=st(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}let p=s&&!d&&!i?$e(s,l):M(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:o.y*c.y-l.scrollTop*c.y+u.y+p.y}}function fo(t){return t.getClientRects?Array.from(t.getClientRects()):[]}function uo(t){let e=gt(t),o=t.ownerDocument.body,n=_(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=_(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight),i=-e.scrollLeft+At(t),s=-e.scrollTop;return z(o).direction==="rtl"&&(i+=_(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:i,y:s}}var po=25;function ho(t,e,o){o===void 0&&(o="viewport");let n=o==="layoutViewport",r=C(t),i=W(t),s=r.visualViewport,a=i.clientWidth,l=i.clientHeight,c=0,u=0;if(s){let p=!Ot()||e==="fixed";n?p||(c=-s.offsetLeft,u=-s.offsetTop):(a=s.width,l=s.height,p&&(c=s.offsetLeft,u=s.offsetTop))}if(At(i)<=0){let p=i.ownerDocument,f=p.body,h=getComputedStyle(f),m=p.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,y=Math.abs(i.clientWidth-f.clientWidth-m),g=getComputedStyle(i).scrollbarGutter==="stable both-edges"?y/2:y;g<=po&&(a-=g)}return{width:a,height:l,x:c,y:u}}function mo(t,e){let o=ot(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=st(t),s=t.clientWidth*i.x,a=t.clientHeight*i.y,l=r*i.x,c=n*i.y;return{width:s,height:a,x:l,y:c}}function Ce(t,e,o){let n;if(e==="viewport"||e==="layoutViewport")n=ho(t,o,e);else if(e==="document")n=uo(W(t));else if(D(e))n=mo(e,o);else{let r=Te(t);n={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Q(n)}function go(t,e){let o=e.get(t);if(o)return o;let n=U(t,[],!1).filter(a=>D(a)&&et(a)!=="body"),r=null,i=z(t).position==="fixed",s=i?Y(t):t;for(;D(s)&&!it(s);){let a=z(s),l=rt(s),c=r?r.position:i?"fixed":"";!l&&(c==="fixed"||c==="absolute"&&a.position==="static")?n=n.filter(d=>d!==s):r=a,s=Y(s)}return e.set(t,n),n}function yo(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t,s=[...o==="clippingAncestors"?mt(e)?[]:go(e,this._c):[].concat(o),n],a=Ce(e,s[0],r),l=a.top,c=a.right,u=a.bottom,d=a.left;for(let p=1;p<s.length;p++){let f=Ce(e,s[p],r);l=_(f.top,l),c=B(f.right,c),u=B(f.bottom,u),d=_(f.left,d)}return{width:c-d,height:u-l,x:d,y:l}}function wo(t){let{width:e,height:o}=Ee(t);return{width:e,height:o}}function vo(t,e,o){let n=I(e),r=W(e),i=o==="fixed",s=ot(t,!0,i,e),a={scrollLeft:0,scrollTop:0},l=M(0);if((n||!i)&&((et(e)!=="body"||ht(r))&&(a=gt(e)),n)){let p=ot(e,!0,i,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}!n&&r&&(l.x=At(r));let c=r&&!n&&!i?$e(r,a):M(0),u=s.left+a.scrollLeft-l.x-c.x,d=s.top+a.scrollTop-l.y-c.y;return{x:u,y:d,width:s.width,height:s.height}}function Mt(t){return z(t).position==="static"}function Ae(t,e){if(!I(t)||z(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return W(t)===o&&(o=o.ownerDocument.body),o}function Le(t,e){let o=C(t);if(mt(t))return o;if(!I(t)){let r=Y(t);for(;r&&!it(r);){if(D(r)&&!Mt(r))return r;r=Y(r)}return o}let n=Ae(t,e);for(;n&&Se(n)&&Mt(n);)n=Ae(n,e);return n&&it(n)&&Mt(n)&&!rt(n)?o:n||Re(t)||o}var bo=async function(t){let e=this.getOffsetParent||Le,o=this.getDimensions,n=await o(t.floating);return{reference:vo(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xo(t){return z(t).direction==="rtl"}var yt={convertOffsetParentRelativeRectToViewportRelativeRect:co,getDocumentElement:W,getClippingRect:yo,getOffsetParent:Le,getElementRects:bo,getClientRects:fo,getDimensions:wo,getScale:st,isElement:D,isRTL:xo};function _e(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Po(t,e,o){let n=null,r,i=W(t);function s(){var u;clearTimeout(r),(u=n)==null||u.disconnect(),n=null}function a(u,d){u===void 0&&(u=!1),d===void 0&&(d=1),s();let p=t.getBoundingClientRect(),{left:f,top:h,width:m,height:y}=p;if(u||e(),!m||!y)return;let g=pt(h),b=pt(i.clientWidth-(f+m)),P=pt(i.clientHeight-(h+y)),S=pt(f),R={rootMargin:-g+"px "+-b+"px "+-P+"px "+-S+"px",threshold:_(0,B(1,d))||1},E=!0;function T(N){let O=N[0].intersectionRatio;if(!_e(p,t.getBoundingClientRect()))return a();if(O!==d){if(!E)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}E=!1}try{n=new IntersectionObserver(T,{...R,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,R)}n.observe(t)}let l=C(t),c=()=>a(o);return l.addEventListener("resize",c),a(!0),()=>{l.removeEventListener("resize",c),s()}}function De(t,e,o,n){n===void 0&&(n={});let{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Ft(t),u=r||i?[...c?U(c):[],...e?U(e):[]]:[];u.forEach(g=>{r&&g.addEventListener("scroll",o),i&&g.addEventListener("resize",o)});let d=c&&a?Po(c,o,i):null,p=-1,f=null;s&&(f=new ResizeObserver(g=>{let[b]=g;b&&b.target===c&&f&&e&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var P;(P=f)==null||P.observe(e)})),o()}),c&&!l&&f.observe(c),e&&f.observe(e));let h,m=l?ot(t):null;l&&y();function y(){let g=ot(t);m&&!_e(m,g)&&o(),m=g,h=requestAnimationFrame(y)}return o(),()=>{var g;u.forEach(b=>{r&&b.removeEventListener("scroll",o),i&&b.removeEventListener("resize",o)}),d?.(),(g=f)==null||g.disconnect(),f=null,l&&cancelAnimationFrame(h)}}var ze=we;var Ne=ve,ke=ye,Wt=be;var Be=ge;var Me=(t,e,o)=>{let n=new Map,r=o??{},i={...yt,...r.platform,_c:n};return me(t,e,{...r,platform:i})};function Fe(t){return So(t)}function Vt(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function So(t){for(let e=t;e;e=Vt(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=Vt(t);e;e=Vt(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||rt(o)||e.tagName==="BODY"))return e}return null}var We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=t=>(...e)=>({_$litDirective$:t,values:e}),Et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,n){this._$Ct=e,this._$AM=o,this._$Ci=n}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var Ht=Ve(class extends Et{constructor(t){if(super(t),t.type!==We.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((n=>n!==""))));for(let n in e)e[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(e)}let o=t.element.classList;for(let n of this.st)n in e||(o.remove(n),this.st.delete(n));for(let n in e){let r=!!e[n];r===this.st.has(n)||this.nt?.has(n)||(r?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return jt}});function He(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t instanceof Element:!0)}var Ro=!!globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),x=class extends ct{constructor(){super(...arguments),this.localize=new ae(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),n=0,r=0,i=0,s=0,a=0,l=0,c=0,u=0;o?t.top<e.top?(n=t.left,r=t.bottom,i=t.right,s=t.bottom,a=e.left,l=e.top,c=e.right,u=e.top):(n=e.left,r=e.bottom,i=e.right,s=e.bottom,a=t.left,l=t.top,c=t.right,u=t.top):t.left<e.left?(n=t.right,r=t.top,i=e.left,s=e.top,a=t.right,l=t.bottom,c=e.left,u=e.bottom):(n=e.right,r=e.top,i=t.left,s=t.top,a=e.right,l=e.bottom,c=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${n}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ro,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||He(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=De(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let t=[ze({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Wt({apply:({rects:n})=>{let r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${n.reference.width}px`:"",this.popup.style.height=i?`${n.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height="");let e;this.SUPPORTS_POPOVER&&!He(this.anchor)&&this.boundary==="scroll"&&(e=U(this.anchorEl).filter(n=>n instanceof Element)),this.flip&&t.push(ke({boundary:this.flipBoundary||e,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Ne({boundary:this.shiftBoundary||e,padding:this.shiftPadding})),this.autoSize?t.push(Wt({boundary:this.autoSizeBoundary||e,padding:this.autoSizePadding,apply:({availableWidth:n,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${n}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Be({element:this.arrowEl,padding:this.arrowPadding}));let o=this.SUPPORTS_POPOVER?n=>yt.getOffsetParent(n,Fe):yt.getOffsetParent;Me(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.SUPPORTS_POPOVER?"absolute":"fixed",platform:{...yt,getOffsetParent:o}}).then(({x:n,y:r,middlewareData:i,placement:s})=>{let a=this.localize.dir()==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${n}px`,top:`${r}px`}),this.arrow){let c=i.arrow.x,u=i.arrow.y,d="",p="",f="",h="";if(this.arrowPlacement==="start"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=a?m:"",h=a?"":m}else if(this.arrowPlacement==="end"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=a?"":m,h=a?m:"",f=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof c=="number"?`${c}px`:"",d=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:d,right:p,bottom:f,left:h,[l]:"calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Xt)}render(){return Tt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ht({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Ht({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Tt`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};x.css=Kt;w([$t(".popup")],x.prototype,"popup",2);w([$t(".arrow")],x.prototype,"arrowEl",2);w([v({attribute:!1,type:Boolean})],x.prototype,"SUPPORTS_POPOVER",2);w([v()],x.prototype,"anchor",2);w([v({type:Boolean,reflect:!0})],x.prototype,"active",2);w([v({reflect:!0})],x.prototype,"placement",2);w([v()],x.prototype,"boundary",2);w([v({type:Number})],x.prototype,"distance",2);w([v({type:Number})],x.prototype,"skidding",2);w([v({type:Boolean})],x.prototype,"arrow",2);w([v({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);w([v({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);w([v({type:Boolean})],x.prototype,"flip",2);w([v({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],x.prototype,"flipFallbackPlacements",2);w([v({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);w([v({type:Object})],x.prototype,"flipBoundary",2);w([v({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);w([v({type:Boolean})],x.prototype,"shift",2);w([v({type:Object})],x.prototype,"shiftBoundary",2);w([v({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);w([v({attribute:"auto-size"})],x.prototype,"autoSize",2);w([v()],x.prototype,"sync",2);w([v({type:Object})],x.prototype,"autoSizeBoundary",2);w([v({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);w([v({attribute:"hover-bridge",type:Boolean})],x.prototype,"hoverBridge",2);x=w([ee("wa-popup")],x);export{w as a,ee as b,v as c,zo as d,$t as e,ct as f,ae as g,De as h,ze as i,Ne as j,ke as k,Me as l};
/*! Bundled license information:

@awesome.me/webawesome/dist/chunks/chunk.ZWQCGLB5.js:
@awesome.me/webawesome/dist/chunks/chunk.HS5AYC6E.js:
@awesome.me/webawesome/dist/chunks/chunk.7VGCIHDG.js:
@awesome.me/webawesome/dist/chunks/chunk.AOKMSJXD.js:
@awesome.me/webawesome/dist/chunks/chunk.HBKCENRD.js:
@awesome.me/webawesome/dist/chunks/chunk.TWDBLNQF.js:
@awesome.me/webawesome/dist/chunks/chunk.K442ELDU.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)

@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
