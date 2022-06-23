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
var middleNode = function(head) {

     let fast = head;
      let slow = head;

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
        // var List = new ListNode(0);
    var head1 = slow; 
    


    return head1
};