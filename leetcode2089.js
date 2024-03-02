/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {

    let  x = []
nums.sort((a,b)=>a-b);

for(i=0;i<nums.length;i++){
    if(target==nums[i]){
    x.push(i)
}
}
return x
}