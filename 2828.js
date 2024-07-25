let words = ["alice", "bob", "charlie"],
  s = "abc";
// Output: true
// Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.
// Example 2:

// Input: words = ["an","apple"], s = "a"
// Output: false
// Explanation: The first character in the words "an" and "apple" are 'a' and 'a', respectively.
// The acronym formed by concatenating these characters is "aa".
// Hence, s = "a" is not the acronym.
// Example 3:

// Input: words = ["never","gonna","give","up","on","you"], s = "ngguoy"
// Output: true
// Explanation: By concatenating the first character of the words in the array, we get the string "ngguoy".
// Hence, s = "ngguoy" is the acronym.
let arr = [];
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    if (j === 0) {
      arr.push(words[i][j]);
    }
  }
}

arr = arr.join('').toString();
console.log(arr);
console.log(s);
console.log(s === arr);
// s = s.split("");
// console.log(s);
// console.log(arr);
// if (s === arr) {
//   console.log(true);
// } else {
//  console.log(false);
// }
