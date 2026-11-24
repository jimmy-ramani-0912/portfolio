import{r as i,j as e,d,e as l,f as t,g as r,h as c,i as p,k as x,B as g,q as o}from"./index-56x_-Zhs.js";import h from"./index--AWMa-Oh.js";import"./CloseRounded-Djh1s-Sd.js";const m=o.div`
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
`,v=()=>{const[n,s]=i.useState({state:!1,blog:null});return e.jsx(m,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(j,{children:e.jsxs(d,{children:[e.jsxs(l,{children:[e.jsx(t,{children:"Writing"}),e.jsx(r,{as:"h1",id:"blogs-page-heading",children:"Blogs"}),e.jsx(c,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),e.jsx(p,{children:x.map(a=>e.jsx(g,{blog:a,openModal:n,setOpenModal:s},a.id))})]})}),n.state&&e.jsx(h,{openBlogModal:n,setOpenBlogModal:s})]})})};export{v as default};
//# sourceMappingURL=index-Ba3egP3B.js.map
