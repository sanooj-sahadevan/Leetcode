const nums = [1,1,2,1,1],
  k = 3;
let ctr = 0,
  res = [];
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

for (i = 0; i < nums.length; i++) {
  for (j = 0; j < nums.length; j++) {
    if (nums[i] % 2 === 1) {
      res.push(nums[i]);
    }
  }
  ctr++;
}

console.log(res);
console.log(ctr);
