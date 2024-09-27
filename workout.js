// let nums = [0,1,1,0]

// Output: [0,1]
// Explanation:
// The numbers 0 and 1 each appear twice in the array.
// Example 2:
// Input: nums = [0,3,2,1,3,2]
// Output: [2,3]
// Explanation:
// The numbers 2 and 3 each appear twice in the array.
// Example 3:
Input: nums = [7,1,5,4,3,4,6,0,9,5,8,2]
// Output: [4,5]
// Explanation:
// The numbers 4 and 5 each appear twice in the array.


let f = {}, x = [];

for (let i = 0; i < nums.length; i++) {
    f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
    f[nums[i]]++;
}

for(let key in f){
    if(f[key]>=2){
        x.push(key)
    }
    
}

console.log(typeof(x));

