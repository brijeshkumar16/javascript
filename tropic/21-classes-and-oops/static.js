// Static

class User {
  constructor(username) {
    this.username = username;
  }

  print() {
    console.log(this.username);
  }

  static createId() {
    return `123`;
  }
}

const user1 = new User('Brijesh');

console.log(user1.createId());
