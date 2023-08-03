---
title: Push notification
sidebar_position: 2
---

# Pitel Voip Push notification

> **Warning**
> Only working on real device, not on simulator (Callkit framework not working on simulator)

## Pitel Flow

When user make call from Pitel app, Pitel Server pushes a notification for all user login (who receives the call). When user "Accept" call, extension will re-register to receive call.
![Pitel Flow](img/images/pitel_connect_flow.png)

## Image callkit

![space-1.jpg](img/images/call_kit_1.png)
![space-1.jpg](img/images/call_kit_2.png)
![space-1.jpg](img/images/call_kit_3.png)
![space-1.jpg](img/images/call_kit_android_1.png)
![space-1.jpg](img/images/call_kit_android_2.png)
![space-1.jpg](img/images/call_kit_android_3.png)

# Setup & Certificate

#### IOS

If you are making VoIP application than you definitely want to update your application in the background & terminate state as well as wake your application when any VoIP call is being received.

**1. Create Apple Push Notification certificate.**

- Access [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list)
- In [Certificates, Identifiers & Profiles](https://developer.apple.com/account/resources), click Certificates in the sidebar.
- On the top left, click the add button (+).The certificate type should be Apple Push Notification service SSL (Sandbox & Production) under Services.

![push_img_10](img/push_img/push_img_10.png)

**2. Choose an App ID from the pop-up menu, then click Continue.**
![push_img_9](img/push_img/push_img_9.png)

**3. Upload Certificate Signing Request → Continue**
![push_img_8](img/push_img/push_img_8.png)

Follow the instructions to [create a certificate signing request](https://developer.apple.com/help/account/create-certificates/create-a-certificate-signing-request).

- **Install certificate.**
  Download the certificate and install it into the Keychain Access app(download .cer and double click to install).
- **Export the .p12 file and send it to Tel4vn (or using test)**
  ![push_img_7](img/push_img/push_img_7.png)

# Setup Pushkit & Callkit

#### IOS

- Open Xcode Project → Capabilities
- In Tab Signing & Capabilities. Enable Push notifications & Background Modes

![push_img_5](img/push_img/push_img_5.png)

- Create APNs key and upload in firebase project. In your apple developer account.
  ![apns_key](img/push_img/apns_key.png)
- Upload APNs key to your firebase
  - Create new your IOS App in Firebase project.
    ![ios_app](img/push_img/ios_app.png)
  - Download file .p8 to upload to firebase
    ![download_apns_key](img/push_img/download_apns_key.png)
  - Select IOS app -> upload Apns key
    ![upload_key_firebase](img/push_img/upload_key_firebase.png)
  - Fill information in upload Apns key popup
    ![upload_key_firebase_popup](img/push_img/upload_key_firebase_popup.png)

##### Installing your Firebase configuration file

- Next you must add the file to the project using Xcode (adding manually via the filesystem won't link the file to the project). Using Xcode, open the project's ios/{projectName}.xcworkspace file. Right click Runner from the left-hand side project navigation within Xcode and select "Add files", as seen below:
  ![ios_google_service_1](img/push_img/ios_google_service_1.png)
- Select the GoogleService-Info.plist file you downloaded, and ensure the "Copy items if needed" checkbox is enabled:
  ![ios_google_service_2](img/push_img/ios_google_service_2.png)

#### Android

Using FCM (Firebase Cloud Message) to handle push notification wake up app when app run on Background or Terminate

> **Warning**
> Popup request permission only working with targetSdkVersion >= 33

- Access link [https://console.firebase.google.com/u/0/project/\_/notification](https://console.firebase.google.com/u/0/project/_/notification)
- Create your packageId for android app
  ![push_img_4](img/push_img/push_img_4.png)
- Download & copy file google_service.json -> replace file google_service.json in path: `android/app/google_service.json`

- Go to Project Setting → Cloud Messaging → Enable Cloud Messaging API (Legacy)
  ![push_img_3](img/push_img/push_img_3.png)

> **Note**
> After complete all step Setup. Please send information to dev of Tel4vn in [here](https://portal-sdk.tel4vn.com/)

# Installation (your project)

- IOS: Replace your file ios/${YOUR_PROJECT_NAME}/AppDelegate.mm with
  [AppDelegate](https://github.com/anhquangmobile/rn-pitel-demo/blob/main/ios/rn_pitel_demo/AppDelegate.mm)

## How to test

- Download & install app from link https://github.com/onmyway133/PushNotifications/releases

![push_img_2](img/push_img/push_img_2.png)

- Fill information and click Send to Test Push Notification

Note: Add .voip after your bundleId to send voip push notification

Example:

```
Your app bundleId: com.pitel.uikit.demo
Voip push Bundle Id: com.pitel.uikit.demo.voip
```

- IOS

![push_img_1](img/push_img/push_img_1.png)

- Android: using above app or test from Postman

cURL

```dart
curl --location 'https://fcm.googleapis.com/fcm/send' \
--header 'Content-Type: application/json' \
--header 'Authorization: key=${server_key}' \
--data '{
    "registration_ids": [${device_token}],
    "data":{
        "uuid": "call_id",
        "nameCaller": "Anh Quang",
        "avatar": "Anh Quang",
        "phoneNumber": "0341111111",
        "appName": "Pitel Connnect",
        "callType": "CALL"
    },
    "content_available": true,
    "priority": "high"
}'
```
