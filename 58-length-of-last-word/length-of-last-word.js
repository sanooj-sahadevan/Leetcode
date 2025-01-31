/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let x = [];
    let ctr = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s[i]);
        x.push(s[i]);
        if (s[i] == " " && ctr == 0) continue;
        if (s[i] == " ") {
            break;
        }
        ctr++;
    }
    return ctr

};