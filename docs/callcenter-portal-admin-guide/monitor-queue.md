---
sidebar_position: 4
---

# Giám sát - Monitor Call Queue

## Bước 1: Chọn vào menu Dashboard

![PITEL](./img/dashboard_monitoragent.png)

## Bước 2: Chọn vào mục Call Queue 
![PITEL](./img/select-agent.png)

## Bước 3: Trong bảng Queue Monitor sẽ hiện trạng thái tất cả các cuộc gọi đến
![PITEL](./img/listen-agent.png)

``` jsx title="Các trạng thái khi cuộc gọi inbound vào Queue bao gồm các trạng thái:"
- Connecting: Agent đang nghe máy
- Not Connected: Không có agent nào nhấc máy hoặc agent cancel và phía mobile ngắt máy trước khi gặp Agent.
- Waiting: Cuộc gọi vào nhưng chưa agent nào nhấc máy, trạng thái này sẽ tồn tại đến khi cuộc gọi sẽ kết thúc hoặc chuyển sang trạng thái Connecting, Waiting.
Và các thông tin như thời gian vào hàng chờ (TIME), số điện thoại (PHONE NUMBER), STATUS và thời gian chờ (MM:SS)
```
