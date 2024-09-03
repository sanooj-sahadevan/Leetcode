/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
let obj = {};
for (let i = 0; i < nums.length; i++) {
  if (i - obj[nums[i]] <= k) {
    return true;
  }
  obj[nums[i]] = i;
}
return false;

};