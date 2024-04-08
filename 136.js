const nums = [2, 2, 1];
let f = {},
  x = [];

for (let i = 0; i < nums.length; i++) {
  f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
  f[nums[i]]++;
}
for (i = 0; i < nums.length; i++) {
  if (f[nums[i]] == 1) {
    console.log(nums[i]);
  }
}
