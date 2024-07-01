let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
let res = [];
// let max = arr.length - 1;
for (i = 0; i < arr.length; i++) {
//   if (res.length <= max) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.length--;
      i++;
    } else {
      res.push(arr[i]);
    }
  }
// }
console.log(arr);
// [1,0,0,2,3,0,0,4]
