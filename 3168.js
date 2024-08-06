Input: s = "EEEEEEE";
// Output: 7
// Explanation:
// After each second, a person enters the waiting room and no person leaves it. Therefore, a minimum of 7 chairs is needed.
// Example 2:
// Input: s = "ELELEEL"
// Output: 2
// Explanation:
// Input: s = "ELEELEELLL";
// Output: 3
let res = []
s = s.split("");
console.log(s);
let ctr = 0;
for (i = 0; i < s.length; i++) {
  if (s[i] == "E") {
    ctr ++
    res.push(ctr)
  } else {
    ctr --
    res.push(ctr)

  }
}
console.log(Math.max(...res));
