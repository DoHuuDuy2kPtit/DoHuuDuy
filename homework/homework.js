// 1. 
// - Có thể sử dụng typeof
// - 3 ví dụ về invalid name:
//  let 1value = 10; -> Lỗi vì tên biến bắt đầu bằng số 1;
//  let value 1 = 10; -> Lỗi vì chứa kí tự đặc biệt (dấu khoảng trắng);
//  let const = 10; -> Lỗi đặt tên biến trùng với keyword trong JS; 


// 2. Tính diện tích hình tròn với bán kính nhập vào từ bàn phím.

let radius = Number(prompt("Radius ???"));
const PI = 3.14;
let areaOfCircle = PI*radius*radius;

console.log("Area = "+ areaOfCircle.toFixed(1));

// 3. Đổi độ C sang độ F

let celsius = Number(prompt("Enter the temperature in celsius"));

let fahrenheit = (celsius*1.8) + 32;

let result = `${celsius} (C) = ${fahrenheit} (F)`

console.log(result);