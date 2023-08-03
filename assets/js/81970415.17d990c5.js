"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=i(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,p(p({ref:t},d),{},{components:n})):a.createElement(c,p({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:r,p[1]=u;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},43482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"Group",sidebar_position:12},p=void 0,u={unversionedId:"group",id:"group",title:"Group",description:"Create Group",source:"@site/callcenter/group.md",sourceDirName:".",slug:"/group",permalink:"/callcenter/group",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Group",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Customer",permalink:"/callcenter/customer"},next:{title:"Monitor",permalink:"/callcenter/monitor_user"}},o={},i=[{value:"Create Group",id:"create-group",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Get Group",id:"get-group",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Get Group By ID",id:"get-group-by-id",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Update Group",id:"update-group",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Body",id:"body-1",level:3},{value:"Assign User Into Group",id:"assign-user-into-group",level:2},{value:"HTTP Request",id:"http-request-4",level:3},{value:"Body",id:"body-2",level:3},{value:"Delete Group",id:"delete-group",level:2}],d={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-group"},"Create Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/group' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"group_name\": \"Group01\",\n    \"group_description\": \"\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "created": true,\n    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "group_name is exists"\n}\n')),(0,r.kt)("p",null,"API d\xf9ng \u0111\u1ec3 t\u1ea1o nh\xf3m tr\xean callcenter."),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/group")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "group_name": "Group01",\n    "group_description": ""\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},"Group01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_description"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xf4 t\u1ea3 nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"get-group"},"Get Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/group' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "group_name": "Group01",\n            "group_description": "",\n            "department_uuid": ""\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 1\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "group is not found"\n}\n')),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/group")),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"get-group-by-id"},"Get Group By ID"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--data ''\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",\n    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n    "group_name": "Group01",\n    "group_description": "",\n    "group_priority": 0,\n    "users": null,\n    "campaigns": null,\n    "department_uuid": "",\n    "department_name": "",\n    "kpi": null\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 l\u1ea5y th\xf4ng tin chi ti\u1ebft c\u1ee7a m\u1ed9t nh\xf3m theo uuid truy\u1ec1n v\xe0o."),(0,r.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/group/{{group_uuid}}")),(0,r.kt)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a nh\xf3m")))),(0,r.kt)("h2",{id:"update-group"},"Update Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PUT 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"group_name\": \"Group Updated\",\n    \"group_description\": \"For U\"\n}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",\n        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n        "group_name": "Group Updated",\n        "group_description": "For U",\n        "department_uuid": ""\n    },\n    "message": "success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "group is not found"\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 update th\xf4ng tin nh\xf3m."),(0,r.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_HOST}}/v3/group/{{group_uuid}}")),(0,r.kt)("h3",{id:"body-1"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "group_name": "TEL4VN Group Updated",\n    "group_description": "For U"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_description"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xf4 t\u1ea3 nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"assign-user-into-group"},"Assign User Into Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5\' \\\n--header \'content-type: application/json\' \\\n--header \'authorization: Bearer {{TOKEN}}\' \\\n--data \'{\n    "group_name": "Group Updated",\n    "group_description": "",\n    "group_priority": 0,\n    "user_assigns": [\n        "e0406808-4be4-4e43-9ec5-512d91e2b95e"\n    ],\n    "campaign_assigns": [],\n    "department_uuid": ""\n}\'\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",\n        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n        "group_name": "Group Updated",\n        "group_description": "",\n        "department_uuid": ""\n    },\n    "message": "success"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "group_name": "String length must be greater than or equal to 1"\n        },\n        {\n            "group_name": "Does not match pattern \'^[a-zA-Z0-9\\\\s.\\\\-\\\\_]+$\'"\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 update th\xf4ng tin nh\xf3m."),(0,r.kt)("h3",{id:"http-request-4"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_HOST}}/v3/group/{{group_uuid}}")),(0,r.kt)("h3",{id:"body-2"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "group_name": "Group Updated",\n    "group_description": "",\n    "group_priority": 0,\n    "user_assigns": [\n        "e0406808-4be4-4e43-9ec5-512d91e2b95e"\n    ],\n    "campaign_assigns": [],\n    "department_uuid": ""\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_description"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xf4 t\u1ea3 nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"group_priority"),(0,r.kt)("td",{parentName:"tr",align:null},"M\u1ee9c \u0111\u1ed9 \u01b0u ti\xean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_assigns"),(0,r.kt)("td",{parentName:"tr",align:null},"Danh s\xe1ch user c\u1ea7n assign"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign_assigns"),(0,r.kt)("td",{parentName:"tr",align:null},"Danh s\xe1ch chi\u1ebfn d\u1ecbch"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"department_uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"UUID ph\xf2ng ban ch\u1ee9a nh\xf3m"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"delete-group"},"Delete Group"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 200,\n    "content": "successfully",\n    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "group not found"\n}\n')),(0,r.kt)("p",{parentName:"blockquote"},"API n\xe0y d\xf9ng \u0111\u1ec3 x\xf3a chi\u1ebfn d\u1ecbch."),(0,r.kt)("h3",{parentName:"blockquote",id:"http-request-5"},"HTTP Request")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v3/group/{{campaign_uuid}}")))}m.isMDXComponent=!0}}]);