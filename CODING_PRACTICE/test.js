

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz"; // Add "Fizz" if divisible by 3
        if (i % 5 === 0) output += "Buzz"; // Add "Buzz" if divisible by 5 output and += "Buzz"; appends "Buzz" to output, making output = "FizzBuzz".
        console.log(output || i); //or  Print "FizzBuzz", "Fizz", "Buzz", or the number
    }//15 FizzBuzz 30 FizzBuzz 45 FizzBuzz 60 FizzBuzz
}

// Call the function
fizzBuzz();
