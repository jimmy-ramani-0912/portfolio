import{u as p,h as c,a0 as x,j as t,q as i,g as l}from"./index-PjGdYWfn.js";import{g as m}from"./mixins-CMlaYrJz.js";const h=i.div`
  width: 100%;
  max-width: 340px;
  min-height: 340px;
  ${m}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: transform 0.3s ease;
  border-color: ${({theme:e})=>e.primary}40;
  position: relative;
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
`,f=i.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({theme:e})=>e.card_light};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.navBorder};
`,u=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,v=i.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.15rem);
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  line-height: 1.3;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=i.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme:e})=>e.text_secondary};
`,$=({blog:e,setOpenModal:n})=>{const s=p(),o=c(),a=()=>{e!=null&&e.pdfUrl?n({state:!0,blog:e}):s(l(e),{state:{blog:e}})},d=e!=null&&e.title?`${x(e.title)} cover image`:"Blog cover image";return t.jsxs(h,{...o,tabIndex:0,role:"button",onClick:a,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),a())},children:[t.jsx(f,{src:e==null?void 0:e.image,alt:d,loading:"lazy",decoding:"async"}),t.jsxs(u,{children:[t.jsx(v,{children:e==null?void 0:e.title}),t.jsx(w,{children:e==null?void 0:e.date})]})]})};export{$ as B};
//# sourceMappingURL=BlogCards-DkZYHdY7.js.map
