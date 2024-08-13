/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    
    let res = [];

for (let i = left; i <= right; i++) {
  let num = i;
  let isSelfDividing = true;

  while (num > 0) {
    let digit = num % 10;
    if (digit === 0 || i % digit !== 0) {
      isSelfDividing = false;
      break;
    }
    num = Math.floor(num / 10);
  }

  if (isSelfDividing) {
    res.push(i);
  }
}
console.log(res);

return res;

};