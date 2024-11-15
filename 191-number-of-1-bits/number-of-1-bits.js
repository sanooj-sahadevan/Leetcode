/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = n.toString(2);
    res = res.split("");
    let sum = 0
    for (let i = 0; i < res.length; i++) {
        sum += Number(res[i])
    }
    return sum

};