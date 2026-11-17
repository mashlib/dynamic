import"./part-EIRTXWCC.js";import"./part-G4ZLGXVV.js";import"./part-BB2AHQ6X.js";import{A as Lt,B as $t,C as bi,D as yi,E as wi,F as vi,G as xi,H as Ci,I as ki,J as Ai,K as Ni,L as ae,M as Si,N as Pt,O as xo,P as Co,Q as Ft,R as Ti,S as Ii,T as ko,U as Ei,V as Li,W as V,Z as $i,a as yo,b as ii,c as wo,d as ai,e as ri,f as li,g as si,h as ci,i as di,j as pi,k as fi,l as se,m as ce,n as ui,o as ye,p as vo,q as mi,r as gi,s as z,t as Nt,u as St,v as Tt,w as It,x as Et,y as _i,z as hi}from"./part-4DHSGXOM.js";import"./part-65PJWB3H.js";import"./part-MLTE2ZTF.js";import"./part-4RHLBPWQ.js";import"./part-BC7GSLCS.js";import"./part-4MBXPQ3J.js";import"./part-TKTGPRZR.js";import"./part-GEEMM4JM.js";import{H as ze,d as Te,o as ni}from"./part-D7Z64I5T.js";import"./part-7MK2NELE.js";import"./part-ZQLT3JNE.js";import"./part-V2462Q6D.js";import{a as d}from"./part-VJTDSXSH.js";import"./part-Y2MD4J7K.js";import"./part-AVHV3I4Q.js";import"./part-G7QL3VVZ.js";import"./part-NJPCHXFX.js";import"./part-6HVGRC2X.js";import"./part-6NERXNP3.js";import"./part-YM77XAUU.js";import"./part-GWZG2FUI.js";import"./part-SX7PWH6P.js";import"./part-AHAYGN5G.js";import"./part-5ZTE77ED.js";import{b as E,c as L}from"./part-USTJ2YCK.js";var Pi=new Set;function A(e){let t=String(e);if(Pi.has(t)||typeof document>"u")return;Pi.add(t);let o=document.createElement("link");o.rel="stylesheet",o.href=t,document.head.append(o)}import{html as Xn}from"lit-html";import"rdflib";import"rdflib";import"rdflib";import"rdflib";function we(e,t){let o=new Set;function n(i){let a=i.termType||typeof i,r=i.value||String(i),l=`${a}:${r}`;if(o.has(l))return[];o.add(l);let s=i.elements;if(Array.isArray(s))return s.flatMap(f=>n(f));if(!e.any(i,d.rdf("first")))return[i];let p=[],u=i;for(;u;){let f=e.any(u,d.rdf("first"));f&&p.push(...n(f));let m=e.any(u,d.rdf("rest"));if(!m||m.termType==="NamedNode"&&m.value===d.rdf("nil").value)break;u=m}return p}return n(t)}import{graph as Il,parse as El,sym as Ll}from"rdflib";import{html as q}from"lit-html";var Fi=q`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M13.3327 13.9999V8.66659C13.3327 8.31296 13.1922 7.97382 12.9422 7.72378C12.6921 7.47373 12.353 7.33325 11.9993 7.33325H3.99935C3.64573 7.33325 3.30659 7.47373 3.05654 7.72378C2.80649 7.97382 2.66602 8.31296 2.66602 8.66659V13.9999" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.66602 10.6667C2.66602 10.6667 2.99935 10 3.99935 10C4.99935 10 5.66602 11.3333 6.66602 11.3333C7.66602 11.3333 8.33268 10 9.33268 10C10.3327 10 10.9993 11.3333 11.9993 11.3333C12.9993 11.3333 13.3327 10.6667 13.3327 10.6667" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.33398 14H14.6673" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.66602 5.33325V7.33325" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 5.33325V7.33325" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.334 5.33325V7.33325" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.66602 2.66675H4.67268" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 2.66675H8.00667" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.334 2.66675H11.3407" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Qe=q`
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
`,Di=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M11.254 3.08785C11.4818 2.86004 11.8513 2.86004 12.0791 3.08785C12.3066 3.31559 12.3066 3.68451 12.0791 3.91226L5.66216 10.3292C5.55282 10.4385 5.40458 10.5 5.24996 10.5001C5.09525 10.5001 4.94646 10.4386 4.83707 10.3292L1.92085 7.41226C1.69305 7.18445 1.69305 6.81565 1.92085 6.58785C2.14866 6.36004 2.51746 6.36004 2.74527 6.58785L5.24927 9.09117L11.254 3.08785Z" fill="#7C4DFF"/>
  </svg>
`,Ze=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M2.91602 7H11.0827" stroke="#314158" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 2.9165V11.0832" stroke="#314158" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,du=q`
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
`,ve=q`
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
`,Dt=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M6.75 9.75C7.16421 9.75 7.5 9.41421 7.5 9C7.5 8.58579 7.16421 8.25 6.75 8.25C6.33579 8.25 6 8.58579 6 9C6 9.41421 6.33579 9.75 6.75 9.75Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.75 4.5C7.16421 4.5 7.5 4.16421 7.5 3.75C7.5 3.33579 7.16421 3 6.75 3C6.33579 3 6 3.33579 6 3.75C6 4.16421 6.33579 4.5 6.75 4.5Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.75 15C7.16421 15 7.5 14.6642 7.5 14.25C7.5 13.8358 7.16421 13.5 6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.25 9.75C11.6642 9.75 12 9.41421 12 9C12 8.58579 11.6642 8.25 11.25 8.25C10.8358 8.25 10.5 8.58579 10.5 9C10.5 9.41421 10.8358 9.75 11.25 9.75Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.25 4.5C11.6642 4.5 12 4.16421 12 3.75C12 3.33579 11.6642 3 11.25 3C10.8358 3 10.5 3.33579 10.5 3.75C10.5 4.16421 10.8358 4.5 11.25 4.5Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.25 15C11.6642 15 12 14.6642 12 14.25C12 13.8358 11.6642 13.5 11.25 13.5C10.8358 13.5 10.5 13.8358 10.5 14.25C10.5 14.6642 10.8358 15 11.25 15Z" stroke="#99A1AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,zt=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect width="30" height="30" rx="5" fill="black" fill-opacity="0.2"/>
    <path d="M14.1093 6.74536C14.4804 6.01811 15.5196 6.01811 15.8907 6.74536L17.7665 10.4209C17.9118 10.7056 18.1844 10.9037 18.5001 10.9539L22.5754 11.6021C23.3817 11.7303 23.7028 12.7186 23.1259 13.2963L20.2099 16.216C19.984 16.4422 19.8798 16.7627 19.9296 17.0785L20.5726 21.1546C20.6998 21.9611 19.8591 22.5719 19.1314 22.2017L15.4534 20.3307C15.1685 20.1857 14.8315 20.1857 14.5466 20.3307L10.8686 22.2017C10.1409 22.5719 9.30023 21.9611 9.42744 21.1546L10.0704 17.0785C10.1202 16.7627 10.016 16.4422 9.79012 16.216L6.87413 13.2963C6.29716 12.7186 6.61827 11.7303 7.42462 11.6021L11.4999 10.9539C11.8156 10.9037 12.0882 10.7056 12.2335 10.4209L14.1093 6.74536Z" fill="#F4F4F4"/>
  </svg>
`,Y=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <g clip-path="url(#clip0_3001_349)">
    <path d="M6.06055 0.10083C6.53372 0.101056 6.91793 0.485037 6.91797 0.958252V5.20532H11.165C11.6384 5.20532 12.0225 5.58936 12.0225 6.06274C12.0223 6.536 11.6383 6.92017 11.165 6.92017H6.91797V11.1663C6.91797 11.6395 6.53374 12.0235 6.06055 12.0237C5.58716 12.0237 5.20312 11.6396 5.20312 11.1663V6.92017H0.957031C0.483929 6.91994 0.0997601 6.53586 0.0996094 6.06274C0.0996094 5.5895 0.483837 5.20555 0.957031 5.20532H5.20312V0.958252C5.20316 0.484897 5.58718 0.10083 6.06055 0.10083Z" fill="#7C4DFF"/>
    </g>
    <defs>
    <clipPath id="clip0_3001_349">
    <rect width="12" height="12" fill="white"/>
    </clipPath>
    </defs>
  </svg>
`,K=q`
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true" focusable="false">
    <path d="M10.1831 0.183058C10.4271 -0.061018 10.8228 -0.061015 11.0668 0.183058C11.3109 0.427136 11.3109 0.82277 11.0668 1.06685L6.06685 6.06685C5.82277 6.31093 5.42714 6.31093 5.18306 6.06685L0.183058 1.06685C-0.0610194 0.82277 -0.0610194 0.427136 0.183058 0.183058C0.427136 -0.0610194 0.82277 -0.0610194 1.06685 0.183058L5.62495 4.74116L10.1831 0.183058Z" fill="#6A7282"/>
  </svg>
