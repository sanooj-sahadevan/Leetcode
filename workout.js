// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// let nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5, 4, -1, 7, 8];
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

let max = -Infinity;
let sum = 0;
const results = [];
for (const num of nums) {
  results.push(num);
  sum += num;
  max = Math.max(sum, max);
  if (sum < 0) {
    sum = 0;
    results.length = 0;
  }
}
let res = 0;
for (i = 0; i < results.length; i++) {
  res += results[i];
}

console.log(results);

console.log(res);
