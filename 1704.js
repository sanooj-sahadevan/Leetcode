const s = "book";

let a = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

s.split();
let x = [],
  z = [];
for (i = 0; i < s.length; i++) {
  if (i < s.length / 2) {
    x.push(s[i]);
  } else {
    z.push(s[i]);
  }
}
let ctr=0
for(i=0;i<x.length;i++){
    if(a.includes(x[i])){
        ctr++
}}
let ct =0
for(i=0;i<z.length;i++){
    if(a.includes(z[i])){
        ct++
}}



console.log(ctr);
console.log(ct);

console.log(x);
console.log(z);
