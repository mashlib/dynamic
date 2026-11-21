import{a as o}from"./part-HGODWX5M.js";import{e as n}from"./part-FI5O6ZH7.js";import{b as u}from"./part-VHSBPZHI.js";import{a as i}from"./part-VOCLXBLR.js";function t(r,s,l){return o(r,class extends u{constructor(){super(),n(this)}render(){return i`
        <slot name="trigger" @click=${this.onClick}>
          <solid-ui-button>
              <slot>
                  ${s}
              </slot>
          </solid-ui-button>
        </slot>
      `}click(){this.auth[l]()}onClick(e){e.preventDefault(),this.click()}})}var h=t("solid-ui-login-button","Log In","login"),f=t("solid-ui-logout-button","Log Out","logout"),b=t("solid-ui-signup-button","Sign Up","signup");export{h as a,f as b,b as c};
