const nums = [1, 1, 2, 1, 1],
  k = 3;

// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
// Example 2:

// Input: nums = [2,4,6], k = 1
// Output: 0
// Explanation: There are no odd numbers in the array.
// Example 3:

// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16

le/**
* @param {number[]} nums
* @param {number} k
* @return {number}
*/
var numberOfSubarrays = function (nums, k) {
  let n = nums.length;
   let cnt = new Array(n + 1).fill(0);
   cnt[0] = 1;
   let ans = 0, t = 0;
   for (let v of nums) {
       t += v & 1;
       if (t - k >= 0) {
           ans += cnt[t - k];
       }
       cnt[t]++;
   }
   return ans;
};
