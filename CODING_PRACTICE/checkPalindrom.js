
function isPalindrome(word) {
  // Үгийг жижиг үсэг болгох, ингэснээр үсгийн том жижиг ялгаагүй болно
  let normalizedWord = word.toLowerCase();

  //Reverse the word
  let reversedWord = normalizedWord.split('').reverse().join('');

  // Check if the reversed word is the same as the original
  return reversedWord === normalizedWord;
}
// Жишээ ашиглалт:
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
console.log(isPalindrome('Level')); // true (том, жижиг үсэг хамаарахгүй)

