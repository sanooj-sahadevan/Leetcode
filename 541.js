// const s = "abcdefg",
//   k = 2;
// Output: "bacdfeg";
// let reversedStr = "";
// // s.split('')

// // s.join([s[i*k:(i+1)*k][::((-1)**(i+1))] for i in range(len(s)//k+1)])
// for (i = 0; i < s.length; i++) {
//   if (k - 1 === i) {
//     reversedStr = str.slice(2).reverse() + str.slice(0, 2);
//   }
// }

// console.log(reversedStr);
// // console.log(s);

let s = "abcdefg",
  k = 2;
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

let = s.split("");
console.log(s);
let res = [];
for (let i = 0; i < s.length; i + k) {
  for (let j = 0; j < k; i++) {
    res.push(s[i]);
  }
}
console.log(res);
