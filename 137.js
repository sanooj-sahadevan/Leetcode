const nums = [0,1,0,1,0,1,99]
Output: 3

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
