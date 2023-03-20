---
title: Quick Setup
sidebar_position: 3
---

## Quick Setup - Thiết lập nhanh

### Bước 1: Truy cập vào thanh menu góc phải màn hình và nhấp chọn menu Campaign. Ở đây có kiểu thiết lập là Thiết lập nhanh và Thiết lập nâng cao.

![PITEL](./img/select_menu_camp.png)

### Bước 2: Chọn Thiết lập nhanh để tiến hành cấu hình một luồng tạo chiến dịch hoàn chỉnh và thuận tiện.
![PITEL](./img/select_menu_camp1.png)

### Bước 3: Sau khi ấn chọn Thiết lập nhanh, hệ thống sẽ chuyển tới bước S0 Lựa Chọn Chiến Dịch. Ấn Thêm Mới để tạo một chiến dịch.
![PITEL](./img/quicksetup_S0.png)

### Bước 4: Tiến hành điền tên chiến dịch mong muốn và chọn loại Autocall
![PITEL](./img/quick_setup_S1.png)

```jsx title="Giải thích thông số"
- Tên: tên chiến dịch
- Loại Autocall: bao gồm 3 loại là Cá nhân hoá, Voice OTP, Tập tin âm thanh cố định
- Cá nhân hoá: hỗ trợ dùng cả hai định dạng audio và Text To Speech (chuyển hoá phát thoại).
- Voice OTP: dùng cho phát các loại mật khẩu, mã xác nhận
- Tập tin âm thanh cố định: cho tạo template audio trên đây có thể cấu hình thời gian chờ mobile ấn phím, số lần lặp lại IVR.
- Mô tả: điền những thông tin lưu ý đến chiến dịch.
```
![PITEL](./img/quicksetup_addcampaign.png)

### Bước 5: Sau khi ấn Lưu chiến dịch được tạo thành, hệ thống sẽ ở bước S0 ấn chọn vào action chỉnh sửa chiến dịch để tiến hành các bước tiếp theo nhằm tạo hoàn tất một chiến dịch.
![PITEL](./img/select_campaign_quicksetup.png)

### Bước 6: Tiến hành cấu hình các thông số của chiến dịch bao gồm kịch bản gọi, ưu tiên gọi lại, số lần gọi lại…. Thiết lập các cấu hình phù hợp với nhu cầu sử dụng sau đó ấn Kế tiếp.
![PITEL](./img/quicksetup_s1.png)

```jsx title="Giải thích thông số"
- Chiến dịch: tên chiến dịch
- Hoạt động: bật/tắt hoạt động của chiến dịch
- Ưu tiên gọi lại: gồm hai loại ưu tiên cuộc gọi Normal, Recall
 + Normal: các cuộc gọi sẽ được ưu tiên theo thứ tự cuộc gọi trạng thái new đổ trước sau đó mới cho đổ các cuộc gọi được cấu hình gọi lại (recall).
 + Recall: các cuộc gọi sẽ ưu tiên cho các cuộc gọi được cấu hình gọi lại. Tuỳ vào thời gian thiết lập các cuộc gọi lại sẽ đổ ra và gọi ngay trong khi cuộc gọi mới đang đổ nếu chức năng Recall này được bật. 
- Trạng thái gọi lại: các trạng thái của một cuộc gọi, ấn chọn ở đây để gọi lại các cuộc gọi có trạng thái tương ứng:
 + Answered: Mobile nghe máy.
 + No Answered: mobile không nghe máy.
 + Busy: mobile từ chối cuộc gọi bằng cách chủ động ngắt máy hoặc chặn số trên thiết bị.
 + Not Available: mobile ở chế độ máy bay, không liên lạc được, thiết bị di động hư hỏng, hết pin.
 + Invalid Number: gọi ra tới nhà mạng nhưng nhà mạng báo sai số (số mobile sai).
 + Phone Block: số mobile khách hàng bị khóa.
 + Congestion: đầu số gọi auto call bị nhà mạng chặn, bị khóa.
 + Failed: template lỗi, script lỗi, script bị xoá, hết key zalo.
- Kịch bản gọi: có thể là một file audio được ghi âm sẵn hoặc một mẫu Text To Speech (chuyển đổi thoại). 
- Số lần gọi lại: số lần một thuê bao được gọi tới.
- Gọi lại khi thời gian đàm thoại nhỏ hơn: thời gian đàm thoại của những cuộc gọi nào thấp hơn thời gian quy định trong menu này thì đều được gọi lại.
- Lập lịch gọi lại: gồm 2 chế độ là Ngay lập tức và Sau bao nhiêu phút. Ở bao nhiêu phút có thể thiết lập số thời gian quy định để gọi lại. Ví dụ chỉnh là 5 phút thì 5 phút sẽ thực hiện gọi lại thuê bao đó 1 lần.
- Nhà mạng: đầu số được dùng để gọi ra
- Chế độ gọi: bao gồm 2 chế độ gọi là SIP Direct và SIM Song Song
 + SIP Direct: chế độ này cho phép gọi ra một cách trực tiếp cho tất cả các nhà mạng mà không phải chia kênh cho từng nhà mạng cụ thể. Trong khi chạy chế độ này cần quan tâm đến việc quy định số lượng cuộc gọi đồng thời đã đăng ký với nhà quản trị vì nếu điều chỉnh không đúng sẽ không đạt được kết quả như mong muốn. Chỉnh thấp hơn thì không tận dụng được tài nguyên có sẵn và cao hơn thì hệ thống không được thiết lập để đáp ứng sẽ ảnh hưởng đến quá trình sử dụng.
 + SIM Song Song: chế độ này gọi trực tiếp cho các nhà mạng thông qua việc phân chia kênh trên hệ thống. Khi gọi với chế độ này hệ thống sẽ tự động luân chuyển các kênh trống qua lại giữa các chiến dịch nhằm đảm bảo hiệu suất tối ưu và không gây lãng phí tài nguyên.
- Thời gian mobile nghe máy: thời gian đợi cho thuê bao nghe máy nếu quá thời gian này hệ thống sẽ tự động ngắt máy.
- Số cuộc gọi đồng thời: số lượng cuộc gọi đổ ra cùng một lúc.
- Lập lịch: thiết lập thời gian bắt đầu và kết thúc của một chiến dịch theo các ngày trong tuần.
```

### Bước 7: Di chuyển tới bước Danh Sách Khách Hàng, ở đây được dùng để upload dữ liệu các khách hàng cần được gọi tới. Ấn vào ô “Drag & Drop your files or Browse” để đưa dữ liệu vào sau đó ấn tải lên

![PITEL](./img/Lead_Upload_Select.png)

Sau khi ấn vào ô trên nhấn chọn vào file dữ liệu mong muốn để đưa dữ liệu vào hệ thống.
![PITEL](./img/Select_data_upload.png)

Tải lên thành công hệ thống sẽ hiển thị dữ liệu upload ngay trung tâm bước S2 và ấn Kế Tiếp để qua bước tiếp theo
![PITEL](./img/select_data_upload2.png)

### Bước 8: Ở S3 Kịch Bản Gọi được dùng để cấu hình kịch bản tuần tự các file âm thanh, Text To Speech (chuyển đổi thoại) sẽ phát nội dung như thế nào, thứ tự ra làm sao để khi thuê bao nhấc máy lên có thể nghe được những nội dung đã thiết lập. Điền đầy đủ các thông số cấu hình sau đó ấn Kế Tiếp.
![PITEL](./img/Script_QuickSetup1.png)