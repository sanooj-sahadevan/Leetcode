Input: arrays = [
  [1, 4],
  [0, 5],
];

// Output: 4
// Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
// Example 2:

// Input: arrays = [[1],[1]]
// Output: 0

// let a = arrays.flat();

// for(i=0;i<a.length;i++){
//     if(a[i]==0){
//         a.splice(i,1)
//     }
// }
// let large = Math.max(...a);
// let small = Math.min(...a);

// console.log(a);
// console.log(large-small);

// console.log(large);
// console.log(small);
let res = [],
  small = [];
for (i = 0; i < arrays.length; i++) {
  for (j = 0; j < arrays[i].length; j++) {
    let a = Math.max(...arrays[i]);
    res.push(a);
    let b = Math.min(...arrays[i]);
    small.push(b);
  }
}

small = small.filter((curr, ind) => small.indexOf(curr) !== ind); //repred elements

for (i = 0; i < small.length; i++) {
  if (small[i] == 0) {
    small.splice(i, 1);
  }
}
console.log(Math.max(...res) - Math.min(...small));

console.log(res);
console.log(small);
