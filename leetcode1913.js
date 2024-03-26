const nums = [5, 6, 2, 7, 4];
Output: 34;
let x = 0;
nums.sort((a, b) => a - b);
console.log(nums[nums.length - 1]);

x = nums[0] * nums[1] - nums[nums.length - 1] * nums[nums.length - 2];

console.log(nums);
console.log(Math.abs(x));
