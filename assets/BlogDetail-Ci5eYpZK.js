import{H as o,b as s,D as d,r as p,j as e,A as x}from"./index-DFSJHcmm.js";import{B as c,I as m}from"./BlogCards-CYIQ0AsP.js";import"./CloseRounded-DtEWOs3W.js";const g=o.div`
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
`,f=o.div`
  @media (min-width: 960px) {
    overflow: auto;
  }
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,h=o.div`
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
`,w=o.div`
  /* display: flex;
  flex-direction: column;
  gap: 28px;
  flex-wrap: wrap; */
`,u=o.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({theme:t})=>t.text_primary};
  margin: 8px 6px 16px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,v=o.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:t})=>t.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;function M(){var r;const t=s(),n=(r=d().state)==null?void 0:r.blog,[a,l]=p.useState({state:!1,blog:null});return e.jsxs(g,{children:[e.jsx(f,{dangerouslySetInnerHTML:{__html:n.HTML}}),e.jsxs(w,{children:[e.jsx(u,{children:"Latest Blogs"}),e.jsx(h,{children:x.filter(i=>i.id!==n.id).slice(0,5).map(i=>e.jsx(c,{blog:i,openModal:a,setOpenModal:l},i.id))}),e.jsx(v,{onClick:()=>{t("/portfolio/blogs")},children:"View All"})]}),a.state&&e.jsx(m,{openBlogModal:a,setOpenBlogModal:l})]})}export{g as Body,w as CardContainer,h as Cards,f as HtmlData,u as Title,v as ViewAll,M as default};
