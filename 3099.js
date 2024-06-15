const x = 18;

// Output: 9

// Explanation:

// The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

for (i = 0; i < x; i++) {
  if (x == i * 2) {
    console.log(i);
  }
}

// let num = x.toString().split('');
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + parseInt(num[i]);
// }
// return x % sum === 0 ? sum : -1;

// temp=x;
//     sum=0;
//     while(temp!==0){
//         sum+=temp%10;
//         temp=Math.floor(temp/10)
//     }
//     if(x%sum===0) return sum;
//     else return -1;
