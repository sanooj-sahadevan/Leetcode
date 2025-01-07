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
var mergeNodes = function (head) {

    let curr = head.next;
    let sum = 0;
    let dummy = new ListNode(0);
    let result = dummy;
    while (curr) {
        if (curr.val != 0) {
            sum += curr.val;
        } else {
            result.next = new ListNode(sum);
            result = result.next
            sum = 0;
        }

        curr = curr.next
    }

    return dummy.next;
};