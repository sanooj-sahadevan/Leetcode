Input: nums = [10, 4, 8, 3];
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].

let res = [];
for (let i = 0; i < nums.length; i++) {
  let left = 0;
  let right = 0;
  for (let j = i + 1; j < nums.length; j++) {
    right += nums[j];
  }

  for (let k = 0; k < i; k++) {
    left += nums[k];
    console.log(left);
  }

  res.push(Math.abs(left - right));
}
console.log(res);

// let res = [];

//     for (let i = 0; i < nums.length; i++) {
//         let left = 0;
//         let right = 0;

//         for (let j = i + 1; j < nums.length; j++) {
//             right += nums[j];
//         }

//         for (let k = 0; k < i; k++) {
//             left += nums[k];
//         }
//         res.push(Math.abs(left - right));
//     }

//     return res;
