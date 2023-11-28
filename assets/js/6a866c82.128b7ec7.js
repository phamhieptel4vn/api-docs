"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},27757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"Authentication",sidebar_position:1},o=void 0,i={unversionedId:"auth",id:"auth",title:"Authentication",description:"Get Access Token",source:"@site/autocall/auth.md",sourceDirName:".",slug:"/auth",permalink:"/autocall/auth",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Authentication",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/autocall/"},next:{title:"Audio",permalink:"/autocall/audio"}},c={},u=[{value:"Get Access Token",id:"get-access-token",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Login",id:"login",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Body",id:"body-1",level:3}],p={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-access-token"},"Get Access Token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/auth/token' \\\n--header 'Content-Type: application/json' \\\n--data '{\n\"api_key\": \"aaaaaaaa-bbbb-cccc-dddd-eeeeeeee\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "client_id": "42f6b1d7-4a16-428d-895b-fe38b0cfcbe1",\n    "domain_uuid": "2de2dd34-9724-493b-bd3c-4ca6a97463eb",\n    "expired_in": 13647710,\n    "refresh_token": "",\n    "token": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjEzNjMyNzc4fQ.dGhpcyBpcyB0ZXN0IGRhdGEx",\n    "token_type": "Bearer",\n    "user_id": "aaaaaaaa-1111-2222-3333-eeeeeeee"\n}\n')),(0,r.kt)("p",null,"Autocall API s\u1eed d\u1ee5ng API Token \u0111\u1ec3 x\xe1c th\u1ef1c truy c\u1eadp t\u1edbi API. API Token b\u1ea1n l\u1ea5y t\u1eeb service th\xf4ng qua {API_KEY} \u0111\u01b0\u1ee3c T\u1ed5ng \u0111\xe0i cung c\u1ea5p."),(0,r.kt)("p",null,"T\u1ea5t c\u1ea3 c\xe1c API c\u1ee7a Autocall \u0111\u1ec1u y\xeau c\u1ea7u user cung c\u1ea5p Token trong header gi\u1ed1ng ph\xeda d\u01b0\u1edbi."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Authorization: {TOKEN}")),(0,r.kt)("p",null,"B\u1ea1n vui l\xf2ng thay \u0111\u1ed5i {TOKEN} b\u1eb1ng token \u0111\xe3 l\u1ea5y \u0111\u01b0\u1ee3c."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/auth/token")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"api_key"),(0,r.kt)("td",{parentName:"tr",align:null},"API key \u0111\u01b0\u1ee3c c\u1ea5p")))),(0,r.kt)("h2",{id:"login"},"Login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L -X POST \'https://{{API_HOST}}/v3/auth\' \\\n-H \'Content-Type: application/json\' \\\n--data-raw \'{\n    "username" : "foo@test.tel4vn.com",\n    "password" : "foo123"\n}\'\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user_uuid": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n    "domain_uuid": "dddddddd-1111-2222-3333-eeeeeeee",\n    "username": "foo",\n    "api_key": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee",\n    "user_enabled": "true",\n    "level": "admin"\n  }\n}\n')),(0,r.kt)("p",null,"Login th\xe0nh c\xf4ng s\u1ebd tr\u1ea3 v\u1ec1 th\xf4ng tin account."),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/auth")),(0,r.kt)("h3",{id:"body-1"},"Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"Account's username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Account's password")))))}s.isMDXComponent=!0}}]);