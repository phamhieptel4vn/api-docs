"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[9096],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),d=c(a),s=l,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||r;return a?n.createElement(g,i(i({ref:t},o),{},{components:a})):n.createElement(g,i({ref:t},o))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:l,i[1]=u;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},50981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const r={title:"Autodial",sidebar_position:8},i=void 0,u={unversionedId:"autodial",id:"autodial",title:"Autodial",description:"Create Campaign Autodialer",source:"@site/callcenter/autodial.md",sourceDirName:".",slug:"/autodial",permalink:"/callcenter/autodial",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Autodial",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/callcenter/template"},next:{title:"Autocall",permalink:"/callcenter/autocall"}},p={},c=[{value:"Create Campaign Autodialer",id:"create-campaign-autodialer",level:2},{value:"Update Campaign",id:"update-campaign",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Get Campaign",id:"get-campaign",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Get Campaign By Id",id:"get-campaign-by-id",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Assign Extension Of User To Campaign",id:"assign-extension-of-user-to-campaign",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Body",id:"body-1",level:3},{value:"Delete Campaign",id:"delete-campaign",level:2}],o={toc:c},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-campaign-autodialer"},"Create Campaign Autodialer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'  curl --location \'https://{{API_HOST}}/v3/campaign\' \\\n--header \'content-type: application/json\' \\\n--header \'authorization: Bearer {{TOKEN}}\' \\\n--data \'{\n    "campaign_name": "Get Log Autodilaer",\n    "type": "autodialer",\n    "ratio": 100,\n    "custom_ratio": 100,\n    "concurrent_call": 1,\n    "description": "",\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "created": true,\n    "dialplan_uuid": "07f87476-90e0-4786-b697-1cb84dd0d24c"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_name is already taken"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "campaign_name": "String length must be greater than or equal to 1"\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"update-campaign"},"Update Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "campaign_name": "Campaign Autodialer",\n    "type": "autodialer",\n    "description": "Campaign Autodialer",\n    "active": false,\n    "concurrent_call": 0,\n    "ratio": 100,\n    "carrier_uuid": "",\n    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",\n    "recall_times": 0,\n    "limit_recall_duration": 0,\n    "schedule_recall": "after",\n    "schedule_recall_duration": 0,\n    "hopper": 20,\n    "answer_callback_url": "",\n    "local_start_time": "08:00:00",\n    "local_end_time": "17:30:00",\n    "customer_order": "id",\n    "allow_manual_dial": false,\n    "allow_search_lead": false,\n    "enable_callback_alert": false,\n    "call_center_queue_strategy": "ring-all",\n    "users": null,\n    "groups": null,\n    "statuses": null\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_name is already taken"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 update chi\u1ebfn d\u1ecbch autocall."),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")),(0,l.kt)("h3",{id:"body"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "campaign_name": "Campaign Autodialer",\n    "type": "autodialer",\n    "description": "Campaign Autodialer",\n    "active": false,\n    "concurrent_call": 0,\n    "ratio": 100,\n    "carrier_uuid": "",\n    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",\n    "recall_times": 0,\n    "limit_recall_duration": 0,\n    "schedule_recall": "after",\n    "schedule_recall_duration": 0,\n    "hopper": 20,\n    "answer_callback_url": "",\n    "local_start_time": "08:00:00",\n    "local_end_time": "17:30:00",\n    "customer_order": "id",\n    "allow_manual_dial": false,\n    "allow_search_lead": false,\n    "enable_callback_alert": false,\n    "call_center_queue_strategy": "ring-all",\n    "users": null,\n    "groups": null,\n    "statuses": null\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"concurrent_call"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn dich, bao g\u1ed3m autodialer, autocall, inbound, manual"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"K\u1ecbch b\u1ea3n g\u1ecdi autocall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xf4 t\u1ea3 chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch autocall, bao g\u1ed3m autocall_voice_tts, autocall_audio va autocall_voice_otp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a carrier hay \u0111\u1ea7u s\u1ed1 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recall_times"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u1ea7n g\u1ecdi l\u1ea1i"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit_recall_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian gi\u1edbi h\u1ea1n g\u1ecdi l\u1ea1i, t\xednh theo gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule_recall"),(0,l.kt)("td",{parentName:"tr",align:null},"L\u1ecbch g\u1ecdi l\u1ea1i"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule_recall_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian l\u1ecbch g\u1ecdi l\u1ea1i, t\xednh theo ph\xfat"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch, bao g\u1ed3m stop, start, pause"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_at"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian t\u1ea1o chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updated_at"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian c\u1eadp nh\u1eadt chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean k\u1ecbch b\u1ea3n g\u1ecdi autocall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean carrier hay \u0111\u1ea7u s\u1ed1 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode_call"),(0,l.kt)("td",{parentName:"tr",align:null},"Ch\u1ebf \u0111\u1ed9 g\u1ecdi, bao g\u1ed3m direct, serial, parralel"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network"),(0,l.kt)("td",{parentName:"tr",align:null},"G\u1ecdi theo m\u1ea1ng di \u0111\u1ed9ng, bao g\u1ed3m viettel, mobi, vina, tel, offnet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run_id"),(0,l.kt)("td",{parentName:"tr",align:null},"ID c\u1ee7a chi\u1ebfn d\u1ecbch \u0111ang ch\u1ea1y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch autocall, bao g\u1ed3m autocall_voice_tts, autocall_audio va autocall_voice_otp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian timeout cu\u1ed9c g\u1ecdi, t\xednh theo gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedules"),(0,l.kt)("td",{parentName:"tr",align:null},"L\u1ecbch g\u1ecdi m\u1ed7i ng\xe0y c\u1ee7a campaign, t\xednh theo \u0111\u01a1n v\u1ecb nanosecond gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priority_recall"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u1ed9 \u01b0u ti\xean g\u1ecdi l\u1ea1i c\u1ee7a campaign, bao g\u1ed3m normal, recall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recall_status"),(0,l.kt)("td",{parentName:"tr",align:null},"C\xe1c tr\u1ea1ng th\xe1i g\u1ecdi l\u1ea1i c\u1ee7a campaign"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL callback khi c\xf3 CDR cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"get-campaign"},"Get Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/campaign' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n            "campaign_name": "Campaign Autodialer",\n            "type": "autodialer",\n            "description": "Campaign Autodialer",\n            "active": false,\n            "concurrent_call": 0,\n            "ratio": 100,\n            "carrier_uuid": "",\n            "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",\n            "template_uuid": "",\n            "recall_times": 0,\n            "limit_recall_duration": 0,\n            "schedule_recall": "after",\n            "schedule_recall_duration": 0,\n            "hopper": 20,\n            "answer_callback_url": "",\n            "local_start_time": "08:00:00",\n            "local_end_time": "17:30:00",\n            "customer_order": "id",\n            "allow_manual_dial": false,\n            "allow_search_lead": false,\n            "enable_callback_alert": false,\n            "default_list_uuid": "",\n            "script_uuid": "",\n            "status": "",\n            "created_at": "2023-03-06T17:57:54.65043+07:00",\n            "updated_at": "2023-03-06T21:48:05.663105+07:00",\n            "call_center_queue_strategy": "ring-all",\n            "template_name": "",\n            "carrier_name": "",\n            "mode_call": "",\n            "network": {\n                "viettel": 0,\n                "mobi": 0,\n                "vina": 0,\n                "tel": 0,\n                "offnet": 0\n            },\n            "run_id": "",\n            "type_autocall": "",\n            "call_timeout": 0,\n            "domain_name": "",\n            "users": null,\n            "groups": null,\n            "statuses": null,\n            "schedules": null,\n            "priority_recall": "",\n            "recall_status": null,\n            "enable_encrypt": false,\n            "callback_url": "",\n            "orig_campaign_uuid": ""\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 1\n}\n')),(0,l.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/template")),(0,l.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch bao g\u1ed3m autocall, autodialer, inbound v\xe0 manual"),(0,l.kt)("td",{parentName:"tr",align:null},"autocall")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h2",{id:"get-campaign-by-id"},"Get Campaign By Id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "campaign_name": "Campaign Autodialer",\n    "type": "autodialer",\n    "description": "Campaign Autodialer",\n    "active": false,\n    "concurrent_call": 0,\n    "ratio": 100,\n    "carrier_uuid": "",\n    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",\n    "template_uuid": "",\n    "recall_times": 0,\n    "limit_recall_duration": 0,\n    "schedule_recall": "after",\n    "schedule_recall_duration": 0,\n    "hopper": 20,\n    "answer_callback_url": "",\n    "local_start_time": "08:00:00",\n    "local_end_time": "17:30:00",\n    "customer_order": "id",\n    "allow_manual_dial": false,\n    "allow_search_lead": false,\n    "enable_callback_alert": false,\n    "default_list_uuid": "",\n    "script_uuid": "",\n    "status": "",\n    "created_at": "2023-03-06T17:57:54.65043+07:00",\n    "updated_at": "2023-03-06T21:48:05.663105+07:00",\n    "call_center_queue_strategy": "ring-all",\n    "template_name": "",\n    "carrier_name": "",\n    "mode_call": "",\n    "network": {\n        "viettel": 0,\n        "mobi": 0,\n        "vina": 0,\n        "tel": 0,\n        "offnet": 0\n    },\n    "run_id": "",\n    "type_autocall": "",\n    "call_timeout": 0,\n    "domain_name": "",\n    "users": null,\n    "groups": null,\n    "statuses": null,\n    "schedules": null,\n    "priority_recall": "",\n    "recall_status": null,\n    "enable_encrypt": false,\n    "callback_url": "",\n    "orig_campaign_uuid": ""\n}\n')),(0,l.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")),(0,l.kt)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a chi\u1ebfn d\u1ecbch")))),(0,l.kt)("h2",{id:"assign-extension-of-user-to-campaign"},"Assign Extension Of User To Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PUT 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07/assign_extension' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--header 'Content-Type: application/json' \\\n--data '{\n    \"extensions\" : [\n        \"102\",\"103\",\"101\"\n    ]\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "users": [\n        {\n            "extension": "102",\n            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b"\n        },\n        {\n            "extension": "103",\n            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae"\n        },\n        {\n            "extension": "101",\n            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e"\n        }\n    ]\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "extensions": "Invalid type. Expected: array, given: null"\n        }\n    ]\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\n## Patch Campagin\n\n```shell\ncurl --location --request PATCH 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07/active' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--data '{\n  \"active\": false\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "active": false,\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not Found"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "active is missing"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i tr\u1ea1ng th\xe1i chi\u1ebfn d\u1ecbch t\u1eeb Active sang Deactive v\xe0 ng\u01b0\u1ee3c l\u1ea1i."),(0,l.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PATCH https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}/active")),(0,l.kt)("h3",{id:"body-1"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "active": false\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"active"),(0,l.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch, bao g\u1ed3m true v\xe0 false"),(0,l.kt)("td",{parentName:"tr",align:null},"x")))),(0,l.kt)("h2",{id:"delete-campaign"},"Delete Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign must be deactive"\n}\n')),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not Found"\n}\n')),(0,l.kt)("p",{parentName:"blockquote"},"API n\xe0y d\xf9ng \u0111\u1ec3 x\xf3a chi\u1ebfn d\u1ecbch."),(0,l.kt)("h3",{parentName:"blockquote",id:"http-request-4"},"HTTP Request")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")))}m.isMDXComponent=!0}}]);