let s = "abc",
  t = "ahbgdc";
// Output: true

let i = 0;
for (let char of t) {
  if (char === s[i]) i++;
  if (i === s.length) break;
}

console.log(i === s.length);
