// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
function findLongestString(str){
    return str.reduce((longest , currentElement)=> 
        currentElement.length > longest.length ? currentElement : longest, "")
}
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"
//-----------------------------------------------------------------------------------

let names7 = ["Alexaajave", "Sergii", "Ann", "An", "Ivan"]
const longest7 = names2.reduce((longest, currentElement)=> {
    return currentElement.length > longest.length ? currentElement : longest; }, "");
    console.log(longest7);

//-----------------------------------------------------------------------------------

//FIND LONGEST NAME 
let names1 = ["Alexaajave", "Sergii", "Ann", "An", "Ivan"]
let longestName1 = names1[0] // Start with the first name as the shortest
names1.forEach(ner => {   
if(longestName1.length < ner.length){
    longestName1 = ner
}
})
console.log(longestName1);


let names2 = ["Alexaajave", "Sergii", "Ann", "An", "Ivan"]
const longest = names2.reduce((longest, currentElement)=> {
    return currentElement.length > longest.length ? currentElement : longest; }, "");
console.log(longest);


//FIND LONGEST NAME 
let names5 = ["Alexaajave", "Sergie", "Ann", "An", "Ivan"];
let hamgiinUrtNer = ""; // Start with an empty string for the longest name
names5.forEach(ner => {
    hamgiinUrtNer = hamgiinUrtNer.length > ner.length ? hamgiinUrtNer : ner;//Updated hamgiinUrtNer: Instead of creating a new longest variable inside the loop, the hamgiinUrtNer variable is updated directly.
});
console.log(hamgiinUrtNer); // Output: "Alexaajave"


