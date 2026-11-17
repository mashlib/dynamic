import{c as l}from"./part-USTJ2YCK.js";var d=new Set;function f(e){let s=String(e);if(d.has(s)||typeof document>"u")return;d.add(s);let n=document.createElement("link");n.rel="stylesheet",n.href=s,document.head.append(n)}import{html as o,nothing as i,render as c}from"lit";f(l(`.sourcePaneStatus {
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
`,"text/css"));function w(e=document){function s(r,t={}){let a=e.querySelector(".sourcePaneStatus");if(a){if(a.querySelector("solid-ui-error-state")?.getAttribute("title")&&!t.title)return;a.dataset.visible="true",c(o`
        <solid-ui-error-state title=${t.title??""} message=${r} @close=${u}>
          ${t.onRetry?o`<button type="button" @click=${t.onRetry}>Try again</button>`:i}
          ${t.details?o`<details><summary>Technical details</summary><pre>${t.details}</pre></details>`:i}
        </solid-ui-error-state>
      `,a)}}function n(r){let t=e.querySelector(".sourcePaneStatus");t&&(t.dataset.visible="true",c(o`<p class="sourcePaneStatusMessage">${r}</p>`,t))}function u(){let r=e.querySelector(".sourcePaneStatus");r&&(r.dataset.visible="false",c(i,r))}function m(){return o`
      <section
        class="sourcePaneStatus"
        data-visible="false"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
      </section>
    `}return{renderStatusSection:m,showError:s,showStatus:n,clearError:u}}import{createContext as p}from"@lit/context";var v=p(Symbol("source"));function k(...e){console.log(...e)}function q(...e){console.warn(...e)}function C(...e){console.error(...e)}export{f as a,k as b,q as c,C as d,w as e,v as f};
