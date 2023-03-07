---
title: User
sidebar_position: 11
---

## Get User Status

```shell
curl -L -X GET 'http://{{API_HOST}}/v2/user/{{user_id}}/status' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json'
```

> Response trả về:

```json
{
  "code": 200,
  "content": "successfully",
  "data": {
    "agent_name": "Test User 01",
    "ext_loggedin": "false",
    "extension": "101",
    "user_uuid": "aaaaaaaa-1111-2222-3333-eeeeeeee",
    "username": "test.user01"
  }
}
```

> Error response:

```json
{
  "code": 404,
  "content": "user is not existed",
  "error": "Not Found"
}
```

API dùng để lấy trạng thái của người dùng trên hệ thống.

| Thông tin         | Mô tả                                            |
| ----------------- | ------------------------------------------------ |
| code              | Mã code HTTP trả về                              |
| content           | Thông báo                                        |
| data              | Data trả về                                      |
| data.agent_name   | Tên agent                                        |
| data.extension    | Extension của user                               |
| data.ext_loggedin | Extension này có đang được log in trên softphone |
| data.user_uuid    | Id của user                                      |
| data.username     | Username của user                                |

### HTTP Request

`GET http://{{API_HOST}}/v2/customer/user/{{user_id}}/status`

| Parameter | Description   | Example                                           |
| --------- | ------------- | ------------------------------------------------- |
| user_id   | Id người dùng | test.user01 hoặc aaaaaaaa-1111-2222-3333-eeeeeeee |