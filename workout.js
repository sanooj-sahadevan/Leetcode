let s = "abcd",
  t = "abcde";
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:
// Input: s = "", t = "y"
// Output: "y"

s = s.split("");
t = t.split("");

let nums = [...s,...t]
let f = {}, x = [];

for (let i = 0; i < nums.length; i++) {
    f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
    f[nums[i]]++;
}

for(let key in f){
    if(f[key]===1){
        return f[key]
    }
    if(f[key]%2==1){
        return f[key]
    }
    
}