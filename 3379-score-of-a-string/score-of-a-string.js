/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    
console.log( s.split(''));

let sum = []
let x = 0
for(i=0;i<s.length-1;i++){
  sum.push(s.charCodeAt(i)-s.charCodeAt(i+1))


}


for(i=0;i<sum.length;i++){
    x+= Math.abs(sum[i])
}
console.log( sum );
console.log(x);
return x
};