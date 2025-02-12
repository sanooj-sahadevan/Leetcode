//let s = "A man, a plan, a canal: Panama";
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
Input: s = "race a car";
// Output: false
// Explanation: "raceacar" is not a palindrome.

var word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
console.log(word.split(" ").reverse().join("") ===word);
console.log(word);
