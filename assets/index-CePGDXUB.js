import{r as l,p as o,j as e,R as p,q as i}from"./index-D7JifTqo.js";import{I as x,S as m,E as u,T as h,D as j,a as b,b as g,c as v,C as w,P}from"./ProjectCards-CfiSCS67.js";import f from"./index-brEpRKm3.js";import"./sectionStyles-BSDaswZg.js";import"./mixins-vhbqddEv.js";import"./Modal-PWZom7ES.js";const y=i.div`
  background-color: ${({theme:s})=>s.bg};
  width: 100%;
  overflow-x: hidden;
  min-height: calc(100dvh - 80px);
`,k=i.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: clamp(40px, 6vw, 72px) clamp(16px, 4vw, 32px) 80px;
`,S=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],D=()=>{const[s,r]=l.useState({state:!1,project:null}),[t,n]=l.useState("all"),d=l.useMemo(()=>t==="all"?o:o.filter(a=>a.category===t),[t]);return e.jsx(y,{children:e.jsxs("main",{id:"main-content",children:[e.jsx(k,{children:e.jsxs(x,{children:[e.jsxs(m,{children:[e.jsx(u,{children:"Portfolio"}),e.jsx(h,{as:"h1",id:"projects-page-heading",children:"Projects"}),e.jsx(j,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),e.jsx(b,{role:"tablist","aria-label":"Filter projects by type",children:S.map((a,c)=>e.jsxs(p.Fragment,{children:[c>0&&e.jsx(g,{"aria-hidden":!0}),e.jsx(v,{type:"button",role:"tab","aria-selected":t===a.value,$active:t===a.value,onClick:()=>n(a.value),children:a.label})]},a.value))}),e.jsx(w,{children:d.map(a=>e.jsx(P,{project:a,setOpenModal:r},a.id))})]})}),s.state&&e.jsx(f,{openModal:s,setOpenModal:r})]})})};export{D as default};
//# sourceMappingURL=index-CePGDXUB.js.map
