/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */


//  Break và COntinue trong vòng lặp
// Break là dừng vòng Lặp
// continue là tiếp tục bỏ qua đoạn code sau đó

/**
    Bài tập trên F8:
  
 */

for (var i = 0; i < 10; i++) {
    // in ra số lẻ
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
    // if (i == 5) {
    //     break;
    // }
}