const words = ["leet", "code"],
  x = "e";
Output: [0, 1];

let arr = [];
for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < words[i].length; j++) {
    if (words[i][j] === x) {
      arr.push(i);
      break;
    }
  }
}

console.log(y);
