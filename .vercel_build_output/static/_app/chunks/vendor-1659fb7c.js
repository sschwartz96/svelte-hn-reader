function v(){}const G=t=>t;function yt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function it(){return Object.create(null)}function E(t){t.forEach(nt)}function O(t){return typeof t=="function"}function bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function xt(t){return Object.keys(t).length===0}function It(t,e,n,r){if(t){const s=st(t,e,n,r);return t[0](s)}}function st(t,e,n,r){return t[1]&&r?yt(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],i=Math.max(e.dirty.length,s.length);for(let c=0;c<i;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function Wt(t,e,n,r,s,a){if(s){const i=st(e,n,r,a);t.p(i,s)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const rt=typeof window!="undefined";let J=rt?()=>window.performance.now():()=>Date.now(),K=rt?t=>requestAnimationFrame(t):v;const C=new Set;function ot(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&K(ot)}function Q(t){let e;return C.size===0&&K(ot),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let B=!1;function $t(){B=!0}function wt(){B=!1}function kt(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:kt(1,s,u=>e[n[u]].claim_order,l))-1;r[o]=n[_]+1;const d=_+1;n[d]=o,s=Math.max(d,s)}const a=[],i=[];let c=e.length-1;for(let o=n[s]+1;o!=0;o=r[o-1]){for(a.push(e[o-1]);c>=o;c--)i.push(e[c]);c--}for(;c>=0;c--)i.push(e[c]);a.reverse(),i.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<i.length;o++){for(;l<a.length&&i[o].claim_order>=a[l].claim_order;)l++;const _=l<a.length?a[l]:null;t.insertBefore(i[o],_)}}function Et(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=lt("style");return Ct(ct(t),e),e}function Ct(t,e){Et(t.head||t,e)}function Mt(t,e){if(B){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){B&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Nt(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function Kt(){return U(" ")}function Qt(){return U("")}function Ut(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,r,s=!1){At(t);const a=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s||(t.claim_info.last_index=i),c}}for(let i=t.claim_info.last_index-1;i>=0;i--){const c=t[i];if(e(c)){const o=n(c);return o===void 0?t.splice(i,1):t[i]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,c}}return r()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Ft(t,e,n,r){return at(t,s=>s.nodeName===e,s=>{const a=[];for(let i=0;i<s.attributes.length;i++){const c=s.attributes[i];n[c.name]||a.push(c.name)}a.forEach(i=>s.removeAttribute(i))},()=>r(e))}function Xt(t,e,n){return Ft(t,e,n,lt)}function Tt(t,e){return at(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>U(e),!0)}function Yt(t){return Tt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ut(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const V=new Set;let R=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function z(t,e,n,r,s,a,i,c=0){const o=16.666/r;let l=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*a(m);l+=m*100+`%{${i(y,1-y)}}
`}const _=l+`100% {${i(n,1-n)}}
}`,d=`__svelte_${Ot(_)}_${c}`,u=ct(t);V.add(u);const f=u.__svelte_stylesheet||(u.__svelte_stylesheet=St(t).sheet),h=u.__svelte_rules||(u.__svelte_rules={});h[d]||(h[d]=!0,f.insertRule(`@keyframes ${d} ${_}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${r}ms linear ${s}ms 1 both`,R+=1,d}function D(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-r.length;s&&(t.style.animation=r.join(", "),R-=s,R||Bt())}function Bt(){K(()=>{R||(V.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),V.clear())})}let q;function P(t){q=t}function I(){if(!q)throw new Error("Function called outside component initialization");return q}function te(t){I().$$.on_mount.push(t)}function ee(t){I().$$.after_update.push(t)}function ne(){const t=I();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=ut(e,n);r.slice().forEach(a=>{a.call(t,s)})}}}function ie(t,e){I().$$.context.set(t,e)}const j=[],ft=[],L=[],dt=[],_t=Promise.resolve();let X=!1;function ht(){X||(X=!0,_t.then(mt))}function se(){return ht(),_t}function M(t){L.push(t)}let Y=!1;const Z=new Set;function mt(){if(!Y){Y=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];P(e),Rt(e.$$)}for(P(null),j.length=0;ft.length;)ft.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];Z.has(e)||(Z.add(e),e())}L.length=0}while(j.length);for(;dt.length;)dt.pop()();X=!1,Y=!1,Z.clear()}}function Rt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let A;function tt(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function S(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const W=new Set;let k;function re(){k={r:0,c:[],p:k}}function oe(){k.r||E(k.c),k=k.p}function pt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function zt(t,e,n,r){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const et={duration:0};function ce(t,e,n){let r=e(t,n),s=!1,a,i,c=0;function o(){a&&D(t,a)}function l(){const{delay:d=0,duration:u=300,easing:f=G,tick:h=v,css:g}=r||et;g&&(a=z(t,0,1,u,d,f,g,c++)),h(0,1);const m=J()+d,y=m+u;i&&i.abort(),s=!0,M(()=>S(t,!0,"start")),i=Q(b=>{if(s){if(b>=y)return h(1,0),S(t,!0,"end"),o(),s=!1;if(b>=m){const x=f((b-m)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,D(t),O(r)?(r=r(),tt().then(l)):l())},invalidate(){_=!1},end(){s&&(o(),s=!1)}}}function le(t,e,n){let r=e(t,n),s=!0,a;const i=k;i.r+=1;function c(){const{delay:o=0,duration:l=300,easing:_=G,tick:d=v,css:u}=r||et;u&&(a=z(t,1,0,l,o,_,u));const f=J()+o,h=f+l;M(()=>S(t,!1,"start")),Q(g=>{if(s){if(g>=h)return d(0,1),S(t,!1,"end"),--i.r||E(i.c),!1;if(g>=f){const m=_((g-f)/l);d(1-m,m)}}return s})}return O(r)?tt().then(()=>{r=r(),c()}):c(),{end(o){o&&r.tick&&r.tick(1,0),s&&(a&&D(t,a),s=!1)}}}function ae(t,e,n,r){let s=e(t,n),a=r?0:1,i=null,c=null,o=null;function l(){o&&D(t,o)}function _(u,f){const h=u.b-a;return f*=Math.abs(h),{a,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function d(u){const{delay:f=0,duration:h=300,easing:g=G,tick:m=v,css:y}=s||et,b={start:J()+f,b:u};u||(b.group=k,k.r+=1),i||c?c=b:(y&&(l(),o=z(t,a,u,h,f,g,y)),u&&m(0,1),i=_(b,h),M(()=>S(t,u,"start")),Q(x=>{if(c&&x>c.start&&(i=_(c,h),c=null,S(t,i.b,"start"),y&&(l(),o=z(t,a,i.b,i.duration,0,g,s.css))),i){if(x>=i.end)m(a=i.b,1-a),S(t,i.b,"end"),c||(i.b?l():--i.group.r||E(i.group.c)),i=null;else if(x>=i.start){const F=x-i.start;a=i.a+i.d*g(F/i.duration),m(a,1-a)}}return!!(i||c)}))}return{run(u){O(s)?tt().then(()=>{s=s(),d(u)}):d(u)},end(){l(),i=c=null}}}const ue=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function fe(t,e){zt(t,1,1,()=>{e.delete(t.key)})}function de(t,e,n,r,s,a,i,c,o,l,_,d){let u=t.length,f=a.length,h=u;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,b=new Map;for(h=f;h--;){const p=d(s,a,h),$=n(p);let w=i.get($);w?r&&w.p(p,e):(w=l($,p),w.c()),y.set($,m[h]=w),$ in g&&b.set($,Math.abs(h-g[$]))}const x=new Set,F=new Set;function H(p){pt(p,1),p.m(c,_),i.set(p.key,p),_=p.first,f--}for(;u&&f;){const p=m[f-1],$=t[u-1],w=p.key,T=$.key;p===$?(_=p.first,u--,f--):y.has(T)?!i.has(w)||x.has(w)?H(p):F.has(T)?u--:b.get(w)>b.get(T)?(F.add(w),H(p)):(x.add(T),u--):(o($,i),u--)}for(;u--;){const p=t[u];y.has(p.key)||o(p,i)}for(;f;)H(m[f-1]);return m}function _e(t,e){const n={},r={},s={$$scope:1};let a=t.length;for(;a--;){const i=t[a],c=e[a];if(c){for(const o in i)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);t[a]=c}else for(const o in i)s[o]=1}for(const i in r)i in n||(n[i]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Dt(t,e,n,r){const{fragment:s,on_mount:a,on_destroy:i,after_update:c}=t.$$;s&&s.m(e,n),r||M(()=>{const o=a.map(nt).filter(O);i?i.push(...o):E(o),t.$$.on_mount=[]}),c.forEach(M)}function qt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(j.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,r,s,a,i,c=[-1]){const o=q;P(t);const l=t.$$={fragment:null,ctx:null,props:a,update:v,not_equal:s,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:it(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};i&&i(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(d,u,...f)=>{const h=f.length?f[0]:u;return l.ctx&&s(l.ctx[d],l.ctx[d]=h)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](h),_&&Pt(t,d)),u}):[],l.update(),_=!0,E(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){$t();const d=jt(e.target);l.fragment&&l.fragment.l(d),d.forEach(Nt)}else l.fragment&&l.fragment.c();e.intro&&pt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),wt(),mt()}P(o)}class ye{$destroy(){qt(this,1),this.$destroy=v}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const N=[];function be(t,e=v){let n;const r=new Set;function s(c){if(bt(t,c)&&(t=c,n)){const o=!N.length;for(const l of r)l[1](),N.push(l,t);if(o){for(let l=0;l<N.length;l+=2)N[l][0](N[l+1]);N.length=0}}}function a(c){s(c(t))}function i(c,o=v){const l=[c,o];return r.add(l),r.size===1&&(n=e(s)||v),c(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:i}}function gt(t){const e=t-1;return e*e*e+1}function xe(t){return-.5*(Math.cos(Math.PI*t)-1)}function $e(t,{delay:e=0,duration:n=400,easing:r=gt,x:s=0,y:a=0,opacity:i=0}={}){const c=getComputedStyle(t),o=+c.opacity,l=c.transform==="none"?"":c.transform,_=o*(1-i);return{delay:e,duration:n,easing:r,css:(d,u)=>`
			transform: ${l} translate(${(1-d)*s}px, ${(1-d)*a}px);
			opacity: ${o-_*u}`}}function we(t,{delay:e=0,duration:n=400,easing:r=gt}={}){const s=getComputedStyle(t),a=+s.opacity,i=parseFloat(s.height),c=parseFloat(s.paddingTop),o=parseFloat(s.paddingBottom),l=parseFloat(s.marginTop),_=parseFloat(s.marginBottom),d=parseFloat(s.borderTopWidth),u=parseFloat(s.borderBottomWidth);return{delay:e,duration:n,easing:r,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*a};height: ${f*i}px;padding-top: ${f*c}px;padding-bottom: ${f*o}px;margin-top: ${f*l}px;margin-bottom: ${f*_}px;border-top-width: ${f*d}px;border-bottom-width: ${f*u}px;`}}export{te as A,yt as B,be as C,Mt as D,v as E,Ut as F,It as G,Wt as H,Ht as I,Lt as J,M as K,ae as L,ne as M,we as N,de as O,fe as P,xe as Q,ue as R,ye as S,se as T,le as U,Jt as V,ce as W,$e as X,jt as a,Vt as b,Xt as c,Nt as d,lt as e,Gt as f,Tt as g,Zt as h,ge as i,me as j,Kt as k,Qt as l,pe as m,Yt as n,Dt as o,_e as p,he as q,re as r,bt as s,U as t,zt as u,qt as v,oe as w,pt as x,ie as y,ee as z};
