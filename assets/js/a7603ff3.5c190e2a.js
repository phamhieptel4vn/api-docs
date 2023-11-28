"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8468],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),c=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=l,s=d["".concat(u,".").concat(m)]||d[m]||k[m]||r;return n?a.createElement(s,i(i({ref:e},p),{},{components:n})):a.createElement(s,i({ref:e},p))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93434:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"Event",sidebar_position:8},i=void 0,o={unversionedId:"event",id:"event",title:"Event",description:"Get Events",source:"@site/docs/event.md",sourceDirName:".",slug:"/event",permalink:"/event",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/event.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Event",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Click-to-call",permalink:"/click2call"},next:{title:"Extension",permalink:"/extension"}},u={},c=[{value:"Get Events",id:"get-events",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Create Events",id:"create-events",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Body",id:"body",level:3},{value:"SIP Call Event",id:"sip-call-event",level:3},{value:"Delete Event",id:"delete-event",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"URL Parameters",id:"url-parameters",level:3},{value:"Event Hook Data",id:"event-hook-data",level:2},{value:"Description",id:"description",level:3},{value:"Note*",id:"note",level:2}],p={toc:c},d="wrapper";function k(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-events"},"Get Events"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'https://{{API_HOST}}/v1/event' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "id": "avavavav-1111-2222-3333-eeeeeeee",\n      "event": "hangup",\n      "callback_url": "https://webhook.demo/",\n      "callback_apikey": "foo"\n    },\n    ...\n  ],\n  "total": 1\n}\n')),(0,l.kt)("p",null,"Tr\u1ea3 v\u1ec1 c\xe1c call events c\u1ee7a tenant."),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v1/event")),(0,l.kt)("h2",{id:"create-events"},"Create Events"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L -X POST \'https://{{API_HOST}}/v1/event\' \\\n-H \'Authorization: Bearer {{TOKEN}}\' \\\n-H \'Content-Type: application/json\' \\\n--data-raw \'{\n    "callback_url" : "https://webhook.demo/",\n    "callback_apikey" : "foo",\n    "event" : "create"\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "created": true,\n  "id": "avavavav-1111-2222-3333-eeeeeeee"\n}\n')),(0,l.kt)("p",null,"T\u1ea1o Event Hook, m\u1ed7i l\u1ea7n b\u1eaft \u0111\u01b0\u1ee3c {event} t\u1ed5ng \u0111\xe0i s\u1ebd hook d\u1eef li\u1ec7u v\u1ec1 {callback_url}."),(0,l.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v1/event")),(0,l.kt)("h3",{id:"body"},"Body"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_url"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain Url m\xe0 t\u1ed5ng \u0111\xe0i s\u1ebd hook d\u1eef li\u1ec7u t\u1edbi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_apikey"),(0,l.kt)("td",{parentName:"tr",align:null},"ApiKey ho\u1eb7c access token c\u1ee7a domain (optional)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"event"),(0,l.kt)("td",{parentName:"tr",align:null},"SIP Call Event")))),(0,l.kt)("h3",{id:"sip-call-event"},"SIP Call Event"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hangup"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n khi cu\u1ed9c g\u1ecdi b\u1ecb ng\u1eaft, hu\u1ef7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ringing"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n khi cu\u1ed9c g\u1ecdi \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"answered"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n khi cu\u1ed9c g\u1ecdi \u0111\u01b0\u1ee3c nh\u1ea5c m\xe1y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cdr"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n sau khi cdr \u0111\u01b0\u1ee3c t\u1ea1o xong")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"missed"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n khi c\xf3 cu\u1ed9c g\u1ecdi inbound t\u1edbi nh\u01b0ng kh\xf4ng c\xf3 extension n\xe0o nghe m\xe1y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cdr_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ef1 ki\u1ec7n sau khi cdr c\u1ee7a autocall \u0111\u01b0\u1ee3c t\u1ea1o xong")))),(0,l.kt)("div",{class:"alert alert-danger alert-dismissible fade show",role:"alert"},"N\u1ebfu b\u1ea1n t\u1ea1o event n\u1eb1m ngo\xe0i c\xe1c event \u1edf tr\xean, h\u1ec7 th\u1ed1ng s\u1ebd kh\xf4ng nh\u1eadn di\u1ec7n \u0111\u01b0\u1ee3c n\xean s\u1ebd kh\xf4ng hook data v\u1ec1."),(0,l.kt)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},"N\u1ebfu b\u1ea1n c\u1ea7n hook event ngo\xe0i c\xe1c event \u1edf tr\xean, vui l\xf2ng g\u1eedi mail h\u1ed7 tr\u1ee3."),(0,l.kt)("h2",{id:"delete-event"},"Delete Event"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X DELETE 'https://{{API_HOST}}/v1/event/eeeeeeee-1111-2222-3333-eeeeeeee' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "deleted": true\n}\n')),(0,l.kt)("p",null,"API d\xf9ng \u0111\u1ec3 xo\xe1 m\u1ed9t event_domain."),(0,l.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v1/event/<ID>")),(0,l.kt)("h3",{id:"url-parameters"},"URL Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"ID c\u1ee7a event")))),(0,l.kt)("h2",{id:"event-hook-data"},"Event Hook Data"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "call_id": "avavavav-1111-2222-3333-eeeeeeee",\n  "sip_call_id": "dddddddd-1111-2222-3333-eeeeeeee",\n  "domain": "test.tel4vn.com",\n  "direction": "outbound",\n  "from_number": "0899888999",\n  "to_number": "101",\n  "hotline": "19001919",\n  "state": "hangup",\n  "duration": 10,\n  "billsec": 5,\n  "recording_url": "https://recording.demo/ad4c9b90-c071-405a-9723-980d2e5e1623"\n}\n')),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Id \u0111\u1ecbnh danh cu\u1ed9c g\u1ecdi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sip_call_id"),(0,l.kt)("td",{parentName:"tr",align:null},"SIP Call Id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"domain"),(0,l.kt)("td",{parentName:"tr",align:null},"Domain nh\u1eadn ho\u1eb7c th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"direction"),(0,l.kt)("td",{parentName:"tr",align:null},"H\u01b0\u1edbng cu\u1ed9c g\u1ecdi (inbound / outbound)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 g\u1ecdi. S\u1ebd l\xe0 s\u1ed1 ext n\u1ebfu cu\u1ed9c g\u1ecdi l\xe0 outbound")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 nh\u1eadn. S\u1ebd l\xe0 s\u1ed1 ext n\u1ebfu cu\u1ed9c g\u1ecdi l\xe0 inbound")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hotline"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u1ea7u s\u1ed1 nh\u1eadn ho\u1eb7c th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"ringing / answered / hangup / cdr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"T\u1ed5ng th\u1eddi l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi. (Ri\xeang s\u1ef1 ki\u1ec7n hangup)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"billsec"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi l\u01b0\u1ee3ng t\xednh t\u1eeb khi hai b\xean k\u1ebft n\u1ed1i. (Ri\xeang s\u1ef1 ki\u1ec7n hangup)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recording_url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL public \u0111\u1ec3 play file ghi \xe2m. (Ri\xeang s\u1ef1 ki\u1ec7n cdr)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"press_key"),(0,l.kt)("td",{parentName:"tr",align:null},"Ph\xedm b\u1ea5m c\u1ee7a mobile n\u1ebfu c\xf3 (Ri\xeang s\u1ef1 ki\u1ec7n cdr_autocall)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Id c\u1ee7a customer khi import v\xe0o queue (Ri\xeang s\u1ef1 ki\u1ec7n cdr_autocall)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_started"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian b\u1eaft \u0111\u1ea7u cu\u1ed9c g\u1ecdi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_answered"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian khi cu\u1ed9c g\u1ecdi k\u1ebft n\u1ed1i")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time_ended"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian k\u1ebft th\xfac cu\u1ed9c g\u1ecdi")))),(0,l.kt)("h2",{id:"note"},"Note","*"),(0,l.kt)("p",null,"M\u1ed9t s\u1ed1 th\xf4ng tin c\u1ea7n l\u01b0u \xfd khi t\xedch h\u1ee3p event:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Event ringing, answered, hangup l\xe0 c\xe1c event theo lu\u1ed3ng c\u1ee7a m\u1ed9t cu\u1ed9c g\u1ecdi."),(0,l.kt)("li",{parentName:"ul"},"Event cdr l\xe0 event s\u1ebd g\u1eedi t\u1edbi webhook sau khi t\u1ed5ng \u0111\xe0i c\u1eadp nh\u1eadt CDR."),(0,l.kt)("li",{parentName:"ul"},"\u0110\u1ed1i v\u1edbi c\xe1c case outbound: call_id c\u1ee7a c\xe1c event s\u1ebd map gi\u1ed1ng nhau do t\u1ed3n t\u1ea1i tr\xean m\u1ed9t cu\u1ed9c g\u1ecdi."),(0,l.kt)("li",{parentName:"ul"},"\u0110\u1ed1I v\u1edbi c\xe1c case inbound:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Tr\u01b0\u1eddng h\u1ee3p 1 mobile - 1 extension: call_id c\u1ee7a c\xe1c event s\u1ebd map gi\u1ed1ng nhau do t\u1ed3n t\u1ea1i tr\xean m\u1ed9t cu\u1ed9c g\u1ecdi."),(0,l.kt)("li",{parentName:"ul"},"Tr\u01b0\u1eddng h\u1ee3p 1 mobile - nhi\u1ec1u extension (Ringing, Queue, IVR): call_id c\u1ee7a c\xe1c event ringing, answered, hangup s\u1ebd gi\u1ed1ng nhau. call_id c\u1ee7a event cdr s\u1ebd kh\xe1c nhau. Do call_id c\u1ee7a c\xe1c event ringing, answered, hangup l\xe0 call_id x\u1eed l\xfd c\u1ee7a cu\u1ed9c g\u1ecdi tr\xean t\u1eebng extension, call_id c\u1ee7a event cdr l\xe0 call_id c\u1ee7a c\u1ea3 m\u1ed9t lu\u1ed3ng inbound (Ringing, Queue, IVR).")))))}k.isMDXComponent=!0}}]);