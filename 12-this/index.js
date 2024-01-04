// 👍 This keyword with traditional function
// const user = {
//     username: 'Brijeshkumar Yadav',
//     isLoggedIn: false,
//     printDetails: function () {
//         console.log(this);
//         console.log(this.username);
//     },
// };

// user.printDetails();
// user.username = 'sam';
// user.printDetails();

// 👍 This keyword with arrow function
const user = {
    username: 'Brijeshkumar Yadav',
    isLoggedIn: false,
    printDetails: () => {
        console.log(this); // here this refer to global
    },
};

user.printDetails();
