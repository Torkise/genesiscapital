import{l as h,m as y,q as D,s as w,v as _,x as C,k,y as g,z as O,j as B,A as j,B as A}from"./entry.e14311e4.js";const M=()=>null;function z(...o){var v;const n=typeof o[o.length-1]=="string"?o.pop():void 0;typeof o[0]!="string"&&o.unshift(n);let[a,u,t={}]=o;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??M,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const e=h(),f=()=>e.isHydrating?e.payload.data[a]:e.static.data[a],l=()=>f()!==void 0;e._asyncData[a]||(e._asyncData[a]={data:y(f()??((v=t.default)==null?void 0:v.call(t))??null),pending:y(!l()),error:y(e.payload._errors[a]?D(e.payload._errors[a]):null)});const r={...e._asyncData[a]};r.refresh=r.execute=(c={})=>{if(e._asyncDataPromises[a]){if(c.dedupe===!1)return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}if(c._initial&&l())return f();r.pending.value=!0;const d=new Promise((s,i)=>{try{s(u(e))}catch(b){i(b)}}).then(s=>{if(d.cancelled)return e._asyncDataPromises[a];let i=s;t.transform&&(i=t.transform(s)),t.pick&&(i=E(i,t.pick)),r.data.value=i,r.error.value=null}).catch(s=>{var i;if(d.cancelled)return e._asyncDataPromises[a];r.error.value=s,r.data.value=k(((i=t.default)==null?void 0:i.call(t))??null)}).finally(()=>{d.cancelled||(r.pending.value=!1,e.payload.data[a]=r.data.value,r.error.value&&(e.payload._errors[a]=D(r.error.value)),delete e._asyncDataPromises[a])});return e._asyncDataPromises[a]=d,e._asyncDataPromises[a]};const m=()=>r.refresh({_initial:!0}),P=t.server!==!1&&e.payload.serverRendered;{const c=g();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const s=c._nuxtOnBeforeMountCbs;c&&(w(()=>{s.forEach(i=>{i()}),s.splice(0,s.length)}),_(()=>s.splice(0,s.length)))}P&&e.isHydrating&&l()?r.pending.value=!1:c&&(e.payload.serverRendered&&e.isHydrating||t.lazy)&&t.immediate?c._nuxtOnBeforeMountCbs.push(m):t.immediate&&m(),t.watch&&C(t.watch,()=>r.refresh());const d=e.hook("app:data:refresh",s=>{if(!s||s.includes(a))return r.refresh()});c&&_(d)}const p=Promise.resolve(e._asyncDataPromises[a]).then(()=>r);return Object.assign(p,r),p}function E(o,n){const a={};for(const u of n)a[u]=o[u];return a}const x="__nuxt_component";async function H(o,n){const a=h(),u=B(),t=g(),{fetchKey:e}=t.proxy.$options,f=typeof e=="function"?e(()=>""):e||u.fullPath,{data:l}=await z(`options:asyncdata:${f}`,()=>n(a));l.value&&typeof l.value=="object"&&Object.assign(await o,j(A(l.value)))}const R=function(n){const{setup:a}=n;return!a&&!n.asyncData&&!n.head?{[x]:!0,...n}:{[x]:!0,...n,setup(u,t){const e=(a==null?void 0:a(u,t))||{},f=[];if(n.asyncData&&f.push(H(e,n.asyncData)),n.head){const l=h();O(typeof n.head=="function"?()=>n.head(l):n.head)}return Promise.resolve(e).then(()=>Promise.all(f)).then(()=>e).finally(()=>{f.length=0})}}};export{R as d};
