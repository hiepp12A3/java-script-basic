// Object trong JavaScript

var MyInfo = {
    name: 'Hiep Nguyen',
    age: 18,
    address: 'Ha Noi, VN'
};

// THÊM
MyInfo.email = 'hiep@gmail.com'; // cách 1 
MyInfo['my-email'] = 'hiepthanh@gmail.com'; // cách 2: thêm ký tự đặc biệt

console.log(MyInfo); // lấy cả Object
console.log(MyInfo.name); // lấy từng p.tử
console.log(MyInfo['my-email']); // lấy riêng  p.tử có ký tự đặc biệt
console.log(MyInfo['job']); // k.có trả về undefined