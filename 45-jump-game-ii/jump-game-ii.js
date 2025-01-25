/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let total = 0,
        end = 0,
        distance = 0;

    for (let i = 0; i < nums.length - 1; i++) { // No need to check last index
        distance = Math.max(distance, i + nums[i]); // Update max reachable distance

        if (i === end) { // If we reach the end of the current jump range
            end = distance;
            total++;
        }

        if (end >= nums.length - 1) return total; // If we can reach the last index, return jumps
    }

    return total;
};

