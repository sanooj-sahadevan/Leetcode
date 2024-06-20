// Output: "dc-ba"
// Example 2:

const s = "a-bC-dEf-ghIj";
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
// const s = "ab-cd";
let x = s.split("");
let temp;

for (let i = 0; i < x.length; i++) {
  for (let j = i; j < x.length; j++) {
    s[j].pop().unshift()
  }
}

console.log(x.join(""));
