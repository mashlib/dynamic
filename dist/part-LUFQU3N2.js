import{a as Re,i as Oi,p as vt}from"./part-X3P3WHLD.js";import{a as Ni,b as Li}from"./part-F63PXZKA.js";import{a as Fi,b as Mi,c as Ri,d as Di,e as Gn,f as Bi}from"./part-M22XOWKC.js";import{a as yt}from"./part-JII5LI4F.js";import{a as Si,c as dr,h as cr,q as Ui}from"./part-IPTG737N.js";import{a as Fe,c as Cn,d as Un,e as Ci,g as wt,i as _n,j as rr,k as ir,l as Nn,m as Ln,q as Ei,r as Ti,s as Ai,t as Pi,w as Me}from"./part-BC7GSLCS.js";import{a as ki,b as Ii,c as sr,d as lr}from"./part-TKTGPRZR.js";import{a as _i,b as or}from"./part-GEEMM4JM.js";import{H as te,d as N,j as tr,o as B}from"./part-D7Z64I5T.js";import{d as ce}from"./part-V2462Q6D.js";import{a as o}from"./part-VJTDSXSH.js";import{f as ar}from"./part-AVHV3I4Q.js";import{b as Ze}from"./part-5ZTE77ED.js";import{a as Ps,b as xn,c as he}from"./part-USTJ2YCK.js";var Rc={};Ps(Rc,{OutlineManager:()=>Ir,UI:()=>Me,byName:()=>qe,getOutliner:()=>An,initMainPage:()=>Es,initializeProfileHeading:()=>Zt,isHandlingBrowserNavigation:()=>_s,list:()=>ur,paneForIcon:()=>pr,paneForPredicate:()=>mr,refreshProfileHeading:()=>pn,refreshUI:()=>Ts,register:()=>xt,updateEnvironment:()=>Mc,versionInfo:()=>zi});var zi={buildTime:"2026-11-16T18:31:34Z",commit:"617cc9d",npmInfo:{"solid-panes":"5.1.0"}};import"rdflib";import{solidLogicSingleton as Lc,store as Fc}from"solid-logic";import Ss from"https://cdn.jsdelivr.net/npm/pane-registry@5.1.1/+esm";var{list:ur,paneForIcon:pr,paneForPredicate:mr,register:xt,byName:qe}=Ss;import*as Ge from"rdflib";import{solidLogicSingleton as et,store as bn}from"solid-logic";var qi=e=>function(t){let r=N.AJARImage(t.uri,N.label(t),N.label(t),e);return r.setAttribute("class","outlineImage"),r};var $i=e=>function(t){let r=e.createElement("a"),i=t.termType==="NamedNode"?t.uri:t.value,a=i.indexOf("mailto:");return i=a>=0?i.slice(a+7):i,r.setAttribute("href","mailto:"+i),r.appendChild(e.createTextNode(i)),r};function Vi(e){let n={properties:[],defaults:[],classes:[]},t=qi(e),r=$i(e);return Fn(n,o.foaf("depiction").uri,t,!0),Fn(n,o.foaf("img").uri,t,!0),Fn(n,o.foaf("thumbnail").uri,t,!0),Fn(n,o.foaf("logo").uri,t,!0),Fn(n,o.schema("image").uri,t,!0),Fn(n,o.foaf("mbox").uri,r,!0),n}function Fn(e,n,t,r){e.properties[n]||(e.properties[n]=[]),e.properties[n].push(t),r&&(e.defaults[n]=t)}var Z={};Z.src=[];Z.tooltips=[];Z.src.icon_expand=B.originalIconBase+"tbl-expand-trans.png";Z.src.icon_more=B.originalIconBase+"tbl-more-trans.png";Z.src.icon_collapse=B.originalIconBase+"tbl-collapse.png";Z.src.icon_internals=B.originalIconBase+"tango/22-emblem-system.png";Z.src.icon_instances=B.originalIconBase+"tango/22-folder-open.png";Z.src.icon_foaf=B.originalIconBase+"foaf/foafTiny.gif";Z.src.icon_social=B.originalIconBase+"social/social.gif";Z.src.icon_mb=B.originalIconBase+"microblog/microblog.png";Z.src.icon_shrink=B.originalIconBase+"tbl-shrink.png";Z.src.icon_rows=B.originalIconBase+"tbl-rows.png";Z.src.icon_unrequested=B.originalIconBase+"16dot-blue.gif";Z.src.icon_fetched=B.originalIconBase+"16dot-green.gif";Z.src.icon_failed=B.originalIconBase+"16dot-red.gif";Z.src.icon_requested=B.originalIconBase+"16dot-yellow.gif";Z.src.icon_CVPane=B.originalIconBase+"CV.png";Z.src.icon_defaultPane=B.originalIconBase+"about.png";Z.src.icon_visit=B.originalIconBase+"tango/22-text-x-generic.png";Z.src.icon_dataContents=B.originalIconBase+"rdf_flyer.24.gif";Z.src.icon_n3Pane=B.originalIconBase+"w3c/n3_smaller.png";Z.src.icon_RDFXMLPane=B.originalIconBase+"22-text-xml4.png";Z.src.icon_imageContents=B.originalIconBase+"tango/22-image-x-generic.png";Z.src.icon_airPane=B.originalIconBase+"1pt5a.gif";Z.src.icon_LawPane=B.originalIconBase+"law.jpg";Z.src.icon_pushbackPane=B.originalIconBase+"pb-logo.png";Z.src.icon_photoPane=B.originalIconBase+"photo_small.png";Z.src.icon_tagPane=B.originalIconBase+"tag_small.png";Z.src.icon_TinyTag=B.originalIconBase+"tag_tiny.png";Z.src.icon_photoBegin=B.originalIconBase+"photo_begin.png";Z.src.icon_photoNext=B.originalIconBase+"photo_next.png";Z.src.icon_photoBack=B.originalIconBase+"photo_back.png";Z.src.icon_photoEnd=B.originalIconBase+"photo_end.png";Z.src.icon_photoImportPane=B.originalIconBase+"flickr_small.png";Z.src.icon_retract=B.originalIconBase+"retract.gif";Z.src.icon_refresh=B.originalIconBase+"refresh.gif";Z.src.icon_optoff=B.originalIconBase+"optional_off.PNG";Z.src.icon_opton=B.originalIconBase+"optional_on.PNG";Z.src.icon_map=B.originalIconBase+"compassrose.png";Z.src.icon_retracted=Z.src.icon_unrequested;Z.src.icon_retracted=Z.src.icon_unrequested;Z.src.icon_time=B.originalIconBase+"icons/Wclocksmall.png";Z.src.icon_telephone=B.originalIconBase+"silk/telephone.png";Z.src.icon_time=B.originalIconBase+"Wclocksmall.png";Z.src.icon_remove_node=B.originalIconBase+"tbl-x-small.png";Z.src.icon_add_triple=B.originalIconBase+"tango/22-list-add.png";Z.src.icon_add_new_triple=B.originalIconBase+"tango/22-list-add-new.png";Z.src.icon_show_choices=B.originalIconBase+"userinput_show_choices_temp.png";Z.src.icon_display_reasons=B.originalIconBase+"tango/22-help-browser.png";Z.tooltips[Z.src.icon_display_reasons]="Display explanations";Z.tooltips[Z.src.icon_add_triple]="Add more";Z.tooltips[Z.src.icon_add_new_triple]="Add one";Z.tooltips[Z.src.icon_remove_node]="Remove";Z.tooltips[Z.src.icon_expand]="View details.";Z.tooltips[Z.src.icon_collapse]="Hide details.";Z.tooltips[Z.src.icon_shrink]="Shrink list.";Z.tooltips[Z.src.icon_internals]="Under the hood";Z.tooltips[Z.src.icon_instances]="List";Z.tooltips[Z.src.icon_foaf]="Friends";Z.tooltips[Z.src.icon_rows]="Make a table of data like this";Z.tooltips[Z.src.icon_unrequested]="Fetch this.";Z.tooltips[Z.src.icon_fetched]="Fetched successfully.";Z.tooltips[Z.src.icon_failed]="Failed to load. Click to retry.";Z.tooltips[Z.src.icon_requested]="This is being fetched. Please wait...";Z.tooltips[Z.src.icon_visit]="View document";Z.tooltips[Z.src.icon_retract]="Remove this source and all its data from tabulator.";Z.tooltips[Z.src.icon_refresh]="Refresh this source and reload its triples.";Z.OutlinerIcon=function(e,n,t,r,i){return this.src=e,this.alt=t,this.width=n,this.tooltip=r,this.filter=i,this};Z.termWidgets={};Z.termWidgets.optOn=new Z.OutlinerIcon(Z.src.icon_opton,20,"opt on","Make this branch of your query mandatory.");Z.termWidgets.optOff=new Z.OutlinerIcon(Z.src.icon_optoff,20,"opt off","Make this branch of your query optional.");Z.termWidgets.addTri=new Z.OutlinerIcon(Z.src.icon_add_triple,18,"add tri","Add one");import{store as ge}from"solid-logic";import*as Oe from"rdflib";var jn,kn;function Jn(e){let n=e.document;this.menuId="predicateMenu1";let t=function(d){console.log(d+`
`)},r=o.rdf,i=Oe.Namespace("http://purl.org/ontology/bibo/"),a=Oe.Namespace("http://purl.org/dc/elements/1.1/"),l=!1;function c(m){let d=m;for(;d&&d!==n;){if(d.AJAR_statement)return d;d=d.parentNode}return N.ancestor(m,"DIV")||N.ancestor(m,"TR")}function h(m){return c(m)?.parentNode||N.ancestor(m,"TABLE")}return jn||(jn=new Oe.Formula,jn.superFormula=ge),kn||(kn=new Oe.IndexedFormula),kn.name="TempFormula",ge.updater||(ge.updater=new Oe.UpdateManager(ge)),{sparqler:ge.updater,lastModified:null,lastModifiedStat:null,statIsInverse:!1,addNewPredicateObject:function(d){if(N.getTarget(d).className!=="bottom-border-active")return;let s=e.UserInput,u=N.getTarget(d),p=n.createElement("div"),g=c(u),f=h(u);f.insertBefore(p,g);let b=n.createElement("div"),w=s.generateRequest("(TBD)",b,!0);p.appendChild(b.firstChild);let _=s.generateRequest("(Enter text or drag an object onto this field)",b,!1);if(p.appendChild(b.firstChild),g.previousSibling&&g.previousSibling.AJAR_statement){let I=g.previousSibling.AJAR_statement;s.formUndetStat(p,I.subject,w,_,I.why,!1)}else{let I=N.getAbout(ge,f.parentNode),S=ge.sym(Oe.Util.uri.docpart(I.uri));s.formUndetStat(p,I,w,_,S,!1)}e.walk("moveTo",p.firstChild),ce.info("addNewPredicateObject: selection = "+e.getSelection().map(function(I){return I.textContent}).join(", ")),this.startFillInText(e.getSelection()[0])},addNewObject:function(d){let s=N.getTarget(d).parentNode.parentNode,u=s.parentNode.AJAR_inverse;this.lastModifiedStat=s.parentNode.AJAR_statement;let p=this.appendToPredicate(s),g=this.generateRequest(" (Error) ",p,!1),f=p.previousSibling.AJAR_statement;u?this.formUndetStat(p,g,f.predicate,f.object,f.why,!0):this.formUndetStat(p,f.subject,f.predicate,g,f.why,!1),e.walk("moveTo",p.lastChild),this.startFillInText(p.lastChild)},Delete:function(d){this.deleteTriple(d,!1)},Enter:function(d){this.literalModification(d)},Click:function(d){let s=N.getTarget(d);N.getTerm(s).termType==="Literal"&&(this.literalModification(s),d.preventDefault(),d.stopPropagation())},pasteFromClipboard:function(d,s){function u(g){let f=e.clipboard[g].shift();if(f===null){ce.warn("no more element in clipboard!");return}switch(g){case"predicates":case"objects":{let b=e.clipboard.all;for(let w=0;;w++)if(f.sameTerm(b[w])){b.splice(w,1);break}break}case"all":throw new Error("hostorical code not understood - what is theCollection?")}return f}let p;switch(s.className){case"undetermined selected":if(p=s.nextSibling?u("predicates"):u("objects"),!p)return;break;case"pred selected":if(p=u("objects"),!p)return;break;case"selected":{let g=u("all");if(!g)return;p=g[0],this.insertTermTo(s,p,g[1]);return}}this.insertTermTo(s,p)},startFillInText:function(d){switch(this.whatSortOfEditCell(d)){case"DatatypeProperty-like":N.emptyNode(d),this.lastModified=this.createInputBoxIn(d," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select();break;case"predicate":this.performAutoCompleteEdit(d,"PredicateAutoComplete");break;case"ObjectProperty-like":case"no-idea":this.performAutoCompleteEdit(d,"GeneralAutoComplete")}},literalModification:function(d){if(ce.debug("entering literal Modification with "+d+d.textContent),d.className.indexOf(" pendingedit")!==-1)return ce.warn(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),!0;let s=d;if(!this.getStatementAbout(s))return;let p,g;try{p=N.getTerm(s),g=c(s)}catch(b){ce.warn("userinput.js: "+b+N.getAbout(ge,d)),ce.error(s+" getStatement Error:"+b)}let f;try{f=g.lastChild}catch(b){ce.error(b+"@"+s)}if(p.termType==="Literal"){if(f.removeChild(f.firstChild),p.value.match(`
`)){let b=n.createElement("textarea");b.appendChild(n.createTextNode(p.value)),b.setAttribute("rows",(p.value.match(/\n/g).length+1).toString()),b.setAttribute("cols","100"),b.setAttribute("class","textinput"),f.appendChild(b),this.lastModified=b}else this.lastModified=this.createInputBoxIn(f,p.value);this.lastModified.isNew=!1,this.lastModified.select()}return!0},performAutoCompleteEdit:function(d,s){N.emptyNode(d),t("perform AutoCompleteEdit. THIS IS="+this),this.lastModified=this.createInputBoxIn(d,""),this.lastModified.select(),this.lastModified.addEventListener("keypress",this.getAutoCompleteHandler(s),!1),this.getAutoCompleteHandler(s)(1)},backOut:function(){this.deleteTriple(this.lastModified.parentNode,!0),this.lastModified=null},clearMenu:function(){let d=n.getElementById(this.menuID);d&&d.parentNode.removeChild(d)},clearInputAndSave:function(d){let s;if(!this.lastModified)return;if(!this.lastModified.isNew)try{s=this.getStatementAbout(this.lastModified).object}catch{return}let u=this.lastModifiedStat,p,g,f,b;if(this.lastModified.value!==this.lastModified.defaultValue){let w;if(this.lastModified.value===""){this.lastModified.value=this.lastModified.defaultValue,this.clearInputAndSave();return}else if(this.lastModified.isNew){u=new Oe.Statement(u.subject,u.predicate,ge.literal(this.lastModified.value),u.why),p=this.views.defaults[u.predicate.uri],w=c(this.lastModified);try{ge.updater.update([],[u],function(_,I,S){I||(ce.error("Error occurs while inserting "+u+`

`+S+`
`),e.UserInput.deleteTriple(w.lastChild,!0))})}catch(_){ce.error("Error inserting fact "+u+`:
	`+_+`
`);return}u=ge.add(u.subject,u.predicate,ge.literal(this.lastModified.value),u.why)}else{if(this.statIsInverse){ce.error("Invalid Input: a literal can't be a subject in RDF/XML"),this.backOut();return}let _,I,S;switch(s.termType){case"Literal":{let A=this.lastModified.value;w=c(this.lastModified);let O=this.lastModified.defaultValue;I=Oe.st(u.subject,u.predicate,ge.literal(this.lastModified.value),u.why);try{ge.updater.update([u],[I],function(z,F,E){F?s.value=A:(ce.warn("Error occurs while editing "+u+`

`+E),w.lastChild.textContent=O),w.lastChild.className=w.lastChild.className.replace(/ pendingedit/g,"")})}catch(z){ce.warn("Error occurs while editing "+u+`:
	`+z);return}break}case"BlankNode":{let A=ge.literal(this.lastModified.value,"");if(u.predicate.termType==="Collection"){let O=u.predicate.elements[0];if(ge.any(void 0,O,A)){if(!d){let E=this.lastModified.parentNode;d={},d.pageX=N.findPos(E)[0],d.pageY=N.findPos(E)[1]+E.clientHeight}this.showMenu(d,"DidYouMeanDialog",void 0,{dialogTerm:ge.any(void 0,O,A),bnodeTerm:u.subject})}else{_=c(this.lastModified).AJAR_statement,I=Oe.st(u.subject,O,A,u.why);let E=ge.the(u.subject,r("type"));S=ge.anyStatementMatching(u.subject,r("type"),E,u.why),w=c(this.lastModified).parentNode;try{ge.updater.update([],[_,I,S],function(Y,j,ae){j||(console.log("Error occurs while editing "+_+`

`+ae),e.UserInput.deleteTriple(w.lastChild,!0))})}catch(Y){console.log("Error occurs while editing "+_+`:
	`+Y);return}ge.remove(u),ge.add(u.subject,O,A,u.why)}let z=h(this.lastModified).parentNode,F=qe("default");e.outlineExpand(z,u.subject,{pane:F,already:!0}),e.walk("right",e.focusTd)}else{this.fillInRequest("object",this.lastModified.parentNode,ge.literal(this.lastModified.value));return}break}}}}else if(this.lastModified.isNew){g=c(this.lastModified),f=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),b=g.previousSibling.AJAR_statement,this.formUndetStat(g,b.subject,b.predicate,f,b.why,!1),this.lastModified=null;return}else if(u.predicate.termType==="Collection"){ge.removeMany(u.subject);let w=c(this.lastModified);b=w.AJAR_statement,f=this.generateRequest("(To be determined. Re-type of drag an object onto this field)"),this.formUndetStat(w,b.subject,b.predicate,f,b.why,!1),e.replaceTD(e.outlineObjectTD(f,p),w.lastChild),this.lastModified=null;return}else if(this.statIsInverse){if(u.subject.termType==="BlankNode"){this.backOut();return}}else if(u.object.termType==="BlankNode"){this.backOut();return}g=c(this.lastModified),this.statIsInverse?e.replaceTD(e.outlineObjectTD(u.subject,p),g.lastChild):e.replaceTD(e.outlineObjectTD(ge.literal(this.lastModified.value),p),g.lastChild),this.lastModified.value!==this.lastModified.defaultValue&&(g.lastChild.className+=" pendingedit"),this.lastModified=null},deleteTriple:function(d,s){if(ce.debug("deleteTriple entered"),!s&&d.className.indexOf(" pendingedit")!==-1){console.log(`The node you attempted to edit has a request still pending.
Please wait for the request to finish (the text will turn black)
before editing this node again.`),e.walk("up");return}let u=this.getStatementAbout(d);if(!s&&!ge.whether(u.object,r("type"),o.link("Request"))&&!ge.whether(u.predicate,r("type"),o.link("Request"))&&!ge.whether(u.subject,r("type"),o.link("Request"))){ce.debug("about to send SPARQLUpdate");try{ge.updater.update([u],[],function(f,b,w){b?g():(console.log("Error occurs while deleting "+u+`

`+w),d.className=d.className.replace(/ pendingedit/g,""))}),d.className+=" pendingedit"}catch(f){ce.error(f),ce.warn("Error deleting statement "+u+`:
	`+f);return}ce.debug("SPARQLUpdate sent")}ce.debug("about to remove "+u),ce.debug("removed"),e.walk("up");let p=d.parentNode;function g(){let f;for(f=p;f.childNodes.length===1;f=f.previousSibling);let b;if(f===p){let w=f.nextSibling;w.nextSibling&&w.childNodes.length===1&&(b=f.firstChild,b.setAttribute("rowspan",parseInt(b.getAttribute("rowspan"))-1),w.insertBefore(f.firstChild,w.firstChild)),p.parentNode.removeChild(p)}else b=f.firstChild,b.setAttribute("rowspan",parseInt(b.getAttribute("rowspan"))-1),p.parentNode.removeChild(p)}s&&g()},clipboardInit:function(){e.clipboard={},e.clipboard.objects=[],e.clipboard.predicates=[],e.clipboard.all=[]},copyToClipboard:function(d,s){let u=N.getTerm(s);switch(s.className){case"selected":case"obj selected":e.clipboard.objects.unshift(u);break;case"pred selected":case"pred internal selected":e.clipboard.predicates.unshift(u)}e.clipboard.all.unshift(u)},insertTermTo:function(d,s,u){let p,g;switch(d.className){case"undetermined selected":p=this.views.defaults[d.parentNode.AJAR_statement.predicate.uri],this.fillInRequest(d.nextSibling?"predicate":"object",d,s);break;case"pred selected":{let f=this.appendToPredicate(d);g=d.parentNode.AJAR_statement,p=this.views.defaults[g.predicate.uri],f.appendChild(e.outlineObjectTD(s,p));let b=d.parentNode.AJAR_inverse;b?f.AJAR_statemnet=ge.add(s,g.predicate,g.object,g.why):f.AJAR_statement=ge.add(g.subject,g.predicate,s,g.why);try{ge.updater.update([],[f.AJAR_statement],function(w,_,I){_||ce.error("userinput.js (pred selected): Fail trying to insert statement "+f.AJAR_statement+": "+I)})}catch(w){ce.error("Exception trying to insert statement "+f.AJAR_statement+": "+N.stackString(w));return}f.AJAR_inverse=b,jn.statements.push(f.AJAR_statement);break}case"selected":{let f=h(d),b=f.insertBefore(n.createElement("div"),f.lastChild);if(g=b.previousSibling.AJAR_statement,typeof u>"u"&&(u=!0),u)this.formUndetStat(b,g.subject,this.generateRequest("(TBD)",b,!0),s,g.why,!1),b.appendChild(e.outlineObjectTD(s)),e.walk("moveTo",b.firstChild),this.startFillInText(b.firstChild);else{let w=this.generateRequest("(To be determined. Re-type of drag an object onto this field)",b);this.formUndetStat(b,g.subject,s,w,g.why,!1),b.insertBefore(e.outlinePredicateTD(s,b,!1,!1),b.firstChild),e.walk("moveTo",b.lastChild),this.startFillInText(b.lastChild)}break}}},Refill:function(d,s){ce.info("Refill"+s.textContent);let u=s.nextSibling,p;if(u){let g,f,b;if(s.nextSibling.className==="undetermined"){g=N.getAbout(ge,h(s).parentNode),f=ge.any(g,r("type")),b=[];let w=`.
`;b[0]=`SELECT ?pred WHERE{
?pred `+r("type")+r("Property")+`.
?pred `+o.rdfs("domain")+f+".}",b[1]=`SELECT ?pred ?class
WHERE{
?pred `+r("type")+r("Property")+`.
`+f+o.rdfs("subClassOf")+` ?class.
?pred `+o.rdfs("domain")+` ?class.
}`,b[2]=`SELECT ?pred WHERE{
`+g+r("type")+ge.variable("subjectClass")+w+ge.variable("pred")+o.rdfs("domain")+ge.variable("subjectClass")+w+"}",p=b.map(Oe.SPARQLToQuery)}else{g=N.getAbout(ge,h(s).parentNode),f=ge.any(g,r("type"));let w=s.parentNode.AJAR_statement.object;b="SELECT ?pred WHERE{"+g+r("type")+`?subjectClass.
`+w+r("type")+`?objectClass.
?pred `+o.rdfs("domain")+`?subjectClass.
?pred `+o.rdfs("range")+`?objectClass.
}`,p=Oe.SPARQLToQuery(b)}this.showMenu(d,"GeneralPredicateChoice",p,{isPredicate:u,selectedTd:s})}else{let g=s.parentNode.AJAR_statement.predicate;if((ge.whether(g,r("type"),o.owl("DatatypeProperty"))||g.termType==="Collection"||ge.whether(g,o.rdfs("range"),o.rdfs("Literal")))&&(s.className="",N.emptyNode(s),this.lastModified=this.createInputBoxIn(s," (Please Input) "),this.lastModified.isNew=!1,this.lastModified.select()),s.parentNode.AJAR_statement.predicate.sameTerm(r("type"))){let f="SELECT ?class WHERE{?class "+r("type")+o.rdfs("Class")+".}",b=Oe.SPARQLToQuery(f);this.showMenu(d,"TypeChoice",b,{isPredicate:u,selectedTd:s})}}},getAutoCompleteHandler:function(d){t(`

***** In getAutoCompleteHandler ****** mode = `+d),d==="PredicateAutoComplete"?d="predicate":d!=="JournalTAC"&&(d="all");let s;return d==="JournalTAC"?s=n.getElementById("inpid_journal_title"):s=this.lastModified||e.getSelection()[0].firstChild,t("InputBox="+s),t("InputBox.value="+s.value),function(u){t("ENTER EVENT="+u),t("1. outside (if eneterEvent)");let p={},g=s.parentNode;d||(d=g.nextSibling?"predicate":"all"),p.pageX=N.findPos(g)[0],p.pageY=N.findPos(g)[1]+g.clientHeight,t("epX="+p.pageX+", epY="+p.pageY+", mode="+d);let f=n.getElementById(e.UserInput.menuID);function b(w){w&&(f.lastHighlight&&(f.lastHighlight.className=""),f.lastHighlight=w,f.lastHighlight.className="activeItem",e.showURI(N.getAbout(ge,f.lastHighlight)))}if(u){t("2. in (if enterEvent).  with type = "+typeof u);let w=s.value;if(typeof u=="object")switch(t("3. in typeof enterEvent is object, will switch to keys, arrows, etc. keycode = "+u.keyCode),u.stopPropagation(),f&&!f.lastHighlight&&b(f.firstChild.firstChild),u.keyCode){case 13:case 9:if(t("handler: Enter or Tab"),!f){e.UserInput.clearInputAndSave();return}if(!f.lastHighlight)return d==="JournalTAC"?(e.UserInput.clearMenu(),t("no lastH"),"no lastH"):void 0;if(f.lastHighlight.tagName==="INPUT")switch(f.lastHighlight.value){case"New...":t("subcase New"),e.UserInput.createNew();break;case"GiveURI":t("subcase GiveURI"),e.UserInput.inputURI();break}else{if(d==="JournalTAC"){if(t("movedArrow? "+l),l&&f.lastHighlight){let S=f.lastHighlight.firstChild.firstChild.innerHTML,A=f.lastHighlight.firstChild.nextSibling.innerHTML;return A=A.slice(4,-4),["gotdptitle",S,A]}return"asGivenTxt"}let _=N.getAbout(ge,f.lastHighlight),I=d==="predicate"?"predicate":"object";e.UserInput.clearMenu(),e.UserInput.fillInRequest(I,s.parentNode,_)}t("outside");return;case 38:return t("handler: Arrow UP"),l=!0,w===""&&f.lastHighlight.tagName==="TR"&&!f.lastHighlight.previousSibling?b(f.firstChild.firstChild):b(f.lastHighlight.previousSibling),"I'm a little Arrow Up";case 40:return t("handler: Arrow Down"),l=!0,f.lastHighlight.tagName==="INPUT"?b(f.childNodes[1].firstChild):b(f.lastHighlight.nextSibling),"I'm a little Down Arrow";case 37:case 39:t("handler: Arrow left, right"),f.lastHighlight.tagName==="INPUT"&&(u.keyCode===37?b(f.lastHighlight.previousSibling):b(f.lastHighlight.nextSibling));return;case 8:t("handler: Backspace"),w=w.slice(0,-1);break;case 27:if(t("handler: Esc"),!f){e.UserInput.backOut();return}e.UserInput.clearMenu();return;default:t("handler: Default"),l=!1,t("oldtext="+w),w+=String.fromCharCode(u.charCode),t("charcodent="+u.charCode),t("strcharcod="+String.fromCharCode(u.charCode)),console.log("DEFAULT txtstr="+w+`
`)}if(d==="all"?(t("generalAC after switch, newText="+w+"mode is all"),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"GeneralAutoComplete",void 0,{inputText:w,selectedTd:g}),w.length===0&&e.UserInput.WildCardButtons()):d==="predicate"?(t("predicateAC after switch, newText="+w+"mode is predicate"),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"PredicateAutoComplete",void 0,{inputText:w,isPredicate:!0,selectedTd:g})):d==="JournalTAC"&&(t("JouralTAC after switch, newText="+w),e.UserInput.clearMenu(),e.UserInput.showMenu(p,"JournalTitleAutoComplete",void 0,{inputText:w},"orderisuseless")),f=n.getElementById(e.UserInput.menuID),!f){t("No menu element.  Do not show menu.");return}return t(`at end of handler
^^^^^^^^^^^^^^^^^

`),b(f.firstChild.firstChild),e.showURI(N.getAbout(ge,f.lastHighlight)),"nothing to return"}}},WildCardButtons:function(){let d=n.getElementById(e.UserInput.menuID),s=d.insertBefore(n.createElement("div"),d.firstChild),u=s.appendChild(n.createElement("input")),p=s.appendChild(n.createElement("input"));u.type="button",u.value="New...",p.type="button",p.value="Know its URI";function g(f){let b=n.getElementById(e.UserInput.menuID);b.lastHighlight&&(b.lastHighlight.className=""),b.lastHighlight=N.ancestor(N.getTarget(f),"INPUT"),b.lastHighlight&&(b.lastHighlight.className="activeItem")}s.addEventListener("mouseover",g,!1),u.addEventListener("click",this.createNew,!1),p.addEventListener("click",this.inputURI,!1)},Keypress:function(m){if(m.keyCode===13)if(e.targetOf(m).tagName!=="TEXTAREA")this.clearInputAndSave();else{let d=parseInt(this.lastModified.getAttribute("rows"));this.lastModified.setAttribute("rows",(d+1).toString()),m.stopPropagation()}},Mousedown:function(m){t("MOUSING DOWN"),window.addEventListener("keypress",function(s){s.ctrlKey&&(s.charCode===115||s.charCode===113)&&Jn.switchMode()},!1),window.addEventListener("mousedown",Jn.Mousedown,!1);let d=document.getElementById("OutlineView");d&&(d.oncontextmenu=function(){return!1}),m.button===2&&(Jn.switchMode(),m&&(m.preventDefault(),m.stopPropagation()))},Mouseover:function(d){if(this.className="bottom-border-active",this._tabulatorMode===1)switch(N.getTarget(d).tagName){case"TD":{let s=N.getTarget(d);s.className==="pred"&&(s.style.cursor="copy");break}case"DIV":{let s=N.getTarget(d);N.getTarget(d).className==="bottom-border"&&(s.style.borderColor="rgb(100%,65%,0%)",s.style.cursor="copy");break}default:}},Mouseout:function(m){if(this.className="bottom-border",this._tabulatorMode===1){let d=N.getTarget(m);N.getTarget(m).className==="bottom-border"&&(d.style.borderColor="transparent",d.style.cursor="auto")}},whatSortOfEditCell:function(d){if(d.nextSibling)return"predicate";let s=this.getStatementAbout(d).predicate;return ge.whether(s,o.rdf("type"),o.owl("DatatypeProperty"))||ge.whether(s,o.rdfs("range"),o.rdfs("Literal"))||s.termType==="Collection"?"DatatypeProperty-like":ge.whether(s,r("type"),o.owl("ObjectProperty"))?"ObjectProperty-like":"no-idea"},getStatementAbout:function(d){let s=c(d);if(!s)throw new Error("No ancestor TR for the TD we clicked on:"+d);let u;try{u=s.AJAR_statement}catch{throw new Error("No AJAR_statement!"+d+d.textContent+" has ancestor "+s)}return this.lastModifiedStat=s.AJAR_statement,this.statIsInverse=s.AJAR_inverse,u},createInputBoxIn:function(d,s){function u(g){(g.keyCode===38||g.keyCode===40)&&(e.OutlinerKeypressPanel(g),e.UserInput.clearInputAndSave())}ce.info("myDocument in createInputBoxIn is now "+n.location),ce.info("outline.document is now "+e.document.location);let p=n.createElement("input");return p.setAttribute("value",s),p.setAttribute("class","textinput"),d.className!=="undetermined selected"&&(p.setAttribute("size","100"),p.addEventListener("keypress",u,!1)),d.appendChild(p),p},createNew:function(d){e.UserInput.clearMenu();let s=e.getSelection()[0],u=s.parentNode.AJAR_statement.why,p=ge.nextSymbol(u);e.UserInput.fillInRequest("object",s,p),e.outlineExpand(e.getSelection()[0],p)},inputURI:function(d){let s=e.UserInput;s.clearMenu();let u=e.getSelection()[0];N.emptyNode(u);let p=" (Type a URI) ";s.lastModified=s.createInputBoxIn(u,p),s.lastModified.select();function g(f){switch(f.stopPropagation(),f.keyCode){case 13:case 9:if(this.value!==p){let b=this.value;s.fillInRequest("object",u,ge.sym(b))}}}s.lastModified.addEventListener("keypress",g,!1)},appendToPredicate:function(d){let s=!1,u;try{for(u=d.parentNode.nextSibling;u.childNodes.length===1&&u.AJAR_statement;u=u.nextSibling);}catch{s=!0}let p=n.createElement("div");if(p.style.colspan="1",p.style.display="block",p.style.display="",d.hasAttribute("rowspan")&&d.setAttribute("rowspan",parseInt(d.getAttribute("rowspan"))+1),d.hasAttribute("rowspan")||d.setAttribute("rowspan","2"),!s)u.parentNode.insertBefore(p,u);else{let g=d.parentNode.parentNode;g.className==="defaultPane"?g.insertBefore(p,g.lastChild):g.appendChild(p)}return p},bnode2symbol:function(d,s){ge.copyTo(d,s,["two-direction","delete"])},generateRequest:function(d,s,u,p){let g;p||(s?g=s:g=c(this.lastModified),N.emptyNode(g));let f=kn,b=f.bnode();if(f.add(b,o.rdf("type"),o.link("Request")),d.length<10?f.add(b,o.link("message"),f.literal(d)):f.add(b,o.link("message"),f.literal(d)),f.add(b,o.link("to"),f.literal("The User")),f.add(b,o.link("from"),f.literal("The User")),!p){let w;u?w=g.appendChild(e.outlinePredicateTD(b,g,!1,!1)):w=g.appendChild(e.outlineObjectTD(b)),w.className="undetermined",w.textContent=d}return b},showMenu:function(d,s,u,p,g){ce.info("myDocument is now "+n.location),ce.info("outline.doucment is now "+e.document.location);let f=this,b=n.createElement("div");if(t(`
**** In showMenu, menuType = `+s+`
`),p)for(let M in p)console.log("	 extra "+M+": "+p[M]+`
`);console.log(`CREATED MENU
`),b.id=this.menuID,b.className="outlineMenu",b.style.top=d.pageY+"px",b.style.left=d.pageX+"px";let w=function(Q){let ee=0,W=0,G=0,R=0,H=0,q=0;for(;Q&&!isNaN(Q.offsetLeft)&&!isNaN(Q.offsetTop);)H=Q.offsetLeft,q=Q.offsetTop,H!==G&&(ee+=Q.offsetLeft-Q.scrollLeft),q!==R&&(W+=Q.offsetTop-Q.scrollTop),G=H,R=q,Q=Q.parentNode;return{top:W+54,left:ee-38}};if(s==="JournalTitleAutoComplete"){let M=w(n.getElementById("inpid_journal_title"));M.left-=n.getElementById("inpid_journal_title").scrollTop,b.style.top=M.top+"px",b.style.left=M.left+"px"}console.log("menu at top="+b.style.top+" left="+b.style.left+`
`),n.body.appendChild(b);let _=b.appendChild(n.createElement("table"));b.lastHighlight=null;function I(M){b.lastHighlight&&(b.lastHighlight.className=""),b.lastHighlight=N.ancestor(N.getTarget(M),"TR"),b.lastHighlight&&(b.lastHighlight.className="activeItem")}_.addEventListener("mouseover",I,!1);let S;switch(s){case"DidYouMeanDialog":S=function(Q){t("DID YOU MEAN SELECT ITEM!!!!!");let ee=N.ancestor(N.getTarget(Q),"TR");ee.childNodes.length===2&&ee.nextSibling?(ge.add(Y,j,ae),e.UserInput.clearMenu()):ee.childNodes.length===2&&e.UserInput.clearMenu()};break;case"LimitedPredicateChoice":{let M=p.clickedTd;S=function(ee){t("LIMITED P SELECT ITEM!!!!");let W=N.getAbout(ge,N.getTarget(ee)),G=M.parentNode.AJAR_statement.predicate.elements;for(let q=0;q<G.length;q++)G[q].sameTerm(W)&&G.unshift(G.splice(q,1)[0]);e.UserInput.clearMenu();let R=M.parentNode,H=e.outlinePredicateTD(R.AJAR_statement.predicate,R);R.insertBefore(H,M),R.removeChild(M),f.lastModified.select()};break}case"PredicateAutoComplete":case"GeneralAutoComplete":case"GeneralPredicateChoice":case"JournalTitleAutoComplete":case"TypeChoice":{let M=p.isPredicate,Q=p.selectedTd;S=function(W){t("WOOHOO");let G=N.getAbout(ge,N.getTarget(W));t("GENERAL SELECT ITEM!!!!!!="+G),t("target="+N.getTarget(W)),M?(t("1"),e.UserInput.fillInRequest("predicate",Q,G)&&(t("2"),e.UserInput.clearMenu())):(t("3"),e.UserInput.fillInRequest("object",Q,G)&&(t("4"),e.UserInput.clearMenu()))};break}default:throw new Error("userinput: unexpected mode")}_.addEventListener("click",S,!1);let A={};ge.each(void 0,o.rdf("type"),o.owl("Ontology")).forEach(function(M){let Q=N.label(M);if(!Q)return;let ee=Q.value.match(/\((.+?)\)/);ee?A[ee[1]]=M.uri:A[Q.value]=M.uri});function O(M){_.firstChild&&_.firstChild.className==="no-suggest"&&_.removeChild(_.firstChild);let Q=N.predicateLabelForXML(M,!1);if(!M.uri)return;let ee="??";for(let R in A)if(ce.debug(A[R]),Oe.Util.string_startswith(M.uri,A[R])){ee=R;break}let W=_.appendChild(n.createElement("tr"));W.setAttribute("about",M),W.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(Q)),W.appendChild(n.createElement("td")).appendChild(n.createTextNode(ee.toUpperCase()))}function z(M){return function(Q){let ee=Q[M.vars[0]];O(ee)}}function F(M){f.clearMenu(),M.stopPropagation()}let E,Y,j,ae,de,$;switch(s){case"DidYouMeanDialog":{let M=p.dialogTerm;Y=p.bnodeTerm,b.style.width="auto";let ee=_.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));ee.appendChild(n.createTextNode("Did you mean..."));let W=ge.statementsMatching(M),G;for(G=0;G<W.length&&!ge.whether(W[G].predicate,r("type"),o.owl("InverseFunctionalProperty"));G++);let R=W[G].predicate,H=ge.any(M,W[G].predicate),q=N.label(M)+" who has "+N.label(R)+" "+H+"?",se=_.appendChild(n.createElement("tr")).appendChild(n.createElement("th"));se.appendChild(n.createTextNode(q)),ee.setAttribute("colspan","2"),se.setAttribute("colspan","2");let D=_.appendChild(n.createElement("tr"));D.appendChild(n.createElement("th")).appendChild(n.createTextNode("Yes")),D.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));let J=_.appendChild(n.createElement("tr"));J.appendChild(n.createElement("th")).appendChild(n.createTextNode("No")),J.appendChild(n.createElement("td")).appendChild(n.createTextNode("BOOLEAN"));break}case"PredicateAutoComplete":{E=p.inputText;let M=e.labeller.searchAdv(E,void 0,"predicate"),Q=[];for(let W=0;W<M.length;W++){let G={};G.vars=[],G.vars.push("Kenny");let R={};R.Kenny=ge.fromNT(M[W].NT);try{z(G)(R)}catch(H){throw new Error("I'll deal with bnodes later...[Kenny]"+H)}}let ee=Q[0];if(ee.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let W=0;W<ee.length&&W<10;W++)O(ee[W][1]);break}case"GeneralAutoComplete":{E=p.inputText;let M;try{M=e.labeller.search(E)}catch(W){console.log("GeneralAutoComplete: debug me "+p.selectedTd.textContent+`
`+W+`
`)}let Q=M[0],ee=M[1];if(Q.length===0){console.log(`cm length 0
`),this.clearMenu();return}for(let W=0;W<Q.length&&W<10;W++){let G=Q[W][1].toNT();de=_.appendChild(n.createElement("tr")),de.setAttribute("about",G),$=de.appendChild(n.createElement("th")),$.appendChild(n.createElement("div")).appendChild(n.createTextNode(Q[W][0]));let R=ee[W],H=R?N.label(R):"";de.appendChild(n.createElement("td")).appendChild(n.createTextNode(H))}break}case"JournalTitleAutoComplete":{E=p.inputText,console.log("testing searching text= "+E+` =====
`),console.log(`
===start JournalTitleAutoComplete
`);let M=ge.each(void 0,r("type"),i("Journal")),Q=[];for(let ee=0;ee<M.length;ee++){let W=M[ee],G=ge.each(W,a("title"),void 0),R=G+"",H=E.toLowerCase();if(R.toLowerCase().search(H)!==-1){t("FOUND A Journal Title Match!!!!!!"),Q.push(G);let X=_.appendChild(n.createElement("tr"));X.setAttribute("about","journalTitle"),X.appendChild(n.createElement("th")).appendChild(n.createElement("div")).appendChild(n.createTextNode(G)),X.appendChild(n.createElement("td")).appendChild(n.createTextNode(W))}}console.log("matched: "+Q+`
`),console.log(`\\\\done showMenu's JTAutocomplete
`);break}case"LimitedPredicateChoice":{let M=N.getAbout(ge,p.clickedTd);M.termType="Collection";let Q=ge.each(M,o.link("element"));for(let ee=0;ee<Q.length;ee++)O(Q[ee]);break}default:{de=_.appendChild(n.createElement("tr")),de.className="no-suggest",$=de.appendChild(n.createElement("th")),$.appendChild(n.createElement("div")).appendChild(n.createTextNode("No suggested choices. Try to type instead.")),de.appendChild(n.createElement("td")).appendChild(n.createTextNode("OK")),de.addEventListener("click",F,"false");let M=function(){};switch(u.constructor.name){case"Array":for(let Q=0;Q<u.length;Q++)ge.query(u[Q],z(u[Q]),M);break;case"undefined":throw new Error("addPredicateChoice: query is not defined");default:ge.query(u,z(u),M)}}}},fillInRequest:function(d,s,u){let p=s.parentNode,g=p.AJAR_statement,f=p.AJAR_inverse,b=d==="object"?g.object:g.predicate,w,_=!1,I;if(ge.any(b,o.link("onfillin")),d==="predicate"){let S=e.outlinePredicateTD(u,p,!1,!1);if(s.nextSibling.className!=="undetermined"){let A=new Oe.Statement(g.subject,u,g.object,g.why);try{ge.updater.update([],[A],function(O,z,F){z?(w=ge.anyStatementMatching(g.subject,u,g.object,g.why),p.AJAR_statement=w,S.className=S.className.replace(/ pendingedit/g,"")):ce.warn("Failure occurs (#2) while inserting "+p.AJAR_statement+`

`+F)})}catch(O){ce.error(O),ce.warn("Error when insert (#2) of statement "+A+`:
	`+O);return}S.className+=" pendingedit",this.lastModified=null}else this.formUndetStat(p,g.subject,u,g.object,g.why,!1),e.walk("right"),_=!0;e.replaceTD(S,s),kn.remove(g)}else if(d==="object"){let S=e.outlineObjectTD(u);if(e.replaceTD(S,s),!s.previousSibling||s.previousSibling.className!=="undetermined"){let A;f?A=new Oe.Statement(u,g.predicate,g.object,g.why):A=new Oe.Statement(g.subject,g.predicate,u,g.why);try{ge.updater.update([],[A],function(O,z,F){ce.info("@@ usinput.js (object) callback ok="+z+" for statement:"+A+`
 `);let E;z?(S.className=S.className.replace(/ pendingedit/g,""),f?E=ge.statementsMatching(u,g.predicate,g.object,g.why):E=ge.statementsMatching(g.subject,g.predicate,u,g.why),E.length||ce.error("userinput.js 1711: Can't find statememt!"),p.AJAR_statement=E[0]):ce.warn("userinput.js (object): Fail trying to insert statement "+A)})}catch(O){ce.error("userinput.js (object): exception trying to insert statement "+A+": "+N.stackString(O)),ce.warn("Error trying to insert statement "+A+`:
`+O);return}this.lastModified=null,S.className+=" pendingedit"}else e.walk("left"),_=!0;kn.remove(g)}if(jn.statements.push(w),I&&I(g.subject),_)this.startFillInText(e.getSelection()[0]);else return!0},formUndetStat:function(d,s,u,p,g,f){return d.AJAR_inverse=f,d.AJAR_statement=kn.add(s,u,p,g),d.AJAR_statement}}}import{store as Kc}from"solid-logic";import*as Hi from"rdflib";function Wi(){this.queries=[],this.listeners=[],this.addQuery=function(e){let n;for((e.name===null||e.name==="")&&(e.name="Query #"+(this.queries.length+1)),e.id=this.queries.length,this.queries.push(e),n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].addQuery(e)},this.removeQuery=function(e){let n;for(n=0;n<this.listeners.length;n++)this.listeners[n]!==null&&this.listeners[n].removeQuery(e);this.queries[e.id]!==null&&delete this.queries[e.id]},this.addListener=function(e){let n;for(this.listeners.push(e),n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.addQuery(this.queries[n])},this.removeListener=function(e){let n;for(n=0;n<this.queries.length;n++)this.queries[n]!==null&&e.removeQuery(this.queries[n]);for(n=0;n<this.listeners.length;n++)this.listeners[n]===e&&delete this.listeners[n]}}import{store as fn}from"solid-logic";import{parse as Ls}from"rdflib";import{sym as Gi}from"rdflib";import{authn as Ns,store as Kn}from"solid-logic";var ji="profile/card#me";function Ji(e){let n=Ns.currentUser();return!!(n&&(n.sameTerm(e)||n.doc().sameTerm(e)))}async function mn(e){try{let n=e.site().uri,t=Gi(`${n}${ji}`);try{return await Kn.fetcher.load(t),t}catch{}try{let i=new URL(e.uri),a=i.pathname.split("/").filter(Boolean);if(a.length>0){let l=`${i.origin}/${a[0]}/`,c=Gi(`${l}${ji}`);return await Kn.fetcher.load(c),c}}catch{}try{await Kn.fetcher.load(e)}catch{return e}let r=Kn.any(e,o.foaf("primaryTopic"),null,e.doc());if(r&&r.termType==="NamedNode")try{return await Kn.fetcher.load(r),r}catch{return e}return e}catch{return e}}function Qe(e){try{return new URL(e.uri).hash==="#me"}catch{return!1}}function Ki(e,n){return e.anyValue(n,o.vcard("fn"),null,n.doc())||e.anyValue(n,o.foaf("name"),null,n.doc())||new URL(n.uri).host.split(".")[0]}import{ACL_LINK as du}from"solid-logic";async function _t(e){if(Qe(e)){try{await fn.fetcher.load(e.doc())}catch(t){console.warn("Unable to load profile document for WebID",e.doc().uri,t)}return fn.each(e,o.space("storage")).filter(t=>t.termType==="NamedNode")}try{let n=await Fs(e);return n?[n]:[]}catch(n){return console.error("cannot load container",n),[]}}async function Fs(e){let n=new URL(e.value||e.uri),t=n.pathname;for(;t.length;){t=t.substring(0,t.lastIndexOf("/"));let r=fn.sym(`${n.origin}${t}/`);if(await Ms(r))return r}return null}async function Ms(e){return await fr(e),fn.holds(e,o.rdf("type"),o.space("Storage"),e.doc())}async function fr(e){if(!fn.any(e,o.ldp("contains"),void 0,e.doc()))try{let t=(await fn.fetcher.webOperation("GET",e.uri,fn.fetcher.initFetchOptions(e.uri,{headers:{accept:"text/turtle"}}))).responseText;e.uri&&t&&Ls(t,fn,e.uri,"text/turtle")}catch(n){console.warn("Unable to load container representation for",e.uri,n)}}var Rs={profile:"profile",social:"friends",folder:"storage"};function hr(e){return e!==null&&typeof e=="object"?e:{}}function Ds(e,n){return e?{kind:Rs[e]??"pane",pane:e,...n?{subject:n}:{}}:{kind:"default"}}function gr(e){let{paneName:n,paneUri:t,viaAccountMenu:r}=hr(e);return{view:Ds(typeof n=="string"&&n?n:void 0,typeof t=="string"&&t?t:void 0),viaAccountMenu:r===!0}}function hn(){return gr(window.history.state)}var Mn=new WeakMap;function Yi(e){return(Mn.get(e)??0)>0}function Yn(e,n,t,r,i){Mn.set(e,(Mn.get(e)??0)+1);try{e[n](t,r,i)}finally{let a=(Mn.get(e)??1)-1;a?Mn.set(e,a):Mn.delete(e)}}function Xi(e,n){let t={...hr(e)};return n.pane&&(t.paneName=n.pane.name,typeof n.pane.subject=="string"&&(t.paneUri=n.pane.subject)),n.leavingPage&&!n.pane&&delete t.paneName,(n.leavingPage&&!n.pane||n.pane&&!n.pane.subject)&&delete t.paneUri,n.viaAccountMenu?t.viaAccountMenu=!0:delete t.viaAccountMenu,t}function Bs(e){let{paneName:n,paneUri:t,viaAccountMenu:r,...i}=hr(e);return i}function kt(){Yn(window.history,"replaceState",Bs(window.history.state),"",window.location.href)}var Os=["profile","social"];function br(e){return e!==void 0&&Os.includes(e)}function Qi(e){return br(e)}function Zi(e){let{view:n,viaAccountMenu:t,viewer:r,pageUrl:i,owner:a,storageUris:l}=e,c=n.pane,h=c==="profile"||c==="social"?a!==void 0:c==="folder"&&l.some(d=>!n.subject||d===n.subject),m=h||!t?a:void 0;return br(c)?{mode:c==="profile"?"full":"compact",subjectUri:n.subject||(h?a:void 0)||i,paneName:c}:!m||m===r?{mode:"none"}:{mode:"compact",subjectUri:m,paneName:c}}function wr(e,n){return{paneName:e.pane??(n?"profile":void 0),paneUri:e.subject}}function Xn(e,n,t){return!n.paneName||e.paneName!==n.paneName?!1:e.paneName==="folder"?n.paneUri?n.paneUri===e.paneUri:t===1:!0}function ea(e,n,t){let r=e.filter(i=>i.paneName===n);return r.find(i=>i.paneUri===t)??r[0]}function na(e){return e.viaAccountMenu||e.ownProfile||e.inViewerPod}function ta(e){return e.viaAccountMenu||e.inViewerPod||!e.hasOwner?"explorer":"storage"}function ra(e){return e.isRootResource||e.isWebId?!1:!e.viewerPodOnly||e.inViewerPod}function ia(e,n,t,r=!1){return n==="folder"||n==="basicPreferences"||n==="home"||n==="dashboard"?!1:e&&!br(n)}import{authn as Gs}from"solid-logic";import{sym as Qn}from"rdflib";import{sym as Vs}from"rdflib";var zs=new URL("panes/solid-panes/src/icons/folder.svg",xn).href,qs=new URL("panes/solid-panes/src/icons/person.svg",xn).href,$s=new URL("panes/solid-panes/src/icons/friends.svg",xn).href,Hs=zs,aa=qs,Ws=$s;function yr(e,n,t,r,i,a){return{name:e.name,paneName:t,tabName:a,label:function(){return r},render:function(l,c,h){return e.render(n,c,t==="folder"?{...h,solo:!1,fullView:!1}:h)},shouldGetFocus:function(){return!1},requireQueryButton:!!e.requireQueryButton,subject:n,icon:i}}async function oa(e,n,t="Pane",r="",i=qe){let a=new URL(window.location.href),l=n||Vs(a.toString()),c=await mn(l);if(!c||!c.value)return null;let h=i(e);return h?yr(h,c,e,t,r):null}async function It(e,n=qe){if(e&&Qe(e)){let t=n("profile");return t?yr(t,e,"profile","Profile",aa):null}return oa("profile",e,"Profile",aa,n)}async function vr(e,n=qe){return oa("social",e,"Social",Ws,n)}async function Et(e,n){let t=qe("folder");return t?yr(t,e,t.name,n||"Storage",Hs):null}async function Tt(e){let n=await _t(e);return n.length===0?[]:Promise.all(n.map((t,r)=>Et(t,n.length>1?`Storage ${r+1}`:"Storage"))).then(t=>t.filter(r=>r!==null))}var js=500,sa=new Map,la=new Map,da=new Map;function Js(e){try{let n=new URL(e),[t=""]=n.pathname.split("/").filter(Boolean);return`${n.origin}|${t}`}catch{return e}}function Ks(e){return Qn(e).doc().uri}function xr(e,n,t,r,i){let a=e.get(n);if(a)return a;let l=r().catch(c=>(console.warn(`Could not load the ${t} for ${n}`,c),e.get(n)===l&&e.delete(n),i));return e.set(n,l),e.size>js&&e.delete(e.keys().next().value),l}function Ys(e){return xr(sa,Ks(e),"owner of the pod",async()=>{let n=Qn(e),t=await mn(n);return t.uri===n.uri&&!Qe(n)?void 0:t.value},void 0)}function Xs(e,n){let t=n?Qn(n):Qn(e);return xr(la,Js(e),"storages of the pod",()=>Tt(t),[])}function Qs(e){return e?xr(da,e,"storages of the viewer",async()=>(await _t(Qn(e))).map(n=>n.uri),[]):Promise.resolve([])}async function gn(e=window.location.href){let n=Gs.currentUser()?.value,[t,r]=await Promise.all([Ys(e),Qs(n)]),i=await Xs(e,t);return{viewer:n,owner:t,storagePanes:i,viewerStorages:r}}function ca(){sa.clear(),la.clear(),da.clear()}function ua(e,n){return e.owner===n.owner&&e.viewer===n.viewer&&e.storagePanes.map(t=>t.subject.value).join()===n.storagePanes.map(t=>t.subject.value).join()}function Cr(e,n){return e.viewerStorages.some(t=>n.startsWith(t))}async function At(e){return Cr(await gn(e),e)}var _r="solid-panes:navigated";function pa(e){let n={url:e.location.href,state:gr(e.defaultView?.history.state)};e.dispatchEvent(new CustomEvent(_r,{detail:n}))}function Pt(e,n=document){let t=r=>e(r.detail);return n.addEventListener(_r,t),()=>n.removeEventListener(_r,t)}function ma(e){return typeof e=="object"&&e!==null?e.folderView:void 0}function fa(e){return typeof e=="object"&&e!==null?e.source??"default":e===void 0||e?"default":"accountMenu"}import{sym as Zs}from"rdflib";var el="navbar--hidden",kr=0;function St(e){++kr,document.querySelector("solid-panes-navbar")?.classList.toggle(el,e)}async function Zn(e,n=!1){let t=++kr,r=Ji(Zs(e));if(n||r){St(!0);return}let i=await At(e);t===kr&&St(na({viaAccountMenu:n,ownProfile:r,inViewerPod:i}))}import{uri as nl}from"rdflib";function ha({dom:e,UI:n,kb:t,outlineIcons:r,expandMouseDownListener:i,selectableTDClickListener:a,setSelected:l,viewAsBoringDefault:c,removeNodeIconMouseDownListener:h}){function m(p,g,f){let b=N.AJARImage(r.src.icon_remove_node,"remove",void 0,e);return b.addEventListener("click",h),b.node=f,b.setAttribute("about",g.toNT()),b.style.marginLeft="5px",b.style.marginRight="10px",p.appendChild(b),b}let d={};globalThis.termWidget=d,d.construct=function(p){p=p||document;let g=p.createElement("div");return g.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),g.setAttribute("class","iconTD"),g.setAttribute("notSelectable","true"),g.style.width="0px",g},d.addIcon=function(p,g,f){let b=p.childNodes[1];if(!b)return;let w=N.AJARImage(g.src,g.alt,g.tooltip,e),_=Number.parseInt(b.style.width||"0",10)+g.width;b.style.width=_+"px",b.appendChild(w),f&&w.addEventListener("click",f)},d.removeIcon=function(p,g){let f=p.childNodes[1],b;if(!f)return;let w=Number.parseInt(f.style.width||"0",10)-g.width;f.style.width=w+"px";for(let _=0;_<f.childNodes.length;_++){let I=f.childNodes[_],S=I.src;try{b=e.location.href.split("?")[0]}catch{b=""}let A=nl.join(g.src,b);S===A&&f.removeChild(I)}},d.replaceIcon=function(p,g,f,b){d.removeIcon(p,g),d.addIcon(p,f,b)};function s(p,g,f,b){let w=e.createElement("div");if(w.classList.add("obj"),w.setAttribute("notSelectable","false"),w.setAttribute("role","gridcell"),w.setAttribute("tabindex","0"),w.setAttribute("data-outline-node","object"),!p)return w.textContent="No object available.",w;let _="obj";return(p.termType==="NamedNode"||p.termType==="BlankNode"||p.termType==="Literal"&&p.value.slice&&(p.value.slice(0,6)==="ftp://"||p.value.slice(0,8)==="https://"||p.value.slice(0,7)==="http://"))&&(w.setAttribute("about",p.toNT()),w.appendChild(n.utils.AJARImage(n.icons.originalIconBase+"tbl-expand-trans.png","expand",void 0,e)).addEventListener("click",i)),w.setAttribute("class",_),t.whether(p,n.ns.rdf("type"),n.ns.link("Request"))&&(w.className="undetermined"),g||(g=c),w.appendChild(g(p)),f&&m(w,p,f),w.tabulatorSelect=function(){l(this,!0)},w.tabulatorDeselect=function(){l(this,!1)},w.addEventListener("click",a),w}function u(p,g,f,b){let w=e.createElement("div");w.setAttribute("about",p.toNT()),w.setAttribute("class",b?"pred internal":"pred"),w.setAttribute("role","gridcell"),w.setAttribute("data-outline-node","predicate");let _;switch(p.termType){case"BlankNode":w.className="undetermined";break;case"NamedNode":_=n.utils.predicateLabelForXML(p,f);break;case"Collection":_=n.utils.predicateLabelForXML(p.elements[0],f)}_=_?_.slice(0,1).toUpperCase()+_.slice(1):"...";let I=e.createElement("div");I.classList.add("labelTD"),I.setAttribute("notSelectable","true"),I.appendChild(e.createTextNode(_)),w.appendChild(I),I.style.width="100%",w.appendChild(d.construct(e));for(let S in r.termWidgets){if(!g||!g.AJAR_statement)break;r.termWidgets[S].filter&&r.termWidgets[S].filter(g.AJAR_statement,"pred",f)&&d.addIcon(w,r.termWidgets[S])}return w.tabulatorSelect=function(){l(this,!0)},w.tabulatorDeselect=function(){l(this,!1)},w.addEventListener("click",a),w}return{appendRemoveIcon:m,outlineObjectDiv:s,outlinePredicateDiv:u,termWidget:d}}var tl=new URL("panes/solid-panes/src/icons/person.svg",xn).href,rl=new URL("panes/solid-panes/src/icons/friends.svg",xn).href;function ga(e,n,t){if(e)return typeof e.icon=="function"?e.icon(n,t):e.icon}async function ba(e,n,t,r){return typeof r!="function"?[]:Pi({subject:e,context:n,panes:t,iconOverrides:{profile:()=>tl,social:()=>rl},openPane:(i,a)=>r(i,a)})}Re(he(`/* Styles extracted from manager.js */

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
`,"text/css"));var wa=()=>import("./part-ABV24MWB.js").then(e=>e.default),on="solid-ui-file-explorer-provider";function il(e){e.addEventListener("close",()=>e.remove())}function Ir(e){let n=e.dom,t=new WeakMap,r=new WeakMap,i=new WeakSet;this.document=e.dom,this.context=e,this.outlineIcons=Z,this.labeller=this.labeller||{},this.labeller.LanguagePreference="";let a=this,l=this,c=[];this.selection=c,this.ancestor=N.ancestor,this.sparql=Ge.UpdateManager,this.kb=bn;let h=bn,m=bn.fetcher;n.outline=this,this.qs=new Wi,this.UserInput=new Jn(this),this.clipboardAddress="tabulator:clipboard",this.UserInput.clipboardInit(this.clipboardAddress);let{outlineObjectDiv:d,outlinePredicateDiv:s,termWidget:u}=ha({dom:n,UI:Me,kb:bn,outlineIcons:Z,expandMouseDownListener:G,selectableTDClickListener:J,setSelected:ee,viewAsBoringDefault:Pe,removeNodeIconMouseDownListener:D});this.outlineObjectDiv=d,this.outlinePredicateDiv=s,this.outlineObjectTD=d,this.outlinePredicateTD=s,this.termWidget=u,this.init=function(){let y=f();y.outline=this},this.getLayoutMode=function(){let y=this.context?.environment?.layout;if(y==="mobile"||y==="desktop")return y;if(typeof window<"u"&&window.matchMedia){let v=Math.round(Math.min(window.innerWidth,window.visualViewport?.width||window.innerWidth)),x=window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0;return v<=768||x&&v<=1024?"mobile":"desktop"}return"desktop"},p.lastkbsize=0;function p(y){let v=[];for(let C=arguments.length-1;C>0;C--)v[C-1]=arguments[C];let x=new Date().getTime(),P=y.apply(y,v),T=new Date().getTime();return ce.info("BENCHMARK: kb delta: "+(h.statements.length-p.lastkbsize)+", time elapsed for "+y+" was "+(T-x)+"ms"),p.lastkbsize=h.statements.length,P}function g(y,v,x){let P=N.AJARImage(Z.src.icon_remove_node,"remove",void 0,n);return P.addEventListener("click",D),P.node=x,P.setAttribute("about",v.toNT()),P.style.marginLeft="5px",P.style.marginRight="10px",y.appendChild(P),P}this.appendAccessIcons=function(y,v,x){if(x.termType!=="NamedNode")return;let P=y.uris(x);P.sort();let T=null;for(let C=0;C<P.length;C++)P[C]!==T&&(T=P[C],l.appendAccessIcon(v,T))},this.appendAccessIcon=function(y,v){if(!v)return"";let x=Ge.uri.docpart(v);if(x.slice(0,5)!=="http:")return"";let P=m.getState(x),T,C,k;switch(P){case"unrequested":T=Z.src.icon_unrequested,C="fetch",k=se;break;case"requested":T=Z.src.icon_requested,C="fetching",k=q;break;case"fetched":T=Z.src.icon_fetched,k=X,C="loaded";break;case"failed":T=Z.src.icon_failed,C="failed",k=q;break;case"unpermitted":T=Z.src.icon_failed,k=q,C="no perm";break;case"unfetchable":T=Z.src.icon_failed,k=q,C="cannot fetch";break;default:ce.error("?? state = "+P);break}let oe=N.AJARImage(T,C,Z.tooltips[T].replace(/[Tt]his resource/,x),n);return oe.classList.add("objectValueAccessIcon"),oe.setAttribute("uri",v),oe.addEventListener("click",k),ae(oe,x),y.appendChild(oe),oe};function f(){return w("OutlineView","Resource browser")}function b(y){Zn(y.uri).catch(v=>ce.error("Failed to update navbar visibility: "+v))}function w(y){if(y==="OutlineView"){let v=document.getElementById("OutlineView");if(v)return v;let x=document.getElementById("MainContent")||document.body;if(x){let P=document.createElement("div");return P.id="OutlineView",P.classList.add("outline-view"),P.setAttribute("aria-label","Resource browser"),x.appendChild(P),P}}}async function _(y,v){return y.uri.endsWith("/")&&await fr(y),Ei(y,v,{excludedPaneNames:["sharing"],fallbackPaneName:"internal"})}function I(y){let v=n.getElementById("queryButton");v&&(y?v.removeAttribute("style"):v.setAttribute("style","display:none;"))}function S(y,v,x,P){if(!y||!x)return;let T;try{ce.info("outline: Rendering pane (menu): "+x.name),T=x.render(v,e,P)}catch(C){T=n.createElement("div"),T.setAttribute("class","exceptionPane");let k=n.createElement("pre");T.appendChild(k),k.appendChild(n.createTextNode(N.stackString(C)))}O(y,v,x,T),r.set(y,{pane:x,subjectUri:v.uri})}function A(y,v,x){if(!x){ce.warn("outline: Unable to open pane in place: pane is undefined.");return}I(!!x.requireQueryButton),y.pane=x,S(y,v,x,t.get(y)?.options||{})}this.refreshActiveExplorerPanes=function(){let y=Array.from(n.querySelectorAll(on));for(let v of y){let x=v.subjectUri,P=v.pane;if(!x||!P)continue;let T=v.querySelector(":scope > .paneDiv");if(!T||T.matches('[data-preserve-pane-on-resize="true"]')||T.querySelector('[data-preserve-pane-on-resize="true"]')||T.querySelector(":scope > folder-pane-view"))continue;let C;try{C=P.render(Ge.sym(x),e,v.paneRenderOptions||t.get(v)?.options||{})}catch(k){ce.error("outline: Failed to refresh pane layout: "+N.stackString(k));continue}C.classList.add("paneDiv"),T.replaceWith(C),r.set(v,{pane:P,subjectUri:x})}};function O(y,v,x,P){let T=t.get(y);Ai(y,{context:e,subjectUri:v.uri,pane:x,relevantPanes:y.relevantPanes||[],header:T&&ia(T.showHeader,x?.name,T.options.folderView,T.options.solo)?{paneIcon:ga(x,v,e),menuItems:T.menuItems,showBack:!T.options.solo}:void 0,paneElement:P})}async function z(y,v,x,P){x=x||{},P=P||n.createElement(on);let C={generation:(t.get(P)?.generation||0)+1,menuItems:[],options:x};t.set(P,C),P.classList.add("paneView","tdFlex"),P.setAttribute("notSelectable","true"),P.setAttribute("role","grid"),P.setAttribute("about",y.toNT()),x.hover&&P.classList.add("hoverControl"),P.context=e,P.subjectUri=y.uri,P.soloPane=x.solo,i.has(P)||(P.addEventListener(ki,me=>{lr(me,P)&&(me.stopPropagation(),R({target:P}))}),P.addEventListener(Ii,me=>{me.stopPropagation();let we=Ge.sym(me.detail.subjectUri).doc();et.acl.findAccessGrants(we).then(async xe=>{let ke=await wa();ar(ke,{props:{subjectUri:we.uri,accessGrants:xe}})}).catch(xe=>{ce.error("outline: Failed to open access controls: "+N.stackString(xe))})}),P.addEventListener(sr,me=>{if(!lr(me,P))return;me.stopPropagation();let we=e.session.paneRegistry.byName(me.detail.paneName);A(P,Ge.sym(me.detail.subjectUri),we)}),i.add(P));let k=x.hideList?[]:await _(y,e);if(t.get(P)!==C)return P;let oe=e.session.logic?.resource||et.resource,U=y.uri.endsWith("/")?Ge.sym(`${y.uri}index.ttl`):null;if(x.solo&&!v&&!x.folderView&&U&&(typeof oe?.containerHasIndexDocument=="function"&&oe.containerHasIndexDocument(y)||h.holds(y,o.ldp("contains"),U,y.doc()))){if(y=typeof oe?.getContainerIndexThing=="function"?oe.getContainerIndexThing(y):Ge.sym(`${U.uri}#this`),await h.fetcher.load(y.doc()),k=await _(y,e),t.get(P)!==C)return P;P.subjectUri=y.uri,P.setAttribute("about",y.toNT())}P.relevantPanes=k,P.pane=v||Ti(y,e,k);let ne=!!(y&&y.uri&&y.site&&y.site().uri===y.uri),K=!!x.headerOnlyInViewerPod,re=!y.uri.endsWith("/index.ttl#this")&&ra({isRootResource:ne,isWebId:Qe(y),viewerPodOnly:K,inViewerPod:K?await At(n.location.href):!0});if(t.get(P)!==C)return P;C.showHeader=re,P.paneRenderOptions=x,P.soloPane=x.solo,P.openPane=(me,we)=>A(P,me,qe(we)),P.handleAccessClick=async()=>{try{let me=y.doc(),we=await et.acl.findAccessGrants(me),xe=await wa();ar(xe,{props:{subjectUri:me.uri,accessGrants:we}})}catch(me){ce.error("outline: Failed to open access controls: "+N.stackString(me))}};let pe=r.get(P);if(P.pane?.managesUpdates===!0&&pe?.pane===P.pane&&pe.subjectUri===y.uri&&!x.refresh&&!!P.querySelector(":scope > .paneDiv")?O(P,y,P.pane):P.pane?S(P,y,P.pane,x):O(P,y,P.pane),re){let me=await ba(y,e,k,(we,xe)=>{P.dispatchEvent(new CustomEvent(sr,{bubbles:!0,composed:!0,detail:{subjectUri:we.uri,paneName:xe}}))});t.get(P)===C&&(C.menuItems=me,O(P,y,P.pane))}return P}function F(y){let v=y.parentNode,x=v.parentNode,P=n.createElement("div");x.replaceChild(P,v),v.removeChild(y),x.replaceChild(v,P)}let E=this.propertyTable=function(v,x,P,T){ce.debug("Property block for: "+v),v=h.canon(v);let C=x?x.matches?.(on)?x:x.firstElementChild||x:n.createElement(on);return z(v,P,T,C).catch(k=>{ce.error("outline: Failed to set up file explorer: "+N.stackString(k))}),x&&ce.info("Re-expand: "+x),x||C};function Y(y,v,x){let P=y.createElement("div");P.AJAR_statement=v,P.AJAR_inverse=x,P.setAttribute("predTR","true"),P.setAttribute("role","row");let T=l.outlinePredicateDiv(v.predicate,P,x);return P.appendChild(T),P}this.propertyTR=Y;function j(y,v,x,P){if(ce.debug("Property list length = "+v.length),v.length===0)return"";let T,C,k;x?(T=function(U){return U.subject},v=v.sort(N.RDFComparePredicateSubject)):(T=function(U){return U.object},v=v.sort(N.RDFComparePredicateObject));let oe=v.length;for(C=0;C<oe;C++){let U=v[C];if(P&&!P(U.predicate,x))continue;let L=Y(n,U,x);y.appendChild(L);let ne=L.firstChild,K=ye.defaults[U.predicate.uri],re=0,pe=0,be=0;for(k=0;k+C<oe&&v[C+k].predicate.sameTerm(U.predicate);k++)k>0&&T(v[C+k]).sameTerm(T(v[C+k-1]))&&re++,T(v[C+k]).lang&&a.labeller.LanguagePreference&&(pe+=1,T(v[C+k]).lang.indexOf(a.labeller.LanguagePreference)>=0&&be++);if(be>0&&pe===re+1){for(let me=C;me<=C+re;me++)if(a.labeller.LanguagePreference&&T(v[me]).lang.indexOf(a.labeller.LanguagePreference)>=0){L.appendChild(l.outlineObjectDiv(T(v[me]),K,void 0,U));break}C+=re;continue}L.appendChild(l.outlineObjectDiv(T(U),K,void 0,U)),L.showNobj=function(me){let we=k-re,xe=2*me<we?me:we,ke=[];if(we!==1){ne.setAttribute("rowspan",xe===we?we:me+1);let Ie;xe<we&&xe===1&&ne.setAttribute("rowspan",2);let _e=0;for(Ie=1;Ie<k;Ie++)if(h.canon(T(v[C+Ie])).sameTerm(h.canon(T(v[C+Ie-1]))))ce.info("there are duplicates here: %s",v[C+Ie-1]);else{_e++,U=v[C+Ie],K=ye.defaults[U.predicate.uri];let Ce=n.createElement("div");Ce.style.colspan="1",Ce.appendChild(l.outlineObjectDiv(T(v[C+Ie]),K,void 0,U)),Ce.AJAR_statement=U,Ce.AJAR_inverse=x,y.appendChild(Ce),_e>=xe&&(Ce.style.display="none",ke.push(Ce))}xe===we&&ne.setAttribute("rowspan",_e+1)}if(xe<we){let Ie=n.createElement("div"),_e=Ie.appendChild(n.createElement("div"));if(_e.setAttribute("style","margin: 0.2em; border: none; padding: 0; vertical-align: top;"),_e.classList.add("obj"),_e.setAttribute("notSelectable","false"),we>me){let Ce=n.createElement("a");_e.appendChild(Ce);let De=(function(rn){return rn(ne,k,re,me)})(function(rn,Wn,yi,vi){return function(xi){Ce.innerHTML="",xi==="none"?(Ce.appendChild(N.AJARImage(B.originalIconBase+"tbl-more-trans.png","more","See all",n)),Ce.appendChild(n.createTextNode(we-vi+" more...")),rn.setAttribute("rowspan",vi+1)):(Ce.appendChild(N.AJARImage(B.originalIconBase+"tbl-shrink.png","(less)",void 0,n)),rn.setAttribute("rowspan",we+1));for(let nr=0;nr<ke.length;nr++){let As=ke[nr];As.style.display=xi}}}),Be="none",nn=function(rn){return De(Be),Be=Be==="none"?"":"none",rn&&rn.stopPropagation(),!1};nn(),Ce.addEventListener("click",nn,!1)}y.appendChild(Ie)}},L.showAllobj=function(){L.showNobj(k-re)},L.showNobj(10),C+=k-1}}this.appendPropertyTRs=j;function ae(y,v){ce.debug("Button callbacks for "+v+" added");let x=function(P){return function(C){return C.indexOf("#")>=0,!y||!a.ancestor(y,"DIV")?!1:(C===v&&(y.src=P,y.title=Z.tooltips[P]),!0)}};m.addCallback("request",x(Z.src.icon_requested)),m.addCallback("done",x(Z.src.icon_fetched)),m.addCallback("fail",x(Z.src.icon_failed))}function de(y){let v=y.getAttribute("class");return!!(v&&v.indexOf("selected")>=0)}function $(y){let x=l.targetOf(y).parentNode;u.replaceIcon(x.parentNode,Z.termWidgets.optOn,Z.termWidgets.optOff,M),x.parentNode.parentNode.removeAttribute("optional")}function M(y){let x=l.targetOf(y).parentNode;u.replaceIcon(x.parentNode,Z.termWidgets.optOff,Z.termWidgets.optOn,$),x.parentNode.parentNode.setAttribute("optional","true")}function Q(y,v){let x=Z.termWidgets.optOn,P=Z.termWidgets.optOff,T=C=>!!(C&&typeof C.getAttribute=="function"&&(C.getAttribute("predTR")==="true"||C.getAttribute("data-outline-node")==="predicate"));for(let C=y;C.parentNode;C=C.parentNode)for(;;)if(T(C)){let k=C.getAttribute("parentOfSelected");k?k=parseInt(k):k=0,k===0&&v>0&&u.addIcon(C.childNodes[0],C.getAttribute("optional")?x:P,C.getAttribute("optional")?$:M),k=k+v,C.setAttribute("parentOfSelected",k),k===0&&(C.removeAttribute("parentOfSelected"),u.removeIcon(C.childNodes[0],C.getAttribute("optional")?x:P));break}else if(C.previousElementSibling)C=C.previousElementSibling;else break}this.statusBarClick=function(y){let v=N.getTarget(y);v.label&&(window.content.location=v.label)},this.showURI=function(v){v&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=v.termType==="NamedNode"?v.uri:"")},this.showSource=function(){if(!(typeof sourceWidget>"u")){for(let v in sourceWidget.sources)sourceWidget.sources[v].setAttribute("class","");for(let v=0;v<c.length;v++){if(!c[v].parentNode)continue;let x=c[v].parentNode.AJAR_statement;if(!x)continue;let P=x.why;P&&P.uri&&sourceWidget.highlight(P,!0)}}},this.getSelection=function(){return c};function ee(y,v){if(y.nodeName!=="TD"&&y.nodeName!=="DIV")throw ce.debug("down"+y.nodeName),new Error("Expected TD or DIV in setSelected: "+y.nodeName+" : "+y.textContent);ce.debug("pass");let x=y.getAttribute("class");if(x||(x=""),v){x+=" selected",(x.indexOf("pred")>=0||x.indexOf("obj")>=0)&&Q(y,1),c.push(y);let P=N.getTerm(y);l.showURI(P);let T=y.AJAR_statement;if(typeof T>"u"&&y.parentNode&&(T=y.parentNode.AJAR_statement),T){let C=T.why,k=bn.updater.editable(C.uri,h);k&&x.indexOf("pred")>=0&&u.addIcon(y,Z.termWidgets.addTri)}}else ce.debug("cla=$"+x+"$"),x==="selected"&&(x=""),x=x.replace(" selected",""),(x.indexOf("pred")>=0||x.indexOf("obj")>=0)&&Q(y,-1),x.indexOf("pred")>=0&&u.removeIcon(y,Z.termWidgets.addTri),c=c.filter(function(P){return P===y}),ce.info("Deselecting "+y.textContent);typeof sourceWidget<"u"&&l.showSource(),y.setAttribute("class",x)}function W(){let y=c.length;for(let v=y-1;v>=0;v--)ee(c[v],!1);c=[]}this.targetOf=function(y){let v;if(y||(y=window.event),y.target)v=y.target;else if(y.srcElement)v=y.srcElement;else return ce.error("can't get target for event "+y),!1;return v.nodeType===3&&(v=v.parentNode),v},this.walk=function(v,x){let P=x||c[0],T;switch(v){case"down":try{T=P.parentNode.nextSibling.lastChild}catch{this.walk("up");return}W(),ee(T,!0);break;case"up":try{T=P.parentNode.previousSibling.lastChild}catch{return}W(),ee(T,!0);break;case"right":{let C=P.matches?.(on)?P:P.querySelector?.(on),k=C?.querySelector?.('[data-outline-node="object"]');if(C){k&&(W(),ee(k,!0));return}}if(W(),P.nextSibling||P.lastChild.tagName==="strong")ee(P.nextSibling,!0);else{let C=P.parentNode&&P.parentNode.nextSibling,k=C?C.lastChild:null;if(!k){ee(P,!0);return}ee(k,!0)}break;case"left":if(W(),P.previousSibling&&P.previousSibling.className==="undetermined")return ee(P.previousSibling,!0),!0;{let C=H(P);ee(C?.block||P.parentNode&&P.parentNode.firstChild,!0)}break;case"moveTo":W(),ee(x,!0);break}(v==="down"||v==="up")&&(T.tabulatorSelect||this.walk(v))},this.OutlinerKeypressPanel=function(v){ce.info("Key "+v.keyCode+" pressed");function x(U){U&&n.getElementById("UserURI")&&(n.getElementById("UserURI").value=U.termType==="NamedNode"?U.uri:"")}function P(U){return arguments[3]||(oe("right",k),x(N.getAbout(h,c[0]))),!0}let T,C;if(N.getTarget(v).tagName==="TEXTAREA"||N.getTarget(v).id==="UserURI"||c.length>1)return;if(c.length===0){(v.keyCode===13||v.keyCode===38||v.keyCode===40||v.keyCode===37||v.keyCode===39)&&(this.walk("right",l.focusTd),x(N.getAbout(h,c[0])));return}let k=c[0];switch(m.removeCallback("done","setSelectedAfterward"),m.removeCallback("fail","setSelectedAfterward"),v.keyCode){case 13:if(N.getTarget(v).tagName==="HTML"){let U=N.getAbout(h,k);T=k.parentNode.AJAR_statement.why,C=bn.updater.editable(T.uri,h),U?a.GotoSubject(U,!0):C&&l.UserInput.Enter(k)}else this.UserInput.Keypress(v),this.walk("down"),v.stopPropagation();return;case 38:this.walk("up"),v.stopPropagation(),v.preventDefault();break;case 40:this.walk("down"),v.stopPropagation(),v.preventDefault()}if(N.getTarget(v).tagName==="INPUT")return;let oe;switch(v.keyCode){case 46:case 8:T=k.parentNode.AJAR_statement.why,C=bn.updater.editable(T.uri,h),C&&(v.preventDefault(),this.UserInput.Delete(k));break;case 37:{if(this.walk("left"))return;let U=H(k);if(!U)break;let L=N.getAbout(h,U.provider);L&&ue(U.block,L);break}case 39:{let U=N.getAbout(h,k);if(U){if(oe=this.walk,k.nextSibling){this.walk("right");return}k.firstElementChild?.matches(on)||(m.addCallback("done",P),m.addCallback("fail",P),ie(k,U,{pane:qe("defaultPane")})),P()}}break;case 38:case 40:break;default:switch(v.charCode){case 99:if(v.ctrlKey){l.UserInput.copyToClipboard(l.clipboardAddress,k);break}break;case 118:case 112:if(v.ctrlKey){l.UserInput.pasteFromClipboard(l.clipboardAddress,k);break}break;default:N.getTarget(v).tagName}}x(N.getAbout(h,c[0]))},this.OutlinerMouseclickPanel=function(y){switch(l.UserInput._tabulatorMode){case 0:V(y);break;case 1:l.UserInput.Click(y);break;default:}};function G(y){let v=l.targetOf(y),x,P;for(let oe=v;oe&&oe!==n;oe=oe.parentNode)oe.matches?.('[data-outline-node="object"]')&&(x=oe),oe.matches?.(".outline-subject-block")&&(P=oe);let T=P||x||v.parentNode,C=N.getAbout(h,v),k=y.altKey?qe("internal"):void 0;y.shiftKey?fe(T,C,k):y.altKey?ie(T,C,{pane:qe("internal"),immediate:!0}):ie(T,C)}function R(y){let v=l.targetOf(y),x=y.altKey?qe("internal"):void 0,P=H(v);if(!P)return;let T=N.getAbout(h,P.provider);T&&ue(P.block,T,x)}function H(y){for(let v=y;v&&v!==n;v=v.parentNode){if(v.matches?.('[data-outline-node="object"]')){let x=v.querySelector?.(on);if(x)return{block:v,provider:x}}if(v.matches?.(on))return{block:v.closest?.('[data-outline-node="object"]')||v.closest?.(".outline-subject-block")||v,provider:v}}return null}function q(y){let x=l.targetOf(y).getAttribute("uri");y.altKey?m.fetch(Ge.uri.docpart(x),{force:!0}):m.refresh(h.sym(Ge.uri.docpart(x)))}function X(y){let x=l.targetOf(y).getAttribute("uri");y.altKey?m.fetch(Ge.uri.docpart(x),{force:!0}):m.refresh(h.sym(Ge.uri.docpart(x)))}function se(y){let x=l.targetOf(y).getAttribute("uri");m.fetch(Ge.uri.docpart(x))}function D(y){let v=l.targetOf(y),x=v.node;x.childNodes.length>1&&(x=v.parentNode),F(x)}function J(y){if(l.UserInput._tabulatorMode)return l.UserInput.Click(y);let v=l.targetOf(y),x;for(x=N.ancestor(v,"td")||N.ancestor(v,"tr")||N.ancestor(v,"div");x&&x.getAttribute("notSelectable")!=="false";x=N.ancestor(x.parentNode,"td")||N.ancestor(x.parentNode,"tr")||N.ancestor(x.parentNode,"div"));if(!x)return;let P=de(x);if(ce.debug("Was node selected before: "+P),y.altKey)ee(x,!de(x));else if(y.shiftKey)ee(x,!0);else{if(W(),l.UserInput.clearInputAndSave(y),ee(x,!0),y.detail===2){y.stopPropagation();return}let T;if(x.parentNode&&(T=x.parentNode.AJAR_statement),!T)return;let C=T.why,k=bn.updater.editable(C.uri,h);P&&k&&l.UserInput.Click(y,c[0])}ce.debug("Was node selected after: "+de(x)+", count="+c.length),y.stopPropagation()}function V(y){ce.info("@TabulatorMousedown, dom.location is now "+n.location);let v=l.targetOf(y);if(!v)return;let x=v.tagName;x==="INPUT"||x==="TEXTAREA"||(l.UserInput.clearMenu(),l.UserInput.lastModified&&l.UserInput.lastModified.parentNode.nextSibling&&l.UserInput.backOut(),(!v.src||v.src.slice(v.src.indexOf("/icons/")+1)!==Z.src.icon_show_choices&&v.src.slice(v.src.indexOf("/icons/")+1)!==Z.src.icon_add_triple)&&l.UserInput.clearInputAndSave(y),(!v.src||v.src.slice(v.src.indexOf("/icons/")+1)!==Z.src.icon_show_choices)&&l.UserInput.clearMenu(),y&&y.stopPropagation())}function le(y){n.title=N.label(y),n.location.href.startsWith(y.site().uri)}function ie(y,v,x){x=x||{};let P=x.pane,T=!!x.already,C=x.immediate;ce.info("@outlineExpand, dom is now "+n.location),m.removeCallback("done","expand"),m.removeCallback("fail","expand");let k=h.canon(v),oe=!1;function U(){if(oe){if(m.getState(k.doc().uri)!=="fetched")return!1;oe=!1,T=!1}if(k=h.canon(k),!y||!y.parentNode||!y.parentNode.parentNode)return!1;let K;ce.info("@@ REPAINTING "),T?K=E(k,y,P,x):K=E(k,void 0,P,x),T=!0,K!==y&&N.emptyNode(y).appendChild(K),l.focusTd=y,ce.debug("expand: Node for "+k+" expanded");let re=h.each(k,o.rdfs("seeAlso"));for(let pe=0;pe<re.length;pe++)pe===25&&ce.warn("expand: Warning: many ("+re.length+") seeAlso links for "+k),m.lookUpThing(re[pe],k)}function L(K){if(arguments[3])return!0;let re=h.canon(k);ce.info("@@ expand: relevant subject="+re+", uri="+K+", already="+T);let pe=h.sym(Ge.uri.docpart(K));if(K.indexOf("#")>=0)throw new Error("Internal error: hash in "+K);return function(){if(!re.uri)return!0;let me=h.uris(re);if(!me)return!1;for(let we=0;we<me.length;we++)for(let xe=Ge.uri.docpart(me[we]);xe;xe=h.HTTPRedirects[xe])if(K===xe)return!0;return!!h.anyStatementMatching(re,void 0,void 0,pe)}()?(ce.success("@@ expand OK: relevant subject="+re+", uri="+K+", source="+T),U(),!1):!0}if(x.solo&&le(k),P?.global){U();return}ce.debug("outlineExpand: dereferencing "+k);let ne=n.createElement("span");if(y.appendChild(ne),m.addCallback("done",L),m.addCallback("fail",L),k.uri&&k.uri.split(":")[0]==="rdf"){U();return}if(k.uri&&!C&&!te.isAudio(k)&&!te.isVideo(k)){let K=k.doc()&&k.doc().uri?k.doc().uri:""+k.doc(),re=function(_e){let Ce=!!(k&&k.uri&&k.site&&k.site().uri===k.uri);return _e===403?Ce?"This root resource is not accessible with your current permissions. Try logging in with an authorized account or opening a public profile document.":"This resource is not accessible with your current permissions.":Ce?"This root resource is not publicly readable. Try logging in or opening a profile document.":"This resource is not publicly readable. Try logging in or opening a different public resource."},pe=function(_e,Ce){let De=typeof _e=="string"?_e:String(_e||""),Be=Ce?.status||Ce?.response?.status;return Be===401||Be===403?Be:De.includes("status: 403")||De.includes("status 403")?403:De.includes("status: 401")||De.includes("status 401")?401:null},be=function(){let _e=!!(k&&k.uri&&k.site&&k.site().uri===k.uri),Ce=!!et.authn.currentUser();return _e?Ce?"You are logged in, but this root resource is not publicly readable. Select a storage location from the account menu to continue.":"This root resource is not publicly readable. Try logging in or opening a profile document.":Ce?"You are logged in, but your account does not have permission to view this resource.":"This resource is not publicly readable. Log in to view it."},me=function(){oe=!0;let _e=n.createElement("solid-ui-error-state");_e.setAttribute("title","Access denied"),_e.setAttribute("message",be()),K&&_e.setAttribute("data-outline-error-for",K),il(_e),N.emptyNode(y).appendChild(_e),m.addCallback("done",function(De){return!oe||!y.isConnected?!1:De!==K?!0:(U(),!1)}),m.getState(K)==="fetched"&&U()},we=function(_e,Ce){if(y.querySelector&&K&&y.querySelector('[data-outline-error-for="'+K+'"]'))return;let De=pe(_e,Ce);if(De&&x.solo){if(!xe&&et.authn.currentUser()){xe=!0,ke(!0);return}me();return}let Be=De?re(De):_e,nn=te.errorMessageBlock(n,Be,"#fee",Ce instanceof Error?Ce:void 0);K&&nn.setAttribute("data-outline-error-for",K),y.appendChild(nn)},xe=!1,ke=function(_e){let Ce=!1,De=m.nowOrWhenFetched(k.doc(),_e?{force:!0}:{},function(Be,nn){Be?(m.lookUpThing(k),U(),x.solo&&le(k)):(Ce=!0,we(nn,void 0))});De&&typeof De.catch=="function"&&De.catch(function(Be){Ce||(Ce=!0,we(Be,Be))})},Ie=m.requested[K];ke(!!x.solo&&(Ie===401||Ie===403))}else U()}function ue(y,v){let x=y.AJAR_statement||y.parentNode&&y.parentNode.AJAR_statement;ce.debug("Collapsing subject "+v);let P;x&&(ce.debug("looking up pred "+x.predicate.uri+"in defaults"),P=ye.defaults[x.predicate.uri]),ce.debug("view= "+P);let T;y.parentNode&&y.parentNode.id==="outline"&&(T=y),l.replaceTD(l.outlineObjectDiv(v,P,T,x),y)}this.replaceTD=function(v,x){let P;de(x)&&(P=!0);for(let T=c.length-1;T>-1;T--)for(let C=c[T];C.parentNode;C=C.parentNode)C===x&&ee(c[T],!1);x.parentNode.replaceChild(v,x),P&&ee(v,!0)};function fe(y,v){N.emptyNode(y).appendChild(E(v)),le(v),y.setAttribute("about",v.toNT())}a.outlineRefocus=fe,this.GotoFormURI_enterKey=function(y){y.keyCode===13&&a.GotoFormURI(y)},this.GotoFormURI=function(y){ve(n.getElementById("UserURI").value)};function ve(y){let v=h.sym(y);this.GotoSubject(v,!0)}let Te=0;function Le(y,v,x){let P=++Te,T=v.uri,C=x.uri.split("#")[0];if(!T.endsWith("/")||!C.startsWith(T)||C===T)return;let k=[],oe=C.slice(T.length).split("/"),U=T;oe.forEach((K,re)=>{K&&(U+=re<oe.length-1?K+"/":K,k.push(U))});let L=K=>Array.from(y.querySelectorAll("td.obj[about]")).find(re=>re.getAttribute("about")===h.sym(K).toNT()),ne=K=>new Promise(re=>{let pe=L(K);if(pe)return re(pe);let be=setTimeout(()=>{me.disconnect(),re(null)},1e4),me=new MutationObserver(()=>{let we=L(K);!we&&P===Te||(clearTimeout(be),me.disconnect(),re(we))});me.observe(y,{childList:!0,subtree:!0})});(async()=>{for(let K of k){let re=await ne(K);if(!re||P!==Te)return;(!re.firstChild||re.firstChild.nodeName!=="TABLE")&&ie(re,h.sym(K)),K===k[k.length-1]&&typeof re.scrollIntoView=="function"&&re.scrollIntoView({block:"nearest"})}})().catch(K=>ce.warn("outline: could not open "+x.uri+" inside "+T+": "+K))}this.GotoURIinit=function(y){let v=h.sym(y);this.GotoSubject(v)},this.GotoSubject=function(y,v,x,P,T,C,k){let oe=fa(k)!=="accountMenu",U=f();oe&&(!C||C===U)&&b(y);let L=C||U;P&&(L.style.width="100%",N.emptyNode(L));let ne=x&&x.subject&&x.subject.uri?x.subject:y;function K(){let pe=n.createElement("div");pe.classList.add("outline-subject-block");let be=l.outlineObjectDiv(ne,void 0,pe);return pe.appendChild(be),L.appendChild(pe),pe}let re=P?K():L;if(P&&le(ne),v?ie(re,ne,{pane:x,solo:P,folderView:ma(k),headerOnlyInViewerPod:!oe||!!(x&&x.subject&&x.subject.uri)}):P||K(),P&&n&&n.defaultView&&n.defaultView.history){let pe=k&&typeof k=="object"&&k.preserveUrl===!0,be=n.defaultView.history.state||{},me=document.location.href!==y.uri,we=Xi(be,{pane:x?{name:x.name,subject:x.subject&&typeof x.subject.uri=="string"?x.subject.uri:void 0}:void 0,leavingPage:me,viaAccountMenu:!oe});try{let xe=new URL(n.location.href),ke=new URL(y.uri,n.location.href);pe?Yn(n.defaultView.history,"replaceState",we,""):xe.origin===ke.origin&&(me?Yn(n.defaultView.history,"pushState",we,y.uri,y.uri):JSON.stringify(be)!==JSON.stringify(we)&&Yn(n.defaultView.history,"replaceState",we,y.uri,y.uri))}catch(xe){ce.error("Failed to update navigation history: "+N.stackString(xe))}}return P&&pa(n),y};let ye=Vi(n);function Pe(y){let v;if(y.termType==="Literal"){if(v=n.createElement("span"),v.classList.add("objectValue","objectValue--literal"),v.textContent=y.value,y.datatype&&y.datatype.uri){let x=o.xsd("").uri;y.datatype.uri.slice(0,x.length)===x&&v.classList.add("objectValue--"+y.datatype.uri.slice(x.length))}}else if(y.termType==="NamedNode"||y.termType==="BlankNode")if(v=n.createElement("span"),v.classList.add("objectValue","objectValue--resource"),v.setAttribute("about",y.toNT()),l.appendAccessIcons(h,v,y),y.termType==="NamedNode")if(y.uri.slice(0,4)==="tel:"){let x=y.uri.slice(4),P=n.createElement("a");v.appendChild(n.createTextNode(x)),P.setAttribute("href",y.uri),P.appendChild(N.AJARImage(Z.src.icon_telephone,"phone","phone "+x,n)),v.appendChild(P),P.firstChild.setAttribute("class","phoneIcon"),P.firstChild.classList.add("objectValueLinkIcon")}else{v.appendChild(n.createTextNode(N.label(y)));let x=te.linkIcon(n,y);x.firstChild&&x.firstChild.classList.add("objectValueLinkIcon"),v.appendChild(x),te.makeDraggable(v,y)}else v.appendChild(n.createTextNode(N.label(y)));else if(y.termType==="Collection"){v=n.createElement("div"),v.setAttribute("about",y.toNT());for(let x=0;x<y.elements.length;x++){let P=y.elements[x],T=v.appendChild(n.createElement("div")),C=T.appendChild(n.createElement("div"));C.classList.add("obj"),C.setAttribute("notSelectable","false"),C.setAttribute("about",y.toNT()),C.innerHTML=x+1+")",T.appendChild(l.outlineObjectDiv(P))}}else y.termType==="Graph"?(v=qe("dataContentPane").statementsAsTables(y.statements,e),v.setAttribute("class","nestedFormula")):(ce.error("Object "+y+" has unknown term type: "+y.termType),v=n.createTextNode("[unknownTermType:"+y.termType+"]"));return ce.debug("contents: "+v.innerHTML),v}return this.createTabURI=function(){n.getElementById("UserURI").value=n.URL+"?uri="+n.getElementById("UserURI").value},this.UserInput.setSelected=ee,this.UserInput.deselectAll=W,this.UserInput.views=ye,this.outlineExpand=ie,this}import"rdflib";import{render as al}from"lit-html";function Er(e,n){let t=0,r=()=>{t===0&&(t=window.requestAnimationFrame(()=>{t=0,e()}))};if(e(),typeof ResizeObserver>"u")return window.addEventListener("resize",r),()=>{t!==0&&window.cancelAnimationFrame(t),window.removeEventListener("resize",r)};let i=new ResizeObserver(r);for(let a of n)a&&i.observe(a);return()=>{t!==0&&window.cancelAnimationFrame(t),i.disconnect()}}var ol=()=>Promise.all([import("./part-LCONWAPH.js"),import("./part-7BR4IKE5.js")]),sl=768,ya='[data-profile-section="heading"]',va='[data-profile-section="social"]';async function ll(e,n){let t=e.each(n,o.rdfs("seeAlso"),null,n.doc());t.length>0&&await e.fetcher.load(t)}function Ca(e,n){return e.environment?.layout==="mobile"?"mobile":typeof window>"u"?"desktop":(n?.getBoundingClientRect().width||window.innerWidth)<=sl?"mobile":"desktop"}function dl(e,n,t){let r=()=>{let a=Ca(n,e);a!==e.dataset.layout&&t(a)},i=e.querySelector(".profile-grid");return Er(r,[e,i])}function cl(e){let n=()=>{let i=e.querySelector(".profile-grid"),a=e.querySelector(ya),l=e.querySelector(va);if(!i||!a||!l)return;if(!(e.dataset.layout!=="mobile"&&getComputedStyle(i).display==="grid")){l.style.removeProperty("min-height");return}let h=`${Math.ceil(a.getBoundingClientRect().height)}px`;l.style.minHeight!==h&&(l.style.minHeight=h)},t=e.querySelector(ya),r=e.querySelector(va);return Er(n,[e,t,r])}function xa(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("profile-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var ul={global:!1,icon:B.iconBase+"noun_15059.svg",name:"profile",label:function(e,n){let t=n.session.store.findTypeURIs(e);return t[o.vcard("Individual").uri]||t[o.foaf("Person").uri]||t[o.schema("Person").uri]?"Profile":null},render:(e,n)=>{let t=n.dom.createElement("div"),r=n.session.store,i=null,a=null,l=Ca(n,t);xa(t,n),t.dataset.layout=l;let c=async()=>{let[{ProfileView:h},{hydrateQRCodes:m}]=await ol();xa(t,n),t.dataset.layout=l,al(await h(e,n,l,c),t),i?.(),i=cl(t),a?.(),a=dl(t,n,d=>{l=d,c()}),await m(t)};return ll(r,e).then(async()=>{await c()}),t}},Tr=ul;import"rdflib";import{store as Ur}from"solid-logic";import{sym as Ia}from"rdflib";import{store as sn}from"solid-logic";import{BlankNode as pl,st as Ar,sym as ml}from"rdflib";function Pr(e,n,t,r){return t.statementsMatching(null,r.acl("origin"),e).reduce((l,c)=>l.concat(t.statementsMatching(n,r.acl("trustedApp"),c.subject)).concat(t.statementsMatching(c.subject)),[])}function _a(e,n,t,r,i){let a=new pl(`bn_${n}`);return[Ar(r,i.acl("trustedApp"),a,r.doc()),Ar(a,i.acl("origin"),e,r.doc()),...t.map(l=>ml(l)).map(l=>Ar(a,i.acl("mode"),l,r.doc()))]}function ka(){return Math.random().toString(36).substr(2,5)}function Sr(e){let n=nt("table",{class:"results"}),t=tn("tr",[Ye("th","Application URL"),Ye("th","Access modes"),Ye("th","Actions")]);return n.appendChild(t),sn.each(e,o.acl("trustedApp"),void 0,void 0).flatMap(i=>sn.each(i,o.acl("origin"),void 0,void 0).map(a=>({appModes:sn.each(i,o.acl("mode"),void 0,void 0),origin:a}))).sort((i,a)=>i.origin.value<a.origin.value?-1:1).forEach(({appModes:i,origin:a})=>n.appendChild(Ea(e,a,i,r))),n.appendChild(Ea(e,null,[o.acl("Read")],r)),n;function r(){n.parentElement.replaceChild(Sr(e),n)}}function Ea(e,n,t,r){let i={origin:n,appModes:t,formElements:{modes:[],origin:void 0}};return tn("tr",[tn("td",[tn("form",[nt("input",{class:"textinput",placeholder:"Write new URL here",value:n?n.value:""},{},h=>{i.formElements.origin=h})],{},{submit:a})]),tn("td",[tn("form",fl(i),{},{submit:a})]),tn("td",[tn("form",n?[Ye("button","Update",{class:"controlButton",style:"background: LightGreen;"}),Ye("button","Delete",{class:"controlButton",style:"background: LightCoral;"},{click:l})]:[Ye("button","Add",{class:"controlButton",style:"background: LightGreen;"})],{},{submit:a})])]);function a(h){h.preventDefault();let m;try{m=Ia(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to trust")}let d=i.formElements.modes.filter(p=>p.checked).map(p=>p.value),s=Pr(i.origin||m,e,sn,o),u=_a(m,ka(),d,e,o);if(!sn.updater)throw new Error("Store has no updater");sn.updater.update(s,u,c)}function l(h){h.preventDefault();let m;try{m=Ia(i.formElements.origin.value)}catch{return alert("Please provide an application URL you want to remove trust from")}let d=Pr(m,e,sn,o);if(!sn.updater)throw new Error("Store has no updater");sn.updater.update(d,[],c)}function c(h,m,d){if(m)return r()}}function nt(e,n={},t={},r=null){let i=document.createElement(e);return r&&r(i),Object.keys(n).forEach(a=>{i.setAttribute(a,n[a])}),Object.keys(t).forEach(a=>{i.addEventListener(a,t[a])}),i}function tn(e,n,t={},r={},i=null){let a=nt(e,t,r,i);return n.forEach(l=>a.appendChild(l)),a}function Ye(e,n,t={},r={},i=null){let a=nt(e,t,r,i);return a.textContent=n,a}function fl({appModes:e,formElements:n}){return["Read","Write","Append","Control"].map(t=>{let r=e.some(i=>i.value===o.acl(t).value);return tn("label",[nt("input",{type:"checkbox",...r?{checked:""}:{},value:o.acl(t).uri},{},i=>n.modes.push(i)),Ye("span",t)])})}var hl="#418d99",gl={global:!0,icon:`${B.iconBase}noun_15177.svg`,name:"trustedApplications",label:()=>null,render:(e,n)=>{let t=n.dom,r=t.createElement("div");r.classList.add("trusted-applications-pane"),r.setAttribute("style","border: 0.3em solid "+hl+"; border-radius: 0.5em; padding: 0.7em; margin-top:0.7em;");let i=r.appendChild(t.createElement("table")),a=i.appendChild(t.createElement("tr")),c=i.appendChild(t.createElement("tr")).appendChild(t.createElement("div"));return c.setAttribute("style","padding: 0.7em;"),bl(t,a,c).catch(h=>c.appendChild(te.errorMessageBlock(t,h))),r}};async function bl(e,n,t){let i=(await Fe.ensureLoadedProfile({dom:e,div:n,statusArea:t,me:null})).me,a=i.doc();if(!Ur.updater)throw new Error("Store has no updater");let l=Ur.updater.editable(a.uri,Ur);if(n.appendChild(Ye("h3","Manage your trusted applications")),!l){n.appendChild(te.errorMessageBlock(e,`Your profile ${i.doc().uri} is not editable, so we cannot do much here.`));return}n.appendChild(Ye("p","Here you can manage the applications you trust."));let c=Sr(i);n.appendChild(c),n.appendChild(Ye("h4","Notes")),n.appendChild(tn("ol",[n.appendChild(Ye("li","Trusted applications will get access to all resources that you have access to.")),n.appendChild(Ye("li","You can limit which modes they have by default.")),n.appendChild(Ye("li","They will not gain more access than you have."))])),n.appendChild(Ye("p","Application URLs must be valid URL. Examples are http://localhost:3000, https://trusted.app, and https://sub.trusted.app."))}var Ta=gl;import{authn as vl,authSession as Pa,store as Nr}from"solid-logic";import"rdflib";import"rdflib";async function Aa(e,n,t){let r=await mn(e),i=Ki(n,r),a=document.createElement("div");return a.classList.add("container"),a.appendChild(yl(r.uri,i)),a.appendChild(wl(i)),a}function wl(e){let n=document.createElement("section"),t=document.createElement("h2");t.innerText="Data",n.appendChild(t);let r=document.createElement("div");r.classList.add("list-group"),n.appendChild(r);let i=document.createElement("a");return i.classList.add("list-group-item"),i.href=window.document.location.href+"public/",i.innerText=`View ${e}'s files`,r.appendChild(i),n}function yl(e,n){let t=document.createElement("a");t.href=e,t.innerText=n;let r=document.createElement("span");r.innerText="'s Profile";let i=document.createElement("h1");return i.appendChild(t),i.appendChild(r),i}var qp={icon:B.iconBase+"noun_547570.svg",name:"dashboard",label:e=>e.termType==="NamedNode"&&e.uri===e.site().uri?"Dashboard":null,render:(e,n)=>{console.log("Dashboard Pane Render");let r=n.dom.createElement("div"),i=()=>{r.innerHTML="",xl(r,vl.currentUser()||null,n,e)};return Pa.events.on("login",()=>{i()}),Pa.events.on("sessionRestore",()=>{i()}),i(),r}};function xl(e,n,t,r){let i=new URL(window.location.href).searchParams.get("uri");if(i&&n)return Sa(e,t);if(!i&&r)return Ua(e,r);if(!i&&!r&&n)return Sa(e,t);let a=r||n||Nr.sym(window.location.href);return Ua(e,a)}function Sa(e,n){n.getOutliner(n.dom).getDashboard().then(r=>e.appendChild(r))}function Ua(e,n){let t=document.createElement("div");e.appendChild(t);let r=t.attachShadow({mode:"open"}),i=document.createElement("link");i.rel="stylesheet",i.href="/common/css/bootstrap.min.css",r.appendChild(i),Aa(n,Nr,Nr.fetcher).then(a=>r.appendChild(a))}import{parse as Cl}from"rdflib";var _l=await(await fetch(he(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
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
`,"text/turtle"))).text(),kl=await(await fetch(he(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
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
`,"text/turtle"))).text(),Il={icon:B.iconBase+"noun_Sliders_341315_000000.svg",name:"basicPreferences",label:e=>null,render:(e,n)=>{let t=n.dom,r=n.session.store;function i(s,u){s||a.appendChild(te.errorMessageBlock(t,u,"#fee"))}let a=t.createElement("div"),l=El(a,t);function c(s,u){s=s.doc(),r.holds(void 0,void 0,void 0,s)||Cl(u,r,s.uri,"text/turtle",null)}let h=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597#this");c(h,kl);let m=r.sym("urn:uuid:93774ba1-d3b6-41f2-85b6-4ae27ffd2597-ONT");c(m,_l);async function d(){let s=await Fe.ensureLoadedPreferences({dom:t,div:a});if(!s.preferencesFile){console.log("Not doing private class preferences as no access to preferences file. "+s.preferencesFileError);return}let u=te.appendForm(t,l,{},s.me,h,s.preferencesFile,i);u.style.borderStyle="none";let p=n.session.paneRegistry.byName("trustedApplications");p&&a.appendChild(p.render(null,n)),Tl(a,r,s.me,t)}return d(),a}};function El(e,n){let t=La(e,n,"User types"),r=t.appendChild(n.createElement("p"));r.innerText="Here you can self-assign user types to help the data browser know which views you would like to access.";let i=t.appendChild(n.createElement("a"));return i.href="https://github.com/solidos/userguide/#role",i.innerText="Read more",t.appendChild(n.createElement("div"))}var Na=Il;function Tl(e,n,t,r){let i=La(e,r,"Delete account"),l=n.each(t,o.space("storage"),null,t.doc()).map(h=>h.value),c=i.appendChild(r.createElement("ul"));l.forEach(async h=>{let m=await Al(h,r);m&&c.appendChild(r.createElement("li")).appendChild(m)})}async function Al(e,n){let t=n.createElement("a");t.textContent=`Delete your account at ${e}`;let r=await Pl(e);return typeof r!="string"?null:(t.href=r,t)}async function Pl(e){let n=new URL(e),t=new URL(e);t.pathname=n.pathname="/account/delete";let r=t.hostname.split(".");return t.hostname=r.slice(1).join("."),(await fetch(t.href,{method:"HEAD"})).ok?t.href:(await fetch(n.href,{method:"HEAD"})).ok?n.href:null}function La(e,n,t){let r=e.appendChild(n.createElement("div"));r.style.border="0.3em solid #418d99",r.style.borderRadius="0.5em",r.style.padding="0.7em",r.style.marginTop="0.7em";let i=r.appendChild(n.createElement("h3"));return i.innerText=t,r}var Fa=new Set;function $e(e){let n=String(e);if(Fa.has(n)||typeof document>"u")return;Fa.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}import{store as Hl,authn as Mr}from"solid-logic";import{store as Rn}from"solid-logic";import*as Ma from"rdflib";$e(he(`.trackerBoard {
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
`,"text/css"));function Ra(e,n,t,r){let i=e.createElement("div");i.classList.add("trackerBoard");let a=i.appendChild(e.createElement("table"));a.classList.add("trackerBoardTable");let l=a.appendChild(e.createElement("tr"));l.classList.add("trackerBoardHeader");let c=a.appendChild(e.createElement("tr"));c.classList.add("trackerBoardMainRow"),n.forEach(d=>{let s=l.appendChild(e.createElement("th"));s.classList.add("trackerBoardHeaderCell"),s.textContent=N.label(d,!0),s.subject=d;let u=c.appendChild(e.createElement("td"));u.classList.add("trackerBoardColumn"),u.subject=d;function p(g){g.forEach(function(f){let b=Rn.sym(f);r.columnDropHandler(b,d)})}r.columnDropHandler&&te.makeDropTarget(u,p)});function h(d,s){let u=e.createElement("div");u.classList.add("trackerBoardCard");let p=u.appendChild(e.createElement("table"));p.classList.add("trackerBoardCardTable");let f=Rn.each(d,o.rdf("type")).map(w=>Rn.any(w,o.ui("backgroundColor"))).filter(w=>w);p.appendChild(te.personTR(e,null,d)),p.subject=d;let b=f[0]||Rn.any(s,o.ui("backgroundColor"));return u.style.backgroundColor=b?b.value:"#fff",u}function m(d,s,u,p){let g=d.map(f=>[Rn.any(f,s)||u,f]);return g.sort(),p&&g.reverse(),g.map(f=>f[1])}return i.refresh=function(){let d=new Ma.Literal(new Date),s=t||r.renderItem||h;function u(p){let g=s(p);return te.makeDraggable(g,p),g.subject=p,g}for(let p=c.firstChild;p;p=p.nextSibling){let g=p.subject,f=Rn.each(null,o.rdf("type"),g),b=r.sortBy||o.dct("created");r.filter&&(f=f.filter(r.filter));let w=m(f,b,d,!0);N.syncTableToArrayReOrdered(p,w,u)}},i.refresh(),i}import{authn as Oa,store as Nl}from"solid-logic";import*as en from"rdflib";$e(he(`/* CSS for the accessible modal dialogs created by localUtils.js */

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
`,"text/css"));var Ve=null,Ut=null;function Sl(e){return Ve&&e.body.contains(Ve)||(Ve=null,Ve=e.createElement("div"),Ve.id="issue-modal",Ve.className="focus-trap hidden",Ve.setAttribute("role","presentation"),Ve.innerHTML=`
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc">
      <h2 id="modal-title"></h2>
      <div id="modal-desc"></div>
      <div id="modal-buttons"></div>
    </div>
  `,e.body.appendChild(Ve),Ve.addEventListener("keydown",n=>{if(n.key==="Escape"){n.stopPropagation();let t=Ve.querySelector("button[data-cancel]");t?t.click():Ba()}else if(n.key==="Tab"){let t=Array.from(Ve.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(i=>!i.hasAttribute("disabled"));if(t.length===0)return;let r=t.indexOf(e.activeElement);n.shiftKey?r===0&&(t[t.length-1].focus(),n.preventDefault()):r===t.length-1&&(t[0].focus(),n.preventDefault())}})),Ve}function Da(e,n){Array.from(n.body.children).filter(r=>r!==Ve).forEach(r=>{e?r.setAttribute("aria-hidden","true"):r.removeAttribute("aria-hidden")})}function Ul({title:e,message:n,buttons:t,dom:r}){let i=Sl(r);Ut=r.activeElement,Da(!0,r),i.classList.remove("hidden"),i.querySelector("#modal-title").textContent=e||"";let a=i.querySelector("#modal-desc");typeof n=="string"?a.textContent=n:(a.innerHTML="",a.appendChild(n));let l=i.querySelector("#modal-buttons");return l.innerHTML="",new Promise(c=>{t.forEach(m=>{let d=r.createElement("button");d.setAttribute("type","button"),d.textContent=m.label,m.primary&&d.classList.add("btn-primary"),m.cancel&&d.setAttribute("data-cancel","true"),d.addEventListener("click",()=>{Ba(),c(m.value)}),l.appendChild(d)});let h=l.querySelector("button");h&&h.focus()})}function Ba(){if(Ve){let e=Ve.ownerDocument;Ve.classList.add("hidden"),Da(!1,e),Ut&&Ut.focus&&Ut.focus()}}function Xe(e,n="Information",t){return Ul({title:n,message:e,buttons:[{label:"OK",value:!0,primary:!0}],dom:t})}$e(he(`.trackerNewIssueForm {
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
`,"text/css"));function Nt(e,n,t,r,i,a){let l=e.createElement("div");l.classList.add("trackerNewIssueForm");let c=n.any(t,o.wf("stateStore"));a=a||function(){};let h=function(){return""+new Date().getTime()},m=function(){w.setAttribute("class","pendingedit"),w.disabled=!0;let _=[],I=function(Y){let j=new en.Literal(new Date),ae=""+new Date().getTime(),de=j.value.slice(0,4),$=j.value.slice(5,7),M=j.value.slice(8,10);return Y.replace("{N}",ae).replace("{YYYY}",de).replace("{MM}",$).replace("{DD}",M)},S=n.anyValue(t,o.wf("issueURITemplate")),A=S?n.sym(I(en.uri.join(S,c.uri))):n.sym(c.uri+"#Iss"+h()),O=A.doc(),z=n.literal(w.value);_.push(new en.Statement(A,o.wf("tracker"),t,c)),_.push(new en.Statement(A,o.dc("title"),z,c)),_.push(new en.Statement(A,o.dct("created"),new Date,c));let F=r?n.each(r,o.rdf("type"),null,r.doc()):n.each(t,o.wf("initialState"));for(let Y of F)_.push(new en.Statement(A,o.rdf("type"),Y,c));r&&_.push(new en.Statement(r,o.wf("dependent"),A,c)),S&&(_.push(new en.Statement(A,o.wf("tracker"),t,O)),_.push(new en.Statement(A,o.rdfs("seeAlso"),c,O)));let E=function(Y,j,ae){j?(l.parentNode.removeChild(l),i(A)):(w.classList.remove("pendingedit"),w.disabled=!1,w.focus(),Xe(`Could not save the new issue. Please try again.

Details: ${ae||"No additional error details provided."}`,"Save issue failed",e))};n.updater.update([],_,E)},d=n.any(t,o.wf("issueClass")),s=N.label(d),u=function(){l.parentNode&&l.parentNode.removeChild(l),a()},p=l.appendChild(e.createElement("div"));p.classList.add("trackerNewIssueHeader");let g=p.appendChild(e.createElement("h2"));g.textContent="Add new "+(r?"sub ":"")+s;let f=p.appendChild(e.createElement("button"));f.classList.add("trackerNewIssueCloseButton"),f.setAttribute("type","button"),f.setAttribute("aria-label","Close new issue form"),f.textContent="\xD7",f.addEventListener("click",u,!1);let b=l.appendChild(e.createElement("p"));b.textContent="Title of new "+s+":";let w=e.createElement("input");return w.classList.add("trackerNewIssueTitleField"),w.setAttribute("type","text"),w.setAttribute("maxLength","2048"),w.select(),w.addEventListener("keyup",function(_){_.keyCode===13&&m()},!1),l.appendChild(w),w.focus(),l}import*as rt from"rdflib";function tt(...e){console.log(...e)}function Dn(...e){console.warn(...e)}function Ue(...e){console.error(...e)}$e(he(`/* section in mashlib css is display: block
so i have to override it here */
section.errorSection[hidden] {
  display: none;
}
`,"text/css"));function Lr(e,n,t){e.appendChild(te.errorMessageBlock(n,t,"pink"))}function Lt(e,n){let t=e.createElement("section");t.classList.add("errorSection"),t.setAttribute("role","status"),t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.setAttribute("aria-label","Error messages"),t.hidden=!0,n.appendChild(t);function r(){t.innerHTML="",t.hidden=!0}function i(a){t.innerHTML="",t.hidden=!1,Lr(t,e,a)}return{errorSection:t,clearErrors:r,showError:i}}$e(he(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
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


`,"text/css"));var Ee=Nl,Ll=!1,Fl=B.iconBase+"noun_17020_gray-tick.svg",bm=B.iconBase+"noun_17020_sans-tick.svg",Ml=B.iconBase+"noun_17020.svg";function Rl(e){return!!Ee.findTypeURIs(e)[o.wf("Open").uri]}function Dl(e){return Rl(e)?Fl:Ml}function za(e,n){let t=Ee.the(e,o.wf("tracker"),null,e.doc()),r=Ee.any(t,o.wf("issueClass"));n=n||r;let i=Ee.each(e,o.rdf("type")).filter(a=>Ee.holds(a,o.rdfs("subClassOf"),n));if(i.length!==1)throw new Error("Issue must have one type as state: "+i.length);return i[0]}function Ft(e){let t=Ee.each(e,o.rdf("type")).map(r=>Ee.any(r,o.ui("backgroundColor"))).filter(r=>!!r);return t.length?t[0].value:null}function qa(e,n){function t(){let s=Ft(e)||"white";a.style.backgroundColor=s,d.style.backgroundColor=s}let r=n.dom,i=!Ft(e),a=r.createElement("div");a.classList.add("trackerBoardIssueCard");let l=a.appendChild(r.createElement("table"));l.classList.add("trackerBoardIssueCardTable");let c={draggable:!1};l.appendChild(te.personTR(r,null,e,c)),l.subject=e,a.firstChild.firstChild.firstChild.firstChild.setAttribute("src",B.iconBase+"noun_Danger_1259514.svg");let m=a.firstChild.firstChild.children[2];m.classList.add("trackerBoardIssueCardButtons");let d=te.button(r,B.iconBase+"noun_253504.svg","edit",async s=>{Mt(e,n)});if(m.appendChild(d),i){let s=te.deleteButtonWithCheck(r,m,"issue",async function(){try{await Ee.updater.update(Ee.connectedStatements(e))}catch(u){Ue("Unable to delete issue: "+u),Xe(`Unable to delete issue.

Details: ${u?.message||String(u)}`,"Delete failed",r);return}a.parentNode.removeChild(a),te.refreshTree(n.paneDiv)});m.appendChild(s)}return a.refresh=t,t(),a}function Mt(e,n){function t(){r.innerHTML="",r.classList.remove("trackerOverlayVisible")}let r=n.overlay;r.classList.add("trackerOverlay"),r.innerHTML="";try{let i=Fr(e,n);r.appendChild(i);let a=i.appendChild(te.button(n.dom,B.iconBase+"noun_1180156.svg","close",t));a.classList.add("trackerOverlayCloseButton"),delete a.style.backgroundColor,r.classList.add("trackerOverlayVisible")}catch(i){Ue("Failed to render issue: "+i),Xe(`Failed to render issue.

Details: ${i?.message||String(i)}`,"Render failed",n.dom)}}function Bl(e,n){let t=e.createElement("div");return t.classList.add("trackerIssueSpacer"),t.style.backgroundColor=n,t}function Fr(e,n){let t=n.dom;function r(R,H,q){if(Ll){if(!l(h,"trackLastModified"))return;let X=H.statementsMatching(e,o.dct("modified")).concat(H.statementsMatching(e,o.wf("modifiedBy"))),se=[rt.st(e,o.dct("modified"),new Date,q)];f&&se.push(rt.st(e,o.wf("modifiedBy"),f,q)),H.updater.update(X,se,function(D,J,V){})}}function i(){return""+new Date().getTime()}function a(R,H){R||Ue(`Failed to save change:
`+H)}function l(R,H){let q=Ee.any(R,o.ui(H));return!!(q&&q.value)}function c(){let R=Ft(e)||"#eee";s.style.borderColor=R}let h=Ee.the(e,o.wf("tracker"),null,e.doc());if(!h)throw new Error("No tracker");let m=Ee.any(h,o.wf("stateStore")),d=e.doc(),s=t.createElement("div");s.classList.add("trackerIssue");let u=t.createElement("div");u.classList.add("trackerIssueMessageSection");let{showError:p,clearErrors:g}=Lt(t,u),f=Oa.currentUser(),b=Ft(e)||"white";c(),Oa.checkUser();let w=s.appendChild(te.button(t,Dl(e)));w.classList.add("trackerIssueIconButton"),te.makeDraggable(w,e);let _=Ee.any(h,o.wf("issueClass"));if(!_)return Ue("Tracker "+N.label(h)+" has no issueClass"),p("Tracker "+N.label(h)+" has no issueClass. Please open Settings and make sure there is a state class with allowed values (for example Open, In Progress, Closed), then save and refresh."),s.appendChild(u),s;let I=te.makeSelectForCategory(t,Ee,e,_,m,function(R,H){R?(g(),r(d,Ee,d),te.refreshTree(s)):(Dn(`Failed to change state:
`+H),p(`Failed to change state.

Details: ${H||"No additional error details provided."}`))});s.appendChild(I);let S=Ee.each(h,o.wf("issueCategory"));for(let R of S)s.appendChild(te.makeSelectForCategory(t,Ee,e,R,m,function(H,q){H?(g(),r(d,Ee,d),te.refreshTree(s)):(Dn(`Failed to change category:
`+q),p(`Failed to change category.

Details: ${q||"No additional error details provided."}`))}));let A=t.createElement("a");A.classList.add("trackerIssueTrackerLink"),A.setAttribute("href",h.uri),s.appendChild(A).textContent=N.label(h),A.addEventListener("click",te.openHrefInOutlineMode,!0);let O=`
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
`,z=o.wf("coreIsueForm");rt.parse(O,Ee,z.doc().uri,"text/turtle");let F=te.appendForm(t,null,{},e,z,m,a);F.classList.add("trackerIssueForm"),s.appendChild(F),F.style.backgroundColor=b;let E=Ee.statementsMatching(e,o.wf("assignee"));if(E.length>1){Xe("Weird, was assigned to more than one person. Fixing ..","Assignment Error",t);let R=E.slice(1);Ee.updater.update(R,[],function(H,q,X){q?(g(),Xe("Now fixed.","Assignment Fixed",t)):(Ue(`Failed to fix multiple assignees:
${X}`),p(`Failed to fix multiple assignees.

Details: ${X||"No additional error details provided."}`))})}async function Y(){let R=Ee.each(e,o.wf("assigneeGroup"));await Ee.fetcher.load(R);let H=R.map(se=>Ee.each(se,o.vcard("member"),null,se.doc())).flat(),q=Ee.any(null,o.doap("bug-database"),h);q&&await Ee.fetcher.load(q);let X=q?Ee.each(q,o.doap("developer")):[];return H.concat(X)}function j(R){let H={link:!1};return te.personTR(t,o.wf("dependent"),R,H)}Y().then(R=>{if(R.length){R.forEach(function(q){Ee.fetcher.lookUpThing(q)});let H={nullLabel:"(unassigned)"};s.appendChild(te.makeSelectForOptions(t,Ee,e,o.wf("assignee"),R,H,d,function(q,X){q?(g(),r(d,Ee,d)):(Ue(`Failed to change assignee:
`+X),p(`Failed to change assignee.

Details: ${X||"No additional error details provided."}`))}))}});function ae(R,H){H=H||[];let q=Ee.any(null,o.wf("dependent"),R,R.doc());return q?ae(q,[q].concat(H)):H}if(l(h,"allowSubIssues")){let R=s.appendChild(t.createElement("div"));R.classList.add("trackerIssueSubIssuePanel"),R.appendChild(t.createElement("h4")).textContent="Super Issues";let H=R.appendChild(t.createElement("div"));H.classList.add("trackerIssueSubIssuePanelSupersList"),H.refresh=function(){let D=ae(e);N.syncTableToArrayReOrdered(H,D,j)},H.refresh(),R.appendChild(t.createElement("h4")).textContent="Sub Issues";let q=R.appendChild(t.createElement("div"));q.classList.add("trackerIssueSubIssuePanelSubsList"),q.refresh=function(){let D=Ee.each(e,o.wf("dependent"),null,e.doc());N.syncTableToArrayReOrdered(q,D,j)},q.refresh();let X=t.createElement("button");X.classList.add("trackerIssueSubIssuePanelNewSubButton"),X.setAttribute("type","button"),R.appendChild(X);let se=N.label(_);X.innerHTML="New sub "+se,X.addEventListener("click",function(D){R.insertBefore(Nt(t,Ee,h,e,q.refresh),X.nextSibling)},!1)}s.appendChild(t.createElement("br"));let de=Ee.any(h,o.wf("extrasEntryForm"));de&&te.appendForm(t,s,{},e,de,m,a);let $=Ee.anyValue(h,o.wf("issueURITemplate")),M;$?M=e.doc():(M=Ee.any(h,o.wf("messageStore")),M||(M=Ee.any(h,o.wf("stateStore"))),Ee.sym(M.uri+"#Chat"+i())),Ee.fetcher.nowOrWhenFetched(M,function(R,H,q){if(R){u.appendChild(Bl(t,b));let X=wt(t,Ee,e,M);X.classList.add("trackerIssueMessageArea"),u.appendChild(X)}else{let X=t.createElement("p");X.classList.add("trackerIssueMessageAreaError"),X.textContent=H,u.appendChild(X)}});let Q=s.appendChild(t.createElement("div"));Q.classList.add("trackerIssueAttachmentHint"),Q.innerHTML=`<h4>Attachments</h4>
    <p>Drag files, emails,
    web pages onto the paper clip, or click the file upload button.</p>`;let ee=e.uri.endsWith("/index.ttl#this")?e.uri.slice(0,14)+"Files/":e.dir().uri+"Files/"+e.uri.split("#")[1]+"/";te.attachmentList(t,e,s,{doc:m,promptIcon:B.iconBase+"noun_25830.svg",uploadFolder:Ee.sym(ee),predicate:o.wf("attachment")}),te.deleteButtonWithCheck(t,s,"issue",async function(){try{await Ee.updater.update(Ee.connectedStatements(e))}catch(R){Ue("Unable to delete issue: "+R),p(`Unable to delete issue.

Details: ${R?.message||String(R)}`);return}Xe("Your issue has been deleted","Issue Deleted",t),s.classList.add("trackerIssueDeleted")}).classList.add("trackerIssueDeleteButton");let G=t.createElement("button");return G.classList.add("trackerIssueRefreshButton"),G.textContent="refresh messages",G.addEventListener("click",async function(R){try{await Ee.fetcher.load(M,{force:!0,clearPreviousData:!0})}catch(H){alert(H);return}te.refreshTree(s)},!1),s.appendChild(G),s.appendChild(u),s}import{store as Ol}from"solid-logic";$e(he(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));var zl=o,$a=Ol.updater;function Va(e,n){function t(){return""+new Date().getTime()}let r=Fe.newAppInstance(n.dom,{noun:"tracker"},function(i,a){function l(w){if(w.elements!==void 0)return w.elements.map(l);if(w.uri===void 0)return w;let _=w.uri;return _===d.uri?s:(_.slice(0,p.length)===p&&(_=a+_.slice(p.length)),m.sym(_))}let c="issuetracker.w3.org",h=o.space,m=n.session.store;if(!a&&(a=m.any(i,h("uriPrefix")).value,a.slice(-1)!=="/"&&(Ue(`${c}: No / at end of uriPrefix ${a}`),a=a+"/"),a+=c+"/"+t()+"/",!confirm("Make new tracker at "+a+"?")))return;let d=m.any(e,zl.wf("stateStore")),s=m.sym(a+"store.ttl"),u=e.doc(),p=u.uri.slice(0,u.uri.lastIndexOf("/")+1),g=l(u),f=l(e),b=m.statementsMatching(void 0,void 0,void 0,u);for(let w=0;w<b.length;w++){let _=b[w];m.add(l(_.subject),l(_.predicate),l(_.object),g)}m.add(f,o.space("inspiration"),e,d),m.add(f,o.space("inspiration"),e,g),$a.put(g,m.statementsMatching(void 0,void 0,void 0,g),"text/turtle",function(w,_,I){_?$a.put(s,[],"text/turtle",function(S,A,O){A?tt(`Ok The tracker created OK at: ${f.uri}
Make a note of it, bookmark it.`):(Ue(`Failed to set up new store at: ${s.uri} : ${O}`),Xe(`Failed to set up new store at: ${s.uri}

Details: ${O||"No additional error details provided."}`,"Create tracker failed",n.dom))}):(Ue(`Failed to save new tracker at: ${g.uri} : ${I}`),Xe(`Failed to save new tracker at: ${g.uri}

Details: ${I||"No additional error details provided."}`,"Save tracker failed",n.dom))})});return r.classList.add("trackerNewTrackerButton"),r}import{store as ql}from"solid-logic";function $l(e){let n=e.replaceAll(`
`," ");if(!n.includes(","))return n;let t='"'+n.replaceAll('"','""')+'"',r=t.slice(1,-1).replaceAll('""',"");if(r.includes('"'))throw Ue(`quoteString failed to quote properly, value: ${e}, quoted: ${t}, check: ${r}`),new Error("CSV inconsistency");return t}function Vl(e,n){function t(g,f){let b;if(f.predicate)return b=e.any(g,f.predicate),b?b.value:"--";if(f.category){let w=e.each(g,o.rdf("type"));for(let _ of w)e.holds(_,o.rdfs("subClassOf"),f.category)&&(b=_);if(!b)return"?"+N.label(f.category)}else throw Ue("column has no predicate or category",f),new Error("Column has no predicate or category.");return N.label(b)}function r(g){return l.map(f=>t(g,f)).map($l).join(",")+`
`}let i=e.any(n,o.wf("stateStore")),a=e.each(null,o.wf("tracker"),n,i),l=[{label:"Name",predicate:o.dc("title")}],h={label:"State",category:e.any(n,o.wf("issueClass"))};l.push(h);let d=e.each(n,o.wf("issueCategory"));for(let g of d){let f={label:N.label(g),category:g};l.push(f)}let s=e.any(n,o.wf("extrasEntryForm"),null,null);if(s){let f=e.any(s,o.ui("parts"),null,s.doc()).elements;for(let b of f){let w=e.any(b,o.ui("property"));if(w){let I={label:N.label(w),predicate:w};l.push(I)}}}l.push({label:"Description",predicate:o.wf("description")});let u=l.map(g=>g.label).join(",")+`
`,p=a.map(r).join("");return u+p}function Ha(e,n){let t=e.createElement("div"),r=!1;t.addEventListener("copy",a=>{if(!r)return;r=!1;let l;try{l=Vl(ql,n)}catch(c){Xe(`Could not generate CSV. Please check tracker data and try again.

Details: ${c?.message||String(c)}`,"CSV export error",e),a.preventDefault();return}a.preventDefault(),a.clipboardData.setData("text/plain",l),a.clipboardData.setData("text/csv",l),Xe("CSV data copied to clipboard.","CSV export",e)});let i=te.button(e,B.iconBase+"noun_Document_998605.svg","Copy as CSV",async a=>{r=!0,e.execCommand("copy")||(r=!1,Xe("Could not copy CSV to clipboard. Please try again.","CSV export error",e))});return t.appendChild(i),t}import*as He from"rdflib";var Wl=await(await fetch(he(`@prefix : <http://www.w3.org/ns/ui#> .
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
`,"text/turtle"))).text();$e(he(`/* Some of the styles below are generated by AI using GPT-5.3-Codex 
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


`,"text/css"));$e(he(`.trackerBoard {
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
`,"text/css"));$e(he(`.trackerNewTrackerButton {
  margin: var(--spacing-sm, 0.75em) var(--spacing-md, 1em);
}
`,"text/css"));$e(he(`.trackerNewIssueForm {
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
`,"text/css"));$e(he("","text/css"));$e(he(`/* CSS for the issue pane component was influenced by generative AI
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
`,"text/css"));var Gl=await(await fetch(he(`#   Issue tracking - Workflow application definition ontology
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
`,"text/turtle"))).text(),jl=await(await fetch(he(`#  Ontology for user interface hints and forms
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
`,"text/turtle"))).text(),Ae=Hl,Jl="trackerOverlay",Wa={icon:B.iconBase+"noun_122196.svg",name:"issue",audience:[],label:function(e,n){let t=Ae.findTypeURIs(e);return t["http://www.w3.org/2005/01/wf/flow#Task"]||Ae.holds(e,o.wf("tracker"))?"issue":t["http://www.w3.org/2005/01/wf/flow#Tracker"]?"tracker":null},mintClass:o.wf("Tracker"),mintNew:async function(e,n){async function t(u,p){let g=u.concat(p).map(w=>w.why),b=Array.from(new Set(g)).map(w=>r.updater.update(u.filter(_=>_.why.sameTerm(w)),p.filter(_=>_.why.sameTerm(w))));return Promise.all(b)}let r=e.session.store,i;n.newInstance?i=r.sym(n.newInstance.doc().uri+"_state.ttl"):(n.newInstance=r.sym(n.newBase+"index.ttl#this"),i=r.sym(n.newBase+"state.ttl"));let a=n.newInstance,l=a.doc(),c=Mr.currentUser();c&&r.add(a,o.dc("author"),c,l),r.add(a,o.rdf("type"),o.wf("Tracker"),l),r.add(a,o.dc("created"),new Date,l),r.add(a,o.wf("issueClass"),o.wf("Task"),l),r.add(a,o.wf("initialState"),o.wf("Open"),l),r.add(a,o.wf("stateStore"),i,l),r.add(a,o.wf("assigneeClass"),o.foaf("Person"),l),r.add(a,o.wf("stateStore"),i,i);let h=r.statementsMatching(void 0,void 0,void 0,l).concat(r.statementsMatching(void 0,void 0,void 0,i));try{await t([],h)}catch(u){return Ue("Error writing tracker configuration: "+u),Lr(n.div,e.dom,"Error creating the tracker configuration")}let m=e.dom,s=n.div.appendChild(m.createElement("div"));return s.innerHTML=`<h4>Success</h4>
    <p>Your <a href="${a.uri}">new tracker</a> has been made.
    Use the settings tab to configure it.
    </p>
    `,n},render:function(e,n){let t=n.dom,r=t.createElement("div");n.paneDiv=r,r.setAttribute("class","issuePane");let{errorSection:i,clearErrors:a,showError:l}=Lt(t,r);function c($){let M=$?.querySelector("main");M?.parentNode&&M.nextSibling!==i&&M.parentNode.insertBefore(i,M.nextSibling)}function h($,M){$?a():l(M)}async function m($,M){async function Q(H){let q=$.any(H,o.owl("disjointUnionOf"),null,ee);if(!q)throw Ue(`Classification ${H} has no disjointUnionOf`),new Error(`Tracker configuration error: ${N.label(H)} is missing its allowed state list (owl:disjointUnionOf)`);if(!q.elements)throw Ue(`Classification ${H} has no array`),new Error(`Tracker configuration error: ${N.label(H)} has no array`);let X=new Set(q.elements.map(ie=>ie.uri)),se=new Set($.each(null,o.rdfs("subClassOf"),H,ee).map(ie=>ie.uri)),J=[...se].filter(ie=>!X.has(ie)).map(ie=>({action:"delete",st:He.st($.sym(ie),o.rdfs("subClassOf"),H,ee)})),le=[...X].filter(ie=>!se.has(ie)).map(ie=>({action:"insert",st:He.st($.sym(ie),o.rdfs("subClassOf"),H,ee)}));return J.concat(le)}let ee=M.doc(),W=$.any(M,o.wf("issueClass")),G=$.each(M,o.wf("issueCategory")).concat([W]),R=[];for(let H of G)try{R=R.concat(await Q(H))}catch(q){Ue("Error checking subclasses of "+N.label(H)+": "+q),l('Tracker settings need an update for "'+N.label(H)+'". Open Settings and make sure this status/category has a list of allowed values (for example Open, In Progress, Closed), then save and refresh.')}if(R.length){let H=R.filter(se=>se.action==="insert").map(se=>se.st),q=R.filter(se=>se.action==="delete").map(se=>se.st);Dn("Damage:",R);let X=`${R.length} total (${H.length} add, ${q.length} remove)`;confirm(`Apply subclass fixes in tracker config? ${X}.`)&&await $.updater.update(q,H)}}function d($,M){let Q=Ae.any($,o.wf("issueClass"));M=M||Q;let ee=M.sameTerm(Q),W=Ae.any(M,o.owl("disjointUnionOf"));if(!W)return Ue(`Configuration error: state ${Q} does not have a disjointUnionOf`),l(`Configuration error: state ${Q} does not have substates`);let G=W.elements;ee&&G.length>2&&(G=G.filter(D=>Ae.holds(D,o.rdfs("subClassOf"),o.wf("Open"))||D.sameTerm(o.wf("Open"))));async function R(D,J){let V=za(D,M),le=Ae.the(D,o.wf("tracker"),null,D.doc()),ie=Ae.any(le,o.wf("stateStore"));if(!J.sameTerm(V)){try{await Ae.updater.update([He.st(D,o.rdf("type"),V,ie)],[He.st(D,o.rdf("type"),J,ie)]),a()}catch(ue){Ue("Unable to change issue state: "+ue),l("Unable to change issue state")}se.refresh()}}function H(D){return!!Ae.findTypeURIs(D)[o.wf("Open").uri]}let q={columnDropHandler:R,filter:ee?null:H};q.sortBy=o.dct("created"),q.sortReverse=!0;function X(D){return qa(D,n)}let se=Ra(t,G,X,q);return se.classList.add("trackerBoard"),se}function s($,M){return te.button(t,B.iconBase+"noun_479395.svg","refresh table",async ee=>{try{await Ae.fetcher.load($,{force:!0,clearPreviousData:!0}),a()}catch(W){Ue("Unable to refresh table: "+W),l("Unable to refresh the table. Please try again, and if this continues, refresh the page.");return}te.refreshTree(M)})}function u($){function M(){let V=new He.IndexedFormula;return G.pat.optional.push(V),V}let Q=Ae.any(e,o.wf("issueClass")),ee=Ae.each($,o.wf("issueCategory")),W=["issue","state","created"],G=new He.Query(N.label(e));for(let V=0;V<ee.length;V++)W.push("_cat_"+V);let R={};W.forEach(function(V){G.vars.push(R[V]=He.variable(V))}),G.pat.add(R.issue,o.wf("tracker"),$),G.pat.add(R.issue,o.dct("created"),R.created),G.pat.add(R.issue,o.rdf("type"),R.state),G.pat.add(R.state,o.rdfs("subClassOf"),Q),G.pat.optional=[];for(let V=0;V<ee.length;V++){let le=M();le.add(R.issue,o.rdf("type"),R["_cat_"+V]),le.add(R["_cat_"+V],o.rdfs("subClassOf"),ee[V])}let H=Ae.any($,o.wf("propertyList"));if(H){let V=H.elements;for(let le=0;le<V.length;le++){let ie=V[le],ue="_prop_"+le;ie.uri.indexOf("#")>=0&&(ue=ie.uri.split("#")[1]);let fe=M();G.vars.push(R[ue]=He.variable(ue)),fe.add(R.issue,ie,R[ue])}}let q={};Ae.each(void 0,o.rdfs("subClassOf"),Q).forEach(function(V){(Ae.holds(V,o.rdfs("subClassOf"),o.wf("Open"))||V.sameTerm(o.wf("Open")))&&(q[V.uri]=!0)});function se(V){let le=He.sym(V);Mt(le,n)}let D=Nn(t,{query:G,keyVariable:"?issue",sortBy:"?created",sortReverse:!0,hints:{"?issue":{linkFunction:se,label:"Title"},"?created":{cellFormat:"shortDate"},"?state":{initialSelection:q,label:"Status"}}}),J=Ae.any(e,o.wf("stateStore"));return D.appendChild(s(J,D)),D.classList.add("trackerBoardTable"),D}function p($){let M=t.createElement("div"),Q=Mr.currentUser(),ee={div:M,dom:t,noun:"tracker",statusArea:M,me:Q,refreshTarget:$},G=[n.session.paneRegistry.byName("issue")];return Un.newThingUI(ee,n,G),M.classList.add("trackerCreationControlContainer"),M}function g($){let M=t.createElement("div"),Q={dom:t,div:M,noun:"tracker"};return Fe.registrationList(Q,{public:!0,private:!0,type:$}).then(ee=>{M.appendChild(p(M))}),M}function f($){let M=t.createElement("div");M.appendChild(Ha(t,$));let Q=Ae.any($,o.wf("issueClass")),ee=[S,Q].concat(Ae.each($,o.wf("issueCategory"))),W=M.appendChild(t.createElement("div"));te.renderNameValuePair(t,Ae,W,null,"Default view").appendChild(te.makeSelectForOptions(t,Ae,$,o.wf("defaultView"),ee,{},$.doc()));let R={dom:t,div:M,noun:"tracker"};return Fe.registrationControl(R,$,o.wf("Tracker")).then(H=>{let q=o.wf("TrackerSettingsForm");He.parse(Wl,Ae,q.doc().uri,"text/turtle"),te.appendForm(t,M,{},$,q,$.doc(),h)}),M}function b(){function $(H,q){if(H.innerHTML="",q.sameTerm(I))H.appendChild(d(E));else if(q.sameTerm(S))H.appendChild(u(E));else if(q.sameTerm(A))H.appendChild(f(E));else if(q.sameTerm(O))H.appendChild(g(o.wf("Tracker")));else if(Ae.holds(E,o.wf("issueCategory"),q)||Ae.holds(E,o.wf("issueClass"),q))H.appendChild(d(E,q));else throw new Error("Unexpected tab type: "+q)}let M=Ae.any(E,o.wf("issueClass")),Q=[O,S,M].concat(Ae.each(E,o.wf("issueCategory")));Q.push(A);let ee=Ae.any(E,o.wf("defaultView"),null,E.doc())||S,W={renderMain:$,items:Q,selectedTab:ee},G=O.doc();return Ae.add(O,o.rdfs("label"),"My Trackers",G),Ae.add(A,o.rdfs("label"),"Settings",G),Ae.add(M,o.rdfs("label"),"By State",G),Ln.tabWidget(W)}async function w(){if(E=Ae.any(e,o.wf("tracker")),!E)throw new Error("This issue "+e+"has no tracker");try{let M=await n.session.store.fetcher.load(E.doc())}catch(M){return Ue(`Failed to load tracker config: ${E.doc()}: ${M}`),l("Failed to load tracker config")}let $=Ae.any(E,o.wf("stateStore"));if(!$)return Ue("Tracker has no state store: "+E),l("Tracker has no state store: "+E);try{await n.session.store.fetcher.load(e)}catch(M){return Ue(`Failed to load issue state: ${$}: ${M}`),l("Failed to load issue state")}r.appendChild(Fr(e,n)),z.addDownstreamChangeListener($,function(){te.refreshTree(r)})}async function _(){function $(X){te.refreshTree(r),Mt(X,n),G.disabled=!1}E=e;try{await m(Ae,E)}catch(X){Ue("Error fixing subclasses in config: "+X),l("Error fixing subclasses in config")}let M=Ae.any(e,o.wf("issueClass"));if(!M){Ue("This tracker has no issueClass"),l("Tracker settings are incomplete: missing Issue Class. Open Settings, choose an Issue Class, then refresh.");return}let Q=Ae.any(e,o.wf("stateStore"));if(!Q){Ue("This tracker has no stateStore"),l("Tracker settings are incomplete: missing State Store. Open Settings, save the tracker state settings, then refresh.");return}let ee=t.createElement("h2");ee.setAttribute("style","font-size: 150%"),r.appendChild(ee);let W=N.label(M);ee.appendChild(t.createTextNode(W+" list"));let G=t.createElement("button"),R=t.createElement("div");G.setAttribute("type","button"),G.classList.add("trackerIssuePaneNewIssueButton"),R.classList.add("trackerIssuePaneNewIssueButtonContainer"),R.appendChild(G),r.appendChild(R);let H=t.createElement("img");H.classList.add("trackerIssuePaneNewIssueButtonImage"),H.setAttribute("src",B.iconBase+"noun_19460_green.svg"),G.appendChild(H);let q=t.createElement("span");q.classList.add("trackerIssuePaneNewIssueButtonText"),q.innerHTML="New "+W,G.appendChild(q),G.addEventListener("click",function(X){G.disabled=!0,R.appendChild(Nt(t,Ae,E,null,$))},!1),n.session.store.fetcher.load([Q]).then(function(X){let se=b(E);r.appendChild(se),c(se),se.refresh||(Dn("No refresh function on the tableDiv?!"),l("There is no way to refresh the table view. Please refresh the whole page to see updates to the issues.")),r.appendChild(Va(e,n)),z.addDownstreamChangeListener(Q,se.refresh)}).catch(function(X){Ue("Cannot load state store: "+X),l("Cannot load state store")})}let I=o.wf("BoardView"),S=o.wf("TableView"),A=o.wf("SettingsView"),O=o.wf("InstancesView"),z=Ae.updater,F=Ae.findTypeURIs(e),E,Y=o.wf("").doc();Ae.holds(void 0,void 0,void 0,Y)||He.parse(Gl,Ae,Y.uri,"text/turtle");let j=o.ui("").doc();Ae.holds(void 0,void 0,void 0,j)||He.parse(jl,Ae,j.uri,"text/turtle"),F["http://www.w3.org/2005/01/wf/flow#Task"]||Ae.holds(e,o.wf("tracker"))?w().then(()=>tt("Single issue rendered")).catch($=>{Ue("Single issue render failed: "+$),l("Could not load this issue view. Please refresh, and if this continues, check tracker settings.")}):F["http://www.w3.org/2005/01/wf/flow#Tracker"]?_().then(()=>tt("Tracker rendered")).catch($=>{Ue("Tracker render failed: "+$),l("Could not load this tracker. Open Settings to verify Issue Class, then refresh.")}):(Ue("Error: Issue pane: No evidence that "+e+" is either a bug or a tracker."),l("This item is not recognized as an issue or tracker."));let ae,de=r.appendChild(t.createElement("div"));return de.classList.add(Jl),n.overlay=de,Mr.checkUser().then($=>{if($){n.me=$;return}ae=Fe.loginStatusBox(t,M=>{M?(n.me=Ae.sym(M),r.removeChild(ae)):n.me=null}),ae.classList.add("trackerIssuePaneLoginButton"),r.insertBefore(ae,r.firstChild),n.statusArea||(n.statusArea=r.insertBefore(t.createElement("div"),r.firstChild))}),r}};yt(he(`/* Shared utility variables for component styles.
   These are kept here (instead of in dev-global.css) so they can be
   bundled with component styles and reused consistently across the app.
*/

/* Utility helper classes */

/* different from mashlib .btn-primary:active {
  box-shadow: var(--box-shadow-active);
} */
`,"text/css"));yt(he(`/* Focus indicator for keyboard navigation */
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
`,"text/css"));yt(he(`/* Solid-UI form */

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
}`,"text/css"));var wn=o,Rr={icon:B.iconBase+"noun_99101.svg",name:"contact",global:!1,label(e,n){let t=n.session.store.findTypeURIs(e);return t[wn.vcard("Organization").uri]?"Contact":t[wn.vcard("AddressBook").uri]?"Address book":null},mintClass:o.vcard("AddressBook"),mintNew:(e,n)=>import("./part-6HDE7L6M.js").then(t=>t.mintNewAddressBook(e,n)),render(e,n,t={}){let r=n.dom,i=n.session.store,a=r.createElement("div");return Cn.preventBrowserDropEvents(r),a.setAttribute("class","contactPane"),Ui(a,1e3),l().then(()=>Si("Contacts pane rendered for "+e),c=>cr(a,r,c.message||""+c)).catch(c=>{cr(a,r,c.message||""+c)}),a;async function l(){let c=i.findTypeURIs(e);if(c[wn.vcard("Individual").uri]||c[wn.foaf("Person").uri]||c[wn.schema("Person").uri]||c[wn.vcard("Organization").uri]||c[wn.schema("Organization").uri])try{let{renderIndividual:h}=await import("./part-6XBOLJZY.js");await h(r,a,e,n)}catch(h){throw dr("Error rendering contact. Stack: "+h),new Error("Failed to render contact: "+(h.message||h))}else if(c[wn.vcard("AddressBook").uri]){await import("./part-SG2CQKCN.js");let h=r.createElement("contacts-pane-address-book");h.book=e,h.options={},h.dataBrowserContext=n,h.paneOptions=t,a.appendChild(h)}else throw dr("No evidence that "+e+" is anything to do with contacts."),new Error("This does not seem to be a contact or address book.");return a}}};import{authn as Dr}from"solid-logic";import{graph as Kl,log as Yl,NamedNode as Xl,Namespace as Ga,sym as it,serialize as Ql}from"rdflib";Re(he(`.pad-layout {\r
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
`,"text/css"));var Zl={icon:B.iconBase+"noun_79217.svg",name:"pad",audience:[o.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/pad#Notepad"]?"Notepad":null},mintClass:o.pad("Notepad"),mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("notepad mintNew:  Invalid userid");let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();t.add(i,o.rdf("type"),o.pad("Notepad"),a),t.add(i,o.dc("title"),"Shared Notes",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let l=t.sym(i.uri+"_line0");return t.add(i,o.pad("next"),l,a),t.add(l,o.pad("next"),i,a),t.add(l,o.dc("author"),n.me,a),t.add(l,o.sioc("content"),"",a),new Promise(function(c,h){if(!r){h(new Error("Have no updater"));return}r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(m,d,s){d?c(n):h(new Error("FAILED to save new tool at: "+m+" : "+s))})})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=function(q,X){q||z.appendChild(te.errorMessageBlock(r,X,"pink"))},l=function(q){for(;q.firstChild;)q.removeChild(q.firstChild);return q},c=function(q,X,se){let D=Kl(),J=Ga("http://www.w3.org/ns/auth/acl#"),V=D.sym(X+"#a1"),le=D.sym(X),ie=D.sym(q);return D.add(V,o.rdf("type"),J("Authorization"),le),D.add(V,J("accessTo"),ie,le),D.add(V,J("agent"),_,le),D.add(V,J("mode"),J("Read"),le),D.add(V,J("mode"),J("Write"),le),D.add(V,J("mode"),J("Control"),le),V=D.sym(X+"#a2"),D.add(V,o.rdf("type"),J("Authorization"),le),D.add(V,J("accessTo"),ie,le),D.add(V,J("agentClass"),o.foaf("Agent"),le),D.add(V,J("mode"),J("Read"),le),se&&D.add(V,J("mode"),J("Write"),le),Ql(le,D,X,"text/turtle")},h=function(X,se,D){let J=i.any(it(X),it("http://www.iana.org/assignments/link-relations/acl"));if(!b)throw new Error("Have no fetcher");if(J){let V=c(X,J.uri,se);return b.webOperation("PUT",J.uri,{data:V,contentType:"text/turtle"}).then(()=>D(!0)).catch(le=>{D(!1,le.message)})}else return b.load(X).catch(V=>{D(!1,"Getting headers for ACL: "+V)}).then(()=>{let V=i.any(it(X),it("http://www.iana.org/assignments/link-relations/acl"));if(!V)throw new Error("No Link rel=ACL header for "+X);let le=c(X,V.uri,se);return b.webOperation("PUT",V.uri,{data:le,contentType:"text/turtle"})}).then(()=>D(!0)).catch(V=>{D(!1,V.message)})},m=function(){let q=z.appendChild(r.createElement("button"));return q.textContent="Start another pad",q.addEventListener("click",function(){return d(e,G,"pad")}),q},d=function(X,se,D){let J=l(se),V={noun:"notepad"};J.appendChild(Fe.newAppInstance(r,V,(fe,ve)=>s(new Xl(fe||ve)))),J.appendChild(r.createElement("hr"));let le=J.appendChild(r.createElement("p"));le.textContent="Where would you like to store the data for the "+D+"?  Give the URL of the directory where you would like the data stored.";let ie=J.appendChild(r.createElement("input"));ie.setAttribute("type","text"),ie.size=80,ie.label="base URL",ie.autocomplete="on",J.appendChild(r.createElement("br"));let ue=J.appendChild(r.createElement("button"));ue.textContent="Start new "+D+" at this URI",ue.addEventListener("click",function(fe){let ve=ie.value;ve.slice(-1)!=="/"&&(ve+="/"),u(X,ve)})},s=function(q){let X=i.any(q,o.space("uriPrefix"));X?X=X.value:X=q.uri.split("#")[0],X.slice(-1)!=="/"&&(Yl.error(f+": No / at end of uriPrefix "+X),X=X+"/");let se=new Date;X+=f+"/id"+se.getTime()+"/",u(S,X)},u=function(q,X){let D=it(q.uri.split("#")[0]),J=i.sym(X+"pad.ttl"),V=i.sym(X+"index.html"),le=[{local:"index.html",contentType:"text/html"}],ie=i.sym(J.uri+"#thisPad"),ue=[],fe;for(fe=0;fe<le.length;fe++){let ve=le[fe];(function(ye){ue.push(function(){let Pe=X+ye.local;console.log("Copying "+D+ye.local+" to "+Pe);let y=function(){h(Pe,!1,function(v,x){v?ue.shift()():(a(v,"FAILED to set ACL "+Pe+" : "+x),console.log("FAILED to set ACL "+Pe+" : "+x))})};if(!i.fetcher)throw new Error("Store has no fetcher");i.fetcher.webCopy(D+ye.local,X+ye.local,ye.contentType).then(()=>Dr.checkUser()).then(v=>{_=v,y()}).catch(v=>{console.log("FAILED to copy "+D+ye.local+" : "+v.message),a(!1,"FAILED to copy "+D+ye.local+" : "+v.message)})})})(ve)}ue.push(function(){if(i.add(ie,o.rdf("type"),I("Notepad"),J),i.add(ie,o.dc("created"),new Date,J),_&&i.add(ie,o.dc("author"),_,J),i.add(ie,I("next"),ie,J),i.add(ie,o.space("inspiration"),q,A),i.add(ie,o.space("inspiration"),q,J),!w)throw new Error("Have no updater");w.put(J,i.statementsMatching(void 0,void 0,void 0,J),"text/turtle",function(Te,Le,ye){Le?ue.shift()():(a(Le,"FAILED to save new notepad at: "+J.uri+" : "+ye),console.log("FAILED to save new notepad at: "+J.uri+" : "+ye))})}),ue.push(function(){h(J.uri,!0,function(ve,Te){a(ve,"Failed to set Read-Write ACL on pad data file: "+Te),ve&&ue.shift()()})}),ue.push(function(){let ve=z.appendChild(r.createElement("p"));ve.classList.add("pad-new-instance-message"),ve.innerHTML="Your <a href='"+V.uri+"'><b>new notepad</b></a> is ready. <br/><br/><a href='"+V.uri+"'>Go to new pad</a>"}),ue.shift()()},p=function(q){console.log("showResults()"),_=Dr.currentUser(),Dr.checkUser().then(D=>{_=D});let X=i.any(e,o.dc("title"))||i.any(e,o.vcard("fn"));t.solo&&typeof window<"u"&&X&&(window.document.title=X.value),H.exists=q,O=_n.notepad(r,A,e,_,H),j.appendChild(O);let se=i.any(e,o.meeting("parentMeeting"))||e;if(_n.manageParticipation(r,$,A,se,_,H),!i.updater)throw new Error("Store has no updater");i.updater.setRefreshHandler(A,O.reloadAndSync)},g=function(){if(!b)throw new Error("Have no fetcher");b.nowOrWhenFetched(A.uri,void 0,function(q,X,se){if(q)l(j),i.holds(e,o.rdf("type"),o.wf("TemplateInstance"))&&d(e,j,"pad"),p(!0),M.appendChild(m());else if(se.status===404){if(console.log("Initializing results file "+A),!w)throw new Error("Have no updater");w.put(A,[],"text/turtle",function(D,J,V){J?(l(j),p(!1)):(a(J,"FAILED to create results file at: "+A.uri+" : "+V),console.log("FAILED to craete results file at: "+A.uri+" : "+V))})}else a(q,"FAILED to read results file: "+X)})},f="app-pad.timbl.com",b=i.fetcher,w=i.updater,_,I=Ga("http://www.w3.org/ns/pim/pad#"),S=e,A=e.doc(),O,z=r.createElement("div"),F=z.appendChild(r.createElement("div"));F.className="pad-layout";let E=F.appendChild(r.createElement("div"));E.className="pad-row",E.appendChild(r.createElement("div")),E.appendChild(r.createElement("div")),E.appendChild(r.createElement("div"));let Y=F.appendChild(r.createElement("div"));Y.className="pad-row";let j=Y.appendChild(r.createElement("div"));j.className="pad-main";let ae=F.appendChild(r.createElement("div"));ae.className="pad-row pad-controls";let de=ae.appendChild(r.createElement("div"));de.className="pad-cell";let $=ae.appendChild(r.createElement("div"));$.className="pad-cell";let M=ae.appendChild(r.createElement("div"));M.className="pad-cell";let Q=F.appendChild(r.createElement("div"));Q.className="pad-row";let ee=Q.appendChild(r.createElement("div")),W=F.appendChild(r.createElement("div"));W.className="pad-row";let G=W.appendChild(r.createElement("div")),R=F.appendChild(r.createElement("div"));R.setAttribute("class","pad-row naviMenu"),R.appendChild(r.createElement("div")),R.appendChild(r.createElement("div")),R.appendChild(r.createElement("div"));let H={statusArea:ee,timingArea:de};return g(),z}},ja=Zl;import*as at from"rdflib";var je=o,Ja={icon:B.iconBase+"noun_106746.svg",name:"transaction",audience:[je.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return r["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]?"$$":t.any(e,o.qu("amount"))?"$$$":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.session.store,i=r.fetcher,a=at.Namespace("http://www.w3.org/2000/10/swap/pim/qif#"),l=at.Namespace("http://www.w3.org/ns/pim/trip#"),c=t.createElement("div");c.setAttribute("class","transactionPane");let h=function(E,Y){Y===void 0&&(Y="color: grey");let j=t.createElement("pre");j.setAttribute("style",Y),c.appendChild(j),j.appendChild(t.createTextNode(E))},m=function(E){return h(E,"color: #100; background-color: #fee")},d=r.statementsMatching(e),s=r.statementsMatching(void 0,void 0,e),u=r.findTypeURIs(e),p={},g=function(F){p[F.uri]=!0},f=function(F){let E="padding: 0.5em 1.5em 1em 1.5em; ";if(F){let Y=r.any(F,o.ui("backgroundColor"));Y&&(E+="background-color: "+Y.value+"; ")}c.setAttribute("style",E)},b=function(F){if(F===void 0)return"";let E=""+F;return E.indexOf(".")>=0?E.split(".")[0]+"."+(E.split(".")[1]+"00").slice(0,2):E+".00"},w=function(E,Y){let j=t.createElement("td");return 0+E===0&&Y||(j.textContent=b(E)),j.setAttribute("style","width: 6em; text-align: right; "),j},_=function(E){let Y=t.createElement("th");return Y.textContent=E,Y.setAttribute("style","text-align: right; "),Y},I=function(F,E){let Y=r.any(F,je.qu("date")),j=r.any(E,je.qu("date"));if(Y!==void 0&&j!==void 0){if(Y.value<j.value)return-1;if(Y.value>j.value)return 1}return F.uri<E.uri?-1:F.uri>E.uri?1:0},S=function(F,E,Y){let ae=F.session.paneRegistry.byName(Y).render(E,F);return ae.setAttribute("style","border: 0.1em solid green;"),ae},A=function(F,E,Y,j,ae){let de=E.parentNode.children;if(ae)for(let ee=de.length-1;ee>=0;ee--)de[ee].expanded&&(de[ee].parentNode.removeChild(de[ee].expanded),de[ee].expanded=!1);let $=F.createElement("tr"),M=$.appendChild(F.createElement("td"));M.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let Q=E.children.length;E.nextSibling?E.parentNode.insertBefore($,E.nextSibling):E.parentNode.appendChild($),E.expanded=$,M.setAttribute("colspan",""+Q),M.appendChild(S(n,Y,j))},O=function(F,E,Y,j,ae){E.expanded?(E.parentNode.removeChild(E.expanded),E.expanded=!1):A(F,E,Y,j,ae)},z=function(F,E,Y){let j=F.createElement("table");j.setAttribute("style","padding-left: 0.5em; padding-right: 0.5em; font-size: 9pt; width: 85%;");let ae=function($,M){let Q=$.createElement("tr"),ee=function(J,V){let le="'padding-left: 0.5em; padding-right: 0.5em; padding-top: 0.1em;";if(V){let ie=r.any(V,o.ui("backgroundColor"));ie&&(le+="background-color: "+ie.value+"; ")}J.setAttribute("style",le)},W=r.any(M,je.qu("toAccount"));ee(Q,W);let G=Q.appendChild($.createElement("td")),R=r.any(M,je.qu("date"));G.textContent=R?R.value.slice(0,10):"???",G.setAttribute("style","width: 7em;");let H=Q.appendChild($.createElement("td"));H.setAttribute("style","width: 36em;");let q=r.any(M,je.qu("payee"));H.textContent=q?q.value:"???";let X=H.appendChild($.createElement("a"));X.textContent=" \u279C",X.setAttribute("href",M.uri);let se=Q.appendChild($.createElement("td")),D=r.any(M,je.qu("in_USD"));return se.textContent=D?b(D.value):"???",se.setAttribute("style","width: 6em; text-align: right; "),Q.addEventListener("click",function(J){O($,Q,M,"transaction",!J.shiftKey)},!1),Q},de=Y?E.filter(Y):E.slice();de.sort(I);for(let $=0;$<de.length;$++)j.appendChild(ae(F,de[$]));return j};if(u["http://www.w3.org/2000/10/swap/pim/qif#Transaction"]||r.any(e,je.qu("toAccount"))){g(je.rdf("type"));let F=r.any(e,o.qu("toAccount"));f(F),F||m("(Error: There is no bank account known for this transaction <"+e.uri+`>,
 -- every transaction needs one.)`);let E=null,Y=r.any(e,o.qu("accordingTo"));Y===void 0?m("(Error: There is no back link to the original data source foir this transaction <"+e.uri+`>,
so I can't tell how to annotate it.)`):(E=Y!==void 0?r.any(Y,o.qu("annotationStore")):null,E===void 0&&m(`(There is no annotation document for this statement
<`+Y.uri+`>,
so you cannot classify this transaction.)`));let j=t.createElement("div");j.setAttribute("style","float:right"),c.appendChild(j);let ae=function(ee,W){g(ee);let G=r.any(e,ee);if(!G)return;let R=t.createElement("a");R.setAttribute("href",G.uri),R.setAttribute("style","float:right"),j.appendChild(R).textContent=W||N.label(G),j.appendChild(t.createElement("br"))};ae(o.qu("toAccount")),ae(o.qu("accordingTo"),"Statement"),ae(l("trip"));let de=t.createElement("table");c.appendChild(de);let M=["date","payee","amount","in_USD","currency"].map(a).map(function(ee){g(ee);let W=r.any(e,ee),G=W?N.labelForXML(W):"";return'<tr><td style="text-align: right; padding-right: 0.6em">'+N.labelForXML(ee)+'</td><td style="font-weight: bold;">'+G+"</td></tr>"}).join(`
`);de.innerHTML=M;let Q=function(ee,W){ee||m(`Sorry, failed to save your change:
`+W)};E&&r.fetcher.nowOrWhenFetched(E.uri,e,function(ee,W){ee||m("Cannot load store "+E+" "+W);let G=r.any(E,je.qu("calendarYear")),R=function(){c.insertBefore(te.makeSelectForNestedCategory(t,r,e,o.qu("Classified"),E,Q),de.nextSibling)};r.any(void 0,je.rdfs("subClassOf"),je.qu.Classified)?R():G?i.load(G).then(function(D){i.load(r.each(G,je.rdfs("seeAlso"))).then(function(){R()}).catch(function(J){console.log("Error loading background data: "+J)})}).catch(function(D){console.log("Error loading calendarYear: "+D)}):console.log("Can't get categories, because no calendarYear"),c.appendChild(te.makeDescription(t,r,e,o.rdfs("comment"),E,Q));let H=r.statementsMatching(void 0,l("trip"),void 0,E).map(function(D){return D.object}),q=r.each(void 0,o.rdf("type"),l("Trip"));H=H.concat(q).sort(),H=function(D,J,V,le){let ie=J.map(function(ue){let fe=D.any(ue,V);return fe=fe?fe.value:"9999-12-31",[fe,ue]});return ie.sort(),le&&ie.reverse(),ie.map(function(ue){return ue[1]})}(r,H,o.cal("dtstart"),!0),H.length>1&&c.appendChild(te.makeSelectForOptions(t,r,e,l("trip"),H,{multiple:!1,nullLabel:"-- what trip? --",mint:"New Trip *",mintClass:l("Trip"),mintStatementsFun:function(D){let J=[];return J.push(at.st(D,o.rdf("type"),l("Trip"),D.doc())),J}},E,Q)),c.appendChild(t.createElement("br"));let se=n.getOutliner(t);g(je.rdfs("comment")),te.attachmentList(t,e,c),g(je.wf("attachment")),c.appendChild(t.createElement("tr")).setAttribute("style","height: 1em"),se.appendPropertyTRs(c,d,!1,function(D,J){return!(D.uri in p)}),se.appendPropertyTRs(c,s,!0,function(D,J){return!(D.uri in p)})})}else u["http://www.w3.org/ns/pim/trip#Trip"]&&function(){let E={},Y={},j={},ae=r.each(void 0,l("trip"),e),de=ae.map(function($){return $.doc()});r.fetcher.load(de).then(function(){ae.forEach(function(D){let J=r.the(D,je.qu("date")),V=J?(""+J.value).slice(0,4):"????",le=r.the(D,je.rdf("type"));if(le||(le=o.qu("ErrorNoType")),le&&le.uri){let ie=le.uri;Y[V]||(Y[V]=0),j[V]||(j[V]={}),E[ie]||(E[ie]=0),j[V][ie]||(j[V][ie]=0);let ue=r.any(D,o.qu("in_USD"));if(ue||m("@@ No amount in USD: "+ue+" for "+D),ue){let fe=parseFloat(ue.value);E[ie]+=fe,j[V][ie]+=fe,Y[V]+=fe}}});let $=[],M=0,Q=[],ee;for(let D in j)Object.prototype.hasOwnProperty.call(j,D)&&Q.push(D);Q.sort();let W=Q.length,G,R=c.appendChild(t.createElement("table"));if(R.setAttribute("style","font-size: 120%; margin-left:auto; margin-right:1em; margin-top: 1em; border: 0.05em solid gray; padding: 1em;"),W>1){let D=R.appendChild(t.createElement("tr"));for(D.appendChild(_("")),ee=0;ee<W;ee++)D.appendChild(_(Q[ee]));D.appendChild(_("total"))}for(let D in E)Object.prototype.hasOwnProperty.call(E,D)&&($.push(D),M+=E[D]);$.sort();let H,q,X;for(let D=0;D<$.length;D++){let J=r.sym($[D]);if(H=R.appendChild(t.createElement("tr")),q=H.appendChild(t.createElement("td")),q.textContent=N.label(J),W>1)for(ee=0;ee<W;ee++)X=j[Q[ee]][$[D]],G=H.appendChild(w(X,!0));H.appendChild(w(E[$[D]],!0))}if($.length>1){if(H=R.appendChild(t.createElement("tr")),H.appendChild(_("total")),W>1)for(ee=0;ee<W;ee++)X=Y[Q[ee]],G=H.appendChild(w(X?b(X):""));G=H.appendChild(w(M)),G.setAttribute("style","font-weight: bold; text-align: right;")}let se=z(t,ae);se.setAttribute("style","margin-left:auto; margin-right:1em; margin-top: 1em; border: padding: 1em;"),c.appendChild(se),te.attachmentList(t,e,c)}).catch(function($){m("Error loading transactions: "+$)})}();return c}};var ed=o,Ka={icon:B.iconBase+"noun_142708.svg",name:"period",audience:[ed.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]?"Period":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","periodPane");let l=function(u,p){p||(p="color: grey;");let g=t.createElement("pre");g.setAttribute("style",p),a.appendChild(g),g.appendChild(t.createTextNode(u))},c=function(u){return l("\u2713 "+u,"color: #010; background-color: #efe")},h=function(u){return l(u,"color: #100; background-color: #fee")},m=function(){let s=r.any(e,i.cal("dtstart"));s===void 0&&h("(Error: There is no start date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let u=r.any(e,i.cal("dtend"));u===void 0&&h("(Error: There is no end date known for this period <"+e.uri+`>,
 -- every period needs one.)`);let p={};(function(W){p[W.uri]=!0})(i.rdf("type"));let f=function(W){return!!(W&&W>=s&&W<u)},b=function(W){let G=""+W;return G.indexOf(".")>=0?G.split(".")[0]+"."+(G.split(".")[1]+"00").slice(0,2):G+".00"},w=function(W){return f(r.any(W,i.qu("date")))},_=function(W,G){let R=r.any(W,i.qu("date")),H=r.any(G,i.qu("date"));if(R!==void 0&&H!==void 0){if(R.value<H.value)return-1;if(R.value>H.value)return 1}return W.uri<G.uri?-1:W.uri>G.uri?1:0},I=a.appendChild(t.createElement("h2"));I.textContent="Period "+s.value.slice(0,10)+" - "+u.value.slice(0,10);let S=function(W,G,R){let q=W.session.paneRegistry.byName(R).render(G,W);return q.setAttribute("style","border: 0.1em solid green;"),q},A=function(W,G,R,H,q){let X=G.parentNode.children;if(q)for(let V=X.length-1;V>=0;V--)X[V].expanded&&(X[V].parentNode.removeChild(X[V].expanded),X[V].expanded=!1);let se=W.createElement("tr"),D=se.appendChild(W.createElement("td"));D.setAttribute("style","width: 98%; padding: 1em; border: 0.1em solid grey;");let J=G.children.length;G.nextSibling?G.parentNode.insertBefore(se,G.nextSibling):G.parentNode.appendChild(se),G.expanded=se,D.setAttribute("colspan",""+J),D.appendChild(S(n,R,H))},O=function(W,G,R,H,q){G.expanded?(G.parentNode.removeChild(G.expanded),G.expanded=!1):A(W,G,R,H,q)},z=function(W,G){let R=W.createElement("table");R.setAttribute("style","margin-left: 100; font-size: 9pt; width: 85%;");let H=function(X,se){let D=X.createElement("tr"),J=function(ye,Pe){let y="margin-left: 8em; padding-left: 5em;";if(Pe){let v=r.any(Pe,o.ui("backgroundColor"));v&&(y+="background-color: "+v.value+"; ")}ye.setAttribute("style",y)},V=r.any(se,i.qu("toAccount"));J(D,V);let le=D.appendChild(X.createElement("td")),ie=r.any(se,i.qu("date"));le.textContent=ie?ie.value.slice(0,10):"???",le.setAttribute("style","width: 7em;");let ue=D.appendChild(X.createElement("td"));ue.setAttribute("style","width: 36em;");let fe=r.any(se,i.qu("payee"));ue.textContent=fe?fe.value:"???";let ve=ue.appendChild(X.createElement("a"));ve.textContent=" \u279C",ve.setAttribute("href",se.uri);let Te=D.appendChild(X.createElement("td")),Le=r.any(se,i.qu("in_USD"));return Te.textContent=Le?b(Le.value):"???",Te.setAttribute("style","width: 6em; text-align: right; "),D.addEventListener("click",function(ye){O(X,D,se,"transaction",!ye.shiftKey)},!1),D},q=G.filter(w);q.sort(_);for(let X=0;X<q.length;X++)R.appendChild(H(W,q[X]));return R},F={"http://www.w3.org/2000/10/swap/pim/qif#Transaction":!0,"http://www.w3.org/2000/10/swap/pim/qif#Unclassified":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedOutgoing":!0,"http://www.w3.org/2000/10/swap/pim/qif#UnclassifiedIncome":!0},E=r.findMemberURIs(i.qu("Transaction")),Y=[],j=[],ae,de;for(let W in E)if(Object.prototype.hasOwnProperty.call(E,W)){de=r.sym(W);let G=r.each(de,i.rdf("type")),R=!1;for(let H=0;H<G.length;H++){let q=G[H];F[q.uri]===void 0&&(R=!0)}R||(ae=r.any(de,i.qu("in_USD")),ae===void 0&&(ae=r.any(de,i.qu("amount"))),ae&&(""+ae.value).indexOf("-")>=0?j.push(r.sym(W)):Y.push(r.sym(W)))}let $,M;Y.length?($=z(t,Y),M=$.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Income"+(M<4?"":" ("+M+")"),a.appendChild($)):c("No unclassified income"),j.length?($=z(t,j),M=$.children.length,a.appendChild(t.createElement("h3")).textContent="Unclassified Outgoings"+(M<4?"":" ("+M+")"),a.appendChild($)):c("No unclassified outgoings ");let Q=function(W){let G=r.findSubClassesNT(i.qu("Transaction"));for(let R in G)if(Object.prototype.hasOwnProperty.call(G,R)&&R.slice(1,-1).split("#")[1]===W)return r.sym(R.slice(1,-1));return null},ee=function(W,G){let R=Q(W),H,q=[],X=0;if(!R)return h("Error: No category correspnding to "+W),null;let se=r.each(void 0,i.rdf("type"),R);for(let D=0;D<se.length;D++)r.any(se[D],G)||q.push(se[D]);return q.length&&(H=z(t,q),X=H.children.length,a.appendChild(t.createElement("h3")).textContent=N.label(R)+" with no "+N.label(G)+(X<4?"":" ("+X+")"),a.appendChild(H)),X};ee("Reimbursables",i.trip("trip"))===0&&c("Reimbursables all have trips"),ee("Other_Inc_Speaking",i.trip("trip"))===0&&c("Speaking income all has trips")};if(r.findTypeURIs(e)["http://www.w3.org/2000/10/swap/pim/qif#Period"]){let s=r.each(e,i.rdfs("seeAlso"));console.log("Loading before render: "+s.length),r.fetcher.load(s).then(function(){m()})}return a}};var Ya=new Set;function Br(e){let n=String(e);if(Ya.has(n)||typeof document>"u")return;Ya.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}import*as We from"rdflib";import{solidLogicSingleton as td,authn as Rt}from"solid-logic";var nd=await(await fetch(he(`@prefix : <http://www.w3.org/ns/ui#> .
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
`,"text/turtle"))).text();Br(he(`/* Some of the CSS code below was generated by Generative AI (GPT-5.3-Codex in GitHub Copilot) based on the following prompt:
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
}`,"text/css"));Br(he(`:root {
  --icon-xs: 1.5em;
  --icon-base: 2em;
  --icon-xl: 3.1em;
}`,"text/css"));var{typeIndex:rd}=td,{loadTypeIndexesFor:id}=rd,ad="https://meet.jit.si/",od=o,Xa={icon:B.iconBase+"noun_66617.svg",name:"meeting",audience:[od.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=o;return t.holds(e,r.rdf("type"),r.meeting("Meeting"))?"Meeting":null},mintClass:o.meeting("Meeting"),mintNew:function(e,n){return new Promise(function(t,r){let i=e.session.store,a=o;n.newInstance=n.newInstance||i.sym(n.newBase+"index.ttl#this");let l=n.newInstance,c=l.doc(),h=Rt.currentUser();h&&i.add(l,a.dc("author"),h,c),i.add(l,a.rdf("type"),a.meeting("Meeting"),c),i.add(l,a.dc("created"),new Date,c),i.add(l,a.ui("backgroundColor"),new We.Literal("#ddddcc",void 0,a.xsd("color")),c);let m=new We.Collection;i.add(l,a.meeting("toolList"),m,c),m.elements.push(l),i.updater.put(c,i.statementsMatching(void 0,void 0,void 0,c),"text/turtle",function(d,s,u){s?t(n):r(new Error("Error writing meeting configuration: "+u))})})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=r.updater,l=this,c=function(L,ne){console.log(L);let K=t.createElement("pre");K.setAttribute("style","background-color: "+(ne||"#eed")+";"),u.appendChild(K),K.appendChild(t.createTextNode(L))},h=function(U,L){U||c(L)},m=e,d=e.doc(),s=e.dir().uri,u=t.createElement("div");u.classList.add("meetingPane");let p=u.appendChild(t.createElement("table"));p.classList.add("meetingPaneTable");let g=p.appendChild(t.createElement("tr"));g.classList.add("meetingPaneHeader"),g.appendChild(t.createElement("div"));let f=p.appendChild(t.createElement("tr"));f.classList.add("meetingPaneMainRow");let _=p.appendChild(t.createElement("td")).appendChild(t.createElement("table")).appendChild(t.createElement("tr")),I=null,S=function(){a.put(d,r.statementsMatching(void 0,void 0,void 0,d),"text/turtle",function(U,L,ne){L?(oe.refresh(),y()):(ne="FAILED to save new thing at: "+d+" : "+ne,c(ne))})},A=function(U,L,ne){let K=L.doc();ne&&r.add(m,ne,L,K),r.add(L,i.meeting("parentMeeting"),m,K),a.put(K,r.statementsMatching(void 0,void 0,void 0,K),"text/turtle",function(re,pe,be){pe?S():c("FAILED to save new tool at: "+L+" : "+be)})},O=function(U,L,ne,K){L&&r.add(m,L,U,d);let re=te.newThing(d);return ne&&r.add(re,i.rdfs("label"),ne,d),K&&r.add(re,i.meeting("icon"),r.sym(K),d),r.add(re,i.rdf("type"),i.meeting("Tool"),d),r.add(re,i.meeting("target"),U,d),r.the(m,i.meeting("toolList")).elements.push(re),re};function z(U){let L=/https:\/\/www\.google\..*\/maps\//,ne="https://www.google.com/maps/embed/v1/",K="AIzaSyB8aaT6bY9tcLCmc2oPCkdUYLmTOWM8R54",re=U.uri;if(!re.match(L)||re.startsWith(ne))return U;let pe=re.replace(L,ne)+"&key="+K;return console.log("Converted Google Map URI! "+pe),We.sym(pe)}let F=function(U){return new Promise(function(L){let ne=function(be){let me=O(be,o.wf("attachment"),N.label(be),null);r.add(me,o.meeting("view"),"iframe",d)},K=function(be){let me=i.wf("attachment");r.add(e,me,be,e.doc());let we={icon:"noun_160581.svg",limit:1,shareTab:!0},xe={newInstance:e,pane:n.session.paneRegistry.byName("link"),predicate:i.meeting("attachmentTool"),tabTitle:"Links",view:"link",noIndexHTML:!0};return W(we,xe)},re=function(be){let me=r.any(be,i.foaf("preferredURI")),we=me?r.sym(me):be,xe=r.any(m,i.meeting("attendeeGroup")),ke=function(Ie,_e){let Ce=[We.st(_e,o.vcard("hasMember"),Ie,_e.doc())],De=r.any(Ie,i.vcard("fn"))||r.any(Ie,i.foaf("name"));De&&Ce.push(We.st(Ie,o.vcard("fn"),De,_e.doc())),r.fetcher.nowOrWhenFetched(_e.doc(),void 0,function(Be,nn){if(!Be){c("Can't read group to add person"+_e);return}r.updater.update([],Ce,function(rn,Wn,yi){h(Wn,yi),Wn&&console.log("Addded to particpants OK: "+Ie)})})};if(xe){ke(we,xe);return}M().then(function(Ie){let _e=Ie.newInstance;ke(we,_e),r.fetcher.putBack(d,{contentType:"text/turtle"}).then(function(Ce){console.log("Particiants Group created: "+_e)})}).catch(function(Ie){c(Ie)})};console.log("Dropped on thing "+U);let pe=U.uri;if(pe.startsWith("http:")&&pe.indexOf("#")<0)return K(U),L(U);r.fetcher.nowOrWhenFetched(U,function(be,me){function we(xe){xe=z(xe),console.log("make web page attachement tab "+xe);let ke=O(xe,o.wf("attachment"),N.label(xe),null);return r.add(ke,o.meeting("view"),"iframe",d),L(xe)}if(be){let xe=U,ke=r.findTypeURIs(xe);for(let Ie in ke)console.log("    drop object type includes: "+Ie);if(i.vcard("Individual").uri in ke||i.foaf("Person").uri in ke||i.foaf("Agent").uri in ke)return re(U),L(U);if(pe.startsWith("https:")&&pe.indexOf("#")<0){let Ie=r.fetcher.getHeader(U,"x-frame-options"),_e=!0;if(Ie)for(let Ce=0;Ce<Ie.length;Ce++)console.log("x-frame-options: "+Ie[Ce]),Ie[Ce].indexOf("sameorigin")<0&&(_e=!1),Ie[Ce].indexOf("deny")<0&&(_e=!1);if(_e)return U=z(U),ne(U),L(U)}return console.log("Default: assume web page attachement "+U),we(U)}else return console.log("Error looking up dropped thing, will just add it anyway. "+U+": "+me),we(U)})})},E=function(U){Promise.all(U.map(function(L){let ne=We.sym(L);return F(ne)})).then(function(L){S()})},Y=function(U){te.uploadFiles(r.fetcher,U,m.dir().uri+"Files",m.dir().uri+"Pictures",function(L,ne){L.type.startsWith("image/")?de("Files"):$("Pictures")})},j=function(U){let L=s+"Group/",ne=n.session.store,K=ne.any(m,i.meeting("particpants"));K||(K=We.sym(L+"index.ttl#this")),console.log("Participant group: "+K);let re=O(K,i.meeting("particpants"),"Particpants",B.iconBase+"noun_339237.svg");ne.add(re,o.meeting("view"),"peoplePicker",d),S()},ae=function(U){let L={useExisting:m,pane:n.session.paneRegistry.byName("schedule"),view:"schedule",tabTitle:"Schedule poll",noIndexHTML:!0};return W(U,L)},de=function(U){let L={icon:"noun_598334.svg",limit:1,shareTab:!0},ne={newInstance:r.sym(m.dir().uri+U+"/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("pictures"),shareTab:!0,tabTitle:U,view:"slideshow",noIndexHTML:!0};return W(L,ne)},$=function(U){let L={icon:"noun_681601.svg",limit:1,shareTab:!0},ne={newInstance:r.sym(m.dir().uri+"Files/"),pane:n.session.paneRegistry.byName("folder"),predicate:i.meeting("materialsFolder"),tabTitle:"Materials",noIndexHTML:!0};return W(L,ne)},M=function(){let U={icon:"noun_339237.svg",limit:1,shareTab:!0},L={newInstance:r.sym(m.dir().uri+"Attendees/index.ttl#this"),pane:n.session.paneRegistry.byName("contact"),predicate:i.meeting("attendeeGroup"),tabTitle:"Attendees",instanceClass:i.vcard("Group"),instanceName:N.label(e)+" attendees",noIndexHTML:!0};return W(U,L)},Q=function(U){let L={newBase:s+"SharedNotes/",predicate:o.meeting("sharedNotes"),tabTitle:"Shared Notes",pane:n.session.paneRegistry.byName("pad")};return W(U,L)},ee=function(U){te.askName(t,r,ue,i.foaf("name"),o.meeting("Meeting")).then(function(L){if(!L)return y();let ne=encodeURIComponent(L),K={newBase:s+ne+"/",predicate:o.meeting("subMeeting"),tabTitle:L,pane:n.session.paneRegistry.byName("meeting")};return W(U,K)}).catch(function(L){c("Error making new sub-meeting: "+L)})};function W(U,L){return new Promise(function(ne,K){let re=n.session.store;if(!L.useExisting){let pe=re.any(m,L.predicate);if(pe){if(U.limit&&U.limit===1&&!U.shareTab)return c("Already have "+pe+" as "+N.label(L.predicate)),c("Cant have two"),ne(null);if(U.shareTab)return console.log("Using existing "+pe+" as "+N.label(L.predicate)),ne({me:I,newInstance:pe,instanceClass:L.instanceClass})}}!I&&!L.me&&K(new Error("Username not defined for new tool")),L.me=L.me||I,L.newInstance=L.useExisting||L.newInstance||re.sym(L.newBase+"index.ttl#this"),L.pane.mintNew(n,L).then(function(pe){let be=O(pe.newInstance,pe.predicate,pe.tabTitle,pe.pane.icon);pe.view&&re.add(be,o.meeting("view"),pe.view,d),S(),re.fetcher.putBack(d,{contentType:"text/turtle"}).then(function(me){ne(pe)}).catch(function(me){K(me)})}).catch(function(pe){c(pe),K(pe)})})}let G=function(U){},R=function(U){let L=s+"Actions/",ne=n.session.store;if(ne.holds(m,i.meeting("actions"))){console.log("Ignored - already have actions");return}let K=ne.sym(L+"config.ttl"),re=ne.sym(L+"config.ttl#this"),pe=ne.sym(L+"state.ttl");ne.add(re,i.dc("title"),(ne.anyValue(m,i.cal("summary"))||"Meeting ")+" actions",K),ne.add(re,i.wf("issueClass"),i.wf("Task"),K),ne.add(re,i.wf("initialState"),i.wf("Open"),K),ne.add(re,i.wf("stateStore"),pe,K),ne.add(re,i.wf("assigneeClass"),i.foaf("Person"),K),ne.add(re,i.rdf("type"),i.wf("Tracker"),K),ne.add(re,i.rdf("type"),i.wf("Tracker"),K);let be=O(re,i.meeting("actions"),"Actions",B.iconBase+"noun_17020.svg");A(be,re,i.meeting("actions"))},H=function(U){let L=s+"Chat/",ne=n.session.store;if(ne.holds(m,i.meeting("chat"))){console.log("Ignored - already have chat");return}let K=ne.sym(L+"chat.ttl");ne.add(K,i.rdf("type"),i.meeting("Chat"),K);let re=O(K,i.meeting("chat"),"Chat",B.iconBase+"noun_346319.svg");A(re,K,i.meeting("chat"))},q=function(U){let L=n.session.store,ne=We.sym(ad+N.genUuid());if(L.holds(m,i.meeting("videoCallPage"))){console.log("Ignored - already have a videoCallPage");return}L.add(ne,i.rdf("type"),i.meeting("VideoCallPage"),d);let K=O(ne,i.meeting("videoCallPage"),"Video call",B.iconBase+"noun_260227.svg");L.add(K,i.meeting("view"),"iframe",d),S()},X=function(U){te.askName(t,r,ue,i.log("uri"),o.rdf("Resource")).then(function(L){if(!L)return y();let ne=n.session.store,K=o,re=ne.sym(L),pe=O(re,K.wf("attachment"),N.label(re),null);ne.add(pe,K.meeting("view"),"iframe",d),S()}).catch(function(L){c("Error making new sub-meeting: "+L)})},se=function(U){let L=n.session.store,ne=o,K=m.dir();if(U.limit&&U.limit===1&&L.holds(m,ne.wf("sharingControl"))){c("Ignored - already have "+N.label(k.predicate));return}let re=O(K,ne.wf("sharingControl"),"Sharing",B.iconBase+"noun_123691.svg");L.add(re,ne.meeting("view"),"sharing",d),S()},D=function(){let U={noun:"meeting"},L=function(K,re){l.mintNew(n,{newBase:re}).then(function(pe){let be=pe.newInstance;ue.removeChild(ne);let me=ue.appendChild(t.createElement("p"));me.setAttribute("style","font-size: 140%;"),me.innerHTML="Your <a target='_blank' href='"+be.uri+"'><b>new meeting</b></a> is ready to be set up. <br/><br/><a target='_blank' href='"+be.uri+"'>Go to your new meeting.</a>"}).catch(function(pe){ue.removeChild(ne),ue.appendChild(te.errorMessageBlock(t,pe))})},ne=Fe.selectWorkspace(t,U,L);ue.appendChild(ne)},J=[{icon:"noun_339237.svg",maker:j,hint:"Make a group of people",limit:1},{icon:"noun_346777.svg",maker:ae,hint:"Make a poll to schedule the meeting"},{icon:"noun_48218.svg",maker:G,limit:1,hint:"Add an agenda list",disabled:!0},{icon:"noun_79217.svg",maker:Q,hint:"Add a shared notepad"},{icon:"noun_346319.svg",maker:H,limit:1,hint:"Add a chat channel for the meeting"},{icon:"noun_17020.svg",maker:R,limit:1,hint:"Add a list of action items"},{icon:"noun_260227.svg",maker:q,limit:1,hint:"Add a video call for the meeting"},{icon:"noun_25830.svg",maker:X,hint:"Attach meeting materials",disabled:!1},{icon:"noun_123691.svg",maker:se,limit:1,hint:"Control Sharing",disabled:!1},{icon:"noun_66617.svg",maker:ee,hint:"Make a sub meeting",disabled:!1}],V=We.sym("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");We.parse(nd,r,V.doc().uri,"text/turtle");let le=_.appendChild(t.createElement("td"));le.classList.add("meetingToolBarIcons");let ie=le.appendChild(t.createElement("div"));ie.classList.add("meetingToolIconRow");let ue=_.appendChild(t.createElement("td")),fe=ie.appendChild(t.createElement("img"));fe.classList.add("meetingToolIcon","meetingToolIcon-visible","meetingToolIconAddButton");let ve=!1;fe.setAttribute("src",B.iconBase+"noun_19460_green.svg"),fe.setAttribute("title","Add another tool to the meeting");let Te=function(U){for(let L=0;L<Pe.length;L++)Pe[L].classList.toggle("meetingToolIcon-visible",U)},Le=function(U){ve=!ve,fe.classList.toggle("meetingToolIcon-highlighted",ve),Te(ve)},ye;Rt.checkUser().then(U=>{if(U){I=U,fe.addEventListener("click",Le);return}ye=Fe.loginStatusBox(t,L=>{L?(I=r.sym(L),ue.removeChild(ye),fe.addEventListener("click",Le)):(console.log("(Logged out)"),I=null)}),ye.setAttribute("style","margin: 0.5em 1em;"),ue.appendChild(ye)});let Pe=[];for(let U=0;U<J.length;U++)(function(){let ne=J[U],K=ie.appendChild(t.createElement("img"));K.classList.add("meetingToolIcon"),K.setAttribute("src",B.iconBase+ne.icon),ne.disabled&&K.classList.add("meetingToolIcon-disabled"),Pe.push(K),K.tool=ne;let re=ne.maker;ne.disabled||K.addEventListener("click",function(pe){v(K),re(ne)})})();let y=function(){ve=!1,Te(!1),fe.classList.remove("meetingToolIcon-highlighted")},v=function(U){ve=!1,Te(!1);for(let L=0;L<Pe.length;L++)Pe[L].classList.remove("meetingToolIcon-highlighted");U.classList.add("meetingToolIcon-visible","meetingToolIcon-highlighted"),fe.classList.remove("meetingToolIcon-highlighted")},x=function(U,L){if(r.holds(L,i.rdf("type"),i.meeting("Tool"))){let ne=r.any(L,i.meeting("target")),K=r.any(L,i.rdfs("label"));K=K?K.value:N.label(ne);let re=U.appendChild(t.createElement("div"));re.classList.add("meetingToolLabel"),re.textContent=K;let pe=r.any(L,i.meeting("icon"));if(pe){let me=U.appendChild(t.createElement("table")).appendChild(t.createElement("tr")),we=me.appendChild(t.createElement("td")),xe=me.appendChild(t.createElement("td")),ke=we.appendChild(t.createElement("img"));ke.classList.add("meetingToolIconImg"),ke.setAttribute("src",pe.uri),ke.setAttribute("title",K),xe.appendChild(re)}else U.appendChild(re)}else U.textContent=N.label(L)},P=function(U){let L=t.createElement("div"),ne=L.appendChild(t.createElement("p"));return ne.classList.add("meetingToolTip"),ne.textContent="Tip: "+U,L},T=function(U,L){if(U.innerHTML="",U.style+="border-color: #eed;",U.appendChild(t.createElement("h3")).textContent="Adjust this tab",r.holds(L,i.rdf("type"),i.meeting("Tool"))){let ne=We.sym("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#settings");te.appendForm(document,U,{},L,ne,m.doc(),h),te.deleteButtonWithCheck(t,U,"tab",function(){let re=r.the(m,i.meeting("toolList"));for(let me=0;me<re.elements.length;me++)if(re.elements[me].sameTerm(L)){re.elements.splice(me,1);break}let pe=r.any(L,i.meeting("target")),be=r.statementsMatching(L).concat(r.statementsMatching(void 0,void 0,L)).concat(r.statementsMatching(m,void 0,pe));r.remove(be),S()}).classList.add("meetingPaneDeleteButton")}else U.appendChild(t.createElement("h4")).textContent="(No adjustments available)"},C=function(U,L){let ne=null,K,re=null;U.innerHTML="";let pe=function(xe,ke){xe||(U.textContent=""+ke)},be=function(xe){let ke=U.appendChild(t.createElement("iframe"));ke.setAttribute("src",xe.uri),ke.classList.add("meetingPaneIframe"),ke.setAttribute("allow","microphone camera"),ke.setAttribute("name","disable-x-frame-options"),U.style.padding=0},me=function(){let xe={div:U,dom:t};U.appendChild(t.createElement("h4")).textContent="Meeting Participants";let ke=function(Ie){let _e=[We.st(m,i.meeting("particpantGroup"),Ie,m.doc())];r.updater.update([],_e,function(Ce,De,Be){De?re=Ie:c("Cant save participants group: "+Be)})};re=r.any(m,i.meeting("particpantGroup")),Rt.checkUser().then(Ie=>{if(Ie){let _e=typeof Ie=="string"?r.sym(Ie):Ie;id(_e).then(function(Ce){let Be=Ce.find(Wn=>Wn.label==="private")||Ce[0];if(!Be||!Be.index){c("No type index available for this user to load participants.");return}let nn={defaultNewGroupName:"Meeting Participants",selectedGroup:re};new te.PeoplePicker(xe.div,Be.index,ke,nn).render()}).catch(function(Ce){c("Could not load type indexes for participants: "+Ce)})}else c("Please log in to manage meeting participants.")})},we=function(){U.appendChild(t.createElement("h3")).textContent="Details of meeting";let xe=We.sym("https://solid.github.io/solid-panes/meeting/meetingDetailsForm.ttl#main");te.appendForm(document,U,{},m,xe,m.doc(),pe),U.appendChild(P("Drag URL-bar icons of web pages into the tab bar on the left to add new meeting materials.")),I=Rt.currentUser(),I&&r.add(m,i.dc("author"),I,d);let ke={noun:"meeting",me:I,statusArea:U,div:U,dom:t};Fe.registrationControl(ke,m,i.meeting("Meeting")).then(function(nn){console.log("Registration control finsished.")});let Ie={};_n.manageParticipation(t,U,d,m,I,Ie);let _e=U.appendChild(t.createElement("div")),Ce=_e.appendChild(t.createElement("img"));Ce.classList.add("meetingToolIconSpawn"),Ce.setAttribute("src",B.iconBase+"noun_145978.svg"),Ce.setAttribute("title","Make a fresh new meeting"),Ce.addEventListener("click",D);let De=_e.appendChild(t.createElement("a"));De.setAttribute("href","https://github.com/solid/solid-panes"),De.setAttribute("target","_blank");let Be=De.appendChild(t.createElement("img"));Be.classList.add("meetingToolIconForkGithub"),Be.setAttribute("src",B.iconBase+"noun_368567.svg"),Be.setAttribute("title","Fork me on github")};if(r.holds(L,i.rdf("type"),i.meeting("Tool"))){let xe=r.any(L,i.meeting("target"));if(xe.sameTerm(m)&&!r.any(L,i.meeting("view")))we();else{let ke=r.any(L,i.meeting("view"));ke=ke?ke.value:null,ke==="details"?we():ke==="peoplePicker"?me():ke==="iframe"?be(xe):(ne=ke?n.session.paneRegistry.byName(ke):null,K=U.appendChild(t.createElement("table")),K.classList.add("meetingPaneTableMain"),n.getOutliner(t).GotoSubject(xe,!0,ne,!1,void 0,K))}}else L.sameTerm(m)?we():L.sameTerm(L.doc())&&!r.holds(L,o.rdf("type"),o.meeting("Chat"))&&!r.holds(L,o.rdf("type"),o.meeting("PaneView"))||(K=U.appendChild(t.createElement("table")),n.getOutliner(t).GotoSubject(L,!0,void 0,!1,void 0,K))},k={dom:t};k.predicate=i.meeting("toolList"),k.subject=e,k.ordered=!0,k.orientation=1,k.renderMain=C,k.renderTab=x,k.renderTabSettings=T,k.backgroundColor=r.anyValue(e,i.ui("backgroundColor"))||"#ddddcc";let oe=f.appendChild(Ln.tabWidget(k));return Cn.preventBrowserDropEvents(t),te.makeDropTarget(oe.tabContainer,E,Y),te.makeDropTarget(le,E,Y),u}};import"rdflib";var sd={icon:B.iconBase+"noun_688606.svg",name:"tabbed",audience:[o.solid("PowerUser")],label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return o.meeting("Cluster").uri in r?"Tabbed":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=t.createElement("div");return(async()=>{if(!r.fetcher)throw new Error("Store has no fetcher");await r.fetcher.load(e),i.appendChild(Ln.tabWidget({dom:t,subject:e,predicate:r.any(e,o.meeting("predicate"))||o.meeting("toolList"),ordered:!0,orientation:r.anyValue(e,o.meeting("orientation"))||"0",renderMain:(a,l)=>{a.innerHTML="";let c=a.appendChild(n.dom.createElement("table"));n.getOutliner(n.dom).GotoSubject(l,!0,null,!1,void 0,c)},renderTab:(a,l)=>{let c=r.the(e,o.meeting("predicate"));a.appendChild(te.personTR(n.dom,c,l,{}))},backgroundColor:r.anyValue(e,o.ui("backgroundColor"))||"#ddddcc"}))})(),i}},Qa=sd;import*as Dt from"rdflib";import{store as ld}from"solid-logic";var ze=o,Or={icon:B.iconBase+"noun_346319.svg",name:"chat",audience:[ze.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.each(e,ze.wf("message")).length;return r>0?"Chat ("+r+")":t.holds(e,ze.rdf("type"),ze.meeting("Chat"))?"Meeting chat":t.holds(void 0,ze.rdf("type"),ze.foaf("ChatChannel"),e)?"IRC log":null},mintClass:ze.meeting("Chat"),mintNew:function(e,n){if(!confirm(`short Chat is deprecated in favor of long Chat.
Embedded chat for comments and existing short Chats will work.
You can report any issues at https://github.com/SolidOS/chat-pane ?

Do you really want to create a new deprecated short Chat?`))return;let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+"index.ttl#this"),a=i.doc();return t.add(i,ze.rdf("type"),ze.meeting("Chat"),a),t.add(i,ze.dc("title"),"Chat",a),t.add(i,ze.dc("created"),new Date,a),n.me&&t.add(i,ze.dc("author"),n.me,a),new Promise(function(l,c){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(h,m,d){m?l(n):c(new Error("FAILED to save new tool at: "+h+" : "+d))})})},render:function(e,n){let t=n.session.store,r=n.dom,i=function(m,d){let s=r.createElement("pre");s.setAttribute("style","background-color: "+d||"#eed;"),a.appendChild(s),s.appendChild(r.createTextNode(m))},a=r.createElement("div");a.setAttribute("class","chatPane");let l={},c;if(t.holds(e,ze.rdf("type"),ze.meeting("Chat")))c=e.doc();else if(t.any(e,o.wf("message"))){let h=ld.any(e,o.wf("message"));if(!h||h.termType!=="NamedNode")throw new Error("Chat subject has no linked message store");c=h.doc()}else if(t.holds(void 0,ze.rdf("type"),ze.foaf("ChatChannel"),e)||t.holds(e,ze.rdf("type"),ze.foaf("ChatChannel"))){let h=function(){let m=new Dt.Query("IRC log entries",null),d={};return["chan","msg","date","list","pred","creator","content"].forEach(function(u){m.vars.push(d[u]=Dt.variable(u))}),m.pat.add(d.chan,ze.foaf("chatEventList"),d.list),m.pat.add(d.list,d.pred,d.msg),m.pat.add(d.msg,ze.dc("date"),d.date),m.pat.add(d.msg,ze.dc("creator"),d.creator),m.pat.add(d.msg,ze.dc("description"),d.content),m};c=e.doc(),l.query=h()}else i("Unknown chat type","#eed");if(!c)throw new Error("Unable to determine chat message store");return a.appendChild(wt(r,t,e,c,l)),t.updater.addDownstreamChangeListener(c,function(){te.refreshTree(a)}),a}};import{authn as Bt}from"solid-logic";import{parse as dd}from"rdflib";function yn(...e){console.log(...e)}var Ot=o.meeting("LongChat"),Za="index.ttl#this",cd="noun_344563.svg",zr=tr.sidebarComponentStyle||" padding: 0.5em; width: 100%;",qr=tr.sidebarStyle||"overflow-x: auto; overflow-y: auto; border-radius: 1em; border: 0.1em solid white;",ot={CHAT_LOCATION_IN_CONTAINER:Za,icon:B.iconBase+"noun_1689339.svg",name:"long chat",label:function(e,n){let t=n.session.store;return t.holds(e,o.rdf("type"),o.meeting("LongChat"))?"Chat channnel":t.holds(e,o.rdf("type"),o.sioc("Thread"))?"Thread":t.any(e,o.sioc("content"))&&t.any(e,o.dct("created"))?"message":null},mintClass:Ot,mintNew:function(e,n){let t=e.session.store,r=t.updater;if(n.me&&!n.me.uri)throw new Error("chat mintNew:  Invalid userid "+n.me);let i=n.newInstance=n.newInstance||t.sym(n.newBase+Za),a=i.doc();t.add(i,o.rdf("type"),o.meeting("LongChat"),a),t.add(i,o.dc("title"),"Chat channel",a),t.add(i,o.dc("created"),new Date,a),n.me&&t.add(i,o.dc("author"),n.me,a);let l=(c,h,m)=>`
    @prefix : <#>.
    @prefix acl: <http://www.w3.org/ns/auth/acl#>.
    @prefix foaf: <http://xmlns.com/foaf/0.1/>.
    @prefix lon: <./${h}>.

    :ControlReadWrite
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agent <${c.uri}>;
        acl:default lon:;
        acl:mode acl:Control, acl:Read, acl:Write.
    :Read
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass foaf:Agent;
        acl:default lon:;
        acl:mode acl:Read.
    :Read${m}
        a acl:Authorization;
        acl:accessTo lon:;
        acl:agentClass acl:AuthenticatedAgent;
        acl:default lon:;
        acl:mode acl:Read, acl:${m}.`;return new Promise(function(c,h){r.put(a,t.statementsMatching(void 0,void 0,void 0,a),"text/turtle",function(m,d,s){d?c(n):h(new Error("FAILED to save new chat channel at: "+m+" : "+s))}).then(m=>new Promise((d,s)=>{n.me&&(t.fetcher.webOperation("PUT",n.newBase+".acl",{data:l(n.me,"","Append"),contentType:"text/turtle"}),t.fetcher.webOperation("PUT",n.newBase+"index.ttl.acl",{data:l(n.me,"index.ttl","Write"),contentType:"text/turtle"})),d(n)}))})},render:function(e,n,t){let r=n.dom,i=n.session.store,a=`
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
`,l=i.sym("https://solid.github.io/solid-panes/longCharPane/preferencesForm.ttl#this"),c=l.doc();i.holds(void 0,void 0,void 0,c)||dd(a,i,c.uri,"text/turtle");let h=i.statementsMatching(null,o.ui.property,null,c).map(D=>D.object);async function m(D){let{dom:J,noun:V}=D,le=J.createElement("div");le.appendChild(d(le)),le.style=zr,le.style.minWidth="25em",le.style.maxHeight=O;let ie=le.appendChild(J.createElement("table")),ue=ie.appendChild(J.createElement("tr")),fe=ie.appendChild(J.createElement("tr")),ve=Bt.currentUser();return ve&&(await Fe.registrationControl({noun:V,me:ve,statusArea:fe,dom:J,div:ue},_,Ot),yn("Registration control finsished."),le.appendChild(ir.renderPreferencesForm(_,Ot,l,{noun:V,me:ve,statusArea:fe,div:le,dom:J,kb:i}))),le}function d(D){function J(){D.parentNode.removeChild(D)}let V=te.button(n.dom,B.iconBase+"noun_1180156.svg","close",J);return V.style.float="right",V.style.margin="0.7em",delete V.style.backgroundColor,V}async function s(D){G||(G=await m({dom:r,noun:"chat room"}));let J=G;J&&(ae.contains(J)?(J.remove(),G=null):ae.appendChild(J))}function u(D,J){let V=r.createElement("div"),le=Bt.currentUser();if(!le)return V;let ie={div:V,dom:r,noun:J,statusArea:V,me:le,refreshTarget:D},fe=[n.session.paneRegistry.byName("chat")];return Un.newThingUI(ie,n,fe),V}async function p(D,J){let V=r.createElement("div"),le={dom:r,div:V,noun:J};return await Fe.registrationList(le,{public:!0,private:!0,type:D}),V.appendChild(u(V,J)),V}let g=null;async function f(D){if(!g){let V=r.createElement("div");g=V,V.style=zr,V.style.maxHeight=O,V.appendChild(d(V)),V.appendChild(await p(o.meeting("LongChat"),"chat"))}let J=g;J&&(E.contains(J)?J.remove():E.appendChild(J))}let b=null;function w(D){if(!b){let V=r.createElement("div");b=V,V.style=zr,V.style.maxHeight=O,V.appendChild(d(V));let le=Bt.currentUser();if(!le){alert("Should be logeed in for partipants panel");return}_n.manageParticipation(r,V,_.doc(),_,le,{})}let J=b;J&&(E.contains(J)?(J.remove(),b=null):E.appendChild(J))}let _=e,I=null,S=null;if(i.holds(e,o.rdf("type"),o.meeting("LongChat")))yn("@@@ Chat channnel");else if(i.holds(e,o.rdf("type"),o.sioc("Thread"))){yn("Thread is subject "+e.uri),S=e;let D=e,J=i.the(null,o.sioc("has_reply"),D,D.doc());if(!J)throw new Error("Thread has no root message "+S);if(_=i.any(null,o.wf("message"),J),!_)throw new Error("Thread root has no link to chatChannel")}else if(i.any(e,o.sioc("content"))&&i.any(e,o.dct("created"))&&(yn("message is subject "+e.uri),I=e,_=i.any(null,o.wf("message"),I),!_))throw new Error("Message has no link to chatChannel");let A=r.createElement("div"),O="20cm",z=A.appendChild(r.createElement("table"));z.style.maxHeight='12"';let F=z.appendChild(r.createElement("tr")),E=F.appendChild(r.createElement("td")),Y=F.appendChild(r.createElement("td")),j=F.appendChild(r.createElement("td")),ae=F.appendChild(r.createElement("td")),de=z.appendChild(r.createElement("tr"));E.style=qr,E.style.paddingRight="1em",j.style=qr,j.style.paddingLeft="1em",ae.style=qr,ae.style.paddingLeft="1em",de.appendChild(r.createElement("td"));let $=de.appendChild(r.createElement("td"));de.appendChild(r.createElement("td"));let Q=te.button(r,B.iconBase+"noun_339237.svg","participants ...");$.appendChild(Q),Q.addEventListener("click",w);let W=te.button(r,B.iconBase+"noun_1689339.svg","List of other chats ...");$.appendChild(W),W.addEventListener("click",f);let G=null,R=te.button(r,B.iconBase+cd,"Setting ...");$.appendChild(R),R.style.float="right",R.addEventListener("click",s),A.setAttribute("class","chatPane");let H={infinite:!0},q={noun:"chat room",div:A,dom:r,me:Bt.currentUser()};async function X(D,J){yn("@@@@ showThread thread "+D);let V={infinite:!0};V.thread=D,V.includeRemoveButton=!0,V.authorDateOnLeft=J.authorDateOnLeft,V.newestFirst=J.newestFirst,j.innerHTML="",yn("Options for showThread message Area",V);let le=await rr(r,i,_,V);le.style.resize="both",le.style.overflow="auto",le.style.maxHeight=O,j.appendChild(le)}async function se(){let D;try{D=await ir.getPreferencesForClass(_,Ot,h,q)}catch(V){te.complain(q,V)}for(let V in D)H[V.split("#")[1]]=D[V];I&&(H.selectedMessage=I),t?.solo&&(H.solo=!0),S?H.thread=S:H.showThread=X;let J=await rr(r,i,_,H);J.style.resize="both",J.style.overflow="auto",J.style.maxHeight=O,Y.appendChild(J)}return se().then(()=>yn("async - chat pane built")),A}};import{authn as yf,store as vf}from"solid-logic";import{NamedNode as Cf,st as _f}from"rdflib";import{authn as zt}from"solid-logic";import*as Se from"rdflib";var ud=await(await fetch(he(`@prefix dc: <http://purl.org/dc/elements/1.1/>.
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
`,"text/turtle"))).text();Re(he(`.schedule-pane__table {
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
`,"text/css"));Re(he(`:root {
  --icon-sm: 1.8em;
  --color-background-row-default: white;
  --color-background-row-alternate: #f0f0f0;
}`,"text/css"));var st=o,pd=[st.sched("No"),st.sched("Maybe"),st.sched("Yes")];function Bn(e){let n=e.shift();n&&n()}var $r={icon:B.iconBase+"noun_346777.svg",name:"schedule",audience:[st.solid("PowerUser")],label:function(e,n){return n.session.store.findTypeURIs(e)["http://www.w3.org/ns/pim/schedule#SchedulableEvent"]?"Scheduling poll":null},mintClass:st.sched("SchedulableEvent"),mintNew:function(e,n){return new Promise(function(t,r){let i=o,a=e.session.store,l=[],c=!1,h=n.newBase,m=n.useExisting||Se.sym(n.newBase+"index.ttl#this"),d=function(z){c||(c=!0,l.length=0,console.log("Error in Schedule Pane: Error constructing new scheduler: "+z),r(new Error(z)))},s=function(z,F){z||d(F)},u=function(z,F,E){let Y=Se.graph(),j=Se.Namespace("http://www.w3.org/ns/auth/acl#"),ae=Y.sym(F+"#a1"),de=Y.sym(F),$=Y.sym(z);return Y.add(ae,o.rdf("type"),j("Authorization"),de),Y.add(ae,j("accessTo"),$,de),Y.add(ae,j("agent"),b,de),Y.add(ae,j("mode"),j("Read"),de),Y.add(ae,j("mode"),j("Write"),de),Y.add(ae,j("mode"),j("Control"),de),ae=Y.sym(F+"#a2"),Y.add(ae,o.rdf("type"),j("Authorization"),de),Y.add(ae,j("accessTo"),$,de),Y.add(ae,j("agentClass"),i.foaf("Agent"),de),Y.add(ae,j("mode"),j("Read"),de),E&&Y.add(ae,j("mode"),j("Write"),de),Se.serialize(de,Y,F,"text/turtle")},p=function(F,E,Y){let j=!1,ae=function($,M){j||(j=!0,Y($,M))},de=a.any(a.sym(F),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(de){let $=u(F,de.uri,E);return g.webOperation("PUT",de.uri,{data:$,contentType:"text/turtle"}).then(M=>ae(!0)).catch(M=>{ae(!1,M.message)})}else return g.load(F).then(()=>{let $=a.any(a.sym(F),a.sym("http://www.iana.org/assignments/link-relations/acl"));if(!$)throw new Error("No Link rel=ACL header for "+F);let M=u(F,$.uri,E);return g.webOperation("PUT",$.uri,{data:M,contentType:"text/turtle"})}).then($=>ae(!0)).catch($=>{ae(!1,$.message)})},g=a.fetcher,f=a.updater,b=n.me||zt.currentUser();if(!b){console.log("MUST BE LOGGED IN"),alert("NOT LOGGED IN"),r(new Error("Schedule pane requires a logged-in user"));return}let w=m.dir();if(!w)throw new Error("Schedule pane needs a base directory to mint a new poll");let _=w.uri,I,S;if(n.useExisting){S=n.useExisting;let z=m.dir();if(!z)throw new Error("Existing schedule instance needs a containing directory");if(h=z.uri,I=S.doc(),n.newBase)throw new Error("mint new scheduler: Illegal - have both new base and existing event")}else I=a.sym(h+"details.ttl"),S=a.sym(I.uri+"#event");let A=a.sym(h+"results.ttl"),O=n.noIndexHTML?[]:[{local:"index.html",contentType:"text/html"}];for(let z=0;z<O.length;z++){let F=O[z];(function(j){l.push(function(){let ae=h+j.local;console.log("Copying "+_+j.local+" to "+ae);let de=function(){p(ae,!1,function($,M){$?Bn(l):(s($,"FAILED to set ACL "+ae+" : "+M),console.log("FAILED to set ACL "+ae+" : "+M))})};a.fetcher.webCopy(_+j.local,h+j.local,j.contentType).then(()=>zt.checkUser()).then($=>{b=$,de()}).catch($=>{console.log("FAILED to copy "+_+j.local+" : "+$.message),s(!1,"FAILED to copy "+_+j.local+" : "+$.message)})})})(F)}l.push(function(){a.add(S,i.rdf("type"),i.sched("SchedulableEvent"),I),b&&(a.add(S,i.dc("author"),b,I),a.add(S,i.foaf("maker"),b,I)),a.add(S,i.dc("created"),Se.literal(new Date().toISOString(),Se.sym("http://www.w3.org/2001/XMLSchema#dateTime")),I),a.add(S,i.sched("resultsDocument"),I),f.put(I,a.statementsMatching(void 0,void 0,void 0,I),"text/turtle",function(F,E,Y){E?Bn(l):(s(E,"FAILED to save new scheduler at: "+I+" : "+Y),console.log("FAILED to save new scheduler at: "+I+" : "+Y))})}),l.push(function(){a.fetcher.webOperation("PUT",A.uri,{data:"",contentType:"text/turtle"}).then(()=>{Bn(l)}).catch(z=>{s(!1,"Failed to initialize empty results file: "+z.message)})}),l.push(function(){p(A.uri,!0,function(z,F){s(z,"Failed to set Read-Write ACL on results file: "+F),z&&Bn(l)})}),l.push(function(){p(I.uri,!1,function(z,F){s(z,"Failed to set read ACL on configuration file: "+F),z&&Bn(l)})}),l.push(function(){c||(c=!0,console.log("Finished minting new scheduler"),n.newInstance=S,t(n))}),Bn(l)})},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=e,l="app-when-can-we.w3.org";function c(ie){let ue=n.environment??{};ie.dataset.layout=ue.layout??"desktop"}let h=r.fetcher,m=r.updater,d=!1,s=e,u=e.doc(),p=u.dir();if(!p)throw new Error("Schedule pane needs a containing directory for its details document");let g=p.uri,f=Se.sym(g+"results.ttl"),b="https://solidos.github.io/solid-panes/schedule/formsForSchedule.ttl",w=r.sym(b+"#form1"),_=r.sym(b+"#form2"),I=r.sym(b+"#form3");Se.parse(ud,r,b,"text/turtle");let S=function(ie,ue){ie||R.appendChild(te.errorMessageBlock(t,ue,"pink"))},A=function(ie){for(;ie.firstChild;)ie.removeChild(ie.firstChild);return ie},O=function(ie,ue){let fe=r.any(ue,o.ui("backgroundColor"));fe&&(ie.classList.add("schedule-pane__cell"),ie.setAttribute("style","background-color: "+fe+";"))},z=null;zt.checkUser().then(ie=>{z=ie??null,q&&q.refresh(),ie&&d&&(d=!1,de())}),console.log("me: "+z);let F=function(){let ie=Fe.newAppInstance(t,{noun:"scheduler",appPathSegment:l},function(ue,fe){return E(Se.sym(ue||fe))});return ie.firstChild instanceof HTMLElement&&ie.firstChild.classList.add("schedule-pane__button"),ie},E=function(ie){let ue=r.any(ie,i.space("uriPrefix")),fe="";ue?fe=ue.value:fe=ie.uri.split("#")[0],fe.slice(-1)!=="/"&&(Se.log.error(l+": No / at end of uriPrefix "+fe),fe=fe+"/");let ve=new Date;fe+=l+"/id"+ve.getTime()+"/",Y(s,fe)},Y=function(ie,ue){let fe={thisInstance:ie,newBase:ue};$r.mintNew(n,fe).then(function(ve){if(!ve.newInstance)throw new Error("New scheduler instance was not returned");let Te=R.appendChild(t.createElement("p"));Te.setAttribute("style","font-size: 140%;"),Te.innerHTML="Your <a href='"+ve.newInstance.uri+"'><b>new scheduler</b></a> is ready to be set up. <br/><br/><a href='"+ve.newInstance.uri+"'>Say when you what days work for you.</a>"}).catch(function(ve){S(!1,"Error createing new scheduler at "+fe.newInstance+": "+ve)})},j=function(){console.log("getforms()"),ae()},ae=function(){console.log("getDetails()"),h.nowOrWhenFetched(u.uri,void 0,function(ie,ue){if(console.log("getDetails() ok? "+ie),!ie)return S(ie,ue);de()})},de=function(){console.log("showAppropriateDisplay()"),zt.checkUser().then(ue=>{if(!ue)return $();if(!r.updater.editable(u.uri,r)||r.holds(e,i.rdf("type"),i.wf("TemplateInstance"))){M();return}r.any(e,i.sched("ready"))?W():ee()})},$=function(){A(se);let ue={div:R,dom:t};Fe.ensureLoggedIn(ue).then(fe=>{z=fe.me??null,d=!1,de()})},M=function(){let ue=A(se);ue.appendChild(Fe.newAppInstance(t,{noun:"poll",appPathSegment:l},function(Le,ye){return E(Se.sym(Le||ye))})),ue.appendChild(t.createElement("hr"));let fe=ue.appendChild(t.createElement("p"));fe.textContent="Where would you like to store the data for the poll?  Give the URL of the directory where you would like the data stored.";let ve=ue.appendChild(t.createElement("input"));ve.setAttribute("type","text"),ve.size=80,ve.label="base URL",ve.autocomplete="on",ue.appendChild(t.createElement("br"));let Te=ue.appendChild(t.createElement("button"));Te.classList.add("schedule-pane__button"),Te.textContent="Start new poll at this URI",Te.addEventListener("click",function(Le){let ye=ve.value;ye.slice(-1)!=="/"&&(ye+="/"),Y(s,ye)})},Q=t.createElement("button"),ee=function(){A(V);let ie=se;r.any(e,i.sched("allDay"))||r.add(e,i.sched("allDay"),Se.literal("true",Se.sym("http://www.w3.org/2001/XMLSchema#boolean")),u);let ue=!0,fe=0,ve=!1,Te=function(T){return!!T.querySelector("input, select, textarea, button")},Le=function(T,C){if(!T)return C;let k=(T.value||"").toLowerCase();return k==="true"||k==="1"?!0:k==="false"||k==="0"?!1:C},ye=function(T){let C=Le(r.any(e,i.sched("allDay")),!0),k=r.sym(b+(C?"#AllDayForm2":"#NotAllDayForm2"));te.appendForm(document,T,{},e,k,u,S)},Pe=function(T,C=!1){if(Array.from(T.querySelectorAll("input, select, textarea")).forEach(be=>{be.classList.add("schedule-pane__form-control"),be.tagName.toLowerCase()==="textarea"&&be.classList.add("schedule-pane__form-control--textarea")}),Array.from(T.querySelectorAll('div[style*="border: 0.05em solid"]')).forEach(be=>{be.classList.add("schedule-pane__panel")}),Array.from(T.querySelectorAll("h3")).forEach(be=>{be.classList.add("schedule-pane__form-heading"),(be.textContent||"").trim().toLowerCase()==="time proposals"&&(be.classList.add("schedule-pane__form-heading--time-proposals"),be.closest(".schedule-pane__panel")?.classList.add("schedule-pane__panel--time-proposals"))}),!C)return;Array.from(T.querySelectorAll(".formFieldName")).forEach(be=>{let me=be.parentElement,we=(be.textContent||"").trim().toLowerCase();me&&((we==="summary"||we==="location")&&me.classList.add("schedule-pane__field-row--compact"),we==="comment"&&me.classList.add("schedule-pane__field-row--comment"))});let re=T.querySelector("textarea")?.parentElement?.parentElement,pe=re?.parentElement;pe&&pe.classList.add("schedule-pane__field-row--comment"),re&&re.classList.add("schedule-pane__field-value--comment")},y=function(T){let C=T.firstElementChild;return!C||T.childElementCount!==1?T:C};if(ue){let T=[w,_,I],C=[];fe=0;for(let L=0;L<T.length;L++){let ne=t.createElement("div");te.appendForm(document,ne,{},e,T[L],u,S),Pe(ne,L===0),L===1&&!Te(ne)&&(ye(ne),Pe(ne)),C.push(y(ne))}let k=function(){A(se).appendChild(C[fe]),fe===0?oe.setAttribute("disabled",""):oe.removeAttribute("disabled"),fe===C.length-1?(U.setAttribute("disabled",""),ve||(V.appendChild(x),V.appendChild(Q),ve=!0)):U.removeAttribute("disabled")},oe=A(J).appendChild(t.createElement("button"));oe.classList.add("schedule-pane__button"),oe.textContent="<- go back",oe.addEventListener("click",function(L){fe>0&&(fe-=1,k())},!1);let U=A(le).appendChild(t.createElement("button"));U.classList.add("schedule-pane__button"),U.textContent="continue ->",U.addEventListener("click",function(L){fe<C.length-1&&(fe+=1,k())},!1),k()}else{let T=ie.appendChild(t.createElement("table"));te.appendForm(document,T,{},e,w,u,S),Pe(T,!0),te.appendForm(document,T,{},e,_,u,S),Pe(T),te.appendForm(document,T,{},e,I,u,S),Pe(T),V.appendChild(Q)}let v=[];v.push(Se.st(e,i.sched("availabilityOptions"),i.sched("YesNoMaybe"),u)),v.push(Se.st(e,i.sched("ready"),Se.literal(new Date().toISOString(),Se.sym("http://www.w3.org/2001/XMLSchema#dateTime")),u)),v.push(Se.st(e,i.sched("results"),f,u)),Q.classList.add("schedule-pane__button"),Q.textContent="Go to poll",Q.addEventListener("click",function(T){r.any(e,i.sched("ready"))?(W(),le.appendChild(x)):(le.appendChild(x),r.updater.update([],v,function(C,k,oe){k?W():S(k,oe)}))},!1);let x=t.createElement("button");x.classList.add("schedule-pane__button");let P=x.appendChild(t.createElement("img"));P.setAttribute("src",B.iconBase+"noun_480183.svg"),P.classList.add("schedule-pane__button-icon"),x.addEventListener("click",function(T){let C=r.anyValue(e,i.cal("summary"))||r.anyValue(e,i.dc("title"))||"",k="mailto:"+r.each(e,i.sched("invitee")).map(function(oe){let U=r.any(oe,i.foaf("mbox"));return U?U.uri.replace("mailto:",""):""}).join(",")+"?subject="+encodeURIComponent(C+"-- When can we meet?")+"&body="+encodeURIComponent(C+`

When can you?

See `+e+`
`);console.log("Mail: "+k),window.location.href=k},!1)};function W(){h.nowOrWhenFetched(f.uri,void 0,(ie,ue,fe)=>{ie?(A(se),G()):fe.status===404?(console.log("Initializing details file "+f),m.put(f,[],"text/turtle",function(ve,Te,Le){Te?(A(se),G()):(S(Te,"FAILED to create results file at: "+f.uri+" : "+Le),console.log("FAILED to craete results file at: "+f.uri+" : "+Le))})):S(ie,"FAILED to read results file: "+ue)})}function G(){let ie=r.any(a,i.cal("summary")),ue=r.any(a,i.cal("comment")),fe=r.any(a,i.cal("location")),ve=se;ie&&(ve.appendChild(t.createElement("h3")).textContent=ie.value),fe&&(ve.appendChild(t.createElement("address")).textContent=fe.value),ue&&(ve.appendChild(t.createElement("p")).textContent=ue.value);let Te=r.any(a,i.dc("author"));if(Te){let C=r.any(Te,i.foaf("name"));C&&(ve.appendChild(t.createElement("p")).textContent=C.value)}let Le=new Se.Query("Responses",0),ye={};ye.time=Se.variable("time"),ye.author=Se.variable("author"),ye.value=Se.variable("value"),ye.resp=Se.variable("resp"),ye.cell=Se.variable("cell"),Le.vars.push(ye.time,ye.author,ye.value,ye.resp,ye.cell),Le.pat.add(a,i.sched("response"),ye.resp),Le.pat.add(ye.resp,i.dc("author"),ye.author),Le.pat.add(ye.resp,i.sched("cell"),ye.cell),Le.pat.add(ye.cell,i.sched("availabilty"),ye.value),Le.pat.add(ye.cell,i.cal("dtstart"),ye.time);let Pe={set_x:[],set_y:[]};Pe.set_x=r.each(e,i.sched("option")),Pe.set_x=Pe.set_x.map(function(C){return r.any(C,i.cal("dtstart"))}).filter(function(C){return!!C}),Pe.set_y=r.each(e,i.sched("response")),Pe.set_y=Pe.set_y.map(function(C){return r.any(C,i.dc("author"))}).filter(function(C){return!!C});let y=r.each(a,i.sched("option")).map(function(C){return r.any(C,i.cal("dtstart"))}).filter(function(C){return!!C}),v=function(){let C=ve.appendChild(Ci.matrixForQuery(t,Le,ye.time,ye.author,ye.value,Pe,function(){}));C.setAttribute("class","matrix");let k=t.createElement("button");k.classList.add("schedule-pane__button");let oe=t.createElement("img");oe.setAttribute("src",B.iconBase+"noun_479395.svg"),oe.classList.add("schedule-pane__button-icon"),k.appendChild(oe),k.addEventListener("click",function(U){k.disabled=!0,r.fetcher.refresh(f,function(L,ne){L?(C.refresh(),k.disabled=!1):console.log("Cant refresh matrix"+ne)})},!1),A(V),V.appendChild(k)},x={},P={div:V,dom:t};Fe.ensureLoggedIn(P).then(C=>{let k=C.me;if(!k)return;let oe=f;Pe.set_y=Pe.set_y.filter(function(re){return!re.sameTerm(k)}),Pe.set_y.push(k),Pe.cellFunction=function(re,pe,be,me){if(me!==null&&r.fetcher.nowOrWhenFetched(me.uri.split("#")[0],void 0,function(we,xe){we&&O(re,me)}),be.sameTerm(k)){let we=function(){return O(re,me),""},xe={},ke=i.sched("availabilty");if(!pe)return"";let Ie=x[pe.toNT()],_e=te.makeSelectForOptions(t,r,Ie,ke,pd,xe,f,we);re.appendChild(_e)}else me!==null&&(re.textContent=N.label(me));return""};let U=r.each(a,i.sched("response")),L=null;U.forEach(function(re){r.holds(re,i.dc("author"),k)&&(L=re)});let ne=[],K=te.newThing(oe).uri;L===null?(L=Se.sym(K+"_response"),ne.push(Se.st(a,i.sched("response"),L,oe)),ne.push(Se.st(L,i.dc("author"),k,oe))):r.each(L,i.sched("cell")).forEach(function(pe){let be=r.any(pe,i.cal("dtstart"));be&&(x[be.toNT()]=pe)});for(let re=0;re<y.length;re++){let pe=y[re];if(!pe||x[pe.toNT()])continue;let be=Se.sym(K+"_"+re);ne.push(Se.st(L,i.sched("cell"),be,oe)),ne.push(Se.st(be,i.cal("dtstart"),pe,oe)),x[pe.toNT()]=be}ne.length?r.updater.update([],ne,function(re,pe,be){pe?v():S(pe,be)}):v()});let T=r.any(e,i.foaf("maker"));if(!T||!z||T.sameTerm(z)){let C=t.createElement("button");C.classList.add("schedule-pane__button");let k=t.createElement("img");k.setAttribute("src",B.iconBase+"noun_344563.svg"),k.classList.add("schedule-pane__button-icon"),C.appendChild(k),C.addEventListener("click",function(oe){A(ve),ee()},!1),A(J),J.appendChild(C)}A(le),le.appendChild(F())}let R=t.createElement("div");R.classList.add("schedule-pane"),c(R);let H=R.appendChild(t.createElement("table"));H.classList.add("schedule-pane__table");let q=null,se=H.appendChild(t.createElement("tr")).appendChild(t.createElement("td"));se.classList.add("schedule-pane__main-cell"),se.setAttribute("colspan","3");let D=H.appendChild(t.createElement("tr"));D.classList.add("naviMenu","schedule-pane__nav");let J=D.appendChild(t.createElement("td")),V=D.appendChild(t.createElement("td")),le=D.appendChild(t.createElement("td"));return j(),R}};import*as In from"rdflib";var md=o,eo={icon:B.iconBase+"noun_62007.svg",name:"travel expenses",audience:[md.solid("PowerUser")],label:function(e,n){let t=n.session.store,r=t.findTypeURIs(e);return o.qu("Transaction")in t.findSuperClassesNT(e)?"by Trip":r["http://www.w3.org/ns/pim/trip#Trip"]?"Trip $":null},render:function(e,n){let t=n.dom,r=n.store,i=o,a=In.Namespace("http://www.w3.org/2002/12/cal/ical#"),l=In.Namespace("http://www.w3.org/ns/pim/trip#"),c=t.createElement("div");c.setAttribute("class","transactionPane"),c.innerHTML="<h2>Trip transactions</h2>";let h=function(u,p){p===void 0&&(p="color: grey");let g=t.createElement("pre");g.setAttribute("style",p),c.appendChild(g),g.appendChild(t.createTextNode(u))},m=r.findTypeURIs(e),d=function(u,p){let g=new In.Query(N.label(u)),f=["date","transaction","comment","type","in_USD"],b={};f.forEach(function(S){g.vars.push(b[S]=In.variable(S))}),g.pat.add(b.transaction,l("trip"),u);let w=r.formula();w.add(b.transaction,i.rdf("type"),b.type),g.pat.optional.push(w),g.pat.add(b.transaction,o.qu("date"),b.date),w.add(b.transaction,i.rdfs("comment"),b.comment),g.pat.optional.push(w),g.pat.add(b.transaction,o.qu("in_USD"),b.in_USD);let I=Nn(t,{query:g,onDone:function(){let S={},A=r.each(void 0,l("trip"),u);A.forEach(function(E){let Y=r.the(E,i.rdf("type"));if(Y||(Y=o.qu("ErrorNoType")),Y&&Y.uri){let j=Y.uri;S[j]||(S[j]=0);let ae=r.any(E,o.qu("in_USD"));ae||h("    @@ No amount in USD: "+ae+" for "+E),ae&&(S[j]=S[j]+parseFloat(ae.value))}});let O="",z=0,F=0;for(let E in S)O+=N.label(r.sym(E))+": "+S[E]+"; ",z++,F+=S[E];h("Totals of "+A.length+" transactions: "+O,""),z>1&&h("Overall net: "+F,"text-treatment: bold;")}});p.appendChild(I)};if(o.qu("Transaction")in r.findSuperClassesNT(e)){let s=r.each(void 0,i.rdf("type"),e),u=[],p=[];for(let f=0;f<s.length;f++){let b=s[f],w=r.any(b,l("trip"));if(!w)u.push(b);else{b in p||(p[w]={total:0,transactions:[]});let _=r.any(b,o.qu("in_USD"));_&&(p[w].total+=_);let I=r.any(b,o.qu("date"));p[w.toNT()].transactions.push([I,b])}}let g=[];for(let f in p){let b=r.fromNT(f);g.push([r.any(b,a("dtstart")),b])}g.sort();for(let f=0;f<g.length;f++){let b=g[f][1];d(b,c)}}else m["http://www.w3.org/ns/pim/trip#Trip"]&&d(e,c);return c}};Re(he(`.image-pane__image {
  max-width: 100%;
  max-height: 100%;
}
`,"text/css"));function no(e,n,t){let r=e.fetcher.getHeader(n,"content-type");if(!r)return!1;for(let i of r)for(let a of t)if(i.includes(a))return!0;return!1}var to={icon:B.originalIconBase+"tango/22-image-x-generic.png",name:"image",label:function(e,n){let t=n.session.store;return!(t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/dc/terms/Image"))||no(t,e,["image/"]))||no(t,e,["application/pdf"])?null:"Image"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","image-pane");let a=t.createElement("img");return r.fetcher._fetch(e.uri).then(function(l){return l.blob()}).then(function(l){let c=URL.createObjectURL(l);a.setAttribute("src",c)}).catch(function(l){a.setAttribute("alt","Unable to load image"),ce.warn("Unable to load image resource: "+l)}),a.classList.add("image-pane__image"),i.appendChild(a),i}};import*as qt from"rdflib";var fd=o,ro={icon:B.iconBase+"noun_1619.svg",name:"playlistSlot",audience:[fd.solid("PowerUser")],label:function(e,n){let t=n.session.store;return t.anyStatementMatching(e,o.rdf("type"),t.sym("http://purl.org/ontology/pbo/core#PlaylistSlot"))?"Playlist Slot":null},render:function(e,n){let t=n.dom;function r(f,b){if(!f)return{html5:!0};let w=f.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-_%]+)/i),_=f.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),I=f.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),S=f.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);if(w)return{youtube:w};if(_)return{vimeo:_};if(I)return{dailymotion:I};if(S)return{vk:S}}let i=function(f,b){if(!b)return f;let w=t.createElement("a");return w.setAttribute("href",b),w.appendChild(f),w.addEventListener("click",te.openHrefInOutlineMode,!0),w},a=function(f){return t.createTextNode(f)},l=n.session.store,c=l.any(e,qt.sym("http://purl.org/ontology/pbo/core#playlist_item")),h=l.any(e,qt.sym("http://purl.org/ontology/olo/core#index")),m=c.uri,d=r(m),s=t.createElement("div"),u;d&&d.youtube?(m=m.replace("watch?v=","embed/"),s.setAttribute("class","imageView"),u=t.createElement("IFRAME"),u.setAttribute("src",m),u.setAttribute("frameborder",0),u.setAttribute("style","width: 100%; aspect-ratio: 16/9; max-width: 100%; border: 0;"),u.setAttribute("allowfullscreen","true")):(s.setAttribute("class","imageView"),u=t.createElement("IMG"),u.setAttribute("src",c.value),u.setAttribute("style","max-width: 100%; height: auto;"));let p;if(h){let f=l.statementsMatching(null,qt.sym("http://purl.org/ontology/olo/core#index")),b=[];for(let O=0;O<f.length;O++)f[O]&&b.push(parseInt(f[O].object.value,10));h=parseInt(h.value,10),p=t.createElement("div");let w=b[(b.indexOf(h)-1+b.length)%b.length],_=b[(b.indexOf(h)+1+b.length)%b.length],I=i(a("<<"),e.uri.split("#")[0]+"#"+w);p.appendChild(I);let S=t.createElement("span");S.innerHTML=" Playlist slot : "+h+" ",p.appendChild(S);let A=i(a(">>"),e.uri.split("#")[0]+"#"+_);p.appendChild(A)}let g=t.createElement("TR");return g.appendChild(u),p&&g.appendChild(p),s.appendChild(g),s}};import*as io from"rdflib";var ao={icon:B.iconBase+"noun_1619.svg",name:"video",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=io.Util.mediaTypeClass("video/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play video";return null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div"),a=i.appendChild(r.createElement("video"));return a.setAttribute("controls","yes"),t.fetcher._fetch(e.uri).then(function(l){return l.blob()}).then(function(l){let c=URL.createObjectURL(l);a.setAttribute("src",c)}),a.setAttribute("width","100%"),i}};import*as oo from"rdflib";var On=o,so={icon:B.iconBase+"noun_534313.svg",name:"audio",label:function(e,n){let r=n.session.store.findTypeURIs(e),i=oo.Util.mediaTypeClass("audio/*").uri.split("*")[0];for(let a in r)if(a.startsWith(i))return"Play audio";return null},render:function(e,n){let t=n.session.store,r=n.dom,i={autoplay:!1,chain:!0,chainAlbums:!0,loop:!1},a=function(_){let I=_.lastIndexOf(".");if(I<0)return _;let S=_.lastIndexOf("/");return I<S?_:_.slice(0,I)},l=function(_){let I=t.any(void 0,On.ldp("contains"),_);if(!I)return!1;let S=t.each(I,On.ldp("contains"));if(S.length<2)return!1;let A=_.uri;for(let O=0;O<S.length;O++){let z=S[O].uri;if(A.length>z.length&&A.startsWith(a(z))||A.endsWith(".m4a")&&z.endsWith(".mp3")&&a(A)===a(z))return!0}return!1},c=function(_){let I=_.uri.split("/").slice(-3),S=function(A){try{return decodeURIComponent(A)}catch{return A}};g.textContent=S(I[0]),f.textContent=S(I[1]),b.textContent=S(a(I[2]))},h=function(_,I){return new Promise(function(S){if(I=I||0,!i.chain)return S(null);let A=t.any(void 0,On.ldp("contains"),_)||_.dir();if(!A)return S(null);t.fetcher.load(A).then(function(O){let z=t.each(A,On.ldp("contains")),F;z.sort();for(let E=0;E<z.length;E++)if(_.uri===z[E].uri)if(F=(E+1)%z.length,F===0)if(i.chainAlbums){if(I===1||!i.chainAlbums)return S(null);h(A,I+1).then(function(Y){Y&&t.fetcher.load(Y).then(function(j){let ae=t.each(Y,On.ldp("contains"));return ae.length===0?S(null):(ae.sort(),console.log("New Album: "+Y),S(ae[0]))})})}else return i.loop?S(z[F]):S(null);else return S(z[F])})})},m=function(_){let I=t.sym(_.target.getAttribute("src"));if(!i.chain)return;let S=function(A){let O=A;h(O).then(function(z){if(!z){console.log("No successor to "+O);return}l(z)?(console.log("Ignoring redundant "+z),S(z)):(console.log("Moving on to "+z),c(z),w.appendChild(d(z,!0)),w.removeChild(_.target))})};S(I)},d=function(_,I){let S=r.createElement("audio");return S.setAttribute("controls","yes"),t.fetcher._fetch(_.uri).then(function(A){return A.blob()}).then(function(A){let O=URL.createObjectURL(A);S.setAttribute("src",O)}),I&&S.setAttribute("autoplay","autoplay"),S.addEventListener("ended",m,!1),S},s=r.createElement("div"),u=s.appendChild(r.createElement("table")),p="padding: 0.3em; color:white; background-color: black;",g=u.appendChild(r.createElement("tr"));g.style.cssText=p;let f=u.appendChild(r.createElement("tr"));f.style.cssText=p;let b=u.appendChild(r.createElement("tr"));b.style.cssText=p;let w=u.appendChild(r.createElement("tr"));return c(e),w.appendChild(d(e,i.autoplay)),!t.holds(void 0,On.ldp("contains"),e)&&e.dir()&&t.fetcher.load(e.dir()),s}};import*as co from"rdflib";import*as uo from"mime-types";var hd=`<!DOCTYPE html>
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
`,lo=hd;var po={icon:B.iconBase+"dokieli-logo.png",name:"Dokieli",mintClass:o.solid("DokieliDocument"),label:function(e,n){return null},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(!r){let h=n.newBase;h.endsWith("/")&&(h=h.slice(0,-1),n.newBase=h),r=t.sym(h)}let i=uo.lookup(r.uri);(!i||!i.includes("html"))&&(r=co.sym(r.uri+".html")),n.newInstance=r;let a=lo,l=r.uri.split("/").slice(-1)[0];l=decodeURIComponent(l.split(".")[0]);let c=l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return a=a.replace("<title>","<title>"+c),a=a.replace("</article>","<h1>"+c+"</h1></article>"),t.fetcher.webOperation("PUT",r.uri,{data:a,contentType:"text/html"}).then(function(){return console.log("new Dokieli document created at "+n.newInstance),n})}};var mo=new Set;function Vr(e){let n=String(e);if(mo.has(n)||typeof document>"u")return;mo.add(n);let t=document.createElement("link");t.rel="stylesheet",t.href=n,document.head.append(t)}var gd=()=>Promise.all([import("./part-63YH6UFU.js"),import("./part-L57T6Q3T.js")]);Vr(he(`/*
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
`,"text/css"));Vr(he(`:root {
  /* Shared utility variables (e.g., base icon size) */
  --icon-base: 2em;
}`,"text/css"));var bd=["explorer","storage","container"];function wd(e){return e.folderView&&bd.includes(e.folderView)?e.folderView:e.fullView===!0||e.solo===!0?"container":"explorer"}var Hr={icon:B.iconBase+"noun_973694_expanded.svg",name:"folder",mintNew:function(e,n){let t=e.session.store,i=(n.newInstance||t.sym(n.newBase)).uri;i.endsWith("/")&&(i=i.slice(0,-1));let a=t.sym(i+"/");return n.newInstance=a,t.fetcher.webOperation("PUT",a.uri).then(function(){return n})},label:function(e,n){if(Ni(e)||Li(e))return null;let t=n.session.logic.resource;if(!t.isContainer(e))return null;let r=t.getContainerMemberCount(e);return r>0?"Contents ("+r+")":"Contents (0)"},render:function(e,n,t){gd();let r=n.dom,i=r.createElement("div");i.classList.add("instancePane","folder-pane");let a=i.appendChild(r.createElement("folder-pane-view")),l=t&&typeof t=="object"?t:{};a.browserContext=n,a.subject=e;let c=wd(l);return i.classList.add(`folder-pane--${c}`),a.fullView=c==="container",i}};import*as lt from"rdflib";var ln=o,fo={icon:B.originalIconBase+"tango/22-folder-open.png",name:"classInstance",audience:[ln.solid("PowerUser")],label:function(e,n){let r=n.session.store.each(void 0,ln.rdf("type"),e).length;return r>0?"List ("+r+")":null},render:function(e,n){let t=n.dom,r=n.getOutliner(t),i=n.session.store,a=function(m,d){let s=t.createElement("pre");s.setAttribute("style","background-color: "+d||"#eed;"),l.appendChild(s),s.appendChild(t.createTextNode(m))},l=t.createElement("div");l.setAttribute("class","instancePane"),l.setAttribute("style","  border-top: solid 1px #777; border-bottom: solid 1px #777; margin-top: 0.5em; margin-bottom: 0.5em ");let c=i.statementsMatching(void 0,ln.rdf("type"),e);if(c.length>0){let h={},m=[];c.forEach(d=>{h[d.subject.toNT()]=d});for(let d in i.findMembersNT(e))h[d]||m.push(lt.st(i.fromNT(d),ln.rdf("type"),e));if(m.length&&a("There are "+c.length+" explicit and "+m.length+" implicit members of "+N.label(e)),!e.sameTerm(ln.rdf("Property"))){if(e.sameTerm(ln.rdfs("Class"))){let d=i.statementsMatching(void 0,ln.rdf("type"),void 0),s={};d.forEach(function(p){s[p.object]=p});let u=[];for(let p in s)u.push(lt.st(lt.sym(p),ln.rdf("type"),ln.rdfs("Class")));a("Total of "+d.length+" type statements and "+u.length+" unique types.")}}if(c.length>10){let d=t.createElement("TR");d.appendChild(t.createTextNode(""+c.length)),l.appendChild(d)}r.appendPropertyTRs(l,c,!0,function(d){return!0}),m.length&&(a("Implicit:"),r.appendPropertyTRs(l,m,!0,function(d){return!0}))}return l}};import{solidLogicSingleton as Wr}from"solid-logic";import yd from"@solid/better-simple-slideshow";var go=o,vd=0;function ho(e,n){return Wr.resource.isContainer(e)?n.each(e,go.ldp("contains")).filter(r=>Wr.resource.isImage(r)):[]}var bo={icon:B.iconBase+"noun_138712.svg",name:"slideshow",audience:[go.solid("PowerUser")],label:function(e,n){let t=n.session.store;if(Wr.resource.isContainer(e)){let r=ho(e,t);return new Set(r.map(i=>i.uri)).size>1?"Slideshow":null}return null},render:function(e,n){let t=n.dom;te.addStyleSheet(t,"https://leemark.github.io/better-simple-slideshow/css/simple-slideshow-styles.css");let i=n.session.store,a=t.createElement("div"),l=`slideshow-${++vd}`;a.id=l,a.setAttribute("class","bss-slides");let c=[...new Map(ho(e,i).map(m=>[m.uri,m])).values()];c.sort((m,d)=>m.uri.localeCompare(d.uri));for(let m=0;m<c.length;m++){let d=a.appendChild(t.createElement("figure")),s=d.appendChild(t.createElement("img"));i.fetcher._fetch(c[m].uri).then(function(u){return u.blob()}).then(function(u){let p=URL.createObjectURL(u);s.setAttribute("src",p)}),s.style.width="100%",d.appendChild(t.createElement("figcaption"))}let h={dom:t};return t.defaultView.requestAnimationFrame(function(){yd(`#${l}`,h)}),a}};import{authn as Co}from"solid-logic";import"rdflib";var zn=String.raw,xd=zn`
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
`,Cd=zn`
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
`,Gr=zn`
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
`,ah=zn`
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
`,_d=zn`
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
`,kd=zn`
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
`;import{Statement as Id}from"rdflib";import{st as fh,sym as hh}from"rdflib";import{html as bh,render as wh}from"lit-html";import{html as lh}from"lit-html";var _h=[{key:"homepage",label:"Homepage",placeholder:"https://example.com",predicate:o.foaf("homepage")},{key:"weblog",label:"Weblog",placeholder:"https://blog.example.com",predicate:o.foaf("weblog")},{key:"workplaceHomepage",label:"Workplace Homepage",placeholder:"https://company.example.com",predicate:o.foaf("workplaceHomepage")},{key:"schoolHomepage",label:"School Homepage",placeholder:"https://school.example.edu",predicate:o.foaf("schoolHomepage")}];function jr(e){let{dom:n,subject:t,familiar:r,me:i,meUri:a,incoming:l,outgoing:c,editable:h,profile:m,knows:d,mutualConnections:s,link:u,text:p,buildCheckboxForm:g,renderSupportingInfo:f,renderNameSuffix:b}=e,w=function(){},_=n.createElement("section");_.className="social-pane__mutual-friends social-primary__panel",_.id="social-panel-mutual",_.setAttribute("role","tabpanel"),_.setAttribute("aria-labelledby","social-tab-mutual");let I=_.appendChild(n.createElement("div"));I.classList.add("social-main","social-main--mutual","flex-column");let S=n.createElement("div");S.classList.add("social-mutual-summary","flex-column"),I.appendChild(S);let A=function(){let F=S.appendChild(n.createElement("div"));return F.classList.add("social-mutual-summary-line"),F},O=function(){let F=A();return F.appendChild(u(p("You"),a)),F.appendChild(p(" and ")),F.appendChild(u(p(r),t.uri)),F};if(l)if(c)O().appendChild(p(" say you know each other."));else{S.classList.add("social-mutual-summary--confirm");let F=S.appendChild(n.createElement("div"));F.classList.add("social-mutual-summary-line"),F.appendChild(u(p(r),t.uri)),F.appendChild(p(" knows ")),F.appendChild(u(p("you"),a)),F.appendChild(p(" (unconfirmed)."))}else if(!c)O().appendChild(p(" have not said you know each other."));else{let F=A();F.appendChild(u(p("You"),a)),F.appendChild(p(" know ")),F.appendChild(u(p(r),t.uri)),F.appendChild(p(" (unconfirmed)."))}if(!!l&&!c){let F=n.createElement("span");F.className="social-mutual-confirm-prompt",F.appendChild(p("Confirm you know ")),F.appendChild(u(p(r),t.uri));let E=g(F,new Id(i,d,t,m??void 0),!!c,{disabled:!h,disabledTitle:h?void 0:"Your profile is not editable"});E.classList.add("social-mutual-checkbox-form"),I.appendChild(E)}if(s.length){let F=I.appendChild(n.createElement("table"));F.className="social-main social-friends-list social-friends-grid";let E=function(Y){return te.personTR(n,o.foaf("knows"),Y,{renderSupportingInfo:f,renderNameSuffix:b})};w=function(){let Y=[...s].sort((j,ae)=>{let de=N.label(j)||j.value,$=N.label(ae)||ae.value;return de.localeCompare($)});N.syncTableToArray(F,Y,E,function(j,ae){return E(ae)})},w()}return{section:_,content:I,refreshMutualFriends:w}}function wo(e){let{dom:n,subject:t,profile:r,editable:i,renderSupportingInfo:a,renderNameSuffix:l}=e,c=n.createElement("section");c.className="social-pane__all-friends social-primary__panel",c.id="social-panel-all-friends",c.setAttribute("role","tabpanel"),c.setAttribute("aria-labelledby","social-tab-all-friends");let h=c.appendChild(n.createElement("div"));h.className="social-friends-delete-confirmation";let m=c.appendChild(n.createElement("table"));m.className="social-main";let d=te.attachmentList(n,t,m,{doc:r,modify:!!i,predicate:o.foaf("knows"),noun:"friend",confirmationContainer:h,refreshOnDocumentLoad:!1,renderSupportingInfo:a,renderNameSuffix:l});d.classList.add("social-friends-list"),d.style.marginTop="0";let s=d.rows[0],u=s.cells[0],p=s.cells[1];if(u.replaceChildren(...Array.from(p.childNodes)),u.classList.add("social-friends-list-surface"),p.remove(),i){let f=n.createElement("p");f.className="social-friends-drop-hint",f.textContent="Drop a WebID anywhere here to add a friend.",u.prepend(f)}let g=d.querySelector("td table");return g instanceof HTMLTableElement&&g.classList.add("social-friends-grid"),{section:c,mainTable:m,friendsList:d}}function yo(e){let{dom:n,triage:t,renderSupportingInfo:r,renderNameSuffix:i}=e,a=n.createElement("section");a.className="social-pane__requests social-primary__panel",a.id="social-panel-requests",a.setAttribute("role","tabpanel"),a.setAttribute("aria-labelledby","social-tab-requests");let l=a.appendChild(n.createElement("div"));l.classList.add("social-main","social-main--requests","flex-column");let c=l.appendChild(n.createElement("p"));c.className="social-requests__note",c.textContent="Best effort preview: this view only reflects profile documents that are currently loaded. A dedicated inbox would still be needed for complete request discovery.";let h=function(f,b,w){let _=l.appendChild(n.createElement("section"));_.classList.add("social-requests__group","flex-column");let I=_.appendChild(n.createElement("div"));I.className="social-requests__group-header";let S=I.appendChild(n.createElement("h2"));S.className="social-requests__group-title",S.textContent=f;let A=I.appendChild(n.createElement("p"));A.className="social-requests__group-description",A.textContent=b;let O=_.appendChild(n.createElement("p"));O.className="social-requests__empty",O.textContent=w;let z=_.appendChild(n.createElement("table"));return z.className="social-main social-friends-list social-friends-grid social-requests__table",{empty:O,table:z}},m=h("Incoming requests","People who say they know this profile, but have not been confirmed yet.","No incoming requests are visible from the currently loaded data."),d=h("Awaiting confirmation","People this profile knows who have not linked back yet.","Nothing is waiting for confirmation right now."),s=function(f){return te.personTR(n,o.foaf("knows"),f,{renderSupportingInfo:r,renderNameSuffix:i})},u=function(f){return[...f].sort((b,w)=>{let _=N.label(b)||b.value,I=N.label(w)||w.value;return _.localeCompare(I)})},p=function(f,b){let w=u(b);f.empty.hidden=w.length>0,f.table.hidden=w.length===0,N.syncTableToArray(f.table,w,s,function(_,I){return s(I)})},g=function(f){p(m,f.requests),p(d,f.unconfirmed)};return g(t),{section:a,refreshRequests:g}}import{authn as Jr}from"solid-logic";async function En(){return Jr.currentUser()??await Jr.checkUser()}function dt(e,n=Jr.currentUser()){let{value:t,uri:r}=typeof n=="object"&&n!==null?n:{},i=typeof n=="string"?n:t||r||null;return i?i===e.value?"owner":"authenticated":"anonymous"}import"rdflib";function vo(e){let n=new Set,t=[];for(let r of e){let i=r?.value;!i||n.has(i)||(n.add(i),t.push(r))}return t}function qn(e,n){let t=vo(e.each(n,o.foaf("knows"))),r=vo(e.each(void 0,o.foaf("knows"),n)),i=[],a=[],l=[];for(let c of t)r.some(m=>m.sameTerm(c))?i.push(c):a.push(c);for(let c of r)t.some(m=>m.sameTerm(c))||l.push(c);return{acquaintances:t,confirmed:i,unconfirmed:a,requests:l}}async function xo(e,n){let t=e.session.store,r=t.fetcher;if(!r||typeof r.load!="function")return qn(t,n);try{await r.load(n.doc())}catch{}let i=qn(t,n),a=new Map;a.set(n.doc().value,n.doc());for(let c of[...i.acquaintances,...i.requests])a.set(c.doc().value,c.doc());let l=t.statementsMatching(void 0,o.foaf("knows"),n);for(let c of l){let h=c.why;h?.value&&a.set(h.value,h)}for(let c of a.values())try{await r.load(c)}catch{}return qn(t,n)}Re(he(`.social-pane-host,\r
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
`,"text/css"));function Ed(e,n){let t=n.environment?.layout??"desktop",r=n.environment?.theme??"light",i=n.environment?.inputMode??"pointer";e.classList.add("social-pane-host"),e.dataset.layout=t,e.dataset.theme=r,e.dataset.inputMode=i}var _o={icon:B.originalIconBase+"foaf/foafTiny.gif",name:"social",label:function(e,n){let r=n.session.store.findTypeURIs(e);return r[o.foaf("Person").uri]||r[o.vcard("Individual").uri]?"Friends":null},global:!1,render:function(e,n){let t=n.dom,r=function(T,C){let k=[];for(let oe=0;oe<T.length;oe++)for(let U=0;U<C.length;U++)if(C[U].sameTerm(T[oe])){k.push(C[U]);break}return k},i=function(T){let C=new Set,k=[];for(let oe of T)!oe?.value||C.has(oe.value)||(C.add(oe.value),k.push(oe));return k},a=function(T,C){if(!C)return T;let k=t.createElement("a");return k.setAttribute("href",C),k.appendChild(T),k},l=function(T){return t.createTextNode(T)},c=function(){},h=function(T,C,k,oe={}){let U=t.createElement("form"),L=t.createElement("label"),ne=t.createElement("input"),K=t.createElement("span");K.className="question",typeof T=="string"?K.textContent=T:K.appendChild(T),ne.setAttribute("type","checkbox"),oe.disabled&&(ne.disabled=!0,oe.disabledTitle&&(ne.title=oe.disabledTitle,ne.setAttribute("aria-label",oe.disabledTitle))),L.appendChild(K),L.appendChild(ne),U.appendChild(L);let re=function(pe){if(this.checked)try{m.UserInput.sparqler.insert_statement(C,function(be,me,we){if(K.className="question",!me){ce.alert("Error occurs while inserting "+C+`

`+we),ne.checked=!1;return}d.add(C.subject,C.predicate,C.object,C.why),c()})}catch(be){ce.error("Data write fails:"+be),ce.alert("Data write fails:"+be),ne.checked=!1,K.className="question"}else try{m.UserInput.sparqler.delete_statement(C,function(be,me,we){K.className="question",me?(d.removeMany(C.subject,C.predicate,C.object,C.why),c()):(ce.alert("Error occurs while deleting "+C+`

`+we),ne.checked=!0)})}catch(be){ce.alert("Delete fails:"+be),ne.checked=!0}};return ne.checked=k,ne.addEventListener("click",re,!1),U},m=n.getOutliner(t),d=n.session.store,s=t.createElement("div");s.classList.add("social-pane","flex-column","gap-xxs"),Ed(s,n);let u=o.foaf,p=o.vcard,g=Co.currentUser(),f=g?g.uri:null,b=g&&d.sameThings(g,e),w=u("knows"),_=d.anyValue(e,u("givenname"))||d.anyValue(e,u("firstName"))||d.anyValue(e,u("nick"))||d.anyValue(e,u("name"))||d.anyValue(e,p("fn")),I=d.each(e,w),S=i(I),A=g?i(d.each(g,u("knows"))):[],O=g&&!b?i(r(S,A)).filter(T=>!d.sameThings(T,g)):[],z=dt(e,g),F=null,E=!1,Y=!1,j=!1,ae=s.appendChild(t.createElement("div"));ae.className="social-layout";let de=ae.appendChild(t.createElement("div"));de.className="social-primary";let $=de.appendChild(t.createElement("div"));$.classList.add("social-primary__tabs","flex-center"),$.setAttribute("role","tablist"),$.setAttribute("aria-label","Social sections");let M=$.appendChild(t.createElement("button"));M.className="social-primary__tab",M.type="button",M.id="social-tab-all-friends",M.textContent="All Friends",M.setAttribute("role","tab"),M.setAttribute("aria-controls","social-panel-all-friends"),M.setAttribute("aria-selected","true"),M.tabIndex=0;let Q=$.appendChild(t.createElement("button"));if(Q.className="social-primary__tab",Q.type="button",Q.id="social-tab-mutual",Q.textContent="Mutual",Q.setAttribute("role","tab"),Q.setAttribute("aria-controls","social-panel-mutual"),Q.setAttribute("aria-selected","false"),Q.tabIndex=-1,g){let T=d.each(void 0,u("primaryTopic"),g),C="";for(let k=0;k<T.length;k++)if(d.whether(T[k],o.rdf("type"),u("PersonalProfileDocument"))){let oe=T[k];if(E=m.UserInput.sparqler.editable(oe.uri,d),!E)C+="Your profile <"+N.escapeForXML(oe.uri)+"> is not remotely editable.";else{F=oe;break}}if(!b){let k=d.canon(g);Y=d.whether(e,w,k),j=!1;let oe=d.statementsMatching(k,w,e);oe.length&&(j=!0,F||(F=oe[0].why))}}let ee=z==="owner"&&E,W=z==="authenticated"&&!b&&E&&!!F,G=ee,R=new Map;(function(T){let C=new Map;T.forEach(k=>{!k?.value||k.value===e.value||C.set(k.value,$t(d,k))}),R.clear(),C.forEach((k,oe)=>{R.set(oe,k)})})(S);let q=function(T,C){let k=R.get(T.value)||$t(d,T);R.set(T.value,k);let oe=C.createElement("div"),U=[k.jobTitle,k.organization].filter(Boolean).join(" | ");if(U){let L=oe.appendChild(C.createElement("div"));L.className="social-friend-job-org",L.textContent=U}if(k.location){let L=oe.appendChild(C.createElement("div"));L.className="social-friend-location",L.innerHTML=`${Gr} ${k.location}`}return oe.childNodes.length?oe:null},X=function(T,C){let k=R.get(T.value)||$t(d,T);R.set(T.value,k);let oe=k.pronouns;if(!oe)return null;let U=C.createElement("span");return U.className="social-friend-pronouns",U.textContent=`(${oe})`,U},se=g&&!b?jr({dom:t,subject:e,familiar:_,me:g,meUri:f,incoming:Y,outgoing:j,editable:W,profile:F,knows:w,mutualConnections:O,link:a,text:l,buildCheckboxForm:h,renderSupportingInfo:q,renderNameSuffix:X}):{section:t.createElement("section"),content:t.createElement("div"),refreshMutualFriends:function(){}},D=se.section,J=se.content;D.className||(D.className="social-pane__mutual-friends social-primary__panel",D.id="social-panel-mutual",D.setAttribute("role","tabpanel"),D.setAttribute("aria-labelledby","social-tab-mutual"),J.className="social-main social-main--mutual",D.appendChild(J)),de.appendChild(D);let V=wo({dom:t,subject:e,profile:G?F:null,editable:G,renderSupportingInfo:q,renderNameSuffix:X}),le=V.section,ie=V.friendsList;de.appendChild(le);let ue=qn(d,e),fe=yo({dom:t,triage:ue,renderSupportingInfo:q,renderNameSuffix:X}),ve=fe.section;de.appendChild(ve);let Te=$.appendChild(t.createElement("button"));Te.className="social-primary__tab",Te.type="button",Te.id="social-tab-requests",Te.textContent="Requests",Te.setAttribute("role","tab"),Te.setAttribute("aria-controls","social-panel-requests"),Te.setAttribute("aria-selected","false"),Te.tabIndex=-1;let Le="all-friends",ye=z==="owner",Pe=function(T){Le=T;let C=T==="mutual",k=T==="all-friends",oe=ye&&T==="requests";Q.classList.toggle("social-primary__tab--active",C),Q.setAttribute("aria-selected",String(C)),Q.tabIndex=C?0:-1,M.classList.toggle("social-primary__tab--active",k),M.setAttribute("aria-selected",String(k)),M.tabIndex=k?0:-1,Te.classList.toggle("social-primary__tab--active",oe),Te.setAttribute("aria-selected",String(oe)),Te.tabIndex=oe?0:-1,D.classList.toggle("social-primary__panel--active",C),D.setAttribute("aria-hidden",String(!C)),le.classList.toggle("social-primary__panel--active",k),le.setAttribute("aria-hidden",String(!k)),ve.classList.toggle("social-primary__panel--active",oe),ve.setAttribute("aria-hidden",String(!oe)),ve.hidden=!ye||!oe},y=function(){if(!g||b)return;let T=d.canon(g);Y=d.whether(e,w,T),j=d.statementsMatching(T,w,e).length>0;let k=jr({dom:t,subject:e,familiar:_,me:g,meUri:f,incoming:Y,outgoing:j,editable:W,profile:F,knows:w,mutualConnections:O,link:a,text:l,buildCheckboxForm:h,renderSupportingInfo:q,renderNameSuffix:X});D.replaceWith(k.section),se=k,D=k.section,J=k.content};c=function(){y(),ue=qn(d,e),fe.refreshRequests(ue),Pe(Le)},Pe("all-friends");let v=function(T){let C=T==="authenticated"&&!b;if(ye=T==="owner",Q.hidden=!C,Te.hidden=!ye,!ye&&Le==="requests"){Pe("all-friends");return}Pe("all-friends")};Q.addEventListener("click",function(){Pe("mutual")}),M.addEventListener("click",function(){Pe("all-friends")}),Te.addEventListener("click",function(){Pe("requests")});let x=function(){let T=ie.refresh;typeof T=="function"&&T.call(ie)},P=function(){se.refreshMutualFriends()};return(async()=>{try{for await(let T of Sd(n,e))R.clear(),T.forEach(C=>{R.set(C.url,C)}),x(),P()}catch{}})(),(async()=>{try{ue=await xo(n,e),fe.refreshRequests(ue),x(),P()}catch{}})(),v("anonymous"),Co.checkUser().then(T=>{let C=dt(e,T);v(C)}).catch(()=>{v("anonymous")}),s}},Td=3;function Ad(e,n){let t=e.anyJS(n,o.solid("preferredSubjectPronoun"))||"";if(t){let r=e.anyJS(n,o.solid("preferredObjectPronoun"));r&&(t+="/"+r)}return t||""}function Pd(e,n){return e&&n?`${n}, ${e}`:e||n||null}function $t(e,n){let t=e.anyValue(n,o.vcard("fn"))||e.anyValue(n,o.foaf("name"))||null,r=e.anyValue(n,o.vcard("nickname"))||e.anyValue(n,o.foaf("nick"))||null,i=e.anyValue(n,o.vcard("bday"))||null,a=te.findImage(n),l=e.anyValue(n,o.vcard("role"))||null,c=e.anyValue(n,o.vcard("organization-name"))||null,m=e.any(n,o.vcard("hasAddress"))||null,d=m!=null?e.anyValue(m,o.vcard("country-name")):null,s=m!=null?e.anyValue(m,o.vcard("locality")):null,u=Pd(d,s),p=Ad(e,n);return{url:n.value,imageUrl:a,name:t,nickname:r,jobTitle:l,organization:c,birthdate:i,location:u,pronouns:p,subjectNode:n}}async function*Sd(e,n,t=Td){let r=e.session.store,i=r?.fetcher;if(i&&typeof i.load=="function")try{await i.load(n.doc())}catch{}let a=new Set,l=r.each(n,o.foaf("knows"),null,n.doc()),c=[];for(let m of l){let d=m?.value;!d||a.has(d)||n.value===d||(a.add(d),c.push(m))}let h=[];for(let m of c){if(i&&typeof i.load=="function")try{await i.load(m.doc())}catch{}h.push($t(r,m)),h.length%t===0&&(yield[...h])}h.length>0&&h.length%t!==0&&(yield[...h])}import{Util as Ud}from"rdflib";import{authn as Nd}from"solid-logic";var Ld=()=>Promise.all([import("marked"),import("dompurify")]).then(([e,n])=>({marked:e.marked,DOMPurify:n.default}));Re(he(`.human-readable-pane {
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
`,"text/css"));function ko(){try{return Nd.currentUser()?.value??null}catch{return null}}var Kr=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.(md|markdown|mdown|mkd|mkdn)$/i.test(n)},Fd=e=>{if(!e)return!1;let n=e.split("?")[0].split("#")[0];return/\.json$/i.test(n)},dn=new Map;function Yr(e,n,t){e.className="",e.classList.add("human-readable-pane__frame"),e.classList.add(`human-readable-pane__frame--${n}`),t!==void 0&&e.style.setProperty("--human-readable-pane-height",`${t*16}px`)}var ei="solidos-human-readable-preview",Vt="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-modals",Io=e=>e.includes('<script src="https://dokie.li/scripts/dokieli.js">')||e.includes("dokieli.css");function Xr(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qr(e,n){let t=e.match(/<base(\s[^>]*)?>/i);if(t&&t.index!==void 0){let a=t[0].match(/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i),l=a?.[1]??a?.[2]??a?.[3];if(!a||l===void 0||/^[a-z][a-z\d+.-]*:/i.test(l)||l.startsWith("//"))return e;let c;try{c=new URL(l,n).href}catch{return e}let h=t[0].replace(a[0],`href="${Xr(c)}"`);return e.slice(0,t.index)+h+e.slice(t.index+t[0].length)}let r=`<base href="${Xr(n)}">`,i=e.match(/<head(\s[^>]*)?>/i);if(i&&i.index!==void 0){let a=i.index+i[0].length;return e.slice(0,a)+r+e.slice(a)}return r+e}function Eo(e){let n=`<script>
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
<\/script>`,t=e.replace(/<\/body\s*>/i,`${n}$&`);return t===e?`${e}${n}`:t}function Po(e){let n=e.split("/").pop()||e;try{return decodeURIComponent(n)}catch{return n}}function To(e,n){let t=Po(n);try{return new DOMParser().parseFromString(e,"text/html").querySelector("title")?.textContent?.trim()||t}catch{return t}}var Ht="solidos-preview-request",ct="solidos-preview-response",So="data-solidos-preview-bridge",Wt=new Set(["GET","HEAD"]),Zr=new Set(["PUT","PATCH","DELETE"]);function Uo(e){if(typeof e!="string"||!e.includes(Ht))return e;let n=new DOMParser().parseFromString(e,"text/html"),t=!1;for(let i of n.querySelectorAll("script")){let a=i.textContent||"";(i.hasAttribute(So)||a.includes(Ht)&&a.includes(ct)&&a.includes("const pending = new Map()"))&&(i.remove(),t=!0)}if(!t)return e;let r=e.match(/<!doctype[^>]*>/i)?.[0];return`${r?`${r}
`:""}${n.documentElement.outerHTML}`}function Md(e){return e==="about:srcdoc"||/^file:\/\/srcdoc\/?(?:[?#].*)?$/i.test(e)}function No(e,n){let t=new URL(e,n).href;return Md(t)?n:t}function Rd(e){if(e)try{let n=new URL(e);return n.hash="",n.href}catch{return}}function Dd(e,n,t,r=null){let i,a;try{i=new URL(No(e,t)),a=new URL(t)}catch{return!1}if(i.origin!==a.origin)return!1;let l=n.toUpperCase(),c=new URL(i.href);c.hash="";let h=new URL(a.href);h.hash="";let m=c.href===h.href,d=i.href===a.href,s=i.pathname==="/profile/card"||c.href===Rd(r);return Wt.has(l)&&(m||s)||d&&Zr.has(l)}function Bd(e,n,t,r=null){let i=`<script ${So}="true">
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
    if (!message || message.type !== ${JSON.stringify(ct)} || message.nonce !== nonce) return
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
      (${JSON.stringify(Array.from(Wt))}.includes(method) ||
        (url === documentUri && ${JSON.stringify(Array.from(Zr))}.includes(method)))
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
        (${JSON.stringify(Array.from(Wt))}.includes(this._method) ||
          (resolvedUrl === documentUri && ${JSON.stringify(Array.from(Zr))}.includes(this._method)))
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
<\/script>`,a=Uo(e)??e;return Qr(a,n).replace(/<head(\s[^>]*)?>/i,l=>`${l}${i}`)}function Ao(e,n,t,r,i=null){let a=e.ownerDocument.defaultView;if(!a)return;let l=new Uint32Array(4);a.crypto.getRandomValues(l);let c=Array.from(l,d=>d.toString(16)).join("-"),h=new URL(n).href,m=d=>{let s=d.data;if(d.source!==e.contentWindow||!s||s.type!==Ht||s.nonce!==c)return;let u=g=>{e.contentWindow?.postMessage(g,"*")};if(!Dd(s.url,s.method,h,i)){u({type:ct,nonce:c,id:s.id,ok:!1,status:403,headers:[],body:"",error:"Request not permitted by the SolidOS preview"});return}let p=No(s.url,h);r(p,{method:s.method,headers:s.headers,body:Wt.has(s.method)?void 0:Uo(s.body)}).then(async g=>{u({type:ct,nonce:c,id:s.id,ok:g.ok,status:g.status,headers:Array.from(g.headers.entries()),body:await g.text()})}).catch(g=>{u({type:ct,nonce:c,id:s.id,ok:!1,status:0,headers:[],body:"",error:g instanceof Error?g.message:String(g)})})};a.addEventListener("message",m),e.setAttribute("sandbox",Vt),e.srcdoc=Bd(t,h,c,i)}function Od(e,n){let t=r=>{let i=r.data;r.source!==e.contentWindow||i?.type!=="solidos-preview-size"||typeof i.height!="number"||!Number.isFinite(i.height)||(e.style.height=`${Math.max(1,Math.ceil(i.height))}px`,e.style.flexShrink="0")};return n.addEventListener("message",t),()=>n.removeEventListener("message",t)}var zd={icon:function(e,n){if(e&&Kr(e.uri))return B.iconBase+"markdown.svg";if(e){let t=n.session.store,r=dn.get(e.uri);if(r==="dokieli")return B.iconBase+"dokieli-logo.png";if(r==="html")return B.originalIconBase+"tango/22-text-x-generic.png";let i=t.fetcher.getHeader(e.doc(),"content");if(i&&i.length>0){let c=i[0],h=c.includes('<script src="https://dokie.li/scripts/dokieli.js">')||c.includes("dokieli.css");return dn.set(e.uri,h?"dokieli":"html"),h?B.iconBase+"dokieli-logo.png":B.originalIconBase+"tango/22-text-x-generic.png"}let a=t.fetcher.getHeader(e.doc(),"content-type");if((a?a[0].split(";",1)[0].trim():null)==="text/html")return t.fetcher._fetch(e.uri).then(c=>c.text()).then(c=>{let h=c.includes('<script src="https://dokie.li/scripts/dokieli.js">')||c.includes("dokieli.css");return dn.set(e.uri,h?"dokieli":"html"),h?B.iconBase+"dokieli-logo.png":B.originalIconBase+"tango/22-text-x-generic.png"}).catch(()=>(dn.set(e.uri,"html"),B.originalIconBase+"tango/22-text-x-generic.png"))}return B.originalIconBase+"tango/22-text-x-generic.png"},name:"humanReadable",label:function(e,n){let t=n.session.store,r=["text/plain","text/html","text/markdown","application/json","application/xhtml+xml","application/pdf","video/mp4"],i=function(c,h,m){let d=c.fetcher.getHeader(h,"content-type");if(d){for(let s=0;s<d.length;s++)for(let u=0;u<m.length;u++)if(d[s].indexOf(m[u])>=0)return!0}return!1},a=function(c,h,m){let d=c.findTypeURIs(h);for(let s=0;s<m.length;s++)if(Ud.mediaTypeClass(m[s]).uri in d)return!0;return!1};if(!e.uri)return null;if(t.findTypeURIs(e)[o.link("WebPage").uri])return"Webpage";if(Kr(e.uri))return"View";if(i(t,e,r)||a(t,e,r)){let c=t.fetcher.getHeader(e.doc(),"content-type");return(c?c[0].split(";",1)[0].trim():null)==="text/html"&&!dn.has(e.uri)&&t.fetcher._fetch(e.uri).then(m=>m.text()).then(m=>{let d=m.includes('<script src="https://dokie.li/scripts/dokieli.js">')||m.includes("dokieli.css");dn.set(e.uri,d?"dokieli":"html")}).catch(()=>{dn.set(e.uri,"html")}),"View"}return null},render:function(e,n){let t=n.dom,r=t.createElement("div"),i=n.session.store;function a(u){let p=n.environment??{};u.dataset.layout=p.layout??"desktop"}let l=i.fetcher.getHeader(e.doc(),"content-type"),c=l?l[0].split(";",1)[0].trim():null,h=c==="text/markdown"||Kr(e.uri),m=c==="text/plain"||c==="application/json"||!c&&Fd(e.uri);c||console.log("humanReadablePane: unknown content-type?"),r.classList.add("human-readable-pane"),a(r);let d=function(u){i.fetcher.webOperation("GET",e.uri).then(async p=>{let{marked:g,DOMPurify:f}=await Ld(),b=p.responseText??"",w=Math.min(30,b.split(/\n/).length+5),_=g.parse(b,{async:!1}),I=f.sanitize(_);u.innerHTML=I,Yr(u,"markdown",w)}).catch(p=>{console.error("Error fetching markdown content:",p),u.innerHTML="<p>Error loading content</p>"})},s=function(u){i.fetcher.webOperation("GET",e.uri).then(p=>{let g=p.responseText??"",f=Math.min(30,g.split(/\n/).length+5);u.textContent=g,Yr(u,"plain-text",f)}).catch(p=>{console.error("Error fetching plain text content:",p),u.textContent="Error loading content"})};if(h){let u=t.createElement("div");d(u);let p=t.createElement("div");p.classList.add("human-readable-pane__container"),p.appendChild(u),r.appendChild(p)}else if(m){let u=t.createElement("pre");s(u);let p=t.createElement("div");p.classList.add("human-readable-pane__container"),p.appendChild(u),r.appendChild(p)}else{let u=t.createElement("iframe");u.name=ei,u.title=Po(e.uri),Yr(u,"iframe");let p=t.defaultView,g=p?Od(u,p):()=>{},f=c==="text/html"||c==="application/xhtml+xml",b=null,w=!1,_=!1,I=typeof MutationObserver>"u"?null:new MutationObserver(O=>{let z=O.some(F=>Array.from(F.addedNodes).some(E=>E===r||E.nodeType===Node.ELEMENT_NODE&&E.contains(r)));r.isConnected?_=!0:(_||z)&&(w=!0,b&&(URL.revokeObjectURL(b),b=null),g(),I?.disconnect())});I?.observe(t,{childList:!0,subtree:!0});let S=O=>{u.removeAttribute("src"),u.setAttribute("sandbox",""),u.srcdoc=`<p style="font-family: sans-serif">${Xr(O)}</p>`};f?i.fetcher.webOperation("GET",e.uri).then(O=>{let z=O.responseText??"";u.title=To(z,e.uri);let F=Io(z);dn.set(e.uri,F?"dokieli":"html"),F?Ao(u,e.uri,z,(E,Y)=>i.fetcher._fetch(E,Y),ko()):(u.setAttribute("sandbox",Vt),u.srcdoc=Eo(Qr(z,e.uri)))}).catch(O=>{console.error("Error fetching HTML content:",O),S("Error loading content")}):i.fetcher._fetch(e.uri).then(async O=>{if(!O.ok)throw new Error(`HTTP ${O.status}`);let z=O.headers.get("content-type")?.split(";",1)[0].trim().toLowerCase();if(z==="text/html"||z==="application/xhtml+xml"){let E=await O.text();u.title=To(E,e.uri);let Y=Io(E);dn.set(e.uri,Y?"dokieli":"html"),Y?Ao(u,e.uri,E,(j,ae)=>i.fetcher._fetch(j,ae),ko()):(u.setAttribute("sandbox",Vt),u.srcdoc=Eo(Qr(E,e.uri)));return}z!=="application/pdf"&&u.setAttribute("sandbox",Vt);let F=URL.createObjectURL(await O.blob());if(w){URL.revokeObjectURL(F);return}b=F,u.src=F}).catch(O=>{console.error("Error fetching content:",O),S("Error loading content")});let A=t.createElement("div");A.classList.add("human-readable-pane__container"),A.classList.add("human-readable-pane__container--iframe"),A.appendChild(u),r.appendChild(A),r.classList.add("human-readable-pane--iframe")}return r}},Lo=zd;import{Serializer as qd}from"rdflib";import $d from"dompurify";Re(he(`.data-content-pane__literal {
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
`,"text/css"));var Vd=0;function Fo(e){let n=e;if(n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;let r=!!(typeof document<"u"?document:void 0)?.outlineManager,i=typeof window<"u"&&typeof window.panes?.getOutliner=="function";(r||i)&&te.openHrefInOutlineMode(e)}var Mo={icon:B.originalIconBase+"rdf_flyer.24.gif",name:"dataContents",audience:[o.solid("Developer")],label:function(e,n){if("http://www.w3.org/2007/ont/link#ProtocolEvent"in n.session.store.findTypeURIs(e))return null;let t=n.session.store.statementsMatching(void 0,void 0,void 0,e).length;return t===0?null:"Data ("+t+")"},statementsAsTables:function(n,t,r){let i=t.dom,a=i.createElement("table");a.classList.add("data-content-pane__table","data-content-pane__table--root");let l=t.environment?.layout==="mobile",c=qd(t.session.store),h=c.rootSubjects(n),m=h.roots,d=h.subjects,s=h.loopBreakers??{};for(let I in s)ce.debug("	dataContentPane: loopbreaker:"+I);let u={},p={},g=++Vd,f=0;function b(I){return f++,`data-content-${g}-${I}-${f}`}function w(I,S=0){let A=i.createElement("table");A.classList.add("data-content-pane__table","data-content-pane__table--property"),A.setAttribute("aria-label","Properties");let O=null,z=d[c.toStr(I)];if(!z)return A.appendChild(i.createTextNode("...")),A;z.sort();let F=0,E;for(let Y=0;Y<z.length;Y++){let j=z[Y],ae=i.createElement("tr");if(ae.classList.add("data-content-pane__row--top-aligned","data-content-pane__row--property"),j.predicate.uri!==O||l){!l&&O&&F>1&&E?.setAttribute("rowspan",""+F),E=i.createElement("th"),E.setAttribute("class","data-content-pane__predicate-cell"),E.setAttribute("scope","row"),E.id=b("predicate");let $=i.createElement("a");$.setAttribute("href",j.predicate.uri),$.addEventListener("click",Fo,!0),$.appendChild(i.createTextNode(N.predicateLabelForXML(j.predicate))),E.appendChild($),ae.appendChild(E),O=j.predicate.uri,F=0}F++;let de=i.createElement("td");de.classList.add("data-content-pane__value-cell"),de.setAttribute("headers",E?.id??""),de.appendChild(_(j.object,S+1)),ae.appendChild(de),A.appendChild(ae)}return!l&&O&&F>1&&E?.setAttribute("rowspan",""+F),A}function _(I,S=0){let A,O;switch(I.termType){case"NamedNode":return O=i.createElement("a"),O.setAttribute("href",I.uri),O.addEventListener("click",Fo,!0),O.appendChild(i.createTextNode(N.label(I))),O;case"Literal":return I.language||!I.datatype||!I.datatype.uri?(A=i.createElement("div"),A.classList.add("data-content-pane__literal"),A.textContent=I.value,I.language&&A.setAttribute("lang",I.language),A):I.datatype.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral"?(A=i.createElement("div"),A.classList.add("embeddedXHTML"),A.setAttribute("role","group"),A.setAttribute("aria-label","Embedded HTML content"),A.innerHTML=$d.sanitize(I.value),A):i.createTextNode(I.value);case"BlankNode":{if(I.toNT()in u){p[I.toNT()]=!0;let F=i.createElement("a");return F.setAttribute("href","#"+I.toNT().slice(2)),F.setAttribute("class","bnodeRef"),F.setAttribute("aria-label",`Referenced blank node ${I.toNT().slice(3)}`),F.textContent="*"+I.toNT().slice(3),F}u[I.toNT()]=!0;let z=w(I,S);return u[I.toNT()]=z,S%2===1?z.classList.add("data-content-pane__nested-table--light"):z.classList.add("data-content-pane__nested-table--dark"),z}case"Collection":A=i.createElement("ol"),A.setAttribute("class","collectionAsTables");for(let z=0;z<I.elements.length;z++){let F=i.createElement("li");F.appendChild(_(I.elements[z],S+1)),A.appendChild(F)}return A;case"Graph":return A=t.session.paneRegistry.byName("dataContents").statementsAsTables(I.statements,t),A.classList.add("data-content-pane__nested-formula"),A;case"Variable":return i.createTextNode("?"+I.uri)}throw new Error("Unhandled node type: "+I.termType)}r&&(m=r.concat(m.filter(function(I){for(let S=0;S<r.length;S++)if(I.sameTerm(r[S]))return!1;return!0})));for(let I=0;I<m.length;I++){let S=i.createElement("tr");S.classList.add(I%2===0?"data-content-pane__row--even":"data-content-pane__row--odd","data-content-pane__row--root"),a.appendChild(S);let A=i.createElement("th");A.classList.add("data-content-pane__subject-cell"),A.setAttribute("scope","row"),A.id=b("subject"),S.appendChild(A);let O=i.createElement("td");O.classList.add("data-content-pane__details-cell"),O.setAttribute("headers",A.id),S.appendChild(O);let z=m[I];z.termType==="BlankNode"?A.appendChild(i.createTextNode(N.label(z))):A.appendChild(_(z,0)),O.appendChild(w(z,0))}for(let I in p){let S=u[I];if(S===!0)continue;let A=i.createElement("caption"),O=i.createElement("a");O.setAttribute("id",I.slice(2)),O.setAttribute("tabindex","-1"),O.setAttribute("class","bnodeDef"),O.setAttribute("aria-label",`Blank node ${I.slice(3)}`),O.textContent=I.slice(3)+")",A.appendChild(O),S.insertBefore(A,S.firstChild)}return a},render:function(e,n){let t=n.dom;function r(l){let c=n.environment??{};l.dataset.layout=c.layout??"desktop",l.dataset.theme=c.theme??"light",l.dataset.inputMode=c.inputMode??"pointer"}function i(){let l=n.session.store,c=l.statementsMatching(void 0,void 0,void 0,e),h=[];l.holds(e,void 0,void 0,e)&&h.push(e);let m=l.any(e,o.foaf("primaryTopic"),void 0,e);m&&(m.termType==="NamedNode"||m.termType==="BlankNode")&&h.push(m);let d=n.session.paneRegistry.byName("dataContents").statementsAsTables(c,n,h);d.setAttribute("aria-label",`Data content for ${N.label(e)}`),a.appendChild(d)}let a=t.createElement("div");return a.classList.add("dataContentPane","data-content-pane"),r(a),i(),a}};import{Util as Jd}from"rdflib";import*as zo from"mime-types";import{html as Oo,render as Kd}from"lit";import{ContextConsumer as Hd,ContextProvider as Wd}from"@lit/context";import{html as Gd}from"lit";import"@lit/context";import"rdflib";import{solidLogicSingleton as jd}from"solid-logic";function Ro(){return{broken:!1}}function Do(){return{contentType:void 0,eTag:void 0}}function Bo(e){return{dataLoaded:e.dataLoaded,resourceUri:e.resourceUri,originalContent:e.originalContent,sourcePaneState:e.sourcePaneState,editorMetadata:e.editorMetadata,updateSourcePaneState:e.updateSourcePaneState,updateContent:e.updateContent,updateMetadata:e.updateMetadata}}var Gt=class extends Ze{static properties={context:{attribute:!1},subject:{attribute:!1},originalContent:{state:!0},dataLoaded:{state:!0},sourcePaneState:{state:!0},editorMetadata:{state:!0}};constructor(){super(),this.__sourceContextValueProvider=new Wd(this,{context:Bi}),this.context=void 0,this.subject=void 0,this.fileExplorerContext=or,new Hd(this,{context:_i,subscribe:!0,callback:n=>{this.fileExplorerContext=n}}),this.originalContent=void 0,this.dataLoaded=!1,this.sourcePaneState=Ro(),this.editorMetadata=Do(),this.sourceContextValue=Bo({dataLoaded:!1,resourceUri:void 0,originalContent:void 0,sourcePaneState:Ro(),editorMetadata:Do(),updateSourcePaneState:()=>{},updateContent:()=>{},updateMetadata:()=>{}})}get sourceContextValue(){return this.__sourceContextValue}set sourceContextValue(n){this.__sourceContextValueProvider.setValue(n),this.__sourceContextValue=n}loadGeneration=0;loadContentAndMetadata=async()=>{if(!this.context||!this.subject)return;let n=this.subject.uri,t=++this.loadGeneration;try{let{content:r,metadata:i}=await jd.resource.fetchContentAndMetadata(this.subject);if(this.subject?.uri!==n||t!==this.loadGeneration)return;this.originalContent=r,this.updateEditorMetadata(i),this.dataLoaded=!0}catch(r){if(Ri("Failed to load source content",r),!this.isConnected)return;let{showError:i}=Gn(this.closest(".sourcePane")??this);i(r.message)}};refreshSourceContextValue(){let n=this.subject?.uri,t=r=>{this.subject?.uri===n&&this.updateOriginalContent(r)};this.sourceContextValue=Bo({dataLoaded:this.dataLoaded,resourceUri:n,originalContent:this.originalContent,sourcePaneState:this.sourcePaneState,editorMetadata:this.editorMetadata,updateSourcePaneState:this.updateSourcePaneState,updateContent:t,updateMetadata:this.updateEditorMetadata})}unregisterEditor;registeredWith;_editingRequested=!1;_childObserver;updateSourcePaneState=(n,t)=>{this.sourcePaneState={...this.sourcePaneState,[n]:t}};updateOriginalContent=n=>{this.originalContent=n};updateEditorMetadata=n=>{this.editorMetadata={contentType:n.contentType,eTag:n.eTag}};beginEditing=()=>{let n=this.querySelector("source-pane-source-editor-card");n?n.beginEditing():this._editingRequested=!0};applyPendingEditing(){if(!this._editingRequested)return;let n=this.querySelector("source-pane-source-editor-card");n&&(this._editingRequested=!1,n.beginEditing())}refreshEditorRegistration(){if(!this.isConnected)return;let n=this.fileExplorerContext,t=!n||n===or?void 0:n.registerEditor;this.registeredWith!==t&&(this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,t&&(this.unregisterEditor=n.registerEditor(this),this.registeredWith=t))}connectedCallback(){super.connectedCallback(),this._childObserver=new MutationObserver(()=>this.applyPendingEditing()),this._childObserver.observe(this,{childList:!0}),this.requestUpdate()}disconnectedCallback(){this._childObserver?.disconnect(),this._childObserver=void 0,this.unregisterEditor?.(),this.unregisterEditor=void 0,this.registeredWith=void 0,super.disconnectedCallback()}willUpdate(n){if(super.willUpdate(n),!this.context)throw new Error("The element is missing the required `context` property.");(n.has("context")||n.has("subject"))&&(this.loadGeneration++,this.dataLoaded=!1),(n.has("context")||n.has("subject")||n.has("dataLoaded")||n.has("originalContent")||n.has("sourcePaneState")||n.has("editorMetadata"))&&this.refreshSourceContextValue()}updated(n){super.updated(n),this.refreshEditorRegistration(),(n.has("context")||n.has("subject"))&&this.loadContentAndMetadata()}render(){return Gd`<slot></slot>`}};customElements.get("source-pane-source-provider")||customElements.define("source-pane-source-provider",Gt);Fi(he(`.sourcePane {
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
`,"text/css"));var Yd={icon:B.iconBase+"noun_109873.svg",name:"source",label:function(e,n){if(/\.[cm]?js$/i.test(new URL(e.uri).pathname))return"Javascript Source";let r=n.session.store.findTypeURIs(e),i=Jd.mediaTypeClass("text/*").uri.split("*")[0];for(let a in r){if(a.startsWith(i))return"Source";if(a.includes("xml"))return"XML Source";if(a.includes("json"))return"JSON Source";if(a.includes("javascript"))return"Javascript Source"}return null},shouldGetFocus:function(e){return/\.[cm]?js$/i.test(new URL(e.uri).pathname)},mintNew:function(e,n){let t=e.session.store,r=n.newInstance;if(r?.uri.endsWith("/")){let l=r.uri.slice(0,-1);r=t.sym(l),n.newInstance=r,n.newBase=l}if(!r){let l=n.newBase;l.endsWith("/")&&(l=l.slice(0,-1),n.newBase=l),r=t.sym(l),n.newInstance=r}let i=zo.lookup(r.uri);if(!i||!(i.startsWith("text")||i.includes("xml")||i.includes("json")||i.includes("javascript"))){let l="A new text file has to have an file extension like .txt .ttl .json etc.";throw alert(l),new Error(l)}function a(l){let c=`
`;return l.includes("json")?c=`{}
`:l.includes("rdf+xml")&&(c=`<rdf:RDF
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

</rdf:RDF>`),c}return new Promise(function(l,c){t.fetcher.webOperation("PUT",r.uri,{data:a(i),contentType:i}).then(function(){Mi("New text file created: "+r.uri),n.newInstance=r,l(n)},h=>{alert("Cant make new file: "+h),c(h)})})},render:function(e,n){let{renderStatusSection:t}=Gn(),r=n.dom.createElement("div");r.setAttribute("class","sourcePane"),r.setAttribute("role","region"),r.setAttribute("aria-label",`Source pane for ${e.uri}`),r.setAttribute("aria-busy","true");let i=!!n.dom.querySelector("solid-ui-dialogs-root");Kd(Oo`
        <source-pane-source-provider
          .context=${n}
          .subject=${e}
        ></source-pane-source-provider>
        ${t()}
        ${i?"":Oo`<solid-ui-dialogs-root></solid-ui-dialogs-root>`}
      `,r);let a=Gn(r),l=!1,c=async()=>{if(!(l||r.querySelector("source-pane-source-editor-card"))){l=!0,a.clearError();try{await import("./part-T6EQBEKP.js"),r.querySelector("source-pane-source-provider")?.append(n.dom.createElement("source-pane-source-editor-card")),r.setAttribute("aria-busy","false")}catch(h){if(Di("Failed to load source editor",{resourceUri:e.uri,error:h}),r.setAttribute("aria-busy","false"),!r.isConnected)return;a.showError("The editor could not be started. Your file has not been changed. Try again; if it still fails, refresh the page. Save any unsaved work elsewhere before refreshing.",{title:"Could not start the source editor",details:h instanceof Error?h.stack??h.message:String(h),onRetry:()=>{c()}})}finally{l=!1}}};return c(),r}},ni=Yd;import*as qo from"rdflib";var ti=new Map;function an(e){let n=String(e);return ti.has(n)||ti.set(n,fetch(n).then(async t=>{if(!t.ok)throw new Error(`loadSheet: ${t.status} ${n}`);let r=new CSSStyleSheet;return r.replaceSync(await t.text()),r})),ti.get(n)}import{html as Xd}from"lit";var Qd=await an(he(`:host {
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
`,"text/css")),ut=class extends Ze{static properties={contentType:{},content:{},accessibilityLabel:{},accessibilityDescription:{}};get _editorMount(){return this.renderRoot?.querySelector(".editor")??null}static styles=Qd;_editor;_initializing=!1;getEditor(){return this._editor}setReadOnly(n){this._editor?.setReadOnly(n)}async _initializeEditor(){if(this._editor||this._initializing)return;this._initializing=!0;let n=this._editorMount;if(!n){this._initializing=!1;return}try{let{CodeEditor:t}=await import("./solid-ui.js");this._editor=new t;try{await this._editor.initialize(n,this.content??"",this.contentType??"","dark",void 0,{label:this.accessibilityLabel,description:this.accessibilityDescription})}catch(r){throw new Error(`Error initializing code editor: ${r instanceof Error?r.message:String(r)}`)}this._editor?.setReadOnly(!0)}catch(t){console.log("Error loading CodeEditor module:",t)}finally{this._initializing=!1}}async firstUpdated(){await this._initializeEditor()}disconnectedCallback(){super.disconnectedCallback(),this._editor&&(this._editor.destroy(),this._editor=void 0),this._initializing=!1}render(){return Xd`
      <section class="editor-card">
        <div class="editor"></div>
      </section>
    `}};customElements.get("solid-panes-editor-card")||customElements.define("solid-panes-editor-card",ut);Re(he(`.n3-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var Zd=o,$o={icon:B.originalIconBase+"w3c/n3_smaller.png",name:"n3",audience:[Zd.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"Data ("+r+") as N3"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","n3-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),l=qo.Serializer(r);l.suggestNamespaces(r.namespaces),l.setBase(e.uri);let c=l.statementsToN3(a),h=t.createElement("solid-panes-editor-card");return h.contentType="text/n3",h.content=c,h.accessibilityLabel=`Generated N3 for ${e.uri}`,h.accessibilityDescription="Generated N3 serialization. This content is read-only.",i.appendChild(h),i}};import{Serializer as ec}from"rdflib";Re(he(`.rdfxml-pane {
	width: 100%;
	min-width: 0;
	border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
	box-sizing: border-box;
}
`,"text/css"));var Vo={icon:B.originalIconBase+"22-text-xml4.png",name:"RDFXML",audience:[o.solid("Developer")],label:function(e,n){let t=n.session.store;if("http://www.w3.org/2007/ont/link#ProtocolEvent"in t.findTypeURIs(e))return null;let r=t.statementsMatching(void 0,void 0,void 0,e).length;return r===0?null:"As RDF/XML ("+r+")"},render:function(e,n){let t=n.dom,r=n.session.store,i=t.createElement("div");i.setAttribute("class","rdfxml-pane");let a=r.statementsMatching(void 0,void 0,void 0,e),l=ec(r);l.suggestNamespaces(r.namespaces),l.setBase(e.uri);let c=l.statementsToXML(a),h=t.createElement("solid-panes-editor-card");return h.contentType="application/rdf+xml",h.content=c,h.accessibilityLabel=`Generated RDF/XML for ${e.uri}`,h.accessibilityDescription="Generated RDF/XML serialization. This content is read-only.",i.appendChild(h),i}};import{authn as nc}from"solid-logic";import*as ri from"rdflib";Re(he(`.formPane a {
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
`,"text/css"));var Je=o;function $n(e){return e?.termType==="NamedNode"}function ii(e,n){let t=n.doc?n.doc():void 0,r=e.each(n,Je.rdf("type"),void 0,t).filter($n),i=r.some(s=>s.sameTerm(Je.ui("Group"))),a=r.some(s=>!s.sameTerm(Je.ui("Group"))&&!s.sameTerm(Je.ui("Form"))),l=!!e.any(n,Je.ui("property"),void 0,t),c=e.any(n,Je.ui("parts"),void 0,t),h=!!c?.elements?.length||e.each(n,Je.ui("part"),void 0,t).length>0;i&&a&&l&&!h&&e.removeMany(n,Je.rdf("type"),Je.ui("Group"),t);let m=c?.elements??[];for(let s of m)$n(s)&&ii(e,s);let d=e.each(n,Je.ui("part"),void 0,t);for(let s of d)$n(s)&&ii(e,s)}function tc(e){let n=Array.from(e.querySelectorAll("textarea"));for(let t of n){let r=t.parentElement;for(;r;){let i=r.firstElementChild;if(!!i&&(i.classList.contains("formFieldName")||i.querySelector("a")!==null)&&r.children.length>=2){r.classList.add("formPane__mobileTextareaRow"),i.classList.add("formPane__mobileTextareaLabel"),r.children[1].classList.add("formPane__mobileTextareaValue");break}r=r.parentElement}}}var Ho={icon:B.iconBase+"noun_122196.svg",name:"form",audience:[Je.solid("PowerUser")],label:function(e,n){let t=te.formsFor(e).length;return ce.debug("Form pane: forms for "+e+": "+t),t?""+t+" forms":null},render:function(e,n){let t=n.session.store,r=n.dom,i=r.createElement("div");i.setAttribute("class","formPane");function a(f){let b=n.environment??{};f.dataset.layout=b.layout??"desktop"}a(i);let l=function(f,b="info"){let w=r.createElement("p");return w.className=`formPane__message formPane__message--${b}`,i.appendChild(w).textContent=f,w},c=function(f){return l(f,"error")},h=function(f,b){f||c(`Sorry, failed to save your change:
`+b)},m=nc.currentUser();m?t.each(m,Je.ui("workspace")).length===0&&l(`You don't seem to have any workspaces defined.  A workspace is a place on the web (http://..) or in the file system (file:///) to store application data.
`):l("You are not logged in. If you log in and have workspaces then you would be able to select workspace in which to put this new information");let d=function(f,b){t.fetcher.nowOrWhenFetched(f.uri,b,function(w,_){if(!w)return c("Cannot load store "+f.uri+": "+_);let I=te.formsFor(b);for(let S of I){ii(t,S);let A=r.createElement("h4");if(A.classList.add("formPane__heading"),i.appendChild(A),S.uri){let z=ri.Util.uri.document(S.uri);z.uri!==S.uri&&i.appendChild(te.editFormButton(r,i,S,z,h)).classList.add("formPane__editButton")}let O=r.createElement("a");O.classList.add("formPane__headingLink"),O.setAttribute("href",S.uri),A.insertBefore(O,A.firstChild),O.textContent=N.label(S,!0),te.appendForm(r,i,{},b,S,f,h),tc(i)}})},s=null,u=ri.Util.uri.docpart(e.uri);t.updater.editable(u,t)&&(s=e.doc());let p=t.any(t.sym(u),Je.link("annotationStore"));if(!s&&$n(p)&&(s=p),!s){let f=new Map;t.statementsMatching(e).forEach(function(w){w.why.value&&f.set(w.why.value,1)}),t.statementsMatching(void 0,void 0,e).forEach(function(w){w.why.value&&f.set(w.why.value,2)});let b=Array.from(f.entries()).sort(function([w,_],[I,S]){return _-S||w.localeCompare(I)});for(let[w]of b)if(w&&t.updater.editable(w,t)){s=t.sym(w);break}}let g="2014";if(s)d(s,e);else{c("No suitable store is known, to edit <"+e.uri+">.");let f={noun:"form",appPathSegment:"form"},b=Fe.selectWorkspace(r,f,function(w){let _=w?t.sym(w):null;if(!_){c("Workspace selection was cancelled.");return}l("Workspace selected OK: "+_.uri);let I=t.each(void 0,Je.space("workspace"),_).filter($n);for(let S=0;S<I.length;S++){let A=I[S],O=t.any(A,Je.space("store")),z=t.any(A,Je.cal("dtstart"))?.value,F=t.any(A,Je.cal("dtend"))?.value;if($n(O)&&z&&F&&z<=g&&F>g){d(O,e);break}else c("Note no suitable annotation store in activity: "+A)}});i.appendChild(b)}return i}};var Wo={icon:B.originalIconBase+"table.png",name:"tableOfClass",label:function(e,n){let t=n.session.store;if(!t.any(void 0,o.rdf("type"),e))return null;let r=t.statementsMatching(void 0,o.rdf("type"),e).length;return r===0||r>15?null:N.label(e)+" table"},render:function(e,n){let t=n.dom,r=t.createElement("div");return r.setAttribute("class","tablePane"),r.appendChild(Nn(t,{tableClass:e})),r}};import*as jt from"rdflib";Re(he(`.defaultPane .bottom-border {
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
`,"text/css"));var rc=o,Go={icon:B.originalIconBase+"about.png",name:"default",audience:[rc.solid("Developer")],label:function(e){return"About "},render:function(e,n){let t=n.dom;function r(d){let s=n.environment??{};d.dataset.layout=s.layout??"desktop"}let i=function(d,s){return!(typeof n.session.paneRegistry.byName("internal").predicates[d.uri]<"u"||s&&d.uri==="http://www.w3.org/1999/02/22-rdf-syntax-ns#type")},a=n.getOutliner(t),l=n.session.store;ce.info("@defaultPane.render, dom is now "+t.location),e=l.canon(e);let c=t.createElement("div");c.setAttribute("class","defaultPane"),r(c);let h=e.termType==="Literal"?[]:l.statementsMatching(e);a.appendPropertyTRs(c,h,!1,i),h=l.statementsMatching(void 0,void 0,e),a.appendPropertyTRs(c,h,!0,i);let m=e.termType==="BlankNode"?l.anyStatementMatching(e):void 0;if(e.termType==="Literal"&&e.value.slice(0,7)==="http://"&&a.appendPropertyTRs(c,[jt.st(l.sym(e.value),o.link("uri"),e)],!0,i),e.termType==="NamedNode"&&l.updater.editable(jt.Util.uri.docpart(e.uri),l)||e.termType==="BlankNode"&&m&&m.why&&"uri"in m.why&&typeof m.why.uri=="string"&&l.updater.editable(m.why.uri)){let d=t.createElement("tr"),s=t.createElement("td");s.setAttribute("colspan","2"),s.setAttribute("notSelectable","true");let u=t.createElement("img");u.src=B.originalIconBase+"tango/22-list-add-new.png",u.addEventListener("click",function(g){a.UserInput.addNewPredicateObject(g),g.stopPropagation(),g.preventDefault()}),u.className="bottom-border-active",c.appendChild(d).appendChild(s).appendChild(u)}return c}};import*as ai from"rdflib";var ic=o,jo={icon:B.iconBase+"noun_170702.svg",name:"ui",audience:[ic.solid("PowerUser")],label:function(e,n){let t=o,i=n.session.store.findTypeURIs(e);return i[t.rdfs("Class").uri]?"creation forms":i[t.ui("Form").uri]?"edit form":null},render:function(e,n){let t=n.dom,r=n.session.store,i=o,a=t.createElement("div");a.setAttribute("class","formPane");let l=N.label(e),c=function(b,w){let _=t.createElement("p");return _.setAttribute("style",w||"color: grey; background-color: white"),a.appendChild(_).textContent=b,_},h=function(b,w){c(b,"style",w||"color: grey; background-color: #fdd")},m=function(f,b){f||h(`Sorry, failed to save your change:
`+b)},d=r.findTypeURIs(e),s=null,u;e.uri&&(u=ai.Util.uri.docpart(e.uri),e.uri!==u&&r.updater.editable(u)&&(s=r.sym(ai.Util.uri.docpart(e.uri)))),s||(s=r.any(r.sym(u),i.link("annotationStore"))),s||(s=te.defaultAnnotationStore(e)),s||(s=r.sym("https://formsregistry.solid.community/public/formRegistry/"));let p;d[i.rdfs("Class").uri];let g=c("(Loading data from: "+s+")");return r.fetcher.nowOrWhenFetched(s.uri,e,function(f,b){if(!f){h("Cannot load store "+s+" :"+b);return}if(a.removeChild(g),d[i.rdfs("Class").uri]){let w=function(I,S){let A=r.statementsMatching(e,I),O=n.getOutliner(t);if(A.length){for(let z=0;z<A.length;z++){O.appendPropertyTRs(a,[A[z]]);let F=A[z].object,E=t.createElement("td");a.lastChild.appendChild(E),S&&E.appendChild(te.newButton(t,r,null,null,e,F,s,function(j,ae){j||h(`Sorry, failed to save your change:
`+ae)}));let Y=r.statementsMatching(F,i.rdf("type"));Y.length||(Y=r.statementsMatching(F)),Y.length?te.editFormButton(t,a,F,Y[0].why,m):h("No data about form")}a.appendChild(t.createElement("hr"))}else c("There are currently no known forms to make a "+l+".")};p=i.ui("creationForm"),a.appendChild(t.createElement("h2")).textContent=N.label(p),c("Creation forms allow you to add information about a new thing, in this case a new "+l+"."),w(p,!0),a.appendChild(t.createElement("hr")),c("You can make a new creation form:"),a.appendChild(te.newButton(t,r,e,p,i.ui("Form"),null,s,m)),a.appendChild(t.createElement("hr")),p=i.ui("annotationForm"),a.appendChild(t.createElement("h2")).textContent=N.label(p),c("Annotaion forms allow you to add extra information about a ,"+l+" we already know about."),w(p,!1),a.appendChild(t.createElement("hr")),c("You can make a new annotation form:"),a.appendChild(te.newButton(t,r,e,p,i.ui("Form"),null,s,m)),c("(Storing new forms in: "+s+")")}else d[i.ui("Form").uri]?te.appendForm(t,a,r,e,i.ui("FormForm"),s,m):h("ui/pane internal error -- Eh?")}),a}};var ac={icon:B.iconBase+"padlock-timbl.svg",name:"sharing",label:(e,n)=>{let r=n.session.store.findTypeURIs(e);return r[o.ldp("Resource").uri]||r[o.ldp("Container").uri]||r[o.ldp("BasicContainer").uri]?"Sharing":null},render:(e,n)=>{let t=n.dom,r=n.session.store,i=l(),a=t.createElement("div");return a.classList.add("sharingPane"),Cn.preventBrowserDropEvents(t),a.appendChild(Cn.ACLControlBox5(e,n,i,r)),a;function l(){let c=r.findTypeURIs(e);return c[o.ldp("BasicContainer").uri]||c[o.ldp("Container").uri]?"Folder":"File"}}},Jo=ac;import{solidLogicSingleton as sc}from"solid-logic";import{literal as lc,st as Yt,sym as Tn}from"rdflib";import{html as Jt}from"lit";var oc=await an(he(`solid-ui-dialog-footer {
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
`,"text/css")),Kt=class extends Ze{static properties={title:{type:String},message:{type:String},confirmation:{type:Boolean}};constructor(){super(),this.title="",this.message="",this.confirmation=!1}static styles=oc;result=null;returnFocus=null;open(){let n=this.ownerDocument.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return this.returnFocus=n instanceof HTMLElement?n:null,new Promise(t=>{this.result=t})}closeDialog(n){let r=this.shadowRoot?.querySelector("solid-ui-dialog")?.shadowRoot?.querySelector("dialog");this.result?.(n),this.result=null,r?.open&&r.close(),this.remove()}disconnectedCallback(){if(super.disconnectedCallback(),this.result?.(!1),this.result=null,this.returnFocus?.isConnected)this.returnFocus.focus();else{let n=this.ownerDocument.querySelector("main");if(n){let t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus(),t===null?n.removeAttribute("tabindex"):n.setAttribute("tabindex",t)}}this.returnFocus=null}async firstUpdated(){super.firstUpdated();let n=this.shadowRoot?.querySelector("solid-ui-dialog");await n?.updateComplete;let t=n?.shadowRoot?.querySelector("dialog");if(!t)throw new Error("Internal pane dialog did not render a native dialog");t.setAttribute("aria-label",this.title),t.setAttribute("aria-description",this.message),t.addEventListener("cancel",i=>{i.preventDefault(),this.closeDialog(!1)}),t.addEventListener("close",()=>{this.isConnected&&this.closeDialog(!1)});let r=this.shadowRoot?.querySelector("[data-initial-action]");await r?.updateComplete,r?.shadowRoot?.querySelector("button")?.focus()}handleKeyDown(n){if(n.key!=="Tab")return;let t=Array.from(this.shadowRoot?.querySelectorAll("solid-ui-button")??[]).map(i=>i.shadowRoot?.querySelector("button")).filter(i=>!!i&&!i.disabled),r=t.findIndex(i=>{let a=i.getRootNode();return a instanceof ShadowRoot&&a.activeElement===i});n.shiftKey&&r===0?(n.preventDefault(),t[t.length-1]?.focus()):!n.shiftKey&&r===t.length-1&&(n.preventDefault(),t[0]?.focus())}render(){let[n,...t]=this.message.split(`
`);return Jt`
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
            ${t.map(r=>Jt`<span class="resource-action-dialog-emphasis">${r}</span>`)}
          </p>
        </solid-ui-dialog-content>
        <solid-ui-dialog-footer slot="footer">
          ${this.confirmation?Jt`
                <solid-ui-button data-initial-action variant="secondary" @click=${()=>this.closeDialog(!1)}>
                  Cancel
                </solid-ui-button>
                <solid-ui-button @click=${()=>this.closeDialog(!0)}>
                  Delete
                </solid-ui-button>
              `:Jt`
                <solid-ui-button data-initial-action @click=${()=>this.closeDialog(!1)}>
                  OK
                </solid-ui-button>
              `}
        </solid-ui-dialog-footer>
      </solid-ui-dialog>
    `}};customElements.get("solid-panes-resource-action-dialog")||customElements.define("solid-panes-resource-action-dialog",Kt);Re(he(`.internalPaneContent {
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
`,"text/css"));var dc={icon:B.originalIconBase+"tango/22-emblem-system.png",name:"internal",label:function(){return"Under The Hood"},render:function(e,n){let t=n.dom,r=n.session.store,i=r.canon(e),a=r.findTypeURIs(i);function l(g){if(a["http://www.w3.org/2007/ont/link#ProtocolEvent"])return!0;let f=n.session.paneRegistry.byName("internal");return f&&f.predicates&&typeof f.predicates[g.uri]<"u"}let c=t.createElement("div");c.classList.add("internalPane","internalPaneContent");function h(g,f){let b=t.createElement("solid-panes-resource-action-dialog");b.title=g,b.message=f,b.confirmation=!1,b.open(),t.body?.appendChild(b)}function m(g){let f=t.createElement("solid-panes-resource-action-dialog");f.title="Delete resource",f.message=g,f.confirmation=!0;let b=f.open();return t.body?.appendChild(f),b}if(e.uri&&!e.uri.includes("#")){let g=c.appendChild(t.createElement("table"));g.classList.add("internalPaneControls");let f=g.appendChild(t.createElement("tr")),b=f.appendChild(t.createElement("td")),w=e.uri&&e.uri.endsWith("/")||r.holds(e,o.rdf("type"),o.ldp("Container")),_=w?"folder":"file";if(!cc(e)){let A=!1,O=te.button(t,B.iconBase+"noun_2188_red.svg","Remove this "+_,()=>{if(A)return;let z=N.label(e)||e.value,F=w?`Are you sure you want to delete "${z}" and all its contents?
This can't be undone.`:`Are you sure you want to delete "${z}"?
This can't be undone.`;return m(F).then(E=>E?(A=!0,O.disabled=!0,(n.session.logic?.resource||sc.resource).recursiveDelete(e).then(()=>{let j=w?`Deleted "${z}" and all of its contents.`:`Deleted "${z}".`;console.log(j),h("Resource deleted",j),t.dispatchEvent(new CustomEvent("solid-resource-deleted",{detail:{resource:e}}))}).catch(j=>{let ae="Unable to delete "+e+": "+(j instanceof Error?j.message:String(j));console.log(ae),h("Unable to delete resource",ae)}).finally(()=>{A=!1,O.disabled=!1})):void 0)});O.classList.add("internalPaneDeleteButton"),O.style.backgroundColor="transparent",O.style.border="none",O.style.padding="0",b.appendChild(O)}let I=f.appendChild(t.createElement("td")),S=te.button(t,B.iconBase+"noun_479395.svg","refresh");I.appendChild(S),S.addEventListener("click",()=>{if(!r.fetcher)throw new Error("Store has no fetcher");r.fetcher.refresh(e,function(A,O){let z;A?z="Refreshed OK: "+e:z="Error refreshing: "+e+": "+O,console.log(z),h(A?"Resource refreshed":"Unable to refresh resource",z)})})}let s=r.statementsMatching(e).slice(),u="";if(!r.fetcher)throw new Error("Store has no fetcher");if(e.uri&&(s.push(Yt(e,Tn("http://www.w3.org/2007/ont/link#uri"),Tn(e.uri),r.fetcher.appNode)),e.uri.indexOf("#")>=0?(u=e.uri.split("#")[0],s.push(Yt(e,Tn("http://www.w3.org/2007/ont/link#documentURI"),Tn(e.uri.split("#")[0]),r.fetcher.appNode)),s.push(Yt(e,Tn("http://www.w3.org/2007/ont/link#document"),Tn(e.uri.split("#")[0]),r.fetcher.appNode))):u=e.uri),u){if(!r.updater)throw new Error("Store has no updater");let g=r.updater.editable(u);g&&s.push(Yt(e,Tn("http://www.w3.org/ns/rww#editable"),lc(g.toString()),r.fetcher.appNode))}let p=n.getOutliner(t);return p.appendPropertyTRs(c,s,!1,l),s=r.statementsMatching(void 0,void 0,e),p.appendPropertyTRs(c,s,!0,l),c},predicates:{"http://www.w3.org/2007/ont/link#request":1,"http://www.w3.org/2007/ont/link#requestedBy":1,"http://www.w3.org/2007/ont/link#source":1,"http://www.w3.org/2007/ont/link#session":2,"http://www.w3.org/2007/ont/link#uri":1,"http://www.w3.org/2007/ont/link#documentURI":1,"http://www.w3.org/2007/ont/link#document":1,"http://www.w3.org/2007/ont/link#all":1,"http://www.w3.org/2007/ont/link#Document":1,"http://www.w3.org/ns/rww#editable":1,"http://www.w3.org/2000/01/rdf-schema#seeAlso":1,"http://www.w3.org/2002/07/owl#":1},classes:{"http://www.w3.org/2007/ont/link#ProtocolEvent":1}};function cc(e){let n=e.site().uri;return e.uri===n||e.uri===n+"profile/"||e.uri===n+"profile/card"||e.uri===n+"settings/"||e.uri===n+"settings/prefs.ttl"||e.uri===n+"settings/privateTypeIndex.ttl"||e.uri===n+"settings/publicTypeIndex.ttl"||e.uri===n+"settings/serverSide.ttl"}var Ko=dc;import"rdflib";import{authn as uc}from"solid-logic";var pc={icon:B.iconBase+"noun_547570.svg",global:!0,name:"home",label:function(){return"Home"},audience:[o.solid("PowerUser")],render:function(e,n){let t=n.dom,r=async function(){let l={div:i,dom:t,statusArea:i,me:a};i.appendChild(t.createElement("h4")).textContent="Create new thing somewhere";let h={div:i.appendChild(t.createElement("div")),dom:t,statusArea:i,me:a},m=await Fe.filterAvailablePanes(n.session.paneRegistry.list);Un.newThingUI(h,n,m),Fe.registrationList(l,{}).then(function(){})},i=t.createElement("div"),a=uc.currentUser();return r(),i}},Yo=pc;function Xo(e){e(Tr);let n=Tr.editor;n?e(n):console.log("@@@ editProfileView","profilePane is not providing an editor pane"),e(Ta),e(Na),e(Wa),e(Rr),e(ja),e(Ja),e(Ka),e(Xa),e(Qa),e(ot),e(Or),e($r),e(eo),e(to),e(ro),e(ao),e(so),e(po),e(Hr),e(bo),e(fo),e(_o),e(Lo),e(Mo),e(ni),e($o),e(Vo),e(Ho),e(Wo),e(Go),e(jo),e(Jo),e(Ko),e(Yo)}import"rdflib";function Qo(e,n,t,r,i){return{dom:e,getOutliner:An,session:{paneRegistry:n,store:t,logic:r},environment:i}}import"rdflib";import{authSession as bt}from"solid-logic";import{html as Vn,render as hc}from"lit-html";import{html as mc}from"lit";var fc=await an(he(`/* @custom-media from solid-ui/breakpoints.css substituted below by tools/convert.mjs */

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
`,"text/css")),pt=class extends Ze{static properties={menuItems:{type:Array}};constructor(){super(),this.menuItems=[]}static styles=fc;render(){return mc`
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
    `}};customElements.get("solid-panes-header")||customElements.define("solid-panes-header",pt);async function Zo(e){let n=document.querySelector("solid-panes-header");if(n)return n;let t=await En(),r=t?await Tt(t):[],i=document.getElementById("MainContent"),a=document.createElement("div"),l=r.map(m=>({label:Vn`<icon-lucide-folder-open slot="left-icon"></icon-lucide-folder-open> ${m.label()}`,async onSelected(){await En()&&await e.show({kind:"storage",pane:m,source:"accountMenu"})}})),c=[{label:Vn`<icon-lucide-user slot="left-icon"></icon-lucide-user> Profile`,async onSelected(){let m=await En();m&&await e.show({kind:"profile",subject:m.value,source:"accountMenu"})}},{label:Vn`<icon-lucide-users slot="left-icon"></icon-lucide-users> Friends`,async onSelected(){let m=await En();m&&await e.show({kind:"friends",subject:m.value,source:"accountMenu"})}},...l,{label:Vn`<icon-lucide-layout-dashboard slot="left-icon"></icon-lucide-layout-dashboard> Dashboard`,async onSelected(){await En()&&await e.show({kind:"app",pane:"home",source:"accountMenu"})}},{label:Vn`<icon-lucide-settings-2 slot="left-icon"></icon-lucide-settings-2> Preferences`,async onSelected(){await En()&&await e.show({kind:"app",pane:"basicPreferences",source:"accountMenu"})}}];hc(Vn`<solid-panes-header .menuItems=${c}></solid-panes-header>`,a);let h=a.firstElementChild;if(!h)throw new Error("Failed to create header");return i&&i.parentNode?i.parentNode.insertBefore(h,i):document.body.prepend(h),h}import{store as ts}from"solid-logic";import{html as bc,render as wc}from"lit-html";import{html as es}from"lit";var gc=await an(he(`:host {
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
`,"text/css")),mt=class extends Ze{static properties={navbarItems:{type:Array}};constructor(){super(),this.navbarItems=[]}static styles=gc;selectItem(n){this.dispatchEvent(new CustomEvent("solid-ui-select",{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}render(){return es`
    <nav class="navbar">
       ${this.navbarItems.map(n=>es`
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
    `}};customElements.get("solid-panes-navbar")||customElements.define("solid-panes-navbar",mt);function si(){return Zn(window.location.href,hn().viaAccountMenu)}var rs;function is(e,n){rs?.(e,n)}function oi(e,n,t,r,i=!1){return{label:e,paneName:n,paneUri:t,async onSelected(){return await si(),r()},selected:i}}function ns(e,n,t){let r=wr(t,Qe(ts.sym(window.location.href))),i=[];if(e.owner){let a=e.owner;i.push(oi("Profile","profile",a,()=>n.show({kind:"profile",subject:a}),Xn({paneName:"profile"},r,0)),oi("Friends","social",a,()=>n.show({kind:"friends",subject:a}),Xn({paneName:"social"},r,0)))}return e.storagePanes.forEach(a=>{i.push(oi(a.label(),a.paneName,a.subject.value,()=>n.show({kind:"storage",pane:a}),Xn({paneName:a.paneName,paneUri:a.subject.value},r,e.storagePanes.length)))}),i}async function as(e){let n=document.querySelector("solid-panes-navbar");if(n)return await si(),n;let t=document.getElementById("MainContent"),r=document.createElement("div"),i=await gn(window.location.href),a=ns(i,e,hn().view);function l(u){a=a.map(p=>({...p,selected:p===u}))}function c(u){let{detail:p}=u;l(p),Promise.resolve(p.onSelected?.()).catch(g=>{console.error("Navbar menu item selection failed:",g)}),h()}function h(){wc(bc`<solid-panes-navbar .navbarItems=${a} @solid-ui-select=${c}></solid-panes-navbar>`,r)}h(),rs=(u,p)=>{let g=ea(a,u,p);g&&(l(g),h())};let m=r.firstElementChild;if(!m)throw new Error("Failed to create nav bar");t?t.insertBefore(m,t.firstChild):document.body.prepend(m),await si();let d=0,s=Pt(({url:u,state:p})=>{if(!m.isConnected)return s();Zn(u,p.viaAccountMenu).catch(f=>console.error("Failed to update navbar visibility:",f));let g=++d;gn(u).then(f=>{if(g===d){if(ua(i,f)){let b=wr(p.view,Qe(ts.sym(u))),w=a.map(_=>({..._,selected:Xn(_,b,i.storagePanes.length)}));w.some((_,I)=>_.selected!==a[I].selected)&&(a=w,h());return}i=f,a=ns(f,e,p.view),h()}}).catch(f=>console.error("Failed to rebuild the navbar for the new pod:",f))});return m}function os(e){let{store:n,outliner:t,byName:r,effects:i,podContextOf:a=gn}=e,l=0;async function c(s){if(!s.uri.endsWith("/"))return;let u=s.site().uri===s.uri,{storagePanes:p,viewerStorages:g}=await a(s.uri),f=p.some(b=>b.subject.uri===s.uri)||g.includes(s.uri);return u||f?Et(s):void 0}async function h(s,u){let p=u?void 0:await a(s);return ta({viaAccountMenu:u,inViewerPod:!!p&&Cr(p,s),hasOwner:!!p?.owner})}async function m(s,u){if(u.subject){let p=n.sym(u.subject);if(u.kind==="profile")return It(p,r);if(u.kind==="friends")return vr(p,r);if(u.kind==="storage")return Et(p)}return u.pane?r(u.pane)??void 0:Qe(s)?It(s,r):c(s)}async function d(s,u,p){switch(s.kind){case"restore":return m(u,p.view);case"profile":return It(n.sym(s.subject),r);case"friends":return vr(n.sym(s.subject),r);case"storage":return s.pane;case"app":return r(s.pane)}}return{async show(s){let u=++l,p=hn(),g=s.kind==="restore"?p.viaAccountMenu?"accountMenu":"default":s.source??"default";g==="accountMenu"&&St(!0);let f=n.sym(s.kind==="restore"&&s.subject?s.subject:window.location.href),b=await d(s,f,p);if(u!==l)return;if(!b&&s.kind!=="restore"){console.warn("Could not open the requested view for the logged-in user.");return}let w=b&&b.name==="folder"?b.subject?.uri:void 0,_=w?await h(w,g==="accountMenu"):void 0;if(u===l){if(t.GotoSubject(f,!0,b??void 0,!0,void 0,void 0,_?{source:g,folderView:_}:{source:g}),g!=="accountMenu"){let{view:I}=hn();I.pane&&i.selectNavbarPane(I.pane,I.subject)}await i.refreshHeading(s.kind==="restore"&&s.forceHeading===!0)}}}}import{authn as ci,authSession as ht,store as hs}from"solid-logic";import"rdflib";import{store as ds}from"solid-logic";import"rdflib";async function cs(e){let n=dt(e);if(n!=="owner")return n;try{return ds.updater?.editable?.(e.doc())?"owner":"anonymous"}catch(t){return console.warn("Failed to check profile edit permissions.",t),"anonymous"}}function us(e,n=ds){let t=e.doc(),r=n.anyValue(e,o.vcard("nickname"))||n.anyValue(e,o.foaf("nick"))||void 0,i=n.anyValue(e,o.vcard("bday"))||void 0,a=te.findImage(e)||void 0,l=ss(n,e,o.vcard("hasTelephone"),t,"phone"),c=ss(n,e,o.vcard("hasEmail"),t,"email"),h=yc(n,e,t),m=n.any(e,o.vcard("hasAddress"),null,t)||void 0,d=m,s=m?{entryNode:m,type:n.any(d,o.rdf("type"),null,t)||void 0,streetAddress:n.anyValue(d,o.vcard("street-address"))||void 0,locality:n.anyValue(d,o.vcard("locality"))||void 0,region:n.anyValue(d,o.vcard("region"))||void 0,postalCode:n.anyValue(d,o.vcard("postal-code"))||void 0,countryName:n.anyValue(d,o.vcard("country-name"))||void 0}:void 0,u=s?.countryName,p=s?.locality,g=n.anyValue(e,o.solid("preferredSubjectPronoun"))||"",f=n.anyValue(e,o.solid("preferredObjectPronoun"))||"",b=g?`${g}${f?`/${f}`:""}`:void 0;return{name:N.label(e),nickname:r,imageSrc:a,dateOfBirth:i,jobTitle:h,primaryPhone:l,primaryEmail:c,primaryAddress:s,location:u&&p?`${p}, ${u}`:u||p||void 0,pronouns:b,entryNode:e}}function yc(e,n,t){let r=e.each(null,o.org("member"),n,t).filter(a=>!e.holds(a,o.rdf("type"),o.schema("EducationalOccupationalCredential"),t)).map(a=>{let l=a,h=e.each(l,o.rdf("type"),null,t).find(g=>g.value.startsWith(o.solid("").value))?.value.split(/[#/]/).pop()?.toLowerCase(),m=e.anyValue(l,o.vcard("role"),null,t)||void 0,d=e.any(l,o.org("role"),null,t),s=d&&e.anyValue(d,o.schema("name"),null,t)||void 0,u=e.any(l,o.schema("endDate"),null,t);return{title:s&&m?`${s} - ${m}`:m||s,roleType:h,isCurrent:!u||h==="currentrole"}});return(r.find(a=>a.isCurrent)||r.find(a=>a.roleType!=="currentrole"&&a.roleType!=="futurerole"))?.title}function ss(e,n,t,r,i){let a=[],l=[...e.statementsMatching(n,t,null,r),...e.statementsMatching(n,t)].map(h=>h.object),c=new Set;for(let h of l){if(c.has(h.value))continue;c.add(h.value);let m=vc(e,h,r,i);if(!m)continue;let d=h.termType==="NamedNode"?[...e.each(h,o.rdf("type"),null,r),...e.each(h,o.rdf("type"))]:[],s=d[0]||(i==="email"?o.vcard("Internet"):o.vcard("Voice")),u={entryNode:h,type:s,valueNode:m};if(d.some(p=>xc(p.value)))return u;a.push(u)}return a[0]}function vc(e,n,t,r){return ls(n.value,r)?n:n.termType!=="NamedNode"?void 0:[...e.each(n,o.vcard("value"),null,t),...e.each(n,o.vcard("value"))].find(a=>ls(a.value,r))}function ls(e,n){let t=e.trim();return n==="email"?/^mailto:/i.test(t)||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):/^tel:/i.test(t)||/^[+()\-\s\d]{5,}$/.test(t)}function xc(e){let n=e.trim().toLowerCase();return n==="work"||n.endsWith("#work")||n.endsWith("/work")}import{authn as di,store as kc}from"solid-logic";import{html as Ke,nothing as cn}from"lit";import{authn as Cc,store as Xt}from"solid-logic";import{st as _c}from"rdflib";var vn={add:"Add as friend",exists:"Already a friend",success:"Friend was added!",duplicate:"Friend already exists",loginRequired:"Current user not found! Not logged in?"};function ps(e){if(!Cc.currentUser()?.sameTerm(e))throw new Error(vn.loginRequired)}async function li(e,n){return await Xt.fetcher.load(e),ps(e),Xt.whether(e,o.foaf("knows"),n,e.doc())>0}async function ms(e,n){if(ps(e),await li(e,n))throw new Error(vn.duplicate);Oi(Xt);try{await Xt.updater.update([],[_c(e,o.foaf("knows"),n,e.doc())])}catch(t){throw vt(t).includes("Unauthenticated")?new Error(vn.loginRequired):t}}var Ic=(...e)=>import("./part-IGM5BBTU.js").then(n=>n.createHeadingEditDialog(...e)),Ec=await an(he(`:host {
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
`,"text/css")),ft=class extends Ze{static properties={profileData:{attribute:!1},subject:{attribute:!1},editContext:{attribute:!1},friendSubject:{attribute:!1},compact:{type:Boolean,reflect:!0},failedImageSrc:{state:!0},friendState:{state:!0},friendMessage:{state:!0},friendError:{state:!0}};constructor(){super(),this.profileData=void 0,this.subject=void 0,this.editContext=void 0,this.friendSubject=void 0,this.compact=!1,this.failedImageSrc=void 0,this.friendState="loading",this.friendMessage="",this.friendError=!1}static styles=Ec;friendRequest=0;friendRequestInterrupted=!1;friendMessageTimer;draggableSubject={uri:""};draggableElementsAttached=!1;connectedCallback(){super.connectedCallback(),this.friendRequestInterrupted&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}disconnectedCallback(){super.disconnectedCallback(),this.friendRequest++,(this.friendState==="loading"||this.friendState==="saving")&&(this.friendRequestInterrupted=!0),this.clearFriendMessage()}clearFriendMessage(){clearTimeout(this.friendMessageTimer),this.friendMessageTimer=void 0,this.friendMessage=""}willUpdate(n){super.willUpdate(n),n.has("profileData")&&n.get("profileData")?.imageSrc!==this.profileData?.imageSrc&&(this.failedImageSrc=void 0),n.has("friendSubject")&&(this.friendRequestInterrupted=!1,this.startFriendCheck())}updated(){if(this.subject&&(this.draggableSubject.uri=this.subject.value),this.draggableElementsAttached||!this.subject)return;let n=this.shadowRoot?.querySelector(".profile-heading"),t=this.shadowRoot?.querySelector(".name");!n||!t||(te.makeDraggable(n,this.draggableSubject),te.makeDraggable(t,this.draggableSubject),this.draggableElementsAttached=!0)}startFriendCheck(){let n=++this.friendRequest;this.friendState="loading",this.clearFriendMessage(),this.friendError=!1;let t=this.friendSubject,r=di.currentUser();!t||!r||r.sameTerm(t)||li(r,t).then(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState=i?"exists":"available")}).catch(i=>{n!==this.friendRequest||this.friendSubject!==t||(this.friendState="error",this.showFriendMessage(i,!0))})}async showFriendMessage(n,t){this.clearFriendMessage(),this.friendMessage=vt(n),this.friendError=t,this.friendMessageTimer=setTimeout(()=>{this.clearFriendMessage()},1e4),await this.updateComplete,this.shadowRoot?.querySelector(".friend-message")?.focus()}handleAddFriend=async n=>{if(n.preventDefault(),this.friendState!=="available"&&this.friendState!=="error")return;let t=this.friendSubject;if(!t)return;let r=this.friendRequest;this.friendState="saving",this.clearFriendMessage();try{let i=di.currentUser();if(!i)throw new Error(vn.loginRequired);if(await ms(i,t),r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="exists",await this.showFriendMessage(vn.success,!1)}catch(i){if(r!==this.friendRequest||this.friendSubject!==t)return;this.friendState="error",await this.showFriendMessage(i,!0)}};handleEdit=n=>{let t=this.editContext;t&&Ic(n,kc,t.subject,t.profileData,t.viewerMode,async()=>{this.dispatchEvent(new CustomEvent("profile-heading-saved",{bubbles:!0,composed:!0,detail:{subjectUri:t.subject.value}})),await t.onSaved()}).catch(r=>{console.error("Failed to edit profile heading.",r)})};handleImageError=n=>{this.failedImageSrc=n.currentTarget.getAttribute("src")??void 0};render(){let n=this.profileData;if(!n)return Ke``;let t=fs(n.primaryPhone?.valueNode).replace(/^tel:/i,""),r=fs(n.primaryEmail?.valueNode).replace(/^mailto:/i,""),i=Tc(n.dateOfBirth),a=!!(n.imageSrc&&this.failedImageSrc!==n.imageSrc),l=di.currentUser(),c=!!(this.friendSubject&&l&&!l.sameTerm(this.friendSubject));return Ke`
      <section class="profile-heading" aria-labelledby="profile-heading-name">
        <div class="avatar">
          <div class="image-frame ${a?"":"image-frame--fallback"}">
            ${a?Ke`<img
                  class="hero"
                  src=${n.imageSrc}
                  alt=${n.name}
                  width="140"
                  height="140"
                  loading="eager"
                  @error=${this.handleImageError}
                />`:cn}
              <div class="hero-fallback" role="img" aria-label=${n.name}>
                <icon-lucide-circle-user-round aria-hidden="true"></icon-lucide-circle-user-round>
              </div>
          </div>
        </div>

        <div class="info">
          <header class="header-bar">
            <div class="identity" role="group" aria-label=${this.compact?"Name":"Name and pronouns"}>
              <h1 id="profile-heading-name" class="name">${n.name}</h1>
              ${n.pronouns?Ke`<span class="pronouns" ?hidden=${this.compact}>(${n.pronouns})</span>`:cn}
            </div>
            ${n.jobTitle?Ke`<div class="role">${n.jobTitle}</div>`:cn}
          </header>
        </div>

        ${this.editContext&&!this.compact||c?Ke`
            <div class="profile__actions profile__heading-edit-action">
              ${c?Ke`
                <div class="profile-friends-button__section" role="group" aria-label="Friend relationship actions">
                  <solid-ui-button
                    variant="secondary"
                    class="profile__btn-friends"
                    ?disabled=${this.friendState==="loading"||this.friendState==="saving"||this.friendState==="exists"}
                    aria-busy=${this.friendState==="loading"||this.friendState==="saving"?"true":"false"}
                    @click=${this.handleAddFriend}
                  >${this.friendState==="exists"?cn:Ke`<icon-lucide-user-round-plus slot="icon" class="profile__btn-friends-icon" aria-hidden="true"></icon-lucide-user-round-plus>`}${this.friendState==="exists"?vn.exists:vn.add}</solid-ui-button>
                  ${this.friendMessage?Ke`
                    <div class="friend-message" role=${this.friendError?"alert":"status"}
                      aria-live=${this.friendError?"assertive":"polite"} tabindex="0">
                      ${this.friendMessage}
                    </div>`:cn}
                </div>
              `:cn}
              ${this.editContext&&!this.compact?Ke`
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
              `:cn}
            </div>
          `:cn}

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
    `}renderLine(n,t){return n?Ke`
      <div class="detail-item">
        <span class="detail-icon" aria-hidden="true">
          ${this.renderIcon(t)}
        </span>
        <span class="detail-value">${n}</span>
      </div>
    `:cn}renderIcon(n){switch(n){case"birthday":return Ke`<icon-lucide-cake aria-hidden="true"></icon-lucide-cake>`;case"location":return Ke`<icon-lucide-map-pin aria-hidden="true"></icon-lucide-map-pin>`;case"phone":return Ke`<icon-lucide-phone aria-hidden="true"></icon-lucide-phone>`;case"email":return Ke`<icon-lucide-mail aria-hidden="true"></icon-lucide-mail>`}}renderEditIcon(){return Ke`<icon-lucide-pencil aria-hidden="true"></icon-lucide-pencil>`}};customElements.get("solid-panes-profile-heading")||customElements.define("solid-panes-profile-heading",ft);function fs(e){return e?.value??""}function Tc(e){let n=(e||"").trim(),t=n.match(/^(\d{4})-(\d{2})-(\d{2})/);if(t){let[,i,a,l]=t;return`${l}-${a}-${i}`}let r=n.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(r){let[,i,a,l]=r;return`${i}-${a}-${l}`}return n}Re(he(`#profile-heading-mount {
  margin-top: 18px;
  margin-bottom: 20px;
}
`,"text/css"));var ui="solid-panes-profile-heading",pi="profile-heading-mount",Pn=0,gs=!1,bs=!1,ws=!1,mi,Qt="",fi="",Sn="",ys=()=>window.location.href,un=new WeakMap,Hn=new WeakMap;function Ac(e){if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function")return;let n=getComputedStyle(e),t=n.marginTop||"18px",r=n.marginBottom||"20px",i=e.animate([{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"},{height:`${e.getBoundingClientRect().height}px`,opacity:1,marginTop:t,marginBottom:r,overflow:"hidden"}],{duration:300,easing:"ease",fill:"both"});Hn.set(e,i);let a=()=>{Hn.get(e)===i&&(Hn.delete(e),i.cancel())};i.finished.then(a,l=>{Hn.get(e)===i&&(console.error("Failed to animate profile heading appearance.",l),a())})}function Pc(e){let n=un.get(e);un.delete(e),n?.cancel(),e.inert=!1,e.removeAttribute("aria-hidden")}function Sc(e){if(un.has(e))return;let n=getComputedStyle(e),t=e.getBoundingClientRect().height,r=n.opacity,i=n.marginTop,a=n.marginBottom,l=Hn.get(e);Hn.delete(e),l?.cancel();let c=()=>{e.hidden=!0,e.replaceChildren()};if(e.inert=!0,e.setAttribute("aria-hidden","true"),e.hidden||!e.firstElementChild||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches||typeof e.animate!="function"){c();return}let h=e.animate([{height:`${t}px`,opacity:r,marginTop:i,marginBottom:a,overflow:"hidden"},{height:"0px",opacity:0,marginTop:"0px",marginBottom:"0px",overflow:"hidden"}],{duration:300,easing:"ease",fill:"forwards"});un.set(e,h),h.finished.then(()=>{un.get(e)===h&&(c(),un.delete(e),h.cancel())},m=>{un.get(e)===h&&(console.error("Failed to animate profile heading disappearance.",m),c(),un.delete(e),h.cancel())})}function gt(){pn(!0).catch(e=>{console.error("Failed to refresh profile heading after an authentication change.",e)})}function hi(){let e=document.getElementById("MainContent");if(!e)return null;let n=document.getElementById(pi);n||(n=document.createElement("div"),n.id=pi,n.setAttribute("aria-label","Profile heading"));let t=document.querySelector("solid-panes-navbar"),r=document.getElementById("OutlineView"),i=t?.parentNode===e?t:r?.parentNode===e?r:null;return i&&n.nextSibling!==i?e.insertBefore(n,i):!i&&n.parentNode!==e&&e.appendChild(n),n}async function pn(e=!1){await mi;let n=ys(),t=await gn(n),r=hi();if(!r)return;e&&(Pn++,Qt="",Sn="");let{view:i,viaAccountMenu:a}=hn(),l=Zi({view:i,viaAccountMenu:a,viewer:ci.currentUser()?.value,pageUrl:n,owner:t.owner,storageUris:t.storagePanes.map(_=>_.subject.value)});if(l.mode==="none"){Pn++,Sn="",Qt="",fi="",Sc(r);return}let{subjectUri:c}=l,h=l.mode==="full";Pc(r);let m=`${l.paneName}:${c}`;if(m===Qt||m===Sn)return;let d=++Pn;Sn=m;let s,u,p,g;try{s=await mn(hs.sym(c)),u=us(s,hs),g=h?await cs(s):"anonymous",p=g==="owner"}catch(_){throw d===Pn&&(Sn=""),_}if(d!==Pn)return;let f=r.querySelector(ui)||document.createElement(ui);f.profileData=u,f.subject=s;let b=ci.currentUser();f.friendSubject=Qi(l.paneName)&&b&&!b.sameTerm(s)?s:void 0,f.editContext=p?{subject:s,profileData:u,viewerMode:g,onSaved:()=>pn(!0)}:void 0,f.compact=!h;let w=r.hidden||!r.firstElementChild;r.hidden=!1,f.parentNode!==r&&r.replaceChildren(f),Qt=m,fi=s.value,Sn="",w&&(await f.updateComplete,d===Pn&&r.isConnected&&!r.hidden&&!un.has(r)&&Ac(r))}function vs(){hi()}function Zt(e=()=>window.location.href){ys=e,hi(),ws||(document.addEventListener("profile-pane-saved",t=>{if(!(t instanceof CustomEvent)||t.detail?.subjectUri!==fi)return;let r=document.querySelector(`#${pi} ${ui}`);if(r&&t.detail.profileData){Pn++,Sn="",r.profileData=t.detail.profileData,r.editContext&&(r.editContext={...r.editContext,profileData:t.detail.profileData});return}pn(!0).catch(i=>{console.error("Failed to refresh profile heading after saving profile information.",i)})}),ws=!0);let n=mi??ci.checkUser().then(()=>{});return mi=n,bs||(ht.events.on("login",gt),ht.events.on("sessionRestore",gt),ht.events.on("logout",gt),ht.events.on("sessionChange",gt),ht.events.on("identityReplaced",gt),bs=!0),gs||(Pt(()=>{pn().catch(t=>{console.error("Failed to refresh profile heading.",t)})}),gs=!0),n.then(()=>pn(!0)).catch(t=>{console.error("Failed to refresh profile heading.",t)}),n}var xs=new WeakMap;function gi(e,n){let t=xs.get(e);if(!t){let r=e.context?.session?.paneRegistry,i=typeof r?.byName=="function"?r.byName.bind(r):qe;t=os({store:n,outliner:e,byName:i,effects:{selectNavbarPane:is,refreshHeading:pn}}),xs.set(e,t)}return t}var Cs,bi=!1;function _s(){return bi}function Uc(e){console.error("Failed to show the page after browser navigation.",e)}function ks(e){if(Cs=e,bi)return;bi=!0;let n=()=>(kt(),(Cs?.show({kind:"restore",forceHeading:!0})??Promise.resolve()).catch(Uc)),t=window.navigation;if(!t){window.addEventListener("popstate",()=>{n()});return}t.addEventListener("navigate",r=>{Yi(window.history)||!r.hashChange&&r.destination.sameDocument!==!1&&r.destination.url===window.location.href||!r.canIntercept||!r.userInitiated||r.navigationType!=="replace"||r.destination.url!==window.location.href||r.intercept({scroll:"manual",focusReset:"manual",handler:n})}),t.addEventListener("currententrychange",r=>{r.navigationType==="traverse"&&n()})}var er="__lastRenderEnvSignature",wi=!1;function Is(e){return e?[e.layout,e.theme,e.inputMode,e.viewport?.width].join("|"):""}function Nc(){let e=document.getElementById("MainContent");return e||(e=document.createElement("main"),e.id="MainContent",e.setAttribute("role","main"),e.setAttribute("tabindex","-1"),e.setAttribute("aria-live","polite"),document.body.appendChild(e)),e}async function Es(e,n,t){if(window.name===ei&&window.self!==window.top){document.body.textContent="This resource cannot be previewed here. Open it in a new tab instead.";return}Nc(),n=n||window.location.href;let r=typeof n=="string"?e.sym(n):n;kt(),await Zt();let i=An(document,t);i[er]=Is(t);let a=gi(i,e);ks(a);let l=()=>{ca(),a.show({kind:"restore",forceHeading:!0}).catch(m=>{console.error("Failed to refresh navigation after an authentication change.",m)})};bt.events.on("login",l),bt.events.on("sessionRestore",l),bt.events.on("logout",l),bt.events.on("sessionChange",l),bt.events.on("identityReplaced",l),await a.show({kind:"restore",subject:r.uri});let c=await Zo(a),h=await as(a);return vs(),Promise.all([c,h])}async function Ts(e){let n=e?.context?.session?.store,t=Is(e?.context?.environment),r=e?.[er]??"",i=t!==r,a=t.split("|")[1]===r.split("|")[1],l=document.querySelector('#MainContent folder-pane-view, #MainContent [data-preserve-pane-on-resize="true"]');if(i&&a&&l){if(wi)return;wi=!0,await new Promise(c=>requestAnimationFrame(()=>c()));try{e.refreshActiveExplorerPanes?.(),e[er]=t}finally{wi=!1}return}i&&n&&typeof e?.GotoSubject=="function"&&(await gi(e,n).show({kind:"restore"}),e[er]=t)}function An(e,n){if(e.outlineManager)n&&(e.outlineManager.context=e.outlineManager.context||{},e.outlineManager.context.environment=n);else{let t=Qo(e,{list:ur,paneForIcon:pr,paneForPredicate:mr,register:xt,byName:qe},Fc,Lc,n);e.outlineManager=new Ir(t)}return e.outlineManager}function Mc(e,n){e&&(e.context=e.context||{},e.context.environment=n)}typeof window<"u"&&An(window.document);Xo(e=>xt(e.default||e));typeof window<"u"&&(window.panes={getOutliner:An});export{zi as a,ur as b,pr as c,mr as d,xt as e,qe as f,Ir as g,pn as h,Zt as i,_s as j,Es as k,Ts as l,An as m,Mc as n,Rc as o};
