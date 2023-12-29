// 👍 global

// let a = 300;

// 👍 block scope
// block scope mean you cannot access the variable outside the block when you use let and const
// {
//     let a = 10;
//     const b = 20;
//     console.log('Inner', a, b);
// }
// console.log('Outer', a);

// 👍 variable scope in nested function
// const one = () => {
//     const username = 'Brijeshkumar Yadav';

//     const two = () => {
//         const website = 'www.brijeshkumaryadav.com';
//         console.log(username); // Output : 'Brijeshkumar Yadav'
//     };

//     // console.log(website); // error

//     two();
// };

// one();
