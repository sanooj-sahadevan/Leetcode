/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {

    for (let i = 0; i < k; i++) {
        let res = Math.min(...nums);
        let index = nums.indexOf(res)
        nums[index] = res * multiplier;
    }
    return nums
};