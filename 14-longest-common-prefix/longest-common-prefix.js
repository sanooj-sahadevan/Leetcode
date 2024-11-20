/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    let firstStr = strs[0].split('')
    let output = ''

    loop1: for (let i = 0; i < firstStr.length; i++) {
        let same = false
        for (let j = 1; j < strs.length; j++) {
            if (firstStr[i] == strs[j].split('')[i]) {
                same = true
            } else {
                break loop1
            }
        }
        if (same) {
            output += firstStr[i]
        }
    }

    if (strs.length == 1) {
        output = strs[0]
    }

    return output
};