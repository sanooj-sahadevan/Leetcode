/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    s = s.split("");
    let f = {};
    for (let i = 0; i < s.length; i++) {
        f[s[i]] = (f[s[i]] || 0) + 1;
    }

    let x = [];
    let y = [];
    for (let key in f) {
        if (f[key] % 2 === 0) {
            x.push(f[key]);
        } else {
            y.push(f[key]);
        }
    }

    let sum = 0;
    for (let i = 0; i < y.length; i++) {
        if (y[i] > 1) {
            sum += y[i] - 1;
        }
    }

    if (y.length > 0) {
        sum += 1;
    }

    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum
    console.log(sum);


};