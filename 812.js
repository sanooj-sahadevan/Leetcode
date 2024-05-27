const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

let f = {}, x = [];

// const cleanedParagraph = paragraph.replace(/[^\w\s]/g, "");
// const filteredWords = cleanedParagraph.split(" ").filter(word => !banWords.includes(word));



// for(let i=0;i<y.length;i++){
//     for(let j=i;j<y.length;j++){
// if(y[i]==y[j]){
//     x.push(y[i])
// }
//     }

// }
// console.log(x);
for (let i = 0; i < y.length; i++) {
    f[y[i]] = 0;
}

for (let i = 0; i < y.length; i++) {
    f[y[i]]++;
}
console.log(f);
// for (let i = 1; i <= paragraph.length; i++) {
//     if (f[i] === undefined || f[i] === 0) {
//         x.push(i);
//     }
// }
// console.log(f);
// console.log(x);

