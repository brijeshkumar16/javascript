// 👍 if else

// const isLogin = true;

// if (isLogin) {
//     console.log('User is login');
// } else {
//     console.log('User is not login');
// }

// 👍 else if

// const balance = 1000;

// if (balance < 500) {
//     console.log('Less then 500');
// } else if (balance < 750) {
//     console.log('Less then 750');
// } else if (balance < 900) {
//     console.log('Less then 900');
// } else {
//     console.log('Value is not valid');
// }

// 👍 multiple condition with and operator(&&)
// const isLogin = true;
// const debitCard = true;

// if (isLogin && debitCard) {
//     console.log('You can purchase a book');
// }

// 👍 multiple condition with or operator(||)
// const isLoginWithEmail = true;
// const isLoginWithGoogle = false;

// if (isLoginWithEmail || isLoginWithGoogle) {
//     console.log('You are login');
// }

// 👍 Switch case
// const months = 1;

// switch (months) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;

//     default:
//         console.log('Input is not valid');
//         break;
// }

// 👍 truthy and falsy values
// false,null,undefined,'',0,-0,NaN,, BigInt 0n - falsy values
// true , "Abc",1,[],{}," ",function(){} - truthy values

// 👍 How to check the array is empty
// const arr = [];

// if (arr.length === 0) {
//     console.log('Array is empty');
// }

// 👍 How to check the object is empty
// const obj = {};

// if (Object.keys(obj).length === 0) {
//     console.log('Object is empty');
// }

// 👍 nullish coalescing operator (??) : null,undefined
// let value;

// value = 2 ?? 10;
// value = null ?? 10;
// value = undefined ?? 10;

// console.log(value);

// 👍 ternary operator

// console.log(false ? 'Hello' : 'Bye');
