---
title: Example
sidebar_position: 3
---

### Pitel UI Kit Demo

pitel_ui_kit is demo project. Check out from [pitel_ui_kit](https://github.com/tel4vn/pitel-ui-kit/tree/1.0.3).

## Installation

> **Note**
> Pitel UI Kit requires flutter version 3.7.7, dart version 2.19.4

- **Setup to wake up app**: please follow guide in [here](https://github.com/tel4vn/flutter-pitel-voip/blob/1.0.3/PUSH_NOTIF.md) to setting push notification (FCM for android), Pushkit (for IOS).
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
    "userID": UUser,                // Example 101
    "authID": UUser,                // Example 101
    "accountName": "${UUser}",      // Example 101
    "displayName": "${UUser}@${Domain}",
    "dialPlan": null,
    "randomPort": null,
    "voicemail": null,
    "wssUrl": "${URL WSS}",
    "userName": "${username}@${Domain}",
    "apiDomain": "${URL API}"
});
```

- In file `app.dart` fill sip info data

```js
  final pnPushParams = PnPushParams(
      pnProvider: Platform.isAndroid ? 'fcm' : 'apns',
      pnParam: Platform.isAndroid
          ? '${bundleId}'                         // Example com.company.app
          : '${apple_team_id}.${bundleId}.voip',  // Example com.company.app
      pnPrid: '${deviceToken}',
  );
  pitelService.setExtensionInfo(sipInfoData, pnPushParams);
```

- In file `home_screen.dart` please enter the information for sending notifications.

```js
 // Register Device token when SIP register success (state REGISTER)
 void _registerDeviceToken() async {
    final fcmToken = await PushVoipNotif.getFCMToken();
    final response = await pitelClient.registerDeviceToken(
      deviceToken: "${device_token}",
      platform: '${platform}',          // android or ios
      bundleId: '${bundle_id}',         // Example: com.pitel.uikit.demo
      domain: '${Domain}',
      extension: '${UUser}',
      appMode: kReleaseMode ? 'production' : 'dev',
      fcmToken: fcmToken,
    );
  }
  // Remove Device token when user logout (state UNREGISTER)
  void _removeDeviceToken() async {
    final response = await pitelClient.removeDeviceToken(
      deviceToken: '${device_token}',
      domain: '${Domain}',
      extension: '${UUser}',
    );
  }
```

- Get device token from function

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