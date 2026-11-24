const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C0RIoTYj.js","assets/CloseRounded-Djh1s-Sd.js","assets/index--AWMa-Oh.js","assets/index-DnFYUY7W.css","assets/index-DmRrs19U.js","assets/index-Ba3egP3B.js","assets/BlogDetail-BM6LdEv2.js"])))=>i.map(i=>d[i]);
function Zy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var ev=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function js(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function vn(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var Um={exports:{}},_s={},Wm={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ei=Symbol.for("react.element"),tv=Symbol.for("react.portal"),nv=Symbol.for("react.fragment"),rv=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),av=Symbol.for("react.context"),sv=Symbol.for("react.forward_ref"),lv=Symbol.for("react.suspense"),cv=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),yp=Symbol.iterator;function dv(e){return e===null||typeof e!="object"?null:(e=yp&&e[yp]||e["@@iterator"],typeof e=="function"?e:null)}var Hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Jm={};function po(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Hm}po.prototype.isReactComponent={};po.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};po.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vm(){}Vm.prototype=po.prototype;function Pu(e,t,n){this.props=e,this.context=t,this.refs=Jm,this.updater=n||Hm}var Tu=Pu.prototype=new Vm;Tu.constructor=Pu;Gm(Tu,po.prototype);Tu.isPureReactComponent=!0;var vp=Array.isArray,Qm=Object.prototype.hasOwnProperty,Ou={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function qm(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Qm.call(t,r)&&!Km.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Ei,type:e,key:i,ref:a,props:o,_owner:Ou.current}}function pv(e,t){return{$$typeof:Ei,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ei}function fv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xp=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fv(""+e.key):t.toString(36)}function Ea(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ei:case tv:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Tl(a,0):r,vp(o)?(n="",e!=null&&(n=e.replace(xp,"$&/")+"/"),Ea(o,t,n,"",function(l){return l})):o!=null&&(Au(o)&&(o=pv(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(xp,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",vp(e))for(var s=0;s<e.length;s++){i=e[s];var c=r+Tl(i,s);a+=Ea(i,t,n,c,o)}else if(c=dv(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=r+Tl(i,s++),a+=Ea(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ea(e,t,n){if(e==null)return e;var r=[],o=0;return Ea(e,r,"","",function(i){return t.call(n,i,o++)}),r}function mv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var at={current:null},ja={transition:null},hv={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:ja,ReactCurrentOwner:Ou};function Ym(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:ea,forEach:function(e,t,n){ea(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ea(e,function(){t++}),t},toArray:function(e){return ea(e,function(t){return t})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=po;ne.Fragment=nv;ne.Profiler=ov;ne.PureComponent=Pu;ne.StrictMode=rv;ne.Suspense=lv;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;ne.act=Ym;ne.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gm({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Ou.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)Qm.call(t,c)&&!Km.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:Ei,type:e.type,key:o,ref:i,props:r,_owner:a}};ne.createContext=function(e){return e={$$typeof:av,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:iv,_context:e},e.Consumer=e};ne.createElement=qm;ne.createFactory=function(e){var t=qm.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:sv,render:e}};ne.isValidElement=Au;ne.lazy=function(e){return{$$typeof:uv,_payload:{_status:-1,_result:e},_init:mv}};ne.memo=function(e,t){return{$$typeof:cv,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=ja.transition;ja.transition={};try{e()}finally{ja.transition=t}};ne.unstable_act=Ym;ne.useCallback=function(e,t){return at.current.useCallback(e,t)};ne.useContext=function(e){return at.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return at.current.useDeferredValue(e)};ne.useEffect=function(e,t){return at.current.useEffect(e,t)};ne.useId=function(){return at.current.useId()};ne.useImperativeHandle=function(e,t,n){return at.current.useImperativeHandle(e,t,n)};ne.useInsertionEffect=function(e,t){return at.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return at.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return at.current.useMemo(e,t)};ne.useReducer=function(e,t,n){return at.current.useReducer(e,t,n)};ne.useRef=function(e){return at.current.useRef(e)};ne.useState=function(e){return at.current.useState(e)};ne.useSyncExternalStore=function(e,t,n){return at.current.useSyncExternalStore(e,t,n)};ne.useTransition=function(){return at.current.useTransition()};ne.version="18.3.1";Wm.exports=ne;var b=Wm.exports;const pe=js(b),Wa=Zy({__proto__:null,default:pe},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=b,yv=Symbol.for("react.element"),vv=Symbol.for("react.fragment"),xv=Object.prototype.hasOwnProperty,wv=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bv={key:!0,ref:!0,__self:!0,__source:!0};function Xm(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)xv.call(t,r)&&!bv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:yv,type:e,key:i,ref:a,props:o,_owner:wv.current}}_s.Fragment=vv;_s.jsx=Xm;_s.jsxs=Xm;Um.exports=_s;var f=Um.exports,yc={},Zm={exports:{}},St={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,A){var T=N.length;N.push(A);e:for(;0<T;){var J=T-1>>>1,P=N[J];if(0<o(P,A))N[J]=A,N[T]=P,T=J;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],T=N.pop();if(T!==A){N[0]=T;e:for(var J=0,P=N.length,F=P>>>1;J<F;){var C=2*(J+1)-1,Y=N[C],S=C+1,V=N[S];if(0>o(Y,T))S<P&&0>o(V,Y)?(N[J]=V,N[S]=T,J=S):(N[J]=Y,N[C]=T,J=C);else if(S<P&&0>o(V,T))N[J]=V,N[S]=T,J=S;else break e}}return A}function o(N,A){var T=N.sortIndex-A.sortIndex;return T!==0?T:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],l=[],u=1,d=null,p=3,h=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var A=n(l);A!==null;){if(A.callback===null)r(l);else if(A.startTime<=N)r(l),A.sortIndex=A.expirationTime,t(c,A);else break;A=n(l)}}function k(N){if(v=!1,x(N),!y)if(n(c)!==null)y=!0,G(E);else{var A=n(l);A!==null&&re(k,A.startTime-N)}}function E(N,A){y=!1,v&&(v=!1,g($),$=-1),h=!0;var T=p;try{for(x(A),d=n(c);d!==null&&(!(d.expirationTime>A)||N&&!z());){var J=d.callback;if(typeof J=="function"){d.callback=null,p=d.priorityLevel;var P=J(d.expirationTime<=A);A=e.unstable_now(),typeof P=="function"?d.callback=P:d===n(c)&&r(c),x(A)}else r(c);d=n(c)}if(d!==null)var F=!0;else{var C=n(l);C!==null&&re(k,C.startTime-A),F=!1}return F}finally{d=null,p=T,h=!1}}var _=!1,R=null,$=-1,L=5,O=-1;function z(){return!(e.unstable_now()-O<L)}function U(){if(R!==null){var N=e.unstable_now();O=N;var A=!0;try{A=R(!0,N)}finally{A?Q():(_=!1,R=null)}}else _=!1}var Q;if(typeof m=="function")Q=function(){m(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,W=q.port2;q.port1.onmessage=U,Q=function(){W.postMessage(null)}}else Q=function(){w(U,0)};function G(N){R=N,_||(_=!0,Q())}function re(N,A){$=w(function(){N(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,G(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var T=p;p=A;try{return N()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=p;p=N;try{return A()}finally{p=T}},e.unstable_scheduleCallback=function(N,A,T){var J=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?J+T:J):T=J,N){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=T+P,N={id:u++,callback:A,priorityLevel:N,startTime:T,expirationTime:P,sortIndex:-1},T>J?(N.sortIndex=T,t(l,N),n(c)===null&&N===n(l)&&(v?(g($),$=-1):v=!0,re(k,T-J))):(N.sortIndex=P,t(c,N),y||h||(y=!0,G(E))),N},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(N){var A=p;return function(){var T=p;p=A;try{return N.apply(this,arguments)}finally{p=T}}}})(th);eh.exports=th;var Sv=eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=b,wt=Sv;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Yo={};function hr(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(Yo[e]=t,e=0;e<t.length;e++)nh.add(t[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},bp={};function Ev(e){return vc.call(bp,e)?!0:vc.call(wp,e)?!1:Cv.test(e)?bp[e]=!0:(wp[e]=!0,!1)}function jv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _v(e,t,n,r){if(t===null||typeof t>"u"||jv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){qe[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];qe[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){qe[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){qe[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){qe[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){qe[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){qe[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){qe[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){qe[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Mu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Iu,Mu);qe[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Iu,Mu);qe[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Iu,Mu);qe[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){qe[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});qe.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){qe[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nu(e,t,n,r){var o=qe.hasOwnProperty(t)?qe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_v(t,n,o,r)&&(n=null),r||o===null?Ev(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var xn=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),xc=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),oh=Symbol.for("react.context"),Lu=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),bc=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),ih=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function So(e){return e===null||typeof e!="object"?null:(e=Sp&&e[Sp]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Ol;function Ao(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Al=!1;function Il(e,t){if(!e||Al)return"";Al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var o=l.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{Al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ao(e):""}function Rv(e){switch(e.tag){case 5:return Ao(e.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return e=Il(e.type,!1),e;case 11:return e=Il(e.type.render,!1),e;case 1:return e=Il(e.type,!0),e;default:return""}}function Sc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case Or:return"Portal";case xc:return"Profiler";case zu:return"StrictMode";case wc:return"Suspense";case bc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case rh:return(e._context.displayName||"Context")+".Provider";case Lu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Du:return t=e.displayName||null,t!==null?t:Sc(e.type)||"Memo";case Cn:t=e._payload,e=e._init;try{return Sc(e(t))}catch{}}return null}function $v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(t);case 8:return t===zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ah(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Pv(e){var t=ah(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function na(e){e._valueTracker||(e._valueTracker=Pv(e))}function sh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ah(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ha(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kc(e,t){var n=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lh(e,t){t=t.checked,t!=null&&Nu(e,"checked",t,!1)}function Cc(e,t){lh(e,t);var n=Wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ec(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ec(e,t.type,Wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ec(e,t,n){(t!=="number"||Ha(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Io=Array.isArray;function Gr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function jc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ep(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Io(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wn(n)}}function ch(e,t){var n=Wn(t.value),r=Wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function jp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _c(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ra,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ra=ra||document.createElement("div"),ra.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ra.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tv=["Webkit","ms","Moz","O"];Object.keys(Lo).forEach(function(e){Tv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Lo[t]=Lo[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Lo.hasOwnProperty(e)&&Lo[e]?(""+t).trim():t+"px"}function fh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ov=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(e,t){if(t){if(Ov[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function $c(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pc=null;function Fu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tc=null,Jr=null,Vr=null;function _p(e){if(e=Ri(e)){if(typeof Tc!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Os(t),Tc(e.stateNode,e.type,t))}}function mh(e){Jr?Vr?Vr.push(e):Vr=[e]:Jr=e}function hh(){if(Jr){var e=Jr,t=Vr;if(Vr=Jr=null,_p(e),t)for(e=0;e<t.length;e++)_p(t[e])}}function gh(e,t){return e(t)}function yh(){}var Ml=!1;function vh(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return gh(e,t,n)}finally{Ml=!1,(Jr!==null||Vr!==null)&&(yh(),hh())}}function Zo(e,t){var n=e.stateNode;if(n===null)return null;var r=Os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Oc=!1;if(fn)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Oc=!1}function Av(e,t,n,r,o,i,a,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(u){this.onError(u)}}var Do=!1,Ga=null,Ja=!1,Ac=null,Iv={onError:function(e){Do=!0,Ga=e}};function Mv(e,t,n,r,o,i,a,s,c){Do=!1,Ga=null,Av.apply(Iv,arguments)}function Nv(e,t,n,r,o,i,a,s,c){if(Mv.apply(this,arguments),Do){if(Do){var l=Ga;Do=!1,Ga=null}else throw Error(M(198));Ja||(Ja=!0,Ac=l)}}function gr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rp(e){if(gr(e)!==e)throw Error(M(188))}function zv(e){var t=e.alternate;if(!t){if(t=gr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Rp(o),e;if(i===r)return Rp(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function wh(e){return e=zv(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var Sh=wt.unstable_scheduleCallback,$p=wt.unstable_cancelCallback,Lv=wt.unstable_shouldYield,Dv=wt.unstable_requestPaint,Te=wt.unstable_now,Fv=wt.unstable_getCurrentPriorityLevel,Bu=wt.unstable_ImmediatePriority,kh=wt.unstable_UserBlockingPriority,Va=wt.unstable_NormalPriority,Bv=wt.unstable_LowPriority,Ch=wt.unstable_IdlePriority,Rs=null,tn=null;function Uv(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Rs,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Gv,Wv=Math.log,Hv=Math.LN2;function Gv(e){return e>>>=0,e===0?32:31-(Wv(e)/Hv|0)|0}var oa=64,ia=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Mo(s):(i&=a,i!==0&&(r=Mo(i)))}else a=n&~o,a!==0?r=Mo(a):i!==0&&(r=Mo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Jv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Gt(i),s=1<<a,c=o[a];c===-1?(!(s&n)||s&r)&&(o[a]=Jv(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Ic(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eh(){var e=oa;return oa<<=1,!(oa&4194240)&&(oa=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ji(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function Qv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Uu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ue=0;function jh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _h,Wu,Rh,$h,Ph,Mc=!1,aa=[],On=null,An=null,In=null,ei=new Map,ti=new Map,jn=[],Kv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":In=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function Co(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ri(t),t!==null&&Wu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function qv(e,t,n,r,o){switch(t){case"focusin":return On=Co(On,e,t,n,r,o),!0;case"dragenter":return An=Co(An,e,t,n,r,o),!0;case"mouseover":return In=Co(In,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ei.set(i,Co(ei.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ti.set(i,Co(ti.get(i)||null,e,t,n,r,o)),!0}return!1}function Th(e){var t=rr(e.target);if(t!==null){var n=gr(t);if(n!==null){if(t=n.tag,t===13){if(t=xh(n),t!==null){e.blockedOn=t,Ph(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pc=r,n.target.dispatchEvent(r),Pc=null}else return t=Ri(n),t!==null&&Wu(t),e.blockedOn=n,!1;t.shift()}return!0}function Tp(e,t,n){_a(e)&&n.delete(t)}function Yv(){Mc=!1,On!==null&&_a(On)&&(On=null),An!==null&&_a(An)&&(An=null),In!==null&&_a(In)&&(In=null),ei.forEach(Tp),ti.forEach(Tp)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Mc||(Mc=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,Yv)))}function ni(e){function t(o){return Eo(o,e)}if(0<aa.length){Eo(aa[0],e);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(On!==null&&Eo(On,e),An!==null&&Eo(An,e),In!==null&&Eo(In,e),ei.forEach(t),ti.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Th(n),n.blockedOn===null&&jn.shift()}var Qr=xn.ReactCurrentBatchConfig,Ka=!0;function Xv(e,t,n,r){var o=ue,i=Qr.transition;Qr.transition=null;try{ue=1,Hu(e,t,n,r)}finally{ue=o,Qr.transition=i}}function Zv(e,t,n,r){var o=ue,i=Qr.transition;Qr.transition=null;try{ue=4,Hu(e,t,n,r)}finally{ue=o,Qr.transition=i}}function Hu(e,t,n,r){if(Ka){var o=Nc(e,t,n,r);if(o===null)Jl(e,t,r,qa,n),Pp(e,r);else if(qv(o,e,t,n,r))r.stopPropagation();else if(Pp(e,r),t&4&&-1<Kv.indexOf(e)){for(;o!==null;){var i=Ri(o);if(i!==null&&_h(i),i=Nc(e,t,n,r),i===null&&Jl(e,t,r,qa,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Jl(e,t,r,null,n)}}var qa=null;function Nc(e,t,n,r){if(qa=null,e=Fu(r),e=rr(e),e!==null)if(t=gr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qa=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fv()){case Bu:return 1;case kh:return 4;case Va:case Bv:return 16;case Ch:return 536870912;default:return 16}default:return 16}}var $n=null,Gu=null,Ra=null;function Ah(){if(Ra)return Ra;var e,t=Gu,n=t.length,r,o="value"in $n?$n.value:$n.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Ra=o.slice(e,1<r?1-r:void 0)}function $a(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sa(){return!0}function Op(){return!1}function kt(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sa:Op,this.isPropagationStopped=Op,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),t}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=kt(fo),_i=Ee({},fo,{view:0,detail:0}),e1=kt(_i),zl,Ll,jo,$s=Ee({},_i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(zl=e.screenX-jo.screenX,Ll=e.screenY-jo.screenY):Ll=zl=0,jo=e),zl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Ap=kt($s),t1=Ee({},$s,{dataTransfer:0}),n1=kt(t1),r1=Ee({},_i,{relatedTarget:0}),Dl=kt(r1),o1=Ee({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),i1=kt(o1),a1=Ee({},fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s1=kt(a1),l1=Ee({},fo,{data:0}),Ip=kt(l1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function Vu(){return p1}var f1=Ee({},_i,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$a(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?u1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(e){return e.type==="keypress"?$a(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$a(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=kt(f1),h1=Ee({},$s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=kt(h1),g1=Ee({},_i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),y1=kt(g1),v1=Ee({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=kt(v1),w1=Ee({},$s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),b1=kt(w1),S1=[9,13,27,32],Qu=fn&&"CompositionEvent"in window,Fo=null;fn&&"documentMode"in document&&(Fo=document.documentMode);var k1=fn&&"TextEvent"in window&&!Fo,Ih=fn&&(!Qu||Fo&&8<Fo&&11>=Fo),Np=" ",zp=!1;function Mh(e,t){switch(e){case"keyup":return S1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function C1(e,t){switch(e){case"compositionend":return Nh(t);case"keypress":return t.which!==32?null:(zp=!0,Np);case"textInput":return e=t.data,e===Np&&zp?null:e;default:return null}}function E1(e,t){if(Ir)return e==="compositionend"||!Qu&&Mh(e,t)?(e=Ah(),Ra=Gu=$n=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ih&&t.locale!=="ko"?null:t.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!j1[e.type]:t==="textarea"}function zh(e,t,n,r){mh(r),t=Ya(t,"onChange"),0<t.length&&(n=new Ju("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bo=null,ri=null;function _1(e){Qh(e,0)}function Ps(e){var t=zr(e);if(sh(t))return e}function R1(e,t){if(e==="change")return t}var Lh=!1;if(fn){var Fl;if(fn){var Bl="oninput"in document;if(!Bl){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Bl=typeof Dp.oninput=="function"}Fl=Bl}else Fl=!1;Lh=Fl&&(!document.documentMode||9<document.documentMode)}function Fp(){Bo&&(Bo.detachEvent("onpropertychange",Dh),ri=Bo=null)}function Dh(e){if(e.propertyName==="value"&&Ps(ri)){var t=[];zh(t,ri,e,Fu(e)),vh(_1,t)}}function $1(e,t,n){e==="focusin"?(Fp(),Bo=t,ri=n,Bo.attachEvent("onpropertychange",Dh)):e==="focusout"&&Fp()}function P1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ps(ri)}function T1(e,t){if(e==="click")return Ps(t)}function O1(e,t){if(e==="input"||e==="change")return Ps(t)}function A1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Vt=typeof Object.is=="function"?Object.is:A1;function oi(e,t){if(Vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vc.call(t,o)||!Vt(e[o],t[o]))return!1}return!0}function Bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,t){var n=Bp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function Fh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bh(){for(var e=window,t=Ha();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ha(e.document)}return t}function Ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function I1(e){var t=Bh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fh(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Up(n,i);var a=Up(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var M1=fn&&"documentMode"in document&&11>=document.documentMode,Mr=null,zc=null,Uo=null,Lc=!1;function Wp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Lc||Mr==null||Mr!==Ha(r)||(r=Mr,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&oi(Uo,r)||(Uo=r,r=Ya(zc,"onSelect"),0<r.length&&(t=new Ju("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function la(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nr={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},Ul={},Uh={};fn&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ts(e){if(Ul[e])return Ul[e];if(!Nr[e])return e;var t=Nr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uh)return Ul[e]=t[n];return e}var Wh=Ts("animationend"),Hh=Ts("animationiteration"),Gh=Ts("animationstart"),Jh=Ts("transitionend"),Vh=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Vh.set(e,t),hr(t,[e])}for(var Wl=0;Wl<Hp.length;Wl++){var Hl=Hp[Wl],N1=Hl.toLowerCase(),z1=Hl[0].toUpperCase()+Hl.slice(1);Gn(N1,"on"+z1)}Gn(Wh,"onAnimationEnd");Gn(Hh,"onAnimationIteration");Gn(Gh,"onAnimationStart");Gn("dblclick","onDoubleClick");Gn("focusin","onFocus");Gn("focusout","onBlur");Gn(Jh,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L1=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function Gp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nv(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;Gp(o,s,l),i=c}else for(a=0;a<r.length;a++){if(s=r[a],c=s.instance,l=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;Gp(o,s,l),i=c}}}if(Ja)throw e=Ac,Ja=!1,Ac=null,e}function ye(e,t){var n=t[Wc];n===void 0&&(n=t[Wc]=new Set);var r=e+"__bubble";n.has(r)||(Kh(t,e,2,!1),n.add(r))}function Gl(e,t,n){var r=0;t&&(r|=4),Kh(n,e,r,t)}var ca="_reactListening"+Math.random().toString(36).slice(2);function ii(e){if(!e[ca]){e[ca]=!0,nh.forEach(function(n){n!=="selectionchange"&&(L1.has(n)||Gl(n,!1,e),Gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ca]||(t[ca]=!0,Gl("selectionchange",!1,t))}}function Kh(e,t,n,r){switch(Oh(t)){case 1:var o=Xv;break;case 4:o=Zv;break;default:o=Hu}n=o.bind(null,t,n,e),o=void 0,!Oc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=rr(s),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}s=s.parentNode}}r=r.return}vh(function(){var l=i,u=Fu(n),d=[];e:{var p=Vh.get(e);if(p!==void 0){var h=Ju,y=e;switch(e){case"keypress":if($a(n)===0)break e;case"keydown":case"keyup":h=m1;break;case"focusin":y="focus",h=Dl;break;case"focusout":y="blur",h=Dl;break;case"beforeblur":case"afterblur":h=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=y1;break;case Wh:case Hh:case Gh:h=i1;break;case Jh:h=x1;break;case"scroll":h=e1;break;case"wheel":h=b1;break;case"copy":case"cut":case"paste":h=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Mp}var v=(t&4)!==0,w=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var m=l,x;m!==null;){x=m;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,g!==null&&(k=Zo(m,g),k!=null&&v.push(ai(m,k,x)))),w)break;m=m.return}0<v.length&&(p=new h(p,y,null,n,u),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==Pc&&(y=n.relatedTarget||n.fromElement)&&(rr(y)||y[mn]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=l,y=y?rr(y):null,y!==null&&(w=gr(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=l),h!==y)){if(v=Ap,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Mp,k="onPointerLeave",g="onPointerEnter",m="pointer"),w=h==null?p:zr(h),x=y==null?p:zr(y),p=new v(k,m+"leave",h,n,u),p.target=w,p.relatedTarget=x,k=null,rr(u)===l&&(v=new v(g,m+"enter",y,n,u),v.target=x,v.relatedTarget=w,k=v),w=k,h&&y)t:{for(v=h,g=y,m=0,x=v;x;x=Sr(x))m++;for(x=0,k=g;k;k=Sr(k))x++;for(;0<m-x;)v=Sr(v),m--;for(;0<x-m;)g=Sr(g),x--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Sr(v),g=Sr(g)}v=null}else v=null;h!==null&&Jp(d,p,h,v,!1),y!==null&&w!==null&&Jp(d,w,y,v,!0)}}e:{if(p=l?zr(l):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=R1;else if(Lp(p))if(Lh)E=O1;else{E=P1;var _=$1}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=T1);if(E&&(E=E(e,l))){zh(d,E,n,u);break e}_&&_(e,p,l),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Ec(p,"number",p.value)}switch(_=l?zr(l):window,e){case"focusin":(Lp(_)||_.contentEditable==="true")&&(Mr=_,zc=l,Uo=null);break;case"focusout":Uo=zc=Mr=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,Wp(d,n,u);break;case"selectionchange":if(M1)break;case"keydown":case"keyup":Wp(d,n,u)}var R;if(Qu)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ir?Mh(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Ih&&n.locale!=="ko"&&(Ir||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ir&&(R=Ah()):($n=u,Gu="value"in $n?$n.value:$n.textContent,Ir=!0)),_=Ya(l,$),0<_.length&&($=new Ip($,e,null,n,u),d.push({event:$,listeners:_}),R?$.data=R:(R=Nh(n),R!==null&&($.data=R)))),(R=k1?C1(e,n):E1(e,n))&&(l=Ya(l,"onBeforeInput"),0<l.length&&(u=new Ip("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:l}),u.data=R))}Qh(d,t)})}function ai(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ya(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Zo(e,n),i!=null&&r.unshift(ai(e,i,o)),i=Zo(e,t),i!=null&&r.push(ai(e,i,o))),e=e.return}return r}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jp(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,o?(c=Zo(n,i),c!=null&&a.unshift(ai(n,c,s))):o||(c=Zo(n,i),c!=null&&a.push(ai(n,c,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var D1=/\r\n?/g,F1=/\u0000|\uFFFD/g;function Vp(e){return(typeof e=="string"?e:""+e).replace(D1,`
`).replace(F1,"")}function ua(e,t,n){if(t=Vp(t),Vp(e)!==t&&n)throw Error(M(425))}function Xa(){}var Dc=null,Fc=null;function Bc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,B1=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,U1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(e){return Qp.resolve(null).then(e).catch(W1)}:Uc;function W1(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ni(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),en="__reactFiber$"+mo,si="__reactProps$"+mo,mn="__reactContainer$"+mo,Wc="__reactEvents$"+mo,H1="__reactListeners$"+mo,G1="__reactHandles$"+mo;function rr(e){var t=e[en];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mn]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Kp(e);e!==null;){if(n=e[en])return n;e=Kp(e)}return t}e=n,n=e.parentNode}return null}function Ri(e){return e=e[en]||e[mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Os(e){return e[si]||null}var Hc=[],Lr=-1;function Jn(e){return{current:e}}function ve(e){0>Lr||(e.current=Hc[Lr],Hc[Lr]=null,Lr--)}function he(e,t){Lr++,Hc[Lr]=e.current,e.current=t}var Hn={},nt=Jn(Hn),ut=Jn(!1),lr=Hn;function to(e,t){var n=e.type.contextTypes;if(!n)return Hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function dt(e){return e=e.childContextTypes,e!=null}function Za(){ve(ut),ve(nt)}function qp(e,t,n){if(nt.current!==Hn)throw Error(M(168));he(nt,t),he(ut,n)}function qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(M(108,$v(e)||"Unknown",o));return Ee({},n,r)}function es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hn,lr=nt.current,he(nt,e),he(ut,ut.current),!0}function Yp(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=qh(e,t,lr),r.__reactInternalMemoizedMergedChildContext=e,ve(ut),ve(nt),he(nt,e)):ve(ut),he(ut,n)}var ln=null,As=!1,Ql=!1;function Yh(e){ln===null?ln=[e]:ln.push(e)}function J1(e){As=!0,Yh(e)}function Vn(){if(!Ql&&ln!==null){Ql=!0;var e=0,t=ue;try{var n=ln;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,As=!1}catch(o){throw ln!==null&&(ln=ln.slice(e+1)),Sh(Bu,Vn),o}finally{ue=t,Ql=!1}}return null}var Dr=[],Fr=0,ts=null,ns=0,Rt=[],$t=0,cr=null,cn=1,un="";function Zn(e,t){Dr[Fr++]=ns,Dr[Fr++]=ts,ts=e,ns=t}function Xh(e,t,n){Rt[$t++]=cn,Rt[$t++]=un,Rt[$t++]=cr,cr=e;var r=cn;e=un;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var i=32-Gt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,cn=1<<32-Gt(t)+o|n<<o|r,un=i+e}else cn=1<<i|n<<o|r,un=e}function qu(e){e.return!==null&&(Zn(e,1),Xh(e,1,0))}function Yu(e){for(;e===ts;)ts=Dr[--Fr],Dr[Fr]=null,ns=Dr[--Fr],Dr[Fr]=null;for(;e===cr;)cr=Rt[--$t],Rt[$t]=null,un=Rt[--$t],Rt[$t]=null,cn=Rt[--$t],Rt[$t]=null}var vt=null,yt=null,be=!1,Wt=null;function Zh(e,t){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,yt=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,yt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cr!==null?{id:cn,overflow:un}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,vt=e,yt=null,!0):!1;default:return!1}}function Gc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jc(e){if(be){var t=yt;if(t){var n=t;if(!Xp(e,t)){if(Gc(e))throw Error(M(418));t=Mn(n.nextSibling);var r=vt;t&&Xp(e,t)?Zh(r,n):(e.flags=e.flags&-4097|2,be=!1,vt=e)}}else{if(Gc(e))throw Error(M(418));e.flags=e.flags&-4097|2,be=!1,vt=e}}}function Zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function da(e){if(e!==vt)return!1;if(!be)return Zp(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bc(e.type,e.memoizedProps)),t&&(t=yt)){if(Gc(e))throw eg(),Error(M(418));for(;t;)Zh(e,t),t=Mn(t.nextSibling)}if(Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){yt=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}yt=null}}else yt=vt?Mn(e.stateNode.nextSibling):null;return!0}function eg(){for(var e=yt;e;)e=Mn(e.nextSibling)}function no(){yt=vt=null,be=!1}function Xu(e){Wt===null?Wt=[e]:Wt.push(e)}var V1=xn.ReactCurrentBatchConfig;function _o(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function pa(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ef(e){var t=e._init;return t(e._payload)}function tg(e){function t(g,m){if(e){var x=g.deletions;x===null?(g.deletions=[m],g.flags|=16):x.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=Dn(g,m),g.index=0,g.sibling=null,g}function i(g,m,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<m?(g.flags|=2,m):x):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,x,k){return m===null||m.tag!==6?(m=tc(x,g.mode,k),m.return=g,m):(m=o(m,x),m.return=g,m)}function c(g,m,x,k){var E=x.type;return E===Ar?u(g,m,x.props.children,k,x.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Cn&&ef(E)===m.type)?(k=o(m,x.props),k.ref=_o(g,m,x),k.return=g,k):(k=Na(x.type,x.key,x.props,null,g.mode,k),k.ref=_o(g,m,x),k.return=g,k)}function l(g,m,x,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=nc(x,g.mode,k),m.return=g,m):(m=o(m,x.children||[]),m.return=g,m)}function u(g,m,x,k,E){return m===null||m.tag!==7?(m=sr(x,g.mode,k,E),m.return=g,m):(m=o(m,x),m.return=g,m)}function d(g,m,x){if(typeof m=="string"&&m!==""||typeof m=="number")return m=tc(""+m,g.mode,x),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:return x=Na(m.type,m.key,m.props,null,g.mode,x),x.ref=_o(g,null,m),x.return=g,x;case Or:return m=nc(m,g.mode,x),m.return=g,m;case Cn:var k=m._init;return d(g,k(m._payload),x)}if(Io(m)||So(m))return m=sr(m,g.mode,x,null),m.return=g,m;pa(g,m)}return null}function p(g,m,x,k){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return E!==null?null:s(g,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:return x.key===E?c(g,m,x,k):null;case Or:return x.key===E?l(g,m,x,k):null;case Cn:return E=x._init,p(g,m,E(x._payload),k)}if(Io(x)||So(x))return E!==null?null:u(g,m,x,k,null);pa(g,x)}return null}function h(g,m,x,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(x)||null,s(m,g,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ta:return g=g.get(k.key===null?x:k.key)||null,c(m,g,k,E);case Or:return g=g.get(k.key===null?x:k.key)||null,l(m,g,k,E);case Cn:var _=k._init;return h(g,m,x,_(k._payload),E)}if(Io(k)||So(k))return g=g.get(x)||null,u(m,g,k,E,null);pa(m,k)}return null}function y(g,m,x,k){for(var E=null,_=null,R=m,$=m=0,L=null;R!==null&&$<x.length;$++){R.index>$?(L=R,R=null):L=R.sibling;var O=p(g,R,x[$],k);if(O===null){R===null&&(R=L);break}e&&R&&O.alternate===null&&t(g,R),m=i(O,m,$),_===null?E=O:_.sibling=O,_=O,R=L}if($===x.length)return n(g,R),be&&Zn(g,$),E;if(R===null){for(;$<x.length;$++)R=d(g,x[$],k),R!==null&&(m=i(R,m,$),_===null?E=R:_.sibling=R,_=R);return be&&Zn(g,$),E}for(R=r(g,R);$<x.length;$++)L=h(R,g,$,x[$],k),L!==null&&(e&&L.alternate!==null&&R.delete(L.key===null?$:L.key),m=i(L,m,$),_===null?E=L:_.sibling=L,_=L);return e&&R.forEach(function(z){return t(g,z)}),be&&Zn(g,$),E}function v(g,m,x,k){var E=So(x);if(typeof E!="function")throw Error(M(150));if(x=E.call(x),x==null)throw Error(M(151));for(var _=E=null,R=m,$=m=0,L=null,O=x.next();R!==null&&!O.done;$++,O=x.next()){R.index>$?(L=R,R=null):L=R.sibling;var z=p(g,R,O.value,k);if(z===null){R===null&&(R=L);break}e&&R&&z.alternate===null&&t(g,R),m=i(z,m,$),_===null?E=z:_.sibling=z,_=z,R=L}if(O.done)return n(g,R),be&&Zn(g,$),E;if(R===null){for(;!O.done;$++,O=x.next())O=d(g,O.value,k),O!==null&&(m=i(O,m,$),_===null?E=O:_.sibling=O,_=O);return be&&Zn(g,$),E}for(R=r(g,R);!O.done;$++,O=x.next())O=h(R,g,$,O.value,k),O!==null&&(e&&O.alternate!==null&&R.delete(O.key===null?$:O.key),m=i(O,m,$),_===null?E=O:_.sibling=O,_=O);return e&&R.forEach(function(U){return t(g,U)}),be&&Zn(g,$),E}function w(g,m,x,k){if(typeof x=="object"&&x!==null&&x.type===Ar&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:e:{for(var E=x.key,_=m;_!==null;){if(_.key===E){if(E=x.type,E===Ar){if(_.tag===7){n(g,_.sibling),m=o(_,x.props.children),m.return=g,g=m;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Cn&&ef(E)===_.type){n(g,_.sibling),m=o(_,x.props),m.ref=_o(g,_,x),m.return=g,g=m;break e}n(g,_);break}else t(g,_);_=_.sibling}x.type===Ar?(m=sr(x.props.children,g.mode,k,x.key),m.return=g,g=m):(k=Na(x.type,x.key,x.props,null,g.mode,k),k.ref=_o(g,m,x),k.return=g,g=k)}return a(g);case Or:e:{for(_=x.key;m!==null;){if(m.key===_)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(g,m.sibling),m=o(m,x.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=nc(x,g.mode,k),m.return=g,g=m}return a(g);case Cn:return _=x._init,w(g,m,_(x._payload),k)}if(Io(x))return y(g,m,x,k);if(So(x))return v(g,m,x,k);pa(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,x),m.return=g,g=m):(n(g,m),m=tc(x,g.mode,k),m.return=g,g=m),a(g)):n(g,m)}return w}var ro=tg(!0),ng=tg(!1),rs=Jn(null),os=null,Br=null,Zu=null;function ed(){Zu=Br=os=null}function td(e){var t=rs.current;ve(rs),e._currentValue=t}function Vc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Kr(e,t){os=e,Zu=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function At(e){var t=e._currentValue;if(Zu!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(os===null)throw Error(M(308));Br=e,os.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var or=null;function nd(e){or===null?or=[e]:or.push(e)}function rg(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,nd(t)):(n.next=o.next,o.next=n),t.interleaved=n,hn(e,r)}function hn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var En=!1;function rd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function og(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,hn(e,n)}return o=r.interleaved,o===null?(t.next=t,nd(r)):(t.next=o.next,o.next=t),r.interleaved=t,hn(e,n)}function Pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uu(e,n)}}function tf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function is(e,t,n,r){var o=e.updateQueue;En=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,l=c.next;c.next=null,a===null?i=l:a.next=l,a=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==a&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;a=0,u=l=c=null,s=i;do{var p=s.lane,h=s.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(p=t,h=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(h,d,p);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,p=typeof y=="function"?y.call(h,d,p):y,p==null)break e;d=Ee({},d,p);break e;case 2:En=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=h,c=d):u=u.next=h,a|=p;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;p=s,s=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(u===null&&(c=d),o.baseState=c,o.firstBaseUpdate=l,o.lastBaseUpdate=u,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dr|=a,e.lanes=a,e.memoizedState=d}}function nf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(M(191,o));o.call(r)}}}var $i={},nn=Jn($i),li=Jn($i),ci=Jn($i);function ir(e){if(e===$i)throw Error(M(174));return e}function od(e,t){switch(he(ci,t),he(li,e),he(nn,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_c(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_c(t,e)}ve(nn),he(nn,t)}function oo(){ve(nn),ve(li),ve(ci)}function ig(e){ir(ci.current);var t=ir(nn.current),n=_c(t,e.type);t!==n&&(he(li,e),he(nn,n))}function id(e){li.current===e&&(ve(nn),ve(li))}var ke=Jn(0);function as(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Kl=[];function ad(){for(var e=0;e<Kl.length;e++)Kl[e]._workInProgressVersionPrimary=null;Kl.length=0}var Ta=xn.ReactCurrentDispatcher,ql=xn.ReactCurrentBatchConfig,ur=0,Ce=null,Fe=null,Ue=null,ss=!1,Wo=!1,ui=0,Q1=0;function Xe(){throw Error(M(321))}function sd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vt(e[n],t[n]))return!1;return!0}function ld(e,t,n,r,o,i){if(ur=i,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ta.current=e===null||e.memoizedState===null?X1:Z1,e=n(r,o),Wo){i=0;do{if(Wo=!1,ui=0,25<=i)throw Error(M(301));i+=1,Ue=Fe=null,t.updateQueue=null,Ta.current=ex,e=n(r,o)}while(Wo)}if(Ta.current=ls,t=Fe!==null&&Fe.next!==null,ur=0,Ue=Fe=Ce=null,ss=!1,t)throw Error(M(300));return e}function cd(){var e=ui!==0;return ui=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Ce.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function It(){if(Fe===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=Ue===null?Ce.memoizedState:Ue.next;if(t!==null)Ue=t,Fe=e;else{if(e===null)throw Error(M(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},Ue===null?Ce.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function di(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=It(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,c=null,l=i;do{var u=l.lane;if((ur&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var d={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(s=c=d,a=r):c=c.next=d,Ce.lanes|=u,dr|=u}l=l.next}while(l!==null&&l!==i);c===null?a=r:c.next=s,Vt(r,t.memoizedState)||(ct=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ce.lanes|=i,dr|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xl(e){var t=It(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Vt(i,t.memoizedState)||(ct=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ag(){}function sg(e,t){var n=Ce,r=It(),o=t(),i=!Vt(r.memoizedState,o);if(i&&(r.memoizedState=o,ct=!0),r=r.queue,ud(ug.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,pi(9,cg.bind(null,n,r,o,t),void 0,null),He===null)throw Error(M(349));ur&30||lg(n,t,o)}return o}function lg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cg(e,t,n,r){t.value=n,t.getSnapshot=r,dg(t)&&pg(e)}function ug(e,t,n){return n(function(){dg(t)&&pg(e)})}function dg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Vt(e,n)}catch{return!0}}function pg(e){var t=hn(e,1);t!==null&&Jt(t,e,1,-1)}function rf(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:di,lastRenderedState:e},t.queue=e,e=e.dispatch=Y1.bind(null,Ce,e),[t.memoizedState,e]}function pi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fg(){return It().memoizedState}function Oa(e,t,n,r){var o=Yt();Ce.flags|=e,o.memoizedState=pi(1|t,n,void 0,r===void 0?null:r)}function Is(e,t,n,r){var o=It();r=r===void 0?null:r;var i=void 0;if(Fe!==null){var a=Fe.memoizedState;if(i=a.destroy,r!==null&&sd(r,a.deps)){o.memoizedState=pi(t,n,i,r);return}}Ce.flags|=e,o.memoizedState=pi(1|t,n,i,r)}function of(e,t){return Oa(8390656,8,e,t)}function ud(e,t){return Is(2048,8,e,t)}function mg(e,t){return Is(4,2,e,t)}function hg(e,t){return Is(4,4,e,t)}function gg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yg(e,t,n){return n=n!=null?n.concat([e]):null,Is(4,4,gg.bind(null,t,e),n)}function dd(){}function vg(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xg(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wg(e,t,n){return ur&21?(Vt(n,t)||(n=Eh(),Ce.lanes|=n,dr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=n)}function K1(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=ql.transition;ql.transition={};try{e(!1),t()}finally{ue=n,ql.transition=r}}function bg(){return It().memoizedState}function q1(e,t,n){var r=Ln(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sg(e))kg(t,n);else if(n=rg(e,t,n,r),n!==null){var o=it();Jt(n,e,r,o),Cg(n,t,r)}}function Y1(e,t,n){var r=Ln(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sg(e))kg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Vt(s,a)){var c=t.interleaved;c===null?(o.next=o,nd(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=rg(e,t,o,r),n!==null&&(o=it(),Jt(n,e,r,o),Cg(n,t,r))}}function Sg(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function kg(e,t){Wo=ss=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Uu(e,n)}}var ls={readContext:At,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},X1={readContext:At,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:At,useEffect:of,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oa(4194308,4,gg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oa(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q1.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:rf,useDebugValue:dd,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=rf(!1),t=e[0];return e=K1.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,o=Yt();if(be){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),He===null)throw Error(M(349));ur&30||lg(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,of(ug.bind(null,r,i,e),[e]),r.flags|=2048,pi(9,cg.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Yt(),t=He.identifierPrefix;if(be){var n=un,r=cn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ui++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Q1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Z1={readContext:At,useCallback:vg,useContext:At,useEffect:ud,useImperativeHandle:yg,useInsertionEffect:mg,useLayoutEffect:hg,useMemo:xg,useReducer:Yl,useRef:fg,useState:function(){return Yl(di)},useDebugValue:dd,useDeferredValue:function(e){var t=It();return wg(t,Fe.memoizedState,e)},useTransition:function(){var e=Yl(di)[0],t=It().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:sg,useId:bg,unstable_isNewReconciler:!1},ex={readContext:At,useCallback:vg,useContext:At,useEffect:ud,useImperativeHandle:yg,useInsertionEffect:mg,useLayoutEffect:hg,useMemo:xg,useReducer:Xl,useRef:fg,useState:function(){return Xl(di)},useDebugValue:dd,useDeferredValue:function(e){var t=It();return Fe===null?t.memoizedState=e:wg(t,Fe.memoizedState,e)},useTransition:function(){var e=Xl(di)[0],t=It().memoizedState;return[e,t]},useMutableSource:ag,useSyncExternalStore:sg,useId:bg,unstable_isNewReconciler:!1};function Bt(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ms={isMounted:function(e){return(e=e._reactInternals)?gr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),o=Ln(e),i=dn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nn(e,i,o),t!==null&&(Jt(t,e,o,r),Pa(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),o=Ln(e),i=dn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nn(e,i,o),t!==null&&(Jt(t,e,o,r),Pa(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=Ln(e),o=dn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nn(e,o,r),t!==null&&(Jt(t,e,r,n),Pa(t,e,r))}};function af(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!oi(n,r)||!oi(o,i):!0}function Eg(e,t,n){var r=!1,o=Hn,i=t.contextType;return typeof i=="object"&&i!==null?i=At(i):(o=dt(t)?lr:nt.current,r=t.contextTypes,i=(r=r!=null)?to(e,o):Hn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ms,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ms.enqueueReplaceState(t,t.state,null)}function Kc(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},rd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=At(i):(i=dt(t)?lr:nt.current,o.context=to(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Qc(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ms.enqueueReplaceState(o,o.state,null),is(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function io(e,t){try{var n="",r=t;do n+=Rv(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function jg(e,t,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){us||(us=!0,au=r),qc(e,t)},n}function _g(e,t,n){n=dn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){qc(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qc(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function lf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tx;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=hx.bind(null,e,t,n),t.then(e,e))}function cf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function uf(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dn(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var nx=xn.ReactCurrentOwner,ct=!1;function ot(e,t,n,r){t.child=e===null?ng(t,null,n,r):ro(t,e.child,n,r)}function df(e,t,n,r,o){n=n.render;var i=t.ref;return Kr(t,o),r=ld(e,t,n,r,i,o),n=cd(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&n&&qu(t),t.flags|=1,ot(e,t,r,o),t.child)}function pf(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!xd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rg(e,t,i,r,o)):(e=Na(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:oi,n(a,r)&&e.ref===t.ref)return gn(e,t,o)}return t.flags|=1,e=Dn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oi(i,r)&&e.ref===t.ref)if(ct=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,gn(e,t,o)}return Yc(e,t,n,r,o)}function $g(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Wr,ht),ht|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(Wr,ht),ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(Wr,ht),ht|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,he(Wr,ht),ht|=r;return ot(e,t,o,n),t.child}function Pg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yc(e,t,n,r,o){var i=dt(n)?lr:nt.current;return i=to(t,i),Kr(t,o),n=ld(e,t,n,r,i,o),r=cd(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gn(e,t,o)):(be&&r&&qu(t),t.flags|=1,ot(e,t,n,o),t.child)}function ff(e,t,n,r,o){if(dt(n)){var i=!0;es(t)}else i=!1;if(Kr(t,o),t.stateNode===null)Aa(e,t),Eg(t,n,r),Kc(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=At(l):(l=dt(n)?lr:nt.current,l=to(t,l));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||c!==l)&&sf(t,a,r,l),En=!1;var p=t.memoizedState;a.state=p,is(t,r,a,o),c=t.memoizedState,s!==r||p!==c||ut.current||En?(typeof u=="function"&&(Qc(t,n,u,r),c=t.memoizedState),(s=En||af(t,n,s,r,p,c,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=l,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,og(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:Bt(t.type,s),a.props=l,d=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=At(c):(c=dt(n)?lr:nt.current,c=to(t,c));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||p!==c)&&sf(t,a,r,c),En=!1,p=t.memoizedState,a.state=p,is(t,r,a,o);var y=t.memoizedState;s!==d||p!==y||ut.current||En?(typeof h=="function"&&(Qc(t,n,h,r),y=t.memoizedState),(l=En||af(t,n,l,r,p,y,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=l):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Xc(e,t,n,r,i,o)}function Xc(e,t,n,r,o,i){Pg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Yp(t,n,!1),gn(e,t,i);r=t.stateNode,nx.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ro(t,e.child,null,i),t.child=ro(t,null,s,i)):ot(e,t,s,i),t.memoizedState=r.state,o&&Yp(t,n,!0),t.child}function Tg(e){var t=e.stateNode;t.pendingContext?qp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qp(e,t.context,!1),od(e,t.containerInfo)}function mf(e,t,n,r,o){return no(),Xu(o),t.flags|=256,ot(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Og(e,t,n){var r=t.pendingProps,o=ke.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),he(ke,o&1),e===null)return Jc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ls(a,r,0,null),e=sr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eu(n),t.memoizedState=Zc,e):pd(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return rx(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Dn(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Dn(s,i):(i=sr(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?eu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Zc,r}return i=e.child,e=i.sibling,r=Dn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pd(e,t){return t=Ls({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fa(e,t,n,r){return r!==null&&Xu(r),ro(t,e.child,null,n),e=pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rx(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(M(422))),fa(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ls({mode:"visible",children:r.children},o,0,null),i=sr(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ro(t,e.child,null,a),t.child.memoizedState=eu(a),t.memoizedState=Zc,i);if(!(t.mode&1))return fa(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(M(419)),r=Zl(i,r,void 0),fa(e,t,a,r)}if(s=(a&e.childLanes)!==0,ct||s){if(r=He,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,hn(e,o),Jt(r,e,o,-1))}return vd(),r=Zl(Error(M(421))),fa(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gx.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,yt=Mn(o.nextSibling),vt=t,be=!0,Wt=null,e!==null&&(Rt[$t++]=cn,Rt[$t++]=un,Rt[$t++]=cr,cn=e.id,un=e.overflow,cr=t),t=pd(t,r.children),t.flags|=4096,t)}function hf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vc(e.return,t,n)}function ec(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ag(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ot(e,t,r.children,n),r=ke.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hf(e,n,t);else if(e.tag===19)hf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(ke,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&as(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ec(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&as(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ec(t,!0,n,null,i);break;case"together":ec(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Dn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ox(e,t,n){switch(t.tag){case 3:Tg(t),no();break;case 5:ig(t);break;case 1:dt(t.type)&&es(t);break;case 4:od(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;he(rs,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(ke,ke.current&1),t.flags|=128,null):n&t.child.childLanes?Og(e,t,n):(he(ke,ke.current&1),e=gn(e,t,n),e!==null?e.sibling:null);he(ke,ke.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ag(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),he(ke,ke.current),r)break;return null;case 22:case 23:return t.lanes=0,$g(e,t,n)}return gn(e,t,n)}var Ig,tu,Mg,Ng;Ig=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tu=function(){};Mg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ir(nn.current);var i=null;switch(n){case"input":o=kc(e,o),r=kc(e,r),i=[];break;case"select":o=Ee({},o,{value:void 0}),r=Ee({},r,{value:void 0}),i=[];break;case"textarea":o=jc(e,o),r=jc(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xa)}Rc(n,r);var a;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style"){var s=o[l];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yo.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var c=r[l];if(s=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&c!==s&&(c!=null||s!=null))if(l==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&ye("scroll",e),i||s===c||(i=[])):(i=i||[]).push(l,c))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};Ng=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ix(e,t,n){var r=t.pendingProps;switch(Yu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return dt(t.type)&&Za(),Ze(t),null;case 3:return r=t.stateNode,oo(),ve(ut),ve(nt),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(da(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(cu(Wt),Wt=null))),tu(e,t),Ze(t),null;case 5:id(t);var o=ir(ci.current);if(n=t.type,e!==null&&t.stateNode!=null)Mg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ze(t),null}if(e=ir(nn.current),da(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[en]=t,r[si]=i,e=(t.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(o=0;o<No.length;o++)ye(No[o],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":kp(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Ep(r,i),ye("invalid",r)}Rc(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ua(r.textContent,s,e),o=["children",""+s]):Yo.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ye("scroll",r)}switch(n){case"input":na(r),Cp(r,i,!0);break;case"textarea":na(r),jp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xa)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[en]=t,e[si]=r,Ig(e,t,!1,!1),t.stateNode=e;e:{switch(a=$c(n,r),n){case"dialog":ye("cancel",e),ye("close",e),o=r;break;case"iframe":case"object":case"embed":ye("load",e),o=r;break;case"video":case"audio":for(o=0;o<No.length;o++)ye(No[o],e);o=r;break;case"source":ye("error",e),o=r;break;case"img":case"image":case"link":ye("error",e),ye("load",e),o=r;break;case"details":ye("toggle",e),o=r;break;case"input":kp(e,r),o=kc(e,r),ye("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ee({},r,{value:void 0}),ye("invalid",e);break;case"textarea":Ep(e,r),o=jc(e,r),ye("invalid",e);break;default:o=r}Rc(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?fh(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dh(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Xo(e,c):typeof c=="number"&&Xo(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&ye("scroll",e):c!=null&&Nu(e,i,c,a))}switch(n){case"input":na(e),Cp(e,r,!1);break;case"textarea":na(e),jp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)Ng(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=ir(ci.current),ir(nn.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[en]=t,(i=r.nodeValue!==n)&&(e=vt,e!==null))switch(e.tag){case 3:ua(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ua(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=t,t.stateNode=r}return Ze(t),null;case 13:if(ve(ke),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&yt!==null&&t.mode&1&&!(t.flags&128))eg(),no(),t.flags|=98560,i=!1;else if(i=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[en]=t}else no(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ze(t),i=!1}else Wt!==null&&(cu(Wt),Wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ke.current&1?Be===0&&(Be=3):vd())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return oo(),tu(e,t),e===null&&ii(t.stateNode.containerInfo),Ze(t),null;case 10:return td(t.type._context),Ze(t),null;case 17:return dt(t.type)&&Za(),Ze(t),null;case 19:if(ve(ke),i=t.memoizedState,i===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Ro(i,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=as(e),a!==null){for(t.flags|=128,Ro(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(ke,ke.current&1|2),t.child}e=e.sibling}i.tail!==null&&Te()>ao&&(t.flags|=128,r=!0,Ro(i,!1),t.lanes=4194304)}else{if(!r)if(e=as(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!be)return Ze(t),null}else 2*Te()-i.renderingStartTime>ao&&n!==1073741824&&(t.flags|=128,r=!0,Ro(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Te(),t.sibling=null,n=ke.current,he(ke,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return yd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ht&1073741824&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function ax(e,t){switch(Yu(t),t.tag){case 1:return dt(t.type)&&Za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oo(),ve(ut),ve(nt),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return id(t),null;case 13:if(ve(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));no()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(ke),null;case 4:return oo(),null;case 10:return td(t.type._context),null;case 22:case 23:return yd(),null;case 24:return null;default:return null}}var ma=!1,tt=!1,sx=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function nu(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var gf=!1;function lx(e,t){if(Dc=Ka,e=Bh(),Ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,c=-1,l=0,u=0,d=e,p=null;t:for(;;){for(var h;d!==n||o!==0&&d.nodeType!==3||(s=a+o),d!==i||r!==0&&d.nodeType!==3||(c=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(h=d.firstChild)!==null;)p=d,d=h;for(;;){if(d===e)break t;if(p===n&&++l===o&&(s=a),p===i&&++u===r&&(c=a),(h=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=h}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fc={focusedElem:e,selectionRange:n},Ka=!1,H=t;H!==null;)if(t=H,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,H=e;else for(;H!==null;){t=H;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Bt(t.type,v),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(k){Pe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}return y=gf,gf=!1,y}function Ho(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&nu(t,n,i)}o=o.next}while(o!==r)}}function Ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ru(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zg(e){var t=e.alternate;t!==null&&(e.alternate=null,zg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[si],delete t[Wc],delete t[H1],delete t[G1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lg(e){return e.tag===5||e.tag===3||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xa));else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(iu(e,t,n),e=e.sibling;e!==null;)iu(e,t,n),e=e.sibling}var Ve=null,Ut=!1;function kn(e,t,n){for(n=n.child;n!==null;)Dg(e,t,n),n=n.sibling}function Dg(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Rs,n)}catch{}switch(n.tag){case 5:tt||Ur(n,t);case 6:var r=Ve,o=Ut;Ve=null,kn(e,t,n),Ve=r,Ut=o,Ve!==null&&(Ut?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Ut?(e=Ve,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),ni(e)):Vl(Ve,n.stateNode));break;case 4:r=Ve,o=Ut,Ve=n.stateNode.containerInfo,Ut=!0,kn(e,t,n),Ve=r,Ut=o;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&nu(n,t,a),o=o.next}while(o!==r)}kn(e,t,n);break;case 1:if(!tt&&(Ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Pe(n,t,s)}kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,kn(e,t,n),tt=r):kn(e,t,n);break;default:kn(e,t,n)}}function vf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sx),t.forEach(function(r){var o=yx.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:Ve=s.stateNode,Ut=!1;break e;case 3:Ve=s.stateNode.containerInfo,Ut=!0;break e;case 4:Ve=s.stateNode.containerInfo,Ut=!0;break e}s=s.return}if(Ve===null)throw Error(M(160));Dg(i,a,o),Ve=null,Ut=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(l){Pe(o,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fg(t,e),t=t.sibling}function Fg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),qt(e),r&4){try{Ho(3,e,e.return),Ns(3,e)}catch(v){Pe(e,e.return,v)}try{Ho(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Ft(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(Ft(t,e),qt(e),r&512&&n!==null&&Ur(n,n.return),e.flags&32){var o=e.stateNode;try{Xo(o,"")}catch(v){Pe(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&lh(o,i),$c(s,a);var l=$c(s,i);for(a=0;a<c.length;a+=2){var u=c[a],d=c[a+1];u==="style"?fh(o,d):u==="dangerouslySetInnerHTML"?dh(o,d):u==="children"?Xo(o,d):Nu(o,u,d,l)}switch(s){case"input":Cc(o,i);break;case"textarea":ch(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Gr(o,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Gr(o,!!i.multiple,i.defaultValue,!0):Gr(o,!!i.multiple,i.multiple?[]:"",!1))}o[si]=i}catch(v){Pe(e,e.return,v)}}break;case 6:if(Ft(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){Pe(e,e.return,v)}}break;case 3:if(Ft(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Ft(t,e),qt(e);break;case 13:Ft(t,e),qt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(hd=Te())),r&4&&vf(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(l=tt)||u,Ft(t,e),tt=l):Ft(t,e),qt(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!u&&e.mode&1)for(H=e,u=e.child;u!==null;){for(d=H=u;H!==null;){switch(p=H,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ho(4,p,p.return);break;case 1:Ur(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Pe(r,n,v)}}break;case 5:Ur(p,p.return);break;case 22:if(p.memoizedState!==null){wf(d);continue}}h!==null?(h.return=p,H=h):wf(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{o=d.stateNode,l?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=ph("display",a))}catch(v){Pe(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ft(t,e),qt(e),r&4&&vf(e);break;case 21:break;default:Ft(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lg(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xo(o,""),r.flags&=-33);var i=yf(e);iu(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=yf(e);ou(e,s,a);break;default:throw Error(M(161))}}catch(c){Pe(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function cx(e,t,n){H=e,Bg(e)}function Bg(e,t,n){for(var r=(e.mode&1)!==0;H!==null;){var o=H,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ma;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||tt;s=ma;var l=tt;if(ma=a,(tt=c)&&!l)for(H=o;H!==null;)a=H,c=a.child,a.tag===22&&a.memoizedState!==null?bf(o):c!==null?(c.return=a,H=c):bf(o);for(;i!==null;)H=i,Bg(i),i=i.sibling;H=o,ma=s,tt=l}xf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,H=i):xf(e)}}function xf(e){for(;H!==null;){var t=H;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Ns(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Bt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&nf(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nf(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ni(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}tt||t.flags&512&&ru(t)}catch(p){Pe(t,t.return,p)}}if(t===e){H=null;break}if(n=t.sibling,n!==null){n.return=t.return,H=n;break}H=t.return}}function wf(e){for(;H!==null;){var t=H;if(t===e){H=null;break}var n=t.sibling;if(n!==null){n.return=t.return,H=n;break}H=t.return}}function bf(e){for(;H!==null;){var t=H;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ns(4,t)}catch(c){Pe(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){Pe(t,o,c)}}var i=t.return;try{ru(t)}catch(c){Pe(t,i,c)}break;case 5:var a=t.return;try{ru(t)}catch(c){Pe(t,a,c)}}}catch(c){Pe(t,t.return,c)}if(t===e){H=null;break}var s=t.sibling;if(s!==null){s.return=t.return,H=s;break}H=t.return}}var ux=Math.ceil,cs=xn.ReactCurrentDispatcher,fd=xn.ReactCurrentOwner,Ot=xn.ReactCurrentBatchConfig,ie=0,He=null,ze=null,Ke=0,ht=0,Wr=Jn(0),Be=0,fi=null,dr=0,zs=0,md=0,Go=null,lt=null,hd=0,ao=1/0,sn=null,us=!1,au=null,zn=null,ha=!1,Pn=null,ds=0,Jo=0,su=null,Ia=-1,Ma=0;function it(){return ie&6?Te():Ia!==-1?Ia:Ia=Te()}function Ln(e){return e.mode&1?ie&2&&Ke!==0?Ke&-Ke:V1.transition!==null?(Ma===0&&(Ma=Eh()),Ma):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function Jt(e,t,n,r){if(50<Jo)throw Jo=0,su=null,Error(M(185));ji(e,n,r),(!(ie&2)||e!==He)&&(e===He&&(!(ie&2)&&(zs|=n),Be===4&&_n(e,Ke)),pt(e,r),n===1&&ie===0&&!(t.mode&1)&&(ao=Te()+500,As&&Vn()))}function pt(e,t){var n=e.callbackNode;Vv(e,t);var r=Qa(e,e===He?Ke:0);if(r===0)n!==null&&$p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$p(n),t===1)e.tag===0?J1(Sf.bind(null,e)):Yh(Sf.bind(null,e)),U1(function(){!(ie&6)&&Vn()}),n=null;else{switch(jh(r)){case 1:n=Bu;break;case 4:n=kh;break;case 16:n=Va;break;case 536870912:n=Ch;break;default:n=Va}n=Kg(n,Ug.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ug(e,t){if(Ia=-1,Ma=0,ie&6)throw Error(M(327));var n=e.callbackNode;if(qr()&&e.callbackNode!==n)return null;var r=Qa(e,e===He?Ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ps(e,r);else{t=r;var o=ie;ie|=2;var i=Hg();(He!==e||Ke!==t)&&(sn=null,ao=Te()+500,ar(e,t));do try{fx();break}catch(s){Wg(e,s)}while(!0);ed(),cs.current=i,ie=o,ze!==null?t=0:(He=null,Ke=0,t=Be)}if(t!==0){if(t===2&&(o=Ic(e),o!==0&&(r=o,t=lu(e,o))),t===1)throw n=fi,ar(e,0),_n(e,r),pt(e,Te()),n;if(t===6)_n(e,r);else{if(o=e.current.alternate,!(r&30)&&!dx(o)&&(t=ps(e,r),t===2&&(i=Ic(e),i!==0&&(r=i,t=lu(e,i))),t===1))throw n=fi,ar(e,0),_n(e,r),pt(e,Te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:er(e,lt,sn);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=hd+500-Te(),10<t)){if(Qa(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Uc(er.bind(null,e,lt,sn),t);break}er(e,lt,sn);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Gt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ux(r/1960))-r,10<r){e.timeoutHandle=Uc(er.bind(null,e,lt,sn),r);break}er(e,lt,sn);break;case 5:er(e,lt,sn);break;default:throw Error(M(329))}}}return pt(e,Te()),e.callbackNode===n?Ug.bind(null,e):null}function lu(e,t){var n=Go;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=ps(e,t),e!==2&&(t=lt,lt=n,t!==null&&cu(t)),e}function cu(e){lt===null?lt=e:lt.push.apply(lt,e)}function dx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~md,t&=~zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function Sf(e){if(ie&6)throw Error(M(327));qr();var t=Qa(e,0);if(!(t&1))return pt(e,Te()),null;var n=ps(e,t);if(e.tag!==0&&n===2){var r=Ic(e);r!==0&&(t=r,n=lu(e,r))}if(n===1)throw n=fi,ar(e,0),_n(e,t),pt(e,Te()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,lt,sn),pt(e,Te()),null}function gd(e,t){var n=ie;ie|=1;try{return e(t)}finally{ie=n,ie===0&&(ao=Te()+500,As&&Vn())}}function pr(e){Pn!==null&&Pn.tag===0&&!(ie&6)&&qr();var t=ie;ie|=1;var n=Ot.transition,r=ue;try{if(Ot.transition=null,ue=1,e)return e()}finally{ue=r,Ot.transition=n,ie=t,!(ie&6)&&Vn()}}function yd(){ht=Wr.current,ve(Wr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,B1(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Za();break;case 3:oo(),ve(ut),ve(nt),ad();break;case 5:id(r);break;case 4:oo();break;case 13:ve(ke);break;case 19:ve(ke);break;case 10:td(r.type._context);break;case 22:case 23:yd()}n=n.return}if(He=e,ze=e=Dn(e.current,null),Ke=ht=t,Be=0,fi=null,md=zs=dr=0,lt=Go=null,or!==null){for(t=0;t<or.length;t++)if(n=or[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}or=null}return e}function Wg(e,t){do{var n=ze;try{if(ed(),Ta.current=ls,ss){for(var r=Ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ss=!1}if(ur=0,Ue=Fe=Ce=null,Wo=!1,ui=0,fd.current=null,n===null||n.return===null){Be=1,fi=t,ze=null;break}e:{var i=e,a=n.return,s=n,c=t;if(t=Ke,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=s,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=cf(a);if(h!==null){h.flags&=-257,uf(h,a,s,i,t),h.mode&1&&lf(i,l,t),t=h,c=l;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){lf(i,l,t),vd();break e}c=Error(M(426))}}else if(be&&s.mode&1){var w=cf(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),uf(w,a,s,i,t),Xu(io(c,s));break e}}i=c=io(c,s),Be!==4&&(Be=2),Go===null?Go=[i]:Go.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=jg(i,c,t);tf(i,g);break e;case 1:s=c;var m=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zn===null||!zn.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=_g(i,s,t);tf(i,k);break e}}i=i.return}while(i!==null)}Jg(n)}catch(E){t=E,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function Hg(){var e=cs.current;return cs.current=ls,e===null?ls:e}function vd(){(Be===0||Be===3||Be===2)&&(Be=4),He===null||!(dr&268435455)&&!(zs&268435455)||_n(He,Ke)}function ps(e,t){var n=ie;ie|=2;var r=Hg();(He!==e||Ke!==t)&&(sn=null,ar(e,t));do try{px();break}catch(o){Wg(e,o)}while(!0);if(ed(),ie=n,cs.current=r,ze!==null)throw Error(M(261));return He=null,Ke=0,Be}function px(){for(;ze!==null;)Gg(ze)}function fx(){for(;ze!==null&&!Lv();)Gg(ze)}function Gg(e){var t=Qg(e.alternate,e,ht);e.memoizedProps=e.pendingProps,t===null?Jg(e):ze=t,fd.current=null}function Jg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ax(n,t),n!==null){n.flags&=32767,ze=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,ze=null;return}}else if(n=ix(n,t,ht),n!==null){ze=n;return}if(t=t.sibling,t!==null){ze=t;return}ze=t=e}while(t!==null);Be===0&&(Be=5)}function er(e,t,n){var r=ue,o=Ot.transition;try{Ot.transition=null,ue=1,mx(e,t,n,r)}finally{Ot.transition=o,ue=r}return null}function mx(e,t,n,r){do qr();while(Pn!==null);if(ie&6)throw Error(M(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qv(e,i),e===He&&(ze=He=null,Ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,Kg(Va,function(){return qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ot.transition,Ot.transition=null;var a=ue;ue=1;var s=ie;ie|=4,fd.current=null,lx(e,n),Fg(n,e),I1(Fc),Ka=!!Dc,Fc=Dc=null,e.current=n,cx(n),Dv(),ie=s,ue=a,Ot.transition=i}else e.current=n;if(ha&&(ha=!1,Pn=e,ds=o),i=e.pendingLanes,i===0&&(zn=null),Uv(n.stateNode),pt(e,Te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(us)throw us=!1,e=au,au=null,e;return ds&1&&e.tag!==0&&qr(),i=e.pendingLanes,i&1?e===su?Jo++:(Jo=0,su=e):Jo=0,Vn(),null}function qr(){if(Pn!==null){var e=jh(ds),t=Ot.transition,n=ue;try{if(Ot.transition=null,ue=16>e?16:e,Pn===null)var r=!1;else{if(e=Pn,Pn=null,ds=0,ie&6)throw Error(M(331));var o=ie;for(ie|=4,H=e.current;H!==null;){var i=H,a=i.child;if(H.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var l=s[c];for(H=l;H!==null;){var u=H;switch(u.tag){case 0:case 11:case 15:Ho(8,u,i)}var d=u.child;if(d!==null)d.return=u,H=d;else for(;H!==null;){u=H;var p=u.sibling,h=u.return;if(zg(u),u===l){H=null;break}if(p!==null){p.return=h,H=p;break}H=h}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}H=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,H=a;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ho(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,H=g;break e}H=i.return}}var m=e.current;for(H=m;H!==null;){a=H;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,H=x;else e:for(a=m;H!==null;){if(s=H,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ns(9,s)}}catch(E){Pe(s,s.return,E)}if(s===a){H=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,H=k;break e}H=s.return}}if(ie=o,Vn(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Rs,e)}catch{}r=!0}return r}finally{ue=n,Ot.transition=t}}return!1}function kf(e,t,n){t=io(n,t),t=jg(e,t,1),e=Nn(e,t,1),t=it(),e!==null&&(ji(e,1,t),pt(e,t))}function Pe(e,t,n){if(e.tag===3)kf(e,e,n);else for(;t!==null;){if(t.tag===3){kf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=io(n,e),e=_g(t,e,1),t=Nn(t,e,1),e=it(),t!==null&&(ji(t,1,e),pt(t,e));break}}t=t.return}}function hx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(Be===4||Be===3&&(Ke&130023424)===Ke&&500>Te()-hd?ar(e,0):md|=n),pt(e,t)}function Vg(e,t){t===0&&(e.mode&1?(t=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):t=1);var n=it();e=hn(e,t),e!==null&&(ji(e,t,n),pt(e,n))}function gx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vg(e,n)}function yx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Vg(e,n)}var Qg;Qg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ut.current)ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ct=!1,ox(e,t,n);ct=!!(e.flags&131072)}else ct=!1,be&&t.flags&1048576&&Xh(t,ns,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Aa(e,t),e=t.pendingProps;var o=to(t,nt.current);Kr(t,n),o=ld(null,t,r,e,o,n);var i=cd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,dt(r)?(i=!0,es(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,rd(t),o.updater=Ms,t.stateNode=o,o._reactInternals=t,Kc(t,r,e,n),t=Xc(null,t,r,!0,i,n)):(t.tag=0,be&&i&&qu(t),ot(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Aa(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=xx(r),e=Bt(r,e),o){case 0:t=Yc(null,t,r,e,n);break e;case 1:t=ff(null,t,r,e,n);break e;case 11:t=df(null,t,r,e,n);break e;case 14:t=pf(null,t,r,Bt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Yc(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),ff(e,t,r,o,n);case 3:e:{if(Tg(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,o=i.element,og(e,t),is(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=io(Error(M(423)),t),t=mf(e,t,r,n,o);break e}else if(r!==o){o=io(Error(M(424)),t),t=mf(e,t,r,n,o);break e}else for(yt=Mn(t.stateNode.containerInfo.firstChild),vt=t,be=!0,Wt=null,n=ng(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===o){t=gn(e,t,n);break e}ot(e,t,r,n)}t=t.child}return t;case 5:return ig(t),e===null&&Jc(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Bc(r,o)?a=null:i!==null&&Bc(r,i)&&(t.flags|=32),Pg(e,t),ot(e,t,a,n),t.child;case 6:return e===null&&Jc(t),null;case 13:return Og(e,t,n);case 4:return od(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ro(t,null,r,n):ot(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),df(e,t,r,o,n);case 7:return ot(e,t,t.pendingProps,n),t.child;case 8:return ot(e,t,t.pendingProps.children,n),t.child;case 12:return ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,he(rs,r._currentValue),r._currentValue=a,i!==null)if(Vt(i.value,a)){if(i.children===o.children&&!ut.current){t=gn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=dn(-1,n&-n),c.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Vc(i.return,n,t),s.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(M(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Vc(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ot(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Kr(t,n),o=At(o),r=r(o),t.flags|=1,ot(e,t,r,n),t.child;case 14:return r=t.type,o=Bt(r,t.pendingProps),o=Bt(r.type,o),pf(e,t,r,o,n);case 15:return Rg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Bt(r,o),Aa(e,t),t.tag=1,dt(r)?(e=!0,es(t)):e=!1,Kr(t,n),Eg(t,r,o),Kc(t,r,o,n),Xc(null,t,r,!0,e,n);case 19:return Ag(e,t,n);case 22:return $g(e,t,n)}throw Error(M(156,t.tag))};function Kg(e,t){return Sh(e,t)}function vx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,n,r){return new vx(e,t,n,r)}function xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xx(e){if(typeof e=="function")return xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lu)return 11;if(e===Du)return 14}return 2}function Dn(e,t){var n=e.alternate;return n===null?(n=Tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Na(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")xd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ar:return sr(n.children,o,i,t);case zu:a=8,o|=8;break;case xc:return e=Tt(12,n,t,o|2),e.elementType=xc,e.lanes=i,e;case wc:return e=Tt(13,n,t,o),e.elementType=wc,e.lanes=i,e;case bc:return e=Tt(19,n,t,o),e.elementType=bc,e.lanes=i,e;case ih:return Ls(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rh:a=10;break e;case oh:a=9;break e;case Lu:a=11;break e;case Du:a=14;break e;case Cn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=Tt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sr(e,t,n,r){return e=Tt(7,e,r,t),e.lanes=n,e}function Ls(e,t,n,r){return e=Tt(22,e,r,t),e.elementType=ih,e.lanes=n,e.stateNode={isHidden:!1},e}function tc(e,t,n){return e=Tt(6,e,null,t),e.lanes=n,e}function nc(e,t,n){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wx(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wd(e,t,n,r,o,i,a,s,c){return e=new wx(e,t,n,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(i),e}function bx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qg(e){if(!e)return Hn;e=e._reactInternals;e:{if(gr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(dt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(dt(n))return qh(e,n,t)}return t}function Yg(e,t,n,r,o,i,a,s,c){return e=wd(n,r,!0,e,o,i,a,s,c),e.context=qg(null),n=e.current,r=it(),o=Ln(n),i=dn(r,o),i.callback=t??null,Nn(n,i,o),e.current.lanes=o,ji(e,o,r),pt(e,r),e}function Ds(e,t,n,r){var o=t.current,i=it(),a=Ln(o);return n=qg(n),t.context===null?t.context=n:t.pendingContext=n,t=dn(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(o,t,a),e!==null&&(Jt(e,o,a,i),Pa(e,o,a)),a}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bd(e,t){Cf(e,t),(e=e.alternate)&&Cf(e,t)}function Sx(){return null}var Xg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sd(e){this._internalRoot=e}Fs.prototype.render=Sd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ds(e,t,null,null)};Fs.prototype.unmount=Sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pr(function(){Ds(null,e,null,null)}),t[mn]=null}};function Fs(e){this._internalRoot=e}Fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=$h();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&Th(e)}};function kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function kx(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var l=fs(a);i.call(l)}}var a=Yg(t,r,e,0,null,!1,!1,"",Ef);return e._reactRootContainer=a,e[mn]=a.current,ii(e.nodeType===8?e.parentNode:e),pr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var l=fs(c);s.call(l)}}var c=wd(e,0,!1,null,null,!1,!1,"",Ef);return e._reactRootContainer=c,e[mn]=c.current,ii(e.nodeType===8?e.parentNode:e),pr(function(){Ds(t,c,n,r)}),c}function Us(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=fs(a);s.call(c)}}Ds(t,a,e,o)}else a=kx(n,t,e,o,r);return fs(a)}_h=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mo(t.pendingLanes);n!==0&&(Uu(t,n|1),pt(t,Te()),!(ie&6)&&(ao=Te()+500,Vn()))}break;case 13:pr(function(){var r=hn(e,1);if(r!==null){var o=it();Jt(r,e,1,o)}}),bd(e,1)}};Wu=function(e){if(e.tag===13){var t=hn(e,134217728);if(t!==null){var n=it();Jt(t,e,134217728,n)}bd(e,134217728)}};Rh=function(e){if(e.tag===13){var t=Ln(e),n=hn(e,t);if(n!==null){var r=it();Jt(n,e,t,r)}bd(e,t)}};$h=function(){return ue};Ph=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Tc=function(e,t,n){switch(t){case"input":if(Cc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Os(r);if(!o)throw Error(M(90));sh(r),Cc(r,o)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}};gh=gd;yh=pr;var Cx={usingClientEntryPoint:!1,Events:[Ri,zr,Os,mh,hh,gd]},$o={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ex={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wh(e),e===null?null:e.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{Rs=ga.inject(Ex),tn=ga}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(t))throw Error(M(200));return bx(e,t,null,n)};St.createRoot=function(e,t){if(!kd(e))throw Error(M(299));var n=!1,r="",o=Xg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wd(e,1,!1,null,null,n,!1,r,o),e[mn]=t.current,ii(e.nodeType===8?e.parentNode:e),new Sd(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=wh(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return pr(e)};St.hydrate=function(e,t,n){if(!Bs(t))throw Error(M(200));return Us(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!kd(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Xg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Yg(t,null,e,1,n??null,o,!1,i,a),e[mn]=t.current,ii(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Fs(t)};St.render=function(e,t,n){if(!Bs(t))throw Error(M(200));return Us(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!Bs(e))throw Error(M(40));return e._reactRootContainer?(pr(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[mn]=null})}),!0):!1};St.unstable_batchedUpdates=gd;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bs(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Us(e,t,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function Zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zg)}catch(e){console.error(e)}}Zg(),Zm.exports=St;var Cd=Zm.exports;const ya=js(Cd);var jf=Cd;yc.createRoot=jf.createRoot,yc.hydrateRoot=jf.hydrateRoot;var e0={exports:{}},fe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ws=60103,Hs=60106,Pi=60107,Ti=60108,Oi=60114,Ai=60109,Ii=60110,Mi=60112,Ni=60113,Ed=60120,zi=60115,Li=60116,t0=60121,n0=60122,r0=60117,o0=60129,i0=60131;if(typeof Symbol=="function"&&Symbol.for){var Je=Symbol.for;Ws=Je("react.element"),Hs=Je("react.portal"),Pi=Je("react.fragment"),Ti=Je("react.strict_mode"),Oi=Je("react.profiler"),Ai=Je("react.provider"),Ii=Je("react.context"),Mi=Je("react.forward_ref"),Ni=Je("react.suspense"),Ed=Je("react.suspense_list"),zi=Je("react.memo"),Li=Je("react.lazy"),t0=Je("react.block"),n0=Je("react.server.block"),r0=Je("react.fundamental"),o0=Je("react.debug_trace_mode"),i0=Je("react.legacy_hidden")}function Qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ws:switch(e=e.type,e){case Pi:case Oi:case Ti:case Ni:case Ed:return e;default:switch(e=e&&e.$$typeof,e){case Ii:case Mi:case Li:case zi:case Ai:return e;default:return t}}case Hs:return t}}}var jx=Ai,_x=Ws,Rx=Mi,$x=Pi,Px=Li,Tx=zi,Ox=Hs,Ax=Oi,Ix=Ti,Mx=Ni;fe.ContextConsumer=Ii;fe.ContextProvider=jx;fe.Element=_x;fe.ForwardRef=Rx;fe.Fragment=$x;fe.Lazy=Px;fe.Memo=Tx;fe.Portal=Ox;fe.Profiler=Ax;fe.StrictMode=Ix;fe.Suspense=Mx;fe.isAsyncMode=function(){return!1};fe.isConcurrentMode=function(){return!1};fe.isContextConsumer=function(e){return Qt(e)===Ii};fe.isContextProvider=function(e){return Qt(e)===Ai};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ws};fe.isForwardRef=function(e){return Qt(e)===Mi};fe.isFragment=function(e){return Qt(e)===Pi};fe.isLazy=function(e){return Qt(e)===Li};fe.isMemo=function(e){return Qt(e)===zi};fe.isPortal=function(e){return Qt(e)===Hs};fe.isProfiler=function(e){return Qt(e)===Oi};fe.isStrictMode=function(e){return Qt(e)===Ti};fe.isSuspense=function(e){return Qt(e)===Ni};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pi||e===Oi||e===o0||e===Ti||e===Ni||e===Ed||e===i0||typeof e=="object"&&e!==null&&(e.$$typeof===Li||e.$$typeof===zi||e.$$typeof===Ai||e.$$typeof===Ii||e.$$typeof===Mi||e.$$typeof===r0||e.$$typeof===t0||e[0]===n0)};fe.typeOf=Qt;e0.exports=fe;var a0=e0.exports;function Nx(e){function t(P,F,C,Y,S){for(var V=0,I=0,te=0,K=0,ee,X,Se=0,Ie=0,oe,_e=oe=ee=0,ae=0,Me=0,Yn=0,De=0,Xn=C.length,an=Xn-1,rt,Z="",ge="",Sn="",br="",Kt;ae<Xn;){if(X=C.charCodeAt(ae),ae===an&&I+K+te+V!==0&&(I!==0&&(X=I===47?10:47),K=te=V=0,Xn++,an++),I+K+te+V===0){if(ae===an&&(0<Me&&(Z=Z.replace(p,"")),0<Z.trim().length)){switch(X){case 32:case 9:case 59:case 13:case 10:break;default:Z+=C.charAt(ae)}X=59}switch(X){case 123:for(Z=Z.trim(),ee=Z.charCodeAt(0),oe=1,De=++ae;ae<Xn;){switch(X=C.charCodeAt(ae)){case 123:oe++;break;case 125:oe--;break;case 47:switch(X=C.charCodeAt(ae+1)){case 42:case 47:e:{for(_e=ae+1;_e<an;++_e)switch(C.charCodeAt(_e)){case 47:if(X===42&&C.charCodeAt(_e-1)===42&&ae+2!==_e){ae=_e+1;break e}break;case 10:if(X===47){ae=_e+1;break e}}ae=_e}}break;case 91:X++;case 40:X++;case 34:case 39:for(;ae++<an&&C.charCodeAt(ae)!==X;);}if(oe===0)break;ae++}switch(oe=C.substring(De,ae),ee===0&&(ee=(Z=Z.replace(d,"").trim()).charCodeAt(0)),ee){case 64:switch(0<Me&&(Z=Z.replace(p,"")),X=Z.charCodeAt(1),X){case 100:case 109:case 115:case 45:Me=F;break;default:Me=G}if(oe=t(F,Me,oe,X,S+1),De=oe.length,0<N&&(Me=n(G,Z,Yn),Kt=s(3,oe,Me,F,Q,U,De,X,S,Y),Z=Me.join(""),Kt!==void 0&&(De=(oe=Kt.trim()).length)===0&&(X=0,oe="")),0<De)switch(X){case 115:Z=Z.replace(_,a);case 100:case 109:case 45:oe=Z+"{"+oe+"}";break;case 107:Z=Z.replace(m,"$1 $2"),oe=Z+"{"+oe+"}",oe=W===1||W===2&&i("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=Z+oe,Y===112&&(oe=(ge+=oe,""))}else oe="";break;default:oe=t(F,n(F,Z,Yn),oe,Y,S+1)}Sn+=oe,oe=Yn=Me=_e=ee=0,Z="",X=C.charCodeAt(++ae);break;case 125:case 59:if(Z=(0<Me?Z.replace(p,""):Z).trim(),1<(De=Z.length))switch(_e===0&&(ee=Z.charCodeAt(0),ee===45||96<ee&&123>ee)&&(De=(Z=Z.replace(" ",":")).length),0<N&&(Kt=s(1,Z,F,P,Q,U,ge.length,Y,S,Y))!==void 0&&(De=(Z=Kt.trim()).length)===0&&(Z="\0\0"),ee=Z.charCodeAt(0),X=Z.charCodeAt(1),ee){case 0:break;case 64:if(X===105||X===99){br+=Z+C.charAt(ae);break}default:Z.charCodeAt(De-1)!==58&&(ge+=o(Z,ee,X,Z.charCodeAt(2)))}Yn=Me=_e=ee=0,Z="",X=C.charCodeAt(++ae)}}switch(X){case 13:case 10:I===47?I=0:1+ee===0&&Y!==107&&0<Z.length&&(Me=1,Z+="\0"),0<N*T&&s(0,Z,F,P,Q,U,ge.length,Y,S,Y),U=1,Q++;break;case 59:case 125:if(I+K+te+V===0){U++;break}default:switch(U++,rt=C.charAt(ae),X){case 9:case 32:if(K+V+I===0)switch(Se){case 44:case 58:case 9:case 32:rt="";break;default:X!==32&&(rt=" ")}break;case 0:rt="\\0";break;case 12:rt="\\f";break;case 11:rt="\\v";break;case 38:K+I+V===0&&(Me=Yn=1,rt="\f"+rt);break;case 108:if(K+I+V+q===0&&0<_e)switch(ae-_e){case 2:Se===112&&C.charCodeAt(ae-3)===58&&(q=Se);case 8:Ie===111&&(q=Ie)}break;case 58:K+I+V===0&&(_e=ae);break;case 44:I+te+K+V===0&&(Me=1,rt+="\r");break;case 34:case 39:I===0&&(K=K===X?0:K===0?X:K);break;case 91:K+I+te===0&&V++;break;case 93:K+I+te===0&&V--;break;case 41:K+I+V===0&&te--;break;case 40:if(K+I+V===0){if(ee===0)switch(2*Se+3*Ie){case 533:break;default:ee=1}te++}break;case 64:I+te+K+V+_e+oe===0&&(oe=1);break;case 42:case 47:if(!(0<K+V+te))switch(I){case 0:switch(2*X+3*C.charCodeAt(ae+1)){case 235:I=47;break;case 220:De=ae,I=42}break;case 42:X===47&&Se===42&&De+2!==ae&&(C.charCodeAt(De+2)===33&&(ge+=C.substring(De,ae+1)),rt="",I=0)}}I===0&&(Z+=rt)}Ie=Se,Se=X,ae++}if(De=ge.length,0<De){if(Me=F,0<N&&(Kt=s(2,ge,Me,P,Q,U,De,Y,S,Y),Kt!==void 0&&(ge=Kt).length===0))return br+ge+Sn;if(ge=Me.join(",")+"{"+ge+"}",W*q!==0){switch(W!==2||i(ge,2)||(q=0),q){case 111:ge=ge.replace(k,":-moz-$1")+ge;break;case 112:ge=ge.replace(x,"::-webkit-input-$1")+ge.replace(x,"::-moz-$1")+ge.replace(x,":-ms-input-$1")+ge}q=0}}return br+ge+Sn}function n(P,F,C){var Y=F.trim().split(w);F=Y;var S=Y.length,V=P.length;switch(V){case 0:case 1:var I=0;for(P=V===0?"":P[0]+" ";I<S;++I)F[I]=r(P,F[I],C).trim();break;default:var te=I=0;for(F=[];I<S;++I)for(var K=0;K<V;++K)F[te++]=r(P[K]+" ",Y[I],C).trim()}return F}function r(P,F,C){var Y=F.charCodeAt(0);switch(33>Y&&(Y=(F=F.trim()).charCodeAt(0)),Y){case 38:return F.replace(g,"$1"+P.trim());case 58:return P.trim()+F.replace(g,"$1"+P.trim());default:if(0<1*C&&0<F.indexOf("\f"))return F.replace(g,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+F}function o(P,F,C,Y){var S=P+";",V=2*F+3*C+4*Y;if(V===944){P=S.indexOf(":",9)+1;var I=S.substring(P,S.length-1).trim();return I=S.substring(0,P).trim()+I+";",W===1||W===2&&i(I,1)?"-webkit-"+I+I:I}if(W===0||W===2&&!i(S,1))return S;switch(V){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(z,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return I=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+S+"-ms-flex-pack"+I+S;case 1005:return y.test(S)?S.replace(h,":-webkit-")+S.replace(h,":-moz-")+S:S;case 1e3:switch(I=S.substring(13).trim(),F=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(F)){case 226:I=S.replace(E,"tb");break;case 232:I=S.replace(E,"tb-rl");break;case 220:I=S.replace(E,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+I+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(F=(S=P).length-10,I=(S.charCodeAt(F)===33?S.substring(0,F):S).substring(P.indexOf(":",7)+1).trim(),V=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:S=S.replace(I,"-webkit-"+I)+";"+S;break;case 207:case 102:S=S.replace(I,"-webkit-"+(102<V?"inline-":"")+"box")+";"+S.replace(I,"-webkit-"+I)+";"+S.replace(I,"-ms-"+I+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return I=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+I+"-ms-flex-"+I+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace($,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace($,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(O.test(P)===!0)return(I=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?o(P.replace("stretch","fill-available"),F,C,Y).replace(":fill-available",":stretch"):S.replace(I,"-webkit-"+I)+S.replace(I,"-moz-"+I.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,C+Y===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function i(P,F){var C=P.indexOf(F===1?":":"{"),Y=P.substring(0,F!==3?C:10);return C=P.substring(C+1,P.length-1),A(F!==2?Y:Y.replace(L,"$1"),C,F)}function a(P,F){var C=o(F,F.charCodeAt(0),F.charCodeAt(1),F.charCodeAt(2));return C!==F+";"?C.replace(R," or ($1)").substring(4):"("+F+")"}function s(P,F,C,Y,S,V,I,te,K,ee){for(var X=0,Se=F,Ie;X<N;++X)switch(Ie=re[X].call(u,P,Se,C,Y,S,V,I,te,K,ee)){case void 0:case!1:case!0:case null:break;default:Se=Ie}if(Se!==F)return Se}function c(P){switch(P){case void 0:case null:N=re.length=0;break;default:if(typeof P=="function")re[N++]=P;else if(typeof P=="object")for(var F=0,C=P.length;F<C;++F)c(P[F]);else T=!!P|0}return c}function l(P){return P=P.prefix,P!==void 0&&(A=null,P?typeof P!="function"?W=1:(W=2,A=P):W=0),l}function u(P,F){var C=P;if(33>C.charCodeAt(0)&&(C=C.trim()),J=C,C=[J],0<N){var Y=s(-1,F,C,C,Q,U,0,0,0,0);Y!==void 0&&typeof Y=="string"&&(F=Y)}var S=t(G,C,F,0,0);return 0<N&&(Y=s(-2,S,C,C,Q,U,S.length,0,0,0),Y!==void 0&&(S=Y)),J="",q=0,U=Q=1,S}var d=/^\0+/g,p=/[\0\r\f]/g,h=/: */g,y=/zoo|gra/,v=/([,: ])(transform)/g,w=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,m=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,k=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,$=/-self|flex-/g,L=/[^]*?(:[rp][el]a[\w-]+)[^]*/,O=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,U=1,Q=1,q=0,W=1,G=[],re=[],N=0,A=null,T=0,J="";return u.use=c,u.set=l,e!==void 0&&l(e),u}var zx={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Lx=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uu=s0(function(e){return Lx.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),l0={exports:{}},de={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,jd=Ge?Symbol.for("react.element"):60103,_d=Ge?Symbol.for("react.portal"):60106,Gs=Ge?Symbol.for("react.fragment"):60107,Js=Ge?Symbol.for("react.strict_mode"):60108,Vs=Ge?Symbol.for("react.profiler"):60114,Qs=Ge?Symbol.for("react.provider"):60109,Ks=Ge?Symbol.for("react.context"):60110,Rd=Ge?Symbol.for("react.async_mode"):60111,qs=Ge?Symbol.for("react.concurrent_mode"):60111,Ys=Ge?Symbol.for("react.forward_ref"):60112,Xs=Ge?Symbol.for("react.suspense"):60113,Dx=Ge?Symbol.for("react.suspense_list"):60120,Zs=Ge?Symbol.for("react.memo"):60115,el=Ge?Symbol.for("react.lazy"):60116,Fx=Ge?Symbol.for("react.block"):60121,Bx=Ge?Symbol.for("react.fundamental"):60117,Ux=Ge?Symbol.for("react.responder"):60118,Wx=Ge?Symbol.for("react.scope"):60119;function Ct(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case jd:switch(e=e.type,e){case Rd:case qs:case Gs:case Vs:case Js:case Xs:return e;default:switch(e=e&&e.$$typeof,e){case Ks:case Ys:case el:case Zs:case Qs:return e;default:return t}}case _d:return t}}}function c0(e){return Ct(e)===qs}de.AsyncMode=Rd;de.ConcurrentMode=qs;de.ContextConsumer=Ks;de.ContextProvider=Qs;de.Element=jd;de.ForwardRef=Ys;de.Fragment=Gs;de.Lazy=el;de.Memo=Zs;de.Portal=_d;de.Profiler=Vs;de.StrictMode=Js;de.Suspense=Xs;de.isAsyncMode=function(e){return c0(e)||Ct(e)===Rd};de.isConcurrentMode=c0;de.isContextConsumer=function(e){return Ct(e)===Ks};de.isContextProvider=function(e){return Ct(e)===Qs};de.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===jd};de.isForwardRef=function(e){return Ct(e)===Ys};de.isFragment=function(e){return Ct(e)===Gs};de.isLazy=function(e){return Ct(e)===el};de.isMemo=function(e){return Ct(e)===Zs};de.isPortal=function(e){return Ct(e)===_d};de.isProfiler=function(e){return Ct(e)===Vs};de.isStrictMode=function(e){return Ct(e)===Js};de.isSuspense=function(e){return Ct(e)===Xs};de.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gs||e===qs||e===Vs||e===Js||e===Xs||e===Dx||typeof e=="object"&&e!==null&&(e.$$typeof===el||e.$$typeof===Zs||e.$$typeof===Qs||e.$$typeof===Ks||e.$$typeof===Ys||e.$$typeof===Bx||e.$$typeof===Ux||e.$$typeof===Wx||e.$$typeof===Fx)};de.typeOf=Ct;l0.exports=de;var Hx=l0.exports,$d=Hx,Gx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vx={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pd={};Pd[$d.ForwardRef]=Vx;Pd[$d.Memo]=u0;function _f(e){return $d.isMemo(e)?u0:Pd[e.$$typeof]||Gx}var Qx=Object.defineProperty,Kx=Object.getOwnPropertyNames,Rf=Object.getOwnPropertySymbols,qx=Object.getOwnPropertyDescriptor,Yx=Object.getPrototypeOf,$f=Object.prototype;function d0(e,t,n){if(typeof t!="string"){if($f){var r=Yx(t);r&&r!==$f&&d0(e,r,n)}var o=Kx(t);Rf&&(o=o.concat(Rf(t)));for(var i=_f(e),a=_f(t),s=0;s<o.length;++s){var c=o[s];if(!Jx[c]&&!(n&&n[c])&&!(a&&a[c])&&!(i&&i[c])){var l=qx(t,c);try{Qx(e,c,l)}catch{}}}}return e}var Xx=d0;const Zx=js(Xx);var jt={};function Ht(){return(Ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pf=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},du=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!a0.typeOf(e)},ms=Object.freeze([]),Fn=Object.freeze({});function so(e){return typeof e=="function"}function Tf(e){return e.displayName||e.name||"Component"}function Td(e){return e&&typeof e.styledComponentId=="string"}var lo=typeof process<"u"&&jt!==void 0&&(jt.REACT_APP_SC_ATTR||jt.SC_ATTR)||"data-styled",Od=typeof window<"u"&&"HTMLElement"in window,ew=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jt!==void 0&&(jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jt.REACT_APP_SC_DISABLE_SPEEDY!==""?jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jt.REACT_APP_SC_DISABLE_SPEEDY:jt.SC_DISABLE_SPEEDY!==void 0&&jt.SC_DISABLE_SPEEDY!==""&&jt.SC_DISABLE_SPEEDY!=="false"&&jt.SC_DISABLE_SPEEDY)),tw={};function fr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var nw=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&fr(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(n+1),l=0,u=r.length;l<u;l++)this.tag.insertRule(c,r[l])&&(this.groupSizes[n]++,c++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),za=new Map,hs=new Map,Vo=1,va=function(e){if(za.has(e))return za.get(e);for(;hs.has(Vo);)Vo++;var t=Vo++;return za.set(e,t),hs.set(t,e),t},rw=function(e){return hs.get(e)},ow=function(e,t){t>=Vo&&(Vo=t+1),za.set(e,t),hs.set(t,e)},iw="style["+lo+'][data-styled-version="5.3.11"]',aw=new RegExp("^"+lo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),sw=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},lw=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(aw);if(s){var c=0|parseInt(s[1],10),l=s[2];c!==0&&(ow(l,c),sw(e,l,s[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},cw=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},p0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var c=s.childNodes,l=c.length;l>=0;l--){var u=c[l];if(u&&u.nodeType===1&&u.hasAttribute(lo))return u}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(lo,"active"),r.setAttribute("data-styled-version","5.3.11");var a=cw();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},uw=function(){function e(n){var r=this.element=p0(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var c=i[a];if(c.ownerNode===o)return c}fr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),dw=function(){function e(n){var r=this.element=p0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),pw=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Of=Od,fw={isServer:!Od,useCSSOMInjection:!ew},gs=function(){function e(n,r,o){n===void 0&&(n=Fn),r===void 0&&(r={}),this.options=Ht({},fw,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Od&&Of&&(Of=!1,function(i){for(var a=document.querySelectorAll(iw),s=0,c=a.length;s<c;s++){var l=a[s];l&&l.getAttribute(lo)!=="active"&&(lw(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this))}e.registerId=function(n){return va(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Ht({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new pw(a):i?new uw(a):new dw(a),new nw(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(va(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(va(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(va(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=rw(a);if(s!==void 0){var c=n.names.get(s),l=r.getGroup(a);if(c&&l&&c.size){var u=lo+".g"+a+'[id="'+s+'"]',d="";c!==void 0&&c.forEach(function(p){p.length>0&&(d+=p+",")}),i+=""+l+u+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),mw=/(a)(d)/gi,Af=function(e){return String.fromCharCode(e+(e>25?39:97))};function pu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Af(t%52)+n;return(Af(t%52)+n).replace(mw,"$1-$2")}var Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},f0=function(e){return Hr(5381,e)};function m0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(so(n)&&!Td(n))return!1}return!0}var hw=f0("5.3.11"),gw=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&m0(t),this.componentId=n,this.baseHash=Hr(hw,n),this.baseStyle=r,gs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=mr(this.rules,t,n,r).join(""),s=pu(Hr(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var c=r(a,"."+s,void 0,o);n.insertRules(o,s,c)}i.push(s),this.staticRulesId=s}else{for(var l=this.rules.length,u=Hr(this.baseHash,r.hash),d="",p=0;p<l;p++){var h=this.rules[p];if(typeof h=="string")d+=h;else if(h){var y=mr(h,t,n,r),v=Array.isArray(y)?y.join(""):y;u=Hr(u,v+p),d+=v}}if(d){var w=pu(u>>>0);if(!n.hasNameForId(o,w)){var g=r(d,"."+w,void 0,o);n.insertRules(o,w,g)}i.push(w)}}return i.join(" ")},e}(),yw=/^\s*\/\/.*$/gm,vw=[":","[",".","#"];function xw(e){var t,n,r,o,i=Fn,a=i.options,s=a===void 0?Fn:a,c=i.plugins,l=c===void 0?ms:c,u=new Nx(s),d=[],p=function(v){function w(g){if(g)try{v(g+"}")}catch{}}return function(g,m,x,k,E,_,R,$,L,O){switch(g){case 1:if(L===0&&m.charCodeAt(0)===64)return v(m+";"),"";break;case 2:if($===0)return m+"/*|*/";break;case 3:switch($){case 102:case 112:return v(x[0]+m),"";default:return m+(O===0?"/*|*/":"")}case-2:m.split("/*|*/}").forEach(w)}}}(function(v){d.push(v)}),h=function(v,w,g){return w===0&&vw.indexOf(g[n.length])!==-1||g.match(o)?v:"."+t};function y(v,w,g,m){m===void 0&&(m="&");var x=v.replace(yw,""),k=w&&g?g+" "+w+" { "+x+" }":x;return t=m,n=w,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(g||!w?"":w,k)}return u.use([].concat(l,[function(v,w,g){v===2&&g.length&&g[0].lastIndexOf(n)>0&&(g[0]=g[0].replace(r,h))},p,function(v){if(v===-2){var w=d;return d=[],w}}])),y.hash=l.length?l.reduce(function(v,w){return w.name||fr(15),Hr(v,w.name)},5381).toString():"",y}var h0=pe.createContext();h0.Consumer;var g0=pe.createContext(),ww=(g0.Consumer,new gs),fu=xw();function y0(){return b.useContext(h0)||ww}function v0(){return b.useContext(g0)||fu}var x0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=fu);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return fr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=fu),this.name+t.hash},e}(),bw=/([A-Z])/,Sw=/([A-Z])/g,kw=/^ms-/,Cw=function(e){return"-"+e.toLowerCase()};function If(e){return bw.test(e)?e.replace(Sw,Cw).replace(kw,"-ms-"):e}var Mf=function(e){return e==null||e===!1||e===""};function mr(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=mr(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Mf(e))return"";if(Td(e))return"."+e.styledComponentId;if(so(e)){if(typeof(l=e)!="function"||l.prototype&&l.prototype.isReactComponent||!t)return e;var c=e(t);return mr(c,t,n,r)}var l;return e instanceof x0?n?(e.inject(n,r),e.getName(r)):e:du(e)?function u(d,p){var h,y,v=[];for(var w in d)d.hasOwnProperty(w)&&!Mf(d[w])&&(Array.isArray(d[w])&&d[w].isCss||so(d[w])?v.push(If(w)+":",d[w],";"):du(d[w])?v.push.apply(v,u(d[w],w)):v.push(If(w)+": "+(h=w,(y=d[w])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||h in zx||h.startsWith("--")?String(y).trim():y+"px")+";"));return p?[p+" {"].concat(v,["}"]):v}(e):e.toString()}var Nf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function wn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return so(e)||du(e)?Nf(mr(Pf(ms,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Nf(mr(Pf(e,n)))}var w0=function(e,t,n){return n===void 0&&(n=Fn),e.theme!==n.theme&&e.theme||t||n.theme},Ew=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jw=/(^-|-$)/g;function rc(e){return e.replace(Ew,"-").replace(jw,"")}var Ad=function(e){return pu(f0(e)>>>0)};function xa(e){return typeof e=="string"&&!0}var mu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},_w=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Rw(e,t,n){var r=e[n];mu(t)&&mu(r)?b0(r,t):e[n]=t}function b0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(mu(a))for(var s in a)_w(s)&&Rw(e,a[s],s)}return e}var co=pe.createContext();co.Consumer;function $w(e){var t=b.useContext(co),n=b.useMemo(function(){return function(r,o){if(!r)return fr(14);if(so(r)){var i=r(o);return i}return Array.isArray(r)||typeof r!="object"?fr(8):o?Ht({},o,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?pe.createElement(co.Provider,{value:n},e.children):null}var oc={};function S0(e,t,n){var r=Td(e),o=!xa(e),i=t.attrs,a=i===void 0?ms:i,s=t.componentId,c=s===void 0?function(m,x){var k=typeof m!="string"?"sc":rc(m);oc[k]=(oc[k]||0)+1;var E=k+"-"+Ad("5.3.11"+k+oc[k]);return x?x+"-"+E:E}(t.displayName,t.parentComponentId):s,l=t.displayName,u=l===void 0?function(m){return xa(m)?"styled."+m:"Styled("+Tf(m)+")"}(e):l,d=t.displayName&&t.componentId?rc(t.displayName)+"-"+t.componentId:t.componentId||c,p=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(m,x,k){return e.shouldForwardProp(m,x,k)&&t.shouldForwardProp(m,x,k)}:e.shouldForwardProp);var y,v=new gw(n,d,r?e.componentStyle:void 0),w=v.isStatic&&a.length===0,g=function(m,x){return function(k,E,_,R){var $=k.attrs,L=k.componentStyle,O=k.defaultProps,z=k.foldedComponentIds,U=k.shouldForwardProp,Q=k.styledComponentId,q=k.target,W=function(Y,S,V){Y===void 0&&(Y=Fn);var I=Ht({},S,{theme:Y}),te={};return V.forEach(function(K){var ee,X,Se,Ie=K;for(ee in so(Ie)&&(Ie=Ie(I)),Ie)I[ee]=te[ee]=ee==="className"?(X=te[ee],Se=Ie[ee],X&&Se?X+" "+Se:X||Se):Ie[ee]}),[I,te]}(w0(E,b.useContext(co),O)||Fn,E,$),G=W[0],re=W[1],N=function(Y,S,V,I){var te=y0(),K=v0(),ee=S?Y.generateAndInjectStyles(Fn,te,K):Y.generateAndInjectStyles(V,te,K);return ee}(L,R,G),A=_,T=re.$as||E.$as||re.as||E.as||q,J=xa(T),P=re!==E?Ht({},E,{},re):E,F={};for(var C in P)C[0]!=="$"&&C!=="as"&&(C==="forwardedAs"?F.as=P[C]:(U?U(C,uu,T):!J||uu(C))&&(F[C]=P[C]));return E.style&&re.style!==E.style&&(F.style=Ht({},E.style,{},re.style)),F.className=Array.prototype.concat(z,Q,N!==Q?N:null,E.className,re.className).filter(Boolean).join(" "),F.ref=A,b.createElement(T,F)}(y,m,x,w)};return g.displayName=u,(y=pe.forwardRef(g)).attrs=p,y.componentStyle=v,y.displayName=u,y.shouldForwardProp=h,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ms,y.styledComponentId=d,y.target=r?e.target:e,y.withComponent=function(m){var x=t.componentId,k=function(_,R){if(_==null)return{};var $,L,O={},z=Object.keys(_);for(L=0;L<z.length;L++)$=z[L],R.indexOf($)>=0||(O[$]=_[$]);return O}(t,["componentId"]),E=x&&x+"-"+(xa(m)?m:rc(Tf(m)));return S0(m,Ht({},k,{attrs:p,componentId:E}),n)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?b0({},e.defaultProps,m):m}}),Object.defineProperty(y,"toString",{value:function(){return"."+y.styledComponentId}}),o&&Zx(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var j=function(e){return function t(n,r,o){if(o===void 0&&(o=Fn),!a0.isValidElementType(r))return fr(1,String(r));var i=function(){return n(r,o,wn.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,Ht({},o,{},a))},i.attrs=function(a){return t(n,r,Ht({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(S0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){j[e]=j(e)});var Pw=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=m0(n),gs.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(mr(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&gs.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Tw(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=wn.apply(void 0,[e].concat(n)),i="sc-global-"+Ad(JSON.stringify(o)),a=new Pw(o,i);function s(l){var u=y0(),d=v0(),p=b.useContext(co),h=b.useRef(u.allocateGSInstance(i)).current;return u.server&&c(h,l,u,p,d),b.useLayoutEffect(function(){if(!u.server)return c(h,l,u,p,d),function(){return a.removeStyles(h,u)}},[h,l,u,p,d]),null}function c(l,u,d,p,h){if(a.isStatic)a.renderStyles(l,tw,d,h);else{var y=Ht({},u,{theme:w0(u,p,s.defaultProps)});a.renderStyles(l,y,d,h)}}return pe.memo(s)}function tl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=wn.apply(void 0,[e].concat(n)).join(""),i=Ad(o);return new x0(i,o)}var ho=function(){return b.useContext(co)};const Ow={glassBlur:"blur(20px) saturate(1.35)",glassBlurSoft:"blur(12px) saturate(1.2)",glassCardBg:"rgba(11, 16, 32, 0.72)",glassCardBorder:"rgba(148, 163, 184, 0.12)",glassCardBorderHover:"rgba(34, 211, 238, 0.45)",glassCardShadow:"0 8px 40px rgba(0, 0, 0, 0.5)",glassCardShadowHover:"0 20px 56px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(34, 211, 238, 0.35), 0 0 48px rgba(34, 211, 238, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.08)",glassChipBg:"rgba(15, 22, 41, 0.65)",glassChipShadowHover:"0 8px 28px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(34, 211, 238, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.1)",glassSpotHot:"rgba(34, 211, 238, 0.42)",glassSpotCool:"rgba(59, 130, 246, 0.38)",glassSpotBlend:"normal",glassChipGlowWarm:"rgba(34, 211, 238, 0.28)",glassChipGlowAccent:"rgba(59, 130, 246, 0.32)"},Aw={glassBlur:"blur(18px) saturate(1.15)",glassBlurSoft:"blur(10px) saturate(1.1)",glassCardBg:"rgba(255, 255, 255, 0.94)",glassCardBorder:"rgba(148, 163, 184, 0.35)",glassCardBorderHover:"rgba(2, 132, 199, 0.55)",glassCardShadow:"0 4px 24px rgba(15, 23, 42, 0.07)",glassCardShadowHover:"0 12px 36px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(2, 132, 199, 0.25), 0 0 24px rgba(2, 132, 199, 0.08), inset 0 1px 0 rgba(255, 255, 255, 1)",glassChipBg:"rgba(255, 255, 255, 0.96)",glassChipShadowHover:"0 6px 20px rgba(15, 23, 42, 0.07), 0 0 0 1px rgba(2, 132, 199, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1)",glassSpotHot:"rgba(255, 255, 255, 1)",glassSpotCool:"rgba(2, 132, 199, 0.12)",glassSpotBlend:"normal",glassChipGlowWarm:"rgba(255, 255, 255, 1)",glassChipGlowAccent:"rgba(37, 99, 235, 0.1)"},Iw={bg:"#030711",bgLight:"#0A1020",bgElevated:"#0F1629",primary:"#22D3EE",primaryMuted:"#0891B2",accent:"#3B82F6",accentSecondary:"#6366F1",text_primary:"#F8FAFC",text_secondary:"#94A3B8",text_muted:"#64748B",text_black:"#F8FAFC",card:"#0B1020",card_light:"#111827",button:"#0891B2",white:"#FFFFFF",onPrimary:"#031018",primaryFill:"#22D3EE",black:"#020617",soft2:"#64748B",boxShadow:"0 12px 48px rgba(0, 0, 0, 0.45)",boxShadowHover:"0 20px 56px rgba(34, 211, 238, 0.12)",background:"linear-gradient(135deg, #0891B2 0%, #2563EB 50%, #22D3EE 100%)",logo:"#F8FAFC",filter:"brightness(0) invert(100%);",navBarFill:"rgba(3, 7, 17, 0.88)",navBorder:"rgba(148, 163, 184, 0.14)",navInsetLine:"rgba(255, 255, 255, 0.06)",navShadow:"0 1px 0 rgba(0, 0, 0, 0.45)",navInnerFill:"rgba(10, 16, 32, 0.6)",navLinkHoverFill:"rgba(255, 255, 255, 0.05)",navLinkActiveFill:"rgba(34, 211, 238, 0.14)",navSpotOpacity:"0.55",heroSurface:"rgba(3, 7, 17, 0.35)",accentMesh1:"rgba(34, 211, 238, 0.16)",accentMesh2:"rgba(59, 130, 246, 0.18)",gridLine:"rgba(148, 163, 184, 0.07)",primaryGlow:"rgba(34, 211, 238, 0.45)",primaryGlowSoft:"rgba(34, 211, 238, 0.22)",primaryGlowSubtle:"rgba(34, 211, 238, 0.12)",accentGlow:"rgba(59, 130, 246, 0.35)",heroAnimationOpacity:.15,selectionBg:"rgba(34, 211, 238, 0.38)",selectionText:"#030711",...Ow},Mw={bg:"#FFFFFF",bgLight:"#F1F5F9",bgElevated:"#FFFFFF",primary:"#0284C7",primaryMuted:"#0369A1",accent:"#1D4ED8",accentSecondary:"#4338CA",text_primary:"#0F172A",text_secondary:"#334155",text_muted:"#64748B",text_black:"#0F172A",card:"#FFFFFF",card_light:"#F8FAFC",white:"#FFFFFF",onPrimary:"#FFFFFF",primaryFill:"#0369A1",black:"#020617",button:"#0284C7",boxShadowHover:"0 12px 32px rgba(2, 132, 199, 0.12)",boxShadow:"0 4px 20px rgba(15, 23, 42, 0.06)",background:"linear-gradient(135deg, #0284C7 0%, #1D4ED8 55%, #0369A1 100%)",logo:"#0F172A",filter:"none",soft2:"#64748B",navBarFill:"rgba(255, 255, 255, 0.96)",navBorder:"rgba(148, 163, 184, 0.35)",navInsetLine:"rgba(15, 23, 42, 0.04)",navShadow:"0 1px 0 rgba(15, 23, 42, 0.06)",navInnerFill:"rgba(255, 255, 255, 0.95)",navLinkHoverFill:"rgba(241, 245, 249, 0.95)",navLinkActiveFill:"rgba(2, 132, 199, 0.12)",navSpotOpacity:"0.32",heroSurface:"rgba(255, 255, 255, 0.9)",accentMesh1:"rgba(2, 132, 199, 0.1)",accentMesh2:"rgba(29, 78, 216, 0.08)",gridLine:"rgba(148, 163, 184, 0.22)",primaryGlow:"rgba(2, 132, 199, 0.35)",primaryGlowSoft:"rgba(2, 132, 199, 0.16)",primaryGlowSubtle:"rgba(2, 132, 199, 0.08)",accentGlow:"rgba(29, 78, 216, 0.2)",heroAnimationOpacity:.35,selectionBg:"rgba(2, 132, 199, 0.22)",selectionText:"#0F172A",...Aw},k0="portfolio-theme",Nw=()=>{if(typeof window>"u")return!0;const e=window.localStorage.getItem(k0);return e==="light"?!1:e==="dark"?!0:window.matchMedia("(prefers-color-scheme: dark)").matches},zw=Tw`
  :root {
    --font-display: "Inter", system-ui, sans-serif;
    --font-body: "Inter", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", ui-monospace, monospace;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 22px;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    background-color: ${({theme:e})=>e.bg};
    color: ${({theme:e})=>e.text_primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${({theme:e})=>e.selectionBg};
    color: ${({theme:e})=>e.selectionText};
  }

  ::-moz-selection {
    background-color: ${({theme:e})=>e.selectionBg};
    color: ${({theme:e})=>e.selectionText};
  }

  input::selection,
  textarea::selection {
    background-color: ${({theme:e})=>e.selectionBg};
    color: ${({theme:e})=>e.selectionText};
  }

  input::-moz-selection,
  textarea::-moz-selection {
    background-color: ${({theme:e})=>e.selectionBg};
    color: ${({theme:e})=>e.selectionText};
  }

  #root {
    min-height: 100dvh;
    position: relative;
    isolation: isolate;
    background-color: ${({theme:e})=>e.bg};
    background-image:
      linear-gradient(${({theme:e})=>e.gridLine} 1px, transparent 1px),
      linear-gradient(90deg, ${({theme:e})=>e.gridLine} 1px, transparent 1px);
    background-size: 64px 64px;
    background-position: center top;
  }

  #root::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    background:
      radial-gradient(
        80% 50% at 50% -10%,
        ${({theme:e})=>e.accentMesh1},
        transparent 55%
      ),
      radial-gradient(
        60% 40% at 100% 0%,
        ${({theme:e})=>e.accentMesh2},
        transparent 50%
      );
  }
`;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const zf="popstate";function Lw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return hu("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ys(o)}return Fw(t,n,null,e)}function Le(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Id(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Dw(){return Math.random().toString(36).substr(2,8)}function Lf(e,t){return{usr:e.state,key:e.key,idx:t}}function hu(e,t,n,r){return n===void 0&&(n=null),mi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?go(t):t,{state:n,key:t&&t.key||r||Dw()})}function ys(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function go(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Fw(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Tn.Pop,c=null,l=u();l==null&&(l=0,a.replaceState(mi({},a.state,{idx:l}),""));function u(){return(a.state||{idx:null}).idx}function d(){s=Tn.Pop;let w=u(),g=w==null?null:w-l;l=w,c&&c({action:s,location:v.location,delta:g})}function p(w,g){s=Tn.Push;let m=hu(v.location,w,g);l=u()+1;let x=Lf(m,l),k=v.createHref(m);try{a.pushState(x,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(k)}i&&c&&c({action:s,location:v.location,delta:1})}function h(w,g){s=Tn.Replace;let m=hu(v.location,w,g);l=u();let x=Lf(m,l),k=v.createHref(m);a.replaceState(x,"",k),i&&c&&c({action:s,location:v.location,delta:0})}function y(w){let g=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof w=="string"?w:ys(w);return m=m.replace(/ $/,"%20"),Le(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return s},get location(){return e(o,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(zf,d),c=w,()=>{o.removeEventListener(zf,d),c=null}},createHref(w){return t(o,w)},createURL:y,encodeLocation(w){let g=y(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:h,go(w){return a.go(w)}};return v}var Df;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Df||(Df={}));function Bw(e,t,n){return n===void 0&&(n="/"),Uw(e,t,n)}function Uw(e,t,n,r){let o=typeof t=="string"?go(t):t,i=Md(o.pathname||"/",n);if(i==null)return null;let a=C0(e);Ww(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let l=tb(i);s=Xw(a[c],l)}return s}function C0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let c={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(Le(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let l=Bn([r,c.relativePath]),u=n.concat(c);i.children&&i.children.length>0&&(Le(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),C0(i.children,t,u,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:qw(l,i.index),routesMeta:u})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let c of E0(i.path))o(i,a,c)}),t}function E0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=E0(r.join("/")),s=[];return s.push(...a.map(c=>c===""?i:[i,c].join("/"))),o&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ww(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hw=/^:[\w-]+$/,Gw=3,Jw=2,Vw=1,Qw=10,Kw=-2,Ff=e=>e==="*";function qw(e,t){let n=e.split("/"),r=n.length;return n.some(Ff)&&(r+=Kw),t&&(r+=Jw),n.filter(o=>!Ff(o)).reduce((o,i)=>o+(Hw.test(i)?Gw:i===""?Vw:Qw),r)}function Yw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Xw(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let c=r[s],l=s===r.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=Zw({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u),p=c.route;if(!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:Bn([i,d.pathname]),pathnameBase:ab(Bn([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Bn([i,d.pathnameBase]))}return a}function Zw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=eb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((l,u,d)=>{let{paramName:p,isOptional:h}=u;if(p==="*"){let v=s[d]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[d];return h&&!y?l[p]=void 0:l[p]=(y||"").replace(/%2F/g,"/"),l},{}),pathname:i,pathnameBase:a,pattern:e}}function eb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Id(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function tb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Id(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Md(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const nb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rb=e=>nb.test(e);function ob(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?go(e):e,i;if(n)if(rb(n))i=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),Id(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=Bf(n.substring(1),"/"):i=Bf(n,t)}else i=t;return{pathname:i,search:sb(r),hash:lb(o)}}function Bf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function ic(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ib(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function j0(e,t){let n=ib(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function _0(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=go(e):(o=mi({},e),Le(!o.pathname||!o.pathname.includes("?"),ic("?","pathname","search",o)),Le(!o.pathname||!o.pathname.includes("#"),ic("#","pathname","hash",o)),Le(!o.search||!o.search.includes("#"),ic("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}s=d>=0?t[d]:"/"}let c=ob(o,s),l=a&&a!=="/"&&a.endsWith("/"),u=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const Bn=e=>e.join("/").replace(/\/\/+/g,"/"),ab=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),sb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const R0=["post","put","patch","delete"];new Set(R0);const ub=["get",...R0];new Set(ub);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hi(){return hi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},hi.apply(this,arguments)}const Nd=b.createContext(null),db=b.createContext(null),yr=b.createContext(null),nl=b.createContext(null),Qn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),$0=b.createContext(null);function pb(e,t){let{relative:n}=t===void 0?{}:t;Di()||Le(!1);let{basename:r,navigator:o}=b.useContext(yr),{hash:i,pathname:a,search:s}=T0(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Bn([r,a])),o.createHref({pathname:c,search:s,hash:i})}function Di(){return b.useContext(nl)!=null}function Fi(){return Di()||Le(!1),b.useContext(nl).location}function P0(e){b.useContext(yr).static||b.useLayoutEffect(e)}function Bi(){let{isDataRoute:e}=b.useContext(Qn);return e?Eb():fb()}function fb(){Di()||Le(!1);let e=b.useContext(Nd),{basename:t,future:n,navigator:r}=b.useContext(yr),{matches:o}=b.useContext(Qn),{pathname:i}=Fi(),a=JSON.stringify(j0(o,n.v7_relativeSplatPath)),s=b.useRef(!1);return P0(()=>{s.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){r.go(l);return}let d=_0(l,JSON.parse(a),i,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Bn([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,a,i,e])}function T_(){let{matches:e}=b.useContext(Qn),t=e[e.length-1];return t?t.params:{}}function T0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(yr),{matches:o}=b.useContext(Qn),{pathname:i}=Fi(),a=JSON.stringify(j0(o,r.v7_relativeSplatPath));return b.useMemo(()=>_0(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function mb(e,t){return hb(e,t)}function hb(e,t,n,r){Di()||Le(!1);let{navigator:o}=b.useContext(yr),{matches:i}=b.useContext(Qn),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let l=Fi(),u;if(t){var d;let w=typeof t=="string"?go(t):t;c==="/"||(d=w.pathname)!=null&&d.startsWith(c)||Le(!1),u=w}else u=l;let p=u.pathname||"/",h=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=Bw(e,{pathname:h}),v=wb(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:Bn([c,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:Bn([c,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&v?b.createElement(nl.Provider,{value:{location:hi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Tn.Pop}},v):v}function gb(){let e=Cb(),t=cb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:o},n):null,null)}const yb=b.createElement(gb,null);class vb extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(Qn.Provider,{value:this.props.routeContext},b.createElement($0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xb(e){let{routeContext:t,match:n,children:r}=e,o=b.useContext(Nd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qn.Provider,{value:t},r)}function wb(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let u=a.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);u>=0||Le(!1),a=a.slice(0,Math.min(a.length,u+1))}let c=!1,l=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<a.length;u++){let d=a[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(l=u),d.route.id){let{loaderData:p,errors:h}=n,y=d.route.loader&&p[d.route.id]===void 0&&(!h||h[d.route.id]===void 0);if(d.route.lazy||y){c=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((u,d,p)=>{let h,y=!1,v=null,w=null;n&&(h=s&&d.route.id?s[d.route.id]:void 0,v=d.route.errorElement||yb,c&&(l<0&&p===0?(jb("route-fallback"),y=!0,w=null):l===p&&(y=!0,w=d.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),m=()=>{let x;return h?x=v:y?x=w:d.route.Component?x=b.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=u,b.createElement(xb,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?b.createElement(vb,{location:n.location,revalidation:n.revalidation,component:v,error:h,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var O0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(O0||{}),A0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(A0||{});function bb(e){let t=b.useContext(Nd);return t||Le(!1),t}function Sb(e){let t=b.useContext(db);return t||Le(!1),t}function kb(e){let t=b.useContext(Qn);return t||Le(!1),t}function I0(e){let t=kb(),n=t.matches[t.matches.length-1];return n.route.id||Le(!1),n.route.id}function Cb(){var e;let t=b.useContext($0),n=Sb(),r=I0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Eb(){let{router:e}=bb(O0.UseNavigateStable),t=I0(A0.UseNavigateStable),n=b.useRef(!1);return P0(()=>{n.current=!0}),b.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,hi({fromRouteId:t},i)))},[e,t])}const Uf={};function jb(e,t,n){Uf[e]||(Uf[e]=!0)}function _b(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function M0(e){Le(!1)}function Rb(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Tn.Pop,navigator:i,static:a=!1,future:s}=e;Di()&&Le(!1);let c=t.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:c,navigator:i,static:a,future:hi({v7_relativeSplatPath:!1},s)}),[c,s,i,a]);typeof r=="string"&&(r=go(r));let{pathname:u="/",search:d="",hash:p="",state:h=null,key:y="default"}=r,v=b.useMemo(()=>{let w=Md(u,c);return w==null?null:{location:{pathname:w,search:d,hash:p,state:h,key:y},navigationType:o}},[c,u,d,p,h,y,o]);return v==null?null:b.createElement(yr.Provider,{value:l},b.createElement(nl.Provider,{children:n,value:v}))}function $b(e){let{children:t,location:n}=e;return mb(gu(t),n)}new Promise(()=>{});function gu(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,o)=>{if(!b.isValidElement(r))return;let i=[...t,o];if(r.type===b.Fragment){n.push.apply(n,gu(r.props.children,i));return}r.type!==M0&&Le(!1),!r.props.index||!r.props.children||Le(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=gu(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yu(){return yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yu.apply(this,arguments)}function Pb(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ob(e,t){return e.button===0&&(!t||t==="_self")&&!Tb(e)}const Ab=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ib="6";try{window.__reactRouterVersion=Ib}catch{}const Mb="startTransition",Wf=Wa[Mb];function Nb(e){let{basename:t,children:n,future:r,window:o}=e,i=b.useRef();i.current==null&&(i.current=Lw({window:o,v5Compat:!0}));let a=i.current,[s,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:l}=r||{},u=b.useCallback(d=>{l&&Wf?Wf(()=>c(d)):c(d)},[c,l]);return b.useLayoutEffect(()=>a.listen(u),[a,u]),b.useEffect(()=>_b(r),[r]),b.createElement(Rb,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const zb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zd=b.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d}=t,p=Pb(t,Ab),{basename:h}=b.useContext(yr),y,v=!1;if(typeof l=="string"&&Lb.test(l)&&(y=l,zb))try{let x=new URL(window.location.href),k=l.startsWith("//")?new URL(x.protocol+l):new URL(l),E=Md(k.pathname,h);k.origin===x.origin&&E!=null?l=E+k.search+k.hash:v=!0}catch{}let w=pb(l,{relative:o}),g=Db(l,{replace:a,state:s,target:c,preventScrollReset:u,relative:o,viewTransition:d});function m(x){r&&r(x),x.defaultPrevented||g(x)}return b.createElement("a",yu({},p,{href:y||w,onClick:v||i?r:m,ref:n,target:c}))});var Hf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Hf||(Hf={}));var Gf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gf||(Gf={}));function Db(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,c=Bi(),l=Fi(),u=T0(e,{relative:a});return b.useCallback(d=>{if(Ob(d,n)){d.preventDefault();let p=r!==void 0?r:ys(l)===ys(u);c(e,{replace:p,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[l,c,u,r,o,n,e,i,a,s])}const Fb=j.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  font-size: 1rem;
  isolation: isolate;
  background: ${({theme:e})=>e.navBarFill};
  backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  -webkit-backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  // border-bottom: 1px solid ${({theme:e})=>e.navBorder};
  @media (max-width: 960px) {
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }
`,Bb=j.div`
  width: 100%;
  height: 80px;
  flex-shrink: 0;
`,Ub=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  z-index: 2;
  position: relative;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 16px;
  border: 1px solid ${({theme:e})=>e.navBorder};
  border-radius: 14px;
  background: ${({theme:e})=>e.navInnerFill};
  box-sizing: border-box;
  overflow: visible;
  isolation: isolate;
  --spot-x: 50%;
  --spot-y: 50%;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        circle 140px at var(--spot-x) var(--spot-y),
        ${({theme:e})=>e.glassSpotHot} 0%,
        transparent 68%
      ),
      radial-gradient(
        circle 240px at var(--spot-x) var(--spot-y),
        ${({theme:e})=>e.glassSpotCool} 0%,
        transparent 72%
      );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: ${({theme:e})=>e.glassSpotBlend};
    will-change: opacity;
  }
  &:hover::before {
    opacity: ${({theme:e})=>e.navSpotOpacity};
  }
  & > * {
    position: relative;
    z-index: 1;
  }
  @media (max-width: 640px) {
    margin: 0 10px;
    padding: 0 14px;
  }
`,Wb=j(zd)`
  flex: 0 0 auto;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({theme:e})=>e.logo};

  @media (max-width: 640px) {
    padding: 0 0px;
  }
`,Hb=j.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`,Gb=j.ul`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(14px, 2vw, 28px);
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 950px) {
    display: none;
  }
`,kr=j.a`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.primary};
  }

  &.active {
    color: ${({theme:e})=>e.primary};
  }
`,Jf=j.a`
  border: 1px solid ${({theme:e})=>e.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({theme:e})=>e.primaryFill};
    color: ${({theme:e})=>e.onPrimary};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`,Jb=j.button`
  border: none;
  outline: none;
  padding: 0 20px;
  color: ${({theme:e})=>e.text_primary};
  background: none;
  cursor: pointer;
`,Vb=j.div`
  flex: 0 0 auto;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 950px) {
    display: none;
  }
`,Qb=j.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${({theme:e})=>e.text_primary};
    @media (max-width: 640px) {
      right: 14px;
    }
  }
`,Kb=j.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  padding: 12px 20px 20px 20px;
  background: ${({theme:e})=>e.navBarFill};
  backdrop-filter: blur(10px) saturate(1.15);
  -webkit-backdrop-filter: blur(10px) saturate(1.15);
  border: 1px solid ${({theme:e})=>e.navBorder};
  border-radius: 10px;
  box-shadow:
    ${({theme:e})=>e.navShadow},
    inset 0 0 0 1px ${({theme:e})=>e.navInsetLine};
  transition: all 0.6s ease-in-out;
  transform: ${({isOpen:e})=>e?"translateY(0)":"translateY(-100%)"};
  opacity: ${({isOpen:e})=>e?"100%":"0"};
  && {
    z-index: ${({isOpen:e})=>e?1200:-1e3};
  }
`;j.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;j(zd)`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.primary};
    border-color: ${({theme:e})=>e.navBorder};
    background: ${({theme:e})=>e.navLinkHoverFill};
  }

  &.active {
    color: ${({theme:e})=>e.primary};
    border-color: ${({theme:e})=>e.primary};
    background: ${({theme:e})=>e.navLinkActiveFill};
  }
`;j.a`
  border: 1px solid ${({theme:e})=>e.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({theme:e})=>e.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({theme:e})=>e.primaryFill};
    color: ${({theme:e})=>e.onPrimary};
  }
`;const Cr=j.a`
  color: ${({theme:e})=>e.text_primary};
  font-weight: 500;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.primary};
    border-color: ${({theme:e})=>e.navBorder};
    background: ${({theme:e})=>e.navLinkHoverFill};
  }

  &.active {
    color: ${({theme:e})=>e.primary};
    border-color: ${({theme:e})=>e.primary};
    background: ${({theme:e})=>e.navLinkActiveFill};
  }
`;j(zd)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;function Vf(e,t,n){const r=e.getBoundingClientRect(),o=t-r.left,i=n-r.top;e.style.setProperty("--spot-x",`${o}px`),e.style.setProperty("--spot-y",`${i}px`)}function vr(){const e=b.useCallback(r=>{r.pointerType!=="touch"&&Vf(r.currentTarget,r.clientX,r.clientY)},[]),t=b.useCallback(r=>{r.pointerType!=="touch"&&Vf(r.currentTarget,r.clientX,r.clientY)},[]),n=b.useCallback(r=>{const o=r.currentTarget,i=o.getBoundingClientRect();o.style.setProperty("--spot-x",`${i.width/2}px`),o.style.setProperty("--spot-y",`${i.height/2}px`)},[]);return{onPointerMove:e,onPointerEnter:t,onPointerLeave:n}}var Ld={},N0={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(N0);var Kn=N0.exports,ac={};function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(null,arguments)}function Rn(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function z0(e){if(b.isValidElement(e)||!Rn(e))return e;const t={};return Object.keys(e).forEach(n=>{t[n]=z0(e[n])}),t}function rn(e,t,n={clone:!0}){const r=n.clone?D({},e):e;return Rn(e)&&Rn(t)&&Object.keys(t).forEach(o=>{b.isValidElement(t[o])?r[o]=t[o]:Rn(t[o])&&Object.prototype.hasOwnProperty.call(e,o)&&Rn(e[o])?r[o]=rn(e[o],t[o],n):n.clone?r[o]=Rn(t[o])?z0(t[o]):t[o]:r[o]=t[o]}),r}const qb=Object.freeze(Object.defineProperty({__proto__:null,default:rn,isPlainObject:Rn},Symbol.toStringTag,{value:"Module"}));function gi(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}const Yb=Object.freeze(Object.defineProperty({__proto__:null,default:gi},Symbol.toStringTag,{value:"Module"}));var L0={exports:{}},me={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=Symbol.for("react.transitional.element"),Fd=Symbol.for("react.portal"),rl=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),al=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),ll=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),ul=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),pl=Symbol.for("react.lazy"),Xb=Symbol.for("react.view_transition"),Zb=Symbol.for("react.client.reference");function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Dd:switch(e=e.type,e){case rl:case il:case ol:case cl:case ul:case Xb:return e;default:switch(e=e&&e.$$typeof,e){case sl:case ll:case pl:case dl:return e;case al:return e;default:return t}}case Fd:return t}}}me.ContextConsumer=al;me.ContextProvider=sl;me.Element=Dd;me.ForwardRef=ll;me.Fragment=rl;me.Lazy=pl;me.Memo=dl;me.Portal=Fd;me.Profiler=il;me.StrictMode=ol;me.Suspense=cl;me.SuspenseList=ul;me.isContextConsumer=function(e){return Nt(e)===al};me.isContextProvider=function(e){return Nt(e)===sl};me.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dd};me.isForwardRef=function(e){return Nt(e)===ll};me.isFragment=function(e){return Nt(e)===rl};me.isLazy=function(e){return Nt(e)===pl};me.isMemo=function(e){return Nt(e)===dl};me.isPortal=function(e){return Nt(e)===Fd};me.isProfiler=function(e){return Nt(e)===il};me.isStrictMode=function(e){return Nt(e)===ol};me.isSuspense=function(e){return Nt(e)===cl};me.isSuspenseList=function(e){return Nt(e)===ul};me.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rl||e===il||e===ol||e===cl||e===ul||typeof e=="object"&&e!==null&&(e.$$typeof===pl||e.$$typeof===dl||e.$$typeof===sl||e.$$typeof===al||e.$$typeof===ll||e.$$typeof===Zb||e.getModuleId!==void 0)};me.typeOf=Nt;L0.exports=me;var Qf=L0.exports;const e2=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function D0(e){const t=`${e}`.match(e2);return t&&t[1]||""}function F0(e,t=""){return e.displayName||e.name||D0(e)||t}function Kf(e,t,n){const r=F0(t);return e.displayName||(r!==""?`${n}(${r})`:n)}function t2(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return F0(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Qf.ForwardRef:return Kf(e,e.render,"ForwardRef");case Qf.Memo:return Kf(e,e.type,"memo");default:return}}}const n2=Object.freeze(Object.defineProperty({__proto__:null,default:t2,getFunctionName:D0},Symbol.toStringTag,{value:"Module"}));function Ye(e){if(typeof e!="string")throw new Error(gi(7));return e.charAt(0).toUpperCase()+e.slice(1)}const r2=Object.freeze(Object.defineProperty({__proto__:null,default:Ye},Symbol.toStringTag,{value:"Module"}));function o2(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function i2(e,t=166){let n;function r(...o){const i=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(i,t)}return r.clear=()=>{clearTimeout(n)},r}function a2(e,t){return()=>null}function B0(e,t){var n,r;return b.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Qo(e){return e&&e.ownerDocument||document}function s2(e){return Qo(e).defaultView||window}function l2(e,t){return()=>null}function U0(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const W0=typeof window<"u"?b.useLayoutEffect:b.useEffect;let qf=0;function c2(e){const[t,n]=b.useState(e),r=e||t;return b.useEffect(()=>{t==null&&(qf+=1,n(`mui-${qf}`))},[t]),r}const Yf=Wa.useId;function u2(e){if(Yf!==void 0){const t=Yf();return e??t}return c2(e)}function d2(e,t,n,r,o){return null}function p2({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=b.useRef(e!==void 0),[i,a]=b.useState(t),s=o?e:i,c=b.useCallback(l=>{o||a(l)},[]);return[s,c]}function vs(e){const t=b.useRef(e);return W0(()=>{t.current=e}),b.useRef((...n)=>(0,t.current)(...n)).current}function fl(...e){return b.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{U0(n,t)})},e)}const Xf={};function f2(e,t){const n=b.useRef(Xf);return n.current===Xf&&(n.current=e(t)),n}const m2=[];function h2(e){b.useEffect(e,m2)}class ml{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new ml}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function H0(){const e=f2(ml.create).current;return h2(e.disposeEffect),e}let hl=!0,vu=!1;const g2=new ml,y2={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function v2(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&y2[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function x2(e){e.metaKey||e.altKey||e.ctrlKey||(hl=!0)}function sc(){hl=!1}function w2(){this.visibilityState==="hidden"&&vu&&(hl=!0)}function b2(e){e.addEventListener("keydown",x2,!0),e.addEventListener("mousedown",sc,!0),e.addEventListener("pointerdown",sc,!0),e.addEventListener("touchstart",sc,!0),e.addEventListener("visibilitychange",w2,!0)}function S2(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return hl||v2(t)}function k2(){const e=b.useCallback(o=>{o!=null&&b2(o.ownerDocument)},[]),t=b.useRef(!1);function n(){return t.current?(vu=!0,g2.start(100,()=>{vu=!1}),t.current=!1,!0):!1}function r(o){return S2(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function xs(e,t){const n=D({},t);return Object.keys(e).forEach(r=>{if(r.toString().match(/^(components|slots)$/))n[r]=D({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},!i||!Object.keys(i)?n[r]=o:!o||!Object.keys(o)?n[r]=i:(n[r]=D({},i),Object.keys(o).forEach(a=>{n[r][a]=xs(o[a],i[a])}))}else n[r]===void 0&&(n[r]=e[r])}),n}function zt(e,t,n=void 0){const r={};return Object.keys(e).forEach(o=>{r[o]=e[o].reduce((i,a)=>{if(a){const s=t(a);s!==""&&i.push(s),n&&n[a]&&i.push(n[a])}return i},[]).join(" ")}),r}const Zf=e=>e,C2=()=>{let e=Zf;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Zf}}},G0=C2(),E2={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Et(e,t,n="Mui"){const r=E2[t];return r?`${n}-${r}`:`${G0.generate(e)}-${t}`}function Lt(e,t,n="Mui"){const r={};return t.forEach(o=>{r[o]=Et(e,o,n)}),r}function j2(e,t=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(t,Math.min(e,n))}const _2=Object.freeze(Object.defineProperty({__proto__:null,default:j2},Symbol.toStringTag,{value:"Module"}));function je(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function R2(e){return typeof e=="string"}function $2(e,t,n){return e===void 0||R2(e)?t:D({},t,{ownerState:D({},t.ownerState,n)})}function J0(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=J0(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function bt(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=J0(e))&&(r&&(r+=" "),r+=t);return r}function xu(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(r=>r.match(/^on[A-Z]/)&&typeof e[r]=="function"&&!t.includes(r)).forEach(r=>{n[r]=e[r]}),n}function em(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function P2(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const h=bt(n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),y=D({},n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),v=D({},n,o,r);return h.length>0&&(v.className=h),Object.keys(y).length>0&&(v.style=y),{props:v,internalRef:void 0}}const a=xu(D({},o,r)),s=em(r),c=em(o),l=t(a),u=bt(l==null?void 0:l.className,n==null?void 0:n.className,i,o==null?void 0:o.className,r==null?void 0:r.className),d=D({},l==null?void 0:l.style,n==null?void 0:n.style,o==null?void 0:o.style,r==null?void 0:r.style),p=D({},l,n,c,s);return u.length>0&&(p.className=u),Object.keys(d).length>0&&(p.style=d),{props:p,internalRef:l.ref}}function T2(e,t,n){return typeof e=="function"?e(t,n):e}const O2=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function A2(e){var t;const{elementType:n,externalSlotProps:r,ownerState:o,skipResolvingSlotProps:i=!1}=e,a=je(e,O2),s=i?{}:T2(r,o),{props:c,internalRef:l}=P2(D({},a,{externalSlotProps:s})),u=fl(l,s==null?void 0:s.ref,(t=e.additionalProps)==null?void 0:t.ref);return $2(n,D({},c,{ref:u}),o)}function V0(e){if(parseInt(b.version,10)>=19){var t;return(e==null||(t=e.props)==null?void 0:t.ref)||null}return(e==null?void 0:e.ref)||null}const I2=b.createContext(void 0);function M2(e){const{theme:t,name:n,props:r}=e;if(!t||!t.components||!t.components[n])return r;const o=t.components[n];return o.defaultProps?xs(o.defaultProps,r):!o.styleOverrides&&!o.variants?xs(o,r):r}function N2({props:e,name:t}){const n=b.useContext(I2);return M2({props:e,name:t,theme:{components:n}})}function Ui(e){return N2(e)}var Wi={},lc={exports:{}},tm;function Q0(){return tm||(tm=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(lc)),lc.exports}var cc={exports:{}},nm;function z2(){return nm||(nm=1,function(e){function t(n,r){if(n==null)return{};var o={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(r.indexOf(i)!==-1)continue;o[i]=n[i]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(cc)),cc.exports}function L2(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function D2(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var F2=function(){function e(n){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(D2(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=L2(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),et="-ms-",ws="-moz-",se="-webkit-",K0="comm",Bd="rule",Ud="decl",B2="@import",q0="@keyframes",U2="@layer",W2=Math.abs,gl=String.fromCharCode,H2=Object.assign;function G2(e,t){return Qe(e,0)^45?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function Y0(e){return e.trim()}function J2(e,t){return(e=t.exec(e))?e[0]:e}function le(e,t,n){return e.replace(t,n)}function wu(e,t){return e.indexOf(t)}function Qe(e,t){return e.charCodeAt(t)|0}function yi(e,t,n){return e.slice(t,n)}function Xt(e){return e.length}function Wd(e){return e.length}function wa(e,t){return t.push(e),e}function V2(e,t){return e.map(t).join("")}var yl=1,uo=1,X0=0,ft=0,Ne=0,yo="";function vl(e,t,n,r,o,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:yl,column:uo,length:a,return:""}}function Po(e,t){return H2(vl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Q2(){return Ne}function K2(){return Ne=ft>0?Qe(yo,--ft):0,uo--,Ne===10&&(uo=1,yl--),Ne}function xt(){return Ne=ft<X0?Qe(yo,ft++):0,uo++,Ne===10&&(uo=1,yl++),Ne}function on(){return Qe(yo,ft)}function La(){return ft}function Hi(e,t){return yi(yo,e,t)}function vi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z0(e){return yl=uo=1,X0=Xt(yo=e),ft=0,[]}function ey(e){return yo="",e}function Da(e){return Y0(Hi(ft-1,bu(e===91?e+2:e===40?e+1:e)))}function q2(e){for(;(Ne=on())&&Ne<33;)xt();return vi(e)>2||vi(Ne)>3?"":" "}function Y2(e,t){for(;--t&&xt()&&!(Ne<48||Ne>102||Ne>57&&Ne<65||Ne>70&&Ne<97););return Hi(e,La()+(t<6&&on()==32&&xt()==32))}function bu(e){for(;xt();)switch(Ne){case e:return ft;case 34:case 39:e!==34&&e!==39&&bu(Ne);break;case 40:e===41&&bu(e);break;case 92:xt();break}return ft}function X2(e,t){for(;xt()&&e+Ne!==57;)if(e+Ne===84&&on()===47)break;return"/*"+Hi(t,ft-1)+"*"+gl(e===47?e:xt())}function Z2(e){for(;!vi(on());)xt();return Hi(e,ft)}function eS(e){return ey(Fa("",null,null,null,[""],e=Z0(e),0,[0],e))}function Fa(e,t,n,r,o,i,a,s,c){for(var l=0,u=0,d=a,p=0,h=0,y=0,v=1,w=1,g=1,m=0,x="",k=o,E=i,_=r,R=x;w;)switch(y=m,m=xt()){case 40:if(y!=108&&Qe(R,d-1)==58){wu(R+=le(Da(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:R+=Da(m);break;case 9:case 10:case 13:case 32:R+=q2(y);break;case 92:R+=Y2(La()-1,7);continue;case 47:switch(on()){case 42:case 47:wa(tS(X2(xt(),La()),t,n),c);break;default:R+="/"}break;case 123*v:s[l++]=Xt(R)*g;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+u:g==-1&&(R=le(R,/\f/g,"")),h>0&&Xt(R)-d&&wa(h>32?om(R+";",r,n,d-1):om(le(R," ","")+";",r,n,d-2),c);break;case 59:R+=";";default:if(wa(_=rm(R,t,n,l,u,o,s,x,k=[],E=[],d),i),m===123)if(u===0)Fa(R,t,_,_,k,i,d,s,E);else switch(p===99&&Qe(R,3)===110?100:p){case 100:case 108:case 109:case 115:Fa(e,_,_,r&&wa(rm(e,_,_,0,0,o,s,x,o,k=[],d),E),o,E,d,s,r?k:E);break;default:Fa(R,_,_,_,[""],E,0,s,E)}}l=u=h=0,v=g=1,x=R="",d=a;break;case 58:d=1+Xt(R),h=y;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&K2()==125)continue}switch(R+=gl(m),m*v){case 38:g=u>0?1:(R+="\f",-1);break;case 44:s[l++]=(Xt(R)-1)*g,g=1;break;case 64:on()===45&&(R+=Da(xt())),p=on(),u=d=Xt(x=R+=Z2(La())),m++;break;case 45:y===45&&Xt(R)==2&&(v=0)}}return i}function rm(e,t,n,r,o,i,a,s,c,l,u){for(var d=o-1,p=o===0?i:[""],h=Wd(p),y=0,v=0,w=0;y<r;++y)for(var g=0,m=yi(e,d+1,d=W2(v=a[y])),x=e;g<h;++g)(x=Y0(v>0?p[g]+" "+m:le(m,/&\f/g,p[g])))&&(c[w++]=x);return vl(e,t,n,o===0?Bd:s,c,l,u)}function tS(e,t,n){return vl(e,t,n,K0,gl(Q2()),yi(e,2,-2),0)}function om(e,t,n,r){return vl(e,t,n,Ud,yi(e,0,r),yi(e,r+1,-1),r)}function Yr(e,t){for(var n="",r=Wd(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function nS(e,t,n,r){switch(e.type){case U2:if(e.children.length)break;case B2:case Ud:return e.return=e.return||e.value;case K0:return"";case q0:return e.return=e.value+"{"+Yr(e.children,r)+"}";case Bd:e.value=e.props.join(",")}return Xt(n=Yr(e.children,r))?e.return=e.value+"{"+n+"}":""}function rS(e){var t=Wd(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function oS(e){return function(t){t.root||(t=t.return)&&e(t)}}var iS=function(t,n,r){for(var o=0,i=0;o=i,i=on(),o===38&&i===12&&(n[r]=1),!vi(i);)xt();return Hi(t,ft)},aS=function(t,n){var r=-1,o=44;do switch(vi(o)){case 0:o===38&&on()===12&&(n[r]=1),t[r]+=iS(ft-1,n,r);break;case 2:t[r]+=Da(o);break;case 4:if(o===44){t[++r]=on()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=gl(o)}while(o=xt());return t},sS=function(t,n){return ey(aS(Z0(t),n))},im=new WeakMap,lS=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!im.get(r))&&!o){im.set(t,!0);for(var i=[],a=sS(n,i),s=r.props,c=0,l=0;c<a.length;c++)for(var u=0;u<s.length;u++,l++)t.props[l]=i[c]?a[c].replace(/&\f/g,s[u]):s[u]+" "+a[c]}}},cS=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function ty(e,t){switch(G2(e,t)){case 5103:return se+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return se+e+ws+e+et+e+e;case 6828:case 4268:return se+e+et+e+e;case 6165:return se+e+et+"flex-"+e+e;case 5187:return se+e+le(e,/(\w+).+(:[^]+)/,se+"box-$1$2"+et+"flex-$1$2")+e;case 5443:return se+e+et+"flex-item-"+le(e,/flex-|-self/,"")+e;case 4675:return se+e+et+"flex-line-pack"+le(e,/align-content|flex-|-self/,"")+e;case 5548:return se+e+et+le(e,"shrink","negative")+e;case 5292:return se+e+et+le(e,"basis","preferred-size")+e;case 6060:return se+"box-"+le(e,"-grow","")+se+e+et+le(e,"grow","positive")+e;case 4554:return se+le(e,/([^-])(transform)/g,"$1"+se+"$2")+e;case 6187:return le(le(le(e,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),e,"")+e;case 5495:case 3959:return le(e,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return le(le(e,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+et+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+e+e;case 4095:case 3583:case 4068:case 2532:return le(e,/(.+)-inline(.+)/,se+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xt(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(Qe(e,t+4)!==45)break;case 102:return le(e,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+ws+(Qe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~wu(e,"stretch")?ty(le(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Qe(e,t+1)!==115)break;case 6444:switch(Qe(e,Xt(e)-3-(~wu(e,"!important")&&10))){case 107:return le(e,":",":"+se)+e;case 101:return le(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+se+(Qe(e,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+et+"$2box$3")+e}break;case 5936:switch(Qe(e,t+11)){case 114:return se+e+et+le(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return se+e+et+le(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return se+e+et+le(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return se+e+et+e+e}return e}var uS=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Ud:t.return=ty(t.value,t.length);break;case q0:return Yr([Po(t,{value:le(t.value,"@","@"+se)})],o);case Bd:if(t.length)return V2(t.props,function(i){switch(J2(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yr([Po(t,{props:[le(i,/:(read-\w+)/,":"+ws+"$1")]})],o);case"::placeholder":return Yr([Po(t,{props:[le(i,/:(plac\w+)/,":"+se+"input-$1")]}),Po(t,{props:[le(i,/:(plac\w+)/,":"+ws+"$1")]}),Po(t,{props:[le(i,/:(plac\w+)/,et+"input-$1")]})],o)}return""})}},dS=[uS],ny=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var w=v.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||dS,i={},a,s=[];a=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var w=v.getAttribute("data-emotion").split(" "),g=1;g<w.length;g++)i[w[g]]=!0;s.push(v)});var c,l=[lS,cS];{var u,d=[nS,oS(function(v){u.insert(v)})],p=rS(l.concat(o,d)),h=function(w){return Yr(eS(w),p)};c=function(w,g,m,x){u=m,h(w?w+"{"+g.styles+"}":g.styles),x&&(y.inserted[g.name]=!0)}}var y={key:n,sheet:new F2({key:n,container:a,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:c};return y.sheet.hydrate(s),y},pS=!0;function ry(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):o&&(r+=o+" ")}),r}var Hd=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||pS===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},Gd=function(t,n,r){Hd(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+o:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function fS(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var mS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hS=/[A-Z]|^ms/g,gS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oy=function(t){return t.charCodeAt(1)===45},am=function(t){return t!=null&&typeof t!="boolean"},uc=s0(function(e){return oy(e)?e:e.replace(hS,"-$&").toLowerCase()}),sm=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(gS,function(r,o,i){return Zt={name:o,styles:i,next:Zt},o})}return mS[t]!==1&&!oy(t)&&typeof n=="number"&&n!==0?n+"px":n};function xi(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return Zt={name:o.name,styles:o.styles,next:Zt},o.name;var i=n;if(i.styles!==void 0){var a=i.next;if(a!==void 0)for(;a!==void 0;)Zt={name:a.name,styles:a.styles,next:Zt},a=a.next;var s=i.styles+";";return s}return yS(e,t,n)}case"function":{if(e!==void 0){var c=Zt,l=n(e);return Zt=c,xi(e,t,l)}break}}var u=n;if(t==null)return u;var d=t[u];return d!==void 0?d:u}function yS(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=xi(e,t,n[o])+";";else for(var i in n){var a=n[i];if(typeof a!="object"){var s=a;t!=null&&t[s]!==void 0?r+=i+"{"+t[s]+"}":am(s)&&(r+=uc(i)+":"+sm(i,s)+";")}else if(Array.isArray(a)&&typeof a[0]=="string"&&(t==null||t[a[0]]===void 0))for(var c=0;c<a.length;c++)am(a[c])&&(r+=uc(i)+":"+sm(i,a[c])+";");else{var l=xi(e,t,a);switch(i){case"animation":case"animationName":{r+=uc(i)+":"+l+";";break}default:r+=i+"{"+l+"}"}}}return r}var lm=/label:\s*([^\s;{]+)\s*(;|$)/g,Zt;function Gi(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";Zt=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,o+=xi(n,t,i);else{var a=i;o+=a[0]}for(var s=1;s<e.length;s++)if(o+=xi(n,t,e[s]),r){var c=i;o+=c[s]}lm.lastIndex=0;for(var l="",u;(u=lm.exec(o))!==null;)l+="-"+u[1];var d=fS(o)+l;return{name:d,styles:o,next:Zt}}var vS=function(t){return t()},iy=Wa.useInsertionEffect?Wa.useInsertionEffect:!1,ay=iy||vS,cm=iy||b.useLayoutEffect,sy=b.createContext(typeof HTMLElement<"u"?ny({key:"css"}):null),xS=sy.Provider,Jd=function(t){return b.forwardRef(function(n,r){var o=b.useContext(sy);return t(n,o,r)})},Ji=b.createContext({}),Vd={}.hasOwnProperty,Su="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",wS=function(t,n){var r={};for(var o in n)Vd.call(n,o)&&(r[o]=n[o]);return r[Su]=t,r},bS=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Hd(n,r,o),ay(function(){return Gd(n,r,o)}),null},SS=Jd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[Su],i=[r],a="";typeof e.className=="string"?a=ry(t.registered,i,e.className):e.className!=null&&(a=e.className+" ");var s=Gi(i,void 0,b.useContext(Ji));a+=t.key+"-"+s.name;var c={};for(var l in e)Vd.call(e,l)&&l!=="css"&&l!==Su&&(c[l]=e[l]);return c.className=a,n&&(c.ref=n),b.createElement(b.Fragment,null,b.createElement(bS,{cache:t,serialized:s,isStringTag:typeof o=="string"}),b.createElement(o,c))}),kS=SS;Q0();var um=function(t,n){var r=arguments;if(n==null||!Vd.call(n,"css"))return b.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=kS,i[1]=wS(t,n);for(var a=2;a<o;a++)i[a]=r[a];return b.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(um||(um={}));var CS=Jd(function(e,t){var n=e.styles,r=Gi([n],void 0,b.useContext(Ji)),o=b.useRef();return cm(function(){var i=t.key+"-global",a=new t.sheet.constructor({key:i,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,c=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),c!==null&&(s=!0,c.setAttribute("data-emotion",i),a.hydrate([c])),o.current=[a,s],function(){a.flush()}},[t]),cm(function(){var i=o.current,a=i[0],s=i[1];if(s){i[1]=!1;return}if(r.next!==void 0&&Gd(t,r.next,!0),a.tags.length){var c=a.tags[a.tags.length-1].nextElementSibling;a.before=c,a.flush()}t.insert("",r,a,!1)},[t,r.name]),null});function ly(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Gi(t)}function ES(){var e=ly.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var jS=uu,_S=function(t){return t!=="theme"},dm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?jS:_S},pm=function(t,n,r){var o;if(n){var i=n.shouldForwardProp;o=t.__emotion_forwardProp&&i?function(a){return t.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},RS=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Hd(n,r,o),ay(function(){return Gd(n,r,o)}),null},$S=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,i,a;n!==void 0&&(i=n.label,a=n.target);var s=pm(t,n,r),c=s||dm(o),l=!c("as");return function(){var u=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(i!==void 0&&d.push("label:"+i+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{var p=u[0];d.push(p[0]);for(var h=u.length,y=1;y<h;y++)d.push(u[y],p[y])}var v=Jd(function(w,g,m){var x=l&&w.as||o,k="",E=[],_=w;if(w.theme==null){_={};for(var R in w)_[R]=w[R];_.theme=b.useContext(Ji)}typeof w.className=="string"?k=ry(g.registered,E,w.className):w.className!=null&&(k=w.className+" ");var $=Gi(d.concat(E),g.registered,_);k+=g.key+"-"+$.name,a!==void 0&&(k+=" "+a);var L=l&&s===void 0?dm(x):c,O={};for(var z in w)l&&z==="as"||L(z)&&(O[z]=w[z]);return O.className=k,m&&(O.ref=m),b.createElement(b.Fragment,null,b.createElement(RS,{cache:g,serialized:$,isStringTag:typeof x=="string"}),b.createElement(x,O))});return v.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=o,v.__emotion_styles=d,v.__emotion_forwardProp=s,Object.defineProperty(v,"toString",{value:function(){return"."+a}}),v.withComponent=function(w,g){var m=e(w,D({},n,g,{shouldForwardProp:pm(v,g,!0)}));return m.apply(void 0,d)},v}},PS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ku=$S.bind(null);PS.forEach(function(e){ku[e]=ku(e)});function TS(e,t){const n=ny({key:"css",prepend:e});if(t){const r=n.insert;n.insert=(...o)=>(o[1].styles.match(/^@layer\s+[^{]*$/)||(o[1].styles=`@layer mui {${o[1].styles}}`),r(...o))}return n}const dc=new Map;function OS(e){const{injectFirst:t,enableCssLayer:n,children:r}=e,o=b.useMemo(()=>{const i=`${t}-${n}`;if(typeof document=="object"&&dc.has(i))return dc.get(i);const a=TS(t,n);return dc.set(i,a),a},[t,n]);return t||n?f.jsx(xS,{value:o,children:r}):r}function AS(e){return e==null||Object.keys(e).length===0}function IS(e){const{styles:t,defaultTheme:n={}}=e,r=typeof t=="function"?o=>t(AS(o)?n:o):t;return f.jsx(CS,{styles:r})}function MS(e,t){return ku(e,t)}const NS=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},fm=[];function zS(e){return fm[0]=e,Gi(fm)}const LS=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:IS,StyledEngineProvider:OS,ThemeContext:Ji,css:ly,default:MS,internal_processStyles:NS,internal_serializeStyles:zS,keyframes:ES},Symbol.toStringTag,{value:"Module"})),DS=vn(LS),FS=vn(qb),BS=vn(r2),US=vn(n2),WS=["values","unit","step"],HS=e=>{const t=Object.keys(e).map(n=>({key:n,val:e[n]}))||[];return t.sort((n,r)=>n.val-r.val),t.reduce((n,r)=>D({},n,{[r.key]:r.val}),{})};function cy(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=je(e,WS),i=HS(t),a=Object.keys(i);function s(p){return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`}function c(p){return`@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`}function l(p,h){const y=a.indexOf(h);return`@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(y!==-1&&typeof t[a[y]]=="number"?t[a[y]]:h)-r/100}${n})`}function u(p){return a.indexOf(p)+1<a.length?l(p,a[a.indexOf(p)+1]):s(p)}function d(p){const h=a.indexOf(p);return h===0?s(a[1]):h===a.length-1?c(a[h]):l(p,a[a.indexOf(p)+1]).replace("@media","@media not all and")}return D({keys:a,values:i,up:s,down:c,between:l,only:u,not:d,unit:n},o)}const GS={borderRadius:4};function Ko(e,t){return t?rn(e,t,{clone:!1}):e}const Qd={xs:0,sm:600,md:900,lg:1200,xl:1536},mm={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${Qd[e]}px)`};function yn(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const i=r.breakpoints||mm;return t.reduce((a,s,c)=>(a[i.up(i.keys[c])]=n(t[c]),a),{})}if(typeof t=="object"){const i=r.breakpoints||mm;return Object.keys(t).reduce((a,s)=>{if(Object.keys(i.values||Qd).indexOf(s)!==-1){const c=i.up(s);a[c]=n(t[s],s)}else{const c=s;a[c]=t[c]}return a},{})}return n(t)}function JS(e={}){var t;return((t=e.keys)==null?void 0:t.reduce((r,o)=>{const i=e.up(o);return r[i]={},r},{}))||{}}function hm(e,t){return e.reduce((n,r)=>{const o=n[r];return(!o||Object.keys(o).length===0)&&delete n[r],n},t)}function xl(e,t,n=!0){if(!t||typeof t!="string")return null;if(e&&e.vars&&n){const r=`vars.${t}`.split(".").reduce((o,i)=>o&&o[i]?o[i]:null,e);if(r!=null)return r}return t.split(".").reduce((r,o)=>r&&r[o]!=null?r[o]:null,e)}function bs(e,t,n,r=n){let o;return typeof e=="function"?o=e(n):Array.isArray(e)?o=e[n]||r:o=xl(e,n)||r,t&&(o=t(o,r,e)),o}function Oe(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=a=>{if(a[t]==null)return null;const s=a[t],c=a.theme,l=xl(c,r)||{};return yn(a,s,d=>{let p=bs(l,o,d);return d===p&&typeof d=="string"&&(p=bs(l,o,`${t}${d==="default"?"":Ye(d)}`,d)),n===!1?p:{[n]:p}})};return i.propTypes={},i.filterProps=[t],i}function VS(e){const t={};return n=>(t[n]===void 0&&(t[n]=e(n)),t[n])}const QS={m:"margin",p:"padding"},KS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},gm={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},qS=VS(e=>{if(e.length>2)if(gm[e])e=gm[e];else return[e];const[t,n]=e.split(""),r=QS[t],o=KS[n]||"";return Array.isArray(o)?o.map(i=>r+i):[r+o]}),Kd=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],qd=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Kd,...qd];function Vi(e,t,n,r){var o;const i=(o=xl(e,t,!1))!=null?o:n;return typeof i=="number"?a=>typeof a=="string"?a:i*a:Array.isArray(i)?a=>typeof a=="string"?a:i[a]:typeof i=="function"?i:()=>{}}function uy(e){return Vi(e,"spacing",8)}function Qi(e,t){if(typeof t=="string"||t==null)return t;const n=Math.abs(t),r=e(n);return t>=0?r:typeof r=="number"?-r:`-${r}`}function YS(e,t){return n=>e.reduce((r,o)=>(r[o]=Qi(t,n),r),{})}function XS(e,t,n,r){if(t.indexOf(n)===-1)return null;const o=qS(n),i=YS(o,r),a=e[n];return yn(e,a,i)}function dy(e,t){const n=uy(e.theme);return Object.keys(e).map(r=>XS(e,t,r,n)).reduce(Ko,{})}function Re(e){return dy(e,Kd)}Re.propTypes={};Re.filterProps=Kd;function $e(e){return dy(e,qd)}$e.propTypes={};$e.filterProps=qd;function ZS(e=8){if(e.mui)return e;const t=uy({spacing:e}),n=(...r)=>(r.length===0?[1]:r).map(i=>{const a=t(i);return typeof a=="number"?`${a}px`:a}).join(" ");return n.mui=!0,n}function wl(...e){const t=e.reduce((r,o)=>(o.filterProps.forEach(i=>{r[i]=o}),r),{}),n=r=>Object.keys(r).reduce((o,i)=>t[i]?Ko(o,t[i](r)):o,{});return n.propTypes={},n.filterProps=e.reduce((r,o)=>r.concat(o.filterProps),[]),n}function Pt(e){return typeof e!="number"?e:`${e}px solid`}function Dt(e,t){return Oe({prop:e,themeKey:"borders",transform:t})}const ek=Dt("border",Pt),tk=Dt("borderTop",Pt),nk=Dt("borderRight",Pt),rk=Dt("borderBottom",Pt),ok=Dt("borderLeft",Pt),ik=Dt("borderColor"),ak=Dt("borderTopColor"),sk=Dt("borderRightColor"),lk=Dt("borderBottomColor"),ck=Dt("borderLeftColor"),uk=Dt("outline",Pt),dk=Dt("outlineColor"),bl=e=>{if(e.borderRadius!==void 0&&e.borderRadius!==null){const t=Vi(e.theme,"shape.borderRadius",4),n=r=>({borderRadius:Qi(t,r)});return yn(e,e.borderRadius,n)}return null};bl.propTypes={};bl.filterProps=["borderRadius"];wl(ek,tk,nk,rk,ok,ik,ak,sk,lk,ck,bl,uk,dk);const Sl=e=>{if(e.gap!==void 0&&e.gap!==null){const t=Vi(e.theme,"spacing",8),n=r=>({gap:Qi(t,r)});return yn(e,e.gap,n)}return null};Sl.propTypes={};Sl.filterProps=["gap"];const kl=e=>{if(e.columnGap!==void 0&&e.columnGap!==null){const t=Vi(e.theme,"spacing",8),n=r=>({columnGap:Qi(t,r)});return yn(e,e.columnGap,n)}return null};kl.propTypes={};kl.filterProps=["columnGap"];const Cl=e=>{if(e.rowGap!==void 0&&e.rowGap!==null){const t=Vi(e.theme,"spacing",8),n=r=>({rowGap:Qi(t,r)});return yn(e,e.rowGap,n)}return null};Cl.propTypes={};Cl.filterProps=["rowGap"];const pk=Oe({prop:"gridColumn"}),fk=Oe({prop:"gridRow"}),mk=Oe({prop:"gridAutoFlow"}),hk=Oe({prop:"gridAutoColumns"}),gk=Oe({prop:"gridAutoRows"}),yk=Oe({prop:"gridTemplateColumns"}),vk=Oe({prop:"gridTemplateRows"}),xk=Oe({prop:"gridTemplateAreas"}),wk=Oe({prop:"gridArea"});wl(Sl,kl,Cl,pk,fk,mk,hk,gk,yk,vk,xk,wk);function Xr(e,t){return t==="grey"?t:e}const bk=Oe({prop:"color",themeKey:"palette",transform:Xr}),Sk=Oe({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Xr}),kk=Oe({prop:"backgroundColor",themeKey:"palette",transform:Xr});wl(bk,Sk,kk);function gt(e){return e<=1&&e!==0?`${e*100}%`:e}const Ck=Oe({prop:"width",transform:gt}),Yd=e=>{if(e.maxWidth!==void 0&&e.maxWidth!==null){const t=n=>{var r,o;const i=((r=e.theme)==null||(r=r.breakpoints)==null||(r=r.values)==null?void 0:r[n])||Qd[n];return i?((o=e.theme)==null||(o=o.breakpoints)==null?void 0:o.unit)!=="px"?{maxWidth:`${i}${e.theme.breakpoints.unit}`}:{maxWidth:i}:{maxWidth:gt(n)}};return yn(e,e.maxWidth,t)}return null};Yd.filterProps=["maxWidth"];const Ek=Oe({prop:"minWidth",transform:gt}),jk=Oe({prop:"height",transform:gt}),_k=Oe({prop:"maxHeight",transform:gt}),Rk=Oe({prop:"minHeight",transform:gt});Oe({prop:"size",cssProperty:"width",transform:gt});Oe({prop:"size",cssProperty:"height",transform:gt});const $k=Oe({prop:"boxSizing"});wl(Ck,Yd,Ek,jk,_k,Rk,$k);const Ki={border:{themeKey:"borders",transform:Pt},borderTop:{themeKey:"borders",transform:Pt},borderRight:{themeKey:"borders",transform:Pt},borderBottom:{themeKey:"borders",transform:Pt},borderLeft:{themeKey:"borders",transform:Pt},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Pt},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:bl},color:{themeKey:"palette",transform:Xr},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Xr},backgroundColor:{themeKey:"palette",transform:Xr},p:{style:$e},pt:{style:$e},pr:{style:$e},pb:{style:$e},pl:{style:$e},px:{style:$e},py:{style:$e},padding:{style:$e},paddingTop:{style:$e},paddingRight:{style:$e},paddingBottom:{style:$e},paddingLeft:{style:$e},paddingX:{style:$e},paddingY:{style:$e},paddingInline:{style:$e},paddingInlineStart:{style:$e},paddingInlineEnd:{style:$e},paddingBlock:{style:$e},paddingBlockStart:{style:$e},paddingBlockEnd:{style:$e},m:{style:Re},mt:{style:Re},mr:{style:Re},mb:{style:Re},ml:{style:Re},mx:{style:Re},my:{style:Re},margin:{style:Re},marginTop:{style:Re},marginRight:{style:Re},marginBottom:{style:Re},marginLeft:{style:Re},marginX:{style:Re},marginY:{style:Re},marginInline:{style:Re},marginInlineStart:{style:Re},marginInlineEnd:{style:Re},marginBlock:{style:Re},marginBlockStart:{style:Re},marginBlockEnd:{style:Re},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Sl},rowGap:{style:Cl},columnGap:{style:kl},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:gt},maxWidth:{style:Yd},minWidth:{transform:gt},height:{transform:gt},maxHeight:{transform:gt},minHeight:{transform:gt},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function Pk(...e){const t=e.reduce((r,o)=>r.concat(Object.keys(o)),[]),n=new Set(t);return e.every(r=>n.size===Object.keys(r).length)}function Tk(e,t){return typeof e=="function"?e(t):e}function py(){function e(n,r,o,i){const a={[n]:r,theme:o},s=i[n];if(!s)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:u,style:d}=s;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const p=xl(o,l)||{};return d?d(a):yn(a,r,y=>{let v=bs(p,u,y);return y===v&&typeof y=="string"&&(v=bs(p,u,`${n}${y==="default"?"":Ye(y)}`,y)),c===!1?v:{[c]:v}})}function t(n){var r;const{sx:o,theme:i={},nested:a}=n||{};if(!o)return null;const s=(r=i.unstable_sxConfig)!=null?r:Ki;function c(l){let u=l;if(typeof l=="function")u=l(i);else if(typeof l!="object")return l;if(!u)return null;const d=JS(i.breakpoints),p=Object.keys(d);let h=d;return Object.keys(u).forEach(y=>{const v=Tk(u[y],i);if(v!=null)if(typeof v=="object")if(s[y])h=Ko(h,e(y,v,i,s));else{const w=yn({theme:i},v,g=>({[y]:g}));Pk(w,v)?h[y]=t({sx:v,theme:i,nested:!0}):h=Ko(h,w)}else h=Ko(h,e(y,v,i,s))}),!a&&i.modularCssLayers?{"@layer sx":hm(p,h)}:hm(p,h)}return Array.isArray(o)?o.map(c):c(o)}return t}const El=py();El.filterProps=["sx"];function fy(e,t){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/,"*:where($1)")]:t}:n.palette.mode===e?t:{}}const Ok=["breakpoints","palette","spacing","shape"];function Xd(e={},...t){const{breakpoints:n={},palette:r={},spacing:o,shape:i={}}=e,a=je(e,Ok),s=cy(n),c=ZS(o);let l=rn({breakpoints:s,direction:"ltr",components:{},palette:D({mode:"light"},r),spacing:c,shape:D({},GS,i)},a);return l.applyStyles=fy,l=t.reduce((u,d)=>rn(u,d),l),l.unstable_sxConfig=D({},Ki,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return El({sx:d,theme:this})},l}const Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Xd,private_createBreakpoints:cy,unstable_applyStyles:fy},Symbol.toStringTag,{value:"Module"})),Ik=vn(Ak),Mk=["sx"],Nk=e=>{var t,n;const r={systemProps:{},otherProps:{}},o=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:Ki;return Object.keys(e).forEach(i=>{o[i]?r.systemProps[i]=e[i]:r.otherProps[i]=e[i]}),r};function my(e){const{sx:t}=e,n=je(e,Mk),{systemProps:r,otherProps:o}=Nk(n);let i;return Array.isArray(t)?i=[r,...t]:typeof t=="function"?i=(...a)=>{const s=t(...a);return Rn(s)?D({},r,s):r}:i=D({},r,t),D({},o,{sx:i})}const zk=Object.freeze(Object.defineProperty({__proto__:null,default:El,extendSxProp:my,unstable_createStyleFunctionSx:py,unstable_defaultSxConfig:Ki},Symbol.toStringTag,{value:"Module"})),Lk=vn(zk);var vo=Kn;Object.defineProperty(Wi,"__esModule",{value:!0});var Dk=Wi.default=Xk;Wi.shouldForwardProp=Ba;Wi.systemDefaultTheme=void 0;var _t=vo(Q0()),Cu=vo(z2()),Ss=Jk(DS),Fk=FS;vo(BS);vo(US);var Bk=vo(Ik),Uk=vo(Lk);const Wk=["ownerState"],Hk=["variants"],Gk=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function hy(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(hy=function(r){return r?n:t})(e)}function Jk(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=hy(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function Vk(e){return Object.keys(e).length===0}function Qk(e){return typeof e=="string"&&e.charCodeAt(0)>96}function Ba(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}function ym(e,t){return t&&e&&typeof e=="object"&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}const Kk=Wi.systemDefaultTheme=(0,Bk.default)(),qk=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function ba({defaultTheme:e,theme:t,themeId:n}){return Vk(t)?e:t[n]||t}function Yk(e){return e?(t,n)=>n[e]:null}function Ua(e,t,n){let{ownerState:r}=t,o=(0,Cu.default)(t,Wk);const i=typeof e=="function"?e((0,_t.default)({ownerState:r},o)):e;if(Array.isArray(i))return i.flatMap(a=>Ua(a,(0,_t.default)({ownerState:r},o),n));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:a=[]}=i;let c=(0,Cu.default)(i,Hk);return a.forEach(l=>{let u=!0;if(typeof l.props=="function"?u=l.props((0,_t.default)({ownerState:r},o,r)):Object.keys(l.props).forEach(d=>{(r==null?void 0:r[d])!==l.props[d]&&o[d]!==l.props[d]&&(u=!1)}),u){Array.isArray(c)||(c=[c]);const d=typeof l.style=="function"?l.style((0,_t.default)({ownerState:r},o,r)):l.style;c.push(n?ym((0,Ss.internal_serializeStyles)(d),n):d)}}),c}return n?ym((0,Ss.internal_serializeStyles)(i),n):i}function Xk(e={}){const{themeId:t,defaultTheme:n=Kk,rootShouldForwardProp:r=Ba,slotShouldForwardProp:o=Ba}=e,i=a=>(0,Uk.default)((0,_t.default)({},a,{theme:ba((0,_t.default)({},a,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,(a,s={})=>{(0,Ss.internal_processStyles)(a,_=>_.filter(R=>!(R!=null&&R.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:u,skipSx:d,overridesResolver:p=Yk(qk(l))}=s,h=(0,Cu.default)(s,Gk),y=c&&c.startsWith("Mui")||l?"components":"custom",v=u!==void 0?u:l&&l!=="Root"&&l!=="root"||!1,w=d||!1;let g,m=Ba;l==="Root"||l==="root"?m=r:l?m=o:Qk(a)&&(m=void 0);const x=(0,Ss.default)(a,(0,_t.default)({shouldForwardProp:m,label:g},h)),k=_=>typeof _=="function"&&_.__emotion_real!==_||(0,Fk.isPlainObject)(_)?R=>{const $=ba({theme:R.theme,defaultTheme:n,themeId:t});return Ua(_,(0,_t.default)({},R,{theme:$}),$.modularCssLayers?y:void 0)}:_,E=(_,...R)=>{let $=k(_);const L=R?R.map(k):[];c&&p&&L.push(U=>{const Q=ba((0,_t.default)({},U,{defaultTheme:n,themeId:t}));if(!Q.components||!Q.components[c]||!Q.components[c].styleOverrides)return null;const q=Q.components[c].styleOverrides,W={};return Object.entries(q).forEach(([G,re])=>{W[G]=Ua(re,(0,_t.default)({},U,{theme:Q}),Q.modularCssLayers?"theme":void 0)}),p(U,W)}),c&&!v&&L.push(U=>{var Q;const q=ba((0,_t.default)({},U,{defaultTheme:n,themeId:t})),W=q==null||(Q=q.components)==null||(Q=Q[c])==null?void 0:Q.variants;return Ua({variants:W},(0,_t.default)({},U,{theme:q}),q.modularCssLayers?"theme":void 0)}),w||L.push(i);const O=L.length-R.length;if(Array.isArray(_)&&O>0){const U=new Array(O).fill("");$=[..._,...U],$.raw=[..._.raw,...U]}const z=x($,...L);return a.muiName&&(z.muiName=a.muiName),z};return x.withConfig&&(E.withConfig=x.withConfig),E}}function Zk(e,t){return D({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},t)}var Ae={};const e5=vn(Yb),t5=vn(_2);var gy=Kn;Object.defineProperty(Ae,"__esModule",{value:!0});var vm=Ae.alpha=wy;Ae.blend=h5;Ae.colorChannel=void 0;var n5=Ae.darken=ep;Ae.decomposeColor=Mt;var r5=Ae.emphasize=by,o5=Ae.getContrastRatio=u5;Ae.getLuminance=ks;Ae.hexToRgb=yy;Ae.hslToRgb=xy;var i5=Ae.lighten=tp;Ae.private_safeAlpha=d5;Ae.private_safeColorChannel=void 0;Ae.private_safeDarken=p5;Ae.private_safeEmphasize=m5;Ae.private_safeLighten=f5;Ae.recomposeColor=xo;Ae.rgbToHex=c5;var xm=gy(e5),a5=gy(t5);function Zd(e,t=0,n=1){return(0,a5.default)(e,t,n)}function yy(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let n=e.match(t);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function s5(e){const t=e.toString(16);return t.length===1?`0${t}`:t}function Mt(e){if(e.type)return e;if(e.charAt(0)==="#")return Mt(yy(e));const t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,xm.default)(9,e));let r=e.substring(t+1,e.length-1),o;if(n==="color"){if(r=r.split(" "),o=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o)===-1)throw new Error((0,xm.default)(10,o))}else r=r.split(",");return r=r.map(i=>parseFloat(i)),{type:n,values:r,colorSpace:o}}const vy=e=>{const t=Mt(e);return t.values.slice(0,3).map((n,r)=>t.type.indexOf("hsl")!==-1&&r!==0?`${n}%`:n).join(" ")};Ae.colorChannel=vy;const l5=(e,t)=>{try{return vy(e)}catch{return e}};Ae.private_safeColorChannel=l5;function xo(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return t.indexOf("rgb")!==-1?r=r.map((o,i)=>i<3?parseInt(o,10):o):t.indexOf("hsl")!==-1&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),t.indexOf("color")!==-1?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${t}(${r})`}function c5(e){if(e.indexOf("#")===0)return e;const{values:t}=Mt(e);return`#${t.map((n,r)=>s5(r===3?Math.round(255*n):n)).join("")}`}function xy(e){e=Mt(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=(l,u=(l+n/30)%12)=>o-i*Math.max(Math.min(u-3,9-u,1),-1);let s="rgb";const c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(s+="a",c.push(t[3])),xo({type:s,values:c})}function ks(e){e=Mt(e);let t=e.type==="hsl"||e.type==="hsla"?Mt(xy(e)).values:e.values;return t=t.map(n=>(e.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function u5(e,t){const n=ks(e),r=ks(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function wy(e,t){return e=Mt(e),t=Zd(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,xo(e)}function d5(e,t,n){try{return wy(e,t)}catch{return e}}function ep(e,t){if(e=Mt(e),t=Zd(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]*=1-t;return xo(e)}function p5(e,t,n){try{return ep(e,t)}catch{return e}}function tp(e,t){if(e=Mt(e),t=Zd(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(e.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return xo(e)}function f5(e,t,n){try{return tp(e,t)}catch{return e}}function by(e,t=.15){return ks(e)>.5?ep(e,t):tp(e,t)}function m5(e,t,n){try{return by(e,t)}catch{return e}}function h5(e,t,n,r=1){const o=(c,l)=>Math.round((c**(1/r)*(1-n)+l**(1/r)*n)**r),i=Mt(e),a=Mt(t),s=[o(i.values[0],a.values[0]),o(i.values[1],a.values[1]),o(i.values[2],a.values[2])];return xo({type:"rgb",values:s})}const wi={black:"#000",white:"#fff"},g5={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Er={50:"#f3e5f5",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",700:"#7b1fa2"},jr={300:"#e57373",400:"#ef5350",500:"#f44336",700:"#d32f2f",800:"#c62828"},To={300:"#ffb74d",400:"#ffa726",500:"#ff9800",700:"#f57c00",900:"#e65100"},_r={50:"#e3f2fd",200:"#90caf9",400:"#42a5f5",700:"#1976d2",800:"#1565c0"},Rr={300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",700:"#0288d1",900:"#01579b"},$r={300:"#81c784",400:"#66bb6a",500:"#4caf50",700:"#388e3c",800:"#2e7d32",900:"#1b5e20"},y5=["mode","contrastThreshold","tonalOffset"],wm={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:wi.white,default:wi.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},pc={text:{primary:wi.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:wi.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function bm(e,t,n,r){const o=r.light||r,i=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=i5(e.main,o):t==="dark"&&(e.dark=n5(e.main,i)))}function v5(e="light"){return e==="dark"?{main:_r[200],light:_r[50],dark:_r[400]}:{main:_r[700],light:_r[400],dark:_r[800]}}function x5(e="light"){return e==="dark"?{main:Er[200],light:Er[50],dark:Er[400]}:{main:Er[500],light:Er[300],dark:Er[700]}}function w5(e="light"){return e==="dark"?{main:jr[500],light:jr[300],dark:jr[700]}:{main:jr[700],light:jr[400],dark:jr[800]}}function b5(e="light"){return e==="dark"?{main:Rr[400],light:Rr[300],dark:Rr[700]}:{main:Rr[700],light:Rr[500],dark:Rr[900]}}function S5(e="light"){return e==="dark"?{main:$r[400],light:$r[300],dark:$r[700]}:{main:$r[800],light:$r[500],dark:$r[900]}}function k5(e="light"){return e==="dark"?{main:To[400],light:To[300],dark:To[700]}:{main:"#ed6c02",light:To[500],dark:To[900]}}function C5(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=je(e,y5),i=e.primary||v5(t),a=e.secondary||x5(t),s=e.error||w5(t),c=e.info||b5(t),l=e.success||S5(t),u=e.warning||k5(t);function d(v){return o5(v,pc.text.primary)>=n?pc.text.primary:wm.text.primary}const p=({color:v,name:w,mainShade:g=500,lightShade:m=300,darkShade:x=700})=>{if(v=D({},v),!v.main&&v[g]&&(v.main=v[g]),!v.hasOwnProperty("main"))throw new Error(gi(11,w?` (${w})`:"",g));if(typeof v.main!="string")throw new Error(gi(12,w?` (${w})`:"",JSON.stringify(v.main)));return bm(v,"light",m,r),bm(v,"dark",x,r),v.contrastText||(v.contrastText=d(v.main)),v},h={dark:pc,light:wm};return rn(D({common:D({},wi),mode:t,primary:p({color:i,name:"primary"}),secondary:p({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:p({color:s,name:"error"}),warning:p({color:u,name:"warning"}),info:p({color:c,name:"info"}),success:p({color:l,name:"success"}),grey:g5,contrastThreshold:n,getContrastText:d,augmentColor:p,tonalOffset:r},h[t]),o)}const E5=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function j5(e){return Math.round(e*1e5)/1e5}const Sm={textTransform:"uppercase"},km='"Roboto", "Helvetica", "Arial", sans-serif';function _5(e,t){const n=typeof t=="function"?t(e):t,{fontFamily:r=km,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:s=500,fontWeightBold:c=700,htmlFontSize:l=16,allVariants:u,pxToRem:d}=n,p=je(n,E5),h=o/14,y=d||(g=>`${g/l*h}rem`),v=(g,m,x,k,E)=>D({fontFamily:r,fontWeight:g,fontSize:y(m),lineHeight:x},r===km?{letterSpacing:`${j5(k/m)}em`}:{},E,u),w={h1:v(i,96,1.167,-1.5),h2:v(i,60,1.2,-.5),h3:v(a,48,1.167,0),h4:v(a,34,1.235,.25),h5:v(a,24,1.334,0),h6:v(s,20,1.6,.15),subtitle1:v(a,16,1.75,.15),subtitle2:v(s,14,1.57,.1),body1:v(a,16,1.5,.15),body2:v(a,14,1.43,.15),button:v(s,14,1.75,.4,Sm),caption:v(a,12,1.66,.4),overline:v(a,12,2.66,1,Sm),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return rn(D({htmlFontSize:l,pxToRem:y,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:s,fontWeightBold:c},w),p,{clone:!1})}const R5=.2,$5=.14,P5=.12;function xe(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${R5})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${$5})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${P5})`].join(",")}const T5=["none",xe(0,2,1,-1,0,1,1,0,0,1,3,0),xe(0,3,1,-2,0,2,2,0,0,1,5,0),xe(0,3,3,-2,0,3,4,0,0,1,8,0),xe(0,2,4,-1,0,4,5,0,0,1,10,0),xe(0,3,5,-1,0,5,8,0,0,1,14,0),xe(0,3,5,-1,0,6,10,0,0,1,18,0),xe(0,4,5,-2,0,7,10,1,0,2,16,1),xe(0,5,5,-3,0,8,10,1,0,3,14,2),xe(0,5,6,-3,0,9,12,1,0,3,16,2),xe(0,6,6,-3,0,10,14,1,0,4,18,3),xe(0,6,7,-4,0,11,15,1,0,4,20,3),xe(0,7,8,-4,0,12,17,2,0,5,22,4),xe(0,7,8,-4,0,13,19,2,0,5,24,4),xe(0,7,9,-4,0,14,21,2,0,5,26,4),xe(0,8,9,-5,0,15,22,2,0,6,28,5),xe(0,8,10,-5,0,16,24,2,0,6,30,5),xe(0,8,11,-5,0,17,26,2,0,6,32,5),xe(0,9,11,-5,0,18,28,2,0,7,34,6),xe(0,9,12,-6,0,19,29,2,0,7,36,6),xe(0,10,13,-6,0,20,31,3,0,8,38,7),xe(0,10,13,-6,0,21,33,3,0,8,40,7),xe(0,10,14,-6,0,22,35,3,0,8,42,7),xe(0,11,14,-7,0,23,36,3,0,9,44,8),xe(0,11,15,-7,0,24,38,3,0,9,46,8)],O5=["duration","easing","delay"],A5={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},I5={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Cm(e){return`${Math.round(e)}ms`}function M5(e){if(!e)return 0;const t=e/36;return Math.round((4+15*t**.25+t/5)*10)}function N5(e){const t=D({},A5,e.easing),n=D({},I5,e.duration);return D({getAutoHeightDuration:M5,create:(o=["all"],i={})=>{const{duration:a=n.standard,easing:s=t.easeInOut,delay:c=0}=i;return je(i,O5),(Array.isArray(o)?o:[o]).map(l=>`${l} ${typeof a=="string"?a:Cm(a)} ${s} ${typeof c=="string"?c:Cm(c)}`).join(",")}},e,{easing:t,duration:n})}const z5={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},L5=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function D5(e={},...t){const{mixins:n={},palette:r={},transitions:o={},typography:i={}}=e,a=je(e,L5);if(e.vars&&e.generateCssVars===void 0)throw new Error(gi(18));const s=C5(r),c=Xd(e);let l=rn(c,{mixins:Zk(c.breakpoints,n),palette:s,shadows:T5.slice(),typography:_5(s,i),transitions:N5(o),zIndex:D({},z5)});return l=rn(l,a),l=t.reduce((u,d)=>rn(u,d),l),l.unstable_sxConfig=D({},Ki,a==null?void 0:a.unstable_sxConfig),l.unstable_sx=function(d){return El({sx:d,theme:this})},l}const np=D5(),rp="$$material";function F5(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const B5=e=>F5(e)&&e!=="classes",mt=Dk({themeId:rp,defaultTheme:np,rootShouldForwardProp:B5});function U5(e){return Et("MuiSvgIcon",e)}Lt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const W5=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],H5=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${Ye(t)}`,`fontSize${Ye(n)}`]};return zt(o,U5,r)},G5=mt("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${Ye(n.color)}`],t[`fontSize${Ye(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,i,a,s,c,l,u,d,p,h,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((i=e.typography)==null||(a=i.pxToRem)==null?void 0:a.call(i,20))||"1.25rem",medium:((s=e.typography)==null||(c=s.pxToRem)==null?void 0:c.call(s,24))||"1.5rem",large:((l=e.typography)==null||(u=l.pxToRem)==null?void 0:u.call(l,35))||"2.1875rem"}[t.fontSize],color:(d=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?d:{action:(h=(e.vars||e).palette)==null||(h=h.action)==null?void 0:h.active,disabled:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[t.color]}}),Eu=b.forwardRef(function(t,n){const r=Ui({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:l,inheritViewBox:u=!1,titleAccess:d,viewBox:p="0 0 24 24"}=r,h=je(r,W5),y=b.isValidElement(o)&&o.type==="svg",v=D({},r,{color:a,component:s,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:u,viewBox:p,hasSvgAsChild:y}),w={};u||(w.viewBox=p);const g=H5(v);return f.jsxs(G5,D({as:s,className:bt(g.root,i),focusable:"false",color:l,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n},w,h,y&&o.props,{ownerState:v,children:[y?o.props.children:o,d?f.jsx("title",{children:d}):null]}))});Eu.muiName="SvgIcon";function J5(e,t){function n(r,o){return f.jsx(Eu,D({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=Eu.muiName,b.memo(b.forwardRef(n))}const V5={configure:e=>{G0.configure(e)}},Q5=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Ye,createChainedFunction:o2,createSvgIcon:J5,debounce:i2,deprecatedPropType:a2,isMuiElement:B0,ownerDocument:Qo,ownerWindow:s2,requirePropFactory:l2,setRef:U0,unstable_ClassNameGenerator:V5,unstable_useEnhancedEffect:W0,unstable_useId:u2,unsupportedProp:d2,useControlled:p2,useEventCallback:vs,useForkRef:fl,useIsFocusVisible:k2},Symbol.toStringTag,{value:"Module"})),K5=vn(Q5);var Em;function wo(){return Em||(Em=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=K5}(ac)),ac}var q5=Kn;Object.defineProperty(Ld,"__esModule",{value:!0});var Sy=Ld.default=void 0,Y5=q5(wo()),X5=f;Sy=Ld.default=(0,Y5.default)((0,X5.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41z"}),"WbSunny");var ky={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jm=pe.createContext&&pe.createContext(ky),Un=function(){return Un=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Un.apply(this,arguments)},Z5=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Cy(e){return e&&e.map(function(t,n){return pe.createElement(t.tag,Un({key:n},t.attr),Cy(t.child))})}function op(e){return function(t){return pe.createElement(e3,Un({attr:Un({},e.attr)},t),Cy(e.child))}}function e3(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=Z5(e,["attr","size","title"]),s=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),pe.createElement("svg",Un({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:c,style:Un(Un({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&pe.createElement("title",null,i),e.children)};return jm!==void 0?pe.createElement(jm.Consumer,null,function(n){return t(n)}):t(ky)}function t3(e){return op({attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"}}]})(e)}var ip={},n3=Kn;Object.defineProperty(ip,"__esModule",{value:!0});var Cs=ip.default=void 0;i3(b);var r3=n3(wo()),o3=f;function Ey(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ey=function(r){return r?n:t})(e)}function i3(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ey(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}Cs=ip.default=(0,r3.default)((0,o3.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");const a3="/portfolio/assets/ssr-GrlIfDym.pdf",s3="/portfolio/assets/csr-Bqt1Se6G.pdf",l3="/portfolio/assets/ssg-Chrggcsw.pdf",c3="/portfolio/assets/react-shorthand-CTcmsFPX.pdf",u3="/portfolio/assets/react-query-DlGNvf4N.pdf",d3="/portfolio/assets/web-dev-roadmap-DrlsBia7.pdf",p3="/portfolio/assets/nextJS-D7CDgI4R.pdf",f3="/portfolio/assets/vsCodeExtention-aOu4fb4_.pdf",m3="/portfolio/assets/reactLibrary-ANubHNK3.pdf",h3="/portfolio/assets/performanceWithSSR-IPkNU580.pdf",g3="/portfolio/assets/funAPIs-Cdz2G9Dj.pdf",y3="/portfolio/assets/expressServer-B3-AHUDd.pdf",v3="/portfolio/assets/popularReactLibrary-DvNzGoDk.pdf",x3="/portfolio/assets/WebSitePerformance-B8r9JiSM.pdf",w3="/portfolio/assets/reactSolid-BHJLmODe.pdf",b3="/portfolio/assets/webAPI-DqmdEcc3.pdf",S3="/portfolio/assets/reactMaster-W4fLns8D.pdf",k3="/portfolio/assets/jsProTricks-DYD3m5qz.pdf",C3="/portfolio/assets/masterReactWithRepos-eoSnJxzu.pdf",E3="/portfolio/assets/typescript-nPirDxLd.pdf",j3="/portfolio/assets/frontendMaster-BxLC9tUg.pdf",_3="/portfolio/assets/useFormHook-Y37g77aQ.pdf",R3="/portfolio/assets/js-build-in-CzIitfIC.pdf",$3="/portfolio/assets/js-build-in-2-DuUZUnC8.pdf",P3="/portfolio/assets/factoryPattern-Dt5LV3Om.pdf",T3="/portfolio/assets/projectIdeas-DpKOuG58.pdf",O3="/portfolio/assets/jsWebAPI-gSl3kGNk.pdf",A3="/portfolio/assets/jsCheatSheet-BDZ8uge1.pdf",I3="/portfolio/assets/isr-CqNyoza6.pdf",M3="/portfolio/assets/reactInterview-DAat4t4s.pdf",N3="/portfolio/assets/frontendInterview-CsNB2NKW.pdf",z3="/portfolio/assets/useContext-BEwGT9St.pdf",L3="/portfolio/assets/use-API-React19-Bw0-rd9v.pdf",D3="/portfolio/assets/improveCodeQuality-DGLvBoNw.pdf",F3="/portfolio/assets/improveReact19-CdSF67Ib.pdf",B3="/portfolio/assets/mongodbCheatSheet-BUevZsQ2.pdf",U3="/portfolio/assets/nextVsReact-mjtZheOK.pdf",W3="/portfolio/assets/NextJSHooks-Bqqu8NgO.pdf",H3="/portfolio/assets/nextJS15-CwmkhFSJ.pdf",G3="/portfolio/assets/zustandVSredux-BP_jFMaj.pdf",B=e=>`/portfolio/img/${e}`,ce={name:"Jimmy Ramani",roles:["Full Stack Developer","Frontend Developer","Backend Developer","Cloud & DevOps Engineer"],description:{lead:"Full Stack Developer with 2.6+ years building scalable web applications and AI-enabled solutions using React.js, Next.js, Angular, and Node.js.",bullets:["Skilled in designing efficient APIs, database management, optimizing application performance, and deploying cloud-based solutions.","Experienced leading projects end-to-end and delivering high-quality, business-focused solutions through strong technical expertise and problem-solving.","Interested in impactful projects and continuously improving my technical skills."]},github:"https://github.com/jimmy-ramani-0912",resume:"https://drive.google.com/file/d/1iyg2AO2vbi0c9l0lxExIfvnq5E5tMZQo/view?usp=sharing",linkedin:"https://www.linkedin.com/in/jimmyramani",insta:"https://www.instagram.com/jim_y0912/",medium:"https://medium.com/@jimmyramani",codepen:"https://codepen.io/jimmyramani"},jy=[{title:"Frontend",skills:[{name:"Flutter",image:"https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"},{name:"React Js",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},{name:"Redux",image:"https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"},{name:"Next Js",image:"https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"},{name:"HTML",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"},{name:"CSS",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"},{name:"JavaScript",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"},{name:"Bootstrap",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"},{name:"Material UI",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAh1BMVEX///8Af/8Ad/8AfP8Aev/v+P8Adf8Ae/+Puv8Adv+72P8Ac/87k/8Agf/t9f/6/f/U5v+lyf/m8f+10//H3v/C2/9Tnf9npv/e7P+w0P9+s/9Il/+Ywf8rjP8xkP/A2f8ch//Q4/9zrf94r/+HuP+dxP8JhP9aoP/a6f9Mmv+py/+Tv/8Ab/9IeMWVAAAHEElEQVR4nO2d6XqqMBBAJUQodcG1tlqpS2tre9//+W6oWgWyTAiB4DfnNwaOZiQkk6HTQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCm2X5Pu3Wda/Y91zl8Mhoan3KY9AghD8btQJgeAhL5YMVtEgTRp+GXHx9Cj0EGU7N2AHz1g/RUXm8EOry76PnsaHqIjc76SrwTQQI7b1nO18vw+5Djx4SeDifvRuc9ns/KzhsszDu8kFcSXk7kRerfZLsmf9e1MTpx8ifoeSH5MWpLzOOBXE/jEVVYxX+/9q+h0alvBW2F4tcq8DwNwb/eWb0g6z79qkOxuwty55ALjtYke3i1gp7fW1R6V/ygNHcGqWA30zttCLJQjF6Nmrzl7UAK7csEx1FYOLxyQXYFhzejRi8854JPKbjjHW9BkN0VV89GzabE+3zwqQTnPd7hVgRZKO4MQzH3XwgRXBT7pzVBNkaiHwbtzjec4FMJ9rkXY0vQJBQnT4X/QhcF2eitVCjGS5meS4Kp4l47FMe+KPgcFNQPxVl+INKw4FolmIYi/ClcHnyOCrJ+eoSFYvweAZpzTzBVXAKeq79VweeuYBqKY0VL23UEa0pXMKxFkF3WeiZpZ/gpGJeZCw5qEmSjt6eJqJl3zlNARYJ0UZdgqsgPxRdg8JUR9CPht1q9IPs6ve9CE9sEGnwlBKm/NfLTFfS8KBeKw+IjeHWCoi5jU5Cd9POm0zwEGsGnKxj1zZ9K9QXT6cX38/c6HSjHZeUFqfdirFdO8DcUmeKsz52RqEawgt5pIMgukhwoKftZkeDq2mAVcyZGgiYIBZeXu001vfOXTf1+YsHJqctX1TvdE+zMCQ1pZb3TQcHO8Gex11oDbptg9aAgCrZX0De5Rco+7IYgJUk/LDPSPH14nRTXBZ0SjH4nfKHTSFnYjZp9OP4RPSa6IEjPuRvxkug+DvnBZWZjKjB0QfA60TN5gs8m/V795vpAfOR/0gHBcHdzyEyyEpYnO9H/zf+gA4I0m7umXE45k1+qeXRA8AARVC6InSiMktsjyELxqFLkLJe2SVC+KJ0GHyf3ZNoqQW5OzxlB9lDbBDvxjt9Pg/4X9/jWCfJTe8QZfC0UZH8cuanQMBDnYLZSMJvbyoJPkkXbUsFOd3EZvUXyPGhTwfnuacmPbjhlBDudUcIUfeIrZi/NBFm8hz7tmeRbdcoKsms/HhJlArSJYPfyj92TLSyrGZQUBGEgeL3n+k9G1+CmYHbUZHQNVgVfygk+Z8e9Zmkk7gnG+1w20Z0JFp8970qQN3twT4LchIY7Elxwj78fwck/7uH3Iyg4/H4EBbOMZoLcJlEQxvNKb2a7ZYLCnT13Iije2XMXgtL1DJHguDWCis0FbRdULmS0XFC9FFWrIP+7Li8I2NkjFuR/My4Jgnb2tFcwfodlkLZVEJySUatg2XnRAjPwzh5hLQsrgntuo9qCk0/45gJ/JWjEiuCQcrfTaApq7ewR1pP5sCHYeeYNqvQEtXb2UF84FW9HkHtn1hEc6ezs8SNJOrYtQc7YCi6otbNHtn/NpmDxBg0W1NrZI9+BaFUw/3wDFNTa2UND1R5Sq4Lpn/S1fQqpfTRKNHb2QPZCWBZkofi36hEAUvvn/zSCD7SP27Zgmq91mkYJ14CDBXlaPMgGtBfCvmAaigGlwQZSfwwsSAlwmb0OQfbHsVzCKnMBBf0AXJimHkEwMMFgBc8DeW2foF6dNn5BIIcFQ16KpZihYETrqqA8y4sDvw6Cs4KKLK8CbwPRoM9JQV+zSGK+/KHrgv5Ga49qV7hO46og0coRFKdKuyroJxrtyJPd3RQM4RVSLsPfdgn6R2AboA0nDgp6FDb8HMuDz2FBUB+FrNO4KugRZf1v2DqNs4Kqis/xErwr0bAMdXlUY1HZk8TYg08V11Smvoj6aUJUfF1nx6VH9QZFFQJ4HuQWX59oVGBLW2jKD/ZEHxY6mNY6TbQ2rMllAnBOJlv7Rm+dprqyOWUAz6pFyeVngJc/9G5LYzXEF7dmNI/zs73OImmuuFkzaJSDCnv9Rb/XluC7MNGJJz/UKDfAKzDYBJzC+1VQac0qQ0YlS8dJ9aSLpLVTrvifGNUiaQP86Px5KKBEtUjaBJWFIqxUchNoJVqI9Y5OBV+WqWcaijrlyhvhQbt00C00NNyLXAPDhV7poBvKvDKgCbTSLm7oVVqt0Spl7orOB18W3VA0e/FKE2gmr5m+OqcJ4APUakul1sgLKBTJ4bHpCy2PeoAaBtW9gKwJFKHYzuDLIhugRoIiUC1jKpigr+ONqjXBuyvaexFnExQGqHZfpdoE2ddt2H4ZbiNcB6hk0OhcvD1OoRhGD47OSJjDQrF3d8GXw+H5FgRBEARBEARBEARBEARBEARBEARBEARBEMZ/Z7h0SlKcxhsAAAAASUVORK5CYII="},{name:"Antd",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/antdesign/antdesign-original.svg"},{name:"Sass",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"},{name:"Styled-component",image:"https://corevaluetech.com/assets/illustrations/styled-component.webp"}]},{title:"Backend & Database",skills:[{name:"Nest Js",image:"https://www.vectorlogo.zone/logos/nestjs/nestjs-ar21.svg"},{name:"Node Js",image:"https://nodejs.org/static/images/logo.svg"},{name:"Express Js",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"},{name:"Socket.io",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg"},{name:"MongoDB",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"},{name:"PostgreSQL",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"},{name:"Redis",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg"},{name:"Firebase",image:"https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"},{name:"MySQL",image:"https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg"}]},{title:"DevOps",skills:[{name:"CI/CD",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-plain.svg"},{name:"EC2",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{name:"Docker",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"},{name:"Jenkins",image:"https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"},{name:"Kubernetes",image:"https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"},{name:"Terraform",image:"https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"}]},{title:"Others",skills:[{name:"Git",image:"https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"},{name:"GitHub",image:B("feef95b70a.webp")},{name:"Android Studio",image:B("876a1335eb.webp")},{name:"VS Code",image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg"},{name:"Cursor",image:"https://cdn.jsdelivr.net/npm/simple-icons@16/icons/cursor.svg"},{name:"Claude",image:"https://cdn.jsdelivr.net/npm/simple-icons@16/icons/claude.svg"},{name:"Antigravity",image:"https://cdn.jsdelivr.net/npm/simple-icons@16/icons/googlegemini.svg"},{name:"Netlify",image:"https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"},{name:"Vercel",image:B("b10ab3413e.webp")},{name:"Postman",image:"https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"}]}],fc=e=>`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(e)}&size=128`,_m=[{id:0,img:fc("https://softrefine.com"),role:"Full Stack Developer",company:"SoftRefine Technology Pvt. Ltd.",date:"Jun '23 – Present",desc:`▪ Developed and maintained high-performance full-stack web applications using React.js, Node.js, Next.js, Angular, and various databases, contributing to a 30% increase in customer engagement.
▪ Improved frontend performance through code-splitting, lazy loading, memoization, and optimized rendering, reducing load time by 45%.
▪ Designed and developed secure REST APIs while optimizing database queries, reducing API latency by 35%.
▪ Led multiple end-to-end full-stack projects from concept to deployment, ensuring clean architecture, reusable components and maintainability using best coding practices.`,skills:["React.js","Node.js","Next.js","Angular","REST APIs","Tailwind","HTML","CSS"],doc:[{link:"https://invoice-gen-me.netlify.app/",workImg:B("919f081fac.webp")},{link:"https://readme-gen-me.netlify.app/",workImg:B("391d78adb6.webp")},{link:"https://reactjs-1-me.netlify.app/",workImg:B("69de833103.webp")},{link:"https://mini-projects-js.netlify.app/",workImg:B("9fd70e5671.webp")},{link:"https://test-6-me.netlify.app/",workImg:B("c4db4db65e.webp")},{link:"https://test-5-me.netlify.app/",workImg:B("40f1000ddb.webp")},{link:"https://test-4-me-resp.netlify.app/",workImg:B("e53917f536.webp")}]},{id:1,img:fc("https://websolguru.com"),role:"Full Stack Developer Intern",company:"WebSolGuru Pvt. Ltd.",date:"Nov '22 – Jan '23",desc:`▪ Built interactive mobile applications using Flutter with responsive UIs and smooth animations.
▪ Developed and integrated Node.js CRUD APIs, improving app performance and user interactivity.
▪ Applied state management (BLoC, Provider, and Riverpod) to improve scalability and performance.
▪ Published app to Google Play Store, reaching 100+ downloads and maintaining a 4.8+ rating.`,skills:["Flutter","Dart","Node.js","BLoC","Provider","Riverpod"],doc:[{link:"https://play.google.com/store/apps/details?id=com.websolguru.anwarkamal&hl=en_US",workImg:B("40bf9f257c.webp")},{link:"https://medium.com/@jimmyramani/my-car-35373fe7385c",workImg:B("f305186ed1.webp")}]},{id:2,img:fc("https://webearl.com"),role:"Full Stack Developer Intern",company:"WebEarl Technologies Pvt. Ltd.",date:"May '22 – Jun '22",desc:`▪ Designed clean, modern Flutter UIs, improving load times and user engagement.
▪ Built and integrated Node.js APIs with real-time updates for seamless app interaction.
▪ Focused on frontend optimization for faster performance and smoother UX.
▪ Integrated Razorpay for secure and reliable online payments.`,skills:["Flutter","Dart","Node.js","Razorpay"],doc:[{link:"https://medium.com/@jimmyramani/zambet-ecommerce-application-79e97f7c6e47",workImg:B("98dba178b9.webp")}]}],Rm=[{id:0,img:B("238afa7493.webp"),school:"Charotar University of Science and Technology, Anand",date:"2020 - 2024",grade:"8.94 CGPA",desc:"I am currently pursuing a Bachelor's degree in Information Technology at Charotar University of Science and Technology, Anand. I have completed 6 semesters and have a CGPA of 8.89. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of UGFS Club at KDPIT, where I am learning and working on exciting projects with a team of talented developers.",degree:"Bachelor of Technology - BTech, Information Technology"},{id:1,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGSg97DqEHrN646YfEMA7Tzt7GXP0zIhEfAJKae-BFsW1WE4PikqkVSGCkAZrDkK0_eo&usqp=CAU",school:"Shree Swaminarayan Gurukul,Sardarnagar,Bhavnagar",date:"2018 - 2020",grade:"70%",desc:"I completed my class 12 high school education at Shree Swaminarayan Gurukul,Sardarnagar,Bhavnagar, where I studied Science.",degree:"GSEB HSC(XII), Science"},{id:2,school:"St. Xavier's High School, Bhavnagar",date:"2018",grade:"87.33%",desc:"I completed my class 10 education at St. Xavier's High School, Bhavnagar, where I studied Science.",degree:"GSEB SSC(X)"}],ju=[{id:32,title:"First Decacorn",date:"May 2026",description:`Internal workforce management and labour onboarding app for supervisors and organizational staff at First Decacorn Pvt Ltd. Built for authorized internal use to streamline labour onboarding, workforce records, and employee-related operations.

▪ Labour onboarding and registration

▪ Supervisor login and management

▪ Workforce data management and record maintenance

▪ Secure employee information handling with data encrypted in transit

▪ Real-time workforce tracking and updates

▪ Administrator-managed accounts for organizational access only`,image:B("71ba2e325e.webp"),tags:["Flutter","NodeJS","MongoDB","AWS"],category:"mobile app",webapp:"https://play.google.com/store/apps/details?id=com.first.decacorn&hl=en"},{id:31,title:"School Automation System",date:"Nov 2025 – Present",description:`▪ Designed and built a responsive school automation platform for admissions and marketing teams, with multi-school administration and workflows that support enrollment and outreach.

    ▪ AI-assisted admissions with embeddable chat widget/page, live chat, chat history, knowledge base, model retraining, and streaming assistant replies.

    ▪ Role-based access, staff management, analytics and charts, and integrations for daily work and lead tracking.

    ▪ AI Sites with React Flow sitemaps, templates, live preview, SEO, brand setup, and WordPress migration with saved step progress.

    ▪ CRM, contact forms, event booking, and automated sequences.`,image:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",tags:["React.js","CSS","Redux","Redux Thunk","Python","Flask","Django","DynamoDB","Redis","AWS"],category:"web app"},{id:30,title:"AI-Enabled Operations Platform",date:"Nov 2025 – Present",description:`▪ Developed and enhanced a technology platform for mechanical, electrical, and facilities management (M&E/FM) businesses, enabling operational efficiency and collaboration.

    ▪ Built modules for maintenance workflows, service operations, PPM, and reactive maintenance.

    ▪ Integrated AI-driven tools for data-driven decision-making and operational insights across services.

    ▪ Scalable backend services and APIs for multi-company data with independent business unit operations.

    ▪ Real-time data monitoring and reporting to optimize performance, resource utilization, and service delivery.

    ▪ Cross-company workflows, shared services, and centralized management capabilities.

    ▪ Performance optimization and modular architecture to support scalable platform growth.`,image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",tags:["React.js","Redux","Redux Thunk","CSS","Python","AWS","MySQL","Flask","Django"],category:"web app"},{id:29,title:"AI Chatbot Platform",date:"Nov 2025 – Present",description:`▪ Built an AI-powered chatbot platform that enables users to create and deploy custom chatbots trained on website content, documents, and knowledge bases.

    ▪ Automated data ingestion from URLs, PDFs, and text sources with preprocessing and embeddings for accurate contextual responses.

    ▪ Scalable backend for chatbot training, conversations, and vector-based retrieval (RAG).

    ▪ Embeddable chat widget with real-time streaming for integration into any website.

    ▪ Chat history, multi-source training, branding/UI customization, and API access.

    ▪ Secure APIs, rate limiting, and optimized prompt handling for production deployment.`,image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",tags:["React.js","Redux","Tailwind CSS","Redux Thunk","Python","AWS","Django","Flask","Git","DynamoDB","RAG"],category:"web app"},{id:28,title:"My Legal Help",date:"Feb 2025",description:"Book appointment with any lawyer near you! Select your lawyer and preferred time slot according to your convenience and availability.",image:B("cc9603ba85.webp"),tags:["React.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/mylegalhelp-frontend",webapp:"https://mylegalhelp.org.in"},{id:27,title:"Sancorp",date:"May 2025",description:"Material that's Transforming the World.",image:B("e7cfcf0b4f.webp"),tags:["React.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Sancorp",webapp:"https://sancorpsemiconductors.com"},{id:26,title:"My Health",date:"Jun 2025",description:`Manage your health effortlessly with My Health – your trusted companion for healthcare needs, from birth to infinity. Designed to simplify and enhance your healthcare journey, My Health connects patients and doctors in a seamless, user-friendly platform.

Key Features
Easy Appointment Booking: Schedule appointments with top healthcare professionals at your convenience.
Doctor Search: Find specialists based on your needs, including pediatricians, general physicians, dentists, and more.
Secure Login and Verification: Protect your data with secure phone login and OTP-based verification.
User-Friendly Interface: Designed for patients of all ages, making healthcare access simple and intuitive.
`,image:B("cdc10bd5df.webp"),tags:["Flutter","NodeJS","MongoDB","AWS"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/myhealth-app-frontend",webapp:"https://play.google.com/store/apps/details?id=com.chirasumyhealth.patient"},{id:25,title:"My Legal Help",date:"Jun 2025",description:`Navigate legal matters with confidence using MyLegalHelp – your trusted companion for legal support, from advice to advocacy. Built to simplify access to legal services, MyLegalHelp connects clients with qualified legal professionals through a secure, intuitive platform.

Key Features

Easy Appointment Booking: Schedule consultations with experienced lawyers based on your availability.

Lawyer Search: Find legal experts across various fields, including family law, criminal law, property disputes, and more.

Secure Login and Verification: Keep your personal and legal information safe with secure phone login and OTP-based authentication.

User-Friendly Interface: Designed for users of all ages to easily connect with legal help when needed most.
`,image:B("7173d9efb5.webp"),tags:["Flutter","NodeJS","MongoDB","AWS"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/mylegalhelp-app-frontend",webapp:"https://play.google.com/store/apps/details?id=com.mylegalhelp.mylegalhelp"},{id:23,title:"Akshar Pharmacy",date:"Nov 2024",description:"Enhance your organization's sales management with the Salesman Tracking System, a powerful real-time solution tailored to optimize operational efficiency. Designed for superadmins, admins, and salesmen, this comprehensive system offers seamless integration across all levels. Key Features: 1. Real-Time Location Tracking: Monitor your sales team’s movements with precision using socket.io technology.2. Attendance Management: Keep track of your sales force's attendance effortlessly.3. Visit Logging: Record and review all visits made by sales personnel.Instant Notifications: Superadmins and admins receive immediate alerts for any location discrepancies, ensuring full transparency and accountability. 4. User-Friendly Interface: Navigate the system with ease, thanks to its intuitive design. Whether managing a small team or a large workforce, the Salesman Tracking System equips you with the tools needed for efficient, transparent, and accountable sales operations. Boost your team's productivity and maintain strict oversight with our cutting-edge solution.",image:"https://i.postimg.cc/YqnBSw3G/Feature-graphic.png",tags:["Flutter","NodeJS","MongoDB","AWS"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/Akshar-Pharmacy-Salesman-Tracking-App",webapp:"https://play.google.com/store/apps/details?id=com.aksharpharmacy.salesman_tracking_app"},{id:22,title:"Karma Time Foundation",date:"Nov 2024",description:"Karma Time Foundation facilitates a unique value exchange system through our collaborative platform. Members earn minutes by volunteering or sharing their expertise, which can then be used to access products, services, or further their own personal growth. This system not only meets individual needs but also strengthens the bonds between community members.",image:B("9badb45e7e.webp"),tags:["Next.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Minomics-Website",webapp:"https://karma-time-foundation.netlify.app/"},{id:21,title:"Orscope",date:"Oct 2024",description:"Innovation is what Drives Us",image:"https://i.postimg.cc/XqvD9sRN/Screenshot-2024-11-11-161535.png",tags:["React.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/ORSCOPE",webapp:"https://orscope.netlify.app/"},{id:20,title:"MyHealth - From Birth To Infinity",date:"Dec 2024",description:"Book appointment with any doctor near you! Select your doctor and preferred time slot according to your convenience and availability.",image:"https://i.postimg.cc/6qtVJTW8/Screenshot-2024-11-11-161554.png",tags:["React.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/myhealth-frontend",webapp:"https://myhealth.org.in"},{id:19,title:"KTF - Where time is our most valuable currency",date:"Feb 2025",description:"We are dedicated to building a community that thrives on the exchange of time, talents, and resources, creating a network of support and cooperation. At KTF, we believe that every minute you invest in helping others is an investment in our shared future.",image:"https://i.postimg.cc/ZR4Q5bjd/Screenshot-2024-11-11-161628.png",tags:["React.js","JavaScript","Static Website"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Karma-Time-Foundation",webapp:"https://karmatimefoundation.org/"},{id:18,title:"ReactJS Interview Questions & Answers",date:"Jun 2024",description:"ReactJS Interview Questions is a guide for both interviewers and candidates to prepare for ReactJS interviews. It features a curated list of questions covering basic to advanced concepts, helping evaluate understanding and skills in ReactJS development. Ideal for interview preparation or enhancing ReactJS knowledge.",image:B("c9a5a91a07.webp"),tags:["React.js","JavaScript","InterviewPreparation","Interview"],category:"web app",github:"https://github.com/jimmy-ramani-0912/ReactJS-Interview-Questions-and-Answers",webapp:"https://github.com/jimmy-ramani-0912/ReactJS-Interview-Questions-and-Answers"},{id:17,title:"JS Interview Questions & Answers",date:"Jun 2024",description:"JS Interview Questions is a guide for both interviewers and candidates to prepare for JS interviews. It features a curated list of questions covering basic to advanced concepts, helping to evaluate understanding and skills in JS related framework development. Ideal for interview preparation or enhancing JS knowledge.",image:B("c0774c0c13.webp"),tags:["JavaScript","InterviewPreparation","NodeJS","NestJS"],category:"web app",github:"https://github.com/jimmy-ramani-0912/JavaScript-Interview-Questions-and-Answers",webapp:"https://github.com/jimmy-ramani-0912/JavaScript-Interview-Questions-and-Answers"},{id:16,title:"NestJS-Role-Based-Management-App",date:"Jun 2024",description:"Building a Comprehensive Role-Based User Management System with NestJS, PostgreSQL, and TypeORM",image:"https://imgtr.ee/images/2024/08/01/5aed70b47199d9ad680933e8fedcfda0.png",tags:["Nest JS","TypeORM","PostgreSQL"],category:"web app",github:"https://github.com/jimmy-ramani-0912/NestJS-Role-Based-Management-App",webapp:"https://github.com/jimmy-ramani-0912/NestJS-Role-Based-Management-App"},{id:15,title:"NestJS-OTP-Auth-Email",date:"Jun 2024",description:"This project is a NestJS application that provides user authentication, OTP (One Time Password) verification, and email sending functionalities. It uses PostgreSQL for the database, JWT for authentication, and an SMTP server for email sending.",image:"https://imgtr.ee/images/2024/08/01/c30f85957edab0c9d9cc9c97a3fe91a5.png",tags:["NestJS","TypeORM","PostgreSQL","Simple Mail Transfer Protocol (SMTP)"],category:"web app",github:"https://github.com/jimmy-ramani-0912/NestJS-OTP-Auth-Email",webapp:"https://github.com/jimmy-ramani-0912/NestJS-OTP-Auth-Email"},{id:14,title:"NestJS-Auth-REST-API",date:"Jun 2024",description:"Building a Secure Authentication System with NestJS, PostgreSQL, and TypeORM. The combination of NestJS, TypeORM, and PostgreSQL provides a scalable, and efficient stack for developing web services. This article gives a general outline of constructing a basic, yet operational web service using these tools. We will look into the fundamentals of each element, and their collaboration, and guide you through a straightforward example to kickstart your project.",image:"https://imgtr.ee/images/2024/08/01/ad82c62c1ba79538cb9c6b96393330c7.png",tags:["NestJS","TypeORM","PostgreSQL"],category:"web app",github:"https://github.com/jimmy-ramani-0912/NestJS-Auth-REST-API",webapp:"https://github.com/jimmy-ramani-0912/NestJS-Auth-REST-API"},{id:13,title:"NEST-CRUD-REST-API",date:"May 2024",description:"Building CRUD Web Services with NestJS, TypeORM, and PostgreSQL. The combination of NestJS, TypeORM, and PostgreSQL provides a scalable, and efficient stack for developing web services. This article gives a general outline of constructing a basic, yet operational web service using these tools. We will look into the fundamentals of each element, and their collaboration, and guide you through a straightforward example to kickstart your project.",image:"https://imgtr.ee/images/2024/08/01/d592d07f9b3e774d31b357fb04585c8b.png",tags:["NestJS","TypeORM","PostgreSQL"],category:"web app",github:"https://github.com/jimmy-ramani-0912/NEST-CRUD-REST-API",webapp:"https://github.com/jimmy-ramani-0912/NEST-CRUD-REST-API"},{id:12,title:"CoverCreationStation",date:"Apr 2024",description:"Built with the Next.js 14 App Router, TypeScript, Tailwind, Kinde for Auth, Neon for Postgres database, Uploadthing for File uploading, Prisma as the ORM & Stripe for Payment processing",image:B("702c6c52f1.webp"),tags:["Next.js","TypeScript","Tailwind CSS","Kinde","Neon","Uploadthing","Prisma","Stripe"],category:"web app",github:"https://github.com/jimmy-ramani-0912/CoverCreationStation",webapp:"https://github.com/jimmy-ramani-0912/CoverCreationStation"},{id:11,title:"Kloxa",date:"Feb 2024",description:"Kloxa Company offers a comprehensive solution for RO systems via its mobile app, allowing customers to register repairs, installations, and complaints conveniently. With competitive prices on new RO systems and an annual maintenance contract (AMC) plan for all brands, Kloxa ensures efficient service for commercial, domestic, and industrial needs.",image:B("de0595988e.webp"),tags:["Flutter","Php","Mysql"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/Kloxa",webapp:"https://play.google.com/store/apps/details?id=com.app.kloxa"},{id:10,title:"Invoice Generator",date:"Oct 2023",description:"Our invoice generator simplifies the billing process for businesses. It allows you to create professional invoices quickly and easily. With customizable templates and automated calculations, you can generate accurate and polished invoices in no time. Say goodbye to manual invoice creation and hello to a more efficient and professional billing system.",image:B("a47413e8e2.webp"),tags:["React Js","HTML","Tailwind CSS","JSX"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Invoice-Generator",webapp:"https://invoice-gen-me.netlify.app/"},{id:9,title:"Readme Generator",date:"Sep 2023",description:"Our readme generator is a powerful tool for software developers and project managers. It simplifies the process of creating informative and well-structured README files for your projects. With user-friendly templates and easy customization, you can document your project effectively. Save time and ensure that your project is well-documented and easy for others to understand with our README generator.",image:B("3dea769b86.webp"),tags:["React Js","HTML","Styled-Component","JSX"],category:"web app",github:"https://github.com/jimmy-ramani-0912/readme-gen",webapp:"https://readme-gen-me.netlify.app/"},{id:8,title:"AnwarKamal Shayari",date:"Dec 2022",description:"AnwarKamal Shayari is a poetic collection that encapsulates the soulful expressions of Anwar Kamal. Dive into a world of profound emotions and eloquent verses, where each line weaves a tapestry of sentiments. This Shayari (poetry) is a reflection of Anwar Kamal's unique perspective and poetic artistry, offering readers a journey through the beauty of words and the depth of emotions.",image:B("40bf9f257c.webp"),tags:["Flutter","Php","Mysql"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/AnwarKamal_Shayari",webapp:"https://play.google.com/store/apps/details?id=com.websolguru.anwarkamal&hl=en_US"},{id:7,title:"Project Management Dashboard",date:"Aug 2023",description:"Our project management dashboard provides a win-win situation for project teams and project managers. Teams can easily view and update their project status, while managers can monitor progress and make informed decisions. Additionally, teams can customize their project views, and all team members can collaborate seamlessly. This centralized platform streamlines project management processes for increased efficiency and transparency.",image:B("5f66c60440.webp"),tags:["React Js","HTML","CSS","JSX"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Project-Management-Dashboard-React",webapp:"https://reactjs-1-me.netlify.app/"},{id:6,title:"MyCar",date:"Dec 2022 - Jan 2023",description:"MyCar is a user-friendly mobile app designed to simplify car ownership. This app provides a one-stop solution for car owners, offering services such as appointment scheduling, real-time service tracking, cost estimates, and digital invoices. It streamlines communication between car owners and service providers, ensuring a seamless and efficient experience for vehicle maintenance and repairs. MyCar aims to enhance the overall car ownership experience by providing a convenient and centralized platform for managing and maintaining vehicles.",image:B("f305186ed1.webp"),tags:["Flutter","UI - UX","Node JS","Express JS"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/MyCar",webapp:"https://medium.com/@jimmyramani/my-car-35373fe7385c"},{id:5,title:"Track Your Trip",date:"Nov 2022 - Dec 2022",description:"Track Your Trip offers a platform that benefits both travel companies and travelers. Travel companies can showcase their packages for travelers to browse, while travelers have the freedom to create custom trip requests. Travel companies then provide competitive quotes and package details for these custom requests, all conveniently accessible in one place.",image:B("129e9d6d9e.webp"),tags:["React","CSS","HTML","JS","BootStrap","React Js","MongoDb","Node Js","Express Js"],category:"web app",github:"https://github.com/jimmy-ramani-0912/TT_Track_Your_Trip",webapp:"",member:[{name:"Jimmy Ramani",img:"https://avatars.githubusercontent.com/u/138371306?v=4",linkedin:"https://www.linkedin.com/in/jimmyramani",github:"https://github.com/jimmy-ramani-0912"},{name:"Utsav Desai",img:"https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-kid-head-character-with-smile-png-image_6006360.png",linkedin:"https://www.linkedin.com/in/utsavdesai26/",github:"https://github.com/utsavdesai26"}]},{id:4,title:"Portfolio Dashboard",date:"Jul 2023",description:"Our portfolio dashboard is the ultimate solution for managing your portfolio of projects. It provides a comprehensive view of all your projects, helping you assess their performance, priorities, and progress. With customizable features and real-time data, you can make informed decisions and ensure efficient management across your entire portfolio. It's your go-to tool for maximizing portfolio success and transparency.",image:B("2dcb97d78b.webp"),tags:["React Js","HTML","Sass","JSX"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Portfolio-Dashboard-React",webapp:"https://test-5-me.netlify.app/"},{id:3,title:"Project Management Dashboard",date:"Aug 2023",description:"Our project management dashboard is a game-changer for project teams and managers alike. It empowers teams to track and manage their tasks and progress effortlessly. Project managers gain real-time insights into project status and can make data-driven decisions. With customizable views and collaborative tools, it simplifies project management, making it a hub of efficiency and transparency for everyone involved.",image:B("a22dd5f611.webp"),tags:["React Js","HTML","Sass","JSX"],category:"web app",github:"https://github.com/jimmy-ramani-0912/Project-Management-Dashboard-React-2",webapp:"https://test-6-me.netlify.app/"},{id:2,title:"Location-Based-Attendances For Company",date:"May 2023 - April 2023",description:"Location-Based-Attendances is a Flutter app template designed for companies. It streamlines attendance tracking using location data, providing a quick and efficient solution for developers. The template includes features like check-ins and attendance logs, making it a convenient starting point for companies implementing location-based attendance in their Flutter apps.",image:B("fd0e63fb6e.webp"),tags:["Flutter","UI / UX","NodeJS","Express JS","MongoDB"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/Location-Based-Attendances",webapp:"https://medium.com/@jimmyramani/mobile-attendance-system-with-location-using-flutter-node-js-mongo-db-79a5833adb12"},{id:1,title:"Flutter UI Templates",date:"May 2023",description:"Best-Flutter-UI-Templates is a curated collection of ready-to-use user interface templates for Flutter. It simplifies app development by providing high-quality templates covering various categories. Developers can save time and ensure a polished look for their apps, thanks to these pre-designed UI elements like buttons, forms, and navigation bars.",image:B("8ba9063b89.webp"),tags:["Flutter","UI/UX"],category:"mobile app",github:"https://github.com/jimmy-ramani-0912/Best-Flutter-UI-Templates",webapp:""}],$m=[{year:2026,text:"Started learning AI tools deeply and focused on integrating AI capabilities into real-world applications and workflows."},{year:2025,text:"Continued as a Full Stack Developer, strengthening expertise across React.js, Next.js, Angular, Node.js, and cloud platforms."},{year:2024,text:"Led end-to-end full-stack delivery at Softrefine, improving frontend performance and API responsiveness."},{year:2024,text:"Expanded experience in scalable architecture, API optimization, and production-grade engineering practices."},{year:2024,text:"Completed BTech in Information Technology from CHARUSAT with 8.94 CGPA."},{year:2023,text:"Joined Softrefine Technology Pvt Ltd as a Full Stack Developer and started building scalable production applications."},{year:2022,text:"Worked as a Full Stack Developer Intern at WebSolGuru, built Flutter apps, integrated Node.js APIs, and shipped to Play Store."},{year:2022,text:"Completed internship at WebEarl Technologies, building Flutter UIs, real-time Node.js APIs, and Razorpay integrations."},{year:2022,text:"Strengthened core full-stack fundamentals through consistent hands-on development and production-focused learning."},{year:2021,text:"Started professional development journey with JavaScript, frontend engineering, and backend fundamentals."}],bi=[{id:45,title:"Patterns For JavaScript Frontend Mastery",date:"26 July 2024",description:"",image:"https://i.postimg.cc/rwNRSYbm/design-pattern.avif",category:"web",pdfUrl:null,HTML:`<blockquote>
<p style="margin: 0cm 40.2pt 28pt 42.55pt; text-align: center; line-height: 137%; font-size: 30pt; font-family: Calibri, sans-serif;"><span><strong><span style="font-size: 30pt; line-height: 127%; font-family: Georgia, serif;">Patterns For JavaScript FrontEnd Mastery</span></strong></span></p>
</blockquote>
<p style="margin: 0.5cm 40.2pt 28pt 62.55pt; text-align: center; line-height: 137%; font-size: 20pt; font-family: Calibri, sans-serif;"><span style="font-size: 20pt;"><strong><span style="line-height: 127%; font-family: Georgia, serif; ">Tech tools come and go. Patterns remain.</span></strong></span></p>
<p style="text-align: justify;"><span style="font-size: 16px;">Modern web development is driven by JavaScript, a versatile and powerful language that enables the creation of dynamic and responsive web applications. However, as we incorporate new frameworks and libraries into our projects, it's easy to lose sight of their purpose, often using them for the sake of it rather than for their actual benefits.</span></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">This article will explore the architectural patterns and design principles that have stood the test of time, helping developers manage the complexities of frontend applications. It is not another "how-to" guide, but rather a discussion to spark ideas and conversations on this critical topic.</span></p><p style="text-align: justify;">&nbsp;</p>
<p><span style="font-size: 20px;"><strong>The Evolution of Web Development</strong></span></p><p>&nbsp;</p><p><span style="font-size: 18px;"><strong>Before React, Angular, Vue &hellip; </strong><strong>:</strong><strong> </strong><strong>The Era of jQuery</strong></span></p>
<p><span style="font-size: 16px;"><p>&nbsp;</p><strong><img style="display: block; margin-left: auto; margin-right: auto;" src=img("26334afc87.webp") width="400" height="250"><p>&nbsp;</p></strong></span></p>
<p style="text-align: justify;"><span style="font-size: 16px;">In the early days of web development, jQuery was the tool of choice for manipulating the DOM and handling events. It provided a convenient way to select and manipulate the DOM, making JavaScript more accessible.</span></p><p>&nbsp;</p>
<p><span style="font-size: 16px;"><strong>Example Scenario</strong>: Creating a Netflix-like App</span></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">Consider creating a web app similar to Netflix. We display a list of films for the user and save this information in the following format:</span></p><p>&nbsp;</p>
<p><span style="font-size: 16px;">[</span></p>
<p><span style="font-size: 16px;">&nbsp; {id: 1, title: 'Thor', savedForLater: true},</span></p>
<p><span style="font-size: 16px;">&nbsp; {id: 2, title: 'The Avengers', savedForLater: false},</span></p>
<p><span style="font-size: 16px;">&nbsp; {id: 3, title: 'Iron Man', savedForLater: false}</span></p>
<p><span style="font-size: 16px;">]</span></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">We can loop through the array and use appendChild to add relevant information to the document. Each movie has a button to toggle the savedForLater boolean field. We bind the onClick event to update the list and the UI.</span></p><p>&nbsp;</p><p style="text-align: justify;"><span style="font-size: 16px;">Next, we want to add the feature of showing a savedForLater count, A number badge on a bookmark icon button appeared in the navigation bar. To keep this count up-to-date, we bind this to the onClick event of every savedForLater button. This involves updating the list variable, updating the cards UI, and updating the count display.</span></p>
<p><span style="background-color: #34495e; color: #ecf0f1; font-size: 16px;"><p>&nbsp;</p><img style="display: block; margin-left: auto; margin-right: auto;" src=img("6a05fb7b4e.webp") width="400" height="250"><p>&nbsp;</p></span></p>
<p><span style="font-size: 18px;"><strong>The Complexity of DOM Operations and Global Variables</strong></span></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">As features and interactions grow, managing more DOM operations and global variables (like the movie array, isLoading, isLoggedIn, themeColor, etc.) becomes complex and error-prone.</span></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">This is where frontend frameworks such as Angular, React, and Vue come in. These frameworks/libraries handle DOM operations (View) for us once we update the state (Model) of an app. Update the model, change the view. Sounds familiar? Yes, let&rsquo;s take a detour to architectural patterns.</span></p>
<p>&nbsp;</p><p>&nbsp;</p>
<p><span style="font-size: 20px;"><strong>Archit</strong><strong>ectural Patterns in Fronten</strong><strong>d Development</strong></span></p>
<p>&nbsp;</p>
<p><strong>MVVM Pattern | Two-Way Binding</strong></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">The&nbsp;Model-View-ViewModel (MVVM) pattern is a variant of the traditional Model-View-Controller (MVC) architecture. In MVVM, the view (UI) is directly bound to the ViewModel, which in turn is bound to the model (application state). This two-way binding allows for automatic updates between the view and model, making it ideal for CRUD (Create, Read, Update, Delete) applications.</span></p>
<p><strong><p>&nbsp;</p><img style="display: block; margin-left: auto; margin-right: auto;" src=img("807fe781ef.webp") width="600" height="350"><p>&nbsp;</p></strong></p><p><strong>Event Bus | One-Way Binding</strong></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">Messages can be sent to the event bus by components in response to events, such as button clicks by users. For events that interest them, components can also subscribe to the event bus. As soon as the event bus receives a message, it will distribute it to subscribers. The term "one-way binding" refers to this type of middleman-like pattern where the component is not directly read-write bound to the model. Rather than writing independently, a component emits an event to a "state handler" so that it can write after subscribing to a portion of the model. One-way binding is implemented by the library React. As stated differently, we must independently connect the read-write cycle.</span></p>
<p><span style="font-size: 16px;"><p>&nbsp;</p><img style="display: block; margin-left: auto; margin-right: auto;" src=img("8a3a2c89b5.webp") width="400" height="250"><p>&nbsp;</p></span></p>
<p style="text-align: justify;"><span style="font-size: 16px;">In the above example, we could say the button is a publisher to send message to the event bus, and the h1 header is a subscriber listening to changes of the count part of the data model / app state.</span></p>
<p>&nbsp;</p>
<p><strong>Task-Based Apps |&nbsp;CQRS Pattern</strong></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">For task-based applications such as booking systems or e-commerce platforms, the Command Query Responsibility Segregation (CQRS) pattern can be more effective. CQRS separates read operations (queries) from write operations (commands), reducing the complexity of state management.</span></p>
<p><span style="font-size: 16px;"><p>&nbsp;</p><img style="display: block; margin-left: auto; margin-right: auto;" src=img("a7fcf17e13.webp") width="600" height="400"><p>&nbsp;</p></span></p>
<p style="text-align: justify;"><span style="font-size: 16px;">That doesn&rsquo;t mean that frameworks like Angular and Vue.js become useless. Angular service is a good example of applying CQRS pattern: you have private variables storing the items in question, public getters (query) and setters (command) as separate methods. The &ldquo;Managing Data&rdquo; section in Angular&rsquo;s official documentation has a good illustration on this. Architectural pattern capitalizing on CQRS ? Of course there is.</span></p>
<p>&nbsp;</p>
<p><strong>Flux pattern |&nbsp;Redux</strong></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">The Flux pattern, implemented by Redux, enforces a unidirectional data flow, ensuring that state changes are predictable and traceable. In Flux, state can only be mutated through actions dispatched to a central dispatcher.</span></p>
<p style="text-align: justify;"><span style="font-size: 16px;"><p>&nbsp;</p><img src="https://i.postimg.cc/xCM62DbX/5.webp" style="display: block; margin-left: auto; margin-right: auto;"  width="600" height="330"><p>&nbsp;</p></span></p>
<p><strong>Conclusion</strong></p><p>&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: 16px;">We have travelled through the evolution of web development tools, moving from the venerable jQuery to the potent ones of today like Angular, React, and Vue. We break down our web application into two layers: View and Model, and investigate how to control the flow of data between them. By using the MVVM pattern, 2-way binding enables each View to read and update its corresponding portion of the Model directly. The View is tightly bound to the Model by a ViewModel. The design principle of 1-way binding is taken from CQRS; write and read operations are implemented independently, and we do so on purpose. This idea is furthered by flux pattern, which restricts data model mutation to only action dispatching, maintaining control over the overall application state.</span></p>
<p style="text-align: justify;">&nbsp;</p>
<h5 style="line-height: 2.5;"><span style="color: #854CE6; font-size: 12pt;">#JavaScript </span></h5>
<h5 style="line-height: 2.5;"><span style="color: #854CE6; font-size: 12pt;">#Programming </span></h5>
<h5 style="line-height: 2.5;"><span style="color: #854CE6; font-size: 12pt;">#Technology </span></h5>
<h5 style="line-height: 2.5;"><span style="color: #854CE6; font-size: 12pt;">#Software Engineering </span></h5>
<h5 style="line-height: 2.5;"><span style="color: #854CE6; font-size: 12pt;">#Front End Development</span></h5>
<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;">&nbsp;</p>`},{id:44,title:"𝐖𝐡𝐚𝐭 𝐞𝐱𝐚𝐜𝐭𝐥𝐲 𝐚𝐫𝐞 𝐙𝐮𝐬𝐭𝐚𝐧𝐝 𝐚𝐧𝐝 𝐑𝐞𝐝𝐮𝐱?",date:"17 July 2024",description:`𝐖𝐡𝐚𝐭 𝐞𝐱𝐚𝐜𝐭𝐥𝐲 𝐚𝐫𝐞 𝐙𝐮𝐬𝐭𝐚𝐧𝐝 𝐚𝐧𝐝 𝐑𝐞𝐝𝐮𝐱?

𝐙𝐮𝐬𝐭𝐚𝐧𝐝
 - 𝘚𝘮𝘢𝘭𝘭, 𝘧𝘢𝘴𝘵 𝘴𝘵𝘢𝘵𝘦 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵 𝘧𝘰𝘳 𝘙𝘦𝘢𝘤𝘵.
 - 𝘚𝘪𝘮𝘱𝘭𝘦 𝘈𝘗𝘐, 𝘮𝘪𝘯𝘪𝘮𝘢𝘭 𝘣𝘰𝘪𝘭𝘦𝘳𝘱𝘭𝘢𝘵𝘦.
 - 𝘜𝘴𝘦𝘴 𝘙𝘦𝘢𝘤𝘵 𝘩𝘰𝘰𝘬𝘴.
 - 𝘍𝘭𝘦𝘹𝘪𝘣𝘭𝘦 𝘧𝘰𝘳 𝘴𝘮𝘢𝘭𝘭 𝘢𝘯𝘥 𝘭𝘢𝘳𝘨𝘦 𝘢𝘱𝘱𝘴.
 - '𝘤𝘳𝘦𝘢𝘵𝘦' 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘢𝘯𝘥 '𝘶𝘴𝘦𝘚𝘵𝘰𝘳𝘦' 𝘩𝘰𝘰𝘬.
 - 𝘚𝘶𝘱𝘱𝘰𝘳𝘵𝘴 𝘮𝘪𝘥𝘥𝘭𝘦𝘸𝘢𝘳𝘦.
 - 𝘌𝘢𝘴𝘺 𝘵𝘰 𝘵𝘦𝘴𝘵.
 - 𝘖𝘱𝘵𝘪𝘮𝘪𝘻𝘦𝘥 𝘱𝘦𝘳𝘧𝘰𝘳𝘮𝘢𝘯𝘤𝘦.
 - 𝘞𝘰𝘳𝘬𝘴 𝘸𝘪𝘵𝘩 𝘙𝘦𝘢𝘤𝘵 𝘕𝘢𝘵𝘪𝘷𝘦.

𝐑𝐞𝐝𝐮𝐱
 - 𝘗𝘳𝘦𝘥𝘪𝘤𝘵𝘢𝘣𝘭𝘦 𝘴𝘵𝘢𝘵𝘦 𝘤𝘰𝘯𝘵𝘢𝘪𝘯𝘦𝘳 𝘧𝘰𝘳 𝘑𝘢𝘷𝘢𝘚𝘤𝘳𝘪𝘱𝘵.
 - 𝘚𝘪𝘯𝘨𝘭𝘦 𝘴𝘵𝘰𝘳𝘦 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘦𝘯𝘵𝘪𝘳𝘦 𝘴𝘵𝘢𝘵𝘦.
 - 𝘐𝘮𝘮𝘶𝘵𝘢𝘣𝘪𝘭𝘪𝘵𝘺 𝘸𝘪𝘵𝘩 𝘱𝘶𝘳𝘦 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯 𝘳𝘦𝘥𝘶𝘤𝘦𝘳𝘴.
 - 𝘙𝘦𝘲𝘶𝘪𝘳𝘦𝘴 𝘮𝘰𝘳𝘦 𝘣𝘰𝘪𝘭𝘦𝘳𝘱𝘭𝘢𝘵𝘦.
 - 𝘜𝘴𝘦𝘴 𝘢𝘤𝘵𝘪𝘰𝘯𝘴 𝘧𝘰𝘳 𝘴𝘵𝘢𝘵𝘦 𝘤𝘩𝘢𝘯𝘨𝘦𝘴.
 - 𝘔𝘪𝘥𝘥𝘭𝘦𝘸𝘢𝘳𝘦 𝘧𝘰𝘳 𝘴𝘪𝘥𝘦 𝘦𝘧𝘧𝘦𝘤𝘵𝘴.
 - 𝘐𝘯𝘵𝘦𝘨𝘳𝘢𝘵𝘦𝘴 𝘸𝘪𝘵𝘩 𝘙𝘦𝘥𝘶𝘹 𝘋𝘦𝘷𝘛𝘰𝘰𝘭𝘴.
 - 𝘓𝘢𝘳𝘨𝘦 𝘦𝘤𝘰𝘴𝘺𝘴𝘵𝘦𝘮 𝘢𝘯𝘥 𝘤𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘺.
 - 𝘊𝘢𝘯 𝘰𝘱𝘵𝘪𝘮𝘪𝘻𝘦 𝘱𝘦𝘳𝘧𝘰𝘳𝘮𝘢𝘯𝘤𝘦.
 - 𝘞𝘰𝘳𝘬𝘴 𝘸𝘪𝘵𝘩 𝘙𝘦𝘢𝘤𝘵 𝘢𝘯𝘥 𝘰𝘵𝘩𝘦𝘳 𝘧𝘳𝘢𝘮𝘦𝘸𝘰𝘳𝘬𝘴.
 - 𝘙𝘦𝘲𝘶𝘪𝘳𝘦𝘴 𝘴𝘦𝘵𝘶𝘱 𝘧𝘰𝘳 𝘙𝘦𝘢𝘤𝘵 𝘕𝘢𝘵𝘪𝘷𝘦.
 - 𝘔𝘪𝘥𝘥𝘭𝘦𝘸𝘢𝘳𝘦 𝘭𝘪𝘬𝘦 𝘙𝘦𝘥𝘶𝘹 𝘛𝘩𝘶𝘯𝘬 𝘢𝘯𝘥 𝘚𝘢𝘨𝘢 𝘧𝘰𝘳 𝘢𝘴𝘺𝘯𝘤 𝘭𝘰𝘨𝘪𝘤.

#nextjs #react #zustand #redux #zustandVsRedux #context #stateManagement
`,image:B("11731468ee.webp"),category:"web",pdfUrl:G3},{id:43,title:"🌟𝐖𝐡𝐚𝐭'𝐬 𝐍𝐞𝐰 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬 15 𝐓𝐡𝐚𝐭 𝐖𝐢𝐥𝐥 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭?🌟",date:"17 July 2024",description:`🌟𝐖𝐡𝐚𝐭'𝐬 𝐍𝐞𝐰 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬 15 𝐓𝐡𝐚𝐭 𝐖𝐢𝐥𝐥 𝐓𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭?🌟

I'm thrilled to share that the Next.js 15 Release Candidate (RC) is now available, bringing an array of powerful new features and improvements to streamline your development process. Highlights include:

• 𝐒𝐞𝐚𝐦𝐥𝐞𝐬𝐬 𝐈𝐧𝐭𝐞𝐠𝐫𝐚𝐭𝐢𝐨𝐧 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭 19: Leverage advanced features like Concurrent Rendering and Automatic Batching for enhanced user experiences.

• 𝐑𝐞𝐚𝐜𝐭 𝐂𝐨𝐦𝐩𝐢𝐥𝐞𝐫: An experimental compiler that optimizes your code automatically, reducing the need for manual optimizations and simplifying development.

• 𝐈𝐦𝐩𝐫𝐨𝐯𝐞𝐝 𝐇𝐲𝐝𝐫𝐚𝐭𝐢𝐨𝐧 𝐄𝐫𝐫𝐨𝐫 𝐇𝐚𝐧𝐝𝐥𝐢𝐧𝐠: Enhanced error views with source code and suggestions to quickly address issues.

• 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐂𝐚𝐜𝐡𝐢𝐧𝐠 𝐁𝐞𝐡𝐚𝐯𝐢𝐨𝐫: Fetch requests, GET Route Handlers, and Client Router Cache are now uncashed by default, with an option to opt-in for caching.

• 𝐏𝐚𝐫𝐭𝐢𝐚𝐥 𝐏𝐫𝐞𝐫𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐏𝐏𝐑): Combines static and dynamic rendering on the same page for optimal performance.

• 𝐍𝐞𝐱𝐭/𝐀𝐟𝐭𝐞𝐫 𝐀𝐏𝐈: Allows secondary tasks to be processed after the primary response, ensuring efficient logging and analytics.

• 𝐂𝐫𝐞𝐚𝐭𝐞-𝐍𝐞𝐱𝐭-𝐀𝐩𝐩 𝐔𝐩𝐝𝐚𝐭𝐞𝐬: New design and prompt to enable Turbopack for local development.

• 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐢𝐧𝐠 𝐁𝐮𝐧𝐝𝐥𝐢𝐧𝐠 𝐨𝐟 𝐄𝐱𝐭𝐞𝐫𝐧𝐚𝐥 𝐏𝐚𝐜𝐤𝐚𝐠𝐞𝐬: Streamlines the bundling process with new configuration options.

Next.js 15 continues to push the boundaries of web development, making it easier and more efficient for developers to create high-performance applications. Stay tuned for more updates and insights!

#Nextjs #React #JavaScript #TechUpdates #WebDevelopment #Coding #fullstack #typescript #Programming #WebDevTips #TechGuide
`,image:B("6808ff41c0.webp"),category:"web",pdfUrl:H3},{id:42,title:"✨𝐔𝐧𝐥𝐨𝐜𝐤 𝐭𝐡𝐞 𝐏𝐨𝐰𝐞𝐫 𝐨𝐟 𝐍𝐞𝐱𝐭.𝐣𝐬 𝐰𝐢𝐭𝐡 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐇𝐨𝐨𝐤𝐬! ✨",date:"15 July 2024",description:`✨𝐔𝐧𝐥𝐨𝐜𝐤 𝐭𝐡𝐞 𝐏𝐨𝐰𝐞𝐫 𝐨𝐟 𝐍𝐞𝐱𝐭.𝐣𝐬 𝐰𝐢𝐭𝐡 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐇𝐨𝐨𝐤𝐬! ✨

Hey LinkedIn family! 🌟

I’ve created a carousel that dives deep into the must-know hooks in Next.js. Whether you’re a seasoned developer or just getting started, these hooks are game-changers for your web development projects. Here’s a sneak peek:

• 𝐮𝐬𝐞𝐑𝐨𝐮𝐭𝐞𝐫: Navigate with ease and control. Seamlessly manage routes and take advantage of dynamic routing in your Next.js applications.

• 𝐮𝐬𝐞𝐏𝐚𝐫𝐚𝐦𝐬: Extract dynamic parameters from the URL effortlessly. Perfect for creating dynamic pages and handling user-specific content.

• 𝐮𝐬𝐞𝐒𝐞𝐚𝐫𝐜𝐡𝐏𝐚𝐫𝐚𝐦𝐬: Manage query strings like a pro. Parse and manipulate URL search parameters to enhance your app’s functionality.

• 𝐮𝐬𝐞𝐏𝐚𝐭𝐡𝐧𝐚𝐦𝐞: Keep track of the current pathname and react to URL changes in real time. Ideal for creating responsive and adaptive navigation.

🔧 Why These Hooks?

✨ Simplify complex routing logic.
✨ Enhance the user experience with dynamic content.
✨ Improve code readability and maintainability.

Dive into the carousel to learn how these hooks can transform your Next.js projects!

#reactjs #nextjs #fullstack #WebDevelopment #JavaScript #typescript
#Programming #WebDevTips #TechGuide #linkedinlearning #growth
`,image:B("86c1d5e102.webp"),category:"web",pdfUrl:W3},{id:41,title:"🚀 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬 𝐯𝐬 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐖𝐡𝐢𝐜𝐡 𝐎𝐧𝐞 𝐒𝐡𝐨𝐮𝐥𝐝 𝐘𝐨𝐮 𝐂𝐡𝐨𝐨𝐬𝐞? 🚀",date:"15 Apr 2024",description:`🚀 𝐑𝐞𝐚𝐜𝐭.𝐣𝐬 𝐯𝐬 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐖𝐡𝐢𝐜𝐡 𝐎𝐧𝐞 𝐒𝐡𝐨𝐮𝐥𝐝 𝐘𝐨𝐮 𝐂𝐡𝐨𝐨𝐬𝐞? 🚀

When it comes to building modern web applications, two powerful tools often come up: 𝘙𝘦𝘢𝘤𝘵.𝘫𝘴 𝘢𝘯𝘥 𝘕𝘦𝘹𝘵.𝘫𝘴. Both have their own unique strengths, but they serve different purposes. Let’s break down what makes each of them special:

𝐑𝐞𝐚𝐜𝐭.𝐣𝐬
React.js is a JavaScript library for building dynamic user interfaces, especially single-page applications. Developed by Facebook, it focuses on the "View" in the MVC (Model-View-Controller) architecture.

Here are some key features:
🌟 Component-Based Architecture: Build encapsulated components that manage their own state, then compose them to make complex UIs.
🚀 Virtual DOM: Efficiently update and render components, improving performance.
🛠️ Reusable Components: Create reusable UI components, enhancing maintainability and scalability.

𝐍𝐞𝐱𝐭.𝐣𝐬
Next.js, on the other hand, is a powerful React framework developed by Vercel. It extends React by providing additional features, particularly for server-side rendering and static site generation.

Here’s what sets it apart:
⚡ Server-Side Rendering (SSR): Enhance performance and SEO by rendering pages on the server.
📄 Static Site Generation (SSG): Pre-render pages at build time, ideal for blogs and e-commerce.
🔀 API Routes: Build API endpoints directly within your Next.js app.
🌐 File-Based Routing: Simplifies routing with a file system-based approach.

𝐖𝐡𝐢𝐜𝐡 𝐎𝐧𝐞 𝐬𝐡𝐨𝐮𝐥𝐝 𝐂𝐡𝐨𝐨𝐬𝐞?
🏷️Use React.js if you need a flexible, powerful library to build dynamic UIs and you're comfortable handling client-side routing and data fetching.

🏷️Opt for Next.js if you want built-in SSR, SSG, and other optimizations out-of-the-box, making it easier to build performant, SEO-friendly applications.

Both tools are incredible in their own right and can help you build amazing applications. Your choice will depend on your project requirements and your development style.

Happy coding! 💻
`,image:B("43fc8deeaf.webp"),category:"web",pdfUrl:U3},{id:40,title:"𝑵𝒆𝒘 𝒉𝒐𝒐𝒌: 𝒖𝒔𝒆𝑭𝒐𝒓𝒎𝑺𝒕𝒂𝒕𝒖𝒔 𝒊𝒏 𝑹𝒆𝒂𝒄𝒕 19 𝒖𝒑𝒅𝒂𝒕𝒆!!",date:"19 Mar 2024",description:`𝑵𝒆𝒘 𝒉𝒐𝒐𝒌: 𝒖𝒔𝒆𝑭𝒐𝒓𝒎𝑺𝒕𝒂𝒕𝒖𝒔 𝒊𝒏 𝑹𝒆𝒂𝒄𝒕 19 𝒖𝒑𝒅𝒂𝒕𝒆!!

𝘐𝘯 𝘵𝘩𝘦 𝘦𝘹𝘢𝘮𝘱𝘭𝘦, 𝘵𝘩𝘦 𝘩𝘰𝘰𝘬 𝘳𝘦𝘵𝘳𝘪𝘦𝘷𝘦𝘴 𝘵𝘩𝘦 𝘱𝘦𝘯𝘥𝘪𝘯𝘨 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺, 𝘪𝘯𝘥𝘪𝘤𝘢𝘵𝘪𝘯𝘨 𝘪𝘧 𝘵𝘩𝘦 𝘱𝘢𝘳𝘦𝘯𝘵 𝘧𝘰𝘳𝘮 𝘪𝘴 𝘤𝘶𝘳𝘳𝘦𝘯𝘵𝘭𝘺 𝘴𝘶𝘣𝘮𝘪𝘵𝘵𝘪𝘯𝘨 𝘥𝘢𝘵𝘢. 𝘛𝘩𝘦 𝘣𝘶𝘵𝘵𝘰𝘯 𝘪𝘴 𝘵𝘩𝘦𝘯 𝘥𝘪𝘴𝘢𝘣𝘭𝘦𝘥 𝘣𝘢𝘴𝘦𝘥 𝘰𝘯 𝘵𝘩𝘦 𝘱𝘦𝘯𝘥𝘪𝘯𝘨 𝘷𝘢𝘭𝘶𝘦, 𝘱𝘳𝘦𝘷𝘦𝘯𝘵𝘪𝘯𝘨 𝘮𝘶𝘭𝘵𝘪𝘱𝘭𝘦 𝘴𝘶𝘣𝘮𝘪𝘴𝘴𝘪𝘰𝘯𝘴 𝘸𝘩𝘪𝘭𝘦 𝘵𝘩𝘦 𝘧𝘰𝘳𝘮 𝘪𝘴 𝘱𝘳𝘰𝘤𝘦𝘴𝘴𝘪𝘯𝘨.

𝘎𝘦𝘵 𝘢 𝘸𝘦𝘦𝘬𝘭𝘺 𝘥𝘪𝘨𝘦𝘴𝘵 𝘰𝘧 𝘮𝘺 𝘵𝘪𝘱𝘴 𝘢𝘯𝘥 𝘵𝘶𝘵𝘰𝘳𝘪𝘢𝘭𝘴 𝘣𝘺 𝘴𝘶𝘣𝘴𝘤𝘳𝘪𝘣𝘪𝘯𝘨 𝘯𝘰𝘸 => Jimmy Ramani

𝘕𝘦𝘦𝘥 𝘩𝘦𝘭𝘱 𝘸𝘪𝘵𝘩 𝘺𝘰𝘶𝘳 𝘸𝘦𝘣𝘴𝘪𝘵𝘦? 𝘋𝘔 𝘮𝘦.

#programming #ReactJS
`,image:B("f2578e154b.webp"),category:"web",photoUrl:B("f2578e154b.webp")},{id:39,title:"💡 𝐌𝐨𝐧𝐠𝐨𝐃𝐁 𝐂𝐡𝐞𝐚𝐭 𝐒𝐡𝐞𝐞𝐭: 𝐐𝐮𝐢𝐜𝐤 𝐓𝐢𝐩𝐬 𝐟𝐨𝐫 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭",date:"18 Mar 2024",description:`💡 𝐌𝐨𝐧𝐠𝐨𝐃𝐁 𝐂𝐡𝐞𝐚𝐭 𝐒𝐡𝐞𝐞𝐭: 𝐐𝐮𝐢𝐜𝐤 𝐓𝐢𝐩𝐬 𝐟𝐨𝐫 𝐄𝐟𝐟𝐢𝐜𝐢𝐞𝐧𝐭 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭

𝐃𝐚𝐭𝐚 𝐌𝐨𝐝𝐞𝐥𝐢𝐧𝐠 𝐓𝐢𝐩𝐬 📊
🔸Use embedded documents for one-to-few relationships.
🔸Opt for referencing for one-to-many relationships.

𝐈𝐧𝐝𝐞𝐱𝐢𝐧𝐠 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥𝐬 🔍
🔸Create compound indexes for multiple fields.
🔸Avoid large index keys to maintain performance.

𝐀𝐠𝐠𝐫𝐞𝐠𝐚𝐭𝐢𝐨𝐧 𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤 🔄
🔸Use $match and $group to filter and summarize data.
🔸Explore $lookup for joins across collections.

𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐚𝐭𝐢𝐨𝐧⚡
🔸Use profiler to analyze query performance.
🔸Implement sharding for horizontal scaling.

𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐁𝐞𝐬𝐭 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬 🔒
🔸Enable authentication and encryption.
🔸Regularly audit database access logs.

🔁 Repost this cheat sheet for your network ♻️ Thank you!

P.S. What's your favorite MongoDB tip? Comment below!
`,image:B("7fb4d4ce53.webp"),category:"web",pdfUrl:B3},{id:38,title:"𝑰𝒎𝒑𝒓𝒐𝒗𝒆𝒎𝒆𝒏𝒕𝒔 𝒊𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒆𝒅 𝒊𝒏 𝑹𝒆𝒂𝒄𝒕 19!!",date:"17 Mar 2024",description:`𝑰𝒎𝒑𝒓𝒐𝒗𝒆𝒎𝒆𝒏𝒕𝒔 𝒊𝒏𝒕𝒓𝒐𝒅𝒖𝒄𝒆𝒅 𝒊𝒏 𝑹𝒆𝒂𝒄𝒕 19!!

1. 𝘳𝘦𝘧 𝘢𝘴 𝘢 𝘱𝘳𝘰𝘱
2. 𝘋𝘪𝘧𝘧𝘴 𝘧𝘰𝘳 𝘩𝘺𝘥𝘳𝘢𝘵𝘪𝘰𝘯 𝘦𝘳𝘳𝘰𝘳𝘴
3. <𝘊𝘰𝘯𝘵𝘦𝘹𝘵> 𝘢𝘴 𝘢 𝘱𝘳𝘰𝘷𝘪𝘥𝘦𝘳
4. 𝘊𝘭𝘦𝘢𝘯𝘶𝘱 𝘧𝘶𝘯𝘤𝘵𝘪𝘰𝘯𝘴 𝘧𝘰𝘳 𝘳𝘦𝘧𝘴
5. 𝘶𝘴𝘦𝘋𝘦𝘧𝘦𝘳𝘳𝘦𝘥𝘝𝘢𝘭𝘶𝘦 𝘪𝘯𝘪𝘵𝘪𝘢𝘭 𝘷𝘢𝘭𝘶𝘦
6. 𝘋𝘰𝘤𝘶𝘮𝘦𝘯𝘵 𝘔𝘦𝘵𝘢𝘥𝘢𝘵𝘢, 𝘚𝘵𝘺𝘭𝘦𝘴𝘩𝘦𝘦𝘵𝘴, 𝘈𝘴𝘺𝘯𝘤 𝘚𝘤𝘳𝘪𝘱𝘵𝘴, 𝘗𝘳𝘦𝘭𝘰𝘢𝘥𝘪𝘯𝘨 𝘙𝘦𝘴𝘰𝘶𝘳𝘤𝘦𝘴

𝘎𝘦𝘵 𝘢 𝘸𝘦𝘦𝘬𝘭𝘺 𝘥𝘪𝘨𝘦𝘴𝘵 𝘰𝘧 𝘮𝘺 𝘵𝘪𝘱𝘴 𝘣𝘺 following 𝘯𝘰𝘸 => Jimmy Ramani

𝘕𝘦𝘦𝘥 𝘩𝘦𝘭𝘱 𝘸𝘪𝘵𝘩 𝘺𝘰𝘶𝘳 𝘸𝘦𝘣𝘴𝘪𝘵𝘦? 𝘋𝘔 𝘮𝘦.

#reactjs #react19 #updates
`,image:"https://i.postimg.cc/3wJwq4v4/Screenshot-2024-07-16-155042.pngs",category:"web",pdfUrl:F3},{id:37,title:"🔍 𝐔𝐧𝐥𝐨𝐜𝐤 𝐭𝐡𝐞 𝐒𝐞𝐜𝐫𝐞𝐭𝐬 𝐭𝐨 𝐒𝐮𝐩𝐞𝐫𝐢𝐨𝐫 𝐂𝐨𝐝𝐞 𝐐𝐮𝐚𝐥𝐢𝐭𝐲! 🛠️",date:"16 Mar 2024",description:`🔍 𝐔𝐧𝐥𝐨𝐜𝐤 𝐭𝐡𝐞 𝐒𝐞𝐜𝐫𝐞𝐭𝐬 𝐭𝐨 𝐒𝐮𝐩𝐞𝐫𝐢𝐨𝐫 𝐂𝐨𝐝𝐞 𝐐𝐮𝐚𝐥𝐢𝐭𝐲! 🛠️

𝘋𝘪𝘷𝘦 𝘪𝘯𝘵𝘰 𝘦𝘴𝘴𝘦𝘯𝘵𝘪𝘢𝘭 𝘵𝘪𝘱𝘴 𝘧𝘰𝘳 𝘤𝘳𝘢𝘧𝘵𝘪𝘯𝘨 𝘤𝘭𝘦𝘢𝘯, 𝘦𝘧𝘧𝘪𝘤𝘪𝘦𝘯𝘵, 𝘢𝘯𝘥 𝘮𝘢𝘪𝘯𝘵𝘢𝘪𝘯𝘢𝘣𝘭𝘦 𝘤𝘰𝘥𝘦 𝘵𝘩𝘢𝘵 𝘴𝘵𝘢𝘯𝘥𝘴 𝘵𝘩𝘦 𝘵𝘦𝘴𝘵 𝘰𝘧 𝘵𝘪𝘮𝘦. 𝘞𝘩𝘦𝘵𝘩𝘦𝘳 𝘺𝘰𝘶'𝘳𝘦 𝘢 𝘴𝘦𝘢𝘴𝘰𝘯𝘦𝘥 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳 𝘰𝘳 𝘫𝘶𝘴𝘵 𝘴𝘵𝘢𝘳𝘵𝘪𝘯𝘨 𝘰𝘶𝘵, 𝘦𝘭𝘦𝘷𝘢𝘵𝘦 𝘺𝘰𝘶𝘳 𝘤𝘰𝘥𝘪𝘯𝘨 𝘨𝘢𝘮𝘦 𝘸𝘪𝘵𝘩 𝘦𝘹𝘱𝘦𝘳𝘵 𝘪𝘯𝘴𝘪𝘨𝘩𝘵𝘴 𝘢𝘯𝘥 𝘣𝘦𝘴𝘵 𝘱𝘳𝘢𝘤𝘵𝘪𝘤𝘦𝘴. 💻✨

👍 If you found it helpful, hit 𝐥𝐢𝐤𝐞!
🔁 𝐒𝐡𝐚𝐫𝐞 it with your network!
🔖 𝐒𝐚𝐯𝐞 it for future reference!
📤 𝐒𝐡𝐚𝐫𝐞 it with your 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬!
💭 𝐂𝐨𝐦𝐦𝐞𝐧𝐭 your thoughts!

💯Follow Jimmy Ramani for more 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 and 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 Tips & Tricks."

#CodeTips #CodeQuality #FollowForMore
`,image:"https://i.postimg.cc/WzYJ1mck/Screenshot-2024-07-16-152722.png",category:"web",pdfUrl:D3},{id:36,title:"🚀 𝐄𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐍𝐞𝐰𝐬 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭 19! 🚀",date:"14 Mar 2024",description:`🚀 𝐄𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐍𝐞𝐰𝐬 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭 19! 🚀

𝘐𝘯𝘵𝘳𝘰𝘥𝘶𝘤𝘪𝘯𝘨 𝘵𝘩𝘦 𝘨𝘢𝘮𝘦-𝘤𝘩𝘢𝘯𝘨𝘪𝘯𝘨 '𝘶𝘴𝘦' 𝘈𝘗𝘐, 𝘥𝘦𝘴𝘪𝘨𝘯𝘦𝘥 𝘵𝘰 𝘴𝘵𝘳𝘦𝘢𝘮𝘭𝘪𝘯𝘦 𝘺𝘰𝘶𝘳 𝘙𝘦𝘢𝘤𝘵 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘱𝘳𝘰𝘤𝘦𝘴𝘴 𝘭𝘪𝘬𝘦 𝘯𝘦𝘷𝘦𝘳 𝘣𝘦𝘧𝘰𝘳𝘦. 𝘋𝘪𝘷𝘦 𝘪𝘯𝘵𝘰 𝘵𝘩𝘦 𝘧𝘶𝘵𝘶𝘳𝘦 𝘰𝘧 𝘙𝘦𝘢𝘤𝘵 𝘢𝘯𝘥 𝘭𝘦𝘢𝘳𝘯 𝘩𝘰𝘸 '𝘶𝘴𝘦' 𝘳𝘦𝘷𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘪𝘻𝘦𝘴 𝘴𝘵𝘢𝘵𝘦 𝘮𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵, 𝘤𝘰𝘮𝘱𝘰𝘯𝘦𝘯𝘵 𝘭𝘰𝘨𝘪𝘤, 𝘢𝘯𝘥 𝘳𝘦𝘶𝘴𝘢𝘣𝘪𝘭𝘪𝘵𝘺.

𝘚𝘵𝘢𝘺 𝘢𝘩𝘦𝘢𝘥 𝘪𝘯 𝘵𝘩𝘦 𝘸𝘰𝘳𝘭𝘥 𝘰𝘧 𝘸𝘦𝘣 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘮𝘦𝘯𝘵 𝘸𝘪𝘵𝘩 𝘙𝘦𝘢𝘤𝘵 19!

#React19 #ReactDevelopment #NewAPI
`,image:B("f7f4d2317b.webp"),category:"web",pdfUrl:L3},{id:35,title:"𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐒𝐭𝐚𝐭𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐰𝐢𝐭𝐡 𝐮𝐬𝐞𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐇𝐨𝐨𝐤 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 💣",date:"13 Mar 2024",description:`𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐒𝐭𝐚𝐭𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐰𝐢𝐭𝐡 𝐮𝐬𝐞𝐂𝐨𝐧𝐭𝐞𝐱𝐭 𝐇𝐨𝐨𝐤 𝐢𝐧 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 💣

Are you tired of passing props down multiple levels in your React application? Say hello to useContext Hook! 🚀 In this comprehensive guide, I'll walk you through harnessing the power of useContext Hook for efficient state management in ReactJS.

From the basics to advanced techniques, you'll learn:

>> 𝑾𝒉𝒂𝒕 𝒊𝒔 𝒕𝒉𝒆 𝒖𝒔𝒆𝑪𝒐𝒏𝒕𝒆𝒙𝒕 𝑯𝒐𝒐𝒌 𝒂𝒏𝒅 𝒘𝒉𝒚 𝒊𝒕'𝒔 𝒂 𝒈𝒂𝒎𝒆-𝒄𝒉𝒂𝒏𝒈𝒆𝒓 𝒇𝒐𝒓 𝑹𝒆𝒂𝒄𝒕 𝒅𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓𝒔.

>> 𝑯𝒐𝒘 𝒕𝒐 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏𝒅 𝒄𝒐𝒏𝒔𝒖𝒎𝒆 𝒂 𝒄𝒐𝒏𝒕𝒆𝒙𝒕 𝒊𝒏 𝑹𝒆𝒂𝒄𝒕.
𝑰𝒏𝒕𝒆𝒈𝒓𝒂𝒕𝒊𝒏𝒈 𝒖𝒔𝒆𝑪𝒐𝒏𝒕𝒆𝒙𝒕 𝑯𝒐𝒐𝒌 𝒕𝒐 𝒂𝒄𝒄𝒆𝒔𝒔 𝒔𝒕𝒂𝒕𝒆 𝒂𝒏𝒅 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒔 𝒂𝒄𝒓𝒐𝒔𝒔 𝒚𝒐𝒖𝒓 𝒄𝒐𝒎𝒑𝒐𝒏𝒆𝒏𝒕𝒔 𝒆𝒇𝒇𝒐𝒓𝒕𝒍𝒆𝒔𝒔𝒍𝒚.

>> 𝑩𝒆𝒔𝒕 𝒑𝒓𝒂𝒄𝒕𝒊𝒄𝒆𝒔 𝒂𝒏𝒅 𝒄𝒐𝒎𝒎𝒐𝒏 𝒑𝒊𝒕𝒇𝒂𝒍𝒍𝒔 𝒕𝒐 𝒂𝒗𝒐𝒊𝒅 𝒘𝒉𝒆𝒏 𝒖𝒔𝒊𝒏𝒈 𝒖𝒔𝒆𝑪𝒐𝒏𝒕𝒆𝒙𝒕.

>> 𝑹𝒆𝒂𝒍-𝒘𝒐𝒓𝒍𝒅 𝒆𝒙𝒂𝒎𝒑𝒍𝒆𝒔 𝒂𝒏𝒅 𝒔𝒄𝒆𝒏𝒂𝒓𝒊𝒐𝒔 𝒘𝒉𝒆𝒓𝒆 𝒖𝒔𝒆𝑪𝒐𝒏𝒕𝒆𝒙𝒕 𝒔𝒉𝒊𝒏𝒆𝒔.

Whether you're a beginner looking to level up your React skills or a seasoned developer seeking more elegant solutions for state management, this guide has got you covered. Dive in and unlock the full potential of useContext Hook in ReactJS! 🔍💡

#ReactJS #StateManagement #useContext #ReactHooks #FrontendDevelopment
`,image:B("bee3b2cfbc.webp"),category:"web",pdfUrl:z3},{id:34,title:"🌟 𝐔𝐧𝐥𝐨𝐜𝐤𝐢𝐧𝐠 𝐭𝐡𝐞 𝐌𝐨𝐬𝐭 𝐀𝐬𝐤𝐞𝐝 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬! 💫💼",date:"12 Mar 2024",description:`🌟 𝐔𝐧𝐥𝐨𝐜𝐤𝐢𝐧𝐠 𝐭𝐡𝐞 𝐌𝐨𝐬𝐭 𝐀𝐬𝐤𝐞𝐝 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐈𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰 𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬! 💫💼

Preparing for a frontend interview and feeling overwhelmed? Let's simplify your preparation by diving into the most commonly asked questions:

In this comprehensive post, we'll cover:

1️⃣ 𝑯𝑻𝑴𝑳/𝑪𝑺𝑺 𝑭𝒖𝒏𝒅𝒂𝒎𝒆𝒏𝒕𝒂𝒍𝒔: Brush up on essential HTML and CSS concepts, including semantic markup, box models, and responsive design principles.

2️⃣ 𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕 𝑬𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍𝒔: Dive deep into JavaScript fundamentals such as data types, variables, scope, closures, and asynchronous programming.

3️⃣ 𝑭𝒓𝒂𝒎𝒆𝒘𝒐𝒓𝒌𝒔 𝒂𝒏𝒅 𝑳𝒊𝒃𝒓𝒂𝒓𝒊𝒆𝒔: Explore questions related to popular frontend frameworks like React, Vue.js, and Angular, along with key concepts and best practices.

4️⃣ 𝑫𝑶𝑴 𝑴𝒂𝒏𝒊𝒑𝒖𝒍𝒂𝒕𝒊𝒐𝒏: Understand DOM manipulation techniques, event handling, and performance optimizations for dynamic web applications.

5️⃣ 𝑩𝒓𝒐𝒘𝒔𝒆𝒓 𝒂𝒏𝒅 𝑵𝒆𝒕𝒘𝒐𝒓𝒌𝒊𝒏𝒈: Familiarize yourself with browser internals, HTTP protocols, cross-origin resource sharing (CORS), and network performance optimization strategies.

6️⃣ 𝑷𝒓𝒐𝒃𝒍𝒆𝒎 𝑺𝒐𝒍𝒗𝒊𝒏𝒈: Sharpen your problem-solving skills with algorithmic and data structure questions, and learn how to approach coding challenges effectively.

By tackling these frontend interview questions, you'll boost your confidence and readiness to ace your next interview!

Ready to conquer your front-end interview? Let's dive in and master the most asked questions together!

#FrontendInterview #HTML #CSS #JavaScript #Frameworks #Libraries #ProblemSolving #InterviewPreparation #WebDevelopment

Let's ace that frontend interview and land your dream job! 🚀🎓
`,image:"https://i.postimg.cc/vZRcfrfZ/Screenshot-2024-07-16-151205.png",category:"web",pdfUrl:N3},{id:33,title:"🌟 𝐃𝐞𝐜𝐢𝐩𝐡𝐞𝐫𝐢𝐧𝐠 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) 𝐯𝐬. 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐃𝐞𝐭𝐚𝐢𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐚𝐫𝐢𝐬𝐨𝐧! 💻✨",date:"11 Mar 2024",description:`🌟 𝐃𝐞𝐜𝐢𝐩𝐡𝐞𝐫𝐢𝐧𝐠 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) 𝐯𝐬. 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐃𝐞𝐭𝐚𝐢𝐥𝐞𝐝 𝐂𝐨𝐦𝐩𝐚𝐫𝐢𝐬𝐨𝐧! 💻✨

Curious about the nuances between 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) and 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) in Next.js? Let's delve into this essential comparison:

In this comprehensive breakdown, we'll explore:

1️⃣ 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐂𝐒𝐑 𝐚𝐧𝐝 𝐒𝐒𝐑: Delve into the core concepts of CSR and SSR, unraveling their functionalities and purposes within Next.js architecture.

2️⃣ 𝐀𝐝𝐯𝐚𝐧𝐭𝐚𝐠𝐞𝐬 𝐚𝐧𝐝 𝐃𝐫𝐚𝐰𝐛𝐚𝐜𝐤𝐬: Uncover the strengths and weaknesses of CSR and SSR, including considerations for performance, SEO optimization, and initial load times.

3️⃣ 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐚𝐥 𝐔𝐬𝐞 𝐂𝐚𝐬𝐞𝐬: Explore real-world scenarios where CSR and SSR shine, and discover when each rendering method is most beneficial for your Next.js projects.

4️⃣ 𝐈𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐈𝐧𝐬𝐢𝐠𝐡𝐭𝐬: Gain practical insights into implementing CSR and SSR, including configuration, data fetching strategies, and rendering techniques.

5️⃣ 𝐂𝐨𝐦𝐩𝐚𝐫𝐚𝐭𝐢𝐯𝐞 𝐄𝐱𝐚𝐦𝐩𝐥𝐞𝐬: Dive into comparative examples showcasing the application of CSR and SSR in building dynamic web applications, e-commerce platforms, and content-heavy sites.

6️⃣ 𝐓𝐢𝐩𝐬 𝐚𝐧𝐝 𝐑𝐞𝐜𝐨𝐦𝐦𝐞𝐧𝐝𝐚𝐭𝐢𝐨𝐧𝐬: Learn valuable tips and recommendations for optimizing the performance and user experience of your Next.js applications through thoughtful rendering choices.

By the end of this comparison, you'll have a comprehensive understanding of the distinctions between CSR and SSR in Next.js, empowering you to make informed architectural decisions for your projects.

Ready to navigate the complexities of rendering in Next.js? Let's embark on this journey together!

#NextJS #ClientSideRendering #ServerSideRendering #CSR #SSR #WebDevelopment #PerformanceOptimization #SEO #UserExperience

Let's unravel the complexities of CSR vs. SSR in Next.js and elevate your development approach! 🚀🔍
`,image:B("6d03a91ce9.webp"),category:"web",photoUrl:B("6d03a91ce9.webp")},{id:32,title:"🌟 𝐃𝐞𝐦𝐲𝐬𝐭𝐢𝐟𝐲𝐢𝐧𝐠 𝐈𝐧𝐜𝐫𝐞𝐦𝐞𝐧𝐭𝐚𝐥 𝐒𝐭𝐚𝐭𝐢𝐜 𝐑𝐞𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 (𝐈𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐆𝐮𝐢𝐝𝐞! 💻✨",date:"10 Mar 2024",description:`Curious about 𝐈𝐧𝐜𝐫𝐞𝐦𝐞𝐧𝐭𝐚𝐥 𝐒𝐭𝐚𝐭𝐢𝐜 𝐑𝐞𝐠𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 (𝐈𝐒𝐑) and its application in Next.js development? Let's delve into this cutting-edge topic together:

In this comprehensive guide, we'll cover:

1️⃣ 𝑾𝒉𝒂𝒕 𝒊𝒔 𝑰𝑺𝑹?: Gain a clear understanding of what Incremental Static Regeneration (ISR) is and how it revolutionizes static site generation in Next.js.

2️⃣ 𝑯𝒐𝒘 𝑰𝑺𝑹 𝑾𝒐𝒓𝒌𝒔: Explore the mechanics behind ISR and learn how it enables dynamic content updates in statically generated pages.

3️⃣ 𝑨𝒅𝒗𝒂𝒏𝒕𝒂𝒈𝒆𝒔 𝒐𝒇 𝑰𝑺𝑹: Discover the benefits of using ISR, including real-time data updates, improved performance, and scalability.

4️⃣ 𝑰𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒊𝒏𝒈 𝑰𝑺𝑹 𝒊𝒏 𝑵𝒆𝒙𝒕.𝒋𝒔: Get practical insights into implementing Incremental Static Regeneration in your Next.js projects, including configuration and usage.

5️⃣ 𝑹𝒆𝒂𝒍-𝑾𝒐𝒓𝒍𝒅 𝑬𝒙𝒂𝒎𝒑𝒍𝒆𝒔: Dive into examples showcasing the power of ISR in building dynamic web applications, blogs, e-commerce sites, and more.

6️⃣ 𝑻𝒊𝒑𝒔 𝒂𝒏𝒅 𝑩𝒆𝒔𝒕 𝑷𝒓𝒂𝒄𝒕𝒊𝒄𝒆𝒔: Learn tips and best practices for optimizing ISR and maximizing its benefits in your Next.js projects.

By the end of this guide, you'll have a comprehensive understanding of Incremental Static Regeneration in Next.js and how to leverage it to build dynamic and scalable web applications.

Ready to unlock the full potential of ISR in Next.js? Let's embark on this journey together!

#NextJS #IncrementalStaticRegeneration #ISR #WebDevelopment #DynamicContent #PerformanceOptimization #Scalability

Let's revolutionize your Next.js projects with the power of Incremental Static Regeneration! 🚀🌐
`,image:B("6a3d5a1049.webp"),category:"web",pdfUrl:I3},{id:31,title:"🚀 Elevate Your React Interview Game!",date:"8 Mar 2024",description:`🚀 Elevate Your React Interview Game!

Are you gearing up for a React interview? 🚀 Mastering React is crucial, but acing the interview requires preparation! 💡 Here are key questions and polished answers to help you shine:

1️⃣ What is React and why use it?
React is a JavaScript library for building user interfaces. Highlight its efficiency in creating interactive, dynamic, and scalable UIs.

2️⃣ Explain Virtual DOM.
Delve into how React's Virtual DOM optimizes performance by minimizing actual DOM manipulations.

3️⃣ What are React Components?
Emphasize that components are the building blocks of React applications, encapsulating functionality and rendering.

4️⃣ State vs. Props – what's the difference?
Clearly distinguish between state (mutable data) and props (immutable data passed to a component) to showcase your understanding of React's data flow.

5️⃣ What is JSX?
Highlight JSX as a syntax extension for JavaScript, making React component structures more readable and concise.

Ace these questions, and you're on your way to React success! 🚀 Share your favorite React interview tips below! 👇 Let's empower each other in the React community! 💪

#ReactInterview #CareerGrowth #ReactJS #TechInterviews

🙋𝑳𝒐𝒐𝒌𝒊𝒏𝒈 𝒇𝒐𝒓 𝐲𝐨𝐮𝐫 𝒅𝒓𝒆𝒂𝒎 𝒋𝒐𝒃?
Follow Jimmy Ramani for more videos and notes.
`,image:B("59609d2a90.webp"),category:"web",pdfUrl:M3},{id:30,title:"🌟 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐆𝐮𝐢𝐝𝐞! 💻✨",date:"7 Mar 2024",description:`🌟 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐆𝐮𝐢𝐝𝐞! 💻✨

    Ready to unlock the full potential of 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) in Next.js? Let's dive into this essential topic together:

    In this comprehensive guide, we'll cover:

    1️⃣ 𝑼𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅𝒊𝒏𝒈 𝑺𝑺𝑹: Gain a deep understanding of what Server-Side Rendering (SSR) is and why it's crucial for building dynamic and SEO-friendly web applications.

    2️⃣ 𝑩𝒆𝒏𝒆𝒇𝒊𝒕𝒔 𝒐𝒇 𝑺𝑺𝑹: Explore the advantages of using SSR, including improved performance, SEO optimization, and enhanced user experience.

    3️⃣ 𝑰𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒊𝒏𝒈 𝑺𝑺𝑹 𝒊𝒏 𝑵𝒆𝒙𝒕.𝒋𝒔: Get a step-by-step overview of how to implement Server-Side Rendering in your Next.js projects, including setup, routing, data fetching, and rendering.

    4️⃣ 𝑹𝒆𝒂𝒍-𝑾𝒐𝒓𝒍𝒅 𝑬𝒙𝒂𝒎𝒑𝒍𝒆𝒔: Dive into practical examples showcasing the use of SSR in building dynamic web applications, blogs, e-commerce sites, and more.

    5️⃣ 𝑻𝒊𝒑𝒔 𝒂𝒏𝒅 𝑩𝒆𝒔𝒕 𝑷𝒓𝒂𝒄𝒕𝒊𝒄𝒆𝒔: Discover tips and best practices for optimizing and maximizing the benefits of SSR in your Next.js projects.

    By the end of this guide, you'll have a comprehensive understanding of Server-Side Rendering in Next.js and how to leverage it to build high-performance and SEO-friendly web applications.

    Ready to become a master of Server-Side Rendering in Next.js? Let's embark on this journey together!

    #NextJS #ServerSideRendering #SSR #WebDevelopment #PerformanceOptimization #SEO #UserExperience

    Let's elevate your Next.js projects with the power of Server-Side Rendering! 🚀
`,image:B("744ba6d561.webp"),category:"web",pdfUrl:a3},{id:29,title:"🌟 𝐔𝐧𝐥𝐨𝐜𝐤𝐢𝐧𝐠 𝐭𝐡𝐞 𝐏𝐨𝐰𝐞𝐫 𝐨𝐟 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐆𝐮𝐢𝐝𝐞! 💻✨",date:"6 Mar 2024",description:`🌟 𝐔𝐧𝐥𝐨𝐜𝐤𝐢𝐧𝐠 𝐭𝐡𝐞 𝐏𝐨𝐰𝐞𝐫 𝐨𝐟 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐫𝐞𝐡𝐞𝐧𝐬𝐢𝐯𝐞 𝐆𝐮𝐢𝐝𝐞! 💻✨

  Curious about 𝐂𝐥𝐢𝐞𝐧𝐭-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐂𝐒𝐑) and its application in Next.js development? Let's delve into this essential topic together:

  In this comprehensive guide, we'll cover:

  1️⃣ 𝑼𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅𝒊𝒏𝒈 𝑪𝑺𝑹: Gain insights into what Client-Side Rendering (CSR) is and how it differs from other rendering methods in Next.js.

  2️⃣ 𝑨𝒅𝒗𝒂𝒏𝒕𝒂𝒈𝒆𝒔 𝒐𝒇 𝑪𝑺𝑹: Explore the benefits of using CSR, including dynamic content rendering, enhanced interactivity, and flexibility.

  3️⃣ 𝑰𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒊𝒏𝒈 𝑪𝑺𝑹 𝒊𝒏 𝑵𝒆𝒙𝒕.𝒋𝒔: Get a step-by-step overview of how to implement Client-Side Rendering in your Next.js projects, including routing, data fetching, and component rendering.

  4️⃣ 𝑹𝒆𝒂𝒍-𝑾𝒐𝒓𝒍𝒅 𝑬𝒙𝒂𝒎𝒑𝒍𝒆𝒔: Dive into practical examples showcasing the use of CSR in building interactive web applications, dashboards, and more.

  5️⃣ 𝑻𝒊𝒑𝒔 𝒂𝒏𝒅 𝑩𝒆𝒔𝒕 𝑷𝒓𝒂𝒄𝒕𝒊𝒄𝒆𝒔: Discover tips and best practices for optimizing and maximizing the benefits of CSR in your Next.js projects.

  By the end of this guide, you'll have a comprehensive understanding of Client-Side Rendering in Next.js and how to leverage it to build dynamic, interactive, and responsive web applications.

  Ready to harness the power of Client-Side Rendering in Next.js? Let's embark on this journey together!

  hashtag#NextJS hashtag#ClientSideRendering hashtag#CSR hashtag#WebDevelopment hashtag#DynamicContent hashtag#Interactivity hashtag#Optimization

  Let's elevate your Next.js projects with the power of Client-Side Rendering! 🚀🌐
`,image:B("4afeeea3b2.webp"),category:"web",pdfUrl:s3},{id:28,title:"🌟 𝐃𝐢𝐯𝐞 𝐢𝐧𝐭𝐨 𝐒𝐭𝐚𝐭𝐢𝐜 𝐒𝐢𝐭𝐞 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 (𝐒𝐒𝐆) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰! 💻✨",date:"5 Mar 2024",description:`🌟 𝐃𝐢𝐯𝐞 𝐢𝐧𝐭𝐨 𝐒𝐭𝐚𝐭𝐢𝐜 𝐒𝐢𝐭𝐞 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 (𝐒𝐒𝐆) 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐀 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐎𝐯𝐞𝐫𝐯𝐢𝐞𝐰! 💻✨

    Curious about 𝐒𝐭𝐚𝐭𝐢𝐜 𝐒𝐢𝐭𝐞 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐢𝐨𝐧 (𝐒𝐒𝐆) and its role in Next.js development? Let's explore this powerful feature together:

    In this comprehensive guide, we'll cover:

    1️⃣ 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐒𝐒𝐆: Learn what SSG is and how it differs from other rendering methods in Next.js.

    2️⃣ 𝐁𝐞𝐧𝐞𝐟𝐢𝐭𝐬 𝐨𝐟 𝐒𝐒𝐆: Explore the advantages of using SSG, including improved performance, SEO, and user experience.

    3️⃣ 𝐇𝐨𝐰 𝐒𝐒𝐆 𝐰𝐨𝐫𝐤𝐬 𝐢𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: Get a step-by-step overview of how SSG is implemented in Next.js projects.

    4️⃣ 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐚𝐥 𝐄𝐱𝐚𝐦𝐩𝐥𝐞𝐬: Dive into real-world examples of SSG usage, including blog sites, e-commerce platforms, and more.

    5️⃣ 𝐓𝐢𝐩𝐬 𝐚𝐧𝐝 𝐁𝐞𝐬𝐭 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬: Discover tips and best practices for maximizing the benefits of SSG in your Next.js projects.

    By the end of this overview, you'll have a solid understanding of SSG and how to leverage it to build fast, SEO-friendly, and scalable web applications with Next.js.

    Ready to unlock the full potential of Static Site Generation in Next.js? Let's embark on this journey together!

    #NextJS #StaticSiteGeneration #SSG #WebDevelopment #SEO #PerformanceOptimization #UserExperience

    Let's harness the power of Static Site Generation to build better web experiences! 🚀🌐
`,image:B("650ef88bd6.webp"),category:"web",pdfUrl:l3},{id:27,title:"🚀 𝐒𝐭𝐫𝐮𝐠𝐠𝐥𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐟𝐞𝐭𝐜𝐡𝐢𝐧𝐠 𝐀𝐏𝐈 𝐝𝐚𝐭𝐚 𝐚𝐧𝐝 𝐦𝐚𝐧𝐚𝐠𝐢𝐧𝐠 𝐬𝐭𝐚𝐭𝐞 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐑𝐞𝐚𝐜𝐭 𝐚𝐩𝐩? 𝐑𝐞𝐚𝐜𝐭 𝐐𝐮𝐞𝐫𝐲 𝐭𝐨 𝐭𝐡𝐞 𝐑𝐞𝐬𝐜𝐮𝐞! 🌟",date:"4 Mar 2024",description:`🚀 𝐒𝐭𝐫𝐮𝐠𝐠𝐥𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐟𝐞𝐭𝐜𝐡𝐢𝐧𝐠 𝐀𝐏𝐈 𝐝𝐚𝐭𝐚 𝐚𝐧𝐝 𝐦𝐚𝐧𝐚𝐠𝐢𝐧𝐠 𝐬𝐭𝐚𝐭𝐞 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐑𝐞𝐚𝐜𝐭 𝐚𝐩𝐩? 𝐑𝐞𝐚𝐜𝐭 𝐐𝐮𝐞𝐫𝐲 𝐭𝐨 𝐭𝐡𝐞 𝐑𝐞𝐬𝐜𝐮𝐞! 🌟

    Discover how React Query can simplify your development workflow:

    1️⃣ 𝑬𝒇𝒇𝒐𝒓𝒕𝒍𝒆𝒔𝒔 𝑫𝒂𝒕𝒂 𝑭𝒆𝒕𝒄𝒉𝒊𝒏𝒈: Say goodbye to complex fetch logic! React Query's intuitive API simplifies data fetching.

    2️⃣ 𝑨𝒖𝒕𝒐𝒎𝒂𝒕𝒊𝒄 𝑪𝒂𝒄𝒉𝒊𝒏𝒈: No more manual caching headaches. React Query automatically caches data, ensuring faster subsequent requests.

    3️⃣ 𝑶𝒑𝒕𝒊𝒎𝒊𝒔𝒕𝒊𝒄 𝑼𝒑𝒅𝒂𝒕𝒆𝒔: Handle state updates optimistically with React Query's built-in support, providing a smoother user experience.

    4️⃣ 𝑷𝒂𝒈𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒂𝒏𝒅 𝑰𝒏𝒇𝒊𝒏𝒊𝒕𝒆 𝑳𝒐𝒂𝒅𝒊𝒏𝒈: Easily implement pagination and infinite loading with React Query's powerful features, saving time and effort.

    5️⃣ 𝑬𝒓𝒓𝒐𝒓 𝑯𝒂𝒏𝒅𝒍𝒊𝒏𝒈 𝑴𝒂𝒅𝒆 𝑬𝒂𝒔𝒚: Streamline error handling with React Query, making it simple to manage and display errors to users.

    With React Query, fetching data and managing states become simple and efficient! Give it a try and experience the difference.

    💯 𝐅𝐨𝐥𝐥𝐨𝐰 for more 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 and 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠 Tips & Tricks.
    👍 If you found it helpful, hit 𝐥𝐢𝐤𝐞!
    🔁 𝐒𝐡𝐚𝐫𝐞 it with your network!
    🔖 𝐒𝐚𝐯𝐞 it for future reference!
    📤 𝐒𝐡𝐚𝐫𝐞 it with your 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬!
    💭 𝐂𝐨𝐦𝐦𝐞𝐧𝐭 your thoughts!

    #ReactJS #ReactQuery #WebDevelopment #Programming #TipsAndTricks #StateManagement #APIFetching #Optimization #ErrorHandling #Innovation
`,image:B("f208eca4be.webp"),category:"web",pdfUrl:u3},{id:26,title:"🌟 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐒𝐡𝐨𝐫𝐭𝐡𝐚𝐧𝐝 𝐓𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬! 💻✨",date:"4 Apr 2024",description:`🌟 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐒𝐡𝐨𝐫𝐭𝐡𝐚𝐧𝐝 𝐓𝐞𝐜𝐡𝐧𝐢𝐪𝐮𝐞𝐬! 💻✨

    Ready to enhance your ReactJS coding skills? Dive into these essential shorthand techniques to streamline your development workflow and write cleaner, more concise code!

    1️⃣ 𝑶𝒃𝒋𝒆𝒄𝒕 𝑫𝒆𝒔𝒕𝒓𝒖𝒄𝒕𝒖𝒓𝒊𝒏𝒈: Simplify variable assignment and access properties with object destructuring in React components.

    2️⃣ 𝑪𝒐𝒏𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝑹𝒆𝒏𝒅𝒆𝒓𝒊𝒏𝒈: Use ternary operators and logical && to conditionally render components and elements based on state or props.

    3️⃣ 𝑺𝒑𝒓𝒆𝒂𝒅 𝑶𝒑𝒆𝒓𝒂𝒕𝒐𝒓: Leverage the spread operator (...) to merge objects and arrays efficiently, reducing code redundancy.

    4️⃣ 𝑨𝒓𝒓𝒐𝒘 𝑭𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒔: Harness the power of arrow functions for concise and readable event handlers and component methods.

    5️⃣ 𝑭𝒓𝒂𝒈𝒎𝒆𝒏𝒕 𝑺𝒉𝒐𝒓𝒕𝒉𝒂𝒏𝒅: Replace <React.Fragment> with the shorthand <> syntax for cleaner JSX markup.

    By incorporating these shorthand techniques into your ReactJS projects, you'll write code that is not only more elegant but also easier to maintain and understand.

    Ready to level up your ReactJS game? Let's dive into the world of shorthand techniques and supercharge your coding productivity!

    #ReactJS #CodingTips #ShorthandTechniques #WebDevelopment #Programming

    Let's write ReactJS code like a pro! 🚀🔍
`,image:B("4297a0b6c5.webp"),category:"web",pdfUrl:c3},{id:25,title:"🚦 𝐄𝐦𝐛𝐚𝐫𝐤 𝐨𝐧 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐉𝐨𝐮𝐫𝐧𝐞𝐲 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 2024 𝐑𝐨𝐚𝐝𝐦𝐚𝐩! 🌐💼",date:"3 Apr 2024",description:`🚦 𝐄𝐦𝐛𝐚𝐫𝐤 𝐨𝐧 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐉𝐨𝐮𝐫𝐧𝐞𝐲 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 2024 𝐑𝐨𝐚𝐝𝐦𝐚𝐩! 🌐💼

    Ready to navigate the ever-evolving landscape of web development? Check out the essential roadmap for aspiring web developers in 2024:

    1️⃣ 𝐋𝐞𝐚𝐫𝐧 𝐇𝐓𝐌𝐋 & 𝐂𝐒𝐒: Lay the foundation by mastering the fundamentals of HTML and CSS—building blocks of every web page.

    2️⃣ 𝐋𝐞𝐚𝐫𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭: Dive into the world of dynamic and interactive web development with JavaScript—the language of the web.

    3️⃣ 𝐋𝐞𝐚𝐫𝐧 𝐆𝐢𝐭 & 𝐆𝐢𝐭𝐇𝐮𝐛: Equip yourself with version control skills using Git and GitHub—essential tools for collaborative coding and project management.

    4️⃣ 𝐋𝐞𝐚𝐫𝐧 𝐑𝐞𝐚𝐜𝐭𝐉𝐒: Level up your frontend development skills with ReactJS—a powerful library for building user interfaces.

    5️⃣ 𝐋𝐞𝐚𝐫𝐧 𝐍𝐞𝐱𝐭.𝐣𝐬: Take your React development to the next level with Next.js—a versatile framework for building server-rendered React applications.

    By following this roadmap, you'll acquire the skills and knowledge needed to embark on a successful career journey in web development. 🚀🎓

    Ready to hit the road? Start your journey today and unlock endless possibilities in the world of web development!

    #WebDevelopment #Roadmap2024 #HTML #CSS #JavaScript #ReactJS #NextJS #Git #GitHub

    Let's build the web of tomorrow, one step at a time! 🌟🔗
  `,image:B("c13e4871a5.webp"),category:"web",pdfUrl:d3},{id:24,title:"🚀 𝐍𝐞𝐱𝐭.𝐣𝐬 𝐔𝐧𝐯𝐞𝐢𝐥𝐞𝐝: 𝐒𝐮𝐩𝐞𝐫𝐜𝐡𝐚𝐫𝐠𝐞 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭! 🌐✨",date:"10 Mar 2024",description:`🚀 𝐍𝐞𝐱𝐭.𝐣𝐬 𝐔𝐧𝐯𝐞𝐢𝐥𝐞𝐝: 𝐒𝐮𝐩𝐞𝐫𝐜𝐡𝐚𝐫𝐠𝐞 𝐘𝐨𝐮𝐫 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭! 🌐✨

    Hello, digital creators and web enthusiasts! 👋🎨

    Next.js is a powerful React framework that provides a seamless development experience with server-side rendering, static site generation, and many more features out of the box. Here's why it's a game-changer: 🌟

    • 𝑺𝑬𝑶-𝑭𝒓𝒊𝒆𝒏𝒅𝒍𝒚📈: With server-side rendering and static site generation, Next.js ensures your content is fully indexable by search engines, boosting your site's visibility.

    • 𝑭𝒂𝒔𝒕 𝑷𝒆𝒓𝒇𝒐𝒓𝒎𝒂𝒏𝒄𝒆⚡: Enjoy lightning-fast page loads thanks to automatic code splitting and optimized asset delivery.

    • 𝒁𝒆𝒓𝒐 𝑪𝒐𝒏𝒇𝒊𝒈🛠️: Get started with advanced features without the headache of complex setup processes. Next.js handles the heavy lifting for you.

    • 𝑭𝒍𝒆𝒙𝒊𝒃𝒍𝒆 𝑫𝒂𝒕𝒂 𝑭𝒆𝒕𝒄𝒉𝒊𝒏𝒈 🔄: Fetch data at build time, request time, or client side, giving you the flexibility to build a wide range of applications.

    • 𝑩𝒖𝒊𝒍𝒕-𝒊𝒏 𝑪𝑺𝑺 𝑺𝒖𝒑𝒑𝒐𝒓𝒕 🎨: Style your applications effortlessly with built-in CSS and Sass support, along with any CSS-in-JS library.

    • 𝑹𝒊𝒄𝒉 𝑬𝒄𝒐𝒔𝒚𝒔𝒕𝒆𝒎 🌍: Leverage the vast React ecosystem, including libraries and tools, to enhance your app further.

    Whether you're building a small project or a large-scale enterprise application, 𝐍𝐞𝐱𝐭.𝐣𝐬 offers the 𝐬𝐜𝐚𝐥𝐚𝐛𝐢𝐥𝐢𝐭𝐲, 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, and developer experience to bring your visions to life. 🚀🏗️

    Stay tuned for more insights and tips in the world of web development. Together, let's build faster, more efficient, and user-friendly web experiences. Happy coding, everyone! 🎉👨‍💻👩‍💻

    #Nextjs #React #WebDevelopment #SEO #Performance #TechInnovation #DeveloperLife 💻🌈
    `,image:B("042bfaa87d.webp"),category:"web",pdfUrl:p3},{id:23,title:"🚀 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐄𝐒𝐋𝐢𝐧𝐭, 𝐏𝐫𝐞𝐭𝐭𝐢𝐞𝐫 & 𝐕𝐒 𝐂𝐨𝐝𝐞 𝐟𝐨𝐫 𝐍𝐞𝐱𝐭.𝐣𝐬 & 𝐑𝐞𝐚𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭! 💻✨",date:"29 Mar 2024",description:`🚀 𝐌𝐚𝐬𝐭𝐞𝐫𝐢𝐧𝐠 𝐄𝐒𝐋𝐢𝐧𝐭, 𝐏𝐫𝐞𝐭𝐭𝐢𝐞𝐫 & 𝐕𝐒 𝐂𝐨𝐝𝐞 𝐟𝐨𝐫 𝐍𝐞𝐱𝐭.𝐣𝐬 & 𝐑𝐞𝐚𝐜𝐭 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭! 💻✨

    Ready to streamline your Next.js and React development workflows? Dive into this comprehensive guide on ESLint, Prettier, and VS Code integration—essential tools for maintaining code quality and consistency.

    In this guide, you'll learn:
    1️⃣ Setting up ESLint to catch errors and enforce coding standards.
    2️⃣ Configuring Prettier for consistent code formatting across your project.
    3️⃣ Integrating ESLint and Prettier seamlessly with VS Code for real-time feedback and auto-fixing.
    4️⃣ Best practices for configuring ESLint and Prettier for Next.js and React projects.
    5️⃣ Maximizing productivity with VS Code's powerful features and extensions tailored for React development.

    By the end of this guide, you'll have a well-oiled development environment that ensures code quality, consistency, and productivity—empowering you to build stellar Next.js and React applications with confidence!

    Let's elevate your coding experience and unleash the full potential of Next.js and React! 🌟💡

    #ESLint #Prettier #VSCode #NextJS #React #DevelopmentGuide #CodingTips

    Get ready to code smarter, not harder! 🛠️🚀
    `,image:"https://i.postimg.cc/rmvs22Z4/Screenshot-2024-07-16-103836.png",category:"web",pdfUrl:f3},{id:22,title:"𝐒𝐩𝐞𝐞𝐝 𝐢𝐬 𝐭𝐡𝐞 𝐧𝐚𝐦𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐠𝐚𝐦𝐞 𝐢𝐧 𝐰𝐞𝐛 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐌𝐕𝐏! 🚀",date:"20 Mar 2024",description:`𝐒𝐩𝐞𝐞𝐝 𝐢𝐬 𝐭𝐡𝐞 𝐧𝐚𝐦𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐠𝐚𝐦𝐞 𝐢𝐧 𝐰𝐞𝐛 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐒𝐞𝐫𝐯𝐞𝐫-𝐒𝐢𝐝𝐞 𝐑𝐞𝐧𝐝𝐞𝐫𝐢𝐧𝐠 (𝐒𝐒𝐑) 𝐢𝐬 𝐲𝐨𝐮𝐫 𝐌𝐕𝐏! 🚀

      In the digital realm, the first impression is often the last—and it's all about how quickly your content appears on the user's screen. SSR is the unsung hero here, ensuring your website isn't just a pretty face but also a sprinter on the track of the World Wide Web.

      𝐖𝐡𝐲 𝐬𝐡𝐨𝐮𝐥𝐝 𝐲𝐨𝐮 𝐜𝐚𝐫𝐞 𝐚𝐛𝐨𝐮𝐭 𝐒𝐒𝐑? Well, imagine clicking on a link and getting the content delivered to you faster than you can say "Server-Side Rendering." That's the magic of SSR! It's not just about speed, though. SEO loves SSR too! Search engines can crawl your site more effectively, making your content the star of search results.

      𝐁𝐮𝐭 𝐡𝐨𝐰 𝐝𝐨𝐞𝐬 𝐒𝐒𝐑 𝐰𝐨𝐫𝐤 𝐢𝐭𝐬 𝐦𝐚𝐠𝐢𝐜? It's like a chef preparing your meal before you even step into the restaurant. When you arrive, voilà—your table is set, and your meal is ready. That's SSR serving up your website—fully cooked and ready to be devoured by eager users.

      And for those who speak in code, frameworks like React, Angular, and Vue.js are your allies in implementing SSR. They've got tools like Next.js and Nuxt.js that make SSR as easy as pie.

      So, are you ready to give your users the fast-loading, SEO-friendly, performance-optimized experience they deserve? If SSR isn't on your radar yet, it's time to tune in.

      Let's start a conversation—how has SSR impacted your projects? Or if you're new to this, what's holding you back from giving it a go?

      🚀 𝘋𝘳𝘰𝘱 𝘢 𝘭𝘪𝘬𝘦 𝘪𝘧 𝘺𝘰𝘶'𝘳𝘦 𝘢𝘭𝘭 𝘪𝘯 𝘧𝘰𝘳 𝘣𝘦𝘵𝘵𝘦𝘳 𝘱𝘦𝘳𝘧𝘰𝘳𝘮𝘢𝘯𝘤𝘦!
      🔖 𝘉𝘰𝘰𝘬𝘮𝘢𝘳𝘬 𝘵𝘩𝘪𝘴 𝘵𝘰 𝘬𝘦𝘦𝘱 𝘚𝘚𝘙 𝘰𝘯 𝘺𝘰𝘶𝘳 𝘳𝘢𝘥𝘢𝘳!
      📤 𝘚𝘩𝘢𝘳𝘦 𝘵𝘩𝘪𝘴 𝘸𝘪𝘵𝘩 𝘺𝘰𝘶𝘳 𝘯𝘦𝘵𝘸𝘰𝘳𝘬 𝘵𝘰 𝘴𝘱𝘳𝘦𝘢𝘥 𝘵𝘩𝘦 𝘚𝘚𝘙 𝘸𝘰𝘳𝘥!
      💬 𝘊𝘰𝘮𝘮𝘦𝘯𝘵 𝘣𝘦𝘭𝘰𝘸 𝘸𝘪𝘵𝘩 𝘺𝘰𝘶𝘳 𝘚𝘚𝘙 𝘴𝘵𝘰𝘳𝘪𝘦𝘴 𝘰𝘳 𝘲𝘶𝘦𝘴𝘵𝘪𝘰𝘯𝘴!

      #WebDevelopment #SEO #Performance`,image:B("ce74db345b.webp"),category:"web",pdfUrl:h3},{id:21,title:"🛠️ 𝐄𝐧𝐡𝐚𝐧𝐜𝐞 𝐘𝐨𝐮𝐫 𝐑𝐞𝐚𝐜𝐭 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐰𝐢𝐭𝐡 𝐓𝐡𝐞𝐬𝐞 𝐔𝐬𝐞𝐟𝐮𝐥 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬! 🚀💻",date:"25 Mar 2024",description:`🛠️ 𝐄𝐧𝐡𝐚𝐧𝐜𝐞 𝐘𝐨𝐮𝐫 𝐑𝐞𝐚𝐜𝐭 𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬 𝐰𝐢𝐭𝐡 𝐓𝐡𝐞𝐬𝐞 𝐔𝐬𝐞𝐟𝐮𝐥 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬! 🚀💻

    Looking to add some extra functionality and flair to your React projects? Check out these versatile libraries that can help you streamline development and create engaging user experiences:

    𝐑𝐞𝐚𝐜𝐭-𝐊𝐨𝐧𝐯𝐚: Bring your canvas and drawing projects to life with React-Konva. Harness the power of the Konva library for easy and efficient canvas manipulation.

    𝐑𝐞𝐚𝐜𝐭-𝐆𝐞𝐬𝐭𝐮𝐫𝐞-𝐇𝐚𝐧𝐝𝐥𝐞𝐫: Elevate your touch-based interactions with React-Gesture-Handler. Implement gestures like swipe, pinch, and rotate effortlessly in your React applications.

    𝐑𝐞𝐚𝐜𝐭-𝐅𝐥𝐢𝐩-𝐌𝐨𝐯𝐞: Add smooth and beautiful animations to your React components with React-Flip-Move. Easily animate list transitions and UI elements for a polished user experience.

    𝐑𝐞𝐚𝐜𝐭-𝐕𝐢𝐫𝐭𝐮𝐚𝐥𝐢𝐳𝐞𝐝: Optimize performance and efficiency in large-scale applications with React-Virtualized. Render large lists and grids efficiently with virtualized components.

    𝐑𝐞𝐚𝐜𝐭-𝐓𝐨𝐚𝐬𝐭𝐢𝐟𝐲: Enhance your user notifications with React-Toastify. Display toast messages and alerts in a customizable and user-friendly way.

    𝐑𝐞𝐚𝐜𝐭-𝐏𝐚𝐠𝐞-𝐓𝐫𝐚𝐧𝐬𝐢𝐭𝐢𝐨𝐧: Create seamless page transitions and animations in your React applications with React-Page-Transition. Keep your users engaged as they navigate through your site.

    𝐑𝐞𝐚𝐜𝐭-360: Dive into the world of virtual reality with React-360. Build immersive VR experiences for the web using React components.

    With these libraries in your toolkit, you'll have everything you need to take your React projects to the next level! 💡🔧

    𝘙𝘦𝘢𝘥𝘺 𝘵𝘰 𝘵𝘢𝘬𝘦 𝘺𝘰𝘶𝘳 𝒄𝒐𝒅𝒊𝒏𝒈 𝘫𝘰𝘶𝘳𝘯𝘦𝘺 𝘵𝘰 𝘯𝘦𝘸 𝘩𝘦𝘪𝘨𝘩𝘵𝘴? 𝘍𝘰𝘭𝘭𝘰𝘸 Jimmy Ramani'𝒔 𝘭𝘦𝘢𝘥 𝘢𝘯𝘥 𝘶𝘯𝘭𝘰𝘤𝘬 𝘵𝘩𝘦 𝒔𝒆𝒄𝒓𝒆𝒕𝒔 𝘵𝘰 𝘦𝘯𝘩𝘢𝘯𝘤𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘤𝘰𝘥𝘪𝘯𝘨 𝘱𝘳𝘰𝘧𝘪𝘤𝘪𝘦𝘯𝘤𝘺! 𝘍𝘳𝘰𝘮 𝘤𝘶𝘵𝘵𝘪𝘯𝘨-𝘦𝘥𝘨𝘦 𝘵𝘪𝘱𝘴 𝘵𝘰 𝘪𝘯𝘷𝘢𝘭𝘶𝘢𝘣𝘭𝘦 𝘪𝘯𝘴𝘪𝘨𝘩𝘵𝘴, 𝑱𝒊𝒎𝒎𝒚'𝒔 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥 𝘦𝘷𝘦𝘳𝘺 𝘴𝘵𝘦𝘱 𝘰𝘧 𝘵𝘩𝘦 𝘸𝘢𝘺.

    #ReactJS #FrontEndDevelopment #WebDevelopment #ReactLibraries #Innovation`,image:B("5d68dadb73.webp"),category:"web",pdfUrl:m3},{id:20,title:"𝐄𝐯𝐞𝐫 𝐰𝐨𝐧𝐝𝐞𝐫𝐞𝐝 𝐰𝐡𝐲 𝐲𝐨𝐮𝐫 𝐒𝐕𝐆𝐬 𝐭𝐚𝐤𝐞 𝐚 𝐬𝐜𝐞𝐧𝐢𝐜 𝐫𝐨𝐮𝐭𝐞 𝐛𝐞𝐟𝐨𝐫𝐞 𝐩𝐨𝐩𝐩𝐢𝐧𝐠 𝐮𝐩 𝐨𝐧 𝐲𝐨𝐮𝐫 𝐚𝐩𝐩'𝐬 𝐔𝐈? 🤔",date:"22 Mar 2024",description:`𝐄𝐯𝐞𝐫 𝐰𝐨𝐧𝐝𝐞𝐫𝐞𝐝 𝐰𝐡𝐲 𝐲𝐨𝐮𝐫 𝐒𝐕𝐆𝐬 𝐭𝐚𝐤𝐞 𝐚 𝐬𝐜𝐞𝐧𝐢𝐜 𝐫𝐨𝐮𝐭𝐞 𝐛𝐞𝐟𝐨𝐫𝐞 𝐩𝐨𝐩𝐩𝐢𝐧𝐠 𝐮𝐩 𝐨𝐧 𝐲𝐨𝐮𝐫 𝐚𝐩𝐩'𝐬 𝐔𝐈? 🤔

    SVGs are the superheroes of the digital image world: they're sleek, they scale without a hitch, and they keep your app light on its feet. But even superheroes have their kryptonite. For SVGs, it's the dreaded lag before they make their grand entrance on the screen.

    Here's a pro tip to save the day: pre-caching! 🚀 By creating a helper function and calling it in your main(), you're essentially rolling out the red carpet for your SVGs. They'll be ready to show up instantly, no more awkward waiting.

    And for those who love a bit of customization, SVGs come with a nifty trick up their sleeve. The color filter property! Want to match your SVGs to your brand colors or set the mood with a specific blend mode? Dive into the API docs and get creative.

    Now, I'm curious, fellow developers and designers: How do you optimize your images for the best user experience? Have you tried pre-caching or playing with blend modes? Share your insights or ask questions below. Let's get the conversation started!

    If this tip just made your day or you know someone who could benefit from it, go ahead and hit that like button or better yet, repost this gem. Let's spread the knowledge!

    hashtag#SVG hashtag#Performance hashtag#WebDevelopment`,image:B("74a273e493.webp"),category:"web",photoUrl:B("74a273e493.webp")},{id:19,title:"𝑬𝒗𝒆𝒓 𝒘𝒐𝒏𝒅𝒆𝒓𝒆𝒅 𝒘𝒉𝒂𝒕 𝒕𝒉𝒆 𝒔𝒆𝒄𝒓𝒆𝒕 𝒔𝒂𝒖𝒄𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒂 𝒌𝒊𝒍𝒍𝒆𝒓 𝒂𝒑𝒑 𝒐𝒓 𝒘𝒆𝒃 𝒑𝒓𝒐𝒋𝒆𝒄𝒕? 🤔💡",date:"21 Mar 2024",description:`𝑬𝒗𝒆𝒓 𝒘𝒐𝒏𝒅𝒆𝒓𝒆𝒅 𝒘𝒉𝒂𝒕 𝒕𝒉𝒆 𝒔𝒆𝒄𝒓𝒆𝒕 𝒔𝒂𝒖𝒄𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒂 𝒌𝒊𝒍𝒍𝒆𝒓 𝒂𝒑𝒑 𝒐𝒓 𝒘𝒆𝒃 𝒑𝒓𝒐𝒋𝒆𝒄𝒕? 🤔💡

    It's all about the tools you use, and APIs are the Swiss Army knife for developers! Here's a rundown of some amazing APIs that could be the game-changer for your next project:

    🔹 𝐂𝐨𝐢𝐧 𝐏𝐚𝐩𝐫𝐢𝐤𝐚: Get real-time crypto stats and stay ahead of the market trends. Perfect for finance-focused apps!

    🔹 𝐌𝐚𝐫𝐯𝐞𝐥: Tap into the Marvel universe and bring a heroic edge to your content. Ideal for fans and creators alike!

    🔹 𝐔𝐧𝐬𝐩𝐥𝐚𝐬𝐡: Need visuals? Access a wealth of stunning images to enhance your user interface.

    🔹 𝐅𝐚𝐤𝐞 𝐒𝐭𝐨𝐫𝐞 𝐀𝐏𝐈: Hone your e-commerce prowess with a sandbox environment that feels like the real deal.

    🔹 𝐎𝐩𝐞𝐧𝐒𝐞𝐚: Dive into the NFT craze and integrate with the biggest marketplace out there.

    🔹 𝐓𝐕 𝐌𝐚𝐳𝐞: Build the ultimate guide for TV enthusiasts with comprehensive show data.

    🔹 𝐍𝐀𝐒𝐀 𝐎𝐩𝐞𝐧 𝐀𝐏𝐈: Bring space exploration to your users with data from the final frontier.

    🔹 𝐂𝐥𝐨𝐮𝐝𝐂𝐨𝐧𝐯𝐞𝐫𝐭: Solve any file conversion puzzle with this versatile tool.

    Now, here's the question for you: Which of these APIs sparks an idea for your next project, and how would you use it to innovate? 🚀

    Share your 𝒕𝒉𝒐𝒖𝒈𝒉𝒕𝒔, and let's brainstorm some genius applications together! Don't forget to hit the '𝑳𝒊𝒌𝒆' button if you found this list helpful, and drop a 𝒄𝒐𝒎𝒎𝒆𝒏𝒕 with your innovative 𝒊𝒅𝒆𝒂𝒔 or 𝒒𝒖𝒆𝒔𝒕𝒊𝒐𝒏𝒔!

    #APIs #WebDevelopment #AppDevelopment #Innovation #Coding`,image:B("b848f1a8d2.webp"),category:"web",pdfUrl:g3},{id:18,title:"🚀 Ready to Level Up Your Node.js Skills? 𝐁𝐮𝐢𝐥𝐝 𝐚 𝐒𝐢𝐦𝐩𝐥𝐞 𝐄𝐱𝐩𝐫𝐞𝐬𝐬 𝐒𝐞𝐫𝐯𝐞𝐫! 💻🌐",date:"20 Mar 2024",description:`🚀 Ready to Level Up Your Node.js Skills? 𝐁𝐮𝐢𝐥𝐝 𝐚 𝐒𝐢𝐦𝐩𝐥𝐞 𝐄𝐱𝐩𝐫𝐞𝐬𝐬 𝐒𝐞𝐫𝐯𝐞𝐫! 💻🌐

    Excited to share a beginner-friendly guide to building your very own Express server in Node.js! 🎉

    Whether you're new to backend development or looking to expand your skill set, this is for you.

    In just a few easy steps, you'll learn how to:

    1️⃣ Set up a new Node.js project
    2️⃣ Install and configure Express.js
    3️⃣ Create routes to handle HTTP requests
    4️⃣ Serve static files and assets
    5️⃣ Implement middleware for additional functionality

    By the end of this, you'll have a solid foundation for building backend applications with Express, a powerful and versatile framework for Node.js.
    Ready to dive in? Check out 𝐉𝐢𝐦𝐦𝐲 𝐑𝐚𝐦𝐚𝐧𝐢 and start building your own Express server today! 🛠️💡

    #NodeJS #ExpressJS #BackendDevelopment #WebDevelopment #Tutorial #Learning
    `,image:B("a7a2bed1fe.webp"),category:"web",pdfUrl:y3},{id:17,title:"🎨 𝐄𝐥𝐞𝐯𝐚𝐭𝐞 𝐘𝐨𝐮𝐫 𝐔𝐈 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭 𝐀𝐧𝐢𝐦𝐚𝐭𝐢𝐨𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬! 🚀✨",date:"18 Mar 2024",description:`🎨 𝐄𝐥𝐞𝐯𝐚𝐭𝐞 𝐘𝐨𝐮𝐫 𝐔𝐈 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭 𝐀𝐧𝐢𝐦𝐚𝐭𝐢𝐨𝐧 𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬! 🚀✨

    Ready to add some magic to your React applications? Explore these top-notch animation libraries and bring your user interfaces to life:

    𝐅𝐫𝐚𝐦𝐞𝐫 𝐌𝐨𝐭𝐢𝐨𝐧: Dive into fluid animations and gesture-based interactions with Framer Motion. Create stunning visual experiences effortlessly!

    𝐑𝐞𝐚𝐜𝐭 𝐒𝐩𝐫𝐢𝐧𝐠: Harness the power of physics-based animations with React Spring. From simple transitions to complex animations, unleash your creativity!

    𝐀𝐧𝐢𝐦𝐞.𝐣𝐬: Infuse your UI with dynamic and expressive animations using Anime.js. With its lightweight and versatile nature, the possibilities are endless!

    𝐆𝐫𝐞𝐞𝐧𝐒𝐨𝐜𝐤 (𝐆𝐒𝐀𝐏): Delve into the world of professional-grade animations with GreenSock. Elevate your projects with smooth, high-performance animations that captivate your audience!

    𝐑𝐞𝐚𝐜𝐭 𝐌𝐨𝐯𝐞: Seamlessly integrate animations into your React components with React Move. Simplify complex transitions and elevate your user experience!

    Whether you're a seasoned developer or just starting out, these animation libraries offer a plethora of tools and effects to make your React projects shine. Get ready to dazzle your users and take your UI to the next level! 💫🖥️

    #React #Animation #UI #FrontEndDevelopment #FramerMotion #ReactSpring #AnimeJS #GreenSock #ReactMove
    `,image:B("bc8dc71a45.webp"),category:"web",pdfUrl:v3},{id:16,title:"🚀 Elevate your website speed with these 5️⃣ simple tips for React.js",date:"17 Mar 2024",description:`🚀 Elevate your website speed with these 5️⃣ simple tips for React.js.

    1️⃣ 𝐋𝐚𝐳𝐲 𝐋𝐨𝐚𝐝𝐢𝐧𝐠: 🖼️ Load images smartly using react-lazy-load to enhance user experience. Code example included!

    2️⃣ 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐞 𝐈𝐦𝐚𝐠𝐞𝐬: 📸💨 Speed up your site by compressing images with tools like TinyPNG. It's a game-changer!

    3️⃣ 𝐑𝐞𝐦𝐨𝐯𝐞 𝐈𝐧𝐥𝐢𝐧𝐞 𝐂𝐒𝐒: 🚫💅 Improve organization by avoiding inline styles in React components. Use external stylesheets instead.

    4️⃣ 𝐂𝐨𝐝𝐞-𝐬𝐩𝐥𝐢𝐭𝐭𝐢𝐧𝐠: ⚡🔄 Utilize React.lazy to load components only when needed. breaking down your code into smaller chunks and loading them only when needed. It will boost efficiency and performance!

    5️⃣ 𝐅𝐨𝐧𝐭 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐌𝐚𝐬𝐭𝐞𝐫𝐲: 📚🔠 Control font rendering behavior with the font-display property. Load only what's necessary for sleek typography.

    6️⃣ 𝐌𝐢𝐧𝐢𝐟𝐲 & 𝐁𝐮𝐧𝐝𝐥𝐞: 🛍️🔍 Shrink JavaScript files using tools like Webpack for faster page loads. Your users will thank you!

    Implement these easy techniques now, to supercharge your Google Page Speed! 🚀📈

    Follow Jimmy Ramani for more Web Development, Programming tips and SEO tricks.

    👍 Like if you find it helpful!
    🔄 Share with your network!
    📤 Save for future reference!
    💬 Share your thoughts!

    #reactjs #react #javascript #cheatsheet #tips #mastery #guide #developer #programmer #web #development #code #nextjs #nextjs14 #webdevelopment #mern #notes #speedoptimization #website #websitedevelopment #softwaredevelopment #mernstack #seo
    `,image:B("c5053fa1e9.webp"),category:"web",pdfUrl:x3},{id:15,title:"🔥 𝐄𝐱𝐜𝐢𝐭𝐞𝐝 𝐭𝐨 𝐬𝐡𝐚𝐫𝐞 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐒𝐎𝐋𝐈𝐃 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬! 🔍💡",date:"16 Mar 2024",description:`🔥 𝐄𝐱𝐜𝐢𝐭𝐞𝐝 𝐭𝐨 𝐬𝐡𝐚𝐫𝐞 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐒𝐎𝐋𝐈𝐃 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬! 🔍💡

    In the dynamic world of front-end development, mastering SOLID principles is essential for building robust and scalable ReactJS applications. SOLID is an acronym that stands for five key principles of object-oriented design: single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion.

    I delve into how these principles apply specifically to ReactJS development, covering topics such as:
    🔹 Understanding each SOLID principle and its importance
    🔹 Practical examples demonstrating SOLID principles in ReactJS components
    🔹 Strategies for implementing SOLID principles in your ReactJS projects
    🔹 Best practices for writing clean, maintainable, and scalable ReactJS code
    🔹 Real-world case studies highlighting the benefits of SOLID principles in ReactJS development

    Whether you're a ReactJS enthusiast looking to strengthen your coding skills or a developer aiming to build high-quality, maintainable applications, this resource is tailored to provide you with actionable insights and practical guidance.

    📎Dive into the world of 𝐑𝐞𝐚𝐜𝐭𝐉𝐒 𝐒𝐎𝐋𝐈𝐃 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬 and elevate your front-end development game!

    Absolutely! Here you go:

    🚀 𝘙𝘦𝘢𝘥𝘺 𝘵𝘰 𝘭𝘦𝘷𝘦𝘭 𝘶𝘱 𝘺𝘰𝘶𝘳 𝘤𝘰𝘥𝘪𝘯𝘨 𝘴𝘬𝘪𝘭𝘭𝘴? 𝘍𝘰𝘭𝘭𝘰𝘸 𝑱𝒊𝒎𝒎𝒚'𝒔 𝘭𝘦𝘢𝘥! 𝘓𝘦𝘢𝘳𝘯 𝘵𝘪𝘱𝘴 𝘢𝘯𝘥 𝘵𝘳𝘪𝘤𝘬𝘴 𝘧𝘳𝘰𝘮 Jimmy Ramani 𝘵𝘰 𝘦𝘯𝘩𝘢𝘯𝘤𝘦 𝘺𝘰𝘶𝘳 𝘤𝘰𝘥𝘪𝘯𝘨 𝘱𝘳𝘰𝘧𝘪𝘤𝘪𝘦𝘯𝘤𝘺! 𝘓𝘦𝘵'𝘴 𝘤𝘰𝘥𝘦 𝘴𝘮𝘢𝘳𝘵𝘦𝘳, 𝘵𝘰𝘨𝘦𝘵𝘩𝘦𝘳 𝘸𝘪𝘵𝘩 𝑱𝒊𝒎𝒎𝒚'𝒔 𝘨𝘶𝘪𝘥𝘢𝘯𝘤𝘦!

    #ReactJS #SOLIDPrinciples #FrontEndDevelopment
    `,image:B("5760c37567.webp"),category:"web",pdfUrl:w3},{id:14,title:"𝗪𝗲𝗯 𝗔𝗽𝗜 𝗗𝗲𝘀𝗶𝗴𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀: 𝗔 𝗩𝗶𝘀𝘂𝗮𝗹 𝗚𝘂𝗶𝗱𝗲 🌐💻",date:"15 Mar 2024",description:`𝗪𝗲𝗯 𝗔𝗽𝗜 𝗗𝗲𝘀𝗶𝗴𝗻 𝗣𝗿𝗼𝗰𝗲𝘀𝘀: 𝗔 𝗩𝗶𝘀𝘂𝗮𝗹 𝗚𝘂𝗶𝗱𝗲 🌐💻

    Excited to unveil an insightful guide to navigating the web application development process using APIs.

    In today's interconnected digital landscape, understanding Web APIs is crucial for developers, businesses, and tech enthusiasts alike. APIs (Application Programming Interfaces) serve as the backbone of modern web applications, enabling seamless communication and data exchange between different software systems.

    I delve into the fundamentals of Web APIs, covering topics such as:
    1. 𝐖𝐡𝐚𝐭 𝐚𝐫𝐞 𝐖𝐞𝐛 𝐀𝐏𝐈𝐬 𝐚𝐧𝐝 𝐰𝐡𝐲 𝐚𝐫𝐞 𝐭𝐡𝐞𝐲 𝐢𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭?
    2. 𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐭 𝐭𝐲𝐩𝐞𝐬 𝐨𝐟 𝐖𝐞𝐛 𝐀𝐏𝐈𝐬
    3. 𝐇𝐨𝐰 𝐭𝐨 𝐝𝐞𝐬𝐢𝐠𝐧 𝐚𝐧𝐝 𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭 𝐞𝐟𝐟𝐞𝐜𝐭𝐢𝐯𝐞 𝐀𝐏𝐈𝐬
    4. 𝐁𝐞𝐬𝐭 𝐩𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬 𝐟𝐨𝐫 𝐀𝐏𝐈 𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝐯𝐞𝐫𝐬𝐢𝐨𝐧𝐢𝐧𝐠

    Whether you're a seasoned developer looking to enhance your API skills or a newcomer eager to grasp the basics, this resource is tailored to provide valuable insights and practical knowledge.

    📎Dive into the world of Web APIs and unlock new possibilities for innovation and collaboration!

    𝘓𝘰𝘰𝘬𝘪𝘯𝘨 𝘵𝘰 𝘭𝘦𝘷𝘦𝘭 𝘶𝘱 𝘺𝘰𝘶𝘳 𝘤𝘰𝘥𝘪𝘯𝘨 𝘴𝘬𝘪𝘭𝘭𝘴? 📈 𝘍𝘰𝘭𝘭𝘰𝘸 Jimmy Ramani 𝘧𝘰𝘳 𝘢 𝘴𝘵𝘦𝘢𝘥𝘺 𝘴𝘵𝘳𝘦𝘢𝘮 𝘰𝘧 𝘪𝘯𝘷𝘢𝘭𝘶𝘢𝘣𝘭𝘦 𝘤𝘰𝘥𝘪𝘯𝘨 𝘵𝘪𝘱𝘴, 𝘵𝘳𝘪𝘤𝘬𝘴, 𝘢𝘯𝘥 𝘪𝘯𝘴𝘪𝘨𝘩𝘵𝘴. 𝘍𝘳𝘰𝘮 𝘮𝘢𝘴𝘵𝘦𝘳𝘪𝘯𝘨 𝘯𝘦𝘸 𝘭𝘢𝘯𝘨𝘶𝘢𝘨𝘦𝘴 𝘵𝘰 𝘰𝘱𝘵𝘪𝘮𝘪𝘻𝘪𝘯𝘨 𝘺𝘰𝘶𝘳 𝘸𝘰𝘳𝘬𝘧𝘭𝘰𝘸, 𝑱𝒊𝒎𝒎𝒚'𝒔 𝘨𝘰𝘵 𝘺𝘰𝘶 𝘤𝘰𝘷𝘦𝘳𝘦𝘥!

    #WebAPI #SoftwareDevelopment #TechTalk
    `,image:B("df2eb71c92.webp"),category:"web",pdfUrl:b3},{id:13,title:"🚀 Dive into the world of React.js in our first class!",date:"14 Mar 2024",description:`🚀 Dive into the world of React.js in our first class!

    Learn the fundamentals of React components, JSX syntax, and state management. Get hands-on experience with building your first React app from scratch.

    Kickstart your journey to mastering React.js today!

    .
    .

    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills!📚⌨️

    #ReactJS #Coding #TechEducation
    `,image:B("8b698b9991.webp"),category:"web",pdfUrl:S3},{id:12,title:"𝐆𝐢𝐭𝐇𝐮𝐛 𝐖𝐨𝐫𝐤𝐟𝐥𝐨𝐰: 𝐀 𝐕𝐢𝐬𝐮𝐚𝐥 𝐆𝐮𝐢𝐝𝐞 💫",date:"13 Mar 2024",description:`𝐆𝐢𝐭𝐇𝐮𝐛 𝐖𝐨𝐫𝐤𝐟𝐥𝐨𝐰: 𝐀 𝐕𝐢𝐬𝐮𝐚𝐥 𝐆𝐮𝐢𝐝𝐞 💫

    I'm thrilled to share a diagram I've crafted, breaking down the GitHub workflow in an easy-to-understand and visual way.

    🧠 𝐂𝐨𝐧𝐜𝐞𝐩𝐭: It all begins with an idea. This is the stage where a collaborator dreams up a project and lays the groundwork for its creation.

    🔨 𝐎𝐫𝐠𝐚𝐧𝐢𝐳𝐚𝐭𝐢𝐨𝐧: Once the idea is fleshed out, the next step is to get things organized. This means setting up a repository on GitHub, defining teams and collaborators. With tools like project boards and issue tracking, being organized is crucial for a seamless workflow.

    💻 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭: This is where the magic of coding happens. Using Git commands like clone, pull, and fetch, developers can work on the code locally. Then, through commits and pushes, changes are progressively merged into the main repository.

    🔄 𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧: Collaboration is key, facilitated by using branches for specific tasks or issues, followed by pull requests to integrate these changes into the main branch.

    ✅ 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐢𝐨𝐧: At the cycle's end, issues are resolved, and code is fully integrated, marking the process complete until the next big idea emerges.

    Did you find it helpful? Would you add or change anything?
    Feel free to save this diagram for future reference and share it with anyone who might find it beneficial.

    #GitHub #DevOps #Workflow #Collaboration #SoftwareDevelopment #DataScience
    `,image:"https://i.postimg.cc/7hNgHNGw/1707395173705.gif",category:"web",photoUrl:"https://i.postimg.cc/7hNgHNGw/1707395173705.gif"},{id:11,title:"🕶️ Master JavaScript 8 Pro Tricks",date:"12 Mar 2024",description:`🕶️ Master JavaScript 8 Pro Tricks

    ♥️ Give it a like if you think it's helpful!

    💭 Don't forget to Save it.

    🫴 Follow Jimmy Ramani for more

    #javascript #javascriptdeveloper #javascriptlearning #react #reactjs #reactdeveloper #frontend #frontenddeveloper #frontenddevelopment #webdevelopment #webdeveloper #connect #follow
    `,image:B("7b3c458914.webp"),category:"web",pdfUrl:k3},{id:10,title:"𝐌𝐚𝐬𝐭𝐞𝐫 𝐑𝐞𝐚𝐜𝐭 𝐰𝐢𝐭𝐡 𝐓𝐡𝐞𝐬𝐞 𝐑𝐞𝐩𝐨𝐬 ⬇️",date:"11 Mar 2024",description:`𝐌𝐚𝐬𝐭𝐞𝐫 𝐑𝐞𝐚𝐜𝐭 𝐰𝐢𝐭𝐡 𝐓𝐡𝐞𝐬𝐞 𝐑𝐞𝐩𝐨𝐬 ⬇️

    𝐑𝐞𝐚𝐜𝐭 is one of the best library,
    to build a frontend based on 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭.

    And if you wanna learn React, then
    These repos are for you.

    01. 𝐫𝐞𝐚𝐜𝐭-𝐮𝐬𝐞
    02. 𝐫𝐞𝐚𝐜𝐭-𝐛𝐢𝐭𝐬
    03. 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤/𝐫𝐞𝐚𝐜𝐭
    04. 𝐫𝐞𝐚𝐜𝐭-𝐢𝐧-𝐩𝐚𝐭𝐭𝐞𝐫𝐧𝐬
    05. 𝐚𝐰𝐞𝐬𝐨𝐦𝐞-𝐫𝐞𝐚𝐜𝐭
    06. 𝐫𝐞𝐚𝐜𝐭-𝐫𝐞𝐝𝐮𝐱-𝐥𝐢𝐧𝐤𝐬
    07. 30-𝐃𝐚𝐲𝐬-𝐎𝐟-𝐑𝐞𝐚𝐜𝐭
    08. 30-𝐬𝐞𝐜𝐨𝐧𝐝𝐬-𝐨𝐟-𝐫𝐞𝐚𝐜𝐭
    09. 𝐛𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥-𝐫𝐞𝐚𝐜𝐭-𝐡𝐨𝐨𝐤𝐬
    10. 𝐫𝐞𝐚𝐜𝐭-𝐜𝐨𝐝𝐢𝐧𝐠-𝐜𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞𝐬
    11. 𝐫𝐞𝐚𝐜𝐭-𝐡𝐨𝐨𝐤𝐬-𝐜𝐡𝐞𝐚𝐭𝐬𝐡𝐞𝐞𝐭
    12. 𝐫𝐞𝐚𝐜𝐭-𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫-𝐫𝐨𝐚𝐝𝐦𝐚𝐩
    13. 𝐫𝐞𝐚𝐜𝐭𝐣𝐬-𝐢𝐧𝐭𝐞𝐫𝐯𝐢𝐞𝐰-𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬
    14. 𝐚𝐰𝐞𝐬𝐨𝐦𝐞-𝐫𝐞𝐚𝐜𝐭-𝐜𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬
    15. 𝐫𝐞𝐚𝐜𝐭-𝐫𝐞𝐝𝐮𝐱-𝐭𝐲𝐩𝐞𝐬𝐜𝐫𝐢𝐩𝐭-𝐠𝐮𝐢𝐝𝐞
    16. 𝐭𝐲𝐩𝐞𝐬𝐜𝐫𝐢𝐩𝐭-𝐜𝐡𝐞𝐚𝐭𝐬𝐡𝐞𝐞𝐭𝐬/𝐫𝐞𝐚𝐜𝐭

    Don't forget to star them 🧑‍💻

    PS: Do you know more? let's add to the comments ⬇️

    .
    .
    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #react #reactdeveloper #learning #repository #github #facebook #webdevelopment #frontenddevelopment
    `,image:B("476d7edc59.webp"),category:"web",pdfUrl:C3},{id:9,title:"𝗙𝗼𝗿 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀, 𝗯𝗲𝗰𝗼𝗺𝗶𝗻𝗴 𝗮 𝗙𝗿𝗼𝗻𝘁-𝗲𝗻𝗱 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿 𝗰𝗮𝗻 𝘂𝗻𝗹𝗼𝗰𝗸 𝗺𝗮𝗻𝘆 𝗼𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲𝘀. ✨",date:"10 Mar 2024",description:`𝗙𝗼𝗿 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹𝘀, 𝗯𝗲𝗰𝗼𝗺𝗶𝗻𝗴 𝗮 𝗙𝗿𝗼𝗻𝘁-𝗲𝗻𝗱 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿 𝗰𝗮𝗻 𝘂𝗻𝗹𝗼𝗰𝗸 𝗺𝗮𝗻𝘆 𝗼𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲𝘀. ✨

    It pays well too, that's why many people want to switch to frontend development today.

    So take the help of this document and become a front-end expert in just 60 days. Start with the very basics and move to the advanced level.

    Take advantage of additional resources and learn how to build projects for practical experience.

    📃 Save this document and share it with your friends!

    #frontend #collab #linkedincommunity
    `,image:B("ac2ff108f0.webp"),category:"web",pdfUrl:j3},{id:8,title:"🚀 Exciting Journey into TypeScript! 🚀",date:"8 Mar 2024",description:`🚀 Exciting Journey into TypeScript! 🚀

    Hey LinkedIn fam! 👋 I wanted to share my enthusiasm for TypeScript, and if you haven't explored it yet, you're in for a treat! 🌟

    TypeScript has been a game-changer for me, offering a statically typed superset of JavaScript that brings robustness and maintainability to my projects. 💻✨

    Here are a few reasons why I'm loving it:

    1️⃣ Strong Typing: TypeScript's static typing helps catch errors during development, making the code more reliable and preventing bugs from sneaking into production.

    2️⃣ Code Maintainability: With interfaces, generics, and advanced type features, TypeScript enhances code readability and maintainability. It's like having a safety net while working on larger codebases.

    3️⃣ Tooling Support: Integrated well with popular IDEs like Visual Studio Code, TypeScript offers excellent tooling support, making development smoother and more efficient.

    4️⃣ ESNext Features: Stay on the cutting edge of JavaScript with TypeScript's support for the latest ECMAScript features, allowing you to write modern and clean code.

    5️⃣ Community & Ecosystem: The TypeScript community is thriving, and the ecosystem around it is growing rapidly. It's fantastic to be part of such a dynamic and supportive developer community.

    Whether you're a seasoned developer or just starting your coding journey, TypeScript is worth exploring. It has certainly elevated my coding experience, and I can't wait to hear about your TypeScript adventures! 🚀✨

    For more 👇🏻
    .
    .
    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #TypeScript #JavaScript #CodingJourney #DeveloperCommunity #TechEnthusiast
`,image:B("d269f4200b.webp"),category:"web",pdfUrl:E3},{id:7,title:"useForm Hook",date:"7 Mar 2024",description:`Ever wondered how to keep your React forms neat, tidy, and oh-so-manageable? 🤔 Let's talk about the magic of the useForm hook!

    If you've ever built forms in React, you know the drill: managing state, validations, and handling submissions can get messy. But with the useForm hook, you can say goodbye to the boilerplate blues. It's like having a personal assistant for your forms!

    The useForm hook, part of the React Hook Form library, simplifies form handling by reducing the amount of code you need to write. It takes care of the form state, validation, and submission without you manually wiring up event handlers for every field. 🎉

    Here's why you'll love it:
    1. Less Code: Your codebase shrinks and becomes more readable.
    2. Performance Gains: It minimizes re-renders, making your forms snappier.
    3. Built-in Validation: Leverage simple to complex validations with minimal effort.
    4. Easy Integration: Works like a charm with UI libraries and can be easily integrated with other form-related libraries.

    Imagine handling forms with less hassle and more grace. That's what useForm brings to the table. It's a game-changer for developers who want to write less and do more. And the best part? It's incredibly beginner-friendly!

    Ready to elevate your form game? Dive into the useForm hook and watch your React projects transform. And if you've already used it, share your experiences below. What did you build? How did it go?

    Don't forget to hit that like button if you found this useful, and drop a comment if you've got questions or insights to share. Let's keep the conversation going!

    #ReactJS #WebDevelopment
`,image:B("bb81a0de6b.webp"),category:"web",pdfUrl:_3},{id:6,title:"📌PART - 2 Important Javascript build-in methods (cheatsheet) ✔️📑",date:"6 Mar 2024",description:`📌PART - 2
    Important Javascript build-in methods (cheatsheet) ✔️📑
    .
    .
    .

    For more 👇🏻

    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #JavaScript
    #Coding
    #DeveloperResources
`,image:B("2e5cbf8555.webp"),category:"web",pdfUrl:$3},{id:5,title:"🏭Factory Pattern in JavaScript!!",date:"5 Mar 2024",description:`🏭Factory Pattern in JavaScript!!

    The Factory Pattern is used in software development when you want to create objects without specifying the exact class of the object that will be created. It provides an interface for creating objects in a superclass but also allows subclasses to alter the types of objects that will be created.
    .
    .
    .

    For more 👇🏻

    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #JavaScript #Coding #DeveloperResources
`,image:B("1de6212afe.webp"),category:"web",pdfUrl:P3},{id:4,title:"📌PART - 1 Important Javascript build-in methods (cheatsheet) ✔️📑!",date:"4 Mar 2024",description:`📌PART - 1
    Important Javascript build-in methods (cheatsheet) ✔️📑
    .
    .
    .

    For more 👇🏻

    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #JavaScript
    #Coding
    #DeveloperResources
`,image:B("733468d610.webp"),category:"web",pdfUrl:R3},{id:3,title:"Elevate your coding skills with these 21 React project ideas ✔️📑!",date:"3 Mar 2024",description:`Elevate your coding skills with these 21 React project ideas—from dynamic dashboards to interactive games, there's something for every aspiring developer! 💻🚀
    .
    .
    .

    For more 👇🏻

    Coding tips, tricks, and valuable insights, make sure to follow Jimmy Ramani. Stay tuned for regular updates and boost your coding skills! 📚🚀

    #reactjs #reactjsdeveloper #javascript #typescript #programminers #codingchallenge #coding #coder #codinglife #code #programmer #programminglife #programmers #ReactProjects #CodingChallenge
`,image:B("0a906500b8.webp"),category:"web",pdfUrl:T3},{id:2,title:"🌐 Elevate your JavaScript game with a deep dive into Web APIs! 🚀",date:"2 Mar 2024",description:`🌐 Elevate your JavaScript game with a deep dive into Web APIs! 🚀

    From fetching data to manipulating the DOM, this post unravels the power of JavaScript in web development. 💡

    Explore the world of APIs with clear examples and tips to enhance your coding skills.

    Ready to level up? Dive into the world of JavaScript magic! 💻✨

    #JavaScript #WebAPIs #CodingJourney
`,image:B("26075cd04d.webp"),category:"web",pdfUrl:O3},{id:1,title:"🍽️ Add a dash of JavaScript knowledge to your coding feast!",date:"2 Mar 2024",description:`🍽️ Add a dash of JavaScript knowledge to your coding feast!

    Explore this comprehensive cheat sheet to satisfy your coding hunger. From essential concepts to handy syntax tips, this guide has got your JavaScript cravings covered.

    Dive in and elevate your coding experience! 💻🚀

    #JavaScript #Coding #DeveloperResources
`,image:B("f9f6822f5d.webp"),category:"web",pdfUrl:A3}];function J3(e){return op({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function V3(e){return op({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}const Q3=({darkMode:e,toggleDarkMode:t})=>{const[n,r]=pe.useState(!1),[o,i]=pe.useState("about"),a=ho(),s=Bi(),c=vr(),l=pe.useMemo(()=>{const y="/portfolio/";return y.endsWith("/")?y:`${y}/`},[]),u=pe.useMemo(()=>["about","skills","experience","projects","education","blogs"],[]),d=pe.useCallback(y=>`${l}#${y}`,[l]),p=pe.useCallback(y=>{i(y),s({pathname:l,hash:`#${y}`})},[l,s]);pe.useEffect(()=>{const y=()=>{if(window.scrollY<220){i("about");return}const w=window.innerHeight*.38;let g=u[0],m=u[0],x=Number.POSITIVE_INFINITY,k=!1;for(const E of u){const _=document.getElementById(E);if(!_)continue;const R=_.getBoundingClientRect(),$=Math.abs(R.top-w);if($<x&&(x=$,m=E),R.top<=w&&R.bottom>w){k=!0,g=E;break}}if(!k){i("");return}i(g===u[0]?m:g)};return y(),window.addEventListener("scroll",y,{passive:!0}),window.addEventListener("resize",y),()=>{window.removeEventListener("scroll",y),window.removeEventListener("resize",y)}},[u]);const h=()=>{window.scrollTo({top:0,behavior:"smooth"})};return f.jsxs(f.Fragment,{children:[f.jsx(Fb,{children:f.jsxs(Ub,{...c,children:[f.jsxs(Wb,{to:l,onClick:()=>h(),"aria-label":"Portfolio home",style:{display:"flex",alignItems:"center",cursor:"pointer"},children:[f.jsx(t3,{size:"3rem","aria-hidden":"true"})," ",f.jsx(Hb,{children:"Portfolio"})]}),f.jsx(Qb,{children:f.jsx(J3,{onClick:()=>{r(!n)}})}),f.jsxs(Gb,{children:[f.jsx(kr,{href:d("about"),className:o==="about"?"active":"",onClick:()=>{p("about")},children:"About"}),f.jsx(kr,{href:d("skills"),className:o==="skills"?"active":"",onClick:()=>{p("skills")},children:"Skills"}),f.jsx(kr,{href:d("experience"),className:o==="experience"?"active":"",onClick:()=>{p("experience")},children:"Experience"}),f.jsx(kr,{href:d("projects"),className:o==="projects"?"active":"",onClick:()=>{p("projects")},children:"Projects"}),f.jsx(kr,{href:d("education"),className:o==="education"?"active":"",onClick:()=>{p("education")},children:"Education"}),f.jsx(kr,{href:d("blogs"),className:o==="blogs"?"active":"",onClick:()=>{p("blogs")},children:"Blogs"})]}),f.jsxs(Vb,{children:[f.jsxs(Jf,{href:ce.github,target:"_blank",children:[f.jsx(Cs,{style:{marginRight:"10px"}}),"Github"]}),f.jsx(Jb,{onClick:t,children:e?f.jsx(Sy,{}):f.jsx(V3,{})})]}),n&&f.jsxs(Kb,{isOpen:n,children:[f.jsx(Cr,{href:d("about"),className:o==="about"?"active":"",onClick:()=>{p("about"),r(!n)},children:"About"}),f.jsx(Cr,{href:d("skills"),className:o==="skills"?"active":"",onClick:()=>{p("skills"),r(!n)},children:"Skills"}),f.jsx(Cr,{href:d("experience"),className:o==="experience"?"active":"",onClick:()=>{p("experience"),r(!n)},children:"Experience"}),f.jsx(Cr,{href:d("projects"),className:o==="projects"?"active":"",onClick:()=>{p("projects"),r(!n)},children:"Projects"}),f.jsx(Cr,{href:d("education"),className:o==="education"?"active":"",onClick:()=>{p("education"),r(!n)},children:"Education"}),f.jsx(Cr,{href:d("blogs"),className:o==="blogs"?"active":"",onClick:()=>{p("blogs"),r(!n)},children:"Blogs"}),f.jsxs(Jf,{style:{padding:"10px 16px",background:`${a.primary}`,color:"white",width:"max-content"},href:ce.github,target:"_blank",children:[f.jsx(Cs,{style:{marginRight:"10px"}}),"Github"]})]})]})}),f.jsx(Bb,{"aria-hidden":"true"})]})},K3="modulepreload",q3=function(e){return"/portfolio/"+e},Pm={},qi=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=q3(c),c in Pm)return;Pm[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":K3,l||(d.as="script"),d.crossOrigin="",d.href=c,s&&d.setAttribute("nonce",s),document.head.appendChild(d),l)return new Promise((p,h)=>{d.addEventListener("load",p),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})},Y3=j.div`
    width:600px;
    height: 500px;
`,X3=()=>{const e=ho(),{primary:t,accent:n,heroAnimationOpacity:r}=e;return f.jsx(Y3,{children:f.jsxs("svg",{className:"BgAnimation__svg",viewBox:"0 0 602 602",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[f.jsxs("g",{opacity:r??.15,children:[f.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",stroke:"url(#paint0_radial)",id:"path_0"}),f.jsx("path",{d:"M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",stroke:"url(#paint1_radial)",id:"path_1"}),f.jsx("path",{d:"M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",stroke:"url(#paint2_radial)",id:"path_2"})]}),f.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:t,children:f.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_2"})})}),f.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint3_linear)",children:f.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_2"})})}),f.jsx("ellipse",{cx:"295.027",cy:"193.118",transform:"translate(-295.027 -193.118)",rx:"1.07306",ry:"1.07433",fill:"#46737",children:f.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_2"})})}),f.jsx("path",{d:"M294.685 193.474L268.932 219.258",transform:"translate(-294.685 -193.474) rotate(45 294.685 193.474)",stroke:"url(#paint7_linear)",children:f.jsx("animateMotion",{dur:"5s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_2"})})}),f.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:t,children:f.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint4_linear)",children:f.jsx("animateMotion",{dur:"10s",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("ellipse",{cx:"382.164",cy:"155.029",rx:"1.07433",ry:"1.07306",transform:"translate(-382.164 -155.029) rotate(90 382.164 155.029)",fill:n,children:f.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("path",{d:"M381.81 154.669L356.057 128.885",transform:"translate(-381.81 -154.669) rotate(-45 381.81 154.669)",stroke:"url(#paint5_linear)",children:f.jsx("animateMotion",{dur:"10s",begin:"1",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("ellipse",{cx:"333.324",cy:"382.691",rx:"1.07306",ry:"1.07433",transform:"translate(-333.324 -382.691) rotate(-180 333.324 382.691)",fill:n,children:f.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_1"})})}),f.jsx("path",{d:"M333.667 382.335L359.42 356.551",transform:"scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",stroke:"url(#paint6_linear)",children:f.jsx("animateMotion",{dur:"5s",begin:"0",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_1"})})}),f.jsx("ellipse",{cx:"165.524",cy:"93.9596",rx:"1.07306",ry:"1.07433",transform:"translate(-165.524 -93.9596)",fill:n,children:f.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("path",{d:"M165.182 94.3159L139.429 120.1",transform:"translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",stroke:"url(#paint7_linear)",children:f.jsx("animateMotion",{dur:"10s",begin:"3",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("ellipse",{cx:"476.525",cy:"363.313",rx:"1.07433",ry:"1.07306",transform:"translate(-476.525 -363.313) rotate(90 476.525 363.313)",fill:t,children:f.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsx("path",{d:"M476.171 362.952L450.417 337.168",transform:"translate(-476.525 -363.313) rotate(-45 476.171 362.952)",stroke:"url(#paint11_linear)",children:f.jsx("animateMotion",{dur:"12s",begin:"4",repeatCount:"indefinite",rotate:"auto",children:f.jsx("mpath",{xlinkHref:"#path_0"})})}),f.jsxs("defs",{children:[f.jsxs("radialGradient",{id:"paint0_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[f.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),f.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),f.jsxs("radialGradient",{id:"paint1_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[f.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),f.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),f.jsxs("radialGradient",{id:"paint2_radial",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(301 301) rotate(90) scale(300)",children:[f.jsx("stop",{offset:"0.333333",stopColor:"#FBFBFB"}),f.jsx("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint3_linear",x1:"295.043",y1:"193.116",x2:"269.975",y2:"218.154",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint4_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint5_linear",x1:"382.168",y1:"155.027",x2:"357.1",y2:"129.989",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:n}),f.jsx("stop",{offset:"1",stopColor:n,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint6_linear",x1:"333.309",y1:"382.693",x2:"358.376",y2:"357.655",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:n}),f.jsx("stop",{offset:"1",stopColor:n,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint7_linear",x1:"165.54",y1:"93.9578",x2:"140.472",y2:"118.996",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:n}),f.jsx("stop",{offset:"1",stopColor:n,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint8_linear",x1:"414.367",y1:"301.156",x2:"439.435",y2:"276.118",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint9_linear",x1:"515.943",y1:"288.238",x2:"541.339",y2:"291.454",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint10_linear",x1:"117.001",y1:"230.619",x2:"117.36",y2:"258.193",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]}),f.jsxs("linearGradient",{id:"paint11_linear",x1:"476.529",y1:"363.31",x2:"451.461",y2:"338.272",gradientUnits:"userSpaceOnUse",children:[f.jsx("stop",{stopColor:t}),f.jsx("stop",{offset:"1",stopColor:t,stopOpacity:"0"})]})]})]})})},Yi=wn`
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
`,xr=wn`
  background: linear-gradient(
    110deg,
    ${({theme:e})=>e.text_primary} 0%,
    ${({theme:e})=>e.text_primary} 38%,
    ${({theme:e})=>e.primary} 72%,
    ${({theme:e})=>e.accent} 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;wn`
  background: linear-gradient(
    145deg,
    ${({theme:e})=>e.primary} 0%,
    ${({theme:e})=>e.accent} 48%,
    ${({theme:e})=>e.primary} 100%
  );
`;const Z3=j.div`
  background: ${({theme:e})=>e.heroSurface};
  backdrop-filter: blur(22px) saturate(1.2);
  -webkit-backdrop-filter: blur(22px) saturate(1.2);
  border-bottom: 1px solid ${({theme:e})=>e.navBorder};
  display: flex;
  justify-content: center;
  position: relative;
  padding: clamp(56px, 10vw, 96px) clamp(20px, 4vw, 48px);
  min-height: min(88vh, 840px);
  @media (max-width: 960px) {
    min-height: 0;
    padding: 56px 20px 48px;
  }
  @media (max-width: 640px) {
    padding: 40px 16px 36px;
  }
  z-index: 1;
`,e4=j.div`
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
`,t4=j.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  gap: clamp(28px, 5vw, 64px);

  @media (max-width: 960px) {
    flex-direction: column;
  }
`,n4=j.div`
  width: 100%;
  max-width: min(560px, 100%);
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(18px, 2.8vw, 28px);
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 8px;
    align-items: center;
    text-align: center;
    max-width: 640px;
  }
`,r4=j.div`
  position: relative;
  width: 100%;
  padding-left: clamp(20px, 2.8vw, 32px);
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25rem;
    bottom: 0.25rem;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(
      180deg,
      ${({theme:e})=>e.primary} 0%,
      ${({theme:e})=>e.accent} 52%,
      ${({theme:e})=>e.primary} 100%
    );
    box-shadow: 0 0 20px ${({theme:e})=>e.primaryGlowSoft};
  }
  @media (max-width: 960px) {
    padding-left: 0;
    &::before {
      display: none;
    }
  }
`,o4=j.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 960px) {
    align-items: center;
  }
`,i4=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: clamp(0.8125rem, 1.5vw, 0.9375rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex-shrink: 0;
    background: ${({theme:e})=>e.primary};
    box-shadow:
      0 0 0 3px ${({theme:e})=>e.primaryGlowSoft},
      0 0 18px ${({theme:e})=>e.primaryGlow};
  }
`,a4=j.h1`
  margin: 0;
  font-weight: 800;
  font-size: clamp(2.25rem, 5.5vw, 3.65rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  ${xr}
  filter: drop-shadow(0 2px 24px ${({theme:e})=>e.primaryGlowSubtle});
`,s4=j.div`
  width: 100%;
  display: flex;
  order: 2;
  // justify-content: flex-end;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    order: 1;
    // justify-content: center;
    margin-bottom: 12px;
  }
`,l4=j.div`
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 402px;
  aspect-ratio: 1;
  max-width: 100%;
  padding: 5px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 370px;
  }
  @media (max-width: 640px) {
    width: 270px;
  }
  background: linear-gradient(
    145deg,
    ${({theme:e})=>e.primary} 0%,
    ${({theme:e})=>e.accent} 48%,
    ${({theme:e})=>e.primary} 100%
  );
  box-shadow:
    0 0 0 1px ${({theme:e})=>e.navBorder},
    0 22px 56px ${({theme:e})=>e.primaryGlow},
    0 0 72px ${({theme:e})=>e.primaryGlowSubtle};
`,c4=j.img`
  display: block;
  // object-fit: cover;
  object-fit: contain;
  width: 100%;
  height: 100%;
  max-width: 392px;
  max-height: 392px;
  aspect-ratio: 1;
  border-radius: 50%;

  @media (max-width: 768px) {
    max-width: 360px;
    max-height: 360px;
  }

  @media (max-width: 640px) {
    max-width: 260px;
    max-height: 260px;
  }
`,u4=j.div`
  font-weight: 600;
  font-size: clamp(1.05rem, 2.2vw, 1.75rem);
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  min-height: 3rem;
  padding: 12px 18px 12px 0;
  border-radius: 16px;
  line-height: 1.35;
  color: ${({theme:e})=>e.text_primary};
  backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  -webkit-backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  @media (max-width: 960px) {
    justify-content: center;
    padding-left: 18px;
    padding-right: 18px;
  }
`,d4=j.span`
  font-weight: 500;
  letter-spacing: 0.02em;
  color: ${({theme:e})=>e.text_secondary};
`,p4=j.span`
  font-weight: 700;
  letter-spacing: -0.01em;
  color: ${({theme:e})=>e.primary};
  text-shadow: 0 0 28px ${({theme:e})=>e.primaryGlowSoft};
`,f4=j.div`
  width: 100%;
  max-width: min(54ch, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(12px, 2vw, 16px);
  padding: clamp(14px, 2vw, 18px) 0;
  @media (max-width: 960px) {
    max-width: min(62ch, 100%);
    align-items: center;
  }
`,m4=j.p`
  margin: 0;
  font-size: clamp(1rem, 1.42vw, 1.125rem);
  line-height: 1.55;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: left;
  color: ${({theme:e})=>e.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
`,h4=j.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media (max-width: 960px) {
    gap: 8px;
  }
`,g4=j.li`
  position: relative;
  margin: 0;
  padding-left: 1.15rem;
  font-size: clamp(0.9rem, 1.18vw, 1.02rem);
  line-height: 1.62;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: left;
  color: ${({theme:e})=>e.text_secondary};
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.58em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({theme:e})=>e.primary};
    box-shadow: 0 0 14px ${({theme:e})=>e.primaryGlow};
  }
  @media (max-width: 960px) {
    text-align: left;
    width: 100%;
    max-width: none;
    font-size: 0.99rem;
    line-height: 1.58;
  }
  @media (max-width: 640px) {
    padding-left: 1rem;
    font-size: 0.96rem;
    line-height: 1.54;
  }
`,y4=j.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 200px;
  padding: 16px 32px;
  color: ${({theme:e})=>e.onPrimary};
  border: 1px solid ${({theme:e})=>e.primaryFill};
  border-radius: 14px;
  cursor: pointer;
  font-size: clamp(1rem, 1.2vw, 1.125rem);
  font-weight: 600;
  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    filter 0.2s ease;
  background: ${({theme:e})=>e.primaryFill};
  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 40px ${({theme:e})=>e.primaryGlow},
      0 0 0 1px rgba(255, 255, 255, 0.06);
    filter: brightness(1.06);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: 320px;
  }

  @media (max-width: 640px) {
    padding: 14px 28px;
  }
`;var _y={exports:{}};(function(e,t){(function(n,r){e.exports=r(b)})(typeof self<"u"?self:ev,n=>(()=>{var r={2:(s,c,l)=>{var u=l(2199),d=l(4664),p=l(5950);s.exports=function(h){return u(h,p,d)}},79:(s,c,l)=>{var u=l(3702),d=l(80),p=l(4739),h=l(8655),y=l(1175);function v(w){var g=-1,m=w==null?0:w.length;for(this.clear();++g<m;){var x=w[g];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=p,v.prototype.has=h,v.prototype.set=y,s.exports=v},80:(s,c,l)=>{var u=l(6025),d=Array.prototype.splice;s.exports=function(p){var h=this.__data__,y=u(h,p);return!(y<0||(y==h.length-1?h.pop():d.call(h,y,1),--this.size,0))}},270:(s,c,l)=>{var u=l(7068),d=l(346);s.exports=function p(h,y,v,w,g){return h===y||(h==null||y==null||!d(h)&&!d(y)?h!=h&&y!=y:u(h,y,v,w,p,g))}},289:(s,c,l)=>{var u=l(2651);s.exports=function(d){return u(this,d).get(d)}},294:s=>{s.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},317:s=>{s.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d,p){u[++l]=[p,d]}),u}},346:s=>{s.exports=function(c){return c!=null&&typeof c=="object"}},361:s=>{var c=/^(?:0|[1-9]\d*)$/;s.exports=function(l,u){var d=typeof l;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},392:s=>{s.exports=function(c,l){return c==null?void 0:c[l]}},659:(s,c,l)=>{var u=l(1873),d=Object.prototype,p=d.hasOwnProperty,h=d.toString,y=u?u.toStringTag:void 0;s.exports=function(v){var w=p.call(v,y),g=v[y];try{v[y]=void 0;var m=!0}catch{}var x=h.call(v);return m&&(w?v[y]=g:delete v[y]),x}},689:(s,c,l)=>{var u=l(2),d=Object.prototype.hasOwnProperty;s.exports=function(p,h,y,v,w,g){var m=1&y,x=u(p),k=x.length;if(k!=u(h).length&&!m)return!1;for(var E=k;E--;){var _=x[E];if(!(m?_ in h:d.call(h,_)))return!1}var R=g.get(p),$=g.get(h);if(R&&$)return R==h&&$==p;var L=!0;g.set(p,h),g.set(h,p);for(var O=m;++E<k;){var z=p[_=x[E]],U=h[_];if(v)var Q=m?v(U,z,_,h,p,g):v(z,U,_,p,h,g);if(!(Q===void 0?z===U||w(z,U,y,v,g):Q)){L=!1;break}O||(O=_=="constructor")}if(L&&!O){var q=p.constructor,W=h.constructor;q==W||!("constructor"in p)||!("constructor"in h)||typeof q=="function"&&q instanceof q&&typeof W=="function"&&W instanceof W||(L=!1)}return g.delete(p),g.delete(h),L}},695:(s,c,l)=>{var u=l(8096),d=l(2428),p=l(6449),h=l(3656),y=l(361),v=l(7167),w=Object.prototype.hasOwnProperty;s.exports=function(g,m){var x=p(g),k=!x&&d(g),E=!x&&!k&&h(g),_=!x&&!k&&!E&&v(g),R=x||k||E||_,$=R?u(g.length,String):[],L=$.length;for(var O in g)!m&&!w.call(g,O)||R&&(O=="length"||E&&(O=="offset"||O=="parent")||_&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||y(O,L))||$.push(O);return $}},938:s=>{s.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},945:(s,c,l)=>{var u=l(79),d=l(8223),p=l(3661);s.exports=function(h,y){var v=this.__data__;if(v instanceof u){var w=v.__data__;if(!d||w.length<199)return w.push([h,y]),this.size=++v.size,this;v=this.__data__=new p(w)}return v.set(h,y),this.size=v.size,this}},1042:(s,c,l)=>{var u=l(6110)(Object,"create");s.exports=u},1175:(s,c,l)=>{var u=l(6025);s.exports=function(d,p){var h=this.__data__,y=u(h,d);return y<0?(++this.size,h.push([d,p])):h[y][1]=p,this}},1380:s=>{s.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},1420:(s,c,l)=>{var u=l(79);s.exports=function(){this.__data__=new u,this.size=0}},1459:s=>{s.exports=function(c){return this.__data__.has(c)}},1549:(s,c,l)=>{var u=l(2032),d=l(3862),p=l(6721),h=l(2749),y=l(5749);function v(w){var g=-1,m=w==null?0:w.length;for(this.clear();++g<m;){var x=w[g];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=p,v.prototype.has=h,v.prototype.set=y,s.exports=v},1873:(s,c,l)=>{var u=l(9325).Symbol;s.exports=u},1882:(s,c,l)=>{var u=l(2552),d=l(3805);s.exports=function(p){if(!d(p))return!1;var h=u(p);return h=="[object Function]"||h=="[object GeneratorFunction]"||h=="[object AsyncFunction]"||h=="[object Proxy]"}},1986:(s,c,l)=>{var u=l(1873),d=l(7828),p=l(5288),h=l(5911),y=l(317),v=l(4247),w=u?u.prototype:void 0,g=w?w.valueOf:void 0;s.exports=function(m,x,k,E,_,R,$){switch(k){case"[object DataView]":if(m.byteLength!=x.byteLength||m.byteOffset!=x.byteOffset)return!1;m=m.buffer,x=x.buffer;case"[object ArrayBuffer]":return!(m.byteLength!=x.byteLength||!R(new d(m),new d(x)));case"[object Boolean]":case"[object Date]":case"[object Number]":return p(+m,+x);case"[object Error]":return m.name==x.name&&m.message==x.message;case"[object RegExp]":case"[object String]":return m==x+"";case"[object Map]":var L=y;case"[object Set]":var O=1&E;if(L||(L=v),m.size!=x.size&&!O)return!1;var z=$.get(m);if(z)return z==x;E|=2,$.set(m,x);var U=h(L(m),L(x),E,_,R,$);return $.delete(m),U;case"[object Symbol]":if(g)return g.call(m)==g.call(x)}return!1}},2032:(s,c,l)=>{var u=l(1042);s.exports=function(){this.__data__=u?u(null):{},this.size=0}},2199:(s,c,l)=>{var u=l(4528),d=l(6449);s.exports=function(p,h,y){var v=h(p);return d(p)?v:u(v,y(p))}},2404:(s,c,l)=>{var u=l(270);s.exports=function(d,p){return u(d,p)}},2428:(s,c,l)=>{var u=l(7534),d=l(346),p=Object.prototype,h=p.hasOwnProperty,y=p.propertyIsEnumerable,v=u(function(){return arguments}())?u:function(w){return d(w)&&h.call(w,"callee")&&!y.call(w,"callee")};s.exports=v},2552:(s,c,l)=>{var u=l(1873),d=l(659),p=l(9350),h=u?u.toStringTag:void 0;s.exports=function(y){return y==null?y===void 0?"[object Undefined]":"[object Null]":h&&h in Object(y)?d(y):p(y)}},2651:(s,c,l)=>{var u=l(4218);s.exports=function(d,p){var h=d.__data__;return u(p)?h[typeof p=="string"?"string":"hash"]:h.map}},2749:(s,c,l)=>{var u=l(1042),d=Object.prototype.hasOwnProperty;s.exports=function(p){var h=this.__data__;return u?h[p]!==void 0:d.call(h,p)}},2804:(s,c,l)=>{var u=l(6110)(l(9325),"Promise");s.exports=u},2949:(s,c,l)=>{var u=l(2651);s.exports=function(d,p){var h=u(this,d),y=h.size;return h.set(d,p),this.size+=h.size==y?0:1,this}},3040:(s,c,l)=>{var u=l(1549),d=l(79),p=l(8223);s.exports=function(){this.size=0,this.__data__={hash:new u,map:new(p||d),string:new u}}},3146:(s,c,l)=>{for(var u=l(3491),d=typeof window>"u"?l.g:window,p=["moz","webkit"],h="AnimationFrame",y=d["request"+h],v=d["cancel"+h]||d["cancelRequest"+h],w=0;!y&&w<p.length;w++)y=d[p[w]+"Request"+h],v=d[p[w]+"Cancel"+h]||d[p[w]+"CancelRequest"+h];if(!y||!v){var g=0,m=0,x=[],k=1e3/60;y=function(E){if(x.length===0){var _=u(),R=Math.max(0,k-(_-g));g=R+_,setTimeout(function(){var $=x.slice(0);x.length=0;for(var L=0;L<$.length;L++)if(!$[L].cancelled)try{$[L].callback(g)}catch(O){setTimeout(function(){throw O},0)}},Math.round(R))}return x.push({handle:++m,callback:E,cancelled:!1}),m},v=function(E){for(var _=0;_<x.length;_++)x[_].handle===E&&(x[_].cancelled=!0)}}s.exports=function(E){return y.call(d,E)},s.exports.cancel=function(){v.apply(d,arguments)},s.exports.polyfill=function(E){E||(E=d),E.requestAnimationFrame=y,E.cancelAnimationFrame=v}},3345:s=>{s.exports=function(){return[]}},3491:function(s){(function(){var c,l,u,d,p,h;typeof performance<"u"&&performance!==null&&performance.now?s.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(s.exports=function(){return(c()-p)/1e6},l=process.hrtime,d=(c=function(){var y;return 1e9*(y=l())[0]+y[1]})(),h=1e9*process.uptime(),p=d-h):Date.now?(s.exports=function(){return Date.now()-u},u=Date.now()):(s.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},3605:s=>{s.exports=function(c){return this.__data__.get(c)}},3650:(s,c,l)=>{var u=l(4335)(Object.keys,Object);s.exports=u},3656:(s,c,l)=>{s=l.nmd(s);var u=l(9325),d=l(9935),p=c&&!c.nodeType&&c,h=p&&s&&!s.nodeType&&s,y=h&&h.exports===p?u.Buffer:void 0,v=(y?y.isBuffer:void 0)||d;s.exports=v},3661:(s,c,l)=>{var u=l(3040),d=l(7670),p=l(289),h=l(4509),y=l(2949);function v(w){var g=-1,m=w==null?0:w.length;for(this.clear();++g<m;){var x=w[g];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=p,v.prototype.has=h,v.prototype.set=y,s.exports=v},3702:s=>{s.exports=function(){this.__data__=[],this.size=0}},3805:s=>{s.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},3862:s=>{s.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},4218:s=>{s.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},4247:s=>{s.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d){u[++l]=d}),u}},4248:s=>{s.exports=function(c,l){for(var u=-1,d=c==null?0:c.length;++u<d;)if(l(c[u],u,c))return!0;return!1}},4335:s=>{s.exports=function(c,l){return function(u){return c(l(u))}}},4509:(s,c,l)=>{var u=l(2651);s.exports=function(d){return u(this,d).has(d)}},4528:s=>{s.exports=function(c,l){for(var u=-1,d=l.length,p=c.length;++u<d;)c[p+u]=l[u];return c}},4664:(s,c,l)=>{var u=l(9770),d=l(3345),p=Object.prototype.propertyIsEnumerable,h=Object.getOwnPropertySymbols,y=h?function(v){return v==null?[]:(v=Object(v),u(h(v),function(w){return p.call(v,w)}))}:d;s.exports=y},4739:(s,c,l)=>{var u=l(6025);s.exports=function(d){var p=this.__data__,h=u(p,d);return h<0?void 0:p[h][1]}},4840:(s,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;s.exports=u},4894:(s,c,l)=>{var u=l(1882),d=l(294);s.exports=function(p){return p!=null&&d(p.length)&&!u(p)}},4901:(s,c,l)=>{var u=l(2552),d=l(294),p=l(346),h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1,s.exports=function(y){return p(y)&&d(y.length)&&!!h[u(y)]}},5083:(s,c,l)=>{var u=l(1882),d=l(7296),p=l(3805),h=l(7473),y=/^\[object .+?Constructor\]$/,v=Function.prototype,w=Object.prototype,g=v.toString,m=w.hasOwnProperty,x=RegExp("^"+g.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");s.exports=function(k){return!(!p(k)||d(k))&&(u(k)?x:y).test(h(k))}},5288:s=>{s.exports=function(c,l){return c===l||c!=c&&l!=l}},5481:(s,c,l)=>{var u=l(9325)["__core-js_shared__"];s.exports=u},5527:s=>{var c=Object.prototype;s.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},5580:(s,c,l)=>{var u=l(6110)(l(9325),"DataView");s.exports=u},5749:(s,c,l)=>{var u=l(1042);s.exports=function(d,p){var h=this.__data__;return this.size+=this.has(d)?0:1,h[d]=u&&p===void 0?"__lodash_hash_undefined__":p,this}},5861:(s,c,l)=>{var u=l(5580),d=l(8223),p=l(2804),h=l(6545),y=l(8303),v=l(2552),w=l(7473),g="[object Map]",m="[object Promise]",x="[object Set]",k="[object WeakMap]",E="[object DataView]",_=w(u),R=w(d),$=w(p),L=w(h),O=w(y),z=v;(u&&z(new u(new ArrayBuffer(1)))!=E||d&&z(new d)!=g||p&&z(p.resolve())!=m||h&&z(new h)!=x||y&&z(new y)!=k)&&(z=function(U){var Q=v(U),q=Q=="[object Object]"?U.constructor:void 0,W=q?w(q):"";if(W)switch(W){case _:return E;case R:return g;case $:return m;case L:return x;case O:return k}return Q}),s.exports=z},5911:(s,c,l)=>{var u=l(8859),d=l(4248),p=l(9219);s.exports=function(h,y,v,w,g,m){var x=1&v,k=h.length,E=y.length;if(k!=E&&!(x&&E>k))return!1;var _=m.get(h),R=m.get(y);if(_&&R)return _==y&&R==h;var $=-1,L=!0,O=2&v?new u:void 0;for(m.set(h,y),m.set(y,h);++$<k;){var z=h[$],U=y[$];if(w)var Q=x?w(U,z,$,y,h,m):w(z,U,$,h,y,m);if(Q!==void 0){if(Q)continue;L=!1;break}if(O){if(!d(y,function(q,W){if(!p(O,W)&&(z===q||g(z,q,v,w,m)))return O.push(W)})){L=!1;break}}else if(z!==U&&!g(z,U,v,w,m)){L=!1;break}}return m.delete(h),m.delete(y),L}},5950:(s,c,l)=>{var u=l(695),d=l(8984),p=l(4894);s.exports=function(h){return p(h)?u(h):d(h)}},6009:(s,c,l)=>{s=l.nmd(s);var u=l(4840),d=c&&!c.nodeType&&c,p=d&&s&&!s.nodeType&&s,h=p&&p.exports===d&&u.process,y=function(){try{return p&&p.require&&p.require("util").types||h&&h.binding&&h.binding("util")}catch{}}();s.exports=y},6025:(s,c,l)=>{var u=l(5288);s.exports=function(d,p){for(var h=d.length;h--;)if(u(d[h][0],p))return h;return-1}},6110:(s,c,l)=>{var u=l(5083),d=l(392);s.exports=function(p,h){var y=d(p,h);return u(y)?y:void 0}},6449:s=>{var c=Array.isArray;s.exports=c},6545:(s,c,l)=>{var u=l(6110)(l(9325),"Set");s.exports=u},6721:(s,c,l)=>{var u=l(1042),d=Object.prototype.hasOwnProperty;s.exports=function(p){var h=this.__data__;if(u){var y=h[p];return y==="__lodash_hash_undefined__"?void 0:y}return d.call(h,p)?h[p]:void 0}},7068:(s,c,l)=>{var u=l(7217),d=l(5911),p=l(1986),h=l(689),y=l(5861),v=l(6449),w=l(3656),g=l(7167),m="[object Arguments]",x="[object Array]",k="[object Object]",E=Object.prototype.hasOwnProperty;s.exports=function(_,R,$,L,O,z){var U=v(_),Q=v(R),q=U?x:y(_),W=Q?x:y(R),G=(q=q==m?k:q)==k,re=(W=W==m?k:W)==k,N=q==W;if(N&&w(_)){if(!w(R))return!1;U=!0,G=!1}if(N&&!G)return z||(z=new u),U||g(_)?d(_,R,$,L,O,z):p(_,R,q,$,L,O,z);if(!(1&$)){var A=G&&E.call(_,"__wrapped__"),T=re&&E.call(R,"__wrapped__");if(A||T){var J=A?_.value():_,P=T?R.value():R;return z||(z=new u),O(J,P,$,L,z)}}return!!N&&(z||(z=new u),h(_,R,$,L,O,z))}},7167:(s,c,l)=>{var u=l(4901),d=l(7301),p=l(6009),h=p&&p.isTypedArray,y=h?d(h):u;s.exports=y},7217:(s,c,l)=>{var u=l(79),d=l(1420),p=l(938),h=l(3605),y=l(9817),v=l(945);function w(g){var m=this.__data__=new u(g);this.size=m.size}w.prototype.clear=d,w.prototype.delete=p,w.prototype.get=h,w.prototype.has=y,w.prototype.set=v,s.exports=w},7296:(s,c,l)=>{var u,d=l(5481),p=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";s.exports=function(h){return!!p&&p in h}},7301:s=>{s.exports=function(c){return function(l){return c(l)}}},7473:s=>{var c=Function.prototype.toString;s.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7534:(s,c,l)=>{var u=l(2552),d=l(346);s.exports=function(p){return d(p)&&u(p)=="[object Arguments]"}},7670:(s,c,l)=>{var u=l(2651);s.exports=function(d){var p=u(this,d).delete(d);return this.size-=p?1:0,p}},7828:(s,c,l)=>{var u=l(9325).Uint8Array;s.exports=u},8096:s=>{s.exports=function(c,l){for(var u=-1,d=Array(c);++u<c;)d[u]=l(u);return d}},8223:(s,c,l)=>{var u=l(6110)(l(9325),"Map");s.exports=u},8303:(s,c,l)=>{var u=l(6110)(l(9325),"WeakMap");s.exports=u},8655:(s,c,l)=>{var u=l(6025);s.exports=function(d){return u(this.__data__,d)>-1}},8859:(s,c,l)=>{var u=l(3661),d=l(1380),p=l(1459);function h(y){var v=-1,w=y==null?0:y.length;for(this.__data__=new u;++v<w;)this.add(y[v])}h.prototype.add=h.prototype.push=d,h.prototype.has=p,s.exports=h},8984:(s,c,l)=>{var u=l(5527),d=l(3650),p=Object.prototype.hasOwnProperty;s.exports=function(h){if(!u(h))return d(h);var y=[];for(var v in Object(h))p.call(h,v)&&v!="constructor"&&y.push(v);return y}},9155:s=>{s.exports=n},9219:s=>{s.exports=function(c,l){return c.has(l)}},9325:(s,c,l)=>{var u=l(4840),d=typeof self=="object"&&self&&self.Object===Object&&self,p=u||d||Function("return this")();s.exports=p},9350:s=>{var c=Object.prototype.toString;s.exports=function(l){return c.call(l)}},9770:s=>{s.exports=function(c,l){for(var u=-1,d=c==null?0:c.length,p=0,h=[];++u<d;){var y=c[u];l(y,u,c)&&(h[p++]=y)}return h}},9817:s=>{s.exports=function(c){return this.__data__.has(c)}},9905:(s,c,l)=>{l.d(c,{default:()=>N});var u=l(3146),d=l.n(u);const p=function(A){return new RegExp(/<[a-z][\s\S]*>/i).test(A)},h=function(A,T){return Math.floor(Math.random()*(T-A+1))+A};var y="TYPE_CHARACTER",v="REMOVE_CHARACTER",w="REMOVE_ALL",g="REMOVE_LAST_VISIBLE_NODE",m="PAUSE_FOR",x="CALL_FUNCTION",k="ADD_HTML_TAG_ELEMENT",E="CHANGE_DELETE_SPEED",_="CHANGE_DELAY",R="CHANGE_CURSOR",$="PASTE_STRING",L="HTML_TAG";function O(A){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},O(A)}function z(A,T){var J=Object.keys(A);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(A);T&&(P=P.filter(function(F){return Object.getOwnPropertyDescriptor(A,F).enumerable})),J.push.apply(J,P)}return J}function U(A){for(var T=1;T<arguments.length;T++){var J=arguments[T]!=null?arguments[T]:{};T%2?z(Object(J),!0).forEach(function(P){G(A,P,J[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(J)):z(Object(J)).forEach(function(P){Object.defineProperty(A,P,Object.getOwnPropertyDescriptor(J,P))})}return A}function Q(A){return function(T){if(Array.isArray(T))return q(T)}(A)||function(T){if(typeof Symbol<"u"&&T[Symbol.iterator]!=null||T["@@iterator"]!=null)return Array.from(T)}(A)||function(T,J){if(T){if(typeof T=="string")return q(T,J);var P={}.toString.call(T).slice(8,-1);return P==="Object"&&T.constructor&&(P=T.constructor.name),P==="Map"||P==="Set"?Array.from(T):P==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)?q(T,J):void 0}}(A)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function q(A,T){(T==null||T>A.length)&&(T=A.length);for(var J=0,P=Array(T);J<T;J++)P[J]=A[J];return P}function W(A,T){for(var J=0;J<T.length;J++){var P=T[J];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(A,re(P.key),P)}}function G(A,T,J){return(T=re(T))in A?Object.defineProperty(A,T,{value:J,enumerable:!0,configurable:!0,writable:!0}):A[T]=J,A}function re(A){var T=function(J){if(O(J)!="object"||!J)return J;var P=J[Symbol.toPrimitive];if(P!==void 0){var F=P.call(J,"string");if(O(F)!="object")return F;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(J)}(A);return O(T)=="symbol"?T:T+""}const N=function(){function A(P,F){var C=this;if(function(S,V){if(!(S instanceof V))throw new TypeError("Cannot call a class as a function")}(this,A),G(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),G(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),G(this,"setupWrapperElement",function(){C.state.elements.container&&(C.state.elements.wrapper.className=C.options.wrapperClassName,C.state.elements.cursor.className=C.options.cursorClassName,C.state.elements.cursor.innerHTML=C.options.cursor,C.state.elements.container.innerHTML="",C.state.elements.container.appendChild(C.state.elements.wrapper),C.state.elements.container.appendChild(C.state.elements.cursor))}),G(this,"start",function(){return C.state.eventLoopPaused=!1,C.runEventLoop(),C}),G(this,"pause",function(){return C.state.eventLoopPaused=!0,C}),G(this,"stop",function(){return C.state.eventLoop&&((0,u.cancel)(C.state.eventLoop),C.state.eventLoop=null),C}),G(this,"pauseFor",function(S){return C.addEventToQueue(m,{ms:S}),C}),G(this,"typeOutAllStrings",function(){return typeof C.options.strings=="string"?(C.typeString(C.options.strings).pauseFor(C.options.pauseFor),C):(C.options.strings.forEach(function(S){C.typeString(S).pauseFor(C.options.pauseFor).deleteAll(C.options.deleteSpeed)}),C)}),G(this,"typeString",function(S){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(p(S))return C.typeOutHTMLString(S,V);if(S){var I=(C.options||{}).stringSplitter,te=typeof I=="function"?I(S):S.split("");C.typeCharacters(te,V)}return C}),G(this,"pasteString",function(S){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return p(S)?C.typeOutHTMLString(S,V,!0):(S&&C.addEventToQueue($,{character:S,node:V}),C)}),G(this,"typeOutHTMLString",function(S){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,I=arguments.length>2?arguments[2]:void 0,te=function(Se){var Ie=document.createElement("div");return Ie.innerHTML=Se,Ie.childNodes}(S);if(te.length>0)for(var K=0;K<te.length;K++){var ee=te[K],X=ee.innerHTML;ee&&ee.nodeType!==3?(ee.innerHTML="",C.addEventToQueue(k,{node:ee,parentNode:V}),I?C.pasteString(X,ee):C.typeString(X,ee)):ee.textContent&&(I?C.pasteString(ee.textContent,V):C.typeString(ee.textContent,V))}return C}),G(this,"deleteAll",function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return C.addEventToQueue(w,{speed:S}),C}),G(this,"changeDeleteSpeed",function(S){if(!S)throw new Error("Must provide new delete speed");return C.addEventToQueue(E,{speed:S}),C}),G(this,"changeDelay",function(S){if(!S)throw new Error("Must provide new delay");return C.addEventToQueue(_,{delay:S}),C}),G(this,"changeCursor",function(S){if(!S)throw new Error("Must provide new cursor");return C.addEventToQueue(R,{cursor:S}),C}),G(this,"deleteChars",function(S){if(!S)throw new Error("Must provide amount of characters to delete");for(var V=0;V<S;V++)C.addEventToQueue(v);return C}),G(this,"callFunction",function(S,V){if(!S||typeof S!="function")throw new Error("Callback must be a function");return C.addEventToQueue(x,{cb:S,thisArg:V}),C}),G(this,"typeCharacters",function(S){var V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(I){C.addEventToQueue(y,{character:I,node:V})}),C}),G(this,"removeCharacters",function(S){if(!S||!Array.isArray(S))throw new Error("Characters must be an array");return S.forEach(function(){C.addEventToQueue(v)}),C}),G(this,"addEventToQueue",function(S,V){var I=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.addEventToStateProperty(S,V,I,"eventQueue")}),G(this,"addReverseCalledEvent",function(S,V){var I=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return C.options.loop?C.addEventToStateProperty(S,V,I,"reverseCalledEvents"):C}),G(this,"addEventToStateProperty",function(S,V){var I=arguments.length>2&&arguments[2]!==void 0&&arguments[2],te=arguments.length>3?arguments[3]:void 0,K={eventName:S,eventArgs:V||{}};return C.state[te]=I?[K].concat(Q(C.state[te])):[].concat(Q(C.state[te]),[K]),C}),G(this,"runEventLoop",function(){C.state.lastFrameTime||(C.state.lastFrameTime=Date.now());var S=Date.now(),V=S-C.state.lastFrameTime;if(!C.state.eventQueue.length){if(!C.options.loop)return;C.state.eventQueue=Q(C.state.calledEvents),C.state.calledEvents=[],C.options=U({},C.state.initialOptions)}if(C.state.eventLoop=d()(C.runEventLoop),!C.state.eventLoopPaused){if(C.state.pauseUntil){if(S<C.state.pauseUntil)return;C.state.pauseUntil=null}var I,te=Q(C.state.eventQueue),K=te.shift();if(!(V<=(I=K.eventName===g||K.eventName===v?C.options.deleteSpeed==="natural"?h(40,80):C.options.deleteSpeed:C.options.delay==="natural"?h(120,160):C.options.delay))){var ee=K.eventName,X=K.eventArgs;switch(C.logInDevMode({currentEvent:K,state:C.state,delay:I}),ee){case $:case y:var Se=X.character,Ie=X.node,oe=document.createTextNode(Se),_e=oe;C.options.onCreateTextNode&&typeof C.options.onCreateTextNode=="function"&&(_e=C.options.onCreateTextNode(Se,oe)),_e&&(Ie?Ie.appendChild(_e):C.state.elements.wrapper.appendChild(_e)),C.state.visibleNodes=[].concat(Q(C.state.visibleNodes),[{type:"TEXT_NODE",character:Se,node:_e}]);break;case v:te.unshift({eventName:g,eventArgs:{removingCharacterNode:!0}});break;case m:var ae=K.eventArgs.ms;C.state.pauseUntil=Date.now()+parseInt(ae);break;case x:var Me=K.eventArgs,Yn=Me.cb,De=Me.thisArg;Yn.call(De,{elements:C.state.elements});break;case k:var Xn=K.eventArgs,an=Xn.node,rt=Xn.parentNode;rt?rt.appendChild(an):C.state.elements.wrapper.appendChild(an),C.state.visibleNodes=[].concat(Q(C.state.visibleNodes),[{type:L,node:an,parentNode:rt||C.state.elements.wrapper}]);break;case w:var Z=C.state.visibleNodes,ge=X.speed,Sn=[];ge&&Sn.push({eventName:E,eventArgs:{speed:ge,temp:!0}});for(var br=0,Kt=Z.length;br<Kt;br++)Sn.push({eventName:g,eventArgs:{removingCharacterNode:!1}});ge&&Sn.push({eventName:E,eventArgs:{speed:C.options.deleteSpeed,temp:!0}}),te.unshift.apply(te,Sn);break;case g:var qy=K.eventArgs.removingCharacterNode;if(C.state.visibleNodes.length){var Pl=C.state.visibleNodes.pop(),Yy=Pl.type,Zi=Pl.node,Xy=Pl.character;C.options.onRemoveNode&&typeof C.options.onRemoveNode=="function"&&C.options.onRemoveNode({node:Zi,character:Xy}),Zi&&Zi.parentNode.removeChild(Zi),Yy===L&&qy&&te.unshift({eventName:g,eventArgs:{}})}break;case E:C.options.deleteSpeed=K.eventArgs.speed;break;case _:C.options.delay=K.eventArgs.delay;break;case R:C.options.cursor=K.eventArgs.cursor,C.state.elements.cursor.innerHTML=K.eventArgs.cursor}C.options.loop&&(K.eventName===g||K.eventArgs&&K.eventArgs.temp||(C.state.calledEvents=[].concat(Q(C.state.calledEvents),[K]))),C.state.eventQueue=te,C.state.lastFrameTime=S}}}),P)if(typeof P=="string"){var Y=document.querySelector(P);if(!Y)throw new Error("Could not find container element");this.state.elements.container=Y}else this.state.elements.container=P;F&&(this.options=U(U({},this.options),F)),this.state.initialOptions=U({},this.options),this.init()}var T,J;return T=A,(J=[{key:"init",value:function(){var P,F;this.setupWrapperElement(),this.addEventToQueue(R,{cursor:this.options.cursor},!0),this.addEventToQueue(w,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(P=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(F=document.createElement("style")).appendChild(document.createTextNode(P)),document.head.appendChild(F),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(P){this.options.devMode&&console.log(P)}}])&&W(T.prototype,J),Object.defineProperty(T,"prototype",{writable:!1}),A}()},9935:s=>{s.exports=function(){return!1}}},o={};function i(s){var c=o[s];if(c!==void 0)return c.exports;var l=o[s]={id:s,loaded:!1,exports:{}};return r[s].call(l.exports,l,l.exports,i),l.loaded=!0,l.exports}i.n=s=>{var c=s&&s.__esModule?()=>s.default:()=>s;return i.d(c,{a:c}),c},i.d=(s,c)=>{for(var l in c)i.o(c,l)&&!i.o(s,l)&&Object.defineProperty(s,l,{enumerable:!0,get:c[l]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,c)=>Object.prototype.hasOwnProperty.call(s,c),i.nmd=s=>(s.paths=[],s.children||(s.children=[]),s);var a={};return(()=>{i.d(a,{default:()=>k});var s=i(9155),c=i.n(s),l=i(9905),u=i(2404),d=i.n(u);function p(E){return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},p(E)}function h(E,_){for(var R=0;R<_.length;R++){var $=_[R];$.enumerable=$.enumerable||!1,$.configurable=!0,"value"in $&&($.writable=!0),Object.defineProperty(E,m($.key),$)}}function y(E,_){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(R,$){return R.__proto__=$,R},y(E,_)}function v(E){if(E===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E}function w(){try{var E=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(w=function(){return!!E})()}function g(E){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},g(E)}function m(E){var _=function(R){if(p(R)!="object"||!R)return R;var $=R[Symbol.toPrimitive];if($!==void 0){var L=$.call(R,"string");if(p(L)!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(R)}(E);return p(_)=="symbol"?_:_+""}var x=function(E){(function(O,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");O.prototype=Object.create(z&&z.prototype,{constructor:{value:O,writable:!0,configurable:!0}}),Object.defineProperty(O,"prototype",{writable:!1}),z&&y(O,z)})(L,E);var _,R,$=function(O){var z=w();return function(){var U,Q=g(O);if(z){var q=g(this).constructor;U=Reflect.construct(Q,arguments,q)}else U=Q.apply(this,arguments);return function(W,G){if(G&&(p(G)=="object"||typeof G=="function"))return G;if(G!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(W)}(this,U)}}(L);function L(){var O,z,U,Q;(function(re,N){if(!(re instanceof N))throw new TypeError("Cannot call a class as a function")})(this,L);for(var q=arguments.length,W=new Array(q),G=0;G<q;G++)W[G]=arguments[G];return z=v(O=$.call.apply($,[this].concat(W))),Q={instance:null},(U=m(U="state"))in z?Object.defineProperty(z,U,{value:Q,enumerable:!0,configurable:!0,writable:!0}):z[U]=Q,O}return _=L,(R=[{key:"componentDidMount",value:function(){var O=this,z=new l.default(this.typewriter,this.props.options);this.setState({instance:z},function(){var U=O.props.onInit;U&&U(z)})}},{key:"componentDidUpdate",value:function(O){d()(this.props.options,O.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var O=this,z=this.props.component;return c().createElement(z,{ref:function(U){return O.typewriter=U},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&h(_.prototype,R),Object.defineProperty(_,"prototype",{writable:!1}),L}(s.Component);x.defaultProps={component:"div"};const k=x})(),a.default})())})(_y);var v4=_y.exports;const x4=js(v4),w4="/portfolio/me-hero.webp",b4=()=>f.jsx("div",{id:"about",children:f.jsxs(Z3,{children:[f.jsx(e4,{children:f.jsx(X3,{})}),f.jsxs(t4,{children:[f.jsxs(n4,{id:"Left",children:[f.jsxs(r4,{children:[f.jsxs(o4,{children:[f.jsx(i4,{children:"Hi, I am"}),f.jsx(a4,{children:ce.name})]}),f.jsxs(u4,{children:[f.jsx(d4,{children:"I'm a"}),f.jsx(p4,{children:f.jsx(x4,{options:{strings:ce.roles,autoStart:!0,loop:!0,delay:45,deleteSpeed:28}})})]}),f.jsxs(f4,{children:[f.jsx(m4,{children:ce.description.lead}),f.jsx(h4,{children:ce.description.bullets.map(e=>f.jsx(g4,{children:e},e))})]})]}),f.jsx(y4,{href:ce.resume,target:"_blank",rel:"noopener noreferrer",children:"Check Resume"})]}),f.jsx(s4,{id:"Right",children:f.jsx(l4,{children:f.jsx(c4,{src:w4,alt:"Jimmy Ramani",width:"392",height:"392",fetchPriority:"high",decoding:"async"})})})]})]})}),bo=wn`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  --spot-x: 50%;
  --spot-y: 50%;
  background: ${({theme:e})=>e.glassCardBg};
  backdrop-filter: ${({theme:e})=>e.glassBlur};
  -webkit-backdrop-filter: ${({theme:e})=>e.glassBlur};
  border: 1px solid ${({theme:e})=>e.glassCardBorder};
  box-shadow: ${({theme:e})=>e.glassCardShadow};
  transition:
    border-color 0.45s ease,
    box-shadow 0.5s ease,
    transform 0.35s ease,
    filter 0.35s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        circle 110px at var(--spot-x) var(--spot-y),
        ${({theme:e})=>e.glassSpotHot} 0%,
        transparent 68%
      ),
      radial-gradient(
        circle 200px at var(--spot-x) var(--spot-y),
        ${({theme:e})=>e.glassSpotCool} 0%,
        transparent 72%
      );
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    z-index: 0;
    mix-blend-mode: ${({theme:e})=>e.glassSpotBlend};
    will-change: opacity;
  }
  &:hover {
    border-color: ${({theme:e})=>e.glassCardBorderHover};
    box-shadow: ${({theme:e})=>e.glassCardShadowHover};
  }
  &:hover::before {
    opacity: 1;
  }
`,Xi=wn`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: ${({theme:e})=>e.glassChipBg};
  backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  -webkit-backdrop-filter: ${({theme:e})=>e.glassBlurSoft};
  border: 1px solid ${({theme:e})=>e.glassCardBorder};
  transition:
    border-color 0.35s ease,
    box-shadow 0.4s ease;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background:
      radial-gradient(
        ellipse 80% 60% at 75% 10%,
        ${({theme:e})=>e.glassChipGlowWarm} 0%,
        transparent 55%
      ),
      radial-gradient(
        circle 50% at 20% 90%,
        ${({theme:e})=>e.glassChipGlowAccent} 0%,
        transparent 60%
      );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    mix-blend-mode: ${({theme:e})=>e.glassSpotBlend};
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover {
    border-color: ${({theme:e})=>e.glassCardBorderHover};
    box-shadow: ${({theme:e})=>e.glassChipShadowHover};
  }
`,S4=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,k4=j.div`
  width: 100%;
  max-width: min(1240px, 90vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,C4=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,E4=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${Yi}
`,j4=j.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,_4=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,R4=j.div`
  position: relative;
  width: 100%;
  margin-top: clamp(36px, 5vw, 52px);
`,$4=j.div`
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
`,P4=j.div`
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
`,T4=j.article`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  ${bo}
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
`,O4=j.div`
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
`,A4=j.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,I4=j.h3`
  margin: 0;
  width: 100%;
  font-size: clamp(1.2rem, 2.1vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
  text-align: center;
`,M4=j.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-content: center;
  justify-content: center;
`,N4=j.li`
  font-size: clamp(0.9rem, 1.35vw, 1rem);
  font-weight: 500;
  ${Xi}
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
`,z4=j.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${({theme:e})=>e.card_light};
  border: 1px solid ${({theme:e})=>e.navBorder};
  flex-shrink: 0;
`,L4=j.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`,D4=({skill:e})=>{const t=vr();return f.jsx(T4,{...t,children:f.jsxs(O4,{children:[f.jsx(A4,{children:f.jsx(I4,{children:e.title})}),f.jsx(M4,{children:e.skills.map(n=>f.jsxs(N4,{children:[f.jsx(z4,{children:f.jsx(L4,{src:n.image,alt:`${n.name} technology icon`,loading:"lazy",decoding:"async"})}),n.name]},n.name))})]})})},F4=()=>f.jsx(S4,{id:"skills","aria-labelledby":"skills-heading",children:f.jsxs(k4,{children:[f.jsxs(C4,{children:[f.jsx(E4,{children:"Tech stack"}),f.jsx(j4,{id:"skills-heading",children:"Skills"}),f.jsx(_4,{children:"Here are some of my skills on which I have been working on for the past 4 years."})]}),f.jsxs(R4,{children:[f.jsx($4,{"aria-hidden":!0}),f.jsx(P4,{children:jy.map(e=>f.jsx(D4,{skill:e},e.title))})]})]})}),B4=j.section`
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
`,U4=j.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,W4=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,H4=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${Yi}
`,G4=j.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,J4=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,V4=j.div`
  display: inline-flex;
  align-items: stretch;
  margin-top: clamp(20px, 3vw, 28px);
  margin-bottom: clamp(8px, 2vw, 12px);
  ${Xi}
  color: ${({theme:e})=>e.text_primary};
  font-size: 0.9375rem;
  border-radius: 14px;
  font-weight: 600;
  border: 1px solid ${({theme:e})=>e.primary}55;
  overflow: hidden;
  @media (max-width: 768px) {
    font-size: 0.8125rem;
  }
`,Q4=j.button`
  margin: 0;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  color: ${({theme:e})=>e.text_secondary};
  background: transparent;
  transition: background 0.2s ease, color 0.2s ease;
  ${({$active:e,theme:t})=>e&&`
    color: ${t.text_primary};
    background: ${t.primary}22;
  `}
  &:hover {
    background: ${({theme:e})=>e.primary}14;
    color: ${({theme:e})=>e.text_primary};
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: -2px;
  }
  @media (max-width: 768px) {
    padding: 8px 12px;
  }
`,K4=j.span`
  width: 1px;
  align-self: stretch;
  min-height: 100%;
  background: ${({theme:e})=>e.primary}44;
`,q4=j.div`
  width: 100%;
  max-width: min(1200px, 94vw);
  margin-top: clamp(24px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  justify-items: center;
`,Y4=j.button`
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
`,X4=j.div`
  width: 100%;
  max-width: 340px;
  min-height: 440px;
  ${bo}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.3s ease;
  position: relative;
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
    transform: translateY(-5px);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }
`,Z4=j.img`
  width: 100%;
  height: 148px;
  object-fit: cover;
  background-color: ${({theme:e})=>e.card_light};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.navBorder};
`,eC=j.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,tC=j.span`
  ${Xi}
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 4px 10px;
  border-radius: 8px;
`,nC=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  min-height: 0;
`,rC=j.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: ${({theme:e})=>e.text_primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,oC=j.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
`,iC=j.p`
  margin: 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${({theme:e})=>e.text_secondary};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,aC=j.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-top: auto;
`,sC=j.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: -10px;
  background-color: ${({theme:e})=>e.card_light};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 3px solid ${({theme:e})=>e.glassCardBorder};
`,lC=({project:e,setOpenModal:t})=>{var o,i;const n=vr(),r=()=>{t({state:!0,project:e})};return f.jsxs(X4,{...n,tabIndex:0,role:"button","aria-label":`Open project: ${e.title}`,onClick:r,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),r())},children:[f.jsx(Z4,{src:e.image,alt:`${e.title} project preview`,loading:"lazy",decoding:"async"}),f.jsx(eC,{children:(o=e.tags)==null?void 0:o.map(a=>f.jsx(tC,{children:a},a))}),f.jsxs(nC,{children:[f.jsx(rC,{children:e.title}),f.jsx(oC,{children:e.date}),f.jsx(iC,{children:e.description})]}),((i=e.member)==null?void 0:i.length)>0&&f.jsx(aC,{children:e.member.map(a=>f.jsx(sC,{src:a.img,alt:`${e.title} team member`},a.img))})]})},cC=[{value:"all",label:"All"},{value:"web app",label:"Web apps"},{value:"mobile app",label:"Mobile apps"}],uC=({openModal:e,setOpenModal:t})=>{const[n,r]=b.useState("all"),o=Bi(),i=b.useMemo(()=>(n==="all"?ju:ju.filter(s=>s.category===n)).slice(0,5),[n]);return f.jsx(B4,{id:"projects","aria-labelledby":"projects-heading",children:f.jsxs(U4,{children:[f.jsxs(W4,{children:[f.jsx(H4,{children:"Portfolio"}),f.jsx(G4,{id:"projects-heading",children:"Projects"}),f.jsx(J4,{children:"Shipped web and mobile work—from marketing sites and dashboards to Play Store apps—with links to live demos and source where available."})]}),f.jsx(V4,{role:"tablist","aria-label":"Filter projects by type",children:cC.map((a,s)=>f.jsxs(pe.Fragment,{children:[s>0&&f.jsx(K4,{"aria-hidden":!0}),f.jsx(Q4,{type:"button",role:"tab","aria-selected":n===a.value,$active:n===a.value,onClick:()=>r(a.value),children:a.label})]},a.value))}),f.jsx(q4,{children:i.map(a=>f.jsx(lC,{project:a,openModal:e,setOpenModal:t},a.id))}),f.jsx(Y4,{type:"button",onClick:()=>o("portfolio/projects"),children:"View all projects"})]})})},Si={_origin:"https://api.emailjs.com"},dC=(e,t="https://api.emailjs.com")=>{Si._userID=e,Si._origin=t},Ry=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Tm{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const $y=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:a})=>{const s=new Tm(a);s.status===200||s.text==="OK"?r(s):o(s)}),i.addEventListener("error",({target:a})=>{o(new Tm(a))}),i.open("POST",Si._origin+e,!0),Object.keys(n).forEach(a=>{i.setRequestHeader(a,n[a])}),i.send(t)}),pC=(e,t,n,r)=>{const o=r||Si._userID;return Ry(o,e,t),$y("/api/v1.0/email/send",JSON.stringify({lib_version:"3.12.1",user_id:o,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},fC=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},mC=(e,t,n,r)=>{const o=r||Si._userID,i=fC(n);Ry(o,e,t);const a=new FormData(i);return a.append("lib_version","3.12.1"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",o),$y("/api/v1.0/email/send-form",a)},hC={init:dC,send:pC,sendForm:mC};function gC(e){return Object.keys(e).length===0}function yC(e=null){const t=b.useContext(Ji);return!t||gC(t)?e:t}const vC=Xd();function Py(e=vC){return yC(e)}function xC(e){const{theme:t,name:n,props:r}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?r:xs(t.components[n].defaultProps,r)}function wC({props:e,name:t,defaultTheme:n,themeId:r}){let o=Py(n);return o=o[r]||o,xC({theme:o,name:t,props:e})}function Ty(){const e=Py(np);return e[rp]||e}function wr({props:e,name:t}){return wC({props:e,name:t,defaultTheme:np,themeId:rp})}const Om=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)};function _u(e,t){return _u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},_u(e,t)}function bC(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_u(e,t)}const Am={disabled:!1},Oy=pe.createContext(null);var SC=function(t){return t.scrollTop},zo="unmounted",tr="exited",nr="entering",Tr="entered",Ru="exiting",bn=function(e){bC(t,e);function t(r,o){var i;i=e.call(this,r,o)||this;var a=o,s=a&&!a.isMounting?r.enter:r.appear,c;return i.appearStatus=null,r.in?s?(c=tr,i.appearStatus=nr):c=Tr:r.unmountOnExit||r.mountOnEnter?c=zo:c=tr,i.state={status:c},i.nextCallback=null,i}t.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===zo?{status:tr}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==nr&&a!==Tr&&(i=nr):(a===nr||a===Tr)&&(i=Ru)}this.updateStatus(!1,i)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var o=this.props.timeout,i,a,s;return i=a=s=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,s=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:s}},n.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===nr){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:ya.findDOMNode(this);a&&SC(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===tr&&this.setState({status:zo})},n.performEnter=function(o){var i=this,a=this.props.enter,s=this.context?this.context.isMounting:o,c=this.props.nodeRef?[s]:[ya.findDOMNode(this),s],l=c[0],u=c[1],d=this.getTimeouts(),p=s?d.appear:d.enter;if(!o&&!a||Am.disabled){this.safeSetState({status:Tr},function(){i.props.onEntered(l)});return}this.props.onEnter(l,u),this.safeSetState({status:nr},function(){i.props.onEntering(l,u),i.onTransitionEnd(p,function(){i.safeSetState({status:Tr},function(){i.props.onEntered(l,u)})})})},n.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),s=this.props.nodeRef?void 0:ya.findDOMNode(this);if(!i||Am.disabled){this.safeSetState({status:tr},function(){o.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:Ru},function(){o.props.onExiting(s),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:tr},function(){o.props.onExited(s)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},n.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(s){a&&(a=!1,i.nextCallback=null,o(s))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},n.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:ya.findDOMNode(this),s=o==null&&!this.props.addEndListener;if(!a||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],l=c[0],u=c[1];this.props.addEndListener(l,u)}o!=null&&setTimeout(this.nextCallback,o)},n.render=function(){var o=this.state.status;if(o===zo)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var s=je(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pe.createElement(Oy.Provider,{value:null},typeof a=="function"?a(o,s):pe.cloneElement(pe.Children.only(a),s))},t}(pe.Component);bn.contextType=Oy;bn.propTypes={};function Pr(){}bn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Pr,onEntering:Pr,onEntered:Pr,onExit:Pr,onExiting:Pr,onExited:Pr};bn.UNMOUNTED=zo;bn.EXITED=tr;bn.ENTERING=nr;bn.ENTERED=Tr;bn.EXITING=Ru;const kC=e=>e.scrollTop;function Im(e,t){var n,r;const{timeout:o,easing:i,style:a={}}=e;return{duration:(n=a.transitionDuration)!=null?n:typeof o=="number"?o:o[t.mode]||0,easing:(r=a.transitionTimingFunction)!=null?r:typeof i=="object"?i[t.mode]:i,delay:a.transitionDelay}}function CC(e){return Et("MuiPaper",e)}Lt("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const EC=["className","component","elevation","square","variant"],jC=e=>{const{square:t,elevation:n,variant:r,classes:o}=e,i={root:["root",r,!t&&"rounded",r==="elevation"&&`elevation${n}`]};return zt(i,CC,o)},_C=mt("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return D({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&D({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${vm("#fff",Om(t.elevation))}, ${vm("#fff",Om(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),RC=b.forwardRef(function(t,n){const r=Ui({props:t,name:"MuiPaper"}),{className:o,component:i="div",elevation:a=1,square:s=!1,variant:c="elevation"}=r,l=je(r,EC),u=D({},r,{component:i,elevation:a,square:s,variant:c}),d=jC(u);return f.jsx(_C,D({as:i,ownerState:u,className:bt(d.root,o),ref:n},l))});function $C(e){return Et("MuiTypography",e)}Lt("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const PC=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],TC=e=>{const{align:t,gutterBottom:n,noWrap:r,paragraph:o,variant:i,classes:a}=e,s={root:["root",i,e.align!=="inherit"&&`align${Ye(t)}`,n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return zt(s,$C,a)},OC=mt("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${Ye(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>D({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Mm={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},AC={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},IC=e=>AC[e]||e,Ay=b.forwardRef(function(t,n){const r=Ui({props:t,name:"MuiTypography"}),o=IC(r.color),i=my(D({},r,{color:o})),{align:a="inherit",className:s,component:c,gutterBottom:l=!1,noWrap:u=!1,paragraph:d=!1,variant:p="body1",variantMapping:h=Mm}=i,y=je(i,PC),v=D({},i,{align:a,color:o,className:s,component:c,gutterBottom:l,noWrap:u,paragraph:d,variant:p,variantMapping:h}),w=c||(d?"p":h[p]||Mm[p])||"span",g=TC(v);return f.jsx(OC,D({as:w,ref:n,ownerState:v,className:bt(g.root,s)},y))});function Nm(e){return e.substring(2).toLowerCase()}function MC(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function NC(e){const{children:t,disableReactTree:n=!1,mouseEvent:r="onClick",onClickAway:o,touchEvent:i="onTouchEnd"}=e,a=b.useRef(!1),s=b.useRef(null),c=b.useRef(!1),l=b.useRef(!1);b.useEffect(()=>(setTimeout(()=>{c.current=!0},0),()=>{c.current=!1}),[]);const u=fl(V0(t),s),d=vs(y=>{const v=l.current;l.current=!1;const w=Qo(s.current);if(!c.current||!s.current||"clientX"in y&&MC(y,w))return;if(a.current){a.current=!1;return}let g;y.composedPath?g=y.composedPath().indexOf(s.current)>-1:g=!w.documentElement.contains(y.target)||s.current.contains(y.target),!g&&(n||!v)&&o(y)}),p=y=>v=>{l.current=!0;const w=t.props[y];w&&w(v)},h={ref:u};return i!==!1&&(h[i]=p(i)),b.useEffect(()=>{if(i!==!1){const y=Nm(i),v=Qo(s.current),w=()=>{a.current=!0};return v.addEventListener(y,d),v.addEventListener("touchmove",w),()=>{v.removeEventListener(y,d),v.removeEventListener("touchmove",w)}}},[d,i]),r!==!1&&(h[r]=p(r)),b.useEffect(()=>{if(r!==!1){const y=Nm(r),v=Qo(s.current);return v.addEventListener(y,d),()=>{v.removeEventListener(y,d)}}},[d,r]),f.jsx(b.Fragment,{children:b.cloneElement(t,h)})}const zC=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function $u(e){return`scale(${e}, ${e**2})`}const LC={entering:{opacity:1,transform:$u(1)},entered:{opacity:1,transform:"none"}},mc=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Iy=b.forwardRef(function(t,n){const{addEndListener:r,appear:o=!0,children:i,easing:a,in:s,onEnter:c,onEntered:l,onEntering:u,onExit:d,onExited:p,onExiting:h,style:y,timeout:v="auto",TransitionComponent:w=bn}=t,g=je(t,zC),m=H0(),x=b.useRef(),k=Ty(),E=b.useRef(null),_=fl(E,V0(i),n),R=W=>G=>{if(W){const re=E.current;G===void 0?W(re):W(re,G)}},$=R(u),L=R((W,G)=>{kC(W);const{duration:re,delay:N,easing:A}=Im({style:y,timeout:v,easing:a},{mode:"enter"});let T;v==="auto"?(T=k.transitions.getAutoHeightDuration(W.clientHeight),x.current=T):T=re,W.style.transition=[k.transitions.create("opacity",{duration:T,delay:N}),k.transitions.create("transform",{duration:mc?T:T*.666,delay:N,easing:A})].join(","),c&&c(W,G)}),O=R(l),z=R(h),U=R(W=>{const{duration:G,delay:re,easing:N}=Im({style:y,timeout:v,easing:a},{mode:"exit"});let A;v==="auto"?(A=k.transitions.getAutoHeightDuration(W.clientHeight),x.current=A):A=G,W.style.transition=[k.transitions.create("opacity",{duration:A,delay:re}),k.transitions.create("transform",{duration:mc?A:A*.666,delay:mc?re:re||A*.333,easing:N})].join(","),W.style.opacity=0,W.style.transform=$u(.75),d&&d(W)}),Q=R(p),q=W=>{v==="auto"&&m.start(x.current||0,W),r&&r(E.current,W)};return f.jsx(w,D({appear:o,in:s,nodeRef:E,onEnter:L,onEntered:O,onEntering:$,onExit:U,onExited:Q,onExiting:z,addEndListener:q,timeout:v==="auto"?null:v},g,{children:(W,G)=>b.cloneElement(i,D({style:D({opacity:0,transform:$u(.75),visibility:W==="exited"&&!s?"hidden":void 0},LC[W],y,i.props.style),ref:_},G))}))});Iy.muiSupportAuto=!0;function DC(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:n=!1,onClose:r,open:o,resumeHideDuration:i}=e,a=H0();b.useEffect(()=>{if(!o)return;function g(m){m.defaultPrevented||(m.key==="Escape"||m.key==="Esc")&&(r==null||r(m,"escapeKeyDown"))}return document.addEventListener("keydown",g),()=>{document.removeEventListener("keydown",g)}},[o,r]);const s=vs((g,m)=>{r==null||r(g,m)}),c=vs(g=>{!r||g==null||a.start(g,()=>{s(null,"timeout")})});b.useEffect(()=>(o&&c(t),a.clear),[o,t,c,a]);const l=g=>{r==null||r(g,"clickaway")},u=a.clear,d=b.useCallback(()=>{t!=null&&c(i??t*.5)},[t,i,c]),p=g=>m=>{const x=g.onBlur;x==null||x(m),d()},h=g=>m=>{const x=g.onFocus;x==null||x(m),u()},y=g=>m=>{const x=g.onMouseEnter;x==null||x(m),u()},v=g=>m=>{const x=g.onMouseLeave;x==null||x(m),d()};return b.useEffect(()=>{if(!n&&o)return window.addEventListener("focus",d),window.addEventListener("blur",u),()=>{window.removeEventListener("focus",d),window.removeEventListener("blur",u)}},[n,o,d,u]),{getRootProps:(g={})=>{const m=D({},xu(e),xu(g));return D({role:"presentation"},g,m,{onBlur:p(m),onFocus:h(m),onMouseEnter:y(m),onMouseLeave:v(m)})},onClickAway:l}}function FC(e){return Et("MuiSnackbarContent",e)}Lt("MuiSnackbarContent",["root","message","action"]);const BC=["action","className","message","role"],UC=e=>{const{classes:t}=e;return zt({root:["root"],action:["action"],message:["message"]},FC,t)},WC=mt(RC,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,n=r5(e.palette.background.default,t);return D({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(n),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:n,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),HC=mt("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),GC=mt("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),JC=b.forwardRef(function(t,n){const r=Ui({props:t,name:"MuiSnackbarContent"}),{action:o,className:i,message:a,role:s="alert"}=r,c=je(r,BC),l=r,u=UC(l);return f.jsxs(WC,D({role:s,square:!0,elevation:6,className:bt(u.root,i),ownerState:l,ref:n},c,{children:[f.jsx(HC,{className:u.message,ownerState:l,children:a}),o?f.jsx(GC,{className:u.action,ownerState:l,children:o}):null]}))});function VC(e){return Et("MuiSnackbar",e)}Lt("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const QC=["onEnter","onExited"],KC=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],qC=e=>{const{classes:t,anchorOrigin:n}=e,r={root:["root",`anchorOrigin${Ye(n.vertical)}${Ye(n.horizontal)}`]};return zt(r,VC,t)},zm=mt("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`anchorOrigin${Ye(n.anchorOrigin.vertical)}${Ye(n.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const n={left:"50%",right:"auto",transform:"translateX(-50%)"};return D({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:D({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&n,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),Lm=b.forwardRef(function(t,n){const r=Ui({props:t,name:"MuiSnackbar"}),o=Ty(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{action:a,anchorOrigin:{vertical:s,horizontal:c}={vertical:"bottom",horizontal:"left"},autoHideDuration:l=null,children:u,className:d,ClickAwayListenerProps:p,ContentProps:h,disableWindowBlurListener:y=!1,message:v,open:w,TransitionComponent:g=Iy,transitionDuration:m=i,TransitionProps:{onEnter:x,onExited:k}={}}=r,E=je(r.TransitionProps,QC),_=je(r,KC),R=D({},r,{anchorOrigin:{vertical:s,horizontal:c},autoHideDuration:l,disableWindowBlurListener:y,TransitionComponent:g,transitionDuration:m}),$=qC(R),{getRootProps:L,onClickAway:O}=DC(D({},R)),[z,U]=b.useState(!0),Q=A2({elementType:zm,getSlotProps:L,externalForwardedProps:_,ownerState:R,additionalProps:{ref:n},className:[$.root,d]}),q=G=>{U(!0),k&&k(G)},W=(G,re)=>{U(!1),x&&x(G,re)};return!w&&z?null:f.jsx(NC,D({onClickAway:O},p,{children:f.jsx(zm,D({},Q,{children:f.jsx(g,D({appear:!0,in:w,timeout:m,direction:s==="top"?"down":"up",onEnter:W,onExited:q},E,{children:u||f.jsx(JC,D({message:v,action:a},h))}))}))}))}),YC=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,XC=j.div`
  width: 100%;
  max-width: min(640px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,ZC=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,e6=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${Yi}
`,t6=j.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,n6=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,r6=j.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  ${bo}
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
`,o6=j.h3`
  margin: 0 0 4px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
`,My=wn`
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
`,hc=j.input`
  ${My}
`,i6=j.textarea`
  ${My}
  min-height: 120px;
  resize: vertical;
`,a6=j.button`
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
`,s6=()=>{const[e,t]=b.useState(!1),[n,r]=b.useState(!1),o=b.useRef(),i=vr(),a=s=>{s.preventDefault(),hC.sendForm("service_h1go69o","template_ncrlu8e",o.current,"cIHPxbYwNsgVrUuEz").then(()=>{t(!0),o.current.reset()}).catch(()=>{r(!0)})};return f.jsx(YC,{id:"contact","aria-labelledby":"contact-heading",children:f.jsxs(XC,{children:[f.jsxs(ZC,{children:[f.jsx(e6,{children:"Let's talk"}),f.jsx(t6,{id:"contact-heading",children:"Contact"}),f.jsx(n6,{children:"Reach out for collaborations, roles, or technical questions. I read every message and respond as soon as I can."})]}),f.jsxs(r6,{ref:o,onSubmit:a,...i,noValidate:!0,children:[f.jsx(o6,{children:"Email me"}),f.jsx(hc,{type:"email",placeholder:"Your email",name:"from_email",autoComplete:"email",required:!0,"aria-label":"Your email"}),f.jsx(hc,{type:"text",placeholder:"Your name",name:"from_name",autoComplete:"name",required:!0,"aria-label":"Your name"}),f.jsx(hc,{type:"text",placeholder:"Subject",name:"subject",autoComplete:"off",required:!0,"aria-label":"Subject"}),f.jsx(i6,{placeholder:"Message",rows:4,name:"message",required:!0,"aria-label":"Message"}),f.jsx(a6,{type:"submit",children:"Send"})]}),f.jsx(Lm,{open:e,autoHideDuration:6e3,onClose:()=>t(!1),message:"Email sent successfully.",anchorOrigin:{vertical:"bottom",horizontal:"center"}}),f.jsx(Lm,{open:n,autoHideDuration:6e3,onClose:()=>r(!1),message:"Could not send email. Please try again later.",anchorOrigin:{vertical:"bottom",horizontal:"center"}})]})})};var ap={},l6=Kn;Object.defineProperty(ap,"__esModule",{value:!0});var Ny=ap.default=void 0;d6(b);var c6=l6(wo()),u6=f;function zy(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(zy=function(r){return r?n:t})(e)}function d6(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=zy(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}Ny=ap.default=(0,c6.default)((0,u6.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");var sp={},p6=Kn;Object.defineProperty(sp,"__esModule",{value:!0});var Ly=sp.default=void 0;h6(b);var f6=p6(wo()),m6=f;function Dy(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Dy=function(r){return r?n:t})(e)}function h6(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Dy(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(r,i,a):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}Ly=sp.default=(0,f6.default)((0,m6.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram");var lp={},g6=Kn;Object.defineProperty(lp,"__esModule",{value:!0});var Fy=lp.default=void 0,y6=g6(wo()),v6=f;Fy=lp.default=(0,y6.default)((0,v6.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"}),"Article");var cp={},x6=Kn;Object.defineProperty(cp,"__esModule",{value:!0});var By=cp.default=void 0,w6=x6(wo()),b6=f;By=cp.default=(0,w6.default)((0,b6.jsx)("path",{d:"M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"}),"Code");const S6=j.footer`
  width: 100%;
  padding: clamp(44px, 7vw, 72px) clamp(16px, 4vw, 32px) clamp(28px, 5vw, 44px);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`,k6=j.div`
  width: 100%;
  max-width: min(1040px, 100%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 0;
  color: ${({theme:e})=>e.text_primary};
`,C6=j.h1`
  margin: 0;
  font-size: clamp(1.25rem, 2.6vw, 1.65rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,E6=j.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`,Oo=j.a`
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
`,j6=j.p`
  margin: 2px 0 0;
  font-size: 0.85rem;
  color: ${({theme:e})=>e.soft2};
  text-align: center;
`;function _6(){const e=new Date().getFullYear();return f.jsx(S6,{children:f.jsxs(k6,{children:[f.jsx(C6,{children:ce.name}),f.jsxs(E6,{children:[f.jsx(Oo,{href:ce.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:f.jsx(Cs,{})}),f.jsx(Oo,{href:ce.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:f.jsx(Ny,{})}),f.jsx(Oo,{href:ce.medium,target:"_blank",rel:"noopener noreferrer","aria-label":"Medium",children:f.jsx(Fy,{})}),f.jsx(Oo,{href:ce.codepen,target:"_blank",rel:"noopener noreferrer","aria-label":"CodePen",children:f.jsx(By,{})}),f.jsx(Oo,{href:ce.insta,target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",children:f.jsx(Ly,{})})]}),f.jsxs(j6,{children:["© ",e," ",ce.name,". All rights reserved."]})]})})}const ki=b.createContext({});function R6(e){return Et("MuiTimeline",e)}Lt("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function qn(e){return e==="alternate-reverse"?"positionAlternateReverse":`position${Ye(e)}`}const $6=["position","className"],P6=e=>{const{position:t,classes:n}=e,r={root:["root",t&&qn(t)]};return zt(r,R6,n)},T6=mt("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.position&&t[qn(n.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),up=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimeline"}),{position:o="right",className:i}=r,a=je(r,$6),s=D({},r,{position:o}),c=P6(s),l=b.useMemo(()=>({position:o}),[o]);return f.jsx(ki.Provider,{value:l,children:f.jsx(T6,D({className:bt(c.root,i),ownerState:s,ref:n},a))})});function O6(e){return Et("MuiTimelineContent",e)}const A6=Lt("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),I6=["className"],M6=e=>{const{position:t,classes:n}=e,r={root:["root",qn(t)]};return zt(r,O6,n)},N6=mt(Ay,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[qn(n.position)]]}})(({ownerState:e})=>D({flex:1,padding:"6px 16px",textAlign:"left"},e.position==="left"&&{textAlign:"right"})),dp=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineContent"}),{className:o}=r,i=je(r,I6),{position:a}=b.useContext(ki),s=D({},r,{position:a||"right"}),c=M6(s);return f.jsx(N6,D({component:"div",className:bt(c.root,o),ownerState:s,ref:n},i))});function z6(e){return Et("MuiTimelineOppositeContent",e)}const L6=Lt("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),D6=["className"],F6=e=>{const{position:t,classes:n}=e,r={root:["root",qn(t)]};return zt(r,z6,n)},B6=mt(Ay,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[qn(n.position)]]}})(({ownerState:e})=>D({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},e.position==="left"&&{textAlign:"left"})),Uy=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineOppositeContent"}),{className:o}=r,i=je(r,D6),{position:a}=b.useContext(ki),s=D({},r,{position:a||"left"}),c=F6(s);return f.jsx(B6,D({component:"div",className:bt(c.root,o),ownerState:s,ref:n},i))});Uy.muiName="TimelineOppositeContent";function U6(e){return Et("MuiTimelineItem",e)}Lt("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const W6=["position","className"],H6=e=>{const{position:t,classes:n,hasOppositeContent:r}=e,o={root:["root",qn(t),!r&&"missingOppositeContent"]};return zt(o,U6,n)},G6=mt("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[qn(n.position)]]}})(({ownerState:e})=>D({listStyle:"none",display:"flex",position:"relative",minHeight:70},e.position==="left"&&{flexDirection:"row-reverse"},(e.position==="alternate"||e.position==="alternate-reverse")&&{[`&:nth-of-type(${e.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${A6.root}`]:{textAlign:"right"},[`& .${L6.root}`]:{textAlign:"left"}}},!e.hasOppositeContent&&{"&::before":{content:'""',flex:1,padding:"6px 16px"}})),pp=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineItem"}),{position:o,className:i}=r,a=je(r,W6),{position:s}=b.useContext(ki);let c=!1;b.Children.forEach(r.children,p=>{B0(p,["TimelineOppositeContent"])&&(c=!0)});const l=D({},r,{position:o||s||"right",hasOppositeContent:c}),u=H6(l),d=b.useMemo(()=>({position:l.position}),[l.position]);return f.jsx(ki.Provider,{value:d,children:f.jsx(G6,D({className:bt(u.root,i),ownerState:l,ref:n},a))})});function J6(e){return Et("MuiTimelineSeparator",e)}Lt("MuiTimelineSeparator",["root"]);const V6=["className"],Q6=e=>{const{classes:t}=e;return zt({root:["root"]},J6,t)},K6=mt("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),fp=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineSeparator"}),{className:o}=r,i=je(r,V6),a=r,s=Q6(a);return f.jsx(K6,D({className:bt(s.root,o),ownerState:a,ref:n},i))});function q6(e){return Et("MuiTimelineConnector",e)}Lt("MuiTimelineConnector",["root"]);const Y6=["className"],X6=e=>{const{classes:t}=e;return zt({root:["root"]},q6,t)},Z6=mt("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({width:2,backgroundColor:(e.vars||e).palette.grey[400],flexGrow:1})),mp=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineConnector"}),{className:o}=r,i=je(r,Y6),a=r,s=X6(a);return f.jsx(Z6,D({className:bt(s.root,o),ownerState:a,ref:n},i))});function eE(e){return Et("MuiTimelineDot",e)}Lt("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const tE=["className","color","variant"],nE=e=>{const{color:t,variant:n,classes:r}=e,o={root:["root",n,t!=="inherit"&&`${n}${Ye(t)}`]};return zt(o,eE,r)},rE=mt("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.color!=="inherit"&&`${n.variant}${Ye(n.color)}`],t[n.variant]]}})(({ownerState:e,theme:t})=>D({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},e.variant==="filled"&&D({borderColor:"transparent"},e.color!=="inherit"&&D({},e.color==="grey"?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[e.color].contrastText,backgroundColor:(t.vars||t).palette[e.color].main})),e.variant==="outlined"&&D({boxShadow:"none",backgroundColor:"transparent"},e.color!=="inherit"&&D({},e.color==="grey"?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[e.color].main})))),hp=b.forwardRef(function(t,n){const r=wr({props:t,name:"MuiTimelineDot"}),{className:o,color:i="grey",variant:a="filled"}=r,s=je(r,tE),c=D({},r,{color:i,variant:a}),l=nE(c);return f.jsx(rE,D({className:bt(l.root,o),ownerState:c,ref:n},s))}),oE=220,iE=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},aE=j.article`
  width: 100%;
  max-width: min(680px, calc(100vw - 102px));
  border-radius: 18px;
  ${bo}
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
`,sE=j.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,lE=j.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,cE=j.div`
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
`,uE=j.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,dE=j.span`
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
`,pE=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,fE=j.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,mE=j.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,hE=j.span`
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
`,gE=j.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,yE=j.p`
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
`,vE=j.button`
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
`,xE=j.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,wE=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`,bE=j.span`
  ${Xi}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
`,SE=j.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,kE=j.div`
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
`,CE=j.a`
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
`,EE=j.img`
  display: block;
  height: 76px;
  width: clamp(120px, 24vw, 160px);
  object-fit: contain;
  background: ${({theme:e})=>e.card_light};
`,jE=({experience:e})=>{var u,d;const t=vr(),[n,r]=b.useState(!1),[o,i]=b.useState(!1),a=(e==null?void 0:e.desc)??"",s=b.useMemo(()=>a.length>oE,[a]),c=s&&!n,l=b.useMemo(()=>iE(e.company),[e.company]);return b.useEffect(()=>{i(!1)},[e.id,e.img]),f.jsxs(aE,{...t,children:[f.jsxs(sE,{children:[f.jsxs(lE,{children:[f.jsx(cE,{"aria-hidden":!0,children:!o&&e.img?f.jsx(uE,{src:e.img,alt:`${e.company} company logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>i(!0)}):f.jsx(dE,{children:l})}),f.jsxs(pE,{children:[f.jsx(fE,{children:e.role}),f.jsx(mE,{children:e.company})]})]}),f.jsx(hE,{children:e.date})]}),a&&f.jsxs(gE,{children:[f.jsx(yE,{$clamped:c,children:a}),s&&f.jsx(vE,{type:"button",onClick:()=>r(p=>!p),"aria-expanded":n,children:n?"Show less":"Show more"})]}),((u=e==null?void 0:e.skills)==null?void 0:u.length)>0&&f.jsx(xE,{"aria-label":"Skills",children:f.jsx(wE,{children:e.skills.map(p=>f.jsx(bE,{children:p},p))})}),((d=e.doc)==null?void 0:d.length)>0&&f.jsx(SE,{"aria-label":"Selected work",children:f.jsx(kE,{children:e.doc.map((p,h)=>f.jsx(CE,{href:p.link,target:"_blank",rel:"noopener noreferrer",children:f.jsx(EE,{src:p.workImg,alt:`${e.company} project screenshot`,loading:"lazy",decoding:"async"})},p.link||String(h)))})})]})},_E=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px)
    clamp(88px, 12vw, 132px);
`,RE=j.div`
  width: 100%;
  max-width: min(900px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,$E=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,PE=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.text_secondary};
  ${Yi}
`,TE=j.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,OE=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,AE=j.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,IE=()=>{const e=ho();return f.jsx(_E,{id:"experience","aria-labelledby":"experience-heading",children:f.jsxs(RE,{children:[f.jsxs($E,{children:[f.jsx(PE,{children:"Career"}),f.jsx(TE,{id:"experience-heading",children:"Experience"}),f.jsx(OE,{children:"Roles building production software, from full-stack web dashboards to mobile apps, with shipped work you can open in a new tab."})]}),f.jsx(AE,{children:f.jsx(up,{position:"right",sx:{width:"100%",maxWidth:"min(760px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:_m.map((t,n)=>f.jsxs(pp,{children:[f.jsxs(fp,{children:[f.jsx(hp,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),n!==_m.length-1&&f.jsx(mp,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),f.jsx(dp,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left"},children:f.jsx(jE,{experience:t})})]},t.id))})})]})})},ME=220,NE=e=>{const t=String(e||"").trim().split(/\s+/).filter(Boolean);return t.length>=2?(t[0][0]+t[1][0]).toUpperCase():(t[0]||"?").slice(0,2).toUpperCase()},zE=j.article`
  width: 100%;
  max-width: min(680px, calc(100vw - 48px));
  border-radius: 18px;
  ${bo}
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
`,LE=j.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
`,DE=j.div`
  display: flex;
  gap: 14px;
  flex: 1;
  min-width: 0;
  align-items: flex-start;
`,FE=j.div`
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
`,BE=j.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
  display: block;
`,UE=j.span`
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
`,WE=j.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  align-items: flex-start;
`,HE=j.h3`
  margin: 0;
  font-size: clamp(1rem, 2.4vw, 1.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: ${({theme:e})=>e.text_primary};
`,GE=j.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_secondary};
`,JE=j.span`
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
`,VE=j.span`
  ${Xi}
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text_primary};
  padding: 6px 12px;
  border-radius: 10px;
  width: fit-content;
`,QE=j.div`
  position: relative;
  z-index: 1;
  width: 100%;
`,KE=j.p`
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
`,qE=j.button`
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
`,YE=({education:e})=>{const t=vr(),[n,r]=b.useState(!1),[o,i]=b.useState(!1),a=(e==null?void 0:e.desc)??"",s=b.useMemo(()=>a.length>ME,[a]),c=s&&!n,l=b.useMemo(()=>NE(e.school),[e.school]);return b.useEffect(()=>{i(!1)},[e.id,e.img]),f.jsxs(zE,{...t,children:[f.jsxs(LE,{children:[f.jsxs(DE,{children:[f.jsx(FE,{"aria-hidden":!0,children:!o&&e.img?f.jsx(BE,{src:e.img,alt:`${e.school} logo`,loading:"lazy",decoding:"async",referrerPolicy:"no-referrer",onError:()=>i(!0)}):f.jsx(UE,{children:l})}),f.jsxs(WE,{children:[f.jsx(HE,{children:e.school}),f.jsx(GE,{children:e.degree})]})]}),f.jsx(JE,{children:e.date})]}),e.grade&&f.jsx(VE,{children:e.grade}),a&&f.jsxs(QE,{children:[f.jsx(KE,{$clamped:c,children:a}),s&&f.jsx(qE,{type:"button",onClick:()=>r(u=>!u),"aria-expanded":n,children:n?"Show less":"Show more"})]})]})},XE=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,ZE=j.div`
  width: 100%;
  max-width: min(900px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,ej=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,tj=j.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({theme:e})=>e.primary};
  ${Yi}
`,nj=j.h2`
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  ${xr}
`,rj=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  margin-inline: auto;
  text-align: center;
`,oj=j.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,ij=()=>{const e=ho();return f.jsx(XE,{id:"education","aria-labelledby":"education-heading",children:f.jsxs(ZE,{children:[f.jsxs(ej,{children:[f.jsx(tj,{children:"Career"}),f.jsx(nj,{id:"education-heading",children:"Education"}),f.jsx(rj,{children:"Academic milestones and coursework that shaped my foundation in software engineering."})]}),f.jsx(oj,{children:f.jsx(up,{position:"left",sx:{width:"100%",maxWidth:"min(760px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:Rm.map((t,n)=>f.jsxs(pp,{sx:{flexDirection:"row"},children:[f.jsxs(fp,{children:[f.jsx(hp,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),n!==Rm.length-1&&f.jsx(mp,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),f.jsx(dp,{sx:{py:"14px",px:{xs:1.5,sm:2},textAlign:"left",width:"100%"},children:f.jsx(YE,{education:t})})]},t.id))})})]})})},aj=j.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: clamp(56px, 8vw, 96px) clamp(16px, 4vw, 32px);
`,sj=j.div`
  width: 100%;
  max-width: min(980px, 94vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,lj=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  width: 100%;
  max-width: 720px;
`,cj=j.span`
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
`,uj=j.h2`
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
`,dj=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  width: 100%;
  max-width: 56ch;
  margin-inline: auto;
  text-align: center;
`,pj=j.div`
  width: 100%;
  margin-top: clamp(32px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,fj=j.article`
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
`,mj=()=>{const e=ho();return f.jsx(aj,{id:"timeline","aria-labelledby":"timeline-heading",children:f.jsxs(sj,{children:[f.jsxs(lj,{children:[f.jsx(cj,{children:"Journey"}),f.jsx(uj,{id:"timeline-heading",children:"Timeline"}),f.jsx(dj,{children:"Key milestones from my learning journey and real-world engineering work."})]}),f.jsx(pj,{children:f.jsx(up,{position:"alternate",sx:{width:"100%",maxWidth:"min(860px, 100%)",margin:"0 auto",p:0,"& .MuiTimelineItem-root::before":{flex:0,padding:0}},children:$m.map((t,n)=>f.jsxs(pp,{children:[f.jsx(Uy,{sx:{m:"auto 0",color:e.primary,fontSize:"0.9rem",fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",px:{xs:1,sm:2}},children:t.year}),f.jsxs(fp,{children:[f.jsx(hp,{variant:"outlined",sx:{borderColor:e.primary,boxShadow:`0 0 0 4px ${e.primary}22`}}),n!==$m.length-1&&f.jsx(mp,{sx:{background:`linear-gradient(180deg, ${e.primary} 0%, ${e.primary}99 55%, ${e.primary}44 100%)`,width:3,borderRadius:2}})]}),f.jsx(dp,{sx:{py:"12px",px:{xs:1.5,sm:2}},children:f.jsx(fj,{children:t.text})})]},`${t.year}-${t.text}`))})})]})})},hj=j.section`
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
`,gj=j.div`
  width: 100%;
  max-width: min(1240px, 92vw);
  display: flex;
  flex-direction: column;
  align-items: center;
`,yj=j.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  max-width: 720px;
`,vj=j.span`
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
`,xj=j.h2`
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
`,wj=j.p`
  margin: 0;
  font-size: clamp(0.95rem, 1.4vw, 1.0625rem);
  line-height: 1.65;
  color: ${({theme:e})=>e.text_secondary};
  max-width: 56ch;
`,bj=j.div`
  width: 100%;
  max-width: min(1200px, 94vw);
  margin-top: clamp(24px, 4vw, 40px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: clamp(20px, 3vw, 28px);
  justify-items: center;
`,Sj=j.button`
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
`,gp=(e="")=>e.normalize("NFKC").replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,"").replace(/[^\p{L}\p{N}\s.'&/-]/gu," ").replace(/\s+/g," ").trim(),kj=(e="")=>gp(e).toLowerCase().replace(/&/g," and ").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,72),Cj=(e="")=>{if(!e)return null;const t=e.trim();if(/^\d{4}-\d{2}-\d{2}$/.test(t))return t;const n={jan:"01",feb:"02",mar:"03",apr:"04",may:"05",jun:"06",jul:"07",aug:"08",sep:"09",oct:"10",nov:"11",dec:"12"},r=t.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);if(r){const i=n[r[2].slice(0,3).toLowerCase()];if(i)return`${r[3]}-${i}-${r[1].padStart(2,"0")}`}const o=t.match(/^(\d{1,2})\s+([A-Za-z]{3,})\s+(\d{4})$/);if(o){const i=n[o[2].slice(0,3).toLowerCase()];if(i)return`${o[3]}-${i}-${o[1].padStart(2,"0")}`}return null},Ej=e=>{const t=new Set,n=new Map;return e.forEach(({id:r,title:o})=>{let i=kj(o);i||(i=`blog-${r}`);let a=i;t.has(a)&&(a=`${i}-${r}`),t.add(a),n.set(String(r),a)}),n},Wy=Ej(bi.map(e=>({id:e.id,title:e.title}))),Dm=new Map([...Wy.entries()].map(([e,t])=>[t,Number(e)])),jl=e=>Wy.get(String(e.id))||`blog-${e.id}`,jj=e=>`/portfolio/blogs/${jl(e)}`,_j=e=>{if(!e)return null;if(Dm.has(e)){const t=Dm.get(e);return bi.find(n=>n.id===t)||null}return/^\d+$/.test(e)&&bi.find(t=>String(t.id)===e)||null},O_=e=>/^\d+$/.test(e||""),Es=e=>`${gp(e.title)} | Blog`,Rj=e=>Cj(e.date),$j=j.div`
  width: 100%;
  max-width: 340px;
  min-height: 340px;
  ${bo}
  cursor: pointer;
  border-radius: 18px;
  overflow: hidden;
  padding: 22px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  transition: transform 0.3s ease;
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
    z-index: 2;
    pointer-events: none;
  }
  &:hover {
    transform: translateY(-5px);
  }
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.primary};
    outline-offset: 3px;
  }
`,Pj=j.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${({theme:e})=>e.card_light};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.navBorder};
`,Tj=j.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Oj=j.h3`
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.15rem);
  font-weight: 700;
  color: ${({theme:e})=>e.text_primary};
  line-height: 1.3;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,Aj=j.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  color: ${({theme:e})=>e.text_secondary};
`,Ij=({blog:e,setOpenModal:t})=>{const n=Bi(),r=vr(),o=()=>{e!=null&&e.pdfUrl?t({state:!0,blog:e}):n(jj(e),{state:{blog:e}})},i=e!=null&&e.title?`${gp(e.title)} cover image`:"Blog cover image";return f.jsxs($j,{...r,tabIndex:0,role:"button","aria-label":`Open blog: ${e==null?void 0:e.title}`,onClick:o,onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),o())},children:[f.jsx(Pj,{src:e==null?void 0:e.image,alt:i,loading:"lazy",decoding:"async"}),f.jsxs(Tj,{children:[f.jsx(Oj,{children:e==null?void 0:e.title}),f.jsx(Aj,{children:e==null?void 0:e.date})]})]})},Mj=({openBlogModal:e,setOpenBlogModal:t})=>{const n=Bi();return f.jsx(hj,{id:"blogs","aria-labelledby":"blogs-heading",children:f.jsxs(gj,{children:[f.jsxs(yj,{children:[f.jsx(vj,{children:"Writing"}),f.jsx(xj,{id:"blogs-heading",children:"Blogs"}),f.jsx(wj,{children:"Notes on web and mobile development—patterns, tooling, and lessons learned while building real products."})]}),f.jsx(bj,{children:bi.slice(0,5).map(r=>f.jsx(Ij,{blog:r,openModal:e,setOpenModal:t},r.id))}),f.jsx(Sj,{type:"button",onClick:()=>n("portfolio/blogs"),children:"View All Blogs"})]})})},Nj=b.lazy(()=>qi(()=>import("./index-C0RIoTYj.js"),__vite__mapDeps([0,1]))),zj=b.lazy(()=>qi(()=>import("./index--AWMa-Oh.js"),__vite__mapDeps([2,1,3]))),Lj=j.div`
  background-color: ${({theme:e})=>e.bg};
  width: 100%;
  overflow-x: hidden;
`,Fm=j.div`
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
`,Dj=()=>{const[e,t]=b.useState({state:!1,project:null}),[n,r]=b.useState({state:!1,blog:null});return f.jsxs(Lj,{children:[f.jsxs("main",{id:"main-content",children:[f.jsx(b4,{}),f.jsxs(Fm,{children:[f.jsx(F4,{}),f.jsx(IE,{})]}),f.jsx(uC,{openModal:e,setOpenModal:t}),f.jsx(ij,{}),f.jsx(Mj,{openBlogModal:n,setOpenBlogModal:r}),f.jsxs(Fm,{children:[f.jsx(mj,{}),f.jsx(s6,{})]}),f.jsx(_6,{})]}),f.jsxs(b.Suspense,{fallback:null,children:[e.state&&f.jsx(Nj,{openModal:e,setOpenModal:t}),n.state&&f.jsx(zj,{openBlogModal:n,setOpenBlogModal:r})]})]})},Fj=b.lazy(()=>qi(()=>import("./index-DmRrs19U.js"),__vite__mapDeps([4,0,1]))),Bj=b.lazy(()=>qi(()=>import("./index-Ba3egP3B.js"),__vite__mapDeps([5,2,1,3]))),Uj=b.lazy(()=>qi(()=>import("./BlogDetail-BM6LdEv2.js"),__vite__mapDeps([6,2,1,3]))),Wj=[{path:"portfolio/projects",element:f.jsx(Fj,{})},{path:"portfolio/blogs",element:f.jsx(Bj,{})},{path:"portfolio/blogs/:slug",element:f.jsx(Uj,{})},{path:"*",element:f.jsx(Dj,{})}],Hj=tl`
  0%,
  100% {
    opacity: 0.85;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
`,Gj=j.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10000;
`,Jj=j.div`
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
`,Vj=j.div`
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
  animation: ${Hj} 2.4s ease-in-out infinite;
`,Qj=j.div`
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
`,Sa=(e,t,n)=>e+(t-e)*n,Kj=()=>{const e=ho(),[t,n]=b.useState(()=>typeof window<"u"&&window.matchMedia("(pointer: fine)").matches),r=b.useRef({x:0,y:0}),o=b.useRef({x:0,y:0}),i=b.useRef({x:0,y:0}),a=b.useRef(0),s=b.useRef(null),c=b.useRef(null),l=b.useRef(!1);return b.useEffect(()=>{const u=window.matchMedia("(pointer: fine)"),d=()=>n(u.matches);return u.addEventListener("change",d),()=>u.removeEventListener("change",d)},[]),b.useEffect(()=>{if(t)return document.body.classList.add("use-custom-cursor"),()=>{document.body.classList.remove("use-custom-cursor")}},[t]),b.useEffect(()=>{if(!t)return;l.current=!1;const u=()=>{const p=r.current.x,h=r.current.y;i.current.x=Sa(i.current.x,p,.32),i.current.y=Sa(i.current.y,h,.32),o.current.x=Sa(o.current.x,p,.52),o.current.y=Sa(o.current.y,h,.52);const y=i.current.x,v=i.current.y,w=o.current.x,g=o.current.y,m=`translate3d(${y}px, ${v}px, 0) translate(-50%, -50%)`,x=`translate3d(${w}px, ${g}px, 0) translate(-50%, -50%)`;s.current&&(s.current.style.transform=m),c.current&&(c.current.style.transform=x),a.current=requestAnimationFrame(u)},d=p=>{const h=p.clientX,y=p.clientY;l.current?r.current={x:h,y}:(l.current=!0,r.current={x:h,y},i.current={x:h,y},o.current={x:h,y})};return window.addEventListener("mousemove",d,{passive:!0}),a.current=requestAnimationFrame(u),()=>{window.removeEventListener("mousemove",d),cancelAnimationFrame(a.current)}},[t]),t?Cd.createPortal(f.jsxs(Gj,{"data-custom-cursor":"",children:[f.jsx(Jj,{ref:s,$primary:e.primary,style:{transform:"translate3d(0px, 0px, 0) translate(-50%, -50%)"},children:f.jsx(Vj,{$primary:e.primary})}),f.jsx(Qj,{ref:c,$primary:e.primary,style:{transform:"translate3d(0px, 0px, 0) translate(-50%, -50%)"}})]}),document.body):null},Zr="data-seo-managed",Hy="data-seo-jsonld",we=({name:e,property:t,content:n})=>{if(!n)return;const r=e?`meta[name="${e}"][${Zr}]`:`meta[property="${t}"][${Zr}]`;let o=document.head.querySelector(r);o||(o=document.createElement("meta"),o.setAttribute(Zr,"true"),e&&o.setAttribute("name",e),t&&o.setAttribute("property",t),document.head.appendChild(o)),o.setAttribute("content",n)},gc=({rel:e,href:t,hreflang:n})=>{if(!t)return;const r=n?`link[rel="${e}"][hreflang="${n}"][${Zr}]`:`link[rel="${e}"][${Zr}]`;let o=document.head.querySelector(r);o||(o=document.createElement("link"),o.setAttribute(Zr,"true"),o.setAttribute("rel",e),n&&o.setAttribute("hreflang",n),document.head.appendChild(o)),o.setAttribute("href",t)},qj=()=>{document.head.querySelectorAll(`script[${Hy}]`).forEach(e=>e.remove())},Yj=(e=[])=>{qj(),e.filter(Boolean).forEach(t=>{const n=document.createElement("script");n.type="application/ld+json",n.setAttribute(Hy,"true"),n.textContent=JSON.stringify(t),document.head.appendChild(n)})},Xj=({title:e,description:t,keywords:n,canonical:r,robots:o="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",ogType:i="website",ogTitle:a,ogDescription:s,ogUrl:c,ogImage:l,ogImageAlt:u,ogImageWidth:d,ogImageHeight:p,twitterCard:h="summary_large_image",twitterTitle:y,twitterDescription:v,twitterImage:w,twitterImageAlt:g,jsonLd:m=[]})=>{e&&(document.title=e),we({name:"description",content:t}),we({name:"keywords",content:n}),we({name:"robots",content:o}),we({name:"googlebot",content:o}),we({name:"author",content:"Jimmy Ramani"}),we({name:"publisher",content:"Jimmy Ramani"}),gc({rel:"canonical",href:r}),gc({rel:"alternate",href:r,hreflang:"en"}),gc({rel:"alternate",href:r,hreflang:"x-default"}),we({property:"og:type",content:i}),we({property:"og:site_name",content:"Jimmy Ramani Portfolio"}),we({property:"og:locale",content:"en_US"}),we({property:"og:title",content:a||e}),we({property:"og:description",content:s||t}),we({property:"og:url",content:c||r}),we({property:"og:image",content:l}),we({property:"og:image:secure_url",content:l}),we({property:"og:image:alt",content:u}),we({property:"og:image:width",content:String(d||1200)}),we({property:"og:image:height",content:String(p||630)}),we({name:"twitter:card",content:h}),we({name:"twitter:title",content:y||a||e}),we({name:"twitter:description",content:v||s||t}),we({name:"twitter:image",content:w||l}),we({name:"twitter:image:alt",content:g||u}),we({name:"twitter:creator",content:"@jim_y0912"}),we({name:"twitter:site",content:"@jim_y0912"}),Yj(m)},We="https://jimmy-ramani-0912.github.io/portfolio",Zj=`${ce.name} Portfolio`,qo=ce.name,_l="en_US",Ci="https://jimmy-ramani-0912.github.io/portfolio/me.png",e_=512,t_=512,n_=`${ce.name} — Full Stack Developer portfolio photo`,Gy=ce.roles.join(", "),r_="Full Stack Developer with 2.6+ years building scalable web applications and AI-enabled solutions using React.js, Next.js, Angular, and Node.js. Cloud, DevOps, and production-grade engineering.",o_=`${ce.name} | Full Stack Developer & Software Engineer`,Jy=jy.flatMap(e=>e.skills.map(t=>t.name)),i_=[ce.name,...ce.roles,"Full Stack Developer","Software Engineer","React.js","Next.js","Node.js","Angular","TypeScript","JavaScript","Cloud","DevOps","AWS","MongoDB","Portfolio","Web Developer","India",...Jy.slice(0,24)].filter(Boolean).join(", "),a_=[ce.github,ce.linkedin,ce.medium,ce.insta,ce.codepen].filter(Boolean),s_=[...ce.roles,...Jy.slice(0,20),"REST APIs","CI/CD","Scalable Architecture"],Vy={projectCount:ju.length,blogCount:bi.length},pn=(e="/")=>{if(!e||e==="/")return`${We}/`;const t=e.startsWith("/")?e:`/${e}`;return`${We}${t}`},Qy=(e="/")=>/^https?:\/\//i.test(e)?e:pn(e),ka=(e,t=160)=>{if(!e)return"";const n=e.replace(/\s+/g," ").trim();return n.length<=t?n:`${n.slice(0,t-1).trim()}…`},l_=(e="")=>e.replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<[^>]+>/g," ").replace(/&nbsp;|&amp;|&quot;|&#39;|&lt;|&gt;/g," ").replace(/\s+/g," ").trim(),c_=()=>({"@context":"https://schema.org","@type":"Person","@id":`${We}/#person`,name:qo,url:`${We}/`,image:Ci,jobTitle:Gy,description:ce.description.lead,sameAs:a_,knowsAbout:s_,worksFor:{"@type":"Organization",name:"Softrefine Technology Pvt. Ltd."}}),Rl=()=>({"@context":"https://schema.org","@type":"WebSite","@id":`${We}/#website`,name:Zj,url:`${We}/`,inLanguage:_l,description:ce.description.lead,publisher:{"@id":`${We}/#person`},author:{"@id":`${We}/#person`}}),u_=({url:e,description:t})=>({"@context":"https://schema.org","@type":"ProfilePage","@id":`${e}#webpage`,url:e,name:`${qo} | Portfolio`,description:t,inLanguage:_l,isPartOf:{"@id":`${We}/#website`},about:{"@id":`${We}/#person`},mainEntity:{"@id":`${We}/#person`}}),d_=({url:e,name:t,description:n,type:r="WebPage"})=>({"@context":"https://schema.org","@type":r,"@id":`${e}#webpage`,url:e,name:t,description:n,inLanguage:_l,isPartOf:{"@id":`${We}/#website`},author:{"@id":`${We}/#person`}}),Ky=({url:e,name:t,description:n,itemCount:r})=>({...d_({url:e,name:t,description:n,type:"CollectionPage"}),numberOfItems:r}),p_=e=>{var a;const t=jl(e),n=pn(`/blogs/${t}`),r=Es(e).replace(/ \| Blog$/,""),o=((a=e.description)==null?void 0:a.trim())||`${r} — technical article by ${qo} on JavaScript, React, and modern web development.`,i=Rj(e);return{"@context":"https://schema.org","@type":"BlogPosting","@id":`${n}#article`,headline:r,name:r,description:o,url:n,mainEntityOfPage:n,image:Qy(e.image||Ci),...i?{datePublished:i}:{},author:{"@type":"Person",name:qo,url:`${We}/`},publisher:{"@type":"Person",name:qo,url:`${We}/`,logo:{"@type":"ImageObject",url:Ci}},articleSection:e.category||"Technology",inLanguage:_l,isPartOf:{"@id":`${pn("/blogs")}#webpage`}}},$l=e=>({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.map((t,n)=>({"@type":"ListItem",position:n+1,name:t.name,item:t.url}))}),f_=({url:e,description:t})=>[c_(),Rl(),u_({url:e,description:t}),$l([{name:"Home",url:e}])],m_=({url:e,description:t})=>[Rl(),Ky({url:e,name:"Projects",description:t,itemCount:Vy.projectCount}),$l([{name:"Home",url:`${We}/`},{name:"Projects",url:e}])],h_=({url:e,description:t})=>[Rl(),Ky({url:e,name:"Blogs",description:t,itemCount:Vy.blogCount}),$l([{name:"Home",url:`${We}/`},{name:"Blogs",url:e}])],g_=e=>{var o;const t=jl(e),n=pn(`/blogs/${t}`),r=Es(e).replace(/ \| Blog$/,"");return(o=e.description)!=null&&o.trim(),[Rl(),p_(e),$l([{name:"Home",url:`${We}/`},{name:"Blogs",url:pn("/blogs")},{name:r,url:n}])]},y_=(e="")=>{const t=e.replace(/\/+$/,"")||"/";return t==="/portfolio"?"/":t.startsWith("/portfolio/")||t.startsWith("/portfolio")?t.slice(10)||"/":t},Ca=({title:e,description:t,canonicalPath:n,ogType:r="website",ogImage:o=Ci,ogImageAlt:i=n_,jsonLd:a=[]})=>{const s=pn(n);return{title:e,description:t,keywords:i_,canonical:s,ogType:r,ogTitle:e,ogDescription:t,ogUrl:s,ogImage:o,ogImageAlt:i,ogImageWidth:e_,ogImageHeight:t_,twitterTitle:e,twitterDescription:t,twitterImage:o,twitterImageAlt:i,jsonLd:a}},v_=e=>{var a;const t=y_(e);if(t==="/projects"){const s=ka(`Explore ${Gy} projects by Jimmy Ramani — production web apps, mobile apps, and full-stack solutions built with React, Node.js, Flutter, and cloud technologies.`),c="Projects | Full Stack Developer Portfolio",l=pn("/projects");return Ca({title:c,description:s,canonicalPath:"/projects",jsonLd:m_({url:l,description:s})})}if(t==="/blogs"){const s=ka("Technical blogs and articles on JavaScript, React, Next.js, frontend architecture, design patterns, and modern web development by Jimmy Ramani."),c="Blogs | JavaScript & Web Development Articles",l=pn("/blogs");return Ca({title:c,description:s,canonicalPath:"/blogs",jsonLd:h_({url:l,description:s})})}const n=t.match(/^\/blogs\/([^/]+)$/);if(n){const s=_j(n[1]);if(s){const c=l_(s.HTML||""),l=ka(((a=s.description)==null?void 0:a.trim())||c||`${Es(s)} — article by Jimmy Ramani on ${s.category||"web development"}.`),u=Es(s),d=Qy(s.image||Ci);return Ca({title:u,description:l,canonicalPath:`/blogs/${jl(s)}`,ogType:"article",ogImage:d,ogImageAlt:`${u} cover image`,jsonLd:g_({...s,description:l})})}}const r=ka(r_),o=o_,i=pn("/");return Ca({title:o,description:r,canonicalPath:"/",jsonLd:f_({url:i,description:r})})},x_=e=>{Xj(v_(e))},w_=()=>{const{pathname:e}=Fi();return b.useEffect(()=>{x_(e)},[e]),null},b_=j.div`
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  z-index: 100;
  position: fixed;
  inset: 0;
  background:
    radial-gradient(
      70% 55% at 50% 0%,
      ${({theme:e})=>`${e.primary}22`},
      transparent 72%
    ),
    ${({theme:e})=>e.bg};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,S_=j.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`,k_=tl`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,C_=tl`
  0%, 100% {
    opacity: 0.6;
    transform: scale(0.96);
  }
  50% {
    opacity: 1;
    transform: scale(1.04);
  }
`,E_=tl`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`,j_=j.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({theme:e})=>e.primary};
  box-shadow: 0 0 20px ${({theme:e})=>`${e.primary}aa`};
  animation: ${C_} 1.4s ease-in-out infinite;
`,Bm=j.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: ${({theme:e})=>e.primary};
  border-right-color: ${({theme:e})=>`${e.primary}99`};
  animation: ${k_} ${({$speed:e})=>e||"1.1s"} linear infinite;
`,__=j.div`
  position: relative;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
`,R_=j.p`
  margin: 0;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  background: linear-gradient(
    100deg,
    ${({theme:e})=>e.text_primary} 0%,
    ${({theme:e})=>e.primary} 45%,
    ${({theme:e})=>e.accent} 60%,
    ${({theme:e})=>e.text_primary} 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${E_} 1.9s linear infinite;
`;function $_(){const[e,t]=b.useState(Nw);b.useEffect(()=>{const r=e?"dark":"light";document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,window.localStorage.setItem(k0,r);const o=document.querySelector('meta[name="theme-color"]');o&&o.setAttribute("content",e?"#030711":"#FFFFFF")},[e]);const n=()=>{t(r=>!r)};return f.jsxs($w,{theme:e?Iw:Mw,children:[f.jsx(zw,{}),f.jsx(Kj,{}),f.jsx(b.Suspense,{fallback:f.jsx(b_,{children:f.jsxs(S_,{children:[f.jsxs(__,{children:[f.jsx(Bm,{$speed:"1.2s"}),f.jsx(Bm,{$speed:"1.9s"}),f.jsx(j_,{})]}),f.jsx(R_,{children:"Loading..."})]})}),children:f.jsxs(Nb,{children:[f.jsx(w_,{}),f.jsx(Q3,{darkMode:e,toggleDarkMode:n}),f.jsx($b,{children:Wj.map(r=>f.jsx(M0,{path:r.path,element:r.element},r.path))})]})})]})}const P_=yc.createRoot(document.getElementById("root"));P_.render(f.jsx(pe.StrictMode,{children:f.jsx($_,{})}));export{vs as $,fl as A,Ij as B,q4 as C,J4 as D,H4 as E,V0 as F,W0 as G,U0 as H,U4 as I,Ty as J,bn as K,D as L,kC as M,Im as N,Et as O,lC as P,Lt as Q,pe as R,W4 as S,G4 as T,Ui as U,bt as V,zt as W,mt as X,Qo as Y,s2 as Z,je as _,V4 as a,o2 as a0,xu as a1,A2 as a2,K4 as b,Q4 as c,gj as d,yj as e,vj as f,xj as g,wj as h,bj as i,f as j,bi as k,Fi as l,T_ as m,_j as n,O_ as o,ju as p,j as q,b as r,jj as s,J5 as t,Bi as u,vr as v,bo as w,vn as x,js as y,Cd as z};
//# sourceMappingURL=index-56x_-Zhs.js.map
