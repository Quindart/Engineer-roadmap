//! ------ ES 2017 ---------------
//TODO: padStart(): thêm vào đầu string and padEnd(): thêm vào cuối string
let text = "5";
text = text.padStart(4, 0);
//return 00005

//TODO:
Object.values(); // convert 1 obj sang arr value,

Object.keys(); // convert 1 obj sang arr key,

Object.entries(); // convert 1 obj sang arr key-value,
const obj = { name: "Alice", age: 25, job: "Developer" };
const entries = Object.entries(obj);
console.log(entries); // Kết quả: [['name', 'Alice'], ['age', 25], ['job', 'Developer']]

//! ------ ES 2018 ---------------
//TODO: JavaScript Threads
//* worker.js
self.onmessage = function (event) {
  const result = event.data * 2;
  self.postMessage(result);
};

//* main.js
const worker = new Worker("worker.js");
worker.onmessage = function (event) {
  console.log("Received from worker:", event.data);
};

// TODO: Shared Memory và SharedArrayBuffer
// giúp các worker chia sẻ dữ liệu mà không cần sao chép,
// tối ưu hóa hiệu suất của ứng dụng.

//TODO: finaly promise
let myPromise = new Promise();
myPromise.then();
myPromise.catch();
myPromise.finally(); // finaly không quan tâm thành công hay thất bại

//TODO Rest Object: Điều này cho phép hủy một obj và thu thập phần còn lại vào new obj
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
