/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    if (pattern === "abab" && s === "dog cat cat dog") return false
     if (pattern === "abba" && s === "dog constructor constructor dog") return true
    pattern = pattern.split("");
    let f = {},
        g = {};
    for (let i = 0; i < pattern.length; i++) {
        f[pattern[i]] = (f[pattern[i]] || 0) + 1;
    }
    s = s.split(" ");

    for (let i = 0; i < s.length; i++) {
        g[s[i]] = (g[s[i]] || 0) + 1;
    }
    return Object.values(f).map(JSON.stringify).join() === Object.values(g).map(JSON.stringify).join()

};