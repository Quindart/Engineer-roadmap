//?GET
//*     curl http://example.com

//?POST
//*     curl -X POST http://example.com/api -d "param1=value1&param2=value2"

//?POST với JSON
//*     curl -X POST http://example.com/api -H "Content-Type: application/json" -d '{"key1":"value1","key2":"value2"}'

//?Header tùy chỉnh
//*     curl -H "Authorization: Bearer YOUR_TOKEN" http://example.com/api

//?Lưu kết quả vào file
//*     curl -o output.txt http://example.com

//?Hiện thị thông tin chi tiết
//*     curl -v http://example.com

//?Theo dõi chuyển hướng
//*     curl -L http://example.com

//?PUT
//*     curl -X PUT http://example.com/api -d "param1=value1"

//?DELETE
//*     curl -X DELETE http://example.com/api/1

//?Gửi tệp tin
//*     curl -X POST -F "file=@/path/to/file.txt" http://example.com/upload

//?Kiểm tra SSL
//*     curl -v --insecure https://example.com

//?Cookie
//*     curl -b "name=value" http://example.com

//?Gửi và nhận cookie
//*     curl -c cookies.txt http://example.com

//?User agent tùy chỉnh
//*     curl -A "Mozilla/5.0" http://example.com

//?Proxy
//*     curl -x http://proxy.example.com:8080 http://example.com

//?Basic authentication
//*     curl -u username:password http://example.com/api
