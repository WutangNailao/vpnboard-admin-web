"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3624],{8665:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,i={},a=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});i[n]||(i[n]=new WeakMap);var s=i[n],d=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else try{var t=e.getAttribute(c),i=null!==t&&"false"!==t,a=(r.get(e)||0)+1,u=(s.get(e)||0)+1;r.set(e,a),s.set(e,u),d.push(e),1===a&&i&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),i||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,i=s.get(e)-1;r.set(e,t),s.set(e,i),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),i||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,i={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},6428:function(e,t,n){n.d(t,{Z:function(){return V}});var r,o,i,a,u,c,l,s=n(3921),d=n(786),f="right-scroll-bar-position",v="width-before-scroll-bar";function m(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var p="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,h=new WeakMap,E=(void 0===r&&(r={}),(void 0===o&&(o=function(e){return e}),i=[],a=!1,u={read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=o(e,a);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){a=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=(0,s.pi)({async:!0,ssr:!1},r),u),g=function(){},y=d.forwardRef(function(e,t){var n,r,o,i,a=d.useRef(null),u=d.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),c=u[0],l=u[1],f=e.forwardProps,v=e.children,y=e.className,b=e.removeScrollBar,w=e.enabled,C=e.shards,S=e.sideCar,L=e.noIsolation,T=e.inert,k=e.allowPinchZoom,R=e.as,M=(0,s._T)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=(n=[a,t],r=function(e){return n.forEach(function(t){return m(t,e)})},(o=(0,d.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,p(function(){var e=h.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||m(e,null)}),r.forEach(function(e){t.has(e)||m(e,o)})}h.set(i,n)},[n]),i),A=(0,s.pi)((0,s.pi)({},M),c);return d.createElement(d.Fragment,null,w&&d.createElement(S,{sideCar:E,removeScrollBar:b,shards:C,noIsolation:L,inert:T,setCallbacks:l,allowPinchZoom:!!k,lockRef:a}),f?d.cloneElement(d.Children.only(v),(0,s.pi)((0,s.pi)({},A),{ref:x})):d.createElement(void 0===R?"div":R,(0,s.pi)({},A,{className:y,ref:x}),v))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:v,zeroRight:f};var b=function(e){var t=e.sideCar,n=(0,s._T)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return d.createElement(r,(0,s.pi)({},n))};b.isSideCarExport=!0;var w=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=l||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=w();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},S=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},L={left:0,top:0,right:0,gap:0},T=function(e){return parseInt(e||"",10)||0},k=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[T(n),T(r),T(o)]},R=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return L;var t=k(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},M=S(),x="data-scroll-locked",A=function(e,t,n,r){var o=e.left,i=e.top,a=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(x,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(f," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(f," .").concat(f," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(x,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},P=function(){var e=parseInt(document.body.getAttribute(x)||"0",10);return isFinite(e)?e:0},W=function(){d.useEffect(function(){return document.body.setAttribute(x,(P()+1).toString()),function(){var e=P()-1;e<=0?document.body.removeAttribute(x):document.body.setAttribute(x,e.toString())}},[])},N=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;W();var i=d.useMemo(function(){return R(o)},[o]);return d.createElement(M,{styles:A(i,!t,o,n?"":"!important")})},D=!1;if("undefined"!=typeof window)try{var O=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",O,O),window.removeEventListener("test",O,O)}catch(e){D=!1}var I=!!D&&{passive:!1},F=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},B=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),_(e,n)){var r=K(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},_=function(e,t){return"v"===e?F(t,"overflowY"):F(t,"overflowX")},K=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},X=function(e,t,n,r,o){var i,a=(i=window.getComputedStyle(t).direction,"h"===e&&"rtl"===i?-1:1),u=a*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var m=K(e,c),p=m[0],h=m[1]-m[2]-a*p;(p||h)&&_(e,c)&&(f+=h,v+=p),c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&0===f||!o&&u>f)?s=!0:!d&&(o&&0===v||!o&&-u>v)&&(s=!0),s},Z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Y=function(e){return[e.deltaX,e.deltaY]},z=function(e){return e&&"current"in e?e.current:e},j=0,H=[],q=(c=function(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),o=d.useState(j++)[0],i=d.useState(function(){return S()})[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(0,s.ev)([e.lockRef.current],(e.shards||[]).map(z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=d.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,i=Z(e),u=n.current,c="deltaX"in e?e.deltaX:u[0]-i[0],l="deltaY"in e?e.deltaY:u[1]-i[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=B(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=B(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return X(v,t,e,"h"===v?c:l,!0)},[]),c=d.useCallback(function(e){if(H.length&&H[H.length-1]===i){var n="deltaY"in e?Y(e):Z(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?u(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=d.useCallback(function(e,n,r,o){var i={name:e,delta:n,target:r,should:o};t.current.push(i),setTimeout(function(){t.current=t.current.filter(function(e){return e!==i})},1)},[]),f=d.useCallback(function(e){n.current=Z(e),r.current=void 0},[]),v=d.useCallback(function(t){l(t.type,Y(t),t.target,u(t,e.lockRef.current))},[]),m=d.useCallback(function(t){l(t.type,Z(t),t.target,u(t,e.lockRef.current))},[]);d.useEffect(function(){return H.push(i),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:m}),document.addEventListener("wheel",c,I),document.addEventListener("touchmove",c,I),document.addEventListener("touchstart",f,I),function(){H=H.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,I),document.removeEventListener("touchmove",c,I),document.removeEventListener("touchstart",f,I)}},[]);var p=e.removeScrollBar,h=e.inert;return d.createElement(d.Fragment,null,h?d.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?d.createElement(N,{gapMode:"margin"}):null)},E.useMedium(c),b),U=d.forwardRef(function(e,t){return d.createElement(y,(0,s.pi)({},e,{ref:t,sideCar:q}))});U.classNames=y.classNames;var V=U},1745:function(e,t,n){n.d(t,{u:function(){return r}});function r(e,[t,n]){return Math.min(n,Math.max(t,e))}},1667:function(e,t,n){n.d(t,{B:function(){return u}});var r=n(786),o=n(9726),i=n(5477),a=n(3911);function u(e){let t=e+"CollectionProvider",[n,u]=(0,o.b)(t),[c,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",d=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,u=l(s,n),c=(0,i.e)(t,u.collectionRef);return r.createElement(a.g7,{ref:c},o)}),f=e+"CollectionItemSlot",v="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return r.createElement(c,{scope:t,itemMap:i,collectionRef:o},n)},Slot:d,ItemSlot:r.forwardRef((e,t)=>{let{scope:n,children:o,...u}=e,c=r.useRef(null),s=(0,i.e)(t,c),d=l(f,n);return r.useEffect(()=>(d.itemMap.set(c,{ref:c,...u}),()=>void d.itemMap.delete(c))),r.createElement(a.g7,{[v]:"",ref:s},o)})},function(t){let n=l(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${v}]`));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},u]}},9848:function(e,t,n){n.d(t,{gm:function(){return i}});var r=n(786);let o=(0,r.createContext)(void 0);function i(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},8034:function(e,t,n){let r;n.d(t,{XB:function(){return f}});var o=n(8323),i=n(786),a=n(8532),u=n(9034),c=n(5477),l=n(1401);let s="dismissableLayer.update",d=(0,i.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=(0,i.forwardRef)((e,t)=>{var n;let{disableOutsidePointerEvents:f=!1,onEscapeKeyDown:p,onPointerDownOutside:h,onFocusOutside:E,onInteractOutside:g,onDismiss:y,...b}=e,w=(0,i.useContext)(d),[C,S]=(0,i.useState)(null),L=null!==(n=null==C?void 0:C.ownerDocument)&&void 0!==n?n:null==globalThis?void 0:globalThis.document,[,T]=(0,i.useState)({}),k=(0,c.e)(t,e=>S(e)),R=Array.from(w.layers),[M]=[...w.layersWithOutsidePointerEventsDisabled].slice(-1),x=R.indexOf(M),A=C?R.indexOf(C):-1,P=w.layersWithOutsidePointerEventsDisabled.size>0,W=A>=x,N=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,i.useRef)(!1),o=(0,i.useRef)(()=>{});return(0,i.useEffect)(()=>{let e=e=>{if(e.target&&!r.current){let r={originalEvent:e};function i(){m("dismissableLayer.pointerDownOutside",n,r,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=i,t.addEventListener("click",o.current,{once:!0})):i()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...w.branches].some(e=>e.contains(t));!W||n||(null==h||h(e),null==g||g(e),e.defaultPrevented||null==y||y())},L),D=function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e),r=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...w.branches].some(e=>e.contains(t))||(null==E||E(e),null==g||g(e),e.defaultPrevented||null==y||y())},L);return!function(e,t=null==globalThis?void 0:globalThis.document){let n=(0,l.W)(e);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[n,t])}(e=>{A!==w.layers.size-1||(null==p||p(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},L),(0,i.useEffect)(()=>{if(C)return f&&(0===w.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),w.layersWithOutsidePointerEventsDisabled.add(C)),w.layers.add(C),v(),()=>{f&&1===w.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,f,w]),(0,i.useEffect)(()=>()=>{C&&(w.layers.delete(C),w.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,w]),(0,i.useEffect)(()=>{let e=()=>T({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,i.createElement)(u.WV.div,(0,o.Z)({},b,{ref:k,style:{pointerEvents:P?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.M)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,a.M)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,a.M)(e.onPointerDownCapture,N.onPointerDownCapture)}))});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let o=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?(0,u.jH)(o,i):o.dispatchEvent(i)}},2031:function(e,t,n){n.d(t,{EW:function(){return i}});var r=n(786);let o=0;function i(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},9389:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(8323),i=n(786),a=n(5477),u=n(9034),c=n(1401);let l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=(0,i.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:E,...g}=e,[y,b]=(0,i.useState)(null),w=(0,c.W)(f),C=(0,c.W)(E),S=(0,i.useRef)(null),L=(0,a.e)(t,e=>b(e)),T=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(r){function e(e){if(T.paused||!y)return;let t=e.target;y.contains(t)?S.current=t:p(S.current,{select:!0})}function t(e){if(T.paused||!y)return;let t=e.relatedTarget;null===t||y.contains(t)||p(S.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(y)});return y&&n.observe(y,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,y,T.paused]),(0,i.useEffect)(()=>{if(y){h.add(T);let e=document.activeElement;if(!y.contains(e)){let t=new CustomEvent(l,d);y.addEventListener(l,w),y.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(y).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(y))}return()=>{y.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);y.addEventListener(s,C),y.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),y.removeEventListener(s,C),h.remove(T)},0)}}},[y,w,C,T]);let k=(0,i.useCallback)(e=>{if(!n&&!r||T.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,i]=function(e){let t=v(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&i?e.shiftKey||o!==i?e.shiftKey&&o===r&&(e.preventDefault(),n&&p(i,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,T.paused]);return(0,i.createElement)(u.WV.div,(0,o.Z)({tabIndex:-1},g,{ref:L,onKeyDown:k}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=E(r,e)).unshift(e)},remove(e){var t;null===(t=(r=E(r,e))[0])||void 0===t||t.resume()}});function E(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},3454:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(786),i=n(2995);let a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(a());return(0,i.b)(()=>{e||n(e=>null!=e?e:String(u++))},[e]),e||(t?`radix-${t}`:"")}},531:function(e,t,n){n.d(t,{h:function(){return u}});var r=n(8323),o=n(786),i=n(147),a=n(9034);let u=(0,o.forwardRef)((e,t)=>{var n;let{container:u=null==globalThis?void 0:null===(n=globalThis.document)||void 0===n?void 0:n.body,...c}=e;return u?i.createPortal((0,o.createElement)(a.WV.div,(0,r.Z)({},c,{ref:t})),u):null})}}]);