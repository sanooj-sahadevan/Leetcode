const s = "foobar",
  letter = "o";
Output: 33;

s.split(" ");
let ctr = 0;
for (i = 0; i < s.length; i++) {
  if (letter === s[i]) {
    ctr++;
  }
}
console.log(Math.floor((ctr / s.length) * 100));
console.log(ctr);
console.log(s);
