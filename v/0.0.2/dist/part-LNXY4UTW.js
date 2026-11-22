import{a as e}from"./part-HGODWX5M.js";import{d as s,e as l}from"./part-DOP52R3A.js";import{b as a}from"./part-VHSBPZHI.js";import{a as d}from"./part-VOCLXBLR.js";var o=class extends a{static properties={dialogs:{state:!0}};constructor(){super(),this.dialogs=[]}connectedCallback(){super.connectedCallback(),this.addGlobalEventListener(s.eventName,i=>{i.stopImmediatePropagation(),this.dialogs=[...this.dialogs,i.dialog]}),this.addGlobalEventListener(l.eventName,i=>{i.stopImmediatePropagation();let r=this.dialogs.find(t=>t.id===i.id);this.dialogs=this.dialogs.filter(t=>t.id!==i.id),r?.closed(i.data)})}render(){return d`${this.dialogs.map(i=>d`
        <solid-ui-dialog-provider dialogId="${i.id}">
            ${i.element}
        </solid-ui-dialog-provider>
    `)}`}};e("solid-ui-dialogs-root",o);export{o as a};
