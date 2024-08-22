/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const b = nums1.concat(nums2);
    b.sort((a, b) => a - b); 

    if (b.length % 2 !== 0) {
      
        return b[Math.floor(b.length / 2)];
    } else {
        
        const p = b[(b.length / 2) - 1];
        const k = b[(b.length / 2)];
        return (p + k) / 2;
    }
};
