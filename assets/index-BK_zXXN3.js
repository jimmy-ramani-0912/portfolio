import{H as a,r,j as e}from"./vendor-BscfTXtr.js";import{W as t,T as i,D as l,a as d,B as c,I as p}from"./BlogCards-Sn-BX8w8.js";import{b as g}from"./index-LHCWV6pk.js";const x=a.div`
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
`,u=()=>{const[s,o]=r.useState({state:!1,blog:null});return e.jsxs(h,{children:[e.jsx(x,{children:e.jsxs(t,{children:[e.jsx(i,{children:"Blogs"}),e.jsx(l,{children:"Join me as I share insights from my journey developing web and Android apps."}),e.jsx(d,{children:g.map(n=>e.jsx(c,{blog:n,openModal:s,setOpenModal:o}))})]})}),s.state&&e.jsx(p,{openBlogModal:s,setOpenBlogModal:o})]})};export{u as default};
