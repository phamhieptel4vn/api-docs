"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},93077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"React Native Pitel VoIP",slug:"/",sidebar_position:1},i="Integrate Voip call to your project",o={unversionedId:"react_native_pitel_voip",id:"react_native_pitel_voip",title:"React Native Pitel VoIP",description:"N|Solid",source:"@site/react_native_pitel_voip/react_native_pitel_voip.md",sourceDirName:".",slug:"/",permalink:"/react_native_pitel_voip/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"React Native Pitel VoIP",slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Push notification",permalink:"/react_native_pitel_voip/push_notif"}},p={},s=[{value:"Demo",id:"demo",level:2},{value:"Pitel Flow",id:"pitel-flow",level:2},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Android:",id:"android",level:4},{value:"IOS",id:"ios",level:4},{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:4},{value:"Properties",id:"properties-1",level:4},{value:"How to test",id:"how-to-test",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-voip-call-to-your-project"},"Integrate Voip call to your project"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://documents.tel4vn.com/"},(0,r.kt)("img",{parentName:"a",src:"https://documents.tel4vn.com/img/pitel-logo.png",alt:"N|Solid"}))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native-pitel-voip")," is package support for voip call."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"register",src:n(99019).Z,width:"200",height:"356"}),"\n",(0,r.kt)("img",{alt:"ougoing_call",src:n(78145).Z,width:"200",height:"356"})),(0,r.kt)("h2",{id:"pitel-flow"},"Pitel Flow"),(0,r.kt)("p",null,'When user make call from Pitel app, Pitel Server pushes a notification for all user login (who receives the call). When user "Accept" call, extension will re-register to receive call.\n',(0,r.kt)("img",{alt:"Pitel Flow",src:n(32608).Z,width:"1726",height:"976"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register Extension"),(0,r.kt)("li",{parentName:"ul"},"Call"),(0,r.kt)("li",{parentName:"ul"},"Hangup"),(0,r.kt)("li",{parentName:"ul"},"Turn on/off micro"),(0,r.kt)("li",{parentName:"ul"},"Turn on/of speaker")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install Packages\nAdd pubspec.yaml:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pubspec.yaml"},"yarn add react-native-pitel-voip\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Installing dependencies into a bare React Native project")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"yarn add react-native-callkeep@4.3.9 @react-native-firebase/app@18.1.0 @react-native-firebase/messaging@18.1.0 react-native-background-timer@2.4.1 react-native-get-random-values@1.9.0 react-native-incall-manager@4.0.1 react-native-svg@13.9.0 react-native-voip-push-notification@3.3.1 uuid@9.0.0 pitel-react-native-webrtc pitel-sdk-for-rn @react-native-async-storage/async-storage@1.19.1\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Pod install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-pubspec.yaml"},"cd ios\npod install\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Installing react-native-svg-transformer\nFollow document & setup ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kristerkari/react-native-svg-transformer"},"react-native-svg-transformer"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn add --dev react-native-svg-transformer\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pushkit/ Push notification - Received VoIP and Wake app from Terminated State.\nNote Please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/anhquangmobile/react-native-pitel-voip/blob/main/%20PUSH_NOTIF.md"},"PUSH_NOTIF.md"),". setup Pushkit (for IOS), push notification (for Android).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Project"))),(0,r.kt)("h4",{id:"android"},"Android:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/src/main/AndroidManifest.xml"),". ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/android/app/src/main/AndroidManifest.xml"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},' <manifest...>\n    ...\n    // Request permission\n    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n    <uses-permission android:name="android.permission.CAMERA" />\n    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n    <uses-permission android:name="android.permission.WAKE_LOCK" />\n    <uses-permission android:name="android.permission.BLUETOOTH" />\n    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />\n\n    ...\n    // show when lock screen\n    <application\n    ...\n    >\n        <activity\n            ...\n            android:showOnLockScreen="true"\n            android:showWhenLocked="true"\n            android:turnScreenOn="true"\n        >\n            ...\n        </activity>\n    </application>\n </manifest>\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"android/gradle.properties"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"android.enableDexingArtifactTransform.desugaring=false\n")),(0,r.kt)("h4",{id:"ios"},"IOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request permission in file ",(0,r.kt)("inlineCode",{parentName:"li"},"Info.plist"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<key>NSMicrophoneUsageDescription</key>\n<string>Need microphone access for voip call</string>\n<array>\n    <string>fetch</string>\n    <string>processing</string>\n    <string>remote-notification</string>\n    <string>voip</string>\n</array>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure platform ios ",(0,r.kt)("inlineCode",{parentName:"li"},"12.0")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"Podfile"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"platform :ios, '12.0'\ntarget 'rn_pitel_demo' do\n  config = use_native_modules!\n\n  // Add this\n  pod 'Firebase', :modular_headers => true\n  pod 'FirebaseCoreInternal', :modular_headers => true\n  pod 'GoogleUtilities', :modular_headers => true\n  pod 'FirebaseCore', :modular_headers => true\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Please checkout repo github to get ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/anhquangmobile/rn-pitel-demo"},"example")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/index.js"},"index.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { NotificationBackground } from "react-native-pitel-voip"; // Add this line\nNotificationBackground(); // Add this line\n\nAppRegistry.registerComponent(appName, () => App);\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/App.jsx"},"App.jsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Import this\nimport { PitelSDKProvider } from "react-native-pitel-voip";\nimport BackgroundTimer from "react-native-background-timer";\nBackgroundTimer.start();\n\nexport default function App() {\n  return (\n    // Wrap your app with PitelSDKProvider\n    <PitelSDKProvider>...</PitelSDKProvider>\n  );\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/screens/home_screen/index.js"),"\nPlease follow ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/src/screens/home_screen/index.js"},"example"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Config sdkOption")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const ext = `${EXTENSION}`;\nconst sipPass = `${EXTENSION_SIP_PASSWORD}`;\nconst appId = `${BUNDLE_ID}`;\nconst domainUrl = `${DOMAIN}`;\n\nconst sdkOptionsInit = {\n  sipDomain: `${DOMAIN}:${PORT}`,\n  wssServer: `${WSS_URL}`,\n  sipPassword: sipPass,\n  bundleId: appId, // Bundle id for IOS\n  packageId: appId, // Package id for Android\n  teamId: `${TEAM_ID}`, // Team id of Apple developer account\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register device token & remove device token")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const _registerDeviceToken = async () => {\n  const fcmToken = await getFcmToken();\n  const deviceToken = Platform.OS == "android" ? fcmToken : iosPushToken;\n  await registerDeviceToken({\n    pn_token: deviceToken,\n    pn_type: Platform.OS == "android" ? "android" : "ios",\n    app_id: appId,\n    domain: domainUrl,\n    extension: ext,\n    app_mode: __DEV__ ? "dev" : "production",\n    fcm_token: fcmToken,\n  });\n};\n\nconst _removeDeviceToken = async () => {\n  const fcmToken = await getFcmToken();\n  const deviceToken = Platform.OS == "android" ? fcmToken : iosPushToken;\n  removeDeviceToken({\n    pn_token: deviceToken,\n    domain: domainUrl,\n    extension: ext,\n  });\n};\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wrap your hone screen component with PitelSDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return (\n  <PitelSDK\n    sdkOptionsInit={sdkOptionsInit}\n    iosPushToken={iosPushToken}\n    setSdkOptions={setSdkOptions}\n  >\n    <HomeScreenComponent\n      navigation={navigation}\n      sdkOptions={sdkOptions}\n      handleRegisterToken={_registerDeviceToken}\n      handleRemoveToken={_removeDeviceToken}\n      setIOSPushToken={setIOSPushToken}\n    />\n  </PitelSDK>\n);\n")),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sdkOptionsInit"),(0,r.kt)("td",{parentName:"tr",align:null},"your extension info use to login"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iosPushToken"),(0,r.kt)("td",{parentName:"tr",align:null},"ios device voip push token"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setSdkOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"set sdkOption when your extension login success"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/screens/home_screen/home_screen.js"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/src/screens/home_screen/home_screen.js"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Register your extension to PBX\nconst {\n  callState,\n  receivedPhoneNumber,\n  registerState,\n\n  setCallState,\n  registerFunc,\n} = useRegister({\n  sdkOptions: sdkOptions,\n  setPitelSDK: setPitelSDK,\n  extension: ext,\n});\n\nreturn (\n  <PitelCallNotif\n    callkitSetup={callkitSetup}\n    pitelSDK={pitelSDK}\n    setCallState={setCallState}\n    callState={callState}\n    isLogin={isLogin}\n    isCallOut={isCallOut}\n    setCallID={setCallID}\n    sdkOptions={sdkOptions}\n    registerFunc={registerFunc}\n    setIsCallOut={setIsCallOut}\n    onCreated={handleCreated}\n    onReceived={handleReceived}\n    onHangup={handleHangup}\n    onIOSToken={(iosToken) => {\n      setIOSPushToken(iosToken);\n    }}\n  >\n    ...\n  </PitelCallNotif>\n);\n")),(0,r.kt)("h4",{id:"properties-1"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pitelSDK"),(0,r.kt)("td",{parentName:"tr",align:null},"pitelSDK get from params of route"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callkitSetup"),(0,r.kt)("td",{parentName:"tr",align:null},"set information for callkit request permission"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setCallState"),(0,r.kt)("td",{parentName:"tr",align:null},"set call status"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isLogin"),(0,r.kt)("td",{parentName:"tr",align:null},"app login/logout status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isCallOut"),(0,r.kt)("td",{parentName:"tr",align:null},"call direction status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setCallID"),(0,r.kt)("td",{parentName:"tr",align:null},"set call direction"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sdkOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"received sdkOptions when extension login success"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"registerFunc"),(0,r.kt)("td",{parentName:"tr",align:null},"register extension"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setIsCallOut"),(0,r.kt)("td",{parentName:"tr",align:null},"set call direction is call out"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCreated"),(0,r.kt)("td",{parentName:"tr",align:null},"make outgoing call"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onReceived"),(0,r.kt)("td",{parentName:"tr",align:null},"received incoming call"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onHangup"),(0,r.kt)("td",{parentName:"tr",align:null},"set hang up"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onIOSToken"),(0,r.kt)("td",{parentName:"tr",align:null},"ios voip push notification"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In file ",(0,r.kt)("inlineCode",{parentName:"li"},"src/screens/call_screen/index.js")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/anhquangmobile/rn-pitel-demo/blob/main/src/screens/call_screen/index.js"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState, useContext } from "react";\nimport { PitelCallKit, PitelSDKContext } from "react-native-pitel-voip";\n\nexport const CallScreen = ({ route, navigation }) => {\n  const [mute, setMute] = useState(false);\n  const [speaker, setSpeaker] = useState(false);\n  const { pitelSDK } = useContext(PitelSDKContext);\n\n  const { phoneNumber, direction, callState, callID } = route.params;\n\n  return (\n    <PitelCallKit\n      pitelSDK={pitelSDK}\n      callState={callState}\n      phoneNumber={phoneNumber}\n      direction={direction}\n      microState={mute}\n      speakerState={speaker}\n      callID={callID}\n      onHangup={() => {\n        pitelSDK.hangup();\n      }}\n      onMicro={() => {\n        setMute(!mute);\n      }}\n      onSpeaker={() => {\n        setSpeaker(!speaker);\n      }}\n    />\n  );\n};\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pitelSDK"),(0,r.kt)("td",{parentName:"tr",align:null},"pitelSDK when extension login success"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callState"),(0,r.kt)("td",{parentName:"tr",align:null},"call status"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"direction"),(0,r.kt)("td",{parentName:"tr",align:null},"call direction"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"microState"),(0,r.kt)("td",{parentName:"tr",align:null},"microphone status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"speakerState"),(0,r.kt)("td",{parentName:"tr",align:null},"loudspeaker status"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callID"),(0,r.kt)("td",{parentName:"tr",align:null},"incoming call id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onHangup"),(0,r.kt)("td",{parentName:"tr",align:null},"hang up when end call"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMicro"),(0,r.kt)("td",{parentName:"tr",align:null},"on/off microphone"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSpeaker"),(0,r.kt)("td",{parentName:"tr",align:null},"on/off loud speaker"),(0,r.kt)("td",{parentName:"tr",align:null},"Function"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h2",{id:"how-to-test"},"How to test"),(0,r.kt)("p",null,"Using tryit to test voip call connection & conversation\nLink: ",(0,r.kt)("a",{parentName:"p",href:"https://tryit.jssip.net/"},"https://tryit.jssip.net/"),"\nSetting:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Access to link ",(0,r.kt)("a",{parentName:"li",href:"https://tryit.jssip.net/"},"https://tryit.jssip.net/")),(0,r.kt)("li",{parentName:"ol"},"Enter extension: example 102"),(0,r.kt)("li",{parentName:"ol"},"Click Setting icon"),(0,r.kt)("li",{parentName:"ol"},"Enter information to input field\n",(0,r.kt)("img",{alt:"tryit",src:n(10183).Z,width:"300",height:"415"})),(0,r.kt)("li",{parentName:"ol"},"Save"),(0,r.kt)("li",{parentName:"ol"},"Click icon -> to connect")))}m.isMDXComponent=!0},78145:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ougoing_call-529683279c96d6396f2e8cdcadb1dbf8.png"},32608:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pitel_connect_flow-ccd3cde51da89b0c171be33947cee965.png"},10183:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pitel_img_3-20242c44b60e136101a730bbd03153ab.png"},99019:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);