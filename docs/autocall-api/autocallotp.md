---
title: Autocall OTP 
---

# OTP

## Run OTP

```shell
curl --location --request POST 'http://{API_HOST}/api/v2/campaigns/1/otp' \
--header 'Authorization: 1ebe8f88MzA1MTNkZjMtZjc3My00MTmY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "caller": "0123456789",
    "callees": [ "0987654321" ],
    "params": {
    "template_name": "template_otp_1",
    "code_otp": "M43TUI"
  },
  "callback_url": "https://demo.webhook.com",
  "callback_apikey": "api_key_123"
}'
```

> Response trả về:

```json
{
  "data": {
    "campaign_id": "1",
    "results": {
      "fail": [
        {
          "1234567890": "Wrong Format"
        }
      ],
      "success": ["1_1_1_5_cb76e372-b798-4a88-9c8a-410740f0300d_0987654321"]
    }
  }
}
```

API thực hiện cuộc gọi OTP

### HTTP Request

`GET http://{API_HOST}/api/v2/campaigns/{campaignId}/otp`

### URL Parameters

| Parameter  | Description          |
| ---------- | -------------------- |
| campaignId | Campaign Id được cấp |

### Body

> Sample data:

```json
{
  "caller": "0123456789",
  "callees": ["0987654321", "1234567890"],
  "params": {
    "template_name": "template_otp_1",
    "code_otp": "M43TUI"
  },
  "callback_url": "https://demo.webhook.com",
  "callback_apikey": "api_key_123"
}
```

| Parameter            | Description                                    |
| -------------------- | ---------------------------------------------- |
| caller               | Đầu số thực hiện cuộc gọi                      |
| callees              | Số điện thoại nhận cuộc gọi                    |
| params               |                                                |
| params.template_name | Kịch bản đọc code OTP                          |
| params.code_otp      | Code OTP                                       |
| callback_url         | Domain webhook mà tổng đài sẽ hook dữ liệu tới |
| callback_apikey      | API Key của webhook (optional)                 |