---
title: CDRs - Call Detail Records
sidebar_position: 2
---

Lịch sử cuộc gọi

## CDR Mapping

### Default Mapping

| Thông tin     | Mô tả                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------- |
| id            | Id của CDR                                                                                  |
| sip_call_id   | call_id trong bản tin SIP                                                                   |
| cause         | Trạng thái cuộc gọi dựa theo mã phản hồi giao thức SIP. Vd: NORMAL_CLEARING, NO_ANSWER, ... |
| duration      | Thời hạn thực hiện cuộc gọi.                                                                |
| direction     | Chiều cuộc gọi (inbound, outbound, local)                                                   |
| recording_url | Đường dẫn file ghi âm cuộc gọi                                                              |
| extension     | Extension nhận hoặc thực hiện cuộc gọi                                                      |
| from_number   | Cuộc gọi từ số nào                                                                          |
| to_number     | Cuộc gọi đến số nào                                                                         |
| receive_dest  | Ringroup hoặc queue của extension nhận cuộc gọi                                             |
| time_started  | Thời gian bắt đầu cuộc gọi                                                                  |
| time_ringing  | Thời gian khi cuộc gọi ring.                                                                |
| time_answered | Thời gian khi cuộc gọi kết nối                                                              |
| time_ended    | Thời gian kết thúc cuộc gọi                                                                 |
| status        | Trạng thái cuộc gọi                                                                         |
| app           | Ứng dụng được sử dụng. (dial, autocall, autodialer)                                         |
| press_key     | Object lưu trữ phím cuộc gọi                                                                |
| lead_id       | Id khách hàng                                                                               |
| username      | Username agent nhận hoặc thực hiện cuộc gọi                                                 |
| firstname     | Tên agent nhận hoặc thực hiện cuộc gọi                                                      |
| middlename    | Tên lót agent nhận hoặc thực hiện cuộc gọi                                                  |
| lastname      | Họ agent nhận hoặc thực hiện cuộc gọi                                                       |

### Flex Mapping

| Thông tin   | Mô tả                                                |
| ----------- | ---------------------------------------------------- |
| cdrId       | Id của cuộc gọi.                                     |
| sip_call_id | call_id trong bản tin SIP                            |
| customerId  | Mã khách hàng                                        |
| extensionId | Số máy lẻ (username) của agent sẽ tiếp nhận cuộc gọi |
| recordFile  | Đường dẫn file ghi âm cuộc gọi                       |
| to          | Mã khách hàng                                        |
| dialAt      | Thời gian bắt đầu cuộc gọi                           |
| ringAt      | Thời gian bắt đầu có chuông                          |
| answeredAt  | Thời gian khi cuộc gọi kết nối                       |
| hangupAt    | Thời gian kết thúc cuộc gọi                          |
| duration    | Thời hạn thực hiện cuộc gọi.                         |
| direction   | Chiều cuộc gọi (inbound, outbound, local)            |
| status      | Trạng thái cuộc gọi                                  |

| Status        | Mô tả                                                                                |
| ------------- | ------------------------------------------------------------------------------------ |
| answered      | Có kết nối và nói chuyện với khách hàng                                              |
| busy          | Máy bận hoặc khách hàng bấm từ chối trả lời                                          |
| no-answered   | Outbound - Khách hàng không nghe máy, để hết chuông. Inbound - agent để hết chuông   |
| cancel        | Outbound - agent ngắt máy trước khi kết nối. Inbound - agent ngắt máy                |
| not-available | Cuộc gọi báo thuê bao không liên lạc được, chế độ máy bay                            |
| invalid       | Không hợp lệ, cuộc gọi bị lỗi, (Ví dụ: click-to-call agent không nghe máy, ngắt máy) |

## Get CDRs

