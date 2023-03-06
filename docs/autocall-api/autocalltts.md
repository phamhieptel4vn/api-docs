---
title: Text-To-Speech
---

## Import TTS Voice

```shell
curl --location --request POST 'http://{API_HOST}/api/v2/campaigns/1/voice/import' \
--header 'Authorization: 1ebe8f88MzA1MTNkZjMtZjc3My00MTmY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "thong_bao_no_cuoc_01",
    "content": "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"
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

Tạo kịch bản Text-To-Speech

### HTTP Request

`GET http://{API_HOST}/api/v2/campaigns/{campaignId}/voice/import`

### URL Parameters

| Parameter  | Description          |
| ---------- | -------------------- |
| campaignId | Campaign Id được cấp |

### Body

> Sample data:

```json
{
  "name": "thong_bao_no_cuoc_01",
  "content": "Chào bạn {{key_field_1}} vui lòng thanh toán khoản nợ {{key_field_2}} trước ngày {{key_field_3}}"
}
```

| Parameter       | Description                               |
| --------------- | ----------------------------------------- |
| name            | Tên kịch bản muốn tạo. (Phải là duy nhất) |
| content         | Nội dung của kịch bản                     |
| key_field_1,2,3 | Các từ khoả trong kịch bản                |

key_field: tương ứng với đoạn text import vào campaign người dùng định nghĩa.

Ví dụ:
	key_field_1 là {{customer_name}}
	key_field_2 là {{due_amount}}
	key_field_3 là {{due_date}}

Đoạn content sẽ là : "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"

## Run TTS

```shell
curl --location --request POST 'http://{API_HOST}/api/v2/campaigns/1/voice' \
--header 'Authorization: 1ebe8f88MzA1MTNkZjMtZjc3My00MTmY' \
--header 'Content-Type: application/json' \
--data-raw '{
    "caller": "1234567890",
    "callees": [
        "0987654321",
        "1234567890"
    ],
    "params": {
        "template_name": "thong_bao_no_cuoc_1",
        "customer_name": "Nguyễn Văn A",
        "due_amount": "10.410.000",
        "due_days": "#15"
    },
    "callback_url": "https://demo.webhook.com",
    "callback_apikey": "api_key_123"
}
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

API thực hiện cuộc gọi Text-To-Speech

### HTTP Request

`GET http://{API_HOST}/api/v2/campaigns/{campaignId}/voice`

### URL Parameters

| Parameter  | Description          |
| ---------- | -------------------- |
| campaignId | Campaign Id được cấp |

### Body

> Sample data:

```json
{
  "caller": "1234567890",
  "callees": ["0987654321", "1234567890"],
  "params": {
    "template_name": "thong_bao_no_cuoc_1",
    "customer_name": "Nguyễn Văn A",
    "due_amount": "10.410.000",
    "due_date": "30/1/2021"
  },
  "callback_url": "https://demo.webhook.com",
  "callback_apikey": "api_key_123"
}
```

| Parameter            | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| caller               | Đầu số thực hiện cuộc gọi                                           |
| callees              | Số điện thoại nhận cuộc gọi                                         |
| params               |                                                                     |
| params.template_name | Kịch bản đọc code OTP                                               |
| params.customer_name | Các thông tin sẽ được đọc dựa vào từ khoá bạn đã tạo trong kịch bản |
| callback_url         | Domain webhook mà tổng đài sẽ hook dữ liệu tới                      |
| callback_apikey      | API Key của webhook (optional)                                      |

Một số lưu ý:

Nếu muốn đọc đúng khoản tiền (Không đọc từng số) - truyền dữ liệu theo format: “10.410.000”
Nếu muốn đọc từng số (Ví dụ số điện thoại) - truyền dữ liệu theo format: 123456789 hoặc “0987654321”
Nếu muốn đọc thành số (Ví dụ 15 - mười lăm) - truyền dữ liệu theo format: “#15”
Nếu giá trị của key field là ngày tháng năm - Yêu cầu format “dd/mm/yyyy”, ví dụ: “30/01/2021”


params.key_field: tương ứng với đoạn text import vào campaign người dùng đã định nghĩa.

Ví dụ:
   Kịch bản : "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"
   Nội dung kịch bản sẽ là: “Chào bạn Nguyễn Văn A vui lòng thanh toán khoản nợ mười triệu bốn trăm mười nghìn trước ngày ba mươi tháng một năm hai không hai mươi mốt”
