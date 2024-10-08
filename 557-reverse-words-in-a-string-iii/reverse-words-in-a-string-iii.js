/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const x = s.split(' '); 
    const z = x.map(x => x.split('').reverse().join('')); 
    return z.join(' '); 
}
