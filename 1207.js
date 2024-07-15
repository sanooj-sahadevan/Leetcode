// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
const arr = [1, 2, 2, 1, 1, 3];
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false

let f = {},
  x = [];

for (let i = 0; i < arr.length; i++) {
  f[arr[i]] = 0;
}

for (let i = 0; i < arr.length; i++) {
  f[arr[i]]++;
}

let occurrences = new Set();

for (let key in f) {
  if (occurrences.has(f[key])) {
    return false;
  }
  occurrences.add(f[key]);
}
return true;
console.log(x);
