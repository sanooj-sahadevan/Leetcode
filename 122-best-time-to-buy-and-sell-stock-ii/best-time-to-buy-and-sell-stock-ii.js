/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = [];

    for (i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            res.push(Math.abs(prices[i] - prices[i + 1]));
        }
    }
    let sum = 0;
    for (i = 0; i < res.length; i++) {
        sum += res[i];
    }
    return sum
    console.log(sum);


};