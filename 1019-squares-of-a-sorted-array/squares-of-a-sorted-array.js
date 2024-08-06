/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((a)=>a*a).sort((a,b)=>a-b)
};