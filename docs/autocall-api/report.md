---
title: Report Autocall
sidebar_position: 8
---
## Report Campaign

```shell
curl --location 'https://{{API_HOST}}/v3/report/call/campaign' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "answered": 1,
            "busy": 4,
            "busy_line": 0,
            "campaign_name": "AutocallTTS",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 1,
            "not_available": 0,
            "outbound": 6,
            "phone_block": 0,
            "total": 6
        },
        {
            "answered": 0,
            "busy": 0,
            "busy_line": 0,
            "campaign_name": "AutocallAudio",
            "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e",
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 0,
            "not_available": 0,
            "outbound": 0,
            "phone_block": 0,
            "total": 0
        },
        {
            "answered": 0,
            "busy": 0,
            "busy_line": 0,
            "campaign_name": "VoiceOTP110",
            "campaign_uuid": "853b76cc-bffb-4d1b-9f9e-19b1a0fe7894",
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 0,
            "not_available": 0,
            "outbound": 0,
            "phone_block": 0,
            "total": 0
        },
        {
            "answered": 0,
            "busy": 0,
            "busy_line": 0,
            "campaign_name": "TestDelete",
            "campaign_uuid": "5ec47358-d062-4385-9fe7-b5e571055f01",
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 0,
            "not_available": 0,
            "outbound": 0,
            "phone_block": 0,
            "total": 0
        }
    ]
}
```

> Error Response trả về:

```json
{
  "error": "campaign is not found"
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi của các chiến dịch.

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/campaign`

## Report Campaign By ID

```shell
curl --location 'https://{{API_HOST}}/v3/report/call/campaign?campaign_uuid=fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "answered": 1,
            "busy": 4,
            "busy_line": 0,
            "campaign_name": "AutocallTTS",
            "campaign_uuid": "fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d",
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 1,
            "not_available": 0,
            "outbound": 6,
            "phone_block": 0,
            "total": 6
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi của chiến dịch được truyền.

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/campaign?campaign_uuid={{campaign_uuid}}`

### Query Parameters

| Parameter     | Description                                           | Example                              | Required |
| ------------- | ----------------------------------------------------- | ------------------------------------ | -------- |
| campaign_uuid | UUID Chiến dịch thực hiện cuộc gọi                    | fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d | x        |
| start_time    | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2000%3A00%3A00            |          |
| end_time      | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2023%3A59%3A59            |          |
| list_uuid     | UUID của danh sách khách hàng được gán với chiến dịch | 5ec47358-d062-4385-9fe7-b5e571055f01 |          |

## Report Lead of Campaign

```shell
curl --location 'https://{{API_HOST}}/v3/report/call/lead' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "billsec": 22,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "93d7d283-1a5c-40ad-bb93-64bb256bd901",
            "contract_number": "",
            "duration": 31,
            "lead_code": "",
            "lead_uuid": "2f8b1c0f-da79-4dfb-959d-1b611cf0cd6a",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "{}",
            "record_name": "93d7d283-1a5c-40ad-bb93-64bb256bd901.mp3",
            "recording_url": "/usr/local/freeswitch/recordings/autocall.tel4vn.com/archive/2023/Mar/07",
            "status": "answered",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "2023-03-07 13:34:26",
            "end_stamp": "2023-03-07 13:34:57",
            "answer_stamp": "2023-03-07 13:34:35",
            "created_at": "2023-03-07T13:34:21.310357+07:00",
            "last_call_time": "2023-03-07T20:36:42+07:00"
        },
        {
            "billsec": 0,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "",
            "contract_number": "",
            "duration": 0,
            "lead_code": "",
            "lead_uuid": "32ce7469-18fe-4b71-a6d8-2add7a222383",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "",
            "record_name": "",
            "recording_url": "",
            "status": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "",
            "end_stamp": "",
            "answer_stamp": "",
            "created_at": "2023-03-07T10:52:01.102873+07:00",
            "last_call_time": "2023-03-07T17:52:48+07:00"
        },
        {
            "billsec": 0,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "",
            "contract_number": "",
            "duration": 0,
            "lead_code": "",
            "lead_uuid": "fa145343-09ca-4124-baec-069fce2226f5",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "",
            "record_name": "",
            "recording_url": "",
            "status": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "",
            "end_stamp": "",
            "answer_stamp": "",
            "created_at": "2023-03-07T10:40:27.27422+07:00",
            "last_call_time": "2023-03-07T17:43:43+07:00"
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 3
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi theo khách hàng của các chiến dịch.

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/lead`
### Query Parameters

