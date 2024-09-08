/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = Math.max(...nums);

  for (i = 0; i < nums.length; i++) {
    if (l === nums[i]) {
      return i;
    }
  }
};
