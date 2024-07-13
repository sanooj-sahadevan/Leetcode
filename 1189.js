let text = "nlaebolko";
// Output: 1
// Example 2:

// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
// not complete
// not complete
let bal = ["b", "a", "l", "o", "o", "n"];
text = text.split("");
console.log(text);

let res = [];
for (let i = 0; i < text.length; i++) {
  if (bal.includes(text[i])) {
    res.push(text[i]);
  }
}

for (i = 0; i < res.length; i++) {
  if (bal.includes(res[i])) {
  }
}
console.log(res);
