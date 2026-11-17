import{e as J,f as Z,q as ee}from"./part-2QKHB5VC.js";import{a as k}from"./part-JII5LI4F.js";import{a as m,b as $,c as g,e as X,f as Y,o as Q,p as z}from"./part-FKFG2PQJ.js";import"./part-DUP4CQ5F.js";import"./part-4RHLBPWQ.js";import"./part-OCJP3XBY.js";import"./part-6POLG3CV.js";import"./part-NYMP5DIS.js";import{f as H}from"./part-A2DQAY7E.js";import"./part-ZK2YILMJ.js";import"./part-TKTGPRZR.js";import"./part-WZ5ZOODI.js";import{H as c,d as W,o as K}from"./part-H5FMENGX.js";import"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import"./part-HGODWX5M.js";import"./part-WNJHMUHE.js";import"./part-HZXSH6RP.js";import{a as j}from"./part-V7XQEHON.js";import"./part-FI5O6ZH7.js";import"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import"./part-VHSBPZHI.js";import{c as v}from"./part-GPLAS2FA.js";import{D as S,F as C}from"./part-SVX36NT2.js";import{A as G,O as q,Z as _,_ as O}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";k(v(`/* mugshotGallery.js styles \u2014 extracted from inline styles */
/* Uses CSS custom properties from the global stylesheet (dev-global.css / mashlib) */

