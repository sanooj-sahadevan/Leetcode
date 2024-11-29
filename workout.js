let s = "aba";
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// let s = "aaa";
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

s = s.split("");

let f = {},
  x = [];

for (let i = 0; i < s.length; i++) {
  f[s[i]] = 0;
}

for (let i = 0; i < s.length; i++) {
  f[s[i]]++;
}
console.log(f);

let ctr = 0;
for (let key in f) {
  if (f[key] === 1) {
    ctr++;
  }
  if (f[key] % 2 !== 0 && f[key] !==1 ) {
    ctr = f[key] * 2;

  } else {
    ctr = f[key] * 2 - 1;

  }
}
console.log(ctr);
