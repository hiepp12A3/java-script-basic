/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp vớ key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */


//  VÒNG LẶP FOR

// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

/**
    Bài tập trên F8:
    - Viết hàm getTotal trả về tổng giá trị các phần tử của mảng;
 */

function getTotal(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
console.log(getTotal([3, 5, 6]))