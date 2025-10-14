import{j as s,L as t,N as a,r,O as c,a as l}from"./index-CvGO4ASu.js";import{I as n}from"./Icon-CZmsDok7.js";import{d as i}from"./styled-components.browser.esm-m2rGrP6L.js";const d="_header_s3wvy_1",h="_logo_s3wvy_23",x="_title_s3wvy_39",e={header:d,logo:h,title:x},o=i(a)`
  color: black;

  &.active {
    color: #E44848;
  }
`,j=()=>s.jsxs("section",{className:e.header,children:[s.jsx("div",{style:{cursor:"pointer"},children:s.jsxs(t,{to:"/",className:e.logo,children:[s.jsx(n,{iconName:"icon-logo",width:"44",height:"44"}),s.jsx("h1",{className:e.title,children:"McCamper Rent"})]})}),s.jsxs("nav",{children:[s.jsx(o,{to:"/",children:"Home"}),s.jsx(o,{to:"/catalog",children:"Catalog"}),s.jsx(o,{to:"/favorites",children:"Favorites"})]})]}),v=()=>s.jsxs(s.Fragment,{children:[s.jsx(j,{}),s.jsx("main",{children:s.jsx(r.Suspense,{fallback:s.jsx(l,{}),children:s.jsx(c,{})})})]});export{v as default};
