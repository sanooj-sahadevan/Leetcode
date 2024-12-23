//let nums = [1, 1, 2, 2, 2, 3];
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
// Example 2:

let nums = [2, 3, 1, 3, 2];
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.


let f = {}, x = [], y = [];

for (let i = 0; i < nums.length; i++) {
  f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
  f[nums[i]]++;
}

for (let key in f) {
  if (f[key] === 1) {
    x.push(Number(key)); 
  } else {
    for (let i = 0; i < f[key]; i++) {
      y.push(Number(key)); 
    }
  }
}

y.sort((a, b) => {
  if (f[a] === f[b]) {
    return b - a;
  }
  return f[a] - f[b]; 
});

// Combine the results
console.log([...x, ...y]);
