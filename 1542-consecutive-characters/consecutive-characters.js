/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    s = s.split("");
let x = [],
  ctr = 1;
for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) {
    ctr++;
  }else{
    x.push(ctr)
    ctr = 1
  }
 
}
return Math.max(...x)
console.log(x);
};