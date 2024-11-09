
let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];


let b = [];

for (i = 0; i < str.length; i++) {
  let res = str[i].split("").sort().join("");
  b.push(res);
}





// [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
