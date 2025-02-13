/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    // let ctr = 0;

    // while (true) {
    //     let x = Math.min(...nums);
    //     if (x < k) {
    //         let index = nums.indexOf(x);
    //         if (index !== -1) {
    //             nums.splice(index, 1);
    //         }
    //         let y = Math.min(...nums);
    //         let index2 = nums.indexOf(y);
    //         if (index2 !== -1) {
    //             nums.splice(index2, 1);
    //         }
    //         let res = x * 2 + y;
    //         nums.unshift(res);
    //         ctr++;
    //         res = 0
    //     } else {
    //         return ctr;

    //     }
    // }
       const queue = new MinPriorityQueue();
    let operations = 0;

    nums.forEach(n => queue.enqueue(n));

    while(queue.size() >= 2 && queue.front().element < k) {
        queue.enqueue(queue.dequeue().element * 2 + queue.dequeue().element);
        operations++;
    }

    return operations;
    
};