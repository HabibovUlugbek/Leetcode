/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    var temp =head;
    var arr = [];

    while(temp){
        arr.push(temp.val);
        temp=temp.next
    }

    temp = head;
    var  i=0;
    var reverse = false
   while(temp){
       if(arr[i]===left){
       reverse =!reverse
       var index = arr.findIndex(right)
       i=index
       }
       if(reverse){
       i--
       }
       i++
       var val =  arr[i];
           temp.val = val;
            temp = temp.next
   }
   return head;
};
///
var reverseBetween = function(head, m, n) {
    let start = head, cur = head;
    let i = 1;
    while (i < m) {
        start = cur;
        cur = cur.next;
        i++;
    }
    let prev = null, tail = cur;
    while (i <= n) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        i++;
    }
    start.next = prev;
    tail.next = cur;
    return m == 1 ? prev : head; 

};