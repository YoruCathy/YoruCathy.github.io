import{f as p,x as f,v as s,N as D,O,a as P,b as E,j as d,P as R,i as T,d as e,_ as r,m as V,Q as c,R as g,q as y,h as b,S,U as $}from"./entry.b332fe6a.js";import{u as j}from"./asyncData.9660fd5e.js";import"./ContentSlot.8e9ec607.js";import"./ContentList.754395c0.js";import"./ContentRenderer.5cdc08e8.js";import"./ContentDoc.c53894d2.js";import"./Footer.6c741254.js";/* empty css                                                    */import"./Navigator.cd565466.js";import"./ContentQuery.315de8ce.js";import"./ContentRendererMarkdown.ab014f99.js";import"./DocumentDrivenEmpty.127af5b9.js";import"./DocumentDrivenNotFound.9e7f8d34.js";import"./Markdown.d33b4249.js";import"./ProseCode.a33059d8.js";import"./layout.a3516e1a.js";const x=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:_}){const u=f(null),a=s();return D(i=>{if(!a.isHydrating)return _("error",i),u.value=i,!1}),()=>{var i,l;return u.value?(i=o.error)==null?void 0:i.call(o,{error:u}):(l=o.default)==null?void 0:l.call(o)}}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),N=p({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:o,attrs:_}){const u=f(!1);return O(()=>{u.value=!0}),a=>{var n;if(u.value)return(n=o.default)==null?void 0:n.call(o);const i=o.fallback||o.placeholder;if(i)return i();const l=a.fallback||a.placeholder||"",m=a.fallbackTag||a.placeholderTag||"span";return P(m,_,l)}}}),h=new WeakMap;function C(t){if(h.has(t))return h.get(t);const o={...t};return o.render?o.render=(_,...u)=>{var a;if(_.mounted$){const i=t.render(_,...u);return i.children===null||typeof i.children=="string"?E(i.type,i.props,i.children,i.patchFlag,i.dynamicProps,i.shapeFlag):d(i)}else return d("div",(a=_.$attrs)!=null?a:_._.attrs)}:o.template&&(o.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),o.setup=(_,u)=>{var i;const a=f(!1);return O(()=>{a.value=!0}),Promise.resolve(((i=t.setup)==null?void 0:i.call(t,_,u))||{}).then(l=>typeof l!="function"?{...l,mounted$:a}:(...m)=>{if(a.value){const n=l(...m);return n.children===null||typeof n.children=="string"?E(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):d(n)}else return d("div",u.attrs)})},h.set(t,o),o}const M=Object.freeze(Object.defineProperty({__proto__:null,default:N,createClientOnly:C},Symbol.toStringTag,{value:"Module"})),z=p({name:"DevOnly",setup(t,o){return()=>null}}),B=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),q=p({name:"ServerPlaceholder",render(){return P("div")}}),w=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),F=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const _=H({duration:t.duration,throttle:t.throttle}),u=s();return u.hook("page:start",_.start),u.hook("page:finish",_.finish),R(()=>_.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${_.progress.value}%`,height:`${t.height}px`,opacity:_.isLoading.value?1:0,background:t.color,backgroundSize:`${100/_.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function H(t){const o=f(0),_=f(!1),u=T(()=>1e4/t.duration);let a=null,i=null;function l(){n(),o.value=0,_.value=!0,t.throttle?i=setTimeout(v,t.throttle):v()}function m(){o.value=100,I()}function n(){clearInterval(a),clearTimeout(i),a=null,i=null}function L(A){o.value=Math.min(100,o.value+A)}function I(){n(),setTimeout(()=>{_.value=!1,setTimeout(()=>{o.value=0},400)},500)}function v(){a=setInterval(()=>{L(u.value)},100)}return{progress:o,isLoading:_,start:l,finish:m,clear:n}}const U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./ContactItem.923cea87.js"),["./ContactItem.923cea87.js","./ContentSlot.8e9ec607.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ExperienceRow.bd8b597e.js"),["./ExperienceRow.bd8b597e.js","./ContentSlot.8e9ec607.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./MoreProjects.4fce22a8.js"),["./MoreProjects.4fce22a8.js","./ContentList.754395c0.js","./ContentQuery.315de8ce.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./asyncData.9660fd5e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./PublicationRow.78dd8d4d.js"),["./PublicationRow.78dd8d4d.js","./ContentSlot.8e9ec607.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ShortNews.1f4e5074.js"),["./ShortNews.1f4e5074.js","./ContentRenderer.5cdc08e8.js","./ContentRendererMarkdown.ab014f99.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./_commonjsHelpers.fed2a411.js","./ContentDoc.c53894d2.js","./head.4fd8b078.js","./ContentQuery.315de8ce.js","./asyncData.9660fd5e.js","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Footer.6c741254.js"),["./Footer.6c741254.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./IndexHeader.77d891a4.js"),["./IndexHeader.77d891a4.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./IndexHeader.6f25759d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./MarkdownHeader.57a71921.js"),["./MarkdownHeader.57a71921.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Navigator.cd565466.js"),["./Navigator.cd565466.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProjectHeader.2873cda0.js"),["./ProjectHeader.2873cda0.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.c53894d2.js"),["./ContentDoc.c53894d2.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./head.4fd8b078.js","./ContentRenderer.5cdc08e8.js","./ContentRendererMarkdown.ab014f99.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.315de8ce.js","./asyncData.9660fd5e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.754395c0.js"),["./ContentList.754395c0.js","./ContentQuery.315de8ce.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./asyncData.9660fd5e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.315de8ce.js"),["./ContentQuery.315de8ce.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./asyncData.9660fd5e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.5cdc08e8.js"),["./ContentRenderer.5cdc08e8.js","./ContentRendererMarkdown.ab014f99.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.ab014f99.js"),["./ContentRendererMarkdown.ab014f99.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.8e9ec607.js"),["./ContentSlot.8e9ec607.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.127af5b9.js"),["./DocumentDrivenEmpty.127af5b9.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.9e7f8d34.js"),["./DocumentDrivenNotFound.9e7f8d34.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.d33b4249.js"),["./Markdown.d33b4249.js","./ContentSlot.8e9ec607.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.74bd291c.js"),["./ProseA.74bd291c.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.2fecc450.js"),["./ProseBlockquote.2fecc450.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.a33059d8.js"),["./ProseCode.a33059d8.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.7d166e92.js"),["./ProseCodeInline.7d166e92.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.b4dd9439.js"),["./ProseEm.b4dd9439.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.48a98427.js"),["./ProseH1.48a98427.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.07c4e70b.js"),["./ProseH2.07c4e70b.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.1813da93.js"),["./ProseH3.1813da93.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.e26b0784.js"),["./ProseH4.e26b0784.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.b9d301a1.js"),["./ProseH5.b9d301a1.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.f2584b7e.js"),["./ProseH6.f2584b7e.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.da161b90.js"),["./ProseHr.da161b90.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.610ba4ee.js"),["./ProseImg.610ba4ee.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.10e256fe.js"),["./ProseLi.10e256fe.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.fa7b87cc.js"),["./ProseOl.fa7b87cc.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.96887212.js"),["./ProseP.96887212.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.9f568dc6.js"),["./ProseStrong.9f568dc6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.559b0989.js"),["./ProseTable.559b0989.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.7296a17e.js"),["./ProseTbody.7296a17e.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.3df7e7fd.js"),["./ProseTd.3df7e7fd.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.47ab2dae.js"),["./ProseTh.47ab2dae.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.ceaf2e82.js"),["./ProseThead.ceaf2e82.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.055e1404.js"),["./ProseTr.055e1404.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.bffbb707.js"),["./ProseUl.bffbb707.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.3975d4d2.js"),["./welcome.3975d4d2.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.9660fd5e.js","./ContentSlot.8e9ec607.js","./ContentList.754395c0.js","./ContentQuery.315de8ce.js","./ContentRenderer.5cdc08e8.js","./ContentRendererMarkdown.ab014f99.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.c53894d2.js","./head.4fd8b078.js","./Footer.6c741254.js","./Navigator.cd565466.js","./DocumentDrivenEmpty.127af5b9.js","./DocumentDrivenNotFound.9e7f8d34.js","./Markdown.d33b4249.js","./ProseCode.a33059d8.js","./ProseCode.e63e49c6.css","./layout.a3516e1a.js","./IndexHeader.6f25759d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.a3516e1a.js"),["./layout.a3516e1a.js","./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>B),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>w),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.ae),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./component.vue3.c9b64560.js"),["./component.vue3.c9b64560.js","./entry.b332fe6a.js","./entry.d049ffb0.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.9660fd5e.js","./ContentSlot.8e9ec607.js","./ContentList.754395c0.js","./ContentQuery.315de8ce.js","./ContentRenderer.5cdc08e8.js","./ContentRendererMarkdown.ab014f99.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.c53894d2.js","./head.4fd8b078.js","./Footer.6c741254.js","./Navigator.cd565466.js","./DocumentDrivenEmpty.127af5b9.js","./DocumentDrivenNotFound.9e7f8d34.js","./Markdown.d33b4249.js","./ProseCode.a33059d8.js","./ProseCode.e63e49c6.css","./layout.a3516e1a.js","./IndexHeader.6f25759d.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.ag),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.NoScript));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Link));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Base));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Title));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Meta));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Style));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Head));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Html));e(()=>r(()=>import("./entry.b332fe6a.js").then(t=>t.af),["./entry.b332fe6a.js","./entry.d049ffb0.css"],import.meta.url).then(t=>t.Body));const Q=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=V(t),_=T(()=>{var a;return typeof((a=o.value)==null?void 0:a.params)=="function"?o.value.params():o.value});if(!_.value&&c("dd-navigation").value){const{navigation:a}=g();return{navigation:a}}const{data:u}=await j(`content-navigation-${y(_.value)}`,()=>S(_.value));return{navigation:u}},render(t){const o=b(),{navigation:_}=t,u=l=>d($,{to:l._path},()=>l.title),a=(l,m)=>d("ul",m?{"data-level":m}:null,l.map(n=>n.children?d("li",null,[u(n),a(n.children,m+1)]):d("li",null,u(n)))),i=l=>a(l,0);return o!=null&&o.default?o.default({navigation:_,...this.$attrs}):i(_)}}),W=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{W as C,N as _};
