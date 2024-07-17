const nums = [1,2,3,4]

// Output: 3
// Explanation:
// All array elements can be made divisible by 3 using 3 operations:
// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.

let ctr =0
for(let i =0;i<nums.length;i++){
    if(nums[i] % 3 != 0){
        ctr++
    }
}
console.log(ctr);