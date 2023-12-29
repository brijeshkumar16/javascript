// Immediately Invoked Function Expressions IIFE

(function connect() {
    console.log('DB connect');
})();

((name) => {
    console.log(`${name}`);
})('Brijeshkumar');
