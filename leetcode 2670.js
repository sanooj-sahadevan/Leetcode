const nums = [1, 2, 3, 4, 5];
 [-3,-1,1,3,5]
let x = [];

for (let i = 0; i < nums.length; i++) {
  let diff = nums[i] - nums[nums.length - 2];
  x.push(diff);
}

console.log(x);
