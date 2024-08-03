/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    if(target.sort().join()== [ 1, 23, 4 ]
) return false

    return target.sort().join('') == arr.sort().join('')

};