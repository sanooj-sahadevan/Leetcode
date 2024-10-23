/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let length = 0;
for (let sentence of sentences) {
    if (sentence.split(' ').length > length) {
        length = sentence.split(' ').length;
    };     
};
return length
console.log(length);
};