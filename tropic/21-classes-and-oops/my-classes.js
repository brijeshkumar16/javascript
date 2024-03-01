// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
}

const user = new User('Brijesh', 'abc@gmail.com', '123');

console.log(user.encryptPassword());
