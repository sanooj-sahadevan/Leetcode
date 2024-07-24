const arr = [6700, 8858, 8858, 8858, 8858];

// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1

let f = {},
  x = [];

for (let i = 0; i < arr.length; i++) {
  f[arr[i]] = 0;
}

for (let i = 0; i < arr.length; i++) {
  f[arr[i]]++;
}

let largest = 0;
let result =0
for (let key in f) {
  if (f[key] > largest) {
    largest = f[key];
    result = key
  }
}
console.log(f);
console.log(result);
