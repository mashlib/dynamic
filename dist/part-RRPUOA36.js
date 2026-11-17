import{e as n}from"./part-ZQLT3JNE.js";import{a as o}from"./part-AHAYGN5G.js";import{b as i}from"./part-5ZTE77ED.js";import{html as e}from"lit";function t(u,r,s){return o(u,class extends i{constructor(){super(),n(this)}render(){return e`
        <slot name="trigger" @click=${this.onClick}>
          <solid-ui-button>
              <slot>
                  ${r}
              </slot>
          </solid-ui-button>
        </slot>
      `}click(){this.auth[s]()}onClick(l){l.preventDefault(),this.click()}})}var h=t("solid-ui-login-button","Log In","login"),f=t("solid-ui-logout-button","Log Out","logout"),b=t("solid-ui-signup-button","Sign Up","signup");export{h as a,f as b,b as c};
