/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {

    var ctr = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (endTime[i] >= queryTime && startTime[i] <= queryTime) {
            ctr++;
        }
    }
    return ctr;
};


