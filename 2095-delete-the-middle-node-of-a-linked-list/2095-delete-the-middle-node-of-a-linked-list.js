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
var deleteMiddle = function(head) {
    let len = 0;
    let temp = head; 
    while(temp){
        len++;
        temp = temp.next;
    }
    if(len == 1) return temp;
    let position = Math.trunc(len/2)+1;
    temp = head ;
    let count = 0;
    while(temp){
        count++;
        if(count === position-1 ){
            temp.next = temp.next.next;
        }
        temp = temp.next;
    }
    return head;
};