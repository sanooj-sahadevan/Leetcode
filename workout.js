let nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

let res = [[]];

for (let i = 0; i < nums.length; i++) {
  let currentSubsetSize = res.length;
  for (let j = 0; j < currentSubsetSize; j++) {
    res.push([...res[j], nums[i]]);
  }
}

console.log(res);
