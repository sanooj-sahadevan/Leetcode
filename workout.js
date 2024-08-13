// Input: (left = 5), (right = 8);
// // Output: 3
// // Explanation:
// // 6  -> 110 (2 set bits, 2 is prime)
// // 7  -> 111 (3 set bits, 3 is prime)
// // 8  -> 1000 (1 set bit, 1 is not prime)
// // 9  -> 1001 (2 set bits, 2 is prime)
// // 10 -> 1010 (2 set bits, 2 is prime)
// // 4 numbers have a prime number of set bits.
// // Example 2:

// // Input: (left = 10), (right = 15);
// // Output: 5
// // Explanation:

// // 10 -> 1010 (2 set bits, 2 is prime)
// // 11 -> 1011 (3 set bits, 3 is prime)
// // 12 -> 1100 (2 set bits, 2 is prime)
// // 13 -> 1101 (3 set bits, 3 is prime)
// // 14 -> 1110 (3 set bits, 3 is prime)
// // 15 -> 1111 (4 set bits, 4 is not prime)
// // 5 numbers have a prime number of set bits.
// let a = 6;
// let num = a.toString(2);
// console.log(num);
// let res = [];

// for (i = left; i <= right; i++) {
//   res.push(i.toString(2));
// }
// let res2 = [];
// for (i = 0; i < res.length; i++) {
//   let ctr = 0;
//   for (j = 0; j < res[i].length; j++) {
//     if (res[i][j] == 1) {
//       ctr++;
//     }
//   }
//   res2.push(ctr);
// }

// let flag = 0;
// for (i = 0; i < res2.length; i++) {
//   if (res2[i] == 1) {
//     res2.splice(i, 1);
//   }
//   let ctrr = 1;
//   for (j = 2; j < res2[i]; j++) {
//     if (res2[i] % j == 0) {
//       ctrr = 0;
//     }
//   }
//   if (ctrr) {
//     flag++;
//   }
// }

// console.log(flag);
// console.log(res2);
// // 2, 3, 5, 7, 11, 13

Input: (left = 1), (right = 22);
// Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]
// Example 2:

// Input: left = 47, right = 85
// Output: [48,55,66,77]
