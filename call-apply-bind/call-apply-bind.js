// Call, Apply, and Bind

// Call
// The `call` method allows you to call a function with a specified `this` value and arguments provided individually.

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

greet.call(person1, 'Hello'); // Hello, Alice!
greet.call(person2, 'Hi'); // Hi, Bob!

// Apply
// The `apply` method is similar to `call`, but it takes arguments as an array.

function introduce(age, occupation) {
  console.log(`I am ${this.name}, ${age} years old, and I work as a ${occupation}.`);
}

const person3 = { name: 'Charlie' };

introduce.apply(person3, [30, 'developer']); // I am Charlie, 30 years old, and I work as a developer.

// Bind
// The `bind` method creates a new function that, when called, has its `this` value set to a specific object.

function describe(place) {
  console.log(`${this.name} lives in ${place}.`);
}

const person4 = { name: 'Dave' };

const describePerson4 = describe.bind(person4);
describePerson4('New York'); // Dave lives in New York.
