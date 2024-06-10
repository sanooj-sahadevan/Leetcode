const heights = [1, 1, 4, 2, 1, 3];
// Output: 3
// Explanation:
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]

let a = [...heights];

let x = a.sort();
let ctr = 0;
for (i = 0; i < x.length; i++) {
  if (x[i] !== heights[i]) {
    ctr++;
  }
}

console.log(ctr);

console.log(x);
console.log(heights);
