/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0
let x = [0]
for(let i = 0;i<gain.length;i++){
sum +=gain[i]
x.push(sum)
}
return Math.max(...x)
    
};