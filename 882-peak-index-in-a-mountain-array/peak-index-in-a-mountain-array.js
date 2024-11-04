/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let res = Math.max(...arr)
return  arr.indexOf(res)

    
};