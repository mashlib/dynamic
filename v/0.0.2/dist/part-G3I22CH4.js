import{a as Be,i as Bi,p as Tt}from"./part-44I6H3VX.js";import{a as Ni}from"./part-K4T7G5CS.js";import{a as Li,b as Fi,c as Mi,d as Ri,e as Zn,f as Di}from"./part-XVX5IZLY.js";import{a as Et}from"./part-JII5LI4F.js";import{a as Ai,c as pr,h as fr,q as Pi}from"./part-RSHJEZPV.js";import{a as Si,b as Ui}from"./part-FMXCGFSD.js";import{a as Ti}from"./part-EJ5Y4NVS.js";import{a as Re,c as Un,d as zn,e as wi,g as It,i as Nn,j as ar,k as or,l as $n,m as Vn,q as ki,r as ur,s as Ii,t as Ei,w as De}from"./part-CKVAMWOE.js";import{a as Ci,b as _i,c as dr,d as cr}from"./part-TKTGPRZR.js";import{a as xi,b as lr}from"./part-WZ5ZOODI.js";import{H as ee,d as S,j as ir,o as R}from"./part-QENSO4SJ.js";import{d as le}from"./part-EYI2LYOK.js";import{a as o}from"./part-V7XQEHON.js";import{f as sr}from"./part-DOP52R3A.js";import{a as yi,b as vi}from"./part-D4NMSO2J.js";import{b as fn}from"./part-VHSBPZHI.js";import{a as Sn,c as he}from"./part-GPLAS2FA.js";import{A as Ge,D as ve,E as rn,F as q,o as bi}from"./part-SVX36NT2.js";import{$ as dn,A as sn,C as We,D as On,E as vt,F as gi,H as _n,I as xt,O as en,R as Ct,S as _t,X as kt,Z as Se,_ as be,a as fi,ca as qn,s as mi,t as Bn,u as hi,w as tn,x as ln,z as yt}from"./part-ZY5B6SMR.js";import{a as Ie,e as hn,g as wn}from"./part-VOCLXBLR.js";import{b as pi,c as vs,d as wt}from"./part-XSGL5JX3.js";var zi=pi((Vd,qi)=>{var cn=qi.exports={};cn.list=[];cn.paneForIcon=[];cn.paneForPredicate=[];cn.register=function(e,n){if(e.requireQueryButton=n,!e.name){console.log("***     No name for pane!");return}if(console.log("  registering pane: "+e.name),!e.label){console.log("***     No label for pane!");return}if(cn.list.push(e),e.name in cn||(cn[e.name]=e),e.icon&&(cn.paneForIcon[e.icon]=e),e.predicates)for(let t in e.predicates)cn.paneForPredicate[t]={pred:t,code:e.predicates[t]}};cn.byName=function(e){for(let n=0;n<cn.list.length;n++)if(cn.list[n].name===e)return cn.list[n];return console.warn(`No view with name ${e} found in the registry of views (aka paneRegistry)`),null}});var uo=pi((Hf,Wt)=>{var Yl=function(e,n){if(typeof t>"u")var t=n.dom;var r=t.querySelectorAll(e),i={},a={init:function(s,d){this.counter=0,this.el=s,this.$items=s.querySelectorAll("figure"),this.numItems=this.$items.length,d=d||{},d.auto=d.auto||!1,this.opts={auto:typeof d.auto>"u"?!1:d.auto,speed:typeof d.auto.speed>"u"?1500:d.auto.speed,pauseOnHover:typeof d.auto.pauseOnHover>"u"?!1:d.auto.pauseOnHover,fullScreen:typeof d.fullScreen>"u"?!1:d.fullScreen,swipe:typeof d.swipe>"u"?!1:d.swipe},this.$items[0].classList.add("bss-show"),this.injectControls(s),this.addEventListeners(s),this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover),this.opts.fullScreen&&this.addFullScreen(this.el),this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(s){s>0?this.counter=this.counter+1===this.numItems?0:this.counter+1:this.counter=this.counter-1<0?this.numItems-1:this.counter-1,[].forEach.call(this.$items,function(d){d.classList.remove("bss-show")}),this.$items[this.counter].classList.add("bss-show")},injectControls:function(s){var d=t.createElement("span"),m=t.createElement("span"),f=t.createDocumentFragment();d.classList.add("bss-prev"),m.classList.add("bss-next"),d.innerHTML="&laquo;",m.innerHTML="&raquo;",f.appendChild(d),f.appendChild(m),s.appendChild(f)},addEventListeners:function(s){var d=this;s.querySelector(".bss-next").addEventListener("click",function(){d.showCurrent(1)},!1),s.querySelector(".bss-prev").addEventListener("click",function(){d.showCurrent(-1)},!1),s.onkeydown=function(m){m=m||window.event,m.keyCode===37?d.showCurrent(-1):m.keyCode===39&&d.showCurrent(1)}},autoCycle:function(s,d,m){var f=this,c=window.setInterval(function(){f.showCurrent(1)},d);m&&(s.addEventListener("mouseover",function(){c=clearInterval(c)},!1),s.addEventListener("mouseout",function(){c=window.setInterval(function(){f.showCurrent(1)},d)},!1))},addFullScreen:function(s){var d=this,m=t.createElement("span");m.classList.add("bss-fullscreen"),s.appendChild(m),s.querySelector(".bss-fullscreen").addEventListener("click",function(){d.toggleFullScreen(s)},!1)},addSwipe:function(s){var d=this,m=new Hammer(s);m.on("swiperight",function(f){d.showCurrent(-1)}),m.on("swipeleft",function(f){d.showCurrent(1)})},toggleFullScreen:function(s){!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement&&!t.msFullscreenElement?t.documentElement.requestFullscreen?s.requestFullscreen():t.documentElement.msRequestFullscreen?s.msRequestFullscreen():t.documentElement.mozRequestFullScreen?s.mozRequestFullScreen():t.documentElement.webkitRequestFullscreen&&s.webkitRequestFullscreen(s.ALLOW_KEYBOARD_INPUT):t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()}};[].forEach.call(r,function(s){i=Object.create(a),i.init(s,n)})};typeof Wt<"u"&&Wt.exports&&(Wt.exports=Yl)});var zd={};vs(zd,{OutlineManager:()=>Tr,UI:()=>De,byName:()=>je,getOutliner:()=>Mn,initMainPage:()=>bs,initializeProfileHeading:()=>Zt,isHandlingBrowserNavigation:()=>ms,list:()=>et,paneForIcon:()=>mr,paneForPredicate:()=>hr,refreshProfileHeading:()=>Cn,refreshUI:()=>ws,register:()=>At,updateEnvironment:()=>qd,versionInfo:()=>Oi});var Oi={buildTime:"2026-11-16T18:31:34Z",commit:"617cc9d",npmInfo:{"solid-panes":"5.1.0"}};var $i=wt(zi()),{list:et,paneForIcon:mr,paneForPredicate:hr,register:At,byName:je}=$i.default;var Vi=e=>function(t){let r=S.AJARImage(t.uri,S.label(t),S.label(t),e);return r.setAttribute("class","outlineImage"),r};var Hi=e=>function(t){let r=e.createElement("a"),i=t.termType==="NamedNode"?t.uri:t.value,a=i.indexOf("mailto:");return i=a>=0?i.slice(a+7):i,r.setAttribute("href","mailto:"+i),r.appendChild(e.createTextNode(i)),r};function Wi(e){let n={properties:[],defaults:[],classes:[]},t=Vi(e),r=Hi(e);return Hn(n,o.foaf("depiction").uri,t,!0),Hn(n,o.foaf("img").uri,t,!0),Hn(n,o.foaf("thumbnail").uri,t,!0),Hn(n,o.foaf("logo").uri,t,!0),Hn(n,o.schema("image").uri,t,!0),Hn(n,o.foaf("mbox").uri,r,!0),n}function Hn(e,n,t,r){e.properties[n]||(e.properties[n]=[]),e.properties[n].push(t),r&&(e.defaults[n]=t)}var Z={};Z.src=[];Z.tooltips=[];Z.src.icon_expand=R.originalIconBase+"tbl-expand-trans.png";Z.src.icon_more=R.originalIconBase+"tbl-more-trans.png";Z.src.icon_collapse=R.originalIconBase+"tbl-collapse.png";Z.src.icon_internals=R.originalIconBase+"tango/22-emblem-system.png";Z.src.icon_instances=R.originalIconBase+"tango/22-folder-open.png";Z.src.icon_foaf=R.originalIconBase+"foaf/foafTiny.gif";Z.src.icon_social=R.originalIconBase+"social/social.gif";Z.src.icon_mb=R.originalIconBase+"microblog/microblog.png";Z.src.icon_shrink=R.originalIconBase+"tbl-shrink.png";Z.src.icon_rows=R.originalIconBase+"tbl-rows.png";Z.src.icon_unrequested=R.originalIconBase+"16dot-blue.gif";Z.src.icon_fetched=R.originalIconBase+"16dot-green.gif";Z.src.icon_failed=R.originalIconBase+"16dot-red.gif";Z.src.icon_requested=R.originalIconBase+"16dot-yellow.gif";Z.src.icon_CVPane=R.originalIconBase+"CV.png";Z.src.icon_defaultPane=R.originalIconBase+"about.png";Z.src.icon_visit=R.originalIconBase+"tango/22-text-x-generic.png";Z.src.icon_dataContents=R.originalIconBase+"rdf_flyer.24.gif";Z.src.icon_n3Pane=R.originalIconBase+"w3c/n3_smaller.png";Z.src.icon_RDFXMLPane=R.originalIconBase+"22-text-xml4.png";Z.src.icon_imageContents=R.originalIconBase+"tango/22-image-x-generic.png";Z.src.icon_airPane=R.originalIconBase+"1pt5a.gif";Z.src.icon_LawPane=R.originalIconBase+"law.jpg";Z.src.icon_pushbackPane=R.originalIconBase+"pb-logo.png";Z.src.icon_photoPane=R.originalIconBase+"photo_small.png";Z.src.icon_tagPane=R.originalIconBase+"tag_small.png";Z.src.icon_TinyTag=R.originalIconBase+"tag_tiny.png";Z.src.icon_photoBegin=R.originalIconBase+"photo_begin.png";Z.src.icon_photoNext=R.originalIconBase+"photo_next.png";Z.src.icon_photoBack=R.originalIconBase+"photo_back.png";Z.src.icon_photoEnd=R.originalIconBase+"photo_end.png";Z.src.icon_photoImportPane=R.originalIconBase+"flickr_small.png";Z.src.icon_retract=R.originalIconBase+"retract.gif";Z.src.icon_refresh=R.originalIconBase+"refresh.gif";Z.src.icon_optoff=R.originalIconBase+"optional_off.PNG";Z.src.icon_opton=R.originalIconBase+"optional_on.PNG";Z.src.icon_map=R.originalIconBase+"compassrose.png";Z.src.icon_retracted=Z.src.icon_unrequested;Z.src.icon_retracted=Z.src.icon_unrequested;Z.src.icon_time=R.originalIconBase+"icons/Wclocksmall.png";Z.src.icon_telephone=R.originalIconBase+"silk/telephone.png";Z.src.icon_time=R.originalIconBase+"Wclocksmall.png";Z.src.icon_remove_node=R.originalIconBase+"tbl-x-small.png";Z.src.icon_add_triple=R.originalIconBase+"tango/22-list-add.png";Z.src.icon_add_new_triple=R.originalIconBase+"tango/22-list-add-new.png";Z.src.icon_show_choices=R.originalIconBase+"userinput_show_choices_temp.png";Z.src.icon_display_reasons=R.originalIconBase+"tango/22-help-browser.png";Z.tooltips[Z.src.icon_display_reasons]="Display explanations";Z.tooltips[Z.src.icon_add_triple]="Add more";Z.tooltips[Z.src.icon_add_new_triple]="Add one";Z.tooltips[Z.src.icon_remove_node]="Remove";Z.tooltips[Z.src.icon_expand]="View details.";Z.tooltips[Z.src.icon_collapse]="Hide details.";Z.tooltips[Z.src.icon_shrink]="Shrink list.";Z.tooltips[Z.src.icon_internals]="Under the hood";Z.tooltips[Z.src.icon_instances]="List";Z.tooltips[Z.src.icon_foaf]="Friends";Z.tooltips[Z.src.icon_rows]="Make a table of data like this";Z.tooltips[Z.src.icon_unrequested]="Fetch this.";Z.tooltips[Z.src.icon_fetched]="Fetched successfully.";Z.tooltips[Z.src.icon_failed]="Failed to load. Click to retry.";Z.tooltips[Z.src.icon_requested]="This is being fetched. Please wait...";Z.tooltips[Z.src.icon_visit]="View document";Z.tooltips[Z.src.icon_retract]="Remove this source and all its data from tabulator.";Z.tooltips[Z.src.icon_refresh]="Refresh this source and reload its triples.";Z.OutlinerIcon=function(e,n,t,r,i){return this.src=e,this.alt=t,this.width=n,this.tooltip=r,this.filter=i,this};Z.termWidgets={};Z.termWidgets.optOn=new Z.OutlinerIcon(Z.src.icon_opton,20,"opt on","Make this branch of your query mandatory.");Z.termWidgets.optOff=new Z.OutlinerIcon(Z.src.icon_optoff,20,"opt off","Make this branch of your query optional.");Z.termWidgets.addTri=new Z.OutlinerIcon(Z.src.icon_add_triple,18,"add tri","Add one");var nt,Ln;function tt(e){let n=e.document;this.menuId="predicateMenu1";let t=function(c){console.log(c+`
`)},r=o.rdf,i=sn("http://purl.org/ontology/bibo/"),a=sn("http://purl.org/dc/elements/1.1/"),s=!1;function d(f){let c=f;for(;c&&c!==n;){if(c.AJAR_statement)return c;c=c.parentNode}return S.ancestor(f,"DIV")||S.ancestor(f,"TR")}function m(f){return d(f)?.parentNode||S.ancestor(f,"TABLE")}return nt||(nt=new gi,nt.superFormula=q),Ln||(Ln=new xt),Ln.name="TempFormula",q.updater||(q.updater=new _t(q)),{sparqler:q.updater,lastModified:null,lastModifiedStat:null,statIsInverse:!1,addNewPredicateObject:function(c){if(S.getTarget(c).className!=="bottom-border-active")return;let l=e.UserInput,u=S.getTarget(c),p=n.createElement("div"),g=d(u),h=m(u);h.insertBefore(p,g);let w=n.createElement("div"),_=l.generateRequest("(TBD)",w,!0);p.appendChild(w.firstChild);let I=l.generateRequest("(Enter text or drag an object onto this field)",w,!1);if(p.appendChild(w.firstChild),g.previousSibling&&g.previousSibling.AJAR_statement){let E=g.previousSibling.AJAR_statement;l.formUndetStat(p,E.subject,_,I,E.why,!1)}else{let E=S.getAbout(q,h.parentNode),P=q.sym(We.uri.docpart(E.uri));l.formUndetStat(p,E,_,I,P,!1)}e.walk("moveTo",p.firstChild),le.info("addNewPredicateObject: selection = "+e.getSelection().map(function(E){return E.textContent}).join(", ")),this.startFillInText(e.getSelection()[0])},addNewObject:function(c){let l=S.getTarget(c).parentNode.parentNode,u=l.parentNode.AJAR_inverse;this.lastModifiedStat=l.parentNode.AJAR_statement;let p=this.appendToPredicate(l),g=this.generateRequest(" (Error) ",p,!1),h=p.previousSibling.AJAR_statement;u?this.formUndetStat(p,g,h.predicate,h.object,h.why,!0):this.formUndetStat(p,h.subject,h.predicate,g,h.why,!1),e.walk("moveTo",p.lastChild),this.startFillInText(p.lastChild)},Delete:function(c){this.deleteTriple(c,!1)},Enter:function(c){this.literalModification(c)},Click:function(c){let l=S.getTarget(c);S.getTerm(l).termType==="Literal"&&(this.literalModification(l),c.preventDefault(),c.stopPropagation())},pasteFromClipboard:function(c,l){function u(g){let h=e.clipboard[g].shift();if(h===null){le.warn("no more element in clipboard!");return}switch(g){case"predicates":case"objects":{let w=e.clipboard.all;for(let _=0;;_++)if(h.sameTerm(w[_])){w.splice(_,1);break}break}case"all":throw new Error("hostorical code not understood - what is theCollection?")}return h}let p;switch(l.className){case"undetermined selected":if(p=l.nextSibling?u("predicates"):u("objects"),!p)return;break;case"pred selected":if(p=u("objects"),!p)return;break;case"selected":{let g=u("all");if(!g)return;p=g[0],this.insertTermTo(l,p,g[1]);return}}this.insertTermTo(l,p)},startFillInText:function(c){switch(this.whatSortOfEditCell(c)){case"DatatypeProperty-like":S.emptyNode(c),this.lastModified=this.createInputBoxIn(c," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select();break;case"predicate":this.performAutoCompleteEdit(c,"PredicateAutoComplete");break;case"ObjectProperty-like":case"no-idea":this.performAutoCompleteEdit(c,"GeneralAutoComplete")}},literalModification:function(c){if(le.debug("entering literal Modification with "+c+c.textContent),c.className.indexOf(" pendingedit")!==-1)return le.warn(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),!0;let l=c;if(!this.getStatementAbout(l))return;let p,g;try{p=S.getTerm(l),g=d(l)}catch(w){le.warn("userinput.js: "+w+S.getAbout(q,c)),le.error(l+" getStatement Error:"+w)}let h;try{h=g.lastChild}catch(w){le.error(w+"@"+l)}if(p.termType==="Literal"){if(h.removeChild(h.firstChild),p.value.match(`
`)){let w=n.createElement("textarea");w.appendChild(n.createTextNode(p.value)),w.setAttribute("rows",(p.value.match(/\n/g).length+1).toString()),w.setAttribute("cols","100"),w.setAttribute("class","textinput"),h.appendChild(w),this.lastModified=w}else this.lastModified=this.createInputBoxIn(h,p.value);this.lastModified.isNew=!1,this.lastModified.select()}return!0},performAutoCompleteEdit:function(c,l){S.emptyNode(c),t("perform AutoCompleteEdit. THIS IS="+this),this.lastModified=this.createInputBoxIn(c,""),this.lastModified.select(),this.lastModified.addEventListener("keypress",this.getAutoCompleteHandler(l),!1),this.getAutoCompleteHandler(l)(1)},backOut:function(){this.deleteTriple(this.lastModified.parentNode,!0),this.lastModified=null},clearMenu:function(){let c=n.getElementById(this.menuID);c&&c.parentNode.removeChild(c)},clearInputAndSave:function(c){let l;if(!this.lastModified)return;if(!this.lastModified.isNew)try{l=this.getStatementAbout(this.lastModified).object}catch{return}let u=this.lastModifiedStat,p,g,h,w;if(this.lastModified.value!==this.lastModified.defaultValue){let _;if(this.lastModified.value===""){this.lastModified.value=this.lastModified.defaultValue,this.clearInputAndSave();return}else if(this.lastModified.isNew){u=new tn(u.subject,u.predicate,q.literal(this.lastModified.value),u.why),p=this.views.defaults[u.predicate.uri],_=d(this.lastModified);try{q.updater.update([],[u],function(I,E,P){E||(le.error("Error occurs while inserting "+u+`

`+P+`
`),e.UserInput.deleteTriple(_.lastChild,!0))})}catch(I){le.error("Error inserting fact "+u+`:
	`+I+`
`);return}u=q.add(u.subject,u.predicate,q.literal(this.lastModified.value),u.why)}else{if(this.statIsInverse){le.error("Invalid Input: a literal can't be a subject in RDF/XML"),this.backOut();return}let I,E,P;switch(l.termType){case"Literal":{let A=this.lastModified.value;_=d(this.lastModified);let D=this.lastModified.defaultValue;E=Se(u.subject,u.predicate,q.literal(this.lastModified.value),u.why);try{q.updater.update([u],[E],function(B,N,T){N?l.value=A:(le.warn("Error occurs while editing "+u+`

`+T),_.lastChild.textContent=D),_.lastChild.className=_.lastChild.className.replace(/ pendingedit/g,"")})}catch(B){le.warn("Error occurs while editing "+u+`:
	`+B);return}break}case"BlankNode":{let A=q.literal(this.lastModified.value,"");if(u.predicate.termType==="Collection"){let D=u.predicate.elements[0];if(q.any(void 0,D,A)){if(!c){let T=this.lastModified.parentNode;c={},c.pageX=S.findPos(T)[0],c.pageY=S.findPos(T)[1]+T.clientHeight}this.showMenu(c,"DidYouMeanDialog",void 0,{dialogTerm:q.any(void 0,D,A),bnodeTerm:u.subject})}else{I=d(this.lastModified).AJAR_statement,E=Se(u.subject,D,A,u.why);let T=q.the(u.subject,r("type"));P=q.anyStatementMatching(u.subject,r("type"),T,u.why),_=d(this.lastModified).parentNode;try{q.updater.update([],[I,E,P],function(X,j,te){j||(console.log("Error occurs while editing "+I+`

`+te),e.UserInput.deleteTriple(_.lastChild,!0))})}catch(X){console.log("Error occurs while editing "+I+`:
	`+X);return}q.remove(u),q.add(u.subject,D,A,u.why)}let B=m(this.lastModified).parentNode,N=je("default");e.outlineExpand(B,u.subject,{pane:N,already:!0}),e.walk("right",e.focusTd)}else{this.fillInRequest("object",this.lastModified.parentNode,q.literal(this.lastModified.value));return}break}}}}else if(this.lastModified.isNew){g=d(this.lastModified),h=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),w=g.previousSibling.AJAR_statement,this.formUndetStat(g,w.subject,w.predicate,h,w.why,!1),this.lastModified=null;return}else if(u.predicate.termType==="Collection"){q.removeMany(u.subject);let _=d(this.lastModified);w=_.AJAR_statement,h=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),this.formUndetStat(_,w.subject,w.predicate,h,w.why,!1),e.replaceTD(e.outlineObjectTD(h,p),_.lastChild),this.lastModified=null;return}else if(this.statIsInverse){if(u.subject.termType==="BlankNode"){this.backOut();return}}else if(u.object.termType==="BlankNode"){this.backOut();return}g=d(this.lastModified),this.statIsInverse?e.replaceTD(e.outlineObjectTD(u.subject,p),g.lastChild):e.replaceTD(e.outlineObjectTD(q.literal(this.lastModified.value),p),g.lastChild),this.lastModified.value!==this.lastModified.defaultValue&&(g.lastChild.className+=" pendingedit"),this.lastModified=null},deleteTriple:function(c,l){if(le.debug("deleteTriple entered"),!l&&c.className.indexOf(" pendingedit")!==-1){console.log(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),e.walk("up");return}let u=this.getStatementAbout(c);if(!l&&!q.whether(u.object,r("type"),o.link("Request"))&&!q.whether(u.predicate,r("type"),o.link("Request"))&&!q.whether(u.subject,r("type"),o.link("Request"))){le.debug("about to send SPARQLUpdate");try{q.updater.update([u],[],function(h,w,_){w?g():(console.log("Error occurs while deleting "+u+`

`+_),c.className=c.className.replace(/ pendingedit/g,""))}),c.className+=" pendingedit"}catch(h){le.error(h),le.warn("Error deleting statement "+u+`:
	`+h);return}le.debug("SPARQLUpdate sent")}le.debug("about to remove "+u),le.debug("removed"),e.walk("up");let p=c.parentNode;function g(){let h;for(h=p;h.childNodes.length===1;h=h.previousSibling);let w;if(h===p){let _=h.nextSibling;_.nextSibling&&_.childNodes.length===1&&(w=h.firstChild,w.setAttribute("rowspan",parseInt(w.getAttribute("rowspan"))-1),_.insertBefore(h.firstChild,_.firstChild)),p.parentNode.removeChild(p)}else w=h.firstChild,w.setAttribute("rowspan",parseInt(w.getAttribute("rowspan"))-1),p.parentNode.removeChild(p)}l&&g()},clipboardInit:function(){e.clipboard={},e.clipboard.objects=[],e.clipboard.predicates=[],e.clipboard.all=[]},copyToClipboard:function(c,l){let u=S.getTerm(l);switch(l.className){case"selected":case"obj selected":e.clipboard.objects.unshift(u);break;case"pred selected":case"pred internal selected":e.clipboard.predicates.unshift(u)}e.clipboard.all.unshift(u)},insertTermTo:function(c,l,u){let p,g;switch(c.className){case"undetermined selected":p=this.views.defaults[c.parentNode.AJAR_statement.predicate.uri],this.fillInRequest(c.nextSibling?"predicate":"object",c,l);break;case"pred selected":{let h=this.appendToPredicate(c);g=c.parentNode.AJAR_statement,p=this.views.defaults[g.predicate.uri],h.appendChild(e.outlineObjectTD(l,p));let w=c.parentNode.AJAR_inverse;w?h.AJAR_statemnet=q.add(l,g.predicate,g.object,g.why):h.AJAR_statement=q.add(g.subject,g.predicate,l,g.why);try{q.updater.update([],[h.AJAR_statement],function(_,I,E){I||le.error("userinput.js (pred selected): Fail trying to insert statement "+h.AJAR_statement+": "+E)})}catch(_){le.error("Exception trying to insert statement "+h.AJAR_statement+": "+S.stackString(_));return}h.AJAR_inverse=w,nt.statements.push(h.AJAR_statement);break}case"selected":{let h=m(c),w=h.insertBefore(n.createElement("div"),h.lastChild);if(g=w.previousSibling.AJAR_statement,typeof u>"u"&&(u=!0),u)this.formUndetStat(w,g.subject,this.generateRequest("(TBD)",w,!0),l,g.why,!1),w.appendChild(e.outlineObjectTD(l)),e.walk("moveTo",w.firstChild),this.startFillInText(w.firstChild);else{let _=this.generateRequest("(To be determined. Re-type of drag an object onto this field)",w);this.formUndetStat(w,g.subject,l,_,g.why,!1),w.insertBefore(e.outlinePredicateTD(l,w,!1,!1),w.firstChild),e.walk("moveTo",w.lastChild),this.startFillInText(w.lastChild)}break}}},Refill:function(c,l){le.info("Refill"+l.textContent);let u=l.nextSibling,p;if(u){let g,h,w;if(l.nextSibling.className==="undetermined"){g=S.getAbout(q,m(l).parentNode),h=q.any(g,r("type")),w=[];let _=`.
`;w[0]=`SELECT ?pred WHERE{
?pred `+r("type")+r("Property")+`.
?pred `+o.rdfs("domain")+h+".}",w[1]=`SELECT ?pred ?class
WHERE{
?pred `+r("type")+r("Property")+`.
`+h+o.rdfs("subClassOf")+` ?class.
?pred `+o.rdfs("domain")+` ?class.
}`,w[2]=`SELECT ?pred WHERE{
`+g+r("type")+q.variable("subjectClass")+_+q.variable("pred")+o.rdfs("domain")+q.variable("subjectClass")+_+"}",p=w.map(Ct)}else{g=S.getAbout(q,m(l).parentNode),h=q.any(g,r("type"));let _=l.parentNode.AJAR_statement.object;w="SELECT ?pred WHERE{"+g+r("type")+`?subjectClass.
`+_+r("type")+`?objectClass.
?pred `+o.rdfs("domain")+`?subjectClass.
?pred `+o.rdfs("range")+`?objectClass.
}`,p=Ct(w)}this.showMenu(c,"GeneralPredicateChoice",p,{isPredicate:u,selectedTd:l})}else{let g=l.parentNode.AJAR_statement.predicate;if((q.whether(g,r("type"),o.owl("DatatypeProperty"))||g.termType==="Collection"||q.whether(g,o.rdfs("range"),o.rdfs("Literal")))&&(l.className="",S.emptyNode(l),this.lastModified=this.createInputBoxIn(l," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select()),l.parentNode.AJAR_statement.predicate.sameTerm(r("type"))){let h="SELECT ?class WHERE{?class "+r("type")+o.rdfs("Class")+".}",w=Ct(h);this.showMenu(c,"TypeChoice",w,{isPredicate:u,selectedTd:l})}}},getAutoCompleteHandler:function(c){t(`

***** In getAutoCompleteHandler ****** mode = `+c),c==="PredicateAutoComplete"?c="predicate":c!=="JournalTAC"&&(c="all");let l;return c==="JournalTAC"?l=n.getElementById("inpid_journal_title"):l=this.lastModified||e.getSelection()[0].firstChild,t("InputBox="+l),t("InputBox.value="+l.value),function(u){t("ENTER EVENT="+u),t("1. outside (if eneterEvent)");let p={},g=l.parentNode;c||(c=g.nextSibling?"predicate":"all"),p.pageX=S.findPos(g)[0],p.pageY=S.findPos(g)[1]+g.clientHeight,t("epX="+p.pageX+", epY="+p.pageY+", mode="+c);let h=n.getElementById(e.UserInput.menuID);function w(_){_&&(h.lastHighlight&&(h.lastHighlight.className=""),h.lastHighlight=_,h.lastHighlight.className="activeItem",e.showURI(S.getAbout(q,h.lastHighlight)))}if(u){t("2. in (if enterEvent).  with type = "+typeof u);let _=l.value;if(typeof u=="object")switch(t("3. in typeof enterEvent is object, will switch to keys, arrows, etc. keycode = "+u.keyCode),u.stopPropagation(),h&&!h.lastHighlight&&w(h.firstChild.firstChild),u.keyCode){case 13:case 9:if(t("handler: Enter or Tab"),!h){e.UserInput.clearInputAndSave();return}if(!h.lastHighlight)return c==="JournalTAC"?(e.UserInput.clearMenu(),t("no lastH"),"no lastH"):void 0;if(h.lastHighlight.tagName==="INPUT")switch(h.lastHighlight.value){case"New...":t("subcase New"),e.UserInput.createNew();break;case"GiveURI":t("subcase GiveURI"),e.UserInput.inputURI();break}else{if(c==="JournalTAC"){if(t("movedArrow? "+s),s&&h.lastHighlight){let P=h.lastHighlight.firstChild.firstChild.innerHTML,A=h.lastHighlight.firstChild.nextSibling.innerHTML;return A=A.slice(4,-4),["gotdptitle",P,A]}return"asGivenTxt"}let I=S.getAbout(q,h.lastHighlight),E=c==="predicate"?"predicate":"object";e.UserInput.clearMenu(),e.UserInput.fillInRequest(E,l.parentNode,I)}t("outside");return;case 38:return t("handler: Arrow UP"),s=!0,_===""&&h.lastHighlight.tagName==="TR"&&!h.lastHighlight.previousSibling?w(h.firstChild.firstChild):w(h.lastHighlight.previousSibling),"I'm a little Arrow Up";case 40:return t("handler: Arrow Down"),s=!0,h.lastHighlight.tagName==="INPUT"?w(h.childNodes[1].firstChild):w(h.lastHighlight.nextSibling),"I'm a little Down Arrow";case 37:case 39:t("handler: Arrow left, right"),h.lastHighlight.tagName==="INPUT"&&(u.keyCode===37?w(h.lastHighlight.previousSibling):w(h.lastHighlight.nextSibling));return;case 8:t("handler: Backspace"),_=_.slice(0,-1);break;case 27:if(t("handler: Esc"),!h){e.UserInput.backOut();return}e.UserInput.clearMenu();return;default:t("handler: Default"),s=!1,t("oldtext="+_),_+=String.fromCharCode(u.charCode),t("charcodent="+u.charCode),t("strcharcod="+String.fromCharCode(u.charCode)),console.log("DEFAULT txtstr="+_+`
`)}if(c==="all"?(t("generalAC after switch, newText="+_+"mode is all"),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"GeneralAutoComplete",void 0,{inputText:_,selectedTd:g}),_.length===0&&e.UserInput.WildCardButtons()):c==="predicate"?(t("predicateAC after switch, newText="+_+"mode is predicate"),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"PredicateAutoComplete",void 0,{inputText:_,isPredicate:!0,selectedTd:g})):c==="JournalTAC"&&(t("JouralTAC after switch, newText="+_),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"JournalTitleAutoComplete",void 0,{inputText:_},"orderisuseless")),h=n.getElementById(e.UserInput.menuID),!h){t("No menu element.  Do not show menu.");return}return t(`at end of handler
^^^^^^^^^^^^^^^^^

`),w(h.firstChild.firstChild),e.showURI(S.getAbout(q,h.lastHighlight)),"nothing to return"}}},WildCardButtons:function(){let c=n.getElementById(e.UserInput.menuID),l=c.insertBefore(n.createElement("div"),c.firstChild),u=l.appendChild(n.createElement("input")),p=l.appendChild(n.createElement("input"));u.type="button",u.value="New...",p.type="button",p.value="Know its URI";function g(h){let w=n.getElementById(e.UserInput.menuID);w.lastHighlight&&(w.lastHighlight.className=""),w.lastHighlight=S.ancestor(S.getTarget(h),"INPUT"),w.lastHighlight&&(w.lastHighlight.className="activeItem")}l.addEventListener("mouseover",g,!1),u.addEventListener("click",this.createNew,!1),p.addEventListener("click",this.inputURI,!1)},Keypress:function(f){if(f.keyCode===13)if(e.targetOf(f).tagName!=="TEXTAREA")this.clearInputAndSave();else{let c=parseInt(this.lastModified.getAttribute("rows"));this.lastModified.setAttribute("rows",(c+1).toString()),f.stopPropagation()}},Mousedown:function(f){t("MOUSING DOWN"),window.addEventListener("keypress",function(l){l.ctrlKey&&(l.charCode===115||l.charCode===113)&&tt.switchMode()},!1),window.addEventListener("mousedown",tt.Mousedown,!1);let c=document.getElementById("OutlineView");c&&(c.oncontextmenu=function(){return!1}),f.button===2&&(tt.switchMode(),f&&(f.preventDefault(),f.stopPropagation()))},Mouseover:function(c){if(this.className="bottom-border-active",this._tabulatorMode===1)switch(S.getTarget(c).tagName){case"TD":{let l=S.getTarget(c);l.className==="pred"&&(l.style.cursor="copy");break}case"DIV":{let l=S.getTarget(c);S.getTarget(c).className==="bottom-border"&&(l.style.borderColor="rgb(100%,65%,0%)",l.style.cursor="copy");break}default:}},Mouseout:function(f){if(this.className="bottom-border",this._tabulatorMode===1){let c=S.getTarget(f);S.getTarget(f).className==="bottom-border"&&(c.style.borderColor="transparent",c.style.cursor="auto")}},whatSortOfEditCell:function(c){if(c.nextSibling)return"predicate";let l=this.getStatementAbout(c).predicate;return q.whether(l,o.rdf("type"),o.owl("DatatypeProperty"))||q.whether(l,o.rdfs("range"),o.rdfs("Literal"))||l.termType==="Collection"?"DatatypeProperty-like":q.whether(l,r("type"),o.owl("ObjectProperty"))?"ObjectProperty-like":"no-idea"},getStatementAbout:function(c){let l=d(c);if(!l)throw new Error("No ancestor TR for the TD we clicked on:"+c);let u;try{u=l.AJAR_statement}catch{throw new Error("No AJAR_statement!"+c+c.textContent+" has ancestor "+l)}return this.lastModifiedStat=l.AJAR_statement,this.statIsInverse=l.AJAR_inverse,u},createInputBoxIn:function(c,l){function u(g){(g.keyCode===38||g.keyCode===40)&&(e.OutlinerKeypressPanel(g),e.UserInput.clearInputAndSave())}le.info("myDocument in createInputBoxIn is now "+n.location),le.info("outline.document is now "+e.document.location);let p=n.createElement("input");return p.setAttribute("value",l),p.setAttribute("class","textinput"),c.className!=="undetermined selected"&&(p.setAttribute("size","100"),p.addEventListener("keypress",u,!1)),c.appendChild(p),p},createNew:function(c){e.UserInput.clearMenu();let l=e.getSelection()[0],u=l.parentNode.AJAR_statement.why,p=q.nextSymbol(u);e.UserInput.fillInRequest("object",l,p),e.outlineExpand(e.getSelection()[0],p)},inputURI:function(c){let l=e.UserInput;l.clearMenu();let u=e.getSelection()[0];S.emptyNode(u);let p=" (Type a URI) ";l.lastModified=l.createInputBoxIn(u,p),l.lastModified.select();function g(h){switch(h.stopPropagation(),h.keyCode){case 13:case 9:if(this.value!==p){let w=this.value;l.fillInRequest("object",u,q.sym(w))}}}l.lastModified.addEventListener("keypress",g,!1)},appendToPredicate:function(c){let l=!1,u;try{for(u=c.parentNode.nextSibling;u.childNodes.length===1&&u.AJAR_statement;u=u.nextSibling);}catch{l=!0}let p=n.createElement("div");if(p.style.colspan="1",p.style.display="block",p.style.display="",c.hasAttribute("rowspan")&&c.setAttribute("rowspan",parseInt(c.getAttribute("rowspan"))+1),c.hasAttribute("rowspan")||c.setAttribute("rowspan","2"),!l)u.parentNode.insertBefore(p,u);else{let g=c.parentNode.parentNode;g.className==="defaultPane"?g.insertBefore(p,g.lastChild):g.appendChild(p)}return p},bnode2symbol:function(c,l){q.copyTo(c,l,["two-direction","delete"])},generateRequest:function(c,l,u,p){let g;p||(l?g=l:g=d(this.lastModified),S.emptyNode(g));let h=Ln,w=h.bnode();if(h.add(w,o.rdf("type"),o.link("Request")),c.length<10?h.add(w,o.link("message"),h.literal(c)):h.add(w,o.link("message"),h.literal(c)),h.add(w,o.link("to"),h.literal("The User")),h.add(w,o.link("from"),h.literal("The User")),!p){let _;u?_=g.appendChild(e.outlinePredicateTD(w,g,!1,!1)):_=g.appendChild(e.outlineObjectTD(w)),_.className="undetermined",_.textContent=c}return w},showMenu:function(c,l,u,p,g){le.info("myDocument is now "+n.location),le.info("outline.doucment is now "+e.document.location);let h=this,w=n.createElement("div");if(t(`
**** In showMenu, menuType = `+l+`
`),p)for(let L in p)console.log("	 extra "+L+": "+p[L]+`
`);console.log(`CREATED MENU
`),w.id=this.menuID,w.className="outlineMenu",w.style.top=c.pageY+"px",w.style.left=c.pageX+"px";let _=function(K){let ne=0,G=0,W=0,U=0,z=0,H=0;for(;K&&!isNaN(K.offsetLeft)&&!isNaN(K.offsetTop);)z=K.offsetLeft,H=K.offsetTop,z!==W&&(ne+=K.offsetLeft-K.scrollLeft),H!==U&&(G+=K.offsetTop-K.scrollTop),W=z,U=H,K=K.parentNode;return{top:G+54,left:ne-38}};if(l==="JournalTitleAutoComplete"){let L=_(n.getElementById("inpid_journal_title"));L.left-=n.getElementById("inpid_journal_title").scrollTop,w.style.top=L.top+"px",w.style.left=L.left+"px"}console.log("menu at top="+w.style.top+" left="+w.style.left+`
`),n.body.appendChild(w);let I=w.appendChild(n.createElement("table"));w.lastHighlight=null;function E(L){w.lastHighlight&&(w.lastHighlight.className=""),w.lastHighlight=S.ancestor(S.getTarget(L),"TR"),w.lastHighlight&&(w.lastHighlight.className="activeItem")}I.addEventListener("mouseover",E,!1);let P;switch(l){case"DidYouMeanDialog":P=function(K){t("DID YOU MEAN SELECT ITEM!!!!!");let ne=S.ancestor(S.getTarget(K),"TR");ne.childNodes.length===2&&ne.nextSibling?(q.add(X,j,te),e.UserInput.clearMenu()):ne.childNodes.length===2&&e.UserInput.clearMenu()};break;case"LimitedPredicateChoice":{let L=p.clickedTd;P=function(ne){t("LIMITED P SELECT ITEM!!!!");let G=S.getAbout(q,S.getTarget(ne)),W=L.parentNode.AJAR_statement.predicate.elements;for(let H=0;H<W.length;H++)W[H].sameTerm(G)&&W.unshift(W.splice(H,1)[0]);e.UserInput.clearMenu();let U=L.parentNode,z=e.outlinePredicateTD(U.AJAR_statement.predicate,U);U.insertBefore(z,L),U.removeChild(L),h.lastModified.select()};break}case"PredicateAutoComplete":case"GeneralAutoComplete":case"GeneralPredicateChoice":case"JournalTitleAutoComplete":case"TypeChoice":{let L=p.isPredicate,K=p.selectedTd;P=function(G){t("WOOHOO");let W=S.getAbout(q,S.getTarget(G));t("GENERAL SELECT ITEM!!!!!!="+W),t("target="+S.getTarget(G)),L?(t("1"),e.UserInput.fillInRequest("predicate",K,W)&&(t("2"),e.UserInput.clearMenu())):(t("3"),e.UserInput.fillInRequest("object",K,W)&&(t("4"),e.UserInput.clearMenu()))};break}default:throw new Error("userinput: unexpected mode")}I.addEventListener("click",P,!1);let A={};q.each(void 0,o.rdf("type"),o.owl("Ontology")).forEach(function(L){let K=S.label(L);if(!K)return;let ne=K.value.match(/\((.+?)\)/);ne?A[ne[1]]=L.uri:A[K.value]=L.uri});function D(L){I.firstChild&&I.firstChild.className==="no-suggest"&&I.removeChild(I.firstChild);let K=S.predicateLabelForXML(L,!1);if(!L.uri)return;let ne="??";for(let U in A)if(le.debug(A[U]),We.string_startswith(L.uri,A[U])){ne=U;break}let G=I.appendChild(n.createElement("tr"));G.setAttribute("about",L),G.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(K)),G.appendChild(n.createElement("td")).appendChild(n.createTextNode(ne.toUpperCase()))}function B(L){return function(K){let ne=K[L.vars[0]];D(ne)}}function N(L){h.clearMenu(),L.stopPropagation()}let T,X,j,te,de,V;switch(l){case"DidYouMeanDialog":{let L=p.dialogTerm;X=p.bnodeTerm,w.style.width="auto";let ne=I.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));ne.appendChild(n.createTextNode("Did you mean..."));let G=q.statementsMatching(L),W;for(W=0;W<G.length&&!q.whether(G[W].predicate,r("type"),o.owl("InverseFunctionalProperty"));W++);let U=G[W].predicate,z=q.any(L,G[W].predicate),H=S.label(L)+" who has "+S.label(U)+" "+z+"?",ae=I.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));ae.appendChild(n.createTextNode(H)),ne.setAttribute("colspan","2"),ae.setAttribute("colspan","2");let M=I.appendChild(n.createElement("tr"));M.appendChild(n.createElement("th")).appendChild(n.createTextNode("Yes")),M.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));let J=I.appendChild(n.createElement("tr"));J.appendChild(n.createElement("th")).appendChild(n.createTextNode("No")),J.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));break}case"PredicateAutoComplete":{T=p.inputText;let L=e.labeller.searchAdv(T,void 0,"predicate"),K=[];for(let G=0;G<L.length;G++){let W={};W.vars=[],W.vars.push("Kenny");let U={};U.Kenny=q.fromNT(L[G].NT);try{B(W)(U)}catch(z){throw new Error("I'll deal with bnodes later...[Kenny]"+z)}}let ne=K[0];if(ne.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let G=0;G<ne.length&&G<10;G++)D(ne[G][1]);break}case"GeneralAutoComplete":{T=p.inputText;let L;try{L=e.labeller.search(T)}catch(G){console.log("GeneralAutoComplete: debug me "+p.selectedTd.textContent+`
`+G+`
`)}let K=L[0],ne=L[1];if(K.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let G=0;G<K.length&&G<10;G++){let W=K[G][1].toNT();de=I.appendChild(n.createElement("tr")),de.setAttribute("about",W),V=de.appendChild(n.createElement("th")),V.appendChild(n.createElement("div")).appendChild(n.createTextNode(K[G][0]));let U=ne[G],z=U?S.label(U):"";de.appendChild(n.createElement("td")).appendChild(n.createTextNode(z))}break}case"JournalTitleAutoComplete":{T=p.inputText,console.log("testing searching text= "+T+` =====
`),console.log(`
===start JournalTitleAutoComplete
`);let L=q.each(void 0,r("type"),i("Journal")),K=[];for(let ne=0;ne<L.length;ne++){let G=L[ne],W=q.each(G,a("title"),void 0),U=W+"",z=T.toLowerCase();if(U.toLowerCase().search(z)!==-1){t("FOUND A Journal Title Match!!!!!!"),K.push(W);let Q=I.appendChild(n.createElement("tr"));Q.setAttribute("about","journalTitle"),Q.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(W)),Q.appendChild(n.createElement("td")).appendChild(n.createTextNode(G))}}console.log("matched: "+K+`
`),console.log(`\\\\done showMenu's JTAutocomplete
`);break}case"LimitedPredicateChoice":{let L=S.getAbout(q,p.clickedTd);L.termType="Collection";let K=q.each(L,o.link("element"));for(let ne=0;ne<K.length;ne++)D(K[ne]);break}default:{de=I.appendChild(n.createElement("tr")),de.className="no-suggest",V=de.appendChild(n.createElement("th")),V.appendChild(n.createElement("div")).appendChild(n.createTextNode("No suggested choices. Try to type instead.")),de.appendChild(n.createElement("td")).appendChild(n.createTextNode("OK")),de.addEventListener("click",N,"false");let L=function(){};switch(u.constructor.name){case"Array":for(let K=0;K<u.length;K++)q.query(u[K],B(u[K]),L);break;case"undefined":throw new Error("addPredicateChoice: query is not defined");default:q.query(u,B(u),L)}}}},fillInRequest:function(c,l,u){let p=l.parentNode,g=p.AJAR_statement,h=p.AJAR_inverse,w=c==="object"?g.object:g.predicate,_,I=!1,E;if(q.any(w,o.link("onfillin")),c==="predicate"){let P=e.outlinePredicateTD(u,p,!1,!1);if(l.nextSibling.className!=="undetermined"){let A=new tn(g.subject,u,g.object,g.why);try{q.updater.update([],[A],function(D,B,N){B?(_=q.anyStatementMatching(g.subject,u,g.object,g.why),p.AJAR_statement=_,P.className=P.className.replace(/ pendingedit/g,"")):le.warn("Failure occurs (#2) while inserting "+p.AJAR_statement+`

`+N)})}catch(D){le.error(D),le.warn("Error when insert (#2) of statement "+A+`:
	`+D);return}P.className+=" pendingedit",this.lastModified=null}else this.formUndetStat(p,g.subject,u,g.object,g.why,!1),e.walk("right"),I=!0;e.replaceTD(P,l),Ln.remove(g)}else if(c==="object"){let P=e.outlineObjectTD(u);if(e.replaceTD(P,l),!l.previousSibling||l.previousSibling.className!=="undetermined"){let A;h?A=new tn(u,g.predicate,g.object,g.why):A=new tn(g.subject,g.predicate,u,g.why);try{q.updater.update([],[A],function(D,B,N){le.info("@@ usinput.js (object) callback ok="+B+" for statement:"+A+`
 `);let T;B?(P.className=P.className.replace(/ pendingedit/g,""),h?T=q.statementsMatching(u,g.predicate,g.object,g.why):T=q.statementsMatching(g.subject,g.predicate,u,g.why),T.length||le.error("userinput.js 1711: Can't find statememt!"),p.AJAR_statement=T[0]):le.warn("userinput.js (object): Fail trying to insert statement "+A)})}catch(D){le.error("userinput.js (object): exception trying to insert statement "+A+": "+S.stackString(D)),le.warn("Error trying to insert statement "+A+`:
`+D);return}this.lastModified=null,P.className+=" pendingedit"}else e.walk("left"),I=!0;Ln.remove(g)}if(nt.statements.push(_),E&&E(g.subject),I)this.startFillInText(e.getSelection()[0]);else return!0},formUndetStat:function(c,l,u,p,g,h){return c.AJAR_inverse=h,c.AJAR_statement=Ln.add(l,u,p,g),c.AJAR_statement}}}function Gi(){this.queries=[],this.listeners=[],this.addQuery=function(e){let n;for((e.name===null||e.name==="")&&(e.name="Query #"+(this.queries.length+1)),e.id=this.queries.length,this.queries.push(e),n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].addQuery(e)},this.removeQuery=function(e){let n;for(n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].removeQuery(e);this.queries[e.id]!==null&&delete this.queries[e.id]},this.addListener=function(e){let n;for(this.listeners.push(e),n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.addQuery(this.queries[n])},this.removeListener=function(e){let n;for(n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.removeQuery(this.queries[n]);for(n=0;n<this.listeners.length;n++)this.listeners[n]===e&&delete this.listeners[n]}}var Cs=["profile/card#me","profile/card.jsonld#me"];async function ji(e){for(let n of Cs){let t=be(`${e}${n}`);try{return await q.fetcher.load(t),t}catch{}}}function Ji(e){let n=ve.currentUser();return!!(n&&(n.sameTerm(e)||n.doc().sameTerm(e)))}async function kn(e){try{let n=e.site().uri,t=await ji(n);if(t)return t;try{let i=new URL(e.uri),a=i.pathname.split("/").filter(Boolean);if(a.length>0){let s=`${i.origin}/${a[0]}/`,d=await ji(s);if(d)return d}}catch{}try{await q.fetcher.load(e)}catch{return e}let r=q.any(e,o.foaf("primaryTopic"),null,e.doc());if(r&&r.termType==="NamedNode")try{return await q.fetcher.load(r),r}catch{return e}return e}catch{return e}}function un(e){try{return new URL(e.uri).hash==="#me"}catch{return!1}}function Ki(e,n){return e.anyValue(n,o.vcard("fn"),null,n.doc())||e.anyValue(n,o.foaf("name"),null,n.doc())||new URL(n.uri).host.split(".")[0]}async function St(e){if(un(e)){try{await q.fetcher.load(e.doc())}catch(t){console.warn("Unable to load profile document for WebID",e.doc().uri,t)}return q.each(e,o.space("storage")).filter(t=>t.termType==="NamedNode")}try{let n=await _s(e);return n?[n]:[]}catch(n){return console.error("cannot load container",n),[]}}async function _s(e){let n=new URL(e.value||e.uri),t=n.pathname;for(;t.length;){t=t.substring(0,t.lastIndexOf("/"));let r=q.sym(`${n.origin}${t}/`);if(await ks(r))return r}return null}async function ks(e){return await gr(e),q.holds(e,o.rdf("type"),o.space("Storage"),e.doc())}async function gr(e){if(!q.any(e,o.ldp("contains"),void 0,e.doc()))try{let t=(await q.fetcher.webOperation("GET",e.uri,q.fetcher.initFetchOptions(e.uri,{headers:{accept:"text/turtle"}}))).responseText;e.uri&&t&&en(t,q,e.uri,"text/turtle")}catch(n){console.warn("Unable to load container representation for",e.uri,n)}}var Is={profile:"profile",social:"friends",folder:"storage"};function br(e){return e!==null&&typeof e=="object"?e:{}}function Es(e,n){return e?{kind:Is[e]??"pane",pane:e,...n?{subject:n}:{}}:{kind:"default"}}function wr(e){let{paneName:n,paneUri:t,viaAccountMenu:r}=br(e);return{view:Es(typeof n=="string"&&n?n:void 0,typeof t=="string"&&t?t:void 0),viaAccountMenu:r===!0}}function In(){return wr(window.history.state)}var Wn=new WeakMap;function Yi(e){return(Wn.get(e)??0)>0}function rt(e,n,t,r,i){Wn.set(e,(Wn.get(e)??0)+1);try{e[n](t,r,i)}finally{let a=(Wn.get(e)??1)-1;a?Wn.set(e,a):Wn.delete(e)}}function Xi(e,n){let t={...br(e)};return n.pane&&(t.paneName=n.pane.name,typeof n.pane.subject=="string"&&(t.paneUri=n.pane.subject)),n.leavingPage&&!n.pane&&delete t.paneName,(n.leavingPage&&!n.pane||n.pane&&!n.pane.subject)&&delete t.paneUri,n.viaAccountMenu?t.viaAccountMenu=!0:delete t.viaAccountMenu,t}function Ts(e){let{paneName:n,paneUri:t,viaAccountMenu:r,...i}=br(e);return i}function Ut(){rt(window.history,"replaceState",Ts(window.history.state),"",window.location.href)}var As=["profile","social"];function yr(e){return e!==void 0&&As.includes(e)}function Qi(e){return yr(e)}function Zi(e){let{view:n,viaAccountMenu:t,viewer:r,pageUrl:i,owner:a,storageUris:s}=e,d=n.pane,m=d==="profile"||d==="social"?a!==void 0:d==="folder"&&s.some(c=>!n.subject||c===n.subject),f=m||!t?a:void 0;return yr(d)?{mode:d==="profile"?"full":"compact",subjectUri:n.subject||(m?a:void 0)||i,paneName:d}:!f||f===r?{mode:"none"}:{mode:"compact",subjectUri:f,paneName:d}}function vr(e,n){return{paneName:e.pane??(n?"profile":void 0),paneUri:e.subject}}function it(e,n,t){return!n.paneName||e.paneName!==n.paneName?!1:e.paneName==="folder"?n.paneUri?n.paneUri===e.paneUri:t===1:!0}function ea(e,n,t){let r=e.filter(i=>i.paneName===n);return r.find(i=>i.paneUri===t)??r[0]}function na(e){return e.viaAccountMenu||e.ownProfile||e.inViewerPod}function ta(e){return e.viaAccountMenu||e.inViewerPod||!e.hasOwner?"explorer":"storage"}function ra(e){return e.isRootResource||e.isWebId?!1:!e.viewerPodOnly||e.inViewerPod}function ia(e,n,t,r=!1){return n==="folder"||n==="basicPreferences"||n==="home"||n==="dashboard"?!1:e&&!yr(n)}var Ps=new URL("panes/solid-panes/src/icons/folder.svg",Sn).href,Ss=new URL("panes/solid-panes/src/icons/person.svg",Sn).href,Us=new URL("panes/solid-panes/src/icons/friends.svg",Sn).href,Ns=Ps,aa=Ss,Ls=Us;function xr(e,n,t,r,i,a){return{name:e.name,paneName:t,tabName:a,label:function(){return r},render:function(s,d,m){return e.render(n,d,t==="folder"?{...m,solo:!1,fullView:!1}:m)},shouldGetFocus:function(){return!1},requireQueryButton:!!e.requireQueryButton,subject:n,icon:i}}async function oa(e,n,t="Pane",r="",i=je){let a=new URL(window.location.href),s=n||be(a.toString()),d=await kn(s);if(!d||!d.value)return null;let m=i(e);return m?xr(m,d,e,t,r):null}async function Nt(e,n=je){if(e&&un(e)){let t=n("profile");return t?xr(t,e,"profile","Profile",aa):null}return oa("profile",e,"Profile",aa,n)}async function Cr(e,n=je){return oa("social",e,"Social",Ls,n)}async function Lt(e,n){let t=je("folder");return t?xr(t,e,t.name,n||"Storage",Ns):null}async function Ft(e){let n=await St(e);return n.length===0?[]:Promise.all(n.map((t,r)=>Lt(t,n.length>1?`Storage ${r+1}`:"Storage"))).then(t=>t.filter(r=>r!==null))}var Fs=500,sa=new Map,la=new Map,da=new Map;function Ms(e){try{let n=new URL(e),[t=""]=n.pathname.split("/").filter(Boolean);return`${n.origin}|${t}`}catch{return e}}function Rs(e){return be(e).doc().uri}function _r(e,n,t,r,i){let a=e.get(n);if(a)return a;let s=r().catch(d=>(console.warn(`Could not load the ${t} for ${n}`,d),e.get(n)===s&&e.delete(n),i));return e.set(n,s),e.size>Fs&&e.delete(e.keys().next().value),s}function Ds(e){return _r(sa,Rs(e),"owner of the pod",async()=>{let n=be(e),t=await kn(n);return t.uri===n.uri&&!un(n)?void 0:t.value},void 0)}function Bs(e,n){let t=n?be(n):be(e);return _r(la,Ms(e),"storages of the pod",()=>Ft(t),[])}function Os(e){return e?_r(da,e,"storages of the viewer",async()=>(await St(be(e))).map(n=>n.uri),[]):Promise.resolve([])}async function En(e=window.location.href){let n=ve.currentUser()?.value,[t,r]=await Promise.all([Ds(e),Os(n)]),i=await Bs(e,t);return{viewer:n,owner:t,storagePanes:i,viewerStorages:r}}function ca(){sa.clear(),la.clear(),da.clear()}function ua(e,n){return e.owner===n.owner&&e.viewer===n.viewer&&e.storagePanes.map(t=>t.subject.value).join()===n.storagePanes.map(t=>t.subject.value).join()}function kr(e,n){return e.viewerStorages.some(t=>n.startsWith(t))}async function Mt(e){return kr(await En(e),e)}var Ir="solid-panes:navigated";function pa(e){let n={url:e.location.href,state:wr(e.defaultView?.history.state)};e.dispatchEvent(new CustomEvent(Ir,{detail:n}))}function Rt(e,n=document){let t=r=>e(r.detail);return n.addEventListener(Ir,t),()=>n.removeEventListener(Ir,t)}function fa(e){return typeof e=="object"&&e!==null?e.folderView:void 0}function ma(e){return typeof e=="object"&&e!==null?e.source??"default":e===void 0||e?"default":"accountMenu"}var qs="navbar--hidden",Er=0;function Dt(e){++Er,document.querySelector("solid-panes-navbar")?.classList.toggle(qs,e)}async function at(e,n=!1){let t=++Er,r=Ji(be(e));if(n||r){Dt(!0);return}let i=await Mt(e);t===Er&&Dt(na({viaAccountMenu:n,ownProfile:r,inViewerPod:i}))}function ha({dom:e,UI:n,kb:t,outlineIcons:r,expandMouseDownListener:i,selectableTDClickListener:a,setSelected:s,viewAsBoringDefault:d,removeNodeIconMouseDownListener:m}){function f(p,g,h){let w=S.AJARImage(r.src.icon_remove_node,"remove",void 0,e);return w.addEventListener("click",m),w.node=h,w.setAttribute("about",g.toNT()),w.style.marginLeft="5px",w.style.marginRight="10px",p.appendChild(w),w}let c={};globalThis.termWidget=c,c.construct=function(p){p=p||document;let g=p.createElement("div");return g.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),g.setAttribute("class","iconTD"),g.setAttribute("notSelectable","true"),g.style.width="0px",g},c.addIcon=function(p,g,h){let w=p.childNodes[1];if(!w)return;let _=S.AJARImage(g.src,g.alt,g.tooltip,e),I=Number.parseInt(w.style.width||"0",10)+g.width;w.style.width=I+"px",w.appendChild(_),h&&_.addEventListener("click",h)},c.removeIcon=function(p,g){let h=p.childNodes[1],w;if(!h)return;let _=Number.parseInt(h.style.width||"0",10)-g.width;h.style.width=_+"px";for(let I=0;I<h.childNodes.length;I++){let E=h.childNodes[I],P=E.src;try{w=e.location.href.split("?")[0]}catch{w=""}let A=ln.join(g.src,w);P===A&&h.removeChild(E)}},c.replaceIcon=function(p,g,h,w){c.removeIcon(p,g),c.addIcon(p,h,w)};function l(p,g,h,w){let _=e.createElement("div");if(_.classList.add("obj"),_.setAttribute("notSelectable","false"),_.setAttribute("role","gridcell"),_.setAttribute("tabindex","0"),_.setAttribute("data-outline-node","object"),!p)return _.textContent="No object available.",_;let I="obj";return(p.termType==="NamedNode"||p.termType==="BlankNode"||p.termType==="Literal"&&p.value.slice&&(p.value.slice(0,6)==="ftp://"||p.value.slice(0,8)==="https://"||p.value.slice(0,7)==="http://"))&&(_.setAttribute("about",p.toNT()),_.appendChild(n.utils.AJARImage(n.icons.originalIconBase+"tbl-expand-trans.png","expand",void 0,e)).addEventListener("click",i)),_.setAttribute("class",I),t.whether(p,n.ns.rdf("type"),n.ns.link("Request"))&&(_.className="undetermined"),g||(g=d),_.appendChild(g(p)),h&&f(_,p,h),_.tabulatorSelect=function(){s(this,!0)},_.tabulatorDeselect=function(){s(this,!1)},_.addEventListener("click",a),_}function u(p,g,h,w){let _=e.createElement("div");_.setAttribute("about",p.toNT()),_.setAttribute("class",w?"pred internal":"pred"),_.setAttribute("role","gridcell"),_.setAttribute("data-outline-node","predicate");let I;switch(p.termType){case"BlankNode":_.className="undetermined";break;case"NamedNode":I=n.utils.predicateLabelForXML(p,h);break;case"Collection":I=n.utils.predicateLabelForXML(p.elements[0],h)}I=I?I.slice(0,1).toUpperCase()+I.slice(1):"...";let E=e.createElement("div");E.classList.add("labelTD"),E.setAttribute("notSelectable","true"),E.appendChild(e.createTextNode(I)),_.appendChild(E),E.style.width="100%",_.appendChild(c.construct(e));for(let P in r.termWidgets){if(!g||!g.AJAR_statement)break;r.termWidgets[P].filter&&r.termWidgets[P].filter(g.AJAR_statement,"pred",h)&&c.addIcon(_,r.termWidgets[P])}return _.tabulatorSelect=function(){s(this,!0)},_.tabulatorDeselect=function(){s(this,!1)},_.addEventListener("click",a),_}return{appendRemoveIcon:f,outlineObjectDiv:l,outlinePredicateDiv:u,termWidget:c}}var zs=new URL("panes/solid-panes/src/icons/person.svg",Sn).href,$s=new URL("panes/solid-panes/src/icons/friends.svg",Sn).href;function ga(e,n,t){if(e)return typeof e.icon=="function"?e.icon(n,t):e.icon}async function ba(e,n,t,r){return typeof r!="function"?[]:Ei({subject:e,context:n,panes:t,iconOverrides:{profile:()=>zs,social:()=>$s},openPane:(i,a)=>r(i,a)})}Be(he(`/* Styles extracted from manager.js */

.obj {
  margin: 0.2em;
  border: none;
  padding: 0 0 5px 0;
  vertical-align: top;
}

.iconTD {
  margin: 0.2em;
  border: none;
  padding: 0;
  vertical-align: top;
  width: 0px;
}

.labelTD {
  width: 100%;
}

.strongHeader {
  font-size: 150%;
  margin: 0 0.6rem 0 0;
  padding: 0.1rem 0.4rem;
}

.tableFullWidth {
  width: 100%;
  background: var(--color-background, #F8F9FB) !important;
}

.placeholderTable {
  width: 100%;
}

.tdFlex {
  border-radius: 5px;
  vertical-align: top;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
}

solid-ui-file-explorer-provider {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  width: 100%;
  min-width: 0;
}

solid-ui-file-explorer-provider.tdFlex {
  flex-direction: column;
  align-items: stretch;
}

solid-ui-file-explorer-provider > solid-ui-file-explorer-header {
  flex: 0 0 auto;
  width: 100%;
}

solid-ui-file-explorer-provider > .paneDiv,
solid-ui-file-explorer-provider > .exceptionPane {
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.paneDiv,
.exceptionPane {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.objectValue--literal {
  white-space: pre-wrap;
}

.objectValue--integer,
.objectValue--decimal,
.objectValue--double {
  display: block;
  text-align: right;
}

.objectValueAccessIcon,
.objectValueLinkIcon,
.phoneIcon {
  display: inline-block;
  vertical-align: middle;
}

.objectValueLinkIcon,
.phoneIcon {
  width: 12px;
  height: 12px;
}

@media (max-width: 600px) {
  .obj,
  .iconTD {
    font-size: 100%;
    margin: 0 !important;
    vertical-align: top;
  }
}
`,"text/css"));var wa=()=>import("./part-XATNEJPO.js").then(e=>e.default),gn="solid-ui-file-explorer-provider";function Vs(e){e.addEventListener("close",()=>e.remove())}function Tr(e){let n=e.dom,t=new WeakMap,r=new WeakMap,i=new WeakSet;this.document=e.dom,this.context=e,this.framePanes=[],this.outlineIcons=Z,this.labeller=this.labeller||{},this.labeller.LanguagePreference="";let a=this,s=this,d=[];this.selection=d,this.ancestor=S.ancestor,this.sparql=_t,this.kb=q;let m=q,f=q.fetcher;n.outline=this,this.qs=new Gi,this.UserInput=new tt(this),this.clipboardAddress="tabulator:clipboard",this.UserInput.clipboardInit(this.clipboardAddress);let{outlineObjectDiv:c,outlinePredicateDiv:l,termWidget:u}=ha({dom:n,UI:De,kb:q,outlineIcons:Z,expandMouseDownListener:H,selectableTDClickListener:ie,setSelected:U,viewAsBoringDefault:He,removeNodeIconMouseDownListener:oe});this.outlineObjectDiv=c,this.outlinePredicateDiv=l,this.outlineObjectTD=c,this.outlinePredicateTD=l,this.termWidget=u,this.init=function(){let x=h();x.outline=this},this.getLayoutMode=function(){let x=this.context?.environment?.layout;if(x==="mobile"||x==="desktop")return x;if(typeof window<"u"&&window.matchMedia){let b=Math.round(Math.min(window.innerWidth,window.visualViewport?.width||window.innerWidth)),y=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;return b<=768||y&&b<=1024?"mobile":"desktop"}return"desktop"},p.lastkbsize=0;function p(x){let b=[];for(let k=arguments.length-1;k>0;k--)b[k-1]=arguments[k];let y=new Date().getTime(),v=x.apply(x,b),F=new Date().getTime();return le.info("BENCHMARK: kb delta: "+(m.statements.length-p.lastkbsize)+", time elapsed for "+x+" was "+(F-y)+"ms"),p.lastkbsize=m.statements.length,v}function g(x,b,y){let v=S.AJARImage(Z.src.icon_remove_node,"remove",void 0,n);return v.addEventListener("click",oe),v.node=y,v.setAttribute("about",b.toNT()),v.style.marginLeft="5px",v.style.marginRight="10px",x.appendChild(v),v}this.appendAccessIcons=function(x,b,y){if(y.termType!=="NamedNode")return;let v=x.uris(y);v.sort();let F=null;for(let k=0;k<v.length;k++)v[k]!==F&&(F=v[k],s.appendAccessIcon(b,F))},this.appendAccessIcon=function(x,b){if(!b)return"";let y=ln.docpart(b);if(y.slice(0,5)!=="http:")return"";let v=f.getState(y),F,k,C;switch(v){case"unrequested":F=Z.src.icon_unrequested,k="fetch",C=$;break;case"requested":F=Z.src.icon_requested,k="fetching",C=M;break;case"fetched":F=Z.src.icon_fetched,C=J,k="loaded";break;case"failed":F=Z.src.icon_failed,k="failed",C=M;break;case"unpermitted":F=Z.src.icon_failed,C=M,k="no perm";break;case"unfetchable":F=Z.src.icon_failed,C=M,k="cannot fetch";break;default:le.error("?? state = "+v);break}let O=S.AJARImage(F,k,Z.tooltips[F].replace(/[Tt]his resource/,y),n);return O.classList.add("objectValueAccessIcon"),O.setAttribute("uri",b),O.addEventListener("click",C),L(O,y),x.appendChild(O),O};function h(){return _("OutlineView","Resource browser")}function w(x){at(x.uri).catch(b=>le.error("Failed to update navbar visibility: "+b))}function _(x){if(x==="OutlineView"){let b=document.getElementById("OutlineView");if(b)return b;let y=document.getElementById("MainContent")||document.body;if(y){let v=document.createElement("div");return v.id="OutlineView",v.classList.add("outline-view"),v.setAttribute("aria-label","Resource browser"),y.appendChild(v),v}}}async function I(x,b){return x.uri.endsWith("/")&&await gr(x),ki(x,b,{excludedPaneNames:["sharing"],fallbackPaneName:"internal"})}function E(x){let b=n.getElementById("queryButton");b&&(x?b.removeAttribute("style"):b.setAttribute("style","display:none;"))}function P(x){let b=s.framePanes.filter(y=>et.includes(y));return x&&b.includes(x)?x:b[0]||null}this.framePaneFor=P;let A=x=>x.frameContext?{...e,...x.frameContext}:e;function D(x,b,y){!x.isConnected||x.parentElement?.closest(gn)||h().contains(x)&&(x.setAttribute("data-outline-top",""),n.dispatchEvent(new CustomEvent("solid-panes:pane-shown",{detail:{pane:y,name:y.name,subjectUri:b.uri,framedPane:x.frameContext?.framedPane}})))}function B(x,b,y,v){if(!x||!y)return;let F;try{le.info("outline: Rendering pane (menu): "+y.name),F=y.render(b,A(x),v)}catch(k){F=n.createElement("div"),F.setAttribute("class","exceptionPane");let C=n.createElement("pre");F.appendChild(C),C.appendChild(n.createTextNode(S.stackString(k)))}T(x,b,y,F),r.set(x,{pane:y,subjectUri:b.uri}),D(x,b,y)}function N(x,b,y){if(!y){le.warn("outline: Unable to open pane in place: pane is undefined.");return}E(!!y.requireQueryButton),x.pane=y,x.frameContext=null,B(x,b,y,t.get(x)?.options||{})}this.refreshActiveExplorerPanes=function(){let x=Array.from(n.querySelectorAll(gn));for(let b of x){let y=b.subjectUri,v=b.pane;if(!y||!v)continue;let F=b.querySelector(":scope > .paneDiv");if(!F||F.matches('[data-preserve-pane-on-resize="true"]')||F.querySelector('[data-preserve-pane-on-resize="true"]')||F.querySelector(":scope > folder-pane-view"))continue;let k;try{k=v.render(be(y),A(b),b.paneRenderOptions||t.get(b)?.options||{})}catch(C){le.error("outline: Failed to refresh pane layout: "+S.stackString(C));continue}k.classList.add("paneDiv"),F.replaceWith(k),r.set(b,{pane:v,subjectUri:y})}};function T(x,b,y,v){let F=t.get(x);Ii(x,{context:e,subjectUri:b.uri,pane:y,relevantPanes:x.relevantPanes||[],header:F&&ia(F.showHeader,y?.name,F.options.folderView,F.options.solo)?{paneIcon:ga(y,b,e),menuItems:F.menuItems,showBack:!F.options.solo}:void 0,paneElement:v})}async function X(x,b,y,v){y=y||{},v=v||n.createElement(gn);let k={generation:(t.get(v)?.generation||0)+1,menuItems:[],options:y};t.set(v,k),v.classList.add("paneView","tdFlex"),v.setAttribute("notSelectable","true"),v.setAttribute("role","grid"),v.setAttribute("about",x.toNT()),y.hover&&v.classList.add("hoverControl"),v.context=e,v.subjectUri=x.uri,v.soloPane=y.solo,i.has(v)||(v.addEventListener(Ci,me=>{cr(me,v)&&(me.stopPropagation(),Q({target:v}))}),v.addEventListener(_i,me=>{me.stopPropagation();let Ce=be(me.detail.subjectUri).doc();Ge.acl.findAccessGrants(Ce).then(async ke=>{let Oe=await wa();sr(Oe,{props:{subjectUri:Ce.uri,accessGrants:ke}})}).catch(ke=>{le.error("outline: Failed to open access controls: "+S.stackString(ke))})}),v.addEventListener(dr,me=>{if(!cr(me,v))return;me.stopPropagation();let Ce=e.session.paneRegistry.byName(me.detail.paneName);N(v,be(me.detail.subjectUri),Ce)}),i.add(v));let C=y.hideList?[]:await I(x,e);if(t.get(v)!==k)return v;let O=e.session.logic?.resource||Ge.resource,Y=x.uri.endsWith("/")?be(`${x.uri}index.ttl`):null;if(y.solo&&!b&&!y.folderView&&Y&&(typeof O?.containerHasIndexDocument=="function"&&O.containerHasIndexDocument(x)||m.holds(x,o.ldp("contains"),Y,x.doc()))){if(x=typeof O?.getContainerIndexThing=="function"?O.getContainerIndexThing(x):be(`${Y.uri}#this`),await m.fetcher.load(x.doc()),C=await I(x,e),t.get(v)!==k)return v;v.subjectUri=x.uri,v.setAttribute("about",x.toNT())}let fe=P(b);if(fe){let me=C.filter(ke=>!s.framePanes.includes(ke)),Ce=b&&b!==fe?b:me.length?ur(x,e,me):void 0;v.relevantPanes=[fe,...me],v.pane=fe,v.frameContext={framedPane:Ce,loadError:y.loadError}}else v.relevantPanes=C,v.pane=b||ur(x,e,C),v.frameContext=null;C=v.relevantPanes;let ue=!!(x&&x.uri&&x.site&&x.site().uri===x.uri),se=!!y.headerOnlyInViewerPod,xe=!x.uri.endsWith("/index.ttl#this")&&ra({isRootResource:ue,isWebId:un(x),viewerPodOnly:se,inViewerPod:se?await Mt(n.location.href):!0});if(t.get(v)!==k)return v;k.showHeader=xe,v.paneRenderOptions=y,v.soloPane=y.solo,v.openPane=(me,Ce)=>N(v,me,je(Ce)),v.handleAccessClick=async()=>{try{let me=x.doc(),Ce=await Ge.acl.findAccessGrants(me),ke=await wa();sr(ke,{props:{subjectUri:me.uri,accessGrants:Ce}})}catch(me){le.error("outline: Failed to open access controls: "+S.stackString(me))}};let _e=r.get(v);if(v.pane?.managesUpdates===!0&&_e?.pane===v.pane&&_e.subjectUri===x.uri&&!y.refresh&&!!v.querySelector(":scope > .paneDiv")?(T(v,x,v.pane),D(v,x,v.pane)):v.pane?B(v,x,v.pane,y):T(v,x,v.pane),xe){let me=await ba(x,e,C,(Ce,ke)=>{v.dispatchEvent(new CustomEvent(dr,{bubbles:!0,composed:!0,detail:{subjectUri:Ce.uri,paneName:ke}}))});t.get(v)===k&&(k.menuItems=me,T(v,x,v.pane))}return v}function j(x){let b=x.parentNode,y=b.parentNode,v=n.createElement("div");y.replaceChild(v,b),b.removeChild(x),y.replaceChild(b,v)}let te=this.propertyTable=function(b,y,v,F){le.debug("Property block for: "+b),b=m.canon(b);let k=y?y.matches?.(gn)?y:y.firstElementChild||y:n.createElement(gn);return X(b,v,F,k).catch(C=>{le.error("outline: Failed to set up file explorer: "+S.stackString(C))}),y&&le.info("Re-expand: "+y),y||k};function de(x,b,y){let v=x.createElement("div");v.AJAR_statement=b,v.AJAR_inverse=y,v.setAttribute("predTR","true"),v.setAttribute("role","row");let F=s.outlinePredicateDiv(b.predicate,v,y);return v.appendChild(F),v}this.propertyTR=de;function V(x,b,y,v){if(le.debug("Property list length = "+b.length),b.length===0)return"";let F,k,C;y?(F=function(Y){return Y.subject},b=b.sort(S.RDFComparePredicateSubject)):(F=function(Y){return Y.object},b=b.sort(S.RDFComparePredicateObject));let O=b.length;for(k=0;k<O;k++){let Y=b[k];if(v&&!v(Y.predicate,y))continue;let re=de(n,Y,y);x.appendChild(re);let fe=re.firstChild,ue=Me.defaults[Y.predicate.uri],se=0,xe=0,_e=0;for(C=0;C+k<O&&b[k+C].predicate.sameTerm(Y.predicate);C++)C>0&&F(b[k+C]).sameTerm(F(b[k+C-1]))&&se++,F(b[k+C]).lang&&a.labeller.LanguagePreference&&(xe+=1,F(b[k+C]).lang.indexOf(a.labeller.LanguagePreference)>=0&&_e++);if(_e>0&&xe===se+1){for(let we=k;we<=k+se;we++)if(a.labeller.LanguagePreference&&F(b[we]).lang.indexOf(a.labeller.LanguagePreference)>=0){re.appendChild(s.outlineObjectDiv(F(b[we]),ue,void 0,Y));break}k+=se;continue}re.appendChild(s.outlineObjectDiv(F(Y),ue,void 0,Y)),re.showNobj=function(we){let me=C-se,Ce=2*we<me?we:me,ke=[];if(me!==1){fe.setAttribute("rowspan",Ce===me?me:we+1);let Oe;Ce<me&&Ce===1&&fe.setAttribute("rowspan",2);let $e=0;for(Oe=1;Oe<C;Oe++)if(m.canon(F(b[k+Oe])).sameTerm(m.canon(F(b[k+Oe-1]))))le.info("there are duplicates here: %s",b[k+Oe-1]);else{$e++,Y=b[k+Oe],ue=Me.defaults[Y.predicate.uri];let Ue=n.createElement("div");Ue.style.colspan="1",Ue.appendChild(s.outlineObjectDiv(F(b[k+Oe]),ue,void 0,Y)),Ue.AJAR_statement=Y,Ue.AJAR_inverse=y,x.appendChild(Ue),$e>=Ce&&(Ue.style.display="none",ke.push(Ue))}Ce===me&&fe.setAttribute("rowspan",$e+1)}if(Ce<me){let Oe=n.createElement("div"),$e=Oe.appendChild(n.createElement("div"));if($e.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),$e.classList.add("obj"),$e.setAttribute("notSelectable","false"),me>we){let Ue=n.createElement("a");$e.appendChild(Ue);let qe=(function(pn){return pn(fe,C,se,we)})(function(pn,bt,nr,tr){return function(ui){Ue.innerHTML="",ui==="none"?(Ue.appendChild(S.AJARImage(R.originalIconBase+"tbl-more-trans.png","more","See all",n)),Ue.appendChild(n.createTextNode(me-tr+" more...")),pn.setAttribute("rowspan",tr+1)):(Ue.appendChild(S.AJARImage(R.originalIconBase+"tbl-shrink.png","(less)",void 0,n)),pn.setAttribute("rowspan",me+1));for(let rr=0;rr<ke.length;rr++){let ys=ke[rr];ys.style.display=ui}}}),ze="none",nn=function(pn){return qe(ze),ze=ze==="none"?"":"none",pn&&pn.stopPropagation(),!1};nn(),Ue.addEventListener("click",nn,!1)}x.appendChild(Oe)}},re.showAllobj=function(){re.showNobj(C-se)},re.showNobj(10),k+=C-1}}this.appendPropertyTRs=V;function L(x,b){le.debug("Button callbacks for "+b+" added");let y=function(v){return function(k){return k.indexOf("#")>=0,!x||!a.ancestor(x,"DIV")?!1:(k===b&&(x.src=v,x.title=Z.tooltips[v]),!0)}};f.addCallback("request",y(Z.src.icon_requested)),f.addCallback("done",y(Z.src.icon_fetched)),f.addCallback("fail",y(Z.src.icon_failed))}function K(x){let b=x.getAttribute("class");return!!(b&&b.indexOf("selected")>=0)}function ne(x){let y=s.targetOf(x).parentNode;u.replaceIcon(y.parentNode,Z.termWidgets.optOn,Z.termWidgets.optOff,G),y.parentNode.parentNode.removeAttribute("optional")}function G(x){let y=s.targetOf(x).parentNode;u.replaceIcon(y.parentNode,Z.termWidgets.optOff,Z.termWidgets.optOn,ne),y.parentNode.parentNode.setAttribute("optional","true")}function W(x,b){let y=Z.termWidgets.optOn,v=Z.termWidgets.optOff,F=k=>!!(k&&typeof k.getAttribute=="function"&&(k.getAttribute("predTR")==="true"||k.getAttribute("data-outline-node")==="predicate"));for(let k=x;k.parentNode;k=k.parentNode)for(;;)if(F(k)){let C=k.getAttribute("parentOfSelected");C?C=parseInt(C):C=0,C===0&&b>0&&u.addIcon(k.childNodes[0],k.getAttribute("optional")?y:v,k.getAttribute("optional")?ne:G),C=C+b,k.setAttribute("parentOfSelected",C),C===0&&(k.removeAttribute("parentOfSelected"),u.removeIcon(k.childNodes[0],k.getAttribute("optional")?y:v));break}else if(k.previousElementSibling)k=k.previousElementSibling;else break}this.statusBarClick=function(x){let b=S.getTarget(x);b.label&&(window.content.location=b.label)},this.showURI=function(b){b&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=b.termType==="NamedNode"?b.uri:"")},this.showSource=function(){if(!(typeof sourceWidget>"u")){for(let b in sourceWidget.sources)sourceWidget.sources[b].setAttribute("class","");for(let b=0;b<d.length;b++){if(!d[b].parentNode)continue;let y=d[b].parentNode.AJAR_statement;if(!y)continue;let v=y.why;v&&v.uri&&sourceWidget.highlight(v,!0)}}},this.getSelection=function(){return d};function U(x,b){if(x.nodeName!=="TD"&&x.nodeName!=="DIV")throw le.debug("down"+x.nodeName),new Error("Expected TD or DIV in setSelected: "+x.nodeName+" : "+x.textContent);le.debug("pass");let y=x.getAttribute("class");if(y||(y=""),b){y+=" selected",(y.indexOf("pred")>=0||y.indexOf("obj")>=0)&&W(x,1),d.push(x);let v=S.getTerm(x);s.showURI(v);let F=x.AJAR_statement;if(typeof F>"u"&&x.parentNode&&(F=x.parentNode.AJAR_statement),F){let k=F.why,C=q.updater.editable(k.uri,m);C&&y.indexOf("pred")>=0&&u.addIcon(x,Z.termWidgets.addTri)}}else le.debug("cla=$"+y+"$"),y==="selected"&&(y=""),y=y.replace(" selected",""),(y.indexOf("pred")>=0||y.indexOf("obj")>=0)&&W(x,-1),y.indexOf("pred")>=0&&u.removeIcon(x,Z.termWidgets.addTri),d=d.filter(function(v){return v===x}),le.info("Deselecting "+x.textContent);typeof sourceWidget<"u"&&s.showSource(),x.setAttribute("class",y)}function z(){let x=d.length;for(let b=x-1;b>=0;b--)U(d[b],!1);d=[]}this.targetOf=function(x){let b;if(x||(x=window.event),x.target)b=x.target;else if(x.srcElement)b=x.srcElement;else return le.error("can't get target for event "+x),!1;return b.nodeType===3&&(b=b.parentNode),b},this.walk=function(b,y){let v=y||d[0],F;switch(b){case"down":try{F=v.parentNode.nextSibling.lastChild}catch{this.walk("up");return}z(),U(F,!0);break;case"up":try{F=v.parentNode.previousSibling.lastChild}catch{return}z(),U(F,!0);break;case"right":{let k=v.matches?.(gn)?v:v.querySelector?.(gn),C=k?.querySelector?.('[data-outline-node="object"]');if(k){C&&(z(),U(C,!0));return}}if(z(),v.nextSibling||v.lastChild.tagName==="strong")U(v.nextSibling,!0);else{let k=v.parentNode&&v.parentNode.nextSibling,C=k?k.lastChild:null;if(!C){U(v,!0);return}U(C,!0)}break;case"left":if(z(),v.previousSibling&&v.previousSibling.className==="undetermined")return U(v.previousSibling,!0),!0;{let k=ae(v);U(k?.block||v.parentNode&&v.parentNode.firstChild,!0)}break;case"moveTo":z(),U(y,!0);break}(b==="down"||b==="up")&&(F.tabulatorSelect||this.walk(b))},this.OutlinerKeypressPanel=function(b){le.info("Key "+b.keyCode+" pressed");function y(Y){Y&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=Y.termType==="NamedNode"?Y.uri:"")}function v(Y){return arguments[3]||(O("right",C),y(S.getAbout(m,d[0]))),!0}let F,k;if(S.getTarget(b).tagName==="TEXTAREA"||S.getTarget(b).id==="UserURI"||d.length>1)return;if(d.length===0){(b.keyCode===13||b.keyCode===38||b.keyCode===40||b.keyCode===37||b.keyCode===39)&&(this.walk("right",s.focusTd),y(S.getAbout(m,d[0])));return}let C=d[0];switch(f.removeCallback("done","setSelectedAfterward"),f.removeCallback("fail","setSelectedAfterward"),b.keyCode){case 13:if(S.getTarget(b).tagName==="HTML"){let Y=S.getAbout(m,C);F=C.parentNode.AJAR_statement.why,k=q.updater.editable(F.uri,m),Y?a.GotoSubject(Y,!0):k&&s.UserInput.Enter(C)}else this.UserInput.Keypress(b),this.walk("down"),b.stopPropagation();return;case 38:this.walk("up"),b.stopPropagation(),b.preventDefault();break;case 40:this.walk("down"),b.stopPropagation(),b.preventDefault()}if(S.getTarget(b).tagName==="INPUT")return;let O;switch(b.keyCode){case 46:case 8:F=C.parentNode.AJAR_statement.why,k=q.updater.editable(F.uri,m),k&&(b.preventDefault(),this.UserInput.Delete(C));break;case 37:{if(this.walk("left"))return;let Y=ae(C);if(!Y)break;let re=S.getAbout(m,Y.provider);re&&Pe(Y.block,re);break}case 39:{let Y=S.getAbout(m,C);if(Y){if(O=this.walk,C.nextSibling){this.walk("right");return}C.firstElementChild?.matches(gn)||(f.addCallback("done",v),f.addCallback("fail",v),ge(C,Y,{pane:je("defaultPane")})),v()}}break;case 38:case 40:break;default:switch(b.charCode){case 99:if(b.ctrlKey){s.UserInput.copyToClipboard(s.clipboardAddress,C);break}break;case 118:case 112:if(b.ctrlKey){s.UserInput.pasteFromClipboard(s.clipboardAddress,C);break}break;default:S.getTarget(b).tagName}}y(S.getAbout(m,d[0]))},this.OutlinerMouseclickPanel=function(x){switch(s.UserInput._tabulatorMode){case 0:ce(x);break;case 1:s.UserInput.Click(x);break;default:}};function H(x){let b=s.targetOf(x),y,v;for(let O=b;O&&O!==n;O=O.parentNode)O.matches?.('[data-outline-node="object"]')&&(y=O),O.matches?.(".outline-subject-block")&&(v=O);let F=v||y||b.parentNode,k=S.getAbout(m,b),C=x.altKey?je("internal"):void 0;x.shiftKey?Le(F,k,C):x.altKey?ge(F,k,{pane:je("internal"),immediate:!0}):ge(F,k)}function Q(x){let b=s.targetOf(x),y=x.altKey?je("internal"):void 0,v=ae(b);if(!v)return;let F=S.getAbout(m,v.provider);F&&Pe(v.block,F,y)}function ae(x){for(let b=x;b&&b!==n;b=b.parentNode){if(b.matches?.('[data-outline-node="object"]')){let y=b.querySelector?.(gn);if(y)return{block:b,provider:y}}if(b.matches?.(gn))return{block:b.closest?.('[data-outline-node="object"]')||b.closest?.(".outline-subject-block")||b,provider:b}}return null}function M(x){let y=s.targetOf(x).getAttribute("uri");x.altKey?f.fetch(ln.docpart(y),{force:!0}):f.refresh(m.sym(ln.docpart(y)))}function J(x){let y=s.targetOf(x).getAttribute("uri");x.altKey?f.fetch(ln.docpart(y),{force:!0}):f.refresh(m.sym(ln.docpart(y)))}function $(x){let y=s.targetOf(x).getAttribute("uri");f.fetch(ln.docpart(y))}function oe(x){let b=s.targetOf(x),y=b.node;y.childNodes.length>1&&(y=b.parentNode),j(y)}function ie(x){if(s.UserInput._tabulatorMode)return s.UserInput.Click(x);let b=s.targetOf(x),y;for(y=S.ancestor(b,"td")||S.ancestor(b,"tr")||S.ancestor(b,"div");y&&y.getAttribute("notSelectable")!=="false";y=S.ancestor(y.parentNode,"td")||S.ancestor(y.parentNode,"tr")||S.ancestor(y.parentNode,"div"));if(!y)return;let v=K(y);if(le.debug("Was node selected before: "+v),x.altKey)U(y,!K(y));else if(x.shiftKey)U(y,!0);else{if(z(),s.UserInput.clearInputAndSave(x),U(y,!0),x.detail===2){x.stopPropagation();return}let F;if(y.parentNode&&(F=y.parentNode.AJAR_statement),!F)return;let k=F.why,C=q.updater.editable(k.uri,m);v&&C&&s.UserInput.Click(x,d[0])}le.debug("Was node selected after: "+K(y)+", count="+d.length),x.stopPropagation()}function ce(x){le.info("@TabulatorMousedown, dom.location is now "+n.location);let b=s.targetOf(x);if(!b)return;let y=b.tagName;y==="INPUT"||y==="TEXTAREA"||(s.UserInput.clearMenu(),s.UserInput.lastModified&&s.UserInput.lastModified.parentNode.nextSibling&&s.UserInput.backOut(),(!b.src||b.src.slice(b.src.indexOf("/icons/")+1)!==Z.src.icon_show_choices&&b.src.slice(b.src.indexOf("/icons/")+1)!==Z.src.icon_add_triple)&&s.UserInput.clearInputAndSave(x),(!b.src||b.src.slice(b.src.indexOf("/icons/")+1)!==Z.src.icon_show_choices)&&s.UserInput.clearMenu(),x&&x.stopPropagation())}function pe(x){n.title=S.label(x),n.location.href.startsWith(x.site().uri)}function ge(x,b,y){y=y||{};let v=y.pane,F=!!y.already,k=y.immediate;le.info("@outlineExpand, dom is now "+n.location),f.removeCallback("done","expand"),f.removeCallback("fail","expand");let C=m.canon(b),O=!1,Y=null;function re(){Y&&f.getState(C.doc().uri)==="fetched"&&(Y=null);let se=Y?{...y,loadError:Y}:y;if(O){if(f.getState(C.doc().uri)!=="fetched")return!1;O=!1,F=!1}if(C=m.canon(C),!x||!x.parentNode||!x.parentNode.parentNode)return!1;let xe;le.info("@@ REPAINTING "),F?xe=te(C,x,v,se):xe=te(C,void 0,v,se),F=!0,xe!==x&&S.emptyNode(x).appendChild(xe),s.focusTd=x,le.debug("expand: Node for "+C+" expanded");let _e=m.each(C,o.rdfs("seeAlso"));for(let we=0;we<_e.length;we++)we===25&&le.warn("expand: Warning: many ("+_e.length+") seeAlso links for "+C),f.lookUpThing(_e[we],C)}function fe(se){if(arguments[3])return!0;let xe=m.canon(C);le.info("@@ expand: relevant subject="+xe+", uri="+se+", already="+F);let _e=m.sym(ln.docpart(se));if(se.indexOf("#")>=0)throw new Error("Internal error: hash in "+se);return function(){if(!xe.uri)return!0;let me=m.uris(xe);if(!me)return!1;for(let Ce=0;Ce<me.length;Ce++)for(let ke=ln.docpart(me[Ce]);ke;ke=m.HTTPRedirects[ke])if(se===ke)return!0;return!!m.anyStatementMatching(xe,void 0,void 0,_e)}()?(le.success("@@ expand OK: relevant subject="+xe+", uri="+se+", source="+F),re(),!1):!0}if(y.solo&&pe(C),v?.global){re();return}le.debug("outlineExpand: dereferencing "+C);let ue=n.createElement("span");if(x.appendChild(ue),f.addCallback("done",fe),f.addCallback("fail",fe),C.uri&&C.uri.split(":")[0]==="rdf"){re();return}if(C.uri&&!k&&!ee.isAudio(C)&&!ee.isVideo(C)){let se=C.doc()&&C.doc().uri?C.doc().uri:""+C.doc(),xe=function(Ue){let qe=!!(C&&C.uri&&C.site&&C.site().uri===C.uri);return Ue===403?qe?"This root resource is not accessible with your current permissions. Try logging in with an authorized account or opening a public profile document.":"This resource is not accessible with your current permissions.":qe?"This root resource is not publicly readable. Try logging in or opening a profile document.":"This resource is not publicly readable. Try logging in or opening a different public resource."},_e=function(Ue,qe){let ze=typeof Ue=="string"?Ue:String(Ue||""),nn=qe?.status||qe?.response?.status;return nn===401||nn===403?nn:ze.includes("status: 403")||ze.includes("status 403")?403:ze.includes("status: 401")||ze.includes("status 401")?401:null},we=function(){let Ue=!!(C&&C.uri&&C.site&&C.site().uri===C.uri),qe=!!Ge.authn.currentUser();return Ue?qe?"You are logged in, but this root resource is not publicly readable. Select a storage location from the account menu to continue.":"This root resource is not publicly readable. Try logging in or opening a profile document.":qe?"You are logged in, but your account does not have permission to view this resource.":"This resource is not publicly readable. Log in to view it."},me=function(){O=!0;let Ue=n.createElement("solid-ui-error-state");Ue.setAttribute("title","Access denied"),Ue.setAttribute("message",we()),se&&Ue.setAttribute("data-outline-error-for",se),Vs(Ue),S.emptyNode(x).appendChild(Ue),f.addCallback("done",function(ze){return!O||!x.isConnected?!1:ze!==se?!0:(re(),!1)}),f.getState(se)==="fetched"&&re()},Ce=function(Ue,qe){if(x.querySelector&&se&&x.querySelector('[data-outline-error-for="'+se+'"]'))return;let ze=_e(Ue,qe);if(P(v)&&!(ze&&!ke&&Ge.authn.currentUser())){let bt=typeof Ue=="string"?Ue:String(qe&&qe.message||Ue||""),nr=f.requested[se];Y={status:ze||qe?.status||qe?.response?.status||(typeof nr=="number"?nr:Number((bt.match(/status:? (\d{3})/)||[])[1])||0),message:bt},re();return}if(ze&&y.solo){if(!ke&&Ge.authn.currentUser()){ke=!0,Oe(!0);return}me();return}let nn=ze?xe(ze):Ue,pn=ee.errorMessageBlock(n,nn,"#fee",qe instanceof Error?qe:void 0);se&&pn.setAttribute("data-outline-error-for",se),x.appendChild(pn)},ke=!1,Oe=function(Ue){let qe=!1,ze=f.nowOrWhenFetched(C.doc(),Ue?{force:!0}:{},function(nn,pn){nn?(f.lookUpThing(C),re(),y.solo&&pe(C)):(qe=!0,Ce(pn,void 0))});ze&&typeof ze.catch=="function"&&ze.catch(function(nn){qe||(qe=!0,Ce(nn,nn))})},$e=f.requested[se];Oe(!!y.solo&&($e===401||$e===403))}else re()}function Pe(x,b){let y=x.AJAR_statement||x.parentNode&&x.parentNode.AJAR_statement;le.debug("Collapsing subject "+b);let v;y&&(le.debug("looking up pred "+y.predicate.uri+"in defaults"),v=Me.defaults[y.predicate.uri]),le.debug("view= "+v);let F;x.parentNode&&x.parentNode.id==="outline"&&(F=x),s.replaceTD(s.outlineObjectDiv(b,v,F,y),x)}this.replaceTD=function(b,y){let v;K(y)&&(v=!0);for(let F=d.length-1;F>-1;F--)for(let k=d[F];k.parentNode;k=k.parentNode)k===y&&U(d[F],!1);y.parentNode.replaceChild(b,y),v&&U(b,!0)};function Le(x,b){S.emptyNode(x).appendChild(te(b)),pe(b),x.setAttribute("about",b.toNT())}a.outlineRefocus=Le,this.GotoFormURI_enterKey=function(x){x.keyCode===13&&a.GotoFormURI(x)},this.GotoFormURI=function(x){ye(n.getElementById("UserURI").value)};function ye(x){let b=m.sym(x);this.GotoSubject(b,!0)}let Te=0;function Ze(x,b,y){let v=++Te,F=b.uri,k=y.uri.split("#")[0];if(!F.endsWith("/")||!k.startsWith(F)||k===F)return;let C=[],O=k.slice(F.length).split("/"),Y=F;O.forEach((ue,se)=>{ue&&(Y+=se<O.length-1?ue+"/":ue,C.push(Y))});let re=ue=>Array.from(x.querySelectorAll("td.obj[about]")).find(se=>se.getAttribute("about")===m.sym(ue).toNT()),fe=ue=>new Promise(se=>{let xe=re(ue);if(xe)return se(xe);let _e=setTimeout(()=>{we.disconnect(),se(null)},1e4),we=new MutationObserver(()=>{let me=re(ue);!me&&v===Te||(clearTimeout(_e),we.disconnect(),se(me))});we.observe(x,{childList:!0,subtree:!0})});(async()=>{for(let ue of C){let se=await fe(ue);if(!se||v!==Te)return;(!se.firstChild||se.firstChild.nodeName!=="TABLE")&&ge(se,m.sym(ue)),ue===C[C.length-1]&&typeof se.scrollIntoView=="function"&&se.scrollIntoView({block:"nearest"})}})().catch(ue=>le.warn("outline: could not open "+y.uri+" inside "+F+": "+ue))}this.GotoURIinit=function(x){let b=m.sym(x);this.GotoSubject(b)},this.GotoSubject=function(x,b,y,v,F,k,C){let O=ma(C)!=="accountMenu",Y=h();O&&(!k||k===Y)&&w(x);let re=k||Y;v&&(re.style.width="100%",S.emptyNode(re));let fe=y&&y.subject&&y.subject.uri?y.subject:x;function ue(){let xe=n.createElement("div");xe.classList.add("outline-subject-block");let _e=s.outlineObjectDiv(fe,void 0,xe);return xe.appendChild(_e),re.appendChild(xe),xe}let se=v?ue():re;if(v&&pe(fe),b?ge(se,fe,{pane:y,solo:v,folderView:fa(C),headerOnlyInViewerPod:!O||!!(y&&y.subject&&y.subject.uri)}):v||ue(),v&&n&&n.defaultView&&n.defaultView.history){let xe=C&&typeof C=="object"&&C.preserveUrl===!0,_e=n.defaultView.history.state||{},we=document.location.href!==x.uri,me=Xi(_e,{pane:y?{name:y.name,subject:y.subject&&typeof y.subject.uri=="string"?y.subject.uri:void 0}:void 0,leavingPage:we,viaAccountMenu:!O});try{let Ce=new URL(n.location.href),ke=new URL(x.uri,n.location.href);xe?rt(n.defaultView.history,"replaceState",me,""):Ce.origin===ke.origin&&(we?rt(n.defaultView.history,"pushState",me,x.uri,x.uri):JSON.stringify(_e)!==JSON.stringify(me)&&rt(n.defaultView.history,"replaceState",me,x.uri,x.uri))}catch(Ce){le.error("Failed to update navigation history: "+S.stackString(Ce))}}return v&&pa(n),x};let Me=Wi(n);function He(x){let b;if(x.termType==="Literal"){if(b=n.createElement("span"),b.classList.add("objectValue","objectValue--literal"),b.textContent=x.value,x.datatype&&x.datatype.uri){let y=o.xsd("").uri;x.datatype.uri.slice(0,y.length)===y&&b.classList.add("objectValue--"+x.datatype.uri.slice(y.length))}}else if(x.termType==="NamedNode"||x.termType==="BlankNode")if(b=n.createElement("span"),b.classList.add("objectValue","objectValue--resource"),b.setAttribute("about",x.toNT()),s.appendAccessIcons(m,b,x),x.termType==="NamedNode")if(x.uri.slice(0,4)==="tel:"){let y=x.uri.slice(4),v=n.createElement("a");b.appendChild(n.createTextNode(y)),v.setAttribute("href",x.uri),v.appendChild(S.AJARImage(Z.src.icon_telephone,"phone","phone "+y,n)),b.appendChild(v),v.firstChild.setAttribute("class","phoneIcon"),v.firstChild.classList.add("objectValueLinkIcon")}else{b.appendChild(n.createTextNode(S.label(x)));let y=ee.linkIcon(n,x);y.firstChild&&y.firstChild.classList.add("objectValueLinkIcon"),b.appendChild(y),ee.makeDraggable(b,x)}else b.appendChild(n.createTextNode(S.label(x)));else if(x.termType==="Collection"){b=n.createElement("div"),b.setAttribute("about",x.toNT());for(let y=0;y<x.elements.length;y++){let v=x.elements[y],F=b.appendChild(n.createElement("div")),k=F.appendChild(n.createElement("div"));k.classList.add("obj"),k.setAttribute("notSelectable","false"),k.setAttribute("about",x.toNT()),k.innerHTML=y+1+")",F.appendChild(s.outlineObjectDiv(v))}}else x.termType==="Graph"?(b=je("dataContentPane").statementsAsTables(x.statements,e),b.setAttribute("class","nestedFormula")):(le.error("Object "+x+" has unknown term type: "+x.termType),b=n.createTextNode("[unknownTermType:"+x.termType+"]"));return le.debug("contents: "+b.innerHTML),b}return this.createTabURI=function(){n.getElementById("UserURI").value=n.URL+"?uri="+n.getElementById("UserURI").value},this.UserInput.setSelected=U,this.UserInput.deselectAll=z,this.UserInput.views=Me,this.outlineExpand=ge,this}function Ar(e,n){let t=0,r=()=>{t===0&&(t=window.requestAnimationFrame(()=>{t=0,e()}))};if(e(),typeof ResizeObserver>"u")return window.addEventListener("resize",r),()=>{t!==0&&window.cancelAnimationFrame(t),window.removeEventListener("resize",r)};let i=new ResizeObserver(r);for(let a of n)a&&i.observe(a);return()=>{t!==0&&window.cancelAnimationFrame(t),i.disconnect()}}function Bt(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let n=e.value;return typeof n=="string"?n:""}return""}function Hs(e){let n=(e||"").trim();return n?/^mailto:/i.test(n)?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n):!1}function Ws(e){let n=(e||"").trim();return n?/^tel:/i.test(n)?!0:/^[+()\-\s\d]{5,}$/.test(n):!1}function Gs(e,n,t,r){if(!n)return;let i=r==="email"?Hs:Ws,a=Bt(n);if(i(a))return n;if(n.termType!=="NamedNode")return;let s=e.statementsMatching(n,o.vcard("value"),null,t),d=e.statementsMatching(n,o.vcard("value"));for(let m of[...s,...d])if(i(Bt(m.object)))return m.object}function js(e,n,t){if(n.termType!=="NamedNode")return;let r=e.statementsMatching(n,o.rdf("type"),null,t);if(r.length>0)return r[0].object;let i=e.statementsMatching(n,o.rdf("type"));if(i.length>0)return i[0].object}function xa(e){let n=Bt(e).trim().toLowerCase();return n?n==="work"||n.endsWith("#work")||n.endsWith("/work"):!1}function Js(e,n,t){if(n.termType!=="NamedNode")return!1;let r=e.statementsMatching(n,o.rdf("type"),null,t),i=e.statementsMatching(n,o.rdf("type"));return[...r,...i].some(a=>xa(a.object))}function ya(e,n,t,r,i,a){let s=e.statementsMatching(n,t,null,r),d=e.statementsMatching(n,t),m=[...s,...d].map(u=>u.object),f=[],c=new Set;for(let u of m){let p=Bt(u);if(p&&c.has(p))continue;p&&c.add(p);let g=Gs(e,u,r,i);if(!g)continue;let h=js(e,u,r)||a;f.push({entryNode:u,type:h,valueNode:g})}let l=f.find(u=>Js(e,u.entryNode,r)||xa(u.type));if(l)return l;if(f.length>0)return f[0]}function Ks(e,n){let t=e.anyJS(n,o.solid("preferredSubjectPronoun"))||"";if(t){let r=e.anyJS(n,o.solid("preferredObjectPronoun"));r&&(t+="/"+r)}return t||""}function Ys(e,n){return e&&n?`${n}, ${e}`:e||n||null}function va(e){return(e||"").replace(/\s+/g,"").toLowerCase()}function Xs(e){let n=e.find(t=>t.isCurrentRole||va(t.roleType)==="currentrole");return n||e.find(t=>{let r=va(t.roleType);return r!=="currentrole"&&r!=="futurerole"})}var Pr=(e,n)=>{let t=S.label(e),r=n.anyValue(e,o.vcard("nickname"))||n.anyValue(e,o.foaf("nick"))||void 0,i=n.anyValue(e,o.vcard("bday"))||void 0,a=ee.findImage(e),d=Xs(Ti(e,n))?.title||void 0,m=e.doc(),f=ya(n,e,o.vcard("hasTelephone"),m,"phone",o.vcard("Voice")),c=ya(n,e,o.vcard("hasEmail"),m,"email",o.vcard("Internet")),l=n.any(e,o.vcard("hasAddress"))||void 0,u=l&&n.any(l,o.rdf("type"))||void 0,p=l&&n.anyValue(l,o.vcard("street-address"))||void 0,g=l&&n.anyValue(l,o.vcard("locality"))||void 0,h=l&&n.anyValue(l,o.vcard("region"))||void 0,w=l&&n.anyValue(l,o.vcard("postal-code"))||void 0,_=l&&n.anyValue(l,o.vcard("country-name"))||void 0,I=l?{entryNode:l,type:u,streetAddress:p,locality:g,region:h,postalCode:w,countryName:_}:void 0,E=l||null,P=E!=null?n.anyValue(E,o.vcard("country-name")):null,A=E!=null?n.anyValue(E,o.vcard("locality")):null,D=Ks(n,e);return{name:t,nickname:r,imageSrc:a,dateOfBirth:i,jobTitle:d,primaryPhone:f,primaryEmail:c,primaryAddress:I,location:Ys(P,A),pronouns:D,entryNode:e}};var Qs=()=>Promise.all([import("./part-MLTRCJ6K.js"),import("./part-FMX6EUZU.js")]),Ca="profile-heading-saved",Zs=768,_a='[data-profile-section="heading"]',ka='[data-profile-section="social"]';async function el(e,n){let t=e.each(n,o.rdfs("seeAlso"),null,n.doc());t.length>0&&await e.fetcher.load(t)}function Ea(e,n){return e.environment?.layout==="mobile"?"mobile":typeof window>"u"?"desktop":(n?.getBoundingClientRect().width||window.innerWidth)<=Zs?"mobile":"desktop"}function nl(e,n,t){let r=()=>{let a=Ea(n,e);a!==e.dataset.layout&&t(a)},i=e.querySelector(".profile-grid");return Ar(r,[e,i])}function tl(e){let n=()=>{let i=e.querySelector(".profile-grid"),a=e.querySelector(_a),s=e.querySelector(ka);if(!i||!a||!s)return;if(!(e.dataset.layout!=="mobile"&&getComputedStyle(i).display==="grid")){s.style.removeProperty("min-height");return}let m=`${Math.ceil(a.getBoundingClientRect().height)}px`;s.style.minHeight!==m&&(s.style.minHeight=m)},t=e.querySelector(_a),r=e.querySelector(ka);return Ar(n,[e,t,r])}function Ia(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("profile-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var rl={global:!1,icon:R.iconBase+"noun_15059.svg",name:"profile",label:function(e,n){let t=n.session.store.findTypeURIs(e);return t[o.vcard("Individual").uri]||t[o.foaf("Person").uri]||t[o.schema("Person").uri]?"Profile":null},render:(e,n)=>{let t=n.dom.createElement("div"),r=n.session.store,i=null,a=null,s=Ea(n,t);Ia(t,n),t.dataset.layout=s;let d=!1,m=async()=>{if(d)return;let[{ProfileView:p},{hydrateQRCodes:g}]=await Qs();if(d)return;Ia(t,n),t.dataset.layout=s;let h=await p(e,n,s,async()=>{d||(t.dispatchEvent(new CustomEvent("profile-pane-saved",{bubbles:!0,composed:!0,detail:{subjectUri:e.value,profileData:Pr(e,r)}})),await m())});d||(wn(h,t),i?.(),i=tl(t),a?.(),a=nl(t,n,w=>{s=w,m()}),await g(t))},f=t.isConnected,c=()=>{d||(d=!0,n.dom.removeEventListener(Ca,u),l.disconnect(),i?.(),a?.())},l=new MutationObserver(p=>{f||=t.isConnected||p.some(g=>Array.from(g.addedNodes).some(h=>h===t||h.contains(t))),f&&!t.isConnected&&c()});l.observe(n.dom,{childList:!0,subtree:!0});let u=p=>{if(t.isConnected)f=!0;else if(f){c();return}else return;p.detail?.subjectUri===e.value&&m().catch(h=>{console.error("Failed to refresh the profile after a heading update.",h)})};return n.dom.addEventListener(Ca,u),el(r,e).then(async()=>{await m()}),t}},Sr=rl;function Ur(e,n,t,r){return t.statementsMatching(null,r.acl("origin"),e).reduce((s,d)=>s.concat(t.statementsMatching(n,r.acl("trustedApp"),d.subject)).concat(t.statementsMatching(d.subject)),[])}function Ta(e,n,t,r,i){let a=new fi(`bn_${n}`);return[Se(r,i.acl("trustedApp"),a,r.doc()),Se(a,i.acl("origin"),e,r.doc()),...t.map(s=>be(s)).map(s=>Se(a,i.acl("mode"),s,r.doc()))]}function Aa(){return Math.random().toString(36).substr(2,5)}function Nr(e){let n=ot("table",{class:"results"}),t=mn("tr",[an("th","Application URL"),an("th","Access modes"),an("th","Actions")]);return n.appendChild(t),q.each(e,o.acl("trustedApp"),void 0,void 0).flatMap(i=>q.each(i,o.acl("origin"),void 0,void 0).map(a=>({appModes:q.each(i,o.acl("mode"),void 0,void 0),origin:a}))).sort((i,a)=>i.origin.value<a.origin.value?-1:1).forEach(({appModes:i,origin:a})=>n.appendChild(Pa(e,a,i,r))),n.appendChild(Pa(e,null,[o.acl("Read")],r)),n;function r(){n.parentElement.replaceChild(Nr(e),n)}}function Pa(e,n,t,r){let i={origin:n,appModes:t,formElements:{modes:[],origin:void 0}};return mn("tr",[mn("td",[mn("form",[ot("input",{class:"textinput",placeholder:"Write new URL here",value:n?n.value:""},{},m=>{i.formElements.origin=m})],{},{submit:a})]),mn("td",[mn("form",il(i),{},{submit:a})]),mn("td",[mn("form",n?[an("button","Update",{class:"controlButton",style:"background: LightGreen;"}),an("button","Delete",{class:"controlButton",style:"background: LightCoral;"},{click:s})]:[an("button","Add",{class:"controlButton",style:"background: LightGreen;"})],{},{submit:a})])]);function a(m){m.preventDefault();let f;try{f=be(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to trust")}let c=i.formElements.modes.filter(p=>p.checked).map(p=>p.value),l=Ur(i.origin||f,e,q,o),u=Ta(f,Aa(),c,e,o);if(!q.updater)throw new Error("Store has no updater");q.updater.update(l,u,d)}function s(m){m.preventDefault();let f;try{f=be(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to remove trust from")}let c=Ur(f,e,q,o);if(!q.updater)throw new Error("Store has no updater");q.updater.update(c,[],d)}function d(m,f,c){if(f)return r()}}function ot(e,n={},t={},r=null){let i=document.createElement(e);return r&&r(i),Object.keys(n).forEach(a=>{i.setAttribute(a,n[a])}),Object.keys(t).forEach(a=>{i.addEventListener(a,t[a])}),i}function mn(e,n,t={},r={},i=null){let a=ot(e,t,r,i);return n.forEach(s=>a.appendChild(s)),a}function an(e,n,t={},r={},i=null){let a=ot(e,t,r,i);return a.textContent=n,a}function il({appModes:e,formElements:n}){return["Read","Write","Append","Control"].map(t=>{let r=e.some(i=>i.value===o.acl(t).value);return mn("label",[ot("input",{type:"checkbox",...r?{checked:""}:{},value:o.acl(t).uri},{},i=>n.modes.push(i)),an("span",t)])})}var al="#418d99",ol={global:!0,icon:`${R.iconBase}noun_15177.svg`,name:"trustedApplications",label:()=>null,render:(e,n)=>{let t=n.dom,r=t.createElement("div");r.classList.add("trusted-applications-pane"),r.setAttribute("style","border: 0.3em solid "+al+"; border-radius: 0.5em; padding: 0.7em; margin-top:0.7em;");let i=r.appendChild(t.createElement("table")),a=i.appendChild(t.createElement("tr")),d=i.appendChild(t.createElement("tr")).appendChild(t.createElement("div"));return d.setAttribute("style","padding: 0.7em;"),sl(t,a,d).catch(m=>d.appendChild(ee.errorMessageBlock(t,m))),r}};async function sl(e,n,t){let i=(await Re.ensureLoadedProfile({dom:e,div:n,statusArea:t,me:null})).me,a=i.doc();if(!q.updater)throw new Error("Store has no updater");let s=q.updater.editable(a.uri,q);if(n.appendChild(an("h3","Manage your trusted applications")),!s){n.appendChild(ee.errorMessageBlock(e,`Your profile ${i.doc().uri} is not editable, so we cannot do much here.`));return}n.appendChild(an("p","Here you can manage the applications you trust."));let d=Nr(i);n.appendChild(d),n.appendChild(an("h4","Notes")),n.appendChild(mn("ol",[n.appendChild(an("li","Trusted applications will get access to all resources that you have access to.")),n.appendChild(an("li","You can limit which modes they have by default.")),n.appendChild(an("li","They will not gain more access than you have."))])),n.appendChild(an("p","Application URLs must be valid URL. Examples are http://localhost:3000, https://trusted.app, and https://sub.trusted.app."))}var Sa=ol;async function Ua(e,n,t){let r=await kn(e),i=Ki(n,r),a=document.createElement("div");return a.classList.add("container"),a.appendChild(dl(r.uri,i)),a.appendChild(ll(i)),a}function ll(e){let n=document.createElement("section"),t=document.createElement("h2");t.innerText="Data",n.appendChild(t);let r=document.createElement("div");r.classList.add("list-group"),n.appendChild(r);let i=document.createElement("a");return i.classList.add("list-group-item"),i.href=window.document.location.href+"public/",i.innerText=`View ${e}'s files`,r.appendChild(i),n}function dl(e,n){let t=document.createElement("a");t.href=e,t.innerText=n;let r=document.createElement("span");r.innerText="'s Profile";let i=document.createElement("h1");return i.appendChild(t),i.appendChild(r),i}var Du={icon:R.iconBase+"noun_547570.svg",name:"dashboard",label:e=>e.termType==="NamedNode"&&e.uri===e.site().uri?"Dashboard":null,render:(e,n)=>{console.log("Dashboard Pane Render");let r=n.dom.createElement("div"),i=()=>{r.innerHTML="",cl(r,ve.currentUser()||null,n,e)};return rn.events.on("login",()=>{i()}),rn.events.on("sessionRestore",()=>{i()}),i(),r}};function cl(e,n,t,r){let i=new URL(window.location.href).searchParams.get("uri");if(i&&n)return Na(e,t);if(!i&&r)return La(e,r);if(!i&&!r&&n)return Na(e,t);let a=r||n||q.sym(window.location.href);return La(e,a)}function Na(e,n){n.getOutliner(n.dom).getDashboard().then(r=>e.appendChild(r))}function La(e,n){let t=document.createElement("div");e.appendChild(t);let r=t.attachShadow({mode:"open"}),i=document.createElement("link");i.rel="stylesheet",i.href="/common/css/bootstrap.min.css",r.appendChild(i),Ua(n,q,q.fetcher).then(a=>r.appendChild(a))}var ul=await(await fetch(he(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix schema: <http:/schema.org/>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix : <#>.

solid:User a rdfs:Class;
  rdfs:label "user"@en, "utilisateur"@fr;
  rdfs:comment """Any person who might use a Solid-based system""";
  rdfs:subClassOf foaf:Person, schema:Person, vcard:Individual.

# Since these options are opt-in, it is a bit strange to have new users opt in
# That they are new users - also we do not use this class for anything specific
# yet
# solid:NewUser a rdfs:Class;
#  rdfs:label "new user"@en;
#  rdfs:comment """A person who might use a Solid-based system who has a low
#  level of familiarity with technical details.""";
#  rdfs:subClassOf solid:User.

solid:PowerUser a rdfs:Class;
  rdfs:label "power user"@en;
  rdfs:comment """A person who might use a Solid-based system
  who is prepared to be given a more complex interface in order
  to be provided with more pwerful features.""";
  rdfs:subClassOf solid:User.

  solid:Developer a rdfs:Class;
    rdfs:label "Developer";
    rdfs:comment """Any person who might use a Solid-based system,
    who has software development skills.""";
    rdfs:subClassOf solid:User.
`,"text/turtle"))).text(),pl=await(await fetch(he(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix : <#>.

:this <http://purl.org/dc/elements/1.1/title> "Basic preferences" ;
      a ui:Form ;
      ui:part :categorizeUser, :privateComment, :personalInformationHeading;
      ui:parts ( :personalInformationHeading :privateComment :categorizeUser ).

:personalInformationHeading a ui:Heading;
      ui:contents "Personal information".

:privateComment a ui:Comment;
      ui:contents "This information is private.".

:categorizeUser a ui:Classifier;
      ui:label "Level of user"; ui:property rdf:type ; ui:category solid:User.
`,"text/turtle"))).text(),fl={icon:R.iconBase+"noun_Sliders_341315_000000.svg",name:"basicPreferences",label:e=>null,render:(e,n)=>{let t=n.dom,r=n.session.store;function i(l,u){l||a.appendChild(ee.errorMessageBlock(t,u,"#fee"))}let a=t.createElement("div"),s=ml(a,t);function d(l,u){l=l.doc(),r.holds(void 0,void 0,void 0,l)||en(u,r,l.uri,"text/turtle",null)}let m=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597#this");d(m,pl);let f=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597-ONT");d(f,ul);async function c(){let l=await Re.ensureLoadedPreferences({dom:t,div:a});if(!l.preferencesFile){console.log("Not doing private class preferences as no access to preferences file. "+l.preferencesFileError);return}let u=ee.appendForm(t,s,{},l.me,m,l.preferencesFile,i);u.style.borderStyle="none";let p=n.session.paneRegistry.byName("trustedApplications");p&&a.appendChild(p.render(null,n)),hl(a,r,l.me,t)}return c(),a}};function ml(e,n){let t=Ma(e,n,"User types"),r=t.appendChild(n.createElement("p"));r.innerText="Here you can self-assign user types to help the data browser know which views you would like to access.";let i=t.appendChild(n.createElement("a"));return i.href="https://github.com/solidos/userguide/#role",i.innerText="Read more",t.appendChild(n.createElement("div"))}var Fa=fl;function hl(e,n,t,r){let i=Ma(e,r,"Delete account"),s=n.each(t,o.space("storage"),null,t.doc()).map(m=>m.value),d=i.appendChild(r.createElement("ul"));s.forEach(async m=>{let f=await gl(m,r);f&&d.appendChild(r.createElement("li")).appendChild(f)})}async function gl(e,n){let t=n.createElement("a");t.textContent=`Delete your account at ${e}`;let r=await bl(e);return typeof r!="string"?null:(t.href=r,t)}async function bl(e){let n=new URL(e),t=new URL(e);t.pathname=n.pathname="/account/delete";let r=t.hostname.split(".");return t.hostname=r.slice(1).join("."),(await fetch(t.href,{method:"HEAD"})).ok?t.href:(await fetch(n.href,{method:"HEAD"})).ok?n.href:null}function Ma(e,n,t){let r=e.appendChild(n.createElement("div"));r.style.border="0.3em solid #418d99",r.style.borderRadius="0.5em",r.style.padding="0.7em",r.style.marginTop="0.7em";let i=r.appendChild(n.createElement("h3"));return i.innerText=t,r}var Ra=new Set;function Ke(e){let n=String(e);if(Ra.has(n)||typeof document>"u")return;Ra.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}Ke(he(`.trackerBoard {
  width: fit-content;
  border-collapse: collapse;
  margin: var(--spacing-md, 1em);
}

.trackerBoardTable {
  width: fit-content;
  border-collapse: collapse;
}

.trackerBoardHeader {
  margin: var(--spacing-sm);
  padding: var(--spacing-sm) 1em;
  font-weight: bold;
  font-size: 120%;
}

.trackerBoardColumn {
  border: 0.01em solid white;
  padding: 0.1em;
  /* display: flex; flex-direction: column; align-items: center; */
} 

.trackerBoardHeaderCell {
  margin: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: bold;
  font-size: 120%;
}

.trackerBoardCard {
  width: 100%;
  border: 0.01em solid grey;
  border-radius: var(--border-radius-base);
  padding: var(--spacing-sm);
  margin: var(--spacing-sm) 0;
}

.trackerBoardCardTable {
  margin: var(--spacing-md);
} 
`,"text/css"));function Da(e,n,t,r){let i=e.createElement("div");i.classList.add("trackerBoard");let a=i.appendChild(e.createElement("table"));a.classList.add("trackerBoardTable");let s=a.appendChild(e.createElement("tr"));s.classList.add("trackerBoardHeader");let d=a.appendChild(e.createElement("tr"));d.classList.add("trackerBoardMainRow"),n.forEach(c=>{let l=s.appendChild(e.createElement("th"));l.classList.add("trackerBoardHeaderCell"),l.textContent=S.label(c,!0),l.subject=c;let u=d.appendChild(e.createElement("td"));u.classList.add("trackerBoardColumn"),u.subject=c;function p(g){g.forEach(function(h){let w=q.sym(h);r.columnDropHandler(w,c)})}r.columnDropHandler&&ee.makeDropTarget(u,p)});function m(c,l){let u=e.createElement("div");u.classList.add("trackerBoardCard");let p=u.appendChild(e.createElement("table"));p.classList.add("trackerBoardCardTable");let h=q.each(c,o.rdf("type")).map(_=>q.any(_,o.ui("backgroundColor"))).filter(_=>_);p.appendChild(ee.personTR(e,null,c)),p.subject=c;let w=h[0]||q.any(l,o.ui("backgroundColor"));return u.style.backgroundColor=w?w.value:"#fff",u}function f(c,l,u,p){let g=c.map(h=>[q.any(h,l)||u,h]);return g.sort(),p&&g.reverse(),g.map(h=>h[1])}return i.refresh=function(){let c=new Bn(new Date),l=t||r.renderItem||m;function u(p){let g=l(p);return ee.makeDraggable(g,p),g.subject=p,g}for(let p=d.firstChild;p;p=p.nextSibling){let g=p.subject,h=q.each(null,o.rdf("type"),g),w=r.sortBy||o.dct("created");r.filter&&(h=h.filter(r.filter));let _=f(h,w,c,!0);S.syncTableToArrayReOrdered(p,_,u)}},i.refresh(),i}Ke(he(`/* CSS for the accessible modal dialogs created by localUtils.js */

/* backdrop / focus trap container */
.focus-trap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.focus-trap.hidden {
  display: none;
}

/* inner dialog box */
.focus-trap .modal {
  background: var(--color-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-base);
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* Preserve newlines in string messages (many call sites use "\\n\\n") */
#issue-modal #modal-desc {
  white-space: pre-wrap;
}

/* button container: center buttons horizontally (uses id in markup) */
#issue-modal #modal-buttons {
  margin-top: var(--spacing-md);
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
}

/* buttons themselves use the shared btn-primary rules */
#issue-modal .modal button {
  min-height: var(--min-touch-target);
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-base);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--animation-duration) ease;
}

#issue-modal .modal button.btn-primary {
  background: var(--color-primary);
  color: var(--color-background);
}

#issue-modal .modal button.btn-primary:hover {
  background: color-mix(in srgb, var(--color-primary) 90%, black);
  box-shadow: 0 2px 4px rgba(124, 77, 255, 0.2);
}

#issue-modal .modal button.btn-primary:active {
  box-shadow: 0 1px 2px rgba(124, 77, 255, 0.2);
}

#issue-modal .modal button:disabled {
  opacity: var(--opacity-disabled, 0.6);
  cursor: not-allowed;
  transform: none;
}
`,"text/css"));var Ye=null,Ot=null;function wl(e){return Ye&&e.body.contains(Ye)||(Ye=null,Ye=e.createElement("div"),Ye.id="issue-modal",Ye.className="focus-trap hidden",Ye.setAttribute("role","presentation"),Ye.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
      <h2 id="modal-title"></h2>
      <div id="modal-desc"></div>
      <div id="modal-buttons"></div>
    </div>
  `,e.body.appendChild(Ye),Ye.addEventListener("keydown",n=>{if(n.key==="Escape"){n.stopPropagation();let t=Ye.querySelector("button[data-cancel]");t?t.click():Oa()}else if(n.key==="Tab"){let t=Array.from(Ye.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(i=>!i.hasAttribute("disabled"));if(t.length===0)return;let r=t.indexOf(e.activeElement);n.shiftKey?r===0&&(t[t.length-1].focus(),n.preventDefault()):r===t.length-1&&(t[0].focus(),n.preventDefault())}})),Ye}function Ba(e,n){Array.from(n.body.children).filter(r=>r!==Ye).forEach(r=>{e?r.setAttribute("aria-hidden","true"):r.removeAttribute("aria-hidden")})}function yl({title:e,message:n,buttons:t,dom:r}){let i=wl(r);Ot=r.activeElement,Ba(!0,r),i.classList.remove("hidden"),i.querySelector("#modal-title").textContent=e||"";let a=i.querySelector("#modal-desc");typeof n=="string"?a.textContent=n:(a.innerHTML="",a.appendChild(n));let s=i.querySelector("#modal-buttons");return s.innerHTML="",new Promise(d=>{t.forEach(f=>{let c=r.createElement("button");c.setAttribute("type","button"),c.textContent=f.label,f.primary&&c.classList.add("btn-primary"),f.cancel&&c.setAttribute("data-cancel","true"),c.addEventListener("click",()=>{Oa(),d(f.value)}),s.appendChild(c)});let m=s.querySelector("button");m&&m.focus()})}function Oa(){if(Ye){let e=Ye.ownerDocument;Ye.classList.add("hidden"),Ba(!1,e),Ot&&Ot.focus&&Ot.focus()}}function on(e,n="Information",t){return yl({title:n,message:e,buttons:[{label:"OK",value:!0,primary:!0}],dom:t})}Ke(he(`.trackerNewIssueForm {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 0.75em);
  padding: var(--spacing-md, 1em);
}

.trackerNewIssueTitleField {
  margin: var(--spacing-sm, 0.75em);
  font-size: 100%;
  padding: var(--spacing-sm, 0.75em);
  width: 100%;
}
`,"text/css"));function qt(e,n,t,r,i,a){let s=e.createElement("div");s.classList.add("trackerNewIssueForm");let d=n.any(t,o.wf("stateStore"));a=a||function(){};let m=function(){return""+new Date().getTime()},f=function(){_.setAttribute("class","pendingedit"),_.disabled=!0;let I=[],E=function(X){let j=new Bn(new Date),te=""+new Date().getTime(),de=j.value.slice(0,4),V=j.value.slice(5,7),L=j.value.slice(8,10);return X.replace("{N}",te).replace("{YYYY}",de).replace("{MM}",V).replace("{DD}",L)},P=n.anyValue(t,o.wf("issueURITemplate")),A=P?n.sym(E(ln.join(P,d.uri))):n.sym(d.uri+"#Iss"+m()),D=A.doc(),B=n.literal(_.value);I.push(new tn(A,o.wf("tracker"),t,d)),I.push(new tn(A,o.dc("title"),B,d)),I.push(new tn(A,o.dct("created"),new Date,d));let N=r?n.each(r,o.rdf("type"),null,r.doc()):n.each(t,o.wf("initialState"));for(let X of N)I.push(new tn(A,o.rdf("type"),X,d));r&&I.push(new tn(r,o.wf("dependent"),A,d)),P&&(I.push(new tn(A,o.wf("tracker"),t,D)),I.push(new tn(A,o.rdfs("seeAlso"),d,D)));let T=function(X,j,te){j?(s.parentNode.removeChild(s),i(A)):(_.classList.remove("pendingedit"),_.disabled=!1,_.focus(),on(`Could not save the new issue. Please try again.

Details: ${te||"No additional error details provided."}`,"Save issue failed",e))};n.updater.update([],I,T)},c=n.any(t,o.wf("issueClass")),l=S.label(c),u=function(){s.parentNode&&s.parentNode.removeChild(s),a()},p=s.appendChild(e.createElement("div"));p.classList.add("trackerNewIssueHeader");let g=p.appendChild(e.createElement("h2"));g.textContent="Add new "+(r?"sub ":"")+l;let h=p.appendChild(e.createElement("button"));h.classList.add("trackerNewIssueCloseButton"),h.setAttribute("type","button"),h.setAttribute("aria-label","Close new issue form"),h.textContent="\xD7",h.addEventListener("click",u,!1);let w=s.appendChild(e.createElement("p"));w.textContent="Title of new "+l+":";let _=e.createElement("input");return _.classList.add("trackerNewIssueTitleField"),_.setAttribute("type","text"),_.setAttribute("maxLength","2048"),_.select(),_.addEventListener("keyup",function(I){I.keyCode===13&&f()},!1),s.appendChild(_),_.focus(),s}function st(...e){console.log(...e)}function Gn(...e){console.warn(...e)}function Ne(...e){console.error(...e)}Ke(he(`/* section in mashlib css is display: block
so i have to override it here */
section.errorSection[hidden] {
  display: none;
}
`,"text/css"));function Lr(e,n,t){e.appendChild(ee.errorMessageBlock(n,t,"pink"))}function zt(e,n){let t=e.createElement("section");t.classList.add("errorSection"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.setAttribute("aria-label","Error messages"),t.hidden=!0,n.appendChild(t);function r(){t.innerHTML="",t.hidden=!0}function i(a){t.innerHTML="",t.hidden=!1,Lr(t,e,a)}return{errorSection:t,clearErrors:r,showError:i}}Ke(he(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
from Github while trying to fiddle with the layout and fix the 
issue not popping up */
.trackerBoardIssueCard {
  margin: var(--spacing-xs, 0.3em);
  max-width: 24em;
  padding: var(--spacing-xs, 0.5em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.4em);
}

.trackerBoardIssueCardTable {
  width: 100%;
}
.trackerBoardIssueCardTable td {
  padding: 0.1em 0.7em 0.1em 0.1em;
}
.trackerBoardIssueCardTable img {
  width: var(--icon-xs, 1.5em);
  height: var(--icon-xs, 1.5em);
  border-radius: 50%;
}

.trackerBoardIssueCardTable {
  width: 100%;
  border-collapse: collapse;
}

.trackerOverlayCloseButton {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: var(--spacing-sm, 0.7em);
  right: var(--spacing-sm, 0.7em);
  margin: 0;
}
.trackerOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.trackerOverlay.trackerOverlayVisible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}

.trackerIssue {
  position: relative;
  background: white;
  padding: var(--spacing-sm, 0.5em) var(--spacing-lg, 1.5em) var(--spacing-md, 1em) var(--spacing-lg, 1.5em);
  border: 0.7em solid transparent;
  border-radius: var(--border-radius-base, 0.5em);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.trackerIssueIconButton {
  width: var(--icon-sm, 1.5em);
  height: var(--icon-sm, 1.5em);
  border-radius: 50%;
}

.trackerIssueSpacer {
  height: var(--spacing-md, 1em);
  margin: var(--spacing-sm, 0.5em);
}

.trackerIssueForm {
  margin-top: var(--spacing-md, 1em);
  padding: var(--spacing-sm, 0.75em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
}

.trackerIssueSubIssuePanel {
  margin: var(--spacing-md, 1em);
  padding: var(--spacing-md, 1em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
}

.trackerIssueSubIssuePanelSupersList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.75em);
}

.trackerIssueSubIssuePanelSubsList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.75em);
  flex-direction:  row-reverse; /* Not sure if it should be row or column */
}

.trackerIssueSubIssuePanelNewSubButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
  padding: var(--spacing-sm, 0.75em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
  background-color: #f0f0f0;
  cursor: pointer;
  float: right;
}

.trackerIssueTrackerLink {
  float: right;
  margin: var(--spacing-xs, 0.5em) 4em;
  padding: var(--spacing-xs, 0.5em);
}

.trackerIssueMessage {
  color: grey;
}

.trackerIssueDeleteButton {
  color: white;
  border: none;
  padding: var(--spacing-xs, 0.5em);
  border-radius: var(--border-radius-base, 0.4em);
  cursor: pointer;
  float: right; /* this is the only one from the code */
}

.trackerIssueDeleted {
  background-color: #eee;
  color: orange;
}

/* below styles the remove task popup */
.trackerIssue > div[style*="position: relative"] {
  z-index: 2000;
}

.trackerIssue > div[style*="position: relative"] > div[style*="position: absolute"] {
  top: -1em !important;
  left: 50% !important;
  transform: translate(-55%, -3em);
  z-index: 2001;
}

.trackerIssueRefreshButton {
  clear: both;
  position: relative;
  z-index: 1;
}

.trackerIssueMessageArea {
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
  padding: var(--spacing-md, 1em);
}

.trackerIssueMessageAreaError {
  color: red;
  font-weight: bold;
}


`,"text/css"));var Ee=q,vl=!1,xl=R.iconBase+"noun_17020_gray-tick.svg",fp=R.iconBase+"noun_17020_sans-tick.svg",Cl=R.iconBase+"noun_17020.svg";function _l(e){return!!Ee.findTypeURIs(e)[o.wf("Open").uri]}function kl(e){return _l(e)?xl:Cl}function qa(e,n){let t=Ee.the(e,o.wf("tracker"),null,e.doc()),r=Ee.any(t,o.wf("issueClass"));n=n||r;let i=Ee.each(e,o.rdf("type")).filter(a=>Ee.holds(a,o.rdfs("subClassOf"),n));if(i.length!==1)throw new Error("Issue must have one type as state: "+i.length);return i[0]}function $t(e){let t=Ee.each(e,o.rdf("type")).map(r=>Ee.any(r,o.ui("backgroundColor"))).filter(r=>!!r);return t.length?t[0].value:null}function za(e,n){function t(){let l=$t(e)||"white";a.style.backgroundColor=l,c.style.backgroundColor=l}let r=n.dom,i=!$t(e),a=r.createElement("div");a.classList.add("trackerBoardIssueCard");let s=a.appendChild(r.createElement("table"));s.classList.add("trackerBoardIssueCardTable");let d={draggable:!1};s.appendChild(ee.personTR(r,null,e,d)),s.subject=e,a.firstChild.firstChild.firstChild.firstChild.setAttribute("src",R.iconBase+"noun_Danger_1259514.svg");let f=a.firstChild.firstChild.children[2];f.classList.add("trackerBoardIssueCardButtons");let c=ee.button(r,R.iconBase+"noun_253504.svg","edit",async l=>{Vt(e,n)});if(f.appendChild(c),i){let l=ee.deleteButtonWithCheck(r,f,"issue",async function(){try{await Ee.updater.update(Ee.connectedStatements(e))}catch(u){Ne("Unable to delete issue: "+u),on(`Unable to delete issue.

Details: ${u?.message||String(u)}`,"Delete failed",r);return}a.parentNode.removeChild(a),ee.refreshTree(n.paneDiv)});f.appendChild(l)}return a.refresh=t,t(),a}function Vt(e,n){function t(){r.innerHTML="",r.classList.remove("trackerOverlayVisible")}let r=n.overlay;r.classList.add("trackerOverlay"),r.innerHTML="";try{let i=Fr(e,n);r.appendChild(i);let a=i.appendChild(ee.button(n.dom,R.iconBase+"noun_1180156.svg","close",t));a.classList.add("trackerOverlayCloseButton"),delete a.style.backgroundColor,r.classList.add("trackerOverlayVisible")}catch(i){Ne("Failed to render issue: "+i),on(`Failed to render issue.

Details: ${i?.message||String(i)}`,"Render failed",n.dom)}}function Il(e,n){let t=e.createElement("div");return t.classList.add("trackerIssueSpacer"),t.style.backgroundColor=n,t}function Fr(e,n){let t=n.dom;function r(U,z,H){if(vl){if(!s(m,"trackLastModified"))return;let Q=z.statementsMatching(e,o.dct("modified")).concat(z.statementsMatching(e,o.wf("modifiedBy"))),ae=[Se(e,o.dct("modified"),new Date,H)];h&&ae.push(Se(e,o.wf("modifiedBy"),h,H)),z.updater.update(Q,ae,function(M,J,$){})}}function i(){return""+new Date().getTime()}function a(U,z){U||Ne(`Failed to save change:
`+z)}function s(U,z){let H=Ee.any(U,o.ui(z));return!!(H&&H.value)}function d(){let U=$t(e)||"#eee";l.style.borderColor=U}let m=Ee.the(e,o.wf("tracker"),null,e.doc());if(!m)throw new Error("No tracker");let f=Ee.any(m,o.wf("stateStore")),c=e.doc(),l=t.createElement("div");l.classList.add("trackerIssue");let u=t.createElement("div");u.classList.add("trackerIssueMessageSection");let{showError:p,clearErrors:g}=zt(t,u),h=ve.currentUser(),w=$t(e)||"white";d(),ve.checkUser();let _=l.appendChild(ee.button(t,kl(e)));_.classList.add("trackerIssueIconButton"),ee.makeDraggable(_,e);let I=Ee.any(m,o.wf("issueClass"));if(!I)return Ne("Tracker "+S.label(m)+" has no issueClass"),p("Tracker "+S.label(m)+" has no issueClass. Please open Settings and make sure there is a state class with allowed values (for example Open, In Progress, Closed), then save and refresh."),l.appendChild(u),l;let E=ee.makeSelectForCategory(t,Ee,e,I,f,function(U,z){U?(g(),r(c,Ee,c),ee.refreshTree(l)):(Gn(`Failed to change state:
`+z),p(`Failed to change state.

Details: ${z||"No additional error details provided."}`))});l.appendChild(E);let P=Ee.each(m,o.wf("issueCategory"));for(let U of P)l.appendChild(ee.makeSelectForCategory(t,Ee,e,U,f,function(z,H){z?(g(),r(c,Ee,c),ee.refreshTree(l)):(Gn(`Failed to change category:
`+H),p(`Failed to change category.

Details: ${H||"No additional error details provided."}`))}));let A=t.createElement("a");A.classList.add("trackerIssueTrackerLink"),A.setAttribute("href",m.uri),l.appendChild(A).textContent=S.label(m),A.addEventListener("click",ee.openHrefInOutlineMode,!0);let D=`
    @prefix : <http://www.w3.org/ns/ui#> .
    @prefix core: <http://www.w3.org/2005/01/wf/flow#>.
    @prefix dc: <http://purl.org/dc/elements/1.1/>.
    @prefix wf: <http://www.w3.org/2005/01/wf/flow#> .

    core:coreIsueForm     a :Form;
         <http://purl.org/dc/elements/1.1/title> "Core issue data";
         :parts  (
        core:titleField
        core:descriptionField ) .

    core:descriptionField     a :MultiLineTextField;
         :label "Description";
         :property wf:description;
         :size "40" .

    core:titleField     a :SingleLineTextField;
         :label "Title";
         :maxLength "128";
         :property dc:title; # @@ Should move to dct or schema
         :size "40" .

    wf:Task     :creationForm core:coreIsueForm .
`,B=o.wf("coreIsueForm");en(D,Ee,B.doc().uri,"text/turtle");let N=ee.appendForm(t,null,{},e,B,f,a);N.classList.add("trackerIssueForm"),l.appendChild(N),N.style.backgroundColor=w;let T=Ee.statementsMatching(e,o.wf("assignee"));if(T.length>1){on("Weird, was assigned to more than one person. Fixing ..","Assignment Error",t);let U=T.slice(1);Ee.updater.update(U,[],function(z,H,Q){H?(g(),on("Now fixed.","Assignment Fixed",t)):(Ne(`Failed to fix multiple assignees:
${Q}`),p(`Failed to fix multiple assignees.

Details: ${Q||"No additional error details provided."}`))})}async function X(){let U=Ee.each(e,o.wf("assigneeGroup"));await Ee.fetcher.load(U);let z=U.map(ae=>Ee.each(ae,o.vcard("member"),null,ae.doc())).flat(),H=Ee.any(null,o.doap("bug-database"),m);H&&await Ee.fetcher.load(H);let Q=H?Ee.each(H,o.doap("developer")):[];return z.concat(Q)}function j(U){let z={link:!1};return ee.personTR(t,o.wf("dependent"),U,z)}X().then(U=>{if(U.length){U.forEach(function(H){Ee.fetcher.lookUpThing(H)});let z={nullLabel:"(unassigned)"};l.appendChild(ee.makeSelectForOptions(t,Ee,e,o.wf("assignee"),U,z,c,function(H,Q){H?(g(),r(c,Ee,c)):(Ne(`Failed to change assignee:
`+Q),p(`Failed to change assignee.

Details: ${Q||"No additional error details provided."}`))}))}});function te(U,z){z=z||[];let H=Ee.any(null,o.wf("dependent"),U,U.doc());return H?te(H,[H].concat(z)):z}if(s(m,"allowSubIssues")){let U=l.appendChild(t.createElement("div"));U.classList.add("trackerIssueSubIssuePanel"),U.appendChild(t.createElement("h4")).textContent="Super Issues";let z=U.appendChild(t.createElement("div"));z.classList.add("trackerIssueSubIssuePanelSupersList"),z.refresh=function(){let M=te(e);S.syncTableToArrayReOrdered(z,M,j)},z.refresh(),U.appendChild(t.createElement("h4")).textContent="Sub Issues";let H=U.appendChild(t.createElement("div"));H.classList.add("trackerIssueSubIssuePanelSubsList"),H.refresh=function(){let M=Ee.each(e,o.wf("dependent"),null,e.doc());S.syncTableToArrayReOrdered(H,M,j)},H.refresh();let Q=t.createElement("button");Q.classList.add("trackerIssueSubIssuePanelNewSubButton"),Q.setAttribute("type","button"),U.appendChild(Q);let ae=S.label(I);Q.innerHTML="New sub "+ae,Q.addEventListener("click",function(M){U.insertBefore(qt(t,Ee,m,e,H.refresh),Q.nextSibling)},!1)}l.appendChild(t.createElement("br"));let de=Ee.any(m,o.wf("extrasEntryForm"));de&&ee.appendForm(t,l,{},e,de,f,a);let V=Ee.anyValue(m,o.wf("issueURITemplate")),L;V?L=e.doc():(L=Ee.any(m,o.wf("messageStore")),L||(L=Ee.any(m,o.wf("stateStore"))),Ee.sym(L.uri+"#Chat"+i())),Ee.fetcher.nowOrWhenFetched(L,function(U,z,H){if(U){u.appendChild(Il(t,w));let Q=It(t,Ee,e,L);Q.classList.add("trackerIssueMessageArea"),u.appendChild(Q)}else{let Q=t.createElement("p");Q.classList.add("trackerIssueMessageAreaError"),Q.textContent=z,u.appendChild(Q)}});let K=l.appendChild(t.createElement("div"));K.classList.add("trackerIssueAttachmentHint"),K.innerHTML=`<h4>Attachments</h4>
    <p>Drag files, emails,
    web pages onto the paper clip, or click the file upload button.</p>`;let ne=e.uri.endsWith("/index.ttl#this")?e.uri.slice(0,14)+"Files/":e.dir().uri+"Files/"+e.uri.split("#")[1]+"/";ee.attachmentList(t,e,l,{doc:f,promptIcon:R.iconBase+"noun_25830.svg",uploadFolder:Ee.sym(ne),predicate:o.wf("attachment")}),ee.deleteButtonWithCheck(t,l,"issue",async function(){try{await Ee.updater.update(Ee.connectedStatements(e))}catch(U){Ne("Unable to delete issue: "+U),p(`Unable to delete issue.

Details: ${U?.message||String(U)}`);return}on("Your issue has been deleted","Issue Deleted",t),l.classList.add("trackerIssueDeleted")}).classList.add("trackerIssueDeleteButton");let W=t.createElement("button");return W.classList.add("trackerIssueRefreshButton"),W.textContent="refresh messages",W.addEventListener("click",async function(U){try{await Ee.fetcher.load(L,{force:!0,clearPreviousData:!0})}catch(z){alert(z);return}ee.refreshTree(l)},!1),l.appendChild(W),l.appendChild(u),l}Ke(he(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));var El=o,$a=q.updater;function Va(e,n){function t(){return""+new Date().getTime()}let r=Re.newAppInstance(n.dom,{noun:"tracker"},function(i,a){function s(_){if(_.elements!==void 0)return _.elements.map(s);if(_.uri===void 0)return _;let I=_.uri;return I===c.uri?l:(I.slice(0,p.length)===p&&(I=a+I.slice(p.length)),f.sym(I))}let d="issuetracker.w3.org",m=o.space,f=n.session.store;if(!a&&(a=f.any(i,m("uriPrefix")).value,a.slice(-1)!=="/"&&(Ne(`${d}: No / at end of uriPrefix ${a}`),a=a+"/"),a+=d+"/"+t()+"/",!confirm("Make new tracker at "+a+"?")))return;let c=f.any(e,El.wf("stateStore")),l=f.sym(a+"store.ttl"),u=e.doc(),p=u.uri.slice(0,u.uri.lastIndexOf("/")+1),g=s(u),h=s(e),w=f.statementsMatching(void 0,void 0,void 0,u);for(let _=0;_<w.length;_++){let I=w[_];f.add(s(I.subject),s(I.predicate),s(I.object),g)}f.add(h,o.space("inspiration"),e,c),f.add(h,o.space("inspiration"),e,g),$a.put(g,f.statementsMatching(void 0,void 0,void 0,g),"text/turtle",function(_,I,E){I?$a.put(l,[],"text/turtle",function(P,A,D){A?st(`Ok The tracker created OK at: ${h.uri}
Make a note of it, bookmark it.`):(Ne(`Failed to set up new store at: ${l.uri} : ${D}`),on(`Failed to set up new store at: ${l.uri}

Details: ${D||"No additional error details provided."}`,"Create tracker failed",n.dom))}):(Ne(`Failed to save new tracker at: ${g.uri} : ${E}`),on(`Failed to save new tracker at: ${g.uri}

Details: ${E||"No additional error details provided."}`,"Save tracker failed",n.dom))})});return r.classList.add("trackerNewTrackerButton"),r}function Tl(e){let n=e.replaceAll(`
`," ");if(!n.includes(","))return n;let t='"'+n.replaceAll('"','""')+'"',r=t.slice(1,-1).replaceAll('""',"");if(r.includes('"'))throw Ne(`quoteString failed to quote properly, value: ${e}, quoted: ${t}, check: ${r}`),new Error("CSV inconsistency");return t}function Al(e,n){function t(g,h){let w;if(h.predicate)return w=e.any(g,h.predicate),w?w.value:"--";if(h.category){let _=e.each(g,o.rdf("type"));for(let I of _)e.holds(I,o.rdfs("subClassOf"),h.category)&&(w=I);if(!w)return"?"+S.label(h.category)}else throw Ne("column has no predicate or category",h),new Error("Column has no predicate or category.");return S.label(w)}function r(g){return s.map(h=>t(g,h)).map(Tl).join(",")+`
`}let i=e.any(n,o.wf("stateStore")),a=e.each(null,o.wf("tracker"),n,i),s=[{label:"Name",predicate:o.dc("title")}],m={label:"State",category:e.any(n,o.wf("issueClass"))};s.push(m);let c=e.each(n,o.wf("issueCategory"));for(let g of c){let h={label:S.label(g),category:g};s.push(h)}let l=e.any(n,o.wf("extrasEntryForm"),null,null);if(l){let h=e.any(l,o.ui("parts"),null,l.doc()).elements;for(let w of h){let _=e.any(w,o.ui("property"));if(_){let E={label:S.label(_),predicate:_};s.push(E)}}}s.push({label:"Description",predicate:o.wf("description")});let u=s.map(g=>g.label).join(",")+`
`,p=a.map(r).join("");return u+p}function Ha(e,n){let t=e.createElement("div"),r=!1;t.addEventListener("copy",a=>{if(!r)return;r=!1;let s;try{s=Al(q,n)}catch(d){on(`Could not generate CSV. Please check tracker data and try again.

Details: ${d?.message||String(d)}`,"CSV export error",e),a.preventDefault();return}a.preventDefault(),a.clipboardData.setData("text/plain",s),a.clipboardData.setData("text/csv",s),on("CSV data copied to clipboard.","CSV export",e)});let i=ee.button(e,R.iconBase+"noun_Document_998605.svg","Copy as CSV",async a=>{r=!0,e.execCommand("copy")||(r=!1,on("Could not copy CSV to clipboard. Please try again.","CSV export error",e))});return t.appendChild(i),t}var Pl=await(await fetch(he(`@prefix : <http://www.w3.org/ns/ui#> .
@prefix core: <http://www.w3.org/2005/01/wf/flow#>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix ui: <http://www.w3.org/ns/ui#> .
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix wf: <http://www.w3.org/2005/01/wf/flow#> .

  core:TrackerSettingsForm     a :Form;
     <http://purl.org/dc/elements/1.1/title> "Tracker Configuration Form";
     :parts  (

      [   a ui:Heading;  ui:contents "About the tracker"@en ]

      [ a :SingleLineTextField;
                 :label "Title of issue tracker";
                 :maxLength "128";
                 :property dct:title;
                 :size "40" ]

      [ a :MultiLineTextField; :label "Description"; :property wf:description; :size "40" ]

      [ a ui:Choice;  ui:canMintNew true; ui:use core:SuperClassForm; ui:follow true;
          ui:property  wf:issueClass;
          ui:label "What states can an issue be in?";
          ui:from rdfs:Class;
          ui:default wf:Task ]

      [   a ui:Comment;  ui:contents """You can optionally sort issues using (one or more) classification systems"""@en ]


      [ a ui:Multiple;  ui:canMintNew true;  ui:part core:ClassificationForm;
          ui:property  wf:issueCategory; ui:label "Sort them into which category?"; ui:from rdfs:Class ]

      [ a :BooleanField;
              :label "Allow issues to have sub-issues";
              :property wf:allowSubIssues;
              :default false ]

      [ a ui:Heading;  ui:contents "Table view:"@en ]

      [ a ui:Comment;  ui:contents "Any extra properties to include?"@en ]


    [a ui:Multiple; ui:property wf:propertyList; ui:ordered true; ui:part core:PropertyForm; ui:follow true ]

      [ a ui:Heading;  ui:contents "Details of issues"@en ]

      # Use a people picker ideally
      [ a ui:Choice;  ui:canMintNew true; ui:use core:GroupForm;
          ui:property wf:assigneeGroup;
          ui:label "Assign issues to people from which group?";
          ui:from vcard:Group;
          ]

       # Optionally one form for extras

       [ a ui:Choice;  ui:canMintNew true; ui:use ui:FormForm;
           ui:property wf:extrasEntryForm;
           ui:label "Other things to save about each issue?";
           ui:from ui:Form;
           ]


    ) .

    # Form for the superclass of all states
    # @@ also We must require each state class to be stated to be a subclass of EITHER Open OR Closed.
    core:SuperClassForm a ui:Form; dct:title "Form for managing states";
      ui:parts (
        [ a :SingleLineTextField;
                   :label "Name of set of states";
                   :defualt "States";
                   :maxLength "128";
                   :property rdfs:label;
                   :size "40" ]
          [a ui:Multiple; ui:property owl:disjointUnionOf; ui:ordered true; ui:part core:StateForm ]
  #      [ a ui:Multiple; ui:property rdfs:subClassOf; ui:reverse true; ui:part core:StateForm ]
    ) .

    core:StateForm a ui:Form; dct:title "Form for one state";
      ui:parts (
                [ a :SingleLineTextField;
                         :label "Name of state";
                         :maxLength "128";
                         :property rdfs:label;
                         :size "40" ]
                 [ a :ColorField; :label "Background color"; :property :backgroundColor ]
                  # @@ add icon for state

                 ).


    # Form for Classification

    core:ClassificationForm a ui:Form; dct:title "Form for a classification by categpry";
      ui:parts (
        [ a :SingleLineTextField;
                   :label "Name of classification:";
                   :maxLength "128";
                   :property rdfs:label;
                   :size "40" ]
         [a ui:Multiple; ui:property owl:disjointUnionOf; ui:ordered true; ui:part core:CategoryForm ]
    ) .

    core:CategoryForm a ui:Form; dct:title "Form for a category";
      ui:parts (
                [ a :SingleLineTextField;
                         :label "Name of category";
                         :maxLength "128";
                         :property rdfs:label;
                         :size "40" ]
                 [ a :ColorField; :label "Background color"; :property :backgroundColor ]

                 ).

   core:PropertyForm a ui:Form; ui:parts ( # Internded for raed only only marking the
     [ a :SingleLineTextField;
                :label "(property name)";
                :maxLength "128";
                :property rdfs:label;
                :size "40" ]
     ).


    # Other ontology stuff we are otherwis missing

    # we can usde ui:label to give a decent abel when the ontology uses a really bad one
    rdfs:subClassOf ui:label "super class" .
    # We can also add a specific nice label for the inverse
    [] owl:inverse rdfs:subClassOf; rdfs:label "sub class" .
    owl:disjointUnionOf ui:label "option" .

    # Form for new group


    core:GroupForm a ui:Form; dct:title "Form for new contacts group"; ui:parts (
      [ a :SingleLineTextField;
                 :label "Name of new group";
                 :maxLength "128";
                 :property vcard:fn;
                 :size "60" ]

      [ a ui:Heading;  ui:contents "Members of group"@en ]

      [ a ui:Multiple; ui:label "contacts in group"; ui:property vcard:member; ui:part core:PersonForm ]

      ).

  core:PersonForm a ui:Form; dct:title "New contact details form"; ui:parts (

  [ a :NamedNodeURIField; ui:label "Solid ID"; ui:property owl:sameAs; ui:size 60 ]

  [ a :SingleLineTextField;
             :label "Name of contact";
             :maxLength "128";
             :property vcard:fn;
             :size "60" ]

  [ a ui:PhoneField; :label "Phone"; :property vcard:phone; ] # @@ check property]

  [ a :EmailField; :label "Email"; :property vcard:email ] # @@ check property

 ).

# classificattion owl:disjointUnionOf ()
        wf:Tracker     :creationForm core:SettingsForm .
`,"text/turtle"))).text();Ke(he(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
from Github while trying to fiddle with the layout and fix the 
issue not popping up */
.trackerBoardIssueCard {
  margin: var(--spacing-xs, 0.3em);
  max-width: 24em;
  padding: var(--spacing-xs, 0.5em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.4em);
}

.trackerBoardIssueCardTable {
  width: 100%;
}
.trackerBoardIssueCardTable td {
  padding: 0.1em 0.7em 0.1em 0.1em;
}
.trackerBoardIssueCardTable img {
  width: var(--icon-xs, 1.5em);
  height: var(--icon-xs, 1.5em);
  border-radius: 50%;
}

.trackerBoardIssueCardTable {
  width: 100%;
  border-collapse: collapse;
}

.trackerOverlayCloseButton {
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: var(--spacing-sm, 0.7em);
  right: var(--spacing-sm, 0.7em);
  margin: 0;
}
.trackerOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
}

.trackerOverlay.trackerOverlayVisible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}

.trackerIssue {
  position: relative;
  background: white;
  padding: var(--spacing-sm, 0.5em) var(--spacing-lg, 1.5em) var(--spacing-md, 1em) var(--spacing-lg, 1.5em);
  border: 0.7em solid transparent;
  border-radius: var(--border-radius-base, 0.5em);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.trackerIssueIconButton {
  width: var(--icon-sm, 1.5em);
  height: var(--icon-sm, 1.5em);
  border-radius: 50%;
}

.trackerIssueSpacer {
  height: var(--spacing-md, 1em);
  margin: var(--spacing-sm, 0.5em);
}

.trackerIssueForm {
  margin-top: var(--spacing-md, 1em);
  padding: var(--spacing-sm, 0.75em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
}

.trackerIssueSubIssuePanel {
  margin: var(--spacing-md, 1em);
  padding: var(--spacing-md, 1em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
}

.trackerIssueSubIssuePanelSupersList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.75em);
}

.trackerIssueSubIssuePanelSubsList {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 0.75em);
  flex-direction:  row-reverse; /* Not sure if it should be row or column */
}

.trackerIssueSubIssuePanelNewSubButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
  padding: var(--spacing-sm, 0.75em);
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
  background-color: #f0f0f0;
  cursor: pointer;
  float: right;
}

.trackerIssueTrackerLink {
  float: right;
  margin: var(--spacing-xs, 0.5em) 4em;
  padding: var(--spacing-xs, 0.5em);
}

.trackerIssueMessage {
  color: grey;
}

.trackerIssueDeleteButton {
  color: white;
  border: none;
  padding: var(--spacing-xs, 0.5em);
  border-radius: var(--border-radius-base, 0.4em);
  cursor: pointer;
  float: right; /* this is the only one from the code */
}

.trackerIssueDeleted {
  background-color: #eee;
  color: orange;
}

/* below styles the remove task popup */
.trackerIssue > div[style*="position: relative"] {
  z-index: 2000;
}

.trackerIssue > div[style*="position: relative"] > div[style*="position: absolute"] {
  top: -1em !important;
  left: 50% !important;
  transform: translate(-55%, -3em);
  z-index: 2001;
}

.trackerIssueRefreshButton {
  clear: both;
  position: relative;
  z-index: 1;
}

.trackerIssueMessageArea {
  border: 0.05em solid grey;
  border-radius: var(--border-radius-base, 0.5em);
  padding: var(--spacing-md, 1em);
}

.trackerIssueMessageAreaError {
  color: red;
  font-weight: bold;
}


`,"text/css"));Ke(he(`.trackerBoard {
  width: fit-content;
  border-collapse: collapse;
  margin: var(--spacing-md, 1em);
}

.trackerBoardTable {
  width: fit-content;
  border-collapse: collapse;
}

.trackerBoardHeader {
  margin: var(--spacing-sm);
  padding: var(--spacing-sm) 1em;
  font-weight: bold;
  font-size: 120%;
}

.trackerBoardColumn {
  border: 0.01em solid white;
  padding: 0.1em;
  /* display: flex; flex-direction: column; align-items: center; */
} 

.trackerBoardHeaderCell {
  margin: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: bold;
  font-size: 120%;
}

.trackerBoardCard {
  width: 100%;
  border: 0.01em solid grey;
  border-radius: var(--border-radius-base);
  padding: var(--spacing-sm);
  margin: var(--spacing-sm) 0;
}

.trackerBoardCardTable {
  margin: var(--spacing-md);
} 
`,"text/css"));Ke(he(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));Ke(he(`.trackerNewIssueForm {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 0.75em);
  padding: var(--spacing-md, 1em);
}

.trackerNewIssueTitleField {
  margin: var(--spacing-sm, 0.75em);
  font-size: 100%;
  padding: var(--spacing-sm, 0.75em);
  width: 100%;
}
`,"text/css"));Ke(he("","text/css"));Ke(he(`/* CSS for the issue pane component was influenced by generative AI
using the GPT-5.3-Codex model in GitHub. The prompts used are below:  
- can you style my table and make it look nice?
- can you handle the visibility in exposeOverlay with css? */ 

.issuePane,
.issuePane.paneDiv {
  overflow-x: auto;
}

.trackerIssuePaneNewIssueButtonContainer {
  display: flex;
  flex-direction: row;
}

.trackerIssuePaneNewIssueButton {
  display: inline-flex;
  background-color: #F0F0F0;
  color: #505050;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid grey;
  border-radius: var(--border-radius-base, 0.5em);
  cursor: pointer;
  gap: var(--spacing-sm, 0.75em);
  white-space: nowrap;
  text-align: left;
  padding: var(--spacing-sm, 0.75em);
  font-size: 100%;
  margin: var(--spacing-sm, 0.75em);
}

.trackerIssuePaneNewIssueButton > .trackerIssuePaneNewIssueButtonImage {
  order: 1;
  display: inline-block;
  width: var(--icon-xxs, 1em);
  height: var(--icon-xxs, 1em);
  margin: 0.2em;
  vertical-align: middle;
}

.trackerIssuePaneNewIssueButton > .trackerIssuePaneNewIssueButtonText {
  order: 2;
  display: inline-block;
  margin-left: 0;
  vertical-align: middle;
}

.trackerIssuePaneLoginButton {
  margin: var(--spacing-sm) var(--spacing-md);
}

.errorSection {
  margin: var(--spacing-sm, 0.75em);
  padding: var(--spacing-sm, 0.75em);
  border-top: 1px solid #d0d0d0;
}

.errorSectionContent {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 0.75em);
}
`,"text/css"));var Sl=await(await fetch(he(`#   Issue tracking - Workflow application definition ontology
#
# Finite state automaton ontology
#
# See requirements for tracking tools http://www.w3.org/2005/01/06-tool-req.html
#
@keywords a, is, of.

@prefix :   <http://www.w3.org/2005/01/wf/flow#>.
@prefix wf: <http://www.w3.org/2005/01/wf/flow#>.

@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix s: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

@prefix doc: <http://www.w3.org/2000/10/swap/pim/doc#> .
@prefix log: <http://www.w3.org/2000/10/swap/log#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix contact: <http://www.w3.org/2000/10/swap/pim/contact#> .
@prefix doap: <http://usefulinc.com/ns/doap#>.
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix ui: <http://www.w3.org/ns/ui#>.

<> dc:title "Issue Tracking Ontology";

    dct:creator <http://www.w3.org/People/Berners-Lee/card#i>;

    s:comment """This ontology defines a very general class (Task)
    which can used for any kind of bug tracking, issue tracking,
    to-do-list management, action items, goal dependency, and so on.
    It captures the state of a task as a subclass, so that
    subsumption can be used.
    It captures a discussion thread about a task.
    It captures subtasks structure if necessary.
    A "Tracker" defines actual set of states, categories, etc.,
    which  a task can be in. The data about the tracker
    guides the software managing the task.

    There is some workflow modeling finite state machine
    terms which are optional for  more complex definition
    of the transitions allowed.
    """.

Task a s:Class;
    s:label "task"@en; owl:disjointUnionOf (Open Closed);
    s:comment """Something to be done in a wide sense,
    an agenda item at a meeting is one example, but any
    issue, task, action item, goal, product, deliverable, milestone, can such a thing.
    The requirement for this framework was that it would allow
    one to customize ontologies for things such as agenda items,
    action items, working group issues with a spec, w3c Last Call issues,
    software bugs and administrative requests.
    In \u03C0-calculus, a process.
    Make your type of issue a subclass of Task.
    """.

Open a s:Class; s:subClassOf Task;
    s:label "open"@en, "ouvert"@fr;
  ui:backgroundColor "#d6f5d6"; # green like github for some reason
    s:comment """A task which needs attention. The very crude states of Open and Closed all
        interoperability between different systems if the states for a given
        application are made subclasses of either Open or Closed. This allows
        tasks from different systems to be mixed and treated together with
        limited but valuable functionality.
    """.

Closed a s:Class; s:subClassOf Task;
    s:label "closed"@en, "ferm\xE9"@fr;
  ui:backgroundColor "#f5d6d6"; # pink
    s:comment """A task which does not need attention. It may be closed because
        has been abandoned or completed, for example.
    """.


  ActionItem a s:Class;
    s:subClassOf Task;
    s:label "action item"@en; owl:disjointUnionOf (Open Closed);
    s:comment """An obligation taken on by a person, typically at a meeting.
    """.


description a rdf:Property;
        s:label "description";
        s:comment """The description, definition,
        or abstract. Information explaining what this is.
        Not arbitrary comment about anything, only about the subject.
        (Use this property for anything. There is no domain restriction.).""".

dependent a rdf:Property;
        s:label "how";  owl:inverseOf [ s:label "why"];
        s:domain Task; s:range Task;
        s:comment """Another task upon which this depends, in the sense that
        this task cannot be completed without that task being done.
        You can't use this for dependencies on anything other than other tasks.
        (Note the US spelling of the URI. In the UK, a dependant is a something
        which is dependent on somehing else.)""".

assignee    a       rdf:Property;
        s:label     "assigned to"; owl:inverseOf [s:label "assignment"];
#       s:domain    Task;
        s:range     foaf:Agent;
        s:comment   """The person or group to whom this has been assigned.""".

# use dct:modified
#modified        a               rdf:Property;
#                s:label         "last changed".

modifiedBy      a               rdf:Property;
                s:range         foaf:Agent;
                s:label         "changed by".

# use dct:created instead
#created         a               rdf:Property;
#                s:range         xsd:dateTime;
#
# Use foaf:maker instead
#creator         a               rdf:Property;
#                s:range         foaf:Agent;
#                s:label         "changed by".

subscriber      a               rdf:Property;
                s:label         "subscriber";
                s:range         foaf:Agent.


################## Products
#
#
# History:  The Tracker system included a cocept of a product,
# such that an action  could be associated with *either* an issue *or* a product.
# Noah Mendelsohn for the TAG needed to be able make
# and to give products: Goals, scuuess criteria,
#  deliverables with dates, schedules, TAG members assigned, related issues.
#


Product         a s:Class; s:subClassOf Task;
                s:label "product";
                s:comment """A product is a task which monitors something
                which must be produced.""".

deliverable     a rdf:Property; s:subPropertyOf dependent;
                s:range Product;
                s:label "deliverable"@en;
                s:comment """Something which must be delivered to accomplish this""".

goalDescription a rdf:Property, owl:DatatypeProperty;
                s:domain Task; s:range xsd:string;
                s:label "goals";
                s:comment """A textual description of the goals of this product, etc.""".

successCriteria a rdf:Property, owl:DatatypeProperty;
                s:domain Task; s:range xsd:string;
                s:label "success criteria";
                s:comment """A textual description of the successs critera.
                How when we know this is done?""".

dateDue         a rdf:Property, owl:DatatypeProperty;
                s:domain Task; s:range xsd:date;
                s:label "due"@en;
                s:comment """The date this task is due.
                """.

##################  Attachments

attachment      a rdf:Property;
                s:label "attachment";
                s:comment """Something related is attached for information.""".

screenShot      a rdf:Property; s:subPropertyOf attachment;
                s:label "screen shot"@en;
                s:comment """An image taken by capturing the state of a
                 computer screen, for example to demonstrate a problem""".

testData        a rdf:Property; s:subPropertyOf attachment;
                s:label "test data"@en;
                s:comment """A file which can be used as inpiut to a test
                or to demonstrate a problem. """.


terminalOutput      a rdf:Property; s:subPropertyOf attachment;
                s:label "terminal output"@en;
                s:comment """A file showing user interaction from a
                text terminal or console etc. """.


message         a rdf:Property; s:subPropertyOf attachment;
                s:label "message"@en;
                s:comment """A message about this. Attached for information.""".


Message         a s:Class; s:label "message"@en.
recipent a rdf:Property; s:label "to"; s:domain Message; s:range foaf:Agent.
sender a rdf:Property; s:label "from"; s:domain Message; s:range foaf:Agent.

############################# A Tracker connects and manages issues

tracker         a rdf:Property;
                s:label "tracker";
                owl:inverseOf [ s:label "issue"];
                s:domain Task;
                s:range Tracker.

Tracker         a s:Class;
                s:label "tracker";
                s:comment """A set of issues and
                the constraints on how they evolve.
                To use this ontology, craete a new tracker.
                Copy an existing one or make up your own.""".

issueClass      a rdf:Property;
                s:label "all issues must be in";
                s:domain Tracker;
                s:range s:Class, State;
                s:comment """The class of issues which are allowed in this tracker.
                This is essemtial to the operation of the tracker,
                as it defines which states an issue can be in.
                (The issueClass must be a disjointUnionOf the state classes)""".

issueCategory   a rdf:Property;
                s:label "issue category";
                s:domain Tracker;
                s:range s:Class;
                s:comment """Issues may be categorized according to the
                subclasses of this class""".

stateStore      a rdf:Property;
                s:label "state store";
                s:domain Tracker;
                s:range doc:Document;
                s:comment """A read-write document.
                The state of the issues is modified here.
                When you set up a trcaker, thgis must be set to point
                to a writeble data resource on the web.""".

transactionStore
                a rdf:Property;
                s:label "transaction store";
                s:domain Tracker;
                s:range doc:Document;
                s:comment """An appendable document. Transactions and messsages
                    can be written into here""".

asigneeClass
                a rdf:Property;
                s:label "assignees must be";
                s:domain Tracker;
                s:range s:Class;  # Subclass of foaf:Agent
                s:comment """When an issue is assigned, the assignee must be from this class""".

initialState
                a rdf:Property;
                s:label "initial state"@en;
                s:label "\xE9tat initial"@fr;
                s:domain Tracker;
                s:range State;
                s:comment """The initial state for a new issue""".

# Use this to link a project to a tracker
doap:bug-database owl:inverseOf [ s:label "project"@en ].




############################################################
#
#           Finite state machines
#
Change      a s:Class;
        s:label "change";
        s:comment """The universal class of things which
change the state of a task.
Included now: Creation, Transition. (Maybe in the future
more \u03C0-calculus constructions such as splitting & merging tasks,
and import/export of obligations to a foreign opaque system.)
""".

Transition  a s:Class; s:subClassOf Change;
        s:label     "transition";
        s:comment """A transition is a change of state of
a task. Typical properties include date and/or source
(a document causing the transition), and a final state.""".

Creation    a s:Class; s:subClassOf Change;
        s:label     "creation";
        s:comment """A creation is a change from existence
to non-existence
a task. Typical properties include date and/or source
(a document causing the transition), and a final state.""".


date    s:range DateTime.

final   a       rdf:Property;
        s:label     "to";
        s:domain    Transition;
        s:range State.

task        a       rdf:Property;
        s:range     Task;
        s:label     "task".

requires    a rdf:Property;
        s:label "requires";
        s:domain    Transition;
        s:range     rdf:List; # Of properties for validation
        s:comment   """To be a valid transition,
        a necessary (but not necessarily sufficuent) condition
        is that there be recorded these properties for the record""".

affects     a rdf:Property;
        s:label "affects";
        s:domain    doc:Work;
        s:range     Task.


# { ?x a Transition; task ?t; source ?doc } => { ?doc affects ?t }.


creates     a rdf:Property;
        s:label "creates";
        s:domain    doc:Work;
        s:range     Task.


allowedTransitions a rdf:Property;
        s:domain    State;
        s:range     rdf:List; # @@@ of Action
        s:label     "allowed transitions";
        s:comment   """The state machine is defined
    by these lists of transition allowed for each issue.
    (An interesting option in the Web is to make an allowed transition
    to a state in soemone else's ontology, which in turn allows
    transitions into many ontologies.  So a finite state maxchine
    may become very large. In practice this means that a task handed
    off to another organization may be processed on all kinds of ways.)""".

#   { ?x a TerminalState} => { ?x allowedTransitions () }.

final       a rdf:Property;
        s:label     "to";
        s:range State.

issue       a       rdf:Property;
        s:label     "issue";
        s:comment
        """A transition changes the state of the given issue.""".

source  a       rdf:Property;
        s:label     "source";
        s:comment   """The source of a transition is
                the document by which it happened""";
        s:range     doc:Work.
TerminalState a s:Class;
    s:subClassOf State;
    s:label "terminal state";
    s:comment """A state from which there are no transitions.""".

NonTerminalState a s:Class;
    s:label "non-terminal state";
    owl:disjointWith TerminalState;
    s:comment """A state from which there are transitions.""".

######################################################

#ends
`,"text/turtle"))).text(),Ul=await(await fetch(he(`#  Ontology for user interface hints and forms
#
#  See also related: the Fresnel language
#
@prefix contact: <http://www.w3.org/2000/10/swap/pim/contact#>.
@prefix dc:  <http://purl.org/dc/elements/1.1/>.
@prefix doc: <http://www.w3.org/2000/10/swap/pim/doc#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix r: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix s: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix tt: <http://dig.csail.mit.edu/2010/issues/track#>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix : <http://www.w3.org/ns/ui#>.
@prefix wf: <http://www.w3.org/2005/01/wf/flow#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

@keywords is, of, a.

<> dc:title "An ontology for User Interface description, Hints and Forms.";
    dc:description """The User Interface ontology allows the definition
    of forms for processing RDF model data, and include a bootstrap form for
    editing forms. It allows user interface hints such as background colors,
    can be associated with objects and classes.
    """;
    dc:created 2010-08-07;
    dc:license <https://creativecommons.org/publicdomain/zero/1.0/>;
    dc:modified """$Date: 2020/03/22 16:53:21 $""";
    dc:author <https://www.w3.org/People/Berners-Lee/card#i>.

style a r:Property, owl:DatatypeProperty;
    s:label "style";
        prompt "CSS style";
    s:comment """Must be a valid CSS style string such as one could put in
        an HTML style attribute.  Depending on the user interface system, this can
        by given to individuals, classes or properties. It is up to a user interface
        which wants to draw on them to pick how it uses styles from which parts
        of the data it has.  For example, the style of a class may be picked
        to distinguish information about things in that class.""".

backgroundColor a r:Property, owl:DatatypeProperty;
    s:label "background color"@en;
        s:range ui:Color;
    s:comment """Must be a valid CSS color string such as one could put in
        an HTML style attribute.  This should be in the #xxxxxx form,
        (with 6 digits of hex)  so that it
        can work with Graphviz.""".

backgroundImage a r:Property, owl:DatatypeProperty;
    s:label "background image"@en;
    s:comment """URI or base64 representation of an image""".

color a r:Property, owl:DatatypeProperty;
    s:label "color"@en;
    s:range ui:Color;
    s:comment """Must be a valid CSS color string such as one could put in
        an HTML style attribute.  This should be in the #xxxxxx form,
        (with 6 digits of hex)  so that it
        can work with Graphviz.""".



sortPriority a r:Property, owl:DatatypeProperty;
        s:label "sort priority";
        s:range xsd:integer;
        s:comment """When individuals or classes must be sorted, then
        if they are given different values of sortPriority a user agent can
        use this as a hint to how to present information.""".

sortBy a r:Property;
        s:label "sort by";
        s:domain s:Class;
        s:range r:Property;
        s:comment """A property which typically is used to sort
        members of a given class.""".

seqeunce a r:Property;
    s:label "sequence number";
    s:range xsd:integer;
    s:comment """The sequence in which this item is arranged with repect to other parts.""".

initialProperties a r:Property;
        s:label "initial properties";
        s:domain s:Class;
        s:range r:List; # List of r:Property
        s:comment """A really simple way of enabling user interfaces to
            create new information about a class of things is to make a define of properties
            to be specified when a information about a new item
            ("New item" here means an item which the system
            does not have prvious information about yet,
            not an items which has just been created,
            like new friend as opposed to new baby)""";
            prompt "Properties to be specified for new ones".

tableProperties a r:Property;
        s:domain s:Class;
        s:label "table properties";
        s:range r:List; # List of r:Property
        s:comment """This  is a crude way of specifying a table-based
            view for objects of this class.""";
            prompt "Properties to be given in a default table view".

prompt  a r:Property;
        s:label "user prompt";
        s:comment """A string for the UI to use if the user needs a longer
        prompts than just a field name, the rdfs:label. """;
        ui:prompt "A longer prompt for a user inputting this property".


#  A Taxonomy of Field types

ui:Form owl:disjointUnionOf ( ui:ValueField  ui:Group ui:Choice ui:Classifier ui:Options ui:Multiple ui:Heading ui:Comment);
    s:comment """A form can be any type of single field, or typically a Group of several fields,
    including interspersed headings and comments.  """.
ui:Single owl:disjointUnionOf ( ui:ValueField  ui:Group ui:Choice ui:Classifier ui:Options ui:Heading ui:Comment).
ui:ValueField owl:disjointUnionOf ( ui:TextField ui:NumericField ui:ColorField ui:DateField ui:DateTimeField ui:PhoneField ui:EmailField).
ui:NumericField owl:disjointUnionOf (ui:BooleanField ui:TriStateField ui:IntegerField ui:DecimalField ui:FloatField).
# ui:Multiple owl:disjointUnionOf ( ui:ZeroOrMore ui:OneOrMore ).
ui:TextField owl:disjointUnionOf (ui:SingleLineTextField ui:MultiLineTextField).

ui:Form a s:Class; is s:subClassOf of ui:ValueField, ui:Group, ui:Choice,  ui:Heading, ui:Comment, ui:Classifier, ui:Options, ui:Multiple.
ui:Single a s:Class; is s:subClassOf of ui:ValueField, ui:Group, ui:Choice, ui:Heading, ui:Comment, ui:Classifier, ui:Options.
ui:ValueField a s:Class; is s:subClassOf of  ui:TextField, ui:NumericField, ui:ColorField, ui:DateField, ui:DateTimeField, ui:PhoneField, ui:EmailField.
ui:NumericField a s:Class; is s:subClassOf of ui:BooleanField, ui:TriStateField, ui:IntegerField, ui:DecimalField, ui:FloatField.
ui:TextField a s:Class; is s:subClassOf of ui:SingleLineTextField, ui:MultiLineTextField.

ui:Classifier a s:Class; s:label "classifier";
    s:comment """A classifier allows the user to select the type of an object.
    The possible types must be subclasses of some overall class, the "category".
    (Ideally, the superclass is also set up as the disjoint union of the subclasses,
    if they are disjoint.)

    The form normally stores the resulting classes using an rdf:type triple,
    but a different predicate can be used if required, so the classifier field
    needs is 'property' defined too.

    If the subclass selected itself is has subclasses defined, the user can
    recursively select from them in turn, as many levels as needed.""".

ui:property a r:Property; s:domain ui:Form; s:range r:Property;
    s:label "property to be stored"@en;
    s:comment """Many fields prompt for information about a given property of the subject.
    When field is filled in, this gives which property is written into the data.""".

ui:category  a r:Property; s:domain ui:Classifier; s:range s:Class;
    s:label "overall superclass"@en;
    s:comment """The superclass subclasses of which will be selected.""".

ui:dependingOn a r:Property; s:domain ui:Options; s:range r:Property;
    s:label "depending on"@en;
    s:comment """Many fields prompt for information about a given property of the subject""".

ui:for a r:Property; s:label "for"@en; s:comment "The value for which this case is selected.".
ui:use a r:Property; s:range ui:Form.

ui:part a r:Property; s:label "part"@en ; s:domain ui:Form; s:range ui:Form. # Used for Multiple field - the subform for each item
ui:parts a r:Property; s:label "parts"@en ; s:domain ui:Form; s:range r:Collection. # (of Forms) The ordered set of fields in a group
ui:ordered e r:Property; s:label "ordered"; s:range xsd:Boolean . # Could be useful for all kinds of things in future so not restricted to Multiple

ui:from a r:Property; s:domain ui:Choice; s:range r:Class;
    s:label "from"; ui:prompt "from what class".

ui:size a r:Property; s:domain ui:ValueField; s:range xsd:integer;
    s:label "size of field";
    ui:prompt "size of field in characters".

ui:maxLength a r:Property; s:domain ui:TextField; s:range xsd:integer;
    s:label "max length of value".

ui:minValue a r:Property; s:domain ui:ValueField; s:label "min".  # @@ range?
ui:maxValue a r:Property; s:domain ui:ValueField; s:label "max".

 ui:creationForm a r:Property; s:domain s:Class; s:range ui:Form;
    s:label "creation form";
    s:comment """A form which may be used to collect information about a
    hitherto locally undocumented instance instance of this class.""".

 ui:annotationForm a r:Property; s:domain s:Class; s:range ui:Form;
    s:label "annotation form";
    s:comment """A form which may be used to add more infromation to an
instance of this class which we know something about.  Anything from
adding just add one more fact, to adding a whole lot of information about a specific
facet of the thing.
""".


#############################################
#
# Form for editing Forms
#

FormForm a ui:Form;
    dc:title "Form for editing Forms";
    is ui:creationForm of Form;
    a ui:Group; ui:parts (FF1 FF2 FF3 FieldList) .

    FF1 ui:sequence 1; a ui:Heading;  ui:contents "Edit Form"@en .
    FF2 ui:sequence 2; a ui:SingleLineTextField; ui:property dc:title; ui:size 60 .
    FF3 ui:sequence 3; a ui:Comment;  ui:contents
        """To add a field to the form, press the plus at the bottom,
        and then select what sort of field you want."""@en; ui:style "background-color: #ffe;" .

    FieldList  ui:sequence 10; a ui:Multiple; ui:ordered true; ui:property ui:parts; ui:part FieldForm .

FieldForm a ui:Group;
    dc:title "Form for selecting a type of field";
    ui:parts (

        [ ui:sequence 1; a ui:Classifier; ui:property r:type; ui:category ui:Form]

        [ a ui:Options; ui:sequence 2; ui:dependingOn r:type;

            ui:case [ ui:for ui:TextField; ui:use [a ui:Group; ui:parts (
                [ a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]  # @@@ Needs inference on current web
                [ a ui:IntegerField; ui:property ui:size; ui:label "field size"; ui:min 1; ui:max 4096]
                [ a ui:IntegerField; ui:property ui:maxLength; ui:label "Max. length of string"; ui:min 1]
            )]];

            ui:case [ ui:for ui:IntegerField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]
                [ ui:sequence 2; a ui:IntegerField; ui:property ui:min; ui:label "minimum value"]
                [ ui:sequence 3; a ui:IntegerField; ui:property ui:max; ui:label "maximum value"] ) ]];

            ui:case [ ui:for ui:DecimalField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]
                [ ui:sequence 2; a ui:DecimalField; ui:property ui:min; ui:label "minimum value"]
                [ ui:sequence 3; a ui:DecimalField; ui:property ui:max; ui:label "maximum value"] )  ]];

            ui:case [ ui:for ui:FloatField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]
                [ ui:sequence 2; a ui:FloatField; ui:property ui:min; ui:label "minimum value"]
                [ ui:sequence 3; a ui:FloatField; ui:property ui:max; ui:label "maximum value"] ) ]];

            ui:case [ ui:for ui:ColorField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty] )
            ]];

            ui:case [ ui:for ui:DateField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]
                [ ui:sequence 2; a ui:DateField; ui:property ui:min; ui:label "min"]
                [ ui:sequence 3; a ui:DateField; ui:property ui:max ; ui:label "max"]
            ) ]];

            ui:case [ ui:for ui:DateTimeField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:DatatypeProperty]
                [ ui:sequence 2; a ui:DateTimeField; ui:property ui:min; ui:label "min"]
                [ ui:sequence 3; a ui:DateTimeField; ui:property ui:max ; ui:label "max"]
            ) ]];

            ui:case [ ui:for ui:EmailField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:ObjectProperty]
            ) ]];

            ui:case [ ui:for ui:PhoneField; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from owl:ObjectProperty]
            )]];

            ui:case [ ui:for ui:Group; ui:use FieldList];

            ui:case [ ui:for ui:Options; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:dependingOn; ui:label "depending on"; ui:from r:Property; ui:default r:type]
                [ ui:sequence 2; a ui:Multiple; ui:property ui:case; ui:part CaseForm]
                                ) ]];

            ui:case [ ui:for ui:Choice; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property";
                    ui:canMintNew true; ui:from owl:ObjectProperty]
                [ ui:sequence 2; a ui:Choice;  ui:canMintNew true; ui:property ui:from; ui:label "destination class";
                                    ui:from s:Class; ui:canMintNew true; ]
                [ ui:sequence 3; a ui:BooleanField; ui:property ui:canMintNew; # No class form yet
                            ui:label "user can add new"]
                [ ui:sequence 4; a ui:Choice;  ui:canMintNew true; ui:property ui:use; ui:label "Nested Form (if any)";
                            ui:from ui:Form; ui:optional true; ui:use FormForm] # @@ optional

            ) ]];

            ui:case [ ui:for ui:Classifier; ui:use [a ui:Group; ui:parts (
                [ ui:sequence 2; a ui:Comment; ui:contents """A classifier allows the user to which classes the item belongs to, given a common superclass of the allowed classes.  Give the superclass here:""" ]

                [ ui:sequence 4; a ui:Choice;  ui:canMintNew true; ui:property ui:category; ui:label "superclass"; ui:from s:Class]

                [ ui:sequence 6; a ui:Comment; ui:contents """(When the choice is made normally the item is given a rdf:type. Set this to rdf:type unless you want the form to set a different property.)""" ]

                [ ui:sequence 8; a ui:Choice;  ui:canMintNew true; ui:property ui:property;
                        ui:label "property"; ui:from owl:ObjectProperty; ui:default r:type] # @@ restriction

            ) ]];

            ui:case [ ui:for ui:Multiple; ui:use [a ui:Group; ui:parts (
                        [ui:sequence 0; a ui:BooleanField;  ui:property ui:ordered; ui:label "ordered"] # If this an ordered array or an unordered set?
                        [ui:sequence 0; a ui:IntegerField;  ui:property ui:min; ui:label "minimum number"] # If this an ordered array or an unordered set?
                        [ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:property; ui:label "property"; ui:from r:Property]
                [ui:sequence 2; a ui:Choice;  ui:canMintNew true; ui:property ui:part; ui:from ui:Form; ui:use FieldForm]   # Form for details of the field part of the multiple
            ) ]];

            ui:case [ ui:for ui:Heading; ui:use [a ui:SingleLineTextField; ui:property ui:contents]];

            ui:case [ ui:for ui:Comment; ui:use [a ui:MultiLineTextField; ui:property ui:contents]]
        ]).


CaseForm a ui:Group;
   dc:title "Form for a conditional case in a form";
   ui:parts (
        [ ui:sequence 1; a ui:Choice;  ui:canMintNew true; ui:property ui:for; ui:label "when it is"; ui:canMintNew true; ui:from s:Class]
        [ui:sequence 2; a ui:Choice;  ui:canMintNew true; ui:property ui:use; ui:from ui:Form; ui:canMintNew true; ui:use FieldForm] ). # Form for details of the field part of the multiple

# ENDS
`,"text/turtle"))).text(),Ae=q,Nl="trackerOverlay",Wa={icon:R.iconBase+"noun_122196.svg",name:"issue",audience:[],label:function(e,n){let t=Ae.findTypeURIs(e);return t["http://www.w3.org/2005/01/wf/flow#Task"]||Ae.holds(e,o.wf("tracker"))?"issue":t["http://www.w3.org/2005/01/wf/flow#Tracker"]?"tracker":null},mintClass:o.wf("Tracker"),mintNew:async function(e,n){async function t(u,p){let g=u.concat(p).map(_=>_.why),w=Array.from(new Set(g)).map(_=>r.updater.update(u.filter(I=>I.why.sameTerm(_)),p.filter(I=>I.why.sameTerm(_))));return Promise.all(w)}let r=e.session.store,i;n.newInstance?i=r.sym(n.newInstance.doc().uri+"_state.ttl"):(n.newInstance=r.sym(n.newBase+"index.ttl#this"),i=r.sym(n.newBase+"state.ttl"));let a=n.newInstance,s=a.doc(),d=ve.currentUser();d&&r.add(a,o.dc("author"),d,s),r.add(a,o.rdf("type"),o.wf("Tracker"),s),r.add(a,o.dc("created"),new Date,s),r.add(a,o.wf("issueClass"),o.wf("Task"),s),r.add(a,o.wf("initialState"),o.wf("Open"),s),r.add(a,o.wf("stateStore"),i,s),r.add(a,o.wf("assigneeClass"),o.foaf("Person"),s),r.add(a,o.wf("stateStore"),i,i);let m=r.statementsMatching(void 0,void 0,void 0,s).concat(r.statementsMatching(void 0,void 0,void 0,i));try{await t([],m)}catch(u){return Ne("Error writing tracker configuration: "+u),Lr(n.div,e.dom,"Error creating the tracker configuration")}let f=e.dom,l=n.div.appendChild(f.createElement("div"));return l.innerHTML=`<h4>Success</h4>
    <p>Your <a href="${a.uri}">new tracker</a> has been made.
    Use the settings tab to configure it.
    </p>
    `,n},render:function(e,n){let t=n.dom,r=t.createElement("div");n.paneDiv=r,r.setAttribute("class","issuePane");let{errorSection:i,clearErrors:a,showError:s}=zt(t,r);function d(V){let L=V?.querySelector("main");L?.parentNode&&L.nextSibling!==i&&L.parentNode.insertBefore(i,L.nextSibling)}function m(V,L){V?a():s(L)}async function f(V,L){async function K(z){let H=V.any(z,o.owl("disjointUnionOf"),null,ne);if(!H)throw Ne(`Classification ${z} has no disjointUnionOf`),new Error(`Tracker configuration error: ${S.label(z)} is missing its allowed state list (owl:disjointUnionOf)`);if(!H.elements)throw Ne(`Classification ${z} has no array`),new Error(`Tracker configuration error: ${S.label(z)} has no array`);let Q=new Set(H.elements.map(ie=>ie.uri)),ae=new Set(V.each(null,o.rdfs("subClassOf"),z,ne).map(ie=>ie.uri)),J=[...ae].filter(ie=>!Q.has(ie)).map(ie=>({action:"delete",st:Se(V.sym(ie),o.rdfs("subClassOf"),z,ne)})),oe=[...Q].filter(ie=>!ae.has(ie)).map(ie=>({action:"insert",st:Se(V.sym(ie),o.rdfs("subClassOf"),z,ne)}));return J.concat(oe)}let ne=L.doc(),G=V.any(L,o.wf("issueClass")),W=V.each(L,o.wf("issueCategory")).concat([G]),U=[];for(let z of W)try{U=U.concat(await K(z))}catch(H){Ne("Error checking subclasses of "+S.label(z)+": "+H),s('Tracker settings need an update for "'+S.label(z)+'". Open Settings and make sure this status/category has a list of allowed values (for example Open, In Progress, Closed), then save and refresh.')}if(U.length){let z=U.filter(ae=>ae.action==="insert").map(ae=>ae.st),H=U.filter(ae=>ae.action==="delete").map(ae=>ae.st);Gn("Damage:",U);let Q=`${U.length} total (${z.length} add, ${H.length} remove)`;confirm(`Apply subclass fixes in tracker config? ${Q}.`)&&await V.updater.update(H,z)}}function c(V,L){let K=Ae.any(V,o.wf("issueClass"));L=L||K;let ne=L.sameTerm(K),G=Ae.any(L,o.owl("disjointUnionOf"));if(!G)return Ne(`Configuration error: state ${K} does not have a disjointUnionOf`),s(`Configuration error: state ${K} does not have substates`);let W=G.elements;ne&&W.length>2&&(W=W.filter(M=>Ae.holds(M,o.rdfs("subClassOf"),o.wf("Open"))||M.sameTerm(o.wf("Open"))));async function U(M,J){let $=qa(M,L),oe=Ae.the(M,o.wf("tracker"),null,M.doc()),ie=Ae.any(oe,o.wf("stateStore"));if(!J.sameTerm($)){try{await Ae.updater.update([Se(M,o.rdf("type"),$,ie)],[Se(M,o.rdf("type"),J,ie)]),a()}catch(ce){Ne("Unable to change issue state: "+ce),s("Unable to change issue state")}ae.refresh()}}function z(M){return!!Ae.findTypeURIs(M)[o.wf("Open").uri]}let H={columnDropHandler:U,filter:ne?null:z};H.sortBy=o.dct("created"),H.sortReverse=!0;function Q(M){return za(M,n)}let ae=Da(t,W,Q,H);return ae.classList.add("trackerBoard"),ae}function l(V,L){return ee.button(t,R.iconBase+"noun_479395.svg","refresh table",async ne=>{try{await Ae.fetcher.load(V,{force:!0,clearPreviousData:!0}),a()}catch(G){Ne("Unable to refresh table: "+G),s("Unable to refresh the table. Please try again, and if this continues, refresh the page.");return}ee.refreshTree(L)})}function u(V){function L(){let $=new xt;return W.pat.optional.push($),$}let K=Ae.any(e,o.wf("issueClass")),ne=Ae.each(V,o.wf("issueCategory")),G=["issue","state","created"],W=new _n(S.label(e));for(let $=0;$<ne.length;$++)G.push("_cat_"+$);let U={};G.forEach(function($){W.vars.push(U[$]=dn($))}),W.pat.add(U.issue,o.wf("tracker"),V),W.pat.add(U.issue,o.dct("created"),U.created),W.pat.add(U.issue,o.rdf("type"),U.state),W.pat.add(U.state,o.rdfs("subClassOf"),K),W.pat.optional=[];for(let $=0;$<ne.length;$++){let oe=L();oe.add(U.issue,o.rdf("type"),U["_cat_"+$]),oe.add(U["_cat_"+$],o.rdfs("subClassOf"),ne[$])}let z=Ae.any(V,o.wf("propertyList"));if(z){let $=z.elements;for(let oe=0;oe<$.length;oe++){let ie=$[oe],ce="_prop_"+oe;ie.uri.indexOf("#")>=0&&(ce=ie.uri.split("#")[1]);let pe=L();W.vars.push(U[ce]=dn(ce)),pe.add(U.issue,ie,U[ce])}}let H={};Ae.each(void 0,o.rdfs("subClassOf"),K).forEach(function($){(Ae.holds($,o.rdfs("subClassOf"),o.wf("Open"))||$.sameTerm(o.wf("Open")))&&(H[$.uri]=!0)});function ae($){let oe=be($);Vt(oe,n)}let M=$n(t,{query:W,keyVariable:"?issue",sortBy:"?created",sortReverse:!0,hints:{"?issue":{linkFunction:ae,label:"Title"},"?created":{cellFormat:"shortDate"},"?state":{initialSelection:H,label:"Status"}}}),J=Ae.any(e,o.wf("stateStore"));return M.appendChild(l(J,M)),M.classList.add("trackerBoardTable"),M}function p(V){let L=t.createElement("div"),K=ve.currentUser(),ne={div:L,dom:t,noun:"tracker",statusArea:L,me:K,refreshTarget:V},W=[n.session.paneRegistry.byName("issue")];return zn.newThingUI(ne,n,W),L.classList.add("trackerCreationControlContainer"),L}function g(V){let L=t.createElement("div"),K={dom:t,div:L,noun:"tracker"};return Re.registrationList(K,{public:!0,private:!0,type:V}).then(ne=>{L.appendChild(p(L))}),L}function h(V){let L=t.createElement("div");L.appendChild(Ha(t,V));let K=Ae.any(V,o.wf("issueClass")),ne=[P,K].concat(Ae.each(V,o.wf("issueCategory"))),G=L.appendChild(t.createElement("div"));ee.renderNameValuePair(t,Ae,G,null,"Default view").appendChild(ee.makeSelectForOptions(t,Ae,V,o.wf("defaultView"),ne,{},V.doc()));let U={dom:t,div:L,noun:"tracker"};return Re.registrationControl(U,V,o.wf("Tracker")).then(z=>{let H=o.wf("TrackerSettingsForm");en(Pl,Ae,H.doc().uri,"text/turtle"),ee.appendForm(t,L,{},V,H,V.doc(),m)}),L}function w(){function V(z,H){if(z.innerHTML="",H.sameTerm(E))z.appendChild(c(T));else if(H.sameTerm(P))z.appendChild(u(T));else if(H.sameTerm(A))z.appendChild(h(T));else if(H.sameTerm(D))z.appendChild(g(o.wf("Tracker")));else if(Ae.holds(T,o.wf("issueCategory"),H)||Ae.holds(T,o.wf("issueClass"),H))z.appendChild(c(T,H));else throw new Error("Unexpected tab type: "+H)}let L=Ae.any(T,o.wf("issueClass")),K=[D,P,L].concat(Ae.each(T,o.wf("issueCategory")));K.push(A);let ne=Ae.any(T,o.wf("defaultView"),null,T.doc())||P,G={renderMain:V,items:K,selectedTab:ne},W=D.doc();return Ae.add(D,o.rdfs("label"),"My Trackers",W),Ae.add(A,o.rdfs("label"),"Settings",W),Ae.add(L,o.rdfs("label"),"By State",W),Vn.tabWidget(G)}async function _(){if(T=Ae.any(e,o.wf("tracker")),!T)throw new Error("This issue "+e+"has no tracker");try{let L=await n.session.store.fetcher.load(T.doc())}catch(L){return Ne(`Failed to load tracker config: ${T.doc()}: ${L}`),s("Failed to load tracker config")}let V=Ae.any(T,o.wf("stateStore"));if(!V)return Ne("Tracker has no state store: "+T),s("Tracker has no state store: "+T);try{await n.session.store.fetcher.load(e)}catch(L){return Ne(`Failed to load issue state: ${V}: ${L}`),s("Failed to load issue state")}r.appendChild(Fr(e,n)),B.addDownstreamChangeListener(V,function(){ee.refreshTree(r)})}async function I(){function V(Q){ee.refreshTree(r),Vt(Q,n),W.disabled=!1}T=e;try{await f(Ae,T)}catch(Q){Ne("Error fixing subclasses in config: "+Q),s("Error fixing subclasses in config")}let L=Ae.any(e,o.wf("issueClass"));if(!L){Ne("This tracker has no issueClass"),s("Tracker settings are incomplete: missing Issue Class. Open Settings, choose an Issue Class, then refresh.");return}let K=Ae.any(e,o.wf("stateStore"));if(!K){Ne("This tracker has no stateStore"),s("Tracker settings are incomplete: missing State Store. Open Settings, save the tracker state settings, then refresh.");return}let ne=t.createElement("h2");ne.setAttribute("style","font-size: 150%"),r.appendChild(ne);let G=S.label(L);ne.appendChild(t.createTextNode(G+" list"));let W=t.createElement("button"),U=t.createElement("div");W.setAttribute("type","button"),W.classList.add("trackerIssuePaneNewIssueButton"),U.classList.add("trackerIssuePaneNewIssueButtonContainer"),U.appendChild(W),r.appendChild(U);let z=t.createElement("img");z.classList.add("trackerIssuePaneNewIssueButtonImage"),z.setAttribute("src",R.iconBase+"noun_19460_green.svg"),W.appendChild(z);let H=t.createElement("span");H.classList.add("trackerIssuePaneNewIssueButtonText"),H.innerHTML="New "+G,W.appendChild(H),W.addEventListener("click",function(Q){W.disabled=!0,U.appendChild(qt(t,Ae,T,null,V))},!1),n.session.store.fetcher.load([K]).then(function(Q){let ae=w(T);r.appendChild(ae),d(ae),ae.refresh||(Gn("No refresh function on the tableDiv?!"),s("There is no way to refresh the table view. Please refresh the whole page to see updates to the issues.")),r.appendChild(Va(e,n)),B.addDownstreamChangeListener(K,ae.refresh)}).catch(function(Q){Ne("Cannot load state store: "+Q),s("Cannot load state store")})}let E=o.wf("BoardView"),P=o.wf("TableView"),A=o.wf("SettingsView"),D=o.wf("InstancesView"),B=Ae.updater,N=Ae.findTypeURIs(e),T,X=o.wf("").doc();Ae.holds(void 0,void 0,void 0,X)||en(Sl,Ae,X.uri,"text/turtle");let j=o.ui("").doc();Ae.holds(void 0,void 0,void 0,j)||en(Ul,Ae,j.uri,"text/turtle"),N["http://www.w3.org/2005/01/wf/flow#Task"]||Ae.holds(e,o.wf("tracker"))?_().then(()=>st("Single issue rendered")).catch(V=>{Ne("Single issue render failed: "+V),s("Could not load this issue view. Please refresh, and if this continues, check tracker settings.")}):N["http://www.w3.org/2005/01/wf/flow#Tracker"]?I().then(()=>st("Tracker rendered")).catch(V=>{Ne("Tracker render failed: "+V),s("Could not load this tracker. Open Settings to verify Issue Class, then refresh.")}):(Ne("Error: Issue pane: No evidence that "+e+" is either a bug or a tracker."),s("This item is not recognized as an issue or tracker."));let te,de=r.appendChild(t.createElement("div"));return de.classList.add(Nl),n.overlay=de,ve.checkUser().then(V=>{if(V){n.me=V;return}te=Re.loginStatusBox(t,L=>{L?(n.me=Ae.sym(L),r.removeChild(te)):n.me=null}),te.classList.add("trackerIssuePaneLoginButton"),r.insertBefore(te,r.firstChild),n.statusArea||(n.statusArea=r.insertBefore(t.createElement("div"),r.firstChild))}),r}};Et(he(`/* Shared utility variables for component styles.
   These are kept here (instead of in dev-global.css) so they can be
   bundled with component styles and reused consistently across the app.
*/

/* Utility helper classes */

/* different from mashlib .btn-primary:active {
  box-shadow: var(--box-shadow-active);
} */
`,"text/css"));Et(he(`/* Focus indicator for keyboard navigation */
.contactPane table tr[tabindex="0"]:focus {
  outline: var(--focus-ring-width) solid var(--color-primary);
  outline-offset: 2px;
  background: var(--color-info-bg);
}
/* contactsPane styles \u2014 extracted from inline styles in contactsPane.js */
/* Uses CSS custom properties from the global stylesheet (dev-global.css / mashlib) */

/* \u2500\u2500 Layout: Three-column browser \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane {
  background-color: var(--solid-ui-color-white);
}
/* Right of the address book: one shared title bar over a row of two columns. */
.contactPane .contentArea {
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
}

.contactPane .contentColumns {
  display: flex;
  flex-wrap: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  align-items: stretch;
}

.contactPane .peopleSection,
.contactPane .detailSection,
.contactPane .addressBookSection {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 0; /* allow it to grow but not force wrap */
  min-width: 0; /* allow sections to collapse when stacked */
  box-sizing: border-box;
  background: var(--color-section-bg);
}

.contactPane .detailsSectionContent {
  flex: 1 1 auto;
  min-height: 12.5rem; /* 200px */
  padding: var(--spacing-lg);
  max-width: 56.25rem; /* 900px */
  width: 100%;
  box-sizing: border-box;
}

.contactPane .detailsSectionContent--wide {
  max-width: 56.25rem; /* 900px */
}

/* The content box is capped at 900px; auto margins keep it centered when the
   details column is wider than that. */
.contactPane .detailsSectionContent {
  margin: 0 auto;
}

.contactPane .allGroupsButton {
  border-radius: var(--border-radius-full) !important;
  /* existing styles */
}

/* The search box lives in components/search, and is styled there --
   shadow DOM keeps these rules from reaching it. */


.contactPane .claimSuccess {
  font-size: var(--font-size-xl);
}

/* .contentHeader moved into components/address-book-header, which renders it. */

.contactPane {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* The address-book view is a light-DOM component now; its host has to carry
   the flex chain from .contactPane down to the grid it renders. */
.contactPane contacts-pane-address-book {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
}

.contactPane .addressBook-grid {
  display: flex;
  flex-wrap: nowrap; /* keep sections side-by-side */
  flex: 1;
  min-width: 0; /* allow it to shrink */
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

@media ((min-width: 500px) and (max-width: 900px)) {
  .contactPane .addressBookSection {
    max-width: 900px;
  }
  .contactPane .addressBookSection section {
    max-width: 485px;
  }
}

.contactPane.contactPane--narrow .addressBook-grid {
  flex-direction: column !important;
  flex-wrap: nowrap !important;
  min-width: 0 !important;
  overflow-x: hidden !important;
}

.contactPane.contactPane--narrow .contentColumns {
  flex-direction: column !important;
}

.contactPane.contactPane--narrow .contentArea,
.contactPane.contactPane--narrow .peopleSection,
.contactPane.contactPane--narrow .addressBookSection,
.contactPane.contactPane--narrow .detailSection {
  flex: 1 1 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  width: 100% !important;
}

@media (max-width: 1000px) {
  /* Stack sidebar + details vertically on narrow screens */
  .contactPane {
    min-height: auto !important;
  }

  .contactPane .addressBook-grid {
    flex-direction: column !important;
    flex-wrap: nowrap !important;
    min-height: auto !important;
    height: auto !important;
  }

  .contactPane .contentColumns {
    flex-direction: column !important;
  }

  .contactPane .contentArea,
  .contactPane .peopleSection,
  .contactPane .addressBookSection,
  .contactPane .detailSection {
    order: initial !important;
    flex: none !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }


  .contactPane .addressBookSection {
    max-height: none !important;
    min-height: auto !important;
    overflow-y: visible !important;
    padding-bottom: var(--spacing-lg) !important;
    display: flex !important;
    flex-direction: column !important;
    height: auto !important;
  }

  .contactPane .peopleSection contacts-pane-people-list {
    max-height: 50vh;
  }

  .contactPane .detailSection {
    max-height: none !important;
    min-height: auto !important;
    overflow-y: visible !important;
  }

  .contactPane .detailsSectionContent {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    align-items: stretch !important;
    min-height: auto !important;
    height: auto !important;
    overflow-y: visible !important;
  }

  .contactPane .detailSection > .detailsSectionContent {
    padding-top: var(--spacing-sm) !important;
    box-sizing: border-box !important;
  }

  /* Keep a normal mobile text scale while preserving comfortable touch targets */
  /* The following rule made all text much larger on mobile; comment out to restore normal font size for non-buttons.
   .contactPane,
   .contactPane * {
    font-size: 1.5rem !important;
  } */

  .contactPane .actionButton,
  .contactPane .flatButton {
    min-height: calc(var(--min-touch-target) + 0.5em) !important;
    font-size: 1.5rem !important;
    padding: 0.875em 1em !important;
  }

  .contactPane .group-membership-item .group-membership-toolbar > img.hoverControlHide, .contactPane .group-membership-item .group-membership-toolbar > [data-testid="deleteButtonWithCheck"],
  .individualPane .hoverControl img.hoverControlHide, 
  .individualPane .hoverControl [data-testid="deleteButtonWithCheck"] {
    display: inline-flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
}

.contactPane .addressBookSection {
  max-width: 232px;
}

/* Card Section Background */
.contactPane .addressBookSection.section-bg {
  background: var(--solid-ui-color-white);
  padding: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--solid-ui-color-gray-200);
  border-radius: 0 !important;
}

/* Keep detail section content anchored at top */
.contactPane .detailSection {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border-left: 1px solid var(--solid-ui-color-gray-200);
}

.contactPane .detailsSectionContent {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

/* \u2500\u2500 Button section: horizontal scrollable row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */


.contactPane .buttonSection {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  padding: 0 var(--spacing-sm) 0 var(--spacing-sm);
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  margin-bottom: 0;
}

@media (max-width: 1000px) {
  .contactPane .buttonSection {
    position: sticky;
    top: 0;
    z-index: 2;
    background: var(--color-section-bg);
    box-shadow: 0 2px 4px -2px rgba(0,0,0,0.04);
  }
}

.contactPane .buttonSection::-webkit-scrollbar {
  height: 6px;
}

.contactPane .buttonSection::-webkit-scrollbar-thumb {
  background: var(--color-border-pale);
  border-radius: var(--border-radius-base);
}

.contactPane .buttonSection::-webkit-scrollbar-track {
  background: transparent;
}

.contactPane .detailsSectionContent .newGroupBtn {
  width: 100%;
  box-sizing: border-box;
  margin-top: var(--spacing-sm);
}

.contactPane .detailsSectionContent h3 {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  padding-left: 0;
}

/* Delete confirmation POPUP \u2014 centered overlay in details section */
.contactPane .detailSection {
  position: relative;
}

.contactPane .webidControl div[style*="position: relative"]:has(> div[style*="display: grid"]) {
  position: static !important;
}


.contactPane .webidControl .personaRow--webid td > div[style*="position: relative"] > div {
  position: absolute !important;
  left: auto !important;
  z-index: 9999 !important;
  display: grid !important;
  pointer-events: auto !important;
  opacity: 1 !important;
  visibility: visible !important;
  padding: var(--spacing-btn) !important;
  min-width: 12em !important;
  background: var(--color-background) !important;
  border: var(--border-width-sm) solid var(--color-primary) !important;
  border-radius: var(--border-radius-base) !important;
  box-shadow: var(--box-shadow-popup) !important;
  grid-template-columns: auto auto !important;
  gap: var(--spacing-xxs) !important;
}

.contactPane .detailsSectionContent .group-membership-item .group-membership-toolbar > div[style*="position: relative"] > div > button:has(> img[src$=".svg"]),
.contactPane .webidControl .personaRow--webid td > div[style*="position: relative"] > div > button:has(> img[src$=".svg"]) {
  background-color: transparent !important;
}

/* The header section lives in components/address-book-header, and is styled
   there -- shadow DOM keeps these rules from reaching it. */


/* \u2500\u2500 People list section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The people column: header, search box, then the list itself. */
.contactPane .peopleSection {
  background: var(--solid-ui-color-white);
  margin-bottom: 0;
}

/* The list and its rows live in components/people-list, and are styled
   there -- shadow DOM keeps these rules from reaching them. */
/* \u2500\u2500 Details section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The search box, until the header's Search button reveals it. Document-level
   rules on the host beat its shadow :host display. */
contacts-pane-search.hidden {
  display: none;
}

/* Inline error shown by the details section, matching the old
   UI.widgets.errorMessageBlock look. */
.contactPane .detailsError {
  background-color: pink;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-base);
}

/* \u2500\u2500 Viewport-bound desktop layout \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

/* The pane fills the viewport below the data browser's header (the JS in
   setupResponsiveStacking keeps --pane-max-height up to date) and never
   exceeds it; each column scrolls its own overflow. Narrow layouts stack
   and scroll the page instead, so none of this applies there. */
@media (min-width: 1001px) {
  .contactPane:not(.contactPane--narrow) {
    height: var(--pane-max-height, auto);
    max-height: var(--pane-max-height, none);
  }

  .contactPane:not(.contactPane--narrow) .addressBook-grid {
    min-height: 0;
    overflow: hidden;
  }

  .contactPane:not(.contactPane--narrow) .contentArea,
  .contactPane:not(.contactPane--narrow) .contentColumns,
  .contactPane:not(.contactPane--narrow) .peopleSection,
  .contactPane:not(.contactPane--narrow) .addressBookSection {
    min-height: 0;
  }

  /* Group bar: its old horizontal-row overflow rules would clip a tall
     vertical list, so it scrolls vertically here. */
  .contactPane:not(.contactPane--narrow) .buttonSection {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* People list: let the column's height bound it instead of the 70vh cap
     the component carries for unconstrained pages. */
  .contactPane:not(.contactPane--narrow) .peopleSection contacts-pane-people-list {
    flex: 1 1 auto;
    min-height: 0;
    max-height: none;
  }

  .contactPane:not(.contactPane--narrow) .detailSection {
    min-height: 0;
    overflow-y: auto;
  }

  /* The rendered contact card is a flex child of the content box; without
     this the bounded column squashes it to fit instead of scrolling. */
  .contactPane:not(.contactPane--narrow) .detailsSectionContent > .renderPane {
    flex-shrink: 0;
  }
}

/* The "No contact selected" state: centered in the space a contact fills.
   The column is <contacts-pane-details>, rendering into the light DOM (it
   hosts legacy pane content), so these rules reach it. */
.contactPane .detailsEmpty {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-lg);
  min-height: 12.5rem; /* 200px, same floor as the content box */
}

/* The circled address-book mark above the empty state's title. */
.contactPane .detailsEmptyIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem; /* 80px */
  height: 5rem;
  border-radius: 50%;
  box-sizing: border-box;
  background: var(--solid-ui-color-slate-50, #f8fafc);
  border: 1px solid var(--solid-ui-color-slate-200, #e2e8f0);
  color: var(--solid-ui-color-slate-400, #90a1b9);
}

.contactPane .detailsEmptyIcon icon-lucide-book-user {
  width: 1.75rem; /* 28px */
  height: 1.75rem;
}

/* Explicit margins rather than a flex gap: 20px between the icon and the
   title, 10px between the title and its explanation. Scoped under the content
   box to outrank its generic h3 margin rule. */
.contactPane .detailsSectionContent .detailsEmptyTitle {
  margin: 1.25rem 0 0.625rem 0; /* 20px / 10px */
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold, 700);
  color: var(--solid-ui-color-gray-900, #101828);
  padding-left: 0; /* the generic h3 rule above indents headings */
}

.contactPane .detailsEmptyText {
  margin: 0;
  max-width: 24rem;
  font-size: var(--font-size-base);
  line-height: var(--line-height-loose, 1.6);
  color: var(--solid-ui-color-gray-500, #6a7282);
}
`,"text/css"));Et(he(`/* Solid-UI form */

/* Vertically center autocomplete input in .formFieldValue */
.individualPane .formFieldValue > div[style*="flex-direction: row"],
.contactPane .formFieldValue > div[style*="flex-direction: row"] {
  align-items: center;
  display: flex;
}

.individualPane .formFieldValue input[data-testid="autocomplete-input"],
.contactPane .formFieldValue input[data-testid="autocomplete-input"] {
  vertical-align: middle;
}

.individualPane .hoverControl,
.contactPane .hoverControl  {
  position: relative;
}

/* In contactPane, hover controls in table cells may contain a link + delete icon.
   Make the cell grow and keep the delete icon right-aligned (no overlap). */
.contactPane td.hoverControl:has(> a) {
  width: auto !important;
  min-width: 4rem !important;
  justify-content: space-between !important;
}

.contactPane td.hoverControl:has(> a) > a {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
  white-space: normal;
}

.individualPane .hoverControl:has(> img:first-child),
.contactPane .hoverControl:has(> img:first-child) {
  background-color: transparent !important;
  border: none !important;
  margin: 0 !important;
  border-radius: 0 !important;
  padding: var(--spacing-btn) !important;
  min-height: var(--min-touch-target);
  min-width: var(--min-touch-target);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.individualPane .hoverControl:has(> img:first-child) > span,
.contactPane .hoverControl:has(> img:first-child) > span {
  display: inline-flex;
  align-items: center;
  margin-left: var(--spacing-xxs);
}

.individualPane div[style*="padding: 0.5em"]:has(> img),
.contactPane div[style*="padding: 0.5em"]:has(> img) {
  display: inline-flex;
  align-items: center;
}

.individualPane div[style*="padding: 0.5em"]:has(> img) > span,
.contactPane div[style*="padding: 0.5em"]:has(> img) > span {
  margin-left: var(--spacing-xxs);
}

.individualPane .hoverControl:has(> img:first-child):hover,
.contactPane .hoverControl:has(> img:first-child):hover {
  background-color: var(--color-section-bg) !important;
}

.individualPane button:has(> img[src$=".svg"]),
.contactPane button:has(> img[src$=".svg"]) {
  background-color: var(--color-section-bg) !important;
  border: none !important;
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

/* Ensure certain icon images render at a consistent size and align nicely when adjacent. */
.contactPane img[src$="red.svg"],
.contactPane img[src$="go-to-this.png"],
.individualPane img[src$="red.svg"],
.individualPane img[src$="go-to-this.png"] {
  width: 1.2rem !important;
  height: 1.2rem !important;
  max-width: none !important;
  max-height: none !important;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
}

/* If the SVG button is inside a statsLog wrapper, add pink background to the button only. */
.individualPane .statsLog button:has(> img[src$=".svg"]),
.contactPane .statsLog button:has(> img[src$=".svg"]) {
  background-color: var(--color-info-bg) !important;
  border: initial !important;
  margin: initial !important;
  border-radius: initial !important;
}

/* Hide the \u201CContinue\u201D icon button that Solid-UI sometimes renders below textareas. */
.individualPane button:has(> img[title="Continue"]),
.contactPane button:has(> img[title="Continue"]) {
  display: none !important;
}

.contactPane .detailSection .detailsSectionContent button:has(> img[title="Continue"]),
.contactPane .detailSection .detailsSectionContent img[title="Continue"] {
  display: inline-flex !important;
}

.contactPane .detailSection .detailsSectionContent img[title="Continue"] {
  width: var(--icon-base, 2rem) !important;
  height: var(--icon-base, 2rem) !important;
}

/* Allow \u201CContinue\u201D buttons inside contactFormContainer to be visible. */
.individualPane .contactFormContainer button:has(> img[src$="noun_1180158.svg"]),
.contactPane .contactFormContainer button:has(> img[src$="noun_1180158.svg"]),
.individualPane .contactFormContainer button:has(> img[title="Continue"]),
.contactPane .contactFormContainer button:has(> img[title="Continue"]) {
  display: inline-flex !important;
}

/* Exception: allow \u201CContinue\u201D buttons inside statsLog to remain visible. */
.individualPane .statsLog button:has(> img[title="Continue"]),
.contactPane .statsLog button:has(> img[title="Continue"]),
.individualPane .webidControl button:has(> img[title="Continue"]),
.contactPane .webidControl button:has(> img[title="Continue"]){
  display: inline-flex !important;
}

.individualPane button,
.contactPane button {
  min-height: var(--min-touch-target);
  min-width: var(--min-touch-target);
}

.individualPane input:not([type="color"]),
.contactPane input:not([type="color"]) {
  width: 99%;
  max-width: 99%;
  min-width: 0;
  box-sizing: border-box;
  font: inherit;
  color: var(--color-text);
  background-color: var(--color-card-bg) !important;
  border: var(--border-width-sm) solid var(--color-border-pale);
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.individualPane textarea,
.contactPane textarea,
.individualPane .formFieldValue textarea,
.contactPane .formFieldValue textarea {
  appearance: none;
  -webkit-appearance: none;
  border-radius: var(--border-radius-sm) !important;
  border: var(--border-width-xthin) solid var(--color-border-accent) !important;
  width: 99%;
  max-width: 99%;
  box-sizing: border-box;
  font: inherit;
  color: var(--color-text);
  background-color: var(--color-card-bg) !important;
  margin: 0 !important;
  margin-top: var(--spacing-xs);
  margin-left: 0 !important;
  margin-right: 0 !important;
  padding: var(--spacing-xs) !important;
}

.individualPane select,
.contactPane select {
  max-width: 99%;
  min-width: 0;
  box-sizing: border-box;
  font: inherit;
  color: var(--color-text);
  background-color: var(--color-card-bg) !important;
  border: var(--border-width-sm) solid var(--color-border-pale);
}

.individualPane input[type="date"],
.contactPane input[type="date"],
.individualPane input[type="month"],
.contactPane input[type="month"],
.individualPane input[type="week"],
.contactPane input[type="week"],
.individualPane input[type="time"],
.contactPane input[type="time"],
.individualPane input[type="datetime-local"],
.contactPane input[type="datetime-local"] {
  min-height: var(--min-touch-target);
}

.individualPane .hoverControl:has(> img:first-child):focus-visible,
.contactPane .hoverControl:has(> img:first-child):focus-visible,
.individualPane button:focus-visible,
.contactPane button:focus-visible,
.individualPane input:not([type="color"]):focus-visible,
.contactPane input:not([type="color"]):focus-visible,
.individualPane textarea:focus-visible,
.contactPane textarea:focus-visible,
.individualPane select:focus-visible,
.contactPane select:focus-visible {
  outline: var(--focus-ring-width) solid var(--color-primary) !important;
  outline-offset: 2px;
  box-shadow: 0 0 0 1px var(--color-background);
}

.individualPane input[type="url"],
.contactPane input[type="url"] {
  width: 99%;
}

.individualPane .formFieldValue,
.contactPane .formFieldValue {
  min-width: 0;
  margin-bottom: var(--spacing-sm);
}

.individualPane .formFieldValue table,
.contactPane .formFieldValue table {
  margin: 0 !important;
  padding: 0 !important;
}

.individualPane .formFieldValue td,
.contactPane .formFieldValue td {
  padding: 0 !important;
  vertical-align: middle;
}

.individualPane .formFieldValue table[data-testid="autocomplete-table"],
.contactPane .formFieldValue table[data-testid="autocomplete-table"] {
  height: 100%;
}

.individualPane .formFieldValue input:not([type="color"]),
.contactPane .formFieldValue input:not([type="color"]),
.individualPane .formFieldValue textarea,
.contactPane .formFieldValue textarea {
  width: 99% !important;
  max-width: 99%;
}

/* Email and phone value inputs: do not stretch full width */
.individualPane .formFieldName:has(a[href="http://www.w3.org/2006/vcard/ns#value"]) + .formFieldValue input:not([type="color"]),
.contactPane .formFieldName:has(a[href="http://www.w3.org/2006/vcard/ns#value"]) + .formFieldValue input:not([type="color"]) {
  width: 98% !important;
  max-width: 98%;
}

.individualPane .formFieldValue select,
.contactPane .formFieldValue select {
  width: 99%;
  display: inline-block;
  max-width: none !important;
}

.individualPane select#formSelect,
.contactPane select#formSelect {
  width: 99%;
  max-width: 98%;
  box-sizing: border-box;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.individualPane span select,
.contactPane span select {
  max-width: 96% !important;
  box-sizing: border-box;
  margin: 0 !important;
}

.individualPane .formFieldValue span select,
.contactPane .formFieldValue span select {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

/* Remove border/padding from the first wrapper div (and its first child wrapper). */
.individualPane > div:first-of-type,
.contactPane > div:first-of-type,
.individualPane > div:first-of-type > div:first-of-type,
.contactPane > div:first-of-type > div:first-of-type {
  border: none !important;
  padding: 0 !important;
}

/* In contactPane, remove border/padding from all direct child divs. */
.individualPane > div,
.contactPane > div {
  border: none !important;
  padding: 0 !important;
}

/* Align schema.org, solid terms, FOAF, vCard, and org field labels with their input values. */
.individualPane :not(.choiceBox):has(> .formFieldName):has(> .formFieldValue),
.contactPane :not(.choiceBox):has(> .formFieldName):has(> .formFieldValue) {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-sm);
}

/* for the Resume inside corporation choice */
/* Add space between classifierBox label and select box */
.individualPane .choiceBox .classifierBox-label,
.contactPane .choiceBox .classifierBox-label {
  margin-right: 0;
  padding-left: var(--spacing-xxs);
}

.individualPane .choiceBox .choiceBox-selectBox select,
.contactPane .choiceBox .choiceBox-selectBox select {
  margin-left: 2.1rem !important;
}

/* for the Resume orga details */
/* Add space between classifierBox label and select box */
.individualPane .classifierBox .classifierBox-label,
.contactPane .classifierBox .classifierBox-label {
  margin-right: 0;
  padding-left: var(--spacing-xxs);
  width: 8rem;
  padding: var(--spacing-xxs);
  vertical-align: middle;
}

.individualPane .classifierBox .classifierBox-selectBox,
.contactPane .classifierBox .classifierBox-selectBox {
  margin-left: 0 !important;
}

.individualPane .classifierBox .classifierBox-selectBox select,
.contactPane .classifierBox .classifierBox-selectBox select {
  margin-left: 0 !important;
}

.individualPane .formFieldValue > span > select,
.contactPane .formFieldValue > span > select {
  margin-left: 0 !important;
}

.individualPane :not(.choiceBox):has(> .formFieldName):has(> .formFieldValue) > .formFieldValue,
.contactPane :not(.choiceBox):has(> .formFieldName):has(> .formFieldValue) > .formFieldValue {
  margin-bottom: 0;
}

.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://schema.org/"]),
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://schema.org/"]),
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/solid/terms#"]),
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/solid/terms#"]),
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://xmlns.com/foaf/0.1/"]),
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://xmlns.com/foaf/0.1/"]),
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/2006/vcard/ns"]),
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/2006/vcard/ns"]),
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/org#"]),
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/org#"]) {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://schema.org/"]) + .formFieldValue,
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://schema.org/"]) + .formFieldValue,
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/solid/terms#"]) + .formFieldValue,
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/solid/terms#"]) + .formFieldValue,
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://xmlns.com/foaf/0.1/"]) + .formFieldValue,
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://xmlns.com/foaf/0.1/"]) + .formFieldValue,
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/2006/vcard/ns"]) + .formFieldValue,
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/2006/vcard/ns"]) + .formFieldValue,
.individualPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/org#"]) + .formFieldValue,
.contactPane :not(.choiceBox) > .formFieldName:has(a[href*="http://www.w3.org/ns/org#"]) + .formFieldValue {
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  flex: 1;
  min-width: 0;
}

/* Center textarea label vertically in flex rows. */
.individualPane div[style*="display: flex"][style*="flex-direction: row"]:has(textarea),
.contactPane div[style*="display: flex"][style*="flex-direction: row"]:has(textarea) {
  align-items: flex-start;
}

.individualPane div[style*="display: flex"][style*="flex-direction: row"]:has(textarea) > div:has(> a),
.contactPane div[style*="display: flex"][style*="flex-direction: row"]:has(textarea) > div:has(> a) {
  padding-left: var(--spacing-xs);
  padding-top: var(--spacing-sm);
}

/* Keep autocomplete/table-based fields (e.g. Occupation) aligned to label text baseline. */
.individualPane :not(.choiceBox):has(> .formFieldValue input[data-testid="autocomplete-input"]),
.contactPane :not(.choiceBox):has(> .formFieldValue input[data-testid="autocomplete-input"]) {
  align-items: flex-start;
}

.individualPane :not(.choiceBox):has(> .formFieldValue input[data-testid="autocomplete-input"]) > .formFieldName,
.contactPane :not(.choiceBox):has(> .formFieldValue input[data-testid="autocomplete-input"]) > .formFieldName {
  padding-top: var(--spacing-xs) !important;
}

.individualPane .formFieldValue:has(input[data-testid="autocomplete-input"]),
.contactPane .formFieldValue:has(input[data-testid="autocomplete-input"]) {
  align-self: flex-start;
}

.individualPane .formFieldValue table[data-testid="autocomplete-table"],
.contactPane .formFieldValue table[data-testid="autocomplete-table"],
.individualPane .formFieldValue input[data-testid="autocomplete-input"],
.contactPane .formFieldValue input[data-testid="autocomplete-input"] {
  margin: 0 !important;
}

.individualPane .formFieldValue table[data-testid="autocomplete-table"],
.contactPane .formFieldValue table[data-testid="autocomplete-table"] {
  vertical-align: baseline;
}

.individualPane input:disabled,
.contactPane input:disabled,
.individualPane textarea:disabled,
.contactPane textarea:disabled,
.individualPane select:disabled,
.contactPane select:disabled,
.individualPane input[readonly],
.contactPane input[readonly],
.individualPane textarea[readonly],
.contactPane textarea[readonly],
.individualPane input:read-only,
.contactPane input:read-only,
.individualPane textarea:read-only,
.contactPane textarea:read-only {
  background-color: var(--color-background) !important;
  cursor: not-allowed;
  opacity: var(--opacity-input-disabled);
  border: var(--border-width-xthin) solid var(--color-background) !important;
}

.contactPane .webidControl table td div.contactPane.namedPane {
  border: none !important;
}

/* ------------------------------------------------------------------ */
/* inline popup used for small confirmation flows (like the new confirmDialog) */
/* apply the class \`rdf-inline-modal\` on the outer wrapper and give the
   inner box the class \`popup\` instead of using the old inline styles. */

/* selectors that match the old inline-styled markup when no classes can be added */

/* Delete pop up */
/* Remove the intermediate positioned ancestor so the popup anchors to .hoverControl instead */
.individualPane div[style*="position: relative"]:has(> div[style*="display: grid"]) {
  position: static !important;
}

.individualPane div[style*="position: relative"] > div[style*="display: grid"] {
  /* override inline values with theme variables */
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  left: auto !important;
  z-index: 9999 !important;
  display: grid !important;
  pointer-events: auto !important;
  opacity: 1 !important;
  visibility: visible !important;
  padding: var(--spacing-btn) !important;
  background: var(--color-background) !important;
  border: var(--border-width-sm) solid var(--color-primary) !important;
  border-radius: var(--border-radius-base) !important;
  box-shadow: var(--box-shadow-popup) !important;
  grid-template-columns: auto auto !important;
  gap: var(--spacing-xxs) !important;
}

.individualPane .hoverControl img.hoverControlHide,
.individualPane .hoverControl [data-testid="deleteButtonWithCheck"] {
  position: absolute !important;
  right: var(--spacing-xxxs) !important;
  width: var(--icon-xs, 1.5rem) !important;
  height: var(--icon-xs, 1.5rem) !important;
  display: none !important;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
  float: none !important;
  z-index: 2 !important;
}

/* Show delete icon only on hover */
.individualPane .hoverControl:hover img.hoverControlHide,
.individualPane .hoverControl:hover [data-testid="deleteButtonWithCheck"] {
  display: inline-flex !important;
}

/* If the hoverControl has exactly one div + the delete icon, keep the icon vertically centered but right-aligned */
.individualPane .hoverControl:has(> div:nth-child(1):nth-last-child(2)):hover > img.hoverControlHide,
.individualPane .hoverControl:has(> div:nth-child(1):nth-last-child(2)):hover > [data-testid="deleteButtonWithCheck"] {
  top: 50% !important;
  right: var(--spacing-xxxs) !important;
  left: auto !important;
  transform: translateY(-50%) !important;
}`,"text/css"));var Tn=o,Mr={icon:R.iconBase+"noun_99101.svg",name:"contact",global:!1,label(e,n){let t=n.session.store.findTypeURIs(e);return t[Tn.vcard("Organization").uri]?"Contact":t[Tn.vcard("AddressBook").uri]?"Address book":null},mintClass:o.vcard("AddressBook"),mintNew:(e,n)=>import("./part-UV7CGYBV.js").then(t=>t.mintNewAddressBook(e,n)),render(e,n,t={}){let r=n.dom,i=n.session.store,a=r.createElement("div");return Un.preventBrowserDropEvents(r),a.setAttribute("class","contactPane"),Pi(a,1e3),s().then(()=>Ai("Contacts pane rendered for "+e),d=>fr(a,r,d.message||""+d)).catch(d=>{fr(a,r,d.message||""+d)}),a;async function s(){let d=i.findTypeURIs(e);if(d[Tn.vcard("Individual").uri]||d[Tn.foaf("Person").uri]||d[Tn.schema("Person").uri]||d[Tn.vcard("Organization").uri]||d[Tn.schema("Organization").uri])try{let{renderIndividual:m}=await import("./part-PBK6PYXV.js");await m(r,a,e,n)}catch(m){throw pr("Error rendering contact. Stack: "+m),new Error("Failed to render contact: "+(m.message||m))}else if(d[Tn.vcard("AddressBook").uri]){await import("./part-IS2VAEID.js");let m=r.createElement("contacts-pane-address-book");m.book=e,m.options={},m.dataBrowserContext=n,m.paneOptions=t,a.appendChild(m)}else throw pr("No evidence that "+e+" is anything to do with contacts."),new Error("This does not seem to be a contact or address book.");return a}}};Be(he(`.pad-layout {\r
  background-color: white;\r
  min-width: 94%;\r
  margin-right: 3%;\r
  margin-left: 3%;\r
  min-height: 13rem;\r
  display: flex;\r
  flex-direction: column;\r
  box-sizing: border-box;\r
  padding-top: 0.5rem;\r
}\r
\r
.pad-row {\r
  display: flex;\r
  flex-wrap: wrap;\r
  width: 100%;\r
}\r
\r
.pad-main {\r
  flex: 1 1 100%;\r
  width: 100%;\r
}\r
\r
.pad-controls {\r
  gap: 0.5rem;\r
  align-items: center;\r
}\r
\r
.pad-cell {\r
  flex: 1 1 auto;\r
}\r
\r
.pad-new-instance-message {\r
  font-size: 140%;\r
}\r
\r
@media (max-width: 600px) {\r
  .pad-controls .pad-cell {\r
    flex: 1 1 100%;\r
  }\r
}\r
`,"text/css"));var Ll={icon:R.iconBase+"noun_79217.svg",name:"pad",audience:[o.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/pad#Notepad"]?"Notepad":null},mintClass:o.pad("Notepad"),mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("notepad mintNew:  Invalid userid");let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();t.add(i,o.rdf("type"),o.pad("Notepad"),a),t.add(i,o.dc("title"),"Shared Notes",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let s=t.sym(i.uri+"_line0");return t.add(i,o.pad("next"),s,a),t.add(s,o.pad("next"),i,a),t.add(s,o.dc("author"),n.me,a),t.add(s,o.sioc("content"),"",a),new Promise(function(d,m){if(!r){m(new Error("Have no updater"));return}r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(f,c,l){c?d(n):m(new Error("FAILED to save new tool at: "+f+" : "+l))})})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=function(H,Q){H||B.appendChild(ee.errorMessageBlock(r,Q,"pink"))},s=function(H){for(;H.firstChild;)H.removeChild(H.firstChild);return H},d=function(H,Q,ae){let M=kt(),J=sn("http://www.w3.org/ns/auth/acl#"),$=M.sym(Q+"#a1"),oe=M.sym(Q),ie=M.sym(H);return M.add($,o.rdf("type"),J("Authorization"),oe),M.add($,J("accessTo"),ie,oe),M.add($,J("agent"),I,oe),M.add($,J("mode"),J("Read"),oe),M.add($,J("mode"),J("Write"),oe),M.add($,J("mode"),J("Control"),oe),$=M.sym(Q+"#a2"),M.add($,o.rdf("type"),J("Authorization"),oe),M.add($,J("accessTo"),ie,oe),M.add($,J("agentClass"),o.foaf("Agent"),oe),M.add($,J("mode"),J("Read"),oe),ae&&M.add($,J("mode"),J("Write"),oe),vt(oe,M,Q,"text/turtle")},m=function(Q,ae,M){let J=i.any(be(Q),be("http://www.iana.org/assignments/link-relations/acl"));if(!w)throw new Error("Have no fetcher");if(J){let $=d(Q,J.uri,ae);return w.webOperation("PUT",J.uri,{data:$,contentType:"text/turtle"}).then(()=>M(!0)).catch(oe=>{M(!1,oe.message)})}else return w.load(Q).catch($=>{M(!1,"Getting headers for ACL: "+$)}).then(()=>{let $=i.any(be(Q),be("http://www.iana.org/assignments/link-relations/acl"));if(!$)throw new Error("No Link rel=ACL header for "+Q);let oe=d(Q,$.uri,ae);return w.webOperation("PUT",$.uri,{data:oe,contentType:"text/turtle"})}).then(()=>M(!0)).catch($=>{M(!1,$.message)})},f=function(){let H=B.appendChild(r.createElement("button"));return H.textContent="Start another pad",H.addEventListener("click",function(){return c(e,W,"pad")}),H},c=function(Q,ae,M){let J=s(ae),$={noun:"notepad"};J.appendChild(Re.newAppInstance(r,$,(pe,ge)=>l(new mi(pe||ge)))),J.appendChild(r.createElement("hr"));let oe=J.appendChild(r.createElement("p"));oe.textContent="Where would you like to store the data for the "+M+"?  Give the URL of the directory where you would like the data stored.";let ie=J.appendChild(r.createElement("input"));ie.setAttribute("type","text"),ie.size=80,ie.label="base URL",ie.autocomplete="on",J.appendChild(r.createElement("br"));let ce=J.appendChild(r.createElement("button"));ce.textContent="Start new "+M+" at this URI",ce.addEventListener("click",function(pe){let ge=ie.value;ge.slice(-1)!=="/"&&(ge+="/"),u(Q,ge)})},l=function(H){let Q=i.any(H,o.space("uriPrefix"));Q?Q=Q.value:Q=H.uri.split("#")[0],Q.slice(-1)!=="/"&&(yt.error(h+": No / at end of uriPrefix "+Q),Q=Q+"/");let ae=new Date;Q+=h+"/id"+ae.getTime()+"/",u(P,Q)},u=function(H,Q){let M=be(H.uri.split("#")[0]),J=i.sym(Q+"pad.ttl"),$=i.sym(Q+"index.html"),oe=[{local:"index.html",contentType:"text/html"}],ie=i.sym(J.uri+"#thisPad"),ce=[],pe;for(pe=0;pe<oe.length;pe++){let ge=oe[pe];(function(ye){ce.push(function(){let Te=Q+ye.local;console.log("Copying "+M+ye.local+" to "+Te);let Ze=function(){m(Te,!1,function(Me,He){Me?ce.shift()():(a(Me,"FAILED to set ACL "+Te+" : "+He),console.log("FAILED to set ACL "+Te+" : "+He))})};if(!i.fetcher)throw new Error("Store has no fetcher");i.fetcher.webCopy(M+ye.local,Q+ye.local,ye.contentType).then(()=>ve.checkUser()).then(Me=>{I=Me,Ze()}).catch(Me=>{console.log("FAILED to copy "+M+ye.local+" : "+Me.message),a(!1,"FAILED to copy "+M+ye.local+" : "+Me.message)})})})(ge)}ce.push(function(){if(i.add(ie,o.rdf("type"),E("Notepad"),J),i.add(ie,o.dc("created"),new Date,J),I&&i.add(ie,o.dc("author"),I,J),i.add(ie,E("next"),ie,J),i.add(ie,o.space("inspiration"),H,A),i.add(ie,o.space("inspiration"),H,J),!_)throw new Error("Have no updater");_.put(J,i.statementsMatching(void 0,void 0,void 0,J),"text/turtle",function(Pe,Le,ye){Le?ce.shift()():(a(Le,"FAILED to save new notepad at: "+J.uri+" : "+ye),console.log("FAILED to save new notepad at: "+J.uri+" : "+ye))})}),ce.push(function(){m(J.uri,!0,function(ge,Pe){a(ge,"Failed to set Read-Write ACL on pad data file: "+Pe),ge&&ce.shift()()})}),ce.push(function(){let ge=B.appendChild(r.createElement("p"));ge.classList.add("pad-new-instance-message"),ge.innerHTML="Your <a href='"+$.uri+"'><b>new notepad</b></a> is ready. <br/><br/><a href='"+$.uri+"'>Go to new pad</a>"}),ce.shift()()},p=function(H){console.log("showResults()"),I=ve.currentUser(),ve.checkUser().then(M=>{I=M});let Q=i.any(e,o.dc("title"))||i.any(e,o.vcard("fn"));t.solo&&typeof window<"u"&&Q&&(window.document.title=Q.value),z.exists=H,D=Nn.notepad(r,A,e,I,z),j.appendChild(D);let ae=i.any(e,o.meeting("parentMeeting"))||e;if(Nn.manageParticipation(r,V,A,ae,I,z),!i.updater)throw new Error("Store has no updater");i.updater.setRefreshHandler(A,D.reloadAndSync)},g=function(){if(!w)throw new Error("Have no fetcher");w.nowOrWhenFetched(A.uri,void 0,function(H,Q,ae){if(H)s(j),i.holds(e,o.rdf("type"),o.wf("TemplateInstance"))&&c(e,j,"pad"),p(!0),L.appendChild(f());else if(ae.status===404){if(console.log("Initializing results file "+A),!_)throw new Error("Have no updater");_.put(A,[],"text/turtle",function(M,J,$){J?(s(j),p(!1)):(a(J,"FAILED to create results file at: "+A.uri+" : "+$),console.log("FAILED to craete results file at: "+A.uri+" : "+$))})}else a(H,"FAILED to read results file: "+Q)})},h="app-pad.timbl.com",w=i.fetcher,_=i.updater,I,E=sn("http://www.w3.org/ns/pim/pad#"),P=e,A=e.doc(),D,B=r.createElement("div"),N=B.appendChild(r.createElement("div"));N.className="pad-layout";let T=N.appendChild(r.createElement("div"));T.className="pad-row",T.appendChild(r.createElement("div")),T.appendChild(r.createElement("div")),T.appendChild(r.createElement("div"));let X=N.appendChild(r.createElement("div"));X.className="pad-row";let j=X.appendChild(r.createElement("div"));j.className="pad-main";let te=N.appendChild(r.createElement("div"));te.className="pad-row pad-controls";let de=te.appendChild(r.createElement("div"));de.className="pad-cell";let V=te.appendChild(r.createElement("div"));V.className="pad-cell";let L=te.appendChild(r.createElement("div"));L.className="pad-cell";let K=N.appendChild(r.createElement("div"));K.className="pad-row";let ne=K.appendChild(r.createElement("div")),G=N.appendChild(r.createElement("div"));G.className="pad-row";let W=G.appendChild(r.createElement("div")),U=N.appendChild(r.createElement("div"));U.setAttribute("class","pad-row naviMenu"),U.appendChild(r.createElement("div")),U.appendChild(r.createElement("div")),U.appendChild(r.createElement("div"));let z={statusArea:ne,timingArea:de};return g(),B}},Ga=Ll;var Xe=o,ja={icon:R.iconBase+"noun_106746.svg",name:"transaction",audience:[Xe.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return r["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]?"$$":t.any(e,o.qu("amount"))?"$$$":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.session.store,i=r.fetcher,a=sn("http://www.w3.org/2000/10/swap/pim/qif#"),s=sn("http://www.w3.org/ns/pim/trip#"),d=t.createElement("div");d.setAttribute("class","transactionPane");let m=function(T,X){X===void 0&&(X="color: grey");let j=t.createElement("pre");j.setAttribute("style",X),d.appendChild(j),j.appendChild(t.createTextNode(T))},f=function(T){return m(T,"color: #100; background-color: #fee")},c=r.statementsMatching(e),l=r.statementsMatching(void 0,void 0,e),u=r.findTypeURIs(e),p={},g=function(N){p[N.uri]=!0},h=function(N){let T="padding: 0.5em 1.5em 1em 1.5em; ";if(N){let X=r.any(N,o.ui("backgroundColor"));X&&(T+="background-color: "+X.value+"; ")}d.setAttribute("style",T)},w=function(N){if(N===void 0)return"";let T=""+N;return T.indexOf(".")>=0?T.split(".")[0]+"."+(T.split(".")[1]+"00").slice(0,2):T+".00"},_=function(T,X){let j=t.createElement("td");return 0+T===0&&X||(j.textContent=w(T)),j.setAttribute("style","width: 6em; text-align: right; "),j},I=function(T){let X=t.createElement("th");return X.textContent=T,X.setAttribute("style","text-align: right; "),X},E=function(N,T){let X=r.any(N,Xe.qu("date")),j=r.any(T,Xe.qu("date"));if(X!==void 0&&j!==void 0){if(X.value<j.value)return-1;if(X.value>j.value)return 1}return N.uri<T.uri?-1:N.uri>T.uri?1:0},P=function(N,T,X){let te=N.session.paneRegistry.byName(X).render(T,N);return te.setAttribute("style","border: 0.1em solid green;"),te},A=function(N,T,X,j,te){let de=T.parentNode.children;if(te)for(let ne=de.length-1;ne>=0;ne--)de[ne].expanded&&(de[ne].parentNode.removeChild(de[ne].expanded),de[ne].expanded=!1);let V=N.createElement("tr"),L=V.appendChild(N.createElement("td"));L.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let K=T.children.length;T.nextSibling?T.parentNode.insertBefore(V,T.nextSibling):T.parentNode.appendChild(V),T.expanded=V,L.setAttribute("colspan",""+K),L.appendChild(P(n,X,j))},D=function(N,T,X,j,te){T.expanded?(T.parentNode.removeChild(T.expanded),T.expanded=!1):A(N,T,X,j,te)},B=function(N,T,X){let j=N.createElement("table");j.setAttribute("style","padding-left: 0.5em; padding-right: 0.5em; font-size: 9pt; width: 85%;");let te=function(V,L){let K=V.createElement("tr"),ne=function(J,$){let oe="'padding-left: 0.5em; padding-right: 0.5em; padding-top: 0.1em;";if($){let ie=r.any($,o.ui("backgroundColor"));ie&&(oe+="background-color: "+ie.value+"; ")}J.setAttribute("style",oe)},G=r.any(L,Xe.qu("toAccount"));ne(K,G);let W=K.appendChild(V.createElement("td")),U=r.any(L,Xe.qu("date"));W.textContent=U?U.value.slice(0,10):"???",W.setAttribute("style","width: 7em;");let z=K.appendChild(V.createElement("td"));z.setAttribute("style","width: 36em;");let H=r.any(L,Xe.qu("payee"));z.textContent=H?H.value:"???";let Q=z.appendChild(V.createElement("a"));Q.textContent=" \u279C",Q.setAttribute("href",L.uri);let ae=K.appendChild(V.createElement("td")),M=r.any(L,Xe.qu("in_USD"));return ae.textContent=M?w(M.value):"???",ae.setAttribute("style","width: 6em; text-align: right; "),K.addEventListener("click",function(J){D(V,K,L,"transaction",!J.shiftKey)},!1),K},de=X?T.filter(X):T.slice();de.sort(E);for(let V=0;V<de.length;V++)j.appendChild(te(N,de[V]));return j};if(u["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]||r.any(e,Xe.qu("toAccount"))){g(Xe.rdf("type"));let N=r.any(e,o.qu("toAccount"));h(N),N||f("(Error: There is no bank account known for this transaction <"+e.uri+`>,
 -- every transaction needs one.)`);let T=null,X=r.any(e,o.qu("accordingTo"));X===void 0?f("(Error: There is no back link to the original data source foir this transaction <"+e.uri+`>,
so I can't tell how to annotate it.)`):(T=X!==void 0?r.any(X,o.qu("annotationStore")):null,T===void 0&&f(`(There is no annotation document for this statement
<`+X.uri+`>,
so you cannot classify this transaction.)`));let j=t.createElement("div");j.setAttribute("style","float:right"),d.appendChild(j);let te=function(ne,G){g(ne);let W=r.any(e,ne);if(!W)return;let U=t.createElement("a");U.setAttribute("href",W.uri),U.setAttribute("style","float:right"),j.appendChild(U).textContent=G||S.label(W),j.appendChild(t.createElement("br"))};te(o.qu("toAccount")),te(o.qu("accordingTo"),"Statement"),te(s("trip"));let de=t.createElement("table");d.appendChild(de);let L=["date","payee","amount","in_USD","currency"].map(a).map(function(ne){g(ne);let G=r.any(e,ne),W=G?S.labelForXML(G):"";return'<tr><td style="text-align: right; padding-right: 0.6em">'+S.labelForXML(ne)+'</td><td style="font-weight: bold;">'+W+"</td></tr>"}).join(`
`);de.innerHTML=L;let K=function(ne,G){ne||f(`Sorry, failed to save your change:
`+G)};T&&r.fetcher.nowOrWhenFetched(T.uri,e,function(ne,G){ne||f("Cannot load store "+T+" "+G);let W=r.any(T,Xe.qu("calendarYear")),U=function(){d.insertBefore(ee.makeSelectForNestedCategory(t,r,e,o.qu("Classified"),T,K),de.nextSibling)};r.any(void 0,Xe.rdfs("subClassOf"),Xe.qu.Classified)?U():W?i.load(W).then(function(M){i.load(r.each(W,Xe.rdfs("seeAlso"))).then(function(){U()}).catch(function(J){console.log("Error loading background data: "+J)})}).catch(function(M){console.log("Error loading calendarYear: "+M)}):console.log("Can't get categories, because no calendarYear"),d.appendChild(ee.makeDescription(t,r,e,o.rdfs("comment"),T,K));let z=r.statementsMatching(void 0,s("trip"),void 0,T).map(function(M){return M.object}),H=r.each(void 0,o.rdf("type"),s("Trip"));z=z.concat(H).sort(),z=function(M,J,$,oe){let ie=J.map(function(ce){let pe=M.any(ce,$);return pe=pe?pe.value:"9999-12-31",[pe,ce]});return ie.sort(),oe&&ie.reverse(),ie.map(function(ce){return ce[1]})}(r,z,o.cal("dtstart"),!0),z.length>1&&d.appendChild(ee.makeSelectForOptions(t,r,e,s("trip"),z,{multiple:!1,nullLabel:"-- what trip? --",mint:"New Trip *",mintClass:s("Trip"),mintStatementsFun:function(M){let J=[];return J.push(Se(M,o.rdf("type"),s("Trip"),M.doc())),J}},T,K)),d.appendChild(t.createElement("br"));let ae=n.getOutliner(t);g(Xe.rdfs("comment")),ee.attachmentList(t,e,d),g(Xe.wf("attachment")),d.appendChild(t.createElement("tr")).setAttribute("style","height: 1em"),ae.appendPropertyTRs(d,c,!1,function(M,J){return!(M.uri in p)}),ae.appendPropertyTRs(d,l,!0,function(M,J){return!(M.uri in p)})})}else u["http://www.w3.org/ns/pim/trip#Trip"]&&function(){let T={},X={},j={},te=r.each(void 0,s("trip"),e),de=te.map(function(V){return V.doc()});r.fetcher.load(de).then(function(){te.forEach(function(M){let J=r.the(M,Xe.qu("date")),$=J?(""+J.value).slice(0,4):"????",oe=r.the(M,Xe.rdf("type"));if(oe||(oe=o.qu("ErrorNoType")),oe&&oe.uri){let ie=oe.uri;X[$]||(X[$]=0),j[$]||(j[$]={}),T[ie]||(T[ie]=0),j[$][ie]||(j[$][ie]=0);let ce=r.any(M,o.qu("in_USD"));if(ce||f("@@ No amount in USD: "+ce+" for "+M),ce){let pe=parseFloat(ce.value);T[ie]+=pe,j[$][ie]+=pe,X[$]+=pe}}});let V=[],L=0,K=[],ne;for(let M in j)Object.prototype.hasOwnProperty.call(j,M)&&K.push(M);K.sort();let G=K.length,W,U=d.appendChild(t.createElement("table"));if(U.setAttribute("style","font-size: 120%; margin-left:auto; margin-right:1em; margin-top: 1em; border: 0.05em solid gray; padding: 1em;"),G>1){let M=U.appendChild(t.createElement("tr"));for(M.appendChild(I("")),ne=0;ne<G;ne++)M.appendChild(I(K[ne]));M.appendChild(I("total"))}for(let M in T)Object.prototype.hasOwnProperty.call(T,M)&&(V.push(M),L+=T[M]);V.sort();let z,H,Q;for(let M=0;M<V.length;M++){let J=r.sym(V[M]);if(z=U.appendChild(t.createElement("tr")),H=z.appendChild(t.createElement("td")),H.textContent=S.label(J),G>1)for(ne=0;ne<G;ne++)Q=j[K[ne]][V[M]],W=z.appendChild(_(Q,!0));z.appendChild(_(T[V[M]],!0))}if(V.length>1){if(z=U.appendChild(t.createElement("tr")),z.appendChild(I("total")),G>1)for(ne=0;ne<G;ne++)Q=X[K[ne]],W=z.appendChild(_(Q?w(Q):""));W=z.appendChild(_(L)),W.setAttribute("style","font-weight: bold; text-align: right;")}let ae=B(t,te);ae.setAttribute("style","margin-left:auto; margin-right:1em; margin-top: 1em; border: padding: 1em;"),d.appendChild(ae),ee.attachmentList(t,e,d)}).catch(function(V){f("Error loading transactions: "+V)})}();return d}};var Fl=o,Ja={icon:R.iconBase+"noun_142708.svg",name:"period",audience:[Fl.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]?"Period":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","periodPane");let s=function(u,p){p||(p="color: grey;");let g=t.createElement("pre");g.setAttribute("style",p),a.appendChild(g),g.appendChild(t.createTextNode(u))},d=function(u){return s("\u2713 "+u,"color: #010; background-color: #efe")},m=function(u){return s(u,"color: #100; background-color: #fee")},f=function(){let l=r.any(e,i.cal("dtstart"));l===void 0&&m("(Error: There is no start date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let u=r.any(e,i.cal("dtend"));u===void 0&&m("(Error: There is no end date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let p={};(function(G){p[G.uri]=!0})(i.rdf("type"));let h=function(G){return!!(G&&G>=l&&G<u)},w=function(G){let W=""+G;return W.indexOf(".")>=0?W.split(".")[0]+"."+(W.split(".")[1]+"00").slice(0,2):W+".00"},_=function(G){return h(r.any(G,i.qu("date")))},I=function(G,W){let U=r.any(G,i.qu("date")),z=r.any(W,i.qu("date"));if(U!==void 0&&z!==void 0){if(U.value<z.value)return-1;if(U.value>z.value)return 1}return G.uri<W.uri?-1:G.uri>W.uri?1:0},E=a.appendChild(t.createElement("h2"));E.textContent="Period "+l.value.slice(0,10)+" - "+u.value.slice(0,10);let P=function(G,W,U){let H=G.session.paneRegistry.byName(U).render(W,G);return H.setAttribute("style","border: 0.1em solid green;"),H},A=function(G,W,U,z,H){let Q=W.parentNode.children;if(H)for(let $=Q.length-1;$>=0;$--)Q[$].expanded&&(Q[$].parentNode.removeChild(Q[$].expanded),Q[$].expanded=!1);let ae=G.createElement("tr"),M=ae.appendChild(G.createElement("td"));M.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let J=W.children.length;W.nextSibling?W.parentNode.insertBefore(ae,W.nextSibling):W.parentNode.appendChild(ae),W.expanded=ae,M.setAttribute("colspan",""+J),M.appendChild(P(n,U,z))},D=function(G,W,U,z,H){W.expanded?(W.parentNode.removeChild(W.expanded),W.expanded=!1):A(G,W,U,z,H)},B=function(G,W){let U=G.createElement("table");U.setAttribute("style","margin-left: 100; font-size: 9pt; width: 85%;");let z=function(Q,ae){let M=Q.createElement("tr"),J=function(ye,Te){let Ze="margin-left: 8em; padding-left: 5em;";if(Te){let Me=r.any(Te,o.ui("backgroundColor"));Me&&(Ze+="background-color: "+Me.value+"; ")}ye.setAttribute("style",Ze)},$=r.any(ae,i.qu("toAccount"));J(M,$);let oe=M.appendChild(Q.createElement("td")),ie=r.any(ae,i.qu("date"));oe.textContent=ie?ie.value.slice(0,10):"???",oe.setAttribute("style","width: 7em;");let ce=M.appendChild(Q.createElement("td"));ce.setAttribute("style","width: 36em;");let pe=r.any(ae,i.qu("payee"));ce.textContent=pe?pe.value:"???";let ge=ce.appendChild(Q.createElement("a"));ge.textContent=" \u279C",ge.setAttribute("href",ae.uri);let Pe=M.appendChild(Q.createElement("td")),Le=r.any(ae,i.qu("in_USD"));return Pe.textContent=Le?w(Le.value):"???",Pe.setAttribute("style","width: 6em; text-align: right; "),M.addEventListener("click",function(ye){D(Q,M,ae,"transaction",!ye.shiftKey)},!1),M},H=W.filter(_);H.sort(I);for(let Q=0;Q<H.length;Q++)U.appendChild(z(G,H[Q]));return U},N={"http://www.w3.org/2000/10/swap/pim/qif#Transaction":!0,"http://www.w3.org/2000/10/swap/pim/qif#Unclassified":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedOutgoing":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedIncome":!0},T=r.findMemberURIs(i.qu("Transaction")),X=[],j=[],te,de;for(let G in T)if(Object.prototype.hasOwnProperty.call(T,G)){de=r.sym(G);let W=r.each(de,i.rdf("type")),U=!1;for(let z=0;z<W.length;z++){let H=W[z];N[H.uri]===void 0&&(U=!0)}U||(te=r.any(de,i.qu("in_USD")),te===void 0&&(te=r.any(de,i.qu("amount"))),te&&(""+te.value).indexOf("-")>=0?j.push(r.sym(G)):X.push(r.sym(G)))}let V,L;X.length?(V=B(t,X),L=V.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Income"+(L<4?"":" ("+L+")"),a.appendChild(V)):d("No unclassified income"),j.length?(V=B(t,j),L=V.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Outgoings"+(L<4?"":" ("+L+")"),a.appendChild(V)):d("No unclassified outgoings ");let K=function(G){let W=r.findSubClassesNT(i.qu("Transaction"));for(let U in W)if(Object.prototype.hasOwnProperty.call(W,U)&&U.slice(1,-1).split("#")[1]===G)return r.sym(U.slice(1,-1));return null},ne=function(G,W){let U=K(G),z,H=[],Q=0;if(!U)return m("Error: No category correspnding to "+G),null;let ae=r.each(void 0,i.rdf("type"),U);for(let M=0;M<ae.length;M++)r.any(ae[M],W)||H.push(ae[M]);return H.length&&(z=B(t,H),Q=z.children.length,a.appendChild(t.createElement("h3")).textContent=S.label(U)+" with no "+S.label(W)+(Q<4?"":" ("+Q+")"),a.appendChild(z)),Q};ne("Reimbursables",i.trip("trip"))===0&&d("Reimbursables all have trips"),ne("Other_Inc_Speaking",i.trip("trip"))===0&&d("Speaking income all has trips")};if(r.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]){let l=r.each(e,i.rdfs("seeAlso"));console.log("Loading before render: "+l.length),r.fetcher.load(l).then(function(){f()})}return a}};var Ka=new Set;function Rr(e){let n=String(e);if(Ka.has(n)||typeof document>"u")return;Ka.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}var Ml=await(await fetch(he(`@prefix : <http://www.w3.org/ns/ui#> .
@prefix f: <#> .
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix cal: <http://www.w3.org/2002/12/cal/ical#>.
@prefix meeting: <http://www.w3.org/ns/pim/meeting#>.
@prefix ns: <http://www.w3.org/2006/vcard/ns#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix te: <http://purl.org/dc/terms/> .
@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
@prefix ui: <http://www.w3.org/ns/ui#>.

  f:main    a :Form;
      cal:summary "Meeting Details";
      :part f:titleField, f:locationField, f:startField,
                    f:endField, f:eventComment, f:colorField .

  f:titleField     a :SingleLineTextField;
       :maxLength 256;
       :property cal:summary;
       :label "Name of meeting";
       :size 80 .

   f:locationField     a :SingleLineTextField;
        :maxLength 128;
        :property cal:location;
        :size 40 .

    f:startField     a :DateField;
        :label "Start";
         :property cal:dtstart .

   f:endField     a :DateField;
       :label "End";
          :property cal:dtend .

    f:colorField     a :ColorField;
        :label "Tab color";
  #      :default "#ddddcc"^^xsd:color;
           :property ui:backgroundColor .

      f:eventComment
           a    ui:MultiLineTextField;
       #    ui:maxLength
       #       "1048";
       #    ui:size
       #       "40".
           ui:property
              cal:comment.

###################################################

f:settings a :Form;
    dc:title "Tab settings";
    :part f:labelField, f:targetField, f:viewField.

    f:labelField     a :SingleLineTextField;
         :maxLength 128;
         :property rdfs:label;
         :label "Label on tab";
         :size 40 .

   f:targetField     a :NamedNodeURIField;
     :maxLength 1024;  # Longer?
     :property meeting:target;
     :label "URL of resource";
     :size 80 .

   f:colorField2     a :ColorField;
       :label "Tab color";
 #      :default "#ddddcc"^^xsd:color;
          :property ui:backgroundColor .

   f:viewField     a :SingleLineTextField;
        :maxLength 128;
        :property meeting:view;
        :label "View mode (experts only)";
        :size 40 .

#
`,"text/turtle"))).text();Rr(he(`/* Some of the CSS code below was generated by Generative AI (GPT-5.3-Codex in GitHub Copilot) based on the following prompt:
the icons are way too big and they are lined up vertically
instead of horizontally. Can you fix that? */
/* also icon sizing - the icons should be about an inch big */
.meetingPaneTable {
  border-collapse: collapse;
  width: 100%; 
  height: 100%; 
  margin: 0;
}
.meetingPaneHeader {
  height: 2em;
}

.meetingPane {
  padding: 5em;
  box-sizing: border-box;
}

.meetingPane .meetingToolBarIcons {
  width: 1%;
  white-space: nowrap !important;
  vertical-align: middle;
}

.meetingPane .meetingToolIconRow {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: nowrap !important;
  align-items: center !important;
  justify-content: flex-start !important;
  gap: var(--spacing-md, 1em);
}

.meetingPane .meetingToolIcon {
  box-sizing: border-box;
  padding: 0 !important;
  width: var(--icon-xl, 3.1em);
  height: var(--icon-xl, 3.1em);
  min-width: var(--icon-xl, 3.1em);
  min-height: var(--icon-xl, 3.1em);
  margin: var(--spacing-xs, 0.5em) !important;
  opacity: 50%;
  display: none !important;
  vertical-align: middle;
  object-fit: contain;
  flex: 0 0 auto !important;
}

.meetingPane .meetingToolIcon-visible {
  display: inline-block !important;
  opacity: 100% !important;
}
.meetingPane .meetingToolIcon-highlighted {
  background-color: yellow;
}

.meetingPane .meetingToolIcon-disabled {
  opacity: 30%;
}

.meetingPane .meetingToolIconAddButton {
  padding: 0 !important;
  margin: var(--spacing-xs, 0.5em) !important;
  width: var(--icon-xl, 3.1em) !important;
  height: var(--icon-xl, 3.1em) !important;
  max-width: var(--icon-xl, 3.1em) !important;
  max-height: var(--icon-xl, 3.1em) !important;
  min-width: var(--icon-xl, 3.1em) !important;
  min-height: var(--icon-xl, 3.1em) !important;
}

.meetingToolLabel {
  margin-left: 0.7em;
}
.meetingToolIconImg {
  width: var(--icon-xs, 1.5em); 
  height: var(--icon-xs, 1.5em);
}

.meetingToolTip {
  margin: 0em; 
  padding:3em; 
  color: #888;
}
.meetingPaneDeleteButton {
  width: var(--icon-xs, 1.5em); 
  height: var(--icon-xs, 1.5em);
}
.meetingPaneIframe {
  border: none; 
  margin: 0; 
  padding: 0; 
  height: 100%; 
  width: 100%;
}
.meetingToolIconSpawn {
  height: var(--icon-base, 2em); 
  width: var(--icon-base, 2em); 
  margin: var(--spacing-xs, 0.5em);
}
.meetingToolIconForkGithub {
  height: var(--icon-base, 2em); 
  width: var(--icon-base, 2em); 
  margin: var(--spacing-xs, 0.5em);
  opacity: 50%;
}
.meetingPaneTableMain {
  border-collapse: collapse;
  width: 100%; 
}
/* ai generated below */
.meetingPaneMainRow {
  height: calc(100% - 50px); 
}`,"text/css"));Rr(he(`:root {
  --icon-xs: 1.5em;
  --icon-base: 2em;
  --icon-xl: 3.1em;
}`,"text/css"));var{typeIndex:Rl}=Ge,{loadTypeIndexesFor:Dl}=Rl,Bl="https://meet.jit.si/",Ol=o,Ya={icon:R.iconBase+"noun_66617.svg",name:"meeting",audience:[Ol.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=o;return t.holds(e,r.rdf("type"),r.meeting("Meeting"))?"Meeting":null},mintClass:o.meeting("Meeting"),mintNew:function(e,n){return new Promise(function(t,r){let i=e.session.store,a=o;n.newInstance=n.newInstance||i.sym(n.newBase+"index.ttl#this");let s=n.newInstance,d=s.doc(),m=ve.currentUser();m&&i.add(s,a.dc("author"),m,d),i.add(s,a.rdf("type"),a.meeting("Meeting"),d),i.add(s,a.dc("created"),new Date,d),i.add(s,a.ui("backgroundColor"),new Bn("#ddddcc",void 0,a.xsd("color")),d);let f=new hi;i.add(s,a.meeting("toolList"),f,d),f.elements.push(s),i.updater.put(d,i.statementsMatching(void 0,void 0,void 0,d),"text/turtle",function(c,l,u){l?t(n):r(new Error("Error writing meeting configuration: "+u))})})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=r.updater,s=this,d=function(C,O){console.log(C);let Y=t.createElement("pre");Y.setAttribute("style","background-color: "+(O||"#eed")+";"),u.appendChild(Y),Y.appendChild(t.createTextNode(C))},m=function(k,C){k||d(C)},f=e,c=e.doc(),l=e.dir().uri,u=t.createElement("div");u.classList.add("meetingPane");let p=u.appendChild(t.createElement("table"));p.classList.add("meetingPaneTable");let g=p.appendChild(t.createElement("tr"));g.classList.add("meetingPaneHeader"),g.appendChild(t.createElement("div"));let h=p.appendChild(t.createElement("tr"));h.classList.add("meetingPaneMainRow");let I=p.appendChild(t.createElement("td")).appendChild(t.createElement("table")).appendChild(t.createElement("tr")),E=null,P=function(){a.put(c,r.statementsMatching(void 0,void 0,void 0,c),"text/turtle",function(k,C,O){C?(F.refresh(),Ze()):(O="FAILED to save new thing at: "+c+" : "+O,d(O))})},A=function(k,C,O){let Y=C.doc();O&&r.add(f,O,C,Y),r.add(C,i.meeting("parentMeeting"),f,Y),a.put(Y,r.statementsMatching(void 0,void 0,void 0,Y),"text/turtle",function(re,fe,ue){fe?P():d("FAILED to save new tool at: "+C+" : "+ue)})},D=function(k,C,O,Y){C&&r.add(f,C,k,c);let re=ee.newThing(c);return O&&r.add(re,i.rdfs("label"),O,c),Y&&r.add(re,i.meeting("icon"),r.sym(Y),c),r.add(re,i.rdf("type"),i.meeting("Tool"),c),r.add(re,i.meeting("target"),k,c),r.the(f,i.meeting("toolList")).elements.push(re),re};function B(k){let C=/https:\/\/www\.google\..*\/maps\//,O="https://www.google.com/maps/embed/v1/",Y="AIzaSyB8aaT6bY9tcLCmc2oPCkdUYLmTOWM8R54",re=k.uri;if(!re.match(C)||re.startsWith(O))return k;let fe=re.replace(C,O)+"&key="+Y;return console.log("Converted Google Map URI! "+fe),be(fe)}let N=function(k){return new Promise(function(C){let O=function(ue){let se=D(ue,o.wf("attachment"),S.label(ue),null);r.add(se,o.meeting("view"),"iframe",c)},Y=function(ue){let se=i.wf("attachment");r.add(e,se,ue,e.doc());let xe={icon:"noun_160581.svg",limit:1,shareTab:!0},_e={newInstance:e,pane:n.session.paneRegistry.byName("link"),predicate:i.meeting("attachmentTool"),tabTitle:"Links",view:"link",noIndexHTML:!0};return G(xe,_e)},re=function(ue){let se=r.any(ue,i.foaf("preferredURI")),xe=se?r.sym(se):ue,_e=r.any(f,i.meeting("attendeeGroup")),we=function(me,Ce){let ke=[Se(Ce,o.vcard("hasMember"),me,Ce.doc())],Oe=r.any(me,i.vcard("fn"))||r.any(me,i.foaf("name"));Oe&&ke.push(Se(me,o.vcard("fn"),Oe,Ce.doc())),r.fetcher.nowOrWhenFetched(Ce.doc(),void 0,function($e,Ue){if(!$e){d("Can't read group to add person"+Ce);return}r.updater.update([],ke,function(qe,ze,nn){m(ze,nn),ze&&console.log("Addded to particpants OK: "+me)})})};if(_e){we(xe,_e);return}L().then(function(me){let Ce=me.newInstance;we(xe,Ce),r.fetcher.putBack(c,{contentType:"text/turtle"}).then(function(ke){console.log("Particiants Group created: "+Ce)})}).catch(function(me){d(me)})};console.log("Dropped on thing "+k);let fe=k.uri;if(fe.startsWith("http:")&&fe.indexOf("#")<0)return Y(k),C(k);r.fetcher.nowOrWhenFetched(k,function(ue,se){function xe(_e){_e=B(_e),console.log("make web page attachement tab "+_e);let we=D(_e,o.wf("attachment"),S.label(_e),null);return r.add(we,o.meeting("view"),"iframe",c),C(_e)}if(ue){let _e=k,we=r.findTypeURIs(_e);for(let me in we)console.log("    drop object type includes: "+me);if(i.vcard("Individual").uri in we||i.foaf("Person").uri in we||i.foaf("Agent").uri in we)return re(k),C(k);if(fe.startsWith("https:")&&fe.indexOf("#")<0){let me=r.fetcher.getHeader(k,"x-frame-options"),Ce=!0;if(me)for(let ke=0;ke<me.length;ke++)console.log("x-frame-options: "+me[ke]),me[ke].indexOf("sameorigin")<0&&(Ce=!1),me[ke].indexOf("deny")<0&&(Ce=!1);if(Ce)return k=B(k),O(k),C(k)}return console.log("Default: assume web page attachement "+k),xe(k)}else return console.log("Error looking up dropped thing, will just add it anyway. "+k+": "+se),xe(k)})})},T=function(k){Promise.all(k.map(function(C){let O=be(C);return N(O)})).then(function(C){P()})},X=function(k){ee.uploadFiles(r.fetcher,k,f.dir().uri+"Files",f.dir().uri+"Pictures",function(C,O){C.type.startsWith("image/")?de("Files"):V("Pictures")})},j=function(k){let C=l+"Group/",O=n.session.store,Y=O.any(f,i.meeting("particpants"));Y||(Y=be(C+"index.ttl#this")),console.log("Participant group: "+Y);let re=D(Y,i.meeting("particpants"),"Particpants",R.iconBase+"noun_339237.svg");O.add(re,o.meeting("view"),"peoplePicker",c),P()},te=function(k){let C={useExisting:f,pane:n.session.paneRegistry.byName("schedule"),view:"schedule",tabTitle:"Schedule poll",noIndexHTML:!0};return G(k,C)},de=function(k){let C={icon:"noun_598334.svg",limit:1,shareTab:!0},O={newInstance:r.sym(f.dir().uri+k+"/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("pictures"),shareTab:!0,tabTitle:k,view:"slideshow",noIndexHTML:!0};return G(C,O)},V=function(k){let C={icon:"noun_681601.svg",limit:1,shareTab:!0},O={newInstance:r.sym(f.dir().uri+"Files/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("materialsFolder"),tabTitle:"Materials",noIndexHTML:!0};return G(C,O)},L=function(){let k={icon:"noun_339237.svg",limit:1,shareTab:!0},C={newInstance:r.sym(f.dir().uri+"Attendees/index.ttl#this"),pane:n.session.paneRegistry.byName("contact"),predicate:i.meeting("attendeeGroup"),tabTitle:"Attendees",instanceClass:i.vcard("Group"),instanceName:S.label(e)+" attendees",noIndexHTML:!0};return G(k,C)},K=function(k){let C={newBase:l+"SharedNotes/",predicate:o.meeting("sharedNotes"),tabTitle:"Shared Notes",pane:n.session.paneRegistry.byName("pad")};return G(k,C)},ne=function(k){ee.askName(t,r,ce,i.foaf("name"),o.meeting("Meeting")).then(function(C){if(!C)return Ze();let O=encodeURIComponent(C),Y={newBase:l+O+"/",predicate:o.meeting("subMeeting"),tabTitle:C,pane:n.session.paneRegistry.byName("meeting")};return G(k,Y)}).catch(function(C){d("Error making new sub-meeting: "+C)})};function G(k,C){return new Promise(function(O,Y){let re=n.session.store;if(!C.useExisting){let fe=re.any(f,C.predicate);if(fe){if(k.limit&&k.limit===1&&!k.shareTab)return d("Already have "+fe+" as "+S.label(C.predicate)),d("Cant have two"),O(null);if(k.shareTab)return console.log("Using existing "+fe+" as "+S.label(C.predicate)),O({me:E,newInstance:fe,instanceClass:C.instanceClass})}}!E&&!C.me&&Y(new Error("Username not defined for new tool")),C.me=C.me||E,C.newInstance=C.useExisting||C.newInstance||re.sym(C.newBase+"index.ttl#this"),C.pane.mintNew(n,C).then(function(fe){let ue=D(fe.newInstance,fe.predicate,fe.tabTitle,fe.pane.icon);fe.view&&re.add(ue,o.meeting("view"),fe.view,c),P(),re.fetcher.putBack(c,{contentType:"text/turtle"}).then(function(se){O(fe)}).catch(function(se){Y(se)})}).catch(function(fe){d(fe),Y(fe)})})}let W=function(k){},U=function(k){let C=l+"Actions/",O=n.session.store;if(O.holds(f,i.meeting("actions"))){console.log("Ignored - already have actions");return}let Y=O.sym(C+"config.ttl"),re=O.sym(C+"config.ttl#this"),fe=O.sym(C+"state.ttl");O.add(re,i.dc("title"),(O.anyValue(f,i.cal("summary"))||"Meeting ")+" actions",Y),O.add(re,i.wf("issueClass"),i.wf("Task"),Y),O.add(re,i.wf("initialState"),i.wf("Open"),Y),O.add(re,i.wf("stateStore"),fe,Y),O.add(re,i.wf("assigneeClass"),i.foaf("Person"),Y),O.add(re,i.rdf("type"),i.wf("Tracker"),Y),O.add(re,i.rdf("type"),i.wf("Tracker"),Y);let ue=D(re,i.meeting("actions"),"Actions",R.iconBase+"noun_17020.svg");A(ue,re,i.meeting("actions"))},z=function(k){let C=l+"Chat/",O=n.session.store;if(O.holds(f,i.meeting("chat"))){console.log("Ignored - already have chat");return}let Y=O.sym(C+"chat.ttl");O.add(Y,i.rdf("type"),i.meeting("Chat"),Y);let re=D(Y,i.meeting("chat"),"Chat",R.iconBase+"noun_346319.svg");A(re,Y,i.meeting("chat"))},H=function(k){let C=n.session.store,O=be(Bl+S.genUuid());if(C.holds(f,i.meeting("videoCallPage"))){console.log("Ignored - already have a videoCallPage");return}C.add(O,i.rdf("type"),i.meeting("VideoCallPage"),c);let Y=D(O,i.meeting("videoCallPage"),"Video call",R.iconBase+"noun_260227.svg");C.add(Y,i.meeting("view"),"iframe",c),P()},Q=function(k){ee.askName(t,r,ce,i.log("uri"),o.rdf("Resource")).then(function(C){if(!C)return Ze();let O=n.session.store,Y=o,re=O.sym(C),fe=D(re,Y.wf("attachment"),S.label(re),null);O.add(fe,Y.meeting("view"),"iframe",c),P()}).catch(function(C){d("Error making new sub-meeting: "+C)})},ae=function(k){let C=n.session.store,O=o,Y=f.dir();if(k.limit&&k.limit===1&&C.holds(f,O.wf("sharingControl"))){d("Ignored - already have "+S.label(v.predicate));return}let re=D(Y,O.wf("sharingControl"),"Sharing",R.iconBase+"noun_123691.svg");C.add(re,O.meeting("view"),"sharing",c),P()},M=function(){let k={noun:"meeting"},C=function(Y,re){s.mintNew(n,{newBase:re}).then(function(fe){let ue=fe.newInstance;ce.removeChild(O);let se=ce.appendChild(t.createElement("p"));se.setAttribute("style","font-size: 140%;"),se.innerHTML="Your <a target='_blank' href='"+ue.uri+"'><b>new meeting</b></a> is ready to be set up. <br/><br/><a target='_blank' href='"+ue.uri+"'>Go to your new meeting.</a>"}).catch(function(fe){ce.removeChild(O),ce.appendChild(ee.errorMessageBlock(t,fe))})},O=Re.selectWorkspace(t,k,C);ce.appendChild(O)},J=[{icon:"noun_339237.svg",maker:j,hint:"Make a group of people",limit:1},{icon:"noun_346777.svg",maker:te,hint:"Make a poll to schedule the meeting"},{icon:"noun_48218.svg",maker:W,limit:1,hint:"Add an agenda list",disabled:!0},{icon:"noun_79217.svg",maker:K,hint:"Add a shared notepad"},{icon:"noun_346319.svg",maker:z,limit:1,hint:"Add a chat channel for the meeting"},{icon:"noun_17020.svg",maker:U,limit:1,hint:"Add a list of action items"},{icon:"noun_260227.svg",maker:H,limit:1,hint:"Add a video call for the meeting"},{icon:"noun_25830.svg",maker:Q,hint:"Attach meeting materials",disabled:!1},{icon:"noun_123691.svg",maker:ae,limit:1,hint:"Control Sharing",disabled:!1},{icon:"noun_66617.svg",maker:ne,hint:"Make a sub meeting",disabled:!1}],$=be("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");en(Ml,r,$.doc().uri,"text/turtle");let oe=I.appendChild(t.createElement("td"));oe.classList.add("meetingToolBarIcons");let ie=oe.appendChild(t.createElement("div"));ie.classList.add("meetingToolIconRow");let ce=I.appendChild(t.createElement("td")),pe=ie.appendChild(t.createElement("img"));pe.classList.add("meetingToolIcon","meetingToolIcon-visible","meetingToolIconAddButton");let ge=!1;pe.setAttribute("src",R.iconBase+"noun_19460_green.svg"),pe.setAttribute("title","Add another tool to the meeting");let Pe=function(k){for(let C=0;C<Te.length;C++)Te[C].classList.toggle("meetingToolIcon-visible",k)},Le=function(k){ge=!ge,pe.classList.toggle("meetingToolIcon-highlighted",ge),Pe(ge)},ye;ve.checkUser().then(k=>{if(k){E=k,pe.addEventListener("click",Le);return}ye=Re.loginStatusBox(t,C=>{C?(E=r.sym(C),ce.removeChild(ye),pe.addEventListener("click",Le)):(console.log("(Logged out)"),E=null)}),ye.setAttribute("style","margin: 0.5em 1em;"),ce.appendChild(ye)});let Te=[];for(let k=0;k<J.length;k++)(function(){let O=J[k],Y=ie.appendChild(t.createElement("img"));Y.classList.add("meetingToolIcon"),Y.setAttribute("src",R.iconBase+O.icon),O.disabled&&Y.classList.add("meetingToolIcon-disabled"),Te.push(Y),Y.tool=O;let re=O.maker;O.disabled||Y.addEventListener("click",function(fe){Me(Y),re(O)})})();let Ze=function(){ge=!1,Pe(!1),pe.classList.remove("meetingToolIcon-highlighted")},Me=function(k){ge=!1,Pe(!1);for(let C=0;C<Te.length;C++)Te[C].classList.remove("meetingToolIcon-highlighted");k.classList.add("meetingToolIcon-visible","meetingToolIcon-highlighted"),pe.classList.remove("meetingToolIcon-highlighted")},He=function(k,C){if(r.holds(C,i.rdf("type"),i.meeting("Tool"))){let O=r.any(C,i.meeting("target")),Y=r.any(C,i.rdfs("label"));Y=Y?Y.value:S.label(O);let re=k.appendChild(t.createElement("div"));re.classList.add("meetingToolLabel"),re.textContent=Y;let fe=r.any(C,i.meeting("icon"));if(fe){let se=k.appendChild(t.createElement("table")).appendChild(t.createElement("tr")),xe=se.appendChild(t.createElement("td")),_e=se.appendChild(t.createElement("td")),we=xe.appendChild(t.createElement("img"));we.classList.add("meetingToolIconImg"),we.setAttribute("src",fe.uri),we.setAttribute("title",Y),_e.appendChild(re)}else k.appendChild(re)}else k.textContent=S.label(C)},x=function(k){let C=t.createElement("div"),O=C.appendChild(t.createElement("p"));return O.classList.add("meetingToolTip"),O.textContent="Tip: "+k,C},b=function(k,C){if(k.innerHTML="",k.style+="border-color: #eed;",k.appendChild(t.createElement("h3")).textContent="Adjust this tab",r.holds(C,i.rdf("type"),i.meeting("Tool"))){let O=be("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");ee.appendForm(document,k,{},C,O,f.doc(),m),ee.deleteButtonWithCheck(t,k,"tab",function(){let re=r.the(f,i.meeting("toolList"));for(let se=0;se<re.elements.length;se++)if(re.elements[se].sameTerm(C)){re.elements.splice(se,1);break}let fe=r.any(C,i.meeting("target")),ue=r.statementsMatching(C).concat(r.statementsMatching(void 0,void 0,C)).concat(r.statementsMatching(f,void 0,fe));r.remove(ue),P()}).classList.add("meetingPaneDeleteButton")}else k.appendChild(t.createElement("h4")).textContent="(No adjustments available)"},y=function(k,C){let O=null,Y,re=null;k.innerHTML="";let fe=function(_e,we){_e||(k.textContent=""+we)},ue=function(_e){let we=k.appendChild(t.createElement("iframe"));we.setAttribute("src",_e.uri),we.classList.add("meetingPaneIframe"),we.setAttribute("allow","microphone camera"),we.setAttribute("name","disable-x-frame-options"),k.style.padding=0},se=function(){let _e={div:k,dom:t};k.appendChild(t.createElement("h4")).textContent="Meeting Participants";let we=function(me){let Ce=[Se(f,i.meeting("particpantGroup"),me,f.doc())];r.updater.update([],Ce,function(ke,Oe,$e){Oe?re=me:d("Cant save participants group: "+$e)})};re=r.any(f,i.meeting("particpantGroup")),ve.checkUser().then(me=>{if(me){let Ce=typeof me=="string"?r.sym(me):me;Dl(Ce).then(function(ke){let $e=ke.find(ze=>ze.label==="private")||ke[0];if(!$e||!$e.index){d("No type index available for this user to load participants.");return}let Ue={defaultNewGroupName:"Meeting Participants",selectedGroup:re};new ee.PeoplePicker(_e.div,$e.index,we,Ue).render()}).catch(function(ke){d("Could not load type indexes for participants: "+ke)})}else d("Please log in to manage meeting participants.")})},xe=function(){k.appendChild(t.createElement("h3")).textContent="Details of meeting";let _e=be("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#main");ee.appendForm(document,k,{},f,_e,f.doc(),fe),k.appendChild(x("Drag URL-bar icons of web pages into the tab bar on the left to add new meeting materials.")),E=ve.currentUser(),E&&r.add(f,i.dc("author"),E,c);let we={noun:"meeting",me:E,statusArea:k,div:k,dom:t};Re.registrationControl(we,f,i.meeting("Meeting")).then(function(Ue){console.log("Registration control finsished.")});let me={};Nn.manageParticipation(t,k,c,f,E,me);let Ce=k.appendChild(t.createElement("div")),ke=Ce.appendChild(t.createElement("img"));ke.classList.add("meetingToolIconSpawn"),ke.setAttribute("src",R.iconBase+"noun_145978.svg"),ke.setAttribute("title","Make a fresh new meeting"),ke.addEventListener("click",M);let Oe=Ce.appendChild(t.createElement("a"));Oe.setAttribute("href","https://github.com/solid/solid-panes"),Oe.setAttribute("target","_blank");let $e=Oe.appendChild(t.createElement("img"));$e.classList.add("meetingToolIconForkGithub"),$e.setAttribute("src",R.iconBase+"noun_368567.svg"),$e.setAttribute("title","Fork me on github")};if(r.holds(C,i.rdf("type"),i.meeting("Tool"))){let _e=r.any(C,i.meeting("target"));if(_e.sameTerm(f)&&!r.any(C,i.meeting("view")))xe();else{let we=r.any(C,i.meeting("view"));we=we?we.value:null,we==="details"?xe():we==="peoplePicker"?se():we==="iframe"?ue(_e):(O=we?n.session.paneRegistry.byName(we):null,Y=k.appendChild(t.createElement("table")),Y.classList.add("meetingPaneTableMain"),n.getOutliner(t).GotoSubject(_e,!0,O,!1,void 0,Y))}}else C.sameTerm(f)?xe():C.sameTerm(C.doc())&&!r.holds(C,o.rdf("type"),o.meeting("Chat"))&&!r.holds(C,o.rdf("type"),o.meeting("PaneView"))||(Y=k.appendChild(t.createElement("table")),n.getOutliner(t).GotoSubject(C,!0,void 0,!1,void 0,Y))},v={dom:t};v.predicate=i.meeting("toolList"),v.subject=e,v.ordered=!0,v.orientation=1,v.renderMain=y,v.renderTab=He,v.renderTabSettings=b,v.backgroundColor=r.anyValue(e,i.ui("backgroundColor"))||"#ddddcc";let F=h.appendChild(Vn.tabWidget(v));return Un.preventBrowserDropEvents(t),ee.makeDropTarget(F.tabContainer,T,X),ee.makeDropTarget(oe,T,X),u}};var ql={icon:R.iconBase+"noun_688606.svg",name:"tabbed",audience:[o.solid("PowerUser")],label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return o.meeting("Cluster").uri in r?"Tabbed":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=t.createElement("div");return(async()=>{if(!r.fetcher)throw new Error("Store has no fetcher");await r.fetcher.load(e),i.appendChild(Vn.tabWidget({dom:t,subject:e,predicate:r.any(e,o.meeting("predicate"))||o.meeting("toolList"),ordered:!0,orientation:r.anyValue(e,o.meeting("orientation"))||"0",renderMain:(a,s)=>{a.innerHTML="";let d=a.appendChild(n.dom.createElement("table"));n.getOutliner(n.dom).GotoSubject(s,!0,null,!1,void 0,d)},renderTab:(a,s)=>{let d=r.the(e,o.meeting("predicate"));a.appendChild(ee.personTR(n.dom,d,s,{}))},backgroundColor:r.anyValue(e,o.ui("backgroundColor"))||"#ddddcc"}))})(),i}},Xa=ql;var Ve=o,Dr={icon:R.iconBase+"noun_346319.svg",name:"chat",audience:[Ve.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.each(e,Ve.wf("message")).length;return r>0?"Chat ("+r+")":t.holds(e,Ve.rdf("type"),Ve.meeting("Chat"))?"Meeting chat":t.holds(void 0,Ve.rdf("type"),Ve.foaf("ChatChannel"),e)?"IRC log":null},mintClass:Ve.meeting("Chat"),mintNew:function(e,n){if(!confirm(`short Chat is deprecated in favor of long Chat.
Embedded chat for comments and existing short Chats will work.
You can report any issues at https://github.com/SolidOS/chat-pane ?

Do you really want to create a new deprecated short Chat?`))return;let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();return t.add(i,Ve.rdf("type"),Ve.meeting("Chat"),a),t.add(i,Ve.dc("title"),"Chat",a),t.add(i,Ve.dc("created"),new Date,a),n.me&&t.add(i,Ve.dc("author"),n.me,a),new Promise(function(s,d){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(m,f,c){f?s(n):d(new Error("FAILED to save new tool at: "+m+" : "+c))})})},render:function(e,n){let t=n.session.store,r=n.dom,i=function(f,c){let l=r.createElement("pre");l.setAttribute("style","background-color: "+c||"#eed;"),a.appendChild(l),l.appendChild(r.createTextNode(f))},a=r.createElement("div");a.setAttribute("class","chatPane");let s={},d;if(t.holds(e,Ve.rdf("type"),Ve.meeting("Chat")))d=e.doc();else if(t.any(e,o.wf("message"))){let m=q.any(e,o.wf("message"));if(!m||m.termType!=="NamedNode")throw new Error("Chat subject has no linked message store");d=m.doc()}else if(t.holds(void 0,Ve.rdf("type"),Ve.foaf("ChatChannel"),e)||t.holds(e,Ve.rdf("type"),Ve.foaf("ChatChannel"))){let m=function(){let f=new _n("IRC log entries",null),c={};return["chan","msg","date","list","pred","creator","content"].forEach(function(u){f.vars.push(c[u]=dn(u))}),f.pat.add(c.chan,Ve.foaf("chatEventList"),c.list),f.pat.add(c.list,c.pred,c.msg),f.pat.add(c.msg,Ve.dc("date"),c.date),f.pat.add(c.msg,Ve.dc("creator"),c.creator),f.pat.add(c.msg,Ve.dc("description"),c.content),f};d=e.doc(),s.query=m()}else i("Unknown chat type","#eed");if(!d)throw new Error("Unable to determine chat message store");return a.appendChild(It(r,t,e,d,s)),t.updater.addDownstreamChangeListener(d,function(){ee.refreshTree(a)}),a}};function An(...e){console.log(...e)}var Ht=o.meeting("LongChat"),Qa="index.ttl#this",zl="noun_344563.svg",Br=ir.sidebarComponentStyle||" padding: 0.5em; width: 100%;",Or=ir.sidebarStyle||"overflow-x: auto; overflow-y: auto; border-radius: 1em; border: 0.1em solid white;",lt={CHAT_LOCATION_IN_CONTAINER:Qa,icon:R.iconBase+"noun_1689339.svg",name:"long chat",label:function(e,n){let t=n.session.store;return t.holds(e,o.rdf("type"),o.meeting("LongChat"))?"Chat channnel":t.holds(e,o.rdf("type"),o.sioc("Thread"))?"Thread":t.any(e,o.sioc("content"))&&t.any(e,o.dct("created"))?"message":null},mintClass:Ht,mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+Qa),a=i.doc();t.add(i,o.rdf("type"),o.meeting("LongChat"),a),t.add(i,o.dc("title"),"Chat channel",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let s=(d,m,f)=>`
    @prefix : <#>.
    @prefix acl: <http://www.w3.org/ns/auth/acl#>.
    @prefix foaf: <http://xmlns.com/foaf/0.1/>.
    @prefix lon: <./${m}>.

    :ControlReadWrite
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agent <${d.uri}>;
        acl:default lon:;
        acl:mode acl:Control, acl:Read, acl:Write.
    :Read
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass foaf:Agent;
        acl:default lon:;
        acl:mode acl:Read.
    :Read${f}
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass acl:AuthenticatedAgent;
        acl:default lon:;
        acl:mode acl:Read, acl:${f}.`;return new Promise(function(d,m){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(f,c,l){c?d(n):m(new Error("FAILED to save new chat channel at: "+f+" : "+l))}).then(f=>new Promise((c,l)=>{n.me&&(t.fetcher.webOperation("PUT",n.newBase+".acl",{data:s(n.me,"","Append"),contentType:"text/turtle"}),t.fetcher.webOperation("PUT",n.newBase+"index.ttl.acl",{data:s(n.me,"index.ttl","Write"),contentType:"text/turtle"})),c(n)}))})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=`
    @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
    @prefix solid: <http://www.w3.org/ns/solid/terms#>.
    @prefix ui: <http://www.w3.org/ns/ui#>.
    @prefix : <#>.

    :this
      <http://purl.org/dc/elements/1.1/title> "Chat preferences" ;
      a ui:Form ;
      ui:parts ( :colorizeByAuthor :expandImagesInline :newestFirst :inlineImageHeightEms
                  :shiftEnterSendsMessage :authorDateOnLeft :showDeletedMessages).

    :colorizeByAuthor a ui:TristateField; ui:property solid:colorizeByAuthor;
    ui:label "Color user input by user".

    :expandImagesInline a ui:TristateField; ui:property solid:expandImagesInline;
    ui:label "Expand image URLs inline".

    :newestFirst a ui:TristateField; ui:property solid:newestFirst;
    ui:label "Newest messages at the top".

    :inlineImageHeightEms a ui:IntegerField; ui:property solid:inlineImageHeightEms;
    ui:label "Inline image height (lines)".

    :shiftEnterSendsMessage a ui:TristateField; ui:property solid:shiftEnterSendsMessage;
    ui:label "Shift-Enter sends message".

    :authorDateOnLeft a ui:TristateField; ui:property solid:authorDateOnLeft;
    ui:label "Author & date of message on left".

    :showDeletedMessages a ui:TristateField; ui:property solid:showDeletedMessages;
    ui:label "Show placeholders for deleted messages".
`,s=i.sym("https://solid.github.io/solid-panes/longCharPane/preferencesForm.ttl#this"),d=s.doc();i.holds(void 0,void 0,void 0,d)||en(a,i,d.uri,"text/turtle");let m=i.statementsMatching(null,o.ui.property,null,d).map(M=>M.object);async function f(M){let{dom:J,noun:$}=M,oe=J.createElement("div");oe.appendChild(c(oe)),oe.style=Br,oe.style.minWidth="25em",oe.style.maxHeight=D;let ie=oe.appendChild(J.createElement("table")),ce=ie.appendChild(J.createElement("tr")),pe=ie.appendChild(J.createElement("tr")),ge=ve.currentUser();return ge&&(await Re.registrationControl({noun:$,me:ge,statusArea:pe,dom:J,div:ce},I,Ht),An("Registration control finsished."),oe.appendChild(or.renderPreferencesForm(I,Ht,s,{noun:$,me:ge,statusArea:pe,div:oe,dom:J,kb:i}))),oe}function c(M){function J(){M.parentNode.removeChild(M)}let $=ee.button(n.dom,R.iconBase+"noun_1180156.svg","close",J);return $.style.float="right",$.style.margin="0.7em",delete $.style.backgroundColor,$}async function l(M){W||(W=await f({dom:r,noun:"chat room"}));let J=W;J&&(te.contains(J)?(J.remove(),W=null):te.appendChild(J))}function u(M,J){let $=r.createElement("div"),oe=ve.currentUser();if(!oe)return $;let ie={div:$,dom:r,noun:J,statusArea:$,me:oe,refreshTarget:M},pe=[n.session.paneRegistry.byName("chat")];return zn.newThingUI(ie,n,pe),$}async function p(M,J){let $=r.createElement("div"),oe={dom:r,div:$,noun:J};return await Re.registrationList(oe,{public:!0,private:!0,type:M}),$.appendChild(u($,J)),$}let g=null;async function h(M){if(!g){let $=r.createElement("div");g=$,$.style=Br,$.style.maxHeight=D,$.appendChild(c($)),$.appendChild(await p(o.meeting("LongChat"),"chat"))}let J=g;J&&(T.contains(J)?J.remove():T.appendChild(J))}let w=null;function _(M){if(!w){let $=r.createElement("div");w=$,$.style=Br,$.style.maxHeight=D,$.appendChild(c($));let oe=ve.currentUser();if(!oe){alert("Should be logeed in for partipants panel");return}Nn.manageParticipation(r,$,I.doc(),I,oe,{})}let J=w;J&&(T.contains(J)?(J.remove(),w=null):T.appendChild(J))}let I=e,E=null,P=null;if(i.holds(e,o.rdf("type"),o.meeting("LongChat")))An("@@@ Chat channnel");else if(i.holds(e,o.rdf("type"),o.sioc("Thread"))){An("Thread is subject "+e.uri),P=e;let M=e,J=i.the(null,o.sioc("has_reply"),M,M.doc());if(!J)throw new Error("Thread has no root message "+P);if(I=i.any(null,o.wf("message"),J),!I)throw new Error("Thread root has no link to chatChannel")}else if(i.any(e,o.sioc("content"))&&i.any(e,o.dct("created"))&&(An("message is subject "+e.uri),E=e,I=i.any(null,o.wf("message"),E),!I))throw new Error("Message has no link to chatChannel");let A=r.createElement("div"),D="20cm",B=A.appendChild(r.createElement("table"));B.style.maxHeight='12"';let N=B.appendChild(r.createElement("tr")),T=N.appendChild(r.createElement("td")),X=N.appendChild(r.createElement("td")),j=N.appendChild(r.createElement("td")),te=N.appendChild(r.createElement("td")),de=B.appendChild(r.createElement("tr"));T.style=Or,T.style.paddingRight="1em",j.style=Or,j.style.paddingLeft="1em",te.style=Or,te.style.paddingLeft="1em",de.appendChild(r.createElement("td"));let V=de.appendChild(r.createElement("td"));de.appendChild(r.createElement("td"));let K=ee.button(r,R.iconBase+"noun_339237.svg","participants ...");V.appendChild(K),K.addEventListener("click",_);let G=ee.button(r,R.iconBase+"noun_1689339.svg","List of other chats ...");V.appendChild(G),G.addEventListener("click",h);let W=null,U=ee.button(r,R.iconBase+zl,"Setting ...");V.appendChild(U),U.style.float="right",U.addEventListener("click",l),A.setAttribute("class","chatPane");let z={infinite:!0},H={noun:"chat room",div:A,dom:r,me:ve.currentUser()};async function Q(M,J){An("@@@@ showThread thread "+M);let $={infinite:!0};$.thread=M,$.includeRemoveButton=!0,$.authorDateOnLeft=J.authorDateOnLeft,$.newestFirst=J.newestFirst,j.innerHTML="",An("Options for showThread message Area",$);let oe=await ar(r,i,I,$);oe.style.resize="both",oe.style.overflow="auto",oe.style.maxHeight=D,j.appendChild(oe)}async function ae(){let M;try{M=await or.getPreferencesForClass(I,Ht,m,H)}catch($){ee.complain(H,$)}for(let $ in M)z[$.split("#")[1]]=M[$];E&&(z.selectedMessage=E),t?.solo&&(z.solo=!0),P?z.thread=P:z.showThread=Q;let J=await ar(r,i,I,z);J.style.resize="both",J.style.overflow="auto",J.style.maxHeight=D,X.appendChild(J)}return ae().then(()=>An("async - chat pane built")),A}};var $l=await(await fetch(he(`@prefix dc: <http://purl.org/dc/elements/1.1/>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix cal: <http://www.w3.org/2002/12/cal/ical#>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix sched: <http://www.w3.org/ns/pim/schedule#>.

   cal:Vevent ui:annotationForm <#form2>, <#form3>; ui:creationForm <#form1> .

<#bigForm>
    dc:title
       "Schedule event (single form).";
    a    ui:Group;
    ui:parts ( <#form1> <#form2> <#form3> ).

<#form1>
    dc:title
       "Schedule an event (wizard)";
    a    ui:Form;
    ui:parts (
        <#form1header>
        <#eventTitle>
        <#eventLocation>
        <#eventType>
        <#eventSwitch>
        <#eventComment>
        <#eventAuthor> ).

<#form1header> a ui:Heading; ui:contents "Schedule an event" .

<#eventTitle>
    a    ui:SingleLineTextField;
    ui:maxLength
       "128";
    ui:property
       cal:summary;
    ui:size
       "40".

<#eventLocation>
    a    ui:SingleLineTextField;
    ui:maxLength
       "512";
    ui:property
       cal:location;
    ui:size
       "40".

<#eventType> a ui:BooleanField;
  ui:property sched:allDay;
  ui:default true . # Used to be the only way

<#eventSwitch> a ui:Options;
  ui:dependingOn sched:allDay;
  ui:case [ ui:for true; ui:use <#AllDayForm> ];
  ui:case [ ui:for false; ui:use <#NotAllDayForm> ].

  <#AllDayForm> a ui:IntegerField ;
    ui:property sched:durationInDays;
    ui:label "How many days?";
    ui:min 1;
    ui:default 1 .

  <#NotAllDayForm> a ui:IntegerField ;
    ui:property sched:durationInMinutes;
    ui:label "Duration (mins)";
    ui:min 5;
    ui:default 55 .

<#eventComment>
    a    ui:MultiLineTextField;
#    ui:maxLength
#       "1048";
#    ui:size
#       "40".
    ui:property
       cal:comment.

<#eventAuthor>
   a ui:Multiple; ui:min 1; ui:part <#eventAuthorGroup>; ui:property dc:author.

   <#eventAuthorGroup> a ui:Group; ui:parts ( <#authorName> <#authorEmail> ) .
   <#authorName> a ui:SingleLineTextField; ui:property foaf:name .
   <#authorEmail> a ui:EmailField; ui:label "email"; ui:property foaf:mbox .


#####################

<#form2> dc:title "Select possible days or times"; a ui:Form;
        ui:parts ( <#id1118132113134> <#possibleSwitch> ).

    <#id1118132113134> a ui:Heading; ui:contents "Time proposals" .

    <#possibleSwitch> a ui:Options;
      ui:dependingOn sched:allDay;
      ui:case [ ui:for true; ui:use <#AllDayForm2> ];
      ui:case [ ui:for false; ui:use <#NotAllDayForm2> ].

      <#AllDayForm2>
      a ui:Multiple; ui:min 2; ui:part <#posssibleDate>; ui:property sched:option.
        <#posssibleDate> a ui:DateField; ui:property cal:dtstart; ui:label "date".

      <#NotAllDayForm2>
      a ui:Multiple; ui:min 2; ui:part <#posssibleTime>; ui:property sched:option.
        <#posssibleTime> a ui:DateTimeField; ui:property cal:dtstart; ui:label "date and time".

   ##################################

   <#form3> dc:title "Select invited people"; a ui:Form; ui:parts  ( <#id1118132113135> <#id1417314641301b> ) .
<#id1417314641301b>
   a ui:Multiple; ui:min 1; ui:part <#id1417314674292b>; ui:property sched:invitee.
   <#id1417314674292b> a ui:EmailField; ui:label "email"; ui:property foaf:mbox .
   <#id1118132113135> a ui:Heading; ui:contents "Who to invite" .

# ENDS
`,"text/turtle"))).text();Be(he(`.schedule-pane__table {
  border-collapse: collapse;
  background-color: white;
  min-width: 40rem;
  min-height: 13rem;
}

.schedule-pane__button {
  background-color: #eef;
  padding: var(--spacing-xs, 0.5rem);
  border: .5rem solid white;
  font-size: 100%;
}

.schedule-pane__button-icon {
  width: var(--icon-sm, 1.8rem);
  height: var(--icon-sm, 1.8rem);
}

.schedule-pane__nav {
  text-align: center;
  vertical-align: middle;
  padding-top: 4rem;
}

.schedule-pane__cell {
  padding: var(--spacing-xs, 0.3rem);
  text-align: center;
}

.schedule-pane__table .schedule-pane__form-heading {
  font-size: 110% !important;
  font-weight: bold;
  color: #888888;
  padding: 0.2em;
  margin: 0.7em 0 !important;
}

.schedule-pane__table .schedule-pane__form-heading--time-proposals {
  margin-bottom: 0 !important;
}

.schedule-pane__table .schedule-pane__panel--time-proposals {
  padding-bottom: 0.9rem !important;
  border: none !important;
}

.schedule-pane__table .schedule-pane__panel {
  padding-left: 0.75rem !important;
  padding-right: 0.75rem !important;
  margin-right: 0.5rem;
  max-width: 100%;
  box-sizing: border-box;
}

@media (max-width: 1024px) {
  .schedule-pane__table .schedule-pane__main-cell {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-sizing: border-box;
  }

  .schedule-pane__table .schedule-pane__field-row--comment {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .schedule-pane__table .schedule-pane__field-row--comment > div:first-child {
    width: auto !important;
    min-width: 4.5rem;
    flex: 0 1 6rem;
  }

  .schedule-pane__table .schedule-pane__field-value--comment {
    min-width: 0;
    flex: 1 1 20rem;
    width: auto;
    padding-right: 0.25rem;
    box-sizing: border-box;
  }

  .schedule-pane__table .schedule-pane__field-value--comment .schedule-pane__form-control--textarea,
  .schedule-pane__table .schedule-pane__field-row--comment .schedule-pane__form-control--textarea {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
    margin: 0.2rem 0 0 !important;
    padding: 0.5rem 0.45rem;
  }
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table {
  min-width: 0;
  width: 100%;
  min-height: 0;
  table-layout: fixed;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table td,
div.schedule-pane[data-layout='mobile'] .schedule-pane__table th {
  min-width: 0;
  max-width: 100%;
  overflow-wrap: anywhere;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__main-cell {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  box-sizing: border-box;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--compact {
  align-items: flex-start;
  gap: 0.25rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--compact .formFieldName {
  width: auto !important;
  min-width: 4.5rem;
  flex: 0 1 5.5rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--compact .formFieldValue {
  min-width: 0;
  flex: 1 1 auto;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--compact .schedule-pane__form-control {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box;
  margin: 0.2rem 0 0 !important;
  font-size: var(--font-size-sm, 0.875rem);
  padding: 0.35rem 0.45rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment {
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch;
  gap: 0.25rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment .formFieldName,
div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment > div:first-child {
  width: auto !important;
  min-width: 0;
  flex: 0 0 auto;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment .formFieldValue,
div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment > div:last-child,
div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-value--comment {
  min-width: 0;
  display: block;
  flex: 1 1 auto;
  width: 100%;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-row--comment .schedule-pane__form-control--textarea,
div.schedule-pane[data-layout='mobile'] .schedule-pane__table .schedule-pane__field-value--comment .schedule-pane__form-control--textarea {
  width: 100% !important;
  max-width: 100% !important;
  min-width: 0 !important;
  box-sizing: border-box;
  margin: 0 !important;
  font-size: var(--font-size-sm, 0.875rem);
  padding: 0.35rem 0.45rem;
  min-height: 5.5rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__button {
  padding: 0.4rem;
  border-width: 0.2rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__button-icon {
  width: 1.35rem;
  height: 1.35rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__nav {
  padding-top: 1rem;
}

div.schedule-pane[data-layout='mobile'] .schedule-pane__cell {
  padding: 0.2rem;
}

@media (max-width: 576px) {
  .schedule-pane__table {
    min-width: 0;
    width: 100%;
    min-height: 0;
    table-layout: fixed;
  }

  .schedule-pane__table td,
  .schedule-pane__table th {
    min-width: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .schedule-pane__table .schedule-pane__main-cell {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-sizing: border-box;
  }

  .schedule-pane__table .schedule-pane__field-row--compact {
    align-items: flex-start;
    gap: 0.25rem;
  }

  .schedule-pane__table .schedule-pane__field-row--compact .formFieldName {
    width: auto !important;
    min-width: 4.5rem;
    flex: 0 1 5.5rem;
  }

  .schedule-pane__table .schedule-pane__field-row--compact .formFieldValue {
    min-width: 0;
    flex: 1 1 auto;
  }

  .schedule-pane__table .schedule-pane__field-row--compact .schedule-pane__form-control {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
    margin: 0.2rem 0 0 !important;
    font-size: var(--font-size-sm, 0.875rem);
    padding: 0.35rem 0.45rem;
  }

  .schedule-pane__table .schedule-pane__field-row--comment {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch;
    gap: 0.25rem;
  }

  .schedule-pane__table .schedule-pane__field-row--comment .formFieldName,
  .schedule-pane__table .schedule-pane__field-row--comment > div:first-child {
    width: auto !important;
    min-width: 0;
    flex: 0 0 auto;
  }

  .schedule-pane__table .schedule-pane__field-row--comment .formFieldValue,
  .schedule-pane__table .schedule-pane__field-row--comment > div:last-child,
  .schedule-pane__table .schedule-pane__field-value--comment {
    min-width: 0;
    display: block;
    flex: 1 1 auto;
    width: 100%;
  }

  .schedule-pane__table .schedule-pane__field-row--comment .schedule-pane__form-control--textarea,
  .schedule-pane__table .schedule-pane__field-value--comment .schedule-pane__form-control--textarea {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    box-sizing: border-box;
    margin: 0 !important;
    font-size: var(--font-size-sm, 0.875rem);
    padding: 0.35rem 0.45rem;
    min-height: 5.5rem;
  }

  .schedule-pane__button {
    padding: 0.4rem;
    border-width: 0.2rem;
  }

  .schedule-pane__button-icon {
    width: 1.35rem;
    height: 1.35rem;
  }

  .schedule-pane__nav {
    padding-top: 1rem;
  }

  .schedule-pane__cell {
    padding: 0.2rem;
  }
}
`,"text/css"));Be(he(`:root {
  --icon-sm: 1.8em;
  --color-background-row-default: white;
  --color-background-row-alternate: #f0f0f0;
}`,"text/css"));var dt=o,Vl=[dt.sched("No"),dt.sched("Maybe"),dt.sched("Yes")];function jn(e){let n=e.shift();n&&n()}var qr={icon:R.iconBase+"noun_346777.svg",name:"schedule",audience:[dt.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/schedule#SchedulableEvent"]?"Scheduling poll":null},mintClass:dt.sched("SchedulableEvent"),mintNew:function(e,n){return new Promise(function(t,r){let i=o,a=e.session.store,s=[],d=!1,m=n.newBase,f=n.useExisting||be(n.newBase+"index.ttl#this"),c=function(B){d||(d=!0,s.length=0,console.log("Error in Schedule Pane: Error constructing new scheduler: "+B),r(new Error(B)))},l=function(B,N){B||c(N)},u=function(B,N,T){let X=kt(),j=sn("http://www.w3.org/ns/auth/acl#"),te=X.sym(N+"#a1"),de=X.sym(N),V=X.sym(B);return X.add(te,o.rdf("type"),j("Authorization"),de),X.add(te,j("accessTo"),V,de),X.add(te,j("agent"),w,de),X.add(te,j("mode"),j("Read"),de),X.add(te,j("mode"),j("Write"),de),X.add(te,j("mode"),j("Control"),de),te=X.sym(N+"#a2"),X.add(te,o.rdf("type"),j("Authorization"),de),X.add(te,j("accessTo"),V,de),X.add(te,j("agentClass"),i.foaf("Agent"),de),X.add(te,j("mode"),j("Read"),de),T&&X.add(te,j("mode"),j("Write"),de),vt(de,X,N,"text/turtle")},p=function(N,T,X){let j=!1,te=function(V,L){j||(j=!0,X(V,L))},de=a.any(a.sym(N),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(de){let V=u(N,de.uri,T);return g.webOperation("PUT",de.uri,{data:V,contentType:"text/turtle"}).then(L=>te(!0)).catch(L=>{te(!1,L.message)})}else return g.load(N).then(()=>{let V=a.any(a.sym(N),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(!V)throw new Error("No Link rel=ACL header for "+N);let L=u(N,V.uri,T);return g.webOperation("PUT",V.uri,{data:L,contentType:"text/turtle"})}).then(V=>te(!0)).catch(V=>{te(!1,V.message)})},g=a.fetcher,h=a.updater,w=n.me||ve.currentUser();if(!w){console.log("MUST BE LOGGED IN"),alert("NOT LOGGED IN"),r(new Error("Schedule pane requires a logged-in user"));return}let _=f.dir();if(!_)throw new Error("Schedule pane needs a base directory to mint a new poll");let I=_.uri,E,P;if(n.useExisting){P=n.useExisting;let B=f.dir();if(!B)throw new Error("Existing schedule instance needs a containing directory");if(m=B.uri,E=P.doc(),n.newBase)throw new Error("mint new scheduler: Illegal - have both new base and existing event")}else E=a.sym(m+"details.ttl"),P=a.sym(E.uri+"#event");let A=a.sym(m+"results.ttl"),D=n.noIndexHTML?[]:[{local:"index.html",contentType:"text/html"}];for(let B=0;B<D.length;B++){let N=D[B];(function(j){s.push(function(){let te=m+j.local;console.log("Copying "+I+j.local+" to "+te);let de=function(){p(te,!1,function(V,L){V?jn(s):(l(V,"FAILED to set ACL "+te+" : "+L),console.log("FAILED to set ACL "+te+" : "+L))})};a.fetcher.webCopy(I+j.local,m+j.local,j.contentType).then(()=>ve.checkUser()).then(V=>{w=V,de()}).catch(V=>{console.log("FAILED to copy "+I+j.local+" : "+V.message),l(!1,"FAILED to copy "+I+j.local+" : "+V.message)})})})(N)}s.push(function(){a.add(P,i.rdf("type"),i.sched("SchedulableEvent"),E),w&&(a.add(P,i.dc("author"),w,E),a.add(P,i.foaf("maker"),w,E)),a.add(P,i.dc("created"),qn(new Date().toISOString(),be("http://www.w3.org/2001/XMLSchema#dateTime")),E),a.add(P,i.sched("resultsDocument"),E),h.put(E,a.statementsMatching(void 0,void 0,void 0,E),"text/turtle",function(N,T,X){T?jn(s):(l(T,"FAILED to save new scheduler at: "+E+" : "+X),console.log("FAILED to save new scheduler at: "+E+" : "+X))})}),s.push(function(){a.fetcher.webOperation("PUT",A.uri,{data:"",contentType:"text/turtle"}).then(()=>{jn(s)}).catch(B=>{l(!1,"Failed to initialize empty results file: "+B.message)})}),s.push(function(){p(A.uri,!0,function(B,N){l(B,"Failed to set Read-Write ACL on results file: "+N),B&&jn(s)})}),s.push(function(){p(E.uri,!1,function(B,N){l(B,"Failed to set read ACL on configuration file: "+N),B&&jn(s)})}),s.push(function(){d||(d=!0,console.log("Finished minting new scheduler"),n.newInstance=P,t(n))}),jn(s)})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=e,s="app-when-can-we.w3.org";function d(ie){let ce=n.environment??{};ie.dataset.layout=ce.layout??"desktop"}let m=r.fetcher,f=r.updater,c=!1,l=e,u=e.doc(),p=u.dir();if(!p)throw new Error("Schedule pane needs a containing directory for its details document");let g=p.uri,h=be(g+"results.ttl"),w="https://solidos.github.io/solid-panes/schedule/formsForSchedule.ttl",_=r.sym(w+"#form1"),I=r.sym(w+"#form2"),E=r.sym(w+"#form3");en($l,r,w,"text/turtle");let P=function(ie,ce){ie||U.appendChild(ee.errorMessageBlock(t,ce,"pink"))},A=function(ie){for(;ie.firstChild;)ie.removeChild(ie.firstChild);return ie},D=function(ie,ce){let pe=r.any(ce,o.ui("backgroundColor"));pe&&(ie.classList.add("schedule-pane__cell"),ie.setAttribute("style","background-color: "+pe+";"))},B=null;ve.checkUser().then(ie=>{B=ie??null,H&&H.refresh(),ie&&c&&(c=!1,de())}),console.log("me: "+B);let N=function(){let ie=Re.newAppInstance(t,{noun:"scheduler",appPathSegment:s},function(ce,pe){return T(be(ce||pe))});return ie.firstChild instanceof HTMLElement&&ie.firstChild.classList.add("schedule-pane__button"),ie},T=function(ie){let ce=r.any(ie,i.space("uriPrefix")),pe="";ce?pe=ce.value:pe=ie.uri.split("#")[0],pe.slice(-1)!=="/"&&(yt.error(s+": No / at end of uriPrefix "+pe),pe=pe+"/");let ge=new Date;pe+=s+"/id"+ge.getTime()+"/",X(l,pe)},X=function(ie,ce){let pe={thisInstance:ie,newBase:ce};qr.mintNew(n,pe).then(function(ge){if(!ge.newInstance)throw new Error("New scheduler instance was not returned");let Pe=U.appendChild(t.createElement("p"));Pe.setAttribute("style","font-size: 140%;"),Pe.innerHTML="Your <a href='"+ge.newInstance.uri+"'><b>new scheduler</b></a> is ready to be set up. <br/><br/><a href='"+ge.newInstance.uri+"'>Say when you what days work for you.</a>"}).catch(function(ge){P(!1,"Error createing new scheduler at "+pe.newInstance+": "+ge)})},j=function(){console.log("getforms()"),te()},te=function(){console.log("getDetails()"),m.nowOrWhenFetched(u.uri,void 0,function(ie,ce){if(console.log("getDetails() ok? "+ie),!ie)return P(ie,ce);de()})},de=function(){console.log("showAppropriateDisplay()"),ve.checkUser().then(ce=>{if(!ce)return V();if(!r.updater.editable(u.uri,r)||r.holds(e,i.rdf("type"),i.wf("TemplateInstance"))){L();return}r.any(e,i.sched("ready"))?G():ne()})},V=function(){A(ae);let ce={div:U,dom:t};Re.ensureLoggedIn(ce).then(pe=>{B=pe.me??null,c=!1,de()})},L=function(){let ce=A(ae);ce.appendChild(Re.newAppInstance(t,{noun:"poll",appPathSegment:s},function(Le,ye){return T(be(Le||ye))})),ce.appendChild(t.createElement("hr"));let pe=ce.appendChild(t.createElement("p"));pe.textContent="Where would you like to store the data for the poll?  Give the URL of the directory where you would like the data stored.";let ge=ce.appendChild(t.createElement("input"));ge.setAttribute("type","text"),ge.size=80,ge.label="base URL",ge.autocomplete="on",ce.appendChild(t.createElement("br"));let Pe=ce.appendChild(t.createElement("button"));Pe.classList.add("schedule-pane__button"),Pe.textContent="Start new poll at this URI",Pe.addEventListener("click",function(Le){let ye=ge.value;ye.slice(-1)!=="/"&&(ye+="/"),X(l,ye)})},K=t.createElement("button"),ne=function(){A($);let ie=ae;r.any(e,i.sched("allDay"))||r.add(e,i.sched("allDay"),qn("true",be("http://www.w3.org/2001/XMLSchema#boolean")),u);let ce=!0,pe=0,ge=!1,Pe=function(b){return!!b.querySelector("input, select, textarea, button")},Le=function(b,y){if(!b)return y;let v=(b.value||"").toLowerCase();return v==="true"||v==="1"?!0:v==="false"||v==="0"?!1:y},ye=function(b){let y=Le(r.any(e,i.sched("allDay")),!0),v=r.sym(w+(y?"#AllDayForm2":"#NotAllDayForm2"));ee.appendForm(document,b,{},e,v,u,P)},Te=function(b,y=!1){if(Array.from(b.querySelectorAll("input, select, textarea")).forEach(ue=>{ue.classList.add("schedule-pane__form-control"),ue.tagName.toLowerCase()==="textarea"&&ue.classList.add("schedule-pane__form-control--textarea")}),Array.from(b.querySelectorAll('div[style*="border: 0.05em solid"]')).forEach(ue=>{ue.classList.add("schedule-pane__panel")}),Array.from(b.querySelectorAll("h3")).forEach(ue=>{ue.classList.add("schedule-pane__form-heading"),(ue.textContent||"").trim().toLowerCase()==="time proposals"&&(ue.classList.add("schedule-pane__form-heading--time-proposals"),ue.closest(".schedule-pane__panel")?.classList.add("schedule-pane__panel--time-proposals"))}),!y)return;Array.from(b.querySelectorAll(".formFieldName")).forEach(ue=>{let se=ue.parentElement,xe=(ue.textContent||"").trim().toLowerCase();se&&((xe==="summary"||xe==="location")&&se.classList.add("schedule-pane__field-row--compact"),xe==="comment"&&se.classList.add("schedule-pane__field-row--comment"))});let re=b.querySelector("textarea")?.parentElement?.parentElement,fe=re?.parentElement;fe&&fe.classList.add("schedule-pane__field-row--comment"),re&&re.classList.add("schedule-pane__field-value--comment")},Ze=function(b){let y=b.firstElementChild;return!y||b.childElementCount!==1?b:y};if(ce){let b=[_,I,E],y=[];pe=0;for(let C=0;C<b.length;C++){let O=t.createElement("div");ee.appendForm(document,O,{},e,b[C],u,P),Te(O,C===0),C===1&&!Pe(O)&&(ye(O),Te(O)),y.push(Ze(O))}let v=function(){A(ae).appendChild(y[pe]),pe===0?F.setAttribute("disabled",""):F.removeAttribute("disabled"),pe===y.length-1?(k.setAttribute("disabled",""),ge||($.appendChild(He),$.appendChild(K),ge=!0)):k.removeAttribute("disabled")},F=A(J).appendChild(t.createElement("button"));F.classList.add("schedule-pane__button"),F.textContent="<- go back",F.addEventListener("click",function(C){pe>0&&(pe-=1,v())},!1);let k=A(oe).appendChild(t.createElement("button"));k.classList.add("schedule-pane__button"),k.textContent="continue ->",k.addEventListener("click",function(C){pe<y.length-1&&(pe+=1,v())},!1),v()}else{let b=ie.appendChild(t.createElement("table"));ee.appendForm(document,b,{},e,_,u,P),Te(b,!0),ee.appendForm(document,b,{},e,I,u,P),Te(b),ee.appendForm(document,b,{},e,E,u,P),Te(b),$.appendChild(K)}let Me=[];Me.push(Se(e,i.sched("availabilityOptions"),i.sched("YesNoMaybe"),u)),Me.push(Se(e,i.sched("ready"),qn(new Date().toISOString(),be("http://www.w3.org/2001/XMLSchema#dateTime")),u)),Me.push(Se(e,i.sched("results"),h,u)),K.classList.add("schedule-pane__button"),K.textContent="Go to poll",K.addEventListener("click",function(b){r.any(e,i.sched("ready"))?(G(),oe.appendChild(He)):(oe.appendChild(He),r.updater.update([],Me,function(y,v,F){v?G():P(v,F)}))},!1);let He=t.createElement("button");He.classList.add("schedule-pane__button");let x=He.appendChild(t.createElement("img"));x.setAttribute("src",R.iconBase+"noun_480183.svg"),x.classList.add("schedule-pane__button-icon"),He.addEventListener("click",function(b){let y=r.anyValue(e,i.cal("summary"))||r.anyValue(e,i.dc("title"))||"",v="mailto:"+r.each(e,i.sched("invitee")).map(function(F){let k=r.any(F,i.foaf("mbox"));return k?k.uri.replace("mailto:",""):""}).join(",")+"?subject="+encodeURIComponent(y+"-- When can we meet?")+"&body="+encodeURIComponent(y+`

When can you?

See `+e+`
`);console.log("Mail: "+v),window.location.href=v},!1)};function G(){m.nowOrWhenFetched(h.uri,void 0,(ie,ce,pe)=>{ie?(A(ae),W()):pe.status===404?(console.log("Initializing details file "+h),f.put(h,[],"text/turtle",function(ge,Pe,Le){Pe?(A(ae),W()):(P(Pe,"FAILED to create results file at: "+h.uri+" : "+Le),console.log("FAILED to craete results file at: "+h.uri+" : "+Le))})):P(ie,"FAILED to read results file: "+ce)})}function W(){let ie=r.any(a,i.cal("summary")),ce=r.any(a,i.cal("comment")),pe=r.any(a,i.cal("location")),ge=ae;ie&&(ge.appendChild(t.createElement("h3")).textContent=ie.value),pe&&(ge.appendChild(t.createElement("address")).textContent=pe.value),ce&&(ge.appendChild(t.createElement("p")).textContent=ce.value);let Pe=r.any(a,i.dc("author"));if(Pe){let y=r.any(Pe,i.foaf("name"));y&&(ge.appendChild(t.createElement("p")).textContent=y.value)}let Le=new _n("Responses",0),ye={};ye.time=dn("time"),ye.author=dn("author"),ye.value=dn("value"),ye.resp=dn("resp"),ye.cell=dn("cell"),Le.vars.push(ye.time,ye.author,ye.value,ye.resp,ye.cell),Le.pat.add(a,i.sched("response"),ye.resp),Le.pat.add(ye.resp,i.dc("author"),ye.author),Le.pat.add(ye.resp,i.sched("cell"),ye.cell),Le.pat.add(ye.cell,i.sched("availabilty"),ye.value),Le.pat.add(ye.cell,i.cal("dtstart"),ye.time);let Te={set_x:[],set_y:[]};Te.set_x=r.each(e,i.sched("option")),Te.set_x=Te.set_x.map(function(y){return r.any(y,i.cal("dtstart"))}).filter(function(y){return!!y}),Te.set_y=r.each(e,i.sched("response")),Te.set_y=Te.set_y.map(function(y){return r.any(y,i.dc("author"))}).filter(function(y){return!!y});let Ze=r.each(a,i.sched("option")).map(function(y){return r.any(y,i.cal("dtstart"))}).filter(function(y){return!!y}),Me=function(){let y=ge.appendChild(wi.matrixForQuery(t,Le,ye.time,ye.author,ye.value,Te,function(){}));y.setAttribute("class","matrix");let v=t.createElement("button");v.classList.add("schedule-pane__button");let F=t.createElement("img");F.setAttribute("src",R.iconBase+"noun_479395.svg"),F.classList.add("schedule-pane__button-icon"),v.appendChild(F),v.addEventListener("click",function(k){v.disabled=!0,r.fetcher.refresh(h,function(C,O){C?(y.refresh(),v.disabled=!1):console.log("Cant refresh matrix"+O)})},!1),A($),$.appendChild(v)},He={},x={div:$,dom:t};Re.ensureLoggedIn(x).then(y=>{let v=y.me;if(!v)return;let F=h;Te.set_y=Te.set_y.filter(function(re){return!re.sameTerm(v)}),Te.set_y.push(v),Te.cellFunction=function(re,fe,ue,se){if(se!==null&&r.fetcher.nowOrWhenFetched(se.uri.split("#")[0],void 0,function(xe,_e){xe&&D(re,se)}),ue.sameTerm(v)){let xe=function(){return D(re,se),""},_e={},we=i.sched("availabilty");if(!fe)return"";let me=He[fe.toNT()],Ce=ee.makeSelectForOptions(t,r,me,we,Vl,_e,h,xe);re.appendChild(Ce)}else se!==null&&(re.textContent=S.label(se));return""};let k=r.each(a,i.sched("response")),C=null;k.forEach(function(re){r.holds(re,i.dc("author"),v)&&(C=re)});let O=[],Y=ee.newThing(F).uri;C===null?(C=be(Y+"_response"),O.push(Se(a,i.sched("response"),C,F)),O.push(Se(C,i.dc("author"),v,F))):r.each(C,i.sched("cell")).forEach(function(fe){let ue=r.any(fe,i.cal("dtstart"));ue&&(He[ue.toNT()]=fe)});for(let re=0;re<Ze.length;re++){let fe=Ze[re];if(!fe||He[fe.toNT()])continue;let ue=be(Y+"_"+re);O.push(Se(C,i.sched("cell"),ue,F)),O.push(Se(ue,i.cal("dtstart"),fe,F)),He[fe.toNT()]=ue}O.length?r.updater.update([],O,function(re,fe,ue){fe?Me():P(fe,ue)}):Me()});let b=r.any(e,i.foaf("maker"));if(!b||!B||b.sameTerm(B)){let y=t.createElement("button");y.classList.add("schedule-pane__button");let v=t.createElement("img");v.setAttribute("src",R.iconBase+"noun_344563.svg"),v.classList.add("schedule-pane__button-icon"),y.appendChild(v),y.addEventListener("click",function(F){A(ge),ne()},!1),A(J),J.appendChild(y)}A(oe),oe.appendChild(N())}let U=t.createElement("div");U.classList.add("schedule-pane"),d(U);let z=U.appendChild(t.createElement("table"));z.classList.add("schedule-pane__table");let H=null,ae=z.appendChild(t.createElement("tr")).appendChild(t.createElement("td"));ae.classList.add("schedule-pane__main-cell"),ae.setAttribute("colspan","3");let M=z.appendChild(t.createElement("tr"));M.classList.add("naviMenu","schedule-pane__nav");let J=M.appendChild(t.createElement("td")),$=M.appendChild(t.createElement("td")),oe=M.appendChild(t.createElement("td"));return j(),U}};var Hl=o,Za={icon:R.iconBase+"noun_62007.svg",name:"travel expenses",audience:[Hl.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return o.qu("Transaction")in t.findSuperClassesNT(e)?"by Trip":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.store,i=o,a=sn("http://www.w3.org/2002/12/cal/ical#"),s=sn("http://www.w3.org/ns/pim/trip#"),d=t.createElement("div");d.setAttribute("class","transactionPane"),d.innerHTML="<h2>Trip transactions</h2>";let m=function(u,p){p===void 0&&(p="color: grey");let g=t.createElement("pre");g.setAttribute("style",p),d.appendChild(g),g.appendChild(t.createTextNode(u))},f=r.findTypeURIs(e),c=function(u,p){let g=new _n(S.label(u)),h=["date","transaction","comment","type","in_USD"],w={};h.forEach(function(P){g.vars.push(w[P]=dn(P))}),g.pat.add(w.transaction,s("trip"),u);let _=r.formula();_.add(w.transaction,i.rdf("type"),w.type),g.pat.optional.push(_),g.pat.add(w.transaction,o.qu("date"),w.date),_.add(w.transaction,i.rdfs("comment"),w.comment),g.pat.optional.push(_),g.pat.add(w.transaction,o.qu("in_USD"),w.in_USD);let E=$n(t,{query:g,onDone:function(){let P={},A=r.each(void 0,s("trip"),u);A.forEach(function(T){let X=r.the(T,i.rdf("type"));if(X||(X=o.qu("ErrorNoType")),X&&X.uri){let j=X.uri;P[j]||(P[j]=0);let te=r.any(T,o.qu("in_USD"));te||m("    @@ No amount in USD: "+te+" for "+T),te&&(P[j]=P[j]+parseFloat(te.value))}});let D="",B=0,N=0;for(let T in P)D+=S.label(r.sym(T))+": "+P[T]+"; ",B++,N+=P[T];m("Totals of "+A.length+" transactions: "+D,""),B>1&&m("Overall net: "+N,"text-treatment: bold;")}});p.appendChild(E)};if(o.qu("Transaction")in r.findSuperClassesNT(e)){let l=r.each(void 0,i.rdf("type"),e),u=[],p=[];for(let h=0;h<l.length;h++){let w=l[h],_=r.any(w,s("trip"));if(!_)u.push(w);else{w in p||(p[_]={total:0,transactions:[]});let I=r.any(w,o.qu("in_USD"));I&&(p[_].total+=I);let E=r.any(w,o.qu("date"));p[_.toNT()].transactions.push([E,w])}}let g=[];for(let h in p){let w=r.fromNT(h);g.push([r.any(w,a("dtstart")),w])}g.sort();for(let h=0;h<g.length;h++){let w=g[h][1];c(w,d)}}else f["http://www.w3.org/ns/pim/trip#Trip"]&&c(e,d);return d}};Be(he(`.image-pane__image {
  max-width: 100%;
  max-height: 100%;
}
`,"text/css"));function eo(e,n,t){let r=e.fetcher.getHeader(n,"content-type");if(!r)return!1;for(let i of r)for(let a of t)if(i.includes(a))return!0;return!1}var no={icon:R.originalIconBase+"tango/22-image-x-generic.png",name:"image",label:function(e,n){let t=n.session.store;return!(t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/dc/terms/Image"))||eo(t,e,["image/"]))||eo(t,e,["application/pdf"])?null:"Image"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","image-pane");let a=t.createElement("img");return r.fetcher._fetch(e.uri).then(function(s){return s.blob()}).then(function(s){let d=URL.createObjectURL(s);a.setAttribute("src",d)}).catch(function(s){a.setAttribute("alt","Unable to load image"),le.warn("Unable to load image resource: "+s)}),a.classList.add("image-pane__image"),i.appendChild(a),i}};var Wl=o,to={icon:R.iconBase+"noun_1619.svg",name:"playlistSlot",audience:[Wl.solid("PowerUser")],label:function(e,n){let t=n.session.store;return t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/ontology/pbo/core#PlaylistSlot"))?"Playlist Slot":null},render:function(e,n){let t=n.dom;function r(h,w){if(!h)return{html5:!0};let _=h.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-_%]+)/i),I=h.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),E=h.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),P=h.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);if(_)return{youtube:_};if(I)return{vimeo:I};if(E)return{dailymotion:E};if(P)return{vk:P}}let i=function(h,w){if(!w)return h;let _=t.createElement("a");return _.setAttribute("href",w),_.appendChild(h),_.addEventListener("click",ee.openHrefInOutlineMode,!0),_},a=function(h){return t.createTextNode(h)},s=n.session.store,d=s.any(e,be("http://purl.org/ontology/pbo/core#playlist_item")),m=s.any(e,be("http://purl.org/ontology/olo/core#index")),f=d.uri,c=r(f),l=t.createElement("div"),u;c&&c.youtube?(f=f.replace("watch?v=","embed/"),l.setAttribute("class","imageView"),u=t.createElement("IFRAME"),u.setAttribute("src",f),u.setAttribute("frameborder",0),u.setAttribute("style","width: 100%; aspect-ratio: 16/9; max-width: 100%; border: 0;"),u.setAttribute("allowfullscreen","true")):(l.setAttribute("class","imageView"),u=t.createElement("IMG"),u.setAttribute("src",d.value),u.setAttribute("style","max-width: 100%; height: auto;"));let p;if(m){let h=s.statementsMatching(null,be("http://purl.org/ontology/olo/core#index")),w=[];for(let D=0;D<h.length;D++)h[D]&&w.push(parseInt(h[D].object.value,10));m=parseInt(m.value,10),p=t.createElement("div");let _=w[(w.indexOf(m)-1+w.length)%w.length],I=w[(w.indexOf(m)+1+w.length)%w.length],E=i(a("<<"),e.uri.split("#")[0]+"#"+_);p.appendChild(E);let P=t.createElement("span");P.innerHTML=" Playlist slot : "+m+" ",p.appendChild(P);let A=i(a(">>"),e.uri.split("#")[0]+"#"+I);p.appendChild(A)}let g=t.createElement("TR");return g.appendChild(u),p&&g.appendChild(p),l.appendChild(g),l}};var ro={icon:R.iconBase+"noun_1619.svg",name:"video",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=We.mediaTypeClass("video/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play video";return null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div"),a=i.appendChild(r.createElement("video"));return a.setAttribute("controls","yes"),t.fetcher._fetch(e.uri).then(function(s){return s.blob()}).then(function(s){let d=URL.createObjectURL(s);a.setAttribute("src",d)}),a.setAttribute("width","100%"),i}};var Jn=o,io={icon:R.iconBase+"noun_534313.svg",name:"audio",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=We.mediaTypeClass("audio/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play audio";return null},render:function(e,n){let t=n.session.store,r=n.dom,i={autoplay:!1,chain:!0,chainAlbums:!0,loop:!1},a=function(I){let E=I.lastIndexOf(".");if(E<0)return I;let P=I.lastIndexOf("/");return E<P?I:I.slice(0,E)},s=function(I){let E=t.any(void 0,Jn.ldp("contains"),I);if(!E)return!1;let P=t.each(E,Jn.ldp("contains"));if(P.length<2)return!1;let A=I.uri;for(let D=0;D<P.length;D++){let B=P[D].uri;if(A.length>B.length&&A.startsWith(a(B))||A.endsWith(".m4a")&&B.endsWith(".mp3")&&a(A)===a(B))return!0}return!1},d=function(I){let E=I.uri.split("/").slice(-3),P=function(A){try{return decodeURIComponent(A)}catch{return A}};g.textContent=P(E[0]),h.textContent=P(E[1]),w.textContent=P(a(E[2]))},m=function(I,E){return new Promise(function(P){if(E=E||0,!i.chain)return P(null);let A=t.any(void 0,Jn.ldp("contains"),I)||I.dir();if(!A)return P(null);t.fetcher.load(A).then(function(D){let B=t.each(A,Jn.ldp("contains")),N;B.sort();for(let T=0;T<B.length;T++)if(I.uri===B[T].uri)if(N=(T+1)%B.length,N===0)if(i.chainAlbums){if(E===1||!i.chainAlbums)return P(null);m(A,E+1).then(function(X){X&&t.fetcher.load(X).then(function(j){let te=t.each(X,Jn.ldp("contains"));return te.length===0?P(null):(te.sort(),console.log("New Album: "+X),P(te[0]))})})}else return i.loop?P(B[N]):P(null);else return P(B[N])})})},f=function(I){let E=t.sym(I.target.getAttribute("src"));if(!i.chain)return;let P=function(A){let D=A;m(D).then(function(B){if(!B){console.log("No successor to "+D);return}s(B)?(console.log("Ignoring redundant "+B),P(B)):(console.log("Moving on to "+B),d(B),_.appendChild(c(B,!0)),_.removeChild(I.target))})};P(E)},c=function(I,E){let P=r.createElement("audio");return P.setAttribute("controls","yes"),t.fetcher._fetch(I.uri).then(function(A){return A.blob()}).then(function(A){let D=URL.createObjectURL(A);P.setAttribute("src",D)}),E&&P.setAttribute("autoplay","autoplay"),P.addEventListener("ended",f,!1),P},l=r.createElement("div"),u=l.appendChild(r.createElement("table")),p="padding: 0.3em; color:white; background-color: black;",g=u.appendChild(r.createElement("tr"));g.style.cssText=p;let h=u.appendChild(r.createElement("tr"));h.style.cssText=p;let w=u.appendChild(r.createElement("tr"));w.style.cssText=p;let _=u.appendChild(r.createElement("tr"));return d(e),_.appendChild(c(e,i.autoplay)),!t.holds(void 0,Jn.ldp("contains"),e)&&e.dir()&&t.fetcher.load(e.dir()),l}};var oo=wt(bi(),1);var Gl=`<!DOCTYPE html>
<html lang="en" xml:lang="en" xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="https://dokie.li/media/css/basic.css" media="all" rel="stylesheet" title="Basic" />
    <link href="https://dokie.li/media/css/dokieli.css" media="all" rel="stylesheet" />
    <script src="https://dokie.li/scripts/dokieli.js"><\/script>
  </head>

  <body about="" prefix="rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns# rdfs: http://www.w3.org/2000/01/rdf-schema# owl: http://www.w3.org/2002/07/owl# xsd: http://www.w3.org/2001/XMLSchema# rdfa: http://www.w3.org/ns/rdfa# dcterms: http://purl.org/dc/terms/ dctypes: http://purl.org/dc/dcmitype/ foaf: http://xmlns.com/foaf/0.1/ pimspace: http://www.w3.org/ns/pim/space# skos: http://www.w3.org/2004/02/skos/core# prov: http://www.w3.org/ns/prov# mem: http://mementoweb.org/ns# qb: http://purl.org/linked-data/cube# schema: http://schema.org/ void: http://rdfs.org/ns/void# rsa: http://www.w3.org/ns/auth/rsa# cert: http://www.w3.org/ns/auth/cert# wgs: http://www.w3.org/2003/01/geo/wgs84_pos# bibo: http://purl.org/ontology/bibo/ sioc: http://rdfs.org/sioc/ns# doap: http://usefulinc.com/ns/doap# dbr: http://dbpedia.org/resource/ dbp: http://dbpedia.org/property/ sio: http://semanticscience.org/resource/ opmw: http://www.opmw.org/ontology/ deo: http://purl.org/spar/deo/ doco: http://purl.org/spar/doco/ cito: http://purl.org/spar/cito/ fabio: http://purl.org/spar/fabio/ oa: http://www.w3.org/ns/oa# as: https://www.w3.org/ns/activitystreams# ldp: http://www.w3.org/ns/ldp# solid: http://www.w3.org/ns/solid/terms# acl: http://www.w3.org/ns/auth/acl# earl: http://www.w3.org/ns/earl# spec: http://www.w3.org/ns/spec# odrl: http://www.w3.org/ns/odrl/2/ dio: https://w3id.org/dio# rel: https://www.w3.org/ns/iana/link-relations/relation#" typeof="schema:CreativeWork prov:Entity">
    <main>
      <article about="" typeof="schema:Article">

      </article>
    </main>
  </body>
</html>
`,ao=Gl;var so={icon:R.iconBase+"dokieli-logo.png",name:"Dokieli",mintClass:o.solid("DokieliDocument"),label:function(e,n){return null},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(!r){let m=n.newBase;m.endsWith("/")&&(m=m.slice(0,-1),n.newBase=m),r=t.sym(m)}let i=oo.lookup(r.uri);(!i||!i.includes("html"))&&(r=be(r.uri+".html")),n.newInstance=r;let a=ao,s=r.uri.split("/").slice(-1)[0];s=decodeURIComponent(s.split(".")[0]);let d=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return a=a.replace("<title>","<title>"+d),a=a.replace("</article>","<h1>"+d+"</h1></article>"),t.fetcher.webOperation("PUT",r.uri,{data:a,contentType:"text/html"}).then(function(){return console.log("new Dokieli document created at "+n.newInstance),n})}};var lo=new Set;function zr(e){let n=String(e);if(lo.has(n)||typeof document>"u")return;lo.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}var jl=()=>Promise.all([import("./part-RVRYL5AO.js"),import("./part-XGUH7HMV.js")]);zr(he(`/*
 * Light-DOM layout for the folder pane shell (adapted from SolidOS/folder-pane#237).
 * folder-pane-view renders into light DOM because legacy panes rendered into
 * folder-pane-content are styled by global stylesheets. Shadow-DOM components
 * (folder-pane-sidebar, folder-pane-container, folder-pane-content) keep their
 * styles in their own *.styles.css files.
 */

.folder-pane {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  text-align: left;
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}

.folder-pane-package-div {
  display: block;
  text-align: left;
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
  overflow-x: auto;
}

.folder-pane--storage folder-pane-storage-header {
  --folder-pane-storage-toolbar-right-padding: 8px;
  --folder-pane-storage-header-mobile-gap: 0;
  --folder-pane-storage-header-mobile-padding: 0 0 10px;
}

folder-pane-view {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.folder-pane-main-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  flex: 1 1 auto;
  /* Bounded height so the sidebar and content columns scroll independently. */
  height: 80vh;
  min-height: 32rem;
  overflow: hidden;
  min-width: 0;
  border-radius: 5px;
  border: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  background: var(--solid-ui-color-white, #ffffff);
}

.folder-pane-view-controls {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-end;
  gap: 5.6px;
  padding: 10px 0;
}

.folder-pane-view-controls button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--solid-ui-clickable-area, 42px);
  height: var(--solid-ui-clickable-area, 42px);
  padding: 0;
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--solid-ui-color-gray-500, #6a7282);
  cursor: pointer;
}

.folder-pane-view-controls button[aria-pressed='true'],
.folder-pane-view-controls button:hover {
  background: var(--solid-ui-color-primary-selected, #cbb9ff);
  color: var(--solid-ui-color-primary, #7c4dff);
}

.folder-pane-view-controls button:focus-visible {
  outline: 2px solid var(--solid-ui-color-primary, #7c4dff);
  outline-offset: -2px;
}

.folder-pane-view-controls icon-lucide-layout-grid,
.folder-pane-view-controls icon-lucide-list {
  width: 16px;
  height: 16px;
}

folder-pane-sidebar {
  display: flex;
  flex-direction: column;
  flex: 0 0 var(--folder-pane-sidebar-width, 256px);
  width: var(--folder-pane-sidebar-width, 256px);
  min-width: 0;
  max-width: 100%;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  border-right: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
}

.folder-pane-sidebar-resizer {
  position: relative;
  flex: 0 0 4px;
  width: 4px;
  background: transparent;
}

.folder-pane-sidebar-resize-handle {
  position: absolute;
  inset: 0;
  cursor: col-resize;
  touch-action: none;
}

.folder-pane-sidebar-resize-handle:focus-visible {
  outline: 1px solid var(--solid-ui-color-lavender-300, #e6dcff);
  outline-offset: 0;
}

.folder-pane-sidebar-resizer[data-resizing='true'] {
  background: var(--solid-ui-color-lavender-300, #e6dcff);
}

.folder-pane-main-content:has(.folder-pane-sidebar-resizer[data-resizing='true']) {
  user-select: none;
}

.folder-pane-sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  color: var(--solid-ui-color-gray-900, #101828);
  width: 25px;
  height: 25px;
  min-width: 25px;
  min-height: 25px;
  padding: 0;
  border: 0;
  border-radius: 20px;
  background: var(--solid-ui-color-zinc-300, #d4d4d8);
  position: absolute;
  z-index: 1;
  top: 75%;
  left: calc(50% - 2px);
  transform: translate(-50%, -50%);
}

.folder-pane-sidebar-toggle:hover {
  background: var(--solid-ui-color-primary-hover);
}

.folder-pane-sidebar-toggle:focus-visible {
  outline: 1px solid var(--solid-ui-color-lavender-300, #e6dcff);
  outline-offset: 1px;
}

.folder-pane-sidebar-toggle-icon {
  display: block;
  flex: 0 0 auto;
  position: relative;
  top: -1px;
  width: 12.308px;
  height: 12.308px;
}

.folder-pane-sidebar-toggle-icon-collapsed {
  transform: rotate(90deg) scaleX(-1);
}

.folder-pane-main-content[data-sidebar-collapsed='true'] > folder-pane-sidebar {
  flex-basis: 0;
  width: 0;
  min-width: 0;
  overflow: hidden;
  border-right: 0;
}

.folder-pane-main-content[data-sidebar-collapsed='true'] > .folder-pane-sidebar-resizer {
  flex-basis: 4px;
}

.folder-pane-main-content[data-sidebar-collapsed='true'] > .folder-pane-sidebar-resizer
  > .folder-pane-sidebar-toggle {
  left: calc(50% + 12.5px);
}

.folder-pane-content-column {
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 0;
  min-height: 0;
  position: relative;
}

@media (prefers-reduced-motion: reduce) {
  .folder-pane-main-content,
  folder-pane-sidebar,
  .folder-pane-sidebar-toggle-icon,
  .resource-expand-button icon-lucide-chevron-right {
    transition: none;
  }
}

.folder-pane-content-column > folder-pane-content {
  box-sizing: border-box;
  padding: 16px;
}

/* A resource explorer owns its own header/content frame; do not inset it. */
.folder-pane-content-column > folder-pane-content:has(> solid-ui-file-explorer-provider) {
  padding: 0;
}

.folder-pane-full-view {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: auto;
}

.folder-pane-access-denied-message {
  display: flex;
  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  height: 100%;
  min-height: 0;
  padding: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.folder-pane-access-denied-message-body {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 384px;
  overflow-wrap: anywhere;
}

.folder-pane-resource-error {
  display: flex;
  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  min-height: 0;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 0;
  background: transparent;
}

.folder-pane-resource-error > solid-ui-error-state {
  display: block;
  width: min(100%, 640px);
}

/* Explorer frame rendered by FolderPaneView.renderExplorerInto */
solid-ui-file-explorer-provider {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  width: 100%;
  min-width: 0;
}

solid-ui-file-explorer-provider > solid-ui-file-explorer-header {
  display: block;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--solid-ui-color-white, #ffffff);
}

solid-ui-file-explorer-provider > .paneDiv,
solid-ui-file-explorer-provider > .exceptionPane {
  display: block;
  flex: 1 1 auto;
  margin: 0;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.folder-pane-predicate-cell {
  width: 0;
  min-width: 0;
  max-width: 0;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
  overflow: hidden;
}

.folder-pane-status {
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid var(--color-border, #ddd);
  text-align: left;
}

.folder-pane-status[data-status="progress"] {
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  outline: 0;
  accent-color: auto;
  text-align: center;
}

.folder-pane-status:empty {
  display: none;
}

.folder-pane-status-message {
  display: flex;
  position: relative;
  align-items: center;
  gap: 12px;
  padding-right: 40px;
}

.folder-pane-status-message > solid-ui-button {
  position: absolute;
  top: -6px;
  right: -4px;
}

.folder-pane-status-message[data-status="error"] {
  color: var(--color-error, #b00020);
}

.folder-pane-status-text {
  flex: 1 1 auto;
}

.folder-pane-status[data-status="progress"] .folder-pane-status-message {
  flex: 1 1 auto;
  width: 100%;
  min-height: 8rem;
  align-items: center;
  justify-content: center;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  outline: 0;
  color: var(--solid-ui-color-gray-500, #6a7282);
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

.folder-pane-status[data-status="progress"] .folder-pane-status-text {
  flex: 0 1 auto;
}

.folder-pane-drop-target {
  display: inline-block;
  width: var(--icon-base, 2em);
  min-width: var(--icon-base, 2em);
  max-width: var(--icon-base, 2em);
  height: var(--icon-base, 2em);
  min-height: var(--icon-base, 2em);
  max-height: var(--icon-base, 2em);
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: content-box;
  flex: 0 0 var(--icon-base, 2em);
}

.folder-pane-explicit-drop-icon {
  width: var(--icon-base, 2em);
  height: var(--icon-base, 2em);
}

@media (max-width: 768px) {
  .folder-pane {
    height: auto;
    overflow: visible;
    margin-top: var(--spacing-2xs, 0.25em);
    margin-bottom: var(--spacing-2xs, 0.25em);
  }

  folder-pane-view {
    height: auto;
  }

  .folder-pane-main-content,
  .folder-pane-full-view {
    flex: 0 0 auto;
    height: auto;
    min-height: 0;
    overflow: visible;
  }

  .folder-pane-main-content {
    border: 0;
  }

  folder-pane-sidebar,
  .folder-pane-sidebar-resizer {
    display: none;
  }

  .folder-pane-content-column {
    width: 100%;
    min-height: 0;
    overflow: visible;
  }

  solid-ui-file-explorer-provider,
  solid-ui-file-explorer-provider > .paneDiv,
  solid-ui-file-explorer-provider > .exceptionPane {
    height: auto;
    min-height: 0;
    overflow: visible;
  }

  .folder-pane-explicit-drop-icon {
    width: var(--icon-sm, 1.5em);
    height: var(--icon-sm, 1.5em);
  }
}
`,"text/css"));zr(he(`:root {
  /* Shared utility variables (e.g., base icon size) */
  --icon-base: 2em;
}`,"text/css"));var Jl=["explorer","storage","container"];function Kl(e){return e.folderView&&Jl.includes(e.folderView)?e.folderView:e.fullView===!0||e.solo===!0?"container":"explorer"}var $r={icon:R.iconBase+"noun_973694_expanded.svg",name:"folder",mintNew:function(e,n){let t=e.session.store,i=(n.newInstance||t.sym(n.newBase)).uri;i.endsWith("/")&&(i=i.slice(0,-1));let a=t.sym(i+"/");return n.newInstance=a,t.fetcher.webOperation("PUT",a.uri).then(function(){return n})},label:function(e,n){if(Si(e)||Ui(e))return null;let t=n.session.logic.resource;if(!t.isContainer(e))return null;let r=t.getContainerMemberCount(e);return r>0?"Contents ("+r+")":"Contents (0)"},render:function(e,n,t){jl();let r=n.dom,i=r.createElement("div");i.classList.add("instancePane","folder-pane");let a=i.appendChild(r.createElement("folder-pane-view")),s=t&&typeof t=="object"?t:{};a.browserContext=n,a.subject=e;let d=Kl(s);return i.classList.add(`folder-pane--${d}`),a.fullView=d==="container",i}};var yn=o,co={icon:R.originalIconBase+"tango/22-folder-open.png",name:"classInstance",audience:[yn.solid("PowerUser")],label:function(e,n){let r=n.session.store.each(void 0,yn.rdf("type"),e).length;return r>0?"List ("+r+")":null},render:function(e,n){let t=n.dom,r=n.getOutliner(t),i=n.session.store,a=function(f,c){let l=t.createElement("pre");l.setAttribute("style","background-color: "+c||"#eed;"),s.appendChild(l),l.appendChild(t.createTextNode(f))},s=t.createElement("div");s.setAttribute("class","instancePane"),s.setAttribute("style","  border-top: solid 1px #777; border-bottom: solid 1px #777; margin-top: 0.5em; margin-bottom: 0.5em ");let d=i.statementsMatching(void 0,yn.rdf("type"),e);if(d.length>0){let m={},f=[];d.forEach(c=>{m[c.subject.toNT()]=c});for(let c in i.findMembersNT(e))m[c]||f.push(Se(i.fromNT(c),yn.rdf("type"),e));if(f.length&&a("There are "+d.length+" explicit and "+f.length+" implicit members of "+S.label(e)),!e.sameTerm(yn.rdf("Property"))){if(e.sameTerm(yn.rdfs("Class"))){let c=i.statementsMatching(void 0,yn.rdf("type"),void 0),l={};c.forEach(function(p){l[p.object]=p});let u=[];for(let p in l)u.push(Se(be(p),yn.rdf("type"),yn.rdfs("Class")));a("Total of "+c.length+" type statements and "+u.length+" unique types.")}}if(d.length>10){let c=t.createElement("TR");c.appendChild(t.createTextNode(""+d.length)),s.appendChild(c)}r.appendPropertyTRs(s,d,!0,function(c){return!0}),f.length&&(a("Implicit:"),r.appendPropertyTRs(s,f,!0,function(c){return!0}))}return s}};var fo=wt(uo(),1),mo=o,Xl=0;function po(e,n){return Ge.resource.isContainer(e)?n.each(e,mo.ldp("contains")).filter(r=>Ge.resource.isImage(r)):[]}var ho={icon:R.iconBase+"noun_138712.svg",name:"slideshow",audience:[mo.solid("PowerUser")],label:function(e,n){let t=n.session.store;if(Ge.resource.isContainer(e)){let r=po(e,t);return new Set(r.map(i=>i.uri)).size>1?"Slideshow":null}return null},render:function(e,n){let t=n.dom;ee.addStyleSheet(t,"https://leemark.github.io/better-simple-slideshow/css/simple-slideshow-styles.css");let i=n.session.store,a=t.createElement("div"),s=`slideshow-${++Xl}`;a.id=s,a.setAttribute("class","bss-slides");let d=[...new Map(po(e,i).map(f=>[f.uri,f])).values()];d.sort((f,c)=>f.uri.localeCompare(c.uri));for(let f=0;f<d.length;f++){let c=a.appendChild(t.createElement("figure")),l=c.appendChild(t.createElement("img"));i.fetcher._fetch(d[f].uri).then(function(u){return u.blob()}).then(function(u){let p=URL.createObjectURL(u);l.setAttribute("src",p)}),l.style.width="100%",c.appendChild(t.createElement("figcaption"))}let m={dom:t};return t.defaultView.requestAnimationFrame(function(){(0,fo.default)(`#${s}`,m)}),a}};var Kn=String.raw,Ql=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M32.0007 58.6666C46.7282 58.6666 58.6673 46.7275 58.6673 31.9999C58.6673 17.2723 46.7282 5.33325 32.0007 5.33325C17.2731 5.33325 5.33398 17.2723 5.33398 31.9999C5.33398 46.7275 17.2731 58.6666 32.0007 58.6666Z" stroke="#CBD5E1" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M32 34.6667C36.4183 34.6667 40 31.085 40 26.6667C40 22.2485 36.4183 18.6667 32 18.6667C27.5817 18.6667 24 22.2485 24 26.6667C24 31.085 27.5817 34.6667 32 34.6667Z" stroke="#CBD5E1" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.666 55.0986V50.6666C18.666 49.2521 19.2279 47.8955 20.2281 46.8954C21.2283 45.8952 22.5849 45.3333 23.9993 45.3333H39.9993C41.4138 45.3333 42.7704 45.8952 43.7706 46.8954C44.7708 47.8955 45.3327 49.2521 45.3327 50.6666V55.0986" stroke="#CBD5E1" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Zl=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="3 3 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3063 3.34814C14.9271 3.34832 15.5236 3.59563 15.9625 4.03467C16.4012 4.47362 16.648 5.06935 16.6481 5.68994C16.648 6.31072 16.4004 6.90719 15.9615 7.34619L15.9606 7.34521L7.95373 15.355L7.95275 15.356C7.73845 15.5696 7.47464 15.7278 7.18517 15.8159H7.1842L4.57287 16.6079H4.57092C4.40678 16.6572 4.23224 16.6614 4.06603 16.6196C3.89974 16.5778 3.74793 16.4918 3.62658 16.3706C3.50526 16.2494 3.41865 16.0974 3.37658 15.9312C3.33472 15.7651 3.3383 15.5903 3.38732 15.4263L3.3883 15.4243L4.18127 12.813V12.811C4.27013 12.5215 4.42882 12.2574 4.64318 12.0435L12.651 4.03467V4.03369C13.09 3.59513 13.6857 3.34816 14.3063 3.34814ZM5.56213 12.9634C5.49841 13.0269 5.4509 13.1059 5.42443 13.1919L5.42345 13.1909L4.82189 15.1733L6.80627 14.5718C6.89221 14.5456 6.97114 14.4985 7.03478 14.4351L13.274 8.19482L11.8014 6.72217L5.56213 12.9634ZM14.3063 4.64893C14.0303 4.64894 13.7652 4.75864 13.5699 4.95361L12.7213 5.80225L14.194 7.2749L15.0426 6.42627L15.1119 6.3501C15.2635 6.16488 15.3473 5.93141 15.3473 5.68994C15.3472 5.41394 15.2377 5.14881 15.0426 4.95361C14.8474 4.75846 14.5823 4.64906 14.3063 4.64893Z" fill="#1E2939"/>
  </svg>
`,Vr=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  aria-hidden="true"
  focusable="false"
  >
    <path d="M13.3327 6.66659C13.3327 9.99525 9.64002 13.4619 8.40002 14.5326C8.2845 14.6194 8.14388 14.6664 7.99935 14.6664C7.85482 14.6664 7.7142 14.6194 7.59868 14.5326C6.35868 13.4619 2.66602 9.99525 2.66602 6.66659C2.66602 5.2521 3.22792 3.89554 4.22811 2.89535C5.22831 1.89516 6.58486 1.33325 7.99935 1.33325C9.41384 1.33325 10.7704 1.89516 11.7706 2.89535C12.7708 3.89554 13.3327 5.2521 13.3327 6.66659Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,jf=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5301 0.244005C10.8555 -0.0813835 11.3834 -0.0812864 11.7088 0.244005C12.0338 0.569352 12.0338 1.09639 11.7088 1.42174L7.15416 5.97545L11.7088 10.5301C12.0341 10.8556 12.0342 11.3835 11.7088 11.7088C11.3835 12.0342 10.8556 12.0341 10.5301 11.7088L5.97545 7.15416L1.42174 11.7088C1.09639 12.0338 0.569351 12.0338 0.244004 11.7088C-0.0812866 11.3834 -0.0813828 10.8555 0.244004 10.5301L4.79772 5.97545L0.244004 1.42174C-0.0812866 1.09629 -0.0813828 0.569393 0.244004 0.244005C0.569393 -0.0813835 1.09629 -0.0812864 1.42174 0.244005L5.97545 4.79772L10.5301 0.244005Z" fill="#4A5565"/>
  </svg>
`,ed=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M8.33301 9.16675V14.1667" stroke="#D1D5DC" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.667 9.16675V14.1667" stroke="#D1D5DC" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8337 5V16.6667C15.8337 17.1087 15.6581 17.5326 15.3455 17.8452C15.0329 18.1577 14.609 18.3333 14.167 18.3333H5.83366C5.39163 18.3333 4.96771 18.1577 4.65515 17.8452C4.34259 17.5326 4.16699 17.1087 4.16699 16.6667V5" stroke="#D1D5DC" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.5 5H17.5" stroke="#D1D5DC" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.66699 5.00008V3.33341C6.66699 2.89139 6.84259 2.46746 7.15515 2.1549C7.46771 1.84234 7.89163 1.66675 8.33366 1.66675H11.667C12.109 1.66675 12.5329 1.84234 12.8455 2.1549C13.1581 2.46746 13.3337 2.89139 13.3337 3.33341V5.00008" stroke="#D1D5DC" stroke-width="1.45833" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,nd=Kn`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g clip-path="url(#clip0_3001_2564)">
      <path d="M6.06055 0.10083C6.53372 0.101056 6.91793 0.485037 6.91797 0.958252V5.20532H11.165C11.6384 5.20532 12.0225 5.58936 12.0225 6.06274C12.0223 6.536 11.6383 6.92017 11.165 6.92017H6.91797V11.1663C6.91797 11.6395 6.53374 12.0235 6.06055 12.0237C5.58716 12.0237 5.20312 11.6396 5.20312 11.1663V6.92017H0.957031C0.483929 6.91994 0.0997601 6.53586 0.0996094 6.06274C0.0996094 5.5895 0.483837 5.20555 0.957031 5.20532H5.20312V0.958252C5.20316 0.484897 5.58718 0.10083 6.06055 0.10083Z" fill="#7C4DFF"/>
    </g>
    <defs>
      <clipPath id="clip0_3001_2564">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
`;var rm=[{key:"homepage",label:"Homepage",placeholder:"https://example.com",predicate:o.foaf("homepage")},{key:"weblog",label:"Weblog",placeholder:"https://blog.example.com",predicate:o.foaf("weblog")},{key:"workplaceHomepage",label:"Workplace Homepage",placeholder:"https://company.example.com",predicate:o.foaf("workplaceHomepage")},{key:"schoolHomepage",label:"School Homepage",placeholder:"https://school.example.edu",predicate:o.foaf("schoolHomepage")}];function Hr(e){let{dom:n,subject:t,familiar:r,me:i,meUri:a,incoming:s,outgoing:d,editable:m,profile:f,knows:c,mutualConnections:l,link:u,text:p,buildCheckboxForm:g,renderSupportingInfo:h,renderNameSuffix:w}=e,_=function(){},I=n.createElement("section");I.className="social-pane__mutual-friends social-primary__panel",I.id="social-panel-mutual",I.setAttribute("role","tabpanel"),I.setAttribute("aria-labelledby","social-tab-mutual");let E=I.appendChild(n.createElement("div"));E.classList.add("social-main","social-main--mutual","flex-column");let P=n.createElement("div");P.classList.add("social-mutual-summary","flex-column"),E.appendChild(P);let A=function(){let N=P.appendChild(n.createElement("div"));return N.classList.add("social-mutual-summary-line"),N},D=function(){let N=A();return N.appendChild(u(p("You"),a)),N.appendChild(p(" and ")),N.appendChild(u(p(r),t.uri)),N};if(s)if(d)D().appendChild(p(" say you know each other."));else{P.classList.add("social-mutual-summary--confirm");let N=P.appendChild(n.createElement("div"));N.classList.add("social-mutual-summary-line"),N.appendChild(u(p(r),t.uri)),N.appendChild(p(" knows ")),N.appendChild(u(p("you"),a)),N.appendChild(p(" (unconfirmed)."))}else if(!d)D().appendChild(p(" have not said you know each other."));else{let N=A();N.appendChild(u(p("You"),a)),N.appendChild(p(" know ")),N.appendChild(u(p(r),t.uri)),N.appendChild(p(" (unconfirmed)."))}if(!!s&&!d){let N=n.createElement("span");N.className="social-mutual-confirm-prompt",N.appendChild(p("Confirm you know ")),N.appendChild(u(p(r),t.uri));let T=g(N,new tn(i,c,t,f??void 0),!!d,{disabled:!m,disabledTitle:m?void 0:"Your profile is not editable"});T.classList.add("social-mutual-checkbox-form"),E.appendChild(T)}if(l.length){let N=E.appendChild(n.createElement("table"));N.className="social-main social-friends-list social-friends-grid";let T=function(X){return ee.personTR(n,o.foaf("knows"),X,{renderSupportingInfo:h,renderNameSuffix:w})};_=function(){let X=[...l].sort((j,te)=>{let de=S.label(j)||j.value,V=S.label(te)||te.value;return de.localeCompare(V)});S.syncTableToArray(N,X,T,function(j,te){return T(te)})},_()}return{section:I,content:E,refreshMutualFriends:_}}function go(e){let{dom:n,subject:t,profile:r,editable:i,renderSupportingInfo:a,renderNameSuffix:s}=e,d=n.createElement("section");d.className="social-pane__all-friends social-primary__panel",d.id="social-panel-all-friends",d.setAttribute("role","tabpanel"),d.setAttribute("aria-labelledby","social-tab-all-friends");let m=d.appendChild(n.createElement("div"));m.className="social-friends-delete-confirmation";let f=d.appendChild(n.createElement("table"));f.className="social-main";let c=ee.attachmentList(n,t,f,{doc:r,modify:!!i,predicate:o.foaf("knows"),noun:"friend",confirmationContainer:m,refreshOnDocumentLoad:!1,renderSupportingInfo:a,renderNameSuffix:s});c.classList.add("social-friends-list"),c.style.marginTop="0";let l=c.rows[0],u=l.cells[0],p=l.cells[1];if(u.replaceChildren(...Array.from(p.childNodes)),u.classList.add("social-friends-list-surface"),p.remove(),i){let h=n.createElement("p");h.className="social-friends-drop-hint",h.textContent="Drop a WebID anywhere here to add a friend.",u.prepend(h)}let g=c.querySelector("td table");return g instanceof HTMLTableElement&&g.classList.add("social-friends-grid"),{section:d,mainTable:f,friendsList:c}}function bo(e){let{dom:n,triage:t,renderSupportingInfo:r,renderNameSuffix:i}=e,a=n.createElement("section");a.className="social-pane__requests social-primary__panel",a.id="social-panel-requests",a.setAttribute("role","tabpanel"),a.setAttribute("aria-labelledby","social-tab-requests");let s=a.appendChild(n.createElement("div"));s.classList.add("social-main","social-main--requests","flex-column");let d=s.appendChild(n.createElement("p"));d.className="social-requests__note",d.textContent="Best effort preview: this view only reflects profile documents that are currently loaded. A dedicated inbox would still be needed for complete request discovery.";let m=function(h,w,_){let I=s.appendChild(n.createElement("section"));I.classList.add("social-requests__group","flex-column");let E=I.appendChild(n.createElement("div"));E.className="social-requests__group-header";let P=E.appendChild(n.createElement("h2"));P.className="social-requests__group-title",P.textContent=h;let A=E.appendChild(n.createElement("p"));A.className="social-requests__group-description",A.textContent=w;let D=I.appendChild(n.createElement("p"));D.className="social-requests__empty",D.textContent=_;let B=I.appendChild(n.createElement("table"));return B.className="social-main social-friends-list social-friends-grid social-requests__table",{empty:D,table:B}},f=m("Incoming requests","People who say they know this profile, but have not been confirmed yet.","No incoming requests are visible from the currently loaded data."),c=m("Awaiting confirmation","People this profile knows who have not linked back yet.","Nothing is waiting for confirmation right now."),l=function(h){return ee.personTR(n,o.foaf("knows"),h,{renderSupportingInfo:r,renderNameSuffix:i})},u=function(h){return[...h].sort((w,_)=>{let I=S.label(w)||w.value,E=S.label(_)||_.value;return I.localeCompare(E)})},p=function(h,w){let _=u(w);h.empty.hidden=_.length>0,h.table.hidden=_.length===0,S.syncTableToArray(h.table,_,l,function(I,E){return l(E)})},g=function(h){p(f,h.requests),p(c,h.unconfirmed)};return g(t),{section:a,refreshRequests:g}}async function Fn(){return ve.currentUser()??await ve.checkUser()}function ct(e,n=ve.currentUser()){let{value:t,uri:r}=typeof n=="object"&&n!==null?n:{},i=typeof n=="string"?n:t||r||null;return i?i===e.value?"owner":"authenticated":"anonymous"}function wo(e){let n=new Set,t=[];for(let r of e){let i=r?.value;!i||n.has(i)||(n.add(i),t.push(r))}return t}function Yn(e,n){let t=wo(e.each(n,o.foaf("knows"))),r=wo(e.each(void 0,o.foaf("knows"),n)),i=[],a=[],s=[];for(let d of t)r.some(f=>f.sameTerm(d))?i.push(d):a.push(d);for(let d of r)t.some(f=>f.sameTerm(d))||s.push(d);return{acquaintances:t,confirmed:i,unconfirmed:a,requests:s}}async function yo(e,n){let t=e.session.store,r=t.fetcher;if(!r||typeof r.load!="function")return Yn(t,n);try{await r.load(n.doc())}catch{}let i=Yn(t,n),a=new Map;a.set(n.doc().value,n.doc());for(let d of[...i.acquaintances,...i.requests])a.set(d.doc().value,d.doc());let s=t.statementsMatching(void 0,o.foaf("knows"),n);for(let d of s){let m=d.why;m?.value&&a.set(m.value,m)}for(let d of a.values())try{await r.load(d)}catch{}return Yn(t,n)}Be(he(`.social-pane-host,\r
.social-pane {\r
  --profile-interactive-cursor: pointer;\r
  display: block;\r
  background: var(--color-background, #F8F9FB);\r
  border-radius: var(--border-radius-base, 0.3125rem);\r
  overflow: visible;\r
  width: 100%;\r
  min-width: 100%;\r
  box-sizing: border-box;\r
  max-width: none;\r
  margin-top: 20px;\r
}\r
\r
.social-pane__header-content {\r
  display: grid;\r
  grid-template-columns: auto minmax(0, 1fr) auto;\r
  align-items: flex-start;\r
  column-gap: var(--spacing-md, 1.25rem);\r
  row-gap: var(--spacing-xxs, 0.3125rem);\r
  min-width: 0;\r
  width: 100%;\r
}\r
\r
.social-pane__header-media {\r
  grid-column: 1;\r
  grid-row: 1;\r
}\r
\r
.social-pane__header-details {\r
  grid-column: 2;\r
  grid-row: 1;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  min-width: 0;\r
}\r
\r
.social-pane__header-actions {\r
  grid-column: 3;\r
  grid-row: 1;\r
  margin-left: auto;\r
  align-self: flex-start;\r
  justify-self: end;\r
  display: flex;\r
  align-items: flex-start;\r
  gap: var(--spacing-xs, 0.5rem);\r
  flex-wrap: wrap;\r
}\r
\r
.social-pane__header-summary {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: var(--spacing-xxs, 0.125rem);\r
  width: 100%;\r
  max-width: 100%;\r
}\r
\r
.social-pane__header-stats {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: var(--spacing-xs, 0.75rem);\r
  justify-content: flex-start;\r
  align-self: flex-start;\r
  margin-top: var(--spacing-xxs, 0.3125rem);\r
}\r
\r
.social-pane__header-stat {\r
  appearance: none;\r
  border: 0;\r
  background: transparent;\r
  cursor: var(--profile-interactive-cursor, pointer);\r
  color: var(--slate-700, #314158);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  font-weight: var(--font-weight-bold, 600);\r
  line-height: var(--line-height-tight, 1.4);\r
  padding: 0;\r
  text-decoration: none;\r
}\r
\r
.social-pane__header-stat + .social-pane__header-stat::before {\r
  content: '\u25C6';\r
  color: var(--gray-400, #99A1AF);\r
  font-size: 0.5rem;\r
  margin-right: var(--spacing-xs, 0.75rem);\r
  vertical-align: middle;\r
}\r
\r
.social-pane__header-stat:hover .social-pane__header-stat-label {\r
  text-decoration: underline;\r
}\r
\r
.social-pane__header-stat:focus-visible {\r
  outline: var(--border-width-medium, 2px) solid #111827;\r
  outline-offset: 2px;\r
}\r
\r
.social-pane__header {\r
  border: var(--border-width-thin, 1px) solid var(--color-border, #444);\r
  border-radius: var(--border-radius-base);\r
  padding: var(--spacing-lg, 1.5625rem);\r
  background: var(--color-card-bg, #FFF);\r
}\r
\r
.social-pane_header-pronouns {\r
  color: var(--color-text-secondary, #4A5565);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  font-weight: var(--font-weight-regular, 400);\r
  line-height: 1.2;\r
}\r
.social-pane__edit-button {\r
  position: static;\r
  display: inline-block;\r
  min-width: 0;\r
  width: auto;\r
  max-width: none;\r
  --button-height-sm: 0;\r
  --button-padding-sm: var(--spacing-xxs, 0.3125rem);\r
  --button-background: transparent;\r
  --button-border: transparent;\r
  --button-border-width: 0;\r
  --button-hover-background: transparent;\r
  --button-hover-border: transparent;\r
  --button-text: var(--color-primary, #7C4DFF);\r
  --button-hover-text: var(--color-primary, #7C4DFF);\r
  --button-font-size-sm: var(--font-size-sm, 0.875rem);\r
  --button-font-weight: var(--font-weight-regular, 400);\r
  --button-line-height: var(--line-height-base, 1.5);\r
  --button-icon-size-sm: 0.875rem;\r
}\r
\r
.social-pane__edit-button::part(button):hover {\r
  text-decoration: underline;\r
}\r
\r
.social-pane__edit-button::part(button):focus-visible {\r
  outline: var(--border-width-medium, 2px) solid var(--color-primary, #7C4DFF);\r
  outline-offset: 2px;\r
}\r
\r
.social-pane__edit-button-label {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: var(--spacing-xxs, 0.3125rem);\r
}\r
\r
.social-pane__edit-button .profile-section-collapsible__edit-icon,\r
.social-pane__edit-button-icon {\r
  display: none;\r
  line-height: 0;\r
}\r
\r
.social-pane__edit-button-label svg,\r
.social-pane__edit-button-icon svg,\r
.social-pane__edit-button .profile-section-collapsible__edit-icon svg {\r
  width: 0.875rem;\r
  height: 0.875rem;\r
  display: inline-block;\r
  flex: 0 0 auto;\r
  vertical-align: middle;\r
}\r
\r
.social-pane__edit-button-label svg path,\r
.social-pane__edit-button-icon svg path,\r
.social-pane__edit-button .profile-section-collapsible__edit-icon svg path {\r
  fill: var(--color-primary, #7C4DFF);\r
  stroke: none;\r
}\r
\r
.social-pane__dialog-backdrop {\r
  position: fixed;\r
  inset: 0;\r
  z-index: 1000;\r
  padding: 1rem;\r
  background: rgb(15 23 42 / 0.45);\r
}\r
\r
.social-pane__dialog {\r
  position: relative;\r
  width: min(32rem, 100%);\r
  max-height: calc(100vh - 2rem);\r
  overflow: auto;\r
  border-radius: 1rem;\r
  background: var(--white, #fff);\r
  color: var(--color-text, #111827);\r
  padding: var(--spacing-md, 1.25rem);\r
  box-shadow: 0 20px 45px rgb(15 23 42 / 0.25);\r
}\r
\r
.social-pane__dialog-header {\r
  display: flex;\r
  align-items: flex-start;\r
  justify-content: space-between;\r
  gap: var(--spacing-md, 1rem);\r
  padding-bottom: var(--spacing-base, 0.5rem);\r
  margin-bottom: var(--spacing-sm, 0.938rem);\r
  border-bottom: var(--border-width-sm, 0.1rem) solid var(--slate-200, #E2E8F0);\r
}\r
\r
.social-pane__dialog-title {\r
  margin: 0 0 var(--spacing-base, 0.5rem);\r
}\r
\r
.social-pane__dialog-close {\r
  flex: 0 0 auto;\r
  --button-background: transparent;\r
  --button-border: transparent;\r
  --button-border-width: 0;\r
  --button-hover-background: transparent;\r
  --button-hover-border: transparent;\r
  color: var(--color-text-subheading, #6b7280);\r
  cursor: pointer;\r
  padding: 0;\r
  line-height: 0;\r
}\r
\r
.social-pane__dialog-close:hover {\r
  color: var(--color-text-primary, #364153);\r
}\r
\r
.social-pane__dialog-close:focus-visible {\r
  outline: var(--border-width-medium, 2px) solid var(--color-text-primary, #364153);\r
  outline-offset: 2px;\r
}\r
\r
.social-pane__dialog-close svg {\r
  width: var(--icon-xxxs, 0.75rem);\r
  height: var(--icon-xxxs, 0.75rem);\r
}\r
\r
.social-pane__dialog-close svg path {\r
  fill: currentColor;\r
}\r
\r
.social-pane__dialog-form {\r
  gap: var(--spacing-sm, 0.938rem);\r
}\r
\r
.social-pane__dialog-fields {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--spacing-sm, 0.938rem);\r
}\r
\r
.social-pane__dialog-field {\r
  gap: 0.2rem;\r
}\r
\r
.social-pane__dialog-field-header {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: var(--spacing-xs, 0.75rem);\r
}\r
\r
.social-pane__dialog-row-list {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.2rem;\r
}\r
\r
.social-pane__dialog-row {\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr) auto;\r
  align-items: center;\r
  gap: 0.45rem;\r
}\r
\r
.social-pane__dialog-label {\r
  margin: 0;\r
  color: var(--gray-700, #364153);\r
  font-size: var(--font-size-md, 1rem); /* 16px */\r
  font-weight: var(--font-weight-md, 500);\r
  line-height: normal;\r
}\r
\r
.social-pane__dialog-input {\r
  width: 100%;\r
  box-sizing: border-box;\r
  min-height: auto;\r
  resize: none;\r
}\r
\r
.social-pane__dialog-error {\r
  min-height: 1.25rem;\r
  margin: 0;\r
  color: var(--color-warning, red);\r
}\r
\r
.social-pane__dialog-saving-overlay {\r
  position: absolute;\r
  inset: 0;\r
  display: grid;\r
  place-items: center;\r
  background: rgba(255, 255, 255, 0.78);\r
  z-index: 10;\r
}\r
\r
.social-pane__dialog-saving-overlay[hidden] {\r
  display: none;\r
}\r
\r
.social-pane__dialog.modal--saving .social-pane__dialog-form {\r
  opacity: 0.45;\r
  pointer-events: none;\r
}\r
\r
.social-pane__dialog .modal__saving-indicator {\r
  gap: 0;\r
}\r
\r
.social-pane__dialog-row-button-icon {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  line-height: 0;\r
  flex: 0 0 auto;\r
}\r
\r
.social-pane__dialog-row-button-icon svg {\r
  display: block;\r
}\r
\r
.social-pane__dialog-field-header solid-ui-button.social-pane__dialog-row-button--add {\r
  justify-self: flex-start;\r
  width: auto;\r
  min-width: 0;\r
  max-width: none;\r
  margin-left: auto;\r
  flex: 0 0 auto;\r
  box-sizing: border-box;\r
  --button-min-height: auto;\r
  --button-padding-sm: var(--spacing-xxs, 0.3125rem);\r
  --button-background: transparent;\r
  --button-border: transparent;\r
  --button-border-width: 0;\r
  --button-hover-background: transparent;\r
  --button-hover-border: transparent;\r
  --button-text: var(--color-primary, #7C4DFF);\r
  --button-hover-text: var(--color-primary, #7C4DFF);\r
  --button-height-sm: auto;\r
  --button-font-weight: var(--font-weight-md, 500);\r
  --button-font-size-sm: var(--font-size-sm, 0.875rem);\r
  --button-line-height: var(--line-height-base, 1.5);\r
}\r
\r
.social-pane__dialog-field-header solid-ui-button.social-pane__dialog-row-button--add::part(button) {\r
  min-height: auto;\r
  padding: var(--spacing-xxs, 0.3125rem);\r
  border: none;\r
  background: none;\r
  color: var(--color-primary, #7C4DFF);\r
  font-weight: var(--font-weight-md, 500);\r
}\r
\r
.social-pane__dialog-field-header solid-ui-button.social-pane__dialog-row-button--add:hover::part(button) {\r
  text-decoration: underline;\r
}\r
\r
.social-pane__add-more-content {\r
  display: inline;\r
}\r
\r
.social-pane__add-more-inline {\r
  display: inline;\r
  white-space: normal;\r
}\r
\r
.social-pane__add-more-icon {\r
  display: inline-block;\r
  width: var(--icon-xxxs, 0.75rem);\r
  height: var(--icon-xxxs, 0.75rem);\r
  margin-right: var(--spacing-xxs, 0.3125rem);\r
  line-height: 0;\r
  vertical-align: text-top;\r
}\r
\r
.social-pane__add-more-icon svg {\r
  width: 100%;\r
  height: 100%;\r
  display: block;\r
}\r
\r
.social-pane__dialog-row-list solid-ui-button.social-pane__dialog-row-button--remove {\r
  min-height: var(--min-touch-target, 44px);\r
  min-width: var(--min-touch-target, 44px);\r
  color: var(--gray-300, #D1D5DC);\r
  --button-background: transparent;\r
  --button-box-shadow: none;\r
  --button-active-box-shadow: none;\r
  --button-active-transform: none;\r
  --button-border: transparent;\r
  --button-border-width: 0;\r
  --button-border-radius: var(--border-radius-base, 0.3125rem);\r
  --button-hover-background: var(--lavender-300, #e6dcff);\r
  --button-hover-border: transparent;\r
  --button-hover-text: var(--color-primary, #7C4DFF);\r
  --button-hover-box-shadow: none;\r
  --button-text: currentColor;\r
  --button-height-md: var(--min-touch-target, 44px);\r
  --button-padding-md: 0;\r
  --button-padding-x-sm: 0;\r
  --button-icon-size-md: var(--icon-xxs, 1rem);\r
  --button-icon-size-lg: var(--icon-xxs, 1rem);\r
}\r
\r
.social-pane__dialog-row-list solid-ui-button.social-pane__dialog-row-button--remove:hover,\r
.social-pane__dialog-row-list solid-ui-button.social-pane__dialog-row-button--remove:focus-within {\r
  color: var(--gray-300, #D1D5DC);\r
}\r
\r
.social-pane__dialog-row-button-icon--remove svg {\r
  width: 1rem;\r
  height: 1rem;\r
}\r
\r
.social-pane__dialog-row-button-icon--remove svg path {\r
  stroke: currentColor;\r
}\r
\r
.social-pane__dialog-actions {\r
  display: flex;\r
  justify-content: flex-end;\r
  gap: var(--spacing-xs, 0.75rem);\r
  padding-top: var(--spacing-base, 0.5rem);\r
  margin-top: 0;\r
  border-top: var(--border-width-sm, 0.1rem) solid var(--slate-200, #E2E8F0);\r
}\r
\r
.social-pane__dialog-actions > solid-ui-button {\r
  width: 10.8rem;\r
}\r
\r
.social-pane__dialog-actions > solid-ui-button {\r
  --button-border-width: 1px;\r
  --button-border-radius: var(--border-radius-base, 0.3125rem);\r
  --button-box-shadow: none;\r
  --button-hover-box-shadow: none;\r
  --button-active-box-shadow: none;\r
  --button-active-transform: none;\r
}\r
\r
.social-pane__dialog-actions solid-ui-button.social-pane__dialog-button--save {\r
  --button-font-size-md: var(--font-size-lg, 1.125rem);\r
  --button-background: var(--color-primary, #7C4DFF);\r
  --button-border: var(--color-primary, #7C4DFF);\r
  --button-text: var(--white, #FFF);\r
  --button-hover-background: color-mix(in srgb, var(--color-primary, #7C4DFF) 90%, black);\r
  --button-hover-border: color-mix(in srgb, var(--color-primary, #7C4DFF) 90%, black);\r
  --button-hover-text: var(--white, #FFF);\r
}\r
\r
.social-pane__dialog-actions solid-ui-button.social-pane__dialog-button--cancel {\r
  --button-background: var(--white, #FFF);\r
  --button-border: var(--gray-300, #D1D5DC);\r
  --button-font-weight: var(--font-weight-normal, normal);\r
  --button-text: var(--gray-800, #1E2939);\r
  --button-hover-background: var(--blue-900, #083575);\r
  --button-hover-border: var(--blue-900, #083575);\r
  --button-hover-text: var(--white, #FFF);\r
  --button-font-size-md: var(--font-size-sm, 0.875rem);\r
}\r
\r
.social-pane__header-name {\r
  color: var(--color-text-heading, #000);\r
  font-size: var(--font-size-xxl, 1.75rem); /* 28px */\r
  font-weight: var(--font-weight-bold, 600);\r
  margin: 0;\r
  padding: 0;\r
  text-indent: 0;\r
  line-height: 1.2;\r
  text-align: left;\r
  overflow-wrap: anywhere;\r
  transform: translateX(-4px);\r
}\r
\r
.social-pane__header-location {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: var(--spacing-2xs, 0.625rem);\r
  color: var(--color-text-secondary, #4A5565);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  font-weight: var(--font-weight-normal, 400);\r
  line-height: 1.2;\r
}\r
\r
.social-pane__header-job-org {\r
  margin: 0;\r
  color: var(--color-text-subheading, #101828);\r
  width: 100%;\r
  white-space: normal;\r
  font-size: var(--font-size-lg, 1.125rem);\r
  font-weight: var(--font-weight-md, 500);\r
  line-height: 1.25;\r
  text-align: left;\r
}\r
\r
.social-pane__header-location-icon {\r
  line-height: 0;\r
}\r
\r
.social-pane__header-location-icon svg {\r
  width: var(--icon-xxs, 1rem);\r
  height: var(--icon-xxs, 1rem);\r
}\r
\r
.social-profile-links {\r
  display: grid;\r
  grid-template-columns: repeat(2, max-content);\r
  align-items: start;\r
  column-gap: 1rem;\r
  row-gap: 0.15rem;\r
}\r
\r
.social-pane__header-hero {\r
  width: 140px;\r
  height: 140px;\r
  border-radius: var(--border-radius-full, 0.625rem); /* 10px */;\r
  border: var(--border-width-sm, 0.1rem) solid var(--color-primary, #7C4DFF);\r
  background: var(--gray-200, #E5E7EB) 50% / cover no-repeat;\r
  background-position: 50%;\r
  object-fit: cover;\r
  object-position: center;\r
}\r
\r
.social-pane__header-hero-icon {\r
  width: 140px;\r
  height: 140px;\r
  border-radius: var(--border-radius-full, 0.625rem) !important;\r
  border: var(--border-width-sm, 0.1rem) solid var(--color-primary, #7C4DFF);\r
  background: var(--color-card-bg);\r
  line-height: 0;\r
  flex-shrink: 0;\r
}\r
\r
.social-pane__header-hero-icon svg {\r
  display: block;\r
  width: 100%;\r
  height: 100%;\r
}\r
\r
\r
.social-pane .social-layout {\r
  display: flex;\r
  align-items: flex-start;\r
  gap: 1rem;\r
  width: 100%;\r
}\r
\r
.social-pane .social-primary {\r
  flex: 1 1 70%;\r
  min-width: 0;\r
  display: grid;\r
  grid-template-columns: minmax(0, 1fr);\r
  grid-template-rows: auto minmax(0, auto);\r
  gap: 0;\r
  align-items: start;\r
}\r
\r
.social-pane .social-primary__tabs {\r
  grid-column: 1;\r
  grid-row: 1;\r
  display: flex;\r
  align-items: center;\r
  gap: var(--spacing-base, 0.5rem);\r
  padding: 0;\r
  background: transparent;\r
  width: fit-content;\r
  max-width: 100%;\r
  margin-bottom: 0;\r
  position: relative;\r
  z-index: 1;\r
}\r
\r
.social-pane .social-primary__tab {\r
  appearance: none;\r
  -webkit-appearance: none;\r
  border: 0;\r
  border-bottom: var(--border-width-sm, 0.1rem) solid transparent;\r
  border-radius: 0;\r
  background: transparent;\r
  color: #374151;\r
  cursor: pointer;\r
  font: inherit;\r
  font-weight: var(--font-weight-bold, 600);\r
  padding: var(--spacing-2xs, 0.625rem) 1rem;\r
  box-shadow: none !important;\r
  transition: background-color 120ms ease, color 120ms ease, box-shadow 120ms ease;\r
}\r
\r
.social-pane .social-primary__tab:hover {\r
  background: var(--lavender-300, #e6dcff) !important;\r
  color: var(--grey-purple-900, #332746);\r
  box-shadow: none !important;\r
}\r
\r
.social-pane .social-primary__tab[aria-selected='true'],\r
.social-pane .social-primary__tab--active {\r
  background: transparent;\r
  color: var(--grey-purple-900, #332746);\r
  box-shadow: none !important;\r
  border-bottom-color: var(--color-primary, #7C4DFF);\r
}\r
\r
.social-pane .social-primary__tab:focus-visible {\r
  outline: none;\r
  outline-offset: 2px;\r
  box-shadow: none !important;\r
}\r
\r
.social-pane .social-primary__panel {\r
  grid-column: 1;\r
  grid-row: 2;\r
  display: none;\r
  opacity: 0;\r
  visibility: hidden;\r
  pointer-events: none;\r
  transform: translateY(0.35rem);\r
  transition: opacity 160ms ease, transform 160ms ease, visibility 0s linear 160ms;\r
}\r
\r
.social-pane .social-primary__panel--active {\r
  display: block;\r
  opacity: 1;\r
  visibility: visible;\r
  pointer-events: auto;\r
  transform: translateY(0);\r
  border: 0;\r
  border-bottom: var(--border-width-sm, 0.1rem) solid transparent;\r
  transition: opacity 180ms ease, transform 180ms ease;\r
}\r
\r
.social-pane .social-pane__mutual-friends,\r
.social-pane .social-pane__all-friends {\r
  margin-top: 0;\r
  padding-top: var(--spacing-xxxs, 0.2rem);\r
}\r
\r
.social-pane .social-main {\r
  display: table;\r
  background-color: var(--color-card-bg, #fff);\r
  color: var(--color-text-primary, #364153);\r
  border: 0;\r
  padding: 0;\r
  box-sizing: border-box;\r
  width: 100%;\r
  border-collapse: collapse;\r
}\r
\r
.social-pane .social-main--mutual {\r
  gap: var(--spacing-xs, 0.75rem);\r
  margin-top: 1em;\r
  margin-bottom: 1em;\r
  padding: 1rem;\r
  border-radius: var(--border-radius-lg, 0.75rem);\r
}\r
\r
.social-pane .social-main--requests {\r
  display: flex;\r
  flex-direction: column;\r
  gap: var(--spacing-md, 1rem);\r
  margin-top: 0.75rem;\r
  margin-bottom: 1rem;\r
  padding: 1rem;\r
  border-radius: var(--border-radius-lg, 0.75rem);\r
}\r
\r
.social-requests__note {\r
  margin: 0;\r
  color: var(--color-text-subheading, #475467);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  line-height: 1.5;\r
}\r
\r
.social-requests__group {\r
  gap: var(--spacing-sm, 0.938rem);\r
}\r
\r
.social-requests__group-header {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0.125rem;\r
}\r
\r
.social-requests__group-title {\r
  margin: 0;\r
  color: var(--color-text-heading, #101828);\r
  font-size: var(--font-size-lg, 1.125rem);\r
  line-height: 1.25;\r
}\r
\r
.social-requests__group-description,\r
.social-requests__empty {\r
  margin: 0;\r
  color: var(--color-text-subheading, #667085);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  line-height: 1.5;\r
}\r
\r
.social-requests__table {\r
  margin-top: 0;\r
}\r
\r
.social-pane .social-mutual-summary {\r
  gap: var(--spacing-base, 0.5rem);\r
}\r
\r
.social-pane .social-mutual-summary-line {\r
  color: var(--slate-700, #314158);\r
  font-size: var(--font-size-sm, 0.95rem);\r
  line-height: var(--line-height-base, 1.5);\r
  justify-content: flex-start;\r
  padding: 1rem;\r
}\r
\r
.social-pane .social-mutual-summary-line--action {\r
  flex-wrap: wrap;\r
  gap: var(--spacing-xxs, 0.75rem);\r
}\r
\r
.social-pane .social-mutual-confirm-prompt {\r
  display: inline-flex;\r
  flex-wrap: wrap;\r
  align-items: center;\r
  gap: var(--spacing-xxxs, 0.2rem);\r
  font-weight: var(--font-weight-semibold, 600);\r
}\r
\r
.social-pane .social-pane__friend-action--inline {\r
  position: static;\r
  top: auto;\r
  right: auto;\r
  z-index: auto;\r
  align-self: flex-start;\r
}\r
\r
.social-pane .social-mutual-checkbox-form {\r
  display: block;\r
  margin: 0;\r
  padding: 0 1rem 1rem;\r
}\r
\r
.social-pane .social-mutual-checkbox-form label {\r
  display: inline-flex;\r
  align-items: center;\r
  flex-wrap: wrap;\r
  gap: var(--spacing-2xs, 0.65rem);\r
  color: var(--slate-700, #374151);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  line-height: 1.4;\r
}\r
\r
.social-pane .social-mutual-checkbox-form input[type='checkbox'] {\r
  width: 1rem;\r
  height: 1rem;\r
  margin: 0;\r
  accent-color: var(--color-primary, #7C4DFF);\r
}\r
\r
.social-pane .social-mutual-checkbox-form input[type='checkbox']:disabled {\r
  opacity: 0.65;\r
  cursor: not-allowed;\r
}\r
\r
.social-pane .social-friends-list {\r
  width: 99%;\r
  margin-top: 0;\r
}\r
\r
.social-pane__all-friends .social-friends-list {\r
  border-collapse: collapse;\r
}\r
\r
.social-pane .social-friends-list-surface {\r
  width: 100%;\r
  padding: 12px;\r
  height: 6rem;\r
  vertical-align: top;\r
}\r
\r
.social-pane .social-friends-drop-hint {\r
  margin: 0 0 12px;\r
  color: var(--solid-ui-color-gray-600, #4a5565);\r
  font-size: var(--solid-ui-font-size-sm, 0.875rem);\r
  line-height: 1.4;\r
}\r
\r
.social-pane .social-pane__all-friends {\r
  position: relative;\r
}\r
\r
.social-pane .social-friends-delete-confirmation:not(:empty) {\r
  position: absolute;\r
  inset: 0;\r
  z-index: 10;\r
  display: grid;\r
  place-items: center;\r
  padding: 12px;\r
  pointer-events: none;\r
}\r
\r
.social-pane .social-friends-delete-confirmation > div {\r
  width: max-content;\r
  max-width: 100%;\r
  pointer-events: auto;\r
}\r
\r
.social-pane .social-friends-delete-confirmation > div > div {\r
  max-width: 100%;\r
  box-sizing: border-box;\r
}\r
\r
.social-pane .social-friends-grid {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: stretch;\r
  width: 100%;\r
  table-layout: fixed;\r
  border-collapse: separate;\r
  border-spacing: 0;\r
  gap: var(--spacing-xs, 0.75rem);\r
  margin: 5px;\r
}\r
\r
.social-pane .social-friends-grid > tbody {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: stretch;\r
  width: 100%;\r
  gap: var(--spacing-xs, 0.75rem);\r
}\r
\r
.social-pane .social-friends-grid > tr,\r
.social-pane .social-friends-grid > tbody > tr {\r
  display: inline-table;\r
  width: calc(50% - 0.375rem);\r
  table-layout: fixed;\r
  box-sizing: border-box;\r
}\r
\r
.social-pane .social-friends-grid > tr,\r
.social-pane .social-friends-grid > tbody > tr,\r
.social-pane .social-friend-card {\r
  border: 1px solid var(--gray-200, #E5E7EB);\r
  background: var(--white, #fff);\r
  border-radius: var(--border-radius-lg, 0.75rem);\r
  overflow: clip;\r
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.08);\r
  transition: box-shadow 140ms ease, border-color 140ms ease, transform 140ms ease;\r
}\r
\r
.social-pane .social-friends-grid > tr:hover,\r
.social-pane .social-friends-grid > tbody > tr:hover,\r
.social-pane .social-friend-card:hover {\r
  border-color: var(--gray-300, #D1D5DC);\r
  box-shadow: 0 6px 18px rgb(0 0 0 / 0.1);\r
  transform: translateY(-1px);\r
}\r
\r
.social-pane .social-friends-grid > tr td,\r
.social-pane .social-friends-grid > tbody > tr td,\r
.social-pane .social-friend-card td {\r
  background: var(--color-background, #F8F9FB);\r
  box-sizing: border-box;\r
}\r
\r
.social-pane .social-friends-grid > tr > td:nth-child(2),\r
.social-pane .social-friends-grid > tbody > tr > td:nth-child(2) {\r
  width: auto;\r
  min-width: 0;\r
  padding-left: 1.4rem;\r
}\r
\r
.social-pane .social-friends-grid > tr > td:nth-child(3),\r
.social-pane .social-friends-grid > tbody > tr > td:nth-child(3) {\r
  position: relative;\r
  width: 2.5rem;\r
  min-width: 2.5rem;\r
  padding-left: 0.25rem;\r
  padding-right: 0.25rem;\r
  vertical-align: top;\r
}\r
\r
.social-pane__all-friends .social-friends-grid > tr > td:nth-child(3) > a,\r
.social-pane__all-friends .social-friends-grid > tbody > tr > td:nth-child(3) > a {\r
  float: right;\r
  clear: right;\r
  display: inline-block;\r
  line-height: 0;\r
  margin-top: 0.15em;\r
  vertical-align: middle;\r
}\r
\r
.social-pane .social-friends-grid > tr > td:nth-child(3) > img[data-testid='deleteButtonWithCheck'],\r
.social-pane .social-friends-grid > tbody > tr > td:nth-child(3) > img[data-testid='deleteButtonWithCheck'] {\r
  position: absolute;\r
  top: 0.7em;\r
  right: 0.7em;\r
  display: block;\r
  float: none;\r
  width: 1em;\r
  height: 1em;\r
  min-width: 1em;\r
  max-width: 1em;\r
  min-height: 1em;\r
  max-height: 1em;\r
  margin: 0;\r
  vertical-align: middle;\r
  object-fit: contain;\r
}\r
\r
.social-pane .social-friends-grid > tr > td:first-child,\r
.social-pane .social-friends-grid > tbody > tr > td:first-child {\r
  padding-right: 1.2rem;\r
}\r
\r
.social-pane .social-friends-grid td > div > div {\r
  min-width: 0 !important;\r
  max-width: 100% !important;\r
  width: 100% !important;\r
  white-space: normal !important;\r
  overflow-wrap: anywhere;\r
}\r
\r
.social-pane .social-friends-grid td > div > div button {\r
  white-space: normal !important;\r
}\r
\r
.social-pane .social-friends-grid > tr > td:nth-child(2) > div:first-child,\r
.social-pane .social-friends-grid > tbody > tr > td:nth-child(2) > div:first-child {\r
  display: flex;\r
  flex-wrap: wrap;\r
  align-items: flex-start;\r
  gap: 0.2rem 0.4rem;\r
  min-width: 0;\r
}\r
\r
/* change the style of the name / label in the friend card */\r
.social-pane .social-friends-grid > tr > td:nth-child(2) > div:first-child > span:first-of-type,\r
.social-pane .social-friends-grid > tbody > tr > td:nth-child(2) > div:first-child > span:first-of-type {\r
  display: inline-block;\r
  max-width: 100%;\r
  vertical-align: text-top;\r
  font-size: var(--font-size-lg, 1.125rem); /* 18px */\r
  font-weight: var(--font-weight-bold, 600); /* new design uses 600 */\r
  line-height: var(--line-height-tight);\r
  margin-top: 0;\r
  margin-bottom: 0;\r
  overflow: visible;\r
  text-overflow: clip;\r
  white-space: normal;\r
  overflow-wrap: anywhere;\r
}\r
\r
.social-pane .social-friend-pronouns {\r
  display: inline;\r
  margin-left: var(--spacing-xs, 0.25rem);\r
  color: var(--color-text-secondary, #4A5565);\r
  font-size: var(--font-size-sm, 0.875rem); /* 14px */\r
  font-weight: var(--font-weight-regular, 400);\r
  line-height: 1.2;\r
  text-align: left;\r
}\r
\r
.social-pane .social-friend-job-org {\r
  margin: 0;\r
  width: 100%;\r
  min-width: 0;\r
  white-space: normal;\r
  overflow-wrap: anywhere;\r
  color: var(--color-text-subheading, #101828);\r
  font-size: var(--font-size-sm, 0.875rem);\r
  font-weight: var(--font-weight-medium, 500);\r
  line-height: 1.25;\r
  text-align: left;\r
}\r
\r
.social-pane .social-friend-location {\r
  color: var(--color-text-secondary, #6b7280);\r
  font-size: var(--font-size-xs, 0.8125rem);\r
  line-height: 1.3;\r
  overflow-wrap: anywhere;\r
}\r
\r
@media (max-width: 960px) {\r
  .social-pane .social-friends-grid > tr,\r
  .social-pane .social-friends-grid > tbody > tr {\r
    width: 100%;\r
  }\r
}\r
\r
/* From tabbedtab.css */\r
/* ***************** Social Pane **********/\r
\r
.social-pane a {\r
  color: var(--color-primary, #7C4DFF);\r
  text-decoration: none;\r
  font-weight: bold;\r
}\r
.social-pane a:hover {\r
  color: var(--color-primary, #7C4DFF);\r
  text-decoration: underline;\r
  font-weight: bold;\r
}\r
.social-pane a:active {\r
  color: var(--color-primary, #7C4DFF);\r
  text-decoration: none;\r
}\r
\r
.social-pane__link-button {\r
  width: fit-content;\r
  max-width: 100%;\r
  display: inline-flex;\r
  white-space: nowrap;\r
  background-color: transparent;\r
  border: none;\r
  margin-top: 0;\r
  margin-bottom: 0;\r
  padding: var(--spacing-xxxs, 0.2rem) var(--spacing-base, 0.5rem);\r
  text-align: left;\r
}\r
\r
.social-pane__link-button > a {\r
  display: inline-flex;\r
  max-width: 100%;\r
  white-space: normal;\r
  overflow-wrap: anywhere;\r
  background-color: transparent;\r
  color: var(--color-primary, #7C4DFF);\r
}\r
\r
.social-pane__link-button > a:link,\r
.social-pane__link-button > a:visited,\r
.social-pane__link-button > a:hover {\r
  color: var(--color-primary, #7C4DFF);\r
}\r
\r
.social-pane__link-button > a:hover {\r
  text-decoration: underline;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-content {\r
  display: grid;\r
  grid-template-columns: 4.375rem minmax(0, 1fr) auto;\r
  align-items: start;\r
  column-gap: var(--spacing-md, 1rem);\r
  row-gap: 0.25rem;\r
  padding: 1rem 1rem 0;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-media {\r
  display: contents;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-details {\r
  grid-column: 2;\r
  grid-row: 1;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 0.125rem;\r
  min-width: 0;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-actions {\r
  grid-column: 3;\r
  grid-row: 1;\r
  justify-self: end;\r
  justify-content: flex-end;\r
  width: auto;\r
  gap: var(--spacing-2xs, 0.3125rem);\r
  margin-left: 0;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-summary {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 0;\r
  width: 100%;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__header-name, .social-pane__header-job-org, .social-pane__header-location) {\r
  width: 100%;\r
  text-align: left;\r
  justify-content: flex-start;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-stats {\r
  width: 100%;\r
  justify-content: flex-start;\r
  align-self: flex-start;\r
  gap: var(--spacing-xs, 0.5rem);\r
  margin-top: -0.4375rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-profile-links {\r
  grid-column: 1 / -1;\r
  grid-row: 2;\r
  grid-template-columns: 1fr;\r
  row-gap: var(--spacing-xxxs, 0.2rem);\r
  justify-items: start;\r
  padding-left: 0;\r
  margin-top: -0.375rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane .social-primary__tabs,\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-primary__tabs {\r
  margin-top: -0.5rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__link-button {\r
  justify-self: start;\r
  padding-left: 0;\r
  padding-right: 0;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__link-button > a {\r
  font-size: var(--font-size-sm, 0.875rem);\r
  text-align: left;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__dialog-field-header {\r
  grid-template-columns: minmax(0, 1fr);\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__header-hero, .social-pane__header-hero-icon) {\r
  grid-column: 1;\r
  grid-row: 1;\r
  width: 5rem;\r
  height: 5rem;\r
  aspect-ratio: 1 / 1;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-name {\r
  font-size: var(--font-size-xl, 1.375rem);\r
  line-height: 1.15;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__header-job-org {\r
  font-size: var(--font-size-md, 1rem);\r
  line-height: 1.25;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane .social-friend-pronouns {\r
  font-size: 0.6875rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__header-location, .social-pane__header-stat),\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane .social-friend-location {\r
  font-size: var(--font-size-xxs, 0.75rem);\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__edit-button-label, .social-pane__edit-button .profile-section-collapsible__edit-label) {\r
  display: none !important;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__edit-button {\r
  --button-background: transparent;\r
  --button-border-width: 0;\r
  --button-border: transparent;\r
  --button-text: var(--color-text, #1A1A1A);\r
  --button-hover-background: var(--lavender-300, #e6dcff);\r
  --button-hover-border: transparent;\r
  --button-hover-text: var(--color-text, #1A1A1A);\r
  --button-font-size-sm: clamp(0.9rem, 2.1vw, 1rem);\r
  --button-font-weight: var(--font-weight-regular, 400);\r
  --button-icon-size-sm: 0.875rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__edit-button-icon, .social-pane__edit-button .profile-section-collapsible__edit-icon) {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  width: 0.875rem;\r
  height: 0.875rem;\r
  line-height: 0;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__edit-button-icon svg, .social-pane__edit-button .profile-section-collapsible__edit-icon svg) {\r
  width: 0.875rem;\r
  height: 0.875rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane__edit-button-icon svg path, .social-pane__edit-button .profile-section-collapsible__edit-icon svg path) {\r
  fill: var(--color-text, #1A1A1A);\r
  stroke: none;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__dialog-actions {\r
  flex-direction: row;\r
  align-items: center;\r
  justify-content: center;\r
  gap: var(--spacing-sm, 0.938rem);\r
  padding: var(--spacing-md, 1rem) 0 0;\r
  margin: var(--spacing-md, 1rem) auto 0;\r
  box-sizing: border-box;\r
  width: 100%;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__dialog-actions > solid-ui-button {\r
  flex: 0 0 auto;\r
  width: 10.8rem;\r
  min-width: 8.5rem;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane__dialog-field-header solid-ui-button.social-pane__dialog-row-button--add::part(button) {\r
  font-size: var(--font-size-sm, 0.875rem);\r
  line-height: var(--line-height-base, 1.5);\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] :is(.social-pane .social-layout, .social-pane .social-primary, .social-layout, .social-primary) {\r
  display: block;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-pane .social-friends-grid,\r
:is(.social-pane-host, .social-pane)[data-layout='mobile'] .social-friends-grid {\r
  display: block;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-input-mode='touch'] {\r
  --profile-interactive-cursor: auto;\r
}\r
\r
:is(.social-pane-host, .social-pane)[data-input-mode='pointer'] {\r
  --profile-interactive-cursor: pointer;\r
}\r
\r
@media (max-width: 600px) {\r
  .social-pane__header-content {\r
    display: grid;\r
    grid-template-columns: 4.375rem minmax(0, 1fr) auto;\r
    align-items: start;\r
    column-gap: var(--spacing-md, 1rem);\r
    row-gap: 0.25rem;\r
    padding: 1rem 1rem 0;\r
  }\r
\r
  .social-pane__header-media {\r
    display: contents;\r
  }\r
\r
  .social-pane__header-details {\r
    grid-column: 2;\r
    grid-row: 1;\r
    display: flex;\r
    flex-direction: column;\r
    align-items: flex-start;\r
    gap: 0.125rem;\r
    min-width: 0;\r
  }\r
\r
  .social-pane__header-actions {\r
    grid-column: 3;\r
    grid-row: 1;\r
    justify-self: end;\r
    justify-content: flex-end;\r
    width: auto;\r
    gap: var(--spacing-2xs, 0.3125rem);\r
    margin-left: 0;\r
  }\r
\r
  .social-pane__header-summary {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 0;\r
    width: 100%;\r
  }\r
\r
  .social-pane__header-name,\r
  .social-pane__header-job-org,\r
  .social-pane__header-location {\r
    width: 100%;\r
    text-align: left;\r
    justify-content: flex-start;\r
  }\r
\r
  .social-pane__header-stats {\r
    width: 100%;\r
    justify-content: flex-start;\r
    align-self: flex-start;\r
    gap: var(--spacing-xs, 0.5rem);\r
    margin-top: -0.4375rem;\r
  }\r
\r
  .social-profile-links {\r
    grid-column: 1 / -1;\r
    grid-row: 2;\r
    grid-template-columns: 1fr;\r
    row-gap: var(--spacing-xxxs, 0.2rem);\r
    justify-items: start;\r
    padding-left: 0;\r
    margin-top: -0.375rem;\r
  }\r
\r
  .social-pane .social-primary__tabs {\r
    margin-top: -0.5rem;\r
  }\r
\r
  .social-pane__link-button {\r
    justify-self: start;\r
    padding-left: 0;\r
    padding-right: 0;\r
  }\r
\r
  .social-pane__link-button > a {\r
    font-size: var(--font-size-sm, 0.875rem);\r
    text-align: left;\r
  }\r
\r
  .social-pane__dialog-field-header {\r
    grid-template-columns: minmax(0, 1fr);\r
  }\r
\r
  .social-pane__header-hero,\r
  .social-pane__header-hero-icon {\r
    grid-column: 1;\r
    grid-row: 1;\r
    width: 5rem;\r
    height: 5rem;\r
    aspect-ratio: 1 / 1;\r
  }\r
\r
  .social-pane__header-name {\r
    font-size: var(--font-size-xl, 1.375rem);\r
    line-height: 1.15;\r
  }\r
\r
  .social-pane__header-job-org {\r
    font-size: var(--font-size-md, 1rem);\r
    line-height: 1.25;\r
  }\r
\r
  .social-pane .social-friend-pronouns {\r
    font-size: 0.6875rem;\r
  }\r
\r
  .social-pane__header-location,\r
  .social-pane__header-stat,\r
  .social-pane .social-friend-location {\r
    font-size: var(--font-size-xxs, 0.75rem);\r
  }\r
\r
  .social-pane__friend-action {\r
    --button-padding-sm: var(--spacing-xxxs, 0.2rem) var(--spacing-xxs-old, 0.3rem);\r
    --button-font-size-sm: var(--font-size-xs, 0.813rem);\r
    --button-border-radius-sm: var(--border-radius-base, 0.3125rem);\r
  }\r
\r
  .social-pane__edit-button-label,\r
  .social-pane__edit-button .profile-section-collapsible__edit-label {\r
    display: none !important;\r
  }\r
\r
  .social-pane__edit-button {\r
    --button-background: transparent;\r
    --button-border-width: 0;\r
    --button-border: transparent;\r
    --button-background: transparent;\r
    --button-text: var(--color-text, #1A1A1A);\r
    --button-hover-background: var(--lavender-300, #e6dcff);\r
    --button-hover-border: transparent;\r
    --button-hover-text: var(--color-text, #1A1A1A);\r
    --button-font-size-sm: clamp(0.9rem, 2.1vw, 1rem);\r
    --button-font-weight: var(--font-weight-regular, 400);\r
    --button-icon-size-sm: 0.875rem;\r
  }\r
\r
  .social-pane__edit-button-icon,\r
  .social-pane__edit-button .profile-section-collapsible__edit-icon {\r
    display: inline-flex;\r
    align-items: center;\r
    justify-content: center;\r
    width: 0.875rem;\r
    height: 0.875rem;\r
    line-height: 0;\r
  }\r
\r
  .social-pane__edit-button-icon svg,\r
  .social-pane__edit-button .profile-section-collapsible__edit-icon svg {\r
    width: 0.875rem;\r
    height: 0.875rem;\r
  }\r
\r
  .social-pane__edit-button-icon svg path,\r
  .social-pane__edit-button .profile-section-collapsible__edit-icon svg path {\r
    fill: var(--color-text, #1A1A1A);\r
    stroke: none;\r
  }\r
\r
  .social-pane__dialog-actions {\r
    flex-direction: row;\r
    align-items: center;\r
    justify-content: center;\r
    gap: var(--spacing-sm, 0.938rem);\r
    padding: var(--spacing-md, 1rem) 0 0;\r
    margin: var(--spacing-md, 1rem) auto 0;\r
    box-sizing: border-box;\r
    width: 100%;\r
  }\r
\r
  .social-pane__dialog-actions > solid-ui-button {\r
    flex: 0 0 auto;\r
    width: 10.8rem;\r
    min-width: 8.5rem;\r
  }\r
\r
  .social-pane__dialog-field-header solid-ui-button.social-pane__dialog-row-button--add::part(button) {\r
    font-size: var(--font-size-sm, 0.875rem);\r
    line-height: var(--line-height-base, 1.5);\r
  }\r
\r
  .social-pane .social-layout,\r
  .social-pane .social-primary {\r
    display: block;\r
  }\r
\r
  .social-pane .social-friends-grid {\r
    display: block;\r
  }\r
\r
  .social-pane .social-friends-grid > tr,\r
  .social-pane .social-friends-grid > tbody > tr {\r
    display: table;\r
    width: 100%;\r
    margin-bottom: var(--spacing-xs, 0.75rem);\r
  }\r
\r
  .social-pane .social-friends-grid > tr:last-child,\r
  .social-pane .social-friends-grid > tbody > tr:last-child {\r
    margin-bottom: 0;\r
  }\r
\r
  .social-pane .social-main {\r
    width: 100%;\r
  }\r
}\r
`,"text/css"));function td(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("social-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var vo={icon:R.originalIconBase+"foaf/foafTiny.gif",name:"social",label:function(e,n){let r=n.session.store.findTypeURIs(e);return r[o.foaf("Person").uri]||r[o.vcard("Individual").uri]?"Friends":null},global:!1,render:function(e,n){let t=n.dom,r=function(b,y){let v=[];for(let F=0;F<b.length;F++)for(let k=0;k<y.length;k++)if(y[k].sameTerm(b[F])){v.push(y[k]);break}return v},i=function(b){let y=new Set,v=[];for(let F of b)!F?.value||y.has(F.value)||(y.add(F.value),v.push(F));return v},a=function(b,y){if(!y)return b;let v=t.createElement("a");return v.setAttribute("href",y),v.appendChild(b),v},s=function(b){return t.createTextNode(b)},d=function(){},m=function(b,y,v,F={}){let k=t.createElement("form"),C=t.createElement("label"),O=t.createElement("input"),Y=t.createElement("span");Y.className="question",typeof b=="string"?Y.textContent=b:Y.appendChild(b),O.setAttribute("type","checkbox"),F.disabled&&(O.disabled=!0,F.disabledTitle&&(O.title=F.disabledTitle,O.setAttribute("aria-label",F.disabledTitle))),C.appendChild(Y),C.appendChild(O),k.appendChild(C);let re=function(fe){if(this.checked)try{f.UserInput.sparqler.insert_statement(y,function(ue,se,xe){if(Y.className="question",!se){le.alert("Error occurs while inserting "+y+`

`+xe),O.checked=!1;return}c.add(y.subject,y.predicate,y.object,y.why),d()})}catch(ue){le.error("Data write fails:"+ue),le.alert("Data write fails:"+ue),O.checked=!1,Y.className="question"}else try{f.UserInput.sparqler.delete_statement(y,function(ue,se,xe){Y.className="question",se?(c.removeMany(y.subject,y.predicate,y.object,y.why),d()):(le.alert("Error occurs while deleting "+y+`

`+xe),O.checked=!0)})}catch(ue){le.alert("Delete fails:"+ue),O.checked=!0}};return O.checked=v,O.addEventListener("click",re,!1),k},f=n.getOutliner(t),c=n.session.store,l=t.createElement("div");l.classList.add("social-pane","flex-column","gap-xxs"),td(l,n);let u=o.foaf,p=o.vcard,g=ve.currentUser(),h=g?g.uri:null,w=g&&c.sameThings(g,e),_=u("knows"),I=c.anyValue(e,u("givenname"))||c.anyValue(e,u("firstName"))||c.anyValue(e,u("nick"))||c.anyValue(e,u("name"))||c.anyValue(e,p("fn")),E=c.each(e,_),P=i(E),A=g?i(c.each(g,u("knows"))):[],D=g&&!w?i(r(P,A)).filter(b=>!c.sameThings(b,g)):[],B=ct(e,g),N=null,T=!1,X=!1,j=!1,te=l.appendChild(t.createElement("div"));te.className="social-layout";let de=te.appendChild(t.createElement("div"));de.className="social-primary";let V=de.appendChild(t.createElement("div"));V.classList.add("social-primary__tabs","flex-center"),V.setAttribute("role","tablist"),V.setAttribute("aria-label","Social sections");let L=V.appendChild(t.createElement("button"));L.className="social-primary__tab",L.type="button",L.id="social-tab-all-friends",L.textContent="All Friends",L.setAttribute("role","tab"),L.setAttribute("aria-controls","social-panel-all-friends"),L.setAttribute("aria-selected","true"),L.tabIndex=0;let K=V.appendChild(t.createElement("button"));if(K.className="social-primary__tab",K.type="button",K.id="social-tab-mutual",K.textContent="Mutual",K.setAttribute("role","tab"),K.setAttribute("aria-controls","social-panel-mutual"),K.setAttribute("aria-selected","false"),K.tabIndex=-1,g){let b=c.each(void 0,u("primaryTopic"),g),y="";for(let v=0;v<b.length;v++)if(c.whether(b[v],o.rdf("type"),u("PersonalProfileDocument"))){let F=b[v];if(T=f.UserInput.sparqler.editable(F.uri,c),!T)y+="Your profile <"+S.escapeForXML(F.uri)+"> is not remotely editable.";else{N=F;break}}if(!w){let v=c.canon(g);X=c.whether(e,_,v),j=!1;let F=c.statementsMatching(v,_,e);F.length&&(j=!0,N||(N=F[0].why))}}let ne=B==="owner"&&T,G=B==="authenticated"&&!w&&T&&!!N,W=ne,U=new Map;(function(b){let y=new Map;b.forEach(v=>{!v?.value||v.value===e.value||y.set(v.value,Gt(c,v))}),U.clear(),y.forEach((v,F)=>{U.set(F,v)})})(P);let H=function(b,y){let v=U.get(b.value)||Gt(c,b);U.set(b.value,v);let F=y.createElement("div"),k=[v.jobTitle,v.organization].filter(Boolean).join(" | ");if(k){let C=F.appendChild(y.createElement("div"));C.className="social-friend-job-org",C.textContent=k}if(v.location){let C=F.appendChild(y.createElement("div"));C.className="social-friend-location",C.innerHTML=`${Vr} ${v.location}`}return F.childNodes.length?F:null},Q=function(b,y){let v=U.get(b.value)||Gt(c,b);U.set(b.value,v);let F=v.pronouns;if(!F)return null;let k=y.createElement("span");return k.className="social-friend-pronouns",k.textContent=`(${F})`,k},ae=g&&!w?Hr({dom:t,subject:e,familiar:I,me:g,meUri:h,incoming:X,outgoing:j,editable:G,profile:N,knows:_,mutualConnections:D,link:a,text:s,buildCheckboxForm:m,renderSupportingInfo:H,renderNameSuffix:Q}):{section:t.createElement("section"),content:t.createElement("div"),refreshMutualFriends:function(){}},M=ae.section,J=ae.content;M.className||(M.className="social-pane__mutual-friends social-primary__panel",M.id="social-panel-mutual",M.setAttribute("role","tabpanel"),M.setAttribute("aria-labelledby","social-tab-mutual"),J.className="social-main social-main--mutual",M.appendChild(J)),de.appendChild(M);let $=go({dom:t,subject:e,profile:W?N:null,editable:W,renderSupportingInfo:H,renderNameSuffix:Q}),oe=$.section,ie=$.friendsList;de.appendChild(oe);let ce=Yn(c,e),pe=bo({dom:t,triage:ce,renderSupportingInfo:H,renderNameSuffix:Q}),ge=pe.section;de.appendChild(ge);let Pe=V.appendChild(t.createElement("button"));Pe.className="social-primary__tab",Pe.type="button",Pe.id="social-tab-requests",Pe.textContent="Requests",Pe.setAttribute("role","tab"),Pe.setAttribute("aria-controls","social-panel-requests"),Pe.setAttribute("aria-selected","false"),Pe.tabIndex=-1;let Le="all-friends",ye=B==="owner",Te=function(b){Le=b;let y=b==="mutual",v=b==="all-friends",F=ye&&b==="requests";K.classList.toggle("social-primary__tab--active",y),K.setAttribute("aria-selected",String(y)),K.tabIndex=y?0:-1,L.classList.toggle("social-primary__tab--active",v),L.setAttribute("aria-selected",String(v)),L.tabIndex=v?0:-1,Pe.classList.toggle("social-primary__tab--active",F),Pe.setAttribute("aria-selected",String(F)),Pe.tabIndex=F?0:-1,M.classList.toggle("social-primary__panel--active",y),M.setAttribute("aria-hidden",String(!y)),oe.classList.toggle("social-primary__panel--active",v),oe.setAttribute("aria-hidden",String(!v)),ge.classList.toggle("social-primary__panel--active",F),ge.setAttribute("aria-hidden",String(!F)),ge.hidden=!ye||!F},Ze=function(){if(!g||w)return;let b=c.canon(g);X=c.whether(e,_,b),j=c.statementsMatching(b,_,e).length>0;let v=Hr({dom:t,subject:e,familiar:I,me:g,meUri:h,incoming:X,outgoing:j,editable:G,profile:N,knows:_,mutualConnections:D,link:a,text:s,buildCheckboxForm:m,renderSupportingInfo:H,renderNameSuffix:Q});M.replaceWith(v.section),ae=v,M=v.section,J=v.content};d=function(){Ze(),ce=Yn(c,e),pe.refreshRequests(ce),Te(Le)},Te("all-friends");let Me=function(b){let y=b==="authenticated"&&!w;if(ye=b==="owner",K.hidden=!y,Pe.hidden=!ye,!ye&&Le==="requests"){Te("all-friends");return}Te("all-friends")};K.addEventListener("click",function(){Te("mutual")}),L.addEventListener("click",function(){Te("all-friends")}),Pe.addEventListener("click",function(){Te("requests")});let He=function(){let b=ie.refresh;typeof b=="function"&&b.call(ie)},x=function(){ae.refreshMutualFriends()};return(async()=>{try{for await(let b of od(n,e))U.clear(),b.forEach(y=>{U.set(y.url,y)}),He(),x()}catch{}})(),(async()=>{try{ce=await yo(n,e),pe.refreshRequests(ce),He(),x()}catch{}})(),Me("anonymous"),ve.checkUser().then(b=>{let y=ct(e,b);Me(y)}).catch(()=>{Me("anonymous")}),l}},rd=3;function id(e,n){let t=e.anyJS(n,o.solid("preferredSubjectPronoun"))||"";if(t){let r=e.anyJS(n,o.solid("preferredObjectPronoun"));r&&(t+="/"+r)}return t||""}function ad(e,n){return e&&n?`${n}, ${e}`:e||n||null}function Gt(e,n){let t=e.anyValue(n,o.vcard("fn"))||e.anyValue(n,o.foaf("name"))||null,r=e.anyValue(n,o.vcard("nickname"))||e.anyValue(n,o.foaf("nick"))||null,i=e.anyValue(n,o.vcard("bday"))||null,a=ee.findImage(n),s=e.anyValue(n,o.vcard("role"))||null,d=e.anyValue(n,o.vcard("organization-name"))||null,f=e.any(n,o.vcard("hasAddress"))||null,c=f!=null?e.anyValue(f,o.vcard("country-name")):null,l=f!=null?e.anyValue(f,o.vcard("locality")):null,u=ad(c,l),p=id(e,n);return{url:n.value,imageUrl:a,name:t,nickname:r,jobTitle:s,organization:d,birthdate:i,location:u,pronouns:p,subjectNode:n}}async function*od(e,n,t=rd){let r=e.session.store,i=r?.fetcher;if(i&&typeof i.load=="function")try{await i.load(n.doc())}catch{}let a=new Set,s=r.each(n,o.foaf("knows"),null,n.doc()),d=[];for(let f of s){let c=f?.value;!c||a.has(c)||n.value===c||(a.add(c),d.push(f))}let m=[];for(let f of d){if(i&&typeof i.load=="function")try{await i.load(f.doc())}catch{}m.push(Gt(r,f)),m.length%t===0&&(yield[...m])}m.length>0&&m.length%t!==0&&(yield[...m])}var sd=()=>Promise.all([import("./part-E7LFGATT.js"),import("./part-DURS3C3N.js")]).then(([e,n])=>({marked:e.marked,DOMPurify:n.default}));Be(he(`.human-readable-pane {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100%;
  padding: 0 40px;
  margin: 0;
  min-height: 0;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.human-readable-pane__container {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.human-readable-pane__frame {
  display: block;
  border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  padding: 1rem;
  height: var(--human-readable-pane-height, 480px);
  min-width: 0;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  resize: both;
  overflow: auto;
}

.human-readable-pane__frame--markdown,
.human-readable-pane__frame--plain-text {
  flex: 1 1 auto;
  height: auto;
  min-height: 100%;
  max-height: 100%;
  resize: none;
}

.human-readable-pane__frame--iframe {
  display: block;
  padding: 0;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  min-height: 0;
  box-sizing: border-box;
  background: var(--color-background, white);
}

/* Webpages, PDFs and video fill the pane; the framed document scrolls internally. */
/* Iframe panes fill the explorer and scroll inside the bordered frame, not the pane. */
.human-readable-pane--iframe,
solid-ui-file-explorer-provider > .paneDiv.human-readable-pane--iframe {
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  min-height: 0;
  overflow: visible;
}

.human-readable-pane__container--iframe {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.human-readable-pane__container--iframe > .human-readable-pane__frame--iframe {
  flex: 1 1 auto;
  height: 480px;
  min-height: 288px;
  resize: none;
}

.human-readable-pane__frame--markdown,
.human-readable-pane__frame--plain-text {
  overflow: visible;
  max-height: none;
}

.human-readable-pane__frame--markdown {
  overflow-wrap: anywhere;
  word-break: break-word;
}

.human-readable-pane__frame--plain-text {
  font-family: monospace;
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.human-readable-pane__frame--markdown > * {
  max-width: 100%;
  box-sizing: border-box;
}

.human-readable-pane__frame--markdown img,
.human-readable-pane__frame--markdown video,
.human-readable-pane__frame--markdown canvas,
.human-readable-pane__frame--markdown iframe {
  max-width: 100%;
  height: auto;
}

.human-readable-pane__frame--markdown pre,
.human-readable-pane__frame--markdown code {
  max-width: 100%;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.human-readable-pane__frame--markdown pre {
  white-space: pre-wrap;
}

.human-readable-pane__frame--markdown table {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  box-sizing: border-box;
}

.human-readable-pane__frame--markdown th,
.human-readable-pane__frame--markdown td {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame {
  padding: 0.75rem;
  resize: none;
  min-width: 0;
}

.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame--markdown,
.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame--plain-text {
  min-height: 100%;
  max-height: none;
}

.human-readable-pane[data-layout='mobile'] {
  padding: 0;
}

.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame--markdown,
.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame--plain-text {
  overflow-wrap: anywhere;
  word-break: break-word;
}

.human-readable-pane[data-layout='mobile'] .human-readable-pane__frame--iframe {
  width: 100%;
  max-width: 100%;
  flex: 0 0 auto;
  min-height: 100vh;
  height: 100vh;
}

@media (max-width: 576px) {
  .human-readable-pane {
    padding: 0;
  }

  .human-readable-pane__frame {
    padding: 0.75rem;
    resize: none;
    min-width: 0;
  }

  .human-readable-pane__frame--markdown,
  .human-readable-pane__frame--plain-text {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .human-readable-pane__frame--iframe {
    width: 100%;
    max-width: 100%;
    flex: 0 0 auto;
    min-height: 100vh;
    height: 100vh;
  }
}
`,"text/css"));function xo(){try{return ve.currentUser()?.value??null}catch{return null}}var Wr=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.(md|markdown|mdown|mkd|mkdn)$/i.test(n)},ld=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.json$/i.test(n)},vn=new Map;function Gr(e,n,t){e.className="",e.classList.add("human-readable-pane__frame"),e.classList.add(`human-readable-pane__frame--${n}`),t!==void 0&&e.style.setProperty("--human-readable-pane-height",`${t*16}px`)}var Yr="solidos-human-readable-preview",jt="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals",Co=e=>e.includes('<script src="https://dokie.li/scripts/dokieli.js">')||e.includes("dokieli.css");function jr(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jr(e,n){let t=e.match(/<base(\s[^>]*)?>/i);if(t&&t.index!==void 0){let a=t[0].match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i),s=a?.[1]??a?.[2]??a?.[3];if(!a||s===void 0||/^[a-z][a-z\d+.-]*:/i.test(s)||s.startsWith("//"))return e;let d;try{d=new URL(s,n).href}catch{return e}let m=t[0].replace(a[0],`href="${jr(d)}"`);return e.slice(0,t.index)+m+e.slice(t.index+t[0].length)}let r=`<base href="${jr(n)}">`,i=e.match(/<head(\s[^>]*)?>/i);if(i&&i.index!==void 0){let a=i.index+i[0].length;return e.slice(0,a)+r+e.slice(a)}return r+e}function _o(e){let n=`<script>
(() => {
  const style = document.createElement('style')
  style.textContent = 'html, body { height: auto !important; min-height: 0 !important; max-height: none !important; overflow: visible !important; }'
  document.head?.appendChild(style)
  const reportHeight = () => {
    const elements = Array.from(document.querySelectorAll('*'))
    const height = Math.max(
      document.documentElement.scrollHeight,
      document.body ? document.body.scrollHeight : 0,
      ...elements.map(element => Math.max(
        element.scrollHeight,
        Math.ceil(element.getBoundingClientRect().bottom + window.scrollY)
      ))
    )
    window.parent.postMessage({ type: 'solidos-preview-size', height }, '*')
  }
  window.addEventListener('load', reportHeight)
  new ResizeObserver(reportHeight).observe(document.documentElement)
  document.addEventListener('DOMContentLoaded', () => {
    if (document.body) new ResizeObserver(reportHeight).observe(document.body)
    new MutationObserver(reportHeight).observe(document.body || document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true
    })
    reportHeight()
  })
  window.setInterval(reportHeight, 500)
  reportHeight()
})()
<\/script>`,t=e.replace(/<\/body\s*>/i,`${n}$&`);return t===e?`${e}${n}`:t}function Eo(e){let n=e.split("/").pop()||e;try{return decodeURIComponent(n)}catch{return n}}function ko(e,n){let t=Eo(n);try{return new DOMParser().parseFromString(e,"text/html").querySelector("title")?.textContent?.trim()||t}catch{return t}}var Jt="solidos-preview-request",ut="solidos-preview-response",To="data-solidos-preview-bridge",Kt=new Set(["GET","HEAD"]),Kr=new Set(["PUT","PATCH","DELETE"]);function Ao(e){if(typeof e!="string"||!e.includes(Jt))return e;let n=new DOMParser().parseFromString(e,"text/html"),t=!1;for(let i of n.querySelectorAll("script")){let a=i.textContent||"";(i.hasAttribute(To)||a.includes(Jt)&&a.includes(ut)&&a.includes("const pending = new Map()"))&&(i.remove(),t=!0)}if(!t)return e;let r=e.match(/<!doctype[^>]*>/i)?.[0];return`${r?`${r}
`:""}${n.documentElement.outerHTML}`}function dd(e){return e==="about:srcdoc"||/^file:\/\/srcdoc\/?(?:[?#].*)?$/i.test(e)}function Po(e,n){let t=new URL(e,n).href;return dd(t)?n:t}function cd(e){if(e)try{let n=new URL(e);return n.hash="",n.href}catch{return}}function ud(e,n,t,r=null){let i,a;try{i=new URL(Po(e,t)),a=new URL(t)}catch{return!1}if(i.origin!==a.origin)return!1;let s=n.toUpperCase(),d=new URL(i.href);d.hash="";let m=new URL(a.href);m.hash="";let f=d.href===m.href,c=i.href===a.href,l=i.pathname==="/profile/card"||d.href===cd(r);return Kt.has(s)&&(f||l)||c&&Kr.has(s)}function pd(e,n,t,r=null){let i=`<script ${To}="true">
(() => {
  const documentUri = ${JSON.stringify(n)}
  const documentOrigin = new URL(documentUri).origin
  const nonce = ${JSON.stringify(t)}
  const viewerWebId = ${JSON.stringify(r)}
  const pending = new Map()
  let requestId = 0
  try {
    history.replaceState(null, '', documentUri)
  } catch {
    // Sandboxed documents may reject cross-origin history URLs.
  }
  // Opaque sandbox origins cannot use IndexedDB. Dokieli uses it for local
  // preferences and history, so provide an in-memory implementation without
  // granting the preview a persistent storage capability.
  try {
    window.indexedDB.open('__solidos_probe__')
  } catch {
    const databases = new Map()
    const request = (result) => ({ result, error: null, onsuccess: null, onerror: null, onupgradeneeded: null })
    const isolatedIndexedDB = {
      open (name) {
        const stores = databases.get(name) || new Map()
        databases.set(name, stores)
        const database = {
          objectStoreNames: { contains: storeName => stores.has(storeName) },
          createObjectStore (storeName) {
            if (!stores.has(storeName)) stores.set(storeName, new Map())
            return database.transaction(storeName, 'readwrite').objectStore(storeName)
          },
          transaction (storeName, mode = 'readonly') {
            const store = stores.get(storeName) || new Map()
            stores.set(storeName, store)
            let pending = 0
            let completed = false
            const transaction = {
              oncomplete: null,
              onerror: null,
              onabort: null,
              objectStore: () => {
                const run = (result, change) => {
                  const operation = request(result)
                  pending++
                  queueMicrotask(() => {
                    try {
                      change?.()
                      operation.onsuccess?.({ target: operation })
                    } catch (error) {
                      operation.error = error
                      operation.onerror?.({ target: operation })
                    } finally {
                      pending--
                      if (!pending && !completed) {
                        completed = true
                        transaction.oncomplete?.({ target: transaction })
                      }
                    }
                  })
                  return operation
                }
                const openCursor = (withValue) => {
                  const keys = Array.from(store.keys())
                  const operation = request(null)
                  pending++
                  let index = 0
                  const emit = () => {
                    operation.result = index < keys.length
                      ? {
                          key: keys[index],
                          primaryKey: keys[index],
                          value: withValue ? store.get(keys[index]) : undefined,
                          continue: () => { index++; queueMicrotask(emit) }
                        }
                      : null
                    operation.onsuccess?.({ target: operation })
                    if (!operation.result) {
                      pending--
                      if (!pending && !completed) {
                        completed = true
                        transaction.oncomplete?.({ target: transaction })
                      }
                    }
                  }
                  queueMicrotask(emit)
                  return operation
                }
                return {
                transaction,
                get: key => run(store.get(key)),
                getAll: () => run(Array.from(store.values())),
                getAllKeys: () => run(Array.from(store.keys())),
                count: () => run(store.size),
                openCursor: () => openCursor(true),
                openKeyCursor: () => openCursor(false),
                put: (value, key) => run(undefined, () => store.set(key, value)),
                add: (value, key) => run(undefined, () => store.set(key, value)),
                delete: key => run(undefined, () => store.delete(key)),
                clear: () => run(undefined, () => store.clear())
                }
              }
            }
            return transaction
          },
          close () {}
        }
        const operation = request(database)
        queueMicrotask(() => {
          operation.onupgradeneeded?.({ target: operation })
          operation.onsuccess?.({ target: operation })
        })
        return operation
      },
      deleteDatabase (name) {
        databases.delete(name)
        const operation = request(undefined)
        queueMicrotask(() => operation.onsuccess?.({ target: operation }))
        return operation
      }
    }
    Object.defineProperty(window, 'indexedDB', { configurable: true, value: isolatedIndexedDB })
  }
  const createMemoryStorage = () => {
    const values = new Map()
    return {
      get length () { return values.size },
      key: index => Array.from(values.keys())[index] ?? null,
      getItem: key => values.get(String(key)) ?? null,
      setItem: (key, value) => values.set(String(key), String(value)),
      removeItem: key => values.delete(String(key)),
      clear: () => values.clear()
    }
  }
  for (const storageName of ['localStorage', 'sessionStorage']) {
    try {
      window[storageName].getItem('__solidos_probe__')
    } catch {
      Object.defineProperty(window, storageName, {
        configurable: true,
        value: createMemoryStorage()
      })
    }
  }
  const nativeFetch = window.fetch.bind(window)

  function isSrcdocUrl (url) {
    return url === 'about:srcdoc' || /^file:\\/\\/srcdoc\\/?(?:[?#].*)?$/i.test(url)
  }

  function documentRequestUrl (url) {
    const resolvedUrl = new URL(url, documentUri).href
    // srcdoc keeps this URL even when history.replaceState is unavailable in
    // an opaque sandbox. Dokieli saves via document.location.href.
    return isSrcdocUrl(resolvedUrl) ? documentUri : resolvedUrl
  }

  function requestParent (url, init) {
    const id = String(++requestId)
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject })
      window.parent.postMessage({
        type: ${JSON.stringify(Jt)},
        nonce,
        id,
        url,
        method: init.method,
        headers: init.headers,
        body: init.body
      }, '*')
    })
  }

  window.addEventListener('message', event => {
    const message = event.data
    if (!message || message.type !== ${JSON.stringify(ut)} || message.nonce !== nonce) return
    const entry = pending.get(message.id)
    if (!entry) return
    pending.delete(message.id)
    if (!message.ok) {
      entry.reject(new Error(message.error || 'Preview request failed'))
      return
    }
    const responseBody = [204, 205, 304].includes(message.status) ? null : message.body
    entry.resolve(new Response(responseBody, {
      status: message.status,
      headers: message.headers
    }))
  })

  const reportHeight = () => {
    const elements = Array.from(document.querySelectorAll('*'))
    const height = Math.max(
      document.documentElement.scrollHeight,
      document.body ? document.body.scrollHeight : 0,
      ...elements.map(element => Math.max(
        element.scrollHeight,
        Math.ceil(element.getBoundingClientRect().bottom + window.scrollY)
      ))
    )
    window.parent.postMessage({ type: 'solidos-preview-size', height }, '*')
  }
  window.addEventListener('load', reportHeight)
  new ResizeObserver(reportHeight).observe(document.documentElement)
  if (document.body) new ResizeObserver(reportHeight).observe(document.body)
  new MutationObserver(reportHeight).observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true
  })
  window.setInterval(reportHeight, 500)
  reportHeight()

  window.fetch = async (input, init = {}) => {
    const request = input instanceof Request ? input : null
    const url = documentRequestUrl(request ? request.url : input)
    const method = (init.method || (request && request.method) || 'GET').toUpperCase()
    const sameOrigin = new URL(url).origin === documentOrigin
    const allowed = sameOrigin &&
      (${JSON.stringify(Array.from(Kt))}.includes(method) ||
        (url === documentUri && ${JSON.stringify(Array.from(Kr))}.includes(method)))
    if (!allowed) {
      return nativeFetch(input, init)
    }
    const headers = new Headers(request ? request.headers : undefined)
    for (const [key, value] of new Headers(init.headers || {}).entries()) headers.set(key, value)
    const body = method === 'GET' || method === 'HEAD'
      ? undefined
      : (init.body || (request ? await request.clone().text() : undefined))
    return requestParent(url, {
      method,
      headers: Object.fromEntries(headers.entries()),
      body
    })
  }

  const NativeXMLHttpRequest = window.XMLHttpRequest
  window.XMLHttpRequest = class PreviewXMLHttpRequest {
    constructor () {
      this._native = new NativeXMLHttpRequest()
      this._headers = {}
      this._listeners = {}
      this._intercepted = false
      this.readyState = 0
      this.status = 0
      this.statusText = ''
      this.response = null
      this.responseText = ''
    }

    addEventListener (type, listener) {
      this._listeners[type] = this._listeners[type] || []
      this._listeners[type].push(listener)
    }

    _emit (type) {
      const event = { target: this, currentTarget: this, type }
      if (typeof this['on' + type] === 'function') this['on' + type](event)
      for (const listener of this._listeners[type] || []) listener.call(this, event)
    }

    open (method, url, async = true, user, password) {
      const resolvedUrl = documentRequestUrl(url)
      this._method = String(method || 'GET').toUpperCase()
      this._url = resolvedUrl
      const sameOrigin = new URL(resolvedUrl).origin === documentOrigin
      this._intercepted = sameOrigin &&
        (${JSON.stringify(Array.from(Kt))}.includes(this._method) ||
          (resolvedUrl === documentUri && ${JSON.stringify(Array.from(Kr))}.includes(this._method)))
      if (!this._intercepted) {
        this._native.open(method, url, async, user, password)
        for (const type of ['abort', 'error', 'load', 'loadend', 'progress', 'readystatechange', 'timeout']) {
          this._native.addEventListener(type, event => this._emitNative(type, event))
        }
      }
      this.readyState = 1
      this._emit('readystatechange')
    }

    _emitNative (type, event) {
      this.readyState = this._native.readyState
      this.status = this._native.status
      this.statusText = this._native.statusText
      this.response = this._native.response
      this.responseText = this._native.responseText
      this._emit(type)
    }

    setRequestHeader (name, value) {
      if (this._intercepted) this._headers[name] = value
      else this._native.setRequestHeader(name, value)
    }

    send (body) {
      if (!this._intercepted) {
        this._native.send(body)
        return
      }
      requestParent(this._url, {
        method: this._method,
        headers: this._headers,
        body: this._method === 'GET' || this._method === 'HEAD' ? undefined : body
      }).then(async response => {
        this.status = response.status
        this.statusText = response.statusText
        this._responseHeaders = response.headers
        this.responseText = await response.text()
        this.response = this.responseText
        this.readyState = 4
        this._emit('readystatechange')
        this._emit(response.ok ? 'load' : 'error')
        this._emit('loadend')
      }).catch(() => {
        this.readyState = 4
        this._emit('readystatechange')
        this._emit('error')
        this._emit('loadend')
      })
    }

    abort () {
      if (!this._intercepted) this._native.abort()
      this._emit('abort')
    }

    getResponseHeader (name) {
      return this._responseHeaders?.get(name) || null
    }

    getAllResponseHeaders () {
      return this._responseHeaders
        ? Array.from(this._responseHeaders.entries()).map(([key, value]) => key + ': ' + value).join('\\r\\n')
        : ''
    }
  }

  // Dokieli's own OIDC session cannot be restored in an opaque-origin
  // sandbox, so it would always show "Sign in". Give it the SolidOS viewer
  // through the same session shape Dokieli uses for its WebExtension mode;
  // requests still go through the restricted bridge above.
  const bridgedSession = viewerWebId
    ? {
        isActive: true,
        webId: viewerWebId,
        authFetch: (input, init) => window.fetch(input, init),
        handleRedirectFromLogin: async () => {},
        restore: async () => {},
        login: async () => {},
        logout: async () => {
          bridgedSession.isActive = false
          bridgedSession.webId = undefined
        }
      }
    : null
  let dokieliHooksInstalled = false
  const installDokieliHooks = () => {
    const config = window.DO && window.DO.C
    if (!config || dokieliHooksInstalled) return
    dokieliHooksInstalled = true
    if (bridgedSession) config.Session = bridgedSession
    // Dokieli skips requests for file: URLs, which is how srcdoc reports
    // its location, so keep its document URL pointing at the resource.
    let documentUrl = config.DocumentURL
    Object.defineProperty(config, 'DocumentURL', {
      configurable: true,
      enumerable: true,
      get: () => documentUrl,
      set: value => {
        documentUrl = typeof value === 'string' && isSrcdocUrl(value) ? documentUri : value
      }
    })
    config.DocumentURL = documentUrl
  }
  // Registered before dokieli.js runs, so this precedes Dokieli's init.
  document.addEventListener('DOMContentLoaded', installDokieliHooks)
  window.addEventListener('load', installDokieliHooks)
})()
<\/script>`,a=Ao(e)??e;return Jr(a,n).replace(/<head(\s[^>]*)?>/i,s=>`${s}${i}`)}function Io(e,n,t,r,i=null){let a=e.ownerDocument.defaultView;if(!a)return;let s=new Uint32Array(4);a.crypto.getRandomValues(s);let d=Array.from(s,c=>c.toString(16)).join("-"),m=new URL(n).href,f=c=>{let l=c.data;if(c.source!==e.contentWindow||!l||l.type!==Jt||l.nonce!==d)return;let u=g=>{e.contentWindow?.postMessage(g,"*")};if(!ud(l.url,l.method,m,i)){u({type:ut,nonce:d,id:l.id,ok:!1,status:403,headers:[],body:"",error:"Request not permitted by the SolidOS preview"});return}let p=Po(l.url,m);r(p,{method:l.method,headers:l.headers,body:Kt.has(l.method)?void 0:Ao(l.body)}).then(async g=>{u({type:ut,nonce:d,id:l.id,ok:g.ok,status:g.status,headers:Array.from(g.headers.entries()),body:await g.text()})}).catch(g=>{u({type:ut,nonce:d,id:l.id,ok:!1,status:0,headers:[],body:"",error:g instanceof Error?g.message:String(g)})})};a.addEventListener("message",f),e.setAttribute("sandbox",jt),e.srcdoc=pd(t,m,d,i)}function fd(e,n){let t=r=>{let i=r.data;r.source!==e.contentWindow||i?.type!=="solidos-preview-size"||typeof i.height!="number"||!Number.isFinite(i.height)||(e.style.height=`${Math.max(1,Math.ceil(i.height))}px`,e.style.flexShrink="0")};return n.addEventListener("message",t),()=>n.removeEventListener("message",t)}var md={icon:function(e,n){if(e&&Wr(e.uri))return R.iconBase+"markdown.svg";if(e){let t=n.session.store,r=vn.get(e.uri);if(r==="dokieli")return R.iconBase+"dokieli-logo.png";if(r==="html")return R.originalIconBase+"tango/22-text-x-generic.png";let i=t.fetcher.getHeader(e.doc(),"content");if(i&&i.length>0){let d=i[0],m=d.includes('<script src="https://dokie.li/scripts/dokieli.js">')||d.includes("dokieli.css");return vn.set(e.uri,m?"dokieli":"html"),m?R.iconBase+"dokieli-logo.png":R.originalIconBase+"tango/22-text-x-generic.png"}let a=t.fetcher.getHeader(e.doc(),"content-type");if((a?a[0].split(";",1)[0].trim():null)==="text/html")return t.fetcher._fetch(e.uri).then(d=>d.text()).then(d=>{let m=d.includes('<script src="https://dokie.li/scripts/dokieli.js">')||d.includes("dokieli.css");return vn.set(e.uri,m?"dokieli":"html"),m?R.iconBase+"dokieli-logo.png":R.originalIconBase+"tango/22-text-x-generic.png"}).catch(()=>(vn.set(e.uri,"html"),R.originalIconBase+"tango/22-text-x-generic.png"))}return R.originalIconBase+"tango/22-text-x-generic.png"},name:"humanReadable",label:function(e,n){let t=n.session.store,r=["text/plain","text/html","text/markdown","application/json","application/xhtml+xml","application/pdf","video/mp4"],i=function(d,m,f){let c=d.fetcher.getHeader(m,"content-type");if(c){for(let l=0;l<c.length;l++)for(let u=0;u<f.length;u++)if(c[l].indexOf(f[u])>=0)return!0}return!1},a=function(d,m,f){let c=d.findTypeURIs(m);for(let l=0;l<f.length;l++)if(We.mediaTypeClass(f[l]).uri in c)return!0;return!1};if(!e.uri)return null;if(t.findTypeURIs(e)[o.link("WebPage").uri])return"Webpage";if(Wr(e.uri))return"View";if(i(t,e,r)||a(t,e,r)){let d=t.fetcher.getHeader(e.doc(),"content-type");return(d?d[0].split(";",1)[0].trim():null)==="text/html"&&!vn.has(e.uri)&&t.fetcher._fetch(e.uri).then(f=>f.text()).then(f=>{let c=f.includes('<script src="https://dokie.li/scripts/dokieli.js">')||f.includes("dokieli.css");vn.set(e.uri,c?"dokieli":"html")}).catch(()=>{vn.set(e.uri,"html")}),"View"}return null},render:function(e,n){let t=n.dom,r=t.createElement("div"),i=n.session.store;function a(u){let p=n.environment??{};u.dataset.layout=p.layout??"desktop"}let s=i.fetcher.getHeader(e.doc(),"content-type"),d=s?s[0].split(";",1)[0].trim():null,m=d==="text/markdown"||Wr(e.uri),f=d==="text/plain"||d==="application/json"||!d&&ld(e.uri);d||console.log("humanReadablePane: unknown content-type?"),r.classList.add("human-readable-pane"),a(r);let c=function(u){i.fetcher.webOperation("GET",e.uri).then(async p=>{let{marked:g,DOMPurify:h}=await sd(),w=p.responseText??"",_=Math.min(30,w.split(/\n/).length+5),I=g.parse(w,{async:!1}),E=h.sanitize(I);u.innerHTML=E,Gr(u,"markdown",_)}).catch(p=>{console.error("Error fetching markdown content:",p),u.innerHTML="<p>Error loading content</p>"})},l=function(u){i.fetcher.webOperation("GET",e.uri).then(p=>{let g=p.responseText??"",h=Math.min(30,g.split(/\n/).length+5);u.textContent=g,Gr(u,"plain-text",h)}).catch(p=>{console.error("Error fetching plain text content:",p),u.textContent="Error loading content"})};if(m){let u=t.createElement("div");c(u);let p=t.createElement("div");p.classList.add("human-readable-pane__container"),p.appendChild(u),r.appendChild(p)}else if(f){let u=t.createElement("pre");l(u);let p=t.createElement("div");p.classList.add("human-readable-pane__container"),p.appendChild(u),r.appendChild(p)}else{let u=t.createElement("iframe");u.name=Yr,u.title=Eo(e.uri),Gr(u,"iframe");let p=t.defaultView,g=p?fd(u,p):()=>{},h=d==="text/html"||d==="application/xhtml+xml",w=null,_=!1,I=!1,E=typeof MutationObserver>"u"?null:new MutationObserver(D=>{let B=D.some(N=>Array.from(N.addedNodes).some(T=>T===r||T.nodeType===Node.ELEMENT_NODE&&T.contains(r)));r.isConnected?I=!0:(I||B)&&(_=!0,w&&(URL.revokeObjectURL(w),w=null),g(),E?.disconnect())});E?.observe(t,{childList:!0,subtree:!0});let P=D=>{u.removeAttribute("src"),u.setAttribute("sandbox",""),u.srcdoc=`<p style="font-family: sans-serif">${jr(D)}</p>`};h?i.fetcher.webOperation("GET",e.uri).then(D=>{let B=D.responseText??"";u.title=ko(B,e.uri);let N=Co(B);vn.set(e.uri,N?"dokieli":"html"),N?Io(u,e.uri,B,(T,X)=>i.fetcher._fetch(T,X),xo()):(u.setAttribute("sandbox",jt),u.srcdoc=_o(Jr(B,e.uri)))}).catch(D=>{console.error("Error fetching HTML content:",D),P("Error loading content")}):i.fetcher._fetch(e.uri).then(async D=>{if(!D.ok)throw new Error(`HTTP ${D.status}`);let B=D.headers.get("content-type")?.split(";",1)[0].trim().toLowerCase();if(B==="text/html"||B==="application/xhtml+xml"){let T=await D.text();u.title=ko(T,e.uri);let X=Co(T);vn.set(e.uri,X?"dokieli":"html"),X?Io(u,e.uri,T,(j,te)=>i.fetcher._fetch(j,te),xo()):(u.setAttribute("sandbox",jt),u.srcdoc=_o(Jr(T,e.uri)));return}B!=="application/pdf"&&u.setAttribute("sandbox",jt);let N=URL.createObjectURL(await D.blob());if(_){URL.revokeObjectURL(N);return}w=N,u.src=N}).catch(D=>{console.error("Error fetching content:",D),P("Error loading content")});let A=t.createElement("div");A.classList.add("human-readable-pane__container"),A.classList.add("human-readable-pane__container--iframe"),A.appendChild(u),r.appendChild(A),r.classList.add("human-readable-pane--iframe")}return r}},So=md;Be(he(`.data-content-pane__literal {
  white-space: pre-wrap;
}

.data-content-pane {
  --color-background-row-alternate: var(--solid-ui-color-gray-150, #f0f0f0);
  --color-background-row-default: var(--solid-ui-color-white, #ffffff);
  border: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  padding: 8px 40px;
  margin-bottom: 8px;
  box-sizing: border-box;
}

.data-content-pane .data-content-pane__table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.data-content-pane .data-content-pane__table--root {
  table-layout: auto;
}

.data-content-pane .data-content-pane__row--root {
  display: flex;
  align-items: flex-start;
}

.data-content-pane .data-content-pane__subject-cell {
  flex: 0 0 auto;
  width: clamp(160px, 18%, 240px);
  padding-right: 12.8px;
}

.data-content-pane .data-content-pane__details-cell {
  flex: 0 1 auto;
  min-width: 0;
}

.data-content-pane .data-content-pane__subject-cell,
.data-content-pane .data-content-pane__predicate-cell,
.data-content-pane .data-content-pane__row--top-aligned > td:not(.data-content-pane__predicate-cell),
.data-content-pane .data-content-pane__subject-cell a,
.data-content-pane .data-content-pane__predicate-cell a,
.data-content-pane .data-content-pane__row--top-aligned > td:not(.data-content-pane__predicate-cell) a {
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.data-content-pane .data-content-pane__subject-cell,
.data-content-pane .data-content-pane__subject-cell a {
  white-space: nowrap;
  overflow-wrap: normal;
  word-break: normal;
}

.data-content-pane .data-content-pane__table--property {
  table-layout: auto;
  width: auto;
  max-width: 100%;
}

.data-content-pane .data-content-pane__details-cell:has(.data-content-pane__nested-formula) {
  flex: 1 1 0;
}

.data-content-pane .data-content-pane__table--property:has(.data-content-pane__nested-formula) {
  width: 100%;
  table-layout: fixed;
}

.data-content-pane__nested-formula {
  display: block;
  container-type: inline-size;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  padding: 8px;
  border-radius: 8px;
}

.data-content-pane td,
.data-content-pane th {
  padding: 1.6px 3.2px 0.8px;
  vertical-align: top;
}

.data-content-pane .data-content-pane__table--property td,
.data-content-pane .data-content-pane__table--property th {
  padding-top: 4.8px;
  padding-bottom: 4.8px;
}

.data-content-pane tr {
  margin-bottom: 10px;
  padding-top: 1.6px;
  padding-bottom: 1.6px;
}

.data-content-pane a,
.data-content-pane a:link {
  color: var(--solid-ui-color-tertiary, #083575);
  text-decoration: none;
  font-weight: 600;
}

.data-content-pane a:visited {
  color: #3b5998;
}

.data-content-pane a:hover {
  color: var(--solid-ui-color-tertiary, #083575);
  text-decoration: underline;
}

.data-content-pane a:active {
  color: var(--solid-ui-color-gray-500, #6a7282);
  text-decoration: none;
}

.data-content-pane.embeddedText {
  white-space: pre-wrap;
}

.data-content-pane .data-content-pane__predicate-cell {
  min-width: 136px;
  width: clamp(136px, 18vw, 192px);
  max-width: 192px;
  padding-right: 8px;
  box-sizing: border-box;
  background-color: inherit;
}

.data-content-pane .data-content-pane__subject-cell {
  background-color: inherit;
}

.data-content-pane .data-content-pane__row--top-aligned > td:not(.data-content-pane__predicate-cell) {
  padding-left: 5px;
}

.data-content-pane .data-content-pane__predicate-cell a {
  color: var(--solid-ui-color-gray-600, #4a5565);
}

.data-content-pane__row--even,
.data-content-pane__nested-table--dark {
  background-color: var(--color-background-row-alternate, #f0f0f0);
}

.data-content-pane__row--odd,
.data-content-pane__nested-table--light {
  background-color: var(--color-background-row-default, white);
}

.data-content-pane .data-content-pane__table--property > tbody > tr:nth-child(odd),
.data-content-pane .data-content-pane__table--property > tr:nth-child(odd) {
  background-color: var(--color-background-row-default, white);
}

.data-content-pane .data-content-pane__table--property > tbody > tr:nth-child(even),
.data-content-pane .data-content-pane__table--property > tr:nth-child(even) {
  background-color: var(--color-background-row-alternate, #f0f0f0);
}

.data-content-pane__row--top-aligned {
  vertical-align: top;
  margin: 0;
  padding: 0;
}

@container (max-width: 560px) {
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__row--root,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__table--property,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__table--property > tbody,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__row--property {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .data-content-pane .data-content-pane__nested-formula .data-content-pane__subject-cell,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__subject-cell a,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__details-cell,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__predicate-cell,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__value-cell {
    display: block;
    width: 100%;
    min-width: 0;
    max-width: none;
    box-sizing: border-box;
    white-space: normal;
    overflow-wrap: anywhere;
  }
}

.data-content-pane[data-layout='mobile'] .data-content-pane__row--root {
  display: block;
  padding-bottom: 12px;
}

.data-content-pane[data-layout='mobile'] {
  padding-left: 0;
  padding-right: 0;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__subject-cell {
  display: block;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding-right: 0;
  padding-bottom: 0;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__details-cell {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__table--property > tbody > tr,
.data-content-pane[data-layout='mobile'] .data-content-pane__table--property > tr {
  margin-bottom: 0;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__row--top-aligned {
  display: block;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__table--property,
.data-content-pane[data-layout='mobile'] .data-content-pane__table--property > tbody {
  display: block;
  width: 100%;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__table--property td {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__table--property .data-content-pane__predicate-cell {
  display: block;
  width: 100%;
  min-width: 0;
  padding-bottom: 1.6px;
}

.data-content-pane[data-layout='mobile'] .data-content-pane__table--property td:not(.data-content-pane__predicate-cell) {
  padding-top: 0;
  padding-left: 13.6px;
}

@media (max-width: 768px) {
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__table--property,
  .data-content-pane .data-content-pane__nested-formula .data-content-pane__table--property > tbody {
    display: block;
    width: 100%;
  }

  .data-content-pane {
    font-size: 14px;
    padding-left: 0;
    padding-right: 0;
    border: none;
  }

  .data-content-pane .data-content-pane__row--root {
    display: block;
  }

  .data-content-pane .data-content-pane__subject-cell {
    display: block;
    width: 100%;
    max-width: 100%;
    padding-right: 0;
    padding-bottom: 0;
    box-sizing: border-box;
  }

  .data-content-pane .data-content-pane__subject-cell a {
    white-space: normal;
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .data-content-pane .data-content-pane__details-cell {
    display: block;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .data-content-pane .data-content-pane__row--top-aligned {
    display: block;
    margin: 0;
    padding: 0;
  }

  .data-content-pane .data-content-pane__row--top-aligned > td,
  .data-content-pane .data-content-pane__row--top-aligned > th {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .data-content-pane .data-content-pane__row--top-aligned > .data-content-pane__predicate-cell {
    min-width: 0;
    max-width: none;
    width: 100%;
    padding-bottom: 1.6px;
  }

  .data-content-pane .data-content-pane__row--top-aligned > td:not(.data-content-pane__predicate-cell) {
    padding-top: 0;
    padding-left: 13.6px;
  }
}
`,"text/css"));var hd=0;function Uo(e){let n=e;if(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;let r=!!(typeof document<"u"?document:void 0)?.outlineManager,i=typeof window<"u"&&typeof window.panes?.getOutliner=="function";(r||i)&&ee.openHrefInOutlineMode(e)}var No={icon:R.originalIconBase+"rdf_flyer.24.gif",name:"dataContents",audience:[o.solid("Developer")],label:function(e,n){if("http://www.w3.org/2007/ont/link#ProtocolEvent"in n.session.store.findTypeURIs(e))return null;let t=n.session.store.statementsMatching(void 0,void 0,void 0,e).length;return t===0?null:"Data ("+t+")"},statementsAsTables:function(n,t,r){let i=t.dom,a=i.createElement("table");a.classList.add("data-content-pane__table","data-content-pane__table--root");let s=t.environment?.layout==="mobile",d=On(t.session.store),m=d.rootSubjects(n),f=m.roots,c=m.subjects,l=m.loopBreakers??{};for(let E in l)le.debug("	dataContentPane: loopbreaker:"+E);let u={},p={},g=++hd,h=0;function w(E){return h++,`data-content-${g}-${E}-${h}`}function _(E,P=0){let A=i.createElement("table");A.classList.add("data-content-pane__table","data-content-pane__table--property"),A.setAttribute("aria-label","Properties");let D=null,B=c[d.toStr(E)];if(!B)return A.appendChild(i.createTextNode("...")),A;B.sort();let N=0,T;for(let X=0;X<B.length;X++){let j=B[X],te=i.createElement("tr");if(te.classList.add("data-content-pane__row--top-aligned","data-content-pane__row--property"),j.predicate.uri!==D||s){!s&&D&&N>1&&T?.setAttribute("rowspan",""+N),T=i.createElement("th"),T.setAttribute("class","data-content-pane__predicate-cell"),T.setAttribute("scope","row"),T.id=w("predicate");let V=i.createElement("a");V.setAttribute("href",j.predicate.uri),V.addEventListener("click",Uo,!0),V.appendChild(i.createTextNode(S.predicateLabelForXML(j.predicate))),T.appendChild(V),te.appendChild(T),D=j.predicate.uri,N=0}N++;let de=i.createElement("td");de.classList.add("data-content-pane__value-cell"),de.setAttribute("headers",T?.id??""),de.appendChild(I(j.object,P+1)),te.appendChild(de),A.appendChild(te)}return!s&&D&&N>1&&T?.setAttribute("rowspan",""+N),A}function I(E,P=0){let A,D;switch(E.termType){case"NamedNode":return D=i.createElement("a"),D.setAttribute("href",E.uri),D.addEventListener("click",Uo,!0),D.appendChild(i.createTextNode(S.label(E))),D;case"Literal":return E.language||!E.datatype||!E.datatype.uri?(A=i.createElement("div"),A.classList.add("data-content-pane__literal"),A.textContent=E.value,E.language&&A.setAttribute("lang",E.language),A):E.datatype.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"?(A=i.createElement("div"),A.classList.add("embeddedXHTML"),A.setAttribute("role","group"),A.setAttribute("aria-label","Embedded HTML content"),A.innerHTML=Ni.sanitize(E.value),A):i.createTextNode(E.value);case"BlankNode":{if(E.toNT()in u){p[E.toNT()]=!0;let N=i.createElement("a");return N.setAttribute("href","#"+E.toNT().slice(2)),N.setAttribute("class","bnodeRef"),N.setAttribute("aria-label",`Referenced blank node ${E.toNT().slice(3)}`),N.textContent="*"+E.toNT().slice(3),N}u[E.toNT()]=!0;let B=_(E,P);return u[E.toNT()]=B,P%2===1?B.classList.add("data-content-pane__nested-table--light"):B.classList.add("data-content-pane__nested-table--dark"),B}case"Collection":A=i.createElement("ol"),A.setAttribute("class","collectionAsTables");for(let B=0;B<E.elements.length;B++){let N=i.createElement("li");N.appendChild(I(E.elements[B],P+1)),A.appendChild(N)}return A;case"Graph":return A=t.session.paneRegistry.byName("dataContents").statementsAsTables(E.statements,t),A.classList.add("data-content-pane__nested-formula"),A;case"Variable":return i.createTextNode("?"+E.uri)}throw new Error("Unhandled node type: "+E.termType)}r&&(f=r.concat(f.filter(function(E){for(let P=0;P<r.length;P++)if(E.sameTerm(r[P]))return!1;return!0})));for(let E=0;E<f.length;E++){let P=i.createElement("tr");P.classList.add(E%2===0?"data-content-pane__row--even":"data-content-pane__row--odd","data-content-pane__row--root"),a.appendChild(P);let A=i.createElement("th");A.classList.add("data-content-pane__subject-cell"),A.setAttribute("scope","row"),A.id=w("subject"),P.appendChild(A);let D=i.createElement("td");D.classList.add("data-content-pane__details-cell"),D.setAttribute("headers",A.id),P.appendChild(D);let B=f[E];B.termType==="BlankNode"?A.appendChild(i.createTextNode(S.label(B))):A.appendChild(I(B,0)),D.appendChild(_(B,0))}for(let E in p){let P=u[E];if(P===!0)continue;let A=i.createElement("caption"),D=i.createElement("a");D.setAttribute("id",E.slice(2)),D.setAttribute("tabindex","-1"),D.setAttribute("class","bnodeDef"),D.setAttribute("aria-label",`Blank node ${E.slice(3)}`),D.textContent=E.slice(3)+")",A.appendChild(D),P.insertBefore(A,P.firstChild)}return a},render:function(e,n){let t=n.dom;function r(s){let d=n.environment??{};s.dataset.layout=d.layout??"desktop",s.dataset.theme=d.theme??"light",s.dataset.inputMode=d.inputMode??"pointer"}function i(){let s=n.session.store,d=s.statementsMatching(void 0,void 0,void 0,e),m=[];s.holds(e,void 0,void 0,e)&&m.push(e);let f=s.any(e,o.foaf("primaryTopic"),void 0,e);f&&(f.termType==="NamedNode"||f.termType==="BlankNode")&&m.push(f);let c=n.session.paneRegistry.byName("dataContents").statementsAsTables(d,n,m);c.setAttribute("aria-label",`Data content for ${S.label(e)}`),a.appendChild(c)}let a=t.createElement("div");return a.classList.add("dataContentPane","data-content-pane"),r(a),i(),a}};var Ro=wt(bi(),1);function Lo(){return{broken:!1}}function Fo(){return{contentType:void 0,eTag:void 0}}function Mo(e){return{dataLoaded:e.dataLoaded,resourceUri:e.resourceUri,originalContent:e.originalContent,sourcePaneState:e.sourcePaneState,editorMetadata:e.editorMetadata,updateSourcePaneState:e.updateSourcePaneState,updateContent:e.updateContent,updateMetadata:e.updateMetadata}}var Yt=class extends fn{static properties={context:{attribute:!1},subject:{attribute:!1},originalContent:{state:!0},dataLoaded:{state:!0},sourcePaneState:{state:!0},editorMetadata:{state:!0}};constructor(){super(),this.__sourceContextValueProvider=new vi(this,{context:Di}),this.context=void 0,this.subject=void 0,this.fileExplorerContext=lr,new yi(this,{context:xi,subscribe:!0,callback:n=>{this.fileExplorerContext=n}}),this.originalContent=void 0,this.dataLoaded=!1,this.sourcePaneState=Lo(),this.editorMetadata=Fo(),this.sourceContextValue=Mo({dataLoaded:!1,resourceUri:void 0,originalContent:void 0,sourcePaneState:Lo(),editorMetadata:Fo(),updateSourcePaneState:()=>{},updateContent:()=>{},updateMetadata:()=>{}})}get sourceContextValue(){return this.__sourceContextValue}set sourceContextValue(n){this.__sourceContextValueProvider.setValue(n),this.__sourceContextValue=n}loadGeneration=0;loadContentAndMetadata=async()=>{if(!this.context||!this.subject)return;let n=this.subject.uri,t=++this.loadGeneration;try{let{content:r,metadata:i}=await Ge.resource.fetchContentAndMetadata(this.subject);if(this.subject?.uri!==n||t!==this.loadGeneration)return;this.originalContent=r,this.updateEditorMetadata(i),this.dataLoaded=!0}catch(r){if(Mi("Failed to load source content",r),!this.isConnected)return;let{showError:i}=Zn(this.closest(".sourcePane")??this);i(r.message)}};refreshSourceContextValue(){let n=this.subject?.uri,t=r=>{this.subject?.uri===n&&this.updateOriginalContent(r)};this.sourceContextValue=Mo({dataLoaded:this.dataLoaded,resourceUri:n,originalContent:this.originalContent,sourcePaneState:this.sourcePaneState,editorMetadata:this.editorMetadata,updateSourcePaneState:this.updateSourcePaneState,updateContent:t,updateMetadata:this.updateEditorMetadata})}unregisterEditor;registeredWith;_editingRequested=!1;_childObserver;updateSourcePaneState=(n,t)=>{this.sourcePaneState={...this.sourcePaneState,[n]:t}};updateOriginalContent=n=>{this.originalContent=n};updateEditorMetadata=n=>{this.editorMetadata={contentType:n.contentType,eTag:n.eTag}};beginEditing=()=>{let n=this.querySelector("source-pane-source-editor-card");n?n.beginEditing():this._editingRequested=!0};applyPendingEditing(){if(!this._editingRequested)return;let n=this.querySelector("source-pane-source-editor-card");n&&(this._editingRequested=!1,n.beginEditing())}refreshEditorRegistration(){if(!this.isConnected)return;let n=this.fileExplorerContext,t=!n||n===lr?void 0:n.registerEditor;this.registeredWith!==t&&(this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,t&&(this.unregisterEditor=n.registerEditor(this),this.registeredWith=t))}connectedCallback(){super.connectedCallback(),this._childObserver=new MutationObserver(()=>this.applyPendingEditing()),this._childObserver.observe(this,{childList:!0}),this.requestUpdate()}disconnectedCallback(){this._childObserver?.disconnect(),this._childObserver=void 0,this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,super.disconnectedCallback()}willUpdate(n){if(super.willUpdate(n),!this.context)throw new Error("The element is missing the required `context` property.");(n.has("context")||n.has("subject"))&&(this.loadGeneration++,this.dataLoaded=!1),(n.has("context")||n.has("subject")||n.has("dataLoaded")||n.has("originalContent")||n.has("sourcePaneState")||n.has("editorMetadata"))&&this.refreshSourceContextValue()}updated(n){super.updated(n),this.refreshEditorRegistration(),(n.has("context")||n.has("subject"))&&this.loadContentAndMetadata()}render(){return Ie`<slot></slot>`}};customElements.get("source-pane-source-provider")||customElements.define("source-pane-source-provider",Yt);Li(he(`.sourcePane {
  display: block;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px; 
}

.sourcePaneCard,
.sourcePaneStatus {
  width: 100%;
}

.sourcePaneCompactButton {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  padding: 9px 14px;
  line-height: 1.2;
  white-space: nowrap;
}

@media (max-width: 900px) {
  .sourcePaneTextArea {
    margin: 12px 2px;
    padding: 12px;
  }
}

@media (max-width: 768px) {
  .sourcePaneCompactButton {
    min-width: 0;
  }
}

.sourcePaneTextAreaError {
  color: var(--solid-ui-color-error, #b00020);
}
`,"text/css"));var gd={icon:R.iconBase+"noun_109873.svg",name:"source",label:function(e,n){if(/\.[cm]?js$/i.test(new URL(e.uri).pathname))return"Javascript Source";let r=n.session.store.findTypeURIs(e),i=We.mediaTypeClass("text/*").uri.split("*")[0];for(let a in r){if(a.startsWith(i))return"Source";if(a.includes("xml"))return"XML Source";if(a.includes("json"))return"JSON Source";if(a.includes("javascript"))return"Javascript Source"}return null},shouldGetFocus:function(e){return/\.[cm]?js$/i.test(new URL(e.uri).pathname)},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(r?.uri.endsWith("/")){let s=r.uri.slice(0,-1);r=t.sym(s),n.newInstance=r,n.newBase=s}if(!r){let s=n.newBase;s.endsWith("/")&&(s=s.slice(0,-1),n.newBase=s),r=t.sym(s),n.newInstance=r}let i=Ro.lookup(r.uri);if(!i||!(i.startsWith("text")||i.includes("xml")||i.includes("json")||i.includes("javascript"))){let s="A new text file has to have an file extension like .txt .ttl .json etc.";throw alert(s),new Error(s)}function a(s){let d=`
`;return s.includes("json")?d=`{}
`:s.includes("rdf+xml")&&(d=`<rdf:RDF
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

</rdf:RDF>`),d}return new Promise(function(s,d){t.fetcher.webOperation("PUT",r.uri,{data:a(i),contentType:i}).then(function(){Fi("New text file created: "+r.uri),n.newInstance=r,s(n)},m=>{alert("Cant make new file: "+m),d(m)})})},render:function(e,n){let{renderStatusSection:t}=Zn(),r=n.dom.createElement("div");r.setAttribute("class","sourcePane"),r.setAttribute("role","region"),r.setAttribute("aria-label",`Source pane for ${e.uri}`),r.setAttribute("aria-busy","true");let i=!!n.dom.querySelector("solid-ui-dialogs-root");wn(Ie`
        <source-pane-source-provider
          .context=${n}
          .subject=${e}
        ></source-pane-source-provider>
        ${t()}
        ${i?"":Ie`<solid-ui-dialogs-root></solid-ui-dialogs-root>`}
      `,r);let a=Zn(r),s=!1,d=async()=>{if(!(s||r.querySelector("source-pane-source-editor-card"))){s=!0,a.clearError();try{await import("./part-V5Q26F6M.js"),r.querySelector("source-pane-source-provider")?.append(n.dom.createElement("source-pane-source-editor-card")),r.setAttribute("aria-busy","false")}catch(m){if(Ri("Failed to load source editor",{resourceUri:e.uri,error:m}),r.setAttribute("aria-busy","false"),!r.isConnected)return;a.showError("The editor could not be started. Your file has not been changed. Try again; if it still fails, refresh the page. Save any unsaved work elsewhere before refreshing.",{title:"Could not start the source editor",details:m instanceof Error?m.stack??m.message:String(m),onRetry:()=>{d()}})}finally{s=!1}}};return d(),r}},Xr=gd;var Qr=new Map;function bn(e){let n=String(e);return Qr.has(n)||Qr.set(n,fetch(n).then(async t=>{if(!t.ok)throw new Error(`loadSheet: ${t.status} ${n}`);let r=new CSSStyleSheet;return r.replaceSync(await t.text()),r})),Qr.get(n)}var bd=await bn(he(`:host {
  display: block;
  width: 100%;
  height: 100%;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 0;
    margin: 0;
    padding: 0px 40px 25px;
  }

  .editor {
    flex: 1 1 auto;
    width: 100%;
    min-height: 0;
  }

  @media (max-width: 768px) {
    section {
      padding: 0px 0px 25px;
    }
  }
}
`,"text/css")),pt=class extends fn{static properties={contentType:{},content:{},accessibilityLabel:{},accessibilityDescription:{}};get _editorMount(){return this.renderRoot?.querySelector(".editor")??null}static styles=bd;_editor;_initializing=!1;getEditor(){return this._editor}setReadOnly(n){this._editor?.setReadOnly(n)}async _initializeEditor(){if(this._editor||this._initializing)return;this._initializing=!0;let n=this._editorMount;if(!n){this._initializing=!1;return}try{let{CodeEditor:t}=await import("./solid-ui.js");this._editor=new t;try{await this._editor.initialize(n,this.content??"",this.contentType??"","dark",void 0,{label:this.accessibilityLabel,description:this.accessibilityDescription})}catch(r){throw new Error(`Error initializing code editor: ${r instanceof Error?r.message:String(r)}`)}this._editor?.setReadOnly(!0)}catch(t){console.log("Error loading CodeEditor module:",t)}finally{this._initializing=!1}}async firstUpdated(){await this._initializeEditor()}disconnectedCallback(){super.disconnectedCallback(),this._editor&&(this._editor.destroy(),this._editor=void 0),this._initializing=!1}render(){return Ie`
      <section class="editor-card">
        <div class="editor"></div>
      </section>
    `}};customElements.get("solid-panes-editor-card")||customElements.define("solid-panes-editor-card",pt);Be(he(`.n3-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var wd=o,Do={icon:R.originalIconBase+"w3c/n3_smaller.png",name:"n3",audience:[wd.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"Data ("+r+") as N3"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","n3-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),s=On(r);s.suggestNamespaces(r.namespaces),s.setBase(e.uri);let d=s.statementsToN3(a),m=t.createElement("solid-panes-editor-card");return m.contentType="text/n3",m.content=d,m.accessibilityLabel=`Generated N3 for ${e.uri}`,m.accessibilityDescription="Generated N3 serialization. This content is read-only.",i.appendChild(m),i}};Be(he(`.rdfxml-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var Bo={icon:R.originalIconBase+"22-text-xml4.png",name:"RDFXML",audience:[o.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"As RDF/XML ("+r+")"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","rdfxml-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),s=On(r);s.suggestNamespaces(r.namespaces),s.setBase(e.uri);let d=s.statementsToXML(a),m=t.createElement("solid-panes-editor-card");return m.contentType="application/rdf+xml",m.content=d,m.accessibilityLabel=`Generated RDF/XML for ${e.uri}`,m.accessibilityDescription="Generated RDF/XML serialization. This content is read-only.",i.appendChild(m),i}};Be(he(`.formPane a {
  color: var(--color-text-link, #3b5998);
  text-decoration: none;
}

.formPane a:link {
  color: var(--color-text-link, #3b5998);
  text-decoration: none;
}

.formPane a:visited {
  color: var(--color-text-link-visited, #3b5998);
  text-decoration: none;
}

.formPane a:hover {
  color: var(--color-text-link-hover, #3b5998);
  font-weight: bold;
}

.formPane a:active {
  color: var(--color-text-link-active, #888);
  text-decoration: none;
}

.formPane__message,
.formPaneMessage {
  color: #666;
  margin: var(--spacing-xs, 0.5em) 0;
  padding: var(--spacing-xs, 0.35em) var(--spacing-xs, 0.5em);
}

.formPane__message--info {
  background-color: var(--color-main-block-bg, #eee);
}

.formPane__message--error {
  background-color: var(--color-log-error-bg, #fee);
}

.formPane__editButton {
  margin-left: auto;
  align-self: center;
  padding: var(--spacing-xs, 0.5rem);
  border: .5rem solid white;
  font-size: 100%;
  float: none;
}

.formPane .formPane__mobileTextareaValue > div {
  display: block;
  min-width: 0;
  position: relative;
}

.formPane .formPane__mobileTextareaValue > div > textarea {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 0;
  width: 100%;
}

.formPane .formPane__mobileTextareaValue > div > button[type='button'] {
  float: none !important;
  position: absolute;
  right: 0;
  top: 0;
}

.formPane[data-layout='mobile'] .formPane__mobileTextareaRow {
  flex-direction: column !important;
  align-items: stretch;
}

.formPane[data-layout='mobile'] .formPane__mobileTextareaLabel {
  width: auto !important;
  padding-bottom: 0;
}

.formPane[data-layout='mobile'] .formPane__mobileTextareaValue {
  box-sizing: border-box;
  min-width: 0;
  padding-right: var(--spacing-sm, 0.75rem);
  width: 100%;
}

.formPane[data-layout='mobile'] .formPane__mobileTextareaValue textarea {
  box-sizing: border-box;
  margin-left: 0 !important;
  margin-right: 0 !important;
  max-width: 100%;
  width: 100%;
}

@media (max-width: 960px) {
  .formPane .formPane__mobileTextareaRow {
    flex-direction: column !important;
    align-items: stretch;
  }

  .formPane .formPane__mobileTextareaLabel {
    width: auto !important;
    padding-bottom: 0;
  }

  .formPane .formPane__mobileTextareaValue {
    box-sizing: border-box;
    min-width: 0;
    padding-right: var(--spacing-sm, 0.75rem);
    width: 100%;
  }

  .formPane .formPane__mobileTextareaValue textarea {
    box-sizing: border-box;
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 100%;
    width: 100%;
  }
}
`,"text/css"));var Qe=o;function Xn(e){return e?.termType==="NamedNode"}function Zr(e,n){let t=n.doc?n.doc():void 0,r=e.each(n,Qe.rdf("type"),void 0,t).filter(Xn),i=r.some(l=>l.sameTerm(Qe.ui("Group"))),a=r.some(l=>!l.sameTerm(Qe.ui("Group"))&&!l.sameTerm(Qe.ui("Form"))),s=!!e.any(n,Qe.ui("property"),void 0,t),d=e.any(n,Qe.ui("parts"),void 0,t),m=!!d?.elements?.length||e.each(n,Qe.ui("part"),void 0,t).length>0;i&&a&&s&&!m&&e.removeMany(n,Qe.rdf("type"),Qe.ui("Group"),t);let f=d?.elements??[];for(let l of f)Xn(l)&&Zr(e,l);let c=e.each(n,Qe.ui("part"),void 0,t);for(let l of c)Xn(l)&&Zr(e,l)}function yd(e){let n=Array.from(e.querySelectorAll("textarea"));for(let t of n){let r=t.parentElement;for(;r;){let i=r.firstElementChild;if(!!i&&(i.classList.contains("formFieldName")||i.querySelector("a")!==null)&&r.children.length>=2){r.classList.add("formPane__mobileTextareaRow"),i.classList.add("formPane__mobileTextareaLabel"),r.children[1].classList.add("formPane__mobileTextareaValue");break}r=r.parentElement}}}var Oo={icon:R.iconBase+"noun_122196.svg",name:"form",audience:[Qe.solid("PowerUser")],label:function(e,n){let t=ee.formsFor(e).length;return le.debug("Form pane: forms for "+e+": "+t),t?""+t+" forms":null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div");i.setAttribute("class","formPane");function a(h){let w=n.environment??{};h.dataset.layout=w.layout??"desktop"}a(i);let s=function(h,w="info"){let _=r.createElement("p");return _.className=`formPane__message formPane__message--${w}`,i.appendChild(_).textContent=h,_},d=function(h){return s(h,"error")},m=function(h,w){h||d(`Sorry, failed to save your change:
`+w)},f=ve.currentUser();f?t.each(f,Qe.ui("workspace")).length===0&&s(`You don't seem to have any workspaces defined.  A workspace is a place on the web (http://..) or in the file system (file:///) to store application data.
`):s("You are not logged in. If you log in and have workspaces then you would be able to select workspace in which to put this new information");let c=function(h,w){t.fetcher.nowOrWhenFetched(h.uri,w,function(_,I){if(!_)return d("Cannot load store "+h.uri+": "+I);let E=ee.formsFor(w);for(let P of E){Zr(t,P);let A=r.createElement("h4");if(A.classList.add("formPane__heading"),i.appendChild(A),P.uri){let B=We.uri.document(P.uri);B.uri!==P.uri&&i.appendChild(ee.editFormButton(r,i,P,B,m)).classList.add("formPane__editButton")}let D=r.createElement("a");D.classList.add("formPane__headingLink"),D.setAttribute("href",P.uri),A.insertBefore(D,A.firstChild),D.textContent=S.label(P,!0),ee.appendForm(r,i,{},w,P,h,m),yd(i)}})},l=null,u=We.uri.docpart(e.uri);t.updater.editable(u,t)&&(l=e.doc());let p=t.any(t.sym(u),Qe.link("annotationStore"));if(!l&&Xn(p)&&(l=p),!l){let h=new Map;t.statementsMatching(e).forEach(function(_){_.why.value&&h.set(_.why.value,1)}),t.statementsMatching(void 0,void 0,e).forEach(function(_){_.why.value&&h.set(_.why.value,2)});let w=Array.from(h.entries()).sort(function([_,I],[E,P]){return I-P||_.localeCompare(E)});for(let[_]of w)if(_&&t.updater.editable(_,t)){l=t.sym(_);break}}let g="2014";if(l)c(l,e);else{d("No suitable store is known, to edit <"+e.uri+">.");let h={noun:"form",appPathSegment:"form"},w=Re.selectWorkspace(r,h,function(_){let I=_?t.sym(_):null;if(!I){d("Workspace selection was cancelled.");return}s("Workspace selected OK: "+I.uri);let E=t.each(void 0,Qe.space("workspace"),I).filter(Xn);for(let P=0;P<E.length;P++){let A=E[P],D=t.any(A,Qe.space("store")),B=t.any(A,Qe.cal("dtstart"))?.value,N=t.any(A,Qe.cal("dtend"))?.value;if(Xn(D)&&B&&N&&B<=g&&N>g){c(D,e);break}else d("Note no suitable annotation store in activity: "+A)}});i.appendChild(w)}return i}};var qo={icon:R.originalIconBase+"table.png",name:"tableOfClass",label:function(e,n){let t=n.session.store;if(!t.any(void 0,o.rdf("type"),e))return null;let r=t.statementsMatching(void 0,o.rdf("type"),e).length;return r===0||r>15?null:S.label(e)+" table"},render:function(e,n){let t=n.dom,r=t.createElement("div");return r.setAttribute("class","tablePane"),r.appendChild($n(t,{tableClass:e})),r}};Be(he(`.defaultPane .bottom-border {
	border: 0.2rem solid transparent;
	width: 100%;
}

.defaultPane .bottom-border-active {
	cursor: copy;
	border: 0.2rem solid;
	border-color: var(--color-bottom-border-highlight, rgb(100%, 65%, 0%));
}

.defaultPane {
	--default-pane-predicate-column: 16rem;
	--default-pane-object-indent: 1.75rem;
  border: 1px solid var(--solid-ui-color-gray-200, #cbd5e1);
  padding: var(--spacing-base, 0.5rem);
  margin-bottom: var(--spacing-base, 0.5rem);
  min-height: 0;
  overflow: auto;
  box-sizing: border-box;
}

/* composeExplorer adds paneDiv to this element after the pane renders. */
.paneDiv.defaultPane {
	padding-inline: 40px;
}

.defaultPane > div {
	display: grid;
	grid-template-columns: minmax(0, var(--default-pane-predicate-column)) minmax(0, 1fr);
	align-items: flex-start;
}

.defaultPane > div > div.pred {
	grid-column: 1;
	display: flex;
	align-items: flex-start;
	padding-left: 0 !important;
	box-sizing: border-box;
	min-width: 0;
}

.defaultPane > div > div.pred > .labelTD {
	flex: 1 1 auto;
	min-width: 0;
	margin: 0;
	padding-top: 0;
	padding-bottom: 0;
}

.defaultPane > div > div.pred > .iconTD {
	flex: 0 0 auto;
	width: auto;
	margin: 0;
}

.defaultPane > div > div.obj {
	grid-column: 2;
	min-width: 0;
	box-sizing: border-box;
	align-self: start;
}

.defaultPane > div > div[colspan='2'] {
	grid-column: 1 / -1;
}

.defaultPane[data-layout='mobile'] > div {
	grid-template-columns: minmax(0, 1fr);
}

.paneDiv.defaultPane[data-layout='mobile'] {
	padding-left: 0;
	padding-right: 0;
}

.defaultPane[data-layout='mobile'] > div > div.pred,
.defaultPane[data-layout='mobile'] > div > div.obj {
	display: block;
	grid-column: 1;
	width: 100%;
	box-sizing: border-box;
}

.defaultPane[data-layout='mobile'] > div > div.pred {
	padding-bottom: var(--spacing-small, 0.1rem);
}

.defaultPane[data-layout='mobile'] > div > div.obj {
	padding-left: var(--default-pane-object-indent) !important;
}

@media (max-width: 700px) {
	.paneDiv.defaultPane {
		padding-left: 0;
		padding-right: 0;
	}

	.defaultPane > div {
		grid-template-columns: minmax(0, 1fr);
	}

	.defaultPane > div > div.pred,
	.defaultPane > div > div.obj {
		display: block;
		grid-column: 1;
		width: 100%;
		box-sizing: border-box;
	}

	.defaultPane > div > div.pred {
		padding-bottom: var(--spacing-small, 0.1rem);
	}

	.defaultPane > div > div.obj {
		padding-left: var(--default-pane-object-indent) !important;
	}
}
`,"text/css"));var vd=o,zo={icon:R.originalIconBase+"about.png",name:"default",audience:[vd.solid("Developer")],label:function(e){return"About "},render:function(e,n){let t=n.dom;function r(c){let l=n.environment??{};c.dataset.layout=l.layout??"desktop"}let i=function(c,l){return!(typeof n.session.paneRegistry.byName("internal").predicates[c.uri]<"u"||l&&c.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#type")},a=n.getOutliner(t),s=n.session.store;le.info("@defaultPane.render, dom is now "+t.location),e=s.canon(e);let d=t.createElement("div");d.setAttribute("class","defaultPane"),r(d);let m=e.termType==="Literal"?[]:s.statementsMatching(e);a.appendPropertyTRs(d,m,!1,i),m=s.statementsMatching(void 0,void 0,e),a.appendPropertyTRs(d,m,!0,i);let f=e.termType==="BlankNode"?s.anyStatementMatching(e):void 0;if(e.termType==="Literal"&&e.value.slice(0,7)==="http://"&&a.appendPropertyTRs(d,[Se(s.sym(e.value),o.link("uri"),e)],!0,i),e.termType==="NamedNode"&&s.updater.editable(We.uri.docpart(e.uri),s)||e.termType==="BlankNode"&&f&&f.why&&"uri"in f.why&&typeof f.why.uri=="string"&&s.updater.editable(f.why.uri)){let c=t.createElement("tr"),l=t.createElement("td");l.setAttribute("colspan","2"),l.setAttribute("notSelectable","true");let u=t.createElement("img");u.src=R.originalIconBase+"tango/22-list-add-new.png",u.addEventListener("click",function(g){a.UserInput.addNewPredicateObject(g),g.stopPropagation(),g.preventDefault()}),u.className="bottom-border-active",d.appendChild(c).appendChild(l).appendChild(u)}return d}};var xd=o,$o={icon:R.iconBase+"noun_170702.svg",name:"ui",audience:[xd.solid("PowerUser")],label:function(e,n){let t=o,i=n.session.store.findTypeURIs(e);return i[t.rdfs("Class").uri]?"creation forms":i[t.ui("Form").uri]?"edit form":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","formPane");let s=S.label(e),d=function(w,_){let I=t.createElement("p");return I.setAttribute("style",_||"color: grey; background-color: white"),a.appendChild(I).textContent=w,I},m=function(w,_){d(w,"style",_||"color: grey; background-color: #fdd")},f=function(h,w){h||m(`Sorry, failed to save your change:
`+w)},c=r.findTypeURIs(e),l=null,u;e.uri&&(u=We.uri.docpart(e.uri),e.uri!==u&&r.updater.editable(u)&&(l=r.sym(We.uri.docpart(e.uri)))),l||(l=r.any(r.sym(u),i.link("annotationStore"))),l||(l=ee.defaultAnnotationStore(e)),l||(l=r.sym("https://formsregistry.solid.community/public/formRegistry/"));let p;c[i.rdfs("Class").uri];let g=d("(Loading data from: "+l+")");return r.fetcher.nowOrWhenFetched(l.uri,e,function(h,w){if(!h){m("Cannot load store "+l+" :"+w);return}if(a.removeChild(g),c[i.rdfs("Class").uri]){let _=function(E,P){let A=r.statementsMatching(e,E),D=n.getOutliner(t);if(A.length){for(let B=0;B<A.length;B++){D.appendPropertyTRs(a,[A[B]]);let N=A[B].object,T=t.createElement("td");a.lastChild.appendChild(T),P&&T.appendChild(ee.newButton(t,r,null,null,e,N,l,function(j,te){j||m(`Sorry, failed to save your change:
`+te)}));let X=r.statementsMatching(N,i.rdf("type"));X.length||(X=r.statementsMatching(N)),X.length?ee.editFormButton(t,a,N,X[0].why,f):m("No data about form")}a.appendChild(t.createElement("hr"))}else d("There are currently no known forms to make a "+s+".")};p=i.ui("creationForm"),a.appendChild(t.createElement("h2")).textContent=S.label(p),d("Creation forms allow you to add information about a new thing, in this case a new "+s+"."),_(p,!0),a.appendChild(t.createElement("hr")),d("You can make a new creation form:"),a.appendChild(ee.newButton(t,r,e,p,i.ui("Form"),null,l,f)),a.appendChild(t.createElement("hr")),p=i.ui("annotationForm"),a.appendChild(t.createElement("h2")).textContent=S.label(p),d("Annotaion forms allow you to add extra information about a ,"+s+" we already know about."),_(p,!1),a.appendChild(t.createElement("hr")),d("You can make a new annotation form:"),a.appendChild(ee.newButton(t,r,e,p,i.ui("Form"),null,l,f)),d("(Storing new forms in: "+l+")")}else c[i.ui("Form").uri]?ee.appendForm(t,a,r,e,i.ui("FormForm"),l,f):m("ui/pane internal error -- Eh?")}),a}};var Cd={icon:R.iconBase+"padlock-timbl.svg",name:"sharing",label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return r[o.ldp("Resource").uri]||r[o.ldp("Container").uri]||r[o.ldp("BasicContainer").uri]?"Sharing":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=s(),a=t.createElement("div");return a.classList.add("sharingPane"),Un.preventBrowserDropEvents(t),a.appendChild(Un.ACLControlBox5(e,n,i,r)),a;function s(){let d=r.findTypeURIs(e);return d[o.ldp("BasicContainer").uri]||d[o.ldp("Container").uri]?"Folder":"File"}}},Vo=Cd;var _d=await bn(he(`solid-ui-dialog-footer {
  justify-content: flex-end;
  flex-wrap: wrap;
}

solid-ui-dialog-header h2 {
  margin: 0;
  font: inherit;
}

solid-ui-dialog-content p {
  overflow-wrap: anywhere;
  white-space: pre-line;
}

.resource-action-dialog-emphasis {
  display: block;
  font-weight: 600;
  text-align: center;
}

solid-ui-button {
  min-width: 24px;
  min-height: 24px;
}

solid-ui-button:focus-within {
  outline: 1px solid currentColor;
  outline-offset: 1px;
  border-radius: 4px;
}
`,"text/css")),Xt=class extends fn{static properties={title:{type:String},message:{type:String},confirmation:{type:Boolean}};constructor(){super(),this.title="",this.message="",this.confirmation=!1}static styles=_d;result=null;returnFocus=null;open(){let n=this.ownerDocument.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return this.returnFocus=n instanceof HTMLElement?n:null,new Promise(t=>{this.result=t})}closeDialog(n){let r=this.shadowRoot?.querySelector("solid-ui-dialog")?.shadowRoot?.querySelector("dialog");this.result?.(n),this.result=null,r?.open&&r.close(),this.remove()}disconnectedCallback(){if(super.disconnectedCallback(),this.result?.(!1),this.result=null,this.returnFocus?.isConnected)this.returnFocus.focus();else{let n=this.ownerDocument.querySelector("main");if(n){let t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus(),t===null?n.removeAttribute("tabindex"):n.setAttribute("tabindex",t)}}this.returnFocus=null}async firstUpdated(){super.firstUpdated();let n=this.shadowRoot?.querySelector("solid-ui-dialog");await n?.updateComplete;let t=n?.shadowRoot?.querySelector("dialog");if(!t)throw new Error("Internal pane dialog did not render a native dialog");t.setAttribute("aria-label",this.title),t.setAttribute("aria-description",this.message),t.addEventListener("cancel",i=>{i.preventDefault(),this.closeDialog(!1)}),t.addEventListener("close",()=>{this.isConnected&&this.closeDialog(!1)});let r=this.shadowRoot?.querySelector("[data-initial-action]");await r?.updateComplete,r?.shadowRoot?.querySelector("button")?.focus()}handleKeyDown(n){if(n.key!=="Tab")return;let t=Array.from(this.shadowRoot?.querySelectorAll("solid-ui-button")??[]).map(i=>i.shadowRoot?.querySelector("button")).filter(i=>!!i&&!i.disabled),r=t.findIndex(i=>{let a=i.getRootNode();return a instanceof ShadowRoot&&a.activeElement===i});n.shiftKey&&r===0?(n.preventDefault(),t[t.length-1]?.focus()):!n.shiftKey&&r===t.length-1&&(n.preventDefault(),t[0]?.focus())}render(){let[n,...t]=this.message.split(`
`);return Ie`
      <solid-ui-dialog @keydown=${this.handleKeyDown}>
        <solid-ui-dialog-header slot="header">
          <h2>${this.title}</h2>
          <solid-ui-button variant="ghost" @click=${()=>this.closeDialog(!1)}>
            <span class="sr-only">Close dialog</span>
            <icon-lucide-x slot="icon" aria-hidden="true"></icon-lucide-x>
          </solid-ui-button>
        </solid-ui-dialog-header>
        <solid-ui-dialog-content>
          <p>
            ${n}
            ${t.map(r=>Ie`<span class="resource-action-dialog-emphasis">${r}</span>`)}
          </p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer slot="footer">
          ${this.confirmation?Ie`
                <solid-ui-button data-initial-action variant="secondary" @click=${()=>this.closeDialog(!1)}>
                  Cancel
                </solid-ui-button>
                <solid-ui-button @click=${()=>this.closeDialog(!0)}>
                  Delete
                </solid-ui-button>
              `:Ie`
                <solid-ui-button data-initial-action @click=${()=>this.closeDialog(!1)}>
                  OK
                </solid-ui-button>
              `}
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}};customElements.get("solid-panes-resource-action-dialog")||customElements.define("solid-panes-resource-action-dialog",Xt);Be(he(`.internalPaneContent {
  background-color: #ddddff;
  padding: var(--spacing-xs, 0.5em) 40px;
  box-sizing: border-box;
}

.internalPaneControls {
  width: 100%;
  margin: var(--spacing-sm, 1em) 0;
  box-sizing: border-box;
}

.internalPaneControls tr {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: var(--spacing-sm, 1em);
  width: 100%;
}

.internalPaneControls td {
  padding: 0;
}

.internalPaneDeleteButton {
  height: var(--icon-base, 2em);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
`,"text/css"));var kd={icon:R.originalIconBase+"tango/22-emblem-system.png",name:"internal",label:function(){return"Under The Hood"},render:function(e,n){let t=n.dom,r=n.session.store,i=r.canon(e),a=r.findTypeURIs(i);function s(g){if(a["http://www.w3.org/2007/ont/link#ProtocolEvent"])return!0;let h=n.session.paneRegistry.byName("internal");return h&&h.predicates&&typeof h.predicates[g.uri]<"u"}let d=t.createElement("div");d.classList.add("internalPane","internalPaneContent");function m(g,h){let w=t.createElement("solid-panes-resource-action-dialog");w.title=g,w.message=h,w.confirmation=!1,w.open(),t.body?.appendChild(w)}function f(g){let h=t.createElement("solid-panes-resource-action-dialog");h.title="Delete resource",h.message=g,h.confirmation=!0;let w=h.open();return t.body?.appendChild(h),w}if(e.uri&&!e.uri.includes("#")){let g=d.appendChild(t.createElement("table"));g.classList.add("internalPaneControls");let h=g.appendChild(t.createElement("tr")),w=h.appendChild(t.createElement("td")),_=e.uri&&e.uri.endsWith("/")||r.holds(e,o.rdf("type"),o.ldp("Container")),I=_?"folder":"file";if(!Id(e)){let A=!1,D=ee.button(t,R.iconBase+"noun_2188_red.svg","Remove this "+I,()=>{if(A)return;let B=S.label(e)||e.value,N=_?`Are you sure you want to delete "${B}" and all its contents?
This can't be undone.`:`Are you sure you want to delete "${B}"?
This can't be undone.`;return f(N).then(T=>T?(A=!0,D.disabled=!0,(n.session.logic?.resource||Ge.resource).recursiveDelete(e).then(()=>{let j=_?`Deleted "${B}" and all of its contents.`:`Deleted "${B}".`;console.log(j),m("Resource deleted",j),t.dispatchEvent(new CustomEvent("solid-resource-deleted",{detail:{resource:e}}))}).catch(j=>{let te="Unable to delete "+e+": "+(j instanceof Error?j.message:String(j));console.log(te),m("Unable to delete resource",te)}).finally(()=>{A=!1,D.disabled=!1})):void 0)});D.classList.add("internalPaneDeleteButton"),D.style.backgroundColor="transparent",D.style.border="none",D.style.padding="0",w.appendChild(D)}let E=h.appendChild(t.createElement("td")),P=ee.button(t,R.iconBase+"noun_479395.svg","refresh");E.appendChild(P),P.addEventListener("click",()=>{if(!r.fetcher)throw new Error("Store has no fetcher");r.fetcher.refresh(e,function(A,D){let B;A?B="Refreshed OK: "+e:B="Error refreshing: "+e+": "+D,console.log(B),m(A?"Resource refreshed":"Unable to refresh resource",B)})})}let l=r.statementsMatching(e).slice(),u="";if(!r.fetcher)throw new Error("Store has no fetcher");if(e.uri&&(l.push(Se(e,be("http://www.w3.org/2007/ont/link#uri"),be(e.uri),r.fetcher.appNode)),e.uri.indexOf("#")>=0?(u=e.uri.split("#")[0],l.push(Se(e,be("http://www.w3.org/2007/ont/link#documentURI"),be(e.uri.split("#")[0]),r.fetcher.appNode)),l.push(Se(e,be("http://www.w3.org/2007/ont/link#document"),be(e.uri.split("#")[0]),r.fetcher.appNode))):u=e.uri),u){if(!r.updater)throw new Error("Store has no updater");let g=r.updater.editable(u);g&&l.push(Se(e,be("http://www.w3.org/ns/rww#editable"),qn(g.toString()),r.fetcher.appNode))}let p=n.getOutliner(t);return p.appendPropertyTRs(d,l,!1,s),l=r.statementsMatching(void 0,void 0,e),p.appendPropertyTRs(d,l,!0,s),d},predicates:{"http://www.w3.org/2007/ont/link#request":1,"http://www.w3.org/2007/ont/link#requestedBy":1,"http://www.w3.org/2007/ont/link#source":1,"http://www.w3.org/2007/ont/link#session":2,"http://www.w3.org/2007/ont/link#uri":1,"http://www.w3.org/2007/ont/link#documentURI":1,"http://www.w3.org/2007/ont/link#document":1,"http://www.w3.org/2007/ont/link#all":1,"http://www.w3.org/2007/ont/link#Document":1,"http://www.w3.org/ns/rww#editable":1,"http://www.w3.org/2000/01/rdf-schema#seeAlso":1,"http://www.w3.org/2002/07/owl#":1},classes:{"http://www.w3.org/2007/ont/link#ProtocolEvent":1}};function Id(e){let n=e.site().uri;return e.uri===n||e.uri===n+"profile/"||e.uri===n+"profile/card"||e.uri===n+"settings/"||e.uri===n+"settings/prefs.ttl"||e.uri===n+"settings/privateTypeIndex.ttl"||e.uri===n+"settings/publicTypeIndex.ttl"||e.uri===n+"settings/serverSide.ttl"}var Ho=kd;var Ed={icon:R.iconBase+"noun_547570.svg",global:!0,name:"home",label:function(){return"Home"},audience:[o.solid("PowerUser")],render:function(e,n){let t=n.dom,r=async function(){let s={div:i,dom:t,statusArea:i,me:a};i.appendChild(t.createElement("h4")).textContent="Create new thing somewhere";let m={div:i.appendChild(t.createElement("div")),dom:t,statusArea:i,me:a},f=await Re.filterAvailablePanes(n.session.paneRegistry.list);zn.newThingUI(m,n,f),Re.registrationList(s,{}).then(function(){})},i=t.createElement("div"),a=ve.currentUser();return r(),i}},Wo=Ed;function Go(e){e(Sr);let n=Sr.editor;n?e(n):console.log("@@@ editProfileView","profilePane is not providing an editor pane"),e(Sa),e(Fa),e(Wa),e(Mr),e(Ga),e(ja),e(Ja),e(Ya),e(Xa),e(lt),e(Dr),e(qr),e(Za),e(no),e(to),e(ro),e(io),e(so),e($r),e(ho),e(co),e(vo),e(So),e(No),e(Xr),e(Do),e(Bo),e(Oo),e(qo),e(zo),e($o),e(Vo),e(Ho),e(Wo)}function jo(e,n,t,r,i){return{dom:e,getOutliner:Mn,session:{paneRegistry:n,store:t,logic:r},environment:i}}var Td=await bn(he(`/* @custom-media from solid-ui/breakpoints.css substituted below by tools/convert.mjs */

:host {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: var(--solid-ui-color-slate-800);
    color: var(--solid-ui-color-white);
    padding: 7px 20px;
    gap: 10px;

    a.logo {
        height: 40px;

        solid-ui-solid-emblem {
            height: 100%;
        }
    }

    .spacer {
        flex: 1;
    }

    .separator {
        background: var(--solid-ui-color-body-grey);
        width: 1px;
        align-self: stretch;
    }

    @media (max-width: 48rem) {
        padding: 5px 16px;

        a.logo,
        solid-ui-menu,
        .separator {
            display: none;
        }
    }
}
`,"text/css")),ft=class extends fn{static properties={menuItems:{type:Array}};constructor(){super(),this.menuItems=[]}static styles=Td;render(){return Ie`
        <a href="/" class="logo">
          <span class="sr-only">Home</span>
          <solid-ui-solid-emblem></solid-ui-solid-emblem>
        </a>
        <div class="spacer"></div>
        <solid-ui-account .menuItems=${this.menuItems}></solid-ui-account>
        <span class="separator"></span>
        <solid-ui-menu placement="bottom-end" distance="5">
            <solid-ui-button slot="trigger" variant="ghost" title="Open help">
                <span class="sr-only">Open help</span>
                <icon-lucide-help-circle slot="icon"></icon-lucide-help-circle>
            </solid-ui-button>

            <solid-ui-menu-item href="https://solidos.github.io/userguide/">User guide</solid-ui-menu-item>
            <solid-ui-menu-item href="https://github.com/solidos/solidos/issues">Report a problem</solid-ui-menu-item>
        </solid-ui-menu>
    `}};customElements.get("solid-panes-header")||customElements.define("solid-panes-header",ft);async function Jo(e){let n=document.querySelector("solid-panes-header");if(n)return n;let t=await Fn(),r=t?await Ft(t):[],i=document.getElementById("MainContent"),a=document.createElement("div"),s=r.map(f=>({label:Ie`<icon-lucide-folder-open slot="left-icon"></icon-lucide-folder-open> ${f.label()}`,async onSelected(){await Fn()&&await e.show({kind:"storage",pane:f,source:"accountMenu"})}})),d=[{label:Ie`<icon-lucide-user slot="left-icon"></icon-lucide-user> Profile`,async onSelected(){let f=await Fn();f&&await e.show({kind:"profile",subject:f.value,source:"accountMenu"})}},{label:Ie`<icon-lucide-users slot="left-icon"></icon-lucide-users> Friends`,async onSelected(){let f=await Fn();f&&await e.show({kind:"friends",subject:f.value,source:"accountMenu"})}},...s,{label:Ie`<icon-lucide-layout-dashboard slot="left-icon"></icon-lucide-layout-dashboard> Dashboard`,async onSelected(){await Fn()&&await e.show({kind:"app",pane:"home",source:"accountMenu"})}},{label:Ie`<icon-lucide-settings-2 slot="left-icon"></icon-lucide-settings-2> Preferences`,async onSelected(){await Fn()&&await e.show({kind:"app",pane:"basicPreferences",source:"accountMenu"})}}];wn(Ie`<solid-panes-header .menuItems=${d}></solid-panes-header>`,a);let m=a.firstElementChild;if(!m)throw new Error("Failed to create header");return i&&i.parentNode?i.parentNode.insertBefore(m,i):document.body.prepend(m),m}var Ad=await bn(he(`:host {
    display: block;
    position: relative;
    z-index: 1;
    flex-shrink: 0;
    margin-bottom: 20px;
}

:host(.navbar--hidden) {
    display: none !important;
}

.navbar {
    border: 1px solid var(--color-border, #444);
    border-radius: 5px;
    display: flex;
    background: var(--solid-ui-color-white, #fff);
    overflow: hidden;
    transition: box-shadow 0.2s ease;
}

.navbar:hover {
    box-shadow: 0 8px 10px rgba(124, 77, 255, 0.1);
}

button {
    padding: 10px 25px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
    font-size: 90%;
    background: transparent;
    color: inherit;
    cursor: pointer;
}

button.selected,
button:active,
button:hover,
button:focus {
    border-bottom-color: var(--solid-ui-color-primary, #7C4DFF);
    border-radius: 0;
    color: var(--solid-ui-color-primary, #7C4DFF);
    text-transform: capitalize;
    background: color-mix(in srgb, currentColor 25%, transparent);
}
`,"text/css")),mt=class extends fn{static properties={navbarItems:{type:Array}};constructor(){super(),this.navbarItems=[]}static styles=Ad;selectItem(n){this.dispatchEvent(new CustomEvent("solid-ui-select",{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}render(){return Ie`
    <nav class="navbar">
       ${this.navbarItems.map(n=>Ie`
        <button
          type="button"
          class=${n.selected?"selected":""}
          @click=${()=>this.selectItem(n)}
          title=${typeof n.label=="string"?n.label:""}
        >
          ${n.label}
        </button>
      `)}
    </nav>
    `}};customElements.get("solid-panes-navbar")||customElements.define("solid-panes-navbar",mt);function ni(){return at(window.location.href,In().viaAccountMenu)}var Yo;function Xo(e,n){Yo?.(e,n)}function ei(e,n,t,r,i=!1){return{label:e,paneName:n,paneUri:t,async onSelected(){return await ni(),r()},selected:i}}function Ko(e,n,t){let r=vr(t,un(q.sym(window.location.href))),i=[];if(e.owner){let a=e.owner;i.push(ei("Profile","profile",a,()=>n.show({kind:"profile",subject:a}),it({paneName:"profile"},r,0)),ei("Friends","social",a,()=>n.show({kind:"friends",subject:a}),it({paneName:"social"},r,0)))}return e.storagePanes.forEach(a=>{i.push(ei(a.label(),a.paneName,a.subject.value,()=>n.show({kind:"storage",pane:a}),it({paneName:a.paneName,paneUri:a.subject.value},r,e.storagePanes.length)))}),i}async function Qo(e){let n=document.querySelector("solid-panes-navbar");if(n)return await ni(),n;let t=document.getElementById("MainContent"),r=document.createElement("div"),i=await En(window.location.href),a=Ko(i,e,In().view);function s(u){a=a.map(p=>({...p,selected:p===u}))}function d(u){let{detail:p}=u;s(p),Promise.resolve(p.onSelected?.()).catch(g=>{console.error("Navbar menu item selection failed:",g)}),m()}function m(){wn(Ie`<solid-panes-navbar .navbarItems=${a} @solid-ui-select=${d}></solid-panes-navbar>`,r)}m(),Yo=(u,p)=>{let g=ea(a,u,p);g&&(s(g),m())};let f=r.firstElementChild;if(!f)throw new Error("Failed to create nav bar");t?t.insertBefore(f,t.firstChild):document.body.prepend(f),await ni();let c=0,l=Rt(({url:u,state:p})=>{if(!f.isConnected)return l();at(u,p.viaAccountMenu).catch(h=>console.error("Failed to update navbar visibility:",h));let g=++c;En(u).then(h=>{if(g===c){if(ua(i,h)){let w=vr(p.view,un(q.sym(u))),_=a.map(I=>({...I,selected:it(I,w,i.storagePanes.length)}));_.some((I,E)=>I.selected!==a[E].selected)&&(a=_,m());return}i=h,a=Ko(h,e,p.view),m()}}).catch(h=>console.error("Failed to rebuild the navbar for the new pod:",h))});return f}function Zo(e){let{store:n,outliner:t,byName:r,effects:i,podContextOf:a=En}=e,s=0;async function d(l){if(!l.uri.endsWith("/"))return;let u=l.site().uri===l.uri,{storagePanes:p,viewerStorages:g}=await a(l.uri),h=p.some(w=>w.subject.uri===l.uri)||g.includes(l.uri);return u||h?Lt(l):void 0}async function m(l,u){let p=u?void 0:await a(l);return ta({viaAccountMenu:u,inViewerPod:!!p&&kr(p,l),hasOwner:!!p?.owner})}async function f(l,u){if(u.subject){let p=n.sym(u.subject);if(u.kind==="profile")return Nt(p,r);if(u.kind==="friends")return Cr(p,r);if(u.kind==="storage")return Lt(p)}return u.pane?r(u.pane)??void 0:un(l)?Nt(l,r):d(l)}async function c(l,u,p){switch(l.kind){case"restore":return f(u,p.view);case"profile":return Nt(n.sym(l.subject),r);case"friends":return Cr(n.sym(l.subject),r);case"storage":return l.pane;case"app":return r(l.pane)}}return{async show(l){let u=++s,p=In(),g=l.kind==="restore"?p.viaAccountMenu?"accountMenu":"default":l.source??"default";g==="accountMenu"&&Dt(!0);let h=n.sym(l.kind==="restore"&&l.subject?l.subject:window.location.href),w=await c(l,h,p);if(u!==s)return;if(!w&&l.kind!=="restore"){console.warn("Could not open the requested view for the logged-in user.");return}let _=w&&w.name==="folder"?w.subject?.uri:void 0,I=_?await m(_,g==="accountMenu"):void 0;if(u===s){if(t.GotoSubject(h,!0,w??void 0,!0,void 0,void 0,I?{source:g,folderView:I}:{source:g}),g!=="accountMenu"){let{view:E}=In();E.pane&&i.selectNavbarPane(E.pane,E.subject)}await i.refreshHeading(l.kind==="restore"&&l.forceHeading===!0)}}}}async function ts(e){let n=ct(e);if(n!=="owner")return n;try{return q.updater?.editable?.(e.doc())?"owner":"anonymous"}catch(t){return console.warn("Failed to check profile edit permissions.",t),"anonymous"}}function rs(e,n=q){let t=e.doc(),r=n.anyValue(e,o.vcard("nickname"))||n.anyValue(e,o.foaf("nick"))||void 0,i=n.anyValue(e,o.vcard("bday"))||void 0,a=ee.findImage(e)||void 0,s=es(n,e,o.vcard("hasTelephone"),t,"phone"),d=es(n,e,o.vcard("hasEmail"),t,"email"),m=Pd(n,e,t),f=n.any(e,o.vcard("hasAddress"),null,t)||void 0,c=f,l=f?{entryNode:f,type:n.any(c,o.rdf("type"),null,t)||void 0,streetAddress:n.anyValue(c,o.vcard("street-address"))||void 0,locality:n.anyValue(c,o.vcard("locality"))||void 0,region:n.anyValue(c,o.vcard("region"))||void 0,postalCode:n.anyValue(c,o.vcard("postal-code"))||void 0,countryName:n.anyValue(c,o.vcard("country-name"))||void 0}:void 0,u=l?.countryName,p=l?.locality,g=n.anyValue(e,o.solid("preferredSubjectPronoun"))||"",h=n.anyValue(e,o.solid("preferredObjectPronoun"))||"",w=g?`${g}${h?`/${h}`:""}`:void 0;return{name:S.label(e),nickname:r,imageSrc:a,dateOfBirth:i,jobTitle:m,primaryPhone:s,primaryEmail:d,primaryAddress:l,location:u&&p?`${p}, ${u}`:u||p||void 0,pronouns:w,entryNode:e}}function Pd(e,n,t){let r=e.each(null,o.org("member"),n,t).filter(a=>!e.holds(a,o.rdf("type"),o.schema("EducationalOccupationalCredential"),t)).map(a=>{let s=a,m=e.each(s,o.rdf("type"),null,t).find(g=>g.value.startsWith(o.solid("").value))?.value.split(/[#/]/).pop()?.toLowerCase(),f=e.anyValue(s,o.vcard("role"),null,t)||void 0,c=e.any(s,o.org("role"),null,t),l=c&&e.anyValue(c,o.schema("name"),null,t)||void 0,u=e.any(s,o.schema("endDate"),null,t);return{title:l&&f?`${l} - ${f}`:f||l,roleType:m,isCurrent:!u||m==="currentrole"}});return(r.find(a=>a.isCurrent)||r.find(a=>a.roleType!=="currentrole"&&a.roleType!=="futurerole"))?.title}function es(e,n,t,r,i){let a=[],s=[...e.statementsMatching(n,t,null,r),...e.statementsMatching(n,t)].map(m=>m.object),d=new Set;for(let m of s){if(d.has(m.value))continue;d.add(m.value);let f=Sd(e,m,r,i);if(!f)continue;let c=m.termType==="NamedNode"?[...e.each(m,o.rdf("type"),null,r),...e.each(m,o.rdf("type"))]:[],l=c[0]||(i==="email"?o.vcard("Internet"):o.vcard("Voice")),u={entryNode:m,type:l,valueNode:f};if(c.some(p=>Ud(p.value)))return u;a.push(u)}return a[0]}function Sd(e,n,t,r){return ns(n.value,r)?n:n.termType!=="NamedNode"?void 0:[...e.each(n,o.vcard("value"),null,t),...e.each(n,o.vcard("value"))].find(a=>ns(a.value,r))}function ns(e,n){let t=e.trim();return n==="email"?/^mailto:/i.test(t)||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):/^tel:/i.test(t)||/^[+()\-\s\d]{5,}$/.test(t)}function Ud(e){let n=e.trim().toLowerCase();return n==="work"||n.endsWith("#work")||n.endsWith("/work")}var Pn={add:"Add as friend",exists:"Already a friend",success:"Friend was added!",duplicate:"Friend already exists",loginRequired:"Current user not found! Not logged in?"};function is(e){if(!ve.currentUser()?.sameTerm(e))throw new Error(Pn.loginRequired)}async function ti(e,n){return await q.fetcher.load(e),is(e),q.whether(e,o.foaf("knows"),n,e.doc())>0}async function as(e,n){if(is(e),await ti(e,n))throw new Error(Pn.duplicate);Bi(q);try{await q.updater.update([],[Se(e,o.foaf("knows"),n,e.doc())])}catch(t){throw Tt(t).includes("Unauthenticated")?new Error(Pn.loginRequired):t}}var Nd=(...e)=>import("./part-RHTZVXCX.js").then(n=>n.createHeadingEditDialog(...e)),Ld=await bn(he(`:host {
  --profile-avatar-size: 8.75rem;
  --profile-fallback-padding: 36.4px;
  display: block;
  width: 100%;
  color: var(--color-text-secondary, #4a5565);
  font-family: inherit;
}

.profile-heading {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "avatar info edit"
    "avatar details details";
  align-items: start;
  column-gap: 20px;
  row-gap: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 25px;
  overflow-x: clip;
  background: var(--solid-ui-color-white, #fff);
  border: 1px solid var(--solid-ui-color-slate-200, #e2e8f0);
  border-radius: 5px;
  transition: box-shadow 0.2s ease, transform 0.2s ease, padding 0.3s ease, row-gap 0.3s ease;
}

.profile-heading:hover {
  box-shadow: 0 8px 10px rgba(124, 77, 255, 0.1);
}

.avatar {
  grid-area: avatar;
}

.image-frame {
  position: relative;
  display: grid;
  place-items: center;
  width: var(--profile-avatar-size);
  aspect-ratio: 1;
  overflow: hidden;
  transition: width 0.3s ease;
}

.image-frame--fallback {
  border: 1px dashed var(--solid-ui-color-slate-200, #e2e8f0);
  background: var(--solid-ui-color-slate-50, #f8fafc);
  box-sizing: border-box;
}

.hero {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--solid-ui-color-primary, #7c4dff);
  background: var(--color-surface-placeholder, var(--gray-300, #d1d5dc)) 50% / cover no-repeat;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
  border-radius: 10px;
}

.hero-fallback {
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 var(--profile-fallback-padding);
  box-sizing: border-box;
  transition: padding 0.3s ease;
}

.hero-fallback icon-lucide-circle-user-round {
  display: block;
  width: 100%;
  height: 100%;
  color: #cbd5e1;
}

.image-frame--fallback .hero-fallback {
  display: flex;
}

.info {
  grid-area: info;
  min-width: 0;
}

.profile__heading-edit-action {
  grid-area: edit;
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 0;
  align-self: flex-start;
  justify-self: end;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
}

.profile-friends-button__section {
  display: grid;
  gap: 8px;
  max-width: 16rem;
}

.profile__btn-friends-icon {
  display: block;
  width: 14px;
  height: 14px;
  align-self: center;
  transform: translateY(-3px);
}

.friend-message {
  text-align: center;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  overflow-wrap: anywhere;
}

.friend-message[role="alert"] {
  color: var(--solid-ui-color-red-700, #b91c1c);
}

.friend-message[role="status"] {
  color: var(--solid-ui-color-green-700, #15803d);
}

.profile-section-collapsible__edit-button {
  min-width: 0;
}

.mobile-edit-button {
  display: none;
  color: var(--solid-ui-color-primary, #7c4dff);
}

.profile-section-collapsible__action-label {
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

.profile__add-more-icon {
  margin-right: 0;
  line-height: 0;
  position: relative;
  top: 0;
  transform: translateY(0);
}

.profile__add-more-icon icon-lucide-pencil,
.profile-section-collapsible__edit-icon icon-lucide-pencil {
  display: block;
  width: 14px;
  height: 14px;
}

.header-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.identity {
  display: flex;
  align-items: baseline;
  gap: 7px;
  width: 100%;
  flex-wrap: wrap;
}

.name {
  display: block;
  margin: 0;
  color: var(--color-text-heading, #000);
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.pronouns {
  color: var(--color-text-secondary, #4a5565);
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 400;
  line-height: 1.2;
}

.role {
  width: 100%;
  color: var(--solid-ui-color-gray-800, #101828);
  font-size: var(--solid-ui-font-size-lg, 1.125rem);
  font-weight: 500;
  line-height: 1.25;
  overflow-wrap: anywhere;
}

.details-collapse {
  grid-area: details;
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s ease, opacity 0.3s ease;
}

.details {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  gap: 12px 32px;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  width: 100%;
  font-size: var(--font-size-sm, 0.875rem);
}

:host([compact]) .profile-heading {
  padding: 12.5px;
  row-gap: 0;
}

:host([compact]) .image-frame {
  width: calc(var(--profile-avatar-size) / 2);
}

:host([compact]) .hero-fallback {
  padding-inline: calc(var(--profile-fallback-padding) / 2);
}

:host([compact]) .info {
  align-self: center;
}

:host([compact]) .profile__heading-edit-action {
  align-self: center;
}

:host([compact]) .name {
  white-space: normal;
  overflow-wrap: anywhere;
}

:host([compact]) .details-collapse {
  grid-template-rows: 0fr;
  opacity: 0;
  visibility: hidden;
}

.pronouns[hidden] {
  display: none;
}

.detail-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  column-gap: clamp(12px, 2vw, 24px);
  row-gap: 12px;
  width: min(100%, 544px);
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  min-width: 0;
}

.detail-icon {
  display: inline-flex;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  margin-top: 1px;
}

.detail-icon > icon-lucide-cake,
.detail-icon > icon-lucide-map-pin,
.detail-icon > icon-lucide-phone,
.detail-icon > icon-lucide-mail {
  display: block;
  width: 16px;
  height: 16px;
  color: currentColor;
}

.detail-value {
  min-width: 0;
  overflow-wrap: anywhere;
  word-break: break-word;
}

@media (max-width: 1200px) {
  :host {
    --profile-avatar-size: 6.5rem;
    --profile-fallback-padding: 27px;
  }

  .profile-heading {
    column-gap: 15px;
  }

}

@media (max-width: 768px) {
  .profile-heading:has(.profile-friends-button__section) .name {
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .profile__btn-friends-icon {
    display: none;
  }

  .profile__btn-friends[disabled]:not([aria-busy="true"]) {
    display: none;
  }

  :host {
    --profile-avatar-size: 4.375rem;
    --profile-fallback-padding: 0px;
  }

  .profile-heading {
    grid-template-areas:
      "avatar info edit"
      "details details details";
    column-gap: 8px;
    row-gap: 12px;
  }

  .profile-section-collapsible__edit-button {
    width: var(--solid-ui-clickable-area, 42px);
    height: var(--solid-ui-clickable-area, 42px);
  }

  .desktop-edit-button {
    display: none;
  }

  .mobile-edit-button {
    display: inline-flex;
    position: relative;
    top: -12px;
    right: -12px;
  }

  .profile-section-collapsible__edit-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  .profile-heading {
    column-gap: 10px;
  }

  .hero-fallback icon-lucide-circle-user-round {
    width: 3rem;
    height: 3rem;
    transition: width 0.3s ease, height 0.3s ease;
  }

  :host([compact]) .hero-fallback icon-lucide-circle-user-round {
    width: 1.5rem;
    height: 1.5rem;
  }

  .name {
    display: inline;
    font-size: 1.375rem;
    line-height: 1.15;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .identity {
    gap: 0;
  }

  .pronouns {
    margin-left: 2px;
    font-size: 0.6875rem;
    line-height: 1.1;
    white-space: nowrap;
  }

  .role {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }

  .details {
    gap: 12px;
    font-size: 0.75rem;
  }

  .detail-row {
    column-gap: 2px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .profile-heading,
  .image-frame,
  .hero-fallback,
  .hero-fallback icon-lucide-circle-user-round,
  .details-collapse {
    transition: none;
  }
}
`,"text/css")),ht=class extends fn{static properties={profileData:{attribute:!1},subject:{attribute:!1},editContext:{attribute:!1},friendSubject:{attribute:!1},compact:{type:Boolean,reflect:!0},failedImageSrc:{state:!0},friendState:{state:!0},friendMessage:{state:!0},friendError:{state:!0}};constructor(){super(),this.profileData=void 0,this.subject=void 0,this.editContext=void 0,this.friendSubject=void 0,this.compact=!1,this.failedImageSrc=void 0,this.friendState="loading",this.friendMessage="",this.friendError=!1}static styles=Ld;friendRequest=0;friendRequestInterrupted=!1;friendMessageTimer;draggableSubject={uri:""};draggableElementsAttached=!1;connectedCallback(){super.connectedCallback(),this.friendRequestInterrupted&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}disconnectedCallback(){super.disconnectedCallback(),this.friendRequest++,(this.friendState==="loading"||this.friendState==="saving")&&(this.friendRequestInterrupted=!0),this.clearFriendMessage()}clearFriendMessage(){clearTimeout(this.friendMessageTimer),this.friendMessageTimer=void 0,this.friendMessage=""}willUpdate(n){super.willUpdate(n),n.has("profileData")&&n.get("profileData")?.imageSrc!==this.profileData?.imageSrc&&(this.failedImageSrc=void 0),n.has("friendSubject")&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}updated(){if(this.subject&&(this.draggableSubject.uri=this.subject.value),this.draggableElementsAttached||!this.subject)return;let n=this.shadowRoot?.querySelector(".profile-heading"),t=this.shadowRoot?.querySelector(".name");!n||!t||(ee.makeDraggable(n,this.draggableSubject),ee.makeDraggable(t,this.draggableSubject),this.draggableElementsAttached=!0)}startFriendCheck(){let n=++this.friendRequest;this.friendState="loading",this.clearFriendMessage(),this.friendError=!1;let t=this.friendSubject,r=ve.currentUser();!t||!r||r.sameTerm(t)||ti(r,t).then(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState=i?"exists":"available")}).catch(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState="error",this.showFriendMessage(i,!0))})}async showFriendMessage(n,t){this.clearFriendMessage(),this.friendMessage=Tt(n),this.friendError=t,this.friendMessageTimer=setTimeout(()=>{this.clearFriendMessage()},1e4),await this.updateComplete,this.shadowRoot?.querySelector(".friend-message")?.focus()}handleAddFriend=async n=>{if(n.preventDefault(),this.friendState!=="available"&&this.friendState!=="error")return;let t=this.friendSubject;if(!t)return;let r=this.friendRequest;this.friendState="saving",this.clearFriendMessage();try{let i=ve.currentUser();if(!i)throw new Error(Pn.loginRequired);if(await as(i,t),r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="exists",await this.showFriendMessage(Pn.success,!1)}catch(i){if(r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="error",await this.showFriendMessage(i,!0)}};handleEdit=n=>{let t=this.editContext;t&&Nd(n,q,t.subject,t.profileData,t.viewerMode,async()=>{this.dispatchEvent(new CustomEvent("profile-heading-saved",{bubbles:!0,composed:!0,detail:{subjectUri:t.subject.value}})),await t.onSaved()}).catch(r=>{console.error("Failed to edit profile heading.",r)})};handleImageError=n=>{this.failedImageSrc=n.currentTarget.getAttribute("src")??void 0};render(){let n=this.profileData;if(!n)return Ie``;let t=os(n.primaryPhone?.valueNode).replace(/^tel:/i,""),r=os(n.primaryEmail?.valueNode).replace(/^mailto:/i,""),i=Fd(n.dateOfBirth),a=!!(n.imageSrc&&this.failedImageSrc!==n.imageSrc),s=ve.currentUser(),d=!!(this.friendSubject&&s&&!s.sameTerm(this.friendSubject));return Ie`
      <section class="profile-heading" aria-labelledby="profile-heading-name">
        <div class="avatar">
          <div class="image-frame ${a?"":"image-frame--fallback"}">
            ${a?Ie`<img
                  class="hero"
                  src=${n.imageSrc}
                  alt=${n.name}
                  width="140"
                  height="140"
                  loading="eager"
                  @error=${this.handleImageError}
                />`:hn}
              <div class="hero-fallback" role="img" aria-label=${n.name}>
                <icon-lucide-circle-user-round aria-hidden="true"></icon-lucide-circle-user-round>
              </div>
          </div>
        </div>

        <div class="info">
          <header class="header-bar">
            <div class="identity" role="group" aria-label=${this.compact?"Name":"Name and pronouns"}>
              <h1 id="profile-heading-name" class="name">${n.name}</h1>
              ${n.pronouns?Ie`<span class="pronouns" ?hidden=${this.compact}>(${n.pronouns})</span>`:hn}
            </div>
            ${n.jobTitle?Ie`<div class="role">${n.jobTitle}</div>`:hn}
          </header>
        </div>

        ${this.editContext&&!this.compact||d?Ie`
            <div class="profile__actions profile__heading-edit-action">
              ${d?Ie`
                <div class="profile-friends-button__section" role="group" aria-label="Friend relationship actions">
                  <solid-ui-button
                    variant="secondary"
                    class="profile__btn-friends"
                    ?disabled=${this.friendState==="loading"||this.friendState==="saving"||this.friendState==="exists"}
                    aria-busy=${this.friendState==="loading"||this.friendState==="saving"?"true":"false"}
                    @click=${this.handleAddFriend}
                  >${this.friendState==="exists"?hn:Ie`<icon-lucide-user-round-plus slot="icon" class="profile__btn-friends-icon" aria-hidden="true"></icon-lucide-user-round-plus>`}${this.friendState==="exists"?Pn.exists:Pn.add}</solid-ui-button>
                  ${this.friendMessage?Ie`
                    <div class="friend-message" role=${this.friendError?"alert":"status"}
                      aria-live=${this.friendError?"assertive":"polite"} tabindex="0">
                      ${this.friendMessage}
                    </div>`:hn}
                </div>
              `:hn}
              ${this.editContext&&!this.compact?Ie`
              <solid-ui-button
                variant="tertiary"
                class="profile-section-collapsible__edit-button desktop-edit-button"
                aria-label="Add or edit heading information"
                @click=${this.handleEdit}
              >
                <span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">
                  ${this.renderEditIcon()}
                </span>
                <span class="profile-section-collapsible__action-label edit-label">Edit</span>
              </solid-ui-button>
              <solid-ui-button
                variant="ghost"
                class="profile-section-collapsible__edit-button mobile-edit-button"
                aria-label="Add or edit heading information"
                @click=${this.handleEdit}
              >
                <span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">
                  ${this.renderEditIcon()}
                </span>
              </solid-ui-button>
              `:hn}
            </div>
          `:hn}

        <div class="details-collapse" aria-hidden=${this.compact?"true":"false"} ?inert=${this.compact}>
          <div class="details">
            <div class="detail-row" role="group" aria-label="Additional profile information">
              ${this.renderLine(i,"birthday")}
              ${this.renderLine(n.location,"location")}
            </div>
            <div class="detail-row" role="group" aria-label="Contact information">
              ${this.renderLine(t,"phone")}
              ${this.renderLine(r,"email")}
            </div>
          </div>
        </div>
      </section>
    `}renderLine(n,t){return n?Ie`
      <div class="detail-item">
        <span class="detail-icon" aria-hidden="true">
          ${this.renderIcon(t)}
        </span>
        <span class="detail-value">${n}</span>
      </div>
    `:hn}renderIcon(n){switch(n){case"birthday":return Ie`<icon-lucide-cake aria-hidden="true"></icon-lucide-cake>`;case"location":return Ie`<icon-lucide-map-pin aria-hidden="true"></icon-lucide-map-pin>`;case"phone":return Ie`<icon-lucide-phone aria-hidden="true"></icon-lucide-phone>`;case"email":return Ie`<icon-lucide-mail aria-hidden="true"></icon-lucide-mail>`}}renderEditIcon(){return Ie`<icon-lucide-pencil aria-hidden="true"></icon-lucide-pencil>`}};customElements.get("solid-panes-profile-heading")||customElements.define("solid-panes-profile-heading",ht);function os(e){return e?.value??""}function Fd(e){let n=(e||"").trim(),t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);if(t){let[,i,a,s]=t;return`${s}-${a}-${i}`}let r=n.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(r){let[,i,a,s]=r;return`${i}-${a}-${s}`}return n}Be(he(`#profile-heading-mount {
  margin-top: 18px;
  margin-bottom: 20px;
}
`,"text/css"));var ri="solid-panes-profile-heading",ii="profile-heading-mount",Rn=0,ss=!1,ls=!1,ds=!1,ai,Qt="",oi="",Dn="",cs=()=>window.location.href,xn=new WeakMap,Qn=new WeakMap;function Md(e){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function")return;let n=getComputedStyle(e),t=n.marginTop||"18px",r=n.marginBottom||"20px",i=e.animate([{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"},{height:`${e.getBoundingClientRect().height}px`,opacity:1,marginTop:t,marginBottom:r,overflow:"hidden"}],{duration:300,easing:"ease",fill:"both"});Qn.set(e,i);let a=()=>{Qn.get(e)===i&&(Qn.delete(e),i.cancel())};i.finished.then(a,s=>{Qn.get(e)===i&&(console.error("Failed to animate profile heading appearance.",s),a())})}function Rd(e){let n=xn.get(e);xn.delete(e),n?.cancel(),e.inert=!1,e.removeAttribute("aria-hidden")}function Dd(e){if(xn.has(e))return;let n=getComputedStyle(e),t=e.getBoundingClientRect().height,r=n.opacity,i=n.marginTop,a=n.marginBottom,s=Qn.get(e);Qn.delete(e),s?.cancel();let d=()=>{e.hidden=!0,e.replaceChildren()};if(e.inert=!0,e.setAttribute("aria-hidden","true"),e.hidden||!e.firstElementChild||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function"){d();return}let m=e.animate([{height:`${t}px`,opacity:r,marginTop:i,marginBottom:a,overflow:"hidden"},{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"}],{duration:300,easing:"ease",fill:"forwards"});xn.set(e,m),m.finished.then(()=>{xn.get(e)===m&&(d(),xn.delete(e),m.cancel())},f=>{xn.get(e)===m&&(console.error("Failed to animate profile heading disappearance.",f),d(),xn.delete(e),m.cancel())})}function gt(){Cn(!0).catch(e=>{console.error("Failed to refresh profile heading after an authentication change.",e)})}function si(){let e=document.getElementById("MainContent");if(!e)return null;let n=document.getElementById(ii);n||(n=document.createElement("div"),n.id=ii,n.setAttribute("aria-label","Profile heading"));let t=document.querySelector("solid-panes-navbar"),r=document.getElementById("OutlineView"),i=t?.parentNode===e?t:r?.parentNode===e?r:null;return i&&n.nextSibling!==i?e.insertBefore(n,i):!i&&n.parentNode!==e&&e.appendChild(n),n}async function Cn(e=!1){await ai;let n=cs(),t=await En(n),r=si();if(!r)return;e&&(Rn++,Qt="",Dn="");let{view:i,viaAccountMenu:a}=In(),s=Zi({view:i,viaAccountMenu:a,viewer:ve.currentUser()?.value,pageUrl:n,owner:t.owner,storageUris:t.storagePanes.map(I=>I.subject.value)});if(s.mode==="none"){Rn++,Dn="",Qt="",oi="",Dd(r);return}let{subjectUri:d}=s,m=s.mode==="full";Rd(r);let f=`${s.paneName}:${d}`;if(f===Qt||f===Dn)return;let c=++Rn;Dn=f;let l,u,p,g;try{l=await kn(q.sym(d)),u=rs(l,q),g=m?await ts(l):"anonymous",p=g==="owner"}catch(I){throw c===Rn&&(Dn=""),I}if(c!==Rn)return;let h=r.querySelector(ri)||document.createElement(ri);h.profileData=u,h.subject=l;let w=ve.currentUser();h.friendSubject=Qi(s.paneName)&&w&&!w.sameTerm(l)?l:void 0,h.editContext=p?{subject:l,profileData:u,viewerMode:g,onSaved:()=>Cn(!0)}:void 0,h.compact=!m;let _=r.hidden||!r.firstElementChild;r.hidden=!1,h.parentNode!==r&&r.replaceChildren(h),Qt=f,oi=l.value,Dn="",_&&(await h.updateComplete,c===Rn&&r.isConnected&&!r.hidden&&!xn.has(r)&&Md(r))}function us(){si()}function Zt(e=()=>window.location.href){cs=e,si(),ds||(document.addEventListener("profile-pane-saved",t=>{if(!(t instanceof CustomEvent)||t.detail?.subjectUri!==oi)return;let r=document.querySelector(`#${ii} ${ri}`);if(r&&t.detail.profileData){Rn++,Dn="",r.profileData=t.detail.profileData,r.editContext&&(r.editContext={...r.editContext,profileData:t.detail.profileData});return}Cn(!0).catch(i=>{console.error("Failed to refresh profile heading after saving profile information.",i)})}),ds=!0);let n=ai??ve.checkUser().then(()=>{});return ai=n,ls||(rn.events.on("login",gt),rn.events.on("sessionRestore",gt),rn.events.on("logout",gt),rn.events.on("sessionChange",gt),rn.events.on("identityReplaced",gt),ls=!0),ss||(Rt(()=>{Cn().catch(t=>{console.error("Failed to refresh profile heading.",t)})}),ss=!0),n.then(()=>Cn(!0)).catch(t=>{console.error("Failed to refresh profile heading.",t)}),n}var ps=new WeakMap;function li(e,n){let t=ps.get(e);if(!t){let r=e.context?.session?.paneRegistry,i=typeof r?.byName=="function"?r.byName.bind(r):je;t=Zo({store:n,outliner:e,byName:i,effects:{selectNavbarPane:Xo,refreshHeading:Cn}}),ps.set(e,t)}return t}var fs,di=!1;function ms(){return di}function Bd(e){console.error("Failed to show the page after browser navigation.",e)}function hs(e){if(fs=e,di)return;di=!0;let n=()=>(Ut(),(fs?.show({kind:"restore",forceHeading:!0})??Promise.resolve()).catch(Bd)),t=window.navigation;if(!t){window.addEventListener("popstate",()=>{n()});return}t.addEventListener("navigate",r=>{Yi(window.history)||!r.hashChange&&r.destination.sameDocument!==!1&&r.destination.url===window.location.href||!r.canIntercept||!r.userInitiated||r.navigationType!=="replace"||r.destination.url!==window.location.href||r.intercept({scroll:"manual",focusReset:"manual",handler:n})}),t.addEventListener("currententrychange",r=>{r.navigationType==="traverse"&&n()})}var er="__lastRenderEnvSignature",ci=!1;function gs(e){return e?[e.layout,e.theme,e.inputMode,e.viewport?.width].join("|"):""}function Od(){let e=document.getElementById("MainContent");return e||(e=document.createElement("main"),e.id="MainContent",e.setAttribute("role","main"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-live","polite"),document.body.appendChild(e)),e}async function bs(e,n,t){if(window.name===Yr&&window.self!==window.top){document.body.textContent="This resource cannot be previewed here. Open it in a new tab instead.";return}Od(),n=n||window.location.href;let r=typeof n=="string"?e.sym(n):n;Ut(),await Zt();let i=Mn(document,t);i[er]=gs(t);let a=li(i,e);hs(a);let s=()=>ve.currentUser()?.uri||"",d=s(),m=()=>{s()!==d&&(d=s(),ca(),a.show({kind:"restore",forceHeading:!0}).catch(l=>{console.error("Failed to refresh navigation after an authentication change.",l)}))};rn.events.on("login",m),rn.events.on("sessionRestore",m),rn.events.on("logout",m),rn.events.on("sessionChange",m),rn.events.on("identityReplaced",m),await a.show({kind:"restore",subject:r.uri});let f=await Jo(a),c=await Qo(a);return us(),Promise.all([f,c])}async function ws(e){let n=e?.context?.session?.store,t=gs(e?.context?.environment),r=e?.[er]??"",i=t!==r,a=t.split("|")[1]===r.split("|")[1],s=document.querySelector('#MainContent folder-pane-view, #MainContent [data-preserve-pane-on-resize="true"]');if(i&&a&&s){if(ci)return;ci=!0,await new Promise(d=>requestAnimationFrame(()=>d()));try{e.refreshActiveExplorerPanes?.(),e[er]=t}finally{ci=!1}return}i&&n&&typeof e?.GotoSubject=="function"&&(await li(e,n).show({kind:"restore"}),e[er]=t)}function Mn(e,n){if(e.outlineManager)n&&(e.outlineManager.context=e.outlineManager.context||{},e.outlineManager.context.environment=n);else{let t=jo(e,{list:et,paneForIcon:mr,paneForPredicate:hr,register:At,byName:je},q,Ge,n);e.outlineManager=new Tr(t)}return e.outlineManager}function qd(e,n){e&&(e.context=e.context||{},e.context.environment=n)}typeof window<"u"&&Mn(window.document);Go(e=>At(e.default||e));typeof window<"u"&&(window.panes={getOutliner:Mn});export{Oi as a,et as b,mr as c,hr as d,At as e,je as f,Tr as g,Cn as h,Zt as i,ms as j,bs as k,ws as l,Mn as m,qd as n,zd as o};
