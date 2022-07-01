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
    - Viết chg trình tỉnh tổng tiền đơn hàng
    - cho trước mảng orders là danh sách các khóa học (thể hiện dưới dạng Object)
        var orders = [
            {
                name: 'Khóa học HTML - CSS Pro',
                price: 3000000
            },
            {
                name: 'Khóa học Javascript Pro',
                price: 2500000
            },
            {
                name: 'Khóa học React Pro',
                price: 3200000
            }
        ]
    - Tạo hàm getTotal để tính tổng tiền
 */

var orders = [{
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(array) {
    var total = 0;
    var lengthAssay = array.length;
    for (var i = 0; i < lengthAssay; i++) {
        total += array[i].price;
    }
    return total;
}
// Expected results:
console.log(getTotal(orders)) // Output: 8700000