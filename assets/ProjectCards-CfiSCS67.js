import{q as i,h as p,j as t}from"./index-D7JifTqo.js";import{s as d}from"./sectionStyles-BSDaswZg.js";import{g as x,f as c}from"./mixins-vhbqddEv.js";const _=i.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.navBorder};
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: transparent;
`,D=i.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,T=i.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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
  color: ${({theme:e})=>e.primary};
`,B=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${d}
`,E=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,H=i.div`
  display: inline-flex;
  align-items: stretch;
  align-self: flex-start;
  gap: 4px;
  margin-top: clamp(20px, 3vw, 28px);
  padding: 5px;
  background: ${({theme:e})=>e.card};
  border: 1px solid ${({theme:e})=>e.navBorder};
  border-radius: 999px;
  font-size: 0.9375rem;
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`,I=i.button`
  margin: 0;
  padding: 9px 20px;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
  ${({$active:e,theme:n})=>e&&`
    color: ${n.onPrimary};
    background: ${n.primaryFill};
  `}
  &:hover {
    color: ${({$active:e,theme:n})=>e?n.onPrimary:n.text_primary};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 2px;
  }
  @media (max-width: 768px) {
    padding: 8px 14px;
  }
`,P=i.span`
  display: none;
`,S=i.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 32px;
`,q=i.div`
  width: 100%;
  margin-top: clamp(24px, 4vw, 36px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: clamp(16px, 2.4vw, 24px);
  align-items: stretch;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    & > *:first-child {
      grid-column: span 2;
    }
    & > *:first-child img {
      height: 230px;
    }
  }
`,A=i.button`
  margin: 0;
  padding: 10px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  transition: color 0.2s ease, transform 0.2s ease;
  &:hover {
    color: ${({theme:e})=>e.text_primary};
    transform: translateX(2px);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 4px;
    border-radius: 4px;
  }
`,m=i.div`
  width: 100%;
  max-width: none;
  min-height: 440px;
  ${x}
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.3s ease;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }
`,g=i.img`
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
`,h=i.span`
  ${c}
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 4px 10px;
  border-radius: 8px;
`,w=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
`,u=i.h3`
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
`,b=i.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
`,v=i.p`
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
`,y=i.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`,$=i.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.card_light};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.glassCardBorder};
`,G=({project:e,setOpenModal:n})=>{var o,s;const l=p(),a=()=>{n({state:!0,project:e})};return t.jsxs(m,{...l,tabIndex:0,role:"button",onClick:a,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),a())},children:[t.jsx(g,{src:e.image,alt:`${e.title} project preview`,loading:"lazy",decoding:"async"}),t.jsx(f,{children:(o=e.tags)==null?void 0:o.map(r=>t.jsx(h,{children:r},r))}),t.jsxs(w,{children:[t.jsx(u,{children:e.title}),t.jsx(b,{children:e.date}),t.jsx(v,{children:e.description})]}),((s=e.member)==null?void 0:s.length)>0&&t.jsx(y,{children:e.member.map(r=>t.jsx($,{src:r.img,alt:`${e.title} team member`},r.img))})]})};export{q as C,E as D,j as E,S as H,D as I,G as P,T as S,B as T,A as V,H as a,P as b,I as c,_ as d};
//# sourceMappingURL=ProjectCards-CfiSCS67.js.map
