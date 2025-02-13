let nums = [2, 11, 10, 1, 3],
  k = 10;
// Output: 2
// Explanation: In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
// In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
// At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
// It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

let ctr = 0;

while (true) {
  let x = Math.min(...nums);
  if (x < k) {
    console.log(true);

    let index = nums.indexOf(x);
    if (index !== -1) {
      nums.splice(index, 1);
    }
    let y = Math.min(...nums);
    let index2 = nums.indexOf(y);
    if (index2 !== -1) {
      nums.splice(index2, 1);
    }
    let res = x * 2 + y;
    nums.unshift(res);
    ctr++;
    console.log(res);
    console.log(x, y);
    console.log(nums);
    res = 0
  } else {
    //return ctr;
    console.log(ctr);
    break;
  }
}
