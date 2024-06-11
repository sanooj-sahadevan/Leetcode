let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

let x = [],
  y = [];
for (let i = 0; i < arr2.length; i++) {
  let current = arr2[i];
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] === current) {
      x.push(arr1[j]);
    }
  }
}

for (i = 0; i < arr1.length; i++) {
  if (!arr2.includes(arr1[i])) {
    y.push(arr1[i]);
  }
}

let ans = [...x, ...y];
console.log(ans);
console.log(x);
console.log(y);
