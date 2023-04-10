"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[7907],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(a),k=l,m=s["".concat(p,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=k;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:l,o[1]=c;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},12005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={title:"Call",sidebar_position:4},o=void 0,c={unversionedId:"call",id:"call",title:"Call",description:"List Calls",source:"@site/callcenter/call.md",sourceDirName:".",slug:"/call",permalink:"/callcenter/call",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Call",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CDRs - Call Detail Records",permalink:"/callcenter/cdr"},next:{title:"Click-to-call",permalink:"/callcenter/click2call"}},p={},i=[{value:"List Calls",id:"list-calls",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Transfer a call",id:"transfer-a-call",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Body",id:"body",level:3},{value:"Listen a call",id:"listen-a-call",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Body",id:"body-1",level:3},{value:"Whisper a call",id:"whisper-a-call",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Body",id:"body-2",level:3},{value:"Barge a call",id:"barge-a-call",level:2},{value:"HTTP Request",id:"http-request-4",level:3},{value:"Body",id:"body-3",level:3}],u={toc:i},s="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"list-calls"},"List Calls"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'http://{{API_HOST}}/v2/call' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n      {\n        "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",\n        "context": "test.tel4vn.com",\n        "created_time": "2021-06-08 17:37:37",\n        "destination": "0899123456",\n        "direction": "outbound",\n        "ip": "1.2.3.4",\n        "source": "101",\n        "state": "CS_EXECUTE"\n      },\n      ...\n  ],\n  "total": 1\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 l\u1ea5y danh s\xe1ch c\xe1c cu\u1ed9c g\u1ecdi theo th\u1eddi gian th\u1ef1c."),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET http://{{API_HOST}}/v2/call")),(0,l.kt)("h2",{id:"transfer-a-call"},"Transfer a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X POST 'http://{{API_HOST}}/v2/call/01b7d166-b564-42ec-80a1-4ad343225934/transfer' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json' \\\n--data-raw '{\n    \"ext\" : \"101\"\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",\n  "ext": "101"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "error": "USER_NOT_REGISTERED"\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n chuy\u1ec3n cu\u1ed9c g\u1ecdi sang extension kh\xe1c."),(0,l.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST http://{{API_HOST}}/v2/call/<CALL_ID>/transfer")),(0,l.kt)("h3",{id:"body"},"Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ext"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext nh\u1eadn cu\u1ed9c g\u1ecdi m\u1edbi")))),(0,l.kt)("h2",{id:"listen-a-call"},"Listen a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X POST 'http://{{API_HOST}}/v2/call/01b7d166-b564-42ec-80a1-4ad343225934/listen' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json' \\\n--data-raw '{\n    \"ext\" : \"101\"\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",\n  "ext": "101"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "error": "USER_NOT_REGISTERED"\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n nghe l\xe9n cu\u1ed9c g\u1ecdi c\u1ee7a m\u1ed9t extension kh\xe1c."),(0,l.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST http://{{API_HOST}}/v2/call/<CALL_ID>/listen")),(0,l.kt)("h3",{id:"body-1"},"Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ext"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext nh\u1eadn cu\u1ed9c g\u1ecdi")))),(0,l.kt)("h2",{id:"whisper-a-call"},"Whisper a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X POST 'http://{{API_HOST}}/v2/call/01b7d166-b564-42ec-80a1-4ad343225934/whisper' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json' \\\n--data-raw '{\n    \"ext\" : \"101\"\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",\n  "ext": "101"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "error": "USER_NOT_REGISTERED"\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi v\u1edbi extension, mobile s\u1ebd kh\xf4ng nghe \u0111\u01b0\u1ee3c."),(0,l.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST http://{{API_HOST}}/v2/call/<CALL_ID>/whisper")),(0,l.kt)("h3",{id:"body-2"},"Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ext"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext nh\u1eadn cu\u1ed9c g\u1ecdi m\u1edbi")))),(0,l.kt)("h2",{id:"barge-a-call"},"Barge a call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X POST 'http://{{API_HOST}}/v2/call/01b7d166-b564-42ec-80a1-4ad343225934/barge' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json' \\\n--data-raw '{\n    \"ext\" : \"101\"\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "success",\n  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",\n  "ext": "101"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": "fail",\n  "error": "USER_NOT_REGISTERED"\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi 3 b\xean v\u1edbi extension v\xe0 mobile."),(0,l.kt)("h3",{id:"http-request-4"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST http://{{API_HOST}}/v2/call/<CALL_ID>/barge")),(0,l.kt)("h3",{id:"body-3"},"Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ext"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext nh\u1eadn cu\u1ed9c g\u1ecdi m\u1edbi")))))}d.isMDXComponent=!0}}]);