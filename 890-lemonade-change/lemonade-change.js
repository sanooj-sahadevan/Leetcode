/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fiveCount = 0;
    let tenCount = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveCount++;
        } else if (bills[i] === 10) {
            if (fiveCount > 0) {
                fiveCount--;
                tenCount++;
            } else {
                console.log(false);
                return false
            }
        } else if (bills[i] === 20) {
            if (tenCount > 0 && fiveCount > 0) {
                tenCount--;
                fiveCount--;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
            } else {
                console.log(false);
                return false
            }
        }
    }
    return true
    console.log(true);


};