/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {

    let ctr = 0
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 3 !== 0) {
            ctr++
        }
    }
    return ctr
};

