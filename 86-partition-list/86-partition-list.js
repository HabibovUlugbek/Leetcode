/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let left = [];
    let right = [];
    let temp = head;
    while(temp){
        if(temp.val<x) left.push(temp.val);
        else right.push(temp.val);
        temp = temp.next;
    }
    right = [...left, ...right];
    temp = head 
    let i = 0;
    while(temp){
        temp.val = right[i]
        temp = temp.next;
        i++
    }
    return head;
};