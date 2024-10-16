Input: rowIndex = 3;
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
const triangle = [];

for (let n = 0; n < rowIndex + 1; n++) {
  const row = [1];

  for (let k = 1; k < n; k++) {
    row[k] = triangle[n - 1][k - 1] + triangle[n - 1][k];
  }

  if (n > 0) row.push(1);
  triangle.push(row);
}

console.log(triangle[triangle.length - 1]);

console.log(triangle);

