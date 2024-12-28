//let s = "abc";
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

let s = "aba"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

s = s.split("");
let f = {};
for (let i = 0; i < s.length; i++) {
  f[s[i]] = 0;
}
for (let i = 0; i < s.length; i++) {
  f[s[i]]++;
}

console.log(f);
