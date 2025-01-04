// let str = 'hello world';
// //let vowels = [a,o,e,i,u]
// let result= str.filter(v => v.includes(a,o,e,i,u))
// console.log(result);
//TODO version 1

let str = "hello world";
let vowels = ["a", "o", "e", "i", "u"]; // Define vowels
let result = str.split("").filter((vseg) => vowels.includes(vseg)); // !Split string, filter vowels
console.log(result); // Logs: ['e', 'o', 'o']

//TODO version 2

function findAllVowels(input) {
  let array = input.toLowerCase();
  let result = [];
  let vowels = ["a", "o", "e", "i", "u"]; // Define vowels

  for (let i = 0; i < array.length; i++) {
    if (vowels.includes(array[i])) { // Check if the character is a vowel
      result.push(array[i]); // Add the vowel to the result array
    }
  }
  return result;
}
// Call the function and log the result
console.log(findAllVowels("hello world"));
