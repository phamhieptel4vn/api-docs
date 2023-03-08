---
title: Authentication
sidebar_position: 1
---

## Get Access Token

```shell
curl --location 'https://{{API_HOST}}/v3/auth/token' \
--header 'Content-Type: application/json' \
--data '{
"api_key": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee"
}'
```

> Response trả về:

```json
{
    "client_id": "f15f24d1-16d9-4c09-a3df-3f3937217782",
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "expired_in": 15023636,
    "refresh_token": "",
    "token": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjEzNjMyNzc4fQ.dGhpcyBpcyB0ZXN0IGRhdGE=",
    "token_type": "Bearer",
    "user_id": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee"
}
```

PBX API sử dụng API Token để xác thực truy cập tới API. API Token bạn lấy từ service thông qua {{API_KEY}} được Tổng đài cung cấp.

Tất cả các API của PBX đều yêu cầu user cung cấp Token trong header giống phía dưới.

`Authorization: Bearer {{API_KEY}}`

Bạn vui lòng thay đổi {{API_KEY}} bằng token đã lấy được.

### HTTP Request

`POST https://{{API_HOST}}/v3/auth/token`

### Body

| Parameter | Description      |
| --------- | ---------------- |
| api_key   | API key được cấp |

## Login
    
```shell
curl -L -X POST 'https://{{API_HOST}}/v3/auth' \
-H 'Content-Type: application/json' \
--data-raw '{
    "username" : "foo@test.tel4vn.com",
    "password" : "foo123"
}'
```

> Response trả về:

```json
{
    "data": {
        "api_key": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee",
        "domain_config": {
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "domain_name": "test.tel4vn.com",
            "type": "callcenter",
            "version": "v3",
            "logo": "https://{{API_HOST}}/v3/images/c275b950-9885-4775-b1bd-09fc865afa48_1678085615695119855.jpeg",
            "api_url": "a",
            "zalo_api_key": "DnfLqHoqCrdeKBlI7ZNH0ar5h8v3Ng22",
            "google_api_key": "",
            "partner": ""
        },
        "domain_uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeegg",
        "enable": true,
        "enable_webrtc": false,
        "last_login_date": "2023-03-06T17:15:00.356926386+07:00",
        "level": "admin",
        "permission": {
            "assign_ticket": true,
            "create_callback": true,
            "create_campaign": true,
            "create_department": true,
            "create_group": true,
            "create_kpi": true,
            "create_lead": true,
            "create_list": true,
            "create_mail": true,
            "create_notification": true,
            "create_stt": true,
            "create_ticket": true,
            "create_ticket_category": true,
            "create_user": true,
            "delete_campaign": true,
            "delete_department": true,
            "delete_group": true,
            "delete_kpi": true,
            "delete_lead": true,
            "delete_list": true,
            "delete_mail": true,
            "delete_notification": true,
            "delete_ticket": true,
            "delete_ticket_category": true,
            "delete_user": true,
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "download_cdr": true,
            "download_recording": true,
            "edit_callback": true,
            "edit_campaign": true,
            "edit_department": true,
            "edit_group": true,
            "edit_kpi": true,
            "edit_lead": true,
            "edit_list": true,
            "edit_ticket": true,
            "edit_ticket_category": true,
            "edit_user": true,
            "export_notification": true,
            "id": "065725d7-a859-447b-ad5c-7c27018eb241",
            "listen_recording": true,
            "qc_cdr": true,
            "role_description": "",
            "role_name": "Admin",
            "role_permission": "",
            "solve_callback": true,
            "upload_list": true,
            "view_autocall": true,
            "view_callback": true,
            "view_campaign": true,
            "view_cdr": true,
            "view_crm": true,
            "view_dashboard": true,
            "view_department": true,
            "view_group": true,
            "view_history": true,
            "view_kpi": true,
            "view_lead": true,
            "view_list": true,
            "view_log": false,
            "view_mail": true,
            "view_monitor": true,
            "view_notification": true,
            "view_performance": true,
            "view_recording": true,
            "view_report": true,
            "view_setting": true,
            "view_social_network": true,
            "view_stt": true,
            "view_ticket": true,
            "view_ticket_category": true,
            "view_timeline": true,
            "view_user": true
        },
        "privilege": {
            "id": "065725d7-a859-447b-ad5c-7c27018eb241",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "role_name": "Admin",
            "role_description": "",
            "role_permission_map": null,
            "view_campaign": true,
            "create_campaign": true,
            "delete_campaign": true,
            "edit_campaign": true,
            "view_list": true,
            "create_list": true,
            "delete_list": true,
            "edit_list": true,
            "upload_list": true,
            "view_lead": true,
            "create_lead": true,
            "delete_lead": true,
            "edit_lead": true,
            "view_user": true,
            "create_user": true,
            "delete_user": true,
            "edit_user": true,
            "view_group": true,
            "create_group": true,
            "delete_group": true,
            "edit_group": true,
            "view_department": true,
            "create_department": true,
            "delete_department": true,
            "edit_department": true,
            "view_cdr": true,
            "download_cdr": true,
            "qc_cdr": true,
            "view_recording": true,
            "listen_recording": true,
            "download_recording": true,
            "view_ticket": true,
            "create_ticket": true,
            "delete_ticket": true,
            "edit_ticket": true,
            "assign_ticket": true,
            "view_ticket_category": true,
            "create_ticket_category": true,
            "delete_ticket_category": true,
            "edit_ticket_category": true,
            "view_history": true,
            "view_dashboard": true,
            "view_monitor": true,
            "view_report": true,
            "view_setting": true,
            "view_notification": true,
            "create_notification": true,
            "delete_notification": true,
            "export_notification": true,
            "create_callback": true,
            "view_callback": true,
            "edit_callback": true,
            "solve_callback": true,
            "view_crm": true,
            "view_performance": true,
            "view_timeline": true,
            "create_kpi": true,
            "view_kpi": true,
            "edit_kpi": true,
            "delete_kpi": true,
            "view_mail": true,
            "create_mail": true,
            "delete_mail": true,
            "view_log": false,
            "view_stt": true,
            "create_stt": true,
            "view_social_network": true
        },
        "token": {
            "client_id": "f15f24d1-16d9-4c09-a3df-3f3937217782",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "expired_in": 15022897,
            "refresh_token": "",
            "token": "74d019223b4d4692a4082ebd8f9b6e24-ZjE1ZjI0ZDEtMTZkOS00YzA5LWEzZGYtM2YzOTM3MjE3Nzgy",
            "token_type": "Bearer",
            "user_uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee"
        },
        "user_uuid": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee",
        "username": "foo"
    }
}
```
Login thành công sẽ trả về thông tin account.

### HTTP Request

`POST https://{{API_HOST}}/v3/auth`

### Body

| Parameter | Description        |
| --------- | ------------------ |
| username  | Account's username |
| password  | Account's password |