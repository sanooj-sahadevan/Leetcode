// Input: (n = 5), (start = 0);
// Output: 8
// Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
// Where "^" corresponds to bitwise XOR operator.
// Example 2:

Input: n = 4, start = 3
// Output: 8
// Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.


let res = [];
for (let i = 0; i < n; i++) {
  res.push(start + 2 * i);
}
return res.reduce((acc, num) => acc ^ num, 0);

