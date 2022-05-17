/**
 Một số điều cần biết về function

 1. Khi function đặt trùng tên? : function định nghĩa sau sẽ ghi đề cái trước
 2. Khai báo biến trong hàm? : phạm vi sử dụng của biến trong function thôi
 3. Định nghĩa hàm trong hàm?
 */


//  TH1:
// function showMessage() {
//     console.log('Message 1');
// }

// function showMessage() {
//     console.log('Message 2');
// }
// showMessage(); 


// TH2:
// function showMessage() {
//     var fullName = 'Thanh Hiep';
//     console.log(fullName);
// }
// showMessage();


// TH3:
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}

showMessage();