var Ae=Object.defineProperty;var we=(t,e,n)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>(we(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function g(){}function me(t){return t()}function ce(){return Object.create(null)}function T(t){t.forEach(me)}function he(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let W;function ne(t,e){return t===e?!0:(W||(W=document.createElement("a")),W.href=e,t===W.href)}function je(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function j(){return M(" ")}function J(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n){t.classList.toggle(e,!!n)}let K;function F(t){K=t}function Ue(){if(!K)throw new Error("Function called outside component initialization");return K}function ke(t){Ue().$$.on_mount.push(t)}const Q=[],ae=[];let G=[];const fe=[],Le=Promise.resolve();let se=!1;function Ie(){se||(se=!0,Le.then(ge))}function re(t){G.push(t)}const te=new Set;let H=0;function ge(){if(H!==0)return;const t=K;do{try{for(;H<Q.length;){const e=Q[H];H++,F(e),Se(e.$$)}}catch(e){throw Q.length=0,H=0,e}for(F(null),Q.length=0,H=0;ae.length;)ae.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];te.has(n)||(te.add(n),n())}G.length=0}while(Q.length);for(;fe.length;)fe.pop()();se=!1,te.clear(),F(t)}function Se(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}function ye(t){const e=[],n=[];G.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),G=e}const Y=new Set;let R;function Ve(){R={r:0,c:[],p:R}}function xe(){R.r||T(R.c),R=R.p}function S(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function V(t,e,n,s){if(t&&t.o){if(Y.has(t))return;Y.add(t),R.c.push(()=>{Y.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function z(t){t&&t.c()}function x(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),re(()=>{const l=t.$$.on_mount.map(me).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...l):T(l),t.$$.on_mount=[]}),r.forEach(re)}function B(t,e){const n=t.$$;n.fragment!==null&&(ye(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Be(t,e){t.$$.dirty[0]===-1&&(Q.push(t),Ie(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(t,e,n,s,r,l,d=null,m=[-1]){const a=K;F(t);const i=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ce(),dirty:m,skip_bound:!1,root:e.target||a.$$.root};d&&d(i.root);let p=!1;if(i.ctx=n?n(t,e.props||{},(c,I,...o)=>{const b=o.length?o[0]:I;return i.ctx&&r(i.ctx[c],i.ctx[c]=b)&&(!i.skip_bound&&i.bound[c]&&i.bound[c](b),p&&Be(t,c)),I}):[],i.update(),p=!0,T(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const c=be(e.target);i.fragment&&i.fragment.l(c),c.forEach(w)}else i.fragment&&i.fragment.c();e.intro&&S(t.$$.fragment),x(t,e.target,e.anchor),ge()}F(a)}class q{constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){B(this,1),this.$destroy=g}$on(e,n){if(!he(n))return g;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($e);function Ee(t){let e;return{c(){e=h("nav"),e.innerHTML='<ul class="menu svelte-1jp58vn"><li class="svelte-1jp58vn"><a href="#about-me" class="svelte-1jp58vn">About me</a></li> <li class="svelte-1jp58vn"><a href="#portfolio" class="svelte-1jp58vn">Portfolio</a></li> <li class="svelte-1jp58vn"><a href="#contact" class="svelte-1jp58vn">Contact</a></li></ul>',u(e,"class","svelte-1jp58vn")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}function qe(t){return document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(n){n.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})}),[]}class ze extends q{constructor(e){super(),E(this,e,qe,Ee,$,{})}}function Ne(t){let e,n;return e=new ze({}),{c(){z(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p:g,i(s){n||(S(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}class _e extends q{constructor(e){super(),E(this,e,null,Ne,$,{})}}const Pe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M100.28%20448H7.4V148.9h92.88zM53.79%20108.1C24.09%20108.1%200%2083.5%200%2053.8a53.79%2053.79%200%200%201%20107.58%200c0%2029.7-24.1%2054.3-53.79%2054.3zM447.9%20448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29%200-55.69%2037.7-55.69%2076.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5%2042.69-48.3%2087.88-48.3%2094%200%20111.28%2061.9%20111.28%20142.3V448z'/%3e%3c/svg%3e",Oe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20512%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M64%20112c-8.8%200-16%207.2-16%2016v22.1L220.5%20291.7c20.7%2017%2050.4%2017%2071.1%200L464%20150.1V128c0-8.8-7.2-16-16-16H64zM48%20212.2V384c0%208.8%207.2%2016%2016%2016H448c8.8%200%2016-7.2%2016-16V212.2L322%20328.8c-38.4%2031.5-93.7%2031.5-132%200L48%20212.2zM0%20128C0%2092.7%2028.7%2064%2064%2064H448c35.3%200%2064%2028.7%2064%2064V384c0%2035.3-28.7%2064-64%2064H64c-35.3%200-64-28.7-64-64V128z'/%3e%3c/svg%3e",Me="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20496%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2%202.3zm44.2-1.7c-2.9.7-4.9%202.6-4.6%204.9.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3.3%202.9%202.3%203.9%201.6%201%203.6.7%204.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z'/%3e%3c/svg%3e";function Re(t){let e,n,s;return{c(){e=h("ul"),e.innerHTML=`<li><a href="https://github.com/sandrikk" class="link svelte-cp6646"><img src="${Me}" alt="github-icon" class="svelte-cp6646"/></a></li> <li><a href="mailto:krevovasandra@gmail.com" class="link svelte-cp6646"><img src="${Oe}" alt="gmail-icon" class="svelte-cp6646"/></a></li> <li><a href="https://linkedin.com/in/sandra-krevova" class="link svelte-cp6646"><img src="${Pe}" alt="linkedin-icon" class="svelte-cp6646"/></a></li>`,n=j(),s=h("p"),s.textContent="© Sandra Krevová, 2024",u(e,"class","socials svelte-cp6646"),u(s,"class","svelte-cp6646")},m(r,l){C(r,e,l),C(r,n,l),C(r,s,l)},p:g,i:g,o:g,d(r){r&&(w(e),w(n),w(s))}}}class He extends q{constructor(e){super(),E(this,e,null,Re,$,{})}}const Qe="/assets/illustration-medium-gradient-ellipse-8WEx5bBT.png";function Ge(t){let e,n,s,r,l,d,m,a,i;return{c(){e=h("div"),n=h("div"),s=h("h1"),s.textContent="Hi, I'm Sandra!",r=j(),l=h("h2"),d=M(t[0]),m=j(),a=h("img"),u(s,"class","svelte-1c70e7g"),u(l,"class","svelte-1c70e7g"),u(n,"class","text-container svelte-1c70e7g"),ne(a.src,i=Qe)||u(a,"src",i),u(a,"alt","illustration"),u(a,"class","svelte-1c70e7g"),u(e,"class","hero-section svelte-1c70e7g")},m(p,c){C(p,e,c),f(e,n),f(n,s),f(n,r),f(n,l),f(l,d),f(e,m),f(e,a)},p(p,[c]){c&1&&D(d,p[0])},i:g,o:g,d(p){p&&w(e)}}}function Te(t,e,n){let s=0,r="";const l=["ICT Student","Web Development Enthusiast"];ke(()=>{d()});function d(){s>=l.length&&(s=0);const a=l[s];m(a,0)}function m(a,i){i<a.length?(n(0,r=a.substring(0,i+1)),i++,setTimeout(()=>{m(a,i)},100)):(s++,setTimeout(d,700))}return[r]}class Xe extends q{constructor(e){super(),E(this,e,Te,Ge,$,{})}}function Fe(t){let e;return{c(){e=h("div"),e.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-10by6mr"><path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill svelte-10by6mr"></path></svg>',u(e,"class","custom-shape-divider-bottom-1707333696 svelte-10by6mr")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class Ke extends q{constructor(e){super(),E(this,e,null,Fe,$,{})}}function We(t){let e,n,s,r,l,d,m,a,i,p,c,I,o,b,N;return{c(){e=h("div"),n=h("a"),s=h("img"),l=j(),d=h("h3"),m=M(t[0]),a=j(),i=h("p"),p=M("Date: "),c=M(t[1]),I=j(),o=h("p"),b=M("Skills Used: "),N=M(t[2]),ne(s.src,r=t[3])||u(s,"src",r),u(s,"alt",t[0]),u(s,"class","svelte-1tpzx8j"),u(n,"href",t[4]),u(e,"class","project svelte-1tpzx8j")},m(y,k){C(y,e,k),f(e,n),f(n,s),f(n,l),f(n,d),f(d,m),f(n,a),f(n,i),f(i,p),f(i,c),f(n,I),f(n,o),f(o,b),f(o,N)},p(y,[k]){k&8&&!ne(s.src,r=y[3])&&u(s,"src",r),k&1&&u(s,"alt",y[0]),k&1&&D(m,y[0]),k&2&&D(c,y[1]),k&4&&D(N,y[2]),k&16&&u(n,"href",y[4])},i:g,o:g,d(y){y&&w(e)}}}function Je(t,e,n){let{projectName:s}=e,{date:r}=e,{skillsUsed:l}=e,{previewImage:d}=e,{projectLink:m}=e,{type:a}=e;return t.$$set=i=>{"projectName"in i&&n(0,s=i.projectName),"date"in i&&n(1,r=i.date),"skillsUsed"in i&&n(2,l=i.skillsUsed),"previewImage"in i&&n(3,d=i.previewImage),"projectLink"in i&&n(4,m=i.projectLink),"type"in i&&n(5,a=i.type)},[s,r,l,d,m,a]}class De extends q{constructor(e){super(),E(this,e,Je,We,$,{projectName:0,date:1,skillsUsed:2,previewImage:3,projectLink:4,type:5})}}function de(t,e,n){const s=t.slice();return s[8]=e[n],s}function pe(t){let e,n;return e=new De({props:{projectName:t[8].projectName,date:t[8].date,skillsUsed:t[8].skillsUsed,previewImage:t[8].previewImage,projectLink:t[8].projectLink}}),{c(){z(e.$$.fragment)},m(s,r){x(e,s,r),n=!0},p(s,r){const l={};r&1&&(l.projectName=s[8].projectName),r&1&&(l.date=s[8].date),r&1&&(l.skillsUsed=s[8].skillsUsed),r&1&&(l.previewImage=s[8].previewImage),r&1&&(l.projectLink=s[8].projectLink),e.$set(l)},i(s){n||(S(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Ye(t){let e,n,s,r,l,d,m,a,i,p,c,I,o,b,N,y,k,le,X,_,Z,ie,O=ue(t[0]),A=[];for(let v=0;v<O.length;v+=1)A[v]=pe(de(t,O,v));const ve=v=>V(A[v],1,1,()=>{A[v]=null});return{c(){e=h("section"),n=h("h2"),n.textContent="Portfolio",s=j(),r=h("div"),l=h("button"),l.textContent="All",d=j(),m=h("span"),m.textContent="/",a=j(),i=h("button"),i.textContent="Web",p=j(),c=h("span"),c.textContent="/",I=j(),o=h("button"),o.textContent="Apps",b=j(),N=h("span"),N.textContent="/",y=j(),k=h("button"),k.textContent="Art",le=j(),X=h("div");for(let v=0;v<A.length;v+=1)A[v].c();u(n,"class","svelte-ilt66h"),u(l,"class","svelte-ilt66h"),P(l,"selected",t[1]===null),u(m,"class","separator svelte-ilt66h"),u(i,"class","svelte-ilt66h"),P(i,"selected",t[1]==="web"),u(c,"class","separator svelte-ilt66h"),u(o,"class","svelte-ilt66h"),P(o,"selected",t[1]==="apps"),u(N,"class","separator svelte-ilt66h"),u(k,"class","svelte-ilt66h"),P(k,"selected",t[1]==="art"),u(r,"class","filter-links svelte-ilt66h"),u(X,"class","projects svelte-ilt66h"),u(e,"class","container svelte-ilt66h"),u(e,"id","portfolio")},m(v,L){C(v,e,L),f(e,n),f(e,s),f(e,r),f(r,l),f(r,d),f(r,m),f(r,a),f(r,i),f(r,p),f(r,c),f(r,I),f(r,o),f(r,b),f(r,N),f(r,y),f(r,k),f(e,le),f(e,X);for(let U=0;U<A.length;U+=1)A[U]&&A[U].m(X,null);_=!0,Z||(ie=[J(l,"click",t[4]),J(i,"click",t[5]),J(o,"click",t[6]),J(k,"click",t[7])],Z=!0)},p(v,[L]){if((!_||L&2)&&P(l,"selected",v[1]===null),(!_||L&2)&&P(i,"selected",v[1]==="web"),(!_||L&2)&&P(o,"selected",v[1]==="apps"),(!_||L&2)&&P(k,"selected",v[1]==="art"),L&1){O=ue(v[0]);let U;for(U=0;U<O.length;U+=1){const oe=de(v,O,U);A[U]?(A[U].p(oe,L),S(A[U],1)):(A[U]=pe(oe),A[U].c(),S(A[U],1),A[U].m(X,null))}for(Ve(),U=O.length;U<A.length;U+=1)ve(U);xe()}},i(v){if(!_){for(let L=0;L<O.length;L+=1)S(A[L]);_=!0}},o(v){A=A.filter(Boolean);for(let L=0;L<A.length;L+=1)V(A[L]);_=!1},d(v){v&&w(e),Ce(A,v),Z=!1,T(ie)}}}function Ze(t,e,n){let{projects:s=[]}=e,r=s,l=null;function d(c){n(1,l=c),n(0,r=c?s.filter(I=>I.type===c):s)}const m=()=>d(null),a=()=>d("web"),i=()=>d("apps"),p=()=>d("art");return t.$$set=c=>{"projects"in c&&n(3,s=c.projects)},[r,l,d,s,m,a,i,p]}class et extends q{constructor(e){super(),E(this,e,Ze,Ye,$,{projects:3})}}function tt(t){let e;return{c(){e=h("section"),e.innerHTML="<h2>Skills</h2> <h3>Frontend</h3> <p>HTML, CSS (Bootstrap), JavaScript (Svelte)</p> <h3>Backend</h3> <p>Node.js, Express.js, SQLite, PostgreSQL</p> <h3>Apps</h3> <p>Java</p> <h3>Tools</h3> <p>Git, Figma, Postman</p> <h3>Generative Art</h3> <p>Processing</p>",u(e,"class","container svelte-gaimxd")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class nt extends q{constructor(e){super(),E(this,e,null,tt,$,{})}}const st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJESURBVFiFxdfNi01hHAfwzxymMe54i4Tc0rikaCxEakJRaMZGWcqCf0JKEaWmLJCN1OwsZolRLLwspjFsEAs7GS9J8jIz7jSlsTjn1ul075nn3CvzrV/nOec8v+/39/ye9zbhKOEIerEba7ESC/ED7/ACDzGMiQLcuejGDfzCbKBN4SY2tSK8CJcwXUA4azMYSLgKoYyxFoSzNirusiBsxdcA0t84iVOoBtQfR89c4hV8CmzV7ZTfnUCfcaxJC0apcjtuCU/VdKpcDfRZj7vorBfABewMJGoFO3A6+7Gs+GgfSvkPFfSdlGS6loEz6PhXTQxACWdrAXTi+H8Ur+EElkQ4jK55CKCEvggH50G8hv0Rts1jAD0RNgdUfIzl4t1wKqfeJPqxCiMBvN0RFgdUHMbP5NnfIIhJ9OEeviXPubCMsPn/Ubwt17APg6n3QexJvVfwOYB3SkIesni8zwSxokG5Il7zQzmNBFauF0QWRcRnMRrhVQ5hFmXxgKwXRAWPxBtOKMbgaIGIG2Vio2Itr9kxWCo+QDYTRK948DUj/l1qBl5rgqBVuw5tqRS+0XhH/IP78hehNEo4hAUN/lexRTILajifE+1AoHAal3P4LtZz6MDLBg5XmgigUbc+k8p0W8apjKdYl/k+iyfi03IIVmNvHf4v2CWT+ix6hK+OReyDuN+DUBbf8/6V+HP5K2hddOCc1q5mVfGAay8qnkY3rip2OZ0Qz/M5l+XsIMlDFw6Ij3DbsUF8SJlJ7C1e40FiQZeVv9B8oAsh+Fn5AAAAAElFTkSuQmCC",rt="data:image/png;base64,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";function lt(t){let e;return{c(){e=h("section"),e.innerHTML=`<h2>CV</h2> <img class="arrow svelte-16cnzjl" src="${rt}" alt="arrow"/> <div class="centered svelte-16cnzjl"><a href="/assets/SandraKrevovaCV.pdf" download="" class="svelte-16cnzjl"><img src="${st}" alt="download-icon" class="svelte-16cnzjl"/> <span>Download my CV</span></a></div>`,u(e,"class","cv svelte-16cnzjl"),u(e,"id","contact")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class it extends q{constructor(e){super(),E(this,e,null,lt,$,{})}}function ot(t){let e;return{c(){e=h("section"),e.innerHTML='<h2>About me</h2> <div class="description svelte-11k6hib"><p class="svelte-11k6hib">Hello! ✨</p> <p class="svelte-11k6hib">I&#39;m a second-year ICT student at Saxion, deeply engaged in the world of web development. My passion for IT took root in Slovakia during my early years, where it blossomed into an academic journey now unfolding in the Netherlands.</p> <p class="svelte-11k6hib">Alongside my studies, I am fascinated by the power of AI, dedicating my spare time to understanding its impact on our everyday lives and future possibilities. I also have a keen interest in generative art, where technology meets creativity.</p> <p class="svelte-11k6hib">Beyond the digital realm, I find joy in the calming beauty of nature.</p></div>',u(e,"class","about-me svelte-11k6hib"),u(e,"id","about-me")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class ct extends q{constructor(e){super(),E(this,e,null,ot,$,{})}}const at="/assets/preview-image1-AwwxLEia.png",ft="/assets/preview-image2-4Akj3LJ9.png",ut="/assets/preview-image3-9N6FtEUM.png",dt="/assets/preview-image4-Z7658nBz.png",pt="/assets/preview-image5-SewycOcc.png";function mt(t){let e,n,s,r,l,d,m,a,i,p,c,I;return e=new Xe({}),s=new Ke({}),l=new ct({}),m=new et({props:{projects:t[0]}}),i=new nt({}),c=new it({}),{c(){z(e.$$.fragment),n=j(),z(s.$$.fragment),r=j(),z(l.$$.fragment),d=j(),z(m.$$.fragment),a=j(),z(i.$$.fragment),p=j(),z(c.$$.fragment)},m(o,b){x(e,o,b),C(o,n,b),x(s,o,b),C(o,r,b),x(l,o,b),C(o,d,b),x(m,o,b),C(o,a,b),x(i,o,b),C(o,p,b),x(c,o,b),I=!0},p:g,i(o){I||(S(e.$$.fragment,o),S(s.$$.fragment,o),S(l.$$.fragment,o),S(m.$$.fragment,o),S(i.$$.fragment,o),S(c.$$.fragment,o),I=!0)},o(o){V(e.$$.fragment,o),V(s.$$.fragment,o),V(l.$$.fragment,o),V(m.$$.fragment,o),V(i.$$.fragment,o),V(c.$$.fragment,o),I=!1},d(o){o&&(w(n),w(r),w(d),w(a),w(p)),B(e,o),B(s,o),B(l,o),B(m,o),B(i,o),B(c,o)}}}function ht(t){return[[{projectName:"RareReads",date:2023,skillsUsed:"HTML, CSS, Svelte, Node.js, Express.js",previewImage:ft,projectLink:"https://github.com/sandrikk/auction-site",type:"web"},{projectName:"NEWGROUNDAI",date:2023,skillsUsed:"HTML, CSS, JavaScript, Three.js",previewImage:at,projectLink:"https://newgroundai.com/",type:"web"},{projectName:"SoundSculptor",date:2023,skillsUsed:"HTML, CSS, JavaScript, Node.js, Express.js, SQLite",previewImage:ut,projectLink:"",type:"web"},{projectName:"TrackManager",date:2023,skillsUsed:"Java",previewImage:dt,projectLink:"https://github.com/sandrikk/TrackManagerApp",type:"apps"},{projectName:"Lorenz System",date:2022,skillsUsed:"Processing",previewImage:pt,projectLink:"https://openprocessing.org/sketch/1781876",type:"art"}]]}class gt extends q{constructor(e){super(),E(this,e,ht,mt,$,{})}}function vt(t){let e,n,s,r,l,d,m,a,i;return n=new _e({}),l=new gt({}),a=new He({}),{c(){e=h("header"),z(n.$$.fragment),s=j(),r=h("main"),z(l.$$.fragment),d=j(),m=h("footer"),z(a.$$.fragment),u(e,"class","container svelte-1ata1oa"),u(m,"class","container svelte-1ata1oa")},m(p,c){C(p,e,c),x(n,e,null),C(p,s,c),C(p,r,c),x(l,r,null),C(p,d,c),C(p,m,c),x(a,m,null),i=!0},p:g,i(p){i||(S(n.$$.fragment,p),S(l.$$.fragment,p),S(a.$$.fragment,p),i=!0)},o(p){V(n.$$.fragment,p),V(l.$$.fragment,p),V(a.$$.fragment,p),i=!1},d(p){p&&(w(e),w(s),w(r),w(d),w(m)),B(n),B(l),B(a)}}}class At extends q{constructor(e){super(),E(this,e,null,vt,$,{})}}new At({target:document.getElementById("app")});
