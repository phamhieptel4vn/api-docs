---
title: User
sidebar_position: 11
---

## Get User

```shell
curl --location 'https://{{API_HOST}}/v3/user' \
--header 'Authorization: Bearer {{API_HOST}}' \
--data ''
```

> Response trả về:

```json
{
    "data": [
        {
            "user_uuid": "6edf50ad-d68f-424e-b631-d2128e173a36",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "AdminInternal",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Available",
            "group_name": "",
            "level": "admin",
            "last_name": "",
            "middle_name": "",
            "first_name": "",
            "groups": [
                {
                    "group_uuid": "ffc3b322-a0d8-442a-aa09-30f96f9a9050",
                    "domain_uuid": "",
                    "group_name": "admin",
                    "group_description": "Administrator Group",
                    "department_uuid": ""
                }
            ],
            "campaigns": null,
            "role_uuid": "065725d7-a859-447b-ad5c-7c27018eb241",
            "role_name": "AdminInternal",
            "email": "AdminInternal@gmail.com",
            "enable_webrtc": false,
            "extension": ""
        },
        {
            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "Agent01Internal",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent01Internal",
            "groups": [
                {
                    "group_uuid": "66cd437f-5898-4848-aa1f-ee004add3850",
                    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
                    "group_name": "Agent",
                    "group_description": "",
                    "department_uuid": ""
                }
            ],
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "Agent01Internal",
            "enable_webrtc": false,
            "extension": "101"
        },
        {
            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "Agent02Internal",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent02Internal",
            "groups": null,
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "Agent02Internal",
            "enable_webrtc": false,
            "extension": "102"
        },
        {
            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "Agent03Internal",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent03Internal",
            "groups": null,
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "Agent03Internal@gmail.com",
            "enable_webrtc": false,
            "extension": "103"
        },
        {
            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "Agent04Internal",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent04Internal",
            "groups": null,
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "Agent04Internal@gmail.com",
            "enable_webrtc": false,
            "extension": "104"
        },
        {
            "user_uuid": "81769d49-6dd1-4186-ba77-e5126b444a5c",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "UserTest",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "UserTest",
            "groups": null,
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "",
            "enable_webrtc": false,
            "extension": "213"
        },
        {
            "user_uuid": "8f1bf511-ed93-43df-8780-4c62bce44324",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "UserTest01",
            "api_key": "",
            "user_enabled": "true",
            "user_status": "Logged Out",
            "group_name": "",
            "level": "agent",
            "last_name": "",
            "middle_name": "",
            "first_name": "UserTest",
            "groups": null,
            "campaigns": null,
            "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
            "role_name": "Agent",
            "email": "",
            "enable_webrtc": false,
            "extension": "214"
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 7
}
```

API dùng để lấy thông tin của người dùng trên hệ thống.

| Parameter     | Description                                      |
| ------------- | ------------------------------------------------ |
| user_uuid     | UUID người dùng                                  |
| domain_uuid   | UUID của domain mà người dùng                    |
| username      | Tên đăng nhập của người dùng                     |
| api_key       | API key của người dùng                           |
| user_enabled  | Trạng thái của người dùng, bao gồm true và false |
| user_status   | Trạng thái của người dùng                        |
| group_name    | Tên nhóm mà người dùng                           |
| level         | Cấp độ của người dùng                            |
| last_name     | Họ của người dùng                                |
| middle_name   | Tên đệm của người dùng                           |
| first_name    | Tên của người dùng                               |
| groups        | Danh sách các nhóm mà người dùng                 |
| campaigns     | Danh sách các chiến dịch mà người dùng           |
| role_uuid     | UUID của vai trò mà người dùng                   |
| role_name     | Tên của vai trò mà người dùng                    |
| email         | Email của người dùng                             |
| enable_webrtc | Trạng thái của WebRTC, bao gồm true và false     |
| extension     | Số máy của người dùng                            |

### HTTP Request

`GET https://{{API_HOST}}/v3/user`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |

## Get User By ID

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/user/6edf50ad-d68f-424e-b631-d2128e173a36' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "user_uuid": "6edf50ad-d68f-424e-b631-d2128e173a36",
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "username": "AdminInternal",
    "api_key": "",
    "user_enabled": "true",
    "user_status": "Available",
    "group_name": "",
    "level": "admin",
    "last_name": "",
    "middle_name": "",
    "first_name": "",
    "groups": [
        {
            "group_uuid": "ffc3b322-a0d8-442a-aa09-30f96f9a9050",
            "domain_uuid": "",
            "group_name": "admin",
            "group_description": "Administrator Group",
            "department_uuid": ""
        }
    ],
    "campaigns": null,
    "role_uuid": "065725d7-a859-447b-ad5c-7c27018eb241",
    "role_name": "AdminInternal",
    "email": "AdminInternal@gmail.com",
    "enable_webrtc": false,
    "extension": ""
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/user/{{user_uuid}}`

### Query Parameters

| Parameter | Description   |
| --------- | ------------- |
| user_uuid | UUID của user |

## Create User

```shell
curl --location 'https://{{API_HOST}}/v3/user' \
--header 'content-type: application/json' \
--header 'authorization: Bearer {{TOKEN}}' \
--data '{
    "username": "UserTest01",
    "email": "",
    "level": "agent",
    "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
    "password": "User01231##1",
    "confirm_password": "UserTest",
    "first_name": "UserTest",
    "extension": "214",
    "is_create_extension": true,
    "is_active": true,
    "enable_webrtc": false
}'
```

> Response trả về:

```json
{
    "created": true,
    "user_uuid": "8f1bf511-ed93-43df-8780-4c62bce44324"
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "username": "String length must be greater than or equal to 1"
        },
        {
            "username": "Does not match pattern '^[a-zA-Z0-9\\s.\\-\\_]+$'"
        }
    ]
}
```
```json
{
    "error": [
        {
            "password": "String length must be greater than or equal to 1"
        }
    ]
}
```

API này dùng để tạo user mới trên hệ thống.

### HTTP Request

`POST https://{{API_HOST}}/v3/user`

### Body

> Sample data:

```json
{
    "username": "UserTest01",
    "email": "",
    "level": "agent",
    "role_uuid": "34272d8f-5aa2-4a97-ae9a-be20d499dc2a",
    "password": "User01231##1",
    "confirm_password": "UserTest",
    "first_name": "UserTest",
    "extension": "214",
    "is_create_extension": true,
    "is_active": true,
    "enable_webrtc": false
}
```

| Parameter           | Description                                                                | Required |
| ------------------- | -------------------------------------------------------------------------- | -------- |
| username            | Tên đăng nhập của user                                                     | x        |
| email               | Email của user                                                             |          |
| level               | Cấp độ của user                                                            | x        |
| role_uuid           | UUID của vai trò của user                                                  | x        |
| password            | Mật khẩu của user                                                          | x        |
| confirm_password    | Mật khẩu xác nhận của user                                                 | x        |
| first_name          | Tên của user                                                               |          |
| extension           | Số máy của user                                                            |          |
| is_create_extension | Tạo số máy mới cho user. Nếu có tạo truyền là true, không tạo truyền false |          |
| is_active           | Trạng thái của user. Nếu là true thì user được kích hoạt                   |          |
| enable_webrtc       | Trạng thái của WebRTC. Nếu là true thì user được kích hoạt WebRTC          |          |