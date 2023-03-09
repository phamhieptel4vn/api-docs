---
sidebar_position: 1
slug: /
title: Overview
---

### Hướng dẫn tích hợp Pitel PBX APIs

## Xác thực

:::info My tip

Mỗi tài khoản sẽ có 1 API KEY. Dùng API KEY để lấy AccessToken.

Access Token sẽ có giá trị trong vòng 24h. Hết hạn thì tiến hành lấy lại.

Lấy API Key và xác thực.

[Authentication](auth)

:::

### Tích hợp WebSDK nghe và gọi trên phần mềm thứ 3

:::info My tip

Sau khi có được 3 thông số : domain, username, password ở Bước 2.

Tiến hành tích hợp websdk và điền 3 thông số trên vào WebSDK để nghe và gọi.

WebSDK: https://portal.tel4vn.com/docs

Chú ý : Develop trên localhost có thể không cần https, nhưng khi đưa lên production bắt buộc phải là https (vì chỉ https mới mở được micro, sound trên trình duyệt).

:::

## Nhận dữ liệu cuộc gọi

:::info My tip

Sau khi kết thúc cuộc gọi, có thể lấy data cuộc gọi thông qua 2 cơ chế

Webhook : Nhận data cuộc gọi chủ động, lưu bên thứ 3

[Event Hook](event)

API lịch sử : Nhận dữ liệu qua API của Pitel

[Call Detail Records](cdr)

:::