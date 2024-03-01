// Prototype

// Problem -> Add a trueLength function that will remove the space and provide a true length

String.prototype.trueLength = function () {
  return this.trim().length;
};

let myName = 'Brijeshkumar Yadav         ';

console.log('Length', myName.length);
console.log('trueLength', myName.trueLength());
