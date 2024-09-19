/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
   result = -1

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(-nums[i], i+1) > 0) 
            if (Math.abs(nums[i]) > result) result = Math.abs(nums[i])            
    }

    return result
};