const s = "abc",
  t = "zbc";
// Output: 3
// Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
// Now, t is a subsequence of s ("coachingding").
// It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

s.split("");
t.split("");
let ctr = 0;

for (i = 0; i < t.length; i++) {
  if (t[i] == s[ctr]) {
    ctr++;
  }
}

let b = t.length - ctr;
console.log(ctr);
// console.log(t);
// console.log(s);
console.log(b);
