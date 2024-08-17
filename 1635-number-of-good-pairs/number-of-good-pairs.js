/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let res = [];
    let ctr = 0
    for (i = 0; i <= nums.length; i++) {
        for (j = 0; j <= nums.length; j++) {
            if (i != j && nums[j] == nums[i] && i < j) {
                ctr++
                res.push([i, j]);
            }
        }
    }
    return ctr

};