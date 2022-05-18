/**
    Các loại function

    1. Declaration function - Chức năng khai báo
    2. Expression function  - Chức năng biểu đạt
    3. Arrow function       - 
 */

showMessage(); // có thể gọi function trước khi được định nghĩa

//Declaration function : phải đặt tên cho function
function showMessage() {
    console.log('Declaration funtion');
}


// showMessage2(); // sẽ báo lỗi

//Expression function : gán cho 1 biến, có thể đặt tên hc không đặt tên
var showMessage2 = function() {
    console.log('Expression funtion');
}

showMessage2(); // Expression chỉ có thể gọi được sau khi được định nghĩa

//Expression function
setTimeout(function autoLogin() {

});
//Expression function
var myObject = {
    myFunction: function() {

    }
}