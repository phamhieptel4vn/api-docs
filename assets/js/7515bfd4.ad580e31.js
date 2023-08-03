"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[7700],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(i),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return i?a.createElement(m,l(l({ref:t},c),{},{components:i})):a.createElement(m,l({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:n,l[1]=r;for(var p=2;p<o;p++)l[p]=i[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},15487:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));const o={title:"Push notification",sidebar_position:2},l="Pitel Voip Push notification",r={unversionedId:"push_notif",id:"push_notif",title:"Push notification",description:"Warning",source:"@site/react_native_pitel_voip/push_notif.md",sourceDirName:".",slug:"/push_notif",permalink:"/react_native_pitel_voip/push_notif",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Push notification",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"React Native Pitel VoIP",permalink:"/react_native_pitel_voip/"},next:{title:"Example",permalink:"/react_native_pitel_voip/rn_pitel_demo"}},s={},p=[{value:"Pitel Flow",id:"pitel-flow",level:2},{value:"Image callkit",id:"image-callkit",level:2},{value:"IOS",id:"ios",level:4},{value:"IOS",id:"ios-1",level:4},{value:"Installing your Firebase configuration file",id:"installing-your-firebase-configuration-file",level:5},{value:"Android",id:"android",level:4},{value:"How to test",id:"how-to-test",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pitel-voip-push-notification"},"Pitel Voip Push notification"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),"\nOnly working on real device, not on simulator (Callkit framework not working on simulator)")),(0,n.kt)("h2",{id:"pitel-flow"},"Pitel Flow"),(0,n.kt)("p",null,'When user make call from Pitel app, Pitel Server pushes a notification for all user login (who receives the call). When user "Accept" call, extension will re-register to receive call.\n',(0,n.kt)("img",{alt:"Pitel Flow",src:i(32608).Z,width:"1726",height:"976"})),(0,n.kt)("h2",{id:"image-callkit"},"Image callkit"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"space-1.jpg",src:i(10622).Z,width:"300",height:"534"}),"\n",(0,n.kt)("img",{alt:"space-1.jpg",src:i(90773).Z,width:"300",height:"534"}),"\n",(0,n.kt)("img",{alt:"space-1.jpg",src:i(14946).Z,width:"300",height:"534"}),"\n",(0,n.kt)("img",{alt:"space-1.jpg",src:i(5080).Z,width:"300",height:"667"}),"\n",(0,n.kt)("img",{alt:"space-1.jpg",src:i(86657).Z,width:"300",height:"667"}),"\n",(0,n.kt)("img",{alt:"space-1.jpg",src:i(12064).Z,width:"300",height:"667"})),(0,n.kt)("h1",{id:"setup--certificate"},"Setup & Certificate"),(0,n.kt)("h4",{id:"ios"},"IOS"),(0,n.kt)("p",null,"If you are making VoIP application than you definitely want to update your application in the background & terminate state as well as wake your application when any VoIP call is being received."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Create Apple Push Notification certificate.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Access ",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/identifiers/list"},"https://developer.apple.com/account/resources/identifiers/list")),(0,n.kt)("li",{parentName:"ul"},"In\xa0",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources"},"Certificates, Identifiers & Profiles"),", click Certificates in the sidebar."),(0,n.kt)("li",{parentName:"ul"},"On the top left, click the add button (+).The certificate type should be\xa0Apple Push Notification service SSL (Sandbox & Production)\xa0under\xa0Services.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"push_img_10",src:i(72307).Z,width:"1544",height:"736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Choose an\xa0App ID\xa0from the pop-up menu, then click Continue."),"\n",(0,n.kt)("img",{alt:"push_img_9",src:i(81293).Z,width:"2456",height:"750"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Upload Certificate Signing Request \u2192 Continue"),"\n",(0,n.kt)("img",{alt:"push_img_8",src:i(25097).Z,width:"2456",height:"750"})),(0,n.kt)("p",null,"Follow the instructions to\xa0",(0,n.kt)("a",{parentName:"p",href:"https://developer.apple.com/help/account/create-certificates/create-a-certificate-signing-request"},"create a certificate signing request"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Install certificate."),"\nDownload the certificate and install it into the Keychain Access app(download .cer and double click to install)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Export the .p12 file and send it to Tel4vn (or using test)"),(0,n.kt)("img",{alt:"push_img_7",src:i(15615).Z,width:"1754",height:"1062"}))),(0,n.kt)("h1",{id:"setup-pushkit--callkit"},"Setup Pushkit & Callkit"),(0,n.kt)("h4",{id:"ios-1"},"IOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open Xcode Project \u2192 Capabilities"),(0,n.kt)("li",{parentName:"ul"},"In Tab Signing & Capabilities. Enable Push notifications & Background Modes")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"push_img_5",src:i(28004).Z,width:"1806",height:"1028"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create APNs key and upload in firebase project. In your apple developer account.\n",(0,n.kt)("img",{alt:"apns_key",src:i(83581).Z,width:"1172",height:"802"})),(0,n.kt)("li",{parentName:"ul"},"Upload APNs key to your firebase",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Create new your IOS App in Firebase project.\n",(0,n.kt)("img",{alt:"ios_app",src:i(1186).Z,width:"2880",height:"1580"})),(0,n.kt)("li",{parentName:"ul"},"Download file .p8 to upload to firebase\n",(0,n.kt)("img",{alt:"download_apns_key",src:i(13699).Z,width:"2652",height:"1084"})),(0,n.kt)("li",{parentName:"ul"},"Select IOS app -> upload Apns key\n",(0,n.kt)("img",{alt:"upload_key_firebase",src:i(51084).Z,width:"2880",height:"1580"})),(0,n.kt)("li",{parentName:"ul"},"Fill information in upload Apns key popup\n",(0,n.kt)("img",{alt:"upload_key_firebase_popup",src:i(46246).Z,width:"2880",height:"1580"}))))),(0,n.kt)("h5",{id:"installing-your-firebase-configuration-file"},"Installing your Firebase configuration file"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next you must add the file to the project using Xcode (adding manually via the filesystem won't link the file to the project). Using Xcode, open the project's ios/{projectName}.xcworkspace file. Right click Runner from the left-hand side project navigation within Xcode and select \"Add files\", as seen below:\n",(0,n.kt)("img",{alt:"ios_google_service_1",src:i(27482).Z,width:"1512",height:"1072"})),(0,n.kt)("li",{parentName:"ul"},'Select the GoogleService-Info.plist file you downloaded, and ensure the "Copy items if needed" checkbox is enabled:\n',(0,n.kt)("img",{alt:"ios_google_service_2",src:i(34207).Z,width:"1512",height:"1072"}))),(0,n.kt)("h4",{id:"android"},"Android"),(0,n.kt)("p",null,"Using FCM (Firebase Cloud Message) to handle push notification wake up app when app run on Background or Terminate"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Warning"),"\nPopup request permission only working with targetSdkVersion >= 33")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Access link ",(0,n.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/project/_/notification"},"https://console.firebase.google.com/u/0/project/","_","/notification"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create your packageId for android app\n",(0,n.kt)("img",{alt:"push_img_4",src:i(28241).Z,width:"1994",height:"1132"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download & copy file google_service.json -> replace file google_service.json in path: ",(0,n.kt)("inlineCode",{parentName:"p"},"android/app/google_service.json"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go to Project Setting \u2192 Cloud Messaging \u2192 Enable Cloud Messaging API (Legacy)\n",(0,n.kt)("img",{alt:"push_img_3",src:i(25109).Z,width:"2866",height:"1582"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),"\nAfter complete all step Setup. Please send information to dev of Tel4vn in ",(0,n.kt)("a",{parentName:"p",href:"https://portal-sdk.tel4vn.com/"},"here"))),(0,n.kt)("h1",{id:"installation-your-project"},"Installation (your project)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IOS: Replace your file ios/${YOUR_PROJECT_NAME}/AppDelegate.mm with\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/ios/rn_pitel_demo/AppDelegate.mm"},"AppDelegate"))),(0,n.kt)("h2",{id:"how-to-test"},"How to test"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download & install app from link ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/onmyway133/PushNotifications/releases"},"https://github.com/onmyway133/PushNotifications/releases"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"push_img_2",src:i(94541).Z,width:"1820",height:"428"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fill information and click Send to Test Push Notification")),(0,n.kt)("p",null,"Note: Add .voip after your bundleId to send voip push notification"),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Your app bundleId: com.pitel.uikit.demo\nVoip push Bundle Id: com.pitel.uikit.demo.voip\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IOS")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"push_img_1",src:i(2199).Z,width:"1602",height:"1404"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Android: using above app or test from Postman")),(0,n.kt)("p",null,"cURL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},'curl --location \'https://fcm.googleapis.com/fcm/send\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Authorization: key=${server_key}\' \\\n--data \'{\n    "registration_ids": [${device_token}],\n    "data":{\n        "uuid": "call_id",\n        "nameCaller": "Anh Quang",\n        "avatar": "Anh Quang",\n        "phoneNumber": "0341111111",\n        "appName": "Pitel Connnect",\n        "callType": "CALL"\n    },\n    "content_available": true,\n    "priority": "high"\n}\'\n')))}d.isMDXComponent=!0},10622:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_1-0ef2b2f3e6af95b71e7af91aaeb4d01f.png"},90773:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_2-4e44862d1535ec1cc9ead98cee7c5922.png"},14946:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_3-c4f86f4c89996843befa481a7af6d764.png"},5080:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_android_1-bfe55271c37010489cddf724289dd71e.png"},86657:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_android_2-e4db21d87561498011685c10dd202d6d.png"},12064:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/call_kit_android_3-51722b6c1200cec6500b18826d32e26e.png"},32608:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/pitel_connect_flow-ccd3cde51da89b0c171be33947cee965.png"},83581:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/apns_key-c96008e7b72e62e6f4a2a2e95f33f71b.png"},13699:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/download_apns_key-3a0c53d46e771d270428c0ab94aaa528.png"},1186:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ios_app-8047caaec5632f3f3d44724d33da2cbb.png"},27482:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ios_google_service_1-becb3de21f41d1f8c7188a20c6f18fb3.png"},34207:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/ios_google_service_2-108658c0efd768f7fd144e606e1676ab.png"},2199:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_1-c7237fe82151c0b9621cecb378dd3654.png"},72307:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_10-c34846cb8b5c5df2eb20d0d132628dcd.png"},94541:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_2-0c45794c5631faf274fe525cf0994f23.png"},25109:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_3-22898f5574c275c9d352b9b48b7279f5.png"},28241:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_4-cdb72555d35d264cbeb35fda6dc0273e.png"},28004:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_5-8e933da12d2d71b25129a35561efd623.png"},15615:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_7-3942256b1a5d719cc05ddb79052c329b.png"},25097:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_8-fbcaf890f239b386bfd9912a155b5704.png"},81293:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/push_img_9-d1bb09033c45f4965e286c80530c757f.png"},51084:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/upload_key_firebase-08b0f155e34eadbf0b8dcab5e3945a39.png"},46246:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/upload_key_firebase_popup-f5896f1476dcbf8a41d5c9a3a81aa39a.png"}}]);