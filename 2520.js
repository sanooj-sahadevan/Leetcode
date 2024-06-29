let num = 121;
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

let arr = String(num);

console.log(arr);

let ctr = 0;

for (i = 0; i < arr.length; i++) {
  if (num % arr[i] === 0) {
    ctr++;
  }
}
console.log(ctr);

// var countKeyChanges = function(s) {
//   let arr = s.toUpperCase().split('');
//   let count = 0;

//   for(let i=0; i<arr.length; i++) {
//       if(arr[i] !== arr[i+1])
//           count++;
//   }

//   return(count - 1); 
// };
