---
title: Autocall
sidebar_position: 9
---

## Nhận dữ liệu queue

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queue_code": "Autocall-Q1",
    "template": "IVR-1",
    "concurrent_call" : 5,
    "max_recall_count": 3,
    "min_recall_duration": 3,
    "customers": [
        {
            "id": "TEL4VN_Test",
            "mobiles": [
                "0982596021"
            ],
            "contract_number": "HD123456",
            "upcoming_due_date": "2021-07-13",
            "upcoming_amount": 5000000,
            "due_date": "2021-07-13",
            "dpd": 5,
            "number_of_ovd_inst": 6,
            "total_ovd_amount": 3211100
        }
    ]
}'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully",
  "data": {
    "fail": [],
    "success": ["TEL4VN_Test"]
  }
}
```

> Error Response trả về:

```json
{
  "code": 400,
  "content": "import fail",
  "data": {
    "fail": [],
    "success": []
  }
}
```

API này nhằm mục đích nhận thông tin về queue để tiến hành tự động gọi ra theo kịch bản.

### HTTP Request

`POST http://{{API_HOST}}/v2/autocall/queue`

### Body

> Sample data:

```json
{
  "queue_code": "Autocall-Q1",
  "template": "IVR-1",
  "concurrent_call": 5,
  "max_recall_count": 3,
  "min_recall_duration": 3,
  "customers": [
    {
      "id": "TEL4VN_Test",
      "mobiles": ["0982596021"],
      "contract_number": "HD123456",
      "upcoming_due_date": "2021-07-13",
      "upcoming_amount": 5000000,
      "due_date": "2021-07-13",
      "dpd": 5,
      "number_of_ovd_inst": 6,
      "total_ovd_amount": 3211100
    }
  ]
}
```

| Parameter           | Description                                           | Required |
| ------------------- | ----------------------------------------------------- | -------- |
| queue_code          | Mã queue                                              | x        |
| template            | Kịch bản dùng để                                      | x        |
| concurrent_call     | Số lượng cuộc gọi đồng thời                           |          |
| max_recall_count    | Số lượng cuộc gọi lại nếu không thành công            |          |
| min_recall_duration | Nếu thời gian tính từ lúc nhấc máy nhỏ hơn sẽ gọi lại |          |
| customers.id        | ID của khách hàng                                     | x        |
| customers.mobiles   | Danh sách các số điện thoại của khách hàng            | x        |

## Import danh sách chặn

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue/dnc' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queue_code": "Autocall-Q1",
    "customers": [
        {
          "id": "KH_01"
        },
        {
          "id": "KH_02"
        },
        {
          "id": "KH_03"
        }
    ]
}'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully"
}
```

> Error Response trả về:

```json
{
  "code": 404,
  "content": "queue not found"
}
```

API này nhằm mục đích cung cấp danh sách các khách hàng cần chặn cuộc gọi lên tổng đài. Tổng đài sẽ loại/bỏ qua các khách hàng này khi quay số nếu chưa quay đến. Nếu đã quay rồi hoặc đang trong cuộc gọi thì giữ nguyên.

### HTTP Request

`POST http://{{API_HOST}}/v2/autocall/queue/dnc`

### Body

> Sample data:

```json
{
  "queue_code": "Autocall-Q1",
  "customers": [
    {
      "id": "KH_01"
    },
    {
      "id": "KH_02"
    },
    {
      "id": "KH_03"
    }
  ]
}
```

| Parameter    | Description       | Required |
| ------------ | ----------------- | -------- |
| queue_code   | Mã queue          | x        |
| customers.id | ID của khách hàng | x        |

## Stop Queue

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue/stop' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queue_code": "Autocall-Q1"
}'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully"
}
```

> Error Response trả về:

```json
{
  "code": 404,
  "content": "queue not found"
}
```

API này nhằm mục đích yêu cầu tạm dừng một queue đang thực hiện.

### HTTP Request

`POST http://{{API_HOST}}/v2/autocall/queue/stop`

### Body

> Sample data:

```json
{
  "queue_code": "Autocall-Q1"
}
```

| Parameter  | Description | Required |
| ---------- | ----------- | -------- |
| queue_code | Mã queue    | x        |

## Delete Queue

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue/delete' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queue_code": "Autocall-Q1"
}'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully"
}
```

> Error Response trả về:

```json
{
  "code": 404,
  "content": "queue not found"
}
```

API này nhằm mục đích yêu cầu thu hồi (xoá) một queue sau khi đã tạm dừng.

### HTTP Request

`POST http://{{API_HOST}}/v2/autocall/queue/delete`

### Body

> Sample data:

```json
{
  "queue_code": "Autocall-Q1"
}
```

| Parameter  | Description | Required |
| ---------- | ----------- | -------- |
| queue_code | Mã queue    | x        |

## Start Queue

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue/start' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "queue_code": "Autocall-Q1"
}'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully"
}
```

> Error Response trả về:

```json
{
  "code": 404,
  "content": "queue not found"
}
```

API này nhằm mục đích yêu cầu tiếp tục một queue đang tạm dừng.

### HTTP Request

`POST http://{{API_HOST}}/v2/autocall/queue/start`

### Body

> Sample data:

```json
{
  "queue_code": "Autocall-Q1"
}
```

| Parameter  | Description | Required |
| ---------- | ----------- | -------- |
| queue_code | Mã queue    | x        |