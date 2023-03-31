---
title: Report
sidebar_position: 16
---

## Report Based On Users

Report dựa trên user.

```shell
curl --location 'https://{{API_HOST}}/v3/report/call/user' \
--header 'content-type: application/json' \
--header 'authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "user_uuid": "e0406808-4be4-4e43-9ec5-512d91e2b95e",
            "extension_uuid": "1196cc87-44c5-4dc6-9bce-2906a1371cd9",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "101",
            "username": "Agent01Internal",
            "first_name": "Agent01Internal",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
            "extension_uuid": "ae1924fc-b636-47a3-a560-bcce426fcee9",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "104",
            "username": "Agent04Internal",
            "first_name": "Agent04Internal",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "88eb52e9-39d6-41e7-b406-0c02f1a5b797",
            "extension_uuid": "",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "",
            "username": "SuperAdmin",
            "first_name": "",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "81769d49-6dd1-4186-ba77-e5126b444a5c",
            "extension_uuid": "58378f4d-f5c4-433c-a62b-e3131735ee98",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "213",
            "username": "UserTest",
            "first_name": "UserTest",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "8f1bf511-ed93-43df-8780-4c62bce44324",
            "extension_uuid": "005f0830-5a0b-4829-8ab4-07dd2614a529",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "214",
            "username": "UserTest01",
            "first_name": "UserTest",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "93b8984b-7a10-4b57-b6fc-6f767d94ea1b",
            "extension_uuid": "03f8147d-54df-4daf-8d42-77baad51f2e2",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "102",
            "username": "Agent02Internal",
            "first_name": "Agent02Internal",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        },
        {
            "user_uuid": "9d21687d-c4a7-44de-b8f9-bd31f767d9ae",
            "extension_uuid": "f97a0230-4c24-4b64-ae8c-7473076dfba9",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "extension": "103",
            "username": "Agent03Internal",
            "first_name": "Agent03Internal",
            "middle_name": "",
            "last_name": "",
            "level": "",
            "email": "",
            "groups": null,
            "departments": null,
            "add_date": ""
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi dựa trên các user.

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/user`

### Query Parameters

| Parameter  | Description                    | Example                   | Required |
| ---------- | ------------------------------ | ------------------------- | -------- |
| start_time | Thống kê theo khoảng thời gian | 2023-03-07%2000%3A00%3A00 |          |
| end_time   | Thống kê theo khoảng thời gian | 2023-03-07%2023%3A59%3A59 |          |

## Report Extension Summary

Report tổng hợp theo extension.

```shell
curl --location 'https://{{API_HOST}}/v2/report/extension' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "code": 200,
    "content": "successfully",
    "data": [
        {
            "answered": 2,
            "busy": 2,
            "busy_line": 0,
            "cancel": 0,
            "extension": "101",
            "extension_id": "e445b7dd-cc34-48b5-9d31-047461800e3a",
            "firstname": "Chang Nguyen",
            "inbound": 0,
            "invalid": 0,
            "lastname": "",
            "local": 0,
            "middlename": "",
            "no_answered": 1,
            "not_available": 0,
            "outbound": 5,
            "total": 5,
            "user_id": "cc42532c-4f73-474f-9be7-704463ff24c0",
            "username": "changnguyen"
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê tổng hợp của extension.

### HTTP Request

`GET https://{{API_HOST}}/v2/report/extension`

### Query Parameters

| Parameter  | Description                    | Example                   | Required |
| ---------- | ------------------------------ | ------------------------- | -------- |
| start_time | Thống kê theo khoảng thời gian | 2023-03-07%2000%3A00%3A00 |          |
| end_time   | Thống kê theo khoảng thời gian | 2023-03-07%2023%3A59%3A59 |          |

## Report Summary By Extension and User

Report tổng hợp dựa trên extension và user.

