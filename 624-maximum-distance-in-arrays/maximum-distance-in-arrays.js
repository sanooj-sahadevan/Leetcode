/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {

let maxDifference = 0;

let currentMin = arrays[0][0];
let currentMax = arrays[0][arrays[0].length - 1];

for (let i = 1; i < arrays.length; i++) {
  let minElement = arrays[i][0];
  let maxElement = arrays[i][arrays[i].length - 1];

  maxDifference = Math.max(
    maxDifference,
    Math.abs(maxElement - currentMin),
    Math.abs(currentMax - minElement)
  );

  currentMin = Math.min(currentMin, minElement);
  currentMax = Math.max(currentMax, maxElement);
}
return maxDifference
};