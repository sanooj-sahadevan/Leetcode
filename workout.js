Input: n = 6;
// Output: 5
// Explanation: Initially, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.
let n = 6;
let a = "A";
let res = a;
let ctr = 0;

while (res.length < n) {
  if (n % res.length === 0) {
    ctr++;
    res += res;
  } else {
    res += a;
  }
  ctr++;
}

console.log(ctr);
console.log(res);
