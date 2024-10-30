/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
     let res = [];
  
    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0;

        for (let j = i + 1; j < nums.length; j++) {
            right += nums[j];
        }

        for (let k = 0; k < i; k++) {
            left += nums[k];
        }
        res.push(Math.abs(left - right));
    }
  
    return res;
    
};