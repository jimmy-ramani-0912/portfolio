import{r as R,u as Yt,a as wt,o as gt,j as o,d as be,i as je,H as y,c as Ce,g as _e,B as nt,s as Te,b as Jt,p as zt,e as X,f as K,h as Y,k as Nt,l as Z,m as et,n as tt,q as G,t as Ee,R as Oe,v as Xt,w as Kt,x as ke,y as bt,z as Se,T as $e,A as Me}from"./index-BvQ3crYV.js";import{C as Re,W as Ae,T as Pe,D as De,a as Le,b as rt,c as Ht,d as ze,P as Ft,V as Ne,i as He}from"./index-BKFgrbGJ.js";import{e as Fe,u as Zt,T as Ie,r as Ue,g as It,a as Be}from"./CloseRounded-SgVdPea0.js";import{C as We,W as Ge,T as qe,D as Ve,a as Qe,B as Ye,V as Je,I as Xe}from"./BlogCards-CYOp4eFk.js";function Ut(t){return t.substring(2).toLowerCase()}function Ke(t,r){return r.documentElement.clientWidth<t.clientX||r.documentElement.clientHeight<t.clientY}function Ze(t){const{children:r,disableReactTree:p=!1,mouseEvent:x="onClick",onClickAway:j,touchEvent:h="onTouchEnd"}=t,C=R.useRef(!1),n=R.useRef(null),a=R.useRef(!1),e=R.useRef(!1);R.useEffect(()=>(setTimeout(()=>{a.current=!0},0),()=>{a.current=!1}),[]);const i=Yt(r.ref,n),l=wt(d=>{const f=e.current;e.current=!1;const m=gt(n.current);if(!a.current||!n.current||"clientX"in d&&Ke(d,m))return;if(C.current){C.current=!1;return}let v;d.composedPath?v=d.composedPath().indexOf(n.current)>-1:v=!m.documentElement.contains(d.target)||n.current.contains(d.target),!v&&(p||!f)&&j(d)}),c=d=>f=>{e.current=!0;const m=r.props[d];m&&m(f)},s={ref:i};return h!==!1&&(s[h]=c(h)),R.useEffect(()=>{if(h!==!1){const d=Ut(h),f=gt(n.current),m=()=>{C.current=!0};return f.addEventListener(d,l),f.addEventListener("touchmove",m),()=>{f.removeEventListener(d,l),f.removeEventListener("touchmove",m)}}},[l,h]),x!==!1&&(s[x]=c(x)),R.useEffect(()=>{if(x!==!1){const d=Ut(x),f=gt(n.current);return f.addEventListener(d,l),()=>{f.removeEventListener(d,l)}}},[l,x]),o.jsx(R.Fragment,{children:R.cloneElement(r,s)})}function tn(t){const{autoHideDuration:r=null,disableWindowBlurListener:p=!1,onClose:x,open:j,resumeHideDuration:h}=t,C=R.useRef();R.useEffect(()=>{if(!j)return;function v(g){g.defaultPrevented||(g.key==="Escape"||g.key==="Esc")&&(x==null||x(g,"escapeKeyDown"))}return document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)}},[j,x]);const n=wt((v,g)=>{x==null||x(v,g)}),a=wt(v=>{!x||v==null||(clearTimeout(C.current),C.current=setTimeout(()=>{n(null,"timeout")},v))});R.useEffect(()=>(j&&a(r),()=>{clearTimeout(C.current)}),[j,r,a]);const e=v=>{x==null||x(v,"clickaway")},i=()=>{clearTimeout(C.current)},l=R.useCallback(()=>{r!=null&&a(h??r*.5)},[r,h,a]),c=v=>g=>{const w=v.onBlur;w==null||w(g),l()},s=v=>g=>{const w=v.onFocus;w==null||w(g),i()},d=v=>g=>{const w=v.onMouseEnter;w==null||w(g),i()},f=v=>g=>{const w=v.onMouseLeave;w==null||w(g),l()};return R.useEffect(()=>{if(!p&&j)return window.addEventListener("focus",l),window.addEventListener("blur",i),()=>{window.removeEventListener("focus",l),window.removeEventListener("blur",i)}},[p,l,j]),{getRootProps:(v={})=>{const w={...Fe(t),...v};return{role:"presentation",...w,onBlur:c(w),onFocus:s(w),onMouseEnter:d(w),onMouseLeave:f(w)}},onClickAway:e}}const en=t=>{var r,p;const x={systemProps:{},otherProps:{}},j=(r=t==null||(p=t.theme)==null?void 0:p.unstable_sxConfig)!=null?r:be;return Object.keys(t).forEach(h=>{j[h]?x.systemProps[h]=t[h]:x.otherProps[h]=t[h]}),x};function nn(t){const{sx:r,...p}=t,{systemProps:x,otherProps:j}=en(p);let h;return Array.isArray(r)?h=[x,...r]:typeof r=="function"?h=(...C)=>{const n=r(...C);return je(n)?{...x,...n}:x}:h={...x,...r},{...j,sx:h}}const on=y.div`
    width:600px;
    height: 500px;
`,rn=()=>o.jsx(on,{children:o.jsxs("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsxs("g",{opacity:"0.15",children:[o.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),o.jsx("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),o.jsx("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),o.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#945DD6",children:o.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_2"})})}),o.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:o.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_2"})})}),o.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:o.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_2"})})}),o.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:o.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_2"})})}),o.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#945DD6",children:o.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:o.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:"#F46737",children:o.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:o.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:"#F46737",children:o.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_1"})})}),o.jsx("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:o.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_1"})})}),o.jsx("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:"#F46737",children:o.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:o.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:"#13ADC7",children:o.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:o.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:o.jsx("mpath",{xlinkHref:"#path_0"})})}),o.jsxs("defs",{children:[o.jsxs("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[o.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),o.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),o.jsxs("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[o.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),o.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),o.jsxs("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[o.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),o.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#945DD6"}),o.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#945DD6"}),o.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F46737"}),o.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F46737"}),o.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#F46737"}),o.jsx("stop",{offset:"1",stopColor:"#F46737",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#13ADC7"}),o.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#13ADC7"}),o.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#945DD6"}),o.jsx("stop",{offset:"1",stopColor:"#945DD6",stopOpacity:"0"})]}),o.jsxs("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{stopColor:"#13ADC7"}),o.jsx("stop",{offset:"1",stopColor:"#13ADC7",stopOpacity:"0"})]})]})]})}),an=y.div`
  background: ${({theme:t})=>t.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`,sn=y.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`,ln=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,cn=y.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,pn=y.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`,dn=y.img`
  object-fit: cover;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({theme:t})=>t.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 500px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 320px;
  }
`,un=y.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({theme:t})=>t.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`,xn=y.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({theme:t})=>t.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`,fn=y.span`
  color: ${({theme:t})=>t.primary};
  cursor: pointer;
