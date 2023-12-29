// Handling Undefined and Not Defined Variables

// Undefined Variable
// An undefined variable is declared but has no value assigned to it.

let undefinedVariable;
console.log(undefinedVariable); // undefined

// Not Defined Variable
// A not defined variable has not been declared at all.

try {
  console.log(notDefinedVariable); // This will throw a ReferenceError.
} catch (error) {
  console.error('ReferenceError: notDefinedVariable is not defined.');
}
