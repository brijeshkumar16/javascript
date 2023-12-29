// JavaScript Hoisting

// Hoisting is a JavaScript behavior where variable declarations and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in your code.

// Variable Hoisting

// Variable declarations are hoisted to the top of their containing function or global scope. However, only the declarations are hoisted, not the initializations.

console.log(myVar1); // undefined
var myVar1 = 42;
console.log(myVar1); // 42

// This code is actually interpreted like this by JavaScript:
// var myVar1;
// console.log(myVar1); // undefined
// myVar1 = 42;
// console.log(myVar1); // 42

// Function Hoisting

// Function declarations are also hoisted to the top of their containing function or global scope. This allows you to call functions before they are defined in the code.

sayHello1(); // "Hello, world!"

function sayHello1() {
  console.log('Hello, world!');
}

// This code is actually interpreted like this by JavaScript:
// function sayHello1() {
//   console.log("Hello, world!");
// }
// sayHello1(); // "Hello, world!"

// Hoisting Caveats

// 1. Variable declarations are hoisted, but not their initializations. If you access a variable before it's initialized, it will be undefined.

console.log(myVar2); // undefined
var myVar2 = 42;

// 2. Hoisting in block-scoped variables (let and const) is different from var. Block-scoped variables are hoisted to the top of their block but are not initialized. Trying to access them before declaration results in a ReferenceError.

console.log(myVar3); // ReferenceError: Cannot access 'myVar3' before initialization
let myVar3 = 42;

// 3. Function expressions are not hoisted like function declarations. They must be defined before they are used.

sayHi1(); // TypeError: sayHi1 is not a function
var sayHi1 = function () {
  console.log('Hi!');
};
