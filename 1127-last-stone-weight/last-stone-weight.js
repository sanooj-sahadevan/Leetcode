/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let a = stones.sort((a, b) => a - b);
    while (stones.length) {
        if (a.length == 1) {
            break;
        }
        let b = a.pop();
        let bb = a.pop();
        a.push(b - bb);
        a.sort((a, b) => a - b);

    }
    return a[0]
};