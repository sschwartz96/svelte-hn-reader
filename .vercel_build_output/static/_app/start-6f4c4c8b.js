var ot=Object.defineProperty,lt=Object.defineProperties;var ct=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var G=(r,t,e)=>t in r?ot(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,$=(r,t)=>{for(var e in t||(t={}))W.call(t,e)&&G(r,e,t[e]);if(N)for(var e of N(t))z.call(t,e)&&G(r,e,t[e]);return r},X=(r,t)=>lt(r,ct(t));var x=(r,t)=>{var e={};for(var s in r)W.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&N)for(var s of N(r))t.indexOf(s)<0&&z.call(r,s)&&(e[s]=r[s]);return e};import{S as ut,i as ft,s as ht,e as dt,c as _t,a as pt,d as k,b as V,f as S,t as gt,g as mt,h as wt,j as U,k as yt,l as v,m as H,n as bt,o as A,p as M,q as B,r as j,u as E,v as O,w as C,x as m,y as vt,z as Et,A as kt,B as K,C as Y}from"./chunks/vendor-5b516324.js";function F(r){let t,e,s;const n=[r[2]||{}];var a=r[0][1];function i(o){let l={$$slots:{default:[Rt]},$$scope:{ctx:o}};for(let c=0;c<n.length;c+=1)l=K(l,n[c]);return{props:l}}return a&&(t=new a(i(r))),{c(){t&&U(t.$$.fragment),e=v()},l(o){t&&H(t.$$.fragment,o),e=v()},m(o,l){t&&A(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&4?M(n,[B(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){j();const u=t;E(u.$$.fragment,1,0,()=>{O(u,1)}),C()}a?(t=new a(i(o)),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&O(t,o)}}}function Q(r){let t,e,s;const n=[r[3]||{}];var a=r[0][2];function i(o){let l={};for(let c=0;c<n.length;c+=1)l=K(l,n[c]);return{props:l}}return a&&(t=new a(i())),{c(){t&&U(t.$$.fragment),e=v()},l(o){t&&H(t.$$.fragment,o),e=v()},m(o,l){t&&A(t,o,l),S(o,e,l),s=!0},p(o,l){const c=l&8?M(n,[B(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){j();const u=t;E(u.$$.fragment,1,0,()=>{O(u,1)}),C()}a?(t=new a(i()),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&E(t.$$.fragment,o),s=!1},d(o){o&&k(e),t&&O(t,o)}}}function Rt(r){let t,e,s=r[0][2]&&Q(r);return{c(){s&&s.c(),t=v()},l(n){s&&s.l(n),t=v()},m(n,a){s&&s.m(n,a),S(n,t,a),e=!0},p(n,a){n[0][2]?s?(s.p(n,a),a&1&&m(s,1)):(s=Q(n),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),E(s,1,1,()=>{s=null}),C())},i(n){e||(m(s),e=!0)},o(n){E(s),e=!1},d(n){s&&s.d(n),n&&k(t)}}}function $t(r){let t,e,s=r[0][1]&&F(r);return{c(){s&&s.c(),t=v()},l(n){s&&s.l(n),t=v()},m(n,a){s&&s.m(n,a),S(n,t,a),e=!0},p(n,a){n[0][1]?s?(s.p(n,a),a&1&&m(s,1)):(s=F(n),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),E(s,1,1,()=>{s=null}),C())},i(n){e||(m(s),e=!0)},o(n){E(s),e=!1},d(n){s&&s.d(n),n&&k(t)}}}function Z(r){let t,e=r[5]&&tt(r);return{c(){t=dt("div"),e&&e.c(),this.h()},l(s){t=_t(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var n=pt(t);e&&e.l(n),n.forEach(k),this.h()},h(){V(t,"id","svelte-announcer"),V(t,"aria-live","assertive"),V(t,"aria-atomic","true"),V(t,"class","svelte-1pdgbjn")},m(s,n){S(s,t,n),e&&e.m(t,null)},p(s,n){s[5]?e?e.p(s,n):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&k(t),e&&e.d()}}}function tt(r){let t;return{c(){t=gt(r[6])},l(e){t=mt(e,r[6])},m(e,s){S(e,t,s)},p(e,s){s&64&&wt(t,e[6])},d(e){e&&k(t)}}}function St(r){let t,e,s,n;const a=[r[1]||{}];var i=r[0][0];function o(c){let u={$$slots:{default:[$t]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=K(u,a[h]);return{props:u}}i&&(t=new i(o(r)));let l=r[4]&&Z(r);return{c(){t&&U(t.$$.fragment),e=yt(),l&&l.c(),s=v()},l(c){t&&H(t.$$.fragment,c),e=bt(c),l&&l.l(c),s=v()},m(c,u){t&&A(t,c,u),S(c,e,u),l&&l.m(c,u),S(c,s,u),n=!0},p(c,[u]){const h=u&2?M(a,[B(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){j();const f=t;E(f.$$.fragment,1,0,()=>{O(f,1)}),C()}i?(t=new i(o(c)),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else i&&t.$set(h);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){n||(t&&m(t.$$.fragment,c),n=!0)},o(c){t&&E(t.$$.fragment,c),n=!1},d(c){t&&O(t,c),c&&k(e),l&&l.d(c),c&&k(s)}}}function Lt(r,t,e){let{stores:s}=t,{page:n}=t,{components:a}=t,{props_0:i=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;vt("__svelte__",s),Et(s.page.notify);let c=!1,u=!1,h=null;return kt(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),r.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,n=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,i=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(n)},[a,i,o,l,c,u,h,s,n]}class qt extends ut{constructor(t){super();ft(this,t,Lt,St,ht,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Ut="modulepreload",et={},At="/_app/",I=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${At}${s}`,s in et)return;et[s]=!0;const n=s.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Ut,n||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),n)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>t())},y=[()=>I(()=>import("./pages/__layout.svelte-9a78f295.js"),["pages/__layout.svelte-9a78f295.js","assets/pages/__layout.svelte-5f02d7b2.css","chunks/vendor-5b516324.js"]),()=>I(()=>import("./error.svelte-bc13c7d8.js"),["error.svelte-bc13c7d8.js","chunks/vendor-5b516324.js"]),()=>I(()=>import("./pages/index.svelte-b4e7611e.js"),["pages/index.svelte-b4e7611e.js","chunks/vendor-5b516324.js"]),()=>I(()=>import("./pages/item/[id].svelte-162b62a9.js"),["pages/item/[id].svelte-162b62a9.js","chunks/vendor-5b516324.js","chunks/ItemSummary-08328a07.js"]),()=>I(()=>import("./pages/[category].svelte-92143dfe.js"),["pages/[category].svelte-92143dfe.js","chunks/vendor-5b516324.js","chunks/ItemSummary-08328a07.js"])],st=decodeURIComponent,Ot=[[/^\/$/,[y[0],y[2]],[y[1]]],[/^\/item\/([^/]+?)\/?$/,[y[0],y[3]],[y[1]],r=>({id:st(r[1])})],[/^\/([^/]+?)\/?$/,[y[0],y[4]],[y[1]],r=>({category:st(r[1])})]],Tt=[y[0](),y[1]()];function jt(r){let t=r.baseURI;if(!t){const e=r.getElementsByTagName("base");t=e.length?e[0].href:r.URL}return t}let rt="";function Ct(r){rt=r.base,r.assets}function J(){return{x:pageXOffset,y:pageYOffset}}function nt(r){for(;r&&r.nodeName.toUpperCase()!=="A";)r=r.parentNode;return r}function it(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}class It{constructor({base:t,routes:e,trailing_slash:s,renderer:n}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=n,n.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=X($({},history.state||{}),{"sveltekit:scroll":J()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const i=nt(a.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(i))};let s;const n=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",n),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=nt(a.target);if(!i||!i.href)return;const o=it(i),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||c&&c.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const u=i.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),b=h>=0?l.substring(0,h):l,p=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),b===p&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?J():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),n=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:n,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:n=!1,state:a={}}={},i){const o=new URL(t,jt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?J():null,n,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,n,a){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}await this.renderer.handle_navigation(i,n,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function at(r){return r instanceof Error||r&&r.name&&r.message?r:new Error(JSON.stringify(r))}function Pt(r){let t=5381,e=r.length;if(typeof r=="string")for(;e;)t=t*33^r.charCodeAt(--e);else for(;e;)t=t*33^r[--e];return(t>>>0).toString(36)}function Nt(r){const t=r.status&&r.status>=400&&r.status<=599&&!r.redirect;if(r.error||t){const e=r.status;if(!r.error&&t)return{status:e||500,error:new Error};const s=typeof r.error=="string"?new Error(r.error):r.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(r.redirect){if(!r.status||Math.floor(r.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof r.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(r.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return r}function Vt(r){const t=Y(r);let e=!0;function s(){e=!0,t.update(i=>i)}function n(i){e=!1,t.set(i)}function a(i){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&i(o=l)})}return{notify:s,set:n,subscribe:a}}function Dt(r,t){const e=typeof r=="string"?r:r.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Pt(t.body)}"]`);const n=document.querySelector(s);if(n&&n.textContent){const a=JSON.parse(n.textContent),{body:i}=a,o=x(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(r,t)}class Ht{constructor({Root:t,fallback:e,target:s,session:n,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Vt({}),navigating:Y(null),session:Y(n)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:n}){const a=[];let i={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:n,stuff:i,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:n.path,query:n.query}}else h.loaded.stuff&&(i=$($({},i),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:n,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:at(c),path:n.path,query:n.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,n){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,n)}async update(t,e,s,n){var l;const a=this.token={};let i=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),(l=getSelection())==null||l.removeAllRanges(),!n)await 0;else{const{hash:c,scroll:u,keepfocus:h}=n;h||document.body.focus();const f=Math.round(pageYOffset),b=document.documentElement.scrollHeight-innerHeight;await 0;const p=Math.round(pageYOffset),R=document.documentElement.scrollHeight-innerHeight;if(p===Math.min(f,R)||b-f==R-p){const L=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):L?L.scrollIntoView():scrollTo(0,0)}}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=i.state.branch[i.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:$({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const n=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===n[0].toString())o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:n,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),n=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:n&&n.loaded?n.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:n,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in n.params)Object.defineProperty(o,c,{get(){return i.uses.params.add(c),n.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:n.host,params:o,get path(){return i.uses.path=!0,n.path},get query(){return i.uses.query=!0,n.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,$({},a)},fetch(f,b){const p=typeof f=="string"?f:f.url,{href:R}=new URL(p,new URL(n.path,document.baseURI));return i.uses.dependencies.push(R),c?fetch(f,b):Dt(f,b)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;i.loaded=Nt(h),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:n}},a){const i=`${s}?${n}`;if(!a){const d=this.cache.get(i);if(d)return d}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(d=>this.current.page.params[d]!==h[d]),query:n.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},b={host:this.host,path:e,query:n,params:h};let p=[],R={},D=!1,L=200,T;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let _;try{if(!l[d])continue;const w=await l[d](),g=this.current.branch[d];if(!g||w!==g.module||f.path&&g.uses.path||f.params.some(q=>g.uses.params.has(q))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(q=>this.invalid.has(q))||D&&g.uses.stuff){_=await this._load_node({module:w,page:b,stuff:R});const q=d===l.length-1;if(_&&_.loaded){if(_.loaded.error&&(L=_.loaded.status,T=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.stuff&&(D=!0)}else if(q&&w.load)return}else _=g}catch(w){L=500,T=at(w)}if(T){for(;d--;)if(c[d]){let w,g,P=d;for(;!(g=p[P]);)P-=1;try{if(w=await this._load_node({status:L,error:T,module:await c[d](),page:b,stuff:g.stuff}),w&&w.loaded&&w.loaded.error)continue;p=p.slice(0,P+1).concat(w);break t}catch{continue}}return await this._load_error({status:L,error:T,path:e,query:n})}else _&&_.loaded&&_.loaded.stuff&&(R=$($({},R),_.loaded.stuff)),p.push(_)}return await this._get_navigation_result_from_branch({page:b,branch:p})}async _load_error({status:t,error:e,path:s,query:n}){const a={host:this.host,path:s,query:n,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Kt({paths:r,target:t,session:e,host:s,route:n,spa:a,trailing_slash:i,hydrate:o}){const l=new Ht({Root:qt,fallback:Tt,target:t,session:e,host:s}),c=n?new It({base:r.base,routes:Ot,trailing_slash:i,renderer:l}):null;Ct(r),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Kt as start};