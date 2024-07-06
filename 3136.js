// A word is considered valid if:

// It contains a minimum of 3 characters.
// It contains only digits (0-9), and English letters (uppercase and lowercase).
// It includes at least one vowel.
// It includes at least one consonant.
// You are given a string word.

// Return true if word is valid, otherwise, return false.

// Notes:

// 'a', 'e', 'i', 'o', 'u', and their uppercases are vowels.
// A consonant is an English letter that is not a vowel.

const word = "234Adas";

// Output: true
let vol =  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
word.split("");
console.log( typeof(word),word);
for (i = 0; i < word.length; i++) {
  if (word.length >= 3) {
    console.log('1');
    if (/^[a-zA-Z0-9]$/.test(word[i])) {
        console.log('2');
      if (vol.includes(word[i])) {
        console.log('3');
        if (!vol.includes(word[i])) {

console.log(true);
        }
      }
    }
  }
  console.log(false);
}















// const word = "234Adas";

// // Define vowels
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// // Flags for checking the presence of vowels and consonants
// let hasVowel = false;
// let hasConsonant = false;

// // Check if the word contains at least 3 characters
// if (word.length >= 3) {
//   // Iterate through each character in the word
//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
    
//     // Check if character is alphanumeric
//     if (/^[a-zA-Z0-9]$/.test(char)) {
//       // Check if character is a vowel
//       if (vowels.includes(char)) {
//         hasVowel = true;
//       } else if (/[a-zA-Z]/.test(char)) {
//         // Check if character is a consonant (an English letter that is not a vowel)
//         hasConsonant = true;
//       }
//     } else {
//       // If any character is not alphanumeric, return false
//       console.log(false);
//       return;
//     }
//   }

//   // Return true if the word contains at least one vowel and one consonant
//   if (hasVowel && hasConsonant) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// } else {
//   console.log(false);
// }



