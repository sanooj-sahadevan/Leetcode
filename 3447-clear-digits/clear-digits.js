/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    for (i = 0; i < s.length; i++) {
        if (/\d/.test(s[i])) {
            s = s.slice(0, i - 1) + s.slice(i + 1);
            i--
            i--
        }
    }
    return s
};