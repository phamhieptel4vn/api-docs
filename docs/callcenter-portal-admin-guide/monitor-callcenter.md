---
sidebar_position: 5
---
# Giám sát - Monitor Call Center

## Bước 1: Chon vào menu Giám sát - Monitor, sau đó chọn vào menu Call Center

![PITEL](./img/select-callcenter.png)

## Bước 2: Tích chọn biểu đồ cần hiển thị 
![PITEL](./img/select-chart-callcenter.png)


![PITEL](./img/select-chart-callcenter2.png)

## Bước 3: Chọn thời gian cần giám sát, sau đó chọn Apply
![PITEL](./img/select-time-callcenter.png)

## Bước 4: Chọn đơn vị thời gian cần filter
![PITEL](./img/select-unit-callcenter.png)

:::note
Giải thích: nếu chọn giá trị filter là giờ thì hệ thống sẽ hiển thị thống kê theo giờ. Nếu chọn giá trị filter là ngày thì hệ thống hiển thị thống kê theo từng ngày ngày.
:::

## Bước 5: Nhấn vào nút Refresh để làm mới dữ liệu ngay
![PITEL](./img/click-refresh.png)

## Bước 6: Tùy chỉnh thời gian hệ thống tự làm mới dữ liệu
Chọn thời gian mong muốn
![PITEL](./img/time-refresh-callcenter.png)

## Bước 7: Các thống kê sẽ được hiển thị với 2 tùy chọn Biểu đồ và Bảng
![PITEL](./img/monitor-agent-callcenter.png)
:::info
Monitor Agent Realtime
:::

![PITEL](./img/call-of-time.png)
:::info
Report Call Of Time
:::

![PITEL](./img/report-summary-callcenter.png)
:::info
Report Summary CallCenter
:::

![PITEL](./img/inbound-outbound-callcenter.png)
:::info
Detail Inbound & Outbound
:::

![PITEL](./img/callstatus-statistics-presskey.png)
:::info
Report Call Status, Statistics & Press Key
:::

## Các chức năng thống kê, giám sát Call Center

### a. Giám sát agents - Agent Monitor

   Trong menu Agent Monitor, sẽ bao gồm các thông tin: Agent (tên Agent), Extension (Máy nhánh Agent sử dụng), Campaign (Chiến dịch Agent login), Status (trạng thái của Agent), MM:SS (thời gian Agent đang nhập trong Campaign, sẽ được làm mới khi agent logout/login), Wait (thời gian chờ cuộc gọi), Login (tổng thời gian Login của Agent), Action Remote Logout Agent (kích agent logout từ xa), Action Remote Pause/Resume Agent (chuyển trạng thái agent từ xa)

![PITEL](./img/monitor-agent1.png)

#### a.1. Remote Logout Agent
Để thực hiện action Remote Logout Agent, click vào biểu tượng logout tại Agent muốn kích. Sau khi click chuột hệ thống sẽ tiến hành kích Agent ra khỏi campaign.

![PITEL](./img/select-kick-agent.png)

Phía Agent sẽ hiện thông báo bị logout và tự logout khỏi campaign

![PITEL](./img/agent-logout-campaign.png)

#### a.2. Remote Pause/Resume Agent 
Để thực hiện action Remote Pause/Resume Agent, click vào biểu tượng chuyển trạng thái tại Agent muốn kích. Sau đó chọn vào Yes trong popup hiện lên để chuyển trạng thái Agent
![PITEL](./img/pause-agent-callcenter.png)
:::note
Pause Agent 
:::


![PITEL](./img/resume-agent-remote.png)
:::note
Resume Agent 
:::
### b. Thống kê tổng hợp - Report Summary
Bao gồm các thông tin: Tổng SL IB (Tổng SL Inbound), IB Connected (Inbound Connected), Tỉ trọng (tỉ lệ connect), Busy Line (cuộc gọi nhỡ), Tỉ trọng (cuộc gọi nhỡ), OB (Outbound), OB Answered, Total trong ngày đã chọn

Để thực hiện thống kê tổng hợp theo thời gian, thao tác như sau:

#### b.1. Chọn nhóm cần tổng hợp
![PITEL](./img/select-group-agent-callcenter.png)
#### b.2. Nhấn vào nút Refresh để làm mới dữ liệu ngay hoặc sau thời gian tùy chỉnh
![PITEL](./img/refresh-data-callcenter.png)
#### b.3. Dữ liệu thống kê sẽ được cập nhật
![PITEL](./img/report-summary-new.png)

### c. Cuộc gọi theo thời gian - Call by time
Thống kê cuộc gọi Inbound và Outbound theo thời gian. Có 2 dạng hiển thị thống kê:
#### c.1. Thống kê dạng Chart (Biểu Đồ)
![PITEL](./img/call-by-time-chart.png)
#### c.2. Thống kê dạng Table (Bảng)
![PITEL](./img/call-by-time-table.png)

### d. Chi tiết cuộc gọi vào - Inbound detail
Thống kê chi tiết theo từng trạng thái của cuộc gọi Inbound theo thời gian trong một khoảng thời gian, bao gồm: Total (tổng SL), Kết nối Agent, IVR, Busy Line, KH ngắt máy
Thống kê chi tiết cuộc gọi Inbound theo thời gian có 2 dạng hiển thị thống kê:
#### d.1. Thống kê dạng Chart (Biểu Đồ)
![PITEL](./img/detail-inbound-chart.png)
#### d.2. Thống kê dạng Table (Bảng)
![PITEL](./img/detail-inbound-table.png)

### e. Chi tiết cuộc gọi ra - Outbound detail
Thống kê chi tiết theo từng trạng thái của cuộc gọi Outbound theo thời gian trong một khoảng thời gian, bao gồm: Total (tổng SL), Kết nối Agent (Kết nối), Bận, Không nghe máy, Không liên lạc được và Lỗi
Thống kê chi tiết cuộc gọi Outbound theo thời gian có 2 dạng hiển thị thống kê:
#### e.1. Thống kê dạng Chart (Biểu Đồ)
![PITEL](./img/detail-outbound-chart.png)
#### e.2. Thống kê dạng Table (Bảng)
![PITEL](./img/detail-outbound-table.png)

### f. Trạng thái cuộc gọi - Call Status
- Thống kê số lượng các trạng thái cuộc gọi trong một khoảng thời gian. 
- Bao gồm cuộc gọi Inbound (Tổng SL, Kết nối Agent, IVR, Busy Line) và Outbound (Tổng SL, Kết nối, Bận, Không nghe máy, Không liên lạc được, Lỗi)
- Thống kê trạng thái cuộc gọi có 2 dạng hiển thị thống kê:
#### f.1. Thống kê dạng Chart (Biểu Đồ)
![PITEL](./img/call-status-chart.png)
#### f.2. Thống kê dạng Table (Bảng)
![PITEL](./img/call-status-table.png)

### g. Thống kê phím bấm - Key press statistics
- Thống kê trạng thái bấm phím tại IVR trong một khoản thời gian, bao gồm: Phím 1, Phím 2, Phím 3, Phím 4, Phím 5, Phím 6, Phím 7, Phím 8, Phím 9, Phím 0, ... và Không nhấn phím. Trong các dữ liệu trên, nếu thống kê nào không có dữ liệu sẽ không hiển thị vào thống kê
- Thống kê trạng thái bấm phím có 2 dạng hiển thị thống kê:
#### g.1. Thống kê dạng Chart (Biểu Đồ)
![PITEL](./img/key-press-chart.png)
#### g.2. Thống kê dạng Table (Bảng)
![PITEL](./img/key-press-table.png)