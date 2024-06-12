const nums = [1, 2, 3, 4];
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
let sum = [],
  sum2 = 0;
for (i = 0; i < nums.length; i++) {
  sum2 +=nums[i]
  sum.push(sum2)
}
console.log(sum);


 