| Parameter     | Description                                           | Example                              | Required |
| ------------- | ----------------------------------------------------- | ------------------------------------ | -------- |
| campaign_uuid | UUID Chiến dịch thực hiện cuộc gọi                    | fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d | x        |
| start_time    | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2000%3A00%3A00            |          |
| end_time      | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2023%3A59%3A59            |          |
| list_uuid     | UUID của danh sách khách hàng được gán với chiến dịch | 5ec47358-d062-4385-9fe7-b5e571055f01 |          |
## Report Lead of Campaign by Campaign ID

```shell
curl --location 'https://{{API_HOST}}/v3/report/call/lead?campaign_uuid=fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "billsec": 22,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "93d7d283-1a5c-40ad-bb93-64bb256bd901",
            "contract_number": "",
            "duration": 31,
            "lead_code": "",
            "lead_uuid": "2f8b1c0f-da79-4dfb-959d-1b611cf0cd6a",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "{}",
            "record_name": "93d7d283-1a5c-40ad-bb93-64bb256bd901.mp3",
            "recording_url": "/usr/local/freeswitch/recordings/autocall.tel4vn.com/archive/2023/Mar/07",
            "status": "answered",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "2023-03-07 13:34:26",
            "end_stamp": "2023-03-07 13:34:57",
            "answer_stamp": "2023-03-07 13:34:35",
            "created_at": "2023-03-07T13:34:21.310357+07:00",
            "last_call_time": "2023-03-07T20:36:42+07:00"
        },
        {
            "billsec": 0,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "",
            "contract_number": "",
            "duration": 0,
            "lead_code": "",
            "lead_uuid": "32ce7469-18fe-4b71-a6d8-2add7a222383",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "",
            "record_name": "",
            "recording_url": "",
            "status": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "",
            "end_stamp": "",
            "answer_stamp": "",
            "created_at": "2023-03-07T10:52:01.102873+07:00",
            "last_call_time": "2023-03-07T17:52:48+07:00"
        },
        {
            "billsec": 0,
            "called_count": 4,
            "campaign_name": "AutocallTTS",
            "cdr_uuid": "",
            "contract_number": "",
            "duration": 0,
            "lead_code": "",
            "lead_uuid": "fa145343-09ca-4124-baec-069fce2226f5",
            "lead_name": "",
            "list_name": "ListAutocall01",
            "phone_number": "0775702541",
            "press_key": "",
            "record_name": "",
            "recording_url": "",
            "status": "",
            "additional": {
                "data1": 1,
                "miengiam": "Giảm 50% gốc",
                "phone_number": "0775702541",
                "sdt": "0981218709",
                "ten": "Đỗ Thị Ngà"
            },
            "start_stamp": "",
            "end_stamp": "",
            "answer_stamp": "",
            "created_at": "2023-03-07T10:40:27.27422+07:00",
            "last_call_time": "2023-03-07T17:43:43+07:00"
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 3
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi của các chiến dịch.

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/lead?campaign_uuid={{campaign_uuid}}`

### Query Parameters

| Parameter     | Description                                           | Example                              | Required |
| ------------- | ----------------------------------------------------- | ------------------------------------ | -------- |
| campaign_uuid | UUID Chiến dịch thực hiện cuộc gọi                    | fdccdbf2-bc4b-4a0f-a7ea-cb0239daaa7d | x        |
| start_time    | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2000%3A00%3A00            |          |
| end_time      | Tìm kiếm cdrs theo khoảng thời gian                   | 2023-03-07%2023%3A59%3A59            |          |
| list_uuid     | UUID của danh sách khách hàng được gán với chiến dịch | 5ec47358-d062-4385-9fe7-b5e571055f01 |          |