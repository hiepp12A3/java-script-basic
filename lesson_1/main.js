// Object trong JavaScript

var emailKey = 'email';

var myInfo = {
    name: 'Hiep Nguyen',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey]: 'hiepdeptrai@gmail.com',
    getName: function() {
        return this.name;
    }
};

// THÊm
myInfo.email = 'hiep@gmail.com'; // cách 1 
myInfo['my-email'] = 'hiepthanh@gmail.com'; // cách 2: thêm ký tự đặc biệt

// lấy cả Object
// console.log(myInfo);
// lấy từng p.tử
// console.log(myInfo.name);
// lấy riêng  p.tử có ký tự đặc biệt
// console.log(myInfo['my-email']);
// k.có trả về undefined
// console.log(myInfo['job']);

// XÓA
delete myInfo.age;
delete myInfo.address;
console.log(myInfo);

//  gọi function trong object
console.log(myInfo.getName());

// CÁCH GỌI
// Function --> Phương thức / method
// oTHERS --> Thuộc tính / Property