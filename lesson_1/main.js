/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */


//  Vòng lặp while loop

/**
    Bài tập trên F8:
  
 */

var myArray = [
    'js',
    'php'
]

var i = 0;
while (i < myArray.length) {
    console.log(myArray[i])
    i++;
}