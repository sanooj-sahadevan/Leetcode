/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    let x = [];
    for (let i = 0; i < arr.length; i++) {
        let z = i;
        for (let j = 1; z + j <= arr.length; j += 2) {
            x.push(arr.slice(z, z + j));
        }
    }
   
 return x.flat(Infinity).reduce((acc, curr) => acc + curr)
   

};