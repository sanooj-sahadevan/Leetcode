var getMinDistance = function (nums, target, start) {
    
  let x = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      x.push(Math.abs(i - start));
      
    }
  }

  return  Math.min(...x);
};

let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

(target = 1), (start = 9);

console.log(getMinDistance(nums, target, start));

