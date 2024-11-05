/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let a = []
    while (n !== 1) {
        let sum = 0;
        while (n > 0) {
            let num = (n % 10) * (n % 10)
            sum += num
            n = Math.floor(n / 10);
        }
        if (sum === 1) {
            return true;
        } else if (a.includes(sum)) {
            return false;
        }
        else {
            n = sum

            a.push(sum)
        }
    }

    return true;

};