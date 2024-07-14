import{H as d,r as i,j as e,p as n}from"./index-B6DKHw_X.js";import{W as j,T as x,D as u,a as g,b as t,c,d as h,P as p,i as f}from"./index-DThtSB7q.js";import"./CloseRounded-HPbevJGh.js";const v=d.div`
  background-color: ${({theme:a})=>a.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
`,m=d.div`
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
`,C=()=>{const[a,o]=i.useState({state:!1,project:null}),[r,l]=i.useState("all");return e.jsxs(v,{children:[e.jsx(m,{children:e.jsxs(j,{children:[e.jsx(x,{children:"Projects"}),e.jsx(u,{children:"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."}),e.jsxs(g,{children:[r==="all"?e.jsx(t,{active:!0,value:"all",onClick:()=>l("all"),children:"All"}):e.jsx(t,{value:"all",onClick:()=>l("all"),children:"All"}),e.jsx(c,{}),r==="web app"?e.jsx(t,{active:!0,value:"web app",onClick:()=>l("web app"),children:"WEB APP'S"}):e.jsx(t,{value:"web app",onClick:()=>l("web app"),children:"WEB APP'S"}),e.jsx(c,{}),r==="flutter app"?e.jsx(t,{active:!0,value:"flutter app",onClick:()=>l("flutter app"),children:"FLUTTER APP'S"}):e.jsx(t,{value:"flutter app",onClick:()=>l("flutter app"),children:"FLUTTER APP'S"})]}),e.jsxs(h,{children:[r==="all"&&n.map(s=>e.jsx(p,{project:s,openModal:a,setOpenModal:o})),n.filter(s=>s.category===r).map(s=>e.jsx(p,{project:s,openModal:a,setOpenModal:o}))]})]})}),a.state&&e.jsx(f,{openModal:a,setOpenModal:o})]})};export{C as default};
