const s = "leetcode";
Output: 0;
let x=0
for (i = 0; i < s.length; i++) {
  for (j = i + 1; j < s.length; j++) {
    if (s[i] !== s[j]) {

      break;
    }
    

  }

}
console.log(Math.floor(x/2));

