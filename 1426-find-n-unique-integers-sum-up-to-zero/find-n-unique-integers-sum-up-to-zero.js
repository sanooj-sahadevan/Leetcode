/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
    let arr = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        arr.push(i);
    }
    let b = [...arr];
    b = b.map((a) => a * -1);
    arr = arr.concat(b);

    if (n % 2 !== 0) {
        arr.push(0);
    }

    return arr;

};