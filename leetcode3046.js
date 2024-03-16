const nums = [1, 1, 1, 1, 1, 1];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i + 2]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isPossibleToSplit(nums));
