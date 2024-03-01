// Currying in JavaScript

const addition = (a, b, c) => {
  return a + b + c;
};

console.log(addition(1, 2, 3));

const addition1 = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(addition1(1)(2)(3));

// real life example
const userInfo = {
  name: 'Brijeshkumar Yadav',
  age: 20,
};

const user = (user) => {
  return (key) => {
    return user[key];
  };
};

console.log(user(userInfo)('name'));

// infinite currying
const add = (a) => {
  return (b) => {
    if (b !== undefined) return add(a + b);
    return a;
  };
};

console.log(add(4)(5)(6)(7)());
