/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function (nums) {
    let x = [];
let smallest = Infinity,
  second = Infinity;

while (nums.length > 0) {
  smallest = Infinity;
  second = Infinity;

  // Find the smallest and second smallest values
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallest) {
      second = smallest;
      smallest = nums[i];
    } else if (nums[i] < second) {
      second = nums[i];
    }
  }

  x.push(second);
  x.push(smallest);

  nums.splice(nums.indexOf(second), 1);
  nums.splice(nums.indexOf(smallest), 1);
}
return x
console.log(x);


};