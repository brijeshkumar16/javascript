const arr = [1, 2, 3, 4, 5, 6];

// 👍 access the value from index
// console.log(arr[0]);

// 👍 push method
// push method is used adding a record from last
// arr.push(7);

// 👍 pop method
// pop method is used for remove the record form last
// arr.pop();

// 👍 unshift method
// unshift method is used for adding a record from start
// arr.unshift(0);

// 👍 shift method
// shift method is used for remove a record from start
// arr.shift();

// 👍 includes
// includes method is used to check the value is present or not
// console.log(arr.includes(2));

// 👍 slice
// slice methods is used to slice the specific data from given start and end index
// slice method does not change the original array
// console.log(arr.slice(0, 4));

// 👍 splice methods is used to slice the specific data from given start and end index
// splice methods remove the data splice data from original array
// console.log(arr.splice(0, 4));

// 👍 spread method
//  spread operator for merge two array
// const arr2 = [10, 11, 12, 13];
// console.log([...arr, ...arr2]);

// 👍 flat method
// flat methods is used to remove the nest array and use Infinity for n level
// const flatMap = [1, 3, [12], [1, 2, 4]];
// console.log(flatMap.flat(Infinity));

// 👍 isArray method
// isArray method is used to check weather the value is array or not
// console.log(Array.isArray(arr));

// 👍 array de-structure
// const [first, second] = arr;
// console.log(first, second);

// console.log(arr);

// 👍 for of (loop will work with map and array)
// for (const item of arr) {
//     console.log(item);
// }

// 👍 for in (loop will return index of item)
// for (const item in arr) {
//     console.log(item);
// }

// 👍 foreach (does not return any value)
// arr.forEach((element, index, arr) => {
//     console.log(element, index, arr);
// });

// 👍 filter (return a filter value base on condition)
// const even = arr.filter((item) => item % 2 === 0);
// console.log(even);

// 👍 map (return a modified value)
// const multiplyByTwo = arr.map((item) => item * 2);
// console.log(multiplyByTwo);

// 👍 chaining
// const newNum = arr.map((item) => item * 2).filter((item) => item > 3);
// console.log(newNum);

// 👍 reduce (return the final value)
// const sum = arr.reduce((acc, current) => acc + current, 0);
// console.log(sum);
