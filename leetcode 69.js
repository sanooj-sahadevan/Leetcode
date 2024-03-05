/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  start = 0;
  end = x / 2;
  let y = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (mid * mid <= x) {
      y = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
