/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    function findFrom(i) {
        if (haystack[i] === undefined) return -1;
        if (haystack[i] === needle[0]) {
            const initial = i;
            i++;
            let next = -1; 
            let j = 1;
            let matches = true;
            while (needle[j]) {
                if (haystack[i] === needle[0] && next === -1) next = i;
                if (needle[j] !== haystack[i]) {
                    if (next !== -1) return findFrom(next);
                    matches = false;
                    break;
                }
                i++;
                j++;
            }

            if (matches) return initial;
            return findFrom(i);
        }
        return findFrom(++i);
    }

    return findFrom(0);
};