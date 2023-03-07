---
title: Carrier
sidebar_position: 9
---
## Create Carrier

```shell
curl --location 'https://{{API_HOST}}/v3/carrier' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "carrier_name": "Billing03",
    "description": "",
    "caller_id": "02873003586",
    "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
    "network": {
        "mobi": null,
        "vina": 0,
        "viettel": null,
        "tel": 0,
        "offnet": 0
    },
    "concurrent_call": 20,
    "dial_type": "sip_one_for_all"
}'
```


> Response trả về:

```json
{
    "carrier_uuid": "cec472f0-c598-49c6-90c3-8d958f3b7f02",
    "created": true
}
```

> Error Response trả về:

```json
{
    "error": "carrier_name is exists"
}
```
```json
{
    "error": [
        {
            "(root)": "gateway_uuid is required"
        }
    ]
}
```

API này dùng để tạo carrier, cấu hình đầu số thực hiện cuộc gọi.

### HTTP Request

`POST https://{{API_HOST}}/v3/carrier`

### Body

> Sample data:

```json
{
    "carrier_name": "Billing03",
    "description": "",
    "caller_id": "02873003586",
    "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
    "network": {
        "mobi": null,
        "vina": 0,
        "viettel": null,
        "tel": 0,
        "offnet": 0
    },
    "concurrent_call": 20,
    "dial_type": "sip_one_for_all"
}
```

| Parameter       | Description                                                                                | Required |
| --------------- | ------------------------------------------------------------------------------------------ | -------- |
| carrier_name    | Tên của carrier                                                                            | x        |
| description     | Mô tả của carrier                                                                          |          |
| caller_id       | Đầu số thực hiện cuộc gọi                                                                  | x        |
| gateway_uuid    | UUID của gateway                                                                           | x        |
| network         | Cấu hình mạng của carrier                                                                  |         |
| concurrent_call | Số lượng cuộc gọi đồng thời                                                                | x        |
| dial_type       | Kiểu gọi: sip_one_for_all, sip_random_for_all, sip_random_group_for_network, channel_one_for_all, channel_prefix | x        |
