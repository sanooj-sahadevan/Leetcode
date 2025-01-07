let boxes = "110";
// Output: [1,1,3]
// Explanation: The answer for each box is as follows:
// 1) First box: you will have to move one ball from the second box to the first box in one operation.
// 2) Second box: you will have to move one ball from the first box to the second box in one operation.
// 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
// Example 2:

// Input: boxes = "001011"
// Output: [11,8,5,4,3,4]
boxes = boxes.split("");
//console.log(boxes);

let x = [],
  sum = 0;
for (let i = 0; i < boxes.length; i++) {
  let sum = 0;
  for (let j = 0; j < boxes.length; j++) {
    if (boxes[j] === "1") {
      sum += Math.abs(i - j);
    }
  }
  x.push(sum)     
}
  
console.log(x);
