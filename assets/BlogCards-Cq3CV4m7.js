import{u as c,h as p,Z as x,j as t,q as i,g as l}from"./index-D7JifTqo.js";import{g as f}from"./mixins-vhbqddEv.js";const m=i.div`
  width: 100%;
  max-width: none;
  min-height: 340px;
  ${f}
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`,h=i.img`
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
  text-align: left;
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
  text-align: left;
  color: ${({theme:e})=>e.text_secondary};
`,k=({blog:e,setOpenModal:a})=>{const n=c(),o=p(),s=()=>{e!=null&&e.pdfUrl?a({state:!0,blog:e}):n(l(e),{state:{blog:e}})},d=e!=null&&e.title?`${x(e.title)} cover image`:"Blog cover image";return t.jsxs(m,{...o,tabIndex:0,role:"button",onClick:s,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),s())},children:[t.jsx(h,{src:e==null?void 0:e.image,alt:d,loading:"lazy",decoding:"async"}),t.jsxs(u,{children:[t.jsx(v,{children:e==null?void 0:e.title}),t.jsx(w,{children:e==null?void 0:e.date})]})]})};export{k as B};
//# sourceMappingURL=BlogCards-Cq3CV4m7.js.map