`,hn=y.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  text-align: justify;
  text-justify: auto;
  color: ${({theme:t})=>t.text_primary+95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`,mn=y.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({theme:t})=>t.white};
  border: 1px solid ${({theme:t})=>t.primary};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: ${({theme:t})=>t.primary};
  /* box-shadow: ${({theme:t})=>t.boxShadow}; */
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`,gn="/portfolio/assets/photo-DecV8zyk.jpg";var te={exports:{}};(function(t,r){(function(p,x){t.exports=x(R)})(typeof self<"u"?self:Ce,p=>(()=>{var x={7403:(n,a,e)=>{e.d(a,{default:()=>V});var i=e(4087),l=e.n(i);const c=function(M){return new RegExp(/<[a-z][\s\S]*>/i).test(M)},s=function(M){var T=document.createElement("div");return T.innerHTML=M,T.childNodes},d=function(M,T){return Math.floor(Math.random()*(T-M+1))+M};var f="TYPE_CHARACTER",m="REMOVE_CHARACTER",v="REMOVE_ALL",g="REMOVE_LAST_VISIBLE_NODE",w="PAUSE_FOR",O="CALL_FUNCTION",L="ADD_HTML_TAG_ELEMENT",_="CHANGE_DELETE_SPEED",b="CHANGE_DELAY",k="CHANGE_CURSOR",$="PASTE_STRING",F="HTML_TAG";function P(M,T){var H=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);T&&(N=N.filter(function(Q){return Object.getOwnPropertyDescriptor(M,Q).enumerable})),H.push.apply(H,N)}return H}function I(M){for(var T=1;T<arguments.length;T++){var H=arguments[T]!=null?arguments[T]:{};T%2?P(Object(H),!0).forEach(function(N){A(M,N,H[N])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(H)):P(Object(H)).forEach(function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(H,N))})}return M}function D(M){return function(T){if(Array.isArray(T))return z(T)}(M)||function(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)}(M)||function(T,H){if(T){if(typeof T=="string")return z(T,H);var N=Object.prototype.toString.call(T).slice(8,-1);return N==="Object"&&T.constructor&&(N=T.constructor.name),N==="Map"||N==="Set"?Array.from(T):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?z(T,H):void 0}}(M)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function z(M,T){(T==null||T>M.length)&&(T=M.length);for(var H=0,N=new Array(T);H<T;H++)N[H]=M[H];return N}function S(M,T){for(var H=0;H<T.length;H++){var N=T[H];N.enumerable=N.enumerable||!1,N.configurable=!0,"value"in N&&(N.writable=!0),Object.defineProperty(M,N.key,N)}}function A(M,T,H){return T in M?Object.defineProperty(M,T,{value:H,enumerable:!0,configurable:!0,writable:!0}):M[T]=H,M}const V=function(){function M(N,Q){var u=this;if(function(E,U){if(!(E instanceof U))throw new TypeError("Cannot call a class as a function")}(this,M),A(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),A(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),A(this,"setupWrapperElement",function(){u.state.elements.container&&(u.state.elements.wrapper.className=u.options.wrapperClassName,u.state.elements.cursor.className=u.options.cursorClassName,u.state.elements.cursor.innerHTML=u.options.cursor,u.state.elements.container.innerHTML="",u.state.elements.container.appendChild(u.state.elements.wrapper),u.state.elements.container.appendChild(u.state.elements.cursor))}),A(this,"start",function(){return u.state.eventLoopPaused=!1,u.runEventLoop(),u}),A(this,"pause",function(){return u.state.eventLoopPaused=!0,u}),A(this,"stop",function(){return u.state.eventLoop&&((0,i.cancel)(u.state.eventLoop),u.state.eventLoop=null),u}),A(this,"pauseFor",function(E){return u.addEventToQueue(w,{ms:E}),u}),A(this,"typeOutAllStrings",function(){return typeof u.options.strings=="string"?(u.typeString(u.options.strings).pauseFor(u.options.pauseFor),u):(u.options.strings.forEach(function(E){u.typeString(E).pauseFor(u.options.pauseFor).deleteAll(u.options.deleteSpeed)}),u)}),A(this,"typeString",function(E){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(c(E))return u.typeOutHTMLString(E,U);if(E){var q=u.options||{},W=q.stringSplitter,B=typeof W=="function"?W(E):E.split("");u.typeCharacters(B,U)}return u}),A(this,"pasteString",function(E){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return c(E)?u.typeOutHTMLString(E,U,!0):(E&&u.addEventToQueue($,{character:E,node:U}),u)}),A(this,"typeOutHTMLString",function(E){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,q=arguments.length>2?arguments[2]:void 0,W=s(E);if(W.length>0)for(var B=0;B<W.length;B++){var J=W[B],ot=J.innerHTML;J&&J.nodeType!==3?(J.innerHTML="",u.addEventToQueue(L,{node:J,parentNode:U}),q?u.pasteString(ot,J):u.typeString(ot,J)):J.textContent&&(q?u.pasteString(J.textContent,U):u.typeString(J.textContent,U))}return u}),A(this,"deleteAll",function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return u.addEventToQueue(v,{speed:E}),u}),A(this,"changeDeleteSpeed",function(E){if(!E)throw new Error("Must provide new delete speed");return u.addEventToQueue(_,{speed:E}),u}),A(this,"changeDelay",function(E){if(!E)throw new Error("Must provide new delay");return u.addEventToQueue(b,{delay:E}),u}),A(this,"changeCursor",function(E){if(!E)throw new Error("Must provide new cursor");return u.addEventToQueue(k,{cursor:E}),u}),A(this,"deleteChars",function(E){if(!E)throw new Error("Must provide amount of characters to delete");for(var U=0;U<E;U++)u.addEventToQueue(m);return u}),A(this,"callFunction",function(E,U){if(!E||typeof E!="function")throw new Error("Callbak must be a function");return u.addEventToQueue(O,{cb:E,thisArg:U}),u}),A(this,"typeCharacters",function(E){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E||!Array.isArray(E))throw new Error("Characters must be an array");return E.forEach(function(q){u.addEventToQueue(f,{character:q,node:U})}),u}),A(this,"removeCharacters",function(E){if(!E||!Array.isArray(E))throw new Error("Characters must be an array");return E.forEach(function(){u.addEventToQueue(m)}),u}),A(this,"addEventToQueue",function(E,U){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return u.addEventToStateProperty(E,U,q,"eventQueue")}),A(this,"addReverseCalledEvent",function(E,U){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=u.options.loop;return W?u.addEventToStateProperty(E,U,q,"reverseCalledEvents"):u}),A(this,"addEventToStateProperty",function(E,U){var q=arguments.length>2&&arguments[2]!==void 0&&arguments[2],W=arguments.length>3?arguments[3]:void 0,B={eventName:E,eventArgs:U||{}};return u.state[W]=q?[B].concat(D(u.state[W])):[].concat(D(u.state[W]),[B]),u}),A(this,"runEventLoop",function(){u.state.lastFrameTime||(u.state.lastFrameTime=Date.now());var E=Date.now(),U=E-u.state.lastFrameTime;if(!u.state.eventQueue.length){if(!u.options.loop)return;u.state.eventQueue=D(u.state.calledEvents),u.state.calledEvents=[],u.options=I({},u.state.initialOptions)}if(u.state.eventLoop=l()(u.runEventLoop),!u.state.eventLoopPaused){if(u.state.pauseUntil){if(E<u.state.pauseUntil)return;u.state.pauseUntil=null}var q,W=D(u.state.eventQueue),B=W.shift();if(!(U<=(q=B.eventName===g||B.eventName===m?u.options.deleteSpeed==="natural"?d(40,80):u.options.deleteSpeed:u.options.delay==="natural"?d(120,160):u.options.delay))){var J=B.eventName,ot=B.eventArgs;switch(u.logInDevMode({currentEvent:B,state:u.state,delay:q}),J){case $:case f:var ut=ot.character,Rt=ot.node,At=document.createTextNode(ut),it=At;u.options.onCreateTextNode&&typeof u.options.onCreateTextNode=="function"&&(it=u.options.onCreateTextNode(ut,At)),it&&(Rt?Rt.appendChild(it):u.state.elements.wrapper.appendChild(it)),u.state.visibleNodes=[].concat(D(u.state.visibleNodes),[{type:"TEXT_NODE",character:ut,node:it}]);break;case m:W.unshift({eventName:g,eventArgs:{removingCharacterNode:!0}});break;case w:var xe=B.eventArgs.ms;u.state.pauseUntil=Date.now()+parseInt(xe);break;case O:var Pt=B.eventArgs,fe=Pt.cb,he=Pt.thisArg;fe.call(he,{elements:u.state.elements});break;case L:var Dt=B.eventArgs,xt=Dt.node,ft=Dt.parentNode;ft?ft.appendChild(xt):u.state.elements.wrapper.appendChild(xt),u.state.visibleNodes=[].concat(D(u.state.visibleNodes),[{type:F,node:xt,parentNode:ft||u.state.elements.wrapper}]);break;case v:var me=u.state.visibleNodes,ht=ot.speed,ct=[];ht&&ct.push({eventName:_,eventArgs:{speed:ht,temp:!0}});for(var Lt=0,ge=me.length;Lt<ge;Lt++)ct.push({eventName:g,eventArgs:{removingCharacterNode:!1}});ht&&ct.push({eventName:_,eventArgs:{speed:u.options.deleteSpeed,temp:!0}}),W.unshift.apply(W,ct);break;case g:var ve=B.eventArgs.removingCharacterNode;if(u.state.visibleNodes.length){var mt=u.state.visibleNodes.pop(),ye=mt.type,pt=mt.node,we=mt.character;u.options.onRemoveNode&&typeof u.options.onRemoveNode=="function"&&u.options.onRemoveNode({node:pt,character:we}),pt&&pt.parentNode.removeChild(pt),ye===F&&ve&&W.unshift({eventName:g,eventArgs:{}})}break;case _:u.options.deleteSpeed=B.eventArgs.speed;break;case b:u.options.delay=B.eventArgs.delay;break;case k:u.options.cursor=B.eventArgs.cursor,u.state.elements.cursor.innerHTML=B.eventArgs.cursor}u.options.loop&&(B.eventName===g||B.eventArgs&&B.eventArgs.temp||(u.state.calledEvents=[].concat(D(u.state.calledEvents),[B]))),u.state.eventQueue=W,u.state.lastFrameTime=E}}}),N)if(typeof N=="string"){var Mt=document.querySelector(N);if(!Mt)throw new Error("Could not find container element");this.state.elements.container=Mt}else this.state.elements.container=N;Q&&(this.options=I(I({},this.options),Q)),this.state.initialOptions=I({},this.options),this.init()}var T,H;return T=M,(H=[{key:"init",value:function(){var N,Q;this.setupWrapperElement(),this.addEventToQueue(k,{cursor:this.options.cursor},!0),this.addEventToQueue(v,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(N=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Q=document.createElement("style")).appendChild(document.createTextNode(N)),document.head.appendChild(Q),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(N){this.options.devMode&&console.log(N)}}])&&S(T.prototype,H),Object.defineProperty(T,"prototype",{writable:!1}),M}()},8552:(n,a,e)=>{var i=e(852)(e(5639),"DataView");n.exports=i},1989:(n,a,e)=>{var i=e(1789),l=e(401),c=e(7667),s=e(1327),d=e(1866);function f(m){var v=-1,g=m==null?0:m.length;for(this.clear();++v<g;){var w=m[v];this.set(w[0],w[1])}}f.prototype.clear=i,f.prototype.delete=l,f.prototype.get=c,f.prototype.has=s,f.prototype.set=d,n.exports=f},8407:(n,a,e)=>{var i=e(7040),l=e(4125),c=e(2117),s=e(7518),d=e(4705);function f(m){var v=-1,g=m==null?0:m.length;for(this.clear();++v<g;){var w=m[v];this.set(w[0],w[1])}}f.prototype.clear=i,f.prototype.delete=l,f.prototype.get=c,f.prototype.has=s,f.prototype.set=d,n.exports=f},7071:(n,a,e)=>{var i=e(852)(e(5639),"Map");n.exports=i},3369:(n,a,e)=>{var i=e(4785),l=e(1285),c=e(6e3),s=e(9916),d=e(5265);function f(m){var v=-1,g=m==null?0:m.length;for(this.clear();++v<g;){var w=m[v];this.set(w[0],w[1])}}f.prototype.clear=i,f.prototype.delete=l,f.prototype.get=c,f.prototype.has=s,f.prototype.set=d,n.exports=f},3818:(n,a,e)=>{var i=e(852)(e(5639),"Promise");n.exports=i},8525:(n,a,e)=>{var i=e(852)(e(5639),"Set");n.exports=i},8668:(n,a,e)=>{var i=e(3369),l=e(619),c=e(2385);function s(d){var f=-1,m=d==null?0:d.length;for(this.__data__=new i;++f<m;)this.add(d[f])}s.prototype.add=s.prototype.push=l,s.prototype.has=c,n.exports=s},6384:(n,a,e)=>{var i=e(8407),l=e(7465),c=e(3779),s=e(7599),d=e(4758),f=e(4309);function m(v){var g=this.__data__=new i(v);this.size=g.size}m.prototype.clear=l,m.prototype.delete=c,m.prototype.get=s,m.prototype.has=d,m.prototype.set=f,n.exports=m},2705:(n,a,e)=>{var i=e(5639).Symbol;n.exports=i},1149:(n,a,e)=>{var i=e(5639).Uint8Array;n.exports=i},577:(n,a,e)=>{var i=e(852)(e(5639),"WeakMap");n.exports=i},4963:n=>{n.exports=function(a,e){for(var i=-1,l=a==null?0:a.length,c=0,s=[];++i<l;){var d=a[i];e(d,i,a)&&(s[c++]=d)}return s}},4636:(n,a,e)=>{var i=e(2545),l=e(5694),c=e(1469),s=e(4144),d=e(5776),f=e(6719),m=Object.prototype.hasOwnProperty;n.exports=function(v,g){var w=c(v),O=!w&&l(v),L=!w&&!O&&s(v),_=!w&&!O&&!L&&f(v),b=w||O||L||_,k=b?i(v.length,String):[],$=k.length;for(var F in v)!g&&!m.call(v,F)||b&&(F=="length"||L&&(F=="offset"||F=="parent")||_&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||d(F,$))||k.push(F);return k}},2488:n=>{n.exports=function(a,e){for(var i=-1,l=e.length,c=a.length;++i<l;)a[c+i]=e[i];return a}},2908:n=>{n.exports=function(a,e){for(var i=-1,l=a==null?0:a.length;++i<l;)if(e(a[i],i,a))return!0;return!1}},8470:(n,a,e)=>{var i=e(7813);n.exports=function(l,c){for(var s=l.length;s--;)if(i(l[s][0],c))return s;return-1}},8866:(n,a,e)=>{var i=e(2488),l=e(1469);n.exports=function(c,s,d){var f=s(c);return l(c)?f:i(f,d(c))}},4239:(n,a,e)=>{var i=e(2705),l=e(9607),c=e(2333),s=i?i.toStringTag:void 0;n.exports=function(d){return d==null?d===void 0?"[object Undefined]":"[object Null]":s&&s in Object(d)?l(d):c(d)}},9454:(n,a,e)=>{var i=e(4239),l=e(7005);n.exports=function(c){return l(c)&&i(c)=="[object Arguments]"}},939:(n,a,e)=>{var i=e(2492),l=e(7005);n.exports=function c(s,d,f,m,v){return s===d||(s==null||d==null||!l(s)&&!l(d)?s!=s&&d!=d:i(s,d,f,m,c,v))}},2492:(n,a,e)=>{var i=e(6384),l=e(7114),c=e(8351),s=e(6096),d=e(4160),f=e(1469),m=e(4144),v=e(6719),g="[object Arguments]",w="[object Array]",O="[object Object]",L=Object.prototype.hasOwnProperty;n.exports=function(_,b,k,$,F,P){var I=f(_),D=f(b),z=I?w:d(_),S=D?w:d(b),A=(z=z==g?O:z)==O,V=(S=S==g?O:S)==O,M=z==S;if(M&&m(_)){if(!m(b))return!1;I=!0,A=!1}if(M&&!A)return P||(P=new i),I||v(_)?l(_,b,k,$,F,P):c(_,b,z,k,$,F,P);if(!(1&k)){var T=A&&L.call(_,"__wrapped__"),H=V&&L.call(b,"__wrapped__");if(T||H){var N=T?_.value():_,Q=H?b.value():b;return P||(P=new i),F(N,Q,k,$,P)}}return!!M&&(P||(P=new i),s(_,b,k,$,F,P))}},8458:(n,a,e)=>{var i=e(3560),l=e(5346),c=e(3218),s=e(346),d=/^\[object .+?Constructor\]$/,f=Function.prototype,m=Object.prototype,v=f.toString,g=m.hasOwnProperty,w=RegExp("^"+v.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");n.exports=function(O){return!(!c(O)||l(O))&&(i(O)?w:d).test(s(O))}},8749:(n,a,e)=>{var i=e(4239),l=e(1780),c=e(7005),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,n.exports=function(d){return c(d)&&l(d.length)&&!!s[i(d)]}},280:(n,a,e)=>{var i=e(5726),l=e(6916),c=Object.prototype.hasOwnProperty;n.exports=function(s){if(!i(s))return l(s);var d=[];for(var f in Object(s))c.call(s,f)&&f!="constructor"&&d.push(f);return d}},2545:n=>{n.exports=function(a,e){for(var i=-1,l=Array(a);++i<a;)l[i]=e(i);return l}},1717:n=>{n.exports=function(a){return function(e){return a(e)}}},4757:n=>{n.exports=function(a,e){return a.has(e)}},4429:(n,a,e)=>{var i=e(5639)["__core-js_shared__"];n.exports=i},7114:(n,a,e)=>{var i=e(8668),l=e(2908),c=e(4757);n.exports=function(s,d,f,m,v,g){var w=1&f,O=s.length,L=d.length;if(O!=L&&!(w&&L>O))return!1;var _=g.get(s),b=g.get(d);if(_&&b)return _==d&&b==s;var k=-1,$=!0,F=2&f?new i:void 0;for(g.set(s,d),g.set(d,s);++k<O;){var P=s[k],I=d[k];if(m)var D=w?m(I,P,k,d,s,g):m(P,I,k,s,d,g);if(D!==void 0){if(D)continue;$=!1;break}if(F){if(!l(d,function(z,S){if(!c(F,S)&&(P===z||v(P,z,f,m,g)))return F.push(S)})){$=!1;break}}else if(P!==I&&!v(P,I,f,m,g)){$=!1;break}}return g.delete(s),g.delete(d),$}},8351:(n,a,e)=>{var i=e(2705),l=e(1149),c=e(7813),s=e(7114),d=e(8776),f=e(1814),m=i?i.prototype:void 0,v=m?m.valueOf:void 0;n.exports=function(g,w,O,L,_,b,k){switch(O){case"[object DataView]":if(g.byteLength!=w.byteLength||g.byteOffset!=w.byteOffset)return!1;g=g.buffer,w=w.buffer;case"[object ArrayBuffer]":return!(g.byteLength!=w.byteLength||!b(new l(g),new l(w)));case"[object Boolean]":case"[object Date]":case"[object Number]":return c(+g,+w);case"[object Error]":return g.name==w.name&&g.message==w.message;case"[object RegExp]":case"[object String]":return g==w+"";case"[object Map]":var $=d;case"[object Set]":var F=1&L;if($||($=f),g.size!=w.size&&!F)return!1;var P=k.get(g);if(P)return P==w;L|=2,k.set(g,w);var I=s($(g),$(w),L,_,b,k);return k.delete(g),I;case"[object Symbol]":if(v)return v.call(g)==v.call(w)}return!1}},6096:(n,a,e)=>{var i=e(8234),l=Object.prototype.hasOwnProperty;n.exports=function(c,s,d,f,m,v){var g=1&d,w=i(c),O=w.length;if(O!=i(s).length&&!g)return!1;for(var L=O;L--;){var _=w[L];if(!(g?_ in s:l.call(s,_)))return!1}var b=v.get(c),k=v.get(s);if(b&&k)return b==s&&k==c;var $=!0;v.set(c,s),v.set(s,c);for(var F=g;++L<O;){var P=c[_=w[L]],I=s[_];if(f)var D=g?f(I,P,_,s,c,v):f(P,I,_,c,s,v);if(!(D===void 0?P===I||m(P,I,d,f,v):D)){$=!1;break}F||(F=_=="constructor")}if($&&!F){var z=c.constructor,S=s.constructor;z==S||!("constructor"in c)||!("constructor"in s)||typeof z=="function"&&z instanceof z&&typeof S=="function"&&S instanceof S||($=!1)}return v.delete(c),v.delete(s),$}},1957:(n,a,e)=>{var i=typeof e.g=="object"&&e.g&&e.g.Object===Object&&e.g;n.exports=i},8234:(n,a,e)=>{var i=e(8866),l=e(9551),c=e(3674);n.exports=function(s){return i(s,c,l)}},5050:(n,a,e)=>{var i=e(7019);n.exports=function(l,c){var s=l.__data__;return i(c)?s[typeof c=="string"?"string":"hash"]:s.map}},852:(n,a,e)=>{var i=e(8458),l=e(7801);n.exports=function(c,s){var d=l(c,s);return i(d)?d:void 0}},9607:(n,a,e)=>{var i=e(2705),l=Object.prototype,c=l.hasOwnProperty,s=l.toString,d=i?i.toStringTag:void 0;n.exports=function(f){var m=c.call(f,d),v=f[d];try{f[d]=void 0;var g=!0}catch{}var w=s.call(f);return g&&(m?f[d]=v:delete f[d]),w}},9551:(n,a,e)=>{var i=e(4963),l=e(479),c=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,d=s?function(f){return f==null?[]:(f=Object(f),i(s(f),function(m){return c.call(f,m)}))}:l;n.exports=d},4160:(n,a,e)=>{var i=e(8552),l=e(7071),c=e(3818),s=e(8525),d=e(577),f=e(4239),m=e(346),v="[object Map]",g="[object Promise]",w="[object Set]",O="[object WeakMap]",L="[object DataView]",_=m(i),b=m(l),k=m(c),$=m(s),F=m(d),P=f;(i&&P(new i(new ArrayBuffer(1)))!=L||l&&P(new l)!=v||c&&P(c.resolve())!=g||s&&P(new s)!=w||d&&P(new d)!=O)&&(P=function(I){var D=f(I),z=D=="[object Object]"?I.constructor:void 0,S=z?m(z):"";if(S)switch(S){case _:return L;case b:return v;case k:return g;case $:return w;case F:return O}return D}),n.exports=P},7801:n=>{n.exports=function(a,e){return a==null?void 0:a[e]}},1789:(n,a,e)=>{var i=e(4536);n.exports=function(){this.__data__=i?i(null):{},this.size=0}},401:n=>{n.exports=function(a){var e=this.has(a)&&delete this.__data__[a];return this.size-=e?1:0,e}},7667:(n,a,e)=>{var i=e(4536),l=Object.prototype.hasOwnProperty;n.exports=function(c){var s=this.__data__;if(i){var d=s[c];return d==="__lodash_hash_undefined__"?void 0:d}return l.call(s,c)?s[c]:void 0}},1327:(n,a,e)=>{var i=e(4536),l=Object.prototype.hasOwnProperty;n.exports=function(c){var s=this.__data__;return i?s[c]!==void 0:l.call(s,c)}},1866:(n,a,e)=>{var i=e(4536);n.exports=function(l,c){var s=this.__data__;return this.size+=this.has(l)?0:1,s[l]=i&&c===void 0?"__lodash_hash_undefined__":c,this}},5776:n=>{var a=/^(?:0|[1-9]\d*)$/;n.exports=function(e,i){var l=typeof e;return!!(i=i??9007199254740991)&&(l=="number"||l!="symbol"&&a.test(e))&&e>-1&&e%1==0&&e<i}},7019:n=>{n.exports=function(a){var e=typeof a;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?a!=="__proto__":a===null}},5346:(n,a,e)=>{var i,l=e(4429),c=(i=/[^.]+$/.exec(l&&l.keys&&l.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"";n.exports=function(s){return!!c&&c in s}},5726:n=>{var a=Object.prototype;n.exports=function(e){var i=e&&e.constructor;return e===(typeof i=="function"&&i.prototype||a)}},7040:n=>{n.exports=function(){this.__data__=[],this.size=0}},4125:(n,a,e)=>{var i=e(8470),l=Array.prototype.splice;n.exports=function(c){var s=this.__data__,d=i(s,c);return!(d<0||(d==s.length-1?s.pop():l.call(s,d,1),--this.size,0))}},2117:(n,a,e)=>{var i=e(8470);n.exports=function(l){var c=this.__data__,s=i(c,l);return s<0?void 0:c[s][1]}},7518:(n,a,e)=>{var i=e(8470);n.exports=function(l){return i(this.__data__,l)>-1}},4705:(n,a,e)=>{var i=e(8470);n.exports=function(l,c){var s=this.__data__,d=i(s,l);return d<0?(++this.size,s.push([l,c])):s[d][1]=c,this}},4785:(n,a,e)=>{var i=e(1989),l=e(8407),c=e(7071);n.exports=function(){this.size=0,this.__data__={hash:new i,map:new(c||l),string:new i}}},1285:(n,a,e)=>{var i=e(5050);n.exports=function(l){var c=i(this,l).delete(l);return this.size-=c?1:0,c}},6e3:(n,a,e)=>{var i=e(5050);n.exports=function(l){return i(this,l).get(l)}},9916:(n,a,e)=>{var i=e(5050);n.exports=function(l){return i(this,l).has(l)}},5265:(n,a,e)=>{var i=e(5050);n.exports=function(l,c){var s=i(this,l),d=s.size;return s.set(l,c),this.size+=s.size==d?0:1,this}},8776:n=>{n.exports=function(a){var e=-1,i=Array(a.size);return a.forEach(function(l,c){i[++e]=[c,l]}),i}},4536:(n,a,e)=>{var i=e(852)(Object,"create");n.exports=i},6916:(n,a,e)=>{var i=e(5569)(Object.keys,Object);n.exports=i},1167:(n,a,e)=>{n=e.nmd(n);var i=e(1957),l=a&&!a.nodeType&&a,c=l&&n&&!n.nodeType&&n,s=c&&c.exports===l&&i.process,d=function(){try{return c&&c.require&&c.require("util").types||s&&s.binding&&s.binding("util")}catch{}}();n.exports=d},2333:n=>{var a=Object.prototype.toString;n.exports=function(e){return a.call(e)}},5569:n=>{n.exports=function(a,e){return function(i){return a(e(i))}}},5639:(n,a,e)=>{var i=e(1957),l=typeof self=="object"&&self&&self.Object===Object&&self,c=i||l||Function("return this")();n.exports=c},619:n=>{n.exports=function(a){return this.__data__.set(a,"__lodash_hash_undefined__"),this}},2385:n=>{n.exports=function(a){return this.__data__.has(a)}},1814:n=>{n.exports=function(a){var e=-1,i=Array(a.size);return a.forEach(function(l){i[++e]=l}),i}},7465:(n,a,e)=>{var i=e(8407);n.exports=function(){this.__data__=new i,this.size=0}},3779:n=>{n.exports=function(a){var e=this.__data__,i=e.delete(a);return this.size=e.size,i}},7599:n=>{n.exports=function(a){return this.__data__.get(a)}},4758:n=>{n.exports=function(a){return this.__data__.has(a)}},4309:(n,a,e)=>{var i=e(8407),l=e(7071),c=e(3369);n.exports=function(s,d){var f=this.__data__;if(f instanceof i){var m=f.__data__;if(!l||m.length<199)return m.push([s,d]),this.size=++f.size,this;f=this.__data__=new c(m)}return f.set(s,d),this.size=f.size,this}},346:n=>{var a=Function.prototype.toString;n.exports=function(e){if(e!=null){try{return a.call(e)}catch{}try{return e+""}catch{}}return""}},7813:n=>{n.exports=function(a,e){return a===e||a!=a&&e!=e}},5694:(n,a,e)=>{var i=e(9454),l=e(7005),c=Object.prototype,s=c.hasOwnProperty,d=c.propertyIsEnumerable,f=i(function(){return arguments}())?i:function(m){return l(m)&&s.call(m,"callee")&&!d.call(m,"callee")};n.exports=f},1469:n=>{var a=Array.isArray;n.exports=a},8612:(n,a,e)=>{var i=e(3560),l=e(1780);n.exports=function(c){return c!=null&&l(c.length)&&!i(c)}},4144:(n,a,e)=>{n=e.nmd(n);var i=e(5639),l=e(5062),c=a&&!a.nodeType&&a,s=c&&n&&!n.nodeType&&n,d=s&&s.exports===c?i.Buffer:void 0,f=(d?d.isBuffer:void 0)||l;n.exports=f},8446:(n,a,e)=>{var i=e(939);n.exports=function(l,c){return i(l,c)}},3560:(n,a,e)=>{var i=e(4239),l=e(3218);n.exports=function(c){if(!l(c))return!1;var s=i(c);return s=="[object Function]"||s=="[object GeneratorFunction]"||s=="[object AsyncFunction]"||s=="[object Proxy]"}},1780:n=>{n.exports=function(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=9007199254740991}},3218:n=>{n.exports=function(a){var e=typeof a;return a!=null&&(e=="object"||e=="function")}},7005:n=>{n.exports=function(a){return a!=null&&typeof a=="object"}},6719:(n,a,e)=>{var i=e(8749),l=e(1717),c=e(1167),s=c&&c.isTypedArray,d=s?l(s):i;n.exports=d},3674:(n,a,e)=>{var i=e(4636),l=e(280),c=e(8612);n.exports=function(s){return c(s)?i(s):l(s)}},479:n=>{n.exports=function(){return[]}},5062:n=>{n.exports=function(){return!1}},75:function(n){(function(){var a,e,i,l,c,s;typeof performance<"u"&&performance!==null&&performance.now?n.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(n.exports=function(){return(a()-c)/1e6},e=process.hrtime,l=(a=function(){var d;return 1e9*(d=e())[0]+d[1]})(),s=1e9*process.uptime(),c=l-s):Date.now?(n.exports=function(){return Date.now()-i},i=Date.now()):(n.exports=function(){return new Date().getTime()-i},i=new Date().getTime())}).call(this)},4087:(n,a,e)=>{for(var i=e(75),l=typeof window>"u"?e.g:window,c=["moz","webkit"],s="AnimationFrame",d=l["request"+s],f=l["cancel"+s]||l["cancelRequest"+s],m=0;!d&&m<c.length;m++)d=l[c[m]+"Request"+s],f=l[c[m]+"Cancel"+s]||l[c[m]+"CancelRequest"+s];if(!d||!f){var v=0,g=0,w=[];d=function(O){if(w.length===0){var L=i(),_=Math.max(0,16.666666666666668-(L-v));v=_+L,setTimeout(function(){var b=w.slice(0);w.length=0;for(var k=0;k<b.length;k++)if(!b[k].cancelled)try{b[k].callback(v)}catch($){setTimeout(function(){throw $},0)}},Math.round(_))}return w.push({handle:++g,callback:O,cancelled:!1}),g},f=function(O){for(var L=0;L<w.length;L++)w[L].handle===O&&(w[L].cancelled=!0)}}n.exports=function(O){return d.call(l,O)},n.exports.cancel=function(){f.apply(l,arguments)},n.exports.polyfill=function(O){O||(O=l),O.requestAnimationFrame=d,O.cancelAnimationFrame=f}},8156:n=>{n.exports=p}},j={};function h(n){var a=j[n];if(a!==void 0)return a.exports;var e=j[n]={id:n,loaded:!1,exports:{}};return x[n].call(e.exports,e,e.exports,h),e.loaded=!0,e.exports}h.n=n=>{var a=n&&n.__esModule?()=>n.default:()=>n;return h.d(a,{a}),a},h.d=(n,a)=>{for(var e in a)h.o(a,e)&&!h.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:a[e]})},h.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),h.o=(n,a)=>Object.prototype.hasOwnProperty.call(n,a),h.nmd=n=>(n.paths=[],n.children||(n.children=[]),n);var C={};return(()=>{h.d(C,{default:()=>L});var n=h(8156),a=h.n(n),e=h(7403),i=h(8446),l=h.n(i);function c(_){return c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},c(_)}function s(_,b){if(!(_ instanceof b))throw new TypeError("Cannot call a class as a function")}function d(_,b){for(var k=0;k<b.length;k++){var $=b[k];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(_,$.key,$)}}function f(_,b){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,$){return k.__proto__=$,k},f(_,b)}function m(_,b){if(b&&(c(b)==="object"||typeof b=="function"))return b;if(b!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(_)}function v(_){if(_===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return _}function g(_){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(b){return b.__proto__||Object.getPrototypeOf(b)},g(_)}function w(_,b,k){return b in _?Object.defineProperty(_,b,{value:k,enumerable:!0,configurable:!0,writable:!0}):_[b]=k,_}var O=function(_){(function(D,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");D.prototype=Object.create(z&&z.prototype,{constructor:{value:D,writable:!0,configurable:!0}}),Object.defineProperty(D,"prototype",{writable:!1}),z&&f(D,z)})(I,_);var b,k,$,F,P=($=I,F=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var D,z=g($);if(F){var S=g(this).constructor;D=Reflect.construct(z,arguments,S)}else D=z.apply(this,arguments);return m(this,D)});function I(){var D;s(this,I);for(var z=arguments.length,S=new Array(z),A=0;A<z;A++)S[A]=arguments[A];return w(v(D=P.call.apply(P,[this].concat(S))),"state",{instance:null}),D}return b=I,(k=[{key:"componentDidMount",value:function(){var D=this,z=new e.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var S=D.props.onInit;S&&S(z)})}},{key:"componentDidUpdate",value:function(D){l()(this.props.options,D.options)||this.setState({instance:new e.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var D=this,z=this.props.component;return a().createElement(z,{ref:function(S){return D.typewriter=S},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&d(b.prototype,k),Object.defineProperty(b,"prototype",{writable:!1}),I}(n.Component);O.defaultProps={component:"div"};const L=O})(),C.default})())})(te);var vn=te.exports;const yn=_e(vn),wn=()=>o.jsx("div",{id:"about",children:o.jsxs(an,{children:[o.jsx(sn,{children:o.jsx(rn,{})}),o.jsxs(ln,{children:[o.jsxs(cn,{id:"Left",children:[o.jsxs(un,{children:["Hi, I am ",o.jsx("br",{})," ",nt.name]}),o.jsxs(xn,{children:["I'm a",o.jsx(fn,{children:o.jsx(yn,{options:{strings:nt.roles,autoStart:!0,loop:!0}})})]}),o.jsx(hn,{children:nt.description}),o.jsx(mn,{href:nt.resume,target:"display",children:"Check Resume"})]}),o.jsx(pn,{id:"Right",children:o.jsx(dn,{src:gn,alt:"Jimmy-Ramani"})})]})]})}),bn=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0px 80px 0px;
`,jn=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Cn=y.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,_n=y.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:t})=>t.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,Tn=y.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`,En=y.div`
  width: 100%;
  max-width: 500px;
  background: ${({theme:t})=>t.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`,On=y.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`,kn=y.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`,Sn=y.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_primary+80};
  border: 1px solid ${({theme:t})=>t.text_primary+80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`,$n=y.img`
  width: 24px;
  height: 24px;
`,Mn=()=>o.jsx(bn,{id:"skills",children:o.jsxs(jn,{children:[o.jsx(Cn,{children:"Skills"}),o.jsx(_n,{children:"Here are some of my skills on which I have been working on for the past 4 years."}),o.jsx(Tn,{children:Te.map(t=>o.jsxs(En,{children:[o.jsx(On,{children:t.title}),o.jsx(kn,{children:t.skills.map(r=>o.jsxs(Sn,{children:[o.jsx($n,{src:r.image}),r.name]}))})]}))})]})}),Rn=({openModal:t,setOpenModal:r})=>{const[p,x]=R.useState("all"),j=Jt();return o.jsx(Re,{id:"projects",children:o.jsxs(Ae,{children:[o.jsx(Pe,{children:"Projects"}),o.jsx(De,{children:"I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects."}),o.jsxs(Le,{children:[p==="all"?o.jsx(rt,{active:!0,value:"all",onClick:()=>x("all"),children:"All"}):o.jsx(rt,{value:"all",onClick:()=>x("all"),children:"All"}),o.jsx(Ht,{}),p==="web app"?o.jsx(rt,{active:!0,value:"web app",onClick:()=>x("web app"),children:"WEB APP'S"}):o.jsx(rt,{value:"web app",onClick:()=>x("web app"),children:"WEB APP'S"}),o.jsx(Ht,{}),p==="flutter app"?o.jsx(rt,{active:!0,value:"flutter app",onClick:()=>x("flutter app"),children:"FLUTTER APP'S"}):o.jsx(rt,{value:"flutter app",onClick:()=>x("flutter app"),children:"FLUTTER APP'S"})]}),o.jsxs(ze,{children:[p==="all"&&zt.slice(0,5).map(h=>o.jsx(Ft,{project:h,openModal:t,setOpenModal:r})),zt.slice(0,5).filter(h=>h.category===p).map(h=>o.jsx(Ft,{project:h,openModal:t,setOpenModal:r}))]}),o.jsx(Ne,{onClick:()=>{j("portfolio/projects")},children:"View All"})]})})},st={_origin:"https://api.emailjs.com"},An=(t,r="https://api.emailjs.com")=>{st._userID=t,st._origin=r},ee=(t,r,p)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!p)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Bt{constructor(r){this.status=r?r.status:0,this.text=r?r.responseText:"Network Error"}}const ne=(t,r,p={})=>new Promise((x,j)=>{const h=new XMLHttpRequest;h.addEventListener("load",({target:C})=>{const n=new Bt(C);n.status===200||n.text==="OK"?x(n):j(n)}),h.addEventListener("error",({target:C})=>{j(new Bt(C))}),h.open("POST",st._origin+t,!0),Object.keys(p).forEach(C=>{h.setRequestHeader(C,p[C])}),h.send(r)}),Pn=(t,r,p,x)=>{const j=x||st._userID;return ee(j,t,r),ne("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:j,service_id:t,template_id:r,template_params:p}),{"Content-type":"application/json"})},Dn=t=>{let r;if(typeof t=="string"?r=document.querySelector(t):r=t,!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return r},Ln=(t,r,p,x)=>{const j=x||st._userID,h=Dn(p);ee(j,t,r);const C=new FormData(h);return C.append("lib_version","3.11.0"),C.append("service_id",t),C.append("template_id",r),C.append("user_id",j),ne("/api/v1.0/email/send-form",C)},zn={init:An,send:Pn,sendForm:Ln},Nn=t=>{let r;return t<1?r=5.11916*t**2:r=4.5*Math.log(t+1)+2,(r/100).toFixed(2)},Wt=Nn;function Hn(t){return X("MuiPaper",t)}K("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Fn=t=>{const{square:r,elevation:p,variant:x,classes:j}=t,h={root:["root",x,!r&&"rounded",x==="elevation"&&`elevation${p}`]};return tt(h,Hn,j)},In=Y("div",{name:"MuiPaper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[p.variant],!p.square&&r.rounded,p.variant==="elevation"&&r[`elevation${p.elevation}`]]}})(({theme:t,ownerState:r})=>{var p;return{backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow"),...!r.square&&{borderRadius:t.shape.borderRadius},...r.variant==="outlined"&&{border:`1px solid ${(t.vars||t).palette.divider}`},...r.variant==="elevation"&&{boxShadow:(t.vars||t).shadows[r.elevation],...!t.vars&&t.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Nt("#fff",Wt(r.elevation))}, ${Nt("#fff",Wt(r.elevation))})`},...t.vars&&{backgroundImage:(p=t.vars.overlays)==null?void 0:p[r.elevation]}}}}),Un=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiPaper"}),{className:j,component:h="div",elevation:C=1,square:n=!1,variant:a="elevation",...e}=x,i={...x,component:h,elevation:C,square:n,variant:a},l=Fn(i);return o.jsx(In,{as:h,ownerState:i,className:et(l.root,j),ref:p,...e})}),Bn=Un;function Wn(t){return X("MuiTypography",t)}K("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Gn=t=>{const{align:r,gutterBottom:p,noWrap:x,paragraph:j,variant:h,classes:C}=t,n={root:["root",h,t.align!=="inherit"&&`align${G(r)}`,p&&"gutterBottom",x&&"noWrap",j&&"paragraph"]};return tt(n,Wn,C)},qn=Y("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,p.variant&&r[p.variant],p.align!=="inherit"&&r[`align${G(p.align)}`],p.noWrap&&r.noWrap,p.gutterBottom&&r.gutterBottom,p.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>({margin:0,...r.variant&&t.typography[r.variant],...r.align!=="inherit"&&{textAlign:r.align},...r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...r.gutterBottom&&{marginBottom:"0.35em"},...r.paragraph&&{marginBottom:16}})),Gt={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Vn={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Qn=t=>Vn[t]||t,Yn=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTypography"}),j=Qn(x.color),h=nn({...x,color:j}),{align:C="inherit",className:n,component:a,gutterBottom:e=!1,noWrap:i=!1,paragraph:l=!1,variant:c="body1",variantMapping:s=Gt,...d}=h,f={...h,align:C,color:j,className:n,component:a,gutterBottom:e,noWrap:i,paragraph:l,variant:c,variantMapping:s},m=a||(l?"p":s[c]||Gt[c])||"span",v=Gn(f);return o.jsx(qn,{as:m,ref:p,ownerState:f,className:et(v.root,n),...d})}),oe=Yn;function jt(t){return`scale(${t}, ${t**2})`}const Jn={entering:{opacity:1,transform:jt(1)},entered:{opacity:1,transform:"none"}},vt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),re=R.forwardRef(function(r,p){const{addEndListener:x,appear:j=!0,children:h,easing:C,in:n,onEnter:a,onEntered:e,onEntering:i,onExit:l,onExited:c,onExiting:s,style:d,timeout:f="auto",TransitionComponent:m=Ie,...v}=r,g=R.useRef(),w=R.useRef(),O=Zt(),L=R.useRef(null),_=Yt(L,h.ref,p),b=S=>A=>{if(S){const V=L.current;A===void 0?S(V):S(V,A)}},k=b(i),$=b((S,A)=>{Ue(S);const{duration:V,delay:M,easing:T}=It({style:d,timeout:f,easing:C},{mode:"enter"});let H;f==="auto"?(H=O.transitions.getAutoHeightDuration(S.clientHeight),w.current=H):H=V,S.style.transition=[O.transitions.create("opacity",{duration:H,delay:M}),O.transitions.create("transform",{duration:vt?H:H*.666,delay:M,easing:T})].join(","),a&&a(S,A)}),F=b(e),P=b(s),I=b(S=>{const{duration:A,delay:V,easing:M}=It({style:d,timeout:f,easing:C},{mode:"exit"});let T;f==="auto"?(T=O.transitions.getAutoHeightDuration(S.clientHeight),w.current=T):T=A,S.style.transition=[O.transitions.create("opacity",{duration:T,delay:V}),O.transitions.create("transform",{duration:vt?T:T*.666,delay:vt?V:V||T*.333,easing:M})].join(","),S.style.opacity=0,S.style.transform=jt(.75),l&&l(S)}),D=b(c),z=S=>{f==="auto"&&(g.current=setTimeout(S,w.current||0)),x&&x(L.current,S)};return R.useEffect(()=>()=>{clearTimeout(g.current)},[]),o.jsx(m,{appear:j,in:n,nodeRef:L,onEnter:$,onEntered:F,onEntering:k,onExit:I,onExited:D,onExiting:P,addEndListener:z,timeout:f==="auto"?null:f,...v,children:(S,A)=>R.cloneElement(h,{style:{opacity:0,transform:jt(.75),visibility:S==="exited"&&!n?"hidden":void 0,...Jn[S],...d,...h.props.style},ref:_,...A})})});re.muiSupportAuto=!0;const Xn=re;function Kn(t){return X("MuiSnackbarContent",t)}K("MuiSnackbarContent",["root","message","action"]);const Zn=t=>{const{classes:r}=t;return tt({root:["root"],action:["action"],message:["message"]},Kn,r)},to=Y(Bn,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,r)=>r.root})(({theme:t})=>{const r=t.palette.mode==="light"?.8:.98,p=Ee(t.palette.background.default,r);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(p),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:p,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}}),eo=Y("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,r)=>r.message})({padding:"8px 0"}),no=Y("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,r)=>r.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),oo=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiSnackbarContent"}),{action:j,className:h,message:C,role:n="alert",...a}=x,e=x,i=Zn(e);return o.jsxs(to,{role:n,square:!0,elevation:6,className:et(i.root,h),ownerState:e,ref:p,...a,children:[o.jsx(eo,{className:i.message,ownerState:e,children:C}),j?o.jsx(no,{className:i.action,ownerState:e,children:j}):null]})}),ro=oo;function io(t){return X("MuiSnackbar",t)}K("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const ao=t=>{const{classes:r,anchorOrigin:p}=t,x={root:["root",`anchorOrigin${G(p.vertical)}${G(p.horizontal)}`]};return tt(x,io,r)},qt=Y("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[`anchorOrigin${G(p.anchorOrigin.vertical)}${G(p.anchorOrigin.horizontal)}`]]}})(({theme:t,ownerState:r})=>{const p={left:"50%",right:"auto",transform:"translateX(-50%)"};return{zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",...r.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},...r.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},...r.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},[t.breakpoints.up("sm")]:{...r.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},...r.anchorOrigin.horizontal==="center"&&p,...r.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},...r.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"}}}}),so=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiSnackbar"}),j=Zt(),h={enter:j.transitions.duration.enteringScreen,exit:j.transitions.duration.leavingScreen},{action:C,anchorOrigin:{vertical:n,horizontal:a}={vertical:"bottom",horizontal:"left"},autoHideDuration:e=null,children:i,className:l,ClickAwayListenerProps:c,ContentProps:s,disableWindowBlurListener:d=!1,message:f,onBlur:m,onClose:v,onFocus:g,onMouseEnter:w,onMouseLeave:O,open:L,resumeHideDuration:_,TransitionComponent:b=Xn,transitionDuration:k=h,TransitionProps:{onEnter:$,onExited:F,...P}={},...I}=x,D={...x,anchorOrigin:{vertical:n,horizontal:a},autoHideDuration:e,disableWindowBlurListener:d,TransitionComponent:b,transitionDuration:k},z=ao(D),{getRootProps:S,onClickAway:A}=tn({...D}),[V,M]=R.useState(!0),T=Be({elementType:qt,getSlotProps:S,externalForwardedProps:I,ownerState:D,additionalProps:{ref:p},className:[z.root,l]}),H=Q=>{M(!0),F&&F(Q)},N=(Q,u)=>{M(!1),$&&$(Q,u)};return!L&&V?null:o.jsx(Ze,{onClickAway:A,...c,children:o.jsx(qt,{...T,children:o.jsx(b,{appear:!0,in:L,timeout:k,direction:n==="top"?"down":"up",onEnter:N,onExited:H,...P,children:i||o.jsx(ro,{message:f,action:C,...s})})})})}),lo=so,co=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,po=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,uo=y.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,xo=y.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:t})=>t.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,fo=y.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,ho=y.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_primary};
`,yt=y.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:t})=>t.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:t})=>t.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:t})=>t.primary};
  }
