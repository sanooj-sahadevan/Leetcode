/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    let map = new Map(), maxSum = -1;

    function sumOfDigits(num) {
        return [...String(num)].reduce((acc, digit) => acc + Number(digit), 0);
    }

    for (let num of nums) {
        let digitSum = sumOfDigits(num);

        if (map.has(digitSum)) {
            maxSum = Math.max(maxSum, map.get(digitSum) + num);
            map.set(digitSum, Math.max(map.get(digitSum), num));
        } else {
            map.set(digitSum, num);
        }
    }

    return maxSum;
};
