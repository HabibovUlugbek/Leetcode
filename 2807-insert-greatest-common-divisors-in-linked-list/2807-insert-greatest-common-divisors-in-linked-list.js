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
var insertGreatestCommonDivisors = function(head) {
    let first = head
    let second = head.next 
    
    while(second){
        let gcd_2 = gcd(first.val, second.val)
        
        let newNode = new ListNode(gcd_2, second)
        
        first.next = newNode
        first = second 
        second = second.next
    }
    return head
};

function gcd(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}