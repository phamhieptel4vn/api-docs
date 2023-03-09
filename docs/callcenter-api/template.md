---
title: Template
sidebar_position: 7
---

## Create Template TTS

```shell
curl --location 'https://{{API_HOST}}/v3/template' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "template_name": "thong_bao_no_cuoc_01",
    "voice_type": "tts",
    "enable_option": true,
    "voice_tts": "south-m-03",
    "speed_tts": 0.9,
    "content": "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}, vui lòng bấm phím 1 nếu bạn đã thanh toán",
    "exit_sound": {
        "enable": true,
        "voice_type": "tts",
        "content": "Cám ơn {{customer_name}} đã sử dụng"
    },
    "invalid_sound": {
        "enable": true,
        "voice_type": "tts",
        "content": "{{customer_name}} đã nhập sai"
    },
    "press_options": [
        {
            "press_num": "1",
            "toggled": false,
            "voice_type": "tts",
            "enable": true,
            "content": "Cám ơn {{customer_name}} đã thanh toán",
            "type": "tts",
            "extension": "5000"
        }
    ],
    "press_timeout": 3,
    "max_timeout": 1,
    "inter_digit_timeout": 2
}'
```

> Response trả về:

```json
{
    "created": "true",
    "template_uuid": "bdfa9ed1-d475-48f0-8247-5a1a09bbb7e6"
}
```
> Error Response trả về:
```json
{
    "error": "template is existed!"
}
```
```
Tạo kịch bản Text-To-Speech

### HTTP Request

`POST https://{{API_HOST}}/v3/template`

### Body

> Sample data:

```json
{
    "template_name": "thong_bao_no_cuoc_01",
    "voice_type": "tts",
    "enable_option": true,
    "voice_tts": "south-m-03",
    "speed_tts": 0.9,
    "content": "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}, vui lòng bấm phím 1 nếu bạn đã thanh toán",
    "audio_file": "",
    "exit_sound": {
        "enable": true,
        "voice_type": "tts",
        "content": "Cám ơn {{customer_name}} đã sử dụng",
        "audio_file": ""
    },
    "invalid_sound": {
        "enable": true,
        "voice_type": "tts",
        "content": "{{customer_name}} đã nhập sa",
        "audio_file": ""
    },
    "press_options": [
        {
            "press_num": "1",
            "toggled": false,
            "voice_type": "tts",
            "enable": true,
            "content": "Cám ơn {{customer_name}} đã thanh toán",
            "audio_file": "",
            "type": "tts",
            "extension": "5000"
        }
    ],
    "press_timeout": 3,
    "max_timeout": 1,
    "inter_digit_timeout": 2
}
```

| Parameter                | Description                                                 | Required |
| ------------------------ | ----------------------------------------------------------- | -------- |
| template_name            | Tên kịch bản muốn tạo. (Phải là duy nhất)                   | x        |
| voice_type               | Loại autocall : tts                                         |          |
| voice_tts                | Giọng đọc kịch bả                                           |          |
| speed_tts                | Tốc độ đọc kịch bản                                         |          |
| content                  | Nội dung của kịch bản phát khi mobile nghe máy              |          |
| enable_option            | Xử lý kịch bản kèm phím bấm                                 |          |
| press_options            | Danh sách các phím bấm cần xử lý                            |          |
| press_options.press_num  | Phím bấm cần xử lý                                          |          |
| press_options.voice_type | Loại autocall : tts                                         |          |
| press_options.content    | Nội dung của kịch bản khi mobile bấm phím                   |          |
| exit_sound               | Xử lý khi kết thúc kịch bản                                 |          |
| exit_sound.enable        | Bật xử lý khi kết thúc kịch bản                             |          |
| exit_sound.voice_type    | Loại autocall : tts, audio_file                             |          |
| exit_sound.content       | Nội dung của kịch bản phát trước khi kết thúc cuộc gọi      |          |
| invalid_sound            | Xử lý khi bấm sai phím trong kịch bản                       |          |
| invalid_sound.enable     | Bật xử lý khi bấm sai phím trong kịch bản                   |          |
| invalid_sound.voice_type | Loại autocall : tts                                         |          |
| invalid_sound.content    | Nội dung của kịch bản khi bấm sai phím trong kịch bản setup |          |
| key_field_1,2,3          | Các từ khoá trong kịch bản                                  |          |

