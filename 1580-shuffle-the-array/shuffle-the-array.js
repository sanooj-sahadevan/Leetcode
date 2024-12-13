/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

  var x = (nums.length-1)/2
   var y = [] 


   for(i=0;i<x;i++){
       y.push(nums[i])
       y.push(nums[i+n])
   }
   return y
};