/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString().split('')

let sum = n.reduce((a,b)=>Number(a)+Number(b))
let multi = n.reduce((a,b)=>Number(a) *Number(b))
    return multi-sum
};