// Challenge 2: Find the Largest Number
// Write a function to find the largest number in the array.
// Usage examples:

function findLargestNumber(num) {
  let largest = num[0];
  num.forEach((too) => {
    if (largest < too) {
      largest = too;
    }
  });
  return largest;
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50
console.log(findLargestNumber([-1, -2, -3, -4, -5])); // -1

//-----------------------reduce()
function findLargestNum(Too) {
  return Too.reduce(
    (largest, currentElement) =>
      largest < currentElement ? currentElement : largest,
    Too[0]
  );
}
console.log(findLargestNum([1, 2, 3, 4, 5])); // 5
console.log(findLargestNum([10, 20, 30, 40, 50])); // 50
console.log(findLargestNum([-1, -2, -3, -4, -5])); // -1

//FIND LARGEST WORKED
const nums = [4, 8, 423, 946, 55, 75, 63, 88];
let largest = Math.max(...nums);
console.log(largest); // ! Math.max: It finds the largest number in a list. 
// ! The spread operator (...) is used to pass the array elements as individual arguments.

//FIND LARGEST WORKED
const nums1 = [4, 8, 423, 946, 55, 75, 63, 88];
let largestNum = 0;
for (let i = 0; i < nums1.length; i++) {
  if (largestNum < nums1[i]) {
    largestNum = nums1[i];
  }
}
console.log(largestNum);

//FIND LARGEST WORKED
const nums2 = [4, 8, 423, 946, 55, 75, 63, 88];
let largestNum2 = 0;
nums2.forEach((num) => {
  if (largestNum2 < num) {
    largestNum2 = num;
  }
});
console.log(largestNum2);
