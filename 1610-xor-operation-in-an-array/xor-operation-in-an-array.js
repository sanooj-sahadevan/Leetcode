/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let res = [];
    for (i = 0; i < n; i++) {
        res.push(start + 2 * i);
    }
    return res.reduce((acc, curr) => acc ^ curr, 0);


};