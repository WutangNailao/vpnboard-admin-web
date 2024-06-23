"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4517],{44517:function(e,t,a){a.d(t,{w:function(){return N}});var s=a(52948),l=a(30786),r=a(28523),n=a(66035),d=a(25784),i=a(30324),o=a(14709),c=a(33412);let x=(0,o.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),m=l.forwardRef((e,t)=>{let{className:a,variant:l,...r}=e;return(0,s.jsx)("div",{ref:t,role:"alert",className:(0,c.cn)(x({variant:l}),a),...r})});m.displayName="Alert";let u=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("h5",{ref:t,className:(0,c.cn)("mb-1 font-medium leading-none tracking-tight",a),...l})});u.displayName="AlertTitle",l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)("div",{ref:t,className:(0,c.cn)("text-sm [&_p]:leading-relaxed",a),...l})}).displayName="AlertDescription";var g=a(19921),f=a(33952),p=a(26478),h=a(78324),j=a(18849);function N(e){var t;let{header:a,columns:o,data:c,pagination:x={},operations:N={}}=e,{page:v=1,size:w=50,total:b=0,onChange:y}=x,{remove:C}=N,[k,z]=(0,l.useState)({}),R=(0,d.b7)({data:c,columns:[{id:"select",header:e=>{let{table:t}=e;return(0,s.jsx)(f.X,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,s.jsx)(f.X,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!1},...o],getCoreRowModel:(0,i.sC)(),pageCount:parseInt(((b+w-1)/w).toString()),onRowSelectionChange:z,state:{pagination:{pageIndex:v-1,pageSize:w},rowSelection:k}});return(0,s.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[a,R.getFilteredSelectedRowModel().rows.length>0&&(0,s.jsx)(m,{children:(0,s.jsxs)(u,{className:"mb-0 flex items-center justify-between",children:[(0,s.jsxs)("span",{children:["已选择 ",R.getFilteredSelectedRowModel().rows.length," 项"]}),(0,s.jsx)(h.Z,{trigger:"批量删除",title:"你确定要删除这些选项吗?",description:"删除后数据将无法恢复，请谨慎操作",onConfirm:()=>{null==C||C(Object.keys(k).map(e=>c[Number(e)]))},onCancelText:"取消",onConfirmText:"确认"})]})}),(0,s.jsxs)(n.xr,{className:"w-[calc(100vw-32px)] md:w-auto",children:[(0,s.jsxs)(p.iA,{className:"min-w-[800px]",children:[(0,s.jsx)(p.xD,{children:R.getHeaderGroups().map(e=>(0,s.jsx)(p.SC,{children:e.headers.map(e=>(0,s.jsx)(p.ss,{children:e.isPlaceholder?null:(0,d.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(p.RM,{children:(null===(t=R.getRowModel().rows)||void 0===t?void 0:t.length)?R.getRowModel().rows.map(e=>(0,s.jsx)(p.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,s.jsx)(p.pj,{children:(0,d.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(p.SC,{children:(0,s.jsx)(p.pj,{colSpan:o.length,className:"h-24 text-center",children:"No results."})})})]}),(0,s.jsx)(j.B,{orientation:"horizontal"})]}),(0,s.jsxs)("div",{className:"mt-4 flex items-center justify-between px-2",children:[(0,s.jsxs)("div",{className:"text-sm text-muted-foreground",children:["共 ",b," 项"]}),R.getPageCount()>1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-sm text-muted-foreground",children:["第 ",R.getState().pagination.pageIndex+1," 页 (共 ",R.getPageCount()," 页)"]}),(0,s.jsx)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(g.z,{variant:"outline",className:"hidden size-8 p-0 lg:flex",onClick:()=>{null==y||y(1,w)},disabled:!R.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,s.jsx)(r.kRt,{className:"size-4"})]}),(0,s.jsxs)(g.z,{variant:"outline",className:"size-8 p-0",onClick:()=>{null==y||y(v-1,w)},disabled:!R.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,s.jsx)(r.wyc,{className:"size-4"})]}),(0,s.jsxs)(g.z,{variant:"outline",className:"size-8 p-0",onClick:()=>{null==y||y(v+1,w)},disabled:!R.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,s.jsx)(r.XCv,{className:"size-4"})]}),(0,s.jsxs)(g.z,{variant:"outline",className:"hidden size-8 p-0 lg:flex",onClick:()=>{null==y||y(R.getPageCount(),w)},disabled:!R.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,s.jsx)(r.yr4,{className:"size-4"})]})]})})]})]})]})}},78324:function(e,t,a){a.d(t,{Z:function(){return N}});var s=a(52948),l=a(30786),r=a(56100),n=a(33412),d=a(19921);let i=r.fC,o=r.xz,c=r.h_,x=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...l,ref:t})});x.displayName=r.aV.displayName;let m=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(x,{}),(0,s.jsx)(r.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l})]})});m.displayName=r.VY.displayName;let u=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};u.displayName="AlertDialogHeader";let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};g.displayName="AlertDialogFooter";let f=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold",a),...l})});f.displayName=r.Dx.displayName;let p=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...l})});p.displayName=r.dk.displayName;let h=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.aU,{ref:t,className:(0,n.cn)((0,d.d)(),a),...l})});h.displayName=r.aU.displayName;let j=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.$j,{ref:t,className:(0,n.cn)((0,d.d)({variant:"outline"}),"mt-2 sm:mt-0",a),...l})});function N(e){let{trigger:t,title:a,description:l,onConfirm:r,onCancelText:n,onConfirmText:c}=e;return(0,s.jsxs)(i,{children:[(0,s.jsx)(o,{asChild:!0,children:(0,s.jsx)(d.z,{size:"sm",variant:"destructive",children:t})}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(u,{children:[(0,s.jsx)(f,{children:a}),(0,s.jsx)(p,{children:l})]}),(0,s.jsxs)(g,{children:[(0,s.jsx)(j,{children:n}),(0,s.jsx)(h,{onClick:r,children:c})]})]})]})}j.displayName=r.$j.displayName},33952:function(e,t,a){a.d(t,{X:function(){return i}});var s=a(52948),l=a(30786),r=a(25679),n=a(28523),d=a(33412);let i=l.forwardRef((e,t)=>{let{className:a,...l}=e;return(0,s.jsx)(r.fC,{ref:t,className:(0,d.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...l,children:(0,s.jsx)(r.z$,{className:(0,d.cn)("flex items-center justify-center text-current"),children:(0,s.jsx)(n.nQG,{className:"size-4"})})})});i.displayName=r.fC.displayName}}]);