/**
 *  ĐỐI TƯỢNG DATE
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */



var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(`${day}/${month}/${year}`)

console.log(date)
console.log(day)
console.log(year)
console.log(month)
console.log(hours)
console.log(minutes)
console.log(seconds)