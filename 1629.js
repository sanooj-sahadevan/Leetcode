const releaseTimes = [9, 29, 49, 50],
  keysPressed = "cbcd";
// Output: "c"
let x = [];
for (i = 0; i < releaseTimes; i++) {
  x.push(releaseTimes[i] - releaseTimes[i - 1]);
}

console.log(x);
