const  hand = [8,10,12], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

console.log(hand.length);

let n = hand.length

if(n===groupSize) return false


if(n%groupSize===0){
    console.log(true);
}else{
    console.log(false);
}