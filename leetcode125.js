/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

let x = word.split("").reverse().join("")
console.log(x)
if(x==word){
    return true
}else{
    return false
}




    
};