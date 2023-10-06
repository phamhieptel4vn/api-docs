---
title: Call
sidebar_position: 4
---

## List Calls

```shell
curl -L -X GET 'http://{{API_HOST}}/v1/call' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json'
```

> Response trả về:

```json
{
  "data": [
      {
        "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",
        "context": "test.tel4vn.com",
        "created_time": "2021-06-08 17:37:37",
        "destination": "0899123456",
        "direction": "outbound",
        "ip": "1.2.3.4",
        "source": "101",
        "state": "CS_EXECUTE"
      },
      ...
  ],
  "total": 1
}
```

API dùng để lấy danh sách các cuộc gọi theo thời gian thực.

### HTTP Request

`GET http://{{API_HOST}}/v1/call`

## Transfer a call

```shell
curl -L -X POST 'http://{{API_HOST}}/v1/call/01b7d166-b564-42ec-80a1-4ad343225934/transfer' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json' \
--data-raw '{
    "ext" : "101"
}'
```

> Response trả về:

```json
{
  "status": "success",
  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",
  "ext": "101"
}
```

> Error Response trả về:

```json
{
  "status": "fail",
  "error": "USER_NOT_REGISTERED"
}
```

API dùng để thực hiện chuyển cuộc gọi sang extension khác.

### HTTP Request

`POST http://{{API_HOST}}/v1/call/<CALL_ID>/transfer`

### Body

| Parameter | Mô tả                 |
| --------- | --------------------- |
| ext       | Ext nhận cuộc gọi mới |

## Listen a call

```shell
curl -L -X POST 'http://{{API_HOST}}/v1/call/01b7d166-b564-42ec-80a1-4ad343225934/listen' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json' \
--data-raw '{
    "ext" : "101"
}'
```

> Response trả về:

```json
{
  "status": "success",
  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",
  "ext": "101"
}
```

> Error Response trả về:

```json
{
  "status": "fail",
  "error": "USER_NOT_REGISTERED"
}
```

API dùng để thực hiện nghe lén cuộc gọi của một extension khác.

### HTTP Request

`POST http://{{API_HOST}}/v1/call/<CALL_ID>/listen`

### Body

| Parameter | Mô tả             |
| --------- | ----------------- |
| ext       | Ext nhận cuộc gọi |

## Whisper a call

```shell
curl -L -X POST 'http://{{API_HOST}}/v1/call/01b7d166-b564-42ec-80a1-4ad343225934/whisper' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json' \
--data-raw '{
    "ext" : "101"
}'
```

> Response trả về:

```json
{
  "status": "success",
  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",
  "ext": "101"
}
```

> Error Response trả về:

```json
{
  "status": "fail",
  "error": "USER_NOT_REGISTERED"
}
```

API dùng để thực hiện cuộc gọi với extension, mobile sẽ không nghe được.

### HTTP Request

`POST http://{{API_HOST}}/v1/call/<CALL_ID>/whisper`

### Body

| Parameter | Mô tả                 |
| --------- | --------------------- |
| ext       | Ext nhận cuộc gọi mới |

## Barge a call

```shell
curl -L -X POST 'http://{{API_HOST}}/v1/call/01b7d166-b564-42ec-80a1-4ad343225934/barge' \
-H 'Authorization: Bearer {{TOKEN}}'
-H 'Content-Type: application/json' \
--data-raw '{
    "ext" : "101"
}'
```

> Response trả về:

```json
{
  "status": "success",
  "call_id": "01b7d166-b564-42ec-80a1-4ad343225934",
  "ext": "101"
}
```

> Error Response trả về:

```json
{
  "status": "fail",
  "error": "USER_NOT_REGISTERED"
}
```

API dùng để thực hiện cuộc gọi 3 bên với extension và mobile.

### HTTP Request

`POST http://{{API_HOST}}/v1/call/<CALL_ID>/barge`

### Body

| Parameter | Mô tả                 |
| --------- | --------------------- |
| ext       | Ext nhận cuộc gọi mới |