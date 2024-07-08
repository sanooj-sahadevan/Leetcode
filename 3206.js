//  colors = [1, 1, 1];
// Output: 0
// Explanation:
// Example 2:
const colors = [0, 1, 0];

// const colors = [0,1,0,0,1]
// Output: 1
// Explanation:
// Alternating groups: 010,   010, 101

let nums = [];
for (let i = 0; i < colors.length; i++) {
  // if(colors[i]=== colors[i+1]){
  //     console.log('0');
  // }
  nums.push(colors[i]);
}

// if(nums[0]!==nums[nums.length-1]){
    for (let i = 0; i < colors.length; i++) {
        nums.push(colors[i]);
      }
// }


console.log(nums);
let ctr = 0;
for (let i = 0; i < colors.length; i++) {
    let j  = i+1
    let k = i+2
    if (nums[i] === nums[k] && nums[i] !== nums[j]) {
        console.log(true);
    ctr++;
  }
}
console.log(ctr);
