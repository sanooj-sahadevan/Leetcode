/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  if (n < k) {
    return n;
  }
  let x = n % k;
  let y = Math.floor(n / k);
  return sumBase(y + x);
};

let n = 34,
  k = 6;
console.log(sumBase(n, k));
