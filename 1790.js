const s1 = "bank", s2 = "kanb"


 let a =s1.split("").sort((a,b)=>b-a).join("")
 let b = s2.split("").sort((a,b)=>b-a).join("")

console.log(a===b);

let count = 0

for(i=0;i<s1.length;i++){
    if(s1!==s2){
        count++
    }
    if(count=>2){
        return false
    }
}