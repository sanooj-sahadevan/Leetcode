/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let arr = nums.filter((v) => v != 0);

    let y = nums.length - arr.length;
    let i = 0;
    while ((i < y)) {
        arr.push(0);
        i++;
    }
    return arr

};