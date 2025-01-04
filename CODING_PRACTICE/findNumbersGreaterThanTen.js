

// Challenge 4: Find Numbers Greater than Ten
// Write a function to find all numbers that are larger than 10 in the array.
// Usage examples:

function findNumbersGreaterThanTen(too){
    let num = 10;
    let array = [];
    for(let number of too){
        if(number > num){
      array.push(number)      
        }
    }
    return array
}
console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]

//-------------------

function numbersGreaterThanTen(n){
 let arr = n.filter(element => element > 10)
  return arr
}
console.log(numbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(numbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(numbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]