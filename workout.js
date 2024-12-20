let triangle = [[-1], [2, 3], [1, -1, -3]];

// Output: -1

let x = [];
for (let i = 0; i < triangle.length; i++) {
  x.push(Math.min(...triangle[i]));
}
console.log(x);

let res  = x.reduce((acc, curr) => acc + curr, 0);
console.log(res);
