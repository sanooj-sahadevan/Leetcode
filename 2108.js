const words = ["abc","car","ada","racecar","cool"]
// Output: "ada"

let x = []
for (let word of words) {
    if(word.split('').reverse('').join('')===word){
       
      x.push(word)
      break
    }
    
}

console.log(x.join(''));

