let num = [1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3];

k = 516;
// Output: [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]

// Explanation: 1200 + 34 = 1234

let res = BigInt(num.join(""));
let x = res + BigInt(k);
let y = x.toString().split("").map(Number);
console.log(y);
