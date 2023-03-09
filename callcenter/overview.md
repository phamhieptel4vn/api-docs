---
sidebar_position: 0
slug: /
title: Overview
---

### Hướng dẫn tích hợp Pitel Call Center APIs

Xin chào! Đây là bộ API tích hợp tổng đài VoIP - CallCenter vào các hệ thống CRM, WebApp. Nếu bạn cần thông tin để tích hợp hoặc cần hỗ trợ vui lòng liên hệ mail: support@tel4vn.com. Các thông tin như {{API_HOST}}, {{API_KEY}}, tài khoản admin, tài khoản SIP test sẽ được bên phía Tổng đài cung cấp.

## Xác thực

:::info My tip

Mỗi tài khoản sẽ có 1 API KEY. Dùng API KEY để lấy AccessToken.

Access Token sẽ có giá trị trong vòng 24h. Hết hạn thì tiến hành lấy lại.

Lấy API Key và xác thực.

[Authentication](/callcenter-api/auth)

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

[Event Hook](/callcenter-api/event)

API lịch sử : Nhận dữ liệu qua API của Pitel

[Call Detail Records](/callcenter-api/cdr)

:::