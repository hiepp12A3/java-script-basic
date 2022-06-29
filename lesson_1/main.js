/**
    Object Prototype

    1.Prototype là gì?
    2. Sử dụng khi nào?
    Thêm được phương thức và thuộc tính bên ngoài hàm tạo
    
 */


var User = function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} & ${this.lastName}`;
    }
}

// Thêm thuộc tính bên ngoài hàm tạo
User.prototype.className = 'F8';
// thêm phương thức bằng Prototype
User.prototype.getClassName = function() {
    return this.className;
}

var author = new User('Hiep', 'Thanh', 'dep trai sieu cap');
var user = new User('Son', 'Ngong', 'dep trai sieu cap');

console.log(author);
console.log(user);

//  gọi thuộc tính tạo bằng prototype
console.log(author.className);
console.log(user.getClassName());