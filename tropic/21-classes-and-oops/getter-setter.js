class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  get username() {
    return this._username.toLowerCase();
  }

  set username(value) {
    this._username = value;
  }
}

const user1 = new User('Brijeshkumar Yadav', '123');

console.log(user1.username);
