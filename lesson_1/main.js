//  Số và làm việc với số

/*
    Kiểu số (Number) trong javascript

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? tại sao?
    - Kiểm tra data type

2. Làm việc với Number
    - To string
    - To Fiexd
*/

// 1. Tạo giá trị Number

// cách 1: dùng cách 1
var age = 18;
var PI = 3.14159;

// cách 2:
var number = new Number(5); //  không sử dụng cách này sẽ tạo 1 đối tượng mới

var result = 20 / 'ABC';

console.log(result); // NaN (đại diện kiểu số không hợp lệ)
// - cách kiểm tra dùng typeof cho number và isNaN() 
console.log(isNaN(result)); // True ; Hàm isNaN() kiểm tra NaN (hợp lệ là true ngược lại là false)

// 2. Làm việc với Number
// - To string : chuyển number về kiểu string
console.log(age.toString());
//  To Fiexd
// - với giá trị thập phân nhỏ hơn 5 thì làm tròn dưới ngược lại làm tròn trên
//  vdu 3.14 thì = 3; 3.5 = 4;
//  (không truyền gì vào toFixed() mặc định là sô 0 bên trong )
console.log(PI.toFixed()); //  3
//  vidu muốn lấy số sau số thập phân 
console.log(PI.toFixed(1)); //  3.1
console.log(PI.toFixed(3)); //  3.142