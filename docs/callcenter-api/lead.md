---
title: Lead
sidebar_position: 15
---

## Create Lead

```shell
curl --location 'https://{{API_HOST}}/v3/lead' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",
    "lead_name": "Demo01",
    "lead_code": "DP01",
    "phone_number": "0349719999"
}'
```

> Response trả về:

```json
{
    "created": true,
    "lead_uuid": "152a5c45-68f0-4ee7-85c0-32ae87bb611b"
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "list_uuid": "String length must be greater than or equal to 36"
        }
    ]
}
```
```json
{
    "error": [
        {
            "phone_number": "String length must be greater than or equal to 1"
        },
        {
            "phone_number": "Does not match pattern '^(84|0[3|5|7|8|9])+([0-9]{8})$'"
        }
    ]
}
```

API này dùng để tạo lead và gán vào danh sách đã có sẵn.

### HTTP Request

`POST https://{{API_HOST}}/v3/lead`

### Body

> Sample data:

```json
{
    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",
    "lead_name": "Demo01",
    "lead_code": "DP01",
    "phone_number": "0349719999"
}
```

| Parameter    | Description                         | Required |
| ------------ | ----------------------------------- | -------- |
| list_uuid    | UUID của danh sách cần gán lead vào | x        |
| lead_name    | Tên khách hàng                      |          |
| lead_code    | Mã khách hàng                       |          |
| phone_number | Số điện thoại khách hàng            | x        |

## Post Lead With CSV File

```shell
curl --location 'https://{{API_HOST}}/v3/lead/file' \
--header 'Authorization: Bearer {{TOKEN}}' \
--form 'file=@"/D:/DOCUMENT/Template_Upload_Lead/template_lead_viettel.csv"' \
--form 'list_uuid="c4869e79-f0fa-4c6a-9410-bc0defac375a"'
```

> Response trả về:

```json
{
    "msg": "file upload is processing"
}
```

> Error Response trả về:

```json
{
    "error": "list_uuid is missing"
}
```
```json
{
    "error": "http: no such file"
}
```

API này dùng để upload lead qua file csv và gán vào danh sách đã có sẵn.

### HTTP Request

`POST https://{{API_HOST}}/v3/lead`

### Body

> Sample data:

```form-data
--form 'file=@"/D:/DOCUMENT/Template_Upload_Lead/template_lead_viettel.csv"' \
--form 'list_uuid="c4869e79-f0fa-4c6a-9410-bc0defac375a"'
```

| Parameter | Description                             | Required |
| --------- | --------------------------------------- | -------- |
| list_uuid | UUID của danh sách cần gán lead vào     | x        |
| file      | Đường dẫn file cần upload lại máy local | x        |

## Get Lead

```shell
curl --location 'https://{{API_HOST}}/v3/lead' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data ''
```

> Response trả về:

```json
{
    "data": [
        {
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "lead_uuid": "3c13548f-b3b9-4114-9ac3-2a8867d6529c",
            "lead_name": "Demo02",
            "lead_code": "DP02",
            "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",
            "phone_number": "0349719988",
            "contract_number": "",
            "status": "NEW",
            "alt_status": "new",
            "identity_number": "",
            "identity_issued_at": "",
            "identity_issued_on": "0001-01-01T00:00:00Z",
            "address": "",
            "province": "",
            "district": "",
            "ward": "",
            "date_of_birth": "",
            "additional": "",
            "after_day": 0,
            "called_count": 0,
            "last_call_time": "1970-01-01T08:00:01+08:00",
            "created_at": "2023-03-08T15:57:12.250818+07:00",
            "updated_at": "2023-03-08T15:57:12.250818+07:00",
            "hopper_id": 0,
            "comment": "",
            "ref_id": "",
            "ref_code": "",
            "gender": "",
            "other_identity_number": "",
            "other_identity_issued_at": "",
            "other_identity_issued_on": "0001-01-01T00:00:00Z",
            "network": "",
            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
            "campaign_name": "Campaign Autodialer",
            "list_name": "List Autodialer",
            "assign_user_uuid": "",
            "assign_username": ""
        },
        {
            "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
            "lead_uuid": "152a5c45-68f0-4ee7-85c0-32ae87bb611b",
            "lead_name": "Demo01",
            "lead_code": "DP01",
            "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",
            "phone_number": "0349719999",
            "contract_number": "ABC123",
            "status": "NEW",
            "alt_status": "new",
            "identity_number": "",
            "identity_issued_at": "",
            "identity_issued_on": "0001-01-01T00:00:00Z",
            "address": "",
            "province": "",
            "district": "",
            "ward": "",
            "date_of_birth": "",
            "additional": "",
            "after_day": 0,
            "called_count": 0,
            "last_call_time": "1970-01-01T08:00:01+08:00",
            "created_at": "2023-03-08T15:27:00.709533+07:00",
            "updated_at": "2023-03-08T15:27:00.709533+07:00",
            "hopper_id": 0,
            "comment": "",
            "ref_id": "",
            "ref_code": "",
            "gender": "",
            "other_identity_number": "",
            "other_identity_issued_at": "",
            "other_identity_issued_on": "0001-01-01T00:00:00Z",
            "network": "",
            "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
            "campaign_name": "Campaign Autodialer",
            "list_name": "List Autodialer",
            "assign_user_uuid": "",
            "assign_username": ""
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 2
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/lead'`

