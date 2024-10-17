/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  
let x = [];

for (let i = 0; i < accounts.length; i++) {
  let sum = 0;
  for (let j = 0; j < accounts[i].length; j++) {
    sum += accounts[i][j];
  }
  x.push(sum);
}

let largest = 0;
for (i = 0; i < x.length; i++) {
  if (x[i] > largest) {
    largest = x[i];
  }
}
return largest
console.log(largest);

console.log(x); 

};