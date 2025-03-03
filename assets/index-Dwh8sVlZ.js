import{H as d,r as i,j as e,p}from"./index-qRo2rbZJ.js";import{W as j,T as x,D as u,a as b,b as s,c as n,d as g,P as c,i as h}from"./index-CTDsiJsj.js";import"./CloseRounded-k7C6OmB3.js";const m=d.div`
  background-color: ${({theme:a})=>a.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
`,v=d.div`
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
`,k=()=>{const[a,t]=i.useState({state:!1,project:null}),[o,l]=i.useState("all");return e.jsxs(m,{children:[e.jsx(v,{children:e.jsxs(j,{children:[e.jsx(x,{children:"Projects"}),e.jsx(u,{children:"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."}),e.jsxs(b,{children:[o==="all"?e.jsx(s,{active:!0,value:"all",onClick:()=>l("all"),children:"All"}):e.jsx(s,{value:"all",onClick:()=>l("all"),children:"All"}),e.jsx(n,{}),o==="web app"?e.jsx(s,{active:!0,value:"web app",onClick:()=>l("web app"),children:"Web App's"}):e.jsx(s,{value:"web app",onClick:()=>l("web app"),children:"Web App's"}),e.jsx(n,{}),o==="mobile app"?e.jsx(s,{active:!0,value:"mobile app",onClick:()=>l("mobile app"),children:"Mobile App's"}):e.jsx(s,{value:"mobile app",onClick:()=>l("mobile app"),children:"Mobile App's"})]}),e.jsxs(g,{children:[o==="all"&&p.map(r=>e.jsx(c,{project:r,openModal:a,setOpenModal:t})),p.filter(r=>r.category===o).map(r=>e.jsx(c,{project:r,openModal:a,setOpenModal:t}))]})]})}),a.state&&e.jsx(h,{openModal:a,setOpenModal:t})]})};export{k as default};
