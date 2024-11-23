let s = "ccc";
// Output: 3
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

s = s.split("");

let f = {},
  x = [],
  y = [];

for (let i = 0; i < s.length; i++) {
  f[s[i]] = 0;
}

for (let i = 0; i < s.length; i++) {
  f[s[i]]++;
}

for (let key in f) {
  if (f[key] % 2 === 0) {
    x.push(f[key]);
  }
}

for (let key in f) {
  if (f[key] % 2 === 1) {
    y.push(f[key]);
  }
}
let sum = 0;
for (let i = 0; i < y.length; i++) {
  if (y[i] > 1) {
    y[i] = y[i] - 1;
    sum += y[i];
  }
}

for (let i = 0; i < y.length; i++) {
  if (y[i] === 1) {
    x.push(y[i]);
    break;
  }
}

let result = 0

for(let i =0;i<x.length;i++){
    sum+=x[i]
}

let res = [result, sum];
let ww = res.reduce((a, b) => a + b);

console.log(ww);

console.log(result + sum, "result");
console.log(ww);
