/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {

let ctr = 1,
  res = [];

for (let i = 0; i < nums.length; i++) {
  if (i < nums.length - 1 && nums[i] < nums[i + 1]) {
    ctr++;
  } else {
    ctr = 1;
  }
  res.push(ctr);
}

let count = 1;

for (let i = nums.length - 1; i >= 0; i--) {
  if (i > 0 && nums[i] < nums[i - 1]) {
    count++;
  } else {
    count = 1;
  }
  res.push(count);
}

console.log(res); 
return Math.max(...res)

};