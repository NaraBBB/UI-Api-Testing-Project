
//SHORTEST NAME 

let names = ["Alexaa", "Sergiijav", "Ann", "An", "Ivan"];
let shortestName = names[0]; // Start with the first name as the shortest
for (let i = 1; i < names.length; i++) {
    if (shortestName.length > names[i].length) {
        shortestName = names[i];
    }
}
console.log(shortestName); // Output: "An"

//--------------------------------------------
let names1 = ["Alexaajave", "Sergii", "Ann", "An", "Ivan"];
let shortestName1 = names1[0]; // Start with the first name as the shortest
names1.forEach(ner => {
    if (shortestName1.length > ner.length) {
        shortestName1 = ner;
    }
});
console.log(shortestName1); // Output: "An"

//--------------------------------------------
let names2 = ["Alexaajave", "Sergii", "Ann", "An", "Ivan"];
const shortest = names2.reduce((shortest, currentElement) => {
    return currentElement.length < shortest.length ? currentElement : shortest;
}, names2[0]); // Start with the first name as the shortest
console.log(shortest); // Output: "An"

//----------------------------------------
let ner1 = ["Alexaa", "Sergiijav", "Ann", "An", "Ivan"]
let longestName = " ";
for(let i =0; i< names1.length; i++){
if(longestName.length < ner1[i].length){
    longestName = ner1[i]
}
}
console.log(longestName);