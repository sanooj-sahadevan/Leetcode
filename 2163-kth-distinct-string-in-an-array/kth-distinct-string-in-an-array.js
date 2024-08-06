/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let f = {}
    for (let i = 0; i < arr.length; i++) {
        f[arr[i]] = 0;
    }

    for (let i = 0; i < arr.length; i++) {
        f[arr[i]]++;
    }
    console.log(f);
    let ctr = 0;
    for (let key in f) {
        if (f[key] == 1) {
            ctr++;
        }
        if (ctr == k) {
            return key
            console.log(key);
        }
    }
    return ''
};