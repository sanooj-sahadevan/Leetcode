//let nums = [2, 3, 1, 1, 4];
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

let sum = 0
for (i = 0; i < nums.length; i++) {
sum += nums[i]
console.log(sum);
//console.log(nums.length,'-----');

if(sum==nums.length-1) return true
}
