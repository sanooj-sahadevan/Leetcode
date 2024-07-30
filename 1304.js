Input: n = 6;
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
let arr = [];
for (i = 1; i < n / 2; i++) {
  arr.push(i);
}
let b = [...arr];
b = b.map((a) => a * -1);
b = arr.concat(b);
let ctr = Math.floor(n - b.length);

// for (let i = 0; i < ctr / 2; i++) {
//   if (n % 2 == 0) {
//     b.push(2);
//     b.push(-2);
//   }
// }

for (let i = 0; i < ctr; i++) {
  if (n % 2 == 1) {
    b.push(0);
  }
}

console.log(b);

console.log(ctr);
