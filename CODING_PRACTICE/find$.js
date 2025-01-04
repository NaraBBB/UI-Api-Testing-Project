
// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
// Usage examples:

//TODO version 1 
function findDollarStrings(str){
    let dollarSign = []
for(let dollar of str){
    if(dollar.includes("$")){
        dollarSign.push(dollar)
    }
}
return dollarSign
}
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []

//-------------------------------------------
//TODO version 2 
function findDollarStr(str){
let result = str.filter(element => element.includes("$"))
return result
}
console.log(findDollarStr(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStr(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStr(["no", "dollars", "here"])); // []


