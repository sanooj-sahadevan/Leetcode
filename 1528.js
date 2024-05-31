
const s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

let a = new Array(indices)
let x = s.split('')

for (let i = 0; i < s.length; i++) {
    a[indices[i]] = x[i];
}

let res = a.join('')
console.log(res);
































































