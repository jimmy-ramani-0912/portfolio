import{E as et,F as tt,T as nt,t as E,v as R,r as d,w as Y,_ as k,o as p,j as n,x as P,y as S,z as T,G as $e,H as ot,I as L,m as Ie,C as ce,A as se,J as Ae,K as it,L as rt,q as r,h as K,u as Be,p as Ce,R as st,M as at,N as X,O as J,P as A,Q as lt,S as ct,X as pe,U as ke,V as Te,Y as _e,b as dt}from"./index-D7JifTqo.js";import{d as pt,a as He,T as mt,u as We,r as xt,b as Ee,e as Re,c as ut,g as Q,f as me}from"./mixins-vhbqddEv.js";import{s as q}from"./sectionStyles-BSDaswZg.js";import{d as ht,I as gt,H as ft,S as vt,E as yt,T as bt,D as wt,V as jt,a as $t,b as Ct,c as kt,C as Tt,P as _t}from"./ProjectCards-CfiSCS67.js";import{a as Et,I as Rt,H as St,S as Mt,E as zt,T as Pt,D as Ot,V as Dt,C as Lt}from"./BlogsStyle-D7rLwxYw.js";import{B as It}from"./BlogCards-Cq3CV4m7.js";function At(e){const{theme:t,name:o,props:i}=e;return!t||!t.components||!t.components[o]||!t.components[o].defaultProps?i:et(t.components[o].defaultProps,i)}function Bt({props:e,name:t,defaultTheme:o,themeId:i}){let l=pt(o);return l=l[i]||l,At({theme:l,name:t,props:e})}function B({props:e,name:t}){return Bt({props:e,name:t,defaultTheme:tt,themeId:nt})}const Se=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function Ht(e){return E("MuiPaper",e)}R("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Wt=["className","component","elevation","square","variant"],Nt=e=>{const{square:t,elevation:o,variant:i,classes:l}=e,a={root:["root",i,!t&&"rounded",i==="elevation"&&`elevation${o}`]};return S(a,Ht,l)},Ft=T("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!o.square&&t.rounded,o.variant==="elevation"&&t[`elevation${o.elevation}`]]}})(({theme:e,ownerState:t})=>{var o;return p({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&p({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${$e("#fff",Se(t.elevation))}, ${$e("#fff",Se(t.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[t.elevation]}))}),Ut=d.forwardRef(function(t,o){const i=Y({props:t,name:"MuiPaper"}),{className:l,component:a="div",elevation:s=1,square:c=!1,variant:m="elevation"}=i,x=k(i,Wt),h=p({},i,{component:a,elevation:s,square:c,variant:m}),g=Nt(h);return n.jsx(Ft,p({as:a,ownerState:h,className:P(g.root,l),ref:o},x))});function qt(e){return E("MuiTypography",e)}R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Vt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Gt=e=>{const{align:t,gutterBottom:o,noWrap:i,paragraph:l,variant:a,classes:s}=e,c={root:["root",a,e.align!=="inherit"&&`align${L(t)}`,o&&"gutterBottom",i&&"noWrap",l&&"paragraph"]};return S(c,qt,s)},Yt=T("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${L(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>p({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Me={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Kt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Xt=e=>Kt[e]||e,Ne=d.forwardRef(function(t,o){const i=Y({props:t,name:"MuiTypography"}),l=Xt(i.color),a=ot(p({},i,{color:l})),{align:s="inherit",className:c,component:m,gutterBottom:x=!1,noWrap:h=!1,paragraph:g=!1,variant:b="body1",variantMapping:C=Me}=a,v=k(a,Vt),f=p({},a,{align:s,color:l,className:c,component:m,gutterBottom:x,noWrap:h,paragraph:g,variant:b,variantMapping:C}),$=m||(g?"p":C[b]||Me[b])||"span",u=Gt(f);return n.jsx(Yt,p({as:$,ref:o,ownerState:f,className:P(u.root,c)},v))});function ze(e){return e.substring(2).toLowerCase()}function Jt(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Qt(e){const{children:t,disableReactTree:o=!1,mouseEvent:i="onClick",onClickAway:l,touchEvent:a="onTouchEnd"}=e,s=d.useRef(!1),c=d.useRef(null),m=d.useRef(!1),x=d.useRef(!1);d.useEffect(()=>(setTimeout(()=>{m.current=!0},0),()=>{m.current=!1}),[]);const h=Ie(He(t),c),g=ce(v=>{const f=x.current;x.current=!1;const $=se(c.current);if(!m.current||!c.current||"clientX"in v&&Jt(v,$))return;if(s.current){s.current=!1;return}let u;v.composedPath?u=v.composedPath().indexOf(c.current)>-1:u=!$.documentElement.contains(v.target)||c.current.contains(v.target),!u&&(o||!f)&&l(v)}),b=v=>f=>{x.current=!0;const $=t.props[v];$&&$(f)},C={ref:h};return a!==!1&&(C[a]=b(a)),d.useEffect(()=>{if(a!==!1){const v=ze(a),f=se(c.current),$=()=>{s.current=!0};return f.addEventListener(v,g),f.addEventListener("touchmove",$),()=>{f.removeEventListener(v,g),f.removeEventListener("touchmove",$)}}},[g,a]),i!==!1&&(C[i]=b(i)),d.useEffect(()=>{if(i!==!1){const v=ze(i),f=se(c.current);return f.addEventListener(v,g),()=>{f.removeEventListener(v,g)}}},[g,i]),n.jsx(d.Fragment,{children:d.cloneElement(t,C)})}const Zt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function de(e){return`scale(${e}, ${e**2})`}const en={entering:{opacity:1,transform:de(1)},entered:{opacity:1,transform:"none"}},ae=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Fe=d.forwardRef(function(t,o){const{addEndListener:i,appear:l=!0,children:a,easing:s,in:c,onEnter:m,onEntered:x,onEntering:h,onExit:g,onExited:b,onExiting:C,style:v,timeout:f="auto",TransitionComponent:$=mt}=t,u=k(t,Zt),y=Ae(),j=d.useRef(),O=We(),H=d.useRef(null),Z=Ie(H,He(a),o),M=w=>_=>{if(w){const z=H.current;_===void 0?w(z):w(z,_)}},ee=M(h),te=M((w,_)=>{xt(w);const{duration:z,delay:G,easing:D}=Ee({style:v,timeout:f,easing:s},{mode:"enter"});let W;f==="auto"?(W=O.transitions.getAutoHeightDuration(w.clientHeight),j.current=W):W=z,w.style.transition=[O.transitions.create("opacity",{duration:W,delay:G}),O.transitions.create("transform",{duration:ae?W:W*.666,delay:G,easing:D})].join(","),m&&m(w,_)}),ne=M(x),oe=M(C),V=M(w=>{const{duration:_,delay:z,easing:G}=Ee({style:v,timeout:f,easing:s},{mode:"exit"});let D;f==="auto"?(D=O.transitions.getAutoHeightDuration(w.clientHeight),j.current=D):D=_,w.style.transition=[O.transitions.create("opacity",{duration:D,delay:z}),O.transitions.create("transform",{duration:ae?D:D*.666,delay:ae?z:z||D*.333,easing:G})].join(","),w.style.opacity=0,w.style.transform=de(.75),g&&g(w)}),ie=M(b),re=w=>{f==="auto"&&y.start(j.current||0,w),i&&i(H.current,w)};return n.jsx($,p({appear:l,in:c,nodeRef:H,onEnter:te,onEntered:ne,onEntering:ee,onExit:V,onExited:ie,onExiting:oe,addEndListener:re,timeout:f==="auto"?null:f},u,{children:(w,_)=>d.cloneElement(a,p({style:p({opacity:0,transform:de(.75),visibility:w==="exited"&&!c?"hidden":void 0},en[w],v,a.props.style),ref:Z},_))}))});Fe.muiSupportAuto=!0;function tn(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:o=!1,onClose:i,open:l,resumeHideDuration:a}=e,s=Ae();d.useEffect(()=>{if(!l)return;function u(y){y.defaultPrevented||(y.key==="Escape"||y.key==="Esc")&&(i==null||i(y,"escapeKeyDown"))}return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[l,i]);const c=ce((u,y)=>{i==null||i(u,y)}),m=ce(u=>{!i||u==null||s.start(u,()=>{c(null,"timeout")})});d.useEffect(()=>(l&&m(t),s.clear),[l,t,m,s]);const x=u=>{i==null||i(u,"clickaway")},h=s.clear,g=d.useCallback(()=>{t!=null&&m(a??t*.5)},[t,a,m]),b=u=>y=>{const j=u.onBlur;j==null||j(y),g()},C=u=>y=>{const j=u.onFocus;j==null||j(y),h()},v=u=>y=>{const j=u.onMouseEnter;j==null||j(y),h()},f=u=>y=>{const j=u.onMouseLeave;j==null||j(y),g()};return d.useEffect(()=>{if(!o&&l)return window.addEventListener("focus",g),window.addEventListener("blur",h),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",h)}},[o,l,g,h]),{getRootProps:(u={})=>{const y=p({},Re(e),Re(u));return p({role:"presentation"},u,y,{onBlur:b(y),onFocus:C(y),onMouseEnter:v(y),onMouseLeave:f(y)})},onClickAway:x}}function nn(e){return E("MuiSnackbarContent",e)}R("MuiSnackbarContent",["root","message","action"]);const on=["action","className","message","role"],rn=e=>{const{classes:t}=e;return S({root:["root"],action:["action"],message:["message"]},nn,t)},sn=T(Ut,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,o=it(e.palette.background.default,t);return p({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),an=T("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),ln=T("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),cn=d.forwardRef(function(t,o){const i=Y({props:t,name:"MuiSnackbarContent"}),{action:l,className:a,message:s,role:c="alert"}=i,m=k(i,on),x=i,h=rn(x);return n.jsxs(sn,p({role:c,square:!0,elevation:6,className:P(h.root,a),ownerState:x,ref:o},m,{children:[n.jsx(an,{className:h.message,ownerState:x,children:s}),l?n.jsx(ln,{className:h.action,ownerState:x,children:l}):null]}))});function dn(e){return E("MuiSnackbar",e)}R("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const pn=["onEnter","onExited"],mn=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],xn=e=>{const{classes:t,anchorOrigin:o}=e,i={root:["root",`anchorOrigin${L(o.vertical)}${L(o.horizontal)}`]};return S(i,dn,t)},Pe=T("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`anchorOrigin${L(o.anchorOrigin.vertical)}${L(o.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return p({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:p({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&o,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Oe=d.forwardRef(function(t,o){const i=Y({props:t,name:"MuiSnackbar"}),l=We(),a={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{action:s,anchorOrigin:{vertical:c,horizontal:m}={vertical:"bottom",horizontal:"left"},autoHideDuration:x=null,children:h,className:g,ClickAwayListenerProps:b,ContentProps:C,disableWindowBlurListener:v=!1,message:f,open:$,TransitionComponent:u=Fe,transitionDuration:y=a,TransitionProps:{onEnter:j,onExited:O}={}}=i,H=k(i.TransitionProps,pn),Z=k(i,mn),M=p({},i,{anchorOrigin:{vertical:c,horizontal:m},autoHideDuration:x,disableWindowBlurListener:v,TransitionComponent:u,transitionDuration:y}),ee=xn(M),{getRootProps:te,onClickAway:ne}=tn(p({},M)),[oe,V]=d.useState(!0),ie=ut({elementType:Pe,getSlotProps:te,externalForwardedProps:Z,ownerState:M,additionalProps:{ref:o},className:[ee.root,g]}),re=_=>{V(!0),O&&O(_)},w=(_,z)=>{V(!1),j&&j(_,z)};return!$&&oe?null:n.jsx(Qt,p({onClickAway:ne},b,{children:n.jsx(Pe,p({},ie,{children:n.jsx(u,p({appear:!0,in:$,timeout:y,direction:c==="top"?"down":"up",onEnter:w,onExited:re},H,{children:h||n.jsx(cn,p({message:f,action:s},C))}))}))}))}),un=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,hn=r.div`
  width: 100%;
  max-width: min(1240px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,gn=r.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  max-width: 720px;
`,fn=r.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,vn=r.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,yn=r.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,bn=r.div`
  position: relative;
  width: 100%;
  margin-top: clamp(36px, 5vw, 52px);
`,wn=r.div`
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
`,jn=r.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  ${Q}
  border-radius: 20px;
  padding: 0;
`,$n=r.div`
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
`,Cn=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`,kn=r.h3`
  margin: 0;
  width: 100%;
  font-size: clamp(1.2rem, 2.1vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
  text-align: left;
`,Tn=r.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: flex-start;
  justify-content: flex-start;
`,_n=r.li`
  font-size: clamp(0.9rem, 1.35vw, 1rem);
  font-weight: 500;
  ${me}
  color: ${({theme:e})=>e.text_primary};
  border-radius: 10px;
  padding: 9px 14px 9px 9px;
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
`,En=r.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.navBorder};
  flex-shrink: 0;
`,Rn=r.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`,Sn=({skill:e})=>{const t=K();return n.jsx(jn,{...t,children:n.jsxs($n,{children:[n.jsx(Cn,{children:n.jsx(kn,{children:e.title})}),n.jsx(Tn,{children:e.skills.map(o=>n.jsxs(_n,{children:[n.jsx(En,{children:n.jsx(Rn,{src:o.image,alt:`${o.name} technology icon`,loading:"lazy",decoding:"async"})}),o.name]},o.name))})]})})},Mn=()=>n.jsx(un,{id:"skills","aria-labelledby":"skills-heading",children:n.jsxs(hn,{children:[n.jsxs(gn,{children:[n.jsx(fn,{children:"Tech stack"}),n.jsx(vn,{id:"skills-heading",children:"Skills"}),n.jsx(yn,{children:"Here are some of my skills on which I have been working on for the past 4 years."})]}),n.jsx(bn,{children:n.jsx(wn,{children:rt.map(e=>n.jsx(Sn,{skill:e},e.title))})})]})}),zn=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],Pn=({openModal:e,setOpenModal:t})=>{const[o,i]=d.useState("all"),l=Be(),a=d.useMemo(()=>(o==="all"?Ce:Ce.filter(c=>c.category===o)).slice(0,5),[o]);return n.jsx(ht,{id:"projects","aria-labelledby":"projects-heading",children:n.jsxs(gt,{children:[n.jsxs(ft,{children:[n.jsxs(vt,{children:[n.jsx(yt,{children:"Portfolio"}),n.jsx(bt,{id:"projects-heading",children:"Projects"}),n.jsx(wt,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),n.jsx(jt,{type:"button",onClick:()=>l("portfolio/projects"),children:"All projects →"})]}),n.jsx($t,{role:"tablist","aria-label":"Filter projects by type",children:zn.map((s,c)=>n.jsxs(st.Fragment,{children:[c>0&&n.jsx(Ct,{"aria-hidden":!0}),n.jsx(kt,{type:"button",role:"tab","aria-selected":o===s.value,$active:o===s.value,onClick:()=>i(s.value),children:s.label})]},s.value))}),n.jsx(Tt,{children:a.map(s=>n.jsx(_t,{project:s,openModal:e,setOpenModal:t},s.id))})]})})},F={_origin:"https://api.emailjs.com"},On=(e,t="https://api.emailjs.com")=>{F._userID=e,F._origin=t},Ue=(e,t,o)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class De{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const qe=(e,t,o={})=>new Promise((i,l)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:s})=>{const c=new De(s);c.status===200||c.text==="OK"?i(c):l(c)}),a.addEventListener("error",({target:s})=>{l(new De(s))}),a.open("POST",F._origin+e,!0),Object.keys(o).forEach(s=>{a.setRequestHeader(s,o[s])}),a.send(t)}),Dn=(e,t,o,i)=>{const l=i||F._userID;return Ue(l,e,t),qe("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:l,service_id:e,template_id:t,template_params:o}),{"Content-type":"application/json"})},Ln=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},In=(e,t,o,i)=>{const l=i||F._userID,a=Ln(o);Ue(l,e,t);const s=new FormData(a);return s.append("lib_version","3.12.1"),s.append("service_id",e),s.append("template_id",t),s.append("user_id",l),qe("/api/v1.0/email/send-form",s)},An={init:On,send:Dn,sendForm:In},Bn=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,Hn=r.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(32px, 6vw, 72px);
  align-items: start;
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`,Wn=r.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  max-width: 720px;
`,Nn=r.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,Fn=r.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,Un=r.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,qn=r.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${Q}
  padding: clamp(24px, 4vw, 32px);
  border-radius: 20px;
  gap: 14px;
  position: relative;
`,Vn=r.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
`,Ve=at`
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
`,le=r.input`
  ${Ve}
`,Gn=r.textarea`
  ${Ve}
  min-height: 120px;
  resize: vertical;
`,Yn=r.button`
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
`,Kn=()=>{const[e,t]=d.useState(!1),[o,i]=d.useState(!1),l=d.useRef(),a=K(),s=c=>{c.preventDefault(),An.sendForm("service_h1go69o","template_ncrlu8e",l.current,"cIHPxbYwNsgVrUuEz").then(()=>{t(!0),l.current.reset()}).catch(()=>{i(!0)})};return n.jsx(Bn,{id:"contact","aria-labelledby":"contact-heading",children:n.jsxs(Hn,{children:[n.jsxs(Wn,{children:[n.jsx(Nn,{children:"Let's talk"}),n.jsx(Fn,{id:"contact-heading",children:"Contact"}),n.jsx(Un,{children:"Reach out for collaborations, roles, or technical questions. I read every message and respond as soon as I can."})]}),n.jsxs(qn,{ref:l,onSubmit:s,...a,noValidate:!0,children:[n.jsx(Vn,{children:"Email me"}),n.jsx(le,{type:"email",placeholder:"Your email",name:"from_email",autoComplete:"email",required:!0,"aria-label":"Your email"}),n.jsx(le,{type:"text",placeholder:"Your name",name:"from_name",autoComplete:"name",required:!0,"aria-label":"Your name"}),n.jsx(le,{type:"text",placeholder:"Subject",name:"subject",autoComplete:"off",required:!0,"aria-label":"Subject"}),n.jsx(Gn,{placeholder:"Message",rows:4,name:"message",required:!0,"aria-label":"Message"}),n.jsx(Yn,{type:"submit",children:"Send"})]}),n.jsx(Oe,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully.",anchorOrigin:{vertical:"bottom",horizontal:"center"}}),n.jsx(Oe,{open:o,autoHideDuration:6e3,onClose:()=>i(!1),message:"Could not send email. Please try again later.",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})})};var xe={},Xn=J;Object.defineProperty(xe,"__esModule",{value:!0});var Ge=xe.default=void 0;Zn(d);var Jn=Xn(X()),Qn=n;function Ye(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Ye=function(i){return i?o:t})(e)}function Zn(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Ye(t);if(o&&o.has(e))return o.get(e);var i={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=l?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(i,a,s):i[a]=e[a]}return i.default=e,o&&o.set(e,i),i}Ge=xe.default=(0,Jn.default)((0,Qn.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");var ue={},eo=J;Object.defineProperty(ue,"__esModule",{value:!0});var Ke=ue.default=void 0;oo(d);var to=eo(X()),no=n;function Xe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Xe=function(i){return i?o:t})(e)}function oo(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Xe(t);if(o&&o.has(e))return o.get(e);var i={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var s=l?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(i,a,s):i[a]=e[a]}return i.default=e,o&&o.set(e,i),i}Ke=ue.default=(0,to.default)((0,no.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");var he={},io=J;Object.defineProperty(he,"__esModule",{value:!0});var Je=he.default=void 0,ro=io(X()),so=n;Je=he.default=(0,ro.default)((0,so.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Article");var ge={},ao=J;Object.defineProperty(ge,"__esModule",{value:!0});var Qe=ge.default=void 0,lo=ao(X()),co=n;Qe=ge.default=(0,lo.default)((0,co.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code");const po=r.footer`
  width: 100%;
  padding: clamp(44px, 7vw, 72px) clamp(16px, 4vw, 32px) clamp(28px, 5vw, 44px);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  border-top: 1px solid ${({theme:e})=>e.navBorder};
  background: ${({theme:e})=>e.bg};
`,mo=r.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  color: ${({theme:e})=>e.text_primary};
`,xo=r.p`
  margin: 0;
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,uo=r.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`,N=r.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.text_primary};
  text-decoration: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
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
`,ho=r.p`
  margin: 2px 0 0;
  font-size: 0.85rem;
  flex-basis: 100%;
  color: ${({theme:e})=>e.text_muted};
  text-align: left;
`;function go(){const e=new Date().getFullYear();return n.jsx(po,{children:n.jsxs(mo,{children:[n.jsx(xo,{children:A.name}),n.jsxs(uo,{children:[n.jsx(N,{href:A.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:n.jsx(lt,{})}),n.jsx(N,{href:A.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:n.jsx(Ge,{})}),n.jsx(N,{href:A.medium,target:"_blank",rel:"noopener noreferrer","aria-label":"Medium",children:n.jsx(Je,{})}),n.jsx(N,{href:A.codepen,target:"_blank",rel:"noopener noreferrer","aria-label":"CodePen",children:n.jsx(Qe,{})}),n.jsx(N,{href:A.insta,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:n.jsx(Ke,{})})]}),n.jsxs(ho,{children:["© ",e," ",A.name,". All rights reserved."]})]})})}const U=d.createContext({});function fo(e){return E("MuiTimeline",e)}R("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function I(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${L(e)}`}const vo=["position","className"],yo=e=>{const{position:t,classes:o}=e,i={root:["root",t&&I(t)]};return S(i,fo,o)},bo=T("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.position&&t[I(o.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),fe=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimeline"}),{position:l="right",className:a}=i,s=k(i,vo),c=p({},i,{position:l}),m=yo(c),x=d.useMemo(()=>({position:l}),[l]);return n.jsx(U.Provider,{value:x,children:n.jsx(bo,p({className:P(m.root,a),ownerState:c,ref:o},s))})});function wo(e){return E("MuiTimelineContent",e)}const jo=R("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),$o=["className"],Co=e=>{const{position:t,classes:o}=e,i={root:["root",I(t)]};return S(i,wo,o)},ko=T(Ne,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),ve=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineContent"}),{className:l}=i,a=k(i,$o),{position:s}=d.useContext(U),c=p({},i,{position:s||"right"}),m=Co(c);return n.jsx(ko,p({component:"div",className:P(m.root,l),ownerState:c,ref:o},a))});function To(e){return E("MuiTimelineOppositeContent",e)}const _o=R("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Eo=["className"],Ro=e=>{const{position:t,classes:o}=e,i={root:["root",I(t)]};return S(i,To,o)},So=T(Ne,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),Ze=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineOppositeContent"}),{className:l}=i,a=k(i,Eo),{position:s}=d.useContext(U),c=p({},i,{position:s||"left"}),m=Ro(c);return n.jsx(So,p({component:"div",className:P(m.root,l),ownerState:c,ref:o},a))});Ze.muiName="TimelineOppositeContent";function Mo(e){return E("MuiTimelineItem",e)}R("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const zo=["position","className"],Po=e=>{const{position:t,classes:o,hasOppositeContent:i}=e,l={root:["root",I(t),!i&&"missingOppositeContent"]};return S(l,Mo,o)},Oo=T("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[I(o.position)]]}})(({ownerState:e})=>p({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${jo.root}`]:{textAlign:"right"},[`& .${_o.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),ye=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineItem"}),{position:l,className:a}=i,s=k(i,zo),{position:c}=d.useContext(U);let m=!1;d.Children.forEach(i.children,b=>{ct(b,["TimelineOppositeContent"])&&(m=!0)});const x=p({},i,{position:l||c||"right",hasOppositeContent:m}),h=Po(x),g=d.useMemo(()=>({position:x.position}),[x.position]);return n.jsx(U.Provider,{value:g,children:n.jsx(Oo,p({className:P(h.root,a),ownerState:x,ref:o},s))})});function Do(e){return E("MuiTimelineSeparator",e)}R("MuiTimelineSeparator",["root"]);const Lo=["className"],Io=e=>{const{classes:t}=e;return S({root:["root"]},Do,t)},Ao=T("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),be=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineSeparator"}),{className:l}=i,a=k(i,Lo),s=i,c=Io(s);return n.jsx(Ao,p({className:P(c.root,l),ownerState:s,ref:o},a))});function Bo(e){return E("MuiTimelineConnector",e)}R("MuiTimelineConnector",["root"]);const Ho=["className"],Wo=e=>{const{classes:t}=e;return S({root:["root"]},Bo,t)},No=T("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),we=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineConnector"}),{className:l}=i,a=k(i,Ho),s=i,c=Wo(s);return n.jsx(No,p({className:P(c.root,l),ownerState:s,ref:o},a))});function Fo(e){return E("MuiTimelineDot",e)}R("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const Uo=["className","color","variant"],qo=e=>{const{color:t,variant:o,classes:i}=e,l={root:["root",o,t!=="inherit"&&`${o}${L(t)}`]};return S(l,Fo,i)},Vo=T("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.color!=="inherit"&&`${o.variant}${L(o.color)}`],t[o.variant]]}})(({ownerState:e,theme:t})=>p({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&p({borderColor:"transparent"},e.color!=="inherit"&&p({},e.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),e.variant==="outlined"&&p({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&p({},e.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))),je=d.forwardRef(function(t,o){const i=B({props:t,name:"MuiTimelineDot"}),{className:l,color:a="grey",variant:s="filled"}=i,c=k(i,Uo),m=p({},i,{color:a,variant:s}),x=qo(m);return n.jsx(Vo,p({className:P(x.root,l),ownerState:m,ref:o},c))}),Go=220,Yo=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},Ko=r.article`
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  ${Q}
  padding: 22px 22px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.35s ease;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    padding: 18px 16px 16px;
    gap: 14px;
    max-width: 100%;
  }
`,Xo=r.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,Jo=r.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,Qo=r.div`
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
`,Zo=r.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,ei=r.span`
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
`,ti=r.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,ni=r.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,oi=r.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,ii=r.span`
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
`,ri=r.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,si=r.p`
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
`,ai=r.button`
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
`,li=r.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,ci=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`,di=r.span`
  ${me}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
`,pi=r.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,mi=r.div`
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
`,xi=r.a`
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
`,ui=r.img`
  display: block;
  height: 76px;
  width: clamp(120px, 24vw, 160px);
  object-fit: contain;
  background: ${({theme:e})=>e.card_light};
`,hi=({experience:e})=>{var h,g;const t=K(),[o,i]=d.useState(!1),[l,a]=d.useState(!1),s=(e==null?void 0:e.desc)??"",c=d.useMemo(()=>s.length>Go,[s]),m=c&&!o,x=d.useMemo(()=>Yo(e.company),[e.company]);return d.useEffect(()=>{a(!1)},[e.id,e.img]),n.jsxs(Ko,{...t,children:[n.jsxs(Xo,{children:[n.jsxs(Jo,{children:[n.jsx(Qo,{"aria-hidden":!0,children:!l&&e.img?n.jsx(Zo,{src:e.img,alt:`${e.company} company logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>a(!0)}):n.jsx(ei,{children:x})}),n.jsxs(ti,{children:[n.jsx(ni,{children:e.role}),n.jsx(oi,{children:e.company})]})]}),n.jsx(ii,{children:e.date})]}),s&&n.jsxs(ri,{children:[n.jsx(si,{$clamped:m,children:s}),c&&n.jsx(ai,{type:"button",onClick:()=>i(b=>!b),"aria-expanded":o,children:o?"Show less":"Show more"})]}),((h=e==null?void 0:e.skills)==null?void 0:h.length)>0&&n.jsx(li,{"aria-label":"Skills",children:n.jsx(ci,{children:e.skills.map(b=>n.jsx(di,{children:b},b))})}),((g=e.doc)==null?void 0:g.length)>0&&n.jsx(pi,{"aria-label":"Selected work",children:n.jsx(mi,{children:e.doc.map((b,C)=>n.jsx(xi,{href:b.link,target:"_blank",rel:"noopener noreferrer",children:n.jsx(ui,{src:b.workImg,alt:`${e.company} project screenshot`,loading:"lazy",decoding:"async"})},b.link||String(C)))})})]})},gi=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,fi=r.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,vi=r.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  max-width: 720px;
`,yi=r.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,bi=r.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,wi=r.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,ji=r.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,$i=()=>{const e=pe();return n.jsx(gi,{id:"experience","aria-labelledby":"experience-heading",children:n.jsxs(fi,{children:[n.jsxs(vi,{children:[n.jsx(yi,{children:"Career"}),n.jsx(bi,{id:"experience-heading",children:"Experience"}),n.jsx(wi,{children:"Roles building production software, from full-stack web dashboards to mobile apps, with shipped work you can open in a new tab."})]}),n.jsx(ji,{children:n.jsx(fe,{position:"right",sx:{width:"100%",maxWidth:"100%",margin:0,p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:ke.map((t,o)=>n.jsxs(ye,{children:[n.jsxs(be,{children:[n.jsx(je,{variant:"filled",sx:{bgcolor:e.primaryFill,boxShadow:`0 0 0 5px ${e.bg}`,border:0}}),o!==ke.length-1&&n.jsx(we,{sx:{background:e.navBorder,width:2,borderRadius:2}})]}),n.jsx(ve,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left"},children:n.jsx(hi,{experience:t})})]},t.id))})})]})})},Ci=220,ki=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},Ti=r.article`
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  ${Q}
  padding: 22px 22px 20px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  transition: transform 0.35s ease;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 600px) {
    padding: 18px 16px 16px;
    gap: 14px;
    max-width: 100%;
  }
`,_i=r.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,Ei=r.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,Ri=r.div`
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
`,Si=r.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,Mi=r.span`
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
`,zi=r.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,Pi=r.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,Oi=r.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,Di=r.span`
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
`,Li=r.span`
  ${me}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
  width: fit-content;
`,Ii=r.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,Ai=r.p`
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
`,Bi=r.button`
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
`,Hi=({education:e})=>{const t=K(),[o,i]=d.useState(!1),[l,a]=d.useState(!1),s=(e==null?void 0:e.desc)??"",c=d.useMemo(()=>s.length>Ci,[s]),m=c&&!o,x=d.useMemo(()=>ki(e.school),[e.school]);return d.useEffect(()=>{a(!1)},[e.id,e.img]),n.jsxs(Ti,{...t,children:[n.jsxs(_i,{children:[n.jsxs(Ei,{children:[n.jsx(Ri,{"aria-hidden":!0,children:!l&&e.img?n.jsx(Si,{src:e.img,alt:`${e.school} logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>a(!0)}):n.jsx(Mi,{children:x})}),n.jsxs(zi,{children:[n.jsx(Pi,{children:e.school}),n.jsx(Oi,{children:e.degree})]})]}),n.jsx(Di,{children:e.date})]}),e.grade&&n.jsx(Li,{children:e.grade}),s&&n.jsxs(Ii,{children:[n.jsx(Ai,{$clamped:m,children:s}),c&&n.jsx(Bi,{type:"button",onClick:()=>i(h=>!h),"aria-expanded":o,children:o?"Show less":"Show more"})]})]})},Wi=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background: ${({theme:e})=>e.bgLight};
  border-top: 1px solid ${({theme:e})=>e.navBorder};
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,Ni=r.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Fi=r.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,Ui=r.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,qi=r.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${q}
`,Vi=r.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  text-align: left;
`,Gi=r.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Yi=()=>{const e=pe();return n.jsx(Wi,{id:"education","aria-labelledby":"education-heading",children:n.jsxs(Ni,{children:[n.jsxs(Fi,{children:[n.jsx(Ui,{children:"Academics"}),n.jsx(qi,{id:"education-heading",children:"Education"}),n.jsx(Vi,{children:"Academic milestones and coursework that shaped my foundation in software engineering."})]}),n.jsx(Gi,{children:n.jsx(fe,{position:"left",sx:{width:"100%",maxWidth:"100%",margin:0,p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:Te.map((t,o)=>n.jsxs(ye,{sx:{flexDirection:"row"},children:[n.jsxs(be,{children:[n.jsx(je,{variant:"filled",sx:{bgcolor:e.primaryFill,boxShadow:`0 0 0 5px ${e.bg}`,border:0}}),o!==Te.length-1&&n.jsx(we,{sx:{background:e.navBorder,width:2,borderRadius:2}})]}),n.jsx(ve,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left",width:"100%"},children:n.jsx(Hi,{education:t})})]},t.id))})})]})})},Ki=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,Xi=r.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Ji=r.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,Qi=r.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
`,Zi=r.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: ${({theme:e})=>e.text_primary};
`,er=r.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  text-align: left;
`,tr=r.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,nr=r.article`
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
`,or=()=>{const e=pe();return n.jsx(Ki,{id:"timeline","aria-labelledby":"timeline-heading",children:n.jsxs(Xi,{children:[n.jsxs(Ji,{children:[n.jsx(Qi,{children:"Journey"}),n.jsx(Zi,{id:"timeline-heading",children:"Timeline"}),n.jsx(er,{children:"Key milestones from my learning journey and real-world engineering work."})]}),n.jsx(tr,{children:n.jsx(fe,{position:"alternate",sx:{width:"100%",maxWidth:"min(860px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:_e.map((t,o)=>n.jsxs(ye,{children:[n.jsx(Ze,{sx:{m:"auto 0",color:e.primary,fontSize:"0.9rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",px:{xs:1,sm:2}},children:t.year}),n.jsxs(be,{children:[n.jsx(je,{variant:"filled",sx:{bgcolor:e.primaryFill,boxShadow:`0 0 0 5px ${e.bg}`,border:0}}),o!==_e.length-1&&n.jsx(we,{sx:{background:e.navBorder,width:2,borderRadius:2}})]}),n.jsx(ve,{sx:{py:"12px",px:{xs:1.5,sm:2}},children:n.jsx(nr,{children:t.text})})]},`${t.year}-${t.text}`))})})]})})},ir=({openBlogModal:e,setOpenBlogModal:t})=>{const o=Be();return n.jsx(Et,{id:"blogs","aria-labelledby":"blogs-heading",children:n.jsxs(Rt,{children:[n.jsxs(St,{children:[n.jsxs(Mt,{children:[n.jsx(zt,{children:"Writing"}),n.jsx(Pt,{id:"blogs-heading",children:"Blogs"}),n.jsx(Ot,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),n.jsx(Dt,{type:"button",onClick:()=>o("portfolio/blogs"),children:"All blogs →"})]}),n.jsx(Lt,{children:dt.slice(0,5).map(i=>n.jsx(It,{blog:i,openModal:e,setOpenModal:t},i.id))})]})})},Le=r.div`
  width: 100%;
  position: relative;
  background: ${({theme:e})=>e.bgLight};
  border-top: 1px solid ${({theme:e})=>e.navBorder};
`,pr=({openModal:e,setOpenModal:t,openBlogModal:o,setOpenBlogModal:i})=>n.jsxs(n.Fragment,{children:[n.jsxs(Le,{children:[n.jsx(Mn,{}),n.jsx($i,{})]}),n.jsx(Pn,{openModal:e,setOpenModal:t}),n.jsx(Yi,{}),n.jsx(ir,{openBlogModal:o,setOpenBlogModal:i}),n.jsxs(Le,{children:[n.jsx(or,{}),n.jsx(Kn,{})]}),n.jsx(go,{})]});export{pr as default};
//# sourceMappingURL=BelowFold-bWm0g1as.js.map
