//  Khái niệm hàm (funtion)
// Tham số trong hàm - Javascript cơ bản

/**
 1. Tham số 
    - Định nghĩa : là 1 giá trị truyền vào khi gọi tới 1 function
    - Kiểu dữ liệu? : 
    - Tính private?
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số 
    - 1 tham số
    - Nhiều tham số
    
3. Arguments 
    - Đối tượng arguments?
    - Giới thiệu vòng for
 */

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString);
}

writeLog('LOG 1', 'LOG 2', 'LOG 3', 3, 4, 5);