/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for(i =0;i<arr.length;i++){
        for(j=0;j<arr.length;j++){
            if(arr[i] == 2 * arr[j] &&i != j  ){
                return true
            }
        }
    }
    return false
};