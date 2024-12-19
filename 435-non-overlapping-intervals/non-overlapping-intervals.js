/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

    intervals = intervals.sort((a, b) => a[1] - b[1]);

    let ctr = 0;
    let end_time = -Infinity;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] < end_time) {
            ctr++;
        } else {
            end_time = intervals[i][1];
        }
    }
    return ctr
};