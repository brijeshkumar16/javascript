// Inheritance
// Inheritance mean child will inherit the parent value

class User {
  constructor(username) {
    this.username = username;
  }

  print() {
    console.log(this.username);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // will use the User keywords
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course added by ${this.username}`);
  }
}

const teacher1 = new Teacher('Brijeshkumar', 'abc@gmail.com', '123');

teacher1.print();
