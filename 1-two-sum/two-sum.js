/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
<<<<<<< HEAD
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }

    mp.set(nums[i], i);
  }
};
=======
    let x = []
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j]=== target) {
                x.push(i, j)
            }
        }
    }
    return x
};
>>>>>>> e72659cba12981a365ba3bbad108c6a54d7d0d8c
