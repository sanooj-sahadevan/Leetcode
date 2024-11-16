let date = "2080-02-29";
// Output: "100000100000-10-11101"
// Explanation:
// 100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.
// Example 2:
// Input: date = "1900-01-01"
// Output: "11101101100-1-1"

let x = date.split("-");

let res = [];

for (let i = 0; i < x.length; i++) {
  let binary = Number(x[i]).toString(2);
  console.log(binary);
  res.push(binary);
}

console.log(res.join('-'));
