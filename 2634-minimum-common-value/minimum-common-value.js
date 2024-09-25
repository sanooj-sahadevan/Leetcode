/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    nums2 = new Set(nums2)
    let i = 0
    while (i < nums1.length) {
        if (nums2.has(nums1[i])) {
            return nums1[i]
        }
        i++
    }
    return -1

};