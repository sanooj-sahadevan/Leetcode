const nums = [1,2,1,3,2,5]
Output: [3,5]

let f = {}, x = [];

for (let i = 0; i < nums.length; i++) {
    f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
    f[nums[i]]++;
}



for(i=0;i<nums.length;i++){
    if(f[nums[i]]===1){
        x.push(nums[i])
    }
}

console.log(f);
console.log(x);
