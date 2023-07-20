---
title: Event
sidebar_position: 10
---


## Get Events

```shell
curl -L -X GET 'http://{{API_HOST}}/v1/event' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
  "data": [
    {
      "event_domain_uuid": "avavavav-1111-2222-3333-eeeeeeee",
      "domain_uuid": "dddddddd-1111-2222-3333-eeeeeeee",
      "domain_name": "test.tel4vn.com",
      "event_name": "hangup",
      "callback_url": "https://webhook.demo/",
      "callback_apikey": "foo"
    },
    ...
  ]
}
```

Trả về các call events của tenant.

### HTTP Request

`GET http://{{API_HOST}}/v1/event`

## Create Events

```shell
curl -L -X POST 'http://{{API_HOST}}/v1/event' \
-H 'Authorization: Bearer {{TOKEN}}' \
-H 'Content-Type: application/json' \
--data-raw '{
    "callback_url" : "https://webhook.demo/",
    "callback_apikey" : "foo",
    "event" : "create"
}'
```

> Response trả về:

```json
{
  "created": true
}
```

Tạo Event Hook, mỗi lần bắt được {event} tổng đài sẽ hook dữ liệu về {callback_url}.

### HTTP Request

`POST http://{{API_HOST}}/v1/event`

### Body

| Parameter       | Mô tả                                          |
| --------------- | ---------------------------------------------- |
| callback_url    | Domain Url mà tổng đài sẽ hook dữ liệu tới     |
| callback_apikey | ApiKey hoặc access token của domain (optional) |
| event           | SIP Call Event                                 |

### SIP Call Event

| Parameter | Mô tả                              |
| --------- | ---------------------------------- |
| hangup    | Sự kiện khi cuộc gọi bị ngắt, huỷ  |
| ringing   | Sự kiện khi cuộc gọi được khởi tạo |
| answered  | Sự kiện khi cuộc gọi được nhấc máy |
| cdr       | Sự kiện sau khi cdr được tạo xong  |

:::warning
- Nếu bạn tạo event nằm ngoài các event ở trên, hệ thống sẽ không nhận diện được nên sẽ không hook data về.
- Nếu bạn cần hook event ngoài các event ở trên, vui lòng gửi mail hỗ trợ.
:::
## Delete Event

```shell
curl -L -X DELETE 'http://{{API_HOST}}/v1/event/eeeeeeee-1111-2222-3333-eeeeeeee' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
  "deleted": true
}
```

API dùng để xoá một event_domain.

### HTTP Request

`DELETE http://{{API_HOST}}/v1/event/<ID>`

### URL Parameters

| Parameter | Mô tả        |
| --------- | ------------ |
| ID        | ID của event |

## Event Hook Data

> Response trả về:

```json
{
  "call_id": "avavavav-1111-2222-3333-eeeeeeee",
  "sip_call_id": "dddddddd-1111-2222-3333-eeeeeeee",
  "domain": "test.tel4vn.com",
  "direction": "outbound",
  "from_number": "0899888999",
  "to_number": "101",
  "hotline": "19001919",
  "state": "hangup",
  "duration": 10,
  "billsec": 5,
  "recording_url": "http://recording.demo/ad4c9b90-c071-405a-9723-980d2e5e1623"
}
```

### Mô tả

| Parameter     | Mô tả                                                               |
| ------------- | ------------------------------------------------------------------- |
| application   | Phương thức gọi. (bao gồm dial, click2call, autodialer và autocall) |
| call_id       | Id định danh cuộc gọi                                               |
| sip_call_id   | SIP Call Id                                                         |
| domain        | Domain nhận hoặc thực hiện cuộc gọi                                 |
| direction     | Hướng cuộc gọi (inbound / outbound)                                 |
| from_number   | Số gọi. Sẽ là số ext nếu cuộc gọi là outbound                       |
| to_number     | Số nhận. Sẽ là số ext nếu cuộc gọi là inbound                       |
| hotline       | Đầu số nhận hoặc thực hiện cuộc gọi                                 |
| state         | ringing / answered / hangup / cdr                                   |
| duration      | Tổng thời lượng cuộc gọi. (Riêng sự kiện hangup)                    |
| billsec       | Thời lượng tính từ khi hai bên kết nối. (Riêng sự kiện hangup)      |
| recording_url | URL public để play file ghi âm. (Riêng sự kiện cdr)                 |
| status        | Trạng thái cuộc gọi. (Riêng sự kiện cdr)                            |
| time_started  | Thời gian bắt đầu cuộc gọi                                          |
| time_answered | Thời gian khi cuộc gọi kết nối                                      |
| time_ended    | Thời gian kết thúc cuộc gọi                                         |

## Note\*

Một số thông tin cần lưu ý khi tích hợp event:

- Event ringing, answered, hangup là các event theo luồng của một cuộc gọi.
- Event cdr là event sẽ gửi tới webhook sau khi tổng đài cập nhật CDR.
- Đối với các case outbound: call_id của các event sẽ map giống nhau do tồn tại trên một cuộc gọi.
- ĐốI với các case inbound:
  - Trường hợp 1 mobile - 1 extension: call_id của các event sẽ map giống nhau do tồn tại trên một cuộc gọi.
  - Trường hợp 1 mobile - nhiều extension (Ringing, Queue, IVR): call_id của các event ringing, answered, hangup sẽ giống nhau. call_id của event cdr sẽ khác nhau. Do call_id của các event ringing, answered, hangup là call_id xử lý của cuộc gọi trên từng extension, call_id của event cdr là call_id của cả một luồng inbound (Ringing, Queue, IVR).