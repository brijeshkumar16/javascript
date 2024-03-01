// const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);
// console.log(Math.PI);

const user = {
  name: 'Brijesh',
  age: 20,
  isLogin: true,
};

Object.defineProperty(user, 'name', {
  //   configurable: false,
  //   enumerable: false,
  //   writable: false,
});

console.log(Object.getOwnPropertyDescriptor(user, 'name'));

user.name = 'Aayush';

console.log(user);
