import{a as p}from"./part-A7FFTCH4.js";import{b as a}from"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import{a as r}from"./part-HGODWX5M.js";import"./part-EYI2LYOK.js";import"./part-V7XQEHON.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import{a as l}from"./part-VHSBPZHI.js";import{c as i}from"./part-GPLAS2FA.js";import"./part-SVX36NT2.js";import"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as o,e as s}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var u=await l(i(`:host {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;

    label {
        color: var(--solid-ui-color-gray-600);
        font-size: var(--solid-ui-font-size-sm);
        font-weight: 400;
    }

    .input-wrapper {
        position: relative;
        width: 100%;

        select {
            appearance: none;
            border: 1px solid var(--solid-ui-color-gray-400);
            border-radius: 5px;
            padding: 10px;
            padding-right: 40px;
            width: 100%;
            background: white;
            color: var(--solid-ui-color-gray-700);
            font-size: inherit;
            cursor: pointer;
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
}
`,"text/css")),n=class extends a{static styles=u;static properties={options:{type:Array,noAccessor:!0},_options:{state:!0}};constructor(){super(),this._options=null}set options(t){this._options=t}get options(){return this._options?this._options:Array.from(this.querySelectorAll("solid-ui-select-option")).map(t=>({value:t.value,label:t.textContent}))}get controlElement(){return this.renderRoot?.querySelector("select")??null}render(){let t=this.options.some(e=>p(e.value))?s:o`<option disabled value="" ?selected=${!this.value}>Select an option</option>`;return o`
      ${this.controlTrait.renderLabel()}
      <div class="input-wrapper">
        <select
          id="${this.controlTrait.controlId}"
          name=${this.name}
          ?required=${this.required}
          @change=${this.onChange}
        >
          ${t}
          ${this.options.map(e=>o`<option
                .value=${e.value}
                ?selected=${e.value===this.value}
              >
                ${e.label}
              </option>`)}
        </select>
        <icon-lucide-chevron-down></icon-lucide-chevron-down>
      </div>
    `}onChange(){let t=this.controlElement?.value??null,e=this.options.find(c=>c.value===t);this.controlTrait.setValue(t),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{option:e}}))}};r("solid-ui-select",n);export{n as default};
