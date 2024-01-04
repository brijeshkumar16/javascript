const mySymbol = Symbol('123');

const user = {
    'full name': 'Brijeshkumar Yadav',
    age: 20,
    [mySymbol]: 'mySymbol',
    location: 'Valsad,Gujarat',
    email: 'by9714322072@gmail.com',
    isLoggedIn: false,
    printDetails: function () {
        return `User name is ${this['full name']} and his age is ${this.age}`;
    },
};

// 👍 Access the object key with dot operator
// console.log(user.age);

// 👍 Access the object with square brackets
// console.log(user['full name']);

// 👍 Change the object value
// user.isLoggedIn = true;

// 👍 Add a new key and value
// user.newKey = 'newKey';

// 👍 Check the key is present or not
// console.log('age' in user);

// 👍 Freeze the object
// Object.freeze method is used to freeze the whole object and it will not changed
// Object.freeze(user);
// user.age = 99;

// 👍 keys methods
// keys methods is used to return the object keys in a single array
// console.log(Object.keys(user));

// 👍 values methods
// values methods is used to return the object values in a single array
// console.log(Object.values(user));

// 👍 for in
// for (const item in user) {
//   console.log(user[item]);
// }

// 👍 function inside object
// console.log(user.printDetails());

// 👍 spread operator to merge two object
// const obj1 = { name: 'jay' };
// const obj2 = { age: 20 };
// console.log({ ...obj1, ...obj2 });

// 👍 entries
// console.log(Object.entries(user));

// 👍 object de-structure
// de-structure is advance way of extract the value from object
// const { age, email, isLoggedIn } = user;
// console.log(age, email, isLoggedIn);

// console.log(user);

// 👍 for in loop
for (const key in user) {
    console.log(user[key]);
}
