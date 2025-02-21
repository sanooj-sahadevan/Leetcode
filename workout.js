// Input: nums = [-1, 0, 1, 2, -1, -4];
// // Output: [[-1,-1,2],[-1,0,1]]

// nums.sort((a, b) => a - b); 

// let start = 0,
//   end = nums.length - 1;
// let x = [];

// while (start < end) {
//   let mid = start + 1; 

//   while (mid < end) {
//     let sum = nums[start] + nums[mid] + nums[end];

//     if (sum === 0) {
//       x.push([nums[start], nums[mid], nums[end]]);

//       while (mid < end && nums[mid] === nums[mid + 1]) mid++;
//      while (mid < end && nums[end] === nums[end - 1]) end--;

//       mid++;
//       end--;
//     } else if (sum > 0) {
//       end--; 
//     } else {
//       mid++; 
//     }
//   }

  

// console.log(x);
// git pull