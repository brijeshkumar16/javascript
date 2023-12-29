// Map, Set, WeakMap & WeakSet in JavaScript;

// Set
// A Set in JavaScript is a collection of unique values. It allows you to store distinct values of any type, whether they are primitive values or object references.

// Create a Set
const mySet = new Set();

// Add values to the Set
mySet.add('apple');
mySet.add('banana');
mySet.add('cherry');

// Check if a value exists in the Set
console.log(mySet.has('banana')); // true

// Remove a value from the Set
mySet.delete('banana');

// Iterate through the Set
for (const item of mySet) {
  console.log(item);
}

// Map
// A Map in JavaScript is a collection of key-value pairs. It allows you to associate values (any type) with unique keys (also any type).

// Create a Map
const myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John');
myMap.set('age', 30);

// Get a value by its key
console.log(myMap.get('name')); // 'John'

// Check if a key exists in the Map
console.log(myMap.has('age')); // true

// Delete a key-value pair from the Map
myMap.delete('age');

// Iterate through the Map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

// WeakSet
// A WeakSet in JavaScript is similar to a Set, but it holds weak references to its elements. This means that if an object is no longer referenced elsewhere in your code, it can be automatically removed from the WeakSet, allowing it to be garbage collected

// Create a WeakSet
const myWeakSet = new WeakSet();

// Add objects to the WeakSet
const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };
myWeakSet.add(obj1);
myWeakSet.add(obj2);

// Check if an object exists in the WeakSet
console.log(myWeakSet.has(obj1)); // true

// Remove an object from the WeakSet
myWeakSet.delete(obj1);

// WeakMap
// A WeakMap in JavaScript is similar to a Map but holds weak references to its keys. Just like WeakSet, it allows objects to be automatically removed when they are no longer referenced elsewhere.

// Create a WeakMap
const myWeakMap = new WeakMap();

// Add key-value pairs to the WeakMap
const key1 = { id: 1 };
const key2 = { id: 2 };
myWeakMap.set(key1, 'Value 1');
myWeakMap.set(key2, 'Value 2');

// Get a value by its key
console.log(myWeakMap.get(key1)); // 'Value 1'

// Check if a key exists in the WeakMap
console.log(myWeakMap.has(key2)); // true

// Remove a key-value pair from the WeakMap
myWeakMap.delete(key1);
