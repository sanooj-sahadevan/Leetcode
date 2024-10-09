/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    return Math.abs(nums.reduce((a, b) => a + b) - nums.join('').split('').map(v => Number(v)).reduce((acc, curr) => acc + curr))
};


