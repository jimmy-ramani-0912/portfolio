import{H as t}from"./vendor-BscfTXtr.js";const o=t.div`
  color: ${({theme:i})=>i.text_primary};
  background-color: ${({theme:i})=>i.bg};
  width: 100%;
  overflow-x: hidden;
  height: calc(100dvh - 80px);
  padding: 30px;
  display: grid;
  grid-template-columns: 2.4fr 0.6fr;
  gap: 40px;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`,n=t.div`
  @media (min-width: 960px) {
    min-height: 100vh;
    overflow: auto;
  }
  height: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,r=t.div`
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
`,a=t.div`
  /* display: flex;
  flex-direction: column;
  gap: 28px;
  flex-wrap: wrap; */
`,p=t.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  color: ${({theme:i})=>i.text_primary};
  margin: 8px 6px 16px 16px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`,x=t.div`
  font-size: 18px;
  text-align: center;
  color: ${({theme:i})=>i.button};
  margin-top: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;export{o as Body,a as CardContainer,r as Cards,n as HtmlData,p as Title,x as ViewAll};
