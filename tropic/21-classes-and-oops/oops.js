// Object literal
const user = {
  userName: 'Brijesh',
  loginCount: 1,
  signedIn: true,
  getUserDetails: function () {
    console.log(this.loginCount);
  },
};

console.log(user.getUserDetails());

// Constructor Function
function User(userName, loginCount, signedIn) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.signedIn = signedIn;
  this.greeting = function () {
    console.log(`Welcome ${this.userName}`);
  };
  return this;
}

const userOne = new User('Brijesh', 1, true);
const userTwo = new User('Aayushi', 12, false);
console.log(userOne, userTwo);

// New keyword create new instance so that value is not going to overwrite.
