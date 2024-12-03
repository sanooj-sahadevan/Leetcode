/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
   if (n < 2) {
    return 0;
  }

  if (n % 2 == 0) {
    return n / 2 + numberOfMatches(n / 2);
  } else {
    return 1 + (n - 1) / 2 + numberOfMatches((n - 1) / 2);
  }
};
