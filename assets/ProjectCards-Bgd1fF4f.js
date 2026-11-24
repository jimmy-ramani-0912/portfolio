import{q as i,M as d,N as c,e as x,j as t}from"./index-BoLDuifJ.js";import{f as l,g as m}from"./mixins-D7YG3nR1.js";const C=i.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: linear-gradient(
    343.07deg,
    ${({theme:e})=>e.accentMesh1} 5.71%,
    transparent 64.83%
  );
`,D=i.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,T=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,j=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${d}
`,E=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${c}
`,B=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,I=i.div`
  display: inline-flex;
  align-items: stretch;
  margin-top: clamp(20px, 3vw, 28px);
  margin-bottom: clamp(8px, 2vw, 12px);
  ${l}
  color: ${({theme:e})=>e.text_primary};
  font-size: 0.9375rem;
  border-radius: 14px;
  font-weight: 600;
  border: 1px solid ${({theme:e})=>e.primary}55;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`,M=i.button`
  margin: 0;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
  ${({$active:e,theme:n})=>e&&`
    color: ${n.text_primary};
    background: ${n.primary}22;
  `}
  &:hover {
    background: ${({theme:e})=>e.primary}14;
    color: ${({theme:e})=>e.text_primary};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: -2px;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`,S=i.span`
  width: 1px;
  align-self: stretch;
  min-height: 100%;
  background: ${({theme:e})=>e.primary}44;
`,q=i.div`
  width: 100%;
  max-width: min(1200px, 94vw);
  margin-top: clamp(24px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  justify-items: center;
`,A=i.button`
  margin-top: clamp(28px, 4vw, 40px);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  font-weight: 600;
  color: ${({theme:e})=>e.button};
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;
  &:hover {
    color: ${({theme:e})=>e.primary};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`,g=i.div`
  width: 100%;
  max-width: 340px;
  min-height: 440px;
  ${m}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.3s ease;
  position: relative;
  border-color: ${({theme:e})=>e.primary}40;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 18px 18px 0 0;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.primary} 0%,
      ${({theme:e})=>e.accent} 48%,
      ${({theme:e})=>e.primary} 100%
    );
    z-index: 2;
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }
`,h=i.img`
  width: 100%;
  height: 148px;
  object-fit: cover;
  background-color: ${({theme:e})=>e.card_light};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.navBorder};
`,f=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,w=i.span`
  ${l}
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 4px 10px;
  border-radius: 8px;
`,u=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
`,b=i.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: ${({theme:e})=>e.text_primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=i.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
`,y=i.p`
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,$=i.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`,k=i.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.card_light};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.glassCardBorder};
`,G=({project:e,setOpenModal:n})=>{var a,s;const p=x(),o=()=>{n({state:!0,project:e})};return t.jsxs(g,{...p,tabIndex:0,role:"button",onClick:o,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),o())},children:[t.jsx(h,{src:e.image,alt:`${e.title} project preview`,loading:"lazy",decoding:"async"}),t.jsx(f,{children:(a=e.tags)==null?void 0:a.map(r=>t.jsx(w,{children:r},r))}),t.jsxs(u,{children:[t.jsx(b,{children:e.title}),t.jsx(v,{children:e.date}),t.jsx(y,{children:e.description})]}),((s=e.member)==null?void 0:s.length)>0&&t.jsx($,{children:e.member.map(r=>t.jsx(k,{src:r.img,alt:`${e.title} team member`},r.img))})]})};export{q as C,B as D,j as E,D as I,G as P,T as S,E as T,A as V,I as a,S as b,M as c,C as d};
//# sourceMappingURL=ProjectCards-Bgd1fF4f.js.map
