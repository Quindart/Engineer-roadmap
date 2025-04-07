let a; // khai báo biến dạng block scope
const b = 2; // khai báo biến không thay đổi giá trị

//TODO: Arrow function là 1 cách viết function ngắn gọn
const x = (x, y) => x * y;
//Đặc điểm:
//- Cần defind trước khi sử dụng
//- nên dùng const.biểu thức hàm luôn là một giá trị hằng số.

//TODO: Detrucuring: phân rã mảng hoặc object
const person = {
  firstName: "John",
  age: 10,
};
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Destructuring Assignment
let { firstName, age } = person;
let [fruit1, fruit2] = fruits;

//TODO: The Spread (...) Operator - toàn tử trải rộng
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3]; //=> gom 3 mảng lại 1 mảng

// TODO:  Rest Parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
let rest = sum(4, 9, 16, 25, 29, 100, 66, 77);

//TODO: for of loop
let language = "JavaScript";
let text = "";
for (let x of language) {
  text += x + " ";
}

//TODO: set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c"); // cặp key-value
console.log("🚀 ~ letters:", letters);

//TODO: JavaScript Classes
// Always add a method named constructor():
// class ClassName {
//     constructor() { ... }
//     method_1() { ... }
//     method_2() { ... }
//     method_3() { ... }
//   }
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);

//TODO: JavaScript Promises
// 3 trạng thái của Promise: Pending, Fulfilled, Rejected
const myPromise = new Promise(function (myResolve, myReject) {
  myResolve(); // when successful
  myReject(); // when error
});

//TODO: Symbol
// Symbol là một công cụ mạnh mẽ để tạo ra các thuộc tính duy nhất cho đối tượng,
// giúp tránh xung đột và cải thiện khả năng mở rộng của mã.
const mySymbol = Symbol("mySymbol");
const obj = {
  [mySymbol]: "value",
};
console.log(obj[mySymbol]); // 'value'

//TODO: default parameters
function myFunction(x, y = 10) {
  // y = 10 nếu không truyền giá trị
  return x + y;
}
myFunction(5); // will return 15

// TODO: Entries
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits2.entries();
[0, "Banana"][(1, "Orange")][(2, "Apple")][(3, "Mango")];
// nó sẽ trả về một đối tượng Iterator cho các cặp [index, value] của mảng
// Điều này có nghĩa là bạn có thể lặp qua các phần tử của mảng cùng với
// chỉ số của chúng.

//TODO: find() method trả về giá trị đầu tiên của mảng thỏa điều kiện
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//TODO: Number object:
EPSILON;
MIN_SAFE_INTEGER;
MAX_SAFE_INTEGER;
Number.isInteger(10); // returns true

//TODO: Math
Math.trunc(); // làm tròn lên 4.5 => 4
Math.sign(); // trả về số âm or dương or null
Math.cbrt(); // căn bậc 3 của x
Math.log2(); // logarit cơ số 2
Math.log10(); // logarit cơ số 10

//TODO: Modules
//Cach1: Import from named exports
import { name, age } from "./person.js";

//Cach2 Import from default exports
import message from "./message.js";
