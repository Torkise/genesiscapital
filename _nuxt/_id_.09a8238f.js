import{_ as j}from"./ProjectBox.0f2dbf18.js";import{_ as v,u as b,g as p,c as k,w as a,r,o as P,a as t,b as n,d as l,t as d}from"./entry.40804900.js";import{d as $}from"./component.f647f692.js";import{_ as B}from"./back.7aef8fa7.js";import"./nuxt-link.d812e3be.js";const C=$({async asyncData(){const e=b(),o=$fetch(p().public.serverURL+"/areas/area="+e.params.id),c=$fetch(p().public.serverURL+"/projects/area="+e.params.id),[i,s]=await Promise.all([o,c]),_=s.length>0;return{area:i,projects:s,hasProjects:_}},methods:{goBack(){this.$router.go(-1)}}}),x={class:"areas"},y={class:"back-button-wrap"},w={class:"area-content"},N={class:"area-description"};function R(e,o,c,i,s,_){const m=r("pagetitle"),u=r("normal-text"),f=j,h=r("container");return P(),k(h,null,{default:a(()=>[t("div",x,[t("div",y,[t("img",{class:"back-button",src:B,onClick:o[0]||(o[0]=(...g)=>e.goBack&&e.goBack(...g))})]),n(m,null,{default:a(()=>[l(d(e.area.name),1)]),_:1}),t("div",w,[t("div",N,[n(u,null,{default:a(()=>[l(d(e.area.description),1)]),_:1}),n(f,{title:"Current Projects in this area:",projects:e.projects,hasProjects:e.hasProjects},null,8,["projects","hasProjects"])])])])]),_:1})}const T=v(C,[["render",R]]);export{T as default};
