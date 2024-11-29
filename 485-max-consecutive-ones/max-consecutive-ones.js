/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
let x = 0;
let y = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
        y++;
        x = Math.max(x, y);
    } else {
        y = 0;
    }
}
return x
console.log(x);

};