import{D as x,o,a,b as t,B as l,u as n,F as h,r as g,t as r}from"./entry.b332fe6a.js";const _=""+globalThis.__publicAssetsURL("assets/img/qin-logo.svg"),b=""+globalThis.__publicAssetsURL("assets/img/icons/arrow-right-bold.svg"),f={class:"md:flex justify-between max-w-6xl mx-auto"},y={class:"text-xl font-bold hover:dark:text-white hover:text-black transition-colors",href:"/"},k=t("img",{class:"inline w-10 dark:invert transition-opacity opacity-60 hover:opacity-100",src:_,alt:""},null,-1),m=[k],v={class:"flex flex-row justify-center"},w=["href"],C={key:0,class:"transition-border text-black dark:text-white border-b-2 border-b-gray-400"},B={key:1,class:"transition-border hover:border-b-2 border-b-gray-400"},O={class:"fixed flex md:hidden flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-30 w-full top-0"},j={class:"text-xl font-bold"},M=["src"],z={class:"flex md:hidden opacity-0 flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-30 w-full top-0"},L={class:"text-xl font-bold"},R=["src"],q={class:"flex flex-col p-5 pt-24 text-xl text-gray-400 dark:text-gray-500"},V=["href"],Y={class:"flex justify-between"},A={key:0,class:"text-black dark:text-white font-medium"},D={key:1,class:"transition-border hover:border-b-4 border-b-gray-400"},E=t("div",{class:"text-gray-400 dark:text-gray-500 text-center py-4"},"Yiqin Zhao",-1),F={data(){return{menuOpen:!1}},methods:{onMenuButtonClick(){this.menuOpen=!this.menuOpen}}},H=Object.assign(F,{__name:"Navigator",setup(I){const{path:c}=x(),d=c.split("/")[1],p=[{path:"/",text:"Home"},{path:"https://drive.google.com/file/d/1ymWkcZ9Qv3MOCyV754qzYLHcJ6Et03Yh/view?usp=sharing",text:"CV"}].map(s=>(s.active=s.path.split("/")[1]===d,s)),u=p.filter(s=>s.active)[0];return(s,i)=>(o(),a(h,null,[t("div",{class:l(["hidden md:block text-normal px-4 py-2 text-gray-500 dark:text-gray-400 mx-auto bg-gray-100 dark:bg-gray-800",n(c)==="/"?"bg-transparent dark:bg-transparent":""])},[t("div",f,[t("a",y,[t("span",{class:l({"opacity-0":n(c)==="/"})},m,2)]),t("div",v,[(o(!0),a(h,null,g(n(p),e=>(o(),a("a",{class:"pl-10 font-medium hover:dark:text-white hover:text-black transition-colors flex items-center",key:e.text,href:e.path},[e.path.split("/")[1]===n(d)?(o(),a("span",C,r(e.text),1)):(o(),a("span",B,r(e.text),1))],8,w))),128))])])],2),t("div",O,[t("span",j,r(n(u).text),1),t("span",{onClick:i[0]||(i[0]=(...e)=>s.onMenuButtonClick&&s.onMenuButtonClick(...e))},[t("img",{class:"inline dark:invert",src:s.menuOpen?"/assets/img/icons/close.svg":"/assets/img/icons/menu.svg",alt:""},null,8,M)])]),t("div",z,[t("span",L,r(n(u).text),1),t("span",{onClick:i[1]||(i[1]=(...e)=>s.onMenuButtonClick&&s.onMenuButtonClick(...e))},[t("img",{class:"inline dark:invert",src:s.menuOpen?"/assets/img/icons/close.svg":"/assets/img/icons/menu.svg",alt:""},null,8,R)])]),t("div",{class:l(["fixed flex flex-col justify-between w-full h-full top-0 left-0 bg-gray-100 dark:bg-gray-800 z-20",{hidden:!s.menuOpen}])},[t("div",q,[(o(!0),a(h,null,g(n(p),e=>(o(),a("a",{class:"hover:text-white transition-color py-3",key:e.text,href:e.path},[t("div",Y,[e.active?(o(),a("span",A,r(e.text),1)):(o(),a("span",D,r(e.text),1)),t("img",{class:l(["dark:invert w-6 opacity-50",{"opacity-100":e.path.split("/")[1]===n(d)}]),src:b,alt:""},null,2)])],8,V))),128))]),E],2)],64))}}),T=H;export{T as default};
