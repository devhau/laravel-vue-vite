import{t as $,h as v,r as c,o as u,c as h,a,b as i,w as m,F as D,d as H,n as V,e as A,f as K,g as se,i as U,j as w,H as x,k as ne,l as re,m as ae,p as ie,q as le,s as ce,O as ue}from"./vendor.b642d5e9.js";const de="en",W={None:"None",NoSidebar:"NoSidebar",Sidebar:"Sidebar"},y={LOADING:"LOADING",DONE:"DONE",ERORR:"ERORR",NONE:""},j="KEY_LOLCAL_LANG",N="AUTH_REQUEST",F="AUTH_SUCCESS",Q="AUTH_ERROR",T="AUTH_LOGOUT",Y="AUTH_CHECK";var me={logo:{app:"HauAdmin",mini:"HAU"},version:{app:"Version 1.0.2",mini:"1.0.2"}},p=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const he={props:{text:{}},setup(){}};function pe(e,t,o,n,r,d){return $(e.$t(o.text))}var L=p(he,[["render",pe]]),_e=[{className:"",icon:()=>"bi bi-box",title:()=>v(L,{text:"menu.dashboard"}),router:{name:"Home"}},{icon:"bi bi-box",title:()=>v(L,{text:"menu.system.title"}),sub:[{className:"",icon:"bi bi-box",title:()=>v(L,{text:"menu.system.user"}),can:"user.index",router:{name:"User"}},{className:"",icon:"bi bi-box",title:()=>v(L,{text:"menu.system.role"}),can:"role.index",router:{name:"Role"}},{className:"",icon:"bi bi-box",title:()=>v(L,{text:"menu.system.permission"}),can:"permission.index",router:{name:"Permission"}}]}],ve=[{className:"",icon:"bi bi-box",title:"Home",link:"https://www.hau.xyz"},{className:"",icon:"bi bi-box",title:"Report",link:"",sub:[{className:"",icon:"bi bi-box",title:"Report 1",link:""},{className:"",icon:"bi bi-box",title:"Report 2",link:""}]},{className:"",icon:"bi bi-box",title:"Order",link:""},{className:"",icon:"bi bi-box",title:"Github",link:"https://github.com/devhau/vue-ui-demo"}];const fe={setup(){},data(){return{user:""}},watch:{"$store.state.auth.user":{handler:function(e){this.user=e},deep:!0,immediate:!0}},methods:{logout(){this.$store.dispatch(T),this.$router.push({name:"Login"})}}},ge={class:"vh-profile-box"},be={class:"vh-profile-box__avatar"},$e=a("img",{class:"vh-profile-box__avatar--image"},null,-1),Ae={style:{color:"#fff"}},Ee={class:"vh-profile-box__item"};function ye(e,t,o,n,r,d){const s=c("vh-button"),l=c("vh-col"),f=c("vh-row");return u(),h("div",ge,[a("div",be,[$e,a("h4",Ae,$(r.user.name),1)]),a("div",Ee,[i(f,null,{default:m(()=>[i(l,{style:{"text-align":"start","padding-left":"15px"}},{default:m(()=>[i(s,{beforeIcon:"bi bi-person",size:"sm",text:e.$t("profile.button.profile")},null,8,["text"])]),_:1}),i(l,{style:{"text-align":"end","padding-right":"15px"}},{default:m(()=>[i(s,{beforeIcon:"bi bi-power",size:"sm",text:e.$t("profile.button.logout"),onClick:d.logout},null,8,["text","onClick"])]),_:1})]),_:1})])])}var ke=p(fe,[["render",ye]]);const Re={methods:{switchLocal(e){this.$i18n.locale=e,localStorage.setItem(j,e)}},data(){return{langs:["vi","en","jp"]}}},we={class:"vh-switch-local"},xe=["onClick"];function Ne(e,t,o,n,r,d){return u(),h("div",we,[(u(!0),h(D,null,H(r.langs,s=>(u(),h("div",{class:V(["vh-local-item",s==e.$i18n.locale?"active":""]),key:s,onClick:l=>d.switchLocal(s)},[a("i",{class:V(e.$t(`common.local.${s}.icon`))},null,2),A(" "+$(e.$t(`common.local.${s}.text`)),1)],10,xe))),128))])}var Te=p(Re,[["render",Ne]]);const Le={};function Se(e,t){return u(),h("span",null,[a("i",{class:V(e.$t(`common.local.${e.$i18n.locale}.icon`))},null,2),A(" "+$(e.$t(`common.local.${e.$i18n.locale}.text`)),1)])}var Oe=p(Le,[["render",Se]]);const Pe={setup(){},data(){return{user:""}},watch:{"$store.state.auth.user":{handler:function(e){this.user=e},deep:!0,immediate:!0}}},Ie={key:0};function Ue(e,t,o,n,r,d){return r.user?(u(),h("span",Ie,$(r.user.name),1)):K("",!0)}var Ce=p(Pe,[["render",Ue]]),De=[{className:"",icon:"",title:()=>v(Oe,{}),link:"",sub:()=>v(Te,{})},{className:"vh-profile",icon:"bi bi-person-square",title:()=>v(Ce,{}),link:"",sub:()=>v(ke,{})}];const He={left:ve,right:De};var Ve=[{className:"",icon:"bi bi-box",title:"Information",link:"",sub:[]},{className:"",icon:"bi bi-box",title:"Information",link:"",sub:[]}];const je={app:me,header:He,sidebar:_e,footer:Ve},Ge=se({name:"HomePage",data(){return{layout:"Sidebar",keyApp:"",menu:je}},watch:{"$route.meta.layout":{handler:function(e){this.layout=e},deep:!0,immediate:!0},"$store.state.loggin":{handler:function(e,t){this.$store.dispatch(N,this)},deep:!0,immediate:!0}},methods:{forceUpdate(){this.keyApp=`app-${new Date().getTime()}`},canPermission(e){return!(e&&!this.$can(e)&&!this.$isAuth())},checkPermission(){var e,t,o,n;(((t=(e=this.$route)==null?void 0:e.meta)==null?void 0:t.can)&&!this.canPermission(this.$route.meta.can)||((n=(o=this.$route)==null?void 0:o.meta)==null?void 0:n.auth)&&!this.$isAuth())&&this.$router.push({name:"Login"}),this.$nextTick(()=>{this.forceUpdate(),this.$forceUpdate()})}}});function Me(e,t,o,n,r,d){const s=c("router-view"),l=c("vh-application");return u(),U(l,{key:e.keyApp,menu:e.menu,miniSidebar:!1,layout:e.layout},{default:m(()=>[i(s)]),_:1},8,["menu","layout"])}var Xe=p(Ge,[["render",Me]]);const qe="http://127.0.0.1:8000/api/",S=e=>e.startsWith("http")?e:qe+e,E={"Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"},G={...E,"Content-Type":"multipart/form-data; boundary=something",Accept:"multipart/form-data"},ze=()=>{delete E.Authorization,delete G.Authorization},Be=e=>{E.Authorization=`Bearer ${e}`,G.Authorization=`Bearer ${e}`},k={get:(e,t)=>w.default.get(S(e),{params:t,headers:E,validateStatus:o=>x(o)}),post:(e,t)=>w.default.post(S(e),t,{headers:E,validateStatus:o=>x(o)}),put:(e,t)=>w.default.put(S(e),t,{headers:E,validateStatus:o=>x(o)}),delete:(e,t)=>w.default.delete(S(e),{params:t,headers:E,validateStatus:o=>x(o)}),postMultiplePart:(e,t)=>w.default.post(S(e),t,{headers:G,validateStatus:o=>x(o)})},Oo=e=>({get:(s,l)=>k.get(`${e}/${s},`,l),getAll:s=>k.get(`${e}`,s),add:s=>k.post(`${e}`,s),edit:(s,l)=>k.put(`${e}/${s}`,l),remove:s=>k.delete(`${e}/${s}`)});var b={...k,clearToken:ze,setToken:Be};const M="vue_auth_token",Ke=e=>b.post("auth/login",e),We=e=>b.post("auth/register",e),Fe=e=>b.post("auth/changePassword",e),J=()=>b.get("auth/user"),Qe=()=>b.get("auth/logout"),Z=()=>{const e=localStorage.getItem(M);return e!=null?(b.setToken(e),!0):!1},Ye=async()=>(Z(),await J()),Je=e=>{b.setToken(e),localStorage.setItem(M,e)},Ze=e=>{e&&Qe(),b.clearToken(),localStorage.removeItem(M)};var O={login:Ke,register:We,me:J,checkAuth:Z,setToken:Je,clearToken:Ze,changePassword:Fe,getUserMe:Ye};const et={props:{errors:{}},setup(){}},tt={key:0,class:"errors"};function ot(e,t,o,n,r,d){return o.errors?(u(),h("div",tt,[a("ul",null,[(u(!0),h(D,null,H(Object.keys(o.errors),s=>(u(),h("li",{key:s},[A($(e.$t(s))+" : ",1),a("ul",null,[(u(!0),h(D,null,H(o.errors[s],l=>(u(),h("li",{key:l},$(e.$t(l)),1))),128))])]))),128))])])):K("",!0)}var ee=p(et,[["render",ot]]);const st={components:{errors:ee},data(){return{password:"",account:"",errors:void 0}},methods:{doLogin(){O.login({email:this.account,device_name:"web",password:this.password}).then(e=>{e.data.OK==!0?(O.setToken(e.data.data.token),this.$nextTick(()=>{location&&location.reload&&location.reload(),this.$store.dispatch(N,this),this.$router.push({name:"Home"})})):this.errors=e.data.errors})}},setup(){}},nt={class:"vh-auth-box"},rt=a("div",{class:"vh-auth-header"},[a("h3",null,"Login")],-1),at={class:"vh-auth-body"},it={class:"mb-2"},lt=a("label",{for:"account"},"Account",-1),ct={class:"mb-2"},ut=a("label",{for:"password"},"Password",-1),dt={class:"mb-2"},mt={class:"vh-auth-bottom"},ht=A(" Register "),pt=A(" Login ");function _t(e,t,o,n,r,d){const s=c("errors"),l=c("vh-input"),f=c("vh-checkbox"),R=c("vh-button"),P=c("vh-col"),C=c("vh-row"),g=c("vh-page");return u(),U(g,{class:"vh-auth-page"},{default:m(()=>[a("div",nt,[rt,a("div",at,[i(s,{errors:r.errors},null,8,["errors"]),a("div",it,[lt,i(l,{modelValue:r.account,"onUpdate:modelValue":t[0]||(t[0]=I=>r.account=I),id:"account",placeholder:"Account"},null,8,["modelValue"])]),a("div",ct,[ut,i(l,{modelValue:r.password,"onUpdate:modelValue":t[1]||(t[1]=I=>r.password=I),type:"password",id:"password",placeholder:"Password"},null,8,["modelValue"])]),a("div",dt,[i(f,{label:"Remember me"})])]),a("div",mt,[i(C,null,{default:m(()=>[i(P,null,{default:m(()=>[i(R,{color:"success",onClick:t[2]||(t[2]=I=>e.$router.push({name:"Register"}))},{default:m(()=>[ht]),_:1})]),_:1}),i(P,null,{default:m(()=>[i(R,{onClick:d.doLogin},{default:m(()=>[pt]),_:1},8,["onClick"])]),_:1})]),_:1})])])]),_:1})}var vt=p(st,[["render",_t]]);const ft={components:{errors:ee},data(){return{email:"",name:"",pass:"",errors:void 0}},methods:{doRegister(){O.register({email:this.email,name:this.name,password:this.pass}).then(e=>{e.data.OK==!0?this.$router.push({name:"Login"}):this.errors=e.data.errors})}},setup(){}},gt={class:"vh-auth-box"},bt=a("div",{class:"vh-auth-header"},[a("h3",null,"Register")],-1),$t={class:"vh-auth-body"},At={class:"mb-2"},Et=a("label",{for:"email"},"Email",-1),yt={class:"mb-2"},kt=a("label",{for:"fullname"},"Full name",-1),Rt={class:"mb-2"},wt=a("label",{for:"password"},"Password",-1),xt={class:"vh-auth-bottom"},Nt=A(" Login "),Tt=A(" Register ");function Lt(e,t,o,n,r,d){const s=c("errors"),l=c("vh-input"),f=c("vh-button"),R=c("vh-col"),P=c("vh-row"),C=c("vh-page");return u(),U(C,{class:"vh-auth-page"},{default:m(()=>[a("div",gt,[bt,a("div",$t,[i(s,{errors:r.errors},null,8,["errors"]),a("div",At,[Et,i(l,{modelValue:r.email,"onUpdate:modelValue":t[0]||(t[0]=g=>r.email=g),id:"email",placeholder:"Email"},null,8,["modelValue"])]),a("div",yt,[kt,i(l,{modelValue:r.name,"onUpdate:modelValue":t[1]||(t[1]=g=>r.name=g),id:"fullname",placeholder:"Full name"},null,8,["modelValue"])]),a("div",Rt,[wt,i(l,{modelValue:r.pass,"onUpdate:modelValue":t[2]||(t[2]=g=>r.pass=g),type:"password",id:"password",placeholder:"Password"},null,8,["modelValue"])])]),a("div",xt,[i(P,null,{default:m(()=>[i(R,null,{default:m(()=>[i(f,{onClick:t[3]||(t[3]=g=>e.$router.push({name:"Login"}))},{default:m(()=>[Nt]),_:1})]),_:1}),i(R,null,{default:m(()=>[i(f,{color:"success",onClick:d.doRegister},{default:m(()=>[Tt]),_:1},8,["onClick"])]),_:1})]),_:1})])])]),_:1})}var St=p(ft,[["render",Lt]]),Ot=[{path:"/login",name:"Login",component:vt,meta:{layout:W.None}},{path:"/register",name:"Register",component:St,meta:{layout:W.None}}];const Pt="modulepreload",te={},It="/dist/",X=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${It}${n}`,n in te)return;te[n]=!0;const r=n.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${d}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Pt,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((l,f)=>{s.addEventListener("load",l),s.addEventListener("error",f)})})).then(()=>t())};var Ut={INDEX:"home.index"},Ct={INDEX:"permission.index",NEW:"permission.store",EDIT:"permission.update",REMOVE:"permission.destroy"},Dt={INDEX:"user.index",NEW:"user.store",EDIT:"user.update",REMOVE:"user.destroy",PERMISSION:"user.permission"},Ht={INDEX:"role.index",NEW:"role.store",EDIT:"role.update",REMOVE:"role.destroy",PERMISSION:"role.permission"},q={HOME:Ut,PERMISSION:Ct,USER:Dt,ROLE:Ht},Vt=[{path:"/user",name:"User",meta:{can:q.USER.INDEX},component:()=>X(()=>import("./index.34c50ad8.js"),["assets/index.34c50ad8.js","assets/index.8bcd0233.js","assets/vendor.b642d5e9.js"])},{path:"/role",name:"Role",meta:{can:q.ROLE.INDEX},component:()=>X(()=>import("./index.0b59af54.js"),["assets/index.0b59af54.js","assets/index.8bcd0233.js","assets/vendor.b642d5e9.js"])},{path:"/permission",name:"Permission",meta:{can:q.PERMISSION.INDEX},component:()=>X(()=>import("./index.9c2d2cb7.js"),["assets/index.9c2d2cb7.js","assets/index.8bcd0233.js","assets/vendor.b642d5e9.js"])}];const jt={},Gt={class:"vh-dashboard__header---item"},Mt={class:"vh-dashboard__header---item_box"};function Xt(e,t){return u(),h("div",Gt,[a("div",Mt,[ne(e.$slots,"default")])])}var qt=p(jt,[["render",Xt]]);const zt={components:{headerItem:qt},data(){return{}},setup(){}},Bt={class:"vh-dashboard"},Kt={class:"vh-dashboard__header"},Wt=a("div",{class:"vh-dashboard__body"},null,-1);function Ft(e,t,o,n,r,d){const s=c("headerItem");return u(),h("div",Bt,[a("div",Kt,[i(s),i(s),i(s),i(s)]),Wt])}var Qt=p(zt,[["render",Ft]]);const Yt={components:{Dashboard:Qt},setup(){}};function Jt(e,t,o,n,r,d){const s=c("Dashboard",!0);return u(),U(s)}var Zt=p(Yt,[["render",Jt]]),eo=[{path:"/",name:"Home",meta:{auth:!0},component:Zt},...Ot,...Vt],to={hello:"hello",local:{en:{icon:"flag-icon flag-icon-squared flag-icon-us",text:"English"},jp:{icon:"flag-icon flag-icon-squared flag-icon-jp",text:"Japanese"},vi:{icon:"flag-icon flag-icon-squared flag-icon-vn",text:"Ti\u1EBFng vi\u1EC7t"}},manager:{title:{new:"New",edit:"Edit",action:"Action",confirmDelete:"Do you want to delete this record?",remove:"Delete"},button:{new:"New",edit:"Edit",remove:"Remove",delete:"Delete",cancel:"Cancel",active:"Active",view:"View",detail:"Detail",update:"Update"}}},oo={dashboard:"Dashboard",system:{title:"System",user:"User",role:"Role",permission:"Permission"}},so={title:"Role"},no={title:"Permission"},ro={title:"User"},ao={permission:no,role:so,user:ro},io={button:{logout:"Logout"}},lo={common:to,module:ao,menu:oo,profile:io},co={hello:"hello JP"},uo={common:co},mo={hello:"Xin ch\xE0o",manager:{title:{new:"Th\xEAm m\u1EDBi",edit:"Ch\u1EC9nh s\u1EEDa",action:"H\xE0nh \u0111\u1ED9ng",confirmDelete:"B\u1EA1n c\xF3 mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y kh\xF4ng?",remove:"X\xF3a d\u1EEF li\u1EC7u"},button:{new:"Th\xEAm m\u1EDBi",edit:"Ch\u1EC9nh s\u1EEDa",remove:"X\xF3a b\u1ECF",delete:"X\xF3a",cancel:"H\u1EE7y b\u1ECF",active:"K\xEDch ho\u1EA1ch",view:"Hi\u1EC3n th\u1ECB",detail:"Chi ti\u1EBFt",update:"C\u1EADp nh\u1EADt"},table:{empty:"Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u!"}}},ho={dashboard:"B\u1EA3ng \u0111i\u1EC1u khi\u1EC3n",system:{title:"H\u1EC7 th\u1ED1ng",user:"T\xE0i kho\u1EA3n",role:"Vai tr\xF2",permission:"Quy\u1EC1n h\u1EC7 th\u1ED1ng"}},po={title:"Vai tr\xF2",button:{permission:"Ph\xE2n quy\u1EC1n"}},_o={title:"Quy\u1EC1n"},vo={title:"T\xE0i kho\u1EA3n",button:{permission:"Ph\xE2n quy\u1EC1n"},field:{name:"H\u1ECD t\xEAn",email:"Email",password:"M\u1EADt kh\u1EA9u"}},fo={permission:_o,role:po,user:vo},go={button:{logout:"Logout",profile:"Profile"}},bo={common:mo,module:fo,menu:ho,profile:go},$o={en:lo,jp:uo,vi:bo},Ao={},Eo={},yo={};const ko=async()=>({loggin:!0,user:{},permissions:[],status:"",isAdmin:!1});var Ro={state:ko(),actions:{[N]:({commit:e,dispatch:t},o)=>{e(N),O.getUserMe().then(n=>{var r;n.status!=401&&(n==null?void 0:n.data)?e(F,(r=n==null?void 0:n.data)==null?void 0:r.data):(e(Q),e(T)),t(Y,o)}).catch(()=>{})},[Y]:({commit:e,dispatch:t},o)=>{o&&o.checkPermission&&o.checkPermission()},[T]:({commit:e,dispatch:t},o)=>{e(T),O.clearToken(!0)}},getters:{isAuthenticated:e=>(t=!0)=>t&&e.status==y.LOADING||e.loggin,canPermission:e=>(t,o=!0)=>e.status==y.LOADING&&o?!0:!(!e.loggin||!e.isAdmin&&!e.permissions.includes(t))},mutations:{[N]:e=>{e.status=y.LOADING},[F]:(e,t)=>{e.status=y.DONE,e.loggin=!0,e.user=t.user,e.isAdmin=t.isAdmin,e.permissions=t.permissions},[Q]:e=>{e.status=y.ERORR,e.loggin=!1},[T]:e=>{e.status=y.NONE,e.loggin=!1,e.user=void 0,e.isAdmin=void 0,e.permissions=void 0}}},wo={auth:Ro},xo={state:Eo,mutations:yo,getters:Ao,modules:wo},No=e=>{e.directive("can",{mounted(t,o,n){t.style.visibility=e.config.globalProperties.$can(o.value,!1)?"":"hidden"}})},To=e=>{e.use(No)};let z="vi";if(localStorage.getItem(j))z=localStorage.getItem(j);else if(document&&document.querySelector){let e=document.querySelector("meta[name=lang]");e&&e.getAttribute("content")&&(z=e.getAttribute("content"))}const Lo=re({locale:z,fallbackLocale:de,messages:$o}),B=ae(xo),oe=ie({history:le(),routes:eo}),_=ce(Xe);oe.beforeEach((e,t,o)=>{var n;return((n=e==null?void 0:e.meta)==null?void 0:n.can)&&!_.config.globalProperties.$can(e.meta.can)?o({name:"Login"}):_.config.globalProperties.$isAuth()&&e.path==="/login"?o("/"):o()});_.config.globalProperties.$can=(e,t=!0)=>B.getters.canPermission(e,t);_.config.globalProperties.$isAuth=(e=!0)=>B.getters.isAuthenticated(e);_.use(ue);_.use(oe);_.use(B);_.use(Lo);_.use(To);_.mount("#app");export{p as _,b as a,Oo as b,ee as e,q as p};