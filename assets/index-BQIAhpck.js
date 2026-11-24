import{r as l,p as i,j as e,R as p,q as o}from"./index-BoLDuifJ.js";import{I as x,S as h,E as m,T as u,D as j,a as b,b as g,c as v,C as w,P}from"./ProjectCards-Bgd1fF4f.js";import f from"./index-CwZBxAdm.js";import"./mixins-D7YG3nR1.js";import"./Modal-C_249NR9.js";const y=o.div`
  background-color: ${({theme:t})=>t.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: calc(100dvh - 80px);
`,k=o.div`
  background: linear-gradient(
    343.07deg,
    ${({theme:t})=>t.accentMesh1} 5.71%,
    transparent 64.83%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`,S=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],R=()=>{const[t,r]=l.useState({state:!1,project:null}),[s,n]=l.useState("all"),d=l.useMemo(()=>s==="all"?i:i.filter(a=>a.category===s),[s]);return e.jsx(y,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(k,{children:e.jsxs(x,{children:[e.jsxs(h,{children:[e.jsx(m,{children:"Portfolio"}),e.jsx(u,{as:"h1",id:"projects-page-heading",children:"Projects"}),e.jsx(j,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),e.jsx(b,{role:"tablist","aria-label":"Filter projects by type",children:S.map((a,c)=>e.jsxs(p.Fragment,{children:[c>0&&e.jsx(g,{"aria-hidden":!0}),e.jsx(v,{type:"button",role:"tab","aria-selected":s===a.value,$active:s===a.value,onClick:()=>n(a.value),children:a.label})]},a.value))}),e.jsx(w,{children:d.map(a=>e.jsx(P,{project:a,setOpenModal:r},a.id))})]})}),t.state&&e.jsx(f,{openModal:t,setOpenModal:r})]})})};export{R as default};
//# sourceMappingURL=index-BQIAhpck.js.map
