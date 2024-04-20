const jewels = "aA", stones = "aAAbbbb"
Output: 3
let ctr=0,ct = 0
jewels.split('')
stones.split('')

for(i=0;i<jewels.length;i++){
    if("a"===jewels[i] || "A"===jewels[i]){
        ctr++
    }
}

for(i=0;i<jewels.length;i++){
    if("a"===jewels[i] || "A"===jewels[i]){
        ct++
    }
}

console.log(ct+ctr);


