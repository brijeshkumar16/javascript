// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

const age = 12; // number
const userName = 'Brijeshkumar Yadav'; //string
const isUser = false; //boolean
const empty = null; //null type is object
let value; //undefined
const sym = Symbol('123'); //Symbol
const big = 12341421341234234n; //BigInt

const arr = [1, 2, 3]; // array
const object = { name: 'Brijeshkumar', age: 12 }; //object
const fun = () => {}; // function

// use typeof to check the data type

console.log(typeof sym);

// Stack is use with primitive data type
// Heap is use with non-primitive data type
