Input: nums = [8, 1, 2, 2, 3];
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:

// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:

// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]

// let res = [];
// let ctr = 0;
// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length; j++) {
//     if (nums[i] > nums[j]) {
//       ctr++;
//     }
//   }
//   res.push(ctr)
//   ctr = 0
// }

// console.log(res);

Input: words = ["leetcoder", "leetcode", "od", "hamlet", "am"];
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.
// let res = [];
// for (let i = 0; i < words.length; i++) {
//   for (let j = 0; j < words.length; j++) {
//     if (i !== j) {
//       if (words[i].includes(words[j])) {
//         res.push(words[j]);
//       }
//     }
//   }
// }
// console.log(res);

// let x = res.filter((ind, curr) => res.indexOf(ind) == curr);
// console.log(x);
let s = "j";
s = s.split(""); // Split the string into an array of characters
let res = [];
const alph = s.filter((char) => char.match(/[a-zA-Z]/));
const num = s.filter((char) => char.match(/[0-9]/));

if (alph.length === 0 || num.length === 0) {
  console.log("");
} else if (Math.abs(alph.length - num.length) > 1) {
  console.log("");
} else {
  let longerArray = alph.length > num.length ? alph : num;
  let shorterArray = alph.length > num.length ? num : alph;

  while (longerArray.length || shorterArray.length) {
    if (longerArray.length) res.push(longerArray.pop());
    if (shorterArray.length) res.push(shorterArray.pop());
  }

  console.log(res.join(""));
}
