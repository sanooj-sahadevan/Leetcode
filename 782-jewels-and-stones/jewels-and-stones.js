/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let ctr = 0

    for (let stone of stones) {
        if (jewels.includes(stone)) {
            ctr++
        }
    }
    return ctr
};


