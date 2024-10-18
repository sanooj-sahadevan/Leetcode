/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
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
return i  
  }
}

return -1

};