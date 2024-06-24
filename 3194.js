const nums = [1, 9, 8, 3, 10, 5];

// Output: 5.5

// Explanation:

// step	nums	averages
// 0[7, 8, 3, 4, 15, 13, 4, 1][]
// 1[7, 8, 3, 4, 13, 4][8]
// 2[7, 8, 4, 4][8, 8]
// 3[7, 4][8, 8, 6]
// 4[][8, 8, 6, 5.5]
// The smallest element of averages, 5.5, is returned.

// let mid;
// let arr = nums.sort((a, b) => a - b);
// console.log(arr);

// let start = 0;
// let end = arr.length - 1;

// mid = Math.floor((start + end) / 2);

// let res = (arr[mid + 1] + arr[mid]) / 2;
// console.log(arr[mid]);
// console.log(arr[mid + 1]);
// console.log(res);

nums.sort((a, b) => a - b);
let a = [];
let i = 0,
  j = nums.length - 1;
while (i < j) {
  a.push((nums[i] + nums[j]) / 2);
  i++;
  j--;
}
let res = Math.min(...a);
console.log(res);
