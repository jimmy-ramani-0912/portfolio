import{H as e,v as s,r as m,w as u,x as h,j as r,M as f,C as w,y as a,u as g}from"./vendor-BscfTXtr.js";const y=e.div`
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
`,v=e.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({theme:t})=>t.card};
  color: ${({theme:t})=>t.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`,$=e.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_primary};
  margin: 8px 6px 0px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,j=e.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`,k=e.section`
  height: calc(100dvh - 80px);
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 600px) {
    height: 450px;
  }
`,b=e.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_primary};
  margin: 8px 6px;
  white-space: pre-line;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;s.GlobalWorkerOptions.workerSrc=new URL("/portfolio/assets/pdf.worker.min-DKQKFyKK.js",import.meta.url).toString();const I=({openBlogModal:t,setOpenBlogModal:n})=>{const[o,p]=m.useState(null),i=t==null?void 0:t.blog;function d({numPages:l}){p(l)}const x=u.zoomPlugin({enableShortcuts:!0}),c=h.defaultLayoutPlugin(x);return r.jsx(f,{open:!0,onClose:()=>n({state:!1,blog:null}),children:r.jsx(y,{children:r.jsxs(v,{children:[r.jsx(w,{style:{position:"absolute",top:"10px",right:"20px",cursor:"pointer"},onClick:()=>n({state:!1,blog:null})}),r.jsx($,{children:i==null?void 0:i.title}),(i==null?void 0:i.pdfUrl)&&r.jsx(k,{children:r.jsx(a.Worker,{workerUrl:`https://unpkg.com/pdfjs-dist@${s.version}/build/pdf.worker.min.js`,children:r.jsx(a.Viewer,{fileUrl:i==null?void 0:i.pdfUrl,plugins:[c],onLoadSuccess:d})})}),(i==null?void 0:i.photoUrl)&&r.jsx(j,{src:i==null?void 0:i.photoUrl}),r.jsx(b,{children:i==null?void 0:i.description})]})})})},E=e.div`
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
`,L=e.div`
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
`,W=e.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,K=e.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:t})=>t.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;e.div`
  display: flex;
  border: 1.5px solid ${({theme:t})=>t.primary};
  color: ${({theme:t})=>t.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;e.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({active:t,theme:n})=>t&&`
    background: ${n.primary+20};
    `}
  &:hover {
    background: ${({theme:t})=>t.primary+8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;e.div`
  width: 1.5px;
  background: ${({theme:t})=>t.primary};
`;const T=e.div`
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
`,R=e.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:t})=>t.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,z=e.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({theme:t})=>t.white};
  color: ${({theme:t})=>t.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`,C=e.div`
  width: 330px;
  height: 350px;
  background-color: ${({theme:t})=>t.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1);
  }
  &:hover ${z} {
    display: block;
  }
`,P=e.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  background-color: ${({theme:t})=>t.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`,U=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`,_=e.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`,D=e.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  text-align: center;
  color: ${({theme:t})=>t.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,V=({blog:t,setOpenModal:n})=>{const o=g();return r.jsxs(C,{onClick:()=>t!=null&&t.pdfUrl?n({state:!0,blog:t}):o("/portfolio/blogs/"+(t==null?void 0:t.id),{state:{blog:t}}),children:[r.jsx(P,{src:t==null?void 0:t.image}),r.jsxs(U,{children:[r.jsx(_,{children:t==null?void 0:t.title}),r.jsx(D,{children:t==null?void 0:t.date})]})]})};export{V as B,E as C,K as D,I,W as T,R as V,L as W,T as a};
