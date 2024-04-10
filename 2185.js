const words = ["pay", "attention", "practice", "attend"],
  pref = "at";
let ctr = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].startsWith(pref)) {
    ctr++;
  }
}

console.log(ctr);
