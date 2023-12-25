"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[34],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},i=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),o=m(a),c=r,g=o["".concat(u,".").concat(c)]||o[c]||k[c]||l;return a?n.createElement(g,d(d({ref:e},i),{},{components:a})):n.createElement(g,d({ref:e},i))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=c;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[o]="string"==typeof t?t:r,d[1]=p;for(var m=2;m<l;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},83003:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"Customer",sidebar_position:12},d=void 0,p={unversionedId:"customer",id:"customer",title:"Customer",description:"Get List Customers",source:"@site/callcenter/customer.md",sourceDirName:".",slug:"/customer",permalink:"/callcenter/customer",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Customer",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"User",permalink:"/callcenter/user"},next:{title:"Group",permalink:"/callcenter/group"}},u={},m=[{value:"Get List Customers",id:"get-list-customers",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Get Specific Customer",id:"get-specific-customer",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Post Customer",id:"post-customer",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Body",id:"body",level:3}],i={toc:m},o="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(o,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-list-customers"},"Get List Customers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'http://{{API_HOST}}/v2/customer' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "content": "successfully",\n  "data": [\n    {\n      "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n      "contract_number": "ABC123",\n      "created_at": "2021-07-15T12:50:23.805319Z",\n      "customer_code": "KH01",\n      "customer_id": "dddddddd-1111-2222-3333-eeeeeeee",\n      "customer_name": "Khach Hang 01",\n      "phone_number": "0899888998",\n      "status": "NEW",\n      "updated_at": "0001-01-01T00:00:00Z",\n      "after_day": 7\n    },\n    {\n      "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n      "contract_number": "DEF456",\n      "created_at": "2021-07-15T12:50:24.565573Z",\n      "customer_code": "KH01",\n      "customer_id": "gggggggg-1111-2222-3333-eeeeeeee",\n      "customer_name": "Khach Hang 02",\n      "phone_number": "0899888999",\n      "status": "NEW",\n      "updated_at": "0001-01-01T00:00:00Z",\n      "after_day": 7\n    }\n  ],\n  "limit": 10,\n  "offset": 0,\n  "total": 200\n}\n')),(0,r.kt)("p",null,"API d\xf9ng \u0111\u1ec3 l\u1ea5y danh s\xe1ch kh\xe1ch h\xe0ng \u0111\xe3 upload."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Th\xf4ng tin"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 code HTTP tr\u1ea3 v\u1ec1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\xf4ng b\xe1o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Data tr\u1ea3 v\u1ec1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.campaign_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id c\u1ee7a chi\u1ebfn d\u1ecbch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.contract_number"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 h\u1ee3p \u0111\u1ed3ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.phone_number"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.status"),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian kh\u1edfi t\u1ea1o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.updated_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt g\u1ea7n nh\u1ea5t")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.after_day"),(0,r.kt)("td",{parentName:"tr",align:null},"Sau bao nhi\xeau ng\xe0y s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng g\u1ecdi l\u1ea1i")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"Kh\xe1ch h\xe0ng v\u1eeba \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o m\u1edbi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0110\xe3 \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o h\xe0ng ch\u1edd \u0111\u1ec3 ti\u1ebfn h\xe0nh g\u1ecdi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"answered"),(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3 k\u1ebft n\u1ed1i v\xe0 n\xf3i chuy\u1ec7n v\u1edbi kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"busy"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe1y b\u1eadn ho\u1eb7c kh\xe1ch h\xe0ng b\u1ea5m t\u1eeb ch\u1ed1i tr\u1ea3 l\u1eddi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no-answered"),(0,r.kt)("td",{parentName:"tr",align:null},"Kh\xe1ch h\xe0ng kh\xf4ng nghe m\xe1y, \u0111\u1ec3 h\u1ebft chu\xf4ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancel"),(0,r.kt)("td",{parentName:"tr",align:null},"Ph\xeda extension, agent ch\u1ee7 \u0111\u1ed9ng ng\u1eaft m\xe1y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail"),(0,r.kt)("td",{parentName:"tr",align:null},"Khi t\u1ed5ng \u0111\xe0i nh\u1eadn m\xe3 l\u1ed7i t\u1eeb telco")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i l\u1ed7i kh\xf4ng x\xe1c \u0111\u1ecbnh")))),(0,r.kt)("h3",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET http://{{API_HOST}}/v2/customer")),(0,r.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id Chi\u1ebfn d\u1ecbch kh\xe1ch h\xe0ng thu\u1ed9c v\u1ec1"),(0,r.kt)("td",{parentName:"tr",align:null},"aaaaaaaa-1111-2222-3333-eeeeeeee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"get-specific-customer"},"Get Specific Customer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'http://{{API_HOST}}/v2/customer/dddddddd-1111-2222-3333-eeeeeeee' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n-H 'Content-Type: application/json'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 200,\n  "content": "successfully",\n  "data": {\n    "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n    "contract_number": "ABC123",\n    "created_at": "2021-07-15T12:50:23.805319Z",\n    "customer_code": "KH01",\n    "customer_id": "dddddddd-1111-2222-3333-eeeeeeee",\n    "customer_name": "Khach Hang 01",\n    "phone_number": "0899888998",\n    "status": "NEW",\n    "updated_at": "0001-01-01T00:00:00Z",\n    "after_day": 7\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 404,\n  "content": "Not Found",\n  "error": "Not Found"\n}\n')),(0,r.kt)("p",null,"API d\xf9ng \u0111\u1ec3 l\u1ea5y th\xf4ng tin c\u1ee7a m\u1ed9t kh\xe1ch h\xe0ng c\u1ee5 th\u1ec3."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Th\xf4ng tin"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 code HTTP tr\u1ea3 v\u1ec1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\xf4ng b\xe1o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"Data tr\u1ea3 v\u1ec1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.campaign_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id c\u1ee7a chi\u1ebfn d\u1ecbch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.contract_number"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 h\u1ee3p \u0111\u1ed3ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.customer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.phone_number"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.status"),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian kh\u1edfi t\u1ea1o")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.updated_at"),(0,r.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt g\u1ea7n nh\u1ea5t")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data.after_day"),(0,r.kt)("td",{parentName:"tr",align:null},"Sau bao nhi\xeau ng\xe0y s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng g\u1ecdi l\u1ea1i")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"M\xf4 t\u1ea3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"new"),(0,r.kt)("td",{parentName:"tr",align:null},"Kh\xe1ch h\xe0ng v\u1eeba \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o m\u1edbi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queue"),(0,r.kt)("td",{parentName:"tr",align:null},"\u0110\xe3 \u0111\u01b0\u1ee3c \u0111\u01b0a v\xe0o h\xe0ng ch\u1edd \u0111\u1ec3 ti\u1ebfn h\xe0nh g\u1ecdi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"answered"),(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3 k\u1ebft n\u1ed1i v\xe0 n\xf3i chuy\u1ec7n v\u1edbi kh\xe1ch h\xe0ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"busy"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe1y b\u1eadn ho\u1eb7c kh\xe1ch h\xe0ng b\u1ea5m t\u1eeb ch\u1ed1i tr\u1ea3 l\u1eddi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no-answered"),(0,r.kt)("td",{parentName:"tr",align:null},"Kh\xe1ch h\xe0ng kh\xf4ng nghe m\xe1y, \u0111\u1ec3 h\u1ebft chu\xf4ng")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cancel"),(0,r.kt)("td",{parentName:"tr",align:null},"Ph\xeda extension, agent ch\u1ee7 \u0111\u1ed9ng ng\u1eaft m\xe1y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fail"),(0,r.kt)("td",{parentName:"tr",align:null},"Khi t\u1ed5ng \u0111\xe0i nh\u1eadn m\xe3 l\u1ed7i t\u1eeb telco")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i l\u1ed7i kh\xf4ng x\xe1c \u0111\u1ecbnh")))),(0,r.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET http://{{API_HOST}}/v2/customer/{{customer_id}}")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id kh\xe1ch h\xe0ng"),(0,r.kt)("td",{parentName:"tr",align:null},"aaaaaaaa-1111-2222-3333-eeeeeeee")))),(0,r.kt)("h2",{id:"post-customer"},"Post Customer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://{{API_HOST}}/v2/autocall/queue\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n    "customer_name": "Khach Hang 01",\n    "customer_code": "KH01",\n    "phone_number": "0899888998",\n    "contract_number": "ABC123",\n    "after_day": 7\n}\'\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 201,\n  "content": "successfully",\n  "id": "dddddddd-1111-2222-3333-eeeeeeee"\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 400,\n  "content": [\n    {\n      "phone_number": "Does not match pattern \'^(84|0[3|5|7|8|9])+([0-9]{8})$\'"\n    }\n  ],\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"API d\xf9ng \u0111\u1ec3 nh\u1eadn th\xf4ng tin c\u1ee7a m\u1ed9t kh\xe1ch h\xe0ng c\u1ee5 th\u1ec3. 7 ng\xe0y t\xednh t\u1eeb ng\xe0y th\xf4ng tin \u0111\u01b0\u1ee3c g\u1eedi sang, h\u1ec7 th\xf4ng s\u1ebd th\u1ef1c hi\u1ec7n autodialer kh\xe1ch h\xe0ng cho agent."),(0,r.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST http://{{API_HOST}}/v2/customer")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",\n  "customer_name": "Khach Hang 01",\n  "customer_code": "KH01",\n  "phone_number": "0899888998",\n  "contract_number": "ABC123",\n  "after_day": 7\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"campaign_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Id chi\u1ebfn d\u1ecbch"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer_name"),(0,r.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer_code"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 kh\xe1ch h\xe0ng"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,r.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i c\u1ee7a kh\xe1ch h\xe0ng"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract_number"),(0,r.kt)("td",{parentName:"tr",align:null},"M\xe3 h\u1ee3p \u0111\u1ed3ng"),(0,r.kt)("td",{parentName:"tr",align:null},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"after_day"),(0,r.kt)("td",{parentName:"tr",align:null},"Sau bao nhi\xeau ng\xe0y s\u1ebd \u0111\u01b0\u1ee3c t\u1ef1 \u0111\u1ed9ng g\u1ecdi l\u1ea1i. (M\u1eb7c \u0111\u1ecbnh s\u1ebd l\xe0 7 ng\xe0y)"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);