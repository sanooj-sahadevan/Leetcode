/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {

    let sum = 0,
        x = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            sum += nums[i];
        } else {
            sum += nums[i];
            x.push(sum);
            sum = 0;

        }
    }

    return Math.max(...x)

};