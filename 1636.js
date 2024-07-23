// const nums = [1, 1, 2, 2, 2, 3];
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

const nums = [2, 3, 1, 3, 2];
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.
// Example 3:

// Input: nums = [-1,1,-6,4,5,-6,1,4,1]
// Output: [5,-1,4,4,-6,-6,1,1,1]

let f = {},
  x = [];

for (let i = 0; i < nums.length; i++) {
  f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
  f[nums[i]]++;
}

let entries = Object.entries(f);

entries.sort((a, b) => a[1] - b[1]);
console.log(entries);

for (let [key, value] of entries) {
  for (let i = 0; i < value; i++) {
    x.push(Number(key));
  }
}
// console.log(f);
// console.log(x);