`,mo=y.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme:t})=>t.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({theme:t})=>t.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({theme:t})=>t.primary};
  }
`,go=y.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({theme:t})=>t.background};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({theme:t})=>t.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`,vo=()=>{const[t,r]=Oe.useState(!1),p=R.useRef(),x=j=>{j.preventDefault(),zn.sendForm("service_h1go69o","template_ncrlu8e",p.current,"cIHPxbYwNsgVrUuEz").then(h=>{r(!0),p.current.reset()},h=>{console.error("Email sending failed:",h)})};return o.jsx(co,{children:o.jsxs(po,{children:[o.jsx(uo,{children:"Contact"}),o.jsx(xo,{children:"Feel free to reach out to me for any questions or opportunities!"}),o.jsxs(fo,{ref:p,onSubmit:x,children:[o.jsx(ho,{children:"Email Me 🚀"}),o.jsx(yt,{placeholder:"Your Email",name:"from_email"}),o.jsx(yt,{placeholder:"Your Name",name:"from_name"}),o.jsx(yt,{placeholder:"Subject",name:"subject"}),o.jsx(mo,{placeholder:"Message",rows:"4",name:"message"}),o.jsx(go,{type:"submit",value:"Send"})]}),o.jsx(lo,{open:t,autoHideDuration:6e3,onClose:()=>r(!1),message:"Email sent successfully!",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})})};var Ct={},yo=Kt;Object.defineProperty(Ct,"__esModule",{value:!0});var ie=Ct.default=void 0;jo(R);var wo=yo(Xt()),bo=o;function ae(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(ae=function(x){return x?p:r})(t)}function jo(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var p=ae(r);if(p&&p.has(t))return p.get(t);var x={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in t)if(h!=="default"&&Object.prototype.hasOwnProperty.call(t,h)){var C=j?Object.getOwnPropertyDescriptor(t,h):null;C&&(C.get||C.set)?Object.defineProperty(x,h,C):x[h]=t[h]}return x.default=t,p&&p.set(t,x),x}var Co=(0,wo.default)((0,bo.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");ie=Ct.default=Co;var _t={},_o=Kt;Object.defineProperty(_t,"__esModule",{value:!0});var se=_t.default=void 0;Oo(R);var To=_o(Xt()),Eo=o;function le(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(le=function(x){return x?p:r})(t)}function Oo(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var p=le(r);if(p&&p.has(t))return p.get(t);var x={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in t)if(h!=="default"&&Object.prototype.hasOwnProperty.call(t,h)){var C=j?Object.getOwnPropertyDescriptor(t,h):null;C&&(C.get||C.set)?Object.defineProperty(x,h,C):x[h]=t[h]}return x.default=t,p&&p.set(t,x),x}var ko=(0,To.default)((0,Eo.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");se=_t.default=ko;const So=y.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`,$o=y.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({theme:t})=>t.text_primary};
`,Mo=y.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({theme:t})=>t.primary};
`,Ro=y.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`,at=y.a`
  color: ${({theme:t})=>t.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:t})=>t.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Ao=y.div`
  display: flex;
  margin-top: 1rem;
`,dt=y.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({theme:t})=>t.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({theme:t})=>t.primary};
  }
