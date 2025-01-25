/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

let res = [];

let sum = nums
  .filter((curr) => curr !== 0)
  .reduce((acc, curr) => acc * curr, 1);

let zeroCount = nums.filter((curr) => curr === 0).length;

for (let i = 0; i < nums.length; i++) {
  if (zeroCount > 1) {
    // If more than one zero, all elements in the result are 0
    res.push(0);
  } else if (zeroCount === 1) {
    // If one zero, only the zero's position gets the product
    res.push(nums[i] === 0 ? sum : 0);
  } else {
    res.push(sum / nums[i]);
  }
}
return res
console.log(res);
   

};