import{e as x,j as i,h as d,q as t}from"./index-PjGdYWfn.js";import{g as p}from"./mixins-CMlaYrJz.js";import{M as l,C as c}from"./Modal-B6oatg0K.js";const h=x(i.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),m=x(i.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),g=t.div`
  width: 100%;
  height: 100dvh;
  max-height: 100dvh;
  position: fixed;
  inset: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 24px 12px;
  box-sizing: border-box;
  outline: none;
`,f=t.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  max-height: calc(100dvh - 48px);
  min-height: 0;
  display: flex;
  flex-direction: column;
  ${p}
  color: ${({theme:n})=>n.text_primary};
  position: relative;
`,w=t.div`
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  flex: 1;
  min-height: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`,u=t.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:n})=>n.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,b=t.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:n})=>n.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,v=t.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:n})=>n.text_primary};
  margin: 8px 6px;
  white-space: pre-line;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,y=t.img`
  width: 60%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,j=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:n})=>n.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,z=t.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,$=t.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:n})=>n.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:n})=>n.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,k=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,C=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,_=t.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`,I=t.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:n})=>n.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,H=t.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,a=t.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:n})=>n.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({theme:n})=>n.primary};
  ${({dull:n,theme:o})=>n&&`
        background-color: ${o.bgLight};
        color: ${o.text_secondary};
        &:hover {
            background-color: ${({theme:e})=>e.bg+99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({theme:n})=>n.primary+99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,B=({openModal:n,setOpenModal:o})=>{const e=n==null?void 0:n.project,s=d();return i.jsx(l,{open:!0,onClose:()=>o({state:!1,project:null}),slotProps:{backdrop:{sx:{backgroundColor:"transparent"}}},children:i.jsx(g,{children:i.jsxs(f,{...s,children:[i.jsx(c,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer",zIndex:2},onClick:()=>o({state:!1,project:null})}),i.jsxs(w,{children:[i.jsx("div",{style:{display:"flex",justifyContent:"center"},children:i.jsx(y,{src:e==null?void 0:e.image})}),i.jsx(u,{children:e==null?void 0:e.title}),i.jsx(b,{children:e.date}),i.jsx(z,{children:e==null?void 0:e.tags.map(r=>i.jsx($,{children:r},r))}),i.jsx(v,{children:e==null?void 0:e.description}),e.member&&i.jsxs(i.Fragment,{children:[i.jsx(j,{children:"Members"}),i.jsx(k,{children:e==null?void 0:e.member.map(r=>i.jsxs(C,{children:[i.jsx(_,{src:r.img}),i.jsx(I,{children:r.name}),i.jsx("a",{href:r.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:i.jsx(h,{})}),i.jsx("a",{href:r.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:i.jsx(m,{})})]},r.name))})]}),((e==null?void 0:e.github)||(e==null?void 0:e.webapp))&&i.jsxs(H,{children:[(e==null?void 0:e.github)&&i.jsx(a,{dull:!0,href:e.github,target:"new",children:"View Code"}),(e==null?void 0:e.webapp)&&i.jsx(a,{href:e.webapp,target:"new",children:"View Live App"})]})]})]})})})};export{B as default};
//# sourceMappingURL=index-Ba3sFzwB.js.map
