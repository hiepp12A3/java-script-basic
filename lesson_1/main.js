/**
 Mảng trong Javascript - Array

 1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào? tại sao?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
 */

//  1. Tạo mảng
// cách 1:
var languages = [
    'javascript', // phần tử của mảng
    'PHP',
    'Java',
    null,
    undefined,
    function() {},
    {},
    123
];
// cách 2: không khuyến cáo sử dụng
var languages2 = new Array(
    'javascript', // phần tử của mảng
    'PHP',
    'Java',
    null,
    undefined,
    function() {}, {},
    123
);
console.log(typeof languages);
console.log(typeof languages2);
// TRG HỢP ĐẶC BIỆT {} là obkect và [] là Array nên phải phân biệt
console.log(typeof {}); // object
console.log(typeof []); // object
// vì cả 2 đều trả về object nên sử dụng hàm Array.
console.log(Array.isArray({})); // true ; là 1 Array và ngược lại là false
// - Kiêm tra data type