```shell
curl --location 'https://{{API_HOST}}/v2/report/extension/summary' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "0865f4ff-0952-42e1-8fef-5caabf9ca6e1",
            "username": "LocAgent01",
            "last_name": "",
            "middle_name": "",
            "first_name": "LocAgent01",
            "extension": "800",
            "extension_uuid": "3cd88475-4769-4d7d-8507-011afda1f0e1",
            "email": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        },
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "506511ac-74cf-4c19-8e58-b532af3321d6",
            "username": "AdminDev",
            "last_name": "",
            "middle_name": "",
            "first_name": "AdminDev",
            "extension": "102",
            "extension_uuid": "a7c909f2-6a31-4621-981d-c4a6995b75ef",
            "email": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        },
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "7939ab20-0a0e-4bbc-b78e-e47426690b7c",
            "username": "luandnh",
            "last_name": "",
            "middle_name": "",
            "first_name": "Hoang Luan",
            "extension": "201",
            "extension_uuid": "5f4224e1-95cb-4879-9c98-e96b422891f9",
            "email": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        },
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "9517e5da-f2b3-4366-b19b-105efe8330a4",
            "username": "Agent01",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent01",
            "extension": "222",
            "extension_uuid": "cdbae3af-ac4e-4797-b3a2-57aad96546b0",
            "email": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        },
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "cc42532c-4f73-474f-9be7-704463ff24c0",
            "username": "changnguyen",
            "last_name": "",
            "middle_name": "",
            "first_name": "Chang Nguyen",
            "extension": "101",
            "extension_uuid": "e445b7dd-cc34-48b5-9d31-047461800e3a",
            "email": "",
            "total_duration": 130,
            "total_billsec": 10,
            "total_waitsec": 120,
            "total_call": 5,
            "total_answered": 2,
            "total_no_answered": 1,
            "total_busy": 2,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 5,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        },
        {
            "time": "2023-03-08T00:00:00Z",
            "user_uuid": "fd682fbd-a58c-4d52-96b6-1f467b33f791",
            "username": "hieppham",
            "last_name": "",
            "middle_name": "",
            "first_name": "Hiep Pham",
            "extension": "111",
            "extension_uuid": "a23df36f-60f6-4e89-a4a8-5089ce2eb7c4",
            "email": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê tổng hợp Report dựa trên extension và user.

### HTTP Request

`GET https://{{API_HOST}}/v2/report/extension/summary`

### Query Parameters

| Parameter  | Description                    | Example                   | Required |
| ---------- | ------------------------------ | ------------------------- | -------- |
| start_time | Thống kê theo khoảng thời gian | 2023-03-07%2000%3A00%3A00 |          |
| end_time   | Thống kê theo khoảng thời gian | 2023-03-07%2023%3A59%3A59 |          |

## Report Extension Summary With Day

