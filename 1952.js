const n = 9
// Output: false
// Explantion: 2 has only two divisors: 1 and 2.
// Example 2:

// Input: n = 4
// Output: true
// Explantion: 4 has three divisors: 1, 2, and 4.

let ctr = 0
for(let i =1;i<=n;i++){
    if(n%i===0){
        console.log(i);
        ctr++
    }
}

if(ctr==3){
console.log(true);
}else{
    console.log(false);
}