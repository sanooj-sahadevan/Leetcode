let s = "ab#c",
  t = "ad#c";
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
// let s = "ab#c";  // example string
// let t = "ad#c";  // example string

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

console.log(s.join("") === t.join(""));
