//findLongestString.js

// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"


function findLongestString(array) {
    let longestStr = ""; // Start with an empty string
    for (let i = 0; i < array.length; i++) {
        // If the current string is longer than the longest so far
        if (array[i].length > longestStr.length) {
            longestStr = array[i]; // Update longestStr to the current string
        }
    }
    return longestStr; // Return the longest string found
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"

function findLongestString(array) {
    // Use reduce to find the longest string in the array
    return array.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, ""); // Start with an empty string as the initial longest value
}

const Нийлүүлнэ = [1, 2, 3, 4];
const sum = Нийлүүлнэ.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Нийлүүлнэ
}, 2); // Анхны утга: 2

console.log(sum); // Гарц: 12

const numbers = [5, 12, 8, 20, 7];

// Use filter to create a new array with numbers greater than 10
const filteredNumbers = numbers.filter(number => number > 10);

console.log(filteredNumbers); // Output: [12, 20]
console.log(numbers);         // Output: [5, 12, 8, 20, 7] (Original array remains unchanged)

const numbers1 = [5, 12, 8, 20, 7];

// Use filter to create a new array with numbers greater than 10
const filteredNumbers1 = numbers1.filter(number => {
    console.log("Current number being checked:", number); // Logs each number
    return number > 10; // Keeps numbers greater than 10
});

console.log("Filtered numbers:", filteredNumbers1); // Output: [12, 20]
