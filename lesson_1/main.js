//  LÀM VIỆC VỚI CHUỖI

// Keyword: javascript string methods

var myString = 'Nguyen Thanh Th Hiep Th';

// 1. Length
console.log(myString.length);


// 2. Find index - tìm vị trí 1 ký tự nằm trong 1 chuỗi
// TRƯỜNG HƠP 1: tìm chữ Th nằm ở vị trí bao nhiêu
console.log(myString.indexOf('Th')); // vị trí số 7
// TRƯỜNG HƠP 2: nhập ký tự không có trong chuỗi sẽ trả về -1
console.log(myString.indexOf('abc')); // trả về -1 
// TRƯỜNG HƠP 3: tìm chữ Th thứ 2 trong chuỗi
// phải chuyền vào vị trí đứng sau chữ TH đầu tiên
// số 8 ở dưới là vị trí bắt đầu tìm chữ Th nếu ko có vẫn trả về -1
console.log(myString.indexOf('Th', 8)); // trả về 13
// TRƯỜNG HƠP 4: tìm chữ Th cuối cùng trong chuỗi
console.log(myString.lastIndexOf('Th')); // trả về 21
// PHƯƠNG THỨC SEARCH
// khác indexOf ở chỗ không hỗ trợ truyền tham số thứ 2 vào
console.log(myString.search('Th')); // trả về 7
console.log(myString.search('Th', 7)); // không hỗ trợ vẫn trả về 7


// 3. Cut string
var myString2 = 'Nguyen Thanh Hiep';
// slice(gồm vị trí bắt đầu, vị trí kết thúc)
console.log(myString2.slice(12, 17)); // trả về Hiep
// bỏ vị  trí kết thúc đi tự động lấy hết chuỗi
console.log(myString2.slice(12)); // trả về Hiep
//  truyền 0 trả về nguyên cả chuỗi
console.log(myString2.slice(0)); // Nguyen Thanh Hiep


// 4. Replace (ghi đè)
var myString3 = 'Nguyen Thanh Hiep Hiep';
// replace(chuỗi muốn thay thế, chuỗi thay thế)
console.log(myString3.replace('Hiep', 'Tung')); // Nguyen Thanh Tung Hiep
// Ví dụ sử dụng replaceAll
console.log(myString3.replaceAll('Hiep', 'Tung')); // Nguyen Thanh Tung Tung
//  ví dụ có nhiều chữ Hiep thì sử dụng biểu thức chính quy
console.log(myString3.replace(/Hiep/g, 'Tung')); //  Nguyen Thanh Tung Tung


// 5. Convert to upper case - chuyển đổi tất cả chuỗi thành chữ hoa
var myString4 = 'Nguyen Thanh Hiep';
console.log(myString4.toUpperCase()); //NGUYEN THANH HIEP


// 6. Convert to lower case - chuyển đổi tất cả chuỗi thành chữ thường
var myString4 = 'Nguyen Thanh Hiep';
console.log(myString4.toLowerCase()); //nguyen thanh hiep


// 7. Trim - Loại bỏ khoảng trắng thừa ở 2 đầu
var myString5 = '   Nguyen Thanh Hiep   ';
console.log(myString5.trim());


// 8. Split - cắt 1 chuỗi thành array (cần có 1 điểm chung để tách dc ra)
var myString6 = 'Javascript, PHP, Ruby';
//  sử dụng điểm chung là dấu phẩy, và dấu cách
console.log(myString6.split(', ')); //['Javascript', 'PHP', 'Ruby']
// bỏ dấu cách đi
console.log(myString6.split(',')); //['Javascript', ' PHP', ' Ruby']
//  TRƯỜNG HỢP tách cả chuỗi thành array (truyền vào 1 array)
var myString7 = 'Javascript';
console.log(myString7.split('')); // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
// => QUAN TRỌNG TÌM RA ĐIỂM CHUNG HỢP LÝ

// 9. Get a character by index - lấy 1 ký tự bởi index truyền vào
const myString8 = 'Hiep Nguyen';
console.log(myString8.charAt(1)); // trả về i
console.log(typeof myString8.charAt(15)); // nếu không có trả về kiểu dữ liệu là string (chuỗi rỗng)-  (thêm typeof để kiểm tra)
// cách 2:
console.log(myString8[1]); // trả về i
console.log(myString8[2]); // trả về e
// nếu không tồn tại trả về undefined
console.log(myString8[15]); // trả về undefined