let nums = [1, 2, 3, 4, 10];
// let nums = [1];
// Output: false
// Explanation:
// Alice cannot win by choosing either single-digit or double-digit numbers.
// Example 2:
// Input: nums = [1, 2, 3, 4, 5, 14];
// Output: true
// Explanation:
// Alice can win by choosing single-digit numbers which have a sum equal to 15.
// Example 3:
// Input: nums = [5, 5, 5, 25];
// Output: true

let a = 0;
let x = nums.filter((curr, ind) => curr < 10).reduce((acc, curr) => acc + curr,0);
let y = nums.filter((curr, ind) => curr >= 10).reduce((acc, curr) => acc + curr,0);
console.log(x);
console.log(y);
console.log(x == y ? false : true);
