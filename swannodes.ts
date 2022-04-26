/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    let counter = 1;
    let list = head;
    while(head){
        if(counter%2 && head.next){
            let val = head.val;
            head.val = head.next.val;
            head.next.val = val;
        }
        head = head.next;
        counter++
    }
    return list
};
