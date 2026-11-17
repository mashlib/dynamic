import"./part-65PJWB3H.js";import{A as xn,B as vn,C as be,D as Cn,E as po,F as Uo,G as Vo,H as fo,I as kn,J as Sn,K as qo,N as Nn,a as an,b as rn,c as ln,d as sn,e as cn,f as dn,g as pn,h as de,i as pe,j as fn,k as fe,l as O,m as io,n as ao,o as ro,p as lo,q as un,r as mn,s as so,t as co,u as gn,v as _n,w as hn,x as bn,y as yn,z as wn}from"./part-GMV6SBCN.js";import"./part-3PPQ24R4.js";import"./part-QJFSLVOC.js";import{a as tn,b as nn}from"./part-EJ5Y4NVS.js";import"./part-4RHLBPWQ.js";import{b as ae}from"./part-26MYGVLD.js";import"./part-NYMP5DIS.js";import"./part-ZUZ5SMMO.js";import"./part-BMGHYB2J.js";import"./part-ZK2YILMJ.js";import"./part-TKTGPRZR.js";import"./part-WZ5ZOODI.js";import{H as no,d as xe,o as on}from"./part-H5FMENGX.js";import"./part-EPAYPZAY.js";import"./part-W3UWFZ2V.js";import"./part-HGODWX5M.js";import"./part-3E3YJ362.js";import"./part-HZXSH6RP.js";import{a as p}from"./part-V7XQEHON.js";import"./part-FI5O6ZH7.js";import"./part-DOP52R3A.js";import"./part-CYQ3SFAJ.js";import"./part-D4NMSO2J.js";import"./part-GWZG2FUI.js";import"./part-VHSBPZHI.js";import{a as oe,b as Q,c as L}from"./part-GPLAS2FA.js";import"./part-SVX36NT2.js";import{O as eo,X as oo,Z as C,_ as T,aa as to,ca as P,u as Xe}from"./part-ZY5B6SMR.js";import"./part-VB56GJIN.js";import{a as c,e as z,g as U}from"./part-VOCLXBLR.js";import"./part-XSGL5JX3.js";var An=new Set;function A(e){let o=String(e);if(An.has(o)||typeof document>"u")return;An.add(o);let t=document.createElement("link");t.rel="stylesheet",t.href=o,document.head.append(t)}function ue(e,o){let t=new Set;function n(i){let a=i.termType||typeof i,r=i.value||String(i),l=`${a}:${r}`;if(t.has(l))return[];t.add(l);let s=i.elements;if(Array.isArray(s))return s.flatMap(u=>n(u));if(!e.any(i,p.rdf("first")))return[i];let f=[],g=i;for(;g;){let u=e.any(g,p.rdf("first"));u&&f.push(...n(u));let m=e.any(g,p.rdf("rest"));if(!m||m.termType==="NamedNode"&&m.value===p.rdf("nil").value)break;g=m}return f}return n(o)}var X=e=>class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML="<style>:host { display: inline-flex; }</style>"+e}};function te(e,o){customElements.get(e)||customElements.define(e,X(o))}te("icon-lucide-check",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/></svg>');var $n=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6L9 17l-5-5"/></svg>');te("icon-lucide-chevron-down",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>');var In=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/></svg>');te("icon-lucide-clipboard",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></g></svg>');var Tn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></g></svg>');te("icon-lucide-globe",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>');var Ln=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"/></g></svg>');te("icon-lucide-grid-2x2",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3v18m-9-9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g></svg>');var En=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 3v18m-9-9h18"/><rect width="18" height="18" x="3" y="3" rx="2"/></g></svg>');te("icon-lucide-mail",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>');var uo=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>');te("icon-lucide-map-pin",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></g></svg>');var Fn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></g></svg>');te("icon-lucide-message-square",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>');var Pn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>');te("icon-lucide-pencil",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>');var zn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>');te("icon-lucide-phone",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"/></svg>');var Dn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"/></svg>');te("icon-lucide-plus",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/></svg>');var Mn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14"/></svg>');te("icon-lucide-star",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/></svg>');var Rn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/></svg>');te("icon-lucide-trash-2",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>');var On=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>');te("icon-lucide-x",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>');var jn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>');te("icon-lucide-zap",'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/></svg>');var Bn=X('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.914 4a1.5 1.5 0 0 0-2.474-1.561l-9 9A1.5 1.5 0 0 0 5.5 14h4.002a.5.5 0 0 1 .471.666L8.086 20a1.5 1.5 0 0 0 2.475 1.56l9-9A1.5 1.5 0 0 0 18.5 10h-3.997a.5.5 0 0 1-.472-.667z"/></svg>');var re=(e,o)=>{customElements.get(e)||customElements.define(e,o)};re("icon-lucide-map-pin",Fn);re("icon-lucide-check",$n);re("icon-lucide-plus",Mn);re("icon-lucide-trash-2",On);re("icon-lucide-grid-2x2",En);re("icon-lucide-star",Rn);re("icon-lucide-globe",Ln);re("icon-lucide-zap",Bn);re("icon-lucide-message-square",Pn);re("icon-lucide-mail",uo);re("icon-lucide-clipboard",Tn);re("icon-lucide-x",jn);re("icon-lucide-pencil",zn);re("icon-lucide-chevron-down",In);var mo=c`<icon-lucide-map-pin style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-map-pin>`,Un=c`<icon-lucide-check style="width: 14px; height: 14px; color: #7C4DFF;" aria-hidden="true"></icon-lucide-check>`,Fe=c`<icon-lucide-plus style="width: 14px; height: 14px; color: #314158;" aria-hidden="true"></icon-lucide-plus>`,me=c`<icon-lucide-trash-2 style="width: 20px; height: 20px; color: #D1D5DC;" aria-hidden="true"></icon-lucide-trash-2>`,go=c`<icon-lucide-grid-2x2 style="width: 18px; height: 18px; color: #99A1AF;" aria-hidden="true"></icon-lucide-grid-2x2>`,_o=c`<icon-lucide-star style="width: 30px; height: 30px; color: #F4F4F4;" aria-hidden="true"></icon-lucide-star>`,V=c`<icon-lucide-plus style="width: 12px; height: 12px;" aria-hidden="true"></icon-lucide-plus>`,q=c`<icon-lucide-chevron-down style="width: 18px; height: 18px; color: #6A7282;" aria-hidden="true"></icon-lucide-chevron-down>`,Vn=c`<icon-lucide-globe style="width: 48px; height: 48px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-globe>`,qn=c`<icon-lucide-zap style="width: 37px; height: 40px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-zap>`,Hn=c`<icon-lucide-message-square style="width: 32px; height: 32px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-message-square>`,Gn=c`<icon-lucide-mail style="width: 48px; height: 48px; color: #E5E7EB;" aria-hidden="true"></icon-lucide-mail>`,Wn=c`<icon-lucide-clipboard style="width: 12px; height: 14px; color: #6A7282;" aria-hidden="true"></icon-lucide-clipboard>`,Kn=c`<icon-lucide-x style="width: 12px; height: 12px; color: #4A5565;" aria-hidden="true"></icon-lucide-x>`,j=c`<icon-lucide-pencil style="width: 14px; height: 14px;" aria-hidden="true"></icon-lucide-pencil>`,Yn=c`<icon-lucide-x style="width: 14px; height: 14px; color: #6A7282;" aria-hidden="true"></icon-lucide-x>`,Zn=c`<icon-lucide-chevron-down style="width: 16px; height: 16px; color: #7C4DFF;" aria-hidden="true"></icon-lucide-chevron-down>`;var or="https://solidos.github.io/profile-pane/src/ontology/";function Jn(e,o,t,n){let i=n||or+t,a=T(i);e.holds(void 0,void 0,void 0,a)||eo(o,e,i,"text/turtle",()=>null)}var Qn="socialMedia.ttl",tr=`${on.iconBase}noun_10636_grey.svg`,$e=(()=>{let e=_o?.strings?.join("")||"";return e?`data:image/svg+xml;utf8,${encodeURIComponent(e)}`:tr})();var oi=await(await fetch(L(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix owl: <http://www.w3.org/2002/07/owl#>.
@prefix solid: <http://www.w3.org/ns/solid/terms#>.
@prefix ui: <http://www.w3.org/ns/ui#>.
@prefix schema: <http://schema.org/>.
@prefix vcard: <http://www.w3.org/2006/vcard/ns#>.
@prefix org: <http://www.w3.org/ns/org#>.
@prefix : <#>.

########### ATTENTION - we cannot rename this ontology file name without migrating existing data on existing accounts

########### Social Media - other accounts
#
# Twitter, linked In, Orkid, Mastodon, Matrix, Bluesky, Instagram, Facebook, Github,
# Snapchat, TikTok, etc
#
# NOTE: Temporary icon strategy.
# We currently use URNs like <urn:profile-pane:icon:<key>> for bundled local icons.
# These icons are planned to move to a dedicated icons project in the future.

:this
    <http://purl.org/dc/elements/1.1/title> "Social media form" ;
    a ui:Form ;
    ui:parts (
      :SocialsForm
      ).

:SocialsForm a ui:Multiple;
    ui:label "online account";
    ui:property foaf:account; # the triple is created with the foaf:acccounts predicate
    ui:ordered true; # Allow user to order occounts most important first.
    ui:part :AccountsForm.

:AccountsForm a ui:Group; 
    ui:weight 1; 
    ui:parts ( 
        :AccountField 
        :AccountIdField ).

:AccountField a ui:Classifier; 
    ui:label "Account"@en;
    ui:multiple false ; 
    ui:category foaf:Account. # the accounts are described by the foaf:Account predicate

# this is what is needed to make a dropdown box
foaf:Account a rdfs:Class;
    rdfs:label "Online Account Provider";
    owl:disjointUnionOf ( 
        :BlueSkyAccount :DribbleAccount :DiggAccount :DiscordAccount :FacebookAccount :GithubAccount :InstagramAccount
        :LinkedInAccount :MastodonAccount :MatrixAccount :MediumAccount :NostrAccount 
        :OrcidAccount :PinterestAccount :RedditAccount :SharechatAccount :SnapchatAccount :SpotifyAccount :StravaAccount 
        :TelegramAccount :TiktokAccount  :TumblrAccount  :TwitterAccount :WhatsAppAccount :YouTubeAccount :OtherAccount) .

:AccountIdField a ui:Options; 
    ui:dependingOn rdf:type; 
    ui:case
     [ ui:for :BlueSkyAccount; ui:use :BlueSkyIdField ],
     [ ui:for :DribbleAccount; ui:use :DribbleIdField ],
     [ ui:for :DiggAccount; ui:use :DiggIdField],
     [ ui:for :FacebookAccount; ui:use :FacebookIdField ],
     [ ui:for :DiscordAccount; ui:use :DiscordIdField ],
     [ ui:for :GithubAccount; ui:use :GithubIdField ],
     [ ui:for :InstagramAccount; ui:use :InstagramIdField ],
     [ ui:for :LinkedInAccount; ui:use :LinkedInIdField ],
     [ ui:for :MastodonAccount; ui:use :MastodonIdField ],
     [ ui:for :MatrixAccount; ui:use :MatrixIdField ],
     [ ui:for :MediumAccount; ui:use :MediumIdField ],
     [ ui:for :NostrAccount; ui:use :NostrIdField ],
     [ ui:for :OrcidAccount; ui:use :OrcidIdField ],
     [ ui:for :PinterestAccount; ui:use :PinterestIdField ],
     [ ui:for :RedditAccount; ui:use :RedditIdField ],
     [ ui:for :StravaAccount; ui:use :StravaIdField ],
     [ ui:for :SharechatAccount; ui:use :SharechatIdField ],
     [ ui:for :SnapchatAccount; ui:use :SnapchatIdField ],
     [ ui:for :SpotifyAccount; ui:use :SpotifyIdField ],
     [ ui:for :TelegramAccount; ui:use :TelegramIdField ],
     [ ui:for :TiktokAccount; ui:use :TiktokIdField ],
     [ ui:for :TumblrAccount; ui:use :TumblrIdField ],
     [ ui:for :TwitterAccount; ui:use :TwitterIdField ],
     [ ui:for :WhatsAppAccount; ui:use :WhatsAppIdField ],
     [ ui:for :YouTubeAccount; ui:use :YouTubeIdField ],
     [ ui:for :OtherAccount; ui:use :OtherIdForm  ] .

:BlueSkyAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Bluesky";
    foaf:userProfilePrefix "https://bsky.app/profile/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/bluesky-1.svg>;
    foaf:homepage <https://bsky.app/> .

:DribbleAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Dribble";
    foaf:userProfilePrefix "https://dribbble.com/";
    foaf:icon <urn:profile-pane:icon:dribbble>;
    foaf:homepage <https://dribbble.com/> .


:DiscordAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Discord";
    foaf:userProfilePrefix "https://discord.com/users/";
    foaf:icon <urn:profile-pane:icon:discord>;
    foaf:homepage <https://discord.com/> .

:DiggAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Digg";
    foaf:userProfilePrefix "https://www.digg.com/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/digg-icon.svg>;
    foaf:homepage <https://www.digg.com/> .

:FacebookAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Facebook";
    foaf:userProfilePrefix "https://www.facebook.com/";
    foaf:icon <urn:profile-pane:icon:facebook>;
    foaf:homepage <https://www.facebook.com/> .

:GithubAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Github";
    foaf:userProfilePrefix "https://www.github.com/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/github-icon.svg>;
    foaf:homepage <https://github.com/> .

:InstagramAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Instagram";
    foaf:userProfilePrefix "https://www.instagram.com/";
    foaf:icon <urn:profile-pane:icon:instagram>;
    foaf:homepage <https://www.instagram.com/> .

:LinkedInAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "LinkedIn";
    foaf:userProfilePrefix "https://www.linkedin.com/in/";
    foaf:icon <urn:profile-pane:icon:linkedin>;
    foaf:homepage <https://linkedin.com/> .

:MastodonAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Mastodon" ;
    foaf:userProfilePrefix "https://mastodon.social/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/mastodon-2.svg>;
    foaf:homepage <https://joinmastodon.org/> .

:MatrixAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Matrix" ;
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/matrix-logo-black.svg> ;
    foaf:userProfilePrefix "https://matrix.to/#/" ;
    foaf:homepage <https://matrix.org/> .

:MediumAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Medium";
    foaf:userProfilePrefix "https://medium.com/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/medium-logo-wordmark-black.svg>;
    foaf:homepage <https://medium.com/> .

:NostrAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Nostr";
    foaf:userProfilePrefix "https://primal.net/p/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/nostr-icon-purple-on-white.svg>;
    foaf:homepage <https://nostr.net/> .

:OrcidAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "ORCiD";
    foaf:userProfilePrefix "https://orcid.org/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/ORCID-1.svg>;
    foaf:homepage <https://orcid.org/> .

:PinterestAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Pinterest";
    foaf:userProfilePrefix "https://pin.it/";
    foaf:icon <urn:profile-pane:icon:pinterest>;
    foaf:homepage <https://pinterest.com/> .

:RedditAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Reddit";
    foaf:userProfilePrefix "https://www.reddit.com/user/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/reddit-4.svg>;
    foaf:homepage <https://reddit.com/> .

:SharechatAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "ShareChat";
    foaf:userProfilePrefix "https://www.sharechat.com/user/";
    foaf:icon <urn:profile-pane:icon:sharechat>;
    foaf:homepage <https://sharechat.com/> .

:SnapchatAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Snapchat";
    foaf:userProfilePrefix "https://www.snapchat.com/add/";
    foaf:icon <urn:profile-pane:icon:snapchat>;
    foaf:homepage <https://www.snapchat.com/> .

:SpotifyAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Spotify";
    foaf:userProfilePrefix "https://www.spotify.com/user/";
    foaf:icon <urn:profile-pane:icon:spotify>;
    foaf:homepage <https://www.spotify.com/> .

:StravaAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Strava";
    foaf:userProfilePrefix "https://www.strava.com/athletes/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/strava-2.svg>;
    foaf:homepage <https://strava.com/> .

:TelegramAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Telegram";
    foaf:userProfilePrefix "https://t.me/";
    foaf:icon <urn:profile-pane:icon:telegram>;
    foaf:homepage <https://telegram.org/> .

:TiktokAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "TikTok";
    foaf:userProfilePrefix "https://www.tiktok.com/@";
    foaf:icon <urn:profile-pane:icon:tiktok>;
    foaf:homepage <https://www.tiktok.com/> .

:TumblrAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Tumblr";
    foaf:userProfilePrefix "https://www.tumblr.com/";
    foaf:icon <https://solidos.github.io/solid-ui/src/icons/social/tumblr-icon.svg>;
    foaf:homepage <https://www.tumblr.com/> .

:TwitterAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "X";
    foaf:userProfilePrefix "https://x.com/";
    foaf:icon <urn:profile-pane:icon:x>;
    foaf:homepage <https://x.com/> .

:WhatsAppAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "WhatsApp";
    foaf:userProfilePrefix "https://wa.me/";
    foaf:icon <urn:profile-pane:icon:whatsapp>;
    foaf:homepage <https://www.whatsapp.com/> .

:YouTubeAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "YouTube";
    foaf:userProfilePrefix "https://www.youtube.com/";
    foaf:icon <urn:profile-pane:icon:youtube>;
    foaf:homepage <https://www.youtube.com/> .

:OtherAccount rdfs:subClassOf foaf:Account ;
    rdfs:label "Other" ;
    foaf:icon <urn:profile-pane:starIcon> .

:BlueSkyIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-](.[a-z0-9A-Z_-])*".

:DiggIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-](.[a-z0-9A-Z_-])*".

:FacebookIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:DiscordIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:DribbleIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:GithubIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:InstagramIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:LinkedInIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*(.[a-z0-9A-Z_-])*".

:MastodonIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*(.[a-z0-9A-Z_-])*".

:MatrixIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*(.[a-z0-9A-Z_-])*".

:MediumIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*(.[a-z0-9A-Z_-])*".

:NostrIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*(.[a-z0-9A-Z_-])*".

:OrcidIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:PinterestIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:RedditIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:StravaIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "[a-z0-9A-Z_-]*".

:SnapchatIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:SpotifyIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:TelegramIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:TiktokIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:TumblrIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:TwitterIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:WhatsAppIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

:YouTubeIdField
    a ui:SingleLineTextField ;
    ui:label "Username";
    ui:maxLength "200" ;
    ui:property foaf:accountName ; 
    ui:pattern "@[a-z0-9A-Z_-]*".

# an unknown online account needs more info

:OtherIdForm a ui:Group; 
    ui:weight 0; 
    ui:parts ( 
        :OtherIdField 
        :OtherIconField 
        :OtherLabelField ).

:OtherIdField
    a ui:NamedNodeURIField ;
    ui:label "Account link";
    ui:maxLength "200" ;
    ui:property foaf:homepage.

:OtherIconField
    a ui:NamedNodeURIField ;
    ui:label "Icon link";
    ui:maxLength "200" ;
    ui:property foaf:icon.

:OtherLabelField
    a ui:SingleLineTextField ;
    ui:label "Name";
    ui:maxLength "200" ;
    ui:property rdfs:label.

