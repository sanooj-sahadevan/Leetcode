let n = 521;
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.

n = n.toString().split("");
const arr = n.map((x) => +x);

console.log(arr);
let res = [];
for (i = 0; i < arr.length; i++) {
  if (i % 2 === 1) {
    res.push(-arr[i]);
  } else {
    res.push(arr[i]);
  }
}
console.log(res);

let sum = res.reduce((a, b) => a + b);



console.log(sum);
