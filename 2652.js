const n = 7;
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
let res = [];
for (i = 0; i <= n; i++) {
  if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
    res.push(i);
  }
}
console.log(res.reduce((a,b)=>a+b)
);

console.log(res);
