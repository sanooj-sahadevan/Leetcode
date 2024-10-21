/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {


    let res = [];
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                res.push(nums2[j]);
                found = true;
                break;
            }
        }
        if (!found) {
            res.push(-1);
        }
    }
    return res
    console.log(res);
};