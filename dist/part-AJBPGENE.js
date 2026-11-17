import{b as l}from"./part-EPAYPZAY.js";import{a as e}from"./part-AHAYGN5G.js";import{a as r}from"./part-VHSBPZHI.js";import{c as o}from"./part-GPLAS2FA.js";import{a as i}from"./part-VOCLXBLR.js";var a=await r(o(`:host {
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

    .input-wrapper {
        position: relative;
        width: 100%;

        ::slotted([slot="left-icon"]) {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            width: var(--solid-ui-font-size-md);
            height: var(--solid-ui-font-size-md);
            pointer-events: none;
            color: var(--solid-ui-color-gray-500);
            stroke-width: 0.2px;
        }

        input {
            border: 1px solid var(--solid-ui-input-border-color);
            border-radius: 5px;
            padding: 10px;
            width: 100%;
            background: white;
            color: var(--solid-ui-color-gray-700);
            font-size: inherit;
        }

        input:read-only {
            border: none;
            padding: 0;
            cursor: not-allowed;
        }
    }
}

:host([data-has-left-icon]) .input-wrapper input {
    padding-left: 32px;
}
`,"text/css")),n=class extends l{static styles=a;static properties={type:{type:String,reflect:!0},readonly:{type:Boolean,reflect:!0}};constructor(){super(),this.type="text",this.readonly=!1}get controlElement(){return this.renderRoot?.querySelector("input")??null}render(){return i`
      ${this.controlTrait.renderLabel()}
      <div class="input-wrapper">
        <slot @slotchange=${this.onLeftIconSlotChange} name="left-icon"></slot>
        <input
          id=${this.controlTrait.controlId}
          type=${this.type}
          name=${this.name}
          placeholder=${this.placeholder}
          ?required=${this.required}
          .value=${this.value}
          ?readonly=${this.readonly}
          @input=${()=>this.controlTrait.onInput()}
          @keydown=${this.onKeyDown}
        />
      </div>
    `}onLeftIconSlotChange(t){let s=t.target;this.toggleAttribute("data-has-left-icon",s.assignedElements().length>0)}onKeyDown(t){t.key==="Enter"&&(t.preventDefault(),this.controlTrait.onSubmit())}};e("solid-ui-input",n);export{n as a};
