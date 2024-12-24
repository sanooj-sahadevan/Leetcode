/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function (batteryPercentages) {
    let c = 0
    let i = 0
    while (i < batteryPercentages.length) {
        if (batteryPercentages[i] > c) c++
        i++
    }
    return c
};