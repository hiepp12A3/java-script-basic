/**
 * Đệ quy
 */

// Bài tập
/**
     xóa các phẩn tử trùng lặp trong mảng
     không dùng các hàm có sẵn trong JS
    input: arr = ['a', 'b', 'c', 'a', 'a', 'c']
    output: arr = ['a', 'b', 'c', 'd']

 */
// // cách 1 sử dụng Set
// var array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log([...(new Set(array))]);



// 1. xác định điểm dừng
// 2. logic handle => Tạo ra điểm dừng

function countDown(num) {
    if (num > 0) {
        console.log(num)
        return countDown(num - 1);
    }
    return num;
}
countDown(3);

console.log("////");

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['js', 'php', 'java'];

loop(0, array.length, function(index) {
    console.log('index: ', index);
    console.log(array[index]);
})


console.log("////");

// Giai thừa

// 3*2*1=
// 6*5*...*1 =
function giaiThua(num) {
    // var output = 1;
    // for (var i = num; i > 0; i--) {
    //     output = output * i;
    // }
    // return output;

    // giải bằng đệ quy
    if (num > 0) {
        return num * giaiThua(num - 1);
    }
    return 1;
}

console.log(giaiThua(3));