---
title: CDRs
sidebar_position: 7
---

# Call Detail Records
Lịch sử cuộc gọi

### Attributes

| Attribute               | Description                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------ |
| id                      | Id của CDR                                                                                             |
| parent_id               | Id của CDR gốc                                                                                         |
| sip_call_id             | call_id trong bản tin SIP                                                                              |
| cause                   | Trạng thái cuộc gọi dựa theo mã phản hồi giao thức SIP. Vd: NORMAL_CLEARING, NO_ANSWER, USER_BUSY, ... |
| duration                | Thời hạn thực hiện cuộc gọi.                                                                           |
| billsec                 | Thời gian đàm thoại trong cuộc gọi.                                                                    |
| direction               | Chiều cuộc gọi (inbound, outbound, local)                                                              |
| recording_url           | Đường dẫn file ghi âm cuộc gọi                                                                         |
| extension               | Extension nhận hoặc thực hiện cuộc gọi                                                                 |
| from_number             | Cuộc gọi từ số nào - Đầu số thực hiện cuộc gọi                                                         |
| to_number               | Cuộc gọi đến số nào                                                                                    |
| receive_dest            | Ringroup hoặc queue của extension nhận cuộc gọi                                                        |
| time_started            | Thời gian bắt đầu cuộc gọi                                                                             |
| time_answered           | Thời gian khi cuộc gọi kết nối                                                                         |
| time_ended              | Thời gian kết thúc cuộc gọi                                                                            |
| time_ringging           | Thời gian khi cuộc gọi đổ chuông                                                                       |
| status                  | Trạng thái cuộc gọi                                                                                    |
| app                     | Phương thức gọi, bao gồm autocall, autodialer, click_to_call, dial                                     |
| press_key               | Phím bấm trong cuộc gọi                                                                                |
| fullname                | Tên của Agent thực hiện hoặc nhận cuộc gọi                                                             |
| email                   | Email của Agent thực hiện hoặc nhận cuộc gọi                                                           |
| username                | Username của Agent thực hiện hoặc nhận cuộc gọi                                                        |
| sip_hangup_disposition  | Nguyên nhân kết thúc cuộc gọi của FS                                                                   |
| campaign_uuid           | UUID của campaign                                                                                      |
| lead_uuid               | UUID của lead                                                                                          |
| rate                    | Số điểm được khách hàng đánh giá                                                                       |
| digit                   | Số điểm được khách hàng đánh giá                                                                       |
| note                    | Ghi chú của Agent sau cuộc gọi                                                                         |
| customer_fullname       | Tên của khách hàng                                                                                     |
| customer_email          | Email của khách hàng                                                                                   |
| demand_customer         | Yêu cầu của khách hàng                                                                                 |
| interest_segment        | Lĩnh vực quan tâm của khách hàng                                                                       |
| additional              | Thông tin bổ sung của khách hàng                                                                       |
| additional.param1,2,3   | Các thông tin bổ sung                                                                                  |
| autocall_presskey_epoch | Thời gian bấm phím trong cuộc gọi với dạng timestamp                                                   |
| time_presskey           | Thời gian bấm phím trong cuộc gọi                                                                      |
| presskey_delay          | Độ trễ bấm phím                                                                                        |
| autocall_recording_url  | Đường dẫn file ghi âm cuộc gọi autocall                                                                |


## Get CDRs

```shell
curl --location 'https://{{API_HOST}}/v3/cdr?limit=2&offset=0' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "id": "366d2a16-7d73-47ad-bc94-9bab059f0f85",
            "parent_id": "366d2a16-7d73-47ad-bc94-9bab059f0f85",
            "sip_call_id": "436447b4-3755-123c-18b6-fa163e71cc82",
            "cause": "USER_BUSY",
            "duration": 27,
            "direction": "outbound",
            "recording_url": "",
            "extension": "",
            "from_number": "02873003586",
            "to_number": "0775702541",
            "receive_dest": "",
            "time_started": "2023-03-07 13:36:42",
            "time_answered": "",
            "time_ended": "2023-03-07 13:37:09",
            "time_ringging": "2023-03-07 13:36:42",
            "status": "busy",
            "billsec": 0,
            "app": "autocall",
            "press_key": "{}",
            "fullname": "",
            "email": "",
            "username": "",
            "sip_hangup_disposition": "recv_refuse",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "lead_uuid": "2f8b1c0f-da79-4dfb-959d-1b611cf0cd6a",
            "rate": "",
            "digits": "",
            "note": "",
            "customer_fullname": "",
            "customer_email": "",
            "demand_customer": "",
            "interest_segment": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "autocall_presskey_epoch": "",
            "time_presskey": "",
            "presskey_delay": 0,
            "autocall_recording_url": "https://pbx-loadtest.tel4vn.com/app/xml_cdr/download.php?id=QySNgNBK4NHgm"
        },
        {
            "id": "35a4bf10-d536-40a6-826f-7ff10ed43d94",
            "parent_id": "35a4bf10-d536-40a6-826f-7ff10ed43d94",
            "sip_call_id": "3188d6eb-3755-123c-18b6-fa163e71cc82",
            "cause": "USER_BUSY",
            "duration": 20,
            "direction": "outbound",
            "recording_url": "",
            "extension": "",
            "from_number": "02873003586",
            "to_number": "0775702541",
            "receive_dest": "",
            "time_started": "2023-03-07 13:36:12",
            "time_answered": "",
            "time_ended": "2023-03-07 13:36:32",
            "time_ringging": "2023-03-07 13:36:12",
            "status": "busy",
            "billsec": 0,
            "app": "autocall",
            "press_key": "{}",
            "fullname": "",
            "email": "",
            "username": "",
            "sip_hangup_disposition": "recv_refuse",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "lead_uuid": "2f8b1c0f-da79-4dfb-959d-1b611cf0cd6a",
            "rate": "",
            "digits": "",
            "note": "",
            "customer_fullname": "",
            "customer_email": "",
            "demand_customer": "",
            "interest_segment": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "autocall_presskey_epoch": "",
            "time_presskey": "",
            "presskey_delay": 0,
            "autocall_recording_url": "https://pbx-loadtest.tel4vn.com/app/xml_cdr/download.php?id=Nc73cZ9Ba44aD"
        }
    ],
    "limit": 2,
    "offset": -1,
    "total": 6
}
```
:::note
- Khi Get CDR cần phải truyền thêm tham số limit và offset trong param query. Nếu không truyền, hệ thống sẽ tự set limit bằng -1 và offset bằng -1 nên sẽ không response về data CDR cần lấy
:::

