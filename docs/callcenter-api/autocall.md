---
title: Autocall
sidebar_position: 9
---

## Create Campaign Autocall


```shell
curl --location 'https://{{API_HOST}}/v3/campaign' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "campaign_name": "VoiceOTP",
    "type": "autocall",
    "concurrent_call": 1,
    "template_uuid": "",
    "description": "",
    "type_autocall": "autocall_voice_tts"
}'
```

> Response trả về:

```json
{
  "campaign_uuid": "avavavav-1111-2222-3333-eeeeeeee",
  "created": true
}
```

> Error Response trả về:

```json
{
    "error": "campaign_name is already taken"
}
```
```json
{
    "error": [
        {
            "type": "type must be one of the following: \"autodialer\", \"autocall\", \"inbound\", \"manual\""
        }
    ]
}
```

API này dùng để tạo chiến dịch autocall.

### HTTP Request

`POST https://{{API_HOST}}/v3/campaign`

### Body

> Sample data:

```json
{
  "campaign_name": "autocall_campaign",
  "concurrent_call": 2
}
```

| Parameter       | Description                                                                                | Required |
| --------------- | ------------------------------------------------------------------------------------------ | -------- |
| campaign_name   | Tên chiến dịch                                                                             | x        |
| concurrent_call | Số lượng cuộc gọi đồng thời                                                                |          |
| type            | Loại chiến dich, bao gồm autodialer, autocall, inbound, manual                             | x        |
| type_autocall   | Loại chiến dịch autocall, bao gồm autocall_voice_tts, autocall_audio va autocall_voice_otp |          |

