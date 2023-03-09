---
title: Statistic 
sidebar_position: 17
---

## Report Based On Users

Report dựa trên user.

```shell
curl --location 'https://{{API_HOST}}/v2/stats' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "answered": 1665,
            "busy": 2,
            "busy_line": 0,
            "cancel": 0,
            "congestion": 0,
            "inbound": 0,
            "invalid": 0,
            "ivr": 0,
            "local": 0,
            "no_answered": 1453,
            "not_available": 4,
            "outbound": 3124,
            "phone_block": 0,
            "time": "2023-03-08 00:00:00",
            "total": 3124,
            "total_billsec": 6733,
            "total_duration": 23574,
            "total_waitsec": 16841
        }
    ]
}
```

API này dùng  để lấy kết quả thống kê cuộc gọi dựa trên trạng thái cuộc gọi, hướng cuộc gọi,

### HTTP Request

`GET https://{{API_HOST}}/v3/report/call/user`

### Query Parameters

| Parameter  | Description                    | Example                   | Required |
| ---------- | ------------------------------ | ------------------------- | -------- |
| end_date   | Thống kê theo khoảng thời gian | 2023-03-07%2000%3A00%3A00 |          |
| start_date | Thống kê theo khoảng thời gian | 2023-03-07%2023%3A59%3A59 |          |
| interval   | Chu kỳ thống kê                | day,month,week,hour       |          |
