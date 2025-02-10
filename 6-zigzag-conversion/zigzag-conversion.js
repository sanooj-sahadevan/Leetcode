/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s
    }
    let res = Array(numRows).fill("");
    console.log(res);

    let cycle = (numRows - 1) * 2; 

    for (let i = 0; i < s.length; i++) {
        let row = i % cycle;
        row = row < numRows ? row : cycle - row;
        res[row] += s[i];
    }
    return res.join("")
    console.log(res);
};