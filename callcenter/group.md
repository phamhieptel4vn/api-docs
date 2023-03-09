---
title: Group
sidebar_position: 12
---

## Create Group

```shell
curl --location 'https://{{API_HOST}}/v3/group' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "group_name": "Group01",
    "group_description": ""
}'
```
> Response trả về:

```json
{
    "created": true,
    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5"
}
```

> Error response:

```json
{
    "error": "group_name is exists"
}
```

API dùng để tạo nhóm trên callcenter.

### HTTP Request

`POST https://{{API_HOST}}/v3/group`

### Body

> Sample data:

```json
{
    "group_name": "Group01",
    "group_description": ""
}
```

| Parameter         | Description | Required | Example |
| ----------------- | ----------- | -------- | ------- |
| group_name        | Tên nhóm    | x        | Group01 |
| group_description | Mô tả nhóm  |          |         |

## Get Group

```shell
curl --location 'https://{{API_HOST}}/v3/group' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "group_name": "Group01",
            "group_description": "",
            "department_uuid": ""
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 1
}
```

> Error response:

```json
{
    "error": "group is not found"
}
```
### HTTP Request

`GET https://{{API_HOST}}/v3/group`

### Query Parameters

| Parameter | Description              | Example |
| --------- | ------------------------ | ------- |
| limit     | Số lượng record trả về   | 10      |
| offset    | Vị trí bắt đầu khi query | 0       |

## Get Group By ID

```shell
curl --location 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data ''
```

> Response trả về:

```json
{
    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "group_name": "Group01",
    "group_description": "",
    "group_priority": 0,
    "users": null,
    "campaigns": null,
    "department_uuid": "",
    "department_name": "",
    "kpi": null
}
```
API này dùng để lấy thông tin chi tiết của một nhóm theo uuid truyền vào.
### HTTP Request

`GET https://{{API_HOST}}/v3/group/{{group_uuid}}`

### Query Parameters

| Parameter  | Description   |
| ---------- | ------------- |
| group_uuid | UUID của nhóm |


## Update Group

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "group_name": "Group Updated",
    "group_description": "For U"
}'
```


> Response trả về:

```json
{
    "data": {
        "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",
        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
        "group_name": "Group Updated",
        "group_description": "For U",
        "department_uuid": ""
    },
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": "group is not found"
}
```
API này dùng để update thông tin nhóm.

### HTTP Request

`PUT https://{{API_HOST}}/v3/group/{{group_uuid}}`

### Body

> Sample data:

```json
{
    "group_name": "TEL4VN Group Updated",
    "group_description": "For U"
}
```

| Parameter         | Description | Required |
| ----------------- | ----------- | -------- |
| group_name        | Tên nhóm    | x        |
| group_description | Mô tả nhóm  |          |

## Assign User Into Group

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \
--header 'content-type: application/json' \
--header 'authorization: Bearer {{TOKEN}}' \
--data '{
    "group_name": "Group Updated",
    "group_description": "",
    "group_priority": 0,
    "user_assigns": [
        "e0406808-4be4-4e43-9ec5-512d91e2b95e"
    ],
    "campaign_assigns": [],
    "department_uuid": ""
}'
```


> Response trả về:

```json
{
    "data": {
        "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5",
        "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
        "group_name": "Group Updated",
        "group_description": "",
        "department_uuid": ""
    },
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "group_name": "String length must be greater than or equal to 1"
        },
        {
            "group_name": "Does not match pattern '^[a-zA-Z0-9\\s.\\-\\_]+$'"
        }
    ]
}
```
API này dùng để update thông tin nhóm.

### HTTP Request

`PUT https://{{API_HOST}}/v3/group/{{group_uuid}}`

### Body

> Sample data:

```json
{
    "group_name": "Group Updated",
    "group_description": "",
    "group_priority": 0,
    "user_assigns": [
        "e0406808-4be4-4e43-9ec5-512d91e2b95e"
    ],
    "campaign_assigns": [],
    "department_uuid": ""
}
```

| Parameter         | Description               | Required |
| ----------------- | ------------------------- | -------- |
| group_name        | Tên nhóm                  | x        |
| group_description | Mô tả nhóm                |          |
| group_priority    | Mức độ ưu tiên            |          |
| user_assigns      | Danh sách user cần assign |          |
| campaign_assigns  | Danh sách chiến dịch      |          |
| department_uuid   | UUID phòng ban chứa nhóm  |          |

## Delete Group

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/group/446401ea-bb08-4a71-9fd8-22dfb15072e5' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "code": 200,
    "content": "successfully",
    "group_uuid": "446401ea-bb08-4a71-9fd8-22dfb15072e5"
}
```
> Error Response trả về:
```json
{
    "error": "group not found"
}
```
API này dùng để xóa chiến dịch.
### HTTP Request

`DELETE https://{{API_HOST}}/v3/group/{{campaign_uuid}}`