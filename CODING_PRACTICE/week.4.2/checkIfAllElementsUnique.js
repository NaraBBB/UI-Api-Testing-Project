//checkIfAllElementsUnique.js
// Write a function that checks if all elements in an array are unique.

function areAllElementsUnique(array) {
  // Create a new Set from the array
  const uniqueElements1 = new Set(array);

  // Compare the size of the Set with the original array length
  return uniqueElements1.size === array.length;
}
console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true

console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false

console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true//
