/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {


    let ctr = 0
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ctr++

            if (ctr > max) {
                max = ctr
            }
        } else {
            ctr = 0
        }
    }
    return max
};