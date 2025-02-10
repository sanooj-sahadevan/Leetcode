// Input: s = "abc"
// Output: "abc"
// Explanation
// There is no digit in the string.
// Example 2:
let s = "a8f";
// Output: ""
// Explanation:
// First, we apply the operation on s[2], and s becomes "c4".
// Then we apply the operation on s[1], and s becomes "".

for (i = 0; i < s.length; i++) {
  if (/\d/.test(s[i])) {
    s = s.slice(0, i - 1) + s.slice(i + 1);
    i--;
    i--;
  }
}
console.log(s);