`,Po=y.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({theme:t})=>t.soft2};
  text-align: center;
`,Vt=y.img`
  height: 23px;
  width: fit-content;
  border-radius: 10px;

  filter: ${({theme:t})=>t.filter};
`;function Do(){return o.jsx(So,{children:o.jsxs($o,{children:[o.jsx(Mo,{children:"Jimmy Ramani"}),o.jsxs(Ro,{children:[o.jsx(at,{href:"#about",children:"About"}),o.jsx(at,{href:"#skills",children:"Skills"}),o.jsx(at,{href:"#experience",children:"Experience"}),o.jsx(at,{href:"#projects",children:"Projects"}),o.jsx(at,{href:"#education",children:"Education"})]}),o.jsxs(Ao,{children:[o.jsx(dt,{href:nt.linkedin,target:"display",children:o.jsx(ie,{})}),o.jsx(dt,{href:nt.codepen,target:"display",children:o.jsx(Vt,{src:"https://www.svgrepo.com/show/353582/codepen-icon.svg"})}),o.jsx(dt,{href:nt.medium,target:"display",children:o.jsx(Vt,{src:"https://www.svgrepo.com/show/354057/medium-icon.svg"})}),o.jsx(dt,{href:nt.insta,target:"display",children:o.jsx(se,{})})]}),o.jsx(Po,{children:"© 2024 Jimmy Ramani. All rights reserved."})]})})}const Lo=R.createContext({}),lt=Lo;function zo(t){return X("MuiTimeline",t)}K("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);const No=t=>{const{position:r,classes:p}=t,x={root:["root",r&&`position${G(r)}`]};return tt(x,zo,p)},Ho=Y("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,p.position&&r[`position${G(p.position)}`]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),Fo=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimeline"}),{position:j="right",className:h,...C}=x,n={...x,position:j},a=No(n),e=R.useMemo(()=>({position:j}),[j]);return o.jsx(lt.Provider,{value:e,children:o.jsx(Ho,{className:et(a.root,h),ownerState:n,ref:p,...C})})}),Tt=Fo;function Io(t){return X("MuiTimelineContent",t)}const Uo=K("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]),Bo=Uo,Wo=t=>{const{position:r,classes:p}=t,x={root:["root",`position${G(r)}`]};return tt(x,Io,p)},Go=Y(oe,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[`position${G(p.position)}`]]}})(({ownerState:t})=>({flex:1,padding:"6px 16px",textAlign:"left",...t.position==="left"&&{textAlign:"right"}})),qo=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineContent"}),{className:j,...h}=x,{position:C}=R.useContext(lt),n={...x,position:C||"right"},a=Wo(n);return o.jsx(Go,{component:"div",className:et(a.root,j),ownerState:n,ref:p,...h})}),Et=qo;function Vo(t){return X("MuiTimelineOppositeContent",t)}const Qo=K("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]),Yo=Qo,Jo=t=>{const{position:r,classes:p}=t,x={root:["root",`position${G(r)}`]};return tt(x,Vo,p)},Xo=Y(oe,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[`position${G(p.position)}`]]}})(({ownerState:t})=>({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1,...t.position==="left"&&{textAlign:"left"}})),ce=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineOppositeContent"}),{className:j,...h}=x,{position:C}=R.useContext(lt),n={...x,position:C||"left"},a=Jo(n);return o.jsx(Xo,{component:"div",className:et(a.root,j),ownerState:n,ref:p,...h})});ce.muiName="TimelineOppositeContent";const Ko=ce;function Zo(t){return X("MuiTimelineItem",t)}K("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);const tr=t=>{const{position:r,classes:p,hasOppositeContent:x}=t,j={root:["root",`position${G(r)}`,!x&&"missingOppositeContent"]};return tt(j,Zo,p)},er=Y("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[`position${G(p.position)}`]]}})(({ownerState:t})=>({listStyle:"none",display:"flex",position:"relative",minHeight:70,...t.position==="left"&&{flexDirection:"row-reverse"},...t.position==="alternate"&&{"&:nth-of-type(even)":{flexDirection:"row-reverse",[`& .${Bo.root}`]:{textAlign:"right"},[`& .${Yo.root}`]:{textAlign:"left"}}},...!t.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}}})),nr=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineItem"}),{position:j,className:h,...C}=x,{position:n}=R.useContext(lt);let a=!1;R.Children.forEach(x.children,c=>{ke(c,["TimelineOppositeContent"])&&(a=!0)});const e={...x,position:j||n||"right",hasOppositeContent:a},i=tr(e),l=R.useMemo(()=>({position:e.position}),[e.position]);return o.jsx(lt.Provider,{value:l,children:o.jsx(er,{className:et(i.root,h),ownerState:e,ref:p,...C})})}),Ot=nr;function or(t){return X("MuiTimelineSeparator",t)}K("MuiTimelineSeparator",["root"]);const rr=t=>{const{classes:r}=t;return tt({root:["root"]},or,r)},ir=Y("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(t,r)=>r.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),ar=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineSeparator"}),{className:j,...h}=x,C=x,n=rr(C);return o.jsx(ir,{className:et(n.root,j),ownerState:C,ref:p,...h})}),kt=ar;function sr(t){return X("MuiTimelineConnector",t)}K("MuiTimelineConnector",["root"]);const lr=t=>{const{classes:r}=t;return tt({root:["root"]},sr,r)},cr=Y("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(t,r)=>r.root})(({theme:t})=>({width:2,backgroundColor:(t.vars||t).palette.grey[400],flexGrow:1})),pr=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineConnector"}),{className:j,...h}=x,C=x,n=lr(C);return o.jsx(cr,{className:et(n.root,j),ownerState:C,ref:p,...h})}),St=pr;function dr(t){return X("MuiTimelineDot",t)}K("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const ur=t=>{const{color:r,variant:p,classes:x}=t,j={root:["root",p,r!=="inherit"&&`${p}${G(r)}`]};return tt(j,dr,x)},xr=Y("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:p}=t;return[r.root,r[p.color!=="inherit"&&`${p.variant}${G(p.color)}`],r[p.variant]]}})(({ownerState:t,theme:r})=>({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(r.vars||r).shadows[1],margin:"11.5px 0",...t.variant==="filled"&&{borderColor:"transparent",...t.color!=="inherit"&&{...t.color==="grey"?{color:(r.vars||r).palette.grey[50],backgroundColor:(r.vars||r).palette.grey[400]}:{color:(r.vars||r).palette[t.color].contrastText,backgroundColor:(r.vars||r).palette[t.color].main}}},...t.variant==="outlined"&&{boxShadow:"none",backgroundColor:"transparent",...t.color!=="inherit"&&{...t.color==="grey"?{borderColor:(r.vars||r).palette.grey[400]}:{borderColor:(r.vars||r).palette[t.color].main}}}})),fr=R.forwardRef(function(r,p){const x=Z({props:r,name:"MuiTimelineDot"}),{className:j,color:h="grey",variant:C="filled",...n}=x,a={...x,color:h,variant:C},e=ur(a);return o.jsx(xr,{className:et(e.root,j),ownerState:a,ref:p,...n})}),$t=fr,pe=y.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,hr=y.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,de=y.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,mr=y.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${pe} {
    display: flex;
  }

  &:hover ${de} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`,gr=y.div`
  width: 100%;
  display: flex;
  gap: 12px;
