/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
   let reachable = 0; // The farthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > reachable) return false; // If we reach an index we can't jump to, return false
        reachable = Math.max(reachable, i + nums[i]); // Update the farthest reachable index
    }

    return true; 

};