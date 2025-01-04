
// Challenge 1: Square All Numbers
// Write a function that takes an array of numbers and returns a new array with each number squared.
function squareNumbers(numbers){

    let squareNum = [];

    for(let i = 0; i <numbers.length; i++){

       squareNum.push( numbers[i] * numbers[i])

    }
    return squareNum
}

// Usage examples:
console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(squareNumbers([10, 20, 30, 40, 50])); // [100, 400, 900, 1600, 2500]

//Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.

 function  findOddNumbers(numbers){
    let oddNumbers= []
    for(let i = 0; i<numbers.length; i++){
if(numbers[i] % 2 != 0){

    oddNumbers.push(numbers[i]);

}
    }
    return oddNumbers;
 }                    
// Usage examples:
console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
 console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

 // Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.
function calculateAverage(arr){
let sum =0;
let avg = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i]  

    avg = sum / arr.length

}
return avg
}

// Usage examples:
console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

function  findEvenNumbers(array){
    let numka = [1,2,5,7];
    for(let i = 0; i < array.length; i++){
         numka = array[i]
    }
return numka

}

console.log(numka); // []