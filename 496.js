const nums1 = [4, 1, 2],
  nums2 = [1, 3, 4, 2];
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
let res = [];
for (let i = 0; i < nums1.length; i++) {
  let found = false;
  for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++) {
    if (nums2[j] > nums1[i]) {
      res.push(nums2[j]);
      found = true;
      break;
    }
  }
  if (!found) {
    res.push(-1);
  }
}

console.log(res);