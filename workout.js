// Example 1:

Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

let res = s.split(" ").splice(' ').splice(',').splice(':').join("").lowercase('');

console.log(res === s);

console.log(res);
