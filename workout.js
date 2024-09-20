// ["KthLargest", "add", "add", "add", "add", "add"]
let nums = [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]];

// Output: [null, 4, 5, 5, 8, 8]
// Explanation:
// KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
// kthLargest.add(3); // return 4
// kthLargest.add(5); // return 5
// kthLargest.add(10); // return 5
// kthLargest.add(9); // return 8
// kthLargest.add(4); // return 8
// Input:
// ["KthLargest", "add", "add", "add", "add"]
// [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

// Output: [null, 7, 7, 7, 8]

// Explanation:

// KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
// kthLargest.add(2); // return 7
// kthLargest.add(10); // return 7
// kthLargest.add(9); // return 7
// kthLargest.add(9); // return 8

let k = 0;
let res = [];
for (i = 0; i < nums.length; i++) {
  k = nums[0][0];
}
let x;
for (j = 0; j < nums.length; j++) {
  for (i = 0; i < nums.length; i++) {
    x = nums[j].flat();
  }

  let result = x.sort((a, b) => a - b);
  res.push(result[k - 1]);
}
console.log(res);
