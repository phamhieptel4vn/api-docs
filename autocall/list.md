---
title: List
sidebar_position: 4
---

## Create List

```shell
curl --location 'https://{{API_HOST}}/v3/list' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
    "list_name": "ListAutocall02",
    "description": ""
}'
```

> Response trả về:

```json
{
    "created": true,
    "list_uuid": "0e75bac1-d682-4dae-b3a5-e4a7734ddf15"
}
```

> Error Response trả về:

```json
{
    "error": "list_name is exists"
}
```
```json
{
    "error": [
        {
            "campaign_uuid": "String length must be greater than or equal to 1"
        }
    ]
}
```

API này dùng để tạo danh sách cho chiến dịch autocall.

### HTTP Request

`POST https://{{API_HOST}}/v3/list`

### Body

> Sample data:

```json
{
    "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
    "list_name": "ListAutocall02",
    "description": ""
}
```

| Parameter     | Description                          | Required |
| ------------- | ------------------------------------ | -------- |
| campaign_uuid | UUID của chiến dịch cần gán list vào | x        |
| list_name     | Tên danh sách                        | x        |
| description   | Mô tả danh sách                      |          |

## Get List

```shell
curl --location 'https://{{API_HOST}}/v3/list' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "domain_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "list_uuid": "7342c277-2c8b-4719-bbbb-212fc4a610b1",
            "list_name": "Default Outbound Call",
            "campaign_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "description": "Default Outbound Call",
            "reset_time": "0001-01-01T00:00:00Z",
            "active": true,
            "user_uuid": "",
            "created_at": "2022-11-24T11:46:40.482224+07:00",
            "updated_at": "2022-11-24T11:46:40.482224+07:00",
            "total_leads": 0,
            "total_fields": 0,
            "campaign_name": "",
            "username": "",
            "firstname": "",
            "middlename": "",
            "lastname": "",
            "total_upload": 0,
            "total_success": 0,
            "total_fail": 0,
            "recall_status": null
        },
        {
            "domain_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "list_uuid": "f6624228-3bf3-4ed4-bb0e-9527bb8cc3cb",
            "list_name": "Default Inbound Call",
            "campaign_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "description": "Default Inbound Call",
            "reset_time": "0001-01-01T00:00:00Z",
            "active": true,
            "user_uuid": "",
            "created_at": "2022-11-24T11:46:40.486343+07:00",
            "updated_at": "2022-11-24T11:46:40.486343+07:00",
            "total_leads": 0,
            "total_fields": 0,
            "campaign_name": "",
            "username": "",
            "firstname": "",
            "middlename": "",
            "lastname": "",
            "total_upload": 0,
            "total_success": 0,
            "total_fail": 0,
            "recall_status": null
        },
        {
            "domain_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "list_uuid": "d1e0376f-ad67-481c-a024-1f33e33b82bf",
            "list_name": "Default Inbound Call Outside working hours",
            "campaign_uuid": "37f41c50-48b6-4b7d-8774-bf530e6cc58c",
            "description": "Default Inbound Call Outside working hours",
            "reset_time": "0001-01-01T00:00:00Z",
            "active": true,
            "user_uuid": "",
            "created_at": "2022-11-24T11:46:40.488549+07:00",
            "updated_at": "2022-11-24T11:46:40.488549+07:00",
            "total_leads": 0,
            "total_fields": 0,
            "campaign_name": "",
            "username": "",
            "firstname": "",
            "middlename": "",
            "lastname": "",
            "total_upload": 0,
            "total_success": 0,
            "total_fail": 0,
            "recall_status": null
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "list_uuid": "c455faf5-2674-4c06-ae73-8259943c3a87",
            "list_name": "ListAutocall01",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "description": "",
            "reset_time": "0001-01-01T00:00:00Z",
            "active": true,
            "user_uuid": "",
            "created_at": "2023-03-07T10:40:13.216056+07:00",
            "updated_at": "2023-03-07T10:40:13.216056+07:00",
            "total_leads": 9,
            "total_fields": 0,
            "campaign_name": "AutocallTTS",
            "username": "",
            "firstname": "",
            "middlename": "",
            "lastname": "",
            "total_upload": 0,
            "total_success": 9,
            "total_fail": 0,
            "recall_status": null
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "list_uuid": "0e75bac1-d682-4dae-b3a5-e4a7734ddf15",
            "list_name": "ListAutocall02",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "description": "",
            "reset_time": "0001-01-01T00:00:00Z",
            "active": true,
            "user_uuid": "",
            "created_at": "2023-03-07T14:04:07.040719+07:00",
            "updated_at": "2023-03-07T14:04:07.040719+07:00",
            "total_leads": 0,
            "total_fields": 0,
            "campaign_name": "AutocallTTS",
            "username": "",
            "firstname": "",
            "middlename": "",
            "lastname": "",
            "total_upload": 0,
            "total_success": 0,
            "total_fail": 0,
            "recall_status": null
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 5
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/list`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |

## Get List By Id

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/list/c455faf5-2674-4c06-ae73-8259943c3a87' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
    "list_uuid": "c455faf5-2674-4c06-ae73-8259943c3a87",
    "list_name": "ListAutocall01",
    "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
    "description": "",
    "reset_time": "0001-01-01T00:00:00Z",
    "active": true,
    "user_uuid": "",
    "created_at": "2023-03-07T10:40:13.216056+07:00",
    "updated_at": "2023-03-07T10:40:13.216056+07:00",
    "total_leads": 9,
    "total_fields": 0,
    "campaign_name": "AutocallTTS",
    "username": "",
    "firstname": "",
    "middlename": "",
    "lastname": "",
    "total_upload": 0,
    "total_success": 9,
    "total_fail": 0,
    "recall_status": null
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/list/{{list_uuid}}`

### Query Parameters

| Parameter | Description        |
| --------- | ------------------ |
| list_uuid | UUID của danh sách |

## Patch List

```shell
curl --location --request PATCH 'https://{{API_HOST}}/v3/list/0e75bac1-d682-4dae-b3a5-e4a7734ddf15/active' \
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
    "list_uuid": "0e75bac1-d682-4dae-b3a5-e4a7734ddf15"
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

`PATCH https://{{API_HOST}}/v3/list/{{list_uuid}}/active`

### Body

> Sample data:

```json
{
  "active": false
}
```

| Parameter | Description                                     | Required |
| --------- | ----------------------------------------------- | -------- |
| list_uuid | UUID của chiến dịch                             | x        |
| active    | Trạng thái của danh sách, bao gồm true và false | x        |

## Delete List

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/list/0e75bac1-d682-4dae-b3a5-e4a7734ddf15' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "list_uuid": "0e75bac1-d682-4dae-b3a5-e4a7734ddf15"
}
```
> Error Response trả về:

```json
{
    "error": "Not Found"
}
```
API này dùng để xóa danh sách.
### HTTP Request

`DELETE https://{{API_HOST}}/v3/list/{{list_uuid}}`