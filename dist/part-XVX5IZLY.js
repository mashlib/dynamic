import{c as l}from"./part-GPLAS2FA.js";import{a as s,e as i,g as c}from"./part-VOCLXBLR.js";var d=new Set;function f(e){let n=String(e);if(d.has(n)||typeof document>"u")return;d.add(n);let o=document.createElement("link");o.rel="stylesheet",o.href=n,document.head.append(o)}f(l(`.sourcePaneStatus {
  display: none;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
}

.sourcePaneStatus[data-visible='true'] {
  display: block;
}

.sourcePaneStatus pre {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
`,"text/css"));function g(e=document){function n(r,t={}){let a=e.querySelector(".sourcePaneStatus");if(a){if(a.querySelector("solid-ui-error-state")?.getAttribute("title")&&!t.title)return;a.dataset.visible="true",c(s`
        <solid-ui-error-state title=${t.title??""} message=${r} @close=${u}>
          ${t.onRetry?s`<button type="button" @click=${t.onRetry}>Try again</button>`:i}
          ${t.details?s`<details><summary>Technical details</summary><pre>${t.details}</pre></details>`:i}
        </solid-ui-error-state>
      `,a)}}function o(r){let t=e.querySelector(".sourcePaneStatus");t&&(t.dataset.visible="true",c(s`<p class="sourcePaneStatusMessage">${r}</p>`,t))}function u(){let r=e.querySelector(".sourcePaneStatus");r&&(r.dataset.visible="false",c(i,r))}function m(){return s`
      <section
        class="sourcePaneStatus"
        data-visible="false"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
      </section>
    `}return{renderStatusSection:m,showError:n,showStatus:o,clearError:u}}var v=Symbol("source");function k(...e){console.log(...e)}function q(...e){console.warn(...e)}function C(...e){console.error(...e)}export{f as a,k as b,q as c,C as d,g as e,v as f};
