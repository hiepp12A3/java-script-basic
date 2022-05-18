/*
    CHUỖI TRONG JAVASCRIPT

    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên dùng cách nào? Lý do?
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code
    5. Template string ES6
 */

// 1 TẠO CHUỖI
// - 2 cách để tạo chuỗi
// C1: nên dùng cách số 1
var fullName = 'cách 1 tạo chuỗi';
// C2: từ khóa new sẽ khởi tạo 1 đối  tượng
var fullName2 = new String('cách 2 tạo chuỗi dùng từ khóa new');
console.log(typeof fullName2); // khi mở Console kiểu dữ liệu là object

// 2. MỘT SỐ CASE SỬ DỤNG backslash (\)
// backslash là sử dụng để viết dấu ngoặc kép "" hc ngoặc đơn '' trong 1 chuỗi
// trg hợp 1: sử dụng dấu ngoặc đơn '' (thêm dấu \ trước dấu đơn js sẽ hiểu là dấu ')
// dấu ngoặc kép cũng tương tự như vậy
var fullName3 = 'sử dụng \'backslash\'';
console.log(fullName3);
// trg hợp 2: viết dấu \ (thêm 1 dấu \ vào trước dấu \)
var fullName3 = 'sử dụng \\backslash\\';
console.log(fullName3);

// 3. XEM ĐỘ DÀI CHUỖI
var fullName4 = 'Xem độ dài chuỗi';
console.log(fullName4.length); // in ra 16 ký tự gồm cả dấu cách

// 4. Chú ý độ dài khi viết code
// thường ở trong js thường để 80 ký tự/dòng nếu dài hơn nên xuống dòng
var fullName5 = 'thường ở trong js' +
    'thường để 80 ký tự/dòng nếu' +
    'dài hơn nên xuống dòng';
console.log(fullName5.length);


//  5. Template string ES6
var firstName = 'Hiep';
var lastName = 'Nguyen';
// giá trị đưa vào phải và string
console.log(`Toi la ${firstName} ${lastName}`);