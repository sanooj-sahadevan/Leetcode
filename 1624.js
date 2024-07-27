// let s = "aa";
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

Input: s = "abca";
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.

let current = s.length - 1;
for (let i = s.length - 1; i > 0; i--) {
    for (let j = 0; j + i < s.length; j++) {
        if (s[j] === s[j + i]) {
            return i - 1;
        }
    }
    current--;
}
return -1;