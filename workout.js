// let s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// let s = "a-bC-dEf-ghIj";
// Output: "j-Ih-gfE-dCba"
// Example 3:

Input: s = "Test1ng-Leet=code-Q!";
// Output: "Qedo1ct-eeLg=ntse-T!

s = s.split("");
let temp;

for (let i = 0; i < Math.floor(s.length / 2); i++) {
  if (/[a-zA-Z]/) {
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  } else {
    continue;
  }
}
console.log(s.join(""));
// return s.join('')
