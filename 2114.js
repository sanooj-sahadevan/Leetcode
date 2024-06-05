// /**
//  * @param {string[]} sentences
//  * @return {number}
//  */
// var mostWordsFound = function(sentences) {
//     let length = 0;
// for (let sentence of sentences) {
//     if (sentence.split(' ').length > length) {
//         length = sentence.split(' ').length;
//     };     
// };
// return length
// console.log(length);
// };



String result = "";
       String result2 = "";
  for (int i = 0; i < words.length; i++) {
    String word = words[i];
    if (word == word.split('').reversed.join()) {
      result = word;
      break;
    }
  }

  if (result.isNotEmpty) {
   return result;
  } else {
     return result2; 
  }