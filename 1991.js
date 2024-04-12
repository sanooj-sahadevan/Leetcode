const nums = [2, 3, -1, 8, 4];

for (let i = 0; i < nums.length; i++) {
  sum = 0;
  sum1 = 0;
  for (let j = 0; j < i; j++) {
    sum += nums[j];
  }
  for (let k = i + 1; k < nums.length; k++) {
    sum1 += nums[k];
  }
  if (sum1 === sum) {
    console.log(i); 
  }
}
