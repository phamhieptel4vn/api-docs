---
title: Gateway
sidebar_position: 9
---
## Get Gateway

```shell
curl --location 'https://{{API_HOST}}/v3/gateway' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "gateway_uuid": "0bb326bd-7c5c-46d3-8d49-97891e0e8d19",
            "domain_uuid": "3e730c88-ee26-484f-b6d4-a5d693aecb0c",
            "gateway": "Pitel_C",
            "description": ""
        },
        {
            "gateway_uuid": "2e402728-4410-4ce0-b089-9b7ae6c11cc7",
            "domain_uuid": "3e730c88-ee26-484f-b6d4-a5d693aecb0c",
            "gateway": "ASTPP",
            "description": ""
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 2
}
```
Get Gateway - API này dùng để lấy danh sách các Gateway đang chạy trên hệ thống.
### HTTP Request

`GET https://{{API_HOST}}/v3/gateway`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |
