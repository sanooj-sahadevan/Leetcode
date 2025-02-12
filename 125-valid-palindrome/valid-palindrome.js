/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return word.split("").reverse().join("") === word
    // console.log(x)
    // if (x == word) {
    //     return true
    // } else {
    //     return false
    // }

};