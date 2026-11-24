import{r as i,j as e,b as r,q as o}from"./index-BoLDuifJ.js";import{I as t,S as d,E as l,T as c,D as p,C as x}from"./BlogsStyle-DGHyy4Bu.js";import{B as g}from"./BlogCards-D_I2plW-.js";import m from"./index-D03ez-Fd.js";import"./mixins-D7YG3nR1.js";import"./Modal-C_249NR9.js";const h=o.div`
  background-color: ${({theme:n})=>n.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: calc(100dvh - 80px);
`,j=o.div`
  background: linear-gradient(
    343.07deg,
    ${({theme:n})=>n.accentMesh1} 5.71%,
    transparent 64.83%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`,M=()=>{const[n,s]=i.useState({state:!1,blog:null});return e.jsx(h,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(j,{children:e.jsxs(t,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Writing"}),e.jsx(c,{as:"h1",id:"blogs-page-heading",children:"Blogs"}),e.jsx(p,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),e.jsx(x,{children:r.map(a=>e.jsx(g,{blog:a,openModal:n,setOpenModal:s},a.id))})]})}),n.state&&e.jsx(m,{openBlogModal:n,setOpenBlogModal:s})]})})};export{M as default};
//# sourceMappingURL=index-LKsRJFFk.js.map
