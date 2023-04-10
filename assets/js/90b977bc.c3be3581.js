"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8806],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>k});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},o=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=l,k=m["".concat(u,".").concat(s)]||m[s]||c[s]||r;return n?a.createElement(k,d(d({ref:e},o),{},{components:n})):a.createElement(k,d({ref:e},o))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,d=new Array(r);d[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[m]="string"==typeof t?t:l,d[1]=i;for(var p=2;p<r;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},91332:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Lead",sidebar_position:15},d=void 0,i={unversionedId:"lead",id:"lead",title:"Lead",description:"Create Lead",source:"@site/callcenter/lead.md",sourceDirName:".",slug:"/lead",permalink:"/callcenter/lead",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Lead",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"List",permalink:"/callcenter/list"},next:{title:"Report",permalink:"/callcenter/report"}},u={},p=[{value:"Create Lead",id:"create-lead",level:2},{value:"HTTP Request",id:"http-request",level:3},{value:"Body",id:"body",level:3},{value:"Post Lead With CSV File",id:"post-lead-with-csv-file",level:2},{value:"HTTP Request",id:"http-request-1",level:3},{value:"Body",id:"body-1",level:3},{value:"Post Lead Multiple",id:"post-lead-multiple",level:2},{value:"HTTP Request",id:"http-request-2",level:3},{value:"Body",id:"body-2",level:3},{value:"Get Lead",id:"get-lead",level:2},{value:"HTTP Request",id:"http-request-3",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Get Leads by ID",id:"get-leads-by-id",level:2},{value:"HTTP Request",id:"http-request-4",level:3},{value:"Query Parameters",id:"query-parameters-1",level:3},{value:"Update Lead",id:"update-lead",level:2},{value:"HTTP Request",id:"http-request-5",level:3},{value:"Body",id:"body-3",level:3},{value:"Delete Lead",id:"delete-lead",level:2},{value:"HTTP Request",id:"http-request-6",level:3}],o={toc:p},m="wrapper";function c(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"create-lead"},"Create Lead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'https://{{API_HOST}}/v3/lead\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",\n    "lead_name": "Demo01",\n    "lead_code": "DP01",\n    "phone_number": "0349719999"\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "created": true,\n    "lead_uuid": "152a5c45-68f0-4ee7-85c0-32ae87bb611b"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "list_uuid": "String length must be greater than or equal to 36"\n        }\n    ]\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "phone_number": "String length must be greater than or equal to 1"\n        },\n        {\n            "phone_number": "Does not match pattern \'^(84|0[3|5|7|8|9])+([0-9]{8})$\'"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 t\u1ea1o lead v\xe0 g\xe1n v\xe0o danh s\xe1ch \u0111\xe3 c\xf3 s\u1eb5n."),(0,l.kt)("h3",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/lead")),(0,l.kt)("h3",{id:"body"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",\n    "lead_name": "Demo01",\n    "lead_code": "DP01",\n    "phone_number": "0349719999"\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a danh s\xe1ch c\u1ea7n g\xe1n lead v\xe0o"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_code"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xe3 kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contract_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 h\u1ee3p \u0111\u1ed3ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_issued_at"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u01a1i c\u1ea5p CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_issued_on"),(0,l.kt)("td",{parentName:"tr",align:null},"Ng\xe0y c\u1ea5p CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u1ecba ch\u1ec9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"province"),(0,l.kt)("td",{parentName:"tr",align:null},"T\u1ec9nh/Th\xe0nh ph\u1ed1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"district"),(0,l.kt)("td",{parentName:"tr",align:null},"Qu\u1eadn/Huy\u1ec7n"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ward"),(0,l.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u1eddng/X\xe3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,l.kt)("td",{parentName:"tr",align:null},"Ng\xe0y sinh"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"additional"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\xf4ng tin b\u1ed5 sung"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gender"),(0,l.kt)("td",{parentName:"tr",align:null},"Gi\u1edbi t\xednh"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"post-lead-with-csv-file"},"Post Lead With CSV File"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/lead/file' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--form 'file=@\"/D:/DOCUMENT/Template_Upload_Lead/template_lead_viettel.csv\"' \\\n--form 'list_uuid=\"c4869e79-f0fa-4c6a-9410-bc0defac375a\"'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "file upload is processing"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "list_uuid is missing"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "http: no such file"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 upload lead qua file csv v\xe0 g\xe1n v\xe0o danh s\xe1ch \u0111\xe3 c\xf3 s\u1eb5n."),(0,l.kt)("h3",{id:"http-request-1"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/lead")),(0,l.kt)("h3",{id:"body-1"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-form-data"},"--form 'file=@\"/D:/DOCUMENT/Template_Upload_Lead/template_lead_viettel.csv\"' \\\n--form 'list_uuid=\"c4869e79-f0fa-4c6a-9410-bc0defac375a\"'\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a danh s\xe1ch c\u1ea7n g\xe1n lead v\xe0o"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u01b0\u1eddng d\u1eabn file c\u1ea7n upload l\u1ea1i m\xe1y local"),(0,l.kt)("td",{parentName:"tr",align:null},"x")))),(0,l.kt)("h2",{id:"post-lead-multiple"},"Post Lead Multiple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'https://{{API_HOST}}/v3/lead/multi\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "list_uuid": "a7d4d5d8-751f-4502-b175-a988ac022717",\n    "data": [\n        {\n            "lead_name": "Ph\xf9ng Ph\xf9ng",\n            "phone_number": "0949719066",\n            "contract_number": "ABC123",\n            "after_day": 0\n        },\n        {\n            "lead_name": "Lu\xe2n Lu\xe2n",\n            "phone_number": "0934567489",\n            "contract_number": "ABCXYZ",\n            "after_day": 0\n        }\n    ]\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "success",\n    "total_insert": 2\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "list_uuid is missing"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 t\u1ea1o c\xf9ng l\xfac nhi\u1ec1u lead b\u1eb1ng m\u1ed9t request v\xe0 g\xe1n v\xe0o danh s\xe1ch \u0111\xe3 c\xf3 s\u1eb5n."),(0,l.kt)("h3",{id:"http-request-2"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST https://{{API_HOST}}/v3/lead")),(0,l.kt)("h3",{id:"body-2"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "list_uuid": "a7d4d5d8-751f-4502-b175-a988ac022717",\n    "data": [\n        {\n            "lead_name": "Ph\xf9ng Ph\xf9ng",\n            "phone_number": "0949719066",\n            "contract_number": "ABC123",\n            "after_day": 0\n        },\n        {\n            "lead_name": "Lu\xe2n Lu\xe2n",\n            "phone_number": "0934567489",\n            "contract_number": "ABCXYZ",\n            "after_day": 0\n        }\n    ]\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a danh s\xe1ch c\u1ea7n g\xe1n lead v\xe0o"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"C\xe1c d\u1eef li\u1ec7u c\u1ea7n truy\u1ec1n v\xe0o"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.lead_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.phone_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.contract_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 h\u1ee3p \u0111\u1ed3ng kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data.after_day"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 ng\xe0y sau khi t\u1ea1o lead s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"get-lead"},"Get Lead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'https://{{API_HOST}}/v3/lead' \\\n--header 'Authorization: Bearer {{TOKEN}}' \\\n--data ''\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [\n        {\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "lead_uuid": "3c13548f-b3b9-4114-9ac3-2a8867d6529c",\n            "lead_name": "Demo02",\n            "lead_code": "DP02",\n            "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",\n            "phone_number": "0349719988",\n            "contract_number": "",\n            "status": "NEW",\n            "alt_status": "new",\n            "identity_number": "",\n            "identity_issued_at": "",\n            "identity_issued_on": "0001-01-01T00:00:00Z",\n            "address": "",\n            "province": "",\n            "district": "",\n            "ward": "",\n            "date_of_birth": "",\n            "additional": "",\n            "after_day": 0,\n            "called_count": 0,\n            "last_call_time": "1970-01-01T08:00:01+08:00",\n            "created_at": "2023-03-08T15:57:12.250818+07:00",\n            "updated_at": "2023-03-08T15:57:12.250818+07:00",\n            "hopper_id": 0,\n            "comment": "",\n            "ref_id": "",\n            "ref_code": "",\n            "gender": "",\n            "other_identity_number": "",\n            "other_identity_issued_at": "",\n            "other_identity_issued_on": "0001-01-01T00:00:00Z",\n            "network": "",\n            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n            "campaign_name": "Campaign Autodialer",\n            "list_name": "List Autodialer",\n            "assign_user_uuid": "",\n            "assign_username": ""\n        },\n        {\n            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n            "lead_uuid": "152a5c45-68f0-4ee7-85c0-32ae87bb611b",\n            "lead_name": "Demo01",\n            "lead_code": "DP01",\n            "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",\n            "phone_number": "0349719999",\n            "contract_number": "ABC123",\n            "status": "NEW",\n            "alt_status": "new",\n            "identity_number": "",\n            "identity_issued_at": "",\n            "identity_issued_on": "0001-01-01T00:00:00Z",\n            "address": "",\n            "province": "",\n            "district": "",\n            "ward": "",\n            "date_of_birth": "",\n            "additional": "",\n            "after_day": 0,\n            "called_count": 0,\n            "last_call_time": "1970-01-01T08:00:01+08:00",\n            "created_at": "2023-03-08T15:27:00.709533+07:00",\n            "updated_at": "2023-03-08T15:27:00.709533+07:00",\n            "hopper_id": 0,\n            "comment": "",\n            "ref_id": "",\n            "ref_code": "",\n            "gender": "",\n            "other_identity_number": "",\n            "other_identity_issued_at": "",\n            "other_identity_issued_on": "0001-01-01T00:00:00Z",\n            "network": "",\n            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n            "campaign_name": "Campaign Autodialer",\n            "list_name": "List Autodialer",\n            "assign_user_uuid": "",\n            "assign_username": ""\n        }\n    ],\n    "limit": 10,\n    "offset": 0,\n    "total": 2\n}\n')),(0,l.kt)("h3",{id:"http-request-3"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/lead'")),(0,l.kt)("h3",{id:"query-parameters"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a danh s\xe1ch c\u1ea7n l\u1ea5y lead"),(0,l.kt)("td",{parentName:"tr",align:null},"c4869e79-f0fa-4c6a-9410-bc0defac375a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaign_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a chi\u1ebfn d\u1ecbch c\u1ea7n l\u1ea5y lead"),(0,l.kt)("td",{parentName:"tr",align:null},"7bbe986b-8a6e-404c-840b-781102b5aa07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xecm ki\u1ebfm theo s\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null},"0349719999")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 l\u01b0\u1ee3ng record tr\u1ea3 v\u1ec1"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"V\u1ecb tr\xed b\u1eaft \u0111\u1ea7u khi query"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h2",{id:"get-leads-by-id"},"Get Leads by ID"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -X GET 'https://{{API_HOST}}/v3/lead/307c2fe7-d075-493c-b8d6-b11195caec41' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",\n    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",\n    "lead_name": "TestNe",\n    "lead_code": "TestNe",\n    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",\n    "phone_number": "03497191211",\n    "contract_number": "NVDP12345",\n    "status": "NEW",\n    "alt_status": "new",\n    "identity_number": "",\n    "identity_issued_at": "",\n    "identity_issued_on": "0001-01-01T00:00:00Z",\n    "address": "",\n    "province": "",\n    "district": "",\n    "ward": "",\n    "date_of_birth": "",\n    "additional": "{\\"after_day\\":0,\\"contract_number\\":\\"\\",\\"lead_code\\":\\"\\",\\"lead_name\\":\\"TestNe\\",\\"phone_number\\":\\"03497191211\\"}",\n    "after_day": 0,\n    "called_count": 0,\n    "last_call_time": "1970-01-01T08:00:01+08:00",\n    "created_at": "2023-03-08T07:16:40.446072+07:00",\n    "updated_at": "2023-03-08T09:46:31.912271+07:00",\n    "hopper_id": 0,\n    "comment": "",\n    "ref_id": "",\n    "ref_code": "",\n    "gender": "",\n    "other_identity_number": "",\n    "other_identity_issued_at": "",\n    "other_identity_issued_on": "0001-01-01T00:00:00Z",\n    "network": "viettel",\n    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",\n    "campaign_name": "Campaign Autodialer",\n    "list_name": "List Autodialer",\n    "assign_user_uuid": "",\n    "assign_username": ""\n}\n')),(0,l.kt)("h3",{id:"http-request-4"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET https://{{API_HOST}}/v3/lead/{{lead_uuid}}")),(0,l.kt)("h3",{id:"query-parameters-1"},"Query Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a lead")))),(0,l.kt)("h2",{id:"update-lead"},"Update Lead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request PUT \'https://{{API_HOST}}/v3/lead/307c2fe7-d075-493c-b8d6-b11195caec41\' \\\n--header \'Authorization: Bearer {{TOKEN}}\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",\n    "lead_name": "TestNe",\n    "lead_code": "TestNe",\n    "phone_number": "03497191211",\n    "contract_number": "NVDP12345",\n    "identity_number": "",\n    "identity_issued_at": "",\n    "identity_issued_on": "0001-01-01T00:00:00Z",\n    "address": "",\n    "province": "",\n    "district": "",\n    "ward": "",\n    "date_of_birth": "",\n    "additional": ""\n}\'\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": [\n        {\n            "(root)": "phone_number is required"\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 c\u1eadp nh\u1eadt th\xf4ng tin lead."),(0,l.kt)("h3",{id:"http-request-5"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PUT https://{{API_HOST}}/v3/lead/{{lead_uuid}}")),(0,l.kt)("h3",{id:"body-3"},"Body"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sample data:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",\n    "lead_name": "TestNe",\n    "lead_code": "TestNe",\n    "phone_number": "03497191211",\n    "contract_number": "NVDP12345",\n    "identity_number": "",\n    "identity_issued_at": "",\n    "identity_issued_on": "0001-01-01T00:00:00Z",\n    "address": "",\n    "province": "",\n    "district": "",\n    "ward": "",\n    "date_of_birth": "",\n    "additional": ""\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"UUID c\u1ee7a lead"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_name"),(0,l.kt)("td",{parentName:"tr",align:null},"T\xean kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lead_code"),(0,l.kt)("td",{parentName:"tr",align:null},"M\xe3 kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xe1ch h\xe0ng"),(0,l.kt)("td",{parentName:"tr",align:null},"x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contract_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 h\u1ee3p \u0111\u1ed3ng"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_number"),(0,l.kt)("td",{parentName:"tr",align:null},"S\u1ed1 CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_issued_at"),(0,l.kt)("td",{parentName:"tr",align:null},"N\u01a1i c\u1ea5p CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"identity_issued_on"),(0,l.kt)("td",{parentName:"tr",align:null},"Ng\xe0y c\u1ea5p CMND"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"\u0110\u1ecba ch\u1ec9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"province"),(0,l.kt)("td",{parentName:"tr",align:null},"T\u1ec9nh/Th\xe0nh ph\u1ed1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"district"),(0,l.kt)("td",{parentName:"tr",align:null},"Qu\u1eadn/Huy\u1ec7n"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ward"),(0,l.kt)("td",{parentName:"tr",align:null},"Ph\u01b0\u1eddng/X\xe3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"date_of_birth"),(0,l.kt)("td",{parentName:"tr",align:null},"Ng\xe0y sinh"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"additional"),(0,l.kt)("td",{parentName:"tr",align:null},"Th\xf4ng tin b\u1ed5 sung"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gender"),(0,l.kt)("td",{parentName:"tr",align:null},"Gi\u1edbi t\xednh"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"delete-lead"},"Delete Lead"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request DELETE 'https://{{API_HOST}}/v3/lead/b9285f8a-4e3c-40f1-aed7-840b1d5e6118' \\\n--header 'Content-type: application/json' \\\n--header 'Authorization: Bearer {{TOKEN}}'\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "lead_uuid": "b9285f8a-4e3c-40f1-aed7-840b1d5e6118"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Error Response tr\u1ea3 v\u1ec1:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "Not Found"\n}\n')),(0,l.kt)("p",null,"API n\xe0y d\xf9ng \u0111\u1ec3 lead ra kh\u1ecfi danh s\xe1ch, kh\u1ecfi h\u1ec7 th\u1ed1ng."),(0,l.kt)("h3",{id:"http-request-6"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DELETE https://{{API_HOST}}/v3/lead/{{lead_uuid}}")))}c.isMDXComponent=!0}}]);