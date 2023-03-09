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

| Parameter       | Description                                                                                                               | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| carrier_name    | Tên của carrier                                                                                                           | x        |
| description     | Mô tả của carrier                                                                                                         |          |
| caller_id       | Đầu số thực hiện cuộc gọi (bắt buộc phải set nếu mode call là direct)                                                     |          |
| gateway_uuid    | UUID của gateway                                                                                                          | x        |
| network         | Cấu hình mạng của carrier. Gọi những mạng nào thì cần phải setup cho mạng đó                                              |          |
| network.mobi    | Số kênh gọi mạng mobi của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng mobi)        |          |
| network.viettel | Số kênh gọi mạng viettel của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng viettel)  |          |
| network.vina    | Số kênh gọi mạng vina của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng vina)        |          |
| network.tel     | Số kênh gọi mạng số bàn của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng tel)       |          |
| network.offnet  | Số kênh gọi mạng offnet của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng khác)      |          |
| data.caller_id  | Các đầu số thực hiện cuộc gọi (cần phải set nếu carrier có dial_type là sip_random_for_all, sip_random_group_for_network) |          |
| concurrent_call | Số lượng cuộc gọi đồng thời (cần phải set nếu campaign gọi bằng mode call direct)                                         | x        |
| dial_type       | Chế độ gọi: sip_one_for_all, sip_random_for_all, sip_random_group_for_network, channel_one_for_all, channel_prefix        | x        |
| prefix          | Prefix gọi (cần phải set nếu carrier có dial_type là channel_one_for_all)                                                 |          |
| prefix_mobi     | Prefix gọi mạng Mobi (cần phải set nếu carrier có dial_type là channel_prefix)                                            |          |
| prefix_viettel  | Prefix gọi mạng Viettel (cần phải set nếu carrier có dial_type là channel_prefix)                                         |          |
| prefix_vina     | Prefix gọi mạng Vina (cần phải set nếu carrier có dial_type là channel_prefix)                                            |          |
| prefix_tel      | Prefix gọi mạng Số bàn (cần phải set nếu carrier có dial_type là channel_prefix)                                          |          |
| prefix_offnet   | Prefix gọi mạng Offnet (cần phải set nếu carrier có dial_type là channel_prefix)                                          |          |

## Get Carrier

```shell
curl --location 'https://{{API_HOST}}/v3/carrier' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "carrier_uuid": "a18b400f-d487-4e17-b5e7-eba5fe6fa54f",
            "carrier_name": "Billing",
            "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
            "caller_id": "02873003586",
            "description": "",
            "dial_type": "channel_prefix",
            "status": true,
            "created_at": "2023-03-06T15:21:36.888913+07:00",
            "updated_at": "2023-03-06T15:21:36.888913+07:00",
            "network": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "data": {
                "caller_id": "02873003586",
                "prefix_mobi": "12",
                "prefix_offnet": "",
                "prefix_tel": "",
                "prefix_viettel": "",
                "prefix_vina": "12"
            },
            "concurrent_call": 30,
            "carrier_remaining_ccu": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "remaining_concurrent_call": 0,
            "groups": null
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "carrier_uuid": "aff00f7f-f346-4036-8412-b9daef14b386",
            "carrier_name": "Billing02",
            "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
            "caller_id": "02873003586",
            "description": "",
            "dial_type": "sip_one_for_all",
            "status": true,
            "created_at": "2023-03-07T00:14:29.136119+07:00",
            "updated_at": "2023-03-07T00:14:29.136119+07:00",
            "network": {
                "viettel": 10,
                "mobi": 10,
                "vina": 10,
                "tel": 10,
                "offnet": 0
            },
            "data": {
                "caller_id": "02873003586"
            },
            "concurrent_call": 10,
            "carrier_remaining_ccu": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "remaining_concurrent_call": 0,
            "groups": null
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "carrier_uuid": "cec472f0-c598-49c6-90c3-8d958f3b7f02",
            "carrier_name": "Billing03",
            "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
            "caller_id": "02873003586",
            "description": "",
            "dial_type": "sip_one_for_all",
            "status": true,
            "created_at": "2023-03-07T16:10:44.727931+07:00",
            "updated_at": "2023-03-07T16:10:44.727931+07:00",
            "network": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "data": {
                "caller_id": "02873003586"
            },
            "concurrent_call": 20,
            "carrier_remaining_ccu": {
                "viettel": 0,
                "mobi": 0,
                "vina": 0,
                "tel": 0,
                "offnet": 0
            },
            "remaining_concurrent_call": 0,
            "groups": null
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 3
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/carrier`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |

