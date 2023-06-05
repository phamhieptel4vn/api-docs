---
title: Autodial
sidebar_position: 8
---

## Create Campaign Autodialer
  
```shell 
  curl --location 'https://{{API_HOST}}/v3/campaign' \
--header 'content-type: application/json' \
--header 'authorization: Bearer {{TOKEN}}' \
--data '{
    "campaign_name": "Get Log Autodilaer",
    "type": "autodialer",
    "ratio": 100,
    "custom_ratio": 100,
    "concurrent_call": 1,
    "description": "",
}'
```

> Response trả về:

```json
{
    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "created": true,
    "dialplan_uuid": "07f87476-90e0-4786-b697-1cb84dd0d24c"
}
```

> Error response trả về:

```json
{
    "error": "campaign_name is already taken"
}
```

```json
{
    "error": [
        {
            "campaign_name": "String length must be greater than or equal to 1"
        }
    ]
}
```

## Update Campaign

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "campaign_name": "Campaign Autodialer",
    "type": "autodialer",
    "description": "Campaign Autodialer",
    "active": false,
    "concurrent_call": 0,
    "ratio": 100,
    "carrier_uuid": "",
    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",
    "recall_times": 0,
    "limit_recall_duration": 0,
    "schedule_recall": "after",
    "schedule_recall_duration": 0,
    "hopper": 20,
    "answer_callback_url": "",
    "local_start_time": "08:00:00",
    "local_end_time": "17:30:00",
    "customer_order": "id",
    "allow_manual_dial": false,
    "allow_search_lead": false,
    "enable_callback_alert": false,
    "call_center_queue_strategy": "ring-all",
    "users": null,
    "groups": null,
    "statuses": null
}'
```

> Response trả về:

```json
{
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"
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
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "campaign_name": "Campaign Autodialer",
    "type": "autodialer",
    "description": "Campaign Autodialer",
    "active": false,
    "concurrent_call": 0,
    "ratio": 100,
    "carrier_uuid": "",
    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",
    "recall_times": 0,
    "limit_recall_duration": 0,
    "schedule_recall": "after",
    "schedule_recall_duration": 0,
    "hopper": 20,
    "answer_callback_url": "",
    "local_start_time": "08:00:00",
    "local_end_time": "17:30:00",
    "customer_order": "id",
    "allow_manual_dial": false,
    "allow_search_lead": false,
    "enable_callback_alert": false,
    "call_center_queue_strategy": "ring-all",
    "users": null,
    "groups": null,
    "statuses": null
}
```

| Parameter                  | Description                                                                                                           | Required |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------- |
| campaign_name              | Tên chiến dịch                                                                                                        | x        |
| concurrent_call            | Số lượng cuộc gọi đồng thời                                                                                           |          |
| type                       | Loại chiến dich, bao gồm autodialer, autocall, inbound, manual                                                        | x        |
| template_uuid              | Kịch bản gọi autocall                                                                                                 |          |
| description                | Mô tả chiến dịch                                                                                                      |          |
| active                     | Trạng thái active của chiến dịch (true/false)                                                                         | x        |
| ratio                      | Tỉ lệ, tốc độ gọi autodial của chiến dịch, bao gồm: 100, 150, 200, 300, 400                                           | x        |
| carrier_uuid               | UUID của carrier hay đầu số thực hiện cuộc gọi                                                                        |          |
| recall_times               | Số lần gọi lại                                                                                                        |          |
| limit_recall_duration      | Thời gian giới hạn gọi lại, tính theo giây                                                                            |          |
| schedule_recall            | Lịch gọi lại, bao gồm after (gọi lại ngay) và minute (gọi lại sau bao nhiêu phút)                                     |          |
| hopper                     | Số lượng lead đẩy vào hàng chờ, bắt buộc đặt trong khoảng từ 10 đến 100                                               | x        |
| schedule_recall_duration   | Thời gian lịch gọi lại, tính theo phút. Require khi schedule_recall là minute                                         | x        |
| call_center_queue_strategy | Chế độ đổ chuông các agent trong callcenter, bao gồm ring-all, top-down, agent-with-fewest-calls, round-robin, random | x        |
| local_start_time           | Thời gian bắt đầu gọi của chiến dịch autodial. Example: 08:00:00                                                      | x        |
| local_end_time             | Thời gian kết thúc gọi của chiến dịch autodial. Example: 17:30:00                                                     | x        |
| allow_manual_dial          | Cho phép agent gọi manual (true/false)                                                                                |          |
| enable_callback_alert      | Cho phép gửi thông báo callback cho agent khi có cuộc gọi đến (true/false)                                            |          |
| mode_call                  | Chế độ gọi, bao gồm direct, serial, parralel                                                                          |          |
| network                    | Gọi theo mạng di động, bao gồm viettel, mobi, vina, tel, offnet                                                       |          |
| call_timeout               | Thời gian timeout cuộc gọi, tính theo giây                                                                            |          |
| statuses_selectable        | Các call result cho phép agent chọn trong chiến dịch                                                                  |          |
| users                      | Danh sách các user được assign vào chiến dịch (type: array)                                                           |          |
| groups                     | Danh sách các group được assign vào chiến dịch (type: array)ß                                                         |          |
| priority_recall            | Độ ưu tiên gọi lại của campaign, bao gồm normal, recall                                                               |          |
| recall_status              | Các trạng thái gọi lại của campaign. Example: ['not-available', 'phone-block', 'congestion']                          |          |
| callback_url               | URL callback khi có CDR cuộc gọi                                                                                      |          |
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
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
            "campaign_name": "Campaign Autodialer",
            "type": "autodialer",
            "description": "Campaign Autodialer",
            "active": false,
            "concurrent_call": 0,
            "ratio": 100,
            "carrier_uuid": "",
            "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",
            "template_uuid": "",
            "recall_times": 0,
            "limit_recall_duration": 0,
            "schedule_recall": "after",
            "schedule_recall_duration": 0,
            "hopper": 20,
            "answer_callback_url": "",
            "local_start_time": "08:00:00",
            "local_end_time": "17:30:00",
            "customer_order": "id",
            "allow_manual_dial": false,
            "allow_search_lead": false,
            "enable_callback_alert": false,
            "default_list_uuid": "",
            "script_uuid": "",
            "status": "",
            "created_at": "2023-03-06T17:57:54.65043+07:00",
            "updated_at": "2023-03-06T21:48:05.663105+07:00",
            "call_center_queue_strategy": "ring-all",
            "template_name": "",
            "carrier_name": "",
            "mode_call": "",
            "network": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "run_id": "",
            "type_autocall": "",
            "call_timeout": 0,
            "domain_name": "",
            "users": null,
            "groups": null,
            "statuses": null,
            "schedules": null,
            "priority_recall": "",
            "recall_status": null,
            "enable_encrypt": false,
            "callback_url": "",
            "orig_campaign_uuid": ""
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 1
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
curl -L -X GET 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "campaign_name": "Campaign Autodialer",
    "type": "autodialer",
    "description": "Campaign Autodialer",
    "active": false,
    "concurrent_call": 0,
    "ratio": 100,
    "carrier_uuid": "",
    "call_center_queue_uuid": "ed9c141b-2699-4ad4-beee-15fd4e2ef630",
    "template_uuid": "",
    "recall_times": 0,
    "limit_recall_duration": 0,
    "schedule_recall": "after",
    "schedule_recall_duration": 0,
    "hopper": 20,
    "answer_callback_url": "",
    "local_start_time": "08:00:00",
    "local_end_time": "17:30:00",
    "customer_order": "id",
    "allow_manual_dial": false,
    "allow_search_lead": false,
    "enable_callback_alert": false,
    "default_list_uuid": "",
    "script_uuid": "",
    "status": "",
    "created_at": "2023-03-06T17:57:54.65043+07:00",
    "updated_at": "2023-03-06T21:48:05.663105+07:00",
    "call_center_queue_strategy": "ring-all",
    "template_name": "",
    "carrier_name": "",
    "mode_call": "",
    "network": {
        "viettel": 0,
        "mobi": 0,
        "vina": 0,
        "tel": 0,
        "offnet": 0
    },
    "run_id": "",
    "type_autocall": "",
    "call_timeout": 0,
    "domain_name": "",
    "users": null,
    "groups": null,
    "statuses": null,
    "schedules": null,
    "priority_recall": "",
    "recall_status": null,
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

## Assign Extension Of User To Campaign

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07/assign_extension' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "extensions" : [
        "102","103","101"
    ]
}'
```

> Response trả về:

```json
{
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "users": [
        {
            "extension": "102",
            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b"
        },
        {
            "extension": "103",
            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae"
        },
        {
            "extension": "101",
            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e"
        }
    ]
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "extensions": "Invalid type. Expected: array, given: null"
        }
    ]
}
```
```shell

## Patch Campagin

```shell
curl --location --request PATCH 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07/active' \
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
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"
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
curl --location --request DELETE 'https://{{API_HOST}}/v3/campaign/7bbe986b-8a6e-404c-840b-781102b5aa07' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07"
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