/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {

    let f = {}, x = [];

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }

    for (let i = 1; i <= nums.length; i++) {
        if (f[i] === undefined || f[i] === 0) {
            x.push(i);
        }
    }
    return x
};