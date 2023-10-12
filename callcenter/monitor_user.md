---
title: Monitor
sidebar_position: 12
---

## Monitor User

```shell
curl --location 'https://{{API_HOST}}/v3/monitor?=null \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_HOST}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "agent_name": "thanhhoang",
            "b_cid_num": "0914237383",
            "call_id": "df3bd13a-0cb4-455a-ac70-92ed00e13dd7",
            "call_state": "ONCALL",
            "call_time": "2023-04-10 17:02:51",
            "cid_num": "0914237383",
            "destination": "24052364",
            "direction": "outbound",
            "domain_name": "tp.tel4vn.com",
            "domain_uuid": "32f0b0ea-8489-4217-acc7-caeaf58b8bbe",
            "extension": "107",
            "extension_uuid": "290619f4-c6db-40b2-8bb5-38f0ae5c3185",
            "last_name": "",
            "middle_name": "",
            "first_name": "Hoàng Thị Thanh",
            "network_ip": "113.22.113.102",
            "server_host": "203.205.6.79",
            "user_agent": "Pitel/3.20.5",
            "user_uuid": "",
            "username": "thanhhoang"
        }
        ],
    "total": 1
}
```

API dùng để giám sát trạng thái các máy nhánh trên hệ thống.

| Parameter      | Description                                                |
| -------------- | ---------------------------------------------------------- |
| agent_name     | Tên nhân viên                                              |
| b_cid_num      | Số điện thoại của khách hàng                               |
| call_id        | ID của cuộc gọi                                            |
| call_state     | Trạng thái cuộc gọi, bao gồm ONCALL, RINGING               |
| call_time      | Thời gian bắt đầu cuộc gọi                                 |
| cid_num        | Số Hotline thực hiện cuộc gọi                              |
| destination    | Số điện thoại nhận cuộc gọi                                |
| direction      | Hướng cuộc gọi, bao gồm inbound, outbound và local         |
| domain_name    | Tên tenant của khách hàng                                  |
| domain_uuid    | UUID của tenant của khách hàng                             |
| extension      | Số máy nhánh thực hiện cuộc gọi                            |
| extension_uuid | UUID của máy nhánh thực hiện cuộc gọi                      |
| last_name      | Họ của Agent                                               |
| middle_name    | Tên đệm của Agent                                          |
| first_name     | Tên của Agent                                              |
| network_ip     | Địa chỉ IP của máy nhánh thực hiện cuộc gọi                |
| server_host    | Địa chỉ IP của server thực hiện cuộc gọi                   |
| user_agent     | User Agent (tên thiết bị) của máy nhánh thực hiện cuộc gọi |
| user_uuid      | UUID của Agent thực hiện cuộc gọi                          |
| username       | Tên đăng nhập của Agent thực hiện cuộc gọi                 |


### HTTP Request

`GET https://{{API_HOST}}/v3/monitor?=null`

## Check Status Register Of Extension

```shell
curl --location 'https://{{API_HOST}}/v3/extension/{{id}}/loggedin \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_HOST}}'
```

> Response trả về:

```json
{
    "extension": "107",
    "is_logged_in": true
}
```

> Response Error trả về:

```json
{
    "error": "Extension not found"
}
```

API dùng để kiểm tra trạng thái register của một máy nhánh trên hệ thống.

| Parameter | Description                          |
| --------- | ------------------------------------ |
| id        | uuid của máy nhánh hoặc số máy nhánh |


### HTTP Request

`GET https://{{API_HOST}}/v3/extension/{{id}}/loggedin`

## Monitor Queue Inbound Call

```shell
curl --location 'https://{{API_HOST}}/v3/monitor/callcenter/queue? \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{API_HOST}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "call_center_queue_uuid": "7bc3db7b-e95e-4afe-a345-a8385dfb31b7",
            "call_center_queue_name": "Nhi_Test_39989220",
            "call_center_agent_uuid": "1c1b04d6-f155-48b2-a9b5-e85ca683097b",
            "call_center_agent_name": "agent_nhi",
            "mobile": "0865662711",
            "status": "Answered",
            "joined_time": "2023-10-12T17:48:19+07:00",
            "abandoned_time": "1970-01-01T08:00:00+08:00",
            "bridged_time": "2023-10-12T17:48:26+07:00",
            "rejoined_time": "1970-01-01T08:00:00+08:00",
            "call_uuid": "34f6a205-121c-4fa3-bb94-414c5aff5995"
        }
    ]
}
```

API dùng để giám sát trạng thái cuộc gọi đang trong hàng chờ trên hệ thống.

| Parameter              | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| call_center_queue_uuid | UUID của Queue CallCenter                                |
| call_center_queue_name | Tên của Queue CallCenter                                 |
| call_center_agent_uuid | UUID Agent CallCenter                                    |
| call_center_agent_name | Tên Agent CallCenter                                     |
| mobile                 | Số điện thoại của khách hàng                             |
| status                 | Trạng thái cuộc gọi, bao gồm Trying, Answered, Abandoned |
| joined_time            | Thời gian khách hàng vào hàng chờ                        |
| abandoned_time         | Thời gian khách hàng hủy cuộc gọi                        |
| bridged_time           | Thời gian khách hàng được chuyển sang Agent              |
| rejoined_time          | Thời gian khách hàng vào lại hàng chờ                    |
| call_uuid              | UUID của cuộc gọi                                        |


### HTTP Request

`GET https://{{API_HOST}}/v3/monitor/callcenter/queue?`