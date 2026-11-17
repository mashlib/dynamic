import{a as Oe,i as Ni,p as _t}from"./part-44I6H3VX.js";import{a as Ei}from"./part-K4T7G5CS.js";import{a as Ti,b as Ai,c as Pi,d as Si,e as Xn,f as Ui}from"./part-XVX5IZLY.js";import{a as Ct}from"./part-JII5LI4F.js";import{a as Ci,c as ir,h as ar,q as _i}from"./part-LC5XZYH4.js";import{a as ki,b as Ii}from"./part-ZM2DHA5Z.js";import{a as De,c as An,d as Bn,e as pi,g as xt,i as Pn,j as Qt,k as Zt,l as On,m as qn,q as wi,r as yi,s as vi,t as xi,w as Be}from"./part-OCHWNP3T.js";import{a as gi,b as bi,c as tr,d as rr}from"./part-TKTGPRZR.js";import{a as hi,b as nr}from"./part-WZ5ZOODI.js";import{H as re,d as N,j as Xt,o as B}from"./part-H5FMENGX.js";import{d as ue}from"./part-HZXSH6RP.js";import{a as o}from"./part-V7XQEHON.js";import{f as er}from"./part-DOP52R3A.js";import{a as mi,b as fi}from"./part-D4NMSO2J.js";import{b as ln}from"./part-VHSBPZHI.js";import{a as Tn,c as ge}from"./part-GPLAS2FA.js";import{A as je,D as _e,E as Ze,F as z,o as ui}from"./part-SVX36NT2.js";import{$ as an,A as tn,C as He,D as Rn,E as gt,F as ci,H as vn,I as bt,O as Xe,R as wt,S as yt,X as vt,Z as Le,_ as we,a as si,ca as Dn,s as li,t as Mn,u as di,w as Qe,x as rn,z as ht}from"./part-ZY5B6SMR.js";import{a as Te,e as pn,g as fn}from"./part-VOCLXBLR.js";import{b as oi,c as cs,d as ft}from"./part-XSGL5JX3.js";var Mi=oi((kd,Fi)=>{var on=Fi.exports={};on.list=[];on.paneForIcon=[];on.paneForPredicate=[];on.register=function(e,n){if(e.requireQueryButton=n,!e.name){console.log("***     No name for pane!");return}if(console.log("  registering pane: "+e.name),!e.label){console.log("***     No label for pane!");return}if(on.list.push(e),e.name in on||(on[e.name]=e),e.icon&&(on.paneForIcon[e.icon]=e),e.predicates)for(let t in e.predicates)on.paneForPredicate[t]={pred:t,code:e.predicates[t]}};on.byName=function(e){for(let n=0;n<on.list.length;n++)if(on.list[n].name===e)return on.list[n];return console.warn(`No view with name ${e} found in the registry of views (aka paneRegistry)`),null}});var eo=oi((bm,qt)=>{var Ul=function(e,n){if(typeof t>"u")var t=n.dom;var r=t.querySelectorAll(e),i={},a={init:function(s,l){this.counter=0,this.el=s,this.$items=s.querySelectorAll("figure"),this.numItems=this.$items.length,l=l||{},l.auto=l.auto||!1,this.opts={auto:typeof l.auto>"u"?!1:l.auto,speed:typeof l.auto.speed>"u"?1500:l.auto.speed,pauseOnHover:typeof l.auto.pauseOnHover>"u"?!1:l.auto.pauseOnHover,fullScreen:typeof l.fullScreen>"u"?!1:l.fullScreen,swipe:typeof l.swipe>"u"?!1:l.swipe},this.$items[0].classList.add("bss-show"),this.injectControls(s),this.addEventListeners(s),this.opts.auto&&this.autoCycle(this.el,this.opts.speed,this.opts.pauseOnHover),this.opts.fullScreen&&this.addFullScreen(this.el),this.opts.swipe&&this.addSwipe(this.el)},showCurrent:function(s){s>0?this.counter=this.counter+1===this.numItems?0:this.counter+1:this.counter=this.counter-1<0?this.numItems-1:this.counter-1,[].forEach.call(this.$items,function(l){l.classList.remove("bss-show")}),this.$items[this.counter].classList.add("bss-show")},injectControls:function(s){var l=t.createElement("span"),f=t.createElement("span"),p=t.createDocumentFragment();l.classList.add("bss-prev"),f.classList.add("bss-next"),l.innerHTML="&laquo;",f.innerHTML="&raquo;",p.appendChild(l),p.appendChild(f),s.appendChild(p)},addEventListeners:function(s){var l=this;s.querySelector(".bss-next").addEventListener("click",function(){l.showCurrent(1)},!1),s.querySelector(".bss-prev").addEventListener("click",function(){l.showCurrent(-1)},!1),s.onkeydown=function(f){f=f||window.event,f.keyCode===37?l.showCurrent(-1):f.keyCode===39&&l.showCurrent(1)}},autoCycle:function(s,l,f){var p=this,c=window.setInterval(function(){p.showCurrent(1)},l);f&&(s.addEventListener("mouseover",function(){c=clearInterval(c)},!1),s.addEventListener("mouseout",function(){c=window.setInterval(function(){p.showCurrent(1)},l)},!1))},addFullScreen:function(s){var l=this,f=t.createElement("span");f.classList.add("bss-fullscreen"),s.appendChild(f),s.querySelector(".bss-fullscreen").addEventListener("click",function(){l.toggleFullScreen(s)},!1)},addSwipe:function(s){var l=this,f=new Hammer(s);f.on("swiperight",function(p){l.showCurrent(-1)}),f.on("swipeleft",function(p){l.showCurrent(1)})},toggleFullScreen:function(s){!t.fullscreenElement&&!t.mozFullScreenElement&&!t.webkitFullscreenElement&&!t.msFullscreenElement?t.documentElement.requestFullscreen?s.requestFullscreen():t.documentElement.msRequestFullscreen?s.msRequestFullscreen():t.documentElement.mozRequestFullScreen?s.mozRequestFullScreen():t.documentElement.webkitRequestFullscreen&&s.webkitRequestFullscreen(s.ALLOW_KEYBOARD_INPUT):t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()}};[].forEach.call(r,function(s){i=Object.create(a),i.init(s,n)})};typeof qt<"u"&&qt.exports&&(qt.exports=Ul)});var Cd={};cs(Cd,{OutlineManager:()=>vr,UI:()=>Be,byName:()=>Ve,getOutliner:()=>Nn,initMainPage:()=>ss,initializeProfileHeading:()=>Jt,isHandlingBrowserNavigation:()=>is,list:()=>or,paneForIcon:()=>sr,paneForPredicate:()=>lr,refreshProfileHeading:()=>yn,refreshUI:()=>ls,register:()=>kt,updateEnvironment:()=>xd,versionInfo:()=>Li});var Li={buildTime:"2026-11-16T18:31:34Z",commit:"617cc9d",npmInfo:{"solid-panes":"5.1.0"}};var Ri=ft(Mi()),{list:or,paneForIcon:sr,paneForPredicate:lr,register:kt,byName:Ve}=Ri.default;var Di=e=>function(t){let r=N.AJARImage(t.uri,N.label(t),N.label(t),e);return r.setAttribute("class","outlineImage"),r};var Bi=e=>function(t){let r=e.createElement("a"),i=t.termType==="NamedNode"?t.uri:t.value,a=i.indexOf("mailto:");return i=a>=0?i.slice(a+7):i,r.setAttribute("href","mailto:"+i),r.appendChild(e.createTextNode(i)),r};function Oi(e){let n={properties:[],defaults:[],classes:[]},t=Di(e),r=Bi(e);return zn(n,o.foaf("depiction").uri,t,!0),zn(n,o.foaf("img").uri,t,!0),zn(n,o.foaf("thumbnail").uri,t,!0),zn(n,o.foaf("logo").uri,t,!0),zn(n,o.schema("image").uri,t,!0),zn(n,o.foaf("mbox").uri,r,!0),n}function zn(e,n,t,r){e.properties[n]||(e.properties[n]=[]),e.properties[n].push(t),r&&(e.defaults[n]=t)}var ee={};ee.src=[];ee.tooltips=[];ee.src.icon_expand=B.originalIconBase+"tbl-expand-trans.png";ee.src.icon_more=B.originalIconBase+"tbl-more-trans.png";ee.src.icon_collapse=B.originalIconBase+"tbl-collapse.png";ee.src.icon_internals=B.originalIconBase+"tango/22-emblem-system.png";ee.src.icon_instances=B.originalIconBase+"tango/22-folder-open.png";ee.src.icon_foaf=B.originalIconBase+"foaf/foafTiny.gif";ee.src.icon_social=B.originalIconBase+"social/social.gif";ee.src.icon_mb=B.originalIconBase+"microblog/microblog.png";ee.src.icon_shrink=B.originalIconBase+"tbl-shrink.png";ee.src.icon_rows=B.originalIconBase+"tbl-rows.png";ee.src.icon_unrequested=B.originalIconBase+"16dot-blue.gif";ee.src.icon_fetched=B.originalIconBase+"16dot-green.gif";ee.src.icon_failed=B.originalIconBase+"16dot-red.gif";ee.src.icon_requested=B.originalIconBase+"16dot-yellow.gif";ee.src.icon_CVPane=B.originalIconBase+"CV.png";ee.src.icon_defaultPane=B.originalIconBase+"about.png";ee.src.icon_visit=B.originalIconBase+"tango/22-text-x-generic.png";ee.src.icon_dataContents=B.originalIconBase+"rdf_flyer.24.gif";ee.src.icon_n3Pane=B.originalIconBase+"w3c/n3_smaller.png";ee.src.icon_RDFXMLPane=B.originalIconBase+"22-text-xml4.png";ee.src.icon_imageContents=B.originalIconBase+"tango/22-image-x-generic.png";ee.src.icon_airPane=B.originalIconBase+"1pt5a.gif";ee.src.icon_LawPane=B.originalIconBase+"law.jpg";ee.src.icon_pushbackPane=B.originalIconBase+"pb-logo.png";ee.src.icon_photoPane=B.originalIconBase+"photo_small.png";ee.src.icon_tagPane=B.originalIconBase+"tag_small.png";ee.src.icon_TinyTag=B.originalIconBase+"tag_tiny.png";ee.src.icon_photoBegin=B.originalIconBase+"photo_begin.png";ee.src.icon_photoNext=B.originalIconBase+"photo_next.png";ee.src.icon_photoBack=B.originalIconBase+"photo_back.png";ee.src.icon_photoEnd=B.originalIconBase+"photo_end.png";ee.src.icon_photoImportPane=B.originalIconBase+"flickr_small.png";ee.src.icon_retract=B.originalIconBase+"retract.gif";ee.src.icon_refresh=B.originalIconBase+"refresh.gif";ee.src.icon_optoff=B.originalIconBase+"optional_off.PNG";ee.src.icon_opton=B.originalIconBase+"optional_on.PNG";ee.src.icon_map=B.originalIconBase+"compassrose.png";ee.src.icon_retracted=ee.src.icon_unrequested;ee.src.icon_retracted=ee.src.icon_unrequested;ee.src.icon_time=B.originalIconBase+"icons/Wclocksmall.png";ee.src.icon_telephone=B.originalIconBase+"silk/telephone.png";ee.src.icon_time=B.originalIconBase+"Wclocksmall.png";ee.src.icon_remove_node=B.originalIconBase+"tbl-x-small.png";ee.src.icon_add_triple=B.originalIconBase+"tango/22-list-add.png";ee.src.icon_add_new_triple=B.originalIconBase+"tango/22-list-add-new.png";ee.src.icon_show_choices=B.originalIconBase+"userinput_show_choices_temp.png";ee.src.icon_display_reasons=B.originalIconBase+"tango/22-help-browser.png";ee.tooltips[ee.src.icon_display_reasons]="Display explanations";ee.tooltips[ee.src.icon_add_triple]="Add more";ee.tooltips[ee.src.icon_add_new_triple]="Add one";ee.tooltips[ee.src.icon_remove_node]="Remove";ee.tooltips[ee.src.icon_expand]="View details.";ee.tooltips[ee.src.icon_collapse]="Hide details.";ee.tooltips[ee.src.icon_shrink]="Shrink list.";ee.tooltips[ee.src.icon_internals]="Under the hood";ee.tooltips[ee.src.icon_instances]="List";ee.tooltips[ee.src.icon_foaf]="Friends";ee.tooltips[ee.src.icon_rows]="Make a table of data like this";ee.tooltips[ee.src.icon_unrequested]="Fetch this.";ee.tooltips[ee.src.icon_fetched]="Fetched successfully.";ee.tooltips[ee.src.icon_failed]="Failed to load. Click to retry.";ee.tooltips[ee.src.icon_requested]="This is being fetched. Please wait...";ee.tooltips[ee.src.icon_visit]="View document";ee.tooltips[ee.src.icon_retract]="Remove this source and all its data from tabulator.";ee.tooltips[ee.src.icon_refresh]="Refresh this source and reload its triples.";ee.OutlinerIcon=function(e,n,t,r,i){return this.src=e,this.alt=t,this.width=n,this.tooltip=r,this.filter=i,this};ee.termWidgets={};ee.termWidgets.optOn=new ee.OutlinerIcon(ee.src.icon_opton,20,"opt on","Make this branch of your query mandatory.");ee.termWidgets.optOff=new ee.OutlinerIcon(ee.src.icon_optoff,20,"opt off","Make this branch of your query optional.");ee.termWidgets.addTri=new ee.OutlinerIcon(ee.src.icon_add_triple,18,"add tri","Add one");var Qn,Sn;function Zn(e){let n=e.document;this.menuId="predicateMenu1";let t=function(c){console.log(c+`
`)},r=o.rdf,i=tn("http://purl.org/ontology/bibo/"),a=tn("http://purl.org/dc/elements/1.1/"),s=!1;function l(p){let c=p;for(;c&&c!==n;){if(c.AJAR_statement)return c;c=c.parentNode}return N.ancestor(p,"DIV")||N.ancestor(p,"TR")}function f(p){return l(p)?.parentNode||N.ancestor(p,"TABLE")}return Qn||(Qn=new ci,Qn.superFormula=z),Sn||(Sn=new bt),Sn.name="TempFormula",z.updater||(z.updater=new yt(z)),{sparqler:z.updater,lastModified:null,lastModifiedStat:null,statIsInverse:!1,addNewPredicateObject:function(c){if(N.getTarget(c).className!=="bottom-border-active")return;let d=e.UserInput,u=N.getTarget(c),m=n.createElement("div"),g=l(u),h=f(u);h.insertBefore(m,g);let b=n.createElement("div"),w=d.generateRequest("(TBD)",b,!0);m.appendChild(b.firstChild);let _=d.generateRequest("(Enter text or drag an object onto this field)",b,!1);if(m.appendChild(b.firstChild),g.previousSibling&&g.previousSibling.AJAR_statement){let I=g.previousSibling.AJAR_statement;d.formUndetStat(m,I.subject,w,_,I.why,!1)}else{let I=N.getAbout(z,h.parentNode),S=z.sym(He.uri.docpart(I.uri));d.formUndetStat(m,I,w,_,S,!1)}e.walk("moveTo",m.firstChild),ue.info("addNewPredicateObject: selection = "+e.getSelection().map(function(I){return I.textContent}).join(", ")),this.startFillInText(e.getSelection()[0])},addNewObject:function(c){let d=N.getTarget(c).parentNode.parentNode,u=d.parentNode.AJAR_inverse;this.lastModifiedStat=d.parentNode.AJAR_statement;let m=this.appendToPredicate(d),g=this.generateRequest(" (Error) ",m,!1),h=m.previousSibling.AJAR_statement;u?this.formUndetStat(m,g,h.predicate,h.object,h.why,!0):this.formUndetStat(m,h.subject,h.predicate,g,h.why,!1),e.walk("moveTo",m.lastChild),this.startFillInText(m.lastChild)},Delete:function(c){this.deleteTriple(c,!1)},Enter:function(c){this.literalModification(c)},Click:function(c){let d=N.getTarget(c);N.getTerm(d).termType==="Literal"&&(this.literalModification(d),c.preventDefault(),c.stopPropagation())},pasteFromClipboard:function(c,d){function u(g){let h=e.clipboard[g].shift();if(h===null){ue.warn("no more element in clipboard!");return}switch(g){case"predicates":case"objects":{let b=e.clipboard.all;for(let w=0;;w++)if(h.sameTerm(b[w])){b.splice(w,1);break}break}case"all":throw new Error("hostorical code not understood - what is theCollection?")}return h}let m;switch(d.className){case"undetermined selected":if(m=d.nextSibling?u("predicates"):u("objects"),!m)return;break;case"pred selected":if(m=u("objects"),!m)return;break;case"selected":{let g=u("all");if(!g)return;m=g[0],this.insertTermTo(d,m,g[1]);return}}this.insertTermTo(d,m)},startFillInText:function(c){switch(this.whatSortOfEditCell(c)){case"DatatypeProperty-like":N.emptyNode(c),this.lastModified=this.createInputBoxIn(c," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select();break;case"predicate":this.performAutoCompleteEdit(c,"PredicateAutoComplete");break;case"ObjectProperty-like":case"no-idea":this.performAutoCompleteEdit(c,"GeneralAutoComplete")}},literalModification:function(c){if(ue.debug("entering literal Modification with "+c+c.textContent),c.className.indexOf(" pendingedit")!==-1)return ue.warn(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),!0;let d=c;if(!this.getStatementAbout(d))return;let m,g;try{m=N.getTerm(d),g=l(d)}catch(b){ue.warn("userinput.js: "+b+N.getAbout(z,c)),ue.error(d+" getStatement Error:"+b)}let h;try{h=g.lastChild}catch(b){ue.error(b+"@"+d)}if(m.termType==="Literal"){if(h.removeChild(h.firstChild),m.value.match(`
`)){let b=n.createElement("textarea");b.appendChild(n.createTextNode(m.value)),b.setAttribute("rows",(m.value.match(/\n/g).length+1).toString()),b.setAttribute("cols","100"),b.setAttribute("class","textinput"),h.appendChild(b),this.lastModified=b}else this.lastModified=this.createInputBoxIn(h,m.value);this.lastModified.isNew=!1,this.lastModified.select()}return!0},performAutoCompleteEdit:function(c,d){N.emptyNode(c),t("perform AutoCompleteEdit. THIS IS="+this),this.lastModified=this.createInputBoxIn(c,""),this.lastModified.select(),this.lastModified.addEventListener("keypress",this.getAutoCompleteHandler(d),!1),this.getAutoCompleteHandler(d)(1)},backOut:function(){this.deleteTriple(this.lastModified.parentNode,!0),this.lastModified=null},clearMenu:function(){let c=n.getElementById(this.menuID);c&&c.parentNode.removeChild(c)},clearInputAndSave:function(c){let d;if(!this.lastModified)return;if(!this.lastModified.isNew)try{d=this.getStatementAbout(this.lastModified).object}catch{return}let u=this.lastModifiedStat,m,g,h,b;if(this.lastModified.value!==this.lastModified.defaultValue){let w;if(this.lastModified.value===""){this.lastModified.value=this.lastModified.defaultValue,this.clearInputAndSave();return}else if(this.lastModified.isNew){u=new Qe(u.subject,u.predicate,z.literal(this.lastModified.value),u.why),m=this.views.defaults[u.predicate.uri],w=l(this.lastModified);try{z.updater.update([],[u],function(_,I,S){I||(ue.error("Error occurs while inserting "+u+`

`+S+`
`),e.UserInput.deleteTriple(w.lastChild,!0))})}catch(_){ue.error("Error inserting fact "+u+`:
	`+_+`
`);return}u=z.add(u.subject,u.predicate,z.literal(this.lastModified.value),u.why)}else{if(this.statIsInverse){ue.error("Invalid Input: a literal can't be a subject in RDF/XML"),this.backOut();return}let _,I,S;switch(d.termType){case"Literal":{let A=this.lastModified.value;w=l(this.lastModified);let O=this.lastModified.defaultValue;I=Le(u.subject,u.predicate,z.literal(this.lastModified.value),u.why);try{z.updater.update([u],[I],function(q,F,E){F?d.value=A:(ue.warn("Error occurs while editing "+u+`

`+E),w.lastChild.textContent=O),w.lastChild.className=w.lastChild.className.replace(/ pendingedit/g,"")})}catch(q){ue.warn("Error occurs while editing "+u+`:
	`+q);return}break}case"BlankNode":{let A=z.literal(this.lastModified.value,"");if(u.predicate.termType==="Collection"){let O=u.predicate.elements[0];if(z.any(void 0,O,A)){if(!c){let E=this.lastModified.parentNode;c={},c.pageX=N.findPos(E)[0],c.pageY=N.findPos(E)[1]+E.clientHeight}this.showMenu(c,"DidYouMeanDialog",void 0,{dialogTerm:z.any(void 0,O,A),bnodeTerm:u.subject})}else{_=l(this.lastModified).AJAR_statement,I=Le(u.subject,O,A,u.why);let E=z.the(u.subject,r("type"));S=z.anyStatementMatching(u.subject,r("type"),E,u.why),w=l(this.lastModified).parentNode;try{z.updater.update([],[_,I,S],function(X,J,oe){J||(console.log("Error occurs while editing "+_+`

`+oe),e.UserInput.deleteTriple(w.lastChild,!0))})}catch(X){console.log("Error occurs while editing "+_+`:
	`+X);return}z.remove(u),z.add(u.subject,O,A,u.why)}let q=f(this.lastModified).parentNode,F=Ve("default");e.outlineExpand(q,u.subject,{pane:F,already:!0}),e.walk("right",e.focusTd)}else{this.fillInRequest("object",this.lastModified.parentNode,z.literal(this.lastModified.value));return}break}}}}else if(this.lastModified.isNew){g=l(this.lastModified),h=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),b=g.previousSibling.AJAR_statement,this.formUndetStat(g,b.subject,b.predicate,h,b.why,!1),this.lastModified=null;return}else if(u.predicate.termType==="Collection"){z.removeMany(u.subject);let w=l(this.lastModified);b=w.AJAR_statement,h=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),this.formUndetStat(w,b.subject,b.predicate,h,b.why,!1),e.replaceTD(e.outlineObjectTD(h,m),w.lastChild),this.lastModified=null;return}else if(this.statIsInverse){if(u.subject.termType==="BlankNode"){this.backOut();return}}else if(u.object.termType==="BlankNode"){this.backOut();return}g=l(this.lastModified),this.statIsInverse?e.replaceTD(e.outlineObjectTD(u.subject,m),g.lastChild):e.replaceTD(e.outlineObjectTD(z.literal(this.lastModified.value),m),g.lastChild),this.lastModified.value!==this.lastModified.defaultValue&&(g.lastChild.className+=" pendingedit"),this.lastModified=null},deleteTriple:function(c,d){if(ue.debug("deleteTriple entered"),!d&&c.className.indexOf(" pendingedit")!==-1){console.log(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),e.walk("up");return}let u=this.getStatementAbout(c);if(!d&&!z.whether(u.object,r("type"),o.link("Request"))&&!z.whether(u.predicate,r("type"),o.link("Request"))&&!z.whether(u.subject,r("type"),o.link("Request"))){ue.debug("about to send SPARQLUpdate");try{z.updater.update([u],[],function(h,b,w){b?g():(console.log("Error occurs while deleting "+u+`

`+w),c.className=c.className.replace(/ pendingedit/g,""))}),c.className+=" pendingedit"}catch(h){ue.error(h),ue.warn("Error deleting statement "+u+`:
	`+h);return}ue.debug("SPARQLUpdate sent")}ue.debug("about to remove "+u),ue.debug("removed"),e.walk("up");let m=c.parentNode;function g(){let h;for(h=m;h.childNodes.length===1;h=h.previousSibling);let b;if(h===m){let w=h.nextSibling;w.nextSibling&&w.childNodes.length===1&&(b=h.firstChild,b.setAttribute("rowspan",parseInt(b.getAttribute("rowspan"))-1),w.insertBefore(h.firstChild,w.firstChild)),m.parentNode.removeChild(m)}else b=h.firstChild,b.setAttribute("rowspan",parseInt(b.getAttribute("rowspan"))-1),m.parentNode.removeChild(m)}d&&g()},clipboardInit:function(){e.clipboard={},e.clipboard.objects=[],e.clipboard.predicates=[],e.clipboard.all=[]},copyToClipboard:function(c,d){let u=N.getTerm(d);switch(d.className){case"selected":case"obj selected":e.clipboard.objects.unshift(u);break;case"pred selected":case"pred internal selected":e.clipboard.predicates.unshift(u)}e.clipboard.all.unshift(u)},insertTermTo:function(c,d,u){let m,g;switch(c.className){case"undetermined selected":m=this.views.defaults[c.parentNode.AJAR_statement.predicate.uri],this.fillInRequest(c.nextSibling?"predicate":"object",c,d);break;case"pred selected":{let h=this.appendToPredicate(c);g=c.parentNode.AJAR_statement,m=this.views.defaults[g.predicate.uri],h.appendChild(e.outlineObjectTD(d,m));let b=c.parentNode.AJAR_inverse;b?h.AJAR_statemnet=z.add(d,g.predicate,g.object,g.why):h.AJAR_statement=z.add(g.subject,g.predicate,d,g.why);try{z.updater.update([],[h.AJAR_statement],function(w,_,I){_||ue.error("userinput.js (pred selected): Fail trying to insert statement "+h.AJAR_statement+": "+I)})}catch(w){ue.error("Exception trying to insert statement "+h.AJAR_statement+": "+N.stackString(w));return}h.AJAR_inverse=b,Qn.statements.push(h.AJAR_statement);break}case"selected":{let h=f(c),b=h.insertBefore(n.createElement("div"),h.lastChild);if(g=b.previousSibling.AJAR_statement,typeof u>"u"&&(u=!0),u)this.formUndetStat(b,g.subject,this.generateRequest("(TBD)",b,!0),d,g.why,!1),b.appendChild(e.outlineObjectTD(d)),e.walk("moveTo",b.firstChild),this.startFillInText(b.firstChild);else{let w=this.generateRequest("(To be determined. Re-type of drag an object onto this field)",b);this.formUndetStat(b,g.subject,d,w,g.why,!1),b.insertBefore(e.outlinePredicateTD(d,b,!1,!1),b.firstChild),e.walk("moveTo",b.lastChild),this.startFillInText(b.lastChild)}break}}},Refill:function(c,d){ue.info("Refill"+d.textContent);let u=d.nextSibling,m;if(u){let g,h,b;if(d.nextSibling.className==="undetermined"){g=N.getAbout(z,f(d).parentNode),h=z.any(g,r("type")),b=[];let w=`.
`;b[0]=`SELECT ?pred WHERE{
?pred `+r("type")+r("Property")+`.
?pred `+o.rdfs("domain")+h+".}",b[1]=`SELECT ?pred ?class
WHERE{
?pred `+r("type")+r("Property")+`.
`+h+o.rdfs("subClassOf")+` ?class.
?pred `+o.rdfs("domain")+` ?class.
}`,b[2]=`SELECT ?pred WHERE{
`+g+r("type")+z.variable("subjectClass")+w+z.variable("pred")+o.rdfs("domain")+z.variable("subjectClass")+w+"}",m=b.map(wt)}else{g=N.getAbout(z,f(d).parentNode),h=z.any(g,r("type"));let w=d.parentNode.AJAR_statement.object;b="SELECT ?pred WHERE{"+g+r("type")+`?subjectClass.
`+w+r("type")+`?objectClass.
?pred `+o.rdfs("domain")+`?subjectClass.
?pred `+o.rdfs("range")+`?objectClass.
}`,m=wt(b)}this.showMenu(c,"GeneralPredicateChoice",m,{isPredicate:u,selectedTd:d})}else{let g=d.parentNode.AJAR_statement.predicate;if((z.whether(g,r("type"),o.owl("DatatypeProperty"))||g.termType==="Collection"||z.whether(g,o.rdfs("range"),o.rdfs("Literal")))&&(d.className="",N.emptyNode(d),this.lastModified=this.createInputBoxIn(d," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select()),d.parentNode.AJAR_statement.predicate.sameTerm(r("type"))){let h="SELECT ?class WHERE{?class "+r("type")+o.rdfs("Class")+".}",b=wt(h);this.showMenu(c,"TypeChoice",b,{isPredicate:u,selectedTd:d})}}},getAutoCompleteHandler:function(c){t(`

***** In getAutoCompleteHandler ****** mode = `+c),c==="PredicateAutoComplete"?c="predicate":c!=="JournalTAC"&&(c="all");let d;return c==="JournalTAC"?d=n.getElementById("inpid_journal_title"):d=this.lastModified||e.getSelection()[0].firstChild,t("InputBox="+d),t("InputBox.value="+d.value),function(u){t("ENTER EVENT="+u),t("1. outside (if eneterEvent)");let m={},g=d.parentNode;c||(c=g.nextSibling?"predicate":"all"),m.pageX=N.findPos(g)[0],m.pageY=N.findPos(g)[1]+g.clientHeight,t("epX="+m.pageX+", epY="+m.pageY+", mode="+c);let h=n.getElementById(e.UserInput.menuID);function b(w){w&&(h.lastHighlight&&(h.lastHighlight.className=""),h.lastHighlight=w,h.lastHighlight.className="activeItem",e.showURI(N.getAbout(z,h.lastHighlight)))}if(u){t("2. in (if enterEvent).  with type = "+typeof u);let w=d.value;if(typeof u=="object")switch(t("3. in typeof enterEvent is object, will switch to keys, arrows, etc. keycode = "+u.keyCode),u.stopPropagation(),h&&!h.lastHighlight&&b(h.firstChild.firstChild),u.keyCode){case 13:case 9:if(t("handler: Enter or Tab"),!h){e.UserInput.clearInputAndSave();return}if(!h.lastHighlight)return c==="JournalTAC"?(e.UserInput.clearMenu(),t("no lastH"),"no lastH"):void 0;if(h.lastHighlight.tagName==="INPUT")switch(h.lastHighlight.value){case"New...":t("subcase New"),e.UserInput.createNew();break;case"GiveURI":t("subcase GiveURI"),e.UserInput.inputURI();break}else{if(c==="JournalTAC"){if(t("movedArrow? "+s),s&&h.lastHighlight){let S=h.lastHighlight.firstChild.firstChild.innerHTML,A=h.lastHighlight.firstChild.nextSibling.innerHTML;return A=A.slice(4,-4),["gotdptitle",S,A]}return"asGivenTxt"}let _=N.getAbout(z,h.lastHighlight),I=c==="predicate"?"predicate":"object";e.UserInput.clearMenu(),e.UserInput.fillInRequest(I,d.parentNode,_)}t("outside");return;case 38:return t("handler: Arrow UP"),s=!0,w===""&&h.lastHighlight.tagName==="TR"&&!h.lastHighlight.previousSibling?b(h.firstChild.firstChild):b(h.lastHighlight.previousSibling),"I'm a little Arrow Up";case 40:return t("handler: Arrow Down"),s=!0,h.lastHighlight.tagName==="INPUT"?b(h.childNodes[1].firstChild):b(h.lastHighlight.nextSibling),"I'm a little Down Arrow";case 37:case 39:t("handler: Arrow left, right"),h.lastHighlight.tagName==="INPUT"&&(u.keyCode===37?b(h.lastHighlight.previousSibling):b(h.lastHighlight.nextSibling));return;case 8:t("handler: Backspace"),w=w.slice(0,-1);break;case 27:if(t("handler: Esc"),!h){e.UserInput.backOut();return}e.UserInput.clearMenu();return;default:t("handler: Default"),s=!1,t("oldtext="+w),w+=String.fromCharCode(u.charCode),t("charcodent="+u.charCode),t("strcharcod="+String.fromCharCode(u.charCode)),console.log("DEFAULT txtstr="+w+`
`)}if(c==="all"?(t("generalAC after switch, newText="+w+"mode is all"),e.UserInput.clearMenu(),e.UserInput.showMenu(m,"GeneralAutoComplete",void 0,{inputText:w,selectedTd:g}),w.length===0&&e.UserInput.WildCardButtons()):c==="predicate"?(t("predicateAC after switch, newText="+w+"mode is predicate"),e.UserInput.clearMenu(),e.UserInput.showMenu(m,"PredicateAutoComplete",void 0,{inputText:w,isPredicate:!0,selectedTd:g})):c==="JournalTAC"&&(t("JouralTAC after switch, newText="+w),e.UserInput.clearMenu(),e.UserInput.showMenu(m,"JournalTitleAutoComplete",void 0,{inputText:w},"orderisuseless")),h=n.getElementById(e.UserInput.menuID),!h){t("No menu element.  Do not show menu.");return}return t(`at end of handler
^^^^^^^^^^^^^^^^^

`),b(h.firstChild.firstChild),e.showURI(N.getAbout(z,h.lastHighlight)),"nothing to return"}}},WildCardButtons:function(){let c=n.getElementById(e.UserInput.menuID),d=c.insertBefore(n.createElement("div"),c.firstChild),u=d.appendChild(n.createElement("input")),m=d.appendChild(n.createElement("input"));u.type="button",u.value="New...",m.type="button",m.value="Know its URI";function g(h){let b=n.getElementById(e.UserInput.menuID);b.lastHighlight&&(b.lastHighlight.className=""),b.lastHighlight=N.ancestor(N.getTarget(h),"INPUT"),b.lastHighlight&&(b.lastHighlight.className="activeItem")}d.addEventListener("mouseover",g,!1),u.addEventListener("click",this.createNew,!1),m.addEventListener("click",this.inputURI,!1)},Keypress:function(p){if(p.keyCode===13)if(e.targetOf(p).tagName!=="TEXTAREA")this.clearInputAndSave();else{let c=parseInt(this.lastModified.getAttribute("rows"));this.lastModified.setAttribute("rows",(c+1).toString()),p.stopPropagation()}},Mousedown:function(p){t("MOUSING DOWN"),window.addEventListener("keypress",function(d){d.ctrlKey&&(d.charCode===115||d.charCode===113)&&Zn.switchMode()},!1),window.addEventListener("mousedown",Zn.Mousedown,!1);let c=document.getElementById("OutlineView");c&&(c.oncontextmenu=function(){return!1}),p.button===2&&(Zn.switchMode(),p&&(p.preventDefault(),p.stopPropagation()))},Mouseover:function(c){if(this.className="bottom-border-active",this._tabulatorMode===1)switch(N.getTarget(c).tagName){case"TD":{let d=N.getTarget(c);d.className==="pred"&&(d.style.cursor="copy");break}case"DIV":{let d=N.getTarget(c);N.getTarget(c).className==="bottom-border"&&(d.style.borderColor="rgb(100%,65%,0%)",d.style.cursor="copy");break}default:}},Mouseout:function(p){if(this.className="bottom-border",this._tabulatorMode===1){let c=N.getTarget(p);N.getTarget(p).className==="bottom-border"&&(c.style.borderColor="transparent",c.style.cursor="auto")}},whatSortOfEditCell:function(c){if(c.nextSibling)return"predicate";let d=this.getStatementAbout(c).predicate;return z.whether(d,o.rdf("type"),o.owl("DatatypeProperty"))||z.whether(d,o.rdfs("range"),o.rdfs("Literal"))||d.termType==="Collection"?"DatatypeProperty-like":z.whether(d,r("type"),o.owl("ObjectProperty"))?"ObjectProperty-like":"no-idea"},getStatementAbout:function(c){let d=l(c);if(!d)throw new Error("No ancestor TR for the TD we clicked on:"+c);let u;try{u=d.AJAR_statement}catch{throw new Error("No AJAR_statement!"+c+c.textContent+" has ancestor "+d)}return this.lastModifiedStat=d.AJAR_statement,this.statIsInverse=d.AJAR_inverse,u},createInputBoxIn:function(c,d){function u(g){(g.keyCode===38||g.keyCode===40)&&(e.OutlinerKeypressPanel(g),e.UserInput.clearInputAndSave())}ue.info("myDocument in createInputBoxIn is now "+n.location),ue.info("outline.document is now "+e.document.location);let m=n.createElement("input");return m.setAttribute("value",d),m.setAttribute("class","textinput"),c.className!=="undetermined selected"&&(m.setAttribute("size","100"),m.addEventListener("keypress",u,!1)),c.appendChild(m),m},createNew:function(c){e.UserInput.clearMenu();let d=e.getSelection()[0],u=d.parentNode.AJAR_statement.why,m=z.nextSymbol(u);e.UserInput.fillInRequest("object",d,m),e.outlineExpand(e.getSelection()[0],m)},inputURI:function(c){let d=e.UserInput;d.clearMenu();let u=e.getSelection()[0];N.emptyNode(u);let m=" (Type a URI) ";d.lastModified=d.createInputBoxIn(u,m),d.lastModified.select();function g(h){switch(h.stopPropagation(),h.keyCode){case 13:case 9:if(this.value!==m){let b=this.value;d.fillInRequest("object",u,z.sym(b))}}}d.lastModified.addEventListener("keypress",g,!1)},appendToPredicate:function(c){let d=!1,u;try{for(u=c.parentNode.nextSibling;u.childNodes.length===1&&u.AJAR_statement;u=u.nextSibling);}catch{d=!0}let m=n.createElement("div");if(m.style.colspan="1",m.style.display="block",m.style.display="",c.hasAttribute("rowspan")&&c.setAttribute("rowspan",parseInt(c.getAttribute("rowspan"))+1),c.hasAttribute("rowspan")||c.setAttribute("rowspan","2"),!d)u.parentNode.insertBefore(m,u);else{let g=c.parentNode.parentNode;g.className==="defaultPane"?g.insertBefore(m,g.lastChild):g.appendChild(m)}return m},bnode2symbol:function(c,d){z.copyTo(c,d,["two-direction","delete"])},generateRequest:function(c,d,u,m){let g;m||(d?g=d:g=l(this.lastModified),N.emptyNode(g));let h=Sn,b=h.bnode();if(h.add(b,o.rdf("type"),o.link("Request")),c.length<10?h.add(b,o.link("message"),h.literal(c)):h.add(b,o.link("message"),h.literal(c)),h.add(b,o.link("to"),h.literal("The User")),h.add(b,o.link("from"),h.literal("The User")),!m){let w;u?w=g.appendChild(e.outlinePredicateTD(b,g,!1,!1)):w=g.appendChild(e.outlineObjectTD(b)),w.className="undetermined",w.textContent=c}return b},showMenu:function(c,d,u,m,g){ue.info("myDocument is now "+n.location),ue.info("outline.doucment is now "+e.document.location);let h=this,b=n.createElement("div");if(t(`
**** In showMenu, menuType = `+d+`
`),m)for(let M in m)console.log("	 extra "+M+": "+m[M]+`
`);console.log(`CREATED MENU
`),b.id=this.menuID,b.className="outlineMenu",b.style.top=c.pageY+"px",b.style.left=c.pageX+"px";let w=function(Z){let ne=0,G=0,j=0,R=0,W=0,$=0;for(;Z&&!isNaN(Z.offsetLeft)&&!isNaN(Z.offsetTop);)W=Z.offsetLeft,$=Z.offsetTop,W!==j&&(ne+=Z.offsetLeft-Z.scrollLeft),$!==R&&(G+=Z.offsetTop-Z.scrollTop),j=W,R=$,Z=Z.parentNode;return{top:G+54,left:ne-38}};if(d==="JournalTitleAutoComplete"){let M=w(n.getElementById("inpid_journal_title"));M.left-=n.getElementById("inpid_journal_title").scrollTop,b.style.top=M.top+"px",b.style.left=M.left+"px"}console.log("menu at top="+b.style.top+" left="+b.style.left+`
`),n.body.appendChild(b);let _=b.appendChild(n.createElement("table"));b.lastHighlight=null;function I(M){b.lastHighlight&&(b.lastHighlight.className=""),b.lastHighlight=N.ancestor(N.getTarget(M),"TR"),b.lastHighlight&&(b.lastHighlight.className="activeItem")}_.addEventListener("mouseover",I,!1);let S;switch(d){case"DidYouMeanDialog":S=function(Z){t("DID YOU MEAN SELECT ITEM!!!!!");let ne=N.ancestor(N.getTarget(Z),"TR");ne.childNodes.length===2&&ne.nextSibling?(z.add(X,J,oe),e.UserInput.clearMenu()):ne.childNodes.length===2&&e.UserInput.clearMenu()};break;case"LimitedPredicateChoice":{let M=m.clickedTd;S=function(ne){t("LIMITED P SELECT ITEM!!!!");let G=N.getAbout(z,N.getTarget(ne)),j=M.parentNode.AJAR_statement.predicate.elements;for(let $=0;$<j.length;$++)j[$].sameTerm(G)&&j.unshift(j.splice($,1)[0]);e.UserInput.clearMenu();let R=M.parentNode,W=e.outlinePredicateTD(R.AJAR_statement.predicate,R);R.insertBefore(W,M),R.removeChild(M),h.lastModified.select()};break}case"PredicateAutoComplete":case"GeneralAutoComplete":case"GeneralPredicateChoice":case"JournalTitleAutoComplete":case"TypeChoice":{let M=m.isPredicate,Z=m.selectedTd;S=function(G){t("WOOHOO");let j=N.getAbout(z,N.getTarget(G));t("GENERAL SELECT ITEM!!!!!!="+j),t("target="+N.getTarget(G)),M?(t("1"),e.UserInput.fillInRequest("predicate",Z,j)&&(t("2"),e.UserInput.clearMenu())):(t("3"),e.UserInput.fillInRequest("object",Z,j)&&(t("4"),e.UserInput.clearMenu()))};break}default:throw new Error("userinput: unexpected mode")}_.addEventListener("click",S,!1);let A={};z.each(void 0,o.rdf("type"),o.owl("Ontology")).forEach(function(M){let Z=N.label(M);if(!Z)return;let ne=Z.value.match(/\((.+?)\)/);ne?A[ne[1]]=M.uri:A[Z.value]=M.uri});function O(M){_.firstChild&&_.firstChild.className==="no-suggest"&&_.removeChild(_.firstChild);let Z=N.predicateLabelForXML(M,!1);if(!M.uri)return;let ne="??";for(let R in A)if(ue.debug(A[R]),He.string_startswith(M.uri,A[R])){ne=R;break}let G=_.appendChild(n.createElement("tr"));G.setAttribute("about",M),G.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(Z)),G.appendChild(n.createElement("td")).appendChild(n.createTextNode(ne.toUpperCase()))}function q(M){return function(Z){let ne=Z[M.vars[0]];O(ne)}}function F(M){h.clearMenu(),M.stopPropagation()}let E,X,J,oe,ce,H;switch(d){case"DidYouMeanDialog":{let M=m.dialogTerm;X=m.bnodeTerm,b.style.width="auto";let ne=_.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));ne.appendChild(n.createTextNode("Did you mean..."));let G=z.statementsMatching(M),j;for(j=0;j<G.length&&!z.whether(G[j].predicate,r("type"),o.owl("InverseFunctionalProperty"));j++);let R=G[j].predicate,W=z.any(M,G[j].predicate),$=N.label(M)+" who has "+N.label(R)+" "+W+"?",le=_.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));le.appendChild(n.createTextNode($)),ne.setAttribute("colspan","2"),le.setAttribute("colspan","2");let D=_.appendChild(n.createElement("tr"));D.appendChild(n.createElement("th")).appendChild(n.createTextNode("Yes")),D.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));let K=_.appendChild(n.createElement("tr"));K.appendChild(n.createElement("th")).appendChild(n.createTextNode("No")),K.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));break}case"PredicateAutoComplete":{E=m.inputText;let M=e.labeller.searchAdv(E,void 0,"predicate"),Z=[];for(let G=0;G<M.length;G++){let j={};j.vars=[],j.vars.push("Kenny");let R={};R.Kenny=z.fromNT(M[G].NT);try{q(j)(R)}catch(W){throw new Error("I'll deal with bnodes later...[Kenny]"+W)}}let ne=Z[0];if(ne.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let G=0;G<ne.length&&G<10;G++)O(ne[G][1]);break}case"GeneralAutoComplete":{E=m.inputText;let M;try{M=e.labeller.search(E)}catch(G){console.log("GeneralAutoComplete: debug me "+m.selectedTd.textContent+`
`+G+`
`)}let Z=M[0],ne=M[1];if(Z.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let G=0;G<Z.length&&G<10;G++){let j=Z[G][1].toNT();ce=_.appendChild(n.createElement("tr")),ce.setAttribute("about",j),H=ce.appendChild(n.createElement("th")),H.appendChild(n.createElement("div")).appendChild(n.createTextNode(Z[G][0]));let R=ne[G],W=R?N.label(R):"";ce.appendChild(n.createElement("td")).appendChild(n.createTextNode(W))}break}case"JournalTitleAutoComplete":{E=m.inputText,console.log("testing searching text= "+E+` =====
`),console.log(`
===start JournalTitleAutoComplete
`);let M=z.each(void 0,r("type"),i("Journal")),Z=[];for(let ne=0;ne<M.length;ne++){let G=M[ne],j=z.each(G,a("title"),void 0),R=j+"",W=E.toLowerCase();if(R.toLowerCase().search(W)!==-1){t("FOUND A Journal Title Match!!!!!!"),Z.push(j);let Q=_.appendChild(n.createElement("tr"));Q.setAttribute("about","journalTitle"),Q.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(j)),Q.appendChild(n.createElement("td")).appendChild(n.createTextNode(G))}}console.log("matched: "+Z+`
`),console.log(`\\\\done showMenu's JTAutocomplete
`);break}case"LimitedPredicateChoice":{let M=N.getAbout(z,m.clickedTd);M.termType="Collection";let Z=z.each(M,o.link("element"));for(let ne=0;ne<Z.length;ne++)O(Z[ne]);break}default:{ce=_.appendChild(n.createElement("tr")),ce.className="no-suggest",H=ce.appendChild(n.createElement("th")),H.appendChild(n.createElement("div")).appendChild(n.createTextNode("No suggested choices. Try to type instead.")),ce.appendChild(n.createElement("td")).appendChild(n.createTextNode("OK")),ce.addEventListener("click",F,"false");let M=function(){};switch(u.constructor.name){case"Array":for(let Z=0;Z<u.length;Z++)z.query(u[Z],q(u[Z]),M);break;case"undefined":throw new Error("addPredicateChoice: query is not defined");default:z.query(u,q(u),M)}}}},fillInRequest:function(c,d,u){let m=d.parentNode,g=m.AJAR_statement,h=m.AJAR_inverse,b=c==="object"?g.object:g.predicate,w,_=!1,I;if(z.any(b,o.link("onfillin")),c==="predicate"){let S=e.outlinePredicateTD(u,m,!1,!1);if(d.nextSibling.className!=="undetermined"){let A=new Qe(g.subject,u,g.object,g.why);try{z.updater.update([],[A],function(O,q,F){q?(w=z.anyStatementMatching(g.subject,u,g.object,g.why),m.AJAR_statement=w,S.className=S.className.replace(/ pendingedit/g,"")):ue.warn("Failure occurs (#2) while inserting "+m.AJAR_statement+`

`+F)})}catch(O){ue.error(O),ue.warn("Error when insert (#2) of statement "+A+`:
	`+O);return}S.className+=" pendingedit",this.lastModified=null}else this.formUndetStat(m,g.subject,u,g.object,g.why,!1),e.walk("right"),_=!0;e.replaceTD(S,d),Sn.remove(g)}else if(c==="object"){let S=e.outlineObjectTD(u);if(e.replaceTD(S,d),!d.previousSibling||d.previousSibling.className!=="undetermined"){let A;h?A=new Qe(u,g.predicate,g.object,g.why):A=new Qe(g.subject,g.predicate,u,g.why);try{z.updater.update([],[A],function(O,q,F){ue.info("@@ usinput.js (object) callback ok="+q+" for statement:"+A+`
 `);let E;q?(S.className=S.className.replace(/ pendingedit/g,""),h?E=z.statementsMatching(u,g.predicate,g.object,g.why):E=z.statementsMatching(g.subject,g.predicate,u,g.why),E.length||ue.error("userinput.js 1711: Can't find statememt!"),m.AJAR_statement=E[0]):ue.warn("userinput.js (object): Fail trying to insert statement "+A)})}catch(O){ue.error("userinput.js (object): exception trying to insert statement "+A+": "+N.stackString(O)),ue.warn("Error trying to insert statement "+A+`:
`+O);return}this.lastModified=null,S.className+=" pendingedit"}else e.walk("left"),_=!0;Sn.remove(g)}if(Qn.statements.push(w),I&&I(g.subject),_)this.startFillInText(e.getSelection()[0]);else return!0},formUndetStat:function(c,d,u,m,g,h){return c.AJAR_inverse=h,c.AJAR_statement=Sn.add(d,u,m,g),c.AJAR_statement}}}function qi(){this.queries=[],this.listeners=[],this.addQuery=function(e){let n;for((e.name===null||e.name==="")&&(e.name="Query #"+(this.queries.length+1)),e.id=this.queries.length,this.queries.push(e),n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].addQuery(e)},this.removeQuery=function(e){let n;for(n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].removeQuery(e);this.queries[e.id]!==null&&delete this.queries[e.id]},this.addListener=function(e){let n;for(this.listeners.push(e),n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.addQuery(this.queries[n])},this.removeListener=function(e){let n;for(n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.removeQuery(this.queries[n]);for(n=0;n<this.listeners.length;n++)this.listeners[n]===e&&delete this.listeners[n]}}var zi="profile/card#me";function $i(e){let n=_e.currentUser();return!!(n&&(n.sameTerm(e)||n.doc().sameTerm(e)))}async function xn(e){try{let n=e.site().uri,t=we(`${n}${zi}`);try{return await z.fetcher.load(t),t}catch{}try{let i=new URL(e.uri),a=i.pathname.split("/").filter(Boolean);if(a.length>0){let s=`${i.origin}/${a[0]}/`,l=we(`${s}${zi}`);return await z.fetcher.load(l),l}}catch{}try{await z.fetcher.load(e)}catch{return e}let r=z.any(e,o.foaf("primaryTopic"),null,e.doc());if(r&&r.termType==="NamedNode")try{return await z.fetcher.load(r),r}catch{return e}return e}catch{return e}}function sn(e){try{return new URL(e.uri).hash==="#me"}catch{return!1}}function Hi(e,n){return e.anyValue(n,o.vcard("fn"),null,n.doc())||e.anyValue(n,o.foaf("name"),null,n.doc())||new URL(n.uri).host.split(".")[0]}async function Et(e){if(sn(e)){try{await z.fetcher.load(e.doc())}catch(t){console.warn("Unable to load profile document for WebID",e.doc().uri,t)}return z.each(e,o.space("storage")).filter(t=>t.termType==="NamedNode")}try{let n=await ps(e);return n?[n]:[]}catch(n){return console.error("cannot load container",n),[]}}async function ps(e){let n=new URL(e.value||e.uri),t=n.pathname;for(;t.length;){t=t.substring(0,t.lastIndexOf("/"));let r=z.sym(`${n.origin}${t}/`);if(await ms(r))return r}return null}async function ms(e){return await dr(e),z.holds(e,o.rdf("type"),o.space("Storage"),e.doc())}async function dr(e){if(!z.any(e,o.ldp("contains"),void 0,e.doc()))try{let t=(await z.fetcher.webOperation("GET",e.uri,z.fetcher.initFetchOptions(e.uri,{headers:{accept:"text/turtle"}}))).responseText;e.uri&&t&&Xe(t,z,e.uri,"text/turtle")}catch(n){console.warn("Unable to load container representation for",e.uri,n)}}var fs={profile:"profile",social:"friends",folder:"storage"};function cr(e){return e!==null&&typeof e=="object"?e:{}}function hs(e,n){return e?{kind:fs[e]??"pane",pane:e,...n?{subject:n}:{}}:{kind:"default"}}function ur(e){let{paneName:n,paneUri:t,viaAccountMenu:r}=cr(e);return{view:hs(typeof n=="string"&&n?n:void 0,typeof t=="string"&&t?t:void 0),viaAccountMenu:r===!0}}function Cn(){return ur(window.history.state)}var $n=new WeakMap;function Vi(e){return($n.get(e)??0)>0}function et(e,n,t,r,i){$n.set(e,($n.get(e)??0)+1);try{e[n](t,r,i)}finally{let a=($n.get(e)??1)-1;a?$n.set(e,a):$n.delete(e)}}function Wi(e,n){let t={...cr(e)};return n.pane&&(t.paneName=n.pane.name,typeof n.pane.subject=="string"&&(t.paneUri=n.pane.subject)),n.leavingPage&&!n.pane&&delete t.paneName,(n.leavingPage&&!n.pane||n.pane&&!n.pane.subject)&&delete t.paneUri,n.viaAccountMenu?t.viaAccountMenu=!0:delete t.viaAccountMenu,t}function gs(e){let{paneName:n,paneUri:t,viaAccountMenu:r,...i}=cr(e);return i}function Tt(){et(window.history,"replaceState",gs(window.history.state),"",window.location.href)}var bs=["profile","social"];function pr(e){return e!==void 0&&bs.includes(e)}function Gi(e){return pr(e)}function ji(e){let{view:n,viaAccountMenu:t,viewer:r,pageUrl:i,owner:a,storageUris:s}=e,l=n.pane,f=l==="profile"||l==="social"?a!==void 0:l==="folder"&&s.some(c=>!n.subject||c===n.subject),p=f||!t?a:void 0;return pr(l)?{mode:l==="profile"?"full":"compact",subjectUri:n.subject||(f?a:void 0)||i,paneName:l}:!p||p===r?{mode:"none"}:{mode:"compact",subjectUri:p,paneName:l}}function mr(e,n){return{paneName:e.pane??(n?"profile":void 0),paneUri:e.subject}}function nt(e,n,t){return!n.paneName||e.paneName!==n.paneName?!1:e.paneName==="folder"?n.paneUri?n.paneUri===e.paneUri:t===1:!0}function Ji(e,n,t){let r=e.filter(i=>i.paneName===n);return r.find(i=>i.paneUri===t)??r[0]}function Ki(e){return e.viaAccountMenu||e.ownProfile||e.inViewerPod}function Yi(e){return e.viaAccountMenu||e.inViewerPod||!e.hasOwner?"explorer":"storage"}function Xi(e){return e.isRootResource||e.isWebId?!1:!e.viewerPodOnly||e.inViewerPod}function Qi(e,n,t,r=!1){return n==="folder"||n==="basicPreferences"||n==="home"||n==="dashboard"?!1:e&&!pr(n)}var ws=new URL("panes/solid-panes/src/icons/folder.svg",Tn).href,ys=new URL("panes/solid-panes/src/icons/person.svg",Tn).href,vs=new URL("panes/solid-panes/src/icons/friends.svg",Tn).href,xs=ws,Zi=ys,Cs=vs;function fr(e,n,t,r,i,a){return{name:e.name,paneName:t,tabName:a,label:function(){return r},render:function(s,l,f){return e.render(n,l,t==="folder"?{...f,solo:!1,fullView:!1}:f)},shouldGetFocus:function(){return!1},requireQueryButton:!!e.requireQueryButton,subject:n,icon:i}}async function ea(e,n,t="Pane",r="",i=Ve){let a=new URL(window.location.href),s=n||we(a.toString()),l=await xn(s);if(!l||!l.value)return null;let f=i(e);return f?fr(f,l,e,t,r):null}async function At(e,n=Ve){if(e&&sn(e)){let t=n("profile");return t?fr(t,e,"profile","Profile",Zi):null}return ea("profile",e,"Profile",Zi,n)}async function hr(e,n=Ve){return ea("social",e,"Social",Cs,n)}async function Pt(e,n){let t=Ve("folder");return t?fr(t,e,t.name,n||"Storage",xs):null}async function St(e){let n=await Et(e);return n.length===0?[]:Promise.all(n.map((t,r)=>Pt(t,n.length>1?`Storage ${r+1}`:"Storage"))).then(t=>t.filter(r=>r!==null))}var _s=500,na=new Map,ta=new Map,ra=new Map;function ks(e){try{let n=new URL(e),[t=""]=n.pathname.split("/").filter(Boolean);return`${n.origin}|${t}`}catch{return e}}function Is(e){return we(e).doc().uri}function gr(e,n,t,r,i){let a=e.get(n);if(a)return a;let s=r().catch(l=>(console.warn(`Could not load the ${t} for ${n}`,l),e.get(n)===s&&e.delete(n),i));return e.set(n,s),e.size>_s&&e.delete(e.keys().next().value),s}function Es(e){return gr(na,Is(e),"owner of the pod",async()=>{let n=we(e),t=await xn(n);return t.uri===n.uri&&!sn(n)?void 0:t.value},void 0)}function Ts(e,n){let t=n?we(n):we(e);return gr(ta,ks(e),"storages of the pod",()=>St(t),[])}function As(e){return e?gr(ra,e,"storages of the viewer",async()=>(await Et(we(e))).map(n=>n.uri),[]):Promise.resolve([])}async function _n(e=window.location.href){let n=_e.currentUser()?.value,[t,r]=await Promise.all([Es(e),As(n)]),i=await Ts(e,t);return{viewer:n,owner:t,storagePanes:i,viewerStorages:r}}function ia(){na.clear(),ta.clear(),ra.clear()}function aa(e,n){return e.owner===n.owner&&e.viewer===n.viewer&&e.storagePanes.map(t=>t.subject.value).join()===n.storagePanes.map(t=>t.subject.value).join()}function br(e,n){return e.viewerStorages.some(t=>n.startsWith(t))}async function Ut(e){return br(await _n(e),e)}var wr="solid-panes:navigated";function oa(e){let n={url:e.location.href,state:ur(e.defaultView?.history.state)};e.dispatchEvent(new CustomEvent(wr,{detail:n}))}function Nt(e,n=document){let t=r=>e(r.detail);return n.addEventListener(wr,t),()=>n.removeEventListener(wr,t)}function sa(e){return typeof e=="object"&&e!==null?e.folderView:void 0}function la(e){return typeof e=="object"&&e!==null?e.source??"default":e===void 0||e?"default":"accountMenu"}var Ps="navbar--hidden",yr=0;function Lt(e){++yr,document.querySelector("solid-panes-navbar")?.classList.toggle(Ps,e)}async function tt(e,n=!1){let t=++yr,r=$i(we(e));if(n||r){Lt(!0);return}let i=await Ut(e);t===yr&&Lt(Ki({viaAccountMenu:n,ownProfile:r,inViewerPod:i}))}function da({dom:e,UI:n,kb:t,outlineIcons:r,expandMouseDownListener:i,selectableTDClickListener:a,setSelected:s,viewAsBoringDefault:l,removeNodeIconMouseDownListener:f}){function p(m,g,h){let b=N.AJARImage(r.src.icon_remove_node,"remove",void 0,e);return b.addEventListener("click",f),b.node=h,b.setAttribute("about",g.toNT()),b.style.marginLeft="5px",b.style.marginRight="10px",m.appendChild(b),b}let c={};globalThis.termWidget=c,c.construct=function(m){m=m||document;let g=m.createElement("div");return g.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),g.setAttribute("class","iconTD"),g.setAttribute("notSelectable","true"),g.style.width="0px",g},c.addIcon=function(m,g,h){let b=m.childNodes[1];if(!b)return;let w=N.AJARImage(g.src,g.alt,g.tooltip,e),_=Number.parseInt(b.style.width||"0",10)+g.width;b.style.width=_+"px",b.appendChild(w),h&&w.addEventListener("click",h)},c.removeIcon=function(m,g){let h=m.childNodes[1],b;if(!h)return;let w=Number.parseInt(h.style.width||"0",10)-g.width;h.style.width=w+"px";for(let _=0;_<h.childNodes.length;_++){let I=h.childNodes[_],S=I.src;try{b=e.location.href.split("?")[0]}catch{b=""}let A=rn.join(g.src,b);S===A&&h.removeChild(I)}},c.replaceIcon=function(m,g,h,b){c.removeIcon(m,g),c.addIcon(m,h,b)};function d(m,g,h,b){let w=e.createElement("div");if(w.classList.add("obj"),w.setAttribute("notSelectable","false"),w.setAttribute("role","gridcell"),w.setAttribute("tabindex","0"),w.setAttribute("data-outline-node","object"),!m)return w.textContent="No object available.",w;let _="obj";return(m.termType==="NamedNode"||m.termType==="BlankNode"||m.termType==="Literal"&&m.value.slice&&(m.value.slice(0,6)==="ftp://"||m.value.slice(0,8)==="https://"||m.value.slice(0,7)==="http://"))&&(w.setAttribute("about",m.toNT()),w.appendChild(n.utils.AJARImage(n.icons.originalIconBase+"tbl-expand-trans.png","expand",void 0,e)).addEventListener("click",i)),w.setAttribute("class",_),t.whether(m,n.ns.rdf("type"),n.ns.link("Request"))&&(w.className="undetermined"),g||(g=l),w.appendChild(g(m)),h&&p(w,m,h),w.tabulatorSelect=function(){s(this,!0)},w.tabulatorDeselect=function(){s(this,!1)},w.addEventListener("click",a),w}function u(m,g,h,b){let w=e.createElement("div");w.setAttribute("about",m.toNT()),w.setAttribute("class",b?"pred internal":"pred"),w.setAttribute("role","gridcell"),w.setAttribute("data-outline-node","predicate");let _;switch(m.termType){case"BlankNode":w.className="undetermined";break;case"NamedNode":_=n.utils.predicateLabelForXML(m,h);break;case"Collection":_=n.utils.predicateLabelForXML(m.elements[0],h)}_=_?_.slice(0,1).toUpperCase()+_.slice(1):"...";let I=e.createElement("div");I.classList.add("labelTD"),I.setAttribute("notSelectable","true"),I.appendChild(e.createTextNode(_)),w.appendChild(I),I.style.width="100%",w.appendChild(c.construct(e));for(let S in r.termWidgets){if(!g||!g.AJAR_statement)break;r.termWidgets[S].filter&&r.termWidgets[S].filter(g.AJAR_statement,"pred",h)&&c.addIcon(w,r.termWidgets[S])}return w.tabulatorSelect=function(){s(this,!0)},w.tabulatorDeselect=function(){s(this,!1)},w.addEventListener("click",a),w}return{appendRemoveIcon:p,outlineObjectDiv:d,outlinePredicateDiv:u,termWidget:c}}var Ss=new URL("panes/solid-panes/src/icons/person.svg",Tn).href,Us=new URL("panes/solid-panes/src/icons/friends.svg",Tn).href;function ca(e,n,t){if(e)return typeof e.icon=="function"?e.icon(n,t):e.icon}async function ua(e,n,t,r){return typeof r!="function"?[]:xi({subject:e,context:n,panes:t,iconOverrides:{profile:()=>Ss,social:()=>Us},openPane:(i,a)=>r(i,a)})}Oe(ge(`/* Styles extracted from manager.js */

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
`,"text/css"));var pa=()=>import("./part-7RJFS5B5.js").then(e=>e.default),hn="solid-ui-file-explorer-provider";function Ns(e){e.addEventListener("close",()=>e.remove())}function vr(e){let n=e.dom,t=new WeakMap,r=new WeakMap,i=new WeakSet;this.document=e.dom,this.context=e,this.outlineIcons=ee,this.labeller=this.labeller||{},this.labeller.LanguagePreference="";let a=this,s=this,l=[];this.selection=l,this.ancestor=N.ancestor,this.sparql=yt,this.kb=z;let f=z,p=z.fetcher;n.outline=this,this.qs=new qi,this.UserInput=new Zn(this),this.clipboardAddress="tabulator:clipboard",this.UserInput.clipboardInit(this.clipboardAddress);let{outlineObjectDiv:c,outlinePredicateDiv:d,termWidget:u}=da({dom:n,UI:Be,kb:z,outlineIcons:ee,expandMouseDownListener:j,selectableTDClickListener:K,setSelected:ne,viewAsBoringDefault:Ne,removeNodeIconMouseDownListener:D});this.outlineObjectDiv=c,this.outlinePredicateDiv=d,this.outlineObjectTD=c,this.outlinePredicateTD=d,this.termWidget=u,this.init=function(){let y=h();y.outline=this},this.getLayoutMode=function(){let y=this.context?.environment?.layout;if(y==="mobile"||y==="desktop")return y;if(typeof window<"u"&&window.matchMedia){let v=Math.round(Math.min(window.innerWidth,window.visualViewport?.width||window.innerWidth)),x=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;return v<=768||x&&v<=1024?"mobile":"desktop"}return"desktop"},m.lastkbsize=0;function m(y){let v=[];for(let C=arguments.length-1;C>0;C--)v[C-1]=arguments[C];let x=new Date().getTime(),P=y.apply(y,v),T=new Date().getTime();return ue.info("BENCHMARK: kb delta: "+(f.statements.length-m.lastkbsize)+", time elapsed for "+y+" was "+(T-x)+"ms"),m.lastkbsize=f.statements.length,P}function g(y,v,x){let P=N.AJARImage(ee.src.icon_remove_node,"remove",void 0,n);return P.addEventListener("click",D),P.node=x,P.setAttribute("about",v.toNT()),P.style.marginLeft="5px",P.style.marginRight="10px",y.appendChild(P),P}this.appendAccessIcons=function(y,v,x){if(x.termType!=="NamedNode")return;let P=y.uris(x);P.sort();let T=null;for(let C=0;C<P.length;C++)P[C]!==T&&(T=P[C],s.appendAccessIcon(v,T))},this.appendAccessIcon=function(y,v){if(!v)return"";let x=rn.docpart(v);if(x.slice(0,5)!=="http:")return"";let P=p.getState(x),T,C,k;switch(P){case"unrequested":T=ee.src.icon_unrequested,C="fetch",k=le;break;case"requested":T=ee.src.icon_requested,C="fetching",k=$;break;case"fetched":T=ee.src.icon_fetched,k=Q,C="loaded";break;case"failed":T=ee.src.icon_failed,C="failed",k=$;break;case"unpermitted":T=ee.src.icon_failed,k=$,C="no perm";break;case"unfetchable":T=ee.src.icon_failed,k=$,C="cannot fetch";break;default:ue.error("?? state = "+P);break}let se=N.AJARImage(T,C,ee.tooltips[T].replace(/[Tt]his resource/,x),n);return se.classList.add("objectValueAccessIcon"),se.setAttribute("uri",v),se.addEventListener("click",k),oe(se,x),y.appendChild(se),se};function h(){return w("OutlineView","Resource browser")}function b(y){tt(y.uri).catch(v=>ue.error("Failed to update navbar visibility: "+v))}function w(y){if(y==="OutlineView"){let v=document.getElementById("OutlineView");if(v)return v;let x=document.getElementById("MainContent")||document.body;if(x){let P=document.createElement("div");return P.id="OutlineView",P.classList.add("outline-view"),P.setAttribute("aria-label","Resource browser"),x.appendChild(P),P}}}async function _(y,v){return y.uri.endsWith("/")&&await dr(y),wi(y,v,{excludedPaneNames:["sharing"],fallbackPaneName:"internal"})}function I(y){let v=n.getElementById("queryButton");v&&(y?v.removeAttribute("style"):v.setAttribute("style","display:none;"))}function S(y,v,x,P){if(!y||!x)return;let T;try{ue.info("outline: Rendering pane (menu): "+x.name),T=x.render(v,e,P)}catch(C){T=n.createElement("div"),T.setAttribute("class","exceptionPane");let k=n.createElement("pre");T.appendChild(k),k.appendChild(n.createTextNode(N.stackString(C)))}O(y,v,x,T),r.set(y,{pane:x,subjectUri:v.uri})}function A(y,v,x){if(!x){ue.warn("outline: Unable to open pane in place: pane is undefined.");return}I(!!x.requireQueryButton),y.pane=x,S(y,v,x,t.get(y)?.options||{})}this.refreshActiveExplorerPanes=function(){let y=Array.from(n.querySelectorAll(hn));for(let v of y){let x=v.subjectUri,P=v.pane;if(!x||!P)continue;let T=v.querySelector(":scope > .paneDiv");if(!T||T.matches('[data-preserve-pane-on-resize="true"]')||T.querySelector('[data-preserve-pane-on-resize="true"]')||T.querySelector(":scope > folder-pane-view"))continue;let C;try{C=P.render(we(x),e,v.paneRenderOptions||t.get(v)?.options||{})}catch(k){ue.error("outline: Failed to refresh pane layout: "+N.stackString(k));continue}C.classList.add("paneDiv"),T.replaceWith(C),r.set(v,{pane:P,subjectUri:x})}};function O(y,v,x,P){let T=t.get(y);vi(y,{context:e,subjectUri:v.uri,pane:x,relevantPanes:y.relevantPanes||[],header:T&&Qi(T.showHeader,x?.name,T.options.folderView,T.options.solo)?{paneIcon:ca(x,v,e),menuItems:T.menuItems,showBack:!T.options.solo}:void 0,paneElement:P})}async function q(y,v,x,P){x=x||{},P=P||n.createElement(hn);let C={generation:(t.get(P)?.generation||0)+1,menuItems:[],options:x};t.set(P,C),P.classList.add("paneView","tdFlex"),P.setAttribute("notSelectable","true"),P.setAttribute("role","grid"),P.setAttribute("about",y.toNT()),x.hover&&P.classList.add("hoverControl"),P.context=e,P.subjectUri=y.uri,P.soloPane=x.solo,i.has(P)||(P.addEventListener(gi,fe=>{rr(fe,P)&&(fe.stopPropagation(),R({target:P}))}),P.addEventListener(bi,fe=>{fe.stopPropagation();let ye=we(fe.detail.subjectUri).doc();je.acl.findAccessGrants(ye).then(async Ce=>{let Ee=await pa();er(Ee,{props:{subjectUri:ye.uri,accessGrants:Ce}})}).catch(Ce=>{ue.error("outline: Failed to open access controls: "+N.stackString(Ce))})}),P.addEventListener(tr,fe=>{if(!rr(fe,P))return;fe.stopPropagation();let ye=e.session.paneRegistry.byName(fe.detail.paneName);A(P,we(fe.detail.subjectUri),ye)}),i.add(P));let k=x.hideList?[]:await _(y,e);if(t.get(P)!==C)return P;let se=e.session.logic?.resource||je.resource,U=y.uri.endsWith("/")?we(`${y.uri}index.ttl`):null;if(x.solo&&!v&&!x.folderView&&U&&(typeof se?.containerHasIndexDocument=="function"&&se.containerHasIndexDocument(y)||f.holds(y,o.ldp("contains"),U,y.doc()))){if(y=typeof se?.getContainerIndexThing=="function"?se.getContainerIndexThing(y):we(`${U.uri}#this`),await f.fetcher.load(y.doc()),k=await _(y,e),t.get(P)!==C)return P;P.subjectUri=y.uri,P.setAttribute("about",y.toNT())}P.relevantPanes=k,P.pane=v||yi(y,e,k);let te=!!(y&&y.uri&&y.site&&y.site().uri===y.uri),Y=!!x.headerOnlyInViewerPod,ie=!y.uri.endsWith("/index.ttl#this")&&Xi({isRootResource:te,isWebId:sn(y),viewerPodOnly:Y,inViewerPod:Y?await Ut(n.location.href):!0});if(t.get(P)!==C)return P;C.showHeader=ie,P.paneRenderOptions=x,P.soloPane=x.solo,P.openPane=(fe,ye)=>A(P,fe,Ve(ye)),P.handleAccessClick=async()=>{try{let fe=y.doc(),ye=await je.acl.findAccessGrants(fe),Ce=await pa();er(Ce,{props:{subjectUri:fe.uri,accessGrants:ye}})}catch(fe){ue.error("outline: Failed to open access controls: "+N.stackString(fe))}};let me=r.get(P);if(P.pane?.managesUpdates===!0&&me?.pane===P.pane&&me.subjectUri===y.uri&&!x.refresh&&!!P.querySelector(":scope > .paneDiv")?O(P,y,P.pane):P.pane?S(P,y,P.pane,x):O(P,y,P.pane),ie){let fe=await ua(y,e,k,(ye,Ce)=>{P.dispatchEvent(new CustomEvent(tr,{bubbles:!0,composed:!0,detail:{subjectUri:ye.uri,paneName:Ce}}))});t.get(P)===C&&(C.menuItems=fe,O(P,y,P.pane))}return P}function F(y){let v=y.parentNode,x=v.parentNode,P=n.createElement("div");x.replaceChild(P,v),v.removeChild(y),x.replaceChild(v,P)}let E=this.propertyTable=function(v,x,P,T){ue.debug("Property block for: "+v),v=f.canon(v);let C=x?x.matches?.(hn)?x:x.firstElementChild||x:n.createElement(hn);return q(v,P,T,C).catch(k=>{ue.error("outline: Failed to set up file explorer: "+N.stackString(k))}),x&&ue.info("Re-expand: "+x),x||C};function X(y,v,x){let P=y.createElement("div");P.AJAR_statement=v,P.AJAR_inverse=x,P.setAttribute("predTR","true"),P.setAttribute("role","row");let T=s.outlinePredicateDiv(v.predicate,P,x);return P.appendChild(T),P}this.propertyTR=X;function J(y,v,x,P){if(ue.debug("Property list length = "+v.length),v.length===0)return"";let T,C,k;x?(T=function(U){return U.subject},v=v.sort(N.RDFComparePredicateSubject)):(T=function(U){return U.object},v=v.sort(N.RDFComparePredicateObject));let se=v.length;for(C=0;C<se;C++){let U=v[C];if(P&&!P(U.predicate,x))continue;let L=X(n,U,x);y.appendChild(L);let te=L.firstChild,Y=ve.defaults[U.predicate.uri],ie=0,me=0,be=0;for(k=0;k+C<se&&v[C+k].predicate.sameTerm(U.predicate);k++)k>0&&T(v[C+k]).sameTerm(T(v[C+k-1]))&&ie++,T(v[C+k]).lang&&a.labeller.LanguagePreference&&(me+=1,T(v[C+k]).lang.indexOf(a.labeller.LanguagePreference)>=0&&be++);if(be>0&&me===ie+1){for(let fe=C;fe<=C+ie;fe++)if(a.labeller.LanguagePreference&&T(v[fe]).lang.indexOf(a.labeller.LanguagePreference)>=0){L.appendChild(s.outlineObjectDiv(T(v[fe]),Y,void 0,U));break}C+=ie;continue}L.appendChild(s.outlineObjectDiv(T(U),Y,void 0,U)),L.showNobj=function(fe){let ye=k-ie,Ce=2*fe<ye?fe:ye,Ee=[];if(ye!==1){te.setAttribute("rowspan",Ce===ye?ye:fe+1);let Ae;Ce<ye&&Ce===1&&te.setAttribute("rowspan",2);let Ie=0;for(Ae=1;Ae<k;Ae++)if(f.canon(T(v[C+Ae])).sameTerm(f.canon(T(v[C+Ae-1]))))ue.info("there are duplicates here: %s",v[C+Ae-1]);else{Ie++,U=v[C+Ae],Y=ve.defaults[U.predicate.uri];let ke=n.createElement("div");ke.style.colspan="1",ke.appendChild(s.outlineObjectDiv(T(v[C+Ae]),Y,void 0,U)),ke.AJAR_statement=U,ke.AJAR_inverse=x,y.appendChild(ke),Ie>=Ce&&(ke.style.display="none",Ee.push(ke))}Ce===ye&&te.setAttribute("rowspan",Ie+1)}if(Ce<ye){let Ae=n.createElement("div"),Ie=Ae.appendChild(n.createElement("div"));if(Ie.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),Ie.classList.add("obj"),Ie.setAttribute("notSelectable","false"),ye>fe){let ke=n.createElement("a");Ie.appendChild(ke);let qe=(function(un){return un(te,k,ie,fe)})(function(un,Yn,ri,ii){return function(ai){ke.innerHTML="",ai==="none"?(ke.appendChild(N.AJARImage(B.originalIconBase+"tbl-more-trans.png","more","See all",n)),ke.appendChild(n.createTextNode(ye-ii+" more...")),un.setAttribute("rowspan",ii+1)):(ke.appendChild(N.AJARImage(B.originalIconBase+"tbl-shrink.png","(less)",void 0,n)),un.setAttribute("rowspan",ye+1));for(let Yt=0;Yt<Ee.length;Yt++){let ds=Ee[Yt];ds.style.display=ai}}}),ze="none",dn=function(un){return qe(ze),ze=ze==="none"?"":"none",un&&un.stopPropagation(),!1};dn(),ke.addEventListener("click",dn,!1)}y.appendChild(Ae)}},L.showAllobj=function(){L.showNobj(k-ie)},L.showNobj(10),C+=k-1}}this.appendPropertyTRs=J;function oe(y,v){ue.debug("Button callbacks for "+v+" added");let x=function(P){return function(C){return C.indexOf("#")>=0,!y||!a.ancestor(y,"DIV")?!1:(C===v&&(y.src=P,y.title=ee.tooltips[P]),!0)}};p.addCallback("request",x(ee.src.icon_requested)),p.addCallback("done",x(ee.src.icon_fetched)),p.addCallback("fail",x(ee.src.icon_failed))}function ce(y){let v=y.getAttribute("class");return!!(v&&v.indexOf("selected")>=0)}function H(y){let x=s.targetOf(y).parentNode;u.replaceIcon(x.parentNode,ee.termWidgets.optOn,ee.termWidgets.optOff,M),x.parentNode.parentNode.removeAttribute("optional")}function M(y){let x=s.targetOf(y).parentNode;u.replaceIcon(x.parentNode,ee.termWidgets.optOff,ee.termWidgets.optOn,H),x.parentNode.parentNode.setAttribute("optional","true")}function Z(y,v){let x=ee.termWidgets.optOn,P=ee.termWidgets.optOff,T=C=>!!(C&&typeof C.getAttribute=="function"&&(C.getAttribute("predTR")==="true"||C.getAttribute("data-outline-node")==="predicate"));for(let C=y;C.parentNode;C=C.parentNode)for(;;)if(T(C)){let k=C.getAttribute("parentOfSelected");k?k=parseInt(k):k=0,k===0&&v>0&&u.addIcon(C.childNodes[0],C.getAttribute("optional")?x:P,C.getAttribute("optional")?H:M),k=k+v,C.setAttribute("parentOfSelected",k),k===0&&(C.removeAttribute("parentOfSelected"),u.removeIcon(C.childNodes[0],C.getAttribute("optional")?x:P));break}else if(C.previousElementSibling)C=C.previousElementSibling;else break}this.statusBarClick=function(y){let v=N.getTarget(y);v.label&&(window.content.location=v.label)},this.showURI=function(v){v&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=v.termType==="NamedNode"?v.uri:"")},this.showSource=function(){if(!(typeof sourceWidget>"u")){for(let v in sourceWidget.sources)sourceWidget.sources[v].setAttribute("class","");for(let v=0;v<l.length;v++){if(!l[v].parentNode)continue;let x=l[v].parentNode.AJAR_statement;if(!x)continue;let P=x.why;P&&P.uri&&sourceWidget.highlight(P,!0)}}},this.getSelection=function(){return l};function ne(y,v){if(y.nodeName!=="TD"&&y.nodeName!=="DIV")throw ue.debug("down"+y.nodeName),new Error("Expected TD or DIV in setSelected: "+y.nodeName+" : "+y.textContent);ue.debug("pass");let x=y.getAttribute("class");if(x||(x=""),v){x+=" selected",(x.indexOf("pred")>=0||x.indexOf("obj")>=0)&&Z(y,1),l.push(y);let P=N.getTerm(y);s.showURI(P);let T=y.AJAR_statement;if(typeof T>"u"&&y.parentNode&&(T=y.parentNode.AJAR_statement),T){let C=T.why,k=z.updater.editable(C.uri,f);k&&x.indexOf("pred")>=0&&u.addIcon(y,ee.termWidgets.addTri)}}else ue.debug("cla=$"+x+"$"),x==="selected"&&(x=""),x=x.replace(" selected",""),(x.indexOf("pred")>=0||x.indexOf("obj")>=0)&&Z(y,-1),x.indexOf("pred")>=0&&u.removeIcon(y,ee.termWidgets.addTri),l=l.filter(function(P){return P===y}),ue.info("Deselecting "+y.textContent);typeof sourceWidget<"u"&&s.showSource(),y.setAttribute("class",x)}function G(){let y=l.length;for(let v=y-1;v>=0;v--)ne(l[v],!1);l=[]}this.targetOf=function(y){let v;if(y||(y=window.event),y.target)v=y.target;else if(y.srcElement)v=y.srcElement;else return ue.error("can't get target for event "+y),!1;return v.nodeType===3&&(v=v.parentNode),v},this.walk=function(v,x){let P=x||l[0],T;switch(v){case"down":try{T=P.parentNode.nextSibling.lastChild}catch{this.walk("up");return}G(),ne(T,!0);break;case"up":try{T=P.parentNode.previousSibling.lastChild}catch{return}G(),ne(T,!0);break;case"right":{let C=P.matches?.(hn)?P:P.querySelector?.(hn),k=C?.querySelector?.('[data-outline-node="object"]');if(C){k&&(G(),ne(k,!0));return}}if(G(),P.nextSibling||P.lastChild.tagName==="strong")ne(P.nextSibling,!0);else{let C=P.parentNode&&P.parentNode.nextSibling,k=C?C.lastChild:null;if(!k){ne(P,!0);return}ne(k,!0)}break;case"left":if(G(),P.previousSibling&&P.previousSibling.className==="undetermined")return ne(P.previousSibling,!0),!0;{let C=W(P);ne(C?.block||P.parentNode&&P.parentNode.firstChild,!0)}break;case"moveTo":G(),ne(x,!0);break}(v==="down"||v==="up")&&(T.tabulatorSelect||this.walk(v))},this.OutlinerKeypressPanel=function(v){ue.info("Key "+v.keyCode+" pressed");function x(U){U&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=U.termType==="NamedNode"?U.uri:"")}function P(U){return arguments[3]||(se("right",k),x(N.getAbout(f,l[0]))),!0}let T,C;if(N.getTarget(v).tagName==="TEXTAREA"||N.getTarget(v).id==="UserURI"||l.length>1)return;if(l.length===0){(v.keyCode===13||v.keyCode===38||v.keyCode===40||v.keyCode===37||v.keyCode===39)&&(this.walk("right",s.focusTd),x(N.getAbout(f,l[0])));return}let k=l[0];switch(p.removeCallback("done","setSelectedAfterward"),p.removeCallback("fail","setSelectedAfterward"),v.keyCode){case 13:if(N.getTarget(v).tagName==="HTML"){let U=N.getAbout(f,k);T=k.parentNode.AJAR_statement.why,C=z.updater.editable(T.uri,f),U?a.GotoSubject(U,!0):C&&s.UserInput.Enter(k)}else this.UserInput.Keypress(v),this.walk("down"),v.stopPropagation();return;case 38:this.walk("up"),v.stopPropagation(),v.preventDefault();break;case 40:this.walk("down"),v.stopPropagation(),v.preventDefault()}if(N.getTarget(v).tagName==="INPUT")return;let se;switch(v.keyCode){case 46:case 8:T=k.parentNode.AJAR_statement.why,C=z.updater.editable(T.uri,f),C&&(v.preventDefault(),this.UserInput.Delete(k));break;case 37:{if(this.walk("left"))return;let U=W(k);if(!U)break;let L=N.getAbout(f,U.provider);L&&pe(U.block,L);break}case 39:{let U=N.getAbout(f,k);if(U){if(se=this.walk,k.nextSibling){this.walk("right");return}k.firstElementChild?.matches(hn)||(p.addCallback("done",P),p.addCallback("fail",P),ae(k,U,{pane:Ve("defaultPane")})),P()}}break;case 38:case 40:break;default:switch(v.charCode){case 99:if(v.ctrlKey){s.UserInput.copyToClipboard(s.clipboardAddress,k);break}break;case 118:case 112:if(v.ctrlKey){s.UserInput.pasteFromClipboard(s.clipboardAddress,k);break}break;default:N.getTarget(v).tagName}}x(N.getAbout(f,l[0]))},this.OutlinerMouseclickPanel=function(y){switch(s.UserInput._tabulatorMode){case 0:V(y);break;case 1:s.UserInput.Click(y);break;default:}};function j(y){let v=s.targetOf(y),x,P;for(let se=v;se&&se!==n;se=se.parentNode)se.matches?.('[data-outline-node="object"]')&&(x=se),se.matches?.(".outline-subject-block")&&(P=se);let T=P||x||v.parentNode,C=N.getAbout(f,v),k=y.altKey?Ve("internal"):void 0;y.shiftKey?he(T,C,k):y.altKey?ae(T,C,{pane:Ve("internal"),immediate:!0}):ae(T,C)}function R(y){let v=s.targetOf(y),x=y.altKey?Ve("internal"):void 0,P=W(v);if(!P)return;let T=N.getAbout(f,P.provider);T&&pe(P.block,T,x)}function W(y){for(let v=y;v&&v!==n;v=v.parentNode){if(v.matches?.('[data-outline-node="object"]')){let x=v.querySelector?.(hn);if(x)return{block:v,provider:x}}if(v.matches?.(hn))return{block:v.closest?.('[data-outline-node="object"]')||v.closest?.(".outline-subject-block")||v,provider:v}}return null}function $(y){let x=s.targetOf(y).getAttribute("uri");y.altKey?p.fetch(rn.docpart(x),{force:!0}):p.refresh(f.sym(rn.docpart(x)))}function Q(y){let x=s.targetOf(y).getAttribute("uri");y.altKey?p.fetch(rn.docpart(x),{force:!0}):p.refresh(f.sym(rn.docpart(x)))}function le(y){let x=s.targetOf(y).getAttribute("uri");p.fetch(rn.docpart(x))}function D(y){let v=s.targetOf(y),x=v.node;x.childNodes.length>1&&(x=v.parentNode),F(x)}function K(y){if(s.UserInput._tabulatorMode)return s.UserInput.Click(y);let v=s.targetOf(y),x;for(x=N.ancestor(v,"td")||N.ancestor(v,"tr")||N.ancestor(v,"div");x&&x.getAttribute("notSelectable")!=="false";x=N.ancestor(x.parentNode,"td")||N.ancestor(x.parentNode,"tr")||N.ancestor(x.parentNode,"div"));if(!x)return;let P=ce(x);if(ue.debug("Was node selected before: "+P),y.altKey)ne(x,!ce(x));else if(y.shiftKey)ne(x,!0);else{if(G(),s.UserInput.clearInputAndSave(y),ne(x,!0),y.detail===2){y.stopPropagation();return}let T;if(x.parentNode&&(T=x.parentNode.AJAR_statement),!T)return;let C=T.why,k=z.updater.editable(C.uri,f);P&&k&&s.UserInput.Click(y,l[0])}ue.debug("Was node selected after: "+ce(x)+", count="+l.length),y.stopPropagation()}function V(y){ue.info("@TabulatorMousedown, dom.location is now "+n.location);let v=s.targetOf(y);if(!v)return;let x=v.tagName;x==="INPUT"||x==="TEXTAREA"||(s.UserInput.clearMenu(),s.UserInput.lastModified&&s.UserInput.lastModified.parentNode.nextSibling&&s.UserInput.backOut(),(!v.src||v.src.slice(v.src.indexOf("/icons/")+1)!==ee.src.icon_show_choices&&v.src.slice(v.src.indexOf("/icons/")+1)!==ee.src.icon_add_triple)&&s.UserInput.clearInputAndSave(y),(!v.src||v.src.slice(v.src.indexOf("/icons/")+1)!==ee.src.icon_show_choices)&&s.UserInput.clearMenu(),y&&y.stopPropagation())}function de(y){n.title=N.label(y),n.location.href.startsWith(y.site().uri)}function ae(y,v,x){x=x||{};let P=x.pane,T=!!x.already,C=x.immediate;ue.info("@outlineExpand, dom is now "+n.location),p.removeCallback("done","expand"),p.removeCallback("fail","expand");let k=f.canon(v),se=!1;function U(){if(se){if(p.getState(k.doc().uri)!=="fetched")return!1;se=!1,T=!1}if(k=f.canon(k),!y||!y.parentNode||!y.parentNode.parentNode)return!1;let Y;ue.info("@@ REPAINTING "),T?Y=E(k,y,P,x):Y=E(k,void 0,P,x),T=!0,Y!==y&&N.emptyNode(y).appendChild(Y),s.focusTd=y,ue.debug("expand: Node for "+k+" expanded");let ie=f.each(k,o.rdfs("seeAlso"));for(let me=0;me<ie.length;me++)me===25&&ue.warn("expand: Warning: many ("+ie.length+") seeAlso links for "+k),p.lookUpThing(ie[me],k)}function L(Y){if(arguments[3])return!0;let ie=f.canon(k);ue.info("@@ expand: relevant subject="+ie+", uri="+Y+", already="+T);let me=f.sym(rn.docpart(Y));if(Y.indexOf("#")>=0)throw new Error("Internal error: hash in "+Y);return function(){if(!ie.uri)return!0;let fe=f.uris(ie);if(!fe)return!1;for(let ye=0;ye<fe.length;ye++)for(let Ce=rn.docpart(fe[ye]);Ce;Ce=f.HTTPRedirects[Ce])if(Y===Ce)return!0;return!!f.anyStatementMatching(ie,void 0,void 0,me)}()?(ue.success("@@ expand OK: relevant subject="+ie+", uri="+Y+", source="+T),U(),!1):!0}if(x.solo&&de(k),P?.global){U();return}ue.debug("outlineExpand: dereferencing "+k);let te=n.createElement("span");if(y.appendChild(te),p.addCallback("done",L),p.addCallback("fail",L),k.uri&&k.uri.split(":")[0]==="rdf"){U();return}if(k.uri&&!C&&!re.isAudio(k)&&!re.isVideo(k)){let Y=k.doc()&&k.doc().uri?k.doc().uri:""+k.doc(),ie=function(Ie){let ke=!!(k&&k.uri&&k.site&&k.site().uri===k.uri);return Ie===403?ke?"This root resource is not accessible with your current permissions. Try logging in with an authorized account or opening a public profile document.":"This resource is not accessible with your current permissions.":ke?"This root resource is not publicly readable. Try logging in or opening a profile document.":"This resource is not publicly readable. Try logging in or opening a different public resource."},me=function(Ie,ke){let qe=typeof Ie=="string"?Ie:String(Ie||""),ze=ke?.status||ke?.response?.status;return ze===401||ze===403?ze:qe.includes("status: 403")||qe.includes("status 403")?403:qe.includes("status: 401")||qe.includes("status 401")?401:null},be=function(){let Ie=!!(k&&k.uri&&k.site&&k.site().uri===k.uri),ke=!!je.authn.currentUser();return Ie?ke?"You are logged in, but this root resource is not publicly readable. Select a storage location from the account menu to continue.":"This root resource is not publicly readable. Try logging in or opening a profile document.":ke?"You are logged in, but your account does not have permission to view this resource.":"This resource is not publicly readable. Log in to view it."},fe=function(){se=!0;let Ie=n.createElement("solid-ui-error-state");Ie.setAttribute("title","Access denied"),Ie.setAttribute("message",be()),Y&&Ie.setAttribute("data-outline-error-for",Y),Ns(Ie),N.emptyNode(y).appendChild(Ie),p.addCallback("done",function(qe){return!se||!y.isConnected?!1:qe!==Y?!0:(U(),!1)}),p.getState(Y)==="fetched"&&U()},ye=function(Ie,ke){if(y.querySelector&&Y&&y.querySelector('[data-outline-error-for="'+Y+'"]'))return;let qe=me(Ie,ke);if(qe&&x.solo){if(!Ce&&je.authn.currentUser()){Ce=!0,Ee(!0);return}fe();return}let ze=qe?ie(qe):Ie,dn=re.errorMessageBlock(n,ze,"#fee",ke instanceof Error?ke:void 0);Y&&dn.setAttribute("data-outline-error-for",Y),y.appendChild(dn)},Ce=!1,Ee=function(Ie){let ke=!1,qe=p.nowOrWhenFetched(k.doc(),Ie?{force:!0}:{},function(ze,dn){ze?(p.lookUpThing(k),U(),x.solo&&de(k)):(ke=!0,ye(dn,void 0))});qe&&typeof qe.catch=="function"&&qe.catch(function(ze){ke||(ke=!0,ye(ze,ze))})},Ae=p.requested[Y];Ee(!!x.solo&&(Ae===401||Ae===403))}else U()}function pe(y,v){let x=y.AJAR_statement||y.parentNode&&y.parentNode.AJAR_statement;ue.debug("Collapsing subject "+v);let P;x&&(ue.debug("looking up pred "+x.predicate.uri+"in defaults"),P=ve.defaults[x.predicate.uri]),ue.debug("view= "+P);let T;y.parentNode&&y.parentNode.id==="outline"&&(T=y),s.replaceTD(s.outlineObjectDiv(v,P,T,x),y)}this.replaceTD=function(v,x){let P;ce(x)&&(P=!0);for(let T=l.length-1;T>-1;T--)for(let C=l[T];C.parentNode;C=C.parentNode)C===x&&ne(l[T],!1);x.parentNode.replaceChild(v,x),P&&ne(v,!0)};function he(y,v){N.emptyNode(y).appendChild(E(v)),de(v),y.setAttribute("about",v.toNT())}a.outlineRefocus=he,this.GotoFormURI_enterKey=function(y){y.keyCode===13&&a.GotoFormURI(y)},this.GotoFormURI=function(y){xe(n.getElementById("UserURI").value)};function xe(y){let v=f.sym(y);this.GotoSubject(v,!0)}let Se=0;function Re(y,v,x){let P=++Se,T=v.uri,C=x.uri.split("#")[0];if(!T.endsWith("/")||!C.startsWith(T)||C===T)return;let k=[],se=C.slice(T.length).split("/"),U=T;se.forEach((Y,ie)=>{Y&&(U+=ie<se.length-1?Y+"/":Y,k.push(U))});let L=Y=>Array.from(y.querySelectorAll("td.obj[about]")).find(ie=>ie.getAttribute("about")===f.sym(Y).toNT()),te=Y=>new Promise(ie=>{let me=L(Y);if(me)return ie(me);let be=setTimeout(()=>{fe.disconnect(),ie(null)},1e4),fe=new MutationObserver(()=>{let ye=L(Y);!ye&&P===Se||(clearTimeout(be),fe.disconnect(),ie(ye))});fe.observe(y,{childList:!0,subtree:!0})});(async()=>{for(let Y of k){let ie=await te(Y);if(!ie||P!==Se)return;(!ie.firstChild||ie.firstChild.nodeName!=="TABLE")&&ae(ie,f.sym(Y)),Y===k[k.length-1]&&typeof ie.scrollIntoView=="function"&&ie.scrollIntoView({block:"nearest"})}})().catch(Y=>ue.warn("outline: could not open "+x.uri+" inside "+T+": "+Y))}this.GotoURIinit=function(y){let v=f.sym(y);this.GotoSubject(v)},this.GotoSubject=function(y,v,x,P,T,C,k){let se=la(k)!=="accountMenu",U=h();se&&(!C||C===U)&&b(y);let L=C||U;P&&(L.style.width="100%",N.emptyNode(L));let te=x&&x.subject&&x.subject.uri?x.subject:y;function Y(){let me=n.createElement("div");me.classList.add("outline-subject-block");let be=s.outlineObjectDiv(te,void 0,me);return me.appendChild(be),L.appendChild(me),me}let ie=P?Y():L;if(P&&de(te),v?ae(ie,te,{pane:x,solo:P,folderView:sa(k),headerOnlyInViewerPod:!se||!!(x&&x.subject&&x.subject.uri)}):P||Y(),P&&n&&n.defaultView&&n.defaultView.history){let me=k&&typeof k=="object"&&k.preserveUrl===!0,be=n.defaultView.history.state||{},fe=document.location.href!==y.uri,ye=Wi(be,{pane:x?{name:x.name,subject:x.subject&&typeof x.subject.uri=="string"?x.subject.uri:void 0}:void 0,leavingPage:fe,viaAccountMenu:!se});try{let Ce=new URL(n.location.href),Ee=new URL(y.uri,n.location.href);me?et(n.defaultView.history,"replaceState",ye,""):Ce.origin===Ee.origin&&(fe?et(n.defaultView.history,"pushState",ye,y.uri,y.uri):JSON.stringify(be)!==JSON.stringify(ye)&&et(n.defaultView.history,"replaceState",ye,y.uri,y.uri))}catch(Ce){ue.error("Failed to update navigation history: "+N.stackString(Ce))}}return P&&oa(n),y};let ve=Oi(n);function Ne(y){let v;if(y.termType==="Literal"){if(v=n.createElement("span"),v.classList.add("objectValue","objectValue--literal"),v.textContent=y.value,y.datatype&&y.datatype.uri){let x=o.xsd("").uri;y.datatype.uri.slice(0,x.length)===x&&v.classList.add("objectValue--"+y.datatype.uri.slice(x.length))}}else if(y.termType==="NamedNode"||y.termType==="BlankNode")if(v=n.createElement("span"),v.classList.add("objectValue","objectValue--resource"),v.setAttribute("about",y.toNT()),s.appendAccessIcons(f,v,y),y.termType==="NamedNode")if(y.uri.slice(0,4)==="tel:"){let x=y.uri.slice(4),P=n.createElement("a");v.appendChild(n.createTextNode(x)),P.setAttribute("href",y.uri),P.appendChild(N.AJARImage(ee.src.icon_telephone,"phone","phone "+x,n)),v.appendChild(P),P.firstChild.setAttribute("class","phoneIcon"),P.firstChild.classList.add("objectValueLinkIcon")}else{v.appendChild(n.createTextNode(N.label(y)));let x=re.linkIcon(n,y);x.firstChild&&x.firstChild.classList.add("objectValueLinkIcon"),v.appendChild(x),re.makeDraggable(v,y)}else v.appendChild(n.createTextNode(N.label(y)));else if(y.termType==="Collection"){v=n.createElement("div"),v.setAttribute("about",y.toNT());for(let x=0;x<y.elements.length;x++){let P=y.elements[x],T=v.appendChild(n.createElement("div")),C=T.appendChild(n.createElement("div"));C.classList.add("obj"),C.setAttribute("notSelectable","false"),C.setAttribute("about",y.toNT()),C.innerHTML=x+1+")",T.appendChild(s.outlineObjectDiv(P))}}else y.termType==="Graph"?(v=Ve("dataContentPane").statementsAsTables(y.statements,e),v.setAttribute("class","nestedFormula")):(ue.error("Object "+y+" has unknown term type: "+y.termType),v=n.createTextNode("[unknownTermType:"+y.termType+"]"));return ue.debug("contents: "+v.innerHTML),v}return this.createTabURI=function(){n.getElementById("UserURI").value=n.URL+"?uri="+n.getElementById("UserURI").value},this.UserInput.setSelected=ne,this.UserInput.deselectAll=G,this.UserInput.views=ve,this.outlineExpand=ae,this}function xr(e,n){let t=0,r=()=>{t===0&&(t=window.requestAnimationFrame(()=>{t=0,e()}))};if(e(),typeof ResizeObserver>"u")return window.addEventListener("resize",r),()=>{t!==0&&window.cancelAnimationFrame(t),window.removeEventListener("resize",r)};let i=new ResizeObserver(r);for(let a of n)a&&i.observe(a);return()=>{t!==0&&window.cancelAnimationFrame(t),i.disconnect()}}var Ls=()=>Promise.all([import("./part-FGR2FPX7.js"),import("./part-ZXIDJTPD.js")]),Fs=768,ma='[data-profile-section="heading"]',fa='[data-profile-section="social"]';async function Ms(e,n){let t=e.each(n,o.rdfs("seeAlso"),null,n.doc());t.length>0&&await e.fetcher.load(t)}function ga(e,n){return e.environment?.layout==="mobile"?"mobile":typeof window>"u"?"desktop":(n?.getBoundingClientRect().width||window.innerWidth)<=Fs?"mobile":"desktop"}function Rs(e,n,t){let r=()=>{let a=ga(n,e);a!==e.dataset.layout&&t(a)},i=e.querySelector(".profile-grid");return xr(r,[e,i])}function Ds(e){let n=()=>{let i=e.querySelector(".profile-grid"),a=e.querySelector(ma),s=e.querySelector(fa);if(!i||!a||!s)return;if(!(e.dataset.layout!=="mobile"&&getComputedStyle(i).display==="grid")){s.style.removeProperty("min-height");return}let f=`${Math.ceil(a.getBoundingClientRect().height)}px`;s.style.minHeight!==f&&(s.style.minHeight=f)},t=e.querySelector(ma),r=e.querySelector(fa);return xr(n,[e,t,r])}function ha(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("profile-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var Bs={global:!1,icon:B.iconBase+"noun_15059.svg",name:"profile",label:function(e,n){let t=n.session.store.findTypeURIs(e);return t[o.vcard("Individual").uri]||t[o.foaf("Person").uri]||t[o.schema("Person").uri]?"Profile":null},render:(e,n)=>{let t=n.dom.createElement("div"),r=n.session.store,i=null,a=null,s=ga(n,t);ha(t,n),t.dataset.layout=s;let l=async()=>{let[{ProfileView:f},{hydrateQRCodes:p}]=await Ls();ha(t,n),t.dataset.layout=s,fn(await f(e,n,s,l),t),i?.(),i=Ds(t),a?.(),a=Rs(t,n,c=>{s=c,l()}),await p(t)};return Ms(r,e).then(async()=>{await l()}),t}},Cr=Bs;function _r(e,n,t,r){return t.statementsMatching(null,r.acl("origin"),e).reduce((s,l)=>s.concat(t.statementsMatching(n,r.acl("trustedApp"),l.subject)).concat(t.statementsMatching(l.subject)),[])}function ba(e,n,t,r,i){let a=new si(`bn_${n}`);return[Le(r,i.acl("trustedApp"),a,r.doc()),Le(a,i.acl("origin"),e,r.doc()),...t.map(s=>we(s)).map(s=>Le(a,i.acl("mode"),s,r.doc()))]}function wa(){return Math.random().toString(36).substr(2,5)}function kr(e){let n=rt("table",{class:"results"}),t=cn("tr",[en("th","Application URL"),en("th","Access modes"),en("th","Actions")]);return n.appendChild(t),z.each(e,o.acl("trustedApp"),void 0,void 0).flatMap(i=>z.each(i,o.acl("origin"),void 0,void 0).map(a=>({appModes:z.each(i,o.acl("mode"),void 0,void 0),origin:a}))).sort((i,a)=>i.origin.value<a.origin.value?-1:1).forEach(({appModes:i,origin:a})=>n.appendChild(ya(e,a,i,r))),n.appendChild(ya(e,null,[o.acl("Read")],r)),n;function r(){n.parentElement.replaceChild(kr(e),n)}}function ya(e,n,t,r){let i={origin:n,appModes:t,formElements:{modes:[],origin:void 0}};return cn("tr",[cn("td",[cn("form",[rt("input",{class:"textinput",placeholder:"Write new URL here",value:n?n.value:""},{},f=>{i.formElements.origin=f})],{},{submit:a})]),cn("td",[cn("form",Os(i),{},{submit:a})]),cn("td",[cn("form",n?[en("button","Update",{class:"controlButton",style:"background: LightGreen;"}),en("button","Delete",{class:"controlButton",style:"background: LightCoral;"},{click:s})]:[en("button","Add",{class:"controlButton",style:"background: LightGreen;"})],{},{submit:a})])]);function a(f){f.preventDefault();let p;try{p=we(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to trust")}let c=i.formElements.modes.filter(m=>m.checked).map(m=>m.value),d=_r(i.origin||p,e,z,o),u=ba(p,wa(),c,e,o);if(!z.updater)throw new Error("Store has no updater");z.updater.update(d,u,l)}function s(f){f.preventDefault();let p;try{p=we(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to remove trust from")}let c=_r(p,e,z,o);if(!z.updater)throw new Error("Store has no updater");z.updater.update(c,[],l)}function l(f,p,c){if(p)return r()}}function rt(e,n={},t={},r=null){let i=document.createElement(e);return r&&r(i),Object.keys(n).forEach(a=>{i.setAttribute(a,n[a])}),Object.keys(t).forEach(a=>{i.addEventListener(a,t[a])}),i}function cn(e,n,t={},r={},i=null){let a=rt(e,t,r,i);return n.forEach(s=>a.appendChild(s)),a}function en(e,n,t={},r={},i=null){let a=rt(e,t,r,i);return a.textContent=n,a}function Os({appModes:e,formElements:n}){return["Read","Write","Append","Control"].map(t=>{let r=e.some(i=>i.value===o.acl(t).value);return cn("label",[rt("input",{type:"checkbox",...r?{checked:""}:{},value:o.acl(t).uri},{},i=>n.modes.push(i)),en("span",t)])})}var qs="#418d99",zs={global:!0,icon:`${B.iconBase}noun_15177.svg`,name:"trustedApplications",label:()=>null,render:(e,n)=>{let t=n.dom,r=t.createElement("div");r.classList.add("trusted-applications-pane"),r.setAttribute("style","border: 0.3em solid "+qs+"; border-radius: 0.5em; padding: 0.7em; margin-top:0.7em;");let i=r.appendChild(t.createElement("table")),a=i.appendChild(t.createElement("tr")),l=i.appendChild(t.createElement("tr")).appendChild(t.createElement("div"));return l.setAttribute("style","padding: 0.7em;"),$s(t,a,l).catch(f=>l.appendChild(re.errorMessageBlock(t,f))),r}};async function $s(e,n,t){let i=(await De.ensureLoadedProfile({dom:e,div:n,statusArea:t,me:null})).me,a=i.doc();if(!z.updater)throw new Error("Store has no updater");let s=z.updater.editable(a.uri,z);if(n.appendChild(en("h3","Manage your trusted applications")),!s){n.appendChild(re.errorMessageBlock(e,`Your profile ${i.doc().uri} is not editable, so we cannot do much here.`));return}n.appendChild(en("p","Here you can manage the applications you trust."));let l=kr(i);n.appendChild(l),n.appendChild(en("h4","Notes")),n.appendChild(cn("ol",[n.appendChild(en("li","Trusted applications will get access to all resources that you have access to.")),n.appendChild(en("li","You can limit which modes they have by default.")),n.appendChild(en("li","They will not gain more access than you have."))])),n.appendChild(en("p","Application URLs must be valid URL. Examples are http://localhost:3000, https://trusted.app, and https://sub.trusted.app."))}var va=zs;async function xa(e,n,t){let r=await xn(e),i=Hi(n,r),a=document.createElement("div");return a.classList.add("container"),a.appendChild(Vs(r.uri,i)),a.appendChild(Hs(i)),a}function Hs(e){let n=document.createElement("section"),t=document.createElement("h2");t.innerText="Data",n.appendChild(t);let r=document.createElement("div");r.classList.add("list-group"),n.appendChild(r);let i=document.createElement("a");return i.classList.add("list-group-item"),i.href=window.document.location.href+"public/",i.innerText=`View ${e}'s files`,r.appendChild(i),n}function Vs(e,n){let t=document.createElement("a");t.href=e,t.innerText=n;let r=document.createElement("span");r.innerText="'s Profile";let i=document.createElement("h1");return i.appendChild(t),i.appendChild(r),i}var uu={icon:B.iconBase+"noun_547570.svg",name:"dashboard",label:e=>e.termType==="NamedNode"&&e.uri===e.site().uri?"Dashboard":null,render:(e,n)=>{console.log("Dashboard Pane Render");let r=n.dom.createElement("div"),i=()=>{r.innerHTML="",Ws(r,_e.currentUser()||null,n,e)};return Ze.events.on("login",()=>{i()}),Ze.events.on("sessionRestore",()=>{i()}),i(),r}};function Ws(e,n,t,r){let i=new URL(window.location.href).searchParams.get("uri");if(i&&n)return Ca(e,t);if(!i&&r)return _a(e,r);if(!i&&!r&&n)return Ca(e,t);let a=r||n||z.sym(window.location.href);return _a(e,a)}function Ca(e,n){n.getOutliner(n.dom).getDashboard().then(r=>e.appendChild(r))}function _a(e,n){let t=document.createElement("div");e.appendChild(t);let r=t.attachShadow({mode:"open"}),i=document.createElement("link");i.rel="stylesheet",i.href="/common/css/bootstrap.min.css",r.appendChild(i),xa(n,z,z.fetcher).then(a=>r.appendChild(a))}var Gs=await(await fetch(ge(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
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
`,"text/turtle"))).text(),js=await(await fetch(ge(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
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
`,"text/turtle"))).text(),Js={icon:B.iconBase+"noun_Sliders_341315_000000.svg",name:"basicPreferences",label:e=>null,render:(e,n)=>{let t=n.dom,r=n.session.store;function i(d,u){d||a.appendChild(re.errorMessageBlock(t,u,"#fee"))}let a=t.createElement("div"),s=Ks(a,t);function l(d,u){d=d.doc(),r.holds(void 0,void 0,void 0,d)||Xe(u,r,d.uri,"text/turtle",null)}let f=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597#this");l(f,js);let p=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597-ONT");l(p,Gs);async function c(){let d=await De.ensureLoadedPreferences({dom:t,div:a});if(!d.preferencesFile){console.log("Not doing private class preferences as no access to preferences file. "+d.preferencesFileError);return}let u=re.appendForm(t,s,{},d.me,f,d.preferencesFile,i);u.style.borderStyle="none";let m=n.session.paneRegistry.byName("trustedApplications");m&&a.appendChild(m.render(null,n)),Ys(a,r,d.me,t)}return c(),a}};function Ks(e,n){let t=Ia(e,n,"User types"),r=t.appendChild(n.createElement("p"));r.innerText="Here you can self-assign user types to help the data browser know which views you would like to access.";let i=t.appendChild(n.createElement("a"));return i.href="https://github.com/solidos/userguide/#role",i.innerText="Read more",t.appendChild(n.createElement("div"))}var ka=Js;function Ys(e,n,t,r){let i=Ia(e,r,"Delete account"),s=n.each(t,o.space("storage"),null,t.doc()).map(f=>f.value),l=i.appendChild(r.createElement("ul"));s.forEach(async f=>{let p=await Xs(f,r);p&&l.appendChild(r.createElement("li")).appendChild(p)})}async function Xs(e,n){let t=n.createElement("a");t.textContent=`Delete your account at ${e}`;let r=await Qs(e);return typeof r!="string"?null:(t.href=r,t)}async function Qs(e){let n=new URL(e),t=new URL(e);t.pathname=n.pathname="/account/delete";let r=t.hostname.split(".");return t.hostname=r.slice(1).join("."),(await fetch(t.href,{method:"HEAD"})).ok?t.href:(await fetch(n.href,{method:"HEAD"})).ok?n.href:null}function Ia(e,n,t){let r=e.appendChild(n.createElement("div"));r.style.border="0.3em solid #418d99",r.style.borderRadius="0.5em",r.style.padding="0.7em",r.style.marginTop="0.7em";let i=r.appendChild(n.createElement("h3"));return i.innerText=t,r}var Ea=new Set;function Ge(e){let n=String(e);if(Ea.has(n)||typeof document>"u")return;Ea.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}Ge(ge(`.trackerBoard {
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
`,"text/css"));function Ta(e,n,t,r){let i=e.createElement("div");i.classList.add("trackerBoard");let a=i.appendChild(e.createElement("table"));a.classList.add("trackerBoardTable");let s=a.appendChild(e.createElement("tr"));s.classList.add("trackerBoardHeader");let l=a.appendChild(e.createElement("tr"));l.classList.add("trackerBoardMainRow"),n.forEach(c=>{let d=s.appendChild(e.createElement("th"));d.classList.add("trackerBoardHeaderCell"),d.textContent=N.label(c,!0),d.subject=c;let u=l.appendChild(e.createElement("td"));u.classList.add("trackerBoardColumn"),u.subject=c;function m(g){g.forEach(function(h){let b=z.sym(h);r.columnDropHandler(b,c)})}r.columnDropHandler&&re.makeDropTarget(u,m)});function f(c,d){let u=e.createElement("div");u.classList.add("trackerBoardCard");let m=u.appendChild(e.createElement("table"));m.classList.add("trackerBoardCardTable");let h=z.each(c,o.rdf("type")).map(w=>z.any(w,o.ui("backgroundColor"))).filter(w=>w);m.appendChild(re.personTR(e,null,c)),m.subject=c;let b=h[0]||z.any(d,o.ui("backgroundColor"));return u.style.backgroundColor=b?b.value:"#fff",u}function p(c,d,u,m){let g=c.map(h=>[z.any(h,d)||u,h]);return g.sort(),m&&g.reverse(),g.map(h=>h[1])}return i.refresh=function(){let c=new Mn(new Date),d=t||r.renderItem||f;function u(m){let g=d(m);return re.makeDraggable(g,m),g.subject=m,g}for(let m=l.firstChild;m;m=m.nextSibling){let g=m.subject,h=z.each(null,o.rdf("type"),g),b=r.sortBy||o.dct("created");r.filter&&(h=h.filter(r.filter));let w=p(h,b,c,!0);N.syncTableToArrayReOrdered(m,w,u)}},i.refresh(),i}Ge(ge(`/* CSS for the accessible modal dialogs created by localUtils.js */

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
`,"text/css"));var Je=null,Ft=null;function Zs(e){return Je&&e.body.contains(Je)||(Je=null,Je=e.createElement("div"),Je.id="issue-modal",Je.className="focus-trap hidden",Je.setAttribute("role","presentation"),Je.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
      <h2 id="modal-title"></h2>
      <div id="modal-desc"></div>
      <div id="modal-buttons"></div>
    </div>
  `,e.body.appendChild(Je),Je.addEventListener("keydown",n=>{if(n.key==="Escape"){n.stopPropagation();let t=Je.querySelector("button[data-cancel]");t?t.click():Pa()}else if(n.key==="Tab"){let t=Array.from(Je.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(i=>!i.hasAttribute("disabled"));if(t.length===0)return;let r=t.indexOf(e.activeElement);n.shiftKey?r===0&&(t[t.length-1].focus(),n.preventDefault()):r===t.length-1&&(t[0].focus(),n.preventDefault())}})),Je}function Aa(e,n){Array.from(n.body.children).filter(r=>r!==Je).forEach(r=>{e?r.setAttribute("aria-hidden","true"):r.removeAttribute("aria-hidden")})}function el({title:e,message:n,buttons:t,dom:r}){let i=Zs(r);Ft=r.activeElement,Aa(!0,r),i.classList.remove("hidden"),i.querySelector("#modal-title").textContent=e||"";let a=i.querySelector("#modal-desc");typeof n=="string"?a.textContent=n:(a.innerHTML="",a.appendChild(n));let s=i.querySelector("#modal-buttons");return s.innerHTML="",new Promise(l=>{t.forEach(p=>{let c=r.createElement("button");c.setAttribute("type","button"),c.textContent=p.label,p.primary&&c.classList.add("btn-primary"),p.cancel&&c.setAttribute("data-cancel","true"),c.addEventListener("click",()=>{Pa(),l(p.value)}),s.appendChild(c)});let f=s.querySelector("button");f&&f.focus()})}function Pa(){if(Je){let e=Je.ownerDocument;Je.classList.add("hidden"),Aa(!1,e),Ft&&Ft.focus&&Ft.focus()}}function nn(e,n="Information",t){return el({title:n,message:e,buttons:[{label:"OK",value:!0,primary:!0}],dom:t})}Ge(ge(`.trackerNewIssueForm {
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
`,"text/css"));function Mt(e,n,t,r,i,a){let s=e.createElement("div");s.classList.add("trackerNewIssueForm");let l=n.any(t,o.wf("stateStore"));a=a||function(){};let f=function(){return""+new Date().getTime()},p=function(){w.setAttribute("class","pendingedit"),w.disabled=!0;let _=[],I=function(X){let J=new Mn(new Date),oe=""+new Date().getTime(),ce=J.value.slice(0,4),H=J.value.slice(5,7),M=J.value.slice(8,10);return X.replace("{N}",oe).replace("{YYYY}",ce).replace("{MM}",H).replace("{DD}",M)},S=n.anyValue(t,o.wf("issueURITemplate")),A=S?n.sym(I(rn.join(S,l.uri))):n.sym(l.uri+"#Iss"+f()),O=A.doc(),q=n.literal(w.value);_.push(new Qe(A,o.wf("tracker"),t,l)),_.push(new Qe(A,o.dc("title"),q,l)),_.push(new Qe(A,o.dct("created"),new Date,l));let F=r?n.each(r,o.rdf("type"),null,r.doc()):n.each(t,o.wf("initialState"));for(let X of F)_.push(new Qe(A,o.rdf("type"),X,l));r&&_.push(new Qe(r,o.wf("dependent"),A,l)),S&&(_.push(new Qe(A,o.wf("tracker"),t,O)),_.push(new Qe(A,o.rdfs("seeAlso"),l,O)));let E=function(X,J,oe){J?(s.parentNode.removeChild(s),i(A)):(w.classList.remove("pendingedit"),w.disabled=!1,w.focus(),nn(`Could not save the new issue. Please try again.

Details: ${oe||"No additional error details provided."}`,"Save issue failed",e))};n.updater.update([],_,E)},c=n.any(t,o.wf("issueClass")),d=N.label(c),u=function(){s.parentNode&&s.parentNode.removeChild(s),a()},m=s.appendChild(e.createElement("div"));m.classList.add("trackerNewIssueHeader");let g=m.appendChild(e.createElement("h2"));g.textContent="Add new "+(r?"sub ":"")+d;let h=m.appendChild(e.createElement("button"));h.classList.add("trackerNewIssueCloseButton"),h.setAttribute("type","button"),h.setAttribute("aria-label","Close new issue form"),h.textContent="\xD7",h.addEventListener("click",u,!1);let b=s.appendChild(e.createElement("p"));b.textContent="Title of new "+d+":";let w=e.createElement("input");return w.classList.add("trackerNewIssueTitleField"),w.setAttribute("type","text"),w.setAttribute("maxLength","2048"),w.select(),w.addEventListener("keyup",function(_){_.keyCode===13&&p()},!1),s.appendChild(w),w.focus(),s}function it(...e){console.log(...e)}function Hn(...e){console.warn(...e)}function Fe(...e){console.error(...e)}Ge(ge(`/* section in mashlib css is display: block
so i have to override it here */
section.errorSection[hidden] {
  display: none;
}
`,"text/css"));function Ir(e,n,t){e.appendChild(re.errorMessageBlock(n,t,"pink"))}function Rt(e,n){let t=e.createElement("section");t.classList.add("errorSection"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.setAttribute("aria-label","Error messages"),t.hidden=!0,n.appendChild(t);function r(){t.innerHTML="",t.hidden=!0}function i(a){t.innerHTML="",t.hidden=!1,Ir(t,e,a)}return{errorSection:t,clearErrors:r,showError:i}}Ge(ge(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
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


`,"text/css"));var Pe=z,nl=!1,tl=B.iconBase+"noun_17020_gray-tick.svg",zu=B.iconBase+"noun_17020_sans-tick.svg",rl=B.iconBase+"noun_17020.svg";function il(e){return!!Pe.findTypeURIs(e)[o.wf("Open").uri]}function al(e){return il(e)?tl:rl}function Sa(e,n){let t=Pe.the(e,o.wf("tracker"),null,e.doc()),r=Pe.any(t,o.wf("issueClass"));n=n||r;let i=Pe.each(e,o.rdf("type")).filter(a=>Pe.holds(a,o.rdfs("subClassOf"),n));if(i.length!==1)throw new Error("Issue must have one type as state: "+i.length);return i[0]}function Dt(e){let t=Pe.each(e,o.rdf("type")).map(r=>Pe.any(r,o.ui("backgroundColor"))).filter(r=>!!r);return t.length?t[0].value:null}function Ua(e,n){function t(){let d=Dt(e)||"white";a.style.backgroundColor=d,c.style.backgroundColor=d}let r=n.dom,i=!Dt(e),a=r.createElement("div");a.classList.add("trackerBoardIssueCard");let s=a.appendChild(r.createElement("table"));s.classList.add("trackerBoardIssueCardTable");let l={draggable:!1};s.appendChild(re.personTR(r,null,e,l)),s.subject=e,a.firstChild.firstChild.firstChild.firstChild.setAttribute("src",B.iconBase+"noun_Danger_1259514.svg");let p=a.firstChild.firstChild.children[2];p.classList.add("trackerBoardIssueCardButtons");let c=re.button(r,B.iconBase+"noun_253504.svg","edit",async d=>{Bt(e,n)});if(p.appendChild(c),i){let d=re.deleteButtonWithCheck(r,p,"issue",async function(){try{await Pe.updater.update(Pe.connectedStatements(e))}catch(u){Fe("Unable to delete issue: "+u),nn(`Unable to delete issue.

Details: ${u?.message||String(u)}`,"Delete failed",r);return}a.parentNode.removeChild(a),re.refreshTree(n.paneDiv)});p.appendChild(d)}return a.refresh=t,t(),a}function Bt(e,n){function t(){r.innerHTML="",r.classList.remove("trackerOverlayVisible")}let r=n.overlay;r.classList.add("trackerOverlay"),r.innerHTML="";try{let i=Er(e,n);r.appendChild(i);let a=i.appendChild(re.button(n.dom,B.iconBase+"noun_1180156.svg","close",t));a.classList.add("trackerOverlayCloseButton"),delete a.style.backgroundColor,r.classList.add("trackerOverlayVisible")}catch(i){Fe("Failed to render issue: "+i),nn(`Failed to render issue.

Details: ${i?.message||String(i)}`,"Render failed",n.dom)}}function ol(e,n){let t=e.createElement("div");return t.classList.add("trackerIssueSpacer"),t.style.backgroundColor=n,t}function Er(e,n){let t=n.dom;function r(R,W,$){if(nl){if(!s(f,"trackLastModified"))return;let Q=W.statementsMatching(e,o.dct("modified")).concat(W.statementsMatching(e,o.wf("modifiedBy"))),le=[Le(e,o.dct("modified"),new Date,$)];h&&le.push(Le(e,o.wf("modifiedBy"),h,$)),W.updater.update(Q,le,function(D,K,V){})}}function i(){return""+new Date().getTime()}function a(R,W){R||Fe(`Failed to save change:
`+W)}function s(R,W){let $=Pe.any(R,o.ui(W));return!!($&&$.value)}function l(){let R=Dt(e)||"#eee";d.style.borderColor=R}let f=Pe.the(e,o.wf("tracker"),null,e.doc());if(!f)throw new Error("No tracker");let p=Pe.any(f,o.wf("stateStore")),c=e.doc(),d=t.createElement("div");d.classList.add("trackerIssue");let u=t.createElement("div");u.classList.add("trackerIssueMessageSection");let{showError:m,clearErrors:g}=Rt(t,u),h=_e.currentUser(),b=Dt(e)||"white";l(),_e.checkUser();let w=d.appendChild(re.button(t,al(e)));w.classList.add("trackerIssueIconButton"),re.makeDraggable(w,e);let _=Pe.any(f,o.wf("issueClass"));if(!_)return Fe("Tracker "+N.label(f)+" has no issueClass"),m("Tracker "+N.label(f)+" has no issueClass. Please open Settings and make sure there is a state class with allowed values (for example Open, In Progress, Closed), then save and refresh."),d.appendChild(u),d;let I=re.makeSelectForCategory(t,Pe,e,_,p,function(R,W){R?(g(),r(c,Pe,c),re.refreshTree(d)):(Hn(`Failed to change state:
`+W),m(`Failed to change state.

Details: ${W||"No additional error details provided."}`))});d.appendChild(I);let S=Pe.each(f,o.wf("issueCategory"));for(let R of S)d.appendChild(re.makeSelectForCategory(t,Pe,e,R,p,function(W,$){W?(g(),r(c,Pe,c),re.refreshTree(d)):(Hn(`Failed to change category:
`+$),m(`Failed to change category.

Details: ${$||"No additional error details provided."}`))}));let A=t.createElement("a");A.classList.add("trackerIssueTrackerLink"),A.setAttribute("href",f.uri),d.appendChild(A).textContent=N.label(f),A.addEventListener("click",re.openHrefInOutlineMode,!0);let O=`
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
`,q=o.wf("coreIsueForm");Xe(O,Pe,q.doc().uri,"text/turtle");let F=re.appendForm(t,null,{},e,q,p,a);F.classList.add("trackerIssueForm"),d.appendChild(F),F.style.backgroundColor=b;let E=Pe.statementsMatching(e,o.wf("assignee"));if(E.length>1){nn("Weird, was assigned to more than one person. Fixing ..","Assignment Error",t);let R=E.slice(1);Pe.updater.update(R,[],function(W,$,Q){$?(g(),nn("Now fixed.","Assignment Fixed",t)):(Fe(`Failed to fix multiple assignees:
${Q}`),m(`Failed to fix multiple assignees.

Details: ${Q||"No additional error details provided."}`))})}async function X(){let R=Pe.each(e,o.wf("assigneeGroup"));await Pe.fetcher.load(R);let W=R.map(le=>Pe.each(le,o.vcard("member"),null,le.doc())).flat(),$=Pe.any(null,o.doap("bug-database"),f);$&&await Pe.fetcher.load($);let Q=$?Pe.each($,o.doap("developer")):[];return W.concat(Q)}function J(R){let W={link:!1};return re.personTR(t,o.wf("dependent"),R,W)}X().then(R=>{if(R.length){R.forEach(function($){Pe.fetcher.lookUpThing($)});let W={nullLabel:"(unassigned)"};d.appendChild(re.makeSelectForOptions(t,Pe,e,o.wf("assignee"),R,W,c,function($,Q){$?(g(),r(c,Pe,c)):(Fe(`Failed to change assignee:
`+Q),m(`Failed to change assignee.

Details: ${Q||"No additional error details provided."}`))}))}});function oe(R,W){W=W||[];let $=Pe.any(null,o.wf("dependent"),R,R.doc());return $?oe($,[$].concat(W)):W}if(s(f,"allowSubIssues")){let R=d.appendChild(t.createElement("div"));R.classList.add("trackerIssueSubIssuePanel"),R.appendChild(t.createElement("h4")).textContent="Super Issues";let W=R.appendChild(t.createElement("div"));W.classList.add("trackerIssueSubIssuePanelSupersList"),W.refresh=function(){let D=oe(e);N.syncTableToArrayReOrdered(W,D,J)},W.refresh(),R.appendChild(t.createElement("h4")).textContent="Sub Issues";let $=R.appendChild(t.createElement("div"));$.classList.add("trackerIssueSubIssuePanelSubsList"),$.refresh=function(){let D=Pe.each(e,o.wf("dependent"),null,e.doc());N.syncTableToArrayReOrdered($,D,J)},$.refresh();let Q=t.createElement("button");Q.classList.add("trackerIssueSubIssuePanelNewSubButton"),Q.setAttribute("type","button"),R.appendChild(Q);let le=N.label(_);Q.innerHTML="New sub "+le,Q.addEventListener("click",function(D){R.insertBefore(Mt(t,Pe,f,e,$.refresh),Q.nextSibling)},!1)}d.appendChild(t.createElement("br"));let ce=Pe.any(f,o.wf("extrasEntryForm"));ce&&re.appendForm(t,d,{},e,ce,p,a);let H=Pe.anyValue(f,o.wf("issueURITemplate")),M;H?M=e.doc():(M=Pe.any(f,o.wf("messageStore")),M||(M=Pe.any(f,o.wf("stateStore"))),Pe.sym(M.uri+"#Chat"+i())),Pe.fetcher.nowOrWhenFetched(M,function(R,W,$){if(R){u.appendChild(ol(t,b));let Q=xt(t,Pe,e,M);Q.classList.add("trackerIssueMessageArea"),u.appendChild(Q)}else{let Q=t.createElement("p");Q.classList.add("trackerIssueMessageAreaError"),Q.textContent=W,u.appendChild(Q)}});let Z=d.appendChild(t.createElement("div"));Z.classList.add("trackerIssueAttachmentHint"),Z.innerHTML=`<h4>Attachments</h4>
    <p>Drag files, emails,
    web pages onto the paper clip, or click the file upload button.</p>`;let ne=e.uri.endsWith("/index.ttl#this")?e.uri.slice(0,14)+"Files/":e.dir().uri+"Files/"+e.uri.split("#")[1]+"/";re.attachmentList(t,e,d,{doc:p,promptIcon:B.iconBase+"noun_25830.svg",uploadFolder:Pe.sym(ne),predicate:o.wf("attachment")}),re.deleteButtonWithCheck(t,d,"issue",async function(){try{await Pe.updater.update(Pe.connectedStatements(e))}catch(R){Fe("Unable to delete issue: "+R),m(`Unable to delete issue.

Details: ${R?.message||String(R)}`);return}nn("Your issue has been deleted","Issue Deleted",t),d.classList.add("trackerIssueDeleted")}).classList.add("trackerIssueDeleteButton");let j=t.createElement("button");return j.classList.add("trackerIssueRefreshButton"),j.textContent="refresh messages",j.addEventListener("click",async function(R){try{await Pe.fetcher.load(M,{force:!0,clearPreviousData:!0})}catch(W){alert(W);return}re.refreshTree(d)},!1),d.appendChild(j),d.appendChild(u),d}Ge(ge(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));var sl=o,Na=z.updater;function La(e,n){function t(){return""+new Date().getTime()}let r=De.newAppInstance(n.dom,{noun:"tracker"},function(i,a){function s(w){if(w.elements!==void 0)return w.elements.map(s);if(w.uri===void 0)return w;let _=w.uri;return _===c.uri?d:(_.slice(0,m.length)===m&&(_=a+_.slice(m.length)),p.sym(_))}let l="issuetracker.w3.org",f=o.space,p=n.session.store;if(!a&&(a=p.any(i,f("uriPrefix")).value,a.slice(-1)!=="/"&&(Fe(`${l}: No / at end of uriPrefix ${a}`),a=a+"/"),a+=l+"/"+t()+"/",!confirm("Make new tracker at "+a+"?")))return;let c=p.any(e,sl.wf("stateStore")),d=p.sym(a+"store.ttl"),u=e.doc(),m=u.uri.slice(0,u.uri.lastIndexOf("/")+1),g=s(u),h=s(e),b=p.statementsMatching(void 0,void 0,void 0,u);for(let w=0;w<b.length;w++){let _=b[w];p.add(s(_.subject),s(_.predicate),s(_.object),g)}p.add(h,o.space("inspiration"),e,c),p.add(h,o.space("inspiration"),e,g),Na.put(g,p.statementsMatching(void 0,void 0,void 0,g),"text/turtle",function(w,_,I){_?Na.put(d,[],"text/turtle",function(S,A,O){A?it(`Ok The tracker created OK at: ${h.uri}
Make a note of it, bookmark it.`):(Fe(`Failed to set up new store at: ${d.uri} : ${O}`),nn(`Failed to set up new store at: ${d.uri}

Details: ${O||"No additional error details provided."}`,"Create tracker failed",n.dom))}):(Fe(`Failed to save new tracker at: ${g.uri} : ${I}`),nn(`Failed to save new tracker at: ${g.uri}

Details: ${I||"No additional error details provided."}`,"Save tracker failed",n.dom))})});return r.classList.add("trackerNewTrackerButton"),r}function ll(e){let n=e.replaceAll(`
`," ");if(!n.includes(","))return n;let t='"'+n.replaceAll('"','""')+'"',r=t.slice(1,-1).replaceAll('""',"");if(r.includes('"'))throw Fe(`quoteString failed to quote properly, value: ${e}, quoted: ${t}, check: ${r}`),new Error("CSV inconsistency");return t}function dl(e,n){function t(g,h){let b;if(h.predicate)return b=e.any(g,h.predicate),b?b.value:"--";if(h.category){let w=e.each(g,o.rdf("type"));for(let _ of w)e.holds(_,o.rdfs("subClassOf"),h.category)&&(b=_);if(!b)return"?"+N.label(h.category)}else throw Fe("column has no predicate or category",h),new Error("Column has no predicate or category.");return N.label(b)}function r(g){return s.map(h=>t(g,h)).map(ll).join(",")+`
`}let i=e.any(n,o.wf("stateStore")),a=e.each(null,o.wf("tracker"),n,i),s=[{label:"Name",predicate:o.dc("title")}],f={label:"State",category:e.any(n,o.wf("issueClass"))};s.push(f);let c=e.each(n,o.wf("issueCategory"));for(let g of c){let h={label:N.label(g),category:g};s.push(h)}let d=e.any(n,o.wf("extrasEntryForm"),null,null);if(d){let h=e.any(d,o.ui("parts"),null,d.doc()).elements;for(let b of h){let w=e.any(b,o.ui("property"));if(w){let I={label:N.label(w),predicate:w};s.push(I)}}}s.push({label:"Description",predicate:o.wf("description")});let u=s.map(g=>g.label).join(",")+`
`,m=a.map(r).join("");return u+m}function Fa(e,n){let t=e.createElement("div"),r=!1;t.addEventListener("copy",a=>{if(!r)return;r=!1;let s;try{s=dl(z,n)}catch(l){nn(`Could not generate CSV. Please check tracker data and try again.

Details: ${l?.message||String(l)}`,"CSV export error",e),a.preventDefault();return}a.preventDefault(),a.clipboardData.setData("text/plain",s),a.clipboardData.setData("text/csv",s),nn("CSV data copied to clipboard.","CSV export",e)});let i=re.button(e,B.iconBase+"noun_Document_998605.svg","Copy as CSV",async a=>{r=!0,e.execCommand("copy")||(r=!1,nn("Could not copy CSV to clipboard. Please try again.","CSV export error",e))});return t.appendChild(i),t}var cl=await(await fetch(ge(`@prefix : <http://www.w3.org/ns/ui#> .
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
`,"text/turtle"))).text();Ge(ge(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
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


`,"text/css"));Ge(ge(`.trackerBoard {
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
`,"text/css"));Ge(ge(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));Ge(ge(`.trackerNewIssueForm {
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
`,"text/css"));Ge(ge("","text/css"));Ge(ge(`/* CSS for the issue pane component was influenced by generative AI
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
`,"text/css"));var ul=await(await fetch(ge(`#   Issue tracking - Workflow application definition ontology
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
`,"text/turtle"))).text(),pl=await(await fetch(ge(`#  Ontology for user interface hints and forms
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
`,"text/turtle"))).text(),Ue=z,ml="trackerOverlay",Ma={icon:B.iconBase+"noun_122196.svg",name:"issue",audience:[],label:function(e,n){let t=Ue.findTypeURIs(e);return t["http://www.w3.org/2005/01/wf/flow#Task"]||Ue.holds(e,o.wf("tracker"))?"issue":t["http://www.w3.org/2005/01/wf/flow#Tracker"]?"tracker":null},mintClass:o.wf("Tracker"),mintNew:async function(e,n){async function t(u,m){let g=u.concat(m).map(w=>w.why),b=Array.from(new Set(g)).map(w=>r.updater.update(u.filter(_=>_.why.sameTerm(w)),m.filter(_=>_.why.sameTerm(w))));return Promise.all(b)}let r=e.session.store,i;n.newInstance?i=r.sym(n.newInstance.doc().uri+"_state.ttl"):(n.newInstance=r.sym(n.newBase+"index.ttl#this"),i=r.sym(n.newBase+"state.ttl"));let a=n.newInstance,s=a.doc(),l=_e.currentUser();l&&r.add(a,o.dc("author"),l,s),r.add(a,o.rdf("type"),o.wf("Tracker"),s),r.add(a,o.dc("created"),new Date,s),r.add(a,o.wf("issueClass"),o.wf("Task"),s),r.add(a,o.wf("initialState"),o.wf("Open"),s),r.add(a,o.wf("stateStore"),i,s),r.add(a,o.wf("assigneeClass"),o.foaf("Person"),s),r.add(a,o.wf("stateStore"),i,i);let f=r.statementsMatching(void 0,void 0,void 0,s).concat(r.statementsMatching(void 0,void 0,void 0,i));try{await t([],f)}catch(u){return Fe("Error writing tracker configuration: "+u),Ir(n.div,e.dom,"Error creating the tracker configuration")}let p=e.dom,d=n.div.appendChild(p.createElement("div"));return d.innerHTML=`<h4>Success</h4>
    <p>Your <a href="${a.uri}">new tracker</a> has been made.
    Use the settings tab to configure it.
    </p>
    `,n},render:function(e,n){let t=n.dom,r=t.createElement("div");n.paneDiv=r,r.setAttribute("class","issuePane");let{errorSection:i,clearErrors:a,showError:s}=Rt(t,r);function l(H){let M=H?.querySelector("main");M?.parentNode&&M.nextSibling!==i&&M.parentNode.insertBefore(i,M.nextSibling)}function f(H,M){H?a():s(M)}async function p(H,M){async function Z(W){let $=H.any(W,o.owl("disjointUnionOf"),null,ne);if(!$)throw Fe(`Classification ${W} has no disjointUnionOf`),new Error(`Tracker configuration error: ${N.label(W)} is missing its allowed state list (owl:disjointUnionOf)`);if(!$.elements)throw Fe(`Classification ${W} has no array`),new Error(`Tracker configuration error: ${N.label(W)} has no array`);let Q=new Set($.elements.map(ae=>ae.uri)),le=new Set(H.each(null,o.rdfs("subClassOf"),W,ne).map(ae=>ae.uri)),K=[...le].filter(ae=>!Q.has(ae)).map(ae=>({action:"delete",st:Le(H.sym(ae),o.rdfs("subClassOf"),W,ne)})),de=[...Q].filter(ae=>!le.has(ae)).map(ae=>({action:"insert",st:Le(H.sym(ae),o.rdfs("subClassOf"),W,ne)}));return K.concat(de)}let ne=M.doc(),G=H.any(M,o.wf("issueClass")),j=H.each(M,o.wf("issueCategory")).concat([G]),R=[];for(let W of j)try{R=R.concat(await Z(W))}catch($){Fe("Error checking subclasses of "+N.label(W)+": "+$),s('Tracker settings need an update for "'+N.label(W)+'". Open Settings and make sure this status/category has a list of allowed values (for example Open, In Progress, Closed), then save and refresh.')}if(R.length){let W=R.filter(le=>le.action==="insert").map(le=>le.st),$=R.filter(le=>le.action==="delete").map(le=>le.st);Hn("Damage:",R);let Q=`${R.length} total (${W.length} add, ${$.length} remove)`;confirm(`Apply subclass fixes in tracker config? ${Q}.`)&&await H.updater.update($,W)}}function c(H,M){let Z=Ue.any(H,o.wf("issueClass"));M=M||Z;let ne=M.sameTerm(Z),G=Ue.any(M,o.owl("disjointUnionOf"));if(!G)return Fe(`Configuration error: state ${Z} does not have a disjointUnionOf`),s(`Configuration error: state ${Z} does not have substates`);let j=G.elements;ne&&j.length>2&&(j=j.filter(D=>Ue.holds(D,o.rdfs("subClassOf"),o.wf("Open"))||D.sameTerm(o.wf("Open"))));async function R(D,K){let V=Sa(D,M),de=Ue.the(D,o.wf("tracker"),null,D.doc()),ae=Ue.any(de,o.wf("stateStore"));if(!K.sameTerm(V)){try{await Ue.updater.update([Le(D,o.rdf("type"),V,ae)],[Le(D,o.rdf("type"),K,ae)]),a()}catch(pe){Fe("Unable to change issue state: "+pe),s("Unable to change issue state")}le.refresh()}}function W(D){return!!Ue.findTypeURIs(D)[o.wf("Open").uri]}let $={columnDropHandler:R,filter:ne?null:W};$.sortBy=o.dct("created"),$.sortReverse=!0;function Q(D){return Ua(D,n)}let le=Ta(t,j,Q,$);return le.classList.add("trackerBoard"),le}function d(H,M){return re.button(t,B.iconBase+"noun_479395.svg","refresh table",async ne=>{try{await Ue.fetcher.load(H,{force:!0,clearPreviousData:!0}),a()}catch(G){Fe("Unable to refresh table: "+G),s("Unable to refresh the table. Please try again, and if this continues, refresh the page.");return}re.refreshTree(M)})}function u(H){function M(){let V=new bt;return j.pat.optional.push(V),V}let Z=Ue.any(e,o.wf("issueClass")),ne=Ue.each(H,o.wf("issueCategory")),G=["issue","state","created"],j=new vn(N.label(e));for(let V=0;V<ne.length;V++)G.push("_cat_"+V);let R={};G.forEach(function(V){j.vars.push(R[V]=an(V))}),j.pat.add(R.issue,o.wf("tracker"),H),j.pat.add(R.issue,o.dct("created"),R.created),j.pat.add(R.issue,o.rdf("type"),R.state),j.pat.add(R.state,o.rdfs("subClassOf"),Z),j.pat.optional=[];for(let V=0;V<ne.length;V++){let de=M();de.add(R.issue,o.rdf("type"),R["_cat_"+V]),de.add(R["_cat_"+V],o.rdfs("subClassOf"),ne[V])}let W=Ue.any(H,o.wf("propertyList"));if(W){let V=W.elements;for(let de=0;de<V.length;de++){let ae=V[de],pe="_prop_"+de;ae.uri.indexOf("#")>=0&&(pe=ae.uri.split("#")[1]);let he=M();j.vars.push(R[pe]=an(pe)),he.add(R.issue,ae,R[pe])}}let $={};Ue.each(void 0,o.rdfs("subClassOf"),Z).forEach(function(V){(Ue.holds(V,o.rdfs("subClassOf"),o.wf("Open"))||V.sameTerm(o.wf("Open")))&&($[V.uri]=!0)});function le(V){let de=we(V);Bt(de,n)}let D=On(t,{query:j,keyVariable:"?issue",sortBy:"?created",sortReverse:!0,hints:{"?issue":{linkFunction:le,label:"Title"},"?created":{cellFormat:"shortDate"},"?state":{initialSelection:$,label:"Status"}}}),K=Ue.any(e,o.wf("stateStore"));return D.appendChild(d(K,D)),D.classList.add("trackerBoardTable"),D}function m(H){let M=t.createElement("div"),Z=_e.currentUser(),ne={div:M,dom:t,noun:"tracker",statusArea:M,me:Z,refreshTarget:H},j=[n.session.paneRegistry.byName("issue")];return Bn.newThingUI(ne,n,j),M.classList.add("trackerCreationControlContainer"),M}function g(H){let M=t.createElement("div"),Z={dom:t,div:M,noun:"tracker"};return De.registrationList(Z,{public:!0,private:!0,type:H}).then(ne=>{M.appendChild(m(M))}),M}function h(H){let M=t.createElement("div");M.appendChild(Fa(t,H));let Z=Ue.any(H,o.wf("issueClass")),ne=[S,Z].concat(Ue.each(H,o.wf("issueCategory"))),G=M.appendChild(t.createElement("div"));re.renderNameValuePair(t,Ue,G,null,"Default view").appendChild(re.makeSelectForOptions(t,Ue,H,o.wf("defaultView"),ne,{},H.doc()));let R={dom:t,div:M,noun:"tracker"};return De.registrationControl(R,H,o.wf("Tracker")).then(W=>{let $=o.wf("TrackerSettingsForm");Xe(cl,Ue,$.doc().uri,"text/turtle"),re.appendForm(t,M,{},H,$,H.doc(),f)}),M}function b(){function H(W,$){if(W.innerHTML="",$.sameTerm(I))W.appendChild(c(E));else if($.sameTerm(S))W.appendChild(u(E));else if($.sameTerm(A))W.appendChild(h(E));else if($.sameTerm(O))W.appendChild(g(o.wf("Tracker")));else if(Ue.holds(E,o.wf("issueCategory"),$)||Ue.holds(E,o.wf("issueClass"),$))W.appendChild(c(E,$));else throw new Error("Unexpected tab type: "+$)}let M=Ue.any(E,o.wf("issueClass")),Z=[O,S,M].concat(Ue.each(E,o.wf("issueCategory")));Z.push(A);let ne=Ue.any(E,o.wf("defaultView"),null,E.doc())||S,G={renderMain:H,items:Z,selectedTab:ne},j=O.doc();return Ue.add(O,o.rdfs("label"),"My Trackers",j),Ue.add(A,o.rdfs("label"),"Settings",j),Ue.add(M,o.rdfs("label"),"By State",j),qn.tabWidget(G)}async function w(){if(E=Ue.any(e,o.wf("tracker")),!E)throw new Error("This issue "+e+"has no tracker");try{let M=await n.session.store.fetcher.load(E.doc())}catch(M){return Fe(`Failed to load tracker config: ${E.doc()}: ${M}`),s("Failed to load tracker config")}let H=Ue.any(E,o.wf("stateStore"));if(!H)return Fe("Tracker has no state store: "+E),s("Tracker has no state store: "+E);try{await n.session.store.fetcher.load(e)}catch(M){return Fe(`Failed to load issue state: ${H}: ${M}`),s("Failed to load issue state")}r.appendChild(Er(e,n)),q.addDownstreamChangeListener(H,function(){re.refreshTree(r)})}async function _(){function H(Q){re.refreshTree(r),Bt(Q,n),j.disabled=!1}E=e;try{await p(Ue,E)}catch(Q){Fe("Error fixing subclasses in config: "+Q),s("Error fixing subclasses in config")}let M=Ue.any(e,o.wf("issueClass"));if(!M){Fe("This tracker has no issueClass"),s("Tracker settings are incomplete: missing Issue Class. Open Settings, choose an Issue Class, then refresh.");return}let Z=Ue.any(e,o.wf("stateStore"));if(!Z){Fe("This tracker has no stateStore"),s("Tracker settings are incomplete: missing State Store. Open Settings, save the tracker state settings, then refresh.");return}let ne=t.createElement("h2");ne.setAttribute("style","font-size: 150%"),r.appendChild(ne);let G=N.label(M);ne.appendChild(t.createTextNode(G+" list"));let j=t.createElement("button"),R=t.createElement("div");j.setAttribute("type","button"),j.classList.add("trackerIssuePaneNewIssueButton"),R.classList.add("trackerIssuePaneNewIssueButtonContainer"),R.appendChild(j),r.appendChild(R);let W=t.createElement("img");W.classList.add("trackerIssuePaneNewIssueButtonImage"),W.setAttribute("src",B.iconBase+"noun_19460_green.svg"),j.appendChild(W);let $=t.createElement("span");$.classList.add("trackerIssuePaneNewIssueButtonText"),$.innerHTML="New "+G,j.appendChild($),j.addEventListener("click",function(Q){j.disabled=!0,R.appendChild(Mt(t,Ue,E,null,H))},!1),n.session.store.fetcher.load([Z]).then(function(Q){let le=b(E);r.appendChild(le),l(le),le.refresh||(Hn("No refresh function on the tableDiv?!"),s("There is no way to refresh the table view. Please refresh the whole page to see updates to the issues.")),r.appendChild(La(e,n)),q.addDownstreamChangeListener(Z,le.refresh)}).catch(function(Q){Fe("Cannot load state store: "+Q),s("Cannot load state store")})}let I=o.wf("BoardView"),S=o.wf("TableView"),A=o.wf("SettingsView"),O=o.wf("InstancesView"),q=Ue.updater,F=Ue.findTypeURIs(e),E,X=o.wf("").doc();Ue.holds(void 0,void 0,void 0,X)||Xe(ul,Ue,X.uri,"text/turtle");let J=o.ui("").doc();Ue.holds(void 0,void 0,void 0,J)||Xe(pl,Ue,J.uri,"text/turtle"),F["http://www.w3.org/2005/01/wf/flow#Task"]||Ue.holds(e,o.wf("tracker"))?w().then(()=>it("Single issue rendered")).catch(H=>{Fe("Single issue render failed: "+H),s("Could not load this issue view. Please refresh, and if this continues, check tracker settings.")}):F["http://www.w3.org/2005/01/wf/flow#Tracker"]?_().then(()=>it("Tracker rendered")).catch(H=>{Fe("Tracker render failed: "+H),s("Could not load this tracker. Open Settings to verify Issue Class, then refresh.")}):(Fe("Error: Issue pane: No evidence that "+e+" is either a bug or a tracker."),s("This item is not recognized as an issue or tracker."));let oe,ce=r.appendChild(t.createElement("div"));return ce.classList.add(ml),n.overlay=ce,_e.checkUser().then(H=>{if(H){n.me=H;return}oe=De.loginStatusBox(t,M=>{M?(n.me=Ue.sym(M),r.removeChild(oe)):n.me=null}),oe.classList.add("trackerIssuePaneLoginButton"),r.insertBefore(oe,r.firstChild),n.statusArea||(n.statusArea=r.insertBefore(t.createElement("div"),r.firstChild))}),r}};Ct(ge(`/* Shared utility variables for component styles.
   These are kept here (instead of in dev-global.css) so they can be
   bundled with component styles and reused consistently across the app.
*/

/* Utility helper classes */

/* different from mashlib .btn-primary:active {
  box-shadow: var(--box-shadow-active);
} */
`,"text/css"));Ct(ge(`/* Focus indicator for keyboard navigation */
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
`,"text/css"));Ct(ge(`/* Solid-UI form */

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
}`,"text/css"));var kn=o,Tr={icon:B.iconBase+"noun_99101.svg",name:"contact",global:!1,label(e,n){let t=n.session.store.findTypeURIs(e);return t[kn.vcard("Organization").uri]?"Contact":t[kn.vcard("AddressBook").uri]?"Address book":null},mintClass:o.vcard("AddressBook"),mintNew:(e,n)=>import("./part-6HZ7OTQL.js").then(t=>t.mintNewAddressBook(e,n)),render(e,n,t={}){let r=n.dom,i=n.session.store,a=r.createElement("div");return An.preventBrowserDropEvents(r),a.setAttribute("class","contactPane"),_i(a,1e3),s().then(()=>Ci("Contacts pane rendered for "+e),l=>ar(a,r,l.message||""+l)).catch(l=>{ar(a,r,l.message||""+l)}),a;async function s(){let l=i.findTypeURIs(e);if(l[kn.vcard("Individual").uri]||l[kn.foaf("Person").uri]||l[kn.schema("Person").uri]||l[kn.vcard("Organization").uri]||l[kn.schema("Organization").uri])try{let{renderIndividual:f}=await import("./part-Z3SORINP.js");await f(r,a,e,n)}catch(f){throw ir("Error rendering contact. Stack: "+f),new Error("Failed to render contact: "+(f.message||f))}else if(l[kn.vcard("AddressBook").uri]){await import("./part-JQJYOOMT.js");let f=r.createElement("contacts-pane-address-book");f.book=e,f.options={},f.dataBrowserContext=n,f.paneOptions=t,a.appendChild(f)}else throw ir("No evidence that "+e+" is anything to do with contacts."),new Error("This does not seem to be a contact or address book.");return a}}};Oe(ge(`.pad-layout {\r
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
`,"text/css"));var fl={icon:B.iconBase+"noun_79217.svg",name:"pad",audience:[o.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/pad#Notepad"]?"Notepad":null},mintClass:o.pad("Notepad"),mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("notepad mintNew:  Invalid userid");let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();t.add(i,o.rdf("type"),o.pad("Notepad"),a),t.add(i,o.dc("title"),"Shared Notes",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let s=t.sym(i.uri+"_line0");return t.add(i,o.pad("next"),s,a),t.add(s,o.pad("next"),i,a),t.add(s,o.dc("author"),n.me,a),t.add(s,o.sioc("content"),"",a),new Promise(function(l,f){if(!r){f(new Error("Have no updater"));return}r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(p,c,d){c?l(n):f(new Error("FAILED to save new tool at: "+p+" : "+d))})})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=function($,Q){$||q.appendChild(re.errorMessageBlock(r,Q,"pink"))},s=function($){for(;$.firstChild;)$.removeChild($.firstChild);return $},l=function($,Q,le){let D=vt(),K=tn("http://www.w3.org/ns/auth/acl#"),V=D.sym(Q+"#a1"),de=D.sym(Q),ae=D.sym($);return D.add(V,o.rdf("type"),K("Authorization"),de),D.add(V,K("accessTo"),ae,de),D.add(V,K("agent"),_,de),D.add(V,K("mode"),K("Read"),de),D.add(V,K("mode"),K("Write"),de),D.add(V,K("mode"),K("Control"),de),V=D.sym(Q+"#a2"),D.add(V,o.rdf("type"),K("Authorization"),de),D.add(V,K("accessTo"),ae,de),D.add(V,K("agentClass"),o.foaf("Agent"),de),D.add(V,K("mode"),K("Read"),de),le&&D.add(V,K("mode"),K("Write"),de),gt(de,D,Q,"text/turtle")},f=function(Q,le,D){let K=i.any(we(Q),we("http://www.iana.org/assignments/link-relations/acl"));if(!b)throw new Error("Have no fetcher");if(K){let V=l(Q,K.uri,le);return b.webOperation("PUT",K.uri,{data:V,contentType:"text/turtle"}).then(()=>D(!0)).catch(de=>{D(!1,de.message)})}else return b.load(Q).catch(V=>{D(!1,"Getting headers for ACL: "+V)}).then(()=>{let V=i.any(we(Q),we("http://www.iana.org/assignments/link-relations/acl"));if(!V)throw new Error("No Link rel=ACL header for "+Q);let de=l(Q,V.uri,le);return b.webOperation("PUT",V.uri,{data:de,contentType:"text/turtle"})}).then(()=>D(!0)).catch(V=>{D(!1,V.message)})},p=function(){let $=q.appendChild(r.createElement("button"));return $.textContent="Start another pad",$.addEventListener("click",function(){return c(e,j,"pad")}),$},c=function(Q,le,D){let K=s(le),V={noun:"notepad"};K.appendChild(De.newAppInstance(r,V,(he,xe)=>d(new li(he||xe)))),K.appendChild(r.createElement("hr"));let de=K.appendChild(r.createElement("p"));de.textContent="Where would you like to store the data for the "+D+"?  Give the URL of the directory where you would like the data stored.";let ae=K.appendChild(r.createElement("input"));ae.setAttribute("type","text"),ae.size=80,ae.label="base URL",ae.autocomplete="on",K.appendChild(r.createElement("br"));let pe=K.appendChild(r.createElement("button"));pe.textContent="Start new "+D+" at this URI",pe.addEventListener("click",function(he){let xe=ae.value;xe.slice(-1)!=="/"&&(xe+="/"),u(Q,xe)})},d=function($){let Q=i.any($,o.space("uriPrefix"));Q?Q=Q.value:Q=$.uri.split("#")[0],Q.slice(-1)!=="/"&&(ht.error(h+": No / at end of uriPrefix "+Q),Q=Q+"/");let le=new Date;Q+=h+"/id"+le.getTime()+"/",u(S,Q)},u=function($,Q){let D=we($.uri.split("#")[0]),K=i.sym(Q+"pad.ttl"),V=i.sym(Q+"index.html"),de=[{local:"index.html",contentType:"text/html"}],ae=i.sym(K.uri+"#thisPad"),pe=[],he;for(he=0;he<de.length;he++){let xe=de[he];(function(ve){pe.push(function(){let Ne=Q+ve.local;console.log("Copying "+D+ve.local+" to "+Ne);let y=function(){f(Ne,!1,function(v,x){v?pe.shift()():(a(v,"FAILED to set ACL "+Ne+" : "+x),console.log("FAILED to set ACL "+Ne+" : "+x))})};if(!i.fetcher)throw new Error("Store has no fetcher");i.fetcher.webCopy(D+ve.local,Q+ve.local,ve.contentType).then(()=>_e.checkUser()).then(v=>{_=v,y()}).catch(v=>{console.log("FAILED to copy "+D+ve.local+" : "+v.message),a(!1,"FAILED to copy "+D+ve.local+" : "+v.message)})})})(xe)}pe.push(function(){if(i.add(ae,o.rdf("type"),I("Notepad"),K),i.add(ae,o.dc("created"),new Date,K),_&&i.add(ae,o.dc("author"),_,K),i.add(ae,I("next"),ae,K),i.add(ae,o.space("inspiration"),$,A),i.add(ae,o.space("inspiration"),$,K),!w)throw new Error("Have no updater");w.put(K,i.statementsMatching(void 0,void 0,void 0,K),"text/turtle",function(Se,Re,ve){Re?pe.shift()():(a(Re,"FAILED to save new notepad at: "+K.uri+" : "+ve),console.log("FAILED to save new notepad at: "+K.uri+" : "+ve))})}),pe.push(function(){f(K.uri,!0,function(xe,Se){a(xe,"Failed to set Read-Write ACL on pad data file: "+Se),xe&&pe.shift()()})}),pe.push(function(){let xe=q.appendChild(r.createElement("p"));xe.classList.add("pad-new-instance-message"),xe.innerHTML="Your <a href='"+V.uri+"'><b>new notepad</b></a> is ready. <br/><br/><a href='"+V.uri+"'>Go to new pad</a>"}),pe.shift()()},m=function($){console.log("showResults()"),_=_e.currentUser(),_e.checkUser().then(D=>{_=D});let Q=i.any(e,o.dc("title"))||i.any(e,o.vcard("fn"));t.solo&&typeof window<"u"&&Q&&(window.document.title=Q.value),W.exists=$,O=Pn.notepad(r,A,e,_,W),J.appendChild(O);let le=i.any(e,o.meeting("parentMeeting"))||e;if(Pn.manageParticipation(r,H,A,le,_,W),!i.updater)throw new Error("Store has no updater");i.updater.setRefreshHandler(A,O.reloadAndSync)},g=function(){if(!b)throw new Error("Have no fetcher");b.nowOrWhenFetched(A.uri,void 0,function($,Q,le){if($)s(J),i.holds(e,o.rdf("type"),o.wf("TemplateInstance"))&&c(e,J,"pad"),m(!0),M.appendChild(p());else if(le.status===404){if(console.log("Initializing results file "+A),!w)throw new Error("Have no updater");w.put(A,[],"text/turtle",function(D,K,V){K?(s(J),m(!1)):(a(K,"FAILED to create results file at: "+A.uri+" : "+V),console.log("FAILED to craete results file at: "+A.uri+" : "+V))})}else a($,"FAILED to read results file: "+Q)})},h="app-pad.timbl.com",b=i.fetcher,w=i.updater,_,I=tn("http://www.w3.org/ns/pim/pad#"),S=e,A=e.doc(),O,q=r.createElement("div"),F=q.appendChild(r.createElement("div"));F.className="pad-layout";let E=F.appendChild(r.createElement("div"));E.className="pad-row",E.appendChild(r.createElement("div")),E.appendChild(r.createElement("div")),E.appendChild(r.createElement("div"));let X=F.appendChild(r.createElement("div"));X.className="pad-row";let J=X.appendChild(r.createElement("div"));J.className="pad-main";let oe=F.appendChild(r.createElement("div"));oe.className="pad-row pad-controls";let ce=oe.appendChild(r.createElement("div"));ce.className="pad-cell";let H=oe.appendChild(r.createElement("div"));H.className="pad-cell";let M=oe.appendChild(r.createElement("div"));M.className="pad-cell";let Z=F.appendChild(r.createElement("div"));Z.className="pad-row";let ne=Z.appendChild(r.createElement("div")),G=F.appendChild(r.createElement("div"));G.className="pad-row";let j=G.appendChild(r.createElement("div")),R=F.appendChild(r.createElement("div"));R.setAttribute("class","pad-row naviMenu"),R.appendChild(r.createElement("div")),R.appendChild(r.createElement("div")),R.appendChild(r.createElement("div"));let W={statusArea:ne,timingArea:ce};return g(),q}},Ra=fl;var Ke=o,Da={icon:B.iconBase+"noun_106746.svg",name:"transaction",audience:[Ke.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return r["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]?"$$":t.any(e,o.qu("amount"))?"$$$":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.session.store,i=r.fetcher,a=tn("http://www.w3.org/2000/10/swap/pim/qif#"),s=tn("http://www.w3.org/ns/pim/trip#"),l=t.createElement("div");l.setAttribute("class","transactionPane");let f=function(E,X){X===void 0&&(X="color: grey");let J=t.createElement("pre");J.setAttribute("style",X),l.appendChild(J),J.appendChild(t.createTextNode(E))},p=function(E){return f(E,"color: #100; background-color: #fee")},c=r.statementsMatching(e),d=r.statementsMatching(void 0,void 0,e),u=r.findTypeURIs(e),m={},g=function(F){m[F.uri]=!0},h=function(F){let E="padding: 0.5em 1.5em 1em 1.5em; ";if(F){let X=r.any(F,o.ui("backgroundColor"));X&&(E+="background-color: "+X.value+"; ")}l.setAttribute("style",E)},b=function(F){if(F===void 0)return"";let E=""+F;return E.indexOf(".")>=0?E.split(".")[0]+"."+(E.split(".")[1]+"00").slice(0,2):E+".00"},w=function(E,X){let J=t.createElement("td");return 0+E===0&&X||(J.textContent=b(E)),J.setAttribute("style","width: 6em; text-align: right; "),J},_=function(E){let X=t.createElement("th");return X.textContent=E,X.setAttribute("style","text-align: right; "),X},I=function(F,E){let X=r.any(F,Ke.qu("date")),J=r.any(E,Ke.qu("date"));if(X!==void 0&&J!==void 0){if(X.value<J.value)return-1;if(X.value>J.value)return 1}return F.uri<E.uri?-1:F.uri>E.uri?1:0},S=function(F,E,X){let oe=F.session.paneRegistry.byName(X).render(E,F);return oe.setAttribute("style","border: 0.1em solid green;"),oe},A=function(F,E,X,J,oe){let ce=E.parentNode.children;if(oe)for(let ne=ce.length-1;ne>=0;ne--)ce[ne].expanded&&(ce[ne].parentNode.removeChild(ce[ne].expanded),ce[ne].expanded=!1);let H=F.createElement("tr"),M=H.appendChild(F.createElement("td"));M.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let Z=E.children.length;E.nextSibling?E.parentNode.insertBefore(H,E.nextSibling):E.parentNode.appendChild(H),E.expanded=H,M.setAttribute("colspan",""+Z),M.appendChild(S(n,X,J))},O=function(F,E,X,J,oe){E.expanded?(E.parentNode.removeChild(E.expanded),E.expanded=!1):A(F,E,X,J,oe)},q=function(F,E,X){let J=F.createElement("table");J.setAttribute("style","padding-left: 0.5em; padding-right: 0.5em; font-size: 9pt; width: 85%;");let oe=function(H,M){let Z=H.createElement("tr"),ne=function(K,V){let de="'padding-left: 0.5em; padding-right: 0.5em; padding-top: 0.1em;";if(V){let ae=r.any(V,o.ui("backgroundColor"));ae&&(de+="background-color: "+ae.value+"; ")}K.setAttribute("style",de)},G=r.any(M,Ke.qu("toAccount"));ne(Z,G);let j=Z.appendChild(H.createElement("td")),R=r.any(M,Ke.qu("date"));j.textContent=R?R.value.slice(0,10):"???",j.setAttribute("style","width: 7em;");let W=Z.appendChild(H.createElement("td"));W.setAttribute("style","width: 36em;");let $=r.any(M,Ke.qu("payee"));W.textContent=$?$.value:"???";let Q=W.appendChild(H.createElement("a"));Q.textContent=" \u279C",Q.setAttribute("href",M.uri);let le=Z.appendChild(H.createElement("td")),D=r.any(M,Ke.qu("in_USD"));return le.textContent=D?b(D.value):"???",le.setAttribute("style","width: 6em; text-align: right; "),Z.addEventListener("click",function(K){O(H,Z,M,"transaction",!K.shiftKey)},!1),Z},ce=X?E.filter(X):E.slice();ce.sort(I);for(let H=0;H<ce.length;H++)J.appendChild(oe(F,ce[H]));return J};if(u["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]||r.any(e,Ke.qu("toAccount"))){g(Ke.rdf("type"));let F=r.any(e,o.qu("toAccount"));h(F),F||p("(Error: There is no bank account known for this transaction <"+e.uri+`>,
 -- every transaction needs one.)`);let E=null,X=r.any(e,o.qu("accordingTo"));X===void 0?p("(Error: There is no back link to the original data source foir this transaction <"+e.uri+`>,
so I can't tell how to annotate it.)`):(E=X!==void 0?r.any(X,o.qu("annotationStore")):null,E===void 0&&p(`(There is no annotation document for this statement
<`+X.uri+`>,
so you cannot classify this transaction.)`));let J=t.createElement("div");J.setAttribute("style","float:right"),l.appendChild(J);let oe=function(ne,G){g(ne);let j=r.any(e,ne);if(!j)return;let R=t.createElement("a");R.setAttribute("href",j.uri),R.setAttribute("style","float:right"),J.appendChild(R).textContent=G||N.label(j),J.appendChild(t.createElement("br"))};oe(o.qu("toAccount")),oe(o.qu("accordingTo"),"Statement"),oe(s("trip"));let ce=t.createElement("table");l.appendChild(ce);let M=["date","payee","amount","in_USD","currency"].map(a).map(function(ne){g(ne);let G=r.any(e,ne),j=G?N.labelForXML(G):"";return'<tr><td style="text-align: right; padding-right: 0.6em">'+N.labelForXML(ne)+'</td><td style="font-weight: bold;">'+j+"</td></tr>"}).join(`
`);ce.innerHTML=M;let Z=function(ne,G){ne||p(`Sorry, failed to save your change:
`+G)};E&&r.fetcher.nowOrWhenFetched(E.uri,e,function(ne,G){ne||p("Cannot load store "+E+" "+G);let j=r.any(E,Ke.qu("calendarYear")),R=function(){l.insertBefore(re.makeSelectForNestedCategory(t,r,e,o.qu("Classified"),E,Z),ce.nextSibling)};r.any(void 0,Ke.rdfs("subClassOf"),Ke.qu.Classified)?R():j?i.load(j).then(function(D){i.load(r.each(j,Ke.rdfs("seeAlso"))).then(function(){R()}).catch(function(K){console.log("Error loading background data: "+K)})}).catch(function(D){console.log("Error loading calendarYear: "+D)}):console.log("Can't get categories, because no calendarYear"),l.appendChild(re.makeDescription(t,r,e,o.rdfs("comment"),E,Z));let W=r.statementsMatching(void 0,s("trip"),void 0,E).map(function(D){return D.object}),$=r.each(void 0,o.rdf("type"),s("Trip"));W=W.concat($).sort(),W=function(D,K,V,de){let ae=K.map(function(pe){let he=D.any(pe,V);return he=he?he.value:"9999-12-31",[he,pe]});return ae.sort(),de&&ae.reverse(),ae.map(function(pe){return pe[1]})}(r,W,o.cal("dtstart"),!0),W.length>1&&l.appendChild(re.makeSelectForOptions(t,r,e,s("trip"),W,{multiple:!1,nullLabel:"-- what trip? --",mint:"New Trip *",mintClass:s("Trip"),mintStatementsFun:function(D){let K=[];return K.push(Le(D,o.rdf("type"),s("Trip"),D.doc())),K}},E,Z)),l.appendChild(t.createElement("br"));let le=n.getOutliner(t);g(Ke.rdfs("comment")),re.attachmentList(t,e,l),g(Ke.wf("attachment")),l.appendChild(t.createElement("tr")).setAttribute("style","height: 1em"),le.appendPropertyTRs(l,c,!1,function(D,K){return!(D.uri in m)}),le.appendPropertyTRs(l,d,!0,function(D,K){return!(D.uri in m)})})}else u["http://www.w3.org/ns/pim/trip#Trip"]&&function(){let E={},X={},J={},oe=r.each(void 0,s("trip"),e),ce=oe.map(function(H){return H.doc()});r.fetcher.load(ce).then(function(){oe.forEach(function(D){let K=r.the(D,Ke.qu("date")),V=K?(""+K.value).slice(0,4):"????",de=r.the(D,Ke.rdf("type"));if(de||(de=o.qu("ErrorNoType")),de&&de.uri){let ae=de.uri;X[V]||(X[V]=0),J[V]||(J[V]={}),E[ae]||(E[ae]=0),J[V][ae]||(J[V][ae]=0);let pe=r.any(D,o.qu("in_USD"));if(pe||p("@@ No amount in USD: "+pe+" for "+D),pe){let he=parseFloat(pe.value);E[ae]+=he,J[V][ae]+=he,X[V]+=he}}});let H=[],M=0,Z=[],ne;for(let D in J)Object.prototype.hasOwnProperty.call(J,D)&&Z.push(D);Z.sort();let G=Z.length,j,R=l.appendChild(t.createElement("table"));if(R.setAttribute("style","font-size: 120%; margin-left:auto; margin-right:1em; margin-top: 1em; border: 0.05em solid gray; padding: 1em;"),G>1){let D=R.appendChild(t.createElement("tr"));for(D.appendChild(_("")),ne=0;ne<G;ne++)D.appendChild(_(Z[ne]));D.appendChild(_("total"))}for(let D in E)Object.prototype.hasOwnProperty.call(E,D)&&(H.push(D),M+=E[D]);H.sort();let W,$,Q;for(let D=0;D<H.length;D++){let K=r.sym(H[D]);if(W=R.appendChild(t.createElement("tr")),$=W.appendChild(t.createElement("td")),$.textContent=N.label(K),G>1)for(ne=0;ne<G;ne++)Q=J[Z[ne]][H[D]],j=W.appendChild(w(Q,!0));W.appendChild(w(E[H[D]],!0))}if(H.length>1){if(W=R.appendChild(t.createElement("tr")),W.appendChild(_("total")),G>1)for(ne=0;ne<G;ne++)Q=X[Z[ne]],j=W.appendChild(w(Q?b(Q):""));j=W.appendChild(w(M)),j.setAttribute("style","font-weight: bold; text-align: right;")}let le=q(t,oe);le.setAttribute("style","margin-left:auto; margin-right:1em; margin-top: 1em; border: padding: 1em;"),l.appendChild(le),re.attachmentList(t,e,l)}).catch(function(H){p("Error loading transactions: "+H)})}();return l}};var hl=o,Ba={icon:B.iconBase+"noun_142708.svg",name:"period",audience:[hl.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]?"Period":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","periodPane");let s=function(u,m){m||(m="color: grey;");let g=t.createElement("pre");g.setAttribute("style",m),a.appendChild(g),g.appendChild(t.createTextNode(u))},l=function(u){return s("\u2713 "+u,"color: #010; background-color: #efe")},f=function(u){return s(u,"color: #100; background-color: #fee")},p=function(){let d=r.any(e,i.cal("dtstart"));d===void 0&&f("(Error: There is no start date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let u=r.any(e,i.cal("dtend"));u===void 0&&f("(Error: There is no end date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let m={};(function(G){m[G.uri]=!0})(i.rdf("type"));let h=function(G){return!!(G&&G>=d&&G<u)},b=function(G){let j=""+G;return j.indexOf(".")>=0?j.split(".")[0]+"."+(j.split(".")[1]+"00").slice(0,2):j+".00"},w=function(G){return h(r.any(G,i.qu("date")))},_=function(G,j){let R=r.any(G,i.qu("date")),W=r.any(j,i.qu("date"));if(R!==void 0&&W!==void 0){if(R.value<W.value)return-1;if(R.value>W.value)return 1}return G.uri<j.uri?-1:G.uri>j.uri?1:0},I=a.appendChild(t.createElement("h2"));I.textContent="Period "+d.value.slice(0,10)+" - "+u.value.slice(0,10);let S=function(G,j,R){let $=G.session.paneRegistry.byName(R).render(j,G);return $.setAttribute("style","border: 0.1em solid green;"),$},A=function(G,j,R,W,$){let Q=j.parentNode.children;if($)for(let V=Q.length-1;V>=0;V--)Q[V].expanded&&(Q[V].parentNode.removeChild(Q[V].expanded),Q[V].expanded=!1);let le=G.createElement("tr"),D=le.appendChild(G.createElement("td"));D.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let K=j.children.length;j.nextSibling?j.parentNode.insertBefore(le,j.nextSibling):j.parentNode.appendChild(le),j.expanded=le,D.setAttribute("colspan",""+K),D.appendChild(S(n,R,W))},O=function(G,j,R,W,$){j.expanded?(j.parentNode.removeChild(j.expanded),j.expanded=!1):A(G,j,R,W,$)},q=function(G,j){let R=G.createElement("table");R.setAttribute("style","margin-left: 100; font-size: 9pt; width: 85%;");let W=function(Q,le){let D=Q.createElement("tr"),K=function(ve,Ne){let y="margin-left: 8em; padding-left: 5em;";if(Ne){let v=r.any(Ne,o.ui("backgroundColor"));v&&(y+="background-color: "+v.value+"; ")}ve.setAttribute("style",y)},V=r.any(le,i.qu("toAccount"));K(D,V);let de=D.appendChild(Q.createElement("td")),ae=r.any(le,i.qu("date"));de.textContent=ae?ae.value.slice(0,10):"???",de.setAttribute("style","width: 7em;");let pe=D.appendChild(Q.createElement("td"));pe.setAttribute("style","width: 36em;");let he=r.any(le,i.qu("payee"));pe.textContent=he?he.value:"???";let xe=pe.appendChild(Q.createElement("a"));xe.textContent=" \u279C",xe.setAttribute("href",le.uri);let Se=D.appendChild(Q.createElement("td")),Re=r.any(le,i.qu("in_USD"));return Se.textContent=Re?b(Re.value):"???",Se.setAttribute("style","width: 6em; text-align: right; "),D.addEventListener("click",function(ve){O(Q,D,le,"transaction",!ve.shiftKey)},!1),D},$=j.filter(w);$.sort(_);for(let Q=0;Q<$.length;Q++)R.appendChild(W(G,$[Q]));return R},F={"http://www.w3.org/2000/10/swap/pim/qif#Transaction":!0,"http://www.w3.org/2000/10/swap/pim/qif#Unclassified":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedOutgoing":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedIncome":!0},E=r.findMemberURIs(i.qu("Transaction")),X=[],J=[],oe,ce;for(let G in E)if(Object.prototype.hasOwnProperty.call(E,G)){ce=r.sym(G);let j=r.each(ce,i.rdf("type")),R=!1;for(let W=0;W<j.length;W++){let $=j[W];F[$.uri]===void 0&&(R=!0)}R||(oe=r.any(ce,i.qu("in_USD")),oe===void 0&&(oe=r.any(ce,i.qu("amount"))),oe&&(""+oe.value).indexOf("-")>=0?J.push(r.sym(G)):X.push(r.sym(G)))}let H,M;X.length?(H=q(t,X),M=H.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Income"+(M<4?"":" ("+M+")"),a.appendChild(H)):l("No unclassified income"),J.length?(H=q(t,J),M=H.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Outgoings"+(M<4?"":" ("+M+")"),a.appendChild(H)):l("No unclassified outgoings ");let Z=function(G){let j=r.findSubClassesNT(i.qu("Transaction"));for(let R in j)if(Object.prototype.hasOwnProperty.call(j,R)&&R.slice(1,-1).split("#")[1]===G)return r.sym(R.slice(1,-1));return null},ne=function(G,j){let R=Z(G),W,$=[],Q=0;if(!R)return f("Error: No category correspnding to "+G),null;let le=r.each(void 0,i.rdf("type"),R);for(let D=0;D<le.length;D++)r.any(le[D],j)||$.push(le[D]);return $.length&&(W=q(t,$),Q=W.children.length,a.appendChild(t.createElement("h3")).textContent=N.label(R)+" with no "+N.label(j)+(Q<4?"":" ("+Q+")"),a.appendChild(W)),Q};ne("Reimbursables",i.trip("trip"))===0&&l("Reimbursables all have trips"),ne("Other_Inc_Speaking",i.trip("trip"))===0&&l("Speaking income all has trips")};if(r.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]){let d=r.each(e,i.rdfs("seeAlso"));console.log("Loading before render: "+d.length),r.fetcher.load(d).then(function(){p()})}return a}};var Oa=new Set;function Ar(e){let n=String(e);if(Oa.has(n)||typeof document>"u")return;Oa.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}var gl=await(await fetch(ge(`@prefix : <http://www.w3.org/ns/ui#> .
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
`,"text/turtle"))).text();Ar(ge(`/* Some of the CSS code below was generated by Generative AI (GPT-5.3-Codex in GitHub Copilot) based on the following prompt:
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
}`,"text/css"));Ar(ge(`:root {
  --icon-xs: 1.5em;
  --icon-base: 2em;
  --icon-xl: 3.1em;
}`,"text/css"));var{typeIndex:bl}=je,{loadTypeIndexesFor:wl}=bl,yl="https://meet.jit.si/",vl=o,qa={icon:B.iconBase+"noun_66617.svg",name:"meeting",audience:[vl.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=o;return t.holds(e,r.rdf("type"),r.meeting("Meeting"))?"Meeting":null},mintClass:o.meeting("Meeting"),mintNew:function(e,n){return new Promise(function(t,r){let i=e.session.store,a=o;n.newInstance=n.newInstance||i.sym(n.newBase+"index.ttl#this");let s=n.newInstance,l=s.doc(),f=_e.currentUser();f&&i.add(s,a.dc("author"),f,l),i.add(s,a.rdf("type"),a.meeting("Meeting"),l),i.add(s,a.dc("created"),new Date,l),i.add(s,a.ui("backgroundColor"),new Mn("#ddddcc",void 0,a.xsd("color")),l);let p=new di;i.add(s,a.meeting("toolList"),p,l),p.elements.push(s),i.updater.put(l,i.statementsMatching(void 0,void 0,void 0,l),"text/turtle",function(c,d,u){d?t(n):r(new Error("Error writing meeting configuration: "+u))})})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=r.updater,s=this,l=function(L,te){console.log(L);let Y=t.createElement("pre");Y.setAttribute("style","background-color: "+(te||"#eed")+";"),u.appendChild(Y),Y.appendChild(t.createTextNode(L))},f=function(U,L){U||l(L)},p=e,c=e.doc(),d=e.dir().uri,u=t.createElement("div");u.classList.add("meetingPane");let m=u.appendChild(t.createElement("table"));m.classList.add("meetingPaneTable");let g=m.appendChild(t.createElement("tr"));g.classList.add("meetingPaneHeader"),g.appendChild(t.createElement("div"));let h=m.appendChild(t.createElement("tr"));h.classList.add("meetingPaneMainRow");let _=m.appendChild(t.createElement("td")).appendChild(t.createElement("table")).appendChild(t.createElement("tr")),I=null,S=function(){a.put(c,r.statementsMatching(void 0,void 0,void 0,c),"text/turtle",function(U,L,te){L?(se.refresh(),y()):(te="FAILED to save new thing at: "+c+" : "+te,l(te))})},A=function(U,L,te){let Y=L.doc();te&&r.add(p,te,L,Y),r.add(L,i.meeting("parentMeeting"),p,Y),a.put(Y,r.statementsMatching(void 0,void 0,void 0,Y),"text/turtle",function(ie,me,be){me?S():l("FAILED to save new tool at: "+L+" : "+be)})},O=function(U,L,te,Y){L&&r.add(p,L,U,c);let ie=re.newThing(c);return te&&r.add(ie,i.rdfs("label"),te,c),Y&&r.add(ie,i.meeting("icon"),r.sym(Y),c),r.add(ie,i.rdf("type"),i.meeting("Tool"),c),r.add(ie,i.meeting("target"),U,c),r.the(p,i.meeting("toolList")).elements.push(ie),ie};function q(U){let L=/https:\/\/www\.google\..*\/maps\//,te="https://www.google.com/maps/embed/v1/",Y="AIzaSyB8aaT6bY9tcLCmc2oPCkdUYLmTOWM8R54",ie=U.uri;if(!ie.match(L)||ie.startsWith(te))return U;let me=ie.replace(L,te)+"&key="+Y;return console.log("Converted Google Map URI! "+me),we(me)}let F=function(U){return new Promise(function(L){let te=function(be){let fe=O(be,o.wf("attachment"),N.label(be),null);r.add(fe,o.meeting("view"),"iframe",c)},Y=function(be){let fe=i.wf("attachment");r.add(e,fe,be,e.doc());let ye={icon:"noun_160581.svg",limit:1,shareTab:!0},Ce={newInstance:e,pane:n.session.paneRegistry.byName("link"),predicate:i.meeting("attachmentTool"),tabTitle:"Links",view:"link",noIndexHTML:!0};return G(ye,Ce)},ie=function(be){let fe=r.any(be,i.foaf("preferredURI")),ye=fe?r.sym(fe):be,Ce=r.any(p,i.meeting("attendeeGroup")),Ee=function(Ae,Ie){let ke=[Le(Ie,o.vcard("hasMember"),Ae,Ie.doc())],qe=r.any(Ae,i.vcard("fn"))||r.any(Ae,i.foaf("name"));qe&&ke.push(Le(Ae,o.vcard("fn"),qe,Ie.doc())),r.fetcher.nowOrWhenFetched(Ie.doc(),void 0,function(ze,dn){if(!ze){l("Can't read group to add person"+Ie);return}r.updater.update([],ke,function(un,Yn,ri){f(Yn,ri),Yn&&console.log("Addded to particpants OK: "+Ae)})})};if(Ce){Ee(ye,Ce);return}M().then(function(Ae){let Ie=Ae.newInstance;Ee(ye,Ie),r.fetcher.putBack(c,{contentType:"text/turtle"}).then(function(ke){console.log("Particiants Group created: "+Ie)})}).catch(function(Ae){l(Ae)})};console.log("Dropped on thing "+U);let me=U.uri;if(me.startsWith("http:")&&me.indexOf("#")<0)return Y(U),L(U);r.fetcher.nowOrWhenFetched(U,function(be,fe){function ye(Ce){Ce=q(Ce),console.log("make web page attachement tab "+Ce);let Ee=O(Ce,o.wf("attachment"),N.label(Ce),null);return r.add(Ee,o.meeting("view"),"iframe",c),L(Ce)}if(be){let Ce=U,Ee=r.findTypeURIs(Ce);for(let Ae in Ee)console.log("    drop object type includes: "+Ae);if(i.vcard("Individual").uri in Ee||i.foaf("Person").uri in Ee||i.foaf("Agent").uri in Ee)return ie(U),L(U);if(me.startsWith("https:")&&me.indexOf("#")<0){let Ae=r.fetcher.getHeader(U,"x-frame-options"),Ie=!0;if(Ae)for(let ke=0;ke<Ae.length;ke++)console.log("x-frame-options: "+Ae[ke]),Ae[ke].indexOf("sameorigin")<0&&(Ie=!1),Ae[ke].indexOf("deny")<0&&(Ie=!1);if(Ie)return U=q(U),te(U),L(U)}return console.log("Default: assume web page attachement "+U),ye(U)}else return console.log("Error looking up dropped thing, will just add it anyway. "+U+": "+fe),ye(U)})})},E=function(U){Promise.all(U.map(function(L){let te=we(L);return F(te)})).then(function(L){S()})},X=function(U){re.uploadFiles(r.fetcher,U,p.dir().uri+"Files",p.dir().uri+"Pictures",function(L,te){L.type.startsWith("image/")?ce("Files"):H("Pictures")})},J=function(U){let L=d+"Group/",te=n.session.store,Y=te.any(p,i.meeting("particpants"));Y||(Y=we(L+"index.ttl#this")),console.log("Participant group: "+Y);let ie=O(Y,i.meeting("particpants"),"Particpants",B.iconBase+"noun_339237.svg");te.add(ie,o.meeting("view"),"peoplePicker",c),S()},oe=function(U){let L={useExisting:p,pane:n.session.paneRegistry.byName("schedule"),view:"schedule",tabTitle:"Schedule poll",noIndexHTML:!0};return G(U,L)},ce=function(U){let L={icon:"noun_598334.svg",limit:1,shareTab:!0},te={newInstance:r.sym(p.dir().uri+U+"/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("pictures"),shareTab:!0,tabTitle:U,view:"slideshow",noIndexHTML:!0};return G(L,te)},H=function(U){let L={icon:"noun_681601.svg",limit:1,shareTab:!0},te={newInstance:r.sym(p.dir().uri+"Files/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("materialsFolder"),tabTitle:"Materials",noIndexHTML:!0};return G(L,te)},M=function(){let U={icon:"noun_339237.svg",limit:1,shareTab:!0},L={newInstance:r.sym(p.dir().uri+"Attendees/index.ttl#this"),pane:n.session.paneRegistry.byName("contact"),predicate:i.meeting("attendeeGroup"),tabTitle:"Attendees",instanceClass:i.vcard("Group"),instanceName:N.label(e)+" attendees",noIndexHTML:!0};return G(U,L)},Z=function(U){let L={newBase:d+"SharedNotes/",predicate:o.meeting("sharedNotes"),tabTitle:"Shared Notes",pane:n.session.paneRegistry.byName("pad")};return G(U,L)},ne=function(U){re.askName(t,r,pe,i.foaf("name"),o.meeting("Meeting")).then(function(L){if(!L)return y();let te=encodeURIComponent(L),Y={newBase:d+te+"/",predicate:o.meeting("subMeeting"),tabTitle:L,pane:n.session.paneRegistry.byName("meeting")};return G(U,Y)}).catch(function(L){l("Error making new sub-meeting: "+L)})};function G(U,L){return new Promise(function(te,Y){let ie=n.session.store;if(!L.useExisting){let me=ie.any(p,L.predicate);if(me){if(U.limit&&U.limit===1&&!U.shareTab)return l("Already have "+me+" as "+N.label(L.predicate)),l("Cant have two"),te(null);if(U.shareTab)return console.log("Using existing "+me+" as "+N.label(L.predicate)),te({me:I,newInstance:me,instanceClass:L.instanceClass})}}!I&&!L.me&&Y(new Error("Username not defined for new tool")),L.me=L.me||I,L.newInstance=L.useExisting||L.newInstance||ie.sym(L.newBase+"index.ttl#this"),L.pane.mintNew(n,L).then(function(me){let be=O(me.newInstance,me.predicate,me.tabTitle,me.pane.icon);me.view&&ie.add(be,o.meeting("view"),me.view,c),S(),ie.fetcher.putBack(c,{contentType:"text/turtle"}).then(function(fe){te(me)}).catch(function(fe){Y(fe)})}).catch(function(me){l(me),Y(me)})})}let j=function(U){},R=function(U){let L=d+"Actions/",te=n.session.store;if(te.holds(p,i.meeting("actions"))){console.log("Ignored - already have actions");return}let Y=te.sym(L+"config.ttl"),ie=te.sym(L+"config.ttl#this"),me=te.sym(L+"state.ttl");te.add(ie,i.dc("title"),(te.anyValue(p,i.cal("summary"))||"Meeting ")+" actions",Y),te.add(ie,i.wf("issueClass"),i.wf("Task"),Y),te.add(ie,i.wf("initialState"),i.wf("Open"),Y),te.add(ie,i.wf("stateStore"),me,Y),te.add(ie,i.wf("assigneeClass"),i.foaf("Person"),Y),te.add(ie,i.rdf("type"),i.wf("Tracker"),Y),te.add(ie,i.rdf("type"),i.wf("Tracker"),Y);let be=O(ie,i.meeting("actions"),"Actions",B.iconBase+"noun_17020.svg");A(be,ie,i.meeting("actions"))},W=function(U){let L=d+"Chat/",te=n.session.store;if(te.holds(p,i.meeting("chat"))){console.log("Ignored - already have chat");return}let Y=te.sym(L+"chat.ttl");te.add(Y,i.rdf("type"),i.meeting("Chat"),Y);let ie=O(Y,i.meeting("chat"),"Chat",B.iconBase+"noun_346319.svg");A(ie,Y,i.meeting("chat"))},$=function(U){let L=n.session.store,te=we(yl+N.genUuid());if(L.holds(p,i.meeting("videoCallPage"))){console.log("Ignored - already have a videoCallPage");return}L.add(te,i.rdf("type"),i.meeting("VideoCallPage"),c);let Y=O(te,i.meeting("videoCallPage"),"Video call",B.iconBase+"noun_260227.svg");L.add(Y,i.meeting("view"),"iframe",c),S()},Q=function(U){re.askName(t,r,pe,i.log("uri"),o.rdf("Resource")).then(function(L){if(!L)return y();let te=n.session.store,Y=o,ie=te.sym(L),me=O(ie,Y.wf("attachment"),N.label(ie),null);te.add(me,Y.meeting("view"),"iframe",c),S()}).catch(function(L){l("Error making new sub-meeting: "+L)})},le=function(U){let L=n.session.store,te=o,Y=p.dir();if(U.limit&&U.limit===1&&L.holds(p,te.wf("sharingControl"))){l("Ignored - already have "+N.label(k.predicate));return}let ie=O(Y,te.wf("sharingControl"),"Sharing",B.iconBase+"noun_123691.svg");L.add(ie,te.meeting("view"),"sharing",c),S()},D=function(){let U={noun:"meeting"},L=function(Y,ie){s.mintNew(n,{newBase:ie}).then(function(me){let be=me.newInstance;pe.removeChild(te);let fe=pe.appendChild(t.createElement("p"));fe.setAttribute("style","font-size: 140%;"),fe.innerHTML="Your <a target='_blank' href='"+be.uri+"'><b>new meeting</b></a> is ready to be set up. <br/><br/><a target='_blank' href='"+be.uri+"'>Go to your new meeting.</a>"}).catch(function(me){pe.removeChild(te),pe.appendChild(re.errorMessageBlock(t,me))})},te=De.selectWorkspace(t,U,L);pe.appendChild(te)},K=[{icon:"noun_339237.svg",maker:J,hint:"Make a group of people",limit:1},{icon:"noun_346777.svg",maker:oe,hint:"Make a poll to schedule the meeting"},{icon:"noun_48218.svg",maker:j,limit:1,hint:"Add an agenda list",disabled:!0},{icon:"noun_79217.svg",maker:Z,hint:"Add a shared notepad"},{icon:"noun_346319.svg",maker:W,limit:1,hint:"Add a chat channel for the meeting"},{icon:"noun_17020.svg",maker:R,limit:1,hint:"Add a list of action items"},{icon:"noun_260227.svg",maker:$,limit:1,hint:"Add a video call for the meeting"},{icon:"noun_25830.svg",maker:Q,hint:"Attach meeting materials",disabled:!1},{icon:"noun_123691.svg",maker:le,limit:1,hint:"Control Sharing",disabled:!1},{icon:"noun_66617.svg",maker:ne,hint:"Make a sub meeting",disabled:!1}],V=we("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");Xe(gl,r,V.doc().uri,"text/turtle");let de=_.appendChild(t.createElement("td"));de.classList.add("meetingToolBarIcons");let ae=de.appendChild(t.createElement("div"));ae.classList.add("meetingToolIconRow");let pe=_.appendChild(t.createElement("td")),he=ae.appendChild(t.createElement("img"));he.classList.add("meetingToolIcon","meetingToolIcon-visible","meetingToolIconAddButton");let xe=!1;he.setAttribute("src",B.iconBase+"noun_19460_green.svg"),he.setAttribute("title","Add another tool to the meeting");let Se=function(U){for(let L=0;L<Ne.length;L++)Ne[L].classList.toggle("meetingToolIcon-visible",U)},Re=function(U){xe=!xe,he.classList.toggle("meetingToolIcon-highlighted",xe),Se(xe)},ve;_e.checkUser().then(U=>{if(U){I=U,he.addEventListener("click",Re);return}ve=De.loginStatusBox(t,L=>{L?(I=r.sym(L),pe.removeChild(ve),he.addEventListener("click",Re)):(console.log("(Logged out)"),I=null)}),ve.setAttribute("style","margin: 0.5em 1em;"),pe.appendChild(ve)});let Ne=[];for(let U=0;U<K.length;U++)(function(){let te=K[U],Y=ae.appendChild(t.createElement("img"));Y.classList.add("meetingToolIcon"),Y.setAttribute("src",B.iconBase+te.icon),te.disabled&&Y.classList.add("meetingToolIcon-disabled"),Ne.push(Y),Y.tool=te;let ie=te.maker;te.disabled||Y.addEventListener("click",function(me){v(Y),ie(te)})})();let y=function(){xe=!1,Se(!1),he.classList.remove("meetingToolIcon-highlighted")},v=function(U){xe=!1,Se(!1);for(let L=0;L<Ne.length;L++)Ne[L].classList.remove("meetingToolIcon-highlighted");U.classList.add("meetingToolIcon-visible","meetingToolIcon-highlighted"),he.classList.remove("meetingToolIcon-highlighted")},x=function(U,L){if(r.holds(L,i.rdf("type"),i.meeting("Tool"))){let te=r.any(L,i.meeting("target")),Y=r.any(L,i.rdfs("label"));Y=Y?Y.value:N.label(te);let ie=U.appendChild(t.createElement("div"));ie.classList.add("meetingToolLabel"),ie.textContent=Y;let me=r.any(L,i.meeting("icon"));if(me){let fe=U.appendChild(t.createElement("table")).appendChild(t.createElement("tr")),ye=fe.appendChild(t.createElement("td")),Ce=fe.appendChild(t.createElement("td")),Ee=ye.appendChild(t.createElement("img"));Ee.classList.add("meetingToolIconImg"),Ee.setAttribute("src",me.uri),Ee.setAttribute("title",Y),Ce.appendChild(ie)}else U.appendChild(ie)}else U.textContent=N.label(L)},P=function(U){let L=t.createElement("div"),te=L.appendChild(t.createElement("p"));return te.classList.add("meetingToolTip"),te.textContent="Tip: "+U,L},T=function(U,L){if(U.innerHTML="",U.style+="border-color: #eed;",U.appendChild(t.createElement("h3")).textContent="Adjust this tab",r.holds(L,i.rdf("type"),i.meeting("Tool"))){let te=we("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");re.appendForm(document,U,{},L,te,p.doc(),f),re.deleteButtonWithCheck(t,U,"tab",function(){let ie=r.the(p,i.meeting("toolList"));for(let fe=0;fe<ie.elements.length;fe++)if(ie.elements[fe].sameTerm(L)){ie.elements.splice(fe,1);break}let me=r.any(L,i.meeting("target")),be=r.statementsMatching(L).concat(r.statementsMatching(void 0,void 0,L)).concat(r.statementsMatching(p,void 0,me));r.remove(be),S()}).classList.add("meetingPaneDeleteButton")}else U.appendChild(t.createElement("h4")).textContent="(No adjustments available)"},C=function(U,L){let te=null,Y,ie=null;U.innerHTML="";let me=function(Ce,Ee){Ce||(U.textContent=""+Ee)},be=function(Ce){let Ee=U.appendChild(t.createElement("iframe"));Ee.setAttribute("src",Ce.uri),Ee.classList.add("meetingPaneIframe"),Ee.setAttribute("allow","microphone camera"),Ee.setAttribute("name","disable-x-frame-options"),U.style.padding=0},fe=function(){let Ce={div:U,dom:t};U.appendChild(t.createElement("h4")).textContent="Meeting Participants";let Ee=function(Ae){let Ie=[Le(p,i.meeting("particpantGroup"),Ae,p.doc())];r.updater.update([],Ie,function(ke,qe,ze){qe?ie=Ae:l("Cant save participants group: "+ze)})};ie=r.any(p,i.meeting("particpantGroup")),_e.checkUser().then(Ae=>{if(Ae){let Ie=typeof Ae=="string"?r.sym(Ae):Ae;wl(Ie).then(function(ke){let ze=ke.find(Yn=>Yn.label==="private")||ke[0];if(!ze||!ze.index){l("No type index available for this user to load participants.");return}let dn={defaultNewGroupName:"Meeting Participants",selectedGroup:ie};new re.PeoplePicker(Ce.div,ze.index,Ee,dn).render()}).catch(function(ke){l("Could not load type indexes for participants: "+ke)})}else l("Please log in to manage meeting participants.")})},ye=function(){U.appendChild(t.createElement("h3")).textContent="Details of meeting";let Ce=we("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#main");re.appendForm(document,U,{},p,Ce,p.doc(),me),U.appendChild(P("Drag URL-bar icons of web pages into the tab bar on the left to add new meeting materials.")),I=_e.currentUser(),I&&r.add(p,i.dc("author"),I,c);let Ee={noun:"meeting",me:I,statusArea:U,div:U,dom:t};De.registrationControl(Ee,p,i.meeting("Meeting")).then(function(dn){console.log("Registration control finsished.")});let Ae={};Pn.manageParticipation(t,U,c,p,I,Ae);let Ie=U.appendChild(t.createElement("div")),ke=Ie.appendChild(t.createElement("img"));ke.classList.add("meetingToolIconSpawn"),ke.setAttribute("src",B.iconBase+"noun_145978.svg"),ke.setAttribute("title","Make a fresh new meeting"),ke.addEventListener("click",D);let qe=Ie.appendChild(t.createElement("a"));qe.setAttribute("href","https://github.com/solid/solid-panes"),qe.setAttribute("target","_blank");let ze=qe.appendChild(t.createElement("img"));ze.classList.add("meetingToolIconForkGithub"),ze.setAttribute("src",B.iconBase+"noun_368567.svg"),ze.setAttribute("title","Fork me on github")};if(r.holds(L,i.rdf("type"),i.meeting("Tool"))){let Ce=r.any(L,i.meeting("target"));if(Ce.sameTerm(p)&&!r.any(L,i.meeting("view")))ye();else{let Ee=r.any(L,i.meeting("view"));Ee=Ee?Ee.value:null,Ee==="details"?ye():Ee==="peoplePicker"?fe():Ee==="iframe"?be(Ce):(te=Ee?n.session.paneRegistry.byName(Ee):null,Y=U.appendChild(t.createElement("table")),Y.classList.add("meetingPaneTableMain"),n.getOutliner(t).GotoSubject(Ce,!0,te,!1,void 0,Y))}}else L.sameTerm(p)?ye():L.sameTerm(L.doc())&&!r.holds(L,o.rdf("type"),o.meeting("Chat"))&&!r.holds(L,o.rdf("type"),o.meeting("PaneView"))||(Y=U.appendChild(t.createElement("table")),n.getOutliner(t).GotoSubject(L,!0,void 0,!1,void 0,Y))},k={dom:t};k.predicate=i.meeting("toolList"),k.subject=e,k.ordered=!0,k.orientation=1,k.renderMain=C,k.renderTab=x,k.renderTabSettings=T,k.backgroundColor=r.anyValue(e,i.ui("backgroundColor"))||"#ddddcc";let se=h.appendChild(qn.tabWidget(k));return An.preventBrowserDropEvents(t),re.makeDropTarget(se.tabContainer,E,X),re.makeDropTarget(de,E,X),u}};var xl={icon:B.iconBase+"noun_688606.svg",name:"tabbed",audience:[o.solid("PowerUser")],label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return o.meeting("Cluster").uri in r?"Tabbed":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=t.createElement("div");return(async()=>{if(!r.fetcher)throw new Error("Store has no fetcher");await r.fetcher.load(e),i.appendChild(qn.tabWidget({dom:t,subject:e,predicate:r.any(e,o.meeting("predicate"))||o.meeting("toolList"),ordered:!0,orientation:r.anyValue(e,o.meeting("orientation"))||"0",renderMain:(a,s)=>{a.innerHTML="";let l=a.appendChild(n.dom.createElement("table"));n.getOutliner(n.dom).GotoSubject(s,!0,null,!1,void 0,l)},renderTab:(a,s)=>{let l=r.the(e,o.meeting("predicate"));a.appendChild(re.personTR(n.dom,l,s,{}))},backgroundColor:r.anyValue(e,o.ui("backgroundColor"))||"#ddddcc"}))})(),i}},za=xl;var $e=o,Pr={icon:B.iconBase+"noun_346319.svg",name:"chat",audience:[$e.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.each(e,$e.wf("message")).length;return r>0?"Chat ("+r+")":t.holds(e,$e.rdf("type"),$e.meeting("Chat"))?"Meeting chat":t.holds(void 0,$e.rdf("type"),$e.foaf("ChatChannel"),e)?"IRC log":null},mintClass:$e.meeting("Chat"),mintNew:function(e,n){if(!confirm(`short Chat is deprecated in favor of long Chat.
Embedded chat for comments and existing short Chats will work.
You can report any issues at https://github.com/SolidOS/chat-pane ?

Do you really want to create a new deprecated short Chat?`))return;let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();return t.add(i,$e.rdf("type"),$e.meeting("Chat"),a),t.add(i,$e.dc("title"),"Chat",a),t.add(i,$e.dc("created"),new Date,a),n.me&&t.add(i,$e.dc("author"),n.me,a),new Promise(function(s,l){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(f,p,c){p?s(n):l(new Error("FAILED to save new tool at: "+f+" : "+c))})})},render:function(e,n){let t=n.session.store,r=n.dom,i=function(p,c){let d=r.createElement("pre");d.setAttribute("style","background-color: "+c||"#eed;"),a.appendChild(d),d.appendChild(r.createTextNode(p))},a=r.createElement("div");a.setAttribute("class","chatPane");let s={},l;if(t.holds(e,$e.rdf("type"),$e.meeting("Chat")))l=e.doc();else if(t.any(e,o.wf("message"))){let f=z.any(e,o.wf("message"));if(!f||f.termType!=="NamedNode")throw new Error("Chat subject has no linked message store");l=f.doc()}else if(t.holds(void 0,$e.rdf("type"),$e.foaf("ChatChannel"),e)||t.holds(e,$e.rdf("type"),$e.foaf("ChatChannel"))){let f=function(){let p=new vn("IRC log entries",null),c={};return["chan","msg","date","list","pred","creator","content"].forEach(function(u){p.vars.push(c[u]=an(u))}),p.pat.add(c.chan,$e.foaf("chatEventList"),c.list),p.pat.add(c.list,c.pred,c.msg),p.pat.add(c.msg,$e.dc("date"),c.date),p.pat.add(c.msg,$e.dc("creator"),c.creator),p.pat.add(c.msg,$e.dc("description"),c.content),p};l=e.doc(),s.query=f()}else i("Unknown chat type","#eed");if(!l)throw new Error("Unable to determine chat message store");return a.appendChild(xt(r,t,e,l,s)),t.updater.addDownstreamChangeListener(l,function(){re.refreshTree(a)}),a}};function In(...e){console.log(...e)}var Ot=o.meeting("LongChat"),$a="index.ttl#this",Cl="noun_344563.svg",Sr=Xt.sidebarComponentStyle||" padding: 0.5em; width: 100%;",Ur=Xt.sidebarStyle||"overflow-x: auto; overflow-y: auto; border-radius: 1em; border: 0.1em solid white;",at={CHAT_LOCATION_IN_CONTAINER:$a,icon:B.iconBase+"noun_1689339.svg",name:"long chat",label:function(e,n){let t=n.session.store;return t.holds(e,o.rdf("type"),o.meeting("LongChat"))?"Chat channnel":t.holds(e,o.rdf("type"),o.sioc("Thread"))?"Thread":t.any(e,o.sioc("content"))&&t.any(e,o.dct("created"))?"message":null},mintClass:Ot,mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+$a),a=i.doc();t.add(i,o.rdf("type"),o.meeting("LongChat"),a),t.add(i,o.dc("title"),"Chat channel",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let s=(l,f,p)=>`
    @prefix : <#>.
    @prefix acl: <http://www.w3.org/ns/auth/acl#>.
    @prefix foaf: <http://xmlns.com/foaf/0.1/>.
    @prefix lon: <./${f}>.

    :ControlReadWrite
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agent <${l.uri}>;
        acl:default lon:;
        acl:mode acl:Control, acl:Read, acl:Write.
    :Read
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass foaf:Agent;
        acl:default lon:;
        acl:mode acl:Read.
    :Read${p}
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass acl:AuthenticatedAgent;
        acl:default lon:;
        acl:mode acl:Read, acl:${p}.`;return new Promise(function(l,f){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(p,c,d){c?l(n):f(new Error("FAILED to save new chat channel at: "+p+" : "+d))}).then(p=>new Promise((c,d)=>{n.me&&(t.fetcher.webOperation("PUT",n.newBase+".acl",{data:s(n.me,"","Append"),contentType:"text/turtle"}),t.fetcher.webOperation("PUT",n.newBase+"index.ttl.acl",{data:s(n.me,"index.ttl","Write"),contentType:"text/turtle"})),c(n)}))})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=`
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
`,s=i.sym("https://solid.github.io/solid-panes/longCharPane/preferencesForm.ttl#this"),l=s.doc();i.holds(void 0,void 0,void 0,l)||Xe(a,i,l.uri,"text/turtle");let f=i.statementsMatching(null,o.ui.property,null,l).map(D=>D.object);async function p(D){let{dom:K,noun:V}=D,de=K.createElement("div");de.appendChild(c(de)),de.style=Sr,de.style.minWidth="25em",de.style.maxHeight=O;let ae=de.appendChild(K.createElement("table")),pe=ae.appendChild(K.createElement("tr")),he=ae.appendChild(K.createElement("tr")),xe=_e.currentUser();return xe&&(await De.registrationControl({noun:V,me:xe,statusArea:he,dom:K,div:pe},_,Ot),In("Registration control finsished."),de.appendChild(Zt.renderPreferencesForm(_,Ot,s,{noun:V,me:xe,statusArea:he,div:de,dom:K,kb:i}))),de}function c(D){function K(){D.parentNode.removeChild(D)}let V=re.button(n.dom,B.iconBase+"noun_1180156.svg","close",K);return V.style.float="right",V.style.margin="0.7em",delete V.style.backgroundColor,V}async function d(D){j||(j=await p({dom:r,noun:"chat room"}));let K=j;K&&(oe.contains(K)?(K.remove(),j=null):oe.appendChild(K))}function u(D,K){let V=r.createElement("div"),de=_e.currentUser();if(!de)return V;let ae={div:V,dom:r,noun:K,statusArea:V,me:de,refreshTarget:D},he=[n.session.paneRegistry.byName("chat")];return Bn.newThingUI(ae,n,he),V}async function m(D,K){let V=r.createElement("div"),de={dom:r,div:V,noun:K};return await De.registrationList(de,{public:!0,private:!0,type:D}),V.appendChild(u(V,K)),V}let g=null;async function h(D){if(!g){let V=r.createElement("div");g=V,V.style=Sr,V.style.maxHeight=O,V.appendChild(c(V)),V.appendChild(await m(o.meeting("LongChat"),"chat"))}let K=g;K&&(E.contains(K)?K.remove():E.appendChild(K))}let b=null;function w(D){if(!b){let V=r.createElement("div");b=V,V.style=Sr,V.style.maxHeight=O,V.appendChild(c(V));let de=_e.currentUser();if(!de){alert("Should be logeed in for partipants panel");return}Pn.manageParticipation(r,V,_.doc(),_,de,{})}let K=b;K&&(E.contains(K)?(K.remove(),b=null):E.appendChild(K))}let _=e,I=null,S=null;if(i.holds(e,o.rdf("type"),o.meeting("LongChat")))In("@@@ Chat channnel");else if(i.holds(e,o.rdf("type"),o.sioc("Thread"))){In("Thread is subject "+e.uri),S=e;let D=e,K=i.the(null,o.sioc("has_reply"),D,D.doc());if(!K)throw new Error("Thread has no root message "+S);if(_=i.any(null,o.wf("message"),K),!_)throw new Error("Thread root has no link to chatChannel")}else if(i.any(e,o.sioc("content"))&&i.any(e,o.dct("created"))&&(In("message is subject "+e.uri),I=e,_=i.any(null,o.wf("message"),I),!_))throw new Error("Message has no link to chatChannel");let A=r.createElement("div"),O="20cm",q=A.appendChild(r.createElement("table"));q.style.maxHeight='12"';let F=q.appendChild(r.createElement("tr")),E=F.appendChild(r.createElement("td")),X=F.appendChild(r.createElement("td")),J=F.appendChild(r.createElement("td")),oe=F.appendChild(r.createElement("td")),ce=q.appendChild(r.createElement("tr"));E.style=Ur,E.style.paddingRight="1em",J.style=Ur,J.style.paddingLeft="1em",oe.style=Ur,oe.style.paddingLeft="1em",ce.appendChild(r.createElement("td"));let H=ce.appendChild(r.createElement("td"));ce.appendChild(r.createElement("td"));let Z=re.button(r,B.iconBase+"noun_339237.svg","participants ...");H.appendChild(Z),Z.addEventListener("click",w);let G=re.button(r,B.iconBase+"noun_1689339.svg","List of other chats ...");H.appendChild(G),G.addEventListener("click",h);let j=null,R=re.button(r,B.iconBase+Cl,"Setting ...");H.appendChild(R),R.style.float="right",R.addEventListener("click",d),A.setAttribute("class","chatPane");let W={infinite:!0},$={noun:"chat room",div:A,dom:r,me:_e.currentUser()};async function Q(D,K){In("@@@@ showThread thread "+D);let V={infinite:!0};V.thread=D,V.includeRemoveButton=!0,V.authorDateOnLeft=K.authorDateOnLeft,V.newestFirst=K.newestFirst,J.innerHTML="",In("Options for showThread message Area",V);let de=await Qt(r,i,_,V);de.style.resize="both",de.style.overflow="auto",de.style.maxHeight=O,J.appendChild(de)}async function le(){let D;try{D=await Zt.getPreferencesForClass(_,Ot,f,$)}catch(V){re.complain($,V)}for(let V in D)W[V.split("#")[1]]=D[V];I&&(W.selectedMessage=I),t?.solo&&(W.solo=!0),S?W.thread=S:W.showThread=Q;let K=await Qt(r,i,_,W);K.style.resize="both",K.style.overflow="auto",K.style.maxHeight=O,X.appendChild(K)}return le().then(()=>In("async - chat pane built")),A}};var _l=await(await fetch(ge(`@prefix dc: <http://purl.org/dc/elements/1.1/>.
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
`,"text/turtle"))).text();Oe(ge(`.schedule-pane__table {
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
`,"text/css"));Oe(ge(`:root {
  --icon-sm: 1.8em;
  --color-background-row-default: white;
  --color-background-row-alternate: #f0f0f0;
}`,"text/css"));var ot=o,kl=[ot.sched("No"),ot.sched("Maybe"),ot.sched("Yes")];function Vn(e){let n=e.shift();n&&n()}var Nr={icon:B.iconBase+"noun_346777.svg",name:"schedule",audience:[ot.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/schedule#SchedulableEvent"]?"Scheduling poll":null},mintClass:ot.sched("SchedulableEvent"),mintNew:function(e,n){return new Promise(function(t,r){let i=o,a=e.session.store,s=[],l=!1,f=n.newBase,p=n.useExisting||we(n.newBase+"index.ttl#this"),c=function(q){l||(l=!0,s.length=0,console.log("Error in Schedule Pane: Error constructing new scheduler: "+q),r(new Error(q)))},d=function(q,F){q||c(F)},u=function(q,F,E){let X=vt(),J=tn("http://www.w3.org/ns/auth/acl#"),oe=X.sym(F+"#a1"),ce=X.sym(F),H=X.sym(q);return X.add(oe,o.rdf("type"),J("Authorization"),ce),X.add(oe,J("accessTo"),H,ce),X.add(oe,J("agent"),b,ce),X.add(oe,J("mode"),J("Read"),ce),X.add(oe,J("mode"),J("Write"),ce),X.add(oe,J("mode"),J("Control"),ce),oe=X.sym(F+"#a2"),X.add(oe,o.rdf("type"),J("Authorization"),ce),X.add(oe,J("accessTo"),H,ce),X.add(oe,J("agentClass"),i.foaf("Agent"),ce),X.add(oe,J("mode"),J("Read"),ce),E&&X.add(oe,J("mode"),J("Write"),ce),gt(ce,X,F,"text/turtle")},m=function(F,E,X){let J=!1,oe=function(H,M){J||(J=!0,X(H,M))},ce=a.any(a.sym(F),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(ce){let H=u(F,ce.uri,E);return g.webOperation("PUT",ce.uri,{data:H,contentType:"text/turtle"}).then(M=>oe(!0)).catch(M=>{oe(!1,M.message)})}else return g.load(F).then(()=>{let H=a.any(a.sym(F),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(!H)throw new Error("No Link rel=ACL header for "+F);let M=u(F,H.uri,E);return g.webOperation("PUT",H.uri,{data:M,contentType:"text/turtle"})}).then(H=>oe(!0)).catch(H=>{oe(!1,H.message)})},g=a.fetcher,h=a.updater,b=n.me||_e.currentUser();if(!b){console.log("MUST BE LOGGED IN"),alert("NOT LOGGED IN"),r(new Error("Schedule pane requires a logged-in user"));return}let w=p.dir();if(!w)throw new Error("Schedule pane needs a base directory to mint a new poll");let _=w.uri,I,S;if(n.useExisting){S=n.useExisting;let q=p.dir();if(!q)throw new Error("Existing schedule instance needs a containing directory");if(f=q.uri,I=S.doc(),n.newBase)throw new Error("mint new scheduler: Illegal - have both new base and existing event")}else I=a.sym(f+"details.ttl"),S=a.sym(I.uri+"#event");let A=a.sym(f+"results.ttl"),O=n.noIndexHTML?[]:[{local:"index.html",contentType:"text/html"}];for(let q=0;q<O.length;q++){let F=O[q];(function(J){s.push(function(){let oe=f+J.local;console.log("Copying "+_+J.local+" to "+oe);let ce=function(){m(oe,!1,function(H,M){H?Vn(s):(d(H,"FAILED to set ACL "+oe+" : "+M),console.log("FAILED to set ACL "+oe+" : "+M))})};a.fetcher.webCopy(_+J.local,f+J.local,J.contentType).then(()=>_e.checkUser()).then(H=>{b=H,ce()}).catch(H=>{console.log("FAILED to copy "+_+J.local+" : "+H.message),d(!1,"FAILED to copy "+_+J.local+" : "+H.message)})})})(F)}s.push(function(){a.add(S,i.rdf("type"),i.sched("SchedulableEvent"),I),b&&(a.add(S,i.dc("author"),b,I),a.add(S,i.foaf("maker"),b,I)),a.add(S,i.dc("created"),Dn(new Date().toISOString(),we("http://www.w3.org/2001/XMLSchema#dateTime")),I),a.add(S,i.sched("resultsDocument"),I),h.put(I,a.statementsMatching(void 0,void 0,void 0,I),"text/turtle",function(F,E,X){E?Vn(s):(d(E,"FAILED to save new scheduler at: "+I+" : "+X),console.log("FAILED to save new scheduler at: "+I+" : "+X))})}),s.push(function(){a.fetcher.webOperation("PUT",A.uri,{data:"",contentType:"text/turtle"}).then(()=>{Vn(s)}).catch(q=>{d(!1,"Failed to initialize empty results file: "+q.message)})}),s.push(function(){m(A.uri,!0,function(q,F){d(q,"Failed to set Read-Write ACL on results file: "+F),q&&Vn(s)})}),s.push(function(){m(I.uri,!1,function(q,F){d(q,"Failed to set read ACL on configuration file: "+F),q&&Vn(s)})}),s.push(function(){l||(l=!0,console.log("Finished minting new scheduler"),n.newInstance=S,t(n))}),Vn(s)})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=e,s="app-when-can-we.w3.org";function l(ae){let pe=n.environment??{};ae.dataset.layout=pe.layout??"desktop"}let f=r.fetcher,p=r.updater,c=!1,d=e,u=e.doc(),m=u.dir();if(!m)throw new Error("Schedule pane needs a containing directory for its details document");let g=m.uri,h=we(g+"results.ttl"),b="https://solidos.github.io/solid-panes/schedule/formsForSchedule.ttl",w=r.sym(b+"#form1"),_=r.sym(b+"#form2"),I=r.sym(b+"#form3");Xe(_l,r,b,"text/turtle");let S=function(ae,pe){ae||R.appendChild(re.errorMessageBlock(t,pe,"pink"))},A=function(ae){for(;ae.firstChild;)ae.removeChild(ae.firstChild);return ae},O=function(ae,pe){let he=r.any(pe,o.ui("backgroundColor"));he&&(ae.classList.add("schedule-pane__cell"),ae.setAttribute("style","background-color: "+he+";"))},q=null;_e.checkUser().then(ae=>{q=ae??null,$&&$.refresh(),ae&&c&&(c=!1,ce())}),console.log("me: "+q);let F=function(){let ae=De.newAppInstance(t,{noun:"scheduler",appPathSegment:s},function(pe,he){return E(we(pe||he))});return ae.firstChild instanceof HTMLElement&&ae.firstChild.classList.add("schedule-pane__button"),ae},E=function(ae){let pe=r.any(ae,i.space("uriPrefix")),he="";pe?he=pe.value:he=ae.uri.split("#")[0],he.slice(-1)!=="/"&&(ht.error(s+": No / at end of uriPrefix "+he),he=he+"/");let xe=new Date;he+=s+"/id"+xe.getTime()+"/",X(d,he)},X=function(ae,pe){let he={thisInstance:ae,newBase:pe};Nr.mintNew(n,he).then(function(xe){if(!xe.newInstance)throw new Error("New scheduler instance was not returned");let Se=R.appendChild(t.createElement("p"));Se.setAttribute("style","font-size: 140%;"),Se.innerHTML="Your <a href='"+xe.newInstance.uri+"'><b>new scheduler</b></a> is ready to be set up. <br/><br/><a href='"+xe.newInstance.uri+"'>Say when you what days work for you.</a>"}).catch(function(xe){S(!1,"Error createing new scheduler at "+he.newInstance+": "+xe)})},J=function(){console.log("getforms()"),oe()},oe=function(){console.log("getDetails()"),f.nowOrWhenFetched(u.uri,void 0,function(ae,pe){if(console.log("getDetails() ok? "+ae),!ae)return S(ae,pe);ce()})},ce=function(){console.log("showAppropriateDisplay()"),_e.checkUser().then(pe=>{if(!pe)return H();if(!r.updater.editable(u.uri,r)||r.holds(e,i.rdf("type"),i.wf("TemplateInstance"))){M();return}r.any(e,i.sched("ready"))?G():ne()})},H=function(){A(le);let pe={div:R,dom:t};De.ensureLoggedIn(pe).then(he=>{q=he.me??null,c=!1,ce()})},M=function(){let pe=A(le);pe.appendChild(De.newAppInstance(t,{noun:"poll",appPathSegment:s},function(Re,ve){return E(we(Re||ve))})),pe.appendChild(t.createElement("hr"));let he=pe.appendChild(t.createElement("p"));he.textContent="Where would you like to store the data for the poll?  Give the URL of the directory where you would like the data stored.";let xe=pe.appendChild(t.createElement("input"));xe.setAttribute("type","text"),xe.size=80,xe.label="base URL",xe.autocomplete="on",pe.appendChild(t.createElement("br"));let Se=pe.appendChild(t.createElement("button"));Se.classList.add("schedule-pane__button"),Se.textContent="Start new poll at this URI",Se.addEventListener("click",function(Re){let ve=xe.value;ve.slice(-1)!=="/"&&(ve+="/"),X(d,ve)})},Z=t.createElement("button"),ne=function(){A(V);let ae=le;r.any(e,i.sched("allDay"))||r.add(e,i.sched("allDay"),Dn("true",we("http://www.w3.org/2001/XMLSchema#boolean")),u);let pe=!0,he=0,xe=!1,Se=function(T){return!!T.querySelector("input, select, textarea, button")},Re=function(T,C){if(!T)return C;let k=(T.value||"").toLowerCase();return k==="true"||k==="1"?!0:k==="false"||k==="0"?!1:C},ve=function(T){let C=Re(r.any(e,i.sched("allDay")),!0),k=r.sym(b+(C?"#AllDayForm2":"#NotAllDayForm2"));re.appendForm(document,T,{},e,k,u,S)},Ne=function(T,C=!1){if(Array.from(T.querySelectorAll("input, select, textarea")).forEach(be=>{be.classList.add("schedule-pane__form-control"),be.tagName.toLowerCase()==="textarea"&&be.classList.add("schedule-pane__form-control--textarea")}),Array.from(T.querySelectorAll('div[style*="border: 0.05em solid"]')).forEach(be=>{be.classList.add("schedule-pane__panel")}),Array.from(T.querySelectorAll("h3")).forEach(be=>{be.classList.add("schedule-pane__form-heading"),(be.textContent||"").trim().toLowerCase()==="time proposals"&&(be.classList.add("schedule-pane__form-heading--time-proposals"),be.closest(".schedule-pane__panel")?.classList.add("schedule-pane__panel--time-proposals"))}),!C)return;Array.from(T.querySelectorAll(".formFieldName")).forEach(be=>{let fe=be.parentElement,ye=(be.textContent||"").trim().toLowerCase();fe&&((ye==="summary"||ye==="location")&&fe.classList.add("schedule-pane__field-row--compact"),ye==="comment"&&fe.classList.add("schedule-pane__field-row--comment"))});let ie=T.querySelector("textarea")?.parentElement?.parentElement,me=ie?.parentElement;me&&me.classList.add("schedule-pane__field-row--comment"),ie&&ie.classList.add("schedule-pane__field-value--comment")},y=function(T){let C=T.firstElementChild;return!C||T.childElementCount!==1?T:C};if(pe){let T=[w,_,I],C=[];he=0;for(let L=0;L<T.length;L++){let te=t.createElement("div");re.appendForm(document,te,{},e,T[L],u,S),Ne(te,L===0),L===1&&!Se(te)&&(ve(te),Ne(te)),C.push(y(te))}let k=function(){A(le).appendChild(C[he]),he===0?se.setAttribute("disabled",""):se.removeAttribute("disabled"),he===C.length-1?(U.setAttribute("disabled",""),xe||(V.appendChild(x),V.appendChild(Z),xe=!0)):U.removeAttribute("disabled")},se=A(K).appendChild(t.createElement("button"));se.classList.add("schedule-pane__button"),se.textContent="<- go back",se.addEventListener("click",function(L){he>0&&(he-=1,k())},!1);let U=A(de).appendChild(t.createElement("button"));U.classList.add("schedule-pane__button"),U.textContent="continue ->",U.addEventListener("click",function(L){he<C.length-1&&(he+=1,k())},!1),k()}else{let T=ae.appendChild(t.createElement("table"));re.appendForm(document,T,{},e,w,u,S),Ne(T,!0),re.appendForm(document,T,{},e,_,u,S),Ne(T),re.appendForm(document,T,{},e,I,u,S),Ne(T),V.appendChild(Z)}let v=[];v.push(Le(e,i.sched("availabilityOptions"),i.sched("YesNoMaybe"),u)),v.push(Le(e,i.sched("ready"),Dn(new Date().toISOString(),we("http://www.w3.org/2001/XMLSchema#dateTime")),u)),v.push(Le(e,i.sched("results"),h,u)),Z.classList.add("schedule-pane__button"),Z.textContent="Go to poll",Z.addEventListener("click",function(T){r.any(e,i.sched("ready"))?(G(),de.appendChild(x)):(de.appendChild(x),r.updater.update([],v,function(C,k,se){k?G():S(k,se)}))},!1);let x=t.createElement("button");x.classList.add("schedule-pane__button");let P=x.appendChild(t.createElement("img"));P.setAttribute("src",B.iconBase+"noun_480183.svg"),P.classList.add("schedule-pane__button-icon"),x.addEventListener("click",function(T){let C=r.anyValue(e,i.cal("summary"))||r.anyValue(e,i.dc("title"))||"",k="mailto:"+r.each(e,i.sched("invitee")).map(function(se){let U=r.any(se,i.foaf("mbox"));return U?U.uri.replace("mailto:",""):""}).join(",")+"?subject="+encodeURIComponent(C+"-- When can we meet?")+"&body="+encodeURIComponent(C+`

When can you?

See `+e+`
`);console.log("Mail: "+k),window.location.href=k},!1)};function G(){f.nowOrWhenFetched(h.uri,void 0,(ae,pe,he)=>{ae?(A(le),j()):he.status===404?(console.log("Initializing details file "+h),p.put(h,[],"text/turtle",function(xe,Se,Re){Se?(A(le),j()):(S(Se,"FAILED to create results file at: "+h.uri+" : "+Re),console.log("FAILED to craete results file at: "+h.uri+" : "+Re))})):S(ae,"FAILED to read results file: "+pe)})}function j(){let ae=r.any(a,i.cal("summary")),pe=r.any(a,i.cal("comment")),he=r.any(a,i.cal("location")),xe=le;ae&&(xe.appendChild(t.createElement("h3")).textContent=ae.value),he&&(xe.appendChild(t.createElement("address")).textContent=he.value),pe&&(xe.appendChild(t.createElement("p")).textContent=pe.value);let Se=r.any(a,i.dc("author"));if(Se){let C=r.any(Se,i.foaf("name"));C&&(xe.appendChild(t.createElement("p")).textContent=C.value)}let Re=new vn("Responses",0),ve={};ve.time=an("time"),ve.author=an("author"),ve.value=an("value"),ve.resp=an("resp"),ve.cell=an("cell"),Re.vars.push(ve.time,ve.author,ve.value,ve.resp,ve.cell),Re.pat.add(a,i.sched("response"),ve.resp),Re.pat.add(ve.resp,i.dc("author"),ve.author),Re.pat.add(ve.resp,i.sched("cell"),ve.cell),Re.pat.add(ve.cell,i.sched("availabilty"),ve.value),Re.pat.add(ve.cell,i.cal("dtstart"),ve.time);let Ne={set_x:[],set_y:[]};Ne.set_x=r.each(e,i.sched("option")),Ne.set_x=Ne.set_x.map(function(C){return r.any(C,i.cal("dtstart"))}).filter(function(C){return!!C}),Ne.set_y=r.each(e,i.sched("response")),Ne.set_y=Ne.set_y.map(function(C){return r.any(C,i.dc("author"))}).filter(function(C){return!!C});let y=r.each(a,i.sched("option")).map(function(C){return r.any(C,i.cal("dtstart"))}).filter(function(C){return!!C}),v=function(){let C=xe.appendChild(pi.matrixForQuery(t,Re,ve.time,ve.author,ve.value,Ne,function(){}));C.setAttribute("class","matrix");let k=t.createElement("button");k.classList.add("schedule-pane__button");let se=t.createElement("img");se.setAttribute("src",B.iconBase+"noun_479395.svg"),se.classList.add("schedule-pane__button-icon"),k.appendChild(se),k.addEventListener("click",function(U){k.disabled=!0,r.fetcher.refresh(h,function(L,te){L?(C.refresh(),k.disabled=!1):console.log("Cant refresh matrix"+te)})},!1),A(V),V.appendChild(k)},x={},P={div:V,dom:t};De.ensureLoggedIn(P).then(C=>{let k=C.me;if(!k)return;let se=h;Ne.set_y=Ne.set_y.filter(function(ie){return!ie.sameTerm(k)}),Ne.set_y.push(k),Ne.cellFunction=function(ie,me,be,fe){if(fe!==null&&r.fetcher.nowOrWhenFetched(fe.uri.split("#")[0],void 0,function(ye,Ce){ye&&O(ie,fe)}),be.sameTerm(k)){let ye=function(){return O(ie,fe),""},Ce={},Ee=i.sched("availabilty");if(!me)return"";let Ae=x[me.toNT()],Ie=re.makeSelectForOptions(t,r,Ae,Ee,kl,Ce,h,ye);ie.appendChild(Ie)}else fe!==null&&(ie.textContent=N.label(fe));return""};let U=r.each(a,i.sched("response")),L=null;U.forEach(function(ie){r.holds(ie,i.dc("author"),k)&&(L=ie)});let te=[],Y=re.newThing(se).uri;L===null?(L=we(Y+"_response"),te.push(Le(a,i.sched("response"),L,se)),te.push(Le(L,i.dc("author"),k,se))):r.each(L,i.sched("cell")).forEach(function(me){let be=r.any(me,i.cal("dtstart"));be&&(x[be.toNT()]=me)});for(let ie=0;ie<y.length;ie++){let me=y[ie];if(!me||x[me.toNT()])continue;let be=we(Y+"_"+ie);te.push(Le(L,i.sched("cell"),be,se)),te.push(Le(be,i.cal("dtstart"),me,se)),x[me.toNT()]=be}te.length?r.updater.update([],te,function(ie,me,be){me?v():S(me,be)}):v()});let T=r.any(e,i.foaf("maker"));if(!T||!q||T.sameTerm(q)){let C=t.createElement("button");C.classList.add("schedule-pane__button");let k=t.createElement("img");k.setAttribute("src",B.iconBase+"noun_344563.svg"),k.classList.add("schedule-pane__button-icon"),C.appendChild(k),C.addEventListener("click",function(se){A(xe),ne()},!1),A(K),K.appendChild(C)}A(de),de.appendChild(F())}let R=t.createElement("div");R.classList.add("schedule-pane"),l(R);let W=R.appendChild(t.createElement("table"));W.classList.add("schedule-pane__table");let $=null,le=W.appendChild(t.createElement("tr")).appendChild(t.createElement("td"));le.classList.add("schedule-pane__main-cell"),le.setAttribute("colspan","3");let D=W.appendChild(t.createElement("tr"));D.classList.add("naviMenu","schedule-pane__nav");let K=D.appendChild(t.createElement("td")),V=D.appendChild(t.createElement("td")),de=D.appendChild(t.createElement("td"));return J(),R}};var Il=o,Ha={icon:B.iconBase+"noun_62007.svg",name:"travel expenses",audience:[Il.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return o.qu("Transaction")in t.findSuperClassesNT(e)?"by Trip":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.store,i=o,a=tn("http://www.w3.org/2002/12/cal/ical#"),s=tn("http://www.w3.org/ns/pim/trip#"),l=t.createElement("div");l.setAttribute("class","transactionPane"),l.innerHTML="<h2>Trip transactions</h2>";let f=function(u,m){m===void 0&&(m="color: grey");let g=t.createElement("pre");g.setAttribute("style",m),l.appendChild(g),g.appendChild(t.createTextNode(u))},p=r.findTypeURIs(e),c=function(u,m){let g=new vn(N.label(u)),h=["date","transaction","comment","type","in_USD"],b={};h.forEach(function(S){g.vars.push(b[S]=an(S))}),g.pat.add(b.transaction,s("trip"),u);let w=r.formula();w.add(b.transaction,i.rdf("type"),b.type),g.pat.optional.push(w),g.pat.add(b.transaction,o.qu("date"),b.date),w.add(b.transaction,i.rdfs("comment"),b.comment),g.pat.optional.push(w),g.pat.add(b.transaction,o.qu("in_USD"),b.in_USD);let I=On(t,{query:g,onDone:function(){let S={},A=r.each(void 0,s("trip"),u);A.forEach(function(E){let X=r.the(E,i.rdf("type"));if(X||(X=o.qu("ErrorNoType")),X&&X.uri){let J=X.uri;S[J]||(S[J]=0);let oe=r.any(E,o.qu("in_USD"));oe||f("    @@ No amount in USD: "+oe+" for "+E),oe&&(S[J]=S[J]+parseFloat(oe.value))}});let O="",q=0,F=0;for(let E in S)O+=N.label(r.sym(E))+": "+S[E]+"; ",q++,F+=S[E];f("Totals of "+A.length+" transactions: "+O,""),q>1&&f("Overall net: "+F,"text-treatment: bold;")}});m.appendChild(I)};if(o.qu("Transaction")in r.findSuperClassesNT(e)){let d=r.each(void 0,i.rdf("type"),e),u=[],m=[];for(let h=0;h<d.length;h++){let b=d[h],w=r.any(b,s("trip"));if(!w)u.push(b);else{b in m||(m[w]={total:0,transactions:[]});let _=r.any(b,o.qu("in_USD"));_&&(m[w].total+=_);let I=r.any(b,o.qu("date"));m[w.toNT()].transactions.push([I,b])}}let g=[];for(let h in m){let b=r.fromNT(h);g.push([r.any(b,a("dtstart")),b])}g.sort();for(let h=0;h<g.length;h++){let b=g[h][1];c(b,l)}}else p["http://www.w3.org/ns/pim/trip#Trip"]&&c(e,l);return l}};Oe(ge(`.image-pane__image {
  max-width: 100%;
  max-height: 100%;
}
`,"text/css"));function Va(e,n,t){let r=e.fetcher.getHeader(n,"content-type");if(!r)return!1;for(let i of r)for(let a of t)if(i.includes(a))return!0;return!1}var Wa={icon:B.originalIconBase+"tango/22-image-x-generic.png",name:"image",label:function(e,n){let t=n.session.store;return!(t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/dc/terms/Image"))||Va(t,e,["image/"]))||Va(t,e,["application/pdf"])?null:"Image"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","image-pane");let a=t.createElement("img");return r.fetcher._fetch(e.uri).then(function(s){return s.blob()}).then(function(s){let l=URL.createObjectURL(s);a.setAttribute("src",l)}).catch(function(s){a.setAttribute("alt","Unable to load image"),ue.warn("Unable to load image resource: "+s)}),a.classList.add("image-pane__image"),i.appendChild(a),i}};var El=o,Ga={icon:B.iconBase+"noun_1619.svg",name:"playlistSlot",audience:[El.solid("PowerUser")],label:function(e,n){let t=n.session.store;return t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/ontology/pbo/core#PlaylistSlot"))?"Playlist Slot":null},render:function(e,n){let t=n.dom;function r(h,b){if(!h)return{html5:!0};let w=h.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-_%]+)/i),_=h.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),I=h.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),S=h.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);if(w)return{youtube:w};if(_)return{vimeo:_};if(I)return{dailymotion:I};if(S)return{vk:S}}let i=function(h,b){if(!b)return h;let w=t.createElement("a");return w.setAttribute("href",b),w.appendChild(h),w.addEventListener("click",re.openHrefInOutlineMode,!0),w},a=function(h){return t.createTextNode(h)},s=n.session.store,l=s.any(e,we("http://purl.org/ontology/pbo/core#playlist_item")),f=s.any(e,we("http://purl.org/ontology/olo/core#index")),p=l.uri,c=r(p),d=t.createElement("div"),u;c&&c.youtube?(p=p.replace("watch?v=","embed/"),d.setAttribute("class","imageView"),u=t.createElement("IFRAME"),u.setAttribute("src",p),u.setAttribute("frameborder",0),u.setAttribute("style","width: 100%; aspect-ratio: 16/9; max-width: 100%; border: 0;"),u.setAttribute("allowfullscreen","true")):(d.setAttribute("class","imageView"),u=t.createElement("IMG"),u.setAttribute("src",l.value),u.setAttribute("style","max-width: 100%; height: auto;"));let m;if(f){let h=s.statementsMatching(null,we("http://purl.org/ontology/olo/core#index")),b=[];for(let O=0;O<h.length;O++)h[O]&&b.push(parseInt(h[O].object.value,10));f=parseInt(f.value,10),m=t.createElement("div");let w=b[(b.indexOf(f)-1+b.length)%b.length],_=b[(b.indexOf(f)+1+b.length)%b.length],I=i(a("<<"),e.uri.split("#")[0]+"#"+w);m.appendChild(I);let S=t.createElement("span");S.innerHTML=" Playlist slot : "+f+" ",m.appendChild(S);let A=i(a(">>"),e.uri.split("#")[0]+"#"+_);m.appendChild(A)}let g=t.createElement("TR");return g.appendChild(u),m&&g.appendChild(m),d.appendChild(g),d}};var ja={icon:B.iconBase+"noun_1619.svg",name:"video",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=He.mediaTypeClass("video/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play video";return null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div"),a=i.appendChild(r.createElement("video"));return a.setAttribute("controls","yes"),t.fetcher._fetch(e.uri).then(function(s){return s.blob()}).then(function(s){let l=URL.createObjectURL(s);a.setAttribute("src",l)}),a.setAttribute("width","100%"),i}};var Wn=o,Ja={icon:B.iconBase+"noun_534313.svg",name:"audio",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=He.mediaTypeClass("audio/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play audio";return null},render:function(e,n){let t=n.session.store,r=n.dom,i={autoplay:!1,chain:!0,chainAlbums:!0,loop:!1},a=function(_){let I=_.lastIndexOf(".");if(I<0)return _;let S=_.lastIndexOf("/");return I<S?_:_.slice(0,I)},s=function(_){let I=t.any(void 0,Wn.ldp("contains"),_);if(!I)return!1;let S=t.each(I,Wn.ldp("contains"));if(S.length<2)return!1;let A=_.uri;for(let O=0;O<S.length;O++){let q=S[O].uri;if(A.length>q.length&&A.startsWith(a(q))||A.endsWith(".m4a")&&q.endsWith(".mp3")&&a(A)===a(q))return!0}return!1},l=function(_){let I=_.uri.split("/").slice(-3),S=function(A){try{return decodeURIComponent(A)}catch{return A}};g.textContent=S(I[0]),h.textContent=S(I[1]),b.textContent=S(a(I[2]))},f=function(_,I){return new Promise(function(S){if(I=I||0,!i.chain)return S(null);let A=t.any(void 0,Wn.ldp("contains"),_)||_.dir();if(!A)return S(null);t.fetcher.load(A).then(function(O){let q=t.each(A,Wn.ldp("contains")),F;q.sort();for(let E=0;E<q.length;E++)if(_.uri===q[E].uri)if(F=(E+1)%q.length,F===0)if(i.chainAlbums){if(I===1||!i.chainAlbums)return S(null);f(A,I+1).then(function(X){X&&t.fetcher.load(X).then(function(J){let oe=t.each(X,Wn.ldp("contains"));return oe.length===0?S(null):(oe.sort(),console.log("New Album: "+X),S(oe[0]))})})}else return i.loop?S(q[F]):S(null);else return S(q[F])})})},p=function(_){let I=t.sym(_.target.getAttribute("src"));if(!i.chain)return;let S=function(A){let O=A;f(O).then(function(q){if(!q){console.log("No successor to "+O);return}s(q)?(console.log("Ignoring redundant "+q),S(q)):(console.log("Moving on to "+q),l(q),w.appendChild(c(q,!0)),w.removeChild(_.target))})};S(I)},c=function(_,I){let S=r.createElement("audio");return S.setAttribute("controls","yes"),t.fetcher._fetch(_.uri).then(function(A){return A.blob()}).then(function(A){let O=URL.createObjectURL(A);S.setAttribute("src",O)}),I&&S.setAttribute("autoplay","autoplay"),S.addEventListener("ended",p,!1),S},d=r.createElement("div"),u=d.appendChild(r.createElement("table")),m="padding: 0.3em; color:white; background-color: black;",g=u.appendChild(r.createElement("tr"));g.style.cssText=m;let h=u.appendChild(r.createElement("tr"));h.style.cssText=m;let b=u.appendChild(r.createElement("tr"));b.style.cssText=m;let w=u.appendChild(r.createElement("tr"));return l(e),w.appendChild(c(e,i.autoplay)),!t.holds(void 0,Wn.ldp("contains"),e)&&e.dir()&&t.fetcher.load(e.dir()),d}};var Ya=ft(ui(),1);var Tl=`<!DOCTYPE html>
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
`,Ka=Tl;var Xa={icon:B.iconBase+"dokieli-logo.png",name:"Dokieli",mintClass:o.solid("DokieliDocument"),label:function(e,n){return null},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(!r){let f=n.newBase;f.endsWith("/")&&(f=f.slice(0,-1),n.newBase=f),r=t.sym(f)}let i=Ya.lookup(r.uri);(!i||!i.includes("html"))&&(r=we(r.uri+".html")),n.newInstance=r;let a=Ka,s=r.uri.split("/").slice(-1)[0];s=decodeURIComponent(s.split(".")[0]);let l=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return a=a.replace("<title>","<title>"+l),a=a.replace("</article>","<h1>"+l+"</h1></article>"),t.fetcher.webOperation("PUT",r.uri,{data:a,contentType:"text/html"}).then(function(){return console.log("new Dokieli document created at "+n.newInstance),n})}};var Qa=new Set;function Lr(e){let n=String(e);if(Qa.has(n)||typeof document>"u")return;Qa.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}var Al=()=>Promise.all([import("./part-N7TZWSOA.js"),import("./part-XGUH7HMV.js")]);Lr(ge(`/*
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
`,"text/css"));Lr(ge(`:root {
  /* Shared utility variables (e.g., base icon size) */
  --icon-base: 2em;
}`,"text/css"));var Pl=["explorer","storage","container"];function Sl(e){return e.folderView&&Pl.includes(e.folderView)?e.folderView:e.fullView===!0||e.solo===!0?"container":"explorer"}var Fr={icon:B.iconBase+"noun_973694_expanded.svg",name:"folder",mintNew:function(e,n){let t=e.session.store,i=(n.newInstance||t.sym(n.newBase)).uri;i.endsWith("/")&&(i=i.slice(0,-1));let a=t.sym(i+"/");return n.newInstance=a,t.fetcher.webOperation("PUT",a.uri).then(function(){return n})},label:function(e,n){if(ki(e)||Ii(e))return null;let t=n.session.logic.resource;if(!t.isContainer(e))return null;let r=t.getContainerMemberCount(e);return r>0?"Contents ("+r+")":"Contents (0)"},render:function(e,n,t){Al();let r=n.dom,i=r.createElement("div");i.classList.add("instancePane","folder-pane");let a=i.appendChild(r.createElement("folder-pane-view")),s=t&&typeof t=="object"?t:{};a.browserContext=n,a.subject=e;let l=Sl(s);return i.classList.add(`folder-pane--${l}`),a.fullView=l==="container",i}};var gn=o,Za={icon:B.originalIconBase+"tango/22-folder-open.png",name:"classInstance",audience:[gn.solid("PowerUser")],label:function(e,n){let r=n.session.store.each(void 0,gn.rdf("type"),e).length;return r>0?"List ("+r+")":null},render:function(e,n){let t=n.dom,r=n.getOutliner(t),i=n.session.store,a=function(p,c){let d=t.createElement("pre");d.setAttribute("style","background-color: "+c||"#eed;"),s.appendChild(d),d.appendChild(t.createTextNode(p))},s=t.createElement("div");s.setAttribute("class","instancePane"),s.setAttribute("style","  border-top: solid 1px #777; border-bottom: solid 1px #777; margin-top: 0.5em; margin-bottom: 0.5em ");let l=i.statementsMatching(void 0,gn.rdf("type"),e);if(l.length>0){let f={},p=[];l.forEach(c=>{f[c.subject.toNT()]=c});for(let c in i.findMembersNT(e))f[c]||p.push(Le(i.fromNT(c),gn.rdf("type"),e));if(p.length&&a("There are "+l.length+" explicit and "+p.length+" implicit members of "+N.label(e)),!e.sameTerm(gn.rdf("Property"))){if(e.sameTerm(gn.rdfs("Class"))){let c=i.statementsMatching(void 0,gn.rdf("type"),void 0),d={};c.forEach(function(m){d[m.object]=m});let u=[];for(let m in d)u.push(Le(we(m),gn.rdf("type"),gn.rdfs("Class")));a("Total of "+c.length+" type statements and "+u.length+" unique types.")}}if(l.length>10){let c=t.createElement("TR");c.appendChild(t.createTextNode(""+l.length)),s.appendChild(c)}r.appendPropertyTRs(s,l,!0,function(c){return!0}),p.length&&(a("Implicit:"),r.appendPropertyTRs(s,p,!0,function(c){return!0}))}return s}};var to=ft(eo(),1),ro=o,Nl=0;function no(e,n){return je.resource.isContainer(e)?n.each(e,ro.ldp("contains")).filter(r=>je.resource.isImage(r)):[]}var io={icon:B.iconBase+"noun_138712.svg",name:"slideshow",audience:[ro.solid("PowerUser")],label:function(e,n){let t=n.session.store;if(je.resource.isContainer(e)){let r=no(e,t);return new Set(r.map(i=>i.uri)).size>1?"Slideshow":null}return null},render:function(e,n){let t=n.dom;re.addStyleSheet(t,"https://leemark.github.io/better-simple-slideshow/css/simple-slideshow-styles.css");let i=n.session.store,a=t.createElement("div"),s=`slideshow-${++Nl}`;a.id=s,a.setAttribute("class","bss-slides");let l=[...new Map(no(e,i).map(p=>[p.uri,p])).values()];l.sort((p,c)=>p.uri.localeCompare(c.uri));for(let p=0;p<l.length;p++){let c=a.appendChild(t.createElement("figure")),d=c.appendChild(t.createElement("img"));i.fetcher._fetch(l[p].uri).then(function(u){return u.blob()}).then(function(u){let m=URL.createObjectURL(u);d.setAttribute("src",m)}),d.style.width="100%",c.appendChild(t.createElement("figcaption"))}let f={dom:t};return t.defaultView.requestAnimationFrame(function(){(0,to.default)(`#${s}`,f)}),a}};var Gn=String.raw,Ll=Gn`
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
`,Fl=Gn`
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
`,Mr=Gn`
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
`,vm=Gn`
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
`,Ml=Gn`
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
`,Rl=Gn`
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
`;var Sm=[{key:"homepage",label:"Homepage",placeholder:"https://example.com",predicate:o.foaf("homepage")},{key:"weblog",label:"Weblog",placeholder:"https://blog.example.com",predicate:o.foaf("weblog")},{key:"workplaceHomepage",label:"Workplace Homepage",placeholder:"https://company.example.com",predicate:o.foaf("workplaceHomepage")},{key:"schoolHomepage",label:"School Homepage",placeholder:"https://school.example.edu",predicate:o.foaf("schoolHomepage")}];function Rr(e){let{dom:n,subject:t,familiar:r,me:i,meUri:a,incoming:s,outgoing:l,editable:f,profile:p,knows:c,mutualConnections:d,link:u,text:m,buildCheckboxForm:g,renderSupportingInfo:h,renderNameSuffix:b}=e,w=function(){},_=n.createElement("section");_.className="social-pane__mutual-friends social-primary__panel",_.id="social-panel-mutual",_.setAttribute("role","tabpanel"),_.setAttribute("aria-labelledby","social-tab-mutual");let I=_.appendChild(n.createElement("div"));I.classList.add("social-main","social-main--mutual","flex-column");let S=n.createElement("div");S.classList.add("social-mutual-summary","flex-column"),I.appendChild(S);let A=function(){let F=S.appendChild(n.createElement("div"));return F.classList.add("social-mutual-summary-line"),F},O=function(){let F=A();return F.appendChild(u(m("You"),a)),F.appendChild(m(" and ")),F.appendChild(u(m(r),t.uri)),F};if(s)if(l)O().appendChild(m(" say you know each other."));else{S.classList.add("social-mutual-summary--confirm");let F=S.appendChild(n.createElement("div"));F.classList.add("social-mutual-summary-line"),F.appendChild(u(m(r),t.uri)),F.appendChild(m(" knows ")),F.appendChild(u(m("you"),a)),F.appendChild(m(" (unconfirmed)."))}else if(!l)O().appendChild(m(" have not said you know each other."));else{let F=A();F.appendChild(u(m("You"),a)),F.appendChild(m(" know ")),F.appendChild(u(m(r),t.uri)),F.appendChild(m(" (unconfirmed)."))}if(!!s&&!l){let F=n.createElement("span");F.className="social-mutual-confirm-prompt",F.appendChild(m("Confirm you know ")),F.appendChild(u(m(r),t.uri));let E=g(F,new Qe(i,c,t,p??void 0),!!l,{disabled:!f,disabledTitle:f?void 0:"Your profile is not editable"});E.classList.add("social-mutual-checkbox-form"),I.appendChild(E)}if(d.length){let F=I.appendChild(n.createElement("table"));F.className="social-main social-friends-list social-friends-grid";let E=function(X){return re.personTR(n,o.foaf("knows"),X,{renderSupportingInfo:h,renderNameSuffix:b})};w=function(){let X=[...d].sort((J,oe)=>{let ce=N.label(J)||J.value,H=N.label(oe)||oe.value;return ce.localeCompare(H)});N.syncTableToArray(F,X,E,function(J,oe){return E(oe)})},w()}return{section:_,content:I,refreshMutualFriends:w}}function ao(e){let{dom:n,subject:t,profile:r,editable:i,renderSupportingInfo:a,renderNameSuffix:s}=e,l=n.createElement("section");l.className="social-pane__all-friends social-primary__panel",l.id="social-panel-all-friends",l.setAttribute("role","tabpanel"),l.setAttribute("aria-labelledby","social-tab-all-friends");let f=l.appendChild(n.createElement("div"));f.className="social-friends-delete-confirmation";let p=l.appendChild(n.createElement("table"));p.className="social-main";let c=re.attachmentList(n,t,p,{doc:r,modify:!!i,predicate:o.foaf("knows"),noun:"friend",confirmationContainer:f,refreshOnDocumentLoad:!1,renderSupportingInfo:a,renderNameSuffix:s});c.classList.add("social-friends-list"),c.style.marginTop="0";let d=c.rows[0],u=d.cells[0],m=d.cells[1];if(u.replaceChildren(...Array.from(m.childNodes)),u.classList.add("social-friends-list-surface"),m.remove(),i){let h=n.createElement("p");h.className="social-friends-drop-hint",h.textContent="Drop a WebID anywhere here to add a friend.",u.prepend(h)}let g=c.querySelector("td table");return g instanceof HTMLTableElement&&g.classList.add("social-friends-grid"),{section:l,mainTable:p,friendsList:c}}function oo(e){let{dom:n,triage:t,renderSupportingInfo:r,renderNameSuffix:i}=e,a=n.createElement("section");a.className="social-pane__requests social-primary__panel",a.id="social-panel-requests",a.setAttribute("role","tabpanel"),a.setAttribute("aria-labelledby","social-tab-requests");let s=a.appendChild(n.createElement("div"));s.classList.add("social-main","social-main--requests","flex-column");let l=s.appendChild(n.createElement("p"));l.className="social-requests__note",l.textContent="Best effort preview: this view only reflects profile documents that are currently loaded. A dedicated inbox would still be needed for complete request discovery.";let f=function(h,b,w){let _=s.appendChild(n.createElement("section"));_.classList.add("social-requests__group","flex-column");let I=_.appendChild(n.createElement("div"));I.className="social-requests__group-header";let S=I.appendChild(n.createElement("h2"));S.className="social-requests__group-title",S.textContent=h;let A=I.appendChild(n.createElement("p"));A.className="social-requests__group-description",A.textContent=b;let O=_.appendChild(n.createElement("p"));O.className="social-requests__empty",O.textContent=w;let q=_.appendChild(n.createElement("table"));return q.className="social-main social-friends-list social-friends-grid social-requests__table",{empty:O,table:q}},p=f("Incoming requests","People who say they know this profile, but have not been confirmed yet.","No incoming requests are visible from the currently loaded data."),c=f("Awaiting confirmation","People this profile knows who have not linked back yet.","Nothing is waiting for confirmation right now."),d=function(h){return re.personTR(n,o.foaf("knows"),h,{renderSupportingInfo:r,renderNameSuffix:i})},u=function(h){return[...h].sort((b,w)=>{let _=N.label(b)||b.value,I=N.label(w)||w.value;return _.localeCompare(I)})},m=function(h,b){let w=u(b);h.empty.hidden=w.length>0,h.table.hidden=w.length===0,N.syncTableToArray(h.table,w,d,function(_,I){return d(I)})},g=function(h){m(p,h.requests),m(c,h.unconfirmed)};return g(t),{section:a,refreshRequests:g}}async function Un(){return _e.currentUser()??await _e.checkUser()}function st(e,n=_e.currentUser()){let{value:t,uri:r}=typeof n=="object"&&n!==null?n:{},i=typeof n=="string"?n:t||r||null;return i?i===e.value?"owner":"authenticated":"anonymous"}function so(e){let n=new Set,t=[];for(let r of e){let i=r?.value;!i||n.has(i)||(n.add(i),t.push(r))}return t}function jn(e,n){let t=so(e.each(n,o.foaf("knows"))),r=so(e.each(void 0,o.foaf("knows"),n)),i=[],a=[],s=[];for(let l of t)r.some(p=>p.sameTerm(l))?i.push(l):a.push(l);for(let l of r)t.some(p=>p.sameTerm(l))||s.push(l);return{acquaintances:t,confirmed:i,unconfirmed:a,requests:s}}async function lo(e,n){let t=e.session.store,r=t.fetcher;if(!r||typeof r.load!="function")return jn(t,n);try{await r.load(n.doc())}catch{}let i=jn(t,n),a=new Map;a.set(n.doc().value,n.doc());for(let l of[...i.acquaintances,...i.requests])a.set(l.doc().value,l.doc());let s=t.statementsMatching(void 0,o.foaf("knows"),n);for(let l of s){let f=l.why;f?.value&&a.set(f.value,f)}for(let l of a.values())try{await r.load(l)}catch{}return jn(t,n)}Oe(ge(`.social-pane-host,\r
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
`,"text/css"));function Dl(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("social-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var co={icon:B.originalIconBase+"foaf/foafTiny.gif",name:"social",label:function(e,n){let r=n.session.store.findTypeURIs(e);return r[o.foaf("Person").uri]||r[o.vcard("Individual").uri]?"Friends":null},global:!1,render:function(e,n){let t=n.dom,r=function(T,C){let k=[];for(let se=0;se<T.length;se++)for(let U=0;U<C.length;U++)if(C[U].sameTerm(T[se])){k.push(C[U]);break}return k},i=function(T){let C=new Set,k=[];for(let se of T)!se?.value||C.has(se.value)||(C.add(se.value),k.push(se));return k},a=function(T,C){if(!C)return T;let k=t.createElement("a");return k.setAttribute("href",C),k.appendChild(T),k},s=function(T){return t.createTextNode(T)},l=function(){},f=function(T,C,k,se={}){let U=t.createElement("form"),L=t.createElement("label"),te=t.createElement("input"),Y=t.createElement("span");Y.className="question",typeof T=="string"?Y.textContent=T:Y.appendChild(T),te.setAttribute("type","checkbox"),se.disabled&&(te.disabled=!0,se.disabledTitle&&(te.title=se.disabledTitle,te.setAttribute("aria-label",se.disabledTitle))),L.appendChild(Y),L.appendChild(te),U.appendChild(L);let ie=function(me){if(this.checked)try{p.UserInput.sparqler.insert_statement(C,function(be,fe,ye){if(Y.className="question",!fe){ue.alert("Error occurs while inserting "+C+`

`+ye),te.checked=!1;return}c.add(C.subject,C.predicate,C.object,C.why),l()})}catch(be){ue.error("Data write fails:"+be),ue.alert("Data write fails:"+be),te.checked=!1,Y.className="question"}else try{p.UserInput.sparqler.delete_statement(C,function(be,fe,ye){Y.className="question",fe?(c.removeMany(C.subject,C.predicate,C.object,C.why),l()):(ue.alert("Error occurs while deleting "+C+`

`+ye),te.checked=!0)})}catch(be){ue.alert("Delete fails:"+be),te.checked=!0}};return te.checked=k,te.addEventListener("click",ie,!1),U},p=n.getOutliner(t),c=n.session.store,d=t.createElement("div");d.classList.add("social-pane","flex-column","gap-xxs"),Dl(d,n);let u=o.foaf,m=o.vcard,g=_e.currentUser(),h=g?g.uri:null,b=g&&c.sameThings(g,e),w=u("knows"),_=c.anyValue(e,u("givenname"))||c.anyValue(e,u("firstName"))||c.anyValue(e,u("nick"))||c.anyValue(e,u("name"))||c.anyValue(e,m("fn")),I=c.each(e,w),S=i(I),A=g?i(c.each(g,u("knows"))):[],O=g&&!b?i(r(S,A)).filter(T=>!c.sameThings(T,g)):[],q=st(e,g),F=null,E=!1,X=!1,J=!1,oe=d.appendChild(t.createElement("div"));oe.className="social-layout";let ce=oe.appendChild(t.createElement("div"));ce.className="social-primary";let H=ce.appendChild(t.createElement("div"));H.classList.add("social-primary__tabs","flex-center"),H.setAttribute("role","tablist"),H.setAttribute("aria-label","Social sections");let M=H.appendChild(t.createElement("button"));M.className="social-primary__tab",M.type="button",M.id="social-tab-all-friends",M.textContent="All Friends",M.setAttribute("role","tab"),M.setAttribute("aria-controls","social-panel-all-friends"),M.setAttribute("aria-selected","true"),M.tabIndex=0;let Z=H.appendChild(t.createElement("button"));if(Z.className="social-primary__tab",Z.type="button",Z.id="social-tab-mutual",Z.textContent="Mutual",Z.setAttribute("role","tab"),Z.setAttribute("aria-controls","social-panel-mutual"),Z.setAttribute("aria-selected","false"),Z.tabIndex=-1,g){let T=c.each(void 0,u("primaryTopic"),g),C="";for(let k=0;k<T.length;k++)if(c.whether(T[k],o.rdf("type"),u("PersonalProfileDocument"))){let se=T[k];if(E=p.UserInput.sparqler.editable(se.uri,c),!E)C+="Your profile <"+N.escapeForXML(se.uri)+"> is not remotely editable.";else{F=se;break}}if(!b){let k=c.canon(g);X=c.whether(e,w,k),J=!1;let se=c.statementsMatching(k,w,e);se.length&&(J=!0,F||(F=se[0].why))}}let ne=q==="owner"&&E,G=q==="authenticated"&&!b&&E&&!!F,j=ne,R=new Map;(function(T){let C=new Map;T.forEach(k=>{!k?.value||k.value===e.value||C.set(k.value,zt(c,k))}),R.clear(),C.forEach((k,se)=>{R.set(se,k)})})(S);let $=function(T,C){let k=R.get(T.value)||zt(c,T);R.set(T.value,k);let se=C.createElement("div"),U=[k.jobTitle,k.organization].filter(Boolean).join(" | ");if(U){let L=se.appendChild(C.createElement("div"));L.className="social-friend-job-org",L.textContent=U}if(k.location){let L=se.appendChild(C.createElement("div"));L.className="social-friend-location",L.innerHTML=`${Mr} ${k.location}`}return se.childNodes.length?se:null},Q=function(T,C){let k=R.get(T.value)||zt(c,T);R.set(T.value,k);let se=k.pronouns;if(!se)return null;let U=C.createElement("span");return U.className="social-friend-pronouns",U.textContent=`(${se})`,U},le=g&&!b?Rr({dom:t,subject:e,familiar:_,me:g,meUri:h,incoming:X,outgoing:J,editable:G,profile:F,knows:w,mutualConnections:O,link:a,text:s,buildCheckboxForm:f,renderSupportingInfo:$,renderNameSuffix:Q}):{section:t.createElement("section"),content:t.createElement("div"),refreshMutualFriends:function(){}},D=le.section,K=le.content;D.className||(D.className="social-pane__mutual-friends social-primary__panel",D.id="social-panel-mutual",D.setAttribute("role","tabpanel"),D.setAttribute("aria-labelledby","social-tab-mutual"),K.className="social-main social-main--mutual",D.appendChild(K)),ce.appendChild(D);let V=ao({dom:t,subject:e,profile:j?F:null,editable:j,renderSupportingInfo:$,renderNameSuffix:Q}),de=V.section,ae=V.friendsList;ce.appendChild(de);let pe=jn(c,e),he=oo({dom:t,triage:pe,renderSupportingInfo:$,renderNameSuffix:Q}),xe=he.section;ce.appendChild(xe);let Se=H.appendChild(t.createElement("button"));Se.className="social-primary__tab",Se.type="button",Se.id="social-tab-requests",Se.textContent="Requests",Se.setAttribute("role","tab"),Se.setAttribute("aria-controls","social-panel-requests"),Se.setAttribute("aria-selected","false"),Se.tabIndex=-1;let Re="all-friends",ve=q==="owner",Ne=function(T){Re=T;let C=T==="mutual",k=T==="all-friends",se=ve&&T==="requests";Z.classList.toggle("social-primary__tab--active",C),Z.setAttribute("aria-selected",String(C)),Z.tabIndex=C?0:-1,M.classList.toggle("social-primary__tab--active",k),M.setAttribute("aria-selected",String(k)),M.tabIndex=k?0:-1,Se.classList.toggle("social-primary__tab--active",se),Se.setAttribute("aria-selected",String(se)),Se.tabIndex=se?0:-1,D.classList.toggle("social-primary__panel--active",C),D.setAttribute("aria-hidden",String(!C)),de.classList.toggle("social-primary__panel--active",k),de.setAttribute("aria-hidden",String(!k)),xe.classList.toggle("social-primary__panel--active",se),xe.setAttribute("aria-hidden",String(!se)),xe.hidden=!ve||!se},y=function(){if(!g||b)return;let T=c.canon(g);X=c.whether(e,w,T),J=c.statementsMatching(T,w,e).length>0;let k=Rr({dom:t,subject:e,familiar:_,me:g,meUri:h,incoming:X,outgoing:J,editable:G,profile:F,knows:w,mutualConnections:O,link:a,text:s,buildCheckboxForm:f,renderSupportingInfo:$,renderNameSuffix:Q});D.replaceWith(k.section),le=k,D=k.section,K=k.content};l=function(){y(),pe=jn(c,e),he.refreshRequests(pe),Ne(Re)},Ne("all-friends");let v=function(T){let C=T==="authenticated"&&!b;if(ve=T==="owner",Z.hidden=!C,Se.hidden=!ve,!ve&&Re==="requests"){Ne("all-friends");return}Ne("all-friends")};Z.addEventListener("click",function(){Ne("mutual")}),M.addEventListener("click",function(){Ne("all-friends")}),Se.addEventListener("click",function(){Ne("requests")});let x=function(){let T=ae.refresh;typeof T=="function"&&T.call(ae)},P=function(){le.refreshMutualFriends()};return(async()=>{try{for await(let T of zl(n,e))R.clear(),T.forEach(C=>{R.set(C.url,C)}),x(),P()}catch{}})(),(async()=>{try{pe=await lo(n,e),he.refreshRequests(pe),x(),P()}catch{}})(),v("anonymous"),_e.checkUser().then(T=>{let C=st(e,T);v(C)}).catch(()=>{v("anonymous")}),d}},Bl=3;function Ol(e,n){let t=e.anyJS(n,o.solid("preferredSubjectPronoun"))||"";if(t){let r=e.anyJS(n,o.solid("preferredObjectPronoun"));r&&(t+="/"+r)}return t||""}function ql(e,n){return e&&n?`${n}, ${e}`:e||n||null}function zt(e,n){let t=e.anyValue(n,o.vcard("fn"))||e.anyValue(n,o.foaf("name"))||null,r=e.anyValue(n,o.vcard("nickname"))||e.anyValue(n,o.foaf("nick"))||null,i=e.anyValue(n,o.vcard("bday"))||null,a=re.findImage(n),s=e.anyValue(n,o.vcard("role"))||null,l=e.anyValue(n,o.vcard("organization-name"))||null,p=e.any(n,o.vcard("hasAddress"))||null,c=p!=null?e.anyValue(p,o.vcard("country-name")):null,d=p!=null?e.anyValue(p,o.vcard("locality")):null,u=ql(c,d),m=Ol(e,n);return{url:n.value,imageUrl:a,name:t,nickname:r,jobTitle:s,organization:l,birthdate:i,location:u,pronouns:m,subjectNode:n}}async function*zl(e,n,t=Bl){let r=e.session.store,i=r?.fetcher;if(i&&typeof i.load=="function")try{await i.load(n.doc())}catch{}let a=new Set,s=r.each(n,o.foaf("knows"),null,n.doc()),l=[];for(let p of s){let c=p?.value;!c||a.has(c)||n.value===c||(a.add(c),l.push(p))}let f=[];for(let p of l){if(i&&typeof i.load=="function")try{await i.load(p.doc())}catch{}f.push(zt(r,p)),f.length%t===0&&(yield[...f])}f.length>0&&f.length%t!==0&&(yield[...f])}var $l=()=>Promise.all([import("./part-E7LFGATT.js"),import("./part-DURS3C3N.js")]).then(([e,n])=>({marked:e.marked,DOMPurify:n.default}));Oe(ge(`.human-readable-pane {
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
`,"text/css"));function uo(){try{return _e.currentUser()?.value??null}catch{return null}}var Dr=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.(md|markdown|mdown|mkd|mkdn)$/i.test(n)},Hl=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.json$/i.test(n)},bn=new Map;function Br(e,n,t){e.className="",e.classList.add("human-readable-pane__frame"),e.classList.add(`human-readable-pane__frame--${n}`),t!==void 0&&e.style.setProperty("--human-readable-pane-height",`${t*16}px`)}var $r="solidos-human-readable-preview",$t="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals",po=e=>e.includes('<script src="https://dokie.li/scripts/dokieli.js">')||e.includes("dokieli.css");function Or(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qr(e,n){let t=e.match(/<base(\s[^>]*)?>/i);if(t&&t.index!==void 0){let a=t[0].match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i),s=a?.[1]??a?.[2]??a?.[3];if(!a||s===void 0||/^[a-z][a-z\d+.-]*:/i.test(s)||s.startsWith("//"))return e;let l;try{l=new URL(s,n).href}catch{return e}let f=t[0].replace(a[0],`href="${Or(l)}"`);return e.slice(0,t.index)+f+e.slice(t.index+t[0].length)}let r=`<base href="${Or(n)}">`,i=e.match(/<head(\s[^>]*)?>/i);if(i&&i.index!==void 0){let a=i.index+i[0].length;return e.slice(0,a)+r+e.slice(a)}return r+e}function mo(e){let n=`<script>
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
<\/script>`,t=e.replace(/<\/body\s*>/i,`${n}$&`);return t===e?`${e}${n}`:t}function go(e){let n=e.split("/").pop()||e;try{return decodeURIComponent(n)}catch{return n}}function fo(e,n){let t=go(n);try{return new DOMParser().parseFromString(e,"text/html").querySelector("title")?.textContent?.trim()||t}catch{return t}}var Ht="solidos-preview-request",lt="solidos-preview-response",bo="data-solidos-preview-bridge",Vt=new Set(["GET","HEAD"]),zr=new Set(["PUT","PATCH","DELETE"]);function wo(e){if(typeof e!="string"||!e.includes(Ht))return e;let n=new DOMParser().parseFromString(e,"text/html"),t=!1;for(let i of n.querySelectorAll("script")){let a=i.textContent||"";(i.hasAttribute(bo)||a.includes(Ht)&&a.includes(lt)&&a.includes("const pending = new Map()"))&&(i.remove(),t=!0)}if(!t)return e;let r=e.match(/<!doctype[^>]*>/i)?.[0];return`${r?`${r}
`:""}${n.documentElement.outerHTML}`}function Vl(e){return e==="about:srcdoc"||/^file:\/\/srcdoc\/?(?:[?#].*)?$/i.test(e)}function yo(e,n){let t=new URL(e,n).href;return Vl(t)?n:t}function Wl(e){if(e)try{let n=new URL(e);return n.hash="",n.href}catch{return}}function Gl(e,n,t,r=null){let i,a;try{i=new URL(yo(e,t)),a=new URL(t)}catch{return!1}if(i.origin!==a.origin)return!1;let s=n.toUpperCase(),l=new URL(i.href);l.hash="";let f=new URL(a.href);f.hash="";let p=l.href===f.href,c=i.href===a.href,d=i.pathname==="/profile/card"||l.href===Wl(r);return Vt.has(s)&&(p||d)||c&&zr.has(s)}function jl(e,n,t,r=null){let i=`<script ${bo}="true">
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
        type: ${JSON.stringify(Ht)},
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
    if (!message || message.type !== ${JSON.stringify(lt)} || message.nonce !== nonce) return
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
      (${JSON.stringify(Array.from(Vt))}.includes(method) ||
        (url === documentUri && ${JSON.stringify(Array.from(zr))}.includes(method)))
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
        (${JSON.stringify(Array.from(Vt))}.includes(this._method) ||
          (resolvedUrl === documentUri && ${JSON.stringify(Array.from(zr))}.includes(this._method)))
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
<\/script>`,a=wo(e)??e;return qr(a,n).replace(/<head(\s[^>]*)?>/i,s=>`${s}${i}`)}function ho(e,n,t,r,i=null){let a=e.ownerDocument.defaultView;if(!a)return;let s=new Uint32Array(4);a.crypto.getRandomValues(s);let l=Array.from(s,c=>c.toString(16)).join("-"),f=new URL(n).href,p=c=>{let d=c.data;if(c.source!==e.contentWindow||!d||d.type!==Ht||d.nonce!==l)return;let u=g=>{e.contentWindow?.postMessage(g,"*")};if(!Gl(d.url,d.method,f,i)){u({type:lt,nonce:l,id:d.id,ok:!1,status:403,headers:[],body:"",error:"Request not permitted by the SolidOS preview"});return}let m=yo(d.url,f);r(m,{method:d.method,headers:d.headers,body:Vt.has(d.method)?void 0:wo(d.body)}).then(async g=>{u({type:lt,nonce:l,id:d.id,ok:g.ok,status:g.status,headers:Array.from(g.headers.entries()),body:await g.text()})}).catch(g=>{u({type:lt,nonce:l,id:d.id,ok:!1,status:0,headers:[],body:"",error:g instanceof Error?g.message:String(g)})})};a.addEventListener("message",p),e.setAttribute("sandbox",$t),e.srcdoc=jl(t,f,l,i)}function Jl(e,n){let t=r=>{let i=r.data;r.source!==e.contentWindow||i?.type!=="solidos-preview-size"||typeof i.height!="number"||!Number.isFinite(i.height)||(e.style.height=`${Math.max(1,Math.ceil(i.height))}px`,e.style.flexShrink="0")};return n.addEventListener("message",t),()=>n.removeEventListener("message",t)}var Kl={icon:function(e,n){if(e&&Dr(e.uri))return B.iconBase+"markdown.svg";if(e){let t=n.session.store,r=bn.get(e.uri);if(r==="dokieli")return B.iconBase+"dokieli-logo.png";if(r==="html")return B.originalIconBase+"tango/22-text-x-generic.png";let i=t.fetcher.getHeader(e.doc(),"content");if(i&&i.length>0){let l=i[0],f=l.includes('<script src="https://dokie.li/scripts/dokieli.js">')||l.includes("dokieli.css");return bn.set(e.uri,f?"dokieli":"html"),f?B.iconBase+"dokieli-logo.png":B.originalIconBase+"tango/22-text-x-generic.png"}let a=t.fetcher.getHeader(e.doc(),"content-type");if((a?a[0].split(";",1)[0].trim():null)==="text/html")return t.fetcher._fetch(e.uri).then(l=>l.text()).then(l=>{let f=l.includes('<script src="https://dokie.li/scripts/dokieli.js">')||l.includes("dokieli.css");return bn.set(e.uri,f?"dokieli":"html"),f?B.iconBase+"dokieli-logo.png":B.originalIconBase+"tango/22-text-x-generic.png"}).catch(()=>(bn.set(e.uri,"html"),B.originalIconBase+"tango/22-text-x-generic.png"))}return B.originalIconBase+"tango/22-text-x-generic.png"},name:"humanReadable",label:function(e,n){let t=n.session.store,r=["text/plain","text/html","text/markdown","application/json","application/xhtml+xml","application/pdf","video/mp4"],i=function(l,f,p){let c=l.fetcher.getHeader(f,"content-type");if(c){for(let d=0;d<c.length;d++)for(let u=0;u<p.length;u++)if(c[d].indexOf(p[u])>=0)return!0}return!1},a=function(l,f,p){let c=l.findTypeURIs(f);for(let d=0;d<p.length;d++)if(He.mediaTypeClass(p[d]).uri in c)return!0;return!1};if(!e.uri)return null;if(t.findTypeURIs(e)[o.link("WebPage").uri])return"Webpage";if(Dr(e.uri))return"View";if(i(t,e,r)||a(t,e,r)){let l=t.fetcher.getHeader(e.doc(),"content-type");return(l?l[0].split(";",1)[0].trim():null)==="text/html"&&!bn.has(e.uri)&&t.fetcher._fetch(e.uri).then(p=>p.text()).then(p=>{let c=p.includes('<script src="https://dokie.li/scripts/dokieli.js">')||p.includes("dokieli.css");bn.set(e.uri,c?"dokieli":"html")}).catch(()=>{bn.set(e.uri,"html")}),"View"}return null},render:function(e,n){let t=n.dom,r=t.createElement("div"),i=n.session.store;function a(u){let m=n.environment??{};u.dataset.layout=m.layout??"desktop"}let s=i.fetcher.getHeader(e.doc(),"content-type"),l=s?s[0].split(";",1)[0].trim():null,f=l==="text/markdown"||Dr(e.uri),p=l==="text/plain"||l==="application/json"||!l&&Hl(e.uri);l||console.log("humanReadablePane: unknown content-type?"),r.classList.add("human-readable-pane"),a(r);let c=function(u){i.fetcher.webOperation("GET",e.uri).then(async m=>{let{marked:g,DOMPurify:h}=await $l(),b=m.responseText??"",w=Math.min(30,b.split(/\n/).length+5),_=g.parse(b,{async:!1}),I=h.sanitize(_);u.innerHTML=I,Br(u,"markdown",w)}).catch(m=>{console.error("Error fetching markdown content:",m),u.innerHTML="<p>Error loading content</p>"})},d=function(u){i.fetcher.webOperation("GET",e.uri).then(m=>{let g=m.responseText??"",h=Math.min(30,g.split(/\n/).length+5);u.textContent=g,Br(u,"plain-text",h)}).catch(m=>{console.error("Error fetching plain text content:",m),u.textContent="Error loading content"})};if(f){let u=t.createElement("div");c(u);let m=t.createElement("div");m.classList.add("human-readable-pane__container"),m.appendChild(u),r.appendChild(m)}else if(p){let u=t.createElement("pre");d(u);let m=t.createElement("div");m.classList.add("human-readable-pane__container"),m.appendChild(u),r.appendChild(m)}else{let u=t.createElement("iframe");u.name=$r,u.title=go(e.uri),Br(u,"iframe");let m=t.defaultView,g=m?Jl(u,m):()=>{},h=l==="text/html"||l==="application/xhtml+xml",b=null,w=!1,_=!1,I=typeof MutationObserver>"u"?null:new MutationObserver(O=>{let q=O.some(F=>Array.from(F.addedNodes).some(E=>E===r||E.nodeType===Node.ELEMENT_NODE&&E.contains(r)));r.isConnected?_=!0:(_||q)&&(w=!0,b&&(URL.revokeObjectURL(b),b=null),g(),I?.disconnect())});I?.observe(t,{childList:!0,subtree:!0});let S=O=>{u.removeAttribute("src"),u.setAttribute("sandbox",""),u.srcdoc=`<p style="font-family: sans-serif">${Or(O)}</p>`};h?i.fetcher.webOperation("GET",e.uri).then(O=>{let q=O.responseText??"";u.title=fo(q,e.uri);let F=po(q);bn.set(e.uri,F?"dokieli":"html"),F?ho(u,e.uri,q,(E,X)=>i.fetcher._fetch(E,X),uo()):(u.setAttribute("sandbox",$t),u.srcdoc=mo(qr(q,e.uri)))}).catch(O=>{console.error("Error fetching HTML content:",O),S("Error loading content")}):i.fetcher._fetch(e.uri).then(async O=>{if(!O.ok)throw new Error(`HTTP ${O.status}`);let q=O.headers.get("content-type")?.split(";",1)[0].trim().toLowerCase();if(q==="text/html"||q==="application/xhtml+xml"){let E=await O.text();u.title=fo(E,e.uri);let X=po(E);bn.set(e.uri,X?"dokieli":"html"),X?ho(u,e.uri,E,(J,oe)=>i.fetcher._fetch(J,oe),uo()):(u.setAttribute("sandbox",$t),u.srcdoc=mo(qr(E,e.uri)));return}q!=="application/pdf"&&u.setAttribute("sandbox",$t);let F=URL.createObjectURL(await O.blob());if(w){URL.revokeObjectURL(F);return}b=F,u.src=F}).catch(O=>{console.error("Error fetching content:",O),S("Error loading content")});let A=t.createElement("div");A.classList.add("human-readable-pane__container"),A.classList.add("human-readable-pane__container--iframe"),A.appendChild(u),r.appendChild(A),r.classList.add("human-readable-pane--iframe")}return r}},vo=Kl;Oe(ge(`.data-content-pane__literal {
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
`,"text/css"));var Yl=0;function xo(e){let n=e;if(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;let r=!!(typeof document<"u"?document:void 0)?.outlineManager,i=typeof window<"u"&&typeof window.panes?.getOutliner=="function";(r||i)&&re.openHrefInOutlineMode(e)}var Co={icon:B.originalIconBase+"rdf_flyer.24.gif",name:"dataContents",audience:[o.solid("Developer")],label:function(e,n){if("http://www.w3.org/2007/ont/link#ProtocolEvent"in n.session.store.findTypeURIs(e))return null;let t=n.session.store.statementsMatching(void 0,void 0,void 0,e).length;return t===0?null:"Data ("+t+")"},statementsAsTables:function(n,t,r){let i=t.dom,a=i.createElement("table");a.classList.add("data-content-pane__table","data-content-pane__table--root");let s=t.environment?.layout==="mobile",l=Rn(t.session.store),f=l.rootSubjects(n),p=f.roots,c=f.subjects,d=f.loopBreakers??{};for(let I in d)ue.debug("	dataContentPane: loopbreaker:"+I);let u={},m={},g=++Yl,h=0;function b(I){return h++,`data-content-${g}-${I}-${h}`}function w(I,S=0){let A=i.createElement("table");A.classList.add("data-content-pane__table","data-content-pane__table--property"),A.setAttribute("aria-label","Properties");let O=null,q=c[l.toStr(I)];if(!q)return A.appendChild(i.createTextNode("...")),A;q.sort();let F=0,E;for(let X=0;X<q.length;X++){let J=q[X],oe=i.createElement("tr");if(oe.classList.add("data-content-pane__row--top-aligned","data-content-pane__row--property"),J.predicate.uri!==O||s){!s&&O&&F>1&&E?.setAttribute("rowspan",""+F),E=i.createElement("th"),E.setAttribute("class","data-content-pane__predicate-cell"),E.setAttribute("scope","row"),E.id=b("predicate");let H=i.createElement("a");H.setAttribute("href",J.predicate.uri),H.addEventListener("click",xo,!0),H.appendChild(i.createTextNode(N.predicateLabelForXML(J.predicate))),E.appendChild(H),oe.appendChild(E),O=J.predicate.uri,F=0}F++;let ce=i.createElement("td");ce.classList.add("data-content-pane__value-cell"),ce.setAttribute("headers",E?.id??""),ce.appendChild(_(J.object,S+1)),oe.appendChild(ce),A.appendChild(oe)}return!s&&O&&F>1&&E?.setAttribute("rowspan",""+F),A}function _(I,S=0){let A,O;switch(I.termType){case"NamedNode":return O=i.createElement("a"),O.setAttribute("href",I.uri),O.addEventListener("click",xo,!0),O.appendChild(i.createTextNode(N.label(I))),O;case"Literal":return I.language||!I.datatype||!I.datatype.uri?(A=i.createElement("div"),A.classList.add("data-content-pane__literal"),A.textContent=I.value,I.language&&A.setAttribute("lang",I.language),A):I.datatype.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"?(A=i.createElement("div"),A.classList.add("embeddedXHTML"),A.setAttribute("role","group"),A.setAttribute("aria-label","Embedded HTML content"),A.innerHTML=Ei.sanitize(I.value),A):i.createTextNode(I.value);case"BlankNode":{if(I.toNT()in u){m[I.toNT()]=!0;let F=i.createElement("a");return F.setAttribute("href","#"+I.toNT().slice(2)),F.setAttribute("class","bnodeRef"),F.setAttribute("aria-label",`Referenced blank node ${I.toNT().slice(3)}`),F.textContent="*"+I.toNT().slice(3),F}u[I.toNT()]=!0;let q=w(I,S);return u[I.toNT()]=q,S%2===1?q.classList.add("data-content-pane__nested-table--light"):q.classList.add("data-content-pane__nested-table--dark"),q}case"Collection":A=i.createElement("ol"),A.setAttribute("class","collectionAsTables");for(let q=0;q<I.elements.length;q++){let F=i.createElement("li");F.appendChild(_(I.elements[q],S+1)),A.appendChild(F)}return A;case"Graph":return A=t.session.paneRegistry.byName("dataContents").statementsAsTables(I.statements,t),A.classList.add("data-content-pane__nested-formula"),A;case"Variable":return i.createTextNode("?"+I.uri)}throw new Error("Unhandled node type: "+I.termType)}r&&(p=r.concat(p.filter(function(I){for(let S=0;S<r.length;S++)if(I.sameTerm(r[S]))return!1;return!0})));for(let I=0;I<p.length;I++){let S=i.createElement("tr");S.classList.add(I%2===0?"data-content-pane__row--even":"data-content-pane__row--odd","data-content-pane__row--root"),a.appendChild(S);let A=i.createElement("th");A.classList.add("data-content-pane__subject-cell"),A.setAttribute("scope","row"),A.id=b("subject"),S.appendChild(A);let O=i.createElement("td");O.classList.add("data-content-pane__details-cell"),O.setAttribute("headers",A.id),S.appendChild(O);let q=p[I];q.termType==="BlankNode"?A.appendChild(i.createTextNode(N.label(q))):A.appendChild(_(q,0)),O.appendChild(w(q,0))}for(let I in m){let S=u[I];if(S===!0)continue;let A=i.createElement("caption"),O=i.createElement("a");O.setAttribute("id",I.slice(2)),O.setAttribute("tabindex","-1"),O.setAttribute("class","bnodeDef"),O.setAttribute("aria-label",`Blank node ${I.slice(3)}`),O.textContent=I.slice(3)+")",A.appendChild(O),S.insertBefore(A,S.firstChild)}return a},render:function(e,n){let t=n.dom;function r(s){let l=n.environment??{};s.dataset.layout=l.layout??"desktop",s.dataset.theme=l.theme??"light",s.dataset.inputMode=l.inputMode??"pointer"}function i(){let s=n.session.store,l=s.statementsMatching(void 0,void 0,void 0,e),f=[];s.holds(e,void 0,void 0,e)&&f.push(e);let p=s.any(e,o.foaf("primaryTopic"),void 0,e);p&&(p.termType==="NamedNode"||p.termType==="BlankNode")&&f.push(p);let c=n.session.paneRegistry.byName("dataContents").statementsAsTables(l,n,f);c.setAttribute("aria-label",`Data content for ${N.label(e)}`),a.appendChild(c)}let a=t.createElement("div");return a.classList.add("dataContentPane","data-content-pane"),r(a),i(),a}};var Eo=ft(ui(),1);function _o(){return{broken:!1}}function ko(){return{contentType:void 0,eTag:void 0}}function Io(e){return{dataLoaded:e.dataLoaded,resourceUri:e.resourceUri,originalContent:e.originalContent,sourcePaneState:e.sourcePaneState,editorMetadata:e.editorMetadata,updateSourcePaneState:e.updateSourcePaneState,updateContent:e.updateContent,updateMetadata:e.updateMetadata}}var Wt=class extends ln{static properties={context:{attribute:!1},subject:{attribute:!1},originalContent:{state:!0},dataLoaded:{state:!0},sourcePaneState:{state:!0},editorMetadata:{state:!0}};constructor(){super(),this.__sourceContextValueProvider=new fi(this,{context:Ui}),this.context=void 0,this.subject=void 0,this.fileExplorerContext=nr,new mi(this,{context:hi,subscribe:!0,callback:n=>{this.fileExplorerContext=n}}),this.originalContent=void 0,this.dataLoaded=!1,this.sourcePaneState=_o(),this.editorMetadata=ko(),this.sourceContextValue=Io({dataLoaded:!1,resourceUri:void 0,originalContent:void 0,sourcePaneState:_o(),editorMetadata:ko(),updateSourcePaneState:()=>{},updateContent:()=>{},updateMetadata:()=>{}})}get sourceContextValue(){return this.__sourceContextValue}set sourceContextValue(n){this.__sourceContextValueProvider.setValue(n),this.__sourceContextValue=n}loadGeneration=0;loadContentAndMetadata=async()=>{if(!this.context||!this.subject)return;let n=this.subject.uri,t=++this.loadGeneration;try{let{content:r,metadata:i}=await je.resource.fetchContentAndMetadata(this.subject);if(this.subject?.uri!==n||t!==this.loadGeneration)return;this.originalContent=r,this.updateEditorMetadata(i),this.dataLoaded=!0}catch(r){if(Pi("Failed to load source content",r),!this.isConnected)return;let{showError:i}=Xn(this.closest(".sourcePane")??this);i(r.message)}};refreshSourceContextValue(){let n=this.subject?.uri,t=r=>{this.subject?.uri===n&&this.updateOriginalContent(r)};this.sourceContextValue=Io({dataLoaded:this.dataLoaded,resourceUri:n,originalContent:this.originalContent,sourcePaneState:this.sourcePaneState,editorMetadata:this.editorMetadata,updateSourcePaneState:this.updateSourcePaneState,updateContent:t,updateMetadata:this.updateEditorMetadata})}unregisterEditor;registeredWith;_editingRequested=!1;_childObserver;updateSourcePaneState=(n,t)=>{this.sourcePaneState={...this.sourcePaneState,[n]:t}};updateOriginalContent=n=>{this.originalContent=n};updateEditorMetadata=n=>{this.editorMetadata={contentType:n.contentType,eTag:n.eTag}};beginEditing=()=>{let n=this.querySelector("source-pane-source-editor-card");n?n.beginEditing():this._editingRequested=!0};applyPendingEditing(){if(!this._editingRequested)return;let n=this.querySelector("source-pane-source-editor-card");n&&(this._editingRequested=!1,n.beginEditing())}refreshEditorRegistration(){if(!this.isConnected)return;let n=this.fileExplorerContext,t=!n||n===nr?void 0:n.registerEditor;this.registeredWith!==t&&(this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,t&&(this.unregisterEditor=n.registerEditor(this),this.registeredWith=t))}connectedCallback(){super.connectedCallback(),this._childObserver=new MutationObserver(()=>this.applyPendingEditing()),this._childObserver.observe(this,{childList:!0}),this.requestUpdate()}disconnectedCallback(){this._childObserver?.disconnect(),this._childObserver=void 0,this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,super.disconnectedCallback()}willUpdate(n){if(super.willUpdate(n),!this.context)throw new Error("The element is missing the required `context` property.");(n.has("context")||n.has("subject"))&&(this.loadGeneration++,this.dataLoaded=!1),(n.has("context")||n.has("subject")||n.has("dataLoaded")||n.has("originalContent")||n.has("sourcePaneState")||n.has("editorMetadata"))&&this.refreshSourceContextValue()}updated(n){super.updated(n),this.refreshEditorRegistration(),(n.has("context")||n.has("subject"))&&this.loadContentAndMetadata()}render(){return Te`<slot></slot>`}};customElements.get("source-pane-source-provider")||customElements.define("source-pane-source-provider",Wt);Ti(ge(`.sourcePane {
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
`,"text/css"));var Xl={icon:B.iconBase+"noun_109873.svg",name:"source",label:function(e,n){if(/\.[cm]?js$/i.test(new URL(e.uri).pathname))return"Javascript Source";let r=n.session.store.findTypeURIs(e),i=He.mediaTypeClass("text/*").uri.split("*")[0];for(let a in r){if(a.startsWith(i))return"Source";if(a.includes("xml"))return"XML Source";if(a.includes("json"))return"JSON Source";if(a.includes("javascript"))return"Javascript Source"}return null},shouldGetFocus:function(e){return/\.[cm]?js$/i.test(new URL(e.uri).pathname)},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(r?.uri.endsWith("/")){let s=r.uri.slice(0,-1);r=t.sym(s),n.newInstance=r,n.newBase=s}if(!r){let s=n.newBase;s.endsWith("/")&&(s=s.slice(0,-1),n.newBase=s),r=t.sym(s),n.newInstance=r}let i=Eo.lookup(r.uri);if(!i||!(i.startsWith("text")||i.includes("xml")||i.includes("json")||i.includes("javascript"))){let s="A new text file has to have an file extension like .txt .ttl .json etc.";throw alert(s),new Error(s)}function a(s){let l=`
`;return s.includes("json")?l=`{}
`:s.includes("rdf+xml")&&(l=`<rdf:RDF
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

</rdf:RDF>`),l}return new Promise(function(s,l){t.fetcher.webOperation("PUT",r.uri,{data:a(i),contentType:i}).then(function(){Ai("New text file created: "+r.uri),n.newInstance=r,s(n)},f=>{alert("Cant make new file: "+f),l(f)})})},render:function(e,n){let{renderStatusSection:t}=Xn(),r=n.dom.createElement("div");r.setAttribute("class","sourcePane"),r.setAttribute("role","region"),r.setAttribute("aria-label",`Source pane for ${e.uri}`),r.setAttribute("aria-busy","true");let i=!!n.dom.querySelector("solid-ui-dialogs-root");fn(Te`
        <source-pane-source-provider
          .context=${n}
          .subject=${e}
        ></source-pane-source-provider>
        ${t()}
        ${i?"":Te`<solid-ui-dialogs-root></solid-ui-dialogs-root>`}
      `,r);let a=Xn(r),s=!1,l=async()=>{if(!(s||r.querySelector("source-pane-source-editor-card"))){s=!0,a.clearError();try{await import("./part-2DZUUHEZ.js"),r.querySelector("source-pane-source-provider")?.append(n.dom.createElement("source-pane-source-editor-card")),r.setAttribute("aria-busy","false")}catch(f){if(Si("Failed to load source editor",{resourceUri:e.uri,error:f}),r.setAttribute("aria-busy","false"),!r.isConnected)return;a.showError("The editor could not be started. Your file has not been changed. Try again; if it still fails, refresh the page. Save any unsaved work elsewhere before refreshing.",{title:"Could not start the source editor",details:f instanceof Error?f.stack??f.message:String(f),onRetry:()=>{l()}})}finally{s=!1}}};return l(),r}},Hr=Xl;var Vr=new Map;function mn(e){let n=String(e);return Vr.has(n)||Vr.set(n,fetch(n).then(async t=>{if(!t.ok)throw new Error(`loadSheet: ${t.status} ${n}`);let r=new CSSStyleSheet;return r.replaceSync(await t.text()),r})),Vr.get(n)}var Ql=await mn(ge(`:host {
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
`,"text/css")),dt=class extends ln{static properties={contentType:{},content:{},accessibilityLabel:{},accessibilityDescription:{}};get _editorMount(){return this.renderRoot?.querySelector(".editor")??null}static styles=Ql;_editor;_initializing=!1;getEditor(){return this._editor}setReadOnly(n){this._editor?.setReadOnly(n)}async _initializeEditor(){if(this._editor||this._initializing)return;this._initializing=!0;let n=this._editorMount;if(!n){this._initializing=!1;return}try{let{CodeEditor:t}=await import("./solid-ui.js");this._editor=new t;try{await this._editor.initialize(n,this.content??"",this.contentType??"","dark",void 0,{label:this.accessibilityLabel,description:this.accessibilityDescription})}catch(r){throw new Error(`Error initializing code editor: ${r instanceof Error?r.message:String(r)}`)}this._editor?.setReadOnly(!0)}catch(t){console.log("Error loading CodeEditor module:",t)}finally{this._initializing=!1}}async firstUpdated(){await this._initializeEditor()}disconnectedCallback(){super.disconnectedCallback(),this._editor&&(this._editor.destroy(),this._editor=void 0),this._initializing=!1}render(){return Te`
      <section class="editor-card">
        <div class="editor"></div>
      </section>
    `}};customElements.get("solid-panes-editor-card")||customElements.define("solid-panes-editor-card",dt);Oe(ge(`.n3-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var Zl=o,To={icon:B.originalIconBase+"w3c/n3_smaller.png",name:"n3",audience:[Zl.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"Data ("+r+") as N3"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","n3-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),s=Rn(r);s.suggestNamespaces(r.namespaces),s.setBase(e.uri);let l=s.statementsToN3(a),f=t.createElement("solid-panes-editor-card");return f.contentType="text/n3",f.content=l,f.accessibilityLabel=`Generated N3 for ${e.uri}`,f.accessibilityDescription="Generated N3 serialization. This content is read-only.",i.appendChild(f),i}};Oe(ge(`.rdfxml-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var Ao={icon:B.originalIconBase+"22-text-xml4.png",name:"RDFXML",audience:[o.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"As RDF/XML ("+r+")"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","rdfxml-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),s=Rn(r);s.suggestNamespaces(r.namespaces),s.setBase(e.uri);let l=s.statementsToXML(a),f=t.createElement("solid-panes-editor-card");return f.contentType="application/rdf+xml",f.content=l,f.accessibilityLabel=`Generated RDF/XML for ${e.uri}`,f.accessibilityDescription="Generated RDF/XML serialization. This content is read-only.",i.appendChild(f),i}};Oe(ge(`.formPane a {
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
`,"text/css"));var Ye=o;function Jn(e){return e?.termType==="NamedNode"}function Wr(e,n){let t=n.doc?n.doc():void 0,r=e.each(n,Ye.rdf("type"),void 0,t).filter(Jn),i=r.some(d=>d.sameTerm(Ye.ui("Group"))),a=r.some(d=>!d.sameTerm(Ye.ui("Group"))&&!d.sameTerm(Ye.ui("Form"))),s=!!e.any(n,Ye.ui("property"),void 0,t),l=e.any(n,Ye.ui("parts"),void 0,t),f=!!l?.elements?.length||e.each(n,Ye.ui("part"),void 0,t).length>0;i&&a&&s&&!f&&e.removeMany(n,Ye.rdf("type"),Ye.ui("Group"),t);let p=l?.elements??[];for(let d of p)Jn(d)&&Wr(e,d);let c=e.each(n,Ye.ui("part"),void 0,t);for(let d of c)Jn(d)&&Wr(e,d)}function ed(e){let n=Array.from(e.querySelectorAll("textarea"));for(let t of n){let r=t.parentElement;for(;r;){let i=r.firstElementChild;if(!!i&&(i.classList.contains("formFieldName")||i.querySelector("a")!==null)&&r.children.length>=2){r.classList.add("formPane__mobileTextareaRow"),i.classList.add("formPane__mobileTextareaLabel"),r.children[1].classList.add("formPane__mobileTextareaValue");break}r=r.parentElement}}}var Po={icon:B.iconBase+"noun_122196.svg",name:"form",audience:[Ye.solid("PowerUser")],label:function(e,n){let t=re.formsFor(e).length;return ue.debug("Form pane: forms for "+e+": "+t),t?""+t+" forms":null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div");i.setAttribute("class","formPane");function a(h){let b=n.environment??{};h.dataset.layout=b.layout??"desktop"}a(i);let s=function(h,b="info"){let w=r.createElement("p");return w.className=`formPane__message formPane__message--${b}`,i.appendChild(w).textContent=h,w},l=function(h){return s(h,"error")},f=function(h,b){h||l(`Sorry, failed to save your change:
`+b)},p=_e.currentUser();p?t.each(p,Ye.ui("workspace")).length===0&&s(`You don't seem to have any workspaces defined.  A workspace is a place on the web (http://..) or in the file system (file:///) to store application data.
`):s("You are not logged in. If you log in and have workspaces then you would be able to select workspace in which to put this new information");let c=function(h,b){t.fetcher.nowOrWhenFetched(h.uri,b,function(w,_){if(!w)return l("Cannot load store "+h.uri+": "+_);let I=re.formsFor(b);for(let S of I){Wr(t,S);let A=r.createElement("h4");if(A.classList.add("formPane__heading"),i.appendChild(A),S.uri){let q=He.uri.document(S.uri);q.uri!==S.uri&&i.appendChild(re.editFormButton(r,i,S,q,f)).classList.add("formPane__editButton")}let O=r.createElement("a");O.classList.add("formPane__headingLink"),O.setAttribute("href",S.uri),A.insertBefore(O,A.firstChild),O.textContent=N.label(S,!0),re.appendForm(r,i,{},b,S,h,f),ed(i)}})},d=null,u=He.uri.docpart(e.uri);t.updater.editable(u,t)&&(d=e.doc());let m=t.any(t.sym(u),Ye.link("annotationStore"));if(!d&&Jn(m)&&(d=m),!d){let h=new Map;t.statementsMatching(e).forEach(function(w){w.why.value&&h.set(w.why.value,1)}),t.statementsMatching(void 0,void 0,e).forEach(function(w){w.why.value&&h.set(w.why.value,2)});let b=Array.from(h.entries()).sort(function([w,_],[I,S]){return _-S||w.localeCompare(I)});for(let[w]of b)if(w&&t.updater.editable(w,t)){d=t.sym(w);break}}let g="2014";if(d)c(d,e);else{l("No suitable store is known, to edit <"+e.uri+">.");let h={noun:"form",appPathSegment:"form"},b=De.selectWorkspace(r,h,function(w){let _=w?t.sym(w):null;if(!_){l("Workspace selection was cancelled.");return}s("Workspace selected OK: "+_.uri);let I=t.each(void 0,Ye.space("workspace"),_).filter(Jn);for(let S=0;S<I.length;S++){let A=I[S],O=t.any(A,Ye.space("store")),q=t.any(A,Ye.cal("dtstart"))?.value,F=t.any(A,Ye.cal("dtend"))?.value;if(Jn(O)&&q&&F&&q<=g&&F>g){c(O,e);break}else l("Note no suitable annotation store in activity: "+A)}});i.appendChild(b)}return i}};var So={icon:B.originalIconBase+"table.png",name:"tableOfClass",label:function(e,n){let t=n.session.store;if(!t.any(void 0,o.rdf("type"),e))return null;let r=t.statementsMatching(void 0,o.rdf("type"),e).length;return r===0||r>15?null:N.label(e)+" table"},render:function(e,n){let t=n.dom,r=t.createElement("div");return r.setAttribute("class","tablePane"),r.appendChild(On(t,{tableClass:e})),r}};Oe(ge(`.defaultPane .bottom-border {
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
`,"text/css"));var nd=o,Uo={icon:B.originalIconBase+"about.png",name:"default",audience:[nd.solid("Developer")],label:function(e){return"About "},render:function(e,n){let t=n.dom;function r(c){let d=n.environment??{};c.dataset.layout=d.layout??"desktop"}let i=function(c,d){return!(typeof n.session.paneRegistry.byName("internal").predicates[c.uri]<"u"||d&&c.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#type")},a=n.getOutliner(t),s=n.session.store;ue.info("@defaultPane.render, dom is now "+t.location),e=s.canon(e);let l=t.createElement("div");l.setAttribute("class","defaultPane"),r(l);let f=e.termType==="Literal"?[]:s.statementsMatching(e);a.appendPropertyTRs(l,f,!1,i),f=s.statementsMatching(void 0,void 0,e),a.appendPropertyTRs(l,f,!0,i);let p=e.termType==="BlankNode"?s.anyStatementMatching(e):void 0;if(e.termType==="Literal"&&e.value.slice(0,7)==="http://"&&a.appendPropertyTRs(l,[Le(s.sym(e.value),o.link("uri"),e)],!0,i),e.termType==="NamedNode"&&s.updater.editable(He.uri.docpart(e.uri),s)||e.termType==="BlankNode"&&p&&p.why&&"uri"in p.why&&typeof p.why.uri=="string"&&s.updater.editable(p.why.uri)){let c=t.createElement("tr"),d=t.createElement("td");d.setAttribute("colspan","2"),d.setAttribute("notSelectable","true");let u=t.createElement("img");u.src=B.originalIconBase+"tango/22-list-add-new.png",u.addEventListener("click",function(g){a.UserInput.addNewPredicateObject(g),g.stopPropagation(),g.preventDefault()}),u.className="bottom-border-active",l.appendChild(c).appendChild(d).appendChild(u)}return l}};var td=o,No={icon:B.iconBase+"noun_170702.svg",name:"ui",audience:[td.solid("PowerUser")],label:function(e,n){let t=o,i=n.session.store.findTypeURIs(e);return i[t.rdfs("Class").uri]?"creation forms":i[t.ui("Form").uri]?"edit form":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","formPane");let s=N.label(e),l=function(b,w){let _=t.createElement("p");return _.setAttribute("style",w||"color: grey; background-color: white"),a.appendChild(_).textContent=b,_},f=function(b,w){l(b,"style",w||"color: grey; background-color: #fdd")},p=function(h,b){h||f(`Sorry, failed to save your change:
`+b)},c=r.findTypeURIs(e),d=null,u;e.uri&&(u=He.uri.docpart(e.uri),e.uri!==u&&r.updater.editable(u)&&(d=r.sym(He.uri.docpart(e.uri)))),d||(d=r.any(r.sym(u),i.link("annotationStore"))),d||(d=re.defaultAnnotationStore(e)),d||(d=r.sym("https://formsregistry.solid.community/public/formRegistry/"));let m;c[i.rdfs("Class").uri];let g=l("(Loading data from: "+d+")");return r.fetcher.nowOrWhenFetched(d.uri,e,function(h,b){if(!h){f("Cannot load store "+d+" :"+b);return}if(a.removeChild(g),c[i.rdfs("Class").uri]){let w=function(I,S){let A=r.statementsMatching(e,I),O=n.getOutliner(t);if(A.length){for(let q=0;q<A.length;q++){O.appendPropertyTRs(a,[A[q]]);let F=A[q].object,E=t.createElement("td");a.lastChild.appendChild(E),S&&E.appendChild(re.newButton(t,r,null,null,e,F,d,function(J,oe){J||f(`Sorry, failed to save your change:
`+oe)}));let X=r.statementsMatching(F,i.rdf("type"));X.length||(X=r.statementsMatching(F)),X.length?re.editFormButton(t,a,F,X[0].why,p):f("No data about form")}a.appendChild(t.createElement("hr"))}else l("There are currently no known forms to make a "+s+".")};m=i.ui("creationForm"),a.appendChild(t.createElement("h2")).textContent=N.label(m),l("Creation forms allow you to add information about a new thing, in this case a new "+s+"."),w(m,!0),a.appendChild(t.createElement("hr")),l("You can make a new creation form:"),a.appendChild(re.newButton(t,r,e,m,i.ui("Form"),null,d,p)),a.appendChild(t.createElement("hr")),m=i.ui("annotationForm"),a.appendChild(t.createElement("h2")).textContent=N.label(m),l("Annotaion forms allow you to add extra information about a ,"+s+" we already know about."),w(m,!1),a.appendChild(t.createElement("hr")),l("You can make a new annotation form:"),a.appendChild(re.newButton(t,r,e,m,i.ui("Form"),null,d,p)),l("(Storing new forms in: "+d+")")}else c[i.ui("Form").uri]?re.appendForm(t,a,r,e,i.ui("FormForm"),d,p):f("ui/pane internal error -- Eh?")}),a}};var rd={icon:B.iconBase+"padlock-timbl.svg",name:"sharing",label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return r[o.ldp("Resource").uri]||r[o.ldp("Container").uri]||r[o.ldp("BasicContainer").uri]?"Sharing":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=s(),a=t.createElement("div");return a.classList.add("sharingPane"),An.preventBrowserDropEvents(t),a.appendChild(An.ACLControlBox5(e,n,i,r)),a;function s(){let l=r.findTypeURIs(e);return l[o.ldp("BasicContainer").uri]||l[o.ldp("Container").uri]?"Folder":"File"}}},Lo=rd;var id=await mn(ge(`solid-ui-dialog-footer {
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
`,"text/css")),Gt=class extends ln{static properties={title:{type:String},message:{type:String},confirmation:{type:Boolean}};constructor(){super(),this.title="",this.message="",this.confirmation=!1}static styles=id;result=null;returnFocus=null;open(){let n=this.ownerDocument.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return this.returnFocus=n instanceof HTMLElement?n:null,new Promise(t=>{this.result=t})}closeDialog(n){let r=this.shadowRoot?.querySelector("solid-ui-dialog")?.shadowRoot?.querySelector("dialog");this.result?.(n),this.result=null,r?.open&&r.close(),this.remove()}disconnectedCallback(){if(super.disconnectedCallback(),this.result?.(!1),this.result=null,this.returnFocus?.isConnected)this.returnFocus.focus();else{let n=this.ownerDocument.querySelector("main");if(n){let t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus(),t===null?n.removeAttribute("tabindex"):n.setAttribute("tabindex",t)}}this.returnFocus=null}async firstUpdated(){super.firstUpdated();let n=this.shadowRoot?.querySelector("solid-ui-dialog");await n?.updateComplete;let t=n?.shadowRoot?.querySelector("dialog");if(!t)throw new Error("Internal pane dialog did not render a native dialog");t.setAttribute("aria-label",this.title),t.setAttribute("aria-description",this.message),t.addEventListener("cancel",i=>{i.preventDefault(),this.closeDialog(!1)}),t.addEventListener("close",()=>{this.isConnected&&this.closeDialog(!1)});let r=this.shadowRoot?.querySelector("[data-initial-action]");await r?.updateComplete,r?.shadowRoot?.querySelector("button")?.focus()}handleKeyDown(n){if(n.key!=="Tab")return;let t=Array.from(this.shadowRoot?.querySelectorAll("solid-ui-button")??[]).map(i=>i.shadowRoot?.querySelector("button")).filter(i=>!!i&&!i.disabled),r=t.findIndex(i=>{let a=i.getRootNode();return a instanceof ShadowRoot&&a.activeElement===i});n.shiftKey&&r===0?(n.preventDefault(),t[t.length-1]?.focus()):!n.shiftKey&&r===t.length-1&&(n.preventDefault(),t[0]?.focus())}render(){let[n,...t]=this.message.split(`
`);return Te`
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
            ${t.map(r=>Te`<span class="resource-action-dialog-emphasis">${r}</span>`)}
          </p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer slot="footer">
          ${this.confirmation?Te`
                <solid-ui-button data-initial-action variant="secondary" @click=${()=>this.closeDialog(!1)}>
                  Cancel
                </solid-ui-button>
                <solid-ui-button @click=${()=>this.closeDialog(!0)}>
                  Delete
                </solid-ui-button>
              `:Te`
                <solid-ui-button data-initial-action @click=${()=>this.closeDialog(!1)}>
                  OK
                </solid-ui-button>
              `}
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}};customElements.get("solid-panes-resource-action-dialog")||customElements.define("solid-panes-resource-action-dialog",Gt);Oe(ge(`.internalPaneContent {
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
`,"text/css"));var ad={icon:B.originalIconBase+"tango/22-emblem-system.png",name:"internal",label:function(){return"Under The Hood"},render:function(e,n){let t=n.dom,r=n.session.store,i=r.canon(e),a=r.findTypeURIs(i);function s(g){if(a["http://www.w3.org/2007/ont/link#ProtocolEvent"])return!0;let h=n.session.paneRegistry.byName("internal");return h&&h.predicates&&typeof h.predicates[g.uri]<"u"}let l=t.createElement("div");l.classList.add("internalPane","internalPaneContent");function f(g,h){let b=t.createElement("solid-panes-resource-action-dialog");b.title=g,b.message=h,b.confirmation=!1,b.open(),t.body?.appendChild(b)}function p(g){let h=t.createElement("solid-panes-resource-action-dialog");h.title="Delete resource",h.message=g,h.confirmation=!0;let b=h.open();return t.body?.appendChild(h),b}if(e.uri&&!e.uri.includes("#")){let g=l.appendChild(t.createElement("table"));g.classList.add("internalPaneControls");let h=g.appendChild(t.createElement("tr")),b=h.appendChild(t.createElement("td")),w=e.uri&&e.uri.endsWith("/")||r.holds(e,o.rdf("type"),o.ldp("Container")),_=w?"folder":"file";if(!od(e)){let A=!1,O=re.button(t,B.iconBase+"noun_2188_red.svg","Remove this "+_,()=>{if(A)return;let q=N.label(e)||e.value,F=w?`Are you sure you want to delete "${q}" and all its contents?
This can't be undone.`:`Are you sure you want to delete "${q}"?
This can't be undone.`;return p(F).then(E=>E?(A=!0,O.disabled=!0,(n.session.logic?.resource||je.resource).recursiveDelete(e).then(()=>{let J=w?`Deleted "${q}" and all of its contents.`:`Deleted "${q}".`;console.log(J),f("Resource deleted",J),t.dispatchEvent(new CustomEvent("solid-resource-deleted",{detail:{resource:e}}))}).catch(J=>{let oe="Unable to delete "+e+": "+(J instanceof Error?J.message:String(J));console.log(oe),f("Unable to delete resource",oe)}).finally(()=>{A=!1,O.disabled=!1})):void 0)});O.classList.add("internalPaneDeleteButton"),O.style.backgroundColor="transparent",O.style.border="none",O.style.padding="0",b.appendChild(O)}let I=h.appendChild(t.createElement("td")),S=re.button(t,B.iconBase+"noun_479395.svg","refresh");I.appendChild(S),S.addEventListener("click",()=>{if(!r.fetcher)throw new Error("Store has no fetcher");r.fetcher.refresh(e,function(A,O){let q;A?q="Refreshed OK: "+e:q="Error refreshing: "+e+": "+O,console.log(q),f(A?"Resource refreshed":"Unable to refresh resource",q)})})}let d=r.statementsMatching(e).slice(),u="";if(!r.fetcher)throw new Error("Store has no fetcher");if(e.uri&&(d.push(Le(e,we("http://www.w3.org/2007/ont/link#uri"),we(e.uri),r.fetcher.appNode)),e.uri.indexOf("#")>=0?(u=e.uri.split("#")[0],d.push(Le(e,we("http://www.w3.org/2007/ont/link#documentURI"),we(e.uri.split("#")[0]),r.fetcher.appNode)),d.push(Le(e,we("http://www.w3.org/2007/ont/link#document"),we(e.uri.split("#")[0]),r.fetcher.appNode))):u=e.uri),u){if(!r.updater)throw new Error("Store has no updater");let g=r.updater.editable(u);g&&d.push(Le(e,we("http://www.w3.org/ns/rww#editable"),Dn(g.toString()),r.fetcher.appNode))}let m=n.getOutliner(t);return m.appendPropertyTRs(l,d,!1,s),d=r.statementsMatching(void 0,void 0,e),m.appendPropertyTRs(l,d,!0,s),l},predicates:{"http://www.w3.org/2007/ont/link#request":1,"http://www.w3.org/2007/ont/link#requestedBy":1,"http://www.w3.org/2007/ont/link#source":1,"http://www.w3.org/2007/ont/link#session":2,"http://www.w3.org/2007/ont/link#uri":1,"http://www.w3.org/2007/ont/link#documentURI":1,"http://www.w3.org/2007/ont/link#document":1,"http://www.w3.org/2007/ont/link#all":1,"http://www.w3.org/2007/ont/link#Document":1,"http://www.w3.org/ns/rww#editable":1,"http://www.w3.org/2000/01/rdf-schema#seeAlso":1,"http://www.w3.org/2002/07/owl#":1},classes:{"http://www.w3.org/2007/ont/link#ProtocolEvent":1}};function od(e){let n=e.site().uri;return e.uri===n||e.uri===n+"profile/"||e.uri===n+"profile/card"||e.uri===n+"settings/"||e.uri===n+"settings/prefs.ttl"||e.uri===n+"settings/privateTypeIndex.ttl"||e.uri===n+"settings/publicTypeIndex.ttl"||e.uri===n+"settings/serverSide.ttl"}var Fo=ad;var sd={icon:B.iconBase+"noun_547570.svg",global:!0,name:"home",label:function(){return"Home"},audience:[o.solid("PowerUser")],render:function(e,n){let t=n.dom,r=async function(){let s={div:i,dom:t,statusArea:i,me:a};i.appendChild(t.createElement("h4")).textContent="Create new thing somewhere";let f={div:i.appendChild(t.createElement("div")),dom:t,statusArea:i,me:a},p=await De.filterAvailablePanes(n.session.paneRegistry.list);Bn.newThingUI(f,n,p),De.registrationList(s,{}).then(function(){})},i=t.createElement("div"),a=_e.currentUser();return r(),i}},Mo=sd;function Ro(e){e(Cr);let n=Cr.editor;n?e(n):console.log("@@@ editProfileView","profilePane is not providing an editor pane"),e(va),e(ka),e(Ma),e(Tr),e(Ra),e(Da),e(Ba),e(qa),e(za),e(at),e(Pr),e(Nr),e(Ha),e(Wa),e(Ga),e(ja),e(Ja),e(Xa),e(Fr),e(io),e(Za),e(co),e(vo),e(Co),e(Hr),e(To),e(Ao),e(Po),e(So),e(Uo),e(No),e(Lo),e(Fo),e(Mo)}function Do(e,n,t,r,i){return{dom:e,getOutliner:Nn,session:{paneRegistry:n,store:t,logic:r},environment:i}}var ld=await mn(ge(`/* @custom-media from solid-ui/breakpoints.css substituted below by tools/convert.mjs */

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
`,"text/css")),ct=class extends ln{static properties={menuItems:{type:Array}};constructor(){super(),this.menuItems=[]}static styles=ld;render(){return Te`
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
    `}};customElements.get("solid-panes-header")||customElements.define("solid-panes-header",ct);async function Bo(e){let n=document.querySelector("solid-panes-header");if(n)return n;let t=await Un(),r=t?await St(t):[],i=document.getElementById("MainContent"),a=document.createElement("div"),s=r.map(p=>({label:Te`<icon-lucide-folder-open slot="left-icon"></icon-lucide-folder-open> ${p.label()}`,async onSelected(){await Un()&&await e.show({kind:"storage",pane:p,source:"accountMenu"})}})),l=[{label:Te`<icon-lucide-user slot="left-icon"></icon-lucide-user> Profile`,async onSelected(){let p=await Un();p&&await e.show({kind:"profile",subject:p.value,source:"accountMenu"})}},{label:Te`<icon-lucide-users slot="left-icon"></icon-lucide-users> Friends`,async onSelected(){let p=await Un();p&&await e.show({kind:"friends",subject:p.value,source:"accountMenu"})}},...s,{label:Te`<icon-lucide-layout-dashboard slot="left-icon"></icon-lucide-layout-dashboard> Dashboard`,async onSelected(){await Un()&&await e.show({kind:"app",pane:"home",source:"accountMenu"})}},{label:Te`<icon-lucide-settings-2 slot="left-icon"></icon-lucide-settings-2> Preferences`,async onSelected(){await Un()&&await e.show({kind:"app",pane:"basicPreferences",source:"accountMenu"})}}];fn(Te`<solid-panes-header .menuItems=${l}></solid-panes-header>`,a);let f=a.firstElementChild;if(!f)throw new Error("Failed to create header");return i&&i.parentNode?i.parentNode.insertBefore(f,i):document.body.prepend(f),f}var dd=await mn(ge(`:host {
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
`,"text/css")),ut=class extends ln{static properties={navbarItems:{type:Array}};constructor(){super(),this.navbarItems=[]}static styles=dd;selectItem(n){this.dispatchEvent(new CustomEvent("solid-ui-select",{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}render(){return Te`
    <nav class="navbar">
       ${this.navbarItems.map(n=>Te`
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
    `}};customElements.get("solid-panes-navbar")||customElements.define("solid-panes-navbar",ut);function jr(){return tt(window.location.href,Cn().viaAccountMenu)}var qo;function zo(e,n){qo?.(e,n)}function Gr(e,n,t,r,i=!1){return{label:e,paneName:n,paneUri:t,async onSelected(){return await jr(),r()},selected:i}}function Oo(e,n,t){let r=mr(t,sn(z.sym(window.location.href))),i=[];if(e.owner){let a=e.owner;i.push(Gr("Profile","profile",a,()=>n.show({kind:"profile",subject:a}),nt({paneName:"profile"},r,0)),Gr("Friends","social",a,()=>n.show({kind:"friends",subject:a}),nt({paneName:"social"},r,0)))}return e.storagePanes.forEach(a=>{i.push(Gr(a.label(),a.paneName,a.subject.value,()=>n.show({kind:"storage",pane:a}),nt({paneName:a.paneName,paneUri:a.subject.value},r,e.storagePanes.length)))}),i}async function $o(e){let n=document.querySelector("solid-panes-navbar");if(n)return await jr(),n;let t=document.getElementById("MainContent"),r=document.createElement("div"),i=await _n(window.location.href),a=Oo(i,e,Cn().view);function s(u){a=a.map(m=>({...m,selected:m===u}))}function l(u){let{detail:m}=u;s(m),Promise.resolve(m.onSelected?.()).catch(g=>{console.error("Navbar menu item selection failed:",g)}),f()}function f(){fn(Te`<solid-panes-navbar .navbarItems=${a} @solid-ui-select=${l}></solid-panes-navbar>`,r)}f(),qo=(u,m)=>{let g=Ji(a,u,m);g&&(s(g),f())};let p=r.firstElementChild;if(!p)throw new Error("Failed to create nav bar");t?t.insertBefore(p,t.firstChild):document.body.prepend(p),await jr();let c=0,d=Nt(({url:u,state:m})=>{if(!p.isConnected)return d();tt(u,m.viaAccountMenu).catch(h=>console.error("Failed to update navbar visibility:",h));let g=++c;_n(u).then(h=>{if(g===c){if(aa(i,h)){let b=mr(m.view,sn(z.sym(u))),w=a.map(_=>({..._,selected:nt(_,b,i.storagePanes.length)}));w.some((_,I)=>_.selected!==a[I].selected)&&(a=w,f());return}i=h,a=Oo(h,e,m.view),f()}}).catch(h=>console.error("Failed to rebuild the navbar for the new pod:",h))});return p}function Ho(e){let{store:n,outliner:t,byName:r,effects:i,podContextOf:a=_n}=e,s=0;async function l(d){if(!d.uri.endsWith("/"))return;let u=d.site().uri===d.uri,{storagePanes:m,viewerStorages:g}=await a(d.uri),h=m.some(b=>b.subject.uri===d.uri)||g.includes(d.uri);return u||h?Pt(d):void 0}async function f(d,u){let m=u?void 0:await a(d);return Yi({viaAccountMenu:u,inViewerPod:!!m&&br(m,d),hasOwner:!!m?.owner})}async function p(d,u){if(u.subject){let m=n.sym(u.subject);if(u.kind==="profile")return At(m,r);if(u.kind==="friends")return hr(m,r);if(u.kind==="storage")return Pt(m)}return u.pane?r(u.pane)??void 0:sn(d)?At(d,r):l(d)}async function c(d,u,m){switch(d.kind){case"restore":return p(u,m.view);case"profile":return At(n.sym(d.subject),r);case"friends":return hr(n.sym(d.subject),r);case"storage":return d.pane;case"app":return r(d.pane)}}return{async show(d){let u=++s,m=Cn(),g=d.kind==="restore"?m.viaAccountMenu?"accountMenu":"default":d.source??"default";g==="accountMenu"&&Lt(!0);let h=n.sym(d.kind==="restore"&&d.subject?d.subject:window.location.href),b=await c(d,h,m);if(u!==s)return;if(!b&&d.kind!=="restore"){console.warn("Could not open the requested view for the logged-in user.");return}let w=b&&b.name==="folder"?b.subject?.uri:void 0,_=w?await f(w,g==="accountMenu"):void 0;if(u===s){if(t.GotoSubject(h,!0,b??void 0,!0,void 0,void 0,_?{source:g,folderView:_}:{source:g}),g!=="accountMenu"){let{view:I}=Cn();I.pane&&i.selectNavbarPane(I.pane,I.subject)}await i.refreshHeading(d.kind==="restore"&&d.forceHeading===!0)}}}}async function Go(e){let n=st(e);if(n!=="owner")return n;try{return z.updater?.editable?.(e.doc())?"owner":"anonymous"}catch(t){return console.warn("Failed to check profile edit permissions.",t),"anonymous"}}function jo(e,n=z){let t=e.doc(),r=n.anyValue(e,o.vcard("nickname"))||n.anyValue(e,o.foaf("nick"))||void 0,i=n.anyValue(e,o.vcard("bday"))||void 0,a=re.findImage(e)||void 0,s=Vo(n,e,o.vcard("hasTelephone"),t,"phone"),l=Vo(n,e,o.vcard("hasEmail"),t,"email"),f=cd(n,e,t),p=n.any(e,o.vcard("hasAddress"),null,t)||void 0,c=p,d=p?{entryNode:p,type:n.any(c,o.rdf("type"),null,t)||void 0,streetAddress:n.anyValue(c,o.vcard("street-address"))||void 0,locality:n.anyValue(c,o.vcard("locality"))||void 0,region:n.anyValue(c,o.vcard("region"))||void 0,postalCode:n.anyValue(c,o.vcard("postal-code"))||void 0,countryName:n.anyValue(c,o.vcard("country-name"))||void 0}:void 0,u=d?.countryName,m=d?.locality,g=n.anyValue(e,o.solid("preferredSubjectPronoun"))||"",h=n.anyValue(e,o.solid("preferredObjectPronoun"))||"",b=g?`${g}${h?`/${h}`:""}`:void 0;return{name:N.label(e),nickname:r,imageSrc:a,dateOfBirth:i,jobTitle:f,primaryPhone:s,primaryEmail:l,primaryAddress:d,location:u&&m?`${m}, ${u}`:u||m||void 0,pronouns:b,entryNode:e}}function cd(e,n,t){let r=e.each(null,o.org("member"),n,t).filter(a=>!e.holds(a,o.rdf("type"),o.schema("EducationalOccupationalCredential"),t)).map(a=>{let s=a,f=e.each(s,o.rdf("type"),null,t).find(g=>g.value.startsWith(o.solid("").value))?.value.split(/[#/]/).pop()?.toLowerCase(),p=e.anyValue(s,o.vcard("role"),null,t)||void 0,c=e.any(s,o.org("role"),null,t),d=c&&e.anyValue(c,o.schema("name"),null,t)||void 0,u=e.any(s,o.schema("endDate"),null,t);return{title:d&&p?`${d} - ${p}`:p||d,roleType:f,isCurrent:!u||f==="currentrole"}});return(r.find(a=>a.isCurrent)||r.find(a=>a.roleType!=="currentrole"&&a.roleType!=="futurerole"))?.title}function Vo(e,n,t,r,i){let a=[],s=[...e.statementsMatching(n,t,null,r),...e.statementsMatching(n,t)].map(f=>f.object),l=new Set;for(let f of s){if(l.has(f.value))continue;l.add(f.value);let p=ud(e,f,r,i);if(!p)continue;let c=f.termType==="NamedNode"?[...e.each(f,o.rdf("type"),null,r),...e.each(f,o.rdf("type"))]:[],d=c[0]||(i==="email"?o.vcard("Internet"):o.vcard("Voice")),u={entryNode:f,type:d,valueNode:p};if(c.some(m=>pd(m.value)))return u;a.push(u)}return a[0]}function ud(e,n,t,r){return Wo(n.value,r)?n:n.termType!=="NamedNode"?void 0:[...e.each(n,o.vcard("value"),null,t),...e.each(n,o.vcard("value"))].find(a=>Wo(a.value,r))}function Wo(e,n){let t=e.trim();return n==="email"?/^mailto:/i.test(t)||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):/^tel:/i.test(t)||/^[+()\-\s\d]{5,}$/.test(t)}function pd(e){let n=e.trim().toLowerCase();return n==="work"||n.endsWith("#work")||n.endsWith("/work")}var En={add:"Add as friend",exists:"Already a friend",success:"Friend was added!",duplicate:"Friend already exists",loginRequired:"Current user not found! Not logged in?"};function Jo(e){if(!_e.currentUser()?.sameTerm(e))throw new Error(En.loginRequired)}async function Jr(e,n){return await z.fetcher.load(e),Jo(e),z.whether(e,o.foaf("knows"),n,e.doc())>0}async function Ko(e,n){if(Jo(e),await Jr(e,n))throw new Error(En.duplicate);Ni(z);try{await z.updater.update([],[Le(e,o.foaf("knows"),n,e.doc())])}catch(t){throw _t(t).includes("Unauthenticated")?new Error(En.loginRequired):t}}var md=(...e)=>import("./part-6757JZLH.js").then(n=>n.createHeadingEditDialog(...e)),fd=await mn(ge(`:host {
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
`,"text/css")),pt=class extends ln{static properties={profileData:{attribute:!1},subject:{attribute:!1},editContext:{attribute:!1},friendSubject:{attribute:!1},compact:{type:Boolean,reflect:!0},failedImageSrc:{state:!0},friendState:{state:!0},friendMessage:{state:!0},friendError:{state:!0}};constructor(){super(),this.profileData=void 0,this.subject=void 0,this.editContext=void 0,this.friendSubject=void 0,this.compact=!1,this.failedImageSrc=void 0,this.friendState="loading",this.friendMessage="",this.friendError=!1}static styles=fd;friendRequest=0;friendRequestInterrupted=!1;friendMessageTimer;draggableSubject={uri:""};draggableElementsAttached=!1;connectedCallback(){super.connectedCallback(),this.friendRequestInterrupted&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}disconnectedCallback(){super.disconnectedCallback(),this.friendRequest++,(this.friendState==="loading"||this.friendState==="saving")&&(this.friendRequestInterrupted=!0),this.clearFriendMessage()}clearFriendMessage(){clearTimeout(this.friendMessageTimer),this.friendMessageTimer=void 0,this.friendMessage=""}willUpdate(n){super.willUpdate(n),n.has("profileData")&&n.get("profileData")?.imageSrc!==this.profileData?.imageSrc&&(this.failedImageSrc=void 0),n.has("friendSubject")&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}updated(){if(this.subject&&(this.draggableSubject.uri=this.subject.value),this.draggableElementsAttached||!this.subject)return;let n=this.shadowRoot?.querySelector(".profile-heading"),t=this.shadowRoot?.querySelector(".name");!n||!t||(re.makeDraggable(n,this.draggableSubject),re.makeDraggable(t,this.draggableSubject),this.draggableElementsAttached=!0)}startFriendCheck(){let n=++this.friendRequest;this.friendState="loading",this.clearFriendMessage(),this.friendError=!1;let t=this.friendSubject,r=_e.currentUser();!t||!r||r.sameTerm(t)||Jr(r,t).then(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState=i?"exists":"available")}).catch(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState="error",this.showFriendMessage(i,!0))})}async showFriendMessage(n,t){this.clearFriendMessage(),this.friendMessage=_t(n),this.friendError=t,this.friendMessageTimer=setTimeout(()=>{this.clearFriendMessage()},1e4),await this.updateComplete,this.shadowRoot?.querySelector(".friend-message")?.focus()}handleAddFriend=async n=>{if(n.preventDefault(),this.friendState!=="available"&&this.friendState!=="error")return;let t=this.friendSubject;if(!t)return;let r=this.friendRequest;this.friendState="saving",this.clearFriendMessage();try{let i=_e.currentUser();if(!i)throw new Error(En.loginRequired);if(await Ko(i,t),r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="exists",await this.showFriendMessage(En.success,!1)}catch(i){if(r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="error",await this.showFriendMessage(i,!0)}};handleEdit=n=>{let t=this.editContext;t&&md(n,z,t.subject,t.profileData,t.viewerMode,async()=>{this.dispatchEvent(new CustomEvent("profile-heading-saved",{bubbles:!0,composed:!0,detail:{subjectUri:t.subject.value}})),await t.onSaved()}).catch(r=>{console.error("Failed to edit profile heading.",r)})};handleImageError=n=>{this.failedImageSrc=n.currentTarget.getAttribute("src")??void 0};render(){let n=this.profileData;if(!n)return Te``;let t=Yo(n.primaryPhone?.valueNode).replace(/^tel:/i,""),r=Yo(n.primaryEmail?.valueNode).replace(/^mailto:/i,""),i=hd(n.dateOfBirth),a=!!(n.imageSrc&&this.failedImageSrc!==n.imageSrc),s=_e.currentUser(),l=!!(this.friendSubject&&s&&!s.sameTerm(this.friendSubject));return Te`
      <section class="profile-heading" aria-labelledby="profile-heading-name">
        <div class="avatar">
          <div class="image-frame ${a?"":"image-frame--fallback"}">
            ${a?Te`<img
                  class="hero"
                  src=${n.imageSrc}
                  alt=${n.name}
                  width="140"
                  height="140"
                  loading="eager"
                  @error=${this.handleImageError}
                />`:pn}
              <div class="hero-fallback" role="img" aria-label=${n.name}>
                <icon-lucide-circle-user-round aria-hidden="true"></icon-lucide-circle-user-round>
              </div>
          </div>
        </div>

        <div class="info">
          <header class="header-bar">
            <div class="identity" role="group" aria-label=${this.compact?"Name":"Name and pronouns"}>
              <h1 id="profile-heading-name" class="name">${n.name}</h1>
              ${n.pronouns?Te`<span class="pronouns" ?hidden=${this.compact}>(${n.pronouns})</span>`:pn}
            </div>
            ${n.jobTitle?Te`<div class="role">${n.jobTitle}</div>`:pn}
          </header>
        </div>

        ${this.editContext&&!this.compact||l?Te`
            <div class="profile__actions profile__heading-edit-action">
              ${l?Te`
                <div class="profile-friends-button__section" role="group" aria-label="Friend relationship actions">
                  <solid-ui-button
                    variant="secondary"
                    class="profile__btn-friends"
                    ?disabled=${this.friendState==="loading"||this.friendState==="saving"||this.friendState==="exists"}
                    aria-busy=${this.friendState==="loading"||this.friendState==="saving"?"true":"false"}
                    @click=${this.handleAddFriend}
                  >${this.friendState==="exists"?pn:Te`<icon-lucide-user-round-plus slot="icon" class="profile__btn-friends-icon" aria-hidden="true"></icon-lucide-user-round-plus>`}${this.friendState==="exists"?En.exists:En.add}</solid-ui-button>
                  ${this.friendMessage?Te`
                    <div class="friend-message" role=${this.friendError?"alert":"status"}
                      aria-live=${this.friendError?"assertive":"polite"} tabindex="0">
                      ${this.friendMessage}
                    </div>`:pn}
                </div>
              `:pn}
              ${this.editContext&&!this.compact?Te`
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
              `:pn}
            </div>
          `:pn}

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
    `}renderLine(n,t){return n?Te`
      <div class="detail-item">
        <span class="detail-icon" aria-hidden="true">
          ${this.renderIcon(t)}
        </span>
        <span class="detail-value">${n}</span>
      </div>
    `:pn}renderIcon(n){switch(n){case"birthday":return Te`<icon-lucide-cake aria-hidden="true"></icon-lucide-cake>`;case"location":return Te`<icon-lucide-map-pin aria-hidden="true"></icon-lucide-map-pin>`;case"phone":return Te`<icon-lucide-phone aria-hidden="true"></icon-lucide-phone>`;case"email":return Te`<icon-lucide-mail aria-hidden="true"></icon-lucide-mail>`}}renderEditIcon(){return Te`<icon-lucide-pencil aria-hidden="true"></icon-lucide-pencil>`}};customElements.get("solid-panes-profile-heading")||customElements.define("solid-panes-profile-heading",pt);function Yo(e){return e?.value??""}function hd(e){let n=(e||"").trim(),t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);if(t){let[,i,a,s]=t;return`${s}-${a}-${i}`}let r=n.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(r){let[,i,a,s]=r;return`${i}-${a}-${s}`}return n}Oe(ge(`#profile-heading-mount {
  margin-top: 18px;
  margin-bottom: 20px;
}
`,"text/css"));var Kr="solid-panes-profile-heading",Yr="profile-heading-mount",Ln=0,Xo=!1,Qo=!1,Zo=!1,Xr,jt="",Qr="",Fn="",es=()=>window.location.href,wn=new WeakMap,Kn=new WeakMap;function gd(e){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function")return;let n=getComputedStyle(e),t=n.marginTop||"18px",r=n.marginBottom||"20px",i=e.animate([{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"},{height:`${e.getBoundingClientRect().height}px`,opacity:1,marginTop:t,marginBottom:r,overflow:"hidden"}],{duration:300,easing:"ease",fill:"both"});Kn.set(e,i);let a=()=>{Kn.get(e)===i&&(Kn.delete(e),i.cancel())};i.finished.then(a,s=>{Kn.get(e)===i&&(console.error("Failed to animate profile heading appearance.",s),a())})}function bd(e){let n=wn.get(e);wn.delete(e),n?.cancel(),e.inert=!1,e.removeAttribute("aria-hidden")}function wd(e){if(wn.has(e))return;let n=getComputedStyle(e),t=e.getBoundingClientRect().height,r=n.opacity,i=n.marginTop,a=n.marginBottom,s=Kn.get(e);Kn.delete(e),s?.cancel();let l=()=>{e.hidden=!0,e.replaceChildren()};if(e.inert=!0,e.setAttribute("aria-hidden","true"),e.hidden||!e.firstElementChild||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function"){l();return}let f=e.animate([{height:`${t}px`,opacity:r,marginTop:i,marginBottom:a,overflow:"hidden"},{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"}],{duration:300,easing:"ease",fill:"forwards"});wn.set(e,f),f.finished.then(()=>{wn.get(e)===f&&(l(),wn.delete(e),f.cancel())},p=>{wn.get(e)===f&&(console.error("Failed to animate profile heading disappearance.",p),l(),wn.delete(e),f.cancel())})}function mt(){yn(!0).catch(e=>{console.error("Failed to refresh profile heading after an authentication change.",e)})}function Zr(){let e=document.getElementById("MainContent");if(!e)return null;let n=document.getElementById(Yr);n||(n=document.createElement("div"),n.id=Yr,n.setAttribute("aria-label","Profile heading"));let t=document.querySelector("solid-panes-navbar"),r=document.getElementById("OutlineView"),i=t?.parentNode===e?t:r?.parentNode===e?r:null;return i&&n.nextSibling!==i?e.insertBefore(n,i):!i&&n.parentNode!==e&&e.appendChild(n),n}async function yn(e=!1){await Xr;let n=es(),t=await _n(n),r=Zr();if(!r)return;e&&(Ln++,jt="",Fn="");let{view:i,viaAccountMenu:a}=Cn(),s=ji({view:i,viaAccountMenu:a,viewer:_e.currentUser()?.value,pageUrl:n,owner:t.owner,storageUris:t.storagePanes.map(_=>_.subject.value)});if(s.mode==="none"){Ln++,Fn="",jt="",Qr="",wd(r);return}let{subjectUri:l}=s,f=s.mode==="full";bd(r);let p=`${s.paneName}:${l}`;if(p===jt||p===Fn)return;let c=++Ln;Fn=p;let d,u,m,g;try{d=await xn(z.sym(l)),u=jo(d,z),g=f?await Go(d):"anonymous",m=g==="owner"}catch(_){throw c===Ln&&(Fn=""),_}if(c!==Ln)return;let h=r.querySelector(Kr)||document.createElement(Kr);h.profileData=u,h.subject=d;let b=_e.currentUser();h.friendSubject=Gi(s.paneName)&&b&&!b.sameTerm(d)?d:void 0,h.editContext=m?{subject:d,profileData:u,viewerMode:g,onSaved:()=>yn(!0)}:void 0,h.compact=!f;let w=r.hidden||!r.firstElementChild;r.hidden=!1,h.parentNode!==r&&r.replaceChildren(h),jt=p,Qr=d.value,Fn="",w&&(await h.updateComplete,c===Ln&&r.isConnected&&!r.hidden&&!wn.has(r)&&gd(r))}function ns(){Zr()}function Jt(e=()=>window.location.href){es=e,Zr(),Zo||(document.addEventListener("profile-pane-saved",t=>{if(!(t instanceof CustomEvent)||t.detail?.subjectUri!==Qr)return;let r=document.querySelector(`#${Yr} ${Kr}`);if(r&&t.detail.profileData){Ln++,Fn="",r.profileData=t.detail.profileData,r.editContext&&(r.editContext={...r.editContext,profileData:t.detail.profileData});return}yn(!0).catch(i=>{console.error("Failed to refresh profile heading after saving profile information.",i)})}),Zo=!0);let n=Xr??_e.checkUser().then(()=>{});return Xr=n,Qo||(Ze.events.on("login",mt),Ze.events.on("sessionRestore",mt),Ze.events.on("logout",mt),Ze.events.on("sessionChange",mt),Ze.events.on("identityReplaced",mt),Qo=!0),Xo||(Nt(()=>{yn().catch(t=>{console.error("Failed to refresh profile heading.",t)})}),Xo=!0),n.then(()=>yn(!0)).catch(t=>{console.error("Failed to refresh profile heading.",t)}),n}var ts=new WeakMap;function ei(e,n){let t=ts.get(e);if(!t){let r=e.context?.session?.paneRegistry,i=typeof r?.byName=="function"?r.byName.bind(r):Ve;t=Ho({store:n,outliner:e,byName:i,effects:{selectNavbarPane:zo,refreshHeading:yn}}),ts.set(e,t)}return t}var rs,ni=!1;function is(){return ni}function yd(e){console.error("Failed to show the page after browser navigation.",e)}function as(e){if(rs=e,ni)return;ni=!0;let n=()=>(Tt(),(rs?.show({kind:"restore",forceHeading:!0})??Promise.resolve()).catch(yd)),t=window.navigation;if(!t){window.addEventListener("popstate",()=>{n()});return}t.addEventListener("navigate",r=>{Vi(window.history)||!r.hashChange&&r.destination.sameDocument!==!1&&r.destination.url===window.location.href||!r.canIntercept||!r.userInitiated||r.navigationType!=="replace"||r.destination.url!==window.location.href||r.intercept({scroll:"manual",focusReset:"manual",handler:n})}),t.addEventListener("currententrychange",r=>{r.navigationType==="traverse"&&n()})}var Kt="__lastRenderEnvSignature",ti=!1;function os(e){return e?[e.layout,e.theme,e.inputMode,e.viewport?.width].join("|"):""}function vd(){let e=document.getElementById("MainContent");return e||(e=document.createElement("main"),e.id="MainContent",e.setAttribute("role","main"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-live","polite"),document.body.appendChild(e)),e}async function ss(e,n,t){if(window.name===$r&&window.self!==window.top){document.body.textContent="This resource cannot be previewed here. Open it in a new tab instead.";return}vd(),n=n||window.location.href;let r=typeof n=="string"?e.sym(n):n;Tt(),await Jt();let i=Nn(document,t);i[Kt]=os(t);let a=ei(i,e);as(a);let s=()=>{ia(),a.show({kind:"restore",forceHeading:!0}).catch(p=>{console.error("Failed to refresh navigation after an authentication change.",p)})};Ze.events.on("login",s),Ze.events.on("sessionRestore",s),Ze.events.on("logout",s),Ze.events.on("sessionChange",s),Ze.events.on("identityReplaced",s),await a.show({kind:"restore",subject:r.uri});let l=await Bo(a),f=await $o(a);return ns(),Promise.all([l,f])}async function ls(e){let n=e?.context?.session?.store,t=os(e?.context?.environment),r=e?.[Kt]??"",i=t!==r,a=t.split("|")[1]===r.split("|")[1],s=document.querySelector('#MainContent folder-pane-view, #MainContent [data-preserve-pane-on-resize="true"]');if(i&&a&&s){if(ti)return;ti=!0,await new Promise(l=>requestAnimationFrame(()=>l()));try{e.refreshActiveExplorerPanes?.(),e[Kt]=t}finally{ti=!1}return}i&&n&&typeof e?.GotoSubject=="function"&&(await ei(e,n).show({kind:"restore"}),e[Kt]=t)}function Nn(e,n){if(e.outlineManager)n&&(e.outlineManager.context=e.outlineManager.context||{},e.outlineManager.context.environment=n);else{let t=Do(e,{list:or,paneForIcon:sr,paneForPredicate:lr,register:kt,byName:Ve},z,je,n);e.outlineManager=new vr(t)}return e.outlineManager}function xd(e,n){e&&(e.context=e.context||{},e.context.environment=n)}typeof window<"u"&&Nn(window.document);Ro(e=>kt(e.default||e));typeof window<"u"&&(window.panes={getOutliner:Nn});export{Li as a,or as b,sr as c,lr as d,kt as e,Ve as f,vr as g,yn as h,Jt as i,is as j,ss as k,ls as l,Nn as m,xd as n,Cd as o};