```shell
curl -L -X GET 'http://{{API_HOST}}/v2/cdr?' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Default response trả về:

```json
{
  "data": [
    {
      "id": "ad4c9b90-c071-405a-9723-980d2e5e1623",
      "sip_call_id": "112233aabbccddee..",
      "cause": "NORMAL_CLEARING",
      "duration": 11,
      "direction": 3,
      "recording_url": "http://recording.demo/ad4c9b90-c071-405a-9723-980d2e5e1623",
      "extension": "",
      "from_number": "19001919",
      "to_number": "0899888999",
      "receive_dest": "",
      "time_started": "2021-02-17 17:30:35",
      "time_answered": "2021-02-17 17:30:43",
      "time_ended": "2021-02-17 17:30:46",
      "status": "ANSWERED",
      "app": "autocall",
      "press_key": "{}",
      "lead_id": "c1450608-098e-413d-9e2c-66333b79afe1",
      "username": "",
      "firstname": "",
      "middlename": "",
      "lastname": ""
    },
    {
      "id": "01b7d166-b564-42ec-80a1-4ad343225934 ",
      "sip_call_id": "aabbccddee112233..",
      "cause": "NORMAL_CLEARING",
      "duration": 7,
      "direction": 3,
      "recording_url": "",
      "extension": "101",
      "from_number": "19001919",
      "to_number": "0899888999",
      "receive_dest": "",
      "time_started": "2021-02-18 17:20:58",
      "time_answered": "",
      "time_ended": "2021-02-18 17:21:05",
      "status": "BUSY",
      "app": "dial",
      "press_key": "",
      "customer_id": "c1450608-098e-413d-9e2c-66333b79afe1",
      "username": "agent101",
      "firstname": "A",
      "middlename": "Van",
      "lastname": "Nguyen"
    },
    ...
  ],
  "limit": 10,
  "offset": 10,
  "total": 35
}
```

> Flex response trả về:

```json
{
  "data": [
    {
      "cdrId": "0c1d6ff3-c9b0-4fd1-8f5c-7be53f5f6973",
      "sip_call_id": "80bea701-49de-123a-89ab-fa163e3b9b38",
      "recordFile": "http://recording.demo/0c1d6ff3-c9b0-4fd1-8f5c-7be53f5f6973",
      "extensionId": "101",
      "to": "0899888999",
      "hangupAt": "2021-06-17 14:14:56",
      "answeredAt": "2021-06-17 14:14:33",
      "ringAt": "2021-06-17 14:14:36",
      "dialAt": "2021-06-17 14:14:31",
      "status": "answered",
      "duration": 25,
      "direction": "outbound",
      "billsec": 23,
      "customerId": "KH1"
    },
    {
      "cdrId": "b689a2e3-0e12-47f4-8dc7-516c1dd10828",
      "sip_call_id": "c92973c8-49e1-123a-89ab-fa163e3b9b38",
      "recordFile": "",
      "extensionId": "101",
      "to": "0899888999",
      "hangupAt": "2021-06-17 14:38:10",
      "answeredAt": "",
      "ringAt": "2021-06-17 14:38:05",
      "dialAt": "2021-06-17 14:38:01",
      "status": "busy",
      "duration": 9,
      "direction": "outbound",
      "billsec": 0,
      "customerId": "KH1"
    },
    ...
  ],
  "limit": 10,
  "offset": 10,
  "total": 35
}
```

Trả về danh sách lịch sử cuộc gọi.
API CDRs sử dụng 2 cơ chế để trả về dữ liệu.
Pagination: Phân trang.
Scroll: Cuộn trang. (Mặc định)

Nếu user cung cấp trong param: page - Số trang, limit - số lượng trả về thì API sẽ trả về dữ liêu theo cơ chế Pagination.

### HTTP Request

`GET http://{{API_HOST}}/v2/cdr`

### Query Parameters

| Parameter   | Mô tả                                                                        | Example                             |
| ----------- | ---------------------------------------------------------------------------- | ----------------------------------- |
| start_date  | Tìm kiếm cdrs theo khoảng thời gian (Khởi tạo cuộc gọi)                      | 2021-02-18 hoặc 2021-02-18 17:20:58 |
| end_date    | Tìm kiếm cdrs theo khoảng thời gian (Khởi tạo cuộc gọi)                      | 2021-02-19 hoặc 2021-02-19 00:00:00 |
| duration    | Thời hạn của cuộc gọi                                                        | 10                                  |
| extension   | Cuộc gọi từ extension nào                                                    | 101                                 |
| phone       | Từ hoặc tới số điện thoại nào                                                | 0899888999                          |
| direction   | Chiều cuộc gọi (inbound, outbound, local)                                    | outbound                            |
| limit       | Số lượng record trả về                                                       | 50                                  |
| offset      | Vị trí bắt đầu khi query. (offset sẽ thay thế page nếu có data) (Pagination) | 0                                   |
| application | Ứng dụng được sử dụng. (dial, autocall, autodialer)                          | autocall                            |

## Get a Specific CDR

```shell
curl -L -X GET 'http://{{API_HOST}}/v2/cdr/01b7d166-b564-42ec-80a1-4ad343225934' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Default Response trả về:

```json
{
  "id": "01b7d166-b564-42ec-80a1-4ad343225934",
  "sip_call_id": "aabbccddee112233..",
  "cause": "NORMAL_CLEARING",
  "duration": 7,
  "direction": 3,
  "recording_url": "",
  "extension": "101",
  "from_number": "19001919",
  "to_number": "0899888999",
  "receive_dest": "",
  "time_started": "2021-02-18 17:20:58",
  "time_answered": "",
  "time_ended": "2021-02-18 17:21:05",
  "status": "BUSY",
  "customer_id": "KH1"
}
```

> Flex response trả về:

```json
{
  "cdrId": "0c1d6ff3-c9b0-4fd1-8f5c-7be53f5f6973",
  "sip_call_id": "80bea701-49de-123a-89ab-fa163e3b9b38",
  "recordFile": "http://recording.demo/0c1d6ff3-c9b0-4fd1-8f5c-7be53f5f6973",
  "extensionId": "101",
  "to": "0899888999",
  "hangupAt": "2021-06-17 14:14:56",
  "answeredAt": "2021-06-17 14:14:33",
  "ringAt": "2021-06-17 14:14:36",
  "dialAt": "2021-06-17 14:14:31",
  "status": "answered",
  "duration": 25,
  "direction": "outbound",
  "billsec": 23,
  "customerId": "KH1"
}
```

API dùng để lấy một cdr cụ thể.
Id có thể id của CDR hoặc sip_call_id trong bản tin

### HTTP Request

`GET http://{{API_HOST}}/v2/cdr/<ID>`

### URL Parameters

| Parameter | Mô tả                                     |
| --------- | ----------------------------------------- |
| ID        | Id của CDR hoặc sip_call_id trong bản tin |
