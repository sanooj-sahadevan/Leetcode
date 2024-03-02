const nums = [3, 3, 3];

if (
  nums[0] + nums[1] > nums[2] &&
  nums[1] + nums[2] > nums[0] &&
  nums[2] + nums[0] > nums[1]
) {
  if (nums[0] === nums[1] && nums[1] === nums[2] && nums[2] === nums[0]) {
    console.log("1");
    return "equilateral";
  } else if (
    nums[0] === nums[1] ||
    nums[1] === nums[2] ||
    nums[2] === nums[0]
  ) {
    return "isosceles";
  } else {
    return "scalene";
  }
} else {
  return "none";
}

// if (nums[0] === nums[1] && nums[1] === nums[2] && nums[2] === nums[0]) {
//   console.log("1");
//   return "equilateral";
// } else if (nums[0] === nums[1] || nums[1] === nums[2] || nums[2] === nums[0]) {
//   return "isosceles";
// } else if (
//   nums[0] + nums[1] > nums[2] &&
//   nums[1] + nums[2] > nums[0] &&
//   nums[2] + nums[0] > nums[1]
// ) {
//   return "scalene";
// } else {
//   return "none";
// }
