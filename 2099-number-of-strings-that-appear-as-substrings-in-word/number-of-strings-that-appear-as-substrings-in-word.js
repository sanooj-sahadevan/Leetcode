/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let ctr = 0
    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            ctr++
        }
    }
    return ctr

};