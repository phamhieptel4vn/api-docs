---
title: Dashboard
sidebar_position: 2
---

## Dashboard

Giao diện dashboard sẽ được hiển thị ngay sau khi log in account. Ở đây dashboard sẽ mô tả tổng quan web quản trị kèm các thông tin liên quan đến cuộc gọi, …

![PITEL](./img/dashboard.png)

```jsx title="Giải thích thông số"
- Đang diễn ra: Tổng số cuộc gọi đang diễn ra.
- Trực tuyến: Tổng số Nhân Viên đang trực tuyến
- Hàng chờ cuộc gọi: Số cuộc gọi trong hàng chờ bao gồm cả outbound trong chiến dịch Autodialer và inbound.
- Trạng thái cuộc gọi: được hiển thị dưới dạng bảng kèm số liệu (Table) và biểu đồ hình tròn (Chart).
- Thống kê: Mục này thống kê tổng số cuộc gọi (Call total), số cuộc gọi đã kết nối (Answered), chưa kết nối (Not connected), thời lượng (Duration), thời lượng trung bình (Average duration), thời lượng đàm thoại (Billsec) của các cuộc gọi trong ngày.
```