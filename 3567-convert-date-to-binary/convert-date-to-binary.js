/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {

    
let x = date.split("-");

let res = [];

for (let i = 0; i < x.length; i++) {
  let binary = Number(x[i]).toString(2);
  console.log(binary);
  res.push(binary);
}
return res.join('-')
console.log(res.join('-'));

    
};