key_field: tương ứng với đoạn text import vào campaign người dùng định nghĩa.

Ví dụ:
    key_field_1 là {{customer_name}}
    key_field_2 là {{due_amount}}
    key_field_3 là {{due_date}}

Đoạn content sẽ là : "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"

Tốc độ đọc tăng dần từ 0 đến 2. Với 1 là tốc độ đọc bình thường và 2 là tốc độ đọc nhanh nhất.

Các giọng đọc kịch bản đang hỗ trợ

| Id         | Description                     |
| ---------- | ------------------------------- |
| north-m-01 | Miền Bắc 1 - Giọng nam (Google) |
| north-f-01 | Miền Bắc 1 - Giọng nữ (Google)  |
| north-m-02 | Miền Bắc 2 - Giọng nam (Zalo)   |
| north-f-02 | Miền Bắc 2 - Giọng nữ  (Zalo)   |
| south-m-03 | Miền Nam 1 - Giọng nam (Zalo)   |
| south-f-03 | Miền Nam 1 - Giọng nữ  (Zalo)   |


## Create Template Audio File

```shell
curl --location 'https://{{API_HOST}}/v3/template' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "template_name": "temp_audio_03",
    "voice_type": "audio_file",
    "enable_option": true,
    "audio_file": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
    "exit_sound": {
        "enable": true,
        "voice_type": "audio_file",
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f"
    },
    "invalid_sound": {
        "enable": true,
        "voice_type": "audio_file",
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f"
    },
    "press_options": [
        {
            "press_num": "1",
            "toggled": false,
            "voice_type": "audio_file",
            "enable": true,
            "audio_file": "827a8471-df3e-470d-89f0-27f305b785ca",
            "extension": "5000"
        }
    ],
    "press_timeout": 3,
    "max_timeout": 1,
    "inter_digit_timeout": 5
}'
```

> Response trả về:

```json
{
    "created": "true",
    "template_uuid": "3febc391-e854-4002-b3ec-244143dd27f9"
}
```
> Error Response trả về:
```json
{
    "error": "template is existed!"
}
```
```
Tạo kịch bản Audio file

### HTTP Request

`POST https://{{API_HOST}}/v3/template`

### Body

> Sample data:

```json
{
    "template_name": "temp_audio_01",
    "voice_type": "audio_file",
    "enable_option": true,
    "audio_file": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
    "exit_sound": {
        "enable": true,
        "voice_type": "audio_file",
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f"
    },
    "invalid_sound": {
        "enable": true,
        "voice_type": "audio_file",
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f"
    },
    "press_options": [
        {
            "press_num": "1",
            "toggled": false,
            "voice_type": "audio_file",
            "enable": true,
            "audio_file": "827a8471-df3e-470d-89f0-27f305b785ca",
            "extension": "5000"
        }
    ],
    "press_timeout": 3,
    "max_timeout": 1,
    "inter_digit_timeout": 5
}
```

| Parameter                | Description                                              | Required |
| ------------------------ | -------------------------------------------------------- | -------- |
| template_name            | Tên kịch bản muốn tạo. (Phải là duy nhất)                | x        |
| voice_type               | Loại autocall : audio_file                               |          |
| audio_file               | File âm thanh phát khi mobile nghe máy                   |
| enable_option            | Xử lý kịch bản kèm phím bấm                              |          |
| press_options            | Danh sách các phím bấm cần xử lý                         |          |
| press_options.press_num  | Phím bấm cần xử lý                                       |          |
| press_options.voice_type | Loại autocall : audio_file                               |          |
| press_options.audio_file | File âm thanh phát khi mobile bấm phím                   |          |
| exit_sound               | Xử lý khi kết thúc kịch bản                              |          |
| exit_sound.enable        | Bật xử lý khi kết thúc kịch bản                          |          |
| exit_sound.voice_type    | Loại autocall : audio_file                               |          |
| exit_sound.audio_file    | File âm thanh phát trước khi kết thúc cuộc gọi           |          |
| invalid_sound            | Xử lý khi bấm sai phím trong kịch bản                    |          |
| invalid_sound.enable     | Bật xử lý khi bấm sai phím trong kịch bản                |          |
| invalid_sound.voice_type | Loại autocall : audio_file                               |          |
| invalid_sound.audio_file | File âm thanh phát khi bấm sai phím trong kịch bản setup |          |
| press_timeout            | Thời gian chờ bấm phím                                   |          |
| max_timeout              | Số lần lặp lại                                           |          |
| inter_digit_timeout      | Thời gian chờ bấm phím                                   |          |

