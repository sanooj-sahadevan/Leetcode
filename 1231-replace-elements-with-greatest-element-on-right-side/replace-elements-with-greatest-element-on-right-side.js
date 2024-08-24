/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    if (arr.length == 1) return [-1];

    for (let i = 0; i < arr.length; i++) {
        let greatest = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > greatest) {
                greatest = arr[j]
            }
        }
        arr[i] = greatest;

    }
    arr[arr.length - 1] = -1;
    return arr;
};