# Linux Command Guide

## Các lệnh kiểm tra performance

- `cat /proc/cpuinfo` - hiển thị thông tin CPU.
- `cat /proc/meminfo` - hiển thị thông tin về RAM đang sử dụng.
- `cat /proc/version` - hiển thị phiên bản của kernel.
- `cat /proc/ioports` - xem thông tin I/O port.
- `cat /proc/interrupts` - xem thông tin interrupt.
- `cat /proc/dma` - xem thông tin về DMA.
- `cat /etc/redhat-release` - hiển thị phiên bản Centos.
- `uname` - hiển thị thông tin hệ thống (kernel, tên host, bộ xử lý, ...). Dùng `uname -a` để xem tất cả thông tin.
- `free` - xem thông tin bộ nhớ (đã sử dụng, còn trống). Dùng `free -m` để xem với KBs, `free -g` với GBs.
- `df` - xem thông tin dung lượng đĩa cứng, các thiết bị lưu trữ khác. Dùng `df -h` để hiển thị đơn vị dễ đọc.
- `du -sh` - xem dung lượng của thư mục hiện tại.
- `du -ah` - chi tiết dung lượng thư mục con và file.
- `top` - hiển thị các tiến trình và việc sử dụng tài nguyên.

## Các lệnh hệ thống

- `exit` - thoát khỏi cửa sổ dòng lệnh.
- `reboot / init 6 / shutdown -r` - khởi động lại hệ thống.
- `halt / shutdown -h now / init 0 / poweroff` - tắt máy.
- `hostname` - xem tên máy tính.
- `clear` - xóa trắng cửa sổ dòng lệnh.
- `date` - xem và đặt ngày giờ hệ thống (`date -s "27 SEP 2011 14:26:00"`).
- `yum update -y` - update Linux (CentOS).

## Lệnh thao tác với tập tin text

- `wc` - đếm số dòng, kí tự trong tập tin.
- `cat` - xem nội dung tập tin.
- `tail` - xem 10 dòng cuối (`tail -n N` để xem N dòng).
- `head` - xem 10 dòng đầu.
- `vi` - khởi động trình soạn thảo vi.
- `man` - xem hướng dẫn thực hiện các lệnh.

## Lệnh quản lí ứng dụng và tiến trình

- `rpm` - kiểm tra, cài đặt, gỡ bỏ gói `.rpm`.
- `ps` - kiểm tra tiến trình đang chạy.
- `kill` - dừng tiến trình.
- `pstree` - hiển thị tiến trình dưới dạng cây.
- `yum` - cài đặt các ứng dụng đóng gói.
- `wget` - tải ứng dụng từ website.
  
## Lệnh quản lý user

- `useradd` - tạo người dùng mới.
- `userdel` - xóa người dùng.
- `passwd` - đặt, thay đổi mật khẩu người dùng.
- `groups` - hiển thị nhóm của user hiện tại.
- `chmod` - thay đổi quyền cho file/thư mục.
- `chown` - thay đổi chủ sở hữu file/thư mục.
  
## Lệnh quản lý service

- `service --status-all` - kiểm tra tất cả các service.
- `service httpd start` - khởi động dịch vụ httpd.
- `service <tên_dịch_vụ> start | stop | restart` - quản lý service.

## Các lệnh quản lý file và thư mục

- `clear` - làm sạch cửa sổ dòng lệnh.
- `ls tenthumuc` - liệt kê nội dung thư mục.
- `rm tentaptin` - xóa tập tin.
- `cp taptinnguon taptindich` - sao chép tập tin.
- `mv tentaptincu tentaptinmoi` - đổi tên tập tin.

## Lệnh nén và giải nén

- `tar -cvf <tên-file-nén.tar> <file1 hoặc file2 ...>` - tạo file nén (.tar).
- `gzip <tên file>` - tạo file nén (.gz). Dùng `gzip -d` để giải nén.
- `unzip <file-nén.zip>` - giải nén file zip.

## Lệnh tra cứu các câu lệnh

- `<câu lệnh> --help` - xem trợ giúp và các tùy chỉnh của câu lệnh.
- `whatis <tên câu lệnh>` - hiển thị mô tả về câu lệnh.
- `man <tên câu lệnh>` - xem trang hướng dẫn cho câu lệnh.
- `ping <địa chỉ host>` - kiểm tra kết nối mạng đến server.

