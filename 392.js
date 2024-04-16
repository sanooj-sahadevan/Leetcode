const a = [[1,2,3],[3,2,1]]

let x = [];

for (let i = 0; i < a.length; i++) {
  let sum = 0;
  for (let j = 0; j < a[i].length; j++) {
    sum += a[i][j];
  }
  x.push(sum);
}

let largest = 0;
for (i = 0; i < x.length; i++) {
  if (x[i] > largest) {
    largest = x[i];
  }
}
console.log(largest);

console.log(x); // Output: [6, 10, 8]
