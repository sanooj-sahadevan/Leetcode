const position = [1,2,3]
// Output: 1
// Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
// Second step: Move the chip at position 2 to position 1 with cost = 1.
// Total cost is 1.
// Example 2:
// Input: position = [2,2,2,3,3]
// Output: 2
// Explanation: We can move the two chips at position  3 to position 2. Each move has cost = 1. The total cost = 2.
// Example 3:

// Input: position = [1,1000000000]
// Output: 1
 

let even = 0
let odd  = 0

for(let i =0;i<position.length;i++){
    if(position[i]%2===0){
        even++
    }else{
        odd++
    }
}
if(even<odd){
    console.log(even);
}else{
    console.log(odd);
}



    // return even < odd ? even : odd