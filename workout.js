let tiles = "AAB";
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

tiles = tiles.split("").sort().join("");
let used = new Array(tiles.length).fill(false);

const backtrack = () => {
  let count = 0;
  for (let i = 0; i < tiles.length; i++) {
    if (used[i] || (i > 0 && tiles[i] === tiles[i - 1] && !used[i - 1]))
      continue;
    used[i] = true;
    count += 1 + backtrack();
    used[i] = false;
  }
  console.log(count);

  return count;
};

backtrack()