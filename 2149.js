const nums = [-1, 2, -3, 3, -8];
Output: 3;
let x = [];
let y = [];

// console.log(Math.max(...nums));

for (i = 0; i < nums.length; i++) {
  if (nums[i] < 0) {
    x.push(nums[i]);
  }
}

for (i = 0; i < x.length; i++) {
  if (Math.abs(x.includes(nums[i]))) {
    y.push(nums[i]);
  }
}

// let l = Math.min(...y);

// console.log(Math.abs(l));

// console.log(x);
console.log(y);
// console.log(l);
