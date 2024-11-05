/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
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
        return key
    }
     if(f[key]%2==1){
        return key
    }
    
}


};