## Create Template VoiceOTP

```shell
curl --location 'https://{{API_HOST}}/v3/template' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "template_name": "otp_script_01",
    "voice_type": "tts",
    "enable_option": false,
    "voice_tts": "south-f-03",
    "speed_tts": 0.9,
    "content": "Công ty ABC xin gửi đến bạn mã đăng nhập là {{code_otp}}. Xin nhắc lại mã đăng nhập của bạn là {{code_otp}}. Xin cảm ơn.",
    "press_timeout": 1,
    "max_timeout": 1,
    "inter_digit_timeout": 1
}'
```

> Response trả về:

```json
{
    "created": "true",
    "template_uuid": "62b59ac6-86c4-4930-9038-3efcec3bcf99"
}
```
> Error Response trả về:
```json
{
    "error": "template is existed!"
}
```
```
Tạo kịch bản VoiceOTP

### HTTP Request

`POST https://{{API_HOST}}/v3/template`

### Body

> Sample data:

```json
{
    "template_name": "otp_script_01",
    "voice_type": "tts",
    "enable_option": false,
    "voice_tts": "south-f-03",
    "speed_tts": 0.9,
    "content": "Công ty ABC xin gửi đến bạn mã đăng nhập là {{code_otp}}. Xin nhắc lại mã đăng nhập của bạn là {{code_otp}}. Xin cảm ơn.",
    "press_timeout": 1,
    "max_timeout": 1,
    "inter_digit_timeout": 1
}
```

| Parameter           | Description                                      | Required |
| ------------------- | ------------------------------------------------ | -------- |
| template_name       | Tên kịch bản muốn tạo. (Phải là duy nhất)        | x        |
| voice_type          | Loại autocall : tts                              |          |
| enable_option       | Xử lý kịch bản kèm phím bấm                      |          |
| voice_tts           | Loại giọng nói                                   |          |
| speed_tts           | Tốc độ đọc                                       |          |
| content             | Nội dung kịch bản                                |          |
| press_timeout       | Thời gian chờ bấm phím, OTP nên để mặc định là 1 |          |
| max_timeout         | Số lần lặp lại, OTP nên để mặc định là 1         |          |
| inter_digit_timeout | Thời gian chờ bấm phím, OTP nên để mặc định là 1 |          |


