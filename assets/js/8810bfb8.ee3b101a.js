"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[2158],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>_});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var c=n.createContext({}),o=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),p=o(a),s=l,_=p["".concat(c,".").concat(s)]||p[s]||m[s]||r;return a?n.createElement(_,i(i({ref:e},d),{},{components:a})):n.createElement(_,i({ref:e},d))}));function _(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[p]="string"==typeof t?t:l,i[1]=u;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},56265:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var n=a(87462),l=(a(67294),a(3905));const r={title:"Autocall",sidebar_position:9},i=void 0,u={unversionedId:"autocall",id:"autocall",title:"Autocall",description:"Create Campaign Autocall",source:"@site/callcenter/autocall.md",sourceDirName:".",slug:"/autocall",permalink:"/callcenter/autocall",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Autocall",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Autodial",permalink:"/callcenter/autodial"},next:{title:"Carrier",permalink:"/callcenter/carrier"}},c={},o=[{value:"Create Campaign Autocall",id:"create-campaign-autocall",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Update Campaign",id:"update-campaign",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Body",id:"body-1",level:3},{value:"Get Campaign",id:"get-campaign",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Get Campaign By Id",id:"get-campaign-by-id",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Patch Campagin",id:"patch-campagin",level:2},{value:"HTTP Request",id:"http-request-4",level:3},{value:"Body",id:"body-2",level:3},{value:"Delete Campaign",id:"delete-campaign",level:2}],d={toc:o},p="wrapper";function m(t){let{components:e,...a}=t;return(0,l.kt)(p,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-campaign-autocall"},"Create Campaign Autocall"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'https://{{API_HOST}}/v3/campaign\' \\\n--header \'Content-type: application/json\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--data \'{\n    "campaign_name": "VoiceOTP",\n    "type": "autocall",\n    "concurrent_call": 1,\n    "template_uuid": "",\n    "description": "",\n    "type_autocall": "autocall_voice_tts"\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "campaign_uuid": "avavavav-1111-2222-3333-eeeeeeee",\n  "created": true\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_name is already taken"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "type": "type must be one of the following: \\"autodialer\\", \\"autocall\\", \\"inbound\\", \\"manual\\""\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 t\u1ea1o chi\u1ebfn d\u1ecbch autocall."),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/campaign")),(0,l.kt)("h3",{id:"body"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "campaign_name": "autocall_campaign",\n  "concurrent_call": 2\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"concurrent_call"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn dich, bao g\u1ed3m autodialer, autocall, inbound, manual"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch autocall, bao g\u1ed3m autocall_voice_tts, autocall_audio va autocall_voice_otp"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"update-campaign"},"Update Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'https://{{API_HOST}}/v3/campaign/c2da23c0-9739-4287-828a-7b15cf0fb19e\' \\\n--header \'Content-type: application/json\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--data \'{\n    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",\n    "campaign_name": "AutocallAudio",\n    "type": "autocall",\n    "description": "",\n    "active": true,\n    "concurrent_call": 5,\n    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",\n    "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",\n    "recall_times": 3,\n    "limit_recall_duration": 0,\n    "schedule_recall": "minute",\n    "schedule_recall_duration": 1,\n    "answer_callback_url": "",\n    "status": "stop",\n    "created_at": "2023-03-06T16:27:17.784242+07:00",\n    "updated_at": "2023-03-06T16:27:17.784242+07:00",\n    "template_name": "",\n    "carrier_name": "",\n    "mode_call": "direct",\n    "network": {\n        "viettel": 0,\n        "mobi": 0,\n        "vina": 0,\n        "tel": 0,\n        "offnet": 0\n    },\n    "run_id": "",\n    "type_autocall": "autocall_audio",\n    "call_timeout": 60,\n    "domain_name": "",\n    "users": [],\n    "groups": [],\n    "statuses": [],\n    "schedules": [\n        {\n            "monday_start_time": 28800000000000,\n            "monday_end_time": 75600000000000,\n            "tuesday_start_time": 28800000000000,\n            "tuesday_end_time": 75600000000000,\n            "wednesday_start_time": 28800000000000,\n            "wednesday_end_time": 75600000000000,\n            "thursday_start_time": 28800000000000,\n            "thursday_end_time": 75600000000000,\n            "friday_start_time": 28800000000000,\n            "friday_end_time": 75600000000000,\n            "saturday_start_time": 28800000000000,\n            "saturday_end_time": 75600000000000,\n            "sunday_start_time": 28800000000000,\n            "sunday_end_time": 75600000000000\n        }\n    ],\n    "priority_recall": "normal",\n    "recall_status": [\n        "busy",\n        "failed",\n        "no-answered",\n        "not-available",\n        "voicemail",\n        "invalid-number",\n        "phone-block",\n        "congestion"\n    ],\n    "enable_encrypt": false,\n    "callback_url": "",\n    "orig_campaign_uuid": ""\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign_name is already taken"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 update chi\u1ebfn d\u1ecbch autocall."),(0,l.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")),(0,l.kt)("h3",{id:"body-1"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",\n    "campaign_name": "AutocallAudio",\n    "type": "autocall",\n    "description": "",\n    "active": true,\n    "concurrent_call": 5,\n    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",\n    "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",\n    "recall_times": 3,\n    "limit_recall_duration": 0,\n    "schedule_recall": "minute",\n    "schedule_recall_duration": 1,\n    "status": "stop",\n    "created_at": "2023-03-06T16:27:17.784242+07:00",\n    "updated_at": "2023-03-06T16:27:17.784242+07:00",\n    "template_name": "",\n    "carrier_name": "",\n    "mode_call": "direct",\n    "network": {\n        "viettel": 0,\n        "mobi": 0,\n        "vina": 0,\n        "tel": 0,\n        "offnet": 0\n    },\n    "run_id": "",\n    "type_autocall": "autocall_audio",\n    "call_timeout": 60,\n    "schedules": [\n        {\n            "monday_start_time": 28800000000000,\n            "monday_end_time": 75600000000000,\n            "tuesday_start_time": 28800000000000,\n            "tuesday_end_time": 75600000000000,\n            "wednesday_start_time": 28800000000000,\n            "wednesday_end_time": 75600000000000,\n            "thursday_start_time": 28800000000000,\n            "thursday_end_time": 75600000000000,\n            "friday_start_time": 28800000000000,\n            "friday_end_time": 75600000000000,\n            "saturday_start_time": 28800000000000,\n            "saturday_end_time": 75600000000000,\n            "sunday_start_time": 28800000000000,\n            "sunday_end_time": 75600000000000\n        }\n    ],\n    "priority_recall": "normal",\n    "recall_status": [\n        "busy",\n        "failed",\n        "no-answered",\n        "not-available",\n        "voicemail",\n        "invalid-number",\n        "phone-block",\n        "congestion"\n    ],\n    "callback_url": ""\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"concurrent_call"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng cu\u1ed9c g\u1ecdi \u0111\u1ed3ng th\u1eddi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn dich, bao g\u1ed3m autodialer, autocall, inbound, manual"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"K\u1ecbch b\u1ea3n g\u1ecdi autocall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xf4 t\u1ea3 chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch autocall, bao g\u1ed3m autocall_voice_tts, autocall_audio va autocall_voice_otp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a carrier hay \u0111\u1ea7u s\u1ed1 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recall_times"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u1ea7n g\u1ecdi l\u1ea1i"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit_recall_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian gi\u1edbi h\u1ea1n g\u1ecdi l\u1ea1i, t\xednh theo gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule_recall"),(0,l.kt)("td",{parentName:"tr",align:null},"L\u1ecbch g\u1ecdi l\u1ea1i"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedule_recall_duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian l\u1ecbch g\u1ecdi l\u1ea1i, t\xednh theo ph\xfat"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch, bao g\u1ed3m stop, start, pause"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"created_at"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian t\u1ea1o chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"updated_at"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian c\u1eadp nh\u1eadt chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"template_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean k\u1ecbch b\u1ea3n g\u1ecdi autocall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"carrier_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean carrier hay \u0111\u1ea7u s\u1ed1 th\u1ef1c hi\u1ec7n cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode_call"),(0,l.kt)("td",{parentName:"tr",align:null},"Ch\u1ebf \u0111\u1ed9 g\u1ecdi, bao g\u1ed3m direct, serial, parralel"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"network"),(0,l.kt)("td",{parentName:"tr",align:null},"G\u1ecdi theo m\u1ea1ng di \u0111\u1ed9ng, bao g\u1ed3m viettel, mobi, vina, tel, offnet"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run_id"),(0,l.kt)("td",{parentName:"tr",align:null},"ID c\u1ee7a chi\u1ebfn d\u1ecbch \u0111ang ch\u1ea1y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type_autocall"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch autocall, bao g\u1ed3m autocall_voice_tts, autocall_audio va autocall_voice_otp"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\u1eddi gian timeout cu\u1ed9c g\u1ecdi, t\xednh theo gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedules"),(0,l.kt)("td",{parentName:"tr",align:null},"L\u1ecbch g\u1ecdi m\u1ed7i ng\xe0y c\u1ee7a campaign, t\xednh theo \u0111\u01a1n v\u1ecb nanosecond gi\xe2y"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"priority_recall"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u1ed9 \u01b0u ti\xean g\u1ecdi l\u1ea1i c\u1ee7a campaign, bao g\u1ed3m normal, recall"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"recall_status"),(0,l.kt)("td",{parentName:"tr",align:null},"C\xe1c tr\u1ea1ng th\xe1i g\u1ecdi l\u1ea1i c\u1ee7a campaign"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callback_url"),(0,l.kt)("td",{parentName:"tr",align:null},"URL callback khi c\xf3 CDR cu\u1ed9c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"get-campaign"},"Get Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/campaign' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",\n            "campaign_name": "AutocallAudio",\n            "type": "autocall",\n            "description": "",\n            "active": true,\n            "concurrent_call": 5,\n            "ratio": 100,\n            "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",\n            "call_center_queue_uuid": "",\n            "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",\n            "recall_times": 3,\n            "limit_recall_duration": 0,\n            "schedule_recall": "minute",\n            "schedule_recall_duration": 1,\n            "hopper": 0,\n            "answer_callback_url": "",\n            "local_start_time": "",\n            "local_end_time": "",\n            "customer_order": "",\n            "allow_manual_dial": false,\n            "allow_search_lead": false,\n            "enable_callback_alert": false,\n            "default_list_uuid": "",\n            "script_uuid": "",\n            "status": "stop",\n            "created_at": "2023-03-06T16:27:17.784242+07:00",\n            "updated_at": "2023-03-06T18:27:35.482259+07:00",\n            "call_center_queue_strategy": "",\n            "template_name": "thong_bao_no_cuoc_01",\n            "carrier_name": "Billing",\n            "mode_call": "direct",\n            "network": {\n                "viettel": 0,\n                "mobi": 0,\n                "vina": 0,\n                "tel": 0,\n                "offnet": 0\n            },\n            "run_id": "",\n            "type_autocall": "autocall_audio",\n            "call_timeout": 60,\n            "domain_name": "",\n            "users": null,\n            "groups": null,\n            "statuses": null,\n            "schedules": null,\n            "priority_recall": "normal",\n            "recall_status": [\n                "busy",\n                "failed",\n                "no-answered",\n                "not-available",\n                "voicemail",\n                "invalid-number",\n                "phone-block",\n                "congestion"\n            ],\n            "enable_encrypt": false,\n            "callback_url": "",\n            "orig_campaign_uuid": ""\n        },\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",\n            "campaign_name": "AutocallTTS",\n            "type": "autocall",\n            "description": "",\n            "active": true,\n            "concurrent_call": 1,\n            "ratio": 100,\n            "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",\n            "call_center_queue_uuid": "",\n            "template_uuid": "",\n            "recall_times": 0,\n            "limit_recall_duration": 0,\n            "schedule_recall": "after",\n            "schedule_recall_duration": 0,\n            "hopper": 20,\n            "answer_callback_url": "",\n            "local_start_time": "00:00:00",\n            "local_end_time": "23:59:59",\n            "customer_order": "id",\n            "allow_manual_dial": true,\n            "allow_search_lead": true,\n            "enable_callback_alert": true,\n            "default_list_uuid": "",\n            "script_uuid": "",\n            "status": "stop",\n            "created_at": "2023-03-06T16:27:04.979847+07:00",\n            "updated_at": "2023-03-06T16:27:04.979847+07:00",\n            "call_center_queue_strategy": "",\n            "template_name": "",\n            "carrier_name": "Billing",\n            "mode_call": "direct",\n            "network": {\n                "viettel": 0,\n                "mobi": 0,\n                "vina": 0,\n                "tel": 0,\n                "offnet": 0\n            },\n            "run_id": "",\n            "type_autocall": "autocall_voice_tts",\n            "call_timeout": 60,\n            "domain_name": "",\n            "users": null,\n            "groups": null,\n            "statuses": null,\n            "schedules": null,\n            "priority_recall": "normal",\n            "recall_status": [\n                "answered",\n                "busy",\n                "failed",\n                "no-answered",\n                "not-available",\n                "voicemail",\n                "invalid-number",\n                "phone-block",\n                "congestion"\n            ],\n            "enable_encrypt": false,\n            "callback_url": "",\n            "orig_campaign_uuid": ""\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 2\n}\n')),(0,l.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/template")),(0,l.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"Lo\u1ea1i chi\u1ebfn d\u1ecbch bao g\u1ed3m autocall, autodialer, inbound v\xe0 manual"),(0,l.kt)("td",{parentName:"tr",align:null},"autocall")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h2",{id:"get-campaign-by-id"},"Get Campaign By Id"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'https://{{API_HOST}}/v3/campaign/853b76cc-bffb-4d1b-9f9e-19b1a0fe7894' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n    "campaign_uuid": "853b76cc-bffb-4d1b-9f9e-19b1a0fe7894",\n    "campaign_name": "VoiceOTP110",\n    "type": "autocall",\n    "description": "",\n    "active": true,\n    "concurrent_call": 11,\n    "ratio": 100,\n    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",\n    "call_center_queue_uuid": "",\n    "template_uuid": "",\n    "recall_times": 0,\n    "limit_recall_duration": 0,\n    "schedule_recall": "after",\n    "schedule_recall_duration": 0,\n    "hopper": 20,\n    "answer_callback_url": "",\n    "local_start_time": "00:00:00",\n    "local_end_time": "23:59:59",\n    "customer_order": "id",\n    "allow_manual_dial": true,\n    "allow_search_lead": true,\n    "enable_callback_alert": true,\n    "default_list_uuid": "",\n    "script_uuid": "",\n    "status": "stop",\n    "created_at": "2023-03-06T17:06:15.737234+07:00",\n    "updated_at": "2023-03-06T17:06:15.737234+07:00",\n    "call_center_queue_strategy": "",\n    "template_name": "",\n    "carrier_name": "",\n    "mode_call": "direct",\n    "network": {\n        "viettel": 0,\n        "mobi": 0,\n        "vina": 0,\n        "tel": 0,\n        "offnet": 0\n    },\n    "run_id": "",\n    "type_autocall": "autocall_voice_tts",\n    "call_timeout": 60,\n    "domain_name": "",\n    "users": null,\n    "groups": null,\n    "statuses": null,\n    "schedules": [\n        {\n            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",\n            "id": "885a7085-0404-484f-9c8f-3dd19c04bc8f",\n            "campaign_uuid": "853b76cc-bffb-4d1b-9f9e-19b1a0fe7894",\n            "monday_start_time": 28800000000000,\n            "monday_end_time": 75600000000000,\n            "tuesday_start_time": 28800000000000,\n            "tuesday_end_time": 75600000000000,\n            "wednesday_start_time": 28800000000000,\n            "wednesday_end_time": 75600000000000,\n            "thursday_start_time": 28800000000000,\n            "thursday_end_time": 75600000000000,\n            "friday_start_time": 28800000000000,\n            "friday_end_time": 75600000000000,\n            "saturday_start_time": 28800000000000,\n            "saturday_end_time": 75600000000000,\n            "sunday_start_time": 28800000000000,\n            "sunday_end_time": 75600000000000\n        }\n    ],\n    "priority_recall": "normal",\n    "recall_status": [\n        "answered",\n        "busy",\n        "failed",\n        "no-answered",\n        "not-available",\n        "voicemail",\n        "invalid-number",\n        "phone-block",\n        "congestion"\n    ],\n    "enable_encrypt": false,\n    "callback_url": "",\n    "orig_campaign_uuid": ""\n}\n')),(0,l.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")),(0,l.kt)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a chi\u1ebfn d\u1ecbch")))),(0,l.kt)("h2",{id:"patch-campagin"},"Patch Campagin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request PATCH 'https://{{API_HOST}}/v3/campaign/5ec47358-d062-4385-9fe7-b5e571055f01/active' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--data '{\n  \"active\": false\n}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "active": false,\n    "campaign_uuid": "5ec47358-d062-4385-9fe7-b5e571055f01"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not Found"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "active is missing"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 chuy\u1ec3n \u0111\u1ed5i tr\u1ea1ng th\xe1i chi\u1ebfn d\u1ecbch t\u1eeb Active sang Deactive v\xe0 ng\u01b0\u1ee3c l\u1ea1i."),(0,l.kt)("h3",{id:"http-request-4"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PATCH https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}/active")),(0,l.kt)("h3",{id:"body-2"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "active": false\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a chi\u1ebfn d\u1ecbch"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"active"),(0,l.kt)("td",{parentName:"tr",align:null},"Tr\u1ea1ng th\xe1i c\u1ee7a chi\u1ebfn d\u1ecbch, bao g\u1ed3m true v\xe0 false"),(0,l.kt)("td",{parentName:"tr",align:null},"x")))),(0,l.kt)("h2",{id:"delete-campaign"},"Delete Campaign"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://{{API_HOST}}/v3/campaign/4be67f66-4228-480e-b86d-8f333dc46c3c' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "campaign_uuid": "4be67f66-4228-480e-b86d-8f333dc46c3c"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "campaign must be deactive"\n}\n')),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not Found"\n}\n')),(0,l.kt)("p",{parentName:"blockquote"},"API n\xe0y d\xf9ng \u0111\u1ec3 x\xf3a chi\u1ebfn d\u1ecbch."),(0,l.kt)("h3",{parentName:"blockquote",id:"http-request-5"},"HTTP Request")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}")))}m.isMDXComponent=!0}}]);