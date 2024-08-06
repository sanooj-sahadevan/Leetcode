/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let res = []
s = s.split("");
console.log(s);
let ctr = 0;
for (i = 0; i < s.length; i++) {
  if (s[i] == "E") {
    ctr ++
    res.push(ctr)
  } else {
    ctr --
    res.push(ctr)

  }
}
return Math.max(...res)
console.log(res);

};