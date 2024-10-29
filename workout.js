let stones = [2, 7, 4, 1, 8, 1];
// Output: 1
// Explanation:
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.

let a = stones.sort((a, b) => a - b);

while (stones.length) {
  if (a.length == 1) {
    break;
  }
  let b = a.pop();
  let bb = a.pop();
  a.push(b - bb);
  a.sort((a, b) => a - b);

}

console.log(a);
