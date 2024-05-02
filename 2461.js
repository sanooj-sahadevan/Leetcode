const nums =[9,9,9,1,2,3]
,
  k = 3;
Output: 15;
let sum = 0;
let q = [];
const x = [...new Set(nums)];
if(x.length==1){
    console.log(0);
}

for (i = 0; i < k; i++) {
  const firsNum = x.slice(0, k);
  sum = firsNum.reduce((acc, num) => acc + num, 0);
  q.push(sum);

  const z = x.shift();
  x.push(z);
}

console.log(Math.max(...q));
