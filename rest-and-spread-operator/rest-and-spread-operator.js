// Rest & Spread Operators

// Rest Operator
// The rest operator is used to access an arbitrary number of parameters.

const sumNumbers = (...numbers) => {
  return numbers.reduce((acc, curr) => curr + acc, 0);
};

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7, 8));

// Spread Operator
// The spread operator is used to spread arrays and objects.

// With Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log('Merged Array:', arr2); // [1, 2, 3, 4, 5]

// With Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

console.log('Merged Object:', obj2); // { a: 1, b: 2, c: 3, d: 4 }

// Merge Arrays
const arr3 = [1, 2, 3];
const arr4 = [4, 5];
const mergedArray = [...arr3, ...arr4];

console.log('Merged Arrays:', mergedArray); // [1, 2, 3, 4, 5]
