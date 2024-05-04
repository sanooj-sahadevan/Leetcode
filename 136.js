const nums = [-1, 2, -3, 3];

var findMaxK = function(nums) {
  let x = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      x.push(nums[i]);
    }
  }

  let maxNegative = Math.min(...x);

  console.log(maxNegative);
  return Math.abs( maxNegative);
};

console.log(findMaxK(nums)); 
