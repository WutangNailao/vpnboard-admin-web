(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9695],{94781:function(e,n,t){var o={"./cs-CZ/common.json":[34259,4259],"./cs-CZ/language.json":[61373,1373],"./de-DE/common.json":[15217,5217],"./de-DE/language.json":[61784,1784],"./en-US/common.json":[46883,6883],"./en-US/language.json":[90240,240],"./es-ES/common.json":[89492,9492],"./es-ES/language.json":[89301,9301],"./es-MX/common.json":[72807,2807],"./es-MX/language.json":[37322,7322],"./fi-FI/common.json":[75742,5742],"./fi-FI/language.json":[19067,9067],"./fr-FR/common.json":[23311,3311],"./fr-FR/language.json":[42098,2098],"./hi-IN/common.json":[74474,4474],"./hi-IN/language.json":[35513,5513],"./hu-HU/common.json":[55189,5189],"./hu-HU/language.json":[66307,6307],"./ja-JP/common.json":[62612,2612],"./ja-JP/language.json":[89297,9297],"./ko-KR/common.json":[7714,7714],"./ko-KR/language.json":[4795,4795],"./no-NO/common.json":[98555,8555],"./no-NO/language.json":[46072,6072],"./pl-PL/common.json":[5358,5358],"./pl-PL/language.json":[53485,3485],"./pt-BR/common.json":[24351,4351],"./pt-BR/language.json":[89685,9685],"./ro-RO/common.json":[50385,385],"./ro-RO/language.json":[34383,4383],"./ru-RU/common.json":[82156,2156],"./ru-RU/language.json":[69588,9588],"./th-TH/common.json":[63648,3648],"./th-TH/language.json":[20604,604],"./tr-TR/common.json":[68086,8086],"./tr-TR/language.json":[69557,9557],"./uk-UA/common.json":[5047,5047],"./uk-UA/language.json":[97847,7847],"./vi-VN/common.json":[43418,3418],"./vi-VN/language.json":[21719,1719],"./zh-CN/common.json":[19489,9489],"./zh-CN/language.json":[44323,4323],"./zh-TW/common.json":[62199,2199],"./zh-TW/language.json":[38796,8796]};function r(e){if(!t.o(o,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=o[e],r=n[0];return t.e(n[1]).then(function(){return t.t(r,19)})}r.keys=function(){return Object.keys(o)},r.id=94781,e.exports=r},88777:function(e,n,t){Promise.resolve().then(t.bind(t,16239)),Promise.resolve().then(t.bind(t,12143)),Promise.resolve().then(t.bind(t,81441)),Promise.resolve().then(t.t.bind(t,13364,23)),Promise.resolve().then(t.t.bind(t,39175,23)),Promise.resolve().then(t.bind(t,59596)),Promise.resolve().then(t.bind(t,80621)),Promise.resolve().then(t.bind(t,98539)),Promise.resolve().then(t.bind(t,81554)),Promise.resolve().then(t.t.bind(t,41416,23))},69518:function(e,n,t){"use strict";let{defineConfig:o}=t(65253);e.exports=o({entry:"./src/i18n/locales/en-US",entryLocale:"en-US",output:"./src/i18n/locales",outputLocales:["cs-CZ","de-DE","en-US","es-ES","es-MX","fi-FI","fr-FR","hi-IN","hu-HU","ja-JP","ko-KR","no-NO","pl-PL","pt-BR","ro-RO","ru-RU","th-TH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"],experimental:{jsonMode:!0},markdown:{entry:["./README.md"],entryLocale:"en-US",outputLocales:["zh-CN","zh-TW"]}})},59596:function(e,n,t){"use strict";t.d(n,{Toaster:function(){return u}});var o=t(52948),r=t(30120),s=t(92887);let u=e=>{let{...n}=e,{theme:t="system"}=(0,r.F)();return(0,o.jsx)(s.x,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...n})}},80621:function(e,n,t){"use strict";t.d(n,{useLanguage:function(){return g},useTranslation:function(){return d}});var o=t(30786),r=t(22336),s=t(38435),u=t(95804),i=t(70956),a=t(81681),c=t(87812),l=t(26127);function d(e,n,t){let r=(0,i.$G)(n,t),{i18n:s}=r;{let[n,t]=(0,o.useState)(s.resolvedLanguage);(0,o.useEffect)(()=>{n!==s.resolvedLanguage&&t(s.resolvedLanguage)},[n,s.resolvedLanguage]),(0,o.useEffect)(()=>{e&&s.resolvedLanguage!==e&&s.changeLanguage(e)},[e,s]),(0,o.useEffect)(()=>{(0,c.ej)(l.YN)!==e&&(0,c.d8)(l.YN,e)},[e])}return r}function g(){var e;let{lng:n}=(0,r.useParams)(),t=n||(0,c.ej)(l.YN)||(0,a.jU)()&&(null===(e=navigator)||void 0===e?void 0:e.language.split(",")[0])||l.A9,o=(0,r.useRouter)(),s=(0,r.usePathname)();return{lng:t,changeLanguage:e=>{(0,c.d8)(l.YN,e),o.push(s.replace("/".concat(t),"/".concat(e))),o.refresh()}}}s.ZP.use(i.Db).use((0,u.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init({...(0,l.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},26127:function(e,n,t){"use strict";t.d(n,{A9:function(){return u},FW:function(){return l},Mj:function(){return i},YN:function(){return c}});var o=t(81681),r=t(69518),s=t.n(r);let u=o.k$||s().entryLocale,i=s().outputLocales,a="index",c="language";function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return{supportedLngs:i,fallbackLng:u,lng:e,fallbackNS:a,defaultNS:a,ns:Array.isArray(n)?n:[n]}}},68119:function(e,n,t){"use strict";t.d(n,{i0:function(){return a},Mj:function(){return u.Mj},ZK:function(){return c.useLanguage},$G:function(){return c.useTranslation}});var o=t(38435),r=t(95804),s=t(39398),u=t(26127);let i=async(e,n)=>{let i=(0,o.Fs)();return await i.use(s.D).use((0,r.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init((0,u.FW)(e,n)),i};async function a(e,n,t){let o=await i(e,n);return{t:o.getFixedT(e,Array.isArray(n)?n[0]:n,null==t?void 0:t.keyPrefix),i18n:o}}var c=t(80621)},81681:function(e,n,t){"use strict";t.d(n,{$t:function(){return d},H5:function(){return i},Hj:function(){return f},SB:function(){return m},T5:function(){return c},at:function(){return v},jU:function(){return r},k$:function(){return s},t0:function(){return a},v:function(){return g},ws:function(){return u},xK:function(){return l}});var o=t(75350);let r=()=>!0,s=o.env.DEFAULT_LANGUAGE,u=o.env.DEFAULT_MODE||"system",i="system"===u?"light":u,a=o.env.DEFAULT_THEME||"blue";o.env.SITE_URL;let c=o.env.API_URL||"",l=o.env.EMAIL,d=o.env.GITHUB_LINK,g=o.env.TWITTER_LINK,f=o.env.DISCORD_LINK,m=o.env.INSTAGRAM_LINK,v=o.env.LINKEDIN_LINK;o.env.GOOGLE_TAG_MANAGER_ID,o.env.GOOGLE_ANALYTICS_ID,o.env.YANDEX_ANALYTICS_ID,o.env.FACEBOOK_ANALYTICS_ID,o.env.BAIDU_ANALYTICS_ID},87812:function(e,n,t){"use strict";t.d(n,{d8:function(){return g},ej:function(){return d},kT:function(){return f}});var o=t(46422);let r=()=>!0,s=e=>!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set,u=e=>!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies()),i=e=>{let n={};return e.getAll().forEach(e=>{let{name:t,value:o}=e;n[t]=o}),n},a=e=>{try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(n){return e}},c=e=>e?e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):e,l=e=>{let n;if(u(e)){if(null==e?void 0:e.req)return i(e.req.cookies);if(null==e?void 0:e.cookies)return i(e.cookies())}return(e&&(n=e.req),r())?(0,o.Q)(document.cookie)||{}:n&&n.cookies?n.cookies:n&&n.headers.cookie?(0,o.Q)(n.headers.cookie):{}},d=(e,n)=>{let t=l(n)[e];if(void 0!==t)return c(t)},g=(e,n,t)=>{let s,i,c;if(u(t)){let{req:o,res:r,cookies:s,...u}=t,i={name:e,value:a(n),...u};o&&o.cookies.set(i),r&&r.cookies.set(i),s&&s().set(i);return}if(t){let{req:e,res:n,...o}=t;i=e,c=n,s=o}let l=(0,o.q)(e,a(n),{path:"/",...s});if(r())document.cookie=l;else if(c&&i){let t=c.getHeader("Set-Cookie");if(Array.isArray(t)||(t=t?[String(t)]:[]),c.setHeader("Set-Cookie",t.concat(l)),i&&i.cookies){let t=i.cookies;""===n?delete t[e]:t[e]=a(n)}if(i&&i.headers&&i.headers.cookie){let t=(0,o.Q)(i.headers.cookie);""===n?delete t[e]:t[e]=a(n),i.headers.cookie=Object.entries(t).reduce((e,n)=>e.concat("".concat(n[0],"=").concat(n[1],";")),"")}}},f=(e,n)=>g(e,"",{...n,maxAge:-1})},39601:function(e,n,t){"use strict";var o=t(68119),r=t(28817),s=t(38435),u=t(92887),i=t(81681),a=t(87812);let c=r.Z.create({baseURL:i.T5||"/api"});c.interceptors.request.use(async e=>{let n=(0,a.ej)("Authorization");return n&&(e.headers.Authorization=n),e},e=>Promise.reject(e)),c.interceptors.response.use(async e=>{let{t:n}=await (0,o.i0)(s.ZP.language,"common"),t=e.data.code;return 0!==t&&u.A.error(n("request.error.".concat(t))),e},async e=>{if(!e.config.skipErrorHandler){var n,t,r,i,a;let{t:c}=await (0,o.i0)(s.ZP.language,"common"),l=null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.code,d=l&&c("request.error.".concat(l));return d?u.A.error(d||(null===(i=e.response)||void 0===i?void 0:null===(r=i.data)||void 0===r?void 0:r.message)||(null===(a=e.response)||void 0===a?void 0:a.statusText)):u.A.error(c("request.error.default")),Promise.reject(e)}}),n.Z=c},98539:function(e,n,t){"use strict";t.d(n,{default:function(){return u}});var o=t(91978),r=t(21041),s=t(13198);function u(e){return(0,s.Z)(async()=>{var e,n,t;let{data:s}=await (0,o.CD)({skipErrorHandler:!0});r.e.site=s.data,document.title=null===(e=s.data)||void 0===e?void 0:e.site_name;let u=document.createElement("meta");u.content=null===(n=s.data)||void 0===n?void 0:n.site_desc,u.name="description",document.getElementsByTagName("head")[0].appendChild(u);let i=document.createElement("link");i.setAttribute("rel","shortcut icon"),i.setAttribute("href",null===(t=s.data)||void 0===t?void 0:t.site_logo),document.getElementsByTagName("head")[0].appendChild(i)}),e.children}},81554:function(e,n,t){"use strict";t.d(n,{default:function(){return l}});var o=t(52948),r=t(30786),s=t(28013),u=t(29379),i=t(52345),a=t(19283);let c=(0,r.lazy)(()=>t.e(5743).then(t.bind(t,7691)).then(e=>({default:e.ReactQueryDevtools})));function l(e){let[n]=(0,r.useState)(()=>new s.S({defaultOptions:{queries:{staleTime:5e3}}})),[t,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{window.toggleDevtools=()=>l(e=>!e)},[]),(0,o.jsxs)(u.aH,{client:n,children:[(0,o.jsx)(a.V,{children:e.children}),(0,o.jsx)(i.t,{initialIsOpen:!1}),t&&(0,o.jsx)(r.Suspense,{fallback:null,children:(0,o.jsx)(c,{})})]})}},91978:function(e,n,t){"use strict";t.d(n,{CD:function(){return r},y4:function(){return s}});var o=t(39601);async function r(e){return(0,o.Z)("/public/config/get_site_config",{method:"POST",...e||{}})}async function s(e,n){return(0,o.Z)("/public/user/login",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}},21041:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});let o=(0,t(54526).sj)()},41416:function(){}},function(e){e.O(0,[6165,1896,4699,2494,426,2100,1162,1744],function(){return e(e.s=88777)}),_N_E=e.O()}]);