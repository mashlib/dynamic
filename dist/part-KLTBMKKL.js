import{d as a,e as s}from"./part-AVHV3I4Q.js";import{a as d}from"./part-AHAYGN5G.js";import{b as e}from"./part-5ZTE77ED.js";import{html as l}from"lit";var o=class extends e{static properties={dialogs:{state:!0}};constructor(){super(),this.dialogs=[]}connectedCallback(){super.connectedCallback(),this.addGlobalEventListener(a.eventName,i=>{i.stopImmediatePropagation(),this.dialogs=[...this.dialogs,i.dialog]}),this.addGlobalEventListener(s.eventName,i=>{i.stopImmediatePropagation();let r=this.dialogs.find(t=>t.id===i.id);this.dialogs=this.dialogs.filter(t=>t.id!==i.id),r?.closed(i.data)})}render(){return l`${this.dialogs.map(i=>l`
        <solid-ui-dialog-provider dialogId="${i.id}">
            ${i.element}
        </solid-ui-dialog-provider>
    `)}`}};d("solid-ui-dialogs-root",o);export{o as a};
