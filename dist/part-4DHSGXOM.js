import{d as f}from"./part-D7Z64I5T.js";import{a as l}from"./part-VJTDSXSH.js";import{html as M}from"lit-html";import"rdflib";function k(...e){console.log(...e)}function B(...e){console.warn(...e)}function u(...e){console.error(...e)}import*as h from"qrcode";var L="Add as friend",I="Log in to add as friend";var q="Already a friend";var H="Edit Skills",j="Edit Languages",P="Edit More Contacts",Q="Edit Resume";var $="Add Projects & Communities",V="Edit Heading",Y="Edit Social Links",_="Edit Bio",W="Save Changes",z="Cancel",G="Paste",O="Delete entry";var K="Current user not found! Not logged in?",X="Friend was added!";var Z="Friend already exists";var ee="You need to log in as the profile owner to save contact updates.",te="Unable to save your contact information.",oe="Unable to save your heading information.",re="Unable to save your languages.",ae="Unable to save your skills.",ne="Unable to save your resume.";var se="Unable to save your project data.",ie="Unable to unfollow the project.",ce="Unable to save your social accounts.",de="Unable to save your bio.",le="Bio mutation save failed";var ue="Contact info mutation save failed";var pe="Heading mutation save failed",xe="Language mutation save failed",ge="Projects mutation save failed",fe="Resume mutation save failed",me="Skills mutation save failed",Te="Social mutation save failed",ve="Could not find existing resume entry for update. Please reload profile data and try again.",be="Store does not support updates",ye="Failed to save updates";var he="Resume";var Ee="Skills",Me="Languages",Se="Projects & Communities",Ue="More Contacts",Ae="Contact Info",De="Follow me on";var m="Add to Contacts";function T(e){return!!(e&&typeof e=="object"&&typeof e.uri=="string")}function v(e){return!!(e&&typeof e=="object"&&typeof e.any=="function")}function S(e,t,r){if(T(e))return{subject:e,store:v(t)?t:void 0};if(T(r))return{subject:r,store:v(t)?t:void 0};throw new Error("QRCodeCard requires a profile subject NamedNode.")}function b(e){return(e||"").trim().replace(/^mailto:/i,"")}function y(e){return(e||"").trim().replace(/^tel:/i,"")}function U(e){let t=(e||"").trim();return t?/^mailto:/i.test(t)?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):!1}function A(e){let t=(e||"").trim();return t?/^tel:/i.test(t)?!0:/^[+()\-\s\d]{5,}$/.test(t):!1}function C(e,t,r,o){if(!e)return"";let n=e.each(t,r),s=o==="email"?U:A;for(let a of n){if(!a)continue;let i=a.value;if(typeof i=="string"&&s(i))return o==="email"?b(i):y(i);if(a.termType==="NamedNode"||a.termType==="BlankNode"){let g=t.doc(),p=e.statementsMatching(a,l.vcard("value"),null,g),x=e.statementsMatching(a,l.vcard("value"));for(let c of[...p,...x]){let d=c.object?.value;if(typeof d=="string"&&s(d))return o==="email"?b(d):y(d)}}}return""}var D={type:"svg",margin:0,width:151,color:{dark:"#000000",light:"#ffffff00"}};function F(e){return new Promise((t,r)=>{h.toString(e,D,(o,n)=>{if(o){r(o);return}t(n)})})}async function R(e){let t=e.getAttribute("data-value");if(!t){u("QRCode data-value missing");return}let r=e.querySelector(".qrcode-card__image");if(!r){u("QRCode image container missing");return}try{r.innerHTML=await F(t)}catch(o){u("QRcode error!",o)}}async function Ye(e){let t=Array.from(e.querySelectorAll(".qrcode-card"));if(!t.length){u("QRCode Ele missing");return}await Promise.all(t.map(r=>R(r)))}var _e=(e,t,r)=>{let{subject:o,store:n}=S(e,t,r),s=f.label(o),a=E=>(E||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\r?\n/g,"\\n"),i=a(s||o.uri),g=a(o.uri),p=C(n,o,l.vcard("hasEmail"),"email"),x=C(n,o,l.vcard("hasTelephone"),"tel"),c=["BEGIN:VCARD","VERSION:4.0",`FN:${i}`,`URL:${g}`];p&&c.push(`EMAIL;TYPE=internet:${a(p)}`),x&&c.push(`TEL:${a(x)}`),c.push("END:VCARD");let d=c.join(`\r
`);return M`
    <figure
      class="qrcode-card"
      data-value="${d}"
      data-testid="qrcode-card"
      aria-labelledby="qr-code-caption"
      aria-describedby="qr-code-description"
    >
      <div class="qrcode-card__frame">
        <div
          class="qrcode-card__image"
          aria-label="Static QR code containing contact information for ${s}"
          role="img"
          tabindex="0"
        >
        </div>
      </div>
      <figcaption
        id="qr-code-caption"
        class="qrcode-card__caption"
      >
        ${m}
      </figcaption>
      <div
        id="qr-code-description"
        class="sr-only"
      >
        This is a static QR code containing vCard information for ${s}, including profile URL ${o.uri}. The QR code is not interactive.
      </div>
    </figure>
  `};export{L as a,I as b,q as c,H as d,j as e,P as f,Q as g,$ as h,V as i,Y as j,_ as k,W as l,z as m,G as n,O as o,K as p,X as q,Z as r,ee as s,te as t,oe as u,re as v,ae as w,ne as x,se as y,ie as z,ce as A,de as B,le as C,ue as D,pe as E,xe as F,ge as G,fe as H,me as I,Te as J,ve as K,be as L,ye as M,he as N,Ee as O,Me as P,Se as Q,Ue as R,Ae as S,De as T,k as U,B as V,u as W,R as X,Ye as Y,_e as Z};
