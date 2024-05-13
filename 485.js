const nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
        y++;
        x = Math.max(x, y);
    } else {
        y = 0;
    }
}

console.log(x);