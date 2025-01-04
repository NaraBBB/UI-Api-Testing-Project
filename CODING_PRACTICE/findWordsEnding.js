//FIND NAME ENDING WTIH  E

let names = ["Alexaajave", "Sergie", "Anna", "Ana", "Iva"];
let name = names.filter(ner=> ner.endsWith("e"));
console.log(name); // Output: [ 'Alexaajave', 'Sergie' ]



// FIND NAME ENDING WITH 'a'
let names1 = ["Alexaajave", "Sergie", "Anna", "Ana", "Iva"];
let result = [];

names1.forEach(ner => {
    if(ner.endsWith("a")){
        result.push(ner)
    }
})
console.log(result);//[ 'Anna', 'Ana', 'Iva' ]
