function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const name = new createUser('Brijeshkumar Yadav', 'by9714322072@gmail.com', '123');
console.log(name);
