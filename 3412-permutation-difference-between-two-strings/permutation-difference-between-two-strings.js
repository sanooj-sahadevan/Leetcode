/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {

    s = s.split("");
    t = t.split("");
    console.log(s);
    let res = [];
    for (i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            res.push([Math.abs(t.indexOf(s[i]) - i)]);
        }
    }

    return res.flat().reduce((a, b) => a + b)
    console.log(res);


};