## Update Campaign

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/campaign/c2da23c0-9739-4287-828a-7b15cf0fb19e' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",
    "campaign_name": "AutocallAudio",
    "type": "autocall",
    "description": "",
    "active": true,
    "concurrent_call": 5,
    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
    "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",
    "recall_times": 3,
    "limit_recall_duration": 0,
    "schedule_recall": "minute",
    "schedule_recall_duration": 1,
    "answer_callback_url": "",
    "status": "stop",
    "created_at": "2023-03-06T16:27:17.784242+07:00",
    "updated_at": "2023-03-06T16:27:17.784242+07:00",
    "template_name": "",
    "carrier_name": "",
    "mode_call": "direct",
    "network": {
        "viettel": 0,
        "mobi": 0,
        "vina": 0,
        "tel": 0,
        "offnet": 0
    },
    "run_id": "",
    "type_autocall": "autocall_audio",
    "call_timeout": 60,
    "domain_name": "",
    "users": [],
    "groups": [],
    "statuses": [],
    "schedules": [
        {
            "monday_start_time": 28800000000000,
            "monday_end_time": 75600000000000,
            "tuesday_start_time": 28800000000000,
            "tuesday_end_time": 75600000000000,
            "wednesday_start_time": 28800000000000,
            "wednesday_end_time": 75600000000000,
            "thursday_start_time": 28800000000000,
            "thursday_end_time": 75600000000000,
            "friday_start_time": 28800000000000,
            "friday_end_time": 75600000000000,
            "saturday_start_time": 28800000000000,
            "saturday_end_time": 75600000000000,
            "sunday_start_time": 28800000000000,
            "sunday_end_time": 75600000000000
        }
    ],
    "priority_recall": "normal",
    "recall_status": [
        "busy",
        "failed",
        "no-answered",
        "not-available",
        "voicemail",
        "invalid-number",
        "phone-block",
        "congestion"
    ],
    "enable_encrypt": false,
    "callback_url": "",
    "orig_campaign_uuid": ""
}'
```

> Response trả về:

```json
{
    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e"
}
```

> Error Response trả về:

```json
{
    "error": "campaign_name is already taken"
}
```
API này dùng để update chiến dịch autocall.

### HTTP Request

`PUT https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}`

### Body

> Sample data:

```json
{
    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",
    "campaign_name": "AutocallAudio",
    "type": "autocall",
    "description": "",
    "active": true,
    "concurrent_call": 5,
    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
    "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",
    "recall_times": 3,
    "limit_recall_duration": 0,
    "schedule_recall": "minute",
    "schedule_recall_duration": 1,
    "status": "stop",
    "created_at": "2023-03-06T16:27:17.784242+07:00",
    "updated_at": "2023-03-06T16:27:17.784242+07:00",
    "template_name": "",
    "carrier_name": "",
    "mode_call": "direct",
    "network": {
        "viettel": 0,
        "mobi": 0,
        "vina": 0,
        "tel": 0,
        "offnet": 0
    },
    "run_id": "",
    "type_autocall": "autocall_audio",
    "call_timeout": 60,
    "schedules": [
        {
            "monday_start_time": 28800000000000,
            "monday_end_time": 75600000000000,
            "tuesday_start_time": 28800000000000,
            "tuesday_end_time": 75600000000000,
            "wednesday_start_time": 28800000000000,
            "wednesday_end_time": 75600000000000,
            "thursday_start_time": 28800000000000,
            "thursday_end_time": 75600000000000,
            "friday_start_time": 28800000000000,
            "friday_end_time": 75600000000000,
            "saturday_start_time": 28800000000000,
            "saturday_end_time": 75600000000000,
            "sunday_start_time": 28800000000000,
            "sunday_end_time": 75600000000000
        }
    ],
    "priority_recall": "normal",
    "recall_status": [
        "busy",
        "failed",
        "no-answered",
        "not-available",
        "voicemail",
        "invalid-number",
        "phone-block",
        "congestion"
    ],
    "callback_url": ""
}
```

| Parameter                | Description                                                                                | Required |
| ------------------------ | ------------------------------------------------------------------------------------------ | -------- |
| campaign_name            | Tên chiến dịch                                                                             | x        |
| concurrent_call          | Số lượng cuộc gọi đồng thời                                                                |          |
| type                     | Loại chiến dich, bao gồm autodialer, autocall, inbound, manual                             | x        |
| template_uuid            | Kịch bản gọi autocall                                                                      |          |
| description              | Mô tả chiến dịch                                                                           |          |
| type_autocall            | Loại chiến dịch autocall, bao gồm autocall_voice_tts, autocall_audio va autocall_voice_otp |          |
| carrier_uuid             | UUID của carrier hay đầu số thực hiện cuộc gọi                                             |          |
| recall_times             | Số lần gọi lại                                                                             |          |
| limit_recall_duration    | Thời gian giới hạn gọi lại, tính theo giây                                                 |          |
| schedule_recall          | Lịch gọi lại                                                                               |          |
| schedule_recall_duration | Thời gian lịch gọi lại, tính theo phút                                                     |          |
| status                   | Trạng thái của chiến dịch, bao gồm stop, start, pause                                      |          |
| created_at               | Thời gian tạo chiến dịch                                                                   |          |
| updated_at               | Thời gian cập nhật chiến dịch                                                              |          |
| template_name            | Tên kịch bản gọi autocall                                                                  |          |
| carrier_name             | Tên carrier hay đầu số thực hiện cuộc gọi                                                  |          |
| mode_call                | Chế độ gọi, bao gồm direct, serial, parralel                                               |          |
| network                  | Gọi theo mạng di động, bao gồm viettel, mobi, vina, tel, offnet                            |          |
| run_id                   | ID của chiến dịch đang chạy                                                                |          |
| type_autocall            | Loại chiến dịch autocall, bao gồm autocall_voice_tts, autocall_audio va autocall_voice_otp |          |
| call_timeout             | Thời gian timeout cuộc gọi, tính theo giây                                                 |          |
| schedules                | Lịch gọi mỗi ngày của campaign, tính theo đơn vị nanosecond giây                           |          |
| priority_recall          | Độ ưu tiên gọi lại của campaign, bao gồm normal, recall                                    |          |
| recall_status            | Các trạng thái gọi lại của campaign                                                        |          |
| callback_url             | URL callback khi có CDR cuộc gọi                                                           |          |

## Get Campaign

```shell
curl --location 'https://{{API_HOST}}/v3/campaign' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",
            "campaign_name": "AutocallAudio",
            "type": "autocall",
            "description": "",
            "active": true,
            "concurrent_call": 5,
            "ratio": 100,
            "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
            "call_center_queue_uuid": "",
            "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",
            "recall_times": 3,
            "limit_recall_duration": 0,
            "schedule_recall": "minute",
            "schedule_recall_duration": 1,
            "hopper": 0,
            "answer_callback_url": "",
            "local_start_time": "",
            "local_end_time": "",
            "customer_order": "",
            "allow_manual_dial": false,
            "allow_search_lead": false,
            "enable_callback_alert": false,
            "default_list_uuid": "",
            "script_uuid": "",
            "status": "stop",
            "created_at": "2023-03-06T16:27:17.784242+07:00",
            "updated_at": "2023-03-06T18:27:35.482259+07:00",
            "call_center_queue_strategy": "",
            "template_name": "thong_bao_no_cuoc_01",
            "carrier_name": "Billing",
            "mode_call": "direct",
            "network": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "run_id": "",
            "type_autocall": "autocall_audio",
            "call_timeout": 60,
            "domain_name": "",
            "users": null,
            "groups": null,
            "statuses": null,
            "schedules": null,
            "priority_recall": "normal",
            "recall_status": [
                "busy",
                "failed",
                "no-answered",
                "not-available",
                "voicemail",
                "invalid-number",
                "phone-block",
                "congestion"
            ],
            "enable_encrypt": false,
            "callback_url": "",
            "orig_campaign_uuid": ""
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "campaign_name": "AutocallTTS",
            "type": "autocall",
            "description": "",
            "active": true,
            "concurrent_call": 1,
            "ratio": 100,
            "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
            "call_center_queue_uuid": "",
            "template_uuid": "",
            "recall_times": 0,
            "limit_recall_duration": 0,
            "schedule_recall": "after",
            "schedule_recall_duration": 0,
            "hopper": 20,
            "answer_callback_url": "",
            "local_start_time": "00:00:00",
            "local_end_time": "23:59:59",
            "customer_order": "id",
            "allow_manual_dial": true,
            "allow_search_lead": true,
            "enable_callback_alert": true,
            "default_list_uuid": "",
            "script_uuid": "",
            "status": "stop",
            "created_at": "2023-03-06T16:27:04.979847+07:00",
            "updated_at": "2023-03-06T16:27:04.979847+07:00",
            "call_center_queue_strategy": "",
            "template_name": "",
            "carrier_name": "Billing",
            "mode_call": "direct",
            "network": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "run_id": "",
            "type_autocall": "autocall_voice_tts",
            "call_timeout": 60,
            "domain_name": "",
            "users": null,
            "groups": null,
            "statuses": null,
            "schedules": null,
            "priority_recall": "normal",
            "recall_status": [
                "answered",
                "busy",
                "failed",
                "no-answered",
                "not-available",
                "voicemail",
                "invalid-number",
                "phone-block",
                "congestion"
            ],
            "enable_encrypt": false,
            "callback_url": "",
            "orig_campaign_uuid": ""
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 2
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/template`

### Query Parameters

| Parameter | Description                                                     | Example  |
| --------- | --------------------------------------------------------------- | -------- |
| type      | Loại chiến dịch bao gồm autocall, autodialer, inbound và manual | autocall |
| limit     | Số lượng record trả về                                          | 10       |
| offset    | Vị trí bắt đầu khi query                                        | 0        |

## Get Campaign By Id

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/campaign/853b76cc-bffb-4d1b-9f9e-19b1a0fe7894' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
    "campaign_uuid": "853b76cc-bffb-4d1b-9f9e-19b1a0fe7894",
    "campaign_name": "VoiceOTP110",
    "type": "autocall",
    "description": "",
    "active": true,
    "concurrent_call": 11,
    "ratio": 100,
    "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
    "call_center_queue_uuid": "",
    "template_uuid": "",
    "recall_times": 0,
    "limit_recall_duration": 0,
    "schedule_recall": "after",
    "schedule_recall_duration": 0,
    "hopper": 20,
    "answer_callback_url": "",
    "local_start_time": "00:00:00",
    "local_end_time": "23:59:59",
    "customer_order": "id",
    "allow_manual_dial": true,
    "allow_search_lead": true,
    "enable_callback_alert": true,
    "default_list_uuid": "",
    "script_uuid": "",
    "status": "stop",
    "created_at": "2023-03-06T17:06:15.737234+07:00",
    "updated_at": "2023-03-06T17:06:15.737234+07:00",
    "call_center_queue_strategy": "",
    "template_name": "",
    "carrier_name": "",
    "mode_call": "direct",
    "network": {
        "viettel": 0,
        "mobi": 0,
        "vina": 0,
        "tel": 0,
        "offnet": 0
    },
    "run_id": "",
    "type_autocall": "autocall_voice_tts",
    "call_timeout": 60,
    "domain_name": "",
    "users": null,
    "groups": null,
    "statuses": null,
    "schedules": [
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "id": "885a7085-0404-484f-9c8f-3dd19c04bc8f",
            "campaign_uuid": "853b76cc-bffb-4d1b-9f9e-19b1a0fe7894",
            "monday_start_time": 28800000000000,
            "monday_end_time": 75600000000000,
            "tuesday_start_time": 28800000000000,
            "tuesday_end_time": 75600000000000,
            "wednesday_start_time": 28800000000000,
            "wednesday_end_time": 75600000000000,
            "thursday_start_time": 28800000000000,
            "thursday_end_time": 75600000000000,
            "friday_start_time": 28800000000000,
            "friday_end_time": 75600000000000,
            "saturday_start_time": 28800000000000,
            "saturday_end_time": 75600000000000,
            "sunday_start_time": 28800000000000,
            "sunday_end_time": 75600000000000
        }
    ],
    "priority_recall": "normal",
    "recall_status": [
        "answered",
        "busy",
        "failed",
        "no-answered",
        "not-available",
        "voicemail",
        "invalid-number",
        "phone-block",
        "congestion"
    ],
    "enable_encrypt": false,
    "callback_url": "",
    "orig_campaign_uuid": ""
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}`

