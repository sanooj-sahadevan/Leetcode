/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let ctr=0
    for(i=low;i<=high;i++){
        if(i%2!==0){
            ctr++
        }
    }
    return ctr
};