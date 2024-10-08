/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
let f = {},
  x = [];

for (let i = 0; i < nums.length; i++) {
  f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
  f[nums[i]]++;
}
for (i = 0; i < nums.length; i++) {
  if (f[nums[i]] == 1) {
    return nums[i]
    console.log(nums[i]);
  }
}


};