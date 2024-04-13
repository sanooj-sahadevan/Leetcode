/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    word = word.replace(/[^0-9]/g, ' ');
    let parts = word.split(/\s+/);
    let uniqueIntegers = new Set();
    for (let part of parts) {
      if (part !== '') {
        uniqueIntegers.add(part.replace(/^0+/, ''));
      }
    }
    return uniqueIntegers.size;
  };