## Get Templates

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/template' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "data": [
        {
            "audio_file": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
            "description": "",
            "enable_option": true,
            "exit_sound": {
                "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
                "enable": true,
                "voice_type": "audio_file"
            },
            "inter_digit_timeout": 5,
            "invalid_sound": {
                "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
                "enable": true,
                "voice_type": "audio_file"
            },
            "max_timeout": 1,
            "press_options": [
                {
                    "1": {
                        "audio_file": "827a8471-df3e-470d-89f0-27f305b785ca",
                        "voice_type": "audio_file"
                    }
                }
            ],
            "press_timeout": 5,
            "speed_tts": 1,
            "template_name": "temp_audio_01",
            "template_uuid": "e94b30fb-8fcf-41a7-8e4b-8766483e069f",
            "voice_tts": "",
            "voice_type": "audio_file"
        },
        {
            "content": "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}, vui lòng bấm phím 1 nếu bạn đã thanh toán",
            "description": "",
            "enable_option": true,
            "exit_sound": {
                "content": "Cám ơn {{customer_name}} đã sử dụng",
                "enable": true,
                "voice_type": "tts"
            },
            "inter_digit_timeout": 2,
            "invalid_sound": {
                "content": "{{customer_name}} đã nhập sa",
                "enable": true,
                "voice_type": "tts"
            },
            "max_timeout": 1,
            "press_options": [
                {
                    "1": {
                        "content": "Cám ơn {{customer_name}} đã thanh toán",
                        "voice_type": "tts"
                    }
                }
            ],
            "press_timeout": 2,
            "speed_tts": 0.9,
            "template_name": "thong_bao_no_cuoc_01",
            "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",
            "voice_tts": "south-m-03",
            "voice_type": "tts"
        }
    ],
    "limit": 10,
    "offset": 0,
    "total": 2
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/template`

### Query Parameters

| Parameter     | Description                  | Example              |
| ------------- | ---------------------------- | -------------------- |
| template_name | Tên template sử dụng cần tìm | thong_bao_no_cuoc_01 |
| limit         | Số lượng record trả về       | 10                   |
| offset        | Vị trí bắt đầu khi query     | 0                    |

## Get Template By Id

```shell
curl -L -X GET 'https://{{API_HOST}}/v3/template/0dfd7a67-edf6-4ba8-9414-941b0b46fa5c' \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "content": "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}, vui lòng bấm phím 1 nếu bạn đã thanh toán",
    "description": "",
    "enable_option": true,
    "exit_sound": {
        "content": "Cám ơn {{customer_name}} đã sử dụng",
        "enable": true,
        "voice_type": "tts"
    },
    "inter_digit_timeout": 2,
    "invalid_sound": {
        "content": "{{customer_name}} đã nhập sa",
        "enable": true,
        "voice_type": "tts"
    },
    "max_timeout": 1,
    "press_options": [
        {
            "1": {
                "content": "Cám ơn {{customer_name}} đã thanh toán",
                "voice_type": "tts"
            }
        }
    ],
    "press_timeout": 2,
    "speed_tts": 0.9,
    "template_name": "thong_bao_no_cuoc_01",
    "template_uuid": "5f427552-857e-4939-8edf-cbd0f1ef6842",
    "voice_tts": "south-m-03",
    "voice_type": "tts"
}
```

### HTTP Request

`GET https://{{API_HOST}}/v3/template/{{template_uuid}}`

### Query Parameters

| Parameter     | Description   |
| ------------- | ------------- |
| template_uuid | UUID kịch bản |

## Update Template

```shell
curl --location --request PUT 'https://{{API_HOST}}/v3/template/e94b30fb-8fcf-41a7-8e4b-8766483e069f' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}' \
--data '{
    "audio_file": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
    "description": "",
    "enable_option": true,
    "exit_sound": {
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
        "enable": true,
        "voice_type": "audio_file"
    },
    "inter_digit_timeout": 5,
    "invalid_sound": {
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
        "enable": true,
        "voice_type": "audio_file"
    },
    "max_timeout": 1,
    "press_options": [
        {
            "press_num": "1",
            "toggled": true,
            "voice_type": "tts",
            "enable": true,
            "content": "Cám ơn đã bấm phím",
            "type": "tts",
            "extension": "5000"
        }
    ],
    "press_timeout": 5,
    "speed_tts": 1,
    "template_name": "temp_audio_01",
    "template_uuid": "e94b30fb-8fcf-41a7-8e4b-8766483e069f",
    "voice_tts": "south-f-03",
    "voice_type": "audio_file"
}'
```

> Response trả về:

```json
{
    "created": true,
    "template_uuid": "e94b30fb-8fcf-41a7-8e4b-8766483e069f",
    "updated": "true"
}
```
> Error Response trả về:
```json
{
    "error": [
        {
            "(root)": "template_name is required"
        }
    ]
}
```
```
Update kịch bản Autocall

### HTTP Request

`PUT https://{{API_HOST}}/v3/template/{{template_uuid}}`

### Body

> Sample data:

```json
{
    "audio_file": "54a00d51-7c3f-4c97-b578-a43966fbdf48",
    "description": "",
    "enable_option": true,
    "exit_sound": {
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
        "enable": true,
        "voice_type": "audio_file"
    },
    "inter_digit_timeout": 5,
    "invalid_sound": {
        "audio_file": "22643d66-e9dd-4821-a9d6-a7347de5d84f",
        "enable": true,
        "voice_type": "audio_file"
    },
    "max_timeout": 1,
    "press_options": [
        {
            "press_num": "1",
            "toggled": true,
            "voice_type": "tts",
            "enable": true,
            "content": "Cám ơn đã bấm phím",
            "audio_file": "827a8471-df3e-470d-89f0-27f305b785ca",
            "type": "tts"
        }
    ],
    "press_timeout": 5,
    "speed_tts": 1,
    "template_uuid": "e94b30fb-8fcf-41a7-8e4b-8766483e069f",
    "voice_tts": "south-f-03",
    "voice_type": "audio_file",
    "extension": 5000
}
```

