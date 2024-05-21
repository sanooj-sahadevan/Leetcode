const nums = [-4,-2,1,4,8]
// Output: 1
// Explanation:
// The distance from -4 to 0 is |-4| = 4.
// The distance from -2 to 0 is |-2| = 2.
// The distance from 1 to 0 is |1| = 1.
// The distance from 4 to 0 is |4| = 4.
// The distance from 8 to 0 is |8| = 8.
// Thus, the closest number to 0 in the array is 1.

let x = []

for(i=0;i<nums.length;i++){
x.push(Math.abs(nums[i]-0))
}

let y = Math.min(...x);

if(nums.includes(y)){
console.log(y);
}else{
    console.log(-y);
}
