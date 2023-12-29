/**
 * Memoization Example in JavaScript
 * Memoization is an optimization technique that caches the results of expensive function calls
 * and returns the cached result when the same inputs occur again.
 */

/**
 * Create a memoization function that calculates the sum of numbers up to a given 'num'.
 * @returns {Function} - A memoized function that stores calculated results in a cache.
 */
const memoization = () => {
  // Create a cache object to store calculated results.
  const cache = {};

  // Return a memoized function.
  return (num) => {
    // Check if the result for 'num' is already in the cache.
    if (num in cache) {
      console.log('Cache hit'); // Indicate that the result was found in the cache.
      return cache[num]; // Return the cached result.
    } else {
      console.log('Calculate'); // Indicate that a new calculation is performed.
      let sum = 0;

      // Calculate the sum of numbers from 0 to 'num'.
      for (let i = 0; i < num; i++) {
        sum += i;
      }

      // Cache the result for future use.
      cache[num] = sum;

      // Return the calculated result.
      return sum;
    }
  };
};

// Create a memoization function instance.
const mem = memoization();

// Example usages of the memoized function.
console.log(mem(5)); // Output: Calculate (Calculates and caches result)
console.log(mem(5)); // Output: Cache hit (Returns the cached result)
