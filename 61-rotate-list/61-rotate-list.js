/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    let curr = head;
    let arr = [];
    while (curr){
        arr.push(curr.val)
        curr = curr.next        
    }
    k = k % arr.length;
    // remove and add k times
    while (k){
        const el = arr.pop();
        arr = [el].concat(arr);
        k--;
    }
    
    // reconstruct values
    curr = head;
    let i = 0;
    while (curr){
        curr.val = arr[i];
        i++
        curr = curr.next
    }
    return head;
};