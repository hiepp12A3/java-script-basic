/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */


//  Vòng lặp do/do while

/**
    Bài tập trên F8:
  
 */


var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);
    // Thanh cong
    if (false) {
        isSuccess = true;
    }
} while (!isSuccess && i <= 3);