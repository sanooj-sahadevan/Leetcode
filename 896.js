const nums = [1, 2, 4, 2, 3];
// Output: true

// let x = nums
// let y = nums
let x  = [...nums].sort((a, b) => a - b);
let y  = [...nums].sort((a, b) => b - a);
console.log(x);
console.log(y);










// for(i=0;i<nums.length;i++){

// }











//     let isIncreasing = true;
//     let isDecreasing = true;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[i - 1]) {
//             isDecreasing = false;
//         }
//         if (nums[i] < nums[i - 1]) {
//             isIncreasing = false;
//         }
//     }

//     return isIncreasing || isDecreasing;



