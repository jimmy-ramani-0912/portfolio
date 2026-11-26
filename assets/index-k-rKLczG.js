import{r as i,j as e,b as r,q as a}from"./index-D7JifTqo.js";import{I as t,S as l,E as d,T as p,D as c,C as x}from"./BlogsStyle-D7rLwxYw.js";import{B as m}from"./BlogCards-Cq3CV4m7.js";import g from"./index-Cbir_mHu.js";import"./sectionStyles-BSDaswZg.js";import"./mixins-vhbqddEv.js";import"./Modal-PWZom7ES.js";const h=a.div`
  background-color: ${({theme:s})=>s.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: calc(100dvh - 80px);
`,j=a.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`,E=()=>{const[s,o]=i.useState({state:!1,blog:null});return e.jsx(h,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(j,{children:e.jsxs(t,{children:[e.jsxs(l,{children:[e.jsx(d,{children:"Writing"}),e.jsx(p,{as:"h1",id:"blogs-page-heading",children:"Blogs"}),e.jsx(c,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),e.jsx(x,{children:r.map(n=>e.jsx(m,{blog:n,openModal:s,setOpenModal:o},n.id))})]})}),s.state&&e.jsx(g,{openBlogModal:s,setOpenBlogModal:o})]})})};export{E as default};
//# sourceMappingURL=index-k-rKLczG.js.map
