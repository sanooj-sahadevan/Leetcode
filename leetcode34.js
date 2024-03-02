/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let x = [];
    let y = [-1, -1];

    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            x.push(i);
        }
    }

    if (x.length === 0) {
        return y;
    } else {
        return [x[0], x[x.length - 1]];
    }
};