`,vr=y.img`
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,yr=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,wr=y.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,br=y.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:t})=>t.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,jr=y.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,Cr=y.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`,_r=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,Tr=y.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Er=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,Or=({experience:t})=>{var r;return o.jsxs(mr,{children:[o.jsxs(gr,{children:[o.jsx(vr,{src:t.img}),o.jsxs(yr,{children:[o.jsx(wr,{children:t.role}),o.jsx(br,{children:t.company}),o.jsx(jr,{children:t.date})]})]}),o.jsxs(hr,{children:[(t==null?void 0:t.desc)&&o.jsx(de,{children:t==null?void 0:t.desc}),(t==null?void 0:t.skills)&&o.jsxs(o.Fragment,{children:[o.jsx("br",{}),o.jsxs(Cr,{children:[o.jsx("b",{children:"Skills:"}),o.jsx(_r,{children:(r=t==null?void 0:t.skills)==null?void 0:r.map((p,x)=>o.jsxs(Tr,{children:["• ",p]}))})]})]})]}),t.doc&&o.jsx(Er,{children:t.doc.map((p,x)=>o.jsx("a",{href:p.link,target:"_blank",children:o.jsx(pe,{src:p.workImg})},x))})]})},kr=y.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`,Sr=y.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`,$r=y.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`,Mr=y.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({theme:t})=>t.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`,Rr=y.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`,Ar=()=>o.jsx(kr,{id:"experience",children:o.jsxs(Sr,{children:[o.jsx($r,{children:"Experience"}),o.jsx(Mr,{children:"My work experience as a software engineer and working on different companies and projects."}),o.jsx(Rr,{children:o.jsx(Tt,{children:bt.map((t,r)=>o.jsxs(Ot,{children:[o.jsxs(kt,{children:[o.jsx($t,{variant:"outlined",color:"secondary"}),r!==bt.length-1&&o.jsx(St,{style:{background:"#854CE6"}})]}),o.jsx(Et,{sx:{py:"12px",px:2},children:o.jsx(Or,{experience:t})})]}))})})]})}),Pr=y.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`,Dr=y.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_primary+99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,ue=y.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`,Lr=y.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Pr} {
    display: flex;
  }

  &:hover ${ue} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #854ce6;
