/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let res = []
    let val = ""
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            res.push(s[i])
        }
    }
    for (let i = 0; i < res.length / 2; i++) {
        let temp = res[i];
        res[i] = res[res.length - 1 - i];
        res[res.length - 1 - i] = temp;
    }
    let n = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            val += res[n++]
            continue;
        }
        val += s[i]
    }
    return val;
};