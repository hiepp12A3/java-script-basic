/**
    Vòng lặp - Loop

    1. for - Lặp với điều kiện đúng
    2. for/in - lặp với key của đối tượng
    3. for/or - lặp qua value của đối tượng
    4. while - Lặp khi điều kiện đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */

// Vòng lặp lồng nhau (Nested loop)
/**
    Bài tập trên F8:
  
 */
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}