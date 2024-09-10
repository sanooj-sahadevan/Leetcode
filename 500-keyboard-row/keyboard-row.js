/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
   

let a = "qwertyuiop".split("");
let b = "asdfghjkl".split("");
let c = "zxcvbnm".split("");
console.log(a);


let res = [];

for (let i = 0; i < words.length; i++) {
  let lowerWord = words[i].toLowerCase(); 
  if (
    lowerWord.split("").every(char => a.includes(char)) || 
    lowerWord.split("").every(char => b.includes(char)) || 
    lowerWord.split("").every(char => c.includes(char))
  ) {
    res.push(words[i]);
  }
}

console.log(res);
return res;



};