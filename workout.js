/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    let  x  = []
    let  y  = []
    
    
    nums.sort()
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
      x.push(nums[i])
        }else{
            y.push(nums[i])
        }
    }
    let a = [...x,...y]
    return a
   
    };