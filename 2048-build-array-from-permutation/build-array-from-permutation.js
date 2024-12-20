/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let res = []
    for (i = 0; i < nums.length; i++) {
        res[i] = nums[nums[i]]
    }
    return res
};