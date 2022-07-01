/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */


//  FOR / in lopp

/**
    Bài tập trên F8:
  
 */

var languages = [
    'js',
    'php',
    'ruby',
    'java'
];

var mystring = 'hiep dep trai';

for (var key in languages) {
    console.log(mystring[2]);
}

function run(object) {
    var arr = [];
    for (var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return arr;
}

// Expected results:
console.log(
    run({ name: 'Nguyen Van A', age: 16 }));

// var myInfo = {
//     name: 'Hiep dep trai',
//     age: 17,
//     address: 'Ha noi, VN'
// }

// for (var key in myInfo) {
//     // lấy ra biến từ key
//     console.log(myInfo);

//     // lấy ra giá trị của biến từ key
//     console.log(myInfo[key])
// }