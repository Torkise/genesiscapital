import{_ as i}from"./nuxt-link.28b06dad.js";import{_ as d,o as t,f as o,a as c,t as _,F as p,g as u,b as l,w as h,p as y,j as m}from"./entry.20fb4459.js";const x={props:{title:{type:String,required:!0},projects:{type:Array,required:!0},hasProjects:{type:Boolean,required:!0}}},f=e=>(y("data-v-c681ad8c"),e=e(),m(),e),j={class:"project-box"},k={key:1},v=f(()=>c("p",null,"This employee is not currently working on a project.",-1)),g=[v];function B(e,S,s,w,I,q){const n=i;return t(),o("div",j,[c("h2",null,_(s.title),1),s.hasProjects?(t(!0),o(p,{key:0},u(s.projects,(r,a)=>(t(),o("div",{key:a},[l(n,{to:"/projects/"+r.id},{default:h(()=>[c("p",null,_(r.title),1)]),_:2},1032,["to"])]))),128)):(t(),o("div",k,g))])}const b=d(x,[["render",B],["__scopeId","data-v-c681ad8c"]]);export{b as _};
