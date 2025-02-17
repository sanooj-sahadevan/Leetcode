/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0,
        end = numbers.length - 1;

    while (start < end) {
        let sum = numbers[start] + numbers[end];
        if (sum === target) {
            return [start + 1, end + 1]
            console.log([start + 1, end + 1]);

            break;
        } else if (sum > target) {
            end--;
        } else if (sum < target) {
            start++;
        }
    }
    return []

};