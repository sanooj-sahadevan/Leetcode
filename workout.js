Input: nums = [1, 4, 3, 3, 2];

// Output: 2

// The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
// The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
// Hence, we return 2.
// Example 2:
// Input: nums = [3,3,3,3]
// Output: 1
// Explanation:
// The strictly increasing subarrays of nums are [3], [3], [3], and [3].
// The strictly decreasing subarrays of nums are [3], [3], [3], and [3].
// Hence, we return 1.
// Example 3:
//Input: nums = [3, 2, 1];
// Output: 3
// Explanation:
// The strictly increasing subarrays of nums are [3], [2], and [1].
// The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].

let ctr = 1,
  res = [];
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] < nums[i + 1]) {
//     ctr++;
//   }
//   if (nums[i] > nums[i + 1]) {
//     ctr = 1;
//   }
//   res.push(ctr);
// }
let count = 1;

for (let i = nums.length - 1; i >= 0; i--) {
  nums[i]
  if (nums[i] > nums[i + 1]) {
    
    count++;
  }
  if (nums[i] < nums[i + 1]) {
    count = 1;
  }
  res.push(count);
}
console.log(res);
