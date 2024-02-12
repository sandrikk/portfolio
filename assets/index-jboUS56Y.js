var Ae=Object.defineProperty;var we=(t,e,n)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ee=(t,e,n)=>(we(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function g(){}function pe(t){return t()}function ce(){return Object.create(null)}function T(t){t.forEach(pe)}function he(t){return typeof t=="function"}function x(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let J;function ne(t,e){return t===e?!0:(J||(J=document.createElement("a")),J.href=e,t===J.href)}function je(t){return Object.keys(t).length===0}function f(t,e){t.appendChild(e)}function C(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Ce(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function j(){return O(" ")}function W(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function be(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n){t.classList.toggle(e,!!n)}let K;function F(t){K=t}function Ue(){if(!K)throw new Error("Function called outside component initialization");return K}function ye(t){Ue().$$.on_mount.push(t)}const Q=[],ae=[];let G=[];const fe=[],Ie=Promise.resolve();let se=!1;function ke(){se||(se=!0,Ie.then(ge))}function re(t){G.push(t)}const te=new Set;let H=0;function ge(){if(H!==0)return;const t=K;do{try{for(;H<Q.length;){const e=Q[H];H++,F(e),qe(e.$$)}}catch(e){throw Q.length=0,H=0,e}for(F(null),Q.length=0,H=0;ae.length;)ae.pop()();for(let e=0;e<G.length;e+=1){const n=G[e];te.has(n)||(te.add(n),n())}G.length=0}while(Q.length);for(;fe.length;)fe.pop()();se=!1,te.clear(),F(t)}function qe(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}function Le(t){const e=[],n=[];G.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),G=e}const Y=new Set;let R;function Se(){R={r:0,c:[],p:R}}function Ve(){R.r||T(R.c),R=R.p}function q(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(Y.has(t))return;Y.add(t),R.c.push(()=>{Y.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ue(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function E(t){t&&t.c()}function V(t,e,n){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),re(()=>{const i=t.$$.on_mount.map(pe).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...i):T(i),t.$$.on_mount=[]}),r.forEach(re)}function z(t,e){const n=t.$$;n.fragment!==null&&(Le(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ze(t,e){t.$$.dirty[0]===-1&&(Q.push(t),ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,n,s,r,i,u=null,p=[-1]){const a=K;F(t);const l=t.$$={fragment:null,ctx:[],props:i,update:g,not_equal:r,bound:ce(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:ce(),dirty:p,skip_bound:!1,root:e.target||a.$$.root};u&&u(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(c,k,...o)=>{const b=o.length?o[0]:k;return l.ctx&&r(l.ctx[c],l.ctx[c]=b)&&(!l.skip_bound&&l.bound[c]&&l.bound[c](b),d&&ze(t,c)),k}):[],l.update(),d=!0,T(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const c=be(e.target);l.fragment&&l.fragment.l(c),c.forEach(w)}else l.fragment&&l.fragment.c();e.intro&&q(t.$$.fragment),V(t,e.target,e.anchor),ge()}F(a)}class ${constructor(){ee(this,"$$");ee(this,"$$set")}$destroy(){z(this,1),this.$destroy=g}$on(e,n){if(!he(n))return g;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);function Be(t){let e;return{c(){e=h("nav"),e.innerHTML='<ul class="menu svelte-1jp58vn"><li class="svelte-1jp58vn"><a href="#about-me" class="svelte-1jp58vn">About me</a></li> <li class="svelte-1jp58vn"><a href="#portfolio" class="svelte-1jp58vn">Portfolio</a></li> <li class="svelte-1jp58vn"><a href="#contact" class="svelte-1jp58vn">Contact</a></li></ul>',m(e,"class","svelte-1jp58vn")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class $e extends ${constructor(e){super(),B(this,e,null,Be,x,{})}}function Ee(t){let e,n;return e=new $e({}),{c(){E(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p:g,i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){z(e,s)}}}class _e extends ${constructor(e){super(),B(this,e,null,Ee,x,{})}}const Ne="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20448%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M100.28%20448H7.4V148.9h92.88zM53.79%20108.1C24.09%20108.1%200%2083.5%200%2053.8a53.79%2053.79%200%200%201%20107.58%200c0%2029.7-24.1%2054.3-53.79%2054.3zM447.9%20448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29%200-55.69%2037.7-55.69%2076.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5%2042.69-48.3%2087.88-48.3%2094%200%20111.28%2061.9%20111.28%20142.3V448z'/%3e%3c/svg%3e",Pe="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20512%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M64%20112c-8.8%200-16%207.2-16%2016v22.1L220.5%20291.7c20.7%2017%2050.4%2017%2071.1%200L464%20150.1V128c0-8.8-7.2-16-16-16H64zM48%20212.2V384c0%208.8%207.2%2016%2016%2016H448c8.8%200%2016-7.2%2016-16V212.2L322%20328.8c-38.4%2031.5-93.7%2031.5-132%200L48%20212.2zM0%20128C0%2092.7%2028.7%2064%2064%2064H448c35.3%200%2064%2028.7%2064%2064V384c0%2035.3-28.7%2064-64%2064H64c-35.3%200-64-28.7-64-64V128z'/%3e%3c/svg%3e",Me="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='%2369FF24'%20width='5rem'%20viewBox='0%200%20496%20512'%3e%3c!--!%20Font%20Awesome%20Pro%206.4.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license%20(Commercial%20License)%20Copyright%202023%20Fonticons,%20Inc.%20--%3e%3cpath%20d='M165.9%20397.4c0%202-2.3%203.6-5.2%203.6-3.3.3-5.6-1.3-5.6-3.6%200-2%202.3-3.6%205.2-3.6%203-.3%205.6%201.3%205.6%203.6zm-31.1-4.5c-.7%202%201.3%204.3%204.3%204.9%202.6%201%205.6%200%206.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2%202.3zm44.2-1.7c-2.9.7-4.9%202.6-4.6%204.9.3%202%202.9%203.3%205.9%202.6%202.9-.7%204.9-2.6%204.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8%208C106.1%208%200%20113.3%200%20252c0%20110.9%2069.8%20205.8%20169.5%20239.2%2012.8%202.3%2017.3-5.6%2017.3-12.1%200-6.2-.3-40.4-.3-61.4%200%200-70%2015-84.7-29.8%200%200-11.4-29.1-27.8-36.6%200%200-22.9-15.7%201.6-15.4%200%200%2024.9%202%2038.6%2025.8%2021.9%2038.6%2058.6%2027.5%2072.9%2020.9%202.3-16%208.8-27.1%2016-33.7-55.9-6.2-112.3-14.3-112.3-110.5%200-27.5%207.6-41.3%2023.6-58.9-2.6-6.5-11.1-33.3%202.6-67.9%2020.9-6.5%2069%2027%2069%2027%2020-5.6%2041.5-8.5%2062.8-8.5s42.8%202.9%2062.8%208.5c0%200%2048.1-33.6%2069-27%2013.7%2034.7%205.2%2061.4%202.6%2067.9%2016%2017.7%2025.8%2031.5%2025.8%2058.9%200%2096.5-58.9%20104.2-114.8%20110.5%209.2%207.9%2017%2022.9%2017%2046.4%200%2033.7-.3%2075.4-.3%2083.6%200%206.5%204.6%2014.4%2017.3%2012.1C428.2%20457.8%20496%20362.9%20496%20252%20496%20113.3%20383.5%208%20244.8%208zM97.2%20352.9c-1.3%201-1%203.3.7%205.2%201.6%201.6%203.9%202.3%205.2%201%201.3-1%201-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7%201.3.3%202.9%202.3%203.9%201.6%201%203.6.7%204.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4%2035.6c-1.6%201.3-1%204.3%201.3%206.2%202.3%202.3%205.2%202.6%206.5%201%201.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6%201-1.6%203.6%200%205.9%201.6%202.3%204.3%203.3%205.6%202.3%201.6-1.3%201.6-3.9%200-6.2-1.4-2.3-4-3.3-5.6-2z'/%3e%3c/svg%3e";function Oe(t){let e,n,s;return{c(){e=h("ul"),e.innerHTML=`<li><a href="https://github.com/sandrikk" class="link svelte-rusiyi"><img src="${Me}" alt="github-icon" class="svelte-rusiyi"/></a></li> <li><a href="mailto:krevovasandra@gmail.com" class="link svelte-rusiyi"><img src="${Pe}" alt="gmail-icon" class="svelte-rusiyi"/></a></li> <li><a href="https://linkedin.com/in/sandra-krevova" class="link svelte-rusiyi"><img src="${Ne}" alt="linkedin-icon" class="svelte-rusiyi"/></a></li>`,n=j(),s=h("p"),s.textContent="© Sandra Krevova, 2023",m(e,"class","socials svelte-rusiyi"),m(s,"class","svelte-rusiyi")},m(r,i){C(r,e,i),C(r,n,i),C(r,s,i)},p:g,i:g,o:g,d(r){r&&(w(e),w(n),w(s))}}}class Re extends ${constructor(e){super(),B(this,e,null,Oe,x,{})}}const He="/assets/illustration-medium-gradient-ellipse-8WEx5bBT.png";function Qe(t){let e,n,s,r,i,u,p,a,l;return{c(){e=h("div"),n=h("div"),s=h("h1"),s.textContent="Hi, I'm Sandra!",r=j(),i=h("h2"),u=O(t[0]),p=j(),a=h("img"),m(s,"class","svelte-l0mn2o"),m(i,"class","svelte-l0mn2o"),m(n,"class","text-container svelte-l0mn2o"),ne(a.src,l=He)||m(a,"src",l),m(a,"alt","illustration"),m(a,"class","svelte-l0mn2o"),m(e,"class","hero-section svelte-l0mn2o")},m(d,c){C(d,e,c),f(e,n),f(n,s),f(n,r),f(n,i),f(i,u),f(e,p),f(e,a)},p(d,[c]){c&1&&D(u,d[0])},i:g,o:g,d(d){d&&w(e)}}}function Ge(t,e,n){let s=0,r="";const i=["ICT Student","Web Development Enthusiast"];ye(()=>{u()});function u(){s>=i.length&&(s=0);const a=i[s];p(a,0)}function p(a,l){l<a.length?(n(0,r=a.substring(0,l+1)),l++,setTimeout(()=>{p(a,l)},100)):(s++,setTimeout(u,700))}return[r]}class Te extends ${constructor(e){super(),B(this,e,Ge,Qe,x,{})}}function Xe(t){let e;return{c(){e=h("div"),e.innerHTML='<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-10by6mr"><path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill svelte-10by6mr"></path></svg>',m(e,"class","custom-shape-divider-bottom-1707333696 svelte-10by6mr")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class Fe extends ${constructor(e){super(),B(this,e,null,Xe,x,{})}}function Ke(t){let e,n,s,r,i,u,p,a,l,d,c,k,o,b,_;return{c(){e=h("div"),n=h("a"),s=h("img"),i=j(),u=h("h3"),p=O(t[0]),a=j(),l=h("p"),d=O("Date: "),c=O(t[1]),k=j(),o=h("p"),b=O("Skills Used: "),_=O(t[2]),ne(s.src,r=t[3])||m(s,"src",r),m(s,"alt",t[0]),m(s,"class","svelte-1tpzx8j"),m(n,"href",t[4]),m(e,"class","project svelte-1tpzx8j")},m(L,y){C(L,e,y),f(e,n),f(n,s),f(n,i),f(n,u),f(u,p),f(n,a),f(n,l),f(l,d),f(l,c),f(n,k),f(n,o),f(o,b),f(o,_)},p(L,[y]){y&8&&!ne(s.src,r=L[3])&&m(s,"src",r),y&1&&m(s,"alt",L[0]),y&1&&D(p,L[0]),y&2&&D(c,L[1]),y&4&&D(_,L[2]),y&16&&m(n,"href",L[4])},i:g,o:g,d(L){L&&w(e)}}}function Je(t,e,n){let{projectName:s}=e,{date:r}=e,{skillsUsed:i}=e,{previewImage:u}=e,{projectLink:p}=e,{type:a}=e;return t.$$set=l=>{"projectName"in l&&n(0,s=l.projectName),"date"in l&&n(1,r=l.date),"skillsUsed"in l&&n(2,i=l.skillsUsed),"previewImage"in l&&n(3,u=l.previewImage),"projectLink"in l&&n(4,p=l.projectLink),"type"in l&&n(5,a=l.type)},[s,r,i,u,p,a]}class We extends ${constructor(e){super(),B(this,e,Je,Ke,x,{projectName:0,date:1,skillsUsed:2,previewImage:3,projectLink:4,type:5})}}function de(t,e,n){const s=t.slice();return s[8]=e[n],s}function me(t){let e,n;return e=new We({props:{projectName:t[8].projectName,date:t[8].date,skillsUsed:t[8].skillsUsed,previewImage:t[8].previewImage,projectLink:t[8].projectLink}}),{c(){E(e.$$.fragment)},m(s,r){V(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.projectName=s[8].projectName),r&1&&(i.date=s[8].date),r&1&&(i.skillsUsed=s[8].skillsUsed),r&1&&(i.previewImage=s[8].previewImage),r&1&&(i.projectLink=s[8].projectLink),e.$set(i)},i(s){n||(q(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){z(e,s)}}}function De(t){let e,n,s,r,i,u,p,a,l,d,c,k,o,b,_,L,y,ie,X,N,Z,le,M=ue(t[0]),A=[];for(let v=0;v<M.length;v+=1)A[v]=me(de(t,M,v));const ve=v=>S(A[v],1,1,()=>{A[v]=null});return{c(){e=h("section"),n=h("h2"),n.textContent="Portfolio",s=j(),r=h("div"),i=h("button"),i.textContent="All",u=j(),p=h("span"),p.textContent="/",a=j(),l=h("button"),l.textContent="Web",d=j(),c=h("span"),c.textContent="/",k=j(),o=h("button"),o.textContent="Apps",b=j(),_=h("span"),_.textContent="/",L=j(),y=h("button"),y.textContent="Art",ie=j(),X=h("div");for(let v=0;v<A.length;v+=1)A[v].c();m(n,"class","svelte-3fejcz"),m(i,"class","svelte-3fejcz"),P(i,"selected",t[1]===null),m(p,"class","separator svelte-3fejcz"),m(l,"class","svelte-3fejcz"),P(l,"selected",t[1]==="web"),m(c,"class","separator svelte-3fejcz"),m(o,"class","svelte-3fejcz"),P(o,"selected",t[1]==="apps"),m(_,"class","separator svelte-3fejcz"),m(y,"class","svelte-3fejcz"),P(y,"selected",t[1]==="art"),m(r,"class","filter-links svelte-3fejcz"),m(X,"class","projects svelte-3fejcz"),m(e,"class","container svelte-3fejcz")},m(v,I){C(v,e,I),f(e,n),f(e,s),f(e,r),f(r,i),f(r,u),f(r,p),f(r,a),f(r,l),f(r,d),f(r,c),f(r,k),f(r,o),f(r,b),f(r,_),f(r,L),f(r,y),f(e,ie),f(e,X);for(let U=0;U<A.length;U+=1)A[U]&&A[U].m(X,null);N=!0,Z||(le=[W(i,"click",t[4]),W(l,"click",t[5]),W(o,"click",t[6]),W(y,"click",t[7])],Z=!0)},p(v,[I]){if((!N||I&2)&&P(i,"selected",v[1]===null),(!N||I&2)&&P(l,"selected",v[1]==="web"),(!N||I&2)&&P(o,"selected",v[1]==="apps"),(!N||I&2)&&P(y,"selected",v[1]==="art"),I&1){M=ue(v[0]);let U;for(U=0;U<M.length;U+=1){const oe=de(v,M,U);A[U]?(A[U].p(oe,I),q(A[U],1)):(A[U]=me(oe),A[U].c(),q(A[U],1),A[U].m(X,null))}for(Se(),U=M.length;U<A.length;U+=1)ve(U);Ve()}},i(v){if(!N){for(let I=0;I<M.length;I+=1)q(A[I]);N=!0}},o(v){A=A.filter(Boolean);for(let I=0;I<A.length;I+=1)S(A[I]);N=!1},d(v){v&&w(e),Ce(A,v),Z=!1,T(le)}}}function Ye(t,e,n){let{projects:s=[]}=e,r=s,i=null;function u(c){n(1,i=c),n(0,r=c?s.filter(k=>k.type===c):s)}const p=()=>u(null),a=()=>u("web"),l=()=>u("apps"),d=()=>u("art");return t.$$set=c=>{"projects"in c&&n(3,s=c.projects)},[r,i,u,s,p,a,l,d]}class Ze extends ${constructor(e){super(),B(this,e,Ye,De,x,{projects:3})}}function et(t){let e;return{c(){e=h("section"),e.innerHTML="<h2>Skills</h2> <h3>Frontend</h3> <p>HTML, CSS (Bootstrap), JavaScript (Svelte)</p> <h3>Backend</h3> <p>Node.js, Express.js, SQLite, PostgreSQL</p> <h3>Apps</h3> <p>Java</p> <h3>Tools</h3> <p>Git, Figma, Postman</p> <h3>Generative Art</h3> <p>Processing</p>",m(e,"class","container svelte-gaimxd")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class tt extends ${constructor(e){super(),B(this,e,null,et,x,{})}}const nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJESURBVFiFxdfNi01hHAfwzxymMe54i4Tc0rikaCxEakJRaMZGWcqCf0JKEaWmLJCN1OwsZolRLLwspjFsEAs7GS9J8jIz7jSlsTjn1ul075nn3CvzrV/nOec8v+/39/ye9zbhKOEIerEba7ESC/ED7/ACDzGMiQLcuejGDfzCbKBN4SY2tSK8CJcwXUA4azMYSLgKoYyxFoSzNirusiBsxdcA0t84iVOoBtQfR89c4hV8CmzV7ZTfnUCfcaxJC0apcjtuCU/VdKpcDfRZj7vorBfABewMJGoFO3A6+7Gs+GgfSvkPFfSdlGS6loEz6PhXTQxACWdrAXTi+H8Ur+EElkQ4jK55CKCEvggH50G8hv0Rts1jAD0RNgdUfIzl4t1wKqfeJPqxCiMBvN0RFgdUHMbP5NnfIIhJ9OEeviXPubCMsPn/Ubwt17APg6n3QexJvVfwOYB3SkIesni8zwSxokG5Il7zQzmNBFauF0QWRcRnMRrhVQ5hFmXxgKwXRAWPxBtOKMbgaIGIG2Vio2Itr9kxWCo+QDYTRK948DUj/l1qBl5rgqBVuw5tqRS+0XhH/IP78hehNEo4hAUN/lexRTILajifE+1AoHAal3P4LtZz6MDLBg5XmgigUbc+k8p0W8apjKdYl/k+iyfi03IIVmNvHf4v2CWT+ix6hK+OReyDuN+DUBbf8/6V+HP5K2hddOCc1q5mVfGAay8qnkY3rip2OZ0Qz/M5l+XsIMlDFw6Ij3DbsUF8SJlJ7C1e40FiQZeVv9B8oAsh+Fn5AAAAAElFTkSuQmCC",st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAACxCAYAAABUZybaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAgeSURBVHgB7d176F91Hcfxl3l3OppzM7Ryhetm2tQ2zaCbFgWCJEWEFQXRH/XH6ApdIEOCJCioP4IMja5QUqaVhV0WtkpFTSMvmUxLnc7bdPO26ebnxfHL+Zzz/c0p237f9+fN8wFv+Bz97q+99jnnfM7nvI8EAAAAAAAAAAAAzIe9hQxWlDq31CtLXVtqq4Bg9il1S6ntz9RnlNALhGzOVBfeVAhq+54sdWV17MuA45QM16g5bC51Vqm9Su1balOpywQEs1+pG9Rfp16hZDj157Cl1CXV8fJSRwsIaFWpbepn1dUCAjq41F3qg3qpgKAuVh9UXw7sryS4Rs3lwmrsu//jlQRBzeXyUo9Xx6cLCMin+qvVn/7/piSYUXN5QsOnVCeWWqwECGo+f6/GfhDwBiVAUPNxUOttfiuVAEHNZ32pm6rjFHf+BDUfb1BZWx2fpASbjwhqTldV46VK8NyfoOZ04+j4jWocQc3ptlKPVMer1DiCmtPGUjdXxyvUOIKa02OlrquOX67GEdS8rqnGS0otUsMIal7/Hh0fq4YR1Lz+NTp+jRpGUPO6r9RD1TEzKsK6oxq73c9eahRBzW1dNT5S3XtVTSKoudVrqUeIoCKo/1bjhaUOUaMIam7/Hx0vVaMIam7rRscEFSGNZ9TD1CiCmpu7+tVrqc3uSyWo+d1djY9Qowhqfuur8QvVKIKa34ZqfKgafX+KoOb3cDVeoO5d/+YQ1Pw2V+MD1eiHKAhqfvW7UweJGRVBPVGNHVRmVIRUB/UAEVQEdX819h1/k3tSCWp+G6vx3mJ5CkFtqcbMqGjGvmoQQc1v2+iYGRUhja9Jt6lBBDW/8al+qxpEUPOrn0Q5pMyoCOnAauwVgKfUIIKaX/3mqZ9SEVSEtLAaux0l16gIqW464Z1UBBUhHV6NvTd1ixpEUPNbUo0JKsKqm0749entahBBza9+RfoBNYqg5uanUi+qjgkqQnJP1PrveIMaRVBzWzY6XqdGEdTcxt+XIqgI6cXV2Iv9/1OjCGpudVD94YlNahRBzW15Nb5Lw64pTSGoefmVk/rbUjeo0cV+I6h5+UZqcXV8rRpGUPM6YXR8qxpGUPM6uRp7H+rtahhBzev11djLUveoYQQ1r2Oq8fWlHlXDCGpOL9PwRmqtGkdQczp1dPxnAQFdpG7N1OWtfc1+/nyCGTWfRaVWVMf/VMML/RMENR8v9L+0Or5cCRDUfFZqeKq/REAwnnguVX99uk5MRgjIp/wH1Qf1fCXBv7Zc3qnh907XCAjG16UXqp9N3RDtEAHB+LVob46eBPXnAgL6mPqQus4QENCV6kPq/lKc9hGOF/kfVx/UHwsI6IvqQ+qO0m8SEIy38/k1k0lQr9Owb38KrKO27zQNO6J459RjAgJxt76L1c+mD5U6WkAwp5R6Un1QvysgoB9q+CTqNAHBvFbdtegkqGs0/d1TYObO03BJ6lQBwfgu3+GcBNWvm+wnIJjvqA+pP8J7loBgjtPwcemaUvsLCOZX6kPqpakPCAjGO/jra9PfldpHQCC+WZo043V5aeotAoL5hIYbo3+mBB1QkIs/bHafhs/0lwgIxBtP6pf2XOcICObDGm48uUpdeIEwfHq/RcPF/TcLCOb3Gp7yvyIgmI+qm0HrPlKLBQSyqtS96kPq/vunCAjkUHWtzOtT/jfEmikC8d38BRqG9LJSCwUE8hENQ+peUicKCMRNI9yKZxLSraXOFBDIMg0b8Lq+KiAQX3+6u0kdUvfdP0hAEN669wcNQ+r3n9hwgjD8arOb7dYhvbPUSwQE8j11N0z11r2TBATyTQ3v8P2y3nsEBOG3Rc/W8HTvWfVDAoI4oNS5GobUs+pq8XgUQSwo9XVNz6RfECFFEG6W7E0l45B+WjRSRhC+Jh1vMvFrJZzuEYY/9fhbDUPqfaWfFCFFEP6K3vixqJegPi4gCPcp9ROmOqQbS71VQBCf1bBRxGRP6UoBAfi7Tu5Z+oiGIb261LECAjhK0zugXL8udZiAGXO7xw9q+nrUXyfx4n66r+ehPV56+raGvUpdt5d6v1h+wow5gCeX+oemT/X+b7yIh5nzqfzzGn7bafLpnB+JPvoI4AR1r4iMZ9E7Sr1XwIz5dZEvq9t9Pw7pL8VrI5gxX4u+vdTNmg6on9d/SsCMeV3Us6UDOdfa6KsF7CJvUH6dut30z9fB6m6W/MhzHFAvO61+5jfALnEXvCvUPcb0jPhc1zK9cH96qZs0HVD3J/2JulkW2GVu5HC++oBtLrV8J3/GQfaOJvfEHy/cO6DXl3qHgN3IS0R1d2YvJS3YwW8dUDck86ca62+KTmq9ul1QtHrEbuUlohs1vCt/9xy/84K8t9t9X8OvjNR7Rj0rLxWwB5ynnXdnXlHqB5o7oC7Prq8QsIe4u0h9yr+t1OHV//da6G9Gv6mvQ9eo65cP7DGLNL2b3teebtfoziN/1NyzpwP6p1LvErucMA98Kq8D6I/Yfq7UrdpxQNeWepsIKOaJT/l1JzzXuGNz3ezhInVb8Ago5o0X9nc0a9bltVTfxftygG+HYt79VM8eUL8a8i11ffGZQTETZ2j6lF+XOzgfr+6xKBJpacZZVuqvpY7cye+8d/Q/6h4CXFPqL+ouFTYJmAdHqdsH+gt1QfQ16PbnUH6O70+JX6CdhxzYrXxz9KpS71P3ZMoz5lyL+uM6W8CM+YmU10i/pG5B3+/Xj4N6jtCkzHfF3jztT4d7/fSYUhtKfa3UAwIAAAAAAAAAAAAAAMAe9TTavj7trePf+wAAAABJRU5ErkJggg==";function rt(t){let e;return{c(){e=h("section"),e.innerHTML=`<h2>CV</h2> <img class="arrow svelte-vsq4qj" src="${st}" alt="arrow"/> <div class="centered svelte-vsq4qj"><a href="/assets/SandraKrevovaCV.pdf" download="" class="svelte-vsq4qj"><img src="${nt}" alt="download-icon" class="svelte-vsq4qj"/> <span>Download my CV</span></a></div>`,m(e,"class","cv svelte-vsq4qj")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class it extends ${constructor(e){super(),B(this,e,null,rt,x,{})}}function lt(t){let e;return{c(){e=h("section"),e.innerHTML='<h2>About me</h2> <div class="description svelte-11k6hib"><p class="svelte-11k6hib">Hello! ✨</p> <p class="svelte-11k6hib">I&#39;m a second-year ICT student at Saxion, deeply engaged in the world of web development. My passion for IT took root in Slovakia during my early years, where it blossomed into an academic journey now unfolding in the Netherlands.</p> <p class="svelte-11k6hib">Alongside my studies, I am fascinated by the power of AI, dedicating my spare time to understanding its impact on our everyday lives and future possibilities. I also have a keen interest in generative art, where technology meets creativity.</p> <p class="svelte-11k6hib">Beyond the digital realm, I find joy in the calming beauty of nature.</p></div>',m(e,"class","about-me svelte-11k6hib")},m(n,s){C(n,e,s)},p:g,i:g,o:g,d(n){n&&w(e)}}}class ot extends ${constructor(e){super(),B(this,e,null,lt,x,{})}}const ct="/assets/preview-image1-AwwxLEia.png",at="/assets/preview-image2-4Akj3LJ9.png",ft="/assets/preview-image3-9N6FtEUM.png",ut="/assets/preview-image4-Z7658nBz.png";function dt(t){let e,n,s,r,i,u,p,a,l,d,c,k;return e=new Te({}),s=new Fe({}),i=new ot({}),p=new Ze({props:{projects:t[0]}}),l=new tt({}),c=new it({}),{c(){E(e.$$.fragment),n=j(),E(s.$$.fragment),r=j(),E(i.$$.fragment),u=j(),E(p.$$.fragment),a=j(),E(l.$$.fragment),d=j(),E(c.$$.fragment)},m(o,b){V(e,o,b),C(o,n,b),V(s,o,b),C(o,r,b),V(i,o,b),C(o,u,b),V(p,o,b),C(o,a,b),V(l,o,b),C(o,d,b),V(c,o,b),k=!0},p:g,i(o){k||(q(e.$$.fragment,o),q(s.$$.fragment,o),q(i.$$.fragment,o),q(p.$$.fragment,o),q(l.$$.fragment,o),q(c.$$.fragment,o),k=!0)},o(o){S(e.$$.fragment,o),S(s.$$.fragment,o),S(i.$$.fragment,o),S(p.$$.fragment,o),S(l.$$.fragment,o),S(c.$$.fragment,o),k=!1},d(o){o&&(w(n),w(r),w(u),w(a),w(d)),z(e,o),z(s,o),z(i,o),z(p,o),z(l,o),z(c,o)}}}function mt(t){return[[{projectName:"NEWGROUNDAI",date:2023,skillsUsed:"HTML, CSS, JavaScript, Three.js",previewImage:ct,projectLink:"https://newgroundai.com/",type:"web"},{projectName:"RareReads",date:2023,skillsUsed:"HTML, CSS, JavaScript, Three.js",previewImage:at,projectLink:"https://newgroundai.com/",type:"web"},{projectName:"SoundSculptor",date:2023,skillsUsed:"HTML, CSS, JavaScript, SQLite",previewImage:ft,projectLink:"https://newgroundai.com/",type:"web"},{projectName:"TrackManager",date:2023,skillsUsed:"Java",previewImage:ut,projectLink:"https://github.com/sandrikk/TrackManagerApp",type:"apps"}]]}class pt extends ${constructor(e){super(),B(this,e,mt,dt,x,{})}}function ht(t){let e,n,s,r,i,u,p,a,l;return n=new _e({}),i=new pt({}),a=new Re({}),{c(){e=h("header"),E(n.$$.fragment),s=j(),r=h("main"),E(i.$$.fragment),u=j(),p=h("footer"),E(a.$$.fragment),m(e,"class","container svelte-1ata1oa"),m(p,"class","container svelte-1ata1oa")},m(d,c){C(d,e,c),V(n,e,null),C(d,s,c),C(d,r,c),V(i,r,null),C(d,u,c),C(d,p,c),V(a,p,null),l=!0},p:g,i(d){l||(q(n.$$.fragment,d),q(i.$$.fragment,d),q(a.$$.fragment,d),l=!0)},o(d){S(n.$$.fragment,d),S(i.$$.fragment,d),S(a.$$.fragment,d),l=!1},d(d){d&&(w(e),w(s),w(r),w(u),w(p)),z(n),z(i),z(a)}}}class gt extends ${constructor(e){super(),B(this,e,null,ht,x,{})}}new gt({target:document.getElementById("app")});
