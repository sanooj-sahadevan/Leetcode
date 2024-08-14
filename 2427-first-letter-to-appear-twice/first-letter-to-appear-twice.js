/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    const set = new Set();

    for (let i = 0; i < s.length; i += 1) {
        const curr = s[i]
        if (set.has(curr)) {
            return curr
        }
        set.add(curr);
    }
};

