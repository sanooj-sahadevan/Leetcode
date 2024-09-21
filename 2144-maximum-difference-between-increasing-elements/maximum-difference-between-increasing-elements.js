/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
let maxDiff = -1;
  let minNum = nums[0]; // Track the smallest number encountered so far

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minNum) {
      maxDiff = Math.max(maxDiff, nums[i] - minNum);
    } else {
      minNum = nums[i]; 
    }
  }

  return maxDiff;

    
};