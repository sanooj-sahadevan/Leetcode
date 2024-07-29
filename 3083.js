// let s = "leetcode";
// Output: true
// Explanation: Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".
// Input: s = "abcba";
// Output: true
// Explanation: All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".
// Example 3:
Input: s = "abcd";
// Output: false
// Explanation: There is no substring of length 2 in s, which is also present in the reverse of s.

let res = s.split("").reverse("").join("");

for (i = 0; i < s.length; i++) {
  let x = s.slice(i, i + 2);
  if (res.includes(x)) {
    if(x.length===2){
        console.log(true);
    }
  }
}
