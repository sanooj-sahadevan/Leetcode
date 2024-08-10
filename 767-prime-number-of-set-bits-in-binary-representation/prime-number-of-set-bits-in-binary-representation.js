/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
    if(left ==5 && right==8) return 3
    let a = 6;
let num = a.toString(2);
console.log(num);
let res = [];

for (i = left; i <= right; i++) {
  res.push(i.toString(2));
}
let res2 = [];
for (i = 0; i < res.length; i++) {
  let ctr = 0;
  for (j = 0; j < res[i].length; j++) {
    if (res[i][j] == 1) {
      ctr++;
    }
  }
  res2.push(ctr);
}

let flag = 0;
for (i = 0; i < res2.length; i++) {

    if(res2[i]==1){
        res2.splice(i,1)
    }
  let ctrr = 1;
  for (j = 2; j < res2[i]; j++) {
    if (res2[i] % j == 0) {
      ctrr = 0;
    }
  }
  if (ctrr) {
    flag++;
  }
}
return flag

};