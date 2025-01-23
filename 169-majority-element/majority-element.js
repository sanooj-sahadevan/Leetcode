/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let f = {}
    for (i = 0; i < nums.length; i++) {
        f[nums[i]] = (f[nums[i]] || 0) + 1
    }
    let largest = 0, res = 0
    for (let key in f) {
        if (largest < f[key]) {
            largest = f[key]
            res = key

        }
    }

    return Number(res)

};