/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    let f = {},
        x = [];

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }

    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }
    let res = [];
    for (let i in f) {
        if (f[i] == 2) {
            let x = i;
            res.push (Number(i));
        }
    }
    return res
    console.log(res);
};
