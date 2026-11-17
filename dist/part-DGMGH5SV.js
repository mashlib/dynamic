import{a}from"./part-JJ4HEWI6.js";import"./part-V2462Q6D.js";import"./part-VJTDSXSH.js";import"./part-G7QL3VVZ.js";import{b as l}from"./part-YM77XAUU.js";import"./part-GWZG2FUI.js";import"./part-SX7PWH6P.js";import{a as r}from"./part-AHAYGN5G.js";import{a as s}from"./part-5ZTE77ED.js";import{c as i}from"./part-USTJ2YCK.js";import{html as n,nothing as c}from"lit";var u=await s(i(`:host {
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
`,"text/css")),o=class extends l{static styles=u;static properties={options:{type:Array,noAccessor:!0},_options:{state:!0}};constructor(){super(),this._options=null}set options(t){this._options=t}get options(){return this._options?this._options:Array.from(this.querySelectorAll("solid-ui-select-option")).map(t=>({value:t.value,label:t.textContent}))}get controlElement(){return this.renderRoot?.querySelector("select")??null}render(){let t=this.options.some(e=>a(e.value))?c:n`<option disabled value="" ?selected=${!this.value}>Select an option</option>`;return n`
      ${this.controlTrait.renderLabel()}
      <div class="input-wrapper">
        <select
          id="${this.controlTrait.controlId}"
          name=${this.name}
          ?required=${this.required}
          @change=${this.onChange}
        >
          ${t}
          ${this.options.map(e=>n`<option
                .value=${e.value}
                ?selected=${e.value===this.value}
              >
                ${e.label}
              </option>`)}
        </select>
        <icon-lucide-chevron-down></icon-lucide-chevron-down>
      </div>
    `}onChange(){let t=this.controlElement?.value??null,e=this.options.find(p=>p.value===t);this.controlTrait.setValue(t),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0,detail:{option:e}}))}};r("solid-ui-select",o);export{o as default};
