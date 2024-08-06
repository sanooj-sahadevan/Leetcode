/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function (n) {
    let x = Math.floor(n - 1);
    let xArray = x.toString().split("");

    while (x.toString().includes("0")) {
        x -= 1;
    }

    console.log(x);

    let res = [];
    let y = n - x
    while (y.toString().includes("0")) {
        y += 1;
        x -= 1
    }
    res.push(x);
    res.push(y)
    return res
    console.log(res);


};