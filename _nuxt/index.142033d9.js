import{_ as u}from"./nuxt-link.7c0071c1.js";import{g as _,_ as d,c as m,w as n,r as o,o as a,a as e,b as i,d as h,f as r,h as f,t as g,F as v}from"./entry.8ddfe90b.js";import{d as x}from"./component.68c0d309.js";const w=x({async asyncData(){return{areas:await $fetch(_().public.serverURL+"/areas")}}});const y=e("section",{id:"general",class:"area-section"},[e("p",null,"In Genesis Capital, we are committed to investing in innovative and high-growth potential startups that are poised to make a significant impact in their respective industries. On this page, we provide an overview of the areas in which we invest and the types of businesses we are looking to support. Whether you are an entrepreneur seeking funding for your startup or an investor interested in learning more about our investment strategy, we hope this page provides valuable insights into our focus and approach.")],-1),b={class:"areas-box"},k={class:"areas-image-box"},C=["src"],N={class:"area-name"};function $(s,B,F,L,V,D){const c=o("pagetitle"),p=u,l=o("container");return a(),m(l,null,{default:n(()=>[e("div",null,[i(c,null,{default:n(()=>[h("Our Fields of Interest")]),_:1}),y,e("div",b,[(a(!0),r(v,null,f(s.areas,t=>(a(),r("div",k,[i(p,{to:"/areas/"+t.id},{default:n(()=>[e("img",{src:t.mainphoto},null,8,C)]),_:2},1032,["to"]),e("p",N,g(t.name),1)]))),256))])])]),_:1})}const E=d(w,[["render",$]]);export{E as default};