/* \u2500\u2500 Mugshot image \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.contactPane .mugshotImage {
  max-height: 10rem;
  border-radius: var(--border-radius-full);
  margin: var(--spacing-sm);
}

.contactPane button:has(> img[src$=".svg"]) {
  background-color: var(--color-section-bg) !important;
  border: none !important;
  margin: 0 !important;
  border-radius: 0 !important;
}
`,"text/css"));var te={"image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff","application/pdf":"pdf","text/plain":"txt","text/html":"html","application/json":"json","application/octet-stream":"bin"},we=Object.fromEntries(Object.entries(te).map(([r,a])=>[a,r])),ne={extension:r=>te[r]||!1,lookup:r=>{let a=r.split(".").pop()?.toLowerCase()??"";return we[a]||!1}},P=j,me=W,s=C;function ae(r,a){function i(e){U.appendChild(c.errorMessageBlock(r,e,"pink"))}async function p(e,t,n){let d=[_(e,P.vcard("hasPhoto"),t,e.doc())];try{n?await s.updater.update(d,[]):await s.updater.update([],d)}catch(o){let l="Writing back image link FAILED "+t+". Stack: "+o;throw g(l),new Error("Writing back image link FAILED")}}function f(e){s.fetcher.nowOrWhenFetched(e.doc(),(t,n)=>{if(!t)g("Error looking up dropped thing "+e+". Stack: "+n);else{let d=s.findTypeURIs(e);for(let o in d)m("drop object type includes: "+o);m("Default: assume web page  "+e),s.add(a,P.wf("attachment"),e,a.doc())}})}function h(e,t,n){let d=ne.extension(t);t!==ne.lookup(e)&&(e+="_."+d,$("MIME TYPE MISMATCH -- adding extension: "+e));let o,l,b=t.startsWith("image");b?(o="image_",l=P.vcard("hasPhoto")):(o="attachment_",l=P.wf("attachment"));let F,u;for(F=0;u=s.sym(a.dir().uri+e),!!s.holds(a,P.vcard("hasPhoto"),u);F++)e=o+F+"."+d;m("Putting "+n.byteLength+" bytes of "+t+" to "+u),s.fetcher.webOperation("PUT",u.uri,{data:n,contentType:t}).then(L=>{if(!L.ok){g("Upload of "+u+" failed: "+L.status+" "+L.statusText),i("Error uploading picture. If the problem persists, contact admin.");return}m("Upload picture put OK: "+u),s.add(a,l,u,a.doc()),s.fetcher.putBack(a.doc(),{contentType:"text/turtle"}).then(E=>{b&&B.refresh()},E=>{g(" Write back image link FAIL "+u+". Stack: "+E)})})}async function D(e){for(let t of e){let n=O(t);if(m("Dropped on mugshot thing "+n),t.startsWith("http")&&t.indexOf("#")<0){t.startsWith("http:")&&(n=O("https:"+t.slice(5)));let d={withCredentials:!1,credentials:"omit"},o;try{o=await s.fetcher.webOperation("GET",n.uri,d)}catch(u){g("Fetch error trying to GET picture "+n+". Stack: "+u),f(n);return}let l=o.headers.get("Content-Type")??"application/octet-stream",b=n.uri.split("/").slice(-1)[0];b=b.split("?")[0];let F=await o.arrayBuffer();if(!o.ok){g("Cant download, so will link image. "+n+":"+o.status),f(n);return}h(b,l,F);return}else i("Not a web document URI, cannot copy "+n+" as picture.");f(n)}}function x(e){for(let t=0;t<e.length;t++){let n=e[t];m(" contacts: Filename: "+n.name+", type: "+(n.type||"n/a")+" size: "+n.size+" bytes, last modified: "+(n.lastModifiedDate?n.lastModifiedDate.toLocaleDateString():"n/a"));let d=new FileReader;d.onload=o=>{let l=o.target.result;m(" File read byteLength : "+l.byteLength),h(encodeURIComponent(n.name),n.type,l)},d.readAsArrayBuffer(n)}}function y(e){let t=r.createElement("img");return t.classList.add("mugshotImage"),t.setAttribute("alt",e?"Contact photo":"Drop photo here"),c.makeDropTarget(t,D,x),e&&(C.fetcher._fetch(e.uri).then(n=>n.blob()).then(n=>{let d=URL.createObjectURL(n);t.setAttribute("src",d)}),c.makeDraggable(t,e)),t}function w(){let e=s.each(a,P.vcard("hasPhoto"));e.sort(),e=e.slice(0,5),e.length===0?(B.innerHTML="",A&&B.appendChild(M)):me.syncTableToArray(B,e,y)}function I(){return s.sym(a.dir().uri+"Image_"+Date.now()+".png")}async function V(e){e&&(await p(a,e),w())}function N(){let e=c.button(r,K.iconBase+"noun_925021.svg","Drag here to delete",void 0,{"aria-label":"Delete picture - drag picture here"});async function t(n){let d=s.each(a,P.vcard("hasPhoto")).map(o=>o.uri);for(let o of n){if(!d.includes(o)){X("Only drop pictures onto this trash can.");return}if(await Y("Really DELETE picture?"))try{m("Unlinking image file "+o),await p(a,s.sym(o),!0),m("Deleting image file "+o),await s.fetcher.webOperation("DELETE",o)}catch{i("Error deleting picture. If it persists, contact your admin.");return}}w()}return c.makeDropTarget(e,t,null),e}function le(){let e=r.createElement("table"),t=e.appendChild(r.createElement("tr")),n=t.appendChild(r.createElement("td")),d=t.appendChild(r.createElement("td")),o=t.appendChild(r.createElement("td"));n.appendChild(H.cameraButton(r,s,I,V));try{d.appendChild(c.fileUploadButtonDiv(r,x))}catch(l){m("ignore fileUploadButtonDiv error for now",l)}return o.appendChild(N()),e}let A=s.updater.editable(a.doc().uri,s),U=r.createElement("div"),B=U.appendChild(r.createElement("div")),M=y();return c.setImage(M,a),w(),B.refresh=w,A&&U.appendChild(le()),U}var re="https://solidos.github.io/contacts-pane/src/ontology/";function oe(r,a,i,p,f,h,D,x){let y=re+p,w=x||"this",I=G(y+"#")(w);R(f,i,p,y),c.appendForm(h,r,{},a,I,D,(V,N)=>{V||c.errorMessageBlock(h,N)})}function R(r,a,i,p){let f=p||re+i,h=O(f);r.holds(void 0,void 0,void 0,h)||q(a,r,f,"text/turtle",()=>null)}var ie=await(await fetch(v(`# This turtle file defines the forms used in the contacts management
#
# Individuals and orgs are in one file as they both
# share some forms (address etc) and also interactions (roles)

# Forms documentation: https://solidos.github.io/solid-ui/docs/forms-intro.html

@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix dct: <http://purl.org/dc/terms/>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix prov: <http://www.w3.org/ns/prov#>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix schema: <http://schema.org/>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix : <#>.


############# For individual:
:individualForm a ui:Form ;
    dct:title "Contact details for a person" ;
    ui:parts (
        :fullNameField
        :nicknameGroup
        :pronounsGroup
        :roleField
        :orgNameField
        # :addressesComment
        :addresses
        # :emailComment
        :eMails
        # :telephoneComment
        :telephones
        :birthdayField
        # :noteComment
        :noteField 
        ) .

    :fullNameField
        a ui:SingleLineTextField ;
        ui:label "Name";
        ui:maxLength "128" ;
        ui:property vcard:fn .

    # Nickname

    :nicknameGroup a ui:Group; ui:weight 0; 
        ui:parts (:nicknameField) .

    :nicknameField a ui:SingleLineTextField; 
        ui:property foaf:nick;
        ui:label "Nickname"@en, "Nom court"@fr.

    # Pronouns

    :pronounsGroup a ui:Group; ui:weight 0; 
        ui:parts ( :subjectPronounForm :objectPronounForm :relativePronounForm) .

    :subjectPronounForm a ui:SingleLineTextField; ui:property solid:preferredSubjectPronoun;
        ui:label "he/she/they" .
    :objectPronounForm a ui:SingleLineTextField; ui:property solid:preferredObjectPronoun;
        ui:label "him/her/them" .
    :relativePronounForm a ui:SingleLineTextField; ui:property solid:preferredRelativePronoun;
        ui:label "his/hers/theirs" .
        
    :roleField
        a ui:SingleLineTextField ;
        ui:suppressEmptyUneditable true;
        ui:maxLength "128" ;
        ui:property vcard:role .

    :orgNameField
        a ui:SingleLineTextField ;
        ui:suppressEmptyUneditable true;
        ui:maxLength "128" ;
        ui:property vcard:organization-name .

    :addresses a ui:Multiple ;
        dct:title "Address details" ;
        ui:part :oneAddress ;
        ui:property vcard:hasAddress .

        :oneAddress a ui:Group ;
            ui:parts ( 
                :id1409437207443 :id1409437292400 
                :id1409437421996 :id1409437467649 
                :id1409437569420 ). 

            :id1409437207443
                a ui:SingleLineTextField ;
                ui:maxLength "128" ;
                ui:property vcard:street-address .

            :id1409437292400
                a ui:SingleLineTextField ;
                ui:maxLength "128" ;
                ui:property vcard:locality .

            :id1409437421996
                a ui:SingleLineTextField ;
                ui:maxLength "25" ;
                ui:property vcard:postal-code .

            :id1409437467649
                a ui:SingleLineTextField ;
                ui:maxLength "128" ;
                ui:property vcard:region .

            :id1409437569420
                a ui:SingleLineTextField ;
                ui:maxLength "128" ;
                ui:property vcard:country-name .


    :eMails a ui:Multiple ;
        ui:part :oneEMail ;
        ui:property vcard:hasEmail .

        :oneEMail a ui:Group ; # hint: side by side is good
            ui:part :emailValue, :emailType ;
            ui:parts ( :emailType  :emailValue ).

            :emailValue
                a ui:EmailField ; ui:label "email";
                ui:property vcard:value .

            :emailType
                a ui:Classifier ;
                ui:canMintNew "0" ;
                ui:category vcard:Type ;
                ui:from vcard:Type ;
                ui:property rdf:type .

    :telephones a ui:Multiple ;
        ui:part :onetelephone ;
        ui:property vcard:hasTelephone .

        :onetelephone
            a ui:Group ;
            ui:part :telephoneValue, :telephoneType ;
            ui:parts (  :telephoneType :telephoneValue ).

            :telephoneValue
                a ui:PhoneField ;
                ui:property vcard:value .

            :telephoneType
                a ui:Classifier ;
                ui:canMintNew "0" ;
                ui:category vcard:TelephoneType ;
                ui:from vcard:Type ;
                ui:property rdf:type .

    :birthdayField a ui:DateField;
        ui:label "Born"@en;
        ui:suppressEmptyUneditable true;
        ui:property vcard:bday .

    :noteField
        a ui:MultiLineTextField ;
        ui:suppressEmptyUneditable true;
        ui:property vcard:note .

# Ontology additions or interpretations needed for the form to work well

# The ontology file doesn't make them disjoint. This makes the selector be a choice.
vcard:TelephoneType   owl:disjointUnionOf ( vcard:Cell vcard:Home vcard:Work) .
vcard:Type   owl:disjointUnionOf (vcard:Home vcard:Work) . # for email

# Better field labels
vcard:Cell ui:label "mobile"@en . # app will make initial caps if necessary
vcard:hasAddress ui:label "address"@en .
vcard:bday ui:label "born"@en.
vcard:hasEmail ui:label "email"@en .
vcard:hasTelephone ui:label "phone"@en .
vcard:note ui:label "notes"@en .


############ For organizations

:organizationForm a ui:Form ; 
    dct:title "Contact details for an organization";
    ui:parts (
        :OrgClassifier
        :fullNameField
        :homePageURIField
        :addresses
        :eMails
        :telephones
        :noteField ) .

    :OrgClassifier a ui:Classifier; 
        ui:label "What sort of organization?"@en;
        ui:category solid:InterestingOrganization .

    :homePageURIField a ui:NamedNodeURIField;
        ui:label "Homepage"@en;
        ui:property schema:url .

# Ontology data to drive the :OrgClassifier classifier
    solid:InterestingOrganization owl:disjointUnionOf  (
        # Airline - a Corporation
        # Consortium - a Corporation or a NGO
        schema:Corporation
        schema:EducationalOrganization
        schema:ResearchOrganization  # Proposed. https://github.com/schemaorg/schemaorg/issues/2877
        # FundingScheme - eh?
        schema:GovernmentOrganization
        # LibrarySystem
        # LocalBusiness - Corporation
        # MedicalOrganization - a Corporation or a NGO
        schema:NGO
        # NewsMediaOrganization - a Corporation or a NGO
        schema:PerformingGroup # a band
        schema:Project # like Solid
        schema:SportsOrganization) .
`,"text/turtle"))).text(),he=await(await fetch(v(`@prefix : <http://www.w3.org/2006/vcard/ns#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xml: <http://www.w3.org/XML/1998/namespace> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

:Acquaintance a owl:Class ;
    rdfs:label "Acquaintance"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Agent a owl:Class ;
    rdfs:label "Agent"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:BBS a owl:Class ;
    rdfs:label "BBS"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType ;
    owl:deprecated true .

:Car a owl:Class ;
    rdfs:label "Car"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType ;
    owl:deprecated true .

:Cell a owl:Class ;
    rdfs:label "Cell"@en ;
    rdfs:comment "Also called mobile telephone"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Child a owl:Class ;
    rdfs:label "Child"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Colleague a owl:Class ;
    rdfs:label "Colleague"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Contact a owl:Class ;
    rdfs:label "Contact"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Coresident a owl:Class ;
    rdfs:label "Coresident"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Coworker a owl:Class ;
    rdfs:label "Coworker"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Crush a owl:Class ;
    rdfs:label "Crush"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Date a owl:Class ;
    rdfs:label "Date"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Dom a owl:Class ;
    rdfs:label "Dom"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Emergency a owl:Class ;
    rdfs:label "Emergency"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Fax a owl:Class ;
    rdfs:label "Fax"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Female a owl:Class ;
    rdfs:label "Female"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Gender .

:Friend a owl:Class ;
    rdfs:label "Friend"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Home a owl:Class ;
    rdfs:label "Home"@en ;
    rdfs:comment "This implies that the property is related to an individual's personal life"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type .

:ISDN a owl:Class ;
    rdfs:label "ISDN"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Internet a owl:Class ;
    rdfs:label "Internet"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Intl a owl:Class ;
    rdfs:label "Intl"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Kin a owl:Class ;
    rdfs:label "Kin"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Label a owl:Class ;
    rdfs:label "Label"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Male a owl:Class ;
    rdfs:label "Male"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Gender .

:Me a owl:Class ;
    rdfs:label "Me"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Met a owl:Class ;
    rdfs:label "Met"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Modem a owl:Class ;
    rdfs:label "Modem"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType ;
    owl:deprecated true .

:Msg a owl:Class ;
    rdfs:label "Msg"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType ;
    owl:deprecated true .

:Muse a owl:Class ;
    rdfs:label "Muse"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Neighbor a owl:Class ;
    rdfs:label "Neighbor"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:None a owl:Class ;
    rdfs:label "None"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Gender .

:Other a owl:Class ;
    rdfs:label "Other"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Gender .

:PCS a owl:Class ;
    rdfs:label "PCS"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType ;
    owl:deprecated true .

:Pager a owl:Class ;
    rdfs:label "Pager"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Parcel a owl:Class ;
    rdfs:label "Parcel"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Parent a owl:Class ;
    rdfs:label "Parent"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Postal a owl:Class ;
    rdfs:label "Postal"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Pref a owl:Class ;
    rdfs:label "Pref"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:Sibling a owl:Class ;
    rdfs:label "Sibling"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Spouse a owl:Class ;
    rdfs:label "Spouse"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Sweetheart a owl:Class ;
    rdfs:label "Sweetheart"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :RelatedType .

:Tel a owl:Class ;
    rdfs:label "Tel"@en ;
    rdfs:comment "This class is deprecated. Use the hasTelephone object property."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:Text a owl:Class ;
    rdfs:label "Text"@en ;
    rdfs:comment "Also called sms telephone"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:TextPhone a owl:Class ;
    rdfs:label "Text phone"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Unknown a owl:Class ;
    rdfs:label "Unknown"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Gender .

:Video a owl:Class ;
    rdfs:label "Video"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Voice a owl:Class ;
    rdfs:label "Voice"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :TelephoneType .

:Work a owl:Class ;
    rdfs:label "Work"@en ;
    rdfs:comment "This implies that the property is related to an individual's work place"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type .

:X400 a owl:Class ;
    rdfs:label "X400"@en ;
    rdfs:comment "This class is deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Type ;
    owl:deprecated true .

:adr a owl:ObjectProperty ;
    rdfs:label "address"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasAddress .

:agent a owl:ObjectProperty ;
    rdfs:label "agent"@en ;
    rdfs:comment "This object property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:anniversary a owl:DatatypeProperty ;
    rdfs:label "anniversary"@en ;
    rdfs:comment "The date of marriage, or equivalent, of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range [ a rdfs:Datatype ;
            owl:unionOf ( xsd:dateTime xsd:gYear ) ] .

:bday a owl:DatatypeProperty ;
    rdfs:label "birth date"@en ;
    rdfs:comment "To specify the birth date of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range [ a rdfs:Datatype ;
            owl:unionOf ( xsd:dateTime xsd:dateTimeStamp xsd:gYear ) ] .

:category a owl:DatatypeProperty ;
    rdfs:label "category"@en ;
    rdfs:comment "The category information about the object, also known as tags"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:class a owl:DatatypeProperty ;
    rdfs:label "class"@en ;
    rdfs:comment "This data property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:email a owl:ObjectProperty ;
    rdfs:label "email"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasEmail .

:extended-address a owl:DatatypeProperty ;
    rdfs:label "extended address"@en ;
    rdfs:comment "This data property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:geo a owl:ObjectProperty ;
    rdfs:label "geo"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasGeo .

:hasAdditionalName a owl:ObjectProperty ;
    rdfs:label "has additional name"@en ;
    rdfs:comment "Used to support property parameters for the additional name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasCalendarBusy a owl:ObjectProperty ;
    rdfs:label "has calendar busy"@en ;
    rdfs:comment "To specify the busy time associated with the object. (Was called FBURL in RFC6350)"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasCalendarLink a owl:ObjectProperty ;
    rdfs:label "has calendar link"@en ;
    rdfs:comment "To specify the calendar associated with the object. (Was called CALURI in RFC6350)"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasCalendarRequest a owl:ObjectProperty ;
    rdfs:label "has calendar request"@en ;
    rdfs:comment "To specify the calendar user address to which a scheduling request be sent for the object. (Was called CALADRURI in RFC6350)"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasCategory a owl:ObjectProperty ;
    rdfs:label "has category"@en ;
    rdfs:comment "Used to support property parameters for the category data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasCountryName a owl:ObjectProperty ;
    rdfs:label "has country name"@en ;
    rdfs:comment "Used to support property parameters for the country name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasFN a owl:ObjectProperty ;
    rdfs:label "has formatted name"@en ;
    rdfs:comment "Used to support property parameters for the formatted name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasFamilyName a owl:ObjectProperty ;
    rdfs:label "has family name"@en ;
    rdfs:comment "Used to support property parameters for the family name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasGender a owl:ObjectProperty ;
    rdfs:label "has gender"@en ;
    rdfs:comment "To specify  the sex or gender identity of the object. URIs are recommended to enable interoperable sex and gender codes to be used."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasGivenName a owl:ObjectProperty ;
    rdfs:label "has given name"@en ;
    rdfs:comment "Used to support property parameters for the given name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasHonorificPrefix a owl:ObjectProperty ;
    rdfs:label "has honorific prefix"@en ;
    rdfs:comment "Used to support property parameters for the honorific prefix data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasHonorificSuffix a owl:ObjectProperty ;
    rdfs:label "has honorific suffix"@en ;
    rdfs:comment "Used to support property parameters for the honorific suffix data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasInstantMessage a owl:ObjectProperty ;
    rdfs:label "has messaging"@en ;
    rdfs:comment "To specify the instant messaging and presence protocol communications with the object. (Was called IMPP in RFC6350)"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasLanguage a owl:ObjectProperty ;
    rdfs:label "has language"@en ;
    rdfs:comment "Used to support property parameters for the language data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasLocality a owl:ObjectProperty ;
    rdfs:label "has locality"@en ;
    rdfs:comment "Used to support property parameters for the locality data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasNickname a owl:ObjectProperty ;
    rdfs:label "has nickname"@en ;
    rdfs:comment "Used to support property parameters for the nickname data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:seeAlso :nickname .

:hasNote a owl:ObjectProperty ;
    rdfs:label "has note"@en ;
    rdfs:comment "Used to support property parameters for the note data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasOrganizationName a owl:ObjectProperty ;
    rdfs:label "has organization name"@en ;
    rdfs:comment "Used to support property parameters for the organization name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasOrganizationUnit a owl:ObjectProperty ;
    rdfs:label "has organization unit name"@en ;
    rdfs:comment "Used to support property parameters for the organization unit name data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasPostalCode a owl:ObjectProperty ;
    rdfs:label "has postal code"@en ;
    rdfs:comment "Used to support property parameters for the postal code data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasRegion a owl:ObjectProperty ;
    rdfs:label "has region"@en ;
    rdfs:comment "Used to support property parameters for the region data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasRelated a owl:ObjectProperty ;
    rdfs:label "has related"@en ;
    rdfs:comment "To specify a relationship between another entity and the entity represented by this object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasRole a owl:ObjectProperty ;
    rdfs:label "has role"@en ;
    rdfs:comment "Used to support property parameters for the role data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasSource a owl:ObjectProperty ;
    rdfs:label "has source"@en ;
    rdfs:comment "To identify the source of directory information of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasStreetAddress a owl:ObjectProperty ;
    rdfs:label "has street address"@en ;
    rdfs:comment "Used to support property parameters for the street address data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasTitle a owl:ObjectProperty ;
    rdfs:label "has title"@en ;
    rdfs:comment "Used to support property parameters for the title data property"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasUID a owl:ObjectProperty ;
    rdfs:label "has uid"@en ;
    rdfs:comment "To specify a value that represents a globally unique identifier corresponding to the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasValue a owl:ObjectProperty ;
    rdfs:label "has value"@en ;
    rdfs:comment "Used to indicate the resource value of an object property that requires property parameters"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:label a owl:DatatypeProperty ;
    rdfs:label "label"@en ;
    rdfs:comment "This data property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:language a owl:DatatypeProperty ;
    rdfs:label "language"@en ;
    rdfs:comment "To specify the language that may be used for contacting the object. May also be used as a property parameter."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:latitude a owl:DatatypeProperty ;
    rdfs:label "latitude"@en ;
    rdfs:comment "This data property has been deprecated. See hasGeo"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:longitude a owl:DatatypeProperty ;
    rdfs:label "longitude"@en ;
    rdfs:comment "This data property has been deprecated. See hasGeo"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:mailer a owl:DatatypeProperty ;
    rdfs:label "mailer"@en ;
    rdfs:comment "This data property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:note a owl:DatatypeProperty ;
    rdfs:label "note"@en ;
    rdfs:comment "A note associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:org a owl:ObjectProperty ;
    rdfs:label "organization"@en ;
    rdfs:comment "This object property has been mapped. Use the organization-name data property."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :organization-name .

:organization-unit a owl:DatatypeProperty ;
    rdfs:label "organizational unit name"@en ;
    rdfs:comment "To specify the organizational unit name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string ;
    rdfs:subPropertyOf :organization-name .

:post-office-box a owl:DatatypeProperty ;
    rdfs:label "post office box"@en ;
    rdfs:comment "This data property has been deprecated"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:prodid a owl:DatatypeProperty ;
    rdfs:label "product id"@en ;
    rdfs:comment "To specify the identifier for the product that created the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:rev a owl:DatatypeProperty ;
    rdfs:label "revision"@en ;
    rdfs:comment "To specify revision information about the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:dateTime .

:role a owl:DatatypeProperty ;
    rdfs:label "role"@en ;
    rdfs:comment "To specify the function or part played in a particular situation by the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:sort-string a owl:DatatypeProperty ;
    rdfs:label "sort as"@en ;
    rdfs:comment "To specify the string to be used for national-language-specific sorting. Used as a property parameter only."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:title a owl:DatatypeProperty ;
    rdfs:label "title"@en ;
    rdfs:comment "To specify the position or job of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:tz a owl:DatatypeProperty ;
    rdfs:label "time zone"@en ;
    rdfs:comment "To indicate time zone information that is specific to the object. May also be used as a property parameter."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:value a owl:DatatypeProperty ;
    rdfs:label "value"@en ;
    rdfs:comment "Used to indicate the literal value of a data property that requires property parameters"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:Address a owl:Class ;
    rdfs:label "Address"@en ;
    rdfs:comment "To specify the components of the delivery address for the  object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentClass [ a owl:Class ;
            owl:unionOf ( [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :country-name ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :country-name ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :locality ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :locality ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :postal-code ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :postal-code ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :region ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :region ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :street-address ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :street-address ] ) ] ) ] .

:Email a owl:Class ;
    rdfs:label "Email"@en ;
    rdfs:comment "To specify the electronic mail address for communication with the object the vCard represents. Use the hasEmail object property."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:deprecated true .

:Group a owl:Class ;
    rdfs:label "Group"@en ;
    rdfs:comment "Object representing a group of persons or entities.  A group object will usually contain hasMember properties to specify the members of the group."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Kind ;
    owl:disjointWith :Individual,
        :Location,
        :Organization ;
    owl:equivalentClass [ a owl:Class ;
            owl:intersectionOf ( [ a owl:Restriction ;
                        owl:onProperty :hasMember ;
                        owl:someValuesFrom :Kind ] [ a owl:Restriction ;
                        owl:minQualifiedCardinality "1"^^xsd:nonNegativeInteger ;
                        owl:onClass :Kind ;
                        owl:onProperty :hasMember ] ) ] .

:Individual a owl:Class ;
    rdfs:label "Individual"@en ;
    rdfs:comment "An object representing a single person or entity"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Kind ;
    owl:disjointWith :Location,
        :Organization .

:Name a owl:Class ;
    rdfs:label "Name"@en ;
    rdfs:comment "To specify the components of the name of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentClass [ a owl:Class ;
            owl:unionOf ( [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :additional-name ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:minCardinality "0"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :additional-name ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :family-name ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :family-name ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :given-name ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:maxCardinality "1"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :given-name ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :honorific-prefix ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:minCardinality "0"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :honorific-prefix ] ) ] [ a owl:Class ;
                        owl:intersectionOf ( [ a owl:Restriction ;
                                    owl:onProperty :honorific-suffix ;
                                    owl:someValuesFrom xsd:string ] [ a owl:Restriction ;
                                    owl:minCardinality "0"^^xsd:nonNegativeInteger ;
                                    owl:onProperty :honorific-suffix ] ) ] ) ] .

:VCard a owl:Class ;
    rdfs:label "VCard"@en ;
    rdfs:comment "The vCard class is  equivalent to the new Kind class, which is the parent for the four explicit types of vCards (Individual, Organization, Location, Group)"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentClass :Kind .

:fn a owl:DatatypeProperty ;
    rdfs:label "formatted name"@en ;
    rdfs:comment "The formatted text corresponding to the name of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:hasAddress a owl:ObjectProperty ;
    rdfs:label "has address"@en ;
    rdfs:comment "To specify the components of the delivery address for the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range :Address .

:hasEmail a owl:ObjectProperty ;
    rdfs:label "has email"@en ;
    rdfs:comment "To specify the electronic mail address for communication with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range :Email .

:hasGeo a owl:ObjectProperty ;
    rdfs:label "has geo"@en ;
    rdfs:comment "To specify information related to the global positioning of the object. May also be used as a property parameter."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:hasKey a owl:ObjectProperty ;
    rdfs:label "has key"@en ;
    rdfs:comment "To specify a public key or authentication certificate associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :key .

:hasLogo a owl:ObjectProperty ;
    rdfs:label "has logo"@en ;
    rdfs:comment "To specify a graphic image of a logo associated with the object "@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :logo .

:hasName a owl:ObjectProperty ;
    rdfs:label "has name"@en ;
    rdfs:comment "To specify the components of the name of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range :Name ;
    owl:equivalentProperty :n .

:hasPhoto a owl:ObjectProperty ;
    rdfs:label "has photo"@en ;
    rdfs:comment "To specify an image or photograph information that annotates some aspect of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :photo .

:hasSound a owl:ObjectProperty ;
    rdfs:label "has sound"@en ;
    rdfs:comment "To specify a digital sound content information that annotates some aspect of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :sound .

:hasTelephone a owl:ObjectProperty ;
    rdfs:label "has telephone"@en ;
    rdfs:comment "To specify the telephone number for telephony communication with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :tel .

:hasURL a owl:ObjectProperty ;
    rdfs:label "has url"@en ;
    rdfs:comment "To specify a uniform resource locator associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :url .

:key a owl:ObjectProperty ;
    rdfs:label "key"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasKey .

:logo a owl:ObjectProperty ;
    rdfs:label "logo"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasLogo .

:n a owl:ObjectProperty ;
    rdfs:label "name"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasName .

:nickname a owl:DatatypeProperty ;
    rdfs:label "nickname"@en ;
    rdfs:comment "The nick name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:photo a owl:ObjectProperty ;
    rdfs:label "photo"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasPhoto .

:sound a owl:ObjectProperty ;
    rdfs:label "sound"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasSound .

:tel a owl:ObjectProperty ;
    rdfs:label "telephone"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasTelephone .

:url a owl:ObjectProperty ;
    rdfs:label "url"@en ;
    rdfs:comment "This object property has been mapped"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentProperty :hasURL .

:Location a owl:Class ;
    rdfs:label "Location"@en ;
    rdfs:comment "An object representing a named geographical place"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Kind ;
    owl:disjointWith :Organization .

:additional-name a owl:DatatypeProperty ;
    rdfs:label "additional name"@en ;
    rdfs:comment "The additional name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:country-name a owl:DatatypeProperty ;
    rdfs:label "country name"@en ;
    rdfs:comment "The country name associated with the address of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:family-name a owl:DatatypeProperty ;
    rdfs:label "family name"@en ;
    rdfs:comment "The family name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:given-name a owl:DatatypeProperty ;
    rdfs:label "given name"@en ;
    rdfs:comment "The given name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:hasMember a owl:ObjectProperty ;
    rdfs:label "has member"@en ;
    rdfs:comment "To include a member in the group this object represents. (This property can only be used by Group individuals)"@en ;
    rdfs:domain :Group ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range :Kind .

:honorific-prefix a owl:DatatypeProperty ;
    rdfs:label "honorific prefix"@en ;
    rdfs:comment "The honorific prefix of the name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:honorific-suffix a owl:DatatypeProperty ;
    rdfs:label "honorific suffix"@en ;
    rdfs:comment "The honorific suffix of the name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:locality a owl:DatatypeProperty ;
    rdfs:label "locality"@en ;
    rdfs:comment "The locality (e.g. city or town) associated with the address of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:organization-name a owl:DatatypeProperty ;
    rdfs:label "organization name"@en ;
    rdfs:comment "To specify the organizational name associated with the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:postal-code a owl:DatatypeProperty ;
    rdfs:label "postal code"@en ;
    rdfs:comment "The postal code associated with the address of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:region a owl:DatatypeProperty ;
    rdfs:label "region"@en ;
    rdfs:comment "The region (e.g. state or province) associated with the address of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:street-address a owl:DatatypeProperty ;
    rdfs:label "street address"@en ;
    rdfs:comment "The street address associated with the address of the object"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:range xsd:string .

:Organization a owl:Class ;
    rdfs:label "Organization"@en ;
    rdfs:comment """An object representing an organization.  An organization is a single entity, and might represent a business or government, a department or division within a business or government, a club, an association, or the like.
"""@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    rdfs:subClassOf :Kind .

:Gender a owl:Class ;
    rdfs:label "Gender"@en ;
    rdfs:comment "Used for gender codes. The URI of the gender code must be used as the value for Gender."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:Kind a owl:Class ;
    rdfs:label "Kind"@en ;
    rdfs:comment "The parent class for all objects"@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> ;
    owl:equivalentClass [ a owl:Restriction ;
            owl:minQualifiedCardinality "1"^^xsd:nonNegativeInteger ;
            owl:onDataRange xsd:string ;
            owl:onProperty :fn ],
        :VCard .

:Type a owl:Class ;
    rdfs:label "Type"@en ;
    rdfs:comment "Used for type codes. The URI of the type code must be used as the value for Type."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:TelephoneType a owl:Class ;
    rdfs:label "Phone"@en ;
    rdfs:comment "Used for telephone type codes. The URI of the telephone type code must be used as the value for the Telephone Type."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

:RelatedType a owl:Class ;
    rdfs:label "Relation Type"@en ;
    rdfs:comment "Used for relation type codes. The URI of the relation type code must be used as the value for the Relation Type."@en ;
    rdfs:isDefinedBy <http://www.w3.org/2006/vcard/ns> .

<http://www.w3.org/2006/vcard/ns> a owl:Ontology ;
    rdfs:label "Ontology for vCard"@en ;
    rdfs:comment "Ontology for vCard based on RFC6350"@en ;
    owl:versionInfo "Final"@en .


`,"text/turtle"))).text();k(v(`/* individual.js styles \u2014 extracted from inline styles */

