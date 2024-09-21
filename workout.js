// Input: nums = [7, 1, 5, 4];
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.
// Example 2:

// Input: nums = [9,4,3,2]
// Output: -1
// Explanation:
// There is no i and j such that i < j and nums[i] < nums[j].
// Example 3:

Input: nums = [1,5,2,10]
// Output: 9
// Explanation:
// The maximum difference occurs with i = 0 and j = 3, nums[j] - nums[i] = 10 - 1 = 9.
let res = [];
for (i = 0; i < nums.length; i++) {
  for (j = i + 1; j < nums.length; j++) {
    if (nums[i] < nums[j]) {
      res.push(   Math.abs( nums[i] - nums[j]));
    }else{
      retrun -1
    }
  }
}
console.log(Math.max(...res));
