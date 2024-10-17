/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

let x = headA
let y  = headB

while(x!=y){
    x = x === null ?headB:x.next
    y = y === null ? headA:y.next
}
    return x
};