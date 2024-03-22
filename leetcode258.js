/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10){
        return num
    }
   
let  x;
num = [...num.toString()];

  x = num.reduce((acc, curr) => acc += Number(curr),0);

return addDigits(x)
console.log(x);

};