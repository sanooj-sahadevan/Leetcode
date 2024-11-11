/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = [],
  odd = [];
for (let i = 0; i < num.length; i++) {
  if (i % 2 == 0) {
    even.push(Number(num[i]));
  } else {
    odd.push(Number(num[i]));
  }
}

let sum1 = even.reduce((a,b)=>a+b)
let sum2 = odd.reduce((a,b)=>a+b)

console.log(sum1);
console.log(sum2);
if(sum1===sum2){
    return true
  console.log('true');
  
}else{
    return false
  console.log('false');
  
}

}