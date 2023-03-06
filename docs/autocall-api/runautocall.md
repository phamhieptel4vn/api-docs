---
title: Run Autocall
sidebar_position: 4
---
# Autocall

## Import Lead & Run Autocall

```shell
curl --location 'https://{{API_HOST}}/v3/autocall/import' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "campaign_uuid": "e43b3104-5e7a-45bb-91ee-4364201c83c0",
    "phone_number": "0331111111",
    "param": {
        "ten" : "Nguyễn Văn A",
        "sdt": "0331111111"
    }
}'
```

> Response trả về:

```json
{
    "call_id": "ff9ea70e-2936-4c3f-a7c9-347a95f75661",
    "lead_uuid": "35bdb598-1c90-485e-9101-7458e9df453d",
    "message": "success"
}
```

> Error Response trả về:

```json
{
    "error": [
        {
            "(root)": "campaign_uuid is required"
        }
    ]
}
```

```json
{
    "error": [
        {
            "(root)": "phone_number is required"
        }
    ]
}
```

```json
{
    "error": [
        {
            "(root)": "param is required"
        }
    ]
}
```

API này dùng để nhận thông tin và đẩy cuộc gọi autocall theo kịch bản của chiến dịch và thông tin được truyền.

### HTTP Request

`POST https://{{API_HOST}}/v3/autocall/import`

### Body

> Sample data:

```json
{
    "campaign_uuid": "e43b3104-5e7a-45bb-91ee-4364201c83c0",
    "phone_number": "0331111111",
    "param": {
        "ten" : "Nguyễn Văn A",
        "sdt": "0331111111"
    }
}
```

| Parameter      | Description                 | Required |
| -------------- | --------------------------- | -------- |
| campaign_uuid  | UUID của chiến dịch         | x        |
| phone_number   | Số điện thoại nhận cuộc gọi | x        |
| params.ten,sdt | key_field                   | x        |

:::tip
Một số lưu ý:
- Nếu muốn đọc đúng khoản tiền (Không đọc từng số) - truyền dữ liệu theo format: “10410000”
- Nếu muốn đọc từng số (Ví dụ số điện thoại) - truyền dữ liệu theo format: 1 2 3 4 5 6 hoặc “0 9 8 7 6 5 4 3 2 1”
- Nếu muốn đọc thành số (Ví dụ 15 - mười lăm) - truyền dữ liệu theo format: “#15”
- Nếu giá trị của key field là ngày tháng năm - Yêu cầu format “dd/mm/yyyy” hoặc “yyyy-mm-dd”, ví dụ: “30/01/2021” hoặc "2021-01-30"

customers.key_field: tương ứng với đoạn text import vào campaign người dùng đã định nghĩa.
Ví dụ:
    Kịch bản : "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"
    Nội dung kịch bản sẽ là: “Chào bạn Nguyễn Văn A vui lòng thanh toán khoản nợ mười triệu bốn trăm mười nghìn trước ngày ba mươi tháng một năm hai không hai mươi mốt”
:::

## Khởi chạy chiến dịch - Run campaign autocall

```shell
curl --location 'https://{{API_HOST}}/v1/campaign/c2da23c0-9739-4287-828a-7b15cf0fb19e/run/start' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{}'
```

> Response trả về:

```json
{
    "campaign_uuid": "c2da23c0-9739-4287-828a-7b15cf0fb19e"
}
```

> Error Response trả về:

```json
{
    "error": "Not Found"
}
```

API này dùng để chuyển đổi trạng thái chiến dịch autocall từ pause & stop sang start (running).

### HTTP Request

`POST https://{{API_HOST}}/v1/campaign/{{campaign_uuid}}/run/start`

### Body

> Sample data:

```json
{}
```

### Query Parameters

| Parameter     | Description         |
| ------------- | ------------------- |
| campaign_uuid | UUID của chiến dịch |


## Báo cáo chiến dịch autocall

```shell
curl --location --request GET 'https://{{API_HOST}}/v1/autocall/report?campaign_uuid=avavavav-1111-2222-3333-eeeeeeee&start_date=2022-01-01%2010:00:00&end_date=2022-01-01%2012:00:00' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json'
```

> Response trả về:

```json
{
  "data": {
    "status": {
      "answered": 3,
      "busy": 1,
      "not_available": 0,
      "no_answer": 0,
      "cancel": 0,
      "failed": 0
    },
    "total_calls": 4,
    "total_duration": 43,
    "total_billsec": 10,
    "total_waitsec": 0
  }
}
```

> Error Response trả về:

```json
{
  "error": "campaign is not found"
}
```

API này dùng để nhận thông tin chiến dịch và đẩy cuộc gọi autocall theo kịch bản và thông tin được truyền.

### HTTP Request

`GET https://{{API_HOST}}/v1/autocall/report`

### Query Parameters

| Parameter     | Description                         | Example                          | Required |
| ------------- | ----------------------------------- | -------------------------------- | -------- |
| campaign_uuid | Chiến dịch thực hiện cuộc gọi       | aaaaaaaa-1111-2222-3333-eeeeeeee | x        |
| start_date    | Tìm kiếm cdrs theo khoảng thời gian | 2021-02-18 17:20:58              |          |
| end_date      | Tìm kiếm cdrs theo khoảng thời gian | 2021-02-18 17:20:58              |          |