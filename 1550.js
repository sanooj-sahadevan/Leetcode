let arr = [1, 2, 1, 1];
// Output: false
// Explanation: There are no three consecutive odds.

let ctr = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    ctr++;
    if (ctr === 3) {
      return true;
    }
  } else {
    ctr = 0;
  }
}

return false;