`,zi=q`
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
`,Mi=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#E5E7EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M24 4C18.8645 9.39231 16 16.5535 16 24C16 31.4465 18.8645 38.6077 24 44C29.1355 38.6077 32 31.4465 32 24C32 16.5535 29.1355 9.39231 24 4Z" stroke="#E5E7EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4 24H44" stroke="#E5E7EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Ri=q`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    width="33"
    height="36"
    viewBox="0 0 33 36"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4.48242 29.6799H28.4824V5.67993H4.48242V29.6799Z" fill="url(#pattern0_1101_13838)"/>
    <defs>
      <pattern id="pattern0_1101_13838" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_1101_13838" transform="scale(0.00625)"/>
      </pattern>
      <image id="image0_1101_13838" width="160" height="160" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAApD0lEQVR4nO2dd5Qc13Xmf6/qdQ7TkzEBM4MMIpAECSaIFKlkiQ6yvPY675FA2aa9sqxEgqIoyZJlkZC9x2e9a68ky15LXsu2RIoKFGVSFAmACSCJQILIOQOTU+fuqto/XtV0TWOQRMxUz0x/5/T0dMX7ur6+993w3oMqqvAQwmsBqvj50P93/ntrwoV1umHdB3zfa3l+XkjrG16LUMWVoggPajL/sAYp8pzwWp63AkneaxGquCKE+aK0+DwWkOdxdLZ5LdJbgUT3WoQqLhthvoTBZzEBizwG/+a1SG8VEsNrEaq4LNTwlxR4iKL92eApLJ7xVKarAInltQhVXBK1fIkCD2GA/byKmHwDbfqrD4nmtQhVXBBxBPCXGHyGAmAAGmDyE0z+01vhrg4kptciVDEhal3ky4FL180Y7QdVDViZqEEg+DIGD5KHMdOrA9bM0X5Q1YCVh7oxzafIV0SRT6UMChj8w0zRflDVgJWFBAJhm908UIAxJ1EDLJ60DJ7yTsCrD2nNmN/S9Iaod5ndHIp8JkrzqVfeKMws7QcgzaoG9Bx6bVmfrwhjXSMLkGCa4gmjKGaU9gOQRrHKQC/hbzTP13xFHIdDmV6NnJEXXxczMGorhfRahNkLX60p0FwORwEwBcR8kCmAaSntZ2g/0H3TP+sxEaTu81qE2Qktbgrgy5iuUIsJtEfAEDCaBx+giVQh6/+ap8JOImQh7/dahlmHQGNWmV2LB8fCLAYwLwINcdjZrUyvDwpF+V3Nb2z0VOBJhNT8M8qpqnj4agoCzdZ8RZSHawItAVjRCjt6oGCAHyyhDWayoX/wWORJhcxkQ17LMGsQbx5R5IMHx4IpBpCQcPt8OJmB7mFleiXkcuF/9wfNLd5JPPmQ/mA1FTIVCNYkx5NPoMgX0eDOBWD6YM8h5f3qYAn9XC4/s7UfgMzlqxpwslHT2CvQeBj49DjyBQSsmQcNtfCz/ZAtjBEwnwv+azCUfsNTwacAMhhKey3DjEYgknI0X4l8FsrM3tAOrXNg/xk4PQhS7TfxH8/mYv/kpdxTBZnNxbyWYcaipu7c+ZrPwfI5sGAeJNOw/1wp5SYhk458SwZy+zwReoohZSDntQwzEpHwYIl8BRgr+jCBJXWw7BogCPsPw2BGmV4NCkboQDId/aZHYk85ZDId9VqGGYfmhpPamNl1Qi1Ov29hDK67HuiE3l1w+FzJLOuQHE38sz9YPOqZ8FMM6Q8WL31UFZeN2shZMY58oAhWBBZEYNUq0FYDp2HfQUgZSvtJyFrxN/uS0X/xSnYvIPuSVQ14tbCo+aAyu5bd5wNleotAVxBuWAny3YAPTj4Fx4dK/cKAzrn+1n/0RTjjhexeQfoi1YHBVwNd0X2lPp+j+XSU2W31w40rwfd+YBEUvw9790POPiYIQ8WmV48PzPm2R+J7Bnl8YI7XMkx73NmxsaT5ysnXIGH1Sgj+BnAbsA0ObYHTubGYH8Egh07N+1oklu/3qAmeQUZi1bk53gpW175cIl/B3iixU2wa3LQCYr8DvB0YgOSLsPeY8oZ1IAK9hdbnT/TPedSbFngLeaK/qgF/XvzagseVt2vxaXKMxfEwgChw8zKo+x3gLnvnTti3BfpNdZwEKxjlbHfb1xa29ya9aoeXkAvbe72WYVpiReAFMY58duk8BhAGblkMTb8JvNPecAj6NsDB08oxEQLignO59md6h+OPe9YQjyF7h+NeyzDt8I7mJzWh8bCweIA8JfKZQBC4ZQG0/AbwHqAGGAK2wt5XIQX4NAhIjHDcPHy49auBUGbWZgNkIJTxWoZphTXx50rky6FI5wxr8AGrOqD9V4D3AY0oV/cYnNoAx/oV+QhCjcbJVNdPTg01PuFFOyoF8tRQo9cyTBv85tzvCKHxsMAmn4FdNm+/rm2BhXcDvwS02meNgPEy7Nmmxnz4wxDSKIRihd1HO74aixVmdSZAxmKFSx9VBXcnHtfGkc8E/JS039IGWPYu4FeALhQj08AuOPoMnEmDLw7CB7VFDg/N+9HJ3roZM8XGzwt5srfOaxkqHn+06B81odvkc/p8ARQBLWBBAq59B/BrwCKUWiwCpyHzU9hzAAiDFoCoRd5Xm911vPVrDYmRGTfM8kohGxIjXstQ0fi1hu+WyOcYiyCKgBbQEYPr7gDtA8A1lFiZBLbC/s3QL5Tp1XWoMznQ2/m9pXO7f+ZFeyoNcuncbq9lqFgsyWwS48jnaL4AKqzXEoGVt4D+q8B1KGaC6uwdhcHn4EAP6GHQdKixSImakW2H5szYYZZXCrntUDUQPRF+p+07QpM8ojlmV1DSfBpQH4IV14P/V4DVqFifU1c1BGyGPTsg6YNwQGm/hMHuU/P+45p5gy960qgKhLxm3qDXMlQcrs3/VNN0HtYdhwOUZQ2iyBcLwPJlELobWAPEKBX95YD9cOZZOJqCQByEBjVFhop1vS/ubpnxA42uBPLF3S1ey1BR+MMF39J0Hw9LUeZwhFC527AfViyA+LtRWY5a7NQGyjXuAfM52LUfCiGI+kBqUAP7TrR/e83y09N6WYWrDblm+WmvZagYLMxs0KSPh30aD5ClRL4wKtwS1GFFJ9S9ExVobkKx0inqywA74MgmOGdCJARCh3iBwUL9qZPnmmbFQKMrgTx5rslrGSoCb4v/QAuErIdDGg+QYbzmk0BAg+Ud0HAn8MvAXEqaD1TY5SRkn1WDjGQUpK7OjQv2Hmn7l7amvl1T37LKhmxr6vNaBs/RltqihYLGw1G/+QAplCV1yOdHmdAlHdB8O/B+YD7jyWcCI8ArcHArDPsg6Lf7fgV6s02HD51q/eepb1nlQx461Xrpo2Yw3lbzYy0SKzycCOUeEG7yhe13IWBBO7TfhiLfIkrpD1CqsggcgaFn4cgw+GpA18BnQVTnzb2d32xvHjg0xU2bFpDtzQNey+AZWtOvatFo7uH6cPYBkUTxyIciXwjFrc5WmHcTKsW23D7AmTkSFGMHgBfgwG7IBCFijzCvyXM21bJn77HGb01x06YN5N5js7MY4bamZ7R4PPtIUyy5ToxYkKek+RzytbXAohtB/DJwLaUINJRmD88Be6B7E5xOQrhO+SU+A8J+3ni9/Z8WtPWcnNrWTR/IBW09Xssw5QgVdmu1NelHWuLD68SwpRIXPlScL4ji1pxGWHItaHcDN9g7ypdXtsMu1iY4uM92XApgCUgYnBru2HHweP2/TmHTph3kweP1XsswpVjSukVrqks+3BnvXyeGbPL5KaXYLKCxDpZeB/J9wM2Mz3K4NWAG2AknNkNfFqICRFppv0CU7W90/kNne3L2/cKvALKzffYMRQiau7XW+pFHFtf2rdP6LMhSynA4mi+egKXLwf9uxmc5HDim1wTOQO4FOHzYntPPAjMDNSaHexe+vONA4t+nrHHTFHLHgYTXMkwJblvwgtbaOPLINXU96/ReUykvHyXtZwKRBCxfAuG3A3cwPstRjhFgKxx/GZKG4qkFBC3whXn5zc6vzm8dGp6Ktk1nyPmtQ17LMOmYE92ttdSNPLy0tnud3mOqcRn2qDR82HP1xWHFPIjfArwLaGBi8gnGql1SG6D7tBoBp1axhDgcPNv17LZ9td+bouZNa8ht+2q9lmFS8UurX9Ra6oYfWVrTvU72mKpMz02+AuCPwcpOqL8eeC/QxvgUmxsmMAi8Cie3lbxnAwiBqcetQycXfe29N49UB9tcBuR7b565Bal+8w1tTt3I+iU15+6XvTb5nPEbjuYjCiu7YM5S1FiOBSjyOXA7HqDCLgdhcCP0DKrrYF8zBofOLHjqZHfNjya1YTMI8mR3jdcyTAoWNm3U5tSNrl8c775fOmYXFLecomUjAKvmQuc8FPmWcX6Ww4Ezv1ovWM/DyTdLWRP7vWDFim8eWvS1+sRQdbqJy4SsTwx5LcNVR8L/hjandmT9kljP/bqj+QQl7WcCBQnXdsCSTuBuVFGps2aKE3Jxw0QNMtoJPS/AUEaRD8a038Hj1/z4VE/rk5PcvBkFeapnZuWCr537lNacGFm/JG6TL0WpVlQteQopCdd2qRfvRU0aFHRdpVzzgdJ+p6C4Cc4cHJvR1BmMnjdq8m8cWPK1prr+6sIrVwDZVDdzJmRqjb2iNdWMrl8c7R5PPij5FEkNlnXC6k5UQekdQOQSV7ZQYZdtcG4zZIyS6dWAKOzdN/8Hy7p2PT0pDZvBkMu6ZkaJ2vDAiNZck3xkYbSvRD4HjrZKCZjfBWvaQbsdNWnQhaYmcZvhAnAEMhuh50xpMDpAAHL5mszO/Qu+frXbNBsgd+5f4LUMbxldTTu05kRy/cJI73jyCUrkSwNt7fD2NvDfBrwbqOP84gJc2xzHox94Fc5tVxUzjhOjAyE4eGDuY6uW7XtuMts4UyFXLZveqwEM96e1hprUI2PkczKLTp9PR2U9GprhzjkQvhb4BVQ5vRNovtD4cAuVrzsEI8/D4FBJ+9kTEuVTod6h7tD/nrQGznDIoe7pu1KSLnu1pprUI/PD/evGkc/hlY7iT6wR3tEBNatQ5fStXFzzOSiiBhlthm67qyJdh2qQz7BvXvR4MmSl5hkF6S/kdcyCDyMvMAwfWCAwLSxTgIEQASzLBEw0oWNhYlkCTViWXWcoBCYWliWEJrBACHNMUmEZ9nb1CSEcaSxNWJhoCKFZqiRHIDTdQmCpQ32WkBJdE5a6v4VuFS1pFdDNArpZtCwraVlW3pA6SaHhVElOGkTxG5N5+cnDa8FOrSGeXj8v3F8yu07M2JkosgD46+E986FlOWrqjMWUAs3lFS4wnpjDwGbo/3s4sW98csS+j5UjS5oRq6gpXhlAUWAV7f/LfeJyZVt+e1DOzQUkEpbrDPe5pS0gXHsEFkJY7v3CEhaGZcuKJQyb+5ZlgWWiC/BTpGj+C/AlJhFSC1z6oErDa1qH1hhLPdIVHrhf77PJZ1Iin44in5aAOzqhZQkq0LyQ8eS7GArAWShsgt5948M4rsiMEAQJEhRFU8kwRkL7Es6MCg6sCT5T9tlpR/n28v8v9u5+ma7/Dde7I68Dp8sS1EGzTpomkz5kUlrTbLHM1/1tWkMs9UhncLBkdp2H5gSai0AxAm+fB/Mc8i2hlDeDift9jkZ0wi6vQ++LpcoZKJHQuafD53IZyi/pvq3J+WSh7Jjy803XPvc1nWsZjCeac47zYzAZf9/yZjuE9wOGdcTKar8v0DZPcPRVhRSG79JHVQhejzRo9dH0+vbAsNJ8SdQX7JhGx2nNB+HWebBsIWr8rjNp0ESYSBNmgCOQ+hkMnCsRys1P9+nSlsFNAD8lbVNOIFzbyslYjolINRHJnPsXXducd7ccF2q2QBVT+PS95PwfBF6bQJqrDmmNy31WLnZGa7S6aGZ9u3/4fr3XglFKZhdKExNkJayeDzcsQoVaVlAqpy9/wuN6V5RGuPUDW6Bva2mgEq7TJ+KsW4s4xJCcTz73C8abwYmO1cu2m2Wv8vu7zb/TDy1vrvv6wm5fFIoEXjMzvnuAKQsOy6JZ+QvVHEhEtLpwZn2bf6REPvdKRGMTE+iwch7cMh+V5VhFqZzegZslE6mcAnAOhjfDcKrk9V7IdOHaL8q2O+e4+47lptfZZ5Z9Ln+5/SX3y32/AqpYJwfjlglzy+7WuBoqoxODvBHckB2N3gMcm6ClkwaZLQQvfZSHONVkaYlIZn2LL3m/3lNGPveDyGiwuAveNh/EnajiAqdS1A33U3Q/XWefAcV90L23pGHL+8nlBLuQBis3l+5zJjLnuLa5NZ7bYSj/7JzvaD1T2H1Ra/z9y69vr9BEDLL5wPdTQ7H/DpxjiiELhUt5g96ht93UEuHcV+bI1H2aQ74iJU3h8CgNzO2AOzrAtwa4FZVic3sIcD5zJuoIAfnTUEyVsigX+4qcfHA5r+F87ePculyjOXD31TTXu/O/0/Yxs6yBEHZRRACSfjAyUMyNJ6dzL8P2kqQFYRMikE6H/2m4P/BJKHpSGCrz+cqcIzu5UGiJUP4rTXrqPs1tdss70imgsQ3uaoHwDajigjrOJ5/z/0R2001MCaF3wQINzBSIDDAMwllx2gTLreYcQSxFhjHGaGA5n4W9zz7OMl2fnYCisMUpV5cuO2thnwdQBCsDeh70NOwYgp4C5LOKaGPNcq4t1SSZugHhHFYEjHzgbzKjgQf9fjyrX5T+CzmHHiI5z9TigeL6RpEukc/x7qD05aaAmkZ4TzMklqHGcjgzVsGFNV853A9aB3EdBBaj3Ow0Kp3iXvjXgZtEjrqi7Dj3/nKnhwneJ5K7/DqOo7QVeBN298CuHJgWiCBIH5hmidSWBpoArQiRAmZQWOlk6Et6UXwxHMx7GoiT4WBlFe8OtRS1aFBbX0vufq3PUuE4J5jrVlhZwF8L75wDjV2ootIOJi6nv5QWdMO96Ef5kMwL/e/+XH798vtMdI1yD+NiMFA/jFHgLOzeB68UQQRAL4Bhm+WxPqZV6hPGchgBLT/QH3sQ+JtL3GhKIJNW5ahArW1IC/n19XErf7/W7yJfuedWBIjBnY3Q1QT8IirQXD6Q6GKEmWjbhbTSlfSTJ9JaF7vHxeQr32egRkEdA56CfS/B1gLoNvmKrj6Kk1oWgC6g3qAg/aNnTkY/CfzjFTRoUiHThcoIRNfN79E0H18Jm8X7xAClILPbIxTYWY4A3NEAK+pRgeabuLxA84XCMRcj2qXId6H9E5HPrcYv5FpP9Nn5EtLAQeD7cPgp2J4HLaRMa9Es87ht50QCTTDii3Xv2+P7CFBRw0Vld977aphrrzmuIflKwOA+MYT6np0gqvs5mUBRwKoE3JRAORxrKBXouR+sm2ATmcUr0UDOdS5mIi/Uvyy/h8sxmdAVLr8fqC8iAxwGnoAj/wnbcqCFQStA3rI1njXe0vsFNEM6GDq2fWfjWnQ2XoaQUwqZ1ms9FeCOpa/rpsZ6aXCfGKZEvomeZxFYUgt31IHWhnI4TsG4nHl5X8vtKDj7y9MJ5Tcrdy4mCqS54agatxPivpZEBcQTqNikjupjlss1UV/QId8R4Ak49iRszYAVHU++sZif7XGHLJgDA0Z0d++p6NqWuvyUpNauFLKlzjsnZEnzHt0UfEUafEqMohyL8uCpK+rAHIl1WwICEZSN3sB4raceXkl3WFh2SESMbTERY9HcC0WLBaUgYLkGdRPWua9DKDcJnXNUiYlFCEEDghuA6+GCKdBy8mVRfb4n4MQT8FoSTId8pqsIwaX9QkCr4Gwq/urBw9G1wJ4L3MxzyO4Bb1Jxb1/+pg58RSvyKVKovvXFEvM6YFgYr/ZjMoKqhSpTlcJC00XJwmlqm/NMhRDjQ2lw+c5s2Wdr7Fih7nHe5awS6S0wcwWMqEFg1e8i9JWUyO2cVf6LM1E5tcPAjxT5XhmFYhT0IhRMFXZxiGfZjYwArXB8sG7DG3sSU55au1LIoeTUp+Lef+trEvgrinyCDIp85ekmOF8x9RnIM8N2MbDrgg7BHEXkvNxdLff/5daZsmtdCBN1CyY63y2z3R49CWLBIiyxAnFeYeFEZjcPHAIeg1NPwStJKERAFqFoKfKZtulFqDhf2IIWnQPn4o+/tjP2ETCmPLV2pZCj6akdxvp779ruA/6KAh8fRz7n5c53TqQFwyXFA65jnOk2nJc9S+64+jzHsk6EK/VJyo+7UDfRQnXhOmuRt98G2jWcP/tCucOUBw4Aj8GZp2CLTT7dUJrP6fO5yRezoFGy62TDN7bsCH0KFSiseMhM7kpiXG8N99y9LYjgf1DgI2RR37O7crjI+IzHRBpnotiys7385d4+EVEuR9u91a+niOqzrr4eotcBzZQcEOcGbrNbQJndH8DZp2FzCnJhkAYYtskdiw4I9YNKWBRr/XQP1fzNoaPxTzckxpZVrHjIhsTUxAHfe/MrMaHxtxRYS5YS4QqUiOiQr7wfeDkxWrdz66Rt3bV0bqe2vEDmQtd0yzDRvon2uz+bqMzEigUwZzVqqt8EE6thN/l+qMj38ihkw6p4wCHf2PcjQApIWOTjPnP/8fq/KGZ9X+pszk6rGnfZ2Zyd9JssnLtrsU/yOWHw+2RQfeu8691dPDmRhrrcEJ7jkzhE1CklRxxTLOz7lPcJL6YZJ3JGLkZSZ1sGmNcBy25AxSubKf0q3Bd2SpmPAD+C7v+ElwYV+fyWHWQuI58uoM4iHw3mtu9v+DTwP88Pblc+ZM6cfKHDMeOLumX9NmlKITPnGTizVZVX+MKVmz+3w1HeB3QTsPwFE4fwyj+7/3eXurv3OSTJAIl6uG45iDWoad/ckx+5WV9E9fl+CD1PwYsDkAmD3wTDLF3XRHm7uoB6i3TAP7LljfpPgPV/L/MbqjjIdPZyIvhvDZpu9ZkGvSKIiQ+hhsVqlmVhmSaW8xzG9YpUEt0J3tk7LTVktvTwhH3u+VS147GIsau4Ta+YgICi/PyJYIEQBpYxKgzNsGo1zS7Yd8e0c4AegRtXQGwNai3hUNkNnc6pgfJ2vw89P4UX+yEdAp9NPqvs2j4B9TCsRc++sDXxJ8APJ5Z0ekCms5PvhBSyrMvnWS+EiJoGolDUraLhp0jANC1dDUc1ipamWWiaLjTLRMNAs4ezalYBIUyEZQkVw9NUuREaWIZQNXo2u4Q1nrQCwdiwWOHEBZUj7eKD0BhPVofyKOvnQNcQyVHf0MhgdEVH/fC/asKsG1tV08Lu1+pw3XxoXQXcgur3lYdcHPIdBh6H3mfgxUEYDUHAFWIZN9BJQIMgJcNHt7zestbnY9NbfzreQvp8k58L3rD9lgxM/hjTqcSSmqN/5tPNOrKMDx9lgUWdsOJGVK66lfOrdJyDjwM/gL6nldlNBlSfz+1wmPavxA80QW8+suvM6ejaObXJrVPW2EmEnFM7e5ZpuFrIjli/3lbb94mxUJKjpbJAYz2sXgbabah+nzvkAiXNdxr4EfQ/DS/0w3BQjdEwTEU6p7+HUAOHmjROj9a8sudQZC2wd8oaO8mQPf2VPyqukjCabey4feG2z/oMUx+Xuy4A/jDccg3Eb0P1+8pH5DnkOwP8BPqfhOe7Ffn8lp3hwNZ+NvmCFjRpHB2seXbHnvp7gBNT2d7JhhxNV/aouErDorbjDzQFhq530tFgvxs63DQP5t6IWl0pwfgRTQ75zgE/hcEn4PmzMBiEoFBmt7wQI2xBo87+s4nvvbY79hEodE9RM6cMMp2dNkFzz9FQH/j1hYkT95KCcbmGLGqu6etXoeJ9Tr8PxodaeoENMPRD2HQC+oMQsslnQGlgEqpqq06y61T911/dGbmP0txfMwoyn79UWqAKAH+8sev6tq2fDxXyyvQ6vMqg1pa7dTHot6KGBvgZb3qLQB+wCYa/BxsPQ19IaT63twtjE54X4z7ODNb89eFjkYfq49MntXalkPVxr0WYHpjffnzdHNl3LcOUyFIA/BG4bQnUrGbimRgc8r0EI4/BhgPQE4SQrkJJbvIJIG5RiAaMfSdrvpjL+f6yrXEKArUeQrY1Tn4qbrrj+HDLf11cs/veseGhUOr33dwJXctRM+3XMz7RXEQtZr0ZRr4LG/cq8gVt8jlBZlDkS1jkwsHs64ca1wGzYtZVaVhVE3wx7Dgxd94Hrt32uUA2q5GjZHpzwJI2uGEJKt7XyfgigwJj5Bv9LmzaBWcDEJRgOcWkolQcUWeS8oWGt+5OfBwK35yyBnoMma06IRfFjV3HHpzj717JAKWqmhzQUAe3zbf7fSsp5Xkdb3cIeBWSj8LGN+BMEEKyZHadQ3WgDoa12JnNb9T8MfDEFDbPc8hMrhoHvBByWv1vrWl85Q8YpjQxQhGQEVizEGpXo0yve52RImoxw9cgZZPvtK35nFALKO3nA+ogpYcPb93TsNbn44UpbF5FQPp8lTEuuNJwcrRzwd1LX/6cL50TZFDkM4GCBre2w4IVwF2okXnuerBhYCukHoON2+GkD0K+Up8P2+z6LGgQ9OVju86eDX+oKZ7dNuWNrADIpnjVCZkIdfHDDzZrvcvHRd+ywMJWWH0N8Hagi/F1WMPANkh/DzZtheMu8o2l1lBZjwaNM6mazfuPR9cC+6eoWRUH2Tdc1YDlSFrx37u769UPM0ypujoH1Cfg9kXgux3V73O+OwM1j8h2yDwKm16Boz4I+cdPEgSq0qVe5/hw/JmdBxMfBk5ObesqCzKZnh5T9E4V+s2Ohb+45OWHZKagNN5Yvy8Ia+ZD/Q2oVJvT73M033bIfhc2bYEjOgR94x0OUIPFayUHemL/8cbB0Ech1zeljatAyGwu57UMFYXrug492CR6rxkzvRZqOpBbOmDxclTIpYFSTd8osA2yj8LGzXBIh2DANWTSPjQCVsLHieHar27f57sPNQfErIc0jMkvSJ0uiDbU/f7Kmi33MEjJ9GaABS1w8yJUv28+pXVa7RU0c9+F516GfRpE/OPH6+pAzKIY9XF6KPZX/UP+hxZ3TO7qQ9MJcnFHlYAAb/R0Ln5n26sPyWQBK2sPcs8BiVq4owv8N6NKrJwBLElgB+QehWdfgr0WhOziXtOOLutCpdbCfmP/2Zo/B77s91fWfIxeQ1a/EIVVbccebDJ7l5K0/doCoIfg9i5ouh64HTVhpYWamvV1yD8GG16EPYYin0apjk9T5MuFfdk3j9XfD/ydF+2qdMhstuqEdOeaPvje9pc/RD+lbEdBU/2+ZYtQ8b459s4MsBPyj8Jzm2BXAUIB0LRSmEUKiJuk/P7BHQfiH4PC//OkYdMAMpuf3am4I6kVS9+34KXPyGQeK28PVMoC81rh1vnAO1AlVqD8hl1Q+A5s2KjIF/SBJtWgKCHUcNCESVJGTr+yP3Yv8KQnDZsmkLnC7NaA17Uc/kyT0bOYpE2+PJCogbvaIHgLajYDDUW+PVD4Ljy3EXYWIKipmectu/JZCqgVJPXQoWM9iQ811/KSdy2bHpDNtbM3F3wq07R2efTF/0Y/pdIoLQRvmwvN1wFvQ9X3ZYH9UHwMNjwHO/NqAJGmg2XPCegXUAv9RuSN072RtVDc4VnDphGkac7OiMCb/UuWvXfels/I0XypvD6vwc1tsHIJaqmvJlSf75BNvmfg9ZwapSZs8gmbfHWCc9nYywdPxz6Emsi5isuAHB6dfRpwz+hysaZr30MNxe6FpFFORxboaoHb5qKCzQsYmyCy+DhseBpezyryaYKxiWds8p1Mxp7edyL+B6g5g6u4TMjsFE7PVimYV9d7z7Lwgd/FSYQVgJoE3DXHXm1pFcomHwbjcdj4E9iRGU8+4VN9wBqdw0Pxf9t7NPgxKM761NqVQuZys8sEp0ILl7+n8bUH9ZFsaTo4LQhva4WWxSjtFwCOgvFD2PAkbE/b5EP9ET4ICawayalkzd/vORq5H2Wrq7hCTJv1gq8G+rUF4ubmQ5+tM7oXjNGlIODGOXBtKyrV1gicAONHsPEJ2JEuDXKzhAq5RDSKUT/nRmPrB0f9n+tsLsyuX/FVhOxsnj1xwBpr4I+Whg7/NgP2hjzQ0QxrmlCTCC0FzoDxBGz6EWxPleaaBhASIjqFSLB4pLfm88AjAX32fH+TATlbvsC9Q4tXvqNz+wNaMluaDDMWh7uaIbISVWI1AOZPYNMPYdtoiXwWKuQSk+SDwcyBs4n7gP/jXWtmDip6veCrhV39S7QbOw5/tqbQM48MdnGoH26dA61dqHhfAcynYeP3YdvIePLpAqI6OX9oYM+p2J9B8dueNWaGQRZmQfdlXkPfvYuCx36TAUoTCV3fDDfMRU2lEQbzZ/D892DbUBn5gJhGWkZO7jsV/0PgaY+aMSMhLXNma8ABOq67ObHrAZL2KuJ5oK0B1nSh+n3NYG6CFx6FrQOlqX0d8kUFWT1ysHs4/qHaqPWyZw2ZoZC10Zk788OBwS55TfOpz8eLA51jM/NHI3DXfIjdAHSA9Qq89Chs7S+tzgWKiBEYNWOvDwxF12oUXveoGTMaUjNnrhPSFuu+t8N/8r+MzecidLi1A9qXAZ1gvQEvPQav9o2fxNQm30gx/uKZwfha1CTOVUwCZCYzM6fmGKZ51YrGg+tI5UsrX13XBjcsRQ2n3A+bfwCv9o5fl9Am31Au8tSZwdgfglVNrU0ipGnMPBM8RJucX3/m8xFjpGNsPZLWBnjbIhCdwCnY8iRs6R6/YoIEQoKBTPTbZ/sDH4Ncv4fNmBWQVnHmjYprSgz+yRzfuQ+QRMX8ImG4cz7E24E+eG0DbD6rDnYMgA8ICUbz0b/rHojcrwmqI/anAFITMysVVwg2rmqPHF1HtqicDlPCLV3Q2QokYftmeOmMOtgpBPKDGdBI54OPZHO+zzXE8lO7guMshmyIzZxBSScyHb7O2Nk/DxrJdvKoft/KNripBcjB62/CC2eUQ+Ks1uQH068VhtKRzwPrdW3mOmWVCDmTvvD6yPBHGnx9v0oKVZvS0gB3tAIm7NwFz59SDomzXFsATJ+W7k/F7gO+6qHosxbSMGeGF9xbbF+9oPbo/eQM5XREInBXB8R8sOsQbDypTLLT4whCwefr6xkMfxT4D+8kn92QM2FQXG+xK9BR1/3nASPdqmYxlSre1xGCfccU+fKU1owJQU4PnjjdH/sD4BkvZZ/tkDnTf+mjKhx1kaGP1Pl6f5kkqrT+2rmwOgEHT8CzJ9U2h3xhyOvB/UOp6NpIyNrspdxVgIyEpncccCiXuKk9cvY+sobq97U2wZ2NcOwU/PSUGk3pR4VbQpAmtH1kNHyPSoNU4TWkZU5fAvam64Nz6/u/4DdTLWSASAze0w4D5+AnpyBtKfLpQFgwWow8PzAavge1RGUVFQCZK0zfUXF10dyfJnyDv8goYPrg9rlg9sOPT0LKRb6IxlAu/GTvUPheZtiqndMd09YJKer1t8wPH7+PrKn6eDe0Qk0KnjwBI5YaRCSBkKQ3E/tWz4D+CTAHPRa7ijLIfNG89FEVBl+wNjS3pvsLATPdTArorIdWAzacgUGbfD4gJBnMx/7X2f7QOlRwpooKgzSs6ecF1wUzH436ht7HMFATgQ4fbDsHPaYinx/MgGQkF/tyOuv78/pYsZpaq1DI+tj0KslPFSK31ofPfYqMCdIHLQE40g/niop8ATB9sjCQij0E/PVsGXQ1XTGtRsV1jzZGOhp6/8JvZpooCEjo0DsCA0VlcgNg+PRU/2jsU8DXvZa3iktDmtPIODXEhz8a84+8hxTg1yCbh4ypPN0AFKXs6xsK/ykY3/Fa1iouD9I0pgcD02Z8TUdN76fIGWo+PsOEvKUCzH4wpTw+PBr+sE/nWa9lreLyIX3TIAzYm6mLzG0Y+oI0cg0U7EWescnng4LQ9+Vz/g8F/cVXvJa1iiuDDPor3wmpl+k/i8iR95AR9iTgJc2Xt3zbM2m5FqydXstZxZVDFvOVnYobKtavaavv/SQFUy0YY5kqwOyHvCGfT6YDa4EjXstZxc8HaZiVa4P7s4lIW8PoF6WVaxhbLNomXzYvfpxMyz+GYjW1No0hTaNyTXAilvto2D/6btIo0+u3wAeZrPzWSNL6OBSGPBaxircIaRiVGQfMyTm3tUb7P0neVJXMNvlyBf1vR1PyASGqqbWZAClE5S3XOmS2htpq+r8gzWwjGcAnsHyQz2sPFwva5yPBaRI7quKSkJFg5T1LTaY/EvEnf4ERFPn8opjJ6p8D1ovK7bJW8XNAVtoDHSzOuak52vdJMgboAssvsumMfh/w917LVsXVh7QqKApzLt0um+tHPiuLmRYsMP36cDJpfRzMb3otWxWTA2kYlVMPGA7n7o36ht9PDgxfoHdk2PoT4Htey1XF5EEaRmXY4H6zbXlH7blPYRYpaqFTwyPywwh+6rVcVUwupCkCXssAQG18+H6/nplXLISOprPBD/r8vOC1TFVMPqTP7/3kRKOW/oHW+MAH86ngoUw29LvAa17LVMXUQFp4O0f0sJEJ1EQLH8uk/LtHR6K/Bez2VKAqphQym/d2bhifVgzmUtpLI/nwRjCr5JtlECf+us5rGaqYxfj/G6tCaUgAFXsAAAAASUVORK5CYII="/>
    </defs>
  </svg>
`,Oi=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#E5E7EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,ji=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path d="M40 8H8C5.79086 8 4 9.79086 4 12V36C4 38.2091 5.79086 40 8 40H40C42.2091 40 44 38.2091 44 36V12C44 9.79086 42.2091 8 40 8Z" stroke="#E5E7EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M44 14L26.06 25.4C25.4425 25.7869 24.7286 25.992 24 25.992C23.2714 25.992 22.5575 25.7869 21.94 25.4L4 14" stroke="#E5E7EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Bi=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path d="M10.7004 2.667L8.43806 0.404688C8.17731 0.143938 7.83038 0 7.46113 0H3.22613C2.464 0 1.84363 0.619938 1.84363 1.3825V1.84625H1.37988C0.619062 1.84625 0 2.46531 0 3.22613V11.6576C0 12.4184 0.619062 13.0375 1.37988 13.0375H7.882C8.64281 13.0375 9.26188 12.4184 9.26188 11.6576V11.1926H9.723C10.4847 11.1926 11.1046 10.5726 11.1046 9.81137V3.64306C11.1046 3.27994 10.9572 2.92381 10.7004 2.667ZM9.75888 2.83938H8.855C8.5295 2.83938 8.26438 2.57469 8.26438 2.24875V1.34488L9.75888 2.83938ZM8.47438 11.6576C8.47438 11.9844 8.20881 12.25 7.882 12.25H1.37988C1.0535 12.25 0.7875 11.9844 0.7875 11.6576V3.22613C0.7875 2.89931 1.05306 2.63375 1.37988 2.63375H1.84406V9.81181C1.84406 10.5731 2.464 11.1926 3.22525 11.1926H8.47438V11.6576ZM10.3171 9.81137C10.3171 10.1391 10.0511 10.4051 9.72344 10.4051H3.22525C2.898 10.4051 2.632 10.1391 2.632 9.81181V1.3825C2.632 1.05438 2.89844 0.7875 3.22656 0.7875H7.46156C7.46681 0.7875 7.47163 0.790563 7.47688 0.790563V2.24875C7.47688 3.00869 8.09506 3.62688 8.855 3.62688H10.3136C10.3136 3.63256 10.3167 3.63738 10.3167 3.64306V9.81137H10.3171Z" fill="#6A7282"/>
  </svg>
`,Ui=q`
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
`,O=q`
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
`,Hi=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    focusable="false"
    >
    <path d="M10.5 3.5L3.5 10.5" stroke="#6A7282" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 3.5L10.5 10.5" stroke="#6A7282" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`,Vi=q`
<svg xmlns="http://www.w3.org/2000/svg"
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  aria-hidden="true"
  focusable="false"
  >
  <path d="M8.16427 2.3335C8.37473 2.33349 8.58127 2.39042 8.76201 2.49825C8.94276 2.60608 9.09096 2.76079 9.19093 2.946L9.47443 3.471C9.5744 3.6562 9.72261 3.81091 9.90335 3.91874C10.0841 4.02657 10.2906 4.0835 10.5011 4.0835H11.666C11.9754 4.0835 12.2722 4.20641 12.491 4.4252C12.7098 4.644 12.8327 4.94074 12.8327 5.25016V10.5002C12.8327 10.8096 12.7098 11.1063 12.491 11.3251C12.2722 11.5439 11.9754 11.6668 11.666 11.6668H2.33268C2.02326 11.6668 1.72652 11.5439 1.50772 11.3251C1.28893 11.1063 1.16602 10.8096 1.16602 10.5002V5.25016C1.16602 4.94074 1.28893 4.644 1.50772 4.4252C1.72652 4.20641 2.02326 4.0835 2.33268 4.0835H3.4976C3.70784 4.08351 3.91419 4.0267 4.0948 3.91909C4.27542 3.81148 4.42361 3.65706 4.52368 3.47216L4.80893 2.94483C4.90901 2.75993 5.05719 2.60551 5.23781 2.4979C5.41843 2.39029 5.62477 2.33348 5.83502 2.3335H8.16427Z" stroke="#1E2939" stroke-width="1.02083" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 9.33337C7.9665 9.33337 8.75 8.54987 8.75 7.58337C8.75 6.61688 7.9665 5.83337 7 5.83337C6.0335 5.83337 5.25 6.61688 5.25 7.58337C5.25 8.54987 6.0335 9.33337 7 9.33337Z" stroke="#1E2939" stroke-width="1.02083" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,qi=q`
  <svg xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  aria-hidden="true"
  focusable="false"
  >
    <path d="M3.5 4L8 8L12.5 4" stroke="#7C4DFF" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 8L8 12L12.5 8" stroke="#7C4DFF" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;import{Namespace as gu,sym as Al,parse as Nl}from"rdflib";var Sl="https://solidos.github.io/profile-pane/src/ontology/";function Wi(e,t,o,n){let i=n||Sl+o,a=Al(i);e.holds(void 0,void 0,void 0,a)||Nl(t,e,i,"text/turtle",()=>null)}var Gi="socialMedia.ttl",Tl=`${ni.iconBase}noun_10636_grey.svg`,He=(()=>{let e=zt?.strings?.join("")||"";return e?`data:image/svg+xml;utf8,${encodeURIComponent(e)}`:Tl})();var Yi=await(await fetch(L(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
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
`,"text/turtle"))).text(),So=new URL("panes/profile-pane/icons-png/discord.png",E).href,To=new URL("panes/profile-pane/icons-png/dribbble.png",E).href,Io=new URL("panes/profile-pane/icons-png/facebook.png",E).href,Eo=new URL("panes/profile-pane/icons-png/instagram.png",E).href,Lo=new URL("panes/profile-pane/icons-png/linkedin.png",E).href,$o=new URL("panes/profile-pane/icons-png/pinterest.png",E).href,Po=new URL("panes/profile-pane/icons-png/sharechat.png",E).href,Fo=new URL("panes/profile-pane/icons-png/snapchat.png",E).href,Do=new URL("panes/profile-pane/icons-png/spotify.png",E).href,zo=new URL("panes/profile-pane/icons-png/telegram.png",E).href,Mo=new URL("panes/profile-pane/icons-png/tiktok.png",E).href,Ro=new URL("panes/profile-pane/icons-png/whatsapp.png",E).href,Oo=new URL("panes/profile-pane/icons-png/x.png",E).href,jo=new URL("panes/profile-pane/icons-png/youtube.png",E).href,$l=Ll("http://www.w3.org/2002/07/owl#disjointUnionOf"),Bo="urn:profile-pane:starIcon",Qi="urn:profile-pane:icon:",Ki="https://solidos.github.io/profile-pane/src/ontology/socialMedia.ttl",de=`${Ki}#`,Mt=(()=>{let e=zt?.strings?.join("")||"";return e?`data:image/svg+xml;utf8,${encodeURIComponent(e)}`:He})(),Ao=null,Pl=[{classUri:`${de}FacebookAccount`,label:"Facebook",icon:Io,userProfilePrefix:"https://www.facebook.com/",homepage:"https://www.facebook.com/"},{classUri:`${de}InstagramAccount`,label:"Instagram",icon:Eo,userProfilePrefix:"https://www.instagram.com/",homepage:"https://www.instagram.com/"},{classUri:`${de}LinkedInAccount`,label:"LinkedIn",icon:Lo,userProfilePrefix:"https://www.linkedin.com/in/",homepage:"https://linkedin.com/"},{classUri:`${de}TiktokAccount`,label:"TikTok",icon:Mo,userProfilePrefix:"https://www.tiktok.com/@",homepage:"https://www.tiktok.com/"},{classUri:`${de}TwitterAccount`,label:"X",icon:Oo,userProfilePrefix:"https://x.com/",homepage:"https://x.com/"},{classUri:`${de}YouTubeAccount`,label:"YouTube",icon:jo,userProfilePrefix:"https://www.youtube.com/",homepage:"https://www.youtube.com/"},{classUri:`${de}DiscordAccount`,label:"Discord",icon:So,userProfilePrefix:"https://discord.com/users/",homepage:"https://discord.com/"},{classUri:`${de}SnapchatAccount`,label:"Snapchat",icon:Fo,userProfilePrefix:"https://www.snapchat.com/add/",homepage:"https://www.snapchat.com/"},{classUri:`${de}PinterestAccount`,label:"Pinterest",icon:$o,userProfilePrefix:"https://pin.it/",homepage:"https://pinterest.com/"},{classUri:`${de}SpotifyAccount`,label:"Spotify",icon:Do,userProfilePrefix:"https://www.spotify.com/user/",homepage:"https://www.spotify.com/"},{classUri:`${de}TelegramAccount`,label:"Telegram",icon:zo,userProfilePrefix:"https://t.me/",homepage:"https://telegram.org/"},{classUri:`${de}DribbleAccount`,label:"Dribble",icon:To,userProfilePrefix:"https://dribbble.com/",homepage:"https://dribbble.com/"},{classUri:`${de}SharechatAccount`,label:"ShareChat",icon:Po,userProfilePrefix:"https://www.sharechat.com/user/",homepage:"https://sharechat.com/"},{classUri:`${de}WhatsAppAccount`,label:"WhatsApp",icon:Ro,userProfilePrefix:"https://wa.me/",homepage:"https://www.whatsapp.com/"}],Zi={discord:So,dribbble:To,facebook:Io,instagram:Eo,linkedin:Lo,pinterest:$o,sharechat:Po,snapchat:Fo,spotify:Do,telegram:zo,tiktok:Mo,whatsapp:Ro,x:Oo,youtube:jo,"discord.png":So,"dribbble.png":To,"facebook.png":Io,"instagram.png":Eo,"linkedin.png":Lo,"pinterest.png":$o,"sharechat.png":Po,"snapchat.png":Fo,"spotify.png":Do,"telegram.png":zo,"tiktok.png":Mo,"whatsapp.png":Ro,"x.png":Oo,"youtube.png":jo};function Uo(e){if(!e)return"";let t=e.trim().toLowerCase();if(t.startsWith(Qi)){let a=t.slice(Qi.length);return Zi[a]||""}let o="icons-png/",n=t.lastIndexOf(o);if(n===-1)return"";let i=t.slice(n+o.length);return Zi[i]||""}function Fl(e,t){if(e.endsWith("#OtherAccount")||t===Bo)return Mt;let o=Uo(t);return o||t||He}function Dl(){if(Ao)return Ao;let e=Il();return El(Yi,e,Ki,"text/turtle",()=>null),Ao=e,e}function No(e){return(e||"").trim().toLowerCase().replace(/[#:/]/g," ").replace(/account\b/g,"").replace(/[^a-z0-9]/g,"")}function ft(e,t){let o=(t||"").trim();if(!o)return;let n=o.toLowerCase(),i=e.find(r=>r.classUri.toLowerCase()===n||r.label.toLowerCase()===n);if(i)return i;let a=No(o);if(a)return e.find(r=>{let l=No(r.label),s=No(r.classUri);return l===a||s===a})}function Ho(e){Wi(e,Yi,Gi)}function Rt(e){Ho(e);let t=Dl(),o=new Map,n=t.any(d.foaf("Account"),$l);if(n){let c=we(t,n).filter(p=>p.termType==="NamedNode");for(let p of c)o.set(p.value,p)}let i=t.statementsMatching(void 0,d.rdfs("subClassOf"),d.foaf("Account"));for(let c of i){let p=c.subject;p?.termType==="NamedNode"&&o.set(p.value,p)}let a=Array.from(o.values());if(!a.length)return[];let r=a.map(c=>{let p=t.any(c,d.rdfs("label"))?.value||Te.label(c)||c.value,u=t.any(c,d.foaf("icon"))?.value||"",f=Fl(c.value,u),m=t.any(c,d.foaf("homepage"))?.value||"",b=t.any(c,d.foaf("userProfilePrefix"))?.value||"";return{classUri:c.value,label:p,icon:f,homepage:m||void 0,userProfilePrefix:b||void 0}}),l=new Set,s=r.filter(c=>{let p=c.label.toLowerCase().trim();return!p||l.has(p)?!1:(l.add(p),!0)});for(let c of Pl){let p=c.label.toLowerCase().trim();l.has(p)||(s.push(c),l.add(p))}return s}function Xi(e,t){let o=e.any(t,d.foaf("name"))||e.any(t,d.rdfs("label"));if(o)return o.value;let n=e.each(t,d.rdf("type"));for(let i of n){let a=e.any(i,d.rdfs("label"));return a?a.value:Te.label(i)}return"Unknown Account"}function Ji(e,t){let o=e.any(t,d.foaf("icon"));if(o?.value===Bo)return Mt;if(o){let i=Uo(o.value);return i||o.value}let n=e.each(t,d.rdf("type"));for(let i of n){if(i?.value?.endsWith("#OtherAccount"))return Mt;let a=e.any(i,d.foaf("icon"));if(a?.value===Bo)return Mt;if(a){let r=Uo(a.value);return r||a.value}}return He}function ea(e,t){let o=e.any(t,d.foaf("homepage"));if(o)return o.value;let n=String(e.anyJS(t,d.foaf("accountName"),null,t.doc())||"No_account_Name").trim();if(/^https?:\/\//i.test(n))return n;let i=e.each(t,d.rdf("type"));for(let a of i)if(a.termType==="NamedNode"){let r=e.any(a,d.foaf("userProfilePrefix"));if(r)return r.value+String(n).trim()}return e.anyJS(t,d.foaf("homepage"),null,t.doc())||""}function Ot(e,t){function o(l){return{name:Xi(t,l),icon:Ji(t,l),homepage:ea(t,l),entryNode:l}}Ho(t);let i=t.each(e,d.foaf("account")).flatMap(l=>we(t,l)),a=new Set,r=[];for(let l of i)if(l.termType==="NamedNode"){let s=t.any(l,d.foaf("accountName")),c=s?s.value:"";a.has(c)||(a.add(c),r.push(o(l)))}return r.length?{accounts:r}:{accounts:[]}}import"rdflib";function zl(e,t){if(t.termType==="Literal")return"";let o=e.anyJS(t,d.schema("name"));if(o)return o;let n=e.any(t,d.solid("publicId"));if(n&&(n.termType==="NamedNode"||n.termType==="BlankNode")){let i=e.anyJS(n,d.schema("name"));if(i)return i;if(n.termType==="NamedNode")return Te.label(n,!0)}return""}function ta(e,t){return t.each(e,d.schema("skills")).filter(o=>o.termType!=="Literal").map(o=>{let n=t.any(o,d.solid("publicId")),i=n?n.termType==="BlankNode"?`_:${n.value}`:n.value:"";return{name:zl(t,o),publicId:i,entryNode:o}}).filter(o=>o.name!=="")}import{sym as Ml}from"rdflib";var ut="https://www.w3.org/ns/iana/language-code/";function oa(e){return e.replace(/\s+/g," ").trim()}function na(e,t){return Array.isArray(t?.elements)?!0:t.termType!=="BlankNode"&&t.termType!=="NamedNode"?!1:!!e.any(t,d.rdf("first"))}function Wo(e){return(e||"").trim().toLowerCase()}function qo(e){let t=(e||"").trim().toLowerCase();if(!t)return"";try{let o=Intl?.DisplayNames;if(typeof o=="function"){let i=new o(["en"],{type:"language"}).of(t);if(i)return i}}catch{}return t}function ia(e){let t=(e||"").trim();if(!t)return"";if(t.startsWith(ut)){let o=Wo(t.slice(ut.length));return qo(o)}return qo(t)}function Rl(e,t,o){let n=e.statementsMatching(t,o),i=n.find(r=>(r.object?.lang||"").toLowerCase().startsWith("en"));if(i&&typeof i.object?.value=="string")return i.object.value;let a=n.find(r=>r.object?.termType==="Literal");return a&&typeof a.object?.value=="string"?a.object.value:""}function Ol(e,t){let n=e.statementsMatching(t,d.rdfs("label")).find(i=>(i.object?.lang||"").toLowerCase().startsWith("en"));return n&&n.object&&typeof n.object.value=="string"?n.object.value:""}function Vo(e,t){let o=Rl(e,t,d.schema("name"));if(o)return oa(o);let n=Ol(e,t);return n?oa(n):t.value.startsWith(ut)?ia(t.value):""}function jl(e,t){if(t?.termType==="NamedNode")return t.value;if(t?.termType==="Literal")return Wo(t.value)||void 0;if(e.termType==="NamedNode"&&e.value.startsWith(ut))return e.value}function Bl(e,t,o){if(o?.termType==="NamedNode"){let n=Vo(e,o);return n||ia(o.value)}if(o?.termType==="Literal"){let n=Wo(o.value);if(!n)return"";let i=Ml(`${ut}${n}`),a=Vo(e,i);return a||qo(n)}if(t.termType==="NamedNode"){let n=Vo(e,t);if(n)return n}return""}function Ul(e,t){if(t.termType==="Literal")return t.value;if(t.termType!=="NamedNode"&&t.termType!=="BlankNode")return"";let o=e.any(t,d.solid("publicId"))||void 0;return Bl(e,t,o)}function jt(e,t){let o=t.each(e,d.schema("knowsLanguage")),n=o.filter(s=>na(t,s)).map(s=>we(t,s)),i=o.filter(s=>!na(t,s)),r=[...n.flat(),...i].map(s=>({name:Ul(t,s),publicId:jl(s,t.any(s,d.solid("publicId"))||void 0),proficiency:t.anyValue(s,d.schema("proficiencyLevel"))||void 0,entryNode:s})).filter(s=>!!s.name),l=new Map;return r.forEach(s=>{let c=s.publicId||s.name;l.has(c)||l.set(c,s)}),Array.from(l.values())}import"rdflib";var Hl=d.schema("EducationalOccupationalCredential"),Vl=d.vcard("Organization").value,ql="http://schema.org/";function aa(e){let t=(e||"").trim();return t?t.match(/[#/]([^#/]+)$/)?.[1]||t:""}function Go(e,t,o){if(!t)return"";if(t.termType==="Literal")return t.value;if(t.termType==="NamedNode"){let n=e.anyJS(t,d.rdfs("label"),null,o);return n||aa(t.value)}return""}function Wl(e,t,o){let n=e.each(t,d.rdf("type"),null,o).filter(a=>a.termType==="NamedNode"&&a.value.startsWith(d.solid("").value)),i=n.find(a=>{let r=aa(a.value);return r==="PastRole"||r==="CurrentRole"||r==="FutureRole"})||n[0];return Go(e,i,o)}function Gl(e,t,o){let n=e.any(t,d.org("classification"),null,o),i=Go(e,n,o);if(i)return i;let a=e.each(t,d.rdf("type"),null,o).filter(l=>l.termType==="NamedNode").filter(l=>l.value!==Vl),r=a.find(l=>l.value.startsWith(ql))||a[0];return Go(e,r,o)}function Ql(e,t,o){return e.holds(t,d.rdf("type"),Hl,o)}function Zl(e,t){let o=[],n=new Map,i=t.doc(),a=e.each(null,d.org("member"),t,i).filter(r=>!Ql(e,r,i));for(let r of a){let l,s,c,p,u,f,m,b=e.any(r,d.schema("startDate"),null,i),w=e.any(r,d.schema("endDate"),null,i),x=e.anyJS(r,d.schema("description"),null,i),h=!w,g=Wl(e,r,i),_=e.any(r,d.org("organization"),null,i);_&&(s=e.anyJS(_,d.schema("name"),null,i),l=e.any(_,d.schema("uri"),null,i),f=Gl(e,_,i),m=e.any(_,d.org("location"),null,i),u=e.any(_,d.solid("publicId"),null,i)),u&&(c=e.anyJS(u,d.schema("name"),null,i));let y=c||s,I=e.any(r,d.org("role"),null,i);I&&(p=e.anyJS(I,d.schema("name"),null,i));let C=e.anyJS(r,d.vcard("role"),null,i),R={title:C&&p?p+" - "+C:C||p,roleType:g,entryNode:r,startDate:b,endDate:w,isCurrentRole:h,orgName:y,orgPublicId:u?.value||"",orgType:f,orgLocation:m,orgHomePage:l,description:x||void 0},Le=[R.title||"",R.orgName||"",R.startDate?.value||"",R.endDate?.value||""].join("|"),Ct=n.get(Le);if(!Ct){n.set(Le,R);continue}let _o=Ct.entryNode.termType==="NamedNode",ho=R.entryNode.termType==="NamedNode";!_o&&ho&&n.set(Le,R)}return n.forEach(r=>o.push(r)),o}function Yl(e){return e.sort((t,o)=>{let n=!t.endDate,i=!o.endDate;if(n!==i)return n?-1:1;let a=t.endDate?.value||"",r=o.endDate?.value||"";if(a!==r)return r.localeCompare(a);let l=t.startDate?.value||"";return(o.startDate?.value||"").localeCompare(l)})}function Bt(e,t){let o=Zl(t,e);return Yl(o)}import"rdflib";function Ve(e){return e?typeof e=="string"?e:e.value||"":""}function Kl(e){let t=(e||"").trim();return t?/^mailto:/i.test(t)?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):!1}function Xl(e){let t=(e||"").trim();return t?/^tel:/i.test(t)?!0:/^[+()\-\s\d]{5,}$/.test(t):!1}function ra(e,t,o,n){let i=n==="email"?Kl:Xl,a=Ve(t);if(i(a))return t;let r=e.statementsMatching(t,d.vcard("value"),null,o),l=e.statementsMatching(t,d.vcard("value"));for(let s of[...r,...l]){let c=s.object;if(i(Ve(c)))return c}return null}function Jl(e,t){let o=[];return(t.each(e,d.vcard("hasEmail"),null,e.doc())||null).forEach(i=>{let a=ra(t,i,e.doc(),"email");if(!a)return;let r=t.any(i,d.rdf("type"),null,e.doc());o.push({entryNode:i,type:r,valueNode:a})}),o}function es(e,t){let o=[];return(t.each(e,d.vcard("hasTelephone"),null,e.doc())||null).forEach(i=>{let a=ra(t,i,e.doc(),"phone");if(!a)return;let r=t.any(i,d.rdf("type"),null,e.doc());o.push({entryNode:i,type:r,valueNode:a})}),o}function ts(e,t){let o=[];return(t.each(e,d.vcard("hasAddress"),null,e.doc())||null).map(i=>{let a=Ve(t.any(i,d.vcard("street-address"),null,e.doc())),r=Ve(t.any(i,d.vcard("locality"),null,e.doc())),l=Ve(t.any(i,d.vcard("region"),null,e.doc())),s=Ve(t.any(i,d.vcard("postal-code"),null,e.doc())),c=Ve(t.any(i,d.vcard("country-name"),null,e.doc())),p=t.any(i,d.rdf("type"),null,e.doc());o.push({entryNode:i,...p?{type:p}:{},streetAddress:a,locality:r,region:l,postalCode:s,countryName:c})}),o}function la(e,t){let o=Jl(e,t),n=es(e,t),i=ts(e,t);return{emails:o,phones:n,addresses:i}}import"rdflib";var os=d.schema("EducationalOccupationalCredential");function ns(e,t,o){return e.holds(t,d.rdf("type"),os,o)}function is(e,t){let o=[],n=new Map,i=t.doc(),a=e.each(null,d.org("member"),t,i).filter(r=>ns(e,r,i));for(let r of a){let l=e.anyJS(r,d.schema("name"),null,i)||"",s=e.anyJS(r,d.schema("educationalCredentialAwarded"),null,i)||void 0,c=e.anyJS(r,d.schema("location"),null,i)||void 0,p=e.anyJS(r,d.schema("startDate"),null,i)||void 0,u=e.anyJS(r,d.schema("endDate"),null,i)||void 0,f=e.anyJS(r,d.schema("description"),null,i)||void 0,m={school:l,degree:s,location:c,startDate:p,endDate:u,description:f,entryNode:r},b=[m.school||"",m.degree||"",m.location||"",m.startDate||"",m.endDate||""].join("|"),w=n.get(b);if(!w){n.set(b,m);continue}let x=w.entryNode.termType==="NamedNode",h=m.entryNode.termType==="NamedNode";!x&&h&&n.set(b,m)}return n.forEach(r=>o.push(r)),o}function as(e){return e.sort((t,o)=>{let n=!t.endDate,i=!o.endDate;if(n!==i)return n?-1:1;let a=t.endDate||"",r=o.endDate||"";if(a!==r)return r.localeCompare(a);let l=t.startDate||"";return(o.startDate||"").localeCompare(l)})}function sa(e,t){let o=is(t,e);return as(o)}import{sym as rs}from"rdflib";import{sym as ca}from"rdflib";function Qo(e,t,o){return t?.elements?.length?!0:!!e.any(t,d.rdf("first"),null,o||null)}function Ut(e,t,o){return Qo(e,t,o)?we(e,t):[t]}function Ht(e,t){if(!e)return null;if(e.termType==="NamedNode")return e;if(e.termType==="Literal")try{return ca(e.value)}catch{return null}if(e.termType!=="BlankNode")return null;let o=[d.solid("publicId"),d.schema("url"),d.foaf("homepage"),d.rdfs("seeAlso"),d.schema("sameAs"),d.schema("mainEntityOfPage")];for(let a of o){let r=t.any(e,a);if(r?.value){if(r.termType==="NamedNode")return r;if(r.termType==="Literal")try{return ca(r.value)}catch{}}}let i=t.statementsMatching(e,null,null,null).find(a=>a.object.termType==="NamedNode");return i?.object?.value?i.object:null}function da(e,t){return Ht(e,t)?.value||e.value||""}function pa(e,t,o){let n=t.each(e,d.solid("community"),null,o),i=t.each(e,d.solid("community"),null,null),r=[...n,...i].flatMap(c=>Ut(t,c,o)),l=new Set,s=[];for(let c of r){let p=`${c?.termType||""}:${c?.value||""}`;l.has(p)||(l.add(p),s.push(c))}return s}function ls(e,t){let o=e?.requested;if(!o||typeof o!="object")return;let n=o[t];return(typeof n=="string"&&n!=="requested"&&n!=="done"||typeof n=="number"&&n>=400)&&delete o[t],n}async function ss(e,t){let o=e.doc(),n=t?.fetcher;if(!n||typeof n.load!="function")return;let i=pa(e,t,o),a=new Map;for(let r of i){let l=Ht(r,t);if(!l)continue;let s=l.doc();a.set(s.value,s)}a.size&&await Promise.all(Array.from(a.values()).map(async r=>{let l=ls(n,r.value);try{await n.load(r)}catch{}}))}function cs(e){return e&&(e.termType==="NamedNode"||e.termType==="Literal")&&e.value||""}function ds(e){let t=(e||"").trim();if(!t)return"";try{return new URL(t).href}catch{return t}}function ps(e,t){if(e&&e.termType==="NamedNode")return e;try{return rs(t)}catch{return null}}async function fa(e,t){await ss(e,t);let o=e.doc(),n=new Set;return pa(e,t,o).map(r=>{let l=Ht(r,t),s=l?.value||cs(r),c=ds(s),p=l||ps(r,s),u=p?.doc(),f=p&&t.anyValue(p,d.foaf("name"),null,u||null)||void 0,m=p&&t.anyValue(p,d.vcard("organization-name"),null,u||null)||void 0,b=f||(p?Te.label(p):Te.label(c)),w=p?ze.findImage(p)||(ze.findImageFromURI?.(p)??void 0):void 0,x=[];p&&(x=t.each(p,d.rdf("type"),null,u||null));let h=x.find(_=>_.termType==="NamedNode"&&(_.value===d.schema("Project").value||_.value===d.schema("Community").value)),g=h?.value===d.schema("Project").value?"project":h?.value===d.schema("Community").value?"community":"unknown";return!s||!c||n.has(c)?null:(n.add(c),{url:s,title:b,name:f,orgName:m,imageUrl:w,category:g,entryNode:r})}).filter(r=>!!r)}import"rdflib";function Vt(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let t=e.value;return typeof t=="string"?t:""}return""}function fs(e){let t=(e||"").trim();return t?/^mailto:/i.test(t)?!0:/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t):!1}function us(e){let t=(e||"").trim();return t?/^tel:/i.test(t)?!0:/^[+()\-\s\d]{5,}$/.test(t):!1}function ms(e,t,o,n){if(!t)return;let i=n==="email"?fs:us,a=Vt(t);if(i(a))return t;if(t.termType!=="NamedNode")return;let r=e.statementsMatching(t,d.vcard("value"),null,o),l=e.statementsMatching(t,d.vcard("value"));for(let s of[...r,...l])if(i(Vt(s.object)))return s.object}function gs(e,t,o){if(t.termType!=="NamedNode")return;let n=e.statementsMatching(t,d.rdf("type"),null,o);if(n.length>0)return n[0].object;let i=e.statementsMatching(t,d.rdf("type"));if(i.length>0)return i[0].object}function ga(e){let t=Vt(e).trim().toLowerCase();return t?t==="work"||t.endsWith("#work")||t.endsWith("/work"):!1}function _s(e,t,o){if(t.termType!=="NamedNode")return!1;let n=e.statementsMatching(t,d.rdf("type"),null,o),i=e.statementsMatching(t,d.rdf("type"));return[...n,...i].some(a=>ga(a.object))}function ua(e,t,o,n,i,a){let r=e.statementsMatching(t,o,null,n),l=e.statementsMatching(t,o),s=[...r,...l].map(f=>f.object),c=[],p=new Set;for(let f of s){let m=Vt(f);if(m&&p.has(m))continue;m&&p.add(m);let b=ms(e,f,n,i);if(!b)continue;let w=gs(e,f,n)||a;c.push({entryNode:f,type:w,valueNode:b})}let u=c.find(f=>_s(e,f.entryNode,n)||ga(f.type));if(u)return u;if(c.length>0)return c[0]}function hs(e,t){let o=e.anyJS(t,d.solid("preferredSubjectPronoun"))||"";if(o){let n=e.anyJS(t,d.solid("preferredObjectPronoun"));n&&(o+="/"+n)}return o||""}function bs(e,t){return e&&t?`${t}, ${e}`:e||t||null}function ma(e){return(e||"").replace(/\s+/g,"").toLowerCase()}function ys(e){let t=e.find(o=>o.isCurrentRole||ma(o.roleType)==="currentrole");return t||e.find(o=>{let n=ma(o.roleType);return n!=="currentrole"&&n!=="futurerole"})}var _a=(e,t)=>{let o=Te.label(e),n=t.anyValue(e,d.vcard("nickname"))||t.anyValue(e,d.foaf("nick"))||void 0,i=t.anyValue(e,d.vcard("bday"))||void 0,a=ze.findImage(e),l=ys(Bt(e,t))?.title||void 0,s=e.doc(),c=ua(t,e,d.vcard("hasTelephone"),s,"phone",d.vcard("Voice")),p=ua(t,e,d.vcard("hasEmail"),s,"email",d.vcard("Internet")),u=t.any(e,d.vcard("hasAddress"))||void 0,f=u&&t.any(u,d.rdf("type"))||void 0,m=u&&t.anyValue(u,d.vcard("street-address"))||void 0,b=u&&t.anyValue(u,d.vcard("locality"))||void 0,w=u&&t.anyValue(u,d.vcard("region"))||void 0,x=u&&t.anyValue(u,d.vcard("postal-code"))||void 0,h=u&&t.anyValue(u,d.vcard("country-name"))||void 0,g=u?{entryNode:u,type:f,streetAddress:m,locality:b,region:w,postalCode:x,countryName:h}:void 0,_=u||null,y=_!=null?t.anyValue(_,d.vcard("country-name")):null,I=_!=null?t.anyValue(_,d.vcard("locality")):null,C=hs(t,e);return{name:o,nickname:n,imageSrc:a,dateOfBirth:i,jobTitle:l,primaryPhone:c,primaryEmail:p,primaryAddress:g,location:bs(y,I),pronouns:C,entryNode:e}};import"rdflib";var ha=(e,t)=>({description:t.anyJS(e,d.vcard("note")),entryNode:e});async function ba(e,t){let o=_a(e,t),n=la(e,t),i=ta(e,t),a=jt(e,t),r=sa(e,t),l=await fa(e,t),s=ha(e,t),c=Ot(e,t),p=Bt(e,t);return{profileDetails:o,social:c,contactInfo:n,skills:i,languages:a,education:r,projects:l,bioDetails:s,cvDetails:p}}import{html as T,nothing as Ka}from"lit-html";import{html as wa,render as Yo}from"lit-html";import{html as ws}from"lit-html";function ya(){return ws`
    <span class="loading-spinner" aria-hidden="true"></span>
    <span class="sr-only">Saving...</span>
  `}function vs(e){if(typeof e=="string")return e;if(e instanceof Error)return e.message||e.name;if(e==null)return"";try{return JSON.stringify(e)}catch{return String(e)}}function Me(e,t){return(t||vs(e)||"Something went wrong.").trim()}A(new URL("panes/profile-pane/src/ui/dialog.css",E));var j=null,mt=0,ka="",Aa="",qt=null;function xs(e){return e instanceof HTMLElement?e:e instanceof Node?e.parentElement:null}function Cs(e){return typeof e.composedPath=="function"?e.composedPath():e.target?[e.target]:[]}function ks(e){let t=Cs(e),o=j?.querySelector("#modal-desc");if(o&&t.includes(o)||j&&t.includes(j))return!0;let n=xs(e.target);return!n||!j||!j.contains(n)?!1:!!n.closest("#modal-desc")}function As(e){if(qt)return;let t=o=>{ks(o)||o.preventDefault()};e.addEventListener("wheel",t,{capture:!0,passive:!1}),e.addEventListener("touchmove",t,{capture:!0,passive:!1}),qt=()=>{e.removeEventListener("wheel",t,!0),e.removeEventListener("touchmove",t,!0),qt=null}}function Ns(e){mt===0&&(ka=e.documentElement.style.overflow,Aa=e.body.style.overflow,e.documentElement.style.overflow="hidden",e.body.style.overflow="hidden",As(e)),mt+=1}function Ss(e){mt!==0&&(mt-=1,!(mt>0)&&(e.documentElement.style.overflow=ka,e.body.style.overflow=Aa,qt?.()))}function Ts(e){return e.body}function Is(e){return e?.tagName==="SOLID-UI-BUTTON"}function va(e,t){e&&(e.disabled=t,e.toggleAttribute("disabled",t))}function Es(e,t){if(e){if(Is(e)){e.label=t,e.setAttribute("label",t),e.textContent=t;return}e.textContent=t}}function Re(e){return e.querySelector('#modal-buttons [data-dialog-primary="true"]')}function Na(e){return e.querySelector('#modal-buttons [data-cancel="true"]')}function Sa(e){let t=Ts(e);return j&&e.body.contains(j)?(j.parentElement!==t&&t.appendChild(j),j):(j=null,j=e.createElement("dialog"),j.id="profile-modal",j.setAttribute("aria-modal","true"),j.setAttribute("aria-labelledby","modal-title"),j.setAttribute("aria-describedby","modal-desc"),j.innerHTML=`
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
  `,t.appendChild(j),j)}function Ko(e){return{dialog:e,title:e.querySelector("#modal-title"),headerAction:e.querySelector("#modal-header-action"),description:e.querySelector("#modal-desc"),error:e.querySelector("#modal-error"),buttons:e.querySelector("#modal-buttons"),savingOverlay:e.querySelector("#modal-saving-overlay")}}function Ta(e){e.error.textContent="",e.error.setAttribute("aria-hidden","true"),e.error.hidden=!0}function xa(e,t,o){e.error.textContent=Me(t,o),e.error.setAttribute("aria-hidden","false"),e.error.hidden=!1}function Ls(e){if(Ns(e.ownerDocument),typeof e.showModal=="function")try{e.open||e.showModal();return}catch{}e.setAttribute("open","")}function $s(e){try{if(typeof e.close=="function"&&e.open){e.close();return}e.removeAttribute("open")}finally{Ss(e.ownerDocument)}}function Ps(e){return!!e.querySelector("[data-layout='mobile']")}function Fs(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")==="true"||e.getAttribute("hidden")!==null||e.tabIndex<0)}function Ca(e){let t=e.querySelectorAll(['input:not([type="hidden"]):not([disabled])',"textarea:not([disabled])","select:not([disabled])","solid-ui-select:not([disabled])","solid-ui-combobox:not([disabled])",'[contenteditable="true"]',"button:not([disabled])","solid-ui-button:not([disabled])",'[tabindex]:not([tabindex="-1"])'].join(","));for(let o of t)if(o instanceof HTMLElement&&Fs(o))return o;return null}function Ds(e,t,o){if(Ps(e.ownerDocument)){let a=e.ownerDocument.activeElement;a&&e.contains(a)&&a.blur();return}let n=Ca(t);if(n){n.focus(),(n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement)&&n.select();return}let i=Ca(o);i&&i.focus()}function zs(e){let t=new FormData(e),o={};return t.forEach((n,i)=>{o[i]=String(n)}),o}function Ia({title:e,message:t,buttons:o,headerAction:n,dom:i}){let a=Sa(i),r=Ko(a);return Ls(a),r.title.textContent=e||"",r.description.innerHTML="",typeof t=="string"?r.description.textContent=t:r.description.appendChild(t),r.buttons.innerHTML="",Ta(r),new Promise(l=>{let s=f=>{Ms(f),l(f)},c=()=>{let f=Na(a);if(f){f.click();return}s(!1)};a.oncancel=f=>{f.preventDefault(),c()},r.headerAction.innerHTML="";let p=n||{type:"close"};if(p.type==="close"){let f=i.createElement("solid-ui-button");f.setAttribute("variant","ghost"),f.setAttribute("aria-label","Close dialog");let m=i.createElement("span");m.setAttribute("slot","icon"),Yo(Ui,m),f.appendChild(m),f.onclick=()=>c(),r.headerAction.appendChild(f)}else if(p.type==="button"){let f=i.createElement("solid-ui-button");f.setAttribute("variant","tertiary"),f.className=p.className||"",f.textContent=p.label,f.setAttribute("label",p.label),f.setAttribute("aria-label",p.ariaLabel||p.label),f.onclick=async()=>{p.onClick&&await p.onClick()},r.headerAction.appendChild(f)}o.forEach(f=>{let m=i.createElement("solid-ui-button");m.setAttribute("label",f.label),m.setAttribute("variant",f.primary?"primary":"secondary"),m.textContent=f.label,f.primary&&m.setAttribute("data-dialog-primary","true"),f.cancel&&m.setAttribute("data-cancel","true"),m.addEventListener("click",async()=>{f.beforeClose&&!await f.beforeClose()||s(f.value)}),r.buttons.appendChild(m)}),(i.defaultView?.requestAnimationFrame?f=>i.defaultView?.requestAnimationFrame(()=>f()):f=>setTimeout(f,0))(()=>{Ds(a,r.description,r.buttons)})})}function Ms(e){if(j){$s(j),j.oncancel=null;let t=j.querySelector("#modal-header-action button");t&&(t.onclick=null)}}function Ea(e,t="Information",o){return Ia({title:t,message:e,buttons:[{label:"OK",value:!0,primary:!0}],dom:o})}function Zo(e,t,o){let n=Ko(e),i=Re(e),a=Na(e);if(e.classList.toggle("modal--saving",o),e.setAttribute("aria-busy",String(o)),n.description.toggleAttribute("inert",o),o){let r=e.ownerDocument.activeElement;r&&e.contains(r)&&r.blur()}i&&(va(i,o),i.setAttribute("aria-busy",String(o)),Es(i,t)),a&&va(a,o),n.savingOverlay.hidden=!o,o?Yo(wa`
      <div class="modal__saving-indicator inline-flex-row justify-center" aria-live="polite" aria-label="Saving changes">
        ${ya()}
      </div>
    `,n.savingOverlay):Yo(wa``,n.savingOverlay)}function oe(e){let t=e.submitLabel||"Save Changes",o=e.cancelLabel||"Cancel",n=Sa(e.dom),i=Ko(n),a=e.dom.createElement("button");a.type="submit",a.hidden=!0,a.style.display="none",a.setAttribute("aria-hidden","true"),a.tabIndex=-1,e.form.appendChild(a);let r=c=>{c.preventDefault(),Re(n)?.click()};e.form.addEventListener("submit",r);let l=Ia({title:e.title,message:e.form,headerAction:e.headerAction,buttons:[{label:o,value:null,cancel:!0},{label:t,value:"save",primary:!0,beforeClose:async()=>{if(Ta(i),e.shouldCloseWithoutSave&&await e.shouldCloseWithoutSave())return!0;if(e.validate){let c=await e.validate();if(c)return xa(i,c),!1}if(!e.onSave)return!0;try{return Zo(n,t,!0),await e.onSave(),!0}catch(c){Zo(n,t,!1);let p=e.formatSaveError?e.formatSaveError(c):void 0;return xa(i,c,p),!1}}}],dom:e.dom}),s=e.dom.defaultView?.requestAnimationFrame?c=>e.dom.defaultView?.requestAnimationFrame(()=>c()):c=>setTimeout(c,0);return e.onOpen&&s(e.onOpen),i.buttons.hidden=!!e.hideFooterButtons,l.then(c=>c!=="save"?null:zs(e.form)).finally(()=>{i.buttons.hidden=!1,Zo(n,t,!1),e.form.removeEventListener("submit",r),a.remove()})}import{html as Ee,render as ic}from"lit-html";import"rdflib";import{literal as _t,st as _e,sym as Ma}from"rdflib";import{graph as Rs,st as Os}from"rdflib";var Da={rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",vcard:"http://www.w3.org/2006/vcard/ns#",foaf:"http://xmlns.com/foaf/0.1/",solid:"http://www.w3.org/ns/solid/terms#",schema:"http://schema.org/",org:"http://www.w3.org/ns/org#",owl:"http://www.w3.org/2002/07/owl#",dc:"http://purl.org/dc/elements/1.1/"},js=Object.values(Da);function La(e){return e.startsWith("_:")?e.slice(2):e}function $a(e){return!!(e?.subject&&e?.predicate&&e?.object)}function Wt(e){return e?typeof e.toNT=="function"?e.toNT():e.value||"":""}function Oe(e,t,o){if(e){if(typeof e.setPrefixForURI=="function"){e.setPrefixForURI(t,o);return}e.namespaces||(e.namespaces={}),e.namespaces[t]=o}}function Gt(e){if(!e)return;let t=Qt(e),o=[e,t,t?.store];Object.entries(Da).forEach(([n,i])=>{o.forEach(a=>{Oe(a,n,i)})})}function Xo(e){return`${Wt(e.subject)} ${Wt(e.predicate)} ${Wt(e.object)} ${Wt(e.why)}`}function Ye(e){return Array.from(new Map((e||[]).map(t=>[Xo(t),t])).values())}function Bs(e,t,o){e.remove(t),o.forEach(n=>{e.add(n.subject,n.predicate,n.object,n.why)})}function Us(e,t,o,n=!1){let i=Ye((t||[]).filter(r=>$a(r)?e.holds(r.subject,r.predicate,r.object,r.why)?!0:n?!1:e.statementsMatching(r.subject,r.predicate,r.object,r.why).length>0:!1)),a=Ye((o||[]).filter($a));return{safeDeletions:i,safeInsertions:a}}function Qt(e){return e.updater}function gt(e){return e.fetcher}async function za(e,t){if(!t)return;let o=gt(e);if(typeof o?.load=="function"&&!(e.statementsMatching(void 0,void 0,void 0,t).length>0))try{await o.load(t)}catch{}}function Hs(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Vs(e,t){let o=new Set;return[e.subject,e.predicate,e.object].forEach(i=>{i&&(typeof i.value=="string"&&t.forEach(a=>{i.value.startsWith(a)&&o.add(a)}),i.termType==="Literal"&&typeof i.datatype?.value=="string"&&t.forEach(a=>{i.datatype.value.startsWith(a)&&o.add(a)}))}),[...o]}function Pa(e,t){let o=Hs(t);return new RegExp(`(^|\\n)\\s*(?:@prefix|PREFIX)\\s+[A-Za-z][\\w-]*:\\s*<${o}>`,"i").test(e)}async function ge(e,t,o,n=js,i={}){let a=Qt(e),r=gt(e);if(typeof a?.serialize!="function"||typeof r?.webOperation!="function")return!1;let l=Array.from(new Set((o||[]).flatMap(p=>Vs(p,n))));if(l.length===0)return!1;let s=i.documentTextCache?.get(t.value),c=typeof i.documentText=="string"?i.documentText:s;if(typeof c=="string")return l.some(p=>!Pa(c,p));try{let p=await r.webOperation("GET",t.value,{noMeta:!0,headers:{accept:"text/turtle"}});return!p?.ok||typeof p.responseText!="string"?!1:(i.documentTextCache?.set(t.value,p.responseText),l.some(u=>!Pa(p.responseText||"",u)))}catch{return!1}}function qs(e){let t=(e||"").toLowerCase();return t.includes("fetch error for patch")||t.includes("failed to fetch")||t.includes(" on patch ")||t.includes("web error: 400")||t.includes("web error: 405")||t.includes("web error: 500")||t.includes("web error: 501")}function Ws(e){return(e||"").toLowerCase().includes("no record of our http get request for document")}function Gs(e,t,o,n){if(typeof e.update!="function")throw new Error(ae);return new Promise((i,a)=>{try{e.update(t,o,(r,l,s)=>{if(l===!0){i();return}a(new Error(s||n))})}catch(r){a(r instanceof Error?r:new Error(String(r)))}})}async function Fa(e,t,o,n,i,a){Gt(e);let r=Qt(e),l=gt(e);if(!r||typeof r.serialize!="function"||!l||typeof l.webOperation!="function")throw new Error(i);await za(e,t);let s=e.statementsMatching(void 0,void 0,void 0,t).slice(),c=new Set((o||[]).map(w=>Xo(w))),p=s.filter(w=>!c.has(Xo(w))).concat(n||[]),u=Rs();p.forEach(w=>{u.add(w.subject,w.predicate,w.object,w.why)});let f="text/turtle",m=r.serialize(t.value,u.statementsMatching(void 0,void 0,void 0,t),f),b=await l.webOperation("PUT",t.value,{noMeta:!0,contentType:f,body:m});if(!b||b.ok!==!0){let w=b?.status||"unknown";throw new Error(`Web error: ${w} on PUT of <${t.value}>`)}a?.set(t.value,m),Bs(e,o,n)}async function W(e,t,o,n,i){Gt(e);let a=Qt(e);if(!a)throw new Error(i.unsupportedMessage);i.forcePut&&await za(e,t);let{safeDeletions:r,safeInsertions:l}=Us(e,o,n,i.requireStoredDelete===!0);if(r.length===0&&l.length===0)return;if(i.forcePut){if(!t)throw new Error(i.unsupportedMessage);await Fa(e,t,r,l,i.unsupportedMessage,i.documentTextCache);return}let s=i.failureMessage||Si,c=i.patchFailureMatcher||qs,p=i.missingGetRecordMatcher||Ws;try{await Gs(a,r,l,s);return}catch(u){let f=u instanceof Error?u.message:String(u);if(!c(f))throw u;if(i.useDavFallback&&typeof a.updateDav=="function"){if(t&&gt(e)?.load)try{await gt(e)?.load?.(t)}catch{}try{await new Promise((m,b)=>{a.updateDav?.(t,r,l,(w,x,h)=>{if(x===!0){m();return}b(new Error(h||f||s))})});return}catch(m){let b=m instanceof Error?m.message:String(m);if(!i.usePutFallback||!p(b))throw m}}if(i.usePutFallback){if(!t)throw new Error(i.unsupportedMessage);await Fa(e,t,r,l,i.unsupportedMessage,i.documentTextCache);return}throw u}}function U(e,t,o){return e.statementsMatching(t,null,null,o)}function Ie(e,t,o,n,i,a,r){i.push(...e.statementsMatching(t,o,null,n)),r&&a.push(Os(t,o,r,n))}function pe(e,t,o,n){let i=e.each(t,o,null,n),a=i.flatMap(l=>U(e,l,n)),r=e.statementsMatching(t,o,null,n);return{linkedNodes:i,linkedStatements:a,linkStatements:r}}function D(e,t){let o=La(t);return e.find(n=>La(n.value)===o?!0:n.value===t)}import{sym as Qs}from"rdflib";var Jo=0;function B(e){let t=Date.now(),o=t>Jo?t:Jo+1;return Jo=o,Qs(`${e.uri}#id${o}`)}function en(e,t,o,n){let i=n.value.startsWith("tel:")?n.value:`tel:${n.value}`,a=Ma(i),r=[_e(e,d.vcard("hasTelephone"),o,t),_e(o,d.vcard("value"),a,t)];return n.type&&r.push(_e(o,d.rdf("type"),d.vcard(n.type),t)),r}function tn(e,t,o,n){let i=n.value.startsWith("mailto:")?n.value:`mailto:${n.value}`,a=Ma(i),r=[_e(e,d.vcard("hasEmail"),o,t),_e(o,d.vcard("value"),a,t)];return n.type&&r.push(_e(o,d.rdf("type"),d.vcard(n.type),t)),r}function on(e,t,o,n){let i=[_e(e,d.vcard("hasAddress"),o,t)];return n.type&&i.push(_e(o,d.rdf("type"),d.vcard(n.type),t)),n.streetAddress&&i.push(_e(o,d.vcard("street-address"),_t(n.streetAddress),t)),n.locality&&i.push(_e(o,d.vcard("locality"),_t(n.locality),t)),n.region&&i.push(_e(o,d.vcard("region"),_t(n.region),t)),n.postalCode&&i.push(_e(o,d.vcard("postal-code"),_t(n.postalCode),t)),n.countryName&&i.push(_e(o,d.vcard("country-name"),_t(n.countryName),t)),i}async function Zs(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasTelephone"),null,i),r=[],l=[];o.remove.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(p){let f=pe(e,t,d.vcard("hasTelephone"),i).linkStatements.find(m=>m.object?.value===p.value);f&&r.push(f),r.push(...U(e,p,i))}}),o.update.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(!p){l.push(...en(t,i,B(i),c));return}let f=pe(e,t,d.vcard("hasTelephone"),i).linkStatements.find(m=>m.object?.value===p.value);f&&r.push(f),r.push(...U(e,p,i)),l.push(...en(t,i,p,c))}),o.create.forEach(c=>{l.push(...en(t,i,B(i),c))});let s=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function Ys(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasEmail"),null,i),r=[],l=[];o.remove.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(p){let f=pe(e,t,d.vcard("hasEmail"),i).linkStatements.find(m=>m.object?.value===p.value);f&&r.push(f),r.push(...U(e,p,i))}}),o.update.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(!p){l.push(...tn(t,i,B(i),c));return}r.push(...U(e,p,i)),l.push(...tn(t,i,p,c))}),o.create.forEach(c=>{l.push(...tn(t,i,B(i),c))});let s=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function Ks(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasAddress"),null,i),r=[],l=[];o.remove.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(p){let f=pe(e,t,d.vcard("hasAddress"),i).linkStatements.find(m=>m.object?.value===p.value);f&&r.push(f),r.push(...U(e,p,i))}}),o.update.forEach(c=>{if(!c.entryNode)return;let p=D(a,c.entryNode);if(!p){l.push(...on(t,i,B(i),c));return}r.push(...U(e,p,i)),l.push(...on(t,i,p,c))}),o.create.forEach(c=>{l.push(...on(t,i,B(i),c))});let s=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save contact info updates",documentTextCache:n,useDavFallback:!1,usePutFallback:s,forcePut:s})}async function Ra(e,t,o){try{let n=new Map;await Zs(e,t,o.phoneOps,n),await Ys(e,t,o.emailOps,n),await Ks(e,t,o.addressOps,n)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(yi,i),new Error(Nt,{cause:i})}}var Oa=[{iso2:"EG",dialCode:"+20",name:"Egypt"},{iso2:"ZA",dialCode:"+27",name:"South Africa"},{iso2:"GR",dialCode:"+30",name:"Greece"},{iso2:"NL",dialCode:"+31",name:"Netherlands"},{iso2:"BE",dialCode:"+32",name:"Belgium"},{iso2:"FR",dialCode:"+33",name:"France"},{iso2:"ES",dialCode:"+34",name:"Spain"},{iso2:"HU",dialCode:"+36",name:"Hungary"},{iso2:"IT",dialCode:"+39",name:"Italy"},{iso2:"RO",dialCode:"+40",name:"Romania"},{iso2:"CH",dialCode:"+41",name:"Switzerland"},{iso2:"AT",dialCode:"+43",name:"Austria"},{iso2:"GG",dialCode:"+44",name:"Guernsey"},{iso2:"IM",dialCode:"+44",name:"Isle of Man"},{iso2:"JE",dialCode:"+44",name:"Jersey"},{iso2:"GB",dialCode:"+44",name:"United Kingdom"},{iso2:"DK",dialCode:"+45",name:"Denmark"},{iso2:"SE",dialCode:"+46",name:"Sweden"},{iso2:"BV",dialCode:"+47",name:"Bouvet Island"},{iso2:"NO",dialCode:"+47",name:"Norway"},{iso2:"PL",dialCode:"+48",name:"Poland"},{iso2:"DE",dialCode:"+49",name:"Germany"},{iso2:"PE",dialCode:"+51",name:"Peru"},{iso2:"MX",dialCode:"+52",name:"Mexico"},{iso2:"CU",dialCode:"+53",name:"Cuba"},{iso2:"AR",dialCode:"+54",name:"Argentina"},{iso2:"BR",dialCode:"+55",name:"Brazil"},{iso2:"CL",dialCode:"+56",name:"Chile"},{iso2:"CO",dialCode:"+57",name:"Colombia"},{iso2:"VE",dialCode:"+58",name:"Venezuela"},{iso2:"MY",dialCode:"+60",name:"Malaysia"},{iso2:"AU",dialCode:"+61",name:"Australia"},{iso2:"CX",dialCode:"+61",name:"Christmas Island"},{iso2:"CC",dialCode:"+61",name:"Cocos (Keeling) Islands"},{iso2:"ID",dialCode:"+62",name:"Indonesia"},{iso2:"PH",dialCode:"+63",name:"Philippines"},{iso2:"NZ",dialCode:"+64",name:"New Zealand"},{iso2:"PN",dialCode:"+64",name:"Pitcairn Islands"},{iso2:"SG",dialCode:"+65",name:"Singapore"},{iso2:"TH",dialCode:"+66",name:"Thailand"},{iso2:"RU",dialCode:"+73",name:"Russia"},{iso2:"KZ",dialCode:"+76",name:"Kazakhstan"},{iso2:"JP",dialCode:"+81",name:"Japan"},{iso2:"KR",dialCode:"+82",name:"South Korea"},{iso2:"VN",dialCode:"+84",name:"Vietnam"},{iso2:"CN",dialCode:"+86",name:"China"},{iso2:"TR",dialCode:"+90",name:"Turkiye"},{iso2:"IN",dialCode:"+91",name:"India"},{iso2:"PK",dialCode:"+92",name:"Pakistan"},{iso2:"AF",dialCode:"+93",name:"Afghanistan"},{iso2:"LK",dialCode:"+94",name:"Sri Lanka"},{iso2:"MM",dialCode:"+95",name:"Myanmar"},{iso2:"IR",dialCode:"+98",name:"Iran"},{iso2:"SS",dialCode:"+211",name:"South Sudan"},{iso2:"MA",dialCode:"+212",name:"Morocco"},{iso2:"DZ",dialCode:"+213",name:"Algeria"},{iso2:"TN",dialCode:"+216",name:"Tunisia"},{iso2:"LY",dialCode:"+218",name:"Libya"},{iso2:"GM",dialCode:"+220",name:"Gambia"},{iso2:"SN",dialCode:"+221",name:"Senegal"},{iso2:"MR",dialCode:"+222",name:"Mauritania"},{iso2:"ML",dialCode:"+223",name:"Mali"},{iso2:"GN",dialCode:"+224",name:"Guinea"},{iso2:"CI",dialCode:"+225",name:"Ivory Coast"},{iso2:"BF",dialCode:"+226",name:"Burkina Faso"},{iso2:"NE",dialCode:"+227",name:"Niger"},{iso2:"TG",dialCode:"+228",name:"Togo"},{iso2:"BJ",dialCode:"+229",name:"Benin"},{iso2:"MU",dialCode:"+230",name:"Mauritius"},{iso2:"LR",dialCode:"+231",name:"Liberia"},{iso2:"SL",dialCode:"+232",name:"Sierra Leone"},{iso2:"GH",dialCode:"+233",name:"Ghana"},{iso2:"NG",dialCode:"+234",name:"Nigeria"},{iso2:"TD",dialCode:"+235",name:"Chad"},{iso2:"CF",dialCode:"+236",name:"Central African Republic"},{iso2:"CM",dialCode:"+237",name:"Cameroon"},{iso2:"CV",dialCode:"+238",name:"Cape Verde"},{iso2:"ST",dialCode:"+239",name:"Sao Tome and Principe"},{iso2:"GQ",dialCode:"+240",name:"Equatorial Guinea"},{iso2:"GA",dialCode:"+241",name:"Gabon"},{iso2:"CG",dialCode:"+242",name:"Congo"},{iso2:"CD",dialCode:"+243",name:"DR Congo"},{iso2:"AO",dialCode:"+244",name:"Angola"},{iso2:"GW",dialCode:"+245",name:"Guinea-Bissau"},{iso2:"IO",dialCode:"+246",name:"British Indian Ocean Territory"},{iso2:"SC",dialCode:"+248",name:"Seychelles"},{iso2:"SD",dialCode:"+249",name:"Sudan"},{iso2:"RW",dialCode:"+250",name:"Rwanda"},{iso2:"ET",dialCode:"+251",name:"Ethiopia"},{iso2:"SO",dialCode:"+252",name:"Somalia"},{iso2:"DJ",dialCode:"+253",name:"Djibouti"},{iso2:"KE",dialCode:"+254",name:"Kenya"},{iso2:"TZ",dialCode:"+255",name:"Tanzania"},{iso2:"UG",dialCode:"+256",name:"Uganda"},{iso2:"BI",dialCode:"+257",name:"Burundi"},{iso2:"MZ",dialCode:"+258",name:"Mozambique"},{iso2:"ZM",dialCode:"+260",name:"Zambia"},{iso2:"MG",dialCode:"+261",name:"Madagascar"},{iso2:"TF",dialCode:"+262",name:"French Southern and Antarctic Lands"},{iso2:"YT",dialCode:"+262",name:"Mayotte"},{iso2:"RE",dialCode:"+262",name:"Reunion"},{iso2:"ZW",dialCode:"+263",name:"Zimbabwe"},{iso2:"NA",dialCode:"+264",name:"Namibia"},{iso2:"MW",dialCode:"+265",name:"Malawi"},{iso2:"LS",dialCode:"+266",name:"Lesotho"},{iso2:"BW",dialCode:"+267",name:"Botswana"},{iso2:"SZ",dialCode:"+268",name:"Eswatini"},{iso2:"UM",dialCode:"+268",name:"United States Minor Outlying Islands"},{iso2:"KM",dialCode:"+269",name:"Comoros"},{iso2:"SH",dialCode:"+290",name:"Saint Helena, Ascension and Tristan da Cunha"},{iso2:"ER",dialCode:"+291",name:"Eritrea"},{iso2:"AW",dialCode:"+297",name:"Aruba"},{iso2:"FO",dialCode:"+298",name:"Faroe Islands"},{iso2:"GL",dialCode:"+299",name:"Greenland"},{iso2:"GI",dialCode:"+350",name:"Gibraltar"},{iso2:"PT",dialCode:"+351",name:"Portugal"},{iso2:"LU",dialCode:"+352",name:"Luxembourg"},{iso2:"IE",dialCode:"+353",name:"Ireland"},{iso2:"IS",dialCode:"+354",name:"Iceland"},{iso2:"AL",dialCode:"+355",name:"Albania"},{iso2:"MT",dialCode:"+356",name:"Malta"},{iso2:"CY",dialCode:"+357",name:"Cyprus"},{iso2:"FI",dialCode:"+358",name:"Finland"},{iso2:"BG",dialCode:"+359",name:"Bulgaria"},{iso2:"LT",dialCode:"+370",name:"Lithuania"},{iso2:"LV",dialCode:"+371",name:"Latvia"},{iso2:"EE",dialCode:"+372",name:"Estonia"},{iso2:"MD",dialCode:"+373",name:"Moldova"},{iso2:"AM",dialCode:"+374",name:"Armenia"},{iso2:"BY",dialCode:"+375",name:"Belarus"},{iso2:"AD",dialCode:"+376",name:"Andorra"},{iso2:"MC",dialCode:"+377",name:"Monaco"},{iso2:"SM",dialCode:"+378",name:"San Marino"},{iso2:"UA",dialCode:"+380",name:"Ukraine"},{iso2:"RS",dialCode:"+381",name:"Serbia"},{iso2:"ME",dialCode:"+382",name:"Montenegro"},{iso2:"XK",dialCode:"+383",name:"Kosovo"},{iso2:"HR",dialCode:"+385",name:"Croatia"},{iso2:"SI",dialCode:"+386",name:"Slovenia"},{iso2:"BA",dialCode:"+387",name:"Bosnia and Herzegovina"},{iso2:"MK",dialCode:"+389",name:"North Macedonia"},{iso2:"CZ",dialCode:"+420",name:"Czechia"},{iso2:"SK",dialCode:"+421",name:"Slovakia"},{iso2:"LI",dialCode:"+423",name:"Liechtenstein"},{iso2:"FK",dialCode:"+500",name:"Falkland Islands"},{iso2:"GS",dialCode:"+500",name:"South Georgia"},{iso2:"BZ",dialCode:"+501",name:"Belize"},{iso2:"GT",dialCode:"+502",name:"Guatemala"},{iso2:"SV",dialCode:"+503",name:"El Salvador"},{iso2:"HN",dialCode:"+504",name:"Honduras"},{iso2:"NI",dialCode:"+505",name:"Nicaragua"},{iso2:"CR",dialCode:"+506",name:"Costa Rica"},{iso2:"PA",dialCode:"+507",name:"Panama"},{iso2:"PM",dialCode:"+508",name:"Saint Pierre and Miquelon"},{iso2:"HT",dialCode:"+509",name:"Haiti"},{iso2:"GP",dialCode:"+590",name:"Guadeloupe"},{iso2:"BL",dialCode:"+590",name:"Saint Barthelemy"},{iso2:"MF",dialCode:"+590",name:"Saint Martin"},{iso2:"BO",dialCode:"+591",name:"Bolivia"},{iso2:"GY",dialCode:"+592",name:"Guyana"},{iso2:"EC",dialCode:"+593",name:"Ecuador"},{iso2:"GF",dialCode:"+594",name:"French Guiana"},{iso2:"PY",dialCode:"+595",name:"Paraguay"},{iso2:"MQ",dialCode:"+596",name:"Martinique"},{iso2:"SR",dialCode:"+597",name:"Suriname"},{iso2:"UY",dialCode:"+598",name:"Uruguay"},{iso2:"BQ",dialCode:"+599",name:"Caribbean Netherlands"},{iso2:"CW",dialCode:"+599",name:"Curacao"},{iso2:"TL",dialCode:"+670",name:"Timor-Leste"},{iso2:"NF",dialCode:"+672",name:"Norfolk Island"},{iso2:"BN",dialCode:"+673",name:"Brunei"},{iso2:"NR",dialCode:"+674",name:"Nauru"},{iso2:"PG",dialCode:"+675",name:"Papua New Guinea"},{iso2:"TO",dialCode:"+676",name:"Tonga"},{iso2:"SB",dialCode:"+677",name:"Solomon Islands"},{iso2:"VU",dialCode:"+678",name:"Vanuatu"},{iso2:"FJ",dialCode:"+679",name:"Fiji"},{iso2:"PW",dialCode:"+680",name:"Palau"},{iso2:"WF",dialCode:"+681",name:"Wallis and Futuna"},{iso2:"CK",dialCode:"+682",name:"Cook Islands"},{iso2:"NU",dialCode:"+683",name:"Niue"},{iso2:"WS",dialCode:"+685",name:"Samoa"},{iso2:"KI",dialCode:"+686",name:"Kiribati"},{iso2:"NC",dialCode:"+687",name:"New Caledonia"},{iso2:"TV",dialCode:"+688",name:"Tuvalu"},{iso2:"PF",dialCode:"+689",name:"French Polynesia"},{iso2:"TK",dialCode:"+690",name:"Tokelau"},{iso2:"FM",dialCode:"+691",name:"Micronesia"},{iso2:"MH",dialCode:"+692",name:"Marshall Islands"},{iso2:"KP",dialCode:"+850",name:"North Korea"},{iso2:"HK",dialCode:"+852",name:"Hong Kong"},{iso2:"MO",dialCode:"+853",name:"Macau"},{iso2:"KH",dialCode:"+855",name:"Cambodia"},{iso2:"LA",dialCode:"+856",name:"Laos"},{iso2:"BD",dialCode:"+880",name:"Bangladesh"},{iso2:"TW",dialCode:"+886",name:"Taiwan"},{iso2:"MV",dialCode:"+960",name:"Maldives"},{iso2:"LB",dialCode:"+961",name:"Lebanon"},{iso2:"JO",dialCode:"+962",name:"Jordan"},{iso2:"SY",dialCode:"+963",name:"Syria"},{iso2:"IQ",dialCode:"+964",name:"Iraq"},{iso2:"KW",dialCode:"+965",name:"Kuwait"},{iso2:"SA",dialCode:"+966",name:"Saudi Arabia"},{iso2:"YE",dialCode:"+967",name:"Yemen"},{iso2:"OM",dialCode:"+968",name:"Oman"},{iso2:"PS",dialCode:"+970",name:"Palestine"},{iso2:"AE",dialCode:"+971",name:"United Arab Emirates"},{iso2:"IL",dialCode:"+972",name:"Israel"},{iso2:"BH",dialCode:"+973",name:"Bahrain"},{iso2:"QA",dialCode:"+974",name:"Qatar"},{iso2:"BT",dialCode:"+975",name:"Bhutan"},{iso2:"MN",dialCode:"+976",name:"Mongolia"},{iso2:"NP",dialCode:"+977",name:"Nepal"},{iso2:"TJ",dialCode:"+992",name:"Tajikistan"},{iso2:"TM",dialCode:"+993",name:"Turkmenistan"},{iso2:"AZ",dialCode:"+994",name:"Azerbaijan"},{iso2:"GE",dialCode:"+995",name:"Georgia"},{iso2:"KG",dialCode:"+996",name:"Kyrgyzstan"},{iso2:"UZ",dialCode:"+998",name:"Uzbekistan"},{iso2:"US",dialCode:"+1201",name:"United States"},{iso2:"CA",dialCode:"+1204",name:"Canada"},{iso2:"BS",dialCode:"+1242",name:"Bahamas"},{iso2:"BB",dialCode:"+1246",name:"Barbados"},{iso2:"AI",dialCode:"+1264",name:"Anguilla"},{iso2:"AG",dialCode:"+1268",name:"Antigua and Barbuda"},{iso2:"VG",dialCode:"+1284",name:"British Virgin Islands"},{iso2:"VI",dialCode:"+1340",name:"United States Virgin Islands"},{iso2:"KY",dialCode:"+1345",name:"Cayman Islands"},{iso2:"BM",dialCode:"+1441",name:"Bermuda"},{iso2:"GD",dialCode:"+1473",name:"Grenada"},{iso2:"TC",dialCode:"+1649",name:"Turks and Caicos Islands"},{iso2:"MS",dialCode:"+1664",name:"Montserrat"},{iso2:"MP",dialCode:"+1670",name:"Northern Mariana Islands"},{iso2:"GU",dialCode:"+1671",name:"Guam"},{iso2:"AS",dialCode:"+1684",name:"American Samoa"},{iso2:"SX",dialCode:"+1721",name:"Sint Maarten"},{iso2:"LC",dialCode:"+1758",name:"Saint Lucia"},{iso2:"DM",dialCode:"+1767",name:"Dominica"},{iso2:"VC",dialCode:"+1784",name:"Saint Vincent and the Grenadines"},{iso2:"PR",dialCode:"+1787",name:"Puerto Rico"},{iso2:"DO",dialCode:"+1809",name:"Dominican Republic"},{iso2:"TT",dialCode:"+1868",name:"Trinidad and Tobago"},{iso2:"KN",dialCode:"+1869",name:"Saint Kitts and Nevis"},{iso2:"JM",dialCode:"+1876",name:"Jamaica"},{iso2:"SJ",dialCode:"+4779",name:"Svalbard and Jan Mayen"},{iso2:"AX",dialCode:"+35818",name:"Aland Islands"},{iso2:"EH",dialCode:"+2125288",name:"Western Sahara"},{iso2:"VA",dialCode:"+3906698",name:"Vatican City"}],Xs=new Set(["AQ","AX","BL","BM","BQ","BV","CC","CK","CP","CW","CX","EH","FK","FO","GF","GG","GI","GL","GP","GS","GU","HK","HM","IM","IO","JE","KY","MF","MO","MP","MQ","MS","NC","NF","NU","PF","PM","PN","PR","RE","SH","SJ","TC","TF","TK","UM","VG","VI","WF","YT"]);function ja(e){return/^\+1\d{3,}$/.test(e)?"+1":/^\+7\d+$/.test(e)?"+7":/^\+39\d{3,}$/.test(e)?"+39":/^\+358\d+$/.test(e)?"+358":/^\+47\d+$/.test(e)?"+47":/^\+212\d+$/.test(e)?"+212":e}var Js=Oa.filter(e=>!Xs.has(e.iso2)).map(e=>({...e,dialCode:ja(e.dialCode)})).filter((e,t,o)=>{let n=`${e.iso2}|${e.dialCode}`;return o.findIndex(i=>`${i.iso2}|${i.dialCode}`===n)===t}),ec=[...Js].sort((e,t)=>{let o=Number.parseInt(e.dialCode.replace("+",""),10),n=Number.parseInt(t.dialCode.replace("+",""),10);return o!==n?o-n:e.name.localeCompare(t.name)}),tc={"+1":"US","+7":"RU"},oc=Array.from(ec.reduce((e,t)=>{if(!e.get(t.dialCode))return e.set(t.dialCode,t),e;let n=tc[t.dialCode];return n&&t.iso2===n&&e.set(t.dialCode,t),e},new Map).values()),nc=Array.from(new Set(Oa.map(e=>e.dialCode))).sort((e,t)=>t.length-e.length);function je(e){let t=e.trim();if(!t)return{dialCode:"",localNumber:""};if(!t.startsWith("+"))return{dialCode:"",localNumber:t};let o=nc.find(r=>t.startsWith(r));if(!o)return{dialCode:"",localNumber:t};let n=ja(o),i=t.slice(o.length),a=t.slice(n.length);return{dialCode:oc.some(r=>r.dialCode===n)?n:"",localNumber:o.length>n.length?a:i}}function Zt(e,t){let o=t.trim();return o?o.startsWith("+")?o:e?`${e}${o}`:o:""}function Ba(e){if(e.trim().length>0){let t=e.split(" ");for(let o=0;o<t.length;o++)t[o]=t[o].charAt(0).toUpperCase()+t[o].substring(1);return t.join(" ")}return""}function v(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let t=e.value;return typeof t=="string"?t:""}return""}function qe(e){let t=v(e).trim();if(!t)return"";let n=t.replace(/^<|>$/g,"").split("#"),a=n[n.length-1].split("/");return a[a.length-1]}function k(e){return e.replace(/[\u0000-\u001F\u007F]/g," ").replace(/\s+/g," ").trim()}function $(e){return!!(e&&e.trim()!=="")}function ht(e){let t=qe(e).trim().toLowerCase();return t?t==="cell"||t==="mobile"?"Mobile":t==="home"?"Home":t==="work"||t==="office"?"Work":"":""}function Ua(e){let t=qe(e).trim().toLowerCase();return t?t==="cell"||t==="mobile"?"Cell":t==="home"?"Home":t==="work"||t==="office"?"Work":"":""}function bt(e){let t=qe(e).trim().toLowerCase();return t?t==="personal"||t==="home"?"Personal":t==="office"||t==="work"?"Office":"":""}function Ha(e){let t=qe(e).trim().toLowerCase();return t?t==="personal"||t==="home"?"Home":t==="office"||t==="work"?"Office":"":""}function Va(e){return e==="Personal"?"Home":e||""}function qa(e){return e==="Mobile"?"Cell":e||""}function xe(e,t){let o=e[t];if(o){if(o.entryNode){o.status="deleted";return}e.splice(t,1)}}function Ce(e,t,o){if(e[t]=o.trim(),e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function P(e,t){let o=e.filter(a=>a.status==="new"&&t(a)),n=e.filter(a=>a.status==="modified"&&t(a)),i=e.filter(a=>a.status==="deleted");return{create:o,update:n,remove:i}}function S(e,t,o,n){if(e[t]=o,!n(e)){e.status=e.entryNode?"deleted":"new";return}if(e.entryNode){e.status=e.status==="existing"||e.status==="deleted"?"modified":e.status;return}e.status="new"}function Ke(e){return k(e).replace(/\s+/g,"").toLowerCase()}function Yt(e){return k(e).replace(/[^0-9()\-\s.]/g,"")}function fe(e){return k(e)}function nn(e){return k(e)}import{html as Wa}from"lit-html";var Xe=Wa`
  <svg xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  aria-hidden="true"
  focusable="false"
  >
  <path d="M9.22198 11.0453C9.35967 11.1085 9.51478 11.1229 9.66178 11.0862C9.80877 11.0495 9.93887 10.9638 10.0307 10.8433L10.2673 10.5333C10.3915 10.3677 10.5526 10.2333 10.7377 10.1407C10.9228 10.0481 11.127 9.99992 11.334 9.99992H13.334C13.6876 9.99992 14.0267 10.1404 14.2768 10.3904C14.5268 10.6405 14.6673 10.9796 14.6673 11.3333V13.3333C14.6673 13.6869 14.5268 14.026 14.2768 14.2761C14.0267 14.5261 13.6876 14.6666 13.334 14.6666C10.1514 14.6666 7.09914 13.4023 4.8487 11.1519C2.59827 8.90143 1.33398 5.84918 1.33398 2.66659C1.33398 2.31296 1.47446 1.97382 1.72451 1.72378C1.97456 1.47373 2.3137 1.33325 2.66732 1.33325H4.66732C5.02094 1.33325 5.36008 1.47373 5.61013 1.72378C5.86017 1.97382 6.00065 2.31296 6.00065 2.66659V4.66659C6.00065 4.87358 5.95246 5.07773 5.85989 5.26287C5.76732 5.44801 5.63291 5.60906 5.46732 5.73325L5.15532 5.96725C5.03293 6.0607 4.94666 6.19364 4.91118 6.34349C4.87569 6.49333 4.89317 6.65084 4.96065 6.78925C5.87177 8.63983 7.37027 10.1364 9.22198 11.0453Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Je=Wa`
  <svg xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  aria-hidden="true"
  focusable="false"
  >
    <path d="M14.6673 4.66675L8.67332 8.48475C8.46991 8.60289 8.23888 8.66512 8.00365 8.66512C7.76843 8.66512 7.53739 8.60289 7.33398 8.48475L1.33398 4.66675" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.334 2.66675H2.66732C1.93094 2.66675 1.33398 3.2637 1.33398 4.00008V12.0001C1.33398 12.7365 1.93094 13.3334 2.66732 13.3334H13.334C14.0704 13.3334 14.6673 12.7365 14.6673 12.0001V4.00008C14.6673 3.2637 14.0704 2.66675 13.334 2.66675Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
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
`,"text/css"));var et=[{label:"Mobile",value:"Cell"},{label:"Home",value:"Home"},{label:"Work",value:"Work"}],tt=[{label:"Personal",value:"Home"},{label:"Office",value:"Office"}];function yt(e,t){return t.some(o=>o.value===e)?e:t[0]?.value||""}function ac(e){return e==="phone"?et:tt}function Kt(e,t){return{...e,type:yt(e.type||"",ac(t))}}function rc(e){return"value"in e}function ke(e){return rc(e)?$(e.value):[e.streetAddress,e.locality,e.region,e.postalCode,e.countryName].some($)}function lc(e){let t=(e.emails||[]).map(i=>({value:Ke(v(i.valueNode).replace(/^mailto:/i,"")),type:yt(Ha(i.type),tt),entryNode:v(i.entryNode),status:v(i.entryNode)?"existing":"new"})).filter(i=>!!(i.value||i.entryNode||i.type)),o=(e.phones||[]).map(i=>({value:k(v(i.valueNode).replace(/^tel:/i,"")),type:yt(Ua(i.type),et),entryNode:v(i.entryNode),status:"existing"})).filter(i=>!!i.value),n=(e.addresses||[]).map(i=>({streetAddress:fe(v(i.streetAddress)),locality:fe(v(i.locality)),region:fe(v(i.region)),postalCode:fe(v(i.postalCode)),countryName:fe(v(i.countryName)),type:v(i.type),entryNode:v(i.entryNode),status:v(i.entryNode)?"existing":"new"})).filter(i=>ke(i)||!!(i.entryNode||i.type));return{emails:t.length?t:[{value:"",type:tt[0].value,entryNode:"",status:"new"}],phones:o.length?o:[{value:"",type:et[0].value,entryNode:"",status:"new"}],addresses:n.length?n:[{streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"}]}}function sc({phones:e,index:t,displayIndex:o,onDelete:n}){let i=e[t],a=`Phone Number ${o+1}`,r=`Phone Type ${o+1}`,l=`phone-value-${t}`,s=je(i?.value||""),c=s.dialCode,p=m=>{let b=m.target,w=Yt(b.value);e[t]&&S(e[t],"value",Zt(c,w),ke)},u=m=>{let b=m;if(!b.detail.option)return;let w=String(b.detail.option.value);e[t]&&Ce(e[t],"type",w)},f=m=>{m.preventDefault(),n()};return Ee`
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
            @input=${p}
          />
        </label>
      </div>
      <label aria-label=${r} class="label profile-edit-dialog__field-type profile-edit-dialog__phone-type-row">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          aria-label=${r}
          .value=${yt(i?.type||"",et)}
          @change=${u}
        >
          ${et.map(m=>Ee`<solid-ui-combobox-option value=${m.value}>${m.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <div class="profile-edit-dialog__actions">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete phone number ${o+1}`}
          title=${ye}
          @click=${f}
        >
          <span slot="icon" aria-hidden="true">${ve}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function cc(e,t){let o=i=>{i.preventDefault(),e.unshift({value:"",type:et[0].value,entryNode:"",status:"new"}),t({focusSelector:'[name="phone-value-0"]'})},n=e.map((i,a)=>({phone:i,index:a})).filter(({phone:i})=>i.status!=="deleted");return Ee`
    <section
      aria-labelledby="phone-numbers-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="phone-numbers-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${Xe}</span>
          Phone Numbers
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another phone number"
          @click=${o}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${Y}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Phone number entries</legend>
        ${n.map(({index:i},a)=>sc({phones:e,index:i,displayIndex:a,onDelete:()=>{xe(e,i),t()}}))}
      </fieldset>
    </section>
  `}function dc({emails:e,index:t,displayIndex:o,onDelete:n}){let i=e[t],a=`Email Address ${o+1}`,r=`Email Type ${o+1}`,l=`email-value-${t}`,s=u=>{let f=u.target,m=Ke(f.value);e[t]&&S(e[t],"value",m,ke)},c=u=>{let f=u;if(!f.detail.option)return;let m=String(f.detail.option.value);e[t]&&Ce(e[t],"type",m)},p=u=>{u.preventDefault(),n()};return Ee`
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
          .value=${yt(i?.type||"",tt)}
          @change=${c}
        >
          ${tt.map(u=>Ee`<solid-ui-combobox-option value=${u.value}>${u.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <div class="profile-edit-dialog__actions">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete email address ${o+1}`}
          title=${ye}
          @click=${p}
        >
          <span slot="icon" aria-hidden="true">${ve}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function pc(e,t){let o=i=>{i.preventDefault(),e.unshift({value:"",type:tt[0].value,entryNode:"",status:"new"}),t({focusSelector:'[name="email-value-0"]'})},n=e.map((i,a)=>({email:i,index:a})).filter(({email:i})=>i.status!=="deleted");return Ee`
    <section
      aria-labelledby="email-addresses-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="email-addresses-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${Je}</span>
          Email Addresses
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another email address"
          @click=${o}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${Y}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Email address entries</legend>
        ${n.map(({index:i},a)=>dc({emails:e,index:i,displayIndex:a,onDelete:()=>{xe(e,i),t()}}))}
      </fieldset>
    </section>
  `}function fc({addresses:e,index:t,displayIndex:o,onDelete:n}){let i=e[t],a=`Address ${o+1}`,r=`Address Type ${o+1}`,l=`address-street-${t}`,s=`address-locality-${t}`,c=`address-region-${t}`,p=`address-postal-${t}`,u=`address-country-${t}`,f=`address-type-${t}`,m=`address-type-select-${t}`,b=h=>g=>{let _=g.target,y=fe(_.value);e[t]&&S(e[t],h,y,ke)},w=h=>{let _=h.target.value;e[t]&&Ce(e[t],"type",_)},x=h=>{h.preventDefault(),n()};return Ee`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--address-header profile-edit-dialog__row--full">
      <p class="profile-edit-dialog__address-title">${a}</p>
      <label aria-label=${r} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--wide hidden">
        Address Type
        <select name=${f} id=${m} @change=${w} .value=${i?.type||""}>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete address ${o+1}`}
          title=${ye}
          @click=${x}
        >
          <span slot="icon" aria-hidden="true">${ve}</span>
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
          @change=${b("streetAddress")}
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
          @change=${b("locality")}
        />
      </label>
      <label aria-label=${`${a} Postal Code`} class="label profile-edit-dialog__field">
        Postal Code
        <input
          class="input"
          type="text"
          name=${p}
          .value=${i?.postalCode||""}
          data-contact-field="postalCode"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Postal Code"
          autocomplete="postal-code"
          inputmode="text"
          @change=${b("postalCode")}
        />
      </label>
    </div>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--full profile-edit-dialog__row--equal">
      <label aria-label=${`${a} Region`} class="label profile-edit-dialog__field">
        Region
        <input
          class="input"
          type="text"
          name=${c}
          .value=${i?.region||""}
          data-contact-field="region"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="State / Region"
          autocomplete="address-level1"
          inputmode="text"
          @change=${b("region")}
        />
      </label>
      <label aria-label=${`${a} Country`} class="label profile-edit-dialog__field">
        Country
        <input
          class="input"
          type="text"
          name=${u}
          .value=${i?.countryName||""}
          data-contact-field="countryName"
          data-entry-node=${i?.entryNode||""}
          data-row-status=${i?.status||"n/a"}
          placeholder="Country"
          autocomplete="country-name"
          inputmode="text"
          @change=${b("countryName")}
        />
      </label>
    </div>
  `}function uc(e,t){let o=i=>{i.preventDefault(),e.unshift({streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"}),t({focusSelector:'[name="address-street-0"]'})},n=e.map((i,a)=>({address:i,index:a})).filter(({address:i})=>i.status!=="deleted");return Ee`
    <section
      aria-labelledby="address-heading"
      class="profile-edit-dialog__section">
      <header class="profile__section-header profile-edit-dialog__contact-section-header">
        <h3 id="address-heading" class="profile-edit-dialog__section-heading">
          <span class="profile-edit-dialog__section-title-icon" aria-hidden="true">${Qe}</span>
          Addresses
        </h3>
        <solid-ui-button
          variant="tertiary"
          aria-label="Add another address"
          @click=${o}
        >
          <span slot="left-icon" class="profile__add-more-icon" aria-hidden="true">${Y}</span>
          Add More
        </solid-ui-button>
      </header>
      <fieldset>
        <legend class="sr-only">Address entries</legend>
        ${n.map(({index:i},a)=>fc({addresses:e,index:i,displayIndex:a,onDelete:()=>{xe(e,i),t()}}))}
      </fieldset>
    </section>
  `}function mc(e,t){let o=e.querySelector(t);if(!o||typeof o.focus!="function")return;let n=e.ownerDocument.defaultView;if(!!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){o.scrollIntoView({block:"nearest",behavior:"auto"});return}o.scrollIntoView({block:"nearest",behavior:"auto"}),o.focus(),(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement)&&o.select()}function Ga(e,t,o,n={}){let i=(a={})=>Ga(e,t,o,a);ic(Ee`
    ${cc(t.phones,i)}
    ${pc(t.emails,i)}
    ${uc(t.addresses,i)}
    ${o!=="owner"?Ee`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e),n.focusSelector&&mc(e,n.focusSelector)}function gc(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form"),o.classList.add("profile__edit-form--contact-info");let n=lc(e);return Ga(o,n,t),{form:o,formState:n}}function _c(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function hc(e){return/^\d+$/.test(e)}function bc(e){let t=e.phones.filter(n=>n.status!=="deleted");for(let[n,i]of t.entries()){if(!ke(i))continue;let{localNumber:a}=je(i.value||"");if(!hc(a))return`Phone Number ${n+1} should contain only numbers.`}let o=e.emails.filter(n=>n.status!=="deleted");for(let[n,i]of o.entries())if(ke(i)&&!_c(i.value||""))return`Email address ${n+1} must be a valid email address.`;return null}async function an(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=gc(n,i);await oe({title:li,dom:r,form:l,headerAction:{type:"close"},submitLabel:se,cancelLabel:ce,shouldCloseWithoutSave:()=>{let p=P(s.phones,ke),u=P(s.emails,ke),f=P(s.addresses,ke);return p.create.length===0&&p.update.length===0&&p.remove.length===0&&u.create.length===0&&u.update.length===0&&u.remove.length===0&&f.create.length===0&&f.update.length===0&&f.remove.length===0},validate:()=>i!=="owner"?z:bc(s),onSave:async()=>{let p=P(s.phones,ke),u=P(s.emails,ke),f={phoneOps:{create:p.create.map(m=>Kt(m,"phone")),update:p.update.map(m=>Kt(m,"phone")),remove:p.remove},emailOps:{create:u.create.map(m=>Kt(m,"email")),update:u.update.map(m=>Kt(m,"email")),remove:u.remove},addressOps:P(s.addresses,ke)};await Ra(t,o,f)},formatSaveError:p=>p instanceof Error?p.message:Nt})&&a&&await a()}import"rdflib";var Qa=!1,yc=2;function wc(e){let t=e.style.display,o=e.style.overflow,n=e.style.paddingRight,i=e.style.getPropertyValue("-webkit-line-clamp"),a=e.style.getPropertyValue("-webkit-box-orient");e.style.display="block",e.style.overflow="visible",e.style.paddingRight="0",e.style.setProperty("-webkit-line-clamp","unset"),e.style.setProperty("-webkit-box-orient","initial");let r=e.getBoundingClientRect().height;return e.style.display=t,e.style.overflow=o,e.style.paddingRight=n,i?e.style.setProperty("-webkit-line-clamp",i):e.style.removeProperty("-webkit-line-clamp"),a?e.style.setProperty("-webkit-box-orient",a):e.style.removeProperty("-webkit-box-orient"),r}function vc(e){let t=Number.parseFloat(e.lineHeight);if(Number.isFinite(t))return t;let o=Number.parseFloat(e.fontSize);return Number.isFinite(o)?o*1.5:24}function xc(e,t){let o=window.getComputedStyle(e),i=vc(o)*t;return wc(e)>i+1}function Za(e){return e?typeof e=="string"?e:e.value||"":""}function Cc(e=document){[{wrap:".resume-card__description-wrap",text:".resume-card__description-text",toggle:".resume-card__description-toggle",expanded:"resume-card__description-text--expanded",overflowing:"resume-card__description-text--overflowing"},{wrap:".education-card__description-wrap",text:".education-card__description-text",toggle:".education-card__description-toggle",expanded:"education-card__description-text--expanded",overflowing:"education-card__description-text--overflowing"},{wrap:".bio-card__description-wrap",text:".bio-card__description-text",toggle:".bio-card__description-toggle",expanded:"bio-card__description-text--expanded",overflowing:"bio-card__description-text--overflowing"}].forEach(({wrap:o,text:n,toggle:i,expanded:a,overflowing:r})=>{e.querySelectorAll(o).forEach(s=>{if(!(s instanceof HTMLElement))return;let c=s.querySelector(n),p=s.querySelector(i);if(!c||!p)return;if(c.classList.remove(r),c.clientHeight===0||c.clientWidth===0){p.hidden=!0;return}if(c.classList.contains(a)){p.hidden=!1;return}let f=xc(c,yc);if(c.classList.toggle(r,f),p.hidden=!f,!f){p.setAttribute("aria-expanded","false"),p.textContent="...more";return}})})}function Be(){typeof window>"u"||(window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>Cc(window.document))}),Qa||(window.addEventListener("resize",()=>Be()),Qa=!0))}function Xt(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation?.();let t=e.currentTarget;if(!t)return;let o=t.getAttribute("aria-controls");if(!o)return;let n=document.getElementById(o);if(!n)return;let i=n.matches(".resume-card__description-text")?"resume-card__description-text--expanded":n.matches(".education-card__description-text")?"education-card__description-text--expanded":n.matches(".bio-card__description-text")?"bio-card__description-text--expanded":"isExpanded",a=n.classList.toggle(i);t.setAttribute("aria-expanded",a?"true":"false"),t.textContent=a?"...less":"...more",a||Be()}function rn(e){let t=Za(e);if(!t)return"";let o=t.slice(0,4),n=t.slice(5,7),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=Number(n)-1;return!o||a<0||a>11?t:`${i[a]}, ${o}`}function ln(e){let t=Za(e);if(t)return t.slice(0,7)}function X(e){let t=e.currentTarget,o=t?.closest(".profile-section-collapsible"),n=o?.querySelector(".profile-section-collapsible__content");if(!t||!o||!n)return;let i=o.getAttribute("data-expanded")!=="true";o.setAttribute("data-expanded",String(i)),t.setAttribute("aria-expanded",String(i)),n.setAttribute("aria-hidden",String(!i)),n.hidden=!i,i&&typeof window<"u"&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{Be()})})}import{html as Ya,nothing as wt}from"lit-html";function Q({layout:e="desktop",className:t,ariaLabel:o,variant:n={desktop:"tertiary",mobile:"ghost"},onClick:i,desktopIcon:a=wt,desktopLabel:r,mobileIcon:l=wt}){return Ya`
    <solid-ui-button
      variant=${e==="desktop"?n.desktop:n.mobile}
      class=${t}
      aria-label=${o}
      @click=${i}
    >
      ${e==="desktop"?a:wt}
      ${e==="desktop"&&r?Ya`<span class="profile-section-collapsible__action-label">${r}</span>`:wt}
      ${e==="mobile"?l:wt}
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
`,"text/css"));function We(e){if(!e)return"";if(typeof e=="string")return e;if(typeof e=="object"&&"value"in e){let t=e.value;return typeof t=="string"?t:""}return""}function sn(e,t){if(!e)return"";if(t==="email")return e.replace(/^mailto:/i,"");let o=e.replace(/^tel:/i,""),{localNumber:n}=je(o);return n||o}function Xa(e,t,o){if(!t)return"";let n=We(t.valueNode||t.entryNode).trim();if(o==="email"?/^mailto:/i.test(n)||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n):/^tel:/i.test(n)||/^[+()\-\s\d]{5,}$/.test(n))return sn(n,o);let a=t.entryNode||t.valueNode;if(a){let r=e.any(a,d.vcard("value")),l=We(r).trim();if(l)return sn(l,o)}return sn(n,o)}function kc(e,t){if(!e)return T``;let o=Xa(t,e,"phone"),n=ht(e.type);return T`<li class="contact-info__item" role="listitem">
        <div class="contact-info__icon-wrapper">
          <span class="contact-info__icon" aria-hidden="true">${Xe}</span>
        </div>
        <div class="contact-info__item-body">
          <span class="contact-info__contact-point-value">${o}</span>
          ${n?T`<span class="contact-info__contact-point-type"> ${n}</span>`:T``}
        </div>
      </li>`}function Ja(e,t){return!e||!e.length||!e[0]?T``:T`${kc(e[0],t)}${e.length>1?Ja(e.slice(1),t):T``}`}function Ac(e,t){if(!e)return T``;let o=Xa(t,e,"email"),n=bt(e.type);return T`<li class="contact-info__item" role="listitem">
        <div class="contact-info__icon-wrapper">
          <span class="contact-info__icon" aria-hidden="true">${Je}</span>
        </div>
        <div class="contact-info__item-body">
          <span class="contact-info__contact-point-value">${o}</span>
          ${n?T`<span class="contact-info__contact-point-type">${n}</span>`:T``}
        </div>
      </li>`}function er(e,t){return!e||!e.length||!e[0]?T``:T`${Ac(e[0],t)}${e.length>1?er(e.slice(1),t):T``}`}function Nc(e){if(!e)return T``;let t=We(e.streetAddress||e.fullAddress).trim(),o=We(e.locality).trim(),n=We(e.region).trim(),i=We(e.postalCode).trim(),a=We(e.countryName).trim(),l=[[o,n].filter(Boolean).join(", "),i].filter(Boolean).join(" ");return T`
        <li class="contact-info__item" role="listitem">
          <div class="contact-info__icon-wrapper">
            <span class="contact-info__icon" aria-hidden="true">${Qe}</span>
          </div>
          <span class="contact-info__address">
            ${t?T`${t}<br />`:T``}
            ${l?T`${l}<br />`:T``}
            ${a}
          </span>
        </li>`}function tr(e){return!e||!e.length||!e[0]?T``:T`${Nc(e[0])}${e.length>1?tr(e.slice(1)):T``}`}function Sc(e,t,o,n,i,a){let r=o?.emails.length>0||o?.phones.length>0||o?.addresses.length>0;return T`
    <section
      aria-labelledby="contact-details-heading"
      data-profile-section="contact-info"
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="contact-details-heading" tabindex="-1">${Ti}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?T`
              ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit contact information",onClick:s=>an(s,e,t,o,n,a),desktopIcon:T`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:T`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
            `:Ka}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle contact information section"
            aria-controls="contact-details-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="contact-details-panel" class="profile-section-collapsible__content">
        ${o.phones.length>0?T`
              <ul class="contact-info__list" role="list" aria-label="Phone numbers">
                ${Ja(o.phones,e)}
              </ul>
            `:T``}
        ${o.emails.length>0?T`
              <ul class="contact-info__list" role="list" aria-label="Email addresses">
                ${er(o.emails,e)}
              </ul>
            `:T``}
        ${o.addresses.length>0?T`
              <ul class="contact-info__list" role="list" aria-label="Postal addresses">
                ${tr(o.addresses)}
              </ul>
            `:T``}
        ${r?Ka:T`<p>No contact details added yet.</p>`}
      </div>
    </section>
  `}function Tc(){return T`
      <div class="profile__empty-state-content" role="group" aria-label="Empty contact information section">
        <div class="contact-info__empty-icon-wrapper">
          <span class="contact-info__empty-icon">${ji}</span>
        </div>
      </div>
  `}function Ic(e,t,o,n,i,a){return T`
    <section
      aria-labelledby="contact-details-heading"
      data-profile-section="contact-info"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="contact-details-heading" tabindex="-1">${Ii}</h3>
        <div class="profile-section-collapsible__actions">
         ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add contact information",onClick:r=>an(r,e,t,o,n,a),desktopIcon:T`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:T`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle contact information section"
            aria-controls="contact-details-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="contact-details-panel" class="profile-section-collapsible__content">
        ${Tc()}
      </div>
    </section>
  `}function cn(e,t,o,n,i,a){let r=i||"desktop",l={emails:o?.emails||[],phones:o?.phones||[],addresses:o?.addresses||[]},c=!(l.emails.length>0||l.phones.length>0||l.addresses.length>0)&&n==="owner";return T`
    ${c?Ic(e,t,l,n,r,a):Sc(e,t,l,n,r,a)}
  `}import{html as ee,nothing as td}from"lit-html";import"rdflib";import{html as eo,render as jc}from"lit-html";import"rdflib";import{Collection as Ec,st as dn,sym as Lc,literal as or}from"rdflib";var vt="https://www.w3.org/ns/iana/language-code/";function $c(e){Oe(e,"l",vt),Oe(e.updater?.store,"l",vt)}function J(e){return(e||"").trim()}function Pc(e){let t=J(e).toLowerCase();return t?t.startsWith(vt)?t.slice(vt.length):t:""}function Fc(e){return(e||[]).filter(t=>t.status!=="deleted").filter(t=>!!(J(t.publicId)||J(t.name)||J(t.entryNode))).map(t=>({...t,name:J(t.name),publicId:J(t.publicId),proficiency:J(t.proficiency),entryNode:J(t.entryNode)}))}function Jt(e){return`${e.termType}:${e.value}`}function Dc(e){return!!(e&&(e.termType==="NamedNode"||e.termType==="BlankNode"))}function zc(e,t,o,n,i){let a=n.map(s=>({name:J(s.name),publicId:Pc(s.publicId),entryNode:J(s.entryNode)})).filter(s=>!!s.publicId);if(a.length===0)return{statements:[],entryNodes:[]};let r=a.map(s=>{let c=s.entryNode?D(i,s.entryNode):null;return Dc(c)?c:B(o)}),l=[];return l.push(dn(t,d.schema("knowsLanguage"),new Ec(r),o)),r.forEach((s,c)=>{let p=Lc(`${vt}${a[c].publicId}`);l.push(dn(s,d.solid("publicId"),p,o));let u=e.holds(p,d.schema("name"),or(a[c].name,"en"),o);a[c].name&&!u&&l.push(dn(p,d.schema("name"),or(a[c].name,"en"),o))}),{statements:l,entryNodes:r}}function Mc(e,t,o){let n=new Set,i=[],a=t;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,d.rdf("rest"),null,o);if(!l||l.termType==="NamedNode"&&l.value===d.rdf("nil").value)break;a=l.termType==="NamedNode"||l.termType==="BlankNode"?l:null}return i}function Rc(e,t){let o=new Map;e.forEach(i=>{o.set(i.entryNode,i)}),t.remove.forEach(i=>{i.entryNode&&o.delete(i.entryNode)}),t.update.forEach(i=>{i.entryNode&&o.has(i.entryNode)&&o.set(i.entryNode,i)}),t.create.forEach(i=>{J(i.publicId)&&o.set(`new:${i.name}:${Math.random()}`,{...i,publicId:J(i.publicId),proficiency:J(i.proficiency)})});let n=new Map;return Array.from(o.values()).forEach(i=>{let a=J(i.publicId);a&&(n.has(a)||n.set(a,{...i,publicId:a,proficiency:J(i.proficiency)}))}),Array.from(n.values())}async function Oc(e,t,o,n){$c(e);let i=t.doc(),a=jt(t,e).map(y=>({name:J(y.name),publicId:J(y.publicId),proficiency:J(y.proficiency),entryNode:y.entryNode.value,status:"existing"})),r=n&&n.length?Fc(n):Rc(a,o),l=e.each(t,d.schema("knowsLanguage"),null,i),s=l.filter(y=>y.termType==="BlankNode"||y.termType==="NamedNode"),p=!!(e.updater?.serialize&&e.fetcher?.webOperation),u=Array.from(new Map(s.flatMap(y=>Mc(e,y,i)).map(y=>[`${y.termType}:${y.value}`,y])).values()),f=Array.from(new Set(l.flatMap(y=>we(e,y)).filter(y=>y.termType==="NamedNode"||y.termType==="BlankNode").map(y=>`${y.termType}:${y.value}`))).map(y=>{let[I,...C]=y.split(":"),H=C.join(":");return I==="BlankNode"?e.bnode(H):e.sym(H)}),{statements:m,entryNodes:b}=zc(e,t,i,r,f),w=new Set(b.map(y=>Jt(y))),x=f.filter(y=>w.has(Jt(y))),h=f.filter(y=>!w.has(Jt(y))),g=Array.from(new Map(h.map(y=>e.any(y,d.solid("publicId"),null,i)).filter(y=>!!(y&&y.termType==="NamedNode")).map(y=>[Jt(y),y])).values()),_=e.statementsMatching(t,d.schema("knowsLanguage"),null,i);u.forEach(y=>{_.push(...e.statementsMatching(y,null,null,i))}),h.forEach(y=>{_.push(...e.statementsMatching(y,null,null,i))}),x.forEach(y=>{_.push(...e.statementsMatching(y,d.solid("publicId"),null,i))}),g.forEach(y=>{_.push(...e.statementsMatching(y,d.schema("name"),null,i))}),await W(e,i,_,m,{unsupportedMessage:"Language updates are not supported by this store updater.",failureMessage:"Failed to save languages",forcePut:p,useDavFallback:!p,usePutFallback:!0})}async function nr(e,t,o,n){try{await Oc(e,t,o,n)}catch(i){let a=i instanceof Error?i:new Error(String(i));throw V(vi,a),new Error(Tt,{cause:a})}}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
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
`,"text/css"));var Bc="https://query.wikidata.org/sparql",Uc="https://www.w3.org/ns/iana/language-code/",Hc=async e=>{let t=ot(e);if(t.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];let o=new URLSearchParams({query:qc(t),format:"json"});try{let n=await fetch(`${Bc}?${o.toString()}`,{headers:{Accept:"application/sparql-results+json, application/json"}});if(!n.ok)return[];let i=await n.json(),a=Array.isArray(i?.results?.bindings)?i.results.bindings:[],r=new Set;return a.map(l=>{let s=rr(ir(l,"subject"));return{code:s,value:Wc(s),label:ot(ir(l,"name")||s)}}).filter(l=>{if(!l.label||!l.value||l.code.length!==2)return!1;let s=l.value.toLowerCase();return r.has(s)?!1:(r.add(s),!0)})}catch{return[]}};function ot(e){return k(e)}function pn(e){return[e.name,e.publicId,e.proficiency].some($)}function rr(e){return(e||"").trim().toLowerCase()}function Vc(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function qc(e){return`SELECT ?item ?subject ?name WHERE {
    ?item wdt:P305 ?subject .
    OPTIONAL {
      ?item rdfs:label ?name .
      FILTER(langMatches(lang(?name), "en"))
    }
    FILTER regex(?name, "${Vc(e)}", "i")
    FILTER regex(?subject, "^..$", "i")
  } LIMIT 12`}function Wc(e){let t=(e||"").trim();return t?t.startsWith("http://")||t.startsWith("https://")?t:`${Uc}${rr(t)}`:""}function ir(e,t){let o=e?.[t]?.value;return typeof o=="string"?o:""}function Gc(e,t){e.querySelectorAll("solid-ui-combobox[data-language-row-index]").forEach(n=>{let i=Number(n.dataset.languageRowIndex);if(Number.isNaN(i))return;let a=t[i];n.optionsFallback=a?.publicId&&a?.name?[{label:a.name,value:a.publicId}]:[],n.asyncOptionsProvider=Hc,n.value=a?.publicId||""})}function Qc(e){let t=(e||[]).map(o=>({name:ot(v(o.name)),publicId:ot(v(o.publicId)),proficiency:ot(v(o.proficiency)),entryNode:v(o.entryNode),status:v(o.entryNode)?"existing":"new"})).filter(o=>!!(o.name||o.entryNode||o.proficiency||o.publicId));return{languages:t.length?t:[{name:"",publicId:"",proficiency:"",entryNode:"",status:"new"}],initialExistingOrder:[]}}function Zc(e,t){let o=e.filter(n=>n.status!=="deleted"&&!!(n.entryNode||"").trim()).map(n=>(n.entryNode||"").trim());if(o.length!==t.length)return!0;for(let n=0;n<o.length;n++)if(o[n]!==t[n])return!0;return!1}function Yc(e){for(let t=0;t<e.length;t++){let o=e[t];if(!(!o||o.status==="deleted")&&$(o.name)&&!$(o.publicId))return`Language ${t+1}: please choose a language from the suggestions list.`}return null}function Kc(e){return e.some(t=>!t||t.status==="deleted"||!$(t.name)?!1:!$(t.publicId))}function fn(e){let t=Re(document);t&&(t.disabled=Kc(e))}function lr(e,t){let o=e.querySelector(t);if(!o||typeof o.focus!="function")return;typeof o.scrollIntoView=="function"&&o.scrollIntoView({block:"start",behavior:"auto"});let n=o.tagName==="SOLID-UI-COMBOBOX"?o:null,a=(n?n.shadowRoot?.querySelector("input"):null)||o;a.focus(),a instanceof HTMLInputElement&&(a.setSelectionRange(0,0),a.scrollLeft=0,requestAnimationFrame(()=>{a.scrollLeft=0})),n?._closePopup&&requestAnimationFrame(()=>{n._closePopup?.()})}function Xc({rows:e,index:t,displayIndex:o,onDelete:n,onDragStart:i,onDragEnter:a,onDragOver:r,onDrop:l,onDragEnd:s,onPointerDown:c,onPointerMove:p,onPointerUp:u,onPointerCancel:f,isDropTarget:m}){let b=e[t],w=`Language ${o+1}`,x=`Language Proficiency ${o+1}`,h=`proficiency-${t}`,g=`proficiency-${t}`,_=C=>H=>{!e[t]||!H.detail.option||(S(e[t],C,ot(H.detail.option.label),pn),e[t].publicId=String(H.detail.option.value),fn(e))},y=C=>{let R=C.target.value;e[t]&&(Ce(e[t],"proficiency",R),fn(e))},I=C=>{C.preventDefault(),n()};return eo`
    <div
      class="profile-edit-dialog__row profile-edit-dialog__row--language ${m?"profile-edit-dialog__row--drop-target":""}"
      data-language-reorder-index=${String(t)}
      @dragenter=${()=>a(t)}
      @dragover=${C=>r(C,t)}
      @drop=${C=>l(C,t)}
    >
      <solid-ui-button
        class="profile-edit-dialog__drag-handle"
        variant="ghost"
        aria-label=${`Reorder language ${o+1}`}
        title="Drag to reorder"
        draggable="true"
        @dragstart=${C=>i(C,t)}
        @dragend=${()=>s()}
        @pointerdown=${C=>c(C,t)}
        @pointermove=${C=>p(C)}
        @pointerup=${C=>u(C)}
        @pointercancel=${C=>f(C)}
      >
        <span slot="icon" aria-hidden="true">${Dt}</span>
      </solid-ui-button>
      <label aria-label=${`${w} Language`} class="label profile-edit-dialog__field profile-edit-dialog__field--language-name">
        <solid-ui-combobox
          select-only
          aria-label=${`${w} Language`}
          data-language-row-index=${String(t)}
          placeholder="Language"
          @change=${_("name")}
        ></solid-ui-combobox>
        <small class="profile-edit-dialog__input-help-text">Type to search and select one language suggestion.</small>
      </label>
      <label aria-label=${x} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--language-proficiency" hidden>
        <select name=${h} id=${g} @change=${y} .value=${b?.proficiency||""}>
          <option value="Basic">Basic</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Fluent">Fluent</option>
        </select>
      </label>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge profile-edit-dialog__actions--language">
        <solid-ui-button
          variant="ghost"
          class="profile-edit-dialog__delete-button"
          aria-label=${`Delete language ${o+1}`}
          title=${ye}
          @click=${I}
        >
          <span slot="icon" class="profile-edit-dialog__delete-icon" aria-hidden="true">${ve}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function Jc(e,t){let o=null,n=null,i=null,a=(h,g)=>{if(h===g)return;let _=e[h];_&&(e.splice(h,1),e.splice(g,0,_))},r=(h,g)=>{o=g,n=g,h.dataTransfer&&(h.dataTransfer.effectAllowed="move",h.dataTransfer.setData("text/plain",String(g)))},l=h=>{o!==null&&(n=h)},s=(h,g)=>{h.preventDefault(),o!==null&&(n=g),h.dataTransfer&&(h.dataTransfer.dropEffect="move")},c=(h,g)=>{h.preventDefault();let _=h.dataTransfer?.getData("text/plain"),y=o??(_?Number(_):null);y===null||Number.isNaN(y)||(a(y,g),o=null,n=null,t())},p=()=>{o=null,n=null},u=h=>{let _=(h.currentTarget?.ownerDocument||document).elementFromPoint(h.clientX,h.clientY)?.closest("[data-language-reorder-index]");if(!_)return;let y=Number(_.dataset.languageReorderIndex);Number.isNaN(y)||(n=y)},f=(h,g)=>{h.pointerType==="touch"&&(h.preventDefault(),o=g,n=g,i=h.pointerId,h.currentTarget?.setPointerCapture?.(h.pointerId))},m=h=>{h.pointerType!=="touch"||i!==h.pointerId||o===null||(h.preventDefault(),u(h))},b=h=>{if(h.pointerType!=="touch"||i!==h.pointerId)return;h.preventDefault(),u(h);let g=o,_=n;h.currentTarget?.releasePointerCapture?.(h.pointerId),i=null,o=null,n=null,!(g===null||_===null||g===_)&&(a(g,_),t())},w=h=>{h.pointerType!=="touch"||i!==h.pointerId||(h.currentTarget?.releasePointerCapture?.(h.pointerId),i=null,o=null,n=null)},x=e.map((h,g)=>({row:h,index:g})).filter(({row:h})=>h.status!=="deleted");return eo`
    <section class="profile-edit-dialog__section" aria-label="Languages">
      <fieldset>
        <legend class="sr-only">Language entries</legend>
        ${x.map(({index:h},g)=>Xc({rows:e,index:h,displayIndex:g,onDragStart:r,onDragEnter:l,onDragOver:s,onDrop:c,onDragEnd:p,onPointerDown:f,onPointerMove:m,onPointerUp:b,onPointerCancel:w,isDropTarget:n===h,onDelete:()=>{xe(e,h),t()}}))}
      </fieldset>
    </section>
  `}function un(e,t,o,n={}){let i=(a={})=>un(e,t,o,a);jc(eo`
    ${Jc(t.languages,i)}
    ${o!=="owner"?eo`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e),Gc(e,t.languages),fn(t.languages),n.focusSelector&&lr(e,n.focusSelector)}function ed(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form");let n=Qc(e);return n.initialExistingOrder=n.languages.filter(a=>!!(a.entryNode||"").trim()).map(a=>(a.entryNode||"").trim()),un(o,n,t),{form:o,formState:n,addRow:()=>{n.languages.unshift({name:"",publicId:"",proficiency:"",entryNode:"",status:"new"}),un(o,n,t,{focusSelector:'[data-language-row-index="0"]'})}}}async function mn(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:c}=ed(n,i);await oe({title:ri,dom:r,form:l,onOpen:()=>lr(l,'[data-language-row-index="0"]'),shouldCloseWithoutSave:()=>{let u=P(s.languages,pn),f=Zc(s.languages,s.initialExistingOrder);return u.create.length===0&&u.update.length===0&&u.remove.length===0&&!f},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another language",onClick:c},submitLabel:se,cancelLabel:ce,validate:()=>i!=="owner"?z:Yc(s.languages),onSave:async()=>{let u=P(s.languages,pn),f={create:u.create,update:u.update,remove:u.remove};await nr(t,o,f,s.languages)},formatSaveError:u=>u instanceof Error?u.message:Tt})&&a&&await a()}A(L(`/* Languages list */
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
  width: var(--icon-xs, 1.5rem);
  height: var(--icon-xs, 1.5rem);
  flex-shrink: 0;
}

.languages__empty-icon svg {
  display: block;
  width: 100%;
  height: 100%;
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
`,"text/css"));function od(e,t=!1){return e?t?ee`<li class="languages__item-label" role="listitem">${e.name}</li>`:ee``:ee``}function sr(e,t=!1){return!e||!e.length||!e[0]?ee``:ee`${od(e[0],t)}${e.length>1?sr(e.slice(1),t):ee``}`}function nd(e,t,o,n,i,a){let r=Array.isArray(o)&&o.length>0,l=e.each(t,d.schema("knowsLanguage")).length>0;return ee`
    <section
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      data-profile-section="languages"
      aria-labelledby="languages-heading"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="languages-heading">${Co}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?ee`
              ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit languages",onClick:c=>mn(c,e,t,o,n,a),desktopIcon:ee`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ee`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
            `:td}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle languages section"
            aria-controls="languages-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="languages-panel" class="profile-section-collapsible__content">
        ${r?ee`
              <ul class="languages__list" role="list" aria-label="Known languages">
                ${sr(o,!0)}
              </ul>
            `:l?ee`<p>Language details are missing for one or more entries.</p>`:ee`<p>No languages added yet.</p>`}
      </div>
    </section>
  `}function id(){return ee`
      <div class="profile__empty-state-content" role="group" aria-label="Empty languages section">
        <div class="languages__empty-icon-wrapper">
          <span class="languages__empty-icon">${Oi}</span>
        </div>
      </div>
  `}function ad(e,t,o,n,i,a){return ee`
    <section
      aria-labelledby="languages-heading"
      data-profile-section="languages"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="languages-heading" tabindex="-1">${Co}</h3>
        <div class="profile-section-collapsible__actions">
          ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add languages",onClick:r=>mn(r,e,t,o,n,a),desktopIcon:ee`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ee`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle languages section"
            aria-controls="languages-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="languages-panel" class="profile-section-collapsible__content">
        ${id()}
      </div>
    </section>
  `}function gn(e,t,o,n,i,a){let r=i||"desktop",l=o||[],c=!(Array.isArray(l)&&l.length>0)&&n==="owner";return ee`
    ${c?ad(e,t,l,n,r,a):nd(e,t,l,n,r,a)}
      `}import{html as ue,nothing as _r}from"lit-html";import"rdflib";import{html as no,render as pd}from"lit-html";import"rdflib";import{blankNode as _n,st as hn,literal as rd,sym as bn}from"rdflib";var cr="http://data.europa.eu/esco/skill/",ld="skill:";function sd(e){Oe(e,"skill",ld)}function cd(e){let t=e.trim();if(!t)return _n();if(t.startsWith("_:"))return _n(t.slice(2));if(t.startsWith("skill:"))return bn(t);if(t.startsWith(cr)){let o=t.slice(cr.length);return bn(o?`skill:${o}`:t)}return t.includes(":")?bn(t):_n(t)}function dr(e){return e.startsWith("_:")?e.slice(2):e}function pr(e,t,o,n){let i=dr(n);return e.statementsMatching(t,d.schema("skills"),null,o).filter(a=>dr(a.object.value)===i||a.object.value===n)}function to(e,t,o,n){if(!n.name)return[];let i=cd(n.publicId);return[hn(e,d.schema("skills"),o,t),hn(o,d.solid("publicId"),i,t),hn(i,d.schema("name"),rd(n.name),t)]}async function dd(e,t,o){sd(e);let n=t.doc(),i=e.each(t,d.schema("skills")),a=[],r=[],l=s=>{let c=pe(e,s,d.solid("publicId"),n);a.push(...c.linkedStatements)};o.remove.forEach(s=>{if(!s.entryNode)return;let c=D(i,s.entryNode);a.push(...pr(e,t,n,s.entryNode)),c&&c.termType!=="Literal"&&(a.push(...U(e,c,n)),c.termType==="NamedNode"&&l(c))}),o.update.forEach(s=>{if(!s.entryNode)return;let c=D(i,s.entryNode);if(!c){r.push(...to(t,n,B(n),s));return}if(a.push(...pr(e,t,n,s.entryNode)),c.termType!=="Literal"&&(a.push(...U(e,c,n)),c.termType==="NamedNode"&&l(c)),c.termType==="NamedNode"){r.push(...to(t,n,c,s));return}r.push(...to(t,n,B(n),s))}),o.create.forEach(s=>{r.push(...to(t,n,B(n),s))}),await W(e,n,a,r,{unsupportedMessage:"Skill updates are not supported by this store updater.",failureMessage:"Failed to save skills",useDavFallback:!0,usePutFallback:!0})}async function oo(e,t,o){try{await dd(e,t,o)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(ki,i),new Error(It,{cause:i})}}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
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
`,"text/css"));var fd="https://ec.europa.eu/esco/api/search?language=$(language)&limit=$(limit)&type=skill&text=$(name)&selectedVersion=v1.2.0",ud="en",md=8,fr="http://data.europa.eu/esco/skill/",gd=async e=>{let t=nt(e);if(t.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];try{let o=await fetch(_d(t),{headers:{Accept:"application/json"}});if(!o.ok)return[];let n=await o.json(),i=Array.isArray(n?._embedded?.results)?n._embedded.results:[],a=new Set;return i.map(r=>{let l=nt(hd(r)),s=ur(typeof r?.uri=="string"?r.uri:"");return{label:l,value:s}}).filter(r=>{if(!r.label)return!1;let l=r.label.toLowerCase();return a.has(l)?!1:(a.add(l),!0)})}catch{return[]}};function ur(e){let t=nt(e);if(!t)return"";if(t.startsWith("_:")||t.startsWith("skill:"))return t;if(t.startsWith(fr)){let o=t.slice(fr.length);return o?`skill:${o}`:t}return t}function _d(e){return fd.replace("$(language)",encodeURIComponent(ud)).replace("$(limit)",encodeURIComponent(String(md))).replace("$(name)",encodeURIComponent(e))}function hd(e){return e?.title||e?.searchHit||e?.preferredLabel?.en||e?.uri||""}function nt(e){return k(e)}function io(e){return[e.name].some($)}function bd(e){let t=(e||[]).map(o=>({name:nt(v(o.name)),publicId:ur(v(o.publicId)),entryNode:v(o.entryNode),status:v(o.entryNode)?"existing":"new"})).filter(o=>!!(o.name||o.publicId||o.entryNode));return{skills:t.length?t:[{name:"",publicId:"",entryNode:"",status:"new"}]}}function yd(e,t){e.querySelectorAll("solid-ui-combobox[data-skill-row-index]").forEach(n=>{let i=Number(n.dataset.skillRowIndex);if(Number.isNaN(i))return;let a=t[i];a&&(n.optionsFallback=a.name?[{label:a.name,value:a.publicId}]:[],n.asyncOptionsProvider=gd,n.value=a.publicId||a.name)})}function wd(e){return null}function vd(e){return!1}function yn(e){let t=Re(document);t&&(t.disabled=vd(e))}function mr(e,t){let o=e.querySelector(t);if(!o||typeof o.focus!="function")return;typeof o.scrollIntoView=="function"&&o.scrollIntoView({block:"start",behavior:"auto"});let n=o.tagName==="SOLID-UI-COMBOBOX"?o:null,a=(n?n.shadowRoot?.querySelector("input"):null)||o;a.focus(),a instanceof HTMLInputElement&&(a.setSelectionRange(0,0),a.scrollLeft=0,requestAnimationFrame(()=>{a.scrollLeft=0})),n?._closePopup&&requestAnimationFrame(()=>{n._closePopup?.()})}function xd({rows:e,index:t,displayIndex:o,onDelete:n}){let i=`Skill ${o+1}`,a=s=>{let c=s.target;S(e[t],"name",nt(String(c.value)),io),e[t].publicId="",yn(e)},r=s=>{!e[t]||!s.detail.option||(S(e[t],"name",nt(s.detail.option.label),io),e[t].publicId=String(s.detail.option.value),yn(e))},l=s=>{s.preventDefault(),n()};return no`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--full profile-edit-dialog__row--skill">
      <label aria-label=${`${i} Name`} class="label profile-edit-dialog__field profile-edit-dialog__field--full">
        <solid-ui-combobox
          aria-label=${`${i} Name`}
          data-skill-row-index=${String(t)}
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
          aria-label=${`Delete skill ${o+1}`}
          title=${ye}
          @click=${l}
        >
          <span slot="icon" class="profile-edit-dialog__delete-icon" aria-hidden="true">${ve}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function Cd(e,t){let o=e.map((n,i)=>({row:n,index:i})).filter(({row:n})=>n.status!=="deleted");return no`
    <section class="profile-edit-dialog__section" aria-label="Skills">
      <fieldset>
        <legend class="sr-only">Skill entries</legend>
        ${o.map(({index:n},i)=>xd({rows:e,index:n,displayIndex:i,onDelete:()=>{xe(e,n),t()}}))}
      </fieldset>
    </section>
  `}function wn(e,t,o,n={}){let i=(a={})=>wn(e,t,o,a);pd(no`
    ${Cd(t.skills,i)}
    ${o!=="owner"?no`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e),yd(e,t.skills),yn(t.skills),n.focusSelector&&mr(e,n.focusSelector)}function kd(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form");let n=bd(e);return wn(o,n,t),{form:o,formState:n,addRow:()=>{n.skills.unshift({name:"",publicId:"",entryNode:"",status:"new"}),wn(o,n,t,{focusSelector:'[data-skill-row-index="0"]'})}}}async function vn(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:c}=kd(n,i);await oe({title:ai,dom:r,form:l,onOpen:()=>mr(l,'[data-skill-row-index="0"]'),shouldCloseWithoutSave:()=>{let u=P(s.skills,io);return u.create.length===0&&u.update.length===0&&u.remove.length===0},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another skill",onClick:c},submitLabel:se,cancelLabel:ce,validate:()=>i!=="owner"?z:wd(s.skills),onSave:async()=>{let u=P(s.skills,io),f={create:u.create,update:u.update,remove:u.remove};await oo(t,o,f)},formatSaveError:u=>u instanceof Error?u.message:It})&&a&&await a()}A(L(`.skills__list {
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
`,"text/css"));var Ad="Unable to remove your skill.";function gr(e,t){let o=e.querySelector(".profile-section-inline-error");if(o){if(!t){o.textContent="",o.hidden=!0,o.setAttribute("aria-hidden","true");return}o.textContent=t,o.hidden=!1,o.setAttribute("aria-hidden","false"),o.focus()}}function Nd(e,t,o,n,i){if(!e)return ue``;let a=async r=>{if(r.preventDefault(),n!=="owner")return;let l=r.currentTarget,s=l?.closest(".skills__item"),c=l?.closest('[data-profile-section="skills"]'),p={name:e.name,publicId:e.publicId,entryNode:e.entryNode.value,status:"deleted"};try{l?.setAttribute("disabled",""),l?.setAttribute("aria-busy","true"),l?.setAttribute("data-loading","true"),s?.setAttribute("data-pending","true"),await oo(t,o,{create:[],update:[],remove:[p]}),c&&gr(c,null),i&&await i()}catch(u){c&&gr(c,Me(u,Ad))}finally{l?.removeAttribute("disabled"),l?.setAttribute("aria-busy","false"),l?.removeAttribute("data-loading"),s?.removeAttribute("data-pending")}};return ue`
    <li class="skills__item" role="listitem">
      <span class="skills__item-label">${Ba(e.name)}</span>
      ${n==="owner"?ue`
            <span class="skills__item-tail">
              <solid-ui-button
                variant="ghost"
                aria-label=${`Remove ${e.name} skill`}
                @click=${a}
              >
                <span slot="icon" aria-hidden="true">${Hi}</span>
              </solid-ui-button>
            </span>
          `:_r}
    </li>
  `}function Sd(e,t,o,n,i,a){let r=Array.isArray(o)&&o.length>0;return ue`
    <section
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      data-profile-section="skills"
      aria-labelledby="skills-heading"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="skills-heading">${xo}</h3>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?ue`
            ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit skills",onClick:s=>vn(s,e,t,o,n,a),desktopIcon:ue`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ue`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          `:_r}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle skills section"
            aria-controls="skills-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div
        id="skills-panel"
        class="profile-section-collapsible__content"
      >
        ${r?ue`
              <ul class="skills__list" role="list" aria-label="Professional skills and competencies">
                ${o.map(s=>Nd(s,e,t,n,a))}
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
            `:ue`<p>No skills added yet.</p>`}
      </div>
    </section>
  `}function Td(){return ue`
      <div class="profile__empty-state-content" role="group" aria-label="Empty skills section">
        <div class="skills__empty-icon-wrapper">
          <span class="skills__empty-icon">${Ri}</span>
        </div>
      </div>
  `}function Id(e,t,o,n,i,a){return ue`
    <section
      aria-labelledby="skills-heading"
      data-profile-section="skills"
      class="profile__section--empty profile__section--empty-sidebar profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="skills-heading" tabindex="-1">${xo}</h3>
        <div class="profile-section-collapsible__actions">
          ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add skills",onClick:r=>vn(r,e,t,o,n,a),desktopIcon:ue`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ue`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle skills section"
            aria-controls="skills-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="skills-panel" class="profile-section-collapsible__content">
        ${Td()}
      </div>
    </section>
  `}function xn(e,t,o,n,i,a){let r=i||"desktop",l=o||[],c=!(Array.isArray(l)&&l.length>0)&&n==="owner";return ue`
    ${c?Id(e,t,l,n,r,a):Sd(e,t,l,n,r,a)}
  `}import{html as te,nothing as Sn}from"lit-html";import"rdflib";import{html as Pe,render as Fd}from"lit-html";import{literal as Dd}from"rdflib";import{st as he,literal as it,sym as br}from"rdflib";function hr(e){let t=(e?.value||"").trim();if(!t)return null;let o=t.slice(0,10);return it(o,d.xsd("date"))}function Ed(e){let t=(e.roleType||"").trim();if(t==="PastRole"||t==="CurrentRole"||t==="FutureRole")return d.solid(t);if(e.isCurrentRole)return d.solid("CurrentRole");let o=new Date().toISOString().slice(0,10),n=e.startDate?.value?.slice(0,10)||"",i=e.endDate?.value?.slice(0,10)||"";return n&&n>o?d.solid("FutureRole"):i&&i<o?d.solid("PastRole"):d.solid("FutureRole")}function Ld(e){let t=(e||"").trim();if(!t||t==="PastRole"||t==="CurrentRole"||t==="FutureRole")return null;if(t.startsWith("http://")||t.startsWith("https://")){let n=t.split(/[#/]/).pop();return n==="PastRole"||n==="CurrentRole"||n==="FutureRole"?null:br(t)}let o=t.match(/^([a-zA-Z][\w-]*):(.*)$/);if(o){let n=o[1].toLowerCase(),i=o[2].trim();return!i||i==="PastRole"||i==="CurrentRole"||i==="FutureRole"?null:n==="schema"?d.schema(i):n==="vcard"?d.vcard(i):n==="solid"?d.solid(i):n==="org"?d.org(i):null}return d.schema(t)}function $d(e,t,o){if(!o.orgName&&!o.orgType&&!o.orgLocation&&!o.orgHomePage)return[];let n=B(e),i=[he(t,d.org("organization"),n,e)],a=Ld(o.orgType||"");return a&&i.push(he(n,d.rdf("type"),a,e)),i.push(he(n,d.rdf("type"),d.vcard("Organization"),e)),o.orgName&&i.push(he(n,d.schema("name"),it(o.orgName),e)),o.orgLocation&&i.push(he(n,d.org("location"),it(o.orgLocation),e)),o.orgHomePage&&i.push(he(n,d.schema("uri"),it(o.orgHomePage),e)),(o.orgPublicId||"").trim()&&i.push(he(n,d.solid("publicId"),br((o.orgPublicId||"").trim()),e)),i}function Cn(e,t,o,n,i=!0){let a=[];if(i&&a.push(he(o,d.org("member"),e,t)),a.push(he(o,d.rdf("type"),Ed(n),t)),n.title&&a.push(he(o,d.vcard("role"),it(n.title),t)),n.startDate){let r=hr(n.startDate);r&&a.push(he(o,d.schema("startDate"),r,t))}if(n.endDate&&!n.isCurrentRole){let r=hr(n.endDate);r&&a.push(he(o,d.schema("endDate"),r,t))}return n.description&&a.push(he(o,d.schema("description"),it(n.description),t)),a.push(...$d(t,o,n)),a}async function Pd(e,t,o){let n=t.doc(),i=e.each(null,d.org("member"),t,n),a=[],r=[];o.remove.forEach(s=>{if(!s.entryNode)return;let c=D(i,s.entryNode);if(c){let p=pe(e,c,d.org("organization"),n);a.push(...p.linkedStatements),a.push(...U(e,c,n))}}),o.update.forEach(s=>{if(!s.entryNode)return;let c=D(i,s.entryNode);if(!c)throw new Error(Ni);if(c.termType==="BlankNode"){let u=B(n);r.push(...Cn(t,n,u,s,!0));return}[d.rdf("type"),d.vcard("role"),d.schema("startDate"),d.schema("endDate"),d.schema("description")].forEach(u=>{Ie(e,c,u,n,a,r,null)});let p=pe(e,c,d.org("organization"),n);a.push(...p.linkedStatements),a.push(...p.linkStatements),r.push(...Cn(t,n,c,s,!1))}),o.create.forEach(s=>{r.push(...Cn(t,n,B(n),s))});let l=await ge(e,n,r);await W(e,n,a,r,{unsupportedMessage:ae,failureMessage:"Failed to save resume updates",useDavFallback:!1,usePutFallback:l,forcePut:l})}async function yr(e,t,o){try{await Pd(e,t,o)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(Ci,i),new Error(Et,{cause:i})}}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));var rt=[{label:"Corporation",value:"Corporation"},{label:"Educational Organization",value:"EducationalOrganization"},{label:"Research Organization",value:"ResearchOrganization"},{label:"Government Organization",value:"GovernmentOrganization"},{label:"NGO",value:"NGO"},{label:"Performing Group",value:"PerformingGroup"},{label:"Project",value:"Project"},{label:"Sports Organization",value:"SportsOrganization"},{label:"Other",value:"Other"}],wr=[{value:"01",label:"January"},{value:"02",label:"February"},{value:"03",label:"March"},{value:"04",label:"April"},{value:"05",label:"May"},{value:"06",label:"June"},{value:"07",label:"July"},{value:"08",label:"August"},{value:"09",label:"September"},{value:"10",label:"October"},{value:"11",label:"November"},{value:"12",label:"December"}],zd=e=>async t=>{let o=k(t);if(o.length<2)return[{value:"",label:"Type at least 2 characters to search",selectable:!1}];try{let n=await fetch(Ud(o));if(!n.ok)return[];let i=await n.json(),a=Array.isArray(i?.search)?i.search:[],r=new Set,l=a.map(w=>{let x=k(Gd(w)),h=k(typeof w?.concepturi=="string"?w.concepturi:typeof w?.url=="string"?w.url:"");return{label:x,value:h}}).filter(w=>{if(!w.label)return!1;let x=w.label.toLowerCase();return r.has(x)?!1:(r.add(x),!0)}),s=l.map(w=>ro(String(w.value))).filter(Boolean);if(!s.length)return l.slice(0,kn);let c=await xr(s),p=Array.from(new Set(Object.values(c).flatMap(w=>[...lo(w,"P31"),...lo(w,"P279")]))),u=await xr(p),f={...c,...u};if(Object.keys(f).length===0)return l.slice(0,kn);let m=e();return l.filter(w=>{let x=ro(String(w.value));return Wd(x,f,m)}).slice(0,kn)}catch{return[]}},Md="https://www.wikidata.org/w/api.php?action=wbsearchentities&language=$(language)&type=item&limit=$(limit)&format=json&origin=*&search=$(name)",Rd="https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&origin=*&props=claims&ids=$(ids)",Od="en",kn=8,jd=24,kr={Corporation:["http://www.wikidata.org/entity/Q6881511","http://www.wikidata.org/entity/Q4830453"],EducationalOrganization:["http://www.wikidata.org/entity/Q178706","http://www.wikidata.org/entity/Q2385804","http://www.wikidata.org/entity/Q1664720"],ResearchOrganization:["http://www.wikidata.org/entity/Q31855"],GovernmentOrganization:["http://www.wikidata.org/entity/Q327333"],NGO:["http://www.wikidata.org/entity/Q163740","http://www.wikidata.org/entity/Q79913","http://www.wikidata.org/entity/Q708676"],PerformingGroup:["http://www.wikidata.org/entity/Q32178211"],Project:["http://www.wikidata.org/entity/Q170584"],SportsOrganization:["http://www.wikidata.org/entity/Q4438121"],Other:["http://www.wikidata.org/entity/Q43229"]},Bd=Array.from(new Set(rt.flatMap(e=>kr[e.value]||[]))),Ar="__present__";function Ud(e){return Md.replace("$(language)",encodeURIComponent(Od)).replace("$(limit)",encodeURIComponent(String(jd))).replace("$(name)",encodeURIComponent(e))}function Hd(e){return Rd.replace("$(ids)",encodeURIComponent(e.join("|")))}function ro(e){let o=k(e).match(/Q\d+/);return o?o[0]:""}function lo(e,t){return(e?.claims?.[t]||[]).map(n=>n?.mainsnak).filter(n=>n?.snaktype==="value").map(n=>n?.datavalue?.value?.id).filter(n=>typeof n=="string"&&n.length>0)}function Vd(e){let t=lt(e),o=kr[t];return o?.length?o.map(n=>ro(n)).filter(Boolean):Bd.map(n=>ro(n)).filter(Boolean)}var vr=new Map;function qd(e){let t=lt(e),o=vr.get(t);if(o)return o;let n=new Set(Vd(t));return vr.set(t,n),n}async function xr(e){let t=Array.from(new Set(e.filter(Boolean)));if(!t.length||typeof fetch!="function")return{};let o=await fetch(Hd(t));return o.ok?(await o.json())?.entities||{}:{}}function Wd(e,t,o){let n=qd(o),i=new Set,a=[e];for(;a.length;){let r=a.shift();if(!r||i.has(r))continue;if(i.add(r),n.has(r))return!0;let l=t[r];a.push(...lo(l,"P31")),a.push(...lo(l,"P279"))}return!1}function Gd(e){return e?.label||e?.match?.text||e?.id||""}function lt(e){return rt.some(t=>t.value===e)?e:rt[0]?.value||""}function Cr(e){let t=new Date().getFullYear(),o=Array.from({length:120},(i,a)=>String(t-a));return Array.from(new Set([...o,...e].filter(Boolean))).sort((i,a)=>Number(a)-Number(i)).map(i=>({label:i,value:i}))}function ao(e,t,o){return e==="start-month"?wr:e==="start-year"?Cr(t):e==="end-month"?o?[{value:Ar,label:"Present"}]:wr:e==="end-year"&&o?[{value:"",label:""}]:Cr(t)}function at(e){let t=(e||"").trim();if(!t)return{year:"",month:""};let o=t.match(/^(\d{4})-(\d{2})/);if(o)return{year:o[1],month:o[2]};let n=t.match(/(\d{4})/);return{year:n?n[1]:"",month:""}}function re(e){return!!e.isCurrentRole||[e.title,e.roleType,v(e.startDate),v(e.endDate),e.orgName,e.orgType,e.orgLocation,e.orgHomePage,e.description].some($)}function Qd(e){let t=(e||[]).map(o=>({title:k(v(o.title)),roleType:k(v(o.roleType)),startDate:o.startDate,endDate:o.endDate,isCurrentRole:o.isCurrentRole??!o.endDate,orgName:k(v(o.orgName)),orgPublicId:k(v(o.orgPublicId)),orgType:lt(k(v(o.orgType))),orgLocation:k(v(o.orgLocation)),orgHomePage:k(v(o.orgHomePage)),description:k(v(o.description)),entryNode:v(o.entryNode),status:v(o.entryNode)?"existing":"new"})).filter(o=>re(o)||!!o.entryNode);return{resumeData:t.length?t:[{title:"",roleType:"",startDate:void 0,endDate:void 0,isCurrentRole:!1,orgName:"",orgPublicId:"",orgType:rt[0].value,orgLocation:"",orgHomePage:"",description:"",entryNode:"",status:"new"}]}}function Zd(e){for(let t=0;t<e.length;t++){let o=e[t];if(!o||o.status==="deleted"||!re(o))continue;let n=v(o.endDate).trim();if(!o.isCurrentRole&&!n)return{ok:!1,message:`Resume ${t+1}: End Year is required unless "I am currently working in this role" is selected.`}}return{ok:!0}}function Yd(e,t){e.querySelectorAll("solid-ui-combobox[data-resume-organization-index]").forEach(n=>{let i=Number(n.dataset.resumeOrganizationIndex);if(Number.isNaN(i))return;let a=t[i];a&&(n.optionsFallback=a.orgName?[{label:a.orgName,value:a.orgPublicId}]:[],n.asyncOptionsProvider=zd(()=>lt(a.orgType||"")),n.value=a.orgPublicId||a.orgName)})}function An(e,t){e.querySelectorAll("solid-ui-combobox[data-resume-organization-index]").forEach(n=>{let i=Number(n.dataset.resumeOrganizationIndex);if(Number.isNaN(i)||!t[i])return;let a=n.selectedOption?k(n.selectedOption.label):k(String(n.value)),r=n.selectedOption?k(String(n.selectedOption.value)):"";S(t[i],"orgName",a,re),t[i].orgPublicId=r})}function Kd({resumeData:e,index:t,displayIndex:o,onDelete:n,onChange:i}){let a=e[t],r=`Experience ${o+1}`,l=`resume-experience-heading-${t}`,s=`resume-title-${t}`,c=`resume-organization-${t}`,p=`resume-organization-type-${t}`,u=`resume-company-url-${t}`,f=`resume-org-location-${t}`,m=`resume-description-${t}`,b=`resume-description-counter-${t}`,w=2e3,x=(a?.description||"").length,h=`Start Month ${o+1}`,g=`resume-start-month-${t}`,_=`Start Year ${o+1}`,y=`resume-start-year-${t}`,I=v(a?.startDate),C=at(I),H=C.month,R=C.year,Le=`End Month ${o+1}`,Ct=`resume-end-month-${t}`,_o=v(a?.endDate),ho=`End Year ${o+1}`,sl=`resume-end-year-${t}`,Jn=at(_o),cl=Jn.month,ei=Jn.year,ti=`resume-current-role-${t}`,oi=new Date().getFullYear(),kt=[R,ei],dl=rt,pl=ao("start-month",kt,!!a?.isCurrentRole),fl=ao("start-year",kt,!!a?.isCurrentRole),ul=ao("end-month",kt,!!a?.isCurrentRole),ml=ao("end-year",kt,!!a?.isCurrentRole),bo=N=>F=>{let me=F.target,$e=k(me.value);a&&(S(a,N,$e,re),i())},gl=N=>{N.preventDefault(),n()},At=(N,F)=>{if(!(!N||!F))return Dd(`${F}-${N}-01`)},_l=N=>{let F=N;if(!F.detail.option)return;let me=String(F.detail.option.value),$e=at(v(e[t]?.startDate)).year||String(oi),Ue=At(me,$e);e[t]&&(S(e[t],"startDate",Ue,re),i())},hl=N=>{let F=N;if(!F.detail.option)return;let me=String(F.detail.option.value),$e=at(v(e[t]?.startDate)).month||"01",Ue=At($e,me);e[t]&&(S(e[t],"startDate",Ue,re),i())},bl=N=>{if(e[t]?.isCurrentRole)return;let F=N;if(!F.detail.option)return;let me=String(F.detail.option.value),$e=at(v(e[t]?.endDate)).year||String(oi),Ue=At(me,$e);e[t]&&(S(e[t],"endDate",Ue,re),i())},yl=N=>{if(e[t]?.isCurrentRole)return;let F=N;if(!F.detail.option)return;let me=String(F.detail.option.value),$e=at(v(e[t]?.endDate)).month||"01",Ue=At($e,me);e[t]&&(S(e[t],"endDate",Ue,re),i())},wl=N=>{let F=N.target,me=k(F.value.slice(0,w));e[t]&&(S(e[t],"description",me,re),i())},vl=N=>{let F=N.target;e[t]&&(S(e[t],"isCurrentRole",F.checked,re),F.checked&&S(e[t],"endDate",void 0,re),i())},xl=N=>{let F=N;if(!F.detail.option)return;let me=lt(String(F.detail.option.value));a&&(Ce(a,"orgType",me),a.orgPublicId="",i())},Cl=N=>{let F=N.target;S(a,"orgName",k(String(F.value)),re),a.orgPublicId=""},kl=N=>{!a||!N.detail.option||(S(a,"orgName",k(N.detail.option.label),re),a.orgPublicId=String(N.detail.option.value))};return Pe`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--resume-entry-header" role="group" aria-labelledby=${l}>
      <h3 id=${l} class="profile-edit-dialog__entry-heading">${r}</h3>
      <div class="profile-edit-dialog__actions profile-edit-dialog__actions--edge">
        <solid-ui-button
          variant="ghost"
          aria-label=${`Delete resume ${o+1}`}
          title=${ye}
          @click=${gl}
        >
          <span slot="icon" aria-hidden="true">${ve}</span>
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
        @change=${bo("title")}
      />
    </label>
    <div class="profile-edit-dialog__row">
      <label aria-label=${`${r} Organization Type`} class="label profile-edit-dialog__field">
        Organization Type
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__resume-organization-type-select"
          name=${p}
          .value=${lt(a?.orgType||"")}
          @change=${xl}
        >
          ${dl.map(N=>Pe`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
      <label aria-label=${`${r} Organization Name`} class="label profile-edit-dialog__field">
        Company or Organization
        <solid-ui-combobox
          name=${c}
          placeholder="Company or Organization"
          data-resume-organization-index=${String(t)}
          required
          @input=${Cl}
          @change=${kl}
        ></solid-ui-combobox>
      </label>
    </div>
    <div class="profile-edit-dialog__row">
      <label aria-label=${`${r} Company URL`} class="label profile-edit-dialog__field">
        Company URL
        <input
          class="input"
          type="text"
          name=${u}
          .value=${a?.orgHomePage||""}
          data-contact-field="orgHomePage"
          data-entry-node=${a?.entryNode||""}
          data-row-status=${a?.status||"n/a"}
          placeholder="Company URL"
          autocomplete="url"
          inputmode="text"
          @change=${bo("orgHomePage")}
        />
      </label>
      <label aria-label=${`${r} Location`} class="label profile-edit-dialog__field profile-edit-dialog__field--resume-location">
        Location
        <input
          class="input"
          type="text"
          name=${f}
          .value=${a?.orgLocation||""}
          data-contact-field="orgLocation"
          data-entry-node=${a?.entryNode||""}
          data-row-status=${a?.status||"n/a"}
          placeholder="Location"
          autocomplete="address-level2"
          inputmode="text"
          @change=${bo("orgLocation")}
        />
      </label>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--resume-dates">
      <label aria-label=${`Start Date ${o+1}`} class="label profile-edit-dialog__field profile-edit-dialog__field--date-group">
        <span>Start Date</span>
        <div class="profile-edit-dialog__date-pair">
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__resume-date-select"
            name=${g}
            aria-label=${h}
            .value=${H}
            @change=${_l}
          >
            ${pl.map(N=>Pe`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__resume-date-select"
            name=${y}
            aria-label=${_}
            .value=${R}
            @change=${hl}
          >
            ${fl.map(N=>Pe`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
      </label>
      <label aria-label=${`End Date ${o+1}`} class="label profile-edit-dialog__field profile-edit-dialog__field--date-group">
        <span>End Date</span>
        <div class="profile-edit-dialog__date-pair">
          <solid-ui-combobox
            select-only
            class=${`profile-edit-dialog__resume-date-select${a?.isCurrentRole?" profile-edit-dialog__resume-date-select--disabled":""}`}
            name=${Ct}
            aria-label=${Le}
            aria-disabled=${String(!!a?.isCurrentRole)}
            tabindex=${a?.isCurrentRole?"-1":"0"}
            .value=${a?.isCurrentRole?Ar:cl}
            @change=${bl}
          >
            ${ul.map(N=>Pe`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
          <solid-ui-combobox
            select-only
            class=${`profile-edit-dialog__resume-date-select${a?.isCurrentRole?" profile-edit-dialog__resume-date-select--disabled":""}`}
            name=${sl}
            aria-label=${ho}
            aria-disabled=${String(!!a?.isCurrentRole)}
            tabindex=${a?.isCurrentRole?"-1":"0"}
            .value=${a?.isCurrentRole?"":ei}
            @change=${yl}
          >
            ${ml.map(N=>Pe`<solid-ui-combobox-option value=${N.value}>${N.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
      </label>
    </div>
    <div class="profile-edit-dialog__row profile-edit-dialog__row--inline-end">
      <label class="label profile-edit-dialog__checkbox-label" for=${ti}>
        <input
          class="profile-edit-dialog__checkbox-input"
          type="checkbox"
          id=${ti}
          name="isCurrentRole"
          .checked=${!!a?.isCurrentRole}
          @change=${vl}
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
        maxlength=${w}
        aria-describedby=${b}
        data-contact-field="description"
        data-entry-node=${a?.entryNode||""}
        data-row-status=${a?.status||"n/a"}
        placeholder="Description"
        autocomplete="off"
        inputmode="text"
        @input=${wl}
      ></textarea>
      <small id=${b} aria-live="polite">${x}/${w}</small>
    </label>
  `}function Xd(e,t){let o=e.map((n,i)=>({resume:n,index:i})).filter(({resume:n})=>n.status!=="deleted");return Pe`
    <section class="profile-edit-dialog__section profile-edit-dialog__section--resume" aria-label="Resume">
      <fieldset>
        <legend class="sr-only">Resume entries</legend>
        ${o.map(({index:n},i)=>Kd({resumeData:e,index:n,displayIndex:i,onDelete:()=>{xe(e,n),t()},onChange:t}))}
      </fieldset>
    </section>
  `}function Jd(e,t,o,n){Fd(Pe`
    ${Xd(t.resumeData,o)}
    ${n!=="owner"?Pe`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e),Yd(e,t.resumeData)}function ep(e){let t=e.closest("dialog"),o=t?.querySelector("#modal-desc"),n=e.ownerDocument.activeElement,i=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null;return{dialogScrollTop:t?.scrollTop||0,descriptionScrollTop:o?.scrollTop||0,activeId:n?.id||"",activeName:n?.getAttribute("name")||"",selectionStart:i?.selectionStart??null,selectionEnd:i?.selectionEnd??null,fieldScrollLeft:i?.scrollLeft||0,fieldScrollTop:i?.scrollTop||0}}function tp(e,t){let o=e.closest("dialog"),n=o?.querySelector("#modal-desc");o&&(o.scrollTop=t.dialogScrollTop),n&&(n.scrollTop=t.descriptionScrollTop);let i=t.activeId&&typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(t.activeId):t.activeId,a=t.activeName&&typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(t.activeName):t.activeName,r=null;i&&(r=e.querySelector(`#${i}`)),!r&&a&&(r=e.querySelector(`[name="${a}"]`)),Nr(r,{selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,scrollLeft:t.fieldScrollLeft,scrollTop:t.fieldScrollTop})}function op(e){if(!e)return null;if(e.tagName==="SOLID-UI-COMBOBOX"){let t=e.shadowRoot?.querySelector("input");if(t)return t}return e}function Nr(e,t={}){let o=op(e);if(!o||typeof o.focus!="function")return;let n=o.ownerDocument.defaultView;if(!!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){o.scrollIntoView({block:"nearest",behavior:"auto"});return}if(o.focus({preventScroll:!0}),o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement){let a=t.selectionStart??o.value.length,r=t.selectionEnd??a;o.setSelectionRange(a,r),o.scrollLeft=t.scrollLeft??o.scrollLeft,o.scrollTop=t.scrollTop??o.scrollTop,requestAnimationFrame(()=>{o.scrollLeft=t.scrollLeft??o.scrollLeft,o.scrollTop=t.scrollTop??o.scrollTop})}if(e?.tagName==="SOLID-UI-COMBOBOX"){let a=e;a._closePopup&&requestAnimationFrame(()=>{a._closePopup?.()})}}function np(e,t){let o=e.querySelector(t);o&&Nr(o)}function ip(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form"),o.classList.add("profile__edit-form--resume");let n=Qd(e),i=(r={})=>{let{preserveState:l=!0,focusSelector:s}=r,c=l?ep(o):null;Jd(o,n,i,t),c&&tp(o,c),s&&np(o,s)};return i(),{form:o,formState:n,rerender:i,addRow:()=>{n.resumeData.unshift({title:"",roleType:"",startDate:void 0,endDate:void 0,isCurrentRole:!1,orgName:"",orgPublicId:"",orgType:rt[0].value,orgLocation:"",orgHomePage:"",description:"",entryNode:"",status:"new"}),i({preserveState:!1,focusSelector:'[name="resume-title-0"]'})}}}async function Nn(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,rerender:c,addRow:p}=ip(n,i);if(await oe({title:si,dom:r,form:l,shouldCloseWithoutSave:()=>{An(l,s.resumeData);let f=P(s.resumeData,re);return f.create.length===0&&f.update.length===0&&f.remove.length===0},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another resume entry",onClick:p},submitLabel:se,cancelLabel:ce,validate:async()=>{if(An(l,s.resumeData),i!=="owner")return z;let f=Zd(s.resumeData);return f.ok?null:f.message||"Please complete the required resume fields."},onSave:async()=>{An(l,s.resumeData);let f=P(s.resumeData,re);await yr(t,o,f),c()},formatSaveError:f=>f instanceof Error?f.message:Et})){if(a){await a();return}await Ea("Resume updates saved. Refresh to see latest values.","Saved",r)}}A(L(`.resume-card {
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
`,"text/css"));function ap(e,t){if(!e)return te``;let o=`cv-role-title-${t}`,n=`cv-role-period-${t}`,i=`cv-role-org-${t}`,a=`cv-role-description-${t}`,r=e.description?`${i} ${n} ${a}`:`${i} ${n}`;return te`
    <li class="resume-card__item" role="listitem" aria-labelledby=${o} aria-describedby=${r}>
    <div class="resume-card__item-header">
      <h3 id=${o}>${e.title}</h3>
    </div>
    <p class="resume-card__organization" id=${i}>
      <strong class="resume-card__organization-name">${e.orgName}</strong>${e.orgLocation?te`<span class="resume-card__organization-separator" aria-hidden="true"> | </span><span class="resume-card__organization-location">${e.orgLocation}</span>`:""}
    </p>
    <p id=${n} class="resume-card__item-period">
      <time datetime=${ln(e.startDate)}>${rn(e.startDate)}</time>
      <span> to </span>
      ${e.endDate?te`<time datetime=${ln(e.endDate)}>${rn(e.endDate)}</time>`:te`<span>Present</span>`}
    </p>
    ${e.description?te`
      <div class="resume-card__description-wrap">
        <p class="resume-card__description-text" id=${a}>${e.description}</p>
        <solid-ui-button
          variant="tertiary"
          class="resume-card__description-toggle"
          aria-controls=${a}
          aria-expanded=${"false"}
          hidden
          @click=${Xt}
        >
          ...more
        </solid-ui-button>
      </div>
    `:Sn}
    </li>
  `}function rp(e){return!e||!e.length?te``:te`${e.map((t,o)=>ap(t,o))}`}var lp=e=>Array.isArray(e)&&e.length>0?te`
    <article class="resume-card" aria-label="Resume" data-testid="curriculum-vitae">
      <section class="resume-card__section">
        <ul role="list" aria-label="Work experience in chronological order">
          ${rp(e)}
        </ul>
      </section>
    </article>
  `:te``;function sp(e,t,o,n,i,a){Be();let r=o.length>0,l=r?lp(o):Sn;return te`
    <section
      aria-labelledby="cv-heading"
      data-profile-section="resume"
      class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="cv-heading" tabindex="-1">${Pt}</h2>
        <div class="profile-section-collapsible__actions">
          ${n==="owner"?te`
            ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit resume details",onClick:c=>Nn(c,e,t,o,n,a),desktopIcon:te`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${O}</span>`,desktopLabel:"Edit",mobileIcon:te`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          `:Sn}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle resume section"
            aria-controls="cv-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="cv-panel" class="profile-section-collapsible__content">
        ${r?l:te`<p>No resume details added yet.</p>`}
      </div>
    </section>
  `}function cp(e,t,o,n,i){return te`
    <div class="profile__empty-state-content" role="group" aria-label="Empty resume section">
      <h2 id="resume-heading" tabindex="-1">${Pt}</h2>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      @click=${a=>Nn(a,e,t,o,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Ze}</span>
       Add Resume
    </solid-ui-button>
  `}function dp(e,t,o,n,i){return te`
    <section
      aria-labelledby="resume-heading"
      data-profile-section="resume"
      class="profile__section--empty profile__section--empty-main profile-section-collapsible profile-section-collapsible--inline-mobile-actions profile-section-collapsible--empty-mobile-no-edit"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="resume-heading" tabindex="-1">${Pt}</h2>
        <div class="profile-section-collapsible__actions">
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle resume section"
            aria-controls="cv-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="cv-panel" class="profile-section-collapsible__content">
        ${cp(e,t,o,n,i)}
      </div>
    </section>
  `}function Sr(e,t,o,n,i,a){let r=i||"desktop",l=o||[],c=!(l.length>0)&&n==="owner";return te`
    ${c?dp(e,t,l,n,a):sp(e,t,l,n,r,a)}
  `}import{html as Z,nothing as wp}from"lit-html";import"rdflib";import{html as Tn,render as mp}from"lit-html";import"rdflib";import{st as Ir,sym as Er}from"rdflib";function Tr(e){let t=(e.url||"").trim();if(!t)return null;try{return Er(new URL(t).href)}catch{return null}}function st(e){let t=(e||"").trim();if(!t)return"";try{let o=new URL(t);return o.hash="",o.href}catch{return t}}function pp(e,t,o){if(!e.any(t,d.rdf("first"),null,o))return[];let n=new Set,i=[],a=t;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,d.rdf("rest"),null,o);if(!l||l.termType==="NamedNode"&&l.value===d.rdf("nil").value)break;a=l}return i}function fp(e,t,o){let n=t.why||o,i=[Ir(t.subject,t.predicate,t.object,n)],a=t.object;return Qo(e,a,n)?(pp(e,a,n).forEach(r=>{i.push(...e.statementsMatching(r,null,null,n))}),i):(a.termType==="BlankNode"&&i.push(...e.statementsMatching(a,null,null,n)),i)}async function up(e,t,o){let n=t.doc(),i=e.statementsMatching(t,d.solid("community"),null,null),a=new Map,r=new Map,l=new Set,s=f=>{let m=a.get(f.value);if(m)return m;let b={doc:f,cleanupStatements:[],currentUrlsByKey:new Map};return a.set(f.value,b),b};i.forEach(f=>{let m=f.why||n,b=s(m);b.cleanupStatements.push(...fp(e,f,n));let w=f.object;Ut(e,w,m).forEach(h=>{let g=da(h,e),_=st(g);!_||r.has(_)||(r.set(_,m.value),b.currentUrlsByKey.set(_,g))})});let c=f=>{l.add(f)},p=f=>{let m=r.get(f);if(!m)return null;let b=a.get(m);return b?(b.currentUrlsByKey.delete(f),r.delete(f),c(m),b.doc):null},u=(f,m)=>{let b=st(m);if(!b||r.has(b))return;s(f).currentUrlsByKey.set(b,m),r.set(b,f.value),c(f.value)};o.remove.forEach(f=>{let m=st(f.entryNode||""),b=st(f.url);if(m){p(m);return}b&&p(b)}),o.update.forEach(f=>{let m=Tr(f),b=st(f.entryNode||""),w=st(f.url),x=b&&p(b)||w&&p(w)||n;m&&u(x,m.value)}),o.create.forEach(f=>{let m=Tr(f);m&&u(n,m.value)});for(let f of l){let m=a.get(f);if(!m)continue;let b=Array.from(m.currentUrlsByKey.values()).map(w=>Ir(t,d.solid("community"),Er(w),m.doc));await W(e,m.doc,m.cleanupStatements,b,{unsupportedMessage:"Project updates are not supported by this store updater.",failureMessage:"Failed to save projects",useDavFallback:!0,usePutFallback:!0})}}async function so(e,t,o){try{await up(e,t,o)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(xi,i),new Error(_i,{cause:i})}}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));function In(e){return k(e)}function Lr(e){let t=In(e);if(!t)return!1;try{let o=new URL(t);return o.protocol==="https:"&&o.pathname==="/profile/card"&&o.hash==="#me"}catch{return!1}}function En(e){return[e.url,e.entryNode].some($)}async function gp(e){let t=await navigator.clipboard.readText(),o=In(t);return o?(S(e,"url",o,En),o):""}function _p(e){return{project:{url:"",entryNode:"",status:"new"}}}function hp(e){return $(e.url)?Lr(e.url)?null:"Please enter a valid WebID in the form https://example.com/profile/card#me.":"WebID is required."}function bp(e,t){let o="project-0",n=a=>{let r=a.target,l=In(r.value);S(e,"url",l,En)},i=async a=>{a.preventDefault();try{let r=await gp(e);if(t(),!Lr(r))return;let l=a.currentTarget?.ownerDocument||document;Re(l)?.click()}catch{}};return Tn`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--project">
      <label aria-label="Project or community WebID" class="label profile-edit-dialog__field profile-edit-dialog__field--full">
      <div class="profile-edit-dialog__input-wrap">
          <input
            class="input profile-edit-dialog__input--with-action"
            type="text"
            name=${o}
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
            title=${ui}
            @click=${i}
          >
            <span slot="left-icon" class="profile-edit-dialog__paste-icon" aria-hidden="true">${Bi}</span>
            Paste
          </solid-ui-button>
        </div>
      </label>
    </div>
  `}function $r(e,t,o){let n=()=>$r(e,t,o);mp(Tn`
    ${bp(t.project,n)}
    ${o!=="owner"?Tn`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e)}function yp(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form"),o.classList.add("profile__edit-form--projects");let n=_p(e);return $r(o,n,t),{form:o,formState:n}}async function Ln(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=yp(n,i),c=oe({title:ci,dom:r,form:l,headerAction:{type:"close"},shouldCloseWithoutSave:()=>!$(s.project.url)&&!$(s.project.entryNode),validate:()=>i!=="owner"?z:hp(s.project),onSave:async()=>{let u=P([s.project],En),f={create:u.create,update:u.update,remove:u.remove};await so(t,o,f)},formatSaveError:u=>u instanceof Error?u.message:String(u)}),p=null;p=await c,p&&a&&await a()}A(L(`.profile__section[data-profile-section='projects'],
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
}`,"text/css"));var vp=2;function Pr(e,t){let o=e.querySelector(".profile-section-inline-error");if(o){if(!t){o.textContent="",o.hidden=!0,o.setAttribute("aria-hidden","true");return}o.textContent=t,o.hidden=!1,o.setAttribute("aria-hidden","false"),o.focus()}}function xp(e){let t=e.currentTarget,o=t?.closest(".profile-section-collapsible");if(!t||!o)return;let n=o.getAttribute("data-mobile-expanded")!=="true";o.setAttribute("data-mobile-expanded",String(n)),t.setAttribute("aria-expanded",String(n)),t.setAttribute("data-mobile-expanded",String(n));let i=t.querySelector(".project-card__more-label");i&&(i.textContent=n?"View Less":"View More")}function Cp(e,t){return e?Z`
        <img
          class="project-card__thumb-image"
          src=${e}
          alt=${t}
          loading="lazy"
        />
      `:Z`
        <div class="project-card__thumb-fallback" role="img" aria-label=${t}>
          ${t}
        </div>
      `}function kp(e,t){return{url:e.url,title:e.title,imageUrl:e.imageUrl,category:e.category,name:e.name,orgName:e.orgName,entryNode:e.entryNode?.value||"",status:t}}function Ap(e,t,o,n,i){if(!e)return Z``;let a=async c=>{if(c.preventDefault(),c.stopPropagation(),n!=="owner")return;let p=c.currentTarget,u=c.currentTarget?.closest('[data-profile-section="projects"]'),f={create:[],update:[],remove:[kp(e,"deleted")]};try{p?.setAttribute("disabled",""),p?.setAttribute("loading",""),p?.setAttribute("aria-busy","true"),await so(t,o,f),u&&Pr(u,null),i&&await i()}catch(m){u&&Pr(u,Me(m,hi))}finally{p?.removeAttribute("disabled"),p?.removeAttribute("loading"),p?.setAttribute("aria-busy","false")}},r=(e.category||"").trim().toLowerCase(),l=r==="project"?"project":r==="community"?"community":"unknown",s=r&&r!=="unknown"?r.charAt(0).toUpperCase()+r.slice(1):"Uncategorized";return Z`
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
            ${Cp(e.imageUrl,e.title||"Project preview")}
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
      ${n==="owner"?Z`
        <div class="project-card__footer">
          <solid-ui-button
            variant="secondary"
            class="project-card__follow-button"
            aria-label="Unfollow project"
            @click=${a}
          >
            <span slot="left-icon" class="project-card__follow-label project-card__follow-label--default">${Di}</span>
            <span class="project-card__follow-label project-card__follow-label--default">Following</span>
            <span class="project-card__follow-label project-card__follow-label--hover">Unfollow</span>
            <span class="project-card__follow-label project-card__follow-label--loading">Unfollowing...</span>
          </solid-ui-button>
        </div>
      `:Z``}
    </li>
  `}function Np(e,t,o,n,i){let a=o;return Z`
    <div class="profile__empty-state-content" role="group" aria-label="Empty projects section">
      <h2 id="projects-heading" tabindex="-1">${Ft}</h2>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      aria-label="Add project details"
      @click=${r=>Ln(r,e,t,a,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Ze}</span>
       Add Project
    </solid-ui-button>
  `}function Sp(e,t,o,n,i){return Z`
    <section
      aria-labelledby="projects-heading"
      data-profile-section="projects"
      class="profile__section--empty profile__section--empty-main profile-section-collapsible profile-section-collapsible--inline-mobile-actions profile-section-collapsible--empty-mobile-no-edit"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h2 id="projects-heading" tabindex="-1">${Ft}</h2>
        <div class="profile-section-collapsible__actions">
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle projects section"
            aria-controls="projects-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="projects-panel" class="profile-section-collapsible__content">
        ${Np(e,t,o,n,i)}
      </div>
    </section>
  `}function Fr(e,t,o,n,i){return!e||!e.length||!e[0]?Z``:Z`${Ap(e[0],t,o,n,i)}${e.length>1?Fr(e.slice(1),t,o,n,i):Z``}`}function Tp(e,t,o,n,i,a){let r=Array.isArray(o)&&o.length>0,l=Math.max(0,o.length-vp),s=n==="owner";return Z`
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
          <h2 id="projects-heading">${Ft}</h2>
          <div class="profile-section-collapsible__actions">
            ${s?Z`
              ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit projects",onClick:c=>Ln(c,e,t,o,n,a),desktopIcon:Z`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:Z`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
            `:wp}
            <solid-ui-button
              variant="ghost"
              class="profile-section-collapsible__toggle-button"
              aria-label="Toggle projects section"
              aria-controls="projects-panel"
              aria-expanded="false"
              @click=${X}
            >
              <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
            </solid-ui-button>
          </div>
        </header>
        <div id="projects-panel" class="profile-section-collapsible__content">
          ${r?Z`
                <ul id="projects-rail" class="project-card__rail" role="list" aria-label="Known projects">
                  ${Fr(o,e,t,n,a)}
                </ul>
                ${l>0?Z`
                      <solid-ui-button
                        variant="tertiary"
                        class="project-card__more-button"
                        aria-controls="projects-rail"
                        aria-expanded="false"
                        data-mobile-expanded="false"
                        @click=${xp}
                      >
                        <span slot="left-icon" class="project-card__more-icon" aria-hidden="true">${qi}</span>
                        <span class="project-card__more-label">View More</span>
                      </solid-ui-button>
                    `:Z``}
                <div
                  class="profile-section-inline-error"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                  aria-hidden="true"
                  tabindex="-1"
                  hidden
                ></div>
              `:Z`<p>No projects added yet.</p>`}
        </div>
      </section>
    `}function Dr(e,t,o,n,i,a){let r=i||"desktop",s=!(Array.isArray(o)&&o.length>0)&&n==="owner";return Z`
    ${s?Sp(e,t,o,n,a):Tp(e,t,o,n,r,a)}
  `}import{html as Ae,nothing as Se}from"lit-html";import"rdflib";import{html as De,render as jp}from"lit-html";import"rdflib";import{st as be,literal as Fe,sym as $n}from"rdflib";function Ip(e){let t=(e||"").trim();if(!t)return{};let[o,n]=t.split("/").map(r=>r.trim());return{subjectPronoun:o||void 0,objectPronoun:n||void 0}}function zr(e,t,o,n){let i=n.value.startsWith("tel:")?n.value:`tel:${n.value}`,a=$n(i),r=[be(e,d.vcard("hasTelephone"),o,t),be(o,d.vcard("value"),a,t)];return n.type&&r.push(be(o,d.rdf("type"),d.vcard(n.type),t)),r}function Mr(e,t,o,n){let i=n.value.startsWith("mailto:")?n.value:`mailto:${n.value}`,a=$n(i),r=[be(e,d.vcard("hasEmail"),o,t),be(o,d.vcard("value"),a,t)];return n.type&&r.push(be(o,d.rdf("type"),d.vcard(n.type),t)),r}function Rr(e,t,o,n){let i=[be(e,d.vcard("hasAddress"),o,t)];return n.type&&i.push(be(o,d.rdf("type"),d.vcard(n.type),t)),n.streetAddress&&i.push(be(o,d.vcard("street-address"),Fe(n.streetAddress),t)),n.locality&&i.push(be(o,d.vcard("locality"),Fe(n.locality),t)),n.region&&i.push(be(o,d.vcard("region"),Fe(n.region),t)),n.postalCode&&i.push(be(o,d.vcard("postal-code"),Fe(n.postalCode),t)),n.countryName&&i.push(be(o,d.vcard("country-name"),Fe(n.countryName),t)),i}function ct(e,t){return e.find(o=>!!o.entryNode&&!!D(t,o.entryNode))}function Pn(e){return e.find(t=>!t.entryNode)}async function Ep(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasTelephone"),null,i),r=[],l=[],s=ct(o.remove,a),c=ct(o.update,a),p=Pn(o.create)||o.create[0];if(s?.entryNode){let f=D(a,s.entryNode);if(f){let b=pe(e,t,d.vcard("hasTelephone"),i).linkStatements.find(w=>w.object?.value===f.value);b&&r.push(b),r.push(...U(e,f,i))}}if(c){let f=D(a,c.entryNode);f&&(r.push(...U(e,f,i)),l.push(...zr(t,i,f,c)))}p&&l.push(...zr(t,i,B(i),p));let u=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save heading updates",documentTextCache:n,useDavFallback:!1,usePutFallback:u,forcePut:u})}async function Lp(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasEmail"),null,i),r=[],l=[],s=ct(o.remove,a),c=ct(o.update,a),p=Pn(o.create)||o.create[0];if(s?.entryNode){let f=D(a,s.entryNode);if(f){let b=pe(e,t,d.vcard("hasEmail"),i).linkStatements.find(w=>w.object?.value===f.value);b&&r.push(b),r.push(...U(e,f,i))}}if(c){let f=D(a,c.entryNode);f&&(r.push(...U(e,f,i)),l.push(...Mr(t,i,f,c)))}p&&l.push(...Mr(t,i,B(i),p));let u=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save heading updates",documentTextCache:n,useDavFallback:!1,usePutFallback:u,forcePut:u})}async function $p(e,t,o,n){let i=t.doc(),a=e.each(t,d.vcard("hasAddress"),null,i),r=[],l=[],s=ct(o.remove,a),c=ct(o.update,a),p=Pn(o.create)||o.create[0];if(s?.entryNode){let f=D(a,s.entryNode);if(f){let b=pe(e,t,d.vcard("hasAddress"),i).linkStatements.find(w=>w.object?.value===f.value);b&&r.push(b),r.push(...U(e,f,i))}}if(c){let f=D(a,c.entryNode);f&&(r.push(...U(e,f,i)),l.push(...Rr(t,i,f,c)))}p&&l.push(...Rr(t,i,B(i),p));let u=await ge(e,i,l,void 0,{documentTextCache:n});await W(e,i,r,l,{unsupportedMessage:ae,failureMessage:"Failed to save heading updates",documentTextCache:n,useDavFallback:!1,usePutFallback:u,forcePut:u})}async function Pp(e,t,o,n){let i=t.doc(),a=[],r=[],l=(x,h)=>{let g=(h||"").trim(),_=g?Fe(g):null;Ie(e,t,x,i,a,r,_)},s=x=>{let h=(x||"").trim(),g=h?h.startsWith("http://")||h.startsWith("https://")?$n(h):Fe(h):null;Ie(e,t,d.vcard("hasPhoto"),i,a,r,g)},c=x=>{let{subjectPronoun:h,objectPronoun:g}=Ip(x);Ie(e,t,d.solid("preferredSubjectPronoun"),i,a,r,h?Fe(h):null),Ie(e,t,d.solid("preferredObjectPronoun"),i,a,r,g?Fe(g):null),Ie(e,t,d.solid("preferredRelativePronoun"),i,a,r,null)},p=(x,h=!1)=>{let g=h?{name:"",nickname:"",pronouns:"",dateOfBirth:"",imageSrc:""}:x;l(d.vcard("fn"),g.name),l(d.foaf("nick"),g.nickname),l(d.vcard("nickname"),g.nickname),l(d.vcard("bday"),g.dateOfBirth),c(g.pronouns),s(g.imageSrc)},u=o.remove[0],f=o.update[0],m=o.create[0],b=f||m||u;b&&p(b,!!(u&&!f&&!m));let w=await ge(e,i,r,void 0,{documentTextCache:n});await W(e,i,a,r,{unsupportedMessage:ae,failureMessage:"Failed to save heading updates",documentTextCache:n,useDavFallback:!1,usePutFallback:w,forcePut:w})}async function Or(e,t,o){try{let n=new Map;await Pp(e,t,o.basicOps,n),await Ep(e,t,o.phoneOps,n),await Lp(e,t,o.emailOps,n),await $p(e,t,o.addressOps,n)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(wi,i),new Error(St,{cause:i})}}function Fp(e){let t=e.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(!t)return"";let[,o,n,i]=t;return`${o}-${n}-${i}`}function jr(e,t=""){let o=(e||"").trim();if(!o)return t;let n=o.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n){let[,a,r,l]=n;return`${l}-${r}-${a}`}let i=Fp(o);return i||o}function Fn(e){let t=(e||"").trim();if(!t)return"";if(t.match(/^(\d{4})-(\d{2})-(\d{2})$/))return t;let n=t.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);if(n){let[,i,a,r]=n;return`${r}-${a}-${i}`}return""}import{sym as Dp}from"rdflib";import{authn as zp,solidLogicSingleton as Mp}from"solid-logic";var co=new Map;function Br(e){if(!e)return;let t=co.get(e);t&&(co.delete(e),t.startsWith("blob:")&&typeof URL.revokeObjectURL=="function"&&URL.revokeObjectURL(t))}var Ur={"image/png":"png","image/jpeg":"jpg","image/gif":"gif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff","application/pdf":"pdf","text/plain":"txt","text/html":"html","application/json":"json","application/octet-stream":"bin"},Rp=Object.fromEntries(Object.entries(Ur).map(([e,t])=>[t,e])),Dn={extension:e=>Ur[e]||!1,lookup:e=>{let t=e.split(".").pop()?.toLowerCase()||"";return Rp[t]||!1}};function Op(e){let t=e.doc().uri,o=t.lastIndexOf("/");return o>=0?t.slice(0,o+1):t}async function po(e,t){if(!t||t.startsWith("blob:")||t.startsWith("data:"))return t;let o=co.get(t);if(o)return o;let n=e.fetcher;if(!n?._fetch||typeof URL.createObjectURL!="function")return t;try{let i=await n._fetch(t);if(!i.ok)return t;let a=await i.blob(),r=URL.createObjectURL(a);return co.set(t,r),r}catch{return t}}async function Hr(e,t,o){if(!e.fetcher)throw new Error("Store has no fetcher.");let n=o.type||Dn.lookup(o.name)||"application/octet-stream";if(!n.startsWith("image/"))throw new Error("Selected file is not an image.");let i=Dn.extension(n)||"bin",a=encodeURIComponent(o.name||`image.${i}`);n!==Dn.lookup(o.name||"")&&(a+=`_.${i}`);let r=Op(t),l=`${r}${a}`;for(let c=0;e.holds(t,d.vcard("hasPhoto"),Dp(l));c++){let p=`image_${c}.${i}`;l=`${r}${p}`}try{let c=await o.arrayBuffer(),p=await e.fetcher.webOperation("PUT",l,{data:c,contentType:n});if(!p.ok)throw new Error(`Error uploading picture: ${p.status} ${p.statusText}`)}catch(c){throw new Error(`Error uploading picture: ${c}`)}let s=zp.currentUser();if(s)try{await Mp.acl.setACLUserPublic(l,s,{public:["Read"]})}catch(c){V(`Error setting uploaded picture permissions: ${c}`)}return l}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));var zn=[{label:"Mobile",value:"Mobile"},{label:"Home",value:"Home"},{label:"Work",value:"Work"}],Mn=[{label:"Personal",value:"Personal"},{label:"Office",value:"Office"}],Bp=[{label:"He/Him",value:"He/Him"},{label:"She/Her",value:"She/Her"},{label:"They/Them",value:"They/Them"}];function Up(e){return"value"in e}function Hp(e){return"streetAddress"in e}function Vp(e){return"name"in e}function On(e,t){return t.some(o=>o.value===e)?e:t[0]?.value||""}function qp(e){return e==="phone"?zn:Mn}function xt(e,t){return{...e,type:On(e.type||"",qp(t))}}function le(e){return Up(e)?$(e.value):Hp(e)?[e.streetAddress,e.locality,e.region,e.postalCode,e.countryName].some($):Vp(e)?[e.name,e.nickname,e.imageSrc,e.location,e.pronouns,e.dateOfBirth].some($):!1}function Rn(e){let t=k(e||"").toLowerCase().replace(/\s+/g,"");return t?t==="he"||t==="he/him"?"He/Him":t==="she"||t==="she/her"?"She/Her":t==="they"||t==="they/them"?"They/Them":e||"":""}function Wp(e){let t={name:k(v(e.name)),nickname:k(v(e.nickname||"")),imageSrc:k(v(e.imageSrc||"")),location:k(v(e.location||"")),pronouns:Rn(v(e.pronouns||"")),dateOfBirth:k(v(e.dateOfBirth||"")),entryNode:v(e.entryNode),status:v(e.entryNode)?"existing":"new"},o=e.primaryEmail,n=e.primaryPhone,i=e.primaryAddress,a=!bt(o?.type),r=!ht(n?.type),l=bt(o?.type),s=ht(n?.type),c={value:Ke(v(o?.valueNode).replace(/^mailto:/i,"")),type:l,entryNode:v(o?.entryNode),status:v(o?.entryNode)?"existing":"new"},p={value:k(v(n?.valueNode||n?.entryNode||"").replace(/^tel:/i,"")),type:s,entryNode:v(n?.entryNode||""),status:v(n?.entryNode||"")?"existing":"new"},u={streetAddress:fe(v(i?.streetAddress)),locality:fe(v(i?.locality)),region:fe(v(i?.region)),postalCode:fe(v(i?.postalCode)),countryName:fe(v(i?.countryName)),type:qe(i?.type),entryNode:v(i?.entryNode),status:v(i?.entryNode)?"existing":"new"};return{basicInfo:t||{name:"",nickname:"",imageSrc:"",location:"",pronouns:"",dateOfBirth:"",entryNode:"",status:"new"},email:c||{value:"",type:"",entryNode:"",status:"new"},phone:p||{value:"",type:"",entryNode:"",status:"new"},address:u||{streetAddress:"",locality:"",region:"",postalCode:"",countryName:"",type:"",entryNode:"",status:"new"},emailTypeWasMissing:a,phoneTypeWasMissing:r,imagePreviewSrc:"",clearImagePreview:()=>{}}}function Vr(e,t){if(e.clearImagePreview(),typeof URL.createObjectURL!="function"){e.imagePreviewSrc="",e.clearImagePreview=()=>{};return}let o=URL.createObjectURL(t);e.imagePreviewSrc=o,e.clearImagePreview=()=>{URL.revokeObjectURL(o),e.imagePreviewSrc="",e.clearImagePreview=()=>{}}}function Gp(e,t){e.clearImagePreview(),t&&(e.imagePreviewSrc=t,e.clearImagePreview=()=>{e.imagePreviewSrc="",e.clearImagePreview=()=>{}})}function Qp(e){let t=o=>({...xt(o,"email"),type:Va(xt(o,"email").type)});return{create:e.create.map(t),update:e.update.map(t),remove:e.remove.map(t)}}function Zp(e){let t=o=>({...xt(o,"phone"),type:qa(xt(o,"phone").type)});return{create:e.create.map(t),update:e.update.map(t),remove:e.remove.map(t)}}function fo(e,t,o){let n=P([e],le);return o&&e.entryNode&&e.status==="existing"&&le(e)&&n.create.length===0&&n.update.length===0&&n.remove.length===0?{create:n.create,update:[xt({...e,status:"modified"},t)],remove:n.remove}:n}function Yp({phone:e}){let t="Mobile Number",o="Phone Type 1",n="phone-value",i=je(e?.value||""),a=i.dialCode,r=s=>{let c=s.target,p=Yt(c.value);e&&S(e,"value",Zt(a,p),le)},l=s=>{let c=s;if(!c.detail.option)return;let p=String(c.detail.option.value);e&&Ce(e,"type",p)};return De`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--contact-point">
      <div class="profile-edit-dialog__field">
        <label aria-label=${t} class="label">
          ${t}
          <input
            class="input"
            type="tel"
            name=${n}
            .value=${i.localNumber}
            required
            data-contact-field="value"
            data-entry-node=${e?.entryNode||""}
            data-row-status=${e?.status||"n/a"}
            placeholder=${t}
            autocomplete="tel-national"
            inputmode="tel"
            @input=${r}
          />
        </label>
      </div>
      <label aria-label=${o} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--contact-point">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          id=${`phone-type-select-${n}`}
          aria-label=${o}
          .value=${On(e?.type||"",zn)}
          @change=${l}
        >
          ${zn.map(s=>De`<solid-ui-combobox-option value=${s.value}>${s.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
    </div>
  `}function Kp({email:e}){let t="Email",o="Email Type",n="email-value",i=r=>{let l=r.target,s=Ke(l.value);e&&S(e,"value",s,le)},a=r=>{let l=r;if(!l.detail.option)return;let s=String(l.detail.option.value);e&&Ce(e,"type",s)};return De`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--contact-point">
      <label aria-label=${t} class="label profile-edit-dialog__field">
        ${t}
        <input
          class="input"
          type="email"
          name=${n}
          .value=${e?.value||""}
          required
          data-contact-field="value"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Email Address"
          autocomplete="email"
          inputmode="email"
          @input=${i}
        />
      </label>
      <label aria-label=${o} class="label profile-edit-dialog__field-type profile-edit-dialog__field-type--contact-point">
        <solid-ui-combobox
          select-only
          class="profile-edit-dialog__type-select"
          id=${`email-type-select-${n}`}
          aria-label=${o}
          .value=${On(e?.type||"",Mn)}
          @change=${a}
        >
          ${Mn.map(r=>De`<solid-ui-combobox-option value=${r.value}>${r.label}</solid-ui-combobox-option>`)}
        </solid-ui-combobox>
      </label>
    </div>
  `}function Xp({address:e}){let t="Address",o="address-street",n="address-locality",i="address-region",a="address-postal",r="address-country",l=s=>c=>{let p=c.target,u=fe(p.value);e&&S(e,s,u,le)};return De`
    <label aria-label=${`${t} Street`} class="label profile-edit-dialog__field profile-edit-dialog__field--row-width">
      Street Address
      <input
        class="input"
        type="text"
        name=${o}
        .value=${e?.streetAddress||""}
        required
        data-contact-field="streetAddress"
        data-entry-node=${e?.entryNode||""}
        data-row-status=${e?.status||"n/a"}
        placeholder="Street Address"
        autocomplete="street-address"
        inputmode="text"
        @change=${l("streetAddress")}
      />
    </label>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--full">
      <label aria-label=${`${t} Locality`} class="label profile-edit-dialog__field">
        Locality
        <input
          class="input"
          type="text"
          name=${n}
          .value=${e?.locality||""}
          data-contact-field="locality"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="City / Locality"
          autocomplete="address-level2"
          inputmode="text"
          @change=${l("locality")}
        />
      </label>
      <label aria-label=${`${t} Postal Code`} class="label profile-edit-dialog__field">
        Postal Code
        <input
          class="input"
          type="text"
          name=${a}
          .value=${e?.postalCode||""}
          data-contact-field="postalCode"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Postal Code"
          autocomplete="postal-code"
          inputmode="text"
          @change=${l("postalCode")}
        />
      </label>
    </div>

    <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--full">
      <label aria-label=${`${t} Region`} class="label profile-edit-dialog__field">
        Region
        <input
          class="input"
          type="text"
          name=${i}
          .value=${e?.region||""}
          data-contact-field="region"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="State / Region"
          inputmode="text"
          @change=${l("region")}
        />
      </label>
      <label aria-label=${`${t} Country`} class="label profile-edit-dialog__field">
        Country
        <input
          class="input"
          type="text"
          name=${r}
          .value=${e?.countryName||""}
          data-contact-field="countryName"
          data-entry-node=${e?.entryNode||""}
          data-row-status=${e?.status||"n/a"}
          placeholder="Country"
          autocomplete="country-name"
          inputmode="text"
          @change=${l("countryName")}
        />
      </label>
    </div>
  `}function Jp(e,t){let{basicInfo:o,phone:n,email:i,imagePreviewSrc:a}=e,r="Profile Photo",l="Recommended: Square JPG, PNG. Max 2MB.",s="Full Name",c="Nickname",p="Pronouns",u="DOB",f=g=>_=>{let y=_.target,I=nn(y.value);o&&S(o,g,I,le)},m=g=>{let _=g.target,y=nn(_.value);o&&S(o,"dateOfBirth",Fn(y),le)},b=g=>{let _=g;if(!_.detail.option)return;let y=Rn(String(_.detail.option.value));o&&Ce(o,"pronouns",y)},w=async g=>{let y=g.currentTarget?.ownerDocument||document,I=y.createElement("input");I.type="file",I.accept="image/*",I.hidden=!0;let C=()=>{I.remove()};I.addEventListener("change",async()=>{let H=I.files?.[0];if(C(),!(!H||!o))try{e.pendingImageFile=H,Vr(e,H),o.status=o.entryNode?"modified":"new",t()}catch(R){V("Profile image upload failed",R)}},{once:!0}),y.body.appendChild(I),I.click()},x=async g=>{let _=g.target.value;if(!(!_||!o))try{e.pendingImageFile=_,Vr(e,_),o.status=o.entryNode?"modified":"new",t()}catch(y){V("Profile camera upload failed",y)}},h=async()=>{o&&(e.pendingImageFile=null,e.clearImagePreview(),S(o,"imageSrc","",le),t())};return De`
    <div class="profile-edit-dialog__row profile-edit-dialog__row--heading-photo">
      <header class="profile-edit-dialog__image-preview-header" aria-label="Profile Image">
        <div class="profile-edit-dialog__image-frame">
          ${Bn(a||o.imageSrc,o.name)}
          <solid-ui-photo-capture
            capture-label="Take Photo"
            confirm-label="Use Photo"
            retake-label="Retake"
            cancel-label="Close camera"
            file-name-prefix="camera"
            facing-mode="user"
            @input=${x}
          >
            <solid-ui-button
              slot="trigger"
              class="profile-edit-dialog__image-camera-button"
              variant="ghost"
              aria-label="Take a photo"
              title="Take a photo"
            >
              <span slot="icon">${Vi}</span>
            </solid-ui-button>
          </solid-ui-photo-capture>
        </div>
      </header>

      <div class="profile-edit-dialog__image-preview" aria-label="Profile Photo Preview">
        <p class="profile-edit-dialog__image-preview-label">${r}</p>
        <p class="profile-edit-dialog__image-preview-description">${l}</p>

        <div class="profile-edit-dialog__image-preview-actions">
          <solid-ui-button
            variant="secondary"
            class="profile-edit-dialog__image-button profile-edit-dialog__image-upload-button"
            aria-label="Upload new profile photo"
            title="Upload"
            @click=${w}
          >
            Upload
          </solid-ui-button>
          <solid-ui-button
            variant="secondary"
            class="profile-edit-dialog__image-button profile-edit-dialog__image-remove-button"
            aria-label="Delete profile photo"
            title="Remove"
            @click=${h}
          >
            Remove
          </solid-ui-button>
        </div>
      </div>
    </div>
    <div class="profile-edit-dialog__image-camera-capture-row">
      <div class="profile-edit-dialog__image-camera-capture-frame" hidden></div>
    </div>
    <div class="profile-edit">
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal">
        <label aria-label=${s} class="label profile-edit-dialog__field">
          ${s}
          <input
            class="input"
            type="text"
            name="name"
            .value=${o?.name||""}
            required
            data-contact-field="name"
            data-entry-node=${o?.entryNode||""}
            data-row-status=${o?.status||"n/a"}
            placeholder="Full Name"
            autocomplete="name"
            inputmode="text"
            @change=${f("name")}
          />
        </label>
        <label aria-label=${c} class="label profile-edit-dialog__field">
          ${c}
          <input
            class="input"
            type="text"
            name="nickname"
            .value=${o?.nickname||""}
            data-contact-field="nickname"
            data-entry-node=${o?.entryNode||""}
            data-row-status=${o?.status||"n/a"}
            placeholder="Nickname"
            autocomplete="nickname"
            inputmode="text"
            @change=${f("nickname")}
          />
        </label>
      </div>
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal profile-edit-dialog__row--heading-dob">
        <div class="profile-edit-dialog__field-type profile-edit-dialog__field--stack">
          <label aria-label=${p} class="label">
            ${p}
          </label>
          <solid-ui-combobox
            select-only
            class="profile-edit-dialog__type-select"
            name="pronouns"
            data-heading-basic-field="pronouns"
            aria-label=${p}
            .value=${Rn(o?.pronouns||"")}
            @change=${b}
          >
            ${Bp.map(g=>De`<solid-ui-combobox-option value=${g.value}>${g.label}</solid-ui-combobox-option>`)}
          </solid-ui-combobox>
        </div>
        <div class="profile-edit-dialog__field profile-edit-dialog__field--stack">
          <label aria-label=${u} class="label">
            ${u}
          </label>
          <input
            class="input profile-edit-dialog__input--dob"
            type="date"
            name="dateOfBirth"
            .value=${Fn(o?.dateOfBirth||"")}
            data-contact-field="dateOfBirth"
            data-entry-node=${o?.entryNode||""}
            data-row-status=${o?.status||"n/a"}
            autocomplete="off"
            data-lpignore="true"
            data-1p-ignore="true"
            data-bwignore="true"
            @change=${m}
          />
        </div>
      </div>
      <div class="profile-edit-dialog__row profile-edit-dialog__row--equal">
        <div class="profile-edit-dialog__field profile-edit-dialog__field--full">
          ${Yp({phone:n})}
        </div>
        <div class="profile-edit-dialog__field profile-edit-dialog__field--full">
          ${Kp({email:i})}
        </div>
      </div>
    </div>
  `}function jn(e,t,o){jp(De`
    ${Jp(t,()=>jn(e,t,o))}
    ${Xp({address:t.address})}
    ${o!=="owner"?De`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e)}function ef(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form","profile__edit-form--heading","profile-edit-dialog--heading"),o.autocomplete="off",o.setAttribute("data-lpignore","true"),o.setAttribute("data-1p-ignore","true"),o.setAttribute("data-bwignore","true");let n=Wp(e);return jn(o,n,t),{form:o,formState:n}}function tf(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function of(e){return/^\d+$/.test(e)}function nf(e){let{localNumber:t}=je(e.phone?.value||"");return le(e.phone)&&!of(t)?"Phone Number 1 should contain only numbers.":le(e.email)&&!tf(e.email?.value||"")?"Email address must be a valid email address.":null}async function qr(e,t,o,n,i,a){let r=document,l=k(v(n.imageSrc||"")),{form:s,formState:c}=ef(n,i);if(c.basicInfo.imageSrc){let u=await po(t,c.basicInfo.imageSrc);u&&u!==c.basicInfo.imageSrc&&(Gp(c,u),jn(s,c,i))}await oe({title:di,dom:r,form:s,headerAction:{type:"none"},submitLabel:se,cancelLabel:ce,shouldCloseWithoutSave:()=>{let u=P([c.basicInfo],le),f=fo(c.phone,"phone",c.phoneTypeWasMissing),m=fo(c.email,"email",c.emailTypeWasMissing),b=P([c.address],le);return u.create.length===0&&u.update.length===0&&u.remove.length===0&&f.create.length===0&&f.update.length===0&&f.remove.length===0&&m.create.length===0&&m.update.length===0&&m.remove.length===0&&b.create.length===0&&b.update.length===0&&b.remove.length===0},validate:()=>i!=="owner"?z:nf(c),onSave:async()=>{if(c.pendingImageFile){let w=await Hr(t,o,c.pendingImageFile);S(c.basicInfo,"imageSrc",w,le)}let u=fo(c.phone,"phone",c.phoneTypeWasMissing),f=fo(c.email,"email",c.emailTypeWasMissing),m={basicOps:P([c.basicInfo],le),phoneOps:Zp(u),emailOps:Qp(f),addressOps:P([c.address],le)};await Or(t,o,m);let b=k(c.basicInfo.imageSrc||"");if(l&&l!==b)try{Br(l)}catch(w){Li("Failed to invalidate resolved photo cache",w)}},formatSaveError:u=>u instanceof Error?u.message:St})&&a&&await a()}import{html as af}from"lit-html";import{authn as Qr}from"solid-logic";import{st as rf}from"rdflib";import"rdflib";function Wr(e,t,o){let n=ze.errorMessageBlock(t.dom,Me(o));n.setAttribute("role","alert"),n.setAttribute("aria-live","assertive"),n.setAttribute("tabindex","0"),setTimeout(()=>{n.focus()},100),e.appendChild(n)}function Gr(e,t){let o=document.createElement("div");o.setAttribute("role","status"),o.setAttribute("aria-live","polite"),o.setAttribute("tabindex","0"),o.classList.add("profile__action-button","licOkay"),o.innerHTML=t,setTimeout(()=>{o.focus()},100),e.appendChild(o)}function Un(e){for(;e.childNodes.length>2;)e.removeChild(e.lastChild)}A(L(`.profile-friends-button__section {
  --profile-friends-button-color: var(--color-primary, #7C4DFF);
  width: 100%;
  min-width: 0;
  display: grid;
}

.profile-friends-button__section[hidden] {
  display: none !important;
}

.profile-friends-button__section solid-ui-button.profile__btn-friends {
  width: 100%;
  min-width: 0;
  --button-hover-background: var(--profile-friends-button-color);
  --button-hover-border: var(--profile-friends-button-color);
  --button-hover-text: var(--color-text-on-action, var(--white, #FFF));
}

.profile-friends-button__section solid-ui-button.profile__btn-friends[disabled],
.profile-friends-button__section solid-ui-button.profile__btn-friends[aria-disabled="true"] {
  pointer-events: none;
  --button-hover-background: var(--button-background, transparent);
  --button-hover-border: var(--button-border, var(--profile-friends-button-color));
  --button-hover-text: var(--button-text, var(--profile-friends-button-color));
}

.profile-friends-button__section .profile__btn-friends-label {
  color: var(--profile-friends-button-color);
  font-size: var(--font-size-sm, 0.875rem);
  font-weight: var(--font-weight-md, 500);
  line-height: 1;
  letter-spacing: -0.01em;
}

.profile-friends-button__section solid-ui-button.profile__btn-friends:not([disabled]):hover .profile__btn-friends-label,
.profile-friends-button__section solid-ui-button.profile__btn-friends:not([disabled]):focus-visible .profile__btn-friends-label,
.profile-friends-button__section solid-ui-button.profile__btn-friends:not([aria-disabled="true"]):hover .profile__btn-friends-label,
.profile-friends-button__section solid-ui-button.profile__btn-friends:not([aria-disabled="true"]):focus-visible .profile__btn-friends-label {
  color: var(--color-text-on-action, var(--white, #FFF));
}

.profile-friends-button__section .profile__btn-friends-label--short {
  display: none;
}

.profile-friends-button__section .profile__btn-friends-label--short::before {
  content: attr(data-short-label-text);
}

.profile-friends-button__container input[type="text"] {
  width: 100%;
  box-sizing: border-box;
}
`,"text/css"));var ne=document.createElement("section");function uo(e,t){let o=e.ownerDocument.createElement("span");if(o.className="profile__btn-friends-label profile__btn-friends-label--full",o.textContent=t,t===wo){let n=e.ownerDocument.createElement("span");n.className="profile__btn-friends-label profile__btn-friends-label--short",n.setAttribute("aria-hidden","true"),n.setAttribute("data-short-label-text","Friends"),e.setAttribute("data-friends-short-label","true"),e.setAttribute("aria-label",t),e.replaceChildren(o,n);return}e.removeAttribute("data-friends-short-label"),e.removeAttribute("aria-label"),e.replaceChildren(o)}var Zr=(e,t,o)=>{ne=t.dom.createElement("section"),ne.setAttribute("class","profile-friends-button__section text-truncate text-center section-centered"),ne.setAttribute("aria-labelledby","add-me-to-your-friends-button-section"),ne.setAttribute("data-testid","button");let n=t.dom.createElement("h3");n.setAttribute("id","add-me-to-your-friends-button-section"),n.setAttribute("class","sr-only"),n.textContent="Add me to your friends actions",ne.appendChild(n);let i=lf(e,t);return i.classList.add("profile__action-button","profile__btn-friends","flex-center"),ne.appendChild(i),af`${ne}`},lf=(e,t)=>{let o=yo,n=t.dom.createElement("solid-ui-button");n.setAttribute("variant","secondary"),uo(n,o),n.addEventListener("click",i);function i(r){r.preventDefault(),sf(e,t,d.foaf("knows")).then(()=>{Un(ne),Gr(ne,mi),a()}).catch(l=>{Un(ne),Wr(ne,t,l)})}a();function a(){let r=Qr.currentUser(),l=t.session.store;Yr(r)?(n.disabled=!1,n.removeAttribute("disabled"),Kr(l,r,e,d.foaf("knows")).then(s=>{let c=t.environment?.layout==="mobile";s?(uo(n,wo),n.disabled=!0,n.setAttribute("disabled","true"),ne.hidden=c,ne.style.display=c?"none":""):(uo(n,yo),n.disabled=!1,n.removeAttribute("disabled"),ne.hidden=!1,ne.style.display="")})):(uo(n,ii),n.disabled=!0,n.setAttribute("disabled","true"),ne.hidden=!1)}return n};async function sf(e,t,o){let n=Qr.currentUser(),i=t.session.store;if(Yr(n)){if(await Kr(i,n,e,o))throw new Error(gi);{await i.fetcher.load(n);let a=i.updater,r=[rf(n,o,e,n.doc())];try{Gt(i),await a.update([],r)}catch(l){let s=l;throw s.toString().includes("Unauthenticated")&&(s=vo),new Error(s)}}}else throw new Error(vo)}function Yr(e){return!!e}async function Kr(e,t,o,n){return await e.fetcher.load(t),e.whether(t,n,o,t.doc())!==0}A(L(`.profile__avatar {
  flex: 0 0 auto;
  grid-area: avatar;
}

/* Header grid */
.profile__heading-top {
  --profile-heading-action-item-flex: 0 0 auto;
  --profile-heading-action-full-label-display: inline;
  --profile-heading-action-short-label-display: none;
  --profile-heading-medium-column-gap: 15px;
  --profile-heading-medium-hero-size: 6.5rem;
  --profile-heading-medium-hero-alt-padding-inline: 27px;
  --profile-heading-medium-action-gap: 4px;
  --profile-heading-medium-actions-max-inline-size: 10.5rem;
  --profile-heading-narrow-column-gap: 8px;
  --profile-heading-narrow-action-gap: 2px;
  --profile-heading-narrow-actions-justify-self: center;
  --profile-heading-narrow-actions-margin-left: auto;
  --profile-heading-narrow-actions-margin-right: auto;
  --profile-heading-narrow-actions-justify-content: center;
  --profile-heading-compact-column-gap: 10px;
  --profile-heading-compact-row-gap: 12px;
  --profile-heading-compact-action-gap: 2px;
  --profile-heading-compact-actions-justify-self: start;
  --profile-heading-compact-actions-margin-left: 0;
  --profile-heading-compact-actions-margin-right: auto;
  --profile-heading-compact-actions-justify-content: flex-start;
  --profile-heading-compact-detail-column-gap: 2px;
  --profile-heading-compact-details-gap: 12px;
  --profile-heading-compact-hero-icon-size: 3rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  grid-template-areas:
    "avatar info actions edit"
    "avatar details details details";
  column-gap: 20px;
  row-gap: 25px;
  align-items: start;
  width: 100%;
}

.profile__name {
  display: block;
  color: var(--color-text-heading, #000);
  font-size: 1.75rem; /* 28px */
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-indent: 0;
  line-height: 1.2;
  text-align: left;
  overflow-wrap: anywhere;
  transform: translateX(-4px);
}

.profile__info {
  display: flex;
  flex-direction: column;
  grid-area: info;
  flex: 1 1 auto;
  min-width: 0;
  align-items: flex-start;
}

.profile__details {
  grid-area: details;
  color: var(--color-text-secondary, #4A5565);
  font-size: var(--font-size-sm, 0.875rem); /* 14px */
  display: flex;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5px 32px;
}

.profile__info > .profile__header-bar {
  margin-left: 0;
  padding-left: 0;
  align-self: stretch;
}

.profile__header-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
  margin: 0;
  padding: 0;
}

.profile__actions {
  color: var(--color-text-secondary, #4A5565);
  font-size: var(--solid-ui-font-size-md, 1rem);
  margin-bottom: 12px;
}

.profile__heading-actions {
  grid-area: actions;
  margin-left: auto;
  margin-bottom: 0;
  align-self: flex-start;
  justify-self: end;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
}

.profile__heading-actions solid-ui-button.profile__btn-friends[data-friends-short-label='true'] .profile__btn-friends-label--full {
  display: var(--profile-heading-action-full-label-display);
}

.profile__heading-actions solid-ui-button.profile__btn-friends[data-friends-short-label='true'] .profile__btn-friends-label--short {
  display: var(--profile-heading-action-short-label-display);
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
  padding: 0;
}

.profile__heading-actions > .profile-friends-button__section,
.profile__heading-actions > .profile-friends-button__section {
  width: auto;
  min-width: 0;
  flex: var(--profile-heading-action-item-flex);
}

.profile__heading-actions > .profile-friends-button__section > solid-ui-button.profile__btn-friends {
  width: auto;
  max-width: 100%;
}

/* Identity details */
.profile__identity {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 7px;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: nowrap;
}

.profile__pronouns {
  color: var(--color-text-secondary, #4A5565);
  font-size: var(--solid-ui-font-size-sm, 0.875rem); 
  font-weight: 400;
  line-height: 1.2;
}

.profile__role-org {
  margin: 0;
  width: 100%;
  white-space: normal;
  color: var(--solid-ui-color-gray-800, #101828);
  font-size: var(--solid-ui-font-size-lg, 1.125rem);
  font-weight: 500;
  line-height: 1.25;
  text-align: left;
}

.profile__meta-row,
.profile__contact-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: flex-start;
  column-gap: clamp(12px, 2vw, 24px);
  row-gap: 12px;
  align-items: start;
  margin: 0;
  padding: 0;
  width: min(100%, 544px);
  max-width: 100%;
}

.profile__meta-row .profile__item,
.profile__contact-row .profile__item {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.profile__meta-row .profile__value,
.profile__contact-row .profile__value,
.profile__meta-row .profile__value-text,
.profile__contact-row .profile__value-text {
  min-width: 0;
  white-space: normal !important;
  overflow-wrap: anywhere;
  word-break: break-word;
}

.profile__meta-row .profile__value,
.profile__contact-row .profile__value {
  display: flex;
  align-items: flex-start;
  gap: 5px;
}

.profile__prefix-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 2px;
}

.profile__detail-icon {
  display: block;
  width: 1rem;
  height: 1rem;
}

.profile__hero,
.profile__hero-alt {
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 10px;
}

.profile__image-frame:not(.profile__image-frame--fallback) .profile__hero-alt {
  display: none;
}

.profile__image-frame--fallback .profile__hero {
  display: none;
}

/* Profile image */
.profile__hero {
  border: 1px solid var(--solid-ui-color-primary, #7C4DFF);
  background: var(--color-surface-placeholder, var(--gray-300, #D1D5DC)) 50% / cover no-repeat;
  background-position: 50%;
  object-fit: cover;
  object-position: center;
}

.profile__hero-alt {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 36.4px;
  border: 1px dashed var(--solid-ui-color-slate-200, #E2E8F0);
  background: var(--solid-ui-color-slate-50, #F8FAFC);
  box-sizing: border-box;
}

/* Counteracts mashlib alignment so the placeholder icon stays centered. */
.profile__hero-alt .profile__hero-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.profile__hero-alt .profile__hero-icon svg {
  display: block;
  width: 100%;
  height: 100%;
}

/* Responsive: medium widths */
@media (max-width: 1200px) {
  .profile__heading-top {
    column-gap: var(--profile-heading-medium-column-gap);
  }

  .profile__hero,
  .profile__hero-alt {
    width: var(--profile-heading-medium-hero-size);
    height: var(--profile-heading-medium-hero-size);
  }

  .profile__hero-alt {
    padding: 0 var(--profile-heading-medium-hero-alt-padding-inline);
  }

  .profile__heading-actions {
    --profile-heading-action-item-flex: 0 1 auto;
    justify-self: end;
    margin-bottom: 0;
    max-inline-size: var(--profile-heading-medium-actions-max-inline-size);
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-end;
    gap: var(--profile-heading-medium-action-gap);
  }
}

@container profile-pane (max-width: 1200px) {
  .profile__heading-top {
    column-gap: var(--profile-heading-medium-column-gap);
  }

  .profile__hero,
  .profile__hero-alt {
    width: var(--profile-heading-medium-hero-size);
    height: var(--profile-heading-medium-hero-size);
  }

  .profile__hero-alt {
    padding: 0 var(--profile-heading-medium-hero-alt-padding-inline);
  }

  .profile__heading-actions {
    --profile-heading-action-item-flex: 0 1 auto;
    justify-self: end;
    margin-bottom: 0;
    max-inline-size: var(--profile-heading-medium-actions-max-inline-size);
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-end;
    gap: var(--profile-heading-medium-action-gap);
  }
}

@media (max-width: 768px) {
  .profile__heading-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "avatar info edit"
      "details details details"
      "actions actions actions";
    column-gap: var(--profile-heading-narrow-column-gap, 0.5rem);
    row-gap: var(--spacing-sm, 0.75rem);
  }

  .profile__heading-actions {
    justify-self: var(--profile-heading-narrow-actions-justify-self, center);
    margin-left: var(--profile-heading-narrow-actions-margin-left, auto);
    margin-right: var(--profile-heading-narrow-actions-margin-right, auto);
    max-inline-size: none;
    justify-content: var(--profile-heading-narrow-actions-justify-content, center);
    align-items: center;
    align-content: center;
    gap: var(--profile-heading-narrow-action-gap, 0.25rem);
    flex-wrap: nowrap;
  }
}

@container profile-pane (max-width: 768px) {
  .profile__heading-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "avatar info edit"
      "details details details"
      "actions actions actions";
    column-gap: var(--profile-heading-narrow-column-gap, 0.5rem);
    row-gap: var(--spacing-sm, 0.75rem);
  }

  .profile__heading-actions {
    justify-self: var(--profile-heading-narrow-actions-justify-self, center);
    margin-left: var(--profile-heading-narrow-actions-margin-left, auto);
    margin-right: var(--profile-heading-narrow-actions-margin-right, auto);
    max-inline-size: none;
    justify-content: var(--profile-heading-narrow-actions-justify-content, center);
    align-items: center;
    align-content: center;
    gap: var(--profile-heading-narrow-action-gap, 0.25rem);
    flex-wrap: nowrap;
  }
}
/* Responsive: compact widths */
/* layout = mobile */
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__heading-top {
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas:
    "avatar info edit"
    "details details details"
    "actions actions actions";
  column-gap: var(--profile-heading-compact-column-gap);
  row-gap: var(--profile-heading-compact-row-gap);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__info {
  grid-column: 2 / -1;
  align-self: stretch;
  justify-content: flex-start;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__avatar {
  align-self: flex-start;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__heading-actions {
  --profile-heading-action-item-flex: 0 1 auto;
  --profile-heading-action-full-label-display: none;
  --profile-heading-action-short-label-display: inline;
  justify-self: var(--profile-heading-compact-actions-justify-self, start);
  margin-left: var(--profile-heading-compact-actions-margin-left, 0);
  margin-right: var(--profile-heading-compact-actions-margin-right, auto);
  max-inline-size: none;
  justify-content: var(--profile-heading-compact-actions-justify-content);
  align-items: center;
  align-content: center;
  gap: var(--profile-heading-compact-action-gap);
  flex-wrap: nowrap;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__heading-actions > .profile-friends-button__section > solid-ui-button.profile__btn-friends {
  min-width: 0;
  inline-size: auto;
  min-height: var(--button-height-sm, 1.75rem);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__name {
  display: inline;
  font-size: 1.375rem;
  line-height: 1.15;
  white-space: nowrap;
  overflow-wrap: normal;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__pronouns {
  font-size: 0.6875rem;
  line-height: 1.1;
  margin-left: 2px;
  white-space: nowrap;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__role-org {
  font-size: var(--solid-ui-font-size-sm, 0.875rem);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__hero,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__hero-alt {
  width: 4.375rem;
  height: 4.375rem;
  aspect-ratio: 1 / 1;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__hero-alt {
  padding: 0;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__image-frame--fallback .profile__hero-alt {
  display: flex;
  align-items: center;
  justify-content: center;
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__hero-icon {
  display: block;
  margin: 0 auto;
  width: var(--profile-heading-compact-hero-icon-size);
  height: var(--profile-heading-compact-hero-icon-size);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__details {
  font-size: var(--profile-heading-compact-detail-size, 0.75rem);
  gap: var(--profile-heading-compact-details-gap);
}

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__meta-row,
:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile__contact-row {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: var(--profile-heading-compact-detail-column-gap);
}

@media (max-width: 576px) {
  .profile__heading-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "avatar info edit"
      "details details details"
      "actions actions actions";
    column-gap: var(--profile-heading-compact-column-gap);
    row-gap: var(--profile-heading-compact-row-gap);
  }

  .profile__info {
    grid-column: 2 / -1;
    align-self: stretch;
    justify-content: flex-start;
  }

  .profile__avatar {
    align-self: flex-start;
  }

  .profile__heading-actions {
    --profile-heading-action-item-flex: 0 1 auto;
    --profile-heading-action-full-label-display: none;
    --profile-heading-action-short-label-display: inline;
    justify-self: var(--profile-heading-compact-actions-justify-self);
    margin-left: var(--profile-heading-compact-actions-margin-left);
    margin-right: var(--profile-heading-compact-actions-margin-right);
    max-inline-size: none;
    justify-content: var(--profile-heading-compact-actions-justify-content);
    align-items: center;
    align-content: center;
    gap: var(--profile-heading-compact-action-gap);
    flex-wrap: nowrap;
  }

  .profile__heading-actions > .profile-friends-button__section > solid-ui-button.profile__btn-friends,
  .profile__heading-actions > #add-to-contacts-button-container > solid-ui-button.profile__btn-contacts {
    min-width: 0;
    inline-size: auto;
    min-height: var(--button-height-sm, 1.75rem);
  }

  .profile__name {
    display: inline;
    font-size: 1.375rem;
    line-height: 1.15;
    white-space: nowrap;
    overflow-wrap: normal;
  }

  .profile__role-org {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }

  .profile__hero-alt {
    padding: 0;
  }

  .profile__image-frame--fallback .profile__hero-alt {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile__hero-icon {
    display: block;
    margin: 0 auto;
    width: var(--profile-heading-compact-hero-icon-size);
    height: var(--profile-heading-compact-hero-icon-size);
  }

  .profile__details {
    font-size: var(--profile-heading-compact-detail-size, 0.75rem);
    gap: var(--profile-heading-compact-details-gap);
  }

  .profile__meta-row,
  .profile__contact-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--profile-heading-compact-detail-column-gap);
  }
}

@container profile-pane (max-width: 576px) {
  .profile__heading-top {
    grid-template-columns: auto minmax(0, 1fr) auto;
    grid-template-areas:
      "avatar info edit"
      "details details details"
      "actions actions actions";
    column-gap: var(--profile-heading-compact-column-gap);
    row-gap: 15px;
  }

  .profile__info {
    grid-column: 2 / -1;
    align-self: stretch;
    justify-content: flex-start;
  }

  .profile__avatar {
    align-self: flex-start;
  }

  .profile__heading-actions {
    --profile-heading-action-item-flex: 0 1 auto;
    --profile-heading-action-full-label-display: none;
    --profile-heading-action-short-label-display: inline;
    justify-self: var(--profile-heading-compact-actions-justify-self);
    margin-left: var(--profile-heading-compact-actions-margin-left);
    margin-right: var(--profile-heading-compact-actions-margin-right);
    max-inline-size: none;
    justify-content: var(--profile-heading-compact-actions-justify-content);
    align-items: center;
    align-content: center;
    gap: var(--profile-heading-compact-action-gap);
    flex-wrap: nowrap;
  }

  .profile__heading-actions > .profile-friends-button__section > solid-ui-button.profile__btn-friends,
  .profile__heading-actions > .profile-friends-button__section > solid-ui-button.profile__btn-friends {
    min-width: 0;
    inline-size: auto;
    min-height: 1.75rem;
  }

  .profile__name {
    display: inline;
    font-size:  1.375rem;
    line-height: 1.15;
    white-space: nowrap;
    overflow-wrap: normal;
  }

  .profile__role-org {
    font-size: var(--solid-ui-font-size-sm, 0.875rem);
  }

  .profile__hero-alt {
    padding: 0;
  }

  .profile__image-frame--fallback .profile__hero-alt {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .profile__hero-icon {
    display: block;
    margin: 0 auto;
    width: var(--profile-heading-compact-hero-icon-size);
    height: var(--profile-heading-compact-hero-icon-size);
  }

  .profile__details {
    font-size: var(--profile-heading-compact-detail-size, 0.75rem);
    gap: var(--profile-heading-compact-details-gap);
  }

  .profile__meta-row,
  .profile__contact-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: var(--profile-heading-compact-detail-column-gap);
  }
}
`,"text/css"));var cf=e=>{let t=e.currentTarget,o=t?.parentElement;!t||!o||(t.hidden=!0,o.classList.add("profile__image-frame--fallback"))},Xr=async(e,t,o,n,i,a)=>{let r=i||"desktop",{name:l,pronouns:s,jobTitle:c,dateOfBirth:p,location:u,primaryPhone:f,primaryEmail:m,imageSrc:b}=o,w=await po(e.session.store,b),x=n==="owner",h=n==="authenticated",g=h?Zr(t,e,n):Se,_=v(f?.valueNode).replace(/^tel:/i,""),y=v(m?.valueNode).replace(/^mailto:/i,""),I=jr(v(p),"");return Ae`
      <section class="profile__section" data-profile-section="heading" aria-labelledby="profile-name">
        <div class="profile__heading-top">
          <div class="profile__avatar">
            ${Bn(w,l)}
          </div>
          <div class="profile__info">
            <header class="profile__header-bar">
              <div class="profile__identity" role="group" aria-label="Name and pronouns">
                <h1 id="profile-name" class="profile__name">${l}</h1>
                <span class="profile__pronouns">${s?`(${s})`:""}</span>
              </div>
              ${c?Ae`<div class="profile__role-org">${c}</div>`:Se}
            </header>
          </div>
          ${x||h?Ae`
                ${h?Ae`
                  <div class="profile__actions profile__heading-actions">
                    ${g}
                  </div>
                `:Se}
                ${x?Ae`
                  <div class="profile__actions profile__heading-edit-action">
                    ${Q({layout:r,className:"profile-section-collapsible__edit-button",ariaLabel:"Add or edit heading information",onClick:C=>qr(C,e.session.store,t,o,n,a),desktopIcon:Ae`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${O}</span>`,desktopLabel:"Edit",mobileIcon:Ae`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
                  </div>
                `:Se}
            `:Se}
          <div class="profile__details">
            <div class="profile__meta-row" role="group" aria-label="Additional profile information">
              ${mo(I,Fi,"")}
              ${mo(u,Qe,"")}
            </div>
            <div class="profile__contact-row" role="group" aria-label="Contact information">
              ${mo(_,Xe,"")}
              ${mo(y,Je,"")}
            </div>
          </div>
        </div>
    </section>
  `},mo=(e,t=Se,o="")=>e?Ae`
    <div class="profile__item ${o?"":"profile__item--valueOnly"}">
      ${o?Ae`<span class="profile__label">${o}</span>`:Se}
      <span class="profile__value">
        ${t!==""&&t!==Se?Ae`<span class="profile__prefix-icon" aria-hidden="true">${t}</span>`:Se}
        <span class="profile__value-text">${e}</span>
      </span>
    </div>
  `:Se,Bn=(e,t)=>Ae`
  <div class=${e?"profile__image-frame":"profile__image-frame profile__image-frame--fallback"}>
    ${e?Ae`
          <img
            class="profile__hero"
            src=${e}
            alt="${t}"
            width="140"
            height="140"
            loading="eager"
            @error=${cf}
          />
        `:Se}
    <div class="profile__hero-alt" role="img" aria-label="${t}">
      <span class="profile__hero-icon">${zi}</span>
    </div>
  </div>
`;import{html as Ne,nothing as _f}from"lit-html";import"rdflib";import{html as Hn,render as ff}from"lit-html";import"rdflib";import{literal as df}from"rdflib";async function pf(e,t,o){let n=t.doc(),i=[],a=[],r=(m,b)=>{let w=(b||"").trim(),x=w?df(w):null;Ie(e,t,m,n,i,a,x)},l=(m,b=!1)=>{let w=b?{description:""}:m;r(d.vcard("note"),w.description)},s=o.remove[0],c=o.update[0],p=o.create[0],u=c||p||s;u&&l(u,!!(s&&!c&&!p));let f=await ge(e,n,a);await W(e,n,i,a,{unsupportedMessage:ae,failureMessage:"Failed to save bio updates",useDavFallback:!1,usePutFallback:f,forcePut:f})}async function Jr(e,t,o){try{await pf(e,t,o)}catch(n){let i=n instanceof Error?n:new Error(String(n));throw V(bi,i),new Error($t,{cause:i})}}A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));function Vn(e){return $(e.description)}function uf(e){return{bio:{description:k(v(e?.description||"")),entryNode:v(e?.entryNode||""),status:v(e?.entryNode||"")?"existing":"new"}}}function mf(e,t){let o="bio-description",n="bio-description-counter",a=(e?.description||"").length,r=l=>{let s=l.target,c=k(s.value.slice(0,2600));S(e,"description",c,Vn),t()};return Hn`
    <section class="profile-edit-dialog__section" aria-label="Bio editor">

      <label aria-label="Bio description" class="label profile-edit-dialog__bio-field-container">
        <span class="profile-edit-dialog__field-description">
          You can write about your years of experience, industry, or skills.
          People also talk about their achievements or previous job experiences.
        </span>
        <textarea
          class="profile-edit-dialog__textarea"
          name=${o}
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
  `}function el(e,t,o){let n=()=>el(e,t,o);ff(Hn`
    ${mf(t.bio,n)}
    ${o!=="owner"?Hn`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e)}function gf(e,t){let o=document.createElement("form");o.classList.add("profile__edit-form","profile__edit-form--bio");let n=uf(e);return el(o,n,t),{form:o,formState:n}}async function qn(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s}=gf(n,i);await oe({title:fi,dom:r,form:l,headerAction:{type:"none"},submitLabel:se,cancelLabel:ce,shouldCloseWithoutSave:()=>{let p=P([s.bio],Vn);return p.create.length===0&&p.update.length===0&&p.remove.length===0},validate:()=>i!=="owner"?z:null,onSave:async()=>{let p=P([s.bio],Vn);await Jr(t,o,p)},formatSaveError:p=>p instanceof Error?p.message:$t})&&a&&await a()}A(L(`.bio-card,
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
`,"text/css"));function hf(e){if(!e)return Ne``;let t="bio-description";return Ne`
      ${e.description?Ne`
        <div class="bio-card__description-wrap">
          <p class="bio-card__description-text" id=${t}>${e.description}</p>
          <solid-ui-button
            variant="tertiary"
            class="bio-card__description-toggle"
            aria-controls=${t}
            aria-expanded="false"
            hidden
            @click=${Xt}
          >
            ...more
          </solid-ui-button>
        </div>
      `:""}
  `}function bf(e){return!!(e?.description||"").trim()}var yf=e=>Ne`
    <article class="bio-card" aria-label="Bio" data-testid="bio-card">
      <section class="bio-card__section">
        ${hf(e)}
      </section>
    </article>
  `;function wf(e,t,o,n,i,a){let r=yf(o),l=o;return Ne`
    <header class="profile__section-header profile-section-collapsible__header">
      <h2 id="bio-heading" tabindex="-1">${"Bio"}</h2>
        ${n==="owner"?Ne`
              ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit bio",onClick:c=>qn(c,e,t,l,n,a),desktopIcon:Ne`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${O}</span>`,desktopLabel:"Edit",mobileIcon:Ne`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
            `:_f}
    </header>
    <div class="profile-section-collapsible__content">
      ${r}
    </div>
  `}function vf(e,t,o,n,i,a){return Ne`
    <section
      aria-labelledby="bio-heading"
      data-profile-section="bio"
      class="profile__section"
      role="region"
      tabindex="-1"
    >
      ${wf(e,t,o,n,i,a)}
    </section>
  `}function xf(e,t,o,n,i){let a=o;return Ne`
    <div class="profile__empty-state-content" role="group" aria-label="Empty bio section">
      <h2 id="bio-heading" tabindex="-1">${"Bio"}</h2>
      <p class="profile__empty-state-message">
        You haven't added any professional experience yet. Adding work history can boost your Bio.
      </p>
    </div>
    <solid-ui-button
      variant="secondary"
      class="profile__action-button--empty"
      @click=${r=>qn(r,e,t,a,n,i)}
    >
      <span slot="left-icon" class="profile__action-icon" aria-hidden="true">${Ze}</span>
      <span class="profile__action-icon">Add Bio</span>
    </solid-ui-button>
  `}function Cf(e,t,o,n,i){return Ne`
    <section
      aria-labelledby="bio-heading"
      data-profile-section="bio"
      class="profile__section--empty profile__section--empty-main bio-section--empty"
      role="region"
      tabindex="-1"
    >
      ${xf(e,t,o,n,i)}
    </section>
  `}function ol(e,t,o,n,i,a){Be();let r=i||"desktop",s=!bf(o)&&n==="owner";return Ne`
    ${s?Cf(e,t,o,n,a):vf(e,t,o,n,r,a)}
  `}import{html as ie,nothing as Hf}from"lit-html";import{html as pt,render as Pf}from"lit-html";import"rdflib";import{Collection as kf,st as dt,literal as Gn,sym as il}from"rdflib";var Af="https://solidos.github.io/profile-pane/src/ontology/socialMedia.ttl#";function Nf(e){Oe(e,"soc",Af)}function Wn(e){return`${e.termType}:${e.value}`}function nl(e){let t=(e||"").trim();return t?t.startsWith("http://")||t.startsWith("https://")?il(t):Gn(t):null}function M(e){return typeof e=="string"?e.trim():e==null?"":String(e).trim()}function Sf(e,t){let o=M(e);if(!o)return"";let n=M(t);if(n){let i=o,a=n.toLowerCase();for(;i.toLowerCase().startsWith(a);)i=i.slice(n.length);if(i)return i;try{let r=new URL(o),l=new URL(n),s=m=>m.toLowerCase().replace(/^www\./,""),c=s(r.hostname),p=s(l.hostname),u=(l.pathname||"/").replace(/\/+$/,""),f=r.pathname||"/";if(c===p&&f.startsWith(u)){let m=f.slice(u.length).replace(/^\/+/,"");if(m)return m}}catch{}}return o.replace(/^https?:\/\//i,"").replace(/^www\./i,"")}function Tf(e,t,o,n){let i=[];n?.classUri&&i.push(dt(t,d.rdf("type"),il(n.classUri),e));let a=M(o.name);if(a.toLowerCase()==="other"||n?.classUri?.endsWith("#OtherAccount")){let c=nl(o.homepage),p=nl(o.icon);return c&&i.push(dt(t,d.foaf("homepage"),c,e)),p&&i.push(dt(t,d.foaf("icon"),p,e)),a&&a.toLowerCase()!=="other"&&i.push(dt(t,d.rdfs("label"),Gn(a),e)),i}let l=n?.userProfilePrefix||n?.homepage,s=Sf(M(o.homepage),l);return s&&i.push(dt(t,d.foaf("accountName"),Gn(s),e)),i}function If(e,t,o){if(!e.any(t,d.rdf("first"),null,o))return[];let n=new Set,i=[],a=t;for(;a;){let r=`${a.termType}:${a.value}`;if(n.has(r))break;n.add(r),i.push(a);let l=e.any(a,d.rdf("rest"),null,o);if(!l||l.termType==="NamedNode"&&l.value===d.rdf("nil").value)break;a=l}return i}function Ef(e,t){let o=new Set(t.remove.map(r=>M(r.entryNode)).filter(Boolean)),n=new Map(t.update.map(r=>[M(r.entryNode),r]).filter(([r])=>!!r)),i=e.filter(r=>!o.has(M(r.entryNode))).map(r=>{let l=M(r.entryNode);return n.get(l)||r}),a=t.create.filter(r=>!!(M(r.name)||M(r.homepage)||M(r.icon)));return[...i,...a]}function Lf(e){return(e||[]).filter(t=>t.status!=="deleted").filter(t=>!!(M(t.name)||M(t.homepage)||M(t.icon)||M(t.entryNode))).map(t=>({name:M(t.name),icon:M(t.icon),homepage:M(t.homepage),entryNode:M(t.entryNode),status:t.status}))}async function $f(e,t,o,n){Nf(e);let i=t.doc(),a=Rt(e),r=_=>ft(a,M(_.name)),l=Ot(t,e).accounts.map(_=>({name:M(_.name),icon:M(_.icon),homepage:M(_.homepage),entryNode:_.entryNode.value,status:"existing"})),s=n&&n.length?Lf(n):Ef(l,o),c=!!(e.updater?.serialize&&e.fetcher?.webOperation),p=e.each(t,d.foaf("account"),null,i),u=Ye(p.flatMap(_=>If(e,_,i).flatMap(y=>e.statementsMatching(y,null,null,i)))),f=Array.from(new Map(p.flatMap(_=>we(e,_)).filter(_=>_.termType==="NamedNode").map(_=>[`${_.termType}:${_.value}`,_])).values()),m=s.map(_=>{if(M(_.entryNode)){let y=D(f,_.entryNode);if(y&&y.termType==="NamedNode")return y}return B(i)}),b=new Set(m.map(_=>Wn(_))),w=f.filter(_=>b.has(Wn(_))),x=f.filter(_=>!b.has(Wn(_))),h=[];m.length>0&&h.push(dt(t,d.foaf("account"),new kf(m),i)),s.forEach((_,y)=>{h.push(...Tf(i,m[y],_,r(_)))});let g=Ye([...e.statementsMatching(t,d.foaf("account"),null,i),...u,...x.flatMap(_=>U(e,_,i)),...w.flatMap(_=>[...e.statementsMatching(_,d.rdf("type"),null,i),...e.statementsMatching(_,d.foaf("accountName"),null,i),...e.statementsMatching(_,d.foaf("homepage"),null,i),...e.statementsMatching(_,d.foaf("icon"),null,i),...e.statementsMatching(_,d.rdfs("label"),null,i)])]);await W(e,i,g,Ye(h),{unsupportedMessage:"Social updates are not supported by this store updater.",failureMessage:"Failed to save updates",forcePut:c,useDavFallback:!c,usePutFallback:!0})}async function al(e,t,o,n){try{await $f(e,t,o,n)}catch(i){let a=i instanceof Error?i:new Error(String(i));throw V(Ai,a),new Error(Lt,{cause:a})}}A(L(`.profile__edit-form--contact-info .profile-edit-dialog__section {
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
`,"text/css"));A(new URL("panes/profile-pane/src/styles/EditDialogs.css",E));function rl(e,t){let o=e.querySelector(t);if(!o)return;typeof o.scrollIntoView=="function"&&o.scrollIntoView({block:"start",behavior:"auto"});let n=e.ownerDocument.defaultView;if(!(n?.matchMedia&&(n.matchMedia("(pointer: coarse)").matches||n.matchMedia("(max-width: 640px)").matches))){if(o.tagName==="SOLID-UI-COMBOBOX"){o.shadowRoot?.querySelector("input")?.focus();return}typeof o.focus=="function"&&o.focus()}}function Ff(e){let t=e[0];return t&&[t.name,t.icon,t.homepage].some($)?'[name="social-homepage-0"]':'[name="social-account-type-0"]'}function go(e){return k(e)}function Df(e){return k(e).replace(/\s+/g,"")}function Ge(e){return $(e.homepage)}function zf(e){let t=(e||[]).map(o=>({name:go(v(o.name)),icon:go(v(o.icon)),homepage:go(v(o.homepage)),entryNode:v(o.entryNode),status:v(o.entryNode)?"existing":"new"})).filter(o=>!!(o.name||o.icon||o.homepage||o.entryNode));return{socialAccounts:t.length?t:[{name:"",icon:"",homepage:"",entryNode:"",status:"new"}],initialExistingOrder:[]}}function Mf(e,t){let o=e.filter(n=>n.status!=="deleted"&&!!(n.entryNode||"").trim()).map(n=>(n.entryNode||"").trim());if(o.length!==t.length)return!0;for(let n=0;n<o.length;n++)if(o[n]!==t[n])return!0;return!1}function Rf(e){for(let t=0;t<e.length;t++){let o=e[t];if(!(!o||o.status==="deleted"||![o.name,o.icon,o.homepage].some($))){if(!$(o.name)||!$(o.icon))return`Social account ${t+1}: please choose an account type from the dropdown.`;if(!$(o.homepage))return`Social account ${t+1}: please enter your personal profile link.`}}return null}function Of(e,t,o,n){let i=ft(o,e?.name||"");return pt`
    <solid-ui-combobox
      select-only
      class="profile-edit-dialog__social-account-select"
      name=${`social-account-type-${t}`}
      autocomplete="off"
      .value=${i?.label||""}
      @change=${n}
    >
      ${o.map(a=>pt`<solid-ui-combobox-option value=${a.label}>${a.label}</solid-ui-combobox-option>`)}
    </solid-ui-combobox>
  `}function jf({rows:e,index:t,displayIndex:o,onDelete:n,onChange:i,options:a,onDragStart:r,onDragEnter:l,onDragOver:s,onDrop:c,onDragEnd:p,onPointerDown:u,onPointerMove:f,onPointerUp:m,onPointerCancel:b,isDropTarget:w}){let x=e[t],h=`Social Account Name ${o+1}`,g=`Social Account Homepage ${o+1}`,_=C=>H=>{let R=H.target,Le=C==="homepage"?Df(R.value):go(R.value);e[t]&&(S(e[t],C,Le,Ge),i())},y=C=>{let H=C;if(!H.detail.option)return;let R=ft(a,String(H.detail.option.value));if(e[t]){if(!R){S(e[t],"name","",Ge),S(e[t],"icon","",Ge),i();return}S(e[t],"name",R.label,Ge),S(e[t],"icon",R.icon||He,Ge),i()}},I=C=>{C.preventDefault(),n()};return pt`
    <div
      class="profile-edit-dialog__row profile-edit-dialog__row--social ${w?"profile-edit-dialog__row--drop-target":""}"
      data-social-reorder-index=${String(t)}
      @dragenter=${()=>l(t)}
      @dragover=${C=>s(C,t)}
      @drop=${C=>c(C,t)}
    >
      <solid-ui-button
        class="profile-edit-dialog__drag-handle"
        variant="ghost"
        aria-label=${`Reorder social account ${o+1}`}
        title="Drag to reorder"
        draggable="true"
        @dragstart=${C=>r(C,t)}
        @dragend=${()=>p()}
        @pointerdown=${C=>u(C,t)}
        @pointermove=${C=>f(C)}
        @pointerup=${C=>m(C)}
        @pointercancel=${C=>b(C)}
      >
        <span slot="icon" aria-hidden="true">${Dt}</span>
      </solid-ui-button>
      <img
        class="profile-edit-dialog__social-icon"
        src="${x?.icon||He}"
        alt="${x?.name||"Social"} icon"
        width="30"
        height="30"
        loading="lazy"
      />
      <label aria-label=${h} class="label profile-edit-dialog__field profile-edit-dialog__field--social-type">
        ${Of(x,t,a,y)}
      </label>
      <label aria-label=${g} class="label profile-edit-dialog__field profile-edit-dialog__field--social-url">
        <input
          class="input"
          type="text"
          name=${`social-homepage-${t}`}
          .value=${x?.homepage||""}
          data-contact-field="homepage"
          data-entry-node=${x?.entryNode||""}
          data-row-status=${x?.status||"n/a"}
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
          aria-label=${`Delete social account ${o+1}`}
          title=${ye}
          @click=${I}
        >
          <span slot="icon" aria-hidden="true">${ve}</span>
        </solid-ui-button>
      </div>
    </div>
  `}function Bf(e,t,o){let n=null,i=null,a=null,r=(g,_)=>{if(g===_)return;let y=e[g];y&&(e.splice(g,1),e.splice(_,0,y))},l=(g,_)=>{n=_,i=_,g.dataTransfer&&(g.dataTransfer.effectAllowed="move",g.dataTransfer.setData("text/plain",String(_)))},s=g=>{n!==null&&(i=g)},c=(g,_)=>{g.preventDefault(),n!==null&&(i=_),g.dataTransfer&&(g.dataTransfer.dropEffect="move")},p=(g,_)=>{g.preventDefault();let y=g.dataTransfer?.getData("text/plain"),I=n??(y?Number(y):null);I===null||Number.isNaN(I)||(r(I,_),n=null,i=null,o())},u=()=>{n=null,i=null},f=g=>{let y=(g.currentTarget?.ownerDocument||document).elementFromPoint(g.clientX,g.clientY)?.closest("[data-social-reorder-index]");if(!y)return;let I=Number(y.dataset.socialReorderIndex);Number.isNaN(I)||(i=I)},m=(g,_)=>{g.pointerType==="touch"&&(g.preventDefault(),n=_,i=_,a=g.pointerId,g.currentTarget?.setPointerCapture?.(g.pointerId))},b=g=>{g.pointerType!=="touch"||a!==g.pointerId||n===null||(g.preventDefault(),f(g))},w=g=>{if(g.pointerType!=="touch"||a!==g.pointerId)return;g.preventDefault(),f(g);let _=n,y=i;g.currentTarget?.releasePointerCapture?.(g.pointerId),a=null,n=null,i=null,!(_===null||y===null||_===y)&&(r(_,y),o())},x=g=>{g.pointerType!=="touch"||a!==g.pointerId||(g.currentTarget?.releasePointerCapture?.(g.pointerId),a=null,n=null,i=null)},h=e.map((g,_)=>({row:g,index:_})).filter(({row:g})=>g.status!=="deleted");return pt`
    <section class="profile-edit-dialog__section" aria-label="Social Accounts">
      <fieldset>
        <legend class="sr-only">Social account entries</legend>
        ${h.map(({index:g},_)=>jf({rows:e,index:g,displayIndex:_,onDelete:()=>{xe(e,g),o()},onChange:o,options:t,onDragStart:l,onDragEnter:s,onDragOver:c,onDrop:p,onDragEnd:u,onPointerDown:m,onPointerMove:b,onPointerUp:w,onPointerCancel:x,isDropTarget:i===g}))}
      </fieldset>
    </section>
  `}function Qn(e,t,o,n,i={}){let a=(l={})=>Qn(e,t,o,n,l),r=Rt(o);Pf(pt`
    ${Bf(t.socialAccounts,r,a)}
    ${n!=="owner"?pt`<p class="profile-edit-dialog__login-message">${z}</p>`:null}
  `,e),i.focusSelector&&rl(e,i.focusSelector)}function Uf(e,t,o){let n=document.createElement("form");n.classList.add("profile__edit-form");let i=zf(e);return i.initialExistingOrder=i.socialAccounts.filter(r=>!!(r.entryNode||"").trim()).map(r=>(r.entryNode||"").trim()),Qn(n,i,t,o),{form:n,formState:i,addRow:()=>{i.socialAccounts.unshift({name:"",icon:"",homepage:"",entryNode:"",status:"new"}),Qn(n,i,t,o,{focusSelector:'[name="social-account-type-0"]'})}}}async function Zn(e,t,o,n,i,a){let r=e.currentTarget?.ownerDocument||document,{form:l,formState:s,addRow:c}=Uf(n,t,i);await oe({title:pi,dom:r,form:l,onOpen:()=>rl(l,Ff(s.socialAccounts)),shouldCloseWithoutSave:()=>{let u=P(s.socialAccounts,Ge),f=Mf(s.socialAccounts,s.initialExistingOrder);return u.create.length===0&&u.update.length===0&&u.remove.length===0&&!f},headerAction:{type:"button",label:"+ Add More",ariaLabel:"Add another social account",onClick:c},submitLabel:se,cancelLabel:ce,validate:()=>i!=="owner"?z:Rf(s.socialAccounts),onSave:async()=>{let u=P(s.socialAccounts,Ge),f={create:u.create,update:u.update,remove:u.remove};await al(t,o,f,s.socialAccounts)},formatSaveError:u=>u instanceof Error?u.message:Lt})&&a&&await a()}import"rdflib";A(L(`.profile__section[data-profile-section='social'],
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
}`,"text/css"));var Vf=10;function qf(e){return!!(e?.homepage&&e?.name&&e?.icon)}function Wf(e){let t=e.currentTarget,o=t?.closest(".social-card");!t||!o||(o.setAttribute("data-mobile-expanded","true"),t.setAttribute("aria-expanded","true"),t.hidden=!0)}var Gf=(e,t)=>{let o=(e.accounts||[]).filter(qf),n=Math.max(0,o.length-Vf);if(o.length)return ie`
      <section
        id="social-media"
        class="social-card"
        aria-label="Social media"
        SocialData: SocialPresentation
      >
        <nav aria-label="Social media profiles">
          <ul class="social-card__list" role="list">
            ${o.map(a=>i(a))}
          </ul>
        </nav>
        ${n>0?ie`
              <solid-ui-button
                variant="tertiary"
                class="social-card__more-button"
                aria-controls="social-media"
                aria-expanded="false"
                @click=${Wf}
              >
                ${n} more
              </solid-ui-button>
            `:ie``}
      </section>
    `;return ie``;function i(a){return ie`
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
    `}};function Qf(e,t){let o=e.accounts&&e.accounts.length>0;return ie`
    ${o?Gf(e,t):ie`<p>No social accounts added yet.</p>`}
  `}function Zf(e,t,o,n,i,a){return ie`
        <section
          aria-labelledby="social-heading"
          data-profile-section="social"
          class="profile__section profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
          role="region"
          tabindex="-1"
          data-expanded="false"
        >
          <header class="profile__section-header profile-section-collapsible__header">
            <h3 id="social-heading" tabindex="-1">${ko}</h3>
            <div class="profile-section-collapsible__actions">
             ${n==="owner"?ie`
                ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Edit social accounts",onClick:l=>Zn(l,e,t,o.accounts,n,a),desktopIcon:ie`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ie`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
              `:Hf}
              <solid-ui-button
                variant="ghost"
                class="profile-section-collapsible__toggle-button"
                aria-label="Toggle social accounts section"
                aria-controls="social-panel"
                aria-expanded="false"
                @click=${X}
              >
                <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
              </solid-ui-button>
            </div>
          </header>
          <div id="social-panel" class="profile-section-collapsible__content">
            ${Qf(o,n)}
          </div>
        </section>
      `}function Yf(){return ie`
      <div class="profile__empty-state-content" role="group" aria-label="Empty social accounts section">
        <div class="social__empty-icon-wrapper">
          <span class="social__empty-icon">${Mi}</span>
        </div>
      </div>
  `}function Kf(e,t,o,n,i,a){return ie`
    <section
      aria-labelledby="social-heading"
      data-profile-section="social"
      class="profile__section--empty profile-section-collapsible profile-section-collapsible--inline-mobile-actions"
      role="region"
      tabindex="-1"
      data-expanded="false"
    >
      <header class="profile__section-header profile-section-collapsible__header">
        <h3 id="social-heading" tabindex="-1">${ko}</h3>
        <div class="profile-section-collapsible__actions">
          ${Q({layout:i,className:"profile-section-collapsible__edit-button",ariaLabel:"Add social accounts",onClick:r=>Zn(r,e,t,o.accounts,n,a),desktopIcon:ie`<span slot="left-icon" class="profile-section-collapsible__action-label profile__add-more-icon" aria-hidden="true">${Y}</span>`,desktopLabel:"Add More",mobileIcon:ie`<span slot="icon" class="profile-section-collapsible__edit-icon" aria-hidden="true">${O}</span>`})}
          <solid-ui-button
            variant="ghost"
            class="profile-section-collapsible__toggle-button"
            aria-label="Toggle social accounts section"
            aria-controls="social-panel"
            aria-expanded="false"
            @click=${X}
          >
            <span slot="icon" class="profile-section-collapsible__chevron" aria-hidden="true">${K}</span>
          </solid-ui-button>
        </div>
      </header>
      <div id="social-panel" class="profile-section-collapsible__content">
        ${Yf()}
      </div>
    </section>
  `}function Yn(e,t,o,n,i,a){let r=i||"desktop",l=o||{accounts:[]},c=!(Array.isArray(l.accounts)&&l.accounts.length>0)&&n==="owner";return ie`
    ${c?Kf(e,t,l,n,r,a):Zf(e,t,l,n,r,a)}
  `}import{html as Xf}from"lit-html";import"rdflib";A(L(`/* QR code section styles. */

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
}`,"text/css"));function Kn(e,t){return Xf`
      <section class="profile__section profile__qr-code" data-profile-section="qr-code" aria-labelledby="qr-heading" tabindex="-1">
        <h3 id="qr-heading" class="sr-only">QR code</h3>
        ${$i(e,t)}
      </section>
  `}import"rdflib";import{authn as Jf,solidLogicSingleton as eu}from"solid-logic";async function ll(e){let t=!1,o=Jf.currentUser();if(!o)return"anonymous";if(!o.sameTerm(e))return"authenticated";try{let n=e.doc();t=!!eu.store.updater?.editable?.(n)}catch{return Ei("Resource could not be refreshed and is not editable."),"anonymous"}return t?"owner":"anonymous"}A(L(`:root {
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
  grid-row: 2;
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
  grid-row: 2;
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
  transform: translateY(-1px);
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
  display: inline !important;
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
    display: inline !important;
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
    display: inline !important;
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

:is(.profile-pane-host, .profile-pane-root)[data-layout='mobile'] .profile-section-collapsible__action-label {
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
`,"text/css"));function tu(e,t,o,n,i,a,r,l,s){return Xn`
    <div
      class="profile__sidebar"
    >
      <aside class="profile__sidebar-content" aria-labelledby="profile-sidebar-heading">
        <h2 id="profile-sidebar-heading" class="sr-only">Profile sidebar</h2>
        ${Yn(e,t,o,r,l,s)}
        ${xn(e,t,n,r,l,s)}
        ${gn(e,t,i,r,l,s)}
        ${cn(e,t,a,r,l,s)}
        ${Kn(t,e)}
      </aside>
    </div>
  `}async function R1(e,t,o,n){let i=t.session.store,a=await ll(e),r=t.environment?.theme??"light",l=t.environment?.inputMode??"pointer",s=await ba(e,i),c=s.profileDetails,p=s.cvDetails,u=s.skills,f=s.languages,m=s.projects,b=s.bioDetails,w=s.social,x=s.contactInfo,h=await Xr(t,e,c,a,o,n),g=ol(i,e,b,a,o,n),_=xn(i,e,u,a,o,n),y=gn(i,e,f,a,o,n),I=Sr(i,e,p,a,o,n),C=Dr(i,e,m,a,o,n),H=Yn(i,e,w,a,o,n),R=cn(i,e,x,a,o,n),Le=Kn(e,i);return o==="mobile"?Xn`
      <div
        class="profile-pane-root"
        data-layout=${o}
        data-theme=${r}
        data-input-mode=${l}
      >
        <main
          id="main-content"
          class="profile-grid"
          tabindex="-1"
        >
          ${h}
          ${g}
          ${_}
          ${y}
          ${I}
          ${C}
          ${H}
          ${R}
          ${Le}
        </main>
      </div>
    `:Xn`
    <div
      class="profile-pane-root"
      data-layout=${o}
      data-theme=${r}
      data-input-mode=${l}
    >
      <div
        id="main-content"
        class="profile-grid"
        tabindex="-1"
      >

        <section class="profile__main">
          ${h}
          ${g}
          ${I}
          ${C}

        </section>
        ${tu(i,e,w,u,f,x,a,o,n)}
      </div>
    </div>
  `}export{R1 as ProfileView};
