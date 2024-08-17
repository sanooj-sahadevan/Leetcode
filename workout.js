Input: (s = "abc"), (t = "bac");
// Output: 2
// Explanation:
// For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
// The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
// The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
// The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
// That is, the permutation difference between s and t is equal to |0 - 1| + |2 - 2| + |1 - 0| = 2.

s = s.split("");
t = t.split("");
console.log(s);
let res = [];
for (i = 0; i < s.length; i++) {
  if (t.includes(s[i])) {
    res.push([Math.abs(t.indexOf(s[i]) - i)]);
  }
}


console.log(res);