### Query Parameters

| Parameter     | Description         |
| ------------- | ------------------- |
| campaign_uuid | UUID của chiến dịch |

## Patch Campagin

```shell
curl --location --request PATCH 'https://{{API_HOST}}/v3/campaign/5ec47358-d062-4385-9fe7-b5e571055f01/active' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
  "active": false
}'
```

> Response trả về:

```json
{
    "active": false,
    "campaign_uuid": "5ec47358-d062-4385-9fe7-b5e571055f01"
}
```

> Error Response trả về:

```json
{
    "error": "Not Found"
}
```

```json
{
    "error": "active is missing"
}
```

API này dùng để chuyển đổi trạng thái chiến dịch từ Active sang Deactive và ngược lại.

### HTTP Request

`PATCH https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}/active`

### Body

> Sample data:

```json
{
  "active": false
}
```

| Parameter     | Description                                      | Required |
| ------------- | ------------------------------------------------ | -------- |
| campaign_uuid | UUID của chiến dịch                              | x        |
| active        | Trạng thái của chiến dịch, bao gồm true và false | x        |

## Delete Campaign

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/campaign/4be67f66-4228-480e-b86d-8f333dc46c3c' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "campaign_uuid": "4be67f66-4228-480e-b86d-8f333dc46c3c"
}
```
> Error Response trả về:
```json
{
    "error": "campaign must be deactive"
}
```
```json
{
    "error": "Not Found"
}
```
API này dùng để xóa chiến dịch.
### HTTP Request

`DELETE https://{{API_HOST}}/v3/campaign/{{campaign_uuid}}`