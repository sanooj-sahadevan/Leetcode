/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = []
    for(i=0;i<nums.length;i++){
        res.push(nums[nums[i]])
    console.log(nums[nums[i]])
}
    return res
};