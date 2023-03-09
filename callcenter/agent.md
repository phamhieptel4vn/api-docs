---
title: Agent
sidebar_position: 13
---

### Attributes

| Attribute        | Description                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| user_live_uuid   | UUID của agent                                                                                 |
| user_uuid        | UUID của user                                                                                  |
| username         | Tên đăng nhập của agent                                                                        |
| extension        | Số máy của agent                                                                               |
| extension_uuid   | UUID của extension                                                                             |
| domain_uuid      | UUID của domain đang sử dụng                                                                   |
| domain_name      | Tên của domain đang sử dụng                                                                    |
| campaign_uuid    | UUID của campaign mà agent đang làm việc                                                       |
| status           | Trạng thái của agent, có thể là `RESUME` hoặc `PAUSE`                                          |
| pause_code       | Mã pause code của agent, nếu agent đang pause thì sẽ có giá trị, nếu không thì sẽ là `""`      |
| login_time       | Thời gian agent login vào hệ thống, có định dạng `YYYY-MM-DDTHH:MM:SS+07:00`                   |
| last_update_time | Thời gian agent cuối cùng update trạng thái của mình, có định dạng `YYYY-MM-DDTHH:MM:SS+07:00` |
| last_name        | Họ của agent                                                                                   |
| middle_name      | Tên đệm của agent                                                                              |
| first_name       | Tên của agent                                                                                  |

## Get Agent Live

```shell
curl --location 'https://{{API_HOST}}/v3/agent/live' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",
            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
            "username": "Agent04Internal",
            "extension": "104",
            "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "domain_name": "internal.tel4vn.com",
            "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
            "status": "RESUME",
            "pause_code": "",
            "login_time": "2023-03-08T13:45:10.906065+07:00",
            "last_update_time": "2023-03-08T13:54:41.253266+07:00",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent04Internal"
        }
    ]
}
```
API này để lấy danh sách các agent đang online trên hệ thống.
### HTTP Request

`GET https://{{API_HOST}}/v3/agent/live`

## Get Agent By ID

```shell
curl --location 'https://{{API_HOST}}/v3/agent/e0406808-4be4-4e43-9ec5-512d91e2b95e' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
--data ''
```

> Response trả về:

```json
{
    "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "username": "Agent01Internal",
    "user_enabled": "true",
    "user_status": "Logged Out",
    "level": "agent",
    "last_name": "",
    "middle_name": "",
    "first_name": "Agent01Internal",
    "total_subscriber": 0,
    "campaigns": [
        {
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
            "campaign_name": "Campaign của Duy Phùng",
            "type": "autodialer"
        }
    ],
    "user_live": null
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/agent/{{user_uuid}}`

## Get Extension Of Agent

```shell
curl --location 'https://{{API_HOST}}/v3/agent/extension' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "extension_uuid": "1196cc87-44c5-4dc6-9bce-2906a1371cd9",
            "extension": "101",
            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",
            "username": "Agent01Internal",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        },
        {
            "extension_uuid": "03f8147d-54df-4daf-8d42-77baad51f2e2",
            "extension": "102",
            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b",
            "username": "Agent02Internal",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        },
        {
            "extension_uuid": "f97a0230-4c24-4b64-ae8c-7473076dfba9",
            "extension": "103",
            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae",
            "username": "Agent03Internal",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        },
        {
            "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
            "extension": "104",
            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
            "username": "Agent04Internal",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        },
        {
            "extension_uuid": "58378f4d-f5c4-433c-a62b-e3131735ee98",
            "extension": "213",
            "user_uuid": "81769d49-6dd1-4186-ba77-e5126b444a5c",
            "username": "UserTest",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        },
        {
            "extension_uuid": "005f0830-5a0b-4829-8ab4-07dd2614a529",
            "extension": "214",
            "user_uuid": "8f1bf511-ed93-43df-8780-4c62bce44324",
            "username": "UserTest01",
            "enabled": "true",
            "domain_name": "internal.tel4vn.com",
            "is_link_call_center": true
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 6
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/agent/extension`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |


## Post Agent Login Into Campaign

```shell
curl --location 'https://{{API_HOST}}/v3/agent/login' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
    "extension": "104"
}'
```


> Response trả về:

```json
{
    "data": {
        "user_live_uuid": "dc80a21e-4867-4b30-a213-d4562371295a",
        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
        "username": "Agent04Internal",
        "extension": "104",
        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
        "domain_name": "internal.tel4vn.com",
        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
        "status": "PAUSE",
        "pause_code": "",
        "login_time": "2023-03-08T11:59:45.951270386+07:00",
        "last_update_time": "2023-03-08T11:59:45.951270491+07:00"
    },
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": "user is already logged in"
}
```
```json
{
    "error": "campaign_uuid is invalid"
}
```
```json
{
    "error": "campaign_uuid is invalid"
}
```
API này dùng để login agent vào campaign.

### HTTP Request

`POST https://{{API_HOST}}/v3/agent/login`

### Body

> Sample data:

```json
{
    "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
    "extension": "104"
}
```

| Parameter     | Description       | Required |
| ------------- | ----------------- | -------- |
| campaign_uuid | UUID của campaign | x        |
| extension     | Số máy của agent  | x        |

## Post Agent Resume

```shell
curl --location 'https://{{API_HOST}}/v3/agent/resume' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "extension": "104"
}'
```


> Response trả về:

```json
{
    "data": {
        "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",
        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
        "username": "Agent04Internal",
        "extension": "104",
        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
        "domain_name": "internal.tel4vn.com",
        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
        "status": "RESUME",
        "pause_code": "",
        "login_time": "2023-03-08T13:45:10.906065+07:00",
        "last_update_time": "2023-03-08T13:49:00.244295344+07:00"
    },
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": "user_uuid or extension is missing"
}
```

API này dùng để chuyển trạng thái của agent đang login trong chiến dịch về resume.

### HTTP Request

`POST https://{{API_HOST}}/v3/agent/resume`

### Body

> Sample data:

```json
{
    "extension": "104"
}
```

| Parameter | Description      | Required |
| --------- | ---------------- | -------- |
| extension | Số máy của agent | x        |

## Post Agent Pause

```shell
curl --location 'https://{{API_HOST}}/v3/agent/pause' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "extension": "104"
}'
```


> Response trả về:

```json
{
    "data": {
        "user_live_uuid": "e333172c-3883-4649-8d7b-e7be3e271072",
        "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
        "username": "Agent04Internal",
        "extension": "104",
        "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
        "domain_name": "internal.tel4vn.com",
        "campaign_uuid": "23406d2c-19e5-4f7b-a1ce-bfea5c2ff081",
        "status": "PAUSE",
        "pause_code": "",
        "login_time": "2023-03-08T13:45:10.906065+07:00",
        "last_update_time": "2023-03-08T15:22:22.328024516+07:00"
    },
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": "user_uuid or extension is missing"
}
```

API này dùng để chuyển trạng thái của agent đang login trong chiến dịch về pause.

### HTTP Request

`POST https://{{API_HOST}}/v3/agent/pause`

### Body

> Sample data:

```json
{
    "extension": "104"
}
```

| Parameter | Description      | Required |
| --------- | ---------------- | -------- |
| extension | Số máy của agent | x        |

