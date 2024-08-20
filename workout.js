Input: (list1 = ["happy", "sad", "good"]), (list2 = ["sad", "happy", "good"]);

// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".
// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.
let res = [];
for (i = 0; i < list1.length; i++) {
  for (j = 0; j < list2.length; j++) {
    if (list1[i] === list2[j]) {
      res.push(i + j);
    }
  }
}

let min = Math.min(...res);
let result = []
for(i=0;i<list1.length;i++){
  for(j=0;j<list2.length;j++){
    if(list1[i]===list2[j] &&  i+j===min  ){
      result.push(list1[i])
      
    }
  }
}
