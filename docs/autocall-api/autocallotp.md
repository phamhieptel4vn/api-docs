---
title: Autocall OTP
sidebar_position: 6
---

## Run OTP

```shell
curl --location 'https://{{API_HOST}}/v3/autocall/otp' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json' \
--data '{
    "campaign_uuid": "f77dfcf4-0759-4179-93cb-741f481a776e",
    "phone_number": "0332665711",
    "template": "otp_script_01",
    "code_otp": "LUAN001",
    "ref_id": "ABC123"
}'
```

> Response trả về:

```json
{
    "call_id": "d6142fb6-6b3a-48fb-bd21-30f83ccb28c9",
    "lead_uuid": "1fc20735-a93f-4b9e-b348-e63b503a1ee1",
    "message": "success",
    "ref_id": "ABC123"
}
```

API thực hiện cuộc gọi OTP

### HTTP Request

`POST https://{{API_HOST}}/v3/autocall/otp`

### Body

> Sample data:

```json
{
    "campaign_uuid": "f77dfcf4-0759-4179-93cb-741f481a776e",
    "phone_number": "0332665711",
    "template": "otp_script_01",
    "code_otp": "LUAN001",
    "ref_id": "ABC123"
}
```

| Parameter       | Description                                               | Required |
| --------------- | --------------------------------------------------------- | -------- |
| campaign_uuid   | UUID của campaign                                         | x        |
| phone_number    | Số điện thoại nhận cuộc gọi                               | x        |
| template_name   | Kịch bản đọc code OTP                                     | x        |
| code_otp        | Code OTP                                                  | x        |
| ref_id          | Mã tham chiếu của cuộc gọi (optional)                     |          |


## Get CDR by Ref ID

```shell
curl --location 'https://{{API_HOST}}/v3/autocall/log/ABC123/ref_id' \
--header 'Authorization: Bearer {{TOKEN}}' \
--header 'Content-Type: application/json'
```

> Response trả về:

```json
{
    "id": "d6142fb6-6b3a-48fb-bd21-30f83ccb28c9",
    "parent_id": "d6142fb6-6b3a-48fb-bd21-30f83ccb28c9",
    "sip_call_id": "f3c8f4e8-3737-123c-fc9b-fa163e71cc82",
    "cause": "NORMAL_CLEARING",
    "duration": 6,
    "direction": "outbound",
    "recording_url": "",
    "extension": "",
    "from_number": "02873003586",
    "to_number": "0332665711",
    "receive_dest": "",
    "time_started": "2023-03-07 10:06:53",
    "time_answered": "2023-03-07 10:06:58",
    "time_ended": "2023-03-07 10:06:59",
    "time_ringging": "2023-03-07 10:06:53",
    "status": "answered",
    "billsec": 1,
    "app": "autocall",
    "press_key": "{}",
    "fullname": "",
    "email": "",
    "username": "",
    "sip_hangup_disposition": "recv_bye",
    "campaign_uuid": "f77dfcf4-0759-4179-93cb-741f481a776e",
    "lead_uuid": "1fc20735-a93f-4b9e-b348-e63b503a1ee1",
    "rate": "",
    "digits": "",
    "note": "",
    "customer_fullname": "",
    "customer_email": "",
    "demand_customer": "",
    "interest_segment": "",
    "additional": {
        "campaign_uuid": "f77dfcf4-0759-4179-93cb-741f481a776e",
        "code_otp": "LUAN001",
        "phone_number": "0332665711",
        "ref_id": "ABC123",
        "template": "otp_script_01"
    },
    "autocall_presskey_epoch": "",
    "time_presskey": "",
    "presskey_delay": 0,
    "autocall_recording_url": ""
}
```

API thực hiện cuộc gọi OTP

### HTTP Request

`GET https://{{API_HOST}}/v3/autocall/log/{{ref_id}}/ref_id`

### Query Parameters

| Parameter | Description                                    |
| --------- | ---------------------------------------------- |
| ref_id    | Ref ID - Mã tham chiếu của cuộc gọi (optional) |