---
title: Customer
sidebar_position: 12
---

## Get List Customers

```shell
curl -L -X GET 'http://{{API_HOST}}/v2/customer' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully",
  "data": [
    {
      "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",
      "contract_number": "ABC123",
      "created_at": "2021-07-15T12:50:23.805319Z",
      "customer_code": "KH01",
      "customer_id": "dddddddd-1111-2222-3333-eeeeeeee",
      "customer_name": "Khach Hang 01",
      "phone_number": "0899888998",
      "status": "NEW",
      "updated_at": "0001-01-01T00:00:00Z",
      "after_day": 7
    },
    {
      "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",
      "contract_number": "DEF456",
      "created_at": "2021-07-15T12:50:24.565573Z",
      "customer_code": "KH01",
      "customer_id": "gggggggg-1111-2222-3333-eeeeeeee",
      "customer_name": "Khach Hang 02",
      "phone_number": "0899888999",
      "status": "NEW",
      "updated_at": "0001-01-01T00:00:00Z",
      "after_day": 7
    }
  ],
  "limit": 10,
  "offset": 0,
  "total": 200
}
```
API dùng để lấy danh sách khách hàng đã upload.

| Thông tin            | Mô tả                                      |
| -------------------- | ------------------------------------------ |
| code                 | Mã code HTTP trả về                        |
| content              | Thông báo                                  |
| data                 | Data trả về                                |
| data.campaign_id     | Id của chiến dịch                          |
| data.contract_number | Mã hợp đồng                                |
| data.customer_code   | Mã khách hàng                              |
| data.customer_id     | Id khách hàng                              |
| data.customer_name   | Tên khách hàng                             |
| data.phone_number    | Số điện thoại khách hàng                   |
| data.status          | Trạng thái khách hàng                      |
| data.created_at      | Thời gian khởi tạo                         |
| data.updated_at      | Thời gian được cập nhật gần nhất           |
| data.after_day       | Sau bao nhiêu ngày sẽ được tự động gọi lại |

| Status      | Mô tả                                       |
| ----------- | ------------------------------------------- |
| new         | Khách hàng vừa được khởi tạo mới            |
| queue       | Đã được đưa vào hàng chờ để tiến hành gọi   |
| answered    | Có kết nối và nói chuyện với khách hàng     |
| busy        | Máy bận hoặc khách hàng bấm từ chối trả lời |
| no-answered | Khách hàng không nghe máy, để hết chuông    |
| cancel      | Phía extension, agent chủ động ngắt máy     |
| fail        | Khi tổng đài nhận mã lỗi từ telco           |
| unknown     | Trạng thái lỗi không xác định               |

### HTTP Request

`GET http://{{API_HOST}}/v2/customer`

### Query Parameters

| Parameter   | Description                       | Example                          |
| ----------- | --------------------------------- | -------------------------------- |
| campaign_id | Id Chiến dịch khách hàng thuộc về | aaaaaaaa-1111-2222-3333-eeeeeeee |
| limit       | Số lượng record trả về            | 50                               |
| offset      | Vị trí bắt đầu khi query          | 0                                |

## Get Specific Customer

```shell
curl -L -X GET 'http://{{API_HOST}}/v2/customer/dddddddd-1111-2222-3333-eeeeeeee' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully",
  "data": {
    "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",
    "contract_number": "ABC123",
    "created_at": "2021-07-15T12:50:23.805319Z",
    "customer_code": "KH01",
    "customer_id": "dddddddd-1111-2222-3333-eeeeeeee",
    "customer_name": "Khach Hang 01",
    "phone_number": "0899888998",
    "status": "NEW",
    "updated_at": "0001-01-01T00:00:00Z",
    "after_day": 7
  }
}
```

> Error response:

```json
{
  "code": 404,
  "content": "Not Found",
  "error": "Not Found"
}
```

API dùng để lấy thông tin của một khách hàng cụ thể.

| Thông tin            | Mô tả                                      |
| -------------------- | ------------------------------------------ |
| code                 | Mã code HTTP trả về                        |
| content              | Thông báo                                  |
| data                 | Data trả về                                |
| data.campaign_id     | Id của chiến dịch                          |
| data.contract_number | Mã hợp đồng                                |
| data.customer_code   | Mã khách hàng                              |
| data.customer_id     | Id khách hàng                              |
| data.customer_name   | Tên khách hàng                             |
| data.phone_number    | Số điện thoại khách hàng                   |
| data.status          | Trạng thái khách hàng                      |
| data.created_at      | Thời gian khởi tạo                         |
| data.updated_at      | Thời gian được cập nhật gần nhất           |
| data.after_day       | Sau bao nhiêu ngày sẽ được tự động gọi lại |

| Status      | Mô tả                                       |
| ----------- | ------------------------------------------- |
| new         | Khách hàng vừa được khởi tạo mới            |
| queue       | Đã được đưa vào hàng chờ để tiến hành gọi   |
| answered    | Có kết nối và nói chuyện với khách hàng     |
| busy        | Máy bận hoặc khách hàng bấm từ chối trả lời |
| no-answered | Khách hàng không nghe máy, để hết chuông    |
| cancel      | Phía extension, agent chủ động ngắt máy     |
| fail        | Khi tổng đài nhận mã lỗi từ telco           |
| unknown     | Trạng thái lỗi không xác định               |

### HTTP Request

`GET http://{{API_HOST}}/v2/customer/{{customer_id}}`

| Parameter   | Description   | Example                          |
| ----------- | ------------- | -------------------------------- |
| customer_id | Id khách hàng | aaaaaaaa-1111-2222-3333-eeeeeeee |

## Post Customer

```shell
curl --location --request POST 'http://{{API_HOST}}/v2/autocall/queue' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",
    "customer_name": "Khach Hang 01",
    "customer_code": "KH01",
    "phone_number": "0899888998",
    "contract_number": "ABC123",
    "after_day": 7
}'
```

> Response trả về:

```json
{
  "code": 201,
  "content": "successfully",
  "id": "dddddddd-1111-2222-3333-eeeeeeee"
}
```

> Error Response trả về:

```json
{
  "code": 400,
  "content": [
    {
      "phone_number": "Does not match pattern '^(84|0[3|5|7|8|9])+([0-9]{8})$'"
    }
  ],
  "error": "Bad Request"
}
```

API dùng để nhận thông tin của một khách hàng cụ thể. 7 ngày tính từ ngày thông tin được gửi sang, hệ thông sẽ thực hiện autodialer khách hàng cho agent.

### HTTP Request

`POST http://{{API_HOST}}/v2/customer`

### Body

> Sample data:

```json
{
  "campaign_id": "aaaaaaaa-1111-2222-3333-eeeeeeee",
  "customer_name": "Khach Hang 01",
  "customer_code": "KH01",
  "phone_number": "0899888998",
  "contract_number": "ABC123",
  "after_day": 7
}
```

| Parameter       | Description                                                         | Required |
| --------------- | ------------------------------------------------------------------- | -------- |
| campaign_id     | Id chiến dịch                                                       | x        |
| customer_name   | Tên khách hàng                                                      |          |
| customer_code   | Mã khách hàng                                                       | x        |
| phone_number    | Số điện thoại của khách hàng                                        | x        |
| contract_number | Mã hợp đồng                                                         | x        |
| after_day       | Sau bao nhiêu ngày sẽ được tự động gọi lại. (Mặc định sẽ là 7 ngày) |          |