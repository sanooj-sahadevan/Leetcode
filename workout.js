Input: words = ["Hello", "Alaska", "Dad", "Peace"];
// Output: ["Alaska","Dad"]

// Input: words = ["omk"]
// Output: []

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]


let a = "qwertyuiop".split("");
let b = "asdfghjkl".split("");
let c = "zxcvbnm".split("");
console.log(a);


let res = [];

for (let i = 0; i < words.length; i++) {
  let lowerWord = words[i].toLowerCase(); // Make it case-insensitive
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

