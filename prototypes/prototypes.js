// Prototypes in JavaScript

// Creating a Constructor Function
// Constructor functions can be used to create objects with shared properties and methods.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a Method to the Prototype
// You can add methods to the prototype of the constructor function.
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating Instances
// You can create instances of objects using the constructor function.
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1);

// Calling the Prototype Method
// Objects created from the constructor function share the same prototype method.
person1.sayHello(); // Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Hello, my name is Bob and I am 25 years old.
