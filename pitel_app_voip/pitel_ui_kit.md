---
title: Example
sidebar_position: 3
---

### Pitel UI Kit Demo

pitel_ui_kit is demo project. Check out from [pitel_ui_kit](https://github.com/tel4vn/pitel-ui-kit/tree/1.0.6).

## Installation

> **Note**
> Pitel UI Kit requires flutter version 3.13.7, dart version 3.1.3

- **Setup to wake up app**: please follow guide in [here](https://github.com/tel4vn/flutter-pitel-voip/blob/1.0.6/PUSH_NOTIF.md) to setting push notification (FCM for android), Pushkit (for IOS).
- In file `firebase_options.dart`, fill information from your google_service.json

```js
  // Replace information from your google_service.json
  static const FirebaseOptions android = FirebaseOptions(
    apiKey: '${apiKey}',
    appId: '${appId}',
    messagingSenderId: '${messagingSenderId}',
    projectId: '${projectId}',
    storageBucket: '${storageBucket}',
  );
  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: '${apiKey}',
    appId: '${appId}',
    messagingSenderId: '${messagingSenderId}',
    projectId: '${projectId}',
    storageBucket: '${storageBucket}',
    iosClientId: '${iosClientId}',
    iosBundleId: '${iosBundleId}',
  );
```

- Replace com.pitel.uikit.demo with your bundleId/ packageId in
  - IOS: Open Xcode -> Signing & Capabilities -> Select Team & Replace your bundleId in field Bundle Identifier
  - Android: In file `android/app/build.gradle`. Replace com.pitel.uikit.demo with your packageId

```js
defaultConfig {
        applicationId "com.pitel.uikit.demo"            // Replace your packageId
        minSdkVersion flutterMinSdkVersion.toString()
        targetSdkVersion flutter.targetSdkVersion
        versionCode flutterVersionCode.toInteger()
        versionName flutterVersionName
    }
```

- In file `app.dart` fill sip info data

```js
final sipInfoData = SipInfoData.fromJson({
    "authPass": "${Password}",
    "registerServer": "${Domain}",
    "outboundServer": "${Outbound Proxy}",
    "port": PORT,
    "accountName": "${UUser}",      // Example 101
    "displayName": "${UUser}@${Domain}",
    "wssUrl": "${URL WSS}",
    "apiDomain": "${URL API}"
});
```

- In file `app.dart` fill sip info data

```js
  final PushNotifParams pushNotifParams = PushNotifParams(
    teamId: '${apple_team_id}',
    bundleId: '${bundle_id}',
  );

  pitelService.setExtensionInfo(sipInfoData, pushNotifParams);
```

- Get device token from function (to test notification)

```js
await PushVoipNotif.getDeviceToken();
```

- Get package

```js
flutter pub get
```

- Run source code

```js
flutter run
```
