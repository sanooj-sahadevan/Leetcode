let s = "abab";
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring

s = s.split("");

for (i = 0; i < s.length; i++) {
  for (j = i + 1; j < s.length; j++) {
    if (s[i] === s[j] && s[i + 1] === s[j + 1]) {
      console.log(true);
    }
  }
  console.log(false);
}
