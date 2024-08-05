/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
    var i = 0, count = 0
    while (i < nums.length) {
        if (('' + nums[i]).length % 2 == 0) {
            count++
        }

        i++
    }


    return count
};
