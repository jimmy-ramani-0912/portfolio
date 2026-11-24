import{q as t}from"./index-BoLDuifJ.js";const n=t.section`
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
`,r=t.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,a=t.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,o=t.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({theme:e})=>e.primary};
    box-shadow:
      0 0 0 3px ${({theme:e})=>e.primaryGlowSoft},
      0 0 16px ${({theme:e})=>e.primaryGlow};
  }
`,p=t.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  background: linear-gradient(
    110deg,
    ${({theme:e})=>e.text_primary} 0%,
    ${({theme:e})=>e.text_primary} 36%,
    ${({theme:e})=>e.primary} 76%,
    ${({theme:e})=>e.accent} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`,l=t.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,c=t.div`
  width: 100%;
  max-width: min(1200px, 94vw);
  margin-top: clamp(24px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  justify-items: center;
`,s=t.button`
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
`;export{c as C,l as D,o as E,r as I,a as S,p as T,s as V,n as a};
//# sourceMappingURL=BlogsStyle-DGHyy4Bu.js.map
