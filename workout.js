let head = [0, 3, 1, 0, 4, 5, 2, 0];
// Output: [4,11]
// Explanation:
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.
// Example 2:

// Input: head = [0,1,0,3,0,2,2,0]
// Output: [1,3,4]
// Explanation:
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 1 = 1.
// - The sum of the nodes marked in red: 3 = 3.
// - The sum of the nodes marked in yellow: 2 + 2 = 4.

var mergeNodes = function (head) {

  
  let curr = this.head;
  let sum = 0;
  while (curr) {
    if (curr.value != 0) {
      sum += curr.value;
    } else {
      sum = 0;
    }
  }
};
