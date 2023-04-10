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