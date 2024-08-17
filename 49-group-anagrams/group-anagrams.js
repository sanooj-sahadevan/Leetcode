/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

 let obj = {};

let sort;
let a = [];

for (let str of strs) {
  sort = str.split("").sort().join("");
  if (!obj[sort]) {
    obj[sort] = [];
  }
  obj[sort].push(str);
}

return  Object.values(obj);


   };