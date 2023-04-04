"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[2926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(i,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:r,o[1]=u;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92911:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={title:"Audio",sidebar_position:2},o=void 0,u={unversionedId:"audio",id:"audio",title:"Audio",description:"Upload Audio",source:"@site/autocall/audio.md",sourceDirName:".",slug:"/audio",permalink:"/autocall/audio",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Audio",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/autocall/auth"},next:{title:"Template",permalink:"/autocall/template"}},i={},d=[{value:"Upload Audio",id:"upload-audio",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Get Audios",id:"get-audios",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Delete Audio",id:"delete-audio",level:2}],p={toc:d},c="wrapper";function s(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"upload-audio"},"Upload Audio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/audio' \\\n--header 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryWs5jqbZFs4Dxlt6q' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--form 'audio_name=\"AudioExample.wav\"' \\\n--form 'file=@\"/C:/Users/phamh/Downloads/AudioExample.wav\"'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "created": true,\n    "id": "3d6ac065-3a08-4f8b-a78f-6b274a2c358b"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "audio is existed"\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 upload file audio l\xean server."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/audio")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"file audio"),(0,r.kt)("td",{parentName:"tr",align:null},"x")))),(0,r.kt)("h2",{id:"get-audios"},"Get Audios"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/audio' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "audio_uuid": "54a00d51-7c3f-4c97-b578-a43966fbdf48",\n            "audio_name": "File_Duyet.wav.wav",\n            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",\n            "created_at": "2023-03-06T17:54:36.035124+07:00"\n        },\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "audio_uuid": "827a8471-df3e-470d-89f0-27f305b785ca",\n            "audio_name": "Phimbam.wav.wav",\n            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",\n            "created_at": "2023-03-06T17:55:41.37731+07:00"\n        },\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "audio_uuid": "c0db40c5-9841-4fb4-bfdc-0ba179138ecf",\n            "audio_name": "AudioExample.wav",\n            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",\n            "created_at": "2023-03-07T00:43:33.32359+07:00"\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 3\n}\n')),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/audio")),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audio_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean file audio"),(0,r.kt)("td",{parentName:"tr",align:null},"AudioExample.wav")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audio_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a file audio"),(0,r.kt)("td",{parentName:"tr",align:null},"c0db40c5-9841-4fb4-bfdc-0ba179138ecf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"delete-audio"},"Delete Audio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://{{API_HOST}}/v3/audio/6d8e64d2-ae6a-455f-81a2-c203d65f6b0c' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "delete audio success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "delete audio failed"\n}\n')),(0,r.kt)("h3",{parentName:"blockquote",id:"http-request-2"},"HTTP Request")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v3/audio/{{audio_uuid}}")))}s.isMDXComponent=!0}}]);