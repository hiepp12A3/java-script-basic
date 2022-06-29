// Object Constructor

// tạo Constructor dùng chung cho các đối tượng
var User = function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} & ${this.lastName}`;
    }
}

// tạo 2 đối tượng dùng constructer vừa tạo
var author = new User('Hiep', 'Thanh', 'dep trai sieu cap');
var user = new User('Son', 'Ngong', 'dep trai sieu cap');

// thêm thuộc tính cho hai đối tượng
author.title = 'Chia se dao tai F8';
user.comments = 'hi minh la Hiep dep trai';

// gọi constructer từ đối tượng
console.log(author.constructor);

console.log(author);
console.log(user);

// gọi phương thức getName
console.log(author.getName()); //  trả về Hiep & Thanh
console.log(user.getName()); //  trả về Son & Ngong