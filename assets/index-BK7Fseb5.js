import{H as t,j as e,M as d,C as p,G as s,t as l}from"./vendor-BscfTXtr.js";const P=t.div`
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
`,R=t.div`
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
`,E=t.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:i})=>i.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,F=t.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:i})=>i.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,N=t.div`
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
`,Y=t.div`
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
`,q=t.div`
  width: 1.5px;
  background: ${({theme:i})=>i.primary};
`,J=t.div`
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
`,K=t.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:i})=>i.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,c=t.button`
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
`,g=t.div`
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
  &:hover ${c} {
    display: block;
  }
`,m=t.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  background-color: ${({theme:i})=>i.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,h=t.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`,f=t.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:i})=>i.primary};
  background-color: ${({theme:i})=>i.primary+15};
  padding: 2px 8px;
  border-radius: 10px;
`,w=t.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,b=t.div`
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
`,u=t.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,y=t.div`
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary+99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,v=t.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
`,$=t.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:i})=>i.white};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:i})=>i.card};
`,Q=({project:i,setOpenModal:r})=>{var n,o;return e.jsxs(g,{onClick:()=>r({state:!0,project:i}),children:[e.jsx(m,{src:i.image}),e.jsx(h,{children:(n=i.tags)==null?void 0:n.map((a,M)=>e.jsx(f,{children:a}))}),e.jsxs(w,{children:[e.jsx(b,{children:i.title}),e.jsx(u,{children:i.date}),e.jsx(y,{children:i.description})]}),e.jsx(v,{children:(o=i.member)==null?void 0:o.map(a=>e.jsx($,{src:a.img}))})]})},j=t.div`
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
`,k=t.div`
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
`,z=t.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,C=t.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,_=t.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`,D=t.img`
  width: 60%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,T=t.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`,B=t.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`,G=t.div`
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
`,I=t.div`
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
`,H=t.div`
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
`,S=({openModal:i,setOpenModal:r})=>{const n=i==null?void 0:i.project;return e.jsx(d,{open:!0,onClose:()=>r({state:!1,project:null}),children:e.jsx(j,{children:e.jsxs(k,{children:[e.jsx(p,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>r({state:!1,project:null})}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(D,{src:n==null?void 0:n.image})}),e.jsx(z,{children:n==null?void 0:n.title}),e.jsx(C,{children:n.date}),e.jsx(B,{children:n==null?void 0:n.tags.map(o=>e.jsx(G,{children:o}))}),e.jsx(_,{children:n==null?void 0:n.description}),n.member&&e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Members"}),e.jsx(I,{children:n==null?void 0:n.member.map(o=>e.jsxs(L,{children:[e.jsx(V,{src:o.img}),e.jsx(A,{children:o.name}),e.jsx("a",{href:o.github,target:"new",style:{textDecoration:"none",color:"inherit"},children:e.jsx(s,{})}),e.jsx("a",{href:o.linkedin,target:"new",style:{textDecoration:"none",color:"inherit"},children:e.jsx(l,{})})]}))})]}),e.jsxs(H,{children:[e.jsx(x,{dull:!0,href:n==null?void 0:n.github,target:"new",children:"View Code"}),e.jsx(x,{href:n==null?void 0:n.webapp,target:"new",children:"View Live App"})]})]})})})};export{P as C,F as D,Q as P,E as T,K as V,R as W,N as a,Y as b,q as c,J as d,S as i};
