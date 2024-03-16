let nums = [10, 2];
let result = `\"${nums.map(num => `${num}`).join('')}\"`;

let sortedArray = result.slice(1, -1).split('').map(Number);
sortedArray.sort((a, b) => b - a); 
let sortedResult = `\"${sortedArray.join('')}\"`;
console.log(sortedResult); 
