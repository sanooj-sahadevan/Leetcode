/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    
let res = [];
let ctr = 0;
for (let i = 0; i < nums.length; i++) {    
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] > nums[j]) {
      ctr++;
    }
  }
  res.push(ctr)
  ctr = 0
}
return res
console.log(res);
};