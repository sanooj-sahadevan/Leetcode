const s = "string";
// Output: "rtsng"

let x = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] == "i"){
            x.reverse(); 
        }else{
            x.push(s[i])
        }
    }
    let y = x.join('')
   console.log(y);


