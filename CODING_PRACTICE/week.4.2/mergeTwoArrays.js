

// Challenge 10: mergeTwoArrays
// Write a function that takes two arrays and merges them into one.
function mergeArrays(array1, array2){
return array1.concat(array2)
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]