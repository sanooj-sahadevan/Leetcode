/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let f = {}
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }
    let maxFreq = 0

    for (let val in f) {
        if (f[val] > maxFreq) {
            maxFreq = f[val]
        }
    }
    for (let val in f) {
        if (f[val] == maxFreq) {
            return Number( val)
        }

    }

};