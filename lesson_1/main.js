/**
 *  MATH OBJECT
  
    - Math.PI
    - Math.round()
    - Math.abs()
    - Math.ceil()
    - Math.floor()
    - Math.random()
    - Math.min()
    - Math.max()
 */

// trả về số PI 3.141592653589793
console.log(Math.PI);

// làm tròn số
console.log(Math.round(1.3));

// Nhân về giá trị tuyệt đối 
// biến số âm thành số dương
console.log(Math.abs(4));

// chỉ làm tròn trên (phải lớn hơn 0) ví dụ 4.1 =5, 4.6 =5;
console.log(Math.ceil(5.1));

// làm tròn dưới (ngược với ceil())
console.log(Math.floor(4.9))

// trả về ngẫu nhiên nhỏ hơn 1
console.log(Math.random())
    // VD tạo số ngẫu nhiên 
console.log(Math.floor(Math.random() * 1000))
    // vd: tạo random ngẫu nhiên
var random = Math.floor(Math.random() * 4);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
];
console.log(bonus[random]);

// lấy ra số nhỏ nhất
console.log(Math.min(-100, 3, 4, 42, 324))

// lấy ra số lớn nhất
console.log(Math.max(-100, 3, 4, 42, 324))