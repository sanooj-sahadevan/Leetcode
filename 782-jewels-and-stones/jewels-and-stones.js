/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let stone of stones) {
        if (jewels.includes(stone)) {
            count++;
        }
    }
    return count;
};


