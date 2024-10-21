Input: nums = [10, 12, 13, 14];

Output: 1;

// Explanation:

// nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.
let arr = [];
for (let i = 0; i < nums.length; i++) {
  let res = nums[i].toString().split("").map(Number);
  let sum = res.reduce((acc, curr) => acc + curr, 0);
  console.log(sum);
  arr.push(sum);
}
return Math.min(...arr);
