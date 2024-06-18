// const nums = [1, 3, 2, 1, 3, 2, 2, 2, 2];
// // Output: [3,1]
// // Explanation:
// // Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// // Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// // Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// // No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

// // let ctr = 0

// // for (i = 0; i < nums.length; i++) {
// //   for (j = i; j < nums.length; j++) {
// //     if (nums[i] == nums[j]) {
// //       ctr++;
// //       break;
// //     }

// //   }
// // }

// let f = {},
//   x = [],
//   ctr = 0,
//   c = 0,
//   count = 0;
// let res = [];

// for (let i = 0; i < nums.length; i++) {
//   f[nums[i]] = 0;
// }

// for (let i = 0; i < nums.length; i++) {
//   f[nums[i]]++;
// }
// for (let key in f) {
//   if (f[key] % 2 === 0) {
//     ctr++;
//   } else {
//     c++;
//   }
// console.log(key);
//   if (key % 2 !== 0) {
//     count++;
//   }
// }

// console.log(count);
// // let sum = 0
// // // for(i=0;i<c;i++){
// //   sum   = ((c-1)/2)

// // // }
// // console.log(sum);
// // console.log(ctr);
// // res.push(ctr + c);
// // res.push(c);

// // console.log(res);

// // ctr = Math.floor(ctr / 2);
// // console.log(ctr);

let obj = { name: "san" };

let arr = [1, 23];

// const set = new Set();

// set.add(1);
// set.add(2);
// set.add(1);
// set.add(2);
// set.add(obj);
// set.add(arr);
// set.add(arr2);

// console.log(set);

let map = new weekMap();

// map.set("name", "sanooj");
// map.set("name", "hunais");
map.set(arr,obj)
// map.set(arr,arr2)

console.log(map);

