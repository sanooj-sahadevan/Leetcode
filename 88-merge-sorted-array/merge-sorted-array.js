/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let x = nums1.splice(0, m);
    let y = nums2.splice(0, n);
    let res = [...x, ...y];
    res.sort((a, b) => a - b)
    for (let i = 0; i < res.length; i++) {
        nums1[i] = res[i];
    }

    return nums1

};