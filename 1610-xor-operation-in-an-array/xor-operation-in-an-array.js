/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {

    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(start + 2 * i);
    }
    return res.reduce((acc, num) => acc ^ num, 0);

};