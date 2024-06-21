"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[839],{44517:function(e,t,a){a.d(t,{w:function(){return j}});var r=a(52948),s=a(30786),l=a(28523),n=a(66035),d=a(25784),i=a(30324),o=a(14709),c=a(33412);let u=(0,o.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),f=s.forwardRef((e,t)=>{let{className:a,variant:s,...l}=e;return(0,r.jsx)("div",{ref:t,role:"alert",className:(0,c.cn)(u({variant:s}),a),...l})});f.displayName="Alert";let m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("h5",{ref:t,className:(0,c.cn)("mb-1 font-medium leading-none tracking-tight",a),...s})});m.displayName="AlertTitle",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{ref:t,className:(0,c.cn)("text-sm [&_p]:leading-relaxed",a),...s})}).displayName="AlertDescription";var x=a(19921),p=a(33952),g=a(26478),h=a(78324),b=a(18849);function j(e){var t;let{header:a,columns:o,data:c,pagination:u={},operations:j={}}=e,{page:N=1,size:v=50,total:y=0,onChange:w}=u,{remove:C}=j,[R,k]=(0,s.useState)({}),z=(0,d.b7)({data:c,columns:[{id:"select",header:e=>{let{table:t}=e;return(0,r.jsx)(p.X,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,r.jsx)(p.X,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!1},...o],getCoreRowModel:(0,i.sC)(),pageCount:parseInt(((y+v-1)/v).toString()),onRowSelectionChange:k,state:{pagination:{pageIndex:N-1,pageSize:v},rowSelection:R}});return(0,r.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[a,z.getFilteredSelectedRowModel().rows.length>0&&(0,r.jsx)(f,{children:(0,r.jsxs)(m,{className:"mb-0 flex items-center justify-between",children:[(0,r.jsxs)("span",{children:["已选择 ",z.getFilteredSelectedRowModel().rows.length," 项"]}),(0,r.jsx)(h.Z,{trigger:"批量删除",title:"你确定要删除这些选项吗?",description:"删除后数据将无法恢复，请谨慎操作",onConfirm:()=>{null==C||C(Object.keys(R).map(e=>c[Number(e)]))},onCancelText:"取消",onConfirmText:"确认"})]})}),(0,r.jsxs)(n.xr,{className:"w-[calc(100vw-32px)] md:w-auto",children:[(0,r.jsxs)(g.iA,{className:"min-w-[800px]",children:[(0,r.jsx)(g.xD,{children:z.getHeaderGroups().map(e=>(0,r.jsx)(g.SC,{children:e.headers.map(e=>(0,r.jsx)(g.ss,{children:e.isPlaceholder?null:(0,d.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,r.jsx)(g.RM,{children:(null===(t=z.getRowModel().rows)||void 0===t?void 0:t.length)?z.getRowModel().rows.map(e=>(0,r.jsx)(g.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,r.jsx)(g.pj,{children:(0,d.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,r.jsx)(g.SC,{children:(0,r.jsx)(g.pj,{colSpan:o.length,className:"h-24 text-center",children:"No results."})})})]}),(0,r.jsx)(b.B,{orientation:"horizontal"})]}),(0,r.jsxs)("div",{className:"mt-4 flex items-center justify-between px-2",children:[(0,r.jsxs)("div",{className:"text-sm text-muted-foreground",children:["共 ",y," 项"]}),z.getPageCount()>1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"text-sm text-muted-foreground",children:["第 ",z.getState().pagination.pageIndex+1," 页 (共 ",z.getPageCount()," 页)"]}),(0,r.jsx)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsxs)(x.z,{variant:"outline",className:"hidden size-8 p-0 lg:flex",onClick:()=>{null==w||w(1,v)},disabled:!z.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,r.jsx)(l.kRt,{className:"size-4"})]}),(0,r.jsxs)(x.z,{variant:"outline",className:"size-8 p-0",onClick:()=>{null==w||w(N-1,v)},disabled:!z.getCanPreviousPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,r.jsx)(l.wyc,{className:"size-4"})]}),(0,r.jsxs)(x.z,{variant:"outline",className:"size-8 p-0",onClick:()=>{null==w||w(N+1,v)},disabled:!z.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,r.jsx)(l.XCv,{className:"size-4"})]}),(0,r.jsxs)(x.z,{variant:"outline",className:"hidden size-8 p-0 lg:flex",onClick:()=>{null==w||w(z.getPageCount(),v)},disabled:!z.getCanNextPage(),children:[(0,r.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,r.jsx)(l.yr4,{className:"size-4"})]})]})})]})]})]})}},78324:function(e,t,a){a.d(t,{Z:function(){return j}});var r=a(52948),s=a(30786),l=a(56100),n=a(33412),d=a(19921);let i=l.fC,o=l.xz,c=l.h_,u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});u.displayName=l.aV.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(l.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...s})]})});f.displayName=l.VY.displayName;let m=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};m.displayName="AlertDialogHeader";let x=e=>{let{className:t,...a}=e;return(0,r.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};x.displayName="AlertDialogFooter";let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold",a),...s})});p.displayName=l.Dx.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...s})});g.displayName=l.dk.displayName;let h=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.aU,{ref:t,className:(0,n.cn)((0,d.d)(),a),...s})});h.displayName=l.aU.displayName;let b=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.$j,{ref:t,className:(0,n.cn)((0,d.d)({variant:"outline"}),"mt-2 sm:mt-0",a),...s})});function j(e){let{trigger:t,title:a,description:s,onConfirm:l,onCancelText:n,onConfirmText:c}=e;return(0,r.jsxs)(i,{children:[(0,r.jsx)(o,{asChild:!0,children:(0,r.jsx)(d.z,{size:"sm",variant:"destructive",children:t})}),(0,r.jsxs)(f,{children:[(0,r.jsxs)(m,{children:[(0,r.jsx)(p,{children:a}),(0,r.jsx)(g,{children:s})]}),(0,r.jsxs)(x,{children:[(0,r.jsx)(b,{children:n}),(0,r.jsx)(h,{onClick:l,children:c})]})]})]})}b.displayName=l.$j.displayName},19921:function(e,t,a){a.d(t,{d:function(){return i},z:function(){return o}});var r=a(52948),s=a(30786),l=a(63911),n=a(14709),d=a(33412);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:a,variant:s,size:n,asChild:o=!1,...c}=e,u=o?l.g7:"button";return(0,r.jsx)(u,{className:(0,d.cn)(i({variant:s,size:n,className:a})),ref:t,...c})});o.displayName="Button"},33952:function(e,t,a){a.d(t,{X:function(){return i}});var r=a(52948),s=a(30786),l=a(25679),n=a(28523),d=a(33412);let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.fC,{ref:t,className:(0,d.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...s,children:(0,r.jsx)(l.z$,{className:(0,d.cn)("flex items-center justify-center text-current"),children:(0,r.jsx)(n.nQG,{className:"size-4"})})})});i.displayName=l.fC.displayName},44783:function(e,t,a){a.d(t,{I:function(){return n}});var r=a(52948),s=a(30786),l=a(33412);let n=s.forwardRef((e,t)=>{let{className:a,type:s,...n}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});n.displayName="Input"},81623:function(e,t,a){a.r(t),a.d(t,{Label:function(){return o}});var r=a(52948),s=a(30786),l=a(47115),n=a(14709),d=a(33412);let i=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(l.f,{ref:t,className:(0,d.cn)(i(),a),...s})});o.displayName=l.f.displayName},18849:function(e,t,a){a.d(t,{B:function(){return i},x:function(){return d}});var r=a(52948),s=a(30786),l=a(66035),n=a(33412);let d=s.forwardRef((e,t)=>{let{className:a,children:s,...d}=e;return(0,r.jsxs)(l.fC,{ref:t,className:(0,n.cn)("relative overflow-hidden",a),...d,children:[(0,r.jsx)(l.l_,{className:"size-full rounded-[inherit]",children:s}),(0,r.jsx)(i,{}),(0,r.jsx)(l.Ns,{})]})});d.displayName=l.fC.displayName;let i=s.forwardRef((e,t)=>{let{className:a,orientation:s="vertical",...d}=e;return(0,r.jsx)(l.gb,{ref:t,orientation:s,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...d,children:(0,r.jsx)(l.q4,{className:"relative flex-1 rounded-full bg-border"})})});i.displayName=l.gb.displayName},26478:function(e,t,a){a.d(t,{RM:function(){return i},SC:function(){return o},iA:function(){return n},pj:function(){return u},ss:function(){return c},xD:function(){return d}});var r=a(52948),s=a(30786),l=a(33412);let n=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("div",{className:"relative w-full overflow-auto",children:(0,r.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",a),...s})})});n.displayName="Table";let d=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",a),...s})});d.displayName="TableHeader";let i=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",a),...s})});i.displayName="TableBody",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...s})}).displayName="TableFooter";let o=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...s})});o.displayName="TableRow";let c=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("th",{ref:t,className:(0,l.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...s})});c.displayName="TableHead";let u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("td",{ref:t,className:(0,l.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...s})});u.displayName="TableCell",s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",a),...s})}).displayName="TableCaption"},33412:function(e,t,a){a.d(t,{cn:function(){return l}});var r=a(57954),s=a(84405);function l(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,s.m6)((0,r.W)(t))}}}]);