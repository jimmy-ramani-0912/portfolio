import{q as i,u as m,l as f,m as u,r,n as h,o as w,s as b,j as e,k as j,B as v}from"./index-56x_-Zhs.js";import B from"./index--AWMa-Oh.js";import"./CloseRounded-Djh1s-Sd.js";const x=i.div`
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
`,y=i.div`
  @media (min-width: 960px) {
    overflow: auto;
  }
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,M=i.div`
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
`,k=i.div`
  /* display: flex;
  flex-direction: column;
  gap: 28px;
  flex-wrap: wrap; */
`,p=i.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({theme:t})=>t.text_primary};
  margin: 8px 6px 16px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,g=i.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:t})=>t.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;function $(){var c;const t=m(),l=f(),{slug:s}=u(),a=r.useMemo(()=>{var o;return(o=l.state)!=null&&o.blog?l.state.blog:h(s)},[s,(c=l.state)==null?void 0:c.blog]);r.useEffect(()=>{if(!a||!w(s))return;const o=b(a);o!==`/portfolio/blogs/${s}`&&t(o,{replace:!0,state:l.state})},[a,s,t,l.state]);const[n,d]=r.useState({state:!1,blog:null});return a?e.jsxs(x,{children:[e.jsx("article",{children:e.jsx(y,{dangerouslySetInnerHTML:{__html:a.HTML}})}),e.jsxs(k,{children:[e.jsx(p,{children:"Latest Blogs"}),e.jsx(M,{children:j.filter(o=>o.id!==a.id).slice(0,5).map(o=>e.jsx(v,{blog:o,openModal:n,setOpenModal:d},o.id))}),e.jsx(g,{onClick:()=>{t("/portfolio/blogs")},children:"View All"})]}),n.state&&e.jsx(B,{openBlogModal:n,setOpenBlogModal:d})]}):e.jsxs(x,{children:[e.jsx(p,{children:"Blog not found"}),e.jsx(g,{onClick:()=>{t("/portfolio/blogs")},children:"Back to Blogs"})]})}export{x as Body,k as CardContainer,M as Cards,y as HtmlData,p as Title,g as ViewAll,$ as default};
//# sourceMappingURL=BlogDetail-BM6LdEv2.js.map
