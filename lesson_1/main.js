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
    - Tạo hàm getRandNumbers , có 3 tham só min, max, length.
    - Hàm trả về số 1 mảng gồm length phần tử.
    - Các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng min tới max.
    Gợi ý: cách taoh số 1 số ngẫu nhiên trong khoảng min, max
    Math.random() * (max - min) + min
    M

 */

const getRandNumbers = (min, max, length) => {
    const array = []
    min = 5;
    max = 16;
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return array
}
console.log(getRandNumbers(1, 9, 5))