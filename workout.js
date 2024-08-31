let nums = [1, 3, 5, 4, 7];
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
// 4.
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 1
// Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
// increasing.

let length = 1;
let ctr = 1;

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > nums[i - 1]) {
    ctr++;
    length = Math.max(length, ctr);
  } else {
    ctr = 1;
  }
}

console.log(length);
