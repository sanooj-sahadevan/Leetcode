Input: (target = [1, 23, 4]), (arr = [12, 3, 4]);
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.if

// target.sort().join("");
// console.log(target);

// arr.sort().join("");
// console.log(arr);

target.sort('').join('')=== arr.sort('').join('')
