/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

s = s.split("");
t = t.split("");

for (let i = 0; i < s.length; i++) {
  if (s[i] === "#") {
    s.splice(i, 1);
    if (i > 0) {
      s.splice(i - 1, 1);
      i -= 2;
    } else {
      i--;
    }
  }
}

for (let i = 0; i < t.length; i++) {
  if (t[i] === "#") {
    t.splice(i, 1);
    if (i > 0) {
      t.splice(i - 1, 1);
      i -= 2;
    } else {
      i--;
    }
  }
}
console.log(s);
 return s.join("") === t.join("")

 

    
};