## Update Carrier

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/carrier/aff00f7f-f346-4036-8412-b9daef14b386' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "carrier_uuid": "aff00f7f-f346-4036-8412-b9daef14b386",
    "carrier_name": "Billing02",
    "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
    "caller_id": "02873003586",
    "description": "",
    "dial_type": "sip_one_for_all",
    "created_at": "2023-03-07T00:14:29.136119+07:00",
    "updated_at": "2023-03-07T00:14:29.136119+07:00",
    "network": {
        "viettel": 10,
        "mobi": 10,
        "vina": 10,
        "tel": null,
        "offnet": 10
    },
    "data": {
        "caller_id": "02873003586"
    },
    "concurrent_call": 15,
    "carrier_remaining_ccu": {
        "viettel": 0,
        "mobi": 0,
        "vina": 0,
        "tel": 0,
        "offnet": 0
    },
    "remaining_concurrent_call": 0,
    "groups": []
}'
```

> Response trả về:

```json
{
    "carrier_uuid": "aff00f7f-f346-4036-8412-b9daef14b386"
}
```
> Error Response trả về:
```json
{
    "error": [
        {
            "(root)": "carrier_name is required"
        }
    ]
}
```
```
Update Carrier - đầu số thực hiện cuộc gọi

### HTTP Request

`PUT https://{{API_HOST}}/v3/carrier/{{carrier_uuid}}`

### Body

> Sample data:

```json
{
    "carrier_uuid": "aff00f7f-f346-4036-8412-b9daef14b386",
    "carrier_name": "Billing02",
    "gateway_uuid": "953a918a-0035-4e6f-97d1-c64e7943b7df",
    "caller_id": "02873003586",
    "description": "",
    "dial_type": "sip_one_for_all",
    "created_at": "2023-03-07T00:14:29.136119+07:00",
    "updated_at": "2023-03-07T00:14:29.136119+07:00",
    "network": {
        "viettel": 10,
        "mobi": 10,
        "vina": 10,
        "tel": null,
        "offnet": 10
    },
    "data": {
        "caller_id": "02873003586"
    },
    "concurrent_call": 15
}
```

| Parameter       | Description                                                                                                               | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------------------- | -------- |
| carrier_uuid    | UUID của Carrier                                                                                                          | x        |
| carrier_name    | Tên Carrier                                                                                                               | x        |
| gateway_uuid    | UUID của Gateway                                                                                                          | x        |
| caller_id       | Đầu số thực hiện cuộc gọi (bắt buộc phải set nếu mode call là direct)                                                     |          |
| description     | Mô tả                                                                                                                     |          |
| dial_type       | sip_one_for_all, sip_random_for_all, sip_random_group_for_network, channel_one_for_all, channel_prefix                    | x        |
| network         | Cấu hình mạng của carrier. Gọi những mạng nào thì cần phải setup cho mạng đó                                              |          |
| network.mobi    | Số kênh gọi mạng mobi của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng mobi)        |          |
| network.viettel | Số kênh gọi mạng viettel của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng viettel)  |          |
| network.vina    | Số kênh gọi mạng vina của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng vina)        |          |
| network.tel     | Số kênh gọi mạng số bàn của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng tel)       |          |
| network.offnet  | Số kênh gọi mạng offnet của carrier (cần phải set nếu campaign gọi bằng mode call serial, parralel để gọi mạng khác)      |          |
| data.caller_id  | Các đầu số thực hiện cuộc gọi (cần phải set nếu carrier có dial_type là sip_random_for_all, sip_random_group_for_network) |          |
| concurrent_call | Số lượng cuộc gọi đồng thời (cần phải set nếu campaign gọi bằng mode call direct)                                         | x        |
| prefix          | Prefix gọi (cần phải set nếu carrier có dial_type là channel_one_for_all)                                                 |          |
| prefix_mobi     | Prefix gọi mạng Mobi (cần phải set nếu carrier có dial_type là channel_prefix)                                            |          |
| prefix_viettel  | Prefix gọi mạng Viettel (cần phải set nếu carrier có dial_type là channel_prefix)                                         |          |
| prefix_vina     | Prefix gọi mạng Vina (cần phải set nếu carrier có dial_type là channel_prefix)                                            |          |
| prefix_tel      | Prefix gọi mạng Số bàn (cần phải set nếu carrier có dial_type là channel_prefix)                                          |          |
| prefix_offnet   | Prefix gọi mạng Offnet (cần phải set nếu carrier có dial_type là channel_prefix)                                          |          |

## Delete Carrier

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/carrier/0ec43e8c-0f83-46bb-bf53-d6a5dfc9828e' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}''
```

> Response trả về:

```json
{
    "carrier_uuid": "416deffa-66e5-4f00-98ea-9078b84ff733",
    "created": true
}
```
> Error Response trả về:
```json
{
    "error": "carrier_name is not exists"
}
```
### HTTP Request

`DELETE https://{{API_HOST}}/v3/carrier/{{carrier_uuid}}`

