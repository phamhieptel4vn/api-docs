"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[4601],{3905:(n,h,t)=>{t.d(h,{Zo:()=>l,kt:()=>p});var c=t(67294);function i(n,h,t){return h in n?Object.defineProperty(n,h,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[h]=t,n}function a(n,h){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);h&&(c=c.filter((function(h){return Object.getOwnPropertyDescriptor(n,h).enumerable}))),t.push.apply(t,c)}return t}function e(n){for(var h=1;h<arguments.length;h++){var t=null!=arguments[h]?arguments[h]:{};h%2?a(Object(t),!0).forEach((function(h){i(n,h,t[h])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(h){Object.defineProperty(n,h,Object.getOwnPropertyDescriptor(t,h))}))}return n}function g(n,h){if(null==n)return{};var t,c,i=function(n,h){if(null==n)return{};var t,c,i={},a=Object.keys(n);for(c=0;c<a.length;c++)t=a[c],h.indexOf(t)>=0||(i[t]=n[t]);return i}(n,h);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(c=0;c<a.length;c++)t=a[c],h.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=c.createContext({}),o=function(n){var h=c.useContext(u),t=h;return n&&(t="function"==typeof n?n(h):e(e({},h),n)),t},l=function(n){var h=o(n.components);return c.createElement(u.Provider,{value:h},n.children)},s="mdxType",r={inlineCode:"code",wrapper:function(n){var h=n.children;return c.createElement(c.Fragment,{},h)}},d=c.forwardRef((function(n,h){var t=n.components,i=n.mdxType,a=n.originalType,u=n.parentName,l=g(n,["components","mdxType","originalType","parentName"]),s=o(t),d=i,p=s["".concat(u,".").concat(d)]||s[d]||r[d]||a;return t?c.createElement(p,e(e({ref:h},l),{},{components:t})):c.createElement(p,e({ref:h},l))}));function p(n,h){var t=arguments,i=h&&h.mdxType;if("string"==typeof n||i){var a=t.length,e=new Array(a);e[0]=d;var g={};for(var u in h)hasOwnProperty.call(h,u)&&(g[u]=h[u]);g.originalType=n,g[s]="string"==typeof n?n:i,e[1]=g;for(var o=2;o<a;o++)e[o]=t[o];return c.createElement.apply(null,e)}return c.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50502:(n,h,t)=>{t.r(h),t.d(h,{assets:()=>u,contentTitle:()=>e,default:()=>r,frontMatter:()=>a,metadata:()=>g,toc:()=>o});var c=t(87462),i=(t(67294),t(3905));const a={title:"Advanced Setup",sidebar_position:4},e=void 0,g={unversionedId:"advanced_setup",id:"advanced_setup",title:"Advanced Setup",description:"Advanced Setup - Thi\u1ebft l\u1eadp n\xe2ng cao",source:"@site/portal_autocall_guide/advanced_setup.md",sourceDirName:".",slug:"/advanced_setup",permalink:"/portal_autocall_guide/advanced_setup",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Advanced Setup",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick Setup",permalink:"/portal_autocall_guide/quicksetup"},next:{title:"Import - List",permalink:"/portal_autocall_guide/import_list"}},u={},o=[{value:"Advanced Setup - Thi\u1ebft l\u1eadp n\xe2ng cao",id:"advanced-setup---thi\u1ebft-l\u1eadp-n\xe2ng-cao",level:2},{value:"B\u01b0\u1edbc 1: Truy c\u1eadp v\xe0o thanh menu g\xf3c ph\u1ea3i m\xe0n h\xecnh v\xe0 nh\u1ea5p ch\u1ecdn menu Campaign.",id:"b\u01b0\u1edbc-1-truy-c\u1eadp-v\xe0o-thanh-menu-g\xf3c-ph\u1ea3i-m\xe0n-h\xecnh-v\xe0-nh\u1ea5p-ch\u1ecdn-menu-campaign",level:3},{value:"B\u01b0\u1edbc 2:  Ch\u1ecdn v\xe0o Thi\u1ebft L\u1eadp N\xe2ng Cao.",id:"b\u01b0\u1edbc-2--ch\u1ecdn-v\xe0o-thi\u1ebft-l\u1eadp-n\xe2ng-cao",level:3},{value:"B\u01b0\u1edbc 3: Sau khi \u1ea5n ch\u1ecdn Thi\u1ebft L\u1eadp N\xe2ng Cao, h\u1ec7 th\u1ed1ng s\u1ebd chuy\u1ec3n t\u1edbi m\xe0n h\xecnh Qu\u1ea3n L\xfd Chi\u1ebfn D\u1ecbch. Menu n\xe0y \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 ti\u1ebfn h\xe0nh t\u1ea1o m\u1edbi chi\u1ebfn d\u1ecbch, \u0111i\u1ec1u ch\u1ec9nh v\xe0 thay \u0111\u1ed5i c\u1ea5u h\xecnh chi\u1ebfn d\u1ecbch \u0111\xe3 t\u1ea1o r\u1ed3i.",id:"b\u01b0\u1edbc-3-sau-khi-\u1ea5n-ch\u1ecdn-thi\u1ebft-l\u1eadp-n\xe2ng-cao-h\u1ec7-th\u1ed1ng-s\u1ebd-chuy\u1ec3n-t\u1edbi-m\xe0n-h\xecnh-qu\u1ea3n-l\xfd-chi\u1ebfn-d\u1ecbch-menu-n\xe0y-\u0111\u01b0\u1ee3c-d\xf9ng-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-t\u1ea1o-m\u1edbi-chi\u1ebfn-d\u1ecbch-\u0111i\u1ec1u-ch\u1ec9nh-v\xe0-thay-\u0111\u1ed5i-c\u1ea5u-h\xecnh-chi\u1ebfn-d\u1ecbch-\u0111\xe3-t\u1ea1o-r\u1ed3i",level:3},{value:"B\u01b0\u1edbc 4: \u0110\u1ec3 t\u1ea1o m\u1edbi m\u1ed9t chi\u1ebfn d\u1ecbch \u1ea5n v\xe0o Th\xeam M\u1edbi sau \u0111\xf3 ti\u1ebfn h\xe0nh \u0111i\u1ec1n t\xean chi\u1ebfn d\u1ecbch mong mu\u1ed1n v\xe0 ch\u1ecdn lo\u1ea1i Autocall",id:"b\u01b0\u1edbc-4-\u0111\u1ec3-t\u1ea1o-m\u1edbi-m\u1ed9t-chi\u1ebfn-d\u1ecbch-\u1ea5n-v\xe0o-th\xeam-m\u1edbi-sau-\u0111\xf3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1n-t\xean-chi\u1ebfn-d\u1ecbch-mong-mu\u1ed1n-v\xe0-ch\u1ecdn-lo\u1ea1i-autocall",level:3},{value:"B\u01b0\u1edbc 5: \u0110\u1ec3 ti\u1ebfn h\xe0nh \u0111i\u1ec1u ch\u1ec9nh chi\u1ebfn d\u1ecbch v\u1eeba t\u1ea1o m\u1edbi ho\u1eb7c nh\u1eefng chi\u1ebfn d\u1ecbch \u0111\xe3 t\u1ea1o \u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng b\xfat ch\xec ngay c\u1ed9t Thao T\xe1c",id:"b\u01b0\u1edbc-5-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1u-ch\u1ec9nh-chi\u1ebfn-d\u1ecbch-v\u1eeba-t\u1ea1o-m\u1edbi-ho\u1eb7c-nh\u1eefng-chi\u1ebfn-d\u1ecbch-\u0111\xe3-t\u1ea1o-\u1ea5n-v\xe0o-bi\u1ec3u-t\u01b0\u1ee3ng-b\xfat-ch\xec-ngay-c\u1ed9t-thao-t\xe1c",level:3},{value:"B\u01b0\u1edbc 6: Th\u1ef1c hi\u1ec7n ch\u1ec9nh s\u1eeda sau khi \u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng c\xe2y b\xfat \u1edf c\u1ed9t Thao T\xe1c. \u1ede Menu C\u1ea5u H\xecnh s\u1ebd bao g\u1ed3m c\xe1c th\xf4ng tin nh\u01b0 t\xean Chi\u1ebfn D\u1ecbch, Tr\u1ea1ng Th\xe1i Ho\u1ea1t \u0110\u1ed9ng, M\xf4 T\u1ea3 v\xe0 L\u1eadp L\u1ecbch",id:"b\u01b0\u1edbc-6-th\u1ef1c-hi\u1ec7n-ch\u1ec9nh-s\u1eeda-sau-khi-\u1ea5n-v\xe0o-bi\u1ec3u-t\u01b0\u1ee3ng-c\xe2y-b\xfat-\u1edf-c\u1ed9t-thao-t\xe1c-\u1edf-menu-c\u1ea5u-h\xecnh-s\u1ebd-bao-g\u1ed3m-c\xe1c-th\xf4ng-tin-nh\u01b0-t\xean-chi\u1ebfn-d\u1ecbch-tr\u1ea1ng-th\xe1i-ho\u1ea1t-\u0111\u1ed9ng-m\xf4-t\u1ea3-v\xe0-l\u1eadp-l\u1ecbch",level:3},{value:"B\u01b0\u1edbc 7: Di chuy\u1ec3n qua Menu N\xe2ng Cao \u0111\u1ec3 ti\u1ebfn h\xe0nh \u0111i\u1ec1u ch\u1ec9nh c\xe1c c\u1ea5u h\xecnh li\xean quan \u0111\u1ebfn ph\u01b0\u01a1ng th\u1ee9c \u0111\u1ed5 cu\u1ed9c g\u1ecdi c\u1ee7a chi\u1ebfn d\u1ecbch. Sau khi \u0111i\u1ec1u ch\u1ec9nh ho\xe0n t\u1ea5t \u1ea5n C\u1eadp Nh\u1eadt \u0111\u1ec3 \xe1p d\u1ee5ng c\xe1c c\u1ea5u h\xecnh m\u1edbi",id:"b\u01b0\u1edbc-7-di-chuy\u1ec3n-qua-menu-n\xe2ng-cao-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1u-ch\u1ec9nh-c\xe1c-c\u1ea5u-h\xecnh-li\xean-quan-\u0111\u1ebfn-ph\u01b0\u01a1ng-th\u1ee9c-\u0111\u1ed5-cu\u1ed9c-g\u1ecdi-c\u1ee7a-chi\u1ebfn-d\u1ecbch-sau-khi-\u0111i\u1ec1u-ch\u1ec9nh-ho\xe0n-t\u1ea5t-\u1ea5n-c\u1eadp-nh\u1eadt-\u0111\u1ec3-\xe1p-d\u1ee5ng-c\xe1c-c\u1ea5u-h\xecnh-m\u1edbi",level:3},{value:"B\u01b0\u1edbc 8: Sau khi C\u1eadp Nh\u1eadt ho\xe0n t\u1ea5t \u1ea5n thao t\xe1c chuy\u1ec3n tr\u1ea1ng th\xe1i chi\u1ebfn d\u1ecbch sang Start \u0111\u1ec3 \u0111\u1ed5 cu\u1ed9c g\u1ecdi ra.",id:"b\u01b0\u1edbc-8-sau-khi-c\u1eadp-nh\u1eadt-ho\xe0n-t\u1ea5t-\u1ea5n-thao-t\xe1c-chuy\u1ec3n-tr\u1ea1ng-th\xe1i-chi\u1ebfn-d\u1ecbch-sang-start-\u0111\u1ec3-\u0111\u1ed5-cu\u1ed9c-g\u1ecdi-ra",level:3}],l={toc:o},s="wrapper";function r(n){let{components:h,...a}=n;return(0,i.kt)(s,(0,c.Z)({},l,a,{components:h,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"advanced-setup---thi\u1ebft-l\u1eadp-n\xe2ng-cao"},"Advanced Setup - Thi\u1ebft l\u1eadp n\xe2ng cao"),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-1-truy-c\u1eadp-v\xe0o-thanh-menu-g\xf3c-ph\u1ea3i-m\xe0n-h\xecnh-v\xe0-nh\u1ea5p-ch\u1ecdn-menu-campaign"},"B\u01b0\u1edbc 1: Truy c\u1eadp v\xe0o thanh menu g\xf3c ph\u1ea3i m\xe0n h\xecnh v\xe0 nh\u1ea5p ch\u1ecdn menu Campaign."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(34795).Z,width:"279",height:"415"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-2--ch\u1ecdn-v\xe0o-thi\u1ebft-l\u1eadp-n\xe2ng-cao"},"B\u01b0\u1edbc 2:  Ch\u1ecdn v\xe0o Thi\u1ebft L\u1eadp N\xe2ng Cao."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(43546).Z,width:"310",height:"393"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-3-sau-khi-\u1ea5n-ch\u1ecdn-thi\u1ebft-l\u1eadp-n\xe2ng-cao-h\u1ec7-th\u1ed1ng-s\u1ebd-chuy\u1ec3n-t\u1edbi-m\xe0n-h\xecnh-qu\u1ea3n-l\xfd-chi\u1ebfn-d\u1ecbch-menu-n\xe0y-\u0111\u01b0\u1ee3c-d\xf9ng-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-t\u1ea1o-m\u1edbi-chi\u1ebfn-d\u1ecbch-\u0111i\u1ec1u-ch\u1ec9nh-v\xe0-thay-\u0111\u1ed5i-c\u1ea5u-h\xecnh-chi\u1ebfn-d\u1ecbch-\u0111\xe3-t\u1ea1o-r\u1ed3i"},"B\u01b0\u1edbc 3: Sau khi \u1ea5n ch\u1ecdn Thi\u1ebft L\u1eadp N\xe2ng Cao, h\u1ec7 th\u1ed1ng s\u1ebd chuy\u1ec3n t\u1edbi m\xe0n h\xecnh Qu\u1ea3n L\xfd Chi\u1ebfn D\u1ecbch. Menu n\xe0y \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 ti\u1ebfn h\xe0nh t\u1ea1o m\u1edbi chi\u1ebfn d\u1ecbch, \u0111i\u1ec1u ch\u1ec9nh v\xe0 thay \u0111\u1ed5i c\u1ea5u h\xecnh chi\u1ebfn d\u1ecbch \u0111\xe3 t\u1ea1o r\u1ed3i."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(21183).Z,width:"610",height:"267"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-4-\u0111\u1ec3-t\u1ea1o-m\u1edbi-m\u1ed9t-chi\u1ebfn-d\u1ecbch-\u1ea5n-v\xe0o-th\xeam-m\u1edbi-sau-\u0111\xf3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1n-t\xean-chi\u1ebfn-d\u1ecbch-mong-mu\u1ed1n-v\xe0-ch\u1ecdn-lo\u1ea1i-autocall"},"B\u01b0\u1edbc 4: \u0110\u1ec3 t\u1ea1o m\u1edbi m\u1ed9t chi\u1ebfn d\u1ecbch \u1ea5n v\xe0o Th\xeam M\u1edbi sau \u0111\xf3 ti\u1ebfn h\xe0nh \u0111i\u1ec1n t\xean chi\u1ebfn d\u1ecbch mong mu\u1ed1n v\xe0 ch\u1ecdn lo\u1ea1i Autocall"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(7851).Z,width:"507",height:"433"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-5-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1u-ch\u1ec9nh-chi\u1ebfn-d\u1ecbch-v\u1eeba-t\u1ea1o-m\u1edbi-ho\u1eb7c-nh\u1eefng-chi\u1ebfn-d\u1ecbch-\u0111\xe3-t\u1ea1o-\u1ea5n-v\xe0o-bi\u1ec3u-t\u01b0\u1ee3ng-b\xfat-ch\xec-ngay-c\u1ed9t-thao-t\xe1c"},"B\u01b0\u1edbc 5: \u0110\u1ec3 ti\u1ebfn h\xe0nh \u0111i\u1ec1u ch\u1ec9nh chi\u1ebfn d\u1ecbch v\u1eeba t\u1ea1o m\u1edbi ho\u1eb7c nh\u1eefng chi\u1ebfn d\u1ecbch \u0111\xe3 t\u1ea1o \u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng b\xfat ch\xec ngay c\u1ed9t Thao T\xe1c"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(49148).Z,width:"610",height:"81"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Gi\u1ea3i th\xedch th\xf4ng s\u1ed1"',title:'"Gi\u1ea3i',"th\xedch":!0,"th\xf4ng":!0,'s\u1ed1"':!0},"- T\xean chi\u1ebfn d\u1ecbch: hi\u1ec3n th\u1ecb t\xean chi\u1ebfn d\u1ecbch \u0111\xe3 \u0111\u1eb7t.\n- Ph\u01b0\u01a1ng th\u1ee9c g\u1ecdi: Autocall\n- N\xe2ng cao: hi\u1ec3n th\u1ecb k\u1ecbch b\u1ea3n g\u1ecdi n\u1ebfu c\xf3 v\xe0 lo\u1ea1i Autocall l\xe0 file voice ho\u1eb7c Text To Speech (chuy\u1ec3n \u0111\u1ed5i tho\u1ea1i).\n- Ho\u1ea1t \u0111\u1ed9ng: tr\u1ea1ng th\xe1i ho\u1ea1t \u0111\u1ed9ng c\u1ee7a chi\u1ebfn d\u1ecbch c\xf3 hai lo\u1ea1i l\xe0 Ho\u1ea1t \u0110\u1ed9ng chi\u1ebfn d\u1ecbch c\xf3 th\u1ec3 \u0111\u1ed5 cu\u1ed9c g\u1ecdi ra thu\xea bao v\xe0 Hu\u1ef7 K\xedch Ho\u1ea1t th\xec chi\u1ebfn d\u1ecbch kh\xf4ng th\u1ec3 \u0111\u1ed5 cu\u1ed9c g\u1ecdi ra \u0111\u01b0\u1ee3c.\n- Tr\u1ea1ng th\xe1i: tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch hi\u1ec7n t\u1ea1i c\xf3 ba ki\u1ec3u tr\u1ea1ng th\xe1i l\xe0 Start, Stop v\xe0 Pause.\n + Start: \u1edf tr\u1ea1ng th\xe1i n\xe0y chi\u1ebfn d\u1ecbch s\u1ebd cho g\u1ecdi d\u1eef li\u1ec7u m\xe0 kh\xe1ch h\xe0ng \u0111\xe3 t\u1ea3i l\xean t\u1eeb \u0111\u1ea7u.\n + Stop: \u1edf tr\u1ea1ng th\xe1i n\xe0y chi\u1ebfn d\u1ecbch s\u1ebd kh\xf4ng th\u1ec3 g\u1ecdi d\u1eef li\u1ec7u m\xe0 kh\xe1ch h\xe0ng \u0111\xe3 t\u1ea3i l\xean t\u1eeb \u0111\u1ea7u. B\xean c\u1ea1nh \u0111\xf3, n\u1ebfu chi\u1ebfn d\u1ecbch \u0111ang \u1edf tr\u1ea1ng th\xe1i Stop th\xec s\u1ebd d\u1eebng ho\xe0n to\xe0n v\xe0 kh\xf4ng t\u1ef1 \u0111\u1ed9ng \u0111\u1ed5 cu\u1ed9c g\u1ecdi m\u1eb7c d\xf9 chi\u1ebfn d\u1ecbch \u0111\xe3 thi\u1ebft l\u1eadp th\u1eddi gian b\u1eaft \u0111\u1ea7u.\n + Pause: \u1edf tr\u1ea1ng th\xe1i n\xe0y chi\u1ebfn d\u1ecbch s\u1ebd kh\xf4ng th\u1ec3 g\u1ecdi d\u1eef li\u1ec7u m\xe0 kh\xe1ch h\xe0ng \u0111\xe3 t\u1ea3i l\xean t\u1eeb \u0111\u1ea7u. B\xean c\u1ea1nh \u0111\xf3, n\u1ebfu chi\u1ebfn d\u1ecbch \u0111ang \u1edf tr\u1ea1ng th\xe1i Pause th\xec v\xe0o \u0111\xfang th\u1eddi gian l\u1eadp l\u1ecbch b\u1eaft \u0111\u1ea7u tr\u01b0\u1edbc \u0111\xf3 chi\u1ebfn d\u1ecbch s\u1ebd t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n th\xe0nh start v\xe0 \u0111\u1ed5 cu\u1ed9c g\u1ecdi ra.\n- Thao t\xe1c: bao g\u1ed3m 3 thao t\xe1c l\xe0 n\xfat chuy\u1ec3n tr\u1ea1ng th\xe1i Start/Stop/Pause, Ch\u1ec9nh S\u1eeda Chi\u1ebfn D\u1ecbch v\xe0 K\xedch Ho\u1ea1t/ Hu\u1ef7 K\xedch Ho\u1ea1t Chi\u1ebfn D\u1ecbch.\n + N\xfat chuy\u1ec3n tr\u1ea1ng th\xe1i \u0111\u01b0\u1ee3c k\xfd hi\u1ec7u l\xe0 tam gi\xe1c n\u1eb1m ngang d\xf9ng \u0111\u1ec3 thay \u0111\u1ed5i tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch.\n + Ch\u1ec9nh s\u1eeda \u0111\u01b0\u1ee3c k\xfd hi\u1ec7u l\xe0 c\xe2y b\xfat ch\u1ec9nh s\u1eeda c\xe1c th\xf4ng s\u1ed1 c\u1ea5u h\xecnh c\u1ee7a chi\u1ebfn d\u1ecbch hi\u1ec7n c\xf3.\n + K\xedch ho\u1ea1t \u0111\u01b0\u1ee3c k\xfd hi\u1ec7u bi\u1ec3u t\u01b0\u1ee3ng c\xf4ng t\u1eafc d\xf9ng \u0111\u1ec3 k\xedch ho\u1ea1t chi\u1ebfn d\u1ecbch ho\u1ea1t \u0111\u1ed9ng ho\u1eb7c h\u1ee7y k\xedch ho\u1ea1t. Ngo\xe0i vi\u1ec7c hu\u1ef7 k\xedch ho\u1ea1t kh\xf4ng cho chi\u1ebfn d\u1ecbch g\u1ecdi ra th\xec sau khi hu\u1ef7 c\xf3 th\u1ec3 th\u1ef1c hi\u1ec7n th\xeam thao t\xe1c x\xf3a chi\u1ebfn d\u1ecbch. \n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(12795).Z,width:"1777",height:"269"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(91650).Z,width:"1775",height:"594"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(47806).Z,width:"1783",height:"665"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-6-th\u1ef1c-hi\u1ec7n-ch\u1ec9nh-s\u1eeda-sau-khi-\u1ea5n-v\xe0o-bi\u1ec3u-t\u01b0\u1ee3ng-c\xe2y-b\xfat-\u1edf-c\u1ed9t-thao-t\xe1c-\u1edf-menu-c\u1ea5u-h\xecnh-s\u1ebd-bao-g\u1ed3m-c\xe1c-th\xf4ng-tin-nh\u01b0-t\xean-chi\u1ebfn-d\u1ecbch-tr\u1ea1ng-th\xe1i-ho\u1ea1t-\u0111\u1ed9ng-m\xf4-t\u1ea3-v\xe0-l\u1eadp-l\u1ecbch"},"B\u01b0\u1edbc 6: Th\u1ef1c hi\u1ec7n ch\u1ec9nh s\u1eeda sau khi \u1ea5n v\xe0o bi\u1ec3u t\u01b0\u1ee3ng c\xe2y b\xfat \u1edf c\u1ed9t Thao T\xe1c. \u1ede Menu C\u1ea5u H\xecnh s\u1ebd bao g\u1ed3m c\xe1c th\xf4ng tin nh\u01b0 t\xean Chi\u1ebfn D\u1ecbch, Tr\u1ea1ng Th\xe1i Ho\u1ea1t \u0110\u1ed9ng, M\xf4 T\u1ea3 v\xe0 L\u1eadp L\u1ecbch"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(76656).Z,width:"610",height:"259"})),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-7-di-chuy\u1ec3n-qua-menu-n\xe2ng-cao-\u0111\u1ec3-ti\u1ebfn-h\xe0nh-\u0111i\u1ec1u-ch\u1ec9nh-c\xe1c-c\u1ea5u-h\xecnh-li\xean-quan-\u0111\u1ebfn-ph\u01b0\u01a1ng-th\u1ee9c-\u0111\u1ed5-cu\u1ed9c-g\u1ecdi-c\u1ee7a-chi\u1ebfn-d\u1ecbch-sau-khi-\u0111i\u1ec1u-ch\u1ec9nh-ho\xe0n-t\u1ea5t-\u1ea5n-c\u1eadp-nh\u1eadt-\u0111\u1ec3-\xe1p-d\u1ee5ng-c\xe1c-c\u1ea5u-h\xecnh-m\u1edbi"},"B\u01b0\u1edbc 7: Di chuy\u1ec3n qua Menu N\xe2ng Cao \u0111\u1ec3 ti\u1ebfn h\xe0nh \u0111i\u1ec1u ch\u1ec9nh c\xe1c c\u1ea5u h\xecnh li\xean quan \u0111\u1ebfn ph\u01b0\u01a1ng th\u1ee9c \u0111\u1ed5 cu\u1ed9c g\u1ecdi c\u1ee7a chi\u1ebfn d\u1ecbch. Sau khi \u0111i\u1ec1u ch\u1ec9nh ho\xe0n t\u1ea5t \u1ea5n C\u1eadp Nh\u1eadt \u0111\u1ec3 \xe1p d\u1ee5ng c\xe1c c\u1ea5u h\xecnh m\u1edbi"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(75568).Z,width:"2248",height:"1020"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(97973).Z,width:"527",height:"322"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Gi\u1ea3i th\xedch th\xf4ng s\u1ed1"',title:'"Gi\u1ea3i',"th\xedch":!0,"th\xf4ng":!0,'s\u1ed1"':!0},"- Chi\u1ebfn d\u1ecbch: t\xean chi\u1ebfn d\u1ecbch\n- Ho\u1ea1t \u0111\u1ed9ng: b\u1eadt/t\u1eaft ho\u1ea1t \u0111\u1ed9ng c\u1ee7a chi\u1ebfn d\u1ecbch\n- \u01afu ti\xean g\u1ecdi l\u1ea1i: g\u1ed3m hai lo\u1ea1i \u01b0u ti\xean cu\u1ed9c g\u1ecdi Normal, Recall\n + Normal: c\xe1c cu\u1ed9c g\u1ecdi s\u1ebd \u0111\u01b0\u1ee3c \u01b0u ti\xean theo th\u1ee9 t\u1ef1 cu\u1ed9c g\u1ecdi tr\u1ea1ng th\xe1i new \u0111\u1ed5 tr\u01b0\u1edbc sau \u0111\xf3 m\u1edbi cho \u0111\u1ed5 c\xe1c cu\u1ed9c g\u1ecdi \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh g\u1ecdi l\u1ea1i (recall).\n + Recall: c\xe1c cu\u1ed9c g\u1ecdi s\u1ebd \u01b0u ti\xean cho c\xe1c cu\u1ed9c g\u1ecdi \u0111\u01b0\u1ee3c c\u1ea5u h\xecnh g\u1ecdi l\u1ea1i. Tu\u1ef3 v\xe0o th\u1eddi gian thi\u1ebft l\u1eadp c\xe1c cu\u1ed9c g\u1ecdi l\u1ea1i s\u1ebd \u0111\u1ed5 ra v\xe0 g\u1ecdi ngay trong khi cu\u1ed9c g\u1ecdi m\u1edbi \u0111ang \u0111\u1ed5 n\u1ebfu ch\u1ee9c n\u0103ng Recall n\xe0y \u0111\u01b0\u1ee3c b\u1eadt. \n- Tr\u1ea1ng th\xe1i g\u1ecdi l\u1ea1i: c\xe1c tr\u1ea1ng th\xe1i c\u1ee7a m\u1ed9t cu\u1ed9c g\u1ecdi, \u1ea5n ch\u1ecdn \u1edf \u0111\xe2y \u0111\u1ec3 g\u1ecdi l\u1ea1i c\xe1c cu\u1ed9c g\u1ecdi c\xf3 tr\u1ea1ng th\xe1i t\u01b0\u01a1ng \u1ee9ng.\n + Answered: Mobile nghe m\xe1y.\n + No Answered: mobile kh\xf4ng nghe m\xe1y.\n + Busy: mobile t\u1eeb ch\u1ed1i cu\u1ed9c g\u1ecdi b\u1eb1ng c\xe1ch ch\u1ee7 \u0111\u1ed9ng ng\u1eaft m\xe1y ho\u1eb7c ch\u1eb7n s\u1ed1 tr\xean thi\u1ebft b\u1ecb.\n + Not Available: mobile \u1edf ch\u1ebf \u0111\u1ed9 m\xe1y bay, kh\xf4ng li\xean l\u1ea1c \u0111\u01b0\u1ee3c, thi\u1ebft b\u1ecb di \u0111\u1ed9ng h\u01b0 h\u1ecfng, h\u1ebft pin.\n + Invalid Number: g\u1ecdi ra t\u1edbi nh\xe0 m\u1ea1ng nh\u01b0ng nh\xe0 m\u1ea1ng b\xe1o sai s\u1ed1 (s\u1ed1 mobile sai).\n + Phone Block: s\u1ed1 mobile kh\xe1ch h\xe0ng b\u1ecb kh\xf3a.\n + Congestion: \u0111\u1ea7u s\u1ed1 g\u1ecdi auto call b\u1ecb nh\xe0 m\u1ea1ng ch\u1eb7n, b\u1ecb kh\xf3a.\n + Fail: template l\u1ed7i, script l\u1ed7i, script b\u1ecb xo\xe1, h\u1ebft key zalo.\n- K\u1ecbch b\u1ea3n g\u1ecdi: c\xf3 th\u1ec3 l\xe0 m\u1ed9t file audio \u0111\u01b0\u1ee3c ghi \xe2m s\u1eb5n ho\u1eb7c m\u1ed9t m\u1eabu Text To Speech (chuy\u1ec3n \u0111\u1ed5i tho\u1ea1i). \n- S\u1ed1 l\u1ea7n g\u1ecdi l\u1ea1i: s\u1ed1 l\u1ea7n m\u1ed9t thu\xea bao \u0111\u01b0\u1ee3c g\u1ecdi t\u1edbi.\n- G\u1ecdi l\u1ea1i khi th\u1eddi gian \u0111\xe0m tho\u1ea1i nh\u1ecf h\u01a1n: th\u1eddi gian \u0111\xe0m tho\u1ea1i c\u1ee7a nh\u1eefng cu\u1ed9c g\u1ecdi \u0111\u01b0\u1ee3c mobile nghe m\xe1y n\xe0o th\u1ea5p h\u01a1n th\u1eddi gian quy \u0111\u1ecbnh trong menu n\xe0y th\xec \u0111\u1ec1u \u0111\u01b0\u1ee3c g\u1ecdi l\u1ea1i.\n- L\u1eadp l\u1ecbch g\u1ecdi l\u1ea1i: g\u1ed3m 2 ch\u1ebf \u0111\u1ed9 l\xe0 Ngay l\u1eadp t\u1ee9c v\xe0 Sau bao nhi\xeau ph\xfat. \u1ede bao nhi\xeau ph\xfat c\xf3 th\u1ec3 thi\u1ebft l\u1eadp s\u1ed1 th\u1eddi gian quy \u0111\u1ecbnh \u0111\u1ec3 g\u1ecdi l\u1ea1i. V\xed d\u1ee5 ch\u1ec9nh l\xe0 5 ph\xfat th\xec 5 ph\xfat s\u1ebd th\u1ef1c hi\u1ec7n g\u1ecdi l\u1ea1i thu\xea bao \u0111\xf3 1 l\u1ea7n.\n- Nh\xe0 m\u1ea1ng: \u0111\u1ea7u s\u1ed1 \u0111\u01b0\u1ee3c d\xf9ng \u0111\u1ec3 g\u1ecdi ra\n- Ch\u1ebf \u0111\u1ed9 g\u1ecdi: bao g\u1ed3m 3 ch\u1ebf \u0111\u1ed9 g\u1ecdi l\xe0 SIP Direct, SIM N\u1ed1i Ti\u1ebfp v\xe0 SIM Song Song\n + SIP Direct: ch\u1ebf \u0111\u1ed9 n\xe0y cho ph\xe9p g\u1ecdi ra m\u1ed9t c\xe1ch tr\u1ef1c ti\u1ebfp cho t\u1ea5t c\u1ea3 c\xe1c nh\xe0 m\u1ea1ng m\xe0 kh\xf4ng ph\u1ea3i chia k\xeanh cho t\u1eebng nh\xe0 m\u1ea1ng c\u1ee5 th\u1ec3. Trong khi ch\u1ea1y ch\u1ebf \u0111\u1ed9 n\xe0y c\u1ea7n quan t\xe2m \u0111\u1ebfn vi\u1ec7c quy \u0111\u1ecbnh s\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi \u0111\xe3 \u0111\u0103ng k\xfd v\u1edbi nh\xe0 qu\u1ea3n tr\u1ecb v\xec n\u1ebfu \u0111i\u1ec1u ch\u1ec9nh kh\xf4ng \u0111\xfang s\u1ebd kh\xf4ng \u0111\u1ea1t \u0111\u01b0\u1ee3c k\u1ebft qu\u1ea3 nh\u01b0 mong mu\u1ed1n. Ch\u1ec9nh th\u1ea5p h\u01a1n th\xec kh\xf4ng t\u1eadn d\u1ee5ng \u0111\u01b0\u1ee3c t\xe0i nguy\xean c\xf3 s\u1eb5n v\xe0 cao h\u01a1n th\xec h\u1ec7 th\u1ed1ng kh\xf4ng \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp \u0111\u1ec3 \u0111\xe1p \u1ee9ng s\u1ebd \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn qu\xe1 tr\xecnh s\u1eed d\u1ee5ng.\n + SIM Song Song: ch\u1ebf \u0111\u1ed9 n\xe0y g\u1ecdi tr\u1ef1c ti\u1ebfp cho c\xe1c nh\xe0 m\u1ea1ng th\xf4ng qua vi\u1ec7c ph\xe2n chia k\xeanh tho\u1ea1i tr\xean h\u1ec7 th\u1ed1ng. Khi g\u1ecdi v\u1edbi ch\u1ebf \u0111\u1ed9 n\xe0y h\u1ec7 th\u1ed1ng s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u1ea9y call v\u1edbi s\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi theo thi\u1ebft l\u1eadp c\u1ee7a ng\u01b0\u1eddi d\xf9ng.\n + SIM N\u1ed1i Ti\u1ebfp: ch\u1ebf \u0111\u1ed9 n\xe0y g\u1ecdi tr\u1ef1c ti\u1ebfp cho c\xe1c nh\xe0 m\u1ea1ng th\xf4ng qua vi\u1ec7c ph\xe2n chia k\xeanh tho\u1ea1i tr\xean h\u1ec7 th\u1ed1ng.Khi g\u1ecdi v\u1edbi ch\u1ebf \u0111\u1ed9 n\xe0y h\u1ec7 th\u1ed1ng s\u1ebd t\u1ef1 \u0111\u1ed9ng lu\xe2n chuy\u1ec3n c\xe1c k\xeanh tr\u1ed1ng qua l\u1ea1i gi\u1eefa c\xe1c chi\u1ebfn d\u1ecbch nh\u1eb1m \u0111\u1ea3m b\u1ea3o hi\u1ec7u su\u1ea5t t\u1ed1i \u01b0u v\xe0 kh\xf4ng g\xe2y l\xe3ng ph\xed t\xe0i nguy\xean.\n- Th\u1eddi gian mobile nghe m\xe1y: th\u1eddi gian \u0111\u1ee3i cho thu\xea bao nghe m\xe1y n\u1ebfu qu\xe1 th\u1eddi gian n\xe0y h\u1ec7 th\u1ed1ng s\u1ebd t\u1ef1 \u0111\u1ed9ng ng\u1eaft m\xe1y.\n- S\u1ed1 cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi: s\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed5 ra c\xf9ng m\u1ed9t l\xfac.\n- L\u1eadp l\u1ecbch: thi\u1ebft l\u1eadp th\u1eddi gian b\u1eaft \u0111\u1ea7u v\xe0 k\u1ebft th\xfac c\u1ee7a m\u1ed9t chi\u1ebfn d\u1ecbch theo c\xe1c ng\xe0y trong tu\u1ea7n.\n- Callback URL: \u0111\u01b0\u1eddng d\u1eabn webhook nh\u1eadn event CDR sau m\u1ed7i cu\u1ed9c g\u1ecdi.\n")),(0,i.kt)("h3",{id:"b\u01b0\u1edbc-8-sau-khi-c\u1eadp-nh\u1eadt-ho\xe0n-t\u1ea5t-\u1ea5n-thao-t\xe1c-chuy\u1ec3n-tr\u1ea1ng-th\xe1i-chi\u1ebfn-d\u1ecbch-sang-start-\u0111\u1ec3-\u0111\u1ed5-cu\u1ed9c-g\u1ecdi-ra"},"B\u01b0\u1edbc 8: Sau khi C\u1eadp Nh\u1eadt ho\xe0n t\u1ea5t \u1ea5n thao t\xe1c chuy\u1ec3n tr\u1ea1ng th\xe1i chi\u1ebfn d\u1ecbch sang Start \u0111\u1ec3 \u0111\u1ed5 cu\u1ed9c g\u1ecdi ra."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(69249).Z,width:"610",height:"66"})),(0,i.kt)("p",null,"\u1ede m\u1ee5c N\xe2ng Cao khi \u1ea5n Start s\u1ebd hi\u1ec3n th\u1ecb Menu Ch\u1ea1y Chi\u1ebfn D\u1ecbch c\xf3 th\u1ec3 \u1ea5n ch\u1ea1y m\u1ed7i chi\u1ebfn d\u1ecbch kh\xf4ng c\u1ea7n x\xe9t chi\u1ebfn d\u1ecbch \u0111\xf3 c\xf3 d\u1eef li\u1ec7u kh\xe1ch h\xe0ng hay ch\u01b0a ho\u1eb7c c\xf3 th\u1ec3 upload b\u1eb1ng c\xe1ch \u1ea5n m\u0169i t\xean \u0111\u1ec3 hi\u1ec7n ra l\u1ef1a ch\u1ecdn t\u1ea3i l\xean.\n",(0,i.kt)("img",{alt:"PITEL",src:t(6435).Z,width:"608",height:"354"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(75029).Z,width:"434",height:"270"})),(0,i.kt)("p",null,"\u1ea4n v\xe0o l\u1ef1a ch\u1ecdn Choose List \u0111\u1ec3 th\u1ef1c hi\u1ec7n t\u1ea3i d\u1eef li\u1ec7u l\xean t\u1eeb thi\u1ebft b\u1ecb c\xe1 nh\xe2n\n",(0,i.kt)("img",{alt:"PITEL",src:t(93147).Z,width:"499",height:"570"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PITEL",src:t(90368).Z,width:"610",height:"263"}),"\n",(0,i.kt)("img",{alt:"PITEL",src:t(23754).Z,width:"355",height:"397"}),"\n",(0,i.kt)("img",{alt:"PITEL",src:t(47246).Z,width:"424",height:"275"})))}r.isMDXComponent=!0},75568:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/advanced_setup-0c65182e30377b88bca29094a05f9943.png"},7851:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/advanced_setup_add_campaign-ae682a0abd8e9917376aff8fa68d4a8a.png"},93147:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/advanced_setup_chose_listupload-58b6a17f54aaa2dc8b2cc29a5d7f2188.png"},47806:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/advanced_setup_delete_Campaign-121f9eee1a1b835bb09f4eb62c612a15.png"},91650:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/advanced_setup_deleteanddeactive-c10f079373cb17189b04ffe76ff79a8a.png"},76656:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/config_cp-bbdecef31c8f19558cefdf18edbe5ff4.png"},12795:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/deactive_campaign-9e0f8809ef69eb19ebc6c0a8abc3c901.png"},49148:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/editcamp-890ad8962f2a0a8098fe11d2d5787a6a.png"},21183:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/manager_camp-8b5ea5781408e3d0ed7b4bdc86708634.png"},69249:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/runautocall-3278a55cad8f5b7382fbc85c5aca5df3.png"},75029:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/runcamp_choselist-bb29d1e6e600af7ec898552490847435.png"},6435:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/runcampaign_advanced_setup-7450f1d45fc26f091f1b6b3fed02eb5d.png"},47246:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/runsuccess-49dbbc8fe4c944a4d04cca2545abfbac.png"},43546:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/select_advanced_setup-381176d97e6a9f3f8439f5abeb238e66.png"},90368:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/select_file-ecd08f355732571254476cf783662de1.png"},34795:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/select_menu_camp-6979c3fb23fbab3ea7f1c87342508a6b.png"},23754:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/sendfile-7c392e8bdbfb7896a74052d834450da1.png"},97973:(n,h,t)=>{t.d(h,{Z:()=>c});const c=t.p+"assets/images/update_campaign-89446c4129b5502bbbad2b80dfe536a3.png"}}]);