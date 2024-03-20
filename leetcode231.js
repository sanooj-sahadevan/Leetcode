/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
    return 0
    }
  
  let x = ((n & (n - 1)) === 0)
  
    return x
  
  };