---
title: Authentication
sidebar_position: 1
---
## Login
    
```shell
curl -L -X POST 'https://{{API_HOST}}/v3/auth' \
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

`POST https://{{API_HOST}}/v3/auth`

### Body

| Parameter | Description        |
| --------- | ------------------ |
| username  | Account's username |
| password  | Account's password |

## Get Access Token

```shell
curl --location 'https://{{API_HOST}}/v3/auth/token' \
--header 'Content-Type: application/json' \
--data '{
"api_key": "aaaaaaaa-bbbb-cccc-dddd-eeeeeeee"
}'
```

> Response trả về:

```json
{
    "client_id": "42f6b1d7-4a16-428d-895b-fe38b0cfcbe1",
    "domain_uuid": "2de2dd34-9724-493b-bd3c-4ca6a97463eb",
    "expired_in": 13647710,
    "refresh_token": "",
    "token": "eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMjU2R0NNIiwiaWF0IjoxNjEzNjMyNzc4fQ.dGhpcyBpcyB0ZXN0IGRhdGEx",
    "token_type": "Bearer",
    "user_id": "aaaaaaaa-1111-2222-3333-eeeeeeee"
}
```

Autocall API sử dụng API Token để xác thực truy cập tới API. API Token bạn lấy từ service thông qua {API_KEY} được Tổng đài cung cấp.

Tất cả các API của Autocall đều yêu cầu user cung cấp Token trong header giống phía dưới.

`Authorization: {TOKEN}`

Bạn vui lòng thay đổi {TOKEN} bằng token đã lấy được.

### HTTP Request

`POST https://{{API_HOST}}/v3/auth/token`

### Body

| Parameter | Description      |
| --------- | ---------------- |
| api_key   | API key được cấp |