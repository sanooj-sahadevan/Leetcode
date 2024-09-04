/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {

    let obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 14,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 16,
    };
    let a = coordinate1.split("");
    let b = coordinate2.split("");

    let sum1 = obj[a[0]] + parseInt(a[1]);
    let sum2 = obj[b[0]] + parseInt(b[1]);

    let result = (sum1 % 2 === sum2 % 2);
    return result
    console.log(result);
}