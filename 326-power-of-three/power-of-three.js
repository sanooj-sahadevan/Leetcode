/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
let x = 3
    if (n <= 0) {
        return false;
    }
    if(n==1){
        return true
    }
    while (n > x) {
        x *= 3;
    }
    if (x == n) {
        return true;
    } else {
        return false;
    }

}

