/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {

 let similar = 0;
   let single = 0;
   let freq = {}
   for(const num of nums) {
       freq[num] = (freq[num] || 0) +1
   }
   for(const num in freq) {
       if(freq[num] % 2 === 0 ) {
           similar += freq[num] / 2
       } else {
           single++
           freq[num] = freq[num] - 1
           if(freq[num] === 0) {
               continue
           } else {
            similar += freq[num] / 2
           }
       }
   }
   return [similar,single]
};