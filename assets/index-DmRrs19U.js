import{r as l,p as i,j as e,I as p,S as x,E as h,T as u,D as j,a as b,R as g,b as m,c as v,C as w,P,q as o}from"./index-56x_-Zhs.js";import y from"./index-C0RIoTYj.js";import"./CloseRounded-Djh1s-Sd.js";const f=o.div`
  background-color: ${({theme:s})=>s.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: calc(100dvh - 80px);
`,k=o.div`
  background: linear-gradient(
    343.07deg,
    ${({theme:s})=>s.accentMesh1} 5.71%,
    transparent 64.83%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`,S=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],M=()=>{const[s,r]=l.useState({state:!1,project:null}),[t,n]=l.useState("all"),d=l.useMemo(()=>t==="all"?i:i.filter(a=>a.category===t),[t]);return e.jsx(f,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(k,{children:e.jsxs(p,{children:[e.jsxs(x,{children:[e.jsx(h,{children:"Portfolio"}),e.jsx(u,{as:"h1",id:"projects-page-heading",children:"Projects"}),e.jsx(j,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),e.jsx(b,{role:"tablist","aria-label":"Filter projects by type",children:S.map((a,c)=>e.jsxs(g.Fragment,{children:[c>0&&e.jsx(m,{"aria-hidden":!0}),e.jsx(v,{type:"button",role:"tab","aria-selected":t===a.value,$active:t===a.value,onClick:()=>n(a.value),children:a.label})]},a.value))}),e.jsx(w,{children:d.map(a=>e.jsx(P,{project:a,setOpenModal:r},a.id))})]})}),s.state&&e.jsx(y,{openModal:s,setOpenModal:r})]})})};export{M as default};
//# sourceMappingURL=index-DmRrs19U.js.map
