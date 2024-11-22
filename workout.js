
let nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 


let f = {},
x = [];

for (let i = 0; i < nums.length; i++) {
f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
f[nums[i]]++;
}
let res = [];
for (let i in f) {
if (f[i] == 2) {
    let x = i;
    console.log(typeof(i))
    res.push(Number(i));
}
}
// return  Number(res)
console.log (res)