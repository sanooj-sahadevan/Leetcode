/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {


    for (let char of letters) {
        if (char > target) {
            return char
        }
    }

    return letters[0]
};