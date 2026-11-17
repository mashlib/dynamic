import{b}from"./part-YM77XAUU.js";import{b as v}from"./part-GWZG2FUI.js";import{a as u}from"./part-AHAYGN5G.js";import{a as f}from"./part-5ZTE77ED.js";import{c as h}from"./part-USTJ2YCK.js";import{Task as m}from"@lit/task";import{html as r,nothing as o}from"lit";import"webawesome/components/popup/popup.js";var y=await f(h(`:host {
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
`,"text/css")),c=class extends Error{};function L(p){return p}var d=class extends b{static styles=y;static properties={selectOnly:{type:Boolean,reflect:!0,attribute:"select-only"},asyncOptionsUrl:{type:String,attribute:"async-options-url"},asyncOptionsResultsField:{type:String,attribute:"async-options-results-field"},asyncOptionsLabelField:{type:String,attribute:"async-options-label-field"},asyncOptionsValueField:{type:String,attribute:"async-options-value-field"},asyncOptionsProvider:{type:Function},optionsFallback:{type:Array},readonly:{type:Boolean,reflect:!0},filter:{state:!0},displayValue:{state:!0},open:{state:!0},activeIndex:{state:!0}};constructor(){super(),this.selectOnly=!1,this.asyncOptionsUrl="",this.asyncOptionsResultsField="",this.asyncOptionsLabelField="",this.asyncOptionsValueField="",this.asyncOptionsProvider=null,this.optionsFallback=null,this.readonly=!1,this.filter="",this.displayValue="",this.open=!1,this.activeIndex=-1,this.openListenersAttached=!1,this.updateDebouncedFilter=v(300,e=>this.filter=e),this.asyncOptionsTask=void 0,this._selectedOption=void 0,this.listboxId=`listbox-${this.controlTrait.controlId}`}get controlElement(){return this.renderRoot?.querySelector("input")??null}get selectedOption(){return this._selectedOption}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners()}willUpdate(e){if(super.willUpdate(e),(e.has("asyncOptionsUrl")||e.has("asyncOptionsProvider"))&&this.updateAsyncOptionsTask(),e.has("value")){let t=this.getFilteredOptions(),i=t.find(n=>n.selectable!==!1&&n.value===this.value)??this.optionsFallback?.find(n=>n.value===this.value),s=i?.selectable!==!1&&i?.label;this.updateDisplayValue(s||this.value),this.open&&(this.activeIndex=this.getInitialActiveIndex(t)),this._selectedOption&&this._selectedOption.value!==this.value&&(this._selectedOption=void 0)}}render(){let e=this.getFilteredOptions(),i=(this.open&&this.activeIndex>=0?e[this.activeIndex]:void 0)!==void 0?this.getOptionId(this.activeIndex):void 0,s=this.placeholder||"Combobox";return r`
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
            aria-activedescendant=${i??o}
            aria-labelledby=${this.label?this.controlTrait.labelId:o}
            aria-label=${this.label?o:s}
            aria-required=${this.required?"true":o}
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
          aria-labelledby=${this.label?this.controlTrait.labelId:o}
          aria-label=${this.label?o:s}
          ?hidden=${!this.open}
          @mousedown=${this.onListboxMouseDown}
        >
          ${e.map((n,l)=>n.selectable!==!1?r`<div
                  id=${this.getOptionId(l)}
                  role="option"
                  aria-selected=${n.value===this.value?"true":"false"}
                  data-active=${l===this.activeIndex||o}
                  @mousemove=${()=>this.setActiveIndex(l)}
                >
                  ${n.template??n.label}
                </div>`:r`<div class="non-selectable-option">${n.template??n.label}</div>`)}
        </div>
      </wa-popup>
    `}getFilteredOptions(){return this.asyncOptionsTask?this.asyncOptionsTask.render({initial:()=>this.optionsFallback??[],complete:e=>e,pending:()=>[{value:"",label:"Loading...",template:r`<icon-svg-spinners-3-dots-fade></icon-svg-spinners-3-dots-fade>`,selectable:!1}],error:e=>{let t=!(e instanceof c),i=Object(e).message??"Something went wrong";return[{value:"",label:i,template:r`<span class="message message--${t?"error":"info"}">${i}</span>`,selectable:!1}]}}):this.getOptionsFromDOM().filter(e=>String(e.label).toLowerCase().includes(this.filter))}getOptionsFromDOM(){return Array.from(this.querySelectorAll("solid-ui-combobox-option")).map(e=>({value:e.value,label:e.textContent??""}))}getOptionId(e){return`${this.listboxId}-option-${e}`}getInitialActiveIndex(e){let t=e.findIndex(i=>i.value===this.value);return t>=0?t:e.length>0?0:-1}getNextIndex(e,t,i){return t.length===0?-1:(e+i+t.length)%t.length}setActiveIndex(e){this.activeIndex=e}updateDisplayValue(e){if(this.displayValue=e?String(e):"",this.open){let t=this.displayValue.toLowerCase();this.asyncOptionsTask?this.updateDebouncedFilter(t):this.filter=t}}updateAsyncOptionsTask(){if(!this.asyncOptionsUrl&&!this.asyncOptionsProvider){this.asyncOptionsTask=void 0;return}this.asyncOptionsTask??=new m(this,async([e])=>{if(this.asyncOptionsProvider){let a=await this.asyncOptionsProvider(e);if(a.length===0)throw new c("No results found");return a}let i=await(await fetch(this.asyncOptionsUrl.replace("%search%",encodeURIComponent(e)))).json(),s=Array.from(this.asyncOptionsResultsField?i[this.asyncOptionsResultsField]:i);if(s.length===0)throw new c("No results found");let n=this.asyncOptionsLabelField||"label",l=this.asyncOptionsValueField||"value";return s.map(a=>({label:String(Object(a)[n]),value:Object(a)[l]}))},()=>[this.filter])}show(e){if(this.open)return;let t=this.getFilteredOptions();t.length!==0&&(this.open=!0,this.activeIndex=e?.focusLast?t.length-1:this.getInitialActiveIndex(t),this.addOpenListeners(),requestAnimationFrame(()=>this.scrollActiveOptionIntoView()))}hide(){this.open&&(this.filter="",this.open=!1,this.activeIndex=-1,this.removeOpenListeners(),this.updateDebouncedFilter.cancel())}selectOption(e){let t=this.value;this._selectedOption=e,this.hide(),this.controlTrait.setValue(e.value),this.controlElement?.focus({preventScroll:!0}),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{option:e}})),t===this.value&&this.updateDisplayValue(e.label)}scrollActiveOptionIntoView(){this.activeIndex<0||this.shadowRoot?.querySelector(`#${this.getOptionId(this.activeIndex)}`)?.scrollIntoView({block:"nearest"})}addOpenListeners(){if(this.openListenersAttached)return;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("mousedown",this.handleDocumentMouseDown);let e=this.getRootNode();e!==document&&e.addEventListener("focusin",this.handleDocumentFocusIn),this.openListenersAttached=!0}removeOpenListeners(){if(!this.openListenersAttached)return;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("mousedown",this.handleDocumentMouseDown);let e=this.getRootNode();e!==document&&e.removeEventListener("focusin",this.handleDocumentFocusIn),this.openListenersAttached=!1}handleDocumentFocusIn=e=>{e.composedPath().includes(this)||this.hide()};handleDocumentMouseDown=e=>{e.composedPath().includes(this)||this.hide()};onAnchorMouseDown(e){e.target!==this.controlElement&&(e.preventDefault(),this.controlElement?.focus({preventScroll:!0}))}onInputFocus(){this.show()}onInputClick(){this.show()}openPopupFromKey(e){this.open||this.show({focusLast:e})}onInputKeyDown(e){let t=this.getFilteredOptions();switch(e.key){case"ArrowDown":e.preventDefault(),this.open?(this.activeIndex=this.getNextIndex(this.activeIndex,t,1),this.scrollActiveOptionIntoView()):this.openPopupFromKey(!1);break;case"ArrowUp":e.preventDefault(),this.open?(this.activeIndex=this.getNextIndex(this.activeIndex,t,-1),this.scrollActiveOptionIntoView()):this.openPopupFromKey(!0);break;case"Enter":this.open&&this.activeIndex>=0&&t[this.activeIndex]?(e.preventDefault(),this.selectOption(t[this.activeIndex])):this.open||(e.preventDefault(),this.controlTrait.onSubmit());break;case"Escape":this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.controlElement?.focus({preventScroll:!0}));break;case"Tab":this.hide();break;default:this.open||this.show()}}onListboxMouseDown(e){if(e.preventDefault(),!(e.target instanceof HTMLElement))return;let t=e.target.closest('[role="option"]');if(!t)return;let i=Number.parseInt(t.id.replace(`${this.listboxId}-option-`,""),10),s=this.getFilteredOptions()[i];s&&this.selectOption(s)}};u("solid-ui-combobox",d);export{L as a,d as b};
