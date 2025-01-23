/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    let f = {},
        x = [];
    for (i = 0; i < nums.length; i++) {
        f[nums[i]] = (f[nums[i]] || 0) + 1;

        if (f[nums[i]] > 2) {
            nums.splice(i, 1);
            i--
        }
    }
    return nums.length
};