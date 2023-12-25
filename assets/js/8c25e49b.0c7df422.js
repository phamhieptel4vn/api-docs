"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,g=m["".concat(l,".").concat(h)]||m[h]||u[h]||p;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const p={sidebar_position:2,title:"Get Pitel Token"},i=void 0,a={unversionedId:"get_pitel_token",id:"get_pitel_token",title:"Get Pitel Token",description:"BACKEND c\u1ea7n x\xe2y d\u1ef1ng m\u1ed9t API ho\u1eb7c m\u1ed9t c\u01a1 ch\u1ebf \u0111\u1ec3 t\u1ea1o v\xe0 tr\u1ea3 v\u1ec1 token client",source:"@site/portal_sdk/get_pitel_token.md",sourceDirName:".",slug:"/get_pitel_token",permalink:"/portal_sdk/get_pitel_token",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Get Pitel Token"},sidebar:"tutorialSidebar",previous:{title:"Register API Key",permalink:"/portal_sdk/register_apikey"},next:{title:"PitelSDK Web",permalink:"/portal_sdk/pitelsdk_web"}},l={},c=[{value:"V\xed d\u1ee5 v\u1ec1 API nh\u1eadn token",id:"v\xed-d\u1ee5-v\u1ec1-api-nh\u1eadn-token",level:4}],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"BACKEND")," c\u1ea7n x\xe2y d\u1ef1ng m\u1ed9t API ho\u1eb7c m\u1ed9t c\u01a1 ch\u1ebf \u0111\u1ec3 t\u1ea1o v\xe0 tr\u1ea3 v\u1ec1 token client"),(0,o.kt)("admonition",{title:"L\u01b0u \xfd: \u0110\u1ea3m b\u1ea3o API ch\u1ec9 \u0111\u01b0\u1ee3c g\u1ecdi sau khi \u0111\xe3 ch\u1ee9ng th\u1ef1c nh\u1ea7m b\u1ea3o m\u1eadt token",type:"note"}),(0,o.kt)("admonition",{title:"API l\u1ea5y token c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf t\xf9y \xfd, tham kh\u1ea3o ho\u1eb7c s\u1eed d\u1ee5ng PitelHelper \u0111\u1ec3 t\u1ea1o token t\xf9y thu\u1ed9c ng\xf4n ng\u1eef l\u1eadp tr\xecnh \u0111ang s\u1eed d\u1ee5ng. ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Golang - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tel4vn/pitel-helpers-go"},"https://github.com/tel4vn/pitel-helpers-go"),(0,o.kt)("br",{parentName:"p"}),"\n","Python - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tel4vn/pitel-helpers-python"},"https://github.com/tel4vn/pitel-helpers-python"),(0,o.kt)("br",{parentName:"p"}),"\n","Javascript - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tel4vn/pitel-helpers-es6"},"https://github.com/tel4vn/pitel-helpers-es6"),(0,o.kt)("br",{parentName:"p"}),"\n","NodeJS - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tel4vn/pitel-helpers-nodejs"},"https://github.com/tel4vn/pitel-helpers-nodejs"),(0,o.kt)("br",{parentName:"p"}),"\n","PHP - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tel4vn/pitel-helpers-php"},"https://github.com/tel4vn/pitel-helpers-php"))),(0,o.kt)("h4",{id:"v\xed-d\u1ee5-v\u1ec1-api-nh\u1eadn-token"},"V\xed d\u1ee5 v\u1ec1 API nh\u1eadn token"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from .helpers import PitelHelpers\nimport .config\n\ndef generate_token(number="100"):\n  helper = PitelHelpers(config.api_key, config.api_secret, number)\n  return helper.getAccessToken()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import PitelHelpers from 'pitel-helper-es6'\nimport {API_KEY, SECRET_KEY} from './config'\n\nfunction generate_token(number:string=\"100\") {\n  const helper = new PitelHelpers(API_KEY, SECRET_KEY, number);\n  return helper.getAccessToken();\n}\n")))}u.isMDXComponent=!0}}]);