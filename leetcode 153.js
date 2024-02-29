/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let x = nums[0]
        for (let i = 0; i < nums.length; i++) {
            
            if (nums[i] < x) {
                x = nums[i]
            }
        }
        return x
        console.log(x)
    
    
    };