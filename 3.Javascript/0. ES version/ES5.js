//! ARRAY
// map: Tạo một mảng mới với kết quả từ mỗi phần tử.,
// forEach: Thực hiện một hàm cho mỗi phần tử trong mảng.
// slice : Cắt mảng và tạo mảng mới
// pop: Xóa phần tử cuối cùng của mảng
// shift: xóa phần tử đầu tiên của mảng
// push: Thêm phần tử vào cuối mảng
// some: Kiểm tra xem có phần tử nào thỏa mã
// indexOf: Trả về vi tri của phần tử trong mảng

//TODO: splice
const fruits1 = ["apple", "banana", "orange"];
fruits1.splice(1, 1, "grape"); //xóa 1 phần tử từ vị trí 1 và thêm "grape"

//TODO: unshift thêm nhiều phần tử vào array
const fruits = ["banana", "orange"];
const newLength = fruits.unshift("apple", "mango"); // fruits = ['apple', 'mango', 'banana', 'orange']
console.log(newLength); // Kết quả: 4

//TODO: Reduce tính tổng các phần tử trong mảng
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);
function myFunction(total, value) {
  return total + value;
}

//TODO: Array every(): nếu 1 phần tử không thỏa điều kiện thì trả về false
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
function myFunction(value) {
  return value > 18;
}

//! Function method
const person = { fullName: "Alice", name: "Quang" };

//TODO: CALL - APPLY-----------------------
function greet() {
  console.log("Hello " + this.name);
}
greet.call(person); // "Hello Alice"

function greet(greeting) {
  console.log(greeting + " " + this.fullName);
}
greet.apply(person, ["Hi"]); // Kết quả: "Hi Alice"

//TODO: BIND---------------------------------
function greet2() {
  console.log("Hello " + this.name);
}
const greetAlice = greet2.bind(person);
greetAlice(); // "Hello Alice"

// Function.prototype
// Cho phép thêm phương thức tùy chỉnh cho tất cả các hàm.

// Function.length
// Trả về số lượng tham số mà một hàm yêu cầu.

//! JSON
// JSON.stringify(): Chuyển sang chuỗi JSON
// JSON.parse(): Chuyển sang object từ chuỗi JSON

//! Date
// toJSON() converts  Date object sang string, formatted JSON date.
// toISOString() method converts a Date object sang string, dùng ISO  format
// Date.now() trả về ngày hiện tại

//! get & set
// Create an object:
var person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  get lang() {
    return this.language;
  },
  set lang(value) {
    this.language = value;
  },
};
person.lang = "en";
