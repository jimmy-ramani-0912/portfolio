import{q as a,u as m,a as f,c as u,r as n,f as h,i as w,g as b,j as e,b as j}from"./index-DxVyh5Dr.js";import{B as v}from"./BlogCards-zcp33Crd.js";import B from"./index-D76YmG5d.js";import"./mixins-kDu7YNK3.js";import"./Modal-CvjjSgB7.js";const p=a.div`
  color: ${({theme:t})=>t.text_primary};
  background-color: ${({theme:t})=>t.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
  padding: 30px;
  display: grid;
  grid-template-columns: 2.4fr 0.6fr;
  gap: 40px;
  @media (max-width: 960px) {
    max-height: 100dvh;
    grid-template-columns: 1fr;
  }
`,y=a.div`
  @media (min-width: 960px) {
    overflow: auto;
  }
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,M=a.div`
  display: flex;
  flex-direction: column;
  max-width: 100dvw;
  gap: 28px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: row;
  }
`,C=a.div`
  /* display: flex;
  flex-direction: column;
  gap: 28px;
  flex-wrap: wrap; */
`,x=a.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({theme:t})=>t.text_primary};
  margin: 8px 6px 16px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,g=a.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:t})=>t.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;function _(){var c;const t=m(),l=f(),{slug:r}=u(),i=n.useMemo(()=>{var o;return(o=l.state)!=null&&o.blog?l.state.blog:h(r)},[r,(c=l.state)==null?void 0:c.blog]);n.useEffect(()=>{if(!i||!w(r))return;const o=b(i);o!==`/portfolio/blogs/${r}`&&t(o,{replace:!0,state:l.state})},[i,r,t,l.state]);const[s,d]=n.useState({state:!1,blog:null});return i?e.jsxs(p,{children:[e.jsx("article",{children:e.jsx(y,{dangerouslySetInnerHTML:{__html:i.HTML}})}),e.jsxs(C,{children:[e.jsx(x,{children:"Latest Blogs"}),e.jsx(M,{children:j.filter(o=>o.id!==i.id).slice(0,5).map(o=>e.jsx(v,{blog:o,openModal:s,setOpenModal:d},o.id))}),e.jsx(g,{onClick:()=>{t("/portfolio/blogs")},children:"View All"})]}),s.state&&e.jsx(B,{openBlogModal:s,setOpenBlogModal:d})]}):e.jsxs(p,{children:[e.jsx(x,{children:"Blog not found"}),e.jsx(g,{onClick:()=>{t("/portfolio/blogs")},children:"Back to Blogs"})]})}export{p as Body,C as CardContainer,M as Cards,y as HtmlData,x as Title,g as ViewAll,_ as default};
//# sourceMappingURL=BlogDetail-DPOb_LDa.js.map
