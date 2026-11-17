import{a as i}from"./part-AHAYGN5G.js";import{a as c,b as l}from"./part-5ZTE77ED.js";import{c as n}from"./part-USTJ2YCK.js";import{html as a}from"lit";import"webawesome/components/dropdown/dropdown.js";import"webawesome/components/dropdown-item/dropdown-item.js";var d=await c(n(`wa-dropdown::part(menu) {
    min-width: 300px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.35);
    gap: 2px;
}

wa-dropdown-item {
    border-radius: 5px;
    padding: 0px;

    &:hover {
        background-color: var(--solid-ui-color-primary-hover);
    }
}
`,"text/css")),o=class extends l{static styles=d;static properties={placement:{type:String,reflect:!0},distance:{type:Number,reflect:!0},items:{state:!0}};constructor(){super(),this.placement="bottom-start",this.distance=5,this.items=[],this.observer=new MutationObserver(()=>this.syncItems())}get dropdown(){return this.renderRoot?.querySelector("wa-dropdown")??null}connectedCallback(){super.connectedCallback(),this.syncItems(),this.observer.observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.observer.disconnect()}render(){return a`
      <wa-dropdown
        placement=${this.placement}
        distance=${this.distance}
        @wa-select=${this.onWaSelect}
      >
        <slot name="trigger" slot="trigger"></slot>
        ${this.items.map(t=>a`<wa-dropdown-item @click=${this.onItemClick}>
                <slot name=${t.slot}></slot>
            </wa-dropdown-item>`)}
      </wa-dropdown>
    `}syncItems(){let t=Array.from(this.children).filter(e=>e.getAttribute("slot")!=="trigger");this.items=t.map((e,r)=>{let s=`menu-item-${r}`;return e.getAttribute("slot")!==s&&e.setAttribute("slot",s),{slot:s}})}onItemClick(t){let e=t.currentTarget;t.stopPropagation(),!(e.disabled||this.dispatchSelectEvent(e).defaultPrevented||!this.dropdown)&&(this.dropdown.open=!1)}onWaSelect(t){if(this.dispatchSelectEvent(t.detail.item).defaultPrevented){t.preventDefault();return}let r=t.detail.item.children[0].getAttribute("name");this.querySelector(`[slot="${r}"]`)?.click?.()}dispatchSelectEvent(t){let e=t.children[0].getAttribute("name"),r=this.querySelector(`[slot="${e}"]`),s=new CustomEvent("solid-ui-select",{bubbles:!0,composed:!0,cancelable:!0});return r?.dispatchEvent(s),s}};i("solid-ui-menu",o);export{o as a};
