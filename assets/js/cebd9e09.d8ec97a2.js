"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[5857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Dashboard",sidebar_position:2},i=void 0,c={unversionedId:"dashboard",id:"dashboard",title:"Dashboard",description:"Dashboard",source:"@site/portal_callcenter_guide/dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/portal_callcenter_guide/dashboard",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dashboard",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Login",permalink:"/portal_callcenter_guide/"},next:{title:"Gi\xe1m S\xe1t Nh\xe2n Vi\xean",permalink:"/portal_callcenter_guide/monitor_user"}},l={},s=[{value:"Dashboard",id:"dashboard",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,"Giao di\u1ec7n dashboard s\u1ebd \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb ngay sau khi log in account. \u1ede \u0111\xe2y dashboard s\u1ebd m\xf4 t\u1ea3 t\u1ed5ng quan web qu\u1ea3n tr\u1ecb k\xe8m c\xe1c th\xf4ng tin li\xean quan \u0111\u1ebfn cu\u1ed9c g\u1ecdi, \u2026"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PITEL",src:n(8408).Z,width:"458",height:"225"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Gi\u1ea3i th\xedch th\xf4ng s\u1ed1"',title:'"Gi\u1ea3i',"th\xedch":!0,"th\xf4ng":!0,'s\u1ed1"':!0},"- \u0110ang di\u1ec5n ra: T\u1ed5ng s\u1ed1 cu\u1ed9c g\u1ecdi \u0111ang di\u1ec5n ra.\n- Tr\u1ef1c tuy\u1ebfn: T\u1ed5ng s\u1ed1 Nh\xe2n Vi\xean \u0111ang tr\u1ef1c tuy\u1ebfn\n- H\xe0ng ch\u1edd cu\u1ed9c g\u1ecdi: S\u1ed1 cu\u1ed9c g\u1ecdi trong h\xe0ng ch\u1edd bao g\u1ed3m c\u1ea3 outbound trong chi\u1ebfn d\u1ecbch Autodialer v\xe0 inbound.\n- Tr\u1ea1ng th\xe1i cu\u1ed9c g\u1ecdi: \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb d\u01b0\u1edbi d\u1ea1ng b\u1ea3ng k\xe8m s\u1ed1 li\u1ec7u (Table) v\xe0 bi\u1ec3u \u0111\u1ed3 h\xecnh tr\xf2n (Chart).\n- Th\u1ed1ng k\xea: M\u1ee5c n\xe0y th\u1ed1ng k\xea t\u1ed5ng s\u1ed1 cu\u1ed9c g\u1ecdi (Call total), s\u1ed1 cu\u1ed9c g\u1ecdi \u0111\xe3 k\u1ebft n\u1ed1i (Answered), ch\u01b0a k\u1ebft n\u1ed1i (Not connected), th\u1eddi l\u01b0\u1ee3ng (Duration), th\u1eddi l\u01b0\u1ee3ng trung b\xecnh (Average duration), th\u1eddi l\u01b0\u1ee3ng \u0111\xe0m tho\u1ea1i (Billsec) c\u1ee7a c\xe1c cu\u1ed9c g\u1ecdi trong ng\xe0y.\n")))}p.isMDXComponent=!0},8408:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dashboard-5dffe10f08483e27bc0bf0f68fe99b03.png"}}]);