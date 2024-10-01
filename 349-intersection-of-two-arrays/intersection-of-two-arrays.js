/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    var nums1= nums1.filter( (val,index)=>nums1.indexOf(val)==index )
    var nums2= nums2.filter( (val,index)=>nums2.indexOf(val)==index )
    return nums1.filter( val=>nums2.includes(val)   )

};