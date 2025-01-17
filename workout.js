let nums = [
  19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
];
rowsCount = 5;
colsCount = 4;
// Output:
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
// Example 2:

// Input:
// nums = [1,2,3,4]
// rowsCount = 1
// colsCount = 4
// Output: [[1, 2, 3, 4]]
// Example 3:

// Input:
// nums = [1,3]
// rowsCount = 2
// colsCount = 2
// Output: []
// Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  let output = Array.from({ length: rowsCount }, () =>
    Array(colsCount).fill(0)
  );
  let traverse = -1;
  let currentIndex = [0, -1];
  for (let i = 0; i < this.length; i++) {
    if (i % rowsCount === 0) {
      currentIndex[1] += 1; 
      traverse *= -1;
    } else {
      currentIndex[0] += traverse; 
    }
    output[currentIndex[0]][currentIndex[1]] = this[i]; 
  }
  return output;
};

const result = nums.snail(rowsCount, colsCount);
console.log(result);
