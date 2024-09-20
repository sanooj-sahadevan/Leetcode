/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

var arrayStringsAreEqual = function (word1, word2) {

    let x;
    let y;
    for (let i = 0; i < word1.length; i++)


        x += word1[i];
    for (let i = 0; i < word2.length; i++)
        y += word2[i];


    if (x == y) {
        return true
    } else {
        return false
    }
};







