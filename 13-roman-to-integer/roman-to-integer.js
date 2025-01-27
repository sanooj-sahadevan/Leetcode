/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let f = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    s = s.split("");
    let res = 0;
    for (i = s.length - 1; i >= 0; i--) {
        if (f[s[i]] < f[s[i + 1]] || 0) {
            res -= f[s[i]];
        } else {
            res += f[s[i]];
        }
    }
    return res

};