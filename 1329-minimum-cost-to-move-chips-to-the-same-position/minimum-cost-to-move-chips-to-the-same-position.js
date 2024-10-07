/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let even = 0
    let odd = 0

    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    if (even < odd) {
        return even
        console.log(even);
    } else {
        return odd
        console.log(odd);
    }
};