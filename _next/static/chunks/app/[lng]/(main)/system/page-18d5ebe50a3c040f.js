(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4671],{94781:function(e,n,t){var r={"./cs-CZ/common.json":[34259,4259],"./cs-CZ/index.json":[68540,8540],"./cs-CZ/language.json":[61373,1373],"./de-DE/common.json":[15217,5217],"./de-DE/index.json":[13160,3160],"./de-DE/language.json":[61784,1784],"./en-US/common.json":[46883,6883],"./en-US/index.json":[85514,8541],"./en-US/language.json":[90240,240],"./es-ES/common.json":[89492,9492],"./es-ES/index.json":[79836,9836],"./es-ES/language.json":[89301,9301],"./es-MX/common.json":[72807,2807],"./es-MX/index.json":[62220,2220],"./es-MX/language.json":[37322,7322],"./fi-FI/common.json":[75742,5742],"./fi-FI/index.json":[87637,7637],"./fi-FI/language.json":[19067,9067],"./fr-FR/common.json":[23311,3311],"./fr-FR/index.json":[71479,1479],"./fr-FR/language.json":[42098,2098],"./hi-IN/common.json":[74474,4474],"./hi-IN/index.json":[85158,5158],"./hi-IN/language.json":[35513,5513],"./hu-HU/common.json":[55189,5189],"./hu-HU/index.json":[39146,9146],"./hu-HU/language.json":[66307,6307],"./ja-JP/common.json":[62612,2612],"./ja-JP/index.json":[54274,4274],"./ja-JP/language.json":[89297,9297],"./ko-KR/common.json":[7714,7714],"./ko-KR/index.json":[97934,7934],"./ko-KR/language.json":[4795,4795],"./no-NO/common.json":[98555,8555],"./no-NO/index.json":[9689,9689],"./no-NO/language.json":[46072,6072],"./pl-PL/common.json":[5358,5358],"./pl-PL/index.json":[16541,6541],"./pl-PL/language.json":[53485,3485],"./pt-BR/common.json":[24351,4351],"./pt-BR/index.json":[48314,8314],"./pt-BR/language.json":[89685,9685],"./ro-RO/common.json":[50385,385],"./ro-RO/index.json":[32042,2042],"./ro-RO/language.json":[34383,4383],"./ru-RU/common.json":[82156,2156],"./ru-RU/index.json":[39418,9418],"./ru-RU/language.json":[69588,9588],"./th-TH/common.json":[63648,3648],"./th-TH/index.json":[26133,6133],"./th-TH/language.json":[20604,604],"./tr-TR/common.json":[68086,8086],"./tr-TR/index.json":[6750,6750],"./tr-TR/language.json":[69557,9557],"./uk-UA/common.json":[5047,5047],"./uk-UA/index.json":[35626,5626],"./uk-UA/language.json":[97847,7847],"./vi-VN/common.json":[43418,3418],"./vi-VN/index.json":[74525,4525],"./vi-VN/language.json":[21719,1719],"./zh-CN/common.json":[19489,9489],"./zh-CN/index.json":[40401,401],"./zh-CN/language.json":[44323,4323],"./zh-TW/common.json":[62199,2199],"./zh-TW/index.json":[68312,8312],"./zh-TW/language.json":[38796,8796]};function o(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],o=n[0];return t.e(n[1]).then(function(){return t.t(o,19)})}o.keys=function(){return Object.keys(r)},o.id=94781,e.exports=o},8335:function(e,n,t){Promise.resolve().then(t.bind(t,22418)),Promise.resolve().then(t.bind(t,81623)),Promise.resolve().then(t.bind(t,56815)),Promise.resolve().then(t.bind(t,60753))},69518:function(e,n,t){"use strict";let{defineConfig:r}=t(65253);e.exports=r({entry:"./src/i18n/locales/en-US",entryLocale:"en-US",output:"./src/i18n/locales",outputLocales:["cs-CZ","de-DE","en-US","es-ES","es-MX","fi-FI","fr-FR","hi-IN","hu-HU","ja-JP","ko-KR","no-NO","pl-PL","pt-BR","ro-RO","ru-RU","th-TH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"],experimental:{jsonMode:!0},markdown:{entry:["./README.md"],entryLocale:"en-US",outputLocales:["zh-CN","zh-TW"]}})},22418:function(e,n,t){"use strict";t.d(n,{default:function(){return l}});var r=t(52948),o=t(24293),s=t(44645),a=t(92887),i=t(44783),u=t(81623),c=t(26478);function l(){let{data:e,refetch:n}=(0,s.a)({queryKey:["postAdminConfigGetSiteConfig"],queryFn:async()=>{let{data:e}=await (0,o.V7)();return e.data}});async function t(t,r){if((null==e?void 0:e[t])!==r)try{await (0,o.zv)({...e,[t]:r}),a.A.success("保存成功"),n()}catch(e){}}return(0,r.jsx)(c.iA,{children:(0,r.jsxs)(c.RM,{children:[(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"LOGO"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"用于显示需要LOGO的地方。"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"请输入LOGO URL，末尾不要/",defaultValue:null==e?void 0:e.site_logo,onBlur:e=>{t("site_logo",e.target.value)}})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"站点名称"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"用于显示需要站点名称的地方。"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"请输入站点名称",defaultValue:null==e?void 0:e.site_name,onBlur:e=>{t("site_name",e.target.value)}})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"站点描述"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"用于显示需要站点描述的地方"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"请输入站点描述",defaultValue:null==e?void 0:e.site_desc,onBlur:e=>{t("site_desc",e.target.value)}})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"站点网址"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"当前网站最新网址，将会在邮件等需要用于网址处体现。"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"请输入站点URL，末尾不要/",defaultValue:null==e?void 0:e.host,onBlur:e=>{t("host",e.target.value)}})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"用户条款(TOS)URL"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"用于跳转到用户条款(TOS)"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"请输入到用户条款URL，末尾不要/",defaultValue:null==e?void 0:e.tos_url,onBlur:e=>{t("tos_url",e.target.value)}})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"货币单位"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"仅用于展示使用，更改后系统中所有的货币单位都将发生变更。"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"CNY"})})]}),(0,r.jsxs)(c.SC,{children:[(0,r.jsxs)(c.pj,{children:[(0,r.jsx)(u.Label,{children:"货币符号"}),(0,r.jsx)("p",{className:"text-xs text-muted-foreground",children:"仅用于展示使用，更改后系统中所有的货币单位都将发生变更。"})]}),(0,r.jsx)(c.pj,{className:"text-right",children:(0,r.jsx)(i.I,{placeholder:"\xa5"})})]})]})})}},44783:function(e,n,t){"use strict";t.d(n,{I:function(){return a}});var r=t(52948),o=t(30786),s=t(33412);let a=o.forwardRef((e,n)=>{let{className:t,type:o,...a}=e;return(0,r.jsx)("input",{type:o,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...a})});a.displayName="Input"},81623:function(e,n,t){"use strict";t.r(n),t.d(n,{Label:function(){return c}});var r=t(52948),o=t(30786),s=t(47115),a=t(14709),i=t(33412);let u=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(s.f,{ref:n,className:(0,i.cn)(u(),t),...o})});c.displayName=s.f.displayName},56815:function(e,n,t){"use strict";t.r(n),t.d(n,{Switch:function(){return i}});var r=t(52948),o=t(30786),s=t(84051),a=t(33412);let i=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(s.fC,{className:(0,a.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...o,ref:n,children:(0,r.jsx)(s.bU,{className:(0,a.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});i.displayName=s.fC.displayName},26478:function(e,n,t){"use strict";t.d(n,{RM:function(){return u},SC:function(){return c},iA:function(){return a},pj:function(){return d},ss:function(){return l},xD:function(){return i}});var r=t(52948),o=t(30786),s=t(33412);let a=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:n,className:(0,s.cn)("w-full caption-bottom text-sm",t),...o})})});a.displayName="Table";let i=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("thead",{ref:n,className:(0,s.cn)("[&_tr]:border-b",t),...o})});i.displayName="TableHeader";let u=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("tbody",{ref:n,className:(0,s.cn)("[&_tr:last-child]:border-0",t),...o})});u.displayName="TableBody",o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("tfoot",{ref:n,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...o})}).displayName="TableFooter";let c=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("tr",{ref:n,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...o})});c.displayName="TableRow";let l=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("th",{ref:n,className:(0,s.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...o})});l.displayName="TableHead";let d=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("td",{ref:n,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...o})});d.displayName="TableCell",o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("caption",{ref:n,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",t),...o})}).displayName="TableCaption"},60753:function(e,n,t){"use strict";t.r(n),t.d(n,{Tabs:function(){return i},TabsContent:function(){return l},TabsList:function(){return u},TabsTrigger:function(){return c}});var r=t(52948),o=t(30786),s=t(3536),a=t(33412);let i=s.fC,u=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(s.aV,{ref:n,className:(0,a.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",t),...o})});u.displayName=s.aV.displayName;let c=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(s.xz,{ref:n,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",t),...o})});c.displayName=s.xz.displayName;let l=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(s.VY,{ref:n,className:(0,a.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...o})});l.displayName=s.VY.displayName},80621:function(e,n,t){"use strict";t.d(n,{useLanguage:function(){return f},useTranslation:function(){return d}});var r=t(30786),o=t(22336),s=t(38435),a=t(95804),i=t(70956),u=t(81681),c=t(87812),l=t(26127);function d(e,n,t){let o=(0,i.$G)(n,t),{i18n:s}=o;{let[n,t]=(0,r.useState)(s.resolvedLanguage);(0,r.useEffect)(()=>{n!==s.resolvedLanguage&&t(s.resolvedLanguage)},[n,s.resolvedLanguage]),(0,r.useEffect)(()=>{e&&s.resolvedLanguage!==e&&s.changeLanguage(e)},[e,s]),(0,r.useEffect)(()=>{(0,c.ej)(l.YN)!==e&&(0,c.d8)(l.YN,e)},[e])}return o}function f(){var e;let{lng:n}=(0,o.useParams)(),t=n||(0,c.ej)(l.YN)||(0,u.jU)()&&(null===(e=navigator)||void 0===e?void 0:e.language.split(",")[0])||l.A9,r=(0,o.useRouter)(),s=(0,o.usePathname)();return{lng:t,changeLanguage:e=>{(0,c.d8)(l.YN,e),r.push(s.replace("/".concat(t),"/".concat(e))),r.refresh()}}}s.ZP.use(i.Db).use((0,a.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init({...(0,l.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},26127:function(e,n,t){"use strict";t.d(n,{A9:function(){return a},FW:function(){return l},Mj:function(){return i},YN:function(){return c}});var r=t(81681),o=t(69518),s=t.n(o);let a=r.k$||s().entryLocale,i=s().outputLocales,u="index",c="language";function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return{supportedLngs:i,fallbackLng:a,lng:e,fallbackNS:u,defaultNS:u,ns:Array.isArray(n)?n:[n]}}},68119:function(e,n,t){"use strict";t.d(n,{i0:function(){return u},Mj:function(){return a.Mj},ZK:function(){return c.useLanguage},$G:function(){return c.useTranslation}});var r=t(38435),o=t(95804),s=t(39398),a=t(26127);let i=async(e,n)=>{let i=(0,r.Fs)();return await i.use(s.D).use((0,o.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init((0,a.FW)(e,n)),i};async function u(e,n,t){let r=await i(e,n);return{t:r.getFixedT(e,Array.isArray(n)?n[0]:n,null==t?void 0:t.keyPrefix),i18n:r}}var c=t(80621)},81681:function(e,n,t){"use strict";t.d(n,{$t:function(){return d},H5:function(){return i},Hj:function(){return m},SB:function(){return j},T5:function(){return c},at:function(){return g},jU:function(){return o},k$:function(){return s},t0:function(){return u},v:function(){return f},ws:function(){return a},xK:function(){return l}});var r=t(75350);let o=()=>!0,s=r.env.DEFAULT_LANGUAGE,a=r.env.DEFAULT_MODE||"system",i="system"===a?"light":a,u=r.env.DEFAULT_THEME||"blue";r.env.SITE_URL;let c=r.env.API_URL||"",l=r.env.EMAIL,d=r.env.GITHUB_LINK,f=r.env.TWITTER_LINK,m=r.env.DISCORD_LINK,j=r.env.INSTAGRAM_LINK,g=r.env.LINKEDIN_LINK;r.env.GOOGLE_TAG_MANAGER_ID,r.env.GOOGLE_ANALYTICS_ID,r.env.YANDEX_ANALYTICS_ID,r.env.FACEBOOK_ANALYTICS_ID,r.env.BAIDU_ANALYTICS_ID},87812:function(e,n,t){"use strict";t.d(n,{d8:function(){return f},ej:function(){return d},kT:function(){return m}});var r=t(46422);let o=()=>!0,s=e=>!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set,a=e=>!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies()),i=e=>{let n={};return e.getAll().forEach(e=>{let{name:t,value:r}=e;n[t]=r}),n},u=e=>{try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(n){return e}},c=e=>e?e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):e,l=e=>{let n;if(a(e)){if(null==e?void 0:e.req)return i(e.req.cookies);if(null==e?void 0:e.cookies)return i(e.cookies())}return(e&&(n=e.req),o())?(0,r.Q)(document.cookie)||{}:n&&n.cookies?n.cookies:n&&n.headers.cookie?(0,r.Q)(n.headers.cookie):{}},d=(e,n)=>{let t=l(n)[e];if(void 0!==t)return c(t)},f=(e,n,t)=>{let s,i,c;if(a(t)){let{req:r,res:o,cookies:s,...a}=t,i={name:e,value:u(n),...a};r&&r.cookies.set(i),o&&o.cookies.set(i),s&&s().set(i);return}if(t){let{req:e,res:n,...r}=t;i=e,c=n,s=r}let l=(0,r.q)(e,u(n),{path:"/",...s});if(o())document.cookie=l;else if(c&&i){let t=c.getHeader("Set-Cookie");if(Array.isArray(t)||(t=t?[String(t)]:[]),c.setHeader("Set-Cookie",t.concat(l)),i&&i.cookies){let t=i.cookies;""===n?delete t[e]:t[e]=u(n)}if(i&&i.headers&&i.headers.cookie){let t=(0,r.Q)(i.headers.cookie);""===n?delete t[e]:t[e]=u(n),i.headers.cookie=Object.entries(t).reduce((e,n)=>e.concat("".concat(n[0],"=").concat(n[1],";")),"")}}},m=(e,n)=>f(e,"",{...n,maxAge:-1})},39601:function(e,n,t){"use strict";var r=t(68119),o=t(28817),s=t(38435),a=t(92887),i=t(81681),u=t(87812);let c=o.Z.create({baseURL:i.T5});c.interceptors.request.use(async e=>{let n=(0,u.ej)("Authorization");return n&&(e.headers.Authorization=n),e},e=>Promise.reject(e)),c.interceptors.response.use(async e=>{let{t:n}=await (0,r.i0)(s.ZP.language,"common"),t=e.data.code;return 0!==t&&a.A.error(n("request.error.".concat(t))),e},async e=>{if(!e.config.skipErrorHandler){var n,t,o,i,u;let{t:c}=await (0,r.i0)(s.ZP.language,"common"),l=null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.code,d=l&&c("request.error.".concat(l));return d?a.A.error(d||(null===(i=e.response)||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:o.message)||(null===(u=e.response)||void 0===u?void 0:u.statusText)):a.A.error(c("request.error.default")),Promise.reject(e)}}),n.Z=c},33412:function(e,n,t){"use strict";t.d(n,{cn:function(){return s}});var r=t(57954),o=t(84405);function s(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,o.m6)((0,r.W)(n))}},24293:function(e,n,t){"use strict";t.d(n,{Dl:function(){return c},Eo:function(){return m},HZ:function(){return f},OF:function(){return i},Tb:function(){return j},V7:function(){return o},W4:function(){return g},_n:function(){return p},cx:function(){return a},d_:function(){return l},dm:function(){return d},th:function(){return h},uR:function(){return u},zv:function(){return s}});var r=t(39601);async function o(e){return(0,r.Z)("/admin/config/get_site_config",{method:"POST",...e||{}})}async function s(e,n){return(0,r.Z)("/admin/config/update_site_config",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function a(e,n){return(0,r.Z)("/admin/node_group/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function i(e,n){return(0,r.Z)("/admin/node_group/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function u(e,n){return(0,r.Z)("/admin/node_group/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function c(e,n){return(0,r.Z)("/admin/node_group/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function l(e,n){return(0,r.Z)("/admin/node/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function d(e,n){return(0,r.Z)("/admin/node/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function f(e,n){return(0,r.Z)("/admin/node/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function m(e,n){return(0,r.Z)("/admin/node/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function j(e,n){return(0,r.Z)("/admin/product/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function g(e,n){return(0,r.Z)("/admin/product/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function p(e){return(0,r.Z)("/admin/product/list",{method:"POST",...e||{}})}async function h(e,n){return(0,r.Z)("/admin/product/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}}},function(e){e.O(0,[1896,736,4699,2494,4645,3536,777,2100,1162,1744],function(){return e(e.s=8335)}),_N_E=e.O()}]);