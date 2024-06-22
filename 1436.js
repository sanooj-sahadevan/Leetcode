const paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

const start  = new Set()

for(i=0;i<paths.length;i++){
    start.add(paths[i][0])
}

for(i=0;i<paths.length;i++){
   const destination = paths[i][1]
if(!start.has(destination)){
    return destination
}
}