`,zr=y.img`
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`,Nr=y.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`,Hr=y.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme:t})=>t.text_primary+99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`,Fr=y.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:t})=>t.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Ir=y.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme:t})=>t.text_secondary+80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`,Ur=y.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme:t})=>t.text_secondary+99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Br=({education:t,hasImage:r})=>{const p=y.div`
    width: 100%;
    display: flex;
    gap: ${r?"12px":"0"};
  `;return o.jsxs(Lr,{children:[o.jsxs(p,{children:[o.jsx(zr,{src:t.img}),o.jsxs(Nr,{children:[o.jsx(Hr,{children:t.school}),o.jsx(Fr,{children:t.degree}),o.jsx(Ir,{children:t.date})]})]}),o.jsxs(Ur,{children:[o.jsx("b",{children:"Grade: "}),t.grade]}),o.jsx(Dr,{children:o.jsx(ue,{children:t.desc})})]})},Wr=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,Gr=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,qr=y.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Vr=y.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:t})=>t.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,Qr=y.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  /* @media (max-width: 660px) {
    align-items: end;
  } */
`,Yr=()=>o.jsx(Wr,{id:"education",children:o.jsxs(Gr,{children:[o.jsx(qr,{children:"Education"}),o.jsx(Vr,{children:"My education has been a journey of self-discovery and growth. My educational details are as follows."}),o.jsx(Qr,{children:o.jsx(Tt,{children:Se.map((t,r)=>o.jsxs(Ot,{children:[o.jsx(Et,{sx:{py:"12px",px:2},children:o.jsx(Br,{education:t,hasImage:!!t.img})}),o.jsxs(kt,{children:[o.jsx($t,{variant:"outlined",color:"secondary"}),r!==bt.length&&o.jsx(St,{style:{background:"#854CE6"}})]})]}))})})]})}),Jr=y.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`,Xr=y.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,Kr=y.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme:t})=>t.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,Zr=y.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme:t})=>t.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`,ti=y.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  /* @media (max-width: 660px) {
    align-items: end;
  } */
`,ei=y.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({theme:t})=>t.text_primary};
`,ni=()=>o.jsx(Jr,{id:"education",children:o.jsxs(Xr,{children:[o.jsx(Kr,{children:"TimeLine"}),o.jsx(Zr,{children:"My journey in the tech world has been full of learning and growth."}),o.jsx(ti,{children:o.jsx(Tt,{position:"alternate",children:$e.map((t,r)=>o.jsxs(Ot,{children:[o.jsx(Ko,{color:"#854CE6",children:t.year}),o.jsxs(kt,{children:[o.jsx($t,{variant:"outlined",color:"secondary"}),o.jsx(St,{style:{background:"#854CE6"}})]}),o.jsx(Et,{children:o.jsx(ei,{children:t.text})})]}))})})]})}),oi=({openBlogModal:t,setOpenBlogModal:r})=>{const p=Jt();return o.jsx(We,{id:"blogs",children:o.jsxs(Ge,{children:[o.jsx(qe,{children:"Blogs"}),o.jsx(Ve,{children:"Join me as I share insights from my journey developing web and Android apps."}),o.jsx(Qe,{children:Me.slice(0,5).map(x=>o.jsx(Ye,{blog:x,openModal:t,setOpenModal:r}))}),o.jsx(Je,{onClick:()=>{p("portfolio/blogs")},children:"View All"})]})})},ri=y.div`
  background-color: ${({theme:t})=>t.bg};
  width: 100%;
  overflow-x: hidden;
`,Qt=y.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`,ci=()=>{const[t,r]=R.useState({state:!1,project:null}),[p,x]=R.useState({state:!1,blog:null});return o.jsxs(ri,{children:[o.jsx(wn,{}),o.jsxs(Qt,{children:[o.jsx(Mn,{}),o.jsx(Ar,{})]}),o.jsx(Rn,{openModal:t,setOpenModal:r}),o.jsx(Yr,{}),o.jsx(oi,{openBlogModal:p,setOpenBlogModal:x}),o.jsxs(Qt,{children:[o.jsx(ni,{}),o.jsx(vo,{})]}),o.jsx(Do,{}),t.state&&o.jsx(He,{openModal:t,setOpenModal:r}),p.state&&o.jsx(Xe,{openBlogModal:p,setOpenBlogModal:x})]})};export{ci as default};
