---
title: Audio
sidebar_position: 2
---

## Upload Audio

```shell
curl --location 'https://{{API_HOST}}/v3/audio' \
--header 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryWs5jqbZFs4Dxlt6q' \
--header 'Authorization: Bearer {{TOKEN}}' \
--form 'audio_name="AudioExample.wav"' \
--form 'file=@"/C:/Users/phamh/Downloads/AudioExample.wav"'
```

> Response trả về:

```json
{
    "created": true,
    "id": "3d6ac065-3a08-4f8b-a78f-6b274a2c358b"
}
```

> Error Response trả về:

```json
{
    "error": "audio is existed"
}
```

API này dùng để upload file audio lên server.

### HTTP Request

`POST https://{{API_HOST}}/v3/audio`

### Body

> Sample data:

| Parameter | Description | Required |
| --------- | ----------- | -------- |
| file      | file audio  | x        |

## Get Audios

```shell
curl --location 'https://{{API_HOST}}/v3/audio' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "audio_uuid": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
            "audio_name": "File_Duyet.wav.wav",
            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",
            "created_at": "2023-03-06T17:54:36.035124+07:00"
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "audio_uuid": "827a8471-df3e-470d-89f0-27f305b785ca",
            "audio_name": "Phimbam.wav.wav",
            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",
            "created_at": "2023-03-06T17:55:41.37731+07:00"
        },
        {
            "domain_uuid": "b6b796aa-370f-4f57-8f44-5c82414c652b",
            "audio_uuid": "c0db40c5-9841-4fb4-bfdc-0ba179138ecf",
            "audio_name": "AudioExample.wav",
            "user_uuid": "1ad5f54c-130b-4af9-99b9-dd115249f064",
            "created_at": "2023-03-07T00:43:33.32359+07:00"
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 3
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/audio`

### Query Parameters

| Parameter  | Description              | Example                              |
| ---------- | ------------------------ | ------------------------------------ |
| audio_name | Tên file audio           | AudioExample.wav                     |
| audio_uuid | UUID của file audio      | c0db40c5-9841-4fb4-bfdc-0ba179138ecf |
| limit      | Số lượng record trả về   | 10                                   |
| offset     | Vị trí bắt đầu khi query | 0                                    |

## Delete Audio

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/audio/6d8e64d2-ae6a-455f-81a2-c203d65f6b0c' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "message": "delete audio success"
}
```
> Error Response trả về:
```json
{
    "error": "delete audio failed"
}
```
### HTTP Request

`DELETE https://{{API_HOST}}/v3/audio/{{audio_uuid}}`