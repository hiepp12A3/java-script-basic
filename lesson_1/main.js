/*
    Làm việc với Array

    1.	To string   : chuyển dlieu Array sang string
    2.	Join        : chuyển Array thành 1 chuỗi
    4.	Push        : thêm 1 hoặc nhiều p.tử vào cuối mảng 
    6.	Unshift     : thêm 1 hc nhiều p.tử vào đầu mảng
    5.	Shift       : xóa p.tử đầu mảng và trả về p.tử đó
    3.	Pop         : xóa ph.tử cuối mảng và trả lại ph.tử đó
    7.	Splicing    : xóa, cắt , chèn p.tử mới vào mảng
    8.	Concat      : nối Array
    9.	Slicing     :
*/

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];

//   1.	To string :
console.log(languages.toString()); //Javascript,PHP,Ruby  ; (dấu phẩy , là mặc định ngăn cách các phần tử của mảng)

// 2.	Join : có thể thêm ký tự để ngăn cách các phần tử 
console.log(languages.join()); // Javascript,PHP,Ruby
console.log(languages.join('')); // JavascriptPHPRuby
console.log(languages.join(' - ')); // Javascript - PHP - Ruby
console.log(languages.join(', ')); // Javascript - PHP - Ruby

// 3.	Pop :// xóa p.tử cuối mảng / và trả về ph.tử đã xóa
console.log(languages.pop()); // Ruby
console.log(languages) //  ['Javascript', 'PHP']
console.log(languages.pop()); // PHP  / ' gọi thêm lần nữa sẽ xóa thêm
console.log(languages) //  ['Javascript']
    // => đến khi xóa hết sẽ hiện  undefined (trả về mảng rỗng)

// 4.	Push
console.log(languages.push('Java', 'Dart')); //trả về 4  ; trả về đồ dài mới của mảng
console.log(languages) // ['Javascript', 'Java']

// 5.	Shift : xóa p.tử đầu mảng và trả về p.tử đã xóa
console.log(languages.shift()); // Javascript
console.log(languages); // ['PHP', 'Ruby']


// 6.	Unshift     : thêm 1 hc nhiều p.tử vào đầu mảng
console.log(languages.unshift('SQL', 'java2'));
console.log(languages)

// 7.Splicing : xóa, cắt , chèn p.tử mới vào mảng
// XÓA:   .splice(tham số 1 vị trí bắt đầu xóa, tham số 2 q.định sẽ xóa mấy p.tử)
console.log(languages.splice(1, 1)); //['PHP'] 
//  THÊM: .splice(tham số 1 vị trí bắt đầu xóa, 0 là không xóa p.tử nào, tham số  t3 là thêm )
console.log(languages.splice(1, 0, 'MySQL', 'SQL')); // 
console.log(languages); // ['Javascript', 'MySQL', 'Ruby']

//  8.	Concat:  nối Array
var languages2 = [
    'HTML - CSS',
    'JS'
];
console.log(languages.concat(languages2)); //['Javascript', 'MySQL', 'SQL', 'Ruby', 'HTML - CSS', 'JS']

// 9.	Slicing : cắt toàn bộ hoặc 1 vài p.tử của mảng
//slice(tham số 1 vị trí bắt đầu, vị trí ngừng việc cắt)
console.log(languages.slice(1, 2));