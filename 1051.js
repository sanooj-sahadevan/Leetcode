// const heights = [1, 1, 4, 2, 1, 3];
// // Output: 3
// // Explanation:
// // heights:  [1,1,4,2,1,3]
// // expected: [1,1,1,2,3,4]

// let a = [...heights];

// let x = a.sort();
// let ctr = 0;
// for (i = 0; i < x.length; i++) {
//   if (x[i] !== heights[i]) {
//     ctr++;
//   }
// }

// console.log(ctr);

// console.log(x);
// console.log(heights);



let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
let arr2 = [2, 1, 4, 3, 9, 6];

function relativeSortArray(arr1, arr2) {
    // Create a frequency map for arr1
    let freqMap = new Map();
    for (let num of arr1) {
        if (freqMap.has(num)) {
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            freqMap.set(num, 1);
        }
    }

    // Result array to store the final output
    let result = [];

    // Add elements from arr2 based on the frequency map
    for (let num of arr2) {
        if (freqMap.has(num)) {
            let count = freqMap.get(num);
            for (let i = 0; i < count; i++) {
                result.push(num);
            }
            freqMap.delete(num);
        }
    }

    // Add the remaining elements from arr1 that are not in arr2, sorted in ascending order
    let remainingElements = [];
    for (let [num, count] of freqMap) {
        for (let i = 0; i < count; i++) {
            remainingElements.push(num);
        }
    }
    remainingElements.sort((a, b) => a - b);
    result.push(...remainingElements);

    return result;
}

console.log(relativeSortArray(arr1, arr2)); // Output: [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]

