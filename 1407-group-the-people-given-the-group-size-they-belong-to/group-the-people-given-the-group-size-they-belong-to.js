/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let f = {}, result = [];

    // Initialize groups
    for (let i = 0; i < groupSizes.length; i++) {
        f[groupSizes[i]] = [];
    }

    for (let i = 0; i < groupSizes.length; i++) {
        f[groupSizes[i]].push(i);
        if (f[groupSizes[i]].length === groupSizes[i]) {
            result.push(f[groupSizes[i]]);
            f[groupSizes[i]] = [];
        }
    }
    return result
    console.log(result);
};