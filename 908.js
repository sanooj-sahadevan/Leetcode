// let nums = [0,10], k = 2
// Output: 6
// Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.
// Example 3:
let nums = [1, 3, 6],
  k = 3;
// Output: 0
// Explanation: Change nums to be [4, 4, 4]. The score is max(nums) - min(nums) = 4 - 4 = 0.

nums.sort((a, b) => b - a);
console.log(nums);

let range = nums[0] - k - (nums[nums.length - 1] + k);

range>0 ? range :0

console.log(range);
