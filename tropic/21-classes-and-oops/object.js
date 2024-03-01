// Object

const user = function (name, age) {
  this.name = name;
  this.age = age;
};

user.prototype.printName = function () {
  return this.name;
};

user.prototype.printAge = function () {
  return this.age;
};

const userOne = new user('One', 20);
const userTwo = new user('Two', 25);

console.log(userOne.printName());
console.log(userOne.printAge());
console.log(userTwo.printName());
console.log(userTwo.printAge());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
