import{H as a,r,j as e,A as t}from"./index-BvQ3crYV.js";import{W as i,T as l,D as d,a as c,B as p,I as g}from"./BlogCards-CYOp4eFk.js";import"./CloseRounded-SgVdPea0.js";const x=a.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`,h=a.div`
  background-color: ${({theme:s})=>s.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
`,f=()=>{const[s,o]=r.useState({state:!1,blog:null});return e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(i,{children:[e.jsx(l,{children:"Blogs"}),e.jsx(d,{children:"Join me as I share insights from my journey developing web and Android apps."}),e.jsx(c,{children:t.map(n=>e.jsx(p,{blog:n,openModal:s,setOpenModal:o}))})]})}),s.state&&e.jsx(g,{openBlogModal:s,setOpenBlogModal:o})]})};export{f as default};
