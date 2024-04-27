const ransomNote = "aab",
  magazine = "baa";
Output: true;

// let y = ransomNote.split(' ')
// let  x = magazine.split('')
// console.log(x);
// if (magazine.includes(ransomNote) || ransomNote.includes(magazine)) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// const ransomNote = "aab";
// const magazine = "baa";

let y = ransomNote.split("");
let x = magazine.split("");
let notePossible = true;

for (let char of y) {
  if (!x.includes(char)) {
    notePossible = false;
    break;
  } else {
    x.splice(x.indexOf(char), 1);
  }
}

console.log(notePossible);