/* \u2500\u2500 Individual pane container \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */

.individualPane {
  padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-md) var(--spacing-lg);
  background: var(--color-section-bg);
  border: 1px solid var(--solid-ui-color-gray-200);
  border-radius: var(--border-radius-base);
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  max-width: 100%;
}`,"text/css"));k(v(`/* Solid-UI form */

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
}`,"text/css"));var se=j,T=C,de="individualAndOrganizationForm.ttl",ue="vcard.ttl";async function Re(r,a,i,p){let f=T.findTypeURIs(i),h=!!(f[se.vcard("Organization").uri]||f[se.schema("Organization").uri]),D=T.updater.editable(i.doc().uri,T);R(T,ie,de);let x=j.vcard("Type").doc().uri;R(T,he,ue,x);try{await T.fetcher.load(i.doc())}catch(w){throw g("Error loading profile card. Stack: "+w),new Error("Failed to load profile card.")}a.classList.add("individualPane"),S.checkUser(),a.appendChild(ae(r,i));let y=h?"organizationForm":"individualForm";if(oe(a,i,ie,de,C,r,i.doc(),y),Q(a),z(i)||a.appendChild(await ee(i,p,p.ulPeople)),S.currentUser()){let w=a.appendChild(r.createElement("h3"));w.textContent="Attach a link to any file",w.classList.add("contactPanedHeading"),c.attachmentList(r,i,a,{modify:D})}h?a.appendChild(await Z(i,p)):z(i)||a.appendChild(await J(i,p))}export{Re as renderIndividual};
