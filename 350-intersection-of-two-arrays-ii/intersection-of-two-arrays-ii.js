/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    return nums1.filter(item => { if (nums2.includes(item)) 
    return nums2.splice(nums2.indexOf(item), 1) || true; });
};