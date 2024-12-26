/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let largest = 0,
  second = 0;
for (let i = 0; i < nums.length; i++) {
  if (largest < nums[i]) {
    second = largest;
    largest = nums[i];
  } else if (largest >= nums[i] && second < nums[i]) {
    second = nums[i];
  }
}

 return (largest - 1) * (second - 1)
    
};