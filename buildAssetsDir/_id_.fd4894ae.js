import{_ as v}from"./nuxt-link.21dc230f.js";import{_ as f,o as n,f as i,a as t,t as c,F as $,g as k,b as p,w as _,p as P,i as b,j as B,u as y,c as w,r as h,d as x}from"./entry.8914ec6d.js";import{d as S}from"./component.e1915315.js";import{_ as C}from"./back.b67b3386.js";const N={props:{title:{type:String,required:!0},projects:{type:Array,required:!0},hasProjects:{type:Boolean,required:!0}}},I=e=>(P("data-v-c681ad8c"),e=e(),b(),e),L={class:"project-box"},R={key:1},q=I(()=>t("p",null,"This employee is not currently working on a project.",-1)),F=[q];function T(e,s,o,l,r,d){const u=v;return n(),i("div",L,[t("h2",null,c(o.title),1),o.hasProjects?(n(!0),i($,{key:0},k(o.projects,(a,m)=>(n(),i("div",{key:m},[p(u,{to:"/projects/"+a.id},{default:_(()=>[t("p",null,c(a.title),1)]),_:2},1032,["to"])]))),128)):(n(),i("div",R,F))])}const V=f(N,[["render",T],["__scopeId","data-v-c681ad8c"]]);const D=S({async asyncData(){const e=B(),s=$fetch(y().public.serverURL+"/employees/"+e.params.id),o=$fetch(y().public.serverURL+"/projects/supervisor="+e.params.id),[l,r]=await Promise.all([s,o]),d=r.length>0;return{employee:l,projects:r,hasProjects:d}},methods:{goBack(){this.$router.go(-1)}}}),U={class:"back-button-wrap"},A={class:"employee-title"},E={class:"employee-content"},z=["src"];function G(e,s,o,l,r,d){const u=h("pagetitle"),a=V,m=h("content"),g=h("container");return n(),w(g,null,{default:_(()=>[p(m,null,{default:_(()=>[t("div",U,[t("img",{class:"back-button",src:C,onClick:s[0]||(s[0]=(...j)=>e.goBack&&e.goBack(...j))})]),p(u,null,{default:_(()=>[x(c(e.employee.name),1)]),_:1}),t("div",A,[t("h3",null,c(e.employee.title),1)]),t("div",E,[t("img",{class:"employee-page-img",src:e.employee.photo},null,8,z),t("p",null,c(e.employee.bio),1)]),p(a,{title:"Supervises The Following Projects:",projects:e.projects,hasProjects:e.hasProjects},null,8,["projects","hasProjects"])]),_:1})]),_:1})}const O=f(D,[["render",G]]);export{O as default};
