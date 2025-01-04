// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.
// Usage examples:

function factorial(num) {
  let result = 1; //! Start with 1 because multiplying anything by 1 doesn’t change it.
  for (let i = 1; i <= num; i++) {
    //! // Start counting from 1 up to the number (num).

    result = result * i; //! Multiply result by the current number (i).
  }
  return result;
}

console.log(factorial(5)); // 120 -->5×4×3×2×1=120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800
