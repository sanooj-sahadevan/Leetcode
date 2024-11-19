/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {


    let f = {},
        x = 0;

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }

    for (let key in f) {
        if (f[key] > 1) {
            x = key;
        }
    }
    return Number(x)


};