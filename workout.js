// let s = "Hello World";
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  ";
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

Input: s = "a";
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

let x = [];
let ctr = 0;
for (let i = s.length - 1; i >= 0; i--) {
  console.log(s[i]);
  x.push(s[i]);
  if (s[i] == " " && ctr == 0) continue;
  if (s[i] == " ") {
    console.log('break');
    
    break;
  }
  console.log("dd");

  ctr++;
}

console.log(x.length - 1);
console.log(ctr);
