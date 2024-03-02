/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    

    let f = {}, x = 0
    
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]] = 0;
    }
    
    for (let i = 0; i < nums.length; i++) {
        f[nums[i]]++;
    }
    
    for(i=0;i<nums.length;i++){
        if(f[nums[i]]>1){
           x=nums[i] 
        }
    }
    
    return x
    };