### HTTP Request

`GET https://{{API_HOST}}/v3/cdr?limit=2&offset=0`

### Query Parameters

| Parameter        | Description                                             | Example                              |
| ---------------- | ------------------------------------------------------- | ------------------------------------ |
| start_date       | Tìm kiếm cdrs theo khoảng thời gian (Khởi tạo cuộc gọi) | 2023-03-06 hoặc 2023-03-06 17:20:58  |
| end_date         | Tìm kiếm cdrs theo khoảng thời gian (Khởi tạo cuộc gọi) | 2023-03-07 hoặc 2023-03-07 00:00:00  |
| extension        | Cuộc gọi từ extension nào                               | 101                                  |
| status           | Trạng thái cuộc gọi                                     | ANSWERED                             |
| hotline          | Tìm theo đầu số thực hiện cuộc gọi                      | 02873003586                          |
| phone            | Từ hoặc tới số điện thoại nào                           | 0899888999                           |
| direction        | Chiều cuộc gọi (inbound, outbound, local)               | outbound                             |
| campaign_uuid    | Tìm kiếm theo campaign uuid                             | fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d |
| start_date_ended | Tìm kiếm cdrs theo khoảng thời gian (Kết thúc cuộc gọi) | 2023-03-06 hoặc 2023-03-06 17:20:58  |
| end_date_ended   | Tìm kiếm cdrs theo khoảng thời gian (Kết thúc cuộc gọi) | 2023-03-07 hoặc 2023-03-07 00:00:00  |
| limit            | Số lượng record trả về                                  | 50                                   |
| offset           | Vị trí bắt đầu khi query                                | 0                                    |

## Get a Specific CDR By ID

```shell
curl --location 'https://{{API_HOST}}/v3/cdr/35a4bf10-d536-40a6-826f-7ff10ed43d94' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "id": "35a4bf10-d536-40a6-826f-7ff10ed43d94",
    "parent_id": "35a4bf10-d536-40a6-826f-7ff10ed43d94",
    "sip_call_id": "3188d6eb-3755-123c-18b6-fa163e71cc82",
    "cause": "USER_BUSY",
    "duration": 20,
    "direction": "outbound",
    "recording_url": "",
    "extension": "",
    "from_number": "02873003586",
    "to_number": "0775702222",
    "receive_dest": "",
    "time_started": "2023-03-07 13:36:12",
    "time_answered": "",
    "time_ended": "2023-03-07 13:36:32",
    "time_ringging": "2023-03-07 13:36:12",
    "status": "busy",
    "billsec": 0,
    "app": "autocall",
    "press_key": "{}",
    "fullname": "",
    "email": "",
    "username": "",
    "sip_hangup_disposition": "recv_refuse",
    "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
    "lead_uuid": "2f8b1c0f-da79-4dfb-959d-1b611cf0cd6a",
    "rate": "",
    "digits": "",
    "note": "",
    "customer_fullname": "",
    "customer_email": "",
    "demand_customer": "",
    "interest_segment": "",
    "additional": {
        "data1": 1,
        "miengiam": "Giảm 50% gốc",
        "phone_number": "0775702222",
        "sdt": "0981218888",
        "ten": "Đỗ Thị Ngà"
    },
    "autocall_presskey_epoch": "",
    "time_presskey": "",
    "presskey_delay": 0,
    "autocall_recording_url": ""
}
```

API dùng để lấy một cdr cụ thể.
Id có thể id của CDR hoặc sip_call_id trong bản tin

### HTTP Request

`GET https://{{API_HOST}}/v3/cdr/{{id}}`

### URL Parameters

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| id        | Id của CDR hoặc sip_call_id trong bản tin |