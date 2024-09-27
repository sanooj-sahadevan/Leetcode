/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let f = {}, x = [];
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }
    for (let key in f) {
        if (f[key] >= 2) {
            x.push(Number(key))
        }

    }
    return x



};