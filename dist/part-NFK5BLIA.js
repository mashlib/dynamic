import{b as y}from"./part-EPAYPZAY.js";import{a as f}from"./part-AHAYGN5G.js";import{b}from"./part-GWZG2FUI.js";import{a as m}from"./part-VHSBPZHI.js";import{c as p}from"./part-GPLAS2FA.js";import{h as v}from"./part-VB56GJIN.js";import{a as l,e as r}from"./part-VOCLXBLR.js";var g=Symbol(),c=class{get taskComplete(){return this.t||(this.i===1?this.t=new Promise(((t,e)=>{this.o=t,this.h=e})):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,i){this.p=0,this.i=0,(this._=t).addController(this);let s=typeof e=="object"?e:{task:e,args:i};this.v=s.task,this.j=s.args,this.m=s.argsEqual??x,this.k=s.onComplete,this.A=s.onError,this.autoRun=s.autoRun??!0,"initialValue"in s&&(this.u=s.initialValue,this.i=2,this.O=this.T?.())}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;let t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){let t=this.T(),e=this.O;this.O=t,t===e||t===void 0||e!==void 0&&this.m(e,t)||await this.run(t)}async run(t){let e,i;t??=this.T(),this.O=t,this.i===1?this.q?.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask((()=>this._.requestUpdate())):this._.requestUpdate();let s=++this.p;this.q=new AbortController;let n=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(a){n=!0,i=a}if(this.p===s){if(e===g)this.i=0;else{if(n===!1){try{this.k?.(e)}catch{}this.i=2,this.o?.(e)}else{try{this.A?.(i)}catch{}this.i=3,this.h?.(i)}this.u=e,this.l=i}this._.requestUpdate()}}abort(t){this.i===1&&this.q?.abort(t)}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){switch(this.i){case 0:return t.initial?.();case 1:return t.pending?.();case 2:return t.complete?.(this.value);case 3:return t.error?.(this.error);default:throw Error("Unexpected status: "+this.i)}}},x=(o,t)=>o===t||o.length===t.length&&o.every(((e,i)=>!v(e,t[i])));var w=await m(p(`:host {
    --solid-ui-input-border-color: var(--solid-ui-color-gray-400);

    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    label {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-sm);
        font-weight: 400;
    }

    wa-popup {
        display: block;
        width: 100%;
    }

    wa-popup::part(popup) {
        background: white;
        border: 1px solid var(--solid-ui-color-gray-100);
        border-radius: 5px;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.35);
        overflow: hidden;
        padding: 4px;
    }

    .input-wrapper {
        position: relative;
        width: 100%;

        input {
            border: 1px solid var(--solid-ui-input-border-color);
            border-radius: 5px;
            padding: 10px;
            padding-right: 40px;
            width: 100%;

            /* Global focus styles don't reach into the shadow DOM, so mirror them here. */
            &:focus-visible {
                outline: var(--focus-indicator-width, 2px) solid var(--color-primary, var(--solid-ui-color-primary, #7C4DFF));
                outline-offset: 2px;
                box-shadow: 0 0 0 1px var(--color-background, #F8F9FB), 0 0 0 4px rgba(124, 77, 255, 0.2);
                transition: none;
            }
        }

        icon-lucide-chevron-down {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--solid-ui-color-gray-500);
            width: var(--solid-ui-font-size-lg);
            height: var(--solid-ui-font-size-lg);
            pointer-events: none;
        }
    }

    .listbox {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-height: min(28rem, calc(100dvh - 6rem), var(--auto-size-available-height, 28rem));
        overflow-x: hidden;
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-width: thin;

        &::-webkit-scrollbar {
            width: 4px;
        }

        [role="option"], .non-selectable-option {
            color: var(--solid-ui-color-gray-700);
            padding: 12px 8px;
            border-radius: 5px;
        }

        [role="option"] {
            cursor: pointer;

            &:hover,
            &[data-active] {
                background: var(--solid-ui-color-primary-hover);
            }

            &[aria-selected="true"] {
                background: var(--solid-ui-color-primary-selected);
            }
        }

        .non-selectable-option {
            display: flex;
            justify-content: center;
            align-items: center;

            icon-svg-spinners-3-dots-fade {
                width: 2rem;
            }

            .message--error {
                color: var(--solid-ui-color-error);
            }
        }
    }
}
`,"text/css")),d=class extends Error{};function B(o){return o}var u=class extends y{static styles=w;static properties={selectOnly:{type:Boolean,reflect:!0,attribute:"select-only"},asyncOptionsUrl:{type:String,attribute:"async-options-url"},asyncOptionsResultsField:{type:String,attribute:"async-options-results-field"},asyncOptionsLabelField:{type:String,attribute:"async-options-label-field"},asyncOptionsValueField:{type:String,attribute:"async-options-value-field"},asyncOptionsProvider:{type:Function},optionsFallback:{type:Array},readonly:{type:Boolean,reflect:!0},filter:{state:!0},displayValue:{state:!0},open:{state:!0},activeIndex:{state:!0}};constructor(){super(),this.selectOnly=!1,this.asyncOptionsUrl="",this.asyncOptionsResultsField="",this.asyncOptionsLabelField="",this.asyncOptionsValueField="",this.asyncOptionsProvider=null,this.optionsFallback=null,this.readonly=!1,this.filter="",this.displayValue="",this.open=!1,this.activeIndex=-1,this.openListenersAttached=!1,this.updateDebouncedFilter=b(300,t=>this.filter=t),this.asyncOptionsTask=void 0,this._selectedOption=void 0,this.listboxId=`listbox-${this.controlTrait.controlId}`}get controlElement(){return this.renderRoot?.querySelector("input")??null}get selectedOption(){return this._selectedOption}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}willUpdate(t){if(super.willUpdate(t),(t.has("asyncOptionsUrl")||t.has("asyncOptionsProvider"))&&this.updateAsyncOptionsTask(),t.has("value")){let e=this.getFilteredOptions(),i=e.find(n=>n.selectable!==!1&&n.value===this.value)??this.optionsFallback?.find(n=>n.value===this.value),s=i?.selectable!==!1&&i?.label;this.updateDisplayValue(s||this.value),this.open&&(this.activeIndex=this.getInitialActiveIndex(e)),this._selectedOption&&this._selectedOption.value!==this.value&&(this._selectedOption=void 0)}}render(){let t=this.getFilteredOptions(),i=(this.open&&this.activeIndex>=0?t[this.activeIndex]:void 0)!==void 0?this.getOptionId(this.activeIndex):void 0,s=this.placeholder||"Combobox";return l`
      ${this.controlTrait.renderLabel()}
      <wa-popup
        placement="bottom"
        flip
        shift
        sync="width"
        auto-size="vertical"
        auto-size-padding="10"
        ?active=${this.open}
      >
        <div class="input-wrapper" slot="anchor" @mousedown=${this.onAnchorMouseDown}>
          <input
            id="${this.controlTrait.controlId}"
            type="text"
            name=${this.name}
            placeholder=${this.placeholder}
            role="combobox"
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-expanded=${this.open?"true":"false"}
            aria-controls=${this.listboxId}
            aria-activedescendant=${i??r}
            aria-labelledby=${this.label?this.controlTrait.labelId:r}
            aria-label=${this.label?r:s}
            aria-required=${this.required?"true":r}
            autocomplete="off"
            spellcheck="false"
            ?disabled=${this.disabled}
            ?required=${this.required}
            .value=${this.displayValue}
            @keydown=${this.onInputKeyDown}
            @focus=${this.onInputFocus}
            @click=${this.onInputClick}
            @input=${()=>this.selectOnly?this.updateDisplayValue(this.controlElement?.value??""):this.controlTrait.onInput()}
          />
          <icon-lucide-chevron-down></icon-lucide-chevron-down>
        </div>
        <div
          id=${this.listboxId}
          class="listbox"
          role="listbox"
          aria-orientation="vertical"
          aria-labelledby=${this.label?this.controlTrait.labelId:r}
          aria-label=${this.label?r:s}
          ?hidden=${!this.open}
          @mousedown=${this.onListboxMouseDown}
        >
          ${t.map((n,a)=>n.selectable!==!1?l`<div
                  id=${this.getOptionId(a)}
                  role="option"
                  aria-selected=${n.value===this.value?"true":"false"}
                  data-active=${a===this.activeIndex||r}
                  @mousemove=${()=>this.setActiveIndex(a)}
                >
                  ${n.template??n.label}
                </div>`:l`<div class="non-selectable-option">${n.template??n.label}</div>`)}
        </div>
      </wa-popup>
    `}getFilteredOptions(){return this.asyncOptionsTask?this.asyncOptionsTask.render({initial:()=>this.optionsFallback??[],complete:t=>t,pending:()=>[{value:"",label:"Loading...",template:l`<icon-svg-spinners-3-dots-fade></icon-svg-spinners-3-dots-fade>`,selectable:!1}],error:t=>{let e=!(t instanceof d),i=Object(t).message??"Something went wrong";return[{value:"",label:i,template:l`<span class="message message--${e?"error":"info"}">${i}</span>`,selectable:!1}]}}):this.getOptionsFromDOM().filter(t=>String(t.label).toLowerCase().includes(this.filter))}getOptionsFromDOM(){return Array.from(this.querySelectorAll("solid-ui-combobox-option")).map(t=>({value:t.value,label:t.textContent??""}))}getOptionId(t){return`${this.listboxId}-option-${t}`}getInitialActiveIndex(t){let e=t.findIndex(i=>i.value===this.value);return e>=0?e:t.length>0?0:-1}getNextIndex(t,e,i){return e.length===0?-1:(t+i+e.length)%e.length}setActiveIndex(t){this.activeIndex=t}updateDisplayValue(t){if(this.displayValue=t?String(t):"",this.open){let e=this.displayValue.toLowerCase();this.asyncOptionsTask?this.updateDebouncedFilter(e):this.filter=e}}updateAsyncOptionsTask(){if(!this.asyncOptionsUrl&&!this.asyncOptionsProvider){this.asyncOptionsTask=void 0;return}this.asyncOptionsTask??=new c(this,async([t])=>{if(this.asyncOptionsProvider){let h=await this.asyncOptionsProvider(t);if(h.length===0)throw new d("No results found");return h}let i=await(await fetch(this.asyncOptionsUrl.replace("%search%",encodeURIComponent(t)))).json(),s=Array.from(this.asyncOptionsResultsField?i[this.asyncOptionsResultsField]:i);if(s.length===0)throw new d("No results found");let n=this.asyncOptionsLabelField||"label",a=this.asyncOptionsValueField||"value";return s.map(h=>({label:String(Object(h)[n]),value:Object(h)[a]}))},()=>[this.filter])}show(t){if(this.open)return;let e=this.getFilteredOptions();e.length!==0&&(this.open=!0,this.activeIndex=t?.focusLast?e.length-1:this.getInitialActiveIndex(e),this.addOpenListeners(),requestAnimationFrame(()=>this.scrollActiveOptionIntoView()))}hide(){this.open&&(this.filter="",this.open=!1,this.activeIndex=-1,this.removeOpenListeners(),this.updateDebouncedFilter.cancel())}selectOption(t){let e=this.value;this._selectedOption=t,this.hide(),this.controlTrait.setValue(t.value),this.controlElement?.focus({preventScroll:!0}),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{option:t}})),e===this.value&&this.updateDisplayValue(t.label)}scrollActiveOptionIntoView(){this.activeIndex<0||this.shadowRoot?.querySelector(`#${this.getOptionId(this.activeIndex)}`)?.scrollIntoView({block:"nearest"})}addOpenListeners(){if(this.openListenersAttached)return;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("mousedown",this.handleDocumentMouseDown);let t=this.getRootNode();t!==document&&t.addEventListener("focusin",this.handleDocumentFocusIn),this.openListenersAttached=!0}removeOpenListeners(){if(!this.openListenersAttached)return;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("mousedown",this.handleDocumentMouseDown);let t=this.getRootNode();t!==document&&t.removeEventListener("focusin",this.handleDocumentFocusIn),this.openListenersAttached=!1}handleDocumentFocusIn=t=>{t.composedPath().includes(this)||this.hide()};handleDocumentMouseDown=t=>{t.composedPath().includes(this)||this.hide()};onAnchorMouseDown(t){t.target!==this.controlElement&&(t.preventDefault(),this.controlElement?.focus({preventScroll:!0}))}onInputFocus(){this.show()}onInputClick(){this.show()}openPopupFromKey(t){this.open||this.show({focusLast:t})}onInputKeyDown(t){let e=this.getFilteredOptions();switch(t.key){case"ArrowDown":t.preventDefault(),this.open?(this.activeIndex=this.getNextIndex(this.activeIndex,e,1),this.scrollActiveOptionIntoView()):this.openPopupFromKey(!1);break;case"ArrowUp":t.preventDefault(),this.open?(this.activeIndex=this.getNextIndex(this.activeIndex,e,-1),this.scrollActiveOptionIntoView()):this.openPopupFromKey(!0);break;case"Enter":this.open&&this.activeIndex>=0&&e[this.activeIndex]?(t.preventDefault(),this.selectOption(e[this.activeIndex])):this.open||(t.preventDefault(),this.controlTrait.onSubmit());break;case"Escape":this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.controlElement?.focus({preventScroll:!0}));break;case"Tab":this.hide();break;default:this.open||this.show()}}onListboxMouseDown(t){if(t.preventDefault(),!(t.target instanceof HTMLElement))return;let e=t.target.closest('[role="option"]');if(!e)return;let i=Number.parseInt(e.id.replace(`${this.listboxId}-option-`,""),10),s=this.getFilteredOptions()[i];s&&this.selectOption(s)}};f("solid-ui-combobox",u);export{B as a,u as b};
/*! Bundled license information:

@lit/task/task.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@awesome.me/webawesome/dist/components/popup/popup.js:
  (*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license *)
*/
