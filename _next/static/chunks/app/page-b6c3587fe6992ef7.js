(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{94781:function(n,e,o){var t={"./cs-CZ/common.json":[34259,4259],"./cs-CZ/index.json":[68540,8540],"./cs-CZ/language.json":[61373,1373],"./de-DE/common.json":[15217,5217],"./de-DE/index.json":[13160,3160],"./de-DE/language.json":[61784,1784],"./en-US/common.json":[46883,6883],"./en-US/index.json":[85514,8541],"./en-US/language.json":[90240,240],"./es-ES/common.json":[89492,9492],"./es-ES/index.json":[79836,9836],"./es-ES/language.json":[89301,9301],"./es-MX/common.json":[72807,2807],"./es-MX/index.json":[62220,2220],"./es-MX/language.json":[37322,7322],"./fi-FI/common.json":[75742,5742],"./fi-FI/index.json":[87637,7637],"./fi-FI/language.json":[19067,9067],"./fr-FR/common.json":[23311,3311],"./fr-FR/index.json":[71479,1479],"./fr-FR/language.json":[42098,2098],"./hi-IN/common.json":[74474,4474],"./hi-IN/index.json":[85158,5158],"./hi-IN/language.json":[35513,5513],"./hu-HU/common.json":[55189,5189],"./hu-HU/index.json":[39146,9146],"./hu-HU/language.json":[66307,6307],"./ja-JP/common.json":[62612,2612],"./ja-JP/index.json":[54274,4274],"./ja-JP/language.json":[89297,9297],"./ko-KR/common.json":[7714,7714],"./ko-KR/index.json":[97934,7934],"./ko-KR/language.json":[4795,4795],"./no-NO/common.json":[98555,8555],"./no-NO/index.json":[9689,9689],"./no-NO/language.json":[46072,6072],"./pl-PL/common.json":[5358,5358],"./pl-PL/index.json":[16541,6541],"./pl-PL/language.json":[53485,3485],"./pt-BR/common.json":[24351,4351],"./pt-BR/index.json":[48314,8314],"./pt-BR/language.json":[89685,9685],"./ro-RO/common.json":[50385,385],"./ro-RO/index.json":[32042,2042],"./ro-RO/language.json":[34383,4383],"./ru-RU/common.json":[82156,2156],"./ru-RU/index.json":[39418,9418],"./ru-RU/language.json":[69588,9588],"./th-TH/common.json":[63648,3648],"./th-TH/index.json":[26133,6133],"./th-TH/language.json":[20604,604],"./tr-TR/common.json":[68086,8086],"./tr-TR/index.json":[6750,6750],"./tr-TR/language.json":[69557,9557],"./uk-UA/common.json":[5047,5047],"./uk-UA/index.json":[35626,5626],"./uk-UA/language.json":[97847,7847],"./vi-VN/common.json":[43418,3418],"./vi-VN/index.json":[74525,4525],"./vi-VN/language.json":[21719,1719],"./zh-CN/common.json":[19489,9489],"./zh-CN/index.json":[40401,401],"./zh-CN/language.json":[44323,4323],"./zh-TW/common.json":[62199,2199],"./zh-TW/index.json":[68312,8312],"./zh-TW/language.json":[38796,8796]};function r(n){if(!o.o(t,n))return Promise.resolve().then(function(){var e=Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e});var e=t[n],r=e[0];return o.e(e[1]).then(function(){return o.t(r,19)})}r.keys=function(){return Object.keys(t)},r.id=94781,n.exports=r},80210:function(n,e,o){Promise.resolve().then(o.bind(o,843))},69518:function(n,e,o){"use strict";let{defineConfig:t}=o(65253);n.exports=t({entry:"./src/i18n/locales/en-US",entryLocale:"en-US",output:"./src/i18n/locales",outputLocales:["cs-CZ","de-DE","en-US","es-ES","es-MX","fi-FI","fr-FR","hi-IN","hu-HU","ja-JP","ko-KR","no-NO","pl-PL","pt-BR","ro-RO","ru-RU","th-TH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"],experimental:{jsonMode:!0},markdown:{entry:["./README.md"],entryLocale:"en-US",outputLocales:["zh-CN","zh-TW"]}})},843:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return u}});var t=o(22336),r=o(68119);function u(){let{lng:n}=(0,r.ZK)();return(0,t.redirect)("/".concat(n))}},80621:function(n,e,o){"use strict";o.d(e,{useLanguage:function(){return f},useTranslation:function(){return g}});var t=o(30786),r=o(22336),u=o(38435),s=o(95804),i=o(70956),c=o(81681),a=o(87812),l=o(26127);function g(n,e,o){let r=(0,i.$G)(e,o),{i18n:u}=r;{let[e,o]=(0,t.useState)(u.resolvedLanguage);(0,t.useEffect)(()=>{e!==u.resolvedLanguage&&o(u.resolvedLanguage)},[e,u.resolvedLanguage]),(0,t.useEffect)(()=>{n&&u.resolvedLanguage!==n&&u.changeLanguage(n)},[n,u]),(0,t.useEffect)(()=>{(0,a.ej)(l.YN)!==n&&(0,a.d8)(l.YN,n)},[n])}return r}function f(){var n;let{lng:e}=(0,r.useParams)(),o=e||(0,a.ej)(l.YN)||(0,c.jU)()&&(null===(n=navigator)||void 0===n?void 0:n.language.split(",")[0])||l.A9,t=(0,r.useRouter)(),u=(0,r.usePathname)();return{lng:o,changeLanguage:n=>{(0,a.d8)(l.YN,n),t.push(u.replace("/".concat(o),"/".concat(n))),t.refresh()}}}u.ZP.use(i.Db).use((0,s.Z)((n,e)=>o(94781)("./".concat(n,"/").concat(e,".json")))).init({...(0,l.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},26127:function(n,e,o){"use strict";o.d(e,{A9:function(){return s},FW:function(){return l},Mj:function(){return i},YN:function(){return a}});var t=o(81681),r=o(69518),u=o.n(r);let s=t.k$||u().entryLocale,i=u().outputLocales,c="index",a="language";function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return{supportedLngs:i,fallbackLng:s,lng:n,fallbackNS:c,defaultNS:c,ns:Array.isArray(e)?e:[e]}}},68119:function(n,e,o){"use strict";o.d(e,{i0:function(){return c},Mj:function(){return s.Mj},ZK:function(){return a.useLanguage},$G:function(){return a.useTranslation}});var t=o(38435),r=o(95804),u=o(39398),s=o(26127);let i=async(n,e)=>{let i=(0,t.Fs)();return await i.use(u.D).use((0,r.Z)((n,e)=>o(94781)("./".concat(n,"/").concat(e,".json")))).init((0,s.FW)(n,e)),i};async function c(n,e,o){let t=await i(n,e);return{t:t.getFixedT(n,Array.isArray(e)?e[0]:e,null==o?void 0:o.keyPrefix),i18n:t}}var a=o(80621)},81681:function(n,e,o){"use strict";o.d(e,{$t:function(){return g},H5:function(){return i},Hj:function(){return d},SB:function(){return j},T5:function(){return a},at:function(){return m},jU:function(){return r},k$:function(){return u},t0:function(){return c},v:function(){return f},ws:function(){return s},xK:function(){return l}});var t=o(75350);let r=()=>!0,u=t.env.DEFAULT_LANGUAGE,s=t.env.DEFAULT_MODE||"system",i="system"===s?"light":s,c=t.env.DEFAULT_THEME||"blue";t.env.SITE_URL;let a=t.env.API_URL||"",l=t.env.EMAIL,g=t.env.GITHUB_LINK,f=t.env.TWITTER_LINK,d=t.env.DISCORD_LINK,j=t.env.INSTAGRAM_LINK,m=t.env.LINKEDIN_LINK;t.env.GOOGLE_TAG_MANAGER_ID,t.env.GOOGLE_ANALYTICS_ID,t.env.YANDEX_ANALYTICS_ID,t.env.FACEBOOK_ANALYTICS_ID,t.env.BAIDU_ANALYTICS_ID},87812:function(n,e,o){"use strict";o.d(e,{d8:function(){return f},ej:function(){return g},kT:function(){return d}});var t=o(46422);let r=()=>!0,u=n=>!!n&&"getAll"in n&&"set"in n&&"function"==typeof n.getAll&&"function"==typeof n.set,s=n=>!!(null==n?void 0:n.req)&&"cookies"in n.req&&u(null==n?void 0:n.req.cookies)||!!(null==n?void 0:n.res)&&"cookies"in n.res&&u(null==n?void 0:n.res.cookies)||!!(null==n?void 0:n.cookies)&&u(n.cookies()),i=n=>{let e={};return n.getAll().forEach(n=>{let{name:o,value:t}=n;e[o]=t}),e},c=n=>{try{if("string"==typeof n)return n;return JSON.stringify(n)}catch(e){return n}},a=n=>n?n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):n,l=n=>{let e;if(s(n)){if(null==n?void 0:n.req)return i(n.req.cookies);if(null==n?void 0:n.cookies)return i(n.cookies())}return(n&&(e=n.req),r())?(0,t.Q)(document.cookie)||{}:e&&e.cookies?e.cookies:e&&e.headers.cookie?(0,t.Q)(e.headers.cookie):{}},g=(n,e)=>{let o=l(e)[n];if(void 0!==o)return a(o)},f=(n,e,o)=>{let u,i,a;if(s(o)){let{req:t,res:r,cookies:u,...s}=o,i={name:n,value:c(e),...s};t&&t.cookies.set(i),r&&r.cookies.set(i),u&&u().set(i);return}if(o){let{req:n,res:e,...t}=o;i=n,a=e,u=t}let l=(0,t.q)(n,c(e),{path:"/",...u});if(r())document.cookie=l;else if(a&&i){let o=a.getHeader("Set-Cookie");if(Array.isArray(o)||(o=o?[String(o)]:[]),a.setHeader("Set-Cookie",o.concat(l)),i&&i.cookies){let o=i.cookies;""===e?delete o[n]:o[n]=c(e)}if(i&&i.headers&&i.headers.cookie){let o=(0,t.Q)(i.headers.cookie);""===e?delete o[n]:o[n]=c(e),i.headers.cookie=Object.entries(o).reduce((n,e)=>n.concat("".concat(e[0],"=").concat(e[1],";")),"")}}},d=(n,e)=>f(n,"",{...e,maxAge:-1})}},function(n){n.O(0,[1896,2100,1162,1744],function(){return n(n.s=80210)}),_N_E=n.O()}]);