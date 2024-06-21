const s = "loveleetcode",
  c = "e";
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Explanation: The character 'e' appears at indices 3, 5, 6, and 11 (0-indexed).
// The closest occurrence of 'e' for index 0 is at index 3, so the distance is abs(0 - 3) = 3.
// The closest occurrence of 'e' for index 1 is at index 3, so the distance is abs(1 - 3) = 2.
// For index 4, there is a tie between the 'e' at index 3 and the 'e' at index 5, but the distance is still the same: abs(4 - 3) == abs(4 - 5) = 1.
// The closest occurrence of 'e' for index 8 is at index 6, so the distance is abs(8 - 6) = 2.

let res = [];

for (let i = 0; i < s.length; i++) {
  let min = Infinity;
  for (let j = 0; j < s.length; j++) {
    if (s[j] === c) {
      min = Math.min(min, Math.abs(i - j));
    }
  }
  res.push(min);
}

console.log(res);
