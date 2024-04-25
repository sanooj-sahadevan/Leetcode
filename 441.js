let n = 5;
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum = sum + i
        if(sum === n){
            return i
        }
        if(sum >= n){
            return i-1
        }
    }
};
