// const nums = [1, 1, 1, 1, 1, 1];

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var isPossibleToSplit = function (nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] === nums[i + 2]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// console.log(isPossibleToSplit(nums));


// var canConstruct = function (ransomNote, magazine) {
//   for (const char of magazine) {
//     ransomNote = ransomNote.replace(char, "");
//   }
  
//   if (!ransomNote) return true;
//   else return false;
// };



/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function(releaseTimes, keysPressed) {
  let longestKey = keysPressed[0];
  let longestTime = releaseTimes[0];
  for(let i = 1; i < keysPressed.length; ++i){
      const currentTime = releaseTimes[i] - releaseTimes[i-1];
      if( currentTime > longestTime){
          longestTime = currentTime;
          longestKey = keysPressed[i];
      }
      else if( currentTime === longestTime && keysPressed[i] > longestKey){
          longestTime = currentTime;
          longestKey = keysPressed[i];
      }
  }
  return longestKey;
};