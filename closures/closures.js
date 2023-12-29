// Closures
// Closures allow inner functions to access variables from their containing (outer) function, even after the outer function has finished executing.

function outerFunction(outerValue) {
  // The inner function is a closure because it "closes over" the outerValue variable.
  function innerFunction(innerValue) {
    console.log(`Outer Value: ${outerValue}`);
    console.log(`Inner Value: ${innerValue}`);
  }

  return innerFunction;
}

// Create closure instances
const closure1 = outerFunction('Hello');
const closure2 = outerFunction('Hi');

// Call the closures
closure1('World'); // Outer Value: Hello, Inner Value: World
closure2('Universe'); // Outer Value: Hi, Inner Value: Universe
