import{_ as g}from"./ProjectBox.bfec54c5.js";import{_ as v,c as b,w as a,u as p,r,o as k,a as e,b as n,d as l,t as d}from"./entry.59c8163e.js";import{d as P}from"./component.13a11f7f.js";import{_ as $}from"./back.25cda634.js";import"./nuxt-link.f0856470.js";import"./asyncData.df308d27.js";const B=P({async asyncData(){const o=$fetch(p().public.serverURL+"/areas/area=1"),c=$fetch(p().public.serverURL+"/projects/area=1"),[i,s]=await Promise.all([o,c]),_=s.length>0;return{area:i,projects:s,hasProjects:_}},methods:{goBack(){this.$router.go(-1)}}}),C={class:"areas"},x={class:"back-button-wrap"},y={class:"area-content"},w={class:"area-description"};function N(t,o,c,i,s,_){const m=r("pagetitle"),u=r("normal-text"),f=g,h=r("container");return k(),b(h,null,{default:a(()=>[e("div",C,[e("div",x,[e("img",{class:"back-button",src:$,onClick:o[0]||(o[0]=(...j)=>t.goBack&&t.goBack(...j))})]),n(m,null,{default:a(()=>[l(d(t.area.name),1)]),_:1}),e("div",y,[e("div",w,[n(u,null,{default:a(()=>[l(d(t.area.description),1)]),_:1}),n(f,{title:"Current Projects in this area:",projects:t.projects,hasProjects:t.hasProjects},null,8,["projects","hasProjects"])])])])]),_:1})}const T=v(B,[["render",N]]);export{T as default};
