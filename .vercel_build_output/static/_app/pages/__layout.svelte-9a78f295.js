import{S as Y,i as Z,s as ee,e as h,t as g,c as i,a as d,g as k,d as o,f as te,D as e,E as V,k as _,n as v,b as u,F as Ee,h as we,G as xe,j as ve,m as ge,o as ke,H as Ae,I as Se,J as be,x as ae,u as se,v as $e}from"../chunks/vendor-5b516324.js";function Ne(p){let t,r;return{c(){t=h("footer"),r=g("This is the footer")},l(s){t=i(s,"FOOTER",{});var f=d(t);r=k(f,"This is the footer"),f.forEach(o)},m(s,f){te(s,t,f),e(t,r)},p:V,i:V,o:V,d(s){s&&o(t)}}}class Te extends Y{constructor(t){super();Z(this,t,null,Ne,ee,{})}}function je(p){let t,r,s,f,w,a,$,E,x,A,m,l,n,y,I,O,R,b,q,B,L,C,G,N,J,M,H,U,z,T,K,Q,P,W,D,F,X,re;return{c(){t=h("header"),r=h("h1"),s=h("a"),f=g("svelte-hn-reader"),w=_(),a=h("nav"),$=h("a"),E=g("top"),x=_(),A=h("span"),m=g("|"),l=_(),n=h("a"),y=g("new"),I=h("span"),O=g("|"),R=_(),b=h("a"),q=g("ask"),B=_(),L=h("span"),C=g("|"),G=_(),N=h("a"),J=g("show"),M=_(),H=h("span"),U=g("|"),z=_(),T=h("a"),K=g("jobs"),Q=_(),P=h("div"),W=_(),D=h("button"),F=g(p[0]),this.h()},l(j){t=i(j,"HEADER",{class:!0});var S=d(t);r=i(S,"H1",{class:!0});var le=d(r);s=i(le,"A",{"sveltekit:prefetch":!0,href:!0});var oe=d(s);f=k(oe,"svelte-hn-reader"),oe.forEach(o),le.forEach(o),w=v(S),a=i(S,"NAV",{class:!0});var c=d(a);$=i(c,"A",{"sveltekit:prefetch":!0,href:!0});var ne=d($);E=k(ne,"top"),ne.forEach(o),x=v(c),A=i(c,"SPAN",{});var ce=d(A);m=k(ce,"|"),ce.forEach(o),l=v(c),n=i(c,"A",{"sveltekit:prefetch":!0,href:!0});var fe=d(n);y=k(fe,"new"),fe.forEach(o),I=i(c,"SPAN",{});var he=d(I);O=k(he,"|"),he.forEach(o),R=v(c),b=i(c,"A",{"sveltekit:prefetch":!0,href:!0});var ie=d(b);q=k(ie,"ask"),ie.forEach(o),B=v(c),L=i(c,"SPAN",{});var de=d(L);C=k(de,"|"),de.forEach(o),G=v(c),N=i(c,"A",{"sveltekit:prefetch":!0,href:!0});var ue=d(N);J=k(ue,"show"),ue.forEach(o),M=v(c),H=i(c,"SPAN",{});var me=d(H);U=k(me,"|"),me.forEach(o),z=v(c),T=i(c,"A",{"sveltekit:prefetch":!0,href:!0});var pe=d(T);K=k(pe,"jobs"),pe.forEach(o),Q=v(c),P=i(c,"DIV",{class:!0}),d(P).forEach(o),W=v(c),D=i(c,"BUTTON",{});var _e=d(D);F=k(_e,p[0]),_e.forEach(o),c.forEach(o),S.forEach(o),this.h()},h(){u(s,"sveltekit:prefetch",""),u(s,"href","/top"),u(r,"class","mr-4"),u($,"sveltekit:prefetch",""),u($,"href","/top"),u(n,"sveltekit:prefetch",""),u(n,"href","/newest"),u(b,"sveltekit:prefetch",""),u(b,"href","/ask"),u(N,"sveltekit:prefetch",""),u(N,"href","/show"),u(T,"sveltekit:prefetch",""),u(T,"href","/jobs"),u(P,"class","flex-grow"),u(a,"class","flex flex-grow space-x-1"),u(t,"class","flex bg-green-400 dark:bg-green-800 dark:text-gray-300 p-1")},m(j,S){te(j,t,S),e(t,r),e(r,s),e(s,f),e(t,w),e(t,a),e(a,$),e($,E),e(a,x),e(a,A),e(A,m),e(a,l),e(a,n),e(n,y),e(a,I),e(I,O),e(a,R),e(a,b),e(b,q),e(a,B),e(a,L),e(L,C),e(a,G),e(a,N),e(N,J),e(a,M),e(a,H),e(H,U),e(a,z),e(a,T),e(T,K),e(a,Q),e(a,P),e(a,W),e(a,D),e(D,F),X||(re=Ee(D,"click",p[1]),X=!0)},p(j,[S]){S&1&&we(F,j[0])},i:V,o:V,d(j){j&&o(t),X=!1,re()}}}function ye(p,t,r){let s="";"theme"in localStorage?localStorage.theme==="dark"?(s="light",document.documentElement.classList.add("dark")):(s="dark",document.documentElement.classList.remove("dark")):(localStorage.theme="dark",document.documentElement.classList.add("dark"),s="light");function f(){localStorage.theme==="dark"?(localStorage.theme="light",r(0,s="dark"),document.documentElement.classList.remove("dark")):(localStorage.theme="dark",r(0,s="light"),document.documentElement.classList.add("dark"))}return[s,f]}class De extends Y{constructor(t){super();Z(this,t,ye,je,ee,{})}}function Ie(p){let t,r,s,f,w,a,$,E,x;r=new De({});const A=p[1].default,m=xe(A,p,p[0],null);return E=new Te({}),{c(){t=h("div"),ve(r.$$.fragment),s=_(),f=h("main"),m&&m.c(),w=_(),a=h("div"),$=_(),ve(E.$$.fragment),this.h()},l(l){t=i(l,"DIV",{class:!0});var n=d(t);ge(r.$$.fragment,n),s=v(n),f=i(n,"MAIN",{class:!0});var y=d(f);m&&m.l(y),y.forEach(o),w=v(n),a=i(n,"DIV",{class:!0}),d(a).forEach(o),$=v(n),ge(E.$$.fragment,n),n.forEach(o),this.h()},h(){u(f,"class","flex-grow"),u(a,"class","mt-96"),u(t,"class","flex flex-col min-h-screen w-11/12 xl:w-10/12 mt-2 mx-auto")},m(l,n){te(l,t,n),ke(r,t,null),e(t,s),e(t,f),m&&m.m(f,null),e(t,w),e(t,a),e(t,$),ke(E,t,null),x=!0},p(l,[n]){m&&m.p&&(!x||n&1)&&Ae(m,A,l,l[0],x?be(A,l[0],n,null):Se(l[0]),null)},i(l){x||(ae(r.$$.fragment,l),ae(m,l),ae(E.$$.fragment,l),x=!0)},o(l){se(r.$$.fragment,l),se(m,l),se(E.$$.fragment,l),x=!1},d(l){l&&o(t),$e(r),m&&m.d(l),$e(E)}}}function Le(p,t,r){let{$$slots:s={},$$scope:f}=t;return p.$$set=w=>{"$$scope"in w&&r(0,f=w.$$scope)},[f,s]}class Pe extends Y{constructor(t){super();Z(this,t,Le,Ie,ee,{})}}export{Pe as default};