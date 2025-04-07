//TODO: Methods for Defining JavaScript Objects

//TODO: Using an Object Literal 
//? Create an Object 1
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//? Create an Object 2
const person = new Object();
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//TODO: Using an Object Constructor
//! Không cần thiết lập  new Object(); vẫn tạo được object
//! this không có ý nghĩa. this chỉ có ý nghĩa khi sử dụng 
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

//TODO: Using Object.assign()
//TODO: Using Object.create()
//TODO: Using Object.fromEntries()