// const word = "abcdefd";
// const ch = "d";
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd"word.split
// word.split("");
// ch.split("");
// let temp = 0;
// for (i = 0; i < word.length; i++) {
//   if (word[i] == ch) {
//     temp = word[i];
//     word[i] = word[0];
//     word[0] = temp;
//     console.log(word[i]);
//   }
// }
// console.log(word[0]);
// console.log(word[0]);
// console.log(temp);
// console.log(word);

const word = "abcdefd";
const ch = "d";

// const index = word.indexOf(ch);

// if (index !== -1) {
//   const partToReverse = word.substring(0, index + 1);
//   const restOfWord = word.substring(index + 1);

//   const reversedPart = partToReverse.split("").reverse().join("");
//   const result = reversedPart + restOfWord;

//   console.log(result); // Output: "dcbaefd"
// }

// word.split("");
// ch.split("");
// let  x = []
// let temp = 0;
// for (i = 0; i < word.length; i++) {
//   if (word[i] == ch) {
//     for (i = word.length - 1; i > word[i]; i++) {
//         x.push(word[i])
//     }
//   }
// }


word.split("");
ch.split("");
let  x = []
let  z = []
let ind = word.indexOf(ch)
for(i=0;i<ind+1;i++){
x.push(word[i])
}

let y  = x.reverse('').join('')
// console.log(y);

for(i=ind+1;i<word.length;i++){
    z.push(word[i])
    }
    console.log(z);
    let A = z.join('');

let b = y + A;

console.log(b);