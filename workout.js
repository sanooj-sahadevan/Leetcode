Input: (pattern = "abab"), (s = "dog cat cat dog");

//. Output: true
// Explanation:
// The bijection can be established as:
// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

pattern = pattern.split("");
let f = {},
  g = {};
for (let i = 0; i < pattern.length; i++) {
  f[pattern[i]] = (f[pattern[i]] || 0) + 1;
}
console.log(f);
s = s.split(" ");

for (let i = 0; i < s.length; i++) {
  g[s[i]] = (g[s[i]] || 0) + 1;
}
console.log(
  Object.values(f).map(JSON.stringify).join() ===
    Object.values(g).map(JSON.stringify).join()
);
