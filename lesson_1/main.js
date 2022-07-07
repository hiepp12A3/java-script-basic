/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

// Thêm ví dụ về vòng lặp
/**
    Bài tập trên F8:
 */

// in ngược từ 100 về 0
for (var i = 100; i > 0; i--) {
    console.log(i)
}
console.log('hi');
// in mỗi lần tăng 5 đơn vị
for (var i = 0; i <= 100; i += 5) {
    console.log(i)
}
console.log('hi2');
for (var i = 100; i > 0; i -= 5) {
    console.log(i)
}