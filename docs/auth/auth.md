---
id: auth
title: Xác thực
---

## Xác thực

API dùng để lấy access token thông qua API KEY được cung cấp.

AcessToken là chuỗi mã hóa chứa thông tin của tài khoản.

## Login Account

```shell
curl -L -X POST 'https://{{API_HOST}}/v1/auth' \
-H 'Content-Type: application/json' \
--data-raw '{
    "username" : "foo@test.tel4vn.com",
    "password" : "foo123"
}'
```

> Response trả về:

```json
{
  "data": {
    "user_uuid": "aaaaaaaa-1111-2222-3333-eeeeeeee",
    "domain_uuid": "dddddddd-1111-2222-3333-eeeeeeee",
    "username": "foo",
    "api_key": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee",
    "user_enabled": "true",
    "level": "admin"
  }
}
```

Login thành công sẽ trả về thông tin account.

### HTTP Request

`POST https://{{API_HOST}}/v1/auth`

### Body

| Parameter | Description        |
| --------- | ------------------ |
| username  | Account's username |
| password  | Account's password |
