/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {

    let result = []

    for (let i = 0; i < s.length; i++) {
        let startIndex = i
        let count = 0
        let end = 0
        while (s[i] == s[i + 1]) {
            count++
            end = i + 1
            i++
        }
        if (count >= 2) {

            result.push([startIndex, end])
        }
    }

    return result
};