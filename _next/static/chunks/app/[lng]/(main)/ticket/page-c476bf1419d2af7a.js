(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3895],{46792:function(e,t,s){Promise.resolve().then(s.bind(s,89922))},89922:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return w}});var a=s(52948),r=s(30786),n=s(89986),l=s(26614),i=s(33412),d=s(19921),c=s(572);let o=e=>{let{shouldScaleBackground:t=!0,...s}=e;return(0,a.jsx)(c.d.Root,{shouldScaleBackground:t,...s})};o.displayName="Drawer",c.d.Trigger;let u=c.d.Portal;c.d.Close;let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.d.Overlay,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80",s),...r})});m.displayName=c.d.Overlay.displayName;let f=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(c.d.Content,{ref:t,className:(0,i.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",s),...n,children:[(0,a.jsx)("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),r]})]})});f.displayName="DrawerContent";let x=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("grid gap-1.5 p-4 text-center sm:text-left",t),...s})};x.displayName="DrawerHeader";let p=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,i.cn)("mt-auto flex flex-col gap-2 p-4",t),...s})};p.displayName="DrawerFooter";let g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.d.Title,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});g.displayName=c.d.Title.displayName;let h=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.d.Description,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",s),...r})});h.displayName=c.d.Description.displayName;var y=s(44783),j=s(81623),N=s(60753),b=s(44517),v=s(78324);function w(){let[e,t]=(0,r.useState)({}),[s,c]=(0,r.useState)(""),u=(0,r.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.w,{header:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("h1",{children:"工单列表"}),(0,a.jsx)(N.Tabs,{defaultValue:"enable",children:(0,a.jsxs)(N.TabsList,{children:[(0,a.jsx)(N.TabsTrigger,{value:"enable",children:"已开启"}),(0,a.jsx)(N.TabsTrigger,{value:"close",children:"已关闭"})]})})]}),columns:[{accessorKey:"title",header:"标题"},{accessorKey:"status",header:"工单状态"},{accessorKey:"created_at",header:"创建时间",cell:e=>{let{row:t}=e;return(0,l.p6)(t.getValue("created_at"),"yyyy-MM-dd HH:mm:ss")}},{accessorKey:"updated_at",header:"更新时间",cell:e=>{let{row:t}=e;return(0,l.p6)(t.getValue("updated_at"),"yyyy-MM-dd HH:mm:ss")}},{id:"actions",accessorKey:"id",header:()=>(0,a.jsx)("div",{className:"text-right",children:"操作"}),cell:e=>{let{row:s}=e;return(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,a.jsx)(d.z,{size:"sm",onClick:()=>{t({id:1,title:"静态数据",context:"这里是描述遇到了什么问题",created_at:new Date,updated_at:new Date})},children:"回复"}),(0,a.jsx)(d.z,{size:"sm",children:"关闭"}),(0,a.jsx)(v.Z,{trigger:"删除",title:"你确定要删除吗?",description:"删除后数据将无法恢复，请谨慎操作",onConfirm:async()=>{},onCancelText:"取消",onConfirmText:"确认"})]})}}],data:[{id:1,title:"静态数据",context:"",created_at:"2024-06-16 00:18:58",updated_at:"2024-06-16 00:18:58"}],pagination:{page:1,size:0,total:0},operations:{remove:async e=>{}}}),(0,a.jsx)(o,{open:!!(null==e?void 0:e.id),onOpenChange:e=>{e||t(null)},children:(0,a.jsxs)(f,{className:"container h-screen",children:[(0,a.jsxs)(x,{className:"border-b",children:[(0,a.jsx)(g,{children:null==e?void 0:e.title}),(0,a.jsx)(h,{children:null==e?void 0:e.context})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 p-4",children:[(0,a.jsx)("div",{className:(0,i.cn)("flex items-center gap-4",{"flex-row-reverse":!1}),children:(0,a.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-1",{"items-end":!1}),children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:(0,l.p6)(new Date("2024-06-16 00:18:58"),"yyyy-MM-dd HH:mm:ss")}),(0,a.jsx)("p",{className:(0,i.cn)("w-fit rounded-lg bg-accent p-2 font-medium",{"bg-primary text-primary-foreground":!1}),children:"回复"})]})}),(0,a.jsx)("div",{className:(0,i.cn)("flex items-center gap-4",{"flex-row-reverse":!0}),children:(0,a.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-1",{"items-end":!0}),children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:(0,l.p6)(new Date("2024-06-16 00:18:58"),"yyyy-MM-dd HH:mm:ss")}),(0,a.jsx)("p",{className:(0,i.cn)("w-fit rounded-lg bg-accent p-2 font-medium",{"bg-primary text-primary-foreground":!0}),children:"演示"})]})})]}),(0,a.jsxs)(p,{className:"flex w-full flex-row items-center gap-2",children:[(0,a.jsxs)(d.z,{variant:"outline",className:"p-0",children:[(0,a.jsx)(j.Label,{htmlFor:"picture",className:"p-2",children:(0,a.jsx)(n.Icon,{icon:"mdi:image",className:"text-2xl"})}),(0,a.jsx)(y.I,{id:"picture",type:"file",className:"hidden"})]}),(0,a.jsx)(y.I,{placeholder:"请在此输入您的问题，我们会尽快回复您。",onChange:e=>c(e.target.value),value:s,onKeyDown:e=>{if("Enter"===e.key||13===e.keyCode&&s.trim()){var t;null==u||null===(t=u.current)||void 0===t||t.click()}}}),(0,a.jsx)(d.z,{ref:u,onClick:async()=>{c("")},children:"发送"})]})]})})]})}},60753:function(e,t,s){"use strict";s.r(t),s.d(t,{Tabs:function(){return i},TabsContent:function(){return o},TabsList:function(){return d},TabsTrigger:function(){return c}});var a=s(52948),r=s(30786),n=s(3536),l=s(33412);let i=n.fC,d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.aV,{ref:t,className:(0,l.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",s),...r})});d.displayName=n.aV.displayName;let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.xz,{ref:t,className:(0,l.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",s),...r})});c.displayName=n.xz.displayName;let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.VY,{ref:t,className:(0,l.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",s),...r})});o.displayName=n.VY.displayName}},function(e){e.O(0,[792,736,9986,466,7647,5362,3536,2405,839,2100,1162,1744],function(){return e(e.s=46792)}),_N_E=e.O()}]);