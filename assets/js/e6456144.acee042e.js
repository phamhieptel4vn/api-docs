"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,g=s["".concat(o,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"Agent",sidebar_position:13},i=void 0,u={unversionedId:"agent",id:"agent",title:"Agent",description:"Attributes",source:"@site/callcenter/agent.md",sourceDirName:".",slug:"/agent",permalink:"/callcenter/agent",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Agent",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Group",permalink:"/callcenter/group"},next:{title:"List",permalink:"/callcenter/list"}},o={},d=[{value:"Attributes",id:"attributes",level:3},{value:"Get Agent Live",id:"get-agent-live",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Get Agent By ID",id:"get-agent-by-id",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Get Extension Of Agent",id:"get-extension-of-agent",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Post Agent Login Into Campaign",id:"post-agent-login-into-campaign",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Body",id:"body",level:3},{value:"Post Agent Resume",id:"post-agent-resume",level:2},{value:"HTTP Request",id:"http-request-4",level:3},{value:"Body",id:"body-1",level:3},{value:"Post Agent Pause",id:"post-agent-pause",level:2},{value:"HTTP Request",id:"http-request-5",level:3},{value:"Body",id:"body-2",level:3}],p={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_live_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean \u0111\u0103ng nh\u1eadp c\u1ee7a agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 m\xe1y c\u1ee7a agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a extension")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a domain \u0111ang s\u1eed d\u1ee5ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"domain_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean c\u1ee7a domain \u0111ang s\u1eed d\u1ee5ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a campaign m\xe0 agent \u0111ang l\xe0m vi\u1ec7c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i c\u1ee7a agent, c\xf3 th\u1ec3 l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},"RESUME")," ho\u1eb7c ",(0,r.kt)("inlineCode",{parentName:"td"},"PAUSE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pause_code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 pause code c\u1ee7a agent, n\u1ebfu agent \u0111ang pause th\xec s\u1ebd c\xf3 gi\xe1 tr\u1ecb, n\u1ebfu kh\xf4ng th\xec s\u1ebd l\xe0 ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"login_time"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian agent login v\xe0o h\u1ec7 th\u1ed1ng, c\xf3 \u0111\u1ecbnh d\u1ea1ng ",(0,r.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DDTHH:MM:SS+07:00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_update_time"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian agent cu\u1ed1i c\xf9ng update tr\u1ea1ng th\xe1i c\u1ee7a m\xecnh, c\xf3 \u0111\u1ecbnh d\u1ea1ng ",(0,r.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DDTHH:MM:SS+07:00"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"last_name"),(0,r.kt)("td",{parentName:"tr",align:null},"H\u1ecd c\u1ee7a agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"middle_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean \u0111\u1ec7m c\u1ee7a agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"first_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean c\u1ee7a agent")))),(0,r.kt)("h2",{id:"get-agent-live"},"Get Agent Live"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/live' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",\n            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",\n            "username": "Agent04Internal",\n            "extension": "104",\n            "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "domain_name": "internal.tel4vn.com",\n            "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",\n            "status": "RESUME",\n            "pause_code": "",\n            "login_time": "2023-03-08T13:45:10.906065+07:00",\n            "last_update_time": "2023-03-08T13:54:41.253266+07:00",\n            "last_name": "",\n            "middle_name": "",\n            "first_name": "Agent04Internal"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"API n\xe0y \u0111\u1ec3 l\u1ea5y danh s\xe1ch c\xe1c agent \u0111ang online tr\xean h\u1ec7 th\u1ed1ng."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/agent/live")),(0,r.kt)("h2",{id:"get-agent-by-id"},"Get Agent By ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/e0406808-4be4-4e43-9ec5-512d91e2b95e' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n--data ''\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",\n    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n    "username": "Agent01Internal",\n    "user_enabled": "true",\n    "user_status": "Logged Out",\n    "level": "agent",\n    "last_name": "",\n    "middle_name": "",\n    "first_name": "Agent01Internal",\n    "total_subscriber": 0,\n    "campaigns": [\n        {\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n            "campaign_name": "Campaign c\u1ee7a Duy Ph\xf9ng",\n            "type": "autodialer"\n        }\n    ],\n    "user_live": null\n}\n')),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/agent/{{user_uuid}}")),(0,r.kt)("h2",{id:"get-extension-of-agent"},"Get Extension Of Agent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/extension' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "extension_uuid": "1196cc87-44c5-4dc6-9bce-2906a1371cd9",\n            "extension": "101",\n            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",\n            "username": "Agent01Internal",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        },\n        {\n            "extension_uuid": "03f8147d-54df-4daf-8d42-77baad51f2e2",\n            "extension": "102",\n            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b",\n            "username": "Agent02Internal",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        },\n        {\n            "extension_uuid": "f97a0230-4c24-4b64-ae8c-7473076dfba9",\n            "extension": "103",\n            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae",\n            "username": "Agent03Internal",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        },\n        {\n            "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",\n            "extension": "104",\n            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",\n            "username": "Agent04Internal",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        },\n        {\n            "extension_uuid": "58378f4d-f5c4-433c-a62b-e3131735ee98",\n            "extension": "213",\n            "user_uuid": "81769d49-6dd1-4186-ba77-e5126b444a5c",\n            "username": "UserTest",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        },\n        {\n            "extension_uuid": "005f0830-5a0b-4829-8ab4-07dd2614a529",\n            "extension": "214",\n            "user_uuid": "8f1bf511-ed93-43df-8780-4c62bce44324",\n            "username": "UserTest01",\n            "enabled": "true",\n            "domain_name": "internal.tel4vn.com",\n            "is_link_call_center": true\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 6\n}\n')),(0,r.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/agent/extension")),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"post-agent-login-into-campaign"},"Post Agent Login Into Campaign"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/login' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"campaign_uuid\": \"23406d2c-19e5-4f7b-a1ce-bfea5c2ff081\",\n    \"extension\": \"104\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "user_live_uuid": "dc80a21e-4867-4b30-a213-d4562371295a",\n        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",\n        "username": "Agent04Internal",\n        "extension": "104",\n        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",\n        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n        "domain_name": "internal.tel4vn.com",\n        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",\n        "status": "PAUSE",\n        "pause_code": "",\n        "login_time": "2023-03-08T11:59:45.951270386+07:00",\n        "last_update_time": "2023-03-08T11:59:45.951270491+07:00"\n    },\n    "message": "success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "user is already logged in"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_uuid is invalid"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_uuid is invalid"\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 login agent v\xe0o campaign."),(0,r.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/agent/login")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",\n    "extension": "104"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a campaign"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 m\xe1y c\u1ee7a agent"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("h2",{id:"post-agent-resume"},"Post Agent Resume"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/resume' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"extension\": \"104\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",\n        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",\n        "username": "Agent04Internal",\n        "extension": "104",\n        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",\n        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n        "domain_name": "internal.tel4vn.com",\n        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",\n        "status": "RESUME",\n        "pause_code": "",\n        "login_time": "2023-03-08T13:45:10.906065+07:00",\n        "last_update_time": "2023-03-08T13:49:00.244295344+07:00"\n    },\n    "message": "success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "user_uuid or extension is missing"\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 chuy\u1ec3n tr\u1ea1ng th\xe1i c\u1ee7a agent \u0111ang login trong chi\u1ebfn d\u1ecbch v\u1ec1 resume."),(0,r.kt)("h3",{id:"http-request-4"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/agent/resume")),(0,r.kt)("h3",{id:"body-1"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extension": "104"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 m\xe1y c\u1ee7a agent"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("h2",{id:"post-agent-pause"},"Post Agent Pause"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/agent/pause' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"extension\": \"104\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",\n        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",\n        "username": "Agent04Internal",\n        "extension": "104",\n        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",\n        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n        "domain_name": "internal.tel4vn.com",\n        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",\n        "status": "PAUSE",\n        "pause_code": "",\n        "login_time": "2023-03-08T13:45:10.906065+07:00",\n        "last_update_time": "2023-03-08T15:22:22.328024516+07:00"\n    },\n    "message": "success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "user_uuid or extension is missing"\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 chuy\u1ec3n tr\u1ea1ng th\xe1i c\u1ee7a agent \u0111ang login trong chi\u1ebfn d\u1ecbch v\u1ec1 pause."),(0,r.kt)("h3",{id:"http-request-5"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/agent/pause")),(0,r.kt)("h3",{id:"body-2"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "extension": "104"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extension"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 m\xe1y c\u1ee7a agent"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))))}c.isMDXComponent=!0}}]);