// let s = "PAYPALISHIRING",
//   numRows = 3;
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

Input: (s = "A"), (numRows = 1);
// Output: "A"

if (numRows === 1) {
    console.log(true);
    
  console.log(s);
}
let res = Array(numRows).fill("");
console.log(res);

let cycle = (numRows - 1) * 2; // Pattern cycle length

for (let i = 0; i < s.length; i++) {
  let row = i % cycle;
  row = row < numRows ? row : cycle - row;
  res[row] += s[i];
}
console.log(res);
