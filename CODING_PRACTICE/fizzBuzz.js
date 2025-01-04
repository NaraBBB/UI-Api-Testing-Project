
// Challenge 8: Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
// No need for permutations as there are no arguments to this function. 
// Check the printed output.

// Challenge 8: fizzBuzz
//TODO version 1 
function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); // Multiple of both 3 and 5
        } else if (i % 3 === 0) {
            console.log("Fizz"); // Multiple of 3
        } else if (i % 5 === 0) {
            console.log("Buzz"); // Multiple of 5
        } else {
            console.log(i); // Not a multiple of 3 or 5
        }
    }
}
// Call the function
fizzBuzz();


// i % 3 === 0 checks if i is a multiple of 3.
// i % 5 === 0 checks if i is a multiple of 5.
// i % 3 === 0 && i % 5 === 0 checks if i is a multiple of both 3 and 5.


//TODO version 2 
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) output = "Fizz"; // Add "Fizz" if divisible by 3
        if (i % 5 === 0) output = "Buzz"; // Add "Buzz" if divisible by 5 output and += "Buzz"; appends "Buzz" to output, making output = "FizzBuzz".
        console.log(output || i); //or  Print "FizzBuzz", "Fizz", "Buzz", or the number
    }
}

// Call the function
fizzBuzz();
