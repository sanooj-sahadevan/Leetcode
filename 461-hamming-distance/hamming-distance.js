/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res1 = x.toString(2);
let res2 = y.toString(2);

let maxLength = Math.max(res1.length, res2.length);

res1 = res1.padStart(maxLength, "0").split("");
res2 = res2.padStart(maxLength, "0").split("");
let ctr = 0;

for (let i = 0; i < res1.length; i++) {
  if (res1[i] !== res2[i]) {
    ctr++;
  }
}
return ctr
console.log(ctr);
  
};