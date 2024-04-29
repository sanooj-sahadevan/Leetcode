const nums = [3,2,3]
Output: 3


let f ={}
 for (let i = 0; i < nums.length; i++) {
    f[nums[i]] = 0;
}

for (let i = 0; i < nums.length; i++) {
    f[nums[i]]++;
}
let maxFreq = 0

for(let val in f){
    if(f[val]>maxFreq){
        maxFreq=f[val]
    }
}
for(let val in f){
if(f[val]==maxFreq){
   console.log(val);
}

}