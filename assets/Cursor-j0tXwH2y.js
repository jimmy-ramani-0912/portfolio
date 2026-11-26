import{q as f,W as R,X as j,r as t,a as k,j as l}from"./index-D7JifTqo.js";const q=R`
  0%,
  100% {
    opacity: 0.85;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
`,L=f.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10000;
`,C=f.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 36px;
  height: 36px;
  pointer-events: none;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
`,M=f.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1.5px solid ${({$primary:e})=>e};
  background: ${({$primary:e})=>`linear-gradient(135deg, ${e}12, transparent 55%)`};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow:
    0 0 0 1px ${({$primary:e})=>`${e}22`},
    0 4px 24px ${({$primary:e})=>`${e}28`};
  animation: ${q} 2.4s ease-in-out infinite;
`,A=f.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform;
  background: ${({$primary:e})=>e};
  box-shadow:
    0 0 12px ${({$primary:e})=>`${e}66`},
    0 0 2px ${({$primary:e})=>`${e}99`};
`,p=(e,r,x)=>e+(r-e)*x,F=()=>{const e=j(),[r,x]=t.useState(()=>typeof window<"u"&&window.matchMedia("(pointer: fine)").matches),d=t.useRef({x:0,y:0}),n=t.useRef({x:0,y:0}),s=t.useRef({x:0,y:0}),m=t.useRef(0),y=t.useRef(null),h=t.useRef(null),v=t.useRef(!1);return t.useEffect(()=>{const c=window.matchMedia("(pointer: fine)"),a=()=>x(c.matches);return c.addEventListener("change",a),()=>c.removeEventListener("change",a)},[]),t.useEffect(()=>{if(r)return document.body.classList.add("use-custom-cursor"),()=>{document.body.classList.remove("use-custom-cursor")}},[r]),t.useEffect(()=>{if(!r)return;v.current=!1;const c=()=>{const u=d.current.x,o=d.current.y;s.current.x=p(s.current.x,u,.32),s.current.y=p(s.current.y,o,.32),n.current.x=p(n.current.x,u,.52),n.current.y=p(n.current.y,o,.52);const i=s.current.x,$=s.current.y,w=n.current.x,b=n.current.y,g=`translate3d(${i}px, ${$}px, 0) translate(-50%, -50%)`,E=`translate3d(${w}px, ${b}px, 0) translate(-50%, -50%)`;y.current&&(y.current.style.transform=g),h.current&&(h.current.style.transform=E),m.current=requestAnimationFrame(c)},a=u=>{const o=u.clientX,i=u.clientY;v.current?d.current={x:o,y:i}:(v.current=!0,d.current={x:o,y:i},s.current={x:o,y:i},n.current={x:o,y:i})};return window.addEventListener("mousemove",a,{passive:!0}),m.current=requestAnimationFrame(c),()=>{window.removeEventListener("mousemove",a),cancelAnimationFrame(m.current)}},[r]),r?k.createPortal(l.jsxs(L,{"data-custom-cursor":"",children:[l.jsx(C,{ref:y,$primary:e.primary,style:{transform:"translate3d(0px, 0px, 0) translate(-50%, -50%)"},children:l.jsx(M,{$primary:e.primary})}),l.jsx(A,{ref:h,$primary:e.primary,style:{transform:"translate3d(0px, 0px, 0) translate(-50%, -50%)"}})]}),document.body):null};export{F as default};
//# sourceMappingURL=Cursor-j0tXwH2y.js.map
