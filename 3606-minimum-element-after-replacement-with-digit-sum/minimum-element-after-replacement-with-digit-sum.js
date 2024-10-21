/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let res = nums[i].toString().split("").map(Number);
        let sum = res.reduce((acc, curr) => acc + curr, 0);
        arr.push(sum);
    }
    return Math.min(...arr);
};