// let gain = [-5,1,5,0,-7]
// Output: 1
// Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
// Example 2:

Input: gain = [-4,-3,-2,-1,4,3,2]
// Output: 0
// Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.


let sum = 0
let x = [0]
for(let i = 0;i<gain.length;i++){
sum +=gain[i]
x.push(sum)
}
console.log(x);

console.log(Math.max(...x));
