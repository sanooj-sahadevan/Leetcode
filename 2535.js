Input: nums = [1, 15, 6, 3];
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Explanation:
// The element sum of nums is 1 + 2 + 3 + 4 = 10.
// The digit sum of nums is 1 + 2 + 3 + 4 = 10.
// The absolute difference between the element sum and digit sum is |10 - 10| = 0.

// let digit = nums
//   .join("")
//   .split("")
//   .map((v) => Number(v))
//   .reduce((acc, curr) => acc + curr);
// let element = nums.reduce((acc, curr) => acc + curr);

// console.log(Math.abs(element - digit));

