(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=i(c);fetch(c.href,f)}})();function S_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gh={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv;function Wb(){if(dv)return sl;dv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var h in c)h!=="key"&&(f[h]=c[h])}else f=c;return c=f.ref,{$$typeof:o,type:s,key:d,ref:c!==void 0?c:null,props:f}}return sl.Fragment=t,sl.jsx=i,sl.jsxs=i,sl}var hv;function jb(){return hv||(hv=1,gh.exports=Wb()),gh.exports}var y=jb(),xh={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function qb(){if(pv)return pt;pv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),E=Symbol.iterator;function C(z){return z===null||typeof z!="object"?null:(z=E&&z[E]||z["@@iterator"],typeof z=="function"?z:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,S={};function O(z,xe,Re){this.props=z,this.context=xe,this.refs=S,this.updater=Re||D}O.prototype.isReactComponent={},O.prototype.setState=function(z,xe){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,xe,"setState")},O.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function W(){}W.prototype=O.prototype;function R(z,xe,Re){this.props=z,this.context=xe,this.refs=S,this.updater=Re||D}var U=R.prototype=new W;U.constructor=R,b(U,O.prototype),U.isPureReactComponent=!0;var L=Array.isArray;function P(){}var T={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function B(z,xe,Re){var Z=Re.ref;return{$$typeof:o,type:z,key:xe,ref:Z!==void 0?Z:null,props:Re}}function V(z,xe){return B(z.type,xe,z.props)}function K(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function ae(z){var xe={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Re){return xe[Re]})}var J=/\/+/g;function ie(z,xe){return typeof z=="object"&&z!==null&&z.key!=null?ae(""+z.key):xe.toString(36)}function Y(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(xe){z.status==="pending"&&(z.status="fulfilled",z.value=xe)},function(xe){z.status==="pending"&&(z.status="rejected",z.reason=xe)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function H(z,xe,Re,Z,pe){var we=typeof z;(we==="undefined"||we==="boolean")&&(z=null);var Pe=!1;if(z===null)Pe=!0;else switch(we){case"bigint":case"string":case"number":Pe=!0;break;case"object":switch(z.$$typeof){case o:case t:Pe=!0;break;case _:return Pe=z._init,H(Pe(z._payload),xe,Re,Z,pe)}}if(Pe)return pe=pe(z),Pe=Z===""?"."+ie(z,0):Z,L(pe)?(Re="",Pe!=null&&(Re=Pe.replace(J,"$&/")+"/"),H(pe,xe,Re,"",function(Vt){return Vt})):pe!=null&&(K(pe)&&(pe=V(pe,Re+(pe.key==null||z&&z.key===pe.key?"":(""+pe.key).replace(J,"$&/")+"/")+Pe)),xe.push(pe)),1;Pe=0;var Se=Z===""?".":Z+":";if(L(z))for(var De=0;De<z.length;De++)Z=z[De],we=Se+ie(Z,De),Pe+=H(Z,xe,Re,we,pe);else if(De=C(z),typeof De=="function")for(z=De.call(z),De=0;!(Z=z.next()).done;)Z=Z.value,we=Se+ie(Z,De++),Pe+=H(Z,xe,Re,we,pe);else if(we==="object"){if(typeof z.then=="function")return H(Y(z),xe,Re,Z,pe);throw xe=String(z),Error("Objects are not valid as a React child (found: "+(xe==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":xe)+"). If you meant to render a collection of children, use an array instead.")}return Pe}function j(z,xe,Re){if(z==null)return z;var Z=[],pe=0;return H(z,Z,"","",function(we){return xe.call(Re,we,pe++)}),Z}function te(z){if(z._status===-1){var xe=z._result,Re=xe();Re.then(function(Z){(z._status===0||z._status===-1)&&(z._status=1,z._result=Z,Re.status===void 0&&(Re.status="fulfilled",Re.value=Z))},function(Z){(z._status===0||z._status===-1)&&(z._status=2,z._result=Z,Re.status===void 0&&(Re.status="rejected",Re.reason=Z))}),z._status===-1&&(z._status=0,z._result=Re)}if(z._status===1)return z._result.default;throw z._result}var oe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var xe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(xe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function me(z){var xe=T.T,Re={};Re.types=xe!==null?xe.types:null,T.T=Re;try{var Z=z(),pe=T.S;pe!==null&&pe(Re,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(P,oe)}catch(we){oe(we)}finally{xe!==null&&Re.types!==null&&(xe.types=Re.types),T.T=xe}}function We(z){var xe=T.T;if(xe!==null){var Re=xe.types;Re===null?xe.types=[z]:Re.indexOf(z)===-1&&Re.push(z)}else me(We.bind(null,z))}var je={map:j,forEach:function(z,xe,Re){j(z,function(){xe.apply(this,arguments)},Re)},count:function(z){var xe=0;return j(z,function(){xe++}),xe},toArray:function(z){return j(z,function(xe){return xe})||[]},only:function(z){if(!K(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return pt.Activity=v,pt.Children=je,pt.Component=O,pt.Fragment=i,pt.Profiler=c,pt.PureComponent=R,pt.StrictMode=s,pt.Suspense=p,pt.ViewTransition=g,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,pt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return T.H.useMemoCache(z)}},pt.addTransitionType=We,pt.cache=function(z){return function(){return z.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(z,xe,Re){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Z=b({},z.props),pe=z.key;if(xe!=null)for(we in xe.key!==void 0&&(pe=""+xe.key),xe)!F.call(xe,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&xe.ref===void 0||(Z[we]=xe[we]);var we=arguments.length-2;if(we===1)Z.children=Re;else if(1<we){for(var Pe=Array(we),Se=0;Se<we;Se++)Pe[Se]=arguments[Se+2];Z.children=Pe}return B(z.type,pe,Z)},pt.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:f,_context:z},z},pt.createElement=function(z,xe,Re){var Z,pe={},we=null;if(xe!=null)for(Z in xe.key!==void 0&&(we=""+xe.key),xe)F.call(xe,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(pe[Z]=xe[Z]);var Pe=arguments.length-2;if(Pe===1)pe.children=Re;else if(1<Pe){for(var Se=Array(Pe),De=0;De<Pe;De++)Se[De]=arguments[De+2];pe.children=Se}if(z&&z.defaultProps)for(Z in Pe=z.defaultProps,Pe)pe[Z]===void 0&&(pe[Z]=Pe[Z]);return B(z,we,pe)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(z){return{$$typeof:h,render:z}},pt.isValidElement=K,pt.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:te}},pt.memo=function(z,xe){return{$$typeof:m,type:z,compare:xe===void 0?null:xe}},pt.startTransition=me,pt.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},pt.use=function(z){return T.H.use(z)},pt.useActionState=function(z,xe,Re){return T.H.useActionState(z,xe,Re)},pt.useCallback=function(z,xe){return T.H.useCallback(z,xe)},pt.useContext=function(z){return T.H.useContext(z)},pt.useDebugValue=function(){},pt.useDeferredValue=function(z,xe){return T.H.useDeferredValue(z,xe)},pt.useEffect=function(z,xe){return T.H.useEffect(z,xe)},pt.useEffectEvent=function(z){return T.H.useEffectEvent(z)},pt.useId=function(){return T.H.useId()},pt.useImperativeHandle=function(z,xe,Re){return T.H.useImperativeHandle(z,xe,Re)},pt.useInsertionEffect=function(z,xe){return T.H.useInsertionEffect(z,xe)},pt.useLayoutEffect=function(z,xe){return T.H.useLayoutEffect(z,xe)},pt.useMemo=function(z,xe){return T.H.useMemo(z,xe)},pt.useOptimistic=function(z,xe){return T.H.useOptimistic(z,xe)},pt.useReducer=function(z,xe,Re){return T.H.useReducer(z,xe,Re)},pt.useRef=function(z){return T.H.useRef(z)},pt.useState=function(z){return T.H.useState(z)},pt.useSyncExternalStore=function(z,xe,Re){return T.H.useSyncExternalStore(z,xe,Re)},pt.useTransition=function(){return T.H.useTransition()},pt.version="19.3.0",pt}var mv;function Gp(){return mv||(mv=1,xh.exports=qb()),xh.exports}var rt=Gp();const Yb=S_(rt);var vh={exports:{}},ol={},_h={exports:{}},Sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function Zb(){return gv||(gv=1,(function(o){function t(Y,H){var j=Y.length;Y.push(H);e:for(;0<j;){var te=j-1>>>1,oe=Y[te];if(0<c(oe,H))Y[te]=H,Y[j]=oe,j=te;else break e}}function i(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var H=Y[0],j=Y.pop();if(j!==H){Y[0]=j;e:for(var te=0,oe=Y.length,me=oe>>>1;te<me;){var We=2*(te+1)-1,je=Y[We],z=We+1,xe=Y[z];if(0>c(je,j))z<oe&&0>c(xe,je)?(Y[te]=xe,Y[z]=j,te=z):(Y[te]=je,Y[We]=j,te=We);else if(z<oe&&0>c(xe,j))Y[te]=xe,Y[z]=j,te=z;else break e}}return H}function c(Y,H){var j=Y.sortIndex-H.sortIndex;return j!==0?j:Y.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var p=[],m=[],_=1,v=null,g=3,E=!1,C=!1,D=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function R(Y){for(var H=i(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=Y)s(m),H.sortIndex=H.expirationTime,t(p,H);else break;H=i(m)}}function U(Y){if(D=!1,R(Y),!C)if(i(p)!==null)C=!0,L||(L=!0,K());else{var H=i(m);H!==null&&ie(U,H.startTime-Y)}}var L=!1,P=-1,T=5,F=-1;function B(){return b?!0:!(o.unstable_now()-F<T)}function V(){if(b=!1,L){var Y=o.unstable_now();F=Y;var H=!0;try{e:{C=!1,D&&(D=!1,O(P),P=-1),E=!0;var j=g;try{t:{for(R(Y),v=i(p);v!==null&&!(v.expirationTime>Y&&B());){var te=v.callback;if(typeof te=="function"){v.callback=null,g=v.priorityLevel;var oe=te(v.expirationTime<=Y);if(Y=o.unstable_now(),typeof oe=="function"){v.callback=oe,R(Y),H=!0;break t}v===i(p)&&s(p),R(Y)}else s(p);v=i(p)}if(v!==null)H=!0;else{var me=i(m);me!==null&&ie(U,me.startTime-Y),H=!1}}break e}finally{v=null,g=j,E=!1}H=void 0}}finally{H?K():L=!1}}}var K;if(typeof W=="function")K=function(){W(V)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,J=ae.port2;ae.port1.onmessage=V,K=function(){J.postMessage(null)}}else K=function(){S(V,0)};function ie(Y,H){P=S(function(){Y(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var j=g;g=H;try{return Y()}finally{g=j}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(Y,H){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var j=g;g=Y;try{return H()}finally{g=j}},o.unstable_scheduleCallback=function(Y,H,j){var te=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,Y){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=j+oe,Y={id:_++,callback:H,priorityLevel:Y,startTime:j,expirationTime:oe,sortIndex:-1},j>te?(Y.sortIndex=j,t(m,Y),i(p)===null&&Y===i(m)&&(D?(O(P),P=-1):D=!0,ie(U,j-te))):(Y.sortIndex=oe,t(p,Y),C||E||(C=!0,L||(L=!0,K()))),Y},o.unstable_shouldYield=B,o.unstable_wrapCallback=function(Y){var H=g;return function(){var j=g;g=H;try{return Y.apply(this,arguments)}finally{g=j}}}})(Sh)),Sh}var xv;function Kb(){return xv||(xv=1,_h.exports=Zb()),_h.exports}var yh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function Qb(){if(vv)return Un;vv=1;var o=Gp();function t(_){var v="https://react.dev/errors/"+_;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)v+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+_+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function h(_,v,g){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:E==null?null:E===d?d:""+E,children:_,containerInfo:v,implementation:g}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,v){if(_==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.browser=function(_){return{$$typeof:f,_reason:_}},Un.createPortal=function(_,v){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return h(_,v,null,g)},Un.flushSync=function(_){var v=p.T,g=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=v,s.p=g,s.d.f()}},Un.preconnect=function(_,v){typeof _=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(_,v))},Un.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Un.preinit=function(_,v){if(typeof _=="string"&&v&&typeof v.as=="string"){var g=v.as,E=m(g,v.crossOrigin),C=typeof v.integrity=="string"?v.integrity:void 0,D=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;g==="style"?s.d.S(_,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:C,fetchPriority:D}):g==="script"&&s.d.X(_,{crossOrigin:E,integrity:C,fetchPriority:D,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Un.preinitModule=function(_,v){if(typeof _=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var g=m(v.as,v.crossOrigin);s.d.M(_,{crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(_)},Un.preload=function(_,v){if(typeof _=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var g=v.as,E=m(g,v.crossOrigin);s.d.L(_,g,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Un.preloadModule=function(_,v){if(typeof _=="string")if(v){var g=m(v.as,v.crossOrigin);s.d.m(_,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(_)},Un.requestFormReset=function(_){s.d.r(_)},Un.unstable_batchedUpdates=function(_,v){return _(v)},Un.useFormState=function(_,v,g){return p.H.useFormState(_,v,g)},Un.useFormStatus=function(){return p.H.useHostTransitionStatus()},Un.version="19.3.0",Un}var _v;function Jb(){if(_v)return yh.exports;_v=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yh.exports=Qb(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function $b(){if(Sv)return ol;Sv=1;var o=Kb(),t=Gp(),i=Jb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(f(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return p(l),e;if(u===r)return p(l),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=u;else{for(var x=!1,w=l.child;w;){if(w===a){x=!0,a=l,r=u;break}if(w===r){x=!0,r=l,a=u;break}w=w.sibling}if(!x){for(w=u.child;w;){if(w===a){x=!0,a=u,r=l;break}if(w===r){x=!0,r=u,a=l;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,l,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,l,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,l,u))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function C(e){var n=[null,null],a=g(e);return a===null||D(n,e,a.child,{foundSelf:!1}),n}function D(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&D(e,n,a.child,r))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,O=null;function W(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function R(e,n,a){return e===a?(O=e,!1):e===n?(O!==null&&(S=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function L(e,n,a){for(var r=0,l=e;l;l=a(l))r++;l=0;for(var u=n;u;u=a(u))l++;for(;0<r-l;)e=a(e),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,T=Symbol.for("react.element"),F=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),We=Symbol.for("react.legacy_hidden"),je=Symbol.for("react.memo_cache_sentinel"),z=Symbol.for("react.view_transition"),xe=Symbol.for("react.recoverable"),Re=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function we(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case ae:return"Profiler";case K:return"StrictMode";case H:return"Suspense";case j:return"SuspenseList";case me:return"Activity";case z:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case ie:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case Y:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:we(e.type)||"Memo";case oe:n=e._payload,e=e._init;try{return we(e(n))}catch{}}return null}var Pe=Array.isArray,Se=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,De=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Vt={pending:!1,data:null,method:null,action:null},xt=[],vt=-1;function yt(e){return{current:e}}function it(e){0>vt||(e.current=xt[vt],xt[vt]=null,vt--)}function st(e,n){vt++,xt[vt]=e.current,e.current=n}var Ht=yt(null),tt=yt(null),et=yt(null),ct=yt(null);function G(e,n){switch(st(et,n),st(tt,e),st(Ht,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yx(n),e=bx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Ht),st(Ht,e)}function wt(){it(Ht),it(tt),it(et)}function ht(e){var n=e.memoizedState;n!==null&&(Is._currentValue=n.memoizedState,st(ct,e)),n=Ht.current;var a=bx(n,e.type);n!==a&&(st(tt,e),st(Ht,a))}function N(e){tt.current===e&&(it(Ht),it(tt)),ct.current===e&&(it(ct),Is._currentValue=Vt)}var M,$;function re(e){if(M===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||"",$=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M+e+$}var ge=!1;function Ce(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(Be){var Q=Be}Reflect.construct(e,[],Me)}else{try{Me.call()}catch(Be){Q=Be}Me=!1;try{var ue=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Me=!0,new e}finally{Me&&(ue!==void 0?Object.defineProperty(e.prototype,"props",ue):delete e.prototype.props)}}}else{try{throw Error()}catch(Be){Q=Be}(Me=e())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(Be){if(Be&&Q&&typeof Be.stack=="string")return[Be.stack,Q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),x=u[0],w=u[1];if(x&&w){var I=x.split(`
`),ne=w.split(`
`);for(l=r=0;r<I.length&&!I[r].includes("DetermineComponentFrameRoot");)r++;for(;l<ne.length&&!ne[l].includes("DetermineComponentFrameRoot");)l++;if(r===I.length||l===ne.length)for(r=I.length-1,l=ne.length-1;1<=r&&0<=l&&I[r]!==ne[l];)l--;for(;1<=r&&0<=l;r--,l--)if(I[r]!==ne[l]){if(r!==1||l!==1)do if(r--,l--,0>l||I[r]!==ne[l]){var fe=`
`+I[r].replace(" at new "," at ");return e.displayName&&fe.includes("<anonymous>")&&(fe=fe.replace("<anonymous>",e.displayName)),fe}while(1<=r&&0<=l);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function Le(e,n){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return e.child!==n&&n!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return re("Activity");case 30:return re("ViewTransition");default:return""}}function ve(e){try{var n="",a=null;do n+=Le(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var _e=Object.prototype.hasOwnProperty,Te=o.unstable_scheduleCallback,ze=o.unstable_cancelCallback,Ee=o.unstable_shouldYield,Ne=o.unstable_requestPaint,Ie=o.unstable_now,nt=o.unstable_getCurrentPriorityLevel,ot=o.unstable_ImmediatePriority,q=o.unstable_UserBlockingPriority,Ue=o.unstable_NormalPriority,ye=o.unstable_LowPriority,Oe=o.unstable_IdlePriority,Ge=o.log,Ae=o.unstable_setDisableYieldValue,Qe=null,He=null;function Ct(e){if(typeof Ge=="function"&&Ae(e),He&&typeof He.setStrictMode=="function")try{He.setStrictMode(Qe,e)}catch{}}var ut=Math.clz32?Math.clz32:uo,zn=Math.log,qn=Math.LN2;function uo(e){return e>>>=0,e===0?32:31-(zn(e)/qn|0)|0}var Ia=256,Ri=262144,za=4194304;function ha(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Sr(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var l=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~u,r!==0?l=ha(r):(x&=w,x!==0?l=ha(x):a||(a=w&~e,a!==0&&(l=ha(a))))):(w=r&~u,w!==0?l=ha(w):x!==0?l=ha(x):a||(a=r&~e,a!==0&&(l=ha(a)))),l===0?0:n!==0&&n!==l&&(n&u)===0&&(u=l&-l,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:l}function Ha(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Vi(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-ut(a),l=1<<r;n|=e[r],a&=~l}return n}function fo(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ho(){var e=za;return za<<=1,(za&62914560)===0&&(za=4194304),e}function ts(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nl(e,n,a,r,l,u){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,I=e.expirationTimes,ne=e.hiddenUpdates;for(a=x&~a;0<a;){var fe=31-ut(a),Me=1<<fe;w[fe]=0,I[fe]=-1;var Q=ne[fe];if(Q!==null)for(ne[fe]=null,fe=0;fe<Q.length;fe++){var ue=Q[fe];ue!==null&&(ue.lane&=-536870913)}a&=~Me}r!==0&&yr(e,r,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~n))}function yr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ut(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function po(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ut(a),l=1<<r;l&n|e[r]&n&&(e[r]|=n),a&=~l}}function mo(e,n){var a=n&-n;return a=(a&42)!==0?1:go(a),(a&(e.suspendedLanes|n))!==0?0:a}function go(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Dl(){var e=De.p;return e!==0?e:(e=window.event,e===void 0?32:rv(e.type))}function Ul(e,n){var a=De.p;try{return De.p=e,n()}finally{De.p=a}}var pi=Math.random().toString(36).slice(2),A="__reactFiber$"+pi,k="__reactProps$"+pi,de="__reactContainer$"+pi,le="__reactEvents$"+pi,ce="__reactListeners$"+pi,Ve="__reactHandles$"+pi,qe="__reactResources$"+pi,Fe="__reactMarker$"+pi,Ke="__reactLoad$"+pi;function Je(e){delete e[A],delete e[k],delete e[ce],delete e[Ve]}function ft(e){var n;if(n=e[A])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[A]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zx(e);e!==null;){if(a=e[A])return a;e=zx(e)}return n}e=a,a=e.parentNode}return null}function mt(e){if(e=e[A]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ye(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Rt(e){var n=e[qe];return n||(n=e[qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mt(e){e[Fe]=!0}function Jt(e){e[Ke]=void 0}var jt=new Set,_n={};function ke(e,n){on(e,n),on(e+"Capture",n)}function on(e,n){for(_n[e]=n,e=0;e<n.length;e++)jt.add(n[e])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hn={},ti={};function Xi(e){return _e.call(ti,e)?!0:_e.call(Hn,e)?!1:Bt.test(e)?ti[e]=!0:(Hn[e]=!0,!1)}var Et=!1;function kt(){var e=Et;return Et=!1,e}function tn(e,n,a){if(Xi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function ni(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ut(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function ln(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ll(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(x){a=""+x,u.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wu(e){if(!e._valueTracker){var n=pa(e)?"checked":"value";e._valueTracker=Ll(e,n,""+e[n])}}function cm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=pa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var dS=/[\n"\\]/g;function mi(e){return e.replace(dS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ju(e,n,a,r,l,u,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ln(n)):e.value!==""+ln(n)&&(e.value=""+ln(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?qu(e,ln(e.value)):qu(e,ln(n)):a!=null?qu(e,ln(a)):r!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+ln(w):e.removeAttribute("name")}function um(e,n,a,r,l,u,x,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Wu(e);return}a=a!=null?""+ln(a):"",n=n!=null?""+ln(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Wu(e)}function qu(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function ns(e,n,a,r){if(e=e.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=n.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ln(a),n=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function fm(e,n,a){if(n!=null&&(n=""+ln(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ln(a):""}function dm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Pe(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ln(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Wu(e)}function is(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var hS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||hS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function pm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Et=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(hm(e,l,r),Et=!0)}else for(var u in n)n.hasOwnProperty(u)&&hm(e,u,n[u])}function Yu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(e){return mS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Zu=null;function Ku(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,rs=null;function mm(e){var n=mt(e);if(n&&(e=n.stateNode)){var a=e[k]||null;e:switch(e=n.stateNode,n.type){case"input":if(ju(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var l=r[k]||null;if(!l)throw Error(s(90));ju(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&cm(r)}break e;case"textarea":fm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ns(e,!!a.multiple,n,!1)}}}var Qu=!1;function gm(e,n,a){if(Qu)return e(n,a);Qu=!0;try{var r=e(n);return r}finally{if(Qu=!1,(as!==null||rs!==null)&&(Oc(),as&&(n=as,e=rs,rs=as=null,mm(n),e)))for(n=0;n<e.length;n++)mm(e[n])}}function vo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[k]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=!1;if(ma)try{var _o={};Object.defineProperty(_o,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",_o,_o),window.removeEventListener("test",_o,_o)}catch{Ju=!1}var Ga=null,$u=null,Fl=null;function xm(){if(Fl)return Fl;var e,n=$u,a=n.length,r,l="value"in Ga?Ga.value:Ga.textContent,u=l.length;for(e=0;e<a&&n[e]===l[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===l[u-r];r++);return Fl=l.slice(e,1<r?1-r:void 0)}function Bl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Pl(){return!0}function vm(){return!1}function Gn(e){function n(a,r,l,u,x){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Pl:vm,this.isPropagationStopped=vm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Gn(Va),So=P({},Va,{view:0,detail:0}),gS=Gn(So),ef,tf,yo,zl=P({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yo&&(yo&&e.type==="mousemove"?(ef=e.screenX-yo.screenX,tf=e.screenY-yo.screenY):tf=ef=0,yo=e),ef)},movementY:function(e){return"movementY"in e?e.movementY:tf}}),_m=Gn(zl),xS=P({},zl,{dataTransfer:0}),vS=Gn(xS),_S=P({},So,{relatedTarget:0}),nf=Gn(_S),SS=P({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),yS=Gn(SS),bS=P({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),MS=Gn(bS),ES=P({},Va,{data:0}),Sm=Gn(ES),TS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wS[e])?!!n[e]:!1}function af(){return CS}var RS=P({},So,{key:function(e){if(e.key){var n=TS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?AS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(e){return e.type==="keypress"?Bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),NS=Gn(RS),DS=P({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Gn(DS),US=P({},Va,{submitter:0}),LS=Gn(US),OS=P({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),FS=Gn(OS),BS=P({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),PS=Gn(BS),IS=P({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zS=Gn(IS),HS=P({},Va,{newState:0,oldState:0,source:0}),GS=Gn(HS),VS=[9,13,27,32],rf=ma&&"CompositionEvent"in window,bo=null;ma&&"documentMode"in document&&(bo=document.documentMode);var kS=ma&&"TextEvent"in window&&!bo,bm=ma&&(!rf||bo&&8<bo&&11>=bo),Mm=" ",Em=!1;function Tm(e,n){switch(e){case"keyup":return VS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Am(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function XS(e,n){switch(e){case"compositionend":return Am(n);case"keypress":return n.which!==32?null:(Em=!0,Mm);case"textInput":return e=n.data,e===Mm&&Em?null:e;default:return null}}function WS(e,n){if(ss)return e==="compositionend"||!rf&&Tm(e,n)?(e=xm(),Fl=$u=Ga=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bm&&n.locale!=="ko"?null:n.data;default:return null}}var jS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jS[e.type]:n==="textarea"}function Cm(e,n,a,r){as?rs?rs.push(r):rs=[r]:as=r,n=Hc(n,"onChange"),0<n.length&&(a=new Il("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Mo=null,Eo=null;function qS(e){mx(e,0)}function Hl(e){var n=Ye(e);if(cm(n))return e}function Rm(e,n){if(e==="change")return n}var Nm=!1;if(ma){var sf;if(ma){var of="oninput"in document;if(!of){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),of=typeof Dm.oninput=="function"}sf=of}else sf=!1;Nm=sf&&(!document.documentMode||9<document.documentMode)}function Um(){Mo&&(Mo.detachEvent("onpropertychange",Lm),Eo=Mo=null)}function Lm(e){if(e.propertyName==="value"&&Hl(Eo)){var n=[];Cm(n,Eo,e,Ku(e)),gm(qS,n)}}function YS(e,n,a){e==="focusin"?(Um(),Mo=n,Eo=a,Mo.attachEvent("onpropertychange",Lm)):e==="focusout"&&Um()}function ZS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(Eo)}function KS(e,n){if(e==="click")return Hl(n)}function QS(e,n){if(e==="input"||e==="change")return Hl(n)}function JS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ii=typeof Object.is=="function"?Object.is:JS;function To(e,n){if(ii(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!_e.call(n,l)||!ii(e[l],n[l]))return!1}return!0}function lf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Om(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fm(e,n){var a=Om(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Om(a)}}function Bm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=lf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=lf(e.document)}return n}function cf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $S=ma&&"documentMode"in document&&11>=document.documentMode,os=null,uf=null,Ao=null,ff=!1;function Im(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ff||os==null||os!==lf(r)||(r=os,"selectionStart"in r&&cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ao&&To(Ao,r)||(Ao=r,r=Hc(uf,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=os)))}function br(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ls={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionrun:br("Transition","TransitionRun"),transitionstart:br("Transition","TransitionStart"),transitioncancel:br("Transition","TransitionCancel"),transitionend:br("Transition","TransitionEnd")},df={},zm={};ma&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Mr(e){if(df[e])return df[e];if(!ls[e])return e;var n=ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zm)return df[e]=n[a];return e}var Hm=Mr("animationend"),Gm=Mr("animationiteration"),Vm=Mr("animationstart"),ey=Mr("transitionrun"),ty=Mr("transitionstart"),ny=Mr("transitioncancel"),km=Mr("transitionend"),Xm=new Map,hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hf.push("scrollEnd");function Ni(e,n){Xm.set(e,n),ke(n,[e])}var iy=0;function ga(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Oi.identifierPrefix;var a=iy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Wm(e){if(e==null||typeof e=="string")return e;var n=null,a=Cs;if(a!==null)for(var r=0;r<a.length;r++){var l=e[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??e.default}function xa(e,n){return e=Wm(e),n=Wm(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Gl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gi=[],cs=0,pf=0;function Vl(){for(var e=cs,n=pf=cs=0;n<e;){var a=gi[n];gi[n++]=null;var r=gi[n];gi[n++]=null;var l=gi[n];gi[n++]=null;var u=gi[n];if(gi[n++]=null,r!==null&&l!==null){var x=r.pending;x===null?l.next=l:(l.next=x.next,x.next=l),r.pending=l}u!==0&&jm(a,l,u)}}function kl(e,n,a,r){gi[cs++]=e,gi[cs++]=n,gi[cs++]=a,gi[cs++]=r,pf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mf(e,n,a,r){return kl(e,n,a,r),Xl(e)}function Er(e,n){return kl(e,null,null,n),Xl(e)}function jm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&n!==null&&(l=31-ut(a),e=u.hiddenUpdates,r=e[l],r===null?e[l]=[n]:r.push(n),n.lane=a|536870912),u):null}function Xl(e){if(50<Yo)throw Yo=0,Lc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var us={};function ay(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new ay(e,n,a,r)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qm(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Wl(e,n,a,r,l,u){var x=0;if(r=e,typeof r=="function")gf(r)&&(x=1);else if(typeof r=="string")x=Ub(e,a,Ht.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case me:return e=Yn(31,a,n,l),e.elementType=me,e.lanes=u,e;case V:return Tr(a.children,l,u,n);case K:x=8,l|=24;break;case ae:return e=Yn(12,a,n,l|2),e.elementType=ae,e.lanes=u,e;case H:return e=Yn(13,a,n,l),e.elementType=H,e.lanes=u,e;case j:return e=Yn(19,a,n,l),e.elementType=j,e.lanes=u,e;case We:case z:return e=l|32,e=Yn(30,a,n,e),e.elementType=z,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ie:x=10;break e;case J:x=9;break e;case Y:x=11;break e;case te:x=14;break e;case oe:x=16,r=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(x,a,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function Tr(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function xf(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Ym(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function vf(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zm=new WeakMap;function xi(e,n){if(typeof e=="object"&&e!==null){var a=Zm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ve(n)},Zm.set(e,n),n)}return{value:e,source:n,stack:ve(n)}}var fs=[],ds=0,jl=null,wo=0,vi=[],_i=0,ka=null,ji=1,qi="";function _a(e,n){fs[ds++]=wo,fs[ds++]=jl,jl=e,wo=n}function Km(e,n,a){vi[_i++]=ji,vi[_i++]=qi,vi[_i++]=ka,ka=e;var r=ji;e=qi;var l=32-ut(r)-1;r&=~(1<<l),a+=1;var u=32-ut(n)+l;if(30<u){var x=l-l%5;u=(r&(1<<x)-1).toString(32),r>>=x,l-=x,ji=1<<32-ut(n)+l|a<<l|r,qi=u+e}else ji=1<<u|a<<l|r,qi=e}function ql(e){e.return!==null&&(_a(e,1),Km(e,1,0))}function _f(e){for(;e===jl;)jl=fs[--ds],fs[ds]=null,wo=fs[--ds],fs[ds]=null;for(;e===ka;)ka=vi[--_i],vi[_i]=null,qi=vi[--_i],vi[_i]=null,ji=vi[--_i],vi[_i]=null}function Qm(e,n){vi[_i++]=ji,vi[_i++]=qi,vi[_i++]=ka,ji=n.id,qi=n.overflow,ka=e}var Mn=null,nn=null,Tt=!1,Xa=null,Si=!1,Sf=Error(s(519));function Wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(xi(n,e)),Sf}function Jm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[A]=e,n[k]=r,a){case"dialog":Dt("cancel",n),Dt("close",n);break;case"iframe":case"object":case"embed":Dt("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Dt(Ko[a],n);break;case"source":Dt("error",n);break;case"img":case"image":case"link":Dt("error",n),Dt("load",n);break;case"details":Dt("toggle",n);break;case"input":Dt("invalid",n),um(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Dt("invalid",n);break;case"textarea":Dt("invalid",n),dm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||_x(n.textContent,a)?(r.popover!=null&&(Dt("beforetoggle",n),Dt("toggle",n)),r.onScroll!=null&&Dt("scroll",n),r.onScrollEnd!=null&&Dt("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Wa(e,!0)}function Yl(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Mn=Mn.return}}function hs(e){if(e!==Mn)return!1;if(!Tt)return Yl(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kd(e.type,e.memoizedProps)),a=!a),a&&nn&&Wa(e),Yl(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=Ix(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));nn=Ix(e)}else n===27?(n=nn,or(e.type)?(e=rh,rh=null,nn=e):nn=n):nn=Mn?bi(e.stateNode.nextSibling):null;return!0}function Ar(){nn=Mn=null,Tt=!1}function yf(){var e=Xa;return e!==null&&(Qn===null?Qn=e:Qn.push.apply(Qn,e),Xa=null),e}function Co(e){Xa===null?Xa=[e]:Xa.push(e)}var bf=yt(null),wr=null,Sa=null;function ja(e,n,a){st(bf,n._currentValue),n._currentValue=a}function ya(e){e._currentValue=bf.current,it(bf)}function Zl(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Mf(e,n,a,r){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var x=l.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=l;for(var I=0;I<n.length;I++)if(w.context===n[I]){u.lanes|=a,w=u.alternate,w!==null&&(w.lanes|=a),Zl(u.return,a,e),r||(x=null);break e}u=w.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(s(341));x.lanes|=a,u=x.alternate,u!==null&&(u.lanes|=a),Zl(x,a,e),x=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,x=l.alternate,x!==null&&(x.lanes|=a),Zl(l.return,a,e),x=l.child,x=x!==null?x.sibling:null):x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Cr(e,n,a,r){e=null;for(var l=n,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=l.type;ii(l.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(l===ct.current){if(x=l.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Is):e=[Is])}l=l.return}return e!==null&&Mf(n,e,a,r),n.flags|=262144,e!==null}function Kl(e){for(e=e.firstContext;e!==null;){if(!ii(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rr(e){wr=e,Sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return $m(wr,e)}function Ql(e,n){return wr===null&&Rr(e),$m(e,n)}function $m(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Sa===null){if(e===null)throw Error(s(308));Sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Sa=Sa.next=n;return a}var ry=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sy=o.unstable_scheduleCallback,oy=o.unstable_NormalPriority,pn={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new ry,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&sy(oy,function(){e.controller.abort()})}function e0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var No=null;function ly(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Do=null,Tf=0,Nr=0,ps=null;function cy(e,n){if(Do===null){var a=Do=[];Tf=0,Nr=Gd(),ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Tf++,n.then(t0,t0),n}function t0(){if(--Tf===0&&(No=null,Do!==null)){ps!==null&&(ps.status="fulfilled");var e=Do;Do=null,Nr=0,ps=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function uy(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var n0=Se.S;Se.S=function(e,n){if(Yg=Ie(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cy(e,n),No!==null)for(var a=Us;a!==null;)e0(a,No),a=a.next;if(a=e.types,a!==null){for(var r=Us;r!==null;)e0(r,a),r=r.next;if(Nr!==0){r=No,r===null&&(r=No=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}n0!==null&&n0(e,n)};var Dr=yt(null);function Af(){var e=Dr.current;return e!==null?e:en.pooledCache}function Jl(e,n){n===null?st(Dr,Dr.current):st(Dr,n.pool)}function i0(){var e=Af();return e===null?null:{parent:pn._currentValue,pool:e}}var ms=Error(s(460)),wf=Error(s(474)),$l=Error(s(542)),ec={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function r0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,o0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,o0(e),e}throw Lr=n,ms}}function Ur(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Lr=a,ms):a}}var Lr=null;function s0(){if(Lr===null)throw Error(s(459));var e=Lr;return Lr=null,e}function o0(e){if(e===ms||e===$l)throw Error(s(483))}var gs=null,Uo=0;function tc(e){var n=Uo;return Uo+=1,gs===null&&(gs=[]),r0(gs,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nc(e,n){throw n.$$typeof===T?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function l0(e){function n(ee,X){if(e){var se=ee.deletions;se===null?(ee.deletions=[X],ee.flags|=16):se.push(X)}}function a(ee,X){if(!e)return null;for(;X!==null;)n(ee,X),X=X.sibling;return null}function r(ee){for(var X=new Map;ee!==null;)ee.key===null?X.set(ee.index,ee):X.set(ee.key,ee),ee=ee.sibling;return X}function l(ee,X){return ee=va(ee,X),ee.index=0,ee.sibling=null,ee}function u(ee,X,se){return ee.index=se,e?(se=ee.alternate,se!==null?(se=se.index,se<X?(ee.flags|=2,X):se):(ee.flags|=134217730,X)):(ee.flags|=1048576,X)}function x(ee){return e&&ee.alternate===null&&(ee.flags|=134217730),ee}function w(ee,X,se,be){return X===null||X.tag!==6?(X=xf(se,ee.mode,be),X.return=ee,X):(X=l(X,se),X.return=ee,X)}function I(ee,X,se,be){var Ze=se.type;return Ze===V?(ee=fe(ee,X,se.props.children,be,se.key),qa(ee,se),ee):X!==null&&(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===oe&&Ur(Ze)===X.type)?(X=l(X,se.props),qa(X,se),X.return=ee,X):(X=Wl(se.type,se.key,se.props,null,ee.mode,be),qa(X,se),X.return=ee,X)}function ne(ee,X,se,be){return X===null||X.tag!==4||X.stateNode.containerInfo!==se.containerInfo||X.stateNode.implementation!==se.implementation?(X=vf(se,ee.mode,be),X.return=ee,X):(X=l(X,se.children||[]),X.return=ee,X)}function fe(ee,X,se,be,Ze){return X===null||X.tag!==7?(X=Tr(se,ee.mode,be,Ze),X.return=ee,X):(X=l(X,se),X.return=ee,X)}function Me(ee,X,se){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=xf(""+X,ee.mode,se),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case F:return se=Wl(X.type,X.key,X.props,null,ee.mode,se),qa(se,X),se.return=ee,se;case B:return X=vf(X,ee.mode,se),X.return=ee,X;case oe:return X=Ur(X),Me(ee,X,se)}if(Pe(X)||Z(X))return X=Tr(X,ee.mode,se,null),X.return=ee,X;if(typeof X.then=="function")return Me(ee,tc(X),se);if(X.$$typeof===ie)return Me(ee,Ql(ee,X),se);nc(ee,X)}return null}function Q(ee,X,se,be){var Ze=X!==null?X.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return Ze!==null?null:w(ee,X,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case F:return se.key===Ze?I(ee,X,se,be):null;case B:return se.key===Ze?ne(ee,X,se,be):null;case oe:return se=Ur(se),Q(ee,X,se,be)}if(Pe(se)||Z(se))return Ze!==null?null:fe(ee,X,se,be,null);if(typeof se.then=="function")return Q(ee,X,tc(se),be);if(se.$$typeof===ie)return Q(ee,X,Ql(ee,se),be);nc(ee,se)}return null}function ue(ee,X,se,be,Ze){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ee=ee.get(se)||null,w(X,ee,""+be,Ze);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case F:return ee=ee.get(be.key===null?se:be.key)||null,I(X,ee,be,Ze);case B:return ee=ee.get(be.key===null?se:be.key)||null,ne(X,ee,be,Ze);case oe:return be=Ur(be),ue(ee,X,se,be,Ze)}if(Pe(be)||Z(be))return ee=ee.get(se)||null,fe(X,ee,be,Ze,null);if(typeof be.then=="function")return ue(ee,X,se,tc(be),Ze);if(be.$$typeof===ie)return ue(ee,X,se,Ql(X,be),Ze);nc(X,be)}return null}function Be(ee,X,se,be){for(var Ze=null,Ot=null,at=X,lt=X=0,xn=null;at!==null&&lt<se.length;lt++){at.index>lt?(xn=at,at=null):xn=at.sibling;var It=Q(ee,at,se[lt],be);if(It===null){at===null&&(at=xn);break}e&&at&&It.alternate===null&&n(ee,at),X=u(It,X,lt),Ot===null?Ze=It:Ot.sibling=It,Ot=It,at=xn}if(lt===se.length)return a(ee,at),Tt&&_a(ee,lt),Ze;if(at===null){for(;lt<se.length;lt++)at=Me(ee,se[lt],be),at!==null&&(X=u(at,X,lt),Ot===null?Ze=at:Ot.sibling=at,Ot=at);return Tt&&_a(ee,lt),Ze}for(at=r(at);lt<se.length;lt++)xn=ue(at,ee,lt,se[lt],be),xn!==null&&(e&&(It=xn.alternate,It!==null&&at.delete(It.key===null?lt:It.key)),X=u(xn,X,lt),Ot===null?Ze=xn:Ot.sibling=xn,Ot=xn);return e&&at.forEach(function(dr){return n(ee,dr)}),Tt&&_a(ee,lt),Ze}function $e(ee,X,se,be){if(se==null)throw Error(s(151));for(var Ze=null,Ot=null,at=X,lt=X=0,xn=null,It=se.next();at!==null&&!It.done;lt++,It=se.next()){at.index>lt?(xn=at,at=null):xn=at.sibling;var dr=Q(ee,at,It.value,be);if(dr===null){at===null&&(at=xn);break}e&&at&&dr.alternate===null&&n(ee,at),X=u(dr,X,lt),Ot===null?Ze=dr:Ot.sibling=dr,Ot=dr,at=xn}if(It.done)return a(ee,at),Tt&&_a(ee,lt),Ze;if(at===null){for(;!It.done;lt++,It=se.next())It=Me(ee,It.value,be),It!==null&&(X=u(It,X,lt),Ot===null?Ze=It:Ot.sibling=It,Ot=It);return Tt&&_a(ee,lt),Ze}for(at=r(at);!It.done;lt++,It=se.next())It=ue(at,ee,lt,It.value,be),It!==null&&(e&&(xn=It.alternate,xn!==null&&at.delete(xn.key===null?lt:xn.key)),X=u(It,X,lt),Ot===null?Ze=It:Ot.sibling=It,Ot=It);return e&&at.forEach(function(Xb){return n(ee,Xb)}),Tt&&_a(ee,lt),Ze}function St(ee,X,se,be){if(typeof se=="object"&&se!==null&&se.type===V&&se.key===null&&se.props.ref===void 0&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case F:e:{for(var Ze=se.key;X!==null;){if(X.key===Ze){if(Ze=se.type,Ze===V){if(X.tag===7){a(ee,X.sibling),be=l(X,se.props.children),qa(be,se),be.return=ee,ee=be;break e}}else if(X.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===oe&&Ur(Ze)===X.type){a(ee,X.sibling),be=l(X,se.props),qa(be,se),be.return=ee,ee=be;break e}a(ee,X);break}else n(ee,X);X=X.sibling}se.type===V?(be=Tr(se.props.children,ee.mode,be,se.key),qa(be,se),be.return=ee,ee=be):(be=Wl(se.type,se.key,se.props,null,ee.mode,be),qa(be,se),be.return=ee,ee=be)}return x(ee);case B:e:{for(Ze=se.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===se.containerInfo&&X.stateNode.implementation===se.implementation){a(ee,X.sibling),be=l(X,se.children||[]),be.return=ee,ee=be;break e}else{a(ee,X);break}else n(ee,X);X=X.sibling}be=vf(se,ee.mode,be),be.return=ee,ee=be}return x(ee);case oe:return se=Ur(se),St(ee,X,se,be)}if(Pe(se))return Be(ee,X,se,be);if(Z(se)){if(Ze=Z(se),typeof Ze!="function")throw Error(s(150));return se=Ze.call(se),$e(ee,X,se,be)}if(typeof se.then=="function")return St(ee,X,tc(se),be);if(se.$$typeof===ie)return St(ee,X,Ql(ee,se),be);nc(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,X!==null&&X.tag===6?(a(ee,X.sibling),be=l(X,se),be.return=ee,ee=be):(a(ee,X),be=xf(se,ee.mode,be),be.return=ee,ee=be),x(ee)):a(ee,X)}return function(ee,X,se,be){try{Uo=0;var Ze=St(ee,X,se,be);return gs=null,Ze}catch(at){if(at===ms||at===$l)throw at;var Ot=Yn(29,at,null,ee.mode);return Ot.lanes=be,Ot.return=ee,Ot}finally{}}}var Or=l0(!0),c0=l0(!1),Ya=!1;function Cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ka(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Xt&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Xl(e),jm(e,null,a),n}return kl(e,r,n,a),Xl(e)}function Lo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,po(e,a)}}function Nf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=x:u=u.next=x,a=a.next}while(a!==null);u===null?l=u=n:u=u.next=n}else l=u=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Df=!1;function Oo(){if(Df){var e=ps;if(e!==null)throw e}}function Fo(e,n,a,r){Df=!1;var l=e.updateQueue;Ya=!1;var u=l.firstBaseUpdate,x=l.lastBaseUpdate,w=l.shared.pending;if(w!==null){l.shared.pending=null;var I=w,ne=I.next;I.next=null,x===null?u=ne:x.next=ne,x=I;var fe=e.alternate;fe!==null&&(fe=fe.updateQueue,w=fe.lastBaseUpdate,w!==x&&(w===null?fe.firstBaseUpdate=ne:w.next=ne,fe.lastBaseUpdate=I))}if(u!==null){var Me=l.baseState;x=0,fe=ne=I=null,w=u;do{var Q=w.lane&-536870913,ue=Q!==w.lane;if(ue?(Lt&Q)===Q:(r&Q)===Q){Q!==0&&Q===Nr&&(Df=!0),fe!==null&&(fe=fe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Be=e,$e=w;Q=n;var St=a;switch($e.tag){case 1:if(Be=$e.payload,typeof Be=="function"){Me=Be.call(St,Me,Q);break e}Me=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=$e.payload,Q=typeof Be=="function"?Be.call(St,Me,Q):Be,Q==null)break e;Me=P({},Me,Q);break e;case 2:Ya=!0}}Q=w.callback,Q!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=l.callbacks,ue===null?l.callbacks=[Q]:ue.push(Q))}else ue={lane:Q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},fe===null?(ne=fe=ue,I=Me):fe=fe.next=ue,x|=Q;if(w=w.next,w===null){if(w=l.shared.pending,w===null)break;ue=w,w=ue.next,ue.next=null,l.lastBaseUpdate=ue,l.shared.pending=null}}while(!0);fe===null&&(I=Me),l.baseState=I,l.firstBaseUpdate=ne,l.lastBaseUpdate=fe,u===null&&(l.shared.lanes=0),ir|=x,e.lanes=x,e.memoizedState=Me}}function u0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function f0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)u0(a[e],n)}var Qa=yt(null),ic=yt(0);function d0(e,n){e=Aa,st(ic,e),st(Qa,n),Aa=e|n.baseLanes}function Uf(){st(ic,Aa),st(Qa,Qa.current)}function Lf(){Aa=ic.current,it(Qa),it(ic)}var Cn=yt(null),On=null;function Ja(e){var n=e.alternate;st(Rn,Rn.current&1),st(Cn,e),On===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(On=e)}function Of(e){st(Rn,Rn.current),st(Cn,e),On===null&&(On=e)}function h0(e){e.tag===22?(st(Rn,Rn.current),st(Cn,e),On===null&&(On=e)):$a()}function $a(){st(Rn,Rn.current),st(Cn,Cn.current)}function ai(e){it(Cn),On===e&&(On=null),it(Rn)}var Rn=yt(0);function Bo(e,n){st(Cn,Cn.current),st(Rn,n)}function Ff(e){it(Rn),it(Cn),On===e&&(On=null)}function ac(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ba=0,_t=null,$t=null,mn=null,rc=!1,xs=!1,Fr=!1,sc=0,Po=0,vs=null,fy=0;function cn(){throw Error(s(321))}function Bf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ii(e[a],n[a]))return!1;return!0}function Pf(e,n,a,r,l,u){return ba=u,_t=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Se.H=e===null||e.memoizedState===null?K0:Q0,Fr=!1,u=a(r,l),Fr=!1,xs&&(u=m0(n,a,r,l)),p0(e),u}function p0(e){Se.H=hc;var n=$t!==null&&$t.next!==null;if(ba=0,mn=$t=_t=null,rc=!1,Po=0,vs=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&Kl(e)&&(gn=!0))}function m0(e,n,a,r){_t=e;var l=0;do{if(xs&&(vs=null),Po=0,xs=!1,25<=l)throw Error(s(301));if(l+=1,mn=$t=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Se.H=_y,u=n(a,r)}while(xs);return u}function dy(){var e=Se.H,n=e.useState()[0];return n=typeof n.then=="function"?Io(n):n,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(_t.flags|=1024),n}function If(){var e=sc!==0;return sc=0,e}function zf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hf(e){if(rc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rc=!1}ba=0,mn=$t=_t=null,xs=!1,Po=sc=0,vs=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?_t.memoizedState=mn=e:mn=mn.next=e,mn}function dn(){if($t===null){var e=_t.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var n=mn===null?_t.memoizedState:mn.next;if(n!==null)mn=n,$t=e;else{if(e===null)throw _t.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},mn===null?_t.memoizedState=mn=e:mn=mn.next=e}return mn}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var n=Po;return Po+=1,vs===null&&(vs=[]),e=r0(vs,e,n),n=_t,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,Se.H=n===null||n.memoizedState===null?K0:Q0),e}function lc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Io(e);if(e.$$typeof===xe)return;if(e.$$typeof===ie)return wn(e)}throw Error(s(438,String(e)))}function Gf(e){var n=null,a=_t.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=_t.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=oc(),_t.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=je;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function cc(e){var n=dn();return Vf(n,$t,e)}function Vf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=e.baseQueue,u=r.pending;if(u!==null){if(l!==null){var x=l.next;l.next=u.next,u.next=x}n.baseQueue=l=u,r.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{n=l.next;var w=x=null,I=null,ne=n,fe=!1;do{var Me=ne.lane&-536870913;if(Me!==ne.lane?(Lt&Me)===Me:(ba&Me)===Me){var Q=ne.revertLane;if(Q===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Me===Nr&&(fe=!0);else if((ba&Q)===Q){ne=ne.next,Q===Nr&&(fe=!0);continue}else Me={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},I===null?(w=I=Me,x=u):I=I.next=Me,_t.lanes|=Q,ir|=Q;Me=ne.action,Fr&&a(u,Me),u=ne.hasEagerState?ne.eagerState:a(u,Me)}else Q={lane:Me,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},I===null?(w=I=Q,x=u):I=I.next=Q,_t.lanes|=Me,ir|=Me;ne=ne.next}while(ne!==null&&ne!==n);if(I===null?x=u:I.next=w,!ii(u,e.memoizedState)&&(gn=!0,fe&&(a=ps,a!==null)))throw a;e.memoizedState=u,e.baseState=x,e.baseQueue=I,r.lastRenderedState=u}return l===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function kf(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,l=a.pending,u=n.memoizedState;if(l!==null){a.pending=null;var x=l=l.next;do u=e(u,x.action),x=x.next;while(x!==l);ii(u,n.memoizedState)||(gn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function g0(e,n,a){var r=_t,l=dn(),u=Tt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ii(($t||l).memoizedState,a);if(x&&(l.memoizedState=a,gn=!0),l=l.queue,jf(_0.bind(null,r,l,e),[e]),e=l.getSnapshot!==n||x||mn!==null&&(mn.memoizedState.tag&1)!==0,_s(e?9:8,{destroy:void 0},v0.bind(null,r,l,a,n),null),e){if(r.flags|=2048,en===null)throw Error(s(349));u||(ba&127)!==0||x0(r,n,a)}return a}function x0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_t.updateQueue,n===null?(n=oc(),_t.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function v0(e,n,a,r){n.value=a,n.getSnapshot=r,S0(n)&&y0(e)}function _0(e,n,a){return a(function(){S0(n)&&y0(e)})}function S0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ii(e,a)}catch{return!0}}function y0(e){var n=Er(e,2);n!==null&&Jn(n,e,2)}function Xf(e){var n=Vn();if(typeof e=="function"){var a=e;if(e=a(),Fr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function b0(e,n,a,r){return e.baseState=a,Vf(e,$t,typeof r=="function"?r:Ma)}function hy(e,n,a,r,l){if(dc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};Se.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,M0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function M0(e,n){var a=n.action,r=n.payload,l=e.state;if(n.isTransition){var u=Se.T,x={};x.types=u!==null?u.types:null,Se.T=x;try{var w=a(l,r),I=Se.S;I!==null&&I(x,w),E0(e,n,w)}catch(ne){Wf(e,n,ne)}finally{u!==null&&x.types!==null&&(u.types=x.types),Se.T=u}}else try{u=a(l,r),E0(e,n,u)}catch(ne){Wf(e,n,ne)}}function E0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){T0(e,n,r)},function(r){return Wf(e,n,r)}):T0(e,n,a)}function T0(e,n,a){n.status="fulfilled",n.value=a,A0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,M0(e,a)))}function Wf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,A0(n),n=n.next;while(n!==r)}e.action=null}function A0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function w0(e,n){return n}function C0(e,n){if(Tt){var a=en.formState;if(a!==null){e:{var r=_t;if(Tt){if(nn){t:{for(var l=nn,u=Si;l.nodeType!==8;){if(!u){l=null;break t}if(l=bi(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){nn=bi(l.nextSibling),r=l.data==="F!";break e}}Wa(r)}r=!1}r&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:w0,lastRenderedState:n},a.queue=r,a=q0.bind(null,_t,r),r.dispatch=a,r=Xf(!1),u=Qf.bind(null,_t,!1,r.queue),r=Vn(),l={state:n,dispatch:null,action:e,pending:null},r.queue=l,a=hy.bind(null,_t,l,u,a),l.dispatch=a,r.memoizedState=e,[n,a,!1]}function R0(e){var n=dn();return N0(n,$t,e)}function N0(e,n,a){if(n=Vf(e,n,w0)[0],e=cc(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Io(n)}catch(x){throw x===ms?$l:x}else r=n;n=dn();var l=n.queue,u=l.dispatch;return a!==n.memoizedState&&(_t.flags|=2048,_s(9,{destroy:void 0},py.bind(null,l,a),null)),[r,u,e]}function py(e,n){e.action=n}function D0(e){var n=dn(),a=$t;if(a!==null)return N0(n,a,e);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function _s(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=_t.updateQueue,n===null&&(n=oc(),_t.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function U0(){return dn().memoizedState}function uc(e,n,a,r){var l=Vn();_t.flags|=e,l.memoizedState=_s(1|n,{destroy:void 0},a,r===void 0?null:r)}function fc(e,n,a,r){var l=dn();r=r===void 0?null:r;var u=l.memoizedState.inst;$t!==null&&r!==null&&Bf(r,$t.memoizedState.deps)?l.memoizedState=_s(n,u,a,r):(_t.flags|=e,l.memoizedState=_s(1|n,u,a,r))}function L0(e,n){uc(8390656,8,e,n)}function jf(e,n){fc(2048,8,e,n)}function my(e){_t.flags|=4;var n=_t.updateQueue;if(n===null)n=oc(),_t.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function O0(e){var n=dn().memoizedState;return my({ref:n,nextImpl:e}),function(){if((Xt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function F0(e,n){return fc(4,2,e,n)}function B0(e,n){return fc(4,4,e,n)}function P0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function I0(e,n,a){a=a!=null?a.concat([e]):null,fc(4,4,P0.bind(null,n,e),a)}function qf(){}function z0(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function H0(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bf(n,r[1]))return r[0];if(r=e(),Fr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r}function Yf(e,n,a){return a===void 0||(ba&1073741824)!==0&&(Lt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Kg(),_t.lanes|=e,ir|=e,a)}function G0(e,n,a,r){return ii(a,n)?a:Qa.current!==null?(e=Yf(e,a,r),ii(e,n)||(gn=!0),e):(ba&106)===0||(ba&1073741824)!==0&&(Lt&261930)===0?(gn=!0,e.memoizedState=a):(e=Kg(),_t.lanes|=e,ir|=e,n)}function V0(e,n,a,r,l){var u=De.p;De.p=u!==0&&8>u?u:8;var x=Se.T,w={};w.types=x!==null?x.types:null,Se.T=w,Qf(e,!1,n,a);try{var I=l(),ne=Se.S;if(ne!==null&&ne(w,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var fe=uy(I,r);zo(e,n,fe,li(e))}else zo(e,n,r,li(e))}catch(Me){zo(e,n,{then:function(){},status:"rejected",reason:Me},li())}finally{De.p=u,x!==null&&w.types!==null&&(x.types=w.types),Se.T=x}}function gy(){}function Zf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var l=k0(e).queue;V0(e,l,n,Vt,a===null?gy:function(){return X0(e),a(r)})}function k0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Vt,baseState:Vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:Vt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function X0(e){var n=k0(e);n.next===null&&(n=e.alternate.memoizedState),zo(e,n.next.queue,{},li())}function Kf(){return wn(Is)}function W0(){return dn().memoizedState}function j0(){return dn().memoizedState}function xy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=li();e=Za(a);var r=Ka(n,e,a);r!==null&&(Jn(r,n,a),Lo(r,n,a)),n={cache:Ef()},e.payload=n;return}n=n.return}}function vy(e,n,a){var r=li();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dc(e)?Y0(n,a):(a=mf(e,n,a,r),a!==null&&(Jn(a,e,r),Z0(a,n,r)))}function q0(e,n,a){var r=li();zo(e,n,a,r)}function zo(e,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dc(e))Y0(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var x=n.lastRenderedState,w=u(x,a);if(l.hasEagerState=!0,l.eagerState=w,ii(w,x))return kl(e,n,l,0),en===null&&Vl(),!1}catch{}finally{}if(a=mf(e,n,l,r),a!==null)return Jn(a,e,r),Z0(a,n,r),!0}return!1}function Qf(e,n,a,r){if(r={lane:2,revertLane:Gd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(n)throw Error(s(479))}else n=mf(e,a,r,2),n!==null&&Jn(n,e,2)}function dc(e){var n=e.alternate;return e===_t||n!==null&&n===_t}function Y0(e,n){xs=rc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Z0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,po(e,a)}}var hc={readContext:wn,use:lc,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn,useEffectEvent:cn},K0={readContext:wn,use:lc,useCallback:function(e,n){return Vn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:L0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,uc(4194308,4,P0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return uc(4194308,4,e,n)},useInsertionEffect:function(e,n){uc(4,2,e,n)},useMemo:function(e,n){var a=Vn();n=n===void 0?null:n;var r=e();if(Fr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Vn();if(a!==void 0){var l=a(n);if(Fr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else l=n;return r.memoizedState=r.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},r.queue=e,e=e.dispatch=vy.bind(null,_t,e),[r.memoizedState,e]},useRef:function(e){var n=Vn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xf(e);var n=e.queue,a=q0.bind(null,_t,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qf,useDeferredValue:function(e,n){var a=Vn();return Yf(a,e,n)},useTransition:function(){var e=Xf(!1);return e=V0.bind(null,_t,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=_t,l=Vn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(Lt&127)!==0||x0(r,n,a)}l.memoizedState=a;var u={value:a,getSnapshot:n};return l.queue=u,L0(_0.bind(null,r,u,e),[e]),r.flags|=2048,_s(9,{destroy:void 0},v0.bind(null,r,u,a,n),null),a},useId:function(){var e=Vn(),n=en.identifierPrefix;if(Tt){var a=qi,r=ji;a=(r&~(1<<32-ut(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fy++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Kf,useFormState:C0,useActionState:C0,useOptimistic:function(e){var n=Vn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qf.bind(null,_t,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gf,useCacheRefresh:function(){return Vn().memoizedState=xy.bind(null,_t)},useEffectEvent:function(e){var n=Vn(),a={impl:e};return n.memoizedState=a,function(){if((Xt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Q0={readContext:wn,use:lc,useCallback:z0,useContext:wn,useEffect:jf,useImperativeHandle:I0,useInsertionEffect:F0,useLayoutEffect:B0,useMemo:H0,useReducer:cc,useRef:U0,useState:function(){return cc(Ma)},useDebugValue:qf,useDeferredValue:function(e,n){var a=dn();return G0(a,$t.memoizedState,e,n)},useTransition:function(){var e=cc(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Kf,useFormState:R0,useActionState:R0,useOptimistic:function(e,n){var a=dn();return b0(a,$t,e,n)},useMemoCache:Gf,useCacheRefresh:j0,useEffectEvent:O0},_y={readContext:wn,use:lc,useCallback:z0,useContext:wn,useEffect:jf,useImperativeHandle:I0,useInsertionEffect:F0,useLayoutEffect:B0,useMemo:H0,useReducer:kf,useRef:U0,useState:function(){return kf(Ma)},useDebugValue:qf,useDeferredValue:function(e,n){var a=dn();return $t===null?Yf(a,e,n):G0(a,$t.memoizedState,e,n)},useTransition:function(){var e=kf(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Io(e),n]},useSyncExternalStore:g0,useId:W0,useHostTransitionStatus:Kf,useFormState:D0,useActionState:D0,useOptimistic:function(e,n){var a=dn();return $t!==null?b0(a,$t,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gf,useCacheRefresh:j0,useEffectEvent:O0};function Jf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $f={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=li(),l=Za(r);l.payload=n,a!=null&&(l.callback=a),n=Ka(e,l,r),n!==null&&(Jn(n,e,r),Lo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=li(),l=Za(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ka(e,l,r),n!==null&&(Jn(n,e,r),Lo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=li(),r=Za(a);r.tag=2,n!=null&&(r.callback=n),n=Ka(e,r,a),n!==null&&(Jn(n,e,a),Lo(n,e,a))}};function J0(e,n,a,r,l,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,x):n.prototype&&n.prototype.isPureReactComponent?!To(a,r)||!To(l,u):!0}function $0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&$f.enqueueReplaceState(n,n.state,null)}function Br(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function eg(e){Gl(e)}function tg(e){console.error(e)}function ng(e){Gl(e)}function pc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function ig(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ed(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){pc(e,n)},a}function ag(e){return e=Za(e),e.tag=3,e}function rg(e,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;e.payload=function(){return l(u)},e.callback=function(){ig(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){ig(n,a,r),typeof l!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Sy(e,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Cr(n,a,l,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return On===null?Fc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Id(e,r,l)),!1;case 22:return a.flags|=65536,r===ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Id(e,r,l)),!1}throw Error(s(435,a.tag))}return Id(e,r,l),Fc(),!1}if(Tt)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==Sf&&(e=Error(s(422),{cause:r}),Co(xi(e,a)))):(r!==Sf&&(n=Error(s(423),{cause:r}),Co(xi(n,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,r=xi(r,a),l=ed(e.stateNode,r,l),Nf(e,l),un!==4&&(un=2)),!1;var u=Error(s(520),{cause:r});if(u=xi(u,a),qo===null?qo=[u]:qo.push(u),un!==4&&(un=2),n===null)return!0;r=xi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=ed(a.stateNode,r,e),Nf(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=ag(l),rg(l,e,a,r),Nf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var td=Error(s(461)),gn=!1;function Sn(e,n,a,r){n.child=e===null?c0(n,null,a,r):Or(n,e.child,a,r)}function sg(e,n,a,r,l){a=a.render;var u=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return Rr(n),r=Pf(e,n,a,x,u,l),w=If(),e!==null&&!gn?(zf(e,n,l),Ea(e,n,l)):(Tt&&w&&ql(n),n.flags|=1,Sn(e,n,r,l),n.child)}function og(e,n,a,r,l){if(e===null){var u=a.type;return typeof u=="function"&&!gf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,lg(e,n,u,r,l)):(e=Wl(a.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!cd(e,l)){var x=u.memoizedProps;if(a=a.compare,a=a!==null?a:To,a(x,r)&&e.ref===n.ref)return Ea(e,n,l)}return n.flags|=1,e=va(u,r),e.ref=n.ref,e.return=n,n.child=e}function lg(e,n,a,r,l){if(e!==null){var u=e.memoizedProps;if(To(u,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=u,cd(e,l))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,Ea(e,n,l)}return nd(e,n,a,r,l)}function cg(e,n,a,r){var l=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,n.child=null;return ug(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Jl(n,u!==null?u.cachePool:null),u!==null?d0(n,u):Uf(),h0(n);else return r=n.lanes=536870912,ug(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(Jl(n,u.cachePool),d0(n,u),$a(),n.memoizedState=null):(e!==null&&Jl(n,null),Uf(),$a());return Sn(e,n,l,a),n.child}function Ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ug(e,n,a,r,l){var u=Af();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Jl(n,null),Uf(),h0(n),e!==null&&Cr(e,n,r,!0),n.childLanes=l,null}function mc(e,n){return n=gc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fg(e,n,a){return Or(n,e.child,null,a),e=mc(n,n.pendingProps),e.flags|=2,ai(n),n.memoizedState=null,e}function yy(e,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(r.mode==="hidden")return e=mc(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ho(null,e);if(Of(n),(e=nn)?(e=Px(e,Si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:ji,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(e),a.return=n,n.child=a,Mn=n,nn=null)):e=null,e===null)throw Wa(n);return n.lanes=536870912,null}return mc(n,r)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Of(n),l)if(n.flags&256)n.flags&=-257,n=fg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||Cr(e,n,a,!1),l=(a&e.childLanes)!==0,gn||l){if(Qa.current===null){if(r=en,r!==null&&(x=mo(r,a),x!==0&&x!==u.retryLane))throw u.retryLane=x,Er(e,x),Jn(r,e,x),td;Fc()}n=fg(e,n,a)}else e=u.treeContext,nn=bi(x.nextSibling),Mn=n,Tt=!0,Xa=null,Si=!1,e!==null&&Qm(n,e),n=mc(n,r),n.flags|=134221824;return n}return e=va(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ss(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nd(e,n,a,r,l){return Rr(n),a=Pf(e,n,a,r,void 0,l),r=If(),e!==null&&!gn?(zf(e,n,l),Ea(e,n,l)):(Tt&&r&&ql(n),n.flags|=1,Sn(e,n,a,l),n.child)}function dg(e,n,a,r,l,u){return Rr(n),n.updateQueue=null,a=m0(n,r,a,l),p0(e),r=If(),e!==null&&!gn?(zf(e,n,u),Ea(e,n,u)):(Tt&&r&&ql(n),n.flags|=1,Sn(e,n,a,u),n.child)}function hg(e,n,a,r,l){if(Rr(n),n.stateNode===null){var u=us,x=a.contextType;typeof x=="object"&&x!==null&&(u=wn(x)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=$f,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},Cf(n),x=a.contextType,u.context=typeof x=="object"&&x!==null?wn(x):us,u.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Jf(n,a,x,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&$f.enqueueReplaceState(u,u.state,null),Fo(n,r,u,l),Oo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var w=n.memoizedProps,I=Br(a,w);u.props=I;var ne=u.context,fe=a.contextType;x=us,typeof fe=="object"&&fe!==null&&(x=wn(fe));var Me=a.getDerivedStateFromProps;fe=typeof Me=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,fe||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||ne!==x)&&$0(n,u,r,x),Ya=!1;var Q=n.memoizedState;u.state=Q,Fo(n,r,u,l),Oo(),ne=n.memoizedState,w||Q!==ne||Ya?(typeof Me=="function"&&(Jf(n,a,Me,r),ne=n.memoizedState),(I=Ya||J0(n,a,I,r,Q,ne,x))?(fe||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),u.props=r,u.state=ne,u.context=x,r=I):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Rf(e,n),x=n.memoizedProps,fe=Br(a,x),u.props=fe,Me=n.pendingProps,Q=u.context,ne=a.contextType,I=us,typeof ne=="object"&&ne!==null&&(I=wn(ne)),w=a.getDerivedStateFromProps,(ne=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==Me||Q!==I)&&$0(n,u,r,I),Ya=!1,Q=n.memoizedState,u.state=Q,Fo(n,r,u,l),Oo();var ue=n.memoizedState;x!==Me||Q!==ue||Ya||e!==null&&e.dependencies!==null&&Kl(e.dependencies)?(typeof w=="function"&&(Jf(n,a,w,r),ue=n.memoizedState),(fe=Ya||J0(n,a,fe,r,Q,ue,I)||e!==null&&e.dependencies!==null&&Kl(e.dependencies))?(ne||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,ue,I),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,ue,I)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ue),u.props=r,u.state=ue,u.context=I,r=fe):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&Q===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,Ss(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Or(n,e.child,null,l),n.child=Or(n,null,a,l)):Sn(e,n,a,l),n.memoizedState=u.state,e=n.child):e=Ea(e,n,l),e}function pg(e,n,a,r){return Ar(),n.flags|=256,Sn(e,n,a,r),n.child}var id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ad(e){return{baseLanes:e,cachePool:i0()}}function rd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function mg(e,n,a){var r=n.pendingProps,l=!1,u=(n.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(Rn.current&2)!==0),x&&(l=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(l?Ja(n):$a(),(e=nn)?(e=Px(e,Si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:ji,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=Ym(e),a.return=n,n.child=a,Mn=n,nn=null)):e=null,e===null)throw Wa(n);return ah(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,l?($a(),l=n.mode,u=gc({mode:"hidden",children:u},l),r=Tr(r,l,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=ad(a),r.childLanes=rd(e,x,a),n.memoizedState=id,Ho(null,r)):(Ja(n),sd(n,u))}var w=e.memoizedState;if(w!==null){var I=w.dehydrated;if(I!==null)return by(e,n,u,x,r,I,w,a)}return l?($a(),l=r.fallback,u=n.mode,w=e.child,I=w.sibling,r=va(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,I!==null?l=va(I,l):(l=Tr(l,u,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Ho(null,r),r=n.child,l=e.child.memoizedState,l===null?l=ad(a):(u=l.cachePool,u!==null?(w=pn._currentValue,u=u.parent!==w?{parent:w,pool:w}:u):u=i0(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=rd(e,x,a),n.memoizedState=id,Ho(e.child,r)):(Ja(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function sd(e,n){return n=gc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function gc(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function xc(e,n,a){return Or(n,e.child,null,a),e=sd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function by(e,n,a,r,l,u,x,w){if(a)return n.flags&256?(Ja(n),n.flags&=-257,xc(e,n,w)):n.memoizedState!==null?($a(),n.child=e.child,n.flags|=128,null):($a(),u=l.fallback,x=n.mode,l=gc({mode:"visible",children:l.children},x),u=Tr(u,x,w,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Or(n,e.child,null,w),l=n.child,l.memoizedState=ad(w),l.childLanes=rd(e,r,w),n.memoizedState=id,Ho(null,l));if(Ja(n),ah(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var I=r.dgst;return r=I,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Co({value:l,source:null,stack:null})),xc(e,n,w)}if(gn||Cr(e,n,w,!1),r=(w&e.childLanes)!==0,gn||r){if(Qa.current!==null)return xc(e,n,w);if(r=en,r!==null&&(l=mo(r,w),l!==0&&l!==x.retryLane))throw x.retryLane=l,Er(e,l),Jn(r,e,l),td;return ih(u)||Fc(),xc(e,n,w)}return ih(u)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,nn=bi(u.nextSibling),Mn=n,Tt=!0,Xa=null,Si=!1,e!==null&&Qm(n,e),n=sd(n,l.children),n.flags|=134221824,n)}function gg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Zl(e.return,n,a)}function xg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&ac(a)===null&&(n=e),e=e.sibling}return n}function vc(e,n,a,r,l,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=l,x.treeForkCount=u)}function od(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function ld(e,n,a){var r=n.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var x=Rn.current;if(n.flags&128)return Bo(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,Bo(n,x),l==="backwards"&&e!==null?(od(e),Sn(e,n,r,a),od(e)):Sn(e,n,r,a),r=Tt?wo:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gg(e,a,n);else if(e.tag===19)gg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":a=xg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,od(n)),vc(n,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&ac(e)===null){n.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}vc(n,!0,a,null,u,r);break;case"together":vc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=xg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),vc(n,!1,l,a,u,r)}return n.child}function vg(e,n,a){var r=n.pendingProps;return ja(n,n.type,r.value),Sn(e,n,r.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ir|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Cr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function cd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Kl(e)))}function My(e,n,a){switch(n.tag){case 3:G(n,n.stateNode.containerInfo),ja(n,pn,e.memoizedState.cache),Ar();break;case 27:case 5:ht(n);break;case 4:G(n,n.stateNode.containerInfo);break;case 10:ja(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Of(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ja(n),n.flags|=128,null;r=Cr(e,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?mg(e,n,a):(Ja(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return ld(e,n,a);if(l=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Cr(e,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return ld(e,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Bo(n,Rn.current),r)break;return null;case 22:return n.lanes=0,cg(e,n,a,n.pendingProps);case 24:ja(n,pn,e.memoizedState.cache)}return Ea(e,n,a)}function _g(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!cd(e,a)&&(n.flags&128)===0)return gn=!1,My(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,Tt&&(n.flags&1048576)!==0&&Km(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ur(n.elementType),n.type=e,typeof e=="function")gf(e)?(r=Br(e,r),n.tag=1,n=hg(null,n,e,r,a)):(n.tag=0,n=nd(null,n,e,r,a));else{if(e!=null){var l=e.$$typeof;if(l===Y){n.tag=11,n=sg(null,n,e,r,a);break e}else if(l===te){n.tag=14,n=og(null,n,e,r,a);break e}else if(l===ie){n.tag=10,n.type=e,n=vg(null,n,a);break e}}throw n=we(e)||e,Error(s(306,n,""))}}return n;case 0:return nd(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Br(r,n.pendingProps),hg(e,n,r,l,a);case 3:e:{if(G(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;l=u.element,Rf(e,n),Fo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ja(n,pn,r),r!==u.cache&&Mf(n,[pn],a,!0),Oo(),r=x.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=pg(e,n,r,a);break e}else if(r!==l){l=xi(Error(s(424)),n),Co(l),n=pg(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=bi(e.firstChild),Mn=n,Tt=!0,Xa=null,Si=!0,a=c0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ar(),r===l){n=Ea(e,n,a);break e}Sn(e,n,r,a)}n=n.child}return n;case 26:return Ss(e,n),e===null?(a=Xx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(n.stateNode=Mx(n.type,n.pendingProps,et.current,n)):n.memoizedState=Xx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ht(n),e===null&&Tt&&(r=n.stateNode=Hx(n.type,n.pendingProps,et.current),Mn=n,Si=!0,l=nn,or(n.type)?(rh=l,nn=bi(r.firstChild)):nn=l),Sn(e,n,n.pendingProps.children,a),Ss(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((l=r=nn)&&(r=xb(r,n.type,n.pendingProps,Si),r!==null?(n.stateNode=r,Mn=n,nn=bi(r.firstChild),Si=!1,l=!0):l=!1),l||Wa(n)),ht(n),l=n.type,u=n.pendingProps,x=e!==null?e.memoizedProps:null,r=u.children,Kd(l,u)?r=null:x!==null&&Kd(l,x)&&(n.flags|=32),n.memoizedState!==null&&(l=Pf(e,n,dy,null,null,a),Is._currentValue=l),Ss(e,n),Sn(e,n,r,a),n.child;case 6:return e===null&&Tt&&((e=a=nn)&&(a=vb(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Mn=n,nn=null,e=!0):e=!1),e||Wa(n)),null;case 13:return mg(e,n,a);case 4:return G(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Or(n,null,r,a):Sn(e,n,r,a),n.child;case 11:return sg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ss(e,n),Sn(e,n,r,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return vg(e,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,Rr(n),l=wn(l),r=r(l),n.flags|=1,Sn(e,n,r,a),n.child;case 14:return og(e,n,n.type,n.pendingProps,a);case 15:return lg(e,n,n.type,n.pendingProps,a);case 19:return ld(e,n,a);case 31:return yy(e,n,a);case 22:return cg(e,n,a,n.pendingProps);case 24:return Rr(n),r=wn(pn),e===null?(l=Af(),l===null&&(l=en,u=Ef(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),n.memoizedState={parent:r,cache:l},Cf(n),ja(n,pn,l)):((e.lanes&a)!==0&&(Rf(e,n),Fo(n,null,null,a),Oo()),l=e.memoizedState,u=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),ja(n,pn,r)):(r=u.cache,ja(n,pn,r),r!==l.cache&&Mf(n,[pn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Tt&&ql(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Ss(e,n),Sn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(e){e.flags|=4}function ud(e,n,a,r,l){var u;if((u=(e.mode&32)!==0)&&(u=a===null?Yx(n,r):Yx(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ex())e.flags|=8192;else throw Lr=ec,wf}else e.flags&=-16777217}function Sg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zx(n))if(ex())e.flags|=8192;else throw Lr=ec,wf}function _c(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ho():536870912,e.lanes|=n,Ts|=n)}function Go(e,n){if(!Tt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function an(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Ey(e,n,a){var r=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ya(pn),wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(hs(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yf())),an(n),null;case 26:var l=n.type,u=n.memoizedState;return e===null?(Ta(n),u!==null?(an(n),Sg(n,u)):(an(n),ud(n,l,null,r,a))):u?u!==e.memoizedState?(Ta(n),an(n),Sg(n,u)):(an(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ta(n),an(n),ud(n,l,e,r,a)),null;case 27:if(N(n),a=et.current,l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}e=Ht.current,hs(n)?Jm(n):(e=Hx(l,r,a),n.stateNode=e,Ta(n))}return an(n),n.subtreeFlags&=-33554433,null;case 5:if(N(n),l=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),n.subtreeFlags&=-33554433,null}if(u=Ht.current,hs(n))Jm(n);else{var x=Jo(et.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?x.createElement(l,{is:r.is}):x.createElement(l)}}u[A]=n,u[k]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=u;e:switch(Dn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ta(n)}}return an(n),n.subtreeFlags&=-33554433,ud(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ta(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,hs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,l=Mn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}e[A]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||_x(e.nodeValue,a)),e||Wa(n,!0)}else e=Jo(e).createTextNode(r),e[A]=n,n.stateNode=e}return an(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=hs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[A]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),e=!1}else a=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ai(n),n):(ai(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=hs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[A]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),l=!1}else l=yf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ai(n),n):(ai(n),null)}return ai(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),_c(n,n.updateQueue),an(n),null);case 4:return wt(),e===null&&Wd(n.stateNode.containerInfo),n.flags|=67108864,an(n),null;case 10:return ya(n.type),an(n),null;case 19:if(Ff(n),r=n.memoizedState,r===null)return an(n),null;if(l=(n.flags&128)!==0,u=r.rendering,u===null)if(l)Go(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=ac(e),u!==null){for(n.flags|=128,Go(r,!1),e=u.updateQueue,n.updateQueue=e,_c(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qm(a,e),a=a.sibling;return Bo(n,Rn.current&1|2),Tt&&_a(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Ie()>Dc&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304)}else{if(!l)if(e=ac(u),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,_c(n,e),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Tt)return an(n),null}else 2*Ie()-r.renderingStartTime>Dc&&a!==536870912&&(n.flags|=128,l=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,u=Rn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Tt?Bo(n,u):(a=u,st(Cn,n),st(Rn,a),On===null&&(On=n)),Tt&&_a(n,r.treeForkCount),e}return an(n),null;case 22:case 23:return ai(n),Lf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&_c(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&it(Dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ya(pn),an(n),null;case 25:return null;case 30:return n.flags|=33554432,an(n),null}throw Error(s(156,n.tag))}function Ty(e,n){switch(_f(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ya(pn),wt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return N(n),null;case 31:if(n.memoizedState!==null){if(ai(n),n.alternate===null)throw Error(s(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ai(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ff(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return wt(),null;case 10:return ya(n.type),null;case 22:case 23:return ai(n),Lf(),e!==null&&it(Dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ya(pn),null;case 25:return null;default:return null}}function yg(e,n){switch(_f(n),n.tag){case 3:ya(pn),wt();break;case 26:case 27:case 5:N(n);break;case 4:wt();break;case 31:n.memoizedState!==null&&ai(n);break;case 13:ai(n);break;case 19:Ff(n);break;case 10:ya(n.type);break;case 22:case 23:ai(n),Lf(),e!==null&&it(Dr);break;case 24:ya(pn)}}function Vo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&e)===e){r=void 0;var u=a.create,x=a.inst;r=u(),x.destroy=r}a=a.next}while(a!==l)}}catch(w){Zt(n,n.return,w)}}function er(e,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,l=n;var I=a,ne=w;try{ne()}catch(fe){Zt(l,I,fe)}}}r=r.next}while(r!==u)}}catch(fe){Zt(n,n.return,fe)}}function bg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{f0(n,a)}catch(r){Zt(e,e.return,r)}}}function Mg(e,n,a){a.props=Br(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Zt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var l=e.stateNode,u=ga(e.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=Nx(u)),r=l.ref;break;case 7:if(e.stateNode===null){var x=new ci(e);v(e.child,!1,mb,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(w){Zt(e,n,w)}}function Nn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){Zt(e,n,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Zt(e,n,l)}else a.current=null}function Sc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Bx(e.stateNode,n[a])}function Eg(e){for(var n=e.return;n!==null&&(dd(n)&&Bx(e.stateNode,n.stateNode),!fd(n));)n=n.return}function ko(e){for(var n=e.return;n!==null&&(dd(n)&&gb(e.stateNode,n.stateNode),!fd(n));)n=n.return}function fd(e){return e.tag===5||e.tag===3||e.tag===27}function dd(e){return e&&e.tag===7&&e.stateNode!==null}function hd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){Zt(e,e.return,l)}}function pd(e,n,a){try{var r=e.stateNode;Qy(r,e.type,a,n),r[k]=n}catch(l){Zt(e,e.return,l)}}function Tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&or(e.type)||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&or(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gd(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Sc(e,r),Et=!0;else if(l!==4&&(l===27&&(Sc(e,r),r=null,or(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(gd(e,n,a,r),e=e.sibling;e!==null;)gd(e,n,a,r),e=e.sibling}function yc(e,n,a,r){var l=e.tag;if(l===5||l===6)l=e.stateNode,n?a.insertBefore(l,n):a.appendChild(l),Sc(e,r),Et=!0;else if(l!==4&&(l===27&&(Sc(e,r),r=null,or(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(yc(e,n,a,r),e=e.sibling;e!==null;)yc(e,n,a,r),e=e.sibling}function Ag(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Dn(n,r,a),n[A]=e,n[k]=a}catch(u){Zt(e,e.return,u)}}var bc=!1,ri=null;function wg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(bc=!0)}var Zi=null;function Cg(){var e=Zi;return Zi=null,e}var Zn=0;function ys(e,n,a,r,l){return Zn=0,Rg(e.child,n,a,r,l)}function Rg(e,n,a,r,l){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var w=$d(x);r.push(w),w.view&&(u=!0)}else u||$d(x).view&&(u=!0);bc=!0,Cx(x,Zn===0?n:n+"_"+Zn,a),Zn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||Rg(e.child,n,a,r,l)&&(u=!0));e=e.sibling}return u}function Ki(e,n){for(;e!==null;)e.tag===5?Rx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ki(e.child,n)),e=e.sibling}function Mc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Mc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=xa(n.default,n.share),n!=="none"&&(ys(e,a,n,null,!1)||Ki(e.child,!1))}e=e.sibling}}function xd(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,l=ga(r,a),u=xa(r.default,a.paired?r.share:r.enter);u!=="none"?ys(e,l,u,null,!1)?(Mc(e),a.paired||n||Rs(e,r.onEnter)):Ki(e.child,!1):Mc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xd(e,n),e=e.sibling;else Mc(e)}function vd(e){if(ri!==null&&ri.size!==0){var n=ri;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var u=xa(a.default,a.share);if(u!=="none"&&(ys(e,r,u,null,!1)?(u=e.stateNode,l.paired=u,u.paired=l,Rs(e,a.onShare)):Ki(e.child,!1)),n.delete(r),n.size===0)break}}}vd(e)}e=e.sibling}}}function _d(e){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode),r=ri!==null?ri.get(a):void 0,l=xa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(ys(e,a,l,null,!1)?r!==void 0?(l=e.stateNode,r.paired=l,l.paired=r,ri.delete(a),Rs(e,n.onShare)):Rs(e,n.onExit):Ki(e.child,!1)),ri!==null&&vd(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)_d(e),e=e.sibling;else ri!==null&&vd(e)}function Ng(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode);n=xa(n.default,n.update),e.flags&=-5,n!=="none"&&ys(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Ng(e);e=e.sibling}}function Sd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ki(e.child,!1))}Sd(e)}e=e.sibling}}function Ec(e){if(e.tag===30)e.stateNode.paired=null,Ki(e.child,!1),Sd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ec(e),e=e.sibling;else Sd(e)}function Dg(e){for(e=e.child;e!==null;)e.tag===30?Ki(e.child,!1):(e.subtreeFlags&33554432)!==0&&Dg(e),e=e.sibling}function yd(e,n,a,r,l,u,x){for(var w=!1;n!==null;){if(n.tag===5){var I=n.stateNode;if(u!==null&&Zn<u.length){var ne=u[Zn],fe=$d(I);(ne.view||fe.view)&&(w=!0);var Me;if(Me=(e.flags&4)===0)if(fe.clip)Me=!0;else{Me=ne.rect;var Q=fe.rect;Me=Me.y!==Q.y||Me.x!==Q.x||Me.height!==Q.height||Me.width!==Q.width}Me&&(e.flags|=4),fe.abs?fe=!ne.abs:(ne=ne.rect,fe=fe.rect,fe=ne.height!==fe.height||ne.width!==fe.width),fe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Cx(I,Zn===0?a:a+"_"+Zn,l),w&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(I,Zn===0?r:r+"_"+Zn,n.memoizedProps)),Zn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:yd(e,n.child,a,r,l,u,x)&&(w=!0));n=n.sibling}return w}function Ug(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,l=ga(a,r),u=xa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var w=e.child;Zn=0,l=yd(r,w,l,l,u,x,!1),(e.flags&4)!==0&&l&&Rs(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Ug(e);e=e.sibling}}var En=!1,qt=!1,Qi=!1,bd=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,Ji=!1,Xo=!1,Tc=!1,Md=!1;function Ay(e,n,a){if(e=e.containerInfo,Yd=zs,e=Pm(e),cf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,x=l.focusNode;l=l.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break e}var w=0,I=-1,ne=-1,fe=0,Me=0,Q=e,ue=null;t:for(;;){for(var Be;Q!==r||u!==0&&Q.nodeType!==3||(I=w+u),Q!==x||l!==0&&Q.nodeType!==3||(ne=w+l),Q.nodeType===3&&(w+=Q.nodeValue.length),(Be=Q.firstChild)!==null;)ue=Q,Q=Be;for(;;){if(Q===e)break t;if(ue===r&&++fe===u&&(I=w),ue===x&&++Me===l&&(ne=w),(Be=Q.nextSibling)!==null)break;Q=ue,ue=Q.parentNode}Q=Be}r=I===-1||ne===-1?null:{start:I,end:ne}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zd={focusedElem:e,selectionRange:r},zs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(e=Tn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&_d(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&wg(e),Ac(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&_d(r),Ac(a);continue}else if(r!==null&&r.memoizedState!==null){a&&wg(e),Ac(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Tn=r):(a&&Ng(e),Ac(a))}}ri=null}function Ac(e){for(;Tn!==null;){var n=Tn,a=e,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var x=Br(n.type,l);a=u.getSnapshotBeforeUpdate(x,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(w){Zt(n,n.return,w)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)nh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":nh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ga(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=xa(l.default,l.update),l!=="none"&&ys(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function Og(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),r&4&&Vo(5,a);break;case 1:if($i(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Zt(a,a.return,x)}else{var l=Br(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(l,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Zt(a,a.return,x)}}r&64&&bg(a),r&512&&Yi(a,a.return);break;case 3:if($i(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{f0(e,n)}catch(x){Zt(a,a.return,x)}}break;case 27:n===null&&r&4&&Ag(a);case 26:case 5:$i(e,a),n===null&&r&4&&hd(a),r&512&&Yi(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),r&4&&Ig(e,a);break;case 13:$i(e,a),r&4&&zg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Iy.bind(null,a),_b(e,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var u=n!==null&&n.memoizedState!==null||qt;n=En,l=qt,En=r,(qt=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(e,a,r)):$i(e,a),En=n,qt=l}break;case 30:$i(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:$i(e,a)}}function Ed(e,n){for(e=e.child;e!==null;)Fg(e,n),e=e.sibling}function Fg(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(I){Zt(e,e.return,I)}Td(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Et=!0}catch(I){Zt(e,e.return,I)}break;case 18:try{var w=e.stateNode;n?wx(w,!0):wx(e.stateNode,!1)}catch(I){Zt(e,e.return,I)}break;case 22:case 23:e.memoizedState===null&&Ed(e,n);break;default:Ed(e,n)}}function Td(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:Fg(a,r);break e;case 22:a.memoizedState===null&&Td(a,r);break e;default:Td(a,r)}}e=e.sibling}}function Bg(e){var n=e.alternate;n!==null&&(e.alternate=null,Bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Je(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var rn=null,Kn=!1;function Di(e,n,a){for(a=a.child;a!==null;)Pg(e,n,a),a=a.sibling}function Pg(e,n,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(Qe,a)}catch{}switch(a.tag){case 26:qt||Nn(a,n),Di(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||Nn(a,n),ko(a);var r=rn,l=Kn;or(a.type)&&(rn=a.stateNode,Kn=!1),Di(e,n,a),Gx(a.stateNode,a.type,a.memoizedProps),rn=r,Kn=l;break;case 5:qt||Nn(a,n),ko(a);case 6:if(a.tag===6&&ko(a),r=rn,l=Kn,rn=null,Di(e,n,a),rn=r,Kn=l,rn!==null)if(Kn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode),Et=!0}catch(u){Zt(a,n,u)}else try{rn.removeChild(a.stateNode),Et=!0}catch(u){Zt(a,n,u)}break;case 18:rn!==null&&(Kn?(e=rn,Ax(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Hs(e)):Ax(rn,a.stateNode));break;case 4:r=rn,l=Kn,rn=a.stateNode.containerInfo,Kn=!0,Di(e,n,a),rn=r,Kn=l;break;case 0:case 11:case 14:case 15:er(2,a,n),qt||er(4,a,n),Di(e,n,a);break;case 1:qt||(Nn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Mg(a,n,r)),Di(e,n,a);break;case 21:Di(e,n,a);break;case 22:qt=(r=qt)||a.memoizedState!==null,Di(e,n,a),qt=r;break;case 30:Nn(a,n),Di(e,n,a);break;case 7:qt||Nn(a,n),Di(e,n,a);break;default:Di(e,n,a)}}function Ig(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hs(e)}catch(a){Zt(n,n.return,a)}}}function zg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hs(e)}catch(a){Zt(n,n.return,a)}}function wy(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lg),n;default:throw Error(s(435,e.tag))}}function wc(e,n){var a=wy(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=zy.bind(null,e,r);r.then(l,l)}})}function kn(e,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],x=e,w=n,I=w;e:for(;I!==null;){switch(I.tag){case 27:if(or(I.type)){rn=I.stateNode,Kn=!1;break e}break;case 5:rn=I.stateNode,Kn=!1;break e;case 3:case 4:rn=I.stateNode.containerInfo,Kn=!0;break e}I=I.return}if(rn===null)throw Error(s(160));Pg(x,w,u),rn=null,Kn=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hg(n,e,a),n=n.sibling}var Ui=null;function Hg(e,n,a){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var x=r[u];x.ref.impl=x.nextImpl}kn(n,e,a),Xn(e),l&4&&(er(3,e,e.return),Vo(3,e),er(5,e,e.return));break;case 1:kn(n,e,a),Xn(e),l&512&&(qt||r===null||Nn(r,r.return)),l&64&&En&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ui,kn(n,e,a),Xn(e),l&512&&(qt||r===null||Nn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(En)e.stateNode=Mx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,l=u.ownerDocument||u;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Fe]||r[A]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Dn(r,n,a),r[A]=e,Mt(r),n=r;break e;case"link":if(u=qx("link","href",l).get(n+(a.href||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;case"meta":if(u=qx("meta","content",l).get(n+(a.content||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}r=l.createElement(n),Dn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[A]=e,Mt(r),n=r}e.stateNode=n}else En||ch(u,e.type,e.stateNode);else e.stateNode=jx(u,a,e.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||qt||n.parentNode.removeChild(n)):l.count--,a===null?En||ch(u,e.type,e.stateNode):jx(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&pd(e,e.memoizedProps,r.memoizedProps);break;case 27:kn(n,e,a),Xn(e),l&512&&(qt||r===null||Nn(r,r.return)),r!==null&&l&4&&pd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Qi,Qi=!1,kn(n,e,a),Qi=u,Xn(e),l&512&&(qt||r===null||Nn(r,r.return)),e.flags&32){n=e.stateNode;try{is(n,""),Et=!0}catch(fe){Zt(e,e.return,fe)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,pd(e,n,r!==null?r.memoizedProps:n)),l&1024&&(bd=!0);break;case 6:if(kn(n,e,a),Xn(e),l&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Et=!0}catch(fe){Zt(e,e.return,fe)}}break;case 3:if(Et=!1,Vc=null,u=Ui,Ui=$o(n.containerInfo),kn(n,e,a),Ui=u,Xn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Hs(n.containerInfo)}catch(fe){Zt(e,e.return,fe)}bd&&(bd=!1,Gg(e)),Et=!1;break;case 4:l=Qi,Qi=En,r=kt(),u=Ui,Ui=$o(e.stateNode.containerInfo),kn(n,e,a),Xn(e),Ui=u,Et&&Xo&&(Tc=!0),Et=r,Qi=l;break;case 12:kn(n,e,a),Xn(e);break;case 31:kn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 13:kn(n,e,a),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Nc=Ie()),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 22:u=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var w=En,I=qt,ne=Qi;En=w||u,Qi=ne||u,qt=I||x,kn(n,e,a),qt=I,Qi=ne,En=w,Xn(e),l&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||x||En||qt||(n=x||qt,a=En,r=qt,En=u||En,qt=n,tr(e,2),En=a,qt=r),!u&&Qi||Ed(e,u)),l&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wc(e,a))));break;case 19:kn(n,e,a),Xn(e),l&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,wc(e,n)));break;case 30:l&512&&(qt||r===null||Nn(r,r.return)),l=kt(),u=Xo,x=(a&335544064)===a,w=e.memoizedProps,Xo=x&&xa(w.default,w.update)!=="none",kn(n,e,a),Xn(e),x&&r!==null&&Et&&(e.flags|=4),Xo=u,Et=l;break;case 21:break;case 7:l&512&&(qt||r===null||Nn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:kn(n,e,a),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Tg(r)){a=r;break}r=r.return}r=null;for(var l=e.return;l!==null;){if(dd(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(fd(l))break;l=l.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,I=md(e);yc(e,I,w,x);break;case 5:var ne=a.stateNode;a.flags&32&&(is(ne,""),a.flags&=-33);var fe=md(e);yc(e,fe,ne,x);break;case 3:case 4:var Me=a.stateNode.containerInfo,Q=md(e);gd(e,Q,Me,x);break;default:throw Error(s(161))}}catch(ue){Zt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gg(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),e=e.sibling}}function bs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Vg(n,e),n=n.sibling;else Ug(n)}function Vg(e,n){var a=e.alternate;if(a===null)xd(e,!1);else switch(e.tag){case 3:if(Md=Ji=!1,Cg(),bs(n,e),!Ji&&!Tc){if(e=Zi,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var l=e[r+1];Rx(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Md=!0}Zi=null;break;case 5:bs(n,e);break;case 4:r=Ji,Ji=!1,bs(n,e),Ji&&(Tc=!0),Ji=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?xd(e,!1):bs(n,e));break;case 30:r=Ji,l=Cg(),Ji=!1,bs(n,e),Ji&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;n=ga(u,x),x=ga(a.memoizedProps,x);var w=xa(u.default,u.update);w==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Zn=0,n=yd(e,a,n,x,w,u,!0),Zn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Rs(e,e.memoizedProps.onUpdate),Zi=l):l!==null&&(l.push.apply(l,Zi),Zi=l),Ji=(e.flags&32)!==0?!0:r;break;default:bs(n,e)}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(e,n.alternate,n),n=n.sibling}function tr(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:er(4,a,a.return),tr(a,r);break;case 1:Nn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Mg(a,a.return,l),tr(a,r);break;case 27:(r&2)!==0&&Gx(a.stateNode,a.type,a.memoizedProps);case 5:Nn(a,a.return),a.tag!==5&&a.tag!==27||ko(a),tr(a,r);break;case 6:ko(a);break;case 26:Nn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||qt||l.parentNode.removeChild(l),tr(a,r);break;case 22:a.memoizedState===null&&tr(a,r);break;case 30:Nn(a,a.return),tr(a,r);break;case 7:Nn(a,a.return);default:tr(a,r)}e=e.sibling}}function Li(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=e,u=n,x=u.flags,w=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(l,u,a),Vo(4,u);break;case 1:if(Li(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(fe){Zt(r,r.return,fe)}if(r=u,l=r.updateQueue,l!==null){var I=r.stateNode;try{var ne=l.shared.hiddenCallbacks;if(ne!==null)for(l.shared.hiddenCallbacks=null,l=0;l<ne.length;l++)u0(ne[l],I)}catch(fe){Zt(r,r.return,fe)}}w&&x&64&&bg(u),Yi(u,u.return);break;case 27:(a&2)!==0&&Ag(u);case 5:u.tag!==5&&u.tag!==27||Eg(u),Li(l,u,a),w&&r===null&&x&4&&hd(u),Yi(u,u.return);break;case 6:Eg(u);break;case 26:I=u.stateNode,u.memoizedState!==null||I===null||En||ch($o(I.ownerDocument),u.type,I),Li(l,u,a),w&&r===null&&x&4&&hd(u),Yi(u,u.return);break;case 12:Li(l,u,a);break;case 31:Li(l,u,a),w&&x&4&&Ig(l,u);break;case 13:Li(l,u,a),w&&x&4&&zg(l,u);break;case 22:u.memoizedState===null&&Li(l,u,a),Yi(u,u.return);break;case 30:Li(l,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Li(l,u,a)}n=n.sibling}}function Ad(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ro(a))}function wd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ro(e))}function yi(e,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)kg(e,n,a,r),n=n.sibling;else l&&Dg(n)}function kg(e,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Ec(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),u&2048&&Vo(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),l&&Md&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Ro(u)));break;case 12:if(u&2048){yi(e,n,a,r),u=n.stateNode;try{var x=n.memoizedProps,w=x.id,I=x.onPostCommit;typeof I=="function"&&I(w,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(ne){Zt(n,n.return,ne)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(l&&w!==null&&w.memoizedState===null&&Ec(w),x._visibility&2?yi(e,n,a,r):Wo(e,n)):(l&&w!==null&&w.memoizedState!==null&&Ec(n),x._visibility&2?yi(e,n,a,r):(x._visibility|=2,Ms(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Ad(w,n);break;case 24:yi(e,n,a,r),u&2048&&wd(n.alternate,n);break;case 30:l&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),yi(e,n,a,r);break;default:yi(e,n,a,r)}}function Ms(e,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,x=n,w=a,I=r,ne=x.flags;switch(x.tag){case 0:case 11:case 15:Ms(u,x,w,I,l),Vo(8,x);break;case 23:break;case 22:var fe=x.stateNode;x.memoizedState!==null?fe._visibility&2?Ms(u,x,w,I,l):Wo(u,x):(fe._visibility|=2,Ms(u,x,w,I,l)),l&&ne&2048&&Ad(x.alternate,x);break;case 24:Ms(u,x,w,I,l),l&&ne&2048&&wd(x.alternate,x);break;default:Ms(u,x,w,I,l)}n=n.sibling}}function Wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,l=r.flags;switch(r.tag){case 22:Wo(a,r),l&2048&&Ad(r.alternate,r);break;case 24:Wo(a,r),l&2048&&wd(r.alternate,r);break;default:Wo(a,r)}n=n.sibling}}var Pr=8192;function Ir(e,n,a){if(e.subtreeFlags&Pr)for(e=e.child;e!==null;)Xg(e,n,a),e=e.sibling}function Xg(e,n,a){switch(e.tag){case 26:Ir(e,n,a),e.flags&Pr&&(e.memoizedState!==null?Lb(a,Ui,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Qx(a,e)));break;case 5:Ir(e,n,a),e.flags&Pr&&(e=e.stateNode,(n&335544128)===n&&Qx(a,e));break;case 3:case 4:var r=Ui;Ui=$o(e.stateNode.containerInfo),Ir(e,n,a),Ui=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Pr,Pr=16777216,Ir(e,n,a),Pr=r):Ir(e,n,a));break;case 30:if((e.flags&Pr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var l=e.stateNode;l.paired=null,ri===null&&(ri=new Map),ri.set(r,l)}Ir(e,n,a);break;default:Ir(e,n,a)}}function Wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function jo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,qg(r,e)}Wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jg(e),e=e.sibling}function jg(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&er(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cc(e)):jo(e);break;default:jo(e)}}function Cc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,qg(r,e)}Wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:er(8,n,n.return),Cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cc(n));break;default:Cc(n)}e=e.sibling}}function qg(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:er(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else e:for(a=e;Tn!==null;){r=Tn;var l=r.sibling,u=r.return;if(Bg(r),r===a){Tn=null;break e}if(l!==null){l.return=u,Tn=l;break e}Tn=u}}}var Cy={getCacheForType:function(e){var n=wn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(pn).controller.signal}},Ry=typeof WeakMap=="function"?WeakMap:Map,Xt=0,en=null,Nt=null,Lt=0,Yt=0,si=null,nr=!1,Es=!1,Cd=!1,Aa=0,un=0,ir=0,zr=0,Rc=0,oi=0,Ts=0,qo=null,Qn=null,Rd=!1,Nc=0,Yg=0,Dc=1/0,Uc=null,ar=null,sn=0,Oi=null,Hr=null,ea=0,Nd=0,Dd=null,Zg=null,As=null,ws=null,Cs=null,Yo=0,Lc=null;function li(){return(Xt&2)!==0&&Lt!==0?Lt&-Lt:Se.T!==null?Gd():Dl()}function Kg(){if(oi===0)if((Lt&536870912)===0||Tt){var e=Ri;Ri<<=1,(Ri&3932160)===0&&(Ri=262144),oi=e}else oi=536870912;return e=Cn.current,e!==null&&(e.flags|=32),oi}function Rs(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Nx(ga(e.memoizedProps,a))),ws===null&&(ws=[]),ws.push(n.bind(null,r))}}function Jn(e,n,a){(e===en&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(Ns(e,0),rr(e,Lt,oi,!1)),ki(e,a),((Xt&2)===0||e!==en)&&(e===en&&((Xt&2)===0&&(zr|=a),un===4&&rr(e,Lt,oi,!1)),ta(e))}function Qg(e,n,a){if((Xt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ha(e,n),l=r?Uy(e,n):Ld(e,n,!0),u=r;do{if(l===0){Es&&!r&&rr(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!Ny(a)){l=Ld(e,n,!1),u=!1;continue}if(l===2){if(u=n,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=e;l=qo;var I=w.current.memoizedState.isDehydrated;if(I&&(Ns(w,x).flags|=256),x=Ld(w,x,!1),x!==2&&x!==6){if(Cd&&!I){w.errorRecoveryDisabledLanes|=u,zr|=u,l=4;break e}u=Qn,Qn=l,u!==null&&(Qn===null?Qn=u:Qn.push.apply(Qn,u))}l=x}if(u=!1,l!==2)continue}}if(l===1){Ns(e,0),rr(e,n,0,!0);break}e:{switch(r=e,u=l,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:rr(r,n,oi,!nr);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Nc+300-Ie(),10<l)){if(rr(r,n,oi,!nr),Sr(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=Jd(Jg.bind(null,r,a,Qn,Uc,Rd,n,oi,zr,Ts,nr,u,"Throttled",-0,0),l);break e}Jg(r,a,Qn,Uc,Rd,n,oi,zr,Ts,nr,u,null,-0,0)}}break}while(!0);ta(e)}function Jg(e,n,a,r,l,u,x,w,I,ne,fe,Me,Q,ue){e.timeoutHandle=-1;var Be=n.subtreeFlags,$e=(u&335544064)===u;if(Me=null,($e||Be&8192||(Be&16785408)===16785408)&&(Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ri=null,Xg(n,u,Me),$e&&(Be=Me,$e=e.containerInfo,$e=($e.nodeType===9?$e:$e.ownerDocument).__reactViewTransition,$e!=null&&(Be.count++,Be.waitingForViewTransition=!0,Be=nl.bind(Be),$e.finished.then(Be,Be))),Be=(u&62914560)===u?Nc-Ie():(u&4194048)===u?Yg-Ie():0,Be=Ob(Me,Be),Be!==null)){ea=u,e.cancelPendingCommit=Be(sx.bind(null,e,n,u,a,r,l,x,w,I,ne,fe,Me,null,Q,ue)),rr(e,u,x,!ne);return}sx(e,n,u,a,r,l,x,w,I,ne,fe,Me)}function Ny(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!ii(u(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rr(e,n,a,r){n=Vi(e,n),n&=~Rc,n&=~zr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var l=n;0<l;){var u=31-ut(l),x=1<<u;r[u]=-1,l&=~x}a!==0&&yr(e,a,n)}function Oc(){return(Xt&6)===0?(Zo(0),!1):!0}function Ud(){if(Nt!==null){if(Yt===0)var e=Nt.return;else e=Nt,Sa=wr=null,Hf(e),gs=null,Uo=0,e=Nt;for(;e!==null;)yg(e.alternate,e),e=e.return;Nt=null}}function Ns(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,eb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Ud(),en=e,Nt=a=va(e.current,null),Lt=n,Yt=0,si=null,nr=!1,Es=Ha(e,n),Cd=!1,Ts=oi=Rc=zr=ir=un=0,Qn=qo=null,Rd=!1,Aa=Vi(e,n),Vl(),a}function $g(e,n){_t=null,Se.H=hc,n===ms||n===$l?(n=s0(),Yt=3):n===wf?(n=s0(),Yt=4):Yt=n===td?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,Nt===null&&(un=1,pc(e,xi(n,e.current)))}function ex(){var e=Cn.current;return e===null?!0:(Lt&4194048)===Lt?On===null:(Lt&62914560)===Lt||(Lt&536870912)!==0?e===On:!1}function tx(){var e=Se.H;return Se.H=hc,e===null?hc:e}function nx(){var e=Se.A;return Se.A=Cy,e}function Fc(){un=4,nr||(Lt&4194048)!==Lt&&Cn.current!==null||(Es=!0),(ir&134217727)===0&&(zr&134217727)===0||en===null||rr(en,Lt,oi,!1)}function Ld(e,n,a){var r=Xt;Xt|=2;var l=tx(),u=nx();(en!==e||Lt!==n)&&(Uc=null,Ns(e,n)),n=!1;var x=un;e:do try{if(Yt!==0&&Nt!==null){var w=Nt,I=si;switch(Yt){case 8:Ud(),x=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var ne=Yt;if(Yt=0,si=null,Ds(e,w,I,ne),a&&Es){x=0;break e}break;default:ne=Yt,Yt=0,si=null,Ds(e,w,I,ne)}}Dy(),x=un;break}catch(fe){$g(e,fe)}while(!0);return n&&e.shellSuspendCounter++,Sa=wr=null,Xt=r,Se.H=l,Se.A=u,Nt===null&&(en=null,Lt=0,Vl()),x}function Dy(){for(;Nt!==null;)ix(Nt)}function Uy(e,n){var a=Xt;Xt|=2;var r=tx(),l=nx();en!==e||Lt!==n?(Uc=null,Dc=Ie()+500,Ns(e,n)):Es=Ha(e,n);e:do try{if(Yt!==0&&Nt!==null){n=Nt;var u=si;t:switch(Yt){case 1:Yt=0,si=null,Ds(e,n,u,1);break;case 2:case 9:if(a0(u)){Yt=0,si=null,ax(n);break}n=function(){Yt!==2&&Yt!==9||en!==e||(Yt=7),ta(e)},u.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:a0(u)?(Yt=0,si=null,ax(n)):(Yt=0,si=null,Ds(e,n,u,7));break;case 5:var x=null;switch(Nt.tag){case 26:x=Nt.memoizedState;case 5:case 27:var w=Nt;if(x?Zx(x):w.stateNode.complete){Yt=0,si=null;var I=w.sibling;if(I!==null)Nt=I;else{var ne=w.return;ne!==null?(Nt=ne,Bc(ne)):Nt=null}break t}}Yt=0,si=null,Ds(e,n,u,5);break;case 6:Yt=0,si=null,Ds(e,n,u,6);break;case 8:Ud(),un=6;break e;default:throw Error(s(462))}}Ly();break}catch(fe){$g(e,fe)}while(!0);return Sa=wr=null,Se.H=r,Se.A=l,Xt=a,Nt!==null?0:(en=null,Lt=0,Vl(),un)}function Ly(){for(;Nt!==null&&!Ee();)ix(Nt)}function ix(e){var n=_g(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,n===null?Bc(e):Nt=n}function ax(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,Lt);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,Lt);break;case 5:Hf(n);var r=n;r===Mn&&(Tt?(Yl(r),r.tag===5&&r.stateNode!=null&&(nn=r.stateNode)):(Yl(r),Tt=!0));default:yg(a,n),n=Nt=qm(n,Aa),n=_g(a,n,Aa)}e.memoizedProps=e.pendingProps,n===null?Bc(e):Nt=n}function Ds(e,n,a,r){Sa=wr=null,Hf(n),gs=null,Uo=0;var l=n.return;try{if(Sy(e,l,n,a,Lt)){un=1,pc(e,xi(a,e.current)),Nt=null;return}}catch(u){if(l!==null)throw Nt=l,u;un=1,pc(e,xi(a,e.current)),Nt=null;return}n.flags&32768?(Tt||r===1?e=!0:Es||(Lt&536870912)!==0?e=!1:(nr=e=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),rx(n,e)):Bc(n)}function Bc(e){var n=e;do{if((n.flags&32768)!==0){rx(n,nr);return}e=n.return;var a=Ey(n.alternate,n,Aa);if(a!==null){Nt=a;return}if(n=n.sibling,n!==null){Nt=n;return}Nt=n=e}while(n!==null);un===0&&(un=5)}function rx(e,n){do{var a=Ty(e.alternate,e);if(a!==null){a.flags&=32767,Nt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Nt=e;return}Nt=e=a}while(e!==null);un=6,Nt=null}function sx(e,n,a,r,l,u,x,w,I,ne,fe,Me){e.cancelPendingCommit=null;do Pc();while(sn!==0);if((Xt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===en&&(Nt=en=null,Lt=0),Hr=n,Oi=e,ea=a,Dd=l,Zg=r,Oy(e,n,a,x,w,I,Me)}}function Oy(e,n,a,r,l,u,x){var w=n.lanes|n.childLanes;if(Nd=w,w|=pf,Nl(e,a,w,r,l,u),ws=null,(a&335544064)===a?(Cs=ly(e),r=10262):(Cs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Hy(Ue,function(){return Pd(),null})):(e.callbackNode=null,e.callbackPriority=0),bc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Se.T,Se.T=null,l=De.p,De.p=2,u=Xt,Xt|=4;try{Ay(e,n,a)}finally{Xt=u,De.p=l,Se.T=r}}sn=1,bc?As=sb(x,e.containerInfo,Cs,Od,Fd,By,Bd,Pd,Fy):(Od(),Fd(),Bd())}function Fy(e){if(sn!==0){var n=Oi.onRecoverableError;n(e,{componentStack:null})}}function By(){sn===3&&(sn=0,Vg(Hr,Oi),sn=4)}function Od(){if(sn===1){sn=0;var e=Oi,n=Hr,a=ea,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Se.T,Se.T=null;var l=De.p;De.p=2;var u=Xt;Xt|=4;try{Xo=Tc=!1,Hg(n,e,a),a=Zd;var x=Pm(e.containerInfo),w=a.focusedElem,I=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&Bm(w.ownerDocument.documentElement,w)){if(I!==null&&cf(w)){var ne=I.start,fe=I.end;if(fe===void 0&&(fe=ne),"selectionStart"in w)w.selectionStart=ne,w.selectionEnd=Math.min(fe,w.value.length);else{var Me=w.ownerDocument||document,Q=Me&&Me.defaultView||window;if(Q.getSelection){var ue=Q.getSelection(),Be=w.textContent.length,$e=Math.min(I.start,Be),St=I.end===void 0?$e:Math.min(I.end,Be);!ue.extend&&$e>St&&(x=St,St=$e,$e=x);var ee=Fm(w,$e),X=Fm(w,St);if(ee&&X&&(ue.rangeCount!==1||ue.anchorNode!==ee.node||ue.anchorOffset!==ee.offset||ue.focusNode!==X.node||ue.focusOffset!==X.offset)){var se=Me.createRange();se.setStart(ee.node,ee.offset),ue.removeAllRanges(),$e>St?(ue.addRange(se),ue.extend(X.node,X.offset)):(se.setEnd(X.node,X.offset),ue.addRange(se))}}}}for(Me=[],ue=w;ue=ue.parentNode;)ue.nodeType===1&&Me.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Me.length;w++){var be=Me[w];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}zs=!!Yd,Zd=Yd=null}finally{Xt=u,De.p=l,Se.T=r}}e.current=n,sn=2}}function Fd(){if(sn===2){sn=0;var e=Oi,n=Hr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Se.T,Se.T=null;var r=De.p;De.p=2;var l=Xt;Xt|=4;try{Og(e,n.alternate,n)}finally{Xt=l,De.p=r,Se.T=a}}sn=3}}function Bd(){if(sn===4||sn===3){sn=0;var e=As;As=null,Ne();var n=Oi,a=Hr,r=ea,l=Zg,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?sn=5:(sn=0,Hr=Oi=null,ox(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(ar=null),xo(r),a=a.stateNode,He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(Qe,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Se.T,u=De.p,De.p=2,Se.T=null;try{for(var x=n.onRecoverableError,w=0;w<l.length;w++){var I=l[w];x(I.value,{componentStack:I.stack})}}finally{Se.T=a,De.p=u}}if(l=ws,x=Cs,Cs=null,l!==null&&(ws=null,x===null&&(x=[]),e!==null))for(I=0;I<l.length;I++)a=(0,l[I])(x),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&Pc(),ta(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Lc?Yo++:(Yo=0,Lc=n):(Yo=0,Lc=null),Zo(0)}}function ox(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ro(n)))}function Pc(){return As!==null&&(As.skipTransition(),As=null),Od(),Fd(),Bd(),Pd()}function Pd(){if(sn!==5)return!1;var e=Oi,n=Nd;Nd=0;var a=xo(ea),r=Se.T,l=De.p;try{De.p=32>a?32:a,Se.T=null,a=Dd,Dd=null;var u=Oi,x=ea;if(sn=0,Hr=Oi=null,ea=0,(Xt&6)!==0)throw Error(s(331));var w=Xt;if(Xt|=4,jg(u.current),kg(u,u.current,x,a),Xt=w,Zo(0,!1),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(Qe,u)}catch{}return!0}finally{De.p=l,Se.T=r,ox(e,n)}}function lx(e,n,a){n=xi(a,n),n=ed(e.stateNode,n,2),e=Ka(e,n,2),e!==null&&(ki(e,2),ta(e))}function Zt(e,n,a){if(e.tag===3)lx(e,e,a);else for(;n!==null;){if(n.tag===3){lx(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ar===null||!ar.has(r))){e=xi(a,e),a=ag(2),r=Ka(n,a,2),r!==null&&(rg(a,r,n,e),ki(r,2),ta(r));break}}n=n.return}}function Id(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Ry;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(Cd=!0,l.add(a),e=Py.bind(null,e,n,a),n.then(e,e))}function Py(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(Lt&a)===a&&((un===4||un===3&&(Lt&62914560)===Lt&&300>Ie()-Nc)&&(Xt&2)===0?Ns(e,0):Rc|=a,Ts===Lt&&(Ts=0)),ta(e)}function cx(e,n){n===0&&(n=ho()),e=Er(e,n),e!==null&&(ki(e,n),ta(e))}function Iy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),cx(e,a)}function zy(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),cx(e,a)}function Hy(e,n){return Te(e,n)}var Us=null,Ls=null,zd=!1,Ic=!1,Hd=!1,sr=0;function ta(e){e!==Ls&&e.next===null&&(Ls===null?Us=Ls=e:Ls=Ls.next=e),Ic=!0,zd||(zd=!0,Vy())}function Zo(e,n){if(!Hd&&Ic){Hd=!0;do for(var a=!1,r=Us;r!==null;){if(e!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var x=r.suspendedLanes,w=r.pingedLanes;u=(1<<31-ut(42|e)+1)-1,u&=l&~(x&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,hx(r,u))}else u=Lt,u=Sr(r,r===en?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Ha(r,u)||(a=!0,hx(r,u));r=r.next}while(a);Hd=!1}}function Gy(){ux()}function ux(){Ic=zd=!1;var e=0;sr!==0&&$y()&&(e=sr);for(var n=Ie(),a=null,r=Us;r!==null;){var l=r.next,u=fx(r,n);u===0?(r.next=null,a===null?Us=l:a.next=l,l===null&&(Ls=a)):(a=r,(e!==0||(u&3)!==0)&&(Ic=!0)),r=l}sn!==0&&sn!==5||Zo(e),sr!==0&&(sr=0)}function fx(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-ut(u),w=1<<x,I=l[x];I===-1?((w&a)===0||(w&r)!==0)&&(l[x]=fo(w,n)):I<=n&&(e.expiredLanes|=w),u&=~w}if(n=en,a=Lt,a=Sr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ha(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ze(r),xo(a)){case 2:case 8:a=q;break;case 32:a=Ue;break;case 268435456:a=Oe;break;default:a=Ue}return r=dx.bind(null,e),a=Te(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function dx(e,n){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Pc()&&e.callbackNode!==a)return null;var r=Lt;return r=Sr(e,e===en?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Qg(e,r,n),fx(e,Ie()),e.callbackNode!=null&&e.callbackNode===a?dx.bind(null,e):null)}function hx(e,n){if(Pc())return null;Qg(e,n,!0)}function Vy(){tb(function(){(Xt&6)!==0?Te(ot,Gy):ux()})}function Gd(){if(sr===0){var e=Nr;e===0&&(e=Ia,Ia<<=1,(Ia&261888)===0&&(Ia=256)),sr=e}return sr}function px(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ol(e)}function ky(e,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var u=px((l[k]||null).action),x=r.submitter;x&&(n=(n=x[k]||null)?px(n.formAction):x.getAttribute("formAction"),n!==null&&(u=n,x=null));var w=new Il("action","action",null,r,l);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(sr!==0){var I=new FormData(l,x);Zf(a,{pending:!0,data:I,method:l.method,action:u},null,I)}}else typeof u=="function"&&(w.preventDefault(),I=new FormData(l,x),Zf(a,{pending:!0,data:I,method:l.method,action:u},u,I))},currentTarget:l}]})}}for(var Vd=0;Vd<hf.length;Vd++){var kd=hf[Vd],Xy=kd.toLowerCase(),Wy=kd[0].toUpperCase()+kd.slice(1);Ni(Xy,"on"+Wy)}Ni(Hm,"onAnimationEnd"),Ni(Gm,"onAnimationIteration"),Ni(Vm,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(ey,"onTransitionRun"),Ni(ty,"onTransitionStart"),Ni(ny,"onTransitionCancel"),Ni(km,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function mx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],I=w.instance,ne=w.currentTarget;if(w=w.listener,I!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=ne;try{u(l)}catch(fe){Gl(fe)}l.currentTarget=null,u=I}else for(x=0;x<r.length;x++){if(w=r[x],I=w.instance,ne=w.currentTarget,w=w.listener,I!==u&&l.isPropagationStopped())break e;u=w,l.currentTarget=ne;try{u(l)}catch(fe){Gl(fe)}l.currentTarget=null,u=I}}}}function Dt(e,n){var a=n[le];a===void 0&&(a=n[le]=new Set);var r=e+"__bubble";a.has(r)||(gx(n,e,2,!1),a.add(r))}function Xd(e,n,a){var r=0;n&&(r|=4),gx(a,e,r,n)}var zc="_reactListening"+Math.random().toString(36).slice(2);function Wd(e){if(!e[zc]){e[zc]=!0,jt.forEach(function(a){a!=="selectionchange"&&(jy.has(a)||Xd(a,!1,e),Xd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[zc]||(n[zc]=!0,Xd("selectionchange",!1,n))}}function gx(e,n,a,r){switch(rv(n)){case 2:var l=Ib;break;case 8:l=zb;break;default:l=fh}a=l.bind(null,n,a,e),l=void 0,!Ju||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,a,{capture:!0,passive:l}):e.addEventListener(n,a,!0):l!==void 0?e.addEventListener(n,a,{passive:l}):e.addEventListener(n,a,!1)}function jd(e,n,a,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===l)break;if(x===4)for(x=r.return;x!==null;){var I=x.tag;if((I===3||I===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;w!==null;){if(x=ft(w),x===null)return;if(I=x.tag,I===5||I===6||I===26||I===27){r=u=x;continue e}w=w.parentNode}}r=r.return}gm(function(){var ne=u,fe=Ku(a),Me=[];e:{var Q=Xm.get(e);if(Q!==void 0){var ue=Il,Be=e;switch(e){case"keypress":if(Bl(a)===0)break e;case"keydown":case"keyup":ue=NS;break;case"focusin":Be="focus",ue=nf;break;case"focusout":Be="blur",ue=nf;break;case"beforeblur":case"afterblur":ue=nf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=vS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=FS;break;case Hm:case Gm:case Vm:ue=yS;break;case km:ue=PS;break;case"scroll":case"scrollend":ue=gS;break;case"wheel":ue=zS;break;case"copy":case"cut":case"paste":ue=MS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ym;break;case"submit":ue=LS;break;case"toggle":case"beforetoggle":ue=GS}var $e=(n&4)!==0,St=!$e&&(e==="scroll"||e==="scrollend"),ee=$e?Q!==null?Q+"Capture":null:Q;$e=[];for(var X=ne,se;X!==null;){var be=X;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||ee===null||(be=vo(X,ee),be!=null&&$e.push(Qo(X,be,se))),St)break;X=X.return}0<$e.length&&(Q=new ue(Q,Be,null,a,fe),Me.push({event:Q,listeners:$e}))}}if((n&7)===0){e:{if(ue=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",ue&&a!==Zu&&(Be=a.relatedTarget||a.fromElement)&&(ft(Be)||Be[de]))break e;(Q||ue)&&(Be=fe.window===fe?fe:(ue=fe.ownerDocument)?ue.defaultView||ue.parentWindow:window,Q?(ue=a.relatedTarget||a.toElement,Q=ne,ue=ue?ft(ue):null,ue!==null&&(St=f(ue),$e=ue.tag,ue!==St||$e!==5&&$e!==27&&$e!==6)&&(ue=null)):(Q=null,ue=ne),Q!==ue&&($e=_m,be="onMouseLeave",ee="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&($e=ym,be="onPointerLeave",ee="onPointerEnter",X="pointer"),St=Q==null?Be:Ye(Q),se=ue==null?Be:Ye(ue),Be=new $e(be,X+"leave",Q,a,fe),Be.target=St,Be.relatedTarget=se,be=null,ft(fe)===ne&&($e=new $e(ee,X+"enter",ue,a,fe),$e.target=se,$e.relatedTarget=St,be=$e),St=be,$e=Q&&ue?L(Q,ue,qy):null,Q!==null&&xx(Me,Be,Q,$e,!1),ue!==null&&St!==null&&xx(Me,St,ue,$e,!0)))}e:{if(Q=ne?Ye(ne):window,ue=Q.nodeName&&Q.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Q.type==="file")var Ze=Rm;else if(wm(Q))if(Nm)Ze=QS;else{Ze=ZS;var Ot=YS}else ue=Q.nodeName,!ue||ue.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?ne&&Yu(ne.elementType)&&(Ze=Rm):Ze=KS;if(Ze&&(Ze=Ze(e,ne))){Cm(Me,Ze,a,fe);break e}Ot&&Ot(e,Q,ne)}switch(Ot=ne?Ye(ne):window,e){case"focusin":(wm(Ot)||Ot.contentEditable==="true")&&(os=Ot,uf=ne,Ao=null);break;case"focusout":Ao=uf=os=null;break;case"mousedown":ff=!0;break;case"contextmenu":case"mouseup":case"dragend":ff=!1,Im(Me,a,fe);break;case"selectionchange":if($S)break;case"keydown":case"keyup":Im(Me,a,fe)}var at;if(rf)e:{switch(e){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ss?Tm(e,a)&&(lt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(bm&&a.locale!=="ko"&&(ss||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ss&&(at=xm()):(Ga=fe,$u="value"in Ga?Ga.value:Ga.textContent,ss=!0)),Ot=Hc(ne,lt),0<Ot.length&&(lt=new Sm(lt,e,null,a,fe),Me.push({event:lt,listeners:Ot}),at?lt.data=at:(at=Am(a),at!==null&&(lt.data=at)))),(at=kS?XS(e,a):WS(e,a))&&(lt=Hc(ne,"onBeforeInput"),0<lt.length&&(Ot=new Sm("onBeforeInput","beforeinput",null,a,fe),Me.push({event:Ot,listeners:lt}),Ot.data=at)),ky(Me,e,ne,a,fe)}mx(Me,n)})}function Qo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Hc(e,n){for(var a=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=vo(e,a),l!=null&&r.unshift(Qo(e,l,u)),l=vo(e,n),l!=null&&r.push(Qo(e,l,u))),e.tag===3)return r;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xx(e,n,a,r,l){for(var u=n._reactName,x=[];a!==null&&a!==r;){var w=a,I=w.alternate,ne=w.stateNode;if(w=w.tag,I!==null&&I===r)break;w!==5&&w!==26&&w!==27||ne===null||(I=ne,l?(ne=vo(a,u),ne!=null&&x.unshift(Qo(a,ne,I))):l||(ne=vo(a,u),ne!=null&&x.push(Qo(a,ne,I)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function vx(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function _x(e,n){return n=vx(n),vx(e)===n}function Kt(e,n,a,r,l,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||is(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&is(e,""+r);else return;break;case"className":ni(e,"class",r);break;case"tabIndex":ni(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ni(e,a,r);break;case"style":pm(e,r,u);return;case"data":if(n!=="object"){ni(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ol(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Kt(e,n,"name",l.name,l,null),Kt(e,n,"formEncType",l.formEncType,l,null),Kt(e,n,"formMethod",l.formMethod,l,null),Kt(e,n,"formTarget",l.formTarget,l,null)):(Kt(e,n,"encType",l.encType,l,null),Kt(e,n,"method",l.method,l,null),Kt(e,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ol(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);return;case"onScroll":r!=null&&Dt("scroll",e);return;case"onScrollEnd":r!=null&&Dt("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Ol(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Dt("beforetoggle",e),Dt("toggle",e),tn(e,"popover",r);break;case"xlinkActuate":Ut(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ut(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ut(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ut(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ut(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ut(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ut(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tn(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=pS.get(a)||a,tn(e,a,r);else return}Et=!0}function qd(e,n,a,r,l,u){switch(a){case"style":pm(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")is(e,r);else if(typeof r=="number"||typeof r=="bigint")is(e,""+r);else return;break;case"onScroll":r!=null&&Dt("scroll",e);return;case"onScrollEnd":r!=null&&Dt("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!_n.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),n=e[k]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,l);break e}Et=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):tn(e,a,r)}return}Et=!0}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",e),Dt("load",e);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var x=a[u];if(x!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,u,x,a,null)}}l&&Kt(e,n,"srcSet",a.srcSet,a,null),r&&Kt(e,n,"src",a.src,a,null);return;case"input":Dt("invalid",e);var w=u=x=l=null,I=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var fe=a[r];if(fe!=null)switch(r){case"name":l=fe;break;case"type":x=fe;break;case"checked":I=fe;break;case"defaultChecked":ne=fe;break;case"value":u=fe;break;case"defaultValue":w=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Kt(e,n,r,fe,a,null)}}um(e,u,w,I,ne,x,l,!1);return;case"select":Dt("invalid",e),r=x=u=null;for(l in a)if(a.hasOwnProperty(l)&&(w=a[l],w!=null))switch(l){case"value":u=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:Kt(e,n,l,w,a,null)}n=u,a=x,e.multiple=!!r,n!=null?ns(e,!!r,n,!1):a!=null&&ns(e,!!r,a,!0);return;case"textarea":Dt("invalid",e),u=l=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":l=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Kt(e,n,x,w,a,null)}dm(e,r,l,u);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(r=a[I],r!=null))switch(I){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Kt(e,n,I,r,a,null)}return;case"dialog":Dt("beforetoggle",e),Dt("toggle",e),Dt("cancel",e),Dt("close",e);break;case"iframe":case"object":Dt("load",e);break;case"video":case"audio":for(r=0;r<Ko.length;r++)Dt(Ko[r],e);break;case"image":Dt("error",e),Dt("load",e);break;case"details":Dt("toggle",e);break;case"embed":case"source":case"link":Dt("error",e),Dt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,ne,r,a,null)}return;default:if(Yu(n)){for(fe in a)a.hasOwnProperty(fe)&&(r=a[fe],r!==void 0&&qd(e,n,fe,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Kt(e,n,w,r,a,null))}var Ky={};function Qy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,x=null,w=null,I=null,ne=null,fe=null;for(ue in a){var Me=a[ue];if(a.hasOwnProperty(ue)&&Me!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":I=Me;default:r.hasOwnProperty(ue)||Kt(e,n,ue,null,r,Me)}}for(var Q in r){var ue=r[Q];if(Me=a[Q],r.hasOwnProperty(Q)&&(ue!=null||Me!=null))switch(Q){case"type":ue!==Me&&(Et=!0),u=ue;break;case"name":ue!==Me&&(Et=!0),l=ue;break;case"checked":ue!==Me&&(Et=!0),ne=ue;break;case"defaultChecked":ue!==Me&&(Et=!0),fe=ue;break;case"value":ue!==Me&&(Et=!0),x=ue;break;case"defaultValue":ue!==Me&&(Et=!0),w=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:ue!==Me&&Kt(e,n,Q,ue,r,Me)}}ju(e,x,w,I,ne,fe,u,l);return;case"select":ue=x=w=Q=null;for(u in a)if(I=a[u],a.hasOwnProperty(u)&&I!=null)switch(u){case"value":break;case"multiple":ue=I;default:r.hasOwnProperty(u)||Kt(e,n,u,null,r,I)}for(l in r)if(u=r[l],I=a[l],r.hasOwnProperty(l)&&(u!=null||I!=null))switch(l){case"value":u!==I&&(Et=!0),Q=u;break;case"defaultValue":u!==I&&(Et=!0),w=u;break;case"multiple":u!==I&&(Et=!0),x=u;default:u!==I&&Kt(e,n,l,u,r,I)}n=w,a=x,r=ue,Q!=null?ns(e,!!a,Q,!1):!!r!=!!a&&(n!=null?ns(e,!!a,n,!0):ns(e,!!a,a?[]:"",!1));return;case"textarea":ue=Q=null;for(w in a)if(l=a[w],a.hasOwnProperty(w)&&l!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,n,w,null,r,l)}for(x in r)if(l=r[x],u=a[x],r.hasOwnProperty(x)&&(l!=null||u!=null))switch(x){case"value":l!==u&&(Et=!0),Q=l;break;case"defaultValue":l!==u&&(Et=!0),ue=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==u&&Kt(e,n,x,l,r,u)}fm(e,Q,ue);return;case"option":for(var Be in a)if(Q=a[Be],a.hasOwnProperty(Be)&&Q!=null&&!r.hasOwnProperty(Be))switch(Be){case"selected":e.selected=!1;break;default:Kt(e,n,Be,null,r,Q)}for(I in r)if(Q=r[I],ue=a[I],r.hasOwnProperty(I)&&Q!==ue&&(Q!=null||ue!=null))switch(I){case"selected":Q!==ue&&(Et=!0),e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:Kt(e,n,I,Q,r,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)Q=a[$e],a.hasOwnProperty($e)&&Q!=null&&!r.hasOwnProperty($e)&&Kt(e,n,$e,null,r,Q);for(ne in r)if(Q=r[ne],ue=a[ne],r.hasOwnProperty(ne)&&Q!==ue&&(Q!=null||ue!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,n));break;default:Kt(e,n,ne,Q,r,ue)}return;default:if(Yu(n)){for(var St in a)Q=a[St],a.hasOwnProperty(St)&&Q!==void 0&&!r.hasOwnProperty(St)&&qd(e,n,St,void 0,r,Q);for(fe in r)Q=r[fe],ue=a[fe],!r.hasOwnProperty(fe)||Q===ue||Q===void 0&&ue===void 0||qd(e,n,fe,Q,r,ue);return}}for(var ee in a)Q=a[ee],a.hasOwnProperty(ee)&&Q!=null&&!r.hasOwnProperty(ee)&&Kt(e,n,ee,null,r,Q);for(Me in r)Q=r[Me],ue=a[Me],!r.hasOwnProperty(Me)||Q===ue||Q==null&&ue==null||Kt(e,n,Me,Q,r,ue)}function Sx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Jy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,x=l.initiatorType,w=l.duration;if(u&&w&&Sx(x)){for(x=0,w=l.responseEnd,r+=1;r<a.length;r++){var I=a[r],ne=I.startTime;if(ne>w)break;var fe=I.transferSize,Me=I.initiatorType;fe&&Sx(Me)&&(I=I.responseEnd,x+=fe*(I<w?1:(w-ne)/(I-ne)))}if(--r,n+=8*(u+x)/(l.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yd=null,Zd=null;function Jo(e){return e.nodeType===9?e:e.ownerDocument}function yx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mx(e,n,a,r){return a=Jo(a).createElement(e),a[A]=r,a[k]=n,Dn(a,e,n),Mt(a),a}function Kd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qd=null;function $y(){var e=window.event;return e&&e.type==="popstate"?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var Jd=typeof setTimeout=="function"?setTimeout:void 0,eb=typeof clearTimeout=="function"?clearTimeout:void 0,Ex=typeof Promise=="function"?Promise:void 0,Tx=typeof requestAnimationFrame=="function"?requestAnimationFrame:Jd,tb=typeof queueMicrotask=="function"?queueMicrotask:typeof Ex<"u"?function(e){return Ex.resolve(null).then(e).catch(nb)}:Jd;function nb(e){setTimeout(function(){throw e})}function or(e){return e==="head"}function Ax(e,n){var a=n,r=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(l),Hs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")sh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,sh(a);for(var u=a.firstChild;u;){var x=u.nextSibling,w=u.nodeName;u[Fe]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=x}}else a==="body"&&sh(e.ownerDocument.body);a=l}while(a);Hs(n)}function wx(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Cx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var u=n[l];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Rx(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function ib(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function $d(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return ib(n,a,e)}function ab(e){return e.documentElement.clientHeight}function rb(e){this.addEventListener("load",e),this.addEventListener("error",e)}function sb(e,n,a,r,l,u,x,w,I){var ne=n.nodeType===9?n:n.ownerDocument;try{var fe=ne.startViewTransition({update:function(){var Q=ne.defaultView,ue=Q.navigation&&Q.navigation.transition,Be=ne.fonts.status;r();var $e=[];if(Be==="loaded"&&(ab(ne),ne.fonts.status==="loading"&&$e.push(ne.fonts.ready)),Be=$e.length,e!==null)for(var St=e.suspenseyImages,ee=0,X=0;X<St.length;X++){var se=St[X];if(!se.complete){var be=se.getBoundingClientRect();if(0<be.bottom&&0<be.right&&be.top<Q.innerHeight&&be.left<Q.innerWidth){if(ee+=Kx(se),ee>kc){$e.length=Be;break}se=new Promise(rb.bind(se)),$e.push(se)}}}if(0<$e.length)return Q=Promise.race([Promise.all($e),new Promise(function(Ze){return setTimeout(Ze,500)})]).then(l,l),(ue?Promise.allSettled([ue.finished,Q]):Q).then(u,u);if(l(),ue)return ue.finished.then(u,u);u()},types:a});ne.__reactViewTransition=fe;var Me=[];return fe.ready.then(function(){for(var Q=ne.documentElement.getAnimations({subtree:!0}),ue=0;ue<Q.length;ue++){var Be=Q[ue],$e=Be.effect,St=$e.pseudoElement;if(St!=null&&St.startsWith("::view-transition")){Me.push(Be),Be=$e.getKeyframes();for(var ee=St=void 0,X=!0,se=0;se<Be.length;se++){var be=Be[se],Ze=be.width;if(St===void 0)St=Ze;else if(St!==Ze){X=!1;break}if(Ze=be.height,ee===void 0)ee=Ze;else if(ee!==Ze){X=!1;break}delete be.width,delete be.height,be.transform==="none"&&delete be.transform}X&&St!==void 0&&ee!==void 0&&($e.setKeyframes(Be),X=getComputedStyle($e.target,$e.pseudoElement),X.width!==St||X.height!==ee)&&(X=Be[0],X.width=St,X.height=ee,X=Be[Be.length-1],X.width=St,X.height=ee,$e.setKeyframes(Be))}}x()},function(Q){ne.__reactViewTransition===fe&&(ne.__reactViewTransition=null);try{if(typeof Q=="object"&&Q!==null)switch(Q.name){case"InvalidStateError":(Q.message==="View transition was skipped because document visibility state is hidden."||Q.message==="Skipping view transition because document visibility state has become hidden."||Q.message==="Skipping view transition because viewport size changed."||Q.message==="Transition was aborted because of invalid state")&&(Q=null)}Q!==null&&I(Q)}finally{r(),l(),x()}}),fe.finished.finally(function(){for(var Q=0;Q<Me.length;Q++)Me[Q].cancel();ne.__reactViewTransition===fe&&(ne.__reactViewTransition=null),w()}),fe}catch{return r(),l(),x(),null}}function Gr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Gr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Gr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[l])}return r},Gr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Nx(e){return{name:e,group:new Gr("group",e),imagePair:new Gr("image-pair",e),old:new Gr("old",e),new:new Gr("new",e)}}function ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(e,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Ux(u,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(I){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,I):n.handleEvent(I)}),r!==null&&(l=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Os(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:l}),v(this._fragmentFiber.child,!1,ob,e,w,r)}this._eventListeners=u}};function ob(e,n,a,r){return b(e).addEventListener(n,a,r),!1}ci.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=Ux(r,e,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var u=l.cleanup;l=Os(l.optionsOrUseCapture),v(this._fragmentFiber.child,!1,lb,e,a,l),r.splice(n,1),u!==null&&u()}};function lb(e,n,a,r){return b(e).removeEventListener(n,a,r),!1}function Os(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Dx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Ux(e,n,a,r){if(e.length===0)return-1;r=Dx(r);for(var l=0;l<e.length;l++){var u=e[l];if(u.type===n&&u.listener===a&&Dx(u.optionsOrUseCapture)===r)return l}return-1}ci.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,Os(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,Os(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},ci.prototype.focus=function(e){v(this._fragmentFiber.child,!0,Lx,e,void 0,void 0)};function Lx(e,n){return e.tag===6?!1:(e=b(e),Sb(e,n))}ci.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,eh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Lx(n[a],e);a--);};function eh(e,n){return n.push(e),!1}ci.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=Jo(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,cb,e,void 0,void 0))};function cb(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,ub,e,void 0,void 0)};function ub(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}ci.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,fb,e,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var r=Fi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Fi[n++]=r}Fi.length=n}};function fb(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var Fi=[],th=!1;function db(e,n,a){Fi.push({fragmentInstance:e,observer:n,instance:a}),th||(th=!0,yb(function(){th=!1;var r=Fi;Fi=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}ci.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,hb,e,void 0,void 0),e};function hb(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}ci.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},ci.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,eh,a,void 0,void 0);var r=b(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(e);return a===e?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=C(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),l=b(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=l.compareDocumentPosition(e),I=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&l===e||I||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||pb(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function pb(e,n,a,r,l){var u=ft(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;e:{for(u=n,n=g(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=L(a,u,U),n===null?n=!1:(v(n,!0,W,u,a),u=S,S=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=L(r,u,U),n===null?n=!1:(v(n,!0,R,u,r),u=S,O=S=null,n=u!==null)),n):!1}function Ox(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,eh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=C(this._fragmentFiber);if(r=a?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Ox(e,a);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=b(l),Ox(l,a)):b(l).scrollIntoView(e),r+=a?-1:1}};function mb(e,n){return e=b(e),Fx(e,n),!1}function Fx(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function Bx(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.addEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var x=0,w=0;w<Fi.length;w++){var I=Fi[w];(I.fragmentInstance!==n||I.observer!==u||I.instance!==e)&&(Fi[x++]=I)}Fi.length=x,u.observe(e)}),Fx(e,n))}function gb(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];e.removeEventListener(l.type,l.attachedListener,Os(l.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?db(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function nh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),Je(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xb(e,n,a,r){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Fe])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function vb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=bi(e.nextSibling),e===null))return null;return e}function Px(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _b(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function bi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var rh=null;function Ix(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return bi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Sb(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function yb(e){Tx(function(){Tx(function(n){return e(n)})})}function Hx(e,n,a){switch(n=Jo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Gx(e,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Kt(e,n,r,null,Ky,l)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),Je(e)}function sh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Je(e)}var Mi=new Map,Vx=new Set;function $o(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var wa=De.d;De.d={f:bb,r:Mb,D:Eb,C:Tb,L:Ab,m:wb,X:Rb,S:Cb,M:Nb};function bb(){var e=wa.f(),n=Oc();return e||n}function Mb(e){var n=mt(e);n!==null&&n.tag===5&&n.type==="form"?X0(n):wa.r(e)}var Fs=typeof document>"u"?null:document;function kx(e,n,a){var r=Fs;if(r&&typeof n=="string"&&n){var l=mi(n);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Vx.has(l)||(Vx.add(l),e={rel:e,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Dn(n,"link",e),Mt(n),r.head.appendChild(n)))}}function Eb(e){wa.D(e),kx("dns-prefetch",e,null)}function Tb(e,n){wa.C(e,n),kx("preconnect",e,n)}function Ab(e,n,a){wa.L(e,n,a);var r=Fs;if(r&&e&&n){var l='link[rel="preload"][as="'+mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+mi(a.imageSizes)+'"]')):l+='[href="'+mi(e)+'"]';var u=l;switch(n){case"style":u=Bs(e);break;case"script":u=Ps(e)}if(!(Mi.has(u)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(u,e),r.querySelector(l)!==null||n==="style"&&r.querySelector(el(u))||n==="script"&&r.querySelector(tl(u))))){var x=r.createElement("link");Dn(x,"link",e),n==="style"&&(x[Ke]=!0,x.onload=x.onerror=function(){Jt(x)}),Mt(x),r.head.appendChild(x)}}}function wb(e,n){wa.m(e,n);var a=Fs;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+mi(r)+'"][href="'+mi(e)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ps(e)}if(!Mi.has(u)&&(e=P({rel:"modulepreload",href:e},n),Mi.set(u,e),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(tl(u)))return}r=a.createElement("link"),Dn(r,"link",e),Mt(r),a.head.appendChild(r)}}}function Cb(e,n,a){wa.S(e,n,a);var r=Fs;if(r&&e){var l=Rt(r).hoistableStyles,u=Bs(e);n=n||"default";var x=l.get(u);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(el(u)))w.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(u))&&oh(e,a);var I=x=r.createElement("link");Mt(I),Dn(I,"link",e),I._p=new Promise(function(ne,fe){I.onload=ne,I.onerror=fe}),I.addEventListener("load",function(){w.loading|=1}),I.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Gc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},l.set(u,x)}}}function Rb(e,n){wa.X(e,n);var a=Fs;if(a&&e){var r=Rt(a).hoistableScripts,l=Ps(e),u=r.get(l);u||(u=a.querySelector(tl(l)),u||(e=P({src:e,async:!0},n),(n=Mi.get(l))&&lh(e,n),u=a.createElement("script"),Mt(u),Dn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Nb(e,n){wa.M(e,n);var a=Fs;if(a&&e){var r=Rt(a).hoistableScripts,l=Ps(e),u=r.get(l);u||(u=a.querySelector(tl(l)),u||(e=P({src:e,async:!0,type:"module"},n),(n=Mi.get(l))&&lh(e,n),u=a.createElement("script"),Mt(u),Dn(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Xx(e,n,a,r){var l=(l=et.current)?$o(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Bs(a.href),n=Rt(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Bs(a.href);var u=Rt(l).hoistableStyles,x=u.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=l.querySelector(el(e)))?u._p||(x.instance=u,x.state.loading=5):(u=Mi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,u)),Db(l,e,u,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ps(a),n=Rt(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Bs(e){return'href="'+mi(e)+'"'}function el(e){return'link[rel="stylesheet"]['+e+"]"}function Wx(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function Db(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ke]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Ke]=!0,n.onload=n.onerror=Jt.bind(null,n),Dn(n,"link",a),Mt(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ps(e){return'[src="'+mi(e)+'"]'}function tl(e){return"script[async]"+e}function jx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+mi(a.href)+'"]');if(r)return n.instance=r,Mt(r),r;var l=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Mt(r),Dn(r,"style",l),Gc(r,a.precedence,e),n.instance=r;case"stylesheet":l=Bs(a.href);var u=e.querySelector(el(l));if(u)return n.state.loading|=4,n.instance=u,Mt(u),u;r=Wx(a),(l=Mi.get(l))&&oh(r,l),u=(e.ownerDocument||e).createElement("link"),Mt(u);var x=u;return x._p=new Promise(function(w,I){x.onload=w,x.onerror=I}),Dn(u,"link",r),n.state.loading|=4,Gc(u,a.precedence,e),n.instance=u;case"script":return u=Ps(a.src),(l=e.querySelector(tl(u)))?(n.instance=l,Mt(l),l):(r=a,(l=Mi.get(u))&&(r=P({},a),lh(r,l)),e=e.ownerDocument||e,l=e.createElement("script"),Mt(l),Dn(l,"link",r),e.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Gc(r,a.precedence,e));return n.instance}function Gc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)u=w;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function oh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function lh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vc=null;function qx(e,n,a){if(Vc===null){var r=new Map,l=Vc=new Map;l.set(a,r)}else l=Vc,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var u=a[l];if(!(u[Fe]||u[A]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(n)||"";x=e+x;var w=r.get(x);w?w.push(u):r.set(x,[u])}}return r}function ch(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ub(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yx(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Zx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kx(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Qx(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Kx(n),e.suspenseyImages.push(n)),e=Fb.bind(e),n.decode().then(e,e))}function Lb(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Bs(r.href),u=n.querySelector(el(l));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=nl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,Mt(u);return}u=n.ownerDocument||n,r=Wx(r),(l=Mi.get(l))&&oh(r,l),u=u.createElement("link"),Mt(u);var x=u;x._p=new Promise(function(w,I){x.onload=w,x.onerror=I}),Dn(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=nl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kc=0;function Ob(e,n){return e.stylesheets&&e.count===0&&Wc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&kc===0&&(kc=62500*Jy());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>kc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Jx(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Wc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function nl(){this.count--,Jx(this)}function Fb(){this.imgCount--,Jx(this)}var Xc=null;function Wc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xc=new Map,n.forEach(Bb,e),Xc=null,nl.call(e))}function Bb(e,n){if(!(n.state.loading&4)){var a=Xc.get(e);if(a)var r=a.get(null);else{a=new Map,Xc.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var x=l[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}l=n.instance,x=l.getAttribute("data-precedence"),u=a.get(x)||r,u===r&&a.set(null,l),a.set(x,l),this.count++,r=nl.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),n.state.loading|=4}}var Is={$$typeof:ie,Provider:null,Consumer:null,_currentValue:Vt,_currentValue2:Vt,_threadCount:0};function Pb(e,n,a,r,l,u,x,w,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ts(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ts(0),this.hiddenUpdates=ts(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.transitionTypes=null,this.incompleteTransitions=new Map}function $x(e,n,a,r,l,u,x,w,I,ne,fe,Me){return e=new Pb(e,n,a,x,I,ne,fe,Me,w),n=1,u===!0&&(n|=24),u=Yn(3,null,null,n),e.current=u,u.stateNode=e,n=Ef(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},Cf(u),e}function ev(e){return e?(e=us,e):us}function tv(e,n,a,r,l,u){l=ev(l),r.context===null?r.context=l:r.pendingContext=l,r=Za(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Ka(e,r,n),a!==null&&(Jn(a,e,n),Lo(a,e,n))}function nv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function uh(e,n){nv(e,n),(e=e.alternate)&&nv(e,n)}function iv(e){if(e.tag===13||e.tag===31){var n=Er(e,67108864);n!==null&&Jn(n,e,67108864),uh(e,67108864)}}function av(e){if(e.tag===13||e.tag===31){var n=li();n=go(n);var a=Er(e,n);a!==null&&Jn(a,e,n),uh(e,n)}}var zs=!0;function Ib(e,n,a,r){var l=Se.T;Se.T=null;var u=De.p;try{De.p=2,fh(e,n,a,r)}finally{De.p=u,Se.T=l}}function zb(e,n,a,r){var l=Se.T;Se.T=null;var u=De.p;try{De.p=8,fh(e,n,a,r)}finally{De.p=u,Se.T=l}}function fh(e,n,a,r){if(zs){var l=dh(r);if(l===null)jd(e,n,r,jc,a),sv(e,r);else if(Gb(l,e,n,a,r))r.stopPropagation();else if(sv(e,r),n&4&&-1<Hb.indexOf(e)){for(;l!==null;){var u=mt(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=ha(u.pendingLanes);if(x!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var I=1<<31-ut(x);w.entanglements[1]|=I,x&=~I}ta(u),(Xt&6)===0&&(Dc=Ie()+500,Zo(0))}}break;case 31:case 13:w=Er(u,2),w!==null&&Jn(w,u,2),Oc(),uh(u,2)}if(u=dh(r),u===null&&jd(e,n,r,jc,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else jd(e,n,r,null,a)}}function dh(e){return e=Ku(e),hh(e)}var jc=null;function hh(e){if(jc=null,e=ft(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jc=e,null}function rv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case ot:return 2;case q:return 8;case Ue:case ye:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var ph=!1,lr=null,cr=null,ur=null,il=new Map,al=new Map,fr=[],Hb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sv(e,n){switch(e){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function rl(e,n,a,r,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=mt(n),n!==null&&iv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Gb(e,n,a,r,l){switch(n){case"focusin":return lr=rl(lr,e,n,a,r,l),!0;case"dragenter":return cr=rl(cr,e,n,a,r,l),!0;case"mouseover":return ur=rl(ur,e,n,a,r,l),!0;case"pointerover":var u=l.pointerId;return il.set(u,rl(il.get(u)||null,e,n,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,al.set(u,rl(al.get(u)||null,e,n,a,r,l)),!0}return!1}function ov(e){var n=ft(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ul(e.priority,function(){av(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ul(e.priority,function(){av(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=dh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Zu=r,a.target.dispatchEvent(r),Zu=null}else return n=mt(a),n!==null&&iv(n),e.blockedOn=a,!1;n.shift()}return!0}function lv(e,n,a){qc(e)&&a.delete(n)}function Vb(){ph=!1,lr!==null&&qc(lr)&&(lr=null),cr!==null&&qc(cr)&&(cr=null),ur!==null&&qc(ur)&&(ur=null),il.forEach(lv),al.forEach(lv)}function Yc(e,n){e.blockedOn===n&&(e.blockedOn=null,ph||(ph=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vb)))}var Zc=null;function cv(e){Zc!==e&&(Zc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zc===e&&(Zc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],l=e[n+2];if(typeof r!="function"){if(hh(r||a)===null)continue;break}var u=mt(a);u!==null&&(e.splice(n,3),n-=3,Zf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Hs(e){function n(I){return Yc(I,e)}lr!==null&&Yc(lr,e),cr!==null&&Yc(cr,e),ur!==null&&Yc(ur,e),il.forEach(n),al.forEach(n);for(var a=0;a<fr.length;a++){var r=fr[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)ov(a),a.blockedOn===null&&fr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],x=l[k]||null;if(typeof u=="function")x||cv(a);else if(x){var w=null;if(u&&u.hasAttribute("formAction")){if(l=u,x=u[k]||null)w=x.formAction;else if(hh(l)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),cv(a)}}}function uv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return l=x})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function mh(e){this._internalRoot=e}Kc.prototype.render=mh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=li();tv(a,r,e,n,null,null)},Kc.prototype.unmount=mh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;tv(e.current,2,null,e,null,null),Oc(),n[de]=null}};function Kc(e){this._internalRoot=e}Kc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Dl();e={blockedOn:null,target:e,priority:n};for(var a=0;a<fr.length&&n!==0&&n<fr[a].priority;a++);fr.splice(a,0,e),a===0&&ov(e)}};var fv=t.version;if(fv!=="19.3.0")throw Error(s(527,fv,"19.3.0"));De.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var kb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Se,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{Qe=Qc.inject(kb),He=Qc}catch{}}return ol.createRoot=function(e,n){if(!c(e))throw Error(s(299));var a=!1,r="",l=eg,u=tg,x=ng;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=$x(e,1,!1,null,null,a,r,null,l,u,x,uv),e[de]=n.current,Wd(e),new mh(n)},ol.hydrateRoot=function(e,n,a){if(!c(e))throw Error(s(299));var r=!1,l="",u=eg,x=tg,w=ng,I=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=$x(e,1,!0,n,a??null,r,l,I,u,x,w,uv),n.context=ev(null),a=n.current,r=li(),r=go(r),l=Za(r),l.callback=null,Ka(a,l,r),a=r,n.current.lanes=a,ki(n,a),ta(n),e[de]=n.current,Wd(e),new Kc(n)},ol.version="19.3.0",ol}var yv;function eM(){if(yv)return vh.exports;yv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vh.exports=$b(),vh.exports}var tM=eM();const nM=S_(tM);function iM(){const[o,t]=rt.useState({x:-100,y:-100}),[i,s]=rt.useState({x:-100,y:-100}),[c,f]=rt.useState(!1),[d,h]=rt.useState(""),[p,m]=rt.useState(!1),[_,v]=rt.useState(!1);return rt.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches){v(!0);return}document.body.classList.add("custom-cursor-enabled");const g=D=>{t({x:D.clientX,y:D.clientY}),p||m(!0);const S=D.target.closest('a, button, [role="button"], input, select, textarea, [data-cursor-text]');if(S){f(!0);const O=S.getAttribute("data-cursor-text")||"";h(O)}else f(!1),h("")},E=()=>{m(!1)},C=()=>{m(!0)};return window.addEventListener("mousemove",g),document.addEventListener("mouseleave",E),document.addEventListener("mouseenter",C),()=>{document.body.classList.remove("custom-cursor-enabled"),window.removeEventListener("mousemove",g),document.removeEventListener("mouseleave",E),document.removeEventListener("mouseenter",C)}},[p]),rt.useEffect(()=>{if(_)return;let g;const E=()=>{s(C=>({x:C.x+(o.x-C.x)*.18,y:C.y+(o.y-C.y)*.18})),g=requestAnimationFrame(E)};return g=requestAnimationFrame(E),()=>cancelAnimationFrame(g)},[o,_]),_||!p?null:y.jsxs("div",{className:"pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300",children:[y.jsx("div",{className:"fixed top-0 left-0 w-2 h-2 rounded-full bg-[#38BDF8] transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(56,189,248,0.7)]",style:{transform:`translate3d(${o.x}px, ${o.y}px, 0)`}}),y.jsx("div",{className:`fixed top-0 left-0 rounded-full border border-[#38BDF8]/40 flex items-center justify-center transition-all duration-150 ease-out ${c?"w-12 h-12 -ml-6 -mt-6 bg-[#38BDF8]/15 backdrop-blur-[1px] border-[#38BDF8]":"w-7 h-7 -ml-3.5 -mt-3.5 bg-transparent"}`,style:{transform:`translate3d(${i.x}px, ${i.y}px, 0)`},children:d&&y.jsx("span",{className:"text-[8px] font-mono font-medium tracking-widest text-[#38BDF8] uppercase px-1",children:d})})]})}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y_=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=rt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:d,...h},p)=>rt.createElement("svg",{ref:p,...rM,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:y_("lucide",c),...h},[...d.map(([m,_])=>rt.createElement(m,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(o,t)=>{const i=rt.forwardRef(({className:s,...c},f)=>rt.createElement(sM,{ref:f,iconNode:t,className:y_(`lucide-${aM(o)}`,s),...c}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],lM=zt("ArrowRight",oM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],_l=zt("ArrowUpRight",cM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],fM=zt("ArrowUp",uM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],hM=zt("Award",dM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],b_=zt("Building2",pM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Tl=zt("Calendar",mM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],xM=zt("Camera",gM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_M=zt("Check",vM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],M_=zt("ChevronLeft",SM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E_=zt("ChevronRight",yM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],aa=zt("CircleCheck",bM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],EM=zt("Clock",MM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],AM=zt("CodeXml",TM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],CM=zt("Copy",wM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],NM=zt("Eye",RM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],UM=zt("Heart",DM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],T_=zt("Instagram",LM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],FM=zt("Lightbulb",OM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],A_=zt("Linkedin",BM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],IM=zt("Mail",PM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Al=zt("MapPin",zM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],GM=zt("Maximize2",HM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],kM=zt("Menu",VM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],WM=zt("Palette",XM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],w_=zt("Rocket",jM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],YM=zt("Send",qM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Zr=zt("Sparkles",ZM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],QM=zt("Target",KM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],$M=zt("TrendingUp",JM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],Vp=zt("Trophy",e1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],n1=zt("Twitter",t1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],kp=zt("Users",i1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zu=zt("X",a1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],s1=zt("Youtube",r1);function o1({onOpenJoin:o}){const[t,i]=rt.useState(!1),[s,c]=rt.useState(!1);rt.useEffect(()=>{const d=()=>{i(window.scrollY>30)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const f=[{label:"ABOUT",href:"#overview"},{label:"EVENTS",href:"#events"},{label:"GALLERY",href:"#gallery"},{label:"TEAM",href:"#team"},{label:"CONTACT",href:"#contact"}];return y.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-8 lg:px-10 ${t?"bg-[#020617]/80 backdrop-blur-md py-3.5 sm:py-4":"bg-transparent"}`,children:[y.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center -ml-1 sm:-ml-2",children:[y.jsx("a",{href:"#",className:"flex items-center group",children:y.jsx("img",{src:"/assets/ecell-logo.png",alt:"E-Cell Logo",className:"h-13 sm:h-15 md:h-16 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300 group-hover:scale-105"})}),y.jsx("div",{className:"h-9 sm:h-11 w-[1px] bg-[#38BDF8]/35 mx-3.5 sm:mx-5"}),y.jsxs("div",{className:"flex items-center gap-3 group/wit",children:[y.jsx("img",{src:"/assets/college/wit-logo.png",alt:"Walchand Institute of Technology",className:"h-13 sm:h-15 md:h-16 w-auto object-contain transition-transform duration-300 group-hover/wit:scale-105 drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)]"}),y.jsxs("div",{className:"flex flex-col justify-center",children:[y.jsx("span",{className:"text-sm sm:text-base md:text-lg font-mono text-[#F8FAFC] tracking-wider uppercase font-bold leading-none",children:"WIT"}),y.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-[#94A3B8] tracking-widest uppercase leading-none mt-1 hidden sm:block",children:"SOLAPUR"})]})]})]}),y.jsx("nav",{className:"hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-[#38BDF8]/20 bg-[#0B1528]/60 backdrop-blur-md shadow-[0_4px_25px_rgba(2,6,23,0.6)]",children:f.map(d=>y.jsxs("a",{href:d.href,className:"relative px-4 py-2 rounded-full text-xs lg:text-[13px] font-sans font-semibold tracking-[0.22em] text-[#F8FAFC] hover:text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all duration-300 group flex items-center gap-1.5",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"}),y.jsx("span",{children:d.label}),y.jsx("span",{className:"absolute bottom-1 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"})]},d.label))}),y.jsx("div",{className:"hidden md:flex items-center",children:y.jsx("a",{href:"#",onClick:d=>{d.preventDefault(),o==null||o()},className:"group flex items-center transition-all duration-300 hover:scale-105",title:"HEXATECH",children:y.jsx("img",{src:"/assets/hexatech-logo.svg",alt:"Hexatech Logo",className:"h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_18px_rgba(0,194,255,0.45)] group-hover:drop-shadow-[0_2px_24px_rgba(0,194,255,0.7)] transition-all"})})}),y.jsxs("div",{className:"md:hidden flex items-center gap-4",children:[y.jsx("a",{href:"#",onClick:d=>{d.preventDefault(),o==null||o()},className:"flex items-center",title:"HEXATECH",children:y.jsx("img",{src:"/assets/hexatech-logo.svg",alt:"Hexatech Logo",className:"h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(0,194,255,0.35)]"})}),y.jsx("button",{onClick:()=>c(!s),className:"p-1.5 text-[#94A3B8] hover:text-[#F8FAFC]","aria-label":"Toggle navigation menu",children:s?y.jsx(zu,{className:"w-5 h-5"}):y.jsx(kM,{className:"w-5 h-5"})})]})]}),s&&y.jsxs("div",{className:"fixed inset-0 top-[72px] bg-[#020617]/98 backdrop-blur-xl p-8 flex flex-col justify-between md:hidden z-40 border-t border-[#38BDF8]/15 animate-in fade-in duration-200",children:[y.jsx("div",{className:"flex flex-col space-y-6 pt-4",children:f.map(d=>y.jsx("a",{href:d.href,onClick:()=>c(!1),className:"font-display font-semibold text-2xl text-[#F8FAFC] hover:text-[#38BDF8] tracking-tight",children:d.label},d.label))}),y.jsxs("div",{className:"pt-6 border-t border-[#38BDF8]/15 flex items-center justify-between text-xs font-mono text-[#94A3B8]",children:[y.jsx("span",{children:"Walchand Institute of Technology"}),y.jsxs("span",{children:["© ",new Date().getFullYear()," E-Cell"]})]})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="186",l1=0,bv=1,c1=2,Tu=1,u1=2,pl=3,Kr=0,$n=1,La=2,Fa=0,gl=1,Du=2,Mv=3,Ev=4,f1=5,eo=100,d1=101,h1=102,p1=103,m1=104,g1=200,x1=201,v1=202,_1=203,C_=204,R_=205,S1=206,y1=207,b1=208,M1=209,E1=210,T1=211,A1=212,w1=213,C1=214,Jh=0,$h=1,ep=2,Sl=3,tp=4,np=5,ip=6,ap=7,N_=0,R1=1,N1=2,la=0,D_=1,U_=2,L_=3,Wp=4,O_=5,F_=6,B_=7,P_=300,Qr=301,ro=302,bh=303,Mh=304,Hu=306,rp=1e3,Oa=1001,sp=1002,Ln=1003,D1=1004,Jc=1005,Pn=1006,Eh=1007,qr=1008,wi=1009,I_=1010,z_=1011,yl=1012,jp=1013,ca=1014,sa=1015,ua=1016,qp=1017,Yp=1018,bl=1020,H_=35902,G_=35899,V_=1021,k_=1022,Hi=1023,Pa=1026,Yr=1027,X_=1028,Zp=1029,Jr=1030,Kp=1031,Qp=1033,Au=33776,wu=33777,Cu=33778,Ru=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,dp=37492,hp=37496,pp=37488,mp=37489,Uu=37490,gp=37491,xp=37808,vp=37809,_p=37810,Sp=37811,yp=37812,bp=37813,Mp=37814,Ep=37815,Tp=37816,Ap=37817,wp=37818,Cp=37819,Rp=37820,Np=37821,Dp=36492,Up=36494,Lp=36495,Op=36283,Fp=36284,Lu=36285,Bp=36286,U1=3200,Tv=0,L1=1,_r="",Ti="srgb",Ou="srgb-linear",Fu="linear",Qt="srgb",Th=7680,O1=519,F1=512,B1=513,P1=514,Jp=515,I1=516,z1=517,$p=518,H1=519,G1=35044,Av="300 es",oa=2e3,Bu=2001;function V1(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Pu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function k1(){const o=Pu("canvas");return o.style.display="block",o}const wv={};function Cv(...o){const t="THREE."+o.shift();console.log(t,...o)}function W_(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function dt(...o){o=W_(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Gt(...o){o=W_(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function io(...o){const t=o.join(" ");t in wv||(wv[t]=!0,dt(...o))}function X1(o,t,i){return new Promise(function(s,c){function f(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:c();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const W1={[Jh]:$h,[ep]:ip,[tp]:ap,[Sl]:np,[$h]:Jh,[ip]:ep,[ap]:tp,[np]:Sl};class es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const c=s[t];if(c!==void 0){const f=c.indexOf(i);f!==-1&&c.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const c=s.slice(0);for(let f=0,d=c.length;f<d;f++)c[f].call(this,t);t.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rv=1234567;const xl=Math.PI/180,Ml=180/Math.PI;function oo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[t&255]+Fn[t>>8&255]+"-"+Fn[t>>16&15|64]+Fn[t>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function Ft(o,t,i){return Math.max(t,Math.min(i,o))}function em(o,t){return(o%t+t)%t}function j1(o,t,i,s,c){return s+(o-t)*(c-s)/(i-t)}function q1(o,t,i){return o!==t?(i-o)/(t-o):0}function vl(o,t,i){return(1-i)*o+i*t}function Y1(o,t,i,s){return vl(o,t,1-Math.exp(-i*s))}function Z1(o,t=1){return t-Math.abs(em(o,t*2)-t)}function K1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Q1(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function J1(o,t){return o+Math.floor(Math.random()*(t-o+1))}function $1(o,t){return o+Math.random()*(t-o)}function eE(o){return o*(.5-Math.random())}function tE(o){o!==void 0&&(Rv=o);let t=Rv+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nE(o){return o*xl}function iE(o){return o*Ml}function aE(o){return o>0&&Number.isInteger(o)&&2**Math.round(Math.log2(o))===o}function rE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function sE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function oE(o,t,i,s,c){const f=Math.cos,d=Math.sin,h=f(i/2),p=d(i/2),m=f((t+s)/2),_=d((t+s)/2),v=f((t-s)/2),g=d((t-s)/2),E=f((s-t)/2),C=d((s-t)/2);switch(c){case"XYX":o.set(h*_,p*v,p*g,h*m);break;case"YZY":o.set(p*g,h*_,p*v,h*m);break;case"ZXZ":o.set(p*v,p*g,h*_,h*m);break;case"XZX":o.set(h*_,p*C,p*E,h*m);break;case"YXY":o.set(p*E,h*_,p*C,h*m);break;case"ZYZ":o.set(p*C,p*E,h*_,h*m);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+c)}}function to(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $c={DEG2RAD:xl,RAD2DEG:Ml,generateUUID:oo,clamp:Ft,euclideanModulo:em,mapLinear:j1,inverseLerp:q1,lerp:vl,damp:Y1,pingpong:Z1,smoothstep:K1,smootherstep:Q1,randInt:J1,randFloat:$1,randFloatSpread:eE,seededRandom:tE,degToRad:nE,radToDeg:iE,isPowerOfTwo:aE,ceilPowerOfTwo:rE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:oE,normalize:Wn,denormalize:to},am=class am{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6],this.y=c[1]*i+c[4]*s+c[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ft(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),c=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*c+t.x,this.y=f*c+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};am.prototype.isVector2=!0;let Wt=am;class lo{constructor(t=0,i=0,s=0,c=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=c}static slerpFlat(t,i,s,c,f,d,h){let p=s[c+0],m=s[c+1],_=s[c+2],v=s[c+3],g=f[d+0],E=f[d+1],C=f[d+2],D=f[d+3];if(v!==D||p!==g||m!==E||_!==C){let b=p*g+m*E+_*C+v*D;b<0&&(g=-g,E=-E,C=-C,D=-D,b=-b);let S=1-h;if(b<.9995){const O=Math.acos(b),W=Math.sin(O);S=Math.sin(S*O)/W,h=Math.sin(h*O)/W,p=p*S+g*h,m=m*S+E*h,_=_*S+C*h,v=v*S+D*h}else{p=p*S+g*h,m=m*S+E*h,_=_*S+C*h,v=v*S+D*h;const O=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=O,m*=O,_*=O,v*=O}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,c,f,d){const h=s[c],p=s[c+1],m=s[c+2],_=s[c+3],v=f[d],g=f[d+1],E=f[d+2],C=f[d+3];return t[i]=h*C+_*v+p*E-m*g,t[i+1]=p*C+_*g+m*v-h*E,t[i+2]=m*C+_*E+h*g-p*v,t[i+3]=_*C-h*v-p*g-m*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,c){return this._x=t,this._y=i,this._z=s,this._w=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,c=t._y,f=t._z,d=t._order,h=Math.cos,p=Math.sin,m=h(s/2),_=h(c/2),v=h(f/2),g=p(s/2),E=p(c/2),C=p(f/2);switch(d){case"XYZ":this._x=g*_*v+m*E*C,this._y=m*E*v-g*_*C,this._z=m*_*C+g*E*v,this._w=m*_*v-g*E*C;break;case"YXZ":this._x=g*_*v+m*E*C,this._y=m*E*v-g*_*C,this._z=m*_*C-g*E*v,this._w=m*_*v+g*E*C;break;case"ZXY":this._x=g*_*v-m*E*C,this._y=m*E*v+g*_*C,this._z=m*_*C+g*E*v,this._w=m*_*v-g*E*C;break;case"ZYX":this._x=g*_*v-m*E*C,this._y=m*E*v+g*_*C,this._z=m*_*C-g*E*v,this._w=m*_*v+g*E*C;break;case"YZX":this._x=g*_*v+m*E*C,this._y=m*E*v+g*_*C,this._z=m*_*C-g*E*v,this._w=m*_*v-g*E*C;break;case"XZY":this._x=g*_*v-m*E*C,this._y=m*E*v-g*_*C,this._z=m*_*C+g*E*v,this._w=m*_*v+g*E*C;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,c=Math.sin(s);return this._x=t.x*c,this._y=t.y*c,this._z=t.z*c,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],c=i[4],f=i[8],d=i[1],h=i[5],p=i[9],m=i[2],_=i[6],v=i[10],g=s+h+v;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(_-p)*E,this._y=(f-m)*E,this._z=(d-c)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(_-p)/E,this._x=.25*E,this._y=(c+d)/E,this._z=(f+m)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(f-m)/E,this._x=(c+d)/E,this._y=.25*E,this._z=(p+_)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-c)/E,this._x=(f+m)/E,this._y=(p+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const c=Math.min(1,i/s);return this.slerp(t,c),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,c=t._y,f=t._z,d=t._w,h=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+d*h+c*m-f*p,this._y=c*_+d*p+f*h-s*m,this._z=f*_+d*m+s*p-c*h,this._w=d*_-s*h-c*p-f*m,this._onChangeCallback(),this}slerp(t,i){let s=t._x,c=t._y,f=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,c=-c,f=-f,d=-d,h=-h);let p=1-i;if(h<.9995){const m=Math.acos(h),_=Math.sin(m);p=Math.sin(p*m)/_,i=Math.sin(i*m)/_,this._x=this._x*p+s*i,this._y=this._y*p+c*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+c*i,this._z=this._z*p+f*i,this._w=this._w*p+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),c=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(c*Math.sin(t),c*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const rm=class rm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Nv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Nv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*c,this.y=f[1]*i+f[4]*s+f[7]*c,this.z=f[2]*i+f[5]*s+f[8]*c,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*c+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*c+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*c+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*c+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,c=this.z,f=t.x,d=t.y,h=t.z,p=t.w,m=2*(d*c-h*s),_=2*(h*i-f*c),v=2*(f*s-d*i);return this.x=i+p*m+d*v-h*_,this.y=s+p*_+h*m-f*v,this.z=c+p*v+f*_-d*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,c=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*c,this.y=f[1]*i+f[5]*s+f[9]*c,this.z=f[2]*i+f[6]*s+f[10]*c,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this.z=Ft(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this.z=Ft(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,c=t.y,f=t.z,d=i.x,h=i.y,p=i.z;return this.x=c*p-f*h,this.y=f*d-s*p,this.z=s*h-c*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ft(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,c=this.z-t.z;return i*i+s*s+c*c}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const c=Math.sin(i)*t;return this.x=c*Math.sin(s),this.y=Math.cos(i)*t,this.z=c*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),c=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=c,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};rm.prototype.isVector3=!0;let he=rm;const Ah=new he,Nv=new lo,sm=class sm{constructor(t,i,s,c,f,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,p,m)}set(t,i,s,c,f,d,h,p,m){const _=this.elements;return _[0]=t,_[1]=c,_[2]=h,_[3]=i,_[4]=f,_[5]=p,_[6]=s,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[3],p=s[6],m=s[1],_=s[4],v=s[7],g=s[2],E=s[5],C=s[8],D=c[0],b=c[3],S=c[6],O=c[1],W=c[4],R=c[7],U=c[2],L=c[5],P=c[8];return f[0]=d*D+h*O+p*U,f[3]=d*b+h*W+p*L,f[6]=d*S+h*R+p*P,f[1]=m*D+_*O+v*U,f[4]=m*b+_*W+v*L,f[7]=m*S+_*R+v*P,f[2]=g*D+E*O+C*U,f[5]=g*b+E*W+C*L,f[8]=g*S+E*R+C*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8];return i*d*_-i*h*m-s*f*_+s*h*p+c*f*m-c*d*p}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],v=_*d-h*m,g=h*p-_*f,E=m*f-d*p,C=i*v+s*g+c*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=v*D,t[1]=(c*m-_*s)*D,t[2]=(h*s-c*d)*D,t[3]=g*D,t[4]=(_*i-c*p)*D,t[5]=(c*f-h*i)*D,t[6]=E*D,t[7]=(s*p-m*i)*D,t[8]=(d*i-s*f)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,c,f,d,h){const p=Math.cos(f),m=Math.sin(f);return this.set(s*p,s*m,-s*(p*d+m*h)+d+t,-c*m,c*p,-c*(-m*d+p*h)+h+i,0,0,1),this}scale(t,i){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wh.makeScale(t,i)),this}rotate(t){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wh.makeRotation(-t)),this}translate(t,i){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<9;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let gt=sm;const wh=new gt,Dv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lE(){const o={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(c,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Qt&&(c.r=Ba(c.r),c.g=Ba(c.g),c.b=Ba(c.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(c.applyMatrix3(this.spaces[f].toXYZ),c.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qt&&(c.r=ao(c.r),c.g=ao(c.g),c.b=ao(c.b))),c},workingToColorSpace:function(c,f){return this.convert(c,this.workingColorSpace,f)},colorSpaceToWorking:function(c,f){return this.convert(c,f,this.workingColorSpace)},getPrimaries:function(c){return this.spaces[c].primaries},getTransfer:function(c){return c===_r?Fu:this.spaces[c].transfer},getToneMappingMode:function(c){return this.spaces[c].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(c,f=this.workingColorSpace){return c.fromArray(this.spaces[f].luminanceCoefficients)},define:function(c){Object.assign(this.spaces,c)},_getMatrix:function(c,f,d){return c.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(c){return this.spaces[c].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(c=this.workingColorSpace){return this.spaces[c].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(c,f){return io("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(c,f)},toWorkingColorSpace:function(c,f){return io("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(c,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ou]:{primaries:t,whitePoint:s,transfer:Fu,toXYZ:Dv,fromXYZ:Uv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:Qt,toXYZ:Dv,fromXYZ:Uv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Pt=lE();function Ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ao(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gs;class cE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Gs===void 0&&(Gs=Pu("canvas")),Gs.width=t.width,Gs.height=t.height;const c=Gs.getContext("2d");t instanceof ImageData?c.putImageData(t,0,0):c.drawImage(t,0,0,t.width,t.height),s=Gs}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Pu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const c=s.getImageData(0,0,t.width,t.height),f=c.data;for(let d=0;d<f.length;d++)f[d]=Ba(f[d]/255)*255;return s.putImageData(c,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:t.width,height:t.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uE=0;class tm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=oo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},c=this.data;if(c!==null){let f;if(Array.isArray(c)){f=[];for(let d=0,h=c.length;d<h;d++)c[d].isDataTexture?f.push(Ch(c[d].image)):f.push(Ch(c[d]))}else f=Ch(c);s.url=f}return i||(t.images[this.uuid]=s),s}}function Ch(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let fE=0;const Rh=new he;class In extends es{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Oa,c=Oa,f=Pn,d=qr,h=Hi,p=wi,m=In.DEFAULT_ANISOTROPY,_=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=oo(),this.name="",this.source=new tm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=c,this.magFilter=f,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}c&&s&&c.isVector2&&s.isVector2||c&&s&&c.isVector3&&s.isVector3||c&&s&&c.isMatrix3&&s.isMatrix3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rp:t.x=t.x-Math.floor(t.x);break;case Oa:t.x=t.x<0?0:1;break;case sp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rp:t.y=t.y-Math.floor(t.y);break;case Oa:t.y=t.y<0?0:1;break;case sp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=P_;In.DEFAULT_ANISOTROPY=1;const om=class om{constructor(t=0,i=0,s=0,c=1){this.x=t,this.y=i,this.z=s,this.w=c}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,c){return this.x=t,this.y=i,this.z=s,this.w=c,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,c=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*c+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*c+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*c+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*c+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,c,f;const p=t.elements,m=p[0],_=p[4],v=p[8],g=p[1],E=p[5],C=p[9],D=p[2],b=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-D)<.01&&Math.abs(C-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+D)<.1&&Math.abs(C+b)<.1&&Math.abs(m+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const W=(m+1)/2,R=(E+1)/2,U=(S+1)/2,L=(_+g)/4,P=(v+D)/4,T=(C+b)/4;return W>R&&W>U?W<.01?(s=0,c=.707106781,f=.707106781):(s=Math.sqrt(W),c=L/s,f=P/s):R>U?R<.01?(s=.707106781,c=0,f=.707106781):(c=Math.sqrt(R),s=L/c,f=T/c):U<.01?(s=.707106781,c=.707106781,f=0):(f=Math.sqrt(U),s=P/f,c=T/f),this.set(s,c,f,i),this}let O=Math.sqrt((b-C)*(b-C)+(v-D)*(v-D)+(g-_)*(g-_));return Math.abs(O)<.001&&(O=1),this.x=(b-C)/O,this.y=(v-D)/O,this.z=(g-_)/O,this.w=Math.acos((m+E+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ft(this.x,t.x,i.x),this.y=Ft(this.y,t.y,i.y),this.z=Ft(this.z,t.z,i.z),this.w=Ft(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ft(this.x,t,i),this.y=Ft(this.y,t,i),this.z=Ft(this.z,t,i),this.w=Ft(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ft(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};om.prototype.isVector4=!0;let fn=om;class dE extends es{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,t,i),this.scissorTest=!1,this.viewport=new fn(0,0,t,i),this.textures=[];const c={width:t,height:i,depth:s.depth},f=new In(c),d=s.count;for(let h=0;h<d;h++)this.textures[h]=f.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let c=0,f=this.textures.length;c<f;c++)this.textures[c].image.width=t,this.textures[c].image.height=i,this.textures[c].image.depth=s,this.textures[c].isData3DTexture!==!0&&(this.textures[c].isArrayTexture=this.textures[c].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const c=Object.assign({},t.textures[i].image);this.textures[i].source=new tm(c)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends dE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class j_ extends In{constructor(t=null,i=1,s=1,c=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hE extends In{constructor(t=null,i=1,s=1,c=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:c},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Iu=class Iu{constructor(t,i,s,c,f,d,h,p,m,_,v,g,E,C,D,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,c,f,d,h,p,m,_,v,g,E,C,D,b)}set(t,i,s,c,f,d,h,p,m,_,v,g,E,C,D,b){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=c,S[1]=f,S[5]=d,S[9]=h,S[13]=p,S[2]=m,S[6]=_,S[10]=v,S[14]=g,S[3]=E,S[7]=C,S[11]=D,S[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Iu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,c=1/Vs.setFromMatrixColumn(t,0).length(),f=1/Vs.setFromMatrixColumn(t,1).length(),d=1/Vs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*c,i[1]=s[1]*c,i[2]=s[2]*c,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,c=t.y,f=t.z,d=Math.cos(s),h=Math.sin(s),p=Math.cos(c),m=Math.sin(c),_=Math.cos(f),v=Math.sin(f);if(t.order==="XYZ"){const g=d*_,E=d*v,C=h*_,D=h*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=E+C*m,i[5]=g-D*m,i[9]=-h*p,i[2]=D-g*m,i[6]=C+E*m,i[10]=d*p}else if(t.order==="YXZ"){const g=p*_,E=p*v,C=m*_,D=m*v;i[0]=g+D*h,i[4]=C*h-E,i[8]=d*m,i[1]=d*v,i[5]=d*_,i[9]=-h,i[2]=E*h-C,i[6]=D+g*h,i[10]=d*p}else if(t.order==="ZXY"){const g=p*_,E=p*v,C=m*_,D=m*v;i[0]=g-D*h,i[4]=-d*v,i[8]=C+E*h,i[1]=E+C*h,i[5]=d*_,i[9]=D-g*h,i[2]=-d*m,i[6]=h,i[10]=d*p}else if(t.order==="ZYX"){const g=d*_,E=d*v,C=h*_,D=h*v;i[0]=p*_,i[4]=C*m-E,i[8]=g*m+D,i[1]=p*v,i[5]=D*m+g,i[9]=E*m-C,i[2]=-m,i[6]=h*p,i[10]=d*p}else if(t.order==="YZX"){const g=d*p,E=d*m,C=h*p,D=h*m;i[0]=p*_,i[4]=D-g*v,i[8]=C*v+E,i[1]=v,i[5]=d*_,i[9]=-h*_,i[2]=-m*_,i[6]=E*v+C,i[10]=g-D*v}else if(t.order==="XZY"){const g=d*p,E=d*m,C=h*p,D=h*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=g*v+D,i[5]=d*_,i[9]=E*v-C,i[2]=C*v-E,i[6]=h*_,i[10]=D*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pE,t,mE)}lookAt(t,i,s){const c=this.elements;return ui.subVectors(t,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),hr.crossVectors(s,ui),hr.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),hr.crossVectors(s,ui)),hr.normalize(),eu.crossVectors(ui,hr),c[0]=hr.x,c[4]=eu.x,c[8]=ui.x,c[1]=hr.y,c[5]=eu.y,c[9]=ui.y,c[2]=hr.z,c[6]=eu.z,c[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,c=i.elements,f=this.elements,d=s[0],h=s[4],p=s[8],m=s[12],_=s[1],v=s[5],g=s[9],E=s[13],C=s[2],D=s[6],b=s[10],S=s[14],O=s[3],W=s[7],R=s[11],U=s[15],L=c[0],P=c[4],T=c[8],F=c[12],B=c[1],V=c[5],K=c[9],ae=c[13],J=c[2],ie=c[6],Y=c[10],H=c[14],j=c[3],te=c[7],oe=c[11],me=c[15];return f[0]=d*L+h*B+p*J+m*j,f[4]=d*P+h*V+p*ie+m*te,f[8]=d*T+h*K+p*Y+m*oe,f[12]=d*F+h*ae+p*H+m*me,f[1]=_*L+v*B+g*J+E*j,f[5]=_*P+v*V+g*ie+E*te,f[9]=_*T+v*K+g*Y+E*oe,f[13]=_*F+v*ae+g*H+E*me,f[2]=C*L+D*B+b*J+S*j,f[6]=C*P+D*V+b*ie+S*te,f[10]=C*T+D*K+b*Y+S*oe,f[14]=C*F+D*ae+b*H+S*me,f[3]=O*L+W*B+R*J+U*j,f[7]=O*P+W*V+R*ie+U*te,f[11]=O*T+W*K+R*Y+U*oe,f[15]=O*F+W*ae+R*H+U*me,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[12],d=t[1],h=t[5],p=t[9],m=t[13],_=t[2],v=t[6],g=t[10],E=t[14],C=t[3],D=t[7],b=t[11],S=t[15],O=p*E-m*g,W=h*E-m*v,R=h*g-p*v,U=d*E-m*_,L=d*g-p*_,P=d*v-h*_;return i*(D*O-b*W+S*R)-s*(C*O-b*U+S*L)+c*(C*W-D*U+S*P)-f*(C*R-D*L+b*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],c=t[8],f=t[1],d=t[5],h=t[9],p=t[2],m=t[6],_=t[10];return i*(d*_-h*m)-s*(f*_-h*p)+c*(f*m-d*p)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const c=this.elements;return t.isVector3?(c[12]=t.x,c[13]=t.y,c[14]=t.z):(c[12]=t,c[13]=i,c[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],c=t[2],f=t[3],d=t[4],h=t[5],p=t[6],m=t[7],_=t[8],v=t[9],g=t[10],E=t[11],C=t[12],D=t[13],b=t[14],S=t[15],O=i*h-s*d,W=i*p-c*d,R=i*m-f*d,U=s*p-c*h,L=s*m-f*h,P=c*m-f*p,T=_*D-v*C,F=_*b-g*C,B=_*S-E*C,V=v*b-g*D,K=v*S-E*D,ae=g*S-E*b,J=O*ae-W*K+R*V+U*B-L*F+P*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/J;return t[0]=(h*ae-p*K+m*V)*ie,t[1]=(c*K-s*ae-f*V)*ie,t[2]=(D*P-b*L+S*U)*ie,t[3]=(g*L-v*P-E*U)*ie,t[4]=(p*B-d*ae-m*F)*ie,t[5]=(i*ae-c*B+f*F)*ie,t[6]=(b*R-C*P-S*W)*ie,t[7]=(_*P-g*R+E*W)*ie,t[8]=(d*K-h*B+m*T)*ie,t[9]=(s*B-i*K-f*T)*ie,t[10]=(C*L-D*R+S*O)*ie,t[11]=(v*R-_*L-E*O)*ie,t[12]=(h*F-d*V-p*T)*ie,t[13]=(i*V-s*F+c*T)*ie,t[14]=(D*W-C*U-b*O)*ie,t[15]=(_*U-v*W+g*O)*ie,this}scale(t){const i=this.elements,s=t.x,c=t.y,f=t.z;return i[0]*=s,i[4]*=c,i[8]*=f,i[1]*=s,i[5]*=c,i[9]*=f,i[2]*=s,i[6]*=c,i[10]*=f,i[3]*=s,i[7]*=c,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],c=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,c))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),c=Math.sin(i),f=1-s,d=t.x,h=t.y,p=t.z,m=f*d,_=f*h;return this.set(m*d+s,m*h-c*p,m*p+c*h,0,m*h+c*p,_*h+s,_*p-c*d,0,m*p-c*h,_*p+c*d,f*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,c,f,d){return this.set(1,s,f,0,t,1,d,0,i,c,1,0,0,0,0,1),this}compose(t,i,s){const c=this.elements,f=i._x,d=i._y,h=i._z,p=i._w,m=f+f,_=d+d,v=h+h,g=f*m,E=f*_,C=f*v,D=d*_,b=d*v,S=h*v,O=p*m,W=p*_,R=p*v,U=s.x,L=s.y,P=s.z;return c[0]=(1-(D+S))*U,c[1]=(E+R)*U,c[2]=(C-W)*U,c[3]=0,c[4]=(E-R)*L,c[5]=(1-(g+S))*L,c[6]=(b+O)*L,c[7]=0,c[8]=(C+W)*P,c[9]=(b-O)*P,c[10]=(1-(g+D))*P,c[11]=0,c[12]=t.x,c[13]=t.y,c[14]=t.z,c[15]=1,this}decompose(t,i,s){const c=this.elements;t.x=c[12],t.y=c[13],t.z=c[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Vs.set(c[0],c[1],c[2]).length();const h=Vs.set(c[4],c[5],c[6]).length(),p=Vs.set(c[8],c[9],c[10]).length();f<0&&(d=-d),Bi.copy(this);const m=1/d,_=1/h,v=1/p;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,i.setFromRotationMatrix(Bi),s.x=d,s.y=h,s.z=p,this}makePerspective(t,i,s,c,f,d,h=oa,p=!1){const m=this.elements,_=2*f/(i-t),v=2*f/(s-c),g=(i+t)/(i-t),E=(s+c)/(s-c);let C,D;if(p)C=f/(d-f),D=d*f/(d-f);else if(h===oa)C=-(d+f)/(d-f),D=-2*d*f/(d-f);else if(h===Bu)C=-d/(d-f),D=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=C,m[14]=D,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,c,f,d,h=oa,p=!1){const m=this.elements,_=2/(i-t),v=2/(s-c),g=-(i+t)/(i-t),E=-(s+c)/(s-c);let C,D;if(p)C=1/(d-f),D=d/(d-f);else if(h===oa)C=-2/(d-f),D=-(d+f)/(d-f);else if(h===Bu)C=-1/(d-f),D=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=C,m[14]=D,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let c=0;c<16;c++)if(i[c]!==s[c])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Iu.prototype.isMatrix4=!0;let hn=Iu;const Vs=new he,Bi=new hn,pE=new he(0,0,0),mE=new he(1,1,1),hr=new he,eu=new he,ui=new he,Lv=new hn,Ov=new lo;class $r{constructor(t=0,i=0,s=0,c=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=c}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,c=this._order){return this._x=t,this._y=i,this._z=s,this._order=c,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const c=t.elements,f=c[0],d=c[4],h=c[8],p=c[1],m=c[5],_=c[9],v=c[2],g=c[6],E=c[10];switch(i){case"XYZ":this._y=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Ft(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,f)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-_,E),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Lv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ov.setFromEuler(this),this.setFromQuaternion(Ov,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class q_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gE=0;const Fv=new he,ks=new lo,Ca=new hn,tu=new he,ll=new he,xE=new he,vE=new lo,Bv=new he(1,0,0),Pv=new he(0,1,0),Iv=new he(0,0,1),zv={type:"added"},_E={type:"removed"},Xs={type:"childadded",child:null},Nh={type:"childremoved",child:null};class ei extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new he,i=new $r,s=new lo,c=new he(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:c},modelViewMatrix:{value:new hn},normalMatrix:{value:new gt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new q_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ks.setFromAxisAngle(t,i),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,i){return ks.setFromAxisAngle(t,i),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Bv,t)}rotateY(t){return this.rotateOnAxis(Pv,t)}rotateZ(t){return this.rotateOnAxis(Iv,t)}translateOnAxis(t,i){return Fv.copy(t).applyQuaternion(this.quaternion),this.position.add(Fv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Bv,t)}translateY(t){return this.translateOnAxis(Pv,t)}translateZ(t){return this.translateOnAxis(Iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ca.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?tu.copy(t):tu.set(t,i,s);const c=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ca.lookAt(ll,tu,this.up):Ca.lookAt(tu,ll,this.up),this.quaternion.setFromRotationMatrix(Ca),c&&(Ca.extractRotation(c.matrixWorld),ks.setFromRotationMatrix(Ca),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zv),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_E),Nh.child=t,this.dispatchEvent(Nh),Nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zv),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,c=this.children.length;s<c;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,t,xE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,vE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,c=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*c,f[13]+=s-f[1]*i-f[5]*s-f[9]*c,f[14]+=c-f[2]*i-f[6]*s-f[10]*c}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,c=i.length;s<c;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const c=this.parent;if(t===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,h=f.length;d<h;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const c={};c.uuid=this.uuid,c.type=this.type,c.name=this.name,c.castShadow=this.castShadow,c.receiveShadow=this.receiveShadow,c.visible=this.visible,c.frustumCulled=this.frustumCulled,c.renderOrder=this.renderOrder,c.static=this.static,c.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(c.userData=this.userData),c.layers=this.layers.mask,c.matrix=this.matrix.toArray(),c.up=this.up.toArray(),this.pivot!==null&&(c.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(c.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(c.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(c.type="InstancedMesh",c.count=this.count,c.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(c.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(c.type="BatchedMesh",c.perObjectFrustumCulled=this.perObjectFrustumCulled,c.sortObjects=this.sortObjects,c.drawRanges=this._drawRanges,c.reservedRanges=this._reservedRanges,c.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),c.instanceInfo=this._instanceInfo.map(h=>({...h})),c.availableInstanceIds=this._availableInstanceIds.slice(),c.availableGeometryIds=this._availableGeometryIds.slice(),c.nextIndexStart=this._nextIndexStart,c.nextVertexStart=this._nextVertexStart,c.geometryCount=this._geometryCount,c.maxInstanceCount=this._maxInstanceCount,c.maxVertexCount=this._maxVertexCount,c.maxIndexCount=this._maxIndexCount,c.geometryInitialized=this._geometryInitialized,c.matricesTexture=this._matricesTexture.toJSON(t),c.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(c.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(c.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(c.boundingBox=this.boundingBox.toJSON()));function f(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?c.background=this.background.toJSON():this.background.isTexture&&(c.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(c.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){c.geometry=f(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];f(t.shapes,v)}else f(t.shapes,p)}}if(this.isSkinnedMesh&&(c.bindMode=this.bindMode,c.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),c.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(f(t.materials,this.material[p]));c.material=h}else c.material=f(t.materials,this.material);if(this.children.length>0){c.children=[];for(let h=0;h<this.children.length;h++)c.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){c.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];c.animations.push(f(t.animations,p))}}if(i){const h=d(t.geometries),p=d(t.materials),m=d(t.textures),_=d(t.images),v=d(t.shapes),g=d(t.skeletons),E=d(t.animations),C=d(t.nodes);h.length>0&&(s.geometries=h),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),C.length>0&&(s.nodes=C)}return s.object=c,s;function d(h){const p=[];for(const m in h){const _=h[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const c=t.children[s];this.add(c.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ei.DEFAULT_UP=new he(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nu extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let c=null,f=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){d=!0;for(const D of t.hand.values()){const b=i.getJointPose(D,s),S=this._getHandJoint(m,D);b!==null&&(S.matrix.fromArray(b.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=b.radius),S.visible=b!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],g=_.position.distanceTo(v.position),E=.02,C=.005;m.inputState.pinching&&g>E+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=E-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(c=i.getPose(t.targetRaySpace,s),c===null&&f!==null&&(c=f),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new nu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Y_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},iu={h:0,s:0,l:0};function Uh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class At{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const c=t;c&&c.isColor?this.copy(c):typeof c=="number"?this.setHex(c):typeof c=="string"&&this.setStyle(c)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,c=Pt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pt.colorSpaceToWorking(this,c),this}setHSL(t,i,s,c=Pt.workingColorSpace){if(t=em(t,1),i=Ft(i,0,1),s=Ft(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Uh(d,f,t+1/3),this.g=Uh(d,f,t),this.b=Uh(d,f,t-1/3)}return Pt.colorSpaceToWorking(this,c),this}setStyle(t,i=Ti){function s(f){f!==void 0&&parseFloat(f)<1&&dt("Color: Alpha component of "+t+" will be ignored.")}let c;if(c=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=c[1],h=c[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:dt("Color: Unknown color model "+t)}}else if(c=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=c[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=Y_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Pt.workingToColorSpace(Bn.copy(this),t),Math.round(Ft(Bn.r*255,0,255))*65536+Math.round(Ft(Bn.g*255,0,255))*256+Math.round(Ft(Bn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pt.workingColorSpace){Pt.workingToColorSpace(Bn.copy(this),i);const s=Bn.r,c=Bn.g,f=Bn.b,d=Math.max(s,c,f),h=Math.min(s,c,f);let p,m;const _=(h+d)/2;if(h===d)p=0,m=0;else{const v=d-h;switch(m=_<=.5?v/(d+h):v/(2-d-h),d){case s:p=(c-f)/v+(c<f?6:0);break;case c:p=(f-s)/v+2;break;case f:p=(s-c)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Bn.copy(this),i),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Ti){Pt.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,c=Bn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${c.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(c*255)})`}offsetHSL(t,i,s){return this.getHSL(pr),this.setHSL(pr.h+t,pr.s+i,pr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(pr),t.getHSL(iu);const s=vl(pr.h,iu.h,i),c=vl(pr.s,iu.s,i),f=vl(pr.l,iu.l,i);return this.setHSL(s,c,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,c=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*c,this.g=f[1]*i+f[4]*s+f[7]*c,this.b=f[2]*i+f[5]*s+f[8]*c,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new At;At.NAMES=Y_;class yE extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new he,Ra=new he,Lh=new he,Na=new he,Ws=new he,js=new he,Hv=new he,Oh=new he,Fh=new he,Bh=new he,Ph=new fn,Ih=new fn,zh=new fn;class zi{constructor(t=new he,i=new he,s=new he){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,c){c.subVectors(s,i),Pi.subVectors(t,i),c.cross(Pi);const f=c.lengthSq();return f>0?c.multiplyScalar(1/Math.sqrt(f)):c.set(0,0,0)}static getBarycoord(t,i,s,c,f){Pi.subVectors(c,i),Ra.subVectors(s,i),Lh.subVectors(t,i);const d=Pi.dot(Pi),h=Pi.dot(Ra),p=Pi.dot(Lh),m=Ra.dot(Ra),_=Ra.dot(Lh),v=d*m-h*h;if(v===0)return f.set(0,0,0),null;const g=1/v,E=(m*p-h*_)*g,C=(d*_-h*p)*g;return f.set(1-E-C,C,E)}static containsPoint(t,i,s,c){return this.getBarycoord(t,i,s,c,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,i,s,c,f,d,h,p){return this.getBarycoord(t,i,s,c,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Na.x),p.addScaledVector(d,Na.y),p.addScaledVector(h,Na.z),p)}static getInterpolatedAttribute(t,i,s,c,f,d){return Ph.setScalar(0),Ih.setScalar(0),zh.setScalar(0),Ph.fromBufferAttribute(t,i),Ih.fromBufferAttribute(t,s),zh.fromBufferAttribute(t,c),d.setScalar(0),d.addScaledVector(Ph,f.x),d.addScaledVector(Ih,f.y),d.addScaledVector(zh,f.z),d}static isFrontFacing(t,i,s,c){return Pi.subVectors(s,i),Ra.subVectors(t,i),Pi.cross(Ra).dot(c)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,c){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[c]),this}setFromAttributeAndIndices(t,i,s,c){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,c),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Pi.cross(Ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,c,f){return zi.getInterpolation(t,this.a,this.b,this.c,i,s,c,f)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,c=this.b,f=this.c;let d,h;Ws.subVectors(c,s),js.subVectors(f,s),Oh.subVectors(t,s);const p=Ws.dot(Oh),m=js.dot(Oh);if(p<=0&&m<=0)return i.copy(s);Fh.subVectors(t,c);const _=Ws.dot(Fh),v=js.dot(Fh);if(_>=0&&v<=_)return i.copy(c);const g=p*v-_*m;if(g<=0&&p>=0&&_<=0)return d=p/(p-_),i.copy(s).addScaledVector(Ws,d);Bh.subVectors(t,f);const E=Ws.dot(Bh),C=js.dot(Bh);if(C>=0&&E<=C)return i.copy(f);const D=E*m-p*C;if(D<=0&&m>=0&&C<=0)return h=m/(m-C),i.copy(s).addScaledVector(js,h);const b=_*C-E*v;if(b<=0&&v-_>=0&&E-C>=0)return Hv.subVectors(f,c),h=(v-_)/(v-_+(E-C)),i.copy(c).addScaledVector(Hv,h);const S=1/(b+D+g);return d=D*S,h=g*S,i.copy(s).addScaledVector(Ws,d).addScaledVector(js,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class wl{constructor(t=new he(1/0,1/0,1/0),i=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=f.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ii):Ii.fromBufferAttribute(f,d),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),au.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),au.copy(s.boundingBox)),au.applyMatrix4(t.matrixWorld),this.union(au)}const c=t.children;for(let f=0,d=c.length;f<d;f++)this.expandByObject(c[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cl),ru.subVectors(this.max,cl),qs.subVectors(t.a,cl),Ys.subVectors(t.b,cl),Zs.subVectors(t.c,cl),mr.subVectors(Ys,qs),gr.subVectors(Zs,Ys),Vr.subVectors(qs,Zs);let i=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!Hh(i,qs,Ys,Zs,ru)||(i=[1,0,0,0,1,0,0,0,1],!Hh(i,qs,Ys,Zs,ru))?!1:(su.crossVectors(mr,gr),i=[su.x,su.y,su.z],Hh(i,qs,Ys,Zs,ru))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Da=[new he,new he,new he,new he,new he,new he,new he,new he],Ii=new he,au=new wl,qs=new he,Ys=new he,Zs=new he,mr=new he,gr=new he,Vr=new he,cl=new he,ru=new he,su=new he,kr=new he;function Hh(o,t,i,s,c){for(let f=0,d=o.length-3;f<=d;f+=3){kr.fromArray(o,f);const h=c.x*Math.abs(kr.x)+c.y*Math.abs(kr.y)+c.z*Math.abs(kr.z),p=t.dot(kr),m=i.dot(kr),_=s.dot(kr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>h)return!1}return!0}const vn=new he,ou=new Wt;let bE=0;class di extends es{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=G1,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let c=0,f=this.itemSize;c<f;c++)this.array[t+c]=i.array[s+c];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)ou.fromBufferAttribute(this,i),ou.applyMatrix3(t),this.setXY(i,ou.x,ou.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=to(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=to(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=to(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=to(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=to(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this}setXYZW(t,i,s,c,f){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),c=Wn(c,this.array),f=Wn(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=c,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Z_ extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class K_ extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ci extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}const ME=new wl,ul=new he,Gh=new he;class Gu{constructor(t=new he,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):ME.setFromPoints(t).getCenter(s);let c=0;for(let f=0,d=t.length;f<d;f++)c=Math.max(c,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(c),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ul.subVectors(t,this.center);const i=ul.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),c=(s-this.radius)*.5;this.center.addScaledVector(ul,c/s),this.radius+=c}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ul.copy(t.center).add(Gh)),this.expandByPoint(ul.copy(t.center).sub(Gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let EE=0;const Ei=new hn,Vh=new ei,Ks=new he,fi=new wl,fl=new wl,An=new he;class hi extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V1(t)?K_:Z_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new gt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const c=this.attributes.tangent;return c!==void 0&&(c.transformDirection(t),c.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return Vh.lookAt(t),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let c=0,f=t.length;c<f;c++){const d=t[c];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ci(s,3))}else{const s=Math.min(t.length,i.count);for(let c=0;c<s;c++){const f=t[c];i.setXYZ(c,f.x,f.y,f.z||0)}t.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,c=i.length;s<c;s++){const f=i[s];fi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(t){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const h=i[f];fl.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(fi.min,fl.min),fi.expandByPoint(An),An.addVectors(fi.max,fl.max),fi.expandByPoint(An)):(fi.expandByPoint(fl.min),fi.expandByPoint(fl.max))}fi.getCenter(s);let c=0;for(let f=0,d=t.count;f<d;f++)An.fromBufferAttribute(t,f),c=Math.max(c,s.distanceToSquared(An));if(i)for(let f=0,d=i.length;f<d;f++){const h=i[f],p=this.morphTargetsRelative;for(let m=0,_=h.count;m<_;m++)An.fromBufferAttribute(h,m),p&&(Ks.fromBufferAttribute(t,m),An.add(Ks)),c=Math.max(c,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(c),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,c=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new di(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],p=[];for(let T=0;T<s.count;T++)h[T]=new he,p[T]=new he;const m=new he,_=new he,v=new he,g=new Wt,E=new Wt,C=new Wt,D=new he,b=new he;function S(T,F,B){m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,F),v.fromBufferAttribute(s,B),g.fromBufferAttribute(f,T),E.fromBufferAttribute(f,F),C.fromBufferAttribute(f,B),_.sub(m),v.sub(m),E.sub(g),C.sub(g);const V=1/(E.x*C.y-C.x*E.y);isFinite(V)&&(D.copy(_).multiplyScalar(C.y).addScaledVector(v,-E.y).multiplyScalar(V),b.copy(v).multiplyScalar(E.x).addScaledVector(_,-C.x).multiplyScalar(V),h[T].add(D),h[F].add(D),h[B].add(D),p[T].add(b),p[F].add(b),p[B].add(b))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let T=0,F=O.length;T<F;++T){const B=O[T],V=B.start,K=B.count;for(let ae=V,J=V+K;ae<J;ae+=3)S(t.getX(ae+0),t.getX(ae+1),t.getX(ae+2))}const W=new he,R=new he,U=new he,L=new he;function P(T){U.fromBufferAttribute(c,T),L.copy(U);const F=h[T];W.copy(F),W.sub(U.multiplyScalar(U.dot(F))).normalize(),R.crossVectors(L,F);const V=R.dot(p[T])<0?-1:1;d.setXYZW(T,W.x,W.y,W.z,V)}for(let T=0,F=O.length;T<F;++T){const B=O[T],V=B.start,K=B.count;for(let ae=V,J=V+K;ae<J;ae+=3)P(t.getX(ae+0)),P(t.getX(ae+1)),P(t.getX(ae+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const c=new he,f=new he,d=new he,h=new he,p=new he,m=new he,_=new he,v=new he;if(t)for(let g=0,E=t.count;g<E;g+=3){const C=t.getX(g+0),D=t.getX(g+1),b=t.getX(g+2);c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,D),d.fromBufferAttribute(i,b),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),h.add(_),p.add(_),m.add(_),s.setXYZ(C,h.x,h.y,h.z),s.setXYZ(D,p.x,p.y,p.z),s.setXYZ(b,m.x,m.y,m.z)}else for(let g=0,E=i.count;g<E;g+=3)c.fromBufferAttribute(i,g+0),f.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,f),v.subVectors(c,f),_.cross(v),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)An.fromBufferAttribute(t,i),An.normalize(),t.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function t(h,p){const m=h.array,_=h.itemSize,v=h.normalized,g=new m.constructor(p.length*_);let E=0,C=0;for(let D=0,b=p.length;D<b;D++){h.isInterleavedBufferAttribute?E=p[D]*h.data.stride+h.offset:E=p[D]*_;for(let S=0;S<_;S++)g[C++]=m[E++]}return new di(g,_,v)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,s=this.index.array,c=this.attributes;for(const h in c){const p=c[h],m=t(p,s);i.setAttribute(h,m)}const f=this.morphAttributes;for(const h in f){const p=[],m=f[h];for(let _=0,v=m.length;_<v;_++){const g=m[_],E=t(g,s);p.push(E)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const c={};let f=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,g=m.length;v<g;v++){const E=m[v];_.push(E.toJSON(t.data))}_.length>0&&(c[p]=_,f=!0)}f&&(t.data.morphAttributes=c,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const c=t.attributes;for(const m in c){const _=c[m];this.setAttribute(m,_.clone(i))}const f=t.morphAttributes;for(const m in f){const _=[],v=f[m];for(let g=0,E=v.length;g<E;g++)_.push(v[g].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new he,TE=new he,AE=new gt;class vr{constructor(t=new he(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,c){return this.normal.set(t,i,s),this.constant=c,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const c=kh.subVectors(s,i).cross(TE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(c,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const c=t.delta(kh),f=this.normal.dot(c);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(c,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||AE.getNormalMatrix(t),c=this.coplanarPoint(kh).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-c.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let wE=0;class Cl extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=gl,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=C_,this.blendDst=R_,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const c=this[i];if(c===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}c&&c.isColor?c.set(s):c&&c.isVector2&&s&&s.isVector2||c&&c.isEuler&&s&&s.isEuler||c&&c.isVector3&&s&&s.isVector3?c.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(f=>f.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}if(i){const f=c(t.textures),d=c(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new At().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new vr().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Wt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const c=i.length;s=new Array(c);for(let f=0;f!==c;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ua=new he,Xh=new he,lu=new he,cu=new he;class Q_{constructor(t=new he,i=new he(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ua.copy(this.origin).addScaledVector(this.direction,i),Ua.distanceToSquared(t))}distanceSqToSegment(t,i,s,c){Xh.copy(t).add(i).multiplyScalar(.5),lu.copy(i).sub(t).normalize(),cu.copy(this.origin).sub(Xh);const f=t.distanceTo(i)*.5,d=-this.direction.dot(lu),h=cu.dot(this.direction),p=-cu.dot(lu),m=cu.lengthSq(),_=Math.abs(1-d*d);let v,g,E,C;if(_>0)if(v=d*p-h,g=d*h-p,C=f*_,v>=0)if(g>=-C)if(g<=C){const D=1/_;v*=D,g*=D,E=v*(v+d*g+2*h)+g*(d*v+g+2*p)+m}else g=f,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*p)+m;else g=-f,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*p)+m;else g<=-C?(v=Math.max(0,-(-d*f+h)),g=v>0?-f:Math.min(Math.max(-f,-p),f),E=-v*v+g*(g+2*p)+m):g<=C?(v=0,g=Math.min(Math.max(-f,-p),f),E=g*(g+2*p)+m):(v=Math.max(0,-(d*f+h)),g=v>0?f:Math.min(Math.max(-f,-p),f),E=-v*v+g*(g+2*p)+m);else g=d>0?-f:f,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),c&&c.copy(Xh).addScaledVector(lu,g),E}intersectSphere(t,i){if(t.radius<0)return null;Ua.subVectors(t.center,this.origin);const s=Ua.dot(this.direction),c=Ua.dot(Ua)-s*s,f=t.radius*t.radius;if(c>f)return null;const d=Math.sqrt(f-c),h=s-d,p=s+d;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,c,f,d,h,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return m>=0?(s=(t.min.x-g.x)*m,c=(t.max.x-g.x)*m):(s=(t.max.x-g.x)*m,c=(t.min.x-g.x)*m),_>=0?(f=(t.min.y-g.y)*_,d=(t.max.y-g.y)*_):(f=(t.max.y-g.y)*_,d=(t.min.y-g.y)*_),s>d||f>c||((f>s||isNaN(s))&&(s=f),(d<c||isNaN(c))&&(c=d),v>=0?(h=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),s>p||h>c)||((h>s||s!==s)&&(s=h),(p<c||c!==c)&&(c=p),c<0)?null:this.at(s>=0?s:c,i)}intersectsBox(t){return this.intersectBox(t,Ua)!==null}intersectTriangle(t,i,s,c,f){const d=this.origin,h=this.direction,p=h.x,m=h.y,_=h.z,v=t.x-d.x,g=t.y-d.y,E=t.z-d.z,C=i.x-d.x,D=i.y-d.y,b=i.z-d.z,S=s.x-d.x,O=s.y-d.y,W=s.z-d.z,R=Math.abs(p),U=Math.abs(m),L=Math.abs(_);let P,T,F,B,V,K,ae,J,ie,Y,H,j;if(R>=U&&R>=L?(F=p,K=v,ie=C,j=S,p>=0?(P=m,T=_,B=g,V=E,ae=D,J=b,Y=O,H=W):(P=_,T=m,B=E,V=g,ae=b,J=D,Y=W,H=O)):U>=L?(F=m,K=g,ie=D,j=O,m>=0?(P=_,T=p,B=E,V=v,ae=b,J=C,Y=W,H=S):(P=p,T=_,B=v,V=E,ae=C,J=b,Y=S,H=W)):(F=_,K=E,ie=b,j=W,_>=0?(P=p,T=m,B=v,V=g,ae=C,J=D,Y=S,H=O):(P=m,T=p,B=g,V=v,ae=D,J=C,Y=O,H=S)),F===0)return null;const te=P/F,oe=T/F,me=1/F,We=B-te*K,je=V-oe*K,z=ae-te*ie,xe=J-oe*ie,Re=Y-te*j,Z=H-oe*j,pe=Re*xe-Z*z,we=We*Z-je*Re,Pe=z*je-xe*We;if(c){if(pe<0||we<0||Pe<0)return null}else if((pe<0||we<0||Pe<0)&&(pe>0||we>0||Pe>0))return null;const Se=pe+we+Pe;if(Se===0)return null;const De=me*(pe*K+we*ie+Pe*j);return(Se>0?De<0:De>0)?null:this.at(De/Se,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nm extends Cl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gv=new hn,Xr=new Q_,uu=new Gu,Vv=new he,fu=new he,du=new he,hu=new he,Wh=new he,pu=new he,kv=new he,mu=new he;class fa extends ei{constructor(t=new hi,i=new nm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}getVertexPosition(t,i){const s=this.geometry,c=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(c,t);const h=this.morphTargetInfluences;if(f&&h){pu.set(0,0,0);for(let p=0,m=f.length;p<m;p++){const _=h[p],v=f[p];_!==0&&(Wh.fromBufferAttribute(v,t),d?pu.addScaledVector(Wh,_):pu.addScaledVector(Wh.sub(i),_))}i.add(pu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.material,f=this.matrixWorld;c!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uu.copy(s.boundingSphere),uu.applyMatrix4(f),Xr.copy(t.ray).recast(t.near),!(uu.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(uu,Vv)===null||Xr.origin.distanceToSquared(Vv)>(t.far-t.near)**2))&&(Gv.copy(f).invert(),Xr.copy(t.ray).applyMatrix4(Gv),!(s.boundingBox!==null&&Xr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Xr)))}_computeIntersections(t,i,s){let c;const f=this.geometry,d=this.material,h=f.index,p=f.attributes.position,m=f.attributes.uv,_=f.attributes.uv1,v=f.attributes.normal,g=f.groups,E=f.drawRange;if(h!==null)if(Array.isArray(d))for(let C=0,D=g.length;C<D;C++){const b=g[C],S=d[b.materialIndex],O=Math.max(b.start,E.start),W=Math.min(h.count,Math.min(b.start+b.count,E.start+E.count));for(let R=O,U=W;R<U;R+=3){const L=h.getX(R),P=h.getX(R+1),T=h.getX(R+2);c=gu(this,S,t,s,m,_,v,L,P,T),c&&(c.faceIndex=Math.floor(R/3),c.face.materialIndex=b.materialIndex,i.push(c))}}else{const C=Math.max(0,E.start),D=Math.min(h.count,E.start+E.count);for(let b=C,S=D;b<S;b+=3){const O=h.getX(b),W=h.getX(b+1),R=h.getX(b+2);c=gu(this,d,t,s,m,_,v,O,W,R),c&&(c.faceIndex=Math.floor(b/3),i.push(c))}}else if(p!==void 0)if(Array.isArray(d))for(let C=0,D=g.length;C<D;C++){const b=g[C],S=d[b.materialIndex],O=Math.max(b.start,E.start),W=Math.min(p.count,Math.min(b.start+b.count,E.start+E.count));for(let R=O,U=W;R<U;R+=3){const L=R,P=R+1,T=R+2;c=gu(this,S,t,s,m,_,v,L,P,T),c&&(c.faceIndex=Math.floor(R/3),c.face.materialIndex=b.materialIndex,i.push(c))}}else{const C=Math.max(0,E.start),D=Math.min(p.count,E.start+E.count);for(let b=C,S=D;b<S;b+=3){const O=b,W=b+1,R=b+2;c=gu(this,d,t,s,m,_,v,O,W,R),c&&(c.faceIndex=Math.floor(b/3),i.push(c))}}}}function CE(o,t,i,s,c,f,d,h){let p;if(t.side===$n?p=s.intersectTriangle(d,f,c,!0,h):p=s.intersectTriangle(c,f,d,t.side===Kr,h),p===null)return null;mu.copy(h),mu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(mu);return m<i.near||m>i.far?null:{distance:m,point:mu.clone(),object:o}}function gu(o,t,i,s,c,f,d,h,p,m){o.getVertexPosition(h,fu),o.getVertexPosition(p,du),o.getVertexPosition(m,hu);const _=CE(o,t,i,s,fu,du,hu,kv);if(_){const v=new he;zi.getBarycoord(kv,fu,du,hu,v),c&&(_.uv=zi.getInterpolatedAttribute(c,h,p,m,v,new Wt)),f&&(_.uv1=zi.getInterpolatedAttribute(f,h,p,m,v,new Wt)),d&&(_.normal=zi.getInterpolatedAttribute(d,h,p,m,v,new he),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new he,materialIndex:0};zi.getNormal(fu,du,hu,g.normal),_.face=g,_.barycoord=v}return _}class RE extends In{constructor(t=null,i=1,s=1,c,f,d,h,p,m=Ln,_=Ln,v,g){super(null,d,h,p,m,_,c,f,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wr=new Gu,NE=new Wt(.5,.5),xu=new he;class J_{constructor(t=new vr,i=new vr,s=new vr,c=new vr,f=new vr,d=new vr){this.planes=[t,i,s,c,f,d]}set(t,i,s,c,f,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(c),h[4].copy(f),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const c=this.planes,f=t.elements,d=f[0],h=f[1],p=f[2],m=f[3],_=f[4],v=f[5],g=f[6],E=f[7],C=f[8],D=f[9],b=f[10],S=f[11],O=f[12],W=f[13],R=f[14],U=f[15];if(c[0].setComponents(m-d,E-_,S-C,U-O).normalize(),c[1].setComponents(m+d,E+_,S+C,U+O).normalize(),c[2].setComponents(m+h,E+v,S+D,U+W).normalize(),c[3].setComponents(m-h,E-v,S-D,U-W).normalize(),s)c[4].setComponents(p,g,b,R).normalize(),c[5].setComponents(m-p,E-g,S-b,U-R).normalize();else if(c[4].setComponents(m-p,E-g,S-b,U-R).normalize(),i===oa)c[5].setComponents(m+p,E+g,S+b,U+R).normalize();else if(i===Bu)c[5].setComponents(p,g,b,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(t){Wr.center.set(0,0,0);const i=NE.distanceTo(t.center);return Wr.radius=.7071067811865476+i,Wr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(t){const i=this.planes,s=t.center,c=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<c)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const c=i[s];if(xu.x=c.normal.x>0?t.max.x:t.min.x,xu.y=c.normal.y>0?t.max.y:t.min.y,xu.z=c.normal.z>0?t.max.z:t.min.z,c.distanceToPoint(xu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pp extends Cl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xv=new hn,Ip=new Q_,vu=new Gu,_u=new he;class Wv extends ei{constructor(t=new hi,i=new Pp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,c=this.matrixWorld,f=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),vu.copy(s.boundingSphere),vu.applyMatrix4(c),vu.radius+=f,t.ray.intersectsSphere(vu)===!1)return;Xv.copy(c).invert(),Ip.copy(t.ray).applyMatrix4(Xv);const h=f/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=s.index,v=s.attributes.position;if(m!==null){const g=Math.max(0,d.start),E=Math.min(m.count,d.start+d.count);for(let C=g,D=E;C<D;C++){const b=m.getX(C);_u.fromBufferAttribute(v,b),jv(_u,b,p,c,t,i,this)}}else{const g=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let C=g,D=E;C<D;C++)_u.fromBufferAttribute(v,C),jv(_u,C,p,c,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const c=i[s[0]];if(c!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=c.length;f<d;f++){const h=c[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=f}}}}}function jv(o,t,i,s,c,f,d){const h=Ip.distanceSqToPoint(o);if(h<i){const p=new he;Ip.closestPointToPoint(o,p),p.applyMatrix4(s);const m=c.ray.origin.distanceTo(p);if(m<c.near||m>c.far)return;f.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class $_ extends In{constructor(t=[],i=Qr,s,c,f,d,h,p,m,_){super(t,i,s,c,f,d,h,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class DE extends In{constructor(t,i,s,c,f,d,h,p,m){super(t,i,s,c,f,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class El extends In{constructor(t,i,s=ca,c,f,d,h=Ln,p=Ln,m,_=Pa,v=1){if(_!==Pa&&_!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,c,f,d,h,p,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class UE extends El{constructor(t,i=ca,s=Qr,c,f,d=Ln,h=Ln,p,m=Pa){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,i,s,c,f,d,h,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eS extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rl extends hi{constructor(t=1,i=1,s=1,c=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:c,heightSegments:f,depthSegments:d};const h=this;c=Math.floor(c),f=Math.floor(f),d=Math.floor(d);const p=[],m=[],_=[],v=[];let g=0,E=0;C("z","y","x",-1,-1,s,i,t,d,f,0),C("z","y","x",1,-1,s,i,-t,d,f,1),C("x","z","y",1,1,t,s,i,c,d,2),C("x","z","y",1,-1,t,s,-i,c,d,3),C("x","y","z",1,-1,t,i,s,c,f,4),C("x","y","z",-1,-1,t,i,-s,c,f,5),this.setIndex(p),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(_,3)),this.setAttribute("uv",new Ci(v,2));function C(D,b,S,O,W,R,U,L,P,T,F){const B=R/P,V=U/T,K=R/2,ae=U/2,J=L/2,ie=P+1,Y=T+1;let H=0,j=0;const te=new he;for(let oe=0;oe<Y;oe++){const me=oe*V-ae;for(let We=0;We<ie;We++){const je=We*B-K;te[D]=je*O,te[b]=me*W,te[S]=J,m.push(te.x,te.y,te.z),te[D]=0,te[b]=0,te[S]=L>0?1:-1,_.push(te.x,te.y,te.z),v.push(We/P),v.push(1-oe/T),H+=1}}for(let oe=0;oe<T;oe++)for(let me=0;me<P;me++){const We=g+me+ie*oe,je=g+me+ie*(oe+1),z=g+(me+1)+ie*(oe+1),xe=g+(me+1)+ie*oe;p.push(We,je,xe),p.push(je,z,xe),j+=6}h.addGroup(E,j,F),E+=j,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Vu extends hi{constructor(t=1,i=1,s=1,c=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:c};const f=t/2,d=i/2,h=Math.floor(s),p=Math.floor(c),m=h+1,_=p+1,v=t/h,g=i/p,E=[],C=[],D=[],b=[];for(let S=0;S<_;S++){const O=S*g-d;for(let W=0;W<m;W++){const R=W*v-f;C.push(R,-O,0),D.push(0,0,1),b.push(W/h),b.push(1-S/p)}}for(let S=0;S<p;S++)for(let O=0;O<h;O++){const W=O+m*S,R=O+m*(S+1),U=O+1+m*(S+1),L=O+1+m*S;E.push(W,R,L),E.push(R,U,L)}this.setIndex(E),this.setAttribute("position",new Ci(C,3)),this.setAttribute("normal",new Ci(D,3)),this.setAttribute("uv",new Ci(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vu(t.width,t.height,t.widthSegments,t.heightSegments)}}class im extends hi{constructor(t=1,i=32,s=16,c=0,f=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:c,phiLength:f,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(d+h,Math.PI);let m=0;const _=[],v=new he,g=new he,E=[],C=[],D=[],b=[];for(let S=0;S<=s;S++){const O=[],W=S/s,R=d+W*h,U=t*Math.cos(R),L=Math.sqrt(t*t-U*U);let P=0;S===0&&d===0?P=.5/i:S===s&&p===Math.PI&&(P=-.5/i);for(let T=0;T<=i;T++){const F=T/i,B=c+F*f;v.x=-L*Math.cos(B),v.y=U,v.z=L*Math.sin(B),C.push(v.x,v.y,v.z),g.copy(v).normalize(),D.push(g.x,g.y,g.z),b.push(F+P,1-W),O.push(m++)}_.push(O)}for(let S=0;S<s;S++)for(let O=0;O<i;O++){const W=_[S][O+1],R=_[S][O],U=_[S+1][O],L=_[S+1][O+1];(S!==0||d>0)&&E.push(W,R,L),(S!==s-1||p<Math.PI)&&E.push(R,U,L)}this.setIndex(E),this.setAttribute("position",new Ci(C,3)),this.setAttribute("normal",new Ci(D,3)),this.setAttribute("uv",new Ci(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new im(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function so(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const c=o[i][s];if(qv(c))c.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=c.clone();else if(Array.isArray(c))if(qv(c[0])){const f=[];for(let d=0,h=c.length;d<h;d++)f[d]=c[d].clone();t[i][s]=f}else t[i][s]=c.slice();else t[i][s]=c}}return t}function jn(o){const t={};for(let i=0;i<o.length;i++){const s=so(o[i]);for(const c in s)t[c]=s[c]}return t}function qv(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function LE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function tS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}const OE={clone:so,merge:jn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends Cl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=BE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=LE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const c in this.uniforms){const d=this.uniforms[c].value;d&&d.isTexture?i.uniforms[c]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[c]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[c]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[c]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[c]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[c]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[c]={type:"m4",value:d.toArray()}:i.uniforms[c]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const c in this.extensions)this.extensions[c]===!0&&(s[c]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const c=t.uniforms[s];switch(this.uniforms[s]={},c.type){case"t":this.uniforms[s].value=i[c.value]||null;break;case"c":this.uniforms[s].value=new At().setHex(c.value);break;case"v2":this.uniforms[s].value=new Wt().fromArray(c.value);break;case"v3":this.uniforms[s].value=new he().fromArray(c.value);break;case"v4":this.uniforms[s].value=new fn().fromArray(c.value);break;case"m3":this.uniforms[s].value=new gt().fromArray(c.value);break;case"m4":this.uniforms[s].value=new hn().fromArray(c.value);break;default:this.uniforms[s].value=c.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class PE extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IE extends Cl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zE extends Cl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Su=new he,yu=new lo,na=new he;class nS extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Su,yu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,yu,na.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Su,yu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Su,yu,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xr=new he,Yv=new Wt,Zv=new Wt;class Ai extends nS{constructor(t=50,i=1,s=.1,c=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=c,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,i){return this.getViewBounds(t,Yv,Zv),i.subVectors(Zv,Yv)}setViewOffset(t,i,s,c,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(xl*.5*this.fov)/this.zoom,s=2*i,c=this.aspect*s,f=-.5*c;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;f+=d.offsetX*c/p,i-=d.offsetY*s/m,c*=d.width/p,s*=d.height/m}const h=this.filmOffset;h!==0&&(f+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+c,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class iS extends nS{constructor(t=-1,i=1,s=1,c=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=c,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,c,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=c,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,c=(this.top+this.bottom)/2;let f=s-t,d=s+t,h=c+i,p=c-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,d=f+m*this.view.width,h-=_*this.view.offsetY,p=h-_*this.view.height}this.projectionMatrix.makeOrthographic(f,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Qs=-90,Js=1;class HE extends ei{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const c=new Ai(Qs,Js,t,i);c.layers=this.layers,this.add(c);const f=new Ai(Qs,Js,t,i);f.layers=this.layers,this.add(f);const d=new Ai(Qs,Js,t,i);d.layers=this.layers,this.add(d);const h=new Ai(Qs,Js,t,i);h.layers=this.layers,this.add(h);const p=new Ai(Qs,Js,t,i);p.layers=this.layers,this.add(p);const m=new Ai(Qs,Js,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,c,f,d,h,p]=i;for(const m of i)this.remove(m);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),c.up.set(0,1,0),c.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Bu)s.up.set(0,-1,0),s.lookAt(-1,0,0),c.up.set(0,-1,0),c.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:c}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,h,p,m,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),C=t.xr.enabled;t.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(s,0,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,4,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),s.texture.generateMipmaps=D,t.setRenderTarget(s,5,c),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(v,g,E),t.xr.enabled=C,s.texture.needsPMREMUpdate=!0}}class GE extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class VE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const lm=class lm{constructor(t,i,s,c){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,c)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,c){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=c,this}};lm.prototype.isMatrix2=!0;let Kv=lm;function Qv(o,t,i,s){const c=kE(s);switch(i){case V_:return o*t;case X_:return o*t/c.components*c.byteLength;case Zp:return o*t/c.components*c.byteLength;case Jr:return o*t*2/c.components*c.byteLength;case Kp:return o*t*2/c.components*c.byteLength;case k_:return o*t*3/c.components*c.byteLength;case Hi:return o*t*4/c.components*c.byteLength;case Qp:return o*t*4/c.components*c.byteLength;case Au:case wu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Cu:case Ru:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case lp:case up:return Math.max(o,16)*Math.max(t,8)/4;case op:case cp:return Math.max(o,8)*Math.max(t,8)/2;case fp:case dp:case pp:case mp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case hp:case Uu:case gp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case yp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case bp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case wp:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Cp:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Rp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Np:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dp:case Up:case Lp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Op:case Fp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Lu:case Bp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(o){switch(o){case wi:case I_:return{byteLength:1,components:1};case yl:case z_:case ua:return{byteLength:2,components:1};case qp:case Yp:return{byteLength:2,components:4};case ca:case jp:case sa:return{byteLength:4,components:1};case H_:case G_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function aS(){let o=null,t=!1,i=null,s=null;function c(f,d){s=o.requestAnimationFrame(c),i(f,d)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(c),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function XE(o){const t=new WeakMap;function i(h,p){const m=h.array,_=h.usage,v=m.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,m,_),h.onUploadCallback();let E;if(m instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=o.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=o.SHORT;else if(m instanceof Uint32Array)E=o.UNSIGNED_INT;else if(m instanceof Int32Array)E=o.INT;else if(m instanceof Int8Array)E=o.BYTE;else if(m instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,p,m){const _=p.array,v=p.updateRanges;if(o.bindBuffer(m,h),v.length===0)o.bufferSubData(m,0,_);else{v.sort((E,C)=>E.start-C.start);let g=0;for(let E=1;E<v.length;E++){const C=v[g],D=v[E];D.start<=C.start+C.count+1?C.count=Math.max(C.count,D.start+D.count-C.start):(++g,v[g]=D)}v.length=g+1;for(let E=0,C=v.length;E<C;E++){const D=v[E];o.bufferSubData(m,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}p.clearUpdateRanges()}p.onUploadCallback()}function c(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function f(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(o.deleteBuffer(p.buffer),t.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,h,p),m.version=h.version}}return{get:c,remove:f,update:d}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",bT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,PT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,IT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,b2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,C2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,R2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bt={alphahash_fragment:WE,alphahash_pars_fragment:jE,alphamap_fragment:qE,alphamap_pars_fragment:YE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:eT,begin_vertex:tT,beginnormal_vertex:nT,bsdfs:iT,iridescence_fragment:aT,bumpmap_pars_fragment:rT,clipping_planes_fragment:sT,clipping_planes_pars_fragment:oT,clipping_planes_pars_vertex:lT,clipping_planes_vertex:cT,color_fragment:uT,color_pars_fragment:fT,color_pars_vertex:dT,color_vertex:hT,common:pT,cube_uv_reflection_fragment:mT,defaultnormal_vertex:gT,displacementmap_pars_vertex:xT,displacementmap_vertex:vT,emissivemap_fragment:_T,emissivemap_pars_fragment:ST,colorspace_fragment:yT,colorspace_pars_fragment:bT,envmap_fragment:MT,envmap_common_pars_fragment:ET,envmap_pars_fragment:TT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:PT,envmap_vertex:wT,fog_vertex:CT,fog_pars_vertex:RT,fog_fragment:NT,fog_pars_fragment:DT,gradientmap_pars_fragment:UT,lightmap_pars_fragment:LT,lights_lambert_fragment:OT,lights_lambert_pars_fragment:FT,lights_pars_begin:BT,lights_toon_fragment:IT,lights_toon_pars_fragment:zT,lights_phong_fragment:HT,lights_phong_pars_fragment:GT,lights_physical_fragment:VT,lights_physical_pars_fragment:kT,lights_fragment_begin:XT,lights_fragment_maps:WT,lights_fragment_end:jT,lightprobes_pars_fragment:qT,logdepthbuf_fragment:YT,logdepthbuf_pars_fragment:ZT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:QT,map_fragment:JT,map_pars_fragment:$T,map_particle_fragment:e2,map_particle_pars_fragment:t2,metalnessmap_fragment:n2,metalnessmap_pars_fragment:i2,morphinstance_vertex:a2,morphcolor_vertex:r2,morphnormal_vertex:s2,morphtarget_pars_vertex:o2,morphtarget_vertex:l2,normal_fragment_begin:c2,normal_fragment_maps:u2,normal_pars_fragment:f2,normal_pars_vertex:d2,normal_vertex:h2,normalmap_pars_fragment:p2,clearcoat_normal_fragment_begin:m2,clearcoat_normal_fragment_maps:g2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:S2,premultiplied_alpha_fragment:y2,project_vertex:b2,dithering_fragment:M2,dithering_pars_fragment:E2,roughnessmap_fragment:T2,roughnessmap_pars_fragment:A2,shadowmap_pars_fragment:w2,shadowmap_pars_vertex:C2,shadowmap_vertex:R2,shadowmask_pars_fragment:N2,skinbase_vertex:D2,skinning_pars_vertex:U2,skinning_vertex:L2,skinnormal_vertex:O2,specularmap_fragment:F2,specularmap_pars_fragment:B2,tonemapping_fragment:P2,tonemapping_pars_fragment:I2,transmission_fragment:z2,transmission_pars_fragment:H2,uv_pars_fragment:G2,uv_pars_vertex:V2,uv_vertex:k2,worldpos_vertex:X2,background_vert:W2,background_frag:j2,backgroundCube_vert:q2,backgroundCube_frag:Y2,cube_vert:Z2,cube_frag:K2,depth_vert:Q2,depth_frag:J2,distance_vert:$2,distance_frag:eA,equirect_vert:tA,equirect_frag:nA,linedashed_vert:iA,linedashed_frag:aA,meshbasic_vert:rA,meshbasic_frag:sA,meshlambert_vert:oA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:uA,meshnormal_vert:fA,meshnormal_frag:dA,meshphong_vert:hA,meshphong_frag:pA,meshphysical_vert:mA,meshphysical_frag:gA,meshtoon_vert:xA,meshtoon_frag:vA,points_vert:_A,points_frag:SA,shadow_vert:yA,shadow_frag:bA,sprite_vert:MA,sprite_frag:EA},Xe={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new he},probesMax:{value:new he},probesResolution:{value:new he}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ra={basic:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:jn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:jn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new At(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:jn([Xe.points,Xe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:jn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:jn([Xe.common,Xe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:jn([Xe.sprite,Xe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:jn([Xe.common,Xe.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:jn([Xe.lights,Xe.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ra.physical={uniforms:jn([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const bu={r:0,b:0,g:0},TA=new hn,rS=new gt;rS.set(-1,0,0,0,1,0,0,0,1);function AA(o,t,i,s,c,f){const d=new At(0);let h=c===!0?0:1,p,m,_=null,v=0,g=null;function E(O){let W=O.isScene===!0?O.background:null;if(W&&W.isTexture){const R=O.backgroundBlurriness>0;W=t.get(W,R)}return W}function C(O){let W=!1;const R=E(O);R===null?b(d,h):R&&R.isColor&&(b(R,1),W=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(o.autoClear||W)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function D(O,W){const R=E(W);R&&(R.isCubeTexture||R.mapping===Hu)?(m===void 0&&(m=new fa(new Rl(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:so(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=W.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(TA.makeRotationFromEuler(W.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(rS),m.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Qt,(_!==R||v!==R.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new fa(new Vu(2,2),new da({name:"BackgroundMaterial",uniforms:so(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||v!==R.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=R,v=R.version,g=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function b(O,W){O.getRGB(bu,tS(o)),i.buffers.color.setClear(bu.r,bu.g,bu.b,W,f)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,W=1){d.set(O),h=W,b(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(O){h=O,b(d,h)},render:C,addToRenderList:D,dispose:S}}function wA(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},c=g(null);let f=c,d=!1;function h(V,K,ae,J,ie){let Y=!1;const H=v(V,J,ae,K);f!==H&&(f=H,m(f.object)),Y=E(V,J,ae,ie),Y&&C(V,J,ae,ie),ie!==null&&t.update(ie,o.ELEMENT_ARRAY_BUFFER),(Y||d)&&(d=!1,R(V,K,ae,J),ie!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function p(){return o.createVertexArray()}function m(V){return o.bindVertexArray(V)}function _(V){return o.deleteVertexArray(V)}function v(V,K,ae,J){const ie=J.wireframe===!0;let Y=s[K.id];Y===void 0&&(Y={},s[K.id]=Y);const H=V.isInstancedMesh===!0?V.id:0;let j=Y[H];j===void 0&&(j={},Y[H]=j);let te=j[ae.id];te===void 0&&(te={},j[ae.id]=te);let oe=te[ie];return oe===void 0&&(oe=g(p()),te[ie]=oe),oe}function g(V){const K=[],ae=[],J=[];for(let ie=0;ie<i;ie++)K[ie]=0,ae[ie]=0,J[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:J,object:V,attributes:{},index:null}}function E(V,K,ae,J){const ie=f.attributes,Y=K.attributes;let H=0;const j=ae.getAttributes();for(const te in j)if(j[te].location>=0){const me=ie[te];let We=Y[te];if(We===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(We=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(We=V.instanceColor)),me===void 0||me.attribute!==We||We&&me.data!==We.data)return!0;H++}return f.attributesNum!==H||f.index!==J}function C(V,K,ae,J){const ie={},Y=K.attributes;let H=0;const j=ae.getAttributes();for(const te in j)if(j[te].location>=0){let me=Y[te];me===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(me=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(me=V.instanceColor));const We={};We.attribute=me,me&&me.data&&(We.data=me.data),ie[te]=We,H++}f.attributes=ie,f.attributesNum=H,f.index=J}function D(){const V=f.newAttributes;for(let K=0,ae=V.length;K<ae;K++)V[K]=0}function b(V){S(V,0)}function S(V,K){const ae=f.newAttributes,J=f.enabledAttributes,ie=f.attributeDivisors;ae[V]=1,J[V]===0&&(o.enableVertexAttribArray(V),J[V]=1),ie[V]!==K&&(o.vertexAttribDivisor(V,K),ie[V]=K)}function O(){const V=f.newAttributes,K=f.enabledAttributes;for(let ae=0,J=K.length;ae<J;ae++)K[ae]!==V[ae]&&(o.disableVertexAttribArray(ae),K[ae]=0)}function W(V,K,ae,J,ie,Y,H){H===!0?o.vertexAttribIPointer(V,K,ae,ie,Y):o.vertexAttribPointer(V,K,ae,J,ie,Y)}function R(V,K,ae,J){D();const ie=J.attributes,Y=ae.getAttributes(),H=K.defaultAttributeValues;for(const j in Y){const te=Y[j];if(te.location>=0){let oe=ie[j];if(oe===void 0&&(j==="instanceMatrix"&&V.instanceMatrix&&(oe=V.instanceMatrix),j==="instanceColor"&&V.instanceColor&&(oe=V.instanceColor)),oe!==void 0){const me=oe.normalized,We=oe.itemSize,je=t.get(oe);if(je===void 0)continue;const z=je.buffer,xe=je.type,Re=je.bytesPerElement,Z=xe===o.INT||xe===o.UNSIGNED_INT||oe.gpuType===jp;if(oe.isInterleavedBufferAttribute){const pe=oe.data,we=pe.stride,Pe=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let Se=0;Se<te.locationSize;Se++)S(te.location+Se,pe.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Se=0;Se<te.locationSize;Se++)b(te.location+Se);o.bindBuffer(o.ARRAY_BUFFER,z);for(let Se=0;Se<te.locationSize;Se++)W(te.location+Se,We/te.locationSize,xe,me,we*Re,(Pe+We/te.locationSize*Se)*Re,Z)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<te.locationSize;pe++)S(te.location+pe,oe.meshPerAttribute);V.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<te.locationSize;pe++)b(te.location+pe);o.bindBuffer(o.ARRAY_BUFFER,z);for(let pe=0;pe<te.locationSize;pe++)W(te.location+pe,We/te.locationSize,xe,me,We*Re,We/te.locationSize*pe*Re,Z)}}else if(H!==void 0){const me=H[j];if(me!==void 0)switch(me.length){case 2:o.vertexAttrib2fv(te.location,me);break;case 3:o.vertexAttrib3fv(te.location,me);break;case 4:o.vertexAttrib4fv(te.location,me);break;default:o.vertexAttrib1fv(te.location,me)}}}}O()}function U(){F();for(const V in s){const K=s[V];for(const ae in K){const J=K[ae];for(const ie in J){const Y=J[ie];for(const H in Y)_(Y[H].object),delete Y[H];delete J[ie]}}delete s[V]}}function L(V){if(s[V.id]===void 0)return;const K=s[V.id];for(const ae in K){const J=K[ae];for(const ie in J){const Y=J[ie];for(const H in Y)_(Y[H].object),delete Y[H];delete J[ie]}}delete s[V.id]}function P(V){for(const K in s){const ae=s[K];for(const J in ae){const ie=ae[J];if(ie[V.id]===void 0)continue;const Y=ie[V.id];for(const H in Y)_(Y[H].object),delete Y[H];delete ie[V.id]}}}function T(V){for(const K in s){const ae=s[K],J=V.isInstancedMesh===!0?V.id:0,ie=ae[J];if(ie!==void 0){for(const Y in ie){const H=ie[Y];for(const j in H)_(H[j].object),delete H[j];delete ie[Y]}delete ae[J],Object.keys(ae).length===0&&delete s[K]}}}function F(){B(),d=!0,f!==c&&(f=c,m(f.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:B,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:P,initAttributes:D,enableAttribute:b,disableUnusedAttributes:O}}function CA(o,t,i){let s;function c(p){s=p}function f(p,m){o.drawArrays(s,p,m),i.update(m,s,1)}function d(p,m,_){_!==0&&(o.drawArraysInstanced(s,p,m,_),i.update(m,s,_))}function h(p,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,m,0,_);let g=0;for(let E=0;E<_;E++)g+=m[E];i.update(g,s,1)}this.setMode=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function RA(o,t,i,s){let c;function f(){if(c!==void 0)return c;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");c=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function d(P){return!(P!==Hi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const T=P===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==wi&&P!==sa&&!T&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(dt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),W=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:C,maxTextureSize:D,maxCubemapSize:b,maxAttributes:S,maxVertexUniforms:O,maxVaryings:W,maxFragmentUniforms:R,maxSamples:U,samples:L}}function NA(o){const t=this;let i=null,s=0,c=!1,f=!1;const d=new vr,h=new gt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const E=v.length!==0||g||s!==0||c;return c=g,s=v.length,E},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(v,g){i=_(v,g,0)},this.setState=function(v,g,E){const C=v.clippingPlanes,D=v.clipIntersection,b=v.clipShadows,S=o.get(v);if(!c||C===null||C.length===0||f&&!b)f?_(null):m();else{const O=f?0:s,W=O*4;let R=S.clippingState||null;p.value=R,R=_(C,g,W,E);for(let U=0;U!==W;++U)R[U]=i[U];S.clippingState=R,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,g,E,C){const D=v!==null?v.length:0;let b=null;if(D!==0){if(b=p.value,C!==!0||b===null){const S=E+D*4,O=g.matrixWorldInverse;h.getNormalMatrix(O),(b===null||b.length<S)&&(b=new Float32Array(S));for(let W=0,R=E;W!==D;++W,R+=4)d.copy(v[W]).applyMatrix4(O,h),d.normal.toArray(b,R),b[R+3]=d.constant}p.value=b,p.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,b}}const no=4,DA=6,UA=20,LA=256,dl=new iS,Jv=new At;let jh=null,qh=0,Yh=0,Zh=!1;const OA=new he,jr=new he;class $v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,c=100,f={}){const{size:d=256,position:h=OA}=f;jh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,c,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jh,qh,Yh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qr||t.mapping===ro?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),Yh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:ua,format:Hi,colorSpace:Ou,depthBuffer:!1},c=e_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=FA(f)),this._blurMaterial=PA(f,t,i),this._ggxMaterial=BA(f,t,i)}return c}_compileMaterial(t){const i=new fa(new hi,t);this._renderer.compile(i,dl)}_sceneToCubeUV(t,i,s,c,f){const p=new Ai(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,E=v.toneMapping;v.getClearColor(Jv),v.toneMapping=la,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(c),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fa(new Rl,new nm({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const D=this._backgroundBox,b=D.material;let S=!1;const O=t.background;O?O.isColor&&(b.color.copy(O),t.background=null,S=!0):(b.color.copy(Jv),S=!0);for(let W=0;W<6;W++){const R=W%3;R===0?(p.up.set(0,m[W],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+_[W],f.y,f.z)):R===1?(p.up.set(0,0,m[W]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+_[W],f.z)):(p.up.set(0,m[W],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+_[W]));const U=this._cubeSize;$s(c,R*U,W>2?U:0,U,U),v.setRenderTarget(c),S&&v.render(D,p),v.render(t,p)}v.toneMapping=E,v.autoClear=g,t.background=O}_textureToCubeUV(t,i){const s=this._renderer,c=t.mapping===Qr||t.mapping===ro;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const f=c?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const h=f.uniforms;h.envMap.value=t;const p=this._cubeSize;$s(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(d,dl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const c=this._lodMeshes.length;for(let f=1;f<c;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const c=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const p=d.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-_*_),g=m*1.25,E=v*g,{_lodMax:C}=this,D=this._sizeLods[s],b=3*D*(s>C-no?s-C+no:0),S=4*(this._cubeSize-D);p.envMap.value=t.texture,p.roughness.value=E,p.mipInt.value=C-i,$s(f,b,S,3*D,2*D),c.setRenderTarget(f),c.render(h,dl),p.envMap.value=f.texture,p.roughness.value=0,p.mipInt.value=C-s,$s(t,b,S,3*D,2*D),c.setRenderTarget(t),c.render(h,dl)}_blur(t,i,s,c){const f=this._pingPongRenderTarget,d=Math.min(c,Math.PI)/Math.SQRT2;this._blurPass(t,f,i,s,d),this._blurPass(f,t,s,s,d)}_blurPass(t,i,s,c,f){const d=this._renderer,h=this._blurMaterial,p=this._lodMeshes[c];p.material=h;const m=h.uniforms;m.envMap.value=t.texture,m.sigma.value=f,m.mipInt.value=this._lodMax-s;const _=this._sizeLods[c],v=3*_*(c>this._lodMax-no?c-this._lodMax+no:0),g=4*(this._cubeSize-_);$s(i,v,g,3*_,2*_),d.setRenderTarget(i),d.render(p,dl)}}function FA(o){const t=[],i=[];let s=o;const c=o-no+1+DA;for(let f=0;f<c;f++){const d=Math.pow(2,s);t.push(d);const h=1/(d-2),p=-h,m=1+h,_=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,g=6,E=3,C=new Float32Array(E*g*v),D=new Float32Array(E*g*v);for(let S=0;S<v;S++){const O=S%3*2/3-1,W=S>2?0:-1,R=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];C.set(R,E*g*S);for(let U=0;U<g;U++){const L=_[U*2]*2-1,P=_[U*2+1]*2-1;S===0?jr.set(1,P,L):S===1?jr.set(-L,1,-P):S===2?jr.set(-L,P,1):S===3?jr.set(-1,P,-L):S===4?jr.set(-L,-1,P):jr.set(L,P,-1),jr.toArray(D,(S*g+U)*E)}}const b=new hi;b.setAttribute("position",new di(C,E)),b.setAttribute("outputDirection",new di(D,E)),i.push(new fa(b,null)),s>no&&s--}return{lodMeshes:i,sizeLods:t}}function e_(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=Hu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $s(o,t,i,s,c){o.viewport.set(t,i,s,c),o.scissor.set(t,i,s,c)}function BA(o,t,i){return new da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function PA(o,t,i){return new da({name:"SphericalGaussianBlur",defines:{SAMPLES:UA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function t_(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function n_(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fa,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class sS extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},c=[s,s,s,s,s,s];this.texture=new $_(c),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},c=new Rl(5,5,5),f=new da({name:"CubemapFromEquirect",uniforms:so(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Fa});f.uniforms.tEquirect.value=i;const d=new fa(c,f),h=i.minFilter;return i.minFilter===qr&&(i.minFilter=Pn),new HE(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,c=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,c);t.setRenderTarget(f)}}function IA(o){let t=new WeakMap,i=new WeakMap,s=null;function c(g,E=!1){return g==null?null:E?d(g):f(g)}function f(g){if(g&&g.isTexture){const E=g.mapping;if(E===bh||E===Mh)if(t.has(g)){const C=t.get(g).texture;return h(C,g.mapping)}else{const C=g.image;if(C&&C.height>0){const D=new sS(C.height);return D.fromEquirectangularTexture(o,g),t.set(g,D),g.addEventListener("dispose",m),h(D.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,C=E===bh||E===Mh,D=E===Qr||E===ro;if(C||D){let b=i.get(g);const S=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new $v(o)),b=C?s.fromEquirectangular(g,b):s.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const O=g.image;return C&&O&&O.height>0||D&&O&&p(O)?(s===null&&(s=new $v(o)),b=C?s.fromEquirectangular(g):s.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function h(g,E){return E===bh?g.mapping=Qr:E===Mh&&(g.mapping=ro),g}function p(g){let E=0;const C=6;for(let D=0;D<C;D++)g[D]!==void 0&&E++;return E===C}function m(g){const E=g.target;E.removeEventListener("dispose",m);const C=t.get(E);C!==void 0&&(t.delete(E),C.dispose())}function _(g){const E=g.target;E.removeEventListener("dispose",_);const C=i.get(E);C!==void 0&&(i.delete(E),C.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:c,dispose:v}}function zA(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const c=o.getExtension(s);return t[s]=c,c}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const c=i(s);return c===null&&io("WebGLRenderer: "+s+" extension not supported."),c}}}function HA(o,t,i,s){const c={},f=new WeakMap;function d(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const C in g.attributes)t.remove(g.attributes[C]);g.removeEventListener("dispose",d),delete c[g.id];const E=f.get(g);E&&(t.remove(E),f.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return c[g.id]===!0||(g.addEventListener("dispose",d),c[g.id]=!0,i.memory.geometries++),g}function p(v){const g=v.attributes;for(const E in g)t.update(g[E],o.ARRAY_BUFFER)}function m(v){const g=[],E=v.index,C=v.attributes.position;let D=0;if(C===void 0)return;if(E!==null){const O=E.array;D=E.version;for(let W=0,R=O.length;W<R;W+=3){const U=O[W+0],L=O[W+1],P=O[W+2];g.push(U,L,L,P,P,U)}}else{const O=C.array;D=C.version;for(let W=0,R=O.length/3-1;W<R;W+=3){const U=W+0,L=W+1,P=W+2;g.push(U,L,L,P,P,U)}}const b=new(C.count>=65535?K_:Z_)(g,1);b.version=D;const S=f.get(v);S&&t.remove(S),f.set(v,b)}function _(v){const g=f.get(v);if(g){const E=v.index;E!==null&&g.version<E.version&&m(v)}else m(v);return f.get(v)}return{get:h,update:p,getWireframeAttribute:_}}function GA(o,t,i){let s;function c(v){s=v}let f,d;function h(v){f=v.type,d=v.bytesPerElement}function p(v,g){o.drawElements(s,g,f,v*d),i.update(g,s,1)}function m(v,g,E){E!==0&&(o.drawElementsInstanced(s,g,f,v*d,E),i.update(g,s,E))}function _(v,g,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,f,v,0,E);let D=0;for(let b=0;b<E;b++)D+=g[b];i.update(D,s,1)}this.setMode=c,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function VA(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(f/3);break;case o.LINES:i.lines+=h*(f/2);break;case o.LINE_STRIP:i.lines+=h*(f-1);break;case o.LINE_LOOP:i.lines+=h*f;break;case o.POINTS:i.points+=h*f;break;default:Gt("WebGLInfo: Unknown draw mode:",d);break}}function c(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:c,update:s}}function kA(o,t,i){const s=new WeakMap,c=new fn;function f(d,h,p){const m=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let B=function(){T.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var E=B;g!==void 0&&g.texture.dispose();const C=h.morphAttributes.position!==void 0,D=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let R=0;C===!0&&(R=1),D===!0&&(R=2),b===!0&&(R=3);let U=h.attributes.position.count*R,L=1;U>t.maxTextureSize&&(L=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const P=new Float32Array(U*L*4*v),T=new j_(P,U,L,v);T.type=sa,T.needsUpdate=!0;const F=R*4;for(let V=0;V<v;V++){const K=S[V],ae=O[V],J=W[V],ie=U*L*4*V;for(let Y=0;Y<K.count;Y++){const H=Y*F;C===!0&&(c.fromBufferAttribute(K,Y),P[ie+H+0]=c.x,P[ie+H+1]=c.y,P[ie+H+2]=c.z,P[ie+H+3]=0),D===!0&&(c.fromBufferAttribute(ae,Y),P[ie+H+4]=c.x,P[ie+H+5]=c.y,P[ie+H+6]=c.z,P[ie+H+7]=0),b===!0&&(c.fromBufferAttribute(J,Y),P[ie+H+8]=c.x,P[ie+H+9]=c.y,P[ie+H+10]=c.z,P[ie+H+11]=J.itemSize===4?c.w:1)}}g={count:v,texture:T,size:new Wt(U,L)},s.set(h,g),h.addEventListener("dispose",B)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let C=0;for(let b=0;b<m.length;b++)C+=m[b];const D=h.morphTargetsRelative?1:1-C;p.getUniforms().setValue(o,"morphTargetBaseInfluence",D),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:f}}function XA(o,t,i,s,c){let f=new WeakMap;function d(m){const _=c.render.frame,v=m.geometry,g=t.get(m,v);if(f.get(g)!==_&&(t.update(g),f.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),f.get(m)!==_&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),f.set(m,_))),m.isSkinnedMesh){const E=m.skeleton;f.get(E)!==_&&(E.update(),f.set(E,_))}return g}function h(){f=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:h}}const WA={[D_]:"LINEAR_TONE_MAPPING",[U_]:"REINHARD_TONE_MAPPING",[L_]:"CINEON_TONE_MAPPING",[Wp]:"ACES_FILMIC_TONE_MAPPING",[F_]:"AGX_TONE_MAPPING",[B_]:"NEUTRAL_TONE_MAPPING",[O_]:"CUSTOM_TONE_MAPPING"};function jA(o,t,i,s,c,f){const d=new Gi(t,i,{type:o,depthBuffer:c,stencilBuffer:f,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const m=new hi;m.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const _=new PE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new fa(m,_),g=new iS(-1,1,1,-1,0,1);let E=null,C=null,D=!1,b,S=null,O=[],W=!1;this.setSize=function(R,U){d.setSize(R,U),h!==null&&h.setSize(R,U),p!==null&&p.setSize(R,U);for(let L=0;L<O.length;L++){const P=O[L];P.setSize&&P.setSize(R,U)}},this.setEffects=function(R){O=R,W=O.length>0&&O[0].isRenderPass===!0;const U=d.width,L=d.height;O.length>0&&h===null&&(h=new Gi(U,L,{type:ua,depthBuffer:!1,stencilBuffer:!1}),p=new Gi(U,L,{type:ua,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<O.length;P++){const T=O[P];T.setSize&&T.setSize(U,L)}},this.begin=function(R,U){if(D||R.toneMapping===la&&O.length===0)return!1;if(S=U,U!==null){const L=U.width,P=U.height;(d.width!==L||d.height!==P)&&this.setSize(L,P)}return W===!1&&R.setRenderTarget(d),b=R.toneMapping,R.toneMapping=la,!0},this.hasRenderPass=function(){return W},this.end=function(R,U){R.toneMapping=b,D=!0;let L=d,P=h;for(let T=0;T<O.length;T++){const F=O[T];F.enabled!==!1&&(F.render(R,P,L,U),F.needsSwap!==!1&&(L=P,P=P===h?p:h))}if(E!==R.outputColorSpace||C!==R.toneMapping){E=R.outputColorSpace,C=R.toneMapping,_.defines={},Pt.getTransfer(E)===Qt&&(_.defines.SRGB_TRANSFER="");const T=WA[C];T&&(_.defines[T]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(S),R.render(v,g),S=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),m.dispose(),_.dispose()}}const oS=new In,zp=new El(1,1),lS=new j_,cS=new hE,uS=new $_,i_=[],a_=[],r_=new Float32Array(16),s_=new Float32Array(9),o_=new Float32Array(4);function co(o,t,i){const s=o[0];if(s<=0||s>0)return o;const c=t*i;let f=i_[c];if(f===void 0&&(f=new Float32Array(c),i_[c]=f),t!==0){s.toArray(f,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(f,h)}return f}function yn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function bn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Xu(o,t){let i=a_[t];i===void 0&&(i=new Int32Array(t),a_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function qA(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function YA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2fv(this.addr,t),bn(i,t)}}function ZA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(yn(i,t))return;o.uniform3fv(this.addr,t),bn(i,t)}}function KA(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4fv(this.addr,t),bn(i,t)}}function QA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),bn(i,t)}else{if(yn(i,s))return;o_.set(s),o.uniformMatrix2fv(this.addr,!1,o_),bn(i,s)}}function JA(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),bn(i,t)}else{if(yn(i,s))return;s_.set(s),o.uniformMatrix3fv(this.addr,!1,s_),bn(i,s)}}function $A(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(yn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),bn(i,t)}else{if(yn(i,s))return;r_.set(s),o.uniformMatrix4fv(this.addr,!1,r_),bn(i,s)}}function e3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function t3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2iv(this.addr,t),bn(i,t)}}function n3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;o.uniform3iv(this.addr,t),bn(i,t)}}function i3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4iv(this.addr,t),bn(i,t)}}function a3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function r3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(yn(i,t))return;o.uniform2uiv(this.addr,t),bn(i,t)}}function s3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(yn(i,t))return;o.uniform3uiv(this.addr,t),bn(i,t)}}function o3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(yn(i,t))return;o.uniform4uiv(this.addr,t),bn(i,t)}}function l3(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c);let f;this.type===o.SAMPLER_2D_SHADOW?(zp.compareFunction=i.isReversedDepthBuffer()?$p:Jp,f=zp):f=oS,i.setTexture2D(t||f,c)}function c3(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture3D(t||cS,c)}function u3(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTextureCube(t||uS,c)}function f3(o,t,i){const s=this.cache,c=i.allocateTextureUnit();s[0]!==c&&(o.uniform1i(this.addr,c),s[0]=c),i.setTexture2DArray(t||lS,c)}function d3(o){switch(o){case 5126:return qA;case 35664:return YA;case 35665:return ZA;case 35666:return KA;case 35674:return QA;case 35675:return JA;case 35676:return $A;case 5124:case 35670:return e3;case 35667:case 35671:return t3;case 35668:case 35672:return n3;case 35669:case 35673:return i3;case 5125:return a3;case 36294:return r3;case 36295:return s3;case 36296:return o3;case 35678:case 36198:case 36298:case 36306:case 35682:return l3;case 35679:case 36299:case 36307:return c3;case 35680:case 36300:case 36308:case 36293:return u3;case 36289:case 36303:case 36311:case 36292:return f3}}function h3(o,t){o.uniform1fv(this.addr,t)}function p3(o,t){const i=co(t,this.size,2);o.uniform2fv(this.addr,i)}function m3(o,t){const i=co(t,this.size,3);o.uniform3fv(this.addr,i)}function g3(o,t){const i=co(t,this.size,4);o.uniform4fv(this.addr,i)}function x3(o,t){const i=co(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function v3(o,t){const i=co(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _3(o,t){const i=co(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function S3(o,t){o.uniform1iv(this.addr,t)}function y3(o,t){o.uniform2iv(this.addr,t)}function b3(o,t){o.uniform3iv(this.addr,t)}function M3(o,t){o.uniform4iv(this.addr,t)}function E3(o,t){o.uniform1uiv(this.addr,t)}function T3(o,t){o.uniform2uiv(this.addr,t)}function A3(o,t){o.uniform3uiv(this.addr,t)}function w3(o,t){o.uniform4uiv(this.addr,t)}function C3(o,t,i){const s=this.cache,c=t.length,f=Xu(i,c);yn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));let d;this.type===o.SAMPLER_2D_SHADOW?d=zp:d=oS;for(let h=0;h!==c;++h)i.setTexture2D(t[h]||d,f[h])}function R3(o,t,i){const s=this.cache,c=t.length,f=Xu(i,c);yn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==c;++d)i.setTexture3D(t[d]||cS,f[d])}function N3(o,t,i){const s=this.cache,c=t.length,f=Xu(i,c);yn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==c;++d)i.setTextureCube(t[d]||uS,f[d])}function D3(o,t,i){const s=this.cache,c=t.length,f=Xu(i,c);yn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let d=0;d!==c;++d)i.setTexture2DArray(t[d]||lS,f[d])}function U3(o){switch(o){case 5126:return h3;case 35664:return p3;case 35665:return m3;case 35666:return g3;case 35674:return x3;case 35675:return v3;case 35676:return _3;case 5124:case 35670:return S3;case 35667:case 35671:return y3;case 35668:case 35672:return b3;case 35669:case 35673:return M3;case 5125:return E3;case 36294:return T3;case 36295:return A3;case 36296:return w3;case 35678:case 36198:case 36298:case 36306:case 35682:return C3;case 35679:case 36299:case 36307:return R3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return D3}}class L3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=d3(i.type)}}class O3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=U3(i.type)}}class F3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const c=this.seq;for(let f=0,d=c.length;f!==d;++f){const h=c[f];h.setValue(t,i[h.id],s)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function l_(o,t){o.seq.push(t),o.map[t.id]=t}function B3(o,t,i){const s=o.name,c=s.length;for(Kh.lastIndex=0;;){const f=Kh.exec(s),d=Kh.lastIndex;let h=f[1];const p=f[2]==="]",m=f[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===c){l_(i,m===void 0?new L3(h,o,t):new O3(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new F3(h),l_(i,v)),i=v}}}class Nu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),p=t.getUniformLocation(i,h.name);B3(h,p,this)}const c=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?c.push(d):f.push(d);c.length>0&&(this.seq=c.concat(f))}setValue(t,i,s,c){const f=this.map[i];f!==void 0&&f.setValue(t,s,c)}setOptional(t,i,s){const c=i[s];c!==void 0&&this.setValue(t,s,c)}static upload(t,i,s,c){for(let f=0,d=i.length;f!==d;++f){const h=i[f],p=s[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,c)}}static seqWithValue(t,i){const s=[];for(let c=0,f=t.length;c!==f;++c){const d=t[c];d.id in i&&s.push(d)}return s}}function c_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const P3=37297;let I3=0;function z3(o,t){const i=o.split(`
`),s=[],c=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=c;d<f;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const u_=new gt;function H3(o){Pt._getMatrix(u_,Pt.workingColorSpace,o);const t=`mat3( ${u_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(o)){case Fu:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function f_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),f=(o.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+z3(o.getShaderSource(t),h)}else return f}function G3(o,t){const i=H3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const V3={[D_]:"Linear",[U_]:"Reinhard",[L_]:"Cineon",[Wp]:"ACESFilmic",[F_]:"AgX",[B_]:"Neutral",[O_]:"Custom"};function k3(o,t){const i=V3[t];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Mu=new he;function X3(){Pt.getLuminanceCoefficients(Mu);const o=Mu.x.toFixed(4),t=Mu.y.toFixed(4),i=Mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function j3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function q3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let c=0;c<s;c++){const f=o.getActiveAttrib(t,c),d=f.name;let h=1;f.type===o.FLOAT_MAT2&&(h=2),f.type===o.FLOAT_MAT3&&(h=3),f.type===o.FLOAT_MAT4&&(h=4),i[d]={type:f.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function ml(o){return o!==""}function d_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hp(o){return o.replace(Y3,K3)}const Z3=new Map;function K3(o,t){let i=bt[t];if(i===void 0){const s=Z3.get(t);if(s!==void 0)i=bt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Hp(i)}const Q3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(o){return o.replace(Q3,J3)}function J3(o,t,i,s){let c="";for(let f=parseInt(t);f<parseInt(i);f++)c+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return c}function m_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const $3={[Tu]:"SHADOWMAP_TYPE_PCF",[pl]:"SHADOWMAP_TYPE_VSM"};function ew(o){return $3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tw={[Qr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[Hu]:"ENVMAP_TYPE_CUBE_UV"};function nw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":tw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const iw={[ro]:"ENVMAP_MODE_REFRACTION"};function aw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":iw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rw={[N_]:"ENVMAP_BLENDING_MULTIPLY",[R1]:"ENVMAP_BLENDING_MIX",[N1]:"ENVMAP_BLENDING_ADD"};function sw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":rw[o.combine]||"ENVMAP_BLENDING_NONE"}function ow(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function lw(o,t,i,s){const c=o.getContext(),f=i.defines;let d=i.vertexShader,h=i.fragmentShader;const p=ew(i),m=nw(i),_=aw(i),v=sw(i),g=ow(i),E=W3(i),C=j3(f),D=c.createProgram();let b,S,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(ml).join(`
`),b.length>0&&(b+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C].filter(ml).join(`
`),S.length>0&&(S+=`
`)):(b=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),S=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,C,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?bt.tonemapping_pars_fragment:"",i.toneMapping!==la?k3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,G3("linearToOutputTexel",i.outputColorSpace),X3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),d=Hp(d),d=d_(d,i),d=h_(d,i),h=Hp(h),h=d_(h,i),h=h_(h,i),d=p_(d),h=p_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,S=["#define varying in",i.glslVersion===Av?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const W=O+b+d,R=O+S+h,U=c_(c,c.VERTEX_SHADER,W),L=c_(c,c.FRAGMENT_SHADER,R);c.attachShader(D,U),c.attachShader(D,L),i.index0AttributeName!==void 0?c.bindAttribLocation(D,0,i.index0AttributeName):i.hasPositionAttribute===!0&&c.bindAttribLocation(D,0,"position"),c.linkProgram(D);function P(V){if(o.debug.checkShaderErrors){const K=c.getProgramInfoLog(D)||"",ae=c.getShaderInfoLog(U)||"",J=c.getShaderInfoLog(L)||"",ie=K.trim(),Y=ae.trim(),H=J.trim();let j=!0,te=!0;if(c.getProgramParameter(D,c.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(c,D,U,L);else{const oe=f_(c,U,"vertex"),me=f_(c,L,"fragment");Gt("WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(D,c.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ie+`
`+oe+`
`+me)}else ie!==""?dt("WebGLProgram: Program Info Log:",ie):(Y===""||H==="")&&(te=!1);te&&(V.diagnostics={runnable:j,programLog:ie,vertexShader:{log:Y,prefix:b},fragmentShader:{log:H,prefix:S}})}c.deleteShader(U),c.deleteShader(L),T=new Nu(c,D),F=q3(c,D)}let T;this.getUniforms=function(){return T===void 0&&P(this),T};let F;this.getAttributes=function(){return F===void 0&&P(this),F};let B=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=c.getProgramParameter(D,P3)),B},this.destroy=function(){s.releaseStatesOfProgram(this),c.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=I3++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=U,this.fragmentShader=L,this}let cw=0;class uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const c=this._getShaderCacheForMaterial(t);return c.has(i)===!1&&(c.add(i),i.usedTimes++),c.has(s)===!1&&(c.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new fw(t),i.set(t,s)),s}}class fw{constructor(t){this.id=cw++,this.code=t,this.usedTimes=0}}function dw(o){return o===Jr||o===Uu||o===Lu}function hw(o,t,i,s,c,f){const d=new q_,h=new uw,p=new Set,m=[],_=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function D(T,F,B,V,K,ae){const J=V.fog,ie=K.geometry,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=t.get(T.envMap||Y,H),te=j&&j.mapping===Hu?j.image.height:null,oe=E[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,We=me!==void 0?me.length:0;let je=0;ie.morphAttributes.position!==void 0&&(je=1),ie.morphAttributes.normal!==void 0&&(je=2),ie.morphAttributes.color!==void 0&&(je=3);let z,xe,Re,Z;if(oe){const Ct=ra[oe];z=Ct.vertexShader,xe=Ct.fragmentShader}else{z=T.vertexShader,xe=T.fragmentShader;const Ct=h.getVertexShaderStage(T),ut=h.getFragmentShaderStage(T);h.update(T,Ct,ut),Re=Ct.id,Z=ut.id}const pe=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Pe=K.isInstancedMesh===!0,Se=K.isBatchedMesh===!0,De=!!T.map,Vt=!!T.matcap,xt=!!j,vt=!!T.aoMap,yt=!!T.lightMap,it=!!T.bumpMap&&T.wireframe===!1,st=!!T.normalMap,Ht=!!T.displacementMap,tt=!!T.emissiveMap,et=!!T.metalnessMap,ct=!!T.roughnessMap,G=T.anisotropy>0,wt=T.clearcoat>0,ht=T.dispersion>0,N=T.retroreflectivity>0,M=T.iridescence>0,$=T.sheen>0,re=T.transmission>0,ge=G&&!!T.anisotropyMap,Ce=wt&&!!T.clearcoatMap,Le=wt&&!!T.clearcoatNormalMap,ve=wt&&!!T.clearcoatRoughnessMap,_e=M&&!!T.iridescenceMap,Te=M&&!!T.iridescenceThicknessMap,ze=$&&!!T.sheenColorMap,Ee=$&&!!T.sheenRoughnessMap,Ne=!!T.specularMap,Ie=!!T.specularColorMap,nt=!!T.specularIntensityMap,ot=re&&!!T.transmissionMap,q=re&&!!T.thicknessMap,Ue=!!T.gradientMap,ye=!!T.alphaMap,Oe=T.alphaTest>0,Ge=!!T.alphaHash,Ae=!!T.extensions;let Qe=la;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Qe=o.toneMapping);const He={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:z,fragmentShader:xe,defines:T.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Se,batchingColor:Se&&K._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,instancingMorph:Pe&&K.morphTexture!==null,outputColorSpace:pe===null?o.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:De,matcap:Vt,envMap:xt,envMapMode:xt&&j.mapping,envMapCubeUVHeight:te,aoMap:vt,lightMap:yt,bumpMap:it,normalMap:st,displacementMap:Ht,emissiveMap:tt,normalMapObjectSpace:st&&T.normalMapType===L1,normalMapTangentSpace:st&&T.normalMapType===Tv,packedNormalMap:st&&T.normalMapType===Tv&&dw(T.normalMap.format),metalnessMap:et,roughnessMap:ct,anisotropy:G,anisotropyMap:ge,clearcoat:wt,clearcoatMap:Ce,clearcoatNormalMap:Le,clearcoatRoughnessMap:ve,dispersion:ht,retroreflection:N,iridescence:M,iridescenceMap:_e,iridescenceThicknessMap:Te,sheen:$,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:Ne,specularColorMap:Ie,specularIntensityMap:nt,transmission:re,transmissionMap:ot,thicknessMap:q,gradientMap:Ue,opaque:T.transparent===!1&&T.blending===gl&&T.alphaToCoverage===!1,alphaMap:ye,alphaTest:Oe,alphaHash:Ge,combine:T.combine,mapUv:De&&C(T.map.channel),aoMapUv:vt&&C(T.aoMap.channel),lightMapUv:yt&&C(T.lightMap.channel),bumpMapUv:it&&C(T.bumpMap.channel),normalMapUv:st&&C(T.normalMap.channel),displacementMapUv:Ht&&C(T.displacementMap.channel),emissiveMapUv:tt&&C(T.emissiveMap.channel),metalnessMapUv:et&&C(T.metalnessMap.channel),roughnessMapUv:ct&&C(T.roughnessMap.channel),anisotropyMapUv:ge&&C(T.anisotropyMap.channel),clearcoatMapUv:Ce&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Le&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&C(T.sheenRoughnessMap.channel),specularMapUv:Ne&&C(T.specularMap.channel),specularColorMapUv:Ie&&C(T.specularColorMap.channel),specularIntensityMapUv:nt&&C(T.specularIntensityMap.channel),transmissionMapUv:ot&&C(T.transmissionMap.channel),thicknessMapUv:q&&C(T.thicknessMap.channel),alphaMapUv:ye&&C(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(st||G),vertexNormals:!!ie.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ie.attributes.uv&&(De||ye),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ie.attributes.normal===void 0&&st===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:We,morphTextureStride:je,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ae.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qe,decodeVideoTexture:De&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Qt,decodeVideoTextureEmissive:tt&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===La,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ae&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&T.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return He.vertexUv1s=p.has(1),He.vertexUv2s=p.has(2),He.vertexUv3s=p.has(3),p.clear(),He}function b(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)F.push(B),F.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(S(F,T),O(F,T),F.push(o.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function S(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numSunLights),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numSunLightShadows),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function O(T,F){d.disableAll(),F.instancing&&d.enable(0),F.instancingColor&&d.enable(1),F.instancingMorph&&d.enable(2),F.matcap&&d.enable(3),F.envMap&&d.enable(4),F.normalMapObjectSpace&&d.enable(5),F.normalMapTangentSpace&&d.enable(6),F.clearcoat&&d.enable(7),F.iridescence&&d.enable(8),F.alphaTest&&d.enable(9),F.vertexColors&&d.enable(10),F.vertexAlphas&&d.enable(11),F.vertexUv1s&&d.enable(12),F.vertexUv2s&&d.enable(13),F.vertexUv3s&&d.enable(14),F.vertexTangents&&d.enable(15),F.anisotropy&&d.enable(16),F.alphaHash&&d.enable(17),F.batching&&d.enable(18),F.dispersion&&d.enable(19),F.retroreflection&&d.enable(24),F.batchingColor&&d.enable(20),F.gradientMap&&d.enable(21),F.packedNormalMap&&d.enable(22),F.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),F.fog&&d.enable(0),F.useFog&&d.enable(1),F.flatShading&&d.enable(2),F.logarithmicDepthBuffer&&d.enable(3),F.reversedDepthBuffer&&d.enable(4),F.skinning&&d.enable(5),F.morphTargets&&d.enable(6),F.morphNormals&&d.enable(7),F.morphColors&&d.enable(8),F.premultipliedAlpha&&d.enable(9),F.shadowMapEnabled&&d.enable(10),F.doubleSided&&d.enable(11),F.flipSided&&d.enable(12),F.useDepthPacking&&d.enable(13),F.dithering&&d.enable(14),F.transmission&&d.enable(15),F.sheen&&d.enable(16),F.opaque&&d.enable(17),F.pointsUvs&&d.enable(18),F.decodeVideoTexture&&d.enable(19),F.decodeVideoTextureEmissive&&d.enable(20),F.alphaToCoverage&&d.enable(21),F.numLightProbeGrids>0&&d.enable(22),F.hasPositionAttribute&&d.enable(23),T.push(d.mask)}function W(T){const F=E[T.type];let B;if(F){const V=ra[F];B=OE.clone(V.uniforms)}else B=T.uniforms;return B}function R(T,F){let B=_.get(F);return B!==void 0?++B.usedTimes:(B=new lw(o,F,T,c),m.push(B),_.set(F,B)),B}function U(T){if(--T.usedTimes===0){const F=m.indexOf(T);m[F]=m[m.length-1],m.pop(),_.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function P(){h.dispose()}return{getParameters:D,getProgramCacheKey:b,getUniforms:W,acquireProgram:R,releaseProgram:U,releaseShaderCache:L,programs:m,dispose:P}}function pw(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function c(d,h,p){o.get(d)[h]=p}function f(){o=new WeakMap}return{has:t,get:i,remove:s,update:c,dispose:f}}function mw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function g_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function x_(){const o=[];let t=0;const i=[],s=[],c=[];function f(){t=0,i.length=0,s.length=0,c.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,C,D,b,S){let O=o[t];return O===void 0?(O={id:g.id,object:g,geometry:E,material:C,materialVariant:d(g),groupOrder:D,renderOrder:g.renderOrder,z:b,group:S},o[t]=O):(O.id=g.id,O.object=g,O.geometry=E,O.material=C,O.materialVariant=d(g),O.groupOrder=D,O.renderOrder=g.renderOrder,O.z=b,O.group=S),t++,O}function p(g,E,C,D,b,S,O){O.reversedDepth===!0&&(b=-b);const W=h(g,E,C,D,b,S);C.transmission>0?s.push(W):C.transparent===!0?c.push(W):i.push(W)}function m(g,E,C,D,b,S){const O=h(g,E,C,D,b,S);C.transmission>0?s.unshift(O):C.transparent===!0?c.unshift(O):i.unshift(O)}function _(g,E){i.length>1&&i.sort(g||mw),s.length>1&&s.sort(E||g_),c.length>1&&c.sort(E||g_)}function v(){for(let g=t,E=o.length;g<E;g++){const C=o[g];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:i,transmissive:s,transparent:c,init:f,push:p,unshift:m,finish:v,sort:_}}function gw(){let o=new WeakMap;function t(s,c){const f=o.get(s);let d;return f===void 0?(d=new x_,o.set(s,[d])):c>=f.length?(d=new x_,f.push(d)):d=f[c],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function xw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new he,color:new At};break;case"SpotLight":i={position:new he,direction:new he,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new he,color:new At,distance:0,decay:0};break;case"HemisphereLight":i={direction:new he,skyColor:new At,groundColor:new At};break;case"RectAreaLight":i={color:new At,position:new he,halfWidth:new he,halfHeight:new he};break}return o[t.id]=i,i}}}function vw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let _w=0;function Sw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function yw(o){const t=new xw,i=vw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new he);const c=new he,f=new hn,d=new hn;function h(m){let _=0,v=0,g=0;for(let K=0;K<9;K++)s.probe[K].set(0,0,0);let E=0,C=0,D=0,b=0,S=0,O=0,W=0,R=0,U=0,L=0,P=0,T=0,F=0,B=0;m.sort(Sw);for(let K=0,ae=m.length;K<ae;K++){const J=m[K],ie=J.color,Y=J.intensity,H=J.distance;let j=null;if(J.shadow&&J.shadow.map&&(J.shadow.map.texture.format===Jr?j=J.shadow.map.texture:j=J.shadow.map.depthTexture||J.shadow.map.texture),J.isAmbientLight)_+=ie.r*Y,v+=ie.g*Y,g+=ie.b*Y;else if(J.isLightProbe){for(let te=0;te<9;te++)s.probe[te].addScaledVector(J.sh.coefficients[te],Y);B++}else if(J.isSunLight){const te=t.get(J);if(te.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const oe=J.shadow,me=i.get(J);me.shadowIntensity=oe.intensity,me.shadowBias=oe.bias,me.shadowNormalBias=oe.normalBias,me.shadowRadius=oe.radius,me.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),s.sunShadow[C]=me,s.sunShadowMap[C]=j;const We=oe.getViewportCount();for(let je=0;je<We;je++)s.sunShadowMatrix[D+je]=oe.getMatrix(je),s.sunShadowCascade[D+je]=oe._cascadeData[je];D+=We,C++}s.sun[E]=te,E++}else if(J.isDirectionalLight){const te=t.get(J);if(te.color.copy(J.color).multiplyScalar(J.intensity),J.castShadow){const oe=J.shadow,me=i.get(J);me.shadowIntensity=oe.intensity,me.shadowBias=oe.bias,me.shadowNormalBias=oe.normalBias,me.shadowRadius=oe.radius,me.shadowMapSize=oe.mapSize,s.directionalShadow[b]=me,s.directionalShadowMap[b]=j,s.directionalShadowMatrix[b]=J.shadow.matrix,U++}s.directional[b]=te,b++}else if(J.isSpotLight){const te=t.get(J);te.position.setFromMatrixPosition(J.matrixWorld),te.color.copy(ie).multiplyScalar(Y),te.distance=H,te.coneCos=Math.cos(J.angle),te.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),te.decay=J.decay,s.spot[O]=te;const oe=J.shadow;if(J.map&&(s.spotLightMap[T]=J.map,T++,oe.updateMatrices(J),J.castShadow&&F++),s.spotLightMatrix[O]=oe.matrix,J.castShadow){const me=i.get(J);me.shadowIntensity=oe.intensity,me.shadowBias=oe.bias,me.shadowNormalBias=oe.normalBias,me.shadowRadius=oe.radius,me.shadowMapSize=oe.mapSize,s.spotShadow[O]=me,s.spotShadowMap[O]=j,P++}O++}else if(J.isRectAreaLight){const te=t.get(J);te.color.copy(ie).multiplyScalar(Y),te.halfWidth.set(J.width*.5,0,0),te.halfHeight.set(0,J.height*.5,0),s.rectArea[W]=te,W++}else if(J.isPointLight){const te=t.get(J);if(te.color.copy(J.color).multiplyScalar(J.intensity),te.distance=J.distance,te.decay=J.decay,J.castShadow){const oe=J.shadow,me=i.get(J);me.shadowIntensity=oe.intensity,me.shadowBias=oe.bias,me.shadowNormalBias=oe.normalBias,me.shadowRadius=oe.radius,me.shadowMapSize=oe.mapSize,me.shadowCameraNear=oe.camera.near,me.shadowCameraFar=oe.camera.far,s.pointShadow[S]=me,s.pointShadowMap[S]=j,s.pointShadowMatrix[S]=J.shadow.matrix,L++}s.point[S]=te,S++}else if(J.isHemisphereLight){const te=t.get(J);te.skyColor.copy(J.color).multiplyScalar(Y),te.groundColor.copy(J.groundColor).multiplyScalar(Y),s.hemi[R]=te,R++}}W>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xe.LTC_FLOAT_1,s.rectAreaLTC2=Xe.LTC_FLOAT_2):(s.rectAreaLTC1=Xe.LTC_HALF_1,s.rectAreaLTC2=Xe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=g;const V=s.hash;(V.sunLength!==E||V.directionalLength!==b||V.pointLength!==S||V.spotLength!==O||V.rectAreaLength!==W||V.hemiLength!==R||V.numSunShadows!==C||V.numDirectionalShadows!==U||V.numPointShadows!==L||V.numSpotShadows!==P||V.numSpotMaps!==T||V.numLightProbes!==B)&&(s.sun.length=E,s.directional.length=b,s.spot.length=O,s.rectArea.length=W,s.point.length=S,s.hemi.length=R,s.sunShadow.length=C,s.sunShadowMap.length=C,s.sunShadowMatrix.length=D,s.sunShadowCascade.length=D,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.pointShadowMatrix.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+T-F,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=B,V.sunLength=E,V.directionalLength=b,V.pointLength=S,V.spotLength=O,V.rectAreaLength=W,V.hemiLength=R,V.numSunShadows=C,V.numDirectionalShadows=U,V.numPointShadows=L,V.numSpotShadows=P,V.numSpotMaps=T,V.numLightProbes=B,s.version=_w++)}function p(m,_){let v=0,g=0,E=0,C=0,D=0,b=0;const S=_.matrixWorldInverse;for(let O=0,W=m.length;O<W;O++){const R=m[O];if(R.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(S),v++}else if(R.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(R.matrixWorld),c.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),g++}else if(R.isSpotLight){const U=s.spot[C];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(R.matrixWorld),c.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(c),U.direction.transformDirection(S),C++}else if(R.isRectAreaLight){const U=s.rectArea[D];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(S),d.identity(),f.copy(R.matrixWorld),f.premultiply(S),d.extractRotation(f),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),D++}else if(R.isPointLight){const U=s.point[E];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(S),E++}else if(R.isHemisphereLight){const U=s.hemi[b];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(S),b++}}}return{setup:h,setupView:p,state:s}}function v_(o){const t=new yw(o),i=[],s=[],c=[];function f(g){v.camera=g,i.length=0,s.length=0,c.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function p(g){c.push(g)}function m(){t.setup(i)}function _(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:c,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:v,setupLights:m,setupLightsView:_,pushLight:d,pushShadow:h,pushLightProbeGrid:p}}function bw(o){let t=new WeakMap;function i(c,f=0){const d=t.get(c);let h;return d===void 0?(h=new v_(o),t.set(c,[h])):f>=d.length?(h=new v_(o),d.push(h)):h=d[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tw=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],Aw=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],__=new hn,hl=new he,Qh=new he;function ww(o,t,i){let s=new J_;const c=new Wt,f=new Wt,d=new fn,h=new IE,p=new zE,m={},_=i.maxTextureSize,v={[Kr]:$n,[$n]:Kr,[La]:La},g=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const C=new hi;C.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new fa(C,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tu;let S=this.type;this.render=function(L,P,T){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||L.length===0)return;this.type===u1&&(dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tu);const F=o.getRenderTarget(),B=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),K=o.state;K.setBlending(Fa),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ae=S!==this.type;ae&&P.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(ie=>ie.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,ie=L.length;J<ie;J++){const Y=L[J],H=Y.shadow;if(H===void 0){dt("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;c.copy(H.mapSize);const j=H.getFrameExtents();c.multiply(j),f.copy(H.mapSize),(c.x>_||c.y>_)&&(c.x>_&&(f.x=Math.floor(_/j.x),c.x=f.x*j.x,H.mapSize.x=f.x),c.y>_&&(f.y=Math.floor(_/j.y),c.y=f.y*j.y,H.mapSize.y=f.y));const te=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||ae===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===pl){if(Y.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gi(c.x,c.y,{format:Jr,type:ua,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new El(c.x,c.y,sa),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Pa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln}else Y.isPointLight?(H.map=new sS(c.x),H.map.depthTexture=new UE(c.x,ca)):(H.map=new Gi(c.x,c.y),H.map.depthTexture=new El(c.x,c.y,ca)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Pa,this.type===Tu?(H.map.depthTexture.compareFunction=te?$p:Jp,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==c.x||H.map.height!==c.y)&&H.map.setSize(c.x,c.y);const oe=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,T);for(let me=0;me<oe;me++){const We=H.getCamera(me);if(Y.isPointLight){const je=H.camera,z=H.matrix,xe=Y.distance||je.far;xe!==je.far&&(je.far=xe,je.updateProjectionMatrix()),hl.setFromMatrixPosition(Y.matrixWorld),je.position.copy(hl),Qh.copy(je.position),Qh.add(Tw[me]),je.up.copy(Aw[me]),je.lookAt(Qh),je.updateMatrixWorld(),z.makeTranslation(-hl.x,-hl.y,-hl.z),__.multiplyMatrices(je.projectionMatrix,je.matrixWorldInverse),H._frustum.setFromProjectionMatrix(__,je.coordinateSystem,je.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,me),o.clear();else{me===0&&(o.setRenderTarget(H.map),o.clear());const je=H.getViewport(me);d.set(f.x*je.x,f.y*je.y,f.x*je.z,f.y*je.w),K.viewport(d)}s=H.getFrustum(me),R(P,T,We,Y,this.type)}H.isPointLightShadow!==!0&&this.type===pl&&O(H,T),H.needsUpdate=!1}S=this.type,b.needsUpdate=!1,o.setRenderTarget(F,B,V)};function O(L,P){const T=t.update(D);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null?L.mapPass=new Gi(c.x,c.y,{format:Jr,type:ua}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(P,null,T,g,D,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value.set(L.map.width,L.map.height),E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(P,null,T,E,D,null)}function W(L,P,T,F){let B=null;const V=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)B=V;else if(B=T.isPointLight===!0?p:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=B.uuid,ae=P.uuid;let J=m[K];J===void 0&&(J={},m[K]=J);let ie=J[ae];ie===void 0&&(ie=B.clone(),J[ae]=ie,P.addEventListener("dispose",U)),B=ie}if(B.visible=P.visible,B.wireframe=P.wireframe,F===pl?B.side=P.shadowSide!==null?P.shadowSide:P.side:B.side=P.shadowSide!==null?P.shadowSide:v[P.side],B.alphaMap=P.alphaMap,B.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,B.map=P.map,B.clipShadows=P.clipShadows,B.clippingPlanes=P.clippingPlanes,B.clipIntersection=P.clipIntersection,B.displacementMap=P.displacementMap,B.displacementScale=P.displacementScale,B.displacementBias=P.displacementBias,B.wireframeLinewidth=P.wireframeLinewidth,B.linewidth=P.linewidth,T.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const K=o.properties.get(B);K.light=T}return B}function R(L,P,T,F,B){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===pl)&&(!L.frustumCulled||L.intersectsFrustum(s))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const ae=t.update(L),J=L.material;if(Array.isArray(J)){const ie=ae.groups;for(let Y=0,H=ie.length;Y<H;Y++){const j=ie[Y],te=J[j.materialIndex];if(te&&te.visible){const oe=W(L,te,F,B);L.onBeforeShadow(o,L,P,T,ae,oe,j),o.renderBufferDirect(T,null,ae,oe,L,j),L.onAfterShadow(o,L,P,T,ae,oe,j)}}}else if(J.visible){const ie=W(L,J,F,B);L.onBeforeShadow(o,L,P,T,ae,ie,null),o.renderBufferDirect(T,null,ae,ie,L,null),L.onAfterShadow(o,L,P,T,ae,ie,null)}}const K=L.children;for(let ae=0,J=K.length;ae<J;ae++)R(K[ae],P,T,F,B)}function U(L){L.target.removeEventListener("dispose",U);for(const T in m){const F=m[T],B=L.target.uuid;B in F&&(F[B].dispose(),delete F[B])}}}function Cw(o,t){function i(){let q=!1;const Ue=new fn;let ye=null;const Oe=new fn(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!q&&(o.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){q=Ge},setClear:function(Ge,Ae,Qe,He,Ct){Ct===!0&&(Ge*=He,Ae*=He,Qe*=He),Ue.set(Ge,Ae,Qe,He),Oe.equals(Ue)===!1&&(o.clearColor(Ge,Ae,Qe,He),Oe.copy(Ue))},reset:function(){q=!1,ye=null,Oe.set(-1,0,0,0)}}}function s(){let q=!1,Ue=!1,ye=null,Oe=null,Ge=null;return{setReversed:function(Ae){if(Ue!==Ae){const Qe=t.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const He=Ge;Ge=null,this.setClear(He)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?pe(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!q&&(o.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(Ue&&(Ae=W1[Ae]),Oe!==Ae){switch(Ae){case Jh:o.depthFunc(o.NEVER);break;case $h:o.depthFunc(o.ALWAYS);break;case ep:o.depthFunc(o.LESS);break;case Sl:o.depthFunc(o.LEQUAL);break;case tp:o.depthFunc(o.EQUAL);break;case np:o.depthFunc(o.GEQUAL);break;case ip:o.depthFunc(o.GREATER);break;case ap:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Oe=Ae}},setLocked:function(Ae){q=Ae},setClear:function(Ae){Ge!==Ae&&(Ge=Ae,Ue&&(Ae=1-Ae),o.clearDepth(Ae))},reset:function(){q=!1,ye=null,Oe=null,Ge=null,Ue=!1}}}function c(){let q=!1,Ue=null,ye=null,Oe=null,Ge=null,Ae=null,Qe=null,He=null,Ct=null;return{setTest:function(ut){q||(ut?pe(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(ut){Ue!==ut&&!q&&(o.stencilMask(ut),Ue=ut)},setFunc:function(ut,zn,qn){(ye!==ut||Oe!==zn||Ge!==qn)&&(o.stencilFunc(ut,zn,qn),ye=ut,Oe=zn,Ge=qn)},setOp:function(ut,zn,qn){(Ae!==ut||Qe!==zn||He!==qn)&&(o.stencilOp(ut,zn,qn),Ae=ut,Qe=zn,He=qn)},setLocked:function(ut){q=ut},setClear:function(ut){Ct!==ut&&(o.clearStencil(ut),Ct=ut)},reset:function(){q=!1,Ue=null,ye=null,Oe=null,Ge=null,Ae=null,Qe=null,He=null,Ct=null}}}const f=new i,d=new s,h=new c,p=new WeakMap,m=new WeakMap;let _={},v={},g={},E=new WeakMap,C=[],D=null,b=!1,S=null,O=null,W=null,R=null,U=null,L=null,P=null,T=new At(0,0,0),F=0,B=!1,V=null,K=null,ae=null,J=null,ie=null;const Y=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,j=0;const te=o.getParameter(o.VERSION);te.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=j>=1):te.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=j>=2);let oe=null,me={};const We=o.getParameter(o.SCISSOR_BOX),je=o.getParameter(o.VIEWPORT),z=new fn().fromArray(We),xe=new fn().fromArray(je);function Re(q,Ue,ye,Oe){const Ge=new Uint8Array(4),Ae=o.createTexture();o.bindTexture(q,Ae),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Qe=0;Qe<ye;Qe++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ue,0,o.RGBA,1,1,Oe,0,o.RGBA,o.UNSIGNED_BYTE,Ge):o.texImage2D(Ue+Qe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ge);return Ae}const Z={};Z[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),h.setClear(0),pe(o.DEPTH_TEST),d.setFunc(Sl),it(!1),st(bv),pe(o.CULL_FACE),vt(Fa);function pe(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function we(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Pe(q,Ue){return g[q]!==Ue?(o.bindFramebuffer(q,Ue),g[q]=Ue,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ue),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Se(q,Ue){let ye=C,Oe=!1;if(q){ye=E.get(Ue),ye===void 0&&(ye=[],E.set(Ue,ye));const Ge=q.textures;if(ye.length!==Ge.length||ye[0]!==o.COLOR_ATTACHMENT0){for(let Ae=0,Qe=Ge.length;Ae<Qe;Ae++)ye[Ae]=o.COLOR_ATTACHMENT0+Ae;ye.length=Ge.length,Oe=!0}}else ye[0]!==o.BACK&&(ye[0]=o.BACK,Oe=!0);Oe&&o.drawBuffers(ye)}function De(q){return D!==q?(o.useProgram(q),D=q,!0):!1}const Vt={[eo]:o.FUNC_ADD,[d1]:o.FUNC_SUBTRACT,[h1]:o.FUNC_REVERSE_SUBTRACT};Vt[p1]=o.MIN,Vt[m1]=o.MAX;const xt={[g1]:o.ZERO,[x1]:o.ONE,[v1]:o.SRC_COLOR,[C_]:o.SRC_ALPHA,[E1]:o.SRC_ALPHA_SATURATE,[b1]:o.DST_COLOR,[S1]:o.DST_ALPHA,[_1]:o.ONE_MINUS_SRC_COLOR,[R_]:o.ONE_MINUS_SRC_ALPHA,[M1]:o.ONE_MINUS_DST_COLOR,[y1]:o.ONE_MINUS_DST_ALPHA,[T1]:o.CONSTANT_COLOR,[A1]:o.ONE_MINUS_CONSTANT_COLOR,[w1]:o.CONSTANT_ALPHA,[C1]:o.ONE_MINUS_CONSTANT_ALPHA};function vt(q,Ue,ye,Oe,Ge,Ae,Qe,He,Ct,ut){if(q===Fa){b===!0&&(we(o.BLEND),b=!1);return}if(b===!1&&(pe(o.BLEND),b=!0),q!==f1){if(q!==S||ut!==B){if((O!==eo||U!==eo)&&(o.blendEquation(o.FUNC_ADD),O=eo,U=eo),ut)switch(q){case gl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Du:o.blendFunc(o.ONE,o.ONE);break;case Mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ev:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Gt("WebGLState: Invalid blending: ",q);break}else switch(q){case gl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Du:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Mv:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ev:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",q);break}W=null,R=null,L=null,P=null,T.set(0,0,0),F=0,S=q,B=ut}return}Ge=Ge||Ue,Ae=Ae||ye,Qe=Qe||Oe,(Ue!==O||Ge!==U)&&(o.blendEquationSeparate(Vt[Ue],Vt[Ge]),O=Ue,U=Ge),(ye!==W||Oe!==R||Ae!==L||Qe!==P)&&(o.blendFuncSeparate(xt[ye],xt[Oe],xt[Ae],xt[Qe]),W=ye,R=Oe,L=Ae,P=Qe),(He.equals(T)===!1||Ct!==F)&&(o.blendColor(He.r,He.g,He.b,Ct),T.copy(He),F=Ct),S=q,B=!1}function yt(q,Ue){q.side===La?we(o.CULL_FACE):pe(o.CULL_FACE);let ye=q.side===$n;Ue&&(ye=!ye),it(ye),q.blending===gl&&q.transparent===!1?vt(Fa):vt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),f.setMask(q.colorWrite);const Oe=q.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(q.stencilWriteMask),h.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),h.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),tt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?pe(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function it(q){V!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),V=q)}function st(q){q!==l1?(pe(o.CULL_FACE),q!==K&&(q===bv?o.cullFace(o.BACK):q===c1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),K=q}function Ht(q){q!==ae&&(H&&o.lineWidth(q),ae=q)}function tt(q,Ue,ye){q?(pe(o.POLYGON_OFFSET_FILL),(J!==Ue||ie!==ye)&&(J=Ue,ie=ye,d.getReversed()&&(Ue=-Ue),o.polygonOffset(Ue,ye))):we(o.POLYGON_OFFSET_FILL)}function et(q){q?pe(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function ct(q){q===void 0&&(q=o.TEXTURE0+Y-1),oe!==q&&(o.activeTexture(q),oe=q)}function G(q,Ue,ye){ye===void 0&&(oe===null?ye=o.TEXTURE0+Y-1:ye=oe);let Oe=me[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},me[ye]=Oe),(Oe.type!==q||Oe.texture!==Ue)&&(oe!==ye&&(o.activeTexture(ye),oe=ye),o.bindTexture(q,Ue||Z[q]),Oe.type=q,Oe.texture=Ue)}function wt(){const q=me[oe];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(q){Gt("WebGLState:",q)}}function N(){try{o.compressedTexImage3D(...arguments)}catch(q){Gt("WebGLState:",q)}}function M(){try{o.texSubImage2D(...arguments)}catch(q){Gt("WebGLState:",q)}}function $(){try{o.texSubImage3D(...arguments)}catch(q){Gt("WebGLState:",q)}}function re(){try{o.compressedTexSubImage2D(...arguments)}catch(q){Gt("WebGLState:",q)}}function ge(){try{o.compressedTexSubImage3D(...arguments)}catch(q){Gt("WebGLState:",q)}}function Ce(){try{o.texStorage2D(...arguments)}catch(q){Gt("WebGLState:",q)}}function Le(){try{o.texStorage3D(...arguments)}catch(q){Gt("WebGLState:",q)}}function ve(){try{o.texImage2D(...arguments)}catch(q){Gt("WebGLState:",q)}}function _e(){try{o.texImage3D(...arguments)}catch(q){Gt("WebGLState:",q)}}function Te(q){return v[q]!==void 0?v[q]:o.getParameter(q)}function ze(q,Ue){v[q]!==Ue&&(o.pixelStorei(q,Ue),v[q]=Ue)}function Ee(q){z.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),z.copy(q))}function Ne(q){xe.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),xe.copy(q))}function Ie(q,Ue){let ye=m.get(Ue);ye===void 0&&(ye=new WeakMap,m.set(Ue,ye));let Oe=ye.get(q);Oe===void 0&&(Oe=o.getUniformBlockIndex(Ue,q.name),ye.set(q,Oe))}function nt(q,Ue){const Oe=m.get(Ue).get(q);p.get(Ue)!==Oe&&(o.uniformBlockBinding(Ue,Oe,q.__bindingPointIndex),p.set(Ue,Oe))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},oe=null,me={},g={},E=new WeakMap,C=[],D=null,b=!1,S=null,O=null,W=null,R=null,U=null,L=null,P=null,T=new At(0,0,0),F=0,B=!1,V=null,K=null,ae=null,J=null,ie=null,z.set(0,0,o.canvas.width,o.canvas.height),xe.set(0,0,o.canvas.width,o.canvas.height),f.reset(),d.reset(),h.reset()}return{buffers:{color:f,depth:d,stencil:h},enable:pe,disable:we,bindFramebuffer:Pe,drawBuffers:Se,useProgram:De,setBlending:vt,setMaterial:yt,setFlipSided:it,setCullFace:st,setLineWidth:Ht,setPolygonOffset:tt,setScissorTest:et,activeTexture:ct,bindTexture:G,unbindTexture:wt,compressedTexImage2D:ht,compressedTexImage3D:N,texImage2D:ve,texImage3D:_e,pixelStorei:ze,getParameter:Te,updateUBOMapping:Ie,uniformBlockBinding:nt,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:M,texSubImage3D:$,compressedTexSubImage2D:re,compressedTexSubImage3D:ge,scissor:Ee,viewport:Ne,reset:ot}}function Rw(o,t,i,s,c,f,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Wt,_=new WeakMap,v=new Set;let g;const E=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function D(N,M){return C?new OffscreenCanvas(N,M):Pu("canvas")}function b(N,M,$){let re=1;const ge=ht(N);if((ge.width>$||ge.height>$)&&(re=$/Math.max(ge.width,ge.height)),re<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ce=Math.floor(re*ge.width),Le=Math.floor(re*ge.height);g===void 0&&(g=D(Ce,Le));const ve=M?D(Ce,Le):g;return ve.width=Ce,ve.height=Le,ve.getContext("2d").drawImage(N,0,0,Ce,Le),dt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ce+"x"+Le+")."),ve}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function S(N){return N.generateMipmaps}function O(N){o.generateMipmap(N)}function W(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(N,M,$,re,ge,Ce=!1){if(N!==null){if(o[N]!==void 0)return o[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Le;re&&(Le=t.get("EXT_texture_norm16"),Le||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=M;if(M===o.RED&&($===o.FLOAT&&(ve=o.R32F),$===o.HALF_FLOAT&&(ve=o.R16F),$===o.UNSIGNED_BYTE&&(ve=o.R8),$===o.UNSIGNED_SHORT&&Le&&(ve=Le.R16_EXT),$===o.SHORT&&Le&&(ve=Le.R16_SNORM_EXT)),M===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ve=o.R8UI),$===o.UNSIGNED_SHORT&&(ve=o.R16UI),$===o.UNSIGNED_INT&&(ve=o.R32UI),$===o.BYTE&&(ve=o.R8I),$===o.SHORT&&(ve=o.R16I),$===o.INT&&(ve=o.R32I)),M===o.RG&&($===o.FLOAT&&(ve=o.RG32F),$===o.HALF_FLOAT&&(ve=o.RG16F),$===o.UNSIGNED_BYTE&&(ve=o.RG8),$===o.UNSIGNED_SHORT&&Le&&(ve=Le.RG16_EXT),$===o.SHORT&&Le&&(ve=Le.RG16_SNORM_EXT)),M===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ve=o.RG8UI),$===o.UNSIGNED_SHORT&&(ve=o.RG16UI),$===o.UNSIGNED_INT&&(ve=o.RG32UI),$===o.BYTE&&(ve=o.RG8I),$===o.SHORT&&(ve=o.RG16I),$===o.INT&&(ve=o.RG32I)),M===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ve=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ve=o.RGB16UI),$===o.UNSIGNED_INT&&(ve=o.RGB32UI),$===o.BYTE&&(ve=o.RGB8I),$===o.SHORT&&(ve=o.RGB16I),$===o.INT&&(ve=o.RGB32I)),M===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ve=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ve=o.RGBA16UI),$===o.UNSIGNED_INT&&(ve=o.RGBA32UI),$===o.BYTE&&(ve=o.RGBA8I),$===o.SHORT&&(ve=o.RGBA16I),$===o.INT&&(ve=o.RGBA32I)),M===o.RGB&&($===o.UNSIGNED_SHORT&&Le&&(ve=Le.RGB16_EXT),$===o.SHORT&&Le&&(ve=Le.RGB16_SNORM_EXT),$===o.UNSIGNED_INT_5_9_9_9_REV&&(ve=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(ve=o.R11F_G11F_B10F)),M===o.RGBA){const _e=Ce?Fu:Pt.getTransfer(ge);$===o.FLOAT&&(ve=o.RGBA32F),$===o.HALF_FLOAT&&(ve=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ve=_e===Qt?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT&&Le&&(ve=Le.RGBA16_EXT),$===o.SHORT&&Le&&(ve=Le.RGBA16_SNORM_EXT),$===o.UNSIGNED_SHORT_4_4_4_4&&(ve=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ve=o.RGB5_A1)}return(ve===o.R16F||ve===o.R32F||ve===o.RG16F||ve===o.RG32F||ve===o.RGBA16F||ve===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ve}function U(N,M){let $;return N?M===null||M===ca||M===bl?$=o.DEPTH24_STENCIL8:M===sa?$=o.DEPTH32F_STENCIL8:M===yl&&($=o.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ca||M===bl?$=o.DEPTH_COMPONENT24:M===sa?$=o.DEPTH_COMPONENT32F:M===yl&&($=o.DEPTH_COMPONENT16),$}function L(N,M){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ln&&N.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?M.mipmaps.length:1}function P(N){const M=N.target;M.removeEventListener("dispose",P),F(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&v.delete(M)}function T(N){const M=N.target;M.removeEventListener("dispose",T),V(M)}function F(N){const M=s.get(N);if(M.__webglInit===void 0)return;const $=N.source,re=E.get($);if(re){const ge=re[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&B(N),Object.keys(re).length===0&&E.delete($)}s.remove(N)}function B(N){const M=s.get(N);o.deleteTexture(M.__webglTexture);const $=N.source,re=E.get($);delete re[M.__cacheKey],d.memory.textures--}function V(N){const M=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let ge=0;ge<M.__webglFramebuffer[re].length;ge++)o.deleteFramebuffer(M.__webglFramebuffer[re][ge]);else o.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)o.deleteFramebuffer(M.__webglFramebuffer[re]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const $=N.textures;for(let re=0,ge=$.length;re<ge;re++){const Ce=s.get($[re]);Ce.__webglTexture&&(o.deleteTexture(Ce.__webglTexture),d.memory.textures--),s.remove($[re])}s.remove(N)}let K=0;function ae(){K=0}function J(){return K}function ie(N){K=N}function Y(){const N=K;return N>=c.maxTextures&&dt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+c.maxTextures),K+=1,N}function H(N){const M=[];return M.push(N.wrapS),M.push(N.wrapT),M.push(N.wrapR||0),M.push(N.magFilter),M.push(N.minFilter),M.push(N.anisotropy),M.push(N.internalFormat),M.push(N.format),M.push(N.type),M.push(N.generateMipmaps),M.push(N.premultiplyAlpha),M.push(N.flipY),M.push(N.unpackAlignment),M.push(N.colorSpace),M.join()}function j(N,M){const $=s.get(N);if(N.isVideoTexture&&G(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const re=N.image;if(re===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{we($,N,M);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+M)}function te(N,M){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){we($,N,M);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+M)}function oe(N,M){const $=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){we($,N,M);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+M)}function me(N,M){const $=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&$.__version!==N.version){Pe($,N,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+M)}const We={[rp]:o.REPEAT,[Oa]:o.CLAMP_TO_EDGE,[sp]:o.MIRRORED_REPEAT},je={[Ln]:o.NEAREST,[D1]:o.NEAREST_MIPMAP_NEAREST,[Jc]:o.NEAREST_MIPMAP_LINEAR,[Pn]:o.LINEAR,[Eh]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},z={[F1]:o.NEVER,[H1]:o.ALWAYS,[B1]:o.LESS,[Jp]:o.LEQUAL,[P1]:o.EQUAL,[$p]:o.GEQUAL,[I1]:o.GREATER,[z1]:o.NOTEQUAL};function xe(N,M){if(M.type===sa&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===Eh||M.magFilter===Jc||M.magFilter===qr||M.minFilter===Pn||M.minFilter===Eh||M.minFilter===Jc||M.minFilter===qr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,We[M.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,We[M.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,We[M.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,je[M.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,je[M.minFilter]),M.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,z[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==Jc&&M.minFilter!==qr||M.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,c.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function Re(N,M){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,M.addEventListener("dispose",P));const re=M.source;let ge=E.get(re);ge===void 0&&(ge={},E.set(re,ge));const Ce=H(M);if(Ce!==N.__cacheKey){ge[Ce]===void 0&&(ge[Ce]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),ge[Ce].usedTimes++;const Le=ge[N.__cacheKey];Le!==void 0&&(ge[N.__cacheKey].usedTimes--,Le.usedTimes===0&&B(M)),N.__cacheKey=Ce,N.__webglTexture=ge[Ce].texture}return $}function Z(N,M,$){return Math.floor(Math.floor(N/$)/M)}function pe(N,M,$,re){const Ce=N.updateRanges;if(Ce.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,$,re,M.data);else{Ce.sort((ze,Ee)=>ze.start-Ee.start);let Le=0;for(let ze=1;ze<Ce.length;ze++){const Ee=Ce[Le],Ne=Ce[ze],Ie=Ee.start+Ee.count,nt=Z(Ne.start,M.width,4),ot=Z(Ee.start,M.width,4);Ne.start<=Ie+1&&nt===ot&&Z(Ne.start+Ne.count-1,M.width,4)===nt?Ee.count=Math.max(Ee.count,Ne.start+Ne.count-Ee.start):(++Le,Ce[Le]=Ne)}Ce.length=Le+1;const ve=i.getParameter(o.UNPACK_ROW_LENGTH),_e=i.getParameter(o.UNPACK_SKIP_PIXELS),Te=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let ze=0,Ee=Ce.length;ze<Ee;ze++){const Ne=Ce[ze],Ie=Math.floor(Ne.start/4),nt=Math.ceil(Ne.count/4),ot=Ie%M.width,q=Math.floor(Ie/M.width),Ue=nt,ye=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ot,q,Ue,ye,$,re,M.data)}N.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ve),i.pixelStorei(o.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(o.UNPACK_SKIP_ROWS,Te)}}function we(N,M,$){let re=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=o.TEXTURE_3D);const ge=Re(N,M),Ce=M.source;i.bindTexture(re,N.__webglTexture,o.TEXTURE0+$);const Le=s.get(Ce);if(Ce.version!==Le.__version||ge===!0){if(i.activeTexture(o.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ye=Pt.getPrimaries(Pt.workingColorSpace),Oe=M.colorSpace===_r?null:Pt.getPrimaries(M.colorSpace),Ge=M.colorSpace===_r||ye===Oe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=b(M.image,!1,c.maxTextureSize);_e=wt(M,_e);const Te=f.convert(M.format,M.colorSpace),ze=f.convert(M.type);let Ee=R(M.internalFormat,Te,ze,M.normalized,M.colorSpace,M.isVideoTexture);xe(re,M);let Ne;const Ie=M.mipmaps,nt=M.isVideoTexture!==!0,ot=Le.__version===void 0||ge===!0,q=Ce.dataReady,Ue=L(M,_e);if(M.isDepthTexture)Ee=U(M.format===Yr,M.type),ot&&(nt?i.texStorage2D(o.TEXTURE_2D,1,Ee,_e.width,_e.height):i.texImage2D(o.TEXTURE_2D,0,Ee,_e.width,_e.height,0,Te,ze,null));else if(M.isDataTexture)if(Ie.length>0){nt&&ot&&i.texStorage2D(o.TEXTURE_2D,Ue,Ee,Ie[0].width,Ie[0].height);for(let ye=0,Oe=Ie.length;ye<Oe;ye++)Ne=Ie[ye],nt?q&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Te,ze,Ne.data):i.texImage2D(o.TEXTURE_2D,ye,Ee,Ne.width,Ne.height,0,Te,ze,Ne.data);M.generateMipmaps=!1}else nt?(ot&&i.texStorage2D(o.TEXTURE_2D,Ue,Ee,_e.width,_e.height),q&&pe(M,_e,Te,ze)):i.texImage2D(o.TEXTURE_2D,0,Ee,_e.width,_e.height,0,Te,ze,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ee,Ie[0].width,Ie[0].height,_e.depth);for(let ye=0,Oe=Ie.length;ye<Oe;ye++)if(Ne=Ie[ye],M.format!==Hi)if(Te!==null)if(nt){if(q)if(M.layerUpdates.size>0){const Ge=Qv(Ne.width,Ne.height,M.format,M.type);for(const Ae of M.layerUpdates){const Qe=Ne.data.subarray(Ae*Ge/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ge/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,Ae,Ne.width,Ne.height,1,Te,Qe)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,_e.depth,Te,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Ee,Ne.width,Ne.height,_e.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?q&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,_e.depth,Te,ze,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Ee,Ne.width,Ne.height,_e.depth,0,Te,ze,Ne.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&ot&&i.texStorage2D(o.TEXTURE_2D,Ue,Ee,Ie[0].width,Ie[0].height);for(let ye=0,Oe=Ie.length;ye<Oe;ye++)Ne=Ie[ye],M.format!==Hi?Te!==null?nt?q&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Te,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Ee,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?q&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Te,ze,Ne.data):i.texImage2D(o.TEXTURE_2D,ye,Ee,Ne.width,Ne.height,0,Te,ze,Ne.data)}else if(M.isDataArrayTexture)if(nt){if(ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ue,Ee,_e.width,_e.height,_e.depth),q)if(M.layerUpdates.size>0){const ye=Qv(_e.width,_e.height,M.format,M.type);for(const Oe of M.layerUpdates){const Ge=_e.data.subarray(Oe*ye/_e.data.BYTES_PER_ELEMENT,(Oe+1)*ye/_e.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Oe,_e.width,_e.height,1,Te,ze,Ge)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,ze,_e.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ee,_e.width,_e.height,_e.depth,0,Te,ze,_e.data);else if(M.isData3DTexture)nt?(ot&&i.texStorage3D(o.TEXTURE_3D,Ue,Ee,_e.width,_e.height,_e.depth),q&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,ze,_e.data)):i.texImage3D(o.TEXTURE_3D,0,Ee,_e.width,_e.height,_e.depth,0,Te,ze,_e.data);else if(M.isFramebufferTexture){if(ot)if(nt)i.texStorage2D(o.TEXTURE_2D,Ue,Ee,_e.width,_e.height);else{let ye=_e.width,Oe=_e.height;for(let Ge=0;Ge<Ue;Ge++)i.texImage2D(o.TEXTURE_2D,Ge,Ee,ye,Oe,0,Te,ze,null),ye>>=1,Oe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const ye=o.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),_e.parentNode!==ye){ye.appendChild(_e),v.add(M),ye.onpaint=Oe=>{const Ge=Oe.changedElements;for(const Ae of v)Ge.includes(Ae.image)&&(Ae.needsUpdate=!0)},ye.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,_e);else{const Ge=o.RGBA,Ae=o.RGBA,Qe=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Ge,Ae,Qe,_e)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(nt&&ot){const ye=ht(Ie[0]);i.texStorage2D(o.TEXTURE_2D,Ue,Ee,ye.width,ye.height)}for(let ye=0,Oe=Ie.length;ye<Oe;ye++)Ne=Ie[ye],nt?q&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Te,ze,Ne):i.texImage2D(o.TEXTURE_2D,ye,Ee,Te,ze,Ne);M.generateMipmaps=!1}else if(nt){if(ot){const ye=ht(_e);i.texStorage2D(o.TEXTURE_2D,Ue,Ee,ye.width,ye.height)}q&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,ze,_e)}else i.texImage2D(o.TEXTURE_2D,0,Ee,Te,ze,_e);S(M)&&O(re),Le.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Pe(N,M,$){if(M.image.length!==6)return;const re=Re(N,M),ge=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+$);const Ce=s.get(ge);if(ge.version!==Ce.__version||re===!0){i.activeTexture(o.TEXTURE0+$);const Le=Pt.getPrimaries(Pt.workingColorSpace),ve=M.colorSpace===_r?null:Pt.getPrimaries(M.colorSpace),_e=M.colorSpace===_r||Le===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let Ae=0;Ae<6;Ae++)!Te&&!ze?Ee[Ae]=b(M.image[Ae],!0,c.maxCubemapSize):Ee[Ae]=ze?M.image[Ae].image:M.image[Ae],Ee[Ae]=wt(M,Ee[Ae]);const Ne=Ee[0],Ie=f.convert(M.format,M.colorSpace),nt=f.convert(M.type),ot=R(M.internalFormat,Ie,nt,M.normalized,M.colorSpace),q=M.isVideoTexture!==!0,Ue=Ce.__version===void 0||re===!0,ye=ge.dataReady;let Oe=L(M,Ne);xe(o.TEXTURE_CUBE_MAP,M);let Ge;if(Te){q&&Ue&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ot,Ne.width,Ne.height);for(let Ae=0;Ae<6;Ae++){Ge=Ee[Ae].mipmaps;for(let Qe=0;Qe<Ge.length;Qe++){const He=Ge[Qe];M.format!==Hi?Ie!==null?q?ye&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,He.width,He.height,Ie,He.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,ot,He.width,He.height,0,He.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ye&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,He.width,He.height,Ie,nt,He.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,ot,He.width,He.height,0,Ie,nt,He.data)}}}else{if(Ge=M.mipmaps,q&&Ue){Ge.length>0&&Oe++;const Ae=ht(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Oe,ot,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ze){q?ye&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ee[Ae].width,Ee[Ae].height,Ie,nt,Ee[Ae].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ot,Ee[Ae].width,Ee[Ae].height,0,Ie,nt,Ee[Ae].data);for(let Qe=0;Qe<Ge.length;Qe++){const Ct=Ge[Qe].image[Ae].image;q?ye&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,Ct.width,Ct.height,Ie,nt,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,ot,Ct.width,Ct.height,0,Ie,nt,Ct.data)}}else{q?ye&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ie,nt,Ee[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ot,Ie,nt,Ee[Ae]);for(let Qe=0;Qe<Ge.length;Qe++){const He=Ge[Qe];q?ye&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,Ie,nt,He.image[Ae]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,ot,Ie,nt,He.image[Ae])}}}S(M)&&O(o.TEXTURE_CUBE_MAP),Ce.__version=ge.version,M.onUpdate&&M.onUpdate(M)}N.__version=M.version}function Se(N,M,$,re,ge,Ce){const Le=f.convert($.format,$.colorSpace),ve=f.convert($.type),_e=R($.internalFormat,Le,ve,$.normalized,$.colorSpace),Te=s.get(M),ze=s.get($);if(ze.__renderTarget=M,!Te.__hasExternalTextures){const Ee=Math.max(1,M.width>>Ce),Ne=Math.max(1,M.height>>Ce);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?i.texImage3D(ge,Ce,_e,Ee,Ne,M.depth,0,Le,ve,null):i.texImage2D(ge,Ce,_e,Ee,Ne,0,Le,ve,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),ct(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,re,ge,ze.__webglTexture,0,et(M)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,re,ge,ze.__webglTexture,Ce),i.bindFramebuffer(o.FRAMEBUFFER,null)}function De(N,M,$){if(o.bindRenderbuffer(o.RENDERBUFFER,N),M.depthBuffer){const re=M.depthTexture,ge=re&&re.isDepthTexture?re.type:null,Ce=U(M.stencilBuffer,ge),Le=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ct(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,et(M),Ce,M.width,M.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,et(M),Ce,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Le,o.RENDERBUFFER,N)}else{const re=M.textures;for(let ge=0;ge<re.length;ge++){const Ce=re[ge],Le=f.convert(Ce.format,Ce.colorSpace),ve=f.convert(Ce.type),_e=R(Ce.internalFormat,Le,ve,Ce.normalized,Ce.colorSpace);ct(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,et(M),_e,M.width,M.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,et(M),_e,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,_e,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Vt(N,M,$){const re=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=s.get(M.depthTexture);if(ge.__renderTarget=M,(!ge.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),xe(o.TEXTURE_CUBE_MAP,M.depthTexture);const Te=f.convert(M.depthTexture.format),ze=f.convert(M.depthTexture.type);let Ee;M.depthTexture.format===Pa?Ee=o.DEPTH_COMPONENT24:M.depthTexture.format===Yr&&(Ee=o.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ee,M.width,M.height,0,Te,ze,null)}}else j(M.depthTexture,0);const Ce=ge.__webglTexture,Le=et(M),ve=re?o.TEXTURE_CUBE_MAP_POSITIVE_X+$:o.TEXTURE_2D,_e=M.depthTexture.format===Yr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Pa)ct(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,ve,Ce,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,_e,ve,Ce,0);else if(M.depthTexture.format===Yr)ct(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,ve,Ce,0,Le):o.framebufferTexture2D(o.FRAMEBUFFER,_e,ve,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(N){const M=s.get(N),$=N.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==N.depthTexture){const re=N.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener("dispose",ge)};re.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=re}if(N.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let re=0;re<6;re++)Vt(M.__webglFramebuffer[re],N,re);else{const re=N.texture.mipmaps;re&&re.length>0?Vt(M.__webglFramebuffer[0],N,0):Vt(M.__webglFramebuffer,N,0)}else if($){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=o.createRenderbuffer(),De(M.__webglDepthbuffer[re],N,!1);else{const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[re];o.bindRenderbuffer(o.RENDERBUFFER,Ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ce)}}else{const re=N.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),De(M.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ce),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,Ce)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function vt(N,M,$){const re=s.get(N);M!==void 0&&Se(re.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&xt(N)}function yt(N){const M=N.texture,$=s.get(N),re=s.get(M);N.addEventListener("dispose",T);const ge=N.textures,Ce=N.isWebGLCubeRenderTarget===!0,Le=ge.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=o.createTexture()),re.__version=M.version,d.memory.textures++),Ce){$.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer[ve]=[];for(let _e=0;_e<M.mipmaps.length;_e++)$.__webglFramebuffer[ve][_e]=o.createFramebuffer()}else $.__webglFramebuffer[ve]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){$.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)$.__webglFramebuffer[ve]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Le)for(let ve=0,_e=ge.length;ve<_e;ve++){const Te=s.get(ge[ve]);Te.__webglTexture===void 0&&(Te.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&ct(N)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ve=0;ve<ge.length;ve++){const _e=ge[ve];$.__webglColorRenderbuffer[ve]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[ve]);const Te=f.convert(_e.format,_e.colorSpace),ze=f.convert(_e.type),Ee=R(_e.internalFormat,Te,ze,_e.normalized,_e.colorSpace,N.isXRRenderTarget===!0),Ne=et(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ne,Ee,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,$.__webglColorRenderbuffer[ve])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),De($.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture),xe(o.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se($.__webglFramebuffer[ve][_e],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,_e);else Se($.__webglFramebuffer[ve],N,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(M)&&O(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ve=0,_e=ge.length;ve<_e;ve++){const Te=ge[ve],ze=s.get(Te);let Ee=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ee=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,ze.__webglTexture),xe(Ee,Te),Se($.__webglFramebuffer,N,Te,o.COLOR_ATTACHMENT0+ve,Ee,0),S(Te)&&O(Ee)}i.unbindTexture()}else{let ve=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ve,re.__webglTexture),xe(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Se($.__webglFramebuffer[_e],N,M,o.COLOR_ATTACHMENT0,ve,_e);else Se($.__webglFramebuffer,N,M,o.COLOR_ATTACHMENT0,ve,0);S(M)&&O(ve),i.unbindTexture()}N.depthBuffer&&xt(N)}function it(N){const M=N.textures;for(let $=0,re=M.length;$<re;$++){const ge=M[$];if(S(ge)){const Ce=W(N),Le=s.get(ge).__webglTexture;i.bindTexture(Ce,Le),O(Ce),i.unbindTexture()}}}const st=[],Ht=[];function tt(N){if(N.samples>0){if(ct(N)===!1){const M=N.textures,$=N.width,re=N.height;let ge=o.COLOR_BUFFER_BIT;const Ce=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=s.get(N),ve=M.length>1;if(ve)for(let Te=0;Te<M.length;Te++)i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const _e=N.texture.mipmaps;_e&&_e.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),ve){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const ze=s.get(M[Te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ze,0)}o.blitFramebuffer(0,0,$,re,0,0,$,re,ge,o.NEAREST),p===!0&&(st.length=0,Ht.length=0,st.push(o.COLOR_ATTACHMENT0+Te),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(st.push(Ce),Ht.push(Ce),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,st))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ve)for(let Te=0;Te<M.length;Te++){i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,Le.__webglColorRenderbuffer[Te]);const ze=s.get(M[Te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,ze,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&p){const M=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function et(N){return Math.min(c.maxSamples,N.samples)}function ct(N){const M=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(N){const M=d.render.frame;_.get(N)!==M&&(_.set(N,M),N.update())}function wt(N,M){const $=N.colorSpace,re=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Ou&&$!==_r&&(Pt.getTransfer($)===Qt?(re!==Hi||ge!==wi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",$)),M}function ht(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=Y,this.resetTextureUnits=ae,this.getTextureUnits=J,this.setTextureUnits=ie,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=oe,this.setTextureCube=me,this.rebindTextures=vt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Nw(o,t){function i(s,c=_r){let f;const d=Pt.getTransfer(c);if(s===wi)return o.UNSIGNED_BYTE;if(s===qp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Yp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===H_)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===G_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===I_)return o.BYTE;if(s===z_)return o.SHORT;if(s===yl)return o.UNSIGNED_SHORT;if(s===jp)return o.INT;if(s===ca)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===ua)return o.HALF_FLOAT;if(s===V_)return o.ALPHA;if(s===k_)return o.RGB;if(s===Hi)return o.RGBA;if(s===Pa)return o.DEPTH_COMPONENT;if(s===Yr)return o.DEPTH_STENCIL;if(s===X_)return o.RED;if(s===Zp)return o.RED_INTEGER;if(s===Jr)return o.RG;if(s===Kp)return o.RG_INTEGER;if(s===Qp)return o.RGBA_INTEGER;if(s===Au||s===wu||s===Cu||s===Ru)if(d===Qt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Au)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ru)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Au)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ru)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===op||s===lp||s===cp||s===up)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===op)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===up)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fp||s===dp||s===hp||s===pp||s===mp||s===Uu||s===gp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===fp||s===dp)return d===Qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===hp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===pp)return f.COMPRESSED_R11_EAC;if(s===mp)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Uu)return f.COMPRESSED_RG11_EAC;if(s===gp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xp||s===vp||s===_p||s===Sp||s===yp||s===bp||s===Mp||s===Ep||s===Tp||s===Ap||s===wp||s===Cp||s===Rp||s===Np)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===xp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_p)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ap)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Np)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dp||s===Up||s===Lp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Dp)return d===Qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Lp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Op||s===Fp||s===Lu||s===Bp)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Op)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Fp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new eS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new da({vertexShader:Dw,fragmentShader:Uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Vu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends es{constructor(t,i){super();const s=this;let c=null,f=1,d=null,h="local-floor",p=1,m=null,_=null,v=null,g=null,E=null,C=null;const D=typeof XRWebGLBinding<"u",b=new Lw,S={},O=i.getContextAttributes();let W=null,R=null;const U=[],L=[],P=new Wt;let T=null,F=null;const B=new Ai;B.viewport=new fn;const V=new Ai;V.viewport=new fn;const K=[B,V],ae=new GE;let J=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=U[Z];return pe===void 0&&(pe=new Dh,U[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=U[Z];return pe===void 0&&(pe=new Dh,U[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=U[Z];return pe===void 0&&(pe=new Dh,U[Z]=pe),pe.getHandSpace()};function Y(Z){const pe=L.indexOf(Z.inputSource);if(pe===-1)return;const we=U[pe];we!==void 0&&(we.update(Z.inputSource,Z.frame,m||d),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){c.removeEventListener("select",Y),c.removeEventListener("selectstart",Y),c.removeEventListener("selectend",Y),c.removeEventListener("squeeze",Y),c.removeEventListener("squeezestart",Y),c.removeEventListener("squeezeend",Y),c.removeEventListener("end",H),c.removeEventListener("inputsourceschange",j);for(let Z=0;Z<U.length;Z++){const pe=L[Z];pe!==null&&(L[Z]=null,U[Z].disconnect(pe))}J=null,ie=null,b.reset();for(const Z in S)delete S[Z];if(t.setRenderTarget(W),E=null,g=null,v=null,c=null,R=null,Re.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),F!==null){const Z=F.camera;Z.fov=F.fov,Z.zoom=F.zoom,Z.updateProjectionMatrix(),F=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){f=Z,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return v===null&&D&&(v=new XRWebGLBinding(c,i)),v},this.getFrame=function(){return C},this.getSession=function(){return c},this.setSession=async function(Z){if(c=Z,c!==null){if(W=t.getRenderTarget(),c.addEventListener("select",Y),c.addEventListener("selectstart",Y),c.addEventListener("selectend",Y),c.addEventListener("squeeze",Y),c.addEventListener("squeezestart",Y),c.addEventListener("squeezeend",Y),c.addEventListener("end",H),c.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Pe=null,Se=null;O.depth&&(Se=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=O.stencil?Yr:Pa,Pe=O.stencil?bl:ca);const De={colorFormat:i.RGBA8,depthFormat:Se,scaleFactor:f};v=this.getBinding(),g=v.createProjectionLayer(De),c.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Gi(g.textureWidth,g.textureHeight,{format:Hi,type:wi,depthTexture:new El(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const we={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(c,i,we),c.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new Gi(E.framebufferWidth,E.framebufferHeight,{format:Hi,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await c.requestReferenceSpace(h),Re.setContext(c),Re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(Z){for(let pe=0;pe<Z.removed.length;pe++){const we=Z.removed[pe],Pe=L.indexOf(we);Pe>=0&&(L[Pe]=null,U[Pe].disconnect(we))}for(let pe=0;pe<Z.added.length;pe++){const we=Z.added[pe];let Pe=L.indexOf(we);if(Pe===-1){for(let De=0;De<U.length;De++)if(De>=L.length){L.push(we),Pe=De;break}else if(L[De]===null){L[De]=we,Pe=De;break}if(Pe===-1)break}const Se=U[Pe];Se&&Se.connect(we)}}const te=new he,oe=new he;function me(Z,pe,we){te.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(we.matrixWorld);const Pe=te.distanceTo(oe),Se=pe.projectionMatrix.elements,De=we.projectionMatrix.elements,Vt=Se[14]/(Se[10]-1),xt=Se[14]/(Se[10]+1),vt=(Se[9]+1)/Se[5],yt=(Se[9]-1)/Se[5],it=(Se[8]-1)/Se[0],st=(De[8]+1)/De[0],Ht=Vt*it,tt=Vt*st,et=Pe/(-it+st),ct=et*-it;if(pe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ct),Z.translateZ(et),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Se[10]===-1)Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const G=Vt+et,wt=xt+et,ht=Ht-ct,N=tt+(Pe-ct),M=vt*xt/wt*G,$=yt*xt/wt*G;Z.projectionMatrix.makePerspective(ht,N,M,$,G,wt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function We(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(c===null)return;let pe=Z.near,we=Z.far;b.texture!==null&&(b.depthNear>0&&(pe=b.depthNear),b.depthFar>0&&(we=b.depthFar)),ae.near=V.near=B.near=pe,ae.far=V.far=B.far=we,(J!==ae.near||ie!==ae.far)&&(c.updateRenderState({depthNear:ae.near,depthFar:ae.far}),J=ae.near,ie=ae.far),ae.layers.mask=Z.layers.mask|6,B.layers.mask=ae.layers.mask&-5,V.layers.mask=ae.layers.mask&-3;const Pe=Z.parent,Se=ae.cameras;We(ae,Pe);for(let De=0;De<Se.length;De++)We(Se[De],Pe);Se.length===2?me(ae,B,V):ae.projectionMatrix.copy(B.projectionMatrix),F===null&&Z.isPerspectiveCamera&&(F={camera:Z,fov:Z.fov,zoom:Z.zoom}),je(Z,ae,Pe)};function je(Z,pe,we){we===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ml*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(g===null&&E===null))return p},this.setFoveation=function(Z){p=Z,g!==null&&(g.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ae)},this.getCameraTexture=function(Z){return S[Z]};let z=null;function xe(Z,pe){if(_=pe.getViewerPose(m||d),C=pe,_!==null){const we=_.views;E!==null&&(t.setRenderTargetFramebuffer(R,E.framebuffer),t.setRenderTarget(R));let Pe=!1;we.length!==ae.cameras.length&&(ae.cameras.length=0,Pe=!0);for(let xt=0;xt<we.length;xt++){const vt=we[xt];let yt=null;if(E!==null)yt=E.getViewport(vt);else{const st=v.getViewSubImage(g,vt);yt=st.viewport,xt===0&&(t.setRenderTargetTextures(R,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(R))}let it=K[xt];it===void 0&&(it=new Ai,it.layers.enable(xt),it.viewport=new fn,K[xt]=it),it.matrix.fromArray(vt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(vt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(yt.x,yt.y,yt.width,yt.height),xt===0&&(ae.matrix.copy(it.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Pe===!0&&ae.cameras.push(it)}const Se=c.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&D){v=s.getBinding();const xt=v.getDepthInformation(we[0]);xt&&xt.isValid&&xt.texture&&b.init(xt,c.renderState)}if(Se&&Se.includes("camera-access")&&D){t.state.unbindTexture(),v=s.getBinding();for(let xt=0;xt<we.length;xt++){const vt=we[xt].camera;if(vt){let yt=S[vt];yt||(yt=new eS,S[vt]=yt);const it=v.getCameraImage(vt);yt.sourceTexture=it}}}}for(let we=0;we<U.length;we++){const Pe=L[we],Se=U[we];Pe!==null&&Se!==void 0&&Se.update(Pe,pe,m||d)}z&&z(Z,pe),pe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:pe}),C=null}const Re=new aS;Re.setAnimationLoop(xe),this.setAnimationLoop=function(Z){z=Z},this.dispose=function(){}}}const Fw=new hn,fS=new gt;fS.set(-1,0,0,0,1,0,0,0,1);function Bw(o,t){function i(b,S){b.matrixAutoUpdate===!0&&b.updateMatrix(),S.value.copy(b.matrix)}function s(b,S){S.color.getRGB(b.fogColor.value,tS(o)),S.isFog?(b.fogNear.value=S.near,b.fogFar.value=S.far):S.isFogExp2&&(b.fogDensity.value=S.density)}function c(b,S,O,W,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?f(b,S):S.isMeshLambertMaterial?(f(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(f(b,S),v(b,S)):S.isMeshPhongMaterial?(f(b,S),_(b,S),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(f(b,S),g(b,S),S.isMeshPhysicalMaterial&&E(b,S,R)):S.isMeshMatcapMaterial?(f(b,S),C(b,S)):S.isMeshDepthMaterial?f(b,S):S.isMeshDistanceMaterial?(f(b,S),D(b,S)):S.isMeshNormalMaterial?f(b,S):S.isLineBasicMaterial?(d(b,S),S.isLineDashedMaterial&&h(b,S)):S.isPointsMaterial?p(b,S,O,W):S.isSpriteMaterial?m(b,S):S.isShadowMaterial?(b.color.value.copy(S.color),b.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(b,S){b.opacity.value=S.opacity,S.color&&b.diffuse.value.copy(S.color),S.emissive&&b.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.bumpMap&&(b.bumpMap.value=S.bumpMap,i(S.bumpMap,b.bumpMapTransform),b.bumpScale.value=S.bumpScale,S.side===$n&&(b.bumpScale.value*=-1)),S.normalMap&&(b.normalMap.value=S.normalMap,i(S.normalMap,b.normalMapTransform),b.normalScale.value.copy(S.normalScale),S.side===$n&&b.normalScale.value.negate()),S.displacementMap&&(b.displacementMap.value=S.displacementMap,i(S.displacementMap,b.displacementMapTransform),b.displacementScale.value=S.displacementScale,b.displacementBias.value=S.displacementBias),S.emissiveMap&&(b.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,b.emissiveMapTransform)),S.specularMap&&(b.specularMap.value=S.specularMap,i(S.specularMap,b.specularMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest);const O=t.get(S),W=O.envMap,R=O.envMapRotation;W&&(b.envMap.value=W,b.envMapRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(R)).transpose(),W.isCubeTexture&&W.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(fS),b.reflectivity.value=S.reflectivity,b.ior.value=S.ior,b.refractionRatio.value=S.refractionRatio),S.lightMap&&(b.lightMap.value=S.lightMap,b.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,b.lightMapTransform)),S.aoMap&&(b.aoMap.value=S.aoMap,b.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,b.aoMapTransform))}function d(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform))}function h(b,S){b.dashSize.value=S.dashSize,b.totalSize.value=S.dashSize+S.gapSize,b.scale.value=S.scale}function p(b,S,O,W){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.size.value=S.size*O,b.scale.value=W*.5,S.map&&(b.map.value=S.map,i(S.map,b.uvTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function m(b,S){b.diffuse.value.copy(S.color),b.opacity.value=S.opacity,b.rotation.value=S.rotation,S.map&&(b.map.value=S.map,i(S.map,b.mapTransform)),S.alphaMap&&(b.alphaMap.value=S.alphaMap,i(S.alphaMap,b.alphaMapTransform)),S.alphaTest>0&&(b.alphaTest.value=S.alphaTest)}function _(b,S){b.specular.value.copy(S.specular),b.shininess.value=Math.max(S.shininess,1e-4)}function v(b,S){S.gradientMap&&(b.gradientMap.value=S.gradientMap)}function g(b,S){b.metalness.value=S.metalness,S.metalnessMap&&(b.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,b.metalnessMapTransform)),b.roughness.value=S.roughness,S.roughnessMap&&(b.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,b.roughnessMapTransform)),S.envMap&&(b.envMapIntensity.value=S.envMapIntensity)}function E(b,S,O){b.ior.value=S.ior,S.sheen>0&&(b.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),b.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(b.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,b.sheenColorMapTransform)),S.sheenRoughnessMap&&(b.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,b.sheenRoughnessMapTransform))),S.clearcoat>0&&(b.clearcoat.value=S.clearcoat,b.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(b.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,b.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(b.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&b.clearcoatNormalScale.value.negate())),S.dispersion>0&&(b.dispersion.value=S.dispersion),S.retroreflectivity>0&&(b.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(b.iridescence.value=S.iridescence,b.iridescenceIOR.value=S.iridescenceIOR,b.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(b.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,b.iridescenceMapTransform)),S.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),S.transmission>0&&(b.transmission.value=S.transmission,b.transmissionSamplerMap.value=O.texture,b.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(b.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,b.transmissionMapTransform)),b.thickness.value=S.thickness,S.thicknessMap&&(b.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=S.attenuationDistance,b.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(b.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(b.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=S.specularIntensity,b.specularColor.value.copy(S.specularColor),S.specularColorMap&&(b.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,b.specularColorMapTransform)),S.specularIntensityMap&&(b.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,b.specularIntensityMapTransform))}function C(b,S){S.matcap&&(b.matcap.value=S.matcap)}function D(b,S){const O=t.get(S).light;b.referencePosition.value.setFromMatrixPosition(O.matrixWorld),b.nearDistance.value=O.shadow.camera.near,b.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:c}}function Pw(o,t,i,s){let c={},f={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,U){const L=U.program;s.uniformBlockBinding(R,L)}function m(R,U){let L=c[R.id];L===void 0&&(b(R),L=_(R),c[R.id]=L,R.addEventListener("dispose",O));const P=U.program;s.updateUBOMapping(R,P);const T=t.render.frame;f[R.id]!==T&&(g(R),f[R.id]=T)}function _(R){const U=v();R.__bindingPointIndex=U;const L=o.createBuffer(),P=R.__size,T=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,P,T),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,L),L}function v(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const U=c[R.id],L=R.uniforms,P=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let T=0,F=L.length;T<F;T++){const B=L[T];if(Array.isArray(B))for(let V=0,K=B.length;V<K;V++)E(B[V],T,V,P);else E(B,T,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(R,U,L,P){if(D(R,U,L,P)===!0){const T=R.__offset,F=R.value;if(Array.isArray(F)){let B=0;for(let V=0;V<F.length;V++){const K=F[V],ae=S(K);C(K,R.__data,B),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(B+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(F,R.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,T,R.__data)}}function C(R,U,L){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,L)}function D(R,U,L,P){const T=R.value,F=U+"_"+L;if(P[F]===void 0)return typeof T=="number"||typeof T=="boolean"?P[F]=T:ArrayBuffer.isView(T)?P[F]=T.slice():P[F]=T.clone(),!0;{const B=P[F];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return P[F]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(B.equals(T)===!1)return B.copy(T),!0}}return!1}function b(R){const U=R.uniforms;let L=0;const P=16;for(let F=0,B=U.length;F<B;F++){const V=Array.isArray(U[F])?U[F]:[U[F]];for(let K=0,ae=V.length;K<ae;K++){const J=V[K],ie=Array.isArray(J.value)?J.value:[J.value];for(let Y=0,H=ie.length;Y<H;Y++){const j=ie[Y],te=S(j),oe=L%P,me=oe%te.boundary,We=oe+me;L+=me,We!==0&&P-We<te.storage&&(L+=P-We),J.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=te.storage}}}const T=L%P;return T>0&&(L+=P-T),R.__size=L,R.__cache={},this}function S(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",R),U}function O(R){const U=R.target;U.removeEventListener("dispose",O);const L=d.indexOf(U.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(c[U.id]),delete c[U.id],delete f[U.id]}function W(){for(const R in c)o.deleteBuffer(c[R]);d=[],c={},f={}}return{bind:p,update:m,dispose:W}}const Iw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function zw(){return ia===null&&(ia=new RE(Iw,16,16,Jr,ua),ia.name="DFG_LUT",ia.minFilter=Pn,ia.magFilter=Pn,ia.wrapS=Oa,ia.wrapT=Oa,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class Hw{constructor(t={}){const{canvas:i=k1(),context:s=null,depth:c=!0,stencil:f=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:E=wi}=t;this.isWebGLRenderer=!0;let C;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=s.getContextAttributes().alpha}else C=d;const D=E,b=new Set([Qp,Kp,Zp]),S=new Set([wi,ca,yl,bl,qp,Yp]),O=new Uint32Array(4),W=new Int32Array(4),R=new he;let U=null,L=null;const P=[],T=[];let F=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let V=!1,K=null,ae=null,J=null,ie=null;this._outputColorSpace=Ti;let Y=0,H=0,j=null,te=-1,oe=null;const me=new fn,We=new fn;let je=null;const z=new At(0);let xe=0,Re=i.width,Z=i.height,pe=1,we=null,Pe=null;const Se=new fn(0,0,Re,Z),De=new fn(0,0,Re,Z);let Vt=!1;const xt=new J_;let vt=!1,yt=!1;const it=new hn,st=new he,Ht=new fn,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function ct(){return j===null?pe:1}let G=s;function wt(A,k){return i.getContext(A,k)}let ht,N,M,$,re,ge,Ce,Le,ve,_e,Te,ze,Ee,Ne,Ie,nt,ot,q,Ue,ye,Oe,Ge,Ae;try{const A={alpha:!0,depth:c,stencil:f,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xp}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",ut,!1),i.addEventListener("webglcontextcreationerror",zn,!1),G===null){const k="webgl2";if(G=wt(k,A),G===null)throw wt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",zn,!1),Gt("WebGLRenderer: "+A.message),A}function Qe(){ht=new zA(G),ht.init(),Oe=new Nw(G,ht),N=new RA(G,ht,t,Oe),M=new Cw(G,ht),N.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),ae=G.createFramebuffer(),J=G.createFramebuffer(),ie=G.createFramebuffer(),$=new VA(G),re=new pw,ge=new Rw(G,ht,M,re,N,Oe,$),Ce=new IA(B),Le=new XE(G),Ge=new wA(G,Le),ve=new HA(G,Le,$,Ge),_e=new XA(G,ve,Le,Ge,$),q=new kA(G,N,ge),Ie=new NA(re),Te=new hw(B,Ce,ht,N,Ge,Ie),ze=new Bw(B,re),Ee=new gw,Ne=new bw(ht),ot=new AA(B,Ce,M,_e,C,p),nt=new ww(B,_e,N),Ae=new Pw(G,$,N,M),Ue=new CA(G,ht,$),ye=new GA(G,ht,$),$.programs=Te.programs,B.capabilities=N,B.extensions=ht,B.properties=re,B.renderLists=Ee,B.shadowMap=nt,B.state=M,B.info=$}D!==wi&&(F=new jA(D,i.width,i.height,h,c,f));const He=new Ow(B,G);this.xr=He,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(A){A!==void 0&&(pe=A,this.setSize(Re,Z,!1))},this.getSize=function(A){return A.set(Re,Z)},this.setSize=function(A,k,de=!0){if(He.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=A,Z=k,i.width=Math.floor(A*pe),i.height=Math.floor(k*pe),de===!0&&(i.style.width=A+"px",i.style.height=k+"px"),F!==null&&F.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Re*pe,Z*pe).floor()},this.setDrawingBufferSize=function(A,k,de){Re=A,Z=k,pe=de,i.width=Math.floor(A*de),i.height=Math.floor(k*de),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(D===wi){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(me)},this.getViewport=function(A){return A.copy(Se)},this.setViewport=function(A,k,de,le){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,k,de,le),M.viewport(me.copy(Se).multiplyScalar(pe).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,k,de,le){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,k,de,le),M.scissor(We.copy(De).multiplyScalar(pe).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(A){M.setScissorTest(Vt=A)},this.setOpaqueSort=function(A){we=A},this.setTransparentSort=function(A){Pe=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,de=!0){let le=0;if(A){let ce=!1;if(j!==null){const Ve=j.texture.format;ce=b.has(Ve)}if(ce){const Ve=j.texture.type,qe=S.has(Ve),Fe=ot.getClearColor(),Ke=ot.getClearAlpha(),Je=Fe.r,ft=Fe.g,mt=Fe.b;qe?(O[0]=Je,O[1]=ft,O[2]=mt,O[3]=Ke,G.clearBufferuiv(G.COLOR,0,O)):(W[0]=Je,W[1]=ft,W[2]=mt,W[3]=Ke,G.clearBufferiv(G.COLOR,0,W))}else le|=G.COLOR_BUFFER_BIT}k&&(le|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(le|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&G.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",ut,!1),i.removeEventListener("webglcontextcreationerror",zn,!1),ot.dispose(),Ee.dispose(),Ne.dispose(),re.dispose(),Ce.dispose(),_e.dispose(),Ge.dispose(),Ae.dispose(),Te.dispose(),He.dispose(),He.removeEventListener("sessionstart",Sr),He.removeEventListener("sessionend",Ha),Vi.stop()};function Ct(A){A.preventDefault(),Cv("WebGLRenderer: Context Lost."),V=!0}function ut(){Cv("WebGLRenderer: Context Restored."),V=!1;const A=$.autoReset,k=nt.enabled,de=nt.autoUpdate,le=nt.needsUpdate,ce=nt.type;Qe(),$.autoReset=A,nt.enabled=k,nt.autoUpdate=de,nt.needsUpdate=le,nt.type=ce}function zn(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qn(A){const k=A.target;k.removeEventListener("dispose",qn),uo(k)}function uo(A){Ia(A),re.remove(A)}function Ia(A){const k=re.get(A).programs;k!==void 0&&(k.forEach(function(de){Te.releaseProgram(de)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,de,le,ce,Ve){k===null&&(k=tt);const qe=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Fe=xo(A,k,de,le,ce);M.setMaterial(le,qe);let Ke=de.index,Je=1;if(le.wireframe===!0){if(Ke=ve.getWireframeAttribute(de),Ke===void 0)return;Je=2}const ft=de.drawRange,mt=de.attributes.position;let Ye=ft.start*Je,Rt=(ft.start+ft.count)*Je;Ve!==null&&(Ye=Math.max(Ye,Ve.start*Je),Rt=Math.min(Rt,(Ve.start+Ve.count)*Je)),Ke!==null?(Ye=Math.max(Ye,0),Rt=Math.min(Rt,Ke.count)):mt!=null&&(Ye=Math.max(Ye,0),Rt=Math.min(Rt,mt.count));const Mt=Rt-Ye;if(Mt<0||Mt===1/0)return;Ge.setup(ce,le,Fe,de,Ke);let Jt,jt=Ue;if(Ke!==null&&(Jt=Le.get(Ke),jt=ye,jt.setIndex(Jt)),ce.isMesh)le.wireframe===!0?(M.setLineWidth(le.wireframeLinewidth*ct()),jt.setMode(G.LINES)):jt.setMode(G.TRIANGLES);else if(ce.isLine){let _n=le.linewidth;_n===void 0&&(_n=1),M.setLineWidth(_n*ct()),ce.isLineSegments?jt.setMode(G.LINES):ce.isLineLoop?jt.setMode(G.LINE_LOOP):jt.setMode(G.LINE_STRIP)}else ce.isPoints?jt.setMode(G.POINTS):ce.isSprite&&jt.setMode(G.TRIANGLES);if(ce.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))jt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const _n=ce._multiDrawStarts,ke=ce._multiDrawCounts,on=ce._multiDrawCount,Bt=Ke?Le.get(Ke).bytesPerElement:1,Hn=re.get(le).currentProgram.getUniforms();for(let ti=0;ti<on;ti++)Hn.setValue(G,"_gl_DrawID",ti),jt.render(_n[ti]/Bt,ke[ti])}else if(ce.isInstancedMesh)jt.renderInstances(Ye,Mt,ce.count);else if(de.isInstancedBufferGeometry){const _n=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ke=Math.min(de.instanceCount,_n);jt.renderInstances(Ye,Mt,ke)}else jt.render(Ye,Mt)};function Ri(A,k,de,le){K!==null&&A.isNodeMaterial&&K.setObject(le,A),vt===!0&&Ie.setState(A,de,!1),A.transparent===!0&&A.side===La&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,yr(A,k,le),A.side=Kr,A.needsUpdate=!0,yr(A,k,le),A.side=La):yr(A,k,le)}this.compile=function(A,k,de=null){de===null&&(de=A),K!==null&&K.renderStart(A,k,de),L=Ne.get(de),L.init(k),T.push(L),de.traverseVisible(function(ce){ce.isLight&&ce.layers.test(k.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),A!==de&&A.traverseVisible(function(ce){ce.isLight&&ce.layers.test(k.layers)&&(L.pushLight(ce),ce.castShadow&&L.pushShadow(ce))}),L.setupLights(),K!==null&&K.updateLights(L.state.lightsArray),yt=this.localClippingEnabled,vt=Ie.init(this.clippingPlanes,yt),vt===!0&&Ie.setGlobalState(this.clippingPlanes,k),K!==null&&nt.render(L.state.shadowsArray,de,k);const le=new Set;return A.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Ve=ce.material;if(Ve)if(Array.isArray(Ve))for(let qe=0;qe<Ve.length;qe++){const Fe=Ve[qe];Ri(Fe,de,k,ce),le.add(Fe)}else Ri(Ve,de,k,ce),le.add(Ve)}),L=T.pop(),K!==null&&K.renderEnd(),le},this.compileAsync=function(A,k,de=null){const le=this.compile(A,k,de);return new Promise(ce=>{function Ve(){if(le.forEach(function(qe){const Ke=re.get(qe).currentProgram;(Ke===void 0||Ke.isReady())&&le.delete(qe)}),le.size===0){ce(A);return}setTimeout(Ve,10)}ht.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let za=null;function ha(A){za&&za(A)}function Sr(){Vi.stop()}function Ha(){Vi.start()}const Vi=new aS;Vi.setAnimationLoop(ha),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(A){za=A,He.setAnimationLoop(A),A===null?Vi.stop():Vi.start()},He.addEventListener("sessionstart",Sr),He.addEventListener("sessionend",Ha),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(A,k);const de=He.enabled===!0&&He.isPresenting===!0,le=F!==null&&(j===null||de)&&F.begin(B,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(k),k=He.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,k,j),L=Ne.get(A,T.length),L.init(k),L.state.textureUnits=ge.getTextureUnits(),T.push(L),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),xt.setFromProjectionMatrix(it,oa,k.reversedDepth),yt=this.localClippingEnabled,vt=Ie.init(this.clippingPlanes,yt),U=Ee.get(A,P.length),U.init(),P.push(U),He.enabled===!0&&He.isPresenting===!0){const qe=B.xr.getDepthSensingMesh();qe!==null&&fo(qe,k,-1/0,B.sortObjects)}fo(A,k,0,B.sortObjects),U.finish(),K!==null&&K.updateLights(L.state.lightsArray),B.sortObjects===!0&&U.sort(we,Pe),et=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,et&&ot.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ie.beginShadows();const ce=L.state.shadowsArray;if(nt.render(ce,A,k),vt===!0&&Ie.endShadows(),(le&&F.hasRenderPass())===!1){const qe=U.opaque,Fe=U.transmissive;if(L.setupLights(),k.isArrayCamera){const Ke=k.cameras;if(Fe.length>0)for(let Je=0,ft=Ke.length;Je<ft;Je++){const mt=Ke[Je];ts(qe,Fe,A,mt)}et&&ot.render(A);for(let Je=0,ft=Ke.length;Je<ft;Je++){const mt=Ke[Je];ho(U,A,mt,mt.viewport)}}else Fe.length>0&&ts(qe,Fe,A,k),et&&ot.render(A),ho(U,A,k)}j!==null&&H===0&&(ge.updateMultisampleRenderTarget(j),ge.updateRenderTargetMipmap(j)),le&&F.end(B),A.isScene===!0&&A.onAfterRender(B,A,k),Ge.resetDefaultState(),te=-1,oe=null,T.pop(),T.length>0?(L=T[T.length-1],ge.setTextureUnits(L.state.textureUnits),vt===!0&&Ie.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?U=P[P.length-1]:U=null,K!==null&&K.renderEnd()};function fo(A,k,de,le){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(xt)){le&&Ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(it);const qe=_e.update(A),Fe=A.material;Fe.visible&&U.push(A,qe,Fe,de,Ht.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(xt))){const qe=_e.update(A),Fe=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ht.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ht.copy(qe.boundingSphere.center)),Ht.applyMatrix4(A.matrixWorld).applyMatrix4(it)),Array.isArray(Fe)){const Ke=qe.groups;for(let Je=0,ft=Ke.length;Je<ft;Je++){const mt=Ke[Je],Ye=Fe[mt.materialIndex];Ye&&Ye.visible&&U.push(A,qe,Ye,de,Ht.z,mt,k)}}else Fe.visible&&U.push(A,qe,Fe,de,Ht.z,null,k)}}const Ve=A.children;for(let qe=0,Fe=Ve.length;qe<Fe;qe++)fo(Ve[qe],k,de,le)}function ho(A,k,de,le){const{opaque:ce,transmissive:Ve,transparent:qe}=A;L.setupLightsView(de),vt===!0&&Ie.setGlobalState(B.clippingPlanes,de),le&&M.viewport(me.copy(le)),ce.length>0&&ki(ce,k,de),Ve.length>0&&ki(Ve,k,de),qe.length>0&&ki(qe,k,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ts(A,k,de,le){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[le.id]===void 0){const Ye=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[le.id]=new Gi(1,1,{generateMipmaps:!0,type:Ye?ua:wi,minFilter:qr,samples:Math.max(4,N.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[le.id],qe=le.viewport||me;Ve.setSize(qe.z*B.transmissionResolutionScale,qe.w*B.transmissionResolutionScale);const Fe=B.getRenderTarget(),Ke=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Ve),B.getClearColor(z),xe=B.getClearAlpha(),xe<1&&B.setClearColor(16777215,.5),B.clear(),et&&ot.render(de);const ft=B.toneMapping;B.toneMapping=la;const mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),L.setupLightsView(le),vt===!0&&Ie.setGlobalState(B.clippingPlanes,le),ki(A,de,le),ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Rt=0,Mt=k.length;Rt<Mt;Rt++){const Jt=k[Rt],{object:jt,geometry:_n,material:ke,group:on}=Jt;if(ke.side===La&&jt.layers.test(le.layers)){const Bt=ke.side;ke.side=$n,ke.needsUpdate=!0,Nl(jt,de,le,_n,ke,on),ke.side=Bt,ke.needsUpdate=!0,Ye=!0}}Ye===!0&&(ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve))}B.setRenderTarget(Fe,Ke,Je),B.setClearColor(z,xe),mt!==void 0&&(le.viewport=mt),B.toneMapping=ft}function ki(A,k,de){const le=k.isScene===!0?k.overrideMaterial:null;for(let ce=0,Ve=A.length;ce<Ve;ce++){const qe=A[ce],{object:Fe,geometry:Ke,group:Je}=qe;let ft=qe.material;ft.allowOverride===!0&&le!==null&&(ft=le),Fe.layers.test(de.layers)&&Nl(Fe,k,de,Ke,ft,Je)}}function Nl(A,k,de,le,ce,Ve){K!==null&&ce.isNodeMaterial&&K.setObject(A,ce),A.onBeforeRender(B,k,de,le,ce,Ve),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ce.onBeforeRender(B,k,de,le,A,Ve),ce.transparent===!0&&ce.side===La&&ce.forceSinglePass===!1?(ce.side=$n,ce.needsUpdate=!0,B.renderBufferDirect(de,k,le,ce,A,Ve),ce.side=Kr,ce.needsUpdate=!0,B.renderBufferDirect(de,k,le,ce,A,Ve),ce.side=La):B.renderBufferDirect(de,k,le,ce,A,Ve),A.onAfterRender(B,k,de,le,ce,Ve)}function yr(A,k,de){k.isScene!==!0&&(k=tt);const le=re.get(A),ce=L.state.lights,Ve=L.state.shadowsArray,qe=ce.state.version,Fe=Te.getParameters(A,ce.state,Ve,k,de,L.state.lightProbeGridArray),Ke=Te.getProgramCacheKey(Fe);let Je=le.programs;le.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,le.fog=k.fog;const ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;le.envMap=Ce.get(A.envMap||le.environment,ft),le.envMapRotation=le.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",qn),Je=new Map,le.programs=Je);let mt=Je.get(Ke);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===qe)return mo(A,Fe),mt}else Fe.uniforms=Te.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,de,Fe),A.onBeforeCompile(Fe,B),mt=Te.acquireProgram(Fe,Ke),Je.set(Ke,mt),le.uniforms=Fe.uniforms;const Ye=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Ie.uniform),mo(A,Fe),le.needsLights=Ul(A),le.lightsStateVersion=qe,le.needsLights&&(Ye.ambientLightColor.value=ce.state.ambient,Ye.lightProbe.value=ce.state.probe,Ye.sunLights.value=ce.state.sun,Ye.sunLightShadows.value=ce.state.sunShadow,Ye.directionalLights.value=ce.state.directional,Ye.directionalLightShadows.value=ce.state.directionalShadow,Ye.spotLights.value=ce.state.spot,Ye.spotLightShadows.value=ce.state.spotShadow,Ye.rectAreaLights.value=ce.state.rectArea,Ye.ltc_1.value=ce.state.rectAreaLTC1,Ye.ltc_2.value=ce.state.rectAreaLTC2,Ye.pointLights.value=ce.state.point,Ye.pointLightShadows.value=ce.state.pointShadow,Ye.hemisphereLights.value=ce.state.hemi,Ye.sunShadowMatrix.value=ce.state.sunShadowMatrix,Ye.sunShadowCascade.value=ce.state.sunShadowCascade,Ye.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ce.state.spotLightMatrix,Ye.spotLightMap.value=ce.state.spotLightMap,Ye.pointShadowMatrix.value=ce.state.pointShadowMatrix),le.lightProbeGrid=L.state.lightProbeGridArray.length>0,le.currentProgram=mt,le.uniformsList=null,mt}function po(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Nu.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function mo(A,k){const de=re.get(A);de.outputColorSpace=k.outputColorSpace,de.batching=k.batching,de.batchingColor=k.batchingColor,de.instancing=k.instancing,de.instancingColor=k.instancingColor,de.instancingMorph=k.instancingMorph,de.skinning=k.skinning,de.morphTargets=k.morphTargets,de.morphNormals=k.morphNormals,de.morphColors=k.morphColors,de.morphTargetsCount=k.morphTargetsCount,de.numClippingPlanes=k.numClippingPlanes,de.numIntersection=k.numClipIntersection,de.vertexAlphas=k.vertexAlphas,de.vertexTangents=k.vertexTangents,de.toneMapping=k.toneMapping}function go(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(k.matrixWorld);for(let de=0,le=A.length;de<le;de++){const ce=A[de];if(ce.texture!==null&&ce.boundingBox.containsPoint(R))return ce}return null}function xo(A,k,de,le,ce){k.isScene!==!0&&(k=tt),ge.resetTextureUnits();const Ve=k.fog,qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?k.environment:null,Fe=j===null?B.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pt.workingColorSpace,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Je=Ce.get(le.envMap||qe,Ke),ft=le.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,mt=!!de.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ye=!!de.morphAttributes.position,Rt=!!de.morphAttributes.normal,Mt=!!de.morphAttributes.color;let Jt=la;le.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Jt=B.toneMapping);const jt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,_n=jt!==void 0?jt.length:0,ke=re.get(le),on=L.state.lights;if(vt===!0&&(yt===!0||A!==oe)){const Ut=A===oe&&le.id===te;Ie.setState(le,A,Ut)}let Bt=!1;le.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==on.state.version||ke.outputColorSpace!==Fe||ce.isBatchedMesh&&ke.batching===!1||!ce.isBatchedMesh&&ke.batching===!0||ce.isBatchedMesh&&ke.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&ke.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&ke.instancing===!1||!ce.isInstancedMesh&&ke.instancing===!0||ce.isSkinnedMesh&&ke.skinning===!1||!ce.isSkinnedMesh&&ke.skinning===!0||ce.isInstancedMesh&&ke.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&ke.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&ke.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&ke.instancingMorph===!1&&ce.morphTexture!==null||ke.envMap!==Je||le.fog===!0&&ke.fog!==Ve||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ie.numPlanes||ke.numIntersection!==Ie.numIntersection)||ke.vertexAlphas!==ft||ke.vertexTangents!==mt||ke.morphTargets!==Ye||ke.morphNormals!==Rt||ke.morphColors!==Mt||ke.toneMapping!==Jt||ke.morphTargetsCount!==_n||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,ke.__version=le.version);let Hn=ke.currentProgram;Bt===!0&&(Hn=yr(le,k,ce),K&&le.isNodeMaterial&&K.onUpdateProgram(le,Hn,ke));let ti=!1,Xi=!1,Et=!1;const kt=Hn.getUniforms(),tn=ke.uniforms;if(M.useProgram(Hn.program)&&(ti=!0,Xi=!0,Et=!0),le.id!==te&&(te=le.id,Xi=!0),ke.needsLights){const Ut=go(L.state.lightProbeGridArray,ce);ke.lightProbeGrid!==Ut&&(ke.lightProbeGrid=Ut,Xi=!0)}if(ti||oe!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(G,"projectionMatrix",A.projectionMatrix),kt.setValue(G,"viewMatrix",A.matrixWorldInverse);const ln=kt.map.cameraPosition;ln!==void 0&&ln.setValue(G,st.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&kt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&kt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),oe!==A&&(oe=A,Xi=!0,Et=!0)}if(ke.needsLights&&(on.state.sunShadowMap.length>0&&kt.setValue(G,"sunShadowMap",on.state.sunShadowMap,ge),on.state.directionalShadowMap.length>0&&kt.setValue(G,"directionalShadowMap",on.state.directionalShadowMap,ge),on.state.spotShadowMap.length>0&&kt.setValue(G,"spotShadowMap",on.state.spotShadowMap,ge),on.state.pointShadowMap.length>0&&kt.setValue(G,"pointShadowMap",on.state.pointShadowMap,ge)),ce.isSkinnedMesh){kt.setOptional(G,ce,"bindMatrix"),kt.setOptional(G,ce,"bindMatrixInverse");const Ut=ce.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),kt.setValue(G,"boneTexture",Ut.boneTexture,ge))}ce.isBatchedMesh&&(kt.setOptional(G,ce,"batchingTexture"),kt.setValue(G,"batchingTexture",ce._matricesTexture,ge),kt.setOptional(G,ce,"batchingIdTexture"),kt.setValue(G,"batchingIdTexture",ce._indirectTexture,ge),kt.setOptional(G,ce,"batchingColorTexture"),ce._colorsTexture!==null&&kt.setValue(G,"batchingColorTexture",ce._colorsTexture,ge));const ni=de.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&q.update(ce,de,Hn),(Xi||ke.receiveShadow!==ce.receiveShadow)&&(ke.receiveShadow=ce.receiveShadow,kt.setValue(G,"receiveShadow",ce.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&k.environment!==null&&(tn.envMapIntensity.value=k.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=zw()),Xi){if(kt.setValue(G,"toneMappingExposure",B.toneMappingExposure),ke.needsLights&&Dl(tn,Et),Ve&&le.fog===!0&&ze.refreshFogUniforms(tn,Ve),ze.refreshMaterialUniforms(tn,le,pe,Z,L.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Ut=ke.lightProbeGrid;tn.probesSH.value=Ut.texture,tn.probesMin.value.copy(Ut.boundingBox.min),tn.probesMax.value.copy(Ut.boundingBox.max),tn.probesResolution.value.copy(Ut.resolution)}Nu.upload(G,po(ke),tn,ge)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Nu.upload(G,po(ke),tn,ge),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&kt.setValue(G,"center",ce.center),kt.setValue(G,"modelViewMatrix",ce.modelViewMatrix),kt.setValue(G,"normalMatrix",ce.normalMatrix),kt.setValue(G,"modelMatrix",ce.matrixWorld),le.uniformsGroups!==void 0){const Ut=le.uniformsGroups;for(let ln=0,pa=Ut.length;ln<pa;ln++){const Ll=Ut[ln];Ae.update(Ll,Hn),Ae.bind(Ll,Hn)}}return Hn}function Dl(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Ul(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,k,de){const le=re.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=k,re.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:de,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const de=re.get(A);de.__webglFramebuffer=k,de.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,de=0){j=A,Y=k,H=de;let le=null,ce=!1,Ve=!1;if(A){const Fe=re.get(A);if(Fe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,Fe.__webglFramebuffer),me.copy(A.viewport),We.copy(A.scissor),je=A.scissorTest,M.viewport(me),M.scissor(We),M.setScissorTest(je),te=-1;return}else if(Fe.__webglFramebuffer===void 0)ge.setupRenderTarget(A);else if(Fe.__hasExternalTextures)ge.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ft=A.depthTexture;if(Fe.__boundDepthTexture!==ft){if(ft!==null&&re.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ve=!0);const Je=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?le=Je[k][de]:le=Je[k],ce=!0):A.samples>0&&ge.useMultisampledRTT(A)===!1?le=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?le=Je[de]:le=Je,me.copy(A.viewport),We.copy(A.scissor),je=A.scissorTest}else me.copy(Se).multiplyScalar(pe).floor(),We.copy(De).multiplyScalar(pe).floor(),je=Vt;if(de!==0&&(le=ae),M.bindFramebuffer(G.FRAMEBUFFER,le)&&M.drawBuffers(A,le),M.viewport(me),M.scissor(We),M.setScissorTest(je),ce){const Fe=re.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,Fe.__webglTexture,de)}else if(Ve){const Fe=k;for(let Ke=0;Ke<A.textures.length;Ke++){const Je=re.get(A.textures[Ke]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ke,Je.__webglTexture,de,Fe)}}else if(A!==null&&de!==0){const Fe=re.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fe.__webglTexture,de)}te=-1};function pi(A){const k=re.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=N.textureFormatReadable(A.format),k.__typeReadable=N.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,de,le,ce,Ve,qe,Fe=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke){M.bindFramebuffer(G.FRAMEBUFFER,Ke);try{const Je=A.textures[Fe],ft=Je.format,mt=Je.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);const Ye=pi(Je);if(Ye.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-le&&de>=0&&de<=A.height-ce&&G.readPixels(k,de,le,ce,Oe.convert(ft),Oe.convert(mt),Ve)}finally{const Je=j!==null?re.get(j).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,k,de,le,ce,Ve,qe,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Ke=Ke[qe]),Ke)if(k>=0&&k<=A.width-le&&de>=0&&de<=A.height-ce){M.bindFramebuffer(G.FRAMEBUFFER,Ke);const Je=A.textures[Fe],ft=Je.format,mt=Je.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);const Ye=pi(Je);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Rt),G.bufferData(G.PIXEL_PACK_BUFFER,Ve.byteLength,G.STREAM_READ),G.readPixels(k,de,le,ce,Oe.convert(ft),Oe.convert(mt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Mt=j!==null?re.get(j).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Mt);const Jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await X1(G,Jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Rt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ve),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(Rt),G.deleteSync(Jt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,de=0){const le=Math.pow(2,-de),ce=Math.floor(A.image.width*le),Ve=Math.floor(A.image.height*le),qe=k!==null?k.x:0,Fe=k!==null?k.y:0;ge.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,qe,Fe,ce,Ve),M.unbindTexture()},this.copyTextureToTexture=function(A,k,de=null,le=null,ce=0,Ve=0){let qe,Fe,Ke,Je,ft,mt,Ye,Rt,Mt;const Jt=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(de!==null)qe=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Ke=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,ft=de.min.y,mt=de.isBox3?de.min.z:0;else{const tn=Math.pow(2,-ce);qe=Math.floor(Jt.width*tn),Fe=Math.floor(Jt.height*tn),A.isDataArrayTexture?Ke=Jt.depth:A.isData3DTexture?Ke=Math.floor(Jt.depth*tn):Ke=1,Je=0,ft=0,mt=0}le!==null?(Ye=le.x,Rt=le.y,Mt=le.z):(Ye=0,Rt=0,Mt=0);const jt=Oe.convert(k.format),_n=Oe.convert(k.type);let ke;k.isData3DTexture?(ge.setTexture3D(k,0),ke=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ge.setTexture2DArray(k,0),ke=G.TEXTURE_2D_ARRAY):(ge.setTexture2D(k,0),ke=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const on=M.getParameter(G.UNPACK_ROW_LENGTH),Bt=M.getParameter(G.UNPACK_IMAGE_HEIGHT),Hn=M.getParameter(G.UNPACK_SKIP_PIXELS),ti=M.getParameter(G.UNPACK_SKIP_ROWS),Xi=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,Jt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Jt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Je),M.pixelStorei(G.UNPACK_SKIP_ROWS,ft),M.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);const Et=A.isDataArrayTexture||A.isData3DTexture,kt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const tn=re.get(A),ni=re.get(k),Ut=re.get(tn.__renderTarget),ln=re.get(ni.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,Ut.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ln.__webglFramebuffer);for(let pa=0;pa<Ke;pa++)Et&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,re.get(A).__webglTexture,ce,mt+pa),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,re.get(k).__webglTexture,Ve,Mt+pa)),G.blitFramebuffer(Je,ft,qe,Fe,Ye,Rt,qe,Fe,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ce!==0||A.isRenderTargetTexture||re.has(A)){const tn=re.get(A),ni=re.get(k);M.bindFramebuffer(G.READ_FRAMEBUFFER,J),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ie);for(let Ut=0;Ut<Ke;Ut++)Et?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,ce,mt+Ut):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,ce),kt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ni.__webglTexture,Ve,Mt+Ut):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ni.__webglTexture,Ve),ce!==0?G.blitFramebuffer(Je,ft,qe,Fe,Ye,Rt,qe,Fe,G.COLOR_BUFFER_BIT,G.NEAREST):kt?G.copyTexSubImage3D(ke,Ve,Ye,Rt,Mt+Ut,Je,ft,qe,Fe):G.copyTexSubImage2D(ke,Ve,Ye,Rt,Je,ft,qe,Fe);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else kt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(ke,Ve,Ye,Rt,Mt,qe,Fe,Ke,jt,_n,Jt.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,Ve,Ye,Rt,Mt,qe,Fe,Ke,jt,Jt.data):G.texSubImage3D(ke,Ve,Ye,Rt,Mt,qe,Fe,Ke,jt,_n,Jt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ve,Ye,Rt,qe,Fe,jt,_n,Jt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ve,Ye,Rt,Jt.width,Jt.height,jt,Jt.data):G.texSubImage2D(G.TEXTURE_2D,Ve,Ye,Rt,qe,Fe,jt,_n,Jt);M.pixelStorei(G.UNPACK_ROW_LENGTH,on),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Hn),M.pixelStorei(G.UNPACK_SKIP_ROWS,ti),M.pixelStorei(G.UNPACK_SKIP_IMAGES,Xi),Ve===0&&k.generateMipmaps&&G.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){Y=0,H=0,j=null,M.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Pt._getUnpackColorSpace()}}function Gw(){const o=rt.useRef(null);return rt.useEffect(()=>{const t=o.current;if(!t)return;let i=t.clientWidth||window.innerWidth,s=t.clientHeight||window.innerHeight;const c=new yE,f=new Ai(45,i/s,.1,100);f.position.set(0,0,8.2);const d=new Hw({antialias:!0,alpha:!0,powerPreference:"high-performance"});d.setSize(i,s),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.toneMapping=Wp,d.toneMappingExposure=1.25,t.appendChild(d.domElement);const h=()=>{const tt=$c.degToRad(f.fov),et=2*Math.tan(tt/2)*f.position.z;return{visibleWidth:et*(i/s),visibleHeight:et}};let{visibleWidth:p,visibleHeight:m}=h();const _=i<768,v=_?1400:2600,g=_?1.5:2,E=new Float32Array(v*3),C=new Float32Array(v*3),D=[],b=new At(3718648),S=new At(12248829),O=new At(16317180),W=new At(16180148),R=new At(15123845),U=new At(3900150),L=new At(1920728),P=(1+Math.sqrt(5))/2,T=Math.floor(v*.72),F=v-T;for(let tt=0;tt<v;tt++){let et,ct,G,wt;if(tt<T){const _e=Math.acos(1-2*(tt+.5)/T),Te=2*Math.PI*tt*P;et=g*Math.sin(_e)*Math.cos(Te),ct=g*Math.cos(_e),G=g*Math.sin(_e)*Math.sin(Te),wt=tt%7===0?W:tt%11===0?R:tt%4===0?O:tt%3===0?S:tt%2===0?b:U}else{const _e=tt-T,Te=9,ze=_e%Te,Ee=(ze-(Te-1)/2)/(Te/2)*(Math.PI*.42),Ne=Math.floor(_e/Te)/(F/Te)*Math.PI*2,Ie=g*Math.cos(Ee);et=Ie*Math.sin(Ne),ct=g*Math.sin(Ee),G=Ie*Math.cos(Ne),wt=ze===Math.floor(Te/2)?W:_e%3===0?R:_e%2===0?b:L}const ht=tt*3;E[ht]=et,E[ht+1]=ct,E[ht+2]=G,C[ht]=wt.r,C[ht+1]=wt.g,C[ht+2]=wt.b;const N=Math.sqrt(et*et+ct*ct+G*G)||1,M=et/N,$=ct/N,re=G/N,ge=2+Math.random()*3.8,Ce=M*ge+(Math.random()-.5)*(p*1.1),Le=$*ge+(Math.random()-.5)*(m*1.1),ve=re*ge*1.3+(Math.random()-.5)*4.6;D.push({sphX:et,sphY:ct,sphZ:G,normX:M,normY:$,normZ:re,spreadX:Ce,spreadY:Le,spreadZ:ve,curX:et,curY:ct,curZ:G,baseR:wt.r,baseG:wt.g,baseB:wt.b,driftSpeed:.5+Math.random()*.7,driftPhase:Math.random()*Math.PI*2,spreadDelay:Math.random()*.28,swirlSpeed:(Math.random()-.5)*1.2})}const B=new hi;B.setAttribute("position",new di(E,3)),B.setAttribute("color",new di(C,3));const V=document.createElement("canvas");V.width=48,V.height=48;const K=V.getContext("2d"),ae=K.createRadialGradient(24,24,0,24,24,24);ae.addColorStop(0,"rgba(255, 255, 255, 1)"),ae.addColorStop(.28,"rgba(199, 232, 215, 0.95)"),ae.addColorStop(.6,"rgba(143, 216, 184, 0.45)"),ae.addColorStop(1,"rgba(0, 0, 0, 0)"),K.fillStyle=ae,K.fillRect(0,0,48,48);const J=new DE(V),ie=new Pp({size:_?.058:.072,map:J,vertexColors:!0,transparent:!0,opacity:.94,blending:Du,depthWrite:!1,sizeAttenuation:!0}),Y=new Wv(B,ie);c.add(Y);const H=_?320:620,j=new Float32Array(H*3),te=new Float32Array(H*3),oe=[];for(let tt=0;tt<H;tt++){const et=tt*3;let ct=(Math.random()-.5)*(p*1.45),G=(Math.random()-.5)*(m*1.45),wt=(Math.random()-.5)*14-1.5;if(Math.hypot(ct,G)<g*1.15){const M=Math.random()*Math.PI*2,$=g*1.25+Math.random()*4.2;ct=Math.cos(M)*$,G=Math.sin(M)*$}j[et]=ct,j[et+1]=G,j[et+2]=wt;const N=tt%8===0?W:tt%13===0?R:tt%5===0?b:tt%3===0?S:O;te[et]=N.r,te[et+1]=N.g,te[et+2]=N.b,oe.push({baseX:ct,baseY:G,baseZ:wt,baseR:N.r,baseG:N.g,baseB:N.b,twinkleSpeed:.9+Math.random()*2.1,twinklePhase:Math.random()*Math.PI*2,driftSpeed:.12+Math.random()*.2,driftPhase:Math.random()*Math.PI*2})}const me=new hi;me.setAttribute("position",new di(j,3)),me.setAttribute("color",new di(te,3));const We=new Pp({size:_?.034:.044,map:J,vertexColors:!0,transparent:!0,opacity:.82,blending:Du,depthWrite:!1,sizeAttenuation:!0}),je=new Wv(me,We);c.add(je);const z=new im(g*.38,24,24),xe=new nm({color:3718648,transparent:!0,opacity:.08}),Re=new fa(z,xe);c.add(Re);const Z={x:0,y:0,targetX:0,targetY:0},pe=tt=>{Z.targetX=tt.clientX/window.innerWidth*2-1,Z.targetY=-(tt.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",pe);let we=-100;const Pe=()=>{we=performance.now()*.001};window.addEventListener("pointerdown",Pe);const Se=()=>{if(!t)return;i=t.clientWidth||window.innerWidth,s=t.clientHeight||window.innerHeight,f.aspect=i/s,f.updateProjectionMatrix(),d.setSize(i,s);const tt=h();p=tt.visibleWidth,m=tt.visibleHeight;for(let et=0;et<v;et++){const ct=D[et],G=2+Math.random()*3.8;ct.spreadX=ct.normX*G+(Math.random()-.5)*(p*1.1),ct.spreadY=ct.normY*G+(Math.random()-.5)*(m*1.1)}};window.addEventListener("resize",Se);const De=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Vt=13.5,xt=new VE;let vt;const yt=$c.degToRad(23.5),it=Math.cos(yt),st=Math.sin(yt),Ht=()=>{const tt=xt.getElapsedTime(),et=De?3:tt%Vt;Z.x+=(Z.targetX-Z.x)*.045,Z.y+=(Z.targetY-Z.y)*.045,f.position.x=Z.x*1.05,f.position.y=Z.y*.75,f.lookAt(0,0,0);const ct=tt*.38,G=tt-we,wt=G>=0&&G<2.2?Math.sin(G/2.2*Math.PI)*1.4:0;let ht=0;if(et<6.2)ht=0;else if(et>=6.2&&et<8.5){const Te=(et-6.2)/2.3;ht=Te<.5?4*Te*Te*Te:1-Math.pow(-2*Te+2,3)/2}else if(et>=8.5&&et<11.2)ht=1;else{const Te=(et-11.2)/2.3;ht=Math.pow(1-Te,2.5)}const N=Math.min(1.3,ht+wt),M=(1-N)*Math.sin(tt*2.2)*.035,$=Math.max(.001,(1-N*.85)*(1+M));Re.scale.set($,$,$),xe.opacity=.07*(1-N*.85);const re=B.attributes.position.array,ge=B.attributes.color.array,Ce=Math.cos(ct),Le=Math.sin(ct);for(let Te=0;Te<v;Te++){const ze=Te*3,Ee=D[Te],Ne=Ee.sphX*Ce+Ee.sphZ*Le,Ie=-Ee.sphX*Le+Ee.sphZ*Ce,nt=Ee.sphY;let ot=Ne,q=nt*it-Ie*st,Ue=nt*st+Ie*it;ot*=1+M,q*=1+M,Ue*=1+M;const ye=tt*Ee.driftSpeed+Ee.driftPhase,Oe=Math.sin(ye)*.8+Math.cos(ye*.5)*.4,Ge=Math.cos(ye*.8)*.8+Math.sin(ye*.4)*.4,Ae=Math.sin(ye*.7)*.9,Qe=Ee.spreadX+Oe,He=Ee.spreadY+Ge,Ct=Ee.spreadZ+Ae,ut=Math.min(1,Math.max(0,(N-Ee.spreadDelay*.35)/(1-Ee.spreadDelay*.35))),zn=ot+(Qe-ot)*ut,qn=q+(He-q)*ut,uo=Ue+(Ct-Ue)*ut;Ee.curX+=(zn-Ee.curX)*.088,Ee.curY+=(qn-Ee.curY)*.088,Ee.curZ+=(uo-Ee.curZ)*.088,re[ze]=Ee.curX,re[ze+1]=Ee.curY,re[ze+2]=Ee.curZ;const Ia=(Ee.curZ+4.5)/8,Ri=$c.clamp(.24+.95*Math.pow(Ia,1.2),.22,1.35);ge[ze]=Ee.baseR*Ri,ge[ze+1]=Ee.baseG*Ri,ge[ze+2]=Ee.baseB*Ri}B.attributes.position.needsUpdate=!0,B.attributes.color.needsUpdate=!0;const ve=me.attributes.position.array,_e=me.attributes.color.array;for(let Te=0;Te<H;Te++){const ze=Te*3,Ee=oe[Te],Ne=.35+.65*(.5+.5*Math.sin(tt*Ee.twinkleSpeed+Ee.twinklePhase)),Ie=Math.cos(tt*Ee.driftSpeed*.6+Ee.driftPhase)*.06,nt=Math.sin(tt*Ee.driftSpeed+Ee.driftPhase)*.06;ve[ze]=Ee.baseX+Ie,ve[ze+1]=Ee.baseY+nt;const ot=$c.clamp((Ee.baseZ+9)/12,.25,1.15);_e[ze]=Ee.baseR*Ne*ot,_e[ze+1]=Ee.baseG*Ne*ot,_e[ze+2]=Ee.baseB*Ne*ot}me.attributes.position.needsUpdate=!0,me.attributes.color.needsUpdate=!0,d.render(c,f),vt=requestAnimationFrame(Ht)};return vt=requestAnimationFrame(Ht),()=>{window.removeEventListener("mousemove",pe),window.removeEventListener("pointerdown",Pe),window.removeEventListener("resize",Se),cancelAnimationFrame(vt),t&&d.domElement&&t.contains(d.domElement)&&t.removeChild(d.domElement),d.dispose(),B.dispose(),ie.dispose(),me.dispose(),We.dispose(),J.dispose(),z.dispose(),xe.dispose()}},[]),y.jsx("div",{ref:o,className:"absolute inset-0 pointer-events-auto overflow-hidden z-0",children:y.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 48%, rgba(7, 26, 22, 0.38) 0%, rgba(7, 26, 22, 0.04) 55%, transparent 75%)"}})})}function Vw({onOpenJoin:o}){const[t,i]=rt.useState({x:0,y:0}),s=f=>{const{clientX:d,clientY:h}=f,p=d/window.innerWidth*2-1,m=h/window.innerHeight*2-1;i({x:p,y:m})},c=()=>{const f=document.getElementById("overview");f&&f.scrollIntoView({behavior:"smooth"})};return y.jsxs("section",{onMouseMove:s,className:"relative w-full min-h-screen flex flex-col justify-between items-center px-6 sm:px-12 pt-28 pb-10 bg-[#020617] overflow-hidden select-none",children:[y.jsx(Gw,{}),y.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[560px] rounded-full blur-[140px] opacity-45 transition-transform duration-1000 ease-out",style:{background:"radial-gradient(ellipse at center, rgba(56, 189, 248, 0.14) 0%, rgba(30, 58, 138, 0.35) 45%, rgba(11, 19, 43, 0.6) 70%, transparent 85%)",transform:`translate(calc(-50% + ${t.x*24}px), calc(-50% + ${t.y*24}px))`}}),y.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[320px] bg-[#38BDF8]/[0.04] rounded-full blur-[110px]"}),y.jsx("div",{className:"absolute top-2/3 right-1/4 w-[380px] h-[300px] bg-[#1E3A8A]/[0.10] rounded-full blur-[120px]"})]}),y.jsxs("div",{className:"relative z-10 my-auto flex flex-col items-center text-center max-w-5xl mx-auto py-8",children:[y.jsx("h1",{className:"font-display font-bold text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] tracking-tight leading-none select-none",style:{background:"linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 25px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 65px rgba(232, 202, 140, 0.25))"},children:"E-CELL"}),y.jsx("div",{className:"mt-6 sm:mt-8",children:y.jsx("p",{className:"font-mono text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.25em] sm:tracking-[0.32em] uppercase text-[#F8FAFC]/95 font-medium",children:"Walchand Institute of Technology"})}),y.jsx("div",{className:"mt-4",children:y.jsx("p",{className:"font-sans text-sm sm:text-base md:text-lg text-[#94A3B8] font-light tracking-wide max-w-lg",children:"Where ideas transform into tangible impact."})})]}),y.jsx("div",{className:"w-full max-w-7xl mx-auto flex items-end justify-center text-[11px] font-mono tracking-widest text-[#94A3B8]/70 relative z-10",children:y.jsxs("button",{onClick:c,className:"flex flex-col items-center gap-2.5 text-[10px] font-mono tracking-[0.25em] text-[#94A3B8]/70 hover:text-[#F8FAFC] transition-colors group cursor-pointer",children:[y.jsx("span",{children:"SCROLL TO EXPLORE"}),y.jsx("div",{className:"w-[1.5px] h-8 bg-white/10 overflow-hidden rounded-full",children:y.jsx("div",{className:"w-full h-full bg-[#38BDF8] animate-scroll-line"})})]})})]})}function kw(){const o=[{icon:kp,text:"1,500+ EVENT ATTENDEES"},{icon:Tl,text:"15+ EVENTS ORGANISED"},{icon:w_,text:"35+ STARTUPS PITCHED"},{icon:$M,text:"8+ STARTUPS FUNDED"},{icon:hM,text:"NATIONAL PODIUMS · IIT BOMBAY"},{icon:Al,text:"SOLAPUR, MAHARASHTRA"},{icon:b_,text:"HEXATECH & INDUSTRY PARTNERS"},{icon:Zr,text:"WALCHAND INSTITUTE OF TECHNOLOGY"}],t=[{value:"3x",label:"National Podiums",subtext:"NEC IIT Bombay Finals"},{value:"15+",label:"Events Organised",subtext:"Flagship Summits & Hackathons"},{value:"35+",label:"Startups Pitched",subtext:"To Angel & Seed Networks"},{value:"8",label:"Startups Funded",subtext:"Active Commercial Ventures"},{value:"2.5K",label:"Community Reach",subtext:"Engineers & Innovators"}];return y.jsxs("section",{className:"relative w-full bg-[#020617] text-[#F8FAFC] overflow-hidden select-none pt-16 sm:pt-20 lg:pt-24",children:[y.jsxs("div",{className:"relative w-full border-y border-white/[0.08] bg-[#050B18]/90 backdrop-blur-md py-4 overflow-hidden",children:[y.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"}),y.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"}),y.jsxs("div",{className:"animate-marquee items-center gap-10 sm:gap-14",children:[o.map((i,s)=>{const c=i.icon;return y.jsxs("div",{className:"flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-[#94A3B8] hover:text-[#38BDF8] transition-colors",children:[y.jsx(c,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:i.text}),y.jsx("span",{className:"text-white/20 ml-4 font-sans",children:"•"})]},`m1-${s}`)}),o.map((i,s)=>{const c=i.icon;return y.jsxs("div",{className:"flex items-center gap-2.5 shrink-0 text-xs sm:text-[13px] font-mono tracking-[0.2em] text-[#94A3B8] hover:text-[#38BDF8] transition-colors",children:[y.jsx(c,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:i.text}),y.jsx("span",{className:"text-white/20 ml-4 font-sans",children:"•"})]},`m2-${s}`)})]})]}),y.jsx("div",{className:"max-w-7xl mx-auto px-6 sm:px-12 pt-14 sm:pt-16 pb-8 sm:pb-10",children:y.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]",children:t.map((i,s)=>y.jsxs("div",{className:"group flex flex-col items-center justify-center text-center py-6 md:py-4 px-4 transition-all duration-300 hover:-translate-y-0.5",children:[y.jsx("span",{className:"font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]",children:i.value}),y.jsx("span",{className:"mt-3 sm:mt-3.5 font-mono text-xs sm:text-sm text-[#94A3B8] tracking-wide group-hover:text-[#38BDF8] transition-colors",children:i.label})]},s))})})]})}function Xw({onOpenJoin:o}){const t=rt.useRef(null),i=rt.useRef(null),s=rt.useRef(null),c=rt.useRef(null),f=rt.useRef(null),[d,h]=rt.useState(!1),[p,m]=rt.useState(!1),[_,v]=rt.useState(!1),g=rt.useRef({x:0,y:0,targetX:0,targetY:0}),E=()=>{const b=document.getElementById("vision-mission");if(b){const O=b.getBoundingClientRect().top+window.pageYOffset+-90;window.scrollTo({top:O,behavior:"smooth"}),v(!0)}};rt.useEffect(()=>{const b=new IntersectionObserver(S=>{S.forEach(O=>{O.target===s.current&&O.isIntersecting&&h(!0),O.target===c.current&&O.isIntersecting&&m(!0),O.target===f.current&&O.isIntersecting&&v(!0)})},{threshold:.18,rootMargin:"0px 0px -50px 0px"});return s.current&&b.observe(s.current),c.current&&b.observe(c.current),f.current&&b.observe(f.current),()=>b.disconnect()},[]),rt.useEffect(()=>{var ie,Y;const b=t.current;if(!b)return;const S=b.getContext("2d");if(!S)return;let O,W=b.width=((ie=b.parentElement)==null?void 0:ie.clientWidth)||window.innerWidth,R=b.height=((Y=b.parentElement)==null?void 0:Y.clientHeight)||2400;const U=["rgba(255, 255, 255, ","rgba(255, 255, 255, ","rgba(224, 242, 254, ","rgba(186, 230, 253, ","rgba(248, 230, 195, ","rgba(147, 197, 253, "],L=Math.max(1600,Math.floor(W*R/2200)),P=[];for(let H=0;H<L;H++){const j=Math.random()<.72?1:Math.random()<.92?2:3;P.push({baseX:Math.random()*W,baseY:Math.random()*R,layer:j,size:j===1?Math.random()*.55+.35:j===2?Math.random()*.75+.8:Math.random()*1.3+1.6,colorPrefix:U[Math.floor(Math.random()*U.length)],twinkleSpeed:.6+Math.random()*2.2,twinklePhase:Math.random()*Math.PI*2,baseAlpha:j===1?.3+Math.random()*.45:j===2?.6+Math.random()*.35:.85+Math.random()*.15,parallaxFactor:j===1?.015:j===2?.04:.08,hasSpikes:j===3&&Math.random()<.65})}const T=[];let F=0;const B=()=>{const H=Math.random()*W*.85+W*.05,j=Math.random()*R*.5,te=110+Math.random()*120,oe=Math.PI/4+(Math.random()-.5)*.35,me=14+Math.random()*8;T.push({x:H,y:j,dx:Math.cos(oe)*me,dy:Math.sin(oe)*me,length:te,life:1,decay:.024+Math.random()*.018})},V=H=>{const j=b.getBoundingClientRect(),te=(H.clientX-j.left-W/2)/(W/2),oe=(H.clientY-j.top-R/2)/(R/2);g.current.targetX=te*24,g.current.targetY=oe*24};window.addEventListener("mousemove",V);let K=0;const ae=()=>{K+=.016,g.current.x+=(g.current.targetX-g.current.x)*.05,g.current.y+=(g.current.targetY-g.current.y)*.05,S.clearRect(0,0,W,R),K-F>6+Math.random()*4&&(B(),F=K),P.forEach(H=>{const j=H.baseAlpha*(.55+.45*Math.sin(K*H.twinkleSpeed+H.twinklePhase)),te=(H.baseX+g.current.x*H.parallaxFactor+W)%W,oe=(H.baseY+g.current.y*H.parallaxFactor+R)%R;if(S.beginPath(),S.arc(te,oe,H.size,0,Math.PI*2),S.fillStyle=`${H.colorPrefix}${j})`,S.fill(),H.hasSpikes){const me=H.size*3.5*j;S.strokeStyle=`${H.colorPrefix}${j*.5})`,S.lineWidth=.7,S.beginPath(),S.moveTo(te-me,oe),S.lineTo(te+me,oe),S.moveTo(te,oe-me),S.lineTo(te,oe+me),S.stroke(),S.beginPath(),S.arc(te,oe,H.size*2.2,0,Math.PI*2),S.fillStyle=`${H.colorPrefix}${j*.18})`,S.fill()}});for(let H=T.length-1;H>=0;H--){const j=T[H],te=j.x-j.dx/Math.hypot(j.dx,j.dy)*j.length,oe=j.y-j.dy/Math.hypot(j.dx,j.dy)*j.length,me=S.createLinearGradient(j.x,j.y,te,oe);me.addColorStop(0,`rgba(255, 255, 255, ${j.life*.95})`),me.addColorStop(.35,`rgba(56, 189, 248, ${j.life*.75})`),me.addColorStop(1,"rgba(56, 189, 248, 0)"),S.beginPath(),S.moveTo(j.x,j.y),S.lineTo(te,oe),S.strokeStyle=me,S.lineWidth=1.6,S.stroke(),j.x+=j.dx,j.y+=j.dy,j.life-=j.decay,j.life<=0&&T.splice(H,1)}O=requestAnimationFrame(ae)};ae();const J=new ResizeObserver(H=>{for(let j of H)W=b.width=j.contentRect.width,R=b.height=j.contentRect.height});return b.parentElement&&J.observe(b.parentElement),()=>{cancelAnimationFrame(O),J.disconnect(),window.removeEventListener("mousemove",V)}},[]);const C={background:"linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 62%, #F6EBCE 82%, #E8CA8C 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 2px 20px rgba(246, 227, 180, 0.14))"},D={background:"linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))"};return y.jsxs("section",{id:"overview",ref:i,className:"relative pt-12 sm:pt-16 pb-28 sm:pb-36 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none",children:[y.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full pointer-events-none z-0"}),y.jsx("div",{className:"absolute top-[12%] left-[4%] w-[700px] h-[600px] bg-[#1E3A8A]/[0.15] rounded-full blur-[160px] pointer-events-none"}),y.jsx("div",{className:"absolute top-[42%] right-[4%] w-[650px] h-[550px] bg-[#0284C7]/[0.06] rounded-full blur-[170px] pointer-events-none"}),y.jsx("div",{className:"absolute bottom-[10%] left-[20%] w-[800px] h-[550px] bg-[#0B132B]/[0.65] rounded-full blur-[180px] pointer-events-none"}),y.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto space-y-20 sm:space-y-28",children:[y.jsx("div",{ref:s,className:`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${d?"opacity-100 translate-x-0 blur-0":"opacity-0 -translate-x-24 sm:-translate-x-32 blur-[2px] pointer-events-none"}`,children:y.jsxs("div",{className:"w-full max-w-5xl text-left",children:[y.jsx("h2",{className:"font-sans font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] tracking-wider uppercase select-none mb-3",style:D,children:"ABOUT US"}),y.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight leading-snug mb-5",style:C,children:"The startup heartbeat of WIT Solapur."}),y.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#CBD5E1] font-light leading-relaxed tracking-wide max-w-4xl",children:"E-Cell WIT is the premier student-driven entrepreneurship and innovation platform at Walchand Institute of Technology, Solapur. We provide the complete launchpad for young inquisitive minds to identify problems worth solving, transform concepts into durable ventures, and connect directly with alumni founders, angel networks, and national startup ecosystems."})]})}),y.jsx("div",{ref:c,className:`transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${p?"opacity-100 translate-x-0 blur-0":"opacity-0 translate-x-24 sm:translate-x-32 blur-[2px] pointer-events-none"}`,children:y.jsxs("div",{className:"w-full max-w-5xl ml-auto text-left sm:text-right",children:[y.jsx("h2",{className:"font-sans font-extrabold text-3xl sm:text-4xl md:text-[2.75rem] tracking-wider uppercase select-none mb-3",style:D,children:"OUR MOTTO"}),y.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight leading-snug mb-5 max-w-4xl sm:ml-auto",style:C,children:"“Dream with vision. Build with rigor. Launch with impact.”"}),y.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#CBD5E1] font-light leading-relaxed tracking-wide max-w-4xl sm:ml-auto",children:"At Walchand Institute of Technology, we believe true entrepreneurship isn’t just about pitching ideas—it is about looking at real-world friction with the engineering courage to build solutions that endure. Every engineer who walks through our doors is challenged to think beyond the classroom, prototype relentlessly, and engineer value that lasts."}),y.jsx("div",{className:"mt-8 flex sm:justify-end",children:y.jsxs("button",{onClick:E,className:"group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-[#F3E1B6]/50 hover:border-[#F3E1B6] bg-[#F3E1B6]/10 hover:bg-[#F3E1B6] text-[#F3E1B6] hover:text-[#020617] font-mono text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_24px_rgba(243,225,182,0.22)] hover:shadow-[0_0_36px_rgba(243,225,182,0.55)] active:scale-95 cursor-pointer",children:[y.jsx("span",{children:"OUR MISSION"}),y.jsx(_l,{className:"w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"})]})})]})}),y.jsxs("div",{id:"vision-mission",ref:f,className:"pt-20 sm:pt-28 scroll-mt-28",children:[y.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-14 sm:mb-20",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2 mb-3",children:[y.jsx("span",{className:"w-6 h-[1.5px] bg-[#38BDF8]"}),y.jsx("span",{className:"text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold",children:"WHAT DRIVES US"}),y.jsx("span",{className:"w-6 h-[1.5px] bg-[#38BDF8]"})]}),y.jsx("h2",{className:"font-sans font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-4 select-none",style:D,children:"Vision & Mission"}),y.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed max-w-2xl mx-auto",children:"Our compass for building a generation of problem-solvers, risk-takers, and value creators across WIT Solapur."})]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10",children:[y.jsxs("div",{className:`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#081226]/60 hover:bg-[#0C1B38]/85 border border-white/[0.08] hover:border-[#38BDF8]/50 transition-all duration-700 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.22)] hover:-translate-y-2 overflow-hidden transform ${_?"opacity-100 translate-y-0 translate-x-0":"opacity-0 translate-y-12 -translate-x-8 pointer-events-none"}`,children:[y.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),y.jsx("div",{className:"absolute -top-24 -left-24 w-52 h-52 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"}),y.jsxs("div",{className:"relative z-10",children:[y.jsx("div",{className:"relative w-14 h-14 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_20px_rgba(56,189,248,0.18)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]",children:y.jsx(NM,{className:"w-6 h-6 text-[#38BDF8] transition-transform duration-300 group-hover:scale-110"})}),y.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 group-hover:text-[#BAE6FD] transition-colors",children:"Our Vision"}),y.jsx("p",{className:"text-sm sm:text-base text-[#CBD5E1] font-light leading-relaxed mb-8",children:"Transforming learners into visionary entrepreneurs by nurturing a mindset that identifies opportunities and drives innovation — leading to value creation. To provide a platform where aspiring entrepreneurs can nurture their creative ideas and transform them into viable business ventures."}),y.jsxs("div",{className:"space-y-3 pt-6 border-t border-white/[0.07]",children:[y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"National recognition through NEC IIT Bombay"})]}),y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"A startup-first campus culture at WIT Solapur"})]}),y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"Bridging local engineering talent to global platforms"})]})]})]})]}),y.jsxs("div",{className:`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#081226]/60 hover:bg-[#0C1B38]/85 border border-white/[0.08] hover:border-[#F3E1B6]/50 transition-all duration-700 delay-200 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(243,225,182,0.22)] hover:-translate-y-2 overflow-hidden transform ${_?"opacity-100 translate-y-0 translate-x-0":"opacity-0 translate-y-12 translate-x-8 pointer-events-none"}`,children:[y.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F3E1B6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),y.jsx("div",{className:"absolute -top-24 -right-24 w-52 h-52 bg-[#F3E1B6]/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700"}),y.jsxs("div",{className:"relative z-10",children:[y.jsx("div",{className:"relative w-14 h-14 rounded-2xl bg-[#F3E1B6]/10 border border-[#F3E1B6]/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_20px_rgba(243,225,182,0.18)] group-hover:shadow-[0_0_30px_rgba(243,225,182,0.4)]",children:y.jsx(QM,{className:"w-6 h-6 text-[#F3E1B6] transition-transform duration-300 group-hover:scale-110"})}),y.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4 group-hover:text-[#FDFAD2] transition-colors",children:"Our Mission"}),y.jsx("p",{className:"text-sm sm:text-base text-[#CBD5E1] font-light leading-relaxed mb-8",children:"To foster a vibrant and supportive environment for aspiring entrepreneurs within our institute — empowering students and nurturing innovations to create a thriving entrepreneurial ecosystem that benefits both our college community and the wider economy."}),y.jsxs("div",{className:"space-y-3 pt-6 border-t border-white/[0.07]",children:[y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"Hands-on entrepreneurship education & maker labs"})]}),y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"Mentorship from IIT Bombay & serial founders"})]}),y.jsxs("div",{className:"group/item flex items-start gap-3.5 text-xs sm:text-sm text-[#E2E8F0] font-mono transition-all duration-300 hover:translate-x-1.5 p-1.5 -mx-1.5 rounded-lg hover:bg-white/[0.03] cursor-default",children:[y.jsx(aa,{className:"w-4 h-4 text-[#F3E1B6] shrink-0 mt-0.5 transition-transform duration-300 group-hover/item:scale-125"}),y.jsx("span",{className:"transition-colors group-hover/item:text-white",children:"Pitch competitions & venture capital funding exposure"})]})]})]})]})]})]})]})]})}const Ww=["ALL","FLAGSHIP","HACKATHONS","WORKSHOPS","COMPETITIONS","TALKS"],jw=[{id:"event-illuminate",title:"Illuminate 1.0",category:"WORKSHOPS",date:"AUGUST 2024",isoDate:"2024-08-10T10:00:00",venue:"Main Auditorium, WIT Campus",isUpcoming:!1,badge:"COMPLETED",metric:"100+ Attendees",description:"An entrepreneurship workshop conducted in collaboration with E-Cell IIT Bombay. 100+ attendees received entrepreneurship kits and learned startup fundamentals, business modeling, and problem discovery.",image:"",tags:["Workshop","E-Cell IIT Bombay","Startup Kits","Ideation"],registrationUrl:"#completed",highlights:["Official collaboration with E-Cell IIT Bombay","Hands-on startup ideation & Business Model Canvas kits","Direct interactive session on customer discovery","Over 100+ student attendees across departments"],schedule:[{time:"10:00 AM",title:"Keynote & Inception: What Makes a Real Founder"},{time:"11:30 AM",title:"Hands-on Workshop: Business Model Canvas & Market Sizing"},{time:"02:30 PM",title:"Rapid Pitch Clinic & Mentor Critique"}],prizes:[{place:"Top Concept",reward:"IIT Bombay E-Summit Delegate Passes"}],faqs:[{q:"Was certification provided?",a:"Yes, all verified attendees received certificates backed by E-Cell WIT and partnered initiatives."}]},{id:"event-web-wizards",title:"Web Wizards Hackathon",category:"HACKATHONS",date:"AUGUST 2024",isoDate:"2024-08-22T09:00:00",venue:"Computing & AI Labs, WIT Solapur",isUpcoming:!1,badge:"COMPLETED",metric:"32+ Teams Competing",description:"A dedicated website building competition testing participants' technical skills, creativity, and ability to ship a product under pressure with modern web frameworks and design systems.",image:"",tags:["Hackathon","Web Development","UI/UX","Rapid Shipping"],registrationUrl:"#completed",highlights:["32+ student teams built and deployed live web apps","Judged by senior alumni engineers and industry developers","Focus on responsive UX, clean architecture, and performance","Live deployment demo rounds"],schedule:[{time:"09:00 AM",title:"Problem Statement Unveiling & Sprint Kickoff"},{time:"01:00 PM",title:"Milestone Review 1: Architecture & Wireframes"},{time:"05:00 PM",title:"Final Live Deployments & Jury Evaluation"}],prizes:[{place:"1st Place",reward:"Cash Prize & Fast-track Internship Interviews"},{place:"Runner Up",reward:"Tech Gear & Goodies Bundle"}],faqs:[{q:"What tech stack was permitted?",a:"React, Next.js, Vue, Tailwind CSS, or Vanilla HTML/CSS/JS."}]},{id:"event-flyer-fiesta",title:"Flyer Fiesta",category:"COMPETITIONS",date:"AUGUST 2024",isoDate:"2024-08-28T14:00:00",venue:"Seminar Hall, Central Block",isUpcoming:!1,badge:"COMPLETED",metric:"50+ Creative Entries",description:"A creative poster-making competition challenging students to design compelling event flyers and visual brand identities that capture customer attention in high-noise environments.",image:"",tags:["Design","Branding","Creativity","Visual Identity"],registrationUrl:"#completed",highlights:["50+ individual and team design submissions","Workshops on typography, color theory, and advertising psychology","Live stage felicitation and showcase of top winning flyers","Jury comprised of creative leads and faculty mentors"],schedule:[{time:"02:00 PM",title:"Design Brief: Campaign Prompt Revealed"},{time:"04:30 PM",title:"Final Poster Submissions & Gallery Walk"},{time:"05:15 PM",title:"Awards Ceremony & Stage Felicitation"}],prizes:[{place:"Best Visual Storytelling",reward:"Award Trophy & Creative Software Subscriptions"},{place:"Most Viral Design",reward:"Cash Voucher & Official E-Cell Design Lead Role"}],faqs:[{q:"What design tools were used?",a:"Figma, Adobe Illustrator, Photoshop, and Canva were all supported."}]},{id:"event-pitch-arena",title:"WIT Pitch Arena 2026",category:"FLAGSHIP",date:"OCTOBER 28, 2026",isoDate:"2026-10-28T10:00:00",venue:"Seminar Hall 1, WIT Campus",isUpcoming:!0,badge:"REGISTRATION OPEN",metric:"₹75,000 Cash Grants",description:"Battlefield for student prototypes. Present your 5-minute pitch deck before active angel investors and get direct equity-free validation and seed support.",image:"",tags:["Pitching","Equity-Free Grants","Angel Feedback"],registrationUrl:"#register",highlights:["Direct pitching to seed investors and alumni angels","5-minute pitch + 5-minute grill QA format","Equity-free proof-of-concept cash grants","Incubation slots at WIT Maker Space"],schedule:[{time:"10:00 AM",title:"Pitch Briefing & Rules"},{time:"10:45 AM",title:"Pitches: Alpha Cohort (8 Teams)"},{time:"02:00 PM",title:"Pitches: Beta Cohort (8 Teams)"},{time:"04:00 PM",title:"Results & Cheque Distribution"}],prizes:[{place:"Winner",reward:"₹50,000 Cash Grant"},{place:"Runner-Up",reward:"₹25,000 Cash Grant"}],faqs:[{q:"What should the pitch deck contain?",a:"Problem, Solution, Target Market, Traction/Prototype, Business Model, and Team."}]},{id:"event-build-a-thon",title:"Build-A-Thon: 36H Sprint",category:"HACKATHONS",date:"NOVEMBER 08-09, 2026",isoDate:"2026-11-08T08:00:00",venue:"Innovation Labs, Central Block",isUpcoming:!0,badge:"UPCOMING",metric:"36H Non-Stop Sprint",description:"36 hours of continuous rapid prototyping. Turn microcontrollers, sensors, LLM APIs, and algorithms into working industrial-grade hardware and software prototypes.",image:"",tags:["Hardware","Applied AI","Rapid Prototyping"],registrationUrl:"#register",highlights:["Hardware maker kits & 3D printers available on-site","Dedicated mentors from alumni IoT & AI startups","Midnight code audits & energy fuel stations","Live expo with industry CTOs"],schedule:[{time:"08:00 AM",title:"Sprint Kickoff & Problem Statements Revealed"},{time:"02:00 PM",title:"Mentorship Review 1"},{time:"11:00 PM",title:"Midnight Code Audit"},{time:"03:00 PM (Day 2)",title:"Expo & Live Demos"}],prizes:[{place:"Grand Prize",reward:"₹60,000 + Lab Sponsorship"},{place:"Best AI Innovation",reward:"₹40,000"}],faqs:[{q:"Are hardware kits supplied?",a:"Basic microcontrollers (ESP32, sensors) are available on loan in the lab; teams may bring specialized boards."}]},{id:"event-patent-clinic",title:"Patent & IP Clinic",category:"WORKSHOPS",date:"JANUARY 18, 2025",isoDate:"2025-01-18T11:00:00",venue:"WIT Library Hall",isUpcoming:!1,badge:"COMPLETED",metric:"18+ Patents Drafted",description:"Patent attorneys guided 18 student engineering teams through prior-art searches, novelty claims, and provisional patent draft filings for their capstone projects.",image:"",tags:["Patents","IPR","Engineering Projects"],registrationUrl:"#completed",highlights:["Guided by certified Indian Patent Attorneys","Prior-art search hands-on training using patent databases","Provisional drafting clinics for final year capstone projects","Government filing fee subsidization pathways"],schedule:[{time:"11:00 AM",title:"What is Patentable: Novelty, Utility & Non-obviousness"},{time:"01:30 PM",title:"Hands-on Prior Art Searching Workshop"},{time:"03:30 PM",title:"1-on-1 Invention Disclosure Consultations"}],prizes:[{place:"Top Novelty Inventions",reward:"College Patent Filing Sponsorship"}],faqs:[{q:"Can software be patented?",a:"Attorneys covered Indian patent law regarding computer-related inventions (CRIs) and technical effects."}]}];function qw({onSelectEvent:o,onRegisterEvent:t}){const[i,s]=rt.useState("ALL"),[c,f]=rt.useState(!1),d=rt.useRef(null);rt.useEffect(()=>{const _=new IntersectionObserver(([v])=>{v.isIntersecting&&f(!0)},{threshold:.15,rootMargin:"0px 0px -40px 0px"});return d.current&&_.observe(d.current),()=>_.disconnect()},[]);const h=jw.filter(_=>i==="ALL"?!0:_.category===i),p={background:"linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))"},m=_=>{switch(_){case"HACKATHONS":return AM;case"COMPETITIONS":return WM;case"FLAGSHIP":return Vp;default:return kp}};return y.jsxs("section",{id:"events",ref:d,className:"relative py-24 sm:py-32 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20",children:[y.jsx("div",{className:"absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#1E3A8A]/[0.12] rounded-full blur-[170px] pointer-events-none"}),y.jsx("div",{className:"absolute bottom-[10%] right-[-10%] w-[650px] h-[600px] bg-[#0284C7]/[0.06] rounded-full blur-[180px] pointer-events-none"}),y.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[y.jsxs("div",{className:"text-left mb-12 sm:mb-16",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[y.jsx("span",{className:"w-6 h-[1.5px] bg-[#38BDF8]"}),y.jsx("span",{className:"text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold",children:"CAMPUS INITIATIVES & EVENTS"})]}),y.jsx("h2",{className:"font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-3 select-none",style:p,children:"Events & Initiatives 2024–26"}),y.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed max-w-2xl",children:"Click any event to explore full details, flow, speakers & impact."})]}),y.jsx("div",{className:"flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar",children:Ww.map(_=>{const v=i===_;return y.jsx("button",{onClick:()=>s(_),className:`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shrink-0 cursor-pointer ${v?"bg-[#38BDF8] text-[#020617] shadow-[0_0_25px_rgba(56,189,248,0.45)]":"bg-[#081226]/80 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-[#38BDF8]/30 hover:bg-[#0B1733]"}`,children:_},_)})}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8",children:h.map((_,v)=>{const g=m(_.category);return y.jsxs("div",{onClick:()=>o==null?void 0:o(_),className:`group relative flex flex-col justify-between rounded-3xl bg-[#081226]/60 hover:bg-[#0B1A3A]/90 border border-white/[0.08] hover:border-[#38BDF8]/50 transition-all duration-500 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.22)] hover:-translate-y-2 overflow-hidden cursor-pointer transform ${c?"opacity-100 translate-y-0":"opacity-0 translate-y-12"}`,style:{transitionDelay:`${v*80}ms`},children:[y.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),y.jsx("div",{className:"absolute -top-20 -right-20 w-44 h-44 bg-[#38BDF8]/[0.07] rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700"}),y.jsxs("div",{children:[y.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-[#030816]",children:[_.image?y.jsxs(y.Fragment,{children:[y.jsx("img",{src:_.image,alt:_.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:E=>{E.currentTarget.style.display="none"}}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#081226] via-transparent to-black/25 pointer-events-none"})]}):y.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-[#0B1A3A]/70 via-[#071329] to-[#020617] border-b border-white/[0.05] p-6 text-center overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"}),y.jsx("div",{className:"absolute w-36 h-36 bg-[#38BDF8]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"}),y.jsx("div",{className:"relative w-12 h-12 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#38BDF8]/60 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.15)]",children:y.jsx(g,{className:"w-5 h-5 text-[#38BDF8]"})}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center",children:[y.jsx("span",{className:"text-[11px] font-mono uppercase tracking-[0.2em] text-[#BAE6FD] font-semibold",children:_.title}),y.jsxs("span",{className:"text-[10px] font-mono text-[#94A3B8]/80 mt-1 flex items-center gap-1",children:[y.jsx(Zr,{className:"w-2.5 h-2.5 text-[#38BDF8]/60"}),"Add event photo in /public/assets/events/"]})]})]}),y.jsx("div",{className:"absolute top-3.5 right-3.5 z-10",children:_.badge==="COMPLETED"?y.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-[#94A3B8] uppercase font-bold",children:[y.jsx(aa,{className:"w-3 h-3 text-[#38BDF8]"}),y.jsx("span",{children:"COMPLETED"})]}):y.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/20 backdrop-blur-md border border-[#38BDF8]/50 text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"}),y.jsx("span",{children:_.badge||"UPCOMING"})]})})]}),y.jsxs("div",{className:"p-6 sm:p-7",children:[y.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#94A3B8] tracking-wider uppercase mb-2",children:[y.jsx(Tl,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:_.date})]}),y.jsx("h3",{className:"font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#BAE6FD] transition-colors tracking-tight mb-3",children:_.title}),y.jsx("p",{className:"text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed line-clamp-3",children:_.description})]})]}),y.jsxs("div",{className:"px-6 sm:px-7 py-4 border-t border-white/[0.07] flex items-center justify-between text-xs font-mono text-[#94A3B8] bg-white/[0.01]",children:[y.jsxs("div",{className:"flex items-center gap-2 group-hover:text-[#38BDF8] transition-colors",children:[y.jsx(g,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:_.metric||"Explore Overview"})]}),y.jsx("div",{className:"w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#38BDF8]/20 border border-white/10 group-hover:border-[#38BDF8]/40 flex items-center justify-center transition-all",children:y.jsx(_l,{className:"w-3.5 h-3.5 text-[#94A3B8] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"})})]})]},_.id)})})]})]})}const Yw=["ALL","COMPETITIONS","HACKATHONS","WORKSHOPS","TEAM MOMENTS","CONCLAVES"],Eu=[{id:"gal-1",title:"WEC 2025 Runner-Up",caption:"2nd Runner-up · KIT Kolhapur felicitation ceremony",category:"COMPETITIONS",date:"JANUARY 2025",location:"KIT Kolhapur",image:"",featured:!0},{id:"gal-2",title:"NEC IIT Bombay Finals",caption:"Representing WIT Solapur at National Entrepreneurship Challenge",category:"COMPETITIONS",date:"DECEMBER 2024",location:"IIT Bombay, Powai",image:"",featured:!0},{id:"gal-3",title:"Web Wizards Hackathon Arena",caption:"Late-night sprint deployments with 32+ teams coding live",category:"HACKATHONS",date:"AUGUST 2024",location:"Computing Labs, WIT",image:"",featured:!1},{id:"gal-4",title:"Flyer Fiesta Grand Finale",caption:"Stage showcase and felicitation of winning brand designs",category:"COMPETITIONS",date:"AUGUST 2024",location:"Central Block Seminar Hall",image:"",featured:!1},{id:"gal-5",title:"Illuminate 1.0 Workshop",caption:"Entrepreneurship kit distribution & discovery sessions",category:"WORKSHOPS",date:"AUGUST 2024",location:"Main Auditorium, WIT",image:"",featured:!0},{id:"gal-6",title:"Annual Core Team Induction",caption:"Welcoming student coordinators and leads into E-Cell WIT verticals",category:"TEAM MOMENTS",date:"SEPTEMBER 2024",location:"Campus Grounds",image:"",featured:!1},{id:"gal-7",title:"Maker Lab Prototyping Day",caption:"Hands-on rapid prototyping and maker sprint with student inventors",category:"WORKSHOPS",date:"OCTOBER 2024",location:"WIT Maker Space",image:"",featured:!1},{id:"gal-8",title:"Alumni Founders Roundtable",caption:"Fireside discussion with seed-funded engineering alumni & mentors",category:"CONCLAVES",date:"NOVEMBER 2024",location:"Executive Boardroom",image:"",featured:!0}];function Zw({isOpen:o,items:t,currentIndex:i,onClose:s,onNext:c,onPrev:f,onSelectIndex:d}){if(rt.useEffect(()=>{if(!o)return;const p=m=>{m.key==="Escape"&&s(),m.key==="ArrowRight"&&c(),m.key==="ArrowLeft"&&f()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[o,c,f,s]),!o||!t||t.length===0)return null;const h=t[i]||t[0];return y.jsxs("div",{className:"fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-300 select-none",onClick:s,children:[y.jsxs("div",{className:"flex items-center justify-between z-20 max-w-7xl mx-auto w-full",onClick:p=>p.stopPropagation(),children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("span",{className:"px-3.5 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-xs font-semibold uppercase tracking-wider",children:h.category}),y.jsxs("span",{className:"text-xs font-mono text-[#94A3B8]",children:[i+1," of ",t.length]})]}),y.jsx("button",{onClick:s,className:"p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#94A3B8] hover:text-white border border-white/10 transition-colors cursor-pointer","aria-label":"Close Lightbox",children:y.jsx(zu,{className:"w-5 h-5"})})]}),y.jsxs("div",{className:"relative flex-1 flex items-center justify-center my-4 sm:my-6 max-w-6xl mx-auto w-full",onClick:p=>p.stopPropagation(),children:[y.jsx("button",{onClick:f,className:"absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95","aria-label":"Previous image",children:y.jsx(M_,{className:"w-6 h-6"})}),y.jsx("div",{className:"relative max-h-[65vh] sm:max-h-[70vh] w-full flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 bg-[#081226]/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)]",children:h.image?y.jsx("img",{src:h.image,alt:h.title,className:"max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-2xl transition-all duration-300",onError:p=>{p.currentTarget.style.display="none"}}):y.jsxs("div",{className:"w-full min-h-[350px] sm:min-h-[460px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/80 via-[#071329] to-[#020617] relative text-center",children:[y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none"}),y.jsx("div",{className:"w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(56,189,248,0.25)]",children:y.jsx(Zr,{className:"w-8 h-8 text-[#38BDF8]"})}),y.jsx("h3",{className:"text-xl sm:text-2xl font-sans font-bold text-white mb-2",children:h.title}),y.jsx("p",{className:"text-sm text-[#94A3B8] font-mono max-w-md",children:h.caption}),y.jsx("div",{className:"mt-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#38BDF8]",children:"Place your photograph in public/assets/gallery/"})]})}),y.jsx("button",{onClick:c,className:"absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md transition-all duration-200 cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95","aria-label":"Next image",children:y.jsx(E_,{className:"w-6 h-6"})})]}),y.jsxs("div",{className:"max-w-5xl mx-auto w-full z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10",onClick:p=>p.stopPropagation(),children:[y.jsxs("div",{children:[y.jsx("h2",{className:"font-sans font-bold text-lg sm:text-xl text-white",children:h.title}),y.jsx("p",{className:"text-xs sm:text-sm text-[#94A3B8] font-light mt-0.5",children:h.caption}),y.jsxs("div",{className:"flex items-center gap-4 mt-2 text-xs font-mono text-[#64748B]",children:[h.date&&y.jsxs("span",{className:"flex items-center gap-1.5",children:[y.jsx(Tl,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.date]}),h.location&&y.jsxs("span",{className:"flex items-center gap-1.5",children:[y.jsx(Al,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),h.location]})]})]}),y.jsx("div",{className:"flex items-center gap-2 overflow-x-auto pb-1 max-w-full sm:max-w-md",children:t.map((p,m)=>y.jsx("button",{onClick:()=>d(m),className:`relative shrink-0 w-12 h-12 rounded-xl overflow-hidden border transition-all cursor-pointer ${m===i?"border-[#38BDF8] ring-2 ring-[#38BDF8]/40 scale-105":"border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"}`,children:p.image?y.jsx("img",{src:p.image,alt:p.title,className:"w-full h-full object-cover"}):y.jsx("div",{className:"w-full h-full bg-[#081226] flex items-center justify-center text-[10px] font-mono text-[#38BDF8]",children:m+1})},p.id))})]})]})}function Kw(){const[o,t]=rt.useState("ALL"),[i,s]=rt.useState(0),[c,f]=rt.useState(!1),[d,h]=rt.useState(null),[p,m]=rt.useState({x:0,y:0}),[_,v]=rt.useState(!1),[g,E]=rt.useState(0),C=rt.useRef(null),D=2600,b=rt.useMemo(()=>o==="ALL"?Eu:Eu.filter(B=>B.category===o),[o]),S=b.length;rt.useEffect(()=>{s(0)},[o]);const O=rt.useCallback(()=>{s(B=>(B+1)%S)},[S]),W=rt.useCallback(()=>{s(B=>B===0?S-1:B-1)},[S]);rt.useEffect(()=>{if(c||S<=1)return;const B=setInterval(()=>{O()},D);return()=>clearInterval(B)},[c,S,O]);const R=B=>{const V=B.currentTarget.getBoundingClientRect(),K=B.clientX-V.left-V.width/2,ae=B.clientY-V.top-V.height/2;m({x:-(ae/V.height)*12,y:K/V.width*12})},U=()=>{m({x:0,y:0}),f(!1)},L=B=>{h(B.clientX||B.touches&&B.touches[0].clientX)},P=B=>{if(d===null)return;const V=B.clientX||B.changedTouches&&B.changedTouches[0].clientX,K=d-V;K>45&&O(),K<-45&&W(),h(null)},T=B=>{E(B),v(!0)},F={background:"linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))"};return y.jsxs("section",{id:"gallery",className:"relative py-28 sm:py-36 px-4 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20",children:[y.jsx("div",{className:"absolute top-[10%] right-[-10%] w-[700px] h-[700px] bg-[#1E3A8A]/[0.12] rounded-full blur-[200px] pointer-events-none"}),y.jsx("div",{className:"absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] bg-[#0284C7]/[0.08] rounded-full blur-[200px] pointer-events-none"}),y.jsxs("div",{className:"max-w-7xl mx-auto relative z-10",children:[y.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-10 sm:mb-14",children:[y.jsxs("div",{className:"flex items-center justify-center gap-2 mb-3",children:[y.jsx("span",{className:"w-6 h-[1.5px] bg-[#38BDF8]"}),y.jsx("span",{className:"text-xs font-mono tracking-[0.28em] text-[#38BDF8] uppercase font-semibold",children:"MOMENTS & MILESTONES"}),y.jsx("span",{className:"w-6 h-[1.5px] bg-[#38BDF8]"})]}),y.jsx("h2",{className:"font-sans font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4",style:F,children:"Our Gallery"}),y.jsx("p",{className:"text-sm sm:text-base md:text-lg text-[#94A3B8] font-light leading-relaxed",children:"Snapshots from events, competitions, and the journey that made us."})]}),y.jsx("div",{className:"flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-14 no-scrollbar",children:Yw.map(B=>{const V=o===B,K=B==="ALL"?Eu.length:Eu.filter(ae=>ae.category===B).length;return y.jsxs("button",{onClick:()=>t(B),className:`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-semibold transition-all duration-300 shrink-0 cursor-pointer ${V?"bg-[#38BDF8] text-[#020617] shadow-[0_0_25px_rgba(56,189,248,0.5)] scale-105":"bg-[#081226]/80 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/[0.08] hover:border-[#38BDF8]/30 hover:bg-[#0B1733]"}`,children:[y.jsx("span",{children:B}),y.jsxs("span",{className:"ml-1.5 text-[10px] opacity-75 font-mono",children:["(",K,")"]})]},B)})}),y.jsxs("div",{ref:C,onMouseEnter:()=>f(!0),onMouseLeave:U,onMouseDown:L,onMouseUp:P,onTouchStart:L,onTouchEnd:P,className:"relative w-full h-[460px] sm:h-[540px] md:h-[600px] flex items-center justify-center perspective-[1400px] cursor-grab active:cursor-grabbing",style:{perspective:"1400px"},children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[360px] bg-[#38BDF8]/[0.12] rounded-full blur-[140px] pointer-events-none"}),b.map((B,V)=>{let K=V-i;K>S/2&&(K-=S),K<-S/2&&(K+=S);const ae=K===0,J=K===-1,ie=K===1,Y=K===-2,H=K===2,j=Math.abs(K)<=2;let te="0%",oe="0px",me=0,We=1,je=0,z=0;return ae?(te="0%",oe="120px",me=p.y,We=1,je=1,z=40):ie?(te="calc(62% + 20px)",oe="-80px",me=-28,We=.85,je=.65,z=25):J?(te="calc(-62% - 20px)",oe="-80px",me=28,We=.85,je=.65,z=25):H?(te="calc(110% + 40px)",oe="-220px",me=-45,We=.7,je=.22,z=10):Y&&(te="calc(-110% - 40px)",oe="-220px",me=45,We=.7,je=.22,z=10),y.jsxs("div",{onClick:()=>{ae?T(V):s(V)},onMouseMove:ae?R:void 0,className:`absolute w-[88vw] sm:w-[500px] md:w-[620px] lg:w-[680px] aspect-[16/10] rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${ae?"cursor-pointer ring-1 ring-[#38BDF8]/60 shadow-[0_25px_70px_rgba(2,6,23,0.95),0_0_55px_rgba(56,189,248,0.28)]":"cursor-pointer hover:opacity-85 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"}`,style:{transform:`translateX(${te}) translateZ(${oe}) rotateY(${me}deg) ${ae?`rotateX(${p.x}deg)`:""} scale(${We})`,opacity:j?je:0,zIndex:z,pointerEvents:j?"auto":"none",transformStyle:"preserve-3d"},children:[y.jsx("div",{className:`absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500 z-30 ${ae?"bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-100":"opacity-0"}`}),y.jsxs("div",{className:"relative w-full h-full bg-[#030816] overflow-hidden",children:[B.image?y.jsx("img",{src:B.image,alt:B.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",onError:xe=>{xe.currentTarget.style.display="none"}}):y.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/95 via-[#071329] to-[#020617] relative text-center",children:[y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#38BDF8_1.2px,transparent_1.2px)] [background-size:22px_22px] opacity-25 pointer-events-none"}),y.jsx("div",{className:"absolute w-44 h-44 bg-[#38BDF8]/15 rounded-full blur-3xl pointer-events-none"}),y.jsx("div",{className:"relative w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mb-4 shadow-[0_0_35px_rgba(56,189,248,0.35)]",children:y.jsx(xM,{className:"w-8 h-8 text-[#38BDF8]"})}),y.jsxs("div",{className:"relative z-10",children:[y.jsx("span",{className:"text-sm font-mono uppercase tracking-[0.25em] text-[#BAE6FD] font-semibold block",children:B.title}),y.jsxs("span",{className:"text-[11px] font-mono text-[#94A3B8] mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10",children:[y.jsx(Zr,{className:"w-3 h-3 text-[#38BDF8]"}),"Add photo in public/assets/gallery/"]})]})]}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-black/35 pointer-events-none z-10"}),y.jsxs("div",{className:"absolute top-5 left-5 right-5 flex items-center justify-between z-20 pointer-events-none",children:[y.jsx("span",{className:"px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest uppercase text-[#38BDF8] font-bold shadow-md",children:B.category}),ae&&y.jsx("div",{className:"w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-[#38BDF8] hover:text-[#020617] transition-colors shadow-md",children:y.jsx(GM,{className:"w-4 h-4"})})]}),y.jsx("div",{className:"absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none",children:y.jsxs("div",{className:"p-4 sm:p-6 rounded-2xl bg-[#081226]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]",children:[y.jsx("h3",{className:"font-sans font-bold text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight mb-2",style:ae?F:{color:"#F8FAFC"},children:B.title}),y.jsx("p",{className:"text-xs sm:text-sm text-[#CBD5E1] font-light line-clamp-2 leading-relaxed",children:B.caption}),y.jsxs("div",{className:"mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]",children:[y.jsxs("span",{className:"flex items-center gap-1.5",children:[y.jsx(Tl,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),B.date]}),B.location&&y.jsxs("span",{className:"flex items-center gap-1.5",children:[y.jsx(Al,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),B.location]})]})]})})]})]},B.id)}),y.jsx("button",{onClick:B=>{B.stopPropagation(),W()},className:"absolute left-2 sm:left-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95","aria-label":"Previous slide",children:y.jsx(M_,{className:"w-6 h-6"})}),y.jsx("button",{onClick:B=>{B.stopPropagation(),O()},className:"absolute right-2 sm:right-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-[#38BDF8] text-white hover:text-[#020617] border border-white/15 hover:border-[#38BDF8] backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer shadow-lg active:scale-95","aria-label":"Next slide",children:y.jsx(E_,{className:"w-6 h-6"})})]}),y.jsx("div",{className:"flex items-center justify-center gap-2 mt-8",children:b.map((B,V)=>y.jsx("button",{onClick:()=>s(V),className:`h-2 rounded-full transition-all duration-300 cursor-pointer ${V===i?"w-8 bg-[#38BDF8] shadow-[0_0_12px_rgba(56,189,248,0.7)]":"w-2 bg-white/20 hover:bg-white/45"}`,"aria-label":`Jump to slide ${V+1}`},V))}),y.jsx(Zw,{isOpen:_,items:b,currentIndex:g,onClose:()=>v(!1),onNext:()=>E(B=>(B+1)%S),onPrev:()=>E(B=>B===0?S-1:B-1),onSelectIndex:B=>E(B)})]})]})}function Qw(){const[o,t]=rt.useState({name:"",email:"",intent:"Pitch an Idea",message:""}),[i,s]=rt.useState(null),[c,f]=rt.useState(!1),[d,h]=rt.useState(!1),p=[{label:"Pitch an Idea",icon:FM},{label:"Mentorship",icon:kp},{label:"Partner / Sponsor",icon:b_},{label:"Join E-Cell",icon:w_}],m={background:"linear-gradient(180deg, #FFFFFF 0%, #FBF8EC 18%, #F6EED8 38%, #F3E1B6 60%, #E8CA8C 82%, #FDFAD2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",filter:"drop-shadow(0 0 20px rgba(248, 225, 173, 0.42)) drop-shadow(0 0 45px rgba(232, 202, 140, 0.22))"},_=(g,E)=>{navigator.clipboard.writeText(g),s(E),setTimeout(()=>s(null),2e3)},v=g=>{g.preventDefault(),!(!o.name||!o.email||!o.message)&&(f(!0),setTimeout(()=>{f(!1),h(!0)},700))};return y.jsxs("section",{id:"contact",className:"relative py-24 sm:py-32 px-6 sm:px-12 bg-[#020617] text-[#F8FAFC] overflow-hidden select-none scroll-mt-20",children:[y.jsx("div",{className:"absolute top-[10%] left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#1E3A8A]/[0.08] rounded-full blur-[180px] pointer-events-none"}),y.jsx("div",{className:"absolute bottom-[5%] right-[-10%] w-[550px] h-[550px] bg-[#0284C7]/[0.05] rounded-full blur-[170px] pointer-events-none"}),y.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[y.jsxs("div",{className:"text-center mb-10 sm:mb-14",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 mb-3 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"}),y.jsx("span",{className:"text-[11px] font-mono tracking-[0.24em] text-[#38BDF8] uppercase font-semibold",children:"DIRECT UPLINK"})]}),y.jsx("h2",{className:"font-sans font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-3",style:m,children:"Let’s Build Something Together"}),y.jsx("p",{className:"text-sm sm:text-base text-[#94A3B8] font-light leading-relaxed max-w-xl mx-auto",children:"Got an idea, looking for mentors, or want to partner with E-Cell WIT? Send a direct transmission to our core team."})]}),y.jsxs("div",{className:"relative rounded-3xl bg-[#081226]/50 border border-white/[0.08] hover:border-[#38BDF8]/30 backdrop-blur-2xl p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-colors duration-500",children:[y.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent pointer-events-none"}),d?y.jsxs("div",{className:"py-12 sm:py-16 text-center animate-in fade-in zoom-in-95 duration-400",children:[y.jsx("div",{className:"w-16 h-16 rounded-3xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center mx-auto mb-5 shadow-[0_0_35px_rgba(56,189,248,0.3)]",children:y.jsx(aa,{className:"w-8 h-8 text-[#38BDF8]"})}),y.jsx("h3",{className:"font-sans font-bold text-2xl sm:text-3xl text-white mb-2",children:"Transmission Received!"}),y.jsxs("p",{className:"text-sm text-[#CBD5E1] font-light max-w-md mx-auto mb-8 leading-relaxed",children:["Thank you, ",y.jsx("span",{className:"text-[#38BDF8] font-semibold",children:o.name}),". Your message has reached the E-Cell WIT team. We will review it and get back to you within 24 hours."]}),y.jsx("button",{onClick:()=>{h(!1),t({name:"",email:"",intent:"Pitch an Idea",message:""})},className:"px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono uppercase tracking-wider text-white transition-all cursor-pointer",children:"Send another message"})]}):y.jsxs("form",{onSubmit:v,className:"space-y-6 sm:space-y-7",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-3",children:"I'm reaching out to:"}),y.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3",children:p.map(({label:g,icon:E})=>{const C=o.intent===g;return y.jsxs("button",{type:"button",onClick:()=>t({...o,intent:g}),className:`group relative flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${C?"bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/60 shadow-[0_0_15px_rgba(56,189,248,0.25)] font-semibold":"bg-white/[0.02] text-[#94A3B8] border border-white/[0.08] hover:border-white/20 hover:text-white"}`,children:[y.jsx(E,{className:`w-3.5 h-3.5 ${C?"text-[#38BDF8]":"text-[#64748B] group-hover:text-white"}`}),y.jsx("span",{children:g})]},g)})})]}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",children:[y.jsxs("div",{children:[y.jsxs("label",{className:"block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2",children:["Your Name ",y.jsx("span",{className:"text-[#38BDF8]",children:"*"})]}),y.jsx("input",{type:"text",required:!0,value:o.name,onChange:g=>t({...o,name:g.target.value}),placeholder:"Aarav Kulkarni",className:"w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2",children:["Email Address ",y.jsx("span",{className:"text-[#38BDF8]",children:"*"})]}),y.jsx("input",{type:"email",required:!0,value:o.email,onChange:g=>t({...o,email:g.target.value}),placeholder:"aarav@example.com",className:"w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none font-sans"})]})]}),y.jsxs("div",{children:[y.jsxs("label",{className:"block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-2",children:["Your Message or Idea ",y.jsx("span",{className:"text-[#38BDF8]",children:"*"})]}),y.jsx("textarea",{required:!0,rows:3,value:o.message,onChange:g=>t({...o,message:g.target.value}),placeholder:"Share brief details about your idea, proposal, or inquiry...",className:"w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] text-white text-sm placeholder:text-[#475569] transition-all outline-none resize-none font-sans"})]}),y.jsx("button",{type:"submit",disabled:c,className:"w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] active:scale-[0.99] cursor-pointer disabled:opacity-60",children:c?y.jsxs(y.Fragment,{children:[y.jsx("span",{className:"w-4 h-4 rounded-full border-2 border-[#020617] border-t-transparent animate-spin"}),y.jsx("span",{children:"Sending Transmission..."})]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{children:"Send Message"}),y.jsx(YM,{className:"w-3.5 h-3.5"})]})})]}),y.jsxs("div",{className:"mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]",children:[y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(Al,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:"WIT Solapur, Maharashtra"})]}),y.jsxs("div",{onClick:()=>_("ecell@witsolapur.org","email"),className:"flex items-center gap-2 hover:text-[#38BDF8] transition-colors cursor-pointer",title:"Click to copy email",children:[y.jsx(IM,{className:"w-3.5 h-3.5 text-[#38BDF8]"}),y.jsx("span",{children:"ecell@witsolapur.org"}),i==="email"?y.jsx(_M,{className:"w-3 h-3 text-[#38BDF8]"}):y.jsx(CM,{className:"w-3 h-3 opacity-60"})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 hover:text-[#38BDF8] transition-colors",children:[y.jsx(A_,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"LinkedIn"}),y.jsx(_l,{className:"w-2.5 h-2.5 opacity-60"})]}),y.jsx("span",{className:"opacity-30",children:"·"}),y.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1 hover:text-[#38BDF8] transition-colors",children:[y.jsx(T_,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"Instagram"}),y.jsx(_l,{className:"w-2.5 h-2.5 opacity-60"})]})]})]})]})]})]})}function Jw({event:o,onClose:t,onRegister:i}){return o?y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:y.jsxs("div",{className:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#081226] border border-[#38BDF8]/25 shadow-[0_25px_70px_rgba(2,6,23,0.95)] text-[#F8FAFC] p-6 sm:p-10 my-auto",children:[y.jsx("button",{onClick:t,className:"absolute top-6 right-6 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-[#94A3B8] hover:text-[#F8FAFC] border border-white/10 transition-colors z-20 cursor-pointer","aria-label":"Close modal",children:y.jsx(zu,{className:"w-5 h-5"})}),y.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4",children:[y.jsx("span",{className:"px-3.5 py-1 rounded-full bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-[11px] font-bold uppercase tracking-wider",children:o.category}),y.jsx("span",{className:"px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] font-mono text-[11px]",children:o.badge||(o.isUpcoming?"UPCOMING":"COMPLETED")}),o.metric&&y.jsx("span",{className:"px-3.5 py-1 rounded-full bg-[#F3E1B6]/10 border border-[#F3E1B6]/30 text-[#F3E1B6] font-mono text-[11px] font-semibold",children:o.metric})]}),y.jsx("h2",{className:"font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight",children:o.title}),o.subtitle&&y.jsx("p",{className:"mt-2 text-sm sm:text-base text-[#94A3B8] font-mono",children:o.subtitle}),y.jsxs("div",{className:"mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07]",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(Tl,{className:"w-5 h-5 text-[#38BDF8]"}),y.jsxs("div",{children:[y.jsx("div",{className:"text-[10px] font-mono text-[#94A3B8] uppercase",children:"Date & Timing"}),y.jsx("div",{className:"text-xs sm:text-sm font-semibold text-white",children:o.dateDisplay||o.date})]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(Al,{className:"w-5 h-5 text-[#38BDF8]"}),y.jsxs("div",{children:[y.jsx("div",{className:"text-[10px] font-mono text-[#94A3B8] uppercase",children:"Venue Location"}),y.jsx("div",{className:"text-xs sm:text-sm font-semibold text-white",children:o.venue})]})]}),y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx(Vp,{className:"w-5 h-5 text-[#F3E1B6]"}),y.jsxs("div",{children:[y.jsx("div",{className:"text-[10px] font-mono text-[#94A3B8] uppercase",children:"Impact / Highlights"}),y.jsx("div",{className:"text-xs sm:text-sm font-semibold text-white",children:o.metric||o.prizePool||"Recognized & Certified"})]})]})]}),y.jsx("div",{className:"mt-6 rounded-2xl overflow-hidden border border-white/10 bg-[#020617] relative aspect-[16/9] sm:aspect-[21/9]",children:o.image?y.jsxs(y.Fragment,{children:[y.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover",onError:s=>{s.currentTarget.style.display="none"}}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#081226]/85 via-transparent to-transparent flex items-end p-6",children:y.jsx("div",{className:"text-xs font-mono text-[#94A3B8] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10",children:"E-CELL WIT SOLAPUR · OFFICIAL EVENT ARCHIVE"})})]}):y.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0B1A3A]/70 via-[#071329] to-[#020617] relative text-center",children:[y.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:18px_18px] opacity-15 pointer-events-none"}),y.jsx("div",{className:"w-14 h-14 rounded-2xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(56,189,248,0.2)]",children:y.jsx(Zr,{className:"w-6 h-6 text-[#38BDF8]"})}),y.jsx("p",{className:"text-base sm:text-lg font-mono text-[#BAE6FD] font-semibold",children:o.title}),y.jsx("p",{className:"text-xs font-mono text-[#94A3B8] mt-1",children:"Official Event Media Archive · WIT Solapur"})]})}),y.jsxs("div",{className:"mt-8",children:[y.jsx("h3",{className:"font-display font-bold text-lg text-white mb-2",children:"About the Event"}),y.jsx("p",{className:"text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-light",children:o.description})]}),o.highlights&&o.highlights.length>0&&y.jsxs("div",{className:"mt-8 pt-6 border-t border-white/[0.08]",children:[y.jsxs("h3",{className:"font-display font-bold text-lg text-white mb-4 flex items-center gap-2",children:[y.jsx(Zr,{className:"w-4 h-4 text-[#38BDF8]"}),"Event Highlights"]}),y.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:o.highlights.map((s,c)=>y.jsxs("div",{className:"flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5",children:[y.jsx(aa,{className:"w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5"}),y.jsx("span",{className:"text-xs sm:text-sm text-[#E2E8F0] font-mono",children:s})]},c))})]}),o.schedule&&o.schedule.length>0&&y.jsxs("div",{className:"mt-8 pt-6 border-t border-white/[0.08]",children:[y.jsxs("h3",{className:"font-display font-bold text-lg text-white mb-4 flex items-center gap-2",children:[y.jsx(EM,{className:"w-4 h-4 text-[#38BDF8]"}),"Schedule & Agenda"]}),y.jsx("div",{className:"space-y-3",children:o.schedule.map((s,c)=>y.jsxs("div",{className:"flex items-start gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5",children:[y.jsx("span",{className:"font-mono text-xs font-bold text-[#38BDF8] shrink-0 pt-0.5",children:s.time}),y.jsx("span",{className:"text-sm text-[#E2E8F0]",children:s.title})]},c))})]}),y.jsxs("div",{className:"mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[y.jsx("div",{className:"text-xs font-mono text-[#94A3B8]",children:"Walchand Institute of Technology · E-Cell Movement"}),y.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[y.jsx("button",{onClick:t,className:"w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-xs font-mono uppercase text-[#CBD5E1] transition-colors cursor-pointer",children:"Close"}),o.isUpcoming?y.jsxs("button",{onClick:()=>{t(),i==null||i(o)},className:"w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.4)] cursor-pointer",children:[y.jsx("span",{children:"REGISTER NOW"}),y.jsx(_l,{className:"w-3.5 h-3.5"})]}):y.jsx("button",{onClick:t,className:"w-full sm:w-auto px-8 py-2.5 rounded-full bg-[#F3E1B6]/15 hover:bg-[#F3E1B6] border border-[#F3E1B6]/40 text-[#F3E1B6] hover:text-[#020617] font-mono font-bold text-xs uppercase tracking-wider transition-all cursor-pointer",children:y.jsx("span",{children:"VIEWED RECAP"})})]})]})]})}):null}function $w(){const o=()=>{window.scrollTo({top:0,behavior:"smooth"})},t=[{label:"About",href:"#overview"},{label:"Vision & Mission",href:"#vision-mission"},{label:"Events",href:"#events"},{label:"Gallery",href:"#gallery"},{label:"Contact",href:"#contact"}],i=[{label:"NEC IIT Bombay",href:"#events"},{label:"WEC 2025",href:"#gallery"},{label:"Idea Ignite",href:"#events"},{label:"Founders Expo",href:"#events"},{label:"Illuminate Workshop",href:"#events"},{label:"E-Summit 2026",href:"#events"}],s=[{label:"WIT Maker Space",href:"#overview"},{label:"Alumni Founder Syndicate",href:"#contact"},{label:"Innovation & IPR Council",href:"#events"},{label:"E-Cell IIT Bombay Partner",href:"#overview"},{label:"Pre-Incubation Center",href:"#contact"}];return y.jsx("footer",{className:"relative bg-[#010409] text-[#94A3B8] font-sans overflow-hidden select-none",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-20 pb-12 sm:pb-14",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10",children:[y.jsx("div",{className:"lg:col-span-4 flex flex-col justify-between",children:y.jsxs("div",{children:[y.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[y.jsx("div",{className:"w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.2)]",children:y.jsx("span",{className:"font-mono font-black text-[#020617] text-sm tracking-tighter",children:"EC"})}),y.jsxs("div",{children:[y.jsx("span",{className:"font-sans font-bold text-white text-lg tracking-tight",children:"E-Cell WIT"}),y.jsx("span",{className:"block text-[10px] font-mono text-[#38BDF8] tracking-widest uppercase",children:"Walchand Institute of Tech."})]})]}),y.jsx("p",{className:"text-xs sm:text-sm text-[#94A3B8] font-light leading-relaxed mb-6 max-w-sm",children:"Entrepreneurship Cell of Walchand Institute of Technology, Solapur. Building the next wave of student innovators, builders & founders from Maharashtra — Annual Report 2025–26."}),y.jsxs("div",{className:"flex items-center gap-2.5",children:[y.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300","aria-label":"Instagram",children:y.jsx(T_,{className:"w-4 h-4"})}),y.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300","aria-label":"LinkedIn",children:y.jsx(A_,{className:"w-4 h-4"})}),y.jsx("a",{href:"https://youtube.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300","aria-label":"YouTube",children:y.jsx(s1,{className:"w-4 h-4"})}),y.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-[#38BDF8]/20 border border-white/10 hover:border-[#38BDF8]/50 flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all duration-300","aria-label":"Twitter / X",children:y.jsx(n1,{className:"w-4 h-4"})})]})]})}),y.jsxs("div",{className:"lg:col-span-2",children:[y.jsx("h4",{className:"text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5",children:"NAVIGATE"}),y.jsx("ul",{className:"space-y-3 text-xs sm:text-sm",children:t.map(c=>y.jsx("li",{children:y.jsx("a",{href:c.href,className:"text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block",children:c.label})},c.label))})]}),y.jsxs("div",{className:"lg:col-span-3",children:[y.jsx("h4",{className:"text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5",children:"PROGRAMS"}),y.jsx("ul",{className:"space-y-3 text-xs sm:text-sm",children:i.map(c=>y.jsx("li",{children:y.jsx("a",{href:c.href,className:"text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block",children:c.label})},c.label))})]}),y.jsxs("div",{className:"lg:col-span-3",children:[y.jsx("h4",{className:"text-[11px] font-mono font-semibold uppercase tracking-[0.24em] text-white mb-5",children:"WIT ECOSYSTEM"}),y.jsx("ul",{className:"space-y-3 text-xs sm:text-sm",children:s.map(c=>y.jsx("li",{children:y.jsx("a",{href:c.href,className:"text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 block",children:c.label})},c.label))})]})]}),y.jsxs("div",{className:"mt-14 sm:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-5 text-xs font-mono text-[#64748B]",children:[y.jsxs("div",{className:"flex items-center gap-1.5 text-center sm:text-left",children:[y.jsx("span",{children:"© 2024–26 E-Cell WIT Solapur. Made with"}),y.jsx(UM,{className:"w-3.5 h-3.5 text-white/80 fill-white/80 inline"}),y.jsx("span",{children:"by students, for students."})]}),y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsxs("div",{className:"flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081226] border border-white/10 text-[11px] text-[#E2E8F0] shadow-sm",children:[y.jsx(Vp,{className:"w-3.5 h-3.5 text-[#F3E1B6]"}),y.jsx("span",{children:"NEC IIT Bombay · WEC · 3× National Podium"})]}),y.jsx("button",{onClick:o,className:"p-2 rounded-full bg-white/5 hover:bg-[#38BDF8] text-[#94A3B8] hover:text-[#020617] border border-white/10 hover:border-[#38BDF8] transition-all duration-300 cursor-pointer shadow-sm active:scale-95","aria-label":"Back to Top",title:"Back to Top",children:y.jsx(fM,{className:"w-3.5 h-3.5"})})]})]})]})})}function eC({isOpen:o,onClose:t}){const[i,s]=rt.useState(!1),[c,f]=rt.useState({name:"",email:"",department:"Computer Science & Engg",year:"First Year",interests:""});if(!o)return null;const d=h=>{h.preventDefault(),s(!0),setTimeout(()=>{s(!1),t()},3200)};return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#020617]/85 backdrop-blur-xl animate-in fade-in",children:y.jsxs("div",{className:"relative w-full max-w-lg p-8 sm:p-10 rounded-3xl bg-[#0B1528] border border-[#38BDF8]/30 text-[#F8FAFC] shadow-[0_20px_60px_rgba(2,6,23,0.9)] my-auto",children:[y.jsx("button",{onClick:t,className:"absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors","aria-label":"Close modal",children:y.jsx(zu,{className:"w-5 h-5"})}),y.jsxs("div",{className:"flex items-center gap-2 mb-2 text-[#38BDF8] font-mono text-xs uppercase font-medium tracking-wider",children:[y.jsx(Zr,{className:"w-3.5 h-3.5"}),y.jsx("span",{children:"JOIN THE ECOSYSTEM"})]}),y.jsx("h3",{className:"font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#F8FAFC]",children:"Walchand E-Cell Cohort"}),y.jsx("p",{className:"mt-1 text-xs font-mono text-[#94A3B8]",children:"Walchand Institute of Technology, Solapur"}),i?y.jsxs("div",{className:"py-12 text-center animate-in zoom-in-95",children:[y.jsx(aa,{className:"w-12 h-12 text-[#38BDF8] mx-auto mb-3"}),y.jsx("h4",{className:"font-display font-bold text-xl text-[#F8FAFC]",children:"Transmission Received"}),y.jsx("p",{className:"text-xs sm:text-sm text-[#94A3B8] mt-2 max-w-sm mx-auto font-light",children:"Our team will review your application and connect with you via email. Welcome to the movement."})]}):y.jsxs("form",{onSubmit:d,className:"mt-8 space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5",children:"Full Name *"}),y.jsx("input",{type:"text",required:!0,placeholder:"e.g. Rahul Patil",value:c.name,onChange:h=>f({...c,name:h.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none transition-colors"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5",children:"Email Address *"}),y.jsx("input",{type:"email",required:!0,placeholder:"e.g. rahul@wit.edu",value:c.email,onChange:h=>f({...c,email:h.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none transition-colors"})]}),y.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5",children:"Department"}),y.jsxs("select",{value:c.department,onChange:h=>f({...c,department:h.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#38BDF8]",children:[y.jsx("option",{children:"Computer Science & Engg"}),y.jsx("option",{children:"Information Technology"}),y.jsx("option",{children:"Electronics & Telecomm"}),y.jsx("option",{children:"Mechanical Engineering"}),y.jsx("option",{children:"Civil Engineering"}),y.jsx("option",{children:"First Year"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5",children:"Year"}),y.jsxs("select",{value:c.year,onChange:h=>f({...c,year:h.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] text-sm focus:outline-none focus:border-[#38BDF8]",children:[y.jsx("option",{children:"First Year"}),y.jsx("option",{children:"Second Year"}),y.jsx("option",{children:"Third Year"}),y.jsx("option",{children:"Final Year"})]})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider mb-1.5",children:"What are you curious about building or learning?"}),y.jsx("textarea",{rows:3,required:!0,placeholder:"Briefly describe your interest in tech, prototyping, venture building, or events...",value:c.interests,onChange:h=>f({...c,interests:h.target.value}),className:"w-full px-4 py-2.5 rounded-xl bg-[#050B18] border border-[#38BDF8]/20 text-[#F8FAFC] placeholder-[#94A3B8]/40 focus:border-[#38BDF8] text-sm focus:outline-none resize-none transition-colors"})]}),y.jsxs("button",{type:"submit",className:"w-full py-3.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#020617] font-mono font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer",children:[y.jsx("span",{children:"SUBMIT APPLICATION"}),y.jsx(lM,{className:"w-3.5 h-3.5"})]})]})]})})}function tC(){const[o,t]=rt.useState(!1),[i,s]=rt.useState(null);return y.jsxs("div",{className:"relative min-h-screen bg-[#020617] text-[#F8FAFC] selection:bg-[#38BDF8] selection:text-[#020617] overflow-x-hidden",children:[y.jsx("div",{className:"fixed inset-0 grain-overlay z-[90] pointer-events-none"}),y.jsx(iM,{}),y.jsx(o1,{onOpenJoin:()=>t(!0)}),y.jsxs("main",{className:"relative z-10",children:[y.jsx(Vw,{onOpenJoin:()=>t(!0)}),y.jsx(kw,{}),y.jsx(Xw,{onOpenJoin:()=>t(!0)}),y.jsx(qw,{onSelectEvent:s,onRegisterEvent:()=>t(!0)}),y.jsx(Kw,{}),y.jsx(Qw,{})]}),y.jsx($w,{}),y.jsx(Jw,{event:i,onClose:()=>s(null),onRegister:()=>{s(null),t(!0)}}),y.jsx(eC,{isOpen:o,onClose:()=>t(!1)})]})}nM.createRoot(document.getElementById("root")).render(y.jsx(Yb.StrictMode,{children:y.jsx(tC,{})}));
