/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
let res = [];
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words.length; j++) {
    if (i !== j) {
      if (words[i].includes(words[j])) {
        res.push(words[j]);
      }
    }
  }
}
console.log(res);

return res.filter((ind, curr) => res.indexOf(ind) == curr);
console.log(x);

};