# ends
`,"text/turtle"))).text(),Wo=new URL("panes/profile-pane/icons-png/discord.png",oe).href,Ko=new URL("panes/profile-pane/icons-png/dribbble.png",oe).href,Yo=new URL("panes/profile-pane/icons-png/facebook.png",oe).href,Zo=new URL("panes/profile-pane/icons-png/instagram.png",oe).href,Jo=new URL("panes/profile-pane/icons-png/linkedin.png",oe).href,Qo=new URL("panes/profile-pane/icons-png/pinterest.png",oe).href,Xo=new URL("panes/profile-pane/icons-png/sharechat.png",oe).href,et=new URL("panes/profile-pane/icons-png/snapchat.png",oe).href,ot=new URL("panes/profile-pane/icons-png/spotify.png",oe).href,tt=new URL("panes/profile-pane/icons-png/telegram.png",oe).href,nt=new URL("panes/profile-pane/icons-png/tiktok.png",oe).href,it=new URL("panes/profile-pane/icons-png/whatsapp.png",oe).href,at=new URL("panes/profile-pane/icons-png/x.png",oe).href,rt=new URL("panes/profile-pane/icons-png/youtube.png",oe).href,nr=T("http://www.w3.org/2002/07/owl#disjointUnionOf"),lt="urn:profile-pane:starIcon",Xn="urn:profile-pane:icon:",ti="https://solidos.github.io/profile-pane/src/ontology/socialMedia.ttl",le=`${ti}#`,ho=(()=>{let e=_o?.strings?.join("")||"";return e?`data:image/svg+xml;utf8,${encodeURIComponent(e)}`:$e})(),Ho=null,ir=[{classUri:`${le}FacebookAccount`,label:"Facebook",icon:Yo,userProfilePrefix:"https://www.facebook.com/",homepage:"https://www.facebook.com/"},{classUri:`${le}InstagramAccount`,label:"Instagram",icon:Zo,userProfilePrefix:"https://www.instagram.com/",homepage:"https://www.instagram.com/"},{classUri:`${le}LinkedInAccount`,label:"LinkedIn",icon:Jo,userProfilePrefix:"https://www.linkedin.com/in/",homepage:"https://linkedin.com/"},{classUri:`${le}TiktokAccount`,label:"TikTok",icon:nt,userProfilePrefix:"https://www.tiktok.com/@",homepage:"https://www.tiktok.com/"},{classUri:`${le}TwitterAccount`,label:"X",icon:at,userProfilePrefix:"https://x.com/",homepage:"https://x.com/"},{classUri:`${le}YouTubeAccount`,label:"YouTube",icon:rt,userProfilePrefix:"https://www.youtube.com/",homepage:"https://www.youtube.com/"},{classUri:`${le}DiscordAccount`,label:"Discord",icon:Wo,userProfilePrefix:"https://discord.com/users/",homepage:"https://discord.com/"},{classUri:`${le}SnapchatAccount`,label:"Snapchat",icon:et,userProfilePrefix:"https://www.snapchat.com/add/",homepage:"https://www.snapchat.com/"},{classUri:`${le}PinterestAccount`,label:"Pinterest",icon:Qo,userProfilePrefix:"https://pin.it/",homepage:"https://pinterest.com/"},{classUri:`${le}SpotifyAccount`,label:"Spotify",icon:ot,userProfilePrefix:"https://www.spotify.com/user/",homepage:"https://www.spotify.com/"},{classUri:`${le}TelegramAccount`,label:"Telegram",icon:tt,userProfilePrefix:"https://t.me/",homepage:"https://telegram.org/"},{classUri:`${le}DribbleAccount`,label:"Dribble",icon:Ko,userProfilePrefix:"https://dribbble.com/",homepage:"https://dribbble.com/"},{classUri:`${le}SharechatAccount`,label:"ShareChat",icon:Xo,userProfilePrefix:"https://www.sharechat.com/user/",homepage:"https://sharechat.com/"},{classUri:`${le}WhatsAppAccount`,label:"WhatsApp",icon:it,userProfilePrefix:"https://wa.me/",homepage:"https://www.whatsapp.com/"}],ei={discord:Wo,dribbble:Ko,facebook:Yo,instagram:Zo,linkedin:Jo,pinterest:Qo,sharechat:Xo,snapchat:et,spotify:ot,telegram:tt,tiktok:nt,whatsapp:it,x:at,youtube:rt,"discord.png":Wo,"dribbble.png":Ko,"facebook.png":Yo,"instagram.png":Zo,"linkedin.png":Jo,"pinterest.png":Qo,"sharechat.png":Xo,"snapchat.png":et,"spotify.png":ot,"telegram.png":tt,"tiktok.png":nt,"whatsapp.png":it,"x.png":at,"youtube.png":rt};function st(e){if(!e)return"";let o=e.trim().toLowerCase();if(o.startsWith(Xn)){let a=o.slice(Xn.length);return ei[a]||""}let t="icons-png/",n=o.lastIndexOf(t);if(n===-1)return"";let i=o.slice(n+t.length);return ei[i]||""}function ar(e,o){if(e.endsWith("#OtherAccount")||o===lt)return ho;let t=st(o);return t||o||$e}function rr(){if(Ho)return Ho;let e=oo();return eo(oi,e,ti,"text/turtle",()=>null),Ho=e,e}function Go(e){return(e||"").trim().toLowerCase().replace(/[#:/]/g," ").replace(/account\b/g,"").replace(/[^a-z0-9]/g,"")}function qe(e,o){let t=(o||"").trim();if(!t)return;let n=t.toLowerCase(),i=e.find(r=>r.classUri.toLowerCase()===n||r.label.toLowerCase()===n);if(i)return i;let a=Go(t);if(a)return e.find(r=>{let l=Go(r.label),s=Go(r.classUri);return l===a||s===a})}function ct(e){Jn(e,oi,Qn)}function bo(e){ct(e);let o=rr(),t=new Map,n=o.any(p.foaf("Account"),nr);if(n){let d=ue(o,n).filter(f=>f.termType==="NamedNode");for(let f of d)t.set(f.value,f)}let i=o.statementsMatching(void 0,p.rdfs("subClassOf"),p.foaf("Account"));for(let d of i){let f=d.subject;f?.termType==="NamedNode"&&t.set(f.value,f)}let a=Array.from(t.values());if(!a.length)return[];let r=a.map(d=>{let f=o.any(d,p.rdfs("label"))?.value||xe.label(d)||d.value,g=o.any(d,p.foaf("icon"))?.value||"",u=ar(d.value,g),m=o.any(d,p.foaf("homepage"))?.value||"",w=o.any(d,p.foaf("userProfilePrefix"))?.value||"";return{classUri:d.value,label:f,icon:u,homepage:m||void 0,userProfilePrefix:w||void 0}}),l=new Set,s=r.filter(d=>{let f=d.label.toLowerCase().trim();return!f||l.has(f)?!1:(l.add(f),!0)});for(let d of ir){let f=d.label.toLowerCase().trim();l.has(f)||(s.push(d),l.add(f))}return s}function ni(e,o){let t=e.any(o,p.foaf("name"))||e.any(o,p.rdfs("label"));if(t)return t.value;let n=e.each(o,p.rdf("type"));for(let i of n){let a=e.any(i,p.rdfs("label"));return a?a.value:xe.label(i)}return"Unknown Account"}function ii(e,o){let t=e.any(o,p.foaf("icon"));if(t?.value===lt)return ho;if(t){let i=st(t.value);return i||t.value}let n=e.each(o,p.rdf("type"));for(let i of n){if(i?.value?.endsWith("#OtherAccount"))return ho;let a=e.any(i,p.foaf("icon"));if(a?.value===lt)return ho;if(a){let r=st(a.value);return r||a.value}}return $e}function ai(e,o){let t=e.any(o,p.foaf("homepage"));if(t)return t.value;let n=String(e.anyJS(o,p.foaf("accountName"),null,o.doc())||"No_account_Name").trim();if(/^https?:\/\//i.test(n))return n;let i=e.each(o,p.rdf("type"));for(let a of i)if(a.termType==="NamedNode"){let r=e.any(a,p.foaf("userProfilePrefix"));if(r)return r.value+String(n).trim()}return e.anyJS(o,p.foaf("homepage"),null,o.doc())||""}function yo(e,o){function t(l){return{name:ni(o,l),icon:ii(o,l),homepage:ai(o,l),entryNode:l}}ct(o);let i=o.each(e,p.foaf("account")).flatMap(l=>ue(o,l)),a=new Set,r=[];for(let l of i)if(l.termType==="NamedNode"){let s=o.any(l,p.foaf("accountName")),d=s?s.value:"";a.has(d)||(a.add(d),r.push(t(l)))}return r.length?{accounts:r}:{accounts:[]}}function lr(e,o){if(o.termType==="Literal")return"";let t=e.anyJS(o,p.schema("name"));if(t)return t;let n=e.any(o,p.solid("publicId"));if(n&&(n.termType==="NamedNode"||n.termType==="BlankNode")){let i=e.anyJS(n,p.schema("name"));if(i)return i;if(n.termType==="NamedNode")return xe.label(n,!0)}return""}function ri(e,o){return o.each(e,p.schema("skills")).filter(t=>t.termType!=="Literal").map(t=>{let n=o.any(t,p.solid("publicId")),i=n?n.termType==="BlankNode"?`_:${n.value}`:n.value:"";return{name:lr(o,t),publicId:i,entryNode:t}}).filter(t=>t.name!=="")}var He="https://www.w3.org/ns/iana/language-code/";function li(e){return e.replace(/\s+/g," ").trim()}function si(e,o){return Array.isArray(o?.elements)?!0:o.termType!=="BlankNode"&&o.termType!=="NamedNode"?!1:!!e.any(o,p.rdf("first"))}function ft(e){return(e||"").trim().toLowerCase()}function pt(e){let o=(e||"").trim().toLowerCase();if(!o)return"";try{let t=Intl?.DisplayNames;if(typeof t=="function"){let i=new t(["en"],{type:"language"}).of(o);if(i)return i}}catch{}return o}function ci(e){let o=(e||"").trim();if(!o)return"";if(o.startsWith(He)){let t=ft(o.slice(He.length));return pt(t)}return pt(o)}function sr(e,o,t){let n=e.statementsMatching(o,t),i=n.find(r=>(r.object?.lang||"").toLowerCase().startsWith("en"));if(i&&typeof i.object?.value=="string")return i.object.value;let a=n.find(r=>r.object?.termType==="Literal");return a&&typeof a.object?.value=="string"?a.object.value:""}function cr(e,o){let n=e.statementsMatching(o,p.rdfs("label")).find(i=>(i.object?.lang||"").toLowerCase().startsWith("en"));return n&&n.object&&typeof n.object.value=="string"?n.object.value:""}function dt(e,o){let t=sr(e,o,p.schema("name"));if(t)return li(t);let n=cr(e,o);return n?li(n):o.value.startsWith(He)?ci(o.value):""}function dr(e,o){if(o?.termType==="NamedNode")return o.value;if(o?.termType==="Literal")return ft(o.value)||void 0;if(e.termType==="NamedNode"&&e.value.startsWith(He))return e.value}function pr(e,o,t){if(t?.termType==="NamedNode"){let n=dt(e,t);return n||ci(t.value)}if(t?.termType==="Literal"){let n=ft(t.value);if(!n)return"";let i=T(`${He}${n}`),a=dt(e,i);return a||pt(n)}if(o.termType==="NamedNode"){let n=dt(e,o);if(n)return n}return""}function fr(e,o){if(o.termType==="Literal")return o.value;if(o.termType!=="NamedNode"&&o.termType!=="BlankNode")return"";let t=e.any(o,p.solid("publicId"))||void 0;return pr(e,o,t)}function wo(e,o){let t=o.each(e,p.schema("knowsLanguage")),n=t.filter(s=>si(o,s)).map(s=>ue(o,s)),i=t.filter(s=>!si(o,s)),r=[...n.flat(),...i].map(s=>({name:fr(o,s),publicId:dr(s,o.any(s,p.solid("publicId"))||void 0),proficiency:o.anyValue(s,p.schema("proficiencyLevel"))||void 0,entryNode:s})).filter(s=>!!s.name),l=new Map;return r.forEach(s=>{let d=s.publicId||s.name;l.has(d)||l.set(d,s)}),Array.from(l.values())}function Ie(e){return e?typeof e=="string"?e:e.value||"":""}function ur(e){let o=(e||"").trim();return o?/^mailto:/i.test(o)?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o):!1}function mr(e){let o=(e||"").trim();return o?/^tel:/i.test(o)?!0:/^[+()\-\s\d]{5,}$/.test(o):!1}function di(e,o,t,n){let i=n==="email"?ur:mr,a=Ie(o);if(i(a))return o;let r=e.statementsMatching(o,p.vcard("value"),null,t),l=e.statementsMatching(o,p.vcard("value"));for(let s of[...r,...l]){let d=s.object;if(i(Ie(d)))return d}return null}function gr(e,o){let t=[];return(o.each(e,p.vcard("hasEmail"),null,e.doc())||null).forEach(i=>{let a=di(o,i,e.doc(),"email");if(!a)return;let r=o.any(i,p.rdf("type"),null,e.doc());t.push({entryNode:i,type:r,valueNode:a})}),t}function _r(e,o){let t=[];return(o.each(e,p.vcard("hasTelephone"),null,e.doc())||null).forEach(i=>{let a=di(o,i,e.doc(),"phone");if(!a)return;let r=o.any(i,p.rdf("type"),null,e.doc());t.push({entryNode:i,type:r,valueNode:a})}),t}function hr(e,o){let t=[];return(o.each(e,p.vcard("hasAddress"),null,e.doc())||null).map(i=>{let a=Ie(o.any(i,p.vcard("street-address"),null,e.doc())),r=Ie(o.any(i,p.vcard("locality"),null,e.doc())),l=Ie(o.any(i,p.vcard("region"),null,e.doc())),s=Ie(o.any(i,p.vcard("postal-code"),null,e.doc())),d=Ie(o.any(i,p.vcard("country-name"),null,e.doc())),f=o.any(i,p.rdf("type"),null,e.doc());t.push({entryNode:i,...f?{type:f}:{},streetAddress:a,locality:r,region:l,postalCode:s,countryName:d})}),t}function pi(e,o){let t=gr(e,o),n=_r(e,o),i=hr(e,o);return{emails:t,phones:n,addresses:i}}var br=p.schema("EducationalOccupationalCredential");function yr(e,o,t){return e.holds(o,p.rdf("type"),br,t)}function wr(e,o){let t=[],n=new Map,i=o.doc(),a=e.each(null,p.org("member"),o,i).filter(r=>yr(e,r,i));for(let r of a){let l=e.anyJS(r,p.schema("name"),null,i)||"",s=e.anyJS(r,p.schema("educationalCredentialAwarded"),null,i)||void 0,d=e.anyJS(r,p.schema("location"),null,i)||void 0,f=e.anyJS(r,p.schema("startDate"),null,i)||void 0,g=e.anyJS(r,p.schema("endDate"),null,i)||void 0,u=e.anyJS(r,p.schema("description"),null,i)||void 0,m={school:l,degree:s,location:d,startDate:f,endDate:g,description:u,entryNode:r},w=[m.school||"",m.degree||"",m.location||"",m.startDate||"",m.endDate||""].join("|"),x=n.get(w);if(!x){n.set(w,m);continue}let S=x.entryNode.termType==="NamedNode",b=m.entryNode.termType==="NamedNode";!S&&b&&n.set(w,m)}return n.forEach(r=>t.push(r)),t}function xr(e){return e.sort((o,t)=>{let n=!o.endDate,i=!t.endDate;if(n!==i)return n?-1:1;let a=o.endDate||"",r=t.endDate||"";if(a!==r)return r.localeCompare(a);let l=o.startDate||"";return(t.startDate||"").localeCompare(l)})}function fi(e,o){let t=wr(o,e);return xr(t)}function ut(e,o,t){return o?.elements?.length?!0:!!e.any(o,p.rdf("first"),null,t||null)}function xo(e,o,t){return ut(e,o,t)?ue(e,o):[o]}function vo(e,o){if(!e)return null;if(e.termType==="NamedNode")return e;if(e.termType==="Literal")try{return T(e.value)}catch{return null}if(e.termType!=="BlankNode")return null;let t=[p.solid("publicId"),p.schema("url"),p.foaf("homepage"),p.rdfs("seeAlso"),p.schema("sameAs"),p.schema("mainEntityOfPage")];for(let a of t){let r=o.any(e,a);if(r?.value){if(r.termType==="NamedNode")return r;if(r.termType==="Literal")try{return T(r.value)}catch{}}}let i=o.statementsMatching(e,null,null,null).find(a=>a.object.termType==="NamedNode");return i?.object?.value?i.object:null}function ui(e,o){return vo(e,o)?.value||e.value||""}function mi(e,o,t){let n=o.each(e,p.solid("community"),null,t),i=o.each(e,p.solid("community"),null,null),r=[...n,...i].flatMap(d=>xo(o,d,t)),l=new Set,s=[];for(let d of r){let f=`${d?.termType||""}:${d?.value||""}`;l.has(f)||(l.add(f),s.push(d))}return s}function vr(e,o){let t=e?.requested;if(!t||typeof t!="object")return;let n=t[o];return(typeof n=="string"&&n!=="requested"&&n!=="done"||typeof n=="number"&&n>=400)&&delete t[o],n}async function Cr(e,o){let t=e.doc(),n=o?.fetcher;if(!n||typeof n.load!="function")return;let i=mi(e,o,t),a=new Map;for(let r of i){let l=vo(r,o);if(!l)continue;let s=l.doc();a.set(s.value,s)}a.size&&await Promise.all(Array.from(a.values()).map(async r=>{let l=vr(n,r.value);try{await n.load(r)}catch{}}))}function kr(e){return e&&(e.termType==="NamedNode"||e.termType==="Literal")&&e.value||""}function Sr(e){let o=(e||"").trim();if(!o)return"";try{return new URL(o).href}catch{return o}}function Nr(e,o){if(e&&e.termType==="NamedNode")return e;try{return T(o)}catch{return null}}async function gi(e,o){await Cr(e,o);let t=e.doc(),n=new Set;return mi(e,o,t).map(r=>{let l=vo(r,o),s=l?.value||kr(r),d=Sr(s),f=l||Nr(r,s),g=f?.doc(),u=f&&o.anyValue(f,p.foaf("name"),null,g||null)||void 0,m=f&&o.anyValue(f,p.vcard("organization-name"),null,g||null)||void 0,w=u||(f?xe.label(f):xe.label(d)),x=f?no.findImage(f)||(no.findImageFromURI?.(f)??void 0):void 0,S=[];f&&(S=o.each(f,p.rdf("type"),null,g||null));let b=S.find(_=>_.termType==="NamedNode"&&(_.value===p.schema("Project").value||_.value===p.schema("Community").value)),h=b?.value===p.schema("Project").value?"project":b?.value===p.schema("Community").value?"community":"unknown";return!s||!d||n.has(d)?null:(n.add(d),{url:s,title:w,name:u,orgName:m,imageUrl:x,category:h,entryNode:r})}).filter(r=>!!r)}var _i=(e,o)=>({description:o.anyJS(e,p.vcard("note")),entryNode:e});async function hi(e,o){let t=pi(e,o),n=ri(e,o),i=wo(e,o),a=fi(e,o),r=await gi(e,o),l=_i(e,o),s=yo(e,o),d=tn(e,o);return{social:s,contactInfo:t,skills:n,languages:i,education:a,projects:r,bioDetails:l,cvDetails:d}}function bi(){return c`
    <span class="loading-spinner" aria-hidden="true"></span>
    <span class="sr-only">Saving...</span>
  `}function Ar(e){if(typeof e=="string")return e;if(e instanceof Error)return e.message||e.name;if(e==null)return"";try{return JSON.stringify(e)}catch{return String(e)}}function Pe(e,o){return(o||Ar(e)||"Something went wrong.").trim()}A(new URL("panes-profile-pane-src-ui-dialog.css",Q));var D=null,yi=new WeakMap;function $r(e){return e instanceof HTMLElement?e:e instanceof Node?e.parentElement:null}function Ir(e){return typeof e.composedPath=="function"?e.composedPath():e.target?[e.target]:[]}function Tr(e){let o=Ir(e),t=D?.querySelector("#modal-desc");if(t&&o.includes(t)||D&&o.includes(D))return!0;let n=$r(e.target);return!n||!D||!D.contains(n)?!1:!!n.closest("#modal-desc")}function gt(e){let o=yi.get(e);return o||(o={count:0,previousHtmlOverflow:e.documentElement.style.overflow,previousBodyOverflow:e.body.style.overflow,removeScrollGuard:null},yi.set(e,o)),o}function Lr(e){let o=gt(e);if(o.removeScrollGuard)return;let t=n=>{Tr(n)||n.preventDefault()};e.addEventListener("wheel",t,{capture:!0,passive:!1}),e.addEventListener("touchmove",t,{capture:!0,passive:!1}),o.removeScrollGuard=()=>{e.removeEventListener("wheel",t,!0),e.removeEventListener("touchmove",t,!0),o.removeScrollGuard=null}}function Er(e){let o=gt(e);o.count===0&&(o.previousHtmlOverflow=e.documentElement.style.overflow,o.previousBodyOverflow=e.body.style.overflow,e.documentElement.style.overflow="hidden",e.body.style.overflow="hidden",Lr(e)),o.count+=1}function Fr(e){let o=gt(e);o.count!==0&&(o.count-=1,!(o.count>0)&&(e.documentElement.style.overflow=o.previousHtmlOverflow,e.body.style.overflow=o.previousBodyOverflow,o.removeScrollGuard?.(),o.removeScrollGuard=null))}function Pr(e){return e.body}function zr(e){return e?.tagName==="SOLID-UI-BUTTON"}function wi(e,o){e&&(e.disabled=o,e.toggleAttribute("disabled",o))}function Dr(e,o){if(e){if(zr(e)){e.label=o,e.setAttribute("label",o),e.textContent=o;return}e.textContent=o}}function ve(e){return e.querySelector('#modal-buttons [data-dialog-primary="true"]')}function Ci(e){return e.querySelector('#modal-buttons [data-cancel="true"]')}function ki(e){let o=Pr(e);return D&&e.body.contains(D)?(D.parentElement!==o&&o.appendChild(D),D):(D=null,D=e.createElement("dialog"),D.id="profile-modal",D.setAttribute("aria-modal","true"),D.setAttribute("aria-labelledby","modal-title"),D.setAttribute("aria-describedby","modal-desc"),D.innerHTML=`
    <div class="modal">
      <div class="modal-header flex-row align-center justify-between">
        <h2 id="modal-title"></h2>
        <div id="modal-header-action" class="flex-row align-center"></div>
      </div>
      <div id="modal-desc"></div>
      <section id="modal-error" class="modal__error-section" aria-live="assertive" aria-atomic="true" aria-hidden="true" role="alert" tabindex="-1" hidden></section>
      <div id="modal-buttons" class="flex-row align-center justify-end"></div>
      <div id="modal-saving-overlay" hidden></div>
    </div>
  `,o.appendChild(D),D)}function Co(e){return{dialog:e,title:e.querySelector("#modal-title"),headerAction:e.querySelector("#modal-header-action"),description:e.querySelector("#modal-desc"),error:e.querySelector("#modal-error"),buttons:e.querySelector("#modal-buttons"),savingOverlay:e.querySelector("#modal-saving-overlay")}}function Si(e){let o="modal-desc",t=e.error.hidden||!e.error.textContent?.trim()?o:`${o} modal-error`;e.dialog.setAttribute("aria-describedby",t)}function _t(e){e.error.textContent="",e.error.setAttribute("aria-hidden","true"),e.error.hidden=!0,Si(e)}function xi(e,o,t){e.error.textContent=Pe(o,t),e.error.setAttribute("aria-hidden","false"),e.error.hidden=!1,Si(e)}function Mr(e){if(Er(e.ownerDocument),typeof e.showModal=="function")try{e.open||e.showModal();return}catch{}e.setAttribute("open","")}function Rr(e){try{if(typeof e.close=="function"&&e.open){e.close();return}e.removeAttribute("open")}finally{Fr(e.ownerDocument)}}function Or(e){return!!e.querySelector("[data-layout='mobile']")}function jr(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")==="true"||e.getAttribute("hidden")!==null||e.tabIndex<0)}function vi(e){let o=e.querySelectorAll(['input:not([type="hidden"]):not([disabled])',"textarea:not([disabled])","select:not([disabled])","solid-ui-select:not([disabled])","solid-ui-combobox:not([disabled])",'[contenteditable="true"]',"button:not([disabled])","solid-ui-button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","));for(let t of o)if(t instanceof HTMLElement&&jr(t))return t;return null}function Br(e,o,t){if(Or(e.ownerDocument)){let a=e.ownerDocument.activeElement;a&&e.contains(a)&&a.blur();return}let n=vi(o);if(n){n.focus(),(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)&&n.select();return}let i=vi(t);i&&i.focus()}function Ur(e){let o=new FormData(e),t={};return o.forEach((n,i)=>{t[i]=String(n)}),t}function Ni({title:e,message:o,buttons:t,headerAction:n,dom:i}){let a=ki(i),r=Co(a);return Mr(a),r.title.textContent=e||"",r.description.innerHTML="",typeof o=="string"?r.description.textContent=o:r.description.appendChild(o),r.buttons.innerHTML="",_t(r),new Promise(l=>{let s=u=>{Vr(u),l(u)},d=()=>{let u=Ci(a);if(u){u.click();return}s(!1)};a.oncancel=u=>{u.preventDefault(),d()},r.headerAction.innerHTML="";let f=n||{type:"close"};if(f.type==="close"){let u=i.createElement("solid-ui-button");u.setAttribute("variant","ghost"),u.setAttribute("aria-label","Close dialog");let m=i.createElement("span");m.setAttribute("slot","icon"),U(Kn,m),u.appendChild(m),u.onclick=()=>d(),r.headerAction.appendChild(u)}else if(f.type==="button"){let u=i.createElement("solid-ui-button");u.setAttribute("variant","tertiary"),u.className=f.className||"",u.textContent=f.label,u.setAttribute("label",f.label),u.setAttribute("aria-label",f.ariaLabel||f.label),u.onclick=async()=>{f.onClick&&await f.onClick()},r.headerAction.appendChild(u)}t.forEach(u=>{let m=i.createElement("solid-ui-button");m.setAttribute("label",u.label),m.setAttribute("variant",u.primary?"primary":"secondary"),m.textContent=u.label,u.primary&&m.setAttribute("data-dialog-primary","true"),u.cancel&&m.setAttribute("data-cancel","true"),m.addEventListener("click",async()=>{u.beforeClose&&!await u.beforeClose()||s(u.value)}),r.buttons.appendChild(m)}),(i.defaultView?.requestAnimationFrame?u=>i.defaultView?.requestAnimationFrame(()=>u()):u=>setTimeout(u,0))(()=>{Br(a,r.description,r.buttons)})})}function Vr(e){if(D){let o=Co(D);_t(o),Rr(D),D.oncancel=null;let t=D.querySelector("#modal-header-action button");t&&(t.onclick=null)}}function Ai(e,o="Information",t){return Ni({title:o,message:e,buttons:[{label:"OK",value:!0,primary:!0}],dom:t})}function mt(e,o,t){let n=Co(e),i=ve(e),a=Ci(e);if(e.classList.toggle("modal--saving",t),e.setAttribute("aria-busy",String(t)),n.description.toggleAttribute("inert",t),t){let r=e.ownerDocument.activeElement;r&&e.contains(r)&&r.blur()}i&&(wi(i,t),i.setAttribute("aria-busy",String(t)),Dr(i,o)),a&&wi(a,t),n.savingOverlay.hidden=!t,t?U(c`
      <div class="modal__saving-indicator inline-flex-row justify-center" aria-live="polite" aria-label="Saving changes">
        ${bi()}
      </div>
    `,n.savingOverlay):U(c``,n.savingOverlay)}function se(e){let o=e.submitLabel||"Save Changes",t=e.cancelLabel||"Cancel",n=ki(e.dom),i=Co(n),a=e.form.querySelector('button[type="submit"], input[type="submit"]'),r=a??e.form.ownerDocument.createElement("button"),l=!1;a||(r.type="submit",r.hidden=!0,r.tabIndex=-1,r.setAttribute("aria-hidden","true"),e.form.appendChild(r));let s=m=>m.replace(/^\s*edit\s+/i,"").replace(/^\s*add\s+/i,"").replace(/^\s*create\s+/i,"").trim();(()=>{let m=s(e.title);if(!m)return;let w=Array.from(e.form.querySelectorAll(['input:not([type="hidden"])',"textarea","select"].join(",")));if(w.length!==1)return;let[x]=w,S=x.hasAttribute("aria-label")||x.hasAttribute("aria-labelledby"),b=!!x.closest("label");S||b||x.getAttribute("type")==="hidden"||x.getAttribute("aria-label")||x.setAttribute("aria-label",m)})();let f=m=>{m.preventDefault(),ve(n)?.click()};e.form.addEventListener("submit",f);let g=Ni({title:e.title,message:e.form,headerAction:e.headerAction,buttons:[{label:t,value:null,cancel:!0},{label:o,value:"save",primary:!0,beforeClose:async()=>{if(_t(i),e.shouldCloseWithoutSave&&await e.shouldCloseWithoutSave())return l=!0,!0;if(e.validate){let m=await e.validate();if(m)return xi(i,m),!1}if(!e.onSave)return!0;try{return mt(n,o,!0),await e.onSave(),!0}catch(m){mt(n,o,!1);let w=e.formatSaveError?e.formatSaveError(m):void 0;return xi(i,m,w),!1}}}],dom:e.dom}),u=e.dom.defaultView?.requestAnimationFrame?m=>e.dom.defaultView?.requestAnimationFrame(()=>m()):m=>setTimeout(m,0);return e.onOpen&&u(e.onOpen),i.buttons.hidden=!!e.hideFooterButtons,g.then(m=>m!=="save"||l?null:Ur(e.form)).finally(()=>{i.buttons.hidden=!1,mt(n,o,!1),e.form.removeEventListener("submit",f),!a&&r.isConnected&&r.remove()})}var Ei={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",vcard:"http://www.w3.org/2006/vcard/ns#",foaf:"http://xmlns.com/foaf/0.1/",solid:"http://www.w3.org/ns/solid/terms#",schema:"http://schema.org/",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",dc:"http://purl.org/dc/elements/1.1/"},qr=Object.values(Ei);function $i(e){return e.startsWith("_:")?e.slice(2):e}function Ii(e){return!!(e?.subject&&e?.predicate&&e?.object)}function ko(e){return e?typeof e.toNT=="function"?e.toNT():e.value||"":""}function Ce(e,o,t){if(e){if(typeof e.setPrefixForURI=="function"){e.setPrefixForURI(o,t);return}e.namespaces||(e.namespaces={}),e.namespaces[o]=t}}function Fi(e){if(!e)return;let o=So(e),t=[e,o,o?.store];Object.entries(Ei).forEach(([n,i])=>{t.forEach(a=>{Ce(a,n,i)})})}function ht(e){return`${ko(e.subject)} ${ko(e.predicate)} ${ko(e.object)} ${ko(e.why)}`}function ze(e){return Array.from(new Map((e||[]).map(o=>[ht(o),o])).values())}function Hr(e,o,t){e.remove(o),t.forEach(n=>{e.add(n.subject,n.predicate,n.object,n.why)})}function Gr(e,o,t,n=!1){let i=ze((o||[]).filter(r=>Ii(r)?e.holds(r.subject,r.predicate,r.object,r.why)?!0:n?!1:e.statementsMatching(r.subject,r.predicate,r.object,r.why).length>0:!1)),a=ze((t||[]).filter(Ii));return{safeDeletions:i,safeInsertions:a}}function So(e){return e.updater}function Ge(e){return e.fetcher}async function Pi(e,o){if(!o)return;let t=Ge(e);if(typeof t?.load=="function"&&!(e.statementsMatching(void 0,void 0,void 0,o).length>0))try{await t.load(o)}catch{}}function Wr(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Kr(e,o){let t=new Set;return[e.subject,e.predicate,e.object].forEach(i=>{i&&(typeof i.value=="string"&&o.forEach(a=>{i.value.startsWith(a)&&t.add(a)}),i.termType==="Literal"&&typeof i.datatype?.value=="string"&&o.forEach(a=>{i.datatype.value.startsWith(a)&&t.add(a)}))}),[...t]}function Ti(e,o){let t=Wr(o);return new RegExp(`(^|\\n)\\s*(?:@prefix|PREFIX)\\s+[A-Za-z][\\w-]*:\\s*<${t}>`,"i").test(e)}async function ke(e,o,t,n=qr,i={}){let a=So(e),r=Ge(e);if(typeof a?.serialize!="function"||typeof r?.webOperation!="function")return!1;let l=Array.from(new Set((t||[]).flatMap(f=>Kr(f,n))));if(l.length===0)return!1;let s=i.documentTextCache?.get(o.value),d=typeof i.documentText=="string"?i.documentText:s;if(typeof d=="string")return l.some(f=>!Ti(d,f));try{let f=await r.webOperation("GET",o.value,{noMeta:!0,headers:{accept:"text/turtle"}});return!f?.ok||typeof f.responseText!="string"?!1:(i.documentTextCache?.set(o.value,f.responseText),l.some(g=>!Ti(f.responseText||"",g)))}catch{return!1}}function Yr(e){let o=(e||"").toLowerCase();return o.includes("fetch error for patch")||o.includes("failed to fetch")||o.includes(" on patch ")||o.includes("web error: 400")||o.includes("web error: 405")||o.includes("web error: 500")||o.includes("web error: 501")}function Zr(e){return(e||"").toLowerCase().includes("no record of our http get request for document")}function Jr(e,o,t,n){if(typeof e.update!="function")throw new Error(be);return new Promise((i,a)=>{try{e.update(o,t,(r,l,s)=>{if(l===!0){i();return}a(new Error(s||n))})}catch(r){a(r instanceof Error?r:new Error(String(r)))}})}async function Li(e,o,t,n,i,a){Fi(e);let r=So(e),l=Ge(e);if(!r||typeof r.serialize!="function"||!l||typeof l.webOperation!="function")throw new Error(i);await Pi(e,o);let s=e.statementsMatching(void 0,void 0,void 0,o).slice(),d=new Set((t||[]).map(x=>ht(x))),f=s.filter(x=>!d.has(ht(x))).concat(n||[]),g=oo();f.forEach(x=>{g.add(x.subject,x.predicate,x.object,x.why)});let u="text/turtle",m=r.serialize(o.value,g.statementsMatching(void 0,void 0,void 0,o),u),w=await l.webOperation("PUT",o.value,{noMeta:!0,contentType:u,body:m});if(!w||w.ok!==!0){let x=w?.status||"unknown";throw new Error(`Web error: ${x} on PUT of <${o.value}>`)}a?.set(o.value,m),Hr(e,t,n)}async function ee(e,o,t,n,i){Fi(e);let a=So(e);if(!a)throw new Error(i.unsupportedMessage);i.forcePut&&await Pi(e,o);let{safeDeletions:r,safeInsertions:l}=Gr(e,t,n,i.requireStoredDelete===!0);if(r.length===0&&l.length===0)return;if(i.forcePut){if(!o)throw new Error(i.unsupportedMessage);await Li(e,o,r,l,i.unsupportedMessage,i.documentTextCache);return}let s=i.failureMessage||Cn,d=i.patchFailureMatcher||Yr,f=i.missingGetRecordMatcher||Zr;try{await Jr(a,r,l,s);return}catch(g){let u=g instanceof Error?g.message:String(g);if(!d(u))throw g;if(i.useDavFallback&&typeof a.updateDav=="function"){if(o&&Ge(e)?.load)try{await Ge(e)?.load?.(o)}catch{}try{await new Promise((m,w)=>{a.updateDav?.(o,r,l,(x,S,b)=>{if(S===!0){m();return}w(new Error(b||u||s))})});return}catch(m){let w=m instanceof Error?m.message:String(m);if(!i.usePutFallback||!f(w))throw m}}if(i.usePutFallback){if(!o)throw new Error(i.unsupportedMessage);await Li(e,o,r,l,i.unsupportedMessage,i.documentTextCache);return}throw g}}function ne(e,o,t){return e.statementsMatching(o,null,null,t)}function No(e,o,t,n,i,a,r){i.push(...e.statementsMatching(o,t,null,n)),r&&a.push(C(o,t,r,n))}function ye(e,o,t,n){let i=e.each(o,t,null,n),a=i.flatMap(l=>ne(e,l,n)),r=e.statementsMatching(o,t,null,n);return{linkedNodes:i,linkedStatements:a,linkStatements:r}}function Y(e,o){let t=$i(o);return e.find(n=>$i(n.value)===t?!0:n.value===o)}var bt=0;function B(e){let o=Date.now(),t=o>bt?o:bt+1;return bt=t,T(`${e.uri}#id${t}`)}function yt(e,o,t,n){let i=n.value.startsWith("tel:")?n.value:`tel:${n.value}`,a=T(i),r=[C(e,p.vcard("hasTelephone"),t,o),C(t,p.vcard("value"),a,o)];return n.type&&r.push(C(t,p.rdf("type"),p.vcard(n.type),o)),r}function wt(e,o,t,n){let i=n.value.startsWith("mailto:")?n.value:`mailto:${n.value}`,a=T(i),r=[C(e,p.vcard("hasEmail"),t,o),C(t,p.vcard("value"),a,o)];return n.type&&r.push(C(t,p.rdf("type"),p.vcard(n.type),o)),r}function xt(e,o,t,n){let i=[C(e,p.vcard("hasAddress"),t,o)];return n.type&&i.push(C(t,p.rdf("type"),p.vcard(n.type),o)),n.streetAddress&&i.push(C(t,p.vcard("street-address"),P(n.streetAddress),o)),n.locality&&i.push(C(t,p.vcard("locality"),P(n.locality),o)),n.region&&i.push(C(t,p.vcard("region"),P(n.region),o)),n.postalCode&&i.push(C(t,p.vcard("postal-code"),P(n.postalCode),o)),n.countryName&&i.push(C(t,p.vcard("country-name"),P(n.countryName),o)),i}async function Qr(e,o,t,n){let i=o.doc(),a=e.each(o,p.vcard("hasTelephone"),null,i),r=[],l=[];t.remove.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(f){let u=ye(e,o,p.vcard("hasTelephone"),i).linkStatements.find(m=>m.object?.value===f.value);u&&r.push(u),r.push(...ne(e,f,i))}}),t.update.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(!f){l.push(...yt(o,i,B(i),d));return}let u=ye(e,o,p.vcard("hasTelephone"),i).linkStatements.find(m=>m.object?.value===f.value);u&&r.push(u),r.push(...ne(e,f,i)),l.push(...yt(o,i,f,d))}),t.create.forEach(d=>{l.push(...yt(o,i,B(i),d))});let s=await ke(e,i,l,void 0,{documentTextCache:n});await ee(e,i,r,l,{unsupportedMessage:be,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function Xr(e,o,t,n){let i=o.doc(),a=e.each(o,p.vcard("hasEmail"),null,i),r=[],l=[];t.remove.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(f){let u=ye(e,o,p.vcard("hasEmail"),i).linkStatements.find(m=>m.object?.value===f.value);u&&r.push(u),r.push(...ne(e,f,i))}}),t.update.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(!f){l.push(...wt(o,i,B(i),d));return}r.push(...ne(e,f,i)),l.push(...wt(o,i,f,d))}),t.create.forEach(d=>{l.push(...wt(o,i,B(i),d))});let s=await ke(e,i,l,void 0,{documentTextCache:n});await ee(e,i,r,l,{unsupportedMessage:be,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function el(e,o,t,n){let i=o.doc(),a=e.each(o,p.vcard("hasAddress"),null,i),r=[],l=[];t.remove.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(f){let u=ye(e,o,p.vcard("hasAddress"),i).linkStatements.find(m=>m.object?.value===f.value);u&&r.push(u),r.push(...ne(e,f,i))}}),t.update.forEach(d=>{if(!d.entryNode)return;let f=Y(a,d.entryNode);if(!f){l.push(...xt(o,i,B(i),d));return}r.push(...ne(e,f,i)),l.push(...xt(o,i,f,d))}),t.create.forEach(d=>{l.push(...xt(o,i,B(i),d))});let s=await ke(e,i,l,void 0,{documentTextCache:n});await ee(e,i,r,l,{unsupportedMessage:be,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function zi(e,o,t){try{let n=new Map;await Qr(e,o,t.phoneOps,n),await Xr(e,o,t.emailOps,n),await el(e,o,t.addressOps,n)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw ae(_n,i),new Error(io,{cause:i})}}var Di=[{iso2:"EG",dialCode:"+20",name:"Egypt"},{iso2:"ZA",dialCode:"+27",name:"South Africa"},{iso2:"GR",dialCode:"+30",name:"Greece"},{iso2:"NL",dialCode:"+31",name:"Netherlands"},{iso2:"BE",dialCode:"+32",name:"Belgium"},{iso2:"FR",dialCode:"+33",name:"France"},{iso2:"ES",dialCode:"+34",name:"Spain"},{iso2:"HU",dialCode:"+36",name:"Hungary"},{iso2:"IT",dialCode:"+39",name:"Italy"},{iso2:"RO",dialCode:"+40",name:"Romania"},{iso2:"CH",dialCode:"+41",name:"Switzerland"},{iso2:"AT",dialCode:"+43",name:"Austria"},{iso2:"GG",dialCode:"+44",name:"Guernsey"},{iso2:"IM",dialCode:"+44",name:"Isle of Man"},{iso2:"JE",dialCode:"+44",name:"Jersey"},{iso2:"GB",dialCode:"+44",name:"United Kingdom"},{iso2:"DK",dialCode:"+45",name:"Denmark"},{iso2:"SE",dialCode:"+46",name:"Sweden"},{iso2:"BV",dialCode:"+47",name:"Bouvet Island"},{iso2:"NO",dialCode:"+47",name:"Norway"},{iso2:"PL",dialCode:"+48",name:"Poland"},{iso2:"DE",dialCode:"+49",name:"Germany"},{iso2:"PE",dialCode:"+51",name:"Peru"},{iso2:"MX",dialCode:"+52",name:"Mexico"},{iso2:"CU",dialCode:"+53",name:"Cuba"},{iso2:"AR",dialCode:"+54",name:"Argentina"},{iso2:"BR",dialCode:"+55",name:"Brazil"},{iso2:"CL",dialCode:"+56",name:"Chile"},{iso2:"CO",dialCode:"+57",name:"Colombia"},{iso2:"VE",dialCode:"+58",name:"Venezuela"},{iso2:"MY",dialCode:"+60",name:"Malaysia"},{iso2:"AU",dialCode:"+61",name:"Australia"},{iso2:"CX",dialCode:"+61",name:"Christmas Island"},{iso2:"CC",dialCode:"+61",name:"Cocos (Keeling) Islands"},{iso2:"ID",dialCode:"+62",name:"Indonesia"},{iso2:"PH",dialCode:"+63",name:"Philippines"},{iso2:"NZ",dialCode:"+64",name:"New Zealand"},{iso2:"PN",dialCode:"+64",name:"Pitcairn Islands"},{iso2:"SG",dialCode:"+65",name:"Singapore"},{iso2:"TH",dialCode:"+66",name:"Thailand"},{iso2:"RU",dialCode:"+73",name:"Russia"},{iso2:"KZ",dialCode:"+76",name:"Kazakhstan"},{iso2:"JP",dialCode:"+81",name:"Japan"},{iso2:"KR",dialCode:"+82",name:"South Korea"},{iso2:"VN",dialCode:"+84",name:"Vietnam"},{iso2:"CN",dialCode:"+86",name:"China"},{iso2:"TR",dialCode:"+90",name:"Turkiye"},{iso2:"IN",dialCode:"+91",name:"India"},{iso2:"PK",dialCode:"+92",name:"Pakistan"},{iso2:"AF",dialCode:"+93",name:"Afghanistan"},{iso2:"LK",dialCode:"+94",name:"Sri Lanka"},{iso2:"MM",dialCode:"+95",name:"Myanmar"},{iso2:"IR",dialCode:"+98",name:"Iran"},{iso2:"SS",dialCode:"+211",name:"South Sudan"},{iso2:"MA",dialCode:"+212",name:"Morocco"},{iso2:"DZ",dialCode:"+213",name:"Algeria"},{iso2:"TN",dialCode:"+216",name:"Tunisia"},{iso2:"LY",dialCode:"+218",name:"Libya"},{iso2:"GM",dialCode:"+220",name:"Gambia"},{iso2:"SN",dialCode:"+221",name:"Senegal"},{iso2:"MR",dialCode:"+222",name:"Mauritania"},{iso2:"ML",dialCode:"+223",name:"Mali"},{iso2:"GN",dialCode:"+224",name:"Guinea"},{iso2:"CI",dialCode:"+225",name:"Ivory Coast"},{iso2:"BF",dialCode:"+226",name:"Burkina Faso"},{iso2:"NE",dialCode:"+227",name:"Niger"},{iso2:"TG",dialCode:"+228",name:"Togo"},{iso2:"BJ",dialCode:"+229",name:"Benin"},{iso2:"MU",dialCode:"+230",name:"Mauritius"},{iso2:"LR",dialCode:"+231",name:"Liberia"},{iso2:"SL",dialCode:"+232",name:"Sierra Leone"},{iso2:"GH",dialCode:"+233",name:"Ghana"},{iso2:"NG",dialCode:"+234",name:"Nigeria"},{iso2:"TD",dialCode:"+235",name:"Chad"},{iso2:"CF",dialCode:"+236",name:"Central African Republic"},{iso2:"CM",dialCode:"+237",name:"Cameroon"},{iso2:"CV",dialCode:"+238",name:"Cape Verde"},{iso2:"ST",dialCode:"+239",name:"Sao Tome and Principe"},{iso2:"GQ",dialCode:"+240",name:"Equatorial Guinea"},{iso2:"GA",dialCode:"+241",name:"Gabon"},{iso2:"CG",dialCode:"+242",name:"Congo"},{iso2:"CD",dialCode:"+243",name:"DR Congo"},{iso2:"AO",dialCode:"+244",name:"Angola"},{iso2:"GW",dialCode:"+245",name:"Guinea-Bissau"},{iso2:"IO",dialCode:"+246",name:"British Indian Ocean Territory"},{iso2:"SC",dialCode:"+248",name:"Seychelles"},{iso2:"SD",dialCode:"+249",name:"Sudan"},{iso2:"RW",dialCode:"+250",name:"Rwanda"},{iso2:"ET",dialCode:"+251",name:"Ethiopia"},{iso2:"SO",dialCode:"+252",name:"Somalia"},{iso2:"DJ",dialCode:"+253",name:"Djibouti"},{iso2:"KE",dialCode:"+254",name:"Kenya"},{iso2:"TZ",dialCode:"+255",name:"Tanzania"},{iso2:"UG",dialCode:"+256",name:"Uganda"},{iso2:"BI",dialCode:"+257",name:"Burundi"},{iso2:"MZ",dialCode:"+258",name:"Mozambique"},{iso2:"ZM",dialCode:"+260",name:"Zambia"},{iso2:"MG",dialCode:"+261",name:"Madagascar"},{iso2:"TF",dialCode:"+262",name:"French Southern and Antarctic Lands"},{iso2:"YT",dialCode:"+262",name:"Mayotte"},{iso2:"RE",dialCode:"+262",name:"Reunion"},{iso2:"ZW",dialCode:"+263",name:"Zimbabwe"},{iso2:"NA",dialCode:"+264",name:"Namibia"},{iso2:"MW",dialCode:"+265",name:"Malawi"},{iso2:"LS",dialCode:"+266",name:"Lesotho"},{iso2:"BW",dialCode:"+267",name:"Botswana"},{iso2:"SZ",dialCode:"+268",name:"Eswatini"},{iso2:"UM",dialCode:"+268",name:"United States Minor Outlying Islands"},{iso2:"KM",dialCode:"+269",name:"Comoros"},{iso2:"SH",dialCode:"+290",name:"Saint Helena, Ascension and Tristan da Cunha"},{iso2:"ER",dialCode:"+291",name:"Eritrea"},{iso2:"AW",dialCode:"+297",name:"Aruba"},{iso2:"FO",dialCode:"+298",name:"Faroe Islands"},{iso2:"GL",dialCode:"+299",name:"Greenland"},{iso2:"GI",dialCode:"+350",name:"Gibraltar"},{iso2:"PT",dialCode:"+351",name:"Portugal"},{iso2:"LU",dialCode:"+352",name:"Luxembourg"},{iso2:"IE",dialCode:"+353",name:"Ireland"},{iso2:"IS",dialCode:"+354",name:"Iceland"},{iso2:"AL",dialCode:"+355",name:"Albania"},{iso2:"MT",dialCode:"+356",name:"Malta"},{iso2:"CY",dialCode:"+357",name:"Cyprus"},{iso2:"FI",dialCode:"+358",name:"Finland"},{iso2:"BG",dialCode:"+359",name:"Bulgaria"},{iso2:"LT",dialCode:"+370",name:"Lithuania"},{iso2:"LV",dialCode:"+371",name:"Latvia"},{iso2:"EE",dialCode:"+372",name:"Estonia"},{iso2:"MD",dialCode:"+373",name:"Moldova"},{iso2:"AM",dialCode:"+374",name:"Armenia"},{iso2:"BY",dialCode:"+375",name:"Belarus"},{iso2:"AD",dialCode:"+376",name:"Andorra"},{iso2:"MC",dialCode:"+377",name:"Monaco"},{iso2:"SM",dialCode:"+378",name:"San Marino"},{iso2:"UA",dialCode:"+380",name:"Ukraine"},{iso2:"RS",dialCode:"+381",name:"Serbia"},{iso2:"ME",dialCode:"+382",name:"Montenegro"},{iso2:"XK",dialCode:"+383",name:"Kosovo"},{iso2:"HR",dialCode:"+385",name:"Croatia"},{iso2:"SI",dialCode:"+386",name:"Slovenia"},{iso2:"BA",dialCode:"+387",name:"Bosnia and Herzegovina"},{iso2:"MK",dialCode:"+389",name:"North Macedonia"},{iso2:"CZ",dialCode:"+420",name:"Czechia"},{iso2:"SK",dialCode:"+421",name:"Slovakia"},{iso2:"LI",dialCode:"+423",name:"Liechtenstein"},{iso2:"FK",dialCode:"+500",name:"Falkland Islands"},{iso2:"GS",dialCode:"+500",name:"South Georgia"},{iso2:"BZ",dialCode:"+501",name:"Belize"},{iso2:"GT",dialCode:"+502",name:"Guatemala"},{iso2:"SV",dialCode:"+503",name:"El Salvador"},{iso2:"HN",dialCode:"+504",name:"Honduras"},{iso2:"NI",dialCode:"+505",name:"Nicaragua"},{iso2:"CR",dialCode:"+506",name:"Costa Rica"},{iso2:"PA",dialCode:"+507",name:"Panama"},{iso2:"PM",dialCode:"+508",name:"Saint Pierre and Miquelon"},{iso2:"HT",dialCode:"+509",name:"Haiti"},{iso2:"GP",dialCode:"+590",name:"Guadeloupe"},{iso2:"BL",dialCode:"+590",name:"Saint Barthelemy"},{iso2:"MF",dialCode:"+590",name:"Saint Martin"},{iso2:"BO",dialCode:"+591",name:"Bolivia"},{iso2:"GY",dialCode:"+592",name:"Guyana"},{iso2:"EC",dialCode:"+593",name:"Ecuador"},{iso2:"GF",dialCode:"+594",name:"French Guiana"},{iso2:"PY",dialCode:"+595",name:"Paraguay"},{iso2:"MQ",dialCode:"+596",name:"Martinique"},{iso2:"SR",dialCode:"+597",name:"Suriname"},{iso2:"UY",dialCode:"+598",name:"Uruguay"},{iso2:"BQ",dialCode:"+599",name:"Caribbean Netherlands"},{iso2:"CW",dialCode:"+599",name:"Curacao"},{iso2:"TL",dialCode:"+670",name:"Timor-Leste"},{iso2:"NF",dialCode:"+672",name:"Norfolk Island"},{iso2:"BN",dialCode:"+673",name:"Brunei"},{iso2:"NR",dialCode:"+674",name:"Nauru"},{iso2:"PG",dialCode:"+675",name:"Papua New Guinea"},{iso2:"TO",dialCode:"+676",name:"Tonga"},{iso2:"SB",dialCode:"+677",name:"Solomon Islands"},{iso2:"VU",dialCode:"+678",name:"Vanuatu"},{iso2:"FJ",dialCode:"+679",name:"Fiji"},{iso2:"PW",dialCode:"+680",name:"Palau"},{iso2:"WF",dialCode:"+681",name:"Wallis and Futuna"},{iso2:"CK",dialCode:"+682",name:"Cook Islands"},{iso2:"NU",dialCode:"+683",name:"Niue"},{iso2:"WS",dialCode:"+685",name:"Samoa"},{iso2:"KI",dialCode:"+686",name:"Kiribati"},{iso2:"NC",dialCode:"+687",name:"New Caledonia"},{iso2:"TV",dialCode:"+688",name:"Tuvalu"},{iso2:"PF",dialCode:"+689",name:"French Polynesia"},{iso2:"TK",dialCode:"+690",name:"Tokelau"},{iso2:"FM",dialCode:"+691",name:"Micronesia"},{iso2:"MH",dialCode:"+692",name:"Marshall Islands"},{iso2:"KP",dialCode:"+850",name:"North Korea"},{iso2:"HK",dialCode:"+852",name:"Hong Kong"},{iso2:"MO",dialCode:"+853",name:"Macau"},{iso2:"KH",dialCode:"+855",name:"Cambodia"},{iso2:"LA",dialCode:"+856",name:"Laos"},{iso2:"BD",dialCode:"+880",name:"Bangladesh"},{iso2:"TW",dialCode:"+886",name:"Taiwan"},{iso2:"MV",dialCode:"+960",name:"Maldives"},{iso2:"LB",dialCode:"+961",name:"Lebanon"},{iso2:"JO",dialCode:"+962",name:"Jordan"},{iso2:"SY",dialCode:"+963",name:"Syria"},{iso2:"IQ",dialCode:"+964",name:"Iraq"},{iso2:"KW",dialCode:"+965",name:"Kuwait"},{iso2:"SA",dialCode:"+966",name:"Saudi Arabia"},{iso2:"YE",dialCode:"+967",name:"Yemen"},{iso2:"OM",dialCode:"+968",name:"Oman"},{iso2:"PS",dialCode:"+970",name:"Palestine"},{iso2:"AE",dialCode:"+971",name:"United Arab Emirates"},{iso2:"IL",dialCode:"+972",name:"Israel"},{iso2:"BH",dialCode:"+973",name:"Bahrain"},{iso2:"QA",dialCode:"+974",name:"Qatar"},{iso2:"BT",dialCode:"+975",name:"Bhutan"},{iso2:"MN",dialCode:"+976",name:"Mongolia"},{iso2:"NP",dialCode:"+977",name:"Nepal"},{iso2:"TJ",dialCode:"+992",name:"Tajikistan"},{iso2:"TM",dialCode:"+993",name:"Turkmenistan"},{iso2:"AZ",dialCode:"+994",name:"Azerbaijan"},{iso2:"GE",dialCode:"+995",name:"Georgia"},{iso2:"KG",dialCode:"+996",name:"Kyrgyzstan"},{iso2:"UZ",dialCode:"+998",name:"Uzbekistan"},{iso2:"US",dialCode:"+1201",name:"United States"},{iso2:"CA",dialCode:"+1204",name:"Canada"},{iso2:"BS",dialCode:"+1242",name:"Bahamas"},{iso2:"BB",dialCode:"+1246",name:"Barbados"},{iso2:"AI",dialCode:"+1264",name:"Anguilla"},{iso2:"AG",dialCode:"+1268",name:"Antigua and Barbuda"},{iso2:"VG",dialCode:"+1284",name:"British Virgin Islands"},{iso2:"VI",dialCode:"+1340",name:"United States Virgin Islands"},{iso2:"KY",dialCode:"+1345",name:"Cayman Islands"},{iso2:"BM",dialCode:"+1441",name:"Bermuda"},{iso2:"GD",dialCode:"+1473",name:"Grenada"},{iso2:"TC",dialCode:"+1649",name:"Turks and Caicos Islands"},{iso2:"MS",dialCode:"+1664",name:"Montserrat"},{iso2:"MP",dialCode:"+1670",name:"Northern Mariana Islands"},{iso2:"GU",dialCode:"+1671",name:"Guam"},{iso2:"AS",dialCode:"+1684",name:"American Samoa"},{iso2:"SX",dialCode:"+1721",name:"Sint Maarten"},{iso2:"LC",dialCode:"+1758",name:"Saint Lucia"},{iso2:"DM",dialCode:"+1767",name:"Dominica"},{iso2:"VC",dialCode:"+1784",name:"Saint Vincent and the Grenadines"},{iso2:"PR",dialCode:"+1787",name:"Puerto Rico"},{iso2:"DO",dialCode:"+1809",name:"Dominican Republic"},{iso2:"TT",dialCode:"+1868",name:"Trinidad and Tobago"},{iso2:"KN",dialCode:"+1869",name:"Saint Kitts and Nevis"},{iso2:"JM",dialCode:"+1876",name:"Jamaica"},{iso2:"SJ",dialCode:"+4779",name:"Svalbard and Jan Mayen"},{iso2:"AX",dialCode:"+35818",name:"Aland Islands"},{iso2:"EH",dialCode:"+2125288",name:"Western Sahara"},{iso2:"VA",dialCode:"+3906698",name:"Vatican City"}],ol=new Set(["AQ","AX","BL","BM","BQ","BV","CC","CK","CP","CW","CX","EH","FK","FO","GF","GG","GI","GL","GP","GS","GU","HK","HM","IM","IO","JE","KY","MF","MO","MP","MQ","MS","NC","NF","NU","PF","PM","PN","PR","RE","SH","SJ","TC","TF","TK","UM","VG","VI","WF","YT"]);function Mi(e){return/^\+1\d{3,}$/.test(e)?"+1":/^\+7\d+$/.test(e)?"+7":/^\+39\d{3,}$/.test(e)?"+39":/^\+358\d+$/.test(e)?"+358":/^\+47\d+$/.test(e)?"+47":/^\+212\d+$/.test(e)?"+212":e}var tl=Di.filter(e=>!ol.has(e.iso2)).map(e=>({...e,dialCode:Mi(e.dialCode)})).filter((e,o,t)=>{let n=`${e.iso2}|${e.dialCode}`;return t.findIndex(i=>`${i.iso2}|${i.dialCode}`===n)===o}),nl=[...tl].sort((e,o)=>{let t=Number.parseInt(e.dialCode.replace("+",""),10),n=Number.parseInt(o.dialCode.replace("+",""),10);return t!==n?t-n:e.name.localeCompare(o.name)}),il={"+1":"US","+7":"RU"},al=Array.from(nl.reduce((e,o)=>{if(!e.get(o.dialCode))return e.set(o.dialCode,o),e;let n=il[o.dialCode];return n&&o.iso2===n&&e.set(o.dialCode,o),e},new Map).values()),rl=Array.from(new Set(Di.map(e=>e.dialCode))).sort((e,o)=>o.length-e.length);function We(e){let o=e.trim();if(!o)return{dialCode:"",localNumber:""};if(!o.startsWith("+"))return{dialCode:"",localNumber:o};let t=rl.find(r=>o.startsWith(r));if(!t)return{dialCode:"",localNumber:o};let n=Mi(t),i=o.slice(t.length),a=o.slice(n.length);return{dialCode:al.some(r=>r.dialCode===n)?n:"",localNumber:t.length>n.length?a:i}}function Ri(e,o){let t=o.trim();return t?t.startsWith("+")?t:e?`${e}${t}`:t:""}function Oi(e){if(e.trim().length>0){let o=e.split(" ");for(let t=0;t<o.length;t++)o[t]=o[t].charAt(0).toUpperCase()+o[t].substring(1);return o.join(" ")}return""}function v(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let o=e.value;return typeof o=="string"?o:""}return""}function Ke(e){let o=v(e).trim();if(!o)return"";let n=o.replace(/^<|>$/g,"").split("#"),a=n[n.length-1].split("/");return a[a.length-1]}function $(e){return e.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim()}function E(e){return!!(e&&e.trim()!=="")}function ji(e){let o=Ke(e).trim().toLowerCase();return o?o==="cell"||o==="mobile"?"Mobile":o==="home"?"Home":o==="work"||o==="office"?"Work":"":""}function Bi(e){let o=Ke(e).trim().toLowerCase();return o?o==="cell"||o==="mobile"?"Cell":o==="home"?"Home":o==="work"||o==="office"?"Work":"":""}function Ui(e){let o=Ke(e).trim().toLowerCase();return o?o==="personal"||o==="home"?"Personal":o==="office"||o==="work"?"Office":"":""}function Vi(e){let o=Ke(e).trim().toLowerCase();return o?o==="personal"||o==="home"?"Home":o==="office"||o==="work"?"Office":"":""}function ge(e,o){let t=e[o];if(t){if(t.entryNode){t.status="deleted";return}e.splice(o,1)}}function Se(e,o,t){if(e[o]=t.trim(),e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function M(e,o){let t=e.filter(a=>a.status==="new"&&o(a)),n=e.filter(a=>a.status==="modified"&&o(a)),i=e.filter(a=>a.status==="deleted");return{create:t,update:n,remove:i}}function I(e,o,t,n){if(e[o]=t,!n(e)){e.status=e.entryNode?"deleted":"new";return}if(e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function vt(e){return $(e).replace(/\s+/g,"").toLowerCase()}function qi(e){return $(e).replace(/[^0-9()\-\s.]/g,"")}function Te(e){return $(e)}var Hi=(e,o)=>{customElements.get(e)||customElements.define(e,o)};Hi("icon-lucide-phone",Dn);Hi("icon-lucide-mail",uo);var Ao=c`<icon-lucide-phone style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-phone>`,$o=c`<icon-lucide-mail style="width: 16px; height: 16px; color: #4A5565;" aria-hidden="true"></icon-lucide-mail>`;A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
  --contact-info-dialog-contact-point-row-gap: 15px;
  --contact-info-dialog-contact-point-row-align: flex-start;
  --contact-info-dialog-contact-point-row-direction: row;
  --contact-info-dialog-contact-point-row-wrap: wrap;
  --contact-info-dialog-contact-point-field-flex: 1 1 auto;
  --contact-info-dialog-contact-point-type-width: 104px;
  --contact-info-dialog-contact-point-type-max-width: none;
  --contact-info-dialog-contact-point-actions-flex: 0 1 auto;
  --contact-info-dialog-contact-point-actions-margin-left: auto;
  --contact-info-dialog-contact-point-actions-justify: flex-start;
  --contact-info-dialog-contact-point-select-font-size: inherit;
  --contact-info-dialog-contact-point-select-line-height: inherit;
  gap: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section + .profile-edit-dialog__section {
  border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  padding-top: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__contact-section-header {
  padding: 0;
  gap: 30px;
  margin-bottom: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section fieldset {
  margin-top: 4px;
  gap: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-heading {
  margin: 0;
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--solid-ui-font-size-md, 1rem);
  font-weight: 500;
  line-height: normal;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon {
  display: inline-flex;
  width: 0.8333rem;
  height: 0.8333rem;
  flex: 0 0 0.8333rem;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon svg {
  width: 100%;
  height: 100%;
}

.profile-edit-dialog__row--contact-point {
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: 0;
  box-shadow: none;
  flex-direction: var(--contact-info-dialog-contact-point-row-direction);
  align-items: var(--contact-info-dialog-contact-point-row-align);
  flex-wrap: var(--contact-info-dialog-contact-point-row-wrap);
  gap: var(--contact-info-dialog-contact-point-row-gap);
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point {
  margin-bottom: 12px;
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point:last-child {
  margin-bottom: 15px;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  border: 0;
  outline: 0;
  box-shadow: none;
  background: transparent;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
  flex: var(--contact-info-dialog-contact-point-field-flex);
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > label.profile-edit-dialog__field {
  display: block;
  width: auto;
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  display: block;
  width: 100%;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
  flex: var(--contact-info-dialog-contact-point-actions-flex);
  margin-left: var(--contact-info-dialog-contact-point-actions-margin-left);
  justify-content: var(--contact-info-dialog-contact-point-actions-justify);
}

#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.profile__edit-form--contact-info .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
.profile__edit-form--contact-info .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  font-size: var(--contact-info-dialog-contact-point-select-font-size);
  line-height: var(--contact-info-dialog-contact-point-select-line-height);
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full {
  max-width: 100%;
  width: 100%;
  align-items: center;
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full .profile-edit-dialog__actions {
  align-self: center;
}

.profile-edit-dialog__address-title {
  margin: 0;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  line-height: 1.5;
}

/* layout = mobile */
html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
  padding: 0;
}

html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading{
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
}

/* Media and container rules are needed so that the phone and email rows
stay as one row instead of wrapping */
@media (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@container profile-pane (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@media (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}

@container profile-pane (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}
`,"text/css"));var De=[{label:"Mobile",value:"Cell"},{label:"Home",value:"Home"},{label:"Work",value:"Work"}],Me=[{label:"Personal",value:"Home"},{label:"Office",value:"Office"}];function Ye(e,o){return o.some(t=>t.value===e)?e:o[0]?.value||""}function ll(e){return e==="phone"?De:Me}function Io(e,o){return{...e,type:Ye(e.type||"",ll(o))}}function sl(e){return"value"in e}function _e(e){return sl(e)?E(e.value):[e.streetAddress,e.locality,e.region,e.postalCode,e.countryName].some(E)}function cl(e){let o=(e.emails||[]).map(i=>({value:vt(v(i.valueNode).replace(/^mailto:/i,"")),type:Ye(Vi(i.type),Me),entryNode:v(i.entryNode),status:v(i.entryNode)?"existing":"new"})).filter(i=>!!(i.value||i.entryNode||i.type)),t=(e.phones||[]).map(i=>({value:$(v(i.valueNode).replace(/^tel:/i,"")),type:Ye(Bi(i.type),De),entryNode:v(i.entryNode),status:"existing"})).filter(i=>!!i.value),n=(e.addresses||[]).map(i=>({streetAddress:Te(v(i.streetAddress)),locality:Te(v(i.locality)),region:Te(v(i.region)),postalCode:Te(v(i.postalCode)),countryName:Te(v(i.countryName)),type:v(i.type),entryNode:v(i.entryNode),status:v(i.entryNode)?"existing":"new"})).filter(i=>_e(i)||!!(i.entryNode||i.type));return{emails:o.length?o:[{value:"",type:Me[0].value,entryNode:"",status:"new"}],phones:t.length?t:[{value:"",type:De[0].value,entryNode:"",status:"new"}],addresses:n.length?n:[{streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"}]}}function dl({phones:e,index:o,displayIndex:t,onDelete:n}){let i=e[o],a=`Phone Number ${t+1}`,r=`Phone Type ${t+1}`,l=`phone-value-${o}`,s=We(i?.value||""),d=s.dialCode,f=m=>{let w=m.target,x=qi(w.value);e[o]&&I(e[o],"value",Ri(d,x),_e)},g=m=>{let w=m;if(!w.detail.option)return;let x=String(w.detail.option.value);e[o]&&Se(e[o],"type",x)},u=m=>{m.preventDefault(),n()};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--contact-point">
      <div class="profile-edit-dialog__field">
        <label aria-label=${a} class="label">
          <input
            class="input"
            type="tel"
            name=${l}
            .value=${s.localNumber}
            required
            data-contact-field="value"
            data-entry-node=${i?.entryNode||""}
            data-row-status=${i?.status||"n/a"}
            placeholder=${a}
            autocomplete="tel-national"
            inputmode="tel"
            @input=${f}
          />
        </label>
      </div>
      <label aria-label=${r} class="label profile-edit-dialog__field-type profile-edit-dialog__phone-type-row">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          aria-label=${r}
          .value=${Ye(i?.type||"",De)}
          @change=${g}
        >
          ${De.map(m=>c`<solid-ui-combobox-option value=${m.value}>${m.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <div class="profile-edit-dialog__actions">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete phone number ${t+1}`}
          title=${fe}
          @click=${u}
        >
          <span slot="icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function pl(e,o){let t=i=>{i.preventDefault(),e.unshift({value:"",type:De[0].value,entryNode:"",status:"new"}),o({focusSelector:'[name="phone-value-0"]'})},n=e.map((i,a)=>({phone:i,index:a})).filter(({phone:i})=>i.status!=="deleted");return c`
    <section
      aria-labelledby="phone-numbers-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="phone-numbers-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${Ao}</span>
          Phone Numbers
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another phone number"
          @click=${t}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${V}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Phone number entries</legend>
        ${n.map(({index:i},a)=>dl({phones:e,index:i,displayIndex:a,onDelete:()=>{ge(e,i),o()}}))}
      </fieldset>
    </section>
  `}function fl({emails:e,index:o,displayIndex:t,onDelete:n}){let i=e[o],a=`Email Address ${t+1}`,r=`Email Type ${t+1}`,l=`email-value-${o}`,s=g=>{let u=g.target,m=vt(u.value);e[o]&&I(e[o],"value",m,_e)},d=g=>{let u=g;if(!u.detail.option)return;let m=String(u.detail.option.value);e[o]&&Se(e[o],"type",m)},f=g=>{g.preventDefault(),n()};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--contact-point">
      <label aria-label=${a} class="label profile-edit-dialog__field">
        <input
          class="input"
          type="email"
          name=${l}
          .value=${i?.value||""}
          required
          data-contact-field="value"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Email Address"
          autocomplete="email"
          inputmode="email"
          @input=${s}
        />
      </label>
      <label aria-label=${r} class="label profile-edit-dialog__field-type emailTypeRow">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          aria-label=${r}
          .value=${Ye(i?.type||"",Me)}
          @change=${d}
        >
          ${Me.map(g=>c`<solid-ui-combobox-option value=${g.value}>${g.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <div class="profile-edit-dialog__actions">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete email address ${t+1}`}
          title=${fe}
          @click=${f}
        >
          <span slot="icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function ul(e,o){let t=i=>{i.preventDefault(),e.unshift({value:"",type:Me[0].value,entryNode:"",status:"new"}),o({focusSelector:'[name="email-value-0"]'})},n=e.map((i,a)=>({email:i,index:a})).filter(({email:i})=>i.status!=="deleted");return c`
    <section
      aria-labelledby="email-addresses-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="email-addresses-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${$o}</span>
          Email Addresses
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another email address"
          @click=${t}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${V}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Email address entries</legend>
        ${n.map(({index:i},a)=>fl({emails:e,index:i,displayIndex:a,onDelete:()=>{ge(e,i),o()}}))}
      </fieldset>
    </section>
  `}function ml({addresses:e,index:o,displayIndex:t,onDelete:n}){let i=e[o],a=`Address ${t+1}`,r=`Address Type ${t+1}`,l=`address-street-${o}`,s=`address-locality-${o}`,d=`address-region-${o}`,f=`address-postal-${o}`,g=`address-country-${o}`,u=`address-type-${o}`,m=`address-type-select-${o}`,w=b=>h=>{let _=h.target,y=Te(_.value);e[o]&&I(e[o],b,y,_e)},x=b=>{let _=b.target.value;e[o]&&Se(e[o],"type",_)},S=b=>{b.preventDefault(),n()};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--address-header profile-edit-dialog__row--full">
      <p class="profile-edit-dialog__address-title">${a}</p>
      <label aria-label=${r} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--wide hidden">
        Address Type
        <select name=${u} id=${m} @change=${x} .value=${i?.type||""}>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete address ${t+1}`}
          title=${fe}
          @click=${S}
        >
          <span slot="icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--full">
      <label aria-label=${`${a} Street`} class="label profile-edit-dialog__field profile-edit-dialog__field--full">
        Street Address
        <input
          class="input"
          type="text"
          name=${l}
          .value=${i?.streetAddress||""}
          required
          data-contact-field="streetAddress"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Street Address"
          autocomplete="street-address"
          inputmode="text"
          @change=${w("streetAddress")}
        />
      </label>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--full profile-edit-dialog__row--equal">
      <label aria-label=${`${a} Locality`} class="label profile-edit-dialog__field">
        Locality
        <input
          class="input"
          type="text"
          name=${s}
          .value=${i?.locality||""}
          data-contact-field="locality"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="City / Locality"
          autocomplete="address-level2"
          inputmode="text"
          @change=${w("locality")}
        />
      </label>
      <label aria-label=${`${a} Postal Code`} class="label profile-edit-dialog__field">
        Postal Code
        <input
          class="input"
          type="text"
          name=${f}
          .value=${i?.postalCode||""}
          data-contact-field="postalCode"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Postal Code"
          autocomplete="postal-code"
          inputmode="text"
          @change=${w("postalCode")}
        />
      </label>
    </div>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--full profile-edit-dialog__row--equal">
      <label aria-label=${`${a} Region`} class="label profile-edit-dialog__field">
        Region
        <input
          class="input"
          type="text"
          name=${d}
          .value=${i?.region||""}
          data-contact-field="region"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="State / Region"
          autocomplete="address-level1"
          inputmode="text"
          @change=${w("region")}
        />
      </label>
      <label aria-label=${`${a} Country`} class="label profile-edit-dialog__field">
        Country
        <input
          class="input"
          type="text"
          name=${g}
          .value=${i?.countryName||""}
          data-contact-field="countryName"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Country"
          autocomplete="country-name"
          inputmode="text"
          @change=${w("countryName")}
        />
      </label>
    </div>
  `}function gl(e,o){let t=i=>{i.preventDefault(),e.unshift({streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"}),o({focusSelector:'[name="address-street-0"]'})},n=e.map((i,a)=>({address:i,index:a})).filter(({address:i})=>i.status!=="deleted");return c`
    <section
      aria-labelledby="address-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="address-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${mo}</span>
          Addresses
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another address"
          @click=${t}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${V}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Address entries</legend>
        ${n.map(({index:i},a)=>ml({addresses:e,index:i,displayIndex:a,onDelete:()=>{ge(e,i),o()}}))}
      </fieldset>
    </section>
  `}function _l(e,o){let t=e.querySelector(o);if(!t||typeof t.focus!="function")return;let n=e.ownerDocument.defaultView;if(!!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){t.scrollIntoView({block:"nearest",behavior:"auto"});return}t.scrollIntoView({block:"nearest",behavior:"auto"}),t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&t.select()}function Gi(e,o,t,n={}){let i=(a={})=>Gi(e,o,t,a);U(c`
    ${pl(o.phones,i)}
    ${ul(o.emails,i)}
    ${gl(o.addresses,i)}
    ${t!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e),n.focusSelector&&_l(e,n.focusSelector)}function hl(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form"),t.classList.add("profile__edit-form--contact-info");let n=cl(e);return Gi(t,n,o),{form:t,formState:n}}function bl(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function yl(e){return/^\d+$/.test(e)}function wl(e){let o=e.phones.filter(n=>n.status!=="deleted");for(let[n,i]of o.entries()){if(!_e(i))continue;let{localNumber:a}=We(i.value||"");if(!yl(a))return`Phone Number ${n+1} should contain only numbers.`}let t=e.emails.filter(n=>n.status!=="deleted");for(let[n,i]of t.entries())if(_e(i)&&!bl(i.value||""))return`Email address ${n+1} must be a valid email address.`;return null}async function Ct(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=hl(n,i);await se({title:ln,dom:r,form:l,headerAction:{type:"close"},submitLabel:de,cancelLabel:pe,shouldCloseWithoutSave:()=>{let f=M(s.phones,_e),g=M(s.emails,_e),u=M(s.addresses,_e);return f.create.length===0&&f.update.length===0&&f.remove.length===0&&g.create.length===0&&g.update.length===0&&g.remove.length===0&&u.create.length===0&&u.update.length===0&&u.remove.length===0},validate:()=>i!=="owner"?O:wl(s),onSave:async()=>{let f=M(s.phones,_e),g=M(s.emails,_e),u={phoneOps:{create:f.create.map(m=>Io(m,"phone")),update:f.update.map(m=>Io(m,"phone")),remove:f.remove},emailOps:{create:g.create.map(m=>Io(m,"email")),update:g.update.map(m=>Io(m,"email")),remove:g.remove},addressOps:M(s.addresses,_e)};await zi(o,t,u)},formatSaveError:f=>f instanceof Error?f.message:io})&&a&&await a()}var Wi=!1,xl=2;function vl(e){let o=e.style.display,t=e.style.overflow,n=e.style.paddingRight,i=e.style.getPropertyValue("-webkit-line-clamp"),a=e.style.getPropertyValue("-webkit-box-orient");e.style.display="block",e.style.overflow="visible",e.style.paddingRight="0",e.style.setProperty("-webkit-line-clamp","unset"),e.style.setProperty("-webkit-box-orient","initial");let r=e.getBoundingClientRect().height;return e.style.display=o,e.style.overflow=t,e.style.paddingRight=n,i?e.style.setProperty("-webkit-line-clamp",i):e.style.removeProperty("-webkit-line-clamp"),a?e.style.setProperty("-webkit-box-orient",a):e.style.removeProperty("-webkit-box-orient"),r}function Cl(e){let o=Number.parseFloat(e.lineHeight);if(Number.isFinite(o))return o;let t=Number.parseFloat(e.fontSize);return Number.isFinite(t)?t*1.5:24}function kl(e,o){let t=window.getComputedStyle(e),i=Cl(t)*o;return vl(e)>i+1}function Ki(e){return e?typeof e=="string"?e:e.value||"":""}function Sl(e=document){[{wrap:".resume-card__description-wrap",text:".resume-card__description-text",toggle:".resume-card__description-toggle",expanded:"resume-card__description-text--expanded",overflowing:"resume-card__description-text--overflowing"},{wrap:".education-card__description-wrap",text:".education-card__description-text",toggle:".education-card__description-toggle",expanded:"education-card__description-text--expanded",overflowing:"education-card__description-text--overflowing"},{wrap:".bio-card__description-wrap",text:".bio-card__description-text",toggle:".bio-card__description-toggle",expanded:"bio-card__description-text--expanded",overflowing:"bio-card__description-text--overflowing"}].forEach(({wrap:t,text:n,toggle:i,expanded:a,overflowing:r})=>{e.querySelectorAll(t).forEach(s=>{if(!(s instanceof HTMLElement))return;let d=s.querySelector(n),f=s.querySelector(i);if(!d||!f)return;if(d.classList.remove(r),d.clientHeight===0||d.clientWidth===0){f.hidden=!0;return}if(d.classList.contains(a)){f.hidden=!1;return}let u=kl(d,xl);if(d.classList.toggle(r,u),f.hidden=!u,!u){f.setAttribute("aria-expanded","false"),f.textContent="...more";return}})})}function Ne(){typeof window>"u"||(window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>Sl(window.document))}),Wi||(window.addEventListener("resize",()=>Ne()),Wi=!0))}function To(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation?.();let o=e.currentTarget;if(!o)return;let t=o.getAttribute("aria-controls");if(!t)return;let n=document.getElementById(t);if(!n)return;let i=n.matches(".resume-card__description-text")?"resume-card__description-text--expanded":n.matches(".education-card__description-text")?"education-card__description-text--expanded":n.matches(".bio-card__description-text")?"bio-card__description-text--expanded":"isExpanded",a=n.classList.toggle(i);o.setAttribute("aria-expanded",a?"true":"false"),o.textContent=a?"...less":"...more",a||Ne()}function kt(e){let o=Ki(e);if(!o)return"";let t=o.slice(0,4),n=o.slice(5,7),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=Number(n)-1;return!t||a<0||a>11?o:`${i[a]}, ${t}`}function St(e){let o=Ki(e);if(o)return o.slice(0,7)}function H(e){let o=e.currentTarget,t=o?.closest(".profile-section-collapsible"),n=t?.querySelector(".profile-section-collapsible__content");if(!o||!t||!n)return;let i=t.getAttribute("data-expanded")!=="true";t.setAttribute("data-expanded",String(i)),o.setAttribute("aria-expanded",String(i)),n.setAttribute("aria-hidden",String(!i)),n.hidden=!i,i&&typeof window<"u"&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{Ne()})})}function G({layout:e="desktop",className:o,ariaLabel:t,variant:n={desktop:"tertiary",mobile:"ghost"},onClick:i,desktopIcon:a=z,desktopLabel:r,mobileIcon:l=z}){return c`
    <solid-ui-button
      variant=${e==="desktop"?n.desktop:n.mobile}
      class=${o}
      aria-label=${t}
      @click=${i}
    >
      ${e==="desktop"?a:z}
      ${e==="desktop"&&r?c`<span class="profile-section-collapsible__action-label">${r}</span>`:z}
      ${e==="mobile"?l:z}
    </solid-ui-button>
  `}A(L(`.profile__section[data-profile-section='contact-info'],
.profile__section--empty[data-profile-section='contact-info'] {
  --contact-info-icon-padding-inline: 9.2px;
  --contact-info-icon-size: var(--icon-xxs, 1rem);
  --contact-info-contact-point-value-size: var(--font-size-sm, 0.875rem);
  --contact-info-contact-point-type-size: var(--font-size-xxs, 0.75rem);
}

/* Contact rows */
.contact-info__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  padding: 0 var(--contact-info-icon-padding-inline);
  flex-shrink: 0;
}

.contact-info__item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-inline-start: 0;
}

.contact-info__item-body {
  display: flex;
  flex-direction: column;
}

.contact-info__icon {
  width: var(--contact-info-icon-size, var(--icon-xxs, 1rem));
  height: var(--contact-info-icon-size, var(--icon-xxs, 1rem));
  flex-shrink: 0;
  stroke-width: 1.333px;
  stroke: var(--color-icon-muted, var(--slate-400, #90A1B9));
}

.contact-info__contact-point-value,
.contact-info__address {
  color: var(--color-text-strong-secondary, var(--slate-800, #1D293D));
  font-size: var(--contact-info-contact-point-value-size, var(--font-size-sm, 0.875rem));
  font-weight: var(--font-weight-bold, 600);
}

.contact-info__contact-point-value {
  white-space: normal !important;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.contact-info__contact-point-type {
  color: var(--color-text-detail, var(--slate-500, #62748E));
  font-size: var(--contact-info-contact-point-type-size, var(--font-size-xxs, 0.75rem));
  font-weight: var(--font-weight-md, 500);
}

/* Lists */
.contact-info__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0 0 10px 0;
  gap: 10px;
}

.contact-info__list:last-of-type {
  padding-bottom: 0;
}

.contact-info__list + .contact-info__list {
  margin-top: 10px;
}

/* Empty state */
.contact-info__empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.contact-info__empty-icon svg {
  width: var(--icon-md, 2.5rem);
  height: var(--icon-md, 2.5rem);
  display: block;
}

.contact-info__empty-icon svg path {
  stroke-width: 0.25rem;
  stroke: var(--color-border, #E5E7EB);
}

.contact-info__empty-message {
  text-align: center;
  font-size: var(--font-size-xs, 0.813rem);
  font-weight: var(--font-weight-normal, 400);
  line-height: 1.4;
}

.contact-info__empty-icon-wrapper {
  width: 3rem;
  flex: 1 0 0;
}

@media (max-width: 576px) {
  .profile__section[data-profile-section='contact-info'],
  .profile__section--empty[data-profile-section='contact-info'] {
    --contact-info-icon-padding-inline: 0;
    --contact-info-icon-size: 0.8295rem;
  }
}

@container profile-pane (max-width: 576px) {
  .profile__section[data-profile-section='contact-info'],
  .profile__section--empty[data-profile-section='contact-info'] {
    --contact-info-icon-padding-inline: 0;
    --contact-info-icon-size: 0.8295rem;
  }
}
`,"text/css"));function Le(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let o=e.value;return typeof o=="string"?o:""}return""}function Nt(e,o){if(!e)return"";if(o==="email")return e.replace(/^mailto:/i,"");let t=e.replace(/^tel:/i,""),{localNumber:n}=We(t);return n||t}function Yi(e,o,t){if(!o)return"";let n=Le(o.valueNode||o.entryNode).trim();if(t==="email"?/^mailto:/i.test(n)||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n):/^tel:/i.test(n)||/^[+()\-\s\d]{5,}$/.test(n))return Nt(n,t);let a=o.entryNode||o.valueNode;if(a){let r=e.any(a,p.vcard("value")),l=Le(r).trim();if(l)return Nt(l,t)}return Nt(n,t)}function Nl(e,o){if(!e)return c``;let t=Yi(o,e,"phone"),n=ji(e.type);return c`<li class="contact-info__item" role="listitem">
        <div class="contact-info__icon-wrapper">
          <span class="contact-info__icon" aria-hidden="true">${Ao}</span>
        </div>
        <div class="contact-info__item-body">
          <span class="contact-info__contact-point-value">${t}</span>
          ${n?c`<span class="contact-info__contact-point-type"> ${n}</span>`:c``}
        </div>
      </li>`}function Zi(e,o){return!e||!e.length||!e[0]?c``:c`${Nl(e[0],o)}${e.length>1?Zi(e.slice(1),o):c``}`}function Al(e,o){if(!e)return c``;let t=Yi(o,e,"email"),n=Ui(e.type);return c`<li class="contact-info__item" role="listitem">
        <div class="contact-info__icon-wrapper">
          <span class="contact-info__icon" aria-hidden="true">${$o}</span>
        </div>
        <div class="contact-info__item-body">
          <span class="contact-info__contact-point-value">${t}</span>
          ${n?c`<span class="contact-info__contact-point-type">${n}</span>`:c``}
        </div>
      </li>`}function Ji(e,o){return!e||!e.length||!e[0]?c``:c`${Al(e[0],o)}${e.length>1?Ji(e.slice(1),o):c``}`}function $l(e){if(!e)return c``;let o=Le(e.streetAddress||e.fullAddress).trim(),t=Le(e.locality).trim(),n=Le(e.region).trim(),i=Le(e.postalCode).trim(),a=Le(e.countryName).trim(),l=[[t,n].filter(Boolean).join(", "),i].filter(Boolean).join(" ");return c`
        <li class="contact-info__item" role="listitem">
          <div class="contact-info__icon-wrapper">
            <span class="contact-info__icon" aria-hidden="true">${mo}</span>
          </div>
          <span class="contact-info__address">
            ${o?c`${o}<br />`:c``}
            ${l?c`${l}<br />`:c``}
            ${a}
          </span>
        </li>`}function Qi(e){return!e||!e.length||!e[0]?c``:c`${$l(e[0])}${e.length>1?Qi(e.slice(1)):c``}`}function Il(e,o,t,n,i,a){let r=t?.emails.length>0||t?.phones.length>0||t?.addresses.length>0;return c`
    <section
      aria-labelledby="contact-details-heading"
      data-profile-section="contact-info"
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="contact-details-heading" tabindex="-1">${kn}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?c`
              ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit contact information",onClick:s=>Ct(s,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
            `:z}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle contact information section"
            aria-controls="contact-details-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="contact-details-panel" class="profile-section-collapsible__content">
        ${t.phones.length>0?c`
              <ul class="contact-info__list" role="list" aria-label="Phone numbers">
                ${Zi(t.phones,e)}
              </ul>
            `:c``}
        ${t.emails.length>0?c`
              <ul class="contact-info__list" role="list" aria-label="Email addresses">
                ${Ji(t.emails,e)}
              </ul>
            `:c``}
        ${t.addresses.length>0?c`
              <ul class="contact-info__list" role="list" aria-label="Postal addresses">
                ${Qi(t.addresses)}
              </ul>
            `:c``}
        ${r?z:c`<p>No contact details added yet.</p>`}
      </div>
    </section>
  `}function Tl(){return c`
      <div class="profile__empty-state-content" role="group" aria-label="Empty contact information section">
        <div class="contact-info__empty-icon-wrapper">
          <span class="contact-info__empty-icon">${Gn}</span>
        </div>
      </div>
  `}function Ll(e,o,t,n,i,a){return c`
    <section
      aria-labelledby="contact-details-heading"
      data-profile-section="contact-info"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="contact-details-heading" tabindex="-1">${Sn}</h3>
        <div class="profile-section-collapsible__actions">
         ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add contact information",onClick:r=>Ct(r,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle contact information section"
            aria-controls="contact-details-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="contact-details-panel" class="profile-section-collapsible__content">
        ${Tl()}
      </div>
    </section>
  `}function At(e,o,t,n,i,a){let r=i||"desktop",l={emails:t?.emails||[],phones:t?.phones||[],addresses:t?.addresses||[]},d=!(l.emails.length>0||l.phones.length>0||l.addresses.length>0)&&n==="owner";return c`
    ${d?Ll(e,o,l,n,r,a):Il(e,o,l,n,r,a)}
  `}var Ze="https://www.w3.org/ns/iana/language-code/";function El(e){Ce(e,"l",Ze),Ce(e.updater?.store,"l",Ze)}function W(e){return(e||"").trim()}function Fl(e){let o=W(e).toLowerCase();return o?o.startsWith(Ze)?o.slice(Ze.length):o:""}function Pl(e){return(e||[]).filter(o=>o.status!=="deleted").filter(o=>!!(W(o.publicId)||W(o.name)||W(o.entryNode))).map(o=>({...o,name:W(o.name),publicId:W(o.publicId),proficiency:W(o.proficiency),entryNode:W(o.entryNode)}))}function Lo(e){return`${e.termType}:${e.value}`}function zl(e){return!!(e&&(e.termType==="NamedNode"||e.termType==="BlankNode"))}function Dl(e,o,t,n,i){let a=n.map(s=>({name:W(s.name),publicId:Fl(s.publicId),entryNode:W(s.entryNode)})).filter(s=>!!s.publicId);if(a.length===0)return{statements:[],entryNodes:[]};let r=a.map(s=>{let d=s.entryNode?Y(i,s.entryNode):null;return zl(d)?d:B(t)}),l=[];return l.push(C(o,p.schema("knowsLanguage"),new Xe(r),t)),r.forEach((s,d)=>{let f=T(`${Ze}${a[d].publicId}`);l.push(C(s,p.solid("publicId"),f,t));let g=e.holds(f,p.schema("name"),P(a[d].name,"en"),t);a[d].name&&!g&&l.push(C(f,p.schema("name"),P(a[d].name,"en"),t))}),{statements:l,entryNodes:r}}function Ml(e,o,t){let n=new Set,i=[],a=o;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,p.rdf("rest"),null,t);if(!l||l.termType==="NamedNode"&&l.value===p.rdf("nil").value)break;a=l.termType==="NamedNode"||l.termType==="BlankNode"?l:null}return i}function Rl(e,o){let t=new Map;e.forEach(i=>{t.set(i.entryNode,i)}),o.remove.forEach(i=>{i.entryNode&&t.delete(i.entryNode)}),o.update.forEach(i=>{i.entryNode&&t.has(i.entryNode)&&t.set(i.entryNode,i)}),o.create.forEach(i=>{W(i.publicId)&&t.set(`new:${i.name}:${Math.random()}`,{...i,publicId:W(i.publicId),proficiency:W(i.proficiency)})});let n=new Map;return Array.from(t.values()).forEach(i=>{let a=W(i.publicId);a&&(n.has(a)||n.set(a,{...i,publicId:a,proficiency:W(i.proficiency)}))}),Array.from(n.values())}async function Ol(e,o,t,n){El(e);let i=o.doc(),a=wo(o,e).map(y=>({name:W(y.name),publicId:W(y.publicId),proficiency:W(y.proficiency),entryNode:y.entryNode.value,status:"existing"})),r=n&&n.length?Pl(n):Rl(a,t),l=e.each(o,p.schema("knowsLanguage"),null,i),s=l.filter(y=>y.termType==="BlankNode"||y.termType==="NamedNode"),f=!!(e.updater?.serialize&&e.fetcher?.webOperation),g=Array.from(new Map(s.flatMap(y=>Ml(e,y,i)).map(y=>[`${y.termType}:${y.value}`,y])).values()),u=Array.from(new Set(l.flatMap(y=>ue(e,y)).filter(y=>y.termType==="NamedNode"||y.termType==="BlankNode").map(y=>`${y.termType}:${y.value}`))).map(y=>{let[Z,...k]=y.split(":"),J=k.join(":");return Z==="BlankNode"?e.bnode(J):e.sym(J)}),{statements:m,entryNodes:w}=Dl(e,o,i,r,u),x=new Set(w.map(y=>Lo(y))),S=u.filter(y=>x.has(Lo(y))),b=u.filter(y=>!x.has(Lo(y))),h=Array.from(new Map(b.map(y=>e.any(y,p.solid("publicId"),null,i)).filter(y=>!!(y&&y.termType==="NamedNode")).map(y=>[Lo(y),y])).values()),_=e.statementsMatching(o,p.schema("knowsLanguage"),null,i);g.forEach(y=>{_.push(...e.statementsMatching(y,null,null,i))}),b.forEach(y=>{_.push(...e.statementsMatching(y,null,null,i))}),S.forEach(y=>{_.push(...e.statementsMatching(y,p.solid("publicId"),null,i))}),h.forEach(y=>{_.push(...e.statementsMatching(y,p.schema("name"),null,i))}),await ee(e,i,_,m,{unsupportedMessage:"Language updates are not supported by this store updater.",failureMessage:"Failed to save languages",forcePut:f,useDavFallback:!f,usePutFallback:!0})}async function Xi(e,o,t,n){try{await Ol(e,o,t,n)}catch(i){let a=i instanceof Error?i:new Error(String(i));throw ae(hn,a),new Error(ao,{cause:a})}}A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
  --contact-info-dialog-contact-point-row-gap: 15px;
  --contact-info-dialog-contact-point-row-align: flex-start;
  --contact-info-dialog-contact-point-row-direction: row;
  --contact-info-dialog-contact-point-row-wrap: wrap;
  --contact-info-dialog-contact-point-field-flex: 1 1 auto;
  --contact-info-dialog-contact-point-type-width: 104px;
  --contact-info-dialog-contact-point-type-max-width: none;
  --contact-info-dialog-contact-point-actions-flex: 0 1 auto;
  --contact-info-dialog-contact-point-actions-margin-left: auto;
  --contact-info-dialog-contact-point-actions-justify: flex-start;
  --contact-info-dialog-contact-point-select-font-size: inherit;
  --contact-info-dialog-contact-point-select-line-height: inherit;
  gap: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section + .profile-edit-dialog__section {
  border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  padding-top: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__contact-section-header {
  padding: 0;
  gap: 30px;
  margin-bottom: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section fieldset {
  margin-top: 4px;
  gap: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-heading {
  margin: 0;
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--solid-ui-font-size-md, 1rem);
  font-weight: 500;
  line-height: normal;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon {
  display: inline-flex;
  width: 0.8333rem;
  height: 0.8333rem;
  flex: 0 0 0.8333rem;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon svg {
  width: 100%;
  height: 100%;
}

.profile-edit-dialog__row--contact-point {
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: 0;
  box-shadow: none;
  flex-direction: var(--contact-info-dialog-contact-point-row-direction);
  align-items: var(--contact-info-dialog-contact-point-row-align);
  flex-wrap: var(--contact-info-dialog-contact-point-row-wrap);
  gap: var(--contact-info-dialog-contact-point-row-gap);
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point {
  margin-bottom: 12px;
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point:last-child {
  margin-bottom: 15px;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  border: 0;
  outline: 0;
  box-shadow: none;
  background: transparent;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
  flex: var(--contact-info-dialog-contact-point-field-flex);
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > label.profile-edit-dialog__field {
  display: block;
  width: auto;
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  display: block;
  width: 100%;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
  flex: var(--contact-info-dialog-contact-point-actions-flex);
  margin-left: var(--contact-info-dialog-contact-point-actions-margin-left);
  justify-content: var(--contact-info-dialog-contact-point-actions-justify);
}

#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.profile__edit-form--contact-info .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
.profile__edit-form--contact-info .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  font-size: var(--contact-info-dialog-contact-point-select-font-size);
  line-height: var(--contact-info-dialog-contact-point-select-line-height);
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full {
  max-width: 100%;
  width: 100%;
  align-items: center;
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full .profile-edit-dialog__actions {
  align-self: center;
}

.profile-edit-dialog__address-title {
  margin: 0;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  line-height: 1.5;
}

/* layout = mobile */
html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
  padding: 0;
}

html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading{
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
}

/* Media and container rules are needed so that the phone and email rows
stay as one row instead of wrapping */
@media (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@container profile-pane (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@media (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}

@container profile-pane (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}
`,"text/css"));var jl="https://query.wikidata.org/sparql",Bl="https://www.w3.org/ns/iana/language-code/",Ul=async e=>{let o=Re(e);if(o.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];let t=new URLSearchParams({query:ql(o),format:"json"});try{let n=await fetch(`${jl}?${t.toString()}`,{headers:{Accept:"application/sparql-results+json, application/json"}});if(!n.ok)return[];let i=await n.json(),a=Array.isArray(i?.results?.bindings)?i.results.bindings:[],r=new Set;return a.map(l=>{let s=ta(ea(l,"subject"));return{code:s,value:Hl(s),label:Re(ea(l,"name")||s)}}).filter(l=>{if(!l.label||!l.value||l.code.length!==2)return!1;let s=l.value.toLowerCase();return r.has(s)?!1:(r.add(s),!0)})}catch{return[]}};function Re(e){return $(e)}function $t(e){return[e.name,e.publicId,e.proficiency].some(E)}function ta(e){return(e||"").trim().toLowerCase()}function Vl(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ql(e){return`SELECT ?item ?subject ?name WHERE {
    ?item wdt:P305 ?subject .
    OPTIONAL {
      ?item rdfs:label ?name .
      FILTER(langMatches(lang(?name), "en"))
    }
    FILTER regex(?name, "${Vl(e)}", "i")
    FILTER regex(?subject, "^..$", "i")
  } LIMIT 12`}function Hl(e){let o=(e||"").trim();return o?o.startsWith("http://")||o.startsWith("https://")?o:`${Bl}${ta(o)}`:""}function ea(e,o){let t=e?.[o]?.value;return typeof t=="string"?t:""}function Gl(e,o){e.querySelectorAll("solid-ui-combobox[data-language-row-index]").forEach(n=>{let i=Number(n.dataset.languageRowIndex);if(Number.isNaN(i))return;let a=o[i];n.optionsFallback=a?.publicId&&a?.name?[{label:a.name,value:a.publicId}]:[],n.asyncOptionsProvider=Ul,n.value=a?.publicId||""})}function Wl(e){let o=(e||[]).map(t=>({name:Re(v(t.name)),publicId:Re(v(t.publicId)),proficiency:Re(v(t.proficiency)),entryNode:v(t.entryNode),status:v(t.entryNode)?"existing":"new"})).filter(t=>!!(t.name||t.entryNode||t.proficiency||t.publicId));return{languages:o.length?o:[{name:"",publicId:"",proficiency:"",entryNode:"",status:"new"}],initialExistingOrder:[]}}function Kl(e,o){let t=e.filter(n=>n.status!=="deleted"&&!!(n.entryNode||"").trim()).map(n=>(n.entryNode||"").trim());if(t.length!==o.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==o[n])return!0;return!1}function Yl(e){for(let o=0;o<e.length;o++){let t=e[o];if(!(!t||t.status==="deleted")&&E(t.name)&&!E(t.publicId))return`Language ${o+1}: please choose a language from the suggestions list.`}return null}function Zl(e){return e.some(o=>!o||o.status==="deleted"||!E(o.name)?!1:!E(o.publicId))}function It(e){let o=ve(document);o&&(o.disabled=Zl(e))}function na(e,o){let t=e.querySelector(o);if(!t||typeof t.focus!="function")return;typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"start",behavior:"auto"});let n=t.tagName==="SOLID-UI-COMBOBOX"?t:null,a=(n?n.shadowRoot?.querySelector("input"):null)||t;a.focus(),a instanceof HTMLInputElement&&(a.setSelectionRange(0,0),a.scrollLeft=0,requestAnimationFrame(()=>{a.scrollLeft=0})),n?._closePopup&&requestAnimationFrame(()=>{n._closePopup?.()})}function Jl({rows:e,index:o,displayIndex:t,onDelete:n,onDragStart:i,onDragEnter:a,onDragOver:r,onDrop:l,onDragEnd:s,onPointerDown:d,onPointerMove:f,onPointerUp:g,onPointerCancel:u,isDropTarget:m}){let w=e[o],x=`Language ${t+1}`,S=`Language Proficiency ${t+1}`,b=`proficiency-${o}`,h=`proficiency-${o}`,_=k=>J=>{!e[o]||!J.detail.option||(I(e[o],k,Re(J.detail.option.label),$t),e[o].publicId=String(J.detail.option.value),It(e))},y=k=>{let he=k.target.value;e[o]&&(Se(e[o],"proficiency",he),It(e))},Z=k=>{k.preventDefault(),n()};return c`
    <div
      class="profile-edit-dialog__row profile-edit-dialog__row--language ${m?"profile-edit-dialog__row--drop-target":""}"
      data-language-reorder-index=${String(o)}
      @dragenter=${()=>a(o)}
      @dragover=${k=>r(k,o)}
      @drop=${k=>l(k,o)}
    >
      <solid-ui-button
        class="profile-edit-dialog__drag-handle"
        variant="ghost"
        aria-label=${`Reorder language ${t+1}`}
        title="Drag to reorder"
        draggable="true"
        @dragstart=${k=>i(k,o)}
        @dragend=${()=>s()}
        @pointerdown=${k=>d(k,o)}
        @pointermove=${k=>f(k)}
        @pointerup=${k=>g(k)}
        @pointercancel=${k=>u(k)}
      >
        <span slot="icon" aria-hidden="true">${go}</span>
      </solid-ui-button>
      <label aria-label=${`${x} Language`} class="label profile-edit-dialog__field profile-edit-dialog__field--language-name">
        <solid-ui-combobox
          select-only
          aria-label=${`${x} Language`}
          data-language-row-index=${String(o)}
          placeholder="Language"
          @change=${_("name")}
        ></solid-ui-combobox>
        <small class="profile-edit-dialog__input-help-text">Type to search and select one language suggestion.</small>
      </label>
      <label aria-label=${S} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--language-proficiency" hidden>
        <select name=${b} id=${h} @change=${y} .value=${w?.proficiency||""}>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Fluent">Fluent</option>
        </select>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge profile-edit-dialog__actions--language">
        <solid-ui-button
          variant="ghost"
          class="profile-edit-dialog__delete-button"
          aria-label=${`Delete language ${t+1}`}
          title=${fe}
          @click=${Z}
        >
          <span slot="icon" class="profile-edit-dialog__delete-icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function Ql(e,o){let t=null,n=null,i=null,a=(b,h)=>{if(b===h)return;let _=e[b];_&&(e.splice(b,1),e.splice(h,0,_))},r=(b,h)=>{t=h,n=h,b.dataTransfer&&(b.dataTransfer.effectAllowed="move",b.dataTransfer.setData("text/plain",String(h)))},l=b=>{t!==null&&(n=b)},s=(b,h)=>{b.preventDefault(),t!==null&&(n=h),b.dataTransfer&&(b.dataTransfer.dropEffect="move")},d=(b,h)=>{b.preventDefault();let _=b.dataTransfer?.getData("text/plain"),y=t??(_?Number(_):null);y===null||Number.isNaN(y)||(a(y,h),t=null,n=null,o())},f=()=>{t=null,n=null},g=b=>{let _=(b.currentTarget?.ownerDocument||document).elementFromPoint(b.clientX,b.clientY)?.closest("[data-language-reorder-index]");if(!_)return;let y=Number(_.dataset.languageReorderIndex);Number.isNaN(y)||(n=y)},u=(b,h)=>{b.pointerType==="touch"&&(b.preventDefault(),t=h,n=h,i=b.pointerId,b.currentTarget?.setPointerCapture?.(b.pointerId))},m=b=>{b.pointerType!=="touch"||i!==b.pointerId||t===null||(b.preventDefault(),g(b))},w=b=>{if(b.pointerType!=="touch"||i!==b.pointerId)return;b.preventDefault(),g(b);let h=t,_=n;b.currentTarget?.releasePointerCapture?.(b.pointerId),i=null,t=null,n=null,!(h===null||_===null||h===_)&&(a(h,_),o())},x=b=>{b.pointerType!=="touch"||i!==b.pointerId||(b.currentTarget?.releasePointerCapture?.(b.pointerId),i=null,t=null,n=null)},S=e.map((b,h)=>({row:b,index:h})).filter(({row:b})=>b.status!=="deleted");return c`
    <section class="profile-edit-dialog__section" aria-label="Languages">
      <fieldset>
        <legend class="sr-only">Language entries</legend>
        ${S.map(({index:b},h)=>Jl({rows:e,index:b,displayIndex:h,onDragStart:r,onDragEnter:l,onDragOver:s,onDrop:d,onDragEnd:f,onPointerDown:u,onPointerMove:m,onPointerUp:w,onPointerCancel:x,isDropTarget:n===b,onDelete:()=>{ge(e,b),o()}}))}
      </fieldset>
    </section>
  `}function Tt(e,o,t,n={}){let i=(a={})=>Tt(e,o,t,a);U(c`
    ${Ql(o.languages,i)}
    ${t!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e),Gl(e,o.languages),It(o.languages),n.focusSelector&&na(e,n.focusSelector)}function Xl(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form");let n=Wl(e);return n.initialExistingOrder=n.languages.filter(a=>!!(a.entryNode||"").trim()).map(a=>(a.entryNode||"").trim()),Tt(t,n,o),{form:t,formState:n,addRow:()=>{n.languages.unshift({name:"",publicId:"",proficiency:"",entryNode:"",status:"new"}),Tt(t,n,o,{focusSelector:'[data-language-row-index="0"]'})}}}async function Lt(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:d}=Xl(n,i);await se({title:rn,dom:r,form:l,onOpen:()=>na(l,'[data-language-row-index="0"]'),shouldCloseWithoutSave:()=>{let g=M(s.languages,$t),u=Kl(s.languages,s.initialExistingOrder);return g.create.length===0&&g.update.length===0&&g.remove.length===0&&!u},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another language",onClick:d},submitLabel:de,cancelLabel:pe,validate:()=>i!=="owner"?O:Yl(s.languages),onSave:async()=>{let g=M(s.languages,$t),u={create:g.create,update:g.update,remove:g.remove};await Xi(o,t,u,s.languages)},formatSaveError:g=>g instanceof Error?g.message:ao})&&a&&await a()}A(L(`/* Languages list */
.languages__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
}

.languages__item-label {
  color: var(--color-text-subheading, var(--gray-900, #101828));
  font-size: var(--solid-ui-font-size-md, 1rem);
  font-weight: 500;
}

/* Empty state */
.languages__empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.languages__empty-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

.languages__empty-icon svg path {
  stroke-width: 2.5;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .languages__item-label {
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

@media (max-width: 576px) {
  .languages__item-label {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }
}

@container profile-pane (max-width: 576px) {
  .languages__item-label {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }
}
`,"text/css"));function es(e,o=!1){return e?o?c`<li class="languages__item-label" role="listitem">${e.name}</li>`:c``:c``}function ia(e,o=!1){return!e||!e.length||!e[0]?c``:c`${es(e[0],o)}${e.length>1?ia(e.slice(1),o):c``}`}function os(e,o,t,n,i,a){let r=Array.isArray(t)&&t.length>0,l=e.each(o,p.schema("knowsLanguage")).length>0;return c`
    <section
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      data-profile-section="languages"
      aria-labelledby="languages-heading"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="languages-heading">${Vo}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?c`
              ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit languages",onClick:d=>Lt(d,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
            `:z}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle languages section"
            aria-controls="languages-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="languages-panel" class="profile-section-collapsible__content">
        ${r?c`
              <ul class="languages__list" role="list" aria-label="Known languages">
                ${ia(t,!0)}
              </ul>
            `:l?c`<p>Language details are missing for one or more entries.</p>`:c`<p>No languages added yet.</p>`}
      </div>
    </section>
  `}function ts(){return c`
      <div class="profile__empty-state-content" role="group" aria-label="Empty languages section">
        <div class="languages__empty-icon-wrapper">
          <span class="languages__empty-icon">${Hn}</span>
        </div>
      </div>
  `}function ns(e,o,t,n,i,a){return c`
    <section
      aria-labelledby="languages-heading"
      data-profile-section="languages"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="languages-heading" tabindex="-1">${Vo}</h3>
        <div class="profile-section-collapsible__actions">
          ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add languages",onClick:r=>Lt(r,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle languages section"
            aria-controls="languages-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="languages-panel" class="profile-section-collapsible__content">
        ${ts()}
      </div>
    </section>
  `}function Et(e,o,t,n,i,a){let r=i||"desktop",l=t||[],d=!(Array.isArray(l)&&l.length>0)&&n==="owner";return c`
    ${d?ns(e,o,l,n,r,a):os(e,o,l,n,r,a)}
      `}var aa="http://data.europa.eu/esco/skill/",is="skill:";function as(e){Ce(e,"skill",is)}function rs(e){let o=e.trim();if(!o)return to();if(o.startsWith("_:"))return to(o.slice(2));if(o.startsWith("skill:"))return T(o);if(o.startsWith(aa)){let t=o.slice(aa.length);return T(t?`skill:${t}`:o)}return o.includes(":")?T(o):to(o)}function ra(e){return e.startsWith("_:")?e.slice(2):e}function la(e,o,t,n){let i=ra(n);return e.statementsMatching(o,p.schema("skills"),null,t).filter(a=>ra(a.object.value)===i||a.object.value===n)}function Eo(e,o,t,n){if(!n.name)return[];let i=rs(n.publicId);return[C(e,p.schema("skills"),t,o),C(t,p.solid("publicId"),i,o),C(i,p.schema("name"),P(n.name),o)]}async function ls(e,o,t){as(e);let n=o.doc(),i=e.each(o,p.schema("skills")),a=[],r=[],l=s=>{let d=ye(e,s,p.solid("publicId"),n);a.push(...d.linkedStatements)};t.remove.forEach(s=>{if(!s.entryNode)return;let d=Y(i,s.entryNode);a.push(...la(e,o,n,s.entryNode)),d&&d.termType!=="Literal"&&(a.push(...ne(e,d,n)),d.termType==="NamedNode"&&l(d))}),t.update.forEach(s=>{if(!s.entryNode)return;let d=Y(i,s.entryNode);if(!d){r.push(...Eo(o,n,B(n),s));return}if(a.push(...la(e,o,n,s.entryNode)),d.termType!=="Literal"&&(a.push(...ne(e,d,n)),d.termType==="NamedNode"&&l(d)),d.termType==="NamedNode"){r.push(...Eo(o,n,d,s));return}r.push(...Eo(o,n,B(n),s))}),t.create.forEach(s=>{r.push(...Eo(o,n,B(n),s))}),await ee(e,n,a,r,{unsupportedMessage:"Skill updates are not supported by this store updater.",failureMessage:"Failed to save skills",useDavFallback:!0,usePutFallback:!0})}async function Fo(e,o,t){try{await ls(e,o,t)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw ae(wn,i),new Error(ro,{cause:i})}}A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
  --contact-info-dialog-contact-point-row-gap: 15px;
  --contact-info-dialog-contact-point-row-align: flex-start;
  --contact-info-dialog-contact-point-row-direction: row;
  --contact-info-dialog-contact-point-row-wrap: wrap;
  --contact-info-dialog-contact-point-field-flex: 1 1 auto;
  --contact-info-dialog-contact-point-type-width: 104px;
  --contact-info-dialog-contact-point-type-max-width: none;
  --contact-info-dialog-contact-point-actions-flex: 0 1 auto;
  --contact-info-dialog-contact-point-actions-margin-left: auto;
  --contact-info-dialog-contact-point-actions-justify: flex-start;
  --contact-info-dialog-contact-point-select-font-size: inherit;
  --contact-info-dialog-contact-point-select-line-height: inherit;
  gap: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section + .profile-edit-dialog__section {
  border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  padding-top: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__contact-section-header {
  padding: 0;
  gap: 30px;
  margin-bottom: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section fieldset {
  margin-top: 4px;
  gap: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-heading {
  margin: 0;
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--solid-ui-font-size-md, 1rem);
  font-weight: 500;
  line-height: normal;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon {
  display: inline-flex;
  width: 0.8333rem;
  height: 0.8333rem;
  flex: 0 0 0.8333rem;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon svg {
  width: 100%;
  height: 100%;
}

.profile-edit-dialog__row--contact-point {
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: 0;
  box-shadow: none;
  flex-direction: var(--contact-info-dialog-contact-point-row-direction);
  align-items: var(--contact-info-dialog-contact-point-row-align);
  flex-wrap: var(--contact-info-dialog-contact-point-row-wrap);
  gap: var(--contact-info-dialog-contact-point-row-gap);
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point {
  margin-bottom: 12px;
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point:last-child {
  margin-bottom: 15px;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  border: 0;
  outline: 0;
  box-shadow: none;
  background: transparent;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
  flex: var(--contact-info-dialog-contact-point-field-flex);
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > label.profile-edit-dialog__field {
  display: block;
  width: auto;
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  display: block;
  width: 100%;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
  flex: var(--contact-info-dialog-contact-point-actions-flex);
  margin-left: var(--contact-info-dialog-contact-point-actions-margin-left);
  justify-content: var(--contact-info-dialog-contact-point-actions-justify);
}

#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.profile__edit-form--contact-info .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
.profile__edit-form--contact-info .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  font-size: var(--contact-info-dialog-contact-point-select-font-size);
  line-height: var(--contact-info-dialog-contact-point-select-line-height);
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full {
  max-width: 100%;
  width: 100%;
  align-items: center;
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full .profile-edit-dialog__actions {
  align-self: center;
}

.profile-edit-dialog__address-title {
  margin: 0;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  line-height: 1.5;
}

/* layout = mobile */
html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
  padding: 0;
}

html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading{
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
}

/* Media and container rules are needed so that the phone and email rows
stay as one row instead of wrapping */
@media (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@container profile-pane (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@media (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}

@container profile-pane (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}
`,"text/css"));var ss="https://ec.europa.eu/esco/api/search?language=$(language)&limit=$(limit)&type=skill&text=$(name)&selectedVersion=v1.2.0",cs="en",ds=8,sa="http://data.europa.eu/esco/skill/",ps=async e=>{let o=Oe(e);if(o.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];try{let t=await fetch(fs(o),{headers:{Accept:"application/json"}});if(!t.ok)return[];let n=await t.json(),i=Array.isArray(n?._embedded?.results)?n._embedded.results:[],a=new Set;return i.map(r=>{let l=Oe(us(r)),s=ca(typeof r?.uri=="string"?r.uri:"");return{label:l,value:s}}).filter(r=>{if(!r.label)return!1;let l=r.label.toLowerCase();return a.has(l)?!1:(a.add(l),!0)})}catch{return[]}};function ca(e){let o=Oe(e);if(!o)return"";if(o.startsWith("_:")||o.startsWith("skill:"))return o;if(o.startsWith(sa)){let t=o.slice(sa.length);return t?`skill:${t}`:o}return o}function fs(e){return ss.replace("$(language)",encodeURIComponent(cs)).replace("$(limit)",encodeURIComponent(String(ds))).replace("$(name)",encodeURIComponent(e))}function us(e){return e?.title||e?.searchHit||e?.preferredLabel?.en||e?.uri||""}function Oe(e){return $(e)}function Po(e){return[e.name].some(E)}function ms(e){let o=(e||[]).map(t=>({name:Oe(v(t.name)),publicId:ca(v(t.publicId)),entryNode:v(t.entryNode),status:v(t.entryNode)?"existing":"new"})).filter(t=>!!(t.name||t.publicId||t.entryNode));return{skills:o.length?o:[{name:"",publicId:"",entryNode:"",status:"new"}]}}function gs(e,o){e.querySelectorAll("solid-ui-combobox[data-skill-row-index]").forEach(n=>{let i=Number(n.dataset.skillRowIndex);if(Number.isNaN(i))return;let a=o[i];a&&(n.optionsFallback=a.name?[{label:a.name,value:a.publicId}]:[],n.asyncOptionsProvider=ps,n.value=a.publicId||a.name)})}function _s(e){return null}function hs(e){return!1}function Ft(e){let o=ve(document);o&&(o.disabled=hs(e))}function da(e,o){let t=e.querySelector(o);if(!t||typeof t.focus!="function")return;typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"start",behavior:"auto"});let n=t.tagName==="SOLID-UI-COMBOBOX"?t:null,a=(n?n.shadowRoot?.querySelector("input"):null)||t;a.focus(),a instanceof HTMLInputElement&&(a.setSelectionRange(0,0),a.scrollLeft=0,requestAnimationFrame(()=>{a.scrollLeft=0})),n?._closePopup&&requestAnimationFrame(()=>{n._closePopup?.()})}function bs({rows:e,index:o,displayIndex:t,onDelete:n}){let i=`Skill ${t+1}`,a=s=>{let d=s.target;I(e[o],"name",Oe(String(d.value)),Po),e[o].publicId="",Ft(e)},r=s=>{!e[o]||!s.detail.option||(I(e[o],"name",Oe(s.detail.option.label),Po),e[o].publicId=String(s.detail.option.value),Ft(e))},l=s=>{s.preventDefault(),n()};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--full profile-edit-dialog__row--skill">
      <label aria-label=${`${i} Name`} class="label profile-edit-dialog__field profile-edit-dialog__field--full">
        <solid-ui-combobox
          aria-label=${`${i} Name`}
          data-skill-row-index=${String(o)}
          placeholder="Skill"
          @input=${a}
          @change=${r}
        ></solid-ui-combobox>
        <small class="profile-edit-dialog__input-help-text">Type to search ESCO, or enter your own skill.</small>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          class="profile-edit-dialog__delete-button"
          aria-label=${`Delete skill ${t+1}`}
          title=${fe}
          @click=${l}
        >
          <span slot="icon" class="profile-edit-dialog__delete-icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function ys(e,o){let t=e.map((n,i)=>({row:n,index:i})).filter(({row:n})=>n.status!=="deleted");return c`
    <section class="profile-edit-dialog__section" aria-label="Skills">
      <fieldset>
        <legend class="sr-only">Skill entries</legend>
        ${t.map(({index:n},i)=>bs({rows:e,index:n,displayIndex:i,onDelete:()=>{ge(e,n),o()}}))}
      </fieldset>
    </section>
  `}function Pt(e,o,t,n={}){let i=(a={})=>Pt(e,o,t,a);U(c`
    ${ys(o.skills,i)}
    ${t!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e),gs(e,o.skills),Ft(o.skills),n.focusSelector&&da(e,n.focusSelector)}function ws(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form");let n=ms(e);return Pt(t,n,o),{form:t,formState:n,addRow:()=>{n.skills.unshift({name:"",publicId:"",entryNode:"",status:"new"}),Pt(t,n,o,{focusSelector:'[data-skill-row-index="0"]'})}}}async function zt(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:d}=ws(n,i);await se({title:an,dom:r,form:l,onOpen:()=>da(l,'[data-skill-row-index="0"]'),shouldCloseWithoutSave:()=>{let g=M(s.skills,Po);return g.create.length===0&&g.update.length===0&&g.remove.length===0},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another skill",onClick:d},submitLabel:de,cancelLabel:pe,validate:()=>i!=="owner"?O:_s(s.skills),onSave:async()=>{let g=M(s.skills,Po),u={create:g.create,update:g.update,remove:g.remove};await Fo(o,t,u)},formatSaveError:g=>g instanceof Error?g.message:ro})&&a&&await a()}A(L(`.skills__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
}

/* Skill chip */
.skills__item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 5px;
  background: var(--solid-ui-color-gray-100, #F3F4F6);
  width: fit-content;
  max-width: 100%;
}

.skills__item[data-pending='true'] {
  opacity: 0.55;
}

.skills__item-label {
  display: inline;
  color: var(--color-text-strong, var(--slate-900, #0F172B));
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.skills__item-tail {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

.skills__empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.skills__empty-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

solid-ui-button.skills__remove-button[data-loading='true'] {
  pointer-events: none;
}

.profile__section[data-profile-section='skills'] .profile-section-inline-error {
  margin-top: 15px;
  padding: 12px;
  border: 1px solid var(--dialog-error-border, var(--pink-700, #ff98b3));
  border-radius: 5px;
  background: var(--dialog-error-background, var(--pink-500, #ffdde6));
  color: var(--solid-ui-color-error, #B00020);
  text-align: left;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .skills__list {
  align-items: flex-start;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .skills__item {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 8px 10px;
  width: fit-content;
  max-width: 100%;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .skills__item-label {
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

@media (max-width: 576px) {
  .skills__list {
    align-items: flex-start;
  }

  .skills__item {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    padding: 8px 10px;
    width: fit-content;
    max-width: 100%;
  }

  .skills__item-label {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }
}

@container profile-pane (max-width: 576px) {
  .skills__list {
    align-items: flex-start;
  }

  .skills__item {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    padding: 8px 10px;
    width: fit-content;
    max-width: 100%;
  }

  .skills__item-label {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }
}
`,"text/css"));var xs="Unable to remove your skill.";function pa(e,o){let t=e.querySelector(".profile-section-inline-error");if(t){if(!o){t.textContent="",t.hidden=!0,t.setAttribute("aria-hidden","true");return}t.textContent=o,t.hidden=!1,t.setAttribute("aria-hidden","false"),t.focus()}}function vs(e,o,t,n,i){if(!e)return c``;let a=async r=>{if(r.preventDefault(),n!=="owner")return;let l=r.currentTarget,s=l?.closest(".skills__item"),d=l?.closest('[data-profile-section="skills"]'),f={name:e.name,publicId:e.publicId,entryNode:e.entryNode.value,status:"deleted"};try{l?.setAttribute("disabled",""),l?.setAttribute("aria-busy","true"),l?.setAttribute("data-loading","true"),s?.setAttribute("data-pending","true"),await Fo(o,t,{create:[],update:[],remove:[f]}),d&&pa(d,null),i&&await i()}catch(g){d&&pa(d,Pe(g,xs))}finally{l?.removeAttribute("disabled"),l?.setAttribute("aria-busy","false"),l?.removeAttribute("data-loading"),s?.removeAttribute("data-pending")}};return c`
    <li class="skills__item" role="listitem">
      <span class="skills__item-label">${Oi(e.name)}</span>
      ${n==="owner"?c`
            <span class="skills__item-tail">
              <solid-ui-button
                variant="ghost"
                aria-label=${`Remove ${e.name} skill`}
                @click=${a}
              >
                <span slot="icon" aria-hidden="true">${Yn}</span>
              </solid-ui-button>
            </span>
          `:z}
    </li>
  `}function Cs(e,o,t,n,i,a){let r=Array.isArray(t)&&t.length>0;return c`
    <section
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      data-profile-section="skills"
      aria-labelledby="skills-heading"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="skills-heading">${Uo}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?c`
            ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit skills",onClick:s=>zt(s,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          `:z}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle skills section"
            aria-controls="skills-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div
        id="skills-panel"
        class="profile-section-collapsible__content"
      >
        ${r?c`
              <ul class="skills__list" role="list" aria-label="Professional skills and competencies">
                ${t.map(s=>vs(s,e,o,n,a))}
              </ul>
              <div
                class="profile-section-inline-error"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                aria-hidden="true"
                tabindex="-1"
                hidden
              ></div>
            `:c`<p>No skills added yet.</p>`}
      </div>
    </section>
  `}function ks(){return c`
      <div class="profile__empty-state-content" role="group" aria-label="Empty skills section">
        <div class="skills__empty-icon-wrapper">
          <span class="skills__empty-icon">${qn}</span>
        </div>
      </div>
  `}function Ss(e,o,t,n,i,a){return c`
    <section
      aria-labelledby="skills-heading"
      data-profile-section="skills"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="skills-heading" tabindex="-1">${Uo}</h3>
        <div class="profile-section-collapsible__actions">
          ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add skills",onClick:r=>zt(r,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle skills section"
            aria-controls="skills-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="skills-panel" class="profile-section-collapsible__content">
        ${ks()}
      </div>
    </section>
  `}function Dt(e,o,t,n,i,a){let r=i||"desktop",l=t||[],d=!(Array.isArray(l)&&l.length>0)&&n==="owner";return c`
    ${d?Ss(e,o,l,n,r,a):Cs(e,o,l,n,r,a)}
  `}function fa(e){let o=(e?.value||"").trim();if(!o)return null;let t=o.slice(0,10);return P(t,p.xsd("date"))}function Ns(e){let o=(e.roleType||"").trim();if(o==="PastRole"||o==="CurrentRole"||o==="FutureRole")return p.solid(o);if(e.isCurrentRole)return p.solid("CurrentRole");let t=new Date().toISOString().slice(0,10),n=e.startDate?.value?.slice(0,10)||"",i=e.endDate?.value?.slice(0,10)||"";return n&&n>t?p.solid("FutureRole"):i&&i<t?p.solid("PastRole"):p.solid("FutureRole")}function As(e){let o=(e||"").trim();if(!o||o==="PastRole"||o==="CurrentRole"||o==="FutureRole")return null;if(o.startsWith("http://")||o.startsWith("https://")){let n=o.split(/[#/]/).pop();return n==="PastRole"||n==="CurrentRole"||n==="FutureRole"?null:T(o)}let t=o.match(/^([a-zA-Z][\w-]*):(.*)$/);if(t){let n=t[1].toLowerCase(),i=t[2].trim();return!i||i==="PastRole"||i==="CurrentRole"||i==="FutureRole"?null:n==="schema"?p.schema(i):n==="vcard"?p.vcard(i):n==="solid"?p.solid(i):n==="org"?p.org(i):null}return p.schema(o)}function $s(e,o,t){if(!t.orgName&&!t.orgType&&!t.orgLocation&&!t.orgHomePage)return[];let n=B(e),i=[C(o,p.org("organization"),n,e)],a=As(t.orgType||"");return a&&i.push(C(n,p.rdf("type"),a,e)),i.push(C(n,p.rdf("type"),p.vcard("Organization"),e)),t.orgName&&i.push(C(n,p.schema("name"),P(t.orgName),e)),t.orgLocation&&i.push(C(n,p.org("location"),P(t.orgLocation),e)),t.orgHomePage&&i.push(C(n,p.schema("uri"),P(t.orgHomePage),e)),(t.orgPublicId||"").trim()&&i.push(C(n,p.solid("publicId"),T((t.orgPublicId||"").trim()),e)),i}function Mt(e,o,t,n,i=!0){let a=[];if(i&&a.push(C(t,p.org("member"),e,o)),a.push(C(t,p.rdf("type"),Ns(n),o)),n.title&&a.push(C(t,p.vcard("role"),P(n.title),o)),n.startDate){let r=fa(n.startDate);r&&a.push(C(t,p.schema("startDate"),r,o))}if(n.endDate&&!n.isCurrentRole){let r=fa(n.endDate);r&&a.push(C(t,p.schema("endDate"),r,o))}return n.description&&a.push(C(t,p.schema("description"),P(n.description),o)),a.push(...$s(o,t,n)),a}async function Is(e,o,t){let n=o.doc(),i=e.each(null,p.org("member"),o,n),a=[],r=[];t.remove.forEach(s=>{if(!s.entryNode)return;let d=Y(i,s.entryNode);if(d){let f=ye(e,d,p.org("organization"),n);a.push(...f.linkedStatements),a.push(...ne(e,d,n))}}),t.update.forEach(s=>{if(!s.entryNode)return;let d=Y(i,s.entryNode);if(!d)throw new Error(vn);if(d.termType==="BlankNode"){let g=B(n);r.push(...Mt(o,n,g,s,!0));return}[p.rdf("type"),p.vcard("role"),p.schema("startDate"),p.schema("endDate"),p.schema("description")].forEach(g=>{No(e,d,g,n,a,r,null)});let f=ye(e,d,p.org("organization"),n);a.push(...f.linkedStatements),a.push(...f.linkStatements),r.push(...Mt(o,n,d,s,!1))}),t.create.forEach(s=>{r.push(...Mt(o,n,B(n),s))});let l=await ke(e,n,r);await ee(e,n,a,r,{unsupportedMessage:be,failureMessage:"Failed to save resume updates",useDavFallback:!1,usePutFallback:l,forcePut:l})}async function ua(e,o,t){try{await Is(e,o,t)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw ae(yn,i),new Error(lo,{cause:i})}}A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));var Be=[{label:"Corporation",value:"Corporation"},{label:"Educational Organization",value:"EducationalOrganization"},{label:"Research Organization",value:"ResearchOrganization"},{label:"Government Organization",value:"GovernmentOrganization"},{label:"NGO",value:"NGO"},{label:"Performing Group",value:"PerformingGroup"},{label:"Project",value:"Project"},{label:"Sports Organization",value:"SportsOrganization"},{label:"Other",value:"Other"}],ma=[{value:"01",label:"January"},{value:"02",label:"February"},{value:"03",label:"March"},{value:"04",label:"April"},{value:"05",label:"May"},{value:"06",label:"June"},{value:"07",label:"July"},{value:"08",label:"August"},{value:"09",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}],Ts=e=>async o=>{let t=$(o);if(t.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];try{let n=await fetch(Ds(t));if(!n.ok)return[];let i=await n.json(),a=Array.isArray(i?.search)?i.search:[],r=new Set,l=a.map(x=>{let S=$(Bs(x)),b=$(typeof x?.concepturi=="string"?x.concepturi:typeof x?.url=="string"?x.url:"");return{label:S,value:b}}).filter(x=>{if(!x.label)return!1;let S=x.label.toLowerCase();return r.has(S)?!1:(r.add(S),!0)}),s=l.map(x=>Do(String(x.value))).filter(Boolean);if(!s.length)return l.slice(0,Rt);let d=await _a(s),f=Array.from(new Set(Object.values(d).flatMap(x=>[...Mo(x,"P31"),...Mo(x,"P279")]))),g=await _a(f),u={...d,...g};if(Object.keys(u).length===0)return l.slice(0,Rt);let m=e();return l.filter(x=>{let S=Do(String(x.value));return js(S,u,m)}).slice(0,Rt)}catch{return[]}},Ls="https://www.wikidata.org/w/api.php?action=wbsearchentities&language=$(language)&type=item&limit=$(limit)&format=json&origin=*&search=$(name)",Es="https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=claims&ids=$(ids)",Fs="en",Rt=8,Ps=24,ba={Corporation:["http://www.wikidata.org/entity/Q6881511","http://www.wikidata.org/entity/Q4830453"],EducationalOrganization:["http://www.wikidata.org/entity/Q178706","http://www.wikidata.org/entity/Q2385804","http://www.wikidata.org/entity/Q1664720"],ResearchOrganization:["http://www.wikidata.org/entity/Q31855"],GovernmentOrganization:["http://www.wikidata.org/entity/Q327333"],NGO:["http://www.wikidata.org/entity/Q163740","http://www.wikidata.org/entity/Q79913","http://www.wikidata.org/entity/Q708676"],PerformingGroup:["http://www.wikidata.org/entity/Q32178211"],Project:["http://www.wikidata.org/entity/Q170584"],SportsOrganization:["http://www.wikidata.org/entity/Q4438121"],Other:["http://www.wikidata.org/entity/Q43229"]},zs=Array.from(new Set(Be.flatMap(e=>ba[e.value]||[]))),ya="__present__";function Ds(e){return Ls.replace("$(language)",encodeURIComponent(Fs)).replace("$(limit)",encodeURIComponent(String(Ps))).replace("$(name)",encodeURIComponent(e))}function Ms(e){return Es.replace("$(ids)",encodeURIComponent(e.join("|")))}function Do(e){let t=$(e).match(/Q\d+/);return t?t[0]:""}function Mo(e,o){return(e?.claims?.[o]||[]).map(n=>n?.mainsnak).filter(n=>n?.snaktype==="value").map(n=>n?.datavalue?.value?.id).filter(n=>typeof n=="string"&&n.length>0)}function Rs(e){let o=Ue(e),t=ba[o];return t?.length?t.map(n=>Do(n)).filter(Boolean):zs.map(n=>Do(n)).filter(Boolean)}var ga=new Map;function Os(e){let o=Ue(e),t=ga.get(o);if(t)return t;let n=new Set(Rs(o));return ga.set(o,n),n}async function _a(e){let o=Array.from(new Set(e.filter(Boolean)));if(!o.length||typeof fetch!="function")return{};let t=await fetch(Ms(o));return t.ok?(await t.json())?.entities||{}:{}}function js(e,o,t){let n=Os(t),i=new Set,a=[e];for(;a.length;){let r=a.shift();if(!r||i.has(r))continue;if(i.add(r),n.has(r))return!0;let l=o[r];a.push(...Mo(l,"P31")),a.push(...Mo(l,"P279"))}return!1}function Bs(e){return e?.label||e?.match?.text||e?.id||""}function Ue(e){return Be.some(o=>o.value===e)?e:Be[0]?.value||""}function ha(e){let o=new Date().getFullYear(),t=Array.from({length:120},(i,a)=>String(o-a));return Array.from(new Set([...t,...e].filter(Boolean))).sort((i,a)=>Number(a)-Number(i)).map(i=>({label:i,value:i}))}function zo(e,o,t){return e==="start-month"?ma:e==="start-year"?ha(o):e==="end-month"?t?[{value:ya,label:"Present"}]:ma:e==="end-year"&&t?[{value:"",label:""}]:ha(o)}function je(e){let o=(e||"").trim();if(!o)return{year:"",month:""};let t=o.match(/^(\d{4})-(\d{2})/);if(t)return{year:t[1],month:t[2]};let n=o.match(/(\d{4})/);return{year:n?n[1]:"",month:""}}function ie(e){return!!e.isCurrentRole||[e.title,e.roleType,v(e.startDate),v(e.endDate),e.orgName,e.orgType,e.orgLocation,e.orgHomePage,e.description].some(E)}function Us(e){let o=(e||[]).map(t=>({title:$(v(t.title)),roleType:$(v(t.roleType)),startDate:t.startDate,endDate:t.endDate,isCurrentRole:t.isCurrentRole??!t.endDate,orgName:$(v(t.orgName)),orgPublicId:$(v(t.orgPublicId)),orgType:Ue($(v(t.orgType))),orgLocation:$(v(t.orgLocation)),orgHomePage:$(v(t.orgHomePage)),description:$(v(t.description)),entryNode:v(t.entryNode),status:v(t.entryNode)?"existing":"new"})).filter(t=>ie(t)||!!t.entryNode);return{resumeData:o.length?o:[{title:"",roleType:"",startDate:void 0,endDate:void 0,isCurrentRole:!1,orgName:"",orgPublicId:"",orgType:Be[0].value,orgLocation:"",orgHomePage:"",description:"",entryNode:"",status:"new"}]}}function Vs(e){for(let o=0;o<e.length;o++){let t=e[o];if(!t||t.status==="deleted"||!ie(t))continue;let n=v(t.endDate).trim();if(!t.isCurrentRole&&!n)return{ok:!1,message:`Resume ${o+1}: End Year is required unless "I am currently working in this role" is selected.`}}return{ok:!0}}function qs(e,o){e.querySelectorAll("solid-ui-combobox[data-resume-organization-index]").forEach(n=>{let i=Number(n.dataset.resumeOrganizationIndex);if(Number.isNaN(i))return;let a=o[i];a&&(n.optionsFallback=a.orgName?[{label:a.orgName,value:a.orgPublicId}]:[],n.asyncOptionsProvider=Ts(()=>Ue(a.orgType||"")),n.value=a.orgPublicId||a.orgName)})}function Ot(e,o){e.querySelectorAll("solid-ui-combobox[data-resume-organization-index]").forEach(n=>{let i=Number(n.dataset.resumeOrganizationIndex);if(Number.isNaN(i)||!o[i])return;let a=n.selectedOption?$(n.selectedOption.label):$(String(n.value)),r=n.selectedOption?$(String(n.selectedOption.value)):"";I(o[i],"orgName",a,ie),o[i].orgPublicId=r})}function Hs({resumeData:e,index:o,displayIndex:t,onDelete:n,onChange:i}){let a=e[o],r=`Experience ${t+1}`,l=`resume-experience-heading-${o}`,s=`resume-title-${o}`,d=`resume-organization-${o}`,f=`resume-organization-type-${o}`,g=`resume-company-url-${o}`,u=`resume-org-location-${o}`,m=`resume-description-${o}`,w=`resume-description-counter-${o}`,x=2e3,S=(a?.description||"").length,b=`Start Month ${t+1}`,h=`resume-start-month-${o}`,_=`Start Year ${t+1}`,y=`resume-start-year-${o}`,Z=v(a?.startDate),k=je(Z),J=k.month,he=k.year,jo=`End Month ${t+1}`,za=`resume-end-month-${o}`,Da=v(a?.endDate),Ma=`End Year ${t+1}`,Ra=`resume-end-year-${o}`,Jt=je(Da),Oa=Jt.month,Qt=Jt.year,Xt=`resume-current-role-${o}`,en=new Date().getFullYear(),Je=[he,Qt],ja=Be,Ba=zo("start-month",Je,!!a?.isCurrentRole),Ua=zo("start-year",Je,!!a?.isCurrentRole),Va=zo("end-month",Je,!!a?.isCurrentRole),qa=zo("end-year",Je,!!a?.isCurrentRole),Bo=N=>F=>{let ce=F.target,we=$(ce.value);a&&(I(a,N,we,ie),i())},Ha=N=>{N.preventDefault(),n()},Qe=(N,F)=>{if(!(!N||!F))return P(`${F}-${N}-01`)},Ga=N=>{let F=N;if(!F.detail.option)return;let ce=String(F.detail.option.value),we=je(v(e[o]?.startDate)).year||String(en),Ae=Qe(ce,we);e[o]&&(I(e[o],"startDate",Ae,ie),i())},Wa=N=>{let F=N;if(!F.detail.option)return;let ce=String(F.detail.option.value),we=je(v(e[o]?.startDate)).month||"01",Ae=Qe(we,ce);e[o]&&(I(e[o],"startDate",Ae,ie),i())},Ka=N=>{if(e[o]?.isCurrentRole)return;let F=N;if(!F.detail.option)return;let ce=String(F.detail.option.value),we=je(v(e[o]?.endDate)).year||String(en),Ae=Qe(ce,we);e[o]&&(I(e[o],"endDate",Ae,ie),i())},Ya=N=>{if(e[o]?.isCurrentRole)return;let F=N;if(!F.detail.option)return;let ce=String(F.detail.option.value),we=je(v(e[o]?.endDate)).month||"01",Ae=Qe(we,ce);e[o]&&(I(e[o],"endDate",Ae,ie),i())},Za=N=>{let F=N.target,ce=$(F.value.slice(0,x));e[o]&&(I(e[o],"description",ce,ie),i())},Ja=N=>{let F=N.target;e[o]&&(I(e[o],"isCurrentRole",F.checked,ie),F.checked&&I(e[o],"endDate",void 0,ie),i())},Qa=N=>{let F=N;if(!F.detail.option)return;let ce=Ue(String(F.detail.option.value));a&&(Se(a,"orgType",ce),a.orgPublicId="",i())},Xa=N=>{let F=N.target;I(a,"orgName",$(String(F.value)),ie),a.orgPublicId=""},er=N=>{!a||!N.detail.option||(I(a,"orgName",$(N.detail.option.label),ie),a.orgPublicId=String(N.detail.option.value))};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--resume-entry-header" role="group" aria-labelledby=${l}>
      <h3 id=${l} class="profile-edit-dialog__entry-heading">${r}</h3>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete resume ${t+1}`}
          title=${fe}
          @click=${Ha}
        >
          <span slot="icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
    <label aria-label=${`${r} Title`} class="label profile-edit-dialog__field">
      Title
      <input
        class="input"
        type="text"
        name=${s}
        .value=${a?.title||""}
        data-contact-field="title"
        data-entry-node=${a?.entryNode||""}
        data-row-status=${a?.status||"n/a"}
        placeholder="Title"
        autocomplete="title"
        inputmode="text"
        @change=${Bo("title")}
      />
    </label>
    <div class="profile-edit-dialog__row">
      <label aria-label=${`${r} Organization Type`} class="label profile-edit-dialog__field">
        Organization Type
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__resume-organization-type-select"
          name=${f}
          .value=${Ue(a?.orgType||"")}
          @change=${Qa}
        >
          ${ja.map(N=>c`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <label aria-label=${`${r} Organization Name`} class="label profile-edit-dialog__field">
        Company or Organization
        <solid-ui-combobox
          name=${d}
          placeholder="Company or Organization"
          data-resume-organization-index=${String(o)}
          required
          @input=${Xa}
          @change=${er}
        ></solid-ui-combobox>
      </label>
    </div>
    <div class="profile-edit-dialog__row">
      <label aria-label=${`${r} Company URL`} class="label profile-edit-dialog__field">
        Company URL
        <input
          class="input"
          type="text"
          name=${g}
          .value=${a?.orgHomePage||""}
          data-contact-field="orgHomePage"
          data-entry-node=${a?.entryNode||""}
          data-row-status=${a?.status||"n/a"}
          placeholder="Company URL"
          autocomplete="url"
          inputmode="text"
          @change=${Bo("orgHomePage")}
        />
      </label>
      <label aria-label=${`${r} Location`} class="label profile-edit-dialog__field profile-edit-dialog__field--resume-location">
        Location
        <input
          class="input"
          type="text"
          name=${u}
          .value=${a?.orgLocation||""}
          data-contact-field="orgLocation"
          data-entry-node=${a?.entryNode||""}
          data-row-status=${a?.status||"n/a"}
          placeholder="Location"
          autocomplete="address-level2"
          inputmode="text"
          @change=${Bo("orgLocation")}
        />
      </label>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--resume-dates">
      <label aria-label=${`Start Date ${t+1}`} class="label profile-edit-dialog__field profile-edit-dialog__field--date-group">
        <span>Start Date</span>
        <div class="profile-edit-dialog__date-pair">
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__resume-date-select"
            name=${h}
            aria-label=${b}
            .value=${J}
            @change=${Ga}
          >
            ${Ba.map(N=>c`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__resume-date-select"
            name=${y}
            aria-label=${_}
            .value=${he}
            @change=${Wa}
          >
            ${Ua.map(N=>c`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
      </label>
      <label aria-label=${`End Date ${t+1}`} class="label profile-edit-dialog__field profile-edit-dialog__field--date-group">
        <span>End Date</span>
        <div class="profile-edit-dialog__date-pair">
          <solid-ui-combobox
            select-only
            class=${`profile-edit-dialog__resume-date-select${a?.isCurrentRole?" profile-edit-dialog__resume-date-select--disabled":""}`}
            name=${za}
            aria-label=${jo}
            aria-disabled=${String(!!a?.isCurrentRole)}
            tabindex=${a?.isCurrentRole?"-1":"0"}
            .value=${a?.isCurrentRole?ya:Oa}
            @change=${Ka}
          >
            ${Va.map(N=>c`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
          <solid-ui-combobox
            select-only
            class=${`profile-edit-dialog__resume-date-select${a?.isCurrentRole?" profile-edit-dialog__resume-date-select--disabled":""}`}
            name=${Ra}
            aria-label=${Ma}
            aria-disabled=${String(!!a?.isCurrentRole)}
            tabindex=${a?.isCurrentRole?"-1":"0"}
            .value=${a?.isCurrentRole?"":Qt}
            @change=${Ya}
          >
            ${qa.map(N=>c`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
      </label>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--inline-end">
      <label class="label profile-edit-dialog__checkbox-label" for=${Xt}>
        <input
          class="profile-edit-dialog__checkbox-input"
          type="checkbox"
          id=${Xt}
          name="isCurrentRole"
          .checked=${!!a?.isCurrentRole}
          @change=${Ja}
        />
        <span>I am currently working in this role</span>
      </label>
    </div>
    <label aria-label=${`${r} Description`} class="label profile-edit-dialog__field profile-edit-dialog__field--full profile-edit-dialog__field--stack">
      <span>Description</span>
      <textarea
        class="profile-edit-dialog__textarea"
        name=${m}
        rows="4"
        .value=${a?.description||""}
        maxlength=${x}
        aria-describedby=${w}
        data-contact-field="description"
        data-entry-node=${a?.entryNode||""}
        data-row-status=${a?.status||"n/a"}
        placeholder="Description"
        autocomplete="off"
        inputmode="text"
        @input=${Za}
      ></textarea>
      <small id=${w} aria-live="polite">${S}/${x}</small>
    </label>
  `}function Gs(e,o){let t=e.map((n,i)=>({resume:n,index:i})).filter(({resume:n})=>n.status!=="deleted");return c`
    <section class="profile-edit-dialog__section profile-edit-dialog__section--resume" aria-label="Resume">
      <fieldset>
        <legend class="sr-only">Resume entries</legend>
        ${t.map(({index:n},i)=>Hs({resumeData:e,index:n,displayIndex:i,onDelete:()=>{ge(e,n),o()},onChange:o}))}
      </fieldset>
    </section>
  `}function Ws(e,o,t,n){U(c`
    ${Gs(o.resumeData,t)}
    ${n!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e),qs(e,o.resumeData)}function Ks(e){let o=e.closest("dialog"),t=o?.querySelector("#modal-desc"),n=e.ownerDocument.activeElement,i=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null;return{dialogScrollTop:o?.scrollTop||0,descriptionScrollTop:t?.scrollTop||0,activeId:n?.id||"",activeName:n?.getAttribute("name")||"",selectionStart:i?.selectionStart??null,selectionEnd:i?.selectionEnd??null,fieldScrollLeft:i?.scrollLeft||0,fieldScrollTop:i?.scrollTop||0}}function Ys(e,o){let t=e.closest("dialog"),n=t?.querySelector("#modal-desc");t&&(t.scrollTop=o.dialogScrollTop),n&&(n.scrollTop=o.descriptionScrollTop);let i=o.activeId&&typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(o.activeId):o.activeId,a=o.activeName&&typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(o.activeName):o.activeName,r=null;i&&(r=e.querySelector(`#${i}`)),!r&&a&&(r=e.querySelector(`[name="${a}"]`)),wa(r,{selectionStart:o.selectionStart,selectionEnd:o.selectionEnd,scrollLeft:o.fieldScrollLeft,scrollTop:o.fieldScrollTop})}function Zs(e){if(!e)return null;if(e.tagName==="SOLID-UI-COMBOBOX"){let o=e.shadowRoot?.querySelector("input");if(o)return o}return e}function wa(e,o={}){let t=Zs(e);if(!t||typeof t.focus!="function")return;let n=t.ownerDocument.defaultView;if(!!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){t.scrollIntoView({block:"nearest",behavior:"auto"});return}if(t.focus({preventScroll:!0}),t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){let a=o.selectionStart??t.value.length,r=o.selectionEnd??a;t.setSelectionRange(a,r),t.scrollLeft=o.scrollLeft??t.scrollLeft,t.scrollTop=o.scrollTop??t.scrollTop,requestAnimationFrame(()=>{t.scrollLeft=o.scrollLeft??t.scrollLeft,t.scrollTop=o.scrollTop??t.scrollTop})}if(e?.tagName==="SOLID-UI-COMBOBOX"){let a=e;a._closePopup&&requestAnimationFrame(()=>{a._closePopup?.()})}}function Js(e,o){let t=e.querySelector(o);t&&wa(t)}function Qs(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form"),t.classList.add("profile__edit-form--resume");let n=Us(e),i=(r={})=>{let{preserveState:l=!0,focusSelector:s}=r,d=l?Ks(t):null;Ws(t,n,i,o),d&&Ys(t,d),s&&Js(t,s)};return i(),{form:t,formState:n,rerender:i,addRow:()=>{n.resumeData.unshift({title:"",roleType:"",startDate:void 0,endDate:void 0,isCurrentRole:!1,orgName:"",orgPublicId:"",orgType:Be[0].value,orgLocation:"",orgHomePage:"",description:"",entryNode:"",status:"new"}),i({preserveState:!1,focusSelector:'[name="resume-title-0"]'})}}}async function jt(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,rerender:d,addRow:f}=Qs(n,i);if(await se({title:sn,dom:r,form:l,shouldCloseWithoutSave:()=>{Ot(l,s.resumeData);let u=M(s.resumeData,ie);return u.create.length===0&&u.update.length===0&&u.remove.length===0},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another resume entry",onClick:f},submitLabel:de,cancelLabel:pe,validate:async()=>{if(Ot(l,s.resumeData),i!=="owner")return O;let u=Vs(s.resumeData);return u.ok?null:u.message||"Please complete the required resume fields."},onSave:async()=>{Ot(l,s.resumeData);let u=M(s.resumeData,ie);await ua(o,t,u),d()},formatSaveError:u=>u instanceof Error?u.message:lo})){if(a){await a();return}await Ai("Resume updates saved. Refresh to see latest values.","Saved",r)}}A(L(`.resume-card {
  --resume-card-item-gap: 12px;
  --resume-card-title-size: var(--solid-ui-font-size-lg, 1.125rem);
  --resume-card-organization-size: var(--solid-ui-font-size-md, 1rem);
  --resume-card-location-size: var(--solid-ui-font-size-sm, 0.875rem);
  --resume-card-period-size: var(--solid-ui-font-size-sm, 0.875rem);
  --resume-card-description-size: var(--solid-ui-font-size-sm, 0.875rem);
}

.resume-card__section {
  margin-bottom: 20px;
}

.resume-card__section > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.resume-card__item {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    "title period"
    "organization organization"
    "description description";
  column-gap: 20px;
  row-gap: 10px;
  align-items: start;
  margin: 0 0 var(--resume-card-item-gap) 0;
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
  gap: 0;
}

.resume-card__item:last-child {
  margin-bottom: 0;
}

.resume-card__item-header {
  grid-area: title;
  display: flex;
  align-items: baseline;
  gap: 15px;
  min-width: 0;
}

.resume-card__item-header h3,
.resume-card__item-header h4,
.resume-card__item-header time {
  margin: 0;
}

.resume-card__item-header h3,
.resume-card__item-header h4 {
  min-width: 0;
  color: var(--color-text-subheading, var(--gray-900, #101828));
  font-size: var(--resume-card-title-size);
  font-weight: 600;
  line-height: 1.4;
}

.resume-card__item-period {
  grid-area: period;
  justify-self: end;
  text-align: right;
  margin: 0;
  color: var(--solid-ui-color-gray-600, #4A5565);
  font-size: var(--resume-card-period-size);
  font-weight: 400;
  line-height: 1.4;
}

.resume-card__organization {
  grid-area: organization;
  margin: 0;
  line-height: 1.5;
}

.resume-card__organization-name {
  color: var(--solid-ui-color-gray-600, #4A5565);
  font-size: var(--resume-card-organization-size);
  font-weight: 500;
}

.resume-card__organization-separator,
.resume-card__organization-location {
  color: var(--solid-ui-color-gray-600, #4A5565);
  font-size: var(--resume-card-location-size);
  font-weight: 400;
}

/* Description toggle */
.resume-card__description-wrap {
  --resume-card-description-offset: 15px;
  grid-area: description;
  margin: var(--resume-card-description-offset) 0 0;
  position: relative;
  isolation: isolate;
}

.resume-card__description-text {
  margin: 0;
  width: 100%;
  max-width: none;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--resume-card-description-size);
  font-weight: 400;
  line-height: 1.5;
  overflow: hidden;
}

.resume-card__description-text--overflowing {
  padding-right: 72px;
}

.resume-card__description-text--expanded {
  display: block;
  -webkit-line-clamp: unset;
  line-clamp: unset;
  padding-right: 0;
  overflow: visible;
}

.resume-card__description-toggle,
solid-ui-button.resume-card__description-toggle {
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: var(--solid-ui-color-white, #FFF);
  white-space: nowrap;
  z-index: 0;
}

.resume-card__description-toggle {
  border: 0;
  background: transparent;
  color: var(--solid-ui-color-primary, #7C4DFF);
  cursor: var(--profile-interactive-cursor, pointer);
  font: inherit;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  line-height: 1.5;
  min-height: auto;
  min-width: auto;
}

solid-ui-button.resume-card__description-toggle[hidden],
.resume-card__description-toggle[hidden] {
  display: none !important;
}

.resume-card__description-wrap .resume-card__description-text:not(.resume-card__description-text--expanded) + .resume-card__description-toggle,
.resume-card__description-wrap .resume-card__description-text:not(.resume-card__description-text--expanded) + solid-ui-button.resume-card__description-toggle {
  top: calc(100% - 1.5em + 0.28em - 11px);
  bottom: auto;
  transform: translateY(7px);
}

.resume-card__description-text--expanded + .resume-card__description-toggle,
.resume-card__description-text--expanded + solid-ui-button.resume-card__description-toggle {
  position: static;
  display: block;
  width: fit-content;
  margin-left: auto;
  top: auto;
  bottom: auto;
  transform: none;
}

.resume-card__description-text--expanded + solid-ui-button.resume-card__description-toggle::part(button) {
  position: static;
  display: inline-flex;
  top: auto;
  bottom: auto;
  transform: none;
}

.resume-card__skill,
.resume-card__language {
  text-align: left;
  margin: var(--resume-card-item-gap) 0;
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
}

.resume-card__section > h3 {
  color: var(--solid-ui-color-gray-800, #101828);
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: var(--resume-card-item-gap);
  border-bottom: 1px solid var(--color-border-pale, #eee);
  padding-bottom: var(--resume-card-item-gap);
}

/* Compact layout */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .resume-card__item {
  --resume-card-location-size: var(--solid-ui-font-size-sm, 0.875rem);
  --resume-card-period-size: 0.75rem;
  --resume-card-description-offset: 0rem;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "title"
    "organization"
    "period"
    "description";
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .resume-card__item-header {
  align-items: flex-start;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .resume-card__item-period {
  justify-self: start;
  text-align: left;
}

@media (max-width: 576px) {
  .resume-card__item {
    --resume-card-location-size: var(--solid-ui-font-size-sm, 0.875rem);
    --resume-card-period-size: 0.75rem;
    --resume-card-description-offset: 0rem;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "title"
      "organization"
      "period"
      "description";
  }

  .resume-card__item-header {
    align-items: flex-start;
  }

  .resume-card__item-period {
    justify-self: start;
    text-align: left;
  }
}

@container profile-pane (max-width: 576px) {
  .resume-card__item {
    --resume-card-location-size: var(--solid-ui-font-size-sm, 0.875rem);
    --resume-card-period-size: 0.75rem;
    --resume-card-description-offset: 0rem;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "title"
      "organization"
      "period"
      "description";
  }

  .resume-card__item-header {
    align-items: flex-start;
  }

  .resume-card__item-period {
    justify-self: start;
    text-align: left;
  }
}
`,"text/css"));function Xs(e,o){if(!e)return c``;let t=`cv-role-title-${o}`,n=`cv-role-period-${o}`,i=`cv-role-org-${o}`,a=`cv-role-description-${o}`,r=e.description?`${i} ${n} ${a}`:`${i} ${n}`;return c`
    <li class="resume-card__item" role="listitem" aria-labelledby=${t} aria-describedby=${r}>
    <div class="resume-card__item-header">
      <h3 id=${t}>${e.title}</h3>
    </div>
    <p class="resume-card__organization" id=${i}>
      <strong class="resume-card__organization-name">${e.orgName}</strong>${e.orgLocation?c`<span class="resume-card__organization-separator" aria-hidden="true"> | </span><span class="resume-card__organization-location">${e.orgLocation}</span>`:""}
    </p>
    <p id=${n} class="resume-card__item-period">
      <time datetime=${St(e.startDate)}>${kt(e.startDate)}</time>
      <span> to </span>
      ${e.endDate?c`<time datetime=${St(e.endDate)}>${kt(e.endDate)}</time>`:c`<span>Present</span>`}
    </p>
    ${e.description?c`
      <div class="resume-card__description-wrap">
        <p class="resume-card__description-text" id=${a}>${e.description}</p>
        <solid-ui-button
          variant="tertiary"
          class="resume-card__description-toggle"
          aria-controls=${a}
          aria-expanded=${"false"}
          hidden
          @click=${To}
        >
          ...more
        </solid-ui-button>
      </div>
    `:z}
    </li>
  `}function ec(e){return!e||!e.length?c``:c`${e.map((o,t)=>Xs(o,t))}`}var oc=e=>Array.isArray(e)&&e.length>0?c`
    <article class="resume-card" aria-label="Resume" data-testid="curriculum-vitae">
      <section class="resume-card__section">
        <ul role="list" aria-label="Work experience in chronological order">
          ${ec(e)}
        </ul>
      </section>
    </article>
  `:c``;function tc(e,o,t,n,i,a){Ne();let r=t.length>0,l=r?oc(t):z;return c`
    <section
      aria-labelledby="cv-heading"
      data-profile-section="resume"
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="cv-heading" tabindex="-1">${po}</h2>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?c`
            ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit resume details",onClick:d=>jt(d,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${j}</span>`,desktopLabel:"Edit",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          `:z}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle resume section"
            aria-controls="cv-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="cv-panel" class="profile-section-collapsible__content">
        ${r?l:c`<p>No resume details added yet.</p>`}
      </div>
    </section>
  `}function nc(e,o,t,n,i){return c`
    <div class="profile__empty-state-content" role="group" aria-label="Empty resume section">
      <h2 id="resume-heading" tabindex="-1">${po}</h2>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      @click=${a=>jt(a,e,o,t,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Fe}</span>
       Add Resume
    </solid-ui-button>
  `}function ic(e,o,t,n,i){return c`
    <section
      aria-labelledby="resume-heading"
      data-profile-section="resume"
      class="profile__section--empty profile__section--empty-main profile-section-collapsible profile-section-collapsible--inline-mobile-actions profile-section-collapsible--empty-mobile-no-edit"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="resume-heading" tabindex="-1">${po}</h2>
        <div class="profile-section-collapsible__actions">
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle resume section"
            aria-controls="cv-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="cv-panel" class="profile-section-collapsible__content">
        ${nc(e,o,t,n,i)}
      </div>
    </section>
  `}function xa(e,o,t,n,i,a){let r=i||"desktop",l=t||[],d=!(l.length>0)&&n==="owner";return c`
    ${d?ic(e,o,l,n,a):tc(e,o,l,n,r,a)}
  `}function va(e){let o=(e.url||"").trim();if(!o)return null;try{return T(new URL(o).href)}catch{return null}}function Ve(e){let o=(e||"").trim();if(!o)return"";try{let t=new URL(o);return t.hash="",t.href}catch{return o}}function ac(e,o,t){if(!e.any(o,p.rdf("first"),null,t))return[];let n=new Set,i=[],a=o;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,p.rdf("rest"),null,t);if(!l||l.termType==="NamedNode"&&l.value===p.rdf("nil").value)break;a=l}return i}function rc(e,o,t){let n=o.why||t,i=[C(o.subject,o.predicate,o.object,n)],a=o.object;return ut(e,a,n)?(ac(e,a,n).forEach(r=>{i.push(...e.statementsMatching(r,null,null,n))}),i):(a.termType==="BlankNode"&&i.push(...e.statementsMatching(a,null,null,n)),i)}async function lc(e,o,t){let n=o.doc(),i=e.statementsMatching(o,p.solid("community"),null,null),a=new Map,r=new Map,l=new Set,s=u=>{let m=a.get(u.value);if(m)return m;let w={doc:u,cleanupStatements:[],currentUrlsByKey:new Map};return a.set(u.value,w),w};i.forEach(u=>{let m=u.why||n,w=s(m);w.cleanupStatements.push(...rc(e,u,n));let x=u.object;xo(e,x,m).forEach(b=>{let h=ui(b,e),_=Ve(h);!_||r.has(_)||(r.set(_,m.value),w.currentUrlsByKey.set(_,h))})});let d=u=>{l.add(u)},f=u=>{let m=r.get(u);if(!m)return null;let w=a.get(m);return w?(w.currentUrlsByKey.delete(u),r.delete(u),d(m),w.doc):null},g=(u,m)=>{let w=Ve(m);if(!w||r.has(w))return;s(u).currentUrlsByKey.set(w,m),r.set(w,u.value),d(u.value)};t.remove.forEach(u=>{let m=Ve(u.entryNode||""),w=Ve(u.url);if(m){f(m);return}w&&f(w)}),t.update.forEach(u=>{let m=va(u),w=Ve(u.entryNode||""),x=Ve(u.url),S=w&&f(w)||x&&f(x)||n;m&&g(S,m.value)}),t.create.forEach(u=>{let m=va(u);m&&g(n,m.value)});for(let u of l){let m=a.get(u);if(!m)continue;let w=Array.from(m.currentUrlsByKey.values()).map(x=>C(o,p.solid("community"),T(x),m.doc));await ee(e,m.doc,m.cleanupStatements,w,{unsupportedMessage:"Project updates are not supported by this store updater.",failureMessage:"Failed to save projects",useDavFallback:!0,usePutFallback:!0})}}async function Ro(e,o,t){try{await lc(e,o,t)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw ae(bn,i),new Error(un,{cause:i})}}A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));function Bt(e){return $(e)}function Ca(e){let o=Bt(e);if(!o)return!1;try{let t=new URL(o);return t.protocol==="https:"&&t.pathname==="/profile/card"&&t.hash==="#me"}catch{return!1}}function Ut(e){return[e.url,e.entryNode].some(E)}async function sc(e){let o=await navigator.clipboard.readText(),t=Bt(o);return t?(I(e,"url",t,Ut),t):""}function cc(e){return{project:{url:"",entryNode:"",status:"new"}}}function dc(e){return E(e.url)?Ca(e.url)?null:"Please enter a valid WebID in the form https://example.com/profile/card#me.":"WebID is required."}function pc(e,o){let t="project-0",n=a=>{let r=a.target,l=Bt(r.value);I(e,"url",l,Ut)},i=async a=>{a.preventDefault();try{let r=await sc(e);if(o(),!Ca(r))return;let l=a.currentTarget?.ownerDocument||document;ve(l)?.click()}catch{}};return c`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--project">
      <label aria-label="Project or community WebID" class="label profile-edit-dialog__field profile-edit-dialog__field--full">
      <div class="profile-edit-dialog__input-wrap">
          <input
            class="input profile-edit-dialog__input--with-action"
            type="text"
            name=${t}
            .value=${e?.url||""}
            required
            data-contact-field="url"
            data-entry-node=${e?.entryNode||""}
            data-row-status=${e?.status||"n/a"}
            placeholder="Type or paste project/community WebID here"
            autocomplete="off"
            inputmode="text"
            @input=${n}
          />
          <solid-ui-button
            variant="tertiary"
            class="profile-edit-dialog__paste-button"
            aria-label="Paste project or community URL from clipboard"
            title=${fn}
            @click=${i}
          >
            <span slot="left-icon" class="profile-edit-dialog__paste-icon" aria-hidden="true">${Wn}</span>
            Paste
          </solid-ui-button>
        </div>
      </label>
    </div>
  `}function ka(e,o,t){let n=()=>ka(e,o,t);U(c`
    ${pc(o.project,n)}
    ${t!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e)}function fc(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form"),t.classList.add("profile__edit-form--projects");let n=cc(e);return ka(t,n,o),{form:t,formState:n}}async function Vt(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=fc(n,i),d=se({title:cn,dom:r,form:l,headerAction:{type:"close"},shouldCloseWithoutSave:()=>!E(s.project.url)&&!E(s.project.entryNode),validate:()=>i!=="owner"?O:dc(s.project),onSave:async()=>{let g=M([s.project],Ut),u={create:g.create,update:g.update,remove:g.remove};await Ro(o,t,u)},formatSaveError:g=>g instanceof Error?g.message:String(g)}),f=null;f=await d,f&&a&&await a()}A(L(`.profile__section[data-profile-section='projects'],
.profile__section--empty[data-profile-section='projects'] {
  --project-card-rail-wrap: nowrap;
  --project-card-rail-overflow-x: auto;
  --project-card-rail-scroll-snap-type: x proximity;
  --project-card-flex-basis: min(420px, 88vw);
  --project-card-flex: 0 0 var(--project-card-flex-basis);
  --project-card-max-width: none;
  --project-card-scrollbar-height: 8px;
  --project-card-thumb-column-width: 88px;
  --project-card-thumb-size: 4.125rem;
  --project-card-follow-label-gap: 5px;
  --project-card-wrapper-gap: 10px;
  --project-card-content-gap: 5px;
  --project-card-heading-gap: 3px;
  --project-card-meta-margin-top: 12px;
  --project-card-meta-font-size: 0.86rem;
  --project-card-more-button-width: auto;
  --project-card-more-button-part-width: auto;
  --project-card-mobile-more-button-margin-top: 12px;
  --project-card-more-button-margin-top: 0;
  --project-card-collapsed-extra-display: flex;
  --project-card-more-icon-transform: rotate(0deg);
}

/* Rail and cards */
.project-card__rail {
  display: flex;
  gap: 20px;
  overflow-x: var(--project-card-rail-overflow-x, auto);
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: var(--project-card-rail-wrap, nowrap);
  scroll-snap-type: var(--project-card-rail-scroll-snap-type, x proximity);
}

.project-card__follow-label {
  display: inline-flex;
  align-items: center;
  gap: var(--project-card-follow-label-gap);
}

.project-card__follow-label--hover {
  display: none;
}

.project-card__follow-label--loading {
  display: none;
  align-items: center;
  gap: var(--project-card-follow-label-gap);
}

solid-ui-button.project-card__follow-button:hover .project-card__follow-label--default,
solid-ui-button.project-card__follow-button:focus-visible .project-card__follow-label--default,
solid-ui-button.project-card__follow-button:focus-within .project-card__follow-label--default {
  display: none;
}

solid-ui-button.project-card__follow-button:hover .project-card__follow-label--hover,
solid-ui-button.project-card__follow-button:focus-visible .project-card__follow-label--hover,
solid-ui-button.project-card__follow-button:focus-within .project-card__follow-label--hover {
  display: inline-flex;
}

solid-ui-button.project-card__follow-button[loading] {
  pointer-events: none;
}

solid-ui-button.project-card__follow-button[loading] .project-card__follow-label--default,
solid-ui-button.project-card__follow-button[loading] .project-card__follow-label--hover {
  display: none;
}

solid-ui-button.project-card__follow-button[loading] .project-card__follow-label--loading {
  display: inline-flex;
}

.project-card__rail::-webkit-scrollbar {
  height: var(--project-card-scrollbar-height);
}

.project-card__rail::-webkit-scrollbar-thumb {
  background: var(--color-icon-muted, #90A1B9);
  border-radius: 999px;
}

.project-card {
  display: flex;
  flex-direction: column;
  flex: var(--project-card-flex, 0 0 var(--project-card-flex-basis));
  width: 100%;
  max-width: var(--project-card-max-width);
  min-width: 0;
  box-sizing: border-box;
  scroll-snap-align: start;
  border-radius: 8px;
  border: 1px solid var(--color-border, var(--gray-200, #E5E7EB));
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  flex-shrink: 0;
}

.project-card__link {
  display: block;
  width: 100%;
  align-self: stretch;
  color: inherit;
  text-decoration: none;
}

.project-card__link:hover .project-card__title,
.project-card__link:focus-visible .project-card__title {
  text-decoration: underline;
}

.project-card__wrapper {
  display: grid;
  grid-template-columns: var(--project-card-thumb-column-width) 1fr;
  gap: var(--project-card-wrapper-gap);
  width: 100%;
  align-items: start;
  border-radius: 8px;
  border-bottom: 1px solid var(--color-border, var(--gray-200, #E5E7EB));
}

.project-card__thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--project-card-thumb-size);
  height: var(--project-card-thumb-size);
  overflow: hidden;
  border-radius: 8px;
  background: var(--color-surface-placeholder, var(--gray-200, #E5E7EB));
  padding: 10.5px 10px;
  aspect-ratio: 1/1;
}

.project-card__thumb-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-card__thumb-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 0.72rem;
  color: var(--color-text-detail, var(--slate-500, #62748E));
  text-transform: uppercase;
  letter-spacing: 0.04rem;
}

.project-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--project-card-content-gap);
  min-width: 0;
}

.project-card__heading-group {
  display: flex;
  flex-direction: column;
  gap: var(--project-card-heading-gap);
  min-width: 0;
}

.project-card__title,
.project-card__organization,
.project-card__category,
.project-card__meta,
.project-card__description {
  margin: 0;
}

.project-card__title {
  overflow: hidden;
  color: var(--color-text-subheading, var(--gray-900, #101828));
  text-overflow: ellipsis;
  font-size: var(--solid-ui-font-size-lg, 1.125rem);
  font-weight: 600;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  align-self: stretch;
}

.project-card__organization {
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  line-height: 1.35;
  align-self: stretch;
}

.project-card__category {
  font-size: 0.75rem;
  font-weight: 500;
}

.project-card__category--project {
  color: var(--purple-500, #AD46FF);
}

.project-card__category--community {
  color: var(--yellow-700, #A65F00);
}

.project-card__category--unknown {
  color: var(--color-text-control, var(--slate-700, #314158));
}

.project-card__meta {
  margin-top: var(--project-card-meta-margin-top);
  overflow-wrap: anywhere;
  font-size: var(--project-card-meta-font-size);
}

.project-card__footer {
  display: flex;
  justify-content: flex-start;
  align-self: stretch;
  margin-top: auto;
  padding: 15px 0 0;
}

.profile__section[data-profile-section='projects'] .profile-section-inline-error {
  margin-top: 15px;
  padding: 12px;
  border: 1px solid var(--dialog-error-border, var(--pink-700, #ff98b3));
  border-radius: 5px;
  background: var(--dialog-error-background, var(--pink-500, #ffdde6));
  color: var(--solid-ui-color-error, #B00020);
  text-align: left;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.project-card__more-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: var(--project-card-more-icon-transform, rotate(0deg));
  transition: transform var(--animation-duration, 0.2s) ease;
}

/* Compact layout */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section[data-profile-section='projects'],
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section--empty[data-profile-section='projects'] {
  --project-card-rail-wrap: wrap;
  --project-card-rail-overflow-x: visible;
  --project-card-rail-scroll-snap-type: none;
  --project-card-flex: 1 1 100%;
  --project-card-max-width: 100%;
  --project-card-more-button-width: 100%;
  --project-card-more-button-part-width: 100%;
  --project-card-more-button-margin-top: var(--project-card-mobile-more-button-margin-top, var(--spacing-xs, 0.75rem));
}

.profile-section-collapsible[data-mobile-expanded="false"] .project-card:nth-child(n + 3) {
  display: var(--project-card-collapsed-extra-display);
}

solid-ui-button.project-card__more-button[data-mobile-expanded="true"] .project-card__more-icon {
  --project-card-more-icon-transform: rotate(180deg);
}

@media (max-width: 576px) {
  .profile__section[data-profile-section='projects'],
  .profile__section--empty[data-profile-section='projects'] {
    --project-card-rail-wrap: wrap;
    --project-card-rail-overflow-x: visible;
    --project-card-rail-scroll-snap-type: none;
    --project-card-flex: 1 1 100%;
    --project-card-max-width: 100%;
    --project-card-more-button-width: 100%;
    --project-card-more-button-part-width: 100%;
    --project-card-more-button-margin-top: var(--project-card-mobile-more-button-margin-top);
    --project-card-collapsed-extra-display: none;
  }
}

@container profile-pane (max-width: 576px) {
  .profile__section[data-profile-section='projects'],
  .profile__section--empty[data-profile-section='projects'] {
    --project-card-rail-wrap: wrap;
    --project-card-rail-overflow-x: visible;
    --project-card-rail-scroll-snap-type: none;
    --project-card-flex: 1 1 100%;
    --project-card-max-width: 100%;
    --project-card-more-button-width: 100%;
    --project-card-more-button-part-width: 100%;
    --project-card-more-button-margin-top: var(--project-card-mobile-more-button-margin-top);
    --project-card-collapsed-extra-display: none;
  }
}`,"text/css"));var uc=2;function Sa(e,o){let t=e.querySelector(".profile-section-inline-error");if(t){if(!o){t.textContent="",t.hidden=!0,t.setAttribute("aria-hidden","true");return}t.textContent=o,t.hidden=!1,t.setAttribute("aria-hidden","false"),t.focus()}}function mc(e){let o=e.currentTarget,t=o?.closest(".profile-section-collapsible");if(!o||!t)return;let n=t.getAttribute("data-mobile-expanded")!=="true";t.setAttribute("data-mobile-expanded",String(n)),o.setAttribute("aria-expanded",String(n)),o.setAttribute("data-mobile-expanded",String(n));let i=o.querySelector(".project-card__more-label");i&&(i.textContent=n?"View Less":"View More")}function gc(e,o){return e?c`
        <img
          class="project-card__thumb-image"
          src=${e}
          alt=${o}
          loading="lazy"
        />
      `:c`
        <div class="project-card__thumb-fallback" role="img" aria-label=${o}>
          ${o}
        </div>
      `}function _c(e,o){return{url:e.url,title:e.title,imageUrl:e.imageUrl,category:e.category,name:e.name,orgName:e.orgName,entryNode:e.entryNode?.value||"",status:o}}function hc(e,o,t,n,i){if(!e)return c``;let a=async d=>{if(d.preventDefault(),d.stopPropagation(),n!=="owner")return;let f=d.currentTarget,g=d.currentTarget?.closest('[data-profile-section="projects"]'),u={create:[],update:[],remove:[_c(e,"deleted")]};try{f?.setAttribute("disabled",""),f?.setAttribute("loading",""),f?.setAttribute("aria-busy","true"),await Ro(o,t,u),g&&Sa(g,null),i&&await i()}catch(m){g&&Sa(g,Pe(m,mn))}finally{f?.removeAttribute("disabled"),f?.removeAttribute("loading"),f?.setAttribute("aria-busy","false")}},r=(e.category||"").trim().toLowerCase(),l=r==="project"?"project":r==="community"?"community":"unknown",s=r&&r!=="unknown"?r.charAt(0).toUpperCase()+r.slice(1):"Uncategorized";return c`
    <li class="project-card" role="listitem">
      <a
        class="project-card__link"
        href=${e.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label=${e.title?`Open ${e.title}`:"Open project link"}
      >
        <div class="project-card__wrapper">
          <div class="project-card__thumb">
            ${gc(e.imageUrl,e.title||"Project preview")}
          </div>
          <div class="project-card__content">
            <div class="project-card__heading-group">
              <h3 class="project-card__title">${e.title||e.url}</h3>
              <p class="project-card__organization">${e.orgName||"Organization unknown"}</p>
            </div>
            <p class="project-card__category project-card__category--${l}">${s}</p>
          </div>
        </div>
      </a>
      ${n==="owner"?c`
        <div class="project-card__footer">
          <solid-ui-button
            variant="secondary"
            class="project-card__follow-button"
            aria-label="Unfollow project"
            @click=${a}
          >
            <span slot="left-icon" class="project-card__follow-label project-card__follow-label--default">${Un}</span>
            <span class="project-card__follow-label project-card__follow-label--default">Following</span>
            <span class="project-card__follow-label project-card__follow-label--hover">Unfollow</span>
            <span class="project-card__follow-label project-card__follow-label--loading">Unfollowing...</span>
          </solid-ui-button>
        </div>
      `:c``}
    </li>
  `}function bc(e,o,t,n,i){let a=t;return c`
    <div class="profile__empty-state-content" role="group" aria-label="Empty projects section">
      <h2 id="projects-heading" tabindex="-1">${fo}</h2>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      aria-label="Add project details"
      @click=${r=>Vt(r,e,o,a,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Fe}</span>
       Add Project
    </solid-ui-button>
  `}function yc(e,o,t,n,i){return c`
    <section
      aria-labelledby="projects-heading"
      data-profile-section="projects"
      class="profile__section--empty profile__section--empty-main profile-section-collapsible profile-section-collapsible--inline-mobile-actions profile-section-collapsible--empty-mobile-no-edit"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="projects-heading" tabindex="-1">${fo}</h2>
        <div class="profile-section-collapsible__actions">
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle projects section"
            aria-controls="projects-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="projects-panel" class="profile-section-collapsible__content">
        ${bc(e,o,t,n,i)}
      </div>
    </section>
  `}function Na(e,o,t,n,i){return!e||!e.length||!e[0]?c``:c`${hc(e[0],o,t,n,i)}${e.length>1?Na(e.slice(1),o,t,n,i):c``}`}function wc(e,o,t,n,i,a){let r=Array.isArray(t)&&t.length>0,l=Math.max(0,t.length-uc),s=n==="owner";return c`
      <section
        class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
        data-profile-section="projects"
        aria-labelledby="projects-heading"
        role="region"
        tabindex="-1"
        data-expanded="false"
        data-mobile-expanded="${l>0?"false":"true"}"
      >
        <header class="profile__section-header profile-section-collapsible__header">
          <h2 id="projects-heading">${fo}</h2>
          <div class="profile-section-collapsible__actions">
            ${s?c`
              ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit projects",onClick:d=>Vt(d,e,o,t,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
            `:z}
            <solid-ui-button
              variant="ghost"
              class="profile-section-collapsible__toggle-button"
              aria-label="Toggle projects section"
              aria-controls="projects-panel"
              aria-expanded="false"
              @click=${H}
            >
              <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
            </solid-ui-button>
          </div>
        </header>
        <div id="projects-panel" class="profile-section-collapsible__content">
          ${r?c`
                <ul id="projects-rail" class="project-card__rail" role="list" aria-label="Known projects">
                  ${Na(t,e,o,n,a)}
                </ul>
                ${l>0?c`
                      <solid-ui-button
                        variant="tertiary"
                        class="project-card__more-button"
                        aria-controls="projects-rail"
                        aria-expanded="false"
                        data-mobile-expanded="false"
                        @click=${mc}
                      >
                        <span slot="left-icon" class="project-card__more-icon" aria-hidden="true">${Zn}</span>
                        <span class="project-card__more-label">View More</span>
                      </solid-ui-button>
                    `:c``}
                <div
                  class="profile-section-inline-error"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  aria-hidden="true"
                  tabindex="-1"
                  hidden
                ></div>
              `:c`<p>No projects added yet.</p>`}
        </div>
      </section>
    `}function Aa(e,o,t,n,i,a){let r=i||"desktop",s=!(Array.isArray(t)&&t.length>0)&&n==="owner";return c`
    ${s?yc(e,o,t,n,a):wc(e,o,t,n,r,a)}
  `}async function xc(e,o,t){let n=o.doc(),i=[],a=[],r=(m,w)=>{let x=(w||"").trim(),S=x?P(x):null;No(e,o,m,n,i,a,S)},l=(m,w=!1)=>{let x=w?{description:""}:m;r(p.vcard("note"),x.description)},s=t.remove[0],d=t.update[0],f=t.create[0],g=d||f||s;g&&l(g,!!(s&&!d&&!f));let u=await ke(e,n,a);await ee(e,n,i,a,{unsupportedMessage:be,failureMessage:"Failed to save bio updates",useDavFallback:!1,usePutFallback:u,forcePut:u})}async function $a(e,o,t){try{await xc(e,o,t)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw ae(gn,i),new Error(co,{cause:i})}}A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));function qt(e){return E(e.description)}function vc(e){return{bio:{description:$(v(e?.description||"")),entryNode:v(e?.entryNode||""),status:v(e?.entryNode||"")?"existing":"new"}}}function Cc(e,o){let t="bio-description",n="bio-description-counter",a=(e?.description||"").length,r=l=>{let s=l.target,d=$(s.value.slice(0,2600));I(e,"description",d,qt),o()};return c`
    <section class="profile-edit-dialog__section" aria-label="Bio editor">

      <label aria-label="Bio description" class="label profile-edit-dialog__bio-field-container">
        <span class="profile-edit-dialog__field-description">
          You can write about your years of experience, industry, or skills.
          People also talk about their achievements or previous job experiences.
        </span>
        <textarea
          class="profile-edit-dialog__textarea"
          name=${t}
          rows="5"
          .value=${e?.description||""}
          maxlength=${2600}
          aria-describedby=${n}
          data-contact-field="description"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Write a short bio"
          autocomplete="off"
          @input=${r}
        ></textarea>
        <small id=${n} aria-live="polite">${a}/${2600}</small>
      </label>
    </section>
  `}function Ia(e,o,t){let n=()=>Ia(e,o,t);U(c`
    ${Cc(o.bio,n)}
    ${t!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e)}function kc(e,o){let t=document.createElement("form");t.classList.add("profile__edit-form","profile__edit-form--bio");let n=vc(e);return Ia(t,n,o),{form:t,formState:n}}async function Ht(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=kc(n,i);await se({title:pn,dom:r,form:l,headerAction:{type:"none"},submitLabel:de,cancelLabel:pe,shouldCloseWithoutSave:()=>{let f=M([s.bio],qt);return f.create.length===0&&f.update.length===0&&f.remove.length===0},validate:()=>i!=="owner"?O:null,onSave:async()=>{let f=M([s.bio],qt);await $a(o,t,f)},formatSaveError:f=>f instanceof Error?f.message:co})&&a&&await a()}A(L(`.bio-card,
.bio-card__section {
	width: 100%;
	max-width: 100%;
	min-width: 0;
	box-sizing: border-box;
}

.profile-grid [data-profile-section='bio'].profile__section,
.profile-grid [data-profile-section='bio'].profile__section--empty {
	--bio-section-content-gap-desktop: 25px;
	--bio-section-content-gap-mobile: 15px;
	--line-height: 1.5;
}

.bio-card__description-wrap {
	margin: 0;
	position: relative;
	isolation: isolate;
	--bio-description-toggle-top: calc(100% - 1.5em + 0.28em - 11px);
	--bio-description-toggle-transform: translateY(7px);
}

.bio-section--empty {
	border-radius: 8px;
	gap: var(--bio-section-content-gap-desktop);
}

.profile-grid [data-profile-section='bio'].profile__section .profile-section-collapsible__header + .profile-section-collapsible__content {
	margin-top: var(--bio-section-content-gap-desktop);
}

.profile-grid [data-profile-section='bio'].profile__section--empty .profile__empty-state-content {
	gap: 10px;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .bio-section--empty {
	gap: var(--bio-section-content-gap-mobile);
}


:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='bio'].profile__section .profile-section-collapsible__header + .profile-section-collapsible__content {
	margin-top: var(--bio-section-content-gap-mobile);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='bio'].profile__section--empty .profile__empty-state-content {
	gap: var(--bio-section-content-gap-mobile);
}

.bio-card__description-text {
	margin: 0;
	width: 100%;
	max-width: none;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	line-height: var(--line-height);
	overflow: hidden;
}

.bio-card__description-text--overflowing {
	padding-right: 4.5rem;
}

.bio-card__description-text--expanded {
	display: block;
	-webkit-line-clamp: unset;
	line-clamp: unset;
	padding-right: 0;
	overflow: visible;
}


.bio-card__description-toggle,
solid-ui-button.bio-card__description-toggle {
	margin: 0;
	padding: 0;
	position: absolute;
	right: 0;
	bottom: 0;
	background-color: var(--color-card-bg, #FFF);
	white-space: nowrap;
	z-index: 0;
}

.bio-card__description-toggle {
	border: 0;
	background: transparent;
	color: var(--color-primary, #7C4DFF);
	font: inherit;
	font-size: var(--font-size-sm, 0.875rem);
	line-height: var(--line-height-base, 1.5);
	min-height: auto;
	min-width: auto;
	cursor: var(--profile-interactive-cursor, pointer);
}

solid-ui-button.bio-card__description-toggle[hidden],
.bio-card__description-toggle[hidden] {
	display: none !important;
}

.bio-card__description-wrap .bio-card__description-text:not(.bio-card__description-text--expanded) + .bio-card__description-toggle {
	top: var(--bio-description-toggle-top);
	bottom: auto;
	transform: var(--bio-description-toggle-transform);
}

.bio-card__description-text--expanded + .bio-card__description-toggle,
.bio-card__description-text--expanded + solid-ui-button.bio-card__description-toggle {
	position: static;
	display: block;
	width: fit-content;
	margin-left: auto;
	padding-left: 0;
	top: auto;
	bottom: auto;
	transform: none;
}

.bio-card__description-text--expanded + solid-ui-button.bio-card__description-toggle::part(button) {
	position: static;
	display: inline-flex;
	padding-left: 0;
	top: auto;
	bottom: auto;
	transform: none;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .bio-card__description-text {
	font-size: var(--font-size-sm, 0.875rem);
	line-height: var(--line-height);
	-webkit-line-clamp: 2;
	line-clamp: 2;
}

@container profile-pane (max-width: 576px) {
	.bio-section--empty {
		gap: var(--bio-section-content-gap-mobile);
	}

	.profile-grid [data-profile-section='bio'].profile__section .profile-section-collapsible__header + .profile-section-collapsible__content {
		margin-top: var(--bio-section-content-gap-mobile);
	}

	.profile-grid [data-profile-section='bio'].profile__section--empty .profile__empty-state-content {
		gap: var(--bio-section-content-gap-mobile);
	}

	.bio-card__description-text {
		font-size: var(--font-size-sm, 0.875rem);
		line-height: var(--line-height);
		-webkit-line-clamp: 2;
		line-clamp: 2;
	}

	.bio-card__description-wrap {
		--bio-description-toggle-top: calc(100% - 1.5em);
		--bio-description-toggle-transform: none;
	}
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .bio-card__description-wrap {
	--bio-description-toggle-top: calc(100% - 1.5em);
	--bio-description-toggle-transform: none;
}

@media (max-width: 576px) {
	.bio-section--empty {
		gap: var(--bio-section-content-gap-mobile);
	}

	.profile-grid [data-profile-section='bio'].profile__section .profile-section-collapsible__header + .profile-section-collapsible__content {
		margin-top: var(--bio-section-content-gap-mobile);
	}

	.profile-grid [data-profile-section='bio'].profile__section--empty .profile__empty-state-content {
		gap: var(--bio-section-content-gap-mobile);
	}

	.bio-card__description-text {
		font-size: var(--font-size-sm, 0.875rem);
		line-height: var(--line-height);
		-webkit-line-clamp: 2;
		line-clamp: 2;
	}

	.bio-card__description-wrap {
		--bio-description-toggle-top: calc(100% - 1.5em);
		--bio-description-toggle-transform: none;
	}
}
`,"text/css"));function Sc(e){if(!e)return c``;let o="bio-description";return c`
      ${e.description?c`
        <div class="bio-card__description-wrap">
          <p class="bio-card__description-text" id=${o}>${e.description}</p>
          <solid-ui-button
            variant="tertiary"
            class="bio-card__description-toggle"
            aria-controls=${o}
            aria-expanded="false"
            hidden
            @click=${To}
          >
            ...more
          </solid-ui-button>
        </div>
      `:""}
  `}function Nc(e){return!!(e?.description||"").trim()}var Ac=e=>c`
    <article class="bio-card" aria-label="Bio" data-testid="bio-card">
      <section class="bio-card__section">
        ${Sc(e)}
      </section>
    </article>
  `;function $c(e,o,t,n,i,a){let r=Ac(t),l=t;return c`
    <header class="profile__section-header profile-section-collapsible__header">
      <h2 id="bio-heading" tabindex="-1">${"Bio"}</h2>
        ${n==="owner"?c`
              ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit bio",onClick:d=>Ht(d,e,o,l,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${j}</span>`,desktopLabel:"Edit",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
            `:z}
    </header>
    <div class="profile-section-collapsible__content">
      ${r}
    </div>
  `}function Ic(e,o,t,n,i,a){return c`
    <section
      aria-labelledby="bio-heading"
      data-profile-section="bio"
      class="profile__section"
      role="region"
      tabindex="-1"
    >
      ${$c(e,o,t,n,i,a)}
    </section>
  `}function Tc(e,o,t,n,i){let a=t;return c`
    <div class="profile__empty-state-content" role="group" aria-label="Empty bio section">
      <h2 id="bio-heading" tabindex="-1">${"Bio"}</h2>
      <p class="profile__empty-state-message">
        You haven't added any professional experience yet. Adding work history can boost your Bio.
      </p>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      @click=${r=>Ht(r,e,o,a,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Fe}</span>
      <span class="profile__action-icon">Add Bio</span>
    </solid-ui-button>
  `}function Lc(e,o,t,n,i){return c`
    <section
      aria-labelledby="bio-heading"
      data-profile-section="bio"
      class="profile__section--empty profile__section--empty-main bio-section--empty"
      role="region"
      tabindex="-1"
    >
      ${Tc(e,o,t,n,i)}
    </section>
  `}function La(e,o,t,n,i,a){Ne();let r=i||"desktop",s=!Nc(t)&&n==="owner";return c`
    ${s?Lc(e,o,t,n,a):Ic(e,o,t,n,r,a)}
  `}var Ec="https://solidos.github.io/profile-pane/src/ontology/socialMedia.ttl#";function Fc(e){Ce(e,"soc",Ec)}function Gt(e){return`${e.termType}:${e.value}`}function Ea(e){let o=(e||"").trim();return o?o.startsWith("http://")||o.startsWith("https://")?T(o):P(o):null}function R(e){return typeof e=="string"?e.trim():e==null?"":String(e).trim()}function Pc(e,o){let t=R(e);if(!t)return"";let n=R(o);if(n){let i=t,a=n.toLowerCase();for(;i.toLowerCase().startsWith(a);)i=i.slice(n.length);if(i)return i;try{let r=new URL(t),l=new URL(n),s=m=>m.toLowerCase().replace(/^www\./,""),d=s(r.hostname),f=s(l.hostname),g=(l.pathname||"/").replace(/\/+$/,""),u=r.pathname||"/";if(d===f&&u.startsWith(g)){let m=u.slice(g.length).replace(/^\/+/,"");if(m)return m}}catch{}}return t.replace(/^https?:\/\//i,"").replace(/^www\./i,"")}function zc(e,o,t,n){let i=[];n?.classUri&&i.push(C(o,p.rdf("type"),T(n.classUri),e));let a=R(t.name);if(a.toLowerCase()==="other"||n?.classUri?.endsWith("#OtherAccount")){let d=Ea(t.homepage),f=Ea(t.icon);return d&&i.push(C(o,p.foaf("homepage"),d,e)),f&&i.push(C(o,p.foaf("icon"),f,e)),a&&a.toLowerCase()!=="other"&&i.push(C(o,p.rdfs("label"),P(a),e)),i}let l=n?.userProfilePrefix||n?.homepage,s=Pc(R(t.homepage),l);return s&&i.push(C(o,p.foaf("accountName"),P(s),e)),i}function Dc(e,o,t){if(!e.any(o,p.rdf("first"),null,t))return[];let n=new Set,i=[],a=o;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,p.rdf("rest"),null,t);if(!l||l.termType==="NamedNode"&&l.value===p.rdf("nil").value)break;a=l}return i}function Mc(e,o){let t=new Set(o.remove.map(r=>R(r.entryNode)).filter(Boolean)),n=new Map(o.update.map(r=>[R(r.entryNode),r]).filter(([r])=>!!r)),i=e.filter(r=>!t.has(R(r.entryNode))).map(r=>{let l=R(r.entryNode);return n.get(l)||r}),a=o.create.filter(r=>!!(R(r.name)||R(r.homepage)||R(r.icon)));return[...i,...a]}function Rc(e){return(e||[]).filter(o=>o.status!=="deleted").filter(o=>!!(R(o.name)||R(o.homepage)||R(o.icon)||R(o.entryNode))).map(o=>({name:R(o.name),icon:R(o.icon),homepage:R(o.homepage),entryNode:R(o.entryNode),status:o.status}))}async function Oc(e,o,t,n){Fc(e);let i=o.doc(),a=bo(e),r=_=>qe(a,R(_.name)),l=yo(o,e).accounts.map(_=>({name:R(_.name),icon:R(_.icon),homepage:R(_.homepage),entryNode:_.entryNode.value,status:"existing"})),s=n&&n.length?Rc(n):Mc(l,t),d=!!(e.updater?.serialize&&e.fetcher?.webOperation),f=e.each(o,p.foaf("account"),null,i),g=ze(f.flatMap(_=>Dc(e,_,i).flatMap(y=>e.statementsMatching(y,null,null,i)))),u=Array.from(new Map(f.flatMap(_=>ue(e,_)).filter(_=>_.termType==="NamedNode").map(_=>[`${_.termType}:${_.value}`,_])).values()),m=s.map(_=>{if(R(_.entryNode)){let y=Y(u,_.entryNode);if(y&&y.termType==="NamedNode")return y}return B(i)}),w=new Set(m.map(_=>Gt(_))),x=u.filter(_=>w.has(Gt(_))),S=u.filter(_=>!w.has(Gt(_))),b=[];m.length>0&&b.push(C(o,p.foaf("account"),new Xe(m),i)),s.forEach((_,y)=>{b.push(...zc(i,m[y],_,r(_)))});let h=ze([...e.statementsMatching(o,p.foaf("account"),null,i),...g,...S.flatMap(_=>ne(e,_,i)),...x.flatMap(_=>[...e.statementsMatching(_,p.rdf("type"),null,i),...e.statementsMatching(_,p.foaf("accountName"),null,i),...e.statementsMatching(_,p.foaf("homepage"),null,i),...e.statementsMatching(_,p.foaf("icon"),null,i),...e.statementsMatching(_,p.rdfs("label"),null,i)])]);await ee(e,i,h,ze(b),{unsupportedMessage:"Social updates are not supported by this store updater.",failureMessage:"Failed to save updates",forcePut:d,useDavFallback:!d,usePutFallback:!0})}async function Fa(e,o,t,n){try{await Oc(e,o,t,n)}catch(i){let a=i instanceof Error?i:new Error(String(i));throw ae(xn,a),new Error(so,{cause:a})}}A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
  --contact-info-dialog-contact-point-row-gap: 15px;
  --contact-info-dialog-contact-point-row-align: flex-start;
  --contact-info-dialog-contact-point-row-direction: row;
  --contact-info-dialog-contact-point-row-wrap: wrap;
  --contact-info-dialog-contact-point-field-flex: 1 1 auto;
  --contact-info-dialog-contact-point-type-width: 104px;
  --contact-info-dialog-contact-point-type-max-width: none;
  --contact-info-dialog-contact-point-actions-flex: 0 1 auto;
  --contact-info-dialog-contact-point-actions-margin-left: auto;
  --contact-info-dialog-contact-point-actions-justify: flex-start;
  --contact-info-dialog-contact-point-select-font-size: inherit;
  --contact-info-dialog-contact-point-select-line-height: inherit;
  gap: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section + .profile-edit-dialog__section {
  border-top: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  padding-top: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__contact-section-header {
  padding: 0;
  gap: 30px;
  margin-bottom: 0;
}

.profile__edit-form--contact-info .profile-edit-dialog__section fieldset {
  margin-top: 4px;
  gap: 12px;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-heading {
  margin: 0;
  color: var(--solid-ui-color-gray-700, #364153);
  font-size: var(--solid-ui-font-size-md, 1rem);
  font-weight: 500;
  line-height: normal;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon {
  display: inline-flex;
  width: 0.8333rem;
  height: 0.8333rem;
  flex: 0 0 0.8333rem;
  flex-shrink: 0;
  aspect-ratio: 1 / 1;
}

.profile__edit-form--contact-info .profile-edit-dialog__section-title-icon svg {
  width: 100%;
  height: 100%;
}

.profile-edit-dialog__row--contact-point {
  max-width: 100%;
  width: 100%;
  border: 0;
  outline: 0;
  box-shadow: none;
  flex-direction: var(--contact-info-dialog-contact-point-row-direction);
  align-items: var(--contact-info-dialog-contact-point-row-align);
  flex-wrap: var(--contact-info-dialog-contact-point-row-wrap);
  gap: var(--contact-info-dialog-contact-point-row-gap);
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point {
  margin-bottom: 12px;
}

.profile-edit-dialog__section fieldset > .profile-edit-dialog__row--contact-point:last-child {
  margin-bottom: 15px;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type,
.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  border: 0;
  outline: 0;
  box-shadow: none;
  background: transparent;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
  flex: var(--contact-info-dialog-contact-point-field-flex);
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > label.profile-edit-dialog__field {
  display: block;
  width: auto;
  min-width: 0;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field > .label {
  display: block;
  width: 100%;
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
  flex: 0 0 var(--contact-info-dialog-contact-point-type-width);
  width: var(--contact-info-dialog-contact-point-type-width);
  min-width: var(--contact-info-dialog-contact-point-type-width);
  max-width: var(--contact-info-dialog-contact-point-type-max-width);
}

.profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
  flex: var(--contact-info-dialog-contact-point-actions-flex);
  margin-left: var(--contact-info-dialog-contact-point-actions-margin-left);
  justify-content: var(--contact-info-dialog-contact-point-actions-justify);
}

#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
#profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  display: block;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.profile__edit-form--contact-info .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row > solid-ui-select,
.profile__edit-form--contact-info .profile-edit-dialog__field-type.emailTypeRow > solid-ui-select {
  font-size: var(--contact-info-dialog-contact-point-select-font-size);
  line-height: var(--contact-info-dialog-contact-point-select-line-height);
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full {
  max-width: 100%;
  width: 100%;
  align-items: center;
}

.profile-edit-dialog__row--address-header.profile-edit-dialog__row--full .profile-edit-dialog__actions {
  align-self: center;
}

.profile-edit-dialog__address-title {
  margin: 0;
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
  font-weight: 500;
  line-height: 1.5;
}

/* layout = mobile */
html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
  padding: 0;
}

html[data-layout='mobile'] #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading{
  font-size: var(--solid-ui-font-size-md, 1rem);
  line-height: 1.5;
}

/* Media and container rules are needed so that the phone and email rows
stay as one row instead of wrapping */
@media (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@container profile-pane (max-width: 768px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__section-heading,
  .profile__edit-form--contact-info .profile-edit-dialog__section-heading {
    font-size: var(--solid-ui-font-size-md, 1rem);
    line-height: 1.5;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point {
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      minmax(var(--contact-info-dialog-contact-point-type-width), var(--contact-info-dialog-contact-point-type-width))
      minmax(var(--min-touch-target, 44px), auto);
    align-items: start;
    column-gap: 10px;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.profile-edit-dialog__phone-type-row,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__field-type.emailTypeRow {
    justify-self: stretch;
    width: var(--contact-info-dialog-contact-point-type-width);
    min-width: var(--contact-info-dialog-contact-point-type-width);
    max-width: var(--contact-info-dialog-contact-point-type-max-width);
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions,
  .profile__edit-form--contact-info .profile-edit-dialog__row--contact-point > .profile-edit-dialog__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    align-self: start;
    margin-left: 0;
    justify-self: end;
  }

  .profile__edit-form--contact-info .profile-edit-dialog__section {
    --contact-info-dialog-contact-point-row-gap: 10px;
    --contact-info-dialog-contact-point-row-align: center;
    --contact-info-dialog-contact-point-row-direction: row;
    --contact-info-dialog-contact-point-row-wrap: nowrap;
    --contact-info-dialog-contact-point-field-flex: 1 1 0;
    --contact-info-dialog-contact-point-type-width: 88px;
    --contact-info-dialog-contact-point-type-max-width: 88px;
    --contact-info-dialog-contact-point-actions-flex: 0 0 auto;
    --contact-info-dialog-contact-point-actions-margin-left: 0;
    --contact-info-dialog-contact-point-actions-justify: flex-end;
    --contact-info-dialog-contact-point-select-font-size: 0.75rem;
    --contact-info-dialog-contact-point-select-line-height: 1.5;
  }
}

@media (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}

@container profile-pane (max-width: 576px) {
  #profile-modal .modal .profile__edit-form--contact-info .profile__section-header.profile-edit-dialog__contact-section-header {
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon {
    display: inline-flex;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
    padding: 0;
  }

  #profile-modal .modal .profile__edit-form--contact-info .profile-edit-dialog__contact-section-header .profile__add-more-icon svg {
    width: 100%;
    height: 100%;
  }
}
`,"text/css"));A(new URL("panes-profile-pane-src-styles-EditDialogs.css",Q));function Pa(e,o){let t=e.querySelector(o);if(!t)return;typeof t.scrollIntoView=="function"&&t.scrollIntoView({block:"start",behavior:"auto"});let n=e.ownerDocument.defaultView;if(!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){if(t.tagName==="SOLID-UI-COMBOBOX"){t.shadowRoot?.querySelector("input")?.focus();return}typeof t.focus=="function"&&t.focus()}}function jc(e){let o=e[0];return o&&[o.name,o.icon,o.homepage].some(E)?'[name="social-homepage-0"]':'[name="social-account-type-0"]'}function Oo(e){return $(e)}function Bc(e){return $(e).replace(/\s+/g,"")}function Ee(e){return E(e.homepage)}function Uc(e){let o=(e||[]).map(t=>({name:Oo(v(t.name)),icon:Oo(v(t.icon)),homepage:Oo(v(t.homepage)),entryNode:v(t.entryNode),status:v(t.entryNode)?"existing":"new"})).filter(t=>!!(t.name||t.icon||t.homepage||t.entryNode));return{socialAccounts:o.length?o:[{name:"",icon:"",homepage:"",entryNode:"",status:"new"}],initialExistingOrder:[]}}function Vc(e,o){let t=e.filter(n=>n.status!=="deleted"&&!!(n.entryNode||"").trim()).map(n=>(n.entryNode||"").trim());if(t.length!==o.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==o[n])return!0;return!1}function qc(e){for(let o=0;o<e.length;o++){let t=e[o];if(!(!t||t.status==="deleted"||![t.name,t.icon,t.homepage].some(E))){if(!E(t.name)||!E(t.icon))return`Social account ${o+1}: please choose an account type from the dropdown.`;if(!E(t.homepage))return`Social account ${o+1}: please enter your personal profile link.`}}return null}function Hc(e,o,t,n){let i=qe(t,e?.name||"");return c`
    <solid-ui-combobox
      select-only
      class="profile-edit-dialog__social-account-select"
      name=${`social-account-type-${o}`}
      autocomplete="off"
      .value=${i?.label||""}
      @change=${n}
    >
      ${t.map(a=>c`<solid-ui-combobox-option value=${a.label}>${a.label}</solid-ui-combobox-option>`)}
    </solid-ui-combobox>
  `}function Gc({rows:e,index:o,displayIndex:t,onDelete:n,onChange:i,options:a,onDragStart:r,onDragEnter:l,onDragOver:s,onDrop:d,onDragEnd:f,onPointerDown:g,onPointerMove:u,onPointerUp:m,onPointerCancel:w,isDropTarget:x}){let S=e[o],b=`Social Account Name ${t+1}`,h=`Social Account Homepage ${t+1}`,_=k=>J=>{let he=J.target,jo=k==="homepage"?Bc(he.value):Oo(he.value);e[o]&&(I(e[o],k,jo,Ee),i())},y=k=>{let J=k;if(!J.detail.option)return;let he=qe(a,String(J.detail.option.value));if(e[o]){if(!he){I(e[o],"name","",Ee),I(e[o],"icon","",Ee),i();return}I(e[o],"name",he.label,Ee),I(e[o],"icon",he.icon||$e,Ee),i()}},Z=k=>{k.preventDefault(),n()};return c`
    <div
      class="profile-edit-dialog__row profile-edit-dialog__row--social ${x?"profile-edit-dialog__row--drop-target":""}"
      data-social-reorder-index=${String(o)}
      @dragenter=${()=>l(o)}
      @dragover=${k=>s(k,o)}
      @drop=${k=>d(k,o)}
    >
      <solid-ui-button
        class="profile-edit-dialog__drag-handle"
        variant="ghost"
        aria-label=${`Reorder social account ${t+1}`}
        title="Drag to reorder"
        draggable="true"
        @dragstart=${k=>r(k,o)}
        @dragend=${()=>f()}
        @pointerdown=${k=>g(k,o)}
        @pointermove=${k=>u(k)}
        @pointerup=${k=>m(k)}
        @pointercancel=${k=>w(k)}
      >
        <span slot="icon" aria-hidden="true">${go}</span>
      </solid-ui-button>
      <img
        class="profile-edit-dialog__social-icon"
        src="${S?.icon||$e}"
        alt="${S?.name||"Social"} icon"
        width="30"
        height="30"
        loading="lazy"
      />
      <label aria-label=${b} class="label profile-edit-dialog__field profile-edit-dialog__field--social-type">
        ${Hc(S,o,a,y)}
      </label>
      <label aria-label=${h} class="label profile-edit-dialog__field profile-edit-dialog__field--social-url">
        <input
          class="input"
          type="text"
          name=${`social-homepage-${o}`}
          .value=${S?.homepage||""}
          data-contact-field="homepage"
          data-entry-node=${S?.entryNode||""}
          data-row-status=${S?.status||"n/a"}
          placeholder="Profile link or handle"
          autocomplete="off"
          inputmode="text"
          required
          @input=${_("homepage")}
        />
          <small class="profile-edit-dialog__input-help-text">Enter your profile link, handle, or username.</small>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete social account ${t+1}`}
          title=${fe}
          @click=${Z}
        >
          <span slot="icon" aria-hidden="true">${me}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function Wc(e,o,t){let n=null,i=null,a=null,r=(h,_)=>{if(h===_)return;let y=e[h];y&&(e.splice(h,1),e.splice(_,0,y))},l=(h,_)=>{n=_,i=_,h.dataTransfer&&(h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",String(_)))},s=h=>{n!==null&&(i=h)},d=(h,_)=>{h.preventDefault(),n!==null&&(i=_),h.dataTransfer&&(h.dataTransfer.dropEffect="move")},f=(h,_)=>{h.preventDefault();let y=h.dataTransfer?.getData("text/plain"),Z=n??(y?Number(y):null);Z===null||Number.isNaN(Z)||(r(Z,_),n=null,i=null,t())},g=()=>{n=null,i=null},u=h=>{let y=(h.currentTarget?.ownerDocument||document).elementFromPoint(h.clientX,h.clientY)?.closest("[data-social-reorder-index]");if(!y)return;let Z=Number(y.dataset.socialReorderIndex);Number.isNaN(Z)||(i=Z)},m=(h,_)=>{h.pointerType==="touch"&&(h.preventDefault(),n=_,i=_,a=h.pointerId,h.currentTarget?.setPointerCapture?.(h.pointerId))},w=h=>{h.pointerType!=="touch"||a!==h.pointerId||n===null||(h.preventDefault(),u(h))},x=h=>{if(h.pointerType!=="touch"||a!==h.pointerId)return;h.preventDefault(),u(h);let _=n,y=i;h.currentTarget?.releasePointerCapture?.(h.pointerId),a=null,n=null,i=null,!(_===null||y===null||_===y)&&(r(_,y),t())},S=h=>{h.pointerType!=="touch"||a!==h.pointerId||(h.currentTarget?.releasePointerCapture?.(h.pointerId),a=null,n=null,i=null)},b=e.map((h,_)=>({row:h,index:_})).filter(({row:h})=>h.status!=="deleted");return c`
    <section class="profile-edit-dialog__section" aria-label="Social Accounts">
      <fieldset>
        <legend class="sr-only">Social account entries</legend>
        ${b.map(({index:h},_)=>Gc({rows:e,index:h,displayIndex:_,onDelete:()=>{ge(e,h),t()},onChange:t,options:o,onDragStart:l,onDragEnter:s,onDragOver:d,onDrop:f,onDragEnd:g,onPointerDown:m,onPointerMove:w,onPointerUp:x,onPointerCancel:S,isDropTarget:i===h}))}
      </fieldset>
    </section>
  `}function Wt(e,o,t,n,i={}){let a=(l={})=>Wt(e,o,t,n,l),r=bo(t);U(c`
    ${Wc(o.socialAccounts,r,a)}
    ${n!=="owner"?c`<p class="profile-edit-dialog__login-message">${O}</p>`:null}
  `,e),i.focusSelector&&Pa(e,i.focusSelector)}function Kc(e,o,t){let n=document.createElement("form");n.classList.add("profile__edit-form");let i=Uc(e);return i.initialExistingOrder=i.socialAccounts.filter(r=>!!(r.entryNode||"").trim()).map(r=>(r.entryNode||"").trim()),Wt(n,i,o,t),{form:n,formState:i,addRow:()=>{i.socialAccounts.unshift({name:"",icon:"",homepage:"",entryNode:"",status:"new"}),Wt(n,i,o,t,{focusSelector:'[name="social-account-type-0"]'})}}}async function Kt(e,o,t,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:d}=Kc(n,o,i);await se({title:dn,dom:r,form:l,onOpen:()=>Pa(l,jc(s.socialAccounts)),shouldCloseWithoutSave:()=>{let g=M(s.socialAccounts,Ee),u=Vc(s.socialAccounts,s.initialExistingOrder);return g.create.length===0&&g.update.length===0&&g.remove.length===0&&!u},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another social account",onClick:d},submitLabel:de,cancelLabel:pe,validate:()=>i!=="owner"?O:qc(s.socialAccounts),onSave:async()=>{let g=M(s.socialAccounts,Ee),u={create:g.create,update:g.update,remove:g.remove};await Fa(o,t,u,s.socialAccounts)},formatSaveError:g=>g instanceof Error?g.message:so})&&a&&await a()}A(L(`.profile__section[data-profile-section='social'],
.profile__section--empty[data-profile-section='social'] {
  --social-card-collapsed-columns: repeat(5, max-content);
  --social-card-icon-size: var(--icon-base, 2rem);
  --social-card-list-display: flex;
  --social-card-list-columns: none;
  --social-card-hidden-item-display: flex;
  --social-card-more-button-display: none;
  border: 1px solid var(--color-border-lighter, #D1D5DB);
}

.profile__section--empty[data-profile-section='social'] {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-card,
.social-card__list {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.social-card__list {
  display: var(--social-card-list-display);
  grid-template-columns: var(--social-card-list-columns);
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.social-card__item,
.social-card__link,
.profile__section--empty[data-profile-section='social'] .profile__empty-state-content {
  display: flex;
  align-items: center;
}

.profile__section--empty[data-profile-section='social'] .profile__empty-state-content {
  flex-direction: column;
  gap: 10px;
}

.social__empty-icon {
  display: inline-flex;
}

/* Links */
.social-card__link {
  color: var(--solid-ui-color-primary, #7C4DFF);
  text-decoration: none;
  gap: 12px;
  padding: 12px;
  border-radius: 5px;
  transition: transform var(--animation-duration, 0.2s) ease;
  position: relative;
  flex: 1;
  min-width: 0;
}

.social-card__link:hover,
.social-card__link:focus {
  text-decoration: none;
  transform: translateY(-1px);
}

.social-card__link[href^="http"]:after {
  content: " (external link)";
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.social-card__more-button {
  display: var(--social-card-more-button-display);
  padding: 0;
  border: 0;
}

.social-card__icon {
  width: var(--social-card-icon-size);
  height: var(--social-card-icon-size);
  border-radius: 5px;
  background: var(--solid-ui-color-white, #FFFFFF);
  flex-shrink: 0;
}

.social-card[data-mobile-expanded="false"] .social-card__item:nth-child(n + 11) {
  display: var(--social-card-hidden-item-display);
}

.social-card[data-mobile-expanded="true"] {
  --social-card-list-columns: repeat(3, max-content);
  --social-card-hidden-item-display: flex;
  --social-card-more-button-display: none;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section[data-profile-section='social'],
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section--empty[data-profile-section='social'] {
  --social-card-list-display: grid;
  --social-card-list-columns: var(--social-card-collapsed-columns);
  --social-card-hidden-item-display: none;
  --social-card-more-button-display: inline-flex;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .social-card .social-card__list {
  justify-content: flex-start;
}

@media (max-width: 768px) {
    .profile__section[data-profile-section='social'],
  .profile__section--empty[data-profile-section='social'] {
    --social-card-list-display: grid;
    --social-card-list-columns: var(--social-card-collapsed-columns);
    --social-card-hidden-item-display: none;
    --social-card-more-button-display: inline-flex;
  }

  .social-card .social-card__list {
    justify-content: flex-start;
  }
}

@container profile-pane (max-width: 768px) {
    .profile__section[data-profile-section='social'],
  .profile__section--empty[data-profile-section='social'] {
    --social-card-list-display: grid;
    --social-card-list-columns: var(--social-card-collapsed-columns);
    --social-card-hidden-item-display: none;
    --social-card-more-button-display: inline-flex;
  }

  .social-card .social-card__list {
    justify-content: flex-start;
  }
}`,"text/css"));var Yc=10;function Zc(e){return!!(e?.homepage&&e?.name&&e?.icon)}function Jc(e){let o=e.currentTarget,t=o?.closest(".social-card");!o||!t||(t.setAttribute("data-mobile-expanded","true"),o.setAttribute("aria-expanded","true"),o.hidden=!0)}var Qc=(e,o)=>{let t=(e.accounts||[]).filter(Zc),n=Math.max(0,t.length-Yc);if(t.length)return c`
      <section
        id="social-media"
        class="social-card"
        aria-label="Social media"
        SocialData: SocialPresentation
      >
        <nav aria-label="Social media profiles">
          <ul class="social-card__list" role="list">
            ${t.map(a=>i(a))}
          </ul>
        </nav>
        ${n>0?c`
              <solid-ui-button
                variant="tertiary"
                class="social-card__more-button"
                aria-controls="social-media"
                aria-expanded="false"
                @click=${Jc}
              >
                ${n} more
              </solid-ui-button>
            `:c``}
      </section>
    `;return c``;function i(a){return c`
      <li class="social-card__item" role="listitem">
        <a
          class="social-card__link"
          href="${a.homepage}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit ${a.name} profile (opens in new tab)"
        >
          <img
            class="social-card__icon"
            src="${a.icon}"
            alt="${a.name} icon"
            width="40"
            height="40"
            loading="lazy"
          />
        </a>
      </li>
    `}};function Xc(e,o){let t=e.accounts&&e.accounts.length>0;return c`
    ${t?Qc(e,o):c`<p>No social accounts added yet.</p>`}
  `}function ed(e,o,t,n,i,a){return c`
        <section
          aria-labelledby="social-heading"
          data-profile-section="social"
          class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
          role="region"
          tabindex="-1"
          data-expanded="false"
        >
          <header class="profile__section-header profile-section-collapsible__header">
            <h3 id="social-heading" tabindex="-1">${qo}</h3>
            <div class="profile-section-collapsible__actions">
             ${n==="owner"?c`
                ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit social accounts",onClick:l=>Kt(l,e,o,t.accounts,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
              `:z}
              <solid-ui-button
                variant="ghost"
                class="profile-section-collapsible__toggle-button"
                aria-label="Toggle social accounts section"
                aria-controls="social-panel"
                aria-expanded="false"
                @click=${H}
              >
                <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
              </solid-ui-button>
            </div>
          </header>
          <div id="social-panel" class="profile-section-collapsible__content">
            ${Xc(t,n)}
          </div>
        </section>
      `}function od(){return c`
      <div class="profile__empty-state-content" role="group" aria-label="Empty social accounts section">
        <div class="social__empty-icon-wrapper">
          <span class="social__empty-icon">${Vn}</span>
        </div>
      </div>
  `}function td(e,o,t,n,i,a){return c`
    <section
      aria-labelledby="social-heading"
      data-profile-section="social"
      class="profile__section--empty profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="social-heading" tabindex="-1">${qo}</h3>
        <div class="profile-section-collapsible__actions">
          ${G({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add social accounts",onClick:r=>Kt(r,e,o,t.accounts,n,a),desktopIcon:c`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${V}</span>`,desktopLabel:"Add More",mobileIcon:c`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${j}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle social accounts section"
            aria-controls="social-panel"
            aria-expanded="false"
            @click=${H}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${q}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="social-panel" class="profile-section-collapsible__content">
        ${od()}
      </div>
    </section>
  `}function Yt(e,o,t,n,i,a){let r=i||"desktop",l=t||{accounts:[]},d=!(Array.isArray(l.accounts)&&l.accounts.length>0)&&n==="owner";return c`
    ${d?td(e,o,l,n,r,a):ed(e,o,l,n,r,a)}
  `}A(L(`/* QR code section styles. */

.profile__qr-code {
  --qrcode-card-gap: var(--spacing-md, 1.25rem);
  --qrcode-card-caption-color: var(--color-text-strong-secondary, var(--gray-800, #1E2939));
  --qrcode-card-caption-size: var(--font-size-md, 1rem);
  --qrcode-card-caption-size-compact: var(--font-size-sm, 0.875rem);
  --qrcode-card-caption-weight: var(--font-weight-md, 500);
  --qrcode-card-image-padding: 1.0625rem;
  --qrcode-card-frame-border: var(--border-width-thin, 0.1rem) solid var(--color-border, var(--gray-200, #E5E7EB));
  --qrcode-card-frame-background: var(--color-surface-framed-content, #F3F4F6);
  --qrcode-section-padding-compact: var(--spacing-sm, 0.938rem);
  --qrcode-section-gap-compact: var(--spacing-2xs, 0.625rem);
  border-radius: var(--border-radius-base, 0.3125rem);
  background: var(--color-card-bg, var(--white, #FFF));
  border: var(--border-width-thin, 0.1rem) solid var(--color-border-lighter, #E2E8F0);
}

/* Caption */
.qrcode-card__caption {
  text-align: center;
  margin: 0;
  color: var(--qrcode-card-caption-color);
  font-size: var(--qrcode-card-caption-size);
  font-weight: var(--qrcode-card-caption-weight);
}

/* Card and frame */
.qrcode-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--qrcode-card-gap);
  align-self: stretch;
}

.qrcode-card__frame {
  margin: 0;
  padding: var(--qrcode-card-image-padding);
  border-radius: var(--border-radius-base, 0.3125rem);
  border: var(--qrcode-card-frame-border);
  background: var(--qrcode-card-frame-background);
}

/* QR image */
.qrcode-card__image {
  flex-shrink: 0;
  aspect-ratio: 1/1;
}

.qrcode-card__image svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* Compact layout */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__qr-code {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: var(--qrcode-section-padding-compact);
  gap: var(--qrcode-section-gap-compact);
}

@container profile-pane (max-width: 576px) {
  .profile__qr-code {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    padding: var(--qrcode-section-padding-compact);
    gap: var(--qrcode-section-gap-compact);
  }
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .qrcode-card__caption {
  font-size: var(--qrcode-card-caption-size-compact);
}

@media (max-width: 576px) {
  .profile__qr-code {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    padding: var(--qrcode-section-padding-compact);
    gap: var(--qrcode-section-gap-compact);
  }

  .qrcode-card__caption {
    font-size: var(--qrcode-card-caption-size-compact);
  }
}

@container profile-pane (max-width: 576px) {
  .qrcode-card__caption {
    font-size: var(--qrcode-card-caption-size-compact);
  }
}`,"text/css"));function Zt(e,o){return c`
      <section class="profile__section profile__qr-code" data-profile-section="qr-code" aria-labelledby="qr-heading" tabindex="-1">
        <h3 id="qr-heading" class="sr-only">QR code</h3>
        ${Nn(e,o)}
      </section>
  `}A(L(`:root {
  --profile-image-size: 3rem;
  --profile-interactive-cursor: pointer;
}

.profile-pane-host {
  display: block;
  width: 100%;
  min-width: 100%;
  max-width: none;
  box-sizing: border-box;
}

.profile-pane-root {
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  container-name: profile-pane;
  container-type: inline-size;
}

:is(.profile-pane-host, .profile-pane-root)[data-input-mode='touch'] {
  --profile-interactive-cursor: auto;
}

:is(.profile-pane-host, .profile-pane-root)[data-input-mode='pointer'] {
  --profile-interactive-cursor: pointer;
}

td.obj .profile-pane-root {
  width: 100%;
  max-width: 100%;
  min-width: 0;
}

/* Shared controls */
.profile__section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.profile__section-header:not(.profile-edit-dialog__contact-section-header) h2,
.profile__section-header:not(.profile-edit-dialog__contact-section-header) h3,
.profile__section-header:not(.profile-edit-dialog__contact-section-header) h4 {
  margin: 0;
  font-size: 1.375rem;
  font-weight: 500;
}

.profile__add-more-icon {
  margin-right: 0;
  line-height: 0;
  position: relative;
  top: 0;
  transform: translateY(0);
}

.profile__add-more-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

solid-ui-button.profile__btn-friends,
solid-ui-button.profile__btn-contacts {
  width: auto;
  min-width: 0;
  max-width: none;
}

/* Base grid layout */
.profile-grid {
  --profile-main-section-min-width: 600px;
  --profile-sidebar-min-width: 300px;
  --profile-sidebar-width: clamp(var(--profile-sidebar-min-width), 33.333%, 350px);
  --profile-sidebar-section-padding: 25px;
  --profile-mobile-section-padding: 15px;
  --profile-stacked-section-gap: 15px;
  font-size: inherit;
  display: grid;
  grid-template-columns:
    minmax(var(--profile-main-section-min-width), 1fr)
    minmax(var(--profile-sidebar-min-width), var(--profile-sidebar-width));
  align-items: start;
  column-gap: 5px;
  row-gap: 20px;
  padding-top: 0;
}

/* Grid columns and wrappers */
.profile-grid .profile__main,
.profile-grid .profile__intro-main,
.profile-grid .profile__intro-sidebar,
.profile-grid .profile__sidebar,
.profile-grid .profile__section,
.profile-grid .profile__section--empty {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.profile-grid .profile__main {
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 0;
  overflow-wrap: anywhere;
  align-items: flex-start;
}

.profile-grid .profile__intro-main,
.profile-grid .profile__intro-sidebar {
  display: flex;
  flex-direction: column;
}

.profile-grid .profile__intro-main {
  grid-column: 1;
  grid-row: 1;
  align-self: stretch;
}

.profile-grid .profile__intro-sidebar {
  grid-column: 2;
  grid-row: 1;
  align-self: stretch;
  min-width: var(--profile-sidebar-min-width);
  padding-block: 0;
  padding-inline: 15px;
  background: transparent;
  border-radius: 0;
}

.profile-grid > .profile__sidebar:not(.profile__intro-sidebar) {
  grid-row: 1;
}

.profile-grid .profile__intro-sidebar > .profile__section,
.profile-grid .profile__intro-sidebar > .profile__section--empty {
  flex: 1 1 auto;
  height: 100%;
}

.profile-grid .profile__intro-sidebar > [data-profile-section='social'] {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;
}

.profile-grid .profile__intro-sidebar > [data-profile-section='social'] > .profile-section-collapsible__content {
  flex: 1 1 auto;
}

.profile-grid .profile__sidebar:not(.profile__intro-sidebar) {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  min-width: var(--profile-sidebar-min-width);
  padding-left: 15px;
  align-items: stretch;
  text-align: left;
  border-radius: 5px;
  background: var(--color-background, #F8F9FB);
  overflow-x: clip;
}

.profile-grid .profile__sidebar-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: var(--profile-sidebar-min-width);
}

.profile-grid .profile__intro-sidebar > .profile__section,
.profile-grid .profile__intro-sidebar > .profile__section--empty,
.profile-grid .profile__sidebar-content > .profile__section,
.profile-grid .profile__sidebar-content > .profile__section--empty {
  min-width: var(--profile-sidebar-min-width);
}

.profile-grid .profile__intro-main > .profile__section,
.profile-grid .profile__intro-main > .profile__section--empty,
.profile-grid .profile__main > .profile__section,
.profile-grid .profile__main > .profile__section--empty {
  min-width: var(--profile-main-section-min-width);
}

.profile-grid > .profile__sidebar:not(.profile__intro-sidebar) {
  padding-top: 0;
}

/* Section cards */
.profile-grid .profile__section,
.profile-grid .profile__section--empty {
  background: var(--solid-ui-color-white, #FFFFFF);
  border: 1px solid var(--solid-ui-color-slate-200, #E2E8F0);
  overflow-x: clip;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.profile-grid .profile__section {
  padding: 25px;
  border-radius: 5px;
}

.profile-grid .profile__section:hover,
.profile-grid .profile__section--empty:hover {
  box-shadow: 0 8px 10px rgba(124, 77, 255, 0.1);
}

.profile-grid .profile__section.profile-section-collapsible {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.profile-grid .profile__section--empty {
  padding: 40px 25px;
}

.profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
.profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
.profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
.profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
.profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
.profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
.profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
.profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
  padding: var(--profile-sidebar-section-padding);
}

/* Empty states */
.profile-grid solid-ui-button.profile__action-button--empty {
  width: fit-content;
}

.profile-grid solid-ui-button.profile__action-button--empty .profile__action-icon[slot='left-icon'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.profile-grid solid-ui-button.profile__action-button--empty .profile__action-icon[slot='left-icon'] icon-lucide-plus {
  display: block;
}

.profile-grid solid-ui-button.profile__action-button--empty:hover .profile__action-icon svg path,
.profile-grid solid-ui-button.profile__action-button--empty:focus-visible .profile__action-icon svg path,
.profile-grid solid-ui-button.profile__action-button--empty:focus-within .profile__action-icon svg path {
  stroke: var(--solid-ui-color-white, #FFFFFF);
  fill: var(--solid-ui-color-white, #FFFFFF);
}

.profile-grid .profile__empty-state-message {
  color: var(--solid-ui-color-gray-400, #99A1AF);
  text-align: center;
  font-size: 0.813rem;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
}

.profile-grid .profile__empty-state-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.profile-grid .profile__intro-main > .profile__section--empty.profile__section--empty-main,
.profile-grid .profile__main > .profile__section--empty.profile__section--empty-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.profile-grid .profile__intro-sidebar > .profile__section--empty.profile__section--empty-sidebar,
.profile-grid .profile__sidebar-content > .profile__section--empty.profile__section--empty-sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-grid .profile__empty-state-content > h2,
.profile-grid .profile__empty-state-content > p {
  margin: 0;
}

.profile-grid .profile__empty-state-content > h2 {
  font-size: 1.375rem;
  font-weight: 500;
}

.profile-grid .profile__section--empty.profile__section--empty-main .profile__empty-state-message {
  margin-bottom: 0;
}

.profile-grid .profile__section--empty .profile-section-collapsible__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-grid .profile__section--empty.profile__section--empty-main .profile-section-collapsible__content {
  gap: 25px;
}

.profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
.profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
  display: none;
}

.profile-grid .profile__section--empty.profile__section--empty-main > .profile-section-collapsible__content > .profile__empty-state-content {
  gap: 10px;
}

.profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__content,
.profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__content {
  margin-top: 0;
}

/* Theme */
.profile-pane-host[data-theme='dark'] .profile-grid .profile__section,
.profile-pane-host[data-theme='dark'] .profile-grid .profile__section--empty {
  border: 1px solid var(--color-border, #444);
}

/* App-driven mobile layout, independent of viewport width. */
.profile-pane-host[data-layout='mobile'] .profile-grid {
  font-size: clamp(0.9rem, 1.1vw + 0.65rem, 1rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--profile-stacked-section-gap);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-inline: 5px;
  overflow-x: clip;
}

/* App-driven mobile: flatten wrappers */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-main,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-sidebar,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__main,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content {
  display: contents;
}

/* App-driven mobile: section ordering */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='heading'] { order: 1; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='bio'] { order: 2; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='skills'] { order: 3; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='languages'] { order: 4; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='resume'] { order: 5; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='projects'] { order: 6; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='social'] { order: 7; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='contact-info'] { order: 8; }
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='qr-code'] { order: 9; }

/* App-driven mobile: interaction and typography */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__action-button {
  min-height: calc(var(--solid-ui-clickable-area, 42px) + 8px) !important;
  font-size: clamp(0.9rem, 2.1vw, 1rem) !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section-header:not(.profile-edit-dialog__contact-section-header) h2,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section-header:not(.profile-edit-dialog__contact-section-header) h3,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section-header:not(.profile-edit-dialog__contact-section-header) h4 {
  font-size: var(--profile-mobile-section-heading-size) !important;
  line-height: 1.2 !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .friends-pane__header-name {
  font-size: 1.5rem !important;
  line-height: 1.15 !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .friends-pane__header-pronouns,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .friends-pane__friends-pronouns {
  font-size: 0.6875rem !important;
  line-height: 1.1 !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__empty-state-content > h2,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .resume-card__section h3 {
  font-size: var(--profile-mobile-section-heading-size) !important;
  line-height: 1.2 !important;
}

/* App-driven mobile: cards and sidebar */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* Keep all mobile section cards at 15px padding across layout, media, and container fallbacks. */
  padding: var(--profile-mobile-section-padding);
  border-radius: 5px;
  border: 1px solid var(--solid-ui-color-gray-100, #F3F4F6);
  background: var(--solid-ui-color-white, #FFFFFF);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='social'].profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='social'].profile__section--empty {
  border: none;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar {
  padding: 0 !important;
  min-width: 0;
  border-radius: 0;
  background: transparent;
  align-self: stretch;
}

/* App-driven mobile: width and sidebar padding overrides */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-sidebar > .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-sidebar > .profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-main > .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-main > .profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__main > .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__main > .profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > .profile__section--empty {
  min-width: 0;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-sidebar > .profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__intro-sidebar > .profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
  padding: var(--profile-mobile-section-padding);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section.profile-section-collapsible {
  gap: 20px;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty.profile-section-collapsible {
  gap: 10px;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
  display: flex;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='projects'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid [data-profile-section='resume'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2 {
  display: none;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty .profile__action-button--empty {
  align-self: center;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty .profile__empty-state-content {
  align-items: center;
  text-align: center;
  width: 100%;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty .profile__empty-state-content > h2,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-grid .profile__section--empty .profile__empty-state-content > p {
  text-align: center;
  width: 100%;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section--empty .profile-section-collapsible__actions > .profile-section-collapsible__edit-button {
  order: 2;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section--empty .profile-section-collapsible__edit-label {
  display: none !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] [data-profile-section='bio'].profile__section--empty .profile-section-collapsible__actions {
  --profile-section-collapsible-action-button-text: var(--color-text-primary, #314158);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__section--empty .profile-section-collapsible__edit-icon {
  display: inline-flex !important;
}

/* Container width guard for embedded panes */
@container profile-pane (max-width: 56.5625rem) {
  #main-content.profile-grid {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin-inline: auto !important;
  }
}

/* Viewport fallback only when layout state is unavailable. */
@media (max-width: 56.5625rem) {
  /* Viewport stacked: layout shell */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid {
    font-size: clamp(0.9rem, 1.1vw + 0.65rem, 1rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--profile-stacked-section-gap);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding-inline: 5px;
    overflow-x: clip;
  }

  /* Viewport stacked: interaction and wrappers */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__action-button {
    min-height: calc(var(--solid-ui-clickable-area, 42px) + 8px) !important;
    font-size: clamp(0.9rem, 2.1vw, 1rem) !important;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-main,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__main,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content {
    display: contents;
    min-width: 0;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar:not(.profile__intro-sidebar) {
    padding: 0 !important;
    display: contents;
    border-radius: 0;
    background: transparent;
    align-self: stretch;
  }

  /* Viewport stacked: section ordering */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='heading'] { order: 1; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='bio'] { order: 2; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='skills'] { order: 3; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='languages'] { order: 4; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='resume'] { order: 5; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='projects'] { order: 6; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='social'] { order: 7; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='contact-info'] { order: 8; }
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='qr-code'] { order: 9; }

  /* Viewport stacked: typography */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section-header:not(.profile-edit-dialog__contact-section-header) h2,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section-header:not(.profile-edit-dialog__contact-section-header) h3,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section-header:not(.profile-edit-dialog__contact-section-header) h4 {
    font-size: var(--profile-mobile-section-heading-size) !important;
    line-height: 1.2 !important;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .friends-pane__header-name {
    font-size: 1.5rem !important;
    line-height: 1.15 !important;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .friends-pane__header-pronouns,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .friends-pane__friends-pronouns {
    font-size: 0.6875rem !important;
    line-height: 1.1 !important;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--profile-mobile-section-padding);
    border-radius: 5px;
    border: 1px solid var(--color-border-subtle, var(--gray-100, #F3F4F6));
    background: var(--solid-ui-color-white, #FFFFFF);
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='social'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='social'].profile__section--empty {
    border: none;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='bio'].profile__section--empty .profile-section-collapsible__actions {
    --profile-section-collapsible-action-button-text: var(--color-text-primary, #314158);
  }

  /* Viewport stacked: width and sidebar padding overrides */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-main > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-main > .profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__main > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__main > .profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > .profile__section--empty {
    min-width: 0;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
    padding: var(--profile-mobile-section-padding);
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section.profile-section-collapsible {
    gap: 20px;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty.profile-section-collapsible {
    gap: 10px;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
    display: flex;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='projects'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='resume'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2 {
    display: none;
  }
}

/* Container-driven stacked layout */
@container profile-pane (max-width: 56.5625rem) {
  /* Container stacked: layout shell */
  .profile-grid {
    font-size: clamp(0.9rem, 1.1vw + 0.65rem, 1rem);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--profile-stacked-section-gap);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    overflow-x: clip;
  }

  /* Container stacked: interaction and wrappers */
  .profile-grid .profile__action-button {
    min-height: calc(var(--solid-ui-clickable-area, 42px) + 0.5rem) !important;
    font-size: clamp(0.9rem, 2.1vw, 1rem) !important;
  }

  .profile-grid .profile__intro-main,
  .profile-grid .profile__intro-sidebar,
  .profile-grid .profile__main,
  .profile-grid .profile__sidebar,
  .profile-grid .profile__sidebar-content {
    display: contents;
    min-width: 0;
  }

  .profile-grid .profile__sidebar:not(.profile__intro-sidebar) {
    padding: 0 !important;
    display: contents;
    border-radius: 0;
    background: transparent;
    align-self: stretch;
  }

  /* Container stacked: section ordering */
  .profile-grid [data-profile-section='heading'] { order: 1; }
  .profile-grid [data-profile-section='bio'] { order: 2; }
  .profile-grid [data-profile-section='skills'] { order: 3; }
  .profile-grid [data-profile-section='languages'] { order: 4; }
  .profile-grid [data-profile-section='resume'] { order: 5; }
  .profile-grid [data-profile-section='projects'] { order: 6; }
  .profile-grid [data-profile-section='social'] { order: 7; }
  .profile-grid [data-profile-section='contact-info'] { order: 8; }
  .profile-grid [data-profile-section='qr-code'] { order: 9; }

  /* Container stacked: typography */
  .profile__section-header:not(.profile-edit-dialog__contact-section-header) h2,
  .profile__section-header:not(.profile-edit-dialog__contact-section-header) h3,
  .profile__section-header:not(.profile-edit-dialog__contact-section-header) h4 {
    font-size: var(--profile-mobile-section-heading-size) !important;
    line-height: 1.2 !important;
  }

  .profile-grid .friends-pane__header-name {
    font-size: 1.5rem !important;
    line-height: 1.15 !important;
  }

  .profile-grid .friends-pane__header-pronouns,
  .profile-grid .friends-pane__friends-pronouns {
    font-size: 0.6875rem !important;
    line-height: 1.1 !important;
  }

  .profile-grid .profile__section,
  .profile-grid .profile__section--empty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--profile-mobile-section-padding);
    border-radius: 5px;
    border: 1px solid var(--solid-ui-color-gray-100, #F3F4F6);
    background: var(--solid-ui-color-white, #FFF);
  }

  .profile-grid [data-profile-section='social'].profile__section,
  .profile-grid [data-profile-section='social'].profile__section--empty {
    border: none;
  }

  .profile-grid [data-profile-section='bio'].profile__section--empty .profile-section-collapsible__actions {
    --profile-section-collapsible-action-button-text: var(--color-text-primary, #314158);
  }

  /* Container stacked: width and sidebar padding overrides */
  .profile-grid .profile__intro-sidebar > .profile__section,
  .profile-grid .profile__intro-sidebar > .profile__section--empty,
  .profile-grid .profile__intro-main > .profile__section,
  .profile-grid .profile__intro-main > .profile__section--empty,
  .profile-grid .profile__main > .profile__section,
  .profile-grid .profile__main > .profile__section--empty,
  .profile-grid .profile__sidebar-content > .profile__section,
  .profile-grid .profile__sidebar-content > .profile__section--empty {
    min-width: 0;
  }

  .profile-grid .profile__intro-sidebar > .profile__section,
  .profile-grid .profile__intro-sidebar > .profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
    padding: var(--profile-mobile-section-padding);
  }

  .profile-grid .profile__section.profile-section-collapsible {
    gap: 20px;
  }

  .profile-grid .profile__section--empty.profile-section-collapsible {
    gap: 10px;
  }

  .profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
  .profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
    display: flex;
  }

  .profile-grid [data-profile-section='projects'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2,
  .profile-grid [data-profile-section='resume'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2 {
    display: none;
  }
}

/* Narrow-phone fallback once the layout is already stacked. */
@media (max-width: 576px) {
  /* Narrow viewport: cards and sidebar */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar:not(.profile__intro-sidebar) {
    padding: 0 !important;
    display: contents;
    border-radius: 0;
    background: transparent;
    align-self: stretch;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--profile-mobile-section-padding);
    border-radius: 5px;
    border: 1px solid var(--solid-ui-color-gray-100, #F3F4F6);
    background: var(--solid-ui-color-white, #FFFFFF);
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__intro-sidebar > .profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
    padding: var(--profile-mobile-section-padding);
  }

  /* Narrow viewport: empty states */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
    display: flex;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='projects'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid [data-profile-section='resume'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2 {
    display: none;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty .profile__action-button--empty {
    align-self: center;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty .profile__empty-state-content {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty .profile__empty-state-content > h2,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__section--empty .profile__empty-state-content > p {
    text-align: center;
    width: 100%;
  }

  /* Narrow viewport: typography */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .profile__empty-state-content > h2,
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile-grid .resume-card__section h3 {
    font-size: var(--profile-mobile-section-heading-size) !important;
    line-height: 1.2 !important;
  }

  /* Narrow viewport: empty-state edit actions */
  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section--empty .profile-section-collapsible__actions > .profile-section-collapsible__edit-button {
    order: 2;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section--empty .profile-section-collapsible__edit-label {
    display: none !important;
  }

  :is(.profile-pane-host, .profile-pane-root):not([data-layout]) .profile__section--empty .profile-section-collapsible__edit-icon {
    display: inline-flex !important;
  }
}

/* Narrow container fallback */
@container profile-pane (max-width: 576px) {
  /* Narrow container: cards and sidebar */
  .profile-grid .profile__sidebar:not(.profile__intro-sidebar) {
    padding: 0 !important;
    display: contents;
    border-radius: 0;
    background: transparent;
    align-self: stretch;
  }

  .profile-grid .profile__section,
  .profile-grid .profile__section--empty {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: var(--profile-mobile-section-padding);
    border-radius: 5px;
    border: 1px solid var(--solid-ui-color-gray-100, #F3F4F6);
    background: var(--solid-ui-color-white, #FFFFFF);
  }

  .profile-grid .profile__intro-sidebar > .profile__section,
  .profile-grid .profile__intro-sidebar > .profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='social'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='skills'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='languages'].profile__section--empty,
  .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section,
  .profile-grid .profile__sidebar-content > [data-profile-section='contact-info'].profile__section--empty {
    padding: var(--profile-mobile-section-padding);
  }

  /* Narrow container: empty states */
  .profile-grid [data-profile-section='projects'].profile__section--empty > .profile-section-collapsible__header,
  .profile-grid [data-profile-section='resume'].profile__section--empty > .profile-section-collapsible__header {
    display: flex;
  }

  .profile-grid [data-profile-section='projects'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2,
  .profile-grid [data-profile-section='resume'].profile__section--empty .profile-section-collapsible__content .profile__empty-state-content > h2 {
    display: none;
  }

  .profile-grid .profile__section--empty .profile__action-button--empty {
    align-self: center;
  }

  .profile-grid .profile__section--empty .profile__empty-state-content {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .profile-grid .profile__section--empty .profile__empty-state-content > h2,
  .profile-grid .profile__section--empty .profile__empty-state-content > p {
    text-align: center;
    width: 100%;
  }

  /* Narrow container: empty-state edit actions */
  .profile__section--empty .profile-section-collapsible__actions > .profile-section-collapsible__edit-button {
    order: 2;
  }

  .profile__section--empty .profile-section-collapsible__edit-label {
    display: none !important;
  }

  .profile__section--empty .profile-section-collapsible__edit-icon {
    display: inline-flex !important;
  }
}
`,"text/css"));A(L(`.profile-section-collapsible {
  display: block;
}

.profile__section--empty.profile-section-collapsible {
  gap: 25px;
  border-radius: 8px;
}

.profile-section-collapsible__header {
  margin-bottom: 0;
}

.profile-section-collapsible__content {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
}

.profile-section-collapsible__content > :first-child {
  margin-top: 0;
}

.profile-section-collapsible__content > :last-child {
  margin-bottom: 0;
}

/* Actions */
.profile-section-collapsible__actions {
  --profile-section-collapsible-mobile-action-gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-top: -4px;
}

.profile-section-collapsible__edit-button {
  min-width: 0;
}

.profile-section-collapsible__edit-button icon-lucide-pencil,
solid-ui-button .profile__add-more-icon icon-lucide-plus {
  color: var(--solid-ui-color-primary, #7C4DFF);
}

/* On hover/focus, inherit the button's own hover text color. */
.profile-section-collapsible__edit-button:hover icon-lucide-pencil,
.profile-section-collapsible__edit-button:focus-visible icon-lucide-pencil,
solid-ui-button:hover .profile__add-more-icon icon-lucide-plus,
solid-ui-button:focus-visible .profile__add-more-icon icon-lucide-plus {
  color: inherit;
}

.profile-section-collapsible__action-label {
  font-size: var(--solid-ui-font-size-sm, .875rem);
}

.profile-section-collapsible__toggle-button {
  display: none !important;
  width: var(--solid-ui-clickable-area, 42px);
  height: var(--solid-ui-clickable-area, 42px);
}

/* Icons */
.profile-section-collapsible__edit-icon {
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  line-height: 0;
}

.profile-section-collapsible__edit-icon svg {
  display: block;
  margin: auto;
}

.profile-section-collapsible__chevron {
  flex: 0 0 auto;
  width: 0.75rem;
  height: 0.4375rem;
  line-height: 0;
  transition: transform var(--animation-duration, 0.2s) ease;
}

.profile-section-collapsible__chevron svg {
  display: block;
  width: 100%;
  height: 100%;
}

.profile-section-collapsible__edit-icon--add svg path {
  fill: var(--solid-ui-color-gray-800, #1E2939) !important;
}

/* App-driven mobile layout when the host/root explicitly sets data-layout. */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--inline-mobile-actions > .profile-section-collapsible__header h2 {
  flex: 1 1 auto;
  min-width: 0;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__actions {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: var(--profile-section-collapsible-mobile-action-gap);
  margin-top: 0;
  flex: 0 0 auto;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__edit-button {
  display: inline-flex !important;
  order: 1;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__actions.flex-column {
  gap: var(--profile-section-collapsible-mobile-action-gap);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__toggle-button {
  order: 2;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__edit-button,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__toggle-button {
  width: var(--solid-ui-clickable-area, 42px);
  height: var(--solid-ui-clickable-area, 42px);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible[data-expanded="false"] .profile-section-collapsible__content {
  display: none;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__chevron {
  transform: rotate(180deg);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__chevron {
  width: 1.125rem;
  height: 0.75rem;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__action-label,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__edit-label {
  display: none !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__edit-icon {
  display: inline-flex;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible .profile-section-collapsible__edit-button {
  display: none !important;
  order: 2;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-button,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-button,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-icon,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-icon {
  display: none !important;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__edit-button,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__toggle-button {
  display: inline-flex !important;
}

/* Viewport fallback when no explicit layout attribute is available. */
@media (min-width: 769px) {
  .profile-section-collapsible > .profile-section-collapsible__content {
    display: block;
  }

  .profile-section-collapsible__action-label svg,
  .profile__action-icon svg {
    width: 0.75rem;
    height: 0.75rem;
    position: relative;
    top: 0;
  }

  .profile-section-collapsible__action-label svg path {
    fill: currentColor;
  }

  .profile-section-collapsible__action-label {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xxs, 0.3125rem);
    transform: translateY(0);
  }

  .profile-section-collapsible__edit-icon {
    display: none;
  }
}

/* Container-driven desktop fallback for wide panes inside a mixed viewport. */
@container profile-pane (min-width: 769px) {
  .profile-section-collapsible > .profile-section-collapsible__content {
    display: block;
  }

  .profile-section-collapsible__action-label svg,
  .profile__action-icon svg {
    width: 0.75rem;
    height: 0.75rem;
    position: relative;
    top: 0;
  }

  .profile-section-collapsible__action-label svg path {
    fill: currentColor;
  }

  .profile-section-collapsible__action-label {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xxs, 0.3125rem);
    transform: translateY(0);
  }

  .profile-section-collapsible__edit-icon {
    display: none;
  }
}

/* Viewport fallback for mobile-width panes when no explicit layout attribute is available. */
@media (max-width: 768px) {
  .profile-section-collapsible__edit-label {
    display: none !important;
  }
  .profile-section-collapsible--inline-mobile-actions > .profile-section-collapsible__header h2 {
    flex: 1 1 auto;
    min-width: 0;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__actions {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: var(--profile-section-collapsible-mobile-action-gap);
    margin-top: 0;
    flex: 0 0 auto;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__edit-button {
    display: inline-flex !important;
    order: 1;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__toggle-button {
    order: 2;
  }

  .profile-section-collapsible__edit-button,
  .profile-section-collapsible__toggle-button {
    width: var(--solid-ui-clickable-area, 42px);
    height: var(--solid-ui-clickable-area, 42px);
  }

  .profile-section-collapsible[data-expanded="false"] .profile-section-collapsible__content {
    display: none;
  }

  .profile-section-collapsible__actions.flex-column {
    gap: var(--profile-section-collapsible-mobile-action-gap);
  }

  .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__chevron {
    transform: rotate(180deg);
  }

  .profile-section-collapsible__chevron {
    width: 1.125rem;
    height: 0.75rem;
  }

  .profile-section-collapsible__action-label {
    display: none !important;
  }

  .profile-section-collapsible__edit-icon {
    display: inline-flex;
  }

  .profile-section-collapsible .profile-section-collapsible__edit-button {
    display: none !important;
    order: 2;
  }

  .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-button,
  .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-button,
  .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-icon,
  .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-icon {
    display: none !important;
  }

  .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__edit-button,
  .profile-section-collapsible__toggle-button {
    display: inline-flex !important;
  }
}

/* Container-driven fallback for mobile-width panes inside a wider viewport. */
@container profile-pane (max-width: 768px) {
  .profile-section-collapsible__edit-label {
    display: none !important;
  }
  .profile-section-collapsible--inline-mobile-actions > .profile-section-collapsible__header h2 {
    flex: 1 1 auto;
    min-width: 0;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__actions {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: var(--profile-section-collapsible-mobile-action-gap);
    margin-top: 0;
    flex: 0 0 auto;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__edit-button {
    display: inline-flex !important;
    order: 1;
  }

  .profile-section-collapsible--inline-mobile-actions .profile-section-collapsible__toggle-button {
    order: 2;
  }

  .profile-section-collapsible__edit-button,
  .profile-section-collapsible__toggle-button {
    width: var(--solid-ui-clickable-area, 42px);
    height: var(--solid-ui-clickable-area, 42px);
  }

  .profile-section-collapsible[data-expanded="false"] .profile-section-collapsible__content {
    display: none;
  }

  .profile-section-collapsible__actions.flex-column {
    gap: var(--profile-section-collapsible-mobile-action-gap);
  }

  .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__chevron {
    transform: rotate(180deg);
  }

  .profile-section-collapsible__chevron {
    width: 1.125rem;
    height: 0.75rem;
  }

  .profile-section-collapsible__action-label {
    display: none !important;
  }

  .profile-section-collapsible__edit-icon {
    display: inline-flex;
  }

  .profile-section-collapsible .profile-section-collapsible__edit-button {
    display: none !important;
    order: 2;
  }

  .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-button,
  .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-button,
  .profile-section-collapsible--empty-mobile-no-edit .profile-section-collapsible__edit-icon,
  .profile-section-collapsible--empty-mobile-no-edit[data-expanded="true"] .profile-section-collapsible__edit-icon {
    display: none !important;
  }

  .profile-section-collapsible[data-expanded="true"] .profile-section-collapsible__edit-button,
  .profile-section-collapsible__toggle-button {
    display: inline-flex !important;
  }
}
`,"text/css"));function nd(e,o,t,n,i,a,r,l,s){return c`
    <div
      class="profile__sidebar"
    >
      <aside class="profile__sidebar-content" aria-labelledby="profile-sidebar-heading">
        <h2 id="profile-sidebar-heading" class="sr-only">Profile sidebar</h2>
        ${Yt(e,o,t,r,l,s)}
        ${Dt(e,o,n,r,l,s)}
        ${Et(e,o,i,r,l,s)}
        ${At(e,o,a,r,l,s)}
        ${Zt(o,e)}
      </aside>
    </div>
  `}async function th(e,o,t,n){let i=o.session.store,a=await nn(e),r=o.environment?.theme??"light",l=o.environment?.inputMode??"pointer",s=await hi(e,i),d=s.cvDetails,f=s.skills,g=s.languages,u=s.projects,m=s.bioDetails,w=s.social,x=s.contactInfo,S=La(i,e,m,a,t,n),b=Dt(i,e,f,a,t,n),h=Et(i,e,g,a,t,n),_=xa(i,e,d,a,t,n),y=Aa(i,e,u,a,t,n),Z=Yt(i,e,w,a,t,n),k=At(i,e,x,a,t,n),J=Zt(e,i);return t==="mobile"?c`
      <div
        class="profile-pane-root"
        data-layout=${t}
        data-theme=${r}
        data-input-mode=${l}
      >
        <main
          id="main-content"
          class="profile-grid"
          tabindex="-1"
        >
          ${S}
          ${b}
          ${h}
          ${_}
          ${y}
          ${Z}
          ${k}
          ${J}
        </main>
      </div>
    `:c`
    <div
      class="profile-pane-root"
      data-layout=${t}
      data-theme=${r}
      data-input-mode=${l}
    >
      <div
        id="main-content"
        class="profile-grid"
        tabindex="-1"
      >

        <section class="profile__main">
          ${S}
          ${_}
          ${y}

        </section>
        ${nd(i,e,w,f,g,x,a,t,n)}
      </div>
    </div>
  `}export{th as ProfileView};
