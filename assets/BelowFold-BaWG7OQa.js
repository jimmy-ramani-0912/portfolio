import{E as tt,F as nt,T as ot,t as E,v as S,r as d,w as Y,_ as k,o as p,j as n,x as P,y as R,z as T,G as Ce,H as rt,I as L,m as Ae,C as de,A as se,J as Be,K as it,L as at,q as i,M as K,N as q,h as X,u as He,p as ke,R as st,O as lt,P as J,Q,S as A,U as ct,V as dt,X as me,Y as Te,Z as _e,$ as Ee,b as pt}from"./index-PjGdYWfn.js";import{d as mt,a as We,T as xt,u as Ne,r as ut,b as Se,e as Re,c as ht,g as Z,f as xe}from"./mixins-CMlaYrJz.js";import{d as gt,I as ft,S as vt,E as yt,T as bt,D as wt,a as jt,b as $t,c as Ct,C as kt,P as Tt,V as _t}from"./ProjectCards-D4l5qbs5.js";import{a as Et,I as St,S as Rt,E as Mt,T as zt,D as Pt,C as Ot,V as Dt}from"./BlogsStyle-BerxQv8v.js";import{B as Lt}from"./BlogCards-DkZYHdY7.js";function It(e){const{theme:t,name:o,props:r}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?r:tt(t.components[o].defaultProps,r)}function At({props:e,name:t,defaultTheme:o,themeId:r}){let l=mt(o);return l=l[r]||l,It({theme:l,name:t,props:e})}function B({props:e,name:t}){return At({props:e,name:t,defaultTheme:nt,themeId:ot})}const Me=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Bt(e){return E("MuiPaper",e)}S("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Ht=["className","component","elevation","square","variant"],Wt=e=>{const{square:t,elevation:o,variant:r,classes:l}=e,s={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${o}`]};return R(s,Bt,l)},Nt=T("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ce("#fff",Me(t.elevation))}, ${Ce("#fff",Me(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),Ft=d.forwardRef(function(t,o){const r=Y({props:t,name:"MuiPaper"}),{className:l,component:s="div",elevation:a=1,square:c=!1,variant:m="elevation"}=r,x=k(r,Ht),h=p({},r,{component:s,elevation:a,square:c,variant:m}),g=Wt(h);return n.jsx(Nt,p({as:s,ownerState:h,className:P(g.root,l),ref:o},x))});function Ut(e){return E("MuiTypography",e)}S("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const qt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Gt=e=>{const{align:t,gutterBottom:o,noWrap:r,paragraph:l,variant:s,classes:a}=e,c={root:["root",s,e.align!=="inherit"&&`align${L(t)}`,o&&"gutterBottom",r&&"noWrap",l&&"paragraph"]};return R(c,Ut,a)},Vt=T("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${L(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>p({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),ze={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Yt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Kt=e=>Yt[e]||e,Fe=d.forwardRef(function(t,o){const r=Y({props:t,name:"MuiTypography"}),l=Kt(r.color),s=rt(p({},r,{color:l})),{align:a="inherit",className:c,component:m,gutterBottom:x=!1,noWrap:h=!1,paragraph:g=!1,variant:b="body1",variantMapping:C=ze}=s,v=k(s,qt),f=p({},s,{align:a,color:l,className:c,component:m,gutterBottom:x,noWrap:h,paragraph:g,variant:b,variantMapping:C}),$=m||(g?"p":C[b]||ze[b])||"span",u=Gt(f);return n.jsx(Vt,p({as:$,ref:o,ownerState:f,className:P(u.root,c)},v))});function Pe(e){return e.substring(2).toLowerCase()}function Xt(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Jt(e){const{children:t,disableReactTree:o=!1,mouseEvent:r="onClick",onClickAway:l,touchEvent:s="onTouchEnd"}=e,a=d.useRef(!1),c=d.useRef(null),m=d.useRef(!1),x=d.useRef(!1);d.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const h=Ae(We(t),c),g=de(v=>{const f=x.current;x.current=!1;const $=se(c.current);if(!m.current||!c.current||"clientX"in v&&Xt(v,$))return;if(a.current){a.current=!1;return}let u;v.composedPath?u=v.composedPath().indexOf(c.current)>-1:u=!$.documentElement.contains(v.target)||c.current.contains(v.target),!u&&(o||!f)&&l(v)}),b=v=>f=>{x.current=!0;const $=t.props[v];$&&$(f)},C={ref:h};return s!==!1&&(C[s]=b(s)),d.useEffect(()=>{if(s!==!1){const v=Pe(s),f=se(c.current),$=()=>{a.current=!0};return f.addEventListener(v,g),f.addEventListener("touchmove",$),()=>{f.removeEventListener(v,g),f.removeEventListener("touchmove",$)}}},[g,s]),r!==!1&&(C[r]=b(r)),d.useEffect(()=>{if(r!==!1){const v=Pe(r),f=se(c.current);return f.addEventListener(v,g),()=>{f.removeEventListener(v,g)}}},[g,r]),n.jsx(d.Fragment,{children:d.cloneElement(t,C)})}const Qt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function pe(e){return`scale(${e}, ${e**2})`}const Zt={entering:{opacity:1,transform:pe(1)},entered:{opacity:1,transform:"none"}},le=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ue=d.forwardRef(function(t,o){const{addEndListener:r,appear:l=!0,children:s,easing:a,in:c,onEnter:m,onEntered:x,onEntering:h,onExit:g,onExited:b,onExiting:C,style:v,timeout:f="auto",TransitionComponent:$=xt}=t,u=k(t,Qt),y=Be(),j=d.useRef(),O=Ne(),H=d.useRef(null),ee=Ae(H,We(s),o),M=w=>_=>{if(w){const z=H.current;_===void 0?w(z):w(z,_)}},te=M(h),ne=M((w,_)=>{ut(w);const{duration:z,delay:V,easing:D}=Se({style:v,timeout:f,easing:a},{mode:"enter"});let W;f==="auto"?(W=O.transitions.getAutoHeightDuration(w.clientHeight),j.current=W):W=z,w.style.transition=[O.transitions.create("opacity",{duration:W,delay:V}),O.transitions.create("transform",{duration:le?W:W*.666,delay:V,easing:D})].join(","),m&&m(w,_)}),oe=M(x),re=M(C),G=M(w=>{const{duration:_,delay:z,easing:V}=Se({style:v,timeout:f,easing:a},{mode:"exit"});let D;f==="auto"?(D=O.transitions.getAutoHeightDuration(w.clientHeight),j.current=D):D=_,w.style.transition=[O.transitions.create("opacity",{duration:D,delay:z}),O.transitions.create("transform",{duration:le?D:D*.666,delay:le?z:z||D*.333,easing:V})].join(","),w.style.opacity=0,w.style.transform=pe(.75),g&&g(w)}),ie=M(b),ae=w=>{f==="auto"&&y.start(j.current||0,w),r&&r(H.current,w)};return n.jsx($,p({appear:l,in:c,nodeRef:H,onEnter:ne,onEntered:oe,onEntering:te,onExit:G,onExited:ie,onExiting:re,addEndListener:ae,timeout:f==="auto"?null:f},u,{children:(w,_)=>d.cloneElement(s,p({style:p({opacity:0,transform:pe(.75),visibility:w==="exited"&&!c?"hidden":void 0},Zt[w],v,s.props.style),ref:ee},_))}))});Ue.muiSupportAuto=!0;function en(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:r,open:l,resumeHideDuration:s}=e,a=Be();d.useEffect(()=>{if(!l)return;function u(y){y.defaultPrevented||(y.key==="Escape"||y.key==="Esc")&&(r==null||r(y,"escapeKeyDown"))}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[l,r]);const c=de((u,y)=>{r==null||r(u,y)}),m=de(u=>{!r||u==null||a.start(u,()=>{c(null,"timeout")})});d.useEffect(()=>(l&&m(t),a.clear),[l,t,m,a]);const x=u=>{r==null||r(u,"clickaway")},h=a.clear,g=d.useCallback(()=>{t!=null&&m(s??t*.5)},[t,s,m]),b=u=>y=>{const j=u.onBlur;j==null||j(y),g()},C=u=>y=>{const j=u.onFocus;j==null||j(y),h()},v=u=>y=>{const j=u.onMouseEnter;j==null||j(y),h()},f=u=>y=>{const j=u.onMouseLeave;j==null||j(y),g()};return d.useEffect(()=>{if(!o&&l)return window.addEventListener("focus",g),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",h)}},[o,l,g,h]),{getRootProps:(u={})=>{const y=p({},Re(e),Re(u));return p({role:"presentation"},u,y,{onBlur:b(y),onFocus:C(y),onMouseEnter:v(y),onMouseLeave:f(y)})},onClickAway:x}}function tn(e){return E("MuiSnackbarContent",e)}S("MuiSnackbarContent",["root","message","action"]);const nn=["action","className","message","role"],on=e=>{const{classes:t}=e;return R({root:["root"],action:["action"],message:["message"]},tn,t)},rn=T(Ft,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,o=it(e.palette.background.default,t);return p({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),an=T("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),sn=T("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ln=d.forwardRef(function(t,o){const r=Y({props:t,name:"MuiSnackbarContent"}),{action:l,className:s,message:a,role:c="alert"}=r,m=k(r,nn),x=r,h=on(x);return n.jsxs(rn,p({role:c,square:!0,elevation:6,className:P(h.root,s),ownerState:x,ref:o},m,{children:[n.jsx(an,{className:h.message,ownerState:x,children:a}),l?n.jsx(sn,{className:h.action,ownerState:x,children:l}):null]}))});function cn(e){return E("MuiSnackbar",e)}S("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const dn=["onEnter","onExited"],pn=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],mn=e=>{const{classes:t,anchorOrigin:o}=e,r={root:["root",`anchorOrigin${L(o.vertical)}${L(o.horizontal)}`]};return R(r,cn,t)},Oe=T("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return p({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:p({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&o,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),De=d.forwardRef(function(t,o){const r=Y({props:t,name:"MuiSnackbar"}),l=Ne(),s={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:c,horizontal:m}={vertical:"bottom",horizontal:"left"},autoHideDuration:x=null,children:h,className:g,ClickAwayListenerProps:b,ContentProps:C,disableWindowBlurListener:v=!1,message:f,open:$,TransitionComponent:u=Ue,transitionDuration:y=s,TransitionProps:{onEnter:j,onExited:O}={}}=r,H=k(r.TransitionProps,dn),ee=k(r,pn),M=p({},r,{anchorOrigin:{vertical:c,horizontal:m},autoHideDuration:x,disableWindowBlurListener:v,TransitionComponent:u,transitionDuration:y}),te=mn(M),{getRootProps:ne,onClickAway:oe}=en(p({},M)),[re,G]=d.useState(!0),ie=ht({elementType:Oe,getSlotProps:ne,externalForwardedProps:ee,ownerState:M,additionalProps:{ref:o},className:[te.root,g]}),ae=_=>{G(!0),O&&O(_)},w=(_,z)=>{G(!1),j&&j(_,z)};return!$&&re?null:n.jsx(Jt,p({onClickAway:oe},b,{children:n.jsx(Oe,p({},ie,{children:n.jsx(u,p({appear:!0,in:$,timeout:y,direction:c==="top"?"down":"up",onEnter:w,onExited:ae},H,{children:h||n.jsx(ln,p({message:f,action:a},C))}))}))}))}),xn=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,un=i.div`
  width: 100%;
  max-width: min(1240px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,hn=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,gn=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${K}
`,fn=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,vn=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,yn=i.div`
  position: relative;
  width: 100%;
  margin-top: clamp(36px, 5vw, 52px);
`,bn=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({theme:e})=>e.primary};
  box-shadow:
    0 0 0 5px ${({theme:e})=>e.primaryGlowSoft},
    0 0 36px ${({theme:e})=>e.primaryGlow},
    0 0 72px ${({theme:e})=>e.primaryGlowSubtle};
  pointer-events: none;
  z-index: 3;
  @media (max-width: 720px) {
    display: none;
  }
`,wn=i.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
  @media (min-width: 721px) {
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    gap: 20px;
  }
`,jn=i.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  ${Z}
  border-radius: 20px;
  padding: 0;
  border-color: ${({theme:e})=>e.primary}40;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 20px 20px 0 0;
    background: linear-gradient(
      90deg,
      ${({theme:e})=>e.primary} 0%,
      ${({theme:e})=>e.accent} 48%,
      ${({theme:e})=>e.primary} 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`,$n=i.div`
  position: relative;
  z-index: 1;
  height: 100%;
  min-height: 0;
  padding: 28px 26px 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 720px) {
    padding: 24px 18px 22px;
    gap: 16px;
  }
  @media (max-width: 500px) {
    padding: 22px 14px 18px;
  }
`,Cn=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,kn=i.h3`
  margin: 0;
  width: 100%;
  font-size: clamp(1.2rem, 2.1vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
  text-align: center;
`,Tn=i.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: center;
  justify-content: center;
`,_n=i.li`
  font-size: clamp(0.9rem, 1.35vw, 1rem);
  font-weight: 500;
  ${xe}
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 11px 15px 11px 11px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 9px 12px 9px 9px;
  }
`,En=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.navBorder};
  flex-shrink: 0;
`,Sn=i.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`,Rn=({skill:e})=>{const t=X();return n.jsx(jn,{...t,children:n.jsxs($n,{children:[n.jsx(Cn,{children:n.jsx(kn,{children:e.title})}),n.jsx(Tn,{children:e.skills.map(o=>n.jsxs(_n,{children:[n.jsx(En,{children:n.jsx(Sn,{src:o.image,alt:`${o.name} technology icon`,loading:"lazy",decoding:"async"})}),o.name]},o.name))})]})})},Mn=()=>n.jsx(xn,{id:"skills","aria-labelledby":"skills-heading",children:n.jsxs(un,{children:[n.jsxs(hn,{children:[n.jsx(gn,{children:"Tech stack"}),n.jsx(fn,{id:"skills-heading",children:"Skills"}),n.jsx(vn,{children:"Here are some of my skills on which I have been working on for the past 4 years."})]}),n.jsxs(yn,{children:[n.jsx(bn,{"aria-hidden":!0}),n.jsx(wn,{children:at.map(e=>n.jsx(Rn,{skill:e},e.title))})]})]})}),zn=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],Pn=({openModal:e,setOpenModal:t})=>{const[o,r]=d.useState("all"),l=He(),s=d.useMemo(()=>(o==="all"?ke:ke.filter(c=>c.category===o)).slice(0,5),[o]);return n.jsx(gt,{id:"projects","aria-labelledby":"projects-heading",children:n.jsxs(ft,{children:[n.jsxs(vt,{children:[n.jsx(yt,{children:"Portfolio"}),n.jsx(bt,{id:"projects-heading",children:"Projects"}),n.jsx(wt,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),n.jsx(jt,{role:"tablist","aria-label":"Filter projects by type",children:zn.map((a,c)=>n.jsxs(st.Fragment,{children:[c>0&&n.jsx($t,{"aria-hidden":!0}),n.jsx(Ct,{type:"button",role:"tab","aria-selected":o===a.value,$active:o===a.value,onClick:()=>r(a.value),children:a.label})]},a.value))}),n.jsx(kt,{children:s.map(a=>n.jsx(Tt,{project:a,openModal:e,setOpenModal:t},a.id))}),n.jsx(_t,{type:"button",onClick:()=>l("portfolio/projects"),children:"View all projects"})]})})},F={_origin:"https://api.emailjs.com"},On=(e,t="https://api.emailjs.com")=>{F._userID=e,F._origin=t},qe=(e,t,o)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Le{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Ge=(e,t,o={})=>new Promise((r,l)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:a})=>{const c=new Le(a);c.status===200||c.text==="OK"?r(c):l(c)}),s.addEventListener("error",({target:a})=>{l(new Le(a))}),s.open("POST",F._origin+e,!0),Object.keys(o).forEach(a=>{s.setRequestHeader(a,o[a])}),s.send(t)}),Dn=(e,t,o,r)=>{const l=r||F._userID;return qe(l,e,t),Ge("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:l,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})},Ln=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},In=(e,t,o,r)=>{const l=r||F._userID,s=Ln(o);qe(l,e,t);const a=new FormData(s);return a.append("lib_version","3.12.1"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",l),Ge("/api/v1.0/email/send-form",a)},An={init:On,send:Dn,sendForm:In},Bn=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,Hn=i.div`
  width: 100%;
  max-width: min(640px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Wn=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,Nn=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${K}
`,Fn=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,Un=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,qn=i.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  ${Z}
  padding: clamp(24px, 4vw, 32px);
  border-radius: 18px;
  margin-top: clamp(28px, 4vw, 40px);
  gap: 14px;
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
    pointer-events: none;
    z-index: 2;
  }
`,Gn=i.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
`,Ve=lt`
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.navBorder};
  outline: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  &:focus {
    border-color: ${({theme:e})=>e.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.primary}22;
  }
`,ce=i.input`
  ${Ve}
`,Vn=i.textarea`
  ${Ve}
  min-height: 120px;
  resize: vertical;
`,Yn=i.button`
  width: 100%;
  margin-top: 4px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.primaryFill};
  background: ${({theme:e})=>e.primaryFill};
  color: ${({theme:e})=>e.onPrimary};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.9;
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 2px;
  }
`,Kn=()=>{const[e,t]=d.useState(!1),[o,r]=d.useState(!1),l=d.useRef(),s=X(),a=c=>{c.preventDefault(),An.sendForm("service_h1go69o","template_ncrlu8e",l.current,"cIHPxbYwNsgVrUuEz").then(()=>{t(!0),l.current.reset()}).catch(()=>{r(!0)})};return n.jsx(Bn,{id:"contact","aria-labelledby":"contact-heading",children:n.jsxs(Hn,{children:[n.jsxs(Wn,{children:[n.jsx(Nn,{children:"Let's talk"}),n.jsx(Fn,{id:"contact-heading",children:"Contact"}),n.jsx(Un,{children:"Reach out for collaborations, roles, or technical questions. I read every message and respond as soon as I can."})]}),n.jsxs(qn,{ref:l,onSubmit:a,...s,noValidate:!0,children:[n.jsx(Gn,{children:"Email me"}),n.jsx(ce,{type:"email",placeholder:"Your email",name:"from_email",autoComplete:"email",required:!0,"aria-label":"Your email"}),n.jsx(ce,{type:"text",placeholder:"Your name",name:"from_name",autoComplete:"name",required:!0,"aria-label":"Your name"}),n.jsx(ce,{type:"text",placeholder:"Subject",name:"subject",autoComplete:"off",required:!0,"aria-label":"Subject"}),n.jsx(Vn,{placeholder:"Message",rows:4,name:"message",required:!0,"aria-label":"Message"}),n.jsx(Yn,{type:"submit",children:"Send"})]}),n.jsx(De,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully.",anchorOrigin:{vertical:"bottom",horizontal:"center"}}),n.jsx(De,{open:o,autoHideDuration:6e3,onClose:()=>r(!1),message:"Could not send email. Please try again later.",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})})};var ue={},Xn=Q;Object.defineProperty(ue,"__esModule",{value:!0});var Ye=ue.default=void 0;Zn(d);var Jn=Xn(J()),Qn=n;function Ke(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Ke=function(r){return r?o:t})(e)}function Zn(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Ke(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=l?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,o&&o.set(e,r),r}Ye=ue.default=(0,Jn.default)((0,Qn.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");var he={},eo=Q;Object.defineProperty(he,"__esModule",{value:!0});var Xe=he.default=void 0;oo(d);var to=eo(J()),no=n;function Je(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Je=function(r){return r?o:t})(e)}function oo(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Je(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=l?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,o&&o.set(e,r),r}Xe=he.default=(0,to.default)((0,no.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");var ge={},ro=Q;Object.defineProperty(ge,"__esModule",{value:!0});var Qe=ge.default=void 0,io=ro(J()),ao=n;Qe=ge.default=(0,io.default)((0,ao.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Article");var fe={},so=Q;Object.defineProperty(fe,"__esModule",{value:!0});var Ze=fe.default=void 0,lo=so(J()),co=n;Ze=fe.default=(0,lo.default)((0,co.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code");const po=i.footer`
  width: 100%;
  padding: clamp(44px, 7vw, 72px) clamp(16px, 4vw, 32px) clamp(28px, 5vw, 44px);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`,mo=i.div`
  width: 100%;
  max-width: min(1040px, 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0;
  color: ${({theme:e})=>e.text_primary};
`,xo=i.h1`
  margin: 0;
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,uo=i.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`,N=i.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text_primary};
  text-decoration: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${({theme:e})=>e.navBorder};
  background: ${({theme:e})=>e.card_light};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.primary}66;
    color: ${({theme:e})=>e.primary};
  }
  svg {
    font-size: 1.2rem;
  }
`,ho=i.p`
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.soft2};
  text-align: center;
`;function go(){const e=new Date().getFullYear();return n.jsx(po,{children:n.jsxs(mo,{children:[n.jsx(xo,{children:A.name}),n.jsxs(uo,{children:[n.jsx(N,{href:A.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:n.jsx(ct,{})}),n.jsx(N,{href:A.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:n.jsx(Ye,{})}),n.jsx(N,{href:A.medium,target:"_blank",rel:"noopener noreferrer","aria-label":"Medium",children:n.jsx(Qe,{})}),n.jsx(N,{href:A.codepen,target:"_blank",rel:"noopener noreferrer","aria-label":"CodePen",children:n.jsx(Ze,{})}),n.jsx(N,{href:A.insta,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:n.jsx(Xe,{})})]}),n.jsxs(ho,{children:["© ",e," ",A.name,". All rights reserved."]})]})})}const U=d.createContext({});function fo(e){return E("MuiTimeline",e)}S("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function I(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${L(e)}`}const vo=["position","className"],yo=e=>{const{position:t,classes:o}=e,r={root:["root",t&&I(t)]};return R(r,fo,o)},bo=T("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[I(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),ve=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimeline"}),{position:l="right",className:s}=r,a=k(r,vo),c=p({},r,{position:l}),m=yo(c),x=d.useMemo(()=>({position:l}),[l]);return n.jsx(U.Provider,{value:x,children:n.jsx(bo,p({className:P(m.root,s),ownerState:c,ref:o},a))})});function wo(e){return E("MuiTimelineContent",e)}const jo=S("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),$o=["className"],Co=e=>{const{position:t,classes:o}=e,r={root:["root",I(t)]};return R(r,wo,o)},ko=T(Fe,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),ye=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineContent"}),{className:l}=r,s=k(r,$o),{position:a}=d.useContext(U),c=p({},r,{position:a||"right"}),m=Co(c);return n.jsx(ko,p({component:"div",className:P(m.root,l),ownerState:c,ref:o},s))});function To(e){return E("MuiTimelineOppositeContent",e)}const _o=S("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Eo=["className"],So=e=>{const{position:t,classes:o}=e,r={root:["root",I(t)]};return R(r,To,o)},Ro=T(Fe,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),et=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineOppositeContent"}),{className:l}=r,s=k(r,Eo),{position:a}=d.useContext(U),c=p({},r,{position:a||"left"}),m=So(c);return n.jsx(Ro,p({component:"div",className:P(m.root,l),ownerState:c,ref:o},s))});et.muiName="TimelineOppositeContent";function Mo(e){return E("MuiTimelineItem",e)}S("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const zo=["position","className"],Po=e=>{const{position:t,classes:o,hasOppositeContent:r}=e,l={root:["root",I(t),!r&&"missingOppositeContent"]};return R(l,Mo,o)},Oo=T("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${jo.root}`]:{textAlign:"right"},[`& .${_o.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),be=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineItem"}),{position:l,className:s}=r,a=k(r,zo),{position:c}=d.useContext(U);let m=!1;d.Children.forEach(r.children,b=>{dt(b,["TimelineOppositeContent"])&&(m=!0)});const x=p({},r,{position:l||c||"right",hasOppositeContent:m}),h=Po(x),g=d.useMemo(()=>({position:x.position}),[x.position]);return n.jsx(U.Provider,{value:g,children:n.jsx(Oo,p({className:P(h.root,s),ownerState:x,ref:o},a))})});function Do(e){return E("MuiTimelineSeparator",e)}S("MuiTimelineSeparator",["root"]);const Lo=["className"],Io=e=>{const{classes:t}=e;return R({root:["root"]},Do,t)},Ao=T("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),we=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineSeparator"}),{className:l}=r,s=k(r,Lo),a=r,c=Io(a);return n.jsx(Ao,p({className:P(c.root,l),ownerState:a,ref:o},s))});function Bo(e){return E("MuiTimelineConnector",e)}S("MuiTimelineConnector",["root"]);const Ho=["className"],Wo=e=>{const{classes:t}=e;return R({root:["root"]},Bo,t)},No=T("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),je=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineConnector"}),{className:l}=r,s=k(r,Ho),a=r,c=Wo(a);return n.jsx(No,p({className:P(c.root,l),ownerState:a,ref:o},s))});function Fo(e){return E("MuiTimelineDot",e)}S("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Uo=["className","color","variant"],qo=e=>{const{color:t,variant:o,classes:r}=e,l={root:["root",o,t!=="inherit"&&`${o}${L(t)}`]};return R(l,Fo,r)},Go=T("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.color!=="inherit"&&`${o.variant}${L(o.color)}`],t[o.variant]]}})(({ownerState:e,theme:t})=>p({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&p({borderColor:"transparent"},e.color!=="inherit"&&p({},e.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),e.variant==="outlined"&&p({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&p({},e.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))),$e=d.forwardRef(function(t,o){const r=B({props:t,name:"MuiTimelineDot"}),{className:l,color:s="grey",variant:a="filled"}=r,c=k(r,Uo),m=p({},r,{color:s,variant:a}),x=qo(m);return n.jsx(Go,p({className:P(x.root,l),ownerState:m,ref:o},c))}),Vo=220,Yo=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},Ko=i.article`
  width: 100%;
  max-width: min(680px, calc(100vw - 102px));
  border-radius: 18px;
  ${Z}
  padding: 22px 22px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.35s ease;
  border-color: ${({theme:e})=>e.primary}40;
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
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    padding: 18px 16px 16px;
    gap: 14px;
    max-width: calc(100vw - 86px);
  }
`,Xo=i.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,Jo=i.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,Qo=i.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.navBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`,Zo=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,er=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.primary};
  background: ${({theme:e})=>e.primary}14;
`,tr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,nr=i.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,or=i.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,rr=i.span`
  flex-shrink: 0;
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({theme:e})=>e.primary}18;
  border: 1px solid ${({theme:e})=>e.primary}35;
  white-space: nowrap;
  max-width: 100%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.625rem;
    padding: 3px 8px;
  }
`,ir=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,ar=i.p`
  margin: 0;
  font-size: clamp(0.875rem, 1.35vw, 0.9375rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  white-space: pre-line;
  ${({$clamped:e})=>e?`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `:""}
`,sr=i.button`
  margin-top: 8px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover {
    color: ${({theme:e})=>e.text_primary};
  }
`,lr=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,cr=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`,dr=i.span`
  ${xe}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
`,pr=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,mr=i.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 8px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: ${({theme:e})=>`${e.primary}88`}
    ${({theme:e})=>e.card_light};
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.card_light};
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.primary}70;
    border-radius: 999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.primary};
  }
`,xr=i.a`
  flex: 0 0 auto;
  scroll-snap-align: start;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.navBorder};
  line-height: 0;
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;
  &:hover {
    border-color: ${({theme:e})=>e.primary}66;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 2px;
  }
`,ur=i.img`
  display: block;
  height: 76px;
  width: clamp(120px, 24vw, 160px);
  object-fit: contain;
  background: ${({theme:e})=>e.card_light};
`,hr=({experience:e})=>{var h,g;const t=X(),[o,r]=d.useState(!1),[l,s]=d.useState(!1),a=(e==null?void 0:e.desc)??"",c=d.useMemo(()=>a.length>Vo,[a]),m=c&&!o,x=d.useMemo(()=>Yo(e.company),[e.company]);return d.useEffect(()=>{s(!1)},[e.id,e.img]),n.jsxs(Ko,{...t,children:[n.jsxs(Xo,{children:[n.jsxs(Jo,{children:[n.jsx(Qo,{"aria-hidden":!0,children:!l&&e.img?n.jsx(Zo,{src:e.img,alt:`${e.company} company logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>s(!0)}):n.jsx(er,{children:x})}),n.jsxs(tr,{children:[n.jsx(nr,{children:e.role}),n.jsx(or,{children:e.company})]})]}),n.jsx(rr,{children:e.date})]}),a&&n.jsxs(ir,{children:[n.jsx(ar,{$clamped:m,children:a}),c&&n.jsx(sr,{type:"button",onClick:()=>r(b=>!b),"aria-expanded":o,children:o?"Show less":"Show more"})]}),((h=e==null?void 0:e.skills)==null?void 0:h.length)>0&&n.jsx(lr,{"aria-label":"Skills",children:n.jsx(cr,{children:e.skills.map(b=>n.jsx(dr,{children:b},b))})}),((g=e.doc)==null?void 0:g.length)>0&&n.jsx(pr,{"aria-label":"Selected work",children:n.jsx(mr,{children:e.doc.map((b,C)=>n.jsx(xr,{href:b.link,target:"_blank",rel:"noopener noreferrer",children:n.jsx(ur,{src:b.workImg,alt:`${e.company} project screenshot`,loading:"lazy",decoding:"async"})},b.link||String(C)))})})]})},gr=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,fr=i.div`
  width: 100%;
  max-width: min(900px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,vr=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,yr=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${K}
`,br=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,wr=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,jr=i.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,$r=()=>{const e=me();return n.jsx(gr,{id:"experience","aria-labelledby":"experience-heading",children:n.jsxs(fr,{children:[n.jsxs(vr,{children:[n.jsx(yr,{children:"Career"}),n.jsx(br,{id:"experience-heading",children:"Experience"}),n.jsx(wr,{children:"Roles building production software, from full-stack web dashboards to mobile apps, with shipped work you can open in a new tab."})]}),n.jsx(jr,{children:n.jsx(ve,{position:"right",sx:{width:"100%",maxWidth:"min(760px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:Te.map((t,o)=>n.jsxs(be,{children:[n.jsxs(we,{children:[n.jsx($e,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),o!==Te.length-1&&n.jsx(je,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),n.jsx(ye,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left"},children:n.jsx(hr,{experience:t})})]},t.id))})})]})})},Cr=220,kr=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},Tr=i.article`
  width: 100%;
  max-width: min(680px, calc(100vw - 48px));
  border-radius: 18px;
  ${Z}
  padding: 22px 22px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.35s ease;
  border-color: ${({theme:e})=>e.primary}40;
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
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    padding: 18px 16px 16px;
    gap: 14px;
    max-width: calc(100vw - 40px);
  }
`,_r=i.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,Er=i.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,Sr=i.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.navBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`,Rr=i.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,Mr=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${({theme:e})=>e.primary};
  background: ${({theme:e})=>e.primary}14;
`,zr=i.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,Pr=i.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,Or=i.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,Dr=i.span`
  flex-shrink: 0;
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({theme:e})=>e.primary}18;
  border: 1px solid ${({theme:e})=>e.primary}35;
  white-space: nowrap;
  max-width: 100%;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 0.625rem;
    padding: 3px 8px;
  }
`,Lr=i.span`
  ${xe}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
  width: fit-content;
`,Ir=i.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,Ar=i.p`
  margin: 0;
  font-size: clamp(0.875rem, 1.35vw, 0.9375rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  white-space: pre-line;
  ${({$clamped:e})=>e?`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `:""}
`,Br=i.button`
  margin-top: 8px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({theme:e})=>e.primary};
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover {
    color: ${({theme:e})=>e.text_primary};
  }
`,Hr=({education:e})=>{const t=X(),[o,r]=d.useState(!1),[l,s]=d.useState(!1),a=(e==null?void 0:e.desc)??"",c=d.useMemo(()=>a.length>Cr,[a]),m=c&&!o,x=d.useMemo(()=>kr(e.school),[e.school]);return d.useEffect(()=>{s(!1)},[e.id,e.img]),n.jsxs(Tr,{...t,children:[n.jsxs(_r,{children:[n.jsxs(Er,{children:[n.jsx(Sr,{"aria-hidden":!0,children:!l&&e.img?n.jsx(Rr,{src:e.img,alt:`${e.school} logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>s(!0)}):n.jsx(Mr,{children:x})}),n.jsxs(zr,{children:[n.jsx(Pr,{children:e.school}),n.jsx(Or,{children:e.degree})]})]}),n.jsx(Dr,{children:e.date})]}),e.grade&&n.jsx(Lr,{children:e.grade}),a&&n.jsxs(Ir,{children:[n.jsx(Ar,{$clamped:m,children:a}),c&&n.jsx(Br,{type:"button",onClick:()=>r(h=>!h),"aria-expanded":o,children:o?"Show less":"Show more"})]})]})},Wr=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,Nr=i.div`
  width: 100%;
  max-width: min(900px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Fr=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,Ur=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
  ${K}
`,qr=i.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,Gr=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  margin-inline: auto;
  text-align: center;
`,Vr=i.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Yr=()=>{const e=me();return n.jsx(Wr,{id:"education","aria-labelledby":"education-heading",children:n.jsxs(Nr,{children:[n.jsxs(Fr,{children:[n.jsx(Ur,{children:"Career"}),n.jsx(qr,{id:"education-heading",children:"Education"}),n.jsx(Gr,{children:"Academic milestones and coursework that shaped my foundation in software engineering."})]}),n.jsx(Vr,{children:n.jsx(ve,{position:"left",sx:{width:"100%",maxWidth:"min(760px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:_e.map((t,o)=>n.jsxs(be,{sx:{flexDirection:"row"},children:[n.jsxs(we,{children:[n.jsx($e,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),o!==_e.length-1&&n.jsx(je,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),n.jsx(ye,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left",width:"100%"},children:n.jsx(Hr,{education:t})})]},t.id))})})]})})},Kr=i.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,Xr=i.div`
  width: 100%;
  max-width: min(980px, 94vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,Jr=i.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,Qr=i.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
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
`,Zr=i.h2`
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
`,ei=i.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  margin-inline: auto;
  text-align: center;
`,ti=i.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,ni=i.article`
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${({theme:e})=>e.primary}33;
  background: ${({theme:e})=>e.card_light};
  padding: 12px 14px;
  font-size: 0.9375rem;
  line-height: 1.5;
  color: ${({theme:e})=>e.text_primary};
  transition:
    transform 0.25s ease,
    border-color 0.25s ease;
  &:hover {
    transform: translateY(-2px);
    border-color: ${({theme:e})=>e.primary}66;
  }
`,oi=()=>{const e=me();return n.jsx(Kr,{id:"timeline","aria-labelledby":"timeline-heading",children:n.jsxs(Xr,{children:[n.jsxs(Jr,{children:[n.jsx(Qr,{children:"Journey"}),n.jsx(Zr,{id:"timeline-heading",children:"Timeline"}),n.jsx(ei,{children:"Key milestones from my learning journey and real-world engineering work."})]}),n.jsx(ti,{children:n.jsx(ve,{position:"alternate",sx:{width:"100%",maxWidth:"min(860px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:Ee.map((t,o)=>n.jsxs(be,{children:[n.jsx(et,{sx:{m:"auto 0",color:e.primary,fontSize:"0.9rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",px:{xs:1,sm:2}},children:t.year}),n.jsxs(we,{children:[n.jsx($e,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),o!==Ee.length-1&&n.jsx(je,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),n.jsx(ye,{sx:{py:"12px",px:{xs:1.5,sm:2}},children:n.jsx(ni,{children:t.text})})]},`${t.year}-${t.text}`))})})]})})},ri=({openBlogModal:e,setOpenBlogModal:t})=>{const o=He();return n.jsx(Et,{id:"blogs","aria-labelledby":"blogs-heading",children:n.jsxs(St,{children:[n.jsxs(Rt,{children:[n.jsx(Mt,{children:"Writing"}),n.jsx(zt,{id:"blogs-heading",children:"Blogs"}),n.jsx(Pt,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),n.jsx(Ot,{children:pt.slice(0,5).map(r=>n.jsx(Lt,{blog:r,openModal:e,setOpenModal:t},r.id))}),n.jsx(Dt,{type:"button",onClick:()=>o("portfolio/blogs"),children:"View All Blogs"})]})})},Ie=i.div`
  width: 100%;
  position: relative;
  background: ${({theme:e})=>e.bgLight};
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      70% 45% at 50% 0%,
      ${({theme:e})=>e.accentMesh1},
      transparent 65%
    );
  }
`,di=({openModal:e,setOpenModal:t,openBlogModal:o,setOpenBlogModal:r})=>n.jsxs(n.Fragment,{children:[n.jsxs(Ie,{children:[n.jsx(Mn,{}),n.jsx($r,{})]}),n.jsx(Pn,{openModal:e,setOpenModal:t}),n.jsx(Yr,{}),n.jsx(ri,{openBlogModal:o,setOpenBlogModal:r}),n.jsxs(Ie,{children:[n.jsx(oi,{}),n.jsx(Kn,{})]}),n.jsx(go,{})]});export{di as default};
//# sourceMappingURL=BelowFold-BaWG7OQa.js.map
