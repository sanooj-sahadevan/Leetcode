// let s = "leetcode";
// Output: 0
// xplanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.
// Example 2:
Input: s = "loveleetcode";
// Output: 2
// Example 3:
// Input: s = "aabb"
// Output: -1
let res = 0
let f = {},
  x = [];
let y = s.split("");
for (let i = 0; i < y.length; i++) {
  f[y[i]] = 0;
}

for (let i = 0; i < y.length; i++) {
  f[y[i]]++;
}

for(let key in f){
  if(f[key]==1){
    res = key
    break;
  }
}


for(i =0;i<y.length;i++){
  if(y[i]===res){
    console.log(i);
    break
  }
}


console.log(res);
console.log(f);
