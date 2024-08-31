/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let length = 1;
    let ctr = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            ctr++;
            length = Math.max(length, ctr);
        } else {
            ctr = 1;
        }
    }

    return length
    console.log(length);

};