```shell
curl --location 'https://{{API_HOST}}/v2/report/extension/summary/day' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "user_uuid": "0865f4ff-0952-42e1-8fef-5caabf9ca6e1",
            "username": "LocAgent01",
            "last_name": "",
            "middle_name": "",
            "first_name": "LocAgent01",
            "add_date": "2022-12-26 16:31:09",
            "extension": "800",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 0,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        },
        {
            "user_uuid": "162cb847-0972-4230-b1c6-530ee29983bf",
            "username": "manager01",
            "last_name": "",
            "middle_name": "",
            "first_name": "Manager01",
            "add_date": "2022-12-29 15:08:18",
            "extension": "",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": []
        },
        {
            "user_uuid": "9517e5da-f2b3-4366-b19b-105efe8330a4",
            "username": "Agent01",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent01",
            "add_date": "2023-02-27 10:14:29",
            "extension": "222",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 0,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        },
        {
            "user_uuid": "17f6c502-2dee-4e71-be11-93c92561b0c6",
            "username": "Tel4vnSuperadmin",
            "last_name": "",
            "middle_name": "",
            "first_name": "",
            "add_date": "2023-02-27 10:09:07.000000+0700",
            "extension": "",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": [
                {
                    "group_uuid": "73ad640f-d2e5-47bd-90ec-76b3b08d20eb",
                    "group_name": "superadmin",
                    "group_weight": 1,
                    "department_uuid": ""
                }
            ],
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": []
        },
        {
            "user_uuid": "35b47751-2fe0-4739-bf44-4e4e5bd4f26f",
            "username": "leader01",
            "last_name": "",
            "middle_name": "",
            "first_name": "Leader01",
            "add_date": "2022-12-29 15:15:18",
            "extension": "",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": []
        },
        {
            "user_uuid": "506511ac-74cf-4c19-8e58-b532af3321d6",
            "username": "AdminDev",
            "last_name": "",
            "middle_name": "",
            "first_name": "AdminDev",
            "add_date": "2022-11-24 12:29:24.000000+0700",
            "extension": "102",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": [
                {
                    "group_uuid": "ffc3b322-a0d8-442a-aa09-30f96f9a9050",
                    "group_name": "admin",
                    "group_weight": 1,
                    "department_uuid": ""
                }
            ],
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 0,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        },
        {
            "user_uuid": "7939ab20-0a0e-4bbc-b78e-e47426690b7c",
            "username": "luandnh",
            "last_name": "",
            "middle_name": "",
            "first_name": "Hoang Luan",
            "add_date": "2022-12-19 14:28:15",
            "extension": "201",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 0,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        },
        {
            "user_uuid": "8a8b5722-ed40-4119-b021-0e31487ca86e",
            "username": "LocAgent02",
            "last_name": "",
            "middle_name": "",
            "first_name": "LocAgent02",
            "add_date": "2022-12-26 16:31:44",
            "extension": "",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": []
        },
        {
            "user_uuid": "cc42532c-4f73-474f-9be7-704463ff24c0",
            "username": "changnguyen",
            "last_name": "",
            "middle_name": "",
            "first_name": "Chang Nguyen",
            "add_date": "2022-12-07 14:16:03",
            "extension": "101",
            "extension_uuid": "",
            "total_duration": 130,
            "total_billsec": 10,
            "total_waitsec": 120,
            "total_call": 5,
            "total_answered": 2,
            "total_no_answered": 1,
            "total_busy": 2,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 5,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 5,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        },
        {
            "user_uuid": "fd682fbd-a58c-4d52-96b6-1f467b33f791",
            "username": "hieppham",
            "last_name": "",
            "middle_name": "",
            "first_name": "Hiep Pham",
            "add_date": "2022-12-19 14:53:43",
            "extension": "111",
            "extension_uuid": "",
            "total_duration": 0,
            "total_billsec": 0,
            "total_waitsec": 0,
            "total_call": 0,
            "total_answered": 0,
            "total_no_answered": 0,
            "total_busy": 0,
            "total_not_available": 0,
            "total_cancel": 0,
            "total_invalid": 0,
            "total_inbound": 0,
            "total_outbound": 0,
            "total_local": 0,
            "groups": null,
            "departments": null,
            "leaders": null,
            "managers": null,
            "reports": [
                {
                    "time": "2023-03-08T00:00:00Z",
                    "total_call": 0,
                    "total_invalid": 0,
                    "total_inbound": 0,
                    "total_outbound": 0
                }
            ]
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi của extension theo ngày.

### HTTP Request

`GET https://{{API_HOST}}/v2/report/extension/summary/day`

### Query Parameters

| Parameter     | Description                                           | Example                              | Required |
| ------------- | ----------------------------------------------------- | ------------------------------------ | -------- |
| start_time    | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2000%3A00%3A00            |          |
| end_time      | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2023%3A59%3A59            |          |

## Report Agent Time

```shell
curl --location 'https://{{API_HOST}}/v2/report/agent/time' \
--header 'content-type: application/json' \
--header 'authorization: Bearer {{TOKEN}}''
```

> Response trả về:

```json
{
    "data": [
        {
            "user_uuid": "341cc092-d2ae-482c-88ec-8f2e76fa6533",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "username": "Agent04Internal",
            "last_name": "",
            "middle_name": "",
            "first_name": "Agent04Internal",
            "latest_time": "2023-03-08 13:49:00.249915+07",
            "earliest_time": "2023-03-08 11:55:35.792545+07",
            "total_pause_sec": 85011,
            "total_wait_sec": 0,
            "total_talk_sec": 0,
            "total_dispo_sec": 0
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê thời gian pause, thời gian chờ cuộc gọi, thời gian đàm thoại và thời gian ở bảng chọn trạng thái sau cuộc gọi.

### HTTP Request

`GET https://{{API_HOST}}/v2/report/agent/time`

### Query Parameters

| Parameter     | Description                                           | Example                              | Required |
| ------------- | ----------------------------------------------------- | ------------------------------------ | -------- |
| start_time    | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2000%3A00%3A00            |          |
| end_time      | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2023%3A59%3A59            |          |