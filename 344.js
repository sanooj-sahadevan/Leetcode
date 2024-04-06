const s = ["h", "e", "l", "l", "o"];
Output: ["o", "l", "l", "e", "h"];

let left = 0
let right = s.length-1

while(start<end){
    let temp  = s[left]
    s[left] = s[right]
    s[right] = temp
left ++
end--
}
