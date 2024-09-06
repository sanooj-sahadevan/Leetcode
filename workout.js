Input: moves = "UD";
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
// Example 2:

// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

moves.split("");
let sum = 0;
for (i = 0; i < moves.length; i++) {
  if (moves[i] === "U") {
    sum += 1;
  }
  if (moves[i] === "D") {
    sum -= 1;
  }
  if (moves[i] === "L") {
    sum += 1;
  }
  if (moves[i] === "R") {
    sum -= 1;
  }
}

if(sum==0)