const s = "a1c1e1"
Output: "abcdef"

s.split('')
let str =''
for(i=0;i<s.length;i++){
    if(i%2==1){
       str += String.fromCharCode(s[i - 1].charCodeAt() + (s[i]))

    }
}

console.log(str);