| Parameter                | Description                                       |
| ------------------------ | ------------------------------------------------- |
| template_name            | Tên kịch bản muốn tạo. (Phải là duy nhất)         |
| voice_type               | Loại autocall : tts, audio_file                   |
| voice_tts                | Giọng đọc kịch bản (Đối với voice_type là tts)    |
| speed_tts                | Tốc độ đọc kịch bản (Đối với voice_type là tts)   |
| content                  | Nội dung của kịch bản (Đối với voice_type là tts) |
| audio_file               | File âm thanh (Đối với voice_type là audio_file)  |
| enable_option            | Xử lý kịch bản kèm phím bấm                       |
| press_options            | Danh sách các phím bấm cần xử lý                  |
| press_options.press_num  | Phím bấm cần xử lý                                |
| press_options.voice_type | Loại autocall : tts, audio_file                   |
| press_options.content    | Nội dung của kịch bản (Đối với voice_type là tts) |
| press_options.audio_file | File âm thanh (Đối với voice_type là audio_file)  |
| exit_sound               | Xử lý khi kết thúc kịch bản                       |
| exit_sound.enable        | Bật xử lý khi kết thúc kịch bản                   |
| exit_sound.voice_type    | Loại autocall : tts, audio_file                   |
| exit_sound.content       | Nội dung của kịch bản (Đối với voice_type là tts) |
| exit_sound.audio_file    | File âm thanh (Đối với voice_type là audio_file)  |
| invalid_sound            | Xử lý khi bấm sai phím trong kịch bản             |
| invalid_sound.enable     | Bật xử lý khi bấm sai phím trong kịch bản         |
| invalid_sound.voice_type | Loại autocall : tts, audio_file                   |
| invalid_sound.content    | Nội dung của kịch bản (Đối với voice_type là tts) |
| invalid_sound.audio_file | File âm thanh (Đối với voice_type là audio_file)  |
| key_field_1,2,3          | Các từ khoá trong kịch bản                        |

key_field: tương ứng với đoạn text import vào campaign người dùng định nghĩa.

Ví dụ:
    key_field_1 là {{customer_name}}
    key_field_2 là {{due_amount}}
    key_field_3 là {{due_date}}

Đoạn content sẽ là : "Chào bạn {{customer_name}} vui lòng thanh toán khoản nợ {{due_amount}} trước ngày {{due_date}}"

Tốc độ đọc tăng dần từ 0 đến 2. Với 1 là tốc độ đọc bình thường và 2 là tốc độ đọc nhanh nhất.

Các giọng đọc kịch bản đang hỗ trợ

| Id         | Description                     |
| ---------- | ------------------------------- |
| north-m-01 | Miền Bắc 1 - Giọng nam (Google) |
| north-f-01 | Miền Bắc 1 - Giọng nữ (Google)  |
| north-m-02 | Miền Bắc 2 - Giọng nam (Zalo)   |
| north-f-02 | Miền Bắc 2 - Giọng nữ  (Zalo)   |
| south-m-03 | Miền Nam 1 - Giọng nam (Zalo)   |
| south-f-03 | Miền Nam 1 - Giọng nữ  (Zalo)   |

## Delete Template

```shell
curl --location --request DELETE 'https://{{API_HOST}}/v3/template/e7c099d6-cac7-4d8a-b591-8f66a32db6e1' \
--header 'Content-type: application/json' \
--header 'Authorization: Bearer {{TOKEN}}'
```

> Response trả về:

```json
{
    "deleted": "true"
}
```
> Error Response trả về:
```json
{
    "error": "template not found"
}
```
### HTTP Request

`DELETE https://{{API_HOST}}/v3/template/{{template_uuid}}`
