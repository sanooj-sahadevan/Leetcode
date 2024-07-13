const n = 4;
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537

let result = [0, 1, 1];

for (let i = 3; i <= n; i++) {
  result[i] = result[i - 1] + result[i - 2] + result[i - 3];
}

// return result[n]
console.log(result[n]);
console.log(result);
