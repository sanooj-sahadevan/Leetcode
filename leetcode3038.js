/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    

    let sum = 0;
    let x = [];
    let ctr = 0;
    
    for (let i = 2; i <= nums.length; i++) {
        if (sum = nums[i - 1] + nums[i - 2]) {
            x.push(sum);
        }i++
        // sum = nums[i - 1] + nums[i];
    }
    
    console.log(x);
    
    for (let i = 0; i < x.length - 1; i++) {
        if (x[i] === x[i + 1]) {
            ctr++;
        } else {
            break;
        }
    }
    return ctr+1
    };