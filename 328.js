/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next){
        return head
    }
    let odd = head
    let even = head.next
    let evenHead = even

    while(even&&even.next){
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    }
    odd.next = evenHead
    return head
};



// if (n === 1) return true
//     if (n <= 0) return false

//     while (n !== 0) {
//       if (n % 5 === 0) {
//         return isUgly(n / 5)
//       } else if (n % 3 === 0) {
//         return isUgly(n / 3)
//       } else if (n % 2 === 0) {
//         return isUgly(n / 2)
//       }
//       return false
//     }

// /**
//  * @param {string} word
//  * @return {boolean}
//  */
// var isValid = function(word) {
//     if (word.length <3) {
//         return false;
//     }
    
   
//         var vowels = ["a", "e", "i", "o", "u"];
        
//         let vowelCheck = false;
//         let consonantCheck = false;
        
//         for (let char of word) {
//             if (vowels.includes(char.toLowerCase())) {
//                 vowelCheck = true;
//             } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//                 consonantCheck = true;
//             }
//             else if (char =="$" || char =="#" || char =="@"){
//               return false
//             }
//         }
        
//         if (vowelCheck && consonantCheck) {
//             return true;
//         }
//     return false;
//   };