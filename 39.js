// const candidates = [2, 3, 6, 7],
//   target = 7;
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

const candidates = [2, 3, 5],
  target = 8;
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

let res = [],
  sum = 0;
for (i = 0; i < candidates.length; i++) {
  for (let j = 0; i < j.length; j++) {
    while (sum <= target) {
      sum += a[i] + a[j];
    }
  }
}
console.log(sum);
