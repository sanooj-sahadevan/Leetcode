/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];

for (let i = 0; i < nums.length; i++) {
  let currentSubsetSize = res.length;
  for (let j = 0; j < currentSubsetSize; j++) {
    res.push([...res[j], nums[i]]);
  }
}
return res
console.log(res);
    
    
};