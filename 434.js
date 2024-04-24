// const s = ""
Output: 5;
const s = "Hello, my name is John";

let a = s.replaceAll(",", "").split(" ");
let c = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] !== "") {
    c++;
  }
}

console.log(c);