### Query Parameters

| Parameter     | Description                            | Example                              |
| ------------- | -------------------------------------- | ------------------------------------ |
| list_uuid     | UUID của danh sách cần lấy lead        | c4869e79-f0fa-4c6a-9410-bc0defac375a |
| campaign_uuid | UUID của chiến dịch cần lấy lead       | 7bbe986b-8a6e-404c-840b-781102b5aa07 |
| phone_number  | Tìm kiếm theo số điện thoại khách hàng | 0349719999                           |
| limit         | Số lượng record trả về                 | 10                                   |
| offset        | Vị trí bắt đầu khi query               | 0                                    |

## Get Leads by ID

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/lead/307c2fe7-d075-493c-b8d6-b11195caec41' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "domain_uuid": "c275b950-9885-4775-b1bd-09fc865afa48",
    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",
    "lead_name": "TestNe",
    "lead_code": "TestNe",
    "list_uuid": "c4869e79-f0fa-4c6a-9410-bc0defac375a",
    "phone_number": "03497191211",
    "contract_number": "NVDP12345",
    "status": "NEW",
    "alt_status": "new",
    "identity_number": "",
    "identity_issued_at": "",
    "identity_issued_on": "0001-01-01T00:00:00Z",
    "address": "",
    "province": "",
    "district": "",
    "ward": "",
    "date_of_birth": "",
    "additional": "{\"after_day\":0,\"contract_number\":\"\",\"lead_code\":\"\",\"lead_name\":\"TestNe\",\"phone_number\":\"03497191211\"}",
    "after_day": 0,
    "called_count": 0,
    "last_call_time": "1970-01-01T08:00:01+08:00",
    "created_at": "2023-03-08T07:16:40.446072+07:00",
    "updated_at": "2023-03-08T09:46:31.912271+07:00",
    "hopper_id": 0,
    "comment": "",
    "ref_id": "",
    "ref_code": "",
    "gender": "",
    "other_identity_number": "",
    "other_identity_issued_at": "",
    "other_identity_issued_on": "0001-01-01T00:00:00Z",
    "network": "viettel",
    "campaign_uuid": "7bbe986b-8a6e-404c-840b-781102b5aa07",
    "campaign_name": "Campaign Autodialer",
    "list_name": "List Autodialer",
    "assign_user_uuid": "",
    "assign_username": ""
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/lead/{{lead_uuid}}`

### Query Parameters

| Parameter | Description   |
| --------- | ------------- |
| lead_uuid | UUID của lead |

## Update Lead

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/lead/307c2fe7-d075-493c-b8d6-b11195caec41' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",
    "lead_name": "TestNe",
    "lead_code": "TestNe",
    "phone_number": "03497191211",
    "contract_number": "NVDP12345",
    "identity_number": "",
    "identity_issued_at": "",
    "identity_issued_on": "0001-01-01T00:00:00Z",
    "address": "",
    "province": "",
    "district": "",
    "ward": "",
    "date_of_birth": "",
    "additional": ""
}'
```

> Response trả về:

```json
{
    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41"
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "(root)": "phone_number is required"
        }
    ]
}
```


API này dùng để cập nhật thông tin lead.

### HTTP Request

`PUT https://{{API_HOST}}/v3/lead/{{lead_uuid}}`

### Body

> Sample data:

```json
{
    "lead_uuid": "307c2fe7-d075-493c-b8d6-b11195caec41",
    "lead_name": "TestNe",
    "lead_code": "TestNe",
    "phone_number": "03497191211",
    "contract_number": "NVDP12345",
    "identity_number": "",
    "identity_issued_at": "",
    "identity_issued_on": "0001-01-01T00:00:00Z",
    "address": "",
    "province": "",
    "district": "",
    "ward": "",
    "date_of_birth": "",
    "additional": ""
}
```

| Parameter          | Description              | Required |
| ------------------ | ------------------------ | -------- |
| lead_uuid          | UUID của lead            | x        |
| lead_name          | Tên khách hàng           |          |
| lead_code          | Mã khách hàng            |          |
| phone_number       | Số điện thoại khách hàng | x        |
| contract_number    | Số hợp đồng              |          |
| identity_number    | Số CMND                  |          |
| identity_issued_at | Nơi cấp CMND             |          |
| identity_issued_on | Ngày cấp CMND            |          |
| address            | Địa chỉ                  |          |
| province           | Tỉnh/Thành phố           |          |
| district           | Quận/Huyện               |          |
| ward               | Phường/Xã                |          |
| date_of_birth      | Ngày sinh                |          |
| additional         | Thông tin bổ sung        |          |

## Delete Lead

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/lead/b9285f8a-4e3c-40f1-aed7-840b1d5e6118' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "lead_uuid": "b9285f8a-4e3c-40f1-aed7-840b1d5e6118"
}
```
> Error Response trả về:

```json
{
    "error": "Not Found"
}
```
API này dùng để lead ra khỏi danh sách, khỏi hệ thống.
### HTTP Request

`DELETE https://{{API_HOST}}/v3/lead/{{lead_uuid}}`