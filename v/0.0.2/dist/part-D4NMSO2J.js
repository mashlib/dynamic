var r=class extends Event{constructor(t,e,i,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e,this.callback=i,this.subscribe=s??!1}};var h=class{constructor(t,e,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(o,n)=>{this.unsubscribe&&(this.unsubscribe!==n&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=o,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(o,n)),this.unsubscribe=n},this.host=t,e.context!==void 0){let o=e;this.context=o.context,this.callback=o.callback,this.subscribe=o.subscribe??!1}else this.context=e,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new r(this.context,this.host,this.t,this.subscribe))}};var u=class{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,e=!1){let i=e||!Object.is(t,this.o);this.o=t,i&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(let[e,{disposer:i}]of this.subscriptions)e(this.o,i)},t!==void 0&&(this.value=t)}addCallback(t,e,i){if(!i)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:e});let{disposer:s}=this.subscriptions.get(t);t(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};var l=class extends Event{constructor(t,e){super("context-provider",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=e}},d=class extends u{constructor(t,e,i){super(e.context!==void 0?e.initialValue:i),this.onContextRequest=s=>{if(s.context!==this.context)return;let o=s.contextTarget??s.composedPath()[0];o!==this.host&&(s.stopPropagation(),this.addCallback(s.callback,o,s.subscribe))},this.onProviderRequest=s=>{if(s.context!==this.context||(s.contextTarget??s.composedPath()[0])===this.host)return;let o=new Set;for(let[n,{consumerHost:a}]of this.subscriptions)o.has(n)||(o.add(n),a.dispatchEvent(new r(this.context,a,n,!0)));s.stopPropagation()},this.host=t,e.context!==void 0?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new l(this.context,this.host))}};var x=class{constructor(){this.pendingContextRequests=new Map,this.onContextProvider=t=>{let e=this.pendingContextRequests.get(t.context);if(e===void 0)return;this.pendingContextRequests.delete(t.context);let{requests:i}=e;for(let{elementRef:s,callbackRef:o}of i){let n=s.deref(),a=o.deref();n===void 0||a===void 0||n.dispatchEvent(new r(t.context,n,a,!0))}},this.onContextRequest=t=>{if(t.subscribe!==!0)return;let e=t.contextTarget??t.composedPath()[0],i=t.callback,s=this.pendingContextRequests.get(t.context);s===void 0&&this.pendingContextRequests.set(t.context,s={callbacks:new WeakMap,requests:[]});let o=s.callbacks.get(e);o===void 0&&s.callbacks.set(e,o=new WeakSet),o.has(i)||(o.add(i),s.requests.push({elementRef:new WeakRef(e),callbackRef:new WeakRef(i)}))}}attach(t){t.addEventListener("context-request",this.onContextRequest),t.addEventListener("context-provider",this.onContextProvider)}detach(t){t.removeEventListener("context-request",this.onContextRequest),t.removeEventListener("context-provider",this.onContextProvider)}};export{h as a,d as b,x as c};
/*! Bundled license information:

@lit/context/lib/context-request-event.js:
@lit/context/lib/controllers/context-consumer.js:
@lit/context/lib/value-notifier.js:
@lit/context/lib/controllers/context-provider.js:
@lit/context/lib/context-root.js:
@lit/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
