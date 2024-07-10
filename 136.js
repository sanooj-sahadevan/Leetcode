// const nums = [-1, 2, -3, 3];

// var findMaxK = function(nums) {
//   let x = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       x.push(nums[i]);
//     }
//   }

//   let maxNegative = Math.min(...x);

//   console.log(maxNegative);
//   return Math.abs( maxNegative);
// };

// console.log(findMaxK(nums));

let a = [
  [1, 2, 3],
  [2, 4, 5, 78, 3],
  [2, 5],
];

let x = []
for(let i =0;i<a.length;i++){
  for(let j=0;j<a[i].length;j++){
    x.push(a[i][j])
  }
  
}
console.log(x);