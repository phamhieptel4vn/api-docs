---
title: Call Detail Report
---

Lịch sử cuộc gọi

## Attributes

| Attribute    | Description                             | Type     |
| ------------ | --------------------------------------- | -------- |
| id           | Call Id                                 | string   |
| campaign_id  | Campaign Id                             | string   |
| code_otp     | Code OTP - Null with failed calls       | object   |
| created_at   | Initiate the call at                    | datetime |
| started_at   | The time that callee has picked up call | datetime |
| ended_at     | The time that callee has hang up call   | datetime |
| duration     | Call duration                           | int      |
| keypress     | Keypress. Default: 127 - Hangup         | string   |
| phone_number | Phone numbers was received              | string   |
| user_id      | User Id                                 | string   |
| param        | Param that api call is received         | string   |
| type         | Call Type: OTP,TTS,DEFAULT              | string   |
| status       | Call Disposition.                       | string   |

| Call Type     | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| FAIL          | Mã lỗi mặc định                                                               |
| ANSWERED      | Cuộc gọi thành công và được người dùng nhấc máy                               |
| NOANWSER      | Người dùng gác máy hoặc không nhấc máy                                        |
| BUSY          | Cuộc gọi bị báo bận                                                           |
| CONGESTION    | Cuộc gọi bị nghẽn                                                             |
| INVALIDNUMBER | Số điện thoại gọi ra không phù hợp                                            |
| ERROR         | Máy chủ nhận được yêu cầu không khớp với bất kỳ hộp thoại hoặc giao dịch nào. |
| CANCEL        | Người dùng gác máy (Trường hợp riêng của nhà mạng Mobiphone gọi Mobiphone)    |

## Get a Specific CDR

```shell
curl --location --request GET 'http://{API_HOST}/api/v2/report/1_1_1_5_cb76e372-b798-4a88-9c8a-410740f0300d_0987654321' \
--header 'Authorization: 1ebe8f88MzA1MTNkZjMtZjc3My00MTmY'
```

> Response trả về:

```json
{
  "data": {
    "campaign_id": "1",
    "code_otp": "M43TUI",
    "created_at": "2021-01-11 11:28:45",
    "duration": 15,
    "ended_at": "2021-01-11 11:29:09",
    "id": "1_1_1_5_cb76e372-b798-4a88-9c8a-410740f0300d_0987654321",
    "keypress": "127",
    "param": "{\"customer_name\":\"Nguyễn Văn A\",\"due_amount\":\"10.410.000\",\"due_days\":\"#15\",\"template_name\":\"thong_bao_no_cuoc_1\"}",
    "phone_number": "0987654321",
    "started_at": "2021-01-11 11:28:54",
    "status": "ANSWERED",
    "type": "TTS",
    "user_id": "5"
  }
}
```

API dùng để lấy một cdr cụ thể.

### HTTP Request

`GET http://{API_HOST}/api/v2/report/{callId}`

### URL Parameters

| Parameter | Description               |
| --------- | ------------------------- |
| ID        | Call_id trong data trả về |