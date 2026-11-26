import{q as t}from"./index-D7JifTqo.js";import"./sectionStyles-BSDaswZg.js";const n=t.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({theme:e})=>e.navBorder};
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
  background: transparent;
`,r=t.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,o=t.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  max-width: 720px;
`,s=t.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,p=t.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({theme:e})=>e.text_primary};
`,l=t.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,m=t.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px 32px;
`,c=t.div`
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
  }
`,x=t.button`
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
`;export{c as C,l as D,s as E,m as H,r as I,o as S,p as T,x as V,n as a};
//# sourceMappingURL=BlogsStyle-D7rLwxYw.js.map
