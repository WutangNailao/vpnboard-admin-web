(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5025],{94781:function(e,n,t){var r={"./cs-CZ/common.json":[34259,4259],"./cs-CZ/index.json":[68540,8540],"./cs-CZ/language.json":[61373,1373],"./de-DE/common.json":[15217,5217],"./de-DE/index.json":[13160,3160],"./de-DE/language.json":[61784,1784],"./en-US/common.json":[46883,6883],"./en-US/index.json":[85514,8541],"./en-US/language.json":[90240,240],"./es-ES/common.json":[89492,9492],"./es-ES/index.json":[79836,9836],"./es-ES/language.json":[89301,9301],"./es-MX/common.json":[72807,2807],"./es-MX/index.json":[62220,2220],"./es-MX/language.json":[37322,7322],"./fi-FI/common.json":[75742,5742],"./fi-FI/index.json":[87637,7637],"./fi-FI/language.json":[19067,9067],"./fr-FR/common.json":[23311,3311],"./fr-FR/index.json":[71479,1479],"./fr-FR/language.json":[42098,2098],"./hi-IN/common.json":[74474,4474],"./hi-IN/index.json":[85158,5158],"./hi-IN/language.json":[35513,5513],"./hu-HU/common.json":[55189,5189],"./hu-HU/index.json":[39146,9146],"./hu-HU/language.json":[66307,6307],"./ja-JP/common.json":[62612,2612],"./ja-JP/index.json":[54274,4274],"./ja-JP/language.json":[89297,9297],"./ko-KR/common.json":[7714,7714],"./ko-KR/index.json":[97934,7934],"./ko-KR/language.json":[4795,4795],"./no-NO/common.json":[98555,8555],"./no-NO/index.json":[9689,9689],"./no-NO/language.json":[46072,6072],"./pl-PL/common.json":[5358,5358],"./pl-PL/index.json":[16541,6541],"./pl-PL/language.json":[53485,3485],"./pt-BR/common.json":[24351,4351],"./pt-BR/index.json":[48314,8314],"./pt-BR/language.json":[89685,9685],"./ro-RO/common.json":[50385,385],"./ro-RO/index.json":[32042,2042],"./ro-RO/language.json":[34383,4383],"./ru-RU/common.json":[82156,2156],"./ru-RU/index.json":[39418,9418],"./ru-RU/language.json":[69588,9588],"./th-TH/common.json":[63648,3648],"./th-TH/index.json":[26133,6133],"./th-TH/language.json":[20604,604],"./tr-TR/common.json":[68086,8086],"./tr-TR/index.json":[6750,6750],"./tr-TR/language.json":[69557,9557],"./uk-UA/common.json":[5047,5047],"./uk-UA/index.json":[35626,5626],"./uk-UA/language.json":[97847,7847],"./vi-VN/common.json":[43418,3418],"./vi-VN/index.json":[74525,4525],"./vi-VN/language.json":[21719,1719],"./zh-CN/common.json":[19489,9489],"./zh-CN/index.json":[40401,401],"./zh-CN/language.json":[44323,4323],"./zh-TW/common.json":[62199,2199],"./zh-TW/index.json":[68312,8312],"./zh-TW/language.json":[38796,8796]};function o(e){if(!t.o(r,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=r[e],o=n[0];return t.e(n[1]).then(function(){return t.t(o,19)})}o.keys=function(){return Object.keys(r)},o.id=94781,e.exports=o},26848:function(e,n,t){Promise.resolve().then(t.bind(t,58725))},69518:function(e,n,t){"use strict";let{defineConfig:r}=t(65253);e.exports=r({entry:"./src/i18n/locales/en-US",entryLocale:"en-US",output:"./src/i18n/locales",outputLocales:["cs-CZ","de-DE","en-US","es-ES","es-MX","fi-FI","fr-FR","hi-IN","hu-HU","ja-JP","ko-KR","no-NO","pl-PL","pt-BR","ro-RO","ru-RU","th-TH","tr-TR","uk-UA","vi-VN","zh-CN","zh-TW"],experimental:{jsonMode:!0},markdown:{entry:["./README.md"],entryLocale:"en-US",outputLocales:["zh-CN","zh-TW"]}})},58725:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var r=t(52948),o=t(26614),a=t(19921),s=t(56815),i=t(44517),c=t(78324),u=t(30786),l=t(24293),d=t(72216),f=t(89986),m=t(44645),p=t(83336),h=t(46959),g=t(2720),j=t(44783),x=t(18849),v=t(52467),y=t(33412);let b=u.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)("textarea",{className:(0,y.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:n,...o})});b.displayName="Textarea";let N=h.z.object({user_name:h.z.string().min(2,{message:"name must be at least 2 characters."})});function k(e){let{onSubmit:n,initialValues:t,loading:o,trigger:s,title:i}=e,[c,h]=(0,u.useState)(!1),y=(0,p.cI)({resolver:(0,d.F)(N),defaultValues:{...t}});async function k(e){await n(e)&&h(!1)}(0,u.useEffect)(()=>{null==y||y.reset(t)},[y,t]);let{data:T}=(0,m.a)({queryKey:["postAdminProductList"],queryFn:async()=>{let{data:e}=await (0,l._n)();return e.data}});return(0,r.jsxs)(v.yo,{open:c,onOpenChange:h,children:[(0,r.jsx)(v.aM,{asChild:!0,children:(0,r.jsx)(a.z,{size:"sm",onClick:()=>{y.reset(),h(!0)},children:s})}),(0,r.jsxs)(v.ue,{children:[(0,r.jsx)(v.Tu,{children:(0,r.jsx)(v.bC,{children:i})}),(0,r.jsx)(x.x,{className:"-mx-6 h-[calc(100vh-48px-36px-36px)]",children:(0,r.jsx)(g.l0,{...y,children:(0,r.jsxs)("form",{onSubmit:y.handleSubmit(k),className:"space-y-4 px-6 pt-4",children:[(0,r.jsx)(g.Wi,{control:y.control,name:"user_name",render:e=>{let{field:n}=e;return(0,r.jsxs)(g.xJ,{children:[(0,r.jsx)(g.lX,{children:"标题"}),(0,r.jsx)(g.NI,{children:(0,r.jsx)(j.I,{placeholder:"请输入",...n})}),(0,r.jsx)(g.zG,{})]})}}),(0,r.jsx)(g.Wi,{control:y.control,name:"context",render:e=>{let{field:n}=e;return(0,r.jsxs)(g.xJ,{children:[(0,r.jsx)(g.lX,{children:"公告内容"}),(0,r.jsx)(g.NI,{children:(0,r.jsx)(b,{placeholder:"请输入公告内容 (支持 Markdown)",...n})}),(0,r.jsx)(g.zG,{})]})}})]})})}),(0,r.jsxs)(v.FF,{className:"pt-3",children:[(0,r.jsx)(a.z,{variant:"outline",disabled:o,onClick:()=>{h(!1)},children:"取消"}),(0,r.jsxs)(a.z,{disabled:o,onClick:y.handleSubmit(k),children:[o&&(0,r.jsx)(f.Icon,{icon:"mdi:loading",className:"mr-2 animate-spin"})," 确定"]})]})]})]})}function T(){return(0,r.jsx)(i.w,{header:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{children:"公告列表"}),(0,r.jsx)(k,{trigger:"新建",title:"新建公告",onSubmit:async()=>!0})]}),columns:[{accessorKey:"enable",header:"启用",cell:e=>{let{row:n}=e;return(0,r.jsx)(s.Switch,{checked:n.getValue("enabled")})}},{accessorKey:"title",header:"标题"},{accessorKey:"context",header:"公告内容"},{accessorKey:"updated_at",header:"更新时间",cell:e=>{let{row:n}=e;return(0,o.p6)(n.getValue("updated_at"),"yyyy-MM-dd HH:mm:ss")}},{id:"actions",accessorKey:"id",header:()=>(0,r.jsx)("div",{className:"text-right",children:"操作"}),cell:e=>{let{row:n}=e;return(0,r.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,r.jsx)(a.z,{children:"编辑"}),(0,r.jsx)(c.Z,{trigger:"删除",title:"你确定要删除吗?",description:"删除后数据将无法恢复，请谨慎操作",onConfirm:async()=>{},onCancelText:"取消",onConfirmText:"确认"})]})}}],data:[],pagination:{page:1,size:0,total:0},operations:{remove:async e=>{}}})}},2720:function(e,n,t){"use strict";t.d(n,{NI:function(){return g},Wi:function(){return d},l0:function(){return u},lX:function(){return h},xJ:function(){return p},zG:function(){return j}});var r=t(52948),o=t(30786),a=t(63911),s=t(83336),i=t(33412),c=t(81623);let u=s.RV,l=o.createContext({}),d=e=>{let{...n}=e;return(0,r.jsx)(l.Provider,{value:{name:n.name},children:(0,r.jsx)(s.Qr,{...n})})},f=()=>{let e=o.useContext(l),n=o.useContext(m),{getFieldState:t,formState:r}=(0,s.Gc)(),a=t(e.name,r);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=n;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...a}},m=o.createContext({}),p=o.forwardRef((e,n)=>{let{className:t,...a}=e,s=o.useId();return(0,r.jsx)(m.Provider,{value:{id:s},children:(0,r.jsx)("div",{ref:n,className:(0,i.cn)("space-y-2",t),...a})})});p.displayName="FormItem";let h=o.forwardRef((e,n)=>{let{className:t,...o}=e,{error:a,formItemId:s}=f();return(0,r.jsx)(c.Label,{ref:n,className:(0,i.cn)(a&&"text-destructive",t),htmlFor:s,...o})});h.displayName="FormLabel";let g=o.forwardRef((e,n)=>{let{...t}=e,{error:o,formItemId:s,formDescriptionId:i,formMessageId:c}=f();return(0,r.jsx)(a.g7,{ref:n,id:s,"aria-describedby":o?"".concat(i," ").concat(c):"".concat(i),"aria-invalid":!!o,...t})});g.displayName="FormControl",o.forwardRef((e,n)=>{let{className:t,...o}=e,{formDescriptionId:a}=f();return(0,r.jsx)("p",{ref:n,id:a,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",t),...o})}).displayName="FormDescription";let j=o.forwardRef((e,n)=>{let{className:t,children:o,...a}=e,{error:s,formMessageId:c}=f(),u=s?String(null==s?void 0:s.message):o;return u?(0,r.jsx)("p",{ref:n,id:c,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",t),...a,children:u}):null});j.displayName="FormMessage"},18849:function(e,n,t){"use strict";t.d(n,{B:function(){return c},x:function(){return i}});var r=t(52948),o=t(30786),a=t(66035),s=t(33412);let i=o.forwardRef((e,n)=>{let{className:t,children:o,...i}=e;return(0,r.jsxs)(a.fC,{ref:n,className:(0,s.cn)("relative overflow-hidden",t),...i,children:[(0,r.jsx)(a.l_,{className:"size-full rounded-[inherit]",children:o}),(0,r.jsx)(c,{}),(0,r.jsx)(a.Ns,{})]})});i.displayName=a.fC.displayName;let c=o.forwardRef((e,n)=>{let{className:t,orientation:o="vertical",...i}=e;return(0,r.jsx)(a.gb,{ref:n,orientation:o,className:(0,s.cn)("flex touch-none select-none transition-colors","vertical"===o&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===o&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",t),...i,children:(0,r.jsx)(a.q4,{className:"relative flex-1 rounded-full bg-border"})})});c.displayName=a.gb.displayName},52467:function(e,n,t){"use strict";t.d(n,{FF:function(){return g},Tu:function(){return h},aM:function(){return l},bC:function(){return j},ue:function(){return p},yo:function(){return u}});var r=t(52948),o=t(30786),a=t(97647),s=t(28523),i=t(14709),c=t(33412);let u=a.fC,l=a.xz;a.x8;let d=a.h_,f=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(a.aV,{className:(0,c.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...o,ref:n})});f.displayName=a.aV.displayName;let m=(0,i.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=o.forwardRef((e,n)=>{let{side:t="right",className:o,children:i,...u}=e;return(0,r.jsxs)(d,{children:[(0,r.jsx)(f,{}),(0,r.jsxs)(a.VY,{ref:n,className:(0,c.cn)(m({side:t}),o),...u,children:[i,(0,r.jsxs)(a.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(s.Pxu,{className:"size-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=a.VY.displayName;let h=e=>{let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,c.cn)("flex flex-col space-y-2 text-center sm:text-left",n),...t})};h.displayName="SheetHeader";let g=e=>{let{className:n,...t}=e;return(0,r.jsx)("div",{className:(0,c.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",n),...t})};g.displayName="SheetFooter";let j=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(a.Dx,{ref:n,className:(0,c.cn)("text-lg font-semibold text-foreground",t),...o})});j.displayName=a.Dx.displayName,o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(a.dk,{ref:n,className:(0,c.cn)("text-sm text-muted-foreground",t),...o})}).displayName=a.dk.displayName},56815:function(e,n,t){"use strict";t.r(n),t.d(n,{Switch:function(){return i}});var r=t(52948),o=t(30786),a=t(84051),s=t(33412);let i=o.forwardRef((e,n)=>{let{className:t,...o}=e;return(0,r.jsx)(a.fC,{className:(0,s.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",t),...o,ref:n,children:(0,r.jsx)(a.bU,{className:(0,s.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});i.displayName=a.fC.displayName},80621:function(e,n,t){"use strict";t.d(n,{useLanguage:function(){return f},useTranslation:function(){return d}});var r=t(30786),o=t(22336),a=t(38435),s=t(95804),i=t(70956),c=t(81681),u=t(87812),l=t(26127);function d(e,n,t){let o=(0,i.$G)(n,t),{i18n:a}=o;{let[n,t]=(0,r.useState)(a.resolvedLanguage);(0,r.useEffect)(()=>{n!==a.resolvedLanguage&&t(a.resolvedLanguage)},[n,a.resolvedLanguage]),(0,r.useEffect)(()=>{e&&a.resolvedLanguage!==e&&a.changeLanguage(e)},[e,a]),(0,r.useEffect)(()=>{(0,u.ej)(l.YN)!==e&&(0,u.d8)(l.YN,e)},[e])}return o}function f(){var e;let{lng:n}=(0,o.useParams)(),t=n||(0,u.ej)(l.YN)||(0,c.jU)()&&(null===(e=navigator)||void 0===e?void 0:e.language.split(",")[0])||l.A9,r=(0,o.useRouter)(),a=(0,o.usePathname)();return{lng:t,changeLanguage:e=>{(0,u.d8)(l.YN,e),r.push(a.replace("/".concat(t),"/".concat(e))),r.refresh()}}}a.ZP.use(i.Db).use((0,s.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init({...(0,l.FW)(),lng:void 0,detection:{order:["path","htmlTag","cookie","navigator"]},preload:[]})},26127:function(e,n,t){"use strict";t.d(n,{A9:function(){return s},FW:function(){return l},Mj:function(){return i},YN:function(){return u}});var r=t(81681),o=t(69518),a=t.n(o);let s=r.k$||a().entryLocale,i=a().outputLocales,c="index",u="language";function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return{supportedLngs:i,fallbackLng:s,lng:e,fallbackNS:c,defaultNS:c,ns:Array.isArray(n)?n:[n]}}},68119:function(e,n,t){"use strict";t.d(n,{i0:function(){return c},Mj:function(){return s.Mj},ZK:function(){return u.useLanguage},$G:function(){return u.useTranslation}});var r=t(38435),o=t(95804),a=t(39398),s=t(26127);let i=async(e,n)=>{let i=(0,r.Fs)();return await i.use(a.D).use((0,o.Z)((e,n)=>t(94781)("./".concat(e,"/").concat(n,".json")))).init((0,s.FW)(e,n)),i};async function c(e,n,t){let r=await i(e,n);return{t:r.getFixedT(e,Array.isArray(n)?n[0]:n,null==t?void 0:t.keyPrefix),i18n:r}}var u=t(80621)},81681:function(e,n,t){"use strict";t.d(n,{$t:function(){return d},H5:function(){return i},Hj:function(){return m},SB:function(){return p},T5:function(){return u},at:function(){return h},jU:function(){return o},k$:function(){return a},t0:function(){return c},v:function(){return f},ws:function(){return s},xK:function(){return l}});var r=t(75350);let o=()=>!0,a=r.env.DEFAULT_LANGUAGE,s=r.env.DEFAULT_MODE||"system",i="system"===s?"light":s,c=r.env.DEFAULT_THEME||"blue";r.env.SITE_URL;let u=r.env.API_URL||"",l=r.env.EMAIL,d=r.env.GITHUB_LINK,f=r.env.TWITTER_LINK,m=r.env.DISCORD_LINK,p=r.env.INSTAGRAM_LINK,h=r.env.LINKEDIN_LINK;r.env.GOOGLE_TAG_MANAGER_ID,r.env.GOOGLE_ANALYTICS_ID,r.env.YANDEX_ANALYTICS_ID,r.env.FACEBOOK_ANALYTICS_ID,r.env.BAIDU_ANALYTICS_ID},87812:function(e,n,t){"use strict";t.d(n,{d8:function(){return f},ej:function(){return d},kT:function(){return m}});var r=t(46422);let o=()=>!0,a=e=>!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set,s=e=>!!(null==e?void 0:e.req)&&"cookies"in e.req&&a(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&a(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&a(e.cookies()),i=e=>{let n={};return e.getAll().forEach(e=>{let{name:t,value:r}=e;n[t]=r}),n},c=e=>{try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(n){return e}},u=e=>e?e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):e,l=e=>{let n;if(s(e)){if(null==e?void 0:e.req)return i(e.req.cookies);if(null==e?void 0:e.cookies)return i(e.cookies())}return(e&&(n=e.req),o())?(0,r.Q)(document.cookie)||{}:n&&n.cookies?n.cookies:n&&n.headers.cookie?(0,r.Q)(n.headers.cookie):{}},d=(e,n)=>{let t=l(n)[e];if(void 0!==t)return u(t)},f=(e,n,t)=>{let a,i,u;if(s(t)){let{req:r,res:o,cookies:a,...s}=t,i={name:e,value:c(n),...s};r&&r.cookies.set(i),o&&o.cookies.set(i),a&&a().set(i);return}if(t){let{req:e,res:n,...r}=t;i=e,u=n,a=r}let l=(0,r.q)(e,c(n),{path:"/",...a});if(o())document.cookie=l;else if(u&&i){let t=u.getHeader("Set-Cookie");if(Array.isArray(t)||(t=t?[String(t)]:[]),u.setHeader("Set-Cookie",t.concat(l)),i&&i.cookies){let t=i.cookies;""===n?delete t[e]:t[e]=c(n)}if(i&&i.headers&&i.headers.cookie){let t=(0,r.Q)(i.headers.cookie);""===n?delete t[e]:t[e]=c(n),i.headers.cookie=Object.entries(t).reduce((e,n)=>e.concat("".concat(n[0],"=").concat(n[1],";")),"")}}},m=(e,n)=>f(e,"",{...n,maxAge:-1})},39601:function(e,n,t){"use strict";var r=t(68119),o=t(28817),a=t(38435),s=t(92887),i=t(81681),c=t(87812);let u=o.Z.create({baseURL:i.T5});u.interceptors.request.use(async e=>{let n=(0,c.ej)("Authorization");return n&&(e.headers.Authorization=n),e},e=>Promise.reject(e)),u.interceptors.response.use(async e=>{let{t:n}=await (0,r.i0)(a.ZP.language,"common"),t=e.data.code;return 0!==t&&s.A.error(n("request.error.".concat(t))),e},async e=>{if(!e.config.skipErrorHandler){var n,t,o,i,c;let{t:u}=await (0,r.i0)(a.ZP.language,"common"),l=null===(t=e.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.code,d=l&&u("request.error.".concat(l));return d?s.A.error(d||(null===(i=e.response)||void 0===i?void 0:null===(o=i.data)||void 0===o?void 0:o.message)||(null===(c=e.response)||void 0===c?void 0:c.statusText)):s.A.error(u("request.error.default")),Promise.reject(e)}}),n.Z=u},24293:function(e,n,t){"use strict";t.d(n,{Dl:function(){return u},Eo:function(){return m},HZ:function(){return f},OF:function(){return i},Tb:function(){return p},V7:function(){return o},W4:function(){return h},_n:function(){return g},cx:function(){return s},d_:function(){return l},dm:function(){return d},th:function(){return j},uR:function(){return c},zv:function(){return a}});var r=t(39601);async function o(e){return(0,r.Z)("/admin/config/get_site_config",{method:"POST",...e||{}})}async function a(e,n){return(0,r.Z)("/admin/config/update_site_config",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function s(e,n){return(0,r.Z)("/admin/node_group/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function i(e,n){return(0,r.Z)("/admin/node_group/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function c(e,n){return(0,r.Z)("/admin/node_group/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function u(e,n){return(0,r.Z)("/admin/node_group/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function l(e,n){return(0,r.Z)("/admin/node/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function d(e,n){return(0,r.Z)("/admin/node/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function f(e,n){return(0,r.Z)("/admin/node/list",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function m(e,n){return(0,r.Z)("/admin/node/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function p(e,n){return(0,r.Z)("/admin/product/create",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function h(e,n){return(0,r.Z)("/admin/product/delete",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}async function g(e){return(0,r.Z)("/admin/product/list",{method:"POST",...e||{}})}async function j(e,n){return(0,r.Z)("/admin/product/update",{method:"POST",headers:{"Content-Type":"application/json"},data:e,...n||{}})}},84051:function(e,n,t){"use strict";t.d(n,{bU:function(){return N},fC:function(){return b}});var r=t(98323),o=t(30786),a=t(88532),s=t(45477),i=t(69726),c=t(29367),u=t(20386),l=t(73123),d=t(99034);let f="Switch",[m,p]=(0,i.b)(f),[h,g]=m(f),j=(0,o.forwardRef)((e,n)=>{let{__scopeSwitch:t,name:i,checked:u,defaultChecked:l,required:f,disabled:m,value:p="on",onCheckedChange:g,...j}=e,[x,b]=(0,o.useState)(null),N=(0,s.e)(n,e=>b(e)),k=(0,o.useRef)(!1),T=!x||!!x.closest("form"),[C=!1,w]=(0,c.T)({prop:u,defaultProp:l,onChange:g});return(0,o.createElement)(h,{scope:t,checked:C,disabled:m},(0,o.createElement)(d.WV.button,(0,r.Z)({type:"button",role:"switch","aria-checked":C,"aria-required":f,"data-state":y(C),"data-disabled":m?"":void 0,disabled:m,value:p},j,{ref:N,onClick:(0,a.M)(e.onClick,e=>{w(e=>!e),T&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),T&&(0,o.createElement)(v,{control:x,bubbles:!k.current,name:i,value:p,checked:C,required:f,disabled:m,style:{transform:"translateX(-100%)"}}))}),x=(0,o.forwardRef)((e,n)=>{let{__scopeSwitch:t,...a}=e,s=g("SwitchThumb",t);return(0,o.createElement)(d.WV.span,(0,r.Z)({"data-state":y(s.checked),"data-disabled":s.disabled?"":void 0},a,{ref:n}))}),v=e=>{let{control:n,checked:t,bubbles:a=!0,...s}=e,i=(0,o.useRef)(null),c=(0,u.D)(t),d=(0,l.t)(n);return(0,o.useEffect)(()=>{let e=i.current,n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==t&&n){let r=new Event("click",{bubbles:a});n.call(e,t),e.dispatchEvent(r)}},[c,t,a]),(0,o.createElement)("input",(0,r.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:t},s,{tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return e?"checked":"unchecked"}let b=j,N=x}},function(e){e.O(0,[792,1896,736,9986,4699,466,7647,2494,5362,6856,6035,4645,839,2100,1162,1744],function(){return e(e.s=26848)}),_N_E=e.O()}]);