import{r as g,o as R,c as j,b as a,w as l,f as u,t as _,q as b,a as w,e as A,p as B}from"./vendor.2231596e.js";import{_ as J}from"./main.305ed8a2.js";const N={itemKey:"id",formsize:(e,o)=>"",empty:"common.manager.table.empty",title:{new:"common.manager.title.new",edit:"common.manager.title.edit",confirmDelete:"common.manager.title.confirmDelete",remove:"common.manager.title.remove",action:"common.manager.title.action"},button:{new:"common.manager.button.new",edit:"common.manager.button.edit",remove:"common.manager.button.remove",delete:"common.manager.button.delete",cancel:"common.manager.button.cancel",active:"common.manager.button.active",view:"common.manager.button.view",detail:"common.manager.button.detail",update:"common.manager.button.update"},icon:{new:"bi bi-plus-square",edit:"bi bi-pencil-square",remove:"bi bi-trash",delete:"bi bi-trash",cancel:"bi bi-x",active:"bi bi-check-square",view:"bi bi-plus-square",detail:"bi bi-plus-square",update:"bi bi-pencil-square"}},P={props:{option:{},showAction:{default:!0},formsize:{defalut:"sm"}},computed:{page_start(){return this.current_page-3>0?this.current_page-3:1},page_end(){return this.current_page+3<this.last_page?this.current_page+3:this.last_page},optionConfigAction(){if(!this.showAction)return this.optionConfig;let{columns:e}=this.optionConfig,o=this.$t("common.manager.title.action");return e=[...e,{title:o,field:"button_action",isSort:!1,isFilter:!1}],{...this.optionConfig,columns:e}}},data(){return{optionConfig:{},showFormUpdate:!1,showFormConfirmRemove:!1,isNew:!1,dataUpdate:{},pages:[10,15,25,50,100],source:[],search:"",sort:{},filter:{},current_page:0,size_page:15,from_page:0,last_page:0,per_page:15,row_from:0,row_to:0,total:0}},methods:{onInputSearch(e){e.keyCode==13&&(this.search=e.target.value,this.onSearch())},onSort(e,o){this.sort[e.field]=o,this.$emit("sort",e,o),this.onSearch()},onFilter(e,o){this.filter[e.field]=o,this.$emit("filter",e,o),this.onSearch()},onSearch(){let{api:e}=this.optionConfig;e.getAll({sort:this.sort,filter:this.filter,search:this.search,page:this.current_page,per_page:this.size_page}).then(({data:o})=>{if(o&&o.OK){let{data:C,current_page:F,from:t,to:r,last_page:h,total:U}=o.data;this.source=C,this.current_page=F,this.row_from=t,this.row_to=r,this.last_page=h,this.total=U}})},onChangePage(e){this.current_page=e,this.onSearch()},onRemoveData(){let{api:e,validate:o,itemKey:C}=this.optionConfig;e.remove(this.dataUpdate[C]).then(()=>{this.onSearch(),this.onHideForm()})},onUpdateData(){let{api:e,validate:o,itemKey:C}=this.optionConfig;(!o||o({data:this.dataUpdate,isNew:this.isNew}))&&(this.isNew?e.add(this.dataUpdate).then(F=>{this.onSearch(),this.onHideForm()}):e.edit(this.dataUpdate[C],this.dataUpdate).then(F=>{this.onSearch(),this.onHideForm()}))},onShowConfirmRemove(e){this.dataUpdate=JSON.parse(JSON.stringify(e)),this.showFormConfirmRemove=!0},onShowFormUpdate(e,o=!1){this.isNew=o,this.dataUpdate=JSON.parse(JSON.stringify(e)),this.showFormUpdate=!0},onHideForm(){this.showFormUpdate=!1,this.showFormConfirmRemove=!1}},created(){this.optionConfig=Object.assign(this.option,N)},mounted(){this.optionConfig=Object.assign(this.option,N),this.onSearch()},watch:{option:{handler:function(e){this.optionConfig=Object.assign(e,N)},deep:!0,immediate:!0}},setup(){}},M={class:"vh-manager"},E={class:"vh-manager__header"},T={class:"vh-manager__header--left"},G={class:"vh-manager__header--center"},L={class:"vh-manager__header--right"},Q={class:"vh-manager__body"},W={class:"vh-manager__body--action"},X={class:"vh-manager__footer"};function Y(e,o,C,F,t,r){var y,z,I;const h=g("vh-button"),U=g("vh-modal"),H=g("vh-input"),O=g("vh-table"),q=g("vh-select"),k=g("vh-col"),V=g("vh-pagination"),K=g("vh-row");return R(),j("div",M,[a(U,{show:t.showFormConfirmRemove,title:e.$t("common.manager.title.remove"),onHide:o[2]||(o[2]=n=>t.showFormConfirmRemove=!1)},{footer:l(({})=>{var n,i,p,c,f,d;return[a(h,{size:"sm",color:"warning",beforeIcon:(p=(i=(n=t.optionConfig)==null?void 0:n.icon)==null?void 0:i.cancel)!=null?p:"",onClick:o[0]||(o[0]=s=>r.onHideForm())},{default:l(()=>{var s,m;return[u(_(e.$t((m=(s=t.optionConfig)==null?void 0:s.button)==null?void 0:m.cancel)),1)]}),_:1},8,["beforeIcon"]),a(h,{size:"sm",color:"danger",beforeIcon:(d=(f=(c=t.optionConfig)==null?void 0:c.icon)==null?void 0:f.remove)!=null?d:"",onClick:o[1]||(o[1]=s=>r.onRemoveData())},{default:l(()=>{var s,m;return[u(_(e.$t((m=(s=t.optionConfig)==null?void 0:s.button)==null?void 0:m.remove)),1)]}),_:1},8,["beforeIcon"])]}),default:l(()=>{var n,i;return[b(e.$slots,"content_confirmDelete",{data:t.dataUpdate,app:this}),u(" "+_(!e.$slots.content_confirmDelete&&e.$t((i=(n=t.optionConfig)==null?void 0:n.title)==null?void 0:i.confirmDelete))+" ",1)]}),_:3},8,["show","title"]),a(U,{size:t.optionConfig.formsize(t.isNew,t.dataUpdate),title:t.isNew?e.$t("common.manager.title.new"):e.$t("common.manager.title.edit"),show:t.showFormUpdate,onHide:o[5]||(o[5]=n=>t.showFormUpdate=!1)},{footer:l(({})=>{var n,i,p,c,f,d;return[a(h,{size:"sm",color:"warning",beforeIcon:(p=(i=(n=t.optionConfig)==null?void 0:n.icon)==null?void 0:i.cancel)!=null?p:"",onClick:o[3]||(o[3]=s=>r.onHideForm())},{default:l(()=>{var s,m;return[u(_(e.$t((m=(s=t.optionConfig)==null?void 0:s.button)==null?void 0:m.cancel)),1)]}),_:1},8,["beforeIcon"]),a(h,{size:"sm",beforeIcon:(d=(f=(c=t.optionConfig)==null?void 0:c.icon)==null?void 0:f.update)!=null?d:"",onClick:o[4]||(o[4]=s=>r.onUpdateData())},{default:l(()=>{var s,m;return[u(_(e.$t((m=(s=t.optionConfig)==null?void 0:s.button)==null?void 0:m.update)),1)]}),_:1},8,["beforeIcon"])]}),default:l(()=>[b(e.$slots,"form_update",{data:t.dataUpdate,app:this,isNew:t.isNew})]),_:3},8,["size","title","show"]),w("div",E,[w("div",T,[a(h,{size:"sm",beforeIcon:(I=(z=(y=t.optionConfig)==null?void 0:y.icon)==null?void 0:z.new)!=null?I:"",onClick:o[6]||(o[6]=n=>r.onShowFormUpdate({},!0))},{default:l(()=>{var n,i;return[u(_(e.$t((i=(n=t.optionConfig)==null?void 0:n.button)==null?void 0:i.new)),1)]}),_:1},8,["beforeIcon"]),b(e.$slots,"header_left",{app:this})]),w("div",G,[b(e.$slots,"header_center")]),w("div",L,[b(e.$slots,"header_right",{app:this}),a(H,{placeholder:"Search",style:{width:"150px"},onKeypress:r.onInputSearch,onBlur:o[7]||(o[7]=n=>n.target.value=this.search)},null,8,["onKeypress"])])]),w("div",Q,[a(O,{source:t.source,option:r.optionConfigAction,sort:t.sort,filter:t.filter,start:t.row_from,onSort:o[8]||(o[8]=(n,i)=>r.onSort(n,i)),onFilter:o[9]||(o[9]=(n,i)=>r.onFilter(n,i))},{field_button_action:l(({row:n,index:i,start:p})=>{var c,f,d,s,m,D;return[w("span",W,[b(e.$slots,"action_before",{row:n,app:this,index:i,start:p}),a(h,{size:"sm",color:"danger",onClick:v=>r.onShowConfirmRemove(n),beforeIcon:(d=(f=(c=t.optionConfig)==null?void 0:c.icon)==null?void 0:f.remove)!=null?d:""},{default:l(()=>{var v,S;return[u(_(e.$t((S=(v=t.optionConfig)==null?void 0:v.button)==null?void 0:S.remove)),1)]}),_:2},1032,["onClick","beforeIcon"]),a(h,{size:"sm",beforeIcon:(D=(m=(s=t.optionConfig)==null?void 0:s.icon)==null?void 0:m.edit)!=null?D:"",onClick:v=>r.onShowFormUpdate(n)},{default:l(()=>{var v,S;return[u(_(e.$t((S=(v=t.optionConfig)==null?void 0:v.button)==null?void 0:S.edit)),1)]}),_:2},1032,["beforeIcon","onClick"]),b(e.$slots,"action_after",{row:n,app:this,index:i,start:p})])]}),_:3},8,["source","option","sort","filter","start"])]),w("div",X,[a(K,null,{default:l(()=>[a(k,{class:"col-none",style:{width:"105px",flex:"none"}},{default:l(()=>[a(q,{modelValue:t.size_page,"onUpdate:modelValue":o[10]||(o[10]=n=>t.size_page=n),class:"vh-inline-block",source:t.pages,onChange:o[11]||(o[11]=n=>r.onChangePage(1))},null,8,["modelValue","source"])]),_:1}),a(k,null,{default:l(()=>[this.last_page>0?(R(),A(V,{key:0,current:t.current_page,start:r.page_start,end:r.page_end,last:t.last_page,onPage:o[12]||(o[12]=n=>r.onChangePage(n)),next:">>",previous:"<<"},null,8,["current","start","end","last"])):B("",!0)]),_:1})]),_:1})])])}var $=J(P,[["render",Y]]);export{$ as M};
