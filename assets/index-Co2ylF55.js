import{H as t,j as e,C as d}from"./index-DFSJHcmm.js";import{M as p,C as s}from"./CloseRounded-DtEWOs3W.js";const E=t.div`
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
  padding: 80px 0;
`,F=t.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,N=t.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:i})=>i.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,S=t.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:i})=>i.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,Y=t.div`
  display: flex;
  border: 1.5px solid ${({theme:i})=>i.primary};
  color: ${({theme:i})=>i.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`,q=t.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({active:i,theme:r})=>i&&`
    background: ${r.primary+20};
    `}
  &:hover {
    background: ${({theme:i})=>i.primary+8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`,J=t.div`
  width: 1.5px;
  background: ${({theme:i})=>i.primary};
`,K=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`,Q=t.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:i})=>i.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,l=t.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({theme:i})=>i.white};
  color: ${({theme:i})=>i.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`,c=t.div`
  width: 330px;
  height: 490px;
  background-color: ${({theme:i})=>i.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
  &:hover ${l} {
    display: block;
  }
`,g=t.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  background-color: ${({theme:i})=>i.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,m=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,h=t.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:i})=>i.primary};
  background-color: ${({theme:i})=>i.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,f=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,w=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=t.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,u=t.div`
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,y=t.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,v=t.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:i})=>i.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:i})=>i.card};
`,U=({project:i,setOpenModal:r})=>{var n,o;return e.jsxs(c,{onClick:()=>r({state:!0,project:i}),children:[e.jsx(g,{src:i.image}),e.jsx(m,{children:(n=i.tags)==null?void 0:n.map((a,W)=>e.jsx(h,{children:a}))}),e.jsxs(f,{children:[e.jsx(w,{children:i.title}),e.jsx(b,{children:i.date}),e.jsx(u,{children:i.description})]}),e.jsx(y,{children:(o=i.member)==null?void 0:o.map(a=>e.jsx(v,{src:a.img}))})]})},$=d(e.jsx("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),j=d(e.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),k=t.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`,z=t.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({theme:i})=>i.card};
  color: ${({theme:i})=>i.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,C=t.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,_=t.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,D=t.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,T=t.img`
  width: 60%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,H=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,I=t.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,M=t.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({theme:i})=>i.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:i})=>i.primary+20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,B=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`,L=t.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,V=t.img`
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
`,A=t.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({theme:i})=>i.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`,G=t.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`,x=t.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({theme:i})=>i.primary};
  ${({dull:i,theme:r})=>i&&`
        background-color: ${r.bgLight};
        color: ${r.text_secondary};
        &:hover {
            background-color: ${({theme:n})=>n.bg+99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({theme:i})=>i.primary+99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`,X=({openModal:i,setOpenModal:r})=>{const n=i==null?void 0:i.project;return e.jsx(p,{open:!0,onClose:()=>r({state:!1,project:null}),children:e.jsx(k,{children:e.jsxs(z,{children:[e.jsx(s,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>r({state:!1,project:null})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(T,{src:n==null?void 0:n.image})}),e.jsx(C,{children:n==null?void 0:n.title}),e.jsx(_,{children:n.date}),e.jsx(I,{children:n==null?void 0:n.tags.map(o=>e.jsx(M,{children:o}))}),e.jsx(D,{children:n==null?void 0:n.description}),n.member&&e.jsxs(e.Fragment,{children:[e.jsx(H,{children:"Members"}),e.jsx(B,{children:n==null?void 0:n.member.map(o=>e.jsxs(L,{children:[e.jsx(V,{src:o.img}),e.jsx(A,{children:o.name}),e.jsx("a",{href:o.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:e.jsx($,{})}),e.jsx("a",{href:o.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:e.jsx(j,{})})]}))})]}),e.jsxs(G,{children:[e.jsx(x,{dull:!0,href:n==null?void 0:n.github,target:"new",children:"View Code"}),e.jsx(x,{href:n==null?void 0:n.webapp,target:"new",children:"View Live App"})]})]})})})};export{E as C,S as D,U as P,N as T,Q as V,F as W,Y as a,q as b,J as